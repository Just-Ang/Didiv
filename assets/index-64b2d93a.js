function Ik(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ba(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function $t(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var jx={exports:{}},yc={},Ox={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),Mk=Symbol.for("react.portal"),Dk=Symbol.for("react.fragment"),Lk=Symbol.for("react.strict_mode"),Ak=Symbol.for("react.profiler"),Rk=Symbol.for("react.provider"),zk=Symbol.for("react.context"),Fk=Symbol.for("react.forward_ref"),Nk=Symbol.for("react.suspense"),Bk=Symbol.for("react.memo"),Vk=Symbol.for("react.lazy"),xg=Symbol.iterator;function Uk(e){return e===null||typeof e!="object"?null:(e=xg&&e[xg]||e["@@iterator"],typeof e=="function"?e:null)}var $x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ix=Object.assign,Mx={};function fo(e,t,n){this.props=e,this.context=t,this.refs=Mx,this.updater=n||$x}fo.prototype.isReactComponent={};fo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dx(){}Dx.prototype=fo.prototype;function oh(e,t,n){this.props=e,this.context=t,this.refs=Mx,this.updater=n||$x}var ah=oh.prototype=new Dx;ah.constructor=oh;Ix(ah,fo.prototype);ah.isPureReactComponent=!0;var yg=Array.isArray,Lx=Object.prototype.hasOwnProperty,sh={current:null},Ax={key:!0,ref:!0,__self:!0,__source:!0};function Rx(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Lx.call(t,r)&&!Ax.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Va,type:e,key:o,ref:a,props:i,_owner:sh.current}}function Wk(e,t){return{$$typeof:Va,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Va}function Hk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bg=/\/+/g;function Gu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hk(""+e.key):t.toString(36)}function Vs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Va:case Mk:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Gu(a,0):r,yg(i)?(n="",e!=null&&(n=e.replace(bg,"$&/")+"/"),Vs(i,t,n,"",function(c){return c})):i!=null&&(lh(i)&&(i=Wk(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(bg,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",yg(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Gu(o,l);a+=Vs(o,t,n,s,i)}else if(s=Uk(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Gu(o,l++),a+=Vs(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ss(e,t,n){if(e==null)return e;var r=[],i=0;return Vs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Gk(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},Us={transition:null},qk={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Us,ReactCurrentOwner:sh};re.Children={map:ss,forEach:function(e,t,n){ss(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ss(e,function(){t++}),t},toArray:function(e){return ss(e,function(t){return t})||[]},only:function(e){if(!lh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=fo;re.Fragment=Dk;re.Profiler=Ak;re.PureComponent=oh;re.StrictMode=Lk;re.Suspense=Nk;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qk;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ix({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=sh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Lx.call(t,s)&&!Ax.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Va,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:zk,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rk,_context:e},e.Consumer=e};re.createElement=Rx;re.createFactory=function(e){var t=Rx.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:Fk,render:e}};re.isValidElement=lh;re.lazy=function(e){return{$$typeof:Vk,_payload:{_status:-1,_result:e},_init:Gk}};re.memo=function(e,t){return{$$typeof:Bk,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Us.transition;Us.transition={};try{e()}finally{Us.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return yt.current.useCallback(e,t)};re.useContext=function(e){return yt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};re.useEffect=function(e,t){return yt.current.useEffect(e,t)};re.useId=function(){return yt.current.useId()};re.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return yt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};re.useRef=function(e){return yt.current.useRef(e)};re.useState=function(e){return yt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return yt.current.useTransition()};re.version="18.2.0";Ox.exports=re;var y=Ox.exports;const Q=Ba(y),bf=Ik({__proto__:null,default:Q},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yk=y,Xk=Symbol.for("react.element"),Kk=Symbol.for("react.fragment"),Qk=Object.prototype.hasOwnProperty,Zk=Yk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jk={key:!0,ref:!0,__self:!0,__source:!0};function zx(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Qk.call(t,r)&&!Jk.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Xk,type:e,key:o,ref:a,props:i,_owner:Zk.current}}yc.Fragment=Kk;yc.jsx=zx;yc.jsxs=zx;jx.exports=yc;var u=jx.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pa.apply(this,arguments)}var hr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hr||(hr={}));const wg="popstate";function e_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return wf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gl(i)}return n_(t,n,null,e)}function Me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ch(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function t_(){return Math.random().toString(36).substr(2,8)}function Sg(e,t){return{usr:e.state,key:e.key,idx:t}}function wf(e,t,n,r){return n===void 0&&(n=null),pa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?po(t):t,{state:n,key:t&&t.key||r||t_()})}function gl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function po(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function n_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=hr.Pop,s=null,c=f();c==null&&(c=0,a.replaceState(pa({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function d(){l=hr.Pop;let w=f(),h=w==null?null:w-c;c=w,s&&s({action:l,location:x.location,delta:h})}function v(w,h){l=hr.Push;let p=wf(x.location,w,h);n&&n(p,w),c=f()+1;let b=Sg(p,c),C=x.createHref(p);try{a.pushState(b,"",C)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(C)}o&&s&&s({action:l,location:x.location,delta:1})}function m(w,h){l=hr.Replace;let p=wf(x.location,w,h);n&&n(p,w),c=f();let b=Sg(p,c),C=x.createHref(p);a.replaceState(b,"",C),o&&s&&s({action:l,location:x.location,delta:0})}function g(w){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:gl(w);return Me(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let x={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(wg,d),s=w,()=>{i.removeEventListener(wg,d),s=null}},createHref(w){return t(i,w)},createURL:g,encodeLocation(w){let h=g(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:v,replace:m,go(w){return a.go(w)}};return x}var Cg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cg||(Cg={}));function r_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?po(t):t,i=uh(r.pathname||"/",n);if(i==null)return null;let o=Fx(e);i_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=p_(o[l],g_(i));return a}function Fx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Me(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=yr([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(Me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Fx(o.children,t,f,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:d_(c,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Nx(o.path))i(o,a,s)}),t}function Nx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Nx(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function i_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:f_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const o_=/^:\w+$/,a_=3,s_=2,l_=1,c_=10,u_=-2,kg=e=>e==="*";function d_(e,t){let n=e.split("/"),r=n.length;return n.some(kg)&&(r+=u_),t&&(r+=s_),n.filter(i=>!kg(i)).reduce((i,o)=>i+(o_.test(o)?a_:o===""?l_:c_),r)}function f_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function p_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",f=h_({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!f)return null;Object.assign(r,f.params);let d=l.route;o.push({params:r,pathname:yr([i,f.pathname]),pathnameBase:b_(yr([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=yr([i,f.pathnameBase]))}return o}function h_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=m_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,d)=>{if(f==="*"){let v=l[d]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return c[f]=v_(l[d]||"",f),c},{}),pathname:o,pathnameBase:a,pattern:e}}function m_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ch(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function g_(e){try{return decodeURI(e)}catch(t){return ch(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function v_(e,t){try{return decodeURIComponent(e)}catch(n){return ch(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function uh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function x_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?po(e):e;return{pathname:n?n.startsWith("/")?n:y_(n,t):t,search:w_(r),hash:S_(i)}}function y_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=po(e):(i=pa({},e),Me(!i.pathname||!i.pathname.includes("?"),qu("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),qu("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),qu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),d-=1;i.pathname=v.join("/")}l=d>=0?t[d]:"/"}let s=x_(i,l),c=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||f)&&(s.pathname+="/"),s}const yr=e=>e.join("/").replace(/\/\/+/g,"/"),b_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),w_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,S_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function C_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bx=["post","put","patch","delete"];new Set(Bx);const k_=["get",...Bx];new Set(k_);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vl.apply(this,arguments)}const ph=y.createContext(null),Vx=y.createContext(null),li=y.createContext(null),bc=y.createContext(null),Mn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Ux=y.createContext(null);function __(e,t){let{relative:n}=t===void 0?{}:t;ho()||Me(!1);let{basename:r,navigator:i}=y.useContext(li),{hash:o,pathname:a,search:l}=hh(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:yr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function ho(){return y.useContext(bc)!=null}function Dn(){return ho()||Me(!1),y.useContext(bc).location}function Wx(e){y.useContext(li).static||y.useLayoutEffect(e)}function Ke(){let{isDataRoute:e}=y.useContext(Mn);return e?N_():E_()}function E_(){ho()||Me(!1);let e=y.useContext(ph),{basename:t,navigator:n}=y.useContext(li),{matches:r}=y.useContext(Mn),{pathname:i}=Dn(),o=JSON.stringify(dh(r).map(s=>s.pathnameBase)),a=y.useRef(!1);return Wx(()=>{a.current=!0}),y.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let f=fh(s,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:yr([t,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[t,n,o,i,e])}const P_=y.createContext(null);function T_(e){let t=y.useContext(Mn).outlet;return t&&y.createElement(P_.Provider,{value:e},t)}function Hx(){let{matches:e}=y.useContext(Mn),t=e[e.length-1];return t?t.params:{}}function hh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=y.useContext(Mn),{pathname:i}=Dn(),o=JSON.stringify(dh(r).map(a=>a.pathnameBase));return y.useMemo(()=>fh(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function j_(e,t){return O_(e,t)}function O_(e,t,n){ho()||Me(!1);let{navigator:r}=y.useContext(li),{matches:i}=y.useContext(Mn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Dn(),c;if(t){var f;let x=typeof t=="string"?po(t):t;l==="/"||(f=x.pathname)!=null&&f.startsWith(l)||Me(!1),c=x}else c=s;let d=c.pathname||"/",v=l==="/"?d:d.slice(l.length)||"/",m=r_(e,{pathname:v}),g=L_(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:yr([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:yr([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&g?y.createElement(bc.Provider,{value:{location:vl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:hr.Pop}},g):g}function $_(){let e=F_(),t=C_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:i},n):null,o)}const I_=y.createElement($_,null);class M_ extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?y.createElement(Mn.Provider,{value:this.props.routeContext},y.createElement(Ux.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function D_(e){let{routeContext:t,match:n,children:r}=e,i=y.useContext(ph);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Mn.Provider,{value:t},r)}function L_(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Me(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,c)=>{let f=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||I_);let v=t.concat(o.slice(0,c+1)),m=()=>{let g;return f?g=d:s.route.Component?g=y.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=l,y.createElement(D_,{match:s,routeContext:{outlet:l,matches:v,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?y.createElement(M_,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var Gx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gx||{}),xl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(xl||{});function A_(e){let t=y.useContext(ph);return t||Me(!1),t}function R_(e){let t=y.useContext(Vx);return t||Me(!1),t}function z_(e){let t=y.useContext(Mn);return t||Me(!1),t}function qx(e){let t=z_(),n=t.matches[t.matches.length-1];return n.route.id||Me(!1),n.route.id}function F_(){var e;let t=y.useContext(Ux),n=R_(xl.UseRouteError),r=qx(xl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function N_(){let{router:e}=A_(Gx.UseNavigateStable),t=qx(xl.UseNavigateStable),n=y.useRef(!1);return Wx(()=>{n.current=!0}),y.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,vl({fromRouteId:t},o)))},[e,t])}function B_(e){let{to:t,replace:n,state:r,relative:i}=e;ho()||Me(!1);let{matches:o}=y.useContext(Mn),{pathname:a}=Dn(),l=Ke(),s=fh(t,dh(o).map(f=>f.pathnameBase),a,i==="path"),c=JSON.stringify(s);return y.useEffect(()=>l(JSON.parse(c),{replace:n,state:r,relative:i}),[l,c,i,n,r]),null}function Yx(e){return T_(e.context)}function $e(e){Me(!1)}function V_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=hr.Pop,navigator:o,static:a=!1}=e;ho()&&Me(!1);let l=t.replace(/^\/*/,"/"),s=y.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=po(r));let{pathname:c="/",search:f="",hash:d="",state:v=null,key:m="default"}=r,g=y.useMemo(()=>{let x=uh(c,l);return x==null?null:{location:{pathname:x,search:f,hash:d,state:v,key:m},navigationType:i}},[l,c,f,d,v,m,i]);return g==null?null:y.createElement(li.Provider,{value:s},y.createElement(bc.Provider,{children:n,value:g}))}function U_(e){let{children:t,location:n}=e;return j_(Sf(t),n)}new Promise(()=>{});function Sf(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let o=[...t,i];if(r.type===y.Fragment){n.push.apply(n,Sf(r.props.children,o));return}r.type!==$e&&Me(!1),!r.props.index||!r.props.children||Me(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Sf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yl(){return yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yl.apply(this,arguments)}function Xx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function W_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function H_(e,t){return e.button===0&&(!t||t==="_self")&&!W_(e)}function Cf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function G_(e,t){let n=Cf(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const q_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Y_=["aria-current","caseSensitive","className","end","style","to","children"],X_="startTransition",_g=bf[X_];function K_(e){let{basename:t,children:n,future:r,window:i}=e,o=y.useRef();o.current==null&&(o.current=e_({window:i,v5Compat:!0}));let a=o.current,[l,s]=y.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},f=y.useCallback(d=>{c&&_g?_g(()=>s(d)):s(d)},[s,c]);return y.useLayoutEffect(()=>a.listen(f),[a,f]),y.createElement(V_,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const Q_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Z_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=y.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:f}=t,d=Xx(t,q_),{basename:v}=y.useContext(li),m,g=!1;if(typeof c=="string"&&Z_.test(c)&&(m=c,Q_))try{let p=new URL(window.location.href),b=c.startsWith("//")?new URL(p.protocol+c):new URL(c),C=uh(b.pathname,v);b.origin===p.origin&&C!=null?c=C+b.search+b.hash:g=!0}catch{}let x=__(c,{relative:i}),w=J_(c,{replace:a,state:l,target:s,preventScrollReset:f,relative:i});function h(p){r&&r(p),p.defaultPrevented||w(p)}return y.createElement("a",yl({},d,{href:m||x,onClick:g||o?r:h,ref:n,target:s}))}),Kx=y.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,children:c}=t,f=Xx(t,Y_),d=hh(s,{relative:f.relative}),v=Dn(),m=y.useContext(Vx),{navigator:g}=y.useContext(li),x=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,w=v.pathname,h=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(w=w.toLowerCase(),h=h?h.toLowerCase():null,x=x.toLowerCase());let p=w===x||!a&&w.startsWith(x)&&w.charAt(x.length)==="/",b=h!=null&&(h===x||!a&&h.startsWith(x)&&h.charAt(x.length)==="/"),C=p?r:void 0,S;typeof o=="function"?S=o({isActive:p,isPending:b}):S=[o,p?"active":null,b?"pending":null].filter(Boolean).join(" ");let P=typeof l=="function"?l({isActive:p,isPending:b}):l;return y.createElement(Pe,yl({},f,{"aria-current":C,className:S,ref:n,style:P,to:s}),typeof c=="function"?c({isActive:p,isPending:b}):c)});var Eg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Eg||(Eg={}));var Pg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pg||(Pg={}));function J_(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Ke(),s=Dn(),c=hh(e,{relative:a});return y.useCallback(f=>{if(H_(f,n)){f.preventDefault();let d=r!==void 0?r:gl(s)===gl(c);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}function Qx(e){let t=y.useRef(Cf(e)),n=y.useRef(!1),r=Dn(),i=y.useMemo(()=>G_(r.search,n.current?null:t.current),[r.search]),o=Ke(),a=y.useCallback((l,s)=>{const c=Cf(typeof l=="function"?l(i):l);n.current=!0,o("?"+c,s)},[o,i]);return[i,a]}var kf={},Zx={exports:{}},Ut={},Jx={exports:{}},ey={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,O){var F=T.length;T.push(O);e:for(;0<F;){var B=F-1>>>1,N=T[B];if(0<i(N,O))T[B]=O,T[F]=N,F=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],F=T.pop();if(F!==O){T[0]=F;e:for(var B=0,N=T.length,V=N>>>1;B<V;){var H=2*(B+1)-1,G=T[H],W=H+1,q=T[W];if(0>i(G,F))W<N&&0>i(q,G)?(T[B]=q,T[W]=F,B=W):(T[B]=G,T[H]=F,B=H);else if(W<N&&0>i(q,F))T[B]=q,T[W]=F,B=W;else break e}}return O}function i(T,O){var F=T.sortIndex-O.sortIndex;return F!==0?F:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],f=1,d=null,v=3,m=!1,g=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(T){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=T)r(c),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(c)}}function C(T){if(x=!1,b(T),!g)if(n(s)!==null)g=!0,R(S);else{var O=n(c);O!==null&&z(C,O.startTime-T)}}function S(T,O){g=!1,x&&(x=!1,h(_),_=-1),m=!0;var F=v;try{for(b(O),d=n(s);d!==null&&(!(d.expirationTime>O)||T&&!M());){var B=d.callback;if(typeof B=="function"){d.callback=null,v=d.priorityLevel;var N=B(d.expirationTime<=O);O=e.unstable_now(),typeof N=="function"?d.callback=N:d===n(s)&&r(s),b(O)}else r(s);d=n(s)}if(d!==null)var V=!0;else{var H=n(c);H!==null&&z(C,H.startTime-O),V=!1}return V}finally{d=null,v=F,m=!1}}var P=!1,E=null,_=-1,$=5,I=-1;function M(){return!(e.unstable_now()-I<$)}function D(){if(E!==null){var T=e.unstable_now();I=T;var O=!0;try{O=E(!0,T)}finally{O?j():(P=!1,E=null)}}else P=!1}var j;if(typeof p=="function")j=function(){p(D)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,L=A.port2;A.port1.onmessage=D,j=function(){L.postMessage(null)}}else j=function(){w(D,0)};function R(T){E=T,P||(P=!0,j())}function z(T,O){_=w(function(){T(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,R(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(v){case 1:case 2:case 3:var O=3;break;default:O=v}var F=v;v=O;try{return T()}finally{v=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var F=v;v=T;try{return O()}finally{v=F}},e.unstable_scheduleCallback=function(T,O,F){var B=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?B+F:B):F=B,T){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=F+N,T={id:f++,callback:O,priorityLevel:T,startTime:F,expirationTime:N,sortIndex:-1},F>B?(T.sortIndex=F,t(c,T),n(s)===null&&T===n(c)&&(x?(h(_),_=-1):x=!0,z(C,F-B))):(T.sortIndex=N,t(s,T),g||m||(g=!0,R(S))),T},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(T){var O=v;return function(){var F=v;v=O;try{return T.apply(this,arguments)}finally{v=F}}}})(ey);Jx.exports=ey;var eE=Jx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty=y,Bt=eE;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ny=new Set,ha={};function ci(e,t){Xi(e,t),Xi(e+"Capture",t)}function Xi(e,t){for(ha[e]=t,e=0;e<t.length;e++)ny.add(t[e])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_f=Object.prototype.hasOwnProperty,tE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tg={},jg={};function nE(e){return _f.call(jg,e)?!0:_f.call(Tg,e)?!1:tE.test(e)?jg[e]=!0:(Tg[e]=!0,!1)}function rE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function iE(e,t,n,r){if(t===null||typeof t>"u"||rE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function bt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){rt[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];rt[t]=new bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){rt[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){rt[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){rt[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){rt[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){rt[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){rt[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){rt[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var mh=/[\-:]([a-z])/g;function gh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mh,gh);rt[t]=new bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mh,gh);rt[t]=new bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mh,gh);rt[t]=new bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){rt[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});rt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){rt[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function vh(e,t,n,r){var i=rt.hasOwnProperty(t)?rt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(iE(t,n,i,r)&&(n=null),r||i===null?nE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rr=ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ls=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),ji=Symbol.for("react.fragment"),xh=Symbol.for("react.strict_mode"),Ef=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),iy=Symbol.for("react.context"),yh=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),Tf=Symbol.for("react.suspense_list"),bh=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),oy=Symbol.for("react.offscreen"),Og=Symbol.iterator;function jo(e){return e===null||typeof e!="object"?null:(e=Og&&e[Og]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,Yu;function Ho(e){if(Yu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yu=t&&t[1]||""}return`
`+Yu+e}var Xu=!1;function Ku(e,t){if(!e||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ho(e):""}function oE(e){switch(e.tag){case 5:return Ho(e.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return e=Ku(e.type,!1),e;case 11:return e=Ku(e.type.render,!1),e;case 1:return e=Ku(e.type,!0),e;default:return""}}function jf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ji:return"Fragment";case Ti:return"Portal";case Ef:return"Profiler";case xh:return"StrictMode";case Pf:return"Suspense";case Tf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case iy:return(e.displayName||"Context")+".Consumer";case ry:return(e._context.displayName||"Context")+".Provider";case yh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bh:return t=e.displayName||null,t!==null?t:jf(e.type)||"Memo";case ur:t=e._payload,e=e._init;try{return jf(e(t))}catch{}}return null}function aE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jf(t);case 8:return t===xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ay(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sE(e){var t=ay(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cs(e){e._valueTracker||(e._valueTracker=sE(e))}function sy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ay(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Of(e,t){var n=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $g(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ly(e,t){t=t.checked,t!=null&&vh(e,"checked",t,!1)}function $f(e,t){ly(e,t);var n=jr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?If(e,t.type,n):t.hasOwnProperty("defaultValue")&&If(e,t.type,jr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ig(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function If(e,t,n){(t!=="number"||bl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Go=Array.isArray;function Ni(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(Go(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jr(n)}}function cy(e,t){var n=jr(t.value),r=jr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Df(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var us,dy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(us=us||document.createElement("div"),us.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=us.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lE=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(e){lE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ea[t]=ea[e]})});function fy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ea.hasOwnProperty(e)&&ea[e]?(""+t).trim():t+"px"}function py(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var cE=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lf(e,t){if(t){if(cE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Af(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rf=null;function wh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zf=null,Bi=null,Vi=null;function Lg(e){if(e=Ha(e)){if(typeof zf!="function")throw Error(U(280));var t=e.stateNode;t&&(t=_c(t),zf(e.stateNode,e.type,t))}}function hy(e){Bi?Vi?Vi.push(e):Vi=[e]:Bi=e}function my(){if(Bi){var e=Bi,t=Vi;if(Vi=Bi=null,Lg(e),t)for(e=0;e<t.length;e++)Lg(t[e])}}function gy(e,t){return e(t)}function vy(){}var Qu=!1;function xy(e,t,n){if(Qu)return e(t,n);Qu=!0;try{return gy(e,t,n)}finally{Qu=!1,(Bi!==null||Vi!==null)&&(vy(),my())}}function ga(e,t){var n=e.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var Ff=!1;if(Xn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Ff=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Ff=!1}function uE(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var ta=!1,wl=null,Sl=!1,Nf=null,dE={onError:function(e){ta=!0,wl=e}};function fE(e,t,n,r,i,o,a,l,s){ta=!1,wl=null,uE.apply(dE,arguments)}function pE(e,t,n,r,i,o,a,l,s){if(fE.apply(this,arguments),ta){if(ta){var c=wl;ta=!1,wl=null}else throw Error(U(198));Sl||(Sl=!0,Nf=c)}}function ui(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ag(e){if(ui(e)!==e)throw Error(U(188))}function hE(e){var t=e.alternate;if(!t){if(t=ui(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ag(i),e;if(o===r)return Ag(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function by(e){return e=hE(e),e!==null?wy(e):null}function wy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wy(e);if(t!==null)return t;e=e.sibling}return null}var Sy=Bt.unstable_scheduleCallback,Rg=Bt.unstable_cancelCallback,mE=Bt.unstable_shouldYield,gE=Bt.unstable_requestPaint,Ie=Bt.unstable_now,vE=Bt.unstable_getCurrentPriorityLevel,Sh=Bt.unstable_ImmediatePriority,Cy=Bt.unstable_UserBlockingPriority,Cl=Bt.unstable_NormalPriority,xE=Bt.unstable_LowPriority,ky=Bt.unstable_IdlePriority,wc=null,Pn=null;function yE(e){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(wc,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:SE,bE=Math.log,wE=Math.LN2;function SE(e){return e>>>=0,e===0?32:31-(bE(e)/wE|0)|0}var ds=64,fs=4194304;function qo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function kl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=qo(l):(o&=a,o!==0&&(r=qo(o)))}else a=n&~i,a!==0?r=qo(a):o!==0&&(r=qo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dn(t),i=1<<n,r|=e[n],t&=~i;return r}function CE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-dn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=CE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Bf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _y(){var e=ds;return ds<<=1,!(ds&4194240)&&(ds=64),e}function Zu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ua(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dn(t),e[t]=n}function _E(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ch(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function Ey(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Py,kh,Ty,jy,Oy,Vf=!1,ps=[],br=null,wr=null,Sr=null,va=new Map,xa=new Map,fr=[],EE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zg(e,t){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":va.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(t.pointerId)}}function $o(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ha(t),t!==null&&kh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function PE(e,t,n,r,i){switch(t){case"focusin":return br=$o(br,e,t,n,r,i),!0;case"dragenter":return wr=$o(wr,e,t,n,r,i),!0;case"mouseover":return Sr=$o(Sr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return va.set(o,$o(va.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xa.set(o,$o(xa.get(o)||null,e,t,n,r,i)),!0}return!1}function $y(e){var t=Hr(e.target);if(t!==null){var n=ui(t);if(n!==null){if(t=n.tag,t===13){if(t=yy(n),t!==null){e.blockedOn=t,Oy(e.priority,function(){Ty(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Uf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Rf=r,n.target.dispatchEvent(r),Rf=null}else return t=Ha(n),t!==null&&kh(t),e.blockedOn=n,!1;t.shift()}return!0}function Fg(e,t,n){Ws(e)&&n.delete(t)}function TE(){Vf=!1,br!==null&&Ws(br)&&(br=null),wr!==null&&Ws(wr)&&(wr=null),Sr!==null&&Ws(Sr)&&(Sr=null),va.forEach(Fg),xa.forEach(Fg)}function Io(e,t){e.blockedOn===t&&(e.blockedOn=null,Vf||(Vf=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,TE)))}function ya(e){function t(i){return Io(i,e)}if(0<ps.length){Io(ps[0],e);for(var n=1;n<ps.length;n++){var r=ps[n];r.blockedOn===e&&(r.blockedOn=null)}}for(br!==null&&Io(br,e),wr!==null&&Io(wr,e),Sr!==null&&Io(Sr,e),va.forEach(t),xa.forEach(t),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)$y(n),n.blockedOn===null&&fr.shift()}var Ui=rr.ReactCurrentBatchConfig,_l=!0;function jE(e,t,n,r){var i=ge,o=Ui.transition;Ui.transition=null;try{ge=1,_h(e,t,n,r)}finally{ge=i,Ui.transition=o}}function OE(e,t,n,r){var i=ge,o=Ui.transition;Ui.transition=null;try{ge=4,_h(e,t,n,r)}finally{ge=i,Ui.transition=o}}function _h(e,t,n,r){if(_l){var i=Uf(e,t,n,r);if(i===null)ld(e,t,r,El,n),zg(e,r);else if(PE(i,e,t,n,r))r.stopPropagation();else if(zg(e,r),t&4&&-1<EE.indexOf(e)){for(;i!==null;){var o=Ha(i);if(o!==null&&Py(o),o=Uf(e,t,n,r),o===null&&ld(e,t,r,El,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ld(e,t,r,null,n)}}var El=null;function Uf(e,t,n,r){if(El=null,e=wh(r),e=Hr(e),e!==null)if(t=ui(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return El=e,null}function Iy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vE()){case Sh:return 1;case Cy:return 4;case Cl:case xE:return 16;case ky:return 536870912;default:return 16}default:return 16}}var mr=null,Eh=null,Hs=null;function My(){if(Hs)return Hs;var e,t=Eh,n=t.length,r,i="value"in mr?mr.value:mr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Hs=i.slice(e,1<r?1-r:void 0)}function Gs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hs(){return!0}function Ng(){return!1}function Wt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hs:Ng,this.isPropagationStopped=Ng,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),t}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ph=Wt(mo),Wa=Te({},mo,{view:0,detail:0}),$E=Wt(Wa),Ju,ed,Mo,Sc=Te({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Th,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(Ju=e.screenX-Mo.screenX,ed=e.screenY-Mo.screenY):ed=Ju=0,Mo=e),Ju)},movementY:function(e){return"movementY"in e?e.movementY:ed}}),Bg=Wt(Sc),IE=Te({},Sc,{dataTransfer:0}),ME=Wt(IE),DE=Te({},Wa,{relatedTarget:0}),td=Wt(DE),LE=Te({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),AE=Wt(LE),RE=Te({},mo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zE=Wt(RE),FE=Te({},mo,{data:0}),Vg=Wt(FE),NE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=VE[e])?!!t[e]:!1}function Th(){return UE}var WE=Te({},Wa,{key:function(e){if(e.key){var t=NE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?BE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Th,charCode:function(e){return e.type==="keypress"?Gs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),HE=Wt(WE),GE=Te({},Sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ug=Wt(GE),qE=Te({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Th}),YE=Wt(qE),XE=Te({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),KE=Wt(XE),QE=Te({},Sc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ZE=Wt(QE),JE=[9,13,27,32],jh=Xn&&"CompositionEvent"in window,na=null;Xn&&"documentMode"in document&&(na=document.documentMode);var eP=Xn&&"TextEvent"in window&&!na,Dy=Xn&&(!jh||na&&8<na&&11>=na),Wg=String.fromCharCode(32),Hg=!1;function Ly(e,t){switch(e){case"keyup":return JE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ay(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oi=!1;function tP(e,t){switch(e){case"compositionend":return Ay(t);case"keypress":return t.which!==32?null:(Hg=!0,Wg);case"textInput":return e=t.data,e===Wg&&Hg?null:e;default:return null}}function nP(e,t){if(Oi)return e==="compositionend"||!jh&&Ly(e,t)?(e=My(),Hs=Eh=mr=null,Oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dy&&t.locale!=="ko"?null:t.data;default:return null}}var rP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rP[e.type]:t==="textarea"}function Ry(e,t,n,r){hy(r),t=Pl(t,"onChange"),0<t.length&&(n=new Ph("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ra=null,ba=null;function iP(e){Yy(e,0)}function Cc(e){var t=Mi(e);if(sy(t))return e}function oP(e,t){if(e==="change")return t}var zy=!1;if(Xn){var nd;if(Xn){var rd="oninput"in document;if(!rd){var qg=document.createElement("div");qg.setAttribute("oninput","return;"),rd=typeof qg.oninput=="function"}nd=rd}else nd=!1;zy=nd&&(!document.documentMode||9<document.documentMode)}function Yg(){ra&&(ra.detachEvent("onpropertychange",Fy),ba=ra=null)}function Fy(e){if(e.propertyName==="value"&&Cc(ba)){var t=[];Ry(t,ba,e,wh(e)),xy(iP,t)}}function aP(e,t,n){e==="focusin"?(Yg(),ra=t,ba=n,ra.attachEvent("onpropertychange",Fy)):e==="focusout"&&Yg()}function sP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cc(ba)}function lP(e,t){if(e==="click")return Cc(t)}function cP(e,t){if(e==="input"||e==="change")return Cc(t)}function uP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:uP;function wa(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_f.call(t,i)||!gn(e[i],t[i]))return!1}return!0}function Xg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kg(e,t){var n=Xg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xg(n)}}function Ny(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ny(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function By(){for(var e=window,t=bl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bl(e.document)}return t}function Oh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dP(e){var t=By(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ny(n.ownerDocument.documentElement,n)){if(r!==null&&Oh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Kg(n,o);var a=Kg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fP=Xn&&"documentMode"in document&&11>=document.documentMode,$i=null,Wf=null,ia=null,Hf=!1;function Qg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hf||$i==null||$i!==bl(r)||(r=$i,"selectionStart"in r&&Oh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&wa(ia,r)||(ia=r,r=Pl(Wf,"onSelect"),0<r.length&&(t=new Ph("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$i)))}function ms(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ii={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionend:ms("Transition","TransitionEnd")},id={},Vy={};Xn&&(Vy=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function kc(e){if(id[e])return id[e];if(!Ii[e])return e;var t=Ii[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vy)return id[e]=t[n];return e}var Uy=kc("animationend"),Wy=kc("animationiteration"),Hy=kc("animationstart"),Gy=kc("transitionend"),qy=new Map,Zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(e,t){qy.set(e,t),ci(t,[e])}for(var od=0;od<Zg.length;od++){var ad=Zg[od],pP=ad.toLowerCase(),hP=ad[0].toUpperCase()+ad.slice(1);Ir(pP,"on"+hP)}Ir(Uy,"onAnimationEnd");Ir(Wy,"onAnimationIteration");Ir(Hy,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(Gy,"onTransitionEnd");Xi("onMouseEnter",["mouseout","mouseover"]);Xi("onMouseLeave",["mouseout","mouseover"]);Xi("onPointerEnter",["pointerout","pointerover"]);Xi("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function Jg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pE(r,t,void 0,e),e.currentTarget=null}function Yy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Jg(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Jg(i,l,c),o=s}}}if(Sl)throw e=Nf,Sl=!1,Nf=null,e}function ye(e,t){var n=t[Kf];n===void 0&&(n=t[Kf]=new Set);var r=e+"__bubble";n.has(r)||(Xy(t,e,2,!1),n.add(r))}function sd(e,t,n){var r=0;t&&(r|=4),Xy(n,e,r,t)}var gs="_reactListening"+Math.random().toString(36).slice(2);function Sa(e){if(!e[gs]){e[gs]=!0,ny.forEach(function(n){n!=="selectionchange"&&(mP.has(n)||sd(n,!1,e),sd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gs]||(t[gs]=!0,sd("selectionchange",!1,t))}}function Xy(e,t,n,r){switch(Iy(t)){case 1:var i=jE;break;case 4:i=OE;break;default:i=_h}n=i.bind(null,t,n,e),i=void 0,!Ff||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ld(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Hr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}xy(function(){var c=o,f=wh(n),d=[];e:{var v=qy.get(e);if(v!==void 0){var m=Ph,g=e;switch(e){case"keypress":if(Gs(n)===0)break e;case"keydown":case"keyup":m=HE;break;case"focusin":g="focus",m=td;break;case"focusout":g="blur",m=td;break;case"beforeblur":case"afterblur":m=td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ME;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=YE;break;case Uy:case Wy:case Hy:m=AE;break;case Gy:m=KE;break;case"scroll":m=$E;break;case"wheel":m=ZE;break;case"copy":case"cut":case"paste":m=zE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ug}var x=(t&4)!==0,w=!x&&e==="scroll",h=x?v!==null?v+"Capture":null:v;x=[];for(var p=c,b;p!==null;){b=p;var C=b.stateNode;if(b.tag===5&&C!==null&&(b=C,h!==null&&(C=ga(p,h),C!=null&&x.push(Ca(p,C,b)))),w)break;p=p.return}0<x.length&&(v=new m(v,g,null,n,f),d.push({event:v,listeners:x}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",v&&n!==Rf&&(g=n.relatedTarget||n.fromElement)&&(Hr(g)||g[Kn]))break e;if((m||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?Hr(g):null,g!==null&&(w=ui(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(x=Bg,C="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ug,C="onPointerLeave",h="onPointerEnter",p="pointer"),w=m==null?v:Mi(m),b=g==null?v:Mi(g),v=new x(C,p+"leave",m,n,f),v.target=w,v.relatedTarget=b,C=null,Hr(f)===c&&(x=new x(h,p+"enter",g,n,f),x.target=b,x.relatedTarget=w,C=x),w=C,m&&g)t:{for(x=m,h=g,p=0,b=x;b;b=mi(b))p++;for(b=0,C=h;C;C=mi(C))b++;for(;0<p-b;)x=mi(x),p--;for(;0<b-p;)h=mi(h),b--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=mi(x),h=mi(h)}x=null}else x=null;m!==null&&e0(d,v,m,x,!1),g!==null&&w!==null&&e0(d,w,g,x,!0)}}e:{if(v=c?Mi(c):window,m=v.nodeName&&v.nodeName.toLowerCase(),m==="select"||m==="input"&&v.type==="file")var S=oP;else if(Gg(v))if(zy)S=cP;else{S=sP;var P=aP}else(m=v.nodeName)&&m.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(S=lP);if(S&&(S=S(e,c))){Ry(d,S,n,f);break e}P&&P(e,v,c),e==="focusout"&&(P=v._wrapperState)&&P.controlled&&v.type==="number"&&If(v,"number",v.value)}switch(P=c?Mi(c):window,e){case"focusin":(Gg(P)||P.contentEditable==="true")&&($i=P,Wf=c,ia=null);break;case"focusout":ia=Wf=$i=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,Qg(d,n,f);break;case"selectionchange":if(fP)break;case"keydown":case"keyup":Qg(d,n,f)}var E;if(jh)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Oi?Ly(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Dy&&n.locale!=="ko"&&(Oi||_!=="onCompositionStart"?_==="onCompositionEnd"&&Oi&&(E=My()):(mr=f,Eh="value"in mr?mr.value:mr.textContent,Oi=!0)),P=Pl(c,_),0<P.length&&(_=new Vg(_,e,null,n,f),d.push({event:_,listeners:P}),E?_.data=E:(E=Ay(n),E!==null&&(_.data=E)))),(E=eP?tP(e,n):nP(e,n))&&(c=Pl(c,"onBeforeInput"),0<c.length&&(f=new Vg("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=E))}Yy(d,t)})}function Ca(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ga(e,n),o!=null&&r.unshift(Ca(e,o,i)),o=ga(e,t),o!=null&&r.push(Ca(e,o,i))),e=e.return}return r}function mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function e0(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=ga(n,o),s!=null&&a.unshift(Ca(n,s,l))):i||(s=ga(n,o),s!=null&&a.push(Ca(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var gP=/\r\n?/g,vP=/\u0000|\uFFFD/g;function t0(e){return(typeof e=="string"?e:""+e).replace(gP,`
`).replace(vP,"")}function vs(e,t,n){if(t=t0(t),t0(e)!==t&&n)throw Error(U(425))}function Tl(){}var Gf=null,qf=null;function Yf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xf=typeof setTimeout=="function"?setTimeout:void 0,xP=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,yP=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(e){return n0.resolve(null).then(e).catch(bP)}:Xf;function bP(e){setTimeout(function(){throw e})}function cd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ya(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ya(t)}function Cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function r0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var go=Math.random().toString(36).slice(2),_n="__reactFiber$"+go,ka="__reactProps$"+go,Kn="__reactContainer$"+go,Kf="__reactEvents$"+go,wP="__reactListeners$"+go,SP="__reactHandles$"+go;function Hr(e){var t=e[_n];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kn]||n[_n]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=r0(e);e!==null;){if(n=e[_n])return n;e=r0(e)}return t}e=n,n=e.parentNode}return null}function Ha(e){return e=e[_n]||e[Kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function _c(e){return e[ka]||null}var Qf=[],Di=-1;function Mr(e){return{current:e}}function we(e){0>Di||(e.current=Qf[Di],Qf[Di]=null,Di--)}function xe(e,t){Di++,Qf[Di]=e.current,e.current=t}var Or={},dt=Mr(Or),Pt=Mr(!1),Zr=Or;function Ki(e,t){var n=e.type.contextTypes;if(!n)return Or;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(e){return e=e.childContextTypes,e!=null}function jl(){we(Pt),we(dt)}function i0(e,t,n){if(dt.current!==Or)throw Error(U(168));xe(dt,t),xe(Pt,n)}function Ky(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,aE(e)||"Unknown",i));return Te({},n,r)}function Ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Or,Zr=dt.current,xe(dt,e),xe(Pt,Pt.current),!0}function o0(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=Ky(e,t,Zr),r.__reactInternalMemoizedMergedChildContext=e,we(Pt),we(dt),xe(dt,e)):we(Pt),xe(Pt,n)}var Bn=null,Ec=!1,ud=!1;function Qy(e){Bn===null?Bn=[e]:Bn.push(e)}function CP(e){Ec=!0,Qy(e)}function Dr(){if(!ud&&Bn!==null){ud=!0;var e=0,t=ge;try{var n=Bn;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bn=null,Ec=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(e+1)),Sy(Sh,Dr),i}finally{ge=t,ud=!1}}return null}var Li=[],Ai=0,$l=null,Il=0,qt=[],Yt=0,Jr=null,Wn=1,Hn="";function Fr(e,t){Li[Ai++]=Il,Li[Ai++]=$l,$l=e,Il=t}function Zy(e,t,n){qt[Yt++]=Wn,qt[Yt++]=Hn,qt[Yt++]=Jr,Jr=e;var r=Wn;e=Hn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var o=32-dn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Wn=1<<32-dn(t)+i|n<<i|r,Hn=o+e}else Wn=1<<o|n<<i|r,Hn=e}function $h(e){e.return!==null&&(Fr(e,1),Zy(e,1,0))}function Ih(e){for(;e===$l;)$l=Li[--Ai],Li[Ai]=null,Il=Li[--Ai],Li[Ai]=null;for(;e===Jr;)Jr=qt[--Yt],qt[Yt]=null,Hn=qt[--Yt],qt[Yt]=null,Wn=qt[--Yt],qt[Yt]=null}var Ft=null,Rt=null,ke=!1,cn=null;function Jy(e,t){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function a0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ft=e,Rt=Cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ft=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jr!==null?{id:Wn,overflow:Hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ft=e,Rt=null,!0):!1;default:return!1}}function Zf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jf(e){if(ke){var t=Rt;if(t){var n=t;if(!a0(e,t)){if(Zf(e))throw Error(U(418));t=Cr(n.nextSibling);var r=Ft;t&&a0(e,t)?Jy(r,n):(e.flags=e.flags&-4097|2,ke=!1,Ft=e)}}else{if(Zf(e))throw Error(U(418));e.flags=e.flags&-4097|2,ke=!1,Ft=e}}}function s0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ft=e}function xs(e){if(e!==Ft)return!1;if(!ke)return s0(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yf(e.type,e.memoizedProps)),t&&(t=Rt)){if(Zf(e))throw eb(),Error(U(418));for(;t;)Jy(e,t),t=Cr(t.nextSibling)}if(s0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=Cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=Ft?Cr(e.stateNode.nextSibling):null;return!0}function eb(){for(var e=Rt;e;)e=Cr(e.nextSibling)}function Qi(){Rt=Ft=null,ke=!1}function Mh(e){cn===null?cn=[e]:cn.push(e)}var kP=rr.ReactCurrentBatchConfig;function an(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ml=Mr(null),Dl=null,Ri=null,Dh=null;function Lh(){Dh=Ri=Dl=null}function Ah(e){var t=Ml.current;we(Ml),e._currentValue=t}function ep(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wi(e,t){Dl=e,Dh=Ri=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function Qt(e){var t=e._currentValue;if(Dh!==e)if(e={context:e,memoizedValue:t,next:null},Ri===null){if(Dl===null)throw Error(U(308));Ri=e,Dl.dependencies={lanes:0,firstContext:e}}else Ri=Ri.next=e;return t}var Gr=null;function Rh(e){Gr===null?Gr=[e]:Gr.push(e)}function tb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Rh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qn(e,r)}function Qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dr=!1;function zh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qn(e,n)}return i=r.interleaved,i===null?(t.next=t,Rh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qn(e,n)}function qs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ch(e,n)}}function l0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ll(e,t,n,r){var i=e.updateQueue;dr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,f=c=s=null,l=o;do{var v=l.lane,m=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,x=l;switch(v=t,m=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(m,d,v);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,v=typeof g=="function"?g.call(m,d,v):g,v==null)break e;d=Te({},d,v);break e;case 2:dr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else m={eventTime:m,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=m,s=d):f=f.next=m,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(f===null&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ti|=a,e.lanes=a,e.memoizedState=d}}function c0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var rb=new ty.Component().refs;function tp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pc={isMounted:function(e){return(e=e._reactInternals)?ui(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vt(),i=Er(e),o=Gn(r,i);o.payload=t,n!=null&&(o.callback=n),t=kr(e,o,i),t!==null&&(fn(t,e,i,r),qs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vt(),i=Er(e),o=Gn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=kr(e,o,i),t!==null&&(fn(t,e,i,r),qs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),r=Er(e),i=Gn(n,r);i.tag=2,t!=null&&(i.callback=t),t=kr(e,i,r),t!==null&&(fn(t,e,r,n),qs(t,e,r))}};function u0(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!wa(n,r)||!wa(i,o):!0}function ib(e,t,n){var r=!1,i=Or,o=t.contextType;return typeof o=="object"&&o!==null?o=Qt(o):(i=Tt(t)?Zr:dt.current,r=t.contextTypes,o=(r=r!=null)?Ki(e,i):Or),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function d0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pc.enqueueReplaceState(t,t.state,null)}function np(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=rb,zh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Qt(o):(o=Tt(t)?Zr:dt.current,i.context=Ki(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(tp(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Pc.enqueueReplaceState(i,i.state,null),Ll(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Do(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===rb&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function ys(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function f0(e){var t=e._init;return t(e._payload)}function ob(e){function t(h,p){if(e){var b=h.deletions;b===null?(h.deletions=[p],h.flags|=16):b.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Pr(h,p),h.index=0,h.sibling=null,h}function o(h,p,b){return h.index=b,e?(b=h.alternate,b!==null?(b=b.index,b<p?(h.flags|=2,p):b):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,b,C){return p===null||p.tag!==6?(p=vd(b,h.mode,C),p.return=h,p):(p=i(p,b),p.return=h,p)}function s(h,p,b,C){var S=b.type;return S===ji?f(h,p,b.props.children,C,b.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ur&&f0(S)===p.type)?(C=i(p,b.props),C.ref=Do(h,p,b),C.return=h,C):(C=Js(b.type,b.key,b.props,null,h.mode,C),C.ref=Do(h,p,b),C.return=h,C)}function c(h,p,b,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==b.containerInfo||p.stateNode.implementation!==b.implementation?(p=xd(b,h.mode,C),p.return=h,p):(p=i(p,b.children||[]),p.return=h,p)}function f(h,p,b,C,S){return p===null||p.tag!==7?(p=Kr(b,h.mode,C,S),p.return=h,p):(p=i(p,b),p.return=h,p)}function d(h,p,b){if(typeof p=="string"&&p!==""||typeof p=="number")return p=vd(""+p,h.mode,b),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ls:return b=Js(p.type,p.key,p.props,null,h.mode,b),b.ref=Do(h,null,p),b.return=h,b;case Ti:return p=xd(p,h.mode,b),p.return=h,p;case ur:var C=p._init;return d(h,C(p._payload),b)}if(Go(p)||jo(p))return p=Kr(p,h.mode,b,null),p.return=h,p;ys(h,p)}return null}function v(h,p,b,C){var S=p!==null?p.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return S!==null?null:l(h,p,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ls:return b.key===S?s(h,p,b,C):null;case Ti:return b.key===S?c(h,p,b,C):null;case ur:return S=b._init,v(h,p,S(b._payload),C)}if(Go(b)||jo(b))return S!==null?null:f(h,p,b,C,null);ys(h,b)}return null}function m(h,p,b,C,S){if(typeof C=="string"&&C!==""||typeof C=="number")return h=h.get(b)||null,l(p,h,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ls:return h=h.get(C.key===null?b:C.key)||null,s(p,h,C,S);case Ti:return h=h.get(C.key===null?b:C.key)||null,c(p,h,C,S);case ur:var P=C._init;return m(h,p,b,P(C._payload),S)}if(Go(C)||jo(C))return h=h.get(b)||null,f(p,h,C,S,null);ys(p,C)}return null}function g(h,p,b,C){for(var S=null,P=null,E=p,_=p=0,$=null;E!==null&&_<b.length;_++){E.index>_?($=E,E=null):$=E.sibling;var I=v(h,E,b[_],C);if(I===null){E===null&&(E=$);break}e&&E&&I.alternate===null&&t(h,E),p=o(I,p,_),P===null?S=I:P.sibling=I,P=I,E=$}if(_===b.length)return n(h,E),ke&&Fr(h,_),S;if(E===null){for(;_<b.length;_++)E=d(h,b[_],C),E!==null&&(p=o(E,p,_),P===null?S=E:P.sibling=E,P=E);return ke&&Fr(h,_),S}for(E=r(h,E);_<b.length;_++)$=m(E,h,_,b[_],C),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?_:$.key),p=o($,p,_),P===null?S=$:P.sibling=$,P=$);return e&&E.forEach(function(M){return t(h,M)}),ke&&Fr(h,_),S}function x(h,p,b,C){var S=jo(b);if(typeof S!="function")throw Error(U(150));if(b=S.call(b),b==null)throw Error(U(151));for(var P=S=null,E=p,_=p=0,$=null,I=b.next();E!==null&&!I.done;_++,I=b.next()){E.index>_?($=E,E=null):$=E.sibling;var M=v(h,E,I.value,C);if(M===null){E===null&&(E=$);break}e&&E&&M.alternate===null&&t(h,E),p=o(M,p,_),P===null?S=M:P.sibling=M,P=M,E=$}if(I.done)return n(h,E),ke&&Fr(h,_),S;if(E===null){for(;!I.done;_++,I=b.next())I=d(h,I.value,C),I!==null&&(p=o(I,p,_),P===null?S=I:P.sibling=I,P=I);return ke&&Fr(h,_),S}for(E=r(h,E);!I.done;_++,I=b.next())I=m(E,h,_,I.value,C),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?_:I.key),p=o(I,p,_),P===null?S=I:P.sibling=I,P=I);return e&&E.forEach(function(D){return t(h,D)}),ke&&Fr(h,_),S}function w(h,p,b,C){if(typeof b=="object"&&b!==null&&b.type===ji&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ls:e:{for(var S=b.key,P=p;P!==null;){if(P.key===S){if(S=b.type,S===ji){if(P.tag===7){n(h,P.sibling),p=i(P,b.props.children),p.return=h,h=p;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ur&&f0(S)===P.type){n(h,P.sibling),p=i(P,b.props),p.ref=Do(h,P,b),p.return=h,h=p;break e}n(h,P);break}else t(h,P);P=P.sibling}b.type===ji?(p=Kr(b.props.children,h.mode,C,b.key),p.return=h,h=p):(C=Js(b.type,b.key,b.props,null,h.mode,C),C.ref=Do(h,p,b),C.return=h,h=C)}return a(h);case Ti:e:{for(P=b.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===b.containerInfo&&p.stateNode.implementation===b.implementation){n(h,p.sibling),p=i(p,b.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=xd(b,h.mode,C),p.return=h,h=p}return a(h);case ur:return P=b._init,w(h,p,P(b._payload),C)}if(Go(b))return g(h,p,b,C);if(jo(b))return x(h,p,b,C);ys(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,b),p.return=h,h=p):(n(h,p),p=vd(b,h.mode,C),p.return=h,h=p),a(h)):n(h,p)}return w}var Zi=ob(!0),ab=ob(!1),Ga={},Tn=Mr(Ga),_a=Mr(Ga),Ea=Mr(Ga);function qr(e){if(e===Ga)throw Error(U(174));return e}function Fh(e,t){switch(xe(Ea,t),xe(_a,e),xe(Tn,Ga),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Df(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Df(t,e)}we(Tn),xe(Tn,t)}function Ji(){we(Tn),we(_a),we(Ea)}function sb(e){qr(Ea.current);var t=qr(Tn.current),n=Df(t,e.type);t!==n&&(xe(_a,e),xe(Tn,n))}function Nh(e){_a.current===e&&(we(Tn),we(_a))}var _e=Mr(0);function Al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dd=[];function Bh(){for(var e=0;e<dd.length;e++)dd[e]._workInProgressVersionPrimary=null;dd.length=0}var Ys=rr.ReactCurrentDispatcher,fd=rr.ReactCurrentBatchConfig,ei=0,Ee=null,Ne=null,Ye=null,Rl=!1,oa=!1,Pa=0,_P=0;function it(){throw Error(U(321))}function Vh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function Uh(e,t,n,r,i,o){if(ei=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ys.current=e===null||e.memoizedState===null?jP:OP,e=n(r,i),oa){o=0;do{if(oa=!1,Pa=0,25<=o)throw Error(U(301));o+=1,Ye=Ne=null,t.updateQueue=null,Ys.current=$P,e=n(r,i)}while(oa)}if(Ys.current=zl,t=Ne!==null&&Ne.next!==null,ei=0,Ye=Ne=Ee=null,Rl=!1,t)throw Error(U(300));return e}function Wh(){var e=Pa!==0;return Pa=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ee.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Zt(){if(Ne===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ye===null?Ee.memoizedState:Ye.next;if(t!==null)Ye=t,Ne=e;else{if(e===null)throw Error(U(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ye===null?Ee.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ta(e,t){return typeof t=="function"?t(e):t}function pd(e){var t=Zt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var f=c.lane;if((ei&f)===f)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Ee.lanes|=f,ti|=f}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,gn(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,ti|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hd(e){var t=Zt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);gn(o,t.memoizedState)||(Et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function lb(){}function cb(e,t){var n=Ee,r=Zt(),i=t(),o=!gn(r.memoizedState,i);if(o&&(r.memoizedState=i,Et=!0),r=r.queue,Hh(fb.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,ja(9,db.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(U(349));ei&30||ub(n,t,i)}return i}function ub(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function db(e,t,n,r){t.value=n,t.getSnapshot=r,pb(t)&&hb(e)}function fb(e,t,n){return n(function(){pb(t)&&hb(e)})}function pb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function hb(e){var t=Qn(e,1);t!==null&&fn(t,e,1,-1)}function p0(e){var t=Sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},t.queue=e,e=e.dispatch=TP.bind(null,Ee,e),[t.memoizedState,e]}function ja(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mb(){return Zt().memoizedState}function Xs(e,t,n,r){var i=Sn();Ee.flags|=e,i.memoizedState=ja(1|t,n,void 0,r===void 0?null:r)}function Tc(e,t,n,r){var i=Zt();r=r===void 0?null:r;var o=void 0;if(Ne!==null){var a=Ne.memoizedState;if(o=a.destroy,r!==null&&Vh(r,a.deps)){i.memoizedState=ja(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=ja(1|t,n,o,r)}function h0(e,t){return Xs(8390656,8,e,t)}function Hh(e,t){return Tc(2048,8,e,t)}function gb(e,t){return Tc(4,2,e,t)}function vb(e,t){return Tc(4,4,e,t)}function xb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yb(e,t,n){return n=n!=null?n.concat([e]):null,Tc(4,4,xb.bind(null,t,e),n)}function Gh(){}function bb(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wb(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sb(e,t,n){return ei&21?(gn(n,t)||(n=_y(),Ee.lanes|=n,ti|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function EP(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=fd.transition;fd.transition={};try{e(!1),t()}finally{ge=n,fd.transition=r}}function Cb(){return Zt().memoizedState}function PP(e,t,n){var r=Er(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kb(e))_b(t,n);else if(n=tb(e,t,n,r),n!==null){var i=vt();fn(n,e,r,i),Eb(n,t,r)}}function TP(e,t,n){var r=Er(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kb(e))_b(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,a)){var s=t.interleaved;s===null?(i.next=i,Rh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=tb(e,t,i,r),n!==null&&(i=vt(),fn(n,e,r,i),Eb(n,t,r))}}function kb(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function _b(e,t){oa=Rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ch(e,n)}}var zl={readContext:Qt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},jP={readContext:Qt,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:h0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xs(4194308,4,xb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xs(4,2,e,t)},useMemo:function(e,t){var n=Sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=PP.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:p0,useDebugValue:Gh,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=p0(!1),t=e[0];return e=EP.bind(null,e[1]),Sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=Sn();if(ke){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),Xe===null)throw Error(U(349));ei&30||ub(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,h0(fb.bind(null,r,o,e),[e]),r.flags|=2048,ja(9,db.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Sn(),t=Xe.identifierPrefix;if(ke){var n=Hn,r=Wn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_P++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},OP={readContext:Qt,useCallback:bb,useContext:Qt,useEffect:Hh,useImperativeHandle:yb,useInsertionEffect:gb,useLayoutEffect:vb,useMemo:wb,useReducer:pd,useRef:mb,useState:function(){return pd(Ta)},useDebugValue:Gh,useDeferredValue:function(e){var t=Zt();return Sb(t,Ne.memoizedState,e)},useTransition:function(){var e=pd(Ta)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:lb,useSyncExternalStore:cb,useId:Cb,unstable_isNewReconciler:!1},$P={readContext:Qt,useCallback:bb,useContext:Qt,useEffect:Hh,useImperativeHandle:yb,useInsertionEffect:gb,useLayoutEffect:vb,useMemo:wb,useReducer:hd,useRef:mb,useState:function(){return hd(Ta)},useDebugValue:Gh,useDeferredValue:function(e){var t=Zt();return Ne===null?t.memoizedState=e:Sb(t,Ne.memoizedState,e)},useTransition:function(){var e=hd(Ta)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:lb,useSyncExternalStore:cb,useId:Cb,unstable_isNewReconciler:!1};function eo(e,t){try{var n="",r=t;do n+=oE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function md(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function rp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var IP=typeof WeakMap=="function"?WeakMap:Map;function Pb(e,t,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Nl||(Nl=!0,pp=r),rp(e,t)},n}function Tb(e,t,n){n=Gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){rp(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){rp(e,t),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function m0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new IP;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=GP.bind(null,e,t,n),t.then(e,e))}function g0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function v0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gn(-1,1),t.tag=2,kr(n,t,1))),n.lanes|=1),e)}var MP=rr.ReactCurrentOwner,Et=!1;function mt(e,t,n,r){t.child=e===null?ab(t,null,n,r):Zi(t,e.child,n,r)}function x0(e,t,n,r,i){n=n.render;var o=t.ref;return Wi(t,i),r=Uh(e,t,n,r,o,i),n=Wh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(ke&&n&&$h(t),t.flags|=1,mt(e,t,r,i),t.child)}function y0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!em(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,jb(e,t,o,r,i)):(e=Js(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(a,r)&&e.ref===t.ref)return Zn(e,t,i)}return t.flags|=1,e=Pr(o,r),e.ref=t.ref,e.return=t,t.child=e}function jb(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(wa(o,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Zn(e,t,i)}return ip(e,t,n,r,i)}function Ob(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Fi,Lt),Lt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(Fi,Lt),Lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,xe(Fi,Lt),Lt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,xe(Fi,Lt),Lt|=r;return mt(e,t,i,n),t.child}function $b(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ip(e,t,n,r,i){var o=Tt(n)?Zr:dt.current;return o=Ki(t,o),Wi(t,i),n=Uh(e,t,n,r,o,i),r=Wh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(ke&&r&&$h(t),t.flags|=1,mt(e,t,n,i),t.child)}function b0(e,t,n,r,i){if(Tt(n)){var o=!0;Ol(t)}else o=!1;if(Wi(t,i),t.stateNode===null)Ks(e,t),ib(t,n,r),np(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qt(c):(c=Tt(n)?Zr:dt.current,c=Ki(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&d0(t,a,r,c),dr=!1;var v=t.memoizedState;a.state=v,Ll(t,r,a,i),s=t.memoizedState,l!==r||v!==s||Pt.current||dr?(typeof f=="function"&&(tp(t,n,f,r),s=t.memoizedState),(l=dr||u0(t,n,l,r,v,s,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,nb(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:an(t.type,l),a.props=c,d=t.pendingProps,v=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Qt(s):(s=Tt(n)?Zr:dt.current,s=Ki(t,s));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||v!==s)&&d0(t,a,r,s),dr=!1,v=t.memoizedState,a.state=v,Ll(t,r,a,i);var g=t.memoizedState;l!==d||v!==g||Pt.current||dr?(typeof m=="function"&&(tp(t,n,m,r),g=t.memoizedState),(c=dr||u0(t,n,c,r,v,g,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return op(e,t,n,r,o,i)}function op(e,t,n,r,i,o){$b(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&o0(t,n,!1),Zn(e,t,o);r=t.stateNode,MP.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Zi(t,e.child,null,o),t.child=Zi(t,null,l,o)):mt(e,t,l,o),t.memoizedState=r.state,i&&o0(t,n,!0),t.child}function Ib(e){var t=e.stateNode;t.pendingContext?i0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&i0(e,t.context,!1),Fh(e,t.containerInfo)}function w0(e,t,n,r,i){return Qi(),Mh(i),t.flags|=256,mt(e,t,n,r),t.child}var ap={dehydrated:null,treeContext:null,retryLane:0};function sp(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mb(e,t,n){var r=t.pendingProps,i=_e.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe(_e,i&1),e===null)return Jf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=$c(a,r,0,null),e=Kr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=sp(n),t.memoizedState=ap,e):qh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return DP(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Pr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Pr(l,o):(o=Kr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?sp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ap,r}return o=e.child,e=o.sibling,r=Pr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qh(e,t){return t=$c({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bs(e,t,n,r){return r!==null&&Mh(r),Zi(t,e.child,null,n),e=qh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function DP(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=md(Error(U(422))),bs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=$c({mode:"visible",children:r.children},i,0,null),o=Kr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Zi(t,e.child,null,a),t.child.memoizedState=sp(a),t.memoizedState=ap,o);if(!(t.mode&1))return bs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(U(419)),r=md(o,r,void 0),bs(e,t,a,r)}if(l=(a&e.childLanes)!==0,Et||l){if(r=Xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qn(e,i),fn(r,e,i,-1))}return Jh(),r=md(Error(U(421))),bs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qP.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Rt=Cr(i.nextSibling),Ft=t,ke=!0,cn=null,e!==null&&(qt[Yt++]=Wn,qt[Yt++]=Hn,qt[Yt++]=Jr,Wn=e.id,Hn=e.overflow,Jr=t),t=qh(t,r.children),t.flags|=4096,t)}function S0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ep(e.return,t,n)}function gd(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Db(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(mt(e,t,r.children,n),r=_e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&S0(e,n,t);else if(e.tag===19)S0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(_e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Al(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),gd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Al(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}gd(t,!0,n,null,o);break;case"together":gd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ks(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ti|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=Pr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function LP(e,t,n){switch(t.tag){case 3:Ib(t),Qi();break;case 5:sb(t);break;case 1:Tt(t.type)&&Ol(t);break;case 4:Fh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;xe(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(_e,_e.current&1),t.flags|=128,null):n&t.child.childLanes?Mb(e,t,n):(xe(_e,_e.current&1),e=Zn(e,t,n),e!==null?e.sibling:null);xe(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Db(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,Ob(e,t,n)}return Zn(e,t,n)}var Lb,lp,Ab,Rb;Lb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lp=function(){};Ab=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qr(Tn.current);var o=null;switch(n){case"input":i=Of(e,i),r=Of(e,r),o=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),o=[];break;case"textarea":i=Mf(e,i),r=Mf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Tl)}Lf(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ha.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ha.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ye("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Rb=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lo(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function AP(e,t,n){var r=t.pendingProps;switch(Ih(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return Tt(t.type)&&jl(),ot(t),null;case 3:return r=t.stateNode,Ji(),we(Pt),we(dt),Bh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,cn!==null&&(gp(cn),cn=null))),lp(e,t),ot(t),null;case 5:Nh(t);var i=qr(Ea.current);if(n=t.type,e!==null&&t.stateNode!=null)Ab(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return ot(t),null}if(e=qr(Tn.current),xs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[_n]=t,r[ka]=o,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Yo.length;i++)ye(Yo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":$g(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":Mg(r,o),ye("invalid",r)}Lf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&vs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&vs(r.textContent,l,e),i=["children",""+l]):ha.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":cs(r),Ig(r,o,!0);break;case"textarea":cs(r),Dg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Tl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[_n]=t,e[ka]=r,Lb(e,t,!1,!1),t.stateNode=e;e:{switch(a=Af(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yo.length;i++)ye(Yo[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":$g(e,r),i=Of(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Mg(e,r),i=Mf(e,r),ye("invalid",e);break;default:i=r}Lf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?py(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&dy(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ma(e,s):typeof s=="number"&&ma(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ha.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ye("scroll",e):s!=null&&vh(e,o,s,a))}switch(n){case"input":cs(e),Ig(e,r,!1);break;case"textarea":cs(e),Dg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ni(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ni(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)Rb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=qr(Ea.current),qr(Tn.current),xs(t)){if(r=t.stateNode,n=t.memoizedProps,r[_n]=t,(o=r.nodeValue!==n)&&(e=Ft,e!==null))switch(e.tag){case 3:vs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=t,t.stateNode=r}return ot(t),null;case 13:if(we(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&Rt!==null&&t.mode&1&&!(t.flags&128))eb(),Qi(),t.flags|=98560,o=!1;else if(o=xs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[_n]=t}else Qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ot(t),o=!1}else cn!==null&&(gp(cn),cn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Ve===0&&(Ve=3):Jh())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return Ji(),lp(e,t),e===null&&Sa(t.stateNode.containerInfo),ot(t),null;case 10:return Ah(t.type._context),ot(t),null;case 17:return Tt(t.type)&&jl(),ot(t),null;case 19:if(we(_e),o=t.memoizedState,o===null)return ot(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Lo(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Al(e),a!==null){for(t.flags|=128,Lo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(_e,_e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>to&&(t.flags|=128,r=!0,Lo(o,!1),t.lanes=4194304)}else{if(!r)if(e=Al(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ke)return ot(t),null}else 2*Ie()-o.renderingStartTime>to&&n!==1073741824&&(t.flags|=128,r=!0,Lo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,n=_e.current,xe(_e,r?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return Zh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Lt&1073741824&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function RP(e,t){switch(Ih(t),t.tag){case 1:return Tt(t.type)&&jl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(),we(Pt),we(dt),Bh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nh(t),null;case 13:if(we(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));Qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(_e),null;case 4:return Ji(),null;case 10:return Ah(t.type._context),null;case 22:case 23:return Zh(),null;case 24:return null;default:return null}}var ws=!1,ct=!1,zP=typeof WeakSet=="function"?WeakSet:Set,Y=null;function zi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function cp(e,t,n){try{n()}catch(r){je(e,t,r)}}var C0=!1;function FP(e,t){if(Gf=_l,e=By(),Oh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,f=0,d=e,v=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)v=d,d=m;for(;;){if(d===e)break t;if(v===n&&++c===i&&(l=a),v===o&&++f===r&&(s=a),(m=d.nextSibling)!==null)break;d=v,v=d.parentNode}d=m}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(qf={focusedElem:e,selectionRange:n},_l=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,w=g.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:an(t.type,x),w);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(C){je(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return g=C0,C0=!1,g}function aa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&cp(t,n,o)}i=i.next}while(i!==r)}}function jc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function up(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zb(e){var t=e.alternate;t!==null&&(e.alternate=null,zb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_n],delete t[ka],delete t[Kf],delete t[wP],delete t[SP])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fb(e){return e.tag===5||e.tag===3||e.tag===4}function k0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tl));else if(r!==4&&(e=e.child,e!==null))for(dp(e,t,n),e=e.sibling;e!==null;)dp(e,t,n),e=e.sibling}function fp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fp(e,t,n),e=e.sibling;e!==null;)fp(e,t,n),e=e.sibling}var et=null,sn=!1;function lr(e,t,n){for(n=n.child;n!==null;)Nb(e,t,n),n=n.sibling}function Nb(e,t,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(wc,n)}catch{}switch(n.tag){case 5:ct||zi(n,t);case 6:var r=et,i=sn;et=null,lr(e,t,n),et=r,sn=i,et!==null&&(sn?(e=et,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(sn?(e=et,n=n.stateNode,e.nodeType===8?cd(e.parentNode,n):e.nodeType===1&&cd(e,n),ya(e)):cd(et,n.stateNode));break;case 4:r=et,i=sn,et=n.stateNode.containerInfo,sn=!0,lr(e,t,n),et=r,sn=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&cp(n,t,a),i=i.next}while(i!==r)}lr(e,t,n);break;case 1:if(!ct&&(zi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,t,l)}lr(e,t,n);break;case 21:lr(e,t,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,lr(e,t,n),ct=r):lr(e,t,n);break;default:lr(e,t,n)}}function _0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zP),t.forEach(function(r){var i=YP.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,sn=!1;break e;case 3:et=l.stateNode.containerInfo,sn=!0;break e;case 4:et=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(et===null)throw Error(U(160));Nb(o,a,i),et=null,sn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){je(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bb(t,e),t=t.sibling}function Bb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),bn(e),r&4){try{aa(3,e,e.return),jc(3,e)}catch(x){je(e,e.return,x)}try{aa(5,e,e.return)}catch(x){je(e,e.return,x)}}break;case 1:tn(t,e),bn(e),r&512&&n!==null&&zi(n,n.return);break;case 5:if(tn(t,e),bn(e),r&512&&n!==null&&zi(n,n.return),e.flags&32){var i=e.stateNode;try{ma(i,"")}catch(x){je(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ly(i,o),Af(l,a);var c=Af(l,o);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?py(i,d):f==="dangerouslySetInnerHTML"?dy(i,d):f==="children"?ma(i,d):vh(i,f,d,c)}switch(l){case"input":$f(i,o);break;case"textarea":cy(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Ni(i,!!o.multiple,m,!1):v!==!!o.multiple&&(o.defaultValue!=null?Ni(i,!!o.multiple,o.defaultValue,!0):Ni(i,!!o.multiple,o.multiple?[]:"",!1))}i[ka]=o}catch(x){je(e,e.return,x)}}break;case 6:if(tn(t,e),bn(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){je(e,e.return,x)}}break;case 3:if(tn(t,e),bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(t.containerInfo)}catch(x){je(e,e.return,x)}break;case 4:tn(t,e),bn(e);break;case 13:tn(t,e),bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Kh=Ie())),r&4&&_0(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ct=(c=ct)||f,tn(t,e),ct=c):tn(t,e),bn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(Y=e,f=e.child;f!==null;){for(d=Y=f;Y!==null;){switch(v=Y,m=v.child,v.tag){case 0:case 11:case 14:case 15:aa(4,v,v.return);break;case 1:zi(v,v.return);var g=v.stateNode;if(typeof g.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){je(r,n,x)}}break;case 5:zi(v,v.return);break;case 22:if(v.memoizedState!==null){P0(d);continue}}m!==null?(m.return=v,Y=m):P0(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=fy("display",a))}catch(x){je(e,e.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){je(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tn(t,e),bn(e),r&4&&_0(e);break;case 21:break;default:tn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fb(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ma(i,""),r.flags&=-33);var o=k0(e);fp(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=k0(e);dp(e,l,a);break;default:throw Error(U(161))}}catch(s){je(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function NP(e,t,n){Y=e,Vb(e)}function Vb(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var i=Y,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ws;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ct;l=ws;var c=ct;if(ws=a,(ct=s)&&!c)for(Y=i;Y!==null;)a=Y,s=a.child,a.tag===22&&a.memoizedState!==null?T0(i):s!==null?(s.return=a,Y=s):T0(i);for(;o!==null;)Y=o,Vb(o),o=o.sibling;Y=i,ws=l,ct=c}E0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Y=o):E0(e)}}function E0(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ct||jc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:an(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&c0(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}c0(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ya(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ct||t.flags&512&&up(t)}catch(v){je(t,t.return,v)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function P0(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function T0(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jc(4,t)}catch(s){je(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){je(t,i,s)}}var o=t.return;try{up(t)}catch(s){je(t,o,s)}break;case 5:var a=t.return;try{up(t)}catch(s){je(t,a,s)}}}catch(s){je(t,t.return,s)}if(t===e){Y=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Y=l;break}Y=t.return}}var BP=Math.ceil,Fl=rr.ReactCurrentDispatcher,Yh=rr.ReactCurrentOwner,Kt=rr.ReactCurrentBatchConfig,le=0,Xe=null,Re=null,nt=0,Lt=0,Fi=Mr(0),Ve=0,Oa=null,ti=0,Oc=0,Xh=0,sa=null,_t=null,Kh=0,to=1/0,zn=null,Nl=!1,pp=null,_r=null,Ss=!1,gr=null,Bl=0,la=0,hp=null,Qs=-1,Zs=0;function vt(){return le&6?Ie():Qs!==-1?Qs:Qs=Ie()}function Er(e){return e.mode&1?le&2&&nt!==0?nt&-nt:kP.transition!==null?(Zs===0&&(Zs=_y()),Zs):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Iy(e.type)),e):1}function fn(e,t,n,r){if(50<la)throw la=0,hp=null,Error(U(185));Ua(e,n,r),(!(le&2)||e!==Xe)&&(e===Xe&&(!(le&2)&&(Oc|=n),Ve===4&&pr(e,nt)),jt(e,r),n===1&&le===0&&!(t.mode&1)&&(to=Ie()+500,Ec&&Dr()))}function jt(e,t){var n=e.callbackNode;kE(e,t);var r=kl(e,e===Xe?nt:0);if(r===0)n!==null&&Rg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Rg(n),t===1)e.tag===0?CP(j0.bind(null,e)):Qy(j0.bind(null,e)),yP(function(){!(le&6)&&Dr()}),n=null;else{switch(Ey(r)){case 1:n=Sh;break;case 4:n=Cy;break;case 16:n=Cl;break;case 536870912:n=ky;break;default:n=Cl}n=Kb(n,Ub.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ub(e,t){if(Qs=-1,Zs=0,le&6)throw Error(U(327));var n=e.callbackNode;if(Hi()&&e.callbackNode!==n)return null;var r=kl(e,e===Xe?nt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Vl(e,r);else{t=r;var i=le;le|=2;var o=Hb();(Xe!==e||nt!==t)&&(zn=null,to=Ie()+500,Xr(e,t));do try{WP();break}catch(l){Wb(e,l)}while(1);Lh(),Fl.current=o,le=i,Re!==null?t=0:(Xe=null,nt=0,t=Ve)}if(t!==0){if(t===2&&(i=Bf(e),i!==0&&(r=i,t=mp(e,i))),t===1)throw n=Oa,Xr(e,0),pr(e,r),jt(e,Ie()),n;if(t===6)pr(e,r);else{if(i=e.current.alternate,!(r&30)&&!VP(i)&&(t=Vl(e,r),t===2&&(o=Bf(e),o!==0&&(r=o,t=mp(e,o))),t===1))throw n=Oa,Xr(e,0),pr(e,r),jt(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Nr(e,_t,zn);break;case 3:if(pr(e,r),(r&130023424)===r&&(t=Kh+500-Ie(),10<t)){if(kl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){vt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xf(Nr.bind(null,e,_t,zn),t);break}Nr(e,_t,zn);break;case 4:if(pr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BP(r/1960))-r,10<r){e.timeoutHandle=Xf(Nr.bind(null,e,_t,zn),r);break}Nr(e,_t,zn);break;case 5:Nr(e,_t,zn);break;default:throw Error(U(329))}}}return jt(e,Ie()),e.callbackNode===n?Ub.bind(null,e):null}function mp(e,t){var n=sa;return e.current.memoizedState.isDehydrated&&(Xr(e,t).flags|=256),e=Vl(e,t),e!==2&&(t=_t,_t=n,t!==null&&gp(t)),e}function gp(e){_t===null?_t=e:_t.push.apply(_t,e)}function VP(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pr(e,t){for(t&=~Xh,t&=~Oc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dn(t),r=1<<n;e[n]=-1,t&=~r}}function j0(e){if(le&6)throw Error(U(327));Hi();var t=kl(e,0);if(!(t&1))return jt(e,Ie()),null;var n=Vl(e,t);if(e.tag!==0&&n===2){var r=Bf(e);r!==0&&(t=r,n=mp(e,r))}if(n===1)throw n=Oa,Xr(e,0),pr(e,t),jt(e,Ie()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nr(e,_t,zn),jt(e,Ie()),null}function Qh(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(to=Ie()+500,Ec&&Dr())}}function ni(e){gr!==null&&gr.tag===0&&!(le&6)&&Hi();var t=le;le|=1;var n=Kt.transition,r=ge;try{if(Kt.transition=null,ge=1,e)return e()}finally{ge=r,Kt.transition=n,le=t,!(le&6)&&Dr()}}function Zh(){Lt=Fi.current,we(Fi)}function Xr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xP(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Ih(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jl();break;case 3:Ji(),we(Pt),we(dt),Bh();break;case 5:Nh(r);break;case 4:Ji();break;case 13:we(_e);break;case 19:we(_e);break;case 10:Ah(r.type._context);break;case 22:case 23:Zh()}n=n.return}if(Xe=e,Re=e=Pr(e.current,null),nt=Lt=t,Ve=0,Oa=null,Xh=Oc=ti=0,_t=sa=null,Gr!==null){for(t=0;t<Gr.length;t++)if(n=Gr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Gr=null}return e}function Wb(e,t){do{var n=Re;try{if(Lh(),Ys.current=zl,Rl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Rl=!1}if(ei=0,Ye=Ne=Ee=null,oa=!1,Pa=0,Yh.current=null,n===null||n.return===null){Ve=1,Oa=t,Re=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=nt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=g0(a);if(m!==null){m.flags&=-257,v0(m,a,l,o,t),m.mode&1&&m0(o,c,t),t=m,s=c;var g=t.updateQueue;if(g===null){var x=new Set;x.add(s),t.updateQueue=x}else g.add(s);break e}else{if(!(t&1)){m0(o,c,t),Jh();break e}s=Error(U(426))}}else if(ke&&l.mode&1){var w=g0(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),v0(w,a,l,o,t),Mh(eo(s,l));break e}}o=s=eo(s,l),Ve!==4&&(Ve=2),sa===null?sa=[o]:sa.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Pb(o,s,t);l0(o,h);break e;case 1:l=s;var p=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(_r===null||!_r.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Tb(o,l,t);l0(o,C);break e}}o=o.return}while(o!==null)}qb(n)}catch(S){t=S,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function Hb(){var e=Fl.current;return Fl.current=zl,e===null?zl:e}function Jh(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Xe===null||!(ti&268435455)&&!(Oc&268435455)||pr(Xe,nt)}function Vl(e,t){var n=le;le|=2;var r=Hb();(Xe!==e||nt!==t)&&(zn=null,Xr(e,t));do try{UP();break}catch(i){Wb(e,i)}while(1);if(Lh(),le=n,Fl.current=r,Re!==null)throw Error(U(261));return Xe=null,nt=0,Ve}function UP(){for(;Re!==null;)Gb(Re)}function WP(){for(;Re!==null&&!mE();)Gb(Re)}function Gb(e){var t=Xb(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?qb(e):Re=t,Yh.current=null}function qb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=RP(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Re=null;return}}else if(n=AP(n,t,Lt),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ve===0&&(Ve=5)}function Nr(e,t,n){var r=ge,i=Kt.transition;try{Kt.transition=null,ge=1,HP(e,t,n,r)}finally{Kt.transition=i,ge=r}return null}function HP(e,t,n,r){do Hi();while(gr!==null);if(le&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(_E(e,o),e===Xe&&(Re=Xe=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ss||(Ss=!0,Kb(Cl,function(){return Hi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Kt.transition,Kt.transition=null;var a=ge;ge=1;var l=le;le|=4,Yh.current=null,FP(e,n),Bb(n,e),dP(qf),_l=!!Gf,qf=Gf=null,e.current=n,NP(n),gE(),le=l,ge=a,Kt.transition=o}else e.current=n;if(Ss&&(Ss=!1,gr=e,Bl=i),o=e.pendingLanes,o===0&&(_r=null),yE(n.stateNode),jt(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,e=pp,pp=null,e;return Bl&1&&e.tag!==0&&Hi(),o=e.pendingLanes,o&1?e===hp?la++:(la=0,hp=e):la=0,Dr(),null}function Hi(){if(gr!==null){var e=Ey(Bl),t=Kt.transition,n=ge;try{if(Kt.transition=null,ge=16>e?16:e,gr===null)var r=!1;else{if(e=gr,gr=null,Bl=0,le&6)throw Error(U(331));var i=le;for(le|=4,Y=e.current;Y!==null;){var o=Y,a=o.child;if(Y.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(Y=c;Y!==null;){var f=Y;switch(f.tag){case 0:case 11:case 15:aa(8,f,o)}var d=f.child;if(d!==null)d.return=f,Y=d;else for(;Y!==null;){f=Y;var v=f.sibling,m=f.return;if(zb(f),f===c){Y=null;break}if(v!==null){v.return=m,Y=v;break}Y=m}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}Y=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Y=a;else e:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:aa(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Y=h;break e}Y=o.return}}var p=e.current;for(Y=p;Y!==null;){a=Y;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,Y=b;else e:for(a=p;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:jc(9,l)}}catch(S){je(l,l.return,S)}if(l===a){Y=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,Y=C;break e}Y=l.return}}if(le=i,Dr(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(wc,e)}catch{}r=!0}return r}finally{ge=n,Kt.transition=t}}return!1}function O0(e,t,n){t=eo(n,t),t=Pb(e,t,1),e=kr(e,t,1),t=vt(),e!==null&&(Ua(e,1,t),jt(e,t))}function je(e,t,n){if(e.tag===3)O0(e,e,n);else for(;t!==null;){if(t.tag===3){O0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){e=eo(n,e),e=Tb(t,e,1),t=kr(t,e,1),e=vt(),t!==null&&(Ua(t,1,e),jt(t,e));break}}t=t.return}}function GP(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(nt&n)===n&&(Ve===4||Ve===3&&(nt&130023424)===nt&&500>Ie()-Kh?Xr(e,0):Xh|=n),jt(e,t)}function Yb(e,t){t===0&&(e.mode&1?(t=fs,fs<<=1,!(fs&130023424)&&(fs=4194304)):t=1);var n=vt();e=Qn(e,t),e!==null&&(Ua(e,t,n),jt(e,n))}function qP(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yb(e,n)}function YP(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Yb(e,n)}var Xb;Xb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pt.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,LP(e,t,n);Et=!!(e.flags&131072)}else Et=!1,ke&&t.flags&1048576&&Zy(t,Il,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ks(e,t),e=t.pendingProps;var i=Ki(t,dt.current);Wi(t,n),i=Uh(null,t,r,e,i,n);var o=Wh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Tt(r)?(o=!0,Ol(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zh(t),i.updater=Pc,t.stateNode=i,i._reactInternals=t,np(t,r,e,n),t=op(null,t,r,!0,o,n)):(t.tag=0,ke&&o&&$h(t),mt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ks(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=KP(r),e=an(r,e),i){case 0:t=ip(null,t,r,e,n);break e;case 1:t=b0(null,t,r,e,n);break e;case 11:t=x0(null,t,r,e,n);break e;case 14:t=y0(null,t,r,an(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),ip(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),b0(e,t,r,i,n);case 3:e:{if(Ib(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,nb(e,t),Ll(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=eo(Error(U(423)),t),t=w0(e,t,r,n,i);break e}else if(r!==i){i=eo(Error(U(424)),t),t=w0(e,t,r,n,i);break e}else for(Rt=Cr(t.stateNode.containerInfo.firstChild),Ft=t,ke=!0,cn=null,n=ab(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){t=Zn(e,t,n);break e}mt(e,t,r,n)}t=t.child}return t;case 5:return sb(t),e===null&&Jf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Yf(r,i)?a=null:o!==null&&Yf(r,o)&&(t.flags|=32),$b(e,t),mt(e,t,a,n),t.child;case 6:return e===null&&Jf(t),null;case 13:return Mb(e,t,n);case 4:return Fh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zi(t,null,r,n):mt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),x0(e,t,r,i,n);case 7:return mt(e,t,t.pendingProps,n),t.child;case 8:return mt(e,t,t.pendingProps.children,n),t.child;case 12:return mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,xe(Ml,r._currentValue),r._currentValue=a,o!==null)if(gn(o.value,a)){if(o.children===i.children&&!Pt.current){t=Zn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Gn(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ep(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(U(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ep(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}mt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Wi(t,n),i=Qt(i),r=r(i),t.flags|=1,mt(e,t,r,n),t.child;case 14:return r=t.type,i=an(r,t.pendingProps),i=an(r.type,i),y0(e,t,r,i,n);case 15:return jb(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),Ks(e,t),t.tag=1,Tt(r)?(e=!0,Ol(t)):e=!1,Wi(t,n),ib(t,r,i),np(t,r,i,n),op(null,t,r,!0,e,n);case 19:return Db(e,t,n);case 22:return Ob(e,t,n)}throw Error(U(156,t.tag))};function Kb(e,t){return Sy(e,t)}function XP(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,r){return new XP(e,t,n,r)}function em(e){return e=e.prototype,!(!e||!e.isReactComponent)}function KP(e){if(typeof e=="function")return em(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yh)return 11;if(e===bh)return 14}return 2}function Pr(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Js(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")em(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ji:return Kr(n.children,i,o,t);case xh:a=8,i|=8;break;case Ef:return e=Xt(12,n,t,i|2),e.elementType=Ef,e.lanes=o,e;case Pf:return e=Xt(13,n,t,i),e.elementType=Pf,e.lanes=o,e;case Tf:return e=Xt(19,n,t,i),e.elementType=Tf,e.lanes=o,e;case oy:return $c(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ry:a=10;break e;case iy:a=9;break e;case yh:a=11;break e;case bh:a=14;break e;case ur:a=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Xt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Kr(e,t,n,r){return e=Xt(7,e,r,t),e.lanes=n,e}function $c(e,t,n,r){return e=Xt(22,e,r,t),e.elementType=oy,e.lanes=n,e.stateNode={isHidden:!1},e}function vd(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function xd(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function QP(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tm(e,t,n,r,i,o,a,l,s){return e=new QP(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(o),e}function ZP(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qb(e){if(!e)return Or;e=e._reactInternals;e:{if(ui(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(Tt(n))return Ky(e,n,t)}return t}function Zb(e,t,n,r,i,o,a,l,s){return e=tm(n,r,!0,e,i,o,a,l,s),e.context=Qb(null),n=e.current,r=vt(),i=Er(n),o=Gn(r,i),o.callback=t??null,kr(n,o,i),e.current.lanes=i,Ua(e,i,r),jt(e,r),e}function Ic(e,t,n,r){var i=t.current,o=vt(),a=Er(i);return n=Qb(n),t.context===null?t.context=n:t.pendingContext=n,t=Gn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kr(i,t,a),e!==null&&(fn(e,i,a,o),qs(e,i,a)),a}function Ul(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nm(e,t){$0(e,t),(e=e.alternate)&&$0(e,t)}function JP(){return null}var Jb=typeof reportError=="function"?reportError:function(e){console.error(e)};function rm(e){this._internalRoot=e}Mc.prototype.render=rm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Ic(e,t,null,null)};Mc.prototype.unmount=rm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ni(function(){Ic(null,e,null,null)}),t[Kn]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fr.length&&t!==0&&t<fr[n].priority;n++);fr.splice(n,0,e),n===0&&$y(e)}};function im(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function I0(){}function eT(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ul(a);o.call(c)}}var a=Zb(t,r,e,0,null,!1,!1,"",I0);return e._reactRootContainer=a,e[Kn]=a.current,Sa(e.nodeType===8?e.parentNode:e),ni(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ul(s);l.call(c)}}var s=tm(e,0,!1,null,null,!1,!1,"",I0);return e._reactRootContainer=s,e[Kn]=s.current,Sa(e.nodeType===8?e.parentNode:e),ni(function(){Ic(t,s,n,r)}),s}function Lc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Ul(a);l.call(s)}}Ic(t,a,e,i)}else a=eT(n,t,e,i,r);return Ul(a)}Py=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qo(t.pendingLanes);n!==0&&(Ch(t,n|1),jt(t,Ie()),!(le&6)&&(to=Ie()+500,Dr()))}break;case 13:ni(function(){var r=Qn(e,1);if(r!==null){var i=vt();fn(r,e,1,i)}}),nm(e,1)}};kh=function(e){if(e.tag===13){var t=Qn(e,134217728);if(t!==null){var n=vt();fn(t,e,134217728,n)}nm(e,134217728)}};Ty=function(e){if(e.tag===13){var t=Er(e),n=Qn(e,t);if(n!==null){var r=vt();fn(n,e,t,r)}nm(e,t)}};jy=function(){return ge};Oy=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};zf=function(e,t,n){switch(t){case"input":if($f(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_c(r);if(!i)throw Error(U(90));sy(r),$f(r,i)}}}break;case"textarea":cy(e,n);break;case"select":t=n.value,t!=null&&Ni(e,!!n.multiple,t,!1)}};gy=Qh;vy=ni;var tT={usingClientEntryPoint:!1,Events:[Ha,Mi,_c,hy,my,Qh]},Ao={findFiberByHostInstance:Hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nT={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=by(e),e===null?null:e.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||JP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{wc=Cs.inject(nT),Pn=Cs}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tT;Ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!im(t))throw Error(U(200));return ZP(e,t,null,n)};Ut.createRoot=function(e,t){if(!im(e))throw Error(U(299));var n=!1,r="",i=Jb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tm(e,1,!1,null,null,n,!1,r,i),e[Kn]=t.current,Sa(e.nodeType===8?e.parentNode:e),new rm(t)};Ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=by(t),e=e===null?null:e.stateNode,e};Ut.flushSync=function(e){return ni(e)};Ut.hydrate=function(e,t,n){if(!Dc(t))throw Error(U(200));return Lc(null,e,t,!0,n)};Ut.hydrateRoot=function(e,t,n){if(!im(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Jb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Zb(t,null,e,1,n??null,i,!1,o,a),e[Kn]=t.current,Sa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mc(t)};Ut.render=function(e,t,n){if(!Dc(t))throw Error(U(200));return Lc(null,e,t,!1,n)};Ut.unmountComponentAtNode=function(e){if(!Dc(e))throw Error(U(40));return e._reactRootContainer?(ni(function(){Lc(null,null,e,!1,function(){e._reactRootContainer=null,e[Kn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Qh;Ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Dc(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Lc(e,t,n,!1,r)};Ut.version="18.2.0-next-9e3b772b8-20220608";function ew(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ew)}catch(e){console.error(e)}}ew(),Zx.exports=Ut;var Ac=Zx.exports,M0=Ac;kf.createRoot=M0.createRoot,kf.hydrateRoot=M0.hydrateRoot;var ut=function(){return ut=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ut.apply(this,arguments)};function no(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function rT(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var iT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,oT=rT(function(e){return iT.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),be="-ms-",ca="-moz-",ue="-webkit-",tw="comm",Rc="rule",om="decl",aT="@import",sT="@namespace",nw="@keyframes",lT="@layer",rw=Math.abs,am=String.fromCharCode,vp=Object.assign;function cT(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function iw(e){return e.trim()}function Fn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function el(e,t,n){return e.indexOf(t,n)}function Be(e,t){return e.charCodeAt(t)|0}function ri(e,t,n){return e.slice(t,n)}function ln(e){return e.length}function ow(e){return e.length}function Xo(e,t){return t.push(e),e}function uT(e,t){return e.map(t).join("")}function D0(e,t){return e.filter(function(n){return!Fn(n,t)})}var zc=1,ro=1,aw=0,Jt=0,Le=0,vo="";function Fc(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:zc,column:ro,length:a,return:"",siblings:l}}function cr(e,t){return vp(Fc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function gi(e){for(;e.root;)e=cr(e.root,{children:[e]});Xo(e,e.siblings)}function dT(){return Le}function fT(){return Le=Jt>0?Be(vo,--Jt):0,ro--,Le===10&&(ro=1,zc--),Le}function pn(){return Le=Jt<aw?Be(vo,Jt++):0,ro++,Le===10&&(ro=1,zc++),Le}function vr(){return Be(vo,Jt)}function tl(){return Jt}function Nc(e,t){return ri(vo,e,t)}function $a(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pT(e){return zc=ro=1,aw=ln(vo=e),Jt=0,[]}function hT(e){return vo="",e}function yd(e){return iw(Nc(Jt-1,xp(e===91?e+2:e===40?e+1:e)))}function mT(e){for(;(Le=vr())&&Le<33;)pn();return $a(e)>2||$a(Le)>3?"":" "}function gT(e,t){for(;--t&&pn()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Nc(e,tl()+(t<6&&vr()==32&&pn()==32))}function xp(e){for(;pn();)switch(Le){case e:return Jt;case 34:case 39:e!==34&&e!==39&&xp(Le);break;case 40:e===41&&xp(e);break;case 92:pn();break}return Jt}function vT(e,t){for(;pn()&&e+Le!==47+10;)if(e+Le===42+42&&vr()===47)break;return"/*"+Nc(t,Jt-1)+"*"+am(e===47?e:pn())}function xT(e){for(;!$a(vr());)pn();return Nc(e,Jt)}function yT(e){return hT(nl("",null,null,null,[""],e=pT(e),0,[0],e))}function nl(e,t,n,r,i,o,a,l,s){for(var c=0,f=0,d=a,v=0,m=0,g=0,x=1,w=1,h=1,p=0,b="",C=i,S=o,P=r,E=b;w;)switch(g=p,p=pn()){case 40:if(g!=108&&Be(E,d-1)==58){el(E+=ne(yd(p),"&","&\f"),"&\f",rw(c?l[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:E+=yd(p);break;case 9:case 10:case 13:case 32:E+=mT(g);break;case 92:E+=gT(tl()-1,7);continue;case 47:switch(vr()){case 42:case 47:Xo(bT(vT(pn(),tl()),t,n,s),s),($a(g||1)==5||$a(vr()||1)==5)&&ln(E)&&ri(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*x:l[c++]=ln(E)*h;case 125*x:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+f:h==-1&&(E=ne(E,/\f/g,"")),m>0&&(ln(E)-d||x===0&&g===47)&&Xo(m>32?A0(E+";",r,n,d-1,s):A0(ne(E," ","")+";",r,n,d-2,s),s);break;case 59:E+=";";default:if(Xo(P=L0(E,t,n,c,f,i,l,b,C=[],S=[],d,o),o),p===123)if(f===0)nl(E,t,P,P,C,o,d,l,S);else{switch(v){case 99:if(Be(E,3)===110)break;case 108:if(Be(E,2)===97)break;default:f=0;case 100:case 109:case 115:}f?nl(e,P,P,r&&Xo(L0(e,P,P,0,0,i,l,b,i,C=[],d,S),S),i,S,d,l,r?C:S):nl(E,P,P,P,[""],S,0,l,S)}}c=f=m=0,x=h=1,b=E="",d=a;break;case 58:d=1+ln(E),m=g;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&fT()==125)continue}switch(E+=am(p),p*x){case 38:h=f>0?1:(E+="\f",-1);break;case 44:l[c++]=(ln(E)-1)*h,h=1;break;case 64:vr()===45&&(E+=yd(pn())),v=vr(),f=d=ln(b=E+=xT(tl())),p++;break;case 45:g===45&&ln(E)==2&&(x=0)}}return o}function L0(e,t,n,r,i,o,a,l,s,c,f,d){for(var v=i-1,m=i===0?o:[""],g=ow(m),x=0,w=0,h=0;x<r;++x)for(var p=0,b=ri(e,v+1,v=rw(w=a[x])),C=e;p<g;++p)(C=iw(w>0?m[p]+" "+b:ne(b,/&\f/g,m[p])))&&(s[h++]=C);return Fc(e,t,n,i===0?Rc:l,s,c,f,d)}function bT(e,t,n,r){return Fc(e,t,n,tw,am(dT()),ri(e,2,-2),0,r)}function A0(e,t,n,r,i){return Fc(e,t,n,om,ri(e,0,r),ri(e,r+1,-1),r,i)}function sw(e,t,n){switch(cT(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ca+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+ca+e+be+e+e;case 5936:switch(Be(e,t+11)){case 114:return ue+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+be+e+e;case 6165:return ue+e+be+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+be+"flex-$1$2")+e;case 5443:return ue+e+be+"flex-item-"+ne(e,/flex-|-self/g,"")+(Fn(e,/flex-|baseline/)?"":be+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+be+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+be+ne(e,"shrink","negative")+e;case 5292:return ue+e+be+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+be+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+be+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!Fn(e,/flex-|baseline/))return be+"grid-column-align"+ri(e,t)+e;break;case 2592:case 3360:return be+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Fn(r.props,/grid-\w+-end/)})?~el(e+(n=n[t].value),"span",0)?e:be+ne(e,"-start","")+e+be+"grid-row-span:"+(~el(n,"span",0)?Fn(n,/\d+/):+Fn(n,/\d+/)-+Fn(e,/\d+/))+";":be+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Fn(r.props,/grid-\w+-start/)})?e:be+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+ca+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~el(e,"stretch",0)?sw(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,c){return be+i+":"+o+c+(a?be+i+"-span:"+(l?s:+s-+o)+c:"")+e});case 4949:if(Be(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Be(e,Be(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Be(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+be+"$2box$3")+e;case 100:return ne(e,":",":"+be)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Wl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function wT(e,t,n,r){switch(e.type){case lT:if(e.children.length)break;case aT:case sT:case om:return e.return=e.return||e.value;case tw:return"";case nw:return e.return=e.value+"{"+Wl(e.children,r)+"}";case Rc:if(!ln(e.value=e.props.join(",")))return""}return ln(n=Wl(e.children,r))?e.return=e.value+"{"+n+"}":""}function ST(e){var t=ow(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function CT(e){return function(t){t.root||(t=t.return)&&e(t)}}function kT(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case om:e.return=sw(e.value,e.length,n);return;case nw:return Wl([cr(e,{value:ne(e.value,"@","@"+ue)})],r);case Rc:if(e.length)return uT(n=e.props,function(i){switch(Fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gi(cr(e,{props:[ne(i,/:(read-\w+)/,":"+ca+"$1")]})),gi(cr(e,{props:[i]})),vp(e,{props:D0(n,r)});break;case"::placeholder":gi(cr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),gi(cr(e,{props:[ne(i,/:(plac\w+)/,":"+ca+"$1")]})),gi(cr(e,{props:[ne(i,/:(plac\w+)/,be+"input-$1")]})),gi(cr(e,{props:[i]})),vp(e,{props:D0(n,r)});break}return""})}}var _T={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},io=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",lw="active",cw="data-styled-version",Bc="6.3.11",sm=`/*!sc*/
`,ua=typeof window<"u"&&typeof document<"u",ET=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),PT={};function qa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var rl=new Map,Hl=new Map,il=1,Ko=function(e){if(rl.has(e))return rl.get(e);for(;Hl.has(il);)il++;var t=il++;return rl.set(e,t),Hl.set(t,e),t},TT=function(e,t){il=t+1,rl.set(e,t),Hl.set(t,e)},lm=Object.freeze([]),oo=Object.freeze({});function uw(e,t,n){return n===void 0&&(n=oo),e.theme!==n.theme&&e.theme||t||n.theme}var dw=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),jT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,OT=/(^-|-$)/g;function R0(e){return e.replace(jT,"-").replace(OT,"")}var $T=/(a)(d)/gi,z0=function(e){return String.fromCharCode(e+(e>25?39:97))};function yp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=z0(t%52)+n;return(z0(t%52)+n).replace($T,"$1-$2")}var bd,Br=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},fw=function(e){return Br(5381,e)};function cm(e){return yp(fw(e)>>>0)}function IT(e){return e.displayName||e.name||"Component"}function wd(e){return typeof e=="string"&&!0}var pw=typeof Symbol=="function"&&Symbol.for,hw=pw?Symbol.for("react.memo"):60115,MT=pw?Symbol.for("react.forward_ref"):60112,DT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},LT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},AT=((bd={})[MT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bd[hw]=mw,bd);function F0(e){return("type"in(t=e)&&t.type.$$typeof)===hw?mw:"$$typeof"in e?AT[e.$$typeof]:DT;var t}var RT=Object.defineProperty,zT=Object.getOwnPropertyNames,N0=Object.getOwnPropertySymbols,FT=Object.getOwnPropertyDescriptor,NT=Object.getPrototypeOf,B0=Object.prototype;function gw(e,t,n){if(typeof t!="string"){if(B0){var r=NT(t);r&&r!==B0&&gw(e,r,n)}var i=zT(t);N0&&(i=i.concat(N0(t)));for(var o=F0(e),a=F0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in LT||n&&n[s]||a&&s in a||o&&s in o)){var c=FT(t,s);try{RT(e,s,c)}catch{}}}}return e}function ao(e){return typeof e=="function"}function um(e){return typeof e=="object"&&"styledComponentId"in e}function Yr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Gl(e,t){return e.join(t||"")}function Ia(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function bp(e,t,n){if(n===void 0&&(n=!1),!n&&!Ia(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=bp(e[r],t[r]);else if(Ia(t))for(var r in t)e[r]=bp(e[r],t[r]);return e}function dm(e,t){Object.defineProperty(e,"toString",{value:t})}var BT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw qa(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+sm;return n},e}(),VT="style[".concat(io,"][").concat(cw,'="').concat(Bc,'"]'),UT=new RegExp("^".concat(io,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),V0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},wp=function(e){if(!e)return document;if(V0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(V0(t))return t}return document},WT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},HT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(sm),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(UT);if(s){var c=0|parseInt(s[1],10),f=s[2];c!==0&&(TT(f,c),WT(e,f,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},Sd=function(e){for(var t=wp(e.options.target).querySelectorAll(VT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(io)!==lw&&(HT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function GT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(io,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(io,lw),r.setAttribute(cw,Bc);var a=GT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},qT=function(){function e(t){this.element=vw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw qa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),YT=function(){function e(t){this.element=vw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),XT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),U0=ua,KT={isServer:!ua,useCSSOMInjection:!ET},ql=function(){function e(t,n,r){t===void 0&&(t=oo),n===void 0&&(n={});var i=this;this.options=ut(ut({},KT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ua&&U0&&(U0=!1,Sd(this)),dm(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",c=function(d){var v=function(h){return Hl.get(h)}(d);if(v===void 0)return"continue";var m=o.names.get(v);if(m===void 0||!m.size)return"continue";var g=a.getGroup(d);if(g.length===0)return"continue";var x=io+".g"+d+'[id="'+v+'"]',w="";m.forEach(function(h){h.length>0&&(w+=h+",")}),s+=g+x+'{content:"'+w+'"}'+sm},f=0;f<l;f++)c(f);return s}(i)})}return e.registerId=function(t){return Ko(t)},e.prototype.rehydrate=function(){!this.server&&ua&&Sd(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ut(ut({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ua&&t.target!==this.options.target&&wp(this.options.target)!==wp(t.target)&&Sd(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new XT(i):r?new qT(i):new YT(i)}(this.options),new BT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ko(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ko(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ko(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),QT=/&/g,Nn=47,Vr=42;function W0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==Nn||e.charCodeAt(o+1)!==Vr)if(i)a===Vr&&e.charCodeAt(o+1)===Nn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function xw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=xw(n.children,t)),n})}function ZT(e){var t,n,r,i=e===void 0?oo:e,o=i.options,a=o===void 0?oo:o,l=i.plugins,s=l===void 0?lm:l,c=function(g,x,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):g},f=s.slice();f.push(function(g){g.type===Rc&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(QT,n).replace(r,c))}),a.prefix&&f.push(kT),f.push(wT);var d=[],v=ST(f.concat(CT(function(g){return d.push(g)}))),m=function(g,x,w,h){x===void 0&&(x=""),w===void 0&&(w=""),h===void 0&&(h="&"),t=h,n=x,r=void 0;var p=function(C){if(!W0(C))return C;for(var S=C.length,P="",E=0,_=0,$=0,I=!1,M=0;M<S;M++){var D=C.charCodeAt(M);if($!==0||I||D!==Nn||C.charCodeAt(M+1)!==Vr)if(I)D===Vr&&C.charCodeAt(M+1)===Nn&&(I=!1,M++);else if(D!==34&&D!==39||M!==0&&C.charCodeAt(M-1)===92){if($===0)if(D===123)_++;else if(D===125){if(--_<0){for(var j=M+1;j<S;){var A=C.charCodeAt(j);if(A===59||A===10)break;j++}j<S&&C.charCodeAt(j)===59&&j++,_=0,M=j-1,E=j;continue}_===0&&(P+=C.substring(E,M+1),E=M+1)}else D===59&&_===0&&(P+=C.substring(E,M+1),E=M+1)}else $===0?$=D:$===D&&($=0);else I=!0,M++}if(E<S){var L=C.substring(E);W0(L)||(P+=L)}return P}(function(C){if(C.indexOf("//")===-1)return C;for(var S=C.length,P=[],E=0,_=0,$=0,I=0;_<S;){var M=C.charCodeAt(_);if(M!==34&&M!==39||_!==0&&C.charCodeAt(_-1)===92)if($===0)if(M===Nn&&_+1<S&&C.charCodeAt(_+1)===Vr){for(_+=2;_+1<S&&(C.charCodeAt(_)!==Vr||C.charCodeAt(_+1)!==Nn);)_++;_+=2}else if(M===40&&_>=3&&(32|C.charCodeAt(_-1))==108&&(32|C.charCodeAt(_-2))==114&&(32|C.charCodeAt(_-3))==117)I=1,_++;else if(I>0)M===41?I--:M===40&&I++,_++;else if(M===Vr&&_+1<S&&C.charCodeAt(_+1)===Nn)_>E&&P.push(C.substring(E,_)),E=_+=2;else if(M===Nn&&_+1<S&&C.charCodeAt(_+1)===Nn){for(_>E&&P.push(C.substring(E,_));_<S&&C.charCodeAt(_)!==10;)_++;E=_}else _++;else _++;else $===0?$=M:$===M&&($=0),_++}return E===0?C:(E<S&&P.push(C.substring(E)),P.join(""))}(g)),b=yT(w||x?"".concat(w," ").concat(x," { ").concat(p," }"):p);return a.namespace&&(b=xw(b,a.namespace)),d=[],Wl(b,v),d};return m.hash=s.length?s.reduce(function(g,x){return x.name||qa(15),Br(g,x.name)},5381).toString():"",m}var JT=new ql,Sp=ZT(),yw=Q.createContext({shouldForwardProp:void 0,styleSheet:JT,stylis:Sp});yw.Consumer;Q.createContext(void 0);function Cp(){return Q.useContext(yw)}var bw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Sp);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,dm(this,function(){throw qa(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Sp),this.name+t.hash},e}();function ej(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in _T||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var tj=function(e){return e>="A"&&e<="Z"};function H0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;tj(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ww=function(e){return e==null||e===!1||e===""},Sw=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!ww(r)&&(Array.isArray(r)&&r.isCss||ao(r)?t.push("".concat(H0(n),":"),r,";"):Ia(r)?t.push.apply(t,no(no(["".concat(n," {")],Sw(r),!1),["}"],!1)):t.push("".concat(H0(n),": ").concat(ej(n,r),";")))}return t};function Tr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(ww(e))return i;if(um(e))return i.push(".".concat(e.styledComponentId)),i;if(ao(e)){if(!ao(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Tr(o,t,n,r,i)}var a;if(e instanceof bw)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Ia(e)){for(var l=Sw(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Tr(e[s],t,n,r,i);return i}function Cw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ao(n)&&!um(n))return!1}return!0}var nj=fw(Bc),rj=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Cw(t),this.componentId=n,this.baseHash=Br(nj,n),this.baseStyle=r,ql.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Yr(i,this.staticRulesId);else{var o=Gl(Tr(this.rules,t,n,r)),a=yp(Br(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Yr(i,a),this.staticRulesId=a}else{for(var s=Br(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")c+=d;else if(d){var v=Gl(Tr(d,t,n,r));s=Br(Br(s,String(f)),v),c+=v}}if(c){var m=yp(s>>>0);if(!n.hasNameForId(this.componentId,m)){var g=r(c,".".concat(m),void 0,this.componentId);n.insertRules(this.componentId,m,g)}i=Yr(i,m)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ko(this.componentId)):""}},e}(),fm=Q.createContext(void 0);fm.Consumer;var Cd={};function ij(e,t,n){var r=um(e),i=e,o=!wd(e),a=t.attrs,l=a===void 0?lm:a,s=t.componentId,c=s===void 0?function(C,S){var P=typeof C!="string"?"sc":R0(C);Cd[P]=(Cd[P]||0)+1;var E="".concat(P,"-").concat(cm(Bc+P+Cd[P]));return S?"".concat(S,"-").concat(E):E}(t.displayName,t.parentComponentId):s,f=t.displayName,d=f===void 0?function(C){return wd(C)?"styled.".concat(C):"Styled(".concat(IT(C),")")}(e):f,v=t.displayName&&t.componentId?"".concat(R0(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;g=function(C,S){return x(C,S)&&w(C,S)}}else g=x}var h=new rj(n,v,r?i.componentStyle:void 0);function p(C,S){return function(P,E,_){var $=P.attrs,I=P.componentStyle,M=P.defaultProps,D=P.foldedComponentIds,j=P.styledComponentId,A=P.target,L=Q.useContext(fm),R=Cp(),z=P.shouldForwardProp||R.shouldForwardProp,T=uw(E,L,M)||oo,O=function(W,q,oe){for(var he,ie=ut(ut({},q),{className:void 0,theme:oe}),De=0;De<W.length;De+=1){var We=ao(he=W[De])?he(ie):he;for(var He in We)He==="className"?ie.className=Yr(ie.className,We[He]):He==="style"?ie.style=ut(ut({},ie.style),We[He]):ie[He]=We[He]}return"className"in q&&typeof q.className=="string"&&(ie.className=Yr(ie.className,q.className)),ie}($,E,T),F=O.as||A,B={};for(var N in O)O[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&O.theme===T||(N==="forwardedAs"?B.as=O.forwardedAs:z&&!z(N,F)||(B[N]=O[N]));var V=function(W,q){var oe=Cp(),he=W.generateAndInjectStyles(q,oe.styleSheet,oe.stylis);return he}(I,O),H=V.className,G=Yr(D,j);return H&&(G+=" "+H),O.className&&(G+=" "+O.className),B[wd(F)&&!dw.has(F)?"class":"className"]=G,_&&(B.ref=_),y.createElement(F,B)}(b,C,S)}p.displayName=d;var b=Q.forwardRef(p);return b.attrs=m,b.componentStyle=h,b.displayName=d,b.shouldForwardProp=g,b.foldedComponentIds=r?Yr(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=v,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(S){for(var P=[],E=1;E<arguments.length;E++)P[E-1]=arguments[E];for(var _=0,$=P;_<$.length;_++)bp(S,$[_],!0);return S}({},i.defaultProps,C):C}}),dm(b,function(){return".".concat(b.styledComponentId)}),o&&gw(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function G0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var q0=function(e){return Object.assign(e,{isCss:!0})};function pm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ao(e)||Ia(e))return q0(Tr(G0(lm,no([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Tr(r):q0(Tr(G0(r,t)))}function kp(e,t,n){if(n===void 0&&(n=oo),!t)throw qa(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,pm.apply(void 0,no([i],o,!1)))};return r.attrs=function(i){return kp(e,t,ut(ut({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return kp(e,t,ut(ut({},n),i))},r}var kw=function(e){return kp(ij,e)},k=kw;dw.forEach(function(e){k[e]=kw(e)});var oj=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Cw(t),ql.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Gl(Tr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ql.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function aj(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=pm.apply(void 0,no([e],t,!1)),i="sc-global-".concat(cm(JSON.stringify(r))),o=new oj(r,i),a=new WeakMap,l=function(c){var f=Cp(),d=Q.useContext(fm),v=a.get(f.styleSheet);return v===void 0&&(v=f.styleSheet.allocateGSInstance(i),a.set(f.styleSheet,v)),(typeof window>"u"||!f.styleSheet.server)&&s(v,c,f.styleSheet,d,f.stylis),Q.useLayoutEffect(function(){return f.styleSheet.server||s(v,c,f.styleSheet,d,f.stylis),function(){var m;o.removeStyles(v,f.styleSheet),m=f.styleSheet.options.target,typeof document<"u"&&(m??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(g){return g.remove()})}},[v,c,f.styleSheet,d,f.stylis]),null};function s(c,f,d,v,m){if(o.isStatic)o.renderStyles(c,PT,d,m);else{var g=ut(ut({},f),{theme:uw(f,v,l.defaultProps)});o.renderStyles(c,g,d,m)}}return Q.memo(l)}function hm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Gl(pm.apply(void 0,no([e],t,!1))),i=cm(r);return new bw(i,r)}const sj=k.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,lj=k.div`
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
`,cj=k.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,uj=k.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,dj=k.div`
  display: flex;
  justify-content: space-around;
  

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`,fj=k.button`
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

    
`;k(Pe)`
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
`;const pj=k(Pe)`
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
`;const hj=k.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,mj=k.button`
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
`;k.div`
  z-index: 9999;
`;k.a`
  color: var(--black-color);
`;const gj=k.div`
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
`,vj=k.button`
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
`,xj=k.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,vi=k(Pe)`
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
`,yj=k.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,bj=k.div`
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
`,wj=k.div`
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
`,Sj=k.input`
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
`,Cj=k.button`
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
`,kj=k.svg`
  width: 24px;
  height: 24px;
`,_j=k.ul`
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
`,Ej=k.li`
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


`,Pj=k.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,Tj=k.h3`
      text-align: left;
      font-size: 18px;
      font-weight: 400;

`,jj=k.h3`
 font-weight: 500;
      font-size: 20px;
         

`,Oj=k.div`
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

    
`,hn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",$j=()=>{const[e,t]=y.useState(""),[n,r]=y.useState([]),[i,o]=y.useState(!1),a=Ke(),l=y.useRef(null);y.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const c=setTimeout(async()=>{try{const d=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(d.data),o(!0)}catch(f){console.error(f)}},300);return()=>clearTimeout(c)},[e]),y.useEffect(()=>{const c=f=>{l.current&&!l.current.contains(f.target)&&o(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const s=c=>{t(""),o(!1),a(`/product/${c.slug??c.id}`)};return u.jsxs(wj,{ref:l,children:[u.jsx(Sj,{name:"site-search",value:e,onChange:c=>t(c.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),u.jsx(Cj,{className:"search-button",children:u.jsx(kj,{children:u.jsx("use",{href:`${hn}#icon-search`})})}),i&&n.length>0&&u.jsx(_j,{children:n.map(c=>{var v,m;const d=c.new_price&&c.new_price<c.price?c.new_price:c.price;return u.jsxs(Ej,{onClick:()=>s(c),children:[u.jsx(Pj,{src:((m=(v=c.images)==null?void 0:v[0])==null?void 0:m.url)||"/nofoto.png",alt:""}),u.jsxs(Oj,{children:[u.jsx(Tj,{children:c.name}),u.jsxs(jj,{children:[d," грн."]})]})]},c.id)})})]})};var _w={exports:{}},Ew={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=y;function Ij(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mj=typeof Object.is=="function"?Object.is:Ij,Dj=Ya.useSyncExternalStore,Lj=Ya.useRef,Aj=Ya.useEffect,Rj=Ya.useMemo,zj=Ya.useDebugValue;Ew.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=Lj(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Rj(function(){function s(m){if(!c){if(c=!0,f=m,m=r(m),i!==void 0&&a.hasValue){var g=a.value;if(i(g,m))return d=g}return d=m}if(g=d,Mj(f,m))return g;var x=r(m);return i!==void 0&&i(g,x)?(f=m,g):(f=m,d=x)}var c=!1,f,d,v=n===void 0?null:n;return[function(){return s(t())},v===null?void 0:function(){return s(v())}]},[t,n,r,i]);var l=Dj(e,o[0],o[1]);return Aj(function(){a.hasValue=!0,a.value=l},[l]),zj(l),l};_w.exports=Ew;var Fj=_w.exports;function Nj(e){e()}function Bj(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Nj(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Y0={notify(){},get:()=>[]};function Vj(e,t){let n,r=Y0,i=0,o=!1;function a(x){f();const w=r.subscribe(x);let h=!1;return()=>{h||(h=!0,w(),d())}}function l(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function c(){return o}function f(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=Bj())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Y0)}function v(){o||(o=!0,f())}function m(){o&&(o=!1,d())}const g={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:c,trySubscribe:v,tryUnsubscribe:m,getListeners:()=>r};return g}var Uj=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wj=Uj(),Hj=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Gj=Hj(),qj=()=>Wj||Gj?y.useLayoutEffect:y.useEffect,Yj=qj(),kd=Symbol.for("react-redux-context"),_d=typeof globalThis<"u"?globalThis:{};function Xj(){if(!y.createContext)return{};const e=_d[kd]??(_d[kd]=new Map);let t=e.get(y.createContext);return t||(t=y.createContext(null),e.set(y.createContext,t)),t}var $r=Xj();function Kj(e){const{children:t,context:n,serverState:r,store:i}=e,o=y.useMemo(()=>{const s=Vj(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=y.useMemo(()=>i.getState(),[i]);Yj(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||$r;return y.createElement(l.Provider,{value:o},t)}var Qj=Kj;function mm(e=$r){return function(){return y.useContext(e)}}var Pw=mm();function Tw(e=$r){const t=e===$r?Pw:mm(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var Zj=Tw();function Jj(e=$r){const t=e===$r?Zj:Tw(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var It=Jj(),eO=(e,t)=>e===t;function tO(e=$r){const t=e===$r?Pw:mm(e),n=(r,i={})=>{const{equalityFn:o=eO}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:c}=a;y.useRef(!0);const f=y.useCallback({[r.name](v){return r(v)}}[r.name],[r]),d=Fj.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,c||l.getState,f,o);return y.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Ue=tO();const nO=k(Pe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,rO=k.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,iO=k.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,oO=k.div`
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
`,aO=({onClick:e})=>{const t=Ue(n=>n.cart.items.length);return u.jsx(nO,{to:"/cart",children:u.jsxs(iO,{onClick:e,children:[u.jsx(rO,{children:u.jsx("use",{href:`${hn}#icon-cart`})}),t>0&&u.jsx(oO,{children:t})]})})},sO=k.nav`
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
`,xi=k(Pe)`
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
`,lO=()=>u.jsxs(sO,{children:[u.jsx(xi,{to:"/",children:"Головна"}),u.jsx(xi,{to:"/catalog",children:"Каталог"}),u.jsx(xi,{to:"/catalog/new",children:"Новинки"}),u.jsx(xi,{to:"/catalog/sale",children:"Акційні товари"}),u.jsx(xi,{to:"/about",children:"Про нас"}),u.jsx(xi,{to:"/contacts",children:"Контакти"})]}),cO=k.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,uO=k(Pe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,dO=k.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,fO=k.div`

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
`,pO=({onClick:e})=>{const t=Ue(n=>n.favorites.items.length);return u.jsx(uO,{to:"/favorite",children:u.jsxs(dO,{onClick:e,children:[u.jsx(cO,{children:u.jsx("use",{href:`${hn}#icon-heart`})}),t>0&&u.jsx(fO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=e=>{const t=mO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>y.createElement("svg",{ref:s,...gO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:jw("lucide",i),...!o&&!vO(l)&&{"aria-hidden":"true"},...l},[...a.map(([c,f])=>y.createElement(c,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(e,t)=>{const n=y.forwardRef(({className:r,...i},o)=>y.createElement(xO,{ref:o,iconNode:t,className:jw(`lucide-${hO(X0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=X0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Vc=Qe("arrow-down-narrow-wide",yO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Uc=Qe("arrow-right",bO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],SO=Qe("badge-percent",wO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],kO=Qe("chevron-down",CO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],EO=Qe("chevron-up",_O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],K0=Qe("eye-off",PO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Q0=Qe("eye",TO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Xa=Qe("heart",jO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],$O=Qe("house",OO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],MO=Qe("info",IO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],LO=Qe("layers-plus",DO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],RO=Qe("mail",AO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],FO=Qe("shopping-bag",zO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],xo=Qe("shopping-cart",NO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BO=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Ow=Qe("sliders-horizontal",BO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],$w=Qe("trash-2",VO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],WO=Qe("user-round",UO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Iw=Qe("x",HO),GO=({openLogin:e})=>{const[t,n]=y.useState(!1),r=Ke(),i=async()=>{const o=localStorage.getItem("token");if(!o){e();return}try{const a=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${o}`}});if(a.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("persist:cart"),localStorage.removeItem("persist:favorites"),window.location.reload(),e();return}if(!a.ok){console.error("Помилка перевірки авторизації:",a.status);return}r("/account/orders")}catch(a){console.error("Помилка перевірки авторизації:",a)}};return u.jsx(sj,{children:u.jsx(lj,{children:u.jsxs(cj,{children:[u.jsxs(uj,{children:[u.jsx(pj,{to:"/",children:"Дідів хлів"}),u.jsxs(dj,{children:[u.jsx(aO,{}),u.jsx(fj,{onClick:i,children:u.jsx(WO,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),u.jsx(pO,{}),u.jsx(lO,{}),u.jsx(mj,{onClick:()=>n(!t),children:u.jsx(hj,{children:u.jsx("use",{href:`${hn}#icon-menu`})})}),u.jsx(bj,{open:t,onClick:()=>n(!1)}),u.jsxs(gj,{open:t,children:[u.jsx(vj,{onClick:()=>n(!1),children:u.jsx(Iw,{size:28,strokeWidth:1.5})}),u.jsxs(xj,{children:[u.jsxs(vi,{onClick:()=>n(!1),to:"/",children:[u.jsx($O,{size:22,strokeWidth:1.5})," Головна"]}),u.jsxs(vi,{onClick:()=>n(!1),to:"/catalog",children:[u.jsx(FO,{size:22,strokeWidth:1.5})," Каталог"]}),u.jsxs(vi,{onClick:()=>n(!1),to:"/catalog/new",children:[u.jsx(LO,{size:22,strokeWidth:1.5}),"Новинки"]}),u.jsxs(vi,{onClick:()=>n(!1),to:"/catalog/sale",children:[u.jsx(SO,{size:22,strokeWidth:1.5}),"Акційні товари"]}),u.jsxs(vi,{onClick:()=>n(!1),to:"/about",children:[u.jsx(MO,{size:22,strokeWidth:1.5})," Про нас"]}),u.jsxs(vi,{onClick:()=>n(!1),to:"/contacts",children:[u.jsx(RO,{size:22,strokeWidth:1.5})," Контакти"]})]}),u.jsx(yj,{children:u.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),u.jsx($j,{})]})})})},qO=k.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,YO=k.footer`
 
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
`,XO=k.div`
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
`,Ed=k.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,Pd=k.h3`
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
`,wn=k(Pe)`
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
`,KO=k.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,Td=k.a`
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
`,QO=()=>u.jsx(qO,{children:u.jsxs(YO,{children:[u.jsxs(XO,{children:[u.jsxs(Ed,{children:[u.jsx(Pd,{children:"Навігація"}),u.jsx(wn,{to:"/",children:"Головна"}),u.jsx(wn,{to:"/about",children:"Про нас"}),u.jsx(wn,{to:"/catalog",children:"Каталог"}),u.jsx(wn,{to:"/contacts",children:"Контакти"})]}),u.jsxs(Ed,{children:[u.jsx(Pd,{children:"Інформація"}),u.jsx(wn,{to:"/delivery",children:"Оплата і доставка"}),u.jsx(wn,{children:"Повернення"}),u.jsx(wn,{children:"Гарантія"}),u.jsx(wn,{children:"Політика конфіденційності"})]})]}),u.jsxs(Ed,{children:[u.jsx(Pd,{children:"Контакти"}),u.jsx(wn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),u.jsx(wn,{href:"mailto:email@email.com",children:"email@email.com"}),u.jsxs(KO,{children:[u.jsx(Td,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-instagram`})})}),u.jsx(Td,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-telegram`})})}),u.jsx(Td,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:u.jsx("use",{href:`${hn}#icon-olx`})})})]})]})]})}),ZO=({openLogin:e,openRegister:t})=>u.jsxs(u.Fragment,{children:[u.jsx(GO,{openLogin:e,openRegister:t}),u.jsx("main",{style:{flex:1},children:u.jsx(Yx,{})}),u.jsx(QO,{})]}),JO=k.section`
  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
`,e4=k.h2`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,t4=k.div`
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
`,n4=k.div`
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
`,r4=k.p`
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
`,i4=k(Pe)`
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
`,o4=k.span`
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
`,a4=k.div`
  padding: 10px 0;
`,s4=k.h3`
  font-size: 20px;
  font-weight: 600;

  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`,l4=k.div`
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
    background: var(--orange-color);
    color: white;
  }
`;k(Pe)`
  color: var(--white-color);
  padding: 10px 20px;
  background: var(--orange-color);
  border-radius: 15px;
  text-decoration: none;
`;const c4=k(Pe)`
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
`,u4=k.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
`,d4=k.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Mw(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Mw(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Qr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Mw(e))&&(r&&(r+=" "),r+=t);return r}function f4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}f4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Ka=e=>typeof e=="number"&&!isNaN(e),ii=e=>typeof e=="string",Jn=e=>typeof e=="function",p4=e=>ii(e)||Ka(e),_p=e=>ii(e)||Jn(e)?e:null,h4=(e,t)=>e===!1||Ka(e)&&e>0?e:t,Ep=e=>y.isValidElement(e)||ii(e)||Jn(e)||Ka(e);function m4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function g4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:c,isIn:f,playToast:d}){let v=n?`${e}--${a}`:e,m=n?`${t}--${a}`:t,g=y.useRef(0);return y.useLayoutEffect(()=>{let x=c.current,w=v.split(" "),h=p=>{p.target===c.current&&(d(),x.removeEventListener("animationend",h),x.removeEventListener("animationcancel",h),g.current===0&&p.type!=="animationcancel"&&x.classList.remove(...w))};x.classList.add(...w),x.addEventListener("animationend",h),x.addEventListener("animationcancel",h)},[]),y.useEffect(()=>{let x=c.current,w=()=>{x.removeEventListener("animationend",w),r?m4(x,s,i):s()};f||(l?w():(g.current=1,x.className+=` ${m}`,x.addEventListener("animationend",w)))},[f]),Q.createElement(Q.Fragment,null,o)}}function Z0(e,t){return{content:Dw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Dw(e,t,n=!1){return y.isValidElement(e)&&!ii(e.type)?y.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Jn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function v4({closeToast:e,theme:t,ariaLabel:n="close"}){return Q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},Q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function x4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:c,theme:f}){let d=i||a&&l===0,v={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(v.transform=`scaleX(${l})`);let m=Qr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),g=Jn(o)?o({rtl:s,type:r,defaultClassName:m}):Qr(m,o),x={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{c&&n()}};return Q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},Q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${r}`}),Q.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:g,style:v,...x}))}var y4=1,Lw=()=>`${y4++}`;function b4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,c=new Set,f=p=>(c.add(p),()=>c.delete(p)),d=()=>{a=Array.from(s.values()),c.forEach(p=>p())},v=({containerId:p,toastId:b,updateId:C})=>{let S=p?p!==e:e!==1,P=s.has(b)&&C==null;return S||P},m=(p,b)=>{s.forEach(C=>{var S;(b==null||b===C.props.toastId)&&((S=C.toggle)==null||S.call(C,p))})},g=p=>{var b,C;(C=(b=p.props)==null?void 0:b.onClose)==null||C.call(b,p.removalReason),p.isActive=!1},x=p=>{if(p==null)s.forEach(g);else{let b=s.get(p);b&&g(b)}d()},w=()=>{i-=o.length,o=[]},h=p=>{var b,C;let{toastId:S,updateId:P}=p.props,E=P==null;p.staleId&&s.delete(p.staleId),p.isActive=!0,s.set(S,p),d(),n(Z0(p,E?"added":"updated")),E&&((C=(b=p.props).onOpen)==null||C.call(b))};return{id:e,props:l,observe:f,toggle:m,removeToast:x,toasts:s,clearQueue:w,buildToast:(p,b)=>{if(v(b))return;let{toastId:C,updateId:S,data:P,staleId:E,delay:_}=b,$=S==null;$&&i++;let I={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(b).filter(([D,j])=>j!=null)),toastId:C,updateId:S,data:P,isIn:!1,className:_p(b.className||l.toastClassName),progressClassName:_p(b.progressClassName||l.progressClassName),autoClose:b.isLoading?!1:h4(b.autoClose,l.autoClose),closeToast(D){s.get(C).removalReason=D,x(C)},deleteToast(){let D=s.get(C);if(D!=null){if(n(Z0(D,"removed")),s.delete(C),i--,i<0&&(i=0),o.length>0){h(o.shift());return}d()}}};I.closeButton=l.closeButton,b.closeButton===!1||Ep(b.closeButton)?I.closeButton=b.closeButton:b.closeButton===!0&&(I.closeButton=Ep(l.closeButton)?l.closeButton:!0);let M={content:p,props:I,staleId:E};l.limit&&l.limit>0&&i>l.limit&&$?o.push(M):Ka(_)?setTimeout(()=>{h(M)},_):h(M)},setProps(p){l=p},setToggle:(p,b)=>{let C=s.get(p);C&&(C.toggle=b)},isToastActive:p=>{var b;return(b=s.get(p))==null?void 0:b.isActive},getSnapshot:()=>a}}var gt=new Map,Ma=[],Pp=new Set,w4=e=>Pp.forEach(t=>t(e)),Aw=()=>gt.size>0;function S4(){Ma.forEach(e=>zw(e.content,e.options)),Ma=[]}var C4=(e,{containerId:t})=>{var n;return(n=gt.get(t||1))==null?void 0:n.toasts.get(e)};function Rw(e,t){var n;if(t)return!!((n=gt.get(t))!=null&&n.isToastActive(e));let r=!1;return gt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function k4(e){if(!Aw()){Ma=Ma.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||p4(e))gt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=gt.get(e.containerId);t?t.removeToast(e.id):gt.forEach(n=>{n.removeToast(e.id)})}}var _4=(e={})=>{gt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function zw(e,t){Ep(e)&&(Aw()||Ma.push({content:e,options:t}),gt.forEach(n=>{n.buildToast(e,t)}))}function E4(e){var t;(t=gt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Fw(e,t){gt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function P4(e){let t=e.containerId||1;return{subscribe(n){let r=b4(t,e,w4);gt.set(t,r);let i=r.observe(n);return S4(),()=>{i(),gt.delete(t)}},setProps(n){var r;(r=gt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=gt.get(t))==null?void 0:n.getSnapshot()}}}function T4(e){return Pp.add(e),()=>{Pp.delete(e)}}function j4(e){return e&&(ii(e.toastId)||Ka(e.toastId))?e.toastId:Lw()}function Qa(e,t){return zw(e,t),t.toastId}function Wc(e,t){return{...t,type:t&&t.type||e,toastId:j4(t)}}function Hc(e){return(t,n)=>Qa(t,Wc(e,n))}function K(e,t){return Qa(e,Wc("default",t))}K.loading=(e,t)=>Qa(e,Wc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function O4(e,{pending:t,error:n,success:r},i){let o;t&&(o=ii(t)?K.loading(t,i):K.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,f,d)=>{if(f==null){K.dismiss(o);return}let v={type:c,...a,...i,data:d},m=ii(f)?{render:f}:f;return o?K.update(o,{...v,...m}):K(m.render,{...v,...m}),d},s=Jn(e)?e():e;return s.then(c=>l("success",r,c)).catch(c=>l("error",n,c)),s}K.promise=O4;K.success=Hc("success");K.info=Hc("info");K.error=Hc("error");K.warning=Hc("warning");K.warn=K.warning;K.dark=(e,t)=>Qa(e,Wc("default",{theme:"dark",...t}));function $4(e){k4(e)}K.dismiss=$4;K.clearWaitingQueue=_4;K.isActive=Rw;K.update=(e,t={})=>{let n=C4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Lw()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Qa(a,o)}};K.done=e=>{K.update(e,{progress:1})};K.onChange=T4;K.play=e=>Fw(!0,e);K.pause=e=>Fw(!1,e);function I4(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=y.useRef(P4(e)).current;i(e);let o=(t=y.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(c=>{let{position:f}=c.props;s.has(f)||s.set(f,[]),s.get(f).push(c)}),Array.from(s,c=>l(c[0],c[1]))}return{getToastToRender:a,isToastActive:Rw,count:o==null?void 0:o.length}}function M4(e){let[t,n]=y.useState(!1),[r,i]=y.useState(!1),o=y.useRef(null),a=y.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:c,onClick:f,closeOnClick:d}=e;E4({id:e.toastId,containerId:e.containerId,fn:n}),y.useEffect(()=>{if(e.pauseOnFocusLoss)return v(),()=>{m()}},[e.pauseOnFocusLoss]);function v(){document.hasFocus()||h(),window.addEventListener("focus",w),window.addEventListener("blur",h)}function m(){window.removeEventListener("focus",w),window.removeEventListener("blur",h)}function g(E){if(e.draggable===!0||e.draggable===E.pointerType){p();let _=o.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=E.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=E.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function x(E){let{top:_,bottom:$,left:I,right:M}=o.current.getBoundingClientRect();E.nativeEvent.type!=="touchend"&&e.pauseOnHover&&E.clientX>=I&&E.clientX<=M&&E.clientY>=_&&E.clientY<=$?h():w()}function w(){n(!0)}function h(){n(!1)}function p(){a.didMove=!1,document.addEventListener("pointermove",C),document.addEventListener("pointerup",S)}function b(){document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",S)}function C(E){let _=o.current;if(a.canDrag&&_){a.didMove=!0,t&&h(),e.draggableDirection==="x"?a.delta=E.clientX-a.start:a.delta=E.clientY-a.start,a.start!==E.clientX&&(a.canCloseOnClick=!1);let $=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${$},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function S(){b();let E=o.current;if(a.canDrag&&a.didMove&&E){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}let P={onPointerDown:g,onPointerUp:x};return l&&s&&(P.onMouseEnter=h,e.stacked||(P.onMouseLeave=w)),d&&(P.onClick=E=>{f&&f(E),a.canCloseOnClick&&c(!0)}),{playToast:w,pauseToast:h,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:P}}var D4=typeof window<"u"?y.useLayoutEffect:y.useEffect,Gc=({theme:e,type:t,isLoading:n,...r})=>Q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function L4(e){return Q.createElement(Gc,{...e},Q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function A4(e){return Q.createElement(Gc,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function R4(e){return Q.createElement(Gc,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function z4(e){return Q.createElement(Gc,{...e},Q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function F4(){return Q.createElement("div",{className:"Toastify__spinner"})}var Tp={info:A4,warning:L4,success:R4,error:z4,spinner:F4},N4=e=>e in Tp;function B4({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Jn(r)?i=r({...o,isLoading:n}):y.isValidElement(r)?i=y.cloneElement(r,o):n?i=Tp.spinner():N4(t)&&(i=Tp[t](o))),i}var V4=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=M4(e),{closeButton:a,children:l,autoClose:s,onClick:c,type:f,hideProgressBar:d,closeToast:v,transition:m,position:g,className:x,style:w,progressClassName:h,updateId:p,role:b,progress:C,rtl:S,toastId:P,deleteToast:E,isIn:_,isLoading:$,closeOnClick:I,theme:M,ariaLabel:D}=e,j=Qr("Toastify__toast",`Toastify__toast-theme--${M}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":I}),A=Jn(x)?x({rtl:S,position:g,type:f,defaultClassName:j}):Qr(j,x),L=B4(e),R=!!C||!s,z={closeToast:v,type:f,theme:M},T=null;return a===!1||(Jn(a)?T=a(z):y.isValidElement(a)?T=y.cloneElement(a,z):T=v4(z)),Q.createElement(m,{isIn:_,done:E,position:g,preventExitTransition:n,nodeRef:r,playToast:o},Q.createElement("div",{id:P,tabIndex:0,onClick:c,"data-in":_,className:A,...i,style:w,ref:r,..._&&{role:b,"aria-label":D}},L!=null&&Q.createElement("div",{className:Qr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},L),Dw(l,e,!t),T,!e.customProgressBar&&Q.createElement(x4,{...p&&!R?{key:`p-${p}`}:{},rtl:S,theme:M,delay:s,isRunning:t,isIn:_,closeToast:v,hide:d,type:f,className:h,controlledProgress:R,progress:C||0})))},U4=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),W4=g4(U4("bounce",!0)),H4={position:"top-right",transition:W4,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Ln(e){let t={...H4,...e},n=e.stacked,[r,i]=y.useState(!0),o=y.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=I4(t),{className:c,style:f,rtl:d,containerId:v,hotKeys:m}=t;function g(w){let h=Qr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":d});return Jn(c)?c({position:w,rtl:d,defaultClassName:h}):Qr(h,_p(c))}function x(){n&&(i(!0),K.play())}return D4(()=>{var w;if(n){let h=o.current.querySelectorAll('[data-in="true"]'),p=12,b=(w=t.position)==null?void 0:w.includes("top"),C=0,S=0;Array.from(h).reverse().forEach((P,E)=>{let _=P;_.classList.add("Toastify__toast--stacked"),E>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=b?"top":"bot");let $=C*(r?.2:1)+(r?0:p*E);_.style.setProperty("--y",`${b?$:$*-1}px`),_.style.setProperty("--g",`${p}`),_.style.setProperty("--s",`${1-(r?S:0)}`),C+=_.offsetHeight,S+=.025})}},[r,s,n]),y.useEffect(()=>{function w(h){var p;let b=o.current;m(h)&&((p=b.querySelector('[tabIndex="0"]'))==null||p.focus(),i(!1),K.pause()),h.key==="Escape"&&(document.activeElement===b||b!=null&&b.contains(document.activeElement))&&(i(!0),K.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[m]),Q.createElement("section",{ref:o,className:"Toastify",id:v,onMouseEnter:()=>{n&&(i(!1),K.pause())},onMouseLeave:x,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,h)=>{let p=h.length?{...f}:{...f,pointerEvents:"none"};return Q.createElement("div",{tabIndex:-1,className:g(w),"data-stacked":n,style:p,key:`c-${w}`},h.map(({content:b,props:C})=>Q.createElement(V4,{...C,stacked:n,collapseAll:x,isIn:l(C.toastId,C.containerId),key:`t-${C.key}`},b)))}))}const er="/Didiv/assets/nofoto-2f8d9d99.png",G4=k.div`
`,q4=k.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,Y4=k.h2`
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

`,X4=k.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;k.div``;const K4=k.div`
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
`,Q4=k.div`
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
`,Nw=k.div`
  position: relative;
  display: block;
 `,qc=k.div`
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
`,gm=k.div`
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
`,vm=k.div`
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
`,Z4=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;
`,J4=k.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,e$=k.p`
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

`;const Bw=k.div.attrs({className:"card-buttons"})`
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
`,Yl=k.button`
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
`;const t$=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,jd=k.button`
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
`,n$=k.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,r$=k.button`
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
`,i$=k.div`
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
`,yi=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,Vw=k.div`
  text-align: center;
  width: 100px;
 
`,Uw=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ww=k.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Hw=k.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Gw=k.span`
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
`;function Je(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var o$=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),J0=o$,Od=()=>Math.random().toString(36).substring(7).split("").join("."),a$={INIT:`@@redux/INIT${Od()}`,REPLACE:`@@redux/REPLACE${Od()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Od()}`},Xl=a$;function xm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function ym(e,t,n){if(typeof e!="function")throw new Error(Je(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Je(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Je(1));return n(ym)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function c(){a===o&&(a=new Map,o.forEach((w,h)=>{a.set(h,w)}))}function f(){if(s)throw new Error(Je(3));return i}function d(w){if(typeof w!="function")throw new Error(Je(4));if(s)throw new Error(Je(5));let h=!0;c();const p=l++;return a.set(p,w),function(){if(h){if(s)throw new Error(Je(6));h=!1,c(),a.delete(p),o=null}}}function v(w){if(!xm(w))throw new Error(Je(7));if(typeof w.type>"u")throw new Error(Je(8));if(typeof w.type!="string")throw new Error(Je(17));if(s)throw new Error(Je(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(p=>{p()}),w}function m(w){if(typeof w!="function")throw new Error(Je(10));r=w,v({type:Xl.REPLACE})}function g(){const w=d;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(Je(11));function p(){const C=h;C.next&&C.next(f())}return p(),{unsubscribe:w(p)}},[J0](){return this}}}return v({type:Xl.INIT}),{dispatch:v,subscribe:d,getState:f,replaceReducer:m,[J0]:g}}function s$(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Xl.INIT})>"u")throw new Error(Je(12));if(typeof n(void 0,{type:Xl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Je(13))})}function l$(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{s$(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const c={};for(let f=0;f<r.length;f++){const d=r[f],v=n[d],m=a[d],g=v(m,l);if(typeof g>"u")throw l&&l.type,new Error(Je(14));c[d]=g,s=s||g!==m}return s=s||r.length!==Object.keys(a).length,s?c:a}}function Kl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function c$(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Je(15))};const a={getState:i.getState,dispatch:(s,...c)=>o(s,...c)},l=e.map(s=>s(a));return o=Kl(...l)(i.dispatch),{...i,dispatch:o}}}function u$(e){return xm(e)&&"type"in e&&typeof e.type=="string"}var qw=Symbol.for("immer-nothing"),ev=Symbol.for("immer-draftable"),xt=Symbol.for("immer-state");function un(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var zt=Object,so=zt.getPrototypeOf,Ql="constructor",Yc="prototype",jp="configurable",Zl="enumerable",ol="writable",Da="value",tr=e=>!!e&&!!e[xt];function vn(e){var t;return e?Yw(e)||Kc(e)||!!e[ev]||!!((t=e[Ql])!=null&&t[ev])||Qc(e)||Zc(e):!1}var d$=zt[Yc][Ql].toString(),tv=new WeakMap;function Yw(e){if(!e||!bm(e))return!1;const t=so(e);if(t===null||t===zt[Yc])return!0;const n=zt.hasOwnProperty.call(t,Ql)&&t[Ql];if(n===Object)return!0;if(!Pi(n))return!1;let r=tv.get(n);return r===void 0&&(r=Function.toString.call(n),tv.set(n,r)),r===d$}function Xc(e,t,n=!0){Za(e)===0?(n?Reflect.ownKeys(e):zt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Za(e){const t=e[xt];return t?t.type_:Kc(e)?1:Qc(e)?2:Zc(e)?3:0}var nv=(e,t,n=Za(e))=>n===2?e.has(t):zt[Yc].hasOwnProperty.call(e,t),Op=(e,t,n=Za(e))=>n===2?e.get(t):e[t],Jl=(e,t,n,r=Za(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function f$(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Kc=Array.isArray,Qc=e=>e instanceof Map,Zc=e=>e instanceof Set,bm=e=>typeof e=="object",Pi=e=>typeof e=="function",$d=e=>typeof e=="boolean";function p$(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Vn=e=>e.copy_||e.base_,wm=e=>e.modified_?e.copy_:e.base_;function $p(e,t){if(Qc(e))return new Map(e);if(Zc(e))return new Set(e);if(Kc(e))return Array[Yc].slice.call(e);const n=Yw(e);if(t===!0||t==="class_only"&&!n){const r=zt.getOwnPropertyDescriptors(e);delete r[xt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[ol]===!1&&(l[ol]=!0,l[jp]=!0),(l.get||l.set)&&(r[a]={[jp]:!0,[ol]:!0,[Zl]:l[Zl],[Da]:e[a]})}return zt.create(so(e),r)}else{const r=so(e);if(r!==null&&n)return{...e};const i=zt.create(r);return zt.assign(i,e)}}function Sm(e,t=!1){return Jc(e)||tr(e)||!vn(e)||(Za(e)>1&&zt.defineProperties(e,{set:ks,add:ks,clear:ks,delete:ks}),zt.freeze(e),t&&Xc(e,(n,r)=>{Sm(r,!0)},!1)),e}function h$(){un(2)}var ks={[Da]:h$};function Jc(e){return e===null||!bm(e)?!0:zt.isFrozen(e)}var ec="MapSet",Ip="Patches",rv="ArrayMethods",Xw={};function oi(e){const t=Xw[e];return t||un(0,e),t}var iv=e=>!!Xw[e],La,Kw=()=>La,m$=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:iv(ec)?oi(ec):void 0,arrayMethodsPlugin_:iv(rv)?oi(rv):void 0});function ov(e,t){t&&(e.patchPlugin_=oi(Ip),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Mp(e){Dp(e),e.drafts_.forEach(g$),e.drafts_=null}function Dp(e){e===La&&(La=e.parent_)}var av=e=>La=m$(La,e);function g$(e){const t=e[xt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function sv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[xt].modified_&&(Mp(t),un(4)),vn(e)&&(e=lv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[xt].base_,e,t)}else e=lv(t,n);return v$(t,e,!0),Mp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==qw?e:void 0}function lv(e,t){if(Jc(t))return t;const n=t[xt];if(!n)return tc(t,e.handledSet_,e);if(!eu(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Jw(n,e)}return n.copy_}function v$(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Sm(t,n)}function Qw(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var eu=(e,t)=>e.scope_===t,x$=[];function Zw(e,t,n,r){const i=Vn(e),o=e.type_;if(r!==void 0&&Op(i,r,o)===t){Jl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Xc(i,(s,c)=>{if(tr(c)){const f=l.get(c)||[];f.push(s),l.set(c,f)}})}const a=e.draftLocations_.get(t)??x$;for(const l of a)Jl(i,l,n,o)}function y$(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!eu(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=wm(o);Zw(e,o.draft_??o,a,n),Jw(o,i)})}function Jw(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Qw(e)}}function b$(e,t,n){const{scope_:r}=e;if(tr(n)){const i=n[xt];eu(i,r)&&i.callbacks_.push(function(){al(e);const a=wm(i);Zw(e,n,a,t)})}else vn(n)&&e.callbacks_.push(function(){const o=Vn(e);e.type_===3?o.has(n)&&tc(n,r.handledSet_,r):Op(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&tc(Op(e.copy_,t,e.type_),r.handledSet_,r)})}function tc(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||tr(e)||t.has(e)||!vn(e)||Jc(e)||(t.add(e),Xc(e,(r,i)=>{if(tr(i)){const o=i[xt];if(eu(o,n)){const a=wm(o);Jl(e,r,a,e.type_),Qw(o)}}else vn(i)&&tc(i,t,n)})),e}function w$(e,t){const n=Kc(e),r={type_:n?1:0,scope_:t?t.scope_:Kw(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=nc;n&&(i=[r],o=Aa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var nc={get(e,t){if(t===xt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Vn(e);if(!nv(i,t,e.type_))return S$(e,i,t);const o=i[t];if(e.finalized_||!vn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&p$(t))return o;if(o===Id(e.base_,t)){al(e);const a=e.type_===1?+t:t,l=Ap(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Vn(e)},ownKeys(e){return Reflect.ownKeys(Vn(e))},set(e,t,n){const r=eS(Vn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Id(Vn(e),t),o=i==null?void 0:i[xt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(f$(n,i)&&(n!==void 0||nv(e.base_,t,e.type_)))return!0;al(e),Lp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),b$(e,t,n)),!0},deleteProperty(e,t){return al(e),Id(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Lp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Vn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[ol]:!0,[jp]:e.type_!==1||t!=="length",[Zl]:r[Zl],[Da]:n[t]}},defineProperty(){un(11)},getPrototypeOf(e){return so(e.base_)},setPrototypeOf(){un(12)}},Aa={};for(let e in nc){let t=nc[e];Aa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Aa.deleteProperty=function(e,t){return Aa.set.call(this,e,t,void 0)};Aa.set=function(e,t,n){return nc.set.call(this,e[0],t,n,e[0])};function Id(e,t){const n=e[xt];return(n?Vn(n):e)[t]}function S$(e,t,n){var i;const r=eS(t,n);return r?Da in r?r[Da]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function eS(e,t){if(!(t in e))return;let n=so(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=so(n)}}function Lp(e){e.modified_||(e.modified_=!0,e.parent_&&Lp(e.parent_))}function al(e){e.copy_||(e.assigned_=new Map,e.copy_=$p(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var C$=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(Pi(t)&&!Pi(n)){const o=n;n=t;const a=this;return function(s=o,...c){return a.produce(s,f=>n.call(this,f,...c))}}Pi(n)||un(6),r!==void 0&&!Pi(r)&&un(7);let i;if(vn(t)){const o=av(this),a=Ap(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?Mp(o):Dp(o)}return ov(o,r),sv(i,o)}else if(!t||!bm(t)){if(i=n(t),i===void 0&&(i=t),i===qw&&(i=void 0),this.autoFreeze_&&Sm(i,!0),r){const o=[],a=[];oi(Ip).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else un(1,t)},this.produceWithPatches=(t,n)=>{if(Pi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},$d(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),$d(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),$d(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){vn(e)||un(8),tr(e)&&(e=k$(e));const t=av(this),n=Ap(t,e,void 0);return n[xt].isManual_=!0,Dp(t),n}finishDraft(e,t){const n=e&&e[xt];(!n||!n.isManual_)&&un(9);const{scope_:r}=n;return ov(r,t),sv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=oi(Ip).applyPatches_;return tr(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Ap(e,t,n,r){const[i,o]=Qc(t)?oi(ec).proxyMap_(t,n):Zc(t)?oi(ec).proxySet_(t,n):w$(t,n);return((n==null?void 0:n.scope_)??Kw()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?y$(n,o,r):o.callbacks_.push(function(s){var f;(f=s.mapSetPlugin_)==null||f.fixSetContents(o);const{patchPlugin_:c}=s;o.modified_&&c&&c.generatePatches_(o,[],s)}),i}function k$(e){return tr(e)||un(10,e),tS(e)}function tS(e){if(!vn(e)||Jc(e))return e;const t=e[xt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=$p(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=$p(e,!0);return Xc(n,(i,o)=>{Jl(n,i,tS(o))},r),t&&(t.finalized_=!1),n}var _$=new C$,nS=_$.produce;function rS(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var E$=rS(),P$=rS,T$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Kl:Kl.apply(null,arguments)};function cv(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(qn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>u$(r)&&r.type===e,n}var iS=class Qo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Qo.prototype)}static get[Symbol.species](){return Qo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Qo(...t[0].concat(this)):new Qo(...t.concat(this))}};function uv(e){return vn(e)?nS(e,()=>{}):e}function _s(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function j$(e){return typeof e=="boolean"}var O$=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new iS;return n&&(j$(n)?a.push(E$):a.push(P$(n.extraArgument))),a},$$="RTK_autoBatch",dv=e=>t=>{setTimeout(t,e)},I$=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:dv(10):e.type==="callback"?e.queueNotification:dv(e.timeout),c=()=>{a=!1,o&&(o=!1,l.forEach(f=>f()))};return Object.assign({},r,{subscribe(f){const d=()=>i&&f(),v=r.subscribe(d);return l.add(f),()=>{v(),l.delete(f)}},dispatch(f){var d;try{return i=!((d=f==null?void 0:f.meta)!=null&&d[$$]),o=!i,o&&(a||(a=!0,s(c))),r.dispatch(f)}finally{i=!0}}})},M$=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new iS(e);return r&&i.push(I$(typeof r=="object"?r:void 0)),i};function D$(e){const t=O$(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(xm(n))s=l$(n);else throw new Error(qn(1));let c;typeof r=="function"?c=r(t):c=t();let f=Kl;i&&(f=T$({trace:!1,...typeof i=="object"&&i}));const d=c$(...c),v=M$(d);let m=typeof l=="function"?l(v):v();const g=f(...m);return ym(s,a,g)}function oS(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(qn(28));if(l in t)throw new Error(qn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function L$(e){return typeof e=="function"}function A$(e,t){let[n,r,i]=oS(t),o;if(L$(e))o=()=>uv(e());else{const l=uv(e);o=()=>l}function a(l=o(),s){let c=[n[s.type],...r.filter(({matcher:f})=>f(s)).map(({reducer:f})=>f)];return c.filter(f=>!!f).length===0&&(c=[i]),c.reduce((f,d)=>{if(d)if(tr(f)){const m=d(f,s);return m===void 0?f:m}else{if(vn(f))return nS(f,v=>d(v,s));{const v=d(f,s);if(v===void 0){if(f===null)return f;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return f},l)}return a.getInitialState=o,a}var R$=Symbol.for("rtk-slice-createasyncthunk");function z$(e,t){return`${e}/${t}`}function F$({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[R$];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(qn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(B$()):i.reducers)||{},s=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},f={addCase(C,S){const P=typeof C=="string"?C:C.type;if(!P)throw new Error(qn(12));if(P in c.sliceCaseReducersByType)throw new Error(qn(13));return c.sliceCaseReducersByType[P]=S,f},addMatcher(C,S){return c.sliceMatchers.push({matcher:C,reducer:S}),f},exposeAction(C,S){return c.actionCreators[C]=S,f},exposeCaseReducer(C,S){return c.sliceCaseReducersByName[C]=S,f}};s.forEach(C=>{const S=l[C],P={reducerName:C,type:z$(o,C),createNotation:typeof i.reducers=="function"};U$(S)?H$(P,S,f,t):V$(P,S,f)});function d(){const[C={},S=[],P=void 0]=typeof i.extraReducers=="function"?oS(i.extraReducers):[i.extraReducers],E={...C,...c.sliceCaseReducersByType};return A$(i.initialState,_=>{for(let $ in E)_.addCase($,E[$]);for(let $ of c.sliceMatchers)_.addMatcher($.matcher,$.reducer);for(let $ of S)_.addMatcher($.matcher,$.reducer);P&&_.addDefaultCase(P)})}const v=C=>C,m=new Map,g=new WeakMap;let x;function w(C,S){return x||(x=d()),x(C,S)}function h(){return x||(x=d()),x.getInitialState()}function p(C,S=!1){function P(_){let $=_[C];return typeof $>"u"&&S&&($=_s(g,P,h)),$}function E(_=v){const $=_s(m,S,()=>new WeakMap);return _s($,_,()=>{const I={};for(const[M,D]of Object.entries(i.selectors??{}))I[M]=N$(D,_,()=>_s(g,_,h),S);return I})}return{reducerPath:C,getSelectors:E,get selectors(){return E(P)},selectSlice:P}}const b={name:o,reducer:w,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:h,...p(a),injectInto(C,{reducerPath:S,...P}={}){const E=S??a;return C.inject({reducerPath:E,reducer:w},P),{...b,...p(E,!0)}}};return b}}function N$(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var aS=F$();function B$(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function V$({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!W$(r))throw new Error(qn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?cv(e,a):cv(e))}function U$(e){return e._reducerDefinitionType==="asyncThunk"}function W$(e){return e._reducerDefinitionType==="reducerWithPrepare"}function H$({type:e,reducerName:t},n,r,i){if(!i)throw new Error(qn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:c,options:f}=n,d=i(e,o,f);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),c&&r.addMatcher(d.settled,c),r.exposeCaseReducer(t,{fulfilled:a||Es,pending:l||Es,rejected:s||Es,settled:c||Es})}function Es(){}function qn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const sS=aS({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]},setFavorites(e,t){e.items=t.payload},addFavorite(e,t){e.items.some(r=>r.id===t.payload.id)||e.items.push(t.payload)},removeFavorite(e,t){e.items=e.items.filter(n=>n.id!==t.payload)}}}),{toggleFavorite:OV,clearFavorite:Ja,addFavorite:fv,removeFavorite:pv,setFavorites:G$}=sS.actions,q$=sS.reducer,Y$=async(e,t,n,r)=>{const i=t==null?void 0:t.find(a=>{var l;return((l=a.product)==null?void 0:l.documentId)===(e==null?void 0:e.documentId)});if(i){const a=i.user.map(l=>l.documentId);if(!a.includes(n)){a.push(n);const l=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:a}})});if(!l.ok)throw new Error("Не вдалося оновити favorite");return await l.json()}return i}const o=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e.documentId,user:[n]}})});if(!o.ok)throw new Error("Не вдалося створити favorite");return await o.json()},X$=async(e,t,n,r)=>{var l;const i=t==null?void 0:t.find(s=>{var c;return((c=s.product)==null?void 0:c.documentId)===(e==null?void 0:e.documentId)});if(!i)return;const o=(l=i.user)==null?void 0:l.filter(s=>s.documentId!==n).map(s=>s.documentId);if((o==null?void 0:o.length)===0){if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити favorite");return}const a=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:o}})});if(!a.ok)throw new Error("Не вдалося оновити favorite");return await a.json()},di=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o)return t?(n(pv(e.id)),r.warning(`${e.name} видалено з обраного`)):(n(fv(e)),r.success(`${e.name} додано в обране`)),!0;const a=o.documentId,l=o.id;try{const s=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${l}?populate[favorites][populate][0]=product&populate[favorites][populate][1]=user`,{headers:{Authorization:`Bearer ${i}`}});if(!s.ok)throw new Error("Не вдалося отримати favorites користувача");const c=await s.json(),f=await fetch("https://backenddidiv-production.up.railway.app/api/favorites?populate=*",{headers:{Authorization:`Bearer ${i}`}}),{data:d}=await f.json(),v=c==null?void 0:c.favorites;return t?(await X$(e,v,a,i),n(pv(e.id)),r.warning(`${e.name} видалено з обраного`),!0):(await Y$(e,d,a,i),n(fv(e)),r.success(`${e.name} додано в обране`),!0)}catch{return r.error("Не вдалося оновити обране"),!1}},lS=aS({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===n.id);if(r){if(r.quantity>=n.stock)return;r.quantity+=1}else e.items.push({...n,quantity:1})},setCartItemQuantity:(e,t)=>{const{id:n,quantity:r}=t.payload,i=e.items.find(o=>o.id===n);i&&(i.quantity=r)},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},setCartItems:(e,t)=>{e.items=t.payload},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{setCartItems:cS,addToCart:hv,setCartItemQuantity:mv,removeFromCart:uS,clearCart:nr,addAllToCart:K$,incrementQuantity:gv,decrementQuantity:vv}=lS.actions,Q$=lS.reducer,Z$=async(e,t,n,r)=>{const i=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e,quantity:t,user:n}})});if(!i.ok)throw new Error("Не вдалося створити CartItem");return i.json()},J$=async(e,t,n)=>{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({data:{quantity:t}})});if(!r.ok)throw new Error("Не вдалося оновити CartItem");return r.json()},yo=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o){for(let l=0;l<t;l++)n(hv(e));return r.success(`${e.name} додано в кошик!`),!0}const a=o.id;try{const l=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${a}&populate=product`,{headers:{Authorization:`Bearer ${i}`}});if(!l.ok)throw new Error("Не вдалося отримати кошик користувача");const{data:s}=await l.json(),c=s.find(f=>{var d;return((d=f.product)==null?void 0:d.documentId)===e.documentId});if(c){const f=c.quantity+t;if(f>e.stock)return r.warning(`Доступно лише ${e.stock} шт.`),!1;await J$(c.documentId,f,i),n(mv({id:e.id,quantity:f}))}else await Z$(e.documentId,t,a,i),n(hv({...e})),t>1&&n(mv({id:e.id,quantity:t}));return r.success(`${e.name} додано в кошик!`),!0}catch(l){return console.error(l),r.error("Не вдалося додати товар у кошик"),!1}},dS=()=>{const e=It(),[t,n]=y.useState([]),r=Ue(s=>s.favorites.items),i=Ue(s=>s.cart.items),o=Ke();y.useEffect(()=>{const s=new Date,c=new Date;c.setDate(s.getDate()-7);const f=c.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${f}`).then(d=>d.json()).then(d=>n(d.data)).catch(d=>console.error("Помилка завантаження нових товарів:",d))},[]);const a=(s,c)=>{c.stopPropagation();const f=r.some(d=>d.id===(s==null?void 0:s.id));di(s,f,e,K)},l=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:u.jsxs(JO,{children:[u.jsx(Ln,{}),u.jsx(e4,{children:"Нові товари"}),u.jsxs(t4,{children:[l.map(s=>{var b;const c=r.some(C=>C.id===s.id),f=(s==null?void 0:s.available)??!0,d=(s==null?void 0:s.stock)===0,v=i.find(C=>C.id===s.id),g=(v?v.quantity:0)>=(s.stock||0),x=s.new_price&&s.new_price<s.price,w=x?s.new_price:s.price,h=x?Math.round((s.price-s.new_price)/s.price*100):0,p=async()=>{if(g){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(g){K.warning(`Доступно лише ${s.stock} шт.`);return}await yo(s,1,e,K)};return u.jsxs(n4,{onClick:()=>o(`/product/${s.slug??s.id}`),$soldOut:d,children:[u.jsxs(i4,{children:[u.jsx(o4,{children:"Новинка"}),d&&u.jsx(qc,{children:"Продано"}),!f&&u.jsx(r4,{children:"Бронь"}),u.jsx("img",{src:((b=s.images)==null?void 0:b[0].url)||er,alt:s.name,onError:C=>{C.currentTarget.onerror=null,C.currentTarget.src=er}}),u.jsx("div",{className:"overlay"})]}),u.jsxs(a4,{children:[u.jsx(s4,{children:s.name}),u.jsxs(l4,{children:[u.jsx(Vw,{children:u.jsxs(Uw,{children:[u.jsxs(Ww,{$discount:x,children:[w.toLocaleString()," грн"]}),x&&u.jsxs(Hw,{children:[s.price.toLocaleString()," грн"]}),x&&u.jsxs(Gw,{children:["-",h,"%"]})]})}),u.jsxs(Bw,{children:[f&&!d&&u.jsx(Yl,{onClick:C=>p(),children:u.jsx(xo,{size:24,color:v?"var(--orange-color)":"black",strokeWidth:2})}),!d&&u.jsx(Yl,{onClick:C=>a(s,C),children:u.jsx(Xa,{size:24,fill:c?"#ff4d4f":"none",color:c?"#ff4d4f":"#000000",strokeWidth:c?1:2})})]})]})]})]},s.id)}),u.jsx(c4,{to:"/catalog/new",children:u.jsxs(u4,{children:[u.jsx("p",{children:"Усі новинки"}),u.jsx(d4,{children:u.jsx(Uc,{size:24})})]})})]})]})};function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function e5(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function t5(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var n5=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(t5(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=e5(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),st="-ms-",rc="-moz-",de="-webkit-",fS="comm",Cm="rule",km="decl",r5="@import",pS="@keyframes",i5="@layer",o5=Math.abs,tu=String.fromCharCode,a5=Object.assign;function s5(e,t){return tt(e,0)^45?(((t<<2^tt(e,0))<<2^tt(e,1))<<2^tt(e,2))<<2^tt(e,3):0}function hS(e){return e.trim()}function l5(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,n){return e.replace(t,n)}function Rp(e,t){return e.indexOf(t)}function tt(e,t){return e.charCodeAt(t)|0}function Ra(e,t,n){return e.slice(t,n)}function Cn(e){return e.length}function _m(e){return e.length}function Ps(e,t){return t.push(e),e}function c5(e,t){return e.map(t).join("")}var nu=1,lo=1,mS=0,Ot=0,Ae=0,bo="";function ru(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:nu,column:lo,length:a,return:""}}function Ro(e,t){return a5(ru("",null,null,"",null,null,0),e,{length:-e.length},t)}function u5(){return Ae}function d5(){return Ae=Ot>0?tt(bo,--Ot):0,lo--,Ae===10&&(lo=1,nu--),Ae}function Nt(){return Ae=Ot<mS?tt(bo,Ot++):0,lo++,Ae===10&&(lo=1,nu++),Ae}function jn(){return tt(bo,Ot)}function sl(){return Ot}function es(e,t){return Ra(bo,e,t)}function za(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gS(e){return nu=lo=1,mS=Cn(bo=e),Ot=0,[]}function vS(e){return bo="",e}function ll(e){return hS(es(Ot-1,zp(e===91?e+2:e===40?e+1:e)))}function f5(e){for(;(Ae=jn())&&Ae<33;)Nt();return za(e)>2||za(Ae)>3?"":" "}function p5(e,t){for(;--t&&Nt()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return es(e,sl()+(t<6&&jn()==32&&Nt()==32))}function zp(e){for(;Nt();)switch(Ae){case e:return Ot;case 34:case 39:e!==34&&e!==39&&zp(Ae);break;case 40:e===41&&zp(e);break;case 92:Nt();break}return Ot}function h5(e,t){for(;Nt()&&e+Ae!==47+10;)if(e+Ae===42+42&&jn()===47)break;return"/*"+es(t,Ot-1)+"*"+tu(e===47?e:Nt())}function m5(e){for(;!za(jn());)Nt();return es(e,Ot)}function g5(e){return vS(cl("",null,null,null,[""],e=gS(e),0,[0],e))}function cl(e,t,n,r,i,o,a,l,s){for(var c=0,f=0,d=a,v=0,m=0,g=0,x=1,w=1,h=1,p=0,b="",C=i,S=o,P=r,E=b;w;)switch(g=p,p=Nt()){case 40:if(g!=108&&tt(E,d-1)==58){Rp(E+=fe(ll(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=ll(p);break;case 9:case 10:case 13:case 32:E+=f5(g);break;case 92:E+=p5(sl()-1,7);continue;case 47:switch(jn()){case 42:case 47:Ps(v5(h5(Nt(),sl()),t,n),s);break;default:E+="/"}break;case 123*x:l[c++]=Cn(E)*h;case 125*x:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+f:h==-1&&(E=fe(E,/\f/g,"")),m>0&&Cn(E)-d&&Ps(m>32?yv(E+";",r,n,d-1):yv(fe(E," ","")+";",r,n,d-2),s);break;case 59:E+=";";default:if(Ps(P=xv(E,t,n,c,f,i,l,b,C=[],S=[],d),o),p===123)if(f===0)cl(E,t,P,P,C,o,d,l,S);else switch(v===99&&tt(E,3)===110?100:v){case 100:case 108:case 109:case 115:cl(e,P,P,r&&Ps(xv(e,P,P,0,0,i,l,b,i,C=[],d),S),i,S,d,l,r?C:S);break;default:cl(E,P,P,P,[""],S,0,l,S)}}c=f=m=0,x=h=1,b=E="",d=a;break;case 58:d=1+Cn(E),m=g;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&d5()==125)continue}switch(E+=tu(p),p*x){case 38:h=f>0?1:(E+="\f",-1);break;case 44:l[c++]=(Cn(E)-1)*h,h=1;break;case 64:jn()===45&&(E+=ll(Nt())),v=jn(),f=d=Cn(b=E+=m5(sl())),p++;break;case 45:g===45&&Cn(E)==2&&(x=0)}}return o}function xv(e,t,n,r,i,o,a,l,s,c,f){for(var d=i-1,v=i===0?o:[""],m=_m(v),g=0,x=0,w=0;g<r;++g)for(var h=0,p=Ra(e,d+1,d=o5(x=a[g])),b=e;h<m;++h)(b=hS(x>0?v[h]+" "+p:fe(p,/&\f/g,v[h])))&&(s[w++]=b);return ru(e,t,n,i===0?Cm:l,s,c,f)}function v5(e,t,n){return ru(e,t,n,fS,tu(u5()),Ra(e,2,-2),0)}function yv(e,t,n,r){return ru(e,t,n,km,Ra(e,0,r),Ra(e,r+1,-1),r)}function Gi(e,t){for(var n="",r=_m(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function x5(e,t,n,r){switch(e.type){case i5:if(e.children.length)break;case r5:case km:return e.return=e.return||e.value;case fS:return"";case pS:return e.return=e.value+"{"+Gi(e.children,r)+"}";case Cm:e.value=e.props.join(",")}return Cn(n=Gi(e.children,r))?e.return=e.value+"{"+n+"}":""}function y5(e){var t=_m(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function b5(e){return function(t){t.root||(t=t.return)&&e(t)}}function w5(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var S5=function(t,n,r){for(var i=0,o=0;i=o,o=jn(),i===38&&o===12&&(n[r]=1),!za(o);)Nt();return es(t,Ot)},C5=function(t,n){var r=-1,i=44;do switch(za(i)){case 0:i===38&&jn()===12&&(n[r]=1),t[r]+=S5(Ot-1,n,r);break;case 2:t[r]+=ll(i);break;case 4:if(i===44){t[++r]=jn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=tu(i)}while(i=Nt());return t},k5=function(t,n){return vS(C5(gS(t),n))},bv=new WeakMap,_5=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!bv.get(r))&&!i){bv.set(t,!0);for(var o=[],a=k5(n,o),l=r.props,s=0,c=0;s<a.length;s++)for(var f=0;f<l.length;f++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[f]):l[f]+" "+a[s]}}},E5=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function xS(e,t){switch(s5(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+rc+e+st+e+e;case 6828:case 4268:return de+e+st+e+e;case 6165:return de+e+st+"flex-"+e+e;case 5187:return de+e+fe(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+st+"flex-$1$2")+e;case 5443:return de+e+st+"flex-item-"+fe(e,/flex-|-self/,"")+e;case 4675:return de+e+st+"flex-line-pack"+fe(e,/align-content|flex-|-self/,"")+e;case 5548:return de+e+st+fe(e,"shrink","negative")+e;case 5292:return de+e+st+fe(e,"basis","preferred-size")+e;case 6060:return de+"box-"+fe(e,"-grow","")+de+e+st+fe(e,"grow","positive")+e;case 4554:return de+fe(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(e)-1-t>6)switch(tt(e,t+1)){case 109:if(tt(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+rc+(tt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Rp(e,"stretch")?xS(fe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(tt(e,t+1)!==115)break;case 6444:switch(tt(e,Cn(e)-3-(~Rp(e,"!important")&&10))){case 107:return fe(e,":",":"+de)+e;case 101:return fe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+de+(tt(e,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+st+"$2box$3")+e}break;case 5936:switch(tt(e,t+11)){case 114:return de+e+st+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+st+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+st+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return de+e+st+e+e}return e}var P5=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case km:t.return=xS(t.value,t.length);break;case pS:return Gi([Ro(t,{value:fe(t.value,"@","@"+de)})],i);case Cm:if(t.length)return c5(t.props,function(o){switch(l5(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Gi([Ro(t,{props:[fe(o,/:(read-\w+)/,":"+rc+"$1")]})],i);case"::placeholder":return Gi([Ro(t,{props:[fe(o,/:(plac\w+)/,":"+de+"input-$1")]}),Ro(t,{props:[fe(o,/:(plac\w+)/,":"+rc+"$1")]}),Ro(t,{props:[fe(o,/:(plac\w+)/,st+"input-$1")]})],i)}return""})}},T5=[P5],j5=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var w=x.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||T5,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var w=x.getAttribute("data-emotion").split(" "),h=1;h<w.length;h++)o[w[h]]=!0;l.push(x)});var s,c=[_5,E5];{var f,d=[x5,b5(function(x){f.insert(x)})],v=y5(c.concat(i,d)),m=function(w){return Gi(g5(w),v)};s=function(w,h,p,b){f=p,m(w?w+"{"+h.styles+"}":h.styles),b&&(g.inserted[h.name]=!0)}}var g={key:n,sheet:new n5({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return g.sheet.hydrate(l),g},yS={exports:{}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze=typeof Symbol=="function"&&Symbol.for,Em=Ze?Symbol.for("react.element"):60103,Pm=Ze?Symbol.for("react.portal"):60106,iu=Ze?Symbol.for("react.fragment"):60107,ou=Ze?Symbol.for("react.strict_mode"):60108,au=Ze?Symbol.for("react.profiler"):60114,su=Ze?Symbol.for("react.provider"):60109,lu=Ze?Symbol.for("react.context"):60110,Tm=Ze?Symbol.for("react.async_mode"):60111,cu=Ze?Symbol.for("react.concurrent_mode"):60111,uu=Ze?Symbol.for("react.forward_ref"):60112,du=Ze?Symbol.for("react.suspense"):60113,O5=Ze?Symbol.for("react.suspense_list"):60120,fu=Ze?Symbol.for("react.memo"):60115,pu=Ze?Symbol.for("react.lazy"):60116,$5=Ze?Symbol.for("react.block"):60121,I5=Ze?Symbol.for("react.fundamental"):60117,M5=Ze?Symbol.for("react.responder"):60118,D5=Ze?Symbol.for("react.scope"):60119;function Ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Em:switch(e=e.type,e){case Tm:case cu:case iu:case au:case ou:case du:return e;default:switch(e=e&&e.$$typeof,e){case lu:case uu:case pu:case fu:case su:return e;default:return t}}case Pm:return t}}}function bS(e){return Ht(e)===cu}ve.AsyncMode=Tm;ve.ConcurrentMode=cu;ve.ContextConsumer=lu;ve.ContextProvider=su;ve.Element=Em;ve.ForwardRef=uu;ve.Fragment=iu;ve.Lazy=pu;ve.Memo=fu;ve.Portal=Pm;ve.Profiler=au;ve.StrictMode=ou;ve.Suspense=du;ve.isAsyncMode=function(e){return bS(e)||Ht(e)===Tm};ve.isConcurrentMode=bS;ve.isContextConsumer=function(e){return Ht(e)===lu};ve.isContextProvider=function(e){return Ht(e)===su};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Em};ve.isForwardRef=function(e){return Ht(e)===uu};ve.isFragment=function(e){return Ht(e)===iu};ve.isLazy=function(e){return Ht(e)===pu};ve.isMemo=function(e){return Ht(e)===fu};ve.isPortal=function(e){return Ht(e)===Pm};ve.isProfiler=function(e){return Ht(e)===au};ve.isStrictMode=function(e){return Ht(e)===ou};ve.isSuspense=function(e){return Ht(e)===du};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===iu||e===cu||e===au||e===ou||e===du||e===O5||typeof e=="object"&&e!==null&&(e.$$typeof===pu||e.$$typeof===fu||e.$$typeof===su||e.$$typeof===lu||e.$$typeof===uu||e.$$typeof===I5||e.$$typeof===M5||e.$$typeof===D5||e.$$typeof===$5)};ve.typeOf=Ht;yS.exports=ve;var L5=yS.exports,wS=L5,A5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},R5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},SS={};SS[wS.ForwardRef]=A5;SS[wS.Memo]=R5;var z5=!0;function CS(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var jm=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||z5===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},kS=function(t,n,r){jm(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function F5(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var N5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},B5=/[A-Z]|^ms/g,V5=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_S=function(t){return t.charCodeAt(1)===45},wv=function(t){return t!=null&&typeof t!="boolean"},Md=w5(function(e){return _S(e)?e:e.replace(B5,"-$&").toLowerCase()}),Sv=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(V5,function(r,i,o){return kn={name:i,styles:o,next:kn},i})}return N5[t]!==1&&!_S(t)&&typeof n=="number"&&n!==0?n+"px":n};function Fa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return kn={name:n.name,styles:n.styles,next:kn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)kn={name:r.name,styles:r.styles,next:kn},r=r.next;var i=n.styles+";";return i}return U5(e,t,n)}case"function":{if(e!==void 0){var o=kn,a=n(e);return kn=o,Fa(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function U5(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Fa(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":wv(a)&&(r+=Md(o)+":"+Sv(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)wv(a[l])&&(r+=Md(o)+":"+Sv(o,a[l])+";");else{var s=Fa(e,t,a);switch(o){case"animation":case"animationName":{r+=Md(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var Cv=/label:\s*([^\s;\n{]+)\s*(;|$)/g,kn,Om=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";kn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Fa(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Fa(r,n,t[l]),i&&(o+=a[l]);Cv.lastIndex=0;for(var s="",c;(c=Cv.exec(o))!==null;)s+="-"+c[1];var f=F5(o)+s;return{name:f,styles:o,next:kn}},W5=function(t){return t()},H5=bf["useInsertionEffect"]?bf["useInsertionEffect"]:!1,ES=H5||W5,$m={}.hasOwnProperty,PS=y.createContext(typeof HTMLElement<"u"?j5({key:"css"}):null);PS.Provider;var TS=function(t){return y.forwardRef(function(n,r){var i=y.useContext(PS);return t(n,i,r)})},jS=y.createContext({}),Fp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",G5=function(t,n){var r={};for(var i in n)$m.call(n,i)&&(r[i]=n[i]);return r[Fp]=t,r},q5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return jm(n,r,i),ES(function(){return kS(n,r,i)}),null},Y5=TS(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Fp],o=[r],a="";typeof e.className=="string"?a=CS(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Om(o,void 0,y.useContext(jS));a+=t.key+"-"+l.name;var s={};for(var c in e)$m.call(e,c)&&c!=="css"&&c!==Fp&&(s[c]=e[c]);return s.ref=n,s.className=a,y.createElement(y.Fragment,null,y.createElement(q5,{cache:t,serialized:l,isStringTag:typeof i=="string"}),y.createElement(i,s))}),X5=Y5,Z=function(t,n){var r=arguments;if(n==null||!$m.call(n,"css"))return y.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=X5,o[1]=G5(t,n);for(var a=2;a<i;a++)o[a]=r[a];return y.createElement.apply(null,o)};function Im(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Om(t)}var K5=function(){var t=Im.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Q5=oT,Z5=function(t){return t!=="theme"},kv=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Q5:Z5},_v=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},J5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return jm(n,r,i),ES(function(){return kS(n,r,i)}),null},e3=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=_v(t,n,r),s=l||kv(i),c=!s("as");return function(){var f=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)d.push.apply(d,f);else{d.push(f[0][0]);for(var v=f.length,m=1;m<v;m++)d.push(f[m],f[0][m])}var g=TS(function(x,w,h){var p=c&&x.as||i,b="",C=[],S=x;if(x.theme==null){S={};for(var P in x)S[P]=x[P];S.theme=y.useContext(jS)}typeof x.className=="string"?b=CS(w.registered,C,x.className):x.className!=null&&(b=x.className+" ");var E=Om(d.concat(C),w.registered,S);b+=w.key+"-"+E.name,a!==void 0&&(b+=" "+a);var _=c&&l===void 0?kv(p):s,$={};for(var I in x)c&&I==="as"||_(I)&&($[I]=x[I]);return $.className=b,$.ref=h,y.createElement(y.Fragment,null,y.createElement(J5,{cache:w,serialized:E,isStringTag:typeof p=="string"}),y.createElement(p,$))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(x,w){return e(x,ee({},n,w,{shouldForwardProp:_v(g,w,!0)})).apply(void 0,d)},g}},t3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ze=e3.bind();t3.forEach(function(e){ze[e]=ze(e)});const n3=ze.section`
  background-color: var(--second-background);
`,r3=ze.div`
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
    display: flex;
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,i3=ze.div`

`,o3=ze.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,a3=ze.div`
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
`;ze.div`
  position: absolute;
  inset: 0; /* займає всю картку */
  background: rgba(0, 0, 0, 0.622); /* чорний з прозорістю 25% */
`;const s3=ze(Pe)`
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
`,l3=ze.div`
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
`,c3=ze.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,u3=ze.p`
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
`;var d3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};f3(d3);function f3(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var p3="#4fa94d",h3={"aria-busy":!0,role:"progressbar"},m3=k.div`
  display: ${e=>e.$visible?"flex":"none"};
`,g3="http://www.w3.org/2000/svg",fi=({height:e=100,width:t=100,radius:n=5,color:r=p3,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>u.jsx(m3,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...h3,children:u.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:g3,"data-testid":"ball-triangle-svg",children:[u.jsx("title",{children:"Ball Triangle"}),u.jsx("desc",{children:"Animated representation of three balls"}),u.jsx("g",{fill:"none",fillRule:"evenodd",children:u.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[u.jsxs("circle",{cx:"5",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"27",cy:"5",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"49",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),rn=242.776657104492,v3=1.6,x3=hm`
12.5% {
  stroke-dasharray: ${rn*.14}px, ${rn}px;
  stroke-dashoffset: -${rn*.11}px;
}
43.75% {
  stroke-dasharray: ${rn*.35}px, ${rn}px;
  stroke-dashoffset: -${rn*.35}px;
}
100% {
  stroke-dasharray: ${rn*.01}px, ${rn}px;
  stroke-dashoffset: -${rn*.99}px;
}
`;k.path`
  stroke-dasharray: ${rn*.01}px, ${rn};
  stroke-dashoffset: 0;
  animation: ${x3} ${v3}s linear infinite;
`;var y3=hm`
to {
   transform: rotate(360deg);
 }
`;k.svg`
  animation: ${y3} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var b3=hm`
to {
   stroke-dashoffset: 136;
 }
`;k.polygon`
  stroke-dasharray: 17;
  animation: ${b3} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;k.svg`
  transform-origin: 50% 65%;
`;const w3=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(!0);return y.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();t(a.data.map(l=>{var s;return{id:l.id,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(n3,{children:u.jsxs(r3,{children:[u.jsx(i3,{children:u.jsx(dS,{})}),u.jsx(o3,{children:"Каталог"}),u.jsx(a3,{children:e.map(i=>u.jsxs(s3,{to:`/catalog/${i.title}`,children:[u.jsx(l3,{children:u.jsx(c3,{src:i.image,alt:i.title})}),u.jsx(u3,{children:i.title})]},i.id))})]})})},S3=ze.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,C3=ze.h1`
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
`,k3=ze.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,_3=ze(Pe)`

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

  
`,E3=()=>u.jsxs(S3,{children:[u.jsxs(C3,{children:[" ",u.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),u.jsx(k3,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),u.jsx(_3,{children:" На головну"})]});const P3=k.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,T3=k.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var OS={},$S={},hu={},IS={exports:{}},ts={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ev=Object.getOwnPropertySymbols,j3=Object.prototype.hasOwnProperty,O3=Object.prototype.propertyIsEnumerable;function $3(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function I3(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var M3=I3()?Object.assign:function(e,t){for(var n,r=$3(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)j3.call(n,a)&&(r[a]=n[a]);if(Ev){i=Ev(n);for(var l=0;l<i.length;l++)O3.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},MS={exports:{}},ce={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm=M3,wo=60103,DS=60106;ce.Fragment=60107;ce.StrictMode=60108;ce.Profiler=60114;var LS=60109,AS=60110,RS=60112;ce.Suspense=60113;var zS=60115,FS=60116;if(typeof Symbol=="function"&&Symbol.for){var nn=Symbol.for;wo=nn("react.element"),DS=nn("react.portal"),ce.Fragment=nn("react.fragment"),ce.StrictMode=nn("react.strict_mode"),ce.Profiler=nn("react.profiler"),LS=nn("react.provider"),AS=nn("react.context"),RS=nn("react.forward_ref"),ce.Suspense=nn("react.suspense"),zS=nn("react.memo"),FS=nn("react.lazy")}var Pv=typeof Symbol=="function"&&Symbol.iterator;function D3(e){return e===null||typeof e!="object"?null:(e=Pv&&e[Pv]||e["@@iterator"],typeof e=="function"?e:null)}function ns(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var NS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},BS={};function So(e,t,n){this.props=e,this.context=t,this.refs=BS,this.updater=n||NS}So.prototype.isReactComponent={};So.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(ns(85));this.updater.enqueueSetState(this,e,t,"setState")};So.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function VS(){}VS.prototype=So.prototype;function Dm(e,t,n){this.props=e,this.context=t,this.refs=BS,this.updater=n||NS}var Lm=Dm.prototype=new VS;Lm.constructor=Dm;Mm(Lm,So.prototype);Lm.isPureReactComponent=!0;var Am={current:null},US=Object.prototype.hasOwnProperty,WS={key:!0,ref:!0,__self:!0,__source:!0};function HS(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)US.call(t,r)&&!WS.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wo,type:e,key:o,ref:a,props:i,_owner:Am.current}}function L3(e,t){return{$$typeof:wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rm(e){return typeof e=="object"&&e!==null&&e.$$typeof===wo}function A3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tv=/\/+/g;function Dd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?A3(""+e.key):t.toString(36)}function ul(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case wo:case DS:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Dd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(Tv,"$&/")+"/"),ul(i,t,n,"",function(c){return c})):i!=null&&(Rm(i)&&(i=L3(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Tv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Dd(o,l);a+=ul(o,t,n,s,i)}else if(s=D3(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Dd(o,l++),a+=ul(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(ns(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Ts(e,t,n){if(e==null)return e;var r=[],i=0;return ul(e,r,"","",function(o){return t.call(n,o,i++)}),r}function R3(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var GS={current:null};function ir(){var e=GS.current;if(e===null)throw Error(ns(321));return e}var z3={ReactCurrentDispatcher:GS,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Am,IsSomeRendererActing:{current:!1},assign:Mm};ce.Children={map:Ts,forEach:function(e,t,n){Ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ts(e,function(){t++}),t},toArray:function(e){return Ts(e,function(t){return t})||[]},only:function(e){if(!Rm(e))throw Error(ns(143));return e}};ce.Component=So;ce.PureComponent=Dm;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z3;ce.cloneElement=function(e,t,n){if(e==null)throw Error(ns(267,e));var r=Mm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Am.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)US.call(t,s)&&!WS.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:wo,type:e.type,key:i,ref:o,props:r,_owner:a}};ce.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:AS,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:LS,_context:e},e.Consumer=e};ce.createElement=HS;ce.createFactory=function(e){var t=HS.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:RS,render:e}};ce.isValidElement=Rm;ce.lazy=function(e){return{$$typeof:FS,_payload:{_status:-1,_result:e},_init:R3}};ce.memo=function(e,t){return{$$typeof:zS,type:e,compare:t===void 0?null:t}};ce.useCallback=function(e,t){return ir().useCallback(e,t)};ce.useContext=function(e,t){return ir().useContext(e,t)};ce.useDebugValue=function(){};ce.useEffect=function(e,t){return ir().useEffect(e,t)};ce.useImperativeHandle=function(e,t,n){return ir().useImperativeHandle(e,t,n)};ce.useLayoutEffect=function(e,t){return ir().useLayoutEffect(e,t)};ce.useMemo=function(e,t){return ir().useMemo(e,t)};ce.useReducer=function(e,t,n){return ir().useReducer(e,t,n)};ce.useRef=function(e){return ir().useRef(e)};ce.useState=function(e){return ir().useState(e)};ce.version="17.0.2";MS.exports=ce;var F3=MS.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N3=F3,qS=60103;ts.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var jv=Symbol.for;qS=jv("react.element"),ts.Fragment=jv("react.fragment")}var B3=N3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V3=Object.prototype.hasOwnProperty,U3={key:!0,ref:!0,__self:!0,__source:!0};function YS(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)V3.call(t,r)&&!U3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:qS,type:e,key:o,ref:a,props:i,_owner:B3.current}}ts.jsx=YS;ts.jsxs=YS;IS.exports=ts;var Mt=IS.exports,XS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(XS);var Dt=XS.exports;const W3={"lds-circle":"_lds-circle_qlxhy_1"},H3=Object.freeze(Object.defineProperty({__proto__:null,default:W3},Symbol.toStringTag,{value:"Module"})),G3=$t(H3);var KS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hu,"__esModule",{value:!0});hu.Circle=void 0;const q3=Mt,Y3=KS(Dt),X3=KS(G3);function K3({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,q3.jsx)("div",{className:(0,Y3.default)(X3.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}hu.Circle=K3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=hu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})($S);var QS={},mu={};const Q3={"lds-default":"_lds-default_wt1n8_1"},Z3=Object.freeze(Object.defineProperty({__proto__:null,default:Q3},Symbol.toStringTag,{value:"Module"})),J3=$t(Z3);var ZS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mu,"__esModule",{value:!0});mu.Default=void 0;const Ov=Mt,eI=ZS(Dt),tI=ZS(J3);function nI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,Ov.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,Ov.jsx)("div",{className:(0,eI.default)(tI.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}mu.Default=nI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=mu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(QS);var JS={},gu={};const rI={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},iI=Object.freeze(Object.defineProperty({__proto__:null,default:rI},Symbol.toStringTag,{value:"Module"})),oI=$t(iI);var e2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gu,"__esModule",{value:!0});gu.DualRing=void 0;const $v=Mt,Iv=e2(Dt),Mv=e2(oI);function aI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,$v.jsx)("div",{className:(0,Iv.default)(Mv.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,$v.jsx)("div",{className:(0,Iv.default)(Mv.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}gu.DualRing=aI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=gu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(JS);var t2={},vu={};const sI={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},lI=Object.freeze(Object.defineProperty({__proto__:null,default:sI},Symbol.toStringTag,{value:"Module"})),cI=$t(lI);var n2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vu,"__esModule",{value:!0});vu.Ellipsis=void 0;const Dv=Mt,uI=n2(Dt),dI=n2(cI);function fI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,Dv.jsx)("div",{style:{background:`${e}`}},l));return(0,Dv.jsx)("div",{className:(0,uI.default)(dI.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}vu.Ellipsis=fI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=vu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(t2);var r2={},xu={};const pI={"lds-facebook":"_lds-facebook_1ts9g_1"},hI=Object.freeze(Object.defineProperty({__proto__:null,default:pI},Symbol.toStringTag,{value:"Module"})),mI=$t(hI);var i2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xu,"__esModule",{value:!0});xu.Facebook=void 0;const Lv=Mt,gI=i2(Dt),vI=i2(mI);function xI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,Lv.jsx)("div",{style:{background:`${e}`}},l));return(0,Lv.jsx)("div",{className:(0,gI.default)(vI.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}xu.Facebook=xI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=xu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(r2);var o2={},yu={};const yI={"lds-grid":"_lds-grid_1ftub_1"},bI=Object.freeze(Object.defineProperty({__proto__:null,default:yI},Symbol.toStringTag,{value:"Module"})),wI=$t(bI);var a2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yu,"__esModule",{value:!0});yu.Grid=void 0;const Av=Mt,SI=a2(Dt),CI=a2(wI);function kI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,Av.jsx)("div",{style:{background:`${e}`}},l));return(0,Av.jsx)("div",{className:(0,SI.default)(CI.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}yu.Grid=kI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=yu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(o2);var s2={},bu={};const _I={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},EI=Object.freeze(Object.defineProperty({__proto__:null,default:_I},Symbol.toStringTag,{value:"Module"})),PI=$t(EI);var l2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bu,"__esModule",{value:!0});bu.Heart=void 0;const js=Mt,Ld=l2(Dt),Ad=l2(PI);function TI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,js.jsx)("div",{className:(0,Ld.default)(Ad.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,js.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,js.jsx)("div",{className:(0,Ld.default)(Ad.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,js.jsx)("div",{className:(0,Ld.default)(Ad.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}bu.Heart=TI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=bu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(s2);var c2={},wu={};const jI={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},OI=Object.freeze(Object.defineProperty({__proto__:null,default:jI},Symbol.toStringTag,{value:"Module"})),$I=$t(OI);var u2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wu,"__esModule",{value:!0});wu.Hourglass=void 0;const Rv=Mt,zv=u2(Dt),Fv=u2($I);function II({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,Rv.jsx)("div",{className:(0,zv.default)(Fv.default["lds-hourglass"],n),style:{...r},children:(0,Rv.jsx)("div",{className:(0,zv.default)(Fv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}wu.Hourglass=II;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=wu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(c2);var d2={},Su={};const f2="_center_1rufi_10",p2="_spin_1rufi_1",MI={"lds-orbitals":"_lds-orbitals_1rufi_1",center:f2,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:p2},DI=Object.freeze(Object.defineProperty({__proto__:null,center:f2,default:MI,spin:p2},Symbol.toStringTag,{value:"Module"})),LI=$t(DI);var h2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Su,"__esModule",{value:!0});Su.Orbitals=void 0;const at=Mt,pt=h2(Dt),Ce=h2(LI);function AI({color:e="#7f58af",className:t,style:n}){return(0,at.jsxs)("div",{className:(0,pt.default)(Ce.default["lds-orbitals"],t),style:{...n},children:[(0,at.jsx)("div",{className:Ce.default.center,style:{background:e}}),(0,at.jsxs)("div",{className:(0,pt.default)(Ce.default["inner-spin"]),children:[(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-arc"],Ce.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-arc"],Ce.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-arc"],Ce.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-arc"],Ce.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-moon-a"]),style:{background:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-moon-b"]),style:{background:e}})]}),(0,at.jsxs)("div",{className:(0,pt.default)(Ce.default["outer-spin"]),children:[(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-arc"],Ce.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-arc"],Ce.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-arc"],Ce.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-arc"],Ce.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-moon-a"]),style:{background:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-moon-b"]),style:{background:e}})]})]})}Su.Orbitals=AI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=Su;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(d2);var m2={},Cu={};const RI={"lds-ring":"_lds-ring_xgxdp_1"},zI=Object.freeze(Object.defineProperty({__proto__:null,default:RI},Symbol.toStringTag,{value:"Module"})),FI=$t(zI);var g2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cu,"__esModule",{value:!0});Cu.Ring=void 0;const Nv=Mt,NI=g2(Dt),BI=g2(FI);function VI({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,Nv.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,Nv.jsx)("div",{className:(0,NI.default)(BI.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}Cu.Ring=VI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Cu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(m2);var v2={},ku={};const UI={"lds-ripple":"_lds-ripple_1lgcf_1"},WI=Object.freeze(Object.defineProperty({__proto__:null,default:UI},Symbol.toStringTag,{value:"Module"})),HI=$t(WI);var x2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ku,"__esModule",{value:!0});ku.Ripple=void 0;const Bv=Mt,GI=x2(Dt),qI=x2(HI);function YI({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,Bv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,Bv.jsx)("div",{className:(0,GI.default)(qI.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}ku.Ripple=YI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=ku;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(v2);var y2={},_u={};const XI={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},KI=Object.freeze(Object.defineProperty({__proto__:null,default:XI},Symbol.toStringTag,{value:"Module"})),QI=$t(KI);var b2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_u,"__esModule",{value:!0});_u.Roller=void 0;const Rd=Mt,Vv=b2(Dt),Uv=b2(QI);function ZI({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Rd.jsx)("div",{children:(0,Rd.jsx)("div",{className:(0,Vv.default)(Uv.default["div-after"]),style:{background:e}})},o));return(0,Rd.jsx)("div",{className:(0,Vv.default)(Uv.default["lds-roller"],t),style:{...n},children:r})}_u.Roller=ZI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=_u;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(y2);var w2={},Eu={};const JI={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},eM=Object.freeze(Object.defineProperty({__proto__:null,default:JI},Symbol.toStringTag,{value:"Module"})),tM=$t(eM);var S2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Eu,"__esModule",{value:!0});Eu.Spinner=void 0;const zd=Mt,Wv=S2(Dt),Hv=S2(tM);function nM({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,zd.jsx)("div",{children:(0,zd.jsx)("div",{className:(0,Wv.default)(Hv.default["div-after"]),style:{background:e}})},o));return(0,zd.jsx)("div",{className:(0,Wv.default)(Hv.default["lds-spinner"],t),style:{...n},children:r})}Eu.Spinner=nM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=Eu;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(w2);var C2={},Pu={};const k2="_left_v9vlb_30",_2="_right_v9vlb_33",E2="_anim_v9vlb_37",rM={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:k2,right:_2,anim:E2,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},iM=Object.freeze(Object.defineProperty({__proto__:null,anim:E2,default:rM,left:k2,right:_2},Symbol.toStringTag,{value:"Module"})),oM=$t(iM);var P2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pu,"__esModule",{value:!0});Pu.Ouroboro=void 0;const zo=Mt,Fo=P2(Dt),No=P2(oM);function aM({color:e="#7f58af",style:t,className:n}){return(0,zo.jsxs)("div",{className:(0,Fo.default)(No.default["lds-ouroboro"],n),style:{...t},children:[(0,zo.jsx)("span",{className:(0,Fo.default)(No.default.left),children:(0,zo.jsx)("span",{className:(0,Fo.default)(No.default.anim),style:{background:e}})}),(0,zo.jsx)("span",{className:(0,Fo.default)(No.default.right),children:(0,zo.jsx)("span",{className:(0,Fo.default)(No.default.anim),style:{background:e}})})]})}Pu.Ouroboro=aM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Pu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(C2);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=$S;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=QS;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=JS;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=t2;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=r2;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=o2;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=s2;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=c2;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const c=d2;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return c.Orbitals}});const f=m2;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return f.Ring}});const d=v2;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const v=y2;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return v.Roller}});const m=w2;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return m.Spinner}});const g=C2;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return g.Ouroboro}})})(OS);const sM=()=>u.jsx(T3,{children:u.jsx(OS.Default,{color:"#6d433da8"})});const lM="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",cM=aj`
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
  src: url(${lM}) format('truetype');
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
`,uM=k.div`
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
`,dM=k(Pe)`
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
`,fM=k.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,pM=k.h3`

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
`,hM=k.a`

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
`,mM=k.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,gM=()=>{const[e,t]=y.useState([]);return y.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),u.jsxs(u.Fragment,{children:[u.jsx(fM,{children:"Каталог"}),u.jsxs(uM,{children:[e.slice(0,7).map(n=>u.jsx(dM,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:u.jsx(pM,{children:n.title})},n.title)),u.jsxs(hM,{href:"catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(mM,{children:u.jsx(Uc,{size:24})})]})]})]})};function Gv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function zm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Gv(t[r])&&Gv(e[r])&&Object.keys(t[r]).length>0&&zm(e[r],t[r])})}const T2={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function On(){const e=typeof document<"u"?document:{};return zm(e,T2),e}const vM={document:T2,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function wt(){const e=typeof window<"u"?window:{};return zm(e,vM),e}function xM(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function yM(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function j2(e,t=0){return setTimeout(e,t)}function ic(){return Date.now()}function bM(e){const t=wt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function wM(e,t="x"){const n=wt();let r,i,o;const a=bM(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Os(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function SM(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function At(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!SM(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(Os(t[l])&&Os(r[l])?r[l].__swiper__?t[l]=r[l]:At(t[l],r[l]):!Os(t[l])&&Os(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:At(t[l],r[l])):t[l]=r[l])}}}return t}function bi(e,t,n){e.style.setProperty(t,n)}function O2({swiper:e,targetPosition:t,side:n}){const r=wt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",c=(d,v)=>s==="next"&&d>=v||s==="prev"&&d<=v,f=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),v=.5-Math.cos(d*Math.PI)/2;let m=i+v*(t-i);if(c(m,t)&&(m=t),e.wrapperEl.scrollTo({[n]:m}),c(m,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:m})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(f)};f()}function En(e,t=""){const n=wt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function CM(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function kM(e,t){const n=wt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=CM(e,t))),r}function oc(e){try{console.warn(e);return}catch{}}function ac(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:xM(t)),n}function _M(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function EM(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function xr(e,t){return wt().getComputedStyle(e,null).getPropertyValue(t)}function sc(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function $2(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Np(e,t,n){const r=wt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Na(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function I2(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=En(e.el,`.${r[i]}`)[0];o||(o=ac("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const qv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function PM({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:qv};function i(m){let g;return m&&typeof m=="string"&&e.isElement&&(g=e.el.querySelector(m)||e.hostEl.querySelector(m),g)?g:(m&&(typeof m=="string"&&(g=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&g&&g.length>1&&e.el.querySelectorAll(m).length===1?g=e.el.querySelector(m):g&&g.length===1&&(g=g[0])),m&&!g?m:g)}function o(m,g){const x=e.params.navigation;m=qe(m),m.forEach(w=>{w&&(w.classList[g?"add":"remove"](...x.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=g),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](x.lockClass))})}function a(){const{nextEl:m,prevEl:g}=e.navigation;if(e.params.loop){o(g,!1),o(m,!1);return}o(g,e.isBeginning&&!e.params.rewind),o(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const m=e.params.navigation;if(e.params.navigation=I2(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let g=i(m.nextEl),x=i(m.prevEl);Object.assign(e.navigation,{nextEl:g,prevEl:x}),g=qe(g),x=qe(x);const w=(h,p)=>{if(h){if(m.addIcons&&h.matches(".swiper-button-next,.swiper-button-prev")&&!h.querySelector("svg")){const b=document.createElement("div");Na(b,qv),h.appendChild(b.querySelector("svg")),b.remove()}h.addEventListener("click",p==="next"?s:l)}!e.enabled&&h&&h.classList.add(...m.lockClass.split(" "))};g.forEach(h=>w(h,"next")),x.forEach(h=>w(h,"prev"))}function f(){let{nextEl:m,prevEl:g}=e.navigation;m=qe(m),g=qe(g);const x=(w,h)=>{w.removeEventListener("click",h==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(w=>x(w,"next")),g.forEach(w=>x(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?v():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{f()}),n("enable disable",()=>{let{nextEl:m,prevEl:g}=e.navigation;if(m=qe(m),g=qe(g),e.enabled){a();return}[...m,...g].filter(x=>!!x).forEach(x=>x.classList.add(e.params.navigation.lockClass))}),n("click",(m,g)=>{let{nextEl:x,prevEl:w}=e.navigation;x=qe(x),w=qe(w);const h=g.target;let p=w.includes(h)||x.includes(h);if(e.isElement&&!p){const b=g.path||g.composedPath&&g.composedPath();b&&(p=b.find(C=>x.includes(C)||w.includes(C)))}if(e.params.navigation.hideOnClick&&!p){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===h||e.pagination.el.contains(h)))return;let b;x.length?b=x[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(b=w[0].classList.contains(e.params.navigation.hiddenClass)),r(b===!0?"navigationShow":"navigationHide"),[...x,...w].filter(C=>!!C).forEach(C=>C.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),a()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(e.navigation,{enable:d,disable:v,update:a,init:c,destroy:f})}function Bo(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function TM({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(h,p){const{bulletActiveClass:b}=e.params.pagination;h&&(h=h[`${p==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${b}-${p}`),h=h[`${p==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${b}-${p}-${p}`)))}function c(h,p,b){if(h=h%b,p=p%b,p===h+1)return"next";if(p===h-1)return"previous"}function f(h){const p=h.target.closest(Bo(e.params.pagination.bulletClass));if(!p)return;h.preventDefault();const b=sc(p)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const C=c(e.realIndex,b,e.slides.length);C==="next"?e.slideNext():C==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b)}function d(){const h=e.rtl,p=e.params.pagination;if(l())return;let b=e.pagination.el;b=qe(b);let C,S;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,E=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(S=e.previousRealIndex||0,C=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(C=e.snapIndex,S=e.previousSnapIndex):(S=e.previousIndex||0,C=e.activeIndex||0),p.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let $,I,M;if(p.dynamicBullets&&(o=Np(_[0],e.isHorizontal()?"width":"height",!0),b.forEach(D=>{D.style[e.isHorizontal()?"width":"height"]=`${o*(p.dynamicMainBullets+4)}px`}),p.dynamicMainBullets>1&&S!==void 0&&(a+=C-(S||0),a>p.dynamicMainBullets-1?a=p.dynamicMainBullets-1:a<0&&(a=0)),$=Math.max(C-a,0),I=$+(Math.min(_.length,p.dynamicMainBullets)-1),M=(I+$)/2),_.forEach(D=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(A=>`${p.bulletActiveClass}${A}`)].map(A=>typeof A=="string"&&A.includes(" ")?A.split(" "):A).flat();D.classList.remove(...j)}),b.length>1)_.forEach(D=>{const j=sc(D);j===C?D.classList.add(...p.bulletActiveClass.split(" ")):e.isElement&&D.setAttribute("part","bullet"),p.dynamicBullets&&(j>=$&&j<=I&&D.classList.add(...`${p.bulletActiveClass}-main`.split(" ")),j===$&&s(D,"prev"),j===I&&s(D,"next"))});else{const D=_[C];if(D&&D.classList.add(...p.bulletActiveClass.split(" ")),e.isElement&&_.forEach((j,A)=>{j.setAttribute("part",A===C?"bullet-active":"bullet")}),p.dynamicBullets){const j=_[$],A=_[I];for(let L=$;L<=I;L+=1)_[L]&&_[L].classList.add(...`${p.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(A,"next")}}if(p.dynamicBullets){const D=Math.min(_.length,p.dynamicMainBullets+4),j=(o*D-o)/2-M*o,A=h?"right":"left";_.forEach(L=>{L.style[e.isHorizontal()?A:"top"]=`${j}px`})}}b.forEach((_,$)=>{if(p.type==="fraction"&&(_.querySelectorAll(Bo(p.currentClass)).forEach(I=>{I.textContent=p.formatFractionCurrent(C+1)}),_.querySelectorAll(Bo(p.totalClass)).forEach(I=>{I.textContent=p.formatFractionTotal(E)})),p.type==="progressbar"){let I;p.progressbarOpposite?I=e.isHorizontal()?"vertical":"horizontal":I=e.isHorizontal()?"horizontal":"vertical";const M=(C+1)/E;let D=1,j=1;I==="horizontal"?D=M:j=M,_.querySelectorAll(Bo(p.progressbarFillClass)).forEach(A=>{A.style.transform=`translate3d(0,0,0) scaleX(${D}) scaleY(${j})`,A.style.transitionDuration=`${e.params.speed}ms`})}p.type==="custom"&&p.renderCustom?(Na(_,p.renderCustom(e,C+1,E)),$===0&&r("paginationRender",_)):($===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](p.lockClass)})}function v(){const h=e.params.pagination;if(l())return;const p=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=qe(b);let C="";if(h.type==="bullets"){let S=e.params.loop?Math.ceil(p/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&S>p&&(S=p);for(let P=0;P<S;P+=1)h.renderBullet?C+=h.renderBullet.call(e,P,h.bulletClass):C+=`<${h.bulletElement} ${e.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?C=h.renderFraction.call(e,h.currentClass,h.totalClass):C=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?C=h.renderProgressbar.call(e,h.progressbarFillClass):C=`<span class="${h.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach(S=>{h.type!=="custom"&&Na(S,C||""),h.type==="bullets"&&e.pagination.bullets.push(...S.querySelectorAll(Bo(h.bulletClass)))}),h.type!=="custom"&&r("paginationRender",b[0])}function m(){e.params.pagination=I2(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let p;typeof h.el=="string"&&e.isElement&&(p=e.el.querySelector(h.el)),!p&&typeof h.el=="string"&&(p=[...document.querySelectorAll(h.el)]),p||(p=h.el),!(!p||p.length===0)&&(e.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(p)&&p.length>1&&(p=[...e.el.querySelectorAll(h.el)],p.length>1&&(p=p.find(b=>$2(b,".swiper")[0]===e.el))),Array.isArray(p)&&p.length===1&&(p=p[0]),Object.assign(e.pagination,{el:p}),p=qe(p),p.forEach(b=>{h.type==="bullets"&&h.clickable&&b.classList.add(...(h.clickableClass||"").split(" ")),b.classList.add(h.modifierClass+h.type),b.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(b.classList.add(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&b.classList.add(h.progressbarOppositeClass),h.clickable&&b.addEventListener("click",f),e.enabled||b.classList.add(h.lockClass)}))}function g(){const h=e.params.pagination;if(l())return;let p=e.pagination.el;p&&(p=qe(p),p.forEach(b=>{b.classList.remove(h.hiddenClass),b.classList.remove(h.modifierClass+h.type),b.classList.remove(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(b.classList.remove(...(h.clickableClass||"").split(" ")),b.removeEventListener("click",f))})),e.pagination.bullets&&e.pagination.bullets.forEach(b=>b.classList.remove(...h.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const h=e.params.pagination;let{el:p}=e.pagination;p=qe(p),p.forEach(b=>{b.classList.remove(h.horizontalClass,h.verticalClass),b.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(m(),v(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{v(),d()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(p=>p.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(h,p)=>{const b=p.target,C=qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&C&&C.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const S=C[0].classList.contains(e.params.pagination.hiddenClass);r(S===!0?"paginationShow":"paginationHide"),C.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const x=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(p=>p.classList.remove(e.params.pagination.paginationDisabledClass))),m(),v(),d()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(p=>p.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:x,disable:w,render:v,update:d,init:m,destroy:g})}function jM({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,c,f=new Date().getTime(),d,v,m,g,x,w;function h(z){!e||e.destroyed||!e.wrapperEl||z.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",h),!(w||z.detail&&z.detail.bySwiperTouchMove)&&$())}const p=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=c,d=!1);const z=e.autoplay.paused?c:f+s-new Date().getTime();e.autoplay.timeLeft=z,r("autoplayTimeLeft",z,z/l),a=requestAnimationFrame(()=>{p()})},b=()=>{let z;return e.virtual&&e.params.virtual.enabled?z=e.slides.find(O=>O.classList.contains("swiper-slide-active")):z=e.slides[e.activeIndex],z?parseInt(z.getAttribute("data-swiper-autoplay"),10):void 0},C=()=>{let z=e.params.autoplay.delay;const T=b();return!Number.isNaN(T)&&T>0&&(z=T),z},S=z=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),p();let T=z;typeof T>"u"&&(T=C(),l=T,s=T),c=T;const O=e.params.speed,F=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(O,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,O,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(O,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,O,!0,!0),r("autoplay")),e.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{S()})))};return T>0?(clearTimeout(o),o=setTimeout(()=>{F()},T)):requestAnimationFrame(()=>{F()}),T},P=()=>{f=new Date().getTime(),e.autoplay.running=!0,S(),r("autoplayStart")},E=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},_=(z,T)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),z||(x=!0);const O=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",h):$()};if(e.autoplay.paused=!0,T){O();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-f),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),O())},$=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(f=new Date().getTime(),x?(x=!1,S(c)):S(),e.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const z=On();z.visibilityState==="hidden"&&(x=!0,_(!0)),z.visibilityState==="visible"&&$()},M=z=>{z.pointerType==="mouse"&&(x=!0,w=!0,!(e.animating||e.autoplay.paused)&&_(!0))},D=z=>{z.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&$())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",M),e.el.addEventListener("pointerleave",D))},A=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",M),e.el.removeEventListener("pointerleave",D))},L=()=>{On().addEventListener("visibilitychange",I)},R=()=>{On().removeEventListener("visibilitychange",I)};n("init",()=>{e.params.autoplay.enabled&&(j(),L(),P())}),n("destroy",()=>{A(),R(),e.autoplay.running&&E()}),n("_freeModeStaticRelease",()=>{(m||x)&&$()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?E():_(!0,!0)}),n("beforeTransitionStart",(z,T,O)=>{e.destroyed||!e.autoplay.running||(O||!e.params.autoplay.disableOnInteraction?_(!0,!0):E())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){E();return}v=!0,m=!1,x=!1,g=setTimeout(()=>{x=!0,m=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(g),clearTimeout(o),e.params.autoplay.disableOnInteraction){m=!1,v=!1;return}m&&e.params.cssMode&&$(),m=!1,v=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=C(),l=C())}),Object.assign(e.autoplay,{start:P,stop:E,pause:_,resume:$})}let Fd;function OM(){const e=wt(),t=On();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function M2(){return Fd||(Fd=OM()),Fd}let Nd;function $M({userAgent:e}={}){const t=M2(),n=wt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const f=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=r==="Win32";let m=r==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&m&&t.touch&&g.indexOf(`${a}x${l}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),m=!1),s&&!v&&(o.os="android",o.android=!0),(c||d||f)&&(o.os="ios",o.ios=!0),o}function D2(e={}){return Nd||(Nd=$M(e)),Nd}let Bd;function IM(){const e=wt(),t=D2();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,c]=l.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));n=s<16||s===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function L2(){return Bd||(Bd=IM()),Bd}function MM({swiper:e,on:t,emit:n}){const r=wt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(f=>{o=r.requestAnimationFrame(()=>{const{width:d,height:v}=e;let m=d,g=v;f.forEach(({contentBoxSize:x,contentRect:w,target:h})=>{h&&h!==e.el||(m=w?w.width:(x[0]||x).inlineSize,g=w?w.height:(x[0]||x).blockSize)}),(m!==d||g!==v)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function DM({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=wt(),a=(c,f={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,v=new d(m=>{if(e.__preventObserver__)return;if(m.length===1){r("observerUpdate",m[0]);return}const g=function(){r("observerUpdate",m[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});v.observe(c,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:e.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),i.push(v)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=$2(e.hostEl);for(let f=0;f<c.length;f+=1)a(c[f])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var LM={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function AM(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(xr(r,"padding-left")||0,10)-parseInt(xr(r,"padding-right")||0,10),n=n-parseInt(xr(r,"padding-top")||0,10)-parseInt(xr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function RM(){const e=this;function t(I,M){return parseFloat(I.getPropertyValue(e.getDirectionLabel(M))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,c=En(i,`.${e.params.slideClass}, swiper-slide`),f=l?e.virtual.slides.length:c.length;let d=[];const v=[],m=[];let g=n.slidesOffsetBefore;typeof g=="function"&&(g=n.slidesOffsetBefore.call(e));let x=n.slidesOffsetAfter;typeof x=="function"&&(x=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,h=e.slidesGrid.length,p=e.size-g-x;let b=n.spaceBetween,C=-g,S=0,P=0;if(typeof p>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*p:typeof b=="string"&&(b=parseFloat(b)),e.virtualSize=-b-g-x,c.forEach(I=>{o?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(bi(r,"--swiper-centered-offset-before",""),bi(r,"--swiper-centered-offset-after","")),n.cssMode&&(bi(r,"--swiper-slides-offset-before",`${g}px`),bi(r,"--swiper-slides-offset-after",`${x}px`));const E=n.grid&&n.grid.rows>1&&e.grid;E?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let _;const $=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(I=>typeof n.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<f;I+=1){_=0;const M=c[I];if(!(M&&(E&&e.grid.updateSlide(I,M,c),xr(M,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&M&&(n.roundLengths&&(_=Math.floor(_)),M.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){$&&(M.style[e.getDirectionLabel("width")]="");const D=getComputedStyle(M),j=M.style.transform,A=M.style.webkitTransform;if(j&&(M.style.transform="none"),A&&(M.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?Np(M,"width",!0):Np(M,"height",!0);else{const L=t(D,"width"),R=t(D,"padding-left"),z=t(D,"padding-right"),T=t(D,"margin-left"),O=t(D,"margin-right"),F=D.getPropertyValue("box-sizing");if(F&&F==="border-box")_=L+T+O;else{const{clientWidth:B,offsetWidth:N}=M;_=L+R+z+T+O+(N-B)}}j&&(M.style.transform=j),A&&(M.style.webkitTransform=A),n.roundLengths&&(_=Math.floor(_))}else _=(p-(n.slidesPerView-1)*b)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),M&&(M.style[e.getDirectionLabel("width")]=`${_}px`);M&&(M.swiperSlideSize=_),m.push(_),n.centeredSlides?(C=C+_/2+S/2+b,S===0&&I!==0&&(C=C-p/2-b),I===0&&(C=C-p/2-b),Math.abs(C)<1/1e3&&(C=0),n.roundLengths&&(C=Math.floor(C)),P%n.slidesPerGroup===0&&d.push(C),v.push(C)):(n.roundLengths&&(C=Math.floor(C)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&d.push(C),v.push(C),C=C+_+b),e.virtualSize+=_+b,S=_,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,p)+x,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+b}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),E&&e.grid.updateWrapperSize(_,d),!n.centeredSlides){const I=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,M=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||I);let D=d.length;if(M){let A;if(n.slidesPerView==="auto"){A=1;let L=0;for(let R=m.length-1;R>=0&&(L+=m[R]+(R<m.length-1?b:0),L<=p);R-=1)A=m.length-R}else A=Math.floor(n.slidesPerView);D=Math.max(f-A,0)}const j=[];for(let A=0;A<d.length;A+=1){let L=d[A];n.roundLengths&&(L=Math.floor(L)),M?A<=D&&j.push(L):d[A]<=e.virtualSize-p&&j.push(L)}d=j,Math.floor(e.virtualSize-p)-Math.floor(d[d.length-1])>1&&(M||d.push(e.virtualSize-p))}if(l&&n.loop){const I=m[0]+b;if(n.slidesPerGroup>1){const M=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),D=I*n.slidesPerGroup;for(let j=0;j<M;j+=1)d.push(d[d.length-1]+D)}for(let M=0;M<e.virtual.slidesBefore+e.virtual.slidesAfter;M+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+I),v.push(v[v.length-1]+I),e.virtualSize+=I}if(d.length===0&&(d=[0]),b!==0){const I=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((M,D)=>!n.cssMode||n.loop?!0:D!==c.length-1).forEach(M=>{M.style[I]=`${b}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let I=0;m.forEach(D=>{I+=D+(b||0)}),I-=b;const M=I>p?I-p:0;d=d.map(D=>D<=0?-g:D>M?M+x:D)}if(n.centerInsufficientSlides){let I=0;if(m.forEach(M=>{I+=M+(b||0)}),I-=b,I<p){const M=(p-I)/2;d.forEach((D,j)=>{d[j]=D-M}),v.forEach((D,j)=>{v[j]=D+M})}}if(Object.assign(e,{slides:c,snapGrid:d,slidesGrid:v,slidesSizesGrid:m}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){bi(r,"--swiper-centered-offset-before",`${-d[0]}px`),bi(r,"--swiper-centered-offset-after",`${e.size/2-m[m.length-1]/2}px`);const I=-e.snapGrid[0],M=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(D=>D+I),e.slidesGrid=e.slidesGrid.map(D=>D+M)}if(f!==s&&e.emit("slidesLengthChange"),d.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const I=`${n.containerModifierClass}backface-hidden`,M=e.el.classList.contains(I);f<=n.maxBackfaceHiddenSlides?M||e.el.classList.add(I):M&&e.el.classList.remove(I)}}function zM(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function FM(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Yv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function NM(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const c=r[s];let f=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(f-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+l),v=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+l),m=-(a-f),g=m+t.slidesSizesGrid[s],x=m>=0&&m<=t.size-t.slidesSizesGrid[s],w=m>=0&&m<t.size-1||g>1&&g<=t.size||m<=0&&g>=t.size;w&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s)),Yv(c,w,n.slideVisibleClass),Yv(c,x,n.slideFullyVisibleClass),c.progress=i?-d:d,c.originalProgress=i?-v:v}}function BM(e){const t=this;if(typeof e>"u"){const f=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*f||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,c=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const f=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=f||i<=0,a=d||i>=1,f&&(i=0),d&&(i=1)}if(n.loop){const f=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),v=t.slidesGrid[f],m=t.slidesGrid[d],g=t.slidesGrid[t.slidesGrid.length-1],x=Math.abs(e);x>=v?l=(x-v)/g:l=(x+g-m)/g,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(s&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Vd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function VM(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>En(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,c,f;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),f=t.find(d=>d.column===i+1),c=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(f=EM(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!f&&(f=t[0]),c=_M(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(d=>{Vd(d,d===s,n.slideActiveClass),Vd(d,d===f,n.slideNextClass),Vd(d,d===c,n.slidePrevClass)}),e.emitSlidesClasses()}const dl=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},Ud=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Bp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,c)=>a+r+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&Ud(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&Ud(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Ud(e,a)};function UM(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function WM(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,c;const f=m=>{let g=m-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof s>"u"&&(s=UM(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const m=Math.min(i.slidesPerGroupSkip,s);c=m+Math.floor((s-m)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=f(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let v;if(t.virtual&&i.virtual.enabled)i.loop?v=f(s):v=s;else if(d){const m=t.slides.find(x=>x.column===s);let g=parseInt(m.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(m),0)),v=Math.floor(g/i.grid.rows)}else if(t.slides[s]){const m=t.slides[s].getAttribute("data-swiper-slide-index");m?v=parseInt(m,10):v=s}else v=s;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:v,previousIndex:o,activeIndex:s}),t.initialized&&Bp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==v&&t.emit("realIndexChange"),t.emit("slideChange"))}function HM(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var GM={updateSize:AM,updateSlides:RM,updateAutoHeight:zM,updateSlidesOffset:FM,updateSlidesProgress:NM,updateProgress:BM,updateSlidesClasses:VM,updateActiveIndex:WM,updateClickedSlide:HM};function qM(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=wM(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function YM(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const c=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let f;const d=n.maxTranslate()-n.minTranslate();d===0?f=0:f=(e-n.minTranslate())/d,f!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function XM(){return-this.snapGrid[0]}function KM(){return-this.snapGrid[this.snapGrid.length-1]}function QM(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),c=o.maxTranslate();let f;if(r&&e>s?f=s:r&&e<c?f=c:f=e,o.updateProgress(f),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-f;else{if(!o.support.smoothScroll)return O2({swiper:o,targetPosition:-f,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-f,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(v){!o||o.destroyed||v.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var ZM={getTranslate:qM,setTranslate:YM,minTranslate:XM,maxTranslate:KM,translateTo:QM};function JM(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function A2({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function e6(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),A2({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function t6(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),A2({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var n6={setTransition:JM,transitionStart:e6,transitionEnd:t6};function r6(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:c,previousIndex:f,activeIndex:d,rtlTranslate:v,wrapperEl:m,enabled:g}=o;if(!g&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const x=Math.min(o.params.slidesPerGroupSkip,a);let w=x+Math.floor((a-x)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const h=-s[w];if(l.normalizeSlideIndex)for(let E=0;E<c.length;E+=1){const _=-Math.floor(h*100),$=Math.floor(c[E]*100),I=Math.floor(c[E+1]*100);typeof c[E+1]<"u"?_>=$&&_<I-(I-$)/2?a=E:_>=$&&_<I&&(a=E+1):_>=$&&(a=E)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(v?h>o.translate&&h>o.minTranslate():h<o.translate&&h<o.minTranslate())||!o.allowSlidePrev&&h>o.translate&&h>o.maxTranslate()&&(d||0)!==a))return!1;a!==(f||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(h);let p;a>d?p="next":a<d?p="prev":p="reset";const b=o.virtual&&o.params.virtual.enabled;if(!(b&&i)&&(v&&-h===o.translate||!v&&h===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(h),p!=="reset"&&(o.transitionStart(n,p),o.transitionEnd(n,p)),!1;if(l.cssMode){const E=o.isHorizontal(),_=v?h:-h;if(t===0)b&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),b&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[E?"scrollLeft":"scrollTop"]=_})):m[E?"scrollLeft":"scrollTop"]=_,b&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return O2({swiper:o,targetPosition:_,side:E?"left":"top"}),!0;m.scrollTo({[E?"left":"top"]:_,behavior:"smooth"})}return!0}const P=L2().isSafari;return b&&!i&&P&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(h),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,p),t===0?o.transitionEnd(n,p):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(_){!o||o.destroyed||_.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,p))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function i6(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const x=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===x).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c,slidesOffsetBefore:f,slidesOffsetAfter:d}=i.params,v=c||!!f||!!d;let m=i.params.slidesPerView;m==="auto"?m=i.slidesPerViewDynamic():(m=Math.ceil(parseFloat(i.params.slidesPerView,10)),v&&m%2===0&&(m=m+1));let g=s-l<m;if(v&&(g=g||l<Math.ceil(m/2)),r&&v&&i.params.slidesPerView!=="auto"&&!o&&(g=!1),g){const x=v?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:x,slideTo:!0,activeSlideIndex:x==="next"?l+1:l-s+1,slideRealIndex:x==="next"?i.realIndex:void 0})}if(o){const x=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===x).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function o6(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function a6(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function v(p){return p<0?-Math.floor(Math.abs(p)):Math.floor(p)}const m=v(d),g=o.map(p=>v(p)),x=i.freeMode&&i.freeMode.enabled;let w=o[g.indexOf(m)-1];if(typeof w>"u"&&(i.cssMode||x)){let p;o.forEach((b,C)=>{m>=b&&(p=C)}),typeof p<"u"&&(w=x?o[p]:o[p>0?p-1:p])}let h=0;if(typeof w<"u"&&(h=a.indexOf(w),h<0&&(h=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(h=h-r.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),i.rewind&&r.isBeginning){const p=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(p,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(h,e,t,n)}),!0;return r.slideTo(h,e,t,n)}function s6(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function l6(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const c=i.snapGrid[l],f=i.snapGrid[l+1];s-c>(f-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],f=i.snapGrid[l];s-c<=(f-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function c6(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(En(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),j2(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var u6={slideTo:r6,slideToLoop:i6,slideNext:o6,slidePrev:a6,slideReset:s6,slideToClosest:l6,slideToClickedSlide:c6};function d6(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{En(i,`.${r.slideClass}, swiper-slide`).forEach((g,x)=>{g.setAttribute("data-swiper-slide-index",x)})},a=()=>{const m=En(i,`.${r.slideBlankClass}`);m.forEach(g=>{g.remove()}),m.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),c=n.slides.length%s!==0,f=l&&n.slides.length%r.grid.rows!==0,d=m=>{for(let g=0;g<m;g+=1){const x=n.isElement?ac("swiper-slide",[r.slideBlankClass]):ac("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(x)}};if(c){if(r.loopAddBlankSlides){const m=s-n.slides.length%s;d(m),n.recalcSlides(),n.updateSlides()}else oc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(f){if(r.loopAddBlankSlides){const m=r.grid.rows-n.slides.length%r.grid.rows;d(m),n.recalcSlides(),n.updateSlides()}else oc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const v=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:v?void 0:"next",initial:t})}function f6({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:f,allowSlideNext:d,slidesEl:v,params:m}=s,{centeredSlides:g,slidesOffsetBefore:x,slidesOffsetAfter:w,initialSlide:h}=m,p=g||!!x||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&m.virtual.enabled){t&&(!p&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):p&&s.snapIndex<m.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=f,s.allowSlideNext=d,s.emit("loopFix");return}let b=m.slidesPerView;b==="auto"?b=s.slidesPerViewDynamic():(b=Math.ceil(parseFloat(m.slidesPerView,10)),p&&b%2===0&&(b=b+1));const C=m.slidesPerGroupAuto?b:m.slidesPerGroup;let S=p?Math.max(C,Math.ceil(b/2)):C;S%C!==0&&(S+=C-S%C),S+=m.loopAdditionalSlides,s.loopedSlides=S;const P=s.grid&&m.grid&&m.grid.rows>1;c.length<b+S||s.params.effect==="cards"&&c.length<b+S*2?oc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):P&&m.grid.fill==="row"&&oc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],_=[],$=P?Math.ceil(c.length/m.grid.rows):c.length,I=o&&$-h<b&&!p;let M=I?h:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(c.find(T=>T.classList.contains(m.slideActiveClass))):M=i;const D=n==="next"||!n,j=n==="prev"||!n;let A=0,L=0;const z=(P?c[i].column:i)+(p&&typeof r>"u"?-b/2+.5:0);if(z<S){A=Math.max(S-z,C);for(let T=0;T<S-z;T+=1){const O=T-Math.floor(T/$)*$;if(P){const F=$-O-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===F&&E.push(B)}else E.push($-O-1)}}else if(z+b>$-S){L=Math.max(z-($-S*2),C),I&&(L=Math.max(L,b-$+h+1));for(let T=0;T<L;T+=1){const O=T-Math.floor(T/$)*$;P?c.forEach((F,B)=>{F.column===O&&_.push(B)}):_.push(O)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&c.length<b+S*2&&(_.includes(i)&&_.splice(_.indexOf(i),1),E.includes(i)&&E.splice(E.indexOf(i),1)),j&&E.forEach(T=>{c[T].swiperLoopMoveDOM=!0,v.prepend(c[T]),c[T].swiperLoopMoveDOM=!1}),D&&_.forEach(T=>{c[T].swiperLoopMoveDOM=!0,v.append(c[T]),c[T].swiperLoopMoveDOM=!1}),s.recalcSlides(),m.slidesPerView==="auto"?s.updateSlides():P&&(E.length>0&&j||_.length>0&&D)&&s.slides.forEach((T,O)=>{s.grid.updateSlide(O,T,s.slides)}),m.watchSlidesProgress&&s.updateSlidesOffset(),t){if(E.length>0&&j){if(typeof e>"u"){const T=s.slidesGrid[M],F=s.slidesGrid[M+A]-T;l?s.setTranslate(s.translate-F):(s.slideTo(M+Math.ceil(A),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-F,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-F))}else if(r){const T=P?E.length/m.grid.rows:E.length;s.slideTo(s.activeIndex+T,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&D)if(typeof e>"u"){const T=s.slidesGrid[M],F=s.slidesGrid[M-L]-T;l?s.setTranslate(s.translate-F):(s.slideTo(M-L,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-F,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-F))}else{const T=P?_.length/m.grid.rows:_.length;s.slideTo(s.activeIndex-T,0,!1,!0)}}if(s.allowSlidePrev=f,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const T={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(O=>{!O.destroyed&&O.params.loop&&O.loopFix({...T,slideTo:O.params.slidesPerView===m.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...T,slideTo:s.controller.control.params.slidesPerView===m.slidesPerView?t:!1})}s.emit("loopFix")}function p6(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var h6={loopCreate:d6,loopFix:f6,loopDestroy:p6};function m6(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function g6(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var v6={setGrabCursor:m6,unsetGrabCursor:g6};function x6(e,t=this){function n(r){if(!r||r===On()||r===wt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Xv(e,t,n){const r=wt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function y6(e){const t=this,n=On();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Xv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!kM(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&f&&(s=f[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(v?x6(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const m=a.currentX,g=a.currentY;if(!Xv(t,r,m))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=m,a.startY=g,i.touchStartTime=ic(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let x=!0;s.matches(i.focusableElements)&&(x=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=x&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function b6(e){const t=On(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].find(P=>P.identifier===r.touchId),!c||c.identifier!==r.touchId)return}else c=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const f=c.pageX,d=c.pageY;if(s.preventedByNestedSwiper){o.startX=f,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:f,startY:d,currentX:f,currentY:d}),r.touchStartTime=ic());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(f>o.startX&&-n.translate<=n.maxTranslate()||f<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(f<o.startX&&n.translate<=n.maxTranslate()||f>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=f,o.currentY=d;const v=o.currentX-o.startX,m=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(v**2+m**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let P;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:v*v+m*m>=25&&(P=Math.atan2(Math.abs(m),Math.abs(v))*180/Math.PI,r.isScrolling=n.isHorizontal()?P>i.touchAngle:90-P>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let g=n.isHorizontal()?v:m,x=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(g=Math.abs(g)*(a?1:-1),x=Math.abs(x)*(a?1:-1)),o.diff=g,g*=i.touchRatio,a&&(g=-g,x=-x);const w=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=x>0?"prev":"next";const h=n.params.loop&&!i.cssMode,p=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(h&&p&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const P=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(P)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let b;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&h&&p&&Math.abs(g)>=1){Object.assign(o,{startX:f,startY:d,currentX:f,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let C=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),g>0?(h&&p&&!b&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(C=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**S))):g<0&&(h&&p&&!b&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(C=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**S))),C&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function w6(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(S=>S.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:c,enabled:f}=t;if(!f||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=ic(),v=d-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),v<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=ic(),j2(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let m;if(a.followFinger?m=s?t.translate:-t.translate:m=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:m});return}const g=m>=-t.maxTranslate()&&!t.params.loop;let x=0,w=t.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){const P=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[S+P]<"u"?(g||m>=c[S]&&m<c[S+P])&&(x=S,w=c[S+P]-c[S]):(g||m>=c[S])&&(x=S,w=c[c.length-1]-c[c.length-2])}let h=null,p=null;a.rewind&&(t.isBeginning?p=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));const b=(m-c[x])/w,C=x<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(v>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?h:x+C):t.slideTo(x)),t.swipeDirection==="prev"&&(b>1-a.longSwipesRatio?t.slideTo(x+C):p!==null&&b<0&&Math.abs(b)>a.longSwipesRatio?t.slideTo(p):t.slideTo(x))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(x+C):t.slideTo(x):(t.swipeDirection==="next"&&t.slideTo(h!==null?h:x+C),t.swipeDirection==="prev"&&t.slideTo(p!==null?p:x))}}function Kv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function S6(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function C6(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function k6(e){const t=this;dl(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function _6(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const R2=(e,t)=>{const n=On(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Kv,!0):e[c]("observerUpdate",Kv,!0),i[s]("load",e.onLoad,{capture:!0}))};function E6(){const e=this,{params:t}=e;e.onTouchStart=y6.bind(e),e.onTouchMove=b6.bind(e),e.onTouchEnd=w6.bind(e),e.onDocumentTouchStart=_6.bind(e),t.cssMode&&(e.onScroll=C6.bind(e)),e.onClick=S6.bind(e),e.onLoad=k6.bind(e),R2(e,"on")}function P6(){R2(this,"off")}var T6={attachEvents:E6,detachEvents:P6};const Qv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function j6(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=On(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),c=e.getBreakpoint(o,l,s);if(!c||e.currentBreakpoint===c)return;const d=(c in o?o[c]:void 0)||e.originalParams,v=Qv(e,r),m=Qv(e,d),g=e.params.grabCursor,x=d.grabCursor,w=r.enabled;v&&!m?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!v&&m&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!x?e.unsetGrabCursor():!g&&x&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof d[P]>"u")return;const E=r[P]&&r[P].enabled,_=d[P]&&d[P].enabled;E&&!_&&e[P].disable(),!E&&_&&e[P].enable()});const h=d.direction&&d.direction!==r.direction,p=r.loop&&(d.slidesPerView!==r.slidesPerView||h),b=r.loop;h&&n&&e.changeDirection(),At(e.params,d);const C=e.params.enabled,S=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!C?e.disable():!w&&C&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",d),n&&(p?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&S?(e.loopCreate(t),e.updateSlides()):b&&!S&&e.loopDestroy()),e.emit("breakpoint",d)}function O6(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=wt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:c}=a[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var $6={setBreakpoint:j6,getBreakpoint:O6};function I6(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function M6(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=I6(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function D6(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var L6={addClasses:M6,removeClasses:D6};function A6(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var R6={checkOverflow:A6},Vp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function z6(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){At(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){At(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),At(t,r)}}const Wd={eventsEmitter:LM,update:GM,translate:ZM,transition:n6,slide:u6,loop:h6,grabCursor:v6,events:T6,breakpoints:$6,checkOverflow:R6,classes:L6},Hd={};let Fm=class Rn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=At({},r),n&&!r.el&&(r.el=n);const i=On();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(c=>{const f=At({},r,{el:c});s.push(new Rn(f))}),s}const o=this;o.__swiper__=!0,o.support=M2(),o.device=D2({userAgent:r.userAgent}),o.browser=L2(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:z6(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=At({},Vp,a);return o.params=At({},l,Hd,r),o.originalParams=At({},o.params),o.passedParams=At({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=En(n,`.${r.slideClass}, swiper-slide`),o=sc(i[0]);return sc(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=En(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[c]?Math.ceil(o[c].swiperSlideSize):0,v;for(let m=c+1;m<o.length;m+=1)o[m]&&!v&&(d+=Math.ceil(o[m].swiperSlideSize),f+=1,d>s&&(v=!0));for(let m=c-1;m>=0;m-=1)o[m]&&!v&&(d+=o[m].swiperSlideSize,f+=1,d>s&&(v=!0))}else if(t==="current")for(let d=c+1;d<o.length;d+=1)(n?a[d]+l[d]-a[c]<s:a[d]-a[c]<s)&&(f+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<s&&(f+=1);return f}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&dl(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):En(r,i())[0])();return!a&&n.params.createElements&&(a=ac("div",n.params.wrapperClass),r.append(a),En(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||xr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||xr(r,"direction")==="rtl"),wrongRTL:xr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?dl(n,o):o.addEventListener("load",a=>{dl(n,a.target)})}),Bp(n),n.initialized=!0,Bp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),yM(r)),r.destroyed=!0),null}static extendDefaults(t){At(Hd,t)}static get extendedDefaults(){return Hd}static get defaults(){return Vp}static installModule(t){Rn.prototype.__modules__||(Rn.prototype.__modules__=[]);const n=Rn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Rn.installModule(n)),Rn):(Rn.installModule(t),Rn)}};Object.keys(Wd).forEach(e=>{Object.keys(Wd[e]).forEach(t=>{Fm.prototype[t]=Wd[e][t]})});Fm.use([MM,DM]);const z2=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ai(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function qi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:ai(t[r])&&ai(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:qi(e[r],t[r]):e[r]=t[r]})}function F2(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function N2(e={}){return e.pagination&&typeof e.pagination.el>"u"}function B2(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function V2(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function F6(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function N6({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:c,pagination:f,navigation:d,scrollbar:v,virtual:m,thumbs:g}=e;let x,w,h,p,b,C,S,P;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(x=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(c.pagination||c.pagination===!1)&&f&&!f.el&&(h=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&v&&!v.el&&(p=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(b=!0);const E=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),c[_].prevEl=void 0,c[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),c[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?C=!0:!c.loop&&n.loop?S=!0:P=!0),s.forEach(_=>{if(ai(c[_])&&ai(n[_]))Object.assign(c[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&E(_);else{const $=n[_];($===!0||$===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?$===!1&&E(_):c[_]=n[_]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&t&&m&&c.virtual.enabled?(m.slides=t,m.update(!0)):r.includes("virtual")&&m&&c.virtual.enabled&&(t&&(m.slides=t),m.update(!0)),r.includes("children")&&t&&c.loop&&(P=!0),x&&g.init()&&g.update(!0),w&&(e.controller.control=c.controller.control),h&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),f.init(),f.render(),f.update()),p&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),v.init(),v.updateSize(),v.setTranslate()),b&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Na(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Na(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(c.navigation.nextEl=i),o&&(c.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(C||P)&&e.loopDestroy(),(S||P)&&e.loopCreate(),e.update()}function B6(e={},t=!0){const n={on:{}},r={},i={};qi(n,Vp),n._emitClasses=!0,n.init=!1;const o={},a=z2.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?ai(e[s])?(n[s]={},i[s]={},qi(n[s],e[s]),qi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function V6({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){F2(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),N2(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),B2(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function U6(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),c=n.map(i);s.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return z2.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(ai(e[s])&&ai(t[s])){const c=Object.keys(e[s]),f=Object.keys(t[s]);c.length!==f.length?a(s):(c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),f.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const W6=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function lc(){return lc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lc.apply(this,arguments)}function U2(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function W2(e){const t=[];return Q.Children.toArray(e).forEach(n=>{U2(n)?t.push(n):n.props&&n.props.children&&W2(n.props.children).forEach(r=>t.push(r))}),t}function H6(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Q.Children.toArray(e).forEach(r=>{if(U2(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=W2(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function G6(e,t,n){if(!n)return null;const r=f=>{let d=f;return f<0?d=t.length+f:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let f=l;f<s;f+=1)f>=o&&f<=a&&c.push(t[r(f)]);return c.map((f,d)=>Q.cloneElement(f,{swiper:e,style:i,key:f.props.virtualIndex||f.key||`slide-${d}`}))}function da(e,t){return typeof window>"u"?y.useEffect(e,t):y.useLayoutEffect(e,t)}const Zv=y.createContext(null),q6=y.createContext(null),H2=y.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,c]=y.useState("swiper"),[f,d]=y.useState(null),[v,m]=y.useState(!1),g=y.useRef(!1),x=y.useRef(null),w=y.useRef(null),h=y.useRef(null),p=y.useRef(null),b=y.useRef(null),C=y.useRef(null),S=y.useRef(null),P=y.useRef(null),{params:E,passedParams:_,rest:$,events:I}=B6(o),{slides:M,slots:D}=H6(r),j=()=>{m(!v)};Object.assign(E.on,{_containerClasses(T,O){c(O)}});const A=()=>{Object.assign(E.on,I),l=!0;const T={...E};if(delete T.wrapperClass,w.current=new Fm(T),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=M;const O={cache:!1,slides:M,renderExternal:d,renderExternalUpdate:!1};qi(w.current.params.virtual,O),qi(w.current.originalParams.virtual,O)}};x.current||A(),w.current&&w.current.on("_beforeBreakpoint",j);const L=()=>{l||!I||!w.current||Object.keys(I).forEach(T=>{w.current.on(T,I[T])})},R=()=>{!I||!w.current||Object.keys(I).forEach(T=>{w.current.off(T,I[T])})};y.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",j)}),y.useEffect(()=>{!g.current&&w.current&&(w.current.emitSlidesClasses(),g.current=!0)}),da(()=>{if(a&&(a.current=x.current),!!x.current)return w.current.destroyed&&A(),V6({el:x.current,nextEl:b.current,prevEl:C.current,paginationEl:S.current,scrollbarEl:P.current,swiper:w.current},E),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),da(()=>{L();const T=U6(_,h.current,M,p.current,O=>O.key);return h.current=_,p.current=M,T.length&&w.current&&!w.current.destroyed&&N6({swiper:w.current,slides:M,passedParams:_,changedParams:T,nextEl:b.current,prevEl:C.current,scrollbarEl:P.current,paginationEl:S.current}),()=>{R()}}),da(()=>{W6(w.current)},[f]);function z(){return E.virtual?G6(w.current,M,f):M.map((T,O)=>Q.cloneElement(T,{swiper:w.current,swiperSlideIndex:O}))}return Q.createElement(t,lc({ref:x,className:V2(`${s}${e?` ${e}`:""}`)},$),Q.createElement(q6.Provider,{value:w.current},D["container-start"],Q.createElement(n,{className:F6(E.wrapperClass)},D["wrapper-start"],z(),D["wrapper-end"]),F2(E)&&Q.createElement(Q.Fragment,null,Q.createElement("div",{ref:C,className:"swiper-button-prev"}),Q.createElement("div",{ref:b,className:"swiper-button-next"})),B2(E)&&Q.createElement("div",{ref:P,className:"swiper-scrollbar"}),N2(E)&&Q.createElement("div",{ref:S,className:"swiper-pagination"}),D["container-end"]))});H2.displayName="Swiper";const G2=y.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},c)=>{const f=y.useRef(null),[d,v]=y.useState("swiper-slide"),[m,g]=y.useState(!1);function x(b,C,S){C===f.current&&v(S)}da(()=>{if(typeof l<"u"&&(f.current.swiperSlideIndex=l),c&&(c.current=f.current),!(!f.current||!r)){if(r.destroyed){d!=="swiper-slide"&&v("swiper-slide");return}return r.on("_slideClass",x),()=>{r&&r.off("_slideClass",x)}}}),da(()=>{r&&f.current&&!r.destroyed&&v(r.getSlideClasses(f.current))},[r]);const w={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},h=()=>typeof t=="function"?t(w):t,p=()=>{g(!0)};return Q.createElement(e,lc({ref:f,className:V2(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:p},s),i&&Q.createElement(Zv.Provider,{value:w},Q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},h(),o&&!m&&Q.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}}))),!i&&Q.createElement(Zv.Provider,{value:w},h(),o&&!m&&Q.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}})))});G2.displayName="SwiperSlide";const Y6=k.section`
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
`,X6=k.div`
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
`,K6=k.div`
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
`,Q6=k(Pe)`
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
`,Z6=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],J6=()=>u.jsx(Y6,{children:u.jsx(H2,{modules:[PM,jM,TM],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:Z6.map(e=>u.jsx(G2,{children:u.jsx(X6,{bg:e.img,children:u.jsxs(K6,{children:[u.jsx("h1",{children:e.title}),u.jsx("p",{children:e.desc}),u.jsx(Q6,{to:e.url,children:e.btn})]})})},e.id))})}),eD=k.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Gd=k.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,qd=k.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Yd=k.div`
  font-size: 14px;
  color: #888;
`,q2=()=>u.jsxs(eD,{children:[u.jsxs(Gd,{children:[u.jsx(qd,{children:"3000+"}),u.jsx(Yd,{children:"Перевірених деталей"})]}),u.jsxs(Gd,{children:[u.jsx(qd,{children:"6 років"}),u.jsx(Yd,{children:"Досвіду на ринку"})]}),u.jsxs(Gd,{children:[u.jsx(qd,{children:"100%"}),u.jsx(Yd,{children:"Контроль якості"})]})]}),tD=ze.div`
  background:var(--background-color);
`,nD=ze.div`
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
`;ze.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;ze.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const rD=()=>u.jsx(tD,{children:u.jsxs(nD,{children:[u.jsx(J6,{}),u.jsx(dS,{}),u.jsx(gM,{}),u.jsx(q2,{})]})}),iD=k.div`
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
`,oD=k.section`
  background-color:  var(--second-background);
`,aD=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,sD=k.button`
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
`,lD=k.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,cD=k.button`
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
`;const uD=k.div`
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
`,dD=k.div`
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
`;const fD=k.div`
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
`;const pD=k.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,hD=k.button`
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
`,Y2=k.button`
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
`,mD=k.div`
  position: relative;
  display: inline-block;

`,gD=k.div`
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
`,wi=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,vD=k.aside`

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
`,xD=k.h3`
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
`;const yD=k.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,bD=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,wD=k.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,SD=k.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,CD=k.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,kD=k.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Up=k.input.attrs({type:"checkbox"})`
  display: none;
`,_D=k.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Up}:checked + & {
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

  ${Up}:checked + &::after {
    opacity: 1;
  }
`;var Wp={},Nm={},Bm={},Co={};Object.defineProperty(Co,"__esModule",{value:!0});Co.Direction=void 0;var Jv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Jv||(Co.Direction=Jv={}));(function(e){var t=te&&te.__spreadArray||function(D,j,A){if(A||arguments.length===2)for(var L=0,R=j.length,z;L<R;L++)(z||!(L in j))&&(z||(z=Array.prototype.slice.call(j,0,L)),z[L]=j[L]);return D.concat(z||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=y,r=Co,i=function(D){var j=D.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(D){return D.touches&&D.touches.length||D.changedTouches&&D.changedTouches.length}e.isTouchEvent=o;function a(D,j,A){var L=(j-D)/A,R=8,z=Number(L.toFixed(R));return parseInt(z.toString(),10)===z}e.isStepDivisible=a;function l(D,j,A,L,R,z,T){var O=1e11;if(D=Math.round(D*O)/O,!z){var F=T[j-1],B=T[j+1];if(F&&F>D)return F;if(B&&B<D)return B}if(D>L)return L;if(D<A)return A;var N=Math.floor(D*O-A*O)%Math.floor(R*O),V=Math.floor(D*O-Math.abs(N)),H=N===0?D:V/O,G=Math.abs(N/O)<R/2?H:H+R,W=(0,e.getStepDecimals)(R);return parseFloat(G.toFixed(W))}e.normalizeValue=l;function s(D,j,A){return(D-j)/(A-j)}e.relativeValue=s;function c(D){return D===r.Direction.Up||D===r.Direction.Down}e.isVertical=c;function f(D,j,A){if(j>=A)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(A,")"));if(D<j)throw new RangeError("value (".concat(D,") is smaller than min (").concat(j,")"));if(D>A)throw new RangeError("value (".concat(D,") is bigger than max (").concat(A,")"))}e.checkBoundaries=f;function d(D,j,A){return D<j?j:D>A?A:D}e.checkValuesAgainstBoundaries=d;function v(D){if(!(D.length<2)&&!D.slice(1).every(function(j,A){return D[A]<=j}))throw new RangeError("values={[".concat(D,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=v;function m(D){var j=window.getComputedStyle(D);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=m;function g(D){var j=window.getComputedStyle(D);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=g;function x(D,j,A){var L=A?-1:1;D.forEach(function(R,z){return h(R,L*j[z].x,j[z].y)})}e.translateThumbs=x;function w(D,j,A,L){for(var R=0,z=I(D[0],j,A,L),T=1;T<D.length;T++){var O=I(D[T],j,A,L);O<z&&(z=O,R=T)}return R}e.getClosestThumbIndex=w;function h(D,j,A){D.style.transform="translate(".concat(j,"px, ").concat(A,"px)")}e.translate=h;var p=function(D){var j=[],A=null,L=function(){for(var R=[],z=0;z<arguments.length;z++)R[z]=arguments[z];j=R,!A&&(A=requestAnimationFrame(function(){A=null,D.apply(void 0,j)}))};return L};e.schd=p;function b(D,j,A){var L=D.slice(0);return L[j]=A,L}e.replaceAt=b;function C(D){var j=D.values,A=D.colors,L=D.min,R=D.max,z=D.direction,T=z===void 0?r.Direction.Right:z,O=D.rtl,F=O===void 0?!1:O;F&&T===r.Direction.Right?T=r.Direction.Left:F&&r.Direction.Left&&(T=r.Direction.Right);var B=j.slice(0).sort(function(V,H){return V-H}).map(function(V){return(V-L)/(R-L)*100}),N=B.reduce(function(V,H,G){return"".concat(V,", ").concat(A[G]," ").concat(H,"%, ").concat(A[G+1]," ").concat(H,"%")},"");return"linear-gradient(".concat(T,", ").concat(A[0]," 0%").concat(N,", ").concat(A[A.length-1]," 100%)")}e.getTrackBackground=C;function S(){}e.voidFn=S;function P(D){throw new Error("Didn't expect to get here")}e.assertUnreachable=P;var E=function(D,j,A,L,R){R===void 0&&(R=function(T){return T});var z=Math.ceil(t([D],Array.from(D.children),!0).reduce(function(T,O){var F=Math.ceil(O.getBoundingClientRect().width);if(O.innerText&&O.innerText.includes(A)&&O.childElementCount===0){var B=O.cloneNode(!0);B.innerHTML=R(j.toFixed(L)),B.style.visibility="hidden",document.body.appendChild(B),F=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return F>T?F:T},D.getBoundingClientRect().width));return z},_=function(D,j,A,L,R,z,T){T===void 0&&(T=function(B){return B});var O=[],F=function(B){var N=E(A[B],L[B],R,z,T),V=j[B].x;j.forEach(function(H,G){var W=H.x,q=E(A[G],L[G],R,z,T);B!==G&&(V>=W&&V<=W+q||V+N>=W&&V+N<=W+q)&&(O.includes(G)||(O.push(B),O.push(G),O=t(t([],O,!0),[B,G],!1),F(G)))})};return F(D),Array.from(new Set(O.sort()))},$=function(D,j,A,L,R,z){L===void 0&&(L=.1),R===void 0&&(R=" - "),z===void 0&&(z=function(G){return G});var T=(0,e.getStepDecimals)(L),O=(0,n.useState)({}),F=O[0],B=O[1],N=(0,n.useState)(z(j[A].toFixed(T))),V=N[0],H=N[1];return(0,n.useEffect)(function(){if(D){var G=D.getThumbs();if(G.length<1)return;var W={},q=D.getOffsets(),oe=_(A,q,G,j,R,T,z),he=z(j[A].toFixed(T));if(oe.length){var ie=oe.reduce(function(St,_o,is,Eo){return St.length?t(t([],St,!0),[q[Eo[is]].x],!1):[q[Eo[is]].x]},[]);if(Math.min.apply(Math,ie)===q[A].x){var De=[];oe.forEach(function(St){De.push(j[St].toFixed(T))}),he=Array.from(new Set(De.sort(function(St,_o){return parseFloat(St)-parseFloat(_o)}))).map(z).join(R);var We=Math.min.apply(Math,ie),He=Math.max.apply(Math,ie),hi=G[oe[ie.indexOf(He)]].getBoundingClientRect().width;W.left="".concat(Math.abs(We-(He+hi))/2,"px"),W.transform="translate(-50%, 0)"}else W.visibility="hidden"}H(he),B(W)}},[D,j]),[V,F]};e.useThumbOverlap=$;function I(D,j,A,L){var R=D.getBoundingClientRect(),z=R.left,T=R.top,O=R.width,F=R.height;return c(L)?Math.abs(A-(T+F/2)):Math.abs(j-(z+O/2))}var M=function(){var D,j=((D=navigator.userAgentData)===null||D===void 0?void 0:D.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=M})(Bm);var ED=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),PD=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),TD=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),jD=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&PD(t,e,n);return TD(t,e),t},e1=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Nm,"__esModule",{value:!0});var $s=jD(y),ae=Bm,Fe=Co,OD=["ArrowRight","ArrowUp","k","PageUp"],$D=["ArrowLeft","ArrowDown","j","PageDown"],ID=function(e){ED(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=$s.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,c=r.trackRef.current;if(!c)return console.warn("No track element found."),[];var f=c.getBoundingClientRect(),d=(0,ae.getPaddingAndBorder)(c);return r.getThumbs().map(function(v,m){var g={x:0,y:0},x=v.getBoundingClientRect(),w=(0,ae.getMargin)(v);switch(o){case Fe.Direction.Right:return g.x=(w.left+d.left)*-1,g.y=((x.height-f.height)/2+d.top)*-1,g.x+=f.width*(0,ae.relativeValue)(a[m],l,s)-x.width/2,g;case Fe.Direction.Left:return g.x=(w.right+d.right)*-1,g.y=((x.height-f.height)/2+d.top)*-1,g.x+=f.width-f.width*(0,ae.relativeValue)(a[m],l,s)-x.width/2,g;case Fe.Direction.Up:return g.x=((x.width-f.width)/2+w.left+d.left)*-1,g.y=-d.left,g.y+=f.height-f.height*(0,ae.relativeValue)(a[m],l,s)-x.height/2,g;case Fe.Direction.Down:return g.x=((x.width-f.width)/2+w.left+d.left)*-1,g.y=-d.left,g.y+=f.height*(0,ae.relativeValue)(a[m],l,s)-x.height/2,g;default:return(0,ae.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,ae.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,ae.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,ae.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,ae.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,ae.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,c=o.rtl,f=o.direction,d=r.state.isChanged,v=r.getTargetIndex(i.nativeEvent),m=c||f===Fe.Direction.Left||f===Fe.Direction.Down?-1:1;v!==-1&&(OD.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:v,isChanged:!0}),l((0,ae.replaceAt)(a,v,r.normalizeValue(a[v]+m*(i.key==="PageUp"?s*10:s),v)))):$D.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:v,isChanged:!0}),l((0,ae.replaceAt)(a,v,r.normalizeValue(a[v]-m*(i.key==="PageDown"?s*10:s),v)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,c=r.props,f=c.direction,d=c.min,v=c.max,m=c.onChange,g=c.values,x=c.step,w=c.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var h=r.trackRef.current;if(!h)return null;var p=h.getBoundingClientRect(),b=(0,ae.isVertical)(f)?p.height:p.width;if(s[0]!==-1&&s[1]!==-1){var C=i-s[0],S=o-s[1],P=0;switch(f){case Fe.Direction.Right:case Fe.Direction.Left:P=C/b*(v-d);break;case Fe.Direction.Down:case Fe.Direction.Up:P=S/b*(v-d);break;default:(0,ae.assertUnreachable)(f)}if(w&&(P*=-1),Math.abs(P)>=x/2){for(var E=0;E<r.thumbRefs.length;E++){if(g[E]===v&&Math.sign(P)===1||g[E]===d&&Math.sign(P)===-1)return;var _=g[E]+P;_>v?P=v-g[E]:_<d&&(P=d-g[E])}for(var $=g.slice(0),E=0;E<r.thumbRefs.length;E++)$=(0,ae.replaceAt)($,E,r.normalizeValue(g[E]+P,E));r.setState({draggedTrackPos:[i,o]}),m($)}}else{var I=0;switch(f){case Fe.Direction.Right:I=(i-p.left)/b*(v-d)+d;break;case Fe.Direction.Left:I=(b-(i-p.left))/b*(v-d)+d;break;case Fe.Direction.Down:I=(o-p.top)/b*(v-d)+d;break;case Fe.Direction.Up:I=(b-(o-p.top))/b*(v-d)+d;break;default:(0,ae.assertUnreachable)(f)}w&&(I=v+d-I),Math.abs(g[l]-I)>=x/2&&m((0,ae.replaceAt)(g,l,r.normalizeValue(I,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,c=a.step,f=a.allowOverlap,d=a.values;return(0,ae.normalizeValue)(i,o,l,s,c,f,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=$s.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),c=[],f=0;f<r.numOfMarks+1;f++){var d=9999,v=9999;if(r.markRefs[f].current){var m=r.markRefs[f].current.getBoundingClientRect();d=m.height,v=m.width}r.props.direction===Fe.Direction.Left||r.props.direction===Fe.Direction.Right?c.push([Math.round(o/r.numOfMarks*f+l-v/2),-Math.round((d-a)/2)]):c.push([Math.round(a/r.numOfMarks*f+s-d/2),-Math.round((v-o)/2)])}r.setState({markOffsets:c})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,ae.schd)(r.onMouseMove),r.schdOnTouchMove=(0,ae.schd)(r.onTouchMove),r.schdOnEnd=(0,ae.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return $s.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,ae.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,ae.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,ae.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,ae.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,c=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,ae.translateThumbs)(this.getThumbs(),this.getOffsets(),c),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(f){(0,ae.isStepDivisible)(a,f,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,c=s===void 0?function(){return null}:s,f=r.values,d=r.min,v=r.max,m=r.allowOverlap,g=r.disabled,x=this.state,w=x.draggedThumbIndex,h=x.thumbZIndexes,p=x.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,ae.isVertical)(this.props.direction)?"ns-resize":"ew-resize":f.length===1&&!g?"pointer":"inherit"},onMouseDown:g?ae.voidFn:this.onMouseDownTrack,onTouchStart:g?ae.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:g,children:e1(e1([],p.map(function(b,C,S){return c({props:{style:n.props.direction===Fe.Direction.Left||n.props.direction===Fe.Direction.Right?{position:"absolute",left:"".concat(b[0],"px"),marginTop:"".concat(b[1],"px")}:{position:"absolute",top:"".concat(b[0],"px"),marginLeft:"".concat(b[1],"px")},key:"mark".concat(C),ref:n.markRefs[C]},index:C})}),!0),f.map(function(b,C){var S=n.state.draggedThumbIndex===C;return l({index:C,value:b,isDragged:S,props:{style:{position:"absolute",zIndex:h[C],cursor:g?"inherit":S?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:C,tabIndex:g?void 0:0,"aria-valuemax":m?v:f[C+1]||v,"aria-valuemin":m?d:f[C-1]||d,"aria-valuenow":b,draggable:!1,ref:n.thumbRefs[C],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:g?ae.voidFn:n.onKeyDown,onKeyUp:g?ae.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Fe.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}($s.Component);Nm.default=ID;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Nm);e.Range=n.default;var r=Bm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=Co;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Wp);const MD=k.div`
  padding: 20px 0;
`,DD=k.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,t1=k.input`
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
`;const LD=k.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,AD=k.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,X2=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,c]=y.useState([o,a]);y.useEffect(()=>{e&&e.length===2&&(c(e),t&&t(e))},[e,t]);const f=m=>{c(m),t&&t(m)},d=(m,g)=>{const x=g===""?"":Number(g),w=[...s];w[m]=x,f(w)},v=m=>{const g=[...s];m===0?((g[0]===""||g[0]<o)&&(g[0]=o),g[0]>g[1]-50&&(g[0]=g[1]-50)):((g[1]===""||g[1]>a)&&(g[1]=a),g[1]<g[0]+50&&(g[1]=g[0]+50)),f(g)};return u.jsx(u.Fragment,{children:l&&u.jsxs(MD,{children:[u.jsxs(DD,{children:[u.jsx(t1,{type:"number",value:s[0],min:o,max:s[1],onChange:m=>d(0,m.target.value),onBlur:()=>v(0)}),u.jsx(t1,{type:"number",value:s[1],min:s[0],max:a,onChange:m=>d(1,m.target.value),onBlur:()=>v(1)})]}),u.jsx(Wp.Range,{values:s,step:50,min:o,max:a,onChange:f,renderTrack:({props:m,children:g})=>u.jsx(LD,{...m,background:Wp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:g}),renderThumb:({props:m})=>u.jsx(AD,{...m})})]})})},RD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=y.useState([]),[l,s]=y.useState({});y.useEffect(()=>{t&&(async()=>{try{const w=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],h={};w.forEach(b=>{var C;(C=b.attributes)==null||C.forEach(S=>{h[S.label]||(h[S.label]=new Set),h[S.label].add(S.value)})});const p=Object.entries(h).map(([b,C])=>({type:"checkbox",label:b,name:b.toLowerCase(),options:Array.from(C)}));a(p)}catch(g){console.error(g)}})()},[t]);const c=m=>{s(g=>({...g,[m]:!g[m]}))},f=(m,g)=>{r(x=>{const w=x[m]||[];return w.includes(g)?{...x,[m]:w.filter(h=>h!==g)}:{...x,[m]:[...w,g]}})},d=Object.values(n).some(m=>Array.isArray(m)&&m.length>0),v=()=>{d&&r({})};return u.jsxs(vD,{children:[u.jsxs(xD,{children:["Фільтри ",u.jsx(Ow,{size:20})]}),(o||[]).map(m=>{var x;const g=!!l[m.name];return u.jsxs(yD,{children:[u.jsxs(bD,{onClick:()=>c(m.name),children:[u.jsx(wD,{children:m.label}),u.jsx(SD,{isOpen:g})]}),u.jsxs(CD,{isOpen:g,children:[m.type==="checkbox"&&((x=m.options)==null?void 0:x.map(w=>{var h;return u.jsxs(kD,{children:[u.jsx(Up,{checked:((h=n[m.name])==null?void 0:h.includes(w))||!1,onChange:()=>f(m.name,w)}),u.jsx(_D,{}),w]},w)})),m.type==="range"&&u.jsx(X2,{onChange:i,childValues:e})]})]},m.name)}),u.jsx(Y2,{onClick:v,disabled:!d,children:"Скинути обрані фільтри"})]})},zD=k.aside`
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
`;const FD=k.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,ND=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,BD=k.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,VD=k.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,UD=k.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,WD=k.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Hp=k.input.attrs({type:"checkbox"})`
  display: none;
`,HD=k.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Hp}:checked + & {
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

  ${Hp}:checked + &::after {
    opacity: 1;
  }
`,GD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=y.useState({}),[l,s]=y.useState([]);y.useEffect(()=>{t&&(async()=>{try{const g=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],x={};g.forEach(h=>{var p;(p=h.attributes)==null||p.forEach(b=>{x[b.label]||(x[b.label]=new Set),x[b.label].add(b.value)})});const w=Object.entries(x).map(([h,p])=>({type:"checkbox",label:h,name:h.toLowerCase(),options:Array.from(p)}));s(w)}catch(v){console.error(v)}})()},[t]);const c=d=>{a(v=>({...v,[d]:!v[d]}))},f=(d,v)=>{r(m=>{const g=m[d]||[];return g.includes(v)?{...m,[d]:g.filter(x=>x!==v)}:{...m,[d]:[...g,v]}})};return u.jsx(zD,{children:(l||[]).map(d=>{var m;const v=!!o[d.name];return u.jsxs(FD,{children:[u.jsxs(ND,{onClick:()=>c(d.name),children:[u.jsx(BD,{children:d.label}),u.jsx(VD,{isOpen:v})]}),u.jsxs(UD,{isOpen:v,children:[d.type==="checkbox"&&((m=d.options)==null?void 0:m.map(g=>{var x;return u.jsxs(WD,{children:[u.jsx(Hp,{checked:((x=n[d.name])==null?void 0:x.includes(g))||!1,onChange:()=>f(d.name,g)}),u.jsx(HD,{}),g]},g)})),d.type==="range"&&u.jsx(X2,{onChange:i,childValues:e})]})]},d.name)})})},qD=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:c})=>{const[f,d]=y.useState([]),[v,m]=y.useState(!0),[g,x]=y.useState(1),w=24;let h=f;console.log(f);const p=y.useRef(null);y.useEffect(()=>{const j=A=>{p.current&&!p.current.contains(A.target)&&o(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[o]),y.useEffect(()=>{(async()=>{try{m(!0);const L=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();d(L.data);const R=Date.now(),z=7*24*60*60*1e3,T=L.data.filter(F=>{if(F.stock>0||!F.sold_date)return!0;const B=new Date(F.sold_date).getTime();return R-B<z});d(T);const O=L.data.map(F=>F.price);if(O.length>0){let F=Math.min(...O),B=Math.max(...O);e([F,B])}}catch(A){console.error("Error fetching products:",A)}finally{m(!1)}})()},[t,e]),y.useEffect(()=>{x(1)},[t,n,r]),y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[g]);const b=Ke(),C=It(),S=Ue(j=>j.favorites.items),P=Ue(j=>j.cart.items),E=(j,A)=>{A.stopPropagation();const L=S.some(R=>R.id===(j==null?void 0:j.id));di(j,L,C,K)};if(Object.keys(n).forEach(j=>{const A=n[j];Array.isArray(A)&&A.length>0&&(h=h.filter(L=>{var z;const R=(z=L.attributes)==null?void 0:z.find(T=>T.label.toLowerCase()===j.toLowerCase());return R&&A.includes(R.value)}))}),r&&r.length===2){const[j,A]=r;console.log(j,A)}const _=y.useMemo(()=>{const j=[...h],A=L=>L.new_price&&L.new_price<L.price?L.new_price:L.price;switch(i){case"name":return j.sort((L,R)=>s==="asc"?L.name.localeCompare(R.name):R.name.localeCompare(L.name));case"price":return j.sort((L,R)=>{const z=A(L),T=A(R);return s==="asc"?z-T:T-z});case"date":return j.sort((L,R)=>s==="asc"?new Date(L.createdAt)-new Date(R.createdAt):new Date(R.createdAt)-new Date(L.createdAt));default:return j}},[i,h,s]),$=g*w,I=$-w,M=_.slice(I,$),D=Math.ceil(h.length/w);return v?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsxs(G4,{children:[u.jsxs(q4,{children:[u.jsx(Y4,{children:t}),u.jsxs(n$,{ref:p,children:[u.jsxs(r$,{onClick:()=>o(j=>!j),children:["Сортування",u.jsx(Vc,{strokeWidth:.9,size:22})]}),a&&u.jsxs(i$,{children:[u.jsx(yi,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),u.jsx(yi,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),u.jsx(yi,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),u.jsx(yi,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),u.jsx(yi,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),u.jsx(yi,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(Ln,{autoClose:1500}),h.length===0?u.jsx(X4,{children:u.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):u.jsx(K4,{children:M.map(j=>{var G,W;const A=S.some(q=>q.id===j.id),L=j!=null&&j.createdAt?Date.now()-new Date(j.createdAt).getTime()<7*24*60*60*1e3:!1,R=P.find(q=>q.id===j.id),z=(j==null?void 0:j.available)??!0,T=(j==null?void 0:j.stock)===0,O=j.new_price&&j.new_price<j.price,F=O?j.new_price:j.price,B=O?Math.round((j.price-j.new_price)/j.price*100):0,N=j?P.find(q=>q.id===j.id):null,V=(N==null?void 0:N.quantity)||0,H=async(q,oe)=>{if(oe.stopPropagation(),V>=q.stock){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(V+1>q.stock){K.warning(`Доступно лише ${q.stock} шт.`);return}await yo(q,1,C,K)};return u.jsxs(Q4,{onClick:()=>b(`/product/${j.slug??j.id}`),$soldOut:T,style:{cursor:"pointer"},children:[u.jsxs(Nw,{children:[L&&u.jsx(vm,{children:"Новинка"}),!z&&u.jsx(gm,{children:"Бронь"}),T&&u.jsx(qc,{children:"Продано"}),u.jsx(Z4,{src:((W=(G=j.images)==null?void 0:G[0])==null?void 0:W.url)||"/placeholder.jpg",alt:j.name,onError:q=>{q.currentTarget.onerror=null,q.currentTarget.src=er}})]}),u.jsx(e$,{children:j.name}),u.jsxs(J4,{children:[u.jsx(Vw,{children:u.jsxs(Uw,{children:[u.jsxs(Ww,{$discount:O,children:[F.toLocaleString()," грн"]}),O&&u.jsxs(Hw,{children:[j.price.toLocaleString()," грн"]}),O&&u.jsxs(Gw,{children:["-",B,"%"]})]})}),u.jsxs(Bw,{children:[z&&!T&&u.jsx(Yl,{onClick:q=>H(j,q),children:u.jsx(xo,{size:24,color:R?"var(--orange-color)":"black",strokeWidth:2})}),!T&&u.jsx(Yl,{onClick:q=>E(j,q),children:u.jsx(Xa,{size:24,fill:A?"#ff4d4f":"none",color:A?"#ff4d4f":"#000000",strokeWidth:A?1:2})})]})]})]},j.id)})}),h.length>w&&u.jsxs(t$,{children:[u.jsx(jd,{onClick:()=>x(j=>Math.max(j-1,1)),disabled:g===1,children:"Назад"}),Array.from({length:D},(j,A)=>u.jsx(jd,{onClick:()=>x(A+1),active:g===A+1,children:A+1},A)),u.jsx(jd,{onClick:()=>x(j=>Math.min(j+1,D)),disabled:g===D,children:"Вперед"})]})]})},YD=()=>{const[e,t]=y.useState({}),{category:n}=Hx(),[r,i]=y.useState(!1),[o,a]=y.useState(!1),[l,s]=y.useState("date"),[c,f]=y.useState("desc"),[d,v]=y.useState([]),[m,g]=y.useState([0,0]),x=Object.values(e).some(h=>Array.isArray(h)&&h.length>0),w=()=>{x&&t({})};return u.jsxs(oD,{children:[u.jsxs(iD,{children:[u.jsxs(aD,{children:[u.jsxs(sD,{onClick:()=>i(!0),children:["Фільтр",u.jsx(lD,{children:u.jsx("use",{href:`${hn}#icon-filter`})})]}),u.jsxs(mD,{children:[u.jsxs(cD,{onClick:()=>a(h=>!h),children:["Сортування",u.jsx(Vc,{strokeWidth:.9,size:22})]}),o&&u.jsxs(gD,{children:[u.jsx(wi,{onClick:()=>{s("name"),f("asc"),a(!1)},children:"А-Я"}),u.jsx(wi,{onClick:()=>{s("name"),f("desc"),a(!1)},children:"Я-А"}),u.jsx(wi,{onClick:()=>{s("price"),f("asc"),a(!1)},children:"Ціна ↑"}),u.jsx(wi,{onClick:()=>{s("price"),f("desc"),a(!1)},children:"Ціна ↓"}),u.jsx(wi,{onClick:()=>{s("date"),f("desc"),a(!1)},children:"Спочатку новіші"}),u.jsx(wi,{onClick:()=>{s("date"),f("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(RD,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:d,priceRange:m,setPriceRange:g}),u.jsx(qD,{priceRange:m,values:d,setValues:v,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:c,setSortOrder:f}),r&&u.jsx(uD,{onClick:()=>i(!1),open:r,children:u.jsxs(dD,{onClick:h=>h.stopPropagation(),open:r,children:[u.jsxs(fD,{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(Ow,{size:20}),u.jsx("h2",{children:"Фільтри"})]}),u.jsx(Iw,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),u.jsx(GD,{childValues:d,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:m,setPriceRange:g}),u.jsxs(pD,{children:[u.jsx(Y2,{onClick:w,disabled:!x,children:"Скинути обрані фільтри"}),u.jsx(hD,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},n1=k.div`
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
`,XD=k.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,KD=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,QD=k.div``,ZD=k.div`
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
`;k.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const JD=k.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,eL=k.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,tL=k.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,nL=k.div``,rL=k.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,iL=k.p`
   font-size: 17px;
  margin-bottom: 10px;
  color: #151414;
    font-family: var(--second-font);

`,oL=k.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,aL=k.div`
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

`,sL=k.span`
  color: #27ae60;
  font-size: 17px;
`,lL=k.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,cL=k.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,r1=k.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,uL=k.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,dL=k.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,fL=k.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,pL=k.div`
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
`,hL=k.button`
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
`;const i1=k.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,mL=k.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,o1=k.div`
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
`;k.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`;const gL=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,a1=k.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,s1=k.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,Vo=k.button`
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
`,l1=k.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,c1=k.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,vL=k.button`
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
`,xL=k.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,K2=k.span`

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
`,yL=k.div`
  position: relative;
  display: inline-block;

  &:hover ${K2} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,Q2="carousel",Z2="controller",bL="navigation",wL="no-scroll",Vm="portal",SL="root",J2="toolbar",u1="zoom",Xd="loading",Kd="error",Qd="complete",CL="placeholder",kL=e=>`active-slide-${e}`,_L="fullsize",Um="flex_center",EL="no_scroll",eC="no_scroll_padding",Wm="slide",tC="slide_wrapper",PL="slide_wrapper_interactive",Ur="prev",Wr="next",d1="swipe",co="close",nC="onPointerDown",rC="onPointerMove",iC="onPointerUp",oC="onPointerLeave",aC="onPointerCancel",Hm="onKeyDown",TL="onKeyUp",Gm="onWheel",jL="Escape",OL="ArrowLeft",$L="ArrowRight",IL="button",Gp="icon",sC="contain",f1="cover",lC="Unknown action type",cC="yarl__";function $n(...e){return e.filter(Boolean).join(" ")}function se(e){return`${cC}${e}`}function kt(e){return`--${cC}${e}`}function rs(e,t){return`${e}${t?`_${t}`:""}`}function qm(e){return t=>rs(e,t)}function uo(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function ML(e,t,n){return uo(e,"{index} of {total}").replace(/\{index}/g,`${Zm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function Ym(...e){return()=>{e.forEach(t=>{t()})}}function or(e,t,n){return()=>{const r=y.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Xm(){return typeof window<"u"}function Km(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function ko(e){return e.type===void 0||e.type==="image"}function Qm(e,t){return e.imageFit===f1||e.imageFit!==sC&&t===f1}function Tu(e){return typeof e=="string"?Number.parseInt(e,10):e}function cc(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=Tu(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function DL(e,t){const n=cc(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function LL(){return(Xm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Zm(e,t){return t>0?(e%t+t)%t:0}function uC(e){return e.length>0}function dC(e,t){return e[Zm(t,e.length)]}function qp(e,t){return uC(e)?dC(e,t):void 0}function AL(e){return ko(e)?e.src:void 0}function RL(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=y.isValidElement(n)?y.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function zL(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const FL=Number(y.version.split(".")[0])>=19;function NL(e){return{inert:FL?e:e?"":void 0}}function BL(e){e.scrollTop}const Yp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[co]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:sC,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Lr(e,t){return{name:e,component:t}}function Ge(e,t){return{module:e,children:t}}function fC(e,t,n){return e.module.name===t?n(e):e.children?[Ge(e.module,e.children.flatMap(r=>{var i;return(i=fC(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function Si(e,t,n){return e.flatMap(r=>{var i;return(i=fC(r,t,n))!==null&&i!==void 0?i:[]})}function VL(e,t=[],n=[]){let r=e;const i=m=>{const g=[...r];for(;g.length>0;){const x=g.pop();if((x==null?void 0:x.module.name)===m)return!0;x!=null&&x.children&&g.push(...x.children)}return!1},o=(m,g)=>{if(m===""){r=[Ge(g,r)];return}r=Si(r,m,x=>[Ge(g,[x])])},a=(m,g)=>{r=Si(r,m,x=>[Ge(x.module,[Ge(g,x.children)])])},l=(m,g,x)=>{r=Si(r,m,w=>{var h;return[Ge(w.module,[...x?[Ge(g)]:[],...(h=w.children)!==null&&h!==void 0?h:[],...x?[]:[Ge(g)]])]})},s=(m,g,x)=>{r=Si(r,m,w=>[...x?[Ge(g)]:[],w,...x?[]:[Ge(g)]])},c=m=>{a(Z2,m)},f=(m,g)=>{r=Si(r,m,x=>[Ge(g,x.children)])},d=m=>{r=Si(r,m,g=>g.children)},v=m=>{n.push(m)};return t.forEach(m=>{m({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:c,replace:f,remove:d,augment:v})}),{config:r,augmentation:m=>n.reduce((g,x)=>x(g),m)}}const pC=y.createContext(null),hC=or("useA11yContext","A11yContext",pC);function UL({children:e}){const[t,n]=y.useState(!1),[r,i]=y.useState(!1),o=y.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const c=f=>d=>{var v;d.currentTarget.contains(d.relatedTarget)||n(f),(v=f?l:s)===null||v===void 0||v(d)};return{onFocus:c(!0),onBlur:c(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return y.createElement(pC.Provider,{value:o},e)}const mC=y.createContext(null),ju=or("useDocument","DocumentContext",mC);function WL({nodeRef:e,children:t}){const n=y.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return y.createElement(mC.Provider,{value:n},t)}const gC=y.createContext(null),Ou=or("useEvents","EventsContext",gC);function HL({children:e}){const[t]=y.useState({});y.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=y.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(c=>c!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(c=>c(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return y.createElement(gC.Provider,{value:n},e)}const vC=y.createContext(null),en=or("useLightboxProps","LightboxPropsContext",vC);function GL({children:e,...t}){return y.createElement(vC.Provider,{value:t},e)}const xC=y.createContext(null),Ar=or("useLightboxState","LightboxStateContext",xC),yC=y.createContext(null),qL=or("useLightboxDispatch","LightboxDispatchContext",yC);function YL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Zm(i,n.length),a=qp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:qp(t.slides,t.index)}:e;default:throw new Error(lC)}}function XL({slides:e,index:t,children:n}){const[r,i]=y.useReducer(YL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:qp(e,t)}),[o,a]=y.useState(e),[l,s]=y.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const c=y.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return y.createElement(yC.Provider,{value:i},y.createElement(xC.Provider,{value:c},n))}const bC=y.createContext(null),$u=or("useTimeouts","TimeoutsContext",bC);function KL({children:e}){const[t]=y.useState([]);y.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=y.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return y.createElement(bC.Provider,{value:n},e)}const Jm=y.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:c,labels:f}=en(),d=uo(f,t);return y.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:$n(se(IL),n),onClick:o,style:{...a,...c.button},...l},i?i():y.createElement(r,{className:se(Gp),style:c.icon}))});function QL(e,t){const n=r=>y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function pi(e,t){return QL(e,y.createElement("g",{fill:"currentColor"},y.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const ZL=pi("Close",y.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),JL=pi("Previous",y.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),eA=pi("Next",y.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),tA=pi("Loading",y.createElement(y.Fragment,null,Array.from({length:8}).map((e,t,n)=>y.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),nA=pi("Error",y.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),In=Xm()?y.useLayoutEffect:y.useEffect;function eg(){const[e,t]=y.useState(!1);return y.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function rA(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(Tu);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function p1(e,t){const n=y.useRef(void 0),r=y.useRef(void 0),i=eg();return In(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:c,easing:f,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),rA(e.current))||{};if(s&&c){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:c,easing:f})}catch(v){console.error(v)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function wC(){const e=y.useRef(null),t=y.useRef(void 0),[n,r]=y.useState();return{setContainerRef:y.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=c=>parseFloat(c)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function fl(){const e=y.useRef(void 0),{setTimeout:t,clearTimeout:n}=$u();return y.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function me(e){const t=y.useRef(e);return In(()=>{t.current=e}),y.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function h1(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Xp(e,t){return y.useMemo(()=>e==null&&t==null?null:n=>{h1(e,n),h1(t,n)},[e,t])}function iA(e,t=!1){const n=y.useRef(!1);In(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=y.useCallback(()=>{n.current=!0},[]),i=y.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function tg(){const[e,t]=y.useState(!1);return In(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function oA(){const[e]=y.useState({}),t=y.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=y.useMemo(()=>({onPointerDown:i=>t(nC,i),onPointerMove:i=>t(rC,i),onPointerUp:i=>t(iC,i),onPointerLeave:i=>t(oC,i),onPointerCancel:i=>t(aC,i),onKeyDown:i=>t(Hm,i),onKeyUp:i=>t(TL,i),onWheel:i=>t(Gm,i)}),[t]),r=y.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function m1(e,t){const n=y.useRef(0),r=fl(),i=me((...o)=>{n.current=Date.now(),e(o)});return y.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Zd=qm("slide"),Jd=qm("slide_image");function uc({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:c}){var f,d,v,m,g,x,w,h;const[p,b]=y.useState(Xd),{publish:C}=Ou(),{setTimeout:S}=$u(),P=y.useRef(null);y.useEffect(()=>{t===0&&C(kL(p))},[t,p,C]);const E=me(N=>{("decode"in N?N.decode():Promise.resolve()).catch(()=>{}).then(()=>{N.parentNode&&(b(Qd),S(()=>{l==null||l(N)},0))})}),_=y.useCallback(N=>{P.current=N,N!=null&&N.complete&&E(N)},[E]),$=y.useCallback(N=>{E(N.currentTarget)},[E]),I=me(()=>{b(Kd),s==null||s()}),M=Qm(e,i),D=(N,V)=>Number.isFinite(N)?N:V,j=D(Math.max(...((d=(f=e.srcSet)===null||f===void 0?void 0:f.map(N=>N.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((v=P.current)===null||v===void 0?void 0:v.naturalWidth)||0),A=D(Math.max(...((g=(m=e.srcSet)===null||m===void 0?void 0:m.map(N=>N.height))!==null&&g!==void 0?g:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((x=P.current)===null||x===void 0?void 0:x.naturalHeight)||0),L=j&&A?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${A}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},R=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((N,V)=>N.width-V.width).map(N=>`${N.src} ${N.width}w`).join(", "),z=()=>r&&!M&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,T=R&&r&&Xm()?`${Math.round(Math.min(z(),r.width))}px`:void 0,{style:O,className:F,...B}=(typeof o=="function"?o(e):o)||{};return y.createElement(y.Fragment,null,y.createElement("img",{ref:_,onLoad:$,onError:I,onClick:a,draggable:!1,className:$n(se(Jd()),M&&se(Jd("cover")),p!==Qd&&se(Jd("loading")),F),style:{...L,...c,...O},...B,alt:(h=e.alt)!==null&&h!==void 0?h:"",sizes:T,srcSet:R,src:e.src}),p!==Qd&&y.createElement("div",{className:se(Zd(CL))},p===Xd&&(n!=null&&n.iconLoading?n.iconLoading():y.createElement(tA,{className:$n(se(Gp),se(Zd(Xd)))})),p===Kd&&(n!=null&&n.iconError?n.iconError():y.createElement(nA,{className:$n(se(Gp),se(Zd(Kd)))}))))}const aA=y.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=y.useRef(null),{trackFocusWithin:s}=hC();return y.createElement(WL,{nodeRef:l},y.createElement("div",{ref:Xp(a,l),className:$n(se("root"),t),...s(r,i),...o},n))});var lt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(lt||(lt={}));function SC(e,t,n,r,i){y.useEffect(()=>i?()=>{}:Ym(e(nC,t),e(rC,n),e(iC,r),e(oC,r),e(aC,r)),[e,t,n,r,i])}var on;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(on||(on={}));const ef=30;function sA({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,c,f,d,v,m,g,x,w){const h=y.useRef(0),p=y.useRef([]),b=y.useRef(void 0),C=y.useRef(0),S=y.useRef(on.NONE),P=y.useCallback(j=>{b.current===j.pointerId&&(b.current=void 0,S.current=on.NONE);const A=p.current;A.splice(0,A.length,...A.filter(L=>L.pointerId!==j.pointerId))},[]),E=y.useCallback(j=>{P(j),j.persist(),p.current.push(j)},[P]),_=y.useCallback(j=>p.current.find(({pointerId:A})=>j.pointerId===A),[]),$=me(j=>{E(j)}),I=(j,A)=>d&&j>A||f&&j<-A,M=me(j=>{const A=_(j);if(A)if(b.current===j.pointerId){const L=Date.now()-C.current,R=h.current;S.current===on.SWIPE?Math.abs(R)>.3*i||Math.abs(R)>5&&L<o?s(R,L):c(R):S.current===on.PULL&&(I(R,2*ef)?g(R,L):x(R)),h.current=0,S.current=on.NONE}else{const{target:L}=j;t&&L instanceof HTMLElement&&L===A.target&&(L.classList.contains(se(Wm))||L.classList.contains(se(tC)))&&w()}P(j)}),D=me(j=>{const A=_(j);if(A){const L=b.current===j.pointerId;if(j.buttons===0){L&&h.current!==0?M(j):P(A);return}const R=j.clientX-A.clientX,z=j.clientY-A.clientY;if(b.current===void 0){const T=O=>{E(j),b.current=j.pointerId,C.current=Date.now(),S.current=O};Math.abs(R)>Math.abs(z)&&Math.abs(R)>ef&&r(R)?e||(T(on.SWIPE),a()):Math.abs(z)>Math.abs(R)&&I(z,ef)&&(T(on.PULL),v())}else L&&(S.current===on.SWIPE?(h.current=R,l(R)):S.current===on.PULL&&(h.current=z,m(z)))}});SC(n,$,D,M)}function lA({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=y.useRef(null),r=me(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return y.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function cA(e,t,n,r,i,o,a,l,s){const c=y.useRef(0),f=y.useRef(0),d=y.useRef(void 0),v=y.useRef(void 0),m=y.useRef(0),g=y.useRef(void 0),x=y.useRef(0),{setTimeout:w,clearTimeout:h}=$u(),p=y.useCallback(()=>{d.current&&(h(d.current),d.current=void 0)},[h]),b=y.useCallback(()=>{v.current&&(h(v.current),v.current=void 0)},[h]),C=me(()=>{e!==lt.SWIPE&&(c.current=0,x.current=0,p(),b())});y.useEffect(C,[e,C]);const S=me(E=>{v.current=void 0,c.current===E&&s(c.current)}),P=me(E=>{if(E.ctrlKey||Math.abs(E.deltaY)>Math.abs(E.deltaX))return;const _=$=>{m.current=$,h(g.current),g.current=$>0?w(()=>{m.current=0,g.current=void 0},300):void 0};if(e===lt.NONE){if(Math.abs(E.deltaX)<=1.2*Math.abs(m.current)){_(E.deltaX);return}if(!n(-E.deltaX))return;if(f.current+=E.deltaX,p(),Math.abs(f.current)>30)f.current=0,_(0),x.current=Date.now(),o();else{const $=f.current;d.current=w(()=>{d.current=void 0,$===f.current&&(f.current=0)},i)}}else if(e===lt.SWIPE){let $=c.current-E.deltaX;if($=Math.min(Math.abs($),r)*Math.sign($),c.current=$,a($),b(),Math.abs($)>.2*r){_(E.deltaX),l($,Date.now()-x.current);return}v.current=w(()=>S($),2*i)}else _(E.deltaX)});y.useEffect(()=>t(Gm,P),[t,P])}const g1=qm("container"),CC=y.createContext(null),ar=or("useController","ControllerContext",CC);function uA({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:c,closeOnPullDown:f,preventDefaultWheelX:d,preventDefaultWheelY:v}=o,[m,g]=y.useState(),x=Ar(),w=qL(),[h,p]=y.useState(lt.NONE),b=y.useRef(0),C=y.useRef(0),S=y.useRef(1),{registerSensors:P,subscribeSensors:E}=oA(),{subscribe:_,publish:$}=Ou(),I=fl(),M=fl(),D=fl(),{containerRef:j,setContainerRef:A,containerRect:L}=wC(),R=Xp(lA({preventDefaultWheelX:d,preventDefaultWheelY:v}),A),z=y.useRef(null),T=Xp(z,void 0),{getOwnerDocument:O}=ju(),F=tg(),B=X=>(F?-1:1)*(typeof X=="number"?X:1),N=me(()=>{var X;return(X=j.current)===null||X===void 0?void 0:X.focus()}),V=me(()=>t),H=me(()=>x),G=y.useCallback(X=>$(Ur,X),[$]),W=y.useCallback(X=>$(Wr,X),[$]),q=y.useCallback(()=>$(co),[$]),oe=X=>!(r.finite&&(B(X)>0&&x.currentIndex===0||B(X)<0&&x.currentIndex===x.slides.length-1)),he=X=>{var Se;b.current=X,(Se=j.current)===null||Se===void 0||Se.style.setProperty(kt("swipe_offset"),`${Math.round(X)}px`)},ie=X=>{var Se,ft;C.current=X,S.current=(()=>{const Po=(()=>f&&X>0?X:c&&X<0?-X:0)();return Math.min(Math.max(Km(1-Po/60*(1-.5),2),.5),1)})(),(Se=j.current)===null||Se===void 0||Se.style.setProperty(kt("pull_offset"),`${Math.round(X)}px`),(ft=j.current)===null||ft===void 0||ft.style.setProperty(kt("pull_opacity"),`${S.current}`)},{prepareAnimation:De}=p1(z,(X,Se,ft)=>{if(z.current&&L)return{keyframes:[{transform:`translate(0, ${X.rect.y-Se.y+ft.y}px)`,opacity:X.opacity},{transform:"translate(0, 0)",opacity:1}],duration:X.duration,easing:i.easing.fade}}),We=(X,Se)=>{if(c||f){ie(X);let ft=0;z.current&&(ft=i.fade*(Se?2:1),De({rect:z.current.getBoundingClientRect(),opacity:S.current,duration:ft})),D(()=>{ie(0),p(lt.NONE)},ft),p(lt.ANIMATION),Se||q()}},{prepareAnimation:He,isAnimationPlaying:hi}=p1(z,(X,Se,ft)=>{var xn;if(z.current&&L&&(!((xn=x.animation)===null||xn===void 0)&&xn.duration)){const Gt=cc(r.spacing),Po=(Gt.percent?Gt.percent*L.width/100:Gt.pixel)||0;return{keyframes:[{transform:`translate(${B(x.globalIndex-X.index)*(L.width+Po)+X.rect.x-Se.x+ft.x}px, 0)`},{transform:"translate(0, 0)"}],duration:x.animation.duration,easing:x.animation.easing}}}),St=me(X=>{var Se,ft;const xn=X.offset||0,Gt=xn?i.swipe:(Se=i.navigation)!==null&&Se!==void 0?Se:i.swipe,Po=!xn&&!hi()?i.easing.navigation:i.easing.swipe;let{direction:os}=X;const as=(ft=X.count)!==null&&ft!==void 0?ft:1;let Uu=lt.ANIMATION,yn=Gt*as;if(!os){const To=L==null?void 0:L.width,vg=X.duration||0,Hu=To?Gt/To*Math.abs(xn):Gt;as!==0?(vg<Hu?yn=yn/Hu*Math.max(vg,Hu/5):To&&(yn=Gt/To*(To-Math.abs(xn))),os=B(xn)>0?Ur:Wr):yn=Gt/2}let Wu=0;os===Ur?oe(B(1))?Wu=-as:(Uu=lt.NONE,yn=Gt):os===Wr&&(oe(B(-1))?Wu=as:(Uu=lt.NONE,yn=Gt)),yn=Math.round(yn),M(()=>{he(0),p(lt.NONE)},yn),z.current&&He({rect:z.current.getBoundingClientRect(),index:x.globalIndex}),p(Uu),$(d1,{type:"swipe",increment:Wu,duration:yn,easing:Po})});y.useEffect(()=>{var X,Se;!((X=x.animation)===null||X===void 0)&&X.increment&&(!((Se=x.animation)===null||Se===void 0)&&Se.duration)&&I(()=>w({type:"swipe",increment:0}),x.animation.duration)},[x.animation,w,I]);const _o=[E,oe,(L==null?void 0:L.width)||0,i.swipe,()=>p(lt.SWIPE),X=>he(X),(X,Se)=>St({offset:X,duration:Se,count:1}),X=>St({offset:X,count:0})],is=[()=>{f&&p(lt.PULL)},X=>ie(X),X=>We(X),X=>We(X,!0)];sA(o,..._o,c,f,...is,q),cA(h,..._o);const Eo=me(()=>{o.focus&&O().querySelector(`.${se(Vm)} .${se(g1())}`)&&N()});y.useEffect(Eo,[Eo]);const gg=me(()=>{var X;(X=a.view)===null||X===void 0||X.call(a,{index:x.currentIndex})});y.useEffect(gg,[x.globalIndex,gg]),y.useEffect(()=>Ym(_(Ur,X=>St({direction:Ur,...X})),_(Wr,X=>St({direction:Wr,...X})),_(d1,X=>w(X))),[_,St,w]);const $k=y.useMemo(()=>({prev:G,next:W,close:q,focus:N,slideRect:L?DL(L,r.padding):{width:0,height:0},containerRect:L||{width:0,height:0},subscribeSensors:E,containerRef:j,setCarouselRef:T,toolbarWidth:m,setToolbarWidth:g}),[G,W,q,N,E,L,j,T,m,g,r.padding]);return y.useImperativeHandle(o.ref,()=>({prev:G,next:W,close:q,focus:N,getLightboxProps:V,getLightboxState:H}),[G,W,q,N,V,H]),y.createElement("div",{ref:R,className:$n(se(g1()),se(Um)),style:{...h===lt.SWIPE?{[kt("swipe_offset")]:`${Math.round(b.current)}px`}:null,...h===lt.PULL?{[kt("pull_offset")]:`${Math.round(C.current)}px`,[kt("pull_opacity")]:`${S.current}`}:null,...o.touchAction!=="none"?{[kt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...P},L&&y.createElement(CC.Provider,{value:$k},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const dA=Lr(Z2,uA);function Rr(e){return rs(Q2,e)}function v1(e){return rs(Wm,e)}function fA({slide:e,offset:t}){const n=y.useRef(null),{currentIndex:r,slides:i}=Ar(),{slideRect:o,focus:a}=ar(),{render:l,carousel:{imageFit:s,imageProps:c},on:{click:f},styles:{slide:d},labels:v}=en(),{getOwnerDocument:m}=ju(),g=t!==0;y.useEffect(()=>{var w;g&&(!((w=n.current)===null||w===void 0)&&w.contains(m().activeElement))&&a()},[g,a,m]);const x=()=>{var w,h,p,b;let C=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!C&&ko(e)&&(C=y.createElement(uc,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:c,onClick:g?void 0:()=>f==null?void 0:f({index:r})})),C?y.createElement(y.Fragment,null,(h=l.slideHeader)===null||h===void 0?void 0:h.call(l,{slide:e}),((p=l.slideContainer)!==null&&p!==void 0?p:({children:S})=>S)({slide:e,children:C}),(b=l.slideFooter)===null||b===void 0?void 0:b.call(l,{slide:e})):null};return y.createElement("div",{ref:n,className:$n(se(v1()),!g&&se(v1("current")),se(Um)),...NL(g),style:d,role:"group","aria-roledescription":uo(v,"Slide"),"aria-label":ML(v,i,r+t)},x())}function pA(){const e=en().styles.slide;return y.createElement("div",{className:se(Wm),style:e})}function hA({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Ar(),{setCarouselRef:o}=ar(),{autoPlaying:a,focusWithin:l}=hC(),s=cc(e.spacing),c=cc(e.padding),f=zL(e,n,1),d=[];if(uC(n))for(let v=r-f;v<=r+f;v+=1){const m=dC(n,v),g=i-r+v,x=e.finite&&(v<0||v>n.length-1);d.push(x?{key:g}:{key:[`${g}`,AL(m)].filter(Boolean).join("|"),offset:v-r,slide:m})}return y.createElement("div",{ref:o,className:$n(se(Rr()),d.length>0&&se(Rr("with_slides"))),style:{[`${kt(Rr("slides_count"))}`]:d.length,[`${kt(Rr("spacing_px"))}`]:s.pixel||0,[`${kt(Rr("spacing_percent"))}`]:s.percent||0,[`${kt(Rr("padding_px"))}`]:c.pixel||0,[`${kt(Rr("padding_percent"))}`]:c.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":uo(t,"Carousel"),"aria-label":uo(t,"Photo gallery")},d.map(({key:v,slide:m,offset:g})=>m?y.createElement(fA,{key:v,slide:m,offset:g}):y.createElement(pA,{key:v})))}const mA=Lr(Q2,hA);function kC(){const{carousel:e}=en(),{slides:t,currentIndex:n}=Ar(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function gA(e){var t;const n=tg(),{publish:r}=Ou(),{animation:i}=en(),{prevDisabled:o,nextDisabled:a}=kC(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=m1(()=>r(Ur),l),c=m1(()=>r(Wr),l),f=me(d=>{switch(d.key){case jL:r(co);break;case OL:(n?a:o)||(n?c:s)();break;case $L:(n?o:a)||(n?s:c)();break}});y.useEffect(()=>e(Hm,f),[e,f])}function x1({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return y.createElement(Jm,{label:e,icon:t,renderIcon:n,className:se(`navigation_${r}`),disabled:o,onClick:i,style:a,...iA(ar().focus,o)})}function vA({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=ar(),{prevDisabled:s,nextDisabled:c}=kC();return gA(l),y.createElement(y.Fragment,null,e?e():y.createElement(x1,{label:"Previous",action:Ur,icon:JL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():y.createElement(x1,{label:"Next",action:Wr,icon:eA,renderIcon:r,style:i.navigationNext,disabled:c,onClick:a}))}const xA=Lr(bL,vA),y1=se(EL),yA=se(eC);function bA(e){return"style"in e}function b1(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(Tu(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function wA({noScroll:{disabled:e},children:t}){const n=tg(),{getOwnerDocument:r,getOwnerWindow:i}=ju();return y.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),c=Math.round(a.innerWidth-s.clientWidth);if(c>0){o.push(b1(l,c,n));const f=l.getElementsByTagName("*");for(let d=0;d<f.length;d+=1){const v=f[d];bA(v)&&a.getComputedStyle(v).getPropertyValue("position")==="fixed"&&!v.classList.contains(yA)&&o.push(b1(v,c,n))}}return l.classList.add(y1),()=>{l.classList.remove(y1),o.forEach(f=>f())}},[n,e,r,i]),y.createElement(y.Fragment,null,t)}const SA=Lr(wL,wA);function w1(e){return rs(Vm,e)}function S1(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function CA({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,c]=y.useState(!1),[f,d]=y.useState(!1),v=y.useRef([]),m=y.useRef(null),{setTimeout:g}=$u(),{subscribe:x}=Ou(),h=eg()?0:t.fade;y.useEffect(()=>(c(!0),()=>{c(!1),d(!1)}),[]);const p=me(()=>{v.current.forEach(P=>P()),v.current=[]}),b=me(()=>{var P;d(!1),p(),(P=i.exiting)===null||P===void 0||P.call(i),g(()=>{var E;(E=i.exited)===null||E===void 0||E.call(i),a()},h)});y.useEffect(()=>x(co,b),[x,b]);const C=me(P=>{var E,_,$;BL(P),d(!0),(E=i.entering)===null||E===void 0||E.call(i);const I=($=(_=P.parentNode)===null||_===void 0?void 0:_.children)!==null&&$!==void 0?$:[];for(let M=0;M<I.length;M+=1){const D=I[M];["TEMPLATE","SCRIPT","STYLE"].indexOf(D.tagName)===-1&&D!==P&&(v.current.push(S1(D,"inert","")),v.current.push(S1(D,"aria-hidden","true")))}v.current.push(()=>{var M,D;(D=(M=m.current)===null||M===void 0?void 0:M.focus)===null||D===void 0||D.call(M)}),g(()=>{var M;(M=i.entered)===null||M===void 0||M.call(i)},h)}),S=y.useCallback(P=>{P?C(P):p()},[C,p]);return s?Ac.createPortal(y.createElement(aA,{ref:S,className:$n(r,se(w1()),se(eC),f&&se(w1("open"))),"aria-modal":!0,role:"dialog","aria-label":uo(l,"Lightbox"),style:{...t.fade!==Yp.animation.fade?{[kt("fade_animation_duration")]:`${h}ms`}:null,...t.easing.fade!==Yp.animation.easing.fade?{[kt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:P=>{m.current||(m.current=P.relatedTarget)}},e),o.root||document.body):null}const kA=Lr(Vm,CA);function _A({children:e}){return y.createElement(y.Fragment,null,e)}const EA=Lr(SL,_A);function PA(e){return rs(J2,e)}function TA({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=ar(),{setContainerRef:a,containerRect:l}=wC();In(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():y.createElement(Jm,{key:co,label:"Close",icon:ZL,renderIcon:n,onClick:i});return y.createElement("div",{ref:a,style:r.toolbar,className:se(PA())},e==null?void 0:e.map(c=>c===co?s():c))}const jA=Lr(J2,TA);function _C(e,t){var n;return y.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>_C(r,t)))}function OA(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function $A({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:c,...f}){const{animation:d,carousel:v,render:m,toolbar:g,controller:x,noScroll:w,on:h,slides:p,index:b,plugins:C,...S}=Yp,{config:P,augmentation:E}=VL([Ge(kA,[Ge(SA,[Ge(dA,[Ge(mA),Ge(jA),Ge(xA)])])])],l||C),_=E({animation:OA(d,t),carousel:{...v,...e},render:{...m,...n},toolbar:{...g,...r},controller:{...x,...i},noScroll:{...w,...o},on:{...h,...a},...S,...f});return _.open?y.createElement(GL,{..._},y.createElement(XL,{slides:s||p,index:Tu(c||b)},y.createElement(KL,null,y.createElement(HL,null,y.createElement(UL,null,_C(Ge(EA,P),_)))))):null}const IA={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function MA(e){return Math.min(Math.max(e,Number.EPSILON),1)}function EC(e){const{minZoom:t,...n}={...IA,...e};return{minZoom:MA(t),...n}}function DA(e,t,n,r){const i=y.useRef(void 0),o=y.useRef(void 0),{zoom:a}=en().animation,l=eg(),s=me(()=>{var c,f,d;if((c=i.current)===null||c===void 0||c.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(f=r.current).animate)===null||d===void 0?void 0:d.call(f,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(v){console.error(v)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return In(s,[e,t,n,s]),y.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function LA(e,t){const{on:n}=en(),r=me(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});y.useEffect(r,[e,r])}function Iu(){const{zoom:e}=en();return EC(e)}function AA(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Ar(),{imageFit:l}=en().carousel,{maxZoomPixelRatio:s}=Iu();if(e&&a){const f={...a,...t};if(ko(f)){const d=Qm(f,l),v=Math.max(...(((n=f.srcSet)===null||n===void 0?void 0:n.map(g=>g.width))||[]).concat(f.width?[f.width]:[])),m=Math.max(...(((r=f.srcSet)===null||r===void 0?void 0:r.map(g=>g.height))||[]).concat(f.height?[f.height]:[]));v>0&&m>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(v,e.width/e.height*m)),height:Math.round(Math.min(m,e.height/e.width*v))}:{width:v,height:m},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,v),height:Math.min(e.height,o.height,m)}:{width:Math.round(Math.min(e.width,e.height/m*v,v)),height:Math.round(Math.min(e.height,e.width/v*m,m))})}}const c=i.width?Math.max(Km(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:c}}function C1(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function k1(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function RA(e,t,n,r,i,o,a,l,s){const c=y.useRef([]),f=y.useRef(0),d=y.useRef(void 0),{globalIndex:v}=Ar(),{getOwnerWindow:m}=ju(),{containerRef:g,subscribeSensors:x}=ar(),{keyboardMoveDistance:w,zoomInMultiplier:h,wheelZoomDistanceFactor:p,scrollToZoom:b,doubleTapDelay:C,doubleClickDelay:S,doubleClickMaxStops:P,pinchZoomDistanceFactor:E,pinchZoomV4:_}=Iu(),$=y.useCallback(T=>{if(g.current){const{pageX:O,pageY:F}=T,{scrollX:B,scrollY:N}=m(),{left:V,top:H,width:G,height:W}=g.current.getBoundingClientRect();return[O-V-B-G/2,F-H-N-W/2]}return[]},[g,m]),I=me(T=>{const{key:O,metaKey:F,ctrlKey:B}=T,N=F||B,V=()=>{T.preventDefault(),T.stopPropagation()};if(e>1){const H=(G,W)=>{V(),l(G,W)};O==="ArrowDown"?H(0,w):O==="ArrowUp"?H(0,-w):O==="ArrowLeft"?H(-w,0):O==="ArrowRight"&&H(w,0)}O==="+"||N&&O==="="?(V(),i()):O==="-"||N&&O==="_"?(V(),o()):N&&O==="0"&&(V(),a(1))}),M=me(T=>{if((T.ctrlKey||b)&&Math.abs(T.deltaY)>Math.abs(T.deltaX)){T.stopPropagation(),a(k1(e,-T.deltaY,p),!0,...$(T));return}e>1&&(T.stopPropagation(),b||l(T.deltaX,T.deltaY))}),D=y.useCallback(T=>{const O=c.current;O.splice(0,O.length,...O.filter(F=>F.pointerId!==T.pointerId))},[]),j=y.useCallback(T=>{D(T),T.persist(),c.current.push(T)},[D]),A=me(T=>{var O;const F=c.current;if(T.pointerType==="mouse"&&T.buttons>1||!(!((O=s==null?void 0:s.current)===null||O===void 0)&&O.contains(T.target)))return;e>1&&T.stopPropagation();const{timeStamp:B}=T;if(F.length===0&&B-f.current<(T.pointerType==="touch"?C:S)){f.current=0;const N=e>=1?e!==n?e*Math.max(n**(1/P),h):1:e!==t?e/Math.max(t**(-1/P),h):1;a(N,!1,...$(T))}else f.current=B;if(j(T),F.length===2){const N=C1(F[0],F[1]);d.current={previousDistance:N,initialDistance:Math.max(N,1),initialZoom:e}}}),L=me(T=>{const O=c.current,F=O.find(B=>B.pointerId===T.pointerId);if(O.length===2&&d.current){T.stopPropagation(),j(T);const B=C1(O[0],O[1]),N=_?d.current.initialZoom/d.current.initialDistance*B:k1(e,B-d.current.previousDistance,E);a(N,!0,...O.map(V=>$(V)).reduce((V,H)=>H.map((G,W)=>V[W]+G/2))),d.current.previousDistance=B;return}e>1&&(T.stopPropagation(),F&&(O.length===1&&l((F.clientX-T.clientX)/e,(F.clientY-T.clientY)/e),j(T)))}),R=y.useCallback(T=>{const O=c.current;O.length===2&&O.find(F=>F.pointerId===T.pointerId)&&(d.current=void 0),D(T)},[D]),z=y.useCallback(()=>{const T=c.current;T.splice(0,T.length),f.current=0,d.current=void 0},[]);SC(x,A,L,R,r),y.useEffect(z,[v,z]),y.useEffect(()=>r?()=>{}:Ym(z,x(Hm,I),x(Gm,M)),[r,x,z,I,M])}function zA(e,t,n){const[r,i]=y.useState(1),[o,a]=y.useState(0),[l,s]=y.useState(0),c=DA(r,o,l,n),{currentSlide:f,globalIndex:d}=Ar(),{containerRect:v,slideRect:m}=ar(),{minZoom:g,zoomInMultiplier:x}=Iu(),w=f&&ko(f)?f.src:void 0,h=!w||!(n!=null&&n.current);In(()=>{i(1),a(0),s(0)},[d,w]);const p=y.useCallback((E,_,$)=>{const I=$||r,M=o-(E||0),D=l-(_||0),j=(e.width*I-m.width)/2/I,A=(e.height*I-m.height)/2/I;a(Math.min(Math.abs(M),Math.max(j,0))*Math.sign(M)),s(Math.min(Math.abs(D),Math.max(A,0))*Math.sign(D))},[r,o,l,m,e.width,e.height]),b=y.useCallback((E,_,$,I)=>{const M=Km(E+.01<t?E-.01>g?E:g:t,5);_||c(),p($?$*(1/r-1/M):0,I?I*(1/r-1/M):0,M),i(M)},[r,g,t,p,c]),C=me(()=>{r>1&&(r>t&&b(t,!0),p())});In(C,[v.width,v.height,C]);const S=y.useCallback(()=>{const E=r*x;b(r<1&&E>1?1:E)},[r,x,b]),P=y.useCallback(()=>{const E=r/x;b(r>1&&E<1?1:E)},[r,x,b]);return{zoom:r,offsetX:o,offsetY:l,disabled:h,changeOffsets:p,changeZoom:b,zoomIn:S,zoomOut:P}}const PC=y.createContext(null),ng=or("useZoom","ZoomControllerContext",PC);function FA({children:e}){const[t,n]=y.useState(),{slideRect:r}=ar(),{ref:i,minZoom:o}=Iu(),{imageRect:a,maxZoom:l}=AA(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:c,offsetY:f,disabled:d,changeZoom:v,changeOffsets:m,zoomIn:g,zoomOut:x}=zA(a,l,t==null?void 0:t.zoomWrapperRef);LA(s,d),RA(s,o,l,d,g,x,v,m,t==null?void 0:t.zoomWrapperRef);const w=y.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:c,offsetY:f,disabled:d,zoomIn:g,zoomOut:x,changeZoom:v}),[s,o,l,c,f,d,g,x,v]);y.useImperativeHandle(i,()=>w,[w]);const h=y.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return y.createElement(PC.Provider,{value:h},e)}const NA=pi("ZoomIn",y.createElement(y.Fragment,null,y.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),y.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),BA=pi("ZoomOut",y.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),_1=y.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=y.useRef(!1),o=y.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:c,zoomOut:f,disabled:d}=ng(),{render:v}=en(),m=d||(t?a>=s:a<=l);return y.useEffect(()=>{m&&i.current&&o.current&&n(),m||(i.current=!0)},[m,n]),y.createElement(Jm,{ref:r,disabled:m,label:t?"Zoom in":"Zoom out",icon:t?NA:BA,renderIcon:t?v.iconZoomIn:v.iconZoomOut,onClick:t?c:f,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function VA(){const e=y.useRef(null),t=y.useRef(null),{focus:n}=ar(),r=y.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=y.useCallback(()=>r(e),[r]),o=y.useCallback(()=>r(t),[r]);return y.createElement(y.Fragment,null,y.createElement(_1,{zoomIn:!0,ref:e,onLoseFocus:o}),y.createElement(_1,{ref:t,onLoseFocus:i}))}function UA(){const{render:e}=en(),t=ng();return e.buttonZoom?y.createElement(y.Fragment,null,e.buttonZoom(t)):y.createElement(VA,null)}function WA(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function HA({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(lC)}}function GA(e){var t,n;const[{current:r,preload:i},o]=y.useReducer(HA,{}),{slide:a,rect:l,imageFit:s,render:c,interactive:f}=e,d=a.srcSet.sort((S,P)=>S.width-P.width),v=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,m=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,g=Qm(a,s),x=Math.max(...d.map(S=>S.width)),w=Math.min((g?Math.max:Math.min)(l.width,v*(l.height/m)),x),h=LL(),p=me(()=>{var S;const P=(S=d.find(E=>E.width>=w*h))!==null&&S!==void 0?S:d[d.length-1];(!r||d.findIndex(E=>E.src===r)<d.findIndex(E=>E===P))&&o({type:"fetch",source:P.src})});In(p,[l.width,l.height,h,p]);const b=me(S=>o({type:"done",source:S})),C={WebkitTransform:f?"initial":"translateZ(0)"};return g||Object.assign(C,l.width/l.height<v/m?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),y.createElement(y.Fragment,null,i&&i!==r&&y.createElement(uc,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...C},onLoad:()=>b(i),render:{...c,iconLoading:()=>null,iconError:()=>null}}),r&&y.createElement(uc,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:C}))}function qA({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=y.useState(),l=y.useRef(null),{zoom:s,maxZoom:c,offsetX:f,offsetY:d,setZoomWrapper:v}=ng(),m=s>1,{carousel:g,on:x}=en(),{currentIndex:w}=Ar();In(()=>n===0?(v({zoomWrapperRef:l,imageDimensions:o}),()=>v(void 0)):()=>{},[n,o,v]);let h=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:c});if(!h&&ko(t)){const p={slide:t,offset:n,rect:r,render:e,imageFit:g.imageFit,imageProps:g.imageProps,onClick:n===0?()=>{var b;return(b=x.click)===null||b===void 0?void 0:b.call(x,{index:w})}:void 0};h=WA(t)?y.createElement(GA,{...p,slide:t,interactive:m,rect:n===0?{width:r.width*s,height:r.height*s}:r}):y.createElement(uc,{onLoad:b=>a({width:b.naturalWidth,height:b.naturalHeight}),...p})}return h?y.createElement("div",{ref:l,className:$n(se(_L),se(Um),se(tC),m&&se(PL)),style:n===0?{transform:`scale(${s}) translateX(${f}px) translateY(${d}px)`}:void 0},h):null}const YA=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=EC(n);return{zoom:l,toolbar:RL(r,u1,y.createElement(UA,null)),render:{...i,slide:s=>{var c;return ko(s.slide)?y.createElement(qA,{render:i,...s}):(c=i.slide)===null||c===void 0?void 0:c.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Lr(u1,FA))};var TC={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",c="day",f="week",d="month",v="quarter",m="year",g="date",x="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(A){var L=["th","st","nd","rd"],R=A%100;return"["+A+(L[(R-20)%10]||L[R]||L[0])+"]"}},b=function(A,L,R){var z=String(A);return!z||z.length>=L?A:""+Array(L+1-z.length).join(R)+A},C={s:b,z:function(A){var L=-A.utcOffset(),R=Math.abs(L),z=Math.floor(R/60),T=R%60;return(L<=0?"+":"-")+b(z,2,"0")+":"+b(T,2,"0")},m:function A(L,R){if(L.date()<R.date())return-A(R,L);var z=12*(R.year()-L.year())+(R.month()-L.month()),T=L.clone().add(z,d),O=R-T<0,F=L.clone().add(z+(O?-1:1),d);return+(-(z+(R-T)/(O?T-F:F-T))||0)},a:function(A){return A<0?Math.ceil(A)||0:Math.floor(A)},p:function(A){return{M:d,y:m,w:f,d:c,D:g,h:s,m:l,s:a,ms:o,Q:v}[A]||String(A||"").toLowerCase().replace(/s$/,"")},u:function(A){return A===void 0}},S="en",P={};P[S]=p;var E="$isDayjsObject",_=function(A){return A instanceof D||!(!A||!A[E])},$=function A(L,R,z){var T;if(!L)return S;if(typeof L=="string"){var O=L.toLowerCase();P[O]&&(T=O),R&&(P[O]=R,T=O);var F=L.split("-");if(!T&&F.length>1)return A(F[0])}else{var B=L.name;P[B]=L,T=B}return!z&&T&&(S=T),T||!z&&S},I=function(A,L){if(_(A))return A.clone();var R=typeof L=="object"?L:{};return R.date=A,R.args=arguments,new D(R)},M=C;M.l=$,M.i=_,M.w=function(A,L){return I(A,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var D=function(){function A(R){this.$L=$(R.locale,null,!0),this.parse(R),this.$x=this.$x||R.x||{},this[E]=!0}var L=A.prototype;return L.parse=function(R){this.$d=function(z){var T=z.date,O=z.utc;if(T===null)return new Date(NaN);if(M.u(T))return new Date;if(T instanceof Date)return new Date(T);if(typeof T=="string"&&!/Z$/i.test(T)){var F=T.match(w);if(F){var B=F[2]-1||0,N=(F[7]||"0").substring(0,3);return O?new Date(Date.UTC(F[1],B,F[3]||1,F[4]||0,F[5]||0,F[6]||0,N)):new Date(F[1],B,F[3]||1,F[4]||0,F[5]||0,F[6]||0,N)}}return new Date(T)}(R),this.init()},L.init=function(){var R=this.$d;this.$y=R.getFullYear(),this.$M=R.getMonth(),this.$D=R.getDate(),this.$W=R.getDay(),this.$H=R.getHours(),this.$m=R.getMinutes(),this.$s=R.getSeconds(),this.$ms=R.getMilliseconds()},L.$utils=function(){return M},L.isValid=function(){return this.$d.toString()!==x},L.isSame=function(R,z){var T=I(R);return this.startOf(z)<=T&&T<=this.endOf(z)},L.isAfter=function(R,z){return I(R)<this.startOf(z)},L.isBefore=function(R,z){return this.endOf(z)<I(R)},L.$g=function(R,z,T){return M.u(R)?this[z]:this.set(T,R)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(R,z){var T=this,O=!!M.u(z)||z,F=M.p(R),B=function(he,ie){var De=M.w(T.$u?Date.UTC(T.$y,ie,he):new Date(T.$y,ie,he),T);return O?De:De.endOf(c)},N=function(he,ie){return M.w(T.toDate()[he].apply(T.toDate("s"),(O?[0,0,0,0]:[23,59,59,999]).slice(ie)),T)},V=this.$W,H=this.$M,G=this.$D,W="set"+(this.$u?"UTC":"");switch(F){case m:return O?B(1,0):B(31,11);case d:return O?B(1,H):B(0,H+1);case f:var q=this.$locale().weekStart||0,oe=(V<q?V+7:V)-q;return B(O?G-oe:G+(6-oe),H);case c:case g:return N(W+"Hours",0);case s:return N(W+"Minutes",1);case l:return N(W+"Seconds",2);case a:return N(W+"Milliseconds",3);default:return this.clone()}},L.endOf=function(R){return this.startOf(R,!1)},L.$set=function(R,z){var T,O=M.p(R),F="set"+(this.$u?"UTC":""),B=(T={},T[c]=F+"Date",T[g]=F+"Date",T[d]=F+"Month",T[m]=F+"FullYear",T[s]=F+"Hours",T[l]=F+"Minutes",T[a]=F+"Seconds",T[o]=F+"Milliseconds",T)[O],N=O===c?this.$D+(z-this.$W):z;if(O===d||O===m){var V=this.clone().set(g,1);V.$d[B](N),V.init(),this.$d=V.set(g,Math.min(this.$D,V.daysInMonth())).$d}else B&&this.$d[B](N);return this.init(),this},L.set=function(R,z){return this.clone().$set(R,z)},L.get=function(R){return this[M.p(R)]()},L.add=function(R,z){var T,O=this;R=Number(R);var F=M.p(z),B=function(H){var G=I(O);return M.w(G.date(G.date()+Math.round(H*R)),O)};if(F===d)return this.set(d,this.$M+R);if(F===m)return this.set(m,this.$y+R);if(F===c)return B(1);if(F===f)return B(7);var N=(T={},T[l]=r,T[s]=i,T[a]=n,T)[F]||1,V=this.$d.getTime()+R*N;return M.w(V,this)},L.subtract=function(R,z){return this.add(-1*R,z)},L.format=function(R){var z=this,T=this.$locale();if(!this.isValid())return T.invalidDate||x;var O=R||"YYYY-MM-DDTHH:mm:ssZ",F=M.z(this),B=this.$H,N=this.$m,V=this.$M,H=T.weekdays,G=T.months,W=T.meridiem,q=function(ie,De,We,He){return ie&&(ie[De]||ie(z,O))||We[De].slice(0,He)},oe=function(ie){return M.s(B%12||12,ie,"0")},he=W||function(ie,De,We){var He=ie<12?"AM":"PM";return We?He.toLowerCase():He};return O.replace(h,function(ie,De){return De||function(We){switch(We){case"YY":return String(z.$y).slice(-2);case"YYYY":return M.s(z.$y,4,"0");case"M":return V+1;case"MM":return M.s(V+1,2,"0");case"MMM":return q(T.monthsShort,V,G,3);case"MMMM":return q(G,V);case"D":return z.$D;case"DD":return M.s(z.$D,2,"0");case"d":return String(z.$W);case"dd":return q(T.weekdaysMin,z.$W,H,2);case"ddd":return q(T.weekdaysShort,z.$W,H,3);case"dddd":return H[z.$W];case"H":return String(B);case"HH":return M.s(B,2,"0");case"h":return oe(1);case"hh":return oe(2);case"a":return he(B,N,!0);case"A":return he(B,N,!1);case"m":return String(N);case"mm":return M.s(N,2,"0");case"s":return String(z.$s);case"ss":return M.s(z.$s,2,"0");case"SSS":return M.s(z.$ms,3,"0");case"Z":return F}return null}(ie)||F.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(R,z,T){var O,F=this,B=M.p(z),N=I(R),V=(N.utcOffset()-this.utcOffset())*r,H=this-N,G=function(){return M.m(F,N)};switch(B){case m:O=G()/12;break;case d:O=G();break;case v:O=G()/3;break;case f:O=(H-V)/6048e5;break;case c:O=(H-V)/864e5;break;case s:O=H/i;break;case l:O=H/r;break;case a:O=H/n;break;default:O=H}return T?O:M.a(O)},L.daysInMonth=function(){return this.endOf(d).$D},L.$locale=function(){return P[this.$L]},L.locale=function(R,z){if(!R)return this.$L;var T=this.clone(),O=$(R,z,!0);return O&&(T.$L=O),T},L.clone=function(){return M.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},A}(),j=D.prototype;return I.prototype=j,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",c],["$M",d],["$y",m],["$D",g]].forEach(function(A){j[A[1]]=function(L){return this.$g(L,A[0],A[1])}}),I.extend=function(A,L){return A.$i||(A(L,D,I),A.$i=!0),I},I.locale=$,I.isDayjs=_,I.unix=function(A){return I(1e3*A)},I.en=P[S],I.Ls=P,I.p={},I})})(TC);var XA=TC.exports;const E1=Ba(XA),KA=k.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;k.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const QA=k.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,ZA=k.input`
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
`,JA=k.textarea`
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
`,e8=k.button`
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
`,t8=k.div`
  margin-top: 30px;
`,n8=k.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,r8=k.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,i8=k.span`
  font-weight: bold;
  color: #333;
`,o8=k.span`
  font-size: 12px;
  color: #999;
`,a8=k.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,s8=k.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,l8=k.div`
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
`,P1=({productId:e,questions:t})=>{const[n,r]=y.useState(""),[i,o]=y.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(K.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return u.jsxs(KA,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(QA,{onSubmit:a,children:[u.jsx(ZA,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),u.jsx(JA,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),u.jsx(e8,{children:"Надіслати запитання"})]}),u.jsx(t8,{children:t&&t.length>0?t.map(l=>l.answer?u.jsxs(n8,{children:[u.jsxs(r8,{children:[u.jsx(i8,{children:l.userName||"Гість"}),u.jsx(o8,{children:new Date(l.createdAt).toLocaleDateString()})]}),u.jsx(a8,{children:l.question}),u.jsxs(s8,{children:[u.jsx(l8,{children:"Адміністратор"}),u.jsx("p",{children:l.answer})]})]},l.id):null):u.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},c8=()=>{var T;const{identifier:e}=Hx(),[t,n]=y.useState([]),[r,i]=y.useState(1),[o,a]=y.useState("description"),[l,s]=y.useState(null),[c,f]=y.useState(!1),[d,v]=y.useState(0),[m,g]=y.useState(!0),x=!isNaN(e),w=t.find(O=>x?String(O.id)===String(e):O.slug===e),h=w?E1().diff(E1(w.createdAt),"day")<7:!1,b=(O=>{const[F,B]=y.useState(!1);return y.useEffect(()=>{const N=window.matchMedia(O),V=()=>B(N.matches);return V(),N.addEventListener("change",V),()=>N.removeEventListener("change",V)},[O]),F})("(min-width: 768px)"),C=Ue(O=>O.cart.items),S=w?C.find(O=>O.id===w.id):null,P=(S==null?void 0:S.quantity)||0;y.useEffect(()=>{(async()=>{try{g(!0);const F=x?`filters[id][$eq]=${e}`:`filters[slug][$eq]=${e}`,N=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${F}&populate=*`)).json();n(N.data)}catch(F){console.error("Error fetching products:",F)}finally{g(!1)}})()},[e,x]);const E=(w==null?void 0:w.available)??!0,_=(w==null?void 0:w.stock)===0;y.useEffect(()=>{var O,F;w&&w.images&&s((F=(O=w.images)==null?void 0:O[0])==null?void 0:F.url)},[w]);const $=((w==null?void 0:w.images)??[]).map(O=>({src:O.url})),I=()=>{const O=w.images.findIndex(F=>F.url===l);v(O>=0?O:0),f(!0)},M=It(),j=Ue(O=>O.favorites.items).some(O=>O.id===(w==null?void 0:w.id)),A=async()=>{if(!_){if(P>=w.stock){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(P+r>w.stock){K.warning(`Доступно лише ${w.stock} шт.`);return}await yo(w,r,M,K)}},L=(O,F)=>{F.stopPropagation(),di(O,j,M,K)},R=(w==null?void 0:w.new_price)&&(w==null?void 0:w.new_price)<w.price,z=R?Math.round((w.price-w.new_price)/w.price*100):0;return m?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):w?u.jsxs(n1,{children:[" ",u.jsx(Ln,{autoClose:1500}),u.jsxs(XD,{children:[u.jsx(Pe,{to:"/",children:"Головна"})," / ",u.jsx(Pe,{to:"/catalog",children:"Каталог"})," /"," ",w.name]}),u.jsxs(KD,{children:[u.jsxs(QD,{children:[u.jsxs("div",{style:{position:"relative"},children:[u.jsx(JD,{src:l||er,alt:w.name,onClick:_?void 0:I,style:{filter:_?"grayscale(100%)":"none",opacity:_?.55:1,cursor:_?"default":"pointer"}}),_&&u.jsx(ZD,{children:"ПРОДАНО"})]}),u.jsx(eL,{children:(w.images??[]).map(O=>{const F=O.url;return u.jsx(tL,{src:F,onClick:()=>!_&&s(F),style:{cursor:_?"default":"pointer",opacity:l===F?1:.4,filter:_?"grayscale(100%)":"none"}},O.id)})})]}),u.jsx($A,{open:c,close:()=>f(!1),index:d,slides:$,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var F,B;v(O),(B=(F=w==null?void 0:w.images)==null?void 0:F[O])!=null&&B.url&&s(w.images[O].url)}},plugins:[YA],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),u.jsxs(nL,{children:[u.jsx(rL,{children:w.name}),u.jsxs(iL,{children:["Артикул: ",w.sku??""]}),u.jsx(oL,{children:h&&u.jsx(sL,{children:"● Новий товар"})}),!E&&u.jsx(aL,{children:"Бронь"}),u.jsxs(lL,{children:[u.jsx(cL,{children:R?u.jsxs(u.Fragment,{children:[u.jsxs(r1,{$discount:!0,children:[w.new_price.toLocaleString()," грн"]}),u.jsxs(uL,{children:[w.price.toLocaleString()," грн"]}),u.jsxs(dL,{children:["-",z,"%"]})]}):u.jsxs(r1,{children:[w.price.toLocaleString()," грн"]})}),u.jsxs(fL,{children:[u.jsxs(pL,{children:[u.jsx("button",{onClick:()=>i(Math.max(1,r-1)),disabled:_,children:"-"}),u.jsx("span",{children:r}),u.jsxs(yL,{$active:r>=w.stock,children:[u.jsx("button",{onClick:()=>i(Math.min(w.stock,r+1)),disabled:_||r>=w.stock,children:"+"}),u.jsxs(K2,{children:["Максимум: ",w.stock]})]})]}),u.jsxs(hL,{onClick:A,disabled:!E||_,children:[" ",u.jsx(xo,{size:25}),u.jsx("span",{children:"В КОШИК"})]}),u.jsxs(vL,{$active:j,onClick:O=>{_||L(w,O)},disabled:_,children:[u.jsxs(xL,{$active:j,children:[" ",u.jsx("use",{href:`${hn}#icon-heart`})]}),u.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!b&&u.jsxs(a1,{children:[u.jsxs(s1,{children:[u.jsx(Vo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(Vo,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),u.jsx(Vo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs(l1,{children:[o==="description"&&u.jsx(c1,{children:w.description}),o==="attributes"&&u.jsx(i1,{children:(T=w.attributes)!=null&&T.length?w.attributes.map(O=>u.jsxs(o1,{children:[u.jsx("span",{children:O.label}),u.jsx("b",{children:O.value})]},O.id)):u.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&u.jsx(P1,{productId:w.documentId,questions:w.questions})]})]}),b&&u.jsxs(gL,{children:[u.jsxs(a1,{children:[u.jsxs(s1,{children:[u.jsx(Vo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(Vo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs(l1,{children:[o==="description"&&u.jsx(c1,{children:w.description}),o==="FAQ"&&u.jsx(P1,{productId:w.documentId,questions:w.questions})]})]}),u.jsxs(i1,{children:[u.jsx(mL,{children:" Характеристики"}),(()=>{const O=[...w.attributes||[],...w.features||[]];return O.length?O.map((F,B)=>u.jsxs(o1,{children:[u.jsx("span",{children:F.label}),u.jsx("b",{children:F.value})]},`${F.id}-${B}`)):u.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):u.jsx(n1,{children:"Товар не знайдено"})};var rg="persist:",jC="persist/FLUSH",ig="persist/REHYDRATE",OC="persist/PAUSE",$C="persist/PERSIST",IC="persist/PURGE",MC="persist/REGISTER",u8=-1;function pl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pl=function(n){return typeof n}:pl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pl(e)}function T1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function d8(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T1(n,!0).forEach(function(r){f8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function f8(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p8(e,t,n,r){r.debug;var i=d8({},n);return e&&pl(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function h8(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:rg).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(S){return S}:typeof e.serialize=="function"?l=e.serialize:l=m8;var s=e.writeFailHandler||null,c={},f={},d=[],v=null,m=null,g=function(S){Object.keys(S).forEach(function(P){h(P)&&c[P]!==S[P]&&d.indexOf(P)===-1&&d.push(P)}),Object.keys(c).forEach(function(P){S[P]===void 0&&h(P)&&d.indexOf(P)===-1&&c[P]!==void 0&&d.push(P)}),v===null&&(v=setInterval(x,i)),c=S};function x(){if(d.length===0){v&&clearInterval(v),v=null;return}var C=d.shift(),S=r.reduce(function(P,E){return E.in(P,C,c)},c[C]);if(S!==void 0)try{f[C]=l(S)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete f[C];d.length===0&&w()}function w(){Object.keys(f).forEach(function(C){c[C]===void 0&&delete f[C]}),m=a.setItem(o,l(f)).catch(p)}function h(C){return!(n&&n.indexOf(C)===-1&&C!=="_persist"||t&&t.indexOf(C)!==-1)}function p(C){s&&s(C)}var b=function(){for(;d.length!==0;)x();return m||Promise.resolve()};return{update:g,flush:b}}function m8(e){return JSON.stringify(e)}function g8(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:rg).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=v8,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(c,f){return f.out(c,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function v8(e){return JSON.parse(e)}function x8(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:rg).concat(e.key);return t.removeItem(n,y8)}function y8(e){}function j1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function An(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?j1(n,!0).forEach(function(r){b8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function b8(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w8(e,t){if(e==null)return{};var n=S8(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function S8(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var C8=5e3;function DC(e,t){var n=e.version!==void 0?e.version:u8;e.debug;var r=e.stateReconciler===void 0?p8:e.stateReconciler,i=e.getStoredState||g8,o=e.timeout!==void 0?e.timeout:C8,a=null,l=!1,s=!0,c=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(f,d){var v=f||{},m=v._persist,g=w8(v,["_persist"]),x=g;if(d.type===$C){var w=!1,h=function(_,$){w||(d.rehydrate(e.key,_,$),w=!0)};if(o&&setTimeout(function(){!w&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=h8(e)),m)return An({},t(x,d),{_persist:m});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(E){var _=e.migrate||function($,I){return Promise.resolve($)};_(E,n).then(function($){h($)},function($){h(void 0,$)})},function(E){h(void 0,E)}),An({},t(x,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===IC)return l=!0,d.result(x8(e)),An({},t(x,d),{_persist:m});if(d.type===jC)return d.result(a&&a.flush()),An({},t(x,d),{_persist:m});if(d.type===OC)s=!0;else if(d.type===ig){if(l)return An({},x,{_persist:An({},m,{rehydrated:!0})});if(d.key===e.key){var p=t(x,d),b=d.payload,C=r!==!1&&b!==void 0?r(b,f,p,e):p,S=An({},C,{_persist:An({},m,{rehydrated:!0})});return c(S)}}}if(!m)return t(f,d);var P=t(x,d);return P===x?f:c(An({},P,{_persist:m}))}}function O1(e){return E8(e)||_8(e)||k8()}function k8(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _8(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function E8(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function $1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Kp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$1(n,!0).forEach(function(r){P8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function P8(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var LC={registry:[],bootstrapped:!1},T8=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:LC,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case MC:return Kp({},t,{registry:[].concat(O1(t.registry),[n.key])});case ig:var r=t.registry.indexOf(n.key),i=O1(t.registry);return i.splice(r,1),Kp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function j8(e,t,n){var r=n||!1,i=ym(T8,LC,t&&t.enhancer?t.enhancer:void 0),o=function(c){i.dispatch({type:MC,key:c})},a=function(c,f,d){var v={type:ig,payload:f,err:d,key:c};e.dispatch(v),i.dispatch(v),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Kp({},i,{purge:function(){var c=[];return e.dispatch({type:IC,result:function(d){c.push(d)}}),Promise.all(c)},flush:function(){var c=[];return e.dispatch({type:jC,result:function(d){c.push(d)}}),Promise.all(c)},pause:function(){e.dispatch({type:OC})},persist:function(){e.dispatch({type:$C,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var og={},ag={};ag.__esModule=!0;ag.default=I8;function hl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hl=function(n){return typeof n}:hl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hl(e)}function tf(){}var O8={getItem:tf,setItem:tf,removeItem:tf};function $8(e){if((typeof self>"u"?"undefined":hl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function I8(e){var t="".concat(e,"Storage");return $8(t)?self[t]:O8}og.__esModule=!0;og.default=L8;var M8=D8(ag);function D8(e){return e&&e.__esModule?e:{default:e}}function L8(e){var t=(0,M8.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var sg=void 0,A8=R8(og);function R8(e){return e&&e.__esModule?e:{default:e}}var z8=(0,A8.default)("local");sg=z8;const F8={key:"cart",storage:sg},N8={key:"favorites",storage:sg},B8=DC(F8,Q$),V8=DC(N8,q$),AC=D$({reducer:{cart:B8,favorites:V8},middleware:e=>e({serializableCheck:!1})}),Mu=j8(AC),U8=k.div`
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

  
`,W8=k.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,H8=k.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,G8=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width:  895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,q8=k.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,Y8=k.div`
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
  
`,RC=k.div`
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
 `,X8=k.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,K8=k.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,Q8=k.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,Z8=k.div`

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
`;const Du=k.div`
  text-align: center;
  width: 100px;
 
`,Lu=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Au=k.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Ru=k.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,zu=k.span`
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
`,J8=k.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,eR=k.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';


&:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
`,tR=k.div`

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
`,nR=k.div`
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
`,rR=k(Pe)`
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
`,iR=k.button`
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
`;const oR=k.div`
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
`,aR=k.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,sR=k.div`
  background-color: #fdfaf7;
`,lR=k.div`
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
`;const cR=k.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,uR=k.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,dR=k.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,fR=k.button`
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
`,pR=()=>u.jsx(sR,{children:u.jsxs(oR,{children:[u.jsx(aR,{children:"Головна / Кошик"}),u.jsxs(lR,{children:[u.jsx(cR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),u.jsx(uR,{children:"Ваш кошик порожній"}),u.jsx(dR,{children:"Ви ще не додали жодного товару в кошик"}),u.jsx(fR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),hR=k.div`
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
`,mR=({item:e,cartItem:t,user:n,token:r,disabled:i,isSoldOut:o})=>{const a=It(),l=async()=>{if(i)return;const c=e.quantity+1;if(!n){a(gv({id:e.id,stock:e.stock}));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(gv({id:e.id,stock:e.stock}))}catch(f){console.error("Помилка оновлення кількості:",f)}},s=async()=>{if(i)return;const c=e.quantity-1;if(!n){a(vv(e.id));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(vv(e.id))}catch(f){console.error("Помилка оновлення кількості:",f)}};return u.jsxs(hR,{children:[u.jsx("button",{onClick:s,disabled:o||e.quantity<=1,children:"-"}),u.jsx("span",{children:e.quantity}),u.jsx("button",{onClick:l,disabled:o||e.quantity>=e.stock,children:"+"})]})},gR=async(e,t,n)=>{try{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!r.ok)throw new Error("Не вдалося отримати товари кошика");const i=await r.json();await Promise.all(i.data.map(async o=>{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}})).ok)throw new Error("Не вдалося видалити товар з кошика")})),t(nr())}catch(r){throw console.error("clearCartFromBackend error:",r),r}},vR=k.div`
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
`,xR=k.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,yR=k.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,bR=k.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,wR=k.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,SR=k.div`
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
`,zC=k.div`
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
`;k.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const CR=k.div`
  position: relative;
`,kR=k.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,_R=k.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,ER=k.div`
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
`;const PR=k.div`
  display: flex;
  gap: 16px;
`,I1=k.button`
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
`,TR=k.div`
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
`,jR=k.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,OR=k.button`
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
`;k.button`
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
`;const $R=async(e,t,n,r)=>{try{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${t}&filters[product][id][$eq]=${e.id}`,{headers:{Authorization:`Bearer ${r}`}});if(!i.ok)throw new Error("Не вдалося знайти товар у кошику");const a=(await i.json()).data[0];if(!a)throw new Error("Товар у кошику не знайдено");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${a.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити товар");n(uS(e))}catch(i){throw console.error("deleteCartItemFromBackend error:",i),i}},IR=()=>{const e=It(),t=Ke(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),[i,o]=y.useState([]),a=Ue(S=>S.cart.items),[l,s]=y.useState([]),[c,f]=y.useState([]);console.log("cartItems",c);const[d,v]=y.useState(!0);console.log("localCartItems",l);const m=a.filter(S=>S.available!==!1&&S.stock>0).reduce((S,P)=>S+P.quantity,0),g=a.filter(S=>S.available!==!1&&S.stock>0).reduce((S,P)=>S+(P.new_price??P.price)*(P.quantity||1),0),x=Ue(S=>S.favorites.items),w=l.length===0,h=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e(Ja()),e(nr()),s([]),f([]),await Mu.purge(),t("/",{replace:!0})};y.useEffect(()=>{(async()=>{if(!n||!r){s(a),v(!1);return}try{const P=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(P.status===401){h();return}if(!P.ok)throw new Error("Не вдалося отримати кошик");const E=await P.json();f(E.data);const _=E.data.map($=>$.product?{...$.product,quantity:$.quantity}:null).filter(Boolean);s(_),e(cS(_))}catch(P){console.error(P),K.error("Не вдалося завантажити кошик")}finally{v(!1)}})()},[]),y.useEffect(()=>{s(a)},[a]);const p=(S,P)=>{P.stopPropagation();const E=x.some(_=>_.id===(S==null?void 0:S.id));di(S,E,e,K)},b=async S=>{o(P=>[...P,S.id]);try{if(!r){setTimeout(()=>{e(uS(S)),o(P=>P.filter(E=>E!==S.id))},300);return}await $R(S,r.id,e,n),setTimeout(()=>{o(P=>P.filter(E=>E!==S.id))},300)}catch{o(E=>E.filter(_=>_!==S.id)),K.error("Не вдалося видалити товар з кошика")}},C=async()=>{if(!r){e(nr()),s([]);return}try{await gR(r.id,e,n),s([])}catch{K.error("Не вдалося очистити кошик")}};return d?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:w?u.jsx(pR,{}):u.jsxs(U8,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(W8,{children:[" ",u.jsx(Pe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",u.jsx(Pe,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),u.jsx(H8,{children:"Кошик"}),u.jsxs(G8,{children:[u.jsx(q8,{children:l.map((S,P)=>{var A,L;const E=c.find(R=>{var z;return((z=R.product)==null?void 0:z.documentId)===S.documentId}),_=x.some(R=>R.id===S.id),$=S.new_price&&S.new_price<S.price,I=(S==null?void 0:S.available)??!0,M=(S==null?void 0:S.stock)===0,D=$?S.new_price:S.price,j=$?Math.round((S.price-S.new_price)/S.price*100):0;return u.jsxs(Y8,{className:`
    ${i.includes(S.id)?"removing":""}
    ${I?"":"unavailable"}
    ${M?"sold-out":""}
  `,children:[u.jsxs(Nw,{onClick:()=>t(`/product/${S.slug??S.id}`),children:[!I&&u.jsx(zC,{children:"Бронь"})," ",M&&u.jsx(RC,{children:"Продано"}),u.jsx(X8,{src:((L=(A=S.images)==null?void 0:A[0])==null?void 0:L.url)||"/nofoto.png",alt:S.name,style:{filter:M?"grayscale(100%)":"none",opacity:M?.55:1},onError:R=>{R.currentTarget.onerror=null,R.currentTarget.src=er}})]}),u.jsx(K8,{onClick:()=>t(`/product/${S.slug??S.id}`),children:u.jsx("h3",{children:S.name})}),u.jsxs(Q8,{children:[u.jsx(mR,{item:S,cartItem:E,user:r,token:n,disabled:M,isSoldOut:M}),u.jsx(Du,{children:u.jsxs(Lu,{children:[u.jsxs(Au,{$discount:$,children:[(D*(S.quantity||1)).toLocaleString()," ","грн"]}),$&&u.jsxs(u.Fragment,{children:[u.jsxs(Ru,{children:[(S.price*(S.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(zu,{children:["-",j,"%"]})]})]})})]}),u.jsxs(Z8,{children:[u.jsx(eR,{onClick:R=>{M||p(S,R)},disabled:M,style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:u.jsx(Xa,{size:22,fill:_?"#ff4d4f":"none",color:_?"#ff4d4f":"#999"})}),u.jsx(J8,{onClick:()=>b(S),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:u.jsx($w,{size:22})})]})]},`${S.id}-${P}`)})}),u.jsxs(tR,{children:[u.jsxs(nR,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[m," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[g," грн"]})]}),u.jsx(rR,{to:"/checkout",onClick:S=>{m===0&&(S.preventDefault(),K.warning("У кошику немає доступних товарів"))},children:"Оформити замовлення"}),u.jsx(iR,{onClick:C,children:"Oчистити кошик"})]})]})]})})},MR=k.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,DR=k.div`
   
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
`;const LR=k.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;k.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const AR=k.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,RR=k.button`
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
`,zR=()=>u.jsxs(u.Fragment,{children:[u.jsx(MR,{children:"Головна / Обране"}),u.jsxs(DR,{children:[u.jsx(LR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),u.jsx(AR,{children:"Ви ще не додали жодного товару в обране"}),u.jsx(RR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),FR=()=>{const e=It(),t=Ke(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),i=Ue(p=>p.favorites.items),[o,a]=y.useState([]),[l,s]=y.useState(!0),[c,f]=y.useState([]),d=Ue(p=>p.cart.items),v=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e(Ja()),e(nr()),a([]),await Mu.purge(),t("/",{replace:!0})};y.useEffect(()=>{(async()=>{if(!n||!r){a(i),s(!1);return}try{const b=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(b.status===401){v();return}if(!b.ok)throw new Error("Не вдалося отримати обране");const S=(await b.json()).data.map(P=>P.product).filter(Boolean);a(S)}catch(b){console.error(b),K.error("Не вдалося завантажити обране"),a(i)}finally{s(!1)}})()},[]);const m=()=>{const p=o.filter(b=>b.available!==!1&&b.stock!==0).map(b=>{const C=d.find(_=>_.id===b.id),S=(C==null?void 0:C.quantity)??0,E=Number(b.stock??0)-S;return E<=0?null:{...b,quantity:E}}).filter(Boolean);if(p.length===0){K.error("Усі товари вже в максимальній кількості");return}e(K$(p)),K.success("Додано максимально доступну кількість товарів")};console.log("favorites",o);const g=o.filter(p=>p.available!==!1&&p.stock!==0).length,x=o.filter(p=>p.available!==!1&&p.stock>0).reduce((p,b)=>p+(b.new_price??b.price)*(b.quantity||1),0);console.log("favorites",o),console.log(g);const w=async(p,b)=>{b.stopPropagation();const C=o.some(P=>P.documentId===p.documentId);f(P=>[...P,p.id]),await di(p,C,e,K)&&C?setTimeout(()=>{a(P=>P.filter(E=>E.documentId!==p.documentId)),f(P=>P.filter(E=>E!==p.id))},300):f(P=>P.filter(E=>E!==p.id))},h=o.length===0;return l?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:h?u.jsx(zR,{}):u.jsxs(vR,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(xR,{children:[" ",u.jsx(Pe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",u.jsx(Pe,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),u.jsx(yR,{children:"Обране"}),u.jsxs(bR,{children:[u.jsx(wR,{children:o.map(p=>{var $,I;const b=p.new_price&&p.new_price<p.price,C=b?p.new_price:p.price,S=(p==null?void 0:p.available)??!0,P=(p==null?void 0:p.stock)===0,E=b?Math.round((p.price-p.new_price)/p.price*100):0,_=async M=>{const D=d.find(A=>A.id===M.id);if((D?D.quantity:0)>=M.stock){K.error(`Вибачте, доступно лише ${M.stock} шт.`);return}await yo(M,1,e,K)};return u.jsxs(SR,{className:c.includes(p.id)?"removing":"",children:[u.jsxs(CR,{onClick:()=>t(`/product/${p.slug??p.id}`),children:[" ",!S&&u.jsx(zC,{children:"Бронь"}),P&&u.jsx(RC,{children:"Продано"}),u.jsx(kR,{src:((I=($=p.images)==null?void 0:$[0])==null?void 0:I.url)||er,alt:p.name,style:{filter:P?"grayscale(100%)":"none",opacity:P?.55:1},onError:M=>{M.currentTarget.onerror=null}})]}),u.jsx(_R,{onClick:()=>t(`/product/${p.slug??p.id}`),children:p.name}),u.jsxs(ER,{children:[u.jsx(Du,{children:u.jsxs(Lu,{children:[u.jsxs(Au,{$discount:b,children:[(C*(p.quantity||1)).toLocaleString()," ","грн"]}),b&&u.jsxs(u.Fragment,{children:[u.jsxs(Ru,{children:[(p.price*(p.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(zu,{children:["-",E,"%"]})]})]})}),u.jsxs(PR,{children:[u.jsx(I1,{onClick:()=>{P||_(p)},disabled:!S||P,children:u.jsx(xo,{size:30})}),u.jsx(I1,{onClick:M=>w(p,M),children:u.jsx($w,{size:30})})]})]})]},p.id)})}),u.jsxs(TR,{children:[u.jsxs(jR,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[g," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[x," грн"]})]}),u.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),u.jsx(OR,{onClick:()=>m(),children:"Додати все до кошика"})]})]})]})})},NR=k.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,BR=k.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,VR=k.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,UR=k.h1`
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
`;const WR=({title:e,children:t,breadcrumbPath:n})=>u.jsxs(NR,{children:[u.jsxs(BR,{children:["Головна / ",n]}),u.jsxs(VR,{children:[u.jsx(UR,{children:e}),t]})]}),M1=k.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,D1=k.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,L1=k.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,A1=k.ul`
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
`,HR=()=>u.jsxs(WR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[u.jsxs(M1,{children:[u.jsx(D1,{children:"Способи доставки"}),u.jsx(L1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),u.jsxs(A1,{children:[u.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),u.jsx("li",{children:"Самовивіз з нашого магазину"}),u.jsx("li",{children:"Укрпошта"})]})]}),u.jsxs(M1,{children:[u.jsx(D1,{children:"Варіанти оплати"}),u.jsx(L1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),u.jsxs(A1,{children:[u.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),u.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),u.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function si(e){"@babel/helpers - typeof";return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},si(e)}function GR(e,t){if(si(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(si(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function FC(e){var t=GR(e,"string");return si(t)==="symbol"?t:String(t)}function Zo(e,t,n){return t=FC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?R1(Object(n),!0).forEach(function(r){Zo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qR(e){if(Array.isArray(e))return e}function YR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}function Qp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function NC(e,t){if(e){if(typeof e=="string")return Qp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qp(e,t)}}function XR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yn(e,t){return qR(e)||YR(e,t)||NC(e,t)||XR()}function KR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function sr(e,t){if(e==null)return{};var n=KR(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var QR=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function ZR(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,c=e.onChange,f=e.onInputChange,d=e.onMenuClose,v=e.onMenuOpen,m=e.value,g=sr(e,QR),x=y.useState(l!==void 0?l:n),w=Yn(x,2),h=w[0],p=w[1],b=y.useState(s!==void 0?s:i),C=Yn(b,2),S=C[0],P=C[1],E=y.useState(m!==void 0?m:a),_=Yn(E,2),$=_[0],I=_[1],M=y.useCallback(function(T,O){typeof c=="function"&&c(T,O),I(T)},[c]),D=y.useCallback(function(T,O){var F;typeof f=="function"&&(F=f(T,O)),p(F!==void 0?F:T)},[f]),j=y.useCallback(function(){typeof v=="function"&&v(),P(!0)},[v]),A=y.useCallback(function(){typeof d=="function"&&d(),P(!1)},[d]),L=l!==void 0?l:h,R=s!==void 0?s:S,z=m!==void 0?m:$;return J(J({},g),{},{inputValue:L,menuIsOpen:R,onChange:M,onInputChange:D,onMenuClose:A,onMenuOpen:j,value:z})}function JR(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,FC(r.key),r)}}function ez(e,t,n){return t&&z1(e.prototype,t),n&&z1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zp(e,t){return Zp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Zp(e,t)}function tz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zp(e,t)}function dc(e){return dc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},dc(e)}function nz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function iz(e,t){if(t&&(si(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rz(e)}function oz(e){var t=nz();return function(){var r=dc(e),i;if(t){var o=dc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return iz(this,i)}}function az(e){if(Array.isArray(e))return Qp(e)}function sz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lg(e){return az(e)||sz(e)||NC(e)||lz()}function cz(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const uz=Math.min,dz=Math.max,fc=Math.round,Is=Math.floor,pc=e=>({x:e,y:e});function fz(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Fu(){return typeof window<"u"}function BC(e){return UC(e)?(e.nodeName||"").toLowerCase():"#document"}function mn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function VC(e){var t;return(t=(UC(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function UC(e){return Fu()?e instanceof Node||e instanceof mn(e).Node:!1}function Jp(e){return Fu()?e instanceof Element||e instanceof mn(e).Element:!1}function cg(e){return Fu()?e instanceof HTMLElement||e instanceof mn(e).HTMLElement:!1}function F1(e){return!Fu()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof mn(e).ShadowRoot}function WC(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ug(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let nf;function pz(){return nf==null&&(nf=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),nf}function hz(e){return/^(html|body|#document)$/.test(BC(e))}function ug(e){return mn(e).getComputedStyle(e)}function mz(e){if(BC(e)==="html")return e;const t=e.assignedSlot||e.parentNode||F1(e)&&e.host||VC(e);return F1(t)?t.host:t}function HC(e){const t=mz(e);return hz(t)?e.ownerDocument?e.ownerDocument.body:e.body:cg(t)&&WC(t)?t:HC(t)}function hc(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=HC(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=mn(i);if(o){const l=eh(a);return t.concat(a,a.visualViewport||[],WC(i)?i:[],l&&n?hc(l):[])}else return t.concat(i,hc(i,[],n))}function eh(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function gz(e){const t=ug(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=cg(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=fc(n)!==o||fc(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function dg(e){return Jp(e)?e:e.contextElement}function rf(e){const t=dg(e);if(!cg(t))return pc(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=gz(t);let a=(o?fc(n.width):n.width)/r,l=(o?fc(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const vz=pc(0);function xz(e){const t=mn(e);return!pz()||!t.visualViewport?vz:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function yz(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==mn(e)?!1:t}function N1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=dg(e);let a=pc(1);t&&(r?Jp(r)&&(a=rf(r)):a=rf(e));const l=yz(o,n,r)?xz(o):pc(0);let s=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,f=i.width/a.x,d=i.height/a.y;if(o){const v=mn(o),m=r&&Jp(r)?mn(r):r;let g=v,x=eh(g);for(;x&&r&&m!==g;){const w=rf(x),h=x.getBoundingClientRect(),p=ug(x),b=h.left+(x.clientLeft+parseFloat(p.paddingLeft))*w.x,C=h.top+(x.clientTop+parseFloat(p.paddingTop))*w.y;s*=w.x,c*=w.y,f*=w.x,d*=w.y,s+=b,c+=C,g=mn(x),x=eh(g)}}return fz({width:f,height:d,x:s,y:c})}function GC(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function bz(e,t){let n=null,r;const i=VC(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const c=e.getBoundingClientRect(),{left:f,top:d,width:v,height:m}=c;if(l||t(),!v||!m)return;const g=Is(d),x=Is(i.clientWidth-(f+v)),w=Is(i.clientHeight-(d+m)),h=Is(f),b={rootMargin:-g+"px "+-x+"px "+-w+"px "+-h+"px",threshold:dz(0,uz(1,s))||1};let C=!0;function S(P){const E=P[0].intersectionRatio;if(E!==s){if(!C)return a();E?a(!1,E):r=setTimeout(()=>{a(!1,1e-7)},1e3)}E===1&&!GC(c,e.getBoundingClientRect())&&a(),C=!1}try{n=new IntersectionObserver(S,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(S,b)}n.observe(e)}return a(!0),o}function wz(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=dg(e),f=i||o?[...c?hc(c):[],...t?hc(t):[]]:[];f.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const d=c&&l?bz(c,n):null;let v=-1,m=null;a&&(m=new ResizeObserver(h=>{let[p]=h;p&&p.target===c&&m&&t&&(m.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var b;(b=m)==null||b.observe(t)})),n()}),c&&!s&&m.observe(c),t&&m.observe(t));let g,x=s?N1(e):null;s&&w();function w(){const h=N1(e);x&&!GC(x,h)&&n(),x=h,g=requestAnimationFrame(w)}return n(),()=>{var h;f.forEach(p=>{i&&p.removeEventListener("scroll",n),o&&p.removeEventListener("resize",n)}),d==null||d(),(h=m)==null||h.disconnect(),m=null,s&&cancelAnimationFrame(g)}}var th=y.useLayoutEffect,Sz=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],mc=function(){};function Cz(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function kz(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(Cz(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var B1=function(t){return Mz(t)?t.filter(Boolean):si(t)==="object"&&t!==null?[t]:[]},qC=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=sr(t,Sz);return J({},n)},Oe=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Nu(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function _z(e){return Nu(e)?window.innerHeight:e.clientHeight}function YC(e){return Nu(e)?window.pageYOffset:e.scrollTop}function gc(e,t){if(Nu(e)){window.scrollTo(0,t);return}e.scrollTop=t}function Ez(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function Pz(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ms(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:mc,i=YC(e),o=t-i,a=10,l=0;function s(){l+=a;var c=Pz(l,i,o,n);gc(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function V1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?gc(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&gc(e,Math.max(t.offsetTop-i,0))}function Tz(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function U1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function jz(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var XC=!1,Oz={get passive(){return XC=!0}},Ds=typeof window<"u"?window:{};Ds.addEventListener&&Ds.removeEventListener&&(Ds.addEventListener("p",mc,Oz),Ds.removeEventListener("p",mc,!1));var $z=XC;function Iz(e){return e!=null}function Mz(e){return Array.isArray(e)}function Ls(e,t,n){return e?t:n}var Dz=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Yn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Yn(l,2),c=s[0],f=s[1];return a[c]=f,a},{})},Lz=["children","innerProps"],Az=["children","innerProps"];function Rz(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=Ez(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var f=s.getBoundingClientRect(),d=f.height,v=n.getBoundingClientRect(),m=v.bottom,g=v.height,x=v.top,w=n.offsetParent.getBoundingClientRect(),h=w.top,p=a?window.innerHeight:_z(s),b=YC(s),C=parseInt(getComputedStyle(n).marginBottom,10),S=parseInt(getComputedStyle(n).marginTop,10),P=h-S,E=p-x,_=P+b,$=d-b-x,I=m-p+b+C,M=b+x-S,D=160;switch(i){case"auto":case"bottom":if(E>=g)return{placement:"bottom",maxHeight:t};if($>=g&&!a)return o&&Ms(s,I,D),{placement:"bottom",maxHeight:t};if(!a&&$>=r||a&&E>=r){o&&Ms(s,I,D);var j=a?E-C:$-C;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var A=t,L=a?P:_;return L>=r&&(A=Math.min(L-C-l,t)),{placement:"top",maxHeight:A}}if(i==="bottom")return o&&gc(s,I),{placement:"bottom",maxHeight:t};break;case"top":if(P>=g)return{placement:"top",maxHeight:t};if(_>=g&&!a)return o&&Ms(s,M,D),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&P>=r){var R=t;return(!a&&_>=r||a&&P>=r)&&(R=a?P-S:_-S),o&&Ms(s,M,D),{placement:"top",maxHeight:R}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function zz(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var KC=function(t){return t==="auto"?"bottom":t},Fz=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return J((r={label:"menu"},Zo(r,zz(i),"100%"),Zo(r,"position","absolute"),Zo(r,"width","100%"),Zo(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},QC=y.createContext(null),Nz=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,c=y.useContext(QC)||{},f=c.setPortalPlacement,d=y.useRef(null),v=y.useState(i),m=Yn(v,2),g=m[0],x=m[1],w=y.useState(null),h=Yn(w,2),p=h[0],b=h[1],C=s.spacing.controlHeight;return th(function(){var S=d.current;if(S){var P=a==="fixed",E=l&&!P,_=Rz({maxHeight:i,menuEl:S,minHeight:r,placement:o,shouldScroll:E,isFixedPosition:P,controlHeight:C});x(_.maxHeight),b(_.placement),f==null||f(_.placement)}},[i,o,a,l,r,f,C]),n({ref:d,placerProps:J(J({},t),{},{placement:p||KC(o),maxHeight:g})})},Bz=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Z("div",ee({},Oe(t,"menu",{menu:!0}),{ref:r},i),n)},Vz=Bz,Uz=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return J({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},Wz=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Z("div",ee({},Oe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},ZC=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return J({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},Hz=ZC,Gz=ZC,qz=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=sr(t,Lz);return Z("div",ee({},Oe(J(J({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},Yz=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=sr(t,Az);return Z("div",ee({},Oe(J(J({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},Xz=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},Kz=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=y.useRef(null),c=y.useRef(null),f=y.useState(KC(a)),d=Yn(f,2),v=d[0],m=d[1],g=y.useMemo(function(){return{setPortalPlacement:m}},[]),x=y.useState(null),w=Yn(x,2),h=w[0],p=w[1],b=y.useCallback(function(){if(i){var E=Tz(i),_=l==="fixed"?0:window.pageYOffset,$=E[v]+_;($!==(h==null?void 0:h.offset)||E.left!==(h==null?void 0:h.rect.left)||E.width!==(h==null?void 0:h.rect.width))&&p({offset:$,rect:E})}},[i,l,v,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);th(function(){b()},[b]);var C=y.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=wz(i,s.current,b,{elementResize:"ResizeObserver"in window}))},[i,b]);th(function(){C()},[C]);var S=y.useCallback(function(E){s.current=E,C()},[C]);if(!n&&l!=="fixed"||!h)return null;var P=Z("div",ee({ref:S},Oe(J(J({},t),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Z(QC.Provider,{value:g},n?Ac.createPortal(P,n):P)},Qz=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},Zz=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Z("div",ee({},Oe(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},Jz=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return J({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},eF=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Z("div",ee({},Oe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},tF=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},nF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Oe(t,"indicatorsContainer",{indicators:!0}),r),n)},W1,rF=["size"],iF=["innerProps","isRtl","size"],oF={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},JC=function(t){var n=t.size,r=sr(t,rF);return Z("svg",ee({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:oF},r))},fg=function(t){return Z(JC,ee({size:20},t),Z("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},ek=function(t){return Z(JC,ee({size:20},t),Z("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},tk=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return J({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},aF=tk,sF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Oe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Z(ek,null))},lF=tk,cF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Oe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Z(fg,null))},uF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return J({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},dF=function(t){var n=t.innerProps;return Z("span",ee({},n,Oe(t,"indicatorSeparator",{"indicator-separator":!0})))},fF=K5(W1||(W1=cz([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),pF=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return J({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},of=function(t){var n=t.delay,r=t.offset;return Z("span",{css:Im({animation:"".concat(fF," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},hF=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=sr(t,iF);return Z("div",ee({},Oe(J(J({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Z(of,{delay:0,offset:r}),Z(of,{delay:160,offset:!0}),Z(of,{delay:320,offset:!r}))},mF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return J({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},gF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Z("div",ee({ref:o},Oe(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},vF=gF,xF=["data"],yF=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},bF=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,f=t.theme,d=t.selectProps;return Z("div",ee({},Oe(t,"group",{group:!0}),s),Z(a,ee({},l,{selectProps:d,theme:f,getStyles:i,getClassNames:o,cx:r}),c),Z("div",null,n))},wF=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return J({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},SF=function(t){var n=qC(t);n.data;var r=sr(n,xF);return Z("div",ee({},Oe(t,"groupHeading",{"group-heading":!0}),r))},CF=bF,kF=["innerRef","isDisabled","isHidden","inputClassName"],_F=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return J(J({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},EF),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},nk={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},EF={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":J({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},nk)},PF=function(t){return J({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},nk)},TF=function(t){var n=t.cx,r=t.value,i=qC(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,c=sr(i,kF);return Z("div",ee({},Oe(t,"input",{"input-container":!0}),{"data-value":r||""}),Z("input",ee({className:n({input:!0},s),ref:o,style:PF(l),disabled:a},c)))},jF=TF,OF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return J({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},$F=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return J({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},IF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return J({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},rk=function(t){var n=t.children,r=t.innerProps;return Z("div",r,n)},MF=rk,DF=rk;function LF(e){var t=e.children,n=e.innerProps;return Z("div",ee({role:"button"},n),t||Z(fg,{size:14}))}var AF=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,c=r.Container,f=r.Label,d=r.Remove;return Z(c,{data:i,innerProps:J(J({},Oe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Z(f,{data:i,innerProps:J({},Oe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Z(d,{data:i,innerProps:J(J({},Oe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},RF=AF,zF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return J({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},FF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Z("div",ee({},Oe(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},NF=FF,BF=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return J({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},VF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Oe(t,"placeholder",{placeholder:!0}),r),n)},UF=VF,WF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return J({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},HF=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Z("div",ee({},Oe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},GF=HF,qF={ClearIndicator:cF,Control:vF,DropdownIndicator:sF,DownChevron:ek,CrossIcon:fg,Group:CF,GroupHeading:SF,IndicatorsContainer:nF,IndicatorSeparator:dF,Input:jF,LoadingIndicator:hF,Menu:Vz,MenuList:Wz,MenuPortal:Kz,LoadingMessage:Yz,NoOptionsMessage:qz,MultiValue:RF,MultiValueContainer:MF,MultiValueLabel:DF,MultiValueRemove:LF,Option:NF,Placeholder:UF,SelectContainer:Zz,SingleValue:GF,ValueContainer:eF},YF=function(t){return J(J({},qF),t.components)},H1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function XF(e,t){return!!(e===t||H1(e)&&H1(t))}function KF(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!XF(e[n],t[n]))return!1;return!0}function QF(e,t){t===void 0&&(t=KF);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var ZF={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},JF=function(t){return Z("span",ee({css:ZF},t))},G1=JF,eN={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,c=t.isSelected,f=t.isAppleDevice,d=function(x,w){return x&&x.length?"".concat(x.indexOf(w)+1," of ").concat(x.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&f){var v=s?" disabled":"",m="".concat(c?" selected":"").concat(v);return"".concat(a).concat(m,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},tN=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=t.id,f=t.isAppleDevice,d=s.ariaLiveMessages,v=s.getOptionLabel,m=s.inputValue,g=s.isMulti,x=s.isOptionDisabled,w=s.isSearchable,h=s.menuIsOpen,p=s.options,b=s.screenReaderStatus,C=s.tabSelectsValue,S=s.isLoading,P=s["aria-label"],E=s["aria-live"],_=y.useMemo(function(){return J(J({},eN),d||{})},[d]),$=y.useMemo(function(){var L="";if(n&&_.onChange){var R=n.option,z=n.options,T=n.removedValue,O=n.removedValues,F=n.value,B=function(oe){return Array.isArray(oe)?null:oe},N=T||R||B(F),V=N?v(N):"",H=z||O||void 0,G=H?H.map(v):[],W=J({isDisabled:N&&x(N,l),label:V,labels:G},n);L=_.onChange(W)}return L},[n,_,x,l,v]),I=y.useMemo(function(){var L="",R=r||i,z=!!(r&&l&&l.includes(r));if(R&&_.onFocus){var T={focused:R,label:v(R),isDisabled:x(R,l),isSelected:z,options:o,context:R===r?"menu":"value",selectValue:l,isAppleDevice:f};L=_.onFocus(T)}return L},[r,i,v,x,_,o,l,f]),M=y.useMemo(function(){var L="";if(h&&p.length&&!S&&_.onFilter){var R=b({count:o.length});L=_.onFilter({inputValue:m,resultsMessage:R})}return L},[o,m,h,_,p,b,S]),D=(n==null?void 0:n.action)==="initial-input-focus",j=y.useMemo(function(){var L="";if(_.guidance){var R=i?"value":h?"menu":"input";L=_.guidance({"aria-label":P,context:R,isDisabled:r&&x(r,l),isMulti:g,isSearchable:w,tabSelectsValue:C,isInitialFocus:D})}return L},[P,r,i,g,x,w,h,_,l,C,D]),A=Z(y.Fragment,null,Z("span",{id:"aria-selection"},$),Z("span",{id:"aria-focused"},I),Z("span",{id:"aria-results"},M),Z("span",{id:"aria-guidance"},j));return Z(y.Fragment,null,Z(G1,{id:c},D&&A),Z(G1,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!D&&A))},nN=tN,nh=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],rN=new RegExp("["+nh.map(function(e){return e.letters}).join("")+"]","g"),ik={};for(var af=0;af<nh.length;af++)for(var sf=nh[af],lf=0;lf<sf.letters.length;lf++)ik[sf.letters[lf]]=sf.base;var ok=function(t){return t.replace(rN,function(n){return ik[n]})},iN=QF(ok),q1=function(t){return t.replace(/^\s+|\s+$/g,"")},oN=function(t){return"".concat(t.label," ").concat(t.value)},aN=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=J({ignoreCase:!0,ignoreAccents:!0,stringify:oN,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,c=i.matchFrom,f=s?q1(r):r,d=s?q1(l(n)):l(n);return o&&(f=f.toLowerCase(),d=d.toLowerCase()),a&&(f=iN(f),d=ok(d)),c==="start"?d.substr(0,f.length)===f:d.indexOf(f)>-1}},sN=["innerRef"];function lN(e){var t=e.innerRef,n=sr(e,sN),r=Dz(n,"onExited","in","enter","exit","appear");return Z("input",ee({ref:t},r,{css:Im({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var cN=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function uN(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=y.useRef(!1),l=y.useRef(!1),s=y.useRef(0),c=y.useRef(null),f=y.useCallback(function(w,h){if(c.current!==null){var p=c.current,b=p.scrollTop,C=p.scrollHeight,S=p.clientHeight,P=c.current,E=h>0,_=C-S-b,$=!1;_>h&&a.current&&(r&&r(w),a.current=!1),E&&l.current&&(o&&o(w),l.current=!1),E&&h>_?(n&&!a.current&&n(w),P.scrollTop=C,$=!0,a.current=!0):!E&&-h>b&&(i&&!l.current&&i(w),P.scrollTop=0,$=!0,l.current=!0),$&&cN(w)}},[n,r,i,o]),d=y.useCallback(function(w){f(w,w.deltaY)},[f]),v=y.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),m=y.useCallback(function(w){var h=s.current-w.changedTouches[0].clientY;f(w,h)},[f]),g=y.useCallback(function(w){if(w){var h=$z?{passive:!1}:!1;w.addEventListener("wheel",d,h),w.addEventListener("touchstart",v,h),w.addEventListener("touchmove",m,h)}},[m,v,d]),x=y.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",v,!1),w.removeEventListener("touchmove",m,!1))},[m,v,d]);return y.useEffect(function(){if(t){var w=c.current;return g(w),function(){x(w)}}},[t,g,x]),function(w){c.current=w}}var Y1=["boxSizing","height","overflow","paddingRight","position"],X1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function K1(e){e.cancelable&&e.preventDefault()}function Q1(e){e.stopPropagation()}function Z1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function J1(){return"ontouchstart"in window||navigator.maxTouchPoints}var ex=!!(typeof window<"u"&&window.document&&window.document.createElement),Uo=0,Ci={capture:!1,passive:!1};function dN(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=y.useRef({}),o=y.useRef(null),a=y.useCallback(function(s){if(ex){var c=document.body,f=c&&c.style;if(r&&Y1.forEach(function(g){var x=f&&f[g];i.current[g]=x}),r&&Uo<1){var d=parseInt(i.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,m=window.innerWidth-v+d||0;Object.keys(X1).forEach(function(g){var x=X1[g];f&&(f[g]=x)}),f&&(f.paddingRight="".concat(m,"px"))}c&&J1()&&(c.addEventListener("touchmove",K1,Ci),s&&(s.addEventListener("touchstart",Z1,Ci),s.addEventListener("touchmove",Q1,Ci))),Uo+=1}},[r]),l=y.useCallback(function(s){if(ex){var c=document.body,f=c&&c.style;Uo=Math.max(Uo-1,0),r&&Uo<1&&Y1.forEach(function(d){var v=i.current[d];f&&(f[d]=v)}),c&&J1()&&(c.removeEventListener("touchmove",K1,Ci),s&&(s.removeEventListener("touchstart",Z1,Ci),s.removeEventListener("touchmove",Q1,Ci)))}},[r]);return y.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var fN=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},pN={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function hN(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=uN({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),f=dN({isEnabled:n}),d=function(m){c(m),f(m)};return Z(y.Fragment,null,n&&Z("div",{onClick:fN,css:pN}),t(d))}var mN={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},gN=function(t){var n=t.name,r=t.onFocus;return Z("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:mN,value:"",onChange:function(){}})},vN=gN;function pg(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function xN(){return pg(/^iPhone/i)}function ak(){return pg(/^Mac/i)}function yN(){return pg(/^iPad/i)||ak()&&navigator.maxTouchPoints>1}function bN(){return xN()||yN()}function wN(){return ak()||bN()}var SN=function(t){return t.label},CN=function(t){return t.label},kN=function(t){return t.value},_N=function(t){return!!t.isDisabled},EN={clearIndicator:lF,container:Qz,control:mF,dropdownIndicator:aF,group:yF,groupHeading:wF,indicatorsContainer:tF,indicatorSeparator:uF,input:_F,loadingIndicator:pF,loadingMessage:Gz,menu:Fz,menuList:Uz,menuPortal:Xz,multiValue:OF,multiValueLabel:$F,multiValueRemove:IF,noOptionsMessage:Hz,option:zF,placeholder:BF,singleValue:WF,valueContainer:Jz},PN={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},TN=4,sk=4,jN=38,ON=sk*2,$N={baseUnit:sk,controlHeight:jN,menuGutter:ON},cf={borderRadius:TN,colors:PN,spacing:$N},IN={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:U1(),captureMenuScroll:!U1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:aN(),formatGroupLabel:SN,getOptionLabel:CN,getOptionValue:kN,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:_N,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!jz(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function tx(e,t,n,r){var i=uk(e,t,n),o=dk(e,t,n),a=ck(e,t),l=vc(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function ml(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return tx(e,a,t,l)}).filter(function(a){return rx(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=tx(e,n,t,r);return rx(e,o)?o:void 0}).filter(Iz)}function lk(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,lg(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function nx(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,lg(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function MN(e,t){return lk(ml(e,t))}function rx(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!pk(e)||!o)&&fk(e,{label:a,value:l,data:i},r)}function DN(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function LN(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var uf=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},ck=function(t,n){return t.getOptionLabel(n)},vc=function(t,n){return t.getOptionValue(n)};function uk(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function dk(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=vc(e,t);return n.some(function(i){return vc(e,i)===r})}function fk(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var pk=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},AN=1,hk=function(e){tz(n,e);var t=oz(n);function n(r){var i;if(JR(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var f=i.props,d=f.onChange,v=f.name;c.name=v,i.ariaOnChange(s,c),d(s,c)},i.setValue=function(s,c,f){var d=i.props,v=d.closeMenuOnSelect,m=d.isMulti,g=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),v&&(i.setState({inputIsHiddenAfterUpdate:!m}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:f})},i.selectOption=function(s){var c=i.props,f=c.blurInputOnSelect,d=c.isMulti,v=c.name,m=i.state.selectValue,g=d&&i.isOptionSelected(s,m),x=i.isOptionDisabled(s,m);if(g){var w=i.getOptionValue(s);i.setValue(m.filter(function(h){return i.getOptionValue(h)!==w}),"deselect-option",s)}else if(!x)d?i.setValue([].concat(lg(m),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:v});return}f&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,f=i.state.selectValue,d=i.getOptionValue(s),v=f.filter(function(g){return i.getOptionValue(g)!==d}),m=Ls(c,v,v[0]||null);i.onChange(m,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Ls(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,f=c[c.length-1],d=c.slice(0,c.length-1),v=Ls(s,d,d[0]||null);f&&i.onChange(v,{action:"pop-value",removedValue:f})},i.getFocusedOptionId=function(s){return uf(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return nx(ml(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];return kz.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return ck(i.props,s)},i.getOptionValue=function(s){return vc(i.props,s)},i.getStyles=function(s,c){var f=i.props.unstyled,d=EN[s](c,f);d.boxSizing="border-box";var v=i.props.styles[s];return v?v(d,c):d},i.getClassNames=function(s,c){var f,d;return(f=(d=i.props.classNames)[s])===null||f===void 0?void 0:f.call(d,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return YF(i.props)},i.buildCategorizedOptions=function(){return ml(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return lk(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:J({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,f=c.isMulti,d=c.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!f}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Nu(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,f=c&&c.item(0);f&&(i.initialTouchX=f.clientX,i.initialTouchY=f.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,f=c&&c.item(0);if(f){var d=Math.abs(f.clientX-i.initialTouchX),v=Math.abs(f.clientY-i.initialTouchY),m=5;i.userIsDragging=d>m||v>m}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,f=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(f,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),f=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:f>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return pk(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,f=c.isMulti,d=c.backspaceRemovesValue,v=c.escapeClearsValue,m=c.inputValue,g=c.isClearable,x=c.isDisabled,w=c.menuIsOpen,h=c.onKeyDown,p=c.tabSelectsValue,b=c.openMenuOnFocus,C=i.state,S=C.focusedOption,P=C.focusedValue,E=C.selectValue;if(!x&&!(typeof h=="function"&&(h(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!f||m)return;i.focusValue("previous");break;case"ArrowRight":if(!f||m)return;i.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(P)i.removeValue(P);else{if(!d)return;f?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!p||!S||b&&i.isOptionSelected(S,E))return;i.selectOption(S);break;case"Enter":if(s.keyCode===229)break;if(w){if(!S||i.isComposing)return;i.selectOption(S);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:m}),i.onMenuClose()):g&&v&&i.clearValue();break;case" ":if(m)return;if(!w){i.openMenu("first");break}if(!S)return;i.selectOption(S);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++AN),i.state.selectValue=B1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=uf(o,a[l])}return i}return ez(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&V1(this.menuListRef,this.focusedOptionRef),wN()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(V1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),f=i==="first"?0:c.length-1;if(!this.props.isMulti){var d=c.indexOf(l[0]);d>-1&&(f=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[f],focusedOptionId:this.getFocusedOptionId(c[f])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,f=-1;if(a.length){switch(i){case"previous":s===0?f=0:s===-1?f=c:f=s-1;break;case"next":s>-1&&s<c&&(f=s+1);break}this.setState({inputIsHidden:f!==-1,focusedValue:a[f]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,c=l.indexOf(a);a||(c=-1),i==="up"?s=c>0?c-1:l.length-1:i==="down"?s=(c+1)%l.length:i==="pageup"?(s=c-o,s<0&&(s=0)):i==="pagedown"?(s=c+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(cf):J(J({},cf),this.props.theme):cf}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,c=this.selectOption,f=this.setValue,d=this.props,v=d.isMulti,m=d.isRtl,g=d.options,x=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:x,isMulti:v,isRtl:m,options:g,selectOption:c,selectProps:d,setValue:f,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return uk(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return dk(this.props,i,o)}},{key:"filterOption",value:function(i,o){return fk(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,c=i.tabIndex,f=i.form,d=i.menuIsOpen,v=i.required,m=this.getComponents(),g=m.Input,x=this.state,w=x.inputIsHidden,h=x.ariaSelection,p=this.commonProps,b=l||this.getElementId("input"),C=J(J(J({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?y.createElement(g,ee({},p,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:b,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:f,type:"text",value:s},C)):y.createElement(lN,ee({id:b,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:mc,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:f,value:""},C))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,c=o.MultiValueRemove,f=o.SingleValue,d=o.Placeholder,v=this.commonProps,m=this.props,g=m.controlShouldRenderValue,x=m.isDisabled,w=m.isMulti,h=m.inputValue,p=m.placeholder,b=this.state,C=b.selectValue,S=b.focusedValue,P=b.isFocused;if(!this.hasValue()||!g)return h?null:y.createElement(d,ee({},v,{key:"placeholder",isDisabled:x,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),p);if(w)return C.map(function(_,$){var I=_===S,M="".concat(i.getOptionLabel(_),"-").concat(i.getOptionValue(_));return y.createElement(a,ee({},v,{components:{Container:l,Label:s,Remove:c},isFocused:I,isDisabled:x,key:M,index:$,removeProps:{onClick:function(){return i.removeValue(_)},onTouchEnd:function(){return i.removeValue(_)},onMouseDown:function(j){j.preventDefault()}},data:_}),i.formatOptionLabel(_,"value"))});if(h)return null;var E=C[0];return y.createElement(f,ee({},v,{data:E,isDisabled:x}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,f=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||c)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return y.createElement(o,ee({},a,{innerProps:d,isFocused:f}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,f=this.state.isFocused;if(!o||!c)return null;var d={"aria-hidden":"true"};return y.createElement(o,ee({},a,{innerProps:d,isDisabled:s,isFocused:f}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return y.createElement(a,ee({},l,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return y.createElement(o,ee({},a,{innerProps:c,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,c=o.MenuList,f=o.MenuPortal,d=o.LoadingMessage,v=o.NoOptionsMessage,m=o.Option,g=this.commonProps,x=this.state.focusedOption,w=this.props,h=w.captureMenuScroll,p=w.inputValue,b=w.isLoading,C=w.loadingMessage,S=w.minMenuHeight,P=w.maxMenuHeight,E=w.menuIsOpen,_=w.menuPlacement,$=w.menuPosition,I=w.menuPortalTarget,M=w.menuShouldBlockScroll,D=w.menuShouldScrollIntoView,j=w.noOptionsMessage,A=w.onMenuScrollToTop,L=w.onMenuScrollToBottom;if(!E)return null;var R=function(V,H){var G=V.type,W=V.data,q=V.isDisabled,oe=V.isSelected,he=V.label,ie=V.value,De=x===W,We=q?void 0:function(){return i.onOptionHover(W)},He=q?void 0:function(){return i.selectOption(W)},hi="".concat(i.getElementId("option"),"-").concat(H),St={id:hi,onClick:He,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:oe};return y.createElement(m,ee({},g,{innerProps:St,data:W,isDisabled:q,isSelected:oe,key:hi,label:he,type:G,value:ie,isFocused:De,innerRef:De?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(V.data,"menu"))},z;if(this.hasOptions())z=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var V=N.data,H=N.options,G=N.index,W="".concat(i.getElementId("group"),"-").concat(G),q="".concat(W,"-heading");return y.createElement(a,ee({},g,{key:W,data:V,options:H,Heading:l,headingProps:{id:q,data:N.data},label:i.formatGroupLabel(N.data)}),N.options.map(function(oe){return R(oe,"".concat(G,"-").concat(oe.index))}))}else if(N.type==="option")return R(N,"".concat(N.index))});else if(b){var T=C({inputValue:p});if(T===null)return null;z=y.createElement(d,g,T)}else{var O=j({inputValue:p});if(O===null)return null;z=y.createElement(v,g,O)}var F={minMenuHeight:S,maxMenuHeight:P,menuPlacement:_,menuPosition:$,menuShouldScrollIntoView:D},B=y.createElement(Nz,ee({},g,F),function(N){var V=N.ref,H=N.placerProps,G=H.placement,W=H.maxHeight;return y.createElement(s,ee({},g,F,{innerRef:V,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:b,placement:G}),y.createElement(hN,{captureEnabled:h,onTopArrive:A,onBottomArrive:L,lockEnabled:M},function(q){return y.createElement(c,ee({},g,{innerRef:function(he){i.getMenuListRef(he),q(he)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:b,maxHeight:W,focusedOption:x}),z)}))});return I||$==="fixed"?y.createElement(f,ee({},g,{appendTo:I,controlElement:this.controlRef,menuPlacement:_,menuPosition:$}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,c=o.name,f=o.required,d=this.state.selectValue;if(f&&!this.hasValue()&&!l)return y.createElement(vN,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(s)if(a){var v=d.map(function(x){return i.getOptionValue(x)}).join(a);return y.createElement("input",{name:c,type:"hidden",value:v})}else{var m=d.length>0?d.map(function(x,w){return y.createElement("input",{key:"i-".concat(w),name:c,type:"hidden",value:i.getOptionValue(x)})}):y.createElement("input",{name:c,type:"hidden",value:""});return y.createElement("div",null,m)}else{var g=d[0]?this.getOptionValue(d[0]):"";return y.createElement("input",{name:c,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,c=o.isFocused,f=o.selectValue,d=this.getFocusableOptions();return y.createElement(nN,ee({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:f,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,c=this.props,f=c.className,d=c.id,v=c.isDisabled,m=c.menuIsOpen,g=this.state.isFocused,x=this.commonProps=this.getCommonProps();return y.createElement(l,ee({},x,{className:f,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:g}),this.renderLiveRegion(),y.createElement(o,ee({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:g,menuIsOpen:m}),y.createElement(s,ee({},x,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),y.createElement(a,ee({},x,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,f=o.isFocused,d=o.prevWasFocused,v=o.instancePrefix,m=i.options,g=i.value,x=i.menuIsOpen,w=i.inputValue,h=i.isMulti,p=B1(g),b={};if(a&&(g!==a.value||m!==a.options||x!==a.menuIsOpen||w!==a.inputValue)){var C=x?MN(i,p):[],S=x?nx(ml(i,p),"".concat(v,"-option")):[],P=l?DN(o,p):null,E=LN(o,C),_=uf(S,E);b={selectValue:p,focusedOption:E,focusedOptionId:_,focusableOptionsWithIds:S,focusedValue:P,clearFocusValueOnUpdate:!1}}var $=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=c,M=f&&d;return f&&!M&&(I={value:Ls(h,p,p[0]||null),options:p,action:"initial-input-focus"},M=!d),(c==null?void 0:c.action)==="initial-input-focus"&&(I=null),J(J(J({},b),$),{},{prevProps:i,ariaSelection:I,prevWasFocused:M})}}]),n}(y.Component);hk.defaultProps=IN;var RN=y.forwardRef(function(e,t){var n=ZR(e);return y.createElement(hk,ee({ref:t},n))}),Bu=RN;const zN=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,FN=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,NN=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>u.jsxs(zN,{children:[u.jsx(FN,{children:"Місто"}),u.jsx(Bu,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),BN=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,VN=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,UN=({options:e=[],value:t,onChange:n,selectedCity:r})=>u.jsxs(BN,{children:[u.jsx(VN,{children:"Спосіб доставки"}),u.jsx(Bu,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),ix=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,ox=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,WN=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?u.jsxs(ix,{children:[u.jsx(ox,{children:"Відділення Нової пошти"}),u.jsx(Bu,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?u.jsxs(ix,{children:[u.jsx(ox,{children:"Адреса доставки (Укрпошта)"}),u.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,HN=k.div`
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
`;const GN=k.button`
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
`,qN=k.ul`
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
`,YN=k.li`
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
`,XN=k.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,KN=k.div`
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
`,QN=k.div`
  text-align: center;
  width: 100px;
 
`,ZN=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,JN=k.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,e7=k.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,t7=k.span`
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
`,n7=k.div`
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
`;const r7=k.div`
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,i7=k.div`
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
`;const o7=k.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 18px 2px 28px;

  font-size: 16px;
     color: var(--black-color);
`,a7=k.input`
  width: 20px;
  height: 20px;

  accent-color: #5b4637;
  cursor: pointer;

  flex-shrink: 0;
`,s7=k.label`
  font-size: 16px;
  line-height: 1.4;

      color: var(--black-color);
  cursor: pointer;
`,l7=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i,noCall:o,setNoCall:a})=>(console.log(n,t),u.jsxs(HN,{children:[u.jsx("h3",{children:"Ваше замовлення"}),u.jsx(qN,{children:e.map((l,s)=>{var m,g;const c=l.new_price&&l.new_price<l.price,f=c?l.new_price:l.price,d=c?Math.round((l.price-l.new_price)/l.price*100):0,v=l.available!==!1?f*(l.quantity||1):0;return u.jsxs(YN,{children:[u.jsx(XN,{src:((g=(m=l.images)==null?void 0:m[0])==null?void 0:g.url)||er,alt:l.name}),u.jsxs(KN,{children:[u.jsx("p",{className:"item-name",children:l.name}),u.jsxs("p",{className:"item-details",children:[l.quantity," шт. × ",l.price," грн"]})]}),u.jsx(QN,{children:u.jsxs(ZN,{children:[u.jsxs(JN,{$discount:c,children:[v.toLocaleString()," грн"]}),c&&u.jsxs(u.Fragment,{children:[u.jsxs(e7,{children:[(l.price*(l.quantity||1)).toLocaleString()," грн"]}),u.jsxs(t7,{children:["-",d,"%"]})]})]})})]},`${l.id}-${s}`)})}),u.jsxs("div",{className:"summary-row",children:[u.jsxs("span",{children:["Товари (",n,")"]}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs("div",{className:"summary-row",children:[u.jsx("span",{children:"Доставка"}),u.jsx("span",{children:"За тарифами перевізника"})]}),u.jsx("hr",{}),u.jsxs("div",{className:"total",children:[u.jsx("span",{children:"Всього до сплати:"}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs(o7,{children:[u.jsx(a7,{type:"checkbox",id:"noCall",checked:o,onChange:l=>a(l.target.checked)}),u.jsx(s7,{htmlFor:"noCall",children:"Не передзвонювати"})]}),u.jsx(GN,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&u.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]}));var mk={exports:{}};function c7(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var df=c7(y),u7=Ac;function d7(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function rh(){return(rh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f7(e,t){e.prototype=Object.create(t.prototype),d7(e.prototype.constructor=e,t)}function p7(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function ki(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h7=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,l],f=0;(s=new Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},ax=h7;function sx(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function m7(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var g7={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},v7="_";function lx(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=v7),n==null&&(n=g7),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Vt(e,t){return e.permanents.indexOf(t)!==-1}function Vu(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Vt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function cx(e,t){return t.split("").every(function(n,r){return Vt(e,r)||!Vu(e,r,n)})}function Jo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Vt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Vt(e,o)&&Vu(e,o,a)){i=o+1;break}}return i}function gk(e,t){return Jo(e,t)===e.mask.length}function Un(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=ih(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Vt(e,t.length);)t+=r[t.length];return t}if(t)return ih(e,Un(e,""),t,0);for(var o=0;o<r.length;o++)Vt(e,o)?t+=r[o]:t+=n;return t}function x7(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(f,d){return d<n||i<=d?f:Vt(e,d)?a[d]:o}).join("");for(var c=i;c<s.length;c++)Vt(e,c)&&(s[c]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Un(e,t)}function ih(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=gk(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(c){for(;m=c,Vt(e,v=r)&&m!==i[v];){if(r>=t.length&&(t+=i[r]),f=c,d=r,o&&Vt(e,d)&&f===o)return!0;if(++r>=i.length)return!1}var f,d,v,m;return!Vu(e,r,c)&&c!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),Un(e,t)):o||(t+=c),++r<i.length)}),t}function y7(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;f=s,Vt(e,c=r)&&f!==i[c];)if(++r>=i.length)return!1;var c,f;return(Vu(e,r,s)||s===o)&&r++,r<i.length}),r-l}function b7(e,t){for(var n=t;0<=n;--n)if(!Vt(e,n))return n;return null}function fa(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Vt(e,r))return r;return null}function ff(e){return e||e===0?e+"":""}function w7(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,c="",f=0,d=0,v=Math.min(i.start,n.start);return n.end>i.start?d=(f=y7(e,r,c=s.slice(i.start,n.end),v))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(v=i.start===n.start?fa(e,n.start):b7(e,n.start)),s=x7(e,s,v,d)),s=ih(e,s,c,v),(v+=f)>=o.length?v=o.length:v<a.length&&!f?v=a.length:v>=a.length&&v<l&&f&&(v=fa(e,v)),c||(c=null),{value:s=Un(e,s),enteredString:c,selection:{start:v,end:v}}}function S7(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function Ct(e){return typeof e=="function"}function C7(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function vk(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function ux(e){return(vk()?C7():function(){return setTimeout(e,1e3/60)})(e)}function pf(e){(vk()||clearTimeout)(e)}var k7=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=ux(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(pf(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var g=u7.findDOMNode(ki(ki(i))),x=typeof window<"u"&&g instanceof window.Element;if(g&&!x)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},i.getInputValue=function(){var g=i.getInputDOMNode();return g?g.value:null},i.setInputValue=function(g){var x=i.getInputDOMNode();x&&(i.value=g,x.value=g)},i.setCursorToEnd=function(){var g=Jo(i.maskOptions,i.value),x=fa(i.maskOptions,g);x!==null&&i.setCursorPosition(x)},i.setSelection=function(g,x,w){w===void 0&&(w={});var h=i.getInputDOMNode(),p=i.isFocused();h&&p&&(w.deferred||sx(h,g,x),i.selectionDeferId!==null&&pf(i.selectionDeferId),i.selectionDeferId=ux(function(){i.selectionDeferId=null,sx(h,g,x)}),i.previousSelection={start:g,end:x,length:Math.abs(x-g)})},i.getSelection=function(){return m7(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(g){i.setSelection(g,g)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var g=i.maskOptions,x=g.mask,w=g.maskChar,h=g.permanents,p=g.formatChars;return{mask:x,maskChar:w,permanents:h,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:p}},i.isInputAutofilled=function(g,x,w,h){var p=i.getInputDOMNode();try{if(p.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||h.end<w.length&&x.end===g.length},i.onChange=function(g){var x=ki(ki(i)).beforePasteState,w=ki(ki(i)).previousSelection,h=i.props.beforeMaskedValueChange,p=i.getInputValue(),b=i.value,C=i.getSelection();i.isInputAutofilled(p,C,b,w)&&(b=Un(i.maskOptions,""),w={start:0,end:0,length:0}),x&&(w=x.selection,b=x.value,C={start:w.start+p.length,end:w.start+p.length,length:0},p=b.slice(0,w.start)+p+b.slice(w.end),i.beforePasteState=null);var S=w7(i.maskOptions,p,C,b,w),P=S.enteredString,E=S.selection,_=S.value;if(Ct(h)){var $=h({value:_,selection:E},{value:b,selection:w},P,i.getBeforeMaskedValueChangeConfig());_=$.value,E=$.selection}i.setInputValue(_),Ct(i.props.onChange)&&i.props.onChange(g),i.isWindowsPhoneBrowser?i.setSelection(E.start,E.end,{deferred:!0}):i.setSelection(E.start,E.end)},i.onFocus=function(g){var x=i.props.beforeMaskedValueChange,w=i.maskOptions,h=w.mask,p=w.prefix;if(i.focused=!0,i.mounted=!0,h){if(i.value)Jo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var b=Un(i.maskOptions,p),C=Un(i.maskOptions,b),S=Jo(i.maskOptions,C),P=fa(i.maskOptions,S),E={start:P,end:P};if(Ct(x)){var _=x({value:C,selection:E},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());C=_.value,E=_.selection}var $=C!==i.getInputValue();$&&i.setInputValue(C),$&&Ct(i.props.onChange)&&i.props.onChange(g),i.setSelection(E.start,E.end)}i.runSaveSelectionLoop()}Ct(i.props.onFocus)&&i.props.onFocus(g)},i.onBlur=function(g){var x=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&cx(i.maskOptions,i.value)){var h="";Ct(x)&&(h=x({value:h,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var p=h!==i.getInputValue();p&&i.setInputValue(h),p&&Ct(i.props.onChange)&&i.props.onChange(g)}Ct(i.props.onBlur)&&i.props.onBlur(g)},i.onMouseDown=function(g){if(!i.focused&&document.addEventListener){i.mouseDownX=g.clientX,i.mouseDownY=g.clientY,i.mouseDownTime=new Date().getTime();var x=function w(h){if(document.removeEventListener("mouseup",w),i.focused){var p=Math.abs(h.clientX-i.mouseDownX),b=Math.abs(h.clientY-i.mouseDownY),C=Math.max(p,b),S=new Date().getTime()-i.mouseDownTime;(C<=10&&S<=200||C<=5&&S<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",x)}Ct(i.props.onMouseDown)&&i.props.onMouseDown(g)},i.onPaste=function(g){Ct(i.props.onPaste)&&i.props.onPaste(g),g.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(g){i.props.children==null&&Ct(i.props.inputRef)&&i.props.inputRef(g)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,c=r.beforeMaskedValueChange,f=r.defaultValue,d=r.value;i.maskOptions=lx(o,a,l),f==null&&(f=""),d==null&&(d=f);var v=ff(d);if(i.maskOptions.mask&&(s||v)&&(v=Un(i.maskOptions,v),Ct(c))){var m=r.value;r.value==null&&(m=f),v=c({value:v,selection:null},{value:m=ff(m),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=v,i}f7(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=S7(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,c=i.formatChars,f=this.maskOptions,d=a||this.isFocused(),v=this.props.value!=null,m=v?ff(this.props.value):this.value,g=r?r.start:null;if(this.maskOptions=lx(l,s,c),this.maskOptions.mask){!f.mask&&this.isFocused()&&this.runSaveSelectionLoop();var x=this.maskOptions.mask&&this.maskOptions.mask!==f.mask;if(f.mask||v||(m=this.getInputValue()),(x||this.maskOptions.mask&&(m||d))&&(m=Un(this.maskOptions,m)),x){var w=Jo(this.maskOptions,m);(g===null||w<g)&&(g=gk(this.maskOptions,m)?w:fa(this.maskOptions,w))}!this.maskOptions.mask||!cx(this.maskOptions,m)||d||v&&this.props.value||(m="");var h={start:g,end:g};if(Ct(o)){var p=o({value:m,selection:h},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());m=p.value,h=p.selection}this.value=m;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):x&&this.forceUpdate();var C=!1;h.start!=null&&h.end!=null&&(C=!r||r.start!==h.start||r.end!==h.end),(C||b)&&this.setSelection(h.start,h.end)}else f.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&pf(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=p7(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){Ct(o)||ax(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=rh({},a);l.forEach(function(f){return delete s[f]}),r=o(s),l.filter(function(f){return r.props[f]!=null&&r.props[f]!==a[f]}).length&&ax(!1)}else r=df.createElement("input",rh({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),r=df.cloneElement(r,c)},t}(df.Component),_7=k7;mk.exports=_7;var E7=mk.exports;const P7=Ba(E7);k.div`
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
`;const hf=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,mf=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,gf=k.input`
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
`;const vf=k.span`
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
`;const T7=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Контактні дані"}),u.jsxs(hf,{children:[u.jsx(mf,{children:"Прізвище та ім’я"}),u.jsx(gf,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&u.jsx(vf,{children:n.fullName})]}),u.jsxs(hf,{children:[u.jsx(mf,{children:"Номер телефону"}),u.jsx(P7,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>u.jsx(gf,{...i,type:"tel"})}),n.phone&&u.jsx(vf,{children:n.phone})]}),u.jsxs(hf,{children:[u.jsx(mf,{children:"E-mail"}),u.jsx(gf,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&u.jsx(vf,{children:n.email})]})]})},j7=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return u.jsxs("div",{style:{marginBottom:"20px"},children:[u.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),u.jsx(Bu,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&u.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},O7=e=>{if(!e)return"";const t=e.replace(/\D/g,"");return t.length!==10?e:`+38 (${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,8)}-${t.slice(8,10)}`},dx=async(e,t,n)=>{if(!(e!=null&&e.documentId)||!t)return;const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${e.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!r.ok)throw new Error("Не вдалося отримати кошик");const{data:i}=await r.json();await Promise.all(i.map(o=>fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}}))),n(nr())},fx={}.VITE_NP_API_KEY,px="https://api.novaposhta.ua/v2.0/json/",$7=()=>{const e=Ue(N=>N.cart.items),t=Ke(),n=It(),r=localStorage.getItem("token");console.log(e,"cartitmes");const i=y.useMemo(()=>{const N=localStorage.getItem("user");return N?JSON.parse(N):null},[]);console.log(i);const[o,a]=y.useState({fullName:"",phone:"+38(0",email:"",city:"",postOffice:""});console.log(o);const[l,s]=y.useState(""),[c,f]=y.useState(null),[d,v]=y.useState(null),[m,g]=y.useState(null),[x,w]=y.useState(null),[h,p]=y.useState([]),[b,C]=y.useState([]),[S,P]=y.useState(null),[E,_]=y.useState(!1);console.log("noCall",E);const $=y.useRef(!1);y.useEffect(()=>{!i||$.current||($.current=!0,a({fullName:`${i.last_name||""} ${i.first_name||""}`.trim(),phone:O7(i.phone),email:i.email||""}))},[i]);const I=e.filter(N=>N.available!==!1&&N.stock!==0).reduce((N,V)=>N+(V.new_price??V.price)*V.quantity,0),M=e.filter(N=>N.available!==!1&&N.stock!==0),D=e.filter(N=>N.available!==!1&&N.stock!==0).reduce((N,V)=>N+V.quantity,0),A=(()=>{const N=new Date().getFullYear().toString().slice(-2),V=Date.now().toString().slice(-4),H=Math.floor(100+Math.random()*900);return`${N}${V}${H}`})();y.useEffect(()=>{if(l.length<2)return;const N=setTimeout(async()=>{try{const V=await fetch(px,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:fx,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:l}})});if(!V.ok)throw new Error(`HTTP помилка: ${V.status}`);const H=await V.json();H.success&&Array.isArray(H.data)?p(H.data.map(G=>({value:G.Ref,label:G.Description}))):(console.warn("API Нової Пошти повернуло помилку або порожній список міст:",H.errors),p([]))}catch(V){console.error("Не вдалося завантажити міста:",V)}},500);return()=>clearTimeout(N)},[l]),y.useEffect(()=>{if(!c||d!=="nova")return;(async()=>{try{const V=await fetch(px,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:fx,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:c.value}})});if(!V.ok)throw new Error(`HTTP помилка: ${V.status}`);const H=await V.json();H.success&&Array.isArray(H.data)?C(H.data.map(G=>({value:G.Ref,label:G.Description}))):(console.warn("API Нової Пошти повернуло помилку або порожній список відділень:",H.errors),C([]))}catch(V){console.error("Не вдалося завантажити відділення Нової Пошти:",V)}})()},[c,d]);const L=N=>{f(N),a(V=>({...V,city:(N==null?void 0:N.label)||"",postOffice:""})),v(null),g(null),w(null)},R=()=>{const N={};return o.fullName.trim().split(" ").length<2&&(N.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(N.email="Некоректний email"),o.phone.replace(/\D/g,"").length<12&&(N.phone="Номер неповний"),c||(N.city=!0),d==="nova"&&!m&&(N.postOffice=!0),d==="ukr"&&!x&&(N.postOffice=!0),d||(N.delivery=!0),S||(N.payment=!0),N},z=y.useMemo(R,[o,d,m,x,c,S]),T=Object.keys(z).length===0&&e.length>0,O=async N=>{if(N.preventDefault(),!S){alert("Оберіть спосіб оплати");return}const V={"Content-Type":"application/json"};r&&(V.Authorization=`Bearer ${r}`);try{if(!(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:V,body:JSON.stringify({data:{name:o.fullName,phone:o.phone,email:o.email,city:o.city,date:new Date().toISOString(),products:e==null?void 0:e.map(W=>{var q;return{id:W==null?void 0:W.id,name:W==null?void 0:W.name,quantity:W==null?void 0:W.quantity,price:(W==null?void 0:W.new_price)??W.price,image:(q=W==null?void 0:W.images)==null?void 0:q[0].url,slug:W==null?void 0:W.slug}}),status_order:"pending",order_number:A,no_call:E,...(i==null?void 0:i.documentId)&&{user:i.documentId},payment_method:S==="liqpay"?"Онлайн (LiqPay)":S==="cod"?"Післяплата":S==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:d==="nova"?"Нова Пошта":d==="ukr"?"УкрПошта":"Самовивіз",delivery_address:d==="nova"?m==null?void 0:m.label:d==="ukr"?x:"Самовивіз"}})})).ok)throw new Error("Не вдалося створити замовлення");for(const W of e){const q=Math.max(0,W.stock-W.quantity);(await fetch(`https://backenddidiv-production.up.railway.app/api/products/${W.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",...r&&{Authorization:`Bearer ${r}`}},body:JSON.stringify({data:{stock:q,...q===0&&{sold_date:new Date().toISOString()}}})})).ok||console.error(`Не вдалося оновити stock товару ${W.name}`)}if(S==="liqpay"){const W=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:I,order_number:A})}),{data:q,signature:oe}=await W.json();await dx(i,r,n);const he=document.createElement("form");he.method="POST",he.action="https://www.liqpay.ua/api/3/checkout",he.innerHTML=`
        <input type="hidden" name="data" value="${q}" />
        <input type="hidden" name="signature" value="${oe}" />
      `,document.body.appendChild(he),he.requestSubmit();return}const G={...o,name:o.fullName,city:c.label,deliveryMethod:d==="nova"?"Нова Пошта":d==="ukr"?"УкрПошта":"Самовивіз",address:d==="nova"?m==null?void 0:m.label:d==="ukr"?x:"Самовивіз",products:e==null?void 0:e.map(W=>({id:W.id,name:W.name,quantity:W.quantity,price:W.new_price??W.price})),total:I,order_number:A,delivery_address:d==="nova"?m==null?void 0:m.label:d==="ukr"?x:"Самовивіз",payment_method:S==="liqpay"?"Онлайн (LiqPay)":S==="cod"?"Післяплата":S==="bank_transfer"?"Оплата за реквізитами":""};await dx(i,r,n),t("/order-confirmation",{state:{order:G}})}catch(H){console.error(H),alert("Помилка оформлення")}},F=y.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),B=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return u.jsx(n7,{children:u.jsxs(r7,{children:[u.jsxs(i7,{children:[u.jsx(T7,{formData:o,setFormData:a,errors:z}),u.jsx(NN,{cityOptions:h,selectedCity:c,onChange:L,onInputChange:s}),u.jsx(UN,{options:F,value:d,onChange:v,selectedCity:c}),u.jsx(WN,{deliveryMethod:d,officeOptions:b,selectedOffice:m,selectedUkrOffice:x,setSelectedOffice:g,setSelectedUkrOffice:w}),u.jsx(j7,{options:B,value:S,onChange:P,error:z.payment})]}),u.jsx(l7,{cartItems:M,totalAmount:I,totalQuantity:D,isFormValid:T,handleSubmit:O,setNoCall:_,noCall:E})]})})},I7=k.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,M7=k.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,zr=k.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,D7=k.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,L7=k.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,A7=k.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,R7=k.li`
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
`;const z7=k.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,hx=k.button`
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
`,F7=()=>{var v,m;const e=Ke(),t=Dn(),[n]=Qx(),r=It(),i=(v=t.state)==null?void 0:v.order,o=n.get("orderId"),[a,l]=y.useState(i||null),[s,c]=y.useState(!i);y.useEffect(()=>{r(nr())},[r]),y.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(g=>g.json()).then(g=>{var x;((x=g.data)==null?void 0:x.length)>0&&l(g.data[0]),c(!1)}).catch(()=>c(!1)):c(!1))},[o,i]);const d=((a==null?void 0:a.products)??[]).reduce((g,x)=>g+Number(x.new_price??x.price)*(x.quantity||1),0);return s?u.jsx("div",{children:"Завантаження..."}):a?u.jsxs(I7,{children:[u.jsx(M7,{children:"Дякуємо за ваше замовлення!"}),u.jsxs(zr,{children:["Ваше замовлення ",u.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),u.jsx(zr,{children:"Ми зв’яжемось з Вами в найближчий час"}),u.jsxs(D7,{children:[u.jsx(L7,{children:"Деталі замовлення:"}),u.jsx(A7,{children:(m=a.products)==null?void 0:m.map(g=>u.jsxs(R7,{children:[u.jsxs("span",{className:"item-info",children:[g.name," (x",g.quantity,")"]}),u.jsxs("span",{className:"item-price",children:[(g.new_price??g.price)*(g.quantity||1)," грн"]})]},g.id))}),u.jsxs(zr,{children:[u.jsx("strong",{children:"На суму:"})," ",d," грн."]}),u.jsxs(zr,{children:[u.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),u.jsxs(zr,{children:[u.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),u.jsxs(zr,{children:[u.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),u.jsxs(zr,{children:[u.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),u.jsxs(z7,{children:[u.jsx(hx,{onClick:()=>e("/"),children:"Повернутися на головну"}),u.jsx(hx,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):u.jsxs("div",{children:["Замовлення не знайдено",u.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},N7=k.section`
  background-color: var(--second-background);
`,B7=k.div`
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
`,V7=k.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,U7=k.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,W7=k.p`

  font-size: 16px;
  color: #666;
`,H7=k.section`
  margin-bottom: 50px;
`,G7=k.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,q7=k.section`
  margin-bottom: 60px;
`,Y7=k.h2`
  margin-bottom: 30px;
`,X7=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,As=k.div`
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
`,K7=()=>u.jsxs(N7,{children:[u.jsxs(B7,{children:[u.jsxs(V7,{children:[u.jsx(U7,{children:"Про Дідів Хлів"}),u.jsx(W7,{children:"Даємо друге життя якісним велозапчастинам"})]}),u.jsxs(H7,{children:[u.jsx(G7,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),u.jsx(q2,{})]}),u.jsxs(q7,{children:[u.jsx(Y7,{children:"Наша майстерня"}),u.jsxs(X7,{children:[u.jsx(As,{color:"#e2e2e2",children:"Фото майстерні"}),u.jsx(As,{color:"#d1d1d1",children:"Процес діагностики"}),u.jsx(As,{color:"#bcbcbc",children:"Склад запчастин"}),u.jsx(As,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),Q7=()=>{const{pathname:e}=Dn();return y.useEffect(()=>{window.scrollTo(0,0)},[e]),null},Z7=k.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,J7=k.div`
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
`,e9=k.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,t9=k.p`
  color: #585555;
  margin-bottom: 40px;
`,n9=k.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,r9=k.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Rs=k.div`
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
`,i9=k.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,o9=k.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,a9=k.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,s9=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,mx=k.a`
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
`;const l9=k.div`
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

 
`,c9=()=>u.jsx(Z7,{children:u.jsxs(J7,{children:[u.jsx(e9,{children:"Контакти"}),u.jsx(t9,{children:"Зв’яжіться з нами для консультації або замовлення"}),u.jsxs(n9,{children:[u.jsxs(r9,{children:[u.jsxs(Rs,{children:[u.jsx("h3",{children:"Адреса"}),u.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),u.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),u.jsxs(Rs,{children:[u.jsx("h3",{children:"Телефон"}),u.jsx("p",{children:"+38 (097) 123-45-67"})]}),u.jsxs(Rs,{children:[u.jsx("h3",{children:"Email"}),u.jsx("p",{children:"didivhliv.com"})]}),u.jsxs(Rs,{children:[u.jsx("h3",{children:"Графік роботи"}),u.jsx("p",{children:"З 11:00 - 20:00"}),u.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),u.jsxs(i9,{children:[u.jsx(o9,{children:"Ми в соцмережах"}),u.jsx(a9,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),u.jsxs(s9,{children:[u.jsxs(mx,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-instagram`})}),u.jsx("span",{children:"Instagram"})]}),u.jsxs(mx,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-telegram`})}),u.jsx("span",{children:"Telegram"})]})]}),u.jsx(l9,{children:"Приєднуйся до спільноти!"})]})]})]})}),u9=k.section`
  background-color:  var(--second-background);
`,d9=k.div`
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
  
`,f9=k.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,p9=k.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,h9=k.div`
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
`,m9=k.div`
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
`,g9=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;

`,v9=k.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,x9=k.p`
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
`;const y9=k.div.attrs({className:"card-buttons"})`
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
`,xk=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
  margin-top: auto; 
 padding-top: 40px; 
`,Yi=k.button`
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
`,b9=k.div`
  position: relative;
  display: inline-block;
  

`,w9=k.button`
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
`,S9=k.div`
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
`,_i=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,yk=k.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,bk=k(Pe)`
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
  
`,C9=k.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,k9=k.div`
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
`,_9=k.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,E9=k.h1`

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

`,P9=k.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,T9=k.div`
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
`;k.div`
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
`;const wk=k.div`
  position: relative;
`,j9=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 padding: 10px;
`,O9=k.p`
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
`,$9=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px 10px;
`;k.span`
  font-size: 16px;
  font-weight: 700;

  &:last-child {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    font-weight: 400;
  }
`;const I9=k.div.attrs({className:"card-buttons"})`
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
`,xc=k.button`
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
`;const M9=k.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,D9=k.div`
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
`,Ei=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,L9=k.button`
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
`,A9=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(!0),i=Ue(S=>S.favorites.items),o=Ue(S=>S.cart.items),[a,l]=y.useState(!1),[s,c]=y.useState("date"),[f,d]=y.useState("asc"),[v,m]=y.useState(1),[g,x]=y.useState(1),w=Ke(),h=It(),p=y.useRef(null);y.useEffect(()=>{const S=P=>{p.current&&!p.current.contains(P.target)&&l(!1)};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[]),y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[v]),y.useEffect(()=>{(async()=>{const P=new Date,E=new Date;E.setDate(P.getDate()-7);const _=E.toISOString();try{r(!0);const $=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${_}&pagination[page]=${v}&pagination[pageSize]=24`);if(!$.ok)throw new Error(`HTTP error! Status: ${$.status}`);const I=await $.json();t(I.data),x(I.meta.pagination.pageCount)}catch($){console.error("Помилка при завантаженні продуктів:",$)}finally{r(!1)}})()},[v]);const b=y.useMemo(()=>{const S=[...e],P=E=>E.new_price&&E.new_price<E.price?E.new_price:E.price;switch(s){case"name":return S.sort((E,_)=>f==="asc"?E.name.localeCompare(_.name):_.name.localeCompare(E.name));case"price":return S.sort((E,_)=>{const $=P(E),I=P(_);return f==="asc"?$-I:I-$});case"date":return S.sort((E,_)=>f==="asc"?new Date(E.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(E.createdAt));default:return S}},[s,e,f]),C=(S,P)=>{P.stopPropagation();const E=i.some(_=>_.id===(S==null?void 0:S.id));di(S,E,h,K)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):b.length===0?u.jsxs(yk,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),u.jsxs(bk,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Uc,{size:24})]})]}):u.jsxs(u9,{children:[u.jsxs(d9,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(f9,{children:[u.jsx(p9,{children:"Нові товари "}),u.jsxs(b9,{ref:p,children:[u.jsxs(w9,{onClick:()=>l(S=>!S),children:["Сортування",u.jsx(Vc,{strokeWidth:.9,size:22})]}),a&&u.jsxs(S9,{children:[u.jsx(_i,{onClick:()=>{c("name"),d("asc"),l(!1)},children:"А-Я"}),u.jsx(_i,{onClick:()=>{c("name"),d("desc"),l(!1)},children:"Я-А"}),u.jsx(_i,{onClick:()=>{c("price"),d("asc"),l(!1)},children:"Ціна ↑"}),u.jsx(_i,{onClick:()=>{c("price"),d("desc"),l(!1)},children:"Ціна ↓"}),u.jsx(_i,{onClick:()=>{c("date"),d("desc"),l(!1)},children:"Спочатку новіші"}),u.jsx(_i,{onClick:()=>{c("date"),d("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(h9,{children:b.map(S=>{var R,z;const P=i.some(T=>T.id===S.id),E=(S==null?void 0:S.available)??!0,_=(S==null?void 0:S.stock)===0,$=o.find(T=>T.id===S.id),M=($?$.quantity:0)>=(S.stock||0),D=S.new_price&&S.new_price<S.price,j=D?S.new_price:S.price,A=D?Math.round((S.price-S.new_price)/S.price*100):0,L=async(T,O)=>{if(O.stopPropagation(),M){K.error("Товар уже у кошику");return}await yo(T,1,h,K)};return u.jsxs(m9,{onClick:()=>w(`/product/${S.slug??S.id}`),$soldOut:_,children:[!E&&u.jsx(gm,{children:"Бронь"}),u.jsx(vm,{children:"Новинка"}),u.jsxs(wk,{children:[_&&u.jsx(qc,{children:"Продано"}),u.jsx(g9,{src:((z=(R=S.images)==null?void 0:R[0])==null?void 0:z.url)||er,alt:S.name})]}),u.jsx(x9,{children:S.name}),u.jsxs(v9,{children:[u.jsx(Du,{children:u.jsxs(Lu,{children:[u.jsxs(Au,{$discount:D,children:[j.toLocaleString()," грн"]}),D&&u.jsxs(Ru,{children:[S.price.toLocaleString()," грн"]}),D&&u.jsxs(zu,{children:["-",A,"%"]})]})}),u.jsxs(y9,{children:[E&&!_&&u.jsx(xc,{onClick:T=>L(S,T),children:u.jsx(xo,{size:24,color:$?"var(--orange-color)":"black",strokeWidth:2})}),!_&&u.jsx(xc,{onClick:T=>C(S,T),children:u.jsx(Xa,{size:24,fill:P?"#ff4d4f":"none",color:P?"#ff4d4f":"#000000",strokeWidth:P?1:2})})]})]})]},S.id)})}),u.jsxs(xk,{children:[u.jsx(Yi,{onClick:()=>m(S=>Math.max(S-1,1)),disabled:v===1,children:"Назад"}),Array.from({length:g},(S,P)=>u.jsx(Yi,{onClick:()=>m(P+1),active:v===P+1,children:P+1},P)),u.jsx(Yi,{onClick:()=>m(S=>Math.min(S+1,g)),disabled:v===g,children:"Вперед"})]})]})," "]})},R9=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(!0),[i,o]=y.useState(!1),[a,l]=y.useState("date"),[s,c]=y.useState("desc"),[f,d]=y.useState(1),v=24,m=Ke(),g=It(),x=Ue(_=>_.favorites.items),w=Ue(_=>_.cart.items),h=y.useRef(null);y.useEffect(()=>{const _=$=>{h.current&&!h.current.contains($.target)&&o(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),y.useEffect(()=>{(async()=>{const $="https://backenddidiv-production.up.railway.app";try{const M=await(await fetch(`${$}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json(),D=Date.now(),j=7*24*60*60*1e3,A=M.data.filter(L=>{if(L.stock>0||!L.sold_date)return!0;const R=new Date(L.sold_date).getTime();return D-R<j});t(A),r(!1)}catch(I){console.log(I)}})()},[]),y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[f]);const p=y.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort(($,I)=>s==="asc"?$.name.localeCompare(I.name):I.name.localeCompare($.name));case"price":return _.sort(($,I)=>s==="asc"?$.new_price-I.new_price:I.new_price-$.new_price);case"date":return _.sort(($,I)=>s==="asc"?new Date($.createdAt)-new Date(I.createdAt):new Date(I.createdAt)-new Date($.createdAt));default:return _}},[a,e,s]),b=f*v,C=b-v,S=p.slice(C,b),P=Math.ceil(e.length/v),E=(_,$)=>{$.stopPropagation();const I=x.some(M=>M.id===(_==null?void 0:_.id));di(_,I,g,K)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?u.jsxs(yk,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),u.jsxs(bk,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Uc,{size:24})]})]}):u.jsx(C9,{children:u.jsxs(k9,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(_9,{children:[u.jsx(E9,{children:"Акційні товари"}),u.jsxs(M9,{ref:h,children:[u.jsxs(L9,{onClick:()=>o(_=>!_),children:["Сортування",u.jsx(Vc,{strokeWidth:.9,size:22})]}),i&&u.jsxs(D9,{children:[u.jsx(Ei,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),u.jsx(Ei,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),u.jsx(Ei,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),u.jsx(Ei,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),u.jsx(Ei,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),u.jsx(Ei,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(P9,{children:S.map(_=>{var F,B;const $=_.new_price&&_.new_price<_.price,I=_!=null&&_.createdAt?Date.now()-new Date(_.createdAt).getTime()<7*24*60*60*1e3:!1,M=$?_.new_price:_.price,D=(_==null?void 0:_.available)??!0,j=(_==null?void 0:_.stock)===0,A=$?Math.round((_.price-_.new_price)/_.price*100):0,L=x.some(N=>N.id===_.id),R=w.find(N=>N.id===_.id),T=(R?R.quantity:0)>=(_.stock||0),O=async(N,V)=>{if(V.stopPropagation(),T){K.error("Товар уже у кошику");return}await yo(_,1,g,K)};return u.jsxs(T9,{onClick:()=>m(`/product/${_.slug??_.id}`),style:{cursor:"pointer"},$soldOut:j,children:[" ",I&&u.jsx(vm,{children:"Новинка"}),!D&&u.jsx(gm,{children:"Бронь"}),u.jsxs(wk,{children:[j&&u.jsx(qc,{children:"Продано"}),u.jsx(j9,{src:((B=(F=_.images)==null?void 0:F[0])==null?void 0:B.url)||"/nofoto.png"})]}),u.jsx(O9,{children:_.name}),u.jsxs($9,{children:[u.jsx(Du,{children:u.jsxs(Lu,{children:[u.jsxs(Au,{$discount:$,children:[M.toLocaleString()," грн"]}),$&&u.jsxs(Ru,{children:[_.price.toLocaleString()," грн"]}),$&&u.jsxs(zu,{children:["-",A,"%"]})]})}),u.jsxs(I9,{children:[D&&!j&&u.jsx(xc,{onClick:N=>O(_,N),children:u.jsx(xo,{size:24,color:R?"var(--orange-color)":"black",strokeWidth:2})}),!j&&u.jsx(xc,{onClick:N=>E(_,N),children:u.jsx(Xa,{size:24,fill:L?"#ff4d4f":"none",color:L?"#ff4d4f":"#000000",strokeWidth:L?1:2})})]})]})]},_.id)})}),p.length>v&&u.jsxs(xk,{children:[u.jsx(Yi,{onClick:()=>d(_=>Math.max(_-1,1)),disabled:f===1,children:"Назад"}),Array.from({length:P},(_,$)=>u.jsx(Yi,{onClick:()=>d($+1),active:f===$+1,children:$+1},$)),u.jsx(Yi,{onClick:()=>d(_=>Math.min(_+1,P)),disabled:f===P,children:"Вперед"})]})]})})},z9=k.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;

`,F9=k.div`
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
`,N9=k.button`
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
`,B9=k.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width:768px){
    font-size:42px;
  }
`,V9=k.p`
  text-align:center;
  color:#8d837d;

  margin-bottom:32px;
`,U9=k.div`
  display:flex;

  background:#efe8df;

  border-radius:40px;

  padding:5px;

  margin-bottom:35px;
`,gx=k.button`
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
`,Wo=k.input`
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
`,W9=k.button`
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
`,vx=k.div`
  position: relative;
  width: 100%;
 
`,xx=k.button`
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
`,H9=k.p`
  margin-top:28px;

  text-align:center;

  color:#8b817a;

  font-size:15px;

  span{
      color:#ff7a00;
      cursor:pointer;
      font-weight:600;
  }
`,G9=k.p`
  margin-bottom:20px;

  text-align:center;

  color:#8b817a;

  font-size:15px;

  span{
      color:#ff7a00;
      cursor:pointer;
      font-weight:600;
  }
`,xf=k.p`
  margin: -8px 0 8px;
  color: var(--red-color);
  font-size: 15px;
  margin-bottom: 20px;
`,q9=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[product][documentId][$eq]=${r.documentId}&populate=user`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=l.user||[];if(s.some(d=>d.documentId===n))return;const f=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{user:[...s.map(d=>d.documentId),n]}})});f.ok||console.error(await f.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:[n]}})});a.ok||console.error(await a.json())}))},Y9=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${n}&filters[product][documentId][$eq]=${r.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{quantity:r.quantity}})});s.ok||console.error(await s.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:n,quantity:r.quantity}})});a.ok||console.error(await a.json())}))},X9=async(e,t)=>{const n=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${t}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${e}`}});if(!n.ok)throw new Error("Не вдалося отримати кошик");return(await n.json()).data.map(i=>i.product?{...i.product,quantity:i.quantity}:null).filter(Boolean)},K9=({isOpen:e,onClose:t,mode:n,setMode:r,localFavorites:i,localCartItems:o})=>{const[a,l]=y.useState(!1),[s,c]=y.useState(!1),[f,d]=y.useState({email:"",password:"",confirmPassword:""});console.log(f);const[v,m]=y.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),g=It();if(y.useEffect(()=>{const C=S=>{S.key==="Escape"&&t()};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[t]),!e)return null;const x=C=>{const{name:S,value:P}=C.target;m(E=>({...E,[S]:P})),d(E=>({...E,[S]:""}))},w=C=>{C.target===C.currentTarget&&t()},h=async()=>{d({email:"",password:"",confirmPassword:""});const C=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:v.email,password:v.password})}),S=await C.json();if(!C.ok){d({email:"Неправильна електронна пошта або пароль",password:"Неправильна електронна пошта або пароль",confirmPassword:""});return}localStorage.setItem("token",S.jwt),localStorage.setItem("user",JSON.stringify(S.user)),await q9(i,S.jwt,S.user.documentId),await Y9(o,S.jwt,S.user.documentId);const P=await X9(S.jwt,S.user.documentId);g(cS(P)),t()},p=async()=>{var E,_,$,I,M,D;d({email:"",password:"",confirmPassword:""});const C=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!v.email.trim()){d(j=>({...j,email:"Введіть електронну пошту"}));return}if(!C.test(v.email)){d(j=>({...j,email:"Введіть правильну електронну пошту"}));return}if(!v.password){d(j=>({...j,password:"Введіть пароль"}));return}if(v.password.length<6){d(j=>({...j,password:"Пароль має містити щонайменше 6 символів"}));return}if(v.password!==v.confirmPassword){d(j=>({...j,confirmPassword:"Паролі не співпадають"}));return}const S=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:v.email,email:v.email,password:v.password})}),P=await S.json();if(!S.ok){(_=(E=P.error)==null?void 0:E.message)!=null&&_.toLowerCase().includes("already")||(I=($=P.error)==null?void 0:$.message)!=null&&I.toLowerCase().includes("taken")||(D=(M=P.error)==null?void 0:M.message)!=null&&D.toLowerCase().includes("email")?d(j=>({...j,email:"Ця пошта вже зареєстрована"})):d(j=>{var A;return{...j,email:((A=P.error)==null?void 0:A.message)||"Не вдалося зареєструватися"}});return}localStorage.setItem("token",P.jwt);try{const j=localStorage.getItem("token");localStorage.setItem("user",JSON.stringify(P.user));const A=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${P.user.id}`,{method:"PUT",headers:{Authorization:`Bearer ${j}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:v.first_name,last_name:v.last_name})});if(!A.ok)throw new Error("Помилка оновлення");const L=await A.json();localStorage.setItem("user",JSON.stringify(L))}catch(j){console.error(j),alert("Не вдалося оновити дані")}t()},b=async()=>{if(d({email:"",password:"",confirmPassword:""}),!v.email.trim()){d(S=>({...S,email:"Введіть електронну пошту"}));return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)){d(S=>({...S,email:"Введіть правильну електронну пошту"}));return}try{const S=await fetch("https://backenddidiv-production.up.railway.app/api/auth/forgot-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:v.email})}),P=await S.json();if(console.log("Forgot password response:",P),!S.ok){d(E=>{var _;return{...E,email:((_=P.error)==null?void 0:_.message)||"Не вдалося надіслати лист"}});return}alert("Лист для відновлення пароля надіслано на вашу пошту")}catch(S){console.error(S),d(P=>({...P,email:"Помилка з’єднання із сервером"}))}};return u.jsxs(u.Fragment,{children:[" ",u.jsx(Ln,{autoClose:1500}),u.jsx(z9,{onClick:w,children:u.jsxs(F9,{children:[u.jsx(N9,{onClick:t,children:"×"}),u.jsx(B9,{children:n==="login"?"Вхід":n==="register"?"Реєстрація":"Відновлення пароля"}),u.jsx(V9,{children:n==="login"?"Увійдіть до свого акаунта":n==="register"?"Створіть новий акаунт":"Введіть email, щоб отримати посилання для відновлення пароля"}),u.jsxs(U9,{children:[u.jsx(gx,{active:n==="login",onClick:()=>r("login"),children:"Вхід"}),u.jsx(gx,{active:n==="register",onClick:()=>r("register"),children:"Реєстрація"})]}),n==="register"&&u.jsxs(u.Fragment,{children:[u.jsx(Wo,{name:"first_name",value:v.first_name,onChange:x,placeholder:"Ім'я"}),u.jsx(Wo,{name:"last_name",value:v.last_name,onChange:x,placeholder:"Прізвище"})]}),u.jsx(Wo,{name:"email",type:"email",value:v.email,onChange:x,placeholder:"Email"}),f.email&&u.jsx(xf,{children:f.email}),n!=="forgotPassword"&&u.jsxs(u.Fragment,{children:[u.jsxs(vx,{children:[u.jsx(Wo,{name:"password",type:a?"text":"password",value:v.password,onChange:x,placeholder:"Пароль"}),u.jsx(xx,{type:"button",onClick:()=>l(C=>!C),children:a?u.jsx(K0,{size:20}):u.jsx(Q0,{size:20})})]}),f.password&&u.jsx(xf,{children:f.password})]}),n==="register"&&u.jsxs(vx,{children:[u.jsx(Wo,{name:"confirmPassword",type:s?"text":"password",value:v.confirmPassword,onChange:x,placeholder:"Повторіть пароль"}),u.jsx(xx,{type:"button",onClick:()=>c(C=>!C),children:s?u.jsx(K0,{size:20}):u.jsx(Q0,{size:20})})]}),f.confirmPassword&&u.jsx(xf,{children:f.confirmPassword}),n==="login"&&u.jsx(G9,{children:u.jsx("span",{onClick:()=>r("forgotPassword"),children:"Забули пароль?"})}),u.jsx(W9,{onClick:n==="login"?h:n==="register"?p:b,children:n==="login"?"Увійти":n==="register"?"Зареєструватися":"Надіслати посилання"}),u.jsx(H9,{children:n==="login"?u.jsxs(u.Fragment,{children:["Немає акаунта?"," ",u.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):u.jsxs(u.Fragment,{children:["Вже є акаунт?"," ",u.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})," "]})},Q9=({isLoggedIn:e,children:t})=>e?t:u.jsx(B_,{to:"/",replace:!0}),Z9=k.main`
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
    grid-template-columns: 290px 1fr;
    gap: 40px;
    align-items: start;
  }

`,J9=k.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`,eB=k.aside`
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
`,tB=k.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,nB=k.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,rB=k.h3`
  margin-bottom: 4px;
`,iB=k.p`
  color: #777;
`,yx=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,zs=k(Kx)`
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
`,oB=k.div`
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
`,aB=k.div`
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
`,sB=k.h2`
  margin: 0 0 14px;

  text-align: center;

  color:var(--black-color);
  font-family: var(--second-font);

  font-size: 28px;
  font-weight: 300;
`,lB=k.p`
  margin: 0 auto 32px;
   font-family: var(--second-font);

  max-width: 360px;

  text-align: center;

  color: #3c3734;

  font-size: 16px;
  line-height: 1.6;
`,cB=k.div`
  display: flex;
  gap: 14px;

  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,uB=k.button`
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
`,dB=k.button`
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
`,Sk=({onClose:e,onConfirm:t})=>u.jsx(oB,{onClick:e,children:u.jsxs(aB,{onClick:n=>n.stopPropagation(),children:[u.jsx(sB,{children:"Вийти з акаунту?"}),u.jsx(lB,{children:"Ви впевнені, що хочете вийти з особистого кабінету?"}),u.jsxs(cB,{children:[u.jsx(uB,{onClick:e,children:"Скасувати"}),u.jsx(dB,{onClick:t,children:"Вийти"})]})]})}),fB=()=>{var c,f;const[e,t]=y.useState(""),[n,r]=y.useState(""),[i,o]=y.useState(!1),a=It(),l=Ke();y.useEffect(()=>{(async()=>{try{const v=localStorage.getItem("token"),g=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${v}`}})).json();t(g.first_name),r(g.email)}catch(v){console.error(v)}})()},[]);const s=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),a(Ja()),a(nr()),await Mu.purge(),l("/",{replace:!0})};return u.jsxs(eB,{children:[i&&u.jsx(Sk,{onClose:()=>o(!1),onConfirm:s}),u.jsxs(tB,{children:[u.jsx(nB,{children:((f=(c=e||e)==null?void 0:c[0])==null?void 0:f.toUpperCase())||"?"}),u.jsxs("div",{children:[u.jsx(rB,{children:e}),u.jsx(iB,{children:n})]})]}),u.jsxs(yx,{children:[u.jsxs(yx,{children:[u.jsx(zs,{to:"/account/profile",children:"Особисті дані"}),u.jsx(zs,{to:"/account/orders",children:"Замовлення"}),u.jsx(zs,{to:"/account/password",children:"Змінити пароль"})]}),u.jsx(zs,{as:"button",className:"logout",onClick:()=>o(!0),children:"Вийти"})]})]})};var hg={};hg.match=xB;hg.parse=Ck;var pB=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,hB=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,mB=/^(?:(min|max)-)?(.+)/,gB=/(em|rem|px|cm|mm|in|pt|pc)?$/,vB=/(dpi|dpcm|dppx)?$/;function xB(e,t){return Ck(e).some(function(n){var r=n.inverse,i=n.type==="all"||t.type===n.type;if(i&&r||!(i||r))return!1;var o=n.expressions.every(function(a){var l=a.feature,s=a.modifier,c=a.value,f=t[l];if(!f)return!1;switch(l){case"orientation":case"scan":return f.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=Sx(c),f=Sx(f);break;case"resolution":c=wx(c),f=wx(f);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=bx(c),f=bx(f);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,f=parseInt(f,10)||0;break}switch(s){case"min":return f>=c;case"max":return f<=c;default:return f===c}});return o&&!r||!o&&r})}function Ck(e){return e.split(",").map(function(t){t=t.trim();var n=t.match(pB),r=n[1],i=n[2],o=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(l){var s=l.match(hB),c=s[1].toLowerCase().match(mB);return{modifier:c[1],feature:c[2],value:s[2]}}),a})}function bx(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function wx(e){var t=parseFloat(e),n=String(e).match(vB)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function Sx(e){var t=parseFloat(e),n=String(e).match(gB)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var yB=hg.match,Cx=typeof window<"u"?window.matchMedia:null;function bB(e,t,n){var r=this,i;Cx&&!n&&(i=Cx.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=yB(e,t),this.media=e),this.addListener=o,this.removeListener=a,this.dispose=s;function o(c){i&&i.addListener(c)}function a(c){i&&i.removeListener(c)}function l(c){r.matches=c.matches,r.media=c.media}function s(){i&&i.removeListener(l)}}function wB(e,t,n){return new bB(e,t,n)}var SB=wB;const CB=Ba(SB);var kB=/[A-Z]/g,_B=/^ms-/,yf={};function EB(e){return"-"+e.toLowerCase()}function kk(e){if(yf.hasOwnProperty(e))return yf[e];var t=e.replace(kB,EB);return yf[e]=_B.test(t)?"-"+t:t}function PB(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let o=0;o<i;o++){const a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var _k={exports:{}},TB="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jB=TB,OB=jB;function Ek(){}function Pk(){}Pk.resetWarningCache=Ek;var $B=function(){function e(r,i,o,a,l,s){if(s!==OB){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Pk,resetWarningCache:Ek};return n.PropTypes=n,n};_k.exports=$B();var IB=_k.exports;const pe=Ba(IB),ht=pe.oneOfType([pe.string,pe.number]),mg={all:pe.bool,grid:pe.bool,aural:pe.bool,braille:pe.bool,handheld:pe.bool,print:pe.bool,projection:pe.bool,screen:pe.bool,tty:pe.bool,tv:pe.bool,embossed:pe.bool},Tk={orientation:pe.oneOf(["portrait","landscape"]),scan:pe.oneOf(["progressive","interlace"]),aspectRatio:pe.string,deviceAspectRatio:pe.string,height:ht,deviceHeight:ht,width:ht,deviceWidth:ht,color:pe.bool,colorIndex:pe.bool,monochrome:pe.bool,resolution:ht,type:Object.keys(mg)},{type:$V,...MB}=Tk,jk={minAspectRatio:pe.string,maxAspectRatio:pe.string,minDeviceAspectRatio:pe.string,maxDeviceAspectRatio:pe.string,minHeight:ht,maxHeight:ht,minDeviceHeight:ht,maxDeviceHeight:ht,minWidth:ht,maxWidth:ht,minDeviceWidth:ht,maxDeviceWidth:ht,minColor:pe.number,maxColor:pe.number,minColorIndex:pe.number,maxColorIndex:pe.number,minMonochrome:pe.number,maxMonochrome:pe.number,minResolution:ht,maxResolution:ht,...MB},DB={...mg,...jk};var LB={all:DB,types:mg,matchers:Tk,features:jk};const AB=e=>`not ${e}`,RB=(e,t)=>{const n=kk(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?AB(n):`(${n}: ${t})`},zB=e=>e.join(" and "),FB=e=>{const t=[];return Object.keys(LB.all).forEach(n=>{const r=e[n];r!=null&&t.push(RB(n,r))}),zB(t)},NB=y.createContext(void 0),BB=e=>e.query||FB(e),kx=e=>e?Object.keys(e).reduce((n,r)=>(n[kk(r)]=e[r],n),{}):void 0,Ok=()=>{const e=y.useRef(!1);return y.useEffect(()=>{e.current=!0},[]),e.current},VB=e=>{const t=y.useContext(NB),n=()=>kx(e)||kx(t),[r,i]=y.useState(n);return y.useEffect(()=>{const o=n();PB(r,o)||i(o)},[e,t]),r},UB=e=>{const t=()=>BB(e),[n,r]=y.useState(t);return y.useEffect(()=>{const i=t();n!==i&&r(i)},[e]),n},WB=(e,t)=>{const n=()=>CB(e,t||{},!!t),[r,i]=y.useState(n),o=Ok();return y.useEffect(()=>{if(o){const a=n();return i(a),()=>{a&&a.dispose()}}},[e,t]),r},HB=e=>{const[t,n]=y.useState(e.matches);return y.useEffect(()=>{const r=i=>{n(i.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},GB=(e,t,n)=>{const r=VB(t),i=UB(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const o=WB(i,r),a=HB(o),l=Ok();return y.useEffect(()=>{l&&n&&n(a)},[a]),y.useEffect(()=>()=>{o&&o.dispose()},[]),a},qB=k.div`
  margin-bottom: 24px;
`,YB=k.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,XB=k.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,KB=k.h3`
  margin-bottom: 4px;
`,QB=k.p`
  color: #777;
`,ZB=k.button`
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
`,JB=k.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`,Fs=k(Kx)`
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
`,eV=()=>{var g,x;const[e,t]=y.useState(!1),[n,r]=y.useState(!1),[i,o]=y.useState(""),[a,l]=y.useState(""),s=It(),c=Ke(),f=Dn(),d=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),s(Ja()),s(nr()),await Mu.purge(),c("/",{replace:!0})};y.useEffect(()=>{(async()=>{try{const h=localStorage.getItem("token"),b=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${h}`}})).json();o(b.first_name),l(b.email)}catch(h){console.error(h)}})()},[]);const m={"/account":"Особисті дані","/account/profile":"Особисті дані","/account/orders":"Замовлення","/account/favorites":"Обране","/account/password":"Змінити пароль"}[f.pathname]||"Особисті дані";return u.jsxs(qB,{children:[n&&u.jsx(Sk,{onClose:()=>r(!1),onConfirm:d}),u.jsxs(YB,{children:[u.jsx(XB,{children:((x=(g=i||i)==null?void 0:g[0])==null?void 0:x.toUpperCase())||"?"}),u.jsxs("div",{children:[u.jsx(KB,{children:i}),u.jsx(QB,{children:a})]})]}),u.jsxs(ZB,{onClick:()=>t(w=>!w),children:[m,e?u.jsx(EO,{size:22}):u.jsx(kO,{size:22})]}),e&&u.jsxs(JB,{children:[u.jsx(Fs,{to:"/account/profile",onClick:()=>t(!1),children:"Особисті дані"}),u.jsx(Fs,{to:"/account/orders",onClick:()=>t(!1),children:"Замовлення"}),u.jsx(Fs,{to:"/account/password",onClick:()=>t(!1),children:"Змінити пароль"}),u.jsx(Fs,{className:"logout",onClick:()=>r(!0),children:"Вийти"})]})]})},tV=()=>{const e=GB({maxWidth:767});return u.jsxs(Z9,{className:"container",children:[e?u.jsx(eV,{}):u.jsx(fB,{}),u.jsx(J9,{children:u.jsx(Yx,{})})]})},nV=k.div`
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
`,rV=k.h2`
  margin-bottom: 28px;
`,Ns=k.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,Bs=k.input`
  height: 52px;

  padding: 0 18px;

  border-radius: 14px;
  border: 1px solid #ddd;

  &:focus {
    outline: none;
    border-color: #ef7d1a;
  }
`,iV=k.button`
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
`,_x=()=>{const[e,t]=y.useState({first_name:"",last_name:"",email:"",phone:""}),[n,r]=y.useState({first_name:"",last_name:"",email:"",phone:""}),[i,o]=y.useState(null),[a,l]=y.useState(!0),s=Ke();y.useEffect(()=>{(async()=>{try{const m=localStorage.getItem("token"),g=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${m}`}});if(g.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),s("/login",{replace:!0});return}if(!g.ok)throw new Error(`HTTP error: ${g.status}`);const x=await g.json();o(x.id);const w={first_name:x.first_name||"",last_name:x.last_name||"",email:x.email||"",phone:x.phone||""};r(w),t(w)}catch(m){console.error(m)}finally{l(!1)}})()},[s]);const c=v=>{const{name:m,value:g}=v.target;r(x=>({...x,[m]:g}))},f=n.first_name!==e.first_name||n.last_name!==e.last_name||n.phone!==e.phone,d=async()=>{try{const v=localStorage.getItem("token"),m=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${i}`,{method:"PUT",headers:{Authorization:`Bearer ${v}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:n.first_name,last_name:n.last_name,phone:n.phone})});if(!m.ok)throw new Error("Помилка оновлення");const g=await m.json();localStorage.setItem("user",JSON.stringify(g)),t(n),K.success("Дані оновлено успішно")}catch(v){console.error(v),K.error("Не вдалось оновити дані")}};return a?u.jsx("p",{children:"Завантаження..."}):u.jsxs(nV,{children:[u.jsx(Ln,{autoClose:1500}),u.jsx(rV,{children:"Особисті дані"}),u.jsxs(Ns,{children:["Ім я",u.jsx(Bs,{name:"first_name",value:n.first_name,onChange:c})]}),u.jsxs(Ns,{children:["Прізвище",u.jsx(Bs,{name:"last_name",value:n.last_name,onChange:c})]}),u.jsxs(Ns,{children:["Email",u.jsx(Bs,{value:n.email,disabled:!0})]}),u.jsxs(Ns,{children:["Телефон",u.jsx(Bs,{name:"phone",value:n.phone,onChange:c})]}),u.jsx(iV,{onClick:d,disabled:!f,children:"Зберегти"})]})},oV=k.div`
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
`,aV=k.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,sV=k.div`
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
     box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  text-align: left;
`,lV=k.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 24px;
`,cV=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,uV=k.div`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`,dV=k.div`
  display: flex;
  flex-direction: column;
      align-items: flex-start;
      align-items: flex-start;
       gap: 8px;
`,fV=k.div`
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
`,pV=k.span`
  font-family: var(--second-font);
  font-weight: 700;
  font-size: 16px;
`,hV=k.p`
  font-family: var(--second-font);
  font-weight: 400;
  font-size: 16px;
 `,mV=k.span`
  margin-left: auto;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;

  background-color: ${e=>e.status==="pending"?"#fff0e6":e.status==="confirmed"?"#e8f0fe":e.status==="paid"?"#e6f4ea":e.status==="delivered"?"#e0f2fe":e.status==="done"?"#dcfce7":e.status==="cancelled"?"#fce8e6":"#f1f3f4"};

  color: ${e=>e.status==="pending"?"#d97706":e.status==="confirmed"?"#1a73e8":e.status==="paid"?"#137333":e.status==="delivered"?"#0369a1":e.status==="done"?"#15803d":e.status==="cancelled"?"#d93025":"#5f6368"};
`,gV=k.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,vV=k.div`
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
`,xV=k.div`
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
`,yV=k.div`
  font-family: var(--second-font);
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px dashed #e0e0e0;
  font-size: 13px;
  color: #555;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,bV=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(!0),i=localStorage.getItem("token"),o=(()=>{try{return JSON.parse(localStorage.getItem("user")||"null")}catch{return null}})();console.log("orders",e);const a=Ke(),l={pending:"Створено",confirmed:"Підтверджено",paid:"Сплачено",delivered:"Доставлено",done:"Завершено",cancelled:"Скасовано"};return y.useEffect(()=>{if(!i||!(o!=null&&o.email)){r(!1);return}(async()=>{try{const c=await fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[email][$eq]=${encodeURIComponent(o.email)}`,{headers:{Authorization:`Bearer ${i}`}});if(c.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),a("/login",{replace:!0});return}if(!c.ok)throw new Error(`HTTP ${c.status}`);const f=await c.json(),d=Array.isArray(f)?f:f.data||[];t(d)}catch(c){console.error("Помилка завантаження замовлень:",c)}finally{r(!1)}})()},[i,o==null?void 0:o.email,a]),u.jsx(oV,{children:u.jsx(aV,{children:u.jsxs(sV,{children:[u.jsx(lV,{children:"Мої замовлення"}),n?u.jsx("p",{children:"Завантаження замовлень..."}):e.length===0?u.jsx("p",{children:"У вас поки немає замовлень."}):u.jsx(cV,{children:[...e].sort((s,c)=>{var v,m;const f=new Date(((v=s.attributes)==null?void 0:v.date)||s.date);return new Date(((m=c.attributes)==null?void 0:m.date)||c.date)-f}).map(s=>{const c=s.attributes||s,f=typeof c.products=="string"?JSON.parse(c.products):c.products||[];return u.jsxs(uV,{children:[u.jsxs(fV,{children:[u.jsxs(dV,{children:[u.jsxs(pV,{children:["№ ",c.order_number]}),c.date&&u.jsxs(hV,{children:["Дата створення замовлення:"," ",new Date(c.date).toLocaleDateString("uk-UA")]})]}),u.jsx(mV,{status:c.status_order,children:l[c.status_order]||"Створено"})]}),u.jsx(gV,{children:f.map(d=>u.jsxs(vV,{onClick:()=>a(`/product/${d.slug}`),children:[u.jsx("img",{src:d.image||er,alt:d.name}),u.jsxs(xV,{children:[u.jsx("p",{children:d.name}),u.jsxs("span",{children:[d.quantity," шт. × ",d.price," грн"]})]})]},d.id))}),u.jsxs(yV,{children:[c.city&&u.jsxs("span",{children:[u.jsx("b",{children:"Місто:"})," ",c.city]}),c.delivery_method&&u.jsxs("span",{children:[u.jsx("b",{children:"Доставка:"})," ",c.delivery_method]}),c.delivery_address&&u.jsxs("span",{children:[u.jsx("b",{children:"Адреса:"})," ",c.delivery_address]}),c.ttn&&u.jsxs("span",{children:[u.jsx("b",{children:"ТТН:"})," ",c.ttn]})]})]},s.id||c.order_number)})})]})})})},wV=k.div`
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
`,SV=k.div`
  width: 100%;
  max-width: 500px;
  margin: 60px auto;
`,Ex=k.h1`
  margin: 0 0 12px;

  font-size: 28px;
  line-height: 1.2;
  font-weight: 500;

  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`,CV=k.p`
  margin: 0 0 32px;

  font-size: 15px;
  line-height: 1.5;
  color: #777;

  text-align: center;
`,kV=k.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Px=k.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
`,Tx=k.input`
  width: 100%;
  box-sizing: border-box;

  padding: 14px 16px;

  border: 1px solid #d8d8d8;
  border-radius: 0;

  font-family: inherit;
  font-size: 15px;

  outline: none;

  transition: border-color 0.2s ease;

  &:focus {
    border-color: #222;
  }

  &::placeholder {
    color: #aaa;
  }
`,_V=k.button`
  width: 100%;
  padding: 15px 20px;

  border: none;
  border-radius: 0;

  background: #222;
  color: #fff;

  font-family: inherit;
  font-size: 15px;
  cursor: pointer;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`,EV=k.p`
  margin: 0;

  font-size: 14px;
  color: #c62828;
`,PV=k.p`
  margin: 20px 0 0;

  font-size: 15px;
  line-height: 1.5;
  color: #555;

  text-align: center;
`,TV=()=>{const[e]=Qx(),t=Ke(),n=e.get("code"),[r,i]=y.useState(""),[o,a]=y.useState(""),[l,s]=y.useState(""),[c,f]=y.useState(!1),[d,v]=y.useState(!1),m=async g=>{var x;if(g.preventDefault(),s(""),!n){s("Посилання для відновлення пароля недійсне.");return}if(r.length<6){s("Пароль має містити щонайменше 6 символів.");return}if(r!==o){s("Паролі не збігаються.");return}v(!0);try{const w=await fetch("https://backenddidiv-production.up.railway.app/api/auth/reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,password:r,passwordConfirmation:o})}),h=await w.json();if(!w.ok)throw new Error(((x=h==null?void 0:h.error)==null?void 0:x.message)||"Не вдалося змінити пароль.");f(!0),setTimeout(()=>{t("/login")},2500)}catch(w){s(w.message||"Сталася помилка. Спробуйте ще раз.")}finally{v(!1)}};return u.jsx(wV,{children:u.jsx(SV,{children:c?u.jsxs(u.Fragment,{children:[u.jsx(Ex,{children:"Пароль змінено"}),u.jsx(PV,{children:"Ваш пароль успішно змінено. Зараз ви будете перенаправлені на сторінку входу."})]}):u.jsxs(u.Fragment,{children:[u.jsx(Ex,{children:"Новий пароль"}),u.jsx(CV,{children:"Введіть новий пароль для вашого облікового запису."}),u.jsxs(kV,{onSubmit:m,children:[u.jsxs(Px,{children:["Новий пароль",u.jsx(Tx,{type:"password",value:r,onChange:g=>i(g.target.value),placeholder:"Введіть новий пароль",autoComplete:"new-password"})]}),u.jsxs(Px,{children:["Повторіть пароль",u.jsx(Tx,{type:"password",value:o,onChange:g=>a(g.target.value),placeholder:"Повторіть новий пароль",autoComplete:"new-password"})]}),l&&u.jsx(EV,{children:l}),u.jsx(_V,{type:"submit",disabled:d,children:d?"Збереження...":"Змінити пароль"})]})]})})})};function jV(){const e=It(),[t,n]=y.useState(!1),[r,i]=y.useState("login"),o=!!localStorage.getItem("token"),a=localStorage.getItem("token"),l=JSON.parse(localStorage.getItem("user")||"null"),s=l==null?void 0:l.documentId,c=Ue(d=>d.favorites.items),f=Ue(d=>d.cart.items);return y.useEffect(()=>{if(!a)return;(async()=>{try{const v=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${a}`}});if(v.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),e(nr()),e(Ja()),window.location.reload();return}v.ok||console.error("Auth check error:",v.status)}catch(v){console.error("Помилка перевірки авторизації:",v)}})()},[a,e]),y.useEffect(()=>{if(!a||!s)return;(async()=>{const v=localStorage.getItem("token");if(!v)return;const x=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${s}&populate=product.images`,{headers:{Authorization:`Bearer ${v}`}})).json()).data.map(w=>({...w.product,favoriteId:w.id,favoriteDocumentId:w.documentId}));e(G$(x))})()},[s,e,a]),u.jsxs(P3,{children:[u.jsx(cM,{}),u.jsx(Q7,{}),u.jsxs(y.Suspense,{fallback:u.jsx(sM,{}),children:[u.jsx(U_,{children:u.jsxs($e,{path:"/",element:u.jsx(ZO,{openLogin:()=>{i("login"),n(!0)},openRegister:()=>{i("register"),n(!0)}}),children:[u.jsx($e,{index:!0,element:u.jsx(rD,{})}),u.jsx($e,{path:"catalog",element:u.jsx(w3,{})}),u.jsx($e,{path:"/catalog/:category",element:u.jsx(YD,{})}),u.jsx($e,{path:"/product/:identifier",element:u.jsx(c8,{})}),u.jsx($e,{path:"cart",element:u.jsx(IR,{})}),u.jsx($e,{path:"favorite",element:u.jsx(FR,{})}),u.jsx($e,{path:"/catalog/new",element:u.jsx(A9,{})}),u.jsx($e,{path:"/catalog/sale",element:u.jsx(R9,{})}),u.jsx($e,{path:"checkout",element:u.jsx($7,{})}),u.jsx($e,{path:"/order-confirmation",element:u.jsx(F7,{})}),u.jsx($e,{path:"about",element:u.jsx(K7,{})}),u.jsx($e,{path:"contacts",element:u.jsx(c9,{})}),u.jsx($e,{path:"delivery",element:u.jsx(HR,{})}),u.jsxs($e,{path:"account",element:u.jsx(Q9,{isLoggedIn:o,children:u.jsx(tV,{})}),children:[u.jsx($e,{index:!0,element:u.jsx(_x,{})}),u.jsx($e,{path:"profile",element:u.jsx(_x,{})}),u.jsx($e,{path:"orders",element:u.jsx(bV,{})}),u.jsx($e,{path:"/reset-password",element:u.jsx(TV,{})})]}),u.jsx($e,{path:"*",element:u.jsx(E3,{})})]})}),u.jsx(K9,{localFavorites:c,localCartItems:f,isOpen:t,mode:r,onClose:()=>n(!1),setMode:i})]})]})}kf.createRoot(document.getElementById("root")).render(u.jsx(Qj,{store:AC,children:u.jsx(Q.StrictMode,{children:u.jsx(K_,{basename:"/Didiv/",children:u.jsx(jV,{})})})}));
