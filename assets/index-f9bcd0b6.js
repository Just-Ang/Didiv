function cC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Na(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function jt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var hy={exports:{}},vu={},my={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),dC=Symbol.for("react.portal"),fC=Symbol.for("react.fragment"),pC=Symbol.for("react.strict_mode"),hC=Symbol.for("react.profiler"),mC=Symbol.for("react.provider"),gC=Symbol.for("react.context"),vC=Symbol.for("react.forward_ref"),yC=Symbol.for("react.suspense"),xC=Symbol.for("react.memo"),bC=Symbol.for("react.lazy"),hg=Symbol.iterator;function wC(e){return e===null||typeof e!="object"?null:(e=hg&&e[hg]||e["@@iterator"],typeof e=="function"?e:null)}var gy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vy=Object.assign,yy={};function uo(e,t,n){this.props=e,this.context=t,this.refs=yy,this.updater=n||gy}uo.prototype.isReactComponent={};uo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};uo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xy(){}xy.prototype=uo.prototype;function th(e,t,n){this.props=e,this.context=t,this.refs=yy,this.updater=n||gy}var nh=th.prototype=new xy;nh.constructor=th;vy(nh,uo.prototype);nh.isPureReactComponent=!0;var mg=Array.isArray,by=Object.prototype.hasOwnProperty,rh={current:null},wy={key:!0,ref:!0,__self:!0,__source:!0};function Sy(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)by.call(t,r)&&!wy.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ba,type:e,key:o,ref:a,props:i,_owner:rh.current}}function SC(e,t){return{$$typeof:Ba,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ih(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ba}function _C(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gg=/\/+/g;function Vc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_C(""+e.key):t.toString(36)}function Ns(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ba:case dC:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Vc(a,0):r,mg(i)?(n="",e!=null&&(n=e.replace(gg,"$&/")+"/"),Ns(i,t,n,"",function(u){return u})):i!=null&&(ih(i)&&(i=SC(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(gg,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",mg(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Vc(o,l);a+=Ns(o,t,n,s,i)}else if(s=wC(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Vc(o,l++),a+=Ns(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function as(e,t,n){if(e==null)return e;var r=[],i=0;return Ns(e,r,"","",function(o){return t.call(n,o,i++)}),r}function CC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},Bs={transition:null},EC={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Bs,ReactCurrentOwner:rh};re.Children={map:as,forEach:function(e,t,n){as(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return as(e,function(){t++}),t},toArray:function(e){return as(e,function(t){return t})||[]},only:function(e){if(!ih(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=uo;re.Fragment=fC;re.Profiler=hC;re.PureComponent=th;re.StrictMode=pC;re.Suspense=yC;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EC;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vy({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=rh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)by.call(t,s)&&!wy.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ba,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:gC,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mC,_context:e},e.Consumer=e};re.createElement=Sy;re.createFactory=function(e){var t=Sy.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:vC,render:e}};re.isValidElement=ih;re.lazy=function(e){return{$$typeof:bC,_payload:{_status:-1,_result:e},_init:CC}};re.memo=function(e,t){return{$$typeof:xC,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Bs.transition;Bs.transition={};try{e()}finally{Bs.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return yt.current.useCallback(e,t)};re.useContext=function(e){return yt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};re.useEffect=function(e,t){return yt.current.useEffect(e,t)};re.useId=function(){return yt.current.useId()};re.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return yt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};re.useRef=function(e){return yt.current.useRef(e)};re.useState=function(e){return yt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return yt.current.useTransition()};re.version="18.2.0";my.exports=re;var x=my.exports;const K=Na(x),gf=cC({__proto__:null,default:K},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kC=x,PC=Symbol.for("react.element"),TC=Symbol.for("react.fragment"),OC=Object.prototype.hasOwnProperty,jC=kC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MC={key:!0,ref:!0,__self:!0,__source:!0};function _y(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)OC.call(t,r)&&!MC.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:PC,type:e,key:o,ref:a,props:i,_owner:jC.current}}vu.Fragment=TC;vu.jsx=_y;vu.jsxs=_y;hy.exports=vu;var f=hy.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}var fr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(fr||(fr={}));const vg="popstate";function $C(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return vf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hl(i)}return DC(t,n,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function oh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function IC(){return Math.random().toString(36).substr(2,8)}function yg(e,t){return{usr:e.state,key:e.key,idx:t}}function vf(e,t,n,r){return n===void 0&&(n=null),fa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?co(t):t,{state:n,key:t&&t.key||r||IC()})}function hl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function co(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function DC(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=fr.Pop,s=null,u=d();u==null&&(u=0,a.replaceState(fa({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function c(){l=fr.Pop;let w=d(),h=w==null?null:w-u;u=w,s&&s({action:l,location:g.location,delta:h})}function y(w,h){l=fr.Push;let v=vf(g.location,w,h);n&&n(v,w),u=d()+1;let b=yg(v,u),S=g.createHref(v);try{a.pushState(b,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&s&&s({action:l,location:g.location,delta:1})}function p(w,h){l=fr.Replace;let v=vf(g.location,w,h);n&&n(v,w),u=d();let b=yg(v,u),S=g.createHref(v);a.replaceState(b,"",S),o&&s&&s({action:l,location:g.location,delta:0})}function m(w){let h=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof w=="string"?w:hl(w);return $e(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let g={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(vg,c),s=w,()=>{i.removeEventListener(vg,c),s=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let h=m(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:y,replace:p,go(w){return a.go(w)}};return g}var xg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xg||(xg={}));function LC(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?co(t):t,i=ah(r.pathname||"/",n);if(i==null)return null;let o=Cy(e);AC(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=HC(o[l],YC(i));return a}function Cy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&($e(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=vr([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&($e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Cy(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:UC(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Ey(o.path))i(o,a,s)}),t}function Ey(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Ey(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function AC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:WC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const RC=/^:\w+$/,FC=3,zC=2,NC=1,BC=10,VC=-2,bg=e=>e==="*";function UC(e,t){let n=e.split("/"),r=n.length;return n.some(bg)&&(r+=VC),t&&(r+=zC),n.filter(i=>!bg(i)).reduce((i,o)=>i+(RC.test(o)?FC:o===""?NC:BC),r)}function WC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function HC(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=GC({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;o.push({params:r,pathname:vr([i,d.pathname]),pathnameBase:ZC(vr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=vr([i,d.pathnameBase]))}return o}function GC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=qC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let y=l[c]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return u[d]=XC(l[c]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function qC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),oh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function YC(e){try{return decodeURI(e)}catch(t){return oh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function XC(e,t){try{return decodeURIComponent(e)}catch(n){return oh(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ah(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function KC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?co(e):e;return{pathname:n?n.startsWith("/")?n:QC(n,t):t,search:JC(r),hash:eE(i)}}function QC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Uc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=co(e):(i=fa({},e),$e(!i.pathname||!i.pathname.includes("?"),Uc("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),Uc("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),Uc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let c=t.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),c-=1;i.pathname=y.join("/")}l=c>=0?t[c]:"/"}let s=KC(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const vr=e=>e.join("/").replace(/\/\/+/g,"/"),ZC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),JC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,eE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function tE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ky=["post","put","patch","delete"];new Set(ky);const nE=["get",...ky];new Set(nE);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ml(){return ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ml.apply(this,arguments)}const uh=x.createContext(null),Py=x.createContext(null),ai=x.createContext(null),yu=x.createContext(null),In=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Ty=x.createContext(null);function rE(e,t){let{relative:n}=t===void 0?{}:t;fo()||$e(!1);let{basename:r,navigator:i}=x.useContext(ai),{hash:o,pathname:a,search:l}=ch(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:vr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function fo(){return x.useContext(yu)!=null}function er(){return fo()||$e(!1),x.useContext(yu).location}function Oy(e){x.useContext(ai).static||x.useLayoutEffect(e)}function Zt(){let{isDataRoute:e}=x.useContext(In);return e?yE():iE()}function iE(){fo()||$e(!1);let e=x.useContext(uh),{basename:t,navigator:n}=x.useContext(ai),{matches:r}=x.useContext(In),{pathname:i}=er(),o=JSON.stringify(sh(r).map(s=>s.pathnameBase)),a=x.useRef(!1);return Oy(()=>{a.current=!0}),x.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=lh(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:vr([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const oE=x.createContext(null);function aE(e){let t=x.useContext(In).outlet;return t&&x.createElement(oE.Provider,{value:e},t)}function jy(){let{matches:e}=x.useContext(In),t=e[e.length-1];return t?t.params:{}}function ch(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(In),{pathname:i}=er(),o=JSON.stringify(sh(r).map(a=>a.pathnameBase));return x.useMemo(()=>lh(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function sE(e,t){return lE(e,t)}function lE(e,t,n){fo()||$e(!1);let{navigator:r}=x.useContext(ai),{matches:i}=x.useContext(In),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=er(),u;if(t){var d;let g=typeof t=="string"?co(t):t;l==="/"||(d=g.pathname)!=null&&d.startsWith(l)||$e(!1),u=g}else u=s;let c=u.pathname||"/",y=l==="/"?c:c.slice(l.length)||"/",p=LC(e,{pathname:y}),m=pE(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:vr([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:vr([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,n);return t&&m?x.createElement(yu.Provider,{value:{location:ml({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:fr.Pop}},m):m}function uE(){let e=vE(),t=tE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,o)}const cE=x.createElement(uE,null);class dE extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(In.Provider,{value:this.props.routeContext},x.createElement(Ty.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fE(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(uh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(In.Provider,{value:t},r)}function pE(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||$e(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,c=null;n&&(c=s.route.errorElement||cE);let y=t.concat(o.slice(0,u+1)),p=()=>{let m;return d?m=c:s.route.Component?m=x.createElement(s.route.Component,null):s.route.element?m=s.route.element:m=l,x.createElement(fE,{match:s,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:m})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?x.createElement(dE,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:p(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):p()},null)}var My=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(My||{}),gl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gl||{});function hE(e){let t=x.useContext(uh);return t||$e(!1),t}function mE(e){let t=x.useContext(Py);return t||$e(!1),t}function gE(e){let t=x.useContext(In);return t||$e(!1),t}function $y(e){let t=gE(),n=t.matches[t.matches.length-1];return n.route.id||$e(!1),n.route.id}function vE(){var e;let t=x.useContext(Ty),n=mE(gl.UseRouteError),r=$y(gl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function yE(){let{router:e}=hE(My.UseNavigateStable),t=$y(gl.UseNavigateStable),n=x.useRef(!1);return Oy(()=>{n.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ml({fromRouteId:t},o)))},[e,t])}function Iy(e){let{to:t,replace:n,state:r,relative:i}=e;fo()||$e(!1);let{matches:o}=x.useContext(In),{pathname:a}=er(),l=Zt(),s=lh(t,sh(o).map(d=>d.pathnameBase),a,i==="path"),u=JSON.stringify(s);return x.useEffect(()=>l(JSON.parse(u),{replace:n,state:r,relative:i}),[l,u,i,n,r]),null}function Dy(e){return aE(e.context)}function ze(e){$e(!1)}function xE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=fr.Pop,navigator:o,static:a=!1}=e;fo()&&$e(!1);let l=t.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=co(r));let{pathname:u="/",search:d="",hash:c="",state:y=null,key:p="default"}=r,m=x.useMemo(()=>{let g=ah(u,l);return g==null?null:{location:{pathname:g,search:d,hash:c,state:y,key:p},navigationType:i}},[l,u,d,c,y,p,i]);return m==null?null:x.createElement(ai.Provider,{value:s},x.createElement(yu.Provider,{children:n,value:m}))}function bE(e){let{children:t,location:n}=e;return sE(yf(t),n)}new Promise(()=>{});function yf(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){n.push.apply(n,yf(r.props.children,o));return}r.type!==ze&&$e(!1),!r.props.index||!r.props.children||$e(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=yf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vl.apply(this,arguments)}function Ly(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function wE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function SE(e,t){return e.button===0&&(!t||t==="_self")&&!wE(e)}function xf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function _E(e,t){let n=xf(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const CE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],EE=["aria-current","caseSensitive","className","end","style","to","children"],kE="startTransition",wg=gf[kE];function PE(e){let{basename:t,children:n,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=$C({window:i,v5Compat:!0}));let a=o.current,[l,s]=x.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=x.useCallback(c=>{u&&wg?wg(()=>s(c)):s(c)},[s,u]);return x.useLayoutEffect(()=>a.listen(d),[a,d]),x.createElement(xE,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const TE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:d}=t,c=Ly(t,CE),{basename:y}=x.useContext(ai),p,m=!1;if(typeof u=="string"&&OE.test(u)&&(p=u,TE))try{let v=new URL(window.location.href),b=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=ah(b.pathname,y);b.origin===v.origin&&S!=null?u=S+b.search+b.hash:m=!0}catch{}let g=rE(u,{relative:i}),w=jE(u,{replace:a,state:l,target:s,preventScrollReset:d,relative:i});function h(v){r&&r(v),v.defaultPrevented||w(v)}return x.createElement("a",vl({},c,{href:p||g,onClick:m||o?r:h,ref:n,target:s}))}),Ay=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,children:u}=t,d=Ly(t,EE),c=ch(s,{relative:d.relative}),y=er(),p=x.useContext(Py),{navigator:m}=x.useContext(ai),g=m.encodeLocation?m.encodeLocation(c).pathname:c.pathname,w=y.pathname,h=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(w=w.toLowerCase(),h=h?h.toLowerCase():null,g=g.toLowerCase());let v=w===g||!a&&w.startsWith(g)&&w.charAt(g.length)==="/",b=h!=null&&(h===g||!a&&h.startsWith(g)&&h.charAt(g.length)==="/"),S=v?r:void 0,E;typeof o=="function"?E=o({isActive:v,isPending:b}):E=[o,v?"active":null,b?"pending":null].filter(Boolean).join(" ");let T=typeof l=="function"?l({isActive:v,isPending:b}):l;return x.createElement(Pe,vl({},d,{"aria-current":S,className:E,ref:n,style:T,to:s}),typeof u=="function"?u({isActive:v,isPending:b}):u)});var Sg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Sg||(Sg={}));var _g;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_g||(_g={}));function jE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Zt(),s=er(),u=ch(e,{relative:a});return x.useCallback(d=>{if(SE(d,n)){d.preventDefault();let c=r!==void 0?r:hl(s)===hl(u);l(e,{replace:c,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}function ME(e){let t=x.useRef(xf(e)),n=x.useRef(!1),r=er(),i=x.useMemo(()=>_E(r.search,n.current?null:t.current),[r.search]),o=Zt(),a=x.useCallback((l,s)=>{const u=xf(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,s)},[o,i]);return[i,a]}var bf={},Ry={exports:{}},Bt={},Fy={exports:{}},zy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var z=P.length;P.push(I);e:for(;0<z;){var B=z-1>>>1,N=P[B];if(0<i(N,I))P[B]=I,P[z]=N,z=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],z=P.pop();if(z!==I){P[0]=z;e:for(var B=0,N=P.length,U=N>>>1;B<U;){var G=2*(B+1)-1,W=P[G],X=G+1,ee=P[X];if(0>i(W,z))X<N&&0>i(ee,W)?(P[B]=ee,P[X]=z,B=X):(P[B]=W,P[G]=z,B=G);else if(X<N&&0>i(ee,z))P[B]=ee,P[X]=z,B=X;else break e}}return I}function i(P,I){var z=P.sortIndex-I.sortIndex;return z!==0?z:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,c=null,y=3,p=!1,m=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(P){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=P)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function S(P){if(g=!1,b(P),!m)if(n(s)!==null)m=!0,L(E);else{var I=n(u);I!==null&&O(S,I.startTime-P)}}function E(P,I){m=!1,g&&(g=!1,h(C),C=-1),p=!0;var z=y;try{for(b(I),c=n(s);c!==null&&(!(c.expirationTime>I)||P&&!D());){var B=c.callback;if(typeof B=="function"){c.callback=null,y=c.priorityLevel;var N=B(c.expirationTime<=I);I=e.unstable_now(),typeof N=="function"?c.callback=N:c===n(s)&&r(s),b(I)}else r(s);c=n(s)}if(c!==null)var U=!0;else{var G=n(u);G!==null&&O(S,G.startTime-I),U=!1}return U}finally{c=null,y=z,p=!1}}var T=!1,k=null,C=-1,M=5,$=-1;function D(){return!(e.unstable_now()-$<M)}function A(){if(k!==null){var P=e.unstable_now();$=P;var I=!0;try{I=k(!0,P)}finally{I?j():(T=!1,k=null)}}else T=!1}var j;if(typeof v=="function")j=function(){v(A)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,R=F.port2;F.port1.onmessage=A,j=function(){R.postMessage(null)}}else j=function(){w(A,0)};function L(P){k=P,T||(T=!0,j())}function O(P,I){C=w(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,L(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(y){case 1:case 2:case 3:var I=3;break;default:I=y}var z=y;y=I;try{return P()}finally{y=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=y;y=P;try{return I()}finally{y=z}},e.unstable_scheduleCallback=function(P,I,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=z+N,P={id:d++,callback:I,priorityLevel:P,startTime:z,expirationTime:N,sortIndex:-1},z>B?(P.sortIndex=z,t(u,P),n(s)===null&&P===n(u)&&(g?(h(C),C=-1):g=!0,O(S,z-B))):(P.sortIndex=N,t(s,P),m||p||(m=!0,L(E))),P},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(P){var I=y;return function(){var z=y;y=I;try{return P.apply(this,arguments)}finally{y=z}}}})(zy);Fy.exports=zy;var $E=Fy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny=x,zt=$E;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var By=new Set,pa={};function si(e,t){Gi(e,t),Gi(e+"Capture",t)}function Gi(e,t){for(pa[e]=t,e=0;e<t.length;e++)By.add(t[e])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wf=Object.prototype.hasOwnProperty,IE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cg={},Eg={};function DE(e){return wf.call(Eg,e)?!0:wf.call(Cg,e)?!1:IE.test(e)?Eg[e]=!0:(Cg[e]=!0,!1)}function LE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function AE(e,t,n,r){if(t===null||typeof t>"u"||LE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new xt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new xt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new xt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new xt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new xt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new xt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new xt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new xt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new xt(e,5,!1,e.toLowerCase(),null,!1,!1)});var dh=/[\-:]([a-z])/g;function fh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dh,fh);nt[t]=new xt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dh,fh);nt[t]=new xt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dh,fh);nt[t]=new xt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new xt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new xt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ph(e,t,n,r){var i=nt.hasOwnProperty(t)?nt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(AE(t,n,i,r)&&(n=null),r||i===null?DE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tr=Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ss=Symbol.for("react.element"),Ei=Symbol.for("react.portal"),ki=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),Sf=Symbol.for("react.profiler"),Vy=Symbol.for("react.provider"),Uy=Symbol.for("react.context"),mh=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),Cf=Symbol.for("react.suspense_list"),gh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Wy=Symbol.for("react.offscreen"),kg=Symbol.iterator;function Po(e){return e===null||typeof e!="object"?null:(e=kg&&e[kg]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,Wc;function Wo(e){if(Wc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wc=t&&t[1]||""}return`
`+Wc+e}var Hc=!1;function Gc(e,t){if(!e||Hc)return"";Hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Hc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wo(e):""}function RE(e){switch(e.tag){case 5:return Wo(e.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return e=Gc(e.type,!1),e;case 11:return e=Gc(e.type.render,!1),e;case 1:return e=Gc(e.type,!0),e;default:return""}}function Ef(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ki:return"Fragment";case Ei:return"Portal";case Sf:return"Profiler";case hh:return"StrictMode";case _f:return"Suspense";case Cf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Uy:return(e.displayName||"Context")+".Consumer";case Vy:return(e._context.displayName||"Context")+".Provider";case mh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gh:return t=e.displayName||null,t!==null?t:Ef(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return Ef(e(t))}catch{}}return null}function FE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(t);case 8:return t===hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zE(e){var t=Hy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ls(e){e._valueTracker||(e._valueTracker=zE(e))}function Gy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kf(e,t){var n=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qy(e,t){t=t.checked,t!=null&&ph(e,"checked",t,!1)}function Pf(e,t){qy(e,t);var n=Pr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tf(e,t.type,Pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tf(e,t,n){(t!=="number"||yl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ho=Array.isArray;function Ri(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Of(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Og(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Ho(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pr(n)}}function Yy(e,t){var n=Pr(t.value),r=Pr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var us,Ky=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(us=us||document.createElement("div"),us.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=us.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ha(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NE=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(e){NE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jo[t]=Jo[e]})});function Qy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jo.hasOwnProperty(e)&&Jo[e]?(""+t).trim():t+"px"}function Zy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var BE=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(e,t){if(t){if(BE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function $f(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var If=null;function vh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Df=null,Fi=null,zi=null;function Mg(e){if(e=Wa(e)){if(typeof Df!="function")throw Error(V(280));var t=e.stateNode;t&&(t=_u(t),Df(e.stateNode,e.type,t))}}function Jy(e){Fi?zi?zi.push(e):zi=[e]:Fi=e}function ex(){if(Fi){var e=Fi,t=zi;if(zi=Fi=null,Mg(e),t)for(e=0;e<t.length;e++)Mg(t[e])}}function tx(e,t){return e(t)}function nx(){}var qc=!1;function rx(e,t,n){if(qc)return e(t,n);qc=!0;try{return tx(e,t,n)}finally{qc=!1,(Fi!==null||zi!==null)&&(nx(),ex())}}function ma(e,t){var n=e.stateNode;if(n===null)return null;var r=_u(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var Lf=!1;if(Yn)try{var To={};Object.defineProperty(To,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Lf=!1}function VE(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ea=!1,xl=null,bl=!1,Af=null,UE={onError:function(e){ea=!0,xl=e}};function WE(e,t,n,r,i,o,a,l,s){ea=!1,xl=null,VE.apply(UE,arguments)}function HE(e,t,n,r,i,o,a,l,s){if(WE.apply(this,arguments),ea){if(ea){var u=xl;ea=!1,xl=null}else throw Error(V(198));bl||(bl=!0,Af=u)}}function li(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ix(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $g(e){if(li(e)!==e)throw Error(V(188))}function GE(e){var t=e.alternate;if(!t){if(t=li(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $g(i),e;if(o===r)return $g(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function ox(e){return e=GE(e),e!==null?ax(e):null}function ax(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ax(e);if(t!==null)return t;e=e.sibling}return null}var sx=zt.unstable_scheduleCallback,Ig=zt.unstable_cancelCallback,qE=zt.unstable_shouldYield,YE=zt.unstable_requestPaint,Me=zt.unstable_now,XE=zt.unstable_getCurrentPriorityLevel,yh=zt.unstable_ImmediatePriority,lx=zt.unstable_UserBlockingPriority,wl=zt.unstable_NormalPriority,KE=zt.unstable_LowPriority,ux=zt.unstable_IdlePriority,xu=null,Pn=null;function QE(e){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(xu,e,void 0,(e.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:ek,ZE=Math.log,JE=Math.LN2;function ek(e){return e>>>=0,e===0?32:31-(ZE(e)/JE|0)|0}var cs=64,ds=4194304;function Go(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Go(l):(o&=a,o!==0&&(r=Go(o)))}else a=n&~i,a!==0?r=Go(a):o!==0&&(r=Go(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-cn(t),i=1<<n,r|=e[n],t&=~i;return r}function tk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-cn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=tk(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Rf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cx(){var e=cs;return cs<<=1,!(cs&4194240)&&(cs=64),e}function Yc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Va(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-cn(t),e[t]=n}function rk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-cn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-cn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function dx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fx,bh,px,hx,mx,Ff=!1,fs=[],yr=null,xr=null,br=null,ga=new Map,va=new Map,cr=[],ik="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dg(e,t){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":ga.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(t.pointerId)}}function Oo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wa(t),t!==null&&bh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ok(e,t,n,r,i){switch(t){case"focusin":return yr=Oo(yr,e,t,n,r,i),!0;case"dragenter":return xr=Oo(xr,e,t,n,r,i),!0;case"mouseover":return br=Oo(br,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ga.set(o,Oo(ga.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,va.set(o,Oo(va.get(o)||null,e,t,n,r,i)),!0}return!1}function gx(e){var t=Ur(e.target);if(t!==null){var n=li(t);if(n!==null){if(t=n.tag,t===13){if(t=ix(n),t!==null){e.blockedOn=t,mx(e.priority,function(){px(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);If=r,n.target.dispatchEvent(r),If=null}else return t=Wa(n),t!==null&&bh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lg(e,t,n){Vs(e)&&n.delete(t)}function ak(){Ff=!1,yr!==null&&Vs(yr)&&(yr=null),xr!==null&&Vs(xr)&&(xr=null),br!==null&&Vs(br)&&(br=null),ga.forEach(Lg),va.forEach(Lg)}function jo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ff||(Ff=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,ak)))}function ya(e){function t(i){return jo(i,e)}if(0<fs.length){jo(fs[0],e);for(var n=1;n<fs.length;n++){var r=fs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yr!==null&&jo(yr,e),xr!==null&&jo(xr,e),br!==null&&jo(br,e),ga.forEach(t),va.forEach(t),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)gx(n),n.blockedOn===null&&cr.shift()}var Ni=tr.ReactCurrentBatchConfig,_l=!0;function sk(e,t,n,r){var i=me,o=Ni.transition;Ni.transition=null;try{me=1,wh(e,t,n,r)}finally{me=i,Ni.transition=o}}function lk(e,t,n,r){var i=me,o=Ni.transition;Ni.transition=null;try{me=4,wh(e,t,n,r)}finally{me=i,Ni.transition=o}}function wh(e,t,n,r){if(_l){var i=zf(e,t,n,r);if(i===null)id(e,t,r,Cl,n),Dg(e,r);else if(ok(i,e,t,n,r))r.stopPropagation();else if(Dg(e,r),t&4&&-1<ik.indexOf(e)){for(;i!==null;){var o=Wa(i);if(o!==null&&fx(o),o=zf(e,t,n,r),o===null&&id(e,t,r,Cl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else id(e,t,r,null,n)}}var Cl=null;function zf(e,t,n,r){if(Cl=null,e=vh(r),e=Ur(e),e!==null)if(t=li(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ix(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Cl=e,null}function vx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XE()){case yh:return 1;case lx:return 4;case wl:case KE:return 16;case ux:return 536870912;default:return 16}default:return 16}}var pr=null,Sh=null,Us=null;function yx(){if(Us)return Us;var e,t=Sh,n=t.length,r,i="value"in pr?pr.value:pr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Us=i.slice(e,1<r?1-r:void 0)}function Ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ps(){return!0}function Ag(){return!1}function Vt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ps:Ag,this.isPropagationStopped=Ag,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),t}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=Vt(po),Ua=Te({},po,{view:0,detail:0}),uk=Vt(Ua),Xc,Kc,Mo,bu=Te({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ch,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(Xc=e.screenX-Mo.screenX,Kc=e.screenY-Mo.screenY):Kc=Xc=0,Mo=e),Xc)},movementY:function(e){return"movementY"in e?e.movementY:Kc}}),Rg=Vt(bu),ck=Te({},bu,{dataTransfer:0}),dk=Vt(ck),fk=Te({},Ua,{relatedTarget:0}),Qc=Vt(fk),pk=Te({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),hk=Vt(pk),mk=Te({},po,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gk=Vt(mk),vk=Te({},po,{data:0}),Fg=Vt(vk),yk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bk[e])?!!t[e]:!1}function Ch(){return wk}var Sk=Te({},Ua,{key:function(e){if(e.key){var t=yk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ch,charCode:function(e){return e.type==="keypress"?Ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_k=Vt(Sk),Ck=Te({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zg=Vt(Ck),Ek=Te({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ch}),kk=Vt(Ek),Pk=Te({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tk=Vt(Pk),Ok=Te({},bu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jk=Vt(Ok),Mk=[9,13,27,32],Eh=Yn&&"CompositionEvent"in window,ta=null;Yn&&"documentMode"in document&&(ta=document.documentMode);var $k=Yn&&"TextEvent"in window&&!ta,xx=Yn&&(!Eh||ta&&8<ta&&11>=ta),Ng=String.fromCharCode(32),Bg=!1;function bx(e,t){switch(e){case"keyup":return Mk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pi=!1;function Ik(e,t){switch(e){case"compositionend":return wx(t);case"keypress":return t.which!==32?null:(Bg=!0,Ng);case"textInput":return e=t.data,e===Ng&&Bg?null:e;default:return null}}function Dk(e,t){if(Pi)return e==="compositionend"||!Eh&&bx(e,t)?(e=yx(),Us=Sh=pr=null,Pi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xx&&t.locale!=="ko"?null:t.data;default:return null}}var Lk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lk[e.type]:t==="textarea"}function Sx(e,t,n,r){Jy(r),t=El(t,"onChange"),0<t.length&&(n=new _h("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var na=null,xa=null;function Ak(e){Ix(e,0)}function wu(e){var t=ji(e);if(Gy(t))return e}function Rk(e,t){if(e==="change")return t}var _x=!1;if(Yn){var Zc;if(Yn){var Jc="oninput"in document;if(!Jc){var Ug=document.createElement("div");Ug.setAttribute("oninput","return;"),Jc=typeof Ug.oninput=="function"}Zc=Jc}else Zc=!1;_x=Zc&&(!document.documentMode||9<document.documentMode)}function Wg(){na&&(na.detachEvent("onpropertychange",Cx),xa=na=null)}function Cx(e){if(e.propertyName==="value"&&wu(xa)){var t=[];Sx(t,xa,e,vh(e)),rx(Ak,t)}}function Fk(e,t,n){e==="focusin"?(Wg(),na=t,xa=n,na.attachEvent("onpropertychange",Cx)):e==="focusout"&&Wg()}function zk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wu(xa)}function Nk(e,t){if(e==="click")return wu(t)}function Bk(e,t){if(e==="input"||e==="change")return wu(t)}function Vk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mn=typeof Object.is=="function"?Object.is:Vk;function ba(e,t){if(mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wf.call(t,i)||!mn(e[i],t[i]))return!1}return!0}function Hg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gg(e,t){var n=Hg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hg(n)}}function Ex(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ex(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kx(){for(var e=window,t=yl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yl(e.document)}return t}function kh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uk(e){var t=kx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ex(n.ownerDocument.documentElement,n)){if(r!==null&&kh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Gg(n,o);var a=Gg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wk=Yn&&"documentMode"in document&&11>=document.documentMode,Ti=null,Nf=null,ra=null,Bf=!1;function qg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bf||Ti==null||Ti!==yl(r)||(r=Ti,"selectionStart"in r&&kh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&ba(ra,r)||(ra=r,r=El(Nf,"onSelect"),0<r.length&&(t=new _h("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ti)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Oi={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},ed={},Px={};Yn&&(Px=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function Su(e){if(ed[e])return ed[e];if(!Oi[e])return e;var t=Oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Px)return ed[e]=t[n];return e}var Tx=Su("animationend"),Ox=Su("animationiteration"),jx=Su("animationstart"),Mx=Su("transitionend"),$x=new Map,Yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){$x.set(e,t),si(t,[e])}for(var td=0;td<Yg.length;td++){var nd=Yg[td],Hk=nd.toLowerCase(),Gk=nd[0].toUpperCase()+nd.slice(1);jr(Hk,"on"+Gk)}jr(Tx,"onAnimationEnd");jr(Ox,"onAnimationIteration");jr(jx,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Mx,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qk=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Xg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,HE(r,t,void 0,e),e.currentTarget=null}function Ix(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Xg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Xg(i,l,u),o=s}}}if(bl)throw e=Af,bl=!1,Af=null,e}function ye(e,t){var n=t[Gf];n===void 0&&(n=t[Gf]=new Set);var r=e+"__bubble";n.has(r)||(Dx(t,e,2,!1),n.add(r))}function rd(e,t,n){var r=0;t&&(r|=4),Dx(n,e,r,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function wa(e){if(!e[ms]){e[ms]=!0,By.forEach(function(n){n!=="selectionchange"&&(qk.has(n)||rd(n,!1,e),rd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,rd("selectionchange",!1,t))}}function Dx(e,t,n,r){switch(vx(t)){case 1:var i=sk;break;case 4:i=lk;break;default:i=wh}n=i.bind(null,t,n,e),i=void 0,!Lf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function id(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Ur(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}rx(function(){var u=o,d=vh(n),c=[];e:{var y=$x.get(e);if(y!==void 0){var p=_h,m=e;switch(e){case"keypress":if(Ws(n)===0)break e;case"keydown":case"keyup":p=_k;break;case"focusin":m="focus",p=Qc;break;case"focusout":m="blur",p=Qc;break;case"beforeblur":case"afterblur":p=Qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kk;break;case Tx:case Ox:case jx:p=hk;break;case Mx:p=Tk;break;case"scroll":p=uk;break;case"wheel":p=jk;break;case"copy":case"cut":case"paste":p=gk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=zg}var g=(t&4)!==0,w=!g&&e==="scroll",h=g?y!==null?y+"Capture":null:y;g=[];for(var v=u,b;v!==null;){b=v;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,h!==null&&(S=ma(v,h),S!=null&&g.push(Sa(v,S,b)))),w)break;v=v.return}0<g.length&&(y=new p(y,m,null,n,d),c.push({event:y,listeners:g}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",y&&n!==If&&(m=n.relatedTarget||n.fromElement)&&(Ur(m)||m[Xn]))break e;if((p||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Ur(m):null,m!==null&&(w=li(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(g=Rg,S="onMouseLeave",h="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(g=zg,S="onPointerLeave",h="onPointerEnter",v="pointer"),w=p==null?y:ji(p),b=m==null?y:ji(m),y=new g(S,v+"leave",p,n,d),y.target=w,y.relatedTarget=b,S=null,Ur(d)===u&&(g=new g(h,v+"enter",m,n,d),g.target=b,g.relatedTarget=w,S=g),w=S,p&&m)t:{for(g=p,h=m,v=0,b=g;b;b=fi(b))v++;for(b=0,S=h;S;S=fi(S))b++;for(;0<v-b;)g=fi(g),v--;for(;0<b-v;)h=fi(h),b--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=fi(g),h=fi(h)}g=null}else g=null;p!==null&&Kg(c,y,p,g,!1),m!==null&&w!==null&&Kg(c,w,m,g,!0)}}e:{if(y=u?ji(u):window,p=y.nodeName&&y.nodeName.toLowerCase(),p==="select"||p==="input"&&y.type==="file")var E=Rk;else if(Vg(y))if(_x)E=Bk;else{E=zk;var T=Fk}else(p=y.nodeName)&&p.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(E=Nk);if(E&&(E=E(e,u))){Sx(c,E,n,d);break e}T&&T(e,y,u),e==="focusout"&&(T=y._wrapperState)&&T.controlled&&y.type==="number"&&Tf(y,"number",y.value)}switch(T=u?ji(u):window,e){case"focusin":(Vg(T)||T.contentEditable==="true")&&(Ti=T,Nf=u,ra=null);break;case"focusout":ra=Nf=Ti=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,qg(c,n,d);break;case"selectionchange":if(Wk)break;case"keydown":case"keyup":qg(c,n,d)}var k;if(Eh)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Pi?bx(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(xx&&n.locale!=="ko"&&(Pi||C!=="onCompositionStart"?C==="onCompositionEnd"&&Pi&&(k=yx()):(pr=d,Sh="value"in pr?pr.value:pr.textContent,Pi=!0)),T=El(u,C),0<T.length&&(C=new Fg(C,e,null,n,d),c.push({event:C,listeners:T}),k?C.data=k:(k=wx(n),k!==null&&(C.data=k)))),(k=$k?Ik(e,n):Dk(e,n))&&(u=El(u,"onBeforeInput"),0<u.length&&(d=new Fg("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}Ix(c,t)})}function Sa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function El(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ma(e,n),o!=null&&r.unshift(Sa(e,o,i)),o=ma(e,t),o!=null&&r.push(Sa(e,o,i))),e=e.return}return r}function fi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ma(n,o),s!=null&&a.unshift(Sa(n,s,l))):i||(s=ma(n,o),s!=null&&a.push(Sa(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Yk=/\r\n?/g,Xk=/\u0000|\uFFFD/g;function Qg(e){return(typeof e=="string"?e:""+e).replace(Yk,`
`).replace(Xk,"")}function gs(e,t,n){if(t=Qg(t),Qg(e)!==t&&n)throw Error(V(425))}function kl(){}var Vf=null,Uf=null;function Wf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hf=typeof setTimeout=="function"?setTimeout:void 0,Kk=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,Qk=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(e){return Zg.resolve(null).then(e).catch(Zk)}:Hf;function Zk(e){setTimeout(function(){throw e})}function od(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ya(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ya(t)}function wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ho=Math.random().toString(36).slice(2),En="__reactFiber$"+ho,_a="__reactProps$"+ho,Xn="__reactContainer$"+ho,Gf="__reactEvents$"+ho,Jk="__reactListeners$"+ho,eP="__reactHandles$"+ho;function Ur(e){var t=e[En];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xn]||n[En]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jg(e);e!==null;){if(n=e[En])return n;e=Jg(e)}return t}e=n,n=e.parentNode}return null}function Wa(e){return e=e[En]||e[Xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ji(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function _u(e){return e[_a]||null}var qf=[],Mi=-1;function Mr(e){return{current:e}}function be(e){0>Mi||(e.current=qf[Mi],qf[Mi]=null,Mi--)}function ve(e,t){Mi++,qf[Mi]=e.current,e.current=t}var Tr={},ct=Mr(Tr),kt=Mr(!1),Kr=Tr;function qi(e,t){var n=e.type.contextTypes;if(!n)return Tr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(e){return e=e.childContextTypes,e!=null}function Pl(){be(kt),be(ct)}function e0(e,t,n){if(ct.current!==Tr)throw Error(V(168));ve(ct,t),ve(kt,n)}function Lx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,FE(e)||"Unknown",i));return Te({},n,r)}function Tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tr,Kr=ct.current,ve(ct,e),ve(kt,kt.current),!0}function t0(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Lx(e,t,Kr),r.__reactInternalMemoizedMergedChildContext=e,be(kt),be(ct),ve(ct,e)):be(kt),ve(kt,n)}var Nn=null,Cu=!1,ad=!1;function Ax(e){Nn===null?Nn=[e]:Nn.push(e)}function tP(e){Cu=!0,Ax(e)}function $r(){if(!ad&&Nn!==null){ad=!0;var e=0,t=me;try{var n=Nn;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nn=null,Cu=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(e+1)),sx(yh,$r),i}finally{me=t,ad=!1}}return null}var $i=[],Ii=0,Ol=null,jl=0,Ht=[],Gt=0,Qr=null,Un=1,Wn="";function Rr(e,t){$i[Ii++]=jl,$i[Ii++]=Ol,Ol=e,jl=t}function Rx(e,t,n){Ht[Gt++]=Un,Ht[Gt++]=Wn,Ht[Gt++]=Qr,Qr=e;var r=Un;e=Wn;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var o=32-cn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Un=1<<32-cn(t)+i|n<<i|r,Wn=o+e}else Un=1<<o|n<<i|r,Wn=e}function Ph(e){e.return!==null&&(Rr(e,1),Rx(e,1,0))}function Th(e){for(;e===Ol;)Ol=$i[--Ii],$i[Ii]=null,jl=$i[--Ii],$i[Ii]=null;for(;e===Qr;)Qr=Ht[--Gt],Ht[Gt]=null,Wn=Ht[--Gt],Ht[Gt]=null,Un=Ht[--Gt],Ht[Gt]=null}var Rt=null,Lt=null,Ce=!1,ln=null;function Fx(e,t){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function n0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,Lt=wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,Lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qr!==null?{id:Un,overflow:Wn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Rt=e,Lt=null,!0):!1;default:return!1}}function Yf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xf(e){if(Ce){var t=Lt;if(t){var n=t;if(!n0(e,t)){if(Yf(e))throw Error(V(418));t=wr(n.nextSibling);var r=Rt;t&&n0(e,t)?Fx(r,n):(e.flags=e.flags&-4097|2,Ce=!1,Rt=e)}}else{if(Yf(e))throw Error(V(418));e.flags=e.flags&-4097|2,Ce=!1,Rt=e}}}function r0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function vs(e){if(e!==Rt)return!1;if(!Ce)return r0(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wf(e.type,e.memoizedProps)),t&&(t=Lt)){if(Yf(e))throw zx(),Error(V(418));for(;t;)Fx(e,t),t=wr(t.nextSibling)}if(r0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Lt=wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Lt=null}}else Lt=Rt?wr(e.stateNode.nextSibling):null;return!0}function zx(){for(var e=Lt;e;)e=wr(e.nextSibling)}function Yi(){Lt=Rt=null,Ce=!1}function Oh(e){ln===null?ln=[e]:ln.push(e)}var nP=tr.ReactCurrentBatchConfig;function on(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ml=Mr(null),$l=null,Di=null,jh=null;function Mh(){jh=Di=$l=null}function $h(e){var t=Ml.current;be(Ml),e._currentValue=t}function Kf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bi(e,t){$l=e,jh=Di=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function Xt(e){var t=e._currentValue;if(jh!==e)if(e={context:e,memoizedValue:t,next:null},Di===null){if($l===null)throw Error(V(308));Di=e,$l.dependencies={lanes:0,firstContext:e}}else Di=Di.next=e;return t}var Wr=null;function Ih(e){Wr===null?Wr=[e]:Wr.push(e)}function Nx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ih(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kn(e,r)}function Kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ur=!1;function Dh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ih(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kn(e,n)}function Hs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xh(e,n)}}function i0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Il(e,t,n,r){var i=e.updateQueue;ur=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;a=0,d=u=s=null,l=o;do{var y=l.lane,p=l.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,g=l;switch(y=t,p=n,g.tag){case 1:if(m=g.payload,typeof m=="function"){c=m.call(p,c,y);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,y=typeof m=="function"?m.call(p,c,y):m,y==null)break e;c=Te({},c,y);break e;case 2:ur=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else p={eventTime:p,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,s=c):d=d.next=p,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Jr|=a,e.lanes=a,e.memoizedState=c}}function o0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Vx=new Ny.Component().refs;function Qf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eu={isMounted:function(e){return(e=e._reactInternals)?li(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=Cr(e),o=Hn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(dn(t,e,i,r),Hs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=Cr(e),o=Hn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(dn(t,e,i,r),Hs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=Cr(e),i=Hn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sr(e,i,r),t!==null&&(dn(t,e,r,n),Hs(t,e,r))}};function a0(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ba(n,r)||!ba(i,o):!0}function Ux(e,t,n){var r=!1,i=Tr,o=t.contextType;return typeof o=="object"&&o!==null?o=Xt(o):(i=Pt(t)?Kr:ct.current,r=t.contextTypes,o=(r=r!=null)?qi(e,i):Tr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Eu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function s0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eu.enqueueReplaceState(t,t.state,null)}function Zf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Vx,Dh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Xt(o):(o=Pt(t)?Kr:ct.current,i.context=qi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Eu.enqueueReplaceState(i,i.state,null),Il(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $o(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Vx&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ys(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function l0(e){var t=e._init;return t(e._payload)}function Wx(e){function t(h,v){if(e){var b=h.deletions;b===null?(h.deletions=[v],h.flags|=16):b.push(v)}}function n(h,v){if(!e)return null;for(;v!==null;)t(h,v),v=v.sibling;return null}function r(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function i(h,v){return h=Er(h,v),h.index=0,h.sibling=null,h}function o(h,v,b){return h.index=b,e?(b=h.alternate,b!==null?(b=b.index,b<v?(h.flags|=2,v):b):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,v,b,S){return v===null||v.tag!==6?(v=pd(b,h.mode,S),v.return=h,v):(v=i(v,b),v.return=h,v)}function s(h,v,b,S){var E=b.type;return E===ki?d(h,v,b.props.children,S,b.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lr&&l0(E)===v.type)?(S=i(v,b.props),S.ref=$o(h,v,b),S.return=h,S):(S=Qs(b.type,b.key,b.props,null,h.mode,S),S.ref=$o(h,v,b),S.return=h,S)}function u(h,v,b,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=hd(b,h.mode,S),v.return=h,v):(v=i(v,b.children||[]),v.return=h,v)}function d(h,v,b,S,E){return v===null||v.tag!==7?(v=Yr(b,h.mode,S,E),v.return=h,v):(v=i(v,b),v.return=h,v)}function c(h,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=pd(""+v,h.mode,b),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ss:return b=Qs(v.type,v.key,v.props,null,h.mode,b),b.ref=$o(h,null,v),b.return=h,b;case Ei:return v=hd(v,h.mode,b),v.return=h,v;case lr:var S=v._init;return c(h,S(v._payload),b)}if(Ho(v)||Po(v))return v=Yr(v,h.mode,b,null),v.return=h,v;ys(h,v)}return null}function y(h,v,b,S){var E=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return E!==null?null:l(h,v,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ss:return b.key===E?s(h,v,b,S):null;case Ei:return b.key===E?u(h,v,b,S):null;case lr:return E=b._init,y(h,v,E(b._payload),S)}if(Ho(b)||Po(b))return E!==null?null:d(h,v,b,S,null);ys(h,b)}return null}function p(h,v,b,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(b)||null,l(v,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ss:return h=h.get(S.key===null?b:S.key)||null,s(v,h,S,E);case Ei:return h=h.get(S.key===null?b:S.key)||null,u(v,h,S,E);case lr:var T=S._init;return p(h,v,b,T(S._payload),E)}if(Ho(S)||Po(S))return h=h.get(b)||null,d(v,h,S,E,null);ys(v,S)}return null}function m(h,v,b,S){for(var E=null,T=null,k=v,C=v=0,M=null;k!==null&&C<b.length;C++){k.index>C?(M=k,k=null):M=k.sibling;var $=y(h,k,b[C],S);if($===null){k===null&&(k=M);break}e&&k&&$.alternate===null&&t(h,k),v=o($,v,C),T===null?E=$:T.sibling=$,T=$,k=M}if(C===b.length)return n(h,k),Ce&&Rr(h,C),E;if(k===null){for(;C<b.length;C++)k=c(h,b[C],S),k!==null&&(v=o(k,v,C),T===null?E=k:T.sibling=k,T=k);return Ce&&Rr(h,C),E}for(k=r(h,k);C<b.length;C++)M=p(k,h,C,b[C],S),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?C:M.key),v=o(M,v,C),T===null?E=M:T.sibling=M,T=M);return e&&k.forEach(function(D){return t(h,D)}),Ce&&Rr(h,C),E}function g(h,v,b,S){var E=Po(b);if(typeof E!="function")throw Error(V(150));if(b=E.call(b),b==null)throw Error(V(151));for(var T=E=null,k=v,C=v=0,M=null,$=b.next();k!==null&&!$.done;C++,$=b.next()){k.index>C?(M=k,k=null):M=k.sibling;var D=y(h,k,$.value,S);if(D===null){k===null&&(k=M);break}e&&k&&D.alternate===null&&t(h,k),v=o(D,v,C),T===null?E=D:T.sibling=D,T=D,k=M}if($.done)return n(h,k),Ce&&Rr(h,C),E;if(k===null){for(;!$.done;C++,$=b.next())$=c(h,$.value,S),$!==null&&(v=o($,v,C),T===null?E=$:T.sibling=$,T=$);return Ce&&Rr(h,C),E}for(k=r(h,k);!$.done;C++,$=b.next())$=p(k,h,C,$.value,S),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?C:$.key),v=o($,v,C),T===null?E=$:T.sibling=$,T=$);return e&&k.forEach(function(A){return t(h,A)}),Ce&&Rr(h,C),E}function w(h,v,b,S){if(typeof b=="object"&&b!==null&&b.type===ki&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ss:e:{for(var E=b.key,T=v;T!==null;){if(T.key===E){if(E=b.type,E===ki){if(T.tag===7){n(h,T.sibling),v=i(T,b.props.children),v.return=h,h=v;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lr&&l0(E)===T.type){n(h,T.sibling),v=i(T,b.props),v.ref=$o(h,T,b),v.return=h,h=v;break e}n(h,T);break}else t(h,T);T=T.sibling}b.type===ki?(v=Yr(b.props.children,h.mode,S,b.key),v.return=h,h=v):(S=Qs(b.type,b.key,b.props,null,h.mode,S),S.ref=$o(h,v,b),S.return=h,h=S)}return a(h);case Ei:e:{for(T=b.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(h,v.sibling),v=i(v,b.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else t(h,v);v=v.sibling}v=hd(b,h.mode,S),v.return=h,h=v}return a(h);case lr:return T=b._init,w(h,v,T(b._payload),S)}if(Ho(b))return m(h,v,b,S);if(Po(b))return g(h,v,b,S);ys(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(h,v.sibling),v=i(v,b),v.return=h,h=v):(n(h,v),v=pd(b,h.mode,S),v.return=h,h=v),a(h)):n(h,v)}return w}var Xi=Wx(!0),Hx=Wx(!1),Ha={},Tn=Mr(Ha),Ca=Mr(Ha),Ea=Mr(Ha);function Hr(e){if(e===Ha)throw Error(V(174));return e}function Lh(e,t){switch(ve(Ea,t),ve(Ca,e),ve(Tn,Ha),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jf(t,e)}be(Tn),ve(Tn,t)}function Ki(){be(Tn),be(Ca),be(Ea)}function Gx(e){Hr(Ea.current);var t=Hr(Tn.current),n=jf(t,e.type);t!==n&&(ve(Ca,e),ve(Tn,n))}function Ah(e){Ca.current===e&&(be(Tn),be(Ca))}var Ee=Mr(0);function Dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sd=[];function Rh(){for(var e=0;e<sd.length;e++)sd[e]._workInProgressVersionPrimary=null;sd.length=0}var Gs=tr.ReactCurrentDispatcher,ld=tr.ReactCurrentBatchConfig,Zr=0,ke=null,Ne=null,Ye=null,Ll=!1,ia=!1,ka=0,rP=0;function rt(){throw Error(V(321))}function Fh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mn(e[n],t[n]))return!1;return!0}function zh(e,t,n,r,i,o){if(Zr=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gs.current=e===null||e.memoizedState===null?sP:lP,e=n(r,i),ia){o=0;do{if(ia=!1,ka=0,25<=o)throw Error(V(301));o+=1,Ye=Ne=null,t.updateQueue=null,Gs.current=uP,e=n(r,i)}while(ia)}if(Gs.current=Al,t=Ne!==null&&Ne.next!==null,Zr=0,Ye=Ne=ke=null,Ll=!1,t)throw Error(V(300));return e}function Nh(){var e=ka!==0;return ka=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ke.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Kt(){if(Ne===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ye===null?ke.memoizedState:Ye.next;if(t!==null)Ye=t,Ne=e;else{if(e===null)throw Error(V(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ye===null?ke.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Pa(e,t){return typeof t=="function"?t(e):t}function ud(e){var t=Kt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var d=u.lane;if((Zr&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,ke.lanes|=d,Jr|=d}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,mn(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,Jr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cd(e){var t=Kt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);mn(o,t.memoizedState)||(Et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function qx(){}function Yx(e,t){var n=ke,r=Kt(),i=t(),o=!mn(r.memoizedState,i);if(o&&(r.memoizedState=i,Et=!0),r=r.queue,Bh(Qx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Ta(9,Kx.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(V(349));Zr&30||Xx(n,t,i)}return i}function Xx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kx(e,t,n,r){t.value=n,t.getSnapshot=r,Zx(t)&&Jx(e)}function Qx(e,t,n){return n(function(){Zx(t)&&Jx(e)})}function Zx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mn(e,n)}catch{return!0}}function Jx(e){var t=Kn(e,1);t!==null&&dn(t,e,1,-1)}function u0(e){var t=Sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},t.queue=e,e=e.dispatch=aP.bind(null,ke,e),[t.memoizedState,e]}function Ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function eb(){return Kt().memoizedState}function qs(e,t,n,r){var i=Sn();ke.flags|=e,i.memoizedState=Ta(1|t,n,void 0,r===void 0?null:r)}function ku(e,t,n,r){var i=Kt();r=r===void 0?null:r;var o=void 0;if(Ne!==null){var a=Ne.memoizedState;if(o=a.destroy,r!==null&&Fh(r,a.deps)){i.memoizedState=Ta(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Ta(1|t,n,o,r)}function c0(e,t){return qs(8390656,8,e,t)}function Bh(e,t){return ku(2048,8,e,t)}function tb(e,t){return ku(4,2,e,t)}function nb(e,t){return ku(4,4,e,t)}function rb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ib(e,t,n){return n=n!=null?n.concat([e]):null,ku(4,4,rb.bind(null,t,e),n)}function Vh(){}function ob(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ab(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sb(e,t,n){return Zr&21?(mn(n,t)||(n=cx(),ke.lanes|=n,Jr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function iP(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=ld.transition;ld.transition={};try{e(!1),t()}finally{me=n,ld.transition=r}}function lb(){return Kt().memoizedState}function oP(e,t,n){var r=Cr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ub(e))cb(t,n);else if(n=Nx(e,t,n,r),n!==null){var i=gt();dn(n,e,r,i),db(n,t,r)}}function aP(e,t,n){var r=Cr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ub(e))cb(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,mn(l,a)){var s=t.interleaved;s===null?(i.next=i,Ih(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Nx(e,t,i,r),n!==null&&(i=gt(),dn(n,e,r,i),db(n,t,r))}}function ub(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function cb(e,t){ia=Ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function db(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xh(e,n)}}var Al={readContext:Xt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},sP={readContext:Xt,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:Xt,useEffect:c0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qs(4194308,4,rb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qs(4194308,4,e,t)},useInsertionEffect:function(e,t){return qs(4,2,e,t)},useMemo:function(e,t){var n=Sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=oP.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:u0,useDebugValue:Vh,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=u0(!1),t=e[0];return e=iP.bind(null,e[1]),Sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Sn();if(Ce){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Xe===null)throw Error(V(349));Zr&30||Xx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,c0(Qx.bind(null,r,o,e),[e]),r.flags|=2048,Ta(9,Kx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Sn(),t=Xe.identifierPrefix;if(Ce){var n=Wn,r=Un;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ka++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rP++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lP={readContext:Xt,useCallback:ob,useContext:Xt,useEffect:Bh,useImperativeHandle:ib,useInsertionEffect:tb,useLayoutEffect:nb,useMemo:ab,useReducer:ud,useRef:eb,useState:function(){return ud(Pa)},useDebugValue:Vh,useDeferredValue:function(e){var t=Kt();return sb(t,Ne.memoizedState,e)},useTransition:function(){var e=ud(Pa)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:qx,useSyncExternalStore:Yx,useId:lb,unstable_isNewReconciler:!1},uP={readContext:Xt,useCallback:ob,useContext:Xt,useEffect:Bh,useImperativeHandle:ib,useInsertionEffect:tb,useLayoutEffect:nb,useMemo:ab,useReducer:cd,useRef:eb,useState:function(){return cd(Pa)},useDebugValue:Vh,useDeferredValue:function(e){var t=Kt();return Ne===null?t.memoizedState=e:sb(t,Ne.memoizedState,e)},useTransition:function(){var e=cd(Pa)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:qx,useSyncExternalStore:Yx,useId:lb,unstable_isNewReconciler:!1};function Qi(e,t){try{var n="",r=t;do n+=RE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function dd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cP=typeof WeakMap=="function"?WeakMap:Map;function fb(e,t,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fl||(Fl=!0,up=r),Jf(e,t)},n}function pb(e,t,n){n=Hn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Jf(e,t),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function d0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cP;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=CP.bind(null,e,t,n),t.then(e,e))}function f0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function p0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Hn(-1,1),t.tag=2,Sr(n,t,1))),n.lanes|=1),e)}var dP=tr.ReactCurrentOwner,Et=!1;function ht(e,t,n,r){t.child=e===null?Hx(t,null,n,r):Xi(t,e.child,n,r)}function h0(e,t,n,r,i){n=n.render;var o=t.ref;return Bi(t,i),r=zh(e,t,n,r,o,i),n=Nh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qn(e,t,i)):(Ce&&n&&Ph(t),t.flags|=1,ht(e,t,r,i),t.child)}function m0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Kh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,hb(e,t,o,r,i)):(e=Qs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(a,r)&&e.ref===t.ref)return Qn(e,t,i)}return t.flags|=1,e=Er(o,r),e.ref=t.ref,e.return=t,t.child=e}function hb(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ba(o,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Qn(e,t,i)}return ep(e,t,n,r,i)}function mb(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Ai,It),It|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Ai,It),It|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(Ai,It),It|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ve(Ai,It),It|=r;return ht(e,t,i,n),t.child}function gb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ep(e,t,n,r,i){var o=Pt(n)?Kr:ct.current;return o=qi(t,o),Bi(t,i),n=zh(e,t,n,r,o,i),r=Nh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qn(e,t,i)):(Ce&&r&&Ph(t),t.flags|=1,ht(e,t,n,i),t.child)}function g0(e,t,n,r,i){if(Pt(n)){var o=!0;Tl(t)}else o=!1;if(Bi(t,i),t.stateNode===null)Ys(e,t),Ux(t,n,r),Zf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xt(u):(u=Pt(n)?Kr:ct.current,u=qi(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&s0(t,a,r,u),ur=!1;var y=t.memoizedState;a.state=y,Il(t,r,a,i),s=t.memoizedState,l!==r||y!==s||kt.current||ur?(typeof d=="function"&&(Qf(t,n,d,r),s=t.memoizedState),(l=ur||a0(t,n,l,r,y,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Bx(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:on(t.type,l),a.props=u,c=t.pendingProps,y=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Xt(s):(s=Pt(n)?Kr:ct.current,s=qi(t,s));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||y!==s)&&s0(t,a,r,s),ur=!1,y=t.memoizedState,a.state=y,Il(t,r,a,i);var m=t.memoizedState;l!==c||y!==m||kt.current||ur?(typeof p=="function"&&(Qf(t,n,p,r),m=t.memoizedState),(u=ur||a0(t,n,u,r,y,m,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return tp(e,t,n,r,o,i)}function tp(e,t,n,r,i,o){gb(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&t0(t,n,!1),Qn(e,t,o);r=t.stateNode,dP.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Xi(t,e.child,null,o),t.child=Xi(t,null,l,o)):ht(e,t,l,o),t.memoizedState=r.state,i&&t0(t,n,!0),t.child}function vb(e){var t=e.stateNode;t.pendingContext?e0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&e0(e,t.context,!1),Lh(e,t.containerInfo)}function v0(e,t,n,r,i){return Yi(),Oh(i),t.flags|=256,ht(e,t,n,r),t.child}var np={dehydrated:null,treeContext:null,retryLane:0};function rp(e){return{baseLanes:e,cachePool:null,transitions:null}}function yb(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ee,i&1),e===null)return Xf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ou(a,r,0,null),e=Yr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=rp(n),t.memoizedState=np,e):Uh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return fP(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Er(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Er(l,o):(o=Yr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?rp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=np,r}return o=e.child,e=o.sibling,r=Er(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uh(e,t){return t=Ou({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xs(e,t,n,r){return r!==null&&Oh(r),Xi(t,e.child,null,n),e=Uh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fP(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=dd(Error(V(422))),xs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ou({mode:"visible",children:r.children},i,0,null),o=Yr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Xi(t,e.child,null,a),t.child.memoizedState=rp(a),t.memoizedState=np,o);if(!(t.mode&1))return xs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=dd(o,r,void 0),xs(e,t,a,r)}if(l=(a&e.childLanes)!==0,Et||l){if(r=Xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kn(e,i),dn(r,e,i,-1))}return Xh(),r=dd(Error(V(421))),xs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=EP.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Lt=wr(i.nextSibling),Rt=t,Ce=!0,ln=null,e!==null&&(Ht[Gt++]=Un,Ht[Gt++]=Wn,Ht[Gt++]=Qr,Un=e.id,Wn=e.overflow,Qr=t),t=Uh(t,r.children),t.flags|=4096,t)}function y0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kf(e.return,t,n)}function fd(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function xb(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ht(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&y0(e,n,t);else if(e.tag===19)y0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Dl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Dl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fd(t,!0,n,null,o);break;case"together":fd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ys(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=Er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pP(e,t,n){switch(t.tag){case 3:vb(t),Yi();break;case 5:Gx(t);break;case 1:Pt(t.type)&&Tl(t);break;case 4:Lh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?yb(e,t,n):(ve(Ee,Ee.current&1),e=Qn(e,t,n),e!==null?e.sibling:null);ve(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,mb(e,t,n)}return Qn(e,t,n)}var bb,ip,wb,Sb;bb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ip=function(){};wb=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Hr(Tn.current);var o=null;switch(n){case"input":i=kf(e,i),r=kf(e,r),o=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),o=[];break;case"textarea":i=Of(e,i),r=Of(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=kl)}Mf(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(pa.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(pa.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ye("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Sb=function(e,t,n,r){n!==r&&(t.flags|=4)};function Io(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hP(e,t,n){var r=t.pendingProps;switch(Th(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return Pt(t.type)&&Pl(),it(t),null;case 3:return r=t.stateNode,Ki(),be(kt),be(ct),Rh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ln!==null&&(fp(ln),ln=null))),ip(e,t),it(t),null;case 5:Ah(t);var i=Hr(Ea.current);if(n=t.type,e!==null&&t.stateNode!=null)wb(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return it(t),null}if(e=Hr(Tn.current),vs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[En]=t,r[_a]=o,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)ye(qo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Pg(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":Og(r,o),ye("invalid",r)}Mf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),i=["children",""+l]):pa.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":ls(r),Tg(r,o,!0);break;case"textarea":ls(r),jg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=kl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[En]=t,e[_a]=r,bb(e,t,!1,!1),t.stateNode=e;e:{switch(a=$f(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)ye(qo[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":Pg(e,r),i=kf(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Og(e,r),i=Of(e,r),ye("invalid",e);break;default:i=r}Mf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Zy(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ky(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ha(e,s):typeof s=="number"&&ha(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(pa.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ye("scroll",e):s!=null&&ph(e,o,s,a))}switch(n){case"input":ls(e),Tg(e,r,!1);break;case"textarea":ls(e),jg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ri(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ri(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)Sb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Hr(Ea.current),Hr(Tn.current),vs(t)){if(r=t.stateNode,n=t.memoizedProps,r[En]=t,(o=r.nodeValue!==n)&&(e=Rt,e!==null))switch(e.tag){case 3:gs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=t,t.stateNode=r}return it(t),null;case 13:if(be(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Lt!==null&&t.mode&1&&!(t.flags&128))zx(),Yi(),t.flags|=98560,o=!1;else if(o=vs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[En]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),o=!1}else ln!==null&&(fp(ln),ln=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Ve===0&&(Ve=3):Xh())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return Ki(),ip(e,t),e===null&&wa(t.stateNode.containerInfo),it(t),null;case 10:return $h(t.type._context),it(t),null;case 17:return Pt(t.type)&&Pl(),it(t),null;case 19:if(be(Ee),o=t.memoizedState,o===null)return it(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Io(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Dl(e),a!==null){for(t.flags|=128,Io(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>Zi&&(t.flags|=128,r=!0,Io(o,!1),t.lanes=4194304)}else{if(!r)if(e=Dl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ce)return it(t),null}else 2*Me()-o.renderingStartTime>Zi&&n!==1073741824&&(t.flags|=128,r=!0,Io(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,n=Ee.current,ve(Ee,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return Yh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?It&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function mP(e,t){switch(Th(t),t.tag){case 1:return Pt(t.type)&&Pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ki(),be(kt),be(ct),Rh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ah(t),null;case 13:if(be(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Ee),null;case 4:return Ki(),null;case 10:return $h(t.type._context),null;case 22:case 23:return Yh(),null;case 24:return null;default:return null}}var bs=!1,lt=!1,gP=typeof WeakSet=="function"?WeakSet:Set,H=null;function Li(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function op(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var x0=!1;function vP(e,t){if(Vf=_l,e=kx(),kh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,c=e,y=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(l=a+i),c!==o||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(p=c.firstChild)!==null;)y=c,c=p;for(;;){if(c===e)break t;if(y===n&&++u===i&&(l=a),y===o&&++d===r&&(s=a),(p=c.nextSibling)!==null)break;c=y,y=c.parentNode}c=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:e,selectionRange:n},_l=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,w=m.memoizedState,h=t.stateNode,v=h.getSnapshotBeforeUpdate(t.elementType===t.type?g:on(t.type,g),w);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return m=x0,x0=!1,m}function oa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&op(t,n,o)}i=i.next}while(i!==r)}}function Pu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ap(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _b(e){var t=e.alternate;t!==null&&(e.alternate=null,_b(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[En],delete t[_a],delete t[Gf],delete t[Jk],delete t[eP])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cb(e){return e.tag===5||e.tag===3||e.tag===4}function b0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kl));else if(r!==4&&(e=e.child,e!==null))for(sp(e,t,n),e=e.sibling;e!==null;)sp(e,t,n),e=e.sibling}function lp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lp(e,t,n),e=e.sibling;e!==null;)lp(e,t,n),e=e.sibling}var Je=null,an=!1;function ar(e,t,n){for(n=n.child;n!==null;)Eb(e,t,n),n=n.sibling}function Eb(e,t,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(xu,n)}catch{}switch(n.tag){case 5:lt||Li(n,t);case 6:var r=Je,i=an;Je=null,ar(e,t,n),Je=r,an=i,Je!==null&&(an?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(an?(e=Je,n=n.stateNode,e.nodeType===8?od(e.parentNode,n):e.nodeType===1&&od(e,n),ya(e)):od(Je,n.stateNode));break;case 4:r=Je,i=an,Je=n.stateNode.containerInfo,an=!0,ar(e,t,n),Je=r,an=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&op(n,t,a),i=i.next}while(i!==r)}ar(e,t,n);break;case 1:if(!lt&&(Li(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,t,l)}ar(e,t,n);break;case 21:ar(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,ar(e,t,n),lt=r):ar(e,t,n);break;default:ar(e,t,n)}}function w0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gP),t.forEach(function(r){var i=kP.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,an=!1;break e;case 3:Je=l.stateNode.containerInfo,an=!0;break e;case 4:Je=l.stateNode.containerInfo,an=!0;break e}l=l.return}if(Je===null)throw Error(V(160));Eb(o,a,i),Je=null,an=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kb(t,e),t=t.sibling}function kb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(en(t,e),bn(e),r&4){try{oa(3,e,e.return),Pu(3,e)}catch(g){Oe(e,e.return,g)}try{oa(5,e,e.return)}catch(g){Oe(e,e.return,g)}}break;case 1:en(t,e),bn(e),r&512&&n!==null&&Li(n,n.return);break;case 5:if(en(t,e),bn(e),r&512&&n!==null&&Li(n,n.return),e.flags&32){var i=e.stateNode;try{ha(i,"")}catch(g){Oe(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&qy(i,o),$f(l,a);var u=$f(l,o);for(a=0;a<s.length;a+=2){var d=s[a],c=s[a+1];d==="style"?Zy(i,c):d==="dangerouslySetInnerHTML"?Ky(i,c):d==="children"?ha(i,c):ph(i,d,c,u)}switch(l){case"input":Pf(i,o);break;case"textarea":Yy(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Ri(i,!!o.multiple,p,!1):y!==!!o.multiple&&(o.defaultValue!=null?Ri(i,!!o.multiple,o.defaultValue,!0):Ri(i,!!o.multiple,o.multiple?[]:"",!1))}i[_a]=o}catch(g){Oe(e,e.return,g)}}break;case 6:if(en(t,e),bn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){Oe(e,e.return,g)}}break;case 3:if(en(t,e),bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(t.containerInfo)}catch(g){Oe(e,e.return,g)}break;case 4:en(t,e),bn(e);break;case 13:en(t,e),bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gh=Me())),r&4&&w0(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(u=lt)||d,en(t,e),lt=u):en(t,e),bn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(H=e,d=e.child;d!==null;){for(c=H=d;H!==null;){switch(y=H,p=y.child,y.tag){case 0:case 11:case 14:case 15:oa(4,y,y.return);break;case 1:Li(y,y.return);var m=y.stateNode;if(typeof m.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Oe(r,n,g)}}break;case 5:Li(y,y.return);break;case 22:if(y.memoizedState!==null){_0(c);continue}}p!==null?(p.return=y,H=p):_0(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Qy("display",a))}catch(g){Oe(e,e.return,g)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(g){Oe(e,e.return,g)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:en(t,e),bn(e),r&4&&w0(e);break;case 21:break;default:en(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cb(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ha(i,""),r.flags&=-33);var o=b0(e);lp(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=b0(e);sp(e,l,a);break;default:throw Error(V(161))}}catch(s){Oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yP(e,t,n){H=e,Pb(e)}function Pb(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||bs;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||lt;l=bs;var u=lt;if(bs=a,(lt=s)&&!u)for(H=i;H!==null;)a=H,s=a.child,a.tag===22&&a.memoizedState!==null?C0(i):s!==null?(s.return=a,H=s):C0(i);for(;o!==null;)H=o,Pb(o),o=o.sibling;H=i,bs=l,lt=u}S0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):S0(e)}}function S0(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||Pu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:on(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&o0(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}o0(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ya(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}lt||t.flags&512&&ap(t)}catch(y){Oe(t,t.return,y)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function _0(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function C0(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pu(4,t)}catch(s){Oe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Oe(t,i,s)}}var o=t.return;try{ap(t)}catch(s){Oe(t,o,s)}break;case 5:var a=t.return;try{ap(t)}catch(s){Oe(t,a,s)}}}catch(s){Oe(t,t.return,s)}if(t===e){H=null;break}var l=t.sibling;if(l!==null){l.return=t.return,H=l;break}H=t.return}}var xP=Math.ceil,Rl=tr.ReactCurrentDispatcher,Wh=tr.ReactCurrentOwner,Yt=tr.ReactCurrentBatchConfig,se=0,Xe=null,Ae=null,tt=0,It=0,Ai=Mr(0),Ve=0,Oa=null,Jr=0,Tu=0,Hh=0,aa=null,Ct=null,Gh=0,Zi=1/0,Rn=null,Fl=!1,up=null,_r=null,ws=!1,hr=null,zl=0,sa=0,cp=null,Xs=-1,Ks=0;function gt(){return se&6?Me():Xs!==-1?Xs:Xs=Me()}function Cr(e){return e.mode&1?se&2&&tt!==0?tt&-tt:nP.transition!==null?(Ks===0&&(Ks=cx()),Ks):(e=me,e!==0||(e=window.event,e=e===void 0?16:vx(e.type)),e):1}function dn(e,t,n,r){if(50<sa)throw sa=0,cp=null,Error(V(185));Va(e,n,r),(!(se&2)||e!==Xe)&&(e===Xe&&(!(se&2)&&(Tu|=n),Ve===4&&dr(e,tt)),Tt(e,r),n===1&&se===0&&!(t.mode&1)&&(Zi=Me()+500,Cu&&$r()))}function Tt(e,t){var n=e.callbackNode;nk(e,t);var r=Sl(e,e===Xe?tt:0);if(r===0)n!==null&&Ig(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ig(n),t===1)e.tag===0?tP(E0.bind(null,e)):Ax(E0.bind(null,e)),Qk(function(){!(se&6)&&$r()}),n=null;else{switch(dx(r)){case 1:n=yh;break;case 4:n=lx;break;case 16:n=wl;break;case 536870912:n=ux;break;default:n=wl}n=Lb(n,Tb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tb(e,t){if(Xs=-1,Ks=0,se&6)throw Error(V(327));var n=e.callbackNode;if(Vi()&&e.callbackNode!==n)return null;var r=Sl(e,e===Xe?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Nl(e,r);else{t=r;var i=se;se|=2;var o=jb();(Xe!==e||tt!==t)&&(Rn=null,Zi=Me()+500,qr(e,t));do try{SP();break}catch(l){Ob(e,l)}while(1);Mh(),Rl.current=o,se=i,Ae!==null?t=0:(Xe=null,tt=0,t=Ve)}if(t!==0){if(t===2&&(i=Rf(e),i!==0&&(r=i,t=dp(e,i))),t===1)throw n=Oa,qr(e,0),dr(e,r),Tt(e,Me()),n;if(t===6)dr(e,r);else{if(i=e.current.alternate,!(r&30)&&!bP(i)&&(t=Nl(e,r),t===2&&(o=Rf(e),o!==0&&(r=o,t=dp(e,o))),t===1))throw n=Oa,qr(e,0),dr(e,r),Tt(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Fr(e,Ct,Rn);break;case 3:if(dr(e,r),(r&130023424)===r&&(t=Gh+500-Me(),10<t)){if(Sl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hf(Fr.bind(null,e,Ct,Rn),t);break}Fr(e,Ct,Rn);break;case 4:if(dr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-cn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xP(r/1960))-r,10<r){e.timeoutHandle=Hf(Fr.bind(null,e,Ct,Rn),r);break}Fr(e,Ct,Rn);break;case 5:Fr(e,Ct,Rn);break;default:throw Error(V(329))}}}return Tt(e,Me()),e.callbackNode===n?Tb.bind(null,e):null}function dp(e,t){var n=aa;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=Ct,Ct=n,t!==null&&fp(t)),e}function fp(e){Ct===null?Ct=e:Ct.push.apply(Ct,e)}function bP(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!mn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~Hh,t&=~Tu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-cn(t),r=1<<n;e[n]=-1,t&=~r}}function E0(e){if(se&6)throw Error(V(327));Vi();var t=Sl(e,0);if(!(t&1))return Tt(e,Me()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var r=Rf(e);r!==0&&(t=r,n=dp(e,r))}if(n===1)throw n=Oa,qr(e,0),dr(e,t),Tt(e,Me()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fr(e,Ct,Rn),Tt(e,Me()),null}function qh(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Zi=Me()+500,Cu&&$r())}}function ei(e){hr!==null&&hr.tag===0&&!(se&6)&&Vi();var t=se;se|=1;var n=Yt.transition,r=me;try{if(Yt.transition=null,me=1,e)return e()}finally{me=r,Yt.transition=n,se=t,!(se&6)&&$r()}}function Yh(){It=Ai.current,be(Ai)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kk(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Th(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pl();break;case 3:Ki(),be(kt),be(ct),Rh();break;case 5:Ah(r);break;case 4:Ki();break;case 13:be(Ee);break;case 19:be(Ee);break;case 10:$h(r.type._context);break;case 22:case 23:Yh()}n=n.return}if(Xe=e,Ae=e=Er(e.current,null),tt=It=t,Ve=0,Oa=null,Hh=Tu=Jr=0,Ct=aa=null,Wr!==null){for(t=0;t<Wr.length;t++)if(n=Wr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Wr=null}return e}function Ob(e,t){do{var n=Ae;try{if(Mh(),Gs.current=Al,Ll){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ll=!1}if(Zr=0,Ye=Ne=ke=null,ia=!1,ka=0,Wh.current=null,n===null||n.return===null){Ve=1,Oa=t,Ae=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=tt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=f0(a);if(p!==null){p.flags&=-257,p0(p,a,l,o,t),p.mode&1&&d0(o,u,t),t=p,s=u;var m=t.updateQueue;if(m===null){var g=new Set;g.add(s),t.updateQueue=g}else m.add(s);break e}else{if(!(t&1)){d0(o,u,t),Xh();break e}s=Error(V(426))}}else if(Ce&&l.mode&1){var w=f0(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),p0(w,a,l,o,t),Oh(Qi(s,l));break e}}o=s=Qi(s,l),Ve!==4&&(Ve=2),aa===null?aa=[o]:aa.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=fb(o,s,t);i0(o,h);break e;case 1:l=s;var v=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(_r===null||!_r.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=pb(o,l,t);i0(o,S);break e}}o=o.return}while(o!==null)}$b(n)}catch(E){t=E,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function jb(){var e=Rl.current;return Rl.current=Al,e===null?Al:e}function Xh(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Xe===null||!(Jr&268435455)&&!(Tu&268435455)||dr(Xe,tt)}function Nl(e,t){var n=se;se|=2;var r=jb();(Xe!==e||tt!==t)&&(Rn=null,qr(e,t));do try{wP();break}catch(i){Ob(e,i)}while(1);if(Mh(),se=n,Rl.current=r,Ae!==null)throw Error(V(261));return Xe=null,tt=0,Ve}function wP(){for(;Ae!==null;)Mb(Ae)}function SP(){for(;Ae!==null&&!qE();)Mb(Ae)}function Mb(e){var t=Db(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?$b(e):Ae=t,Wh.current=null}function $b(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mP(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Ae=null;return}}else if(n=hP(n,t,It),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ve===0&&(Ve=5)}function Fr(e,t,n){var r=me,i=Yt.transition;try{Yt.transition=null,me=1,_P(e,t,n,r)}finally{Yt.transition=i,me=r}return null}function _P(e,t,n,r){do Vi();while(hr!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(rk(e,o),e===Xe&&(Ae=Xe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ws||(ws=!0,Lb(wl,function(){return Vi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Yt.transition,Yt.transition=null;var a=me;me=1;var l=se;se|=4,Wh.current=null,vP(e,n),kb(n,e),Uk(Uf),_l=!!Vf,Uf=Vf=null,e.current=n,yP(n),YE(),se=l,me=a,Yt.transition=o}else e.current=n;if(ws&&(ws=!1,hr=e,zl=i),o=e.pendingLanes,o===0&&(_r=null),QE(n.stateNode),Tt(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fl)throw Fl=!1,e=up,up=null,e;return zl&1&&e.tag!==0&&Vi(),o=e.pendingLanes,o&1?e===cp?sa++:(sa=0,cp=e):sa=0,$r(),null}function Vi(){if(hr!==null){var e=dx(zl),t=Yt.transition,n=me;try{if(Yt.transition=null,me=16>e?16:e,hr===null)var r=!1;else{if(e=hr,hr=null,zl=0,se&6)throw Error(V(331));var i=se;for(se|=4,H=e.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(H=u;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:oa(8,d,o)}var c=d.child;if(c!==null)c.return=d,H=c;else for(;H!==null;){d=H;var y=d.sibling,p=d.return;if(_b(d),d===u){H=null;break}if(y!==null){y.return=p,H=y;break}H=p}}}var m=o.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:oa(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,H=h;break e}H=o.return}}var v=e.current;for(H=v;H!==null;){a=H;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,H=b;else e:for(a=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pu(9,l)}}catch(E){Oe(l,l.return,E)}if(l===a){H=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,H=S;break e}H=l.return}}if(se=i,$r(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(xu,e)}catch{}r=!0}return r}finally{me=n,Yt.transition=t}}return!1}function k0(e,t,n){t=Qi(n,t),t=fb(e,t,1),e=Sr(e,t,1),t=gt(),e!==null&&(Va(e,1,t),Tt(e,t))}function Oe(e,t,n){if(e.tag===3)k0(e,e,n);else for(;t!==null;){if(t.tag===3){k0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){e=Qi(n,e),e=pb(t,e,1),t=Sr(t,e,1),e=gt(),t!==null&&(Va(t,1,e),Tt(t,e));break}}t=t.return}}function CP(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(tt&n)===n&&(Ve===4||Ve===3&&(tt&130023424)===tt&&500>Me()-Gh?qr(e,0):Hh|=n),Tt(e,t)}function Ib(e,t){t===0&&(e.mode&1?(t=ds,ds<<=1,!(ds&130023424)&&(ds=4194304)):t=1);var n=gt();e=Kn(e,t),e!==null&&(Va(e,t,n),Tt(e,n))}function EP(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ib(e,n)}function kP(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Ib(e,n)}var Db;Db=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,pP(e,t,n);Et=!!(e.flags&131072)}else Et=!1,Ce&&t.flags&1048576&&Rx(t,jl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ys(e,t),e=t.pendingProps;var i=qi(t,ct.current);Bi(t,n),i=zh(null,t,r,e,i,n);var o=Nh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(r)?(o=!0,Tl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dh(t),i.updater=Eu,t.stateNode=i,i._reactInternals=t,Zf(t,r,e,n),t=tp(null,t,r,!0,o,n)):(t.tag=0,Ce&&o&&Ph(t),ht(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ys(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=TP(r),e=on(r,e),i){case 0:t=ep(null,t,r,e,n);break e;case 1:t=g0(null,t,r,e,n);break e;case 11:t=h0(null,t,r,e,n);break e;case 14:t=m0(null,t,r,on(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:on(r,i),ep(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:on(r,i),g0(e,t,r,i,n);case 3:e:{if(vb(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Bx(e,t),Il(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qi(Error(V(423)),t),t=v0(e,t,r,n,i);break e}else if(r!==i){i=Qi(Error(V(424)),t),t=v0(e,t,r,n,i);break e}else for(Lt=wr(t.stateNode.containerInfo.firstChild),Rt=t,Ce=!0,ln=null,n=Hx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yi(),r===i){t=Qn(e,t,n);break e}ht(e,t,r,n)}t=t.child}return t;case 5:return Gx(t),e===null&&Xf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Wf(r,i)?a=null:o!==null&&Wf(r,o)&&(t.flags|=32),gb(e,t),ht(e,t,a,n),t.child;case 6:return e===null&&Xf(t),null;case 13:return yb(e,t,n);case 4:return Lh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xi(t,null,r,n):ht(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:on(r,i),h0(e,t,r,i,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ve(Ml,r._currentValue),r._currentValue=a,o!==null)if(mn(o.value,a)){if(o.children===i.children&&!kt.current){t=Qn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Hn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Kf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Kf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ht(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Bi(t,n),i=Xt(i),r=r(i),t.flags|=1,ht(e,t,r,n),t.child;case 14:return r=t.type,i=on(r,t.pendingProps),i=on(r.type,i),m0(e,t,r,i,n);case 15:return hb(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:on(r,i),Ys(e,t),t.tag=1,Pt(r)?(e=!0,Tl(t)):e=!1,Bi(t,n),Ux(t,r,i),Zf(t,r,i,n),tp(null,t,r,!0,e,n);case 19:return xb(e,t,n);case 22:return mb(e,t,n)}throw Error(V(156,t.tag))};function Lb(e,t){return sx(e,t)}function PP(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,r){return new PP(e,t,n,r)}function Kh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function TP(e){if(typeof e=="function")return Kh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mh)return 11;if(e===gh)return 14}return 2}function Er(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Kh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ki:return Yr(n.children,i,o,t);case hh:a=8,i|=8;break;case Sf:return e=qt(12,n,t,i|2),e.elementType=Sf,e.lanes=o,e;case _f:return e=qt(13,n,t,i),e.elementType=_f,e.lanes=o,e;case Cf:return e=qt(19,n,t,i),e.elementType=Cf,e.lanes=o,e;case Wy:return Ou(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vy:a=10;break e;case Uy:a=9;break e;case mh:a=11;break e;case gh:a=14;break e;case lr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=qt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yr(e,t,n,r){return e=qt(7,e,r,t),e.lanes=n,e}function Ou(e,t,n,r){return e=qt(22,e,r,t),e.elementType=Wy,e.lanes=n,e.stateNode={isHidden:!1},e}function pd(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function hd(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function OP(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yc(0),this.expirationTimes=Yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qh(e,t,n,r,i,o,a,l,s){return e=new OP(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=qt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dh(o),e}function jP(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ei,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ab(e){if(!e)return Tr;e=e._reactInternals;e:{if(li(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Pt(n))return Lx(e,n,t)}return t}function Rb(e,t,n,r,i,o,a,l,s){return e=Qh(n,r,!0,e,i,o,a,l,s),e.context=Ab(null),n=e.current,r=gt(),i=Cr(n),o=Hn(r,i),o.callback=t??null,Sr(n,o,i),e.current.lanes=i,Va(e,i,r),Tt(e,r),e}function ju(e,t,n,r){var i=t.current,o=gt(),a=Cr(i);return n=Ab(n),t.context===null?t.context=n:t.pendingContext=n,t=Hn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sr(i,t,a),e!==null&&(dn(e,i,a,o),Hs(e,i,a)),a}function Bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function P0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zh(e,t){P0(e,t),(e=e.alternate)&&P0(e,t)}function MP(){return null}var Fb=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jh(e){this._internalRoot=e}Mu.prototype.render=Jh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));ju(e,t,null,null)};Mu.prototype.unmount=Jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ei(function(){ju(null,e,null,null)}),t[Xn]=null}};function Mu(e){this._internalRoot=e}Mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=hx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cr.length&&t!==0&&t<cr[n].priority;n++);cr.splice(n,0,e),n===0&&gx(e)}};function em(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function T0(){}function $P(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Bl(a);o.call(u)}}var a=Rb(t,r,e,0,null,!1,!1,"",T0);return e._reactRootContainer=a,e[Xn]=a.current,wa(e.nodeType===8?e.parentNode:e),ei(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Bl(s);l.call(u)}}var s=Qh(e,0,!1,null,null,!1,!1,"",T0);return e._reactRootContainer=s,e[Xn]=s.current,wa(e.nodeType===8?e.parentNode:e),ei(function(){ju(t,s,n,r)}),s}function Iu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Bl(a);l.call(s)}}ju(t,a,e,i)}else a=$P(n,t,e,i,r);return Bl(a)}fx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Go(t.pendingLanes);n!==0&&(xh(t,n|1),Tt(t,Me()),!(se&6)&&(Zi=Me()+500,$r()))}break;case 13:ei(function(){var r=Kn(e,1);if(r!==null){var i=gt();dn(r,e,1,i)}}),Zh(e,1)}};bh=function(e){if(e.tag===13){var t=Kn(e,134217728);if(t!==null){var n=gt();dn(t,e,134217728,n)}Zh(e,134217728)}};px=function(e){if(e.tag===13){var t=Cr(e),n=Kn(e,t);if(n!==null){var r=gt();dn(n,e,t,r)}Zh(e,t)}};hx=function(){return me};mx=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};Df=function(e,t,n){switch(t){case"input":if(Pf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_u(r);if(!i)throw Error(V(90));Gy(r),Pf(r,i)}}}break;case"textarea":Yy(e,n);break;case"select":t=n.value,t!=null&&Ri(e,!!n.multiple,t,!1)}};tx=qh;nx=ei;var IP={usingClientEntryPoint:!1,Events:[Wa,ji,_u,Jy,ex,qh]},Do={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},DP={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ox(e),e===null?null:e.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||MP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{xu=Ss.inject(DP),Pn=Ss}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IP;Bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!em(t))throw Error(V(200));return jP(e,t,null,n)};Bt.createRoot=function(e,t){if(!em(e))throw Error(V(299));var n=!1,r="",i=Fb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qh(e,1,!1,null,null,n,!1,r,i),e[Xn]=t.current,wa(e.nodeType===8?e.parentNode:e),new Jh(t)};Bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=ox(t),e=e===null?null:e.stateNode,e};Bt.flushSync=function(e){return ei(e)};Bt.hydrate=function(e,t,n){if(!$u(t))throw Error(V(200));return Iu(null,e,t,!0,n)};Bt.hydrateRoot=function(e,t,n){if(!em(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Fb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Rb(t,null,e,1,n??null,i,!1,o,a),e[Xn]=t.current,wa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mu(t)};Bt.render=function(e,t,n){if(!$u(t))throw Error(V(200));return Iu(null,e,t,!1,n)};Bt.unmountComponentAtNode=function(e){if(!$u(e))throw Error(V(40));return e._reactRootContainer?(ei(function(){Iu(null,null,e,!1,function(){e._reactRootContainer=null,e[Xn]=null})}),!0):!1};Bt.unstable_batchedUpdates=qh;Bt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$u(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Iu(e,t,n,!1,r)};Bt.version="18.2.0-next-9e3b772b8-20220608";function zb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zb)}catch(e){console.error(e)}}zb(),Ry.exports=Bt;var Du=Ry.exports,O0=Du;bf.createRoot=O0.createRoot,bf.hydrateRoot=O0.hydrateRoot;var ut=function(){return ut=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ut.apply(this,arguments)};function Ji(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function LP(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var AP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,RP=LP(function(e){return AP.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),xe="-ms-",la="-moz-",ue="-webkit-",Nb="comm",Lu="rule",tm="decl",FP="@import",zP="@namespace",Bb="@keyframes",NP="@layer",Vb=Math.abs,nm=String.fromCharCode,pp=Object.assign;function BP(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function Ub(e){return e.trim()}function Fn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Zs(e,t,n){return e.indexOf(t,n)}function Be(e,t){return e.charCodeAt(t)|0}function ti(e,t,n){return e.slice(t,n)}function sn(e){return e.length}function Wb(e){return e.length}function Yo(e,t){return t.push(e),e}function VP(e,t){return e.map(t).join("")}function j0(e,t){return e.filter(function(n){return!Fn(n,t)})}var Au=1,eo=1,Hb=0,Qt=0,De=0,mo="";function Ru(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Au,column:eo,length:a,return:"",siblings:l}}function sr(e,t){return pp(Ru("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function pi(e){for(;e.root;)e=sr(e.root,{children:[e]});Yo(e,e.siblings)}function UP(){return De}function WP(){return De=Qt>0?Be(mo,--Qt):0,eo--,De===10&&(eo=1,Au--),De}function fn(){return De=Qt<Hb?Be(mo,Qt++):0,eo++,De===10&&(eo=1,Au++),De}function mr(){return Be(mo,Qt)}function Js(){return Qt}function Fu(e,t){return ti(mo,e,t)}function ja(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function HP(e){return Au=eo=1,Hb=sn(mo=e),Qt=0,[]}function GP(e){return mo="",e}function md(e){return Ub(Fu(Qt-1,hp(e===91?e+2:e===40?e+1:e)))}function qP(e){for(;(De=mr())&&De<33;)fn();return ja(e)>2||ja(De)>3?"":" "}function YP(e,t){for(;--t&&fn()&&!(De<48||De>102||De>57&&De<65||De>70&&De<97););return Fu(e,Js()+(t<6&&mr()==32&&fn()==32))}function hp(e){for(;fn();)switch(De){case e:return Qt;case 34:case 39:e!==34&&e!==39&&hp(De);break;case 40:e===41&&hp(e);break;case 92:fn();break}return Qt}function XP(e,t){for(;fn()&&e+De!==47+10;)if(e+De===42+42&&mr()===47)break;return"/*"+Fu(t,Qt-1)+"*"+nm(e===47?e:fn())}function KP(e){for(;!ja(mr());)fn();return Fu(e,Qt)}function QP(e){return GP(el("",null,null,null,[""],e=HP(e),0,[0],e))}function el(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,p=0,m=0,g=1,w=1,h=1,v=0,b="",S=i,E=o,T=r,k=b;w;)switch(m=v,v=fn()){case 40:if(m!=108&&Be(k,c-1)==58){Zs(k+=ne(md(v),"&","&\f"),"&\f",Vb(u?l[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:k+=md(v);break;case 9:case 10:case 13:case 32:k+=qP(m);break;case 92:k+=YP(Js()-1,7);continue;case 47:switch(mr()){case 42:case 47:Yo(ZP(XP(fn(),Js()),t,n,s),s),(ja(m||1)==5||ja(mr()||1)==5)&&sn(k)&&ti(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*g:l[u++]=sn(k)*h;case 125*g:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+d:h==-1&&(k=ne(k,/\f/g,"")),p>0&&(sn(k)-c||g===0&&m===47)&&Yo(p>32?$0(k+";",r,n,c-1,s):$0(ne(k," ","")+";",r,n,c-2,s),s);break;case 59:k+=";";default:if(Yo(T=M0(k,t,n,u,d,i,l,b,S=[],E=[],c,o),o),v===123)if(d===0)el(k,t,T,T,S,o,c,l,E);else{switch(y){case 99:if(Be(k,3)===110)break;case 108:if(Be(k,2)===97)break;default:d=0;case 100:case 109:case 115:}d?el(e,T,T,r&&Yo(M0(e,T,T,0,0,i,l,b,i,S=[],c,E),E),i,E,c,l,r?S:E):el(k,T,T,T,[""],E,0,l,E)}}u=d=p=0,g=h=1,b=k="",c=a;break;case 58:c=1+sn(k),p=m;default:if(g<1){if(v==123)--g;else if(v==125&&g++==0&&WP()==125)continue}switch(k+=nm(v),v*g){case 38:h=d>0?1:(k+="\f",-1);break;case 44:l[u++]=(sn(k)-1)*h,h=1;break;case 64:mr()===45&&(k+=md(fn())),y=mr(),d=c=sn(b=k+=KP(Js())),v++;break;case 45:m===45&&sn(k)==2&&(g=0)}}return o}function M0(e,t,n,r,i,o,a,l,s,u,d,c){for(var y=i-1,p=i===0?o:[""],m=Wb(p),g=0,w=0,h=0;g<r;++g)for(var v=0,b=ti(e,y+1,y=Vb(w=a[g])),S=e;v<m;++v)(S=Ub(w>0?p[v]+" "+b:ne(b,/&\f/g,p[v])))&&(s[h++]=S);return Ru(e,t,n,i===0?Lu:l,s,u,d,c)}function ZP(e,t,n,r){return Ru(e,t,n,Nb,nm(UP()),ti(e,2,-2),0,r)}function $0(e,t,n,r,i){return Ru(e,t,n,tm,ti(e,0,r),ti(e,r+1,-1),r,i)}function Gb(e,t,n){switch(BP(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return la+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+la+e+xe+e+e;case 5936:switch(Be(e,t+11)){case 114:return ue+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+xe+e+e;case 6165:return ue+e+xe+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return ue+e+xe+"flex-item-"+ne(e,/flex-|-self/g,"")+(Fn(e,/flex-|baseline/)?"":xe+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+xe+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+xe+ne(e,"shrink","negative")+e;case 5292:return ue+e+xe+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+xe+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+xe+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!Fn(e,/flex-|baseline/))return xe+"grid-column-align"+ti(e,t)+e;break;case 2592:case 3360:return xe+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Fn(r.props,/grid-\w+-end/)})?~Zs(e+(n=n[t].value),"span",0)?e:xe+ne(e,"-start","")+e+xe+"grid-row-span:"+(~Zs(n,"span",0)?Fn(n,/\d+/):+Fn(n,/\d+/)-+Fn(e,/\d+/))+";":xe+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Fn(r.props,/grid-\w+-start/)})?e:xe+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sn(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+la+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zs(e,"stretch",0)?Gb(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return xe+i+":"+o+u+(a?xe+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Be(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Be(e,Be(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Be(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+xe+"$2box$3")+e;case 100:return ne(e,":",":"+xe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Vl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function JP(e,t,n,r){switch(e.type){case NP:if(e.children.length)break;case FP:case zP:case tm:return e.return=e.return||e.value;case Nb:return"";case Bb:return e.return=e.value+"{"+Vl(e.children,r)+"}";case Lu:if(!sn(e.value=e.props.join(",")))return""}return sn(n=Vl(e.children,r))?e.return=e.value+"{"+n+"}":""}function eT(e){var t=Wb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function tT(e){return function(t){t.root||(t=t.return)&&e(t)}}function nT(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case tm:e.return=Gb(e.value,e.length,n);return;case Bb:return Vl([sr(e,{value:ne(e.value,"@","@"+ue)})],r);case Lu:if(e.length)return VP(n=e.props,function(i){switch(Fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pi(sr(e,{props:[ne(i,/:(read-\w+)/,":"+la+"$1")]})),pi(sr(e,{props:[i]})),pp(e,{props:j0(n,r)});break;case"::placeholder":pi(sr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),pi(sr(e,{props:[ne(i,/:(plac\w+)/,":"+la+"$1")]})),pi(sr(e,{props:[ne(i,/:(plac\w+)/,xe+"input-$1")]})),pi(sr(e,{props:[i]})),pp(e,{props:j0(n,r)});break}return""})}}var rT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},to=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",qb="active",Yb="data-styled-version",zu="6.3.11",rm=`/*!sc*/
`,ua=typeof window<"u"&&typeof document<"u",iT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),oT={};function Ga(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tl=new Map,Ul=new Map,nl=1,Xo=function(e){if(tl.has(e))return tl.get(e);for(;Ul.has(nl);)nl++;var t=nl++;return tl.set(e,t),Ul.set(t,e),t},aT=function(e,t){nl=t+1,tl.set(e,t),Ul.set(t,e)},im=Object.freeze([]),no=Object.freeze({});function Xb(e,t,n){return n===void 0&&(n=no),e.theme!==n.theme&&e.theme||t||n.theme}var Kb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),sT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lT=/(^-|-$)/g;function I0(e){return e.replace(sT,"-").replace(lT,"")}var uT=/(a)(d)/gi,D0=function(e){return String.fromCharCode(e+(e>25?39:97))};function mp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=D0(t%52)+n;return(D0(t%52)+n).replace(uT,"$1-$2")}var gd,zr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Qb=function(e){return zr(5381,e)};function om(e){return mp(Qb(e)>>>0)}function cT(e){return e.displayName||e.name||"Component"}function vd(e){return typeof e=="string"&&!0}var Zb=typeof Symbol=="function"&&Symbol.for,Jb=Zb?Symbol.for("react.memo"):60115,dT=Zb?Symbol.for("react.forward_ref"):60112,fT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ew={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hT=((gd={})[dT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gd[Jb]=ew,gd);function L0(e){return("type"in(t=e)&&t.type.$$typeof)===Jb?ew:"$$typeof"in e?hT[e.$$typeof]:fT;var t}var mT=Object.defineProperty,gT=Object.getOwnPropertyNames,A0=Object.getOwnPropertySymbols,vT=Object.getOwnPropertyDescriptor,yT=Object.getPrototypeOf,R0=Object.prototype;function tw(e,t,n){if(typeof t!="string"){if(R0){var r=yT(t);r&&r!==R0&&tw(e,r,n)}var i=gT(t);A0&&(i=i.concat(A0(t)));for(var o=L0(e),a=L0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in pT||n&&n[s]||a&&s in a||o&&s in o)){var u=vT(t,s);try{mT(e,s,u)}catch{}}}}return e}function ro(e){return typeof e=="function"}function am(e){return typeof e=="object"&&"styledComponentId"in e}function Gr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wl(e,t){return e.join(t||"")}function Ma(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gp(e,t,n){if(n===void 0&&(n=!1),!n&&!Ma(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gp(e[r],t[r]);else if(Ma(t))for(var r in t)e[r]=gp(e[r],t[r]);return e}function sm(e,t){Object.defineProperty(e,"toString",{value:t})}var xT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ga(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+rm;return n},e}(),bT="style[".concat(to,"][").concat(Yb,'="').concat(zu,'"]'),wT=new RegExp("^".concat(to,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},vp=function(e){if(!e)return document;if(F0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(F0(t))return t}return document},ST=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},_T=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(rm),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(wT);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(aT(d,u),ST(e,d,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},yd=function(e){for(var t=vp(e.options.target).querySelectorAll(bT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(to)!==qb&&(_T(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function CT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var nw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(to,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(to,qb),r.setAttribute(Yb,zu);var a=CT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},ET=function(){function e(t){this.element=nw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ga(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),kT=function(){function e(t){this.element=nw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),PT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),z0=ua,TT={isServer:!ua,useCSSOMInjection:!iT},Hl=function(){function e(t,n,r){t===void 0&&(t=no),n===void 0&&(n={});var i=this;this.options=ut(ut({},TT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ua&&z0&&(z0=!1,yd(this)),sm(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(c){var y=function(h){return Ul.get(h)}(c);if(y===void 0)return"continue";var p=o.names.get(y);if(p===void 0||!p.size)return"continue";var m=a.getGroup(c);if(m.length===0)return"continue";var g=to+".g"+c+'[id="'+y+'"]',w="";p.forEach(function(h){h.length>0&&(w+=h+",")}),s+=m+g+'{content:"'+w+'"}'+rm},d=0;d<l;d++)u(d);return s}(i)})}return e.registerId=function(t){return Xo(t)},e.prototype.rehydrate=function(){!this.server&&ua&&yd(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ut(ut({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ua&&t.target!==this.options.target&&vp(this.options.target)!==vp(t.target)&&yd(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new PT(i):r?new ET(i):new kT(i)}(this.options),new xT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Xo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Xo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Xo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),OT=/&/g,zn=47,Nr=42;function N0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==zn||e.charCodeAt(o+1)!==Nr)if(i)a===Nr&&e.charCodeAt(o+1)===zn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function rw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=rw(n.children,t)),n})}function jT(e){var t,n,r,i=e===void 0?no:e,o=i.options,a=o===void 0?no:o,l=i.plugins,s=l===void 0?im:l,u=function(m,g,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},d=s.slice();d.push(function(m){m.type===Lu&&m.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),m.props[0]=m.props[0].replace(OT,n).replace(r,u))}),a.prefix&&d.push(nT),d.push(JP);var c=[],y=eT(d.concat(tT(function(m){return c.push(m)}))),p=function(m,g,w,h){g===void 0&&(g=""),w===void 0&&(w=""),h===void 0&&(h="&"),t=h,n=g,r=void 0;var v=function(S){if(!N0(S))return S;for(var E=S.length,T="",k=0,C=0,M=0,$=!1,D=0;D<E;D++){var A=S.charCodeAt(D);if(M!==0||$||A!==zn||S.charCodeAt(D+1)!==Nr)if($)A===Nr&&S.charCodeAt(D+1)===zn&&($=!1,D++);else if(A!==34&&A!==39||D!==0&&S.charCodeAt(D-1)===92){if(M===0)if(A===123)C++;else if(A===125){if(--C<0){for(var j=D+1;j<E;){var F=S.charCodeAt(j);if(F===59||F===10)break;j++}j<E&&S.charCodeAt(j)===59&&j++,C=0,D=j-1,k=j;continue}C===0&&(T+=S.substring(k,D+1),k=D+1)}else A===59&&C===0&&(T+=S.substring(k,D+1),k=D+1)}else M===0?M=A:M===A&&(M=0);else $=!0,D++}if(k<E){var R=S.substring(k);N0(R)||(T+=R)}return T}(function(S){if(S.indexOf("//")===-1)return S;for(var E=S.length,T=[],k=0,C=0,M=0,$=0;C<E;){var D=S.charCodeAt(C);if(D!==34&&D!==39||C!==0&&S.charCodeAt(C-1)===92)if(M===0)if(D===zn&&C+1<E&&S.charCodeAt(C+1)===Nr){for(C+=2;C+1<E&&(S.charCodeAt(C)!==Nr||S.charCodeAt(C+1)!==zn);)C++;C+=2}else if(D===40&&C>=3&&(32|S.charCodeAt(C-1))==108&&(32|S.charCodeAt(C-2))==114&&(32|S.charCodeAt(C-3))==117)$=1,C++;else if($>0)D===41?$--:D===40&&$++,C++;else if(D===Nr&&C+1<E&&S.charCodeAt(C+1)===zn)C>k&&T.push(S.substring(k,C)),k=C+=2;else if(D===zn&&C+1<E&&S.charCodeAt(C+1)===zn){for(C>k&&T.push(S.substring(k,C));C<E&&S.charCodeAt(C)!==10;)C++;k=C}else C++;else C++;else M===0?M=D:M===D&&(M=0),C++}return k===0?S:(k<E&&T.push(S.substring(k)),T.join(""))}(m)),b=QP(w||g?"".concat(w," ").concat(g," { ").concat(v," }"):v);return a.namespace&&(b=rw(b,a.namespace)),c=[],Vl(b,y),c};return p.hash=s.length?s.reduce(function(m,g){return g.name||Ga(15),zr(m,g.name)},5381).toString():"",p}var MT=new Hl,yp=jT(),iw=K.createContext({shouldForwardProp:void 0,styleSheet:MT,stylis:yp});iw.Consumer;K.createContext(void 0);function xp(){return K.useContext(iw)}var ow=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=yp);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,sm(this,function(){throw Ga(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=yp),this.name+t.hash},e}();function $T(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in rT||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var IT=function(e){return e>="A"&&e<="Z"};function B0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;IT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var aw=function(e){return e==null||e===!1||e===""},sw=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!aw(r)&&(Array.isArray(r)&&r.isCss||ro(r)?t.push("".concat(B0(n),":"),r,";"):Ma(r)?t.push.apply(t,Ji(Ji(["".concat(n," {")],sw(r),!1),["}"],!1)):t.push("".concat(B0(n),": ").concat($T(n,r),";")))}return t};function kr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(aw(e))return i;if(am(e))return i.push(".".concat(e.styledComponentId)),i;if(ro(e)){if(!ro(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return kr(o,t,n,r,i)}var a;if(e instanceof ow)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Ma(e)){for(var l=sw(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)kr(e[s],t,n,r,i);return i}function lw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ro(n)&&!am(n))return!1}return!0}var DT=Qb(zu),LT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&lw(t),this.componentId=n,this.baseHash=zr(DT,n),this.baseStyle=r,Hl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gr(i,this.staticRulesId);else{var o=Wl(kr(this.rules,t,n,r)),a=mp(zr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Gr(i,a),this.staticRulesId=a}else{for(var s=zr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var y=Wl(kr(c,t,n,r));s=zr(zr(s,String(d)),y),u+=y}}if(u){var p=mp(s>>>0);if(!n.hasNameForId(this.componentId,p)){var m=r(u,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,m)}i=Gr(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Xo(this.componentId)):""}},e}(),lm=K.createContext(void 0);lm.Consumer;var xd={};function AT(e,t,n){var r=am(e),i=e,o=!vd(e),a=t.attrs,l=a===void 0?im:a,s=t.componentId,u=s===void 0?function(S,E){var T=typeof S!="string"?"sc":I0(S);xd[T]=(xd[T]||0)+1;var k="".concat(T,"-").concat(om(zu+T+xd[T]));return E?"".concat(E,"-").concat(k):k}(t.displayName,t.parentComponentId):s,d=t.displayName,c=d===void 0?function(S){return vd(S)?"styled.".concat(S):"Styled(".concat(cT(S),")")}(e):d,y=t.displayName&&t.componentId?"".concat(I0(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(S,E){return g(S,E)&&w(S,E)}}else m=g}var h=new LT(n,y,r?i.componentStyle:void 0);function v(S,E){return function(T,k,C){var M=T.attrs,$=T.componentStyle,D=T.defaultProps,A=T.foldedComponentIds,j=T.styledComponentId,F=T.target,R=K.useContext(lm),L=xp(),O=T.shouldForwardProp||L.shouldForwardProp,P=Xb(k,R,D)||no,I=function(X,ee,pe){for(var we,ie=ut(ut({},ee),{className:void 0,theme:pe}),Ie=0;Ie<X.length;Ie+=1){var We=ro(we=X[Ie])?we(ie):we;for(var He in We)He==="className"?ie.className=Gr(ie.className,We[He]):He==="style"?ie.style=ut(ut({},ie.style),We[He]):ie[He]=We[He]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Gr(ie.className,ee.className)),ie}(M,k,P),z=I.as||F,B={};for(var N in I)I[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&I.theme===P||(N==="forwardedAs"?B.as=I.forwardedAs:O&&!O(N,z)||(B[N]=I[N]));var U=function(X,ee){var pe=xp(),we=X.generateAndInjectStyles(ee,pe.styleSheet,pe.stylis);return we}($,I),G=U.className,W=Gr(A,j);return G&&(W+=" "+G),I.className&&(W+=" "+I.className),B[vd(z)&&!Kb.has(z)?"class":"className"]=W,C&&(B.ref=C),x.createElement(z,B)}(b,S,E)}v.displayName=c;var b=K.forwardRef(v);return b.attrs=p,b.componentStyle=h,b.displayName=c,b.shouldForwardProp=m,b.foldedComponentIds=r?Gr(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=y,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var T=[],k=1;k<arguments.length;k++)T[k-1]=arguments[k];for(var C=0,M=T;C<M.length;C++)gp(E,M[C],!0);return E}({},i.defaultProps,S):S}}),sm(b,function(){return".".concat(b.styledComponentId)}),o&&tw(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function V0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var U0=function(e){return Object.assign(e,{isCss:!0})};function um(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ro(e)||Ma(e))return U0(kr(V0(im,Ji([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?kr(r):U0(kr(V0(r,t)))}function bp(e,t,n){if(n===void 0&&(n=no),!t)throw Ga(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,um.apply(void 0,Ji([i],o,!1)))};return r.attrs=function(i){return bp(e,t,ut(ut({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return bp(e,t,ut(ut({},n),i))},r}var uw=function(e){return bp(AT,e)},_=uw;Kb.forEach(function(e){_[e]=uw(e)});var RT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=lw(t),Hl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Wl(kr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Hl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function FT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=um.apply(void 0,Ji([e],t,!1)),i="sc-global-".concat(om(JSON.stringify(r))),o=new RT(r,i),a=new WeakMap,l=function(u){var d=xp(),c=K.useContext(lm),y=a.get(d.styleSheet);return y===void 0&&(y=d.styleSheet.allocateGSInstance(i),a.set(d.styleSheet,y)),(typeof window>"u"||!d.styleSheet.server)&&s(y,u,d.styleSheet,c,d.stylis),K.useLayoutEffect(function(){return d.styleSheet.server||s(y,u,d.styleSheet,c,d.stylis),function(){var p;o.removeStyles(y,d.styleSheet),p=d.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(m){return m.remove()})}},[y,u,d.styleSheet,c,d.stylis]),null};function s(u,d,c,y,p){if(o.isStatic)o.renderStyles(u,oT,c,p);else{var m=ut(ut({},d),{theme:Xb(d,y,l.defaultProps)});o.renderStyles(u,m,c,p)}}return K.memo(l)}function cm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Wl(um.apply(void 0,Ji([e],t,!1))),i=om(r);return new ow(i,r)}const zT=_.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,NT=_.div`
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
`,BT=_.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,VT=_.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,UT=_.div`
  display: flex;
  justify-content: space-around;
  

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`,WT=_.button`
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

    
`;_(Pe)`
  color: var(--main-brand-color);
  display: none;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;_.img`
  display: flex;
  width: 50px;
  height: 50px;

  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;_.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100px;
    height: 100px;

    justify-content: center;
    align-items: center;
  }
`;const HT=_(Pe)`
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
`;_.h1`
  color: var(--white-color);
  font-family: DM Serif Display;
  margin-left: 70px;
`;const GT=_.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,qT=_.button`
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
`;_.div`
  z-index: 9999;
`;_.a`
  color: var(--black-color);
`;const YT=_.div`
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
`,XT=_.button`
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
`,KT=_.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,hi=_(Pe)`
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
`,QT=_.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,ZT=_.div`
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
`,JT=_.div`
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
`,eO=_.input`
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
`,tO=_.button`
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
`,nO=_.svg`
  width: 24px;
  height: 24px;
`,rO=_.ul`
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
`,iO=_.li`
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


`,oO=_.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,aO=_.h3`
      text-align: left;
      font-size: 22px;
      font-weight: 800;

`,sO=_.h3`

      font-size: 22px;
         

`,lO=_.div`
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

    
`,pn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",uO=()=>{const[e,t]=x.useState(""),[n,r]=x.useState([]),[i,o]=x.useState(!1),a=Zt(),l=x.useRef(null);x.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const u=setTimeout(async()=>{try{const c=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(c.data),o(!0)}catch(d){console.error(d)}},300);return()=>clearTimeout(u)},[e]),x.useEffect(()=>{const u=d=>{l.current&&!l.current.contains(d.target)&&o(!1)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]);const s=u=>{t(""),o(!1),a(`/product/${u.id}`)};return f.jsxs(JT,{ref:l,children:[f.jsx(eO,{name:"site-search",value:e,onChange:u=>t(u.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),f.jsx(tO,{className:"search-button",children:f.jsx(nO,{children:f.jsx("use",{href:`${pn}#icon-search`})})}),i&&n.length>0&&f.jsx(rO,{children:n.map(u=>{var y,p;const c=u.new_price&&u.new_price<u.price?u.new_price:u.price;return f.jsxs(iO,{onClick:()=>s(u),children:[f.jsx(oO,{src:((p=(y=u.images)==null?void 0:y[0])==null?void 0:p.url)||"/nofoto.png",alt:""}),f.jsxs(lO,{children:[f.jsx(aO,{children:u.name}),f.jsxs(sO,{children:[c," грн."]})]})]},u.id)})})]})};var cw={exports:{}},dw={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=x;function cO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dO=typeof Object.is=="function"?Object.is:cO,fO=qa.useSyncExternalStore,pO=qa.useRef,hO=qa.useEffect,mO=qa.useMemo,gO=qa.useDebugValue;dw.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=pO(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=mO(function(){function s(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&a.hasValue){var m=a.value;if(i(m,p))return c=m}return c=p}if(m=c,dO(d,p))return m;var g=r(p);return i!==void 0&&i(m,g)?(d=p,m):(d=p,c=g)}var u=!1,d,c,y=n===void 0?null:n;return[function(){return s(t())},y===null?void 0:function(){return s(y())}]},[t,n,r,i]);var l=fO(e,o[0],o[1]);return hO(function(){a.hasValue=!0,a.value=l},[l]),gO(l),l};cw.exports=dw;var vO=cw.exports;function yO(e){e()}function xO(){let e=null,t=null;return{clear(){e=null,t=null},notify(){yO(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var W0={notify(){},get:()=>[]};function bO(e,t){let n,r=W0,i=0,o=!1;function a(g){d();const w=r.subscribe(g);let h=!1;return()=>{h||(h=!0,w(),c())}}function l(){r.notify()}function s(){m.onStateChange&&m.onStateChange()}function u(){return o}function d(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=xO())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=W0)}function y(){o||(o=!0,d())}function p(){o&&(o=!1,c())}const m={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:y,tryUnsubscribe:p,getListeners:()=>r};return m}var wO=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",SO=wO(),_O=()=>typeof navigator<"u"&&navigator.product==="ReactNative",CO=_O(),EO=()=>SO||CO?x.useLayoutEffect:x.useEffect,kO=EO(),bd=Symbol.for("react-redux-context"),wd=typeof globalThis<"u"?globalThis:{};function PO(){if(!x.createContext)return{};const e=wd[bd]??(wd[bd]=new Map);let t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var Or=PO();function TO(e){const{children:t,context:n,serverState:r,store:i}=e,o=x.useMemo(()=>{const s=bO(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=x.useMemo(()=>i.getState(),[i]);kO(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Or;return x.createElement(l.Provider,{value:o},t)}var OO=TO;function dm(e=Or){return function(){return x.useContext(e)}}var fw=dm();function pw(e=Or){const t=e===Or?fw:dm(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var jO=pw();function MO(e=Or){const t=e===Or?jO:pw(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var vn=MO(),$O=(e,t)=>e===t;function IO(e=Or){const t=e===Or?fw:dm(e),n=(r,i={})=>{const{equalityFn:o=$O}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;x.useRef(!0);const d=x.useCallback({[r.name](y){return r(y)}}[r.name],[r]),c=vO.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,d,o);return x.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var Ue=IO();const DO=_(Pe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,LO=_.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,AO=_.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,RO=_.div`
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
`,FO=({onClick:e})=>{const t=Ue(n=>n.cart.items.length);return f.jsx(DO,{to:"/cart",children:f.jsxs(AO,{onClick:e,children:[f.jsx(LO,{children:f.jsx("use",{href:`${pn}#icon-cart`})}),t>0&&f.jsx(RO,{children:t})]})})},zO=_.nav`
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
`,mi=_(Pe)`
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
`,NO=()=>f.jsxs(zO,{children:[f.jsx(mi,{to:"/",children:"Головна"}),f.jsx(mi,{to:"/catalog",children:"Каталог"}),f.jsx(mi,{to:"/catalog/new",children:"Новинки"}),f.jsx(mi,{to:"/catalog/sale",children:"Акційні товари"}),f.jsx(mi,{to:"/about",children:"Про нас"}),f.jsx(mi,{to:"/contacts",children:"Контакти"})]}),BO=_.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,VO=_(Pe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,UO=_.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,WO=_.div`

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
`,HO=({onClick:e})=>{const t=Ue(n=>n.favorites.items.length);return f.jsx(VO,{to:"/favorite",children:f.jsxs(UO,{onClick:e,children:[f.jsx(BO,{children:f.jsx("use",{href:`${pn}#icon-heart`})}),t>0&&f.jsx(WO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=e=>{const t=qO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var YO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KO=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>x.createElement("svg",{ref:s,...YO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:hw("lucide",i),...!o&&!XO(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,d])=>x.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(e,t)=>{const n=x.forwardRef(({className:r,...i},o)=>x.createElement(KO,{ref:o,iconNode:t,className:hw(`lucide-${GO(H0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=H0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QO=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Nu=Ke("arrow-down-narrow-wide",QO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Bu=Ke("arrow-right",ZO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JO=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],ej=Ke("badge-percent",JO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],nj=Ke("chevron-down",tj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ij=Ke("chevron-up",rj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],G0=Ke("eye-off",oj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],q0=Ke("eye",aj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ya=Ke("heart",sj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],uj=Ke("house",lj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],dj=Ke("info",cj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],pj=Ke("layers-plus",fj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],mj=Ke("mail",hj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],vj=Ke("shopping-bag",gj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],go=Ke("shopping-cart",yj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],mw=Ke("sliders-horizontal",xj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],gw=Ke("trash-2",bj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Sj=Ke("user-round",wj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vw=Ke("x",_j),Cj=({openLogin:e})=>{const[t,n]=x.useState(!1),r=Zt(),i=()=>{const o=localStorage.getItem("token");console.log("token:",o),o?(console.log("navigate"),r("/account")):(console.log("login"),e())};return f.jsx(zT,{children:f.jsx(NT,{children:f.jsxs(BT,{children:[f.jsxs(VT,{children:[f.jsx(HT,{to:"/",children:"Дідів хлів"}),f.jsxs(UT,{children:[f.jsx(FO,{}),f.jsx(WT,{onClick:i,children:f.jsx(Sj,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),f.jsx(HO,{}),f.jsx(NO,{}),f.jsx(qT,{onClick:()=>n(!t),children:f.jsx(GT,{children:f.jsx("use",{href:`${pn}#icon-menu`})})}),f.jsx(ZT,{open:t,onClick:()=>n(!1)}),f.jsxs(YT,{open:t,children:[f.jsx(XT,{onClick:()=>n(!1),children:f.jsx(vw,{size:28,strokeWidth:1.5})}),f.jsxs(KT,{children:[f.jsxs(hi,{onClick:()=>n(!1),to:"/",children:[f.jsx(uj,{size:22,strokeWidth:1.5})," Головна"]}),f.jsxs(hi,{onClick:()=>n(!1),to:"/catalog",children:[f.jsx(vj,{size:22,strokeWidth:1.5})," Каталог"]}),f.jsxs(hi,{onClick:()=>n(!1),to:"/catalog/new",children:[f.jsx(pj,{size:22,strokeWidth:1.5}),"Новинки"]}),f.jsxs(hi,{onClick:()=>n(!1),to:"/catalog/sale",children:[f.jsx(ej,{size:22,strokeWidth:1.5}),"Акційні товари"]}),f.jsxs(hi,{onClick:()=>n(!1),to:"/about",children:[f.jsx(dj,{size:22,strokeWidth:1.5})," Про нас"]}),f.jsxs(hi,{onClick:()=>n(!1),to:"/contacts",children:[f.jsx(mj,{size:22,strokeWidth:1.5})," Контакти"]})]}),f.jsx(QT,{children:f.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),f.jsx(uO,{})]})})})},Ej=_.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,kj=_.footer`
 
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
`,Pj=_.div`
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
`,Sd=_.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,_d=_.h3`
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
`,wn=_(Pe)`
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
`,Tj=_.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,Cd=_.a`
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
`,Oj=()=>f.jsx(Ej,{children:f.jsxs(kj,{children:[f.jsxs(Pj,{children:[f.jsxs(Sd,{children:[f.jsx(_d,{children:"Навігація"}),f.jsx(wn,{to:"/",children:"Головна"}),f.jsx(wn,{to:"/about",children:"Про нас"}),f.jsx(wn,{to:"/catalog",children:"Каталог"}),f.jsx(wn,{to:"/contacts",children:"Контакти"})]}),f.jsxs(Sd,{children:[f.jsx(_d,{children:"Інформація"}),f.jsx(wn,{to:"/delivery",children:"Оплата і доставка"}),f.jsx(wn,{children:"Повернення"}),f.jsx(wn,{children:"Гарантія"}),f.jsx(wn,{children:"Політика конфіденційності"})]})]}),f.jsxs(Sd,{children:[f.jsx(_d,{children:"Контакти"}),f.jsx(wn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),f.jsx(wn,{href:"mailto:email@email.com",children:"email@email.com"}),f.jsxs(Tj,{children:[f.jsx(Cd,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${pn}#icon-instagram`})})}),f.jsx(Cd,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${pn}#icon-telegram`})})}),f.jsx(Cd,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:f.jsx("use",{href:`${pn}#icon-olx`})})})]})]})]})}),jj=({openLogin:e,openRegister:t})=>f.jsxs(f.Fragment,{children:[f.jsx(Cj,{openLogin:e,openRegister:t}),f.jsx("main",{style:{flex:1},children:f.jsx(Dy,{})}),f.jsx(Oj,{})]}),Mj=_.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,$j=_.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
      text-align: center;

  @media screen and (min-width: 768px) {
 font-size: 35px;

  }

`,Ij=_.div`
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
`,Dj=_.div`
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
`,Lj=_(Pe)`
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
`,Aj=_.span`
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
`,Rj=_.div`
  padding: 10px 0;
`,Fj=_.h3`
  font-size: 20px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
   margin-bottom:16px;
`,zj=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
`;_.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`;_.button`
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
`;_(Pe)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const Nj=_(Pe)`
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

`,Bj=_.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,Vj=_.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Ze(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Uj=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),Y0=Uj,Ed=()=>Math.random().toString(36).substring(7).split("").join("."),Wj={INIT:`@@redux/INIT${Ed()}`,REPLACE:`@@redux/REPLACE${Ed()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Ed()}`},Gl=Wj;function fm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function pm(e,t,n){if(typeof e!="function")throw new Error(Ze(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ze(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ze(1));return n(pm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,h)=>{a.set(h,w)}))}function d(){if(s)throw new Error(Ze(3));return i}function c(w){if(typeof w!="function")throw new Error(Ze(4));if(s)throw new Error(Ze(5));let h=!0;u();const v=l++;return a.set(v,w),function(){if(h){if(s)throw new Error(Ze(6));h=!1,u(),a.delete(v),o=null}}}function y(w){if(!fm(w))throw new Error(Ze(7));if(typeof w.type>"u")throw new Error(Ze(8));if(typeof w.type!="string")throw new Error(Ze(17));if(s)throw new Error(Ze(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(v=>{v()}),w}function p(w){if(typeof w!="function")throw new Error(Ze(10));r=w,y({type:Gl.REPLACE})}function m(){const w=c;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(Ze(11));function v(){const S=h;S.next&&S.next(d())}return v(),{unsubscribe:w(v)}},[Y0](){return this}}}return y({type:Gl.INIT}),{dispatch:y,subscribe:c,getState:d,replaceReducer:p,[Y0]:m}}function Hj(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Gl.INIT})>"u")throw new Error(Ze(12));if(typeof n(void 0,{type:Gl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ze(13))})}function Gj(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{Hj(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],y=n[c],p=a[c],m=y(p,l);if(typeof m>"u")throw l&&l.type,new Error(Ze(14));u[c]=m,s=s||m!==p}return s=s||r.length!==Object.keys(a).length,s?u:a}}function ql(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function qj(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Ze(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=ql(...l)(i.dispatch),{...i,dispatch:o}}}function Yj(e){return fm(e)&&"type"in e&&typeof e.type=="string"}var yw=Symbol.for("immer-nothing"),X0=Symbol.for("immer-draftable"),vt=Symbol.for("immer-state");function un(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var At=Object,io=At.getPrototypeOf,Yl="constructor",Vu="prototype",wp="configurable",Xl="enumerable",rl="writable",$a="value",Zn=e=>!!e&&!!e[vt];function gn(e){var t;return e?xw(e)||Wu(e)||!!e[X0]||!!((t=e[Yl])!=null&&t[X0])||Hu(e)||Gu(e):!1}var Xj=At[Vu][Yl].toString(),K0=new WeakMap;function xw(e){if(!e||!hm(e))return!1;const t=io(e);if(t===null||t===At[Vu])return!0;const n=At.hasOwnProperty.call(t,Yl)&&t[Yl];if(n===Object)return!0;if(!Ci(n))return!1;let r=K0.get(n);return r===void 0&&(r=Function.toString.call(n),K0.set(n,r)),r===Xj}function Uu(e,t,n=!0){Xa(e)===0?(n?Reflect.ownKeys(e):At.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Xa(e){const t=e[vt];return t?t.type_:Wu(e)?1:Hu(e)?2:Gu(e)?3:0}var Q0=(e,t,n=Xa(e))=>n===2?e.has(t):At[Vu].hasOwnProperty.call(e,t),Sp=(e,t,n=Xa(e))=>n===2?e.get(t):e[t],Kl=(e,t,n,r=Xa(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function Kj(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Wu=Array.isArray,Hu=e=>e instanceof Map,Gu=e=>e instanceof Set,hm=e=>typeof e=="object",Ci=e=>typeof e=="function",kd=e=>typeof e=="boolean";function Qj(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Bn=e=>e.copy_||e.base_,mm=e=>e.modified_?e.copy_:e.base_;function _p(e,t){if(Hu(e))return new Map(e);if(Gu(e))return new Set(e);if(Wu(e))return Array[Vu].slice.call(e);const n=xw(e);if(t===!0||t==="class_only"&&!n){const r=At.getOwnPropertyDescriptors(e);delete r[vt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[rl]===!1&&(l[rl]=!0,l[wp]=!0),(l.get||l.set)&&(r[a]={[wp]:!0,[rl]:!0,[Xl]:l[Xl],[$a]:e[a]})}return At.create(io(e),r)}else{const r=io(e);if(r!==null&&n)return{...e};const i=At.create(r);return At.assign(i,e)}}function gm(e,t=!1){return qu(e)||Zn(e)||!gn(e)||(Xa(e)>1&&At.defineProperties(e,{set:_s,add:_s,clear:_s,delete:_s}),At.freeze(e),t&&Uu(e,(n,r)=>{gm(r,!0)},!1)),e}function Zj(){un(2)}var _s={[$a]:Zj};function qu(e){return e===null||!hm(e)?!0:At.isFrozen(e)}var Ql="MapSet",Cp="Patches",Z0="ArrayMethods",bw={};function ni(e){const t=bw[e];return t||un(0,e),t}var J0=e=>!!bw[e],Ia,ww=()=>Ia,Jj=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:J0(Ql)?ni(Ql):void 0,arrayMethodsPlugin_:J0(Z0)?ni(Z0):void 0});function ev(e,t){t&&(e.patchPlugin_=ni(Cp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Ep(e){kp(e),e.drafts_.forEach(e4),e.drafts_=null}function kp(e){e===Ia&&(Ia=e.parent_)}var tv=e=>Ia=Jj(Ia,e);function e4(e){const t=e[vt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function nv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[vt].modified_&&(Ep(t),un(4)),gn(e)&&(e=rv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[vt].base_,e,t)}else e=rv(t,n);return t4(t,e,!0),Ep(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==yw?e:void 0}function rv(e,t){if(qu(t))return t;const n=t[vt];if(!n)return Zl(t,e.handledSet_,e);if(!Yu(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Cw(n,e)}return n.copy_}function t4(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&gm(t,n)}function Sw(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Yu=(e,t)=>e.scope_===t,n4=[];function _w(e,t,n,r){const i=Bn(e),o=e.type_;if(r!==void 0&&Sp(i,r,o)===t){Kl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Uu(i,(s,u)=>{if(Zn(u)){const d=l.get(u)||[];d.push(s),l.set(u,d)}})}const a=e.draftLocations_.get(t)??n4;for(const l of a)Kl(i,l,n,o)}function r4(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!Yu(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=mm(o);_w(e,o.draft_??o,a,n),Cw(o,i)})}function Cw(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Sw(e)}}function i4(e,t,n){const{scope_:r}=e;if(Zn(n)){const i=n[vt];Yu(i,r)&&i.callbacks_.push(function(){il(e);const a=mm(i);_w(e,n,a,t)})}else gn(n)&&e.callbacks_.push(function(){const o=Bn(e);e.type_===3?o.has(n)&&Zl(n,r.handledSet_,r):Sp(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Zl(Sp(e.copy_,t,e.type_),r.handledSet_,r)})}function Zl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Zn(e)||t.has(e)||!gn(e)||qu(e)||(t.add(e),Uu(e,(r,i)=>{if(Zn(i)){const o=i[vt];if(Yu(o,n)){const a=mm(o);Kl(e,r,a,e.type_),Sw(o)}}else gn(i)&&Zl(i,t,n)})),e}function o4(e,t){const n=Wu(e),r={type_:n?1:0,scope_:t?t.scope_:ww(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Jl;n&&(i=[r],o=Da);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Jl={get(e,t){if(t===vt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Bn(e);if(!Q0(i,t,e.type_))return a4(e,i,t);const o=i[t];if(e.finalized_||!gn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&Qj(t))return o;if(o===Pd(e.base_,t)){il(e);const a=e.type_===1?+t:t,l=Tp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Bn(e)},ownKeys(e){return Reflect.ownKeys(Bn(e))},set(e,t,n){const r=Ew(Bn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Pd(Bn(e),t),o=i==null?void 0:i[vt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(Kj(n,i)&&(n!==void 0||Q0(e.base_,t,e.type_)))return!0;il(e),Pp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),i4(e,t,n)),!0},deleteProperty(e,t){return il(e),Pd(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Pp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Bn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[rl]:!0,[wp]:e.type_!==1||t!=="length",[Xl]:r[Xl],[$a]:n[t]}},defineProperty(){un(11)},getPrototypeOf(e){return io(e.base_)},setPrototypeOf(){un(12)}},Da={};for(let e in Jl){let t=Jl[e];Da[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Da.deleteProperty=function(e,t){return Da.set.call(this,e,t,void 0)};Da.set=function(e,t,n){return Jl.set.call(this,e[0],t,n,e[0])};function Pd(e,t){const n=e[vt];return(n?Bn(n):e)[t]}function a4(e,t,n){var i;const r=Ew(t,n);return r?$a in r?r[$a]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Ew(e,t){if(!(t in e))return;let n=io(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=io(n)}}function Pp(e){e.modified_||(e.modified_=!0,e.parent_&&Pp(e.parent_))}function il(e){e.copy_||(e.assigned_=new Map,e.copy_=_p(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var s4=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(Ci(t)&&!Ci(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,d=>n.call(this,d,...u))}}Ci(n)||un(6),r!==void 0&&!Ci(r)&&un(7);let i;if(gn(t)){const o=tv(this),a=Tp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?Ep(o):kp(o)}return ev(o,r),nv(i,o)}else if(!t||!hm(t)){if(i=n(t),i===void 0&&(i=t),i===yw&&(i=void 0),this.autoFreeze_&&gm(i,!0),r){const o=[],a=[];ni(Cp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else un(1,t)},this.produceWithPatches=(t,n)=>{if(Ci(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},kd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),kd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),kd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){gn(e)||un(8),Zn(e)&&(e=l4(e));const t=tv(this),n=Tp(t,e,void 0);return n[vt].isManual_=!0,kp(t),n}finishDraft(e,t){const n=e&&e[vt];(!n||!n.isManual_)&&un(9);const{scope_:r}=n;return ev(r,t),nv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=ni(Cp).applyPatches_;return Zn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Tp(e,t,n,r){const[i,o]=Hu(t)?ni(Ql).proxyMap_(t,n):Gu(t)?ni(Ql).proxySet_(t,n):o4(t,n);return((n==null?void 0:n.scope_)??ww()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?r4(n,o,r):o.callbacks_.push(function(s){var d;(d=s.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function l4(e){return Zn(e)||un(10,e),kw(e)}function kw(e){if(!gn(e)||qu(e))return e;const t=e[vt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=_p(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=_p(e,!0);return Uu(n,(i,o)=>{Kl(n,i,kw(o))},r),t&&(t.finalized_=!1),n}var u4=new s4,Pw=u4.produce;function Tw(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var c4=Tw(),d4=Tw,f4=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ql:ql.apply(null,arguments)};function iv(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Gn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>Yj(r)&&r.type===e,n}var Ow=class Ko extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ko.prototype)}static get[Symbol.species](){return Ko}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ko(...t[0].concat(this)):new Ko(...t.concat(this))}};function ov(e){return gn(e)?Pw(e,()=>{}):e}function Cs(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function p4(e){return typeof e=="boolean"}var h4=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new Ow;return n&&(p4(n)?a.push(c4):a.push(d4(n.extraArgument))),a},m4="RTK_autoBatch",av=e=>t=>{setTimeout(t,e)},g4=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:av(10):e.type==="callback"?e.queueNotification:av(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),y=r.subscribe(c);return l.add(d),()=>{y(),l.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[m4]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(d)}finally{i=!0}}})},v4=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new Ow(e);return r&&i.push(g4(typeof r=="object"?r:void 0)),i};function y4(e){const t=h4(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(fm(n))s=Gj(n);else throw new Error(Gn(1));let u;typeof r=="function"?u=r(t):u=t();let d=ql;i&&(d=f4({trace:!1,...typeof i=="object"&&i}));const c=qj(...u),y=v4(c);let p=typeof l=="function"?l(y):y();const m=d(...p);return pm(s,a,m)}function jw(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(Gn(28));if(l in t)throw new Error(Gn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function x4(e){return typeof e=="function"}function b4(e,t){let[n,r,i]=jw(t),o;if(x4(e))o=()=>ov(e());else{const l=ov(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(Zn(d)){const p=c(d,s);return p===void 0?d:p}else{if(gn(d))return Pw(d,y=>c(y,s));{const y=c(d,s);if(y===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}}return d},l)}return a.getInitialState=o,a}var w4=Symbol.for("rtk-slice-createasyncthunk");function S4(e,t){return`${e}/${t}`}function _4({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[w4];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(Gn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(E4()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(S,E){const T=typeof S=="string"?S:S.type;if(!T)throw new Error(Gn(12));if(T in u.sliceCaseReducersByType)throw new Error(Gn(13));return u.sliceCaseReducersByType[T]=E,d},addMatcher(S,E){return u.sliceMatchers.push({matcher:S,reducer:E}),d},exposeAction(S,E){return u.actionCreators[S]=E,d},exposeCaseReducer(S,E){return u.sliceCaseReducersByName[S]=E,d}};s.forEach(S=>{const E=l[S],T={reducerName:S,type:S4(o,S),createNotation:typeof i.reducers=="function"};P4(E)?O4(T,E,d,t):k4(T,E,d)});function c(){const[S={},E=[],T=void 0]=typeof i.extraReducers=="function"?jw(i.extraReducers):[i.extraReducers],k={...S,...u.sliceCaseReducersByType};return b4(i.initialState,C=>{for(let M in k)C.addCase(M,k[M]);for(let M of u.sliceMatchers)C.addMatcher(M.matcher,M.reducer);for(let M of E)C.addMatcher(M.matcher,M.reducer);T&&C.addDefaultCase(T)})}const y=S=>S,p=new Map,m=new WeakMap;let g;function w(S,E){return g||(g=c()),g(S,E)}function h(){return g||(g=c()),g.getInitialState()}function v(S,E=!1){function T(C){let M=C[S];return typeof M>"u"&&E&&(M=Cs(m,T,h)),M}function k(C=y){const M=Cs(p,E,()=>new WeakMap);return Cs(M,C,()=>{const $={};for(const[D,A]of Object.entries(i.selectors??{}))$[D]=C4(A,C,()=>Cs(m,C,h),E);return $})}return{reducerPath:S,getSelectors:k,get selectors(){return k(T)},selectSlice:T}}const b={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:h,...v(a),injectInto(S,{reducerPath:E,...T}={}){const k=E??a;return S.inject({reducerPath:k,reducer:w},T),{...b,...v(k,!0)}}};return b}}function C4(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var Mw=_4();function E4(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function k4({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!T4(r))throw new Error(Gn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?iv(e,a):iv(e))}function P4(e){return e._reducerDefinitionType==="asyncThunk"}function T4(e){return e._reducerDefinitionType==="reducerWithPrepare"}function O4({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Gn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:d}=n,c=i(e,o,d);r.exposeAction(t,c),a&&r.addCase(c.fulfilled,a),l&&r.addCase(c.pending,l),s&&r.addCase(c.rejected,s),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(t,{fulfilled:a||Es,pending:l||Es,rejected:s||Es,settled:u||Es})}function Es(){}function Gn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const $w=Mw({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===t.payload.id);r&&r.quantity>=n.stock||(r?r.quantity=(r.quantity||0)+1:e.items.push({...t.payload,quantity:1}))},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:vo,removeFromCart:j4,clearCart:vm,addAllToCart:M4,incrementQuantity:$4,decrementQuantity:I4}=$w.actions,D4=$w.reducer;function Iw(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Iw(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Xr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Iw(e))&&(r&&(r+=" "),r+=t);return r}function L4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}L4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Ka=e=>typeof e=="number"&&!isNaN(e),ri=e=>typeof e=="string",Jn=e=>typeof e=="function",A4=e=>ri(e)||Ka(e),Op=e=>ri(e)||Jn(e)?e:null,R4=(e,t)=>e===!1||Ka(e)&&e>0?e:t,jp=e=>x.isValidElement(e)||ri(e)||Jn(e)||Ka(e);function F4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function z4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:d,playToast:c}){let y=n?`${e}--${a}`:e,p=n?`${t}--${a}`:t,m=x.useRef(0);return x.useLayoutEffect(()=>{let g=u.current,w=y.split(" "),h=v=>{v.target===u.current&&(c(),g.removeEventListener("animationend",h),g.removeEventListener("animationcancel",h),m.current===0&&v.type!=="animationcancel"&&g.classList.remove(...w))};g.classList.add(...w),g.addEventListener("animationend",h),g.addEventListener("animationcancel",h)},[]),x.useEffect(()=>{let g=u.current,w=()=>{g.removeEventListener("animationend",w),r?F4(g,s,i):s()};d||(l?w():(m.current=1,g.className+=` ${p}`,g.addEventListener("animationend",w)))},[d]),K.createElement(K.Fragment,null,o)}}function sv(e,t){return{content:Dw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Dw(e,t,n=!1){return x.isValidElement(e)&&!ri(e.type)?x.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Jn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function N4({closeToast:e,theme:t,ariaLabel:n="close"}){return K.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},K.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},K.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function B4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:d}){let c=i||a&&l===0,y={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(y.transform=`scaleX(${l})`);let p=Xr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),m=Jn(o)?o({rtl:s,type:r,defaultClassName:p}):Xr(p,o),g={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return K.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":c},K.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),K.createElement("div",{role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:m,style:y,...g}))}var V4=1,Lw=()=>`${V4++}`;function U4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,d=v=>(u.add(v),()=>u.delete(v)),c=()=>{a=Array.from(s.values()),u.forEach(v=>v())},y=({containerId:v,toastId:b,updateId:S})=>{let E=v?v!==e:e!==1,T=s.has(b)&&S==null;return E||T},p=(v,b)=>{s.forEach(S=>{var E;(b==null||b===S.props.toastId)&&((E=S.toggle)==null||E.call(S,v))})},m=v=>{var b,S;(S=(b=v.props)==null?void 0:b.onClose)==null||S.call(b,v.removalReason),v.isActive=!1},g=v=>{if(v==null)s.forEach(m);else{let b=s.get(v);b&&m(b)}c()},w=()=>{i-=o.length,o=[]},h=v=>{var b,S;let{toastId:E,updateId:T}=v.props,k=T==null;v.staleId&&s.delete(v.staleId),v.isActive=!0,s.set(E,v),c(),n(sv(v,k?"added":"updated")),k&&((S=(b=v.props).onOpen)==null||S.call(b))};return{id:e,props:l,observe:d,toggle:p,removeToast:g,toasts:s,clearQueue:w,buildToast:(v,b)=>{if(y(b))return;let{toastId:S,updateId:E,data:T,staleId:k,delay:C}=b,M=E==null;M&&i++;let $={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(b).filter(([A,j])=>j!=null)),toastId:S,updateId:E,data:T,isIn:!1,className:Op(b.className||l.toastClassName),progressClassName:Op(b.progressClassName||l.progressClassName),autoClose:b.isLoading?!1:R4(b.autoClose,l.autoClose),closeToast(A){s.get(S).removalReason=A,g(S)},deleteToast(){let A=s.get(S);if(A!=null){if(n(sv(A,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){h(o.shift());return}c()}}};$.closeButton=l.closeButton,b.closeButton===!1||jp(b.closeButton)?$.closeButton=b.closeButton:b.closeButton===!0&&($.closeButton=jp(l.closeButton)?l.closeButton:!0);let D={content:v,props:$,staleId:k};l.limit&&l.limit>0&&i>l.limit&&M?o.push(D):Ka(C)?setTimeout(()=>{h(D)},C):h(D)},setProps(v){l=v},setToggle:(v,b)=>{let S=s.get(v);S&&(S.toggle=b)},isToastActive:v=>{var b;return(b=s.get(v))==null?void 0:b.isActive},getSnapshot:()=>a}}var mt=new Map,La=[],Mp=new Set,W4=e=>Mp.forEach(t=>t(e)),Aw=()=>mt.size>0;function H4(){La.forEach(e=>Fw(e.content,e.options)),La=[]}var G4=(e,{containerId:t})=>{var n;return(n=mt.get(t||1))==null?void 0:n.toasts.get(e)};function Rw(e,t){var n;if(t)return!!((n=mt.get(t))!=null&&n.isToastActive(e));let r=!1;return mt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function q4(e){if(!Aw()){La=La.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||A4(e))mt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=mt.get(e.containerId);t?t.removeToast(e.id):mt.forEach(n=>{n.removeToast(e.id)})}}var Y4=(e={})=>{mt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Fw(e,t){jp(e)&&(Aw()||La.push({content:e,options:t}),mt.forEach(n=>{n.buildToast(e,t)}))}function X4(e){var t;(t=mt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function zw(e,t){mt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function K4(e){let t=e.containerId||1;return{subscribe(n){let r=U4(t,e,W4);mt.set(t,r);let i=r.observe(n);return H4(),()=>{i(),mt.delete(t)}},setProps(n){var r;(r=mt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=mt.get(t))==null?void 0:n.getSnapshot()}}}function Q4(e){return Mp.add(e),()=>{Mp.delete(e)}}function Z4(e){return e&&(ri(e.toastId)||Ka(e.toastId))?e.toastId:Lw()}function Qa(e,t){return Fw(e,t),t.toastId}function Xu(e,t){return{...t,type:t&&t.type||e,toastId:Z4(t)}}function Ku(e){return(t,n)=>Qa(t,Xu(e,n))}function Y(e,t){return Qa(e,Xu("default",t))}Y.loading=(e,t)=>Qa(e,Xu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function J4(e,{pending:t,error:n,success:r},i){let o;t&&(o=ri(t)?Y.loading(t,i):Y.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,c)=>{if(d==null){Y.dismiss(o);return}let y={type:u,...a,...i,data:c},p=ri(d)?{render:d}:d;return o?Y.update(o,{...y,...p}):Y(p.render,{...y,...p}),c},s=Jn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}Y.promise=J4;Y.success=Ku("success");Y.info=Ku("info");Y.error=Ku("error");Y.warning=Ku("warning");Y.warn=Y.warning;Y.dark=(e,t)=>Qa(e,Xu("default",{theme:"dark",...t}));function e3(e){q4(e)}Y.dismiss=e3;Y.clearWaitingQueue=Y4;Y.isActive=Rw;Y.update=(e,t={})=>{let n=G4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Lw()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Qa(a,o)}};Y.done=e=>{Y.update(e,{progress:1})};Y.onChange=Q4;Y.play=e=>zw(!0,e);Y.pause=e=>zw(!1,e);function t3(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=x.useRef(K4(e)).current;i(e);let o=(t=x.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:d}=u.props;s.has(d)||s.set(d,[]),s.get(d).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:Rw,count:o==null?void 0:o.length}}function n3(e){let[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useRef(null),a=x.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:d,closeOnClick:c}=e;X4({id:e.toastId,containerId:e.containerId,fn:n}),x.useEffect(()=>{if(e.pauseOnFocusLoss)return y(),()=>{p()}},[e.pauseOnFocusLoss]);function y(){document.hasFocus()||h(),window.addEventListener("focus",w),window.addEventListener("blur",h)}function p(){window.removeEventListener("focus",w),window.removeEventListener("blur",h)}function m(k){if(e.draggable===!0||e.draggable===k.pointerType){v();let C=o.current;a.canCloseOnClick=!0,a.canDrag=!0,C.style.transition="none",e.draggableDirection==="x"?(a.start=k.clientX,a.removalDistance=C.offsetWidth*(e.draggablePercent/100)):(a.start=k.clientY,a.removalDistance=C.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function g(k){let{top:C,bottom:M,left:$,right:D}=o.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&e.pauseOnHover&&k.clientX>=$&&k.clientX<=D&&k.clientY>=C&&k.clientY<=M?h():w()}function w(){n(!0)}function h(){n(!1)}function v(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",E)}function b(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",E)}function S(k){let C=o.current;if(a.canDrag&&C){a.didMove=!0,t&&h(),e.draggableDirection==="x"?a.delta=k.clientX-a.start:a.delta=k.clientY-a.start,a.start!==k.clientX&&(a.canCloseOnClick=!1);let M=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;C.style.transform=`translate3d(${M},0)`,C.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function E(){b();let k=o.current;if(a.canDrag&&a.didMove&&k){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let T={onPointerDown:m,onPointerUp:g};return l&&s&&(T.onMouseEnter=h,e.stacked||(T.onMouseLeave=w)),c&&(T.onClick=k=>{d&&d(k),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:h,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:T}}var r3=typeof window<"u"?x.useLayoutEffect:x.useEffect,Qu=({theme:e,type:t,isLoading:n,...r})=>K.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function i3(e){return K.createElement(Qu,{...e},K.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function o3(e){return K.createElement(Qu,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function a3(e){return K.createElement(Qu,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function s3(e){return K.createElement(Qu,{...e},K.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function l3(){return K.createElement("div",{className:"Toastify__spinner"})}var $p={info:o3,warning:i3,success:a3,error:s3,spinner:l3},u3=e=>e in $p;function c3({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Jn(r)?i=r({...o,isLoading:n}):x.isValidElement(r)?i=x.cloneElement(r,o):n?i=$p.spinner():u3(t)&&(i=$p[t](o))),i}var d3=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=n3(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:d,hideProgressBar:c,closeToast:y,transition:p,position:m,className:g,style:w,progressClassName:h,updateId:v,role:b,progress:S,rtl:E,toastId:T,deleteToast:k,isIn:C,isLoading:M,closeOnClick:$,theme:D,ariaLabel:A}=e,j=Xr("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":$}),F=Jn(g)?g({rtl:E,position:m,type:d,defaultClassName:j}):Xr(j,g),R=c3(e),L=!!S||!s,O={closeToast:y,type:d,theme:D},P=null;return a===!1||(Jn(a)?P=a(O):x.isValidElement(a)?P=x.cloneElement(a,O):P=N4(O)),K.createElement(p,{isIn:C,done:k,position:m,preventExitTransition:n,nodeRef:r,playToast:o},K.createElement("div",{id:T,tabIndex:0,onClick:u,"data-in":C,className:F,...i,style:w,ref:r,...C&&{role:b,"aria-label":A}},R!=null&&K.createElement("div",{className:Xr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},R),Dw(l,e,!t),P,!e.customProgressBar&&K.createElement(B4,{...v&&!L?{key:`p-${v}`}:{},rtl:E,theme:D,delay:s,isRunning:t,isIn:C,closeToast:y,hide:c,type:d,className:h,controlledProgress:L,progress:S||0})))},f3=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),p3=z4(f3("bounce",!0)),h3={position:"top-right",transition:p3,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Dn(e){let t={...h3,...e},n=e.stacked,[r,i]=x.useState(!0),o=x.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=t3(t),{className:u,style:d,rtl:c,containerId:y,hotKeys:p}=t;function m(w){let h=Xr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":c});return Jn(u)?u({position:w,rtl:c,defaultClassName:h}):Xr(h,Op(u))}function g(){n&&(i(!0),Y.play())}return r3(()=>{var w;if(n){let h=o.current.querySelectorAll('[data-in="true"]'),v=12,b=(w=t.position)==null?void 0:w.includes("top"),S=0,E=0;Array.from(h).reverse().forEach((T,k)=>{let C=T;C.classList.add("Toastify__toast--stacked"),k>0&&(C.dataset.collapsed=`${r}`),C.dataset.pos||(C.dataset.pos=b?"top":"bot");let M=S*(r?.2:1)+(r?0:v*k);C.style.setProperty("--y",`${b?M:M*-1}px`),C.style.setProperty("--g",`${v}`),C.style.setProperty("--s",`${1-(r?E:0)}`),S+=C.offsetHeight,E+=.025})}},[r,s,n]),x.useEffect(()=>{function w(h){var v;let b=o.current;p(h)&&((v=b.querySelector('[tabIndex="0"]'))==null||v.focus(),i(!1),Y.pause()),h.key==="Escape"&&(document.activeElement===b||b!=null&&b.contains(document.activeElement))&&(i(!0),Y.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[p]),K.createElement("section",{ref:o,className:"Toastify",id:y,onMouseEnter:()=>{n&&(i(!1),Y.pause())},onMouseLeave:g,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,h)=>{let v=h.length?{...d}:{...d,pointerEvents:"none"};return K.createElement("div",{tabIndex:-1,className:m(w),"data-stacked":n,style:v,key:`c-${w}`},h.map(({content:b,props:S})=>K.createElement(d3,{...S,stacked:n,collapseAll:g,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},b)))}))}const oo="/Didiv/assets/nofoto-2f8d9d99.png",m3=_.div`
`,g3=_.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,v3=_.h2`
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

`,y3=_.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;_.div``;const x3=_.div`
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
`,b3=_.div`
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
`,ym=_.div`
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
`,w3=_.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,S3=_.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,_3=_.p`
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
`;_.p`
     font-size: 17px;
    font-weight: 800;

`;const Nw=_.div.attrs({className:"card-buttons"})`
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
`,eu=_.button`
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
`;_.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;_.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const C3=_.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,Td=_.button`
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
`,E3=_.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,k3=_.button`
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
`,P3=_.div`
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
`,gi=_.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,Bw=_.div`
  text-align: center;
  width: 100px;
 
`,Vw=_.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Uw=_.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Ww=_.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Hw=_.span`
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
`,Gw=Mw({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]},setFavorites(e,t){e.items=t.payload},addFavorite(e,t){e.items.push(t.payload)},removeFavorite(e,t){e.items=e.items.filter(n=>n.id!==t.payload)}}}),{toggleFavorite:ui,clearFavorite:T3,addFavorite:bB,removeFavorite:wB,setFavorites:O3}=Gw.actions,j3=Gw.reducer,qw=()=>{const e=vn(),[t,n]=x.useState([]),r=Ue(l=>l.favorites.items),i=Ue(l=>l.cart.items);x.useEffect(()=>{const l=new Date,s=new Date;s.setDate(l.getDate()-7);const u=s.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${u}`).then(d=>d.json()).then(d=>n(d.data)).catch(d=>console.error("Помилка завантаження нових товарів:",d))},[]);const o=(l,s)=>{s.stopPropagation();const u=r.some(d=>d.id===l.id);e(ui(l)),u?Y.warning(`${l.name} видалено з обраного`):Y.info(`${l.name} додано в обране`)},a=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:f.jsxs(Mj,{children:[f.jsx(Dn,{}),f.jsx($j,{children:"Нові товари"}),f.jsxs(Ij,{children:[a.map(l=>{var w;const s=r.some(h=>h.id===l.id),u=i.find(h=>h.id===l.id),c=(u?u.quantity:0)>=(l.stock||0),y=l.new_price&&l.new_price<l.price,p=y?l.new_price:l.price,m=y?Math.round((l.price-l.new_price)/l.price*100):0,g=(h,v)=>{if(v.stopPropagation(),c){Y.error("Товар уже у кошику");return}e(vo({...h,quantity:1})),Y.success(`${h.name} додано в кошик!`)};return f.jsxs(Dj,{children:[f.jsxs(Lj,{to:`/product/${l.id}`,children:[f.jsx(Aj,{children:"Новинка"}),f.jsx("img",{src:((w=l.images)==null?void 0:w[0].url)||oo,alt:l.name,onError:h=>{h.currentTarget.onerror=null,h.currentTarget.src=oo}}),f.jsx("div",{className:"overlay"})]}),f.jsxs(Rj,{children:[f.jsx(Fj,{children:l.name}),f.jsxs(zj,{children:[f.jsx(Bw,{children:f.jsxs(Vw,{children:[f.jsxs(Uw,{$discount:y,children:[p.toLocaleString()," грн"]}),y&&f.jsxs(Ww,{children:[l.price.toLocaleString()," грн"]}),y&&f.jsxs(Hw,{children:["-",m,"%"]})]})}),f.jsxs(Nw,{children:[f.jsx(eu,{onClick:h=>g(l,h),children:f.jsx(go,{size:24,color:u?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(eu,{onClick:h=>o(l,h),children:f.jsx(Ya,{size:24,fill:s?"#ff4d4f":"none",color:s?"#ff4d4f":"#000000",strokeWidth:s?1:2})})]})]})]})]},l.id)}),f.jsx(Nj,{to:"/catalog/new",children:f.jsxs(Bj,{children:[f.jsx("p",{children:"Усі новинки"}),f.jsx(Vj,{children:f.jsx(Bu,{size:24})})]})})]})]})};function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function M3(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function $3(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var I3=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($3(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=M3(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),at="-ms-",tu="-moz-",ce="-webkit-",Yw="comm",xm="rule",bm="decl",D3="@import",Xw="@keyframes",L3="@layer",A3=Math.abs,Zu=String.fromCharCode,R3=Object.assign;function F3(e,t){return et(e,0)^45?(((t<<2^et(e,0))<<2^et(e,1))<<2^et(e,2))<<2^et(e,3):0}function Kw(e){return e.trim()}function z3(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function Ip(e,t){return e.indexOf(t)}function et(e,t){return e.charCodeAt(t)|0}function Aa(e,t,n){return e.slice(t,n)}function _n(e){return e.length}function wm(e){return e.length}function ks(e,t){return t.push(e),e}function N3(e,t){return e.map(t).join("")}var Ju=1,ao=1,Qw=0,Ot=0,Le=0,yo="";function ec(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ju,column:ao,length:a,return:""}}function Lo(e,t){return R3(ec("",null,null,"",null,null,0),e,{length:-e.length},t)}function B3(){return Le}function V3(){return Le=Ot>0?et(yo,--Ot):0,ao--,Le===10&&(ao=1,Ju--),Le}function Ft(){return Le=Ot<Qw?et(yo,Ot++):0,ao++,Le===10&&(ao=1,Ju++),Le}function On(){return et(yo,Ot)}function ol(){return Ot}function Za(e,t){return Aa(yo,e,t)}function Ra(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zw(e){return Ju=ao=1,Qw=_n(yo=e),Ot=0,[]}function Jw(e){return yo="",e}function al(e){return Kw(Za(Ot-1,Dp(e===91?e+2:e===40?e+1:e)))}function U3(e){for(;(Le=On())&&Le<33;)Ft();return Ra(e)>2||Ra(Le)>3?"":" "}function W3(e,t){for(;--t&&Ft()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Za(e,ol()+(t<6&&On()==32&&Ft()==32))}function Dp(e){for(;Ft();)switch(Le){case e:return Ot;case 34:case 39:e!==34&&e!==39&&Dp(Le);break;case 40:e===41&&Dp(e);break;case 92:Ft();break}return Ot}function H3(e,t){for(;Ft()&&e+Le!==47+10;)if(e+Le===42+42&&On()===47)break;return"/*"+Za(t,Ot-1)+"*"+Zu(e===47?e:Ft())}function G3(e){for(;!Ra(On());)Ft();return Za(e,Ot)}function q3(e){return Jw(sl("",null,null,null,[""],e=Zw(e),0,[0],e))}function sl(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,p=0,m=0,g=1,w=1,h=1,v=0,b="",S=i,E=o,T=r,k=b;w;)switch(m=v,v=Ft()){case 40:if(m!=108&&et(k,c-1)==58){Ip(k+=de(al(v),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=al(v);break;case 9:case 10:case 13:case 32:k+=U3(m);break;case 92:k+=W3(ol()-1,7);continue;case 47:switch(On()){case 42:case 47:ks(Y3(H3(Ft(),ol()),t,n),s);break;default:k+="/"}break;case 123*g:l[u++]=_n(k)*h;case 125*g:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+d:h==-1&&(k=de(k,/\f/g,"")),p>0&&_n(k)-c&&ks(p>32?uv(k+";",r,n,c-1):uv(de(k," ","")+";",r,n,c-2),s);break;case 59:k+=";";default:if(ks(T=lv(k,t,n,u,d,i,l,b,S=[],E=[],c),o),v===123)if(d===0)sl(k,t,T,T,S,o,c,l,E);else switch(y===99&&et(k,3)===110?100:y){case 100:case 108:case 109:case 115:sl(e,T,T,r&&ks(lv(e,T,T,0,0,i,l,b,i,S=[],c),E),i,E,c,l,r?S:E);break;default:sl(k,T,T,T,[""],E,0,l,E)}}u=d=p=0,g=h=1,b=k="",c=a;break;case 58:c=1+_n(k),p=m;default:if(g<1){if(v==123)--g;else if(v==125&&g++==0&&V3()==125)continue}switch(k+=Zu(v),v*g){case 38:h=d>0?1:(k+="\f",-1);break;case 44:l[u++]=(_n(k)-1)*h,h=1;break;case 64:On()===45&&(k+=al(Ft())),y=On(),d=c=_n(b=k+=G3(ol())),v++;break;case 45:m===45&&_n(k)==2&&(g=0)}}return o}function lv(e,t,n,r,i,o,a,l,s,u,d){for(var c=i-1,y=i===0?o:[""],p=wm(y),m=0,g=0,w=0;m<r;++m)for(var h=0,v=Aa(e,c+1,c=A3(g=a[m])),b=e;h<p;++h)(b=Kw(g>0?y[h]+" "+v:de(v,/&\f/g,y[h])))&&(s[w++]=b);return ec(e,t,n,i===0?xm:l,s,u,d)}function Y3(e,t,n){return ec(e,t,n,Yw,Zu(B3()),Aa(e,2,-2),0)}function uv(e,t,n,r){return ec(e,t,n,bm,Aa(e,0,r),Aa(e,r+1,-1),r)}function Ui(e,t){for(var n="",r=wm(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function X3(e,t,n,r){switch(e.type){case L3:if(e.children.length)break;case D3:case bm:return e.return=e.return||e.value;case Yw:return"";case Xw:return e.return=e.value+"{"+Ui(e.children,r)+"}";case xm:e.value=e.props.join(",")}return _n(n=Ui(e.children,r))?e.return=e.value+"{"+n+"}":""}function K3(e){var t=wm(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Q3(e){return function(t){t.root||(t=t.return)&&e(t)}}function Z3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var J3=function(t,n,r){for(var i=0,o=0;i=o,o=On(),i===38&&o===12&&(n[r]=1),!Ra(o);)Ft();return Za(t,Ot)},e5=function(t,n){var r=-1,i=44;do switch(Ra(i)){case 0:i===38&&On()===12&&(n[r]=1),t[r]+=J3(Ot-1,n,r);break;case 2:t[r]+=al(i);break;case 4:if(i===44){t[++r]=On()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Zu(i)}while(i=Ft());return t},t5=function(t,n){return Jw(e5(Zw(t),n))},cv=new WeakMap,n5=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!cv.get(r))&&!i){cv.set(t,!0);for(var o=[],a=t5(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var d=0;d<l.length;d++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},r5=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function eS(e,t){switch(F3(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+tu+e+at+e+e;case 6828:case 4268:return ce+e+at+e+e;case 6165:return ce+e+at+"flex-"+e+e;case 5187:return ce+e+de(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+at+"flex-$1$2")+e;case 5443:return ce+e+at+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ce+e+at+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+at+de(e,"shrink","negative")+e;case 5292:return ce+e+at+de(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+de(e,"-grow","")+ce+e+at+de(e,"grow","positive")+e;case 4554:return ce+de(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+at+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_n(e)-1-t>6)switch(et(e,t+1)){case 109:if(et(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+tu+(et(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ip(e,"stretch")?eS(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(et(e,t+1)!==115)break;case 6444:switch(et(e,_n(e)-3-(~Ip(e,"!important")&&10))){case 107:return de(e,":",":"+ce)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(et(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+at+"$2box$3")+e}break;case 5936:switch(et(e,t+11)){case 114:return ce+e+at+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+at+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+at+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+at+e+e}return e}var i5=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case bm:t.return=eS(t.value,t.length);break;case Xw:return Ui([Lo(t,{value:de(t.value,"@","@"+ce)})],i);case xm:if(t.length)return N3(t.props,function(o){switch(z3(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ui([Lo(t,{props:[de(o,/:(read-\w+)/,":"+tu+"$1")]})],i);case"::placeholder":return Ui([Lo(t,{props:[de(o,/:(plac\w+)/,":"+ce+"input-$1")]}),Lo(t,{props:[de(o,/:(plac\w+)/,":"+tu+"$1")]}),Lo(t,{props:[de(o,/:(plac\w+)/,at+"input-$1")]})],i)}return""})}},o5=[i5],a5=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var w=g.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=t.stylisPlugins||o5,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var w=g.getAttribute("data-emotion").split(" "),h=1;h<w.length;h++)o[w[h]]=!0;l.push(g)});var s,u=[n5,r5];{var d,c=[X3,Q3(function(g){d.insert(g)})],y=K3(u.concat(i,c)),p=function(w){return Ui(q3(w),y)};s=function(w,h,v,b){d=v,p(w?w+"{"+h.styles+"}":h.styles),b&&(m.inserted[h.name]=!0)}}var m={key:n,sheet:new I3({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return m.sheet.hydrate(l),m},tS={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,Sm=Qe?Symbol.for("react.element"):60103,_m=Qe?Symbol.for("react.portal"):60106,tc=Qe?Symbol.for("react.fragment"):60107,nc=Qe?Symbol.for("react.strict_mode"):60108,rc=Qe?Symbol.for("react.profiler"):60114,ic=Qe?Symbol.for("react.provider"):60109,oc=Qe?Symbol.for("react.context"):60110,Cm=Qe?Symbol.for("react.async_mode"):60111,ac=Qe?Symbol.for("react.concurrent_mode"):60111,sc=Qe?Symbol.for("react.forward_ref"):60112,lc=Qe?Symbol.for("react.suspense"):60113,s5=Qe?Symbol.for("react.suspense_list"):60120,uc=Qe?Symbol.for("react.memo"):60115,cc=Qe?Symbol.for("react.lazy"):60116,l5=Qe?Symbol.for("react.block"):60121,u5=Qe?Symbol.for("react.fundamental"):60117,c5=Qe?Symbol.for("react.responder"):60118,d5=Qe?Symbol.for("react.scope"):60119;function Ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Sm:switch(e=e.type,e){case Cm:case ac:case tc:case rc:case nc:case lc:return e;default:switch(e=e&&e.$$typeof,e){case oc:case sc:case cc:case uc:case ic:return e;default:return t}}case _m:return t}}}function nS(e){return Ut(e)===ac}ge.AsyncMode=Cm;ge.ConcurrentMode=ac;ge.ContextConsumer=oc;ge.ContextProvider=ic;ge.Element=Sm;ge.ForwardRef=sc;ge.Fragment=tc;ge.Lazy=cc;ge.Memo=uc;ge.Portal=_m;ge.Profiler=rc;ge.StrictMode=nc;ge.Suspense=lc;ge.isAsyncMode=function(e){return nS(e)||Ut(e)===Cm};ge.isConcurrentMode=nS;ge.isContextConsumer=function(e){return Ut(e)===oc};ge.isContextProvider=function(e){return Ut(e)===ic};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sm};ge.isForwardRef=function(e){return Ut(e)===sc};ge.isFragment=function(e){return Ut(e)===tc};ge.isLazy=function(e){return Ut(e)===cc};ge.isMemo=function(e){return Ut(e)===uc};ge.isPortal=function(e){return Ut(e)===_m};ge.isProfiler=function(e){return Ut(e)===rc};ge.isStrictMode=function(e){return Ut(e)===nc};ge.isSuspense=function(e){return Ut(e)===lc};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===tc||e===ac||e===rc||e===nc||e===lc||e===s5||typeof e=="object"&&e!==null&&(e.$$typeof===cc||e.$$typeof===uc||e.$$typeof===ic||e.$$typeof===oc||e.$$typeof===sc||e.$$typeof===u5||e.$$typeof===c5||e.$$typeof===d5||e.$$typeof===l5)};ge.typeOf=Ut;tS.exports=ge;var f5=tS.exports,rS=f5,p5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},h5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iS={};iS[rS.ForwardRef]=p5;iS[rS.Memo]=h5;var m5=!0;function oS(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Em=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||m5===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},aS=function(t,n,r){Em(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function g5(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var v5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},y5=/[A-Z]|^ms/g,x5=/_EMO_([^_]+?)_([^]*?)_EMO_/g,sS=function(t){return t.charCodeAt(1)===45},dv=function(t){return t!=null&&typeof t!="boolean"},Od=Z3(function(e){return sS(e)?e:e.replace(y5,"-$&").toLowerCase()}),fv=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(x5,function(r,i,o){return Cn={name:i,styles:o,next:Cn},i})}return v5[t]!==1&&!sS(t)&&typeof n=="number"&&n!==0?n+"px":n};function Fa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Cn={name:n.name,styles:n.styles,next:Cn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Cn={name:r.name,styles:r.styles,next:Cn},r=r.next;var i=n.styles+";";return i}return b5(e,t,n)}case"function":{if(e!==void 0){var o=Cn,a=n(e);return Cn=o,Fa(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function b5(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Fa(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":dv(a)&&(r+=Od(o)+":"+fv(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)dv(a[l])&&(r+=Od(o)+":"+fv(o,a[l])+";");else{var s=Fa(e,t,a);switch(o){case"animation":case"animationName":{r+=Od(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var pv=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Cn,km=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Cn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Fa(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Fa(r,n,t[l]),i&&(o+=a[l]);pv.lastIndex=0;for(var s="",u;(u=pv.exec(o))!==null;)s+="-"+u[1];var d=g5(o)+s;return{name:d,styles:o,next:Cn}},w5=function(t){return t()},S5=gf["useInsertionEffect"]?gf["useInsertionEffect"]:!1,lS=S5||w5,Pm={}.hasOwnProperty,uS=x.createContext(typeof HTMLElement<"u"?a5({key:"css"}):null);uS.Provider;var cS=function(t){return x.forwardRef(function(n,r){var i=x.useContext(uS);return t(n,i,r)})},dS=x.createContext({}),Lp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",_5=function(t,n){var r={};for(var i in n)Pm.call(n,i)&&(r[i]=n[i]);return r[Lp]=t,r},C5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Em(n,r,i),lS(function(){return aS(n,r,i)}),null},E5=cS(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Lp],o=[r],a="";typeof e.className=="string"?a=oS(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=km(o,void 0,x.useContext(dS));a+=t.key+"-"+l.name;var s={};for(var u in e)Pm.call(e,u)&&u!=="css"&&u!==Lp&&(s[u]=e[u]);return s.ref=n,s.className=a,x.createElement(x.Fragment,null,x.createElement(C5,{cache:t,serialized:l,isStringTag:typeof i=="string"}),x.createElement(i,s))}),k5=E5,Q=function(t,n){var r=arguments;if(n==null||!Pm.call(n,"css"))return x.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=k5,o[1]=_5(t,n);for(var a=2;a<i;a++)o[a]=r[a];return x.createElement.apply(null,o)};function Tm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return km(t)}var P5=function(){var t=Tm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},T5=RP,O5=function(t){return t!=="theme"},hv=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?T5:O5},mv=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},j5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Em(n,r,i),lS(function(){return aS(n,r,i)}),null},M5=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=mv(t,n,r),s=l||hv(i),u=!s("as");return function(){var d=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&c.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)c.push.apply(c,d);else{c.push(d[0][0]);for(var y=d.length,p=1;p<y;p++)c.push(d[p],d[0][p])}var m=cS(function(g,w,h){var v=u&&g.as||i,b="",S=[],E=g;if(g.theme==null){E={};for(var T in g)E[T]=g[T];E.theme=x.useContext(dS)}typeof g.className=="string"?b=oS(w.registered,S,g.className):g.className!=null&&(b=g.className+" ");var k=km(c.concat(S),w.registered,E);b+=w.key+"-"+k.name,a!==void 0&&(b+=" "+a);var C=u&&l===void 0?hv(v):s,M={};for(var $ in g)u&&$==="as"||C($)&&(M[$]=g[$]);return M.className=b,M.ref=h,x.createElement(x.Fragment,null,x.createElement(j5,{cache:w,serialized:k,isStringTag:typeof v=="string"}),x.createElement(v,M))});return m.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=c,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return"."+a}}),m.withComponent=function(g,w){return e(g,J({},n,w,{shouldForwardProp:mv(m,w,!0)})).apply(void 0,c)},m}},$5=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Re=M5.bind();$5.forEach(function(e){Re[e]=Re(e)});const I5=Re.section`
  background-color: var(--second-background);
`,D5=Re.div`
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
`,L5=Re.div`

`,A5=Re.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,R5=Re.div`
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
`;const F5=Re(Pe)`
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
`,z5=Re.div`
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
`,N5=Re.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,B5=Re.p`
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
`;var V5={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};U5(V5);function U5(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var W5="#4fa94d",H5={"aria-busy":!0,role:"progressbar"},G5=_.div`
  display: ${e=>e.$visible?"flex":"none"};
`,q5="http://www.w3.org/2000/svg",Ja=({height:e=100,width:t=100,radius:n=5,color:r=W5,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>f.jsx(G5,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...H5,children:f.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:q5,"data-testid":"ball-triangle-svg",children:[f.jsx("title",{children:"Ball Triangle"}),f.jsx("desc",{children:"Animated representation of three balls"}),f.jsx("g",{fill:"none",fillRule:"evenodd",children:f.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[f.jsxs("circle",{cx:"5",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"27",cy:"5",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"49",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),nn=242.776657104492,Y5=1.6,X5=cm`
12.5% {
  stroke-dasharray: ${nn*.14}px, ${nn}px;
  stroke-dashoffset: -${nn*.11}px;
}
43.75% {
  stroke-dasharray: ${nn*.35}px, ${nn}px;
  stroke-dashoffset: -${nn*.35}px;
}
100% {
  stroke-dasharray: ${nn*.01}px, ${nn}px;
  stroke-dashoffset: -${nn*.99}px;
}
`;_.path`
  stroke-dasharray: ${nn*.01}px, ${nn};
  stroke-dashoffset: 0;
  animation: ${X5} ${Y5}s linear infinite;
`;var K5=cm`
to {
   transform: rotate(360deg);
 }
`;_.svg`
  animation: ${K5} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
`;_.polyline`
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
`;var Q5=cm`
to {
   stroke-dashoffset: 136;
 }
`;_.polygon`
  stroke-dasharray: 17;
  animation: ${Q5} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;_.svg`
  transform-origin: 50% 65%;
`;const Z5=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0);return x.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ja,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsx(I5,{children:f.jsxs(D5,{children:[f.jsx(L5,{children:f.jsx(qw,{})}),f.jsx(A5,{children:"Каталог"}),f.jsx(R5,{children:e.map(i=>f.jsxs(F5,{to:`/catalog/${i.title}`,children:[f.jsx(z5,{children:f.jsx(N5,{src:i.image,alt:i.title})}),f.jsx(B5,{children:i.title})]},i.id))})]})})},J5=Re.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,eM=Re.h1`
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
`,tM=Re.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,nM=Re(Pe)`

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

  
`,rM=()=>f.jsxs(J5,{children:[f.jsxs(eM,{children:[" ",f.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),f.jsx(tM,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),f.jsx(nM,{children:" На головну"})]});const iM=_.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,oM=_.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var fS={},pS={},dc={},hS={exports:{}},es={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var gv=Object.getOwnPropertySymbols,aM=Object.prototype.hasOwnProperty,sM=Object.prototype.propertyIsEnumerable;function lM(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function uM(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var cM=uM()?Object.assign:function(e,t){for(var n,r=lM(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)aM.call(n,a)&&(r[a]=n[a]);if(gv){i=gv(n);for(var l=0;l<i.length;l++)sM.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},mS={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om=cM,xo=60103,gS=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var vS=60109,yS=60110,xS=60112;le.Suspense=60113;var bS=60115,wS=60116;if(typeof Symbol=="function"&&Symbol.for){var tn=Symbol.for;xo=tn("react.element"),gS=tn("react.portal"),le.Fragment=tn("react.fragment"),le.StrictMode=tn("react.strict_mode"),le.Profiler=tn("react.profiler"),vS=tn("react.provider"),yS=tn("react.context"),xS=tn("react.forward_ref"),le.Suspense=tn("react.suspense"),bS=tn("react.memo"),wS=tn("react.lazy")}var vv=typeof Symbol=="function"&&Symbol.iterator;function dM(e){return e===null||typeof e!="object"?null:(e=vv&&e[vv]||e["@@iterator"],typeof e=="function"?e:null)}function ts(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var SS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_S={};function bo(e,t,n){this.props=e,this.context=t,this.refs=_S,this.updater=n||SS}bo.prototype.isReactComponent={};bo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(ts(85));this.updater.enqueueSetState(this,e,t,"setState")};bo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function CS(){}CS.prototype=bo.prototype;function jm(e,t,n){this.props=e,this.context=t,this.refs=_S,this.updater=n||SS}var Mm=jm.prototype=new CS;Mm.constructor=jm;Om(Mm,bo.prototype);Mm.isPureReactComponent=!0;var $m={current:null},ES=Object.prototype.hasOwnProperty,kS={key:!0,ref:!0,__self:!0,__source:!0};function PS(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ES.call(t,r)&&!kS.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xo,type:e,key:o,ref:a,props:i,_owner:$m.current}}function fM(e,t){return{$$typeof:xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Im(e){return typeof e=="object"&&e!==null&&e.$$typeof===xo}function pM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yv=/\/+/g;function jd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pM(""+e.key):t.toString(36)}function ll(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case xo:case gS:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+jd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(yv,"$&/")+"/"),ll(i,t,n,"",function(u){return u})):i!=null&&(Im(i)&&(i=fM(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(yv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+jd(o,l);a+=ll(o,t,n,s,i)}else if(s=dM(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+jd(o,l++),a+=ll(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(ts(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Ps(e,t,n){if(e==null)return e;var r=[],i=0;return ll(e,r,"","",function(o){return t.call(n,o,i++)}),r}function hM(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var TS={current:null};function nr(){var e=TS.current;if(e===null)throw Error(ts(321));return e}var mM={ReactCurrentDispatcher:TS,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:$m,IsSomeRendererActing:{current:!1},assign:Om};le.Children={map:Ps,forEach:function(e,t,n){Ps(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ps(e,function(){t++}),t},toArray:function(e){return Ps(e,function(t){return t})||[]},only:function(e){if(!Im(e))throw Error(ts(143));return e}};le.Component=bo;le.PureComponent=jm;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mM;le.cloneElement=function(e,t,n){if(e==null)throw Error(ts(267,e));var r=Om({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=$m.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ES.call(t,s)&&!kS.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:xo,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:yS,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:vS,_context:e},e.Consumer=e};le.createElement=PS;le.createFactory=function(e){var t=PS.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:xS,render:e}};le.isValidElement=Im;le.lazy=function(e){return{$$typeof:wS,_payload:{_status:-1,_result:e},_init:hM}};le.memo=function(e,t){return{$$typeof:bS,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return nr().useCallback(e,t)};le.useContext=function(e,t){return nr().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return nr().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return nr().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return nr().useLayoutEffect(e,t)};le.useMemo=function(e,t){return nr().useMemo(e,t)};le.useReducer=function(e,t,n){return nr().useReducer(e,t,n)};le.useRef=function(e){return nr().useRef(e)};le.useState=function(e){return nr().useState(e)};le.version="17.0.2";mS.exports=le;var gM=mS.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vM=gM,OS=60103;es.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var xv=Symbol.for;OS=xv("react.element"),es.Fragment=xv("react.fragment")}var yM=vM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xM=Object.prototype.hasOwnProperty,bM={key:!0,ref:!0,__self:!0,__source:!0};function jS(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)xM.call(t,r)&&!bM.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:OS,type:e,key:o,ref:a,props:i,_owner:yM.current}}es.jsx=jS;es.jsxs=jS;hS.exports=es;var Mt=hS.exports,MS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(MS);var $t=MS.exports;const wM={"lds-circle":"_lds-circle_qlxhy_1"},SM=Object.freeze(Object.defineProperty({__proto__:null,default:wM},Symbol.toStringTag,{value:"Module"})),_M=jt(SM);var $S=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dc,"__esModule",{value:!0});dc.Circle=void 0;const CM=Mt,EM=$S($t),kM=$S(_M);function PM({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,CM.jsx)("div",{className:(0,EM.default)(kM.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}dc.Circle=PM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=dc;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(pS);var IS={},fc={};const TM={"lds-default":"_lds-default_wt1n8_1"},OM=Object.freeze(Object.defineProperty({__proto__:null,default:TM},Symbol.toStringTag,{value:"Module"})),jM=jt(OM);var DS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fc,"__esModule",{value:!0});fc.Default=void 0;const bv=Mt,MM=DS($t),$M=DS(jM);function IM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,bv.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,bv.jsx)("div",{className:(0,MM.default)($M.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}fc.Default=IM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=fc;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(IS);var LS={},pc={};const DM={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},LM=Object.freeze(Object.defineProperty({__proto__:null,default:DM},Symbol.toStringTag,{value:"Module"})),AM=jt(LM);var AS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pc,"__esModule",{value:!0});pc.DualRing=void 0;const wv=Mt,Sv=AS($t),_v=AS(AM);function RM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,wv.jsx)("div",{className:(0,Sv.default)(_v.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,wv.jsx)("div",{className:(0,Sv.default)(_v.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}pc.DualRing=RM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=pc;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(LS);var RS={},hc={};const FM={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},zM=Object.freeze(Object.defineProperty({__proto__:null,default:FM},Symbol.toStringTag,{value:"Module"})),NM=jt(zM);var FS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hc,"__esModule",{value:!0});hc.Ellipsis=void 0;const Cv=Mt,BM=FS($t),VM=FS(NM);function UM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,Cv.jsx)("div",{style:{background:`${e}`}},l));return(0,Cv.jsx)("div",{className:(0,BM.default)(VM.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}hc.Ellipsis=UM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=hc;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(RS);var zS={},mc={};const WM={"lds-facebook":"_lds-facebook_1ts9g_1"},HM=Object.freeze(Object.defineProperty({__proto__:null,default:WM},Symbol.toStringTag,{value:"Module"})),GM=jt(HM);var NS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mc,"__esModule",{value:!0});mc.Facebook=void 0;const Ev=Mt,qM=NS($t),YM=NS(GM);function XM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,Ev.jsx)("div",{style:{background:`${e}`}},l));return(0,Ev.jsx)("div",{className:(0,qM.default)(YM.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}mc.Facebook=XM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=mc;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(zS);var BS={},gc={};const KM={"lds-grid":"_lds-grid_1ftub_1"},QM=Object.freeze(Object.defineProperty({__proto__:null,default:KM},Symbol.toStringTag,{value:"Module"})),ZM=jt(QM);var VS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gc,"__esModule",{value:!0});gc.Grid=void 0;const kv=Mt,JM=VS($t),e$=VS(ZM);function t$({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,kv.jsx)("div",{style:{background:`${e}`}},l));return(0,kv.jsx)("div",{className:(0,JM.default)(e$.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}gc.Grid=t$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=gc;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(BS);var US={},vc={};const n$={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},r$=Object.freeze(Object.defineProperty({__proto__:null,default:n$},Symbol.toStringTag,{value:"Module"})),i$=jt(r$);var WS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vc,"__esModule",{value:!0});vc.Heart=void 0;const Ts=Mt,Md=WS($t),$d=WS(i$);function o$({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Ts.jsx)("div",{className:(0,Md.default)($d.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,Ts.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,Ts.jsx)("div",{className:(0,Md.default)($d.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,Ts.jsx)("div",{className:(0,Md.default)($d.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}vc.Heart=o$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=vc;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(US);var HS={},yc={};const a$={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},s$=Object.freeze(Object.defineProperty({__proto__:null,default:a$},Symbol.toStringTag,{value:"Module"})),l$=jt(s$);var GS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yc,"__esModule",{value:!0});yc.Hourglass=void 0;const Pv=Mt,Tv=GS($t),Ov=GS(l$);function u$({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,Pv.jsx)("div",{className:(0,Tv.default)(Ov.default["lds-hourglass"],n),style:{...r},children:(0,Pv.jsx)("div",{className:(0,Tv.default)(Ov.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}yc.Hourglass=u$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=yc;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(HS);var qS={},xc={};const YS="_center_1rufi_10",XS="_spin_1rufi_1",c$={"lds-orbitals":"_lds-orbitals_1rufi_1",center:YS,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:XS},d$=Object.freeze(Object.defineProperty({__proto__:null,center:YS,default:c$,spin:XS},Symbol.toStringTag,{value:"Module"})),f$=jt(d$);var KS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xc,"__esModule",{value:!0});xc.Orbitals=void 0;const ot=Mt,ft=KS($t),_e=KS(f$);function p$({color:e="#7f58af",className:t,style:n}){return(0,ot.jsxs)("div",{className:(0,ft.default)(_e.default["lds-orbitals"],t),style:{...n},children:[(0,ot.jsx)("div",{className:_e.default.center,style:{background:e}}),(0,ot.jsxs)("div",{className:(0,ft.default)(_e.default["inner-spin"]),children:[(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-arc"],_e.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-arc"],_e.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-arc"],_e.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-arc"],_e.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-moon-a"]),style:{background:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-moon-b"]),style:{background:e}})]}),(0,ot.jsxs)("div",{className:(0,ft.default)(_e.default["outer-spin"]),children:[(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-arc"],_e.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-arc"],_e.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-arc"],_e.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-arc"],_e.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-moon-a"]),style:{background:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-moon-b"]),style:{background:e}})]})]})}xc.Orbitals=p$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=xc;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(qS);var QS={},bc={};const h$={"lds-ring":"_lds-ring_xgxdp_1"},m$=Object.freeze(Object.defineProperty({__proto__:null,default:h$},Symbol.toStringTag,{value:"Module"})),g$=jt(m$);var ZS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bc,"__esModule",{value:!0});bc.Ring=void 0;const jv=Mt,v$=ZS($t),y$=ZS(g$);function x$({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,jv.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,jv.jsx)("div",{className:(0,v$.default)(y$.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}bc.Ring=x$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=bc;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(QS);var JS={},wc={};const b$={"lds-ripple":"_lds-ripple_1lgcf_1"},w$=Object.freeze(Object.defineProperty({__proto__:null,default:b$},Symbol.toStringTag,{value:"Module"})),S$=jt(w$);var e2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wc,"__esModule",{value:!0});wc.Ripple=void 0;const Mv=Mt,_$=e2($t),C$=e2(S$);function E$({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,Mv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,Mv.jsx)("div",{className:(0,_$.default)(C$.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}wc.Ripple=E$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=wc;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(JS);var t2={},Sc={};const k$={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},P$=Object.freeze(Object.defineProperty({__proto__:null,default:k$},Symbol.toStringTag,{value:"Module"})),T$=jt(P$);var n2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Sc,"__esModule",{value:!0});Sc.Roller=void 0;const Id=Mt,$v=n2($t),Iv=n2(T$);function O$({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Id.jsx)("div",{children:(0,Id.jsx)("div",{className:(0,$v.default)(Iv.default["div-after"]),style:{background:e}})},o));return(0,Id.jsx)("div",{className:(0,$v.default)(Iv.default["lds-roller"],t),style:{...n},children:r})}Sc.Roller=O$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=Sc;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(t2);var r2={},_c={};const j$={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},M$=Object.freeze(Object.defineProperty({__proto__:null,default:j$},Symbol.toStringTag,{value:"Module"})),$$=jt(M$);var i2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_c,"__esModule",{value:!0});_c.Spinner=void 0;const Dd=Mt,Dv=i2($t),Lv=i2($$);function I$({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,Dd.jsx)("div",{children:(0,Dd.jsx)("div",{className:(0,Dv.default)(Lv.default["div-after"]),style:{background:e}})},o));return(0,Dd.jsx)("div",{className:(0,Dv.default)(Lv.default["lds-spinner"],t),style:{...n},children:r})}_c.Spinner=I$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=_c;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(r2);var o2={},Cc={};const a2="_left_v9vlb_30",s2="_right_v9vlb_33",l2="_anim_v9vlb_37",D$={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:a2,right:s2,anim:l2,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},L$=Object.freeze(Object.defineProperty({__proto__:null,anim:l2,default:D$,left:a2,right:s2},Symbol.toStringTag,{value:"Module"})),A$=jt(L$);var u2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cc,"__esModule",{value:!0});Cc.Ouroboro=void 0;const Ao=Mt,Ro=u2($t),Fo=u2(A$);function R$({color:e="#7f58af",style:t,className:n}){return(0,Ao.jsxs)("div",{className:(0,Ro.default)(Fo.default["lds-ouroboro"],n),style:{...t},children:[(0,Ao.jsx)("span",{className:(0,Ro.default)(Fo.default.left),children:(0,Ao.jsx)("span",{className:(0,Ro.default)(Fo.default.anim),style:{background:e}})}),(0,Ao.jsx)("span",{className:(0,Ro.default)(Fo.default.right),children:(0,Ao.jsx)("span",{className:(0,Ro.default)(Fo.default.anim),style:{background:e}})})]})}Cc.Ouroboro=R$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Cc;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(o2);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=pS;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=IS;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=LS;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=RS;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=zS;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=BS;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=US;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=HS;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=qS;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const d=QS;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return d.Ring}});const c=JS;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return c.Ripple}});const y=t2;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return y.Roller}});const p=r2;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return p.Spinner}});const m=o2;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return m.Ouroboro}})})(fS);const F$=()=>f.jsx(oM,{children:f.jsx(fS.Default,{color:"#6d433da8"})});const z$="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",N$=FT`
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
  src: url(${z$}) format('truetype');
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
`,B$=_.div`
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
`,V$=_(Pe)`
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
`,U$=_.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,W$=_.h3`

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
`,H$=_.a`

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
`,G$=_.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,q$=()=>{const[e,t]=x.useState([]);return x.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),f.jsxs(f.Fragment,{children:[f.jsx(U$,{children:"Каталог"}),f.jsxs(B$,{children:[e.slice(0,7).map(n=>f.jsx(V$,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:f.jsx(W$,{children:n.title})},n.title)),f.jsxs(H$,{href:"catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(G$,{children:f.jsx(Bu,{size:24})})]})]})]})};function Av(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Dm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Av(t[r])&&Av(e[r])&&Object.keys(t[r]).length>0&&Dm(e[r],t[r])})}const c2={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function jn(){const e=typeof document<"u"?document:{};return Dm(e,c2),e}const Y$={document:c2,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function bt(){const e=typeof window<"u"?window:{};return Dm(e,Y$),e}function X$(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function K$(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function d2(e,t=0){return setTimeout(e,t)}function nu(){return Date.now()}function Q$(e){const t=bt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function Z$(e,t="x"){const n=bt();let r,i,o;const a=Q$(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Os(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function J$(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Dt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!J$(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(Os(t[l])&&Os(r[l])?r[l].__swiper__?t[l]=r[l]:Dt(t[l],r[l]):!Os(t[l])&&Os(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Dt(t[l],r[l])):t[l]=r[l])}}}return t}function vi(e,t,n){e.style.setProperty(t,n)}function f2({swiper:e,targetPosition:t,side:n}){const r=bt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(c,y)=>s==="next"&&c>=y||s==="prev"&&c<=y,d=()=>{a=new Date().getTime(),o===null&&(o=a);const c=Math.max(Math.min((a-o)/l,1),0),y=.5-Math.cos(c*Math.PI)/2;let p=i+y*(t-i);if(u(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),u(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function kn(e,t=""){const n=bt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function eI(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function tI(e,t){const n=bt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=eI(e,t))),r}function ru(e){try{console.warn(e);return}catch{}}function iu(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:X$(t)),n}function nI(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function rI(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function gr(e,t){return bt().getComputedStyle(e,null).getPropertyValue(t)}function ou(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function p2(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Ap(e,t,n){const r=bt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function za(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function h2(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=kn(e.el,`.${r[i]}`)[0];o||(o=iu("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const Rv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function iI({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Rv};function i(p){let m;return p&&typeof p=="string"&&e.isElement&&(m=e.el.querySelector(p)||e.hostEl.querySelector(p),m)?m:(p&&(typeof p=="string"&&(m=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&m&&m.length>1&&e.el.querySelectorAll(p).length===1?m=e.el.querySelector(p):m&&m.length===1&&(m=m[0])),p&&!m?p:m)}function o(p,m){const g=e.params.navigation;p=qe(p),p.forEach(w=>{w&&(w.classList[m?"add":"remove"](...g.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=m),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](g.lockClass))})}function a(){const{nextEl:p,prevEl:m}=e.navigation;if(e.params.loop){o(m,!1),o(p,!1);return}o(m,e.isBeginning&&!e.params.rewind),o(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const p=e.params.navigation;if(e.params.navigation=h2(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let m=i(p.nextEl),g=i(p.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:g}),m=qe(m),g=qe(g);const w=(h,v)=>{if(h){if(p.addIcons&&h.matches(".swiper-button-next,.swiper-button-prev")&&!h.querySelector("svg")){const b=document.createElement("div");za(b,Rv),h.appendChild(b.querySelector("svg")),b.remove()}h.addEventListener("click",v==="next"?s:l)}!e.enabled&&h&&h.classList.add(...p.lockClass.split(" "))};m.forEach(h=>w(h,"next")),g.forEach(h=>w(h,"prev"))}function d(){let{nextEl:p,prevEl:m}=e.navigation;p=qe(p),m=qe(m);const g=(w,h)=>{w.removeEventListener("click",h==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(w=>g(w,"next")),m.forEach(w=>g(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?y():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:p,prevEl:m}=e.navigation;if(p=qe(p),m=qe(m),e.enabled){a();return}[...p,...m].filter(g=>!!g).forEach(g=>g.classList.add(e.params.navigation.lockClass))}),n("click",(p,m)=>{let{nextEl:g,prevEl:w}=e.navigation;g=qe(g),w=qe(w);const h=m.target;let v=w.includes(h)||g.includes(h);if(e.isElement&&!v){const b=m.path||m.composedPath&&m.composedPath();b&&(v=b.find(S=>g.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===h||e.pagination.el.contains(h)))return;let b;g.length?b=g[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(b=w[0].classList.contains(e.params.navigation.hiddenClass)),r(b===!0?"navigationShow":"navigationHide"),[...g,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const c=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},y=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:c,disable:y,update:a,init:u,destroy:d})}function zo(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function oI({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(h,v){const{bulletActiveClass:b}=e.params.pagination;h&&(h=h[`${v==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${b}-${v}`),h=h[`${v==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${b}-${v}-${v}`)))}function u(h,v,b){if(h=h%b,v=v%b,v===h+1)return"next";if(v===h-1)return"previous"}function d(h){const v=h.target.closest(zo(e.params.pagination.bulletClass));if(!v)return;h.preventDefault();const b=ou(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const S=u(e.realIndex,b,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b)}function c(){const h=e.rtl,v=e.params.pagination;if(l())return;let b=e.pagination.el;b=qe(b);let S,E;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,k=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,S=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const C=e.pagination.bullets;let M,$,D;if(v.dynamicBullets&&(o=Ap(C[0],e.isHorizontal()?"width":"height",!0),b.forEach(A=>{A.style[e.isHorizontal()?"width":"height"]=`${o*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&E!==void 0&&(a+=S-(E||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),M=Math.max(S-a,0),$=M+(Math.min(C.length,v.dynamicMainBullets)-1),D=($+M)/2),C.forEach(A=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${v.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();A.classList.remove(...j)}),b.length>1)C.forEach(A=>{const j=ou(A);j===S?A.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&A.setAttribute("part","bullet"),v.dynamicBullets&&(j>=M&&j<=$&&A.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),j===M&&s(A,"prev"),j===$&&s(A,"next"))});else{const A=C[S];if(A&&A.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&C.forEach((j,F)=>{j.setAttribute("part",F===S?"bullet-active":"bullet")}),v.dynamicBullets){const j=C[M],F=C[$];for(let R=M;R<=$;R+=1)C[R]&&C[R].classList.add(...`${v.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(F,"next")}}if(v.dynamicBullets){const A=Math.min(C.length,v.dynamicMainBullets+4),j=(o*A-o)/2-D*o,F=h?"right":"left";C.forEach(R=>{R.style[e.isHorizontal()?F:"top"]=`${j}px`})}}b.forEach((C,M)=>{if(v.type==="fraction"&&(C.querySelectorAll(zo(v.currentClass)).forEach($=>{$.textContent=v.formatFractionCurrent(S+1)}),C.querySelectorAll(zo(v.totalClass)).forEach($=>{$.textContent=v.formatFractionTotal(k)})),v.type==="progressbar"){let $;v.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";const D=(S+1)/k;let A=1,j=1;$==="horizontal"?A=D:j=D,C.querySelectorAll(zo(v.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${A}) scaleY(${j})`,F.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(za(C,v.renderCustom(e,S+1,k)),M===0&&r("paginationRender",C)):(M===0&&r("paginationRender",C),r("paginationUpdate",C)),e.params.watchOverflow&&e.enabled&&C.classList[e.isLocked?"add":"remove"](v.lockClass)})}function y(){const h=e.params.pagination;if(l())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=qe(b);let S="";if(h.type==="bullets"){let E=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>v&&(E=v);for(let T=0;T<E;T+=1)h.renderBullet?S+=h.renderBullet.call(e,T,h.bulletClass):S+=`<${h.bulletElement} ${e.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(e,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(e,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach(E=>{h.type!=="custom"&&za(E,S||""),h.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(zo(h.bulletClass)))}),h.type!=="custom"&&r("paginationRender",b[0])}function p(){e.params.pagination=h2(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let v;typeof h.el=="string"&&e.isElement&&(v=e.el.querySelector(h.el)),!v&&typeof h.el=="string"&&(v=[...document.querySelectorAll(h.el)]),v||(v=h.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(h.el)],v.length>1&&(v=v.find(b=>p2(b,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=qe(v),v.forEach(b=>{h.type==="bullets"&&h.clickable&&b.classList.add(...(h.clickableClass||"").split(" ")),b.classList.add(h.modifierClass+h.type),b.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(b.classList.add(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&b.classList.add(h.progressbarOppositeClass),h.clickable&&b.addEventListener("click",d),e.enabled||b.classList.add(h.lockClass)}))}function m(){const h=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=qe(v),v.forEach(b=>{b.classList.remove(h.hiddenClass),b.classList.remove(h.modifierClass+h.type),b.classList.remove(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(b.classList.remove(...(h.clickableClass||"").split(" ")),b.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(b=>b.classList.remove(...h.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const h=e.params.pagination;let{el:v}=e.pagination;v=qe(v),v.forEach(b=>{b.classList.remove(h.horizontalClass,h.verticalClass),b.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(p(),y(),c())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&c()}),n("snapIndexChange",()=>{c()}),n("snapGridLengthChange",()=>{y(),c()}),n("destroy",()=>{m()}),n("enable disable",()=>{let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{c()}),n("click",(h,v)=>{const b=v.target,S=qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const E=S[0].classList.contains(e.params.pagination.hiddenClass);r(E===!0?"paginationShow":"paginationHide"),S.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),p(),y(),c()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:g,disable:w,render:y,update:c,init:p,destroy:m})}function aI({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,d=new Date().getTime(),c,y,p,m,g,w;function h(O){!e||e.destroyed||!e.wrapperEl||O.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",h),!(w||O.detail&&O.detail.bySwiperTouchMove)&&M())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?c=!0:c&&(s=u,c=!1);const O=e.autoplay.paused?u:d+s-new Date().getTime();e.autoplay.timeLeft=O,r("autoplayTimeLeft",O,O/l),a=requestAnimationFrame(()=>{v()})},b=()=>{let O;return e.virtual&&e.params.virtual.enabled?O=e.slides.find(I=>I.classList.contains("swiper-slide-active")):O=e.slides[e.activeIndex],O?parseInt(O.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let O=e.params.autoplay.delay;const P=b();return!Number.isNaN(P)&&P>0&&(O=P),O},E=O=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),v();let P=O;typeof P>"u"&&(P=S(),l=P,s=P),u=P;const I=e.params.speed,z=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,I,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,I,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{z()},P)):requestAnimationFrame(()=>{z()}),P},T=()=>{d=new Date().getTime(),e.autoplay.running=!0,E(),r("autoplayStart")},k=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},C=(O,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),O||(g=!0);const I=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",h):M()};if(e.autoplay.paused=!0,P){I();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),I())},M=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),g?(g=!1,E(u)):E(),e.autoplay.paused=!1,r("autoplayResume"))},$=()=>{if(e.destroyed||!e.autoplay.running)return;const O=jn();O.visibilityState==="hidden"&&(g=!0,C(!0)),O.visibilityState==="visible"&&M()},D=O=>{O.pointerType==="mouse"&&(g=!0,w=!0,!(e.animating||e.autoplay.paused)&&C(!0))},A=O=>{O.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&M())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",D),e.el.addEventListener("pointerleave",A))},F=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",D),e.el.removeEventListener("pointerleave",A))},R=()=>{jn().addEventListener("visibilitychange",$)},L=()=>{jn().removeEventListener("visibilitychange",$)};n("init",()=>{e.params.autoplay.enabled&&(j(),R(),T())}),n("destroy",()=>{F(),L(),e.autoplay.running&&k()}),n("_freeModeStaticRelease",()=>{(p||g)&&M()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?k():C(!0,!0)}),n("beforeTransitionStart",(O,P,I)=>{e.destroyed||!e.autoplay.running||(I||!e.params.autoplay.disableOnInteraction?C(!0,!0):k())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){k();return}y=!0,p=!1,g=!1,m=setTimeout(()=>{g=!0,p=!0,C(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!y)){if(clearTimeout(m),clearTimeout(o),e.params.autoplay.disableOnInteraction){p=!1,y=!1;return}p&&e.params.cssMode&&M(),p=!1,y=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=S(),l=S())}),Object.assign(e.autoplay,{start:T,stop:k,pause:C,resume:M})}let Ld;function sI(){const e=bt(),t=jn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function m2(){return Ld||(Ld=sI()),Ld}let Ad;function lI({userAgent:e}={}){const t=m2(),n=bt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),c=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),y=r==="Win32";let p=r==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&p&&t.touch&&m.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),p=!1),s&&!y&&(o.os="android",o.android=!0),(u||c||d)&&(o.os="ios",o.ios=!0),o}function g2(e={}){return Ad||(Ad=lI(e)),Ad}let Rd;function uI(){const e=bt(),t=g2();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function v2(){return Rd||(Rd=uI()),Rd}function cI({swiper:e,on:t,emit:n}){const r=bt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(d=>{o=r.requestAnimationFrame(()=>{const{width:c,height:y}=e;let p=c,m=y;d.forEach(({contentBoxSize:g,contentRect:w,target:h})=>{h&&h!==e.el||(p=w?w.width:(g[0]||g).inlineSize,m=w?w.height:(g[0]||g).blockSize)}),(p!==c||m!==y)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function dI({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=bt(),a=(u,d={})=>{const c=o.MutationObserver||o.WebkitMutationObserver,y=new c(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const m=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(m):o.setTimeout(m,0)});y.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(y)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=p2(e.hostEl);for(let d=0;d<u.length;d+=1)a(u[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var fI={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function pI(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(gr(r,"padding-left")||0,10)-parseInt(gr(r,"padding-right")||0,10),n=n-parseInt(gr(r,"padding-top")||0,10)-parseInt(gr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function hI(){const e=this;function t($,D){return parseFloat($.getPropertyValue(e.getDirectionLabel(D))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=kn(i,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:u.length;let c=[];const y=[],p=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(e));let g=n.slidesOffsetAfter;typeof g=="function"&&(g=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,h=e.slidesGrid.length,v=e.size-m-g;let b=n.spaceBetween,S=-m,E=0,T=0;if(typeof v>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*v:typeof b=="string"&&(b=parseFloat(b)),e.virtualSize=-b-m-g,u.forEach($=>{o?$.style.marginLeft="":$.style.marginRight="",$.style.marginBottom="",$.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(vi(r,"--swiper-centered-offset-before",""),vi(r,"--swiper-centered-offset-after","")),n.cssMode&&(vi(r,"--swiper-slides-offset-before",`${m}px`),vi(r,"--swiper-slides-offset-after",`${g}px`));const k=n.grid&&n.grid.rows>1&&e.grid;k?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let C;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter($=>typeof n.breakpoints[$].slidesPerView<"u").length>0;for(let $=0;$<d;$+=1){C=0;const D=u[$];if(!(D&&(k&&e.grid.updateSlide($,D,u),gr(D,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(C=n.virtual.slidesPerViewAutoSlideSize),C&&D&&(n.roundLengths&&(C=Math.floor(C)),D.style[e.getDirectionLabel("width")]=`${C}px`);else if(n.slidesPerView==="auto"){M&&(D.style[e.getDirectionLabel("width")]="");const A=getComputedStyle(D),j=D.style.transform,F=D.style.webkitTransform;if(j&&(D.style.transform="none"),F&&(D.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?Ap(D,"width",!0):Ap(D,"height",!0);else{const R=t(A,"width"),L=t(A,"padding-left"),O=t(A,"padding-right"),P=t(A,"margin-left"),I=t(A,"margin-right"),z=A.getPropertyValue("box-sizing");if(z&&z==="border-box")C=R+P+I;else{const{clientWidth:B,offsetWidth:N}=D;C=R+L+O+P+I+(N-B)}}j&&(D.style.transform=j),F&&(D.style.webkitTransform=F),n.roundLengths&&(C=Math.floor(C))}else C=(v-(n.slidesPerView-1)*b)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),D&&(D.style[e.getDirectionLabel("width")]=`${C}px`);D&&(D.swiperSlideSize=C),p.push(C),n.centeredSlides?(S=S+C/2+E/2+b,E===0&&$!==0&&(S=S-v/2-b),$===0&&(S=S-v/2-b),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),T%n.slidesPerGroup===0&&c.push(S),y.push(S)):(n.roundLengths&&(S=Math.floor(S)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&c.push(S),y.push(S),S=S+C+b),e.virtualSize+=C+b,E=C,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+g,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+b}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),k&&e.grid.updateWrapperSize(C,c),!n.centeredSlides){const $=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,D=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||$);let A=c.length;if(D){let F;if(n.slidesPerView==="auto"){F=1;let R=0;for(let L=p.length-1;L>=0&&(R+=p[L]+(L<p.length-1?b:0),R<=v);L-=1)F=p.length-L}else F=Math.floor(n.slidesPerView);A=Math.max(d-F,0)}const j=[];for(let F=0;F<c.length;F+=1){let R=c[F];n.roundLengths&&(R=Math.floor(R)),D?F<=A&&j.push(R):c[F]<=e.virtualSize-v&&j.push(R)}c=j,Math.floor(e.virtualSize-v)-Math.floor(c[c.length-1])>1&&(D||c.push(e.virtualSize-v))}if(l&&n.loop){const $=p[0]+b;if(n.slidesPerGroup>1){const D=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),A=$*n.slidesPerGroup;for(let j=0;j<D;j+=1)c.push(c[c.length-1]+A)}for(let D=0;D<e.virtual.slidesBefore+e.virtual.slidesAfter;D+=1)n.slidesPerGroup===1&&c.push(c[c.length-1]+$),y.push(y[y.length-1]+$),e.virtualSize+=$}if(c.length===0&&(c=[0]),b!==0){const $=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((D,A)=>!n.cssMode||n.loop?!0:A!==u.length-1).forEach(D=>{D.style[$]=`${b}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let $=0;p.forEach(A=>{$+=A+(b||0)}),$-=b;const D=$>v?$-v:0;c=c.map(A=>A<=0?-m:A>D?D+g:A)}if(n.centerInsufficientSlides){let $=0;if(p.forEach(D=>{$+=D+(b||0)}),$-=b,$<v){const D=(v-$)/2;c.forEach((A,j)=>{c[j]=A-D}),y.forEach((A,j)=>{y[j]=A+D})}}if(Object.assign(e,{slides:u,snapGrid:c,slidesGrid:y,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){vi(r,"--swiper-centered-offset-before",`${-c[0]}px`),vi(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const $=-e.snapGrid[0],D=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(A=>A+$),e.slidesGrid=e.slidesGrid.map(A=>A+D)}if(d!==s&&e.emit("slidesLengthChange"),c.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const $=`${n.containerModifierClass}backface-hidden`,D=e.el.classList.contains($);d<=n.maxBackfaceHiddenSlides?D||e.el.classList.add($):D&&e.el.classList.remove($)}}function mI(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function gI(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Fv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function vI(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const c=(a+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),y=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),p=-(a-d),m=p+t.slidesSizesGrid[s],g=p>=0&&p<=t.size-t.slidesSizesGrid[s],w=p>=0&&p<t.size-1||m>1&&m<=t.size||p<=0&&m>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),Fv(u,w,n.slideVisibleClass),Fv(u,g,n.slideFullyVisibleClass),u.progress=i?-c:c,u.originalProgress=i?-y:y}}function yI(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,c=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=c||i>=1,d&&(i=0),c&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),c=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[d],p=t.slidesGrid[c],m=t.slidesGrid[t.slidesGrid.length-1],g=Math.abs(e);g>=y?l=(g-y)/m:l=(g+m-p)/m,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Fd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function xI(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=c=>kn(r,`.${n.slideClass}${c}, swiper-slide${c}`)[0];let s,u,d;if(o)if(n.loop){let c=i-e.virtual.slidesBefore;c<0&&(c=e.virtual.slides.length+c),c>=e.virtual.slides.length&&(c-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${c}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(c=>c.column===i),d=t.find(c=>c.column===i+1),u=t.find(c=>c.column===i-1)):s=t[i];s&&(a||(d=rI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=nI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(c=>{Fd(c,c===s,n.slideActiveClass),Fd(c,c===d,n.slideNextClass),Fd(c,c===u,n.slidePrevClass)}),e.emitSlidesClasses()}const ul=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},zd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Rp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&zd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&zd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&zd(e,a)};function bI(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function wI(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const d=p=>{let m=p-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof s>"u"&&(s=bI(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,s);u=p+Math.floor((s-p)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(s);return}const c=t.grid&&i.grid&&i.grid.rows>1;let y;if(t.virtual&&i.virtual.enabled)i.loop?y=d(s):y=s;else if(c){const p=t.slides.find(g=>g.column===s);let m=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(t.slides.indexOf(p),0)),y=Math.floor(m/i.grid.rows)}else if(t.slides[s]){const p=t.slides[s].getAttribute("data-swiper-slide-index");p?y=parseInt(p,10):y=s}else y=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:y,previousIndex:o,activeIndex:s}),t.initialized&&Rp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function SI(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var _I={updateSize:pI,updateSlides:hI,updateAutoHeight:mI,updateSlidesOffset:gI,updateSlidesProgress:vI,updateProgress:yI,updateSlidesClasses:xI,updateActiveIndex:wI,updateClickedSlide:SI};function CI(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=Z$(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function EI(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let d;const c=n.maxTranslate()-n.minTranslate();c===0?d=0:d=(e-n.minTranslate())/c,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function kI(){return-this.snapGrid[0]}function PI(){return-this.snapGrid[this.snapGrid.length-1]}function TI(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>s?d=s:r&&e<u?d=u:d=e,o.updateProgress(d),a.cssMode){const c=o.isHorizontal();if(t===0)l[c?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return f2({swiper:o,targetPosition:-d,side:c?"left":"top"}),!0;l.scrollTo({[c?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(y){!o||o.destroyed||y.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var OI={getTranslate:CI,setTranslate:EI,minTranslate:kI,maxTranslate:PI,translateTo:TI};function jI(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function y2({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function MI(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),y2({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function $I(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),y2({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var II={setTransition:jI,transitionStart:MI,transitionEnd:$I};function DI(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:d,activeIndex:c,rtlTranslate:y,wrapperEl:p,enabled:m}=o;if(!m&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const g=Math.min(o.params.slidesPerGroupSkip,a);let w=g+Math.floor((a-g)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const h=-s[w];if(l.normalizeSlideIndex)for(let k=0;k<u.length;k+=1){const C=-Math.floor(h*100),M=Math.floor(u[k]*100),$=Math.floor(u[k+1]*100);typeof u[k+1]<"u"?C>=M&&C<$-($-M)/2?a=k:C>=M&&C<$&&(a=k+1):C>=M&&(a=k)}if(o.initialized&&a!==c&&(!o.allowSlideNext&&(y?h>o.translate&&h>o.minTranslate():h<o.translate&&h<o.minTranslate())||!o.allowSlidePrev&&h>o.translate&&h>o.maxTranslate()&&(c||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(h);let v;a>c?v="next":a<c?v="prev":v="reset";const b=o.virtual&&o.params.virtual.enabled;if(!(b&&i)&&(y&&-h===o.translate||!y&&h===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(h),v!=="reset"&&(o.transitionStart(n,v),o.transitionEnd(n,v)),!1;if(l.cssMode){const k=o.isHorizontal(),C=y?h:-h;if(t===0)b&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),b&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[k?"scrollLeft":"scrollTop"]=C})):p[k?"scrollLeft":"scrollTop"]=C,b&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return f2({swiper:o,targetPosition:C,side:k?"left":"top"}),!0;p.scrollTo({[k?"left":"top"]:C,behavior:"smooth"})}return!0}const T=v2().isSafari;return b&&!i&&T&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(h),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,v),t===0?o.transitionEnd(n,v):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(C){!o||o.destroyed||C.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,v))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function LI(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const g=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===g).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:d,slidesOffsetAfter:c}=i.params,y=u||!!d||!!c;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),y&&p%2===0&&(p=p+1));let m=s-l<p;if(y&&(m=m||l<Math.ceil(p/2)),r&&y&&i.params.slidesPerView!=="auto"&&!o&&(m=!1),m){const g=y?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:g,slideTo:!0,activeSlideIndex:g==="next"?l+1:l-s+1,slideRealIndex:g==="next"?i.realIndex:void 0})}if(o){const g=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===g).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function AI(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function RI(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const c=l?r.translate:-r.translate;function y(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const p=y(c),m=o.map(v=>y(v)),g=i.freeMode&&i.freeMode.enabled;let w=o[m.indexOf(p)-1];if(typeof w>"u"&&(i.cssMode||g)){let v;o.forEach((b,S)=>{p>=b&&(v=S)}),typeof v<"u"&&(w=g?o[v]:o[v>0?v-1:v])}let h=0;if(typeof w<"u"&&(h=a.indexOf(w),h<0&&(h=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(h=h-r.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),i.rewind&&r.isBeginning){const v=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(h,e,t,n)}),!0;return r.slideTo(h,e,t,n)}function FI(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function zI(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],d=i.snapGrid[l+1];s-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],d=i.snapGrid[l];s-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function NI(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(kn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),d2(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var BI={slideTo:DI,slideToLoop:LI,slideNext:AI,slidePrev:RI,slideReset:FI,slideToClosest:zI,slideToClickedSlide:NI};function VI(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{kn(i,`.${r.slideClass}, swiper-slide`).forEach((m,g)=>{m.setAttribute("data-swiper-slide-index",g)})},a=()=>{const p=kn(i,`.${r.slideBlankClass}`);p.forEach(m=>{m.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,d=l&&n.slides.length%r.grid.rows!==0,c=p=>{for(let m=0;m<p;m+=1){const g=n.isElement?iu("swiper-slide",[r.slideBlankClass]):iu("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(g)}};if(u){if(r.loopAddBlankSlides){const p=s-n.slides.length%s;c(p),n.recalcSlides(),n.updateSlides()}else ru("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(d){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;c(p),n.recalcSlides(),n.updateSlides()}else ru("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const y=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:y?void 0:"next",initial:t})}function UI({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:c,slidesEl:y,params:p}=s,{centeredSlides:m,slidesOffsetBefore:g,slidesOffsetAfter:w,initialSlide:h}=p,v=m||!!g||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!v&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):v&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=c,s.emit("loopFix");return}let b=p.slidesPerView;b==="auto"?b=s.slidesPerViewDynamic():(b=Math.ceil(parseFloat(p.slidesPerView,10)),v&&b%2===0&&(b=b+1));const S=p.slidesPerGroupAuto?b:p.slidesPerGroup;let E=v?Math.max(S,Math.ceil(b/2)):S;E%S!==0&&(E+=S-E%S),E+=p.loopAdditionalSlides,s.loopedSlides=E;const T=s.grid&&p.grid&&p.grid.rows>1;u.length<b+E||s.params.effect==="cards"&&u.length<b+E*2?ru("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&p.grid.fill==="row"&&ru("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],C=[],M=T?Math.ceil(u.length/p.grid.rows):u.length,$=o&&M-h<b&&!v;let D=$?h:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(P=>P.classList.contains(p.slideActiveClass))):D=i;const A=n==="next"||!n,j=n==="prev"||!n;let F=0,R=0;const O=(T?u[i].column:i)+(v&&typeof r>"u"?-b/2+.5:0);if(O<E){F=Math.max(E-O,S);for(let P=0;P<E-O;P+=1){const I=P-Math.floor(P/M)*M;if(T){const z=M-I-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===z&&k.push(B)}else k.push(M-I-1)}}else if(O+b>M-E){R=Math.max(O-(M-E*2),S),$&&(R=Math.max(R,b-M+h+1));for(let P=0;P<R;P+=1){const I=P-Math.floor(P/M)*M;T?u.forEach((z,B)=>{z.column===I&&C.push(B)}):C.push(I)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<b+E*2&&(C.includes(i)&&C.splice(C.indexOf(i),1),k.includes(i)&&k.splice(k.indexOf(i),1)),j&&k.forEach(P=>{u[P].swiperLoopMoveDOM=!0,y.prepend(u[P]),u[P].swiperLoopMoveDOM=!1}),A&&C.forEach(P=>{u[P].swiperLoopMoveDOM=!0,y.append(u[P]),u[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():T&&(k.length>0&&j||C.length>0&&A)&&s.slides.forEach((P,I)=>{s.grid.updateSlide(I,P,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(k.length>0&&j){if(typeof e>"u"){const P=s.slidesGrid[D],z=s.slidesGrid[D+F]-P;l?s.setTranslate(s.translate-z):(s.slideTo(D+Math.ceil(F),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else if(r){const P=T?k.length/p.grid.rows:k.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(C.length>0&&A)if(typeof e>"u"){const P=s.slidesGrid[D],z=s.slidesGrid[D-R]-P;l?s.setTranslate(s.translate-z):(s.slideTo(D-R,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else{const P=T?C.length/p.grid.rows:C.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=c,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(I=>{!I.destroyed&&I.params.loop&&I.loopFix({...P,slideTo:I.params.slidesPerView===p.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}s.emit("loopFix")}function WI(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var HI={loopCreate:VI,loopFix:UI,loopDestroy:WI};function GI(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function qI(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var YI={setGrabCursor:GI,unsetGrabCursor:qI};function XI(e,t=this){function n(r){if(!r||r===jn()||r===bt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function zv(e,t,n){const r=bt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function KI(e){const t=this,n=jn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){zv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!tI(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(s=d[0]);const c=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,y=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(y?XI(c,s):s.closest(c))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const p=a.currentX,m=a.currentY;if(!zv(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=m,i.touchStartTime=nu(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let g=!0;s.matches(i.focusableElements)&&(g=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=g&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function QI(e){const t=jn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(T=>T.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const d=u.pageX,c=u.pageY;if(s.preventedByNestedSwiper){o.startX=d,o.startY=c;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c}),r.touchStartTime=nu());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(c<o.startY&&n.translate<=n.maxTranslate()||c>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(d>o.startX&&-n.translate<=n.maxTranslate()||d<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=c;const y=o.currentX-o.startX,p=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(y**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:y*y+p*p>=25&&(T=Math.atan2(Math.abs(p),Math.abs(y))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let m=n.isHorizontal()?y:p,g=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),g=Math.abs(g)*(a?1:-1)),o.diff=m,m*=i.touchRatio,a&&(m=-m,g=-g);const w=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const h=n.params.loop&&!i.cssMode,v=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(h&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let b;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&h&&v&&Math.abs(m)>=1){Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),m>0?(h&&v&&!b&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**E))):m<0&&(h&&v&&!b&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**E))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function ZI(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(E=>E.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const c=nu(),y=c-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),y<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=nu(),d2(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(a.followFinger?p=s?t.translate:-t.translate:p=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-t.maxTranslate()&&!t.params.loop;let g=0,w=t.slidesSizesGrid[0];for(let E=0;E<u.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){const T=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[E+T]<"u"?(m||p>=u[E]&&p<u[E+T])&&(g=E,w=u[E+T]-u[E]):(m||p>=u[E])&&(g=E,w=u[u.length-1]-u[u.length-2])}let h=null,v=null;a.rewind&&(t.isBeginning?v=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));const b=(p-u[g])/w,S=g<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(y>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?h:g+S):t.slideTo(g)),t.swipeDirection==="prev"&&(b>1-a.longSwipesRatio?t.slideTo(g+S):v!==null&&b<0&&Math.abs(b)>a.longSwipesRatio?t.slideTo(v):t.slideTo(g))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(g+S):t.slideTo(g):(t.swipeDirection==="next"&&t.slideTo(h!==null?h:g+S),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:g))}}function Nv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function JI(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function eD(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function tD(e){const t=this;ul(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function nD(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const x2=(e,t)=>{const n=jn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Nv,!0):e[u]("observerUpdate",Nv,!0),i[s]("load",e.onLoad,{capture:!0}))};function rD(){const e=this,{params:t}=e;e.onTouchStart=KI.bind(e),e.onTouchMove=QI.bind(e),e.onTouchEnd=ZI.bind(e),e.onDocumentTouchStart=nD.bind(e),t.cssMode&&(e.onScroll=eD.bind(e)),e.onClick=JI.bind(e),e.onLoad=tD.bind(e),x2(e,"on")}function iD(){x2(this,"off")}var oD={attachEvents:rD,detachEvents:iD};const Bv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function aD(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=jn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const c=(u in o?o[u]:void 0)||e.originalParams,y=Bv(e,r),p=Bv(e,c),m=e.params.grabCursor,g=c.grabCursor,w=r.enabled;y&&!p?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&p&&(i.classList.add(`${r.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),m&&!g?e.unsetGrabCursor():!m&&g&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(T=>{if(typeof c[T]>"u")return;const k=r[T]&&r[T].enabled,C=c[T]&&c[T].enabled;k&&!C&&e[T].disable(),!k&&C&&e[T].enable()});const h=c.direction&&c.direction!==r.direction,v=r.loop&&(c.slidesPerView!==r.slidesPerView||h),b=r.loop;h&&n&&e.changeDirection(),Dt(e.params,c);const S=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",c),n&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&E?(e.loopCreate(t),e.updateSlides()):b&&!E&&e.loopDestroy()),e.emit("breakpoint",c)}function sD(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=bt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var lD={setBreakpoint:aD,getBreakpoint:sD};function uD(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function cD(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=uD(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function dD(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var fD={addClasses:cD,removeClasses:dD};function pD(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var hD={checkOverflow:pD},Fp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function mD(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Dt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Dt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Dt(t,r)}}const Nd={eventsEmitter:fI,update:_I,translate:OI,transition:II,slide:BI,loop:HI,grabCursor:YI,events:oD,breakpoints:lD,checkOverflow:hD,classes:fD},Bd={};let Lm=class An{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Dt({},r),n&&!r.el&&(r.el=n);const i=jn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const d=Dt({},r,{el:u});s.push(new An(d))}),s}const o=this;o.__swiper__=!0,o.support=m2(),o.device=g2({userAgent:r.userAgent}),o.browser=v2(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:mD(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Dt({},Fp,a);return o.params=Dt({},l,Bd,r),o.originalParams=Dt({},o.params),o.passedParams=Dt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=kn(n,`.${r.slideClass}, swiper-slide`),o=ou(i[0]);return ou(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=kn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let c=o[u]?Math.ceil(o[u].swiperSlideSize):0,y;for(let p=u+1;p<o.length;p+=1)o[p]&&!y&&(c+=Math.ceil(o[p].swiperSlideSize),d+=1,c>s&&(y=!0));for(let p=u-1;p>=0;p-=1)o[p]&&!y&&(c+=o[p].swiperSlideSize,d+=1,c>s&&(y=!0))}else if(t==="current")for(let c=u+1;c<o.length;c+=1)(n?a[c]+l[c]-a[u]<s:a[c]-a[u]<s)&&(d+=1);else for(let c=u-1;c>=0;c-=1)a[u]-a[c]<s&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&ul(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):kn(r,i())[0])();return!a&&n.params.createElements&&(a=iu("div",n.params.wrapperClass),r.append(a),kn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||gr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||gr(r,"direction")==="rtl"),wrongRTL:gr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?ul(n,o):o.addEventListener("load",a=>{ul(n,a.target)})}),Rp(n),n.initialized=!0,Rp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),K$(r)),r.destroyed=!0),null}static extendDefaults(t){Dt(Bd,t)}static get extendedDefaults(){return Bd}static get defaults(){return Fp}static installModule(t){An.prototype.__modules__||(An.prototype.__modules__=[]);const n=An.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>An.installModule(n)),An):(An.installModule(t),An)}};Object.keys(Nd).forEach(e=>{Object.keys(Nd[e]).forEach(t=>{Lm.prototype[t]=Nd[e][t]})});Lm.use([cI,dI]);const b2=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ii(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Wi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:ii(t[r])&&ii(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Wi(e[r],t[r]):e[r]=t[r]})}function w2(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function S2(e={}){return e.pagination&&typeof e.pagination.el>"u"}function _2(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function C2(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function gD(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function vD({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(C=>C!=="children"&&C!=="direction"&&C!=="wrapperClass"),{params:u,pagination:d,navigation:c,scrollbar:y,virtual:p,thumbs:m}=e;let g,w,h,v,b,S,E,T;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(g=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&d&&!d.el&&(h=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&y&&!y.el&&(v=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&c&&!c.prevEl&&!c.nextEl&&(b=!0);const k=C=>{e[C]&&(e[C].destroy(),C==="navigation"?(e.isElement&&(e[C].prevEl.remove(),e[C].nextEl.remove()),u[C].prevEl=void 0,u[C].nextEl=void 0,e[C].prevEl=void 0,e[C].nextEl=void 0):(e.isElement&&e[C].el.remove(),u[C].el=void 0,e[C].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?S=!0:!u.loop&&n.loop?E=!0:T=!0),s.forEach(C=>{if(ii(u[C])&&ii(n[C]))Object.assign(u[C],n[C]),(C==="navigation"||C==="pagination"||C==="scrollbar")&&"enabled"in n[C]&&!n[C].enabled&&k(C);else{const M=n[C];(M===!0||M===!1)&&(C==="navigation"||C==="pagination"||C==="scrollbar")?M===!1&&k(C):u[C]=n[C]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&p&&u.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&u.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&u.loop&&(T=!0),g&&m.init()&&m.update(!0),w&&(e.controller.control=u.controller.control),h&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),d.init(),d.render(),d.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),y.init(),y.updateSize(),y.setTranslate()),b&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),za(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),za(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),c.init(),c.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||T)&&e.loopDestroy(),(E||T)&&e.loopCreate(),e.update()}function yD(e={},t=!0){const n={on:{}},r={},i={};Wi(n,Fp),n._emitClasses=!0,n.init=!1;const o={},a=b2.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?ii(e[s])?(n[s]={},i[s]={},Wi(n[s],e[s]),Wi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function xD({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){w2(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),S2(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),_2(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function bD(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return b2.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(ii(e[s])&&ii(t[s])){const u=Object.keys(e[s]),d=Object.keys(t[s]);u.length!==d.length?a(s):(u.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}),d.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const wD=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function au(){return au=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},au.apply(this,arguments)}function E2(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function k2(e){const t=[];return K.Children.toArray(e).forEach(n=>{E2(n)?t.push(n):n.props&&n.props.children&&k2(n.props.children).forEach(r=>t.push(r))}),t}function SD(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return K.Children.toArray(e).forEach(r=>{if(E2(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=k2(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function _D(e,t,n){if(!n)return null;const r=d=>{let c=d;return d<0?c=t.length+d:c>=t.length&&(c=c-t.length),c},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let d=l;d<s;d+=1)d>=o&&d<=a&&u.push(t[r(d)]);return u.map((d,c)=>K.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${c}`}))}function ca(e,t){return typeof window>"u"?x.useEffect(e,t):x.useLayoutEffect(e,t)}const Vv=x.createContext(null),CD=x.createContext(null),P2=x.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=x.useState("swiper"),[d,c]=x.useState(null),[y,p]=x.useState(!1),m=x.useRef(!1),g=x.useRef(null),w=x.useRef(null),h=x.useRef(null),v=x.useRef(null),b=x.useRef(null),S=x.useRef(null),E=x.useRef(null),T=x.useRef(null),{params:k,passedParams:C,rest:M,events:$}=yD(o),{slides:D,slots:A}=SD(r),j=()=>{p(!y)};Object.assign(k.on,{_containerClasses(P,I){u(I)}});const F=()=>{Object.assign(k.on,$),l=!0;const P={...k};if(delete P.wrapperClass,w.current=new Lm(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=D;const I={cache:!1,slides:D,renderExternal:c,renderExternalUpdate:!1};Wi(w.current.params.virtual,I),Wi(w.current.originalParams.virtual,I)}};g.current||F(),w.current&&w.current.on("_beforeBreakpoint",j);const R=()=>{l||!$||!w.current||Object.keys($).forEach(P=>{w.current.on(P,$[P])})},L=()=>{!$||!w.current||Object.keys($).forEach(P=>{w.current.off(P,$[P])})};x.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",j)}),x.useEffect(()=>{!m.current&&w.current&&(w.current.emitSlidesClasses(),m.current=!0)}),ca(()=>{if(a&&(a.current=g.current),!!g.current)return w.current.destroyed&&F(),xD({el:g.current,nextEl:b.current,prevEl:S.current,paginationEl:E.current,scrollbarEl:T.current,swiper:w.current},k),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),ca(()=>{R();const P=bD(C,h.current,D,v.current,I=>I.key);return h.current=C,v.current=D,P.length&&w.current&&!w.current.destroyed&&vD({swiper:w.current,slides:D,passedParams:C,changedParams:P,nextEl:b.current,prevEl:S.current,scrollbarEl:T.current,paginationEl:E.current}),()=>{L()}}),ca(()=>{wD(w.current)},[d]);function O(){return k.virtual?_D(w.current,D,d):D.map((P,I)=>K.cloneElement(P,{swiper:w.current,swiperSlideIndex:I}))}return K.createElement(t,au({ref:g,className:C2(`${s}${e?` ${e}`:""}`)},M),K.createElement(CD.Provider,{value:w.current},A["container-start"],K.createElement(n,{className:gD(k.wrapperClass)},A["wrapper-start"],O(),A["wrapper-end"]),w2(k)&&K.createElement(K.Fragment,null,K.createElement("div",{ref:S,className:"swiper-button-prev"}),K.createElement("div",{ref:b,className:"swiper-button-next"})),_2(k)&&K.createElement("div",{ref:T,className:"swiper-scrollbar"}),S2(k)&&K.createElement("div",{ref:E,className:"swiper-pagination"}),A["container-end"]))});P2.displayName="Swiper";const T2=x.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const d=x.useRef(null),[c,y]=x.useState("swiper-slide"),[p,m]=x.useState(!1);function g(b,S,E){S===d.current&&y(E)}ca(()=>{if(typeof l<"u"&&(d.current.swiperSlideIndex=l),u&&(u.current=d.current),!(!d.current||!r)){if(r.destroyed){c!=="swiper-slide"&&y("swiper-slide");return}return r.on("_slideClass",g),()=>{r&&r.off("_slideClass",g)}}}),ca(()=>{r&&d.current&&!r.destroyed&&y(r.getSlideClasses(d.current))},[r]);const w={isActive:c.indexOf("swiper-slide-active")>=0,isVisible:c.indexOf("swiper-slide-visible")>=0,isPrev:c.indexOf("swiper-slide-prev")>=0,isNext:c.indexOf("swiper-slide-next")>=0},h=()=>typeof t=="function"?t(w):t,v=()=>{m(!0)};return K.createElement(e,au({ref:d,className:C2(`${c}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:v},s),i&&K.createElement(Vv.Provider,{value:w},K.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},h(),o&&!p&&K.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}}))),!i&&K.createElement(Vv.Provider,{value:w},h(),o&&!p&&K.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}})))});T2.displayName="SwiperSlide";const ED=_.section`
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
`,kD=_.div`
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
`,PD=_.div`
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
`,TD=_(Pe)`
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
`,OD=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],jD=()=>f.jsx(ED,{children:f.jsx(P2,{modules:[iI,aI,oI],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:OD.map(e=>f.jsx(T2,{children:f.jsx(kD,{bg:e.img,children:f.jsxs(PD,{children:[f.jsx("h1",{children:e.title}),f.jsx("p",{children:e.desc}),f.jsx(TD,{to:e.url,children:e.btn})]})})},e.id))})}),MD=_.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Vd=_.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,Ud=_.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Wd=_.div`
  font-size: 14px;
  color: #888;
`,O2=()=>f.jsxs(MD,{children:[f.jsxs(Vd,{children:[f.jsx(Ud,{children:"3000+"}),f.jsx(Wd,{children:"Перевірених деталей"})]}),f.jsxs(Vd,{children:[f.jsx(Ud,{children:"6 років"}),f.jsx(Wd,{children:"Досвіду на ринку"})]}),f.jsxs(Vd,{children:[f.jsx(Ud,{children:"100%"}),f.jsx(Wd,{children:"Контроль якості"})]})]}),$D=Re.div`
  background:var(--background-color);
`,ID=Re.div`
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
`;const DD=()=>f.jsx($D,{children:f.jsxs(ID,{children:[f.jsx(jD,{}),f.jsx(qw,{}),f.jsx(q$,{}),f.jsx(O2,{})]})}),LD=_.div`
 
`,AD=_.section`
  background-color:  var(--second-background);
`,RD=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,FD=_.button`
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
`,zD=_.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,ND=_.button`
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
`;_.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`;const BD=_.div`
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
`,VD=_.div`
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
`;_.button`
  font-size: 20px;
  border: none;
  background: none;
  margin-bottom: 20px;
`;const UD=_.div`
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
`;_.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;const WD=_.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,HD=_.button`
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
`,j2=_.button`
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
`,GD=_.div`
  position: relative;
  display: inline-block;

`,qD=_.div`
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
`,yi=_.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,YD=_.aside`

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
`,XD=_.h3`
    display: flex;
    gap: 110px;
margin-bottom: 15px;
font-size: 20px;
font-family: var(--main-font);
  
`;_.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  font-size: 14px;
`;const KD=_.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,QD=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,ZD=_.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,JD=_.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,e6=_.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,t6=_.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,zp=_.input.attrs({type:"checkbox"})`
  display: none;
`,n6=_.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${zp}:checked + & {
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

  ${zp}:checked + &::after {
    opacity: 1;
  }
`;var Np={},Am={},Rm={},wo={};Object.defineProperty(wo,"__esModule",{value:!0});wo.Direction=void 0;var Uv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Uv||(wo.Direction=Uv={}));(function(e){var t=te&&te.__spreadArray||function(A,j,F){if(F||arguments.length===2)for(var R=0,L=j.length,O;R<L;R++)(O||!(R in j))&&(O||(O=Array.prototype.slice.call(j,0,R)),O[R]=j[R]);return A.concat(O||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=x,r=wo,i=function(A){var j=A.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(A){return A.touches&&A.touches.length||A.changedTouches&&A.changedTouches.length}e.isTouchEvent=o;function a(A,j,F){var R=(j-A)/F,L=8,O=Number(R.toFixed(L));return parseInt(O.toString(),10)===O}e.isStepDivisible=a;function l(A,j,F,R,L,O,P){var I=1e11;if(A=Math.round(A*I)/I,!O){var z=P[j-1],B=P[j+1];if(z&&z>A)return z;if(B&&B<A)return B}if(A>R)return R;if(A<F)return F;var N=Math.floor(A*I-F*I)%Math.floor(L*I),U=Math.floor(A*I-Math.abs(N)),G=N===0?A:U/I,W=Math.abs(N/I)<L/2?G:G+L,X=(0,e.getStepDecimals)(L);return parseFloat(W.toFixed(X))}e.normalizeValue=l;function s(A,j,F){return(A-j)/(F-j)}e.relativeValue=s;function u(A){return A===r.Direction.Up||A===r.Direction.Down}e.isVertical=u;function d(A,j,F){if(j>=F)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(F,")"));if(A<j)throw new RangeError("value (".concat(A,") is smaller than min (").concat(j,")"));if(A>F)throw new RangeError("value (".concat(A,") is bigger than max (").concat(F,")"))}e.checkBoundaries=d;function c(A,j,F){return A<j?j:A>F?F:A}e.checkValuesAgainstBoundaries=c;function y(A){if(!(A.length<2)&&!A.slice(1).every(function(j,F){return A[F]<=j}))throw new RangeError("values={[".concat(A,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=y;function p(A){var j=window.getComputedStyle(A);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=p;function m(A){var j=window.getComputedStyle(A);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=m;function g(A,j,F){var R=F?-1:1;A.forEach(function(L,O){return h(L,R*j[O].x,j[O].y)})}e.translateThumbs=g;function w(A,j,F,R){for(var L=0,O=$(A[0],j,F,R),P=1;P<A.length;P++){var I=$(A[P],j,F,R);I<O&&(O=I,L=P)}return L}e.getClosestThumbIndex=w;function h(A,j,F){A.style.transform="translate(".concat(j,"px, ").concat(F,"px)")}e.translate=h;var v=function(A){var j=[],F=null,R=function(){for(var L=[],O=0;O<arguments.length;O++)L[O]=arguments[O];j=L,!F&&(F=requestAnimationFrame(function(){F=null,A.apply(void 0,j)}))};return R};e.schd=v;function b(A,j,F){var R=A.slice(0);return R[j]=F,R}e.replaceAt=b;function S(A){var j=A.values,F=A.colors,R=A.min,L=A.max,O=A.direction,P=O===void 0?r.Direction.Right:O,I=A.rtl,z=I===void 0?!1:I;z&&P===r.Direction.Right?P=r.Direction.Left:z&&r.Direction.Left&&(P=r.Direction.Right);var B=j.slice(0).sort(function(U,G){return U-G}).map(function(U){return(U-R)/(L-R)*100}),N=B.reduce(function(U,G,W){return"".concat(U,", ").concat(F[W]," ").concat(G,"%, ").concat(F[W+1]," ").concat(G,"%")},"");return"linear-gradient(".concat(P,", ").concat(F[0]," 0%").concat(N,", ").concat(F[F.length-1]," 100%)")}e.getTrackBackground=S;function E(){}e.voidFn=E;function T(A){throw new Error("Didn't expect to get here")}e.assertUnreachable=T;var k=function(A,j,F,R,L){L===void 0&&(L=function(P){return P});var O=Math.ceil(t([A],Array.from(A.children),!0).reduce(function(P,I){var z=Math.ceil(I.getBoundingClientRect().width);if(I.innerText&&I.innerText.includes(F)&&I.childElementCount===0){var B=I.cloneNode(!0);B.innerHTML=L(j.toFixed(R)),B.style.visibility="hidden",document.body.appendChild(B),z=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return z>P?z:P},A.getBoundingClientRect().width));return O},C=function(A,j,F,R,L,O,P){P===void 0&&(P=function(B){return B});var I=[],z=function(B){var N=k(F[B],R[B],L,O,P),U=j[B].x;j.forEach(function(G,W){var X=G.x,ee=k(F[W],R[W],L,O,P);B!==W&&(U>=X&&U<=X+ee||U+N>=X&&U+N<=X+ee)&&(I.includes(W)||(I.push(B),I.push(W),I=t(t([],I,!0),[B,W],!1),z(W)))})};return z(A),Array.from(new Set(I.sort()))},M=function(A,j,F,R,L,O){R===void 0&&(R=.1),L===void 0&&(L=" - "),O===void 0&&(O=function(W){return W});var P=(0,e.getStepDecimals)(R),I=(0,n.useState)({}),z=I[0],B=I[1],N=(0,n.useState)(O(j[F].toFixed(P))),U=N[0],G=N[1];return(0,n.useEffect)(function(){if(A){var W=A.getThumbs();if(W.length<1)return;var X={},ee=A.getOffsets(),pe=C(F,ee,W,j,L,P,O),we=O(j[F].toFixed(P));if(pe.length){var ie=pe.reduce(function(wt,_o,rs,Co){return wt.length?t(t([],wt,!0),[ee[Co[rs]].x],!1):[ee[Co[rs]].x]},[]);if(Math.min.apply(Math,ie)===ee[F].x){var Ie=[];pe.forEach(function(wt){Ie.push(j[wt].toFixed(P))}),we=Array.from(new Set(Ie.sort(function(wt,_o){return parseFloat(wt)-parseFloat(_o)}))).map(O).join(L);var We=Math.min.apply(Math,ie),He=Math.max.apply(Math,ie),di=W[pe[ie.indexOf(He)]].getBoundingClientRect().width;X.left="".concat(Math.abs(We-(He+di))/2,"px"),X.transform="translate(-50%, 0)"}else X.visibility="hidden"}G(we),B(X)}},[A,j]),[U,z]};e.useThumbOverlap=M;function $(A,j,F,R){var L=A.getBoundingClientRect(),O=L.left,P=L.top,I=L.width,z=L.height;return u(R)?Math.abs(F-(P+z/2)):Math.abs(j-(O+I/2))}var D=function(){var A,j=((A=navigator.userAgentData)===null||A===void 0?void 0:A.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=D})(Rm);var r6=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),i6=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),o6=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a6=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&i6(t,e,n);return o6(t,e),t},Wv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Am,"__esModule",{value:!0});var js=a6(x),oe=Rm,Fe=wo,s6=["ArrowRight","ArrowUp","k","PageUp"],l6=["ArrowLeft","ArrowDown","j","PageDown"],u6=function(e){r6(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=js.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var d=u.getBoundingClientRect(),c=(0,oe.getPaddingAndBorder)(u);return r.getThumbs().map(function(y,p){var m={x:0,y:0},g=y.getBoundingClientRect(),w=(0,oe.getMargin)(y);switch(o){case Fe.Direction.Right:return m.x=(w.left+c.left)*-1,m.y=((g.height-d.height)/2+c.top)*-1,m.x+=d.width*(0,oe.relativeValue)(a[p],l,s)-g.width/2,m;case Fe.Direction.Left:return m.x=(w.right+c.right)*-1,m.y=((g.height-d.height)/2+c.top)*-1,m.x+=d.width-d.width*(0,oe.relativeValue)(a[p],l,s)-g.width/2,m;case Fe.Direction.Up:return m.x=((g.width-d.width)/2+w.left+c.left)*-1,m.y=-c.left,m.y+=d.height-d.height*(0,oe.relativeValue)(a[p],l,s)-g.height/2,m;case Fe.Direction.Down:return m.x=((g.width-d.width)/2+w.left+c.left)*-1,m.y=-c.left,m.y+=d.height*(0,oe.relativeValue)(a[p],l,s)-g.height/2,m;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,d=o.direction,c=r.state.isChanged,y=r.getTargetIndex(i.nativeEvent),p=u||d===Fe.Direction.Left||d===Fe.Direction.Down?-1:1;y!==-1&&(s6.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]+p*(i.key==="PageUp"?s*10:s),y)))):l6.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]-p*(i.key==="PageDown"?s*10:s),y)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){c&&r.fireOnFinalChange()}):c&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,d=u.direction,c=u.min,y=u.max,p=u.onChange,m=u.values,g=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var h=r.trackRef.current;if(!h)return null;var v=h.getBoundingClientRect(),b=(0,oe.isVertical)(d)?v.height:v.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],E=o-s[1],T=0;switch(d){case Fe.Direction.Right:case Fe.Direction.Left:T=S/b*(y-c);break;case Fe.Direction.Down:case Fe.Direction.Up:T=E/b*(y-c);break;default:(0,oe.assertUnreachable)(d)}if(w&&(T*=-1),Math.abs(T)>=g/2){for(var k=0;k<r.thumbRefs.length;k++){if(m[k]===y&&Math.sign(T)===1||m[k]===c&&Math.sign(T)===-1)return;var C=m[k]+T;C>y?T=y-m[k]:C<c&&(T=c-m[k])}for(var M=m.slice(0),k=0;k<r.thumbRefs.length;k++)M=(0,oe.replaceAt)(M,k,r.normalizeValue(m[k]+T,k));r.setState({draggedTrackPos:[i,o]}),p(M)}}else{var $=0;switch(d){case Fe.Direction.Right:$=(i-v.left)/b*(y-c)+c;break;case Fe.Direction.Left:$=(b-(i-v.left))/b*(y-c)+c;break;case Fe.Direction.Down:$=(o-v.top)/b*(y-c)+c;break;case Fe.Direction.Up:$=(b-(o-v.top))/b*(y-c)+c;break;default:(0,oe.assertUnreachable)(d)}w&&($=y+c-$),Math.abs(m[l]-$)>=g/2&&p((0,oe.replaceAt)(m,l,r.normalizeValue($,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,d=a.allowOverlap,c=a.values;return(0,oe.normalizeValue)(i,o,l,s,u,d,c)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=js.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],d=0;d<r.numOfMarks+1;d++){var c=9999,y=9999;if(r.markRefs[d].current){var p=r.markRefs[d].current.getBoundingClientRect();c=p.height,y=p.width}r.props.direction===Fe.Direction.Left||r.props.direction===Fe.Direction.Right?u.push([Math.round(o/r.numOfMarks*d+l-y/2),-Math.round((c-a)/2)]):u.push([Math.round(a/r.numOfMarks*d+s-c/2),-Math.round((y-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return js.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(d){(0,oe.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,d=r.values,c=r.min,y=r.max,p=r.allowOverlap,m=r.disabled,g=this.state,w=g.draggedThumbIndex,h=g.thumbZIndexes,v=g.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!m?"pointer":"inherit"},onMouseDown:m?oe.voidFn:this.onMouseDownTrack,onTouchStart:m?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:m,children:Wv(Wv([],v.map(function(b,S,E){return u({props:{style:n.props.direction===Fe.Direction.Left||n.props.direction===Fe.Direction.Right?{position:"absolute",left:"".concat(b[0],"px"),marginTop:"".concat(b[1],"px")}:{position:"absolute",top:"".concat(b[0],"px"),marginLeft:"".concat(b[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),d.map(function(b,S){var E=n.state.draggedThumbIndex===S;return l({index:S,value:b,isDragged:E,props:{style:{position:"absolute",zIndex:h[S],cursor:m?"inherit":E?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:m?void 0:0,"aria-valuemax":p?y:d[S+1]||y,"aria-valuemin":p?c:d[S-1]||c,"aria-valuenow":b,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:m?oe.voidFn:n.onKeyDown,onKeyUp:m?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Fe.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(js.Component);Am.default=u6;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Am);e.Range=n.default;var r=Rm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=wo;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Np);const c6=_.div`
  padding: 20px 0;
`,d6=_.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Hv=_.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid  #85683d;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color:  #583d2d;
  }
`;_.span`
  display: flex;
  align-items: center;
  color: #999;
`;const f6=_.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,p6=_.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,M2=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,u]=x.useState([o,a]);x.useEffect(()=>{e&&e.length===2&&(u(e),t&&t(e))},[e,t]);const d=p=>{u(p),t&&t(p)},c=(p,m)=>{const g=m===""?"":Number(m),w=[...s];w[p]=g,d(w)},y=p=>{const m=[...s];p===0?((m[0]===""||m[0]<o)&&(m[0]=o),m[0]>m[1]-50&&(m[0]=m[1]-50)):((m[1]===""||m[1]>a)&&(m[1]=a),m[1]<m[0]+50&&(m[1]=m[0]+50)),d(m)};return f.jsx(f.Fragment,{children:l&&f.jsxs(c6,{children:[f.jsxs(d6,{children:[f.jsx(Hv,{type:"number",value:s[0],min:o,max:s[1],onChange:p=>c(0,p.target.value),onBlur:()=>y(0)}),f.jsx(Hv,{type:"number",value:s[1],min:s[0],max:a,onChange:p=>c(1,p.target.value),onBlur:()=>y(1)})]}),f.jsx(Np.Range,{values:s,step:50,min:o,max:a,onChange:d,renderTrack:({props:p,children:m})=>f.jsx(f6,{...p,background:Np.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:m}),renderThumb:({props:p})=>f.jsx(p6,{...p})})]})})},h6=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=x.useState([]),[l,s]=x.useState({});x.useEffect(()=>{t&&(async()=>{try{const m=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const g=await m.json();console.log("dataaaa",g.data);const w=g.data||[],h={};w.forEach(b=>{var S;(S=b.attributes)==null||S.forEach(E=>{h[E.label]||(h[E.label]=new Set),h[E.label].add(E.value)})});const v=Object.entries(h).map(([b,S])=>({type:"checkbox",label:b,name:b.toLowerCase(),options:Array.from(S)}));console.log("fillltr",v),a(v)}catch(m){console.error(m)}})()},[t]);const u=p=>{s(m=>({...m,[p]:!m[p]}))},d=(p,m)=>{r(g=>{const w=g[p]||[];return w.includes(m)?{...g,[p]:w.filter(h=>h!==m)}:{...g,[p]:[...w,m]}})},c=Object.values(n).some(p=>Array.isArray(p)&&p.length>0),y=()=>{c&&r({})};return console.log(c),f.jsxs(YD,{children:[f.jsxs(XD,{children:["Фільтри ",f.jsx(mw,{size:20})]}),(o||[]).map(p=>{var g;const m=!!l[p.name];return f.jsxs(KD,{children:[f.jsxs(QD,{onClick:()=>u(p.name),children:[f.jsx(ZD,{children:p.label}),f.jsx(JD,{isOpen:m})]}),f.jsxs(e6,{isOpen:m,children:[p.type==="checkbox"&&((g=p.options)==null?void 0:g.map(w=>{var h;return f.jsxs(t6,{children:[f.jsx(zp,{checked:((h=n[p.name])==null?void 0:h.includes(w))||!1,onChange:()=>d(p.name,w)}),f.jsx(n6,{}),w]},w)})),p.type==="range"&&f.jsx(M2,{onChange:i,childValues:e})]})]},p.name)}),f.jsx(j2,{onClick:y,disabled:!c,children:"Скинути обрані фільтри"})]})},m6=_.aside`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  font-size: 20px;
font-family: var(--main-font);
`;_.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;const g6=_.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,v6=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,y6=_.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,x6=_.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,b6=_.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,w6=_.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Bp=_.input.attrs({type:"checkbox"})`
  display: none;
`,S6=_.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Bp}:checked + & {
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

  ${Bp}:checked + &::after {
    opacity: 1;
  }
`,_6=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=x.useState({}),[l,s]=x.useState([]);x.useEffect(()=>{t&&(async()=>{try{const y=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const p=await y.json();console.log("dataaaa",p.data);const m=p.data||[],g={};m.forEach(h=>{var v;(v=h.attributes)==null||v.forEach(b=>{g[b.label]||(g[b.label]=new Set),g[b.label].add(b.value)})});const w=Object.entries(g).map(([h,v])=>({type:"checkbox",label:h,name:h.toLowerCase(),options:Array.from(v)}));console.log("fillltr",w),s(w)}catch(y){console.error(y)}})()},[t]);const u=c=>{a(y=>({...y,[c]:!y[c]}))},d=(c,y)=>{r(p=>{const m=p[c]||[];return m.includes(y)?{...p,[c]:m.filter(g=>g!==y)}:{...p,[c]:[...m,y]}})};return f.jsx(m6,{children:(l||[]).map(c=>{var p;const y=!!o[c.name];return f.jsxs(g6,{children:[f.jsxs(v6,{onClick:()=>u(c.name),children:[f.jsx(y6,{children:c.label}),f.jsx(x6,{isOpen:y})]}),f.jsxs(b6,{isOpen:y,children:[c.type==="checkbox"&&((p=c.options)==null?void 0:p.map(m=>{var g;return f.jsxs(w6,{children:[f.jsx(Bp,{checked:((g=n[c.name])==null?void 0:g.includes(m))||!1,onChange:()=>d(c.name,m)}),f.jsx(S6,{}),m]},m)})),c.type==="range"&&f.jsx(M2,{onChange:i,childValues:e})]})]},c.name)})})},C6=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:u})=>{const[d,c]=x.useState([]),[y,p]=x.useState(!0),[m,g]=x.useState(1),w=24;let h=d;const v=x.useRef(null);x.useEffect(()=>{const j=F=>{v.current&&!v.current.contains(F.target)&&o(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[o]),x.useEffect(()=>{(async()=>{try{p(!0);const R=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();c(R.data);const L=R.data.map(O=>O.price);if(L.length>0){let O=Math.min(...L),P=Math.max(...L);e([O,P])}}catch(F){console.error("Error fetching products:",F)}finally{p(!1)}})()},[t,e]),x.useEffect(()=>{g(1)},[t,n,r]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[m]);const b=Zt(),S=vn(),E=Ue(j=>j.favorites.items),T=Ue(j=>j.cart.items),k=(j,F)=>{F.stopPropagation();const R=E.some(L=>L.id===j.id);S(ui(j)),R?Y.warning(`${j.name} видалено з обраного`):Y.info(`${j.name} додано в обране`)};if(Object.keys(n).forEach(j=>{const F=n[j];Array.isArray(F)&&F.length>0&&(h=h.filter(R=>{var O;const L=(O=R.attributes)==null?void 0:O.find(P=>P.label.toLowerCase()===j.toLowerCase());return L&&F.includes(L.value)}))}),r&&r.length===2){const[j,F]=r;console.log(j,F)}const C=x.useMemo(()=>{const j=[...h],F=R=>R.new_price&&R.new_price<R.price?R.new_price:R.price;switch(i){case"name":return j.sort((R,L)=>s==="asc"?R.name.localeCompare(L.name):L.name.localeCompare(R.name));case"price":return j.sort((R,L)=>{const O=F(R),P=F(L);return s==="asc"?O-P:P-O});case"date":return j.sort((R,L)=>s==="asc"?new Date(R.createdAt)-new Date(L.createdAt):new Date(L.createdAt)-new Date(R.createdAt));default:return j}},[i,h,s]),M=m*w,$=M-w,D=C.slice($,M),A=Math.ceil(h.length/w);return y?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ja,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):(console.log(D),console.log("filteredProducts.length:",h.length),console.log("currentProducts.length:",D.length),f.jsxs(m3,{children:[f.jsxs(g3,{children:[f.jsx(v3,{children:t}),f.jsxs(E3,{ref:v,children:[f.jsxs(k3,{onClick:()=>o(j=>!j),children:["Сортування",f.jsx(Nu,{strokeWidth:.9,size:22})]}),a&&f.jsxs(P3,{children:[f.jsx(gi,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),f.jsx(gi,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),f.jsx(gi,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(gi,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(gi,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(gi,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(Dn,{autoClose:1500}),h.length===0?f.jsx(y3,{children:f.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):f.jsx(x3,{children:D.map(j=>{var U,G;const F=E.some(W=>W.id===j.id),R=T.find(W=>W.id===j.id),O=(R?R.quantity:0)>=(j.stock||0),P=(j==null?void 0:j.available)??!0,I=j.new_price&&j.new_price<j.price,z=I?j.new_price:j.price,B=I?Math.round((j.price-j.new_price)/j.price*100):0,N=(W,X)=>{if(X.stopPropagation(),O){Y.error("Товар уже у кошику");return}S(vo({...W,quantity:1})),Y.success(`${W.name} додано в кошик!`)};return f.jsxs(b3,{onClick:()=>b(`/product/${j.id}`),style:{cursor:"pointer"},children:[!P&&f.jsx(ym,{children:"Заброньовано"}),f.jsx(w3,{src:((G=(U=j.images)==null?void 0:U[0])==null?void 0:G.url)||"/placeholder.jpg",alt:j.name,onError:W=>{W.currentTarget.onerror=null,W.currentTarget.src=oo}}),f.jsx(_3,{children:j.name}),f.jsxs(S3,{children:[f.jsx(Bw,{children:f.jsxs(Vw,{children:[f.jsxs(Uw,{$discount:I,children:[z.toLocaleString()," грн"]}),I&&f.jsxs(Ww,{children:[j.price.toLocaleString()," грн"]}),I&&f.jsxs(Hw,{children:["-",B,"%"]})]})}),f.jsxs(Nw,{children:[P&&f.jsx(eu,{onClick:W=>N(j,W),children:f.jsx(go,{size:24,color:R?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(eu,{onClick:W=>k(j,W),children:f.jsx(Ya,{size:24,fill:F?"#ff4d4f":"none",color:F?"#ff4d4f":"#000000",strokeWidth:F?1:2})})]})]})]},j.id)})}),h.length>w&&f.jsxs(C3,{children:[f.jsx(Td,{onClick:()=>g(j=>Math.max(j-1,1)),disabled:m===1,children:"Назад"}),Array.from({length:A},(j,F)=>f.jsx(Td,{onClick:()=>g(F+1),active:m===F+1,children:F+1},F)),f.jsx(Td,{onClick:()=>g(j=>Math.min(j+1,A)),disabled:m===A,children:"Вперед"})]})]}))},E6=()=>{const[e,t]=x.useState({});console.log(e);const{category:n}=jy(),[r,i]=x.useState(!1),[o,a]=x.useState(!1),[l,s]=x.useState("date"),[u,d]=x.useState("desc"),[c,y]=x.useState([]),[p,m]=x.useState([0,0]);console.log(c),console.log(n);const g=Object.values(e).some(h=>Array.isArray(h)&&h.length>0),w=()=>{g&&t({})};return f.jsxs(AD,{children:[f.jsxs(LD,{children:[f.jsxs(RD,{children:[f.jsxs(FD,{onClick:()=>i(!0),children:["Фільтр",f.jsx(zD,{children:f.jsx("use",{href:`${pn}#icon-filter`})})]}),f.jsxs(GD,{children:[f.jsxs(ND,{onClick:()=>a(h=>!h),children:["Сортування",f.jsx(Nu,{strokeWidth:.9,size:22})]}),o&&f.jsxs(qD,{children:[f.jsx(yi,{onClick:()=>{s("name"),d("asc"),a(!1)},children:"А-Я"}),f.jsx(yi,{onClick:()=>{s("name"),d("desc"),a(!1)},children:"Я-А"}),f.jsx(yi,{onClick:()=>{s("price"),d("asc"),a(!1)},children:"Ціна ↑"}),f.jsx(yi,{onClick:()=>{s("price"),d("desc"),a(!1)},children:"Ціна ↓"}),f.jsx(yi,{onClick:()=>{s("date"),d("desc"),a(!1)},children:"Спочатку новіші"}),f.jsx(yi,{onClick:()=>{s("date"),d("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(h6,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:c,priceRange:p,setPriceRange:m}),f.jsx(C6,{priceRange:p,values:c,setValues:y,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:u,setSortOrder:d}),r&&f.jsx(BD,{onClick:()=>i(!1),open:r,children:f.jsxs(VD,{onClick:h=>h.stopPropagation(),open:r,children:[f.jsxs(UD,{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx(mw,{size:20}),f.jsx("h2",{children:"Фільтри"})]}),f.jsx(vw,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),f.jsx(_6,{childValues:c,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:p,setPriceRange:m}),f.jsxs(WD,{children:[f.jsx(j2,{onClick:w,disabled:!g,children:"Скинути обрані фільтри"}),f.jsx(HD,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},Gv=_.div`
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
`,k6=_.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,P6=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,T6=_.div``;_.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const O6=_.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,j6=_.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,M6=_.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,$6=_.div``,I6=_.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,D6=_.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,L6=_.div`
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

`,A6=_.span`
  color: #27ae60;
  font-size: 17px;
`,R6=_.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,F6=_.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,qv=_.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,z6=_.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,N6=_.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,B6=_.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,V6=_.div`
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
`,U6=_.button`
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
`;_.div`
  margin-top: 30px;
`;_.p`
  font-weight: bold;
  margin-bottom: 10px;
`;_.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;_.div`
  padding: 8px 15px;
  border: 1px solid ${e=>e.active?"#27ae60":"#ddd"};
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  background: ${e=>e.active?"#f0fff4":"white"};
`;const Yv=_.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,W6=_.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,Xv=_.div`
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
`;_.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`;const H6=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,Kv=_.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,Qv=_.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,No=_.button`
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
`,Zv=_.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,Jv=_.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,G6=_.button`
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
`,q6=_.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,$2=_.span`

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
`,Y6=_.div`
  position: relative;
  display: inline-block;

  &:hover ${$2} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,I2="carousel",D2="controller",X6="navigation",K6="no-scroll",Fm="portal",Q6="root",L2="toolbar",e1="zoom",Hd="loading",Gd="error",qd="complete",Z6="placeholder",J6=e=>`active-slide-${e}`,eL="fullsize",zm="flex_center",tL="no_scroll",A2="no_scroll_padding",Nm="slide",R2="slide_wrapper",nL="slide_wrapper_interactive",Br="prev",Vr="next",t1="swipe",so="close",F2="onPointerDown",z2="onPointerMove",N2="onPointerUp",B2="onPointerLeave",V2="onPointerCancel",Bm="onKeyDown",rL="onKeyUp",Vm="onWheel",iL="Escape",oL="ArrowLeft",aL="ArrowRight",sL="button",Vp="icon",U2="contain",n1="cover",W2="Unknown action type",H2="yarl__";function Mn(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${H2}${e}`}function _t(e){return`--${H2}${e}`}function ns(e,t){return`${e}${t?`_${t}`:""}`}function Um(e){return t=>ns(e,t)}function lo(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function lL(e,t,n){return lo(e,"{index} of {total}").replace(/\{index}/g,`${Ym(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function Wm(...e){return()=>{e.forEach(t=>{t()})}}function rr(e,t,n){return()=>{const r=x.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Hm(){return typeof window<"u"}function Gm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function So(e){return e.type===void 0||e.type==="image"}function qm(e,t){return e.imageFit===n1||e.imageFit!==U2&&t===n1}function Ec(e){return typeof e=="string"?Number.parseInt(e,10):e}function su(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=Ec(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function uL(e,t){const n=su(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function cL(){return(Hm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Ym(e,t){return t>0?(e%t+t)%t:0}function G2(e){return e.length>0}function q2(e,t){return e[Ym(t,e.length)]}function Up(e,t){return G2(e)?q2(e,t):void 0}function dL(e){return So(e)?e.src:void 0}function fL(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=x.isValidElement(n)?x.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function pL(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const hL=Number(x.version.split(".")[0])>=19;function mL(e){return{inert:hL?e:e?"":void 0}}function gL(e){e.scrollTop}const Wp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[so]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:U2,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Ir(e,t){return{name:e,component:t}}function Ge(e,t){return{module:e,children:t}}function Y2(e,t,n){return e.module.name===t?n(e):e.children?[Ge(e.module,e.children.flatMap(r=>{var i;return(i=Y2(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function xi(e,t,n){return e.flatMap(r=>{var i;return(i=Y2(r,t,n))!==null&&i!==void 0?i:[]})}function vL(e,t=[],n=[]){let r=e;const i=p=>{const m=[...r];for(;m.length>0;){const g=m.pop();if((g==null?void 0:g.module.name)===p)return!0;g!=null&&g.children&&m.push(...g.children)}return!1},o=(p,m)=>{if(p===""){r=[Ge(m,r)];return}r=xi(r,p,g=>[Ge(m,[g])])},a=(p,m)=>{r=xi(r,p,g=>[Ge(g.module,[Ge(m,g.children)])])},l=(p,m,g)=>{r=xi(r,p,w=>{var h;return[Ge(w.module,[...g?[Ge(m)]:[],...(h=w.children)!==null&&h!==void 0?h:[],...g?[]:[Ge(m)]])]})},s=(p,m,g)=>{r=xi(r,p,w=>[...g?[Ge(m)]:[],w,...g?[]:[Ge(m)]])},u=p=>{a(D2,p)},d=(p,m)=>{r=xi(r,p,g=>[Ge(m,g.children)])},c=p=>{r=xi(r,p,m=>m.children)},y=p=>{n.push(p)};return t.forEach(p=>{p({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:d,remove:c,augment:y})}),{config:r,augmentation:p=>n.reduce((m,g)=>g(m),p)}}const X2=x.createContext(null),K2=rr("useA11yContext","A11yContext",X2);function yL({children:e}){const[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=d=>c=>{var y;c.currentTarget.contains(c.relatedTarget)||n(d),(y=d?l:s)===null||y===void 0||y(c)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return x.createElement(X2.Provider,{value:o},e)}const Q2=x.createContext(null),kc=rr("useDocument","DocumentContext",Q2);function xL({nodeRef:e,children:t}){const n=x.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return x.createElement(Q2.Provider,{value:n},t)}const Z2=x.createContext(null),Pc=rr("useEvents","EventsContext",Z2);function bL({children:e}){const[t]=x.useState({});x.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=x.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return x.createElement(Z2.Provider,{value:n},e)}const J2=x.createContext(null),Jt=rr("useLightboxProps","LightboxPropsContext",J2);function wL({children:e,...t}){return x.createElement(J2.Provider,{value:t},e)}const e_=x.createContext(null),Dr=rr("useLightboxState","LightboxStateContext",e_),t_=x.createContext(null),SL=rr("useLightboxDispatch","LightboxDispatchContext",t_);function _L(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Ym(i,n.length),a=Up(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Up(t.slides,t.index)}:e;default:throw new Error(W2)}}function CL({slides:e,index:t,children:n}){const[r,i]=x.useReducer(_L,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Up(e,t)}),[o,a]=x.useState(e),[l,s]=x.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=x.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return x.createElement(t_.Provider,{value:i},x.createElement(e_.Provider,{value:u},n))}const n_=x.createContext(null),Tc=rr("useTimeouts","TimeoutsContext",n_);function EL({children:e}){const[t]=x.useState([]);x.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=x.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return x.createElement(n_.Provider,{value:n},e)}const Xm=x.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:d}=Jt(),c=lo(d,t);return x.createElement("button",{ref:s,type:"button",title:c,"aria-label":c,className:Mn(ae(sL),n),onClick:o,style:{...a,...u.button},...l},i?i():x.createElement(r,{className:ae(Vp),style:u.icon}))});function kL(e,t){const n=r=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ci(e,t){return kL(e,x.createElement("g",{fill:"currentColor"},x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const PL=ci("Close",x.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),TL=ci("Previous",x.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),OL=ci("Next",x.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),jL=ci("Loading",x.createElement(x.Fragment,null,Array.from({length:8}).map((e,t,n)=>x.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),ML=ci("Error",x.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),$n=Hm()?x.useLayoutEffect:x.useEffect;function Km(){const[e,t]=x.useState(!1);return x.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function $L(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(Ec);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function r1(e,t){const n=x.useRef(void 0),r=x.useRef(void 0),i=Km();return $n(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:d,onfinish:c}=t(n.current,e.current.getBoundingClientRect(),$L(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:d})}catch(y){console.error(y)}r.current&&(r.current.onfinish=()=>{r.current=void 0,c==null||c()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function r_(){const e=x.useRef(null),t=x.useRef(void 0),[n,r]=x.useState();return{setContainerRef:x.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function cl(){const e=x.useRef(void 0),{setTimeout:t,clearTimeout:n}=Tc();return x.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function he(e){const t=x.useRef(e);return $n(()=>{t.current=e}),x.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function i1(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Hp(e,t){return x.useMemo(()=>e==null&&t==null?null:n=>{i1(e,n),i1(t,n)},[e,t])}function IL(e,t=!1){const n=x.useRef(!1);$n(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=x.useCallback(()=>{n.current=!0},[]),i=x.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Qm(){const[e,t]=x.useState(!1);return $n(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function DL(){const[e]=x.useState({}),t=x.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=x.useMemo(()=>({onPointerDown:i=>t(F2,i),onPointerMove:i=>t(z2,i),onPointerUp:i=>t(N2,i),onPointerLeave:i=>t(B2,i),onPointerCancel:i=>t(V2,i),onKeyDown:i=>t(Bm,i),onKeyUp:i=>t(rL,i),onWheel:i=>t(Vm,i)}),[t]),r=x.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function o1(e,t){const n=x.useRef(0),r=cl(),i=he((...o)=>{n.current=Date.now(),e(o)});return x.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Yd=Um("slide"),Xd=Um("slide_image");function lu({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var d,c,y,p,m,g,w,h;const[v,b]=x.useState(Hd),{publish:S}=Pc(),{setTimeout:E}=Tc(),T=x.useRef(null);x.useEffect(()=>{t===0&&S(J6(v))},[t,v,S]);const k=he(N=>{("decode"in N?N.decode():Promise.resolve()).catch(()=>{}).then(()=>{N.parentNode&&(b(qd),E(()=>{l==null||l(N)},0))})}),C=x.useCallback(N=>{T.current=N,N!=null&&N.complete&&k(N)},[k]),M=x.useCallback(N=>{k(N.currentTarget)},[k]),$=he(()=>{b(Gd),s==null||s()}),D=qm(e,i),A=(N,U)=>Number.isFinite(N)?N:U,j=A(Math.max(...((c=(d=e.srcSet)===null||d===void 0?void 0:d.map(N=>N.width))!==null&&c!==void 0?c:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((y=T.current)===null||y===void 0?void 0:y.naturalWidth)||0),F=A(Math.max(...((m=(p=e.srcSet)===null||p===void 0?void 0:p.map(N=>N.height))!==null&&m!==void 0?m:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((g=T.current)===null||g===void 0?void 0:g.naturalHeight)||0),R=j&&F?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${F}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},L=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((N,U)=>N.width-U.width).map(N=>`${N.src} ${N.width}w`).join(", "),O=()=>r&&!D&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=L&&r&&Hm()?`${Math.round(Math.min(O(),r.width))}px`:void 0,{style:I,className:z,...B}=(typeof o=="function"?o(e):o)||{};return x.createElement(x.Fragment,null,x.createElement("img",{ref:C,onLoad:M,onError:$,onClick:a,draggable:!1,className:Mn(ae(Xd()),D&&ae(Xd("cover")),v!==qd&&ae(Xd("loading")),z),style:{...R,...u,...I},...B,alt:(h=e.alt)!==null&&h!==void 0?h:"",sizes:P,srcSet:L,src:e.src}),v!==qd&&x.createElement("div",{className:ae(Yd(Z6))},v===Hd&&(n!=null&&n.iconLoading?n.iconLoading():x.createElement(jL,{className:Mn(ae(Vp),ae(Yd(Hd)))})),v===Gd&&(n!=null&&n.iconError?n.iconError():x.createElement(ML,{className:Mn(ae(Vp),ae(Yd(Gd)))}))))}const LL=x.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=x.useRef(null),{trackFocusWithin:s}=K2();return x.createElement(xL,{nodeRef:l},x.createElement("div",{ref:Hp(a,l),className:Mn(ae("root"),t),...s(r,i),...o},n))});var st;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(st||(st={}));function i_(e,t,n,r,i){x.useEffect(()=>i?()=>{}:Wm(e(F2,t),e(z2,n),e(N2,r),e(B2,r),e(V2,r)),[e,t,n,r,i])}var rn;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(rn||(rn={}));const Kd=30;function AL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,d,c,y,p,m,g,w){const h=x.useRef(0),v=x.useRef([]),b=x.useRef(void 0),S=x.useRef(0),E=x.useRef(rn.NONE),T=x.useCallback(j=>{b.current===j.pointerId&&(b.current=void 0,E.current=rn.NONE);const F=v.current;F.splice(0,F.length,...F.filter(R=>R.pointerId!==j.pointerId))},[]),k=x.useCallback(j=>{T(j),j.persist(),v.current.push(j)},[T]),C=x.useCallback(j=>v.current.find(({pointerId:F})=>j.pointerId===F),[]),M=he(j=>{k(j)}),$=(j,F)=>c&&j>F||d&&j<-F,D=he(j=>{const F=C(j);if(F)if(b.current===j.pointerId){const R=Date.now()-S.current,L=h.current;E.current===rn.SWIPE?Math.abs(L)>.3*i||Math.abs(L)>5&&R<o?s(L,R):u(L):E.current===rn.PULL&&($(L,2*Kd)?m(L,R):g(L)),h.current=0,E.current=rn.NONE}else{const{target:R}=j;t&&R instanceof HTMLElement&&R===F.target&&(R.classList.contains(ae(Nm))||R.classList.contains(ae(R2)))&&w()}T(j)}),A=he(j=>{const F=C(j);if(F){const R=b.current===j.pointerId;if(j.buttons===0){R&&h.current!==0?D(j):T(F);return}const L=j.clientX-F.clientX,O=j.clientY-F.clientY;if(b.current===void 0){const P=I=>{k(j),b.current=j.pointerId,S.current=Date.now(),E.current=I};Math.abs(L)>Math.abs(O)&&Math.abs(L)>Kd&&r(L)?e||(P(rn.SWIPE),a()):Math.abs(O)>Math.abs(L)&&$(O,Kd)&&(P(rn.PULL),y())}else R&&(E.current===rn.SWIPE?(h.current=L,l(L)):E.current===rn.PULL&&(h.current=O,p(O)))}});i_(n,M,A,D)}function RL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=x.useRef(null),r=he(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return x.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function FL(e,t,n,r,i,o,a,l,s){const u=x.useRef(0),d=x.useRef(0),c=x.useRef(void 0),y=x.useRef(void 0),p=x.useRef(0),m=x.useRef(void 0),g=x.useRef(0),{setTimeout:w,clearTimeout:h}=Tc(),v=x.useCallback(()=>{c.current&&(h(c.current),c.current=void 0)},[h]),b=x.useCallback(()=>{y.current&&(h(y.current),y.current=void 0)},[h]),S=he(()=>{e!==st.SWIPE&&(u.current=0,g.current=0,v(),b())});x.useEffect(S,[e,S]);const E=he(k=>{y.current=void 0,u.current===k&&s(u.current)}),T=he(k=>{if(k.ctrlKey||Math.abs(k.deltaY)>Math.abs(k.deltaX))return;const C=M=>{p.current=M,h(m.current),m.current=M>0?w(()=>{p.current=0,m.current=void 0},300):void 0};if(e===st.NONE){if(Math.abs(k.deltaX)<=1.2*Math.abs(p.current)){C(k.deltaX);return}if(!n(-k.deltaX))return;if(d.current+=k.deltaX,v(),Math.abs(d.current)>30)d.current=0,C(0),g.current=Date.now(),o();else{const M=d.current;c.current=w(()=>{c.current=void 0,M===d.current&&(d.current=0)},i)}}else if(e===st.SWIPE){let M=u.current-k.deltaX;if(M=Math.min(Math.abs(M),r)*Math.sign(M),u.current=M,a(M),b(),Math.abs(M)>.2*r){C(k.deltaX),l(M,Date.now()-g.current);return}y.current=w(()=>E(M),2*i)}else C(k.deltaX)});x.useEffect(()=>t(Vm,T),[t,T])}const a1=Um("container"),o_=x.createContext(null),ir=rr("useController","ControllerContext",o_);function zL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:d,preventDefaultWheelX:c,preventDefaultWheelY:y}=o,[p,m]=x.useState(),g=Dr(),w=SL(),[h,v]=x.useState(st.NONE),b=x.useRef(0),S=x.useRef(0),E=x.useRef(1),{registerSensors:T,subscribeSensors:k}=DL(),{subscribe:C,publish:M}=Pc(),$=cl(),D=cl(),A=cl(),{containerRef:j,setContainerRef:F,containerRect:R}=r_(),L=Hp(RL({preventDefaultWheelX:c,preventDefaultWheelY:y}),F),O=x.useRef(null),P=Hp(O,void 0),{getOwnerDocument:I}=kc(),z=Qm(),B=q=>(z?-1:1)*(typeof q=="number"?q:1),N=he(()=>{var q;return(q=j.current)===null||q===void 0?void 0:q.focus()}),U=he(()=>t),G=he(()=>g),W=x.useCallback(q=>M(Br,q),[M]),X=x.useCallback(q=>M(Vr,q),[M]),ee=x.useCallback(()=>M(so),[M]),pe=q=>!(r.finite&&(B(q)>0&&g.currentIndex===0||B(q)<0&&g.currentIndex===g.slides.length-1)),we=q=>{var Se;b.current=q,(Se=j.current)===null||Se===void 0||Se.style.setProperty(_t("swipe_offset"),`${Math.round(q)}px`)},ie=q=>{var Se,dt;S.current=q,E.current=(()=>{const Eo=(()=>d&&q>0?q:u&&q<0?-q:0)();return Math.min(Math.max(Gm(1-Eo/60*(1-.5),2),.5),1)})(),(Se=j.current)===null||Se===void 0||Se.style.setProperty(_t("pull_offset"),`${Math.round(q)}px`),(dt=j.current)===null||dt===void 0||dt.style.setProperty(_t("pull_opacity"),`${E.current}`)},{prepareAnimation:Ie}=r1(O,(q,Se,dt)=>{if(O.current&&R)return{keyframes:[{transform:`translate(0, ${q.rect.y-Se.y+dt.y}px)`,opacity:q.opacity},{transform:"translate(0, 0)",opacity:1}],duration:q.duration,easing:i.easing.fade}}),We=(q,Se)=>{if(u||d){ie(q);let dt=0;O.current&&(dt=i.fade*(Se?2:1),Ie({rect:O.current.getBoundingClientRect(),opacity:E.current,duration:dt})),A(()=>{ie(0),v(st.NONE)},dt),v(st.ANIMATION),Se||ee()}},{prepareAnimation:He,isAnimationPlaying:di}=r1(O,(q,Se,dt)=>{var yn;if(O.current&&R&&(!((yn=g.animation)===null||yn===void 0)&&yn.duration)){const Wt=su(r.spacing),Eo=(Wt.percent?Wt.percent*R.width/100:Wt.pixel)||0;return{keyframes:[{transform:`translate(${B(g.globalIndex-q.index)*(R.width+Eo)+q.rect.x-Se.x+dt.x}px, 0)`},{transform:"translate(0, 0)"}],duration:g.animation.duration,easing:g.animation.easing}}}),wt=he(q=>{var Se,dt;const yn=q.offset||0,Wt=yn?i.swipe:(Se=i.navigation)!==null&&Se!==void 0?Se:i.swipe,Eo=!yn&&!di()?i.easing.navigation:i.easing.swipe;let{direction:is}=q;const os=(dt=q.count)!==null&&dt!==void 0?dt:1;let zc=st.ANIMATION,xn=Wt*os;if(!is){const ko=R==null?void 0:R.width,pg=q.duration||0,Bc=ko?Wt/ko*Math.abs(yn):Wt;os!==0?(pg<Bc?xn=xn/Bc*Math.max(pg,Bc/5):ko&&(xn=Wt/ko*(ko-Math.abs(yn))),is=B(yn)>0?Br:Vr):xn=Wt/2}let Nc=0;is===Br?pe(B(1))?Nc=-os:(zc=st.NONE,xn=Wt):is===Vr&&(pe(B(-1))?Nc=os:(zc=st.NONE,xn=Wt)),xn=Math.round(xn),D(()=>{we(0),v(st.NONE)},xn),O.current&&He({rect:O.current.getBoundingClientRect(),index:g.globalIndex}),v(zc),M(t1,{type:"swipe",increment:Nc,duration:xn,easing:Eo})});x.useEffect(()=>{var q,Se;!((q=g.animation)===null||q===void 0)&&q.increment&&(!((Se=g.animation)===null||Se===void 0)&&Se.duration)&&$(()=>w({type:"swipe",increment:0}),g.animation.duration)},[g.animation,w,$]);const _o=[k,pe,(R==null?void 0:R.width)||0,i.swipe,()=>v(st.SWIPE),q=>we(q),(q,Se)=>wt({offset:q,duration:Se,count:1}),q=>wt({offset:q,count:0})],rs=[()=>{d&&v(st.PULL)},q=>ie(q),q=>We(q),q=>We(q,!0)];AL(o,..._o,u,d,...rs,ee),FL(h,..._o);const Co=he(()=>{o.focus&&I().querySelector(`.${ae(Fm)} .${ae(a1())}`)&&N()});x.useEffect(Co,[Co]);const fg=he(()=>{var q;(q=a.view)===null||q===void 0||q.call(a,{index:g.currentIndex})});x.useEffect(fg,[g.globalIndex,fg]),x.useEffect(()=>Wm(C(Br,q=>wt({direction:Br,...q})),C(Vr,q=>wt({direction:Vr,...q})),C(t1,q=>w(q))),[C,wt,w]);const uC=x.useMemo(()=>({prev:W,next:X,close:ee,focus:N,slideRect:R?uL(R,r.padding):{width:0,height:0},containerRect:R||{width:0,height:0},subscribeSensors:k,containerRef:j,setCarouselRef:P,toolbarWidth:p,setToolbarWidth:m}),[W,X,ee,N,k,R,j,P,p,m,r.padding]);return x.useImperativeHandle(o.ref,()=>({prev:W,next:X,close:ee,focus:N,getLightboxProps:U,getLightboxState:G}),[W,X,ee,N,U,G]),x.createElement("div",{ref:L,className:Mn(ae(a1()),ae(zm)),style:{...h===st.SWIPE?{[_t("swipe_offset")]:`${Math.round(b.current)}px`}:null,...h===st.PULL?{[_t("pull_offset")]:`${Math.round(S.current)}px`,[_t("pull_opacity")]:`${E.current}`}:null,...o.touchAction!=="none"?{[_t("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...T},R&&x.createElement(o_.Provider,{value:uC},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const NL=Ir(D2,zL);function Lr(e){return ns(I2,e)}function s1(e){return ns(Nm,e)}function BL({slide:e,offset:t}){const n=x.useRef(null),{currentIndex:r,slides:i}=Dr(),{slideRect:o,focus:a}=ir(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:d},styles:{slide:c},labels:y}=Jt(),{getOwnerDocument:p}=kc(),m=t!==0;x.useEffect(()=>{var w;m&&(!((w=n.current)===null||w===void 0)&&w.contains(p().activeElement))&&a()},[m,a,p]);const g=()=>{var w,h,v,b;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&So(e)&&(S=x.createElement(lu,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:m?void 0:()=>d==null?void 0:d({index:r})})),S?x.createElement(x.Fragment,null,(h=l.slideHeader)===null||h===void 0?void 0:h.call(l,{slide:e}),((v=l.slideContainer)!==null&&v!==void 0?v:({children:E})=>E)({slide:e,children:S}),(b=l.slideFooter)===null||b===void 0?void 0:b.call(l,{slide:e})):null};return x.createElement("div",{ref:n,className:Mn(ae(s1()),!m&&ae(s1("current")),ae(zm)),...mL(m),style:c,role:"group","aria-roledescription":lo(y,"Slide"),"aria-label":lL(y,i,r+t)},g())}function VL(){const e=Jt().styles.slide;return x.createElement("div",{className:ae(Nm),style:e})}function UL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Dr(),{setCarouselRef:o}=ir(),{autoPlaying:a,focusWithin:l}=K2(),s=su(e.spacing),u=su(e.padding),d=pL(e,n,1),c=[];if(G2(n))for(let y=r-d;y<=r+d;y+=1){const p=q2(n,y),m=i-r+y,g=e.finite&&(y<0||y>n.length-1);c.push(g?{key:m}:{key:[`${m}`,dL(p)].filter(Boolean).join("|"),offset:y-r,slide:p})}return x.createElement("div",{ref:o,className:Mn(ae(Lr()),c.length>0&&ae(Lr("with_slides"))),style:{[`${_t(Lr("slides_count"))}`]:c.length,[`${_t(Lr("spacing_px"))}`]:s.pixel||0,[`${_t(Lr("spacing_percent"))}`]:s.percent||0,[`${_t(Lr("padding_px"))}`]:u.pixel||0,[`${_t(Lr("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":lo(t,"Carousel"),"aria-label":lo(t,"Photo gallery")},c.map(({key:y,slide:p,offset:m})=>p?x.createElement(BL,{key:y,slide:p,offset:m}):x.createElement(VL,{key:y})))}const WL=Ir(I2,UL);function a_(){const{carousel:e}=Jt(),{slides:t,currentIndex:n}=Dr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function HL(e){var t;const n=Qm(),{publish:r}=Pc(),{animation:i}=Jt(),{prevDisabled:o,nextDisabled:a}=a_(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=o1(()=>r(Br),l),u=o1(()=>r(Vr),l),d=he(c=>{switch(c.key){case iL:r(so);break;case oL:(n?a:o)||(n?u:s)();break;case aL:(n?o:a)||(n?s:u)();break}});x.useEffect(()=>e(Bm,d),[e,d])}function l1({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return x.createElement(Xm,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...IL(ir().focus,o)})}function GL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=ir(),{prevDisabled:s,nextDisabled:u}=a_();return HL(l),x.createElement(x.Fragment,null,e?e():x.createElement(l1,{label:"Previous",action:Br,icon:TL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():x.createElement(l1,{label:"Next",action:Vr,icon:OL,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const qL=Ir(X6,GL),u1=ae(tL),YL=ae(A2);function XL(e){return"style"in e}function c1(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(Ec(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function KL({noScroll:{disabled:e},children:t}){const n=Qm(),{getOwnerDocument:r,getOwnerWindow:i}=kc();return x.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(c1(l,u,n));const d=l.getElementsByTagName("*");for(let c=0;c<d.length;c+=1){const y=d[c];XL(y)&&a.getComputedStyle(y).getPropertyValue("position")==="fixed"&&!y.classList.contains(YL)&&o.push(c1(y,u,n))}}return l.classList.add(u1),()=>{l.classList.remove(u1),o.forEach(d=>d())}},[n,e,r,i]),x.createElement(x.Fragment,null,t)}const QL=Ir(K6,KL);function d1(e){return ns(Fm,e)}function f1(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function ZL({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=x.useState(!1),[d,c]=x.useState(!1),y=x.useRef([]),p=x.useRef(null),{setTimeout:m}=Tc(),{subscribe:g}=Pc(),h=Km()?0:t.fade;x.useEffect(()=>(u(!0),()=>{u(!1),c(!1)}),[]);const v=he(()=>{y.current.forEach(T=>T()),y.current=[]}),b=he(()=>{var T;c(!1),v(),(T=i.exiting)===null||T===void 0||T.call(i),m(()=>{var k;(k=i.exited)===null||k===void 0||k.call(i),a()},h)});x.useEffect(()=>g(so,b),[g,b]);const S=he(T=>{var k,C,M;gL(T),c(!0),(k=i.entering)===null||k===void 0||k.call(i);const $=(M=(C=T.parentNode)===null||C===void 0?void 0:C.children)!==null&&M!==void 0?M:[];for(let D=0;D<$.length;D+=1){const A=$[D];["TEMPLATE","SCRIPT","STYLE"].indexOf(A.tagName)===-1&&A!==T&&(y.current.push(f1(A,"inert","")),y.current.push(f1(A,"aria-hidden","true")))}y.current.push(()=>{var D,A;(A=(D=p.current)===null||D===void 0?void 0:D.focus)===null||A===void 0||A.call(D)}),m(()=>{var D;(D=i.entered)===null||D===void 0||D.call(i)},h)}),E=x.useCallback(T=>{T?S(T):v()},[S,v]);return s?Du.createPortal(x.createElement(LL,{ref:E,className:Mn(r,ae(d1()),ae(A2),d&&ae(d1("open"))),"aria-modal":!0,role:"dialog","aria-label":lo(l,"Lightbox"),style:{...t.fade!==Wp.animation.fade?{[_t("fade_animation_duration")]:`${h}ms`}:null,...t.easing.fade!==Wp.animation.easing.fade?{[_t("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:T=>{p.current||(p.current=T.relatedTarget)}},e),o.root||document.body):null}const JL=Ir(Fm,ZL);function eA({children:e}){return x.createElement(x.Fragment,null,e)}const tA=Ir(Q6,eA);function nA(e){return ns(L2,e)}function rA({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=ir(),{setContainerRef:a,containerRect:l}=r_();$n(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():x.createElement(Xm,{key:so,label:"Close",icon:PL,renderIcon:n,onClick:i});return x.createElement("div",{ref:a,style:r.toolbar,className:ae(nA())},e==null?void 0:e.map(u=>u===so?s():u))}const iA=Ir(L2,rA);function s_(e,t){var n;return x.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>s_(r,t)))}function oA(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function aA({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...d}){const{animation:c,carousel:y,render:p,toolbar:m,controller:g,noScroll:w,on:h,slides:v,index:b,plugins:S,...E}=Wp,{config:T,augmentation:k}=vL([Ge(JL,[Ge(QL,[Ge(NL,[Ge(WL),Ge(iA),Ge(qL)])])])],l||S),C=k({animation:oA(c,t),carousel:{...y,...e},render:{...p,...n},toolbar:{...m,...r},controller:{...g,...i},noScroll:{...w,...o},on:{...h,...a},...E,...d});return C.open?x.createElement(wL,{...C},x.createElement(CL,{slides:s||v,index:Ec(u||b)},x.createElement(EL,null,x.createElement(bL,null,x.createElement(yL,null,s_(Ge(tA,T),C)))))):null}const sA={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function lA(e){return Math.min(Math.max(e,Number.EPSILON),1)}function l_(e){const{minZoom:t,...n}={...sA,...e};return{minZoom:lA(t),...n}}function uA(e,t,n,r){const i=x.useRef(void 0),o=x.useRef(void 0),{zoom:a}=Jt().animation,l=Km(),s=he(()=>{var u,d,c;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(c=(d=r.current).animate)===null||c===void 0?void 0:c.call(d,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(y){console.error(y)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return $n(s,[e,t,n,s]),x.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function cA(e,t){const{on:n}=Jt(),r=he(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});x.useEffect(r,[e,r])}function Oc(){const{zoom:e}=Jt();return l_(e)}function dA(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Dr(),{imageFit:l}=Jt().carousel,{maxZoomPixelRatio:s}=Oc();if(e&&a){const d={...a,...t};if(So(d)){const c=qm(d,l),y=Math.max(...(((n=d.srcSet)===null||n===void 0?void 0:n.map(m=>m.width))||[]).concat(d.width?[d.width]:[])),p=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(m=>m.height))||[]).concat(d.height?[d.height]:[]));y>0&&p>0&&e.width>0&&e.height>0&&(o=c?{width:Math.round(Math.min(y,e.width/e.height*p)),height:Math.round(Math.min(p,e.height/e.width*y))}:{width:y,height:p},o={width:o.width*s,height:o.height*s},i=c?{width:Math.min(e.width,o.width,y),height:Math.min(e.height,o.height,p)}:{width:Math.round(Math.min(e.width,e.height/p*y,y)),height:Math.round(Math.min(e.height,e.width/y*p,p))})}}const u=i.width?Math.max(Gm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function p1(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function h1(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function fA(e,t,n,r,i,o,a,l,s){const u=x.useRef([]),d=x.useRef(0),c=x.useRef(void 0),{globalIndex:y}=Dr(),{getOwnerWindow:p}=kc(),{containerRef:m,subscribeSensors:g}=ir(),{keyboardMoveDistance:w,zoomInMultiplier:h,wheelZoomDistanceFactor:v,scrollToZoom:b,doubleTapDelay:S,doubleClickDelay:E,doubleClickMaxStops:T,pinchZoomDistanceFactor:k,pinchZoomV4:C}=Oc(),M=x.useCallback(P=>{if(m.current){const{pageX:I,pageY:z}=P,{scrollX:B,scrollY:N}=p(),{left:U,top:G,width:W,height:X}=m.current.getBoundingClientRect();return[I-U-B-W/2,z-G-N-X/2]}return[]},[m,p]),$=he(P=>{const{key:I,metaKey:z,ctrlKey:B}=P,N=z||B,U=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const G=(W,X)=>{U(),l(W,X)};I==="ArrowDown"?G(0,w):I==="ArrowUp"?G(0,-w):I==="ArrowLeft"?G(-w,0):I==="ArrowRight"&&G(w,0)}I==="+"||N&&I==="="?(U(),i()):I==="-"||N&&I==="_"?(U(),o()):N&&I==="0"&&(U(),a(1))}),D=he(P=>{if((P.ctrlKey||b)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(h1(e,-P.deltaY,v),!0,...M(P));return}e>1&&(P.stopPropagation(),b||l(P.deltaX,P.deltaY))}),A=x.useCallback(P=>{const I=u.current;I.splice(0,I.length,...I.filter(z=>z.pointerId!==P.pointerId))},[]),j=x.useCallback(P=>{A(P),P.persist(),u.current.push(P)},[A]),F=he(P=>{var I;const z=u.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!((I=s==null?void 0:s.current)===null||I===void 0)&&I.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(z.length===0&&B-d.current<(P.pointerType==="touch"?S:E)){d.current=0;const N=e>=1?e!==n?e*Math.max(n**(1/T),h):1:e!==t?e/Math.max(t**(-1/T),h):1;a(N,!1,...M(P))}else d.current=B;if(j(P),z.length===2){const N=p1(z[0],z[1]);c.current={previousDistance:N,initialDistance:Math.max(N,1),initialZoom:e}}}),R=he(P=>{const I=u.current,z=I.find(B=>B.pointerId===P.pointerId);if(I.length===2&&c.current){P.stopPropagation(),j(P);const B=p1(I[0],I[1]),N=C?c.current.initialZoom/c.current.initialDistance*B:h1(e,B-c.current.previousDistance,k);a(N,!0,...I.map(U=>M(U)).reduce((U,G)=>G.map((W,X)=>U[X]+W/2))),c.current.previousDistance=B;return}e>1&&(P.stopPropagation(),z&&(I.length===1&&l((z.clientX-P.clientX)/e,(z.clientY-P.clientY)/e),j(P)))}),L=x.useCallback(P=>{const I=u.current;I.length===2&&I.find(z=>z.pointerId===P.pointerId)&&(c.current=void 0),A(P)},[A]),O=x.useCallback(()=>{const P=u.current;P.splice(0,P.length),d.current=0,c.current=void 0},[]);i_(g,F,R,L,r),x.useEffect(O,[y,O]),x.useEffect(()=>r?()=>{}:Wm(O,g(Bm,$),g(Vm,D)),[r,g,O,$,D])}function pA(e,t,n){const[r,i]=x.useState(1),[o,a]=x.useState(0),[l,s]=x.useState(0),u=uA(r,o,l,n),{currentSlide:d,globalIndex:c}=Dr(),{containerRect:y,slideRect:p}=ir(),{minZoom:m,zoomInMultiplier:g}=Oc(),w=d&&So(d)?d.src:void 0,h=!w||!(n!=null&&n.current);$n(()=>{i(1),a(0),s(0)},[c,w]);const v=x.useCallback((k,C,M)=>{const $=M||r,D=o-(k||0),A=l-(C||0),j=(e.width*$-p.width)/2/$,F=(e.height*$-p.height)/2/$;a(Math.min(Math.abs(D),Math.max(j,0))*Math.sign(D)),s(Math.min(Math.abs(A),Math.max(F,0))*Math.sign(A))},[r,o,l,p,e.width,e.height]),b=x.useCallback((k,C,M,$)=>{const D=Gm(k+.01<t?k-.01>m?k:m:t,5);C||u(),v(M?M*(1/r-1/D):0,$?$*(1/r-1/D):0,D),i(D)},[r,m,t,v,u]),S=he(()=>{r>1&&(r>t&&b(t,!0),v())});$n(S,[y.width,y.height,S]);const E=x.useCallback(()=>{const k=r*g;b(r<1&&k>1?1:k)},[r,g,b]),T=x.useCallback(()=>{const k=r/g;b(r>1&&k<1?1:k)},[r,g,b]);return{zoom:r,offsetX:o,offsetY:l,disabled:h,changeOffsets:v,changeZoom:b,zoomIn:E,zoomOut:T}}const u_=x.createContext(null),Zm=rr("useZoom","ZoomControllerContext",u_);function hA({children:e}){const[t,n]=x.useState(),{slideRect:r}=ir(),{ref:i,minZoom:o}=Oc(),{imageRect:a,maxZoom:l}=dA(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:d,disabled:c,changeZoom:y,changeOffsets:p,zoomIn:m,zoomOut:g}=pA(a,l,t==null?void 0:t.zoomWrapperRef);cA(s,c),fA(s,o,l,c,m,g,y,p,t==null?void 0:t.zoomWrapperRef);const w=x.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:d,disabled:c,zoomIn:m,zoomOut:g,changeZoom:y}),[s,o,l,u,d,c,m,g,y]);x.useImperativeHandle(i,()=>w,[w]);const h=x.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return x.createElement(u_.Provider,{value:h},e)}const mA=ci("ZoomIn",x.createElement(x.Fragment,null,x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),x.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),gA=ci("ZoomOut",x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),m1=x.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=x.useRef(!1),o=x.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:d,disabled:c}=Zm(),{render:y}=Jt(),p=c||(t?a>=s:a<=l);return x.useEffect(()=>{p&&i.current&&o.current&&n(),p||(i.current=!0)},[p,n]),x.createElement(Xm,{ref:r,disabled:p,label:t?"Zoom in":"Zoom out",icon:t?mA:gA,renderIcon:t?y.iconZoomIn:y.iconZoomOut,onClick:t?u:d,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function vA(){const e=x.useRef(null),t=x.useRef(null),{focus:n}=ir(),r=x.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=x.useCallback(()=>r(e),[r]),o=x.useCallback(()=>r(t),[r]);return x.createElement(x.Fragment,null,x.createElement(m1,{zoomIn:!0,ref:e,onLoseFocus:o}),x.createElement(m1,{ref:t,onLoseFocus:i}))}function yA(){const{render:e}=Jt(),t=Zm();return e.buttonZoom?x.createElement(x.Fragment,null,e.buttonZoom(t)):x.createElement(vA,null)}function xA(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function bA({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(W2)}}function wA(e){var t,n;const[{current:r,preload:i},o]=x.useReducer(bA,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:d}=e,c=a.srcSet.sort((E,T)=>E.width-T.width),y=(t=a.width)!==null&&t!==void 0?t:c[c.length-1].width,p=(n=a.height)!==null&&n!==void 0?n:c[c.length-1].height,m=qm(a,s),g=Math.max(...c.map(E=>E.width)),w=Math.min((m?Math.max:Math.min)(l.width,y*(l.height/p)),g),h=cL(),v=he(()=>{var E;const T=(E=c.find(k=>k.width>=w*h))!==null&&E!==void 0?E:c[c.length-1];(!r||c.findIndex(k=>k.src===r)<c.findIndex(k=>k===T))&&o({type:"fetch",source:T.src})});$n(v,[l.width,l.height,h,v]);const b=he(E=>o({type:"done",source:E})),S={WebkitTransform:d?"initial":"translateZ(0)"};return m||Object.assign(S,l.width/l.height<y/p?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),x.createElement(x.Fragment,null,i&&i!==r&&x.createElement(lu,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>b(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&x.createElement(lu,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function SA({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=x.useState(),l=x.useRef(null),{zoom:s,maxZoom:u,offsetX:d,offsetY:c,setZoomWrapper:y}=Zm(),p=s>1,{carousel:m,on:g}=Jt(),{currentIndex:w}=Dr();$n(()=>n===0?(y({zoomWrapperRef:l,imageDimensions:o}),()=>y(void 0)):()=>{},[n,o,y]);let h=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!h&&So(t)){const v={slide:t,offset:n,rect:r,render:e,imageFit:m.imageFit,imageProps:m.imageProps,onClick:n===0?()=>{var b;return(b=g.click)===null||b===void 0?void 0:b.call(g,{index:w})}:void 0};h=xA(t)?x.createElement(wA,{...v,slide:t,interactive:p,rect:n===0?{width:r.width*s,height:r.height*s}:r}):x.createElement(lu,{onLoad:b=>a({width:b.naturalWidth,height:b.naturalHeight}),...v})}return h?x.createElement("div",{ref:l,className:Mn(ae(eL),ae(zm),ae(R2),p&&ae(nL)),style:n===0?{transform:`scale(${s}) translateX(${d}px) translateY(${c}px)`}:void 0},h):null}const _A=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=l_(n);return{zoom:l,toolbar:fL(r,e1,x.createElement(yA,null)),render:{...i,slide:s=>{var u;return So(s.slide)?x.createElement(SA,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Ir(e1,hA))};var c_={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",u="day",d="week",c="month",y="quarter",p="year",m="date",g="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var R=["th","st","nd","rd"],L=F%100;return"["+F+(R[(L-20)%10]||R[L]||R[0])+"]"}},b=function(F,R,L){var O=String(F);return!O||O.length>=R?F:""+Array(R+1-O.length).join(L)+F},S={s:b,z:function(F){var R=-F.utcOffset(),L=Math.abs(R),O=Math.floor(L/60),P=L%60;return(R<=0?"+":"-")+b(O,2,"0")+":"+b(P,2,"0")},m:function F(R,L){if(R.date()<L.date())return-F(L,R);var O=12*(L.year()-R.year())+(L.month()-R.month()),P=R.clone().add(O,c),I=L-P<0,z=R.clone().add(O+(I?-1:1),c);return+(-(O+(L-P)/(I?P-z:z-P))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:c,y:p,w:d,d:u,D:m,h:s,m:l,s:a,ms:o,Q:y}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},E="en",T={};T[E]=v;var k="$isDayjsObject",C=function(F){return F instanceof A||!(!F||!F[k])},M=function F(R,L,O){var P;if(!R)return E;if(typeof R=="string"){var I=R.toLowerCase();T[I]&&(P=I),L&&(T[I]=L,P=I);var z=R.split("-");if(!P&&z.length>1)return F(z[0])}else{var B=R.name;T[B]=R,P=B}return!O&&P&&(E=P),P||!O&&E},$=function(F,R){if(C(F))return F.clone();var L=typeof R=="object"?R:{};return L.date=F,L.args=arguments,new A(L)},D=S;D.l=M,D.i=C,D.w=function(F,R){return $(F,{locale:R.$L,utc:R.$u,x:R.$x,$offset:R.$offset})};var A=function(){function F(L){this.$L=M(L.locale,null,!0),this.parse(L),this.$x=this.$x||L.x||{},this[k]=!0}var R=F.prototype;return R.parse=function(L){this.$d=function(O){var P=O.date,I=O.utc;if(P===null)return new Date(NaN);if(D.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var z=P.match(w);if(z){var B=z[2]-1||0,N=(z[7]||"0").substring(0,3);return I?new Date(Date.UTC(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)):new Date(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)}}return new Date(P)}(L),this.init()},R.init=function(){var L=this.$d;this.$y=L.getFullYear(),this.$M=L.getMonth(),this.$D=L.getDate(),this.$W=L.getDay(),this.$H=L.getHours(),this.$m=L.getMinutes(),this.$s=L.getSeconds(),this.$ms=L.getMilliseconds()},R.$utils=function(){return D},R.isValid=function(){return this.$d.toString()!==g},R.isSame=function(L,O){var P=$(L);return this.startOf(O)<=P&&P<=this.endOf(O)},R.isAfter=function(L,O){return $(L)<this.startOf(O)},R.isBefore=function(L,O){return this.endOf(O)<$(L)},R.$g=function(L,O,P){return D.u(L)?this[O]:this.set(P,L)},R.unix=function(){return Math.floor(this.valueOf()/1e3)},R.valueOf=function(){return this.$d.getTime()},R.startOf=function(L,O){var P=this,I=!!D.u(O)||O,z=D.p(L),B=function(we,ie){var Ie=D.w(P.$u?Date.UTC(P.$y,ie,we):new Date(P.$y,ie,we),P);return I?Ie:Ie.endOf(u)},N=function(we,ie){return D.w(P.toDate()[we].apply(P.toDate("s"),(I?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},U=this.$W,G=this.$M,W=this.$D,X="set"+(this.$u?"UTC":"");switch(z){case p:return I?B(1,0):B(31,11);case c:return I?B(1,G):B(0,G+1);case d:var ee=this.$locale().weekStart||0,pe=(U<ee?U+7:U)-ee;return B(I?W-pe:W+(6-pe),G);case u:case m:return N(X+"Hours",0);case s:return N(X+"Minutes",1);case l:return N(X+"Seconds",2);case a:return N(X+"Milliseconds",3);default:return this.clone()}},R.endOf=function(L){return this.startOf(L,!1)},R.$set=function(L,O){var P,I=D.p(L),z="set"+(this.$u?"UTC":""),B=(P={},P[u]=z+"Date",P[m]=z+"Date",P[c]=z+"Month",P[p]=z+"FullYear",P[s]=z+"Hours",P[l]=z+"Minutes",P[a]=z+"Seconds",P[o]=z+"Milliseconds",P)[I],N=I===u?this.$D+(O-this.$W):O;if(I===c||I===p){var U=this.clone().set(m,1);U.$d[B](N),U.init(),this.$d=U.set(m,Math.min(this.$D,U.daysInMonth())).$d}else B&&this.$d[B](N);return this.init(),this},R.set=function(L,O){return this.clone().$set(L,O)},R.get=function(L){return this[D.p(L)]()},R.add=function(L,O){var P,I=this;L=Number(L);var z=D.p(O),B=function(G){var W=$(I);return D.w(W.date(W.date()+Math.round(G*L)),I)};if(z===c)return this.set(c,this.$M+L);if(z===p)return this.set(p,this.$y+L);if(z===u)return B(1);if(z===d)return B(7);var N=(P={},P[l]=r,P[s]=i,P[a]=n,P)[z]||1,U=this.$d.getTime()+L*N;return D.w(U,this)},R.subtract=function(L,O){return this.add(-1*L,O)},R.format=function(L){var O=this,P=this.$locale();if(!this.isValid())return P.invalidDate||g;var I=L||"YYYY-MM-DDTHH:mm:ssZ",z=D.z(this),B=this.$H,N=this.$m,U=this.$M,G=P.weekdays,W=P.months,X=P.meridiem,ee=function(ie,Ie,We,He){return ie&&(ie[Ie]||ie(O,I))||We[Ie].slice(0,He)},pe=function(ie){return D.s(B%12||12,ie,"0")},we=X||function(ie,Ie,We){var He=ie<12?"AM":"PM";return We?He.toLowerCase():He};return I.replace(h,function(ie,Ie){return Ie||function(We){switch(We){case"YY":return String(O.$y).slice(-2);case"YYYY":return D.s(O.$y,4,"0");case"M":return U+1;case"MM":return D.s(U+1,2,"0");case"MMM":return ee(P.monthsShort,U,W,3);case"MMMM":return ee(W,U);case"D":return O.$D;case"DD":return D.s(O.$D,2,"0");case"d":return String(O.$W);case"dd":return ee(P.weekdaysMin,O.$W,G,2);case"ddd":return ee(P.weekdaysShort,O.$W,G,3);case"dddd":return G[O.$W];case"H":return String(B);case"HH":return D.s(B,2,"0");case"h":return pe(1);case"hh":return pe(2);case"a":return we(B,N,!0);case"A":return we(B,N,!1);case"m":return String(N);case"mm":return D.s(N,2,"0");case"s":return String(O.$s);case"ss":return D.s(O.$s,2,"0");case"SSS":return D.s(O.$ms,3,"0");case"Z":return z}return null}(ie)||z.replace(":","")})},R.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},R.diff=function(L,O,P){var I,z=this,B=D.p(O),N=$(L),U=(N.utcOffset()-this.utcOffset())*r,G=this-N,W=function(){return D.m(z,N)};switch(B){case p:I=W()/12;break;case c:I=W();break;case y:I=W()/3;break;case d:I=(G-U)/6048e5;break;case u:I=(G-U)/864e5;break;case s:I=G/i;break;case l:I=G/r;break;case a:I=G/n;break;default:I=G}return P?I:D.a(I)},R.daysInMonth=function(){return this.endOf(c).$D},R.$locale=function(){return T[this.$L]},R.locale=function(L,O){if(!L)return this.$L;var P=this.clone(),I=M(L,O,!0);return I&&(P.$L=I),P},R.clone=function(){return D.w(this.$d,this)},R.toDate=function(){return new Date(this.valueOf())},R.toJSON=function(){return this.isValid()?this.toISOString():null},R.toISOString=function(){return this.$d.toISOString()},R.toString=function(){return this.$d.toUTCString()},F}(),j=A.prototype;return $.prototype=j,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",u],["$M",c],["$y",p],["$D",m]].forEach(function(F){j[F[1]]=function(R){return this.$g(R,F[0],F[1])}}),$.extend=function(F,R){return F.$i||(F(R,A,$),F.$i=!0),$},$.locale=M,$.isDayjs=C,$.unix=function(F){return $(1e3*F)},$.en=T[E],$.Ls=T,$.p={},$})})(c_);var CA=c_.exports;const g1=Na(CA),EA=_.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;_.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const kA=_.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,PA=_.input`
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
`,TA=_.textarea`
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
`,OA=_.button`
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
`,jA=_.div`
  margin-top: 30px;
`,MA=_.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,$A=_.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,IA=_.span`
  font-weight: bold;
  color: #333;
`,DA=_.span`
  font-size: 12px;
  color: #999;
`,LA=_.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,AA=_.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,RA=_.div`
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
`,v1=({productId:e,questions:t})=>{const[n,r]=x.useState(""),[i,o]=x.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(Y.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return f.jsxs(EA,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(kA,{onSubmit:a,children:[f.jsx(PA,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),f.jsx(TA,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),f.jsx(OA,{children:"Надіслати запитання"})]}),f.jsx(jA,{children:t&&t.length>0?t.map(l=>l.answer?f.jsxs(MA,{children:[f.jsxs($A,{children:[f.jsx(IA,{children:l.userName||"Гість"}),f.jsx(DA,{children:new Date(l.createdAt).toLocaleDateString()})]}),f.jsx(LA,{children:l.question}),f.jsxs(AA,{children:[f.jsx(RA,{children:"Адміністратор"}),f.jsx("p",{children:l.answer})]})]},l.id):null):f.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},FA=()=>{var L;const{id:e}=jy(),[t,n]=x.useState([]),[r,i]=x.useState(1),[o,a]=x.useState("description"),[l,s]=x.useState(null),[u,d]=x.useState(!1),[c,y]=x.useState(0);console.log("products",t);const[p,m]=x.useState(!0),g=t.find(O=>O.id===Number(e)),w=g?g1().diff(g1(g.createdAt),"day")<7:!1,v=(O=>{const[P,I]=x.useState(!1);return x.useEffect(()=>{const z=window.matchMedia(O),B=()=>I(z.matches);return B(),z.addEventListener("change",B),()=>z.removeEventListener("change",B)},[O]),P})("(min-width: 768px)"),b=Ue(O=>O.cart.items),S=g?b.find(O=>O.id===g.id):null,E=(S==null?void 0:S.quantity)||0;x.useEffect(()=>{(async()=>{try{m(!0);const I=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[id][$eq]=${e}&populate=*`)).json();n(I.data)}catch(P){console.error("Error fetching products:",P)}finally{m(!1)}})()},[e]),console.log(g);const T=(g==null?void 0:g.available)??!0;console.log(T),x.useEffect(()=>{var O,P;g&&g.images&&s((P=(O=g.images)==null?void 0:O[0])==null?void 0:P.url)},[g]);const k=((g==null?void 0:g.images)??[]).map(O=>({src:O.url})),C=()=>{const O=g.images.findIndex(P=>P.url===l);y(O>=0?O:0),d(!0)},M=vn(),D=Ue(O=>O.favorites.items).some(O=>O.id===(g==null?void 0:g.id)),A=()=>{if(E>=g.stock){Y.warning("Товар вже в кошику (досягнуто максимум)");return}if(E+r>g.stock){Y.warning(`Доступно лише ${g.stock} шт.`);return}M(vo({...g,quantity:r})),Y.success(`${g.name} додано в кошик!`)},j=(O,P)=>{P.stopPropagation(),M(ui(O)),D?Y.warning(`${O.name} видалено з обраного`):Y.info(`${O.name} додано в обране`)},F=(g==null?void 0:g.new_price)&&(g==null?void 0:g.new_price)<g.price,R=F?Math.round((g.price-g.new_price)/g.price*100):0;return p?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ja,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):g?f.jsxs(Gv,{children:[" ",f.jsx(Dn,{autoClose:1500}),f.jsxs(k6,{children:[f.jsx(Pe,{to:"/",children:"Головна"})," / ",f.jsx(Pe,{to:"/catalog",children:"Каталог"})," /"," ",g.name]}),f.jsxs(P6,{children:[f.jsxs(T6,{children:[f.jsx(O6,{src:l,alt:g.name,onClick:C}),f.jsx(j6,{children:(g.images??[]).map(O=>{const P=O.url;return f.jsx(M6,{src:P,onClick:()=>s(P),style:{cursor:"pointer",opacity:l===P?1:.4}},O.id)})})]}),f.jsx(aA,{open:u,close:()=>d(!1),index:c,slides:k,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var P,I;y(O),(I=(P=g==null?void 0:g.images)==null?void 0:P[O])!=null&&I.url&&s(g.images[O].url)}},plugins:[_A],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),f.jsxs($6,{children:[f.jsx(I6,{children:g.name}),f.jsx(D6,{children:w&&f.jsx(A6,{children:"● Новий товар"})}),!T&&f.jsx(L6,{children:" Заброньовано"}),f.jsxs(R6,{children:[f.jsx(F6,{children:F?f.jsxs(f.Fragment,{children:[f.jsxs(qv,{$discount:!0,children:[g.new_price.toLocaleString()," грн"]}),f.jsxs(z6,{children:[g.price.toLocaleString()," грн"]}),f.jsxs(N6,{children:["-",R,"%"]})]}):f.jsxs(qv,{children:[g.price.toLocaleString()," грн"]})}),f.jsxs(B6,{children:[f.jsxs(V6,{children:[f.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),f.jsx("span",{children:r}),f.jsxs(Y6,{$active:r>=g.stock,children:[f.jsx("button",{onClick:()=>i(Math.min(g.stock,r+1)),disabled:r>=g.stock,children:"+"}),f.jsxs($2,{children:["Максимум: ",g.stock]})]})]}),f.jsxs(U6,{onClick:A,disabled:!T,children:[" ",f.jsx(go,{size:25}),f.jsx("span",{children:"В КОШИК"})]}),f.jsxs(G6,{$active:D,onClick:O=>j(g,O),children:[f.jsxs(q6,{$active:D,children:[" ",f.jsx("use",{href:`${pn}#icon-heart`})]}),f.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!v&&f.jsxs(Kv,{children:[f.jsxs(Qv,{children:[f.jsx(No,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(No,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),f.jsx(No,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(Zv,{children:[o==="description"&&f.jsx(Jv,{children:g.description}),o==="attributes"&&f.jsx(Yv,{children:(L=g.attributes)!=null&&L.length?g.attributes.map(O=>f.jsxs(Xv,{children:[f.jsx("span",{children:O.label}),f.jsx("b",{children:O.value})]},O.id)):f.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&f.jsx(v1,{productId:g.documentId,questions:g.questions})]})]}),v&&f.jsxs(H6,{children:[f.jsxs(Kv,{children:[f.jsxs(Qv,{children:[f.jsx(No,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(No,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(Zv,{children:[o==="description"&&f.jsx(Jv,{children:g.description}),o==="FAQ"&&f.jsx(v1,{productId:g.documentId,questions:g.questions})]})]}),f.jsxs(Yv,{children:[f.jsx(W6,{children:" Характеристики"}),(()=>{const O=[...g.attributes||[],...g.features||[]];return O.length?O.map((P,I)=>f.jsxs(Xv,{children:[f.jsx("span",{children:P.label}),f.jsx("b",{children:P.value})]},`${P.id}-${I}`)):f.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):f.jsx(Gv,{children:"Товар не знайдено"})},zA=_.div`
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

  
`,NA=_.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,BA=_.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,VA=_.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,UA=_.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,WA=_.div`
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
`,HA=_.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,GA=_.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,qA=_.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,YA=_.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`;_.div`
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
`;const jc=_.div`
  text-align: center;
  width: 100px;
 
`,Mc=_.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,$c=_.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Ic=_.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Dc=_.span`
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
`,XA=_.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,KA=_.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,QA=_.div`

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
`,ZA=_.div`
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
`,JA=_(Pe)`
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
`,eR=_.button`
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
  
`;_.svg`
  width: 25px;
  height: 25px;
  fill: ${({$active:e})=>e?"var(--red-color)":"var(--black-color)"};
`;const tR=_.div`
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
`,nR=_.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,rR=_.div`
  background-color: #fdfaf7;
`,iR=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;_.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
`;const oR=_.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,aR=_.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,sR=_.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,lR=_.button`
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
`,uR=()=>f.jsx(rR,{children:f.jsxs(tR,{children:[f.jsx(nR,{children:"Головна / Кошик"}),f.jsxs(iR,{children:[f.jsx(oR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),f.jsx(aR,{children:"Ваш кошик порожній"}),f.jsx(sR,{children:"Ви ще не додали жодного товару в кошик"}),f.jsx(lR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),cR=_.div`
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
`,dR=({item:e})=>{const t=vn();return f.jsxs(cR,{children:[f.jsx("button",{onClick:()=>t(I4(e.id)),children:"-"}),f.jsx("span",{children:e.quantity}),f.jsx("button",{onClick:()=>t($4({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},fR=()=>{const e=vn(),t=Zt(),[n,r]=x.useState([]),i=Ue(p=>p.cart.items),a=Ue(p=>p.cart.items).reduce((p,m)=>p+m.quantity,0),l=i.reduce((p,m)=>p+(m.new_price??m.price)*(m.quantity||1),0),s=Ue(p=>p.favorites.items),u=i.length===0,d=(p,m)=>{m.stopPropagation(),console.log(p);const g=s.some(w=>w.id===p.id);e(ui(p)),g?Y.warning(`${p.name} видалено з обраного`):Y.info(`${p.name} додано в обране`)},c=p=>{r(m=>[...m,p.id]),setTimeout(()=>{e(j4(p)),r(m=>m.filter(g=>g!==p.id))},300)},y=()=>{e(vm())};return f.jsx(f.Fragment,{children:u?f.jsx(uR,{}):f.jsxs(zA,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(NA,{children:[" ",f.jsx(Pe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Pe,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),f.jsx(BA,{children:"Кошик"}),f.jsxs(VA,{children:[f.jsx(UA,{children:i.map((p,m)=>{var b,S;console.log(p);const g=s.some(E=>E.id===p.id),w=p.new_price&&p.new_price<p.price,h=w?p.new_price:p.price,v=w?Math.round((p.price-p.new_price)/p.price*100):0;return f.jsxs(WA,{className:n.includes(p.id)?"removing":"",children:[f.jsx(HA,{src:((S=(b=p.images)==null?void 0:b[0])==null?void 0:S.url)||"/nofoto.png",alt:p.name,onClick:()=>t(`/product/${p.id}`),onError:E=>{E.currentTarget.onerror=null,E.currentTarget.src=oo}}),f.jsx(GA,{children:f.jsx("h3",{children:p.name})}),f.jsxs(qA,{children:[f.jsx(dR,{item:{...p,quantity:p.quantity||1}}),f.jsx(jc,{children:f.jsxs(Mc,{children:[f.jsxs($c,{$discount:w,children:[(h*(p.quantity||1)).toLocaleString()," грн"]}),w&&f.jsxs(f.Fragment,{children:[f.jsxs(Ic,{children:[(p.price*(p.quantity||1)).toLocaleString()," грн"]}),f.jsxs(Dc,{children:["-",v,"%"]})]})]})})]}),f.jsxs(YA,{children:[f.jsx(KA,{onClick:E=>d(p,E),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:f.jsx(Ya,{size:22,fill:g?"#ff4d4f":"none",color:g?"#ff4d4f":"#999"})}),f.jsx(XA,{onClick:()=>c(p),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:f.jsx(gw,{size:22})})]})]},`${p.id}-${m}`)})}),f.jsxs(QA,{children:[f.jsxs(ZA,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[a," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[l," грн"]})]}),f.jsx(JA,{to:"/checkout",children:"Оформити замовлення"}),f.jsx(eR,{onClick:y,children:"Oчистити кошик"})]})]})]})})},pR=_.div`
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
`,hR=_.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,mR=_.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,gR=_.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,vR=_.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,yR=_.div`
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
`,xR=_.div`
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
`;_.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const bR=_.div`
  position: relative;
`,wR=_.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,SR=_.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,_R=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;_.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  width: 100px;
  text-align: center;
`;const CR=_.div`
  display: flex;
  gap: 16px;
`,y1=_.button`
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
`,ER=_.div`
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
`,kR=_.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,PR=_.button`
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
`,TR=_.button`
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
`,OR=_.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,jR=_.div`
   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;_.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
`;const MR=_.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;_.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const $R=_.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,IR=_.button`
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
`,DR=()=>f.jsxs(f.Fragment,{children:[f.jsx(OR,{children:"Головна / Обране"}),f.jsxs(jR,{children:[f.jsx(MR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),f.jsx($R,{children:"Ви ще не додали жодного товару в обране"}),f.jsx(IR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),LR=()=>{const e=vn(),t=Zt(),n=Ue(c=>c.favorites.items);console.log(n);const[r,i]=x.useState([]),o=Ue(c=>c.cart.items),a=()=>{const c=n.filter(y=>y.available!==!1).map(y=>{const p=o.find(w=>w.id===y.id),m=p?p.quantity:0,g=y.stock-m;return g<=0?null:{...y,quantity:g}}).filter(Boolean);if(c.length===0){Y.error("Усі товари вже в максимальній кількості");return}e(M4(c)),Y.success("Додано максимально доступну кількість товарів")};console.log(n);const l=n.reduce((c,y)=>c+(y.new_price??y.price)*(y.quantity||1),0),s=(c,y)=>{y.stopPropagation();const p=n.some(m=>m.id===c.id);i(m=>[...m,c.id]),setTimeout(()=>{e(ui(c)),i(m=>m.filter(g=>g!==c.id))},300),p?Y.warning(`${c.name} видалено з обраного`):Y.info(`${c.name} додано в обране`)},u=()=>{e(T3())},d=n.length===0;return f.jsx(f.Fragment,{children:d?f.jsx(DR,{}):f.jsxs(pR,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(hR,{children:[" ",f.jsx(Pe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Pe,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),f.jsx(mR,{children:"Обране"}),f.jsxs(gR,{children:[f.jsx(vR,{children:n.map(c=>{var h,v;const y=c.new_price&&c.new_price<c.price,p=y?c.new_price:c.price,m=(c==null?void 0:c.available)??!0,g=y?Math.round((c.price-c.new_price)/c.price*100):0,w=b=>{const S=o.find(T=>T.id===b.id);if((S?S.quantity:0)>=b.stock){Y.error(`Вибачте, доступно лише ${b.stock} шт.`);return}e(vo(b)),Y.success(`${b.name} додано в кошик!`)};return f.jsxs(yR,{className:r.includes(c.id)?"removing":"",children:[!m&&f.jsx(xR,{children:"Заброньовано"}),f.jsx(bR,{children:f.jsx(wR,{src:((v=(h=c.images)==null?void 0:h[0])==null?void 0:v.url)||"/nofoto.png",alt:c.name,onClick:()=>t(`/product/${c.id}`),onError:b=>{b.currentTarget.onerror=null,b.currentTarget.src="/nofoto.png"}})}),f.jsx(SR,{children:c.name}),f.jsxs(_R,{children:[f.jsx(jc,{children:f.jsxs(Mc,{children:[f.jsxs($c,{$discount:y,children:[(p*(c.quantity||1)).toLocaleString()," ","грн"]}),y&&f.jsxs(f.Fragment,{children:[f.jsxs(Ic,{children:[(c.price*(c.quantity||1)).toLocaleString()," ","грн"]}),f.jsxs(Dc,{children:["-",g,"%"]})]})]})}),f.jsxs(CR,{children:[f.jsx(y1,{onClick:()=>w(c),disabled:!m,children:f.jsx(go,{size:30})}),f.jsx(y1,{onClick:b=>s(c,b),children:f.jsx(gw,{size:30})})]})]})]},c.id)})}),f.jsxs(ER,{children:[f.jsxs(kR,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[n.length," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[l," грн"]})]}),f.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),f.jsx(PR,{onClick:()=>a(),children:"Додати все до кошика"}),f.jsx(TR,{onClick:u,children:"Очистити обрані"})]})]})]})})},AR=_.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,RR=_.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,FR=_.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,zR=_.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;_.section`
  margin-bottom: 30px;
`;_.h2`
  font-size: 20px;
  color: #4a332a; // Колір як у футері для акцентів
  margin-bottom: 15px;
  font-weight: 500;
`;_.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;_.ul`
  margin-left: 20px;
  margin-bottom: 15px;
  
  li {
    margin-bottom: 8px;
    color: #555;
    line-height: 1.5;
  }
`;const NR=({title:e,children:t,breadcrumbPath:n})=>f.jsxs(AR,{children:[f.jsxs(RR,{children:["Головна / ",n]}),f.jsxs(FR,{children:[f.jsx(zR,{children:e}),t]})]}),x1=_.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,b1=_.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,w1=_.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,S1=_.ul`
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
`,BR=()=>f.jsxs(NR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[f.jsxs(x1,{children:[f.jsx(b1,{children:"Способи доставки"}),f.jsx(w1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),f.jsxs(S1,{children:[f.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),f.jsx("li",{children:"Самовивіз з нашого магазину"}),f.jsx("li",{children:"Укрпошта"})]})]}),f.jsxs(x1,{children:[f.jsx(b1,{children:"Варіанти оплати"}),f.jsx(w1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),f.jsxs(S1,{children:[f.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),f.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),f.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function oi(e){"@babel/helpers - typeof";return oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oi(e)}function VR(e,t){if(oi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(oi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function d_(e){var t=VR(e,"string");return oi(t)==="symbol"?t:String(t)}function Qo(e,t,n){return t=d_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_1(Object(n),!0).forEach(function(r){Qo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function UR(e){if(Array.isArray(e))return e}function WR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){u=!0,i=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Gp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f_(e,t){if(e){if(typeof e=="string")return Gp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gp(e,t)}}function HR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qn(e,t){return UR(e)||WR(e,t)||f_(e,t)||HR()}function GR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function or(e,t){if(e==null)return{};var n=GR(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var qR=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function YR(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,d=e.onInputChange,c=e.onMenuClose,y=e.onMenuOpen,p=e.value,m=or(e,qR),g=x.useState(l!==void 0?l:n),w=qn(g,2),h=w[0],v=w[1],b=x.useState(s!==void 0?s:i),S=qn(b,2),E=S[0],T=S[1],k=x.useState(p!==void 0?p:a),C=qn(k,2),M=C[0],$=C[1],D=x.useCallback(function(P,I){typeof u=="function"&&u(P,I),$(P)},[u]),A=x.useCallback(function(P,I){var z;typeof d=="function"&&(z=d(P,I)),v(z!==void 0?z:P)},[d]),j=x.useCallback(function(){typeof y=="function"&&y(),T(!0)},[y]),F=x.useCallback(function(){typeof c=="function"&&c(),T(!1)},[c]),R=l!==void 0?l:h,L=s!==void 0?s:E,O=p!==void 0?p:M;return Z(Z({},m),{},{inputValue:R,menuIsOpen:L,onChange:D,onInputChange:A,onMenuClose:F,onMenuOpen:j,value:O})}function XR(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d_(r.key),r)}}function KR(e,t,n){return t&&C1(e.prototype,t),n&&C1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function qp(e,t){return qp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},qp(e,t)}function QR(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&qp(e,t)}function uu(e){return uu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},uu(e)}function ZR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function JR(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function e8(e,t){if(t&&(oi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return JR(e)}function t8(e){var t=ZR();return function(){var r=uu(e),i;if(t){var o=uu(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return e8(this,i)}}function n8(e){if(Array.isArray(e))return Gp(e)}function r8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function i8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jm(e){return n8(e)||r8(e)||f_(e)||i8()}function o8(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const a8=Math.min,s8=Math.max,cu=Math.round,Ms=Math.floor,du=e=>({x:e,y:e});function l8(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Lc(){return typeof window<"u"}function p_(e){return m_(e)?(e.nodeName||"").toLowerCase():"#document"}function hn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function h_(e){var t;return(t=(m_(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function m_(e){return Lc()?e instanceof Node||e instanceof hn(e).Node:!1}function Yp(e){return Lc()?e instanceof Element||e instanceof hn(e).Element:!1}function eg(e){return Lc()?e instanceof HTMLElement||e instanceof hn(e).HTMLElement:!1}function E1(e){return!Lc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof hn(e).ShadowRoot}function g_(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=tg(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Qd;function u8(){return Qd==null&&(Qd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Qd}function c8(e){return/^(html|body|#document)$/.test(p_(e))}function tg(e){return hn(e).getComputedStyle(e)}function d8(e){if(p_(e)==="html")return e;const t=e.assignedSlot||e.parentNode||E1(e)&&e.host||h_(e);return E1(t)?t.host:t}function v_(e){const t=d8(e);return c8(t)?e.ownerDocument?e.ownerDocument.body:e.body:eg(t)&&g_(t)?t:v_(t)}function fu(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=v_(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=hn(i);if(o){const l=Xp(a);return t.concat(a,a.visualViewport||[],g_(i)?i:[],l&&n?fu(l):[])}else return t.concat(i,fu(i,[],n))}function Xp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function f8(e){const t=tg(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=eg(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=cu(n)!==o||cu(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function ng(e){return Yp(e)?e:e.contextElement}function Zd(e){const t=ng(e);if(!eg(t))return du(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=f8(t);let a=(o?cu(n.width):n.width)/r,l=(o?cu(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const p8=du(0);function h8(e){const t=hn(e);return!u8()||!t.visualViewport?p8:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function m8(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==hn(e)?!1:t}function k1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=ng(e);let a=du(1);t&&(r?Yp(r)&&(a=Zd(r)):a=Zd(e));const l=m8(o,n,r)?h8(o):du(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,d=i.width/a.x,c=i.height/a.y;if(o){const y=hn(o),p=r&&Yp(r)?hn(r):r;let m=y,g=Xp(m);for(;g&&r&&p!==m;){const w=Zd(g),h=g.getBoundingClientRect(),v=tg(g),b=h.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,S=h.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;s*=w.x,u*=w.y,d*=w.x,c*=w.y,s+=b,u+=S,m=hn(g),g=Xp(m)}}return l8({width:d,height:c,x:s,y:u})}function y_(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function g8(e,t){let n=null,r;const i=h_(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:d,top:c,width:y,height:p}=u;if(l||t(),!y||!p)return;const m=Ms(c),g=Ms(i.clientWidth-(d+y)),w=Ms(i.clientHeight-(c+p)),h=Ms(d),b={rootMargin:-m+"px "+-g+"px "+-w+"px "+-h+"px",threshold:s8(0,a8(1,s))||1};let S=!0;function E(T){const k=T[0].intersectionRatio;if(k!==s){if(!S)return a();k?a(!1,k):r=setTimeout(()=>{a(!1,1e-7)},1e3)}k===1&&!y_(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(E,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,b)}n.observe(e)}return a(!0),o}function v8(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=ng(e),d=i||o?[...u?fu(u):[],...t?fu(t):[]]:[];d.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const c=u&&l?g8(u,n):null;let y=-1,p=null;a&&(p=new ResizeObserver(h=>{let[v]=h;v&&v.target===u&&p&&t&&(p.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(t)})),n()}),u&&!s&&p.observe(u),t&&p.observe(t));let m,g=s?k1(e):null;s&&w();function w(){const h=k1(e);g&&!y_(g,h)&&n(),g=h,m=requestAnimationFrame(w)}return n(),()=>{var h;d.forEach(v=>{i&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),c==null||c(),(h=p)==null||h.disconnect(),p=null,s&&cancelAnimationFrame(m)}}var Kp=x.useLayoutEffect,y8=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],pu=function(){};function x8(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function b8(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(x8(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var P1=function(t){return O8(t)?t.filter(Boolean):oi(t)==="object"&&t!==null?[t]:[]},x_=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=or(t,y8);return Z({},n)},je=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Ac(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function w8(e){return Ac(e)?window.innerHeight:e.clientHeight}function b_(e){return Ac(e)?window.pageYOffset:e.scrollTop}function hu(e,t){if(Ac(e)){window.scrollTo(0,t);return}e.scrollTop=t}function S8(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function _8(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function $s(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:pu,i=b_(e),o=t-i,a=10,l=0;function s(){l+=a;var u=_8(l,i,o,n);hu(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function T1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?hu(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&hu(e,Math.max(t.offsetTop-i,0))}function C8(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function O1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function E8(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var w_=!1,k8={get passive(){return w_=!0}},Is=typeof window<"u"?window:{};Is.addEventListener&&Is.removeEventListener&&(Is.addEventListener("p",pu,k8),Is.removeEventListener("p",pu,!1));var P8=w_;function T8(e){return e!=null}function O8(e){return Array.isArray(e)}function Ds(e,t,n){return e?t:n}var j8=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=qn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=qn(l,2),u=s[0],d=s[1];return a[u]=d,a},{})},M8=["children","innerProps"],$8=["children","innerProps"];function I8(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=S8(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var d=s.getBoundingClientRect(),c=d.height,y=n.getBoundingClientRect(),p=y.bottom,m=y.height,g=y.top,w=n.offsetParent.getBoundingClientRect(),h=w.top,v=a?window.innerHeight:w8(s),b=b_(s),S=parseInt(getComputedStyle(n).marginBottom,10),E=parseInt(getComputedStyle(n).marginTop,10),T=h-E,k=v-g,C=T+b,M=c-b-g,$=p-v+b+S,D=b+g-E,A=160;switch(i){case"auto":case"bottom":if(k>=m)return{placement:"bottom",maxHeight:t};if(M>=m&&!a)return o&&$s(s,$,A),{placement:"bottom",maxHeight:t};if(!a&&M>=r||a&&k>=r){o&&$s(s,$,A);var j=a?k-S:M-S;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var F=t,R=a?T:C;return R>=r&&(F=Math.min(R-S-l,t)),{placement:"top",maxHeight:F}}if(i==="bottom")return o&&hu(s,$),{placement:"bottom",maxHeight:t};break;case"top":if(T>=m)return{placement:"top",maxHeight:t};if(C>=m&&!a)return o&&$s(s,D,A),{placement:"top",maxHeight:t};if(!a&&C>=r||a&&T>=r){var L=t;return(!a&&C>=r||a&&T>=r)&&(L=a?T-E:C-E),o&&$s(s,D,A),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function D8(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var S_=function(t){return t==="auto"?"bottom":t},L8=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},Qo(r,D8(i),"100%"),Qo(r,"position","absolute"),Qo(r,"width","100%"),Qo(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},__=x.createContext(null),A8=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=x.useContext(__)||{},d=u.setPortalPlacement,c=x.useRef(null),y=x.useState(i),p=qn(y,2),m=p[0],g=p[1],w=x.useState(null),h=qn(w,2),v=h[0],b=h[1],S=s.spacing.controlHeight;return Kp(function(){var E=c.current;if(E){var T=a==="fixed",k=l&&!T,C=I8({maxHeight:i,menuEl:E,minHeight:r,placement:o,shouldScroll:k,isFixedPosition:T,controlHeight:S});g(C.maxHeight),b(C.placement),d==null||d(C.placement)}},[i,o,a,l,r,d,S]),n({ref:c,placerProps:Z(Z({},t),{},{placement:v||S_(o),maxHeight:m})})},R8=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Q("div",J({},je(t,"menu",{menu:!0}),{ref:r},i),n)},F8=R8,z8=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},N8=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Q("div",J({},je(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},C_=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},B8=C_,V8=C_,U8=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=or(t,M8);return Q("div",J({},je(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},W8=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=or(t,$8);return Q("div",J({},je(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},H8=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},G8=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=x.useRef(null),u=x.useRef(null),d=x.useState(S_(a)),c=qn(d,2),y=c[0],p=c[1],m=x.useMemo(function(){return{setPortalPlacement:p}},[]),g=x.useState(null),w=qn(g,2),h=w[0],v=w[1],b=x.useCallback(function(){if(i){var k=C8(i),C=l==="fixed"?0:window.pageYOffset,M=k[y]+C;(M!==(h==null?void 0:h.offset)||k.left!==(h==null?void 0:h.rect.left)||k.width!==(h==null?void 0:h.rect.width))&&v({offset:M,rect:k})}},[i,l,y,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Kp(function(){b()},[b]);var S=x.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=v8(i,s.current,b,{elementResize:"ResizeObserver"in window}))},[i,b]);Kp(function(){S()},[S]);var E=x.useCallback(function(k){s.current=k,S()},[S]);if(!n&&l!=="fixed"||!h)return null;var T=Q("div",J({ref:E},je(Z(Z({},t),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Q(__.Provider,{value:m},n?Du.createPortal(T,n):T)},q8=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},Y8=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Q("div",J({},je(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},X8=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},K8=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Q("div",J({},je(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},Q8=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Z8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"indicatorsContainer",{indicators:!0}),r),n)},j1,J8=["size"],eF=["innerProps","isRtl","size"],tF={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},E_=function(t){var n=t.size,r=or(t,J8);return Q("svg",J({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:tF},r))},rg=function(t){return Q(E_,J({size:20},t),Q("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},k_=function(t){return Q(E_,J({size:20},t),Q("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},P_=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},nF=P_,rF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Q(k_,null))},iF=P_,oF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Q(rg,null))},aF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},sF=function(t){var n=t.innerProps;return Q("span",J({},n,je(t,"indicatorSeparator",{"indicator-separator":!0})))},lF=P5(j1||(j1=o8([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),uF=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Jd=function(t){var n=t.delay,r=t.offset;return Q("span",{css:Tm({animation:"".concat(lF," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},cF=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=or(t,eF);return Q("div",J({},je(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Q(Jd,{delay:0,offset:r}),Q(Jd,{delay:160,offset:!0}),Q(Jd,{delay:320,offset:!r}))},dF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},fF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Q("div",J({ref:o},je(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},pF=fF,hF=["data"],mF=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},gF=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,d=t.theme,c=t.selectProps;return Q("div",J({},je(t,"group",{group:!0}),s),Q(a,J({},l,{selectProps:c,theme:d,getStyles:i,getClassNames:o,cx:r}),u),Q("div",null,n))},vF=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},yF=function(t){var n=x_(t);n.data;var r=or(n,hF);return Q("div",J({},je(t,"groupHeading",{"group-heading":!0}),r))},xF=gF,bF=["innerRef","isDisabled","isHidden","inputClassName"],wF=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},SF),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},T_={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},SF={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},T_)},_F=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},T_)},CF=function(t){var n=t.cx,r=t.value,i=x_(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=or(i,bF);return Q("div",J({},je(t,"input",{"input-container":!0}),{"data-value":r||""}),Q("input",J({className:n({input:!0},s),ref:o,style:_F(l),disabled:a},u)))},EF=CF,kF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},PF=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},TF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},O_=function(t){var n=t.children,r=t.innerProps;return Q("div",r,n)},OF=O_,jF=O_;function MF(e){var t=e.children,n=e.innerProps;return Q("div",J({role:"button"},n),t||Q(rg,{size:14}))}var $F=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,d=r.Label,c=r.Remove;return Q(u,{data:i,innerProps:Z(Z({},je(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Q(d,{data:i,innerProps:Z({},je(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Q(c,{data:i,innerProps:Z(Z({},je(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},IF=$F,DF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},LF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Q("div",J({},je(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},AF=LF,RF=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},FF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"placeholder",{placeholder:!0}),r),n)},zF=FF,NF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},BF=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Q("div",J({},je(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},VF=BF,UF={ClearIndicator:oF,Control:pF,DropdownIndicator:rF,DownChevron:k_,CrossIcon:rg,Group:xF,GroupHeading:yF,IndicatorsContainer:Z8,IndicatorSeparator:sF,Input:EF,LoadingIndicator:cF,Menu:F8,MenuList:N8,MenuPortal:G8,LoadingMessage:W8,NoOptionsMessage:U8,MultiValue:IF,MultiValueContainer:OF,MultiValueLabel:jF,MultiValueRemove:MF,Option:AF,Placeholder:zF,SelectContainer:Y8,SingleValue:VF,ValueContainer:K8},WF=function(t){return Z(Z({},UF),t.components)},M1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function HF(e,t){return!!(e===t||M1(e)&&M1(t))}function GF(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!HF(e[n],t[n]))return!1;return!0}function qF(e,t){t===void 0&&(t=GF);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var YF={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},XF=function(t){return Q("span",J({css:YF},t))},$1=XF,KF={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,d=t.isAppleDevice,c=function(g,w){return g&&g.length?"".concat(g.indexOf(w)+1," of ").concat(g.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(c(l,r),".");if(n==="menu"&&d){var y=s?" disabled":"",p="".concat(u?" selected":"").concat(y);return"".concat(a).concat(p,", ").concat(c(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},QF=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,d=t.isAppleDevice,c=s.ariaLiveMessages,y=s.getOptionLabel,p=s.inputValue,m=s.isMulti,g=s.isOptionDisabled,w=s.isSearchable,h=s.menuIsOpen,v=s.options,b=s.screenReaderStatus,S=s.tabSelectsValue,E=s.isLoading,T=s["aria-label"],k=s["aria-live"],C=x.useMemo(function(){return Z(Z({},KF),c||{})},[c]),M=x.useMemo(function(){var R="";if(n&&C.onChange){var L=n.option,O=n.options,P=n.removedValue,I=n.removedValues,z=n.value,B=function(pe){return Array.isArray(pe)?null:pe},N=P||L||B(z),U=N?y(N):"",G=O||I||void 0,W=G?G.map(y):[],X=Z({isDisabled:N&&g(N,l),label:U,labels:W},n);R=C.onChange(X)}return R},[n,C,g,l,y]),$=x.useMemo(function(){var R="",L=r||i,O=!!(r&&l&&l.includes(r));if(L&&C.onFocus){var P={focused:L,label:y(L),isDisabled:g(L,l),isSelected:O,options:o,context:L===r?"menu":"value",selectValue:l,isAppleDevice:d};R=C.onFocus(P)}return R},[r,i,y,g,C,o,l,d]),D=x.useMemo(function(){var R="";if(h&&v.length&&!E&&C.onFilter){var L=b({count:o.length});R=C.onFilter({inputValue:p,resultsMessage:L})}return R},[o,p,h,C,v,b,E]),A=(n==null?void 0:n.action)==="initial-input-focus",j=x.useMemo(function(){var R="";if(C.guidance){var L=i?"value":h?"menu":"input";R=C.guidance({"aria-label":T,context:L,isDisabled:r&&g(r,l),isMulti:m,isSearchable:w,tabSelectsValue:S,isInitialFocus:A})}return R},[T,r,i,m,g,w,h,C,l,S,A]),F=Q(x.Fragment,null,Q("span",{id:"aria-selection"},M),Q("span",{id:"aria-focused"},$),Q("span",{id:"aria-results"},D),Q("span",{id:"aria-guidance"},j));return Q(x.Fragment,null,Q($1,{id:u},A&&F),Q($1,{"aria-live":k,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!A&&F))},ZF=QF,Qp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],JF=new RegExp("["+Qp.map(function(e){return e.letters}).join("")+"]","g"),j_={};for(var ef=0;ef<Qp.length;ef++)for(var tf=Qp[ef],nf=0;nf<tf.letters.length;nf++)j_[tf.letters[nf]]=tf.base;var M_=function(t){return t.replace(JF,function(n){return j_[n]})},ez=qF(M_),I1=function(t){return t.replace(/^\s+|\s+$/g,"")},tz=function(t){return"".concat(t.label," ").concat(t.value)},nz=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:tz,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,d=s?I1(r):r,c=s?I1(l(n)):l(n);return o&&(d=d.toLowerCase(),c=c.toLowerCase()),a&&(d=ez(d),c=M_(c)),u==="start"?c.substr(0,d.length)===d:c.indexOf(d)>-1}},rz=["innerRef"];function iz(e){var t=e.innerRef,n=or(e,rz),r=j8(n,"onExited","in","enter","exit","appear");return Q("input",J({ref:t},r,{css:Tm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var oz=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function az(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=x.useRef(!1),l=x.useRef(!1),s=x.useRef(0),u=x.useRef(null),d=x.useCallback(function(w,h){if(u.current!==null){var v=u.current,b=v.scrollTop,S=v.scrollHeight,E=v.clientHeight,T=u.current,k=h>0,C=S-E-b,M=!1;C>h&&a.current&&(r&&r(w),a.current=!1),k&&l.current&&(o&&o(w),l.current=!1),k&&h>C?(n&&!a.current&&n(w),T.scrollTop=S,M=!0,a.current=!0):!k&&-h>b&&(i&&!l.current&&i(w),T.scrollTop=0,M=!0,l.current=!0),M&&oz(w)}},[n,r,i,o]),c=x.useCallback(function(w){d(w,w.deltaY)},[d]),y=x.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),p=x.useCallback(function(w){var h=s.current-w.changedTouches[0].clientY;d(w,h)},[d]),m=x.useCallback(function(w){if(w){var h=P8?{passive:!1}:!1;w.addEventListener("wheel",c,h),w.addEventListener("touchstart",y,h),w.addEventListener("touchmove",p,h)}},[p,y,c]),g=x.useCallback(function(w){w&&(w.removeEventListener("wheel",c,!1),w.removeEventListener("touchstart",y,!1),w.removeEventListener("touchmove",p,!1))},[p,y,c]);return x.useEffect(function(){if(t){var w=u.current;return m(w),function(){g(w)}}},[t,m,g]),function(w){u.current=w}}var D1=["boxSizing","height","overflow","paddingRight","position"],L1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function A1(e){e.cancelable&&e.preventDefault()}function R1(e){e.stopPropagation()}function F1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function z1(){return"ontouchstart"in window||navigator.maxTouchPoints}var N1=!!(typeof window<"u"&&window.document&&window.document.createElement),Bo=0,bi={capture:!1,passive:!1};function sz(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=x.useRef({}),o=x.useRef(null),a=x.useCallback(function(s){if(N1){var u=document.body,d=u&&u.style;if(r&&D1.forEach(function(m){var g=d&&d[m];i.current[m]=g}),r&&Bo<1){var c=parseInt(i.current.paddingRight,10)||0,y=document.body?document.body.clientWidth:0,p=window.innerWidth-y+c||0;Object.keys(L1).forEach(function(m){var g=L1[m];d&&(d[m]=g)}),d&&(d.paddingRight="".concat(p,"px"))}u&&z1()&&(u.addEventListener("touchmove",A1,bi),s&&(s.addEventListener("touchstart",F1,bi),s.addEventListener("touchmove",R1,bi))),Bo+=1}},[r]),l=x.useCallback(function(s){if(N1){var u=document.body,d=u&&u.style;Bo=Math.max(Bo-1,0),r&&Bo<1&&D1.forEach(function(c){var y=i.current[c];d&&(d[c]=y)}),u&&z1()&&(u.removeEventListener("touchmove",A1,bi),s&&(s.removeEventListener("touchstart",F1,bi),s.removeEventListener("touchmove",R1,bi)))}},[r]);return x.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var lz=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},uz={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function cz(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=az({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=sz({isEnabled:n}),c=function(p){u(p),d(p)};return Q(x.Fragment,null,n&&Q("div",{onClick:lz,css:uz}),t(c))}var dz={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},fz=function(t){var n=t.name,r=t.onFocus;return Q("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:dz,value:"",onChange:function(){}})},pz=fz;function ig(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function hz(){return ig(/^iPhone/i)}function $_(){return ig(/^Mac/i)}function mz(){return ig(/^iPad/i)||$_()&&navigator.maxTouchPoints>1}function gz(){return hz()||mz()}function vz(){return $_()||gz()}var yz=function(t){return t.label},xz=function(t){return t.label},bz=function(t){return t.value},wz=function(t){return!!t.isDisabled},Sz={clearIndicator:iF,container:q8,control:dF,dropdownIndicator:nF,group:mF,groupHeading:vF,indicatorsContainer:Q8,indicatorSeparator:aF,input:wF,loadingIndicator:uF,loadingMessage:V8,menu:L8,menuList:z8,menuPortal:H8,multiValue:kF,multiValueLabel:PF,multiValueRemove:TF,noOptionsMessage:B8,option:DF,placeholder:RF,singleValue:NF,valueContainer:X8},_z={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Cz=4,I_=4,Ez=38,kz=I_*2,Pz={baseUnit:I_,controlHeight:Ez,menuGutter:kz},rf={borderRadius:Cz,colors:_z,spacing:Pz},Tz={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:O1(),captureMenuScroll:!O1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:nz(),formatGroupLabel:yz,getOptionLabel:xz,getOptionValue:bz,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:wz,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!E8(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function B1(e,t,n,r){var i=A_(e,t,n),o=R_(e,t,n),a=L_(e,t),l=mu(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function dl(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return B1(e,a,t,l)}).filter(function(a){return U1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=B1(e,n,t,r);return U1(e,o)?o:void 0}).filter(T8)}function D_(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Jm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function V1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Jm(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function Oz(e,t){return D_(dl(e,t))}function U1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!z_(e)||!o)&&F_(e,{label:a,value:l,data:i},r)}function jz(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function Mz(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var of=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},L_=function(t,n){return t.getOptionLabel(n)},mu=function(t,n){return t.getOptionValue(n)};function A_(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function R_(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=mu(e,t);return n.some(function(i){return mu(e,i)===r})}function F_(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var z_=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},$z=1,N_=function(e){QR(n,e);var t=t8(n);function n(r){var i;if(XR(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var d=i.props,c=d.onChange,y=d.name;u.name=y,i.ariaOnChange(s,u),c(s,u)},i.setValue=function(s,u,d){var c=i.props,y=c.closeMenuOnSelect,p=c.isMulti,m=c.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:m}),y&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:d})},i.selectOption=function(s){var u=i.props,d=u.blurInputOnSelect,c=u.isMulti,y=u.name,p=i.state.selectValue,m=c&&i.isOptionSelected(s,p),g=i.isOptionDisabled(s,p);if(m){var w=i.getOptionValue(s);i.setValue(p.filter(function(h){return i.getOptionValue(h)!==w}),"deselect-option",s)}else if(!g)c?i.setValue([].concat(Jm(p),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:y});return}d&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,d=i.state.selectValue,c=i.getOptionValue(s),y=d.filter(function(m){return i.getOptionValue(m)!==c}),p=Ds(u,y,y[0]||null);i.onChange(p,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Ds(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,d=u[u.length-1],c=u.slice(0,u.length-1),y=Ds(s,c,c[0]||null);d&&i.onChange(y,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(s){return of(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return V1(dl(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];return b8.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return L_(i.props,s)},i.getOptionValue=function(s){return mu(i.props,s)},i.getStyles=function(s,u){var d=i.props.unstyled,c=Sz[s](u,d);c.boxSizing="border-box";var y=i.props.styles[s];return y?y(c,u):c},i.getClassNames=function(s,u){var d,c;return(d=(c=i.props.classNames)[s])===null||d===void 0?void 0:d.call(c,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return WF(i.props)},i.buildCategorizedOptions=function(){return dl(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return D_(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:Z({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,d=u.isMulti,c=u.menuIsOpen;i.focusInput(),c?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Ac(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,d=u&&u.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,d=u&&u.item(0);if(d){var c=Math.abs(d.clientX-i.initialTouchX),y=Math.abs(d.clientY-i.initialTouchY),p=5;i.userIsDragging=c>p||y>p}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,d=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),d=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:d>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return z_(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,d=u.isMulti,c=u.backspaceRemovesValue,y=u.escapeClearsValue,p=u.inputValue,m=u.isClearable,g=u.isDisabled,w=u.menuIsOpen,h=u.onKeyDown,v=u.tabSelectsValue,b=u.openMenuOnFocus,S=i.state,E=S.focusedOption,T=S.focusedValue,k=S.selectValue;if(!g&&!(typeof h=="function"&&(h(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||p)return;i.focusValue("previous");break;case"ArrowRight":if(!d||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(T)i.removeValue(T);else{if(!c)return;d?i.popValue():m&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!v||!E||b&&i.isOptionSelected(E,k))return;i.selectOption(E);break;case"Enter":if(s.keyCode===229)break;if(w){if(!E||i.isComposing)return;i.selectOption(E);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):m&&y&&i.clearValue();break;case" ":if(p)return;if(!w){i.openMenu("first");break}if(!E)return;i.selectOption(E);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++$z),i.state.selectValue=P1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=of(o,a[l])}return i}return KR(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&T1(this.menuListRef,this.focusedOptionRef),vz()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(T1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),d=i==="first"?0:u.length-1;if(!this.props.isMulti){var c=u.indexOf(l[0]);c>-1&&(d=c)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[d],focusedOptionId:this.getFocusedOptionId(u[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,d=-1;if(a.length){switch(i){case"previous":s===0?d=0:s===-1?d=u:d=s-1;break;case"next":s>-1&&s<u&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(rf):Z(Z({},rf),this.props.theme):rf}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,d=this.setValue,c=this.props,y=c.isMulti,p=c.isRtl,m=c.options,g=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:g,isMulti:y,isRtl:p,options:m,selectOption:u,selectProps:c,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return A_(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return R_(this.props,i,o)}},{key:"filterOption",value:function(i,o){return F_(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,d=i.form,c=i.menuIsOpen,y=i.required,p=this.getComponents(),m=p.Input,g=this.state,w=g.inputIsHidden,h=g.ariaSelection,v=this.commonProps,b=l||this.getElementId("input"),S=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":c,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":y,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},c&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?x.createElement(m,J({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:b,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:d,type:"text",value:s},S)):x.createElement(iz,J({id:b,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:pu,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:d,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,d=o.SingleValue,c=o.Placeholder,y=this.commonProps,p=this.props,m=p.controlShouldRenderValue,g=p.isDisabled,w=p.isMulti,h=p.inputValue,v=p.placeholder,b=this.state,S=b.selectValue,E=b.focusedValue,T=b.isFocused;if(!this.hasValue()||!m)return h?null:x.createElement(c,J({},y,{key:"placeholder",isDisabled:g,isFocused:T,innerProps:{id:this.getElementId("placeholder")}}),v);if(w)return S.map(function(C,M){var $=C===E,D="".concat(i.getOptionLabel(C),"-").concat(i.getOptionValue(C));return x.createElement(a,J({},y,{components:{Container:l,Label:s,Remove:u},isFocused:$,isDisabled:g,key:D,index:M,removeProps:{onClick:function(){return i.removeValue(C)},onTouchEnd:function(){return i.removeValue(C)},onMouseDown:function(j){j.preventDefault()}},data:C}),i.formatOptionLabel(C,"value"))});if(h)return null;var k=S[0];return x.createElement(d,J({},y,{data:k,isDisabled:g}),this.formatOptionLabel(k,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var c={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,J({},a,{innerProps:c,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!o||!u)return null;var c={"aria-hidden":"true"};return x.createElement(o,J({},a,{innerProps:c,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return x.createElement(a,J({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,J({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,d=o.MenuPortal,c=o.LoadingMessage,y=o.NoOptionsMessage,p=o.Option,m=this.commonProps,g=this.state.focusedOption,w=this.props,h=w.captureMenuScroll,v=w.inputValue,b=w.isLoading,S=w.loadingMessage,E=w.minMenuHeight,T=w.maxMenuHeight,k=w.menuIsOpen,C=w.menuPlacement,M=w.menuPosition,$=w.menuPortalTarget,D=w.menuShouldBlockScroll,A=w.menuShouldScrollIntoView,j=w.noOptionsMessage,F=w.onMenuScrollToTop,R=w.onMenuScrollToBottom;if(!k)return null;var L=function(U,G){var W=U.type,X=U.data,ee=U.isDisabled,pe=U.isSelected,we=U.label,ie=U.value,Ie=g===X,We=ee?void 0:function(){return i.onOptionHover(X)},He=ee?void 0:function(){return i.selectOption(X)},di="".concat(i.getElementId("option"),"-").concat(G),wt={id:di,onClick:He,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:pe};return x.createElement(p,J({},m,{innerProps:wt,data:X,isDisabled:ee,isSelected:pe,key:di,label:we,type:W,value:ie,isFocused:Ie,innerRef:Ie?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},O;if(this.hasOptions())O=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var U=N.data,G=N.options,W=N.index,X="".concat(i.getElementId("group"),"-").concat(W),ee="".concat(X,"-heading");return x.createElement(a,J({},m,{key:X,data:U,options:G,Heading:l,headingProps:{id:ee,data:N.data},label:i.formatGroupLabel(N.data)}),N.options.map(function(pe){return L(pe,"".concat(W,"-").concat(pe.index))}))}else if(N.type==="option")return L(N,"".concat(N.index))});else if(b){var P=S({inputValue:v});if(P===null)return null;O=x.createElement(c,m,P)}else{var I=j({inputValue:v});if(I===null)return null;O=x.createElement(y,m,I)}var z={minMenuHeight:E,maxMenuHeight:T,menuPlacement:C,menuPosition:M,menuShouldScrollIntoView:A},B=x.createElement(A8,J({},m,z),function(N){var U=N.ref,G=N.placerProps,W=G.placement,X=G.maxHeight;return x.createElement(s,J({},m,z,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:b,placement:W}),x.createElement(cz,{captureEnabled:h,onTopArrive:F,onBottomArrive:R,lockEnabled:D},function(ee){return x.createElement(u,J({},m,{innerRef:function(we){i.getMenuListRef(we),ee(we)},innerProps:{role:"listbox","aria-multiselectable":m.isMulti,id:i.getElementId("listbox")},isLoading:b,maxHeight:X,focusedOption:g}),O)}))});return $||M==="fixed"?x.createElement(d,J({},m,{appendTo:$,controlElement:this.controlRef,menuPlacement:C,menuPosition:M}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,d=o.required,c=this.state.selectValue;if(d&&!this.hasValue()&&!l)return x.createElement(pz,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var y=c.map(function(g){return i.getOptionValue(g)}).join(a);return x.createElement("input",{name:u,type:"hidden",value:y})}else{var p=c.length>0?c.map(function(g,w){return x.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(g)})}):x.createElement("input",{name:u,type:"hidden",value:""});return x.createElement("div",null,p)}else{var m=c[0]?this.getOptionValue(c[0]):"";return x.createElement("input",{name:u,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,d=o.selectValue,c=this.getFocusableOptions();return x.createElement(ZF,J({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:d,focusableOptions:c,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,d=u.className,c=u.id,y=u.isDisabled,p=u.menuIsOpen,m=this.state.isFocused,g=this.commonProps=this.getCommonProps();return x.createElement(l,J({},g,{className:d,innerProps:{id:c,onKeyDown:this.onKeyDown},isDisabled:y,isFocused:m}),this.renderLiveRegion(),x.createElement(o,J({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:y,isFocused:m,menuIsOpen:p}),x.createElement(s,J({},g,{isDisabled:y}),this.renderPlaceholderOrValue(),this.renderInput()),x.createElement(a,J({},g,{isDisabled:y}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,d=o.isFocused,c=o.prevWasFocused,y=o.instancePrefix,p=i.options,m=i.value,g=i.menuIsOpen,w=i.inputValue,h=i.isMulti,v=P1(m),b={};if(a&&(m!==a.value||p!==a.options||g!==a.menuIsOpen||w!==a.inputValue)){var S=g?Oz(i,v):[],E=g?V1(dl(i,v),"".concat(y,"-option")):[],T=l?jz(o,v):null,k=Mz(o,S),C=of(E,k);b={selectValue:v,focusedOption:k,focusedOptionId:C,focusableOptionsWithIds:E,focusedValue:T,clearFocusValueOnUpdate:!1}}var M=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},$=u,D=d&&c;return d&&!D&&($={value:Ds(h,v,v[0]||null),options:v,action:"initial-input-focus"},D=!c),(u==null?void 0:u.action)==="initial-input-focus"&&($=null),Z(Z(Z({},b),M),{},{prevProps:i,ariaSelection:$,prevWasFocused:D})}}]),n}(x.Component);N_.defaultProps=Tz;var Iz=x.forwardRef(function(e,t){var n=YR(e);return x.createElement(N_,J({ref:t},n))}),Rc=Iz;const Dz=_.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Lz=_.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Az=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>f.jsxs(Dz,{children:[f.jsx(Lz,{children:"Місто"}),f.jsx(Rc,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),Rz=_.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Fz=_.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,zz=({options:e=[],value:t,onChange:n,selectedCity:r})=>f.jsxs(Rz,{children:[f.jsx(Fz,{children:"Спосіб доставки"}),f.jsx(Rc,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),W1=_.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,H1=_.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Nz=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?f.jsxs(W1,{children:[f.jsx(H1,{children:"Відділення Нової пошти"}),f.jsx(Rc,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?f.jsxs(W1,{children:[f.jsx(H1,{children:"Адреса доставки (Укрпошта)"}),f.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,Bz=_.div`
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
`;_.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;const Vz=_.button`
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
`,Uz=_.ul`
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
`,Wz=_.li`
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
`,Hz=_.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,Gz=_.div`
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
`,qz=_.div`
  text-align: center;
  width: 100px;
 
`,Yz=_.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Xz=_.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Kz=_.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Qz=_.span`
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
`,Zz=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>f.jsxs(Bz,{children:[f.jsx("h3",{children:"Ваше замовлення"}),f.jsx(Uz,{children:e.map((o,a)=>{var c,y;const l=o.new_price&&o.new_price<o.price,s=l?o.new_price:o.price,u=l?Math.round((o.price-o.new_price)/o.price*100):0,d=s*(o.quantity||1);return f.jsxs(Wz,{children:[f.jsx(Hz,{src:((y=(c=o.images)==null?void 0:c[0])==null?void 0:y.url)||oo,alt:o.name}),f.jsxs(Gz,{children:[f.jsx("p",{className:"item-name",children:o.name}),f.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),f.jsx(qz,{children:f.jsxs(Yz,{children:[f.jsxs(Xz,{$discount:l,children:[d.toLocaleString()," грн"]}),l&&f.jsxs(f.Fragment,{children:[f.jsxs(Kz,{children:[(o.price*(o.quantity||1)).toLocaleString()," грн"]}),f.jsxs(Qz,{children:["-",u,"%"]})]})]})})]},`${o.id}-${a}`)})}),f.jsxs("div",{className:"summary-row",children:[f.jsxs("span",{children:["Товари (",n,")"]}),f.jsxs("span",{children:[t," грн"]})]}),f.jsxs("div",{className:"summary-row",children:[f.jsx("span",{children:"Доставка"}),f.jsx("span",{children:"За тарифами перевізника"})]}),f.jsx("hr",{}),f.jsxs("div",{className:"total",children:[f.jsx("span",{children:"Всього до сплати:"}),f.jsxs("span",{children:[t," грн"]})]}),f.jsx(Vz,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&f.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var B_={exports:{}};function Jz(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var af=Jz(x),eN=Du;function tN(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Zp(){return(Zp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function nN(e,t){e.prototype=Object.create(t.prototype),tN(e.prototype.constructor=e,t)}function rN(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function wi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var iN=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return u[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},G1=iN;function q1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function oN(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var aN={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},sN="_";function Y1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=sN),n==null&&(n=aN),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Nt(e,t){return e.permanents.indexOf(t)!==-1}function Fc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Nt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function X1(e,t){return t.split("").every(function(n,r){return Nt(e,r)||!Fc(e,r,n)})}function Zo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Nt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Nt(e,o)&&Fc(e,o,a)){i=o+1;break}}return i}function V_(e,t){return Zo(e,t)===e.mask.length}function Vn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Jp(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Nt(e,t.length);)t+=r[t.length];return t}if(t)return Jp(e,Vn(e,""),t,0);for(var o=0;o<r.length;o++)Nt(e,o)?t+=r[o]:t+=n;return t}function lN(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(d,c){return c<n||i<=c?d:Nt(e,c)?a[c]:o}).join("");for(var u=i;u<s.length;u++)Nt(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Vn(e,t)}function Jp(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=V_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;p=u,Nt(e,y=r)&&p!==i[y];){if(r>=t.length&&(t+=i[r]),d=u,c=r,o&&Nt(e,c)&&d===o)return!0;if(++r>=i.length)return!1}var d,c,y,p;return!Fc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Vn(e,t)):o||(t+=u),++r<i.length)}),t}function uN(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,Nt(e,u=r)&&d!==i[u];)if(++r>=i.length)return!1;var u,d;return(Fc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function cN(e,t){for(var n=t;0<=n;--n)if(!Nt(e,n))return n;return null}function da(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Nt(e,r))return r;return null}function sf(e){return e||e===0?e+"":""}function dN(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",d=0,c=0,y=Math.min(i.start,n.start);return n.end>i.start?c=(d=uN(e,r,u=s.slice(i.start,n.end),y))?i.length:0:s.length<r.length&&(c=r.length-s.length),s=r,c&&(c===1&&!i.length&&(y=i.start===n.start?da(e,n.start):cN(e,n.start)),s=lN(e,s,y,c)),s=Jp(e,s,u,y),(y+=d)>=o.length?y=o.length:y<a.length&&!d?y=a.length:y>=a.length&&y<l&&d&&(y=da(e,y)),u||(u=null),{value:s=Vn(e,s),enteredString:u,selection:{start:y,end:y}}}function fN(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function St(e){return typeof e=="function"}function pN(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function U_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function K1(e){return(U_()?pN():function(){return setTimeout(e,1e3/60)})(e)}function lf(e){(U_()||clearTimeout)(e)}var hN=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=K1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(lf(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var m=eN.findDOMNode(wi(wi(i))),g=typeof window<"u"&&m instanceof window.Element;if(m&&!g)return null;if(m.nodeName!=="INPUT"&&(m=m.querySelector("input")),!m)throw new Error("react-input-mask: inputComponent doesn't contain input node");return m},i.getInputValue=function(){var m=i.getInputDOMNode();return m?m.value:null},i.setInputValue=function(m){var g=i.getInputDOMNode();g&&(i.value=m,g.value=m)},i.setCursorToEnd=function(){var m=Zo(i.maskOptions,i.value),g=da(i.maskOptions,m);g!==null&&i.setCursorPosition(g)},i.setSelection=function(m,g,w){w===void 0&&(w={});var h=i.getInputDOMNode(),v=i.isFocused();h&&v&&(w.deferred||q1(h,m,g),i.selectionDeferId!==null&&lf(i.selectionDeferId),i.selectionDeferId=K1(function(){i.selectionDeferId=null,q1(h,m,g)}),i.previousSelection={start:m,end:g,length:Math.abs(g-m)})},i.getSelection=function(){return oN(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(m){i.setSelection(m,m)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var m=i.maskOptions,g=m.mask,w=m.maskChar,h=m.permanents,v=m.formatChars;return{mask:g,maskChar:w,permanents:h,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:v}},i.isInputAutofilled=function(m,g,w,h){var v=i.getInputDOMNode();try{if(v.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||h.end<w.length&&g.end===m.length},i.onChange=function(m){var g=wi(wi(i)).beforePasteState,w=wi(wi(i)).previousSelection,h=i.props.beforeMaskedValueChange,v=i.getInputValue(),b=i.value,S=i.getSelection();i.isInputAutofilled(v,S,b,w)&&(b=Vn(i.maskOptions,""),w={start:0,end:0,length:0}),g&&(w=g.selection,b=g.value,S={start:w.start+v.length,end:w.start+v.length,length:0},v=b.slice(0,w.start)+v+b.slice(w.end),i.beforePasteState=null);var E=dN(i.maskOptions,v,S,b,w),T=E.enteredString,k=E.selection,C=E.value;if(St(h)){var M=h({value:C,selection:k},{value:b,selection:w},T,i.getBeforeMaskedValueChangeConfig());C=M.value,k=M.selection}i.setInputValue(C),St(i.props.onChange)&&i.props.onChange(m),i.isWindowsPhoneBrowser?i.setSelection(k.start,k.end,{deferred:!0}):i.setSelection(k.start,k.end)},i.onFocus=function(m){var g=i.props.beforeMaskedValueChange,w=i.maskOptions,h=w.mask,v=w.prefix;if(i.focused=!0,i.mounted=!0,h){if(i.value)Zo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var b=Vn(i.maskOptions,v),S=Vn(i.maskOptions,b),E=Zo(i.maskOptions,S),T=da(i.maskOptions,E),k={start:T,end:T};if(St(g)){var C=g({value:S,selection:k},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=C.value,k=C.selection}var M=S!==i.getInputValue();M&&i.setInputValue(S),M&&St(i.props.onChange)&&i.props.onChange(m),i.setSelection(k.start,k.end)}i.runSaveSelectionLoop()}St(i.props.onFocus)&&i.props.onFocus(m)},i.onBlur=function(m){var g=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&X1(i.maskOptions,i.value)){var h="";St(g)&&(h=g({value:h,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var v=h!==i.getInputValue();v&&i.setInputValue(h),v&&St(i.props.onChange)&&i.props.onChange(m)}St(i.props.onBlur)&&i.props.onBlur(m)},i.onMouseDown=function(m){if(!i.focused&&document.addEventListener){i.mouseDownX=m.clientX,i.mouseDownY=m.clientY,i.mouseDownTime=new Date().getTime();var g=function w(h){if(document.removeEventListener("mouseup",w),i.focused){var v=Math.abs(h.clientX-i.mouseDownX),b=Math.abs(h.clientY-i.mouseDownY),S=Math.max(v,b),E=new Date().getTime()-i.mouseDownTime;(S<=10&&E<=200||S<=5&&E<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",g)}St(i.props.onMouseDown)&&i.props.onMouseDown(m)},i.onPaste=function(m){St(i.props.onPaste)&&i.props.onPaste(m),m.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(m){i.props.children==null&&St(i.props.inputRef)&&i.props.inputRef(m)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,d=r.defaultValue,c=r.value;i.maskOptions=Y1(o,a,l),d==null&&(d=""),c==null&&(c=d);var y=sf(c);if(i.maskOptions.mask&&(s||y)&&(y=Vn(i.maskOptions,y),St(u))){var p=r.value;r.value==null&&(p=d),y=u({value:y,selection:null},{value:p=sf(p),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=y,i}nN(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=fN(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,d=this.maskOptions,c=a||this.isFocused(),y=this.props.value!=null,p=y?sf(this.props.value):this.value,m=r?r.start:null;if(this.maskOptions=Y1(l,s,u),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var g=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||y||(p=this.getInputValue()),(g||this.maskOptions.mask&&(p||c))&&(p=Vn(this.maskOptions,p)),g){var w=Zo(this.maskOptions,p);(m===null||w<m)&&(m=V_(this.maskOptions,p)?w:da(this.maskOptions,w))}!this.maskOptions.mask||!X1(this.maskOptions,p)||c||y&&this.props.value||(p="");var h={start:m,end:m};if(St(o)){var v=o({value:p,selection:h},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());p=v.value,h=v.selection}this.value=p;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):g&&this.forceUpdate();var S=!1;h.start!=null&&h.end!=null&&(S=!r||r.start!==h.start||r.end!==h.end),(S||b)&&this.setSelection(h.start,h.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&lf(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=rN(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){St(o)||G1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Zp({},a);l.forEach(function(d){return delete s[d]}),r=o(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&G1(!1)}else r=af.createElement("input",Zp({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=af.cloneElement(r,u)},t}(af.Component),mN=hN;B_.exports=mN;var gN=B_.exports;const vN=Na(gN);_.div`
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
`;_.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;_.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;_.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
`;_.form`
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
`;const uf=_.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,cf=_.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,df=_.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f58220; /* Помаранчевий колір з кнопки */
  }
`;_.div`
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
`;const ff=_.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;_.button`
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
`;_.ul`
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
`;_.li`
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
`;_.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`;_.div`
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
`;const yN=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:"Контактні дані"}),f.jsxs(uf,{children:[f.jsx(cf,{children:"Прізвище та ім’я"}),f.jsx(df,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&f.jsx(ff,{children:n.fullName})]}),f.jsxs(uf,{children:[f.jsx(cf,{children:"Номер телефону"}),f.jsx(vN,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>f.jsx(df,{...i,type:"tel"})}),n.phone&&f.jsx(ff,{children:n.phone})]}),f.jsxs(uf,{children:[f.jsx(cf,{children:"E-mail"}),f.jsx(df,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&f.jsx(ff,{children:n.email})]})]})},xN=_.div`
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
`;_.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;const bN=_.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,wN=_.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
`;_.form`
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
`;_.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;_.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;_.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f58220; /* Помаранчевий колір з кнопки */
  }
`;_.div`
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
`;_.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;_.button`
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
`;_.ul`
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
`;_.li`
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
`;_.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`;_.div`
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
`;_.button`
`;const SN=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),f.jsx(Rc,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&f.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},pf={}.VITE_NP_API_KEY,Q1="https://api.novaposhta.ua/v2.0/json/",_N=()=>{const e=Ue(L=>L.cart.items),t=Zt(),n=vn();console.log("апі",pf);const[r,i]=x.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[o,a]=x.useState(""),[l,s]=x.useState(null),[u,d]=x.useState(null),[c,y]=x.useState(null),[p,m]=x.useState(null),[g,w]=x.useState([]),[h,v]=x.useState([]),[b,S]=x.useState(null),E=e.reduce((L,O)=>L+(O.new_price??O.price)*O.quantity,0),T=e.reduce((L,O)=>L+O.quantity,0),C=(()=>{const L=new Date().getFullYear().toString().slice(-2),O=Date.now().toString().slice(-4),P=Math.floor(100+Math.random()*900);return`${L}${O}${P}`})();console.log(C),x.useEffect(()=>{if(o.length<2)return;const L=setTimeout(async()=>{const P=await(await fetch(Q1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:pf,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:o}})})).json();w(P.data.map(I=>({value:I.Ref,label:I.Description})))},500);return()=>clearTimeout(L)},[o]),x.useEffect(()=>{if(!l||u!=="nova")return;(async()=>{const P=await(await fetch(Q1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:pf,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:l.value}})})).json();v(P.data.map(I=>({value:I.Ref,label:I.Description})))})()},[l,u]);const M=L=>{s(L),i(O=>({...O,city:(L==null?void 0:L.label)||"",postOffice:""})),d(null),y(null),m(null)},$=()=>{const L={};return r.fullName.trim().split(" ").length<2&&(L.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(L.email="Некоректний email"),r.phone.replace(/\D/g,"").length<12&&(L.phone="Номер неповний"),l||(L.city=!0),u==="nova"&&!c&&(L.postOffice=!0),u==="ukr"&&!p&&(L.postOffice=!0),u||(L.delivery=!0),b||(L.payment=!0),L},D=x.useMemo($,[r,u,c,p,l,b]),A=Object.keys(D).length===0&&e.length>0,j=async L=>{if(L.preventDefault(),!b){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:r.fullName,phone:r.phone,email:r.email,city:r.city,products:e==null?void 0:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity,price:P.new_price??P.price})),status_order:"pending",order_number:C,payment_method:b==="liqpay"?"Онлайн (LiqPay)":b==="cod"?"Післяплата":b==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз"}})}),b==="liqpay"){const P=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:E,order_number:C})}),{data:I,signature:z}=await P.json(),B=document.createElement("form");B.method="POST",B.action="https://www.liqpay.ua/api/3/checkout",B.innerHTML=`
        <input type="hidden" name="data" value="${I}" />
        <input type="hidden" name="signature" value="${z}" />
      `,document.body.appendChild(B),B.requestSubmit();return}const O={...r,name:r.fullName,city:l.label,deliveryMethod:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз",products:e==null?void 0:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity,price:P.new_price??P.price})),total:E,order_number:C,delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз",payment_method:b==="liqpay"?"Онлайн (LiqPay)":b==="cod"?"Післяплата":b==="bank_transfer"?"Оплата за реквізитами":""};n(vm()),t("/order-confirmation",{state:{order:O}})}catch(O){console.error(O),alert("Помилка оформлення")}},F=x.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),R=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return f.jsx(xN,{children:f.jsxs(bN,{children:[f.jsxs(wN,{children:[f.jsx(yN,{formData:r,setFormData:i,errors:D}),f.jsx(Az,{cityOptions:g,selectedCity:l,onChange:M,onInputChange:a}),f.jsx(zz,{options:F,value:u,onChange:d,selectedCity:l}),f.jsx(Nz,{deliveryMethod:u,officeOptions:h,selectedOffice:c,selectedUkrOffice:p,setSelectedOffice:y,setSelectedUkrOffice:m}),f.jsx(SN,{options:R,value:b,onChange:S,error:D.payment})]}),f.jsx(Zz,{cartItems:e,totalAmount:E,totalQuantity:T,isFormValid:A,handleSubmit:j})]})})},CN=_.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,EN=_.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,Ar=_.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,kN=_.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,PN=_.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,TN=_.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,ON=_.li`
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
`;_.div`
  background: #fff4e5; 
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #ffe3c1;
`;const jN=_.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,Z1=_.button`
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
`,MN=()=>{var y,p;const e=Zt(),t=er(),[n]=ME(),r=vn(),i=(y=t.state)==null?void 0:y.order,o=n.get("orderId"),[a,l]=x.useState(i||null),[s,u]=x.useState(!i);x.useEffect(()=>{r(vm())},[r]),x.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(m=>m.json()).then(m=>{var g;((g=m.data)==null?void 0:g.length)>0&&l(m.data[0]),u(!1)}).catch(()=>u(!1)):u(!1))},[o,i]),console.log(a);const c=((a==null?void 0:a.products)??[]).reduce((m,g)=>m+Number(g.new_price??g.price)*(g.quantity||1),0);return s?f.jsx("div",{children:"Завантаження..."}):a?f.jsxs(CN,{children:[f.jsx(EN,{children:"Дякуємо за ваше замовлення!"}),f.jsxs(Ar,{children:["Ваше замовлення ",f.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),f.jsx(Ar,{children:"Ми зв’яжемось з Вами в найближчий час"}),f.jsxs(kN,{children:[f.jsx(PN,{children:"Деталі замовлення:"}),f.jsx(TN,{children:(p=a.products)==null?void 0:p.map(m=>f.jsxs(ON,{children:[f.jsxs("span",{className:"item-info",children:[m.name," (x",m.quantity,")"]}),f.jsxs("span",{className:"item-price",children:[(m.new_price??m.price)*(m.quantity||1)," грн"]})]},m.id))}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"На суму:"})," ",c," грн."]}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),f.jsxs(jN,{children:[f.jsx(Z1,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),f.jsx(Z1,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):f.jsxs("div",{children:["Замовлення не знайдено",f.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},$N=_.section`
  background-color: var(--second-background);
`,IN=_.div`
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
`,DN=_.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,LN=_.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,AN=_.p`

  font-size: 16px;
  color: #666;
`,RN=_.section`
  margin-bottom: 50px;
`,FN=_.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,zN=_.section`
  margin-bottom: 60px;
`,NN=_.h2`
  margin-bottom: 30px;
`,BN=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Ls=_.div`
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
`,VN=()=>f.jsxs($N,{children:[f.jsxs(IN,{children:[f.jsxs(DN,{children:[f.jsx(LN,{children:"Про Дідів Хлів"}),f.jsx(AN,{children:"Даємо друге життя якісним велозапчастинам"})]}),f.jsxs(RN,{children:[f.jsx(FN,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),f.jsx(O2,{})]}),f.jsxs(zN,{children:[f.jsx(NN,{children:"Наша майстерня"}),f.jsxs(BN,{children:[f.jsx(Ls,{color:"#e2e2e2",children:"Фото майстерні"}),f.jsx(Ls,{color:"#d1d1d1",children:"Процес діагностики"}),f.jsx(Ls,{color:"#bcbcbc",children:"Склад запчастин"}),f.jsx(Ls,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),UN=()=>{const{pathname:e}=er();return x.useEffect(()=>{window.scrollTo(0,0)},[e]),null},WN=_.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,HN=_.div`
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
`,GN=_.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,qN=_.p`
  color: #585555;
  margin-bottom: 40px;
`,YN=_.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,XN=_.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,As=_.div`
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
`,KN=_.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,QN=_.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,ZN=_.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,JN=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,J1=_.a`
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
`;_.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;const e7=_.div`
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

 
`,t7=()=>f.jsx(WN,{children:f.jsxs(HN,{children:[f.jsx(GN,{children:"Контакти"}),f.jsx(qN,{children:"Зв’яжіться з нами для консультації або замовлення"}),f.jsxs(YN,{children:[f.jsxs(XN,{children:[f.jsxs(As,{children:[f.jsx("h3",{children:"Адреса"}),f.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),f.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),f.jsxs(As,{children:[f.jsx("h3",{children:"Телефон"}),f.jsx("p",{children:"+38 (097) 123-45-67"})]}),f.jsxs(As,{children:[f.jsx("h3",{children:"Email"}),f.jsx("p",{children:"didivhliv.com"})]}),f.jsxs(As,{children:[f.jsx("h3",{children:"Графік роботи"}),f.jsx("p",{children:"З 11:00 - 20:00"}),f.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),f.jsxs(KN,{children:[f.jsx(QN,{children:"Ми в соцмережах"}),f.jsx(ZN,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),f.jsxs(JN,{children:[f.jsxs(J1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${pn}#icon-instagram`})}),f.jsx("span",{children:"Instagram"})]}),f.jsxs(J1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${pn}#icon-telegram`})}),f.jsx("span",{children:"Telegram"})]})]}),f.jsx(e7,{children:"Приєднуйся до спільноти!"})]})]})]})}),n7=_.section`
  background-color:  var(--second-background);
`,r7=_.div`
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
  
`,i7=_.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,o7=_.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,a7=_.div`
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
`,s7=_.div`
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
`,l7=_.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,u7=_.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,c7=_.p`
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
 
`;_.p`
 font-size: 17px;
    font-weight: 800;
 
`;_.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;_.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const d7=_.div.attrs({className:"card-buttons"})`
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
`,W_=_.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
  margin-top: auto; 
 padding-top: 40px; 
`,Hi=_.button`
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
`,f7=_.div`
  position: relative;
  display: inline-block;
  

`,p7=_.button`
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
`,h7=_.div`
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
`,Si=_.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,H_=_.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,G_=_(Pe)`
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
  
`,m7=_.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,g7=_.div`
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
`,v7=_.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,y7=_.h1`

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

`,x7=_.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,b7=_.div`
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
`;_.div`
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
`;const w7=_.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding: 20px;
`,S7=_.p`
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
`,_7=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px 16px;
`;_.span`
  font-size: 16px;
  font-weight: 700;

  &:last-child {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    font-weight: 400;
  }
`;const C7=_.div.attrs({className:"card-buttons"})`
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
`,gu=_.button`
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
`;_.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;_.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const E7=_.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,k7=_.div`
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
`,_i=_.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,P7=_.button`
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
`,T7=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),i=Ue(E=>E.favorites.items),o=Ue(E=>E.cart.items),[a,l]=x.useState(!1),[s,u]=x.useState("date"),[d,c]=x.useState("asc"),[y,p]=x.useState(1),[m,g]=x.useState(1),w=Zt(),h=vn(),v=x.useRef(null);x.useEffect(()=>{const E=T=>{v.current&&!v.current.contains(T.target)&&l(!1)};return document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[y]),x.useEffect(()=>{(async()=>{const T=new Date,k=new Date;k.setDate(T.getDate()-7);const C=k.toISOString();try{r(!0);const M=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${C}&pagination[page]=${y}&pagination[pageSize]=24`);if(!M.ok)throw new Error(`HTTP error! Status: ${M.status}`);const $=await M.json();t($.data),g($.meta.pagination.pageCount)}catch(M){console.error("Помилка при завантаженні продуктів:",M)}finally{r(!1)}})()},[y]);const b=x.useMemo(()=>{const E=[...e],T=k=>k.new_price&&k.new_price<k.price?k.new_price:k.price;switch(s){case"name":return E.sort((k,C)=>d==="asc"?k.name.localeCompare(C.name):C.name.localeCompare(k.name));case"price":return E.sort((k,C)=>{const M=T(k),$=T(C);return d==="asc"?M-$:$-M});case"date":return E.sort((k,C)=>d==="asc"?new Date(k.createdAt)-new Date(C.createdAt):new Date(C.createdAt)-new Date(k.createdAt));default:return E}},[s,e,d]),S=(E,T)=>{T.stopPropagation();const k=i.some(C=>C.id===E.id);h(ui(E)),k?Y.warning(`${E.name} видалено з обраного`):Y.info(`${E.name} додано в обране`)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ja,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):b.length===0?f.jsxs(H_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),f.jsxs(G_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(Bu,{size:24})]})]}):f.jsxs(n7,{children:[f.jsxs(r7,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(i7,{children:[f.jsx(o7,{children:"Нові товари "}),f.jsxs(f7,{ref:v,children:[f.jsxs(p7,{onClick:()=>l(E=>!E),children:["Сортування",f.jsx(Nu,{strokeWidth:.9,size:22})]}),a&&f.jsxs(h7,{children:[f.jsx(Si,{onClick:()=>{u("name"),c("asc"),l(!1)},children:"А-Я"}),f.jsx(Si,{onClick:()=>{u("name"),c("desc"),l(!1)},children:"Я-А"}),f.jsx(Si,{onClick:()=>{u("price"),c("asc"),l(!1)},children:"Ціна ↑"}),f.jsx(Si,{onClick:()=>{u("price"),c("desc"),l(!1)},children:"Ціна ↓"}),f.jsx(Si,{onClick:()=>{u("date"),c("desc"),l(!1)},children:"Спочатку новіші"}),f.jsx(Si,{onClick:()=>{u("date"),c("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(a7,{children:b.map(E=>{var R,L;const T=i.some(O=>O.id===E.id),k=(E==null?void 0:E.available)??!0,C=o.find(O=>O.id===E.id),$=(C?C.quantity:0)>=(E.stock||0),D=E.new_price&&E.new_price<E.price,A=D?E.new_price:E.price,j=D?Math.round((E.price-E.new_price)/E.price*100):0,F=(O,P)=>{if(P.stopPropagation(),$){Y.error("Товар уже у кошику");return}h(vo({...O,quantity:1})),Y.success(`${O.name} додано в кошик!`)};return f.jsxs(s7,{onClick:()=>w(`/product/${E.id}`),children:[!k&&f.jsx(ym,{children:"Заброньовано"}),f.jsx(l7,{src:((L=(R=E.images)==null?void 0:R[0])==null?void 0:L.url)||oo,alt:E.name}),f.jsx(c7,{children:E.name}),f.jsxs(u7,{children:[f.jsx(jc,{children:f.jsxs(Mc,{children:[f.jsxs($c,{$discount:D,children:[A.toLocaleString()," грн"]}),D&&f.jsxs(Ic,{children:[E.price.toLocaleString()," грн"]}),D&&f.jsxs(Dc,{children:["-",j,"%"]})]})}),f.jsxs(d7,{children:[k&&f.jsx(gu,{onClick:O=>F(E,O),children:f.jsx(go,{size:24,color:C?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(gu,{onClick:O=>S(E,O),children:f.jsx(Ya,{size:24,fill:T?"#ff4d4f":"none",color:T?"#ff4d4f":"#000000",strokeWidth:T?1:2})})]})]})]},E.id)})}),f.jsxs(W_,{children:[f.jsx(Hi,{onClick:()=>p(E=>Math.max(E-1,1)),disabled:y===1,children:"Назад"}),Array.from({length:m},(E,T)=>f.jsx(Hi,{onClick:()=>p(T+1),active:y===T+1,children:T+1},T)),f.jsx(Hi,{onClick:()=>p(E=>Math.min(E+1,m)),disabled:y===m,children:"Вперед"})]})]})," "]})},O7=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),[i,o]=x.useState(!1),[a,l]=x.useState("date"),[s,u]=x.useState("desc"),[d,c]=x.useState(1),y=24;console.log(i);const p=Zt(),m=vn(),g=Ue(C=>C.favorites.items),w=Ue(C=>C.cart.items),h=x.useRef(null);x.useEffect(()=>{const C=M=>{h.current&&!h.current.contains(M.target)&&o(!1)};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[]),x.useEffect(()=>{(async()=>{const M="https://backenddidiv-production.up.railway.app";try{const D=await(await fetch(`${M}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json();console.log(D.data),t(D.data),r(!1)}catch($){console.log($)}})()},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[d]);const v=x.useMemo(()=>{const C=[...e];switch(a){case"name":return C.sort((M,$)=>s==="asc"?M.name.localeCompare($.name):$.name.localeCompare(M.name));case"price":return C.sort((M,$)=>s==="asc"?M.new_price-$.new_price:$.new_price-M.new_price);case"date":return C.sort((M,$)=>s==="asc"?new Date(M.createdAt)-new Date($.createdAt):new Date($.createdAt)-new Date(M.createdAt));default:return C}},[a,e,s]),b=d*y,S=b-y,E=v.slice(S,b),T=Math.ceil(e.length/y),k=(C,M)=>{M.stopPropagation();const $=g.some(D=>D.id===C.id);m(ui(C)),$?Y.warning(`${C.name} видалено з обраного`):Y.info(`${C.name} додано в обране`)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ja,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?f.jsxs(H_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),f.jsxs(G_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(Bu,{size:24})]})]}):f.jsx(m7,{children:f.jsxs(g7,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(v7,{children:[f.jsx(y7,{children:"Акційні товари"}),f.jsxs(E7,{ref:h,children:[f.jsxs(P7,{onClick:()=>o(C=>!C),children:["Сортування",f.jsx(Nu,{strokeWidth:.9,size:22})]}),i&&f.jsxs(k7,{children:[f.jsx(_i,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),f.jsx(_i,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),f.jsx(_i,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(_i,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(_i,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(_i,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(x7,{children:E.map(C=>{var P,I;const M=C.new_price&&C.new_price<C.price,$=M?C.new_price:C.price,D=(C==null?void 0:C.available)??!0,A=M?Math.round((C.price-C.new_price)/C.price*100):0,j=g.some(z=>z.id===C.id),F=w.find(z=>z.id===C.id),L=(F?F.quantity:0)>=(C.stock||0),O=(z,B)=>{if(B.stopPropagation(),L){Y.error("Товар уже у кошику");return}m(vo({...z,quantity:1})),Y.success(`${z.name} додано в кошик!`)};return f.jsxs(b7,{onClick:()=>p(`/product/${C.id}`),style:{cursor:"pointer"},children:[!D&&f.jsx(ym,{children:"Заброньовано"}),f.jsx(w7,{src:((I=(P=C.images)==null?void 0:P[0])==null?void 0:I.url)||"/nofoto.png"}),f.jsx(S7,{children:C.name}),f.jsxs(_7,{children:[f.jsx(jc,{children:f.jsxs(Mc,{children:[f.jsxs($c,{$discount:M,children:[$.toLocaleString()," грн"]}),M&&f.jsxs(Ic,{children:[C.price.toLocaleString()," грн"]}),M&&f.jsxs(Dc,{children:["-",A,"%"]})]})}),f.jsxs(C7,{children:[D&&f.jsx(gu,{onClick:z=>O(C,z),children:f.jsx(go,{size:24,color:F?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(gu,{onClick:z=>k(C,z),children:f.jsx(Ya,{size:24,fill:j?"#ff4d4f":"none",color:j?"#ff4d4f":"#000000",strokeWidth:j?1:2})})]})]})]},C.id)})}),v.length>y&&f.jsxs(W_,{children:[f.jsx(Hi,{onClick:()=>c(C=>Math.max(C-1,1)),disabled:d===1,children:"Назад"}),Array.from({length:T},(C,M)=>f.jsx(Hi,{onClick:()=>c(M+1),active:d===M+1,children:M+1},M)),f.jsx(Hi,{onClick:()=>c(C=>Math.min(C+1,T)),disabled:d===T,children:"Вперед"})]})]})})},j7=_.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;

`,M7=_.div`
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
        margin-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 580px;
    padding: 48px;
        margin-top: 130px;
  }
`,$7=_.button`
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
`,I7=_.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width:768px){
    font-size:42px;
  }
`,D7=_.p`
  text-align:center;
  color:#8d837d;

  margin-bottom:32px;
`,L7=_.div`
  display:flex;

  background:#efe8df;

  border-radius:40px;

  padding:5px;

  margin-bottom:35px;
`,ey=_.button`
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
`,Vo=_.input`
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
`,A7=_.button`
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
`,ty=_.div`
  position: relative;
  width: 100%;
 
`,ny=_.button`
  position: absolute;
  top:40%;
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
`,R7=_.p`
  margin-top:28px;

  text-align:center;

  color:#8b817a;

  font-size:15px;

  span{
      color:#ff7a00;
      cursor:pointer;
      font-weight:600;
  }
`,F7=({isOpen:e,onClose:t,mode:n,setMode:r,localFavorites:i})=>{const[o,a]=x.useState(!1),[l,s]=x.useState(!1),[u,d]=x.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""});console.log(u);const c=async(w,h,v)=>{w.length&&await Promise.all(w.map(async b=>{console.log(b);const S=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{Authorization:`Bearer ${h}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:b.documentId,user:v}})});S.ok||console.error(await S.json())}))};if(x.useEffect(()=>{const w=h=>{h.key==="Escape"&&t()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[t]),!e)return null;const y=w=>{d(h=>({...h,[w.target.name]:w.target.value}))},p=w=>{w.target===w.currentTarget&&t()},m=async()=>{var v;const w=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:u.email,password:u.password})}),h=await w.json();if(!w.ok){alert(((v=h.error)==null?void 0:v.message)||"Помилка авторизації");return}localStorage.setItem("token",h.jwt),localStorage.setItem("user",JSON.stringify(h.user)),await c(i,h.jwt,h.user.documentId),t()},g=async()=>{if(u.password!==u.confirmPassword){alert("Паролі не співпадають");return}const h=await(await fetch("https://backenddidiv-production.up.railway.app/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u.email,email:u.email,password:u.password})})).json();console.log(h),localStorage.setItem("token",h.jwt);try{const v=localStorage.getItem("token");if(localStorage.setItem("user",JSON.stringify(h.user)),!(await fetch(`https://backenddidiv-production.up.railway.app/api/users/${h.user.id}`,{method:"PUT",headers:{Authorization:`Bearer ${v}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:u.first_name,last_name:u.last_name})})).ok)throw new Error("Помилка оновлення")}catch(v){console.error(v),alert("Не вдалося оновити дані")}t()};return f.jsxs(f.Fragment,{children:["      ",f.jsx(Dn,{autoClose:1500}),f.jsx(j7,{onClick:p,children:f.jsxs(M7,{children:[f.jsx($7,{onClick:t,children:"×"}),f.jsx(I7,{children:n==="login"?"Вхід":"Реєстрація"}),f.jsx(D7,{children:n==="login"?"Увійдіть до свого акаунта":"Створіть новий акаунт"}),f.jsxs(L7,{children:[f.jsx(ey,{active:n==="login",onClick:()=>r("login"),children:"Вхід"}),f.jsx(ey,{active:n==="register",onClick:()=>r("register"),children:"Реєстрація"})]}),n==="register"&&f.jsxs(f.Fragment,{children:[f.jsx(Vo,{name:"first_name",value:u.first_name,onChange:y,placeholder:"Ім'я"}),f.jsx(Vo,{name:"last_name",value:u.last_name,onChange:y,placeholder:"Прізвище"})]}),f.jsx(Vo,{name:"email",type:"email",value:u.email,onChange:y,placeholder:"Email"}),f.jsxs(ty,{children:[f.jsx(Vo,{name:"password",type:o?"text":"password",value:u.password,onChange:y,placeholder:"Пароль"}),f.jsx(ny,{type:"button",onClick:()=>a(w=>!w),children:o?f.jsx(G0,{size:20}):f.jsx(q0,{size:20})})]}),n==="register"&&f.jsxs(ty,{children:[f.jsx(Vo,{name:"confirmPassword",type:l?"text":"password",value:u.confirmPassword,onChange:y,placeholder:"Повторіть пароль"}),f.jsx(ny,{type:"button",onClick:()=>s(w=>!w),children:o?f.jsx(G0,{size:20}):f.jsx(q0,{size:20})})]}),f.jsx(A7,{onClick:n==="login"?m:g,children:n==="login"?"Увійти":"Зареєструватися"}),f.jsx(R7,{children:n==="login"?f.jsxs(f.Fragment,{children:["Немає акаунта?"," ",f.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):f.jsxs(f.Fragment,{children:["Вже є акаунт?"," ",f.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})," "]})},z7=({isLoggedIn:e,children:t})=>e?t:f.jsx(Iy,{to:"/",replace:!0}),N7=_.main`
 width: 100%;
  max-width: 750px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width:1200px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
   max-width: 1448px;
    display: grid;
    grid-template-columns: 290px 1fr;
    gap: 40px;
    align-items: start;
  }

`,B7=_.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`,V7=_.aside`
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 1440px) {
    position: sticky;
    top: 110px;
  }
`,U7=_.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,W7=_.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,H7=_.h3`
  margin-bottom: 4px;
`,G7=_.p`
  color: #777;
`,ry=_.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Rs=_(Ay)`
  height: 48px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
      display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;



  background: ${({$active:e})=>e?"#5b4637":"transparent"};

  color: ${({$active:e})=>e?"#fff":"#333"};

  transition: .25s;

  &:hover {
    background: ${({$active:e})=>e?"#5b4637":"#f5f1ec"};
  }
`,q7=()=>{var o,a;const[e,t]=x.useState(""),[n,r]=x.useState("");x.useEffect(()=>{(async()=>{try{const s=localStorage.getItem("token"),d=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${s}`}})).json();t(d.first_name),r(d.email)}catch(s){console.error(s)}})()},[]);const i=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),Iy("/")};return f.jsxs(V7,{children:[f.jsxs(U7,{children:[f.jsx(W7,{children:((a=(o=e||e)==null?void 0:o[0])==null?void 0:a.toUpperCase())||"?"}),f.jsxs("div",{children:[f.jsx(H7,{children:e}),f.jsx(G7,{children:n})]})]}),f.jsxs(ry,{children:[f.jsxs(ry,{children:[f.jsx(Rs,{$active:!0,to:"/account/profile",children:"Особисті дані"}),f.jsx(Rs,{to:"/account/orders",children:"Замовлення"}),f.jsx(Rs,{to:"/account/password",children:"Змінити пароль"})]}),f.jsx(Rs,{onClick:i,children:"Вийти"})]})]})};var og={};og.match=J7;og.parse=q_;var Y7=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,X7=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,K7=/^(?:(min|max)-)?(.+)/,Q7=/(em|rem|px|cm|mm|in|pt|pc)?$/,Z7=/(dpi|dpcm|dppx)?$/;function J7(e,t){return q_(e).some(function(n){var r=n.inverse,i=n.type==="all"||t.type===n.type;if(i&&r||!(i||r))return!1;var o=n.expressions.every(function(a){var l=a.feature,s=a.modifier,u=a.value,d=t[l];if(!d)return!1;switch(l){case"orientation":case"scan":return d.toLowerCase()===u.toLowerCase();case"width":case"height":case"device-width":case"device-height":u=ay(u),d=ay(d);break;case"resolution":u=oy(u),d=oy(d);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":u=iy(u),d=iy(d);break;case"grid":case"color":case"color-index":case"monochrome":u=parseInt(u,10)||1,d=parseInt(d,10)||0;break}switch(s){case"min":return d>=u;case"max":return d<=u;default:return d===u}});return o&&!r||!o&&r})}function q_(e){return e.split(",").map(function(t){t=t.trim();var n=t.match(Y7),r=n[1],i=n[2],o=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(l){var s=l.match(X7),u=s[1].toLowerCase().match(K7);return{modifier:u[1],feature:u[2],value:s[2]}}),a})}function iy(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function oy(e){var t=parseFloat(e),n=String(e).match(Z7)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function ay(e){var t=parseFloat(e),n=String(e).match(Q7)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var e9=og.match,sy=typeof window<"u"?window.matchMedia:null;function t9(e,t,n){var r=this,i;sy&&!n&&(i=sy.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=e9(e,t),this.media=e),this.addListener=o,this.removeListener=a,this.dispose=s;function o(u){i&&i.addListener(u)}function a(u){i&&i.removeListener(u)}function l(u){r.matches=u.matches,r.media=u.media}function s(){i&&i.removeListener(l)}}function n9(e,t,n){return new t9(e,t,n)}var r9=n9;const i9=Na(r9);var o9=/[A-Z]/g,a9=/^ms-/,hf={};function s9(e){return"-"+e.toLowerCase()}function Y_(e){if(hf.hasOwnProperty(e))return hf[e];var t=e.replace(o9,s9);return hf[e]=a9.test(t)?"-"+t:t}function l9(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let o=0;o<i;o++){const a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var X_={exports:{}},u9="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",c9=u9,d9=c9;function K_(){}function Q_(){}Q_.resetWarningCache=K_;var f9=function(){function e(r,i,o,a,l,s){if(s!==d9){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Q_,resetWarningCache:K_};return n.PropTypes=n,n};X_.exports=f9();var p9=X_.exports;const fe=Na(p9),pt=fe.oneOfType([fe.string,fe.number]),ag={all:fe.bool,grid:fe.bool,aural:fe.bool,braille:fe.bool,handheld:fe.bool,print:fe.bool,projection:fe.bool,screen:fe.bool,tty:fe.bool,tv:fe.bool,embossed:fe.bool},Z_={orientation:fe.oneOf(["portrait","landscape"]),scan:fe.oneOf(["progressive","interlace"]),aspectRatio:fe.string,deviceAspectRatio:fe.string,height:pt,deviceHeight:pt,width:pt,deviceWidth:pt,color:fe.bool,colorIndex:fe.bool,monochrome:fe.bool,resolution:pt,type:Object.keys(ag)},{type:SB,...h9}=Z_,J_={minAspectRatio:fe.string,maxAspectRatio:fe.string,minDeviceAspectRatio:fe.string,maxDeviceAspectRatio:fe.string,minHeight:pt,maxHeight:pt,minDeviceHeight:pt,maxDeviceHeight:pt,minWidth:pt,maxWidth:pt,minDeviceWidth:pt,maxDeviceWidth:pt,minColor:fe.number,maxColor:fe.number,minColorIndex:fe.number,maxColorIndex:fe.number,minMonochrome:fe.number,maxMonochrome:fe.number,minResolution:pt,maxResolution:pt,...h9},m9={...ag,...J_};var g9={all:m9,types:ag,matchers:Z_,features:J_};const v9=e=>`not ${e}`,y9=(e,t)=>{const n=Y_(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?v9(n):`(${n}: ${t})`},x9=e=>e.join(" and "),b9=e=>{const t=[];return Object.keys(g9.all).forEach(n=>{const r=e[n];r!=null&&t.push(y9(n,r))}),x9(t)},w9=x.createContext(void 0),S9=e=>e.query||b9(e),ly=e=>e?Object.keys(e).reduce((n,r)=>(n[Y_(r)]=e[r],n),{}):void 0,eC=()=>{const e=x.useRef(!1);return x.useEffect(()=>{e.current=!0},[]),e.current},_9=e=>{const t=x.useContext(w9),n=()=>ly(e)||ly(t),[r,i]=x.useState(n);return x.useEffect(()=>{const o=n();l9(r,o)||i(o)},[e,t]),r},C9=e=>{const t=()=>S9(e),[n,r]=x.useState(t);return x.useEffect(()=>{const i=t();n!==i&&r(i)},[e]),n},E9=(e,t)=>{const n=()=>i9(e,t||{},!!t),[r,i]=x.useState(n),o=eC();return x.useEffect(()=>{if(o){const a=n();return i(a),()=>{a&&a.dispose()}}},[e,t]),r},k9=e=>{const[t,n]=x.useState(e.matches);return x.useEffect(()=>{const r=i=>{n(i.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},P9=(e,t,n)=>{const r=_9(t),i=C9(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const o=E9(i,r),a=k9(o),l=eC();return x.useEffect(()=>{l&&n&&n(a)},[a]),x.useEffect(()=>()=>{o&&o.dispose()},[]),a},T9=_.div`
  margin-bottom: 24px;
`,O9=_.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,j9=_.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,M9=_.h3`
  margin-bottom: 4px;
`,$9=_.p`
  color: #777;
`,I9=_.button`
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
`,D9=_.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`,Uo=_(Ay)`
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
`,L9=()=>{var s,u;const[e,t]=x.useState(!1),[n,r]=x.useState(""),[i,o]=x.useState("");x.useEffect(()=>{(async()=>{try{const c=localStorage.getItem("token"),p=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${c}`}})).json();r(p.first_name),o(p.email)}catch(c){console.error(c)}})()},[]);const l={"/account":"Особисті дані","/account/profile":"Особисті дані","/account/orders":"Замовлення","/account/favorites":"Обране","/account/password":"Змінити пароль"}[location.pathname]||"Особисті дані";return f.jsxs(T9,{children:[f.jsxs(O9,{children:[f.jsx(j9,{children:((u=(s=n||n)==null?void 0:s[0])==null?void 0:u.toUpperCase())||"?"}),f.jsxs("div",{children:[f.jsx(M9,{children:n}),f.jsx($9,{children:i})]})]}),f.jsxs(I9,{onClick:()=>t(d=>!d),children:[l,e?f.jsx(ij,{size:22}):f.jsx(nj,{size:22})]}),e&&f.jsxs(D9,{children:[f.jsx(Uo,{to:"/account/profile",onClick:()=>t(!1),children:"Особисті дані"}),f.jsx(Uo,{to:"/account/orders",onClick:()=>t(!1),children:"Замовлення"}),f.jsx(Uo,{to:"/account/favorites",onClick:()=>t(!1),children:"Обране"}),f.jsx(Uo,{to:"/account/password",onClick:()=>t(!1),children:"Змінити пароль"}),f.jsx(Uo,{to:"/",children:"Вийти"})]})]})},A9=()=>{const e=P9({maxWidth:767});return console.log("AccountPage rendered"),f.jsxs(N7,{className:"container",children:[e?f.jsx(L9,{}):f.jsx(q7,{}),f.jsx(B7,{children:f.jsx(Dy,{})})]})},R9=_.div`
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
`,F9=_.h2`
  margin-bottom: 28px;
`,Fs=_.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,zs=_.input`
  height: 52px;

  padding: 0 18px;

  border-radius: 14px;
  border: 1px solid #ddd;

  &:focus {
    outline: none;
    border-color: #ef7d1a;
  }
`,z9=_.button`
  width: 220px;
  height: 52px;

  border: none;
  border-radius: 14px;

  background: #ef7d1a;
  color: white;

  cursor: pointer;
`,uy=()=>{const[e,t]=x.useState({first_name:"",last_name:"",email:"",phone:""}),[n,r]=x.useState(null),[i,o]=x.useState(!0);x.useEffect(()=>{(async()=>{try{const u=localStorage.getItem("token"),c=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${u}`}})).json();r(c.id),t({first_name:c.first_name||"",last_name:c.last_name||"",email:c.email||"",phone:c.phone||""})}catch(u){console.error(u)}finally{o(!1)}})()},[]);const a=s=>{const{name:u,value:d}=s.target;t(c=>({...c,[u]:d}))},l=async()=>{try{const s=localStorage.getItem("token");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/users/${n}`,{method:"PUT",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:e.first_name,last_name:e.last_name,phone:e.phone})})).ok)throw new Error("Помилка оновлення");Y.success("Дані оновлено успішно")}catch(s){console.error(s),Y.error("Не вдалось оновити дані")}};return i?f.jsx("p",{children:"Завантаження..."}):f.jsxs(R9,{children:[f.jsx(Dn,{autoClose:1500}),f.jsx(F9,{children:"Особисті дані"}),f.jsxs(Fs,{children:["Ім я",f.jsx(zs,{name:"first_name",value:e.first_name,onChange:a})]}),f.jsxs(Fs,{children:["Прізвище",f.jsx(zs,{name:"last_name",value:e.last_name,onChange:a})]}),f.jsxs(Fs,{children:["Email",f.jsx(zs,{value:e.email,disabled:!0})]}),f.jsxs(Fs,{children:["Телефон",f.jsx(zs,{name:"phone",value:e.phone,onChange:a})]}),f.jsx(z9,{onClick:l,children:"Зберегти"})]})};function N9(){const e=vn(),[t,n]=x.useState(!1),[r,i]=x.useState("login"),o=!!localStorage.getItem("token"),a=localStorage.getItem("token"),l=JSON.parse(localStorage.getItem("user")||"null"),s=l==null?void 0:l.documentId,u=Ue(d=>d.favorites.items);return x.useEffect(()=>{if(!a||!s)return;(async()=>{const c=localStorage.getItem("token");if(!c)return;const p=await(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${s}&populate=product.images`,{headers:{Authorization:`Bearer ${c}`}})).json();console.log(p);const m=p.data.map(g=>({...g.product,favoriteId:g.id,favoriteDocumentId:g.documentId}));e(O3(m))})()},[s,e,a]),f.jsxs(iM,{children:[f.jsx(N$,{}),f.jsx(UN,{}),f.jsxs(x.Suspense,{fallback:f.jsx(F$,{}),children:[f.jsx(bE,{children:f.jsxs(ze,{path:"/",element:f.jsx(jj,{openLogin:()=>{i("login"),n(!0)},openRegister:()=>{i("register"),n(!0)}}),children:[f.jsx(ze,{index:!0,element:f.jsx(DD,{})}),f.jsx(ze,{path:"catalog",element:f.jsx(Z5,{})}),f.jsx(ze,{path:"/catalog/:category",element:f.jsx(E6,{})}),f.jsx(ze,{path:"/product/:id",element:f.jsx(FA,{})}),f.jsx(ze,{path:"cart",element:f.jsx(fR,{})}),f.jsx(ze,{path:"favorite",element:f.jsx(LR,{})}),f.jsx(ze,{path:"/catalog/new",element:f.jsx(T7,{})}),f.jsx(ze,{path:"/catalog/sale",element:f.jsx(O7,{})}),f.jsx(ze,{path:"checkout",element:f.jsx(_N,{})}),f.jsx(ze,{path:"/order-confirmation",element:f.jsx(MN,{})}),f.jsx(ze,{path:"about",element:f.jsx(VN,{})}),f.jsx(ze,{path:"contacts",element:f.jsx(t7,{})}),f.jsx(ze,{path:"delivery",element:f.jsx(BR,{})}),f.jsxs(ze,{path:"account",element:f.jsx(z7,{isLoggedIn:o,children:f.jsx(A9,{})}),children:[f.jsx(ze,{index:!0,element:f.jsx(uy,{})}),f.jsx(ze,{path:"profile",element:f.jsx(uy,{})})]}),f.jsx(ze,{path:"*",element:f.jsx(rM,{})})]})}),f.jsx(F7,{localFavorites:u,isOpen:t,mode:r,onClose:()=>n(!1),setMode:i})]})]})}var sg="persist:",tC="persist/FLUSH",lg="persist/REHYDRATE",nC="persist/PAUSE",rC="persist/PERSIST",iC="persist/PURGE",oC="persist/REGISTER",B9=-1;function fl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fl=function(n){return typeof n}:fl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fl(e)}function cy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function V9(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cy(n,!0).forEach(function(r){U9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cy(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function U9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W9(e,t,n,r){r.debug;var i=V9({},n);return e&&fl(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function H9(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:sg).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=G9;var s=e.writeFailHandler||null,u={},d={},c=[],y=null,p=null,m=function(E){Object.keys(E).forEach(function(T){h(T)&&u[T]!==E[T]&&c.indexOf(T)===-1&&c.push(T)}),Object.keys(u).forEach(function(T){E[T]===void 0&&h(T)&&c.indexOf(T)===-1&&u[T]!==void 0&&c.push(T)}),y===null&&(y=setInterval(g,i)),u=E};function g(){if(c.length===0){y&&clearInterval(y),y=null;return}var S=c.shift(),E=r.reduce(function(T,k){return k.in(T,S,u)},u[S]);if(E!==void 0)try{d[S]=l(E)}catch(T){console.error("redux-persist/createPersistoid: error serializing state",T)}else delete d[S];c.length===0&&w()}function w(){Object.keys(d).forEach(function(S){u[S]===void 0&&delete d[S]}),p=a.setItem(o,l(d)).catch(v)}function h(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function v(S){s&&s(S)}var b=function(){for(;c.length!==0;)g();return p||Promise.resolve()};return{update:m,flush:b}}function G9(e){return JSON.stringify(e)}function q9(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:sg).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=Y9,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,d){return d.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function Y9(e){return JSON.parse(e)}function X9(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:sg).concat(e.key);return t.removeItem(n,K9)}function K9(e){}function dy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dy(n,!0).forEach(function(r){Q9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dy(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Q9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z9(e,t){if(e==null)return{};var n=J9(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function J9(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var eB=5e3;function aC(e,t){var n=e.version!==void 0?e.version:B9;e.debug;var r=e.stateReconciler===void 0?W9:e.stateReconciler,i=e.getStoredState||q9,o=e.timeout!==void 0?e.timeout:eB,a=null,l=!1,s=!0,u=function(c){return c._persist.rehydrated&&a&&!s&&a.update(c),c};return function(d,c){var y=d||{},p=y._persist,m=Z9(y,["_persist"]),g=m;if(c.type===rC){var w=!1,h=function(C,M){w||(c.rehydrate(e.key,C,M),w=!0)};if(o&&setTimeout(function(){!w&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=H9(e)),p)return Ln({},t(g,c),{_persist:p});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),i(e).then(function(k){var C=e.migrate||function(M,$){return Promise.resolve(M)};C(k,n).then(function(M){h(M)},function(M){h(void 0,M)})},function(k){h(void 0,k)}),Ln({},t(g,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===iC)return l=!0,c.result(X9(e)),Ln({},t(g,c),{_persist:p});if(c.type===tC)return c.result(a&&a.flush()),Ln({},t(g,c),{_persist:p});if(c.type===nC)s=!0;else if(c.type===lg){if(l)return Ln({},g,{_persist:Ln({},p,{rehydrated:!0})});if(c.key===e.key){var v=t(g,c),b=c.payload,S=r!==!1&&b!==void 0?r(b,d,v,e):v,E=Ln({},S,{_persist:Ln({},p,{rehydrated:!0})});return u(E)}}}if(!p)return t(d,c);var T=t(g,c);return T===g?d:u(Ln({},T,{_persist:p}))}}function fy(e){return rB(e)||nB(e)||tB()}function tB(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function nB(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function rB(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function py(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function eh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?py(n,!0).forEach(function(r){iB(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):py(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function iB(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var sC={registry:[],bootstrapped:!1},oB=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:sC,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case oC:return eh({},t,{registry:[].concat(fy(t.registry),[n.key])});case lg:var r=t.registry.indexOf(n.key),i=fy(t.registry);return i.splice(r,1),eh({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function aB(e,t,n){var r=n||!1,i=pm(oB,sC,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:oC,key:u})},a=function(u,d,c){var y={type:lg,payload:d,err:c,key:u};e.dispatch(y),i.dispatch(y),r&&l.getState().bootstrapped&&(r(),r=!1)},l=eh({},i,{purge:function(){var u=[];return e.dispatch({type:iC,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:tC,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:nC})},persist:function(){e.dispatch({type:rC,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var ug={},cg={};cg.__esModule=!0;cg.default=uB;function pl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pl=function(n){return typeof n}:pl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pl(e)}function mf(){}var sB={getItem:mf,setItem:mf,removeItem:mf};function lB(e){if((typeof self>"u"?"undefined":pl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function uB(e){var t="".concat(e,"Storage");return lB(t)?self[t]:sB}ug.__esModule=!0;ug.default=fB;var cB=dB(cg);function dB(e){return e&&e.__esModule?e:{default:e}}function fB(e){var t=(0,cB.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var dg=void 0,pB=hB(ug);function hB(e){return e&&e.__esModule?e:{default:e}}var mB=(0,pB.default)("local");dg=mB;const gB={key:"cart",storage:dg},vB={key:"favorites",storage:dg},yB=aC(gB,D4),xB=aC(vB,j3),lC=y4({reducer:{cart:yB,favorites:xB},middleware:e=>e({serializableCheck:!1})});aB(lC);bf.createRoot(document.getElementById("root")).render(f.jsx(OO,{store:lC,children:f.jsx(K.StrictMode,{children:f.jsx(PE,{basename:"/Didiv/",children:f.jsx(N9,{})})})}));
