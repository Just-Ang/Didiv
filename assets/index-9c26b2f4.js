function Rk(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ha(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function $t(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Dx={exports:{}},kc={},Lx={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),zk=Symbol.for("react.portal"),Fk=Symbol.for("react.fragment"),Nk=Symbol.for("react.strict_mode"),Bk=Symbol.for("react.profiler"),Vk=Symbol.for("react.provider"),Uk=Symbol.for("react.context"),Wk=Symbol.for("react.forward_ref"),Hk=Symbol.for("react.suspense"),Gk=Symbol.for("react.memo"),qk=Symbol.for("react.lazy"),_g=Symbol.iterator;function Yk(e){return e===null||typeof e!="object"?null:(e=_g&&e[_g]||e["@@iterator"],typeof e=="function"?e:null)}var Ax={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rx=Object.assign,zx={};function ho(e,t,n){this.props=e,this.context=t,this.refs=zx,this.updater=n||Ax}ho.prototype.isReactComponent={};ho.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ho.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fx(){}Fx.prototype=ho.prototype;function fh(e,t,n){this.props=e,this.context=t,this.refs=zx,this.updater=n||Ax}var ph=fh.prototype=new Fx;ph.constructor=fh;Rx(ph,ho.prototype);ph.isPureReactComponent=!0;var Eg=Array.isArray,Nx=Object.prototype.hasOwnProperty,hh={current:null},Bx={key:!0,ref:!0,__self:!0,__source:!0};function Vx(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Nx.call(t,r)&&!Bx.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ga,type:e,key:o,ref:a,props:i,_owner:hh.current}}function Xk(e,t){return{$$typeof:Ga,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ga}function Kk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pg=/\/+/g;function Qu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kk(""+e.key):t.toString(36)}function qs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ga:case zk:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Qu(a,0):r,Eg(i)?(n="",e!=null&&(n=e.replace(Pg,"$&/")+"/"),qs(i,t,n,"",function(c){return c})):i!=null&&(mh(i)&&(i=Xk(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Pg,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Eg(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Qu(o,l);a+=qs(o,t,n,s,i)}else if(s=Yk(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Qu(o,l++),a+=qs(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ds(e,t,n){if(e==null)return e;var r=[],i=0;return qs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Qk(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},Ys={transition:null},Zk={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Ys,ReactCurrentOwner:hh};re.Children={map:ds,forEach:function(e,t,n){ds(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ds(e,function(){t++}),t},toArray:function(e){return ds(e,function(t){return t})||[]},only:function(e){if(!mh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=ho;re.Fragment=Fk;re.Profiler=Bk;re.PureComponent=fh;re.StrictMode=Nk;re.Suspense=Hk;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zk;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rx({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=hh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Nx.call(t,s)&&!Bx.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ga,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:Uk,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vk,_context:e},e.Consumer=e};re.createElement=Vx;re.createFactory=function(e){var t=Vx.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:Wk,render:e}};re.isValidElement=mh;re.lazy=function(e){return{$$typeof:qk,_payload:{_status:-1,_result:e},_init:Qk}};re.memo=function(e,t){return{$$typeof:Gk,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Ys.transition;Ys.transition={};try{e()}finally{Ys.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return yt.current.useCallback(e,t)};re.useContext=function(e){return yt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};re.useEffect=function(e,t){return yt.current.useEffect(e,t)};re.useId=function(){return yt.current.useId()};re.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return yt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};re.useRef=function(e){return yt.current.useRef(e)};re.useState=function(e){return yt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return yt.current.useTransition()};re.version="18.2.0";Lx.exports=re;var x=Lx.exports;const Q=Ha(x),Pf=Rk({__proto__:null,default:Q},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jk=x,e_=Symbol.for("react.element"),t_=Symbol.for("react.fragment"),n_=Object.prototype.hasOwnProperty,r_=Jk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i_={key:!0,ref:!0,__self:!0,__source:!0};function Ux(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)n_.call(t,r)&&!i_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:e_,type:e,key:o,ref:a,props:i,_owner:r_.current}}kc.Fragment=t_;kc.jsx=Ux;kc.jsxs=Ux;Dx.exports=kc;var u=Dx.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},va.apply(this,arguments)}var hr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hr||(hr={}));const jg="popstate";function o_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return jf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wl(i)}return s_(t,n,null,e)}function Me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function a_(){return Math.random().toString(36).substr(2,8)}function Tg(e,t){return{usr:e.state,key:e.key,idx:t}}function jf(e,t,n,r){return n===void 0&&(n=null),va({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mo(t):t,{state:n,key:t&&t.key||r||a_()})}function wl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function s_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=hr.Pop,s=null,c=f();c==null&&(c=0,a.replaceState(va({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function d(){l=hr.Pop;let w=f(),p=w==null?null:w-c;c=w,s&&s({action:l,location:y.location,delta:p})}function v(w,p){l=hr.Push;let h=jf(y.location,w,p);n&&n(h,w),c=f()+1;let b=Tg(h,c),C=y.createHref(h);try{a.pushState(b,"",C)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(C)}o&&s&&s({action:l,location:y.location,delta:1})}function m(w,p){l=hr.Replace;let h=jf(y.location,w,p);n&&n(h,w),c=f();let b=Tg(h,c),C=y.createHref(h);a.replaceState(b,"",C),o&&s&&s({action:l,location:y.location,delta:0})}function g(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:wl(w);return Me(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let y={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(jg,d),s=w,()=>{i.removeEventListener(jg,d),s=null}},createHref(w){return t(i,w)},createURL:g,encodeLocation(w){let p=g(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:v,replace:m,go(w){return a.go(w)}};return y}var Og;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Og||(Og={}));function l_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?mo(t):t,i=vh(r.pathname||"/",n);if(i==null)return null;let o=Wx(e);c_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=x_(o[l],w_(i));return a}function Wx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Me(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=yr([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(Me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Wx(o.children,t,f,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:g_(c,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Hx(o.path))i(o,a,s)}),t}function Hx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Hx(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function c_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:v_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const u_=/^:\w+$/,d_=3,f_=2,p_=1,h_=10,m_=-2,$g=e=>e==="*";function g_(e,t){let n=e.split("/"),r=n.length;return n.some($g)&&(r+=m_),t&&(r+=f_),n.filter(i=>!$g(i)).reduce((i,o)=>i+(u_.test(o)?d_:o===""?p_:h_),r)}function v_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function x_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",f=y_({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!f)return null;Object.assign(r,f.params);let d=l.route;o.push({params:r,pathname:yr([i,f.pathname]),pathnameBase:__(yr([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=yr([i,f.pathnameBase]))}return o}function y_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=b_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,d)=>{if(f==="*"){let v=l[d]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return c[f]=S_(l[d]||"",f),c},{}),pathname:o,pathnameBase:a,pattern:e}}function b_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),gh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function w_(e){try{return decodeURI(e)}catch(t){return gh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function S_(e,t){try{return decodeURIComponent(e)}catch(n){return gh(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function vh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function C_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?mo(e):e;return{pathname:n?n.startsWith("/")?n:k_(n,t):t,search:E_(r),hash:P_(i)}}function k_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function yh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=mo(e):(i=va({},e),Me(!i.pathname||!i.pathname.includes("?"),Zu("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),Zu("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),Zu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),d-=1;i.pathname=v.join("/")}l=d>=0?t[d]:"/"}let s=C_(i,l),c=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||f)&&(s.pathname+="/"),s}const yr=e=>e.join("/").replace(/\/\/+/g,"/"),__=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),E_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,P_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function j_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gx=["post","put","patch","delete"];new Set(Gx);const T_=["get",...Gx];new Set(T_);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sl.apply(this,arguments)}const bh=x.createContext(null),qx=x.createContext(null),ui=x.createContext(null),_c=x.createContext(null),Mn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Yx=x.createContext(null);function O_(e,t){let{relative:n}=t===void 0?{}:t;go()||Me(!1);let{basename:r,navigator:i}=x.useContext(ui),{hash:o,pathname:a,search:l}=wh(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:yr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function go(){return x.useContext(_c)!=null}function Dn(){return go()||Me(!1),x.useContext(_c).location}function Xx(e){x.useContext(ui).static||x.useLayoutEffect(e)}function Ke(){let{isDataRoute:e}=x.useContext(Mn);return e?H_():$_()}function $_(){go()||Me(!1);let e=x.useContext(bh),{basename:t,navigator:n}=x.useContext(ui),{matches:r}=x.useContext(Mn),{pathname:i}=Dn(),o=JSON.stringify(xh(r).map(s=>s.pathnameBase)),a=x.useRef(!1);return Xx(()=>{a.current=!0}),x.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let f=yh(s,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:yr([t,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[t,n,o,i,e])}const I_=x.createContext(null);function M_(e){let t=x.useContext(Mn).outlet;return t&&x.createElement(I_.Provider,{value:e},t)}function Kx(){let{matches:e}=x.useContext(Mn),t=e[e.length-1];return t?t.params:{}}function wh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(Mn),{pathname:i}=Dn(),o=JSON.stringify(xh(r).map(a=>a.pathnameBase));return x.useMemo(()=>yh(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function D_(e,t){return L_(e,t)}function L_(e,t,n){go()||Me(!1);let{navigator:r}=x.useContext(ui),{matches:i}=x.useContext(Mn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Dn(),c;if(t){var f;let y=typeof t=="string"?mo(t):t;l==="/"||(f=y.pathname)!=null&&f.startsWith(l)||Me(!1),c=y}else c=s;let d=c.pathname||"/",v=l==="/"?d:d.slice(l.length)||"/",m=l_(e,{pathname:v}),g=N_(m&&m.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:yr([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:yr([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&g?x.createElement(_c.Provider,{value:{location:Sl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:hr.Pop}},g):g}function A_(){let e=W_(),t=j_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,o)}const R_=x.createElement(A_,null);class z_ extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(Mn.Provider,{value:this.props.routeContext},x.createElement(Yx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function F_(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(bh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Mn.Provider,{value:t},r)}function N_(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Me(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,c)=>{let f=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||R_);let v=t.concat(o.slice(0,c+1)),m=()=>{let g;return f?g=d:s.route.Component?g=x.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=l,x.createElement(F_,{match:s,routeContext:{outlet:l,matches:v,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?x.createElement(z_,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var Qx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qx||{}),Cl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Cl||{});function B_(e){let t=x.useContext(bh);return t||Me(!1),t}function V_(e){let t=x.useContext(qx);return t||Me(!1),t}function U_(e){let t=x.useContext(Mn);return t||Me(!1),t}function Zx(e){let t=U_(),n=t.matches[t.matches.length-1];return n.route.id||Me(!1),n.route.id}function W_(){var e;let t=x.useContext(Yx),n=V_(Cl.UseRouteError),r=Zx(Cl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function H_(){let{router:e}=B_(Qx.UseNavigateStable),t=Zx(Cl.UseNavigateStable),n=x.useRef(!1);return Xx(()=>{n.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Sl({fromRouteId:t},o)))},[e,t])}function G_(e){let{to:t,replace:n,state:r,relative:i}=e;go()||Me(!1);let{matches:o}=x.useContext(Mn),{pathname:a}=Dn(),l=Ke(),s=yh(t,xh(o).map(f=>f.pathnameBase),a,i==="path"),c=JSON.stringify(s);return x.useEffect(()=>l(JSON.parse(c),{replace:n,state:r,relative:i}),[l,c,i,n,r]),null}function Jx(e){return M_(e.context)}function Te(e){Me(!1)}function q_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=hr.Pop,navigator:o,static:a=!1}=e;go()&&Me(!1);let l=t.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=mo(r));let{pathname:c="/",search:f="",hash:d="",state:v=null,key:m="default"}=r,g=x.useMemo(()=>{let y=vh(c,l);return y==null?null:{location:{pathname:y,search:f,hash:d,state:v,key:m},navigationType:i}},[l,c,f,d,v,m,i]);return g==null?null:x.createElement(ui.Provider,{value:s},x.createElement(_c.Provider,{children:n,value:g}))}function Y_(e){let{children:t,location:n}=e;return D_(Tf(t),n)}new Promise(()=>{});function Tf(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){n.push.apply(n,Tf(r.props.children,o));return}r.type!==Te&&Me(!1),!r.props.index||!r.props.children||Me(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Tf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kl.apply(this,arguments)}function ey(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function X_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function K_(e,t){return e.button===0&&(!t||t==="_self")&&!X_(e)}function Of(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Q_(e,t){let n=Of(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const Z_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],J_=["aria-current","caseSensitive","className","end","style","to","children"],eE="startTransition",Ig=Pf[eE];function tE(e){let{basename:t,children:n,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=o_({window:i,v5Compat:!0}));let a=o.current,[l,s]=x.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},f=x.useCallback(d=>{c&&Ig?Ig(()=>s(d)):s(d)},[s,c]);return x.useLayoutEffect(()=>a.listen(f),[a,f]),x.createElement(q_,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const nE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:f}=t,d=ey(t,Z_),{basename:v}=x.useContext(ui),m,g=!1;if(typeof c=="string"&&rE.test(c)&&(m=c,nE))try{let h=new URL(window.location.href),b=c.startsWith("//")?new URL(h.protocol+c):new URL(c),C=vh(b.pathname,v);b.origin===h.origin&&C!=null?c=C+b.search+b.hash:g=!0}catch{}let y=O_(c,{relative:i}),w=iE(c,{replace:a,state:l,target:s,preventScrollReset:f,relative:i});function p(h){r&&r(h),h.defaultPrevented||w(h)}return x.createElement("a",kl({},d,{href:m||y,onClick:g||o?r:p,ref:n,target:s}))}),ty=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,children:c}=t,f=ey(t,J_),d=wh(s,{relative:f.relative}),v=Dn(),m=x.useContext(qx),{navigator:g}=x.useContext(ui),y=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,w=v.pathname,p=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(w=w.toLowerCase(),p=p?p.toLowerCase():null,y=y.toLowerCase());let h=w===y||!a&&w.startsWith(y)&&w.charAt(y.length)==="/",b=p!=null&&(p===y||!a&&p.startsWith(y)&&p.charAt(y.length)==="/"),C=h?r:void 0,k;typeof o=="function"?k=o({isActive:h,isPending:b}):k=[o,h?"active":null,b?"pending":null].filter(Boolean).join(" ");let P=typeof l=="function"?l({isActive:h,isPending:b}):l;return x.createElement(Pe,kl({},f,{"aria-current":C,className:k,ref:n,style:P,to:s}),typeof c=="function"?c({isActive:h,isPending:b}):c)});var Mg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Mg||(Mg={}));var Dg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dg||(Dg={}));function iE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Ke(),s=Dn(),c=wh(e,{relative:a});return x.useCallback(f=>{if(K_(f,n)){f.preventDefault();let d=r!==void 0?r:wl(s)===wl(c);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}function ny(e){let t=x.useRef(Of(e)),n=x.useRef(!1),r=Dn(),i=x.useMemo(()=>Q_(r.search,n.current?null:t.current),[r.search]),o=Ke(),a=x.useCallback((l,s)=>{const c=Of(typeof l=="function"?l(i):l);n.current=!0,o("?"+c,s)},[o,i]);return[i,a]}var $f={},ry={exports:{}},Ut={},iy={exports:{}},oy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,$){var F=j.length;j.push($);e:for(;0<F;){var B=F-1>>>1,N=j[B];if(0<i(N,$))j[B]=$,j[F]=N,F=B;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var $=j[0],F=j.pop();if(F!==$){j[0]=F;e:for(var B=0,N=j.length,V=N>>>1;B<V;){var H=2*(B+1)-1,G=j[H],W=H+1,q=j[W];if(0>i(G,F))W<N&&0>i(q,G)?(j[B]=q,j[W]=F,B=W):(j[B]=G,j[H]=F,B=H);else if(W<N&&0>i(q,F))j[B]=q,j[W]=F,B=W;else break e}}return $}function i(j,$){var F=j.sortIndex-$.sortIndex;return F!==0?F:j.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],f=1,d=null,v=3,m=!1,g=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(j){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=j)r(c),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(c)}}function C(j){if(y=!1,b(j),!g)if(n(s)!==null)g=!0,z(k);else{var $=n(c);$!==null&&A(C,$.startTime-j)}}function k(j,$){g=!1,y&&(y=!1,p(_),_=-1),m=!0;var F=v;try{for(b($),d=n(s);d!==null&&(!(d.expirationTime>$)||j&&!M());){var B=d.callback;if(typeof B=="function"){d.callback=null,v=d.priorityLevel;var N=B(d.expirationTime<=$);$=e.unstable_now(),typeof N=="function"?d.callback=N:d===n(s)&&r(s),b($)}else r(s);d=n(s)}if(d!==null)var V=!0;else{var H=n(c);H!==null&&A(C,H.startTime-$),V=!1}return V}finally{d=null,v=F,m=!1}}var P=!1,E=null,_=-1,T=5,I=-1;function M(){return!(e.unstable_now()-I<T)}function D(){if(E!==null){var j=e.unstable_now();I=j;var $=!0;try{$=E(!0,j)}finally{$?O():(P=!1,E=null)}}else P=!1}var O;if(typeof h=="function")O=function(){h(D)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,L=R.port2;R.port1.onmessage=D,O=function(){L.postMessage(null)}}else O=function(){w(D,0)};function z(j){E=j,P||(P=!0,O())}function A(j,$){_=w(function(){j(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,z(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var F=v;v=$;try{return j()}finally{v=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,$){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var F=v;v=j;try{return $()}finally{v=F}},e.unstable_scheduleCallback=function(j,$,F){var B=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?B+F:B):F=B,j){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=F+N,j={id:f++,callback:$,priorityLevel:j,startTime:F,expirationTime:N,sortIndex:-1},F>B?(j.sortIndex=F,t(c,j),n(s)===null&&j===n(c)&&(y?(p(_),_=-1):y=!0,A(C,F-B))):(j.sortIndex=N,t(s,j),g||m||(g=!0,z(k))),j},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(j){var $=v;return function(){var F=v;v=$;try{return j.apply(this,arguments)}finally{v=F}}}})(oy);iy.exports=oy;var oE=iy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay=x,Bt=oE;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sy=new Set,xa={};function di(e,t){Qi(e,t),Qi(e+"Capture",t)}function Qi(e,t){for(xa[e]=t,e=0;e<t.length;e++)sy.add(t[e])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),If=Object.prototype.hasOwnProperty,aE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lg={},Ag={};function sE(e){return If.call(Ag,e)?!0:If.call(Lg,e)?!1:aE.test(e)?Ag[e]=!0:(Lg[e]=!0,!1)}function lE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cE(e,t,n,r){if(t===null||typeof t>"u"||lE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function bt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){rt[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];rt[t]=new bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){rt[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){rt[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){rt[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){rt[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){rt[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){rt[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){rt[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sh=/[\-:]([a-z])/g;function Ch(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sh,Ch);rt[t]=new bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sh,Ch);rt[t]=new bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sh,Ch);rt[t]=new bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){rt[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});rt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){rt[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function kh(e,t,n,r){var i=rt.hasOwnProperty(t)?rt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cE(t,n,i,r)&&(n=null),r||i===null?sE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rr=ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fs=Symbol.for("react.element"),Oi=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),_h=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),ly=Symbol.for("react.provider"),cy=Symbol.for("react.context"),Eh=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),Lf=Symbol.for("react.suspense_list"),Ph=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),uy=Symbol.for("react.offscreen"),Rg=Symbol.iterator;function $o(e){return e===null||typeof e!="object"?null:(e=Rg&&e[Rg]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,Ju;function qo(e){if(Ju===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ju=t&&t[1]||""}return`
`+Ju+e}var ed=!1;function td(e,t){if(!e||ed)return"";ed=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ed=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qo(e):""}function uE(e){switch(e.tag){case 5:return qo(e.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return e=td(e.type,!1),e;case 11:return e=td(e.type.render,!1),e;case 1:return e=td(e.type,!0),e;default:return""}}function Af(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $i:return"Fragment";case Oi:return"Portal";case Mf:return"Profiler";case _h:return"StrictMode";case Df:return"Suspense";case Lf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cy:return(e.displayName||"Context")+".Consumer";case ly:return(e._context.displayName||"Context")+".Provider";case Eh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ph:return t=e.displayName||null,t!==null?t:Af(e.type)||"Memo";case ur:t=e._payload,e=e._init;try{return Af(e(t))}catch{}}return null}function dE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Af(t);case 8:return t===_h?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fE(e){var t=dy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ps(e){e._valueTracker||(e._valueTracker=fE(e))}function fy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rf(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function py(e,t){t=t.checked,t!=null&&kh(e,"checked",t,!1)}function zf(e,t){py(e,t);var n=Tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ff(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ff(e,t.type,Tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ff(e,t,n){(t!=="number"||_l(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yo=Array.isArray;function Vi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ng(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(Yo(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tr(n)}}function hy(e,t){var n=Tr(t.value),r=Tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function my(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?my(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hs,gy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hs=hs||document.createElement("div"),hs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ya(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pE=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(e){pE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),na[t]=na[e]})});function vy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||na.hasOwnProperty(e)&&na[e]?(""+t).trim():t+"px"}function xy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var hE=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vf(e,t){if(t){if(hE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Uf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wf=null;function jh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hf=null,Ui=null,Wi=null;function Vg(e){if(e=Xa(e)){if(typeof Hf!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Oc(t),Hf(e.stateNode,e.type,t))}}function yy(e){Ui?Wi?Wi.push(e):Wi=[e]:Ui=e}function by(){if(Ui){var e=Ui,t=Wi;if(Wi=Ui=null,Vg(e),t)for(e=0;e<t.length;e++)Vg(t[e])}}function wy(e,t){return e(t)}function Sy(){}var nd=!1;function Cy(e,t,n){if(nd)return e(t,n);nd=!0;try{return wy(e,t,n)}finally{nd=!1,(Ui!==null||Wi!==null)&&(Sy(),by())}}function ba(e,t){var n=e.stateNode;if(n===null)return null;var r=Oc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var Gf=!1;if(Xn)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){Gf=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{Gf=!1}function mE(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var ra=!1,El=null,Pl=!1,qf=null,gE={onError:function(e){ra=!0,El=e}};function vE(e,t,n,r,i,o,a,l,s){ra=!1,El=null,mE.apply(gE,arguments)}function xE(e,t,n,r,i,o,a,l,s){if(vE.apply(this,arguments),ra){if(ra){var c=El;ra=!1,El=null}else throw Error(U(198));Pl||(Pl=!0,qf=c)}}function fi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ky(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ug(e){if(fi(e)!==e)throw Error(U(188))}function yE(e){var t=e.alternate;if(!t){if(t=fi(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ug(i),e;if(o===r)return Ug(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function _y(e){return e=yE(e),e!==null?Ey(e):null}function Ey(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ey(e);if(t!==null)return t;e=e.sibling}return null}var Py=Bt.unstable_scheduleCallback,Wg=Bt.unstable_cancelCallback,bE=Bt.unstable_shouldYield,wE=Bt.unstable_requestPaint,Ie=Bt.unstable_now,SE=Bt.unstable_getCurrentPriorityLevel,Th=Bt.unstable_ImmediatePriority,jy=Bt.unstable_UserBlockingPriority,jl=Bt.unstable_NormalPriority,CE=Bt.unstable_LowPriority,Ty=Bt.unstable_IdlePriority,Ec=null,Pn=null;function kE(e){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Ec,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:PE,_E=Math.log,EE=Math.LN2;function PE(e){return e>>>=0,e===0?32:31-(_E(e)/EE|0)|0}var ms=64,gs=4194304;function Xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Xo(l):(o&=a,o!==0&&(r=Xo(o)))}else a=n&~i,a!==0?r=Xo(a):o!==0&&(r=Xo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dn(t),i=1<<n,r|=e[n],t&=~i;return r}function jE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-dn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=jE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Yf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oy(){var e=ms;return ms<<=1,!(ms&4194240)&&(ms=64),e}function rd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dn(t),e[t]=n}function OE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Oh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function $y(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Iy,$h,My,Dy,Ly,Xf=!1,vs=[],br=null,wr=null,Sr=null,wa=new Map,Sa=new Map,fr=[],$E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hg(e,t){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":wa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(t.pointerId)}}function Mo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Xa(t),t!==null&&$h(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function IE(e,t,n,r,i){switch(t){case"focusin":return br=Mo(br,e,t,n,r,i),!0;case"dragenter":return wr=Mo(wr,e,t,n,r,i),!0;case"mouseover":return Sr=Mo(Sr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return wa.set(o,Mo(wa.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Sa.set(o,Mo(Sa.get(o)||null,e,t,n,r,i)),!0}return!1}function Ay(e){var t=Hr(e.target);if(t!==null){var n=fi(t);if(n!==null){if(t=n.tag,t===13){if(t=ky(n),t!==null){e.blockedOn=t,Ly(e.priority,function(){My(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wf=r,n.target.dispatchEvent(r),Wf=null}else return t=Xa(n),t!==null&&$h(t),e.blockedOn=n,!1;t.shift()}return!0}function Gg(e,t,n){Xs(e)&&n.delete(t)}function ME(){Xf=!1,br!==null&&Xs(br)&&(br=null),wr!==null&&Xs(wr)&&(wr=null),Sr!==null&&Xs(Sr)&&(Sr=null),wa.forEach(Gg),Sa.forEach(Gg)}function Do(e,t){e.blockedOn===t&&(e.blockedOn=null,Xf||(Xf=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,ME)))}function Ca(e){function t(i){return Do(i,e)}if(0<vs.length){Do(vs[0],e);for(var n=1;n<vs.length;n++){var r=vs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(br!==null&&Do(br,e),wr!==null&&Do(wr,e),Sr!==null&&Do(Sr,e),wa.forEach(t),Sa.forEach(t),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)Ay(n),n.blockedOn===null&&fr.shift()}var Hi=rr.ReactCurrentBatchConfig,Ol=!0;function DE(e,t,n,r){var i=ge,o=Hi.transition;Hi.transition=null;try{ge=1,Ih(e,t,n,r)}finally{ge=i,Hi.transition=o}}function LE(e,t,n,r){var i=ge,o=Hi.transition;Hi.transition=null;try{ge=4,Ih(e,t,n,r)}finally{ge=i,Hi.transition=o}}function Ih(e,t,n,r){if(Ol){var i=Kf(e,t,n,r);if(i===null)pd(e,t,r,$l,n),Hg(e,r);else if(IE(i,e,t,n,r))r.stopPropagation();else if(Hg(e,r),t&4&&-1<$E.indexOf(e)){for(;i!==null;){var o=Xa(i);if(o!==null&&Iy(o),o=Kf(e,t,n,r),o===null&&pd(e,t,r,$l,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else pd(e,t,r,null,n)}}var $l=null;function Kf(e,t,n,r){if($l=null,e=jh(r),e=Hr(e),e!==null)if(t=fi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ky(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $l=e,null}function Ry(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SE()){case Th:return 1;case jy:return 4;case jl:case CE:return 16;case Ty:return 536870912;default:return 16}default:return 16}}var mr=null,Mh=null,Ks=null;function zy(){if(Ks)return Ks;var e,t=Mh,n=t.length,r,i="value"in mr?mr.value:mr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ks=i.slice(e,1<r?1-r:void 0)}function Qs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xs(){return!0}function qg(){return!1}function Wt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xs:qg,this.isPropagationStopped=qg,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xs)},persist:function(){},isPersistent:xs}),t}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dh=Wt(vo),Ya=je({},vo,{view:0,detail:0}),AE=Wt(Ya),id,od,Lo,Pc=je({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lo&&(Lo&&e.type==="mousemove"?(id=e.screenX-Lo.screenX,od=e.screenY-Lo.screenY):od=id=0,Lo=e),id)},movementY:function(e){return"movementY"in e?e.movementY:od}}),Yg=Wt(Pc),RE=je({},Pc,{dataTransfer:0}),zE=Wt(RE),FE=je({},Ya,{relatedTarget:0}),ad=Wt(FE),NE=je({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),BE=Wt(NE),VE=je({},vo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),UE=Wt(VE),WE=je({},vo,{data:0}),Xg=Wt(WE),HE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qE[e])?!!t[e]:!1}function Lh(){return YE}var XE=je({},Ya,{key:function(e){if(e.key){var t=HE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?GE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lh,charCode:function(e){return e.type==="keypress"?Qs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),KE=Wt(XE),QE=je({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kg=Wt(QE),ZE=je({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lh}),JE=Wt(ZE),eP=je({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),tP=Wt(eP),nP=je({},Pc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rP=Wt(nP),iP=[9,13,27,32],Ah=Xn&&"CompositionEvent"in window,ia=null;Xn&&"documentMode"in document&&(ia=document.documentMode);var oP=Xn&&"TextEvent"in window&&!ia,Fy=Xn&&(!Ah||ia&&8<ia&&11>=ia),Qg=String.fromCharCode(32),Zg=!1;function Ny(e,t){switch(e){case"keyup":return iP.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function By(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ii=!1;function aP(e,t){switch(e){case"compositionend":return By(t);case"keypress":return t.which!==32?null:(Zg=!0,Qg);case"textInput":return e=t.data,e===Qg&&Zg?null:e;default:return null}}function sP(e,t){if(Ii)return e==="compositionend"||!Ah&&Ny(e,t)?(e=zy(),Ks=Mh=mr=null,Ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fy&&t.locale!=="ko"?null:t.data;default:return null}}var lP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lP[e.type]:t==="textarea"}function Vy(e,t,n,r){yy(r),t=Il(t,"onChange"),0<t.length&&(n=new Dh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var oa=null,ka=null;function cP(e){Jy(e,0)}function jc(e){var t=Li(e);if(fy(t))return e}function uP(e,t){if(e==="change")return t}var Uy=!1;if(Xn){var sd;if(Xn){var ld="oninput"in document;if(!ld){var e0=document.createElement("div");e0.setAttribute("oninput","return;"),ld=typeof e0.oninput=="function"}sd=ld}else sd=!1;Uy=sd&&(!document.documentMode||9<document.documentMode)}function t0(){oa&&(oa.detachEvent("onpropertychange",Wy),ka=oa=null)}function Wy(e){if(e.propertyName==="value"&&jc(ka)){var t=[];Vy(t,ka,e,jh(e)),Cy(cP,t)}}function dP(e,t,n){e==="focusin"?(t0(),oa=t,ka=n,oa.attachEvent("onpropertychange",Wy)):e==="focusout"&&t0()}function fP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jc(ka)}function pP(e,t){if(e==="click")return jc(t)}function hP(e,t){if(e==="input"||e==="change")return jc(t)}function mP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:mP;function _a(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!If.call(t,i)||!gn(e[i],t[i]))return!1}return!0}function n0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function r0(e,t){var n=n0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=n0(n)}}function Hy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gy(){for(var e=window,t=_l();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_l(e.document)}return t}function Rh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gP(e){var t=Gy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hy(n.ownerDocument.documentElement,n)){if(r!==null&&Rh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=r0(n,o);var a=r0(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vP=Xn&&"documentMode"in document&&11>=document.documentMode,Mi=null,Qf=null,aa=null,Zf=!1;function i0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zf||Mi==null||Mi!==_l(r)||(r=Mi,"selectionStart"in r&&Rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),aa&&_a(aa,r)||(aa=r,r=Il(Qf,"onSelect"),0<r.length&&(t=new Dh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mi)))}function ys(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Di={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionend:ys("Transition","TransitionEnd")},cd={},qy={};Xn&&(qy=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Tc(e){if(cd[e])return cd[e];if(!Di[e])return e;var t=Di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qy)return cd[e]=t[n];return e}var Yy=Tc("animationend"),Xy=Tc("animationiteration"),Ky=Tc("animationstart"),Qy=Tc("transitionend"),Zy=new Map,o0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(e,t){Zy.set(e,t),di(t,[e])}for(var ud=0;ud<o0.length;ud++){var dd=o0[ud],xP=dd.toLowerCase(),yP=dd[0].toUpperCase()+dd.slice(1);Ir(xP,"on"+yP)}Ir(Yy,"onAnimationEnd");Ir(Xy,"onAnimationIteration");Ir(Ky,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(Qy,"onTransitionEnd");Qi("onMouseEnter",["mouseout","mouseover"]);Qi("onMouseLeave",["mouseout","mouseover"]);Qi("onPointerEnter",["pointerout","pointerover"]);Qi("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function a0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xE(r,t,void 0,e),e.currentTarget=null}function Jy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;a0(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;a0(i,l,c),o=s}}}if(Pl)throw e=qf,Pl=!1,qf=null,e}function ye(e,t){var n=t[rp];n===void 0&&(n=t[rp]=new Set);var r=e+"__bubble";n.has(r)||(eb(t,e,2,!1),n.add(r))}function fd(e,t,n){var r=0;t&&(r|=4),eb(n,e,r,t)}var bs="_reactListening"+Math.random().toString(36).slice(2);function Ea(e){if(!e[bs]){e[bs]=!0,sy.forEach(function(n){n!=="selectionchange"&&(bP.has(n)||fd(n,!1,e),fd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bs]||(t[bs]=!0,fd("selectionchange",!1,t))}}function eb(e,t,n,r){switch(Ry(t)){case 1:var i=DE;break;case 4:i=LE;break;default:i=Ih}n=i.bind(null,t,n,e),i=void 0,!Gf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pd(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Hr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Cy(function(){var c=o,f=jh(n),d=[];e:{var v=Zy.get(e);if(v!==void 0){var m=Dh,g=e;switch(e){case"keypress":if(Qs(n)===0)break e;case"keydown":case"keyup":m=KE;break;case"focusin":g="focus",m=ad;break;case"focusout":g="blur",m=ad;break;case"beforeblur":case"afterblur":m=ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=zE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=JE;break;case Yy:case Xy:case Ky:m=BE;break;case Qy:m=tP;break;case"scroll":m=AE;break;case"wheel":m=rP;break;case"copy":case"cut":case"paste":m=UE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Kg}var y=(t&4)!==0,w=!y&&e==="scroll",p=y?v!==null?v+"Capture":null:v;y=[];for(var h=c,b;h!==null;){b=h;var C=b.stateNode;if(b.tag===5&&C!==null&&(b=C,p!==null&&(C=ba(h,p),C!=null&&y.push(Pa(h,C,b)))),w)break;h=h.return}0<y.length&&(v=new m(v,g,null,n,f),d.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",v&&n!==Wf&&(g=n.relatedTarget||n.fromElement)&&(Hr(g)||g[Kn]))break e;if((m||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?Hr(g):null,g!==null&&(w=fi(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(y=Yg,C="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Kg,C="onPointerLeave",p="onPointerEnter",h="pointer"),w=m==null?v:Li(m),b=g==null?v:Li(g),v=new y(C,h+"leave",m,n,f),v.target=w,v.relatedTarget=b,C=null,Hr(f)===c&&(y=new y(p,h+"enter",g,n,f),y.target=b,y.relatedTarget=w,C=y),w=C,m&&g)t:{for(y=m,p=g,h=0,b=y;b;b=vi(b))h++;for(b=0,C=p;C;C=vi(C))b++;for(;0<h-b;)y=vi(y),h--;for(;0<b-h;)p=vi(p),b--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=vi(y),p=vi(p)}y=null}else y=null;m!==null&&s0(d,v,m,y,!1),g!==null&&w!==null&&s0(d,w,g,y,!0)}}e:{if(v=c?Li(c):window,m=v.nodeName&&v.nodeName.toLowerCase(),m==="select"||m==="input"&&v.type==="file")var k=uP;else if(Jg(v))if(Uy)k=hP;else{k=fP;var P=dP}else(m=v.nodeName)&&m.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(k=pP);if(k&&(k=k(e,c))){Vy(d,k,n,f);break e}P&&P(e,v,c),e==="focusout"&&(P=v._wrapperState)&&P.controlled&&v.type==="number"&&Ff(v,"number",v.value)}switch(P=c?Li(c):window,e){case"focusin":(Jg(P)||P.contentEditable==="true")&&(Mi=P,Qf=c,aa=null);break;case"focusout":aa=Qf=Mi=null;break;case"mousedown":Zf=!0;break;case"contextmenu":case"mouseup":case"dragend":Zf=!1,i0(d,n,f);break;case"selectionchange":if(vP)break;case"keydown":case"keyup":i0(d,n,f)}var E;if(Ah)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ii?Ny(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Fy&&n.locale!=="ko"&&(Ii||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ii&&(E=zy()):(mr=f,Mh="value"in mr?mr.value:mr.textContent,Ii=!0)),P=Il(c,_),0<P.length&&(_=new Xg(_,e,null,n,f),d.push({event:_,listeners:P}),E?_.data=E:(E=By(n),E!==null&&(_.data=E)))),(E=oP?aP(e,n):sP(e,n))&&(c=Il(c,"onBeforeInput"),0<c.length&&(f=new Xg("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=E))}Jy(d,t)})}function Pa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Il(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ba(e,n),o!=null&&r.unshift(Pa(e,o,i)),o=ba(e,t),o!=null&&r.push(Pa(e,o,i))),e=e.return}return r}function vi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function s0(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=ba(n,o),s!=null&&a.unshift(Pa(n,s,l))):i||(s=ba(n,o),s!=null&&a.push(Pa(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var wP=/\r\n?/g,SP=/\u0000|\uFFFD/g;function l0(e){return(typeof e=="string"?e:""+e).replace(wP,`
`).replace(SP,"")}function ws(e,t,n){if(t=l0(t),l0(e)!==t&&n)throw Error(U(425))}function Ml(){}var Jf=null,ep=null;function tp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var np=typeof setTimeout=="function"?setTimeout:void 0,CP=typeof clearTimeout=="function"?clearTimeout:void 0,c0=typeof Promise=="function"?Promise:void 0,kP=typeof queueMicrotask=="function"?queueMicrotask:typeof c0<"u"?function(e){return c0.resolve(null).then(e).catch(_P)}:np;function _P(e){setTimeout(function(){throw e})}function hd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ca(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ca(t)}function Cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function u0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xo=Math.random().toString(36).slice(2),_n="__reactFiber$"+xo,ja="__reactProps$"+xo,Kn="__reactContainer$"+xo,rp="__reactEvents$"+xo,EP="__reactListeners$"+xo,PP="__reactHandles$"+xo;function Hr(e){var t=e[_n];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kn]||n[_n]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=u0(e);e!==null;){if(n=e[_n])return n;e=u0(e)}return t}e=n,n=e.parentNode}return null}function Xa(e){return e=e[_n]||e[Kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Li(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Oc(e){return e[ja]||null}var ip=[],Ai=-1;function Mr(e){return{current:e}}function we(e){0>Ai||(e.current=ip[Ai],ip[Ai]=null,Ai--)}function xe(e,t){Ai++,ip[Ai]=e.current,e.current=t}var Or={},dt=Mr(Or),Pt=Mr(!1),ei=Or;function Zi(e,t){var n=e.type.contextTypes;if(!n)return Or;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function jt(e){return e=e.childContextTypes,e!=null}function Dl(){we(Pt),we(dt)}function d0(e,t,n){if(dt.current!==Or)throw Error(U(168));xe(dt,t),xe(Pt,n)}function tb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,dE(e)||"Unknown",i));return je({},n,r)}function Ll(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Or,ei=dt.current,xe(dt,e),xe(Pt,Pt.current),!0}function f0(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=tb(e,t,ei),r.__reactInternalMemoizedMergedChildContext=e,we(Pt),we(dt),xe(dt,e)):we(Pt),xe(Pt,n)}var Bn=null,$c=!1,md=!1;function nb(e){Bn===null?Bn=[e]:Bn.push(e)}function jP(e){$c=!0,nb(e)}function Dr(){if(!md&&Bn!==null){md=!0;var e=0,t=ge;try{var n=Bn;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bn=null,$c=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(e+1)),Py(Th,Dr),i}finally{ge=t,md=!1}}return null}var Ri=[],zi=0,Al=null,Rl=0,qt=[],Yt=0,ti=null,Wn=1,Hn="";function Fr(e,t){Ri[zi++]=Rl,Ri[zi++]=Al,Al=e,Rl=t}function rb(e,t,n){qt[Yt++]=Wn,qt[Yt++]=Hn,qt[Yt++]=ti,ti=e;var r=Wn;e=Hn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var o=32-dn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Wn=1<<32-dn(t)+i|n<<i|r,Hn=o+e}else Wn=1<<o|n<<i|r,Hn=e}function zh(e){e.return!==null&&(Fr(e,1),rb(e,1,0))}function Fh(e){for(;e===Al;)Al=Ri[--zi],Ri[zi]=null,Rl=Ri[--zi],Ri[zi]=null;for(;e===ti;)ti=qt[--Yt],qt[Yt]=null,Hn=qt[--Yt],qt[Yt]=null,Wn=qt[--Yt],qt[Yt]=null}var Ft=null,Rt=null,ke=!1,cn=null;function ib(e,t){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function p0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ft=e,Rt=Cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ft=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ti!==null?{id:Wn,overflow:Hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ft=e,Rt=null,!0):!1;default:return!1}}function op(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ap(e){if(ke){var t=Rt;if(t){var n=t;if(!p0(e,t)){if(op(e))throw Error(U(418));t=Cr(n.nextSibling);var r=Ft;t&&p0(e,t)?ib(r,n):(e.flags=e.flags&-4097|2,ke=!1,Ft=e)}}else{if(op(e))throw Error(U(418));e.flags=e.flags&-4097|2,ke=!1,Ft=e}}}function h0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ft=e}function Ss(e){if(e!==Ft)return!1;if(!ke)return h0(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tp(e.type,e.memoizedProps)),t&&(t=Rt)){if(op(e))throw ob(),Error(U(418));for(;t;)ib(e,t),t=Cr(t.nextSibling)}if(h0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=Cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=Ft?Cr(e.stateNode.nextSibling):null;return!0}function ob(){for(var e=Rt;e;)e=Cr(e.nextSibling)}function Ji(){Rt=Ft=null,ke=!1}function Nh(e){cn===null?cn=[e]:cn.push(e)}var TP=rr.ReactCurrentBatchConfig;function an(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var zl=Mr(null),Fl=null,Fi=null,Bh=null;function Vh(){Bh=Fi=Fl=null}function Uh(e){var t=zl.current;we(zl),e._currentValue=t}function sp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gi(e,t){Fl=e,Bh=Fi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function Qt(e){var t=e._currentValue;if(Bh!==e)if(e={context:e,memoizedValue:t,next:null},Fi===null){if(Fl===null)throw Error(U(308));Fi=e,Fl.dependencies={lanes:0,firstContext:e}}else Fi=Fi.next=e;return t}var Gr=null;function Wh(e){Gr===null?Gr=[e]:Gr.push(e)}function ab(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qn(e,r)}function Qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dr=!1;function Hh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qn(e,n)}return i=r.interleaved,i===null?(t.next=t,Wh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qn(e,n)}function Zs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oh(e,n)}}function m0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Nl(e,t,n,r){var i=e.updateQueue;dr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,f=c=s=null,l=o;do{var v=l.lane,m=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,y=l;switch(v=t,m=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(m,d,v);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,v=typeof g=="function"?g.call(m,d,v):g,v==null)break e;d=je({},d,v);break e;case 2:dr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else m={eventTime:m,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=m,s=d):f=f.next=m,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(f===null&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ri|=a,e.lanes=a,e.memoizedState=d}}function g0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var lb=new ay.Component().refs;function lp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ic={isMounted:function(e){return(e=e._reactInternals)?fi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vt(),i=Er(e),o=Gn(r,i);o.payload=t,n!=null&&(o.callback=n),t=kr(e,o,i),t!==null&&(fn(t,e,i,r),Zs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vt(),i=Er(e),o=Gn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=kr(e,o,i),t!==null&&(fn(t,e,i,r),Zs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),r=Er(e),i=Gn(n,r);i.tag=2,t!=null&&(i.callback=t),t=kr(e,i,r),t!==null&&(fn(t,e,r,n),Zs(t,e,r))}};function v0(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!_a(n,r)||!_a(i,o):!0}function cb(e,t,n){var r=!1,i=Or,o=t.contextType;return typeof o=="object"&&o!==null?o=Qt(o):(i=jt(t)?ei:dt.current,r=t.contextTypes,o=(r=r!=null)?Zi(e,i):Or),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ic,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function x0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ic.enqueueReplaceState(t,t.state,null)}function cp(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=lb,Hh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Qt(o):(o=jt(t)?ei:dt.current,i.context=Zi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(lp(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ic.enqueueReplaceState(i,i.state,null),Nl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ao(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===lb&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function Cs(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function y0(e){var t=e._init;return t(e._payload)}function ub(e){function t(p,h){if(e){var b=p.deletions;b===null?(p.deletions=[h],p.flags|=16):b.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Pr(p,h),p.index=0,p.sibling=null,p}function o(p,h,b){return p.index=b,e?(b=p.alternate,b!==null?(b=b.index,b<h?(p.flags|=2,h):b):(p.flags|=2,h)):(p.flags|=1048576,h)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,h,b,C){return h===null||h.tag!==6?(h=Sd(b,p.mode,C),h.return=p,h):(h=i(h,b),h.return=p,h)}function s(p,h,b,C){var k=b.type;return k===$i?f(p,h,b.props.children,C,b.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ur&&y0(k)===h.type)?(C=i(h,b.props),C.ref=Ao(p,h,b),C.return=p,C):(C=il(b.type,b.key,b.props,null,p.mode,C),C.ref=Ao(p,h,b),C.return=p,C)}function c(p,h,b,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==b.containerInfo||h.stateNode.implementation!==b.implementation?(h=Cd(b,p.mode,C),h.return=p,h):(h=i(h,b.children||[]),h.return=p,h)}function f(p,h,b,C,k){return h===null||h.tag!==7?(h=Kr(b,p.mode,C,k),h.return=p,h):(h=i(h,b),h.return=p,h)}function d(p,h,b){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Sd(""+h,p.mode,b),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fs:return b=il(h.type,h.key,h.props,null,p.mode,b),b.ref=Ao(p,null,h),b.return=p,b;case Oi:return h=Cd(h,p.mode,b),h.return=p,h;case ur:var C=h._init;return d(p,C(h._payload),b)}if(Yo(h)||$o(h))return h=Kr(h,p.mode,b,null),h.return=p,h;Cs(p,h)}return null}function v(p,h,b,C){var k=h!==null?h.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return k!==null?null:l(p,h,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fs:return b.key===k?s(p,h,b,C):null;case Oi:return b.key===k?c(p,h,b,C):null;case ur:return k=b._init,v(p,h,k(b._payload),C)}if(Yo(b)||$o(b))return k!==null?null:f(p,h,b,C,null);Cs(p,b)}return null}function m(p,h,b,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(b)||null,l(h,p,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case fs:return p=p.get(C.key===null?b:C.key)||null,s(h,p,C,k);case Oi:return p=p.get(C.key===null?b:C.key)||null,c(h,p,C,k);case ur:var P=C._init;return m(p,h,b,P(C._payload),k)}if(Yo(C)||$o(C))return p=p.get(b)||null,f(h,p,C,k,null);Cs(h,C)}return null}function g(p,h,b,C){for(var k=null,P=null,E=h,_=h=0,T=null;E!==null&&_<b.length;_++){E.index>_?(T=E,E=null):T=E.sibling;var I=v(p,E,b[_],C);if(I===null){E===null&&(E=T);break}e&&E&&I.alternate===null&&t(p,E),h=o(I,h,_),P===null?k=I:P.sibling=I,P=I,E=T}if(_===b.length)return n(p,E),ke&&Fr(p,_),k;if(E===null){for(;_<b.length;_++)E=d(p,b[_],C),E!==null&&(h=o(E,h,_),P===null?k=E:P.sibling=E,P=E);return ke&&Fr(p,_),k}for(E=r(p,E);_<b.length;_++)T=m(E,p,_,b[_],C),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?_:T.key),h=o(T,h,_),P===null?k=T:P.sibling=T,P=T);return e&&E.forEach(function(M){return t(p,M)}),ke&&Fr(p,_),k}function y(p,h,b,C){var k=$o(b);if(typeof k!="function")throw Error(U(150));if(b=k.call(b),b==null)throw Error(U(151));for(var P=k=null,E=h,_=h=0,T=null,I=b.next();E!==null&&!I.done;_++,I=b.next()){E.index>_?(T=E,E=null):T=E.sibling;var M=v(p,E,I.value,C);if(M===null){E===null&&(E=T);break}e&&E&&M.alternate===null&&t(p,E),h=o(M,h,_),P===null?k=M:P.sibling=M,P=M,E=T}if(I.done)return n(p,E),ke&&Fr(p,_),k;if(E===null){for(;!I.done;_++,I=b.next())I=d(p,I.value,C),I!==null&&(h=o(I,h,_),P===null?k=I:P.sibling=I,P=I);return ke&&Fr(p,_),k}for(E=r(p,E);!I.done;_++,I=b.next())I=m(E,p,_,I.value,C),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?_:I.key),h=o(I,h,_),P===null?k=I:P.sibling=I,P=I);return e&&E.forEach(function(D){return t(p,D)}),ke&&Fr(p,_),k}function w(p,h,b,C){if(typeof b=="object"&&b!==null&&b.type===$i&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case fs:e:{for(var k=b.key,P=h;P!==null;){if(P.key===k){if(k=b.type,k===$i){if(P.tag===7){n(p,P.sibling),h=i(P,b.props.children),h.return=p,p=h;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ur&&y0(k)===P.type){n(p,P.sibling),h=i(P,b.props),h.ref=Ao(p,P,b),h.return=p,p=h;break e}n(p,P);break}else t(p,P);P=P.sibling}b.type===$i?(h=Kr(b.props.children,p.mode,C,b.key),h.return=p,p=h):(C=il(b.type,b.key,b.props,null,p.mode,C),C.ref=Ao(p,h,b),C.return=p,p=C)}return a(p);case Oi:e:{for(P=b.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===b.containerInfo&&h.stateNode.implementation===b.implementation){n(p,h.sibling),h=i(h,b.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Cd(b,p.mode,C),h.return=p,p=h}return a(p);case ur:return P=b._init,w(p,h,P(b._payload),C)}if(Yo(b))return g(p,h,b,C);if($o(b))return y(p,h,b,C);Cs(p,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,b),h.return=p,p=h):(n(p,h),h=Sd(b,p.mode,C),h.return=p,p=h),a(p)):n(p,h)}return w}var eo=ub(!0),db=ub(!1),Ka={},jn=Mr(Ka),Ta=Mr(Ka),Oa=Mr(Ka);function qr(e){if(e===Ka)throw Error(U(174));return e}function Gh(e,t){switch(xe(Oa,t),xe(Ta,e),xe(jn,Ka),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bf(t,e)}we(jn),xe(jn,t)}function to(){we(jn),we(Ta),we(Oa)}function fb(e){qr(Oa.current);var t=qr(jn.current),n=Bf(t,e.type);t!==n&&(xe(Ta,e),xe(jn,n))}function qh(e){Ta.current===e&&(we(jn),we(Ta))}var _e=Mr(0);function Bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gd=[];function Yh(){for(var e=0;e<gd.length;e++)gd[e]._workInProgressVersionPrimary=null;gd.length=0}var Js=rr.ReactCurrentDispatcher,vd=rr.ReactCurrentBatchConfig,ni=0,Ee=null,Ne=null,Ye=null,Vl=!1,sa=!1,$a=0,OP=0;function it(){throw Error(U(321))}function Xh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function Kh(e,t,n,r,i,o){if(ni=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Js.current=e===null||e.memoizedState===null?DP:LP,e=n(r,i),sa){o=0;do{if(sa=!1,$a=0,25<=o)throw Error(U(301));o+=1,Ye=Ne=null,t.updateQueue=null,Js.current=AP,e=n(r,i)}while(sa)}if(Js.current=Ul,t=Ne!==null&&Ne.next!==null,ni=0,Ye=Ne=Ee=null,Vl=!1,t)throw Error(U(300));return e}function Qh(){var e=$a!==0;return $a=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ee.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Zt(){if(Ne===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ye===null?Ee.memoizedState:Ye.next;if(t!==null)Ye=t,Ne=e;else{if(e===null)throw Error(U(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ye===null?Ee.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ia(e,t){return typeof t=="function"?t(e):t}function xd(e){var t=Zt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var f=c.lane;if((ni&f)===f)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Ee.lanes|=f,ri|=f}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,gn(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,ri|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yd(e){var t=Zt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);gn(o,t.memoizedState)||(Et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pb(){}function hb(e,t){var n=Ee,r=Zt(),i=t(),o=!gn(r.memoizedState,i);if(o&&(r.memoizedState=i,Et=!0),r=r.queue,Zh(vb.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Ma(9,gb.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(U(349));ni&30||mb(n,t,i)}return i}function mb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gb(e,t,n,r){t.value=n,t.getSnapshot=r,xb(t)&&yb(e)}function vb(e,t,n){return n(function(){xb(t)&&yb(e)})}function xb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function yb(e){var t=Qn(e,1);t!==null&&fn(t,e,1,-1)}function b0(e){var t=Sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:e},t.queue=e,e=e.dispatch=MP.bind(null,Ee,e),[t.memoizedState,e]}function Ma(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bb(){return Zt().memoizedState}function el(e,t,n,r){var i=Sn();Ee.flags|=e,i.memoizedState=Ma(1|t,n,void 0,r===void 0?null:r)}function Mc(e,t,n,r){var i=Zt();r=r===void 0?null:r;var o=void 0;if(Ne!==null){var a=Ne.memoizedState;if(o=a.destroy,r!==null&&Xh(r,a.deps)){i.memoizedState=Ma(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=Ma(1|t,n,o,r)}function w0(e,t){return el(8390656,8,e,t)}function Zh(e,t){return Mc(2048,8,e,t)}function wb(e,t){return Mc(4,2,e,t)}function Sb(e,t){return Mc(4,4,e,t)}function Cb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kb(e,t,n){return n=n!=null?n.concat([e]):null,Mc(4,4,Cb.bind(null,t,e),n)}function Jh(){}function _b(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Eb(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pb(e,t,n){return ni&21?(gn(n,t)||(n=Oy(),Ee.lanes|=n,ri|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function $P(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=vd.transition;vd.transition={};try{e(!1),t()}finally{ge=n,vd.transition=r}}function jb(){return Zt().memoizedState}function IP(e,t,n){var r=Er(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tb(e))Ob(t,n);else if(n=ab(e,t,n,r),n!==null){var i=vt();fn(n,e,r,i),$b(n,t,r)}}function MP(e,t,n){var r=Er(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tb(e))Ob(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,a)){var s=t.interleaved;s===null?(i.next=i,Wh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=ab(e,t,i,r),n!==null&&(i=vt(),fn(n,e,r,i),$b(n,t,r))}}function Tb(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Ob(e,t){sa=Vl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $b(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oh(e,n)}}var Ul={readContext:Qt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},DP={readContext:Qt,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:w0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,el(4194308,4,Cb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return el(4194308,4,e,t)},useInsertionEffect:function(e,t){return el(4,2,e,t)},useMemo:function(e,t){var n=Sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=IP.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:b0,useDebugValue:Jh,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=b0(!1),t=e[0];return e=$P.bind(null,e[1]),Sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=Sn();if(ke){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),Xe===null)throw Error(U(349));ni&30||mb(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,w0(vb.bind(null,r,o,e),[e]),r.flags|=2048,Ma(9,gb.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Sn(),t=Xe.identifierPrefix;if(ke){var n=Hn,r=Wn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$a++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=OP++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},LP={readContext:Qt,useCallback:_b,useContext:Qt,useEffect:Zh,useImperativeHandle:kb,useInsertionEffect:wb,useLayoutEffect:Sb,useMemo:Eb,useReducer:xd,useRef:bb,useState:function(){return xd(Ia)},useDebugValue:Jh,useDeferredValue:function(e){var t=Zt();return Pb(t,Ne.memoizedState,e)},useTransition:function(){var e=xd(Ia)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:pb,useSyncExternalStore:hb,useId:jb,unstable_isNewReconciler:!1},AP={readContext:Qt,useCallback:_b,useContext:Qt,useEffect:Zh,useImperativeHandle:kb,useInsertionEffect:wb,useLayoutEffect:Sb,useMemo:Eb,useReducer:yd,useRef:bb,useState:function(){return yd(Ia)},useDebugValue:Jh,useDeferredValue:function(e){var t=Zt();return Ne===null?t.memoizedState=e:Pb(t,Ne.memoizedState,e)},useTransition:function(){var e=yd(Ia)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:pb,useSyncExternalStore:hb,useId:jb,unstable_isNewReconciler:!1};function no(e,t){try{var n="",r=t;do n+=uE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function bd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function up(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var RP=typeof WeakMap=="function"?WeakMap:Map;function Ib(e,t,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hl||(Hl=!0,bp=r),up(e,t)},n}function Mb(e,t,n){n=Gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){up(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){up(e,t),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function S0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new RP;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=QP.bind(null,e,t,n),t.then(e,e))}function C0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function k0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gn(-1,1),t.tag=2,kr(n,t,1))),n.lanes|=1),e)}var zP=rr.ReactCurrentOwner,Et=!1;function mt(e,t,n,r){t.child=e===null?db(t,null,n,r):eo(t,e.child,n,r)}function _0(e,t,n,r,i){n=n.render;var o=t.ref;return Gi(t,i),r=Kh(e,t,n,r,o,i),n=Qh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(ke&&n&&zh(t),t.flags|=1,mt(e,t,r,i),t.child)}function E0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!sm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Db(e,t,o,r,i)):(e=il(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(a,r)&&e.ref===t.ref)return Zn(e,t,i)}return t.flags|=1,e=Pr(o,r),e.ref=t.ref,e.return=t,t.child=e}function Db(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(_a(o,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Zn(e,t,i)}return dp(e,t,n,r,i)}function Lb(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Bi,Lt),Lt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(Bi,Lt),Lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,xe(Bi,Lt),Lt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,xe(Bi,Lt),Lt|=r;return mt(e,t,i,n),t.child}function Ab(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dp(e,t,n,r,i){var o=jt(n)?ei:dt.current;return o=Zi(t,o),Gi(t,i),n=Kh(e,t,n,r,o,i),r=Qh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(ke&&r&&zh(t),t.flags|=1,mt(e,t,n,i),t.child)}function P0(e,t,n,r,i){if(jt(n)){var o=!0;Ll(t)}else o=!1;if(Gi(t,i),t.stateNode===null)tl(e,t),cb(t,n,r),cp(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qt(c):(c=jt(n)?ei:dt.current,c=Zi(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&x0(t,a,r,c),dr=!1;var v=t.memoizedState;a.state=v,Nl(t,r,a,i),s=t.memoizedState,l!==r||v!==s||Pt.current||dr?(typeof f=="function"&&(lp(t,n,f,r),s=t.memoizedState),(l=dr||v0(t,n,l,r,v,s,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,sb(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:an(t.type,l),a.props=c,d=t.pendingProps,v=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Qt(s):(s=jt(n)?ei:dt.current,s=Zi(t,s));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||v!==s)&&x0(t,a,r,s),dr=!1,v=t.memoizedState,a.state=v,Nl(t,r,a,i);var g=t.memoizedState;l!==d||v!==g||Pt.current||dr?(typeof m=="function"&&(lp(t,n,m,r),g=t.memoizedState),(c=dr||v0(t,n,c,r,v,g,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return fp(e,t,n,r,o,i)}function fp(e,t,n,r,i,o){Ab(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&f0(t,n,!1),Zn(e,t,o);r=t.stateNode,zP.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=eo(t,e.child,null,o),t.child=eo(t,null,l,o)):mt(e,t,l,o),t.memoizedState=r.state,i&&f0(t,n,!0),t.child}function Rb(e){var t=e.stateNode;t.pendingContext?d0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&d0(e,t.context,!1),Gh(e,t.containerInfo)}function j0(e,t,n,r,i){return Ji(),Nh(i),t.flags|=256,mt(e,t,n,r),t.child}var pp={dehydrated:null,treeContext:null,retryLane:0};function hp(e){return{baseLanes:e,cachePool:null,transitions:null}}function zb(e,t,n){var r=t.pendingProps,i=_e.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe(_e,i&1),e===null)return ap(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ac(a,r,0,null),e=Kr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=hp(n),t.memoizedState=pp,e):em(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return FP(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Pr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Pr(l,o):(o=Kr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?hp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=pp,r}return o=e.child,e=o.sibling,r=Pr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function em(e,t){return t=Ac({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ks(e,t,n,r){return r!==null&&Nh(r),eo(t,e.child,null,n),e=em(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function FP(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=bd(Error(U(422))),ks(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ac({mode:"visible",children:r.children},i,0,null),o=Kr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&eo(t,e.child,null,a),t.child.memoizedState=hp(a),t.memoizedState=pp,o);if(!(t.mode&1))return ks(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(U(419)),r=bd(o,r,void 0),ks(e,t,a,r)}if(l=(a&e.childLanes)!==0,Et||l){if(r=Xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qn(e,i),fn(r,e,i,-1))}return am(),r=bd(Error(U(421))),ks(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ZP.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Rt=Cr(i.nextSibling),Ft=t,ke=!0,cn=null,e!==null&&(qt[Yt++]=Wn,qt[Yt++]=Hn,qt[Yt++]=ti,Wn=e.id,Hn=e.overflow,ti=t),t=em(t,r.children),t.flags|=4096,t)}function T0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),sp(e.return,t,n)}function wd(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fb(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(mt(e,t,r.children,n),r=_e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&T0(e,n,t);else if(e.tag===19)T0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(_e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wd(t,!0,n,null,o);break;case"together":wd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function tl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ri|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=Pr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function NP(e,t,n){switch(t.tag){case 3:Rb(t),Ji();break;case 5:fb(t);break;case 1:jt(t.type)&&Ll(t);break;case 4:Gh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;xe(zl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(_e,_e.current&1),t.flags|=128,null):n&t.child.childLanes?zb(e,t,n):(xe(_e,_e.current&1),e=Zn(e,t,n),e!==null?e.sibling:null);xe(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,Lb(e,t,n)}return Zn(e,t,n)}var Nb,mp,Bb,Vb;Nb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mp=function(){};Bb=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qr(jn.current);var o=null;switch(n){case"input":i=Rf(e,i),r=Rf(e,r),o=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),o=[];break;case"textarea":i=Nf(e,i),r=Nf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ml)}Vf(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ye("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Vb=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ro(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function BP(e,t,n){var r=t.pendingProps;switch(Fh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return jt(t.type)&&Dl(),ot(t),null;case 3:return r=t.stateNode,to(),we(Pt),we(dt),Yh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ss(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,cn!==null&&(Cp(cn),cn=null))),mp(e,t),ot(t),null;case 5:qh(t);var i=qr(Oa.current);if(n=t.type,e!==null&&t.stateNode!=null)Bb(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return ot(t),null}if(e=qr(jn.current),Ss(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[_n]=t,r[ja]=o,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Ko.length;i++)ye(Ko[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":zg(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":Ng(r,o),ye("invalid",r)}Vf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ws(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ws(r.textContent,l,e),i=["children",""+l]):xa.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":ps(r),Fg(r,o,!0);break;case"textarea":ps(r),Bg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ml)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=my(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[_n]=t,e[ja]=r,Nb(e,t,!1,!1),t.stateNode=e;e:{switch(a=Uf(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ko.length;i++)ye(Ko[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":zg(e,r),i=Rf(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Ng(e,r),i=Nf(e,r),ye("invalid",e);break;default:i=r}Vf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?xy(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&gy(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ya(e,s):typeof s=="number"&&ya(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xa.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ye("scroll",e):s!=null&&kh(e,o,s,a))}switch(n){case"input":ps(e),Fg(e,r,!1);break;case"textarea":ps(e),Bg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Vi(e,!!r.multiple,o,!1):r.defaultValue!=null&&Vi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)Vb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=qr(Oa.current),qr(jn.current),Ss(t)){if(r=t.stateNode,n=t.memoizedProps,r[_n]=t,(o=r.nodeValue!==n)&&(e=Ft,e!==null))switch(e.tag){case 3:ws(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ws(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=t,t.stateNode=r}return ot(t),null;case 13:if(we(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&Rt!==null&&t.mode&1&&!(t.flags&128))ob(),Ji(),t.flags|=98560,o=!1;else if(o=Ss(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[_n]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ot(t),o=!1}else cn!==null&&(Cp(cn),cn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Ve===0&&(Ve=3):am())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return to(),mp(e,t),e===null&&Ea(t.stateNode.containerInfo),ot(t),null;case 10:return Uh(t.type._context),ot(t),null;case 17:return jt(t.type)&&Dl(),ot(t),null;case 19:if(we(_e),o=t.memoizedState,o===null)return ot(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Ro(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Bl(e),a!==null){for(t.flags|=128,Ro(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(_e,_e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>ro&&(t.flags|=128,r=!0,Ro(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ke)return ot(t),null}else 2*Ie()-o.renderingStartTime>ro&&n!==1073741824&&(t.flags|=128,r=!0,Ro(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,n=_e.current,xe(_e,r?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return om(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Lt&1073741824&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function VP(e,t){switch(Fh(t),t.tag){case 1:return jt(t.type)&&Dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return to(),we(Pt),we(dt),Yh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qh(t),null;case 13:if(we(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(_e),null;case 4:return to(),null;case 10:return Uh(t.type._context),null;case 22:case 23:return om(),null;case 24:return null;default:return null}}var _s=!1,ct=!1,UP=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Ni(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function gp(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var O0=!1;function WP(e,t){if(Jf=Ol,e=Gy(),Rh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,f=0,d=e,v=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)v=d,d=m;for(;;){if(d===e)break t;if(v===n&&++c===i&&(l=a),v===o&&++f===r&&(s=a),(m=d.nextSibling)!==null)break;d=v,v=d.parentNode}d=m}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ep={focusedElem:e,selectionRange:n},Ol=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,w=g.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:an(t.type,y),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(C){Oe(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return g=O0,O0=!1,g}function la(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&gp(t,n,o)}i=i.next}while(i!==r)}}function Dc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ub(e){var t=e.alternate;t!==null&&(e.alternate=null,Ub(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_n],delete t[ja],delete t[rp],delete t[EP],delete t[PP])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wb(e){return e.tag===5||e.tag===3||e.tag===4}function $0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ml));else if(r!==4&&(e=e.child,e!==null))for(xp(e,t,n),e=e.sibling;e!==null;)xp(e,t,n),e=e.sibling}function yp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yp(e,t,n),e=e.sibling;e!==null;)yp(e,t,n),e=e.sibling}var et=null,sn=!1;function lr(e,t,n){for(n=n.child;n!==null;)Hb(e,t,n),n=n.sibling}function Hb(e,t,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 5:ct||Ni(n,t);case 6:var r=et,i=sn;et=null,lr(e,t,n),et=r,sn=i,et!==null&&(sn?(e=et,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(sn?(e=et,n=n.stateNode,e.nodeType===8?hd(e.parentNode,n):e.nodeType===1&&hd(e,n),Ca(e)):hd(et,n.stateNode));break;case 4:r=et,i=sn,et=n.stateNode.containerInfo,sn=!0,lr(e,t,n),et=r,sn=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&gp(n,t,a),i=i.next}while(i!==r)}lr(e,t,n);break;case 1:if(!ct&&(Ni(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,t,l)}lr(e,t,n);break;case 21:lr(e,t,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,lr(e,t,n),ct=r):lr(e,t,n);break;default:lr(e,t,n)}}function I0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new UP),t.forEach(function(r){var i=JP.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,sn=!1;break e;case 3:et=l.stateNode.containerInfo,sn=!0;break e;case 4:et=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(et===null)throw Error(U(160));Hb(o,a,i),et=null,sn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Oe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gb(t,e),t=t.sibling}function Gb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),bn(e),r&4){try{la(3,e,e.return),Dc(3,e)}catch(y){Oe(e,e.return,y)}try{la(5,e,e.return)}catch(y){Oe(e,e.return,y)}}break;case 1:tn(t,e),bn(e),r&512&&n!==null&&Ni(n,n.return);break;case 5:if(tn(t,e),bn(e),r&512&&n!==null&&Ni(n,n.return),e.flags&32){var i=e.stateNode;try{ya(i,"")}catch(y){Oe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&py(i,o),Uf(l,a);var c=Uf(l,o);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?xy(i,d):f==="dangerouslySetInnerHTML"?gy(i,d):f==="children"?ya(i,d):kh(i,f,d,c)}switch(l){case"input":zf(i,o);break;case"textarea":hy(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Vi(i,!!o.multiple,m,!1):v!==!!o.multiple&&(o.defaultValue!=null?Vi(i,!!o.multiple,o.defaultValue,!0):Vi(i,!!o.multiple,o.multiple?[]:"",!1))}i[ja]=o}catch(y){Oe(e,e.return,y)}}break;case 6:if(tn(t,e),bn(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Oe(e,e.return,y)}}break;case 3:if(tn(t,e),bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ca(t.containerInfo)}catch(y){Oe(e,e.return,y)}break;case 4:tn(t,e),bn(e);break;case 13:tn(t,e),bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(rm=Ie())),r&4&&I0(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ct=(c=ct)||f,tn(t,e),ct=c):tn(t,e),bn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(Y=e,f=e.child;f!==null;){for(d=Y=f;Y!==null;){switch(v=Y,m=v.child,v.tag){case 0:case 11:case 14:case 15:la(4,v,v.return);break;case 1:Ni(v,v.return);var g=v.stateNode;if(typeof g.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Oe(r,n,y)}}break;case 5:Ni(v,v.return);break;case 22:if(v.memoizedState!==null){D0(d);continue}}m!==null?(m.return=v,Y=m):D0(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=vy("display",a))}catch(y){Oe(e,e.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Oe(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tn(t,e),bn(e),r&4&&I0(e);break;case 21:break;default:tn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wb(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ya(i,""),r.flags&=-33);var o=$0(e);yp(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=$0(e);xp(e,l,a);break;default:throw Error(U(161))}}catch(s){Oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function HP(e,t,n){Y=e,qb(e)}function qb(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var i=Y,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||_s;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ct;l=_s;var c=ct;if(_s=a,(ct=s)&&!c)for(Y=i;Y!==null;)a=Y,s=a.child,a.tag===22&&a.memoizedState!==null?L0(i):s!==null?(s.return=a,Y=s):L0(i);for(;o!==null;)Y=o,qb(o),o=o.sibling;Y=i,_s=l,ct=c}M0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Y=o):M0(e)}}function M0(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ct||Dc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:an(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&g0(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}g0(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ca(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ct||t.flags&512&&vp(t)}catch(v){Oe(t,t.return,v)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function D0(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function L0(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Dc(4,t)}catch(s){Oe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Oe(t,i,s)}}var o=t.return;try{vp(t)}catch(s){Oe(t,o,s)}break;case 5:var a=t.return;try{vp(t)}catch(s){Oe(t,a,s)}}}catch(s){Oe(t,t.return,s)}if(t===e){Y=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Y=l;break}Y=t.return}}var GP=Math.ceil,Wl=rr.ReactCurrentDispatcher,tm=rr.ReactCurrentOwner,Kt=rr.ReactCurrentBatchConfig,le=0,Xe=null,Re=null,nt=0,Lt=0,Bi=Mr(0),Ve=0,Da=null,ri=0,Lc=0,nm=0,ca=null,_t=null,rm=0,ro=1/0,zn=null,Hl=!1,bp=null,_r=null,Es=!1,gr=null,Gl=0,ua=0,wp=null,nl=-1,rl=0;function vt(){return le&6?Ie():nl!==-1?nl:nl=Ie()}function Er(e){return e.mode&1?le&2&&nt!==0?nt&-nt:TP.transition!==null?(rl===0&&(rl=Oy()),rl):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Ry(e.type)),e):1}function fn(e,t,n,r){if(50<ua)throw ua=0,wp=null,Error(U(185));qa(e,n,r),(!(le&2)||e!==Xe)&&(e===Xe&&(!(le&2)&&(Lc|=n),Ve===4&&pr(e,nt)),Tt(e,r),n===1&&le===0&&!(t.mode&1)&&(ro=Ie()+500,$c&&Dr()))}function Tt(e,t){var n=e.callbackNode;TE(e,t);var r=Tl(e,e===Xe?nt:0);if(r===0)n!==null&&Wg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wg(n),t===1)e.tag===0?jP(A0.bind(null,e)):nb(A0.bind(null,e)),kP(function(){!(le&6)&&Dr()}),n=null;else{switch($y(r)){case 1:n=Th;break;case 4:n=jy;break;case 16:n=jl;break;case 536870912:n=Ty;break;default:n=jl}n=tw(n,Yb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yb(e,t){if(nl=-1,rl=0,le&6)throw Error(U(327));var n=e.callbackNode;if(qi()&&e.callbackNode!==n)return null;var r=Tl(e,e===Xe?nt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ql(e,r);else{t=r;var i=le;le|=2;var o=Kb();(Xe!==e||nt!==t)&&(zn=null,ro=Ie()+500,Xr(e,t));do try{XP();break}catch(l){Xb(e,l)}while(1);Vh(),Wl.current=o,le=i,Re!==null?t=0:(Xe=null,nt=0,t=Ve)}if(t!==0){if(t===2&&(i=Yf(e),i!==0&&(r=i,t=Sp(e,i))),t===1)throw n=Da,Xr(e,0),pr(e,r),Tt(e,Ie()),n;if(t===6)pr(e,r);else{if(i=e.current.alternate,!(r&30)&&!qP(i)&&(t=ql(e,r),t===2&&(o=Yf(e),o!==0&&(r=o,t=Sp(e,o))),t===1))throw n=Da,Xr(e,0),pr(e,r),Tt(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Nr(e,_t,zn);break;case 3:if(pr(e,r),(r&130023424)===r&&(t=rm+500-Ie(),10<t)){if(Tl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){vt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=np(Nr.bind(null,e,_t,zn),t);break}Nr(e,_t,zn);break;case 4:if(pr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GP(r/1960))-r,10<r){e.timeoutHandle=np(Nr.bind(null,e,_t,zn),r);break}Nr(e,_t,zn);break;case 5:Nr(e,_t,zn);break;default:throw Error(U(329))}}}return Tt(e,Ie()),e.callbackNode===n?Yb.bind(null,e):null}function Sp(e,t){var n=ca;return e.current.memoizedState.isDehydrated&&(Xr(e,t).flags|=256),e=ql(e,t),e!==2&&(t=_t,_t=n,t!==null&&Cp(t)),e}function Cp(e){_t===null?_t=e:_t.push.apply(_t,e)}function qP(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pr(e,t){for(t&=~nm,t&=~Lc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dn(t),r=1<<n;e[n]=-1,t&=~r}}function A0(e){if(le&6)throw Error(U(327));qi();var t=Tl(e,0);if(!(t&1))return Tt(e,Ie()),null;var n=ql(e,t);if(e.tag!==0&&n===2){var r=Yf(e);r!==0&&(t=r,n=Sp(e,r))}if(n===1)throw n=Da,Xr(e,0),pr(e,t),Tt(e,Ie()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nr(e,_t,zn),Tt(e,Ie()),null}function im(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(ro=Ie()+500,$c&&Dr())}}function ii(e){gr!==null&&gr.tag===0&&!(le&6)&&qi();var t=le;le|=1;var n=Kt.transition,r=ge;try{if(Kt.transition=null,ge=1,e)return e()}finally{ge=r,Kt.transition=n,le=t,!(le&6)&&Dr()}}function om(){Lt=Bi.current,we(Bi)}function Xr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,CP(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Fh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dl();break;case 3:to(),we(Pt),we(dt),Yh();break;case 5:qh(r);break;case 4:to();break;case 13:we(_e);break;case 19:we(_e);break;case 10:Uh(r.type._context);break;case 22:case 23:om()}n=n.return}if(Xe=e,Re=e=Pr(e.current,null),nt=Lt=t,Ve=0,Da=null,nm=Lc=ri=0,_t=ca=null,Gr!==null){for(t=0;t<Gr.length;t++)if(n=Gr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Gr=null}return e}function Xb(e,t){do{var n=Re;try{if(Vh(),Js.current=Ul,Vl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vl=!1}if(ni=0,Ye=Ne=Ee=null,sa=!1,$a=0,tm.current=null,n===null||n.return===null){Ve=1,Da=t,Re=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=nt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=C0(a);if(m!==null){m.flags&=-257,k0(m,a,l,o,t),m.mode&1&&S0(o,c,t),t=m,s=c;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if(!(t&1)){S0(o,c,t),am();break e}s=Error(U(426))}}else if(ke&&l.mode&1){var w=C0(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),k0(w,a,l,o,t),Nh(no(s,l));break e}}o=s=no(s,l),Ve!==4&&(Ve=2),ca===null?ca=[o]:ca.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Ib(o,s,t);m0(o,p);break e;case 1:l=s;var h=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(_r===null||!_r.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Mb(o,l,t);m0(o,C);break e}}o=o.return}while(o!==null)}Zb(n)}catch(k){t=k,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function Kb(){var e=Wl.current;return Wl.current=Ul,e===null?Ul:e}function am(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Xe===null||!(ri&268435455)&&!(Lc&268435455)||pr(Xe,nt)}function ql(e,t){var n=le;le|=2;var r=Kb();(Xe!==e||nt!==t)&&(zn=null,Xr(e,t));do try{YP();break}catch(i){Xb(e,i)}while(1);if(Vh(),le=n,Wl.current=r,Re!==null)throw Error(U(261));return Xe=null,nt=0,Ve}function YP(){for(;Re!==null;)Qb(Re)}function XP(){for(;Re!==null&&!bE();)Qb(Re)}function Qb(e){var t=ew(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?Zb(e):Re=t,tm.current=null}function Zb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=VP(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Re=null;return}}else if(n=BP(n,t,Lt),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ve===0&&(Ve=5)}function Nr(e,t,n){var r=ge,i=Kt.transition;try{Kt.transition=null,ge=1,KP(e,t,n,r)}finally{Kt.transition=i,ge=r}return null}function KP(e,t,n,r){do qi();while(gr!==null);if(le&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(OE(e,o),e===Xe&&(Re=Xe=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Es||(Es=!0,tw(jl,function(){return qi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Kt.transition,Kt.transition=null;var a=ge;ge=1;var l=le;le|=4,tm.current=null,WP(e,n),Gb(n,e),gP(ep),Ol=!!Jf,ep=Jf=null,e.current=n,HP(n),wE(),le=l,ge=a,Kt.transition=o}else e.current=n;if(Es&&(Es=!1,gr=e,Gl=i),o=e.pendingLanes,o===0&&(_r=null),kE(n.stateNode),Tt(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hl)throw Hl=!1,e=bp,bp=null,e;return Gl&1&&e.tag!==0&&qi(),o=e.pendingLanes,o&1?e===wp?ua++:(ua=0,wp=e):ua=0,Dr(),null}function qi(){if(gr!==null){var e=$y(Gl),t=Kt.transition,n=ge;try{if(Kt.transition=null,ge=16>e?16:e,gr===null)var r=!1;else{if(e=gr,gr=null,Gl=0,le&6)throw Error(U(331));var i=le;for(le|=4,Y=e.current;Y!==null;){var o=Y,a=o.child;if(Y.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(Y=c;Y!==null;){var f=Y;switch(f.tag){case 0:case 11:case 15:la(8,f,o)}var d=f.child;if(d!==null)d.return=f,Y=d;else for(;Y!==null;){f=Y;var v=f.sibling,m=f.return;if(Ub(f),f===c){Y=null;break}if(v!==null){v.return=m,Y=v;break}Y=m}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}Y=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Y=a;else e:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:la(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,Y=p;break e}Y=o.return}}var h=e.current;for(Y=h;Y!==null;){a=Y;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,Y=b;else e:for(a=h;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Dc(9,l)}}catch(k){Oe(l,l.return,k)}if(l===a){Y=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,Y=C;break e}Y=l.return}}if(le=i,Dr(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Ec,e)}catch{}r=!0}return r}finally{ge=n,Kt.transition=t}}return!1}function R0(e,t,n){t=no(n,t),t=Ib(e,t,1),e=kr(e,t,1),t=vt(),e!==null&&(qa(e,1,t),Tt(e,t))}function Oe(e,t,n){if(e.tag===3)R0(e,e,n);else for(;t!==null;){if(t.tag===3){R0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){e=no(n,e),e=Mb(t,e,1),t=kr(t,e,1),e=vt(),t!==null&&(qa(t,1,e),Tt(t,e));break}}t=t.return}}function QP(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(nt&n)===n&&(Ve===4||Ve===3&&(nt&130023424)===nt&&500>Ie()-rm?Xr(e,0):nm|=n),Tt(e,t)}function Jb(e,t){t===0&&(e.mode&1?(t=gs,gs<<=1,!(gs&130023424)&&(gs=4194304)):t=1);var n=vt();e=Qn(e,t),e!==null&&(qa(e,t,n),Tt(e,n))}function ZP(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jb(e,n)}function JP(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Jb(e,n)}var ew;ew=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pt.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,NP(e,t,n);Et=!!(e.flags&131072)}else Et=!1,ke&&t.flags&1048576&&rb(t,Rl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;tl(e,t),e=t.pendingProps;var i=Zi(t,dt.current);Gi(t,n),i=Kh(null,t,r,e,i,n);var o=Qh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,jt(r)?(o=!0,Ll(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hh(t),i.updater=Ic,t.stateNode=i,i._reactInternals=t,cp(t,r,e,n),t=fp(null,t,r,!0,o,n)):(t.tag=0,ke&&o&&zh(t),mt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(tl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=tj(r),e=an(r,e),i){case 0:t=dp(null,t,r,e,n);break e;case 1:t=P0(null,t,r,e,n);break e;case 11:t=_0(null,t,r,e,n);break e;case 14:t=E0(null,t,r,an(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),dp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),P0(e,t,r,i,n);case 3:e:{if(Rb(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,sb(e,t),Nl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=no(Error(U(423)),t),t=j0(e,t,r,n,i);break e}else if(r!==i){i=no(Error(U(424)),t),t=j0(e,t,r,n,i);break e}else for(Rt=Cr(t.stateNode.containerInfo.firstChild),Ft=t,ke=!0,cn=null,n=db(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ji(),r===i){t=Zn(e,t,n);break e}mt(e,t,r,n)}t=t.child}return t;case 5:return fb(t),e===null&&ap(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,tp(r,i)?a=null:o!==null&&tp(r,o)&&(t.flags|=32),Ab(e,t),mt(e,t,a,n),t.child;case 6:return e===null&&ap(t),null;case 13:return zb(e,t,n);case 4:return Gh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=eo(t,null,r,n):mt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),_0(e,t,r,i,n);case 7:return mt(e,t,t.pendingProps,n),t.child;case 8:return mt(e,t,t.pendingProps.children,n),t.child;case 12:return mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,xe(zl,r._currentValue),r._currentValue=a,o!==null)if(gn(o.value,a)){if(o.children===i.children&&!Pt.current){t=Zn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Gn(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),sp(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(U(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),sp(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}mt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Gi(t,n),i=Qt(i),r=r(i),t.flags|=1,mt(e,t,r,n),t.child;case 14:return r=t.type,i=an(r,t.pendingProps),i=an(r.type,i),E0(e,t,r,i,n);case 15:return Db(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),tl(e,t),t.tag=1,jt(r)?(e=!0,Ll(t)):e=!1,Gi(t,n),cb(t,r,i),cp(t,r,i,n),fp(null,t,r,!0,e,n);case 19:return Fb(e,t,n);case 22:return Lb(e,t,n)}throw Error(U(156,t.tag))};function tw(e,t){return Py(e,t)}function ej(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,r){return new ej(e,t,n,r)}function sm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tj(e){if(typeof e=="function")return sm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Eh)return 11;if(e===Ph)return 14}return 2}function Pr(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function il(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")sm(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case $i:return Kr(n.children,i,o,t);case _h:a=8,i|=8;break;case Mf:return e=Xt(12,n,t,i|2),e.elementType=Mf,e.lanes=o,e;case Df:return e=Xt(13,n,t,i),e.elementType=Df,e.lanes=o,e;case Lf:return e=Xt(19,n,t,i),e.elementType=Lf,e.lanes=o,e;case uy:return Ac(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ly:a=10;break e;case cy:a=9;break e;case Eh:a=11;break e;case Ph:a=14;break e;case ur:a=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Xt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Kr(e,t,n,r){return e=Xt(7,e,r,t),e.lanes=n,e}function Ac(e,t,n,r){return e=Xt(22,e,r,t),e.elementType=uy,e.lanes=n,e.stateNode={isHidden:!1},e}function Sd(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function Cd(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nj(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rd(0),this.expirationTimes=rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lm(e,t,n,r,i,o,a,l,s){return e=new nj(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(o),e}function rj(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Oi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nw(e){if(!e)return Or;e=e._reactInternals;e:{if(fi(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(jt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(jt(n))return tb(e,n,t)}return t}function rw(e,t,n,r,i,o,a,l,s){return e=lm(n,r,!0,e,i,o,a,l,s),e.context=nw(null),n=e.current,r=vt(),i=Er(n),o=Gn(r,i),o.callback=t??null,kr(n,o,i),e.current.lanes=i,qa(e,i,r),Tt(e,r),e}function Rc(e,t,n,r){var i=t.current,o=vt(),a=Er(i);return n=nw(n),t.context===null?t.context=n:t.pendingContext=n,t=Gn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kr(i,t,a),e!==null&&(fn(e,i,a,o),Zs(e,i,a)),a}function Yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function z0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cm(e,t){z0(e,t),(e=e.alternate)&&z0(e,t)}function ij(){return null}var iw=typeof reportError=="function"?reportError:function(e){console.error(e)};function um(e){this._internalRoot=e}zc.prototype.render=um.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Rc(e,t,null,null)};zc.prototype.unmount=um.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ii(function(){Rc(null,e,null,null)}),t[Kn]=null}};function zc(e){this._internalRoot=e}zc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fr.length&&t!==0&&t<fr[n].priority;n++);fr.splice(n,0,e),n===0&&Ay(e)}};function dm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function F0(){}function oj(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Yl(a);o.call(c)}}var a=rw(t,r,e,0,null,!1,!1,"",F0);return e._reactRootContainer=a,e[Kn]=a.current,Ea(e.nodeType===8?e.parentNode:e),ii(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Yl(s);l.call(c)}}var s=lm(e,0,!1,null,null,!1,!1,"",F0);return e._reactRootContainer=s,e[Kn]=s.current,Ea(e.nodeType===8?e.parentNode:e),ii(function(){Rc(t,s,n,r)}),s}function Nc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Yl(a);l.call(s)}}Rc(t,a,e,i)}else a=oj(n,t,e,i,r);return Yl(a)}Iy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xo(t.pendingLanes);n!==0&&(Oh(t,n|1),Tt(t,Ie()),!(le&6)&&(ro=Ie()+500,Dr()))}break;case 13:ii(function(){var r=Qn(e,1);if(r!==null){var i=vt();fn(r,e,1,i)}}),cm(e,1)}};$h=function(e){if(e.tag===13){var t=Qn(e,134217728);if(t!==null){var n=vt();fn(t,e,134217728,n)}cm(e,134217728)}};My=function(e){if(e.tag===13){var t=Er(e),n=Qn(e,t);if(n!==null){var r=vt();fn(n,e,t,r)}cm(e,t)}};Dy=function(){return ge};Ly=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};Hf=function(e,t,n){switch(t){case"input":if(zf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Oc(r);if(!i)throw Error(U(90));fy(r),zf(r,i)}}}break;case"textarea":hy(e,n);break;case"select":t=n.value,t!=null&&Vi(e,!!n.multiple,t,!1)}};wy=im;Sy=ii;var aj={usingClientEntryPoint:!1,Events:[Xa,Li,Oc,yy,by,im]},zo={findFiberByHostInstance:Hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sj={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_y(e),e===null?null:e.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||ij,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ps.isDisabled&&Ps.supportsFiber)try{Ec=Ps.inject(sj),Pn=Ps}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aj;Ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dm(t))throw Error(U(200));return rj(e,t,null,n)};Ut.createRoot=function(e,t){if(!dm(e))throw Error(U(299));var n=!1,r="",i=iw;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lm(e,1,!1,null,null,n,!1,r,i),e[Kn]=t.current,Ea(e.nodeType===8?e.parentNode:e),new um(t)};Ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=_y(t),e=e===null?null:e.stateNode,e};Ut.flushSync=function(e){return ii(e)};Ut.hydrate=function(e,t,n){if(!Fc(t))throw Error(U(200));return Nc(null,e,t,!0,n)};Ut.hydrateRoot=function(e,t,n){if(!dm(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=iw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=rw(t,null,e,1,n??null,i,!1,o,a),e[Kn]=t.current,Ea(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zc(t)};Ut.render=function(e,t,n){if(!Fc(t))throw Error(U(200));return Nc(null,e,t,!1,n)};Ut.unmountComponentAtNode=function(e){if(!Fc(e))throw Error(U(40));return e._reactRootContainer?(ii(function(){Nc(null,null,e,!1,function(){e._reactRootContainer=null,e[Kn]=null})}),!0):!1};Ut.unstable_batchedUpdates=im;Ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fc(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Nc(e,t,n,!1,r)};Ut.version="18.2.0-next-9e3b772b8-20220608";function ow(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ow)}catch(e){console.error(e)}}ow(),ry.exports=Ut;var Bc=ry.exports,N0=Bc;$f.createRoot=N0.createRoot,$f.hydrateRoot=N0.hydrateRoot;var ut=function(){return ut=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ut.apply(this,arguments)};function io(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function lj(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var cj=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,uj=lj(function(e){return cj.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),be="-ms-",da="-moz-",ue="-webkit-",aw="comm",Vc="rule",fm="decl",dj="@import",fj="@namespace",sw="@keyframes",pj="@layer",lw=Math.abs,pm=String.fromCharCode,kp=Object.assign;function hj(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function cw(e){return e.trim()}function Fn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function ol(e,t,n){return e.indexOf(t,n)}function Be(e,t){return e.charCodeAt(t)|0}function oi(e,t,n){return e.slice(t,n)}function ln(e){return e.length}function uw(e){return e.length}function Qo(e,t){return t.push(e),e}function mj(e,t){return e.map(t).join("")}function B0(e,t){return e.filter(function(n){return!Fn(n,t)})}var Uc=1,oo=1,dw=0,Jt=0,Le=0,yo="";function Wc(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Uc,column:oo,length:a,return:"",siblings:l}}function cr(e,t){return kp(Wc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function xi(e){for(;e.root;)e=cr(e.root,{children:[e]});Qo(e,e.siblings)}function gj(){return Le}function vj(){return Le=Jt>0?Be(yo,--Jt):0,oo--,Le===10&&(oo=1,Uc--),Le}function pn(){return Le=Jt<dw?Be(yo,Jt++):0,oo++,Le===10&&(oo=1,Uc++),Le}function vr(){return Be(yo,Jt)}function al(){return Jt}function Hc(e,t){return oi(yo,e,t)}function La(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xj(e){return Uc=oo=1,dw=ln(yo=e),Jt=0,[]}function yj(e){return yo="",e}function kd(e){return cw(Hc(Jt-1,_p(e===91?e+2:e===40?e+1:e)))}function bj(e){for(;(Le=vr())&&Le<33;)pn();return La(e)>2||La(Le)>3?"":" "}function wj(e,t){for(;--t&&pn()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Hc(e,al()+(t<6&&vr()==32&&pn()==32))}function _p(e){for(;pn();)switch(Le){case e:return Jt;case 34:case 39:e!==34&&e!==39&&_p(Le);break;case 40:e===41&&_p(e);break;case 92:pn();break}return Jt}function Sj(e,t){for(;pn()&&e+Le!==47+10;)if(e+Le===42+42&&vr()===47)break;return"/*"+Hc(t,Jt-1)+"*"+pm(e===47?e:pn())}function Cj(e){for(;!La(vr());)pn();return Hc(e,Jt)}function kj(e){return yj(sl("",null,null,null,[""],e=xj(e),0,[0],e))}function sl(e,t,n,r,i,o,a,l,s){for(var c=0,f=0,d=a,v=0,m=0,g=0,y=1,w=1,p=1,h=0,b="",C=i,k=o,P=r,E=b;w;)switch(g=h,h=pn()){case 40:if(g!=108&&Be(E,d-1)==58){ol(E+=ne(kd(h),"&","&\f"),"&\f",lw(c?l[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:E+=kd(h);break;case 9:case 10:case 13:case 32:E+=bj(g);break;case 92:E+=wj(al()-1,7);continue;case 47:switch(vr()){case 42:case 47:Qo(_j(Sj(pn(),al()),t,n,s),s),(La(g||1)==5||La(vr()||1)==5)&&ln(E)&&oi(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*y:l[c++]=ln(E)*p;case 125*y:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+f:p==-1&&(E=ne(E,/\f/g,"")),m>0&&(ln(E)-d||y===0&&g===47)&&Qo(m>32?U0(E+";",r,n,d-1,s):U0(ne(E," ","")+";",r,n,d-2,s),s);break;case 59:E+=";";default:if(Qo(P=V0(E,t,n,c,f,i,l,b,C=[],k=[],d,o),o),h===123)if(f===0)sl(E,t,P,P,C,o,d,l,k);else{switch(v){case 99:if(Be(E,3)===110)break;case 108:if(Be(E,2)===97)break;default:f=0;case 100:case 109:case 115:}f?sl(e,P,P,r&&Qo(V0(e,P,P,0,0,i,l,b,i,C=[],d,k),k),i,k,d,l,r?C:k):sl(E,P,P,P,[""],k,0,l,k)}}c=f=m=0,y=p=1,b=E="",d=a;break;case 58:d=1+ln(E),m=g;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&vj()==125)continue}switch(E+=pm(h),h*y){case 38:p=f>0?1:(E+="\f",-1);break;case 44:l[c++]=(ln(E)-1)*p,p=1;break;case 64:vr()===45&&(E+=kd(pn())),v=vr(),f=d=ln(b=E+=Cj(al())),h++;break;case 45:g===45&&ln(E)==2&&(y=0)}}return o}function V0(e,t,n,r,i,o,a,l,s,c,f,d){for(var v=i-1,m=i===0?o:[""],g=uw(m),y=0,w=0,p=0;y<r;++y)for(var h=0,b=oi(e,v+1,v=lw(w=a[y])),C=e;h<g;++h)(C=cw(w>0?m[h]+" "+b:ne(b,/&\f/g,m[h])))&&(s[p++]=C);return Wc(e,t,n,i===0?Vc:l,s,c,f,d)}function _j(e,t,n,r){return Wc(e,t,n,aw,pm(gj()),oi(e,2,-2),0,r)}function U0(e,t,n,r,i){return Wc(e,t,n,fm,oi(e,0,r),oi(e,r+1,-1),r,i)}function fw(e,t,n){switch(hj(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return da+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+da+e+be+e+e;case 5936:switch(Be(e,t+11)){case 114:return ue+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+be+e+e;case 6165:return ue+e+be+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+be+"flex-$1$2")+e;case 5443:return ue+e+be+"flex-item-"+ne(e,/flex-|-self/g,"")+(Fn(e,/flex-|baseline/)?"":be+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+be+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+be+ne(e,"shrink","negative")+e;case 5292:return ue+e+be+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+be+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+be+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!Fn(e,/flex-|baseline/))return be+"grid-column-align"+oi(e,t)+e;break;case 2592:case 3360:return be+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Fn(r.props,/grid-\w+-end/)})?~ol(e+(n=n[t].value),"span",0)?e:be+ne(e,"-start","")+e+be+"grid-row-span:"+(~ol(n,"span",0)?Fn(n,/\d+/):+Fn(n,/\d+/)-+Fn(e,/\d+/))+";":be+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Fn(r.props,/grid-\w+-start/)})?e:be+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+da+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ol(e,"stretch",0)?fw(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,c){return be+i+":"+o+c+(a?be+i+"-span:"+(l?s:+s-+o)+c:"")+e});case 4949:if(Be(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Be(e,Be(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Be(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+be+"$2box$3")+e;case 100:return ne(e,":",":"+be)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Xl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ej(e,t,n,r){switch(e.type){case pj:if(e.children.length)break;case dj:case fj:case fm:return e.return=e.return||e.value;case aw:return"";case sw:return e.return=e.value+"{"+Xl(e.children,r)+"}";case Vc:if(!ln(e.value=e.props.join(",")))return""}return ln(n=Xl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Pj(e){var t=uw(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function jj(e){return function(t){t.root||(t=t.return)&&e(t)}}function Tj(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case fm:e.return=fw(e.value,e.length,n);return;case sw:return Xl([cr(e,{value:ne(e.value,"@","@"+ue)})],r);case Vc:if(e.length)return mj(n=e.props,function(i){switch(Fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xi(cr(e,{props:[ne(i,/:(read-\w+)/,":"+da+"$1")]})),xi(cr(e,{props:[i]})),kp(e,{props:B0(n,r)});break;case"::placeholder":xi(cr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),xi(cr(e,{props:[ne(i,/:(plac\w+)/,":"+da+"$1")]})),xi(cr(e,{props:[ne(i,/:(plac\w+)/,be+"input-$1")]})),xi(cr(e,{props:[i]})),kp(e,{props:B0(n,r)});break}return""})}}var Oj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ao=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",pw="active",hw="data-styled-version",Gc="6.3.11",hm=`/*!sc*/
`,fa=typeof window<"u"&&typeof document<"u",$j=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Ij={};function Qa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ll=new Map,Kl=new Map,cl=1,Zo=function(e){if(ll.has(e))return ll.get(e);for(;Kl.has(cl);)cl++;var t=cl++;return ll.set(e,t),Kl.set(t,e),t},Mj=function(e,t){cl=t+1,ll.set(e,t),Kl.set(t,e)},mm=Object.freeze([]),so=Object.freeze({});function mw(e,t,n){return n===void 0&&(n=so),e.theme!==n.theme&&e.theme||t||n.theme}var gw=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Dj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lj=/(^-|-$)/g;function W0(e){return e.replace(Dj,"-").replace(Lj,"")}var Aj=/(a)(d)/gi,H0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ep(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=H0(t%52)+n;return(H0(t%52)+n).replace(Aj,"$1-$2")}var _d,Br=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vw=function(e){return Br(5381,e)};function gm(e){return Ep(vw(e)>>>0)}function Rj(e){return e.displayName||e.name||"Component"}function Ed(e){return typeof e=="string"&&!0}var xw=typeof Symbol=="function"&&Symbol.for,yw=xw?Symbol.for("react.memo"):60115,zj=xw?Symbol.for("react.forward_ref"):60112,Fj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bj=((_d={})[zj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_d[yw]=bw,_d);function G0(e){return("type"in(t=e)&&t.type.$$typeof)===yw?bw:"$$typeof"in e?Bj[e.$$typeof]:Fj;var t}var Vj=Object.defineProperty,Uj=Object.getOwnPropertyNames,q0=Object.getOwnPropertySymbols,Wj=Object.getOwnPropertyDescriptor,Hj=Object.getPrototypeOf,Y0=Object.prototype;function ww(e,t,n){if(typeof t!="string"){if(Y0){var r=Hj(t);r&&r!==Y0&&ww(e,r,n)}var i=Uj(t);q0&&(i=i.concat(q0(t)));for(var o=G0(e),a=G0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in Nj||n&&n[s]||a&&s in a||o&&s in o)){var c=Wj(t,s);try{Vj(e,s,c)}catch{}}}}return e}function lo(e){return typeof e=="function"}function vm(e){return typeof e=="object"&&"styledComponentId"in e}function Yr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ql(e,t){return e.join(t||"")}function Aa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Pp(e,t,n){if(n===void 0&&(n=!1),!n&&!Aa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Pp(e[r],t[r]);else if(Aa(t))for(var r in t)e[r]=Pp(e[r],t[r]);return e}function xm(e,t){Object.defineProperty(e,"toString",{value:t})}var Gj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Qa(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+hm;return n},e}(),qj="style[".concat(ao,"][").concat(hw,'="').concat(Gc,'"]'),Yj=new RegExp("^".concat(ao,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),X0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},jp=function(e){if(!e)return document;if(X0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(X0(t))return t}return document},Xj=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Kj=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(hm),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(Yj);if(s){var c=0|parseInt(s[1],10),f=s[2];c!==0&&(Mj(f,c),Xj(e,f,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},Pd=function(e){for(var t=jp(e.options.target).querySelectorAll(qj),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ao)!==pw&&(Kj(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Qj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(ao,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ao,pw),r.setAttribute(hw,Gc);var a=Qj();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Zj=function(){function e(t){this.element=Sw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Qa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Jj=function(){function e(t){this.element=Sw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),eT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),K0=fa,tT={isServer:!fa,useCSSOMInjection:!$j},Zl=function(){function e(t,n,r){t===void 0&&(t=so),n===void 0&&(n={});var i=this;this.options=ut(ut({},tT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&fa&&K0&&(K0=!1,Pd(this)),xm(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",c=function(d){var v=function(p){return Kl.get(p)}(d);if(v===void 0)return"continue";var m=o.names.get(v);if(m===void 0||!m.size)return"continue";var g=a.getGroup(d);if(g.length===0)return"continue";var y=ao+".g"+d+'[id="'+v+'"]',w="";m.forEach(function(p){p.length>0&&(w+=p+",")}),s+=g+y+'{content:"'+w+'"}'+hm},f=0;f<l;f++)c(f);return s}(i)})}return e.registerId=function(t){return Zo(t)},e.prototype.rehydrate=function(){!this.server&&fa&&Pd(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ut(ut({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&fa&&t.target!==this.options.target&&jp(this.options.target)!==jp(t.target)&&Pd(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new eT(i):r?new Zj(i):new Jj(i)}(this.options),new Gj(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Zo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Zo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Zo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),nT=/&/g,Nn=47,Vr=42;function Q0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==Nn||e.charCodeAt(o+1)!==Vr)if(i)a===Vr&&e.charCodeAt(o+1)===Nn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function Cw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Cw(n.children,t)),n})}function rT(e){var t,n,r,i=e===void 0?so:e,o=i.options,a=o===void 0?so:o,l=i.plugins,s=l===void 0?mm:l,c=function(g,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):g},f=s.slice();f.push(function(g){g.type===Vc&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(nT,n).replace(r,c))}),a.prefix&&f.push(Tj),f.push(Ej);var d=[],v=Pj(f.concat(jj(function(g){return d.push(g)}))),m=function(g,y,w,p){y===void 0&&(y=""),w===void 0&&(w=""),p===void 0&&(p="&"),t=p,n=y,r=void 0;var h=function(C){if(!Q0(C))return C;for(var k=C.length,P="",E=0,_=0,T=0,I=!1,M=0;M<k;M++){var D=C.charCodeAt(M);if(T!==0||I||D!==Nn||C.charCodeAt(M+1)!==Vr)if(I)D===Vr&&C.charCodeAt(M+1)===Nn&&(I=!1,M++);else if(D!==34&&D!==39||M!==0&&C.charCodeAt(M-1)===92){if(T===0)if(D===123)_++;else if(D===125){if(--_<0){for(var O=M+1;O<k;){var R=C.charCodeAt(O);if(R===59||R===10)break;O++}O<k&&C.charCodeAt(O)===59&&O++,_=0,M=O-1,E=O;continue}_===0&&(P+=C.substring(E,M+1),E=M+1)}else D===59&&_===0&&(P+=C.substring(E,M+1),E=M+1)}else T===0?T=D:T===D&&(T=0);else I=!0,M++}if(E<k){var L=C.substring(E);Q0(L)||(P+=L)}return P}(function(C){if(C.indexOf("//")===-1)return C;for(var k=C.length,P=[],E=0,_=0,T=0,I=0;_<k;){var M=C.charCodeAt(_);if(M!==34&&M!==39||_!==0&&C.charCodeAt(_-1)===92)if(T===0)if(M===Nn&&_+1<k&&C.charCodeAt(_+1)===Vr){for(_+=2;_+1<k&&(C.charCodeAt(_)!==Vr||C.charCodeAt(_+1)!==Nn);)_++;_+=2}else if(M===40&&_>=3&&(32|C.charCodeAt(_-1))==108&&(32|C.charCodeAt(_-2))==114&&(32|C.charCodeAt(_-3))==117)I=1,_++;else if(I>0)M===41?I--:M===40&&I++,_++;else if(M===Vr&&_+1<k&&C.charCodeAt(_+1)===Nn)_>E&&P.push(C.substring(E,_)),E=_+=2;else if(M===Nn&&_+1<k&&C.charCodeAt(_+1)===Nn){for(_>E&&P.push(C.substring(E,_));_<k&&C.charCodeAt(_)!==10;)_++;E=_}else _++;else _++;else T===0?T=M:T===M&&(T=0),_++}return E===0?C:(E<k&&P.push(C.substring(E)),P.join(""))}(g)),b=kj(w||y?"".concat(w," ").concat(y," { ").concat(h," }"):h);return a.namespace&&(b=Cw(b,a.namespace)),d=[],Xl(b,v),d};return m.hash=s.length?s.reduce(function(g,y){return y.name||Qa(15),Br(g,y.name)},5381).toString():"",m}var iT=new Zl,Tp=rT(),kw=Q.createContext({shouldForwardProp:void 0,styleSheet:iT,stylis:Tp});kw.Consumer;Q.createContext(void 0);function Op(){return Q.useContext(kw)}var _w=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Tp);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,xm(this,function(){throw Qa(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Tp),this.name+t.hash},e}();function oT(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Oj||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var aT=function(e){return e>="A"&&e<="Z"};function Z0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;aT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ew=function(e){return e==null||e===!1||e===""},Pw=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Ew(r)&&(Array.isArray(r)&&r.isCss||lo(r)?t.push("".concat(Z0(n),":"),r,";"):Aa(r)?t.push.apply(t,io(io(["".concat(n," {")],Pw(r),!1),["}"],!1)):t.push("".concat(Z0(n),": ").concat(oT(n,r),";")))}return t};function jr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(Ew(e))return i;if(vm(e))return i.push(".".concat(e.styledComponentId)),i;if(lo(e)){if(!lo(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return jr(o,t,n,r,i)}var a;if(e instanceof _w)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Aa(e)){for(var l=Pw(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)jr(e[s],t,n,r,i);return i}function jw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(lo(n)&&!vm(n))return!1}return!0}var sT=vw(Gc),lT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&jw(t),this.componentId=n,this.baseHash=Br(sT,n),this.baseStyle=r,Zl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Yr(i,this.staticRulesId);else{var o=Ql(jr(this.rules,t,n,r)),a=Ep(Br(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Yr(i,a),this.staticRulesId=a}else{for(var s=Br(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")c+=d;else if(d){var v=Ql(jr(d,t,n,r));s=Br(Br(s,String(f)),v),c+=v}}if(c){var m=Ep(s>>>0);if(!n.hasNameForId(this.componentId,m)){var g=r(c,".".concat(m),void 0,this.componentId);n.insertRules(this.componentId,m,g)}i=Yr(i,m)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Zo(this.componentId)):""}},e}(),ym=Q.createContext(void 0);ym.Consumer;var jd={};function cT(e,t,n){var r=vm(e),i=e,o=!Ed(e),a=t.attrs,l=a===void 0?mm:a,s=t.componentId,c=s===void 0?function(C,k){var P=typeof C!="string"?"sc":W0(C);jd[P]=(jd[P]||0)+1;var E="".concat(P,"-").concat(gm(Gc+P+jd[P]));return k?"".concat(k,"-").concat(E):E}(t.displayName,t.parentComponentId):s,f=t.displayName,d=f===void 0?function(C){return Ed(C)?"styled.".concat(C):"Styled(".concat(Rj(C),")")}(e):f,v=t.displayName&&t.componentId?"".concat(W0(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;g=function(C,k){return y(C,k)&&w(C,k)}}else g=y}var p=new lT(n,v,r?i.componentStyle:void 0);function h(C,k){return function(P,E,_){var T=P.attrs,I=P.componentStyle,M=P.defaultProps,D=P.foldedComponentIds,O=P.styledComponentId,R=P.target,L=Q.useContext(ym),z=Op(),A=P.shouldForwardProp||z.shouldForwardProp,j=mw(E,L,M)||so,$=function(W,q,oe){for(var he,ie=ut(ut({},q),{className:void 0,theme:oe}),De=0;De<W.length;De+=1){var We=lo(he=W[De])?he(ie):he;for(var He in We)He==="className"?ie.className=Yr(ie.className,We[He]):He==="style"?ie.style=ut(ut({},ie.style),We[He]):ie[He]=We[He]}return"className"in q&&typeof q.className=="string"&&(ie.className=Yr(ie.className,q.className)),ie}(T,E,j),F=$.as||R,B={};for(var N in $)$[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&$.theme===j||(N==="forwardedAs"?B.as=$.forwardedAs:A&&!A(N,F)||(B[N]=$[N]));var V=function(W,q){var oe=Op(),he=W.generateAndInjectStyles(q,oe.styleSheet,oe.stylis);return he}(I,$),H=V.className,G=Yr(D,O);return H&&(G+=" "+H),$.className&&(G+=" "+$.className),B[Ed(F)&&!gw.has(F)?"class":"className"]=G,_&&(B.ref=_),x.createElement(F,B)}(b,C,k)}h.displayName=d;var b=Q.forwardRef(h);return b.attrs=m,b.componentStyle=p,b.displayName=d,b.shouldForwardProp=g,b.foldedComponentIds=r?Yr(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=v,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(k){for(var P=[],E=1;E<arguments.length;E++)P[E-1]=arguments[E];for(var _=0,T=P;_<T.length;_++)Pp(k,T[_],!0);return k}({},i.defaultProps,C):C}}),xm(b,function(){return".".concat(b.styledComponentId)}),o&&ww(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function J0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ev=function(e){return Object.assign(e,{isCss:!0})};function bm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(lo(e)||Aa(e))return ev(jr(J0(mm,io([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?jr(r):ev(jr(J0(r,t)))}function $p(e,t,n){if(n===void 0&&(n=so),!t)throw Qa(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,bm.apply(void 0,io([i],o,!1)))};return r.attrs=function(i){return $p(e,t,ut(ut({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return $p(e,t,ut(ut({},n),i))},r}var Tw=function(e){return $p(cT,e)},S=Tw;gw.forEach(function(e){S[e]=Tw(e)});var uT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=jw(t),Zl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ql(jr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Zl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function dT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=bm.apply(void 0,io([e],t,!1)),i="sc-global-".concat(gm(JSON.stringify(r))),o=new uT(r,i),a=new WeakMap,l=function(c){var f=Op(),d=Q.useContext(ym),v=a.get(f.styleSheet);return v===void 0&&(v=f.styleSheet.allocateGSInstance(i),a.set(f.styleSheet,v)),(typeof window>"u"||!f.styleSheet.server)&&s(v,c,f.styleSheet,d,f.stylis),Q.useLayoutEffect(function(){return f.styleSheet.server||s(v,c,f.styleSheet,d,f.stylis),function(){var m;o.removeStyles(v,f.styleSheet),m=f.styleSheet.options.target,typeof document<"u"&&(m??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(g){return g.remove()})}},[v,c,f.styleSheet,d,f.stylis]),null};function s(c,f,d,v,m){if(o.isStatic)o.renderStyles(c,Ij,d,m);else{var g=ut(ut({},f),{theme:mw(f,v,l.defaultProps)});o.renderStyles(c,g,d,m)}}return Q.memo(l)}function wm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ql(bm.apply(void 0,io([e],t,!1))),i=gm(r);return new _w(i,r)}const fT=S.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,pT=S.div`
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
`,hT=S.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,mT=S.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,gT=S.div`
  display: flex;
  justify-content: space-around;
  

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`,vT=S.button`
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

    
`;S(Pe)`
  color: var(--main-brand-color);
  display: none;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;S.img`
  display: flex;
  width: 50px;
  height: 50px;

  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;S.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100px;
    height: 100px;

    justify-content: center;
    align-items: center;
  }
`;const xT=S(Pe)`
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
`;S.h1`
  color: var(--white-color);
  font-family: DM Serif Display;
  margin-left: 70px;
`;const yT=S.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,bT=S.button`
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
`;S.div`
  z-index: 9999;
`;S.a`
  color: var(--black-color);
`;const wT=S.div`
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
`,ST=S.button`
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
`,CT=S.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,yi=S(Pe)`
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
`,kT=S.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,_T=S.div`
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
`,ET=S.div`
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
`,PT=S.input`
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
`,jT=S.button`
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
`,TT=S.svg`
  width: 24px;
  height: 24px;
`,OT=S.ul`
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
`,$T=S.li`
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


`,IT=S.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,MT=S.h3`
      text-align: left;
      font-size: 18px;
      font-weight: 400;

`,DT=S.h3`
 font-weight: 500;
      font-size: 20px;
         

`,LT=S.div`
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

    
`,hn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",AT=()=>{const[e,t]=x.useState(""),[n,r]=x.useState([]),[i,o]=x.useState(!1),a=Ke(),l=x.useRef(null);x.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const c=setTimeout(async()=>{try{const d=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(d.data),o(!0)}catch(f){console.error(f)}},300);return()=>clearTimeout(c)},[e]),x.useEffect(()=>{const c=f=>{l.current&&!l.current.contains(f.target)&&o(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const s=c=>{t(""),o(!1),a(`/product/${c.slug??c.id}`)};return u.jsxs(ET,{ref:l,children:[u.jsx(PT,{name:"site-search",value:e,onChange:c=>t(c.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),u.jsx(jT,{className:"search-button",children:u.jsx(TT,{children:u.jsx("use",{href:`${hn}#icon-search`})})}),i&&n.length>0&&u.jsx(OT,{children:n.map(c=>{var v,m;const d=c.new_price&&c.new_price<c.price?c.new_price:c.price;return u.jsxs($T,{onClick:()=>s(c),children:[u.jsx(IT,{src:((m=(v=c.images)==null?void 0:v[0])==null?void 0:m.url)||"/nofoto.png",alt:""}),u.jsxs(LT,{children:[u.jsx(MT,{children:c.name}),u.jsxs(DT,{children:[d," грн."]})]})]},c.id)})})]})};var Ow={exports:{}},$w={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Za=x;function RT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zT=typeof Object.is=="function"?Object.is:RT,FT=Za.useSyncExternalStore,NT=Za.useRef,BT=Za.useEffect,VT=Za.useMemo,UT=Za.useDebugValue;$w.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=NT(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=VT(function(){function s(m){if(!c){if(c=!0,f=m,m=r(m),i!==void 0&&a.hasValue){var g=a.value;if(i(g,m))return d=g}return d=m}if(g=d,zT(f,m))return g;var y=r(m);return i!==void 0&&i(g,y)?(f=m,g):(f=m,d=y)}var c=!1,f,d,v=n===void 0?null:n;return[function(){return s(t())},v===null?void 0:function(){return s(v())}]},[t,n,r,i]);var l=FT(e,o[0],o[1]);return BT(function(){a.hasValue=!0,a.value=l},[l]),UT(l),l};Ow.exports=$w;var WT=Ow.exports;function HT(e){e()}function GT(){let e=null,t=null;return{clear(){e=null,t=null},notify(){HT(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var tv={notify(){},get:()=>[]};function qT(e,t){let n,r=tv,i=0,o=!1;function a(y){f();const w=r.subscribe(y);let p=!1;return()=>{p||(p=!0,w(),d())}}function l(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function c(){return o}function f(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=GT())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=tv)}function v(){o||(o=!0,f())}function m(){o&&(o=!1,d())}const g={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:c,trySubscribe:v,tryUnsubscribe:m,getListeners:()=>r};return g}var YT=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XT=YT(),KT=()=>typeof navigator<"u"&&navigator.product==="ReactNative",QT=KT(),ZT=()=>XT||QT?x.useLayoutEffect:x.useEffect,JT=ZT(),Td=Symbol.for("react-redux-context"),Od=typeof globalThis<"u"?globalThis:{};function eO(){if(!x.createContext)return{};const e=Od[Td]??(Od[Td]=new Map);let t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var $r=eO();function tO(e){const{children:t,context:n,serverState:r,store:i}=e,o=x.useMemo(()=>{const s=qT(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=x.useMemo(()=>i.getState(),[i]);JT(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||$r;return x.createElement(l.Provider,{value:o},t)}var nO=tO;function Sm(e=$r){return function(){return x.useContext(e)}}var Iw=Sm();function Mw(e=$r){const t=e===$r?Iw:Sm(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var rO=Mw();function iO(e=$r){const t=e===$r?rO:Mw(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var It=iO(),oO=(e,t)=>e===t;function aO(e=$r){const t=e===$r?Iw:Sm(e),n=(r,i={})=>{const{equalityFn:o=oO}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:c}=a;x.useRef(!0);const f=x.useCallback({[r.name](v){return r(v)}}[r.name],[r]),d=WT.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,c||l.getState,f,o);return x.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Ue=aO();const sO=S(Pe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,lO=S.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,cO=S.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,uO=S.div`
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
`,dO=({onClick:e})=>{const t=Ue(n=>n.cart.items.length);return u.jsx(sO,{to:"/cart",children:u.jsxs(cO,{onClick:e,children:[u.jsx(lO,{children:u.jsx("use",{href:`${hn}#icon-cart`})}),t>0&&u.jsx(uO,{children:t})]})})},fO=S.nav`
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
`,bi=S(Pe)`
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
`,pO=()=>u.jsxs(fO,{children:[u.jsx(bi,{to:"/",children:"Головна"}),u.jsx(bi,{to:"/catalog",children:"Каталог"}),u.jsx(bi,{to:"/catalog/new",children:"Новинки"}),u.jsx(bi,{to:"/catalog/sale",children:"Акційні товари"}),u.jsx(bi,{to:"/about",children:"Про нас"}),u.jsx(bi,{to:"/contacts",children:"Контакти"})]}),hO=S.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,mO=S(Pe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,gO=S.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,vO=S.div`

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
`,xO=({onClick:e})=>{const t=Ue(n=>n.favorites.items.length);return u.jsx(mO,{to:"/favorite",children:u.jsxs(gO,{onClick:e,children:[u.jsx(hO,{children:u.jsx("use",{href:`${hn}#icon-heart`})}),t>0&&u.jsx(vO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=e=>{const t=bO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>x.createElement("svg",{ref:s,...wO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Dw("lucide",i),...!o&&!SO(l)&&{"aria-hidden":"true"},...l},[...a.map(([c,f])=>x.createElement(c,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(e,t)=>{const n=x.forwardRef(({className:r,...i},o)=>x.createElement(CO,{ref:o,iconNode:t,className:Dw(`lucide-${yO(nv(e))}`,`lucide-${e}`,r),...i}));return n.displayName=nv(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],qc=Qe("arrow-down-narrow-wide",kO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Yc=Qe("arrow-right",_O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],PO=Qe("badge-percent",EO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],TO=Qe("chevron-down",jO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],$O=Qe("chevron-up",OO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Qr=Qe("eye-off",IO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Zr=Qe("eye",MO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ja=Qe("heart",DO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],AO=Qe("house",LO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],zO=Qe("info",RO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FO=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],NO=Qe("layers-plus",FO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],VO=Qe("mail",BO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],WO=Qe("shopping-bag",UO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],bo=Qe("shopping-cart",HO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GO=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Lw=Qe("sliders-horizontal",GO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Aw=Qe("trash-2",qO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YO=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],XO=Qe("user-round",YO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Rw=Qe("x",KO),QO=({openLogin:e})=>{const[t,n]=x.useState(!1),r=Ke(),i=async()=>{const o=localStorage.getItem("token");if(!o){e();return}try{const a=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${o}`}});if(a.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("persist:cart"),localStorage.removeItem("persist:favorites"),window.location.reload(),e();return}if(!a.ok){console.error("Помилка перевірки авторизації:",a.status);return}r("/account/orders")}catch(a){console.error("Помилка перевірки авторизації:",a)}};return u.jsx(fT,{children:u.jsx(pT,{children:u.jsxs(hT,{children:[u.jsxs(mT,{children:[u.jsx(xT,{to:"/",children:"Дідів хлів"}),u.jsxs(gT,{children:[u.jsx(dO,{}),u.jsx(vT,{onClick:i,children:u.jsx(XO,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),u.jsx(xO,{}),u.jsx(pO,{}),u.jsx(bT,{onClick:()=>n(!t),children:u.jsx(yT,{children:u.jsx("use",{href:`${hn}#icon-menu`})})}),u.jsx(_T,{open:t,onClick:()=>n(!1)}),u.jsxs(wT,{open:t,children:[u.jsx(ST,{onClick:()=>n(!1),children:u.jsx(Rw,{size:28,strokeWidth:1.5})}),u.jsxs(CT,{children:[u.jsxs(yi,{onClick:()=>n(!1),to:"/",children:[u.jsx(AO,{size:22,strokeWidth:1.5})," Головна"]}),u.jsxs(yi,{onClick:()=>n(!1),to:"/catalog",children:[u.jsx(WO,{size:22,strokeWidth:1.5})," Каталог"]}),u.jsxs(yi,{onClick:()=>n(!1),to:"/catalog/new",children:[u.jsx(NO,{size:22,strokeWidth:1.5}),"Новинки"]}),u.jsxs(yi,{onClick:()=>n(!1),to:"/catalog/sale",children:[u.jsx(PO,{size:22,strokeWidth:1.5}),"Акційні товари"]}),u.jsxs(yi,{onClick:()=>n(!1),to:"/about",children:[u.jsx(zO,{size:22,strokeWidth:1.5})," Про нас"]}),u.jsxs(yi,{onClick:()=>n(!1),to:"/contacts",children:[u.jsx(VO,{size:22,strokeWidth:1.5})," Контакти"]})]}),u.jsx(kT,{children:u.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),u.jsx(AT,{})]})})})},ZO=S.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,JO=S.footer`
 
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
`,e4=S.div`
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
`,$d=S.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,Id=S.h3`
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
`,wn=S(Pe)`
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
`,t4=S.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,Md=S.a`
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
`,n4=()=>u.jsx(ZO,{children:u.jsxs(JO,{children:[u.jsxs(e4,{children:[u.jsxs($d,{children:[u.jsx(Id,{children:"Навігація"}),u.jsx(wn,{to:"/",children:"Головна"}),u.jsx(wn,{to:"/about",children:"Про нас"}),u.jsx(wn,{to:"/catalog",children:"Каталог"}),u.jsx(wn,{to:"/contacts",children:"Контакти"})]}),u.jsxs($d,{children:[u.jsx(Id,{children:"Інформація"}),u.jsx(wn,{to:"/delivery",children:"Оплата і доставка"}),u.jsx(wn,{children:"Повернення"}),u.jsx(wn,{children:"Гарантія"}),u.jsx(wn,{children:"Політика конфіденційності"})]})]}),u.jsxs($d,{children:[u.jsx(Id,{children:"Контакти"}),u.jsx(wn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),u.jsx(wn,{href:"mailto:email@email.com",children:"email@email.com"}),u.jsxs(t4,{children:[u.jsx(Md,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-instagram`})})}),u.jsx(Md,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-telegram`})})}),u.jsx(Md,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:u.jsx("use",{href:`${hn}#icon-olx`})})})]})]})]})}),r4=({openLogin:e,openRegister:t})=>u.jsxs(u.Fragment,{children:[u.jsx(QO,{openLogin:e,openRegister:t}),u.jsx("main",{style:{flex:1},children:u.jsx(Jx,{})}),u.jsx(n4,{})]}),i4=S.section`
  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
`,o4=S.h2`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,a4=S.div`
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
`,s4=S.div`
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
`,l4=S.p`
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
`,c4=S(Pe)`
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
`,u4=S.span`
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
`,d4=S.div`
  padding: 10px 0;
`,f4=S.h3`
  font-size: 20px;
  font-weight: 600;

  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`,p4=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;S.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`;S.button`
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
`;S(Pe)`
  color: var(--white-color);
  padding: 10px 20px;
  background: var(--orange-color);
  border-radius: 15px;
  text-decoration: none;
`;const h4=S(Pe)`
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
`,m4=S.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
`,g4=S.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function zw(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=zw(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Jr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=zw(e))&&(r&&(r+=" "),r+=t);return r}function v4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}v4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var es=e=>typeof e=="number"&&!isNaN(e),ai=e=>typeof e=="string",Jn=e=>typeof e=="function",x4=e=>ai(e)||es(e),Ip=e=>ai(e)||Jn(e)?e:null,y4=(e,t)=>e===!1||es(e)&&e>0?e:t,Mp=e=>x.isValidElement(e)||ai(e)||Jn(e)||es(e);function b4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function w4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:c,isIn:f,playToast:d}){let v=n?`${e}--${a}`:e,m=n?`${t}--${a}`:t,g=x.useRef(0);return x.useLayoutEffect(()=>{let y=c.current,w=v.split(" "),p=h=>{h.target===c.current&&(d(),y.removeEventListener("animationend",p),y.removeEventListener("animationcancel",p),g.current===0&&h.type!=="animationcancel"&&y.classList.remove(...w))};y.classList.add(...w),y.addEventListener("animationend",p),y.addEventListener("animationcancel",p)},[]),x.useEffect(()=>{let y=c.current,w=()=>{y.removeEventListener("animationend",w),r?b4(y,s,i):s()};f||(l?w():(g.current=1,y.className+=` ${m}`,y.addEventListener("animationend",w)))},[f]),Q.createElement(Q.Fragment,null,o)}}function rv(e,t){return{content:Fw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Fw(e,t,n=!1){return x.isValidElement(e)&&!ai(e.type)?x.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Jn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function S4({closeToast:e,theme:t,ariaLabel:n="close"}){return Q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},Q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function C4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:c,theme:f}){let d=i||a&&l===0,v={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(v.transform=`scaleX(${l})`);let m=Jr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),g=Jn(o)?o({rtl:s,type:r,defaultClassName:m}):Jr(m,o),y={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{c&&n()}};return Q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},Q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${r}`}),Q.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:g,style:v,...y}))}var k4=1,Nw=()=>`${k4++}`;function _4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,c=new Set,f=h=>(c.add(h),()=>c.delete(h)),d=()=>{a=Array.from(s.values()),c.forEach(h=>h())},v=({containerId:h,toastId:b,updateId:C})=>{let k=h?h!==e:e!==1,P=s.has(b)&&C==null;return k||P},m=(h,b)=>{s.forEach(C=>{var k;(b==null||b===C.props.toastId)&&((k=C.toggle)==null||k.call(C,h))})},g=h=>{var b,C;(C=(b=h.props)==null?void 0:b.onClose)==null||C.call(b,h.removalReason),h.isActive=!1},y=h=>{if(h==null)s.forEach(g);else{let b=s.get(h);b&&g(b)}d()},w=()=>{i-=o.length,o=[]},p=h=>{var b,C;let{toastId:k,updateId:P}=h.props,E=P==null;h.staleId&&s.delete(h.staleId),h.isActive=!0,s.set(k,h),d(),n(rv(h,E?"added":"updated")),E&&((C=(b=h.props).onOpen)==null||C.call(b))};return{id:e,props:l,observe:f,toggle:m,removeToast:y,toasts:s,clearQueue:w,buildToast:(h,b)=>{if(v(b))return;let{toastId:C,updateId:k,data:P,staleId:E,delay:_}=b,T=k==null;T&&i++;let I={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(b).filter(([D,O])=>O!=null)),toastId:C,updateId:k,data:P,isIn:!1,className:Ip(b.className||l.toastClassName),progressClassName:Ip(b.progressClassName||l.progressClassName),autoClose:b.isLoading?!1:y4(b.autoClose,l.autoClose),closeToast(D){s.get(C).removalReason=D,y(C)},deleteToast(){let D=s.get(C);if(D!=null){if(n(rv(D,"removed")),s.delete(C),i--,i<0&&(i=0),o.length>0){p(o.shift());return}d()}}};I.closeButton=l.closeButton,b.closeButton===!1||Mp(b.closeButton)?I.closeButton=b.closeButton:b.closeButton===!0&&(I.closeButton=Mp(l.closeButton)?l.closeButton:!0);let M={content:h,props:I,staleId:E};l.limit&&l.limit>0&&i>l.limit&&T?o.push(M):es(_)?setTimeout(()=>{p(M)},_):p(M)},setProps(h){l=h},setToggle:(h,b)=>{let C=s.get(h);C&&(C.toggle=b)},isToastActive:h=>{var b;return(b=s.get(h))==null?void 0:b.isActive},getSnapshot:()=>a}}var gt=new Map,Ra=[],Dp=new Set,E4=e=>Dp.forEach(t=>t(e)),Bw=()=>gt.size>0;function P4(){Ra.forEach(e=>Uw(e.content,e.options)),Ra=[]}var j4=(e,{containerId:t})=>{var n;return(n=gt.get(t||1))==null?void 0:n.toasts.get(e)};function Vw(e,t){var n;if(t)return!!((n=gt.get(t))!=null&&n.isToastActive(e));let r=!1;return gt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function T4(e){if(!Bw()){Ra=Ra.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||x4(e))gt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=gt.get(e.containerId);t?t.removeToast(e.id):gt.forEach(n=>{n.removeToast(e.id)})}}var O4=(e={})=>{gt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Uw(e,t){Mp(e)&&(Bw()||Ra.push({content:e,options:t}),gt.forEach(n=>{n.buildToast(e,t)}))}function $4(e){var t;(t=gt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Ww(e,t){gt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function I4(e){let t=e.containerId||1;return{subscribe(n){let r=_4(t,e,E4);gt.set(t,r);let i=r.observe(n);return P4(),()=>{i(),gt.delete(t)}},setProps(n){var r;(r=gt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=gt.get(t))==null?void 0:n.getSnapshot()}}}function M4(e){return Dp.add(e),()=>{Dp.delete(e)}}function D4(e){return e&&(ai(e.toastId)||es(e.toastId))?e.toastId:Nw()}function ts(e,t){return Uw(e,t),t.toastId}function Xc(e,t){return{...t,type:t&&t.type||e,toastId:D4(t)}}function Kc(e){return(t,n)=>ts(t,Xc(e,n))}function K(e,t){return ts(e,Xc("default",t))}K.loading=(e,t)=>ts(e,Xc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function L4(e,{pending:t,error:n,success:r},i){let o;t&&(o=ai(t)?K.loading(t,i):K.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,f,d)=>{if(f==null){K.dismiss(o);return}let v={type:c,...a,...i,data:d},m=ai(f)?{render:f}:f;return o?K.update(o,{...v,...m}):K(m.render,{...v,...m}),d},s=Jn(e)?e():e;return s.then(c=>l("success",r,c)).catch(c=>l("error",n,c)),s}K.promise=L4;K.success=Kc("success");K.info=Kc("info");K.error=Kc("error");K.warning=Kc("warning");K.warn=K.warning;K.dark=(e,t)=>ts(e,Xc("default",{theme:"dark",...t}));function A4(e){T4(e)}K.dismiss=A4;K.clearWaitingQueue=O4;K.isActive=Vw;K.update=(e,t={})=>{let n=j4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Nw()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,ts(a,o)}};K.done=e=>{K.update(e,{progress:1})};K.onChange=M4;K.play=e=>Ww(!0,e);K.pause=e=>Ww(!1,e);function R4(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=x.useRef(I4(e)).current;i(e);let o=(t=x.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(c=>{let{position:f}=c.props;s.has(f)||s.set(f,[]),s.get(f).push(c)}),Array.from(s,c=>l(c[0],c[1]))}return{getToastToRender:a,isToastActive:Vw,count:o==null?void 0:o.length}}function z4(e){let[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useRef(null),a=x.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:c,onClick:f,closeOnClick:d}=e;$4({id:e.toastId,containerId:e.containerId,fn:n}),x.useEffect(()=>{if(e.pauseOnFocusLoss)return v(),()=>{m()}},[e.pauseOnFocusLoss]);function v(){document.hasFocus()||p(),window.addEventListener("focus",w),window.addEventListener("blur",p)}function m(){window.removeEventListener("focus",w),window.removeEventListener("blur",p)}function g(E){if(e.draggable===!0||e.draggable===E.pointerType){h();let _=o.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=E.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=E.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function y(E){let{top:_,bottom:T,left:I,right:M}=o.current.getBoundingClientRect();E.nativeEvent.type!=="touchend"&&e.pauseOnHover&&E.clientX>=I&&E.clientX<=M&&E.clientY>=_&&E.clientY<=T?p():w()}function w(){n(!0)}function p(){n(!1)}function h(){a.didMove=!1,document.addEventListener("pointermove",C),document.addEventListener("pointerup",k)}function b(){document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",k)}function C(E){let _=o.current;if(a.canDrag&&_){a.didMove=!0,t&&p(),e.draggableDirection==="x"?a.delta=E.clientX-a.start:a.delta=E.clientY-a.start,a.start!==E.clientX&&(a.canCloseOnClick=!1);let T=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${T},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function k(){b();let E=o.current;if(a.canDrag&&a.didMove&&E){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}let P={onPointerDown:g,onPointerUp:y};return l&&s&&(P.onMouseEnter=p,e.stacked||(P.onMouseLeave=w)),d&&(P.onClick=E=>{f&&f(E),a.canCloseOnClick&&c(!0)}),{playToast:w,pauseToast:p,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:P}}var F4=typeof window<"u"?x.useLayoutEffect:x.useEffect,Qc=({theme:e,type:t,isLoading:n,...r})=>Q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function N4(e){return Q.createElement(Qc,{...e},Q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function B4(e){return Q.createElement(Qc,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function V4(e){return Q.createElement(Qc,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function U4(e){return Q.createElement(Qc,{...e},Q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function W4(){return Q.createElement("div",{className:"Toastify__spinner"})}var Lp={info:B4,warning:N4,success:V4,error:U4,spinner:W4},H4=e=>e in Lp;function G4({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Jn(r)?i=r({...o,isLoading:n}):x.isValidElement(r)?i=x.cloneElement(r,o):n?i=Lp.spinner():H4(t)&&(i=Lp[t](o))),i}var q4=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=z4(e),{closeButton:a,children:l,autoClose:s,onClick:c,type:f,hideProgressBar:d,closeToast:v,transition:m,position:g,className:y,style:w,progressClassName:p,updateId:h,role:b,progress:C,rtl:k,toastId:P,deleteToast:E,isIn:_,isLoading:T,closeOnClick:I,theme:M,ariaLabel:D}=e,O=Jr("Toastify__toast",`Toastify__toast-theme--${M}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":I}),R=Jn(y)?y({rtl:k,position:g,type:f,defaultClassName:O}):Jr(O,y),L=G4(e),z=!!C||!s,A={closeToast:v,type:f,theme:M},j=null;return a===!1||(Jn(a)?j=a(A):x.isValidElement(a)?j=x.cloneElement(a,A):j=S4(A)),Q.createElement(m,{isIn:_,done:E,position:g,preventExitTransition:n,nodeRef:r,playToast:o},Q.createElement("div",{id:P,tabIndex:0,onClick:c,"data-in":_,className:R,...i,style:w,ref:r,..._&&{role:b,"aria-label":D}},L!=null&&Q.createElement("div",{className:Jr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!T})},L),Fw(l,e,!t),j,!e.customProgressBar&&Q.createElement(C4,{...h&&!z?{key:`p-${h}`}:{},rtl:k,theme:M,delay:s,isRunning:t,isIn:_,closeToast:v,hide:d,type:f,className:p,controlledProgress:z,progress:C||0})))},Y4=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),X4=w4(Y4("bounce",!0)),K4={position:"top-right",transition:X4,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Ln(e){let t={...K4,...e},n=e.stacked,[r,i]=x.useState(!0),o=x.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=R4(t),{className:c,style:f,rtl:d,containerId:v,hotKeys:m}=t;function g(w){let p=Jr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":d});return Jn(c)?c({position:w,rtl:d,defaultClassName:p}):Jr(p,Ip(c))}function y(){n&&(i(!0),K.play())}return F4(()=>{var w;if(n){let p=o.current.querySelectorAll('[data-in="true"]'),h=12,b=(w=t.position)==null?void 0:w.includes("top"),C=0,k=0;Array.from(p).reverse().forEach((P,E)=>{let _=P;_.classList.add("Toastify__toast--stacked"),E>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=b?"top":"bot");let T=C*(r?.2:1)+(r?0:h*E);_.style.setProperty("--y",`${b?T:T*-1}px`),_.style.setProperty("--g",`${h}`),_.style.setProperty("--s",`${1-(r?k:0)}`),C+=_.offsetHeight,k+=.025})}},[r,s,n]),x.useEffect(()=>{function w(p){var h;let b=o.current;m(p)&&((h=b.querySelector('[tabIndex="0"]'))==null||h.focus(),i(!1),K.pause()),p.key==="Escape"&&(document.activeElement===b||b!=null&&b.contains(document.activeElement))&&(i(!0),K.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[m]),Q.createElement("section",{ref:o,className:"Toastify",id:v,onMouseEnter:()=>{n&&(i(!1),K.pause())},onMouseLeave:y,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,p)=>{let h=p.length?{...f}:{...f,pointerEvents:"none"};return Q.createElement("div",{tabIndex:-1,className:g(w),"data-stacked":n,style:h,key:`c-${w}`},p.map(({content:b,props:C})=>Q.createElement(q4,{...C,stacked:n,collapseAll:y,isIn:l(C.toastId,C.containerId),key:`t-${C.key}`},b)))}))}const er="/Didiv/assets/nofoto-2f8d9d99.png",Q4=S.div`
`,Z4=S.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,J4=S.h2`
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

`,e$=S.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;S.div``;const t$=S.div`
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
`,n$=S.div`
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
`,Hw=S.div`
  position: relative;
  display: block;
 `,Zc=S.div`
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
`,Cm=S.div`
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
`,km=S.div`
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
`,r$=S.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;
`,i$=S.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,o$=S.p`
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
`;S.p`
     font-size: 17px;
    font-weight: 800;

`;const Gw=S.div.attrs({className:"card-buttons"})`
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
`,Jl=S.button`
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
`;S.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;S.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const a$=S.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,Dd=S.button`
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
`,s$=S.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,l$=S.button`
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
`,c$=S.div`
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
`,wi=S.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,qw=S.div`
  text-align: center;
  width: 100px;
 
`,Yw=S.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Xw=S.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Kw=S.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Qw=S.span`
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
`;function Je(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var u$=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),iv=u$,Ld=()=>Math.random().toString(36).substring(7).split("").join("."),d$={INIT:`@@redux/INIT${Ld()}`,REPLACE:`@@redux/REPLACE${Ld()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Ld()}`},ec=d$;function _m(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Em(e,t,n){if(typeof e!="function")throw new Error(Je(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Je(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Je(1));return n(Em)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function c(){a===o&&(a=new Map,o.forEach((w,p)=>{a.set(p,w)}))}function f(){if(s)throw new Error(Je(3));return i}function d(w){if(typeof w!="function")throw new Error(Je(4));if(s)throw new Error(Je(5));let p=!0;c();const h=l++;return a.set(h,w),function(){if(p){if(s)throw new Error(Je(6));p=!1,c(),a.delete(h),o=null}}}function v(w){if(!_m(w))throw new Error(Je(7));if(typeof w.type>"u")throw new Error(Je(8));if(typeof w.type!="string")throw new Error(Je(17));if(s)throw new Error(Je(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(h=>{h()}),w}function m(w){if(typeof w!="function")throw new Error(Je(10));r=w,v({type:ec.REPLACE})}function g(){const w=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(Je(11));function h(){const C=p;C.next&&C.next(f())}return h(),{unsubscribe:w(h)}},[iv](){return this}}}return v({type:ec.INIT}),{dispatch:v,subscribe:d,getState:f,replaceReducer:m,[iv]:g}}function f$(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:ec.INIT})>"u")throw new Error(Je(12));if(typeof n(void 0,{type:ec.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Je(13))})}function p$(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{f$(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const c={};for(let f=0;f<r.length;f++){const d=r[f],v=n[d],m=a[d],g=v(m,l);if(typeof g>"u")throw l&&l.type,new Error(Je(14));c[d]=g,s=s||g!==m}return s=s||r.length!==Object.keys(a).length,s?c:a}}function tc(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function h$(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Je(15))};const a={getState:i.getState,dispatch:(s,...c)=>o(s,...c)},l=e.map(s=>s(a));return o=tc(...l)(i.dispatch),{...i,dispatch:o}}}function m$(e){return _m(e)&&"type"in e&&typeof e.type=="string"}var Zw=Symbol.for("immer-nothing"),ov=Symbol.for("immer-draftable"),xt=Symbol.for("immer-state");function un(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var zt=Object,co=zt.getPrototypeOf,nc="constructor",Jc="prototype",Ap="configurable",rc="enumerable",ul="writable",za="value",tr=e=>!!e&&!!e[xt];function vn(e){var t;return e?Jw(e)||tu(e)||!!e[ov]||!!((t=e[nc])!=null&&t[ov])||nu(e)||ru(e):!1}var g$=zt[Jc][nc].toString(),av=new WeakMap;function Jw(e){if(!e||!Pm(e))return!1;const t=co(e);if(t===null||t===zt[Jc])return!0;const n=zt.hasOwnProperty.call(t,nc)&&t[nc];if(n===Object)return!0;if(!Ti(n))return!1;let r=av.get(n);return r===void 0&&(r=Function.toString.call(n),av.set(n,r)),r===g$}function eu(e,t,n=!0){ns(e)===0?(n?Reflect.ownKeys(e):zt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function ns(e){const t=e[xt];return t?t.type_:tu(e)?1:nu(e)?2:ru(e)?3:0}var sv=(e,t,n=ns(e))=>n===2?e.has(t):zt[Jc].hasOwnProperty.call(e,t),Rp=(e,t,n=ns(e))=>n===2?e.get(t):e[t],ic=(e,t,n,r=ns(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function v$(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var tu=Array.isArray,nu=e=>e instanceof Map,ru=e=>e instanceof Set,Pm=e=>typeof e=="object",Ti=e=>typeof e=="function",Ad=e=>typeof e=="boolean";function x$(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Vn=e=>e.copy_||e.base_,jm=e=>e.modified_?e.copy_:e.base_;function zp(e,t){if(nu(e))return new Map(e);if(ru(e))return new Set(e);if(tu(e))return Array[Jc].slice.call(e);const n=Jw(e);if(t===!0||t==="class_only"&&!n){const r=zt.getOwnPropertyDescriptors(e);delete r[xt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[ul]===!1&&(l[ul]=!0,l[Ap]=!0),(l.get||l.set)&&(r[a]={[Ap]:!0,[ul]:!0,[rc]:l[rc],[za]:e[a]})}return zt.create(co(e),r)}else{const r=co(e);if(r!==null&&n)return{...e};const i=zt.create(r);return zt.assign(i,e)}}function Tm(e,t=!1){return iu(e)||tr(e)||!vn(e)||(ns(e)>1&&zt.defineProperties(e,{set:js,add:js,clear:js,delete:js}),zt.freeze(e),t&&eu(e,(n,r)=>{Tm(r,!0)},!1)),e}function y$(){un(2)}var js={[za]:y$};function iu(e){return e===null||!Pm(e)?!0:zt.isFrozen(e)}var oc="MapSet",Fp="Patches",lv="ArrayMethods",eS={};function si(e){const t=eS[e];return t||un(0,e),t}var cv=e=>!!eS[e],Fa,tS=()=>Fa,b$=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:cv(oc)?si(oc):void 0,arrayMethodsPlugin_:cv(lv)?si(lv):void 0});function uv(e,t){t&&(e.patchPlugin_=si(Fp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Np(e){Bp(e),e.drafts_.forEach(w$),e.drafts_=null}function Bp(e){e===Fa&&(Fa=e.parent_)}var dv=e=>Fa=b$(Fa,e);function w$(e){const t=e[xt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function fv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[xt].modified_&&(Np(t),un(4)),vn(e)&&(e=pv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[xt].base_,e,t)}else e=pv(t,n);return S$(t,e,!0),Np(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Zw?e:void 0}function pv(e,t){if(iu(t))return t;const n=t[xt];if(!n)return ac(t,e.handledSet_,e);if(!ou(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);iS(n,e)}return n.copy_}function S$(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Tm(t,n)}function nS(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var ou=(e,t)=>e.scope_===t,C$=[];function rS(e,t,n,r){const i=Vn(e),o=e.type_;if(r!==void 0&&Rp(i,r,o)===t){ic(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;eu(i,(s,c)=>{if(tr(c)){const f=l.get(c)||[];f.push(s),l.set(c,f)}})}const a=e.draftLocations_.get(t)??C$;for(const l of a)ic(i,l,n,o)}function k$(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!ou(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=jm(o);rS(e,o.draft_??o,a,n),iS(o,i)})}function iS(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}nS(e)}}function _$(e,t,n){const{scope_:r}=e;if(tr(n)){const i=n[xt];ou(i,r)&&i.callbacks_.push(function(){dl(e);const a=jm(i);rS(e,n,a,t)})}else vn(n)&&e.callbacks_.push(function(){const o=Vn(e);e.type_===3?o.has(n)&&ac(n,r.handledSet_,r):Rp(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&ac(Rp(e.copy_,t,e.type_),r.handledSet_,r)})}function ac(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||tr(e)||t.has(e)||!vn(e)||iu(e)||(t.add(e),eu(e,(r,i)=>{if(tr(i)){const o=i[xt];if(ou(o,n)){const a=jm(o);ic(e,r,a,e.type_),nS(o)}}else vn(i)&&ac(i,t,n)})),e}function E$(e,t){const n=tu(e),r={type_:n?1:0,scope_:t?t.scope_:tS(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=sc;n&&(i=[r],o=Na);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var sc={get(e,t){if(t===xt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Vn(e);if(!sv(i,t,e.type_))return P$(e,i,t);const o=i[t];if(e.finalized_||!vn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&x$(t))return o;if(o===Rd(e.base_,t)){dl(e);const a=e.type_===1?+t:t,l=Up(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Vn(e)},ownKeys(e){return Reflect.ownKeys(Vn(e))},set(e,t,n){const r=oS(Vn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Rd(Vn(e),t),o=i==null?void 0:i[xt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(v$(n,i)&&(n!==void 0||sv(e.base_,t,e.type_)))return!0;dl(e),Vp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),_$(e,t,n)),!0},deleteProperty(e,t){return dl(e),Rd(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Vp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Vn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[ul]:!0,[Ap]:e.type_!==1||t!=="length",[rc]:r[rc],[za]:n[t]}},defineProperty(){un(11)},getPrototypeOf(e){return co(e.base_)},setPrototypeOf(){un(12)}},Na={};for(let e in sc){let t=sc[e];Na[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Na.deleteProperty=function(e,t){return Na.set.call(this,e,t,void 0)};Na.set=function(e,t,n){return sc.set.call(this,e[0],t,n,e[0])};function Rd(e,t){const n=e[xt];return(n?Vn(n):e)[t]}function P$(e,t,n){var i;const r=oS(t,n);return r?za in r?r[za]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function oS(e,t){if(!(t in e))return;let n=co(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=co(n)}}function Vp(e){e.modified_||(e.modified_=!0,e.parent_&&Vp(e.parent_))}function dl(e){e.copy_||(e.assigned_=new Map,e.copy_=zp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var j$=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(Ti(t)&&!Ti(n)){const o=n;n=t;const a=this;return function(s=o,...c){return a.produce(s,f=>n.call(this,f,...c))}}Ti(n)||un(6),r!==void 0&&!Ti(r)&&un(7);let i;if(vn(t)){const o=dv(this),a=Up(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?Np(o):Bp(o)}return uv(o,r),fv(i,o)}else if(!t||!Pm(t)){if(i=n(t),i===void 0&&(i=t),i===Zw&&(i=void 0),this.autoFreeze_&&Tm(i,!0),r){const o=[],a=[];si(Fp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else un(1,t)},this.produceWithPatches=(t,n)=>{if(Ti(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},Ad(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Ad(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Ad(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){vn(e)||un(8),tr(e)&&(e=T$(e));const t=dv(this),n=Up(t,e,void 0);return n[xt].isManual_=!0,Bp(t),n}finishDraft(e,t){const n=e&&e[xt];(!n||!n.isManual_)&&un(9);const{scope_:r}=n;return uv(r,t),fv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=si(Fp).applyPatches_;return tr(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Up(e,t,n,r){const[i,o]=nu(t)?si(oc).proxyMap_(t,n):ru(t)?si(oc).proxySet_(t,n):E$(t,n);return((n==null?void 0:n.scope_)??tS()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?k$(n,o,r):o.callbacks_.push(function(s){var f;(f=s.mapSetPlugin_)==null||f.fixSetContents(o);const{patchPlugin_:c}=s;o.modified_&&c&&c.generatePatches_(o,[],s)}),i}function T$(e){return tr(e)||un(10,e),aS(e)}function aS(e){if(!vn(e)||iu(e))return e;const t=e[xt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=zp(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=zp(e,!0);return eu(n,(i,o)=>{ic(n,i,aS(o))},r),t&&(t.finalized_=!1),n}var O$=new j$,sS=O$.produce;function lS(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var $$=lS(),I$=lS,M$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?tc:tc.apply(null,arguments)};function hv(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(qn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>m$(r)&&r.type===e,n}var cS=class Jo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Jo.prototype)}static get[Symbol.species](){return Jo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Jo(...t[0].concat(this)):new Jo(...t.concat(this))}};function mv(e){return vn(e)?sS(e,()=>{}):e}function Ts(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function D$(e){return typeof e=="boolean"}var L$=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new cS;return n&&(D$(n)?a.push($$):a.push(I$(n.extraArgument))),a},A$="RTK_autoBatch",gv=e=>t=>{setTimeout(t,e)},R$=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:gv(10):e.type==="callback"?e.queueNotification:gv(e.timeout),c=()=>{a=!1,o&&(o=!1,l.forEach(f=>f()))};return Object.assign({},r,{subscribe(f){const d=()=>i&&f(),v=r.subscribe(d);return l.add(f),()=>{v(),l.delete(f)}},dispatch(f){var d;try{return i=!((d=f==null?void 0:f.meta)!=null&&d[A$]),o=!i,o&&(a||(a=!0,s(c))),r.dispatch(f)}finally{i=!0}}})},z$=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new cS(e);return r&&i.push(R$(typeof r=="object"?r:void 0)),i};function F$(e){const t=L$(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(_m(n))s=p$(n);else throw new Error(qn(1));let c;typeof r=="function"?c=r(t):c=t();let f=tc;i&&(f=M$({trace:!1,...typeof i=="object"&&i}));const d=h$(...c),v=z$(d);let m=typeof l=="function"?l(v):v();const g=f(...m);return Em(s,a,g)}function uS(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(qn(28));if(l in t)throw new Error(qn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function N$(e){return typeof e=="function"}function B$(e,t){let[n,r,i]=uS(t),o;if(N$(e))o=()=>mv(e());else{const l=mv(e);o=()=>l}function a(l=o(),s){let c=[n[s.type],...r.filter(({matcher:f})=>f(s)).map(({reducer:f})=>f)];return c.filter(f=>!!f).length===0&&(c=[i]),c.reduce((f,d)=>{if(d)if(tr(f)){const m=d(f,s);return m===void 0?f:m}else{if(vn(f))return sS(f,v=>d(v,s));{const v=d(f,s);if(v===void 0){if(f===null)return f;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return f},l)}return a.getInitialState=o,a}var V$=Symbol.for("rtk-slice-createasyncthunk");function U$(e,t){return`${e}/${t}`}function W$({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[V$];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(qn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(G$()):i.reducers)||{},s=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},f={addCase(C,k){const P=typeof C=="string"?C:C.type;if(!P)throw new Error(qn(12));if(P in c.sliceCaseReducersByType)throw new Error(qn(13));return c.sliceCaseReducersByType[P]=k,f},addMatcher(C,k){return c.sliceMatchers.push({matcher:C,reducer:k}),f},exposeAction(C,k){return c.actionCreators[C]=k,f},exposeCaseReducer(C,k){return c.sliceCaseReducersByName[C]=k,f}};s.forEach(C=>{const k=l[C],P={reducerName:C,type:U$(o,C),createNotation:typeof i.reducers=="function"};Y$(k)?K$(P,k,f,t):q$(P,k,f)});function d(){const[C={},k=[],P=void 0]=typeof i.extraReducers=="function"?uS(i.extraReducers):[i.extraReducers],E={...C,...c.sliceCaseReducersByType};return B$(i.initialState,_=>{for(let T in E)_.addCase(T,E[T]);for(let T of c.sliceMatchers)_.addMatcher(T.matcher,T.reducer);for(let T of k)_.addMatcher(T.matcher,T.reducer);P&&_.addDefaultCase(P)})}const v=C=>C,m=new Map,g=new WeakMap;let y;function w(C,k){return y||(y=d()),y(C,k)}function p(){return y||(y=d()),y.getInitialState()}function h(C,k=!1){function P(_){let T=_[C];return typeof T>"u"&&k&&(T=Ts(g,P,p)),T}function E(_=v){const T=Ts(m,k,()=>new WeakMap);return Ts(T,_,()=>{const I={};for(const[M,D]of Object.entries(i.selectors??{}))I[M]=H$(D,_,()=>Ts(g,_,p),k);return I})}return{reducerPath:C,getSelectors:E,get selectors(){return E(P)},selectSlice:P}}const b={name:o,reducer:w,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:p,...h(a),injectInto(C,{reducerPath:k,...P}={}){const E=k??a;return C.inject({reducerPath:E,reducer:w},P),{...b,...h(E,!0)}}};return b}}function H$(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var dS=W$();function G$(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function q$({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!X$(r))throw new Error(qn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?hv(e,a):hv(e))}function Y$(e){return e._reducerDefinitionType==="asyncThunk"}function X$(e){return e._reducerDefinitionType==="reducerWithPrepare"}function K$({type:e,reducerName:t},n,r,i){if(!i)throw new Error(qn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:c,options:f}=n,d=i(e,o,f);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),c&&r.addMatcher(d.settled,c),r.exposeCaseReducer(t,{fulfilled:a||Os,pending:l||Os,rejected:s||Os,settled:c||Os})}function Os(){}function qn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const fS=dS({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]},setFavorites(e,t){e.items=t.payload},addFavorite(e,t){e.items.some(r=>r.id===t.payload.id)||e.items.push(t.payload)},removeFavorite(e,t){e.items=e.items.filter(n=>n.id!==t.payload)}}}),{toggleFavorite:GV,clearFavorite:rs,addFavorite:vv,removeFavorite:xv,setFavorites:Q$}=fS.actions,Z$=fS.reducer,J$=async(e,t,n,r)=>{const i=t==null?void 0:t.find(a=>{var l;return((l=a.product)==null?void 0:l.documentId)===(e==null?void 0:e.documentId)});if(i){const a=i.user.map(l=>l.documentId);if(!a.includes(n)){a.push(n);const l=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:a}})});if(!l.ok)throw new Error("Не вдалося оновити favorite");return await l.json()}return i}const o=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e.documentId,user:[n]}})});if(!o.ok)throw new Error("Не вдалося створити favorite");return await o.json()},e5=async(e,t,n,r)=>{var l;const i=t==null?void 0:t.find(s=>{var c;return((c=s.product)==null?void 0:c.documentId)===(e==null?void 0:e.documentId)});if(!i)return;const o=(l=i.user)==null?void 0:l.filter(s=>s.documentId!==n).map(s=>s.documentId);if((o==null?void 0:o.length)===0){if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити favorite");return}const a=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:o}})});if(!a.ok)throw new Error("Не вдалося оновити favorite");return await a.json()},pi=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o)return t?(n(xv(e.id)),r.warning(`${e.name} видалено з обраного`)):(n(vv(e)),r.success(`${e.name} додано в обране`)),!0;const a=o.documentId,l=o.id;try{const s=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${l}?populate[favorites][populate][0]=product&populate[favorites][populate][1]=user`,{headers:{Authorization:`Bearer ${i}`}});if(!s.ok)throw new Error("Не вдалося отримати favorites користувача");const c=await s.json(),f=await fetch("https://backenddidiv-production.up.railway.app/api/favorites?populate=*",{headers:{Authorization:`Bearer ${i}`}}),{data:d}=await f.json(),v=c==null?void 0:c.favorites;return t?(await e5(e,v,a,i),n(xv(e.id)),r.warning(`${e.name} видалено з обраного`),!0):(await J$(e,d,a,i),n(vv(e)),r.success(`${e.name} додано в обране`),!0)}catch{return r.error("Не вдалося оновити обране"),!1}},pS=dS({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===n.id);if(r){if(r.quantity>=n.stock)return;r.quantity+=1}else e.items.push({...n,quantity:1})},setCartItemQuantity:(e,t)=>{const{id:n,quantity:r}=t.payload,i=e.items.find(o=>o.id===n);i&&(i.quantity=r)},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},setCartItems:(e,t)=>{e.items=t.payload},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{setCartItems:hS,addToCart:yv,setCartItemQuantity:bv,removeFromCart:mS,clearCart:nr,addAllToCart:t5,incrementQuantity:wv,decrementQuantity:Sv}=pS.actions,n5=pS.reducer,r5=async(e,t,n,r)=>{const i=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e,quantity:t,user:n}})});if(!i.ok)throw new Error("Не вдалося створити CartItem");return i.json()},i5=async(e,t,n)=>{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({data:{quantity:t}})});if(!r.ok)throw new Error("Не вдалося оновити CartItem");return r.json()},wo=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o){for(let l=0;l<t;l++)n(yv(e));return r.success(`${e.name} додано в кошик!`),!0}const a=o.id;try{const l=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${a}&populate=product`,{headers:{Authorization:`Bearer ${i}`}});if(!l.ok)throw new Error("Не вдалося отримати кошик користувача");const{data:s}=await l.json(),c=s.find(f=>{var d;return((d=f.product)==null?void 0:d.documentId)===e.documentId});if(c){const f=c.quantity+t;if(f>e.stock)return r.warning(`Доступно лише ${e.stock} шт.`),!1;await i5(c.documentId,f,i),n(bv({id:e.id,quantity:f}))}else await r5(e.documentId,t,a,i),n(yv({...e})),t>1&&n(bv({id:e.id,quantity:t}));return r.success(`${e.name} додано в кошик!`),!0}catch(l){return console.error(l),r.error("Не вдалося додати товар у кошик"),!1}},gS=()=>{const e=It(),[t,n]=x.useState([]),r=Ue(s=>s.favorites.items),i=Ue(s=>s.cart.items),o=Ke();x.useEffect(()=>{const s=new Date,c=new Date;c.setDate(s.getDate()-7);const f=c.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${f}`).then(d=>d.json()).then(d=>n(d.data)).catch(d=>console.error("Помилка завантаження нових товарів:",d))},[]);const a=(s,c)=>{c.stopPropagation();const f=r.some(d=>d.id===(s==null?void 0:s.id));pi(s,f,e,K)},l=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:u.jsxs(i4,{children:[u.jsx(Ln,{}),u.jsx(o4,{children:"Нові товари"}),u.jsxs(a4,{children:[l.map(s=>{var b;const c=r.some(C=>C.id===s.id),f=(s==null?void 0:s.available)??!0,d=(s==null?void 0:s.stock)===0,v=i.find(C=>C.id===s.id),g=(v?v.quantity:0)>=(s.stock||0),y=s.new_price&&s.new_price<s.price,w=y?s.new_price:s.price,p=y?Math.round((s.price-s.new_price)/s.price*100):0,h=async()=>{if(g){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(g){K.warning(`Доступно лише ${s.stock} шт.`);return}await wo(s,1,e,K)};return u.jsxs(s4,{onClick:()=>o(`/product/${s.slug??s.id}`),$soldOut:d,children:[u.jsxs(c4,{children:[u.jsx(u4,{children:"Новинка"}),d&&u.jsx(Zc,{children:"Продано"}),!f&&u.jsx(l4,{children:"Бронь"}),u.jsx("img",{src:((b=s.images)==null?void 0:b[0].url)||er,alt:s.name,onError:C=>{C.currentTarget.onerror=null,C.currentTarget.src=er}}),u.jsx("div",{className:"overlay"})]}),u.jsxs(d4,{children:[u.jsx(f4,{children:s.name}),u.jsxs(p4,{children:[u.jsx(qw,{children:u.jsxs(Yw,{children:[u.jsxs(Xw,{$discount:y,children:[w.toLocaleString()," грн"]}),y&&u.jsxs(Kw,{children:[s.price.toLocaleString()," грн"]}),y&&u.jsxs(Qw,{children:["-",p,"%"]})]})}),u.jsxs(Gw,{children:[f&&!d&&u.jsx(Jl,{onClick:C=>h(),children:u.jsx(bo,{size:24,color:v?"var(--orange-color)":"black",strokeWidth:2})}),!d&&u.jsx(Jl,{onClick:C=>a(s,C),children:u.jsx(Ja,{size:24,fill:c?"#ff4d4f":"none",color:c?"#ff4d4f":"#000000",strokeWidth:c?1:2})})]})]})]})]},s.id)}),u.jsx(h4,{to:"/catalog/new",children:u.jsxs(m4,{children:[u.jsx("p",{children:"Усі новинки"}),u.jsx(g4,{children:u.jsx(Yc,{size:24})})]})})]})]})};function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function o5(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function a5(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var s5=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(a5(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=o5(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),st="-ms-",lc="-moz-",de="-webkit-",vS="comm",Om="rule",$m="decl",l5="@import",xS="@keyframes",c5="@layer",u5=Math.abs,au=String.fromCharCode,d5=Object.assign;function f5(e,t){return tt(e,0)^45?(((t<<2^tt(e,0))<<2^tt(e,1))<<2^tt(e,2))<<2^tt(e,3):0}function yS(e){return e.trim()}function p5(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,n){return e.replace(t,n)}function Wp(e,t){return e.indexOf(t)}function tt(e,t){return e.charCodeAt(t)|0}function Ba(e,t,n){return e.slice(t,n)}function Cn(e){return e.length}function Im(e){return e.length}function $s(e,t){return t.push(e),e}function h5(e,t){return e.map(t).join("")}var su=1,uo=1,bS=0,Ot=0,Ae=0,So="";function lu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:su,column:uo,length:a,return:""}}function Fo(e,t){return d5(lu("",null,null,"",null,null,0),e,{length:-e.length},t)}function m5(){return Ae}function g5(){return Ae=Ot>0?tt(So,--Ot):0,uo--,Ae===10&&(uo=1,su--),Ae}function Nt(){return Ae=Ot<bS?tt(So,Ot++):0,uo++,Ae===10&&(uo=1,su++),Ae}function Tn(){return tt(So,Ot)}function fl(){return Ot}function is(e,t){return Ba(So,e,t)}function Va(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wS(e){return su=uo=1,bS=Cn(So=e),Ot=0,[]}function SS(e){return So="",e}function pl(e){return yS(is(Ot-1,Hp(e===91?e+2:e===40?e+1:e)))}function v5(e){for(;(Ae=Tn())&&Ae<33;)Nt();return Va(e)>2||Va(Ae)>3?"":" "}function x5(e,t){for(;--t&&Nt()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return is(e,fl()+(t<6&&Tn()==32&&Nt()==32))}function Hp(e){for(;Nt();)switch(Ae){case e:return Ot;case 34:case 39:e!==34&&e!==39&&Hp(Ae);break;case 40:e===41&&Hp(e);break;case 92:Nt();break}return Ot}function y5(e,t){for(;Nt()&&e+Ae!==47+10;)if(e+Ae===42+42&&Tn()===47)break;return"/*"+is(t,Ot-1)+"*"+au(e===47?e:Nt())}function b5(e){for(;!Va(Tn());)Nt();return is(e,Ot)}function w5(e){return SS(hl("",null,null,null,[""],e=wS(e),0,[0],e))}function hl(e,t,n,r,i,o,a,l,s){for(var c=0,f=0,d=a,v=0,m=0,g=0,y=1,w=1,p=1,h=0,b="",C=i,k=o,P=r,E=b;w;)switch(g=h,h=Nt()){case 40:if(g!=108&&tt(E,d-1)==58){Wp(E+=fe(pl(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=pl(h);break;case 9:case 10:case 13:case 32:E+=v5(g);break;case 92:E+=x5(fl()-1,7);continue;case 47:switch(Tn()){case 42:case 47:$s(S5(y5(Nt(),fl()),t,n),s);break;default:E+="/"}break;case 123*y:l[c++]=Cn(E)*p;case 125*y:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+f:p==-1&&(E=fe(E,/\f/g,"")),m>0&&Cn(E)-d&&$s(m>32?kv(E+";",r,n,d-1):kv(fe(E," ","")+";",r,n,d-2),s);break;case 59:E+=";";default:if($s(P=Cv(E,t,n,c,f,i,l,b,C=[],k=[],d),o),h===123)if(f===0)hl(E,t,P,P,C,o,d,l,k);else switch(v===99&&tt(E,3)===110?100:v){case 100:case 108:case 109:case 115:hl(e,P,P,r&&$s(Cv(e,P,P,0,0,i,l,b,i,C=[],d),k),i,k,d,l,r?C:k);break;default:hl(E,P,P,P,[""],k,0,l,k)}}c=f=m=0,y=p=1,b=E="",d=a;break;case 58:d=1+Cn(E),m=g;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&g5()==125)continue}switch(E+=au(h),h*y){case 38:p=f>0?1:(E+="\f",-1);break;case 44:l[c++]=(Cn(E)-1)*p,p=1;break;case 64:Tn()===45&&(E+=pl(Nt())),v=Tn(),f=d=Cn(b=E+=b5(fl())),h++;break;case 45:g===45&&Cn(E)==2&&(y=0)}}return o}function Cv(e,t,n,r,i,o,a,l,s,c,f){for(var d=i-1,v=i===0?o:[""],m=Im(v),g=0,y=0,w=0;g<r;++g)for(var p=0,h=Ba(e,d+1,d=u5(y=a[g])),b=e;p<m;++p)(b=yS(y>0?v[p]+" "+h:fe(h,/&\f/g,v[p])))&&(s[w++]=b);return lu(e,t,n,i===0?Om:l,s,c,f)}function S5(e,t,n){return lu(e,t,n,vS,au(m5()),Ba(e,2,-2),0)}function kv(e,t,n,r){return lu(e,t,n,$m,Ba(e,0,r),Ba(e,r+1,-1),r)}function Yi(e,t){for(var n="",r=Im(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function C5(e,t,n,r){switch(e.type){case c5:if(e.children.length)break;case l5:case $m:return e.return=e.return||e.value;case vS:return"";case xS:return e.return=e.value+"{"+Yi(e.children,r)+"}";case Om:e.value=e.props.join(",")}return Cn(n=Yi(e.children,r))?e.return=e.value+"{"+n+"}":""}function k5(e){var t=Im(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function _5(e){return function(t){t.root||(t=t.return)&&e(t)}}function E5(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var P5=function(t,n,r){for(var i=0,o=0;i=o,o=Tn(),i===38&&o===12&&(n[r]=1),!Va(o);)Nt();return is(t,Ot)},j5=function(t,n){var r=-1,i=44;do switch(Va(i)){case 0:i===38&&Tn()===12&&(n[r]=1),t[r]+=P5(Ot-1,n,r);break;case 2:t[r]+=pl(i);break;case 4:if(i===44){t[++r]=Tn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=au(i)}while(i=Nt());return t},T5=function(t,n){return SS(j5(wS(t),n))},_v=new WeakMap,O5=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!_v.get(r))&&!i){_v.set(t,!0);for(var o=[],a=T5(n,o),l=r.props,s=0,c=0;s<a.length;s++)for(var f=0;f<l.length;f++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[f]):l[f]+" "+a[s]}}},$5=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function CS(e,t){switch(f5(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+lc+e+st+e+e;case 6828:case 4268:return de+e+st+e+e;case 6165:return de+e+st+"flex-"+e+e;case 5187:return de+e+fe(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+st+"flex-$1$2")+e;case 5443:return de+e+st+"flex-item-"+fe(e,/flex-|-self/,"")+e;case 4675:return de+e+st+"flex-line-pack"+fe(e,/align-content|flex-|-self/,"")+e;case 5548:return de+e+st+fe(e,"shrink","negative")+e;case 5292:return de+e+st+fe(e,"basis","preferred-size")+e;case 6060:return de+"box-"+fe(e,"-grow","")+de+e+st+fe(e,"grow","positive")+e;case 4554:return de+fe(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(e)-1-t>6)switch(tt(e,t+1)){case 109:if(tt(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+lc+(tt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Wp(e,"stretch")?CS(fe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(tt(e,t+1)!==115)break;case 6444:switch(tt(e,Cn(e)-3-(~Wp(e,"!important")&&10))){case 107:return fe(e,":",":"+de)+e;case 101:return fe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+de+(tt(e,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+st+"$2box$3")+e}break;case 5936:switch(tt(e,t+11)){case 114:return de+e+st+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+st+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+st+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return de+e+st+e+e}return e}var I5=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case $m:t.return=CS(t.value,t.length);break;case xS:return Yi([Fo(t,{value:fe(t.value,"@","@"+de)})],i);case Om:if(t.length)return h5(t.props,function(o){switch(p5(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Yi([Fo(t,{props:[fe(o,/:(read-\w+)/,":"+lc+"$1")]})],i);case"::placeholder":return Yi([Fo(t,{props:[fe(o,/:(plac\w+)/,":"+de+"input-$1")]}),Fo(t,{props:[fe(o,/:(plac\w+)/,":"+lc+"$1")]}),Fo(t,{props:[fe(o,/:(plac\w+)/,st+"input-$1")]})],i)}return""})}},M5=[I5],D5=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var w=y.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||M5,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var w=y.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)o[w[p]]=!0;l.push(y)});var s,c=[O5,$5];{var f,d=[C5,_5(function(y){f.insert(y)})],v=k5(c.concat(i,d)),m=function(w){return Yi(w5(w),v)};s=function(w,p,h,b){f=h,m(w?w+"{"+p.styles+"}":p.styles),b&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new s5({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return g.sheet.hydrate(l),g},kS={exports:{}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze=typeof Symbol=="function"&&Symbol.for,Mm=Ze?Symbol.for("react.element"):60103,Dm=Ze?Symbol.for("react.portal"):60106,cu=Ze?Symbol.for("react.fragment"):60107,uu=Ze?Symbol.for("react.strict_mode"):60108,du=Ze?Symbol.for("react.profiler"):60114,fu=Ze?Symbol.for("react.provider"):60109,pu=Ze?Symbol.for("react.context"):60110,Lm=Ze?Symbol.for("react.async_mode"):60111,hu=Ze?Symbol.for("react.concurrent_mode"):60111,mu=Ze?Symbol.for("react.forward_ref"):60112,gu=Ze?Symbol.for("react.suspense"):60113,L5=Ze?Symbol.for("react.suspense_list"):60120,vu=Ze?Symbol.for("react.memo"):60115,xu=Ze?Symbol.for("react.lazy"):60116,A5=Ze?Symbol.for("react.block"):60121,R5=Ze?Symbol.for("react.fundamental"):60117,z5=Ze?Symbol.for("react.responder"):60118,F5=Ze?Symbol.for("react.scope"):60119;function Ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Mm:switch(e=e.type,e){case Lm:case hu:case cu:case du:case uu:case gu:return e;default:switch(e=e&&e.$$typeof,e){case pu:case mu:case xu:case vu:case fu:return e;default:return t}}case Dm:return t}}}function _S(e){return Ht(e)===hu}ve.AsyncMode=Lm;ve.ConcurrentMode=hu;ve.ContextConsumer=pu;ve.ContextProvider=fu;ve.Element=Mm;ve.ForwardRef=mu;ve.Fragment=cu;ve.Lazy=xu;ve.Memo=vu;ve.Portal=Dm;ve.Profiler=du;ve.StrictMode=uu;ve.Suspense=gu;ve.isAsyncMode=function(e){return _S(e)||Ht(e)===Lm};ve.isConcurrentMode=_S;ve.isContextConsumer=function(e){return Ht(e)===pu};ve.isContextProvider=function(e){return Ht(e)===fu};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mm};ve.isForwardRef=function(e){return Ht(e)===mu};ve.isFragment=function(e){return Ht(e)===cu};ve.isLazy=function(e){return Ht(e)===xu};ve.isMemo=function(e){return Ht(e)===vu};ve.isPortal=function(e){return Ht(e)===Dm};ve.isProfiler=function(e){return Ht(e)===du};ve.isStrictMode=function(e){return Ht(e)===uu};ve.isSuspense=function(e){return Ht(e)===gu};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===cu||e===hu||e===du||e===uu||e===gu||e===L5||typeof e=="object"&&e!==null&&(e.$$typeof===xu||e.$$typeof===vu||e.$$typeof===fu||e.$$typeof===pu||e.$$typeof===mu||e.$$typeof===R5||e.$$typeof===z5||e.$$typeof===F5||e.$$typeof===A5)};ve.typeOf=Ht;kS.exports=ve;var N5=kS.exports,ES=N5,B5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},PS={};PS[ES.ForwardRef]=B5;PS[ES.Memo]=V5;var U5=!0;function jS(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Am=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||U5===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},TS=function(t,n,r){Am(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function W5(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var H5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},G5=/[A-Z]|^ms/g,q5=/_EMO_([^_]+?)_([^]*?)_EMO_/g,OS=function(t){return t.charCodeAt(1)===45},Ev=function(t){return t!=null&&typeof t!="boolean"},zd=E5(function(e){return OS(e)?e:e.replace(G5,"-$&").toLowerCase()}),Pv=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(q5,function(r,i,o){return kn={name:i,styles:o,next:kn},i})}return H5[t]!==1&&!OS(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ua(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return kn={name:n.name,styles:n.styles,next:kn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)kn={name:r.name,styles:r.styles,next:kn},r=r.next;var i=n.styles+";";return i}return Y5(e,t,n)}case"function":{if(e!==void 0){var o=kn,a=n(e);return kn=o,Ua(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function Y5(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ua(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Ev(a)&&(r+=zd(o)+":"+Pv(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)Ev(a[l])&&(r+=zd(o)+":"+Pv(o,a[l])+";");else{var s=Ua(e,t,a);switch(o){case"animation":case"animationName":{r+=zd(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var jv=/label:\s*([^\s;\n{]+)\s*(;|$)/g,kn,Rm=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";kn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ua(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Ua(r,n,t[l]),i&&(o+=a[l]);jv.lastIndex=0;for(var s="",c;(c=jv.exec(o))!==null;)s+="-"+c[1];var f=W5(o)+s;return{name:f,styles:o,next:kn}},X5=function(t){return t()},K5=Pf["useInsertionEffect"]?Pf["useInsertionEffect"]:!1,$S=K5||X5,zm={}.hasOwnProperty,IS=x.createContext(typeof HTMLElement<"u"?D5({key:"css"}):null);IS.Provider;var MS=function(t){return x.forwardRef(function(n,r){var i=x.useContext(IS);return t(n,i,r)})},DS=x.createContext({}),Gp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Q5=function(t,n){var r={};for(var i in n)zm.call(n,i)&&(r[i]=n[i]);return r[Gp]=t,r},Z5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Am(n,r,i),$S(function(){return TS(n,r,i)}),null},J5=MS(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Gp],o=[r],a="";typeof e.className=="string"?a=jS(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Rm(o,void 0,x.useContext(DS));a+=t.key+"-"+l.name;var s={};for(var c in e)zm.call(e,c)&&c!=="css"&&c!==Gp&&(s[c]=e[c]);return s.ref=n,s.className=a,x.createElement(x.Fragment,null,x.createElement(Z5,{cache:t,serialized:l,isStringTag:typeof i=="string"}),x.createElement(i,s))}),e3=J5,Z=function(t,n){var r=arguments;if(n==null||!zm.call(n,"css"))return x.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=e3,o[1]=Q5(t,n);for(var a=2;a<i;a++)o[a]=r[a];return x.createElement.apply(null,o)};function Fm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Rm(t)}var t3=function(){var t=Fm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},n3=uj,r3=function(t){return t!=="theme"},Tv=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?n3:r3},Ov=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},i3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Am(n,r,i),$S(function(){return TS(n,r,i)}),null},o3=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=Ov(t,n,r),s=l||Tv(i),c=!s("as");return function(){var f=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)d.push.apply(d,f);else{d.push(f[0][0]);for(var v=f.length,m=1;m<v;m++)d.push(f[m],f[0][m])}var g=MS(function(y,w,p){var h=c&&y.as||i,b="",C=[],k=y;if(y.theme==null){k={};for(var P in y)k[P]=y[P];k.theme=x.useContext(DS)}typeof y.className=="string"?b=jS(w.registered,C,y.className):y.className!=null&&(b=y.className+" ");var E=Rm(d.concat(C),w.registered,k);b+=w.key+"-"+E.name,a!==void 0&&(b+=" "+a);var _=c&&l===void 0?Tv(h):s,T={};for(var I in y)c&&I==="as"||_(I)&&(T[I]=y[I]);return T.className=b,T.ref=p,x.createElement(x.Fragment,null,x.createElement(i3,{cache:w,serialized:E,isStringTag:typeof h=="string"}),x.createElement(h,T))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(y,w){return e(y,ee({},n,w,{shouldForwardProp:Ov(g,w,!0)})).apply(void 0,d)},g}},a3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ze=o3.bind();a3.forEach(function(e){ze[e]=ze(e)});const s3=ze.section`
  background-color: var(--second-background);
`,l3=ze.div`
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
`,c3=ze.div`

`,u3=ze.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,d3=ze.div`
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
`;const f3=ze(Pe)`
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
`,p3=ze.div`
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
`,h3=ze.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,m3=ze.p`
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
`;var g3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};v3(g3);function v3(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var x3="#4fa94d",y3={"aria-busy":!0,role:"progressbar"},b3=S.div`
  display: ${e=>e.$visible?"flex":"none"};
`,w3="http://www.w3.org/2000/svg",hi=({height:e=100,width:t=100,radius:n=5,color:r=x3,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>u.jsx(b3,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...y3,children:u.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:w3,"data-testid":"ball-triangle-svg",children:[u.jsx("title",{children:"Ball Triangle"}),u.jsx("desc",{children:"Animated representation of three balls"}),u.jsx("g",{fill:"none",fillRule:"evenodd",children:u.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[u.jsxs("circle",{cx:"5",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"27",cy:"5",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"49",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),rn=242.776657104492,S3=1.6,C3=wm`
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
`;S.path`
  stroke-dasharray: ${rn*.01}px, ${rn};
  stroke-dashoffset: 0;
  animation: ${C3} ${S3}s linear infinite;
`;var k3=wm`
to {
   transform: rotate(360deg);
 }
`;S.svg`
  animation: ${k3} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
`;S.polyline`
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
`;var _3=wm`
to {
   stroke-dashoffset: 136;
 }
`;S.polygon`
  stroke-dasharray: 17;
  animation: ${_3} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;S.svg`
  transform-origin: 50% 65%;
`;const E3=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0);return x.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();t(a.data.map(l=>{var s;return{id:l.id,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.error("Помилка запиту:",o)}finally{r(!1)}}i()},[]),n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(hi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(s3,{children:u.jsxs(l3,{children:[u.jsx(c3,{children:u.jsx(gS,{})}),u.jsx(u3,{children:"Каталог"}),u.jsx(d3,{children:e.map(i=>u.jsxs(f3,{to:`/catalog/${i.title}`,children:[u.jsx(p3,{children:u.jsx(h3,{src:i.image,alt:i.title})}),u.jsx(m3,{children:i.title})]},i.id))})]})})},P3=ze.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,j3=ze.h1`
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
`,T3=ze.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,O3=ze(Pe)`

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

  
`,$3=()=>u.jsxs(P3,{children:[u.jsxs(j3,{children:[" ",u.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),u.jsx(T3,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),u.jsx(O3,{children:" На головну"})]});const I3=S.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,M3=S.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var LS={},AS={},yu={},RS={exports:{}},os={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var $v=Object.getOwnPropertySymbols,D3=Object.prototype.hasOwnProperty,L3=Object.prototype.propertyIsEnumerable;function A3(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function R3(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var z3=R3()?Object.assign:function(e,t){for(var n,r=A3(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)D3.call(n,a)&&(r[a]=n[a]);if($v){i=$v(n);for(var l=0;l<i.length;l++)L3.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},zS={exports:{}},ce={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm=z3,Co=60103,FS=60106;ce.Fragment=60107;ce.StrictMode=60108;ce.Profiler=60114;var NS=60109,BS=60110,VS=60112;ce.Suspense=60113;var US=60115,WS=60116;if(typeof Symbol=="function"&&Symbol.for){var nn=Symbol.for;Co=nn("react.element"),FS=nn("react.portal"),ce.Fragment=nn("react.fragment"),ce.StrictMode=nn("react.strict_mode"),ce.Profiler=nn("react.profiler"),NS=nn("react.provider"),BS=nn("react.context"),VS=nn("react.forward_ref"),ce.Suspense=nn("react.suspense"),US=nn("react.memo"),WS=nn("react.lazy")}var Iv=typeof Symbol=="function"&&Symbol.iterator;function F3(e){return e===null||typeof e!="object"?null:(e=Iv&&e[Iv]||e["@@iterator"],typeof e=="function"?e:null)}function as(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var HS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},GS={};function ko(e,t,n){this.props=e,this.context=t,this.refs=GS,this.updater=n||HS}ko.prototype.isReactComponent={};ko.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(as(85));this.updater.enqueueSetState(this,e,t,"setState")};ko.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qS(){}qS.prototype=ko.prototype;function Bm(e,t,n){this.props=e,this.context=t,this.refs=GS,this.updater=n||HS}var Vm=Bm.prototype=new qS;Vm.constructor=Bm;Nm(Vm,ko.prototype);Vm.isPureReactComponent=!0;var Um={current:null},YS=Object.prototype.hasOwnProperty,XS={key:!0,ref:!0,__self:!0,__source:!0};function KS(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)YS.call(t,r)&&!XS.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Co,type:e,key:o,ref:a,props:i,_owner:Um.current}}function N3(e,t){return{$$typeof:Co,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wm(e){return typeof e=="object"&&e!==null&&e.$$typeof===Co}function B3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mv=/\/+/g;function Fd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?B3(""+e.key):t.toString(36)}function ml(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Co:case FS:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Fd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(Mv,"$&/")+"/"),ml(i,t,n,"",function(c){return c})):i!=null&&(Wm(i)&&(i=N3(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Mv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Fd(o,l);a+=ml(o,t,n,s,i)}else if(s=F3(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Fd(o,l++),a+=ml(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(as(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Is(e,t,n){if(e==null)return e;var r=[],i=0;return ml(e,r,"","",function(o){return t.call(n,o,i++)}),r}function V3(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var QS={current:null};function ir(){var e=QS.current;if(e===null)throw Error(as(321));return e}var U3={ReactCurrentDispatcher:QS,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Um,IsSomeRendererActing:{current:!1},assign:Nm};ce.Children={map:Is,forEach:function(e,t,n){Is(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Is(e,function(){t++}),t},toArray:function(e){return Is(e,function(t){return t})||[]},only:function(e){if(!Wm(e))throw Error(as(143));return e}};ce.Component=ko;ce.PureComponent=Bm;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U3;ce.cloneElement=function(e,t,n){if(e==null)throw Error(as(267,e));var r=Nm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Um.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)YS.call(t,s)&&!XS.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Co,type:e.type,key:i,ref:o,props:r,_owner:a}};ce.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:BS,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:NS,_context:e},e.Consumer=e};ce.createElement=KS;ce.createFactory=function(e){var t=KS.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:VS,render:e}};ce.isValidElement=Wm;ce.lazy=function(e){return{$$typeof:WS,_payload:{_status:-1,_result:e},_init:V3}};ce.memo=function(e,t){return{$$typeof:US,type:e,compare:t===void 0?null:t}};ce.useCallback=function(e,t){return ir().useCallback(e,t)};ce.useContext=function(e,t){return ir().useContext(e,t)};ce.useDebugValue=function(){};ce.useEffect=function(e,t){return ir().useEffect(e,t)};ce.useImperativeHandle=function(e,t,n){return ir().useImperativeHandle(e,t,n)};ce.useLayoutEffect=function(e,t){return ir().useLayoutEffect(e,t)};ce.useMemo=function(e,t){return ir().useMemo(e,t)};ce.useReducer=function(e,t,n){return ir().useReducer(e,t,n)};ce.useRef=function(e){return ir().useRef(e)};ce.useState=function(e){return ir().useState(e)};ce.version="17.0.2";zS.exports=ce;var W3=zS.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H3=W3,ZS=60103;os.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Dv=Symbol.for;ZS=Dv("react.element"),os.Fragment=Dv("react.fragment")}var G3=H3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q3=Object.prototype.hasOwnProperty,Y3={key:!0,ref:!0,__self:!0,__source:!0};function JS(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)q3.call(t,r)&&!Y3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ZS,type:e,key:o,ref:a,props:i,_owner:G3.current}}os.jsx=JS;os.jsxs=JS;RS.exports=os;var Mt=RS.exports,e2={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(e2);var Dt=e2.exports;const X3={"lds-circle":"_lds-circle_qlxhy_1"},K3=Object.freeze(Object.defineProperty({__proto__:null,default:X3},Symbol.toStringTag,{value:"Module"})),Q3=$t(K3);var t2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yu,"__esModule",{value:!0});yu.Circle=void 0;const Z3=Mt,J3=t2(Dt),eI=t2(Q3);function tI({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,Z3.jsx)("div",{className:(0,J3.default)(eI.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}yu.Circle=tI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=yu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(AS);var n2={},bu={};const nI={"lds-default":"_lds-default_wt1n8_1"},rI=Object.freeze(Object.defineProperty({__proto__:null,default:nI},Symbol.toStringTag,{value:"Module"})),iI=$t(rI);var r2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bu,"__esModule",{value:!0});bu.Default=void 0;const Lv=Mt,oI=r2(Dt),aI=r2(iI);function sI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,Lv.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,Lv.jsx)("div",{className:(0,oI.default)(aI.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}bu.Default=sI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=bu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(n2);var i2={},wu={};const lI={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},cI=Object.freeze(Object.defineProperty({__proto__:null,default:lI},Symbol.toStringTag,{value:"Module"})),uI=$t(cI);var o2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wu,"__esModule",{value:!0});wu.DualRing=void 0;const Av=Mt,Rv=o2(Dt),zv=o2(uI);function dI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Av.jsx)("div",{className:(0,Rv.default)(zv.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,Av.jsx)("div",{className:(0,Rv.default)(zv.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}wu.DualRing=dI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=wu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(i2);var a2={},Su={};const fI={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},pI=Object.freeze(Object.defineProperty({__proto__:null,default:fI},Symbol.toStringTag,{value:"Module"})),hI=$t(pI);var s2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Su,"__esModule",{value:!0});Su.Ellipsis=void 0;const Fv=Mt,mI=s2(Dt),gI=s2(hI);function vI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,Fv.jsx)("div",{style:{background:`${e}`}},l));return(0,Fv.jsx)("div",{className:(0,mI.default)(gI.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}Su.Ellipsis=vI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=Su;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(a2);var l2={},Cu={};const xI={"lds-facebook":"_lds-facebook_1ts9g_1"},yI=Object.freeze(Object.defineProperty({__proto__:null,default:xI},Symbol.toStringTag,{value:"Module"})),bI=$t(yI);var c2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cu,"__esModule",{value:!0});Cu.Facebook=void 0;const Nv=Mt,wI=c2(Dt),SI=c2(bI);function CI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,Nv.jsx)("div",{style:{background:`${e}`}},l));return(0,Nv.jsx)("div",{className:(0,wI.default)(SI.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}Cu.Facebook=CI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=Cu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(l2);var u2={},ku={};const kI={"lds-grid":"_lds-grid_1ftub_1"},_I=Object.freeze(Object.defineProperty({__proto__:null,default:kI},Symbol.toStringTag,{value:"Module"})),EI=$t(_I);var d2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ku,"__esModule",{value:!0});ku.Grid=void 0;const Bv=Mt,PI=d2(Dt),jI=d2(EI);function TI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,Bv.jsx)("div",{style:{background:`${e}`}},l));return(0,Bv.jsx)("div",{className:(0,PI.default)(jI.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}ku.Grid=TI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=ku;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(u2);var f2={},_u={};const OI={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},$I=Object.freeze(Object.defineProperty({__proto__:null,default:OI},Symbol.toStringTag,{value:"Module"})),II=$t($I);var p2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_u,"__esModule",{value:!0});_u.Heart=void 0;const Ms=Mt,Nd=p2(Dt),Bd=p2(II);function MI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Ms.jsx)("div",{className:(0,Nd.default)(Bd.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,Ms.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,Ms.jsx)("div",{className:(0,Nd.default)(Bd.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,Ms.jsx)("div",{className:(0,Nd.default)(Bd.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}_u.Heart=MI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=_u;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(f2);var h2={},Eu={};const DI={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},LI=Object.freeze(Object.defineProperty({__proto__:null,default:DI},Symbol.toStringTag,{value:"Module"})),AI=$t(LI);var m2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Eu,"__esModule",{value:!0});Eu.Hourglass=void 0;const Vv=Mt,Uv=m2(Dt),Wv=m2(AI);function RI({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,Vv.jsx)("div",{className:(0,Uv.default)(Wv.default["lds-hourglass"],n),style:{...r},children:(0,Vv.jsx)("div",{className:(0,Uv.default)(Wv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}Eu.Hourglass=RI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=Eu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(h2);var g2={},Pu={};const v2="_center_1rufi_10",x2="_spin_1rufi_1",zI={"lds-orbitals":"_lds-orbitals_1rufi_1",center:v2,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:x2},FI=Object.freeze(Object.defineProperty({__proto__:null,center:v2,default:zI,spin:x2},Symbol.toStringTag,{value:"Module"})),NI=$t(FI);var y2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pu,"__esModule",{value:!0});Pu.Orbitals=void 0;const at=Mt,pt=y2(Dt),Ce=y2(NI);function BI({color:e="#7f58af",className:t,style:n}){return(0,at.jsxs)("div",{className:(0,pt.default)(Ce.default["lds-orbitals"],t),style:{...n},children:[(0,at.jsx)("div",{className:Ce.default.center,style:{background:e}}),(0,at.jsxs)("div",{className:(0,pt.default)(Ce.default["inner-spin"]),children:[(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-arc"],Ce.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-arc"],Ce.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-arc"],Ce.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-arc"],Ce.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-moon-a"]),style:{background:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-moon-b"]),style:{background:e}})]}),(0,at.jsxs)("div",{className:(0,pt.default)(Ce.default["outer-spin"]),children:[(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-arc"],Ce.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-arc"],Ce.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-arc"],Ce.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-arc"],Ce.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-moon-a"]),style:{background:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-moon-b"]),style:{background:e}})]})]})}Pu.Orbitals=BI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=Pu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(g2);var b2={},ju={};const VI={"lds-ring":"_lds-ring_xgxdp_1"},UI=Object.freeze(Object.defineProperty({__proto__:null,default:VI},Symbol.toStringTag,{value:"Module"})),WI=$t(UI);var w2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ju,"__esModule",{value:!0});ju.Ring=void 0;const Hv=Mt,HI=w2(Dt),GI=w2(WI);function qI({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,Hv.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,Hv.jsx)("div",{className:(0,HI.default)(GI.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}ju.Ring=qI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=ju;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(b2);var S2={},Tu={};const YI={"lds-ripple":"_lds-ripple_1lgcf_1"},XI=Object.freeze(Object.defineProperty({__proto__:null,default:YI},Symbol.toStringTag,{value:"Module"})),KI=$t(XI);var C2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Tu,"__esModule",{value:!0});Tu.Ripple=void 0;const Gv=Mt,QI=C2(Dt),ZI=C2(KI);function JI({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,Gv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,Gv.jsx)("div",{className:(0,QI.default)(ZI.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}Tu.Ripple=JI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=Tu;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(S2);var k2={},Ou={};const eM={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},tM=Object.freeze(Object.defineProperty({__proto__:null,default:eM},Symbol.toStringTag,{value:"Module"})),nM=$t(tM);var _2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ou,"__esModule",{value:!0});Ou.Roller=void 0;const Vd=Mt,qv=_2(Dt),Yv=_2(nM);function rM({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Vd.jsx)("div",{children:(0,Vd.jsx)("div",{className:(0,qv.default)(Yv.default["div-after"]),style:{background:e}})},o));return(0,Vd.jsx)("div",{className:(0,qv.default)(Yv.default["lds-roller"],t),style:{...n},children:r})}Ou.Roller=rM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=Ou;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(k2);var E2={},$u={};const iM={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},oM=Object.freeze(Object.defineProperty({__proto__:null,default:iM},Symbol.toStringTag,{value:"Module"})),aM=$t(oM);var P2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty($u,"__esModule",{value:!0});$u.Spinner=void 0;const Ud=Mt,Xv=P2(Dt),Kv=P2(aM);function sM({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,Ud.jsx)("div",{children:(0,Ud.jsx)("div",{className:(0,Xv.default)(Kv.default["div-after"]),style:{background:e}})},o));return(0,Ud.jsx)("div",{className:(0,Xv.default)(Kv.default["lds-spinner"],t),style:{...n},children:r})}$u.Spinner=sM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=$u;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(E2);var j2={},Iu={};const T2="_left_v9vlb_30",O2="_right_v9vlb_33",$2="_anim_v9vlb_37",lM={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:T2,right:O2,anim:$2,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},cM=Object.freeze(Object.defineProperty({__proto__:null,anim:$2,default:lM,left:T2,right:O2},Symbol.toStringTag,{value:"Module"})),uM=$t(cM);var I2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Iu,"__esModule",{value:!0});Iu.Ouroboro=void 0;const No=Mt,Bo=I2(Dt),Vo=I2(uM);function dM({color:e="#7f58af",style:t,className:n}){return(0,No.jsxs)("div",{className:(0,Bo.default)(Vo.default["lds-ouroboro"],n),style:{...t},children:[(0,No.jsx)("span",{className:(0,Bo.default)(Vo.default.left),children:(0,No.jsx)("span",{className:(0,Bo.default)(Vo.default.anim),style:{background:e}})}),(0,No.jsx)("span",{className:(0,Bo.default)(Vo.default.right),children:(0,No.jsx)("span",{className:(0,Bo.default)(Vo.default.anim),style:{background:e}})})]})}Iu.Ouroboro=dM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Iu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(j2);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=AS;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=n2;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=i2;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=a2;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=l2;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=u2;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=f2;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=h2;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const c=g2;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return c.Orbitals}});const f=b2;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return f.Ring}});const d=S2;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const v=k2;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return v.Roller}});const m=E2;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return m.Spinner}});const g=j2;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return g.Ouroboro}})})(LS);const fM=()=>u.jsx(M3,{children:u.jsx(LS.Default,{color:"#6d433da8"})});const pM="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",hM=dT`
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
  src: url(${pM}) format('truetype');
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
`,mM=S.div`
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
`,gM=S(Pe)`
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
`,vM=S.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,xM=S.h3`

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
`,yM=S.a`

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
`,bM=S.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,wM=()=>{const[e,t]=x.useState([]);return x.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),u.jsxs(u.Fragment,{children:[u.jsx(vM,{children:"Каталог"}),u.jsxs(mM,{children:[e.slice(0,7).map(n=>u.jsx(gM,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:u.jsx(xM,{children:n.title})},n.title)),u.jsxs(yM,{href:"catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(bM,{children:u.jsx(Yc,{size:24})})]})]})]})};function Qv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Hm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Qv(t[r])&&Qv(e[r])&&Object.keys(t[r]).length>0&&Hm(e[r],t[r])})}const M2={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function On(){const e=typeof document<"u"?document:{};return Hm(e,M2),e}const SM={document:M2,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function wt(){const e=typeof window<"u"?window:{};return Hm(e,SM),e}function CM(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function kM(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function D2(e,t=0){return setTimeout(e,t)}function cc(){return Date.now()}function _M(e){const t=wt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function EM(e,t="x"){const n=wt();let r,i,o;const a=_M(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Ds(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function PM(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function At(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!PM(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(Ds(t[l])&&Ds(r[l])?r[l].__swiper__?t[l]=r[l]:At(t[l],r[l]):!Ds(t[l])&&Ds(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:At(t[l],r[l])):t[l]=r[l])}}}return t}function Si(e,t,n){e.style.setProperty(t,n)}function L2({swiper:e,targetPosition:t,side:n}){const r=wt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",c=(d,v)=>s==="next"&&d>=v||s==="prev"&&d<=v,f=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),v=.5-Math.cos(d*Math.PI)/2;let m=i+v*(t-i);if(c(m,t)&&(m=t),e.wrapperEl.scrollTo({[n]:m}),c(m,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:m})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(f)};f()}function En(e,t=""){const n=wt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function jM(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function TM(e,t){const n=wt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=jM(e,t))),r}function uc(e){try{console.warn(e);return}catch{}}function dc(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:CM(t)),n}function OM(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function $M(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function xr(e,t){return wt().getComputedStyle(e,null).getPropertyValue(t)}function fc(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function A2(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function qp(e,t,n){const r=wt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Wa(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function R2(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=En(e.el,`.${r[i]}`)[0];o||(o=dc("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const Zv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function IM({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Zv};function i(m){let g;return m&&typeof m=="string"&&e.isElement&&(g=e.el.querySelector(m)||e.hostEl.querySelector(m),g)?g:(m&&(typeof m=="string"&&(g=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&g&&g.length>1&&e.el.querySelectorAll(m).length===1?g=e.el.querySelector(m):g&&g.length===1&&(g=g[0])),m&&!g?m:g)}function o(m,g){const y=e.params.navigation;m=qe(m),m.forEach(w=>{w&&(w.classList[g?"add":"remove"](...y.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=g),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](y.lockClass))})}function a(){const{nextEl:m,prevEl:g}=e.navigation;if(e.params.loop){o(g,!1),o(m,!1);return}o(g,e.isBeginning&&!e.params.rewind),o(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const m=e.params.navigation;if(e.params.navigation=R2(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let g=i(m.nextEl),y=i(m.prevEl);Object.assign(e.navigation,{nextEl:g,prevEl:y}),g=qe(g),y=qe(y);const w=(p,h)=>{if(p){if(m.addIcons&&p.matches(".swiper-button-next,.swiper-button-prev")&&!p.querySelector("svg")){const b=document.createElement("div");Wa(b,Zv),p.appendChild(b.querySelector("svg")),b.remove()}p.addEventListener("click",h==="next"?s:l)}!e.enabled&&p&&p.classList.add(...m.lockClass.split(" "))};g.forEach(p=>w(p,"next")),y.forEach(p=>w(p,"prev"))}function f(){let{nextEl:m,prevEl:g}=e.navigation;m=qe(m),g=qe(g);const y=(w,p)=>{w.removeEventListener("click",p==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(w=>y(w,"next")),g.forEach(w=>y(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?v():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{f()}),n("enable disable",()=>{let{nextEl:m,prevEl:g}=e.navigation;if(m=qe(m),g=qe(g),e.enabled){a();return}[...m,...g].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),n("click",(m,g)=>{let{nextEl:y,prevEl:w}=e.navigation;y=qe(y),w=qe(w);const p=g.target;let h=w.includes(p)||y.includes(p);if(e.isElement&&!h){const b=g.path||g.composedPath&&g.composedPath();b&&(h=b.find(C=>y.includes(C)||w.includes(C)))}if(e.params.navigation.hideOnClick&&!h){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===p||e.pagination.el.contains(p)))return;let b;y.length?b=y[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(b=w[0].classList.contains(e.params.navigation.hiddenClass)),r(b===!0?"navigationShow":"navigationHide"),[...y,...w].filter(C=>!!C).forEach(C=>C.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),a()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(e.navigation,{enable:d,disable:v,update:a,init:c,destroy:f})}function Uo(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function MM({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(p,h){const{bulletActiveClass:b}=e.params.pagination;p&&(p=p[`${h==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${b}-${h}`),p=p[`${h==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${b}-${h}-${h}`)))}function c(p,h,b){if(p=p%b,h=h%b,h===p+1)return"next";if(h===p-1)return"previous"}function f(p){const h=p.target.closest(Uo(e.params.pagination.bulletClass));if(!h)return;p.preventDefault();const b=fc(h)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const C=c(e.realIndex,b,e.slides.length);C==="next"?e.slideNext():C==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b)}function d(){const p=e.rtl,h=e.params.pagination;if(l())return;let b=e.pagination.el;b=qe(b);let C,k;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,E=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(k=e.previousRealIndex||0,C=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(C=e.snapIndex,k=e.previousSnapIndex):(k=e.previousIndex||0,C=e.activeIndex||0),h.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let T,I,M;if(h.dynamicBullets&&(o=qp(_[0],e.isHorizontal()?"width":"height",!0),b.forEach(D=>{D.style[e.isHorizontal()?"width":"height"]=`${o*(h.dynamicMainBullets+4)}px`}),h.dynamicMainBullets>1&&k!==void 0&&(a+=C-(k||0),a>h.dynamicMainBullets-1?a=h.dynamicMainBullets-1:a<0&&(a=0)),T=Math.max(C-a,0),I=T+(Math.min(_.length,h.dynamicMainBullets)-1),M=(I+T)/2),_.forEach(D=>{const O=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${h.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();D.classList.remove(...O)}),b.length>1)_.forEach(D=>{const O=fc(D);O===C?D.classList.add(...h.bulletActiveClass.split(" ")):e.isElement&&D.setAttribute("part","bullet"),h.dynamicBullets&&(O>=T&&O<=I&&D.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),O===T&&s(D,"prev"),O===I&&s(D,"next"))});else{const D=_[C];if(D&&D.classList.add(...h.bulletActiveClass.split(" ")),e.isElement&&_.forEach((O,R)=>{O.setAttribute("part",R===C?"bullet-active":"bullet")}),h.dynamicBullets){const O=_[T],R=_[I];for(let L=T;L<=I;L+=1)_[L]&&_[L].classList.add(...`${h.bulletActiveClass}-main`.split(" "));s(O,"prev"),s(R,"next")}}if(h.dynamicBullets){const D=Math.min(_.length,h.dynamicMainBullets+4),O=(o*D-o)/2-M*o,R=p?"right":"left";_.forEach(L=>{L.style[e.isHorizontal()?R:"top"]=`${O}px`})}}b.forEach((_,T)=>{if(h.type==="fraction"&&(_.querySelectorAll(Uo(h.currentClass)).forEach(I=>{I.textContent=h.formatFractionCurrent(C+1)}),_.querySelectorAll(Uo(h.totalClass)).forEach(I=>{I.textContent=h.formatFractionTotal(E)})),h.type==="progressbar"){let I;h.progressbarOpposite?I=e.isHorizontal()?"vertical":"horizontal":I=e.isHorizontal()?"horizontal":"vertical";const M=(C+1)/E;let D=1,O=1;I==="horizontal"?D=M:O=M,_.querySelectorAll(Uo(h.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${D}) scaleY(${O})`,R.style.transitionDuration=`${e.params.speed}ms`})}h.type==="custom"&&h.renderCustom?(Wa(_,h.renderCustom(e,C+1,E)),T===0&&r("paginationRender",_)):(T===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](h.lockClass)})}function v(){const p=e.params.pagination;if(l())return;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=qe(b);let C="";if(p.type==="bullets"){let k=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&k>h&&(k=h);for(let P=0;P<k;P+=1)p.renderBullet?C+=p.renderBullet.call(e,P,p.bulletClass):C+=`<${p.bulletElement} ${e.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?C=p.renderFraction.call(e,p.currentClass,p.totalClass):C=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?C=p.renderProgressbar.call(e,p.progressbarFillClass):C=`<span class="${p.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach(k=>{p.type!=="custom"&&Wa(k,C||""),p.type==="bullets"&&e.pagination.bullets.push(...k.querySelectorAll(Uo(p.bulletClass)))}),p.type!=="custom"&&r("paginationRender",b[0])}function m(){e.params.pagination=R2(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const p=e.params.pagination;if(!p.el)return;let h;typeof p.el=="string"&&e.isElement&&(h=e.el.querySelector(p.el)),!h&&typeof p.el=="string"&&(h=[...document.querySelectorAll(p.el)]),h||(h=p.el),!(!h||h.length===0)&&(e.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(h)&&h.length>1&&(h=[...e.el.querySelectorAll(p.el)],h.length>1&&(h=h.find(b=>A2(b,".swiper")[0]===e.el))),Array.isArray(h)&&h.length===1&&(h=h[0]),Object.assign(e.pagination,{el:h}),h=qe(h),h.forEach(b=>{p.type==="bullets"&&p.clickable&&b.classList.add(...(p.clickableClass||"").split(" ")),b.classList.add(p.modifierClass+p.type),b.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(b.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&b.classList.add(p.progressbarOppositeClass),p.clickable&&b.addEventListener("click",f),e.enabled||b.classList.add(p.lockClass)}))}function g(){const p=e.params.pagination;if(l())return;let h=e.pagination.el;h&&(h=qe(h),h.forEach(b=>{b.classList.remove(p.hiddenClass),b.classList.remove(p.modifierClass+p.type),b.classList.remove(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(b.classList.remove(...(p.clickableClass||"").split(" ")),b.removeEventListener("click",f))})),e.pagination.bullets&&e.pagination.bullets.forEach(b=>b.classList.remove(...p.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const p=e.params.pagination;let{el:h}=e.pagination;h=qe(h),h.forEach(b=>{b.classList.remove(p.horizontalClass,p.verticalClass),b.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(m(),v(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{v(),d()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:p}=e.pagination;p&&(p=qe(p),p.forEach(h=>h.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(p,h)=>{const b=h.target,C=qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&C&&C.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const k=C[0].classList.contains(e.params.pagination.hiddenClass);r(k===!0?"paginationShow":"paginationHide"),C.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=qe(p),p.forEach(h=>h.classList.remove(e.params.pagination.paginationDisabledClass))),m(),v(),d()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=qe(p),p.forEach(h=>h.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:y,disable:w,render:v,update:d,init:m,destroy:g})}function DM({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,c,f=new Date().getTime(),d,v,m,g,y,w;function p(A){!e||e.destroyed||!e.wrapperEl||A.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",p),!(w||A.detail&&A.detail.bySwiperTouchMove)&&T())}const h=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=c,d=!1);const A=e.autoplay.paused?c:f+s-new Date().getTime();e.autoplay.timeLeft=A,r("autoplayTimeLeft",A,A/l),a=requestAnimationFrame(()=>{h()})},b=()=>{let A;return e.virtual&&e.params.virtual.enabled?A=e.slides.find($=>$.classList.contains("swiper-slide-active")):A=e.slides[e.activeIndex],A?parseInt(A.getAttribute("data-swiper-autoplay"),10):void 0},C=()=>{let A=e.params.autoplay.delay;const j=b();return!Number.isNaN(j)&&j>0&&(A=j),A},k=A=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),h();let j=A;typeof j>"u"&&(j=C(),l=j,s=j),c=j;const $=e.params.speed,F=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev($,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,$,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext($,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,$,!0,!0),r("autoplay")),e.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{k()})))};return j>0?(clearTimeout(o),o=setTimeout(()=>{F()},j)):requestAnimationFrame(()=>{F()}),j},P=()=>{f=new Date().getTime(),e.autoplay.running=!0,k(),r("autoplayStart")},E=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},_=(A,j)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),A||(y=!0);const $=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",p):T()};if(e.autoplay.paused=!0,j){$();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-f),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),$())},T=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(f=new Date().getTime(),y?(y=!1,k(c)):k(),e.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const A=On();A.visibilityState==="hidden"&&(y=!0,_(!0)),A.visibilityState==="visible"&&T()},M=A=>{A.pointerType==="mouse"&&(y=!0,w=!0,!(e.animating||e.autoplay.paused)&&_(!0))},D=A=>{A.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&T())},O=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",M),e.el.addEventListener("pointerleave",D))},R=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",M),e.el.removeEventListener("pointerleave",D))},L=()=>{On().addEventListener("visibilitychange",I)},z=()=>{On().removeEventListener("visibilitychange",I)};n("init",()=>{e.params.autoplay.enabled&&(O(),L(),P())}),n("destroy",()=>{R(),z(),e.autoplay.running&&E()}),n("_freeModeStaticRelease",()=>{(m||y)&&T()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?E():_(!0,!0)}),n("beforeTransitionStart",(A,j,$)=>{e.destroyed||!e.autoplay.running||($||!e.params.autoplay.disableOnInteraction?_(!0,!0):E())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){E();return}v=!0,m=!1,y=!1,g=setTimeout(()=>{y=!0,m=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(g),clearTimeout(o),e.params.autoplay.disableOnInteraction){m=!1,v=!1;return}m&&e.params.cssMode&&T(),m=!1,v=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=C(),l=C())}),Object.assign(e.autoplay,{start:P,stop:E,pause:_,resume:T})}let Wd;function LM(){const e=wt(),t=On();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function z2(){return Wd||(Wd=LM()),Wd}let Hd;function AM({userAgent:e}={}){const t=z2(),n=wt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const f=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=r==="Win32";let m=r==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&m&&t.touch&&g.indexOf(`${a}x${l}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),m=!1),s&&!v&&(o.os="android",o.android=!0),(c||d||f)&&(o.os="ios",o.ios=!0),o}function F2(e={}){return Hd||(Hd=AM(e)),Hd}let Gd;function RM(){const e=wt(),t=F2();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,c]=l.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));n=s<16||s===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function N2(){return Gd||(Gd=RM()),Gd}function zM({swiper:e,on:t,emit:n}){const r=wt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(f=>{o=r.requestAnimationFrame(()=>{const{width:d,height:v}=e;let m=d,g=v;f.forEach(({contentBoxSize:y,contentRect:w,target:p})=>{p&&p!==e.el||(m=w?w.width:(y[0]||y).inlineSize,g=w?w.height:(y[0]||y).blockSize)}),(m!==d||g!==v)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function FM({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=wt(),a=(c,f={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,v=new d(m=>{if(e.__preventObserver__)return;if(m.length===1){r("observerUpdate",m[0]);return}const g=function(){r("observerUpdate",m[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});v.observe(c,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:e.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),i.push(v)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=A2(e.hostEl);for(let f=0;f<c.length;f+=1)a(c[f])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var NM={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function BM(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(xr(r,"padding-left")||0,10)-parseInt(xr(r,"padding-right")||0,10),n=n-parseInt(xr(r,"padding-top")||0,10)-parseInt(xr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function VM(){const e=this;function t(I,M){return parseFloat(I.getPropertyValue(e.getDirectionLabel(M))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,c=En(i,`.${e.params.slideClass}, swiper-slide`),f=l?e.virtual.slides.length:c.length;let d=[];const v=[],m=[];let g=n.slidesOffsetBefore;typeof g=="function"&&(g=n.slidesOffsetBefore.call(e));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,p=e.slidesGrid.length,h=e.size-g-y;let b=n.spaceBetween,C=-g,k=0,P=0;if(typeof h>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*h:typeof b=="string"&&(b=parseFloat(b)),e.virtualSize=-b-g-y,c.forEach(I=>{o?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Si(r,"--swiper-centered-offset-before",""),Si(r,"--swiper-centered-offset-after","")),n.cssMode&&(Si(r,"--swiper-slides-offset-before",`${g}px`),Si(r,"--swiper-slides-offset-after",`${y}px`));const E=n.grid&&n.grid.rows>1&&e.grid;E?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let _;const T=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(I=>typeof n.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<f;I+=1){_=0;const M=c[I];if(!(M&&(E&&e.grid.updateSlide(I,M,c),xr(M,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&M&&(n.roundLengths&&(_=Math.floor(_)),M.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){T&&(M.style[e.getDirectionLabel("width")]="");const D=getComputedStyle(M),O=M.style.transform,R=M.style.webkitTransform;if(O&&(M.style.transform="none"),R&&(M.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?qp(M,"width",!0):qp(M,"height",!0);else{const L=t(D,"width"),z=t(D,"padding-left"),A=t(D,"padding-right"),j=t(D,"margin-left"),$=t(D,"margin-right"),F=D.getPropertyValue("box-sizing");if(F&&F==="border-box")_=L+j+$;else{const{clientWidth:B,offsetWidth:N}=M;_=L+z+A+j+$+(N-B)}}O&&(M.style.transform=O),R&&(M.style.webkitTransform=R),n.roundLengths&&(_=Math.floor(_))}else _=(h-(n.slidesPerView-1)*b)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),M&&(M.style[e.getDirectionLabel("width")]=`${_}px`);M&&(M.swiperSlideSize=_),m.push(_),n.centeredSlides?(C=C+_/2+k/2+b,k===0&&I!==0&&(C=C-h/2-b),I===0&&(C=C-h/2-b),Math.abs(C)<1/1e3&&(C=0),n.roundLengths&&(C=Math.floor(C)),P%n.slidesPerGroup===0&&d.push(C),v.push(C)):(n.roundLengths&&(C=Math.floor(C)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&d.push(C),v.push(C),C=C+_+b),e.virtualSize+=_+b,k=_,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,h)+y,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+b}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),E&&e.grid.updateWrapperSize(_,d),!n.centeredSlides){const I=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,M=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||I);let D=d.length;if(M){let R;if(n.slidesPerView==="auto"){R=1;let L=0;for(let z=m.length-1;z>=0&&(L+=m[z]+(z<m.length-1?b:0),L<=h);z-=1)R=m.length-z}else R=Math.floor(n.slidesPerView);D=Math.max(f-R,0)}const O=[];for(let R=0;R<d.length;R+=1){let L=d[R];n.roundLengths&&(L=Math.floor(L)),M?R<=D&&O.push(L):d[R]<=e.virtualSize-h&&O.push(L)}d=O,Math.floor(e.virtualSize-h)-Math.floor(d[d.length-1])>1&&(M||d.push(e.virtualSize-h))}if(l&&n.loop){const I=m[0]+b;if(n.slidesPerGroup>1){const M=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),D=I*n.slidesPerGroup;for(let O=0;O<M;O+=1)d.push(d[d.length-1]+D)}for(let M=0;M<e.virtual.slidesBefore+e.virtual.slidesAfter;M+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+I),v.push(v[v.length-1]+I),e.virtualSize+=I}if(d.length===0&&(d=[0]),b!==0){const I=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((M,D)=>!n.cssMode||n.loop?!0:D!==c.length-1).forEach(M=>{M.style[I]=`${b}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let I=0;m.forEach(D=>{I+=D+(b||0)}),I-=b;const M=I>h?I-h:0;d=d.map(D=>D<=0?-g:D>M?M+y:D)}if(n.centerInsufficientSlides){let I=0;if(m.forEach(M=>{I+=M+(b||0)}),I-=b,I<h){const M=(h-I)/2;d.forEach((D,O)=>{d[O]=D-M}),v.forEach((D,O)=>{v[O]=D+M})}}if(Object.assign(e,{slides:c,snapGrid:d,slidesGrid:v,slidesSizesGrid:m}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Si(r,"--swiper-centered-offset-before",`${-d[0]}px`),Si(r,"--swiper-centered-offset-after",`${e.size/2-m[m.length-1]/2}px`);const I=-e.snapGrid[0],M=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(D=>D+I),e.slidesGrid=e.slidesGrid.map(D=>D+M)}if(f!==s&&e.emit("slidesLengthChange"),d.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==p&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const I=`${n.containerModifierClass}backface-hidden`,M=e.el.classList.contains(I);f<=n.maxBackfaceHiddenSlides?M||e.el.classList.add(I):M&&e.el.classList.remove(I)}}function UM(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function WM(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Jv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function HM(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const c=r[s];let f=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(f-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+l),v=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+l),m=-(a-f),g=m+t.slidesSizesGrid[s],y=m>=0&&m<=t.size-t.slidesSizesGrid[s],w=m>=0&&m<t.size-1||g>1&&g<=t.size||m<=0&&g>=t.size;w&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s)),Jv(c,w,n.slideVisibleClass),Jv(c,y,n.slideFullyVisibleClass),c.progress=i?-d:d,c.originalProgress=i?-v:v}}function GM(e){const t=this;if(typeof e>"u"){const f=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*f||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,c=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const f=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=f||i<=0,a=d||i>=1,f&&(i=0),d&&(i=1)}if(n.loop){const f=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),v=t.slidesGrid[f],m=t.slidesGrid[d],g=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=v?l=(y-v)/g:l=(y+g-m)/g,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(s&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const qd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function qM(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>En(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,c,f;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),f=t.find(d=>d.column===i+1),c=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(f=$M(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!f&&(f=t[0]),c=OM(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(d=>{qd(d,d===s,n.slideActiveClass),qd(d,d===f,n.slideNextClass),qd(d,d===c,n.slidePrevClass)}),e.emitSlidesClasses()}const gl=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},Yd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Yp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,c)=>a+r+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&Yd(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&Yd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Yd(e,a)};function YM(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function XM(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,c;const f=m=>{let g=m-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof s>"u"&&(s=YM(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const m=Math.min(i.slidesPerGroupSkip,s);c=m+Math.floor((s-m)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=f(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let v;if(t.virtual&&i.virtual.enabled)i.loop?v=f(s):v=s;else if(d){const m=t.slides.find(y=>y.column===s);let g=parseInt(m.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(m),0)),v=Math.floor(g/i.grid.rows)}else if(t.slides[s]){const m=t.slides[s].getAttribute("data-swiper-slide-index");m?v=parseInt(m,10):v=s}else v=s;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:v,previousIndex:o,activeIndex:s}),t.initialized&&Yp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==v&&t.emit("realIndexChange"),t.emit("slideChange"))}function KM(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var QM={updateSize:BM,updateSlides:VM,updateAutoHeight:UM,updateSlidesOffset:WM,updateSlidesProgress:HM,updateProgress:GM,updateSlidesClasses:qM,updateActiveIndex:XM,updateClickedSlide:KM};function ZM(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=EM(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function JM(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const c=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let f;const d=n.maxTranslate()-n.minTranslate();d===0?f=0:f=(e-n.minTranslate())/d,f!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function e6(){return-this.snapGrid[0]}function t6(){return-this.snapGrid[this.snapGrid.length-1]}function n6(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),c=o.maxTranslate();let f;if(r&&e>s?f=s:r&&e<c?f=c:f=e,o.updateProgress(f),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-f;else{if(!o.support.smoothScroll)return L2({swiper:o,targetPosition:-f,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-f,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(v){!o||o.destroyed||v.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var r6={getTranslate:ZM,setTranslate:JM,minTranslate:e6,maxTranslate:t6,translateTo:n6};function i6(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function B2({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function o6(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),B2({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function a6(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),B2({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var s6={setTransition:i6,transitionStart:o6,transitionEnd:a6};function l6(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:c,previousIndex:f,activeIndex:d,rtlTranslate:v,wrapperEl:m,enabled:g}=o;if(!g&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let w=y+Math.floor((a-y)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const p=-s[w];if(l.normalizeSlideIndex)for(let E=0;E<c.length;E+=1){const _=-Math.floor(p*100),T=Math.floor(c[E]*100),I=Math.floor(c[E+1]*100);typeof c[E+1]<"u"?_>=T&&_<I-(I-T)/2?a=E:_>=T&&_<I&&(a=E+1):_>=T&&(a=E)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(v?p>o.translate&&p>o.minTranslate():p<o.translate&&p<o.minTranslate())||!o.allowSlidePrev&&p>o.translate&&p>o.maxTranslate()&&(d||0)!==a))return!1;a!==(f||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(p);let h;a>d?h="next":a<d?h="prev":h="reset";const b=o.virtual&&o.params.virtual.enabled;if(!(b&&i)&&(v&&-p===o.translate||!v&&p===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(p),h!=="reset"&&(o.transitionStart(n,h),o.transitionEnd(n,h)),!1;if(l.cssMode){const E=o.isHorizontal(),_=v?p:-p;if(t===0)b&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),b&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[E?"scrollLeft":"scrollTop"]=_})):m[E?"scrollLeft":"scrollTop"]=_,b&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return L2({swiper:o,targetPosition:_,side:E?"left":"top"}),!0;m.scrollTo({[E?"left":"top"]:_,behavior:"smooth"})}return!0}const P=N2().isSafari;return b&&!i&&P&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(p),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,h),t===0?o.transitionEnd(n,h):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(_){!o||o.destroyed||_.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,h))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function c6(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const y=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c,slidesOffsetBefore:f,slidesOffsetAfter:d}=i.params,v=c||!!f||!!d;let m=i.params.slidesPerView;m==="auto"?m=i.slidesPerViewDynamic():(m=Math.ceil(parseFloat(i.params.slidesPerView,10)),v&&m%2===0&&(m=m+1));let g=s-l<m;if(v&&(g=g||l<Math.ceil(m/2)),r&&v&&i.params.slidesPerView!=="auto"&&!o&&(g=!1),g){const y=v?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?l+1:l-s+1,slideRealIndex:y==="next"?i.realIndex:void 0})}if(o){const y=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function u6(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function d6(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function v(h){return h<0?-Math.floor(Math.abs(h)):Math.floor(h)}const m=v(d),g=o.map(h=>v(h)),y=i.freeMode&&i.freeMode.enabled;let w=o[g.indexOf(m)-1];if(typeof w>"u"&&(i.cssMode||y)){let h;o.forEach((b,C)=>{m>=b&&(h=C)}),typeof h<"u"&&(w=y?o[h]:o[h>0?h-1:h])}let p=0;if(typeof w<"u"&&(p=a.indexOf(w),p<0&&(p=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(p=p-r.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),i.rewind&&r.isBeginning){const h=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(h,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(p,e,t,n)}),!0;return r.slideTo(p,e,t,n)}function f6(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function p6(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const c=i.snapGrid[l],f=i.snapGrid[l+1];s-c>(f-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],f=i.snapGrid[l];s-c<=(f-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function h6(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(En(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),D2(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var m6={slideTo:l6,slideToLoop:c6,slideNext:u6,slidePrev:d6,slideReset:f6,slideToClosest:p6,slideToClickedSlide:h6};function g6(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{En(i,`.${r.slideClass}, swiper-slide`).forEach((g,y)=>{g.setAttribute("data-swiper-slide-index",y)})},a=()=>{const m=En(i,`.${r.slideBlankClass}`);m.forEach(g=>{g.remove()}),m.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),c=n.slides.length%s!==0,f=l&&n.slides.length%r.grid.rows!==0,d=m=>{for(let g=0;g<m;g+=1){const y=n.isElement?dc("swiper-slide",[r.slideBlankClass]):dc("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(y)}};if(c){if(r.loopAddBlankSlides){const m=s-n.slides.length%s;d(m),n.recalcSlides(),n.updateSlides()}else uc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(f){if(r.loopAddBlankSlides){const m=r.grid.rows-n.slides.length%r.grid.rows;d(m),n.recalcSlides(),n.updateSlides()}else uc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const v=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:v?void 0:"next",initial:t})}function v6({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:f,allowSlideNext:d,slidesEl:v,params:m}=s,{centeredSlides:g,slidesOffsetBefore:y,slidesOffsetAfter:w,initialSlide:p}=m,h=g||!!y||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&m.virtual.enabled){t&&(!h&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):h&&s.snapIndex<m.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=f,s.allowSlideNext=d,s.emit("loopFix");return}let b=m.slidesPerView;b==="auto"?b=s.slidesPerViewDynamic():(b=Math.ceil(parseFloat(m.slidesPerView,10)),h&&b%2===0&&(b=b+1));const C=m.slidesPerGroupAuto?b:m.slidesPerGroup;let k=h?Math.max(C,Math.ceil(b/2)):C;k%C!==0&&(k+=C-k%C),k+=m.loopAdditionalSlides,s.loopedSlides=k;const P=s.grid&&m.grid&&m.grid.rows>1;c.length<b+k||s.params.effect==="cards"&&c.length<b+k*2?uc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):P&&m.grid.fill==="row"&&uc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],_=[],T=P?Math.ceil(c.length/m.grid.rows):c.length,I=o&&T-p<b&&!h;let M=I?p:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(c.find(j=>j.classList.contains(m.slideActiveClass))):M=i;const D=n==="next"||!n,O=n==="prev"||!n;let R=0,L=0;const A=(P?c[i].column:i)+(h&&typeof r>"u"?-b/2+.5:0);if(A<k){R=Math.max(k-A,C);for(let j=0;j<k-A;j+=1){const $=j-Math.floor(j/T)*T;if(P){const F=T-$-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===F&&E.push(B)}else E.push(T-$-1)}}else if(A+b>T-k){L=Math.max(A-(T-k*2),C),I&&(L=Math.max(L,b-T+p+1));for(let j=0;j<L;j+=1){const $=j-Math.floor(j/T)*T;P?c.forEach((F,B)=>{F.column===$&&_.push(B)}):_.push($)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&c.length<b+k*2&&(_.includes(i)&&_.splice(_.indexOf(i),1),E.includes(i)&&E.splice(E.indexOf(i),1)),O&&E.forEach(j=>{c[j].swiperLoopMoveDOM=!0,v.prepend(c[j]),c[j].swiperLoopMoveDOM=!1}),D&&_.forEach(j=>{c[j].swiperLoopMoveDOM=!0,v.append(c[j]),c[j].swiperLoopMoveDOM=!1}),s.recalcSlides(),m.slidesPerView==="auto"?s.updateSlides():P&&(E.length>0&&O||_.length>0&&D)&&s.slides.forEach((j,$)=>{s.grid.updateSlide($,j,s.slides)}),m.watchSlidesProgress&&s.updateSlidesOffset(),t){if(E.length>0&&O){if(typeof e>"u"){const j=s.slidesGrid[M],F=s.slidesGrid[M+R]-j;l?s.setTranslate(s.translate-F):(s.slideTo(M+Math.ceil(R),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-F,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-F))}else if(r){const j=P?E.length/m.grid.rows:E.length;s.slideTo(s.activeIndex+j,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&D)if(typeof e>"u"){const j=s.slidesGrid[M],F=s.slidesGrid[M-L]-j;l?s.setTranslate(s.translate-F):(s.slideTo(M-L,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-F,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-F))}else{const j=P?_.length/m.grid.rows:_.length;s.slideTo(s.activeIndex-j,0,!1,!0)}}if(s.allowSlidePrev=f,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const j={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach($=>{!$.destroyed&&$.params.loop&&$.loopFix({...j,slideTo:$.params.slidesPerView===m.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...j,slideTo:s.controller.control.params.slidesPerView===m.slidesPerView?t:!1})}s.emit("loopFix")}function x6(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var y6={loopCreate:g6,loopFix:v6,loopDestroy:x6};function b6(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function w6(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var S6={setGrabCursor:b6,unsetGrabCursor:w6};function C6(e,t=this){function n(r){if(!r||r===On()||r===wt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function e1(e,t,n){const r=wt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function k6(e){const t=this,n=On();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){e1(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!TM(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&f&&(s=f[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(v?C6(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const m=a.currentX,g=a.currentY;if(!e1(t,r,m))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=m,a.startY=g,i.touchStartTime=cc(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;s.matches(i.focusableElements)&&(y=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function _6(e){const t=On(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].find(P=>P.identifier===r.touchId),!c||c.identifier!==r.touchId)return}else c=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const f=c.pageX,d=c.pageY;if(s.preventedByNestedSwiper){o.startX=f,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:f,startY:d,currentX:f,currentY:d}),r.touchStartTime=cc());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(f>o.startX&&-n.translate<=n.maxTranslate()||f<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(f<o.startX&&n.translate<=n.maxTranslate()||f>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=f,o.currentY=d;const v=o.currentX-o.startX,m=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(v**2+m**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let P;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:v*v+m*m>=25&&(P=Math.atan2(Math.abs(m),Math.abs(v))*180/Math.PI,r.isScrolling=n.isHorizontal()?P>i.touchAngle:90-P>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let g=n.isHorizontal()?v:m,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(g=Math.abs(g)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=g,g*=i.touchRatio,a&&(g=-g,y=-y);const w=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const p=n.params.loop&&!i.cssMode,h=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(p&&h&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const P=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(P)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let b;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&p&&h&&Math.abs(g)>=1){Object.assign(o,{startX:f,startY:d,currentX:f,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let C=!0,k=i.resistanceRatio;if(i.touchReleaseOnEdges&&(k=0),g>0?(p&&h&&!b&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(C=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**k))):g<0&&(p&&h&&!b&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(C=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**k))),C&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function E6(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(k=>k.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:c,enabled:f}=t;if(!f||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=cc(),v=d-n.touchStartTime;if(t.allowClick){const k=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(k&&k[0]||r.target,k),t.emit("tap click",r),v<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=cc(),D2(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let m;if(a.followFinger?m=s?t.translate:-t.translate:m=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:m});return}const g=m>=-t.maxTranslate()&&!t.params.loop;let y=0,w=t.slidesSizesGrid[0];for(let k=0;k<c.length;k+=k<a.slidesPerGroupSkip?1:a.slidesPerGroup){const P=k<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[k+P]<"u"?(g||m>=c[k]&&m<c[k+P])&&(y=k,w=c[k+P]-c[k]):(g||m>=c[k])&&(y=k,w=c[c.length-1]-c[c.length-2])}let p=null,h=null;a.rewind&&(t.isBeginning?h=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(p=0));const b=(m-c[y])/w,C=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(v>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?p:y+C):t.slideTo(y)),t.swipeDirection==="prev"&&(b>1-a.longSwipesRatio?t.slideTo(y+C):h!==null&&b<0&&Math.abs(b)>a.longSwipesRatio?t.slideTo(h):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+C):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(p!==null?p:y+C),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:y))}}function t1(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function P6(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function j6(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function T6(e){const t=this;gl(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function O6(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const V2=(e,t)=>{const n=On(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",t1,!0):e[c]("observerUpdate",t1,!0),i[s]("load",e.onLoad,{capture:!0}))};function $6(){const e=this,{params:t}=e;e.onTouchStart=k6.bind(e),e.onTouchMove=_6.bind(e),e.onTouchEnd=E6.bind(e),e.onDocumentTouchStart=O6.bind(e),t.cssMode&&(e.onScroll=j6.bind(e)),e.onClick=P6.bind(e),e.onLoad=T6.bind(e),V2(e,"on")}function I6(){V2(this,"off")}var M6={attachEvents:$6,detachEvents:I6};const n1=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function D6(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=On(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),c=e.getBreakpoint(o,l,s);if(!c||e.currentBreakpoint===c)return;const d=(c in o?o[c]:void 0)||e.originalParams,v=n1(e,r),m=n1(e,d),g=e.params.grabCursor,y=d.grabCursor,w=r.enabled;v&&!m?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!v&&m&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!y?e.unsetGrabCursor():!g&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof d[P]>"u")return;const E=r[P]&&r[P].enabled,_=d[P]&&d[P].enabled;E&&!_&&e[P].disable(),!E&&_&&e[P].enable()});const p=d.direction&&d.direction!==r.direction,h=r.loop&&(d.slidesPerView!==r.slidesPerView||p),b=r.loop;p&&n&&e.changeDirection(),At(e.params,d);const C=e.params.enabled,k=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!C?e.disable():!w&&C&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",d),n&&(h?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&k?(e.loopCreate(t),e.updateSlides()):b&&!k&&e.loopDestroy()),e.emit("breakpoint",d)}function L6(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=wt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:c}=a[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var A6={setBreakpoint:D6,getBreakpoint:L6};function R6(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function z6(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=R6(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function F6(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var N6={addClasses:z6,removeClasses:F6};function B6(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var V6={checkOverflow:B6},Xp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function U6(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){At(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){At(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),At(t,r)}}const Xd={eventsEmitter:NM,update:QM,translate:r6,transition:s6,slide:m6,loop:y6,grabCursor:S6,events:M6,breakpoints:A6,checkOverflow:V6,classes:N6},Kd={};let Gm=class Rn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=At({},r),n&&!r.el&&(r.el=n);const i=On();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(c=>{const f=At({},r,{el:c});s.push(new Rn(f))}),s}const o=this;o.__swiper__=!0,o.support=z2(),o.device=F2({userAgent:r.userAgent}),o.browser=N2(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:U6(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=At({},Xp,a);return o.params=At({},l,Kd,r),o.originalParams=At({},o.params),o.passedParams=At({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=En(n,`.${r.slideClass}, swiper-slide`),o=fc(i[0]);return fc(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=En(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[c]?Math.ceil(o[c].swiperSlideSize):0,v;for(let m=c+1;m<o.length;m+=1)o[m]&&!v&&(d+=Math.ceil(o[m].swiperSlideSize),f+=1,d>s&&(v=!0));for(let m=c-1;m>=0;m-=1)o[m]&&!v&&(d+=o[m].swiperSlideSize,f+=1,d>s&&(v=!0))}else if(t==="current")for(let d=c+1;d<o.length;d+=1)(n?a[d]+l[d]-a[c]<s:a[d]-a[c]<s)&&(f+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<s&&(f+=1);return f}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&gl(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):En(r,i())[0])();return!a&&n.params.createElements&&(a=dc("div",n.params.wrapperClass),r.append(a),En(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||xr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||xr(r,"direction")==="rtl"),wrongRTL:xr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?gl(n,o):o.addEventListener("load",a=>{gl(n,a.target)})}),Yp(n),n.initialized=!0,Yp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),kM(r)),r.destroyed=!0),null}static extendDefaults(t){At(Kd,t)}static get extendedDefaults(){return Kd}static get defaults(){return Xp}static installModule(t){Rn.prototype.__modules__||(Rn.prototype.__modules__=[]);const n=Rn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Rn.installModule(n)),Rn):(Rn.installModule(t),Rn)}};Object.keys(Xd).forEach(e=>{Object.keys(Xd[e]).forEach(t=>{Gm.prototype[t]=Xd[e][t]})});Gm.use([zM,FM]);const U2=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function li(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Xi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:li(t[r])&&li(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Xi(e[r],t[r]):e[r]=t[r]})}function W2(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function H2(e={}){return e.pagination&&typeof e.pagination.el>"u"}function G2(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function q2(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function W6(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function H6({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:c,pagination:f,navigation:d,scrollbar:v,virtual:m,thumbs:g}=e;let y,w,p,h,b,C,k,P;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(y=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(c.pagination||c.pagination===!1)&&f&&!f.el&&(p=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&v&&!v.el&&(h=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(b=!0);const E=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),c[_].prevEl=void 0,c[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),c[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?C=!0:!c.loop&&n.loop?k=!0:P=!0),s.forEach(_=>{if(li(c[_])&&li(n[_]))Object.assign(c[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&E(_);else{const T=n[_];(T===!0||T===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?T===!1&&E(_):c[_]=n[_]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&t&&m&&c.virtual.enabled?(m.slides=t,m.update(!0)):r.includes("virtual")&&m&&c.virtual.enabled&&(t&&(m.slides=t),m.update(!0)),r.includes("children")&&t&&c.loop&&(P=!0),y&&g.init()&&g.update(!0),w&&(e.controller.control=c.controller.control),p&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),f.init(),f.render(),f.update()),h&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),v.init(),v.updateSize(),v.setTranslate()),b&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Wa(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Wa(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(c.navigation.nextEl=i),o&&(c.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(C||P)&&e.loopDestroy(),(k||P)&&e.loopCreate(),e.update()}function G6(e={},t=!0){const n={on:{}},r={},i={};Xi(n,Xp),n._emitClasses=!0,n.init=!1;const o={},a=U2.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?li(e[s])?(n[s]={},i[s]={},Xi(n[s],e[s]),Xi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function q6({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){W2(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),H2(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),G2(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function Y6(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),c=n.map(i);s.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return U2.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(li(e[s])&&li(t[s])){const c=Object.keys(e[s]),f=Object.keys(t[s]);c.length!==f.length?a(s):(c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),f.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const X6=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function pc(){return pc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pc.apply(this,arguments)}function Y2(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function X2(e){const t=[];return Q.Children.toArray(e).forEach(n=>{Y2(n)?t.push(n):n.props&&n.props.children&&X2(n.props.children).forEach(r=>t.push(r))}),t}function K6(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Q.Children.toArray(e).forEach(r=>{if(Y2(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=X2(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function Q6(e,t,n){if(!n)return null;const r=f=>{let d=f;return f<0?d=t.length+f:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let f=l;f<s;f+=1)f>=o&&f<=a&&c.push(t[r(f)]);return c.map((f,d)=>Q.cloneElement(f,{swiper:e,style:i,key:f.props.virtualIndex||f.key||`slide-${d}`}))}function pa(e,t){return typeof window>"u"?x.useEffect(e,t):x.useLayoutEffect(e,t)}const r1=x.createContext(null),Z6=x.createContext(null),K2=x.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,c]=x.useState("swiper"),[f,d]=x.useState(null),[v,m]=x.useState(!1),g=x.useRef(!1),y=x.useRef(null),w=x.useRef(null),p=x.useRef(null),h=x.useRef(null),b=x.useRef(null),C=x.useRef(null),k=x.useRef(null),P=x.useRef(null),{params:E,passedParams:_,rest:T,events:I}=G6(o),{slides:M,slots:D}=K6(r),O=()=>{m(!v)};Object.assign(E.on,{_containerClasses(j,$){c($)}});const R=()=>{Object.assign(E.on,I),l=!0;const j={...E};if(delete j.wrapperClass,w.current=new Gm(j),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=M;const $={cache:!1,slides:M,renderExternal:d,renderExternalUpdate:!1};Xi(w.current.params.virtual,$),Xi(w.current.originalParams.virtual,$)}};y.current||R(),w.current&&w.current.on("_beforeBreakpoint",O);const L=()=>{l||!I||!w.current||Object.keys(I).forEach(j=>{w.current.on(j,I[j])})},z=()=>{!I||!w.current||Object.keys(I).forEach(j=>{w.current.off(j,I[j])})};x.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",O)}),x.useEffect(()=>{!g.current&&w.current&&(w.current.emitSlidesClasses(),g.current=!0)}),pa(()=>{if(a&&(a.current=y.current),!!y.current)return w.current.destroyed&&R(),q6({el:y.current,nextEl:b.current,prevEl:C.current,paginationEl:k.current,scrollbarEl:P.current,swiper:w.current},E),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),pa(()=>{L();const j=Y6(_,p.current,M,h.current,$=>$.key);return p.current=_,h.current=M,j.length&&w.current&&!w.current.destroyed&&H6({swiper:w.current,slides:M,passedParams:_,changedParams:j,nextEl:b.current,prevEl:C.current,scrollbarEl:P.current,paginationEl:k.current}),()=>{z()}}),pa(()=>{X6(w.current)},[f]);function A(){return E.virtual?Q6(w.current,M,f):M.map((j,$)=>Q.cloneElement(j,{swiper:w.current,swiperSlideIndex:$}))}return Q.createElement(t,pc({ref:y,className:q2(`${s}${e?` ${e}`:""}`)},T),Q.createElement(Z6.Provider,{value:w.current},D["container-start"],Q.createElement(n,{className:W6(E.wrapperClass)},D["wrapper-start"],A(),D["wrapper-end"]),W2(E)&&Q.createElement(Q.Fragment,null,Q.createElement("div",{ref:C,className:"swiper-button-prev"}),Q.createElement("div",{ref:b,className:"swiper-button-next"})),G2(E)&&Q.createElement("div",{ref:P,className:"swiper-scrollbar"}),H2(E)&&Q.createElement("div",{ref:k,className:"swiper-pagination"}),D["container-end"]))});K2.displayName="Swiper";const Q2=x.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},c)=>{const f=x.useRef(null),[d,v]=x.useState("swiper-slide"),[m,g]=x.useState(!1);function y(b,C,k){C===f.current&&v(k)}pa(()=>{if(typeof l<"u"&&(f.current.swiperSlideIndex=l),c&&(c.current=f.current),!(!f.current||!r)){if(r.destroyed){d!=="swiper-slide"&&v("swiper-slide");return}return r.on("_slideClass",y),()=>{r&&r.off("_slideClass",y)}}}),pa(()=>{r&&f.current&&!r.destroyed&&v(r.getSlideClasses(f.current))},[r]);const w={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},p=()=>typeof t=="function"?t(w):t,h=()=>{g(!0)};return Q.createElement(e,pc({ref:f,className:q2(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:h},s),i&&Q.createElement(r1.Provider,{value:w},Q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},p(),o&&!m&&Q.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}}))),!i&&Q.createElement(r1.Provider,{value:w},p(),o&&!m&&Q.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}})))});Q2.displayName="SwiperSlide";const J6=S.section`
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
`,eD=S.div`
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
`,tD=S.div`
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
`,nD=S(Pe)`
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
`,rD=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],iD=()=>u.jsx(J6,{children:u.jsx(K2,{modules:[IM,DM,MM],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:rD.map(e=>u.jsx(Q2,{children:u.jsx(eD,{bg:e.img,children:u.jsxs(tD,{children:[u.jsx("h1",{children:e.title}),u.jsx("p",{children:e.desc}),u.jsx(nD,{to:e.url,children:e.btn})]})})},e.id))})}),oD=S.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Qd=S.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,Zd=S.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Jd=S.div`
  font-size: 14px;
  color: #888;
`,Z2=()=>u.jsxs(oD,{children:[u.jsxs(Qd,{children:[u.jsx(Zd,{children:"3000+"}),u.jsx(Jd,{children:"Перевірених деталей"})]}),u.jsxs(Qd,{children:[u.jsx(Zd,{children:"6 років"}),u.jsx(Jd,{children:"Досвіду на ринку"})]}),u.jsxs(Qd,{children:[u.jsx(Zd,{children:"100%"}),u.jsx(Jd,{children:"Контроль якості"})]})]}),aD=ze.div`
  background:var(--background-color);
`,sD=ze.div`
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
`;const lD=()=>u.jsx(aD,{children:u.jsxs(sD,{children:[u.jsx(iD,{}),u.jsx(gS,{}),u.jsx(wM,{}),u.jsx(Z2,{})]})}),cD=S.div`
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
`,uD=S.section`
  background-color:  var(--second-background);
`,dD=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,fD=S.button`
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
`,pD=S.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,hD=S.button`
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
`;S.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`;const mD=S.div`
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
`,gD=S.div`
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
`;S.button`
  font-size: 20px;
  border: none;
  background: none;
  margin-bottom: 20px;
`;const vD=S.div`
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
`;S.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;const xD=S.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,yD=S.button`
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
`,J2=S.button`
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
`,bD=S.div`
  position: relative;
  display: inline-block;

`,wD=S.div`
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
`,Ci=S.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,SD=S.aside`

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
`,CD=S.h3`
    display: flex;
    gap: 110px;
margin-bottom: 15px;
font-size: 20px;
font-family: var(--main-font);
  
`;S.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  font-size: 14px;
`;const kD=S.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,_D=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,ED=S.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,PD=S.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,jD=S.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,TD=S.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Kp=S.input.attrs({type:"checkbox"})`
  display: none;
`,OD=S.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Kp}:checked + & {
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

  ${Kp}:checked + &::after {
    opacity: 1;
  }
`;var Qp={},qm={},Ym={},_o={};Object.defineProperty(_o,"__esModule",{value:!0});_o.Direction=void 0;var i1;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(i1||(_o.Direction=i1={}));(function(e){var t=te&&te.__spreadArray||function(D,O,R){if(R||arguments.length===2)for(var L=0,z=O.length,A;L<z;L++)(A||!(L in O))&&(A||(A=Array.prototype.slice.call(O,0,L)),A[L]=O[L]);return D.concat(A||Array.prototype.slice.call(O))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=x,r=_o,i=function(D){var O=D.toString().split(".")[1];return O?O.length:0};e.getStepDecimals=i;function o(D){return D.touches&&D.touches.length||D.changedTouches&&D.changedTouches.length}e.isTouchEvent=o;function a(D,O,R){var L=(O-D)/R,z=8,A=Number(L.toFixed(z));return parseInt(A.toString(),10)===A}e.isStepDivisible=a;function l(D,O,R,L,z,A,j){var $=1e11;if(D=Math.round(D*$)/$,!A){var F=j[O-1],B=j[O+1];if(F&&F>D)return F;if(B&&B<D)return B}if(D>L)return L;if(D<R)return R;var N=Math.floor(D*$-R*$)%Math.floor(z*$),V=Math.floor(D*$-Math.abs(N)),H=N===0?D:V/$,G=Math.abs(N/$)<z/2?H:H+z,W=(0,e.getStepDecimals)(z);return parseFloat(G.toFixed(W))}e.normalizeValue=l;function s(D,O,R){return(D-O)/(R-O)}e.relativeValue=s;function c(D){return D===r.Direction.Up||D===r.Direction.Down}e.isVertical=c;function f(D,O,R){if(O>=R)throw new RangeError("min (".concat(O,") is equal/bigger than max (").concat(R,")"));if(D<O)throw new RangeError("value (".concat(D,") is smaller than min (").concat(O,")"));if(D>R)throw new RangeError("value (".concat(D,") is bigger than max (").concat(R,")"))}e.checkBoundaries=f;function d(D,O,R){return D<O?O:D>R?R:D}e.checkValuesAgainstBoundaries=d;function v(D){if(!(D.length<2)&&!D.slice(1).every(function(O,R){return D[R]<=O}))throw new RangeError("values={[".concat(D,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=v;function m(D){var O=window.getComputedStyle(D);return{top:parseInt(O["margin-top"],10),bottom:parseInt(O["margin-bottom"],10),left:parseInt(O["margin-left"],10),right:parseInt(O["margin-right"],10)}}e.getMargin=m;function g(D){var O=window.getComputedStyle(D);return{top:parseInt(O["padding-top"],10)+parseInt(O["border-top-width"],10),bottom:parseInt(O["padding-bottom"],10)+parseInt(O["border-bottom-width"],10),left:parseInt(O["padding-left"],10)+parseInt(O["border-left-width"],10),right:parseInt(O["padding-right"],10)+parseInt(O["border-right-width"],10)}}e.getPaddingAndBorder=g;function y(D,O,R){var L=R?-1:1;D.forEach(function(z,A){return p(z,L*O[A].x,O[A].y)})}e.translateThumbs=y;function w(D,O,R,L){for(var z=0,A=I(D[0],O,R,L),j=1;j<D.length;j++){var $=I(D[j],O,R,L);$<A&&(A=$,z=j)}return z}e.getClosestThumbIndex=w;function p(D,O,R){D.style.transform="translate(".concat(O,"px, ").concat(R,"px)")}e.translate=p;var h=function(D){var O=[],R=null,L=function(){for(var z=[],A=0;A<arguments.length;A++)z[A]=arguments[A];O=z,!R&&(R=requestAnimationFrame(function(){R=null,D.apply(void 0,O)}))};return L};e.schd=h;function b(D,O,R){var L=D.slice(0);return L[O]=R,L}e.replaceAt=b;function C(D){var O=D.values,R=D.colors,L=D.min,z=D.max,A=D.direction,j=A===void 0?r.Direction.Right:A,$=D.rtl,F=$===void 0?!1:$;F&&j===r.Direction.Right?j=r.Direction.Left:F&&r.Direction.Left&&(j=r.Direction.Right);var B=O.slice(0).sort(function(V,H){return V-H}).map(function(V){return(V-L)/(z-L)*100}),N=B.reduce(function(V,H,G){return"".concat(V,", ").concat(R[G]," ").concat(H,"%, ").concat(R[G+1]," ").concat(H,"%")},"");return"linear-gradient(".concat(j,", ").concat(R[0]," 0%").concat(N,", ").concat(R[R.length-1]," 100%)")}e.getTrackBackground=C;function k(){}e.voidFn=k;function P(D){throw new Error("Didn't expect to get here")}e.assertUnreachable=P;var E=function(D,O,R,L,z){z===void 0&&(z=function(j){return j});var A=Math.ceil(t([D],Array.from(D.children),!0).reduce(function(j,$){var F=Math.ceil($.getBoundingClientRect().width);if($.innerText&&$.innerText.includes(R)&&$.childElementCount===0){var B=$.cloneNode(!0);B.innerHTML=z(O.toFixed(L)),B.style.visibility="hidden",document.body.appendChild(B),F=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return F>j?F:j},D.getBoundingClientRect().width));return A},_=function(D,O,R,L,z,A,j){j===void 0&&(j=function(B){return B});var $=[],F=function(B){var N=E(R[B],L[B],z,A,j),V=O[B].x;O.forEach(function(H,G){var W=H.x,q=E(R[G],L[G],z,A,j);B!==G&&(V>=W&&V<=W+q||V+N>=W&&V+N<=W+q)&&($.includes(G)||($.push(B),$.push(G),$=t(t([],$,!0),[B,G],!1),F(G)))})};return F(D),Array.from(new Set($.sort()))},T=function(D,O,R,L,z,A){L===void 0&&(L=.1),z===void 0&&(z=" - "),A===void 0&&(A=function(G){return G});var j=(0,e.getStepDecimals)(L),$=(0,n.useState)({}),F=$[0],B=$[1],N=(0,n.useState)(A(O[R].toFixed(j))),V=N[0],H=N[1];return(0,n.useEffect)(function(){if(D){var G=D.getThumbs();if(G.length<1)return;var W={},q=D.getOffsets(),oe=_(R,q,G,O,z,j,A),he=A(O[R].toFixed(j));if(oe.length){var ie=oe.reduce(function(St,Po,ls,jo){return St.length?t(t([],St,!0),[q[jo[ls]].x],!1):[q[jo[ls]].x]},[]);if(Math.min.apply(Math,ie)===q[R].x){var De=[];oe.forEach(function(St){De.push(O[St].toFixed(j))}),he=Array.from(new Set(De.sort(function(St,Po){return parseFloat(St)-parseFloat(Po)}))).map(A).join(z);var We=Math.min.apply(Math,ie),He=Math.max.apply(Math,ie),gi=G[oe[ie.indexOf(He)]].getBoundingClientRect().width;W.left="".concat(Math.abs(We-(He+gi))/2,"px"),W.transform="translate(-50%, 0)"}else W.visibility="hidden"}H(he),B(W)}},[D,O]),[V,F]};e.useThumbOverlap=T;function I(D,O,R,L){var z=D.getBoundingClientRect(),A=z.left,j=z.top,$=z.width,F=z.height;return c(L)?Math.abs(R-(j+F/2)):Math.abs(O-(A+$/2))}var M=function(){var D,O=((D=navigator.userAgentData)===null||D===void 0?void 0:D.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(O)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=M})(Ym);var $D=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),ID=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),MD=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),DD=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&ID(t,e,n);return MD(t,e),t},o1=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(qm,"__esModule",{value:!0});var Ls=DD(x),ae=Ym,Fe=_o,LD=["ArrowRight","ArrowUp","k","PageUp"],AD=["ArrowLeft","ArrowDown","j","PageDown"],RD=function(e){$D(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=Ls.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,c=r.trackRef.current;if(!c)return console.warn("No track element found."),[];var f=c.getBoundingClientRect(),d=(0,ae.getPaddingAndBorder)(c);return r.getThumbs().map(function(v,m){var g={x:0,y:0},y=v.getBoundingClientRect(),w=(0,ae.getMargin)(v);switch(o){case Fe.Direction.Right:return g.x=(w.left+d.left)*-1,g.y=((y.height-f.height)/2+d.top)*-1,g.x+=f.width*(0,ae.relativeValue)(a[m],l,s)-y.width/2,g;case Fe.Direction.Left:return g.x=(w.right+d.right)*-1,g.y=((y.height-f.height)/2+d.top)*-1,g.x+=f.width-f.width*(0,ae.relativeValue)(a[m],l,s)-y.width/2,g;case Fe.Direction.Up:return g.x=((y.width-f.width)/2+w.left+d.left)*-1,g.y=-d.left,g.y+=f.height-f.height*(0,ae.relativeValue)(a[m],l,s)-y.height/2,g;case Fe.Direction.Down:return g.x=((y.width-f.width)/2+w.left+d.left)*-1,g.y=-d.left,g.y+=f.height*(0,ae.relativeValue)(a[m],l,s)-y.height/2,g;default:return(0,ae.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,ae.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,ae.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,ae.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,ae.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,ae.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,c=o.rtl,f=o.direction,d=r.state.isChanged,v=r.getTargetIndex(i.nativeEvent),m=c||f===Fe.Direction.Left||f===Fe.Direction.Down?-1:1;v!==-1&&(LD.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:v,isChanged:!0}),l((0,ae.replaceAt)(a,v,r.normalizeValue(a[v]+m*(i.key==="PageUp"?s*10:s),v)))):AD.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:v,isChanged:!0}),l((0,ae.replaceAt)(a,v,r.normalizeValue(a[v]-m*(i.key==="PageDown"?s*10:s),v)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,c=r.props,f=c.direction,d=c.min,v=c.max,m=c.onChange,g=c.values,y=c.step,w=c.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var p=r.trackRef.current;if(!p)return null;var h=p.getBoundingClientRect(),b=(0,ae.isVertical)(f)?h.height:h.width;if(s[0]!==-1&&s[1]!==-1){var C=i-s[0],k=o-s[1],P=0;switch(f){case Fe.Direction.Right:case Fe.Direction.Left:P=C/b*(v-d);break;case Fe.Direction.Down:case Fe.Direction.Up:P=k/b*(v-d);break;default:(0,ae.assertUnreachable)(f)}if(w&&(P*=-1),Math.abs(P)>=y/2){for(var E=0;E<r.thumbRefs.length;E++){if(g[E]===v&&Math.sign(P)===1||g[E]===d&&Math.sign(P)===-1)return;var _=g[E]+P;_>v?P=v-g[E]:_<d&&(P=d-g[E])}for(var T=g.slice(0),E=0;E<r.thumbRefs.length;E++)T=(0,ae.replaceAt)(T,E,r.normalizeValue(g[E]+P,E));r.setState({draggedTrackPos:[i,o]}),m(T)}}else{var I=0;switch(f){case Fe.Direction.Right:I=(i-h.left)/b*(v-d)+d;break;case Fe.Direction.Left:I=(b-(i-h.left))/b*(v-d)+d;break;case Fe.Direction.Down:I=(o-h.top)/b*(v-d)+d;break;case Fe.Direction.Up:I=(b-(o-h.top))/b*(v-d)+d;break;default:(0,ae.assertUnreachable)(f)}w&&(I=v+d-I),Math.abs(g[l]-I)>=y/2&&m((0,ae.replaceAt)(g,l,r.normalizeValue(I,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,c=a.step,f=a.allowOverlap,d=a.values;return(0,ae.normalizeValue)(i,o,l,s,c,f,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=Ls.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),c=[],f=0;f<r.numOfMarks+1;f++){var d=9999,v=9999;if(r.markRefs[f].current){var m=r.markRefs[f].current.getBoundingClientRect();d=m.height,v=m.width}r.props.direction===Fe.Direction.Left||r.props.direction===Fe.Direction.Right?c.push([Math.round(o/r.numOfMarks*f+l-v/2),-Math.round((d-a)/2)]):c.push([Math.round(a/r.numOfMarks*f+s-d/2),-Math.round((v-o)/2)])}r.setState({markOffsets:c})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,ae.schd)(r.onMouseMove),r.schdOnTouchMove=(0,ae.schd)(r.onTouchMove),r.schdOnEnd=(0,ae.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return Ls.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,ae.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,ae.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,ae.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,ae.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,c=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,ae.translateThumbs)(this.getThumbs(),this.getOffsets(),c),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(f){(0,ae.isStepDivisible)(a,f,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,c=s===void 0?function(){return null}:s,f=r.values,d=r.min,v=r.max,m=r.allowOverlap,g=r.disabled,y=this.state,w=y.draggedThumbIndex,p=y.thumbZIndexes,h=y.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,ae.isVertical)(this.props.direction)?"ns-resize":"ew-resize":f.length===1&&!g?"pointer":"inherit"},onMouseDown:g?ae.voidFn:this.onMouseDownTrack,onTouchStart:g?ae.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:g,children:o1(o1([],h.map(function(b,C,k){return c({props:{style:n.props.direction===Fe.Direction.Left||n.props.direction===Fe.Direction.Right?{position:"absolute",left:"".concat(b[0],"px"),marginTop:"".concat(b[1],"px")}:{position:"absolute",top:"".concat(b[0],"px"),marginLeft:"".concat(b[1],"px")},key:"mark".concat(C),ref:n.markRefs[C]},index:C})}),!0),f.map(function(b,C){var k=n.state.draggedThumbIndex===C;return l({index:C,value:b,isDragged:k,props:{style:{position:"absolute",zIndex:p[C],cursor:g?"inherit":k?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:C,tabIndex:g?void 0:0,"aria-valuemax":m?v:f[C+1]||v,"aria-valuemin":m?d:f[C-1]||d,"aria-valuenow":b,draggable:!1,ref:n.thumbRefs[C],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:g?ae.voidFn:n.onKeyDown,onKeyUp:g?ae.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Fe.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(Ls.Component);qm.default=RD;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(qm);e.Range=n.default;var r=Ym;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=_o;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Qp);const zD=S.div`
  padding: 20px 0;
`,FD=S.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,a1=S.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid  #85683d;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color:  #583d2d;
  }
`;S.span`
  display: flex;
  align-items: center;
  color: #999;
`;const ND=S.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,BD=S.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,eC=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,c]=x.useState([o,a]);x.useEffect(()=>{e&&e.length===2&&(c(e),t&&t(e))},[e,t]);const f=m=>{c(m),t&&t(m)},d=(m,g)=>{const y=g===""?"":Number(g),w=[...s];w[m]=y,f(w)},v=m=>{const g=[...s];m===0?((g[0]===""||g[0]<o)&&(g[0]=o),g[0]>g[1]-50&&(g[0]=g[1]-50)):((g[1]===""||g[1]>a)&&(g[1]=a),g[1]<g[0]+50&&(g[1]=g[0]+50)),f(g)};return u.jsx(u.Fragment,{children:l&&u.jsxs(zD,{children:[u.jsxs(FD,{children:[u.jsx(a1,{type:"number",value:s[0],min:o,max:s[1],onChange:m=>d(0,m.target.value),onBlur:()=>v(0)}),u.jsx(a1,{type:"number",value:s[1],min:s[0],max:a,onChange:m=>d(1,m.target.value),onBlur:()=>v(1)})]}),u.jsx(Qp.Range,{values:s,step:50,min:o,max:a,onChange:f,renderTrack:({props:m,children:g})=>u.jsx(ND,{...m,background:Qp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:g}),renderThumb:({props:m})=>u.jsx(BD,{...m})})]})})},VD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=x.useState([]),[l,s]=x.useState({});x.useEffect(()=>{t&&(async()=>{try{const w=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],p={};w.forEach(b=>{var C;(C=b.attributes)==null||C.forEach(k=>{p[k.label]||(p[k.label]=new Set),p[k.label].add(k.value)})});const h=Object.entries(p).map(([b,C])=>({type:"checkbox",label:b,name:b.toLowerCase(),options:Array.from(C)}));a(h)}catch(g){console.error(g)}})()},[t]);const c=m=>{s(g=>({...g,[m]:!g[m]}))},f=(m,g)=>{r(y=>{const w=y[m]||[];return w.includes(g)?{...y,[m]:w.filter(p=>p!==g)}:{...y,[m]:[...w,g]}})},d=Object.values(n).some(m=>Array.isArray(m)&&m.length>0),v=()=>{d&&r({})};return u.jsxs(SD,{children:[u.jsxs(CD,{children:["Фільтри ",u.jsx(Lw,{size:20})]}),(o||[]).map(m=>{var y;const g=!!l[m.name];return u.jsxs(kD,{children:[u.jsxs(_D,{onClick:()=>c(m.name),children:[u.jsx(ED,{children:m.label}),u.jsx(PD,{isOpen:g})]}),u.jsxs(jD,{isOpen:g,children:[m.type==="checkbox"&&((y=m.options)==null?void 0:y.map(w=>{var p;return u.jsxs(TD,{children:[u.jsx(Kp,{checked:((p=n[m.name])==null?void 0:p.includes(w))||!1,onChange:()=>f(m.name,w)}),u.jsx(OD,{}),w]},w)})),m.type==="range"&&u.jsx(eC,{onChange:i,childValues:e})]})]},m.name)}),u.jsx(J2,{onClick:v,disabled:!d,children:"Скинути обрані фільтри"})]})},UD=S.aside`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  font-size: 20px;
font-family: var(--main-font);
`;S.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;const WD=S.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,HD=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,GD=S.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,qD=S.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,YD=S.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,XD=S.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Zp=S.input.attrs({type:"checkbox"})`
  display: none;
`,KD=S.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Zp}:checked + & {
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

  ${Zp}:checked + &::after {
    opacity: 1;
  }
`,QD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=x.useState({}),[l,s]=x.useState([]);x.useEffect(()=>{t&&(async()=>{try{const g=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],y={};g.forEach(p=>{var h;(h=p.attributes)==null||h.forEach(b=>{y[b.label]||(y[b.label]=new Set),y[b.label].add(b.value)})});const w=Object.entries(y).map(([p,h])=>({type:"checkbox",label:p,name:p.toLowerCase(),options:Array.from(h)}));s(w)}catch(v){console.error(v)}})()},[t]);const c=d=>{a(v=>({...v,[d]:!v[d]}))},f=(d,v)=>{r(m=>{const g=m[d]||[];return g.includes(v)?{...m,[d]:g.filter(y=>y!==v)}:{...m,[d]:[...g,v]}})};return u.jsx(UD,{children:(l||[]).map(d=>{var m;const v=!!o[d.name];return u.jsxs(WD,{children:[u.jsxs(HD,{onClick:()=>c(d.name),children:[u.jsx(GD,{children:d.label}),u.jsx(qD,{isOpen:v})]}),u.jsxs(YD,{isOpen:v,children:[d.type==="checkbox"&&((m=d.options)==null?void 0:m.map(g=>{var y;return u.jsxs(XD,{children:[u.jsx(Zp,{checked:((y=n[d.name])==null?void 0:y.includes(g))||!1,onChange:()=>f(d.name,g)}),u.jsx(KD,{}),g]},g)})),d.type==="range"&&u.jsx(eC,{onChange:i,childValues:e})]})]},d.name)})})},ZD=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:c})=>{const[f,d]=x.useState([]),[v,m]=x.useState(!0),[g,y]=x.useState(1),w=24;let p=f;const h=x.useRef(null);x.useEffect(()=>{const O=R=>{h.current&&!h.current.contains(R.target)&&o(!1)};return document.addEventListener("mousedown",O),()=>{document.removeEventListener("mousedown",O)}},[o]),x.useEffect(()=>{(async()=>{try{m(!0);const L=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();d(L.data);const z=Date.now(),A=7*24*60*60*1e3,j=L.data.filter(F=>{if(F.stock>0||!F.sold_date)return!0;const B=new Date(F.sold_date).getTime();return z-B<A});d(j);const $=L.data.map(F=>F.price);if($.length>0){let F=Math.min(...$),B=Math.max(...$);e([F,B])}}catch(R){console.error("Error fetching products:",R)}finally{m(!1)}})()},[t,e]),x.useEffect(()=>{y(1)},[t,n,r]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[g]);const b=Ke(),C=It(),k=Ue(O=>O.favorites.items),P=Ue(O=>O.cart.items),E=(O,R)=>{R.stopPropagation();const L=k.some(z=>z.id===(O==null?void 0:O.id));pi(O,L,C,K)};Object.keys(n).forEach(O=>{const R=n[O];Array.isArray(R)&&R.length>0&&(p=p.filter(L=>{var A;const z=(A=L.attributes)==null?void 0:A.find(j=>j.label.toLowerCase()===O.toLowerCase());return z&&R.includes(z.value)}))}),r&&r.length;const _=x.useMemo(()=>{const O=[...p],R=L=>L.new_price&&L.new_price<L.price?L.new_price:L.price;switch(i){case"name":return O.sort((L,z)=>s==="asc"?L.name.localeCompare(z.name):z.name.localeCompare(L.name));case"price":return O.sort((L,z)=>{const A=R(L),j=R(z);return s==="asc"?A-j:j-A});case"date":return O.sort((L,z)=>s==="asc"?new Date(L.createdAt)-new Date(z.createdAt):new Date(z.createdAt)-new Date(L.createdAt));default:return O}},[i,p,s]),T=g*w,I=T-w,M=_.slice(I,T),D=Math.ceil(p.length/w);return v?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(hi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsxs(Q4,{children:[u.jsxs(Z4,{children:[u.jsx(J4,{children:t}),u.jsxs(s$,{ref:h,children:[u.jsxs(l$,{onClick:()=>o(O=>!O),children:["Сортування",u.jsx(qc,{strokeWidth:.9,size:22})]}),a&&u.jsxs(c$,{children:[u.jsx(wi,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),u.jsx(wi,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),u.jsx(wi,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),u.jsx(wi,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),u.jsx(wi,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),u.jsx(wi,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(Ln,{autoClose:1500}),p.length===0?u.jsx(e$,{children:u.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):u.jsx(t$,{children:M.map(O=>{var G,W;const R=k.some(q=>q.id===O.id),L=O!=null&&O.createdAt?Date.now()-new Date(O.createdAt).getTime()<7*24*60*60*1e3:!1,z=P.find(q=>q.id===O.id),A=(O==null?void 0:O.available)??!0,j=(O==null?void 0:O.stock)===0,$=O.new_price&&O.new_price<O.price,F=$?O.new_price:O.price,B=$?Math.round((O.price-O.new_price)/O.price*100):0,N=O?P.find(q=>q.id===O.id):null,V=(N==null?void 0:N.quantity)||0,H=async(q,oe)=>{if(oe.stopPropagation(),V>=q.stock){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(V+1>q.stock){K.warning(`Доступно лише ${q.stock} шт.`);return}await wo(q,1,C,K)};return u.jsxs(n$,{onClick:()=>b(`/product/${O.slug??O.id}`),$soldOut:j,style:{cursor:"pointer"},children:[u.jsxs(Hw,{children:[L&&u.jsx(km,{children:"Новинка"}),!A&&u.jsx(Cm,{children:"Бронь"}),j&&u.jsx(Zc,{children:"Продано"}),u.jsx(r$,{src:((W=(G=O.images)==null?void 0:G[0])==null?void 0:W.url)||"/placeholder.jpg",alt:O.name,onError:q=>{q.currentTarget.onerror=null,q.currentTarget.src=er}})]}),u.jsx(o$,{children:O.name}),u.jsxs(i$,{children:[u.jsx(qw,{children:u.jsxs(Yw,{children:[u.jsxs(Xw,{$discount:$,children:[F.toLocaleString()," грн"]}),$&&u.jsxs(Kw,{children:[O.price.toLocaleString()," грн"]}),$&&u.jsxs(Qw,{children:["-",B,"%"]})]})}),u.jsxs(Gw,{children:[A&&!j&&u.jsx(Jl,{onClick:q=>H(O,q),children:u.jsx(bo,{size:24,color:z?"var(--orange-color)":"black",strokeWidth:2})}),!j&&u.jsx(Jl,{onClick:q=>E(O,q),children:u.jsx(Ja,{size:24,fill:R?"#ff4d4f":"none",color:R?"#ff4d4f":"#000000",strokeWidth:R?1:2})})]})]})]},O.id)})}),p.length>w&&u.jsxs(a$,{children:[u.jsx(Dd,{onClick:()=>y(O=>Math.max(O-1,1)),disabled:g===1,children:"Назад"}),Array.from({length:D},(O,R)=>u.jsx(Dd,{onClick:()=>y(R+1),active:g===R+1,children:R+1},R)),u.jsx(Dd,{onClick:()=>y(O=>Math.min(O+1,D)),disabled:g===D,children:"Вперед"})]})]})},JD=()=>{const[e,t]=x.useState({}),{category:n}=Kx(),[r,i]=x.useState(!1),[o,a]=x.useState(!1),[l,s]=x.useState("date"),[c,f]=x.useState("desc"),[d,v]=x.useState([]),[m,g]=x.useState([0,0]),y=Object.values(e).some(p=>Array.isArray(p)&&p.length>0),w=()=>{y&&t({})};return u.jsxs(uD,{children:[u.jsxs(cD,{children:[u.jsxs(dD,{children:[u.jsxs(fD,{onClick:()=>i(!0),children:["Фільтр",u.jsx(pD,{children:u.jsx("use",{href:`${hn}#icon-filter`})})]}),u.jsxs(bD,{children:[u.jsxs(hD,{onClick:()=>a(p=>!p),children:["Сортування",u.jsx(qc,{strokeWidth:.9,size:22})]}),o&&u.jsxs(wD,{children:[u.jsx(Ci,{onClick:()=>{s("name"),f("asc"),a(!1)},children:"А-Я"}),u.jsx(Ci,{onClick:()=>{s("name"),f("desc"),a(!1)},children:"Я-А"}),u.jsx(Ci,{onClick:()=>{s("price"),f("asc"),a(!1)},children:"Ціна ↑"}),u.jsx(Ci,{onClick:()=>{s("price"),f("desc"),a(!1)},children:"Ціна ↓"}),u.jsx(Ci,{onClick:()=>{s("date"),f("desc"),a(!1)},children:"Спочатку новіші"}),u.jsx(Ci,{onClick:()=>{s("date"),f("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(VD,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:d,priceRange:m,setPriceRange:g}),u.jsx(ZD,{priceRange:m,values:d,setValues:v,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:c,setSortOrder:f}),r&&u.jsx(mD,{onClick:()=>i(!1),open:r,children:u.jsxs(gD,{onClick:p=>p.stopPropagation(),open:r,children:[u.jsxs(vD,{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(Lw,{size:20}),u.jsx("h2",{children:"Фільтри"})]}),u.jsx(Rw,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),u.jsx(QD,{childValues:d,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:m,setPriceRange:g}),u.jsxs(xD,{children:[u.jsx(J2,{onClick:w,disabled:!y,children:"Скинути обрані фільтри"}),u.jsx(yD,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},s1=S.div`
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
`,eL=S.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,tL=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,nL=S.div``,rL=S.div`
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
`;S.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const iL=S.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,oL=S.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,aL=S.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,sL=S.div``,lL=S.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,cL=S.p`
   font-size: 17px;
  margin-bottom: 10px;
  color: #151414;
    font-family: var(--second-font);

`,uL=S.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,dL=S.div`
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

`,fL=S.span`
  color: #27ae60;
  font-size: 17px;
`,pL=S.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,hL=S.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,l1=S.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,mL=S.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,gL=S.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,vL=S.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,xL=S.div`
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
`,yL=S.button`
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
`;S.div`
  margin-top: 30px;
`;S.p`
  font-weight: bold;
  margin-bottom: 10px;
`;S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;S.div`
  padding: 8px 15px;
  border: 1px solid ${e=>e.active?"#27ae60":"#ddd"};
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  background: ${e=>e.active?"#f0fff4":"white"};
`;const c1=S.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,bL=S.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,u1=S.div`
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
`;S.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`;const wL=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,d1=S.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,f1=S.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,Wo=S.button`
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
`,p1=S.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,h1=S.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,SL=S.button`
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
`,CL=S.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,tC=S.span`

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
`,kL=S.div`
  position: relative;
  display: inline-block;

  &:hover ${tC} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,nC="carousel",rC="controller",_L="navigation",EL="no-scroll",Xm="portal",PL="root",iC="toolbar",m1="zoom",ef="loading",tf="error",nf="complete",jL="placeholder",TL=e=>`active-slide-${e}`,OL="fullsize",Km="flex_center",$L="no_scroll",oC="no_scroll_padding",Qm="slide",aC="slide_wrapper",IL="slide_wrapper_interactive",Ur="prev",Wr="next",g1="swipe",fo="close",sC="onPointerDown",lC="onPointerMove",cC="onPointerUp",uC="onPointerLeave",dC="onPointerCancel",Zm="onKeyDown",ML="onKeyUp",Jm="onWheel",DL="Escape",LL="ArrowLeft",AL="ArrowRight",RL="button",Jp="icon",fC="contain",v1="cover",pC="Unknown action type",hC="yarl__";function $n(...e){return e.filter(Boolean).join(" ")}function se(e){return`${hC}${e}`}function kt(e){return`--${hC}${e}`}function ss(e,t){return`${e}${t?`_${t}`:""}`}function eg(e){return t=>ss(e,t)}function po(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function zL(e,t,n){return po(e,"{index} of {total}").replace(/\{index}/g,`${og(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function tg(...e){return()=>{e.forEach(t=>{t()})}}function or(e,t,n){return()=>{const r=x.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function ng(){return typeof window<"u"}function rg(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function Eo(e){return e.type===void 0||e.type==="image"}function ig(e,t){return e.imageFit===v1||e.imageFit!==fC&&t===v1}function Mu(e){return typeof e=="string"?Number.parseInt(e,10):e}function hc(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=Mu(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function FL(e,t){const n=hc(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function NL(){return(ng()?window==null?void 0:window.devicePixelRatio:void 0)||1}function og(e,t){return t>0?(e%t+t)%t:0}function mC(e){return e.length>0}function gC(e,t){return e[og(t,e.length)]}function eh(e,t){return mC(e)?gC(e,t):void 0}function BL(e){return Eo(e)?e.src:void 0}function VL(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=x.isValidElement(n)?x.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function UL(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const WL=Number(x.version.split(".")[0])>=19;function HL(e){return{inert:WL?e:e?"":void 0}}function GL(e){e.scrollTop}const th={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[fo]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:fC,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Lr(e,t){return{name:e,component:t}}function Ge(e,t){return{module:e,children:t}}function vC(e,t,n){return e.module.name===t?n(e):e.children?[Ge(e.module,e.children.flatMap(r=>{var i;return(i=vC(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function ki(e,t,n){return e.flatMap(r=>{var i;return(i=vC(r,t,n))!==null&&i!==void 0?i:[]})}function qL(e,t=[],n=[]){let r=e;const i=m=>{const g=[...r];for(;g.length>0;){const y=g.pop();if((y==null?void 0:y.module.name)===m)return!0;y!=null&&y.children&&g.push(...y.children)}return!1},o=(m,g)=>{if(m===""){r=[Ge(g,r)];return}r=ki(r,m,y=>[Ge(g,[y])])},a=(m,g)=>{r=ki(r,m,y=>[Ge(y.module,[Ge(g,y.children)])])},l=(m,g,y)=>{r=ki(r,m,w=>{var p;return[Ge(w.module,[...y?[Ge(g)]:[],...(p=w.children)!==null&&p!==void 0?p:[],...y?[]:[Ge(g)]])]})},s=(m,g,y)=>{r=ki(r,m,w=>[...y?[Ge(g)]:[],w,...y?[]:[Ge(g)]])},c=m=>{a(rC,m)},f=(m,g)=>{r=ki(r,m,y=>[Ge(g,y.children)])},d=m=>{r=ki(r,m,g=>g.children)},v=m=>{n.push(m)};return t.forEach(m=>{m({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:c,replace:f,remove:d,augment:v})}),{config:r,augmentation:m=>n.reduce((g,y)=>y(g),m)}}const xC=x.createContext(null),yC=or("useA11yContext","A11yContext",xC);function YL({children:e}){const[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const c=f=>d=>{var v;d.currentTarget.contains(d.relatedTarget)||n(f),(v=f?l:s)===null||v===void 0||v(d)};return{onFocus:c(!0),onBlur:c(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return x.createElement(xC.Provider,{value:o},e)}const bC=x.createContext(null),Du=or("useDocument","DocumentContext",bC);function XL({nodeRef:e,children:t}){const n=x.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return x.createElement(bC.Provider,{value:n},t)}const wC=x.createContext(null),Lu=or("useEvents","EventsContext",wC);function KL({children:e}){const[t]=x.useState({});x.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=x.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(c=>c!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(c=>c(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return x.createElement(wC.Provider,{value:n},e)}const SC=x.createContext(null),en=or("useLightboxProps","LightboxPropsContext",SC);function QL({children:e,...t}){return x.createElement(SC.Provider,{value:t},e)}const CC=x.createContext(null),Ar=or("useLightboxState","LightboxStateContext",CC),kC=x.createContext(null),ZL=or("useLightboxDispatch","LightboxDispatchContext",kC);function JL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=og(i,n.length),a=eh(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:eh(t.slides,t.index)}:e;default:throw new Error(pC)}}function e8({slides:e,index:t,children:n}){const[r,i]=x.useReducer(JL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:eh(e,t)}),[o,a]=x.useState(e),[l,s]=x.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const c=x.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return x.createElement(kC.Provider,{value:i},x.createElement(CC.Provider,{value:c},n))}const _C=x.createContext(null),Au=or("useTimeouts","TimeoutsContext",_C);function t8({children:e}){const[t]=x.useState([]);x.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=x.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return x.createElement(_C.Provider,{value:n},e)}const ag=x.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:c,labels:f}=en(),d=po(f,t);return x.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:$n(se(RL),n),onClick:o,style:{...a,...c.button},...l},i?i():x.createElement(r,{className:se(Jp),style:c.icon}))});function n8(e,t){const n=r=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function mi(e,t){return n8(e,x.createElement("g",{fill:"currentColor"},x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const r8=mi("Close",x.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),i8=mi("Previous",x.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),o8=mi("Next",x.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),a8=mi("Loading",x.createElement(x.Fragment,null,Array.from({length:8}).map((e,t,n)=>x.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),s8=mi("Error",x.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),In=ng()?x.useLayoutEffect:x.useEffect;function sg(){const[e,t]=x.useState(!1);return x.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function l8(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(Mu);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function x1(e,t){const n=x.useRef(void 0),r=x.useRef(void 0),i=sg();return In(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:c,easing:f,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),l8(e.current))||{};if(s&&c){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:c,easing:f})}catch(v){console.error(v)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function EC(){const e=x.useRef(null),t=x.useRef(void 0),[n,r]=x.useState();return{setContainerRef:x.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=c=>parseFloat(c)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function vl(){const e=x.useRef(void 0),{setTimeout:t,clearTimeout:n}=Au();return x.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function me(e){const t=x.useRef(e);return In(()=>{t.current=e}),x.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function y1(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function nh(e,t){return x.useMemo(()=>e==null&&t==null?null:n=>{y1(e,n),y1(t,n)},[e,t])}function c8(e,t=!1){const n=x.useRef(!1);In(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=x.useCallback(()=>{n.current=!0},[]),i=x.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function lg(){const[e,t]=x.useState(!1);return In(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function u8(){const[e]=x.useState({}),t=x.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=x.useMemo(()=>({onPointerDown:i=>t(sC,i),onPointerMove:i=>t(lC,i),onPointerUp:i=>t(cC,i),onPointerLeave:i=>t(uC,i),onPointerCancel:i=>t(dC,i),onKeyDown:i=>t(Zm,i),onKeyUp:i=>t(ML,i),onWheel:i=>t(Jm,i)}),[t]),r=x.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function b1(e,t){const n=x.useRef(0),r=vl(),i=me((...o)=>{n.current=Date.now(),e(o)});return x.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const rf=eg("slide"),of=eg("slide_image");function mc({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:c}){var f,d,v,m,g,y,w,p;const[h,b]=x.useState(ef),{publish:C}=Lu(),{setTimeout:k}=Au(),P=x.useRef(null);x.useEffect(()=>{t===0&&C(TL(h))},[t,h,C]);const E=me(N=>{("decode"in N?N.decode():Promise.resolve()).catch(()=>{}).then(()=>{N.parentNode&&(b(nf),k(()=>{l==null||l(N)},0))})}),_=x.useCallback(N=>{P.current=N,N!=null&&N.complete&&E(N)},[E]),T=x.useCallback(N=>{E(N.currentTarget)},[E]),I=me(()=>{b(tf),s==null||s()}),M=ig(e,i),D=(N,V)=>Number.isFinite(N)?N:V,O=D(Math.max(...((d=(f=e.srcSet)===null||f===void 0?void 0:f.map(N=>N.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((v=P.current)===null||v===void 0?void 0:v.naturalWidth)||0),R=D(Math.max(...((g=(m=e.srcSet)===null||m===void 0?void 0:m.map(N=>N.height))!==null&&g!==void 0?g:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((y=P.current)===null||y===void 0?void 0:y.naturalHeight)||0),L=O&&R?{maxWidth:`min(${O}px, 100%)`,maxHeight:`min(${R}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},z=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((N,V)=>N.width-V.width).map(N=>`${N.src} ${N.width}w`).join(", "),A=()=>r&&!M&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,j=z&&r&&ng()?`${Math.round(Math.min(A(),r.width))}px`:void 0,{style:$,className:F,...B}=(typeof o=="function"?o(e):o)||{};return x.createElement(x.Fragment,null,x.createElement("img",{ref:_,onLoad:T,onError:I,onClick:a,draggable:!1,className:$n(se(of()),M&&se(of("cover")),h!==nf&&se(of("loading")),F),style:{...L,...c,...$},...B,alt:(p=e.alt)!==null&&p!==void 0?p:"",sizes:j,srcSet:z,src:e.src}),h!==nf&&x.createElement("div",{className:se(rf(jL))},h===ef&&(n!=null&&n.iconLoading?n.iconLoading():x.createElement(a8,{className:$n(se(Jp),se(rf(ef)))})),h===tf&&(n!=null&&n.iconError?n.iconError():x.createElement(s8,{className:$n(se(Jp),se(rf(tf)))}))))}const d8=x.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=x.useRef(null),{trackFocusWithin:s}=yC();return x.createElement(XL,{nodeRef:l},x.createElement("div",{ref:nh(a,l),className:$n(se("root"),t),...s(r,i),...o},n))});var lt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(lt||(lt={}));function PC(e,t,n,r,i){x.useEffect(()=>i?()=>{}:tg(e(sC,t),e(lC,n),e(cC,r),e(uC,r),e(dC,r)),[e,t,n,r,i])}var on;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(on||(on={}));const af=30;function f8({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,c,f,d,v,m,g,y,w){const p=x.useRef(0),h=x.useRef([]),b=x.useRef(void 0),C=x.useRef(0),k=x.useRef(on.NONE),P=x.useCallback(O=>{b.current===O.pointerId&&(b.current=void 0,k.current=on.NONE);const R=h.current;R.splice(0,R.length,...R.filter(L=>L.pointerId!==O.pointerId))},[]),E=x.useCallback(O=>{P(O),O.persist(),h.current.push(O)},[P]),_=x.useCallback(O=>h.current.find(({pointerId:R})=>O.pointerId===R),[]),T=me(O=>{E(O)}),I=(O,R)=>d&&O>R||f&&O<-R,M=me(O=>{const R=_(O);if(R)if(b.current===O.pointerId){const L=Date.now()-C.current,z=p.current;k.current===on.SWIPE?Math.abs(z)>.3*i||Math.abs(z)>5&&L<o?s(z,L):c(z):k.current===on.PULL&&(I(z,2*af)?g(z,L):y(z)),p.current=0,k.current=on.NONE}else{const{target:L}=O;t&&L instanceof HTMLElement&&L===R.target&&(L.classList.contains(se(Qm))||L.classList.contains(se(aC)))&&w()}P(O)}),D=me(O=>{const R=_(O);if(R){const L=b.current===O.pointerId;if(O.buttons===0){L&&p.current!==0?M(O):P(R);return}const z=O.clientX-R.clientX,A=O.clientY-R.clientY;if(b.current===void 0){const j=$=>{E(O),b.current=O.pointerId,C.current=Date.now(),k.current=$};Math.abs(z)>Math.abs(A)&&Math.abs(z)>af&&r(z)?e||(j(on.SWIPE),a()):Math.abs(A)>Math.abs(z)&&I(A,af)&&(j(on.PULL),v())}else L&&(k.current===on.SWIPE?(p.current=z,l(z)):k.current===on.PULL&&(p.current=A,m(A)))}});PC(n,T,D,M)}function p8({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=x.useRef(null),r=me(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return x.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function h8(e,t,n,r,i,o,a,l,s){const c=x.useRef(0),f=x.useRef(0),d=x.useRef(void 0),v=x.useRef(void 0),m=x.useRef(0),g=x.useRef(void 0),y=x.useRef(0),{setTimeout:w,clearTimeout:p}=Au(),h=x.useCallback(()=>{d.current&&(p(d.current),d.current=void 0)},[p]),b=x.useCallback(()=>{v.current&&(p(v.current),v.current=void 0)},[p]),C=me(()=>{e!==lt.SWIPE&&(c.current=0,y.current=0,h(),b())});x.useEffect(C,[e,C]);const k=me(E=>{v.current=void 0,c.current===E&&s(c.current)}),P=me(E=>{if(E.ctrlKey||Math.abs(E.deltaY)>Math.abs(E.deltaX))return;const _=T=>{m.current=T,p(g.current),g.current=T>0?w(()=>{m.current=0,g.current=void 0},300):void 0};if(e===lt.NONE){if(Math.abs(E.deltaX)<=1.2*Math.abs(m.current)){_(E.deltaX);return}if(!n(-E.deltaX))return;if(f.current+=E.deltaX,h(),Math.abs(f.current)>30)f.current=0,_(0),y.current=Date.now(),o();else{const T=f.current;d.current=w(()=>{d.current=void 0,T===f.current&&(f.current=0)},i)}}else if(e===lt.SWIPE){let T=c.current-E.deltaX;if(T=Math.min(Math.abs(T),r)*Math.sign(T),c.current=T,a(T),b(),Math.abs(T)>.2*r){_(E.deltaX),l(T,Date.now()-y.current);return}v.current=w(()=>k(T),2*i)}else _(E.deltaX)});x.useEffect(()=>t(Jm,P),[t,P])}const w1=eg("container"),jC=x.createContext(null),ar=or("useController","ControllerContext",jC);function m8({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:c,closeOnPullDown:f,preventDefaultWheelX:d,preventDefaultWheelY:v}=o,[m,g]=x.useState(),y=Ar(),w=ZL(),[p,h]=x.useState(lt.NONE),b=x.useRef(0),C=x.useRef(0),k=x.useRef(1),{registerSensors:P,subscribeSensors:E}=u8(),{subscribe:_,publish:T}=Lu(),I=vl(),M=vl(),D=vl(),{containerRef:O,setContainerRef:R,containerRect:L}=EC(),z=nh(p8({preventDefaultWheelX:d,preventDefaultWheelY:v}),R),A=x.useRef(null),j=nh(A,void 0),{getOwnerDocument:$}=Du(),F=lg(),B=X=>(F?-1:1)*(typeof X=="number"?X:1),N=me(()=>{var X;return(X=O.current)===null||X===void 0?void 0:X.focus()}),V=me(()=>t),H=me(()=>y),G=x.useCallback(X=>T(Ur,X),[T]),W=x.useCallback(X=>T(Wr,X),[T]),q=x.useCallback(()=>T(fo),[T]),oe=X=>!(r.finite&&(B(X)>0&&y.currentIndex===0||B(X)<0&&y.currentIndex===y.slides.length-1)),he=X=>{var Se;b.current=X,(Se=O.current)===null||Se===void 0||Se.style.setProperty(kt("swipe_offset"),`${Math.round(X)}px`)},ie=X=>{var Se,ft;C.current=X,k.current=(()=>{const To=(()=>f&&X>0?X:c&&X<0?-X:0)();return Math.min(Math.max(rg(1-To/60*(1-.5),2),.5),1)})(),(Se=O.current)===null||Se===void 0||Se.style.setProperty(kt("pull_offset"),`${Math.round(X)}px`),(ft=O.current)===null||ft===void 0||ft.style.setProperty(kt("pull_opacity"),`${k.current}`)},{prepareAnimation:De}=x1(A,(X,Se,ft)=>{if(A.current&&L)return{keyframes:[{transform:`translate(0, ${X.rect.y-Se.y+ft.y}px)`,opacity:X.opacity},{transform:"translate(0, 0)",opacity:1}],duration:X.duration,easing:i.easing.fade}}),We=(X,Se)=>{if(c||f){ie(X);let ft=0;A.current&&(ft=i.fade*(Se?2:1),De({rect:A.current.getBoundingClientRect(),opacity:k.current,duration:ft})),D(()=>{ie(0),h(lt.NONE)},ft),h(lt.ANIMATION),Se||q()}},{prepareAnimation:He,isAnimationPlaying:gi}=x1(A,(X,Se,ft)=>{var xn;if(A.current&&L&&(!((xn=y.animation)===null||xn===void 0)&&xn.duration)){const Gt=hc(r.spacing),To=(Gt.percent?Gt.percent*L.width/100:Gt.pixel)||0;return{keyframes:[{transform:`translate(${B(y.globalIndex-X.index)*(L.width+To)+X.rect.x-Se.x+ft.x}px, 0)`},{transform:"translate(0, 0)"}],duration:y.animation.duration,easing:y.animation.easing}}}),St=me(X=>{var Se,ft;const xn=X.offset||0,Gt=xn?i.swipe:(Se=i.navigation)!==null&&Se!==void 0?Se:i.swipe,To=!xn&&!gi()?i.easing.navigation:i.easing.swipe;let{direction:cs}=X;const us=(ft=X.count)!==null&&ft!==void 0?ft:1;let Yu=lt.ANIMATION,yn=Gt*us;if(!cs){const Oo=L==null?void 0:L.width,kg=X.duration||0,Ku=Oo?Gt/Oo*Math.abs(xn):Gt;us!==0?(kg<Ku?yn=yn/Ku*Math.max(kg,Ku/5):Oo&&(yn=Gt/Oo*(Oo-Math.abs(xn))),cs=B(xn)>0?Ur:Wr):yn=Gt/2}let Xu=0;cs===Ur?oe(B(1))?Xu=-us:(Yu=lt.NONE,yn=Gt):cs===Wr&&(oe(B(-1))?Xu=us:(Yu=lt.NONE,yn=Gt)),yn=Math.round(yn),M(()=>{he(0),h(lt.NONE)},yn),A.current&&He({rect:A.current.getBoundingClientRect(),index:y.globalIndex}),h(Yu),T(g1,{type:"swipe",increment:Xu,duration:yn,easing:To})});x.useEffect(()=>{var X,Se;!((X=y.animation)===null||X===void 0)&&X.increment&&(!((Se=y.animation)===null||Se===void 0)&&Se.duration)&&I(()=>w({type:"swipe",increment:0}),y.animation.duration)},[y.animation,w,I]);const Po=[E,oe,(L==null?void 0:L.width)||0,i.swipe,()=>h(lt.SWIPE),X=>he(X),(X,Se)=>St({offset:X,duration:Se,count:1}),X=>St({offset:X,count:0})],ls=[()=>{f&&h(lt.PULL)},X=>ie(X),X=>We(X),X=>We(X,!0)];f8(o,...Po,c,f,...ls,q),h8(p,...Po);const jo=me(()=>{o.focus&&$().querySelector(`.${se(Xm)} .${se(w1())}`)&&N()});x.useEffect(jo,[jo]);const Cg=me(()=>{var X;(X=a.view)===null||X===void 0||X.call(a,{index:y.currentIndex})});x.useEffect(Cg,[y.globalIndex,Cg]),x.useEffect(()=>tg(_(Ur,X=>St({direction:Ur,...X})),_(Wr,X=>St({direction:Wr,...X})),_(g1,X=>w(X))),[_,St,w]);const Ak=x.useMemo(()=>({prev:G,next:W,close:q,focus:N,slideRect:L?FL(L,r.padding):{width:0,height:0},containerRect:L||{width:0,height:0},subscribeSensors:E,containerRef:O,setCarouselRef:j,toolbarWidth:m,setToolbarWidth:g}),[G,W,q,N,E,L,O,j,m,g,r.padding]);return x.useImperativeHandle(o.ref,()=>({prev:G,next:W,close:q,focus:N,getLightboxProps:V,getLightboxState:H}),[G,W,q,N,V,H]),x.createElement("div",{ref:z,className:$n(se(w1()),se(Km)),style:{...p===lt.SWIPE?{[kt("swipe_offset")]:`${Math.round(b.current)}px`}:null,...p===lt.PULL?{[kt("pull_offset")]:`${Math.round(C.current)}px`,[kt("pull_opacity")]:`${k.current}`}:null,...o.touchAction!=="none"?{[kt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...P},L&&x.createElement(jC.Provider,{value:Ak},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const g8=Lr(rC,m8);function Rr(e){return ss(nC,e)}function S1(e){return ss(Qm,e)}function v8({slide:e,offset:t}){const n=x.useRef(null),{currentIndex:r,slides:i}=Ar(),{slideRect:o,focus:a}=ar(),{render:l,carousel:{imageFit:s,imageProps:c},on:{click:f},styles:{slide:d},labels:v}=en(),{getOwnerDocument:m}=Du(),g=t!==0;x.useEffect(()=>{var w;g&&(!((w=n.current)===null||w===void 0)&&w.contains(m().activeElement))&&a()},[g,a,m]);const y=()=>{var w,p,h,b;let C=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!C&&Eo(e)&&(C=x.createElement(mc,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:c,onClick:g?void 0:()=>f==null?void 0:f({index:r})})),C?x.createElement(x.Fragment,null,(p=l.slideHeader)===null||p===void 0?void 0:p.call(l,{slide:e}),((h=l.slideContainer)!==null&&h!==void 0?h:({children:k})=>k)({slide:e,children:C}),(b=l.slideFooter)===null||b===void 0?void 0:b.call(l,{slide:e})):null};return x.createElement("div",{ref:n,className:$n(se(S1()),!g&&se(S1("current")),se(Km)),...HL(g),style:d,role:"group","aria-roledescription":po(v,"Slide"),"aria-label":zL(v,i,r+t)},y())}function x8(){const e=en().styles.slide;return x.createElement("div",{className:se(Qm),style:e})}function y8({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Ar(),{setCarouselRef:o}=ar(),{autoPlaying:a,focusWithin:l}=yC(),s=hc(e.spacing),c=hc(e.padding),f=UL(e,n,1),d=[];if(mC(n))for(let v=r-f;v<=r+f;v+=1){const m=gC(n,v),g=i-r+v,y=e.finite&&(v<0||v>n.length-1);d.push(y?{key:g}:{key:[`${g}`,BL(m)].filter(Boolean).join("|"),offset:v-r,slide:m})}return x.createElement("div",{ref:o,className:$n(se(Rr()),d.length>0&&se(Rr("with_slides"))),style:{[`${kt(Rr("slides_count"))}`]:d.length,[`${kt(Rr("spacing_px"))}`]:s.pixel||0,[`${kt(Rr("spacing_percent"))}`]:s.percent||0,[`${kt(Rr("padding_px"))}`]:c.pixel||0,[`${kt(Rr("padding_percent"))}`]:c.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":po(t,"Carousel"),"aria-label":po(t,"Photo gallery")},d.map(({key:v,slide:m,offset:g})=>m?x.createElement(v8,{key:v,slide:m,offset:g}):x.createElement(x8,{key:v})))}const b8=Lr(nC,y8);function TC(){const{carousel:e}=en(),{slides:t,currentIndex:n}=Ar(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function w8(e){var t;const n=lg(),{publish:r}=Lu(),{animation:i}=en(),{prevDisabled:o,nextDisabled:a}=TC(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=b1(()=>r(Ur),l),c=b1(()=>r(Wr),l),f=me(d=>{switch(d.key){case DL:r(fo);break;case LL:(n?a:o)||(n?c:s)();break;case AL:(n?o:a)||(n?s:c)();break}});x.useEffect(()=>e(Zm,f),[e,f])}function C1({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return x.createElement(ag,{label:e,icon:t,renderIcon:n,className:se(`navigation_${r}`),disabled:o,onClick:i,style:a,...c8(ar().focus,o)})}function S8({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=ar(),{prevDisabled:s,nextDisabled:c}=TC();return w8(l),x.createElement(x.Fragment,null,e?e():x.createElement(C1,{label:"Previous",action:Ur,icon:i8,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():x.createElement(C1,{label:"Next",action:Wr,icon:o8,renderIcon:r,style:i.navigationNext,disabled:c,onClick:a}))}const C8=Lr(_L,S8),k1=se($L),k8=se(oC);function _8(e){return"style"in e}function _1(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(Mu(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function E8({noScroll:{disabled:e},children:t}){const n=lg(),{getOwnerDocument:r,getOwnerWindow:i}=Du();return x.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),c=Math.round(a.innerWidth-s.clientWidth);if(c>0){o.push(_1(l,c,n));const f=l.getElementsByTagName("*");for(let d=0;d<f.length;d+=1){const v=f[d];_8(v)&&a.getComputedStyle(v).getPropertyValue("position")==="fixed"&&!v.classList.contains(k8)&&o.push(_1(v,c,n))}}return l.classList.add(k1),()=>{l.classList.remove(k1),o.forEach(f=>f())}},[n,e,r,i]),x.createElement(x.Fragment,null,t)}const P8=Lr(EL,E8);function E1(e){return ss(Xm,e)}function P1(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function j8({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,c]=x.useState(!1),[f,d]=x.useState(!1),v=x.useRef([]),m=x.useRef(null),{setTimeout:g}=Au(),{subscribe:y}=Lu(),p=sg()?0:t.fade;x.useEffect(()=>(c(!0),()=>{c(!1),d(!1)}),[]);const h=me(()=>{v.current.forEach(P=>P()),v.current=[]}),b=me(()=>{var P;d(!1),h(),(P=i.exiting)===null||P===void 0||P.call(i),g(()=>{var E;(E=i.exited)===null||E===void 0||E.call(i),a()},p)});x.useEffect(()=>y(fo,b),[y,b]);const C=me(P=>{var E,_,T;GL(P),d(!0),(E=i.entering)===null||E===void 0||E.call(i);const I=(T=(_=P.parentNode)===null||_===void 0?void 0:_.children)!==null&&T!==void 0?T:[];for(let M=0;M<I.length;M+=1){const D=I[M];["TEMPLATE","SCRIPT","STYLE"].indexOf(D.tagName)===-1&&D!==P&&(v.current.push(P1(D,"inert","")),v.current.push(P1(D,"aria-hidden","true")))}v.current.push(()=>{var M,D;(D=(M=m.current)===null||M===void 0?void 0:M.focus)===null||D===void 0||D.call(M)}),g(()=>{var M;(M=i.entered)===null||M===void 0||M.call(i)},p)}),k=x.useCallback(P=>{P?C(P):h()},[C,h]);return s?Bc.createPortal(x.createElement(d8,{ref:k,className:$n(r,se(E1()),se(oC),f&&se(E1("open"))),"aria-modal":!0,role:"dialog","aria-label":po(l,"Lightbox"),style:{...t.fade!==th.animation.fade?{[kt("fade_animation_duration")]:`${p}ms`}:null,...t.easing.fade!==th.animation.easing.fade?{[kt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:P=>{m.current||(m.current=P.relatedTarget)}},e),o.root||document.body):null}const T8=Lr(Xm,j8);function O8({children:e}){return x.createElement(x.Fragment,null,e)}const $8=Lr(PL,O8);function I8(e){return ss(iC,e)}function M8({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=ar(),{setContainerRef:a,containerRect:l}=EC();In(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():x.createElement(ag,{key:fo,label:"Close",icon:r8,renderIcon:n,onClick:i});return x.createElement("div",{ref:a,style:r.toolbar,className:se(I8())},e==null?void 0:e.map(c=>c===fo?s():c))}const D8=Lr(iC,M8);function OC(e,t){var n;return x.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>OC(r,t)))}function L8(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function A8({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:c,...f}){const{animation:d,carousel:v,render:m,toolbar:g,controller:y,noScroll:w,on:p,slides:h,index:b,plugins:C,...k}=th,{config:P,augmentation:E}=qL([Ge(T8,[Ge(P8,[Ge(g8,[Ge(b8),Ge(D8),Ge(C8)])])])],l||C),_=E({animation:L8(d,t),carousel:{...v,...e},render:{...m,...n},toolbar:{...g,...r},controller:{...y,...i},noScroll:{...w,...o},on:{...p,...a},...k,...f});return _.open?x.createElement(QL,{..._},x.createElement(e8,{slides:s||h,index:Mu(c||b)},x.createElement(t8,null,x.createElement(KL,null,x.createElement(YL,null,OC(Ge($8,P),_)))))):null}const R8={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function z8(e){return Math.min(Math.max(e,Number.EPSILON),1)}function $C(e){const{minZoom:t,...n}={...R8,...e};return{minZoom:z8(t),...n}}function F8(e,t,n,r){const i=x.useRef(void 0),o=x.useRef(void 0),{zoom:a}=en().animation,l=sg(),s=me(()=>{var c,f,d;if((c=i.current)===null||c===void 0||c.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(f=r.current).animate)===null||d===void 0?void 0:d.call(f,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(v){console.error(v)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return In(s,[e,t,n,s]),x.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function N8(e,t){const{on:n}=en(),r=me(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});x.useEffect(r,[e,r])}function Ru(){const{zoom:e}=en();return $C(e)}function B8(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Ar(),{imageFit:l}=en().carousel,{maxZoomPixelRatio:s}=Ru();if(e&&a){const f={...a,...t};if(Eo(f)){const d=ig(f,l),v=Math.max(...(((n=f.srcSet)===null||n===void 0?void 0:n.map(g=>g.width))||[]).concat(f.width?[f.width]:[])),m=Math.max(...(((r=f.srcSet)===null||r===void 0?void 0:r.map(g=>g.height))||[]).concat(f.height?[f.height]:[]));v>0&&m>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(v,e.width/e.height*m)),height:Math.round(Math.min(m,e.height/e.width*v))}:{width:v,height:m},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,v),height:Math.min(e.height,o.height,m)}:{width:Math.round(Math.min(e.width,e.height/m*v,v)),height:Math.round(Math.min(e.height,e.width/v*m,m))})}}const c=i.width?Math.max(rg(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:c}}function j1(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function T1(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function V8(e,t,n,r,i,o,a,l,s){const c=x.useRef([]),f=x.useRef(0),d=x.useRef(void 0),{globalIndex:v}=Ar(),{getOwnerWindow:m}=Du(),{containerRef:g,subscribeSensors:y}=ar(),{keyboardMoveDistance:w,zoomInMultiplier:p,wheelZoomDistanceFactor:h,scrollToZoom:b,doubleTapDelay:C,doubleClickDelay:k,doubleClickMaxStops:P,pinchZoomDistanceFactor:E,pinchZoomV4:_}=Ru(),T=x.useCallback(j=>{if(g.current){const{pageX:$,pageY:F}=j,{scrollX:B,scrollY:N}=m(),{left:V,top:H,width:G,height:W}=g.current.getBoundingClientRect();return[$-V-B-G/2,F-H-N-W/2]}return[]},[g,m]),I=me(j=>{const{key:$,metaKey:F,ctrlKey:B}=j,N=F||B,V=()=>{j.preventDefault(),j.stopPropagation()};if(e>1){const H=(G,W)=>{V(),l(G,W)};$==="ArrowDown"?H(0,w):$==="ArrowUp"?H(0,-w):$==="ArrowLeft"?H(-w,0):$==="ArrowRight"&&H(w,0)}$==="+"||N&&$==="="?(V(),i()):$==="-"||N&&$==="_"?(V(),o()):N&&$==="0"&&(V(),a(1))}),M=me(j=>{if((j.ctrlKey||b)&&Math.abs(j.deltaY)>Math.abs(j.deltaX)){j.stopPropagation(),a(T1(e,-j.deltaY,h),!0,...T(j));return}e>1&&(j.stopPropagation(),b||l(j.deltaX,j.deltaY))}),D=x.useCallback(j=>{const $=c.current;$.splice(0,$.length,...$.filter(F=>F.pointerId!==j.pointerId))},[]),O=x.useCallback(j=>{D(j),j.persist(),c.current.push(j)},[D]),R=me(j=>{var $;const F=c.current;if(j.pointerType==="mouse"&&j.buttons>1||!(!(($=s==null?void 0:s.current)===null||$===void 0)&&$.contains(j.target)))return;e>1&&j.stopPropagation();const{timeStamp:B}=j;if(F.length===0&&B-f.current<(j.pointerType==="touch"?C:k)){f.current=0;const N=e>=1?e!==n?e*Math.max(n**(1/P),p):1:e!==t?e/Math.max(t**(-1/P),p):1;a(N,!1,...T(j))}else f.current=B;if(O(j),F.length===2){const N=j1(F[0],F[1]);d.current={previousDistance:N,initialDistance:Math.max(N,1),initialZoom:e}}}),L=me(j=>{const $=c.current,F=$.find(B=>B.pointerId===j.pointerId);if($.length===2&&d.current){j.stopPropagation(),O(j);const B=j1($[0],$[1]),N=_?d.current.initialZoom/d.current.initialDistance*B:T1(e,B-d.current.previousDistance,E);a(N,!0,...$.map(V=>T(V)).reduce((V,H)=>H.map((G,W)=>V[W]+G/2))),d.current.previousDistance=B;return}e>1&&(j.stopPropagation(),F&&($.length===1&&l((F.clientX-j.clientX)/e,(F.clientY-j.clientY)/e),O(j)))}),z=x.useCallback(j=>{const $=c.current;$.length===2&&$.find(F=>F.pointerId===j.pointerId)&&(d.current=void 0),D(j)},[D]),A=x.useCallback(()=>{const j=c.current;j.splice(0,j.length),f.current=0,d.current=void 0},[]);PC(y,R,L,z,r),x.useEffect(A,[v,A]),x.useEffect(()=>r?()=>{}:tg(A,y(Zm,I),y(Jm,M)),[r,y,A,I,M])}function U8(e,t,n){const[r,i]=x.useState(1),[o,a]=x.useState(0),[l,s]=x.useState(0),c=F8(r,o,l,n),{currentSlide:f,globalIndex:d}=Ar(),{containerRect:v,slideRect:m}=ar(),{minZoom:g,zoomInMultiplier:y}=Ru(),w=f&&Eo(f)?f.src:void 0,p=!w||!(n!=null&&n.current);In(()=>{i(1),a(0),s(0)},[d,w]);const h=x.useCallback((E,_,T)=>{const I=T||r,M=o-(E||0),D=l-(_||0),O=(e.width*I-m.width)/2/I,R=(e.height*I-m.height)/2/I;a(Math.min(Math.abs(M),Math.max(O,0))*Math.sign(M)),s(Math.min(Math.abs(D),Math.max(R,0))*Math.sign(D))},[r,o,l,m,e.width,e.height]),b=x.useCallback((E,_,T,I)=>{const M=rg(E+.01<t?E-.01>g?E:g:t,5);_||c(),h(T?T*(1/r-1/M):0,I?I*(1/r-1/M):0,M),i(M)},[r,g,t,h,c]),C=me(()=>{r>1&&(r>t&&b(t,!0),h())});In(C,[v.width,v.height,C]);const k=x.useCallback(()=>{const E=r*y;b(r<1&&E>1?1:E)},[r,y,b]),P=x.useCallback(()=>{const E=r/y;b(r>1&&E<1?1:E)},[r,y,b]);return{zoom:r,offsetX:o,offsetY:l,disabled:p,changeOffsets:h,changeZoom:b,zoomIn:k,zoomOut:P}}const IC=x.createContext(null),cg=or("useZoom","ZoomControllerContext",IC);function W8({children:e}){const[t,n]=x.useState(),{slideRect:r}=ar(),{ref:i,minZoom:o}=Ru(),{imageRect:a,maxZoom:l}=B8(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:c,offsetY:f,disabled:d,changeZoom:v,changeOffsets:m,zoomIn:g,zoomOut:y}=U8(a,l,t==null?void 0:t.zoomWrapperRef);N8(s,d),V8(s,o,l,d,g,y,v,m,t==null?void 0:t.zoomWrapperRef);const w=x.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:c,offsetY:f,disabled:d,zoomIn:g,zoomOut:y,changeZoom:v}),[s,o,l,c,f,d,g,y,v]);x.useImperativeHandle(i,()=>w,[w]);const p=x.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return x.createElement(IC.Provider,{value:p},e)}const H8=mi("ZoomIn",x.createElement(x.Fragment,null,x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),x.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),G8=mi("ZoomOut",x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),O1=x.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=x.useRef(!1),o=x.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:c,zoomOut:f,disabled:d}=cg(),{render:v}=en(),m=d||(t?a>=s:a<=l);return x.useEffect(()=>{m&&i.current&&o.current&&n(),m||(i.current=!0)},[m,n]),x.createElement(ag,{ref:r,disabled:m,label:t?"Zoom in":"Zoom out",icon:t?H8:G8,renderIcon:t?v.iconZoomIn:v.iconZoomOut,onClick:t?c:f,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function q8(){const e=x.useRef(null),t=x.useRef(null),{focus:n}=ar(),r=x.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=x.useCallback(()=>r(e),[r]),o=x.useCallback(()=>r(t),[r]);return x.createElement(x.Fragment,null,x.createElement(O1,{zoomIn:!0,ref:e,onLoseFocus:o}),x.createElement(O1,{ref:t,onLoseFocus:i}))}function Y8(){const{render:e}=en(),t=cg();return e.buttonZoom?x.createElement(x.Fragment,null,e.buttonZoom(t)):x.createElement(q8,null)}function X8(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function K8({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(pC)}}function Q8(e){var t,n;const[{current:r,preload:i},o]=x.useReducer(K8,{}),{slide:a,rect:l,imageFit:s,render:c,interactive:f}=e,d=a.srcSet.sort((k,P)=>k.width-P.width),v=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,m=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,g=ig(a,s),y=Math.max(...d.map(k=>k.width)),w=Math.min((g?Math.max:Math.min)(l.width,v*(l.height/m)),y),p=NL(),h=me(()=>{var k;const P=(k=d.find(E=>E.width>=w*p))!==null&&k!==void 0?k:d[d.length-1];(!r||d.findIndex(E=>E.src===r)<d.findIndex(E=>E===P))&&o({type:"fetch",source:P.src})});In(h,[l.width,l.height,p,h]);const b=me(k=>o({type:"done",source:k})),C={WebkitTransform:f?"initial":"translateZ(0)"};return g||Object.assign(C,l.width/l.height<v/m?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),x.createElement(x.Fragment,null,i&&i!==r&&x.createElement(mc,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...C},onLoad:()=>b(i),render:{...c,iconLoading:()=>null,iconError:()=>null}}),r&&x.createElement(mc,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:C}))}function Z8({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=x.useState(),l=x.useRef(null),{zoom:s,maxZoom:c,offsetX:f,offsetY:d,setZoomWrapper:v}=cg(),m=s>1,{carousel:g,on:y}=en(),{currentIndex:w}=Ar();In(()=>n===0?(v({zoomWrapperRef:l,imageDimensions:o}),()=>v(void 0)):()=>{},[n,o,v]);let p=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:c});if(!p&&Eo(t)){const h={slide:t,offset:n,rect:r,render:e,imageFit:g.imageFit,imageProps:g.imageProps,onClick:n===0?()=>{var b;return(b=y.click)===null||b===void 0?void 0:b.call(y,{index:w})}:void 0};p=X8(t)?x.createElement(Q8,{...h,slide:t,interactive:m,rect:n===0?{width:r.width*s,height:r.height*s}:r}):x.createElement(mc,{onLoad:b=>a({width:b.naturalWidth,height:b.naturalHeight}),...h})}return p?x.createElement("div",{ref:l,className:$n(se(OL),se(Km),se(aC),m&&se(IL)),style:n===0?{transform:`scale(${s}) translateX(${f}px) translateY(${d}px)`}:void 0},p):null}const J8=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=$C(n);return{zoom:l,toolbar:VL(r,m1,x.createElement(Y8,null)),render:{...i,slide:s=>{var c;return Eo(s.slide)?x.createElement(Z8,{render:i,...s}):(c=i.slide)===null||c===void 0?void 0:c.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Lr(m1,W8))};var MC={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",c="day",f="week",d="month",v="quarter",m="year",g="date",y="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(R){var L=["th","st","nd","rd"],z=R%100;return"["+R+(L[(z-20)%10]||L[z]||L[0])+"]"}},b=function(R,L,z){var A=String(R);return!A||A.length>=L?R:""+Array(L+1-A.length).join(z)+R},C={s:b,z:function(R){var L=-R.utcOffset(),z=Math.abs(L),A=Math.floor(z/60),j=z%60;return(L<=0?"+":"-")+b(A,2,"0")+":"+b(j,2,"0")},m:function R(L,z){if(L.date()<z.date())return-R(z,L);var A=12*(z.year()-L.year())+(z.month()-L.month()),j=L.clone().add(A,d),$=z-j<0,F=L.clone().add(A+($?-1:1),d);return+(-(A+(z-j)/($?j-F:F-j))||0)},a:function(R){return R<0?Math.ceil(R)||0:Math.floor(R)},p:function(R){return{M:d,y:m,w:f,d:c,D:g,h:s,m:l,s:a,ms:o,Q:v}[R]||String(R||"").toLowerCase().replace(/s$/,"")},u:function(R){return R===void 0}},k="en",P={};P[k]=h;var E="$isDayjsObject",_=function(R){return R instanceof D||!(!R||!R[E])},T=function R(L,z,A){var j;if(!L)return k;if(typeof L=="string"){var $=L.toLowerCase();P[$]&&(j=$),z&&(P[$]=z,j=$);var F=L.split("-");if(!j&&F.length>1)return R(F[0])}else{var B=L.name;P[B]=L,j=B}return!A&&j&&(k=j),j||!A&&k},I=function(R,L){if(_(R))return R.clone();var z=typeof L=="object"?L:{};return z.date=R,z.args=arguments,new D(z)},M=C;M.l=T,M.i=_,M.w=function(R,L){return I(R,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var D=function(){function R(z){this.$L=T(z.locale,null,!0),this.parse(z),this.$x=this.$x||z.x||{},this[E]=!0}var L=R.prototype;return L.parse=function(z){this.$d=function(A){var j=A.date,$=A.utc;if(j===null)return new Date(NaN);if(M.u(j))return new Date;if(j instanceof Date)return new Date(j);if(typeof j=="string"&&!/Z$/i.test(j)){var F=j.match(w);if(F){var B=F[2]-1||0,N=(F[7]||"0").substring(0,3);return $?new Date(Date.UTC(F[1],B,F[3]||1,F[4]||0,F[5]||0,F[6]||0,N)):new Date(F[1],B,F[3]||1,F[4]||0,F[5]||0,F[6]||0,N)}}return new Date(j)}(z),this.init()},L.init=function(){var z=this.$d;this.$y=z.getFullYear(),this.$M=z.getMonth(),this.$D=z.getDate(),this.$W=z.getDay(),this.$H=z.getHours(),this.$m=z.getMinutes(),this.$s=z.getSeconds(),this.$ms=z.getMilliseconds()},L.$utils=function(){return M},L.isValid=function(){return this.$d.toString()!==y},L.isSame=function(z,A){var j=I(z);return this.startOf(A)<=j&&j<=this.endOf(A)},L.isAfter=function(z,A){return I(z)<this.startOf(A)},L.isBefore=function(z,A){return this.endOf(A)<I(z)},L.$g=function(z,A,j){return M.u(z)?this[A]:this.set(j,z)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(z,A){var j=this,$=!!M.u(A)||A,F=M.p(z),B=function(he,ie){var De=M.w(j.$u?Date.UTC(j.$y,ie,he):new Date(j.$y,ie,he),j);return $?De:De.endOf(c)},N=function(he,ie){return M.w(j.toDate()[he].apply(j.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(ie)),j)},V=this.$W,H=this.$M,G=this.$D,W="set"+(this.$u?"UTC":"");switch(F){case m:return $?B(1,0):B(31,11);case d:return $?B(1,H):B(0,H+1);case f:var q=this.$locale().weekStart||0,oe=(V<q?V+7:V)-q;return B($?G-oe:G+(6-oe),H);case c:case g:return N(W+"Hours",0);case s:return N(W+"Minutes",1);case l:return N(W+"Seconds",2);case a:return N(W+"Milliseconds",3);default:return this.clone()}},L.endOf=function(z){return this.startOf(z,!1)},L.$set=function(z,A){var j,$=M.p(z),F="set"+(this.$u?"UTC":""),B=(j={},j[c]=F+"Date",j[g]=F+"Date",j[d]=F+"Month",j[m]=F+"FullYear",j[s]=F+"Hours",j[l]=F+"Minutes",j[a]=F+"Seconds",j[o]=F+"Milliseconds",j)[$],N=$===c?this.$D+(A-this.$W):A;if($===d||$===m){var V=this.clone().set(g,1);V.$d[B](N),V.init(),this.$d=V.set(g,Math.min(this.$D,V.daysInMonth())).$d}else B&&this.$d[B](N);return this.init(),this},L.set=function(z,A){return this.clone().$set(z,A)},L.get=function(z){return this[M.p(z)]()},L.add=function(z,A){var j,$=this;z=Number(z);var F=M.p(A),B=function(H){var G=I($);return M.w(G.date(G.date()+Math.round(H*z)),$)};if(F===d)return this.set(d,this.$M+z);if(F===m)return this.set(m,this.$y+z);if(F===c)return B(1);if(F===f)return B(7);var N=(j={},j[l]=r,j[s]=i,j[a]=n,j)[F]||1,V=this.$d.getTime()+z*N;return M.w(V,this)},L.subtract=function(z,A){return this.add(-1*z,A)},L.format=function(z){var A=this,j=this.$locale();if(!this.isValid())return j.invalidDate||y;var $=z||"YYYY-MM-DDTHH:mm:ssZ",F=M.z(this),B=this.$H,N=this.$m,V=this.$M,H=j.weekdays,G=j.months,W=j.meridiem,q=function(ie,De,We,He){return ie&&(ie[De]||ie(A,$))||We[De].slice(0,He)},oe=function(ie){return M.s(B%12||12,ie,"0")},he=W||function(ie,De,We){var He=ie<12?"AM":"PM";return We?He.toLowerCase():He};return $.replace(p,function(ie,De){return De||function(We){switch(We){case"YY":return String(A.$y).slice(-2);case"YYYY":return M.s(A.$y,4,"0");case"M":return V+1;case"MM":return M.s(V+1,2,"0");case"MMM":return q(j.monthsShort,V,G,3);case"MMMM":return q(G,V);case"D":return A.$D;case"DD":return M.s(A.$D,2,"0");case"d":return String(A.$W);case"dd":return q(j.weekdaysMin,A.$W,H,2);case"ddd":return q(j.weekdaysShort,A.$W,H,3);case"dddd":return H[A.$W];case"H":return String(B);case"HH":return M.s(B,2,"0");case"h":return oe(1);case"hh":return oe(2);case"a":return he(B,N,!0);case"A":return he(B,N,!1);case"m":return String(N);case"mm":return M.s(N,2,"0");case"s":return String(A.$s);case"ss":return M.s(A.$s,2,"0");case"SSS":return M.s(A.$ms,3,"0");case"Z":return F}return null}(ie)||F.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(z,A,j){var $,F=this,B=M.p(A),N=I(z),V=(N.utcOffset()-this.utcOffset())*r,H=this-N,G=function(){return M.m(F,N)};switch(B){case m:$=G()/12;break;case d:$=G();break;case v:$=G()/3;break;case f:$=(H-V)/6048e5;break;case c:$=(H-V)/864e5;break;case s:$=H/i;break;case l:$=H/r;break;case a:$=H/n;break;default:$=H}return j?$:M.a($)},L.daysInMonth=function(){return this.endOf(d).$D},L.$locale=function(){return P[this.$L]},L.locale=function(z,A){if(!z)return this.$L;var j=this.clone(),$=T(z,A,!0);return $&&(j.$L=$),j},L.clone=function(){return M.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},R}(),O=D.prototype;return I.prototype=O,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",c],["$M",d],["$y",m],["$D",g]].forEach(function(R){O[R[1]]=function(L){return this.$g(L,R[0],R[1])}}),I.extend=function(R,L){return R.$i||(R(L,D,I),R.$i=!0),I},I.locale=T,I.isDayjs=_,I.unix=function(R){return I(1e3*R)},I.en=P[k],I.Ls=P,I.p={},I})})(MC);var eA=MC.exports;const $1=Ha(eA),tA=S.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;S.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const nA=S.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,rA=S.input`
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
`,iA=S.textarea`
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
`,oA=S.button`
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
`,aA=S.div`
  margin-top: 30px;
`,sA=S.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,lA=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,cA=S.span`
  font-weight: bold;
  color: #333;
`,uA=S.span`
  font-size: 12px;
  color: #999;
`,dA=S.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,fA=S.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,pA=S.div`
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
`,I1=({productId:e,questions:t})=>{const[n,r]=x.useState(""),[i,o]=x.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(K.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return u.jsxs(tA,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(nA,{onSubmit:a,children:[u.jsx(rA,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),u.jsx(iA,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),u.jsx(oA,{children:"Надіслати запитання"})]}),u.jsx(aA,{children:t&&t.length>0?t.map(l=>l.answer?u.jsxs(sA,{children:[u.jsxs(lA,{children:[u.jsx(cA,{children:l.userName||"Гість"}),u.jsx(uA,{children:new Date(l.createdAt).toLocaleDateString()})]}),u.jsx(dA,{children:l.question}),u.jsxs(fA,{children:[u.jsx(pA,{children:"Адміністратор"}),u.jsx("p",{children:l.answer})]})]},l.id):null):u.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},hA=()=>{var j;const{identifier:e}=Kx(),[t,n]=x.useState([]),[r,i]=x.useState(1),[o,a]=x.useState("description"),[l,s]=x.useState(null),[c,f]=x.useState(!1),[d,v]=x.useState(0),[m,g]=x.useState(!0),y=!isNaN(e),w=t.find($=>y?String($.id)===String(e):$.slug===e),p=w?$1().diff($1(w.createdAt),"day")<7:!1,b=($=>{const[F,B]=x.useState(!1);return x.useEffect(()=>{const N=window.matchMedia($),V=()=>B(N.matches);return V(),N.addEventListener("change",V),()=>N.removeEventListener("change",V)},[$]),F})("(min-width: 768px)"),C=Ue($=>$.cart.items),k=w?C.find($=>$.id===w.id):null,P=(k==null?void 0:k.quantity)||0;x.useEffect(()=>{(async()=>{try{g(!0);const F=y?`filters[id][$eq]=${e}`:`filters[slug][$eq]=${e}`,N=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${F}&populate=*`)).json();n(N.data)}catch(F){console.error("Error fetching products:",F)}finally{g(!1)}})()},[e,y]);const E=(w==null?void 0:w.available)??!0,_=(w==null?void 0:w.stock)===0;x.useEffect(()=>{var $,F;w&&w.images&&s((F=($=w.images)==null?void 0:$[0])==null?void 0:F.url)},[w]);const T=((w==null?void 0:w.images)??[]).map($=>({src:$.url})),I=()=>{const $=w.images.findIndex(F=>F.url===l);v($>=0?$:0),f(!0)},M=It(),O=Ue($=>$.favorites.items).some($=>$.id===(w==null?void 0:w.id)),R=async()=>{if(!_){if(P>=w.stock){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(P+r>w.stock){K.warning(`Доступно лише ${w.stock} шт.`);return}await wo(w,r,M,K)}},L=($,F)=>{F.stopPropagation(),pi($,O,M,K)},z=(w==null?void 0:w.new_price)&&(w==null?void 0:w.new_price)<w.price,A=z?Math.round((w.price-w.new_price)/w.price*100):0;return m?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(hi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):w?u.jsxs(s1,{children:[" ",u.jsx(Ln,{autoClose:1500}),u.jsxs(eL,{children:[u.jsx(Pe,{to:"/",children:"Головна"})," / ",u.jsx(Pe,{to:"/catalog",children:"Каталог"})," /"," ",w.name]}),u.jsxs(tL,{children:[u.jsxs(nL,{children:[u.jsxs("div",{style:{position:"relative"},children:[u.jsx(iL,{src:l||er,alt:w.name,onClick:_?void 0:I,style:{filter:_?"grayscale(100%)":"none",opacity:_?.55:1,cursor:_?"default":"pointer"}}),_&&u.jsx(rL,{children:"ПРОДАНО"})]}),u.jsx(oL,{children:(w.images??[]).map($=>{const F=$.url;return u.jsx(aL,{src:F,onClick:()=>!_&&s(F),style:{cursor:_?"default":"pointer",opacity:l===F?1:.4,filter:_?"grayscale(100%)":"none"}},$.id)})})]}),u.jsx(A8,{open:c,close:()=>f(!1),index:d,slides:T,controller:{closeOnBackdropClick:!0},on:{view:({index:$})=>{var F,B;v($),(B=(F=w==null?void 0:w.images)==null?void 0:F[$])!=null&&B.url&&s(w.images[$].url)}},plugins:[J8],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),u.jsxs(sL,{children:[u.jsx(lL,{children:w.name}),u.jsxs(cL,{children:["Артикул: ",w.sku??""]}),u.jsx(uL,{children:p&&u.jsx(fL,{children:"● Новий товар"})}),!E&&u.jsx(dL,{children:"Бронь"}),u.jsxs(pL,{children:[u.jsx(hL,{children:z?u.jsxs(u.Fragment,{children:[u.jsxs(l1,{$discount:!0,children:[w.new_price.toLocaleString()," грн"]}),u.jsxs(mL,{children:[w.price.toLocaleString()," грн"]}),u.jsxs(gL,{children:["-",A,"%"]})]}):u.jsxs(l1,{children:[w.price.toLocaleString()," грн"]})}),u.jsxs(vL,{children:[u.jsxs(xL,{children:[u.jsx("button",{onClick:()=>i(Math.max(1,r-1)),disabled:_,children:"-"}),u.jsx("span",{children:r}),u.jsxs(kL,{$active:r>=w.stock,children:[u.jsx("button",{onClick:()=>i(Math.min(w.stock,r+1)),disabled:_||r>=w.stock,children:"+"}),u.jsxs(tC,{children:["Максимум: ",w.stock]})]})]}),u.jsxs(yL,{onClick:R,disabled:!E||_,children:[" ",u.jsx(bo,{size:25}),u.jsx("span",{children:"В КОШИК"})]}),u.jsxs(SL,{$active:O,onClick:$=>{_||L(w,$)},disabled:_,children:[u.jsxs(CL,{$active:O,children:[" ",u.jsx("use",{href:`${hn}#icon-heart`})]}),u.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!b&&u.jsxs(d1,{children:[u.jsxs(f1,{children:[u.jsx(Wo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(Wo,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),u.jsx(Wo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs(p1,{children:[o==="description"&&u.jsx(h1,{children:w.description}),o==="attributes"&&u.jsx(c1,{children:(j=w.attributes)!=null&&j.length?w.attributes.map($=>u.jsxs(u1,{children:[u.jsx("span",{children:$.label}),u.jsx("b",{children:$.value})]},$.id)):u.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&u.jsx(I1,{productId:w.documentId,questions:w.questions})]})]}),b&&u.jsxs(wL,{children:[u.jsxs(d1,{children:[u.jsxs(f1,{children:[u.jsx(Wo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(Wo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs(p1,{children:[o==="description"&&u.jsx(h1,{children:w.description}),o==="FAQ"&&u.jsx(I1,{productId:w.documentId,questions:w.questions})]})]}),u.jsxs(c1,{children:[u.jsx(bL,{children:" Характеристики"}),(()=>{const $=[...w.attributes||[],...w.features||[]];return $.length?$.map((F,B)=>u.jsxs(u1,{children:[u.jsx("span",{children:F.label}),u.jsx("b",{children:F.value})]},`${F.id}-${B}`)):u.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):u.jsx(s1,{children:"Товар не знайдено"})};var ug="persist:",DC="persist/FLUSH",dg="persist/REHYDRATE",LC="persist/PAUSE",AC="persist/PERSIST",RC="persist/PURGE",zC="persist/REGISTER",mA=-1;function xl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xl=function(n){return typeof n}:xl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xl(e)}function M1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gA(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?M1(n,!0).forEach(function(r){vA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vA(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xA(e,t,n,r){r.debug;var i=gA({},n);return e&&xl(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function yA(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:ug).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(k){return k}:typeof e.serialize=="function"?l=e.serialize:l=bA;var s=e.writeFailHandler||null,c={},f={},d=[],v=null,m=null,g=function(k){Object.keys(k).forEach(function(P){p(P)&&c[P]!==k[P]&&d.indexOf(P)===-1&&d.push(P)}),Object.keys(c).forEach(function(P){k[P]===void 0&&p(P)&&d.indexOf(P)===-1&&c[P]!==void 0&&d.push(P)}),v===null&&(v=setInterval(y,i)),c=k};function y(){if(d.length===0){v&&clearInterval(v),v=null;return}var C=d.shift(),k=r.reduce(function(P,E){return E.in(P,C,c)},c[C]);if(k!==void 0)try{f[C]=l(k)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete f[C];d.length===0&&w()}function w(){Object.keys(f).forEach(function(C){c[C]===void 0&&delete f[C]}),m=a.setItem(o,l(f)).catch(h)}function p(C){return!(n&&n.indexOf(C)===-1&&C!=="_persist"||t&&t.indexOf(C)!==-1)}function h(C){s&&s(C)}var b=function(){for(;d.length!==0;)y();return m||Promise.resolve()};return{update:g,flush:b}}function bA(e){return JSON.stringify(e)}function wA(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:ug).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=SA,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(c,f){return f.out(c,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function SA(e){return JSON.parse(e)}function CA(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:ug).concat(e.key);return t.removeItem(n,kA)}function kA(e){}function D1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function An(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?D1(n,!0).forEach(function(r){_A(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function EA(e,t){if(e==null)return{};var n=PA(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function PA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var jA=5e3;function FC(e,t){var n=e.version!==void 0?e.version:mA;e.debug;var r=e.stateReconciler===void 0?xA:e.stateReconciler,i=e.getStoredState||wA,o=e.timeout!==void 0?e.timeout:jA,a=null,l=!1,s=!0,c=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(f,d){var v=f||{},m=v._persist,g=EA(v,["_persist"]),y=g;if(d.type===AC){var w=!1,p=function(_,T){w||(d.rehydrate(e.key,_,T),w=!0)};if(o&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=yA(e)),m)return An({},t(y,d),{_persist:m});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(E){var _=e.migrate||function(T,I){return Promise.resolve(T)};_(E,n).then(function(T){p(T)},function(T){p(void 0,T)})},function(E){p(void 0,E)}),An({},t(y,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===RC)return l=!0,d.result(CA(e)),An({},t(y,d),{_persist:m});if(d.type===DC)return d.result(a&&a.flush()),An({},t(y,d),{_persist:m});if(d.type===LC)s=!0;else if(d.type===dg){if(l)return An({},y,{_persist:An({},m,{rehydrated:!0})});if(d.key===e.key){var h=t(y,d),b=d.payload,C=r!==!1&&b!==void 0?r(b,f,h,e):h,k=An({},C,{_persist:An({},m,{rehydrated:!0})});return c(k)}}}if(!m)return t(f,d);var P=t(y,d);return P===y?f:c(An({},P,{_persist:m}))}}function L1(e){return $A(e)||OA(e)||TA()}function TA(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function OA(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function $A(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function A1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A1(n,!0).forEach(function(r){IA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function IA(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var NC={registry:[],bootstrapped:!1},MA=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:NC,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case zC:return rh({},t,{registry:[].concat(L1(t.registry),[n.key])});case dg:var r=t.registry.indexOf(n.key),i=L1(t.registry);return i.splice(r,1),rh({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function DA(e,t,n){var r=n||!1,i=Em(MA,NC,t&&t.enhancer?t.enhancer:void 0),o=function(c){i.dispatch({type:zC,key:c})},a=function(c,f,d){var v={type:dg,payload:f,err:d,key:c};e.dispatch(v),i.dispatch(v),r&&l.getState().bootstrapped&&(r(),r=!1)},l=rh({},i,{purge:function(){var c=[];return e.dispatch({type:RC,result:function(d){c.push(d)}}),Promise.all(c)},flush:function(){var c=[];return e.dispatch({type:DC,result:function(d){c.push(d)}}),Promise.all(c)},pause:function(){e.dispatch({type:LC})},persist:function(){e.dispatch({type:AC,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var fg={},pg={};pg.__esModule=!0;pg.default=RA;function yl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?yl=function(n){return typeof n}:yl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yl(e)}function sf(){}var LA={getItem:sf,setItem:sf,removeItem:sf};function AA(e){if((typeof self>"u"?"undefined":yl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function RA(e){var t="".concat(e,"Storage");return AA(t)?self[t]:LA}fg.__esModule=!0;fg.default=NA;var zA=FA(pg);function FA(e){return e&&e.__esModule?e:{default:e}}function NA(e){var t=(0,zA.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var hg=void 0,BA=VA(fg);function VA(e){return e&&e.__esModule?e:{default:e}}var UA=(0,BA.default)("local");hg=UA;const WA={key:"cart",storage:hg},HA={key:"favorites",storage:hg},GA=FC(WA,n5),qA=FC(HA,Z$),BC=F$({reducer:{cart:GA,favorites:qA},middleware:e=>e({serializableCheck:!1})}),zu=DA(BC),YA=S.div`
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

  
`,XA=S.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,KA=S.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,QA=S.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width:  895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,ZA=S.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,JA=S.div`
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
  
`,VC=S.div`
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
 `,eR=S.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,tR=S.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,nR=S.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,rR=S.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`;S.div`
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
`;const Fu=S.div`
  text-align: center;
  width: 100px;
 
`,Nu=S.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Bu=S.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Vu=S.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Uu=S.span`
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
`,iR=S.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,oR=S.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';


&:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
`,aR=S.div`

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
`,sR=S.div`
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
`,lR=S(Pe)`
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
`,cR=S.button`
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
  
`;S.svg`
  width: 25px;
  height: 25px;
  fill: ${({$active:e})=>e?"var(--red-color)":"var(--black-color)"};
`;const uR=S.div`
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
`,dR=S.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,fR=S.div`
  background-color: #fdfaf7;
`,pR=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;S.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
`;const hR=S.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,mR=S.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,gR=S.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,vR=S.button`
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
`,xR=()=>u.jsx(fR,{children:u.jsxs(uR,{children:[u.jsx(dR,{children:"Головна / Кошик"}),u.jsxs(pR,{children:[u.jsx(hR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),u.jsx(mR,{children:"Ваш кошик порожній"}),u.jsx(gR,{children:"Ви ще не додали жодного товару в кошик"}),u.jsx(vR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),yR=S.div`
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
`,bR=({item:e,cartItem:t,user:n,token:r,disabled:i,isSoldOut:o})=>{const a=It(),l=async()=>{if(i)return;const c=e.quantity+1;if(!n){a(wv({id:e.id,stock:e.stock}));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(wv({id:e.id,stock:e.stock}))}catch(f){console.error("Помилка оновлення кількості:",f)}},s=async()=>{if(i)return;const c=e.quantity-1;if(!n){a(Sv(e.id));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(Sv(e.id))}catch(f){console.error("Помилка оновлення кількості:",f)}};return u.jsxs(yR,{children:[u.jsx("button",{onClick:s,disabled:o||e.quantity<=1,children:"-"}),u.jsx("span",{children:e.quantity}),u.jsx("button",{onClick:l,disabled:o||e.quantity>=e.stock,children:"+"})]})},wR=async(e,t,n)=>{try{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!r.ok)throw new Error("Не вдалося отримати товари кошика");const i=await r.json();await Promise.all(i.data.map(async o=>{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}})).ok)throw new Error("Не вдалося видалити товар з кошика")})),t(nr())}catch(r){throw console.error("clearCartFromBackend error:",r),r}},SR=S.div`
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
`,CR=S.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,kR=S.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,_R=S.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,ER=S.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,PR=S.div`
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
`,UC=S.div`
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
`;S.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const jR=S.div`
  position: relative;
`,TR=S.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,OR=S.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,$R=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;S.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  width: 100px;
  text-align: center;
`;const IR=S.div`
  display: flex;
  gap: 16px;
`,R1=S.button`
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
`,MR=S.div`
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
`,DR=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,LR=S.button`
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
`;S.button`
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
`;const AR=async(e,t,n,r)=>{try{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${t}&filters[product][id][$eq]=${e.id}`,{headers:{Authorization:`Bearer ${r}`}});if(!i.ok)throw new Error("Не вдалося знайти товар у кошику");const a=(await i.json()).data[0];if(!a)throw new Error("Товар у кошику не знайдено");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${a.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити товар");n(mS(e))}catch(i){throw console.error("deleteCartItemFromBackend error:",i),i}},RR=()=>{const e=It(),t=Ke(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),[i,o]=x.useState([]),a=Ue(k=>k.cart.items),[l,s]=x.useState([]),[c,f]=x.useState([]),[d,v]=x.useState(!0),m=a.filter(k=>k.available!==!1&&k.stock>0).reduce((k,P)=>k+P.quantity,0),g=a.filter(k=>k.available!==!1&&k.stock>0).reduce((k,P)=>k+(P.new_price??P.price)*(P.quantity||1),0),y=Ue(k=>k.favorites.items),w=l.length===0,p=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e(rs()),e(nr()),s([]),f([]),await zu.purge(),t("/",{replace:!0})};x.useEffect(()=>{(async()=>{if(!n||!r){s(a),v(!1);return}try{const P=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(P.status===401){p();return}if(!P.ok)throw new Error("Не вдалося отримати кошик");const E=await P.json();f(E.data);const _=E.data.map(T=>T.product?{...T.product,quantity:T.quantity}:null).filter(Boolean);s(_),e(hS(_))}catch(P){console.error(P),K.error("Не вдалося завантажити кошик")}finally{v(!1)}})()},[]),x.useEffect(()=>{s(a)},[a]);const h=(k,P)=>{P.stopPropagation();const E=y.some(_=>_.id===(k==null?void 0:k.id));pi(k,E,e,K)},b=async k=>{o(P=>[...P,k.id]);try{if(!r){setTimeout(()=>{e(mS(k)),o(P=>P.filter(E=>E!==k.id))},300);return}await AR(k,r.id,e,n),setTimeout(()=>{o(P=>P.filter(E=>E!==k.id))},300)}catch{o(E=>E.filter(_=>_!==k.id)),K.error("Не вдалося видалити товар з кошика")}},C=async()=>{if(!r){e(nr()),s([]);return}try{await wR(r.id,e,n),s([])}catch{K.error("Не вдалося очистити кошик")}};return d?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(hi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:w?u.jsx(xR,{}):u.jsxs(YA,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(XA,{children:[" ",u.jsx(Pe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",u.jsx(Pe,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),u.jsx(KA,{children:"Кошик"}),u.jsxs(QA,{children:[u.jsx(ZA,{children:l.map((k,P)=>{var R,L;const E=c.find(z=>{var A;return((A=z.product)==null?void 0:A.documentId)===k.documentId}),_=y.some(z=>z.id===k.id),T=k.new_price&&k.new_price<k.price,I=(k==null?void 0:k.available)??!0,M=(k==null?void 0:k.stock)===0,D=T?k.new_price:k.price,O=T?Math.round((k.price-k.new_price)/k.price*100):0;return u.jsxs(JA,{className:`
    ${i.includes(k.id)?"removing":""}
    ${I?"":"unavailable"}
    ${M?"sold-out":""}
  `,children:[u.jsxs(Hw,{onClick:()=>t(`/product/${k.slug??k.id}`),children:[!I&&u.jsx(UC,{children:"Бронь"})," ",M&&u.jsx(VC,{children:"Продано"}),u.jsx(eR,{src:((L=(R=k.images)==null?void 0:R[0])==null?void 0:L.url)||"/nofoto.png",alt:k.name,style:{filter:M?"grayscale(100%)":"none",opacity:M?.55:1},onError:z=>{z.currentTarget.onerror=null,z.currentTarget.src=er}})]}),u.jsx(tR,{onClick:()=>t(`/product/${k.slug??k.id}`),children:u.jsx("h3",{children:k.name})}),u.jsxs(nR,{children:[u.jsx(bR,{item:k,cartItem:E,user:r,token:n,disabled:M,isSoldOut:M}),u.jsx(Fu,{children:u.jsxs(Nu,{children:[u.jsxs(Bu,{$discount:T,children:[(D*(k.quantity||1)).toLocaleString()," ","грн"]}),T&&u.jsxs(u.Fragment,{children:[u.jsxs(Vu,{children:[(k.price*(k.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(Uu,{children:["-",O,"%"]})]})]})})]}),u.jsxs(rR,{children:[u.jsx(oR,{onClick:z=>{M||h(k,z)},disabled:M,style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:u.jsx(Ja,{size:22,fill:_?"#ff4d4f":"none",color:_?"#ff4d4f":"#999"})}),u.jsx(iR,{onClick:()=>b(k),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:u.jsx(Aw,{size:22})})]})]},`${k.id}-${P}`)})}),u.jsxs(aR,{children:[u.jsxs(sR,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[m," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[g," грн"]})]}),u.jsx(lR,{to:"/checkout",onClick:k=>{m===0&&(k.preventDefault(),K.warning("У кошику немає доступних товарів"))},children:"Оформити замовлення"}),u.jsx(cR,{onClick:C,children:"Oчистити кошик"})]})]})]})})},zR=S.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,FR=S.div`
   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;S.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
`;const NR=S.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;S.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const BR=S.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,VR=S.button`
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
`,UR=()=>u.jsxs(u.Fragment,{children:[u.jsx(zR,{children:"Головна / Обране"}),u.jsxs(FR,{children:[u.jsx(NR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),u.jsx(BR,{children:"Ви ще не додали жодного товару в обране"}),u.jsx(VR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),WR=()=>{const e=It(),t=Ke(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),i=Ue(h=>h.favorites.items),[o,a]=x.useState([]),[l,s]=x.useState(!0),[c,f]=x.useState([]),d=Ue(h=>h.cart.items),v=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e(rs()),e(nr()),a([]),await zu.purge(),t("/",{replace:!0})};x.useEffect(()=>{(async()=>{if(!n||!r){a(i),s(!1);return}try{const b=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(b.status===401){v();return}if(!b.ok)throw new Error("Не вдалося отримати обране");const k=(await b.json()).data.map(P=>P.product).filter(Boolean);a(k)}catch(b){console.error(b),K.error("Не вдалося завантажити обране"),a(i)}finally{s(!1)}})()},[]);const m=()=>{const h=o.filter(b=>b.available!==!1&&b.stock!==0).map(b=>{const C=d.find(_=>_.id===b.id),k=(C==null?void 0:C.quantity)??0,E=Number(b.stock??0)-k;return E<=0?null:{...b,quantity:E}}).filter(Boolean);if(h.length===0){K.error("Усі товари вже в максимальній кількості");return}e(t5(h)),K.success("Додано максимально доступну кількість товарів")},g=o.filter(h=>h.available!==!1&&h.stock!==0).length,y=o.filter(h=>h.available!==!1&&h.stock>0).reduce((h,b)=>h+(b.new_price??b.price)*(b.quantity||1),0),w=async(h,b)=>{b.stopPropagation();const C=o.some(P=>P.documentId===h.documentId);f(P=>[...P,h.id]),await pi(h,C,e,K)&&C?setTimeout(()=>{a(P=>P.filter(E=>E.documentId!==h.documentId)),f(P=>P.filter(E=>E!==h.id))},300):f(P=>P.filter(E=>E!==h.id))},p=o.length===0;return l?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(hi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:p?u.jsx(UR,{}):u.jsxs(SR,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(CR,{children:[" ",u.jsx(Pe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",u.jsx(Pe,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),u.jsx(kR,{children:"Обране"}),u.jsxs(_R,{children:[u.jsx(ER,{children:o.map(h=>{var T,I;const b=h.new_price&&h.new_price<h.price,C=b?h.new_price:h.price,k=(h==null?void 0:h.available)??!0,P=(h==null?void 0:h.stock)===0,E=b?Math.round((h.price-h.new_price)/h.price*100):0,_=async M=>{const D=d.find(R=>R.id===M.id);if((D?D.quantity:0)>=M.stock){K.error(`Вибачте, доступно лише ${M.stock} шт.`);return}await wo(M,1,e,K)};return u.jsxs(PR,{className:c.includes(h.id)?"removing":"",children:[u.jsxs(jR,{onClick:()=>t(`/product/${h.slug??h.id}`),children:[" ",!k&&u.jsx(UC,{children:"Бронь"}),P&&u.jsx(VC,{children:"Продано"}),u.jsx(TR,{src:((I=(T=h.images)==null?void 0:T[0])==null?void 0:I.url)||er,alt:h.name,style:{filter:P?"grayscale(100%)":"none",opacity:P?.55:1},onError:M=>{M.currentTarget.onerror=null}})]}),u.jsx(OR,{onClick:()=>t(`/product/${h.slug??h.id}`),children:h.name}),u.jsxs($R,{children:[u.jsx(Fu,{children:u.jsxs(Nu,{children:[u.jsxs(Bu,{$discount:b,children:[(C*(h.quantity||1)).toLocaleString()," ","грн"]}),b&&u.jsxs(u.Fragment,{children:[u.jsxs(Vu,{children:[(h.price*(h.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(Uu,{children:["-",E,"%"]})]})]})}),u.jsxs(IR,{children:[u.jsx(R1,{onClick:()=>{P||_(h)},disabled:!k||P,children:u.jsx(bo,{size:30})}),u.jsx(R1,{onClick:M=>w(h,M),children:u.jsx(Aw,{size:30})})]})]})]},h.id)})}),u.jsxs(MR,{children:[u.jsxs(DR,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[g," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[y," грн"]})]}),u.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),u.jsx(LR,{onClick:()=>m(),children:"Додати все до кошика"})]})]})]})})},HR=S.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,GR=S.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,qR=S.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,YR=S.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;S.section`
  margin-bottom: 30px;
`;S.h2`
  font-size: 20px;
  color: #4a332a; // Колір як у футері для акцентів
  margin-bottom: 15px;
  font-weight: 500;
`;S.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;S.ul`
  margin-left: 20px;
  margin-bottom: 15px;
  
  li {
    margin-bottom: 8px;
    color: #555;
    line-height: 1.5;
  }
`;const XR=({title:e,children:t,breadcrumbPath:n})=>u.jsxs(HR,{children:[u.jsxs(GR,{children:["Головна / ",n]}),u.jsxs(qR,{children:[u.jsx(YR,{children:e}),t]})]}),z1=S.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,F1=S.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,N1=S.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,B1=S.ul`
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
`,KR=()=>u.jsxs(XR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[u.jsxs(z1,{children:[u.jsx(F1,{children:"Способи доставки"}),u.jsx(N1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),u.jsxs(B1,{children:[u.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),u.jsx("li",{children:"Самовивіз з нашого магазину"}),u.jsx("li",{children:"Укрпошта"})]})]}),u.jsxs(z1,{children:[u.jsx(F1,{children:"Варіанти оплати"}),u.jsx(N1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),u.jsxs(B1,{children:[u.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),u.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),u.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ci(e){"@babel/helpers - typeof";return ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ci(e)}function QR(e,t){if(ci(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ci(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function WC(e){var t=QR(e,"string");return ci(t)==="symbol"?t:String(t)}function ea(e,t,n){return t=WC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?V1(Object(n),!0).forEach(function(r){ea(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZR(e){if(Array.isArray(e))return e}function JR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}function ih(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function HC(e,t){if(e){if(typeof e=="string")return ih(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ih(e,t)}}function ez(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yn(e,t){return ZR(e)||JR(e,t)||HC(e,t)||ez()}function tz(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function sr(e,t){if(e==null)return{};var n=tz(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var nz=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function rz(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,c=e.onChange,f=e.onInputChange,d=e.onMenuClose,v=e.onMenuOpen,m=e.value,g=sr(e,nz),y=x.useState(l!==void 0?l:n),w=Yn(y,2),p=w[0],h=w[1],b=x.useState(s!==void 0?s:i),C=Yn(b,2),k=C[0],P=C[1],E=x.useState(m!==void 0?m:a),_=Yn(E,2),T=_[0],I=_[1],M=x.useCallback(function(j,$){typeof c=="function"&&c(j,$),I(j)},[c]),D=x.useCallback(function(j,$){var F;typeof f=="function"&&(F=f(j,$)),h(F!==void 0?F:j)},[f]),O=x.useCallback(function(){typeof v=="function"&&v(),P(!0)},[v]),R=x.useCallback(function(){typeof d=="function"&&d(),P(!1)},[d]),L=l!==void 0?l:p,z=s!==void 0?s:k,A=m!==void 0?m:T;return J(J({},g),{},{inputValue:L,menuIsOpen:z,onChange:M,onInputChange:D,onMenuClose:R,onMenuOpen:O,value:A})}function iz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,WC(r.key),r)}}function oz(e,t,n){return t&&U1(e.prototype,t),n&&U1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oh(e,t){return oh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},oh(e,t)}function az(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&oh(e,t)}function gc(e){return gc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},gc(e)}function sz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function lz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cz(e,t){if(t&&(ci(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lz(e)}function uz(e){var t=sz();return function(){var r=gc(e),i;if(t){var o=gc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return cz(this,i)}}function dz(e){if(Array.isArray(e))return ih(e)}function fz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mg(e){return dz(e)||fz(e)||HC(e)||pz()}function hz(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const mz=Math.min,gz=Math.max,vc=Math.round,As=Math.floor,xc=e=>({x:e,y:e});function vz(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Wu(){return typeof window<"u"}function GC(e){return YC(e)?(e.nodeName||"").toLowerCase():"#document"}function mn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function qC(e){var t;return(t=(YC(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function YC(e){return Wu()?e instanceof Node||e instanceof mn(e).Node:!1}function ah(e){return Wu()?e instanceof Element||e instanceof mn(e).Element:!1}function gg(e){return Wu()?e instanceof HTMLElement||e instanceof mn(e).HTMLElement:!1}function W1(e){return!Wu()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof mn(e).ShadowRoot}function XC(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=vg(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let lf;function xz(){return lf==null&&(lf=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),lf}function yz(e){return/^(html|body|#document)$/.test(GC(e))}function vg(e){return mn(e).getComputedStyle(e)}function bz(e){if(GC(e)==="html")return e;const t=e.assignedSlot||e.parentNode||W1(e)&&e.host||qC(e);return W1(t)?t.host:t}function KC(e){const t=bz(e);return yz(t)?e.ownerDocument?e.ownerDocument.body:e.body:gg(t)&&XC(t)?t:KC(t)}function yc(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=KC(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=mn(i);if(o){const l=sh(a);return t.concat(a,a.visualViewport||[],XC(i)?i:[],l&&n?yc(l):[])}else return t.concat(i,yc(i,[],n))}function sh(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function wz(e){const t=vg(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=gg(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=vc(n)!==o||vc(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function xg(e){return ah(e)?e:e.contextElement}function cf(e){const t=xg(e);if(!gg(t))return xc(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=wz(t);let a=(o?vc(n.width):n.width)/r,l=(o?vc(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Sz=xc(0);function Cz(e){const t=mn(e);return!xz()||!t.visualViewport?Sz:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function kz(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==mn(e)?!1:t}function H1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=xg(e);let a=xc(1);t&&(r?ah(r)&&(a=cf(r)):a=cf(e));const l=kz(o,n,r)?Cz(o):xc(0);let s=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,f=i.width/a.x,d=i.height/a.y;if(o){const v=mn(o),m=r&&ah(r)?mn(r):r;let g=v,y=sh(g);for(;y&&r&&m!==g;){const w=cf(y),p=y.getBoundingClientRect(),h=vg(y),b=p.left+(y.clientLeft+parseFloat(h.paddingLeft))*w.x,C=p.top+(y.clientTop+parseFloat(h.paddingTop))*w.y;s*=w.x,c*=w.y,f*=w.x,d*=w.y,s+=b,c+=C,g=mn(y),y=sh(g)}}return vz({width:f,height:d,x:s,y:c})}function QC(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function _z(e,t){let n=null,r;const i=qC(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const c=e.getBoundingClientRect(),{left:f,top:d,width:v,height:m}=c;if(l||t(),!v||!m)return;const g=As(d),y=As(i.clientWidth-(f+v)),w=As(i.clientHeight-(d+m)),p=As(f),b={rootMargin:-g+"px "+-y+"px "+-w+"px "+-p+"px",threshold:gz(0,mz(1,s))||1};let C=!0;function k(P){const E=P[0].intersectionRatio;if(E!==s){if(!C)return a();E?a(!1,E):r=setTimeout(()=>{a(!1,1e-7)},1e3)}E===1&&!QC(c,e.getBoundingClientRect())&&a(),C=!1}try{n=new IntersectionObserver(k,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(k,b)}n.observe(e)}return a(!0),o}function Ez(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=xg(e),f=i||o?[...c?yc(c):[],...t?yc(t):[]]:[];f.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const d=c&&l?_z(c,n):null;let v=-1,m=null;a&&(m=new ResizeObserver(p=>{let[h]=p;h&&h.target===c&&m&&t&&(m.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var b;(b=m)==null||b.observe(t)})),n()}),c&&!s&&m.observe(c),t&&m.observe(t));let g,y=s?H1(e):null;s&&w();function w(){const p=H1(e);y&&!QC(y,p)&&n(),y=p,g=requestAnimationFrame(w)}return n(),()=>{var p;f.forEach(h=>{i&&h.removeEventListener("scroll",n),o&&h.removeEventListener("resize",n)}),d==null||d(),(p=m)==null||p.disconnect(),m=null,s&&cancelAnimationFrame(g)}}var lh=x.useLayoutEffect,Pz=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],bc=function(){};function jz(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function Tz(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(jz(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var G1=function(t){return zz(t)?t.filter(Boolean):ci(t)==="object"&&t!==null?[t]:[]},ZC=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=sr(t,Pz);return J({},n)},$e=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Hu(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function Oz(e){return Hu(e)?window.innerHeight:e.clientHeight}function JC(e){return Hu(e)?window.pageYOffset:e.scrollTop}function wc(e,t){if(Hu(e)){window.scrollTo(0,t);return}e.scrollTop=t}function $z(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function Iz(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Rs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:bc,i=JC(e),o=t-i,a=10,l=0;function s(){l+=a;var c=Iz(l,i,o,n);wc(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function q1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?wc(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&wc(e,Math.max(t.offsetTop-i,0))}function Mz(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Y1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Dz(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var ek=!1,Lz={get passive(){return ek=!0}},zs=typeof window<"u"?window:{};zs.addEventListener&&zs.removeEventListener&&(zs.addEventListener("p",bc,Lz),zs.removeEventListener("p",bc,!1));var Az=ek;function Rz(e){return e!=null}function zz(e){return Array.isArray(e)}function Fs(e,t,n){return e?t:n}var Fz=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Yn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Yn(l,2),c=s[0],f=s[1];return a[c]=f,a},{})},Nz=["children","innerProps"],Bz=["children","innerProps"];function Vz(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=$z(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var f=s.getBoundingClientRect(),d=f.height,v=n.getBoundingClientRect(),m=v.bottom,g=v.height,y=v.top,w=n.offsetParent.getBoundingClientRect(),p=w.top,h=a?window.innerHeight:Oz(s),b=JC(s),C=parseInt(getComputedStyle(n).marginBottom,10),k=parseInt(getComputedStyle(n).marginTop,10),P=p-k,E=h-y,_=P+b,T=d-b-y,I=m-h+b+C,M=b+y-k,D=160;switch(i){case"auto":case"bottom":if(E>=g)return{placement:"bottom",maxHeight:t};if(T>=g&&!a)return o&&Rs(s,I,D),{placement:"bottom",maxHeight:t};if(!a&&T>=r||a&&E>=r){o&&Rs(s,I,D);var O=a?E-C:T-C;return{placement:"bottom",maxHeight:O}}if(i==="auto"||a){var R=t,L=a?P:_;return L>=r&&(R=Math.min(L-C-l,t)),{placement:"top",maxHeight:R}}if(i==="bottom")return o&&wc(s,I),{placement:"bottom",maxHeight:t};break;case"top":if(P>=g)return{placement:"top",maxHeight:t};if(_>=g&&!a)return o&&Rs(s,M,D),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&P>=r){var z=t;return(!a&&_>=r||a&&P>=r)&&(z=a?P-k:_-k),o&&Rs(s,M,D),{placement:"top",maxHeight:z}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function Uz(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var tk=function(t){return t==="auto"?"bottom":t},Wz=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return J((r={label:"menu"},ea(r,Uz(i),"100%"),ea(r,"position","absolute"),ea(r,"width","100%"),ea(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},nk=x.createContext(null),Hz=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,c=x.useContext(nk)||{},f=c.setPortalPlacement,d=x.useRef(null),v=x.useState(i),m=Yn(v,2),g=m[0],y=m[1],w=x.useState(null),p=Yn(w,2),h=p[0],b=p[1],C=s.spacing.controlHeight;return lh(function(){var k=d.current;if(k){var P=a==="fixed",E=l&&!P,_=Vz({maxHeight:i,menuEl:k,minHeight:r,placement:o,shouldScroll:E,isFixedPosition:P,controlHeight:C});y(_.maxHeight),b(_.placement),f==null||f(_.placement)}},[i,o,a,l,r,f,C]),n({ref:d,placerProps:J(J({},t),{},{placement:h||tk(o),maxHeight:g})})},Gz=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Z("div",ee({},$e(t,"menu",{menu:!0}),{ref:r},i),n)},qz=Gz,Yz=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return J({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},Xz=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Z("div",ee({},$e(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},rk=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return J({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},Kz=rk,Qz=rk,Zz=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=sr(t,Nz);return Z("div",ee({},$e(J(J({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},Jz=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=sr(t,Bz);return Z("div",ee({},$e(J(J({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},eF=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},tF=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=x.useRef(null),c=x.useRef(null),f=x.useState(tk(a)),d=Yn(f,2),v=d[0],m=d[1],g=x.useMemo(function(){return{setPortalPlacement:m}},[]),y=x.useState(null),w=Yn(y,2),p=w[0],h=w[1],b=x.useCallback(function(){if(i){var E=Mz(i),_=l==="fixed"?0:window.pageYOffset,T=E[v]+_;(T!==(p==null?void 0:p.offset)||E.left!==(p==null?void 0:p.rect.left)||E.width!==(p==null?void 0:p.rect.width))&&h({offset:T,rect:E})}},[i,l,v,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);lh(function(){b()},[b]);var C=x.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=Ez(i,s.current,b,{elementResize:"ResizeObserver"in window}))},[i,b]);lh(function(){C()},[C]);var k=x.useCallback(function(E){s.current=E,C()},[C]);if(!n&&l!=="fixed"||!p)return null;var P=Z("div",ee({ref:k},$e(J(J({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Z(nk.Provider,{value:g},n?Bc.createPortal(P,n):P)},nF=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},rF=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Z("div",ee({},$e(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},iF=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return J({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},oF=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Z("div",ee({},$e(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},aF=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},sF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},$e(t,"indicatorsContainer",{indicators:!0}),r),n)},X1,lF=["size"],cF=["innerProps","isRtl","size"],uF={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},ik=function(t){var n=t.size,r=sr(t,lF);return Z("svg",ee({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:uF},r))},yg=function(t){return Z(ik,ee({size:20},t),Z("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},ok=function(t){return Z(ik,ee({size:20},t),Z("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},ak=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return J({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},dF=ak,fF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},$e(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Z(ok,null))},pF=ak,hF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},$e(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Z(yg,null))},mF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return J({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},gF=function(t){var n=t.innerProps;return Z("span",ee({},n,$e(t,"indicatorSeparator",{"indicator-separator":!0})))},vF=t3(X1||(X1=hz([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),xF=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return J({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},uf=function(t){var n=t.delay,r=t.offset;return Z("span",{css:Fm({animation:"".concat(vF," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},yF=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=sr(t,cF);return Z("div",ee({},$e(J(J({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Z(uf,{delay:0,offset:r}),Z(uf,{delay:160,offset:!0}),Z(uf,{delay:320,offset:!r}))},bF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return J({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},wF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Z("div",ee({ref:o},$e(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},SF=wF,CF=["data"],kF=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},_F=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,f=t.theme,d=t.selectProps;return Z("div",ee({},$e(t,"group",{group:!0}),s),Z(a,ee({},l,{selectProps:d,theme:f,getStyles:i,getClassNames:o,cx:r}),c),Z("div",null,n))},EF=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return J({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},PF=function(t){var n=ZC(t);n.data;var r=sr(n,CF);return Z("div",ee({},$e(t,"groupHeading",{"group-heading":!0}),r))},jF=_F,TF=["innerRef","isDisabled","isHidden","inputClassName"],OF=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return J(J({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},$F),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},sk={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},$F={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":J({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},sk)},IF=function(t){return J({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},sk)},MF=function(t){var n=t.cx,r=t.value,i=ZC(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,c=sr(i,TF);return Z("div",ee({},$e(t,"input",{"input-container":!0}),{"data-value":r||""}),Z("input",ee({className:n({input:!0},s),ref:o,style:IF(l),disabled:a},c)))},DF=MF,LF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return J({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},AF=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return J({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},RF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return J({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},lk=function(t){var n=t.children,r=t.innerProps;return Z("div",r,n)},zF=lk,FF=lk;function NF(e){var t=e.children,n=e.innerProps;return Z("div",ee({role:"button"},n),t||Z(yg,{size:14}))}var BF=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,c=r.Container,f=r.Label,d=r.Remove;return Z(c,{data:i,innerProps:J(J({},$e(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Z(f,{data:i,innerProps:J({},$e(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Z(d,{data:i,innerProps:J(J({},$e(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},VF=BF,UF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return J({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},WF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Z("div",ee({},$e(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},HF=WF,GF=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return J({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},qF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},$e(t,"placeholder",{placeholder:!0}),r),n)},YF=qF,XF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return J({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},KF=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Z("div",ee({},$e(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},QF=KF,ZF={ClearIndicator:hF,Control:SF,DropdownIndicator:fF,DownChevron:ok,CrossIcon:yg,Group:jF,GroupHeading:PF,IndicatorsContainer:sF,IndicatorSeparator:gF,Input:DF,LoadingIndicator:yF,Menu:qz,MenuList:Xz,MenuPortal:tF,LoadingMessage:Jz,NoOptionsMessage:Zz,MultiValue:VF,MultiValueContainer:zF,MultiValueLabel:FF,MultiValueRemove:NF,Option:HF,Placeholder:YF,SelectContainer:rF,SingleValue:QF,ValueContainer:oF},JF=function(t){return J(J({},ZF),t.components)},K1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function eN(e,t){return!!(e===t||K1(e)&&K1(t))}function tN(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!eN(e[n],t[n]))return!1;return!0}function nN(e,t){t===void 0&&(t=tN);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var rN={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},iN=function(t){return Z("span",ee({css:rN},t))},Q1=iN,oN={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,c=t.isSelected,f=t.isAppleDevice,d=function(y,w){return y&&y.length?"".concat(y.indexOf(w)+1," of ").concat(y.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&f){var v=s?" disabled":"",m="".concat(c?" selected":"").concat(v);return"".concat(a).concat(m,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},aN=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=t.id,f=t.isAppleDevice,d=s.ariaLiveMessages,v=s.getOptionLabel,m=s.inputValue,g=s.isMulti,y=s.isOptionDisabled,w=s.isSearchable,p=s.menuIsOpen,h=s.options,b=s.screenReaderStatus,C=s.tabSelectsValue,k=s.isLoading,P=s["aria-label"],E=s["aria-live"],_=x.useMemo(function(){return J(J({},oN),d||{})},[d]),T=x.useMemo(function(){var L="";if(n&&_.onChange){var z=n.option,A=n.options,j=n.removedValue,$=n.removedValues,F=n.value,B=function(oe){return Array.isArray(oe)?null:oe},N=j||z||B(F),V=N?v(N):"",H=A||$||void 0,G=H?H.map(v):[],W=J({isDisabled:N&&y(N,l),label:V,labels:G},n);L=_.onChange(W)}return L},[n,_,y,l,v]),I=x.useMemo(function(){var L="",z=r||i,A=!!(r&&l&&l.includes(r));if(z&&_.onFocus){var j={focused:z,label:v(z),isDisabled:y(z,l),isSelected:A,options:o,context:z===r?"menu":"value",selectValue:l,isAppleDevice:f};L=_.onFocus(j)}return L},[r,i,v,y,_,o,l,f]),M=x.useMemo(function(){var L="";if(p&&h.length&&!k&&_.onFilter){var z=b({count:o.length});L=_.onFilter({inputValue:m,resultsMessage:z})}return L},[o,m,p,_,h,b,k]),D=(n==null?void 0:n.action)==="initial-input-focus",O=x.useMemo(function(){var L="";if(_.guidance){var z=i?"value":p?"menu":"input";L=_.guidance({"aria-label":P,context:z,isDisabled:r&&y(r,l),isMulti:g,isSearchable:w,tabSelectsValue:C,isInitialFocus:D})}return L},[P,r,i,g,y,w,p,_,l,C,D]),R=Z(x.Fragment,null,Z("span",{id:"aria-selection"},T),Z("span",{id:"aria-focused"},I),Z("span",{id:"aria-results"},M),Z("span",{id:"aria-guidance"},O));return Z(x.Fragment,null,Z(Q1,{id:c},D&&R),Z(Q1,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!D&&R))},sN=aN,ch=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],lN=new RegExp("["+ch.map(function(e){return e.letters}).join("")+"]","g"),ck={};for(var df=0;df<ch.length;df++)for(var ff=ch[df],pf=0;pf<ff.letters.length;pf++)ck[ff.letters[pf]]=ff.base;var uk=function(t){return t.replace(lN,function(n){return ck[n]})},cN=nN(uk),Z1=function(t){return t.replace(/^\s+|\s+$/g,"")},uN=function(t){return"".concat(t.label," ").concat(t.value)},dN=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=J({ignoreCase:!0,ignoreAccents:!0,stringify:uN,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,c=i.matchFrom,f=s?Z1(r):r,d=s?Z1(l(n)):l(n);return o&&(f=f.toLowerCase(),d=d.toLowerCase()),a&&(f=cN(f),d=uk(d)),c==="start"?d.substr(0,f.length)===f:d.indexOf(f)>-1}},fN=["innerRef"];function pN(e){var t=e.innerRef,n=sr(e,fN),r=Fz(n,"onExited","in","enter","exit","appear");return Z("input",ee({ref:t},r,{css:Fm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var hN=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function mN(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=x.useRef(!1),l=x.useRef(!1),s=x.useRef(0),c=x.useRef(null),f=x.useCallback(function(w,p){if(c.current!==null){var h=c.current,b=h.scrollTop,C=h.scrollHeight,k=h.clientHeight,P=c.current,E=p>0,_=C-k-b,T=!1;_>p&&a.current&&(r&&r(w),a.current=!1),E&&l.current&&(o&&o(w),l.current=!1),E&&p>_?(n&&!a.current&&n(w),P.scrollTop=C,T=!0,a.current=!0):!E&&-p>b&&(i&&!l.current&&i(w),P.scrollTop=0,T=!0,l.current=!0),T&&hN(w)}},[n,r,i,o]),d=x.useCallback(function(w){f(w,w.deltaY)},[f]),v=x.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),m=x.useCallback(function(w){var p=s.current-w.changedTouches[0].clientY;f(w,p)},[f]),g=x.useCallback(function(w){if(w){var p=Az?{passive:!1}:!1;w.addEventListener("wheel",d,p),w.addEventListener("touchstart",v,p),w.addEventListener("touchmove",m,p)}},[m,v,d]),y=x.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",v,!1),w.removeEventListener("touchmove",m,!1))},[m,v,d]);return x.useEffect(function(){if(t){var w=c.current;return g(w),function(){y(w)}}},[t,g,y]),function(w){c.current=w}}var J1=["boxSizing","height","overflow","paddingRight","position"],ex={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function tx(e){e.cancelable&&e.preventDefault()}function nx(e){e.stopPropagation()}function rx(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function ix(){return"ontouchstart"in window||navigator.maxTouchPoints}var ox=!!(typeof window<"u"&&window.document&&window.document.createElement),Ho=0,_i={capture:!1,passive:!1};function gN(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=x.useRef({}),o=x.useRef(null),a=x.useCallback(function(s){if(ox){var c=document.body,f=c&&c.style;if(r&&J1.forEach(function(g){var y=f&&f[g];i.current[g]=y}),r&&Ho<1){var d=parseInt(i.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,m=window.innerWidth-v+d||0;Object.keys(ex).forEach(function(g){var y=ex[g];f&&(f[g]=y)}),f&&(f.paddingRight="".concat(m,"px"))}c&&ix()&&(c.addEventListener("touchmove",tx,_i),s&&(s.addEventListener("touchstart",rx,_i),s.addEventListener("touchmove",nx,_i))),Ho+=1}},[r]),l=x.useCallback(function(s){if(ox){var c=document.body,f=c&&c.style;Ho=Math.max(Ho-1,0),r&&Ho<1&&J1.forEach(function(d){var v=i.current[d];f&&(f[d]=v)}),c&&ix()&&(c.removeEventListener("touchmove",tx,_i),s&&(s.removeEventListener("touchstart",rx,_i),s.removeEventListener("touchmove",nx,_i)))}},[r]);return x.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var vN=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},xN={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function yN(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=mN({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),f=gN({isEnabled:n}),d=function(m){c(m),f(m)};return Z(x.Fragment,null,n&&Z("div",{onClick:vN,css:xN}),t(d))}var bN={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},wN=function(t){var n=t.name,r=t.onFocus;return Z("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:bN,value:"",onChange:function(){}})},SN=wN;function bg(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function CN(){return bg(/^iPhone/i)}function dk(){return bg(/^Mac/i)}function kN(){return bg(/^iPad/i)||dk()&&navigator.maxTouchPoints>1}function _N(){return CN()||kN()}function EN(){return dk()||_N()}var PN=function(t){return t.label},jN=function(t){return t.label},TN=function(t){return t.value},ON=function(t){return!!t.isDisabled},$N={clearIndicator:pF,container:nF,control:bF,dropdownIndicator:dF,group:kF,groupHeading:EF,indicatorsContainer:aF,indicatorSeparator:mF,input:OF,loadingIndicator:xF,loadingMessage:Qz,menu:Wz,menuList:Yz,menuPortal:eF,multiValue:LF,multiValueLabel:AF,multiValueRemove:RF,noOptionsMessage:Kz,option:UF,placeholder:GF,singleValue:XF,valueContainer:iF},IN={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},MN=4,fk=4,DN=38,LN=fk*2,AN={baseUnit:fk,controlHeight:DN,menuGutter:LN},hf={borderRadius:MN,colors:IN,spacing:AN},RN={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Y1(),captureMenuScroll:!Y1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:dN(),formatGroupLabel:PN,getOptionLabel:jN,getOptionValue:TN,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:ON,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Dz(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function ax(e,t,n,r){var i=mk(e,t,n),o=gk(e,t,n),a=hk(e,t),l=Sc(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function bl(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return ax(e,a,t,l)}).filter(function(a){return lx(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=ax(e,n,t,r);return lx(e,o)?o:void 0}).filter(Rz)}function pk(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,mg(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function sx(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,mg(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function zN(e,t){return pk(bl(e,t))}function lx(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!xk(e)||!o)&&vk(e,{label:a,value:l,data:i},r)}function FN(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function NN(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var mf=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},hk=function(t,n){return t.getOptionLabel(n)},Sc=function(t,n){return t.getOptionValue(n)};function mk(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function gk(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Sc(e,t);return n.some(function(i){return Sc(e,i)===r})}function vk(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var xk=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},BN=1,yk=function(e){az(n,e);var t=uz(n);function n(r){var i;if(iz(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var f=i.props,d=f.onChange,v=f.name;c.name=v,i.ariaOnChange(s,c),d(s,c)},i.setValue=function(s,c,f){var d=i.props,v=d.closeMenuOnSelect,m=d.isMulti,g=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),v&&(i.setState({inputIsHiddenAfterUpdate:!m}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:f})},i.selectOption=function(s){var c=i.props,f=c.blurInputOnSelect,d=c.isMulti,v=c.name,m=i.state.selectValue,g=d&&i.isOptionSelected(s,m),y=i.isOptionDisabled(s,m);if(g){var w=i.getOptionValue(s);i.setValue(m.filter(function(p){return i.getOptionValue(p)!==w}),"deselect-option",s)}else if(!y)d?i.setValue([].concat(mg(m),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:v});return}f&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,f=i.state.selectValue,d=i.getOptionValue(s),v=f.filter(function(g){return i.getOptionValue(g)!==d}),m=Fs(c,v,v[0]||null);i.onChange(m,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Fs(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,f=c[c.length-1],d=c.slice(0,c.length-1),v=Fs(s,d,d[0]||null);f&&i.onChange(v,{action:"pop-value",removedValue:f})},i.getFocusedOptionId=function(s){return mf(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return sx(bl(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];return Tz.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return hk(i.props,s)},i.getOptionValue=function(s){return Sc(i.props,s)},i.getStyles=function(s,c){var f=i.props.unstyled,d=$N[s](c,f);d.boxSizing="border-box";var v=i.props.styles[s];return v?v(d,c):d},i.getClassNames=function(s,c){var f,d;return(f=(d=i.props.classNames)[s])===null||f===void 0?void 0:f.call(d,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return JF(i.props)},i.buildCategorizedOptions=function(){return bl(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return pk(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:J({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,f=c.isMulti,d=c.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!f}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Hu(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,f=c&&c.item(0);f&&(i.initialTouchX=f.clientX,i.initialTouchY=f.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,f=c&&c.item(0);if(f){var d=Math.abs(f.clientX-i.initialTouchX),v=Math.abs(f.clientY-i.initialTouchY),m=5;i.userIsDragging=d>m||v>m}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,f=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(f,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),f=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:f>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return xk(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,f=c.isMulti,d=c.backspaceRemovesValue,v=c.escapeClearsValue,m=c.inputValue,g=c.isClearable,y=c.isDisabled,w=c.menuIsOpen,p=c.onKeyDown,h=c.tabSelectsValue,b=c.openMenuOnFocus,C=i.state,k=C.focusedOption,P=C.focusedValue,E=C.selectValue;if(!y&&!(typeof p=="function"&&(p(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!f||m)return;i.focusValue("previous");break;case"ArrowRight":if(!f||m)return;i.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(P)i.removeValue(P);else{if(!d)return;f?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!h||!k||b&&i.isOptionSelected(k,E))return;i.selectOption(k);break;case"Enter":if(s.keyCode===229)break;if(w){if(!k||i.isComposing)return;i.selectOption(k);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:m}),i.onMenuClose()):g&&v&&i.clearValue();break;case" ":if(m)return;if(!w){i.openMenu("first");break}if(!k)return;i.selectOption(k);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++BN),i.state.selectValue=G1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=mf(o,a[l])}return i}return oz(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&q1(this.menuListRef,this.focusedOptionRef),EN()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(q1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),f=i==="first"?0:c.length-1;if(!this.props.isMulti){var d=c.indexOf(l[0]);d>-1&&(f=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[f],focusedOptionId:this.getFocusedOptionId(c[f])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,f=-1;if(a.length){switch(i){case"previous":s===0?f=0:s===-1?f=c:f=s-1;break;case"next":s>-1&&s<c&&(f=s+1);break}this.setState({inputIsHidden:f!==-1,focusedValue:a[f]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,c=l.indexOf(a);a||(c=-1),i==="up"?s=c>0?c-1:l.length-1:i==="down"?s=(c+1)%l.length:i==="pageup"?(s=c-o,s<0&&(s=0)):i==="pagedown"?(s=c+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(hf):J(J({},hf),this.props.theme):hf}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,c=this.selectOption,f=this.setValue,d=this.props,v=d.isMulti,m=d.isRtl,g=d.options,y=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:y,isMulti:v,isRtl:m,options:g,selectOption:c,selectProps:d,setValue:f,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return mk(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return gk(this.props,i,o)}},{key:"filterOption",value:function(i,o){return vk(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,c=i.tabIndex,f=i.form,d=i.menuIsOpen,v=i.required,m=this.getComponents(),g=m.Input,y=this.state,w=y.inputIsHidden,p=y.ariaSelection,h=this.commonProps,b=l||this.getElementId("input"),C=J(J(J({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?x.createElement(g,ee({},h,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:b,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:f,type:"text",value:s},C)):x.createElement(pN,ee({id:b,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:bc,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:f,value:""},C))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,c=o.MultiValueRemove,f=o.SingleValue,d=o.Placeholder,v=this.commonProps,m=this.props,g=m.controlShouldRenderValue,y=m.isDisabled,w=m.isMulti,p=m.inputValue,h=m.placeholder,b=this.state,C=b.selectValue,k=b.focusedValue,P=b.isFocused;if(!this.hasValue()||!g)return p?null:x.createElement(d,ee({},v,{key:"placeholder",isDisabled:y,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),h);if(w)return C.map(function(_,T){var I=_===k,M="".concat(i.getOptionLabel(_),"-").concat(i.getOptionValue(_));return x.createElement(a,ee({},v,{components:{Container:l,Label:s,Remove:c},isFocused:I,isDisabled:y,key:M,index:T,removeProps:{onClick:function(){return i.removeValue(_)},onTouchEnd:function(){return i.removeValue(_)},onMouseDown:function(O){O.preventDefault()}},data:_}),i.formatOptionLabel(_,"value"))});if(p)return null;var E=C[0];return x.createElement(f,ee({},v,{data:E,isDisabled:y}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,f=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||c)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,ee({},a,{innerProps:d,isFocused:f}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,f=this.state.isFocused;if(!o||!c)return null;var d={"aria-hidden":"true"};return x.createElement(o,ee({},a,{innerProps:d,isDisabled:s,isFocused:f}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return x.createElement(a,ee({},l,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,ee({},a,{innerProps:c,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,c=o.MenuList,f=o.MenuPortal,d=o.LoadingMessage,v=o.NoOptionsMessage,m=o.Option,g=this.commonProps,y=this.state.focusedOption,w=this.props,p=w.captureMenuScroll,h=w.inputValue,b=w.isLoading,C=w.loadingMessage,k=w.minMenuHeight,P=w.maxMenuHeight,E=w.menuIsOpen,_=w.menuPlacement,T=w.menuPosition,I=w.menuPortalTarget,M=w.menuShouldBlockScroll,D=w.menuShouldScrollIntoView,O=w.noOptionsMessage,R=w.onMenuScrollToTop,L=w.onMenuScrollToBottom;if(!E)return null;var z=function(V,H){var G=V.type,W=V.data,q=V.isDisabled,oe=V.isSelected,he=V.label,ie=V.value,De=y===W,We=q?void 0:function(){return i.onOptionHover(W)},He=q?void 0:function(){return i.selectOption(W)},gi="".concat(i.getElementId("option"),"-").concat(H),St={id:gi,onClick:He,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:oe};return x.createElement(m,ee({},g,{innerProps:St,data:W,isDisabled:q,isSelected:oe,key:gi,label:he,type:G,value:ie,isFocused:De,innerRef:De?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(V.data,"menu"))},A;if(this.hasOptions())A=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var V=N.data,H=N.options,G=N.index,W="".concat(i.getElementId("group"),"-").concat(G),q="".concat(W,"-heading");return x.createElement(a,ee({},g,{key:W,data:V,options:H,Heading:l,headingProps:{id:q,data:N.data},label:i.formatGroupLabel(N.data)}),N.options.map(function(oe){return z(oe,"".concat(G,"-").concat(oe.index))}))}else if(N.type==="option")return z(N,"".concat(N.index))});else if(b){var j=C({inputValue:h});if(j===null)return null;A=x.createElement(d,g,j)}else{var $=O({inputValue:h});if($===null)return null;A=x.createElement(v,g,$)}var F={minMenuHeight:k,maxMenuHeight:P,menuPlacement:_,menuPosition:T,menuShouldScrollIntoView:D},B=x.createElement(Hz,ee({},g,F),function(N){var V=N.ref,H=N.placerProps,G=H.placement,W=H.maxHeight;return x.createElement(s,ee({},g,F,{innerRef:V,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:b,placement:G}),x.createElement(yN,{captureEnabled:p,onTopArrive:R,onBottomArrive:L,lockEnabled:M},function(q){return x.createElement(c,ee({},g,{innerRef:function(he){i.getMenuListRef(he),q(he)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:b,maxHeight:W,focusedOption:y}),A)}))});return I||T==="fixed"?x.createElement(f,ee({},g,{appendTo:I,controlElement:this.controlRef,menuPlacement:_,menuPosition:T}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,c=o.name,f=o.required,d=this.state.selectValue;if(f&&!this.hasValue()&&!l)return x.createElement(SN,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(s)if(a){var v=d.map(function(y){return i.getOptionValue(y)}).join(a);return x.createElement("input",{name:c,type:"hidden",value:v})}else{var m=d.length>0?d.map(function(y,w){return x.createElement("input",{key:"i-".concat(w),name:c,type:"hidden",value:i.getOptionValue(y)})}):x.createElement("input",{name:c,type:"hidden",value:""});return x.createElement("div",null,m)}else{var g=d[0]?this.getOptionValue(d[0]):"";return x.createElement("input",{name:c,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,c=o.isFocused,f=o.selectValue,d=this.getFocusableOptions();return x.createElement(sN,ee({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:f,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,c=this.props,f=c.className,d=c.id,v=c.isDisabled,m=c.menuIsOpen,g=this.state.isFocused,y=this.commonProps=this.getCommonProps();return x.createElement(l,ee({},y,{className:f,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:g}),this.renderLiveRegion(),x.createElement(o,ee({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:g,menuIsOpen:m}),x.createElement(s,ee({},y,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),x.createElement(a,ee({},y,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,f=o.isFocused,d=o.prevWasFocused,v=o.instancePrefix,m=i.options,g=i.value,y=i.menuIsOpen,w=i.inputValue,p=i.isMulti,h=G1(g),b={};if(a&&(g!==a.value||m!==a.options||y!==a.menuIsOpen||w!==a.inputValue)){var C=y?zN(i,h):[],k=y?sx(bl(i,h),"".concat(v,"-option")):[],P=l?FN(o,h):null,E=NN(o,C),_=mf(k,E);b={selectValue:h,focusedOption:E,focusedOptionId:_,focusableOptionsWithIds:k,focusedValue:P,clearFocusValueOnUpdate:!1}}var T=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=c,M=f&&d;return f&&!M&&(I={value:Fs(p,h,h[0]||null),options:h,action:"initial-input-focus"},M=!d),(c==null?void 0:c.action)==="initial-input-focus"&&(I=null),J(J(J({},b),T),{},{prevProps:i,ariaSelection:I,prevWasFocused:M})}}]),n}(x.Component);yk.defaultProps=RN;var VN=x.forwardRef(function(e,t){var n=rz(e);return x.createElement(yk,ee({ref:t},n))}),Gu=VN;const UN=S.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,WN=S.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,HN=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>u.jsxs(UN,{children:[u.jsx(WN,{children:"Місто"}),u.jsx(Gu,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),GN=S.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,qN=S.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,YN=({options:e=[],value:t,onChange:n,selectedCity:r})=>u.jsxs(GN,{children:[u.jsx(qN,{children:"Спосіб доставки"}),u.jsx(Gu,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),cx=S.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,ux=S.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,XN=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?u.jsxs(cx,{children:[u.jsx(ux,{children:"Відділення Нової пошти"}),u.jsx(Gu,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?u.jsxs(cx,{children:[u.jsx(ux,{children:"Адреса доставки (Укрпошта)"}),u.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,KN=S.div`
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
`;S.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;const QN=S.button`
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
`,ZN=S.ul`
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
`,JN=S.li`
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
`,e7=S.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,t7=S.div`
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
`,n7=S.div`
  text-align: center;
  width: 100px;
 
`,r7=S.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,i7=S.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,o7=S.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,a7=S.span`
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
`,s7=S.div`
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
`;S.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;const l7=S.div`
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,c7=S.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
`;S.form`
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
`;S.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;S.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;S.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f58220; /* Помаранчевий колір з кнопки */
  }
`;S.div`
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
`;S.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;S.button`
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
`;S.ul`
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
`;S.li`
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
`;S.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`;S.div`
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
`;S.button`
`;const u7=S.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 18px 2px 28px;

  font-size: 16px;
     color: var(--black-color);
`,d7=S.input`
  width: 20px;
  height: 20px;

  accent-color: #5b4637;
  cursor: pointer;

  flex-shrink: 0;
`,f7=S.label`
  font-size: 16px;
  line-height: 1.4;

      color: var(--black-color);
  cursor: pointer;
`,p7=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i,noCall:o,setNoCall:a})=>u.jsxs(KN,{children:[u.jsx("h3",{children:"Ваше замовлення"}),u.jsx(ZN,{children:e.map((l,s)=>{var m,g;const c=l.new_price&&l.new_price<l.price,f=c?l.new_price:l.price,d=c?Math.round((l.price-l.new_price)/l.price*100):0,v=l.available!==!1?f*(l.quantity||1):0;return u.jsxs(JN,{children:[u.jsx(e7,{src:((g=(m=l.images)==null?void 0:m[0])==null?void 0:g.url)||er,alt:l.name}),u.jsxs(t7,{children:[u.jsx("p",{className:"item-name",children:l.name}),u.jsxs("p",{className:"item-details",children:[l.quantity," шт. × ",l.price," грн"]})]}),u.jsx(n7,{children:u.jsxs(r7,{children:[u.jsxs(i7,{$discount:c,children:[v.toLocaleString()," грн"]}),c&&u.jsxs(u.Fragment,{children:[u.jsxs(o7,{children:[(l.price*(l.quantity||1)).toLocaleString()," грн"]}),u.jsxs(a7,{children:["-",d,"%"]})]})]})})]},`${l.id}-${s}`)})}),u.jsxs("div",{className:"summary-row",children:[u.jsxs("span",{children:["Товари (",n,")"]}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs("div",{className:"summary-row",children:[u.jsx("span",{children:"Доставка"}),u.jsx("span",{children:"За тарифами перевізника"})]}),u.jsx("hr",{}),u.jsxs("div",{className:"total",children:[u.jsx("span",{children:"Всього до сплати:"}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs(u7,{children:[u.jsx(d7,{type:"checkbox",id:"noCall",checked:o,onChange:l=>a(l.target.checked)}),u.jsx(f7,{htmlFor:"noCall",children:"Не передзвонювати"})]}),u.jsx(QN,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&u.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var bk={exports:{}};function h7(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var gf=h7(x),m7=Bc;function g7(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function uh(){return(uh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v7(e,t){e.prototype=Object.create(t.prototype),g7(e.prototype.constructor=e,t)}function x7(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function Ei(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y7=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,l],f=0;(s=new Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},dx=y7;function fx(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function b7(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var w7={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},S7="_";function px(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=S7),n==null&&(n=w7),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Vt(e,t){return e.permanents.indexOf(t)!==-1}function qu(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Vt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function hx(e,t){return t.split("").every(function(n,r){return Vt(e,r)||!qu(e,r,n)})}function ta(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Vt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Vt(e,o)&&qu(e,o,a)){i=o+1;break}}return i}function wk(e,t){return ta(e,t)===e.mask.length}function Un(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=dh(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Vt(e,t.length);)t+=r[t.length];return t}if(t)return dh(e,Un(e,""),t,0);for(var o=0;o<r.length;o++)Vt(e,o)?t+=r[o]:t+=n;return t}function C7(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(f,d){return d<n||i<=d?f:Vt(e,d)?a[d]:o}).join("");for(var c=i;c<s.length;c++)Vt(e,c)&&(s[c]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Un(e,t)}function dh(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=wk(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(c){for(;m=c,Vt(e,v=r)&&m!==i[v];){if(r>=t.length&&(t+=i[r]),f=c,d=r,o&&Vt(e,d)&&f===o)return!0;if(++r>=i.length)return!1}var f,d,v,m;return!qu(e,r,c)&&c!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),Un(e,t)):o||(t+=c),++r<i.length)}),t}function k7(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;f=s,Vt(e,c=r)&&f!==i[c];)if(++r>=i.length)return!1;var c,f;return(qu(e,r,s)||s===o)&&r++,r<i.length}),r-l}function _7(e,t){for(var n=t;0<=n;--n)if(!Vt(e,n))return n;return null}function ha(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Vt(e,r))return r;return null}function vf(e){return e||e===0?e+"":""}function E7(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,c="",f=0,d=0,v=Math.min(i.start,n.start);return n.end>i.start?d=(f=k7(e,r,c=s.slice(i.start,n.end),v))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(v=i.start===n.start?ha(e,n.start):_7(e,n.start)),s=C7(e,s,v,d)),s=dh(e,s,c,v),(v+=f)>=o.length?v=o.length:v<a.length&&!f?v=a.length:v>=a.length&&v<l&&f&&(v=ha(e,v)),c||(c=null),{value:s=Un(e,s),enteredString:c,selection:{start:v,end:v}}}function P7(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function Ct(e){return typeof e=="function"}function j7(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function Sk(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function mx(e){return(Sk()?j7():function(){return setTimeout(e,1e3/60)})(e)}function xf(e){(Sk()||clearTimeout)(e)}var T7=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=mx(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(xf(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var g=m7.findDOMNode(Ei(Ei(i))),y=typeof window<"u"&&g instanceof window.Element;if(g&&!y)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},i.getInputValue=function(){var g=i.getInputDOMNode();return g?g.value:null},i.setInputValue=function(g){var y=i.getInputDOMNode();y&&(i.value=g,y.value=g)},i.setCursorToEnd=function(){var g=ta(i.maskOptions,i.value),y=ha(i.maskOptions,g);y!==null&&i.setCursorPosition(y)},i.setSelection=function(g,y,w){w===void 0&&(w={});var p=i.getInputDOMNode(),h=i.isFocused();p&&h&&(w.deferred||fx(p,g,y),i.selectionDeferId!==null&&xf(i.selectionDeferId),i.selectionDeferId=mx(function(){i.selectionDeferId=null,fx(p,g,y)}),i.previousSelection={start:g,end:y,length:Math.abs(y-g)})},i.getSelection=function(){return b7(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(g){i.setSelection(g,g)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var g=i.maskOptions,y=g.mask,w=g.maskChar,p=g.permanents,h=g.formatChars;return{mask:y,maskChar:w,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:h}},i.isInputAutofilled=function(g,y,w,p){var h=i.getInputDOMNode();try{if(h.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<w.length&&y.end===g.length},i.onChange=function(g){var y=Ei(Ei(i)).beforePasteState,w=Ei(Ei(i)).previousSelection,p=i.props.beforeMaskedValueChange,h=i.getInputValue(),b=i.value,C=i.getSelection();i.isInputAutofilled(h,C,b,w)&&(b=Un(i.maskOptions,""),w={start:0,end:0,length:0}),y&&(w=y.selection,b=y.value,C={start:w.start+h.length,end:w.start+h.length,length:0},h=b.slice(0,w.start)+h+b.slice(w.end),i.beforePasteState=null);var k=E7(i.maskOptions,h,C,b,w),P=k.enteredString,E=k.selection,_=k.value;if(Ct(p)){var T=p({value:_,selection:E},{value:b,selection:w},P,i.getBeforeMaskedValueChangeConfig());_=T.value,E=T.selection}i.setInputValue(_),Ct(i.props.onChange)&&i.props.onChange(g),i.isWindowsPhoneBrowser?i.setSelection(E.start,E.end,{deferred:!0}):i.setSelection(E.start,E.end)},i.onFocus=function(g){var y=i.props.beforeMaskedValueChange,w=i.maskOptions,p=w.mask,h=w.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)ta(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var b=Un(i.maskOptions,h),C=Un(i.maskOptions,b),k=ta(i.maskOptions,C),P=ha(i.maskOptions,k),E={start:P,end:P};if(Ct(y)){var _=y({value:C,selection:E},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());C=_.value,E=_.selection}var T=C!==i.getInputValue();T&&i.setInputValue(C),T&&Ct(i.props.onChange)&&i.props.onChange(g),i.setSelection(E.start,E.end)}i.runSaveSelectionLoop()}Ct(i.props.onFocus)&&i.props.onFocus(g)},i.onBlur=function(g){var y=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&hx(i.maskOptions,i.value)){var p="";Ct(y)&&(p=y({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var h=p!==i.getInputValue();h&&i.setInputValue(p),h&&Ct(i.props.onChange)&&i.props.onChange(g)}Ct(i.props.onBlur)&&i.props.onBlur(g)},i.onMouseDown=function(g){if(!i.focused&&document.addEventListener){i.mouseDownX=g.clientX,i.mouseDownY=g.clientY,i.mouseDownTime=new Date().getTime();var y=function w(p){if(document.removeEventListener("mouseup",w),i.focused){var h=Math.abs(p.clientX-i.mouseDownX),b=Math.abs(p.clientY-i.mouseDownY),C=Math.max(h,b),k=new Date().getTime()-i.mouseDownTime;(C<=10&&k<=200||C<=5&&k<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",y)}Ct(i.props.onMouseDown)&&i.props.onMouseDown(g)},i.onPaste=function(g){Ct(i.props.onPaste)&&i.props.onPaste(g),g.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(g){i.props.children==null&&Ct(i.props.inputRef)&&i.props.inputRef(g)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,c=r.beforeMaskedValueChange,f=r.defaultValue,d=r.value;i.maskOptions=px(o,a,l),f==null&&(f=""),d==null&&(d=f);var v=vf(d);if(i.maskOptions.mask&&(s||v)&&(v=Un(i.maskOptions,v),Ct(c))){var m=r.value;r.value==null&&(m=f),v=c({value:v,selection:null},{value:m=vf(m),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=v,i}v7(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=P7(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,c=i.formatChars,f=this.maskOptions,d=a||this.isFocused(),v=this.props.value!=null,m=v?vf(this.props.value):this.value,g=r?r.start:null;if(this.maskOptions=px(l,s,c),this.maskOptions.mask){!f.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==f.mask;if(f.mask||v||(m=this.getInputValue()),(y||this.maskOptions.mask&&(m||d))&&(m=Un(this.maskOptions,m)),y){var w=ta(this.maskOptions,m);(g===null||w<g)&&(g=wk(this.maskOptions,m)?w:ha(this.maskOptions,w))}!this.maskOptions.mask||!hx(this.maskOptions,m)||d||v&&this.props.value||(m="");var p={start:g,end:g};if(Ct(o)){var h=o({value:m,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());m=h.value,p=h.selection}this.value=m;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var C=!1;p.start!=null&&p.end!=null&&(C=!r||r.start!==p.start||r.end!==p.end),(C||b)&&this.setSelection(p.start,p.end)}else f.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&xf(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=x7(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){Ct(o)||dx(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=uh({},a);l.forEach(function(f){return delete s[f]}),r=o(s),l.filter(function(f){return r.props[f]!=null&&r.props[f]!==a[f]}).length&&dx(!1)}else r=gf.createElement("input",uh({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),r=gf.cloneElement(r,c)},t}(gf.Component),O7=T7;bk.exports=O7;var $7=bk.exports;const I7=Ha($7);S.div`
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
`;S.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;S.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
`;S.form`
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
`;const yf=S.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,bf=S.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,wf=S.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f58220; /* Помаранчевий колір з кнопки */
  }
`;S.div`
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
`;const Sf=S.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;S.button`
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
`;S.ul`
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
`;S.li`
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
`;S.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`;S.div`
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
`;const M7=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Контактні дані"}),u.jsxs(yf,{children:[u.jsx(bf,{children:"Прізвище та ім’я"}),u.jsx(wf,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&u.jsx(Sf,{children:n.fullName})]}),u.jsxs(yf,{children:[u.jsx(bf,{children:"Номер телефону"}),u.jsx(I7,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>u.jsx(wf,{...i,type:"tel"})}),n.phone&&u.jsx(Sf,{children:n.phone})]}),u.jsxs(yf,{children:[u.jsx(bf,{children:"E-mail"}),u.jsx(wf,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&u.jsx(Sf,{children:n.email})]})]})},D7=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return u.jsxs("div",{style:{marginBottom:"20px"},children:[u.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),u.jsx(Gu,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&u.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},L7=e=>{if(!e)return"";const t=e.replace(/\D/g,"");return t.length!==10?e:`+38 (${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,8)}-${t.slice(8,10)}`},gx=async(e,t,n)=>{if(!(e!=null&&e.documentId)||!t)return;const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${e.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!r.ok)throw new Error("Не вдалося отримати кошик");const{data:i}=await r.json();await Promise.all(i.map(o=>fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}}))),n(nr())},vx={}.VITE_NP_API_KEY,xx="https://api.novaposhta.ua/v2.0/json/",A7=()=>{const e=Ue(N=>N.cart.items),t=Ke(),n=It(),r=localStorage.getItem("token"),i=x.useMemo(()=>{const N=localStorage.getItem("user");return N?JSON.parse(N):null},[]),[o,a]=x.useState({fullName:"",phone:"+38(0",email:"",city:"",postOffice:""}),[l,s]=x.useState(""),[c,f]=x.useState(null),[d,v]=x.useState(null),[m,g]=x.useState(null),[y,w]=x.useState(null),[p,h]=x.useState([]),[b,C]=x.useState([]),[k,P]=x.useState(null),[E,_]=x.useState(!1),T=x.useRef(!1);x.useEffect(()=>{!i||T.current||(T.current=!0,a({fullName:`${i.last_name||""} ${i.first_name||""}`.trim(),phone:L7(i.phone),email:i.email||""}))},[i]);const I=e.filter(N=>N.available!==!1&&N.stock!==0).reduce((N,V)=>N+(V.new_price??V.price)*V.quantity,0),M=e.filter(N=>N.available!==!1&&N.stock!==0),D=e.filter(N=>N.available!==!1&&N.stock!==0).reduce((N,V)=>N+V.quantity,0),R=(()=>{const N=new Date().getFullYear().toString().slice(-2),V=Date.now().toString().slice(-4),H=Math.floor(100+Math.random()*900);return`${N}${V}${H}`})();x.useEffect(()=>{if(l.length<2)return;const N=setTimeout(async()=>{try{const V=await fetch(xx,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:vx,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:l}})});if(!V.ok)throw new Error(`HTTP помилка: ${V.status}`);const H=await V.json();H.success&&Array.isArray(H.data)?h(H.data.map(G=>({value:G.Ref,label:G.Description}))):(console.warn("API Нової Пошти повернуло помилку або порожній список міст:",H.errors),h([]))}catch(V){console.error("Не вдалося завантажити міста:",V)}},500);return()=>clearTimeout(N)},[l]),x.useEffect(()=>{if(!c||d!=="nova")return;(async()=>{try{const V=await fetch(xx,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:vx,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:c.value}})});if(!V.ok)throw new Error(`HTTP помилка: ${V.status}`);const H=await V.json();H.success&&Array.isArray(H.data)?C(H.data.map(G=>({value:G.Ref,label:G.Description}))):(console.warn("API Нової Пошти повернуло помилку або порожній список відділень:",H.errors),C([]))}catch(V){console.error("Не вдалося завантажити відділення Нової Пошти:",V)}})()},[c,d]);const L=N=>{f(N),a(V=>({...V,city:(N==null?void 0:N.label)||"",postOffice:""})),v(null),g(null),w(null)},z=()=>{const N={};return o.fullName.trim().split(" ").length<2&&(N.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(N.email="Некоректний email"),o.phone.replace(/\D/g,"").length<12&&(N.phone="Номер неповний"),c||(N.city=!0),d==="nova"&&!m&&(N.postOffice=!0),d==="ukr"&&!y&&(N.postOffice=!0),d||(N.delivery=!0),k||(N.payment=!0),N},A=x.useMemo(z,[o,d,m,y,c,k]),j=Object.keys(A).length===0&&e.length>0,$=async N=>{if(N.preventDefault(),!k){alert("Оберіть спосіб оплати");return}const V={"Content-Type":"application/json"};r&&(V.Authorization=`Bearer ${r}`);try{if(!(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:V,body:JSON.stringify({data:{name:o.fullName,phone:o.phone,email:o.email,city:o.city,date:new Date().toISOString(),products:e==null?void 0:e.map(W=>{var q;return{id:W==null?void 0:W.id,name:W==null?void 0:W.name,quantity:W==null?void 0:W.quantity,price:(W==null?void 0:W.new_price)??W.price,image:(q=W==null?void 0:W.images)==null?void 0:q[0].url,slug:W==null?void 0:W.slug}}),status_order:"pending",order_number:R,no_call:E,...(i==null?void 0:i.documentId)&&{user:i.documentId},payment_method:k==="liqpay"?"Онлайн (LiqPay)":k==="cod"?"Післяплата":k==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:d==="nova"?"Нова Пошта":d==="ukr"?"УкрПошта":"Самовивіз",delivery_address:d==="nova"?m==null?void 0:m.label:d==="ukr"?y:"Самовивіз"}})})).ok)throw new Error("Не вдалося створити замовлення");for(const W of e){const q=Math.max(0,W.stock-W.quantity);(await fetch(`https://backenddidiv-production.up.railway.app/api/products/${W.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",...r&&{Authorization:`Bearer ${r}`}},body:JSON.stringify({data:{stock:q,...q===0&&{sold_date:new Date().toISOString()}}})})).ok||console.error(`Не вдалося оновити stock товару ${W.name}`)}if(k==="liqpay"){const W=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:I,order_number:R})}),{data:q,signature:oe}=await W.json();await gx(i,r,n);const he=document.createElement("form");he.method="POST",he.action="https://www.liqpay.ua/api/3/checkout",he.innerHTML=`
        <input type="hidden" name="data" value="${q}" />
        <input type="hidden" name="signature" value="${oe}" />
      `,document.body.appendChild(he),he.requestSubmit();return}const G={...o,name:o.fullName,city:c.label,deliveryMethod:d==="nova"?"Нова Пошта":d==="ukr"?"УкрПошта":"Самовивіз",address:d==="nova"?m==null?void 0:m.label:d==="ukr"?y:"Самовивіз",products:e==null?void 0:e.map(W=>({id:W.id,name:W.name,quantity:W.quantity,price:W.new_price??W.price})),total:I,order_number:R,delivery_address:d==="nova"?m==null?void 0:m.label:d==="ukr"?y:"Самовивіз",payment_method:k==="liqpay"?"Онлайн (LiqPay)":k==="cod"?"Післяплата":k==="bank_transfer"?"Оплата за реквізитами":""};await gx(i,r,n),t("/order-confirmation",{state:{order:G}})}catch(H){console.error(H),alert("Помилка оформлення")}},F=x.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),B=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return u.jsx(s7,{children:u.jsxs(l7,{children:[u.jsxs(c7,{children:[u.jsx(M7,{formData:o,setFormData:a,errors:A}),u.jsx(HN,{cityOptions:p,selectedCity:c,onChange:L,onInputChange:s}),u.jsx(YN,{options:F,value:d,onChange:v,selectedCity:c}),u.jsx(XN,{deliveryMethod:d,officeOptions:b,selectedOffice:m,selectedUkrOffice:y,setSelectedOffice:g,setSelectedUkrOffice:w}),u.jsx(D7,{options:B,value:k,onChange:P,error:A.payment})]}),u.jsx(p7,{cartItems:M,totalAmount:I,totalQuantity:D,isFormValid:j,handleSubmit:$,setNoCall:_,noCall:E})]})})},R7=S.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,z7=S.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,zr=S.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,F7=S.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,N7=S.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,B7=S.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,V7=S.li`
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
`;S.div`
  background: #fff4e5; 
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #ffe3c1;
`;const U7=S.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,yx=S.button`
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
`,W7=()=>{var v,m;const e=Ke(),t=Dn(),[n]=ny(),r=It(),i=(v=t.state)==null?void 0:v.order,o=n.get("orderId"),[a,l]=x.useState(i||null),[s,c]=x.useState(!i);x.useEffect(()=>{r(nr())},[r]),x.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(g=>g.json()).then(g=>{var y;((y=g.data)==null?void 0:y.length)>0&&l(g.data[0]),c(!1)}).catch(()=>c(!1)):c(!1))},[o,i]);const d=((a==null?void 0:a.products)??[]).reduce((g,y)=>g+Number(y.new_price??y.price)*(y.quantity||1),0);return s?u.jsx("div",{children:"Завантаження..."}):a?u.jsxs(R7,{children:[u.jsx(z7,{children:"Дякуємо за ваше замовлення!"}),u.jsxs(zr,{children:["Ваше замовлення ",u.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),u.jsx(zr,{children:"Ми зв’яжемось з Вами в найближчий час"}),u.jsxs(F7,{children:[u.jsx(N7,{children:"Деталі замовлення:"}),u.jsx(B7,{children:(m=a.products)==null?void 0:m.map(g=>u.jsxs(V7,{children:[u.jsxs("span",{className:"item-info",children:[g.name," (x",g.quantity,")"]}),u.jsxs("span",{className:"item-price",children:[(g.new_price??g.price)*(g.quantity||1)," грн"]})]},g.id))}),u.jsxs(zr,{children:[u.jsx("strong",{children:"На суму:"})," ",d," грн."]}),u.jsxs(zr,{children:[u.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),u.jsxs(zr,{children:[u.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),u.jsxs(zr,{children:[u.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),u.jsxs(zr,{children:[u.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),u.jsxs(U7,{children:[u.jsx(yx,{onClick:()=>e("/"),children:"Повернутися на головну"}),u.jsx(yx,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):u.jsxs("div",{children:["Замовлення не знайдено",u.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},H7=S.section`
  background-color: var(--second-background);
`,G7=S.div`
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
`,q7=S.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,Y7=S.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,X7=S.p`

  font-size: 16px;
  color: #666;
`,K7=S.section`
  margin-bottom: 50px;
`,Q7=S.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,Z7=S.section`
  margin-bottom: 60px;
`,J7=S.h2`
  margin-bottom: 30px;
`,e9=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Ns=S.div`
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
`,t9=()=>u.jsxs(H7,{children:[u.jsxs(G7,{children:[u.jsxs(q7,{children:[u.jsx(Y7,{children:"Про Дідів Хлів"}),u.jsx(X7,{children:"Даємо друге життя якісним велозапчастинам"})]}),u.jsxs(K7,{children:[u.jsx(Q7,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),u.jsx(Z2,{})]}),u.jsxs(Z7,{children:[u.jsx(J7,{children:"Наша майстерня"}),u.jsxs(e9,{children:[u.jsx(Ns,{color:"#e2e2e2",children:"Фото майстерні"}),u.jsx(Ns,{color:"#d1d1d1",children:"Процес діагностики"}),u.jsx(Ns,{color:"#bcbcbc",children:"Склад запчастин"}),u.jsx(Ns,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),n9=()=>{const{pathname:e}=Dn();return x.useEffect(()=>{window.scrollTo(0,0)},[e]),null},r9=S.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,i9=S.div`
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
`,o9=S.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,a9=S.p`
  color: #585555;
  margin-bottom: 40px;
`,s9=S.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,l9=S.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Bs=S.div`
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
`,c9=S.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,u9=S.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,d9=S.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,f9=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,bx=S.a`
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
`;S.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;const p9=S.div`
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

 
`,h9=()=>u.jsx(r9,{children:u.jsxs(i9,{children:[u.jsx(o9,{children:"Контакти"}),u.jsx(a9,{children:"Зв’яжіться з нами для консультації або замовлення"}),u.jsxs(s9,{children:[u.jsxs(l9,{children:[u.jsxs(Bs,{children:[u.jsx("h3",{children:"Адреса"}),u.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),u.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),u.jsxs(Bs,{children:[u.jsx("h3",{children:"Телефон"}),u.jsx("p",{children:"+38 (097) 123-45-67"})]}),u.jsxs(Bs,{children:[u.jsx("h3",{children:"Email"}),u.jsx("p",{children:"didivhliv.com"})]}),u.jsxs(Bs,{children:[u.jsx("h3",{children:"Графік роботи"}),u.jsx("p",{children:"З 11:00 - 20:00"}),u.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),u.jsxs(c9,{children:[u.jsx(u9,{children:"Ми в соцмережах"}),u.jsx(d9,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),u.jsxs(f9,{children:[u.jsxs(bx,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-instagram`})}),u.jsx("span",{children:"Instagram"})]}),u.jsxs(bx,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-telegram`})}),u.jsx("span",{children:"Telegram"})]})]}),u.jsx(p9,{children:"Приєднуйся до спільноти!"})]})]})]})}),m9=S.section`
  background-color:  var(--second-background);
`,g9=S.div`
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
  
`,v9=S.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,x9=S.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,y9=S.div`
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
`,b9=S.div`
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
`,w9=S.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;

`,S9=S.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,C9=S.p`
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
 
`;S.p`
 font-size: 17px;
    font-weight: 800;
 
`;S.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;S.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const k9=S.div.attrs({className:"card-buttons"})`
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
`,Ck=S.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
  margin-top: auto; 
 padding-top: 40px; 
`,Ki=S.button`
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
`,_9=S.div`
  position: relative;
  display: inline-block;
  

`,E9=S.button`
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
`,P9=S.div`
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
`,Pi=S.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,kk=S.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,_k=S(Pe)`
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
  
`,j9=S.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,T9=S.div`
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
`,O9=S.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,$9=S.h1`

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

`,I9=S.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,M9=S.div`
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
`;S.div`
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
`;const Ek=S.div`
  position: relative;
`,D9=S.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 padding: 10px;
`,L9=S.p`
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
`,A9=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px 10px;
`;S.span`
  font-size: 16px;
  font-weight: 700;

  &:last-child {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    font-weight: 400;
  }
`;const R9=S.div.attrs({className:"card-buttons"})`
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
`,Cc=S.button`
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
`;S.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;S.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const z9=S.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,F9=S.div`
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
`,ji=S.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,N9=S.button`
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
`,B9=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),i=Ue(k=>k.favorites.items),o=Ue(k=>k.cart.items),[a,l]=x.useState(!1),[s,c]=x.useState("date"),[f,d]=x.useState("asc"),[v,m]=x.useState(1),[g,y]=x.useState(1),w=Ke(),p=It(),h=x.useRef(null);x.useEffect(()=>{const k=P=>{h.current&&!h.current.contains(P.target)&&l(!1)};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[v]),x.useEffect(()=>{(async()=>{const P=new Date,E=new Date;E.setDate(P.getDate()-7);const _=E.toISOString();try{r(!0);const T=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${_}&pagination[page]=${v}&pagination[pageSize]=24`);if(!T.ok)throw new Error(`HTTP error! Status: ${T.status}`);const I=await T.json();t(I.data),y(I.meta.pagination.pageCount)}catch(T){console.error("Помилка при завантаженні продуктів:",T)}finally{r(!1)}})()},[v]);const b=x.useMemo(()=>{const k=[...e],P=E=>E.new_price&&E.new_price<E.price?E.new_price:E.price;switch(s){case"name":return k.sort((E,_)=>f==="asc"?E.name.localeCompare(_.name):_.name.localeCompare(E.name));case"price":return k.sort((E,_)=>{const T=P(E),I=P(_);return f==="asc"?T-I:I-T});case"date":return k.sort((E,_)=>f==="asc"?new Date(E.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(E.createdAt));default:return k}},[s,e,f]),C=(k,P)=>{P.stopPropagation();const E=i.some(_=>_.id===(k==null?void 0:k.id));pi(k,E,p,K)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(hi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):b.length===0?u.jsxs(kk,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),u.jsxs(_k,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Yc,{size:24})]})]}):u.jsxs(m9,{children:[u.jsxs(g9,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(v9,{children:[u.jsx(x9,{children:"Нові товари "}),u.jsxs(_9,{ref:h,children:[u.jsxs(E9,{onClick:()=>l(k=>!k),children:["Сортування",u.jsx(qc,{strokeWidth:.9,size:22})]}),a&&u.jsxs(P9,{children:[u.jsx(Pi,{onClick:()=>{c("name"),d("asc"),l(!1)},children:"А-Я"}),u.jsx(Pi,{onClick:()=>{c("name"),d("desc"),l(!1)},children:"Я-А"}),u.jsx(Pi,{onClick:()=>{c("price"),d("asc"),l(!1)},children:"Ціна ↑"}),u.jsx(Pi,{onClick:()=>{c("price"),d("desc"),l(!1)},children:"Ціна ↓"}),u.jsx(Pi,{onClick:()=>{c("date"),d("desc"),l(!1)},children:"Спочатку новіші"}),u.jsx(Pi,{onClick:()=>{c("date"),d("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(y9,{children:b.map(k=>{var z,A;const P=i.some(j=>j.id===k.id),E=(k==null?void 0:k.available)??!0,_=(k==null?void 0:k.stock)===0,T=o.find(j=>j.id===k.id),M=(T?T.quantity:0)>=(k.stock||0),D=k.new_price&&k.new_price<k.price,O=D?k.new_price:k.price,R=D?Math.round((k.price-k.new_price)/k.price*100):0,L=async(j,$)=>{if($.stopPropagation(),M){K.error("Товар уже у кошику");return}await wo(j,1,p,K)};return u.jsxs(b9,{onClick:()=>w(`/product/${k.slug??k.id}`),$soldOut:_,children:[!E&&u.jsx(Cm,{children:"Бронь"}),u.jsx(km,{children:"Новинка"}),u.jsxs(Ek,{children:[_&&u.jsx(Zc,{children:"Продано"}),u.jsx(w9,{src:((A=(z=k.images)==null?void 0:z[0])==null?void 0:A.url)||er,alt:k.name})]}),u.jsx(C9,{children:k.name}),u.jsxs(S9,{children:[u.jsx(Fu,{children:u.jsxs(Nu,{children:[u.jsxs(Bu,{$discount:D,children:[O.toLocaleString()," грн"]}),D&&u.jsxs(Vu,{children:[k.price.toLocaleString()," грн"]}),D&&u.jsxs(Uu,{children:["-",R,"%"]})]})}),u.jsxs(k9,{children:[E&&!_&&u.jsx(Cc,{onClick:j=>L(k,j),children:u.jsx(bo,{size:24,color:T?"var(--orange-color)":"black",strokeWidth:2})}),!_&&u.jsx(Cc,{onClick:j=>C(k,j),children:u.jsx(Ja,{size:24,fill:P?"#ff4d4f":"none",color:P?"#ff4d4f":"#000000",strokeWidth:P?1:2})})]})]})]},k.id)})}),u.jsxs(Ck,{children:[u.jsx(Ki,{onClick:()=>m(k=>Math.max(k-1,1)),disabled:v===1,children:"Назад"}),Array.from({length:g},(k,P)=>u.jsx(Ki,{onClick:()=>m(P+1),active:v===P+1,children:P+1},P)),u.jsx(Ki,{onClick:()=>m(k=>Math.min(k+1,g)),disabled:v===g,children:"Вперед"})]})]})," "]})},V9=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),[i,o]=x.useState(!1),[a,l]=x.useState("date"),[s,c]=x.useState("desc"),[f,d]=x.useState(1),v=24,m=Ke(),g=It(),y=Ue(_=>_.favorites.items),w=Ue(_=>_.cart.items),p=x.useRef(null);x.useEffect(()=>{const _=T=>{p.current&&!p.current.contains(T.target)&&o(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),x.useEffect(()=>{(async()=>{const T="https://backenddidiv-production.up.railway.app";try{const M=await(await fetch(`${T}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json(),D=Date.now(),O=7*24*60*60*1e3,R=M.data.filter(L=>{if(L.stock>0||!L.sold_date)return!0;const z=new Date(L.sold_date).getTime();return D-z<O});t(R),r(!1)}catch(I){console.log(I)}})()},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[f]);const h=x.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort((T,I)=>s==="asc"?T.name.localeCompare(I.name):I.name.localeCompare(T.name));case"price":return _.sort((T,I)=>s==="asc"?T.new_price-I.new_price:I.new_price-T.new_price);case"date":return _.sort((T,I)=>s==="asc"?new Date(T.createdAt)-new Date(I.createdAt):new Date(I.createdAt)-new Date(T.createdAt));default:return _}},[a,e,s]),b=f*v,C=b-v,k=h.slice(C,b),P=Math.ceil(e.length/v),E=(_,T)=>{T.stopPropagation();const I=y.some(M=>M.id===(_==null?void 0:_.id));pi(_,I,g,K)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(hi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?u.jsxs(kk,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),u.jsxs(_k,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Yc,{size:24})]})]}):u.jsx(j9,{children:u.jsxs(T9,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(O9,{children:[u.jsx($9,{children:"Акційні товари"}),u.jsxs(z9,{ref:p,children:[u.jsxs(N9,{onClick:()=>o(_=>!_),children:["Сортування",u.jsx(qc,{strokeWidth:.9,size:22})]}),i&&u.jsxs(F9,{children:[u.jsx(ji,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),u.jsx(ji,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),u.jsx(ji,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),u.jsx(ji,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),u.jsx(ji,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),u.jsx(ji,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(I9,{children:k.map(_=>{var F,B;const T=_.new_price&&_.new_price<_.price,I=_!=null&&_.createdAt?Date.now()-new Date(_.createdAt).getTime()<7*24*60*60*1e3:!1,M=T?_.new_price:_.price,D=(_==null?void 0:_.available)??!0,O=(_==null?void 0:_.stock)===0,R=T?Math.round((_.price-_.new_price)/_.price*100):0,L=y.some(N=>N.id===_.id),z=w.find(N=>N.id===_.id),j=(z?z.quantity:0)>=(_.stock||0),$=async(N,V)=>{if(V.stopPropagation(),j){K.error("Товар уже у кошику");return}await wo(_,1,g,K)};return u.jsxs(M9,{onClick:()=>m(`/product/${_.slug??_.id}`),style:{cursor:"pointer"},$soldOut:O,children:[" ",I&&u.jsx(km,{children:"Новинка"}),!D&&u.jsx(Cm,{children:"Бронь"}),u.jsxs(Ek,{children:[O&&u.jsx(Zc,{children:"Продано"}),u.jsx(D9,{src:((B=(F=_.images)==null?void 0:F[0])==null?void 0:B.url)||"/nofoto.png"})]}),u.jsx(L9,{children:_.name}),u.jsxs(A9,{children:[u.jsx(Fu,{children:u.jsxs(Nu,{children:[u.jsxs(Bu,{$discount:T,children:[M.toLocaleString()," грн"]}),T&&u.jsxs(Vu,{children:[_.price.toLocaleString()," грн"]}),T&&u.jsxs(Uu,{children:["-",R,"%"]})]})}),u.jsxs(R9,{children:[D&&!O&&u.jsx(Cc,{onClick:N=>$(_,N),children:u.jsx(bo,{size:24,color:z?"var(--orange-color)":"black",strokeWidth:2})}),!O&&u.jsx(Cc,{onClick:N=>E(_,N),children:u.jsx(Ja,{size:24,fill:L?"#ff4d4f":"none",color:L?"#ff4d4f":"#000000",strokeWidth:L?1:2})})]})]})]},_.id)})}),h.length>v&&u.jsxs(Ck,{children:[u.jsx(Ki,{onClick:()=>d(_=>Math.max(_-1,1)),disabled:f===1,children:"Назад"}),Array.from({length:P},(_,T)=>u.jsx(Ki,{onClick:()=>d(T+1),active:f===T+1,children:T+1},T)),u.jsx(Ki,{onClick:()=>d(_=>Math.min(_+1,P)),disabled:f===P,children:"Вперед"})]})]})})},U9=S.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;
`,W9=S.div`
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
`,H9=S.button`
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
`,G9=S.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,q9=S.p`
  text-align: center;
  color: #8d837d;

  margin-bottom: 32px;
`,Y9=S.div`
  display: flex;

  background: #efe8df;

  border-radius: 40px;

  padding: 5px;

  margin-bottom: 35px;
`,wx=S.button`
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
`,Go=S.input`
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
`,X9=S.button`
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
`,Sx=S.div`
  position: relative;
  width: 100%;
`,Cx=S.button`
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
`,K9=S.p`
  margin: 10px 0;
  color: #2e7d32;
  font-size: 14px;
  text-align: center;
`,Q9=S.p`
  margin-top: 28px;

  text-align: center;

  color: #8b817a;

  font-size: 15px;

  span {
    color: #ff7a00;
    cursor: pointer;
    font-weight: 600;
  }
`,Z9=S.p`
  margin-bottom: 20px;

  text-align: center;

  color: #8b817a;

  font-size: 15px;

  span {
    color: #ff7a00;
    cursor: pointer;
    font-weight: 600;
  }
`,Vs=S.p`
  margin: -8px 0 8px;
  color: var(--red-color);
  font-size: 15px;
  margin-bottom: 20px;
`,J9=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[product][documentId][$eq]=${r.documentId}&populate=user`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=l.user||[];if(s.some(d=>d.documentId===n))return;const f=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{user:[...s.map(d=>d.documentId),n]}})});f.ok||console.error(await f.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:[n]}})});a.ok||console.error(await a.json())}))},eB=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${n}&filters[product][documentId][$eq]=${r.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{quantity:r.quantity}})});s.ok||console.error(await s.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:n,quantity:r.quantity}})});a.ok||console.error(await a.json())}))},tB=async(e,t)=>{const n=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${t}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${e}`}});if(!n.ok)throw new Error("Не вдалося отримати кошик");return(await n.json()).data.map(i=>i.product?{...i.product,quantity:i.quantity}:null).filter(Boolean)},nB=({isOpen:e,onClose:t,mode:n,setMode:r,localFavorites:i,localCartItems:o})=>{const[a,l]=x.useState(!1),[s,c]=x.useState(!1),[f,d]=x.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),[v,m]=x.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),[g,y]=x.useState(!1),w=It();if(x.useEffect(()=>{const _=T=>{T.key==="Escape"&&t()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[t]),!e)return null;const p=_=>{const{name:T,value:I}=_.target;m(M=>({...M,[T]:I})),d(M=>({...M,[T]:""}))},h=_=>{_.target===_.currentTarget&&t()},b=async()=>{d({first_name:"",last_name:"",email:"",password:"",confirmPassword:""});const _=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:v.email,password:v.password})}),T=await _.json();if(!_.ok){d({email:"Неправильна електронна пошта або пароль",password:"Неправильна електронна пошта або пароль",confirmPassword:""});return}localStorage.setItem("token",T.jwt),localStorage.setItem("user",JSON.stringify(T.user)),await J9(i,T.jwt,T.user.documentId),await eB(o,T.jwt,T.user.documentId);const I=await tB(T.jwt,T.user.documentId);w(hS(I)),t()},C=async()=>{var M,D,O,R,L,z;d({email:"",password:"",confirmPassword:""});const _=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!v.first_name.trim()){d(A=>({...A,first_name:"Введіть ім'я"}));return}if(!v.last_name.trim()){d(A=>({...A,last_name:"Введіть прізвище"}));return}if(!v.email.trim()){d(A=>({...A,email:"Введіть електронну пошту"}));return}if(!_.test(v.email)){d(A=>({...A,email:"Введіть правильну електронну пошту"}));return}if(!v.password){d(A=>({...A,password:"Введіть пароль"}));return}if(v.password.length<6){d(A=>({...A,password:"Пароль має містити щонайменше 6 символів"}));return}if(v.password!==v.confirmPassword){d(A=>({...A,confirmPassword:"Паролі не співпадають"}));return}const T=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:v.email,email:v.email,password:v.password})}),I=await T.json();if(!T.ok){(D=(M=I.error)==null?void 0:M.message)!=null&&D.toLowerCase().includes("already")||(R=(O=I.error)==null?void 0:O.message)!=null&&R.toLowerCase().includes("taken")||(z=(L=I.error)==null?void 0:L.message)!=null&&z.toLowerCase().includes("email")?d(A=>({...A,email:"Ця пошта вже зареєстрована"})):d(A=>{var j;return{...A,email:((j=I.error)==null?void 0:j.message)||"Не вдалося зареєструватися"}});return}localStorage.setItem("token",I.jwt);try{const A=localStorage.getItem("token");localStorage.setItem("user",JSON.stringify(I.user));const j=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${I.user.id}`,{method:"PUT",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:v.first_name,last_name:v.last_name})});if(!j.ok)throw new Error("Помилка оновлення");const $=await j.json();localStorage.setItem("user",JSON.stringify($))}catch(A){console.error(A),alert("Не вдалося оновити дані")}t()},k=()=>{r("forgotPassword"),y(!1),d({first_name:"",last_name:"",email:"",password:"",confirmPassword:""})},P=_=>{r(_),d({email:"",password:"",confirmPassword:""})},E=async()=>{if(d({email:"",password:"",confirmPassword:""}),!v.email.trim()){d(T=>({...T,email:"Введіть електронну пошту"}));return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)){d(T=>({...T,email:"Введіть правильну електронну пошту"}));return}try{const T=await fetch("https://backenddidiv-production.up.railway.app/api/auth/forgot-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:v.email})}),I=await T.json();if(!T.ok){d(M=>{var D;return{...M,email:((D=I.error)==null?void 0:D.message)||"Не вдалося надіслати лист"}});return}y(!0)}catch(T){console.error(T),d(I=>({...I,email:"Помилка з’єднання із сервером"}))}};return u.jsxs(u.Fragment,{children:[" ",u.jsx(Ln,{autoClose:1500}),u.jsx(U9,{onClick:h,children:u.jsxs(W9,{children:[u.jsx(H9,{onClick:t,children:"×"}),u.jsx(G9,{children:n==="login"?"Вхід":n==="register"?"Реєстрація":"Відновлення пароля"}),u.jsx(q9,{children:n==="login"?"Увійдіть до свого акаунта":n==="register"?"Створіть новий акаунт":"Введіть email, щоб отримати посилання для відновлення пароля"}),u.jsxs(Y9,{children:[u.jsx(wx,{active:n==="login",onClick:()=>P("login"),children:"Вхід"}),u.jsx(wx,{active:n==="register",onClick:()=>P("register"),children:"Реєстрація"})]}),n==="register"&&u.jsxs(u.Fragment,{children:[u.jsx(Go,{name:"first_name",value:v.first_name,onChange:p,placeholder:"Ім'я"}),f.first_name&&u.jsx(Vs,{children:f.first_name}),u.jsx(Go,{name:"last_name",value:v.last_name,onChange:p,placeholder:"Прізвище"}),f.last_name&&u.jsx(Vs,{children:f.last_name})]}),u.jsx(Go,{name:"email",type:"email",value:v.email,onChange:p,placeholder:"Email"}),n!=="forgotPassword"&&u.jsxs(u.Fragment,{children:[u.jsxs(Sx,{children:[u.jsx(Go,{name:"password",type:a?"text":"password",value:v.password,onChange:p,placeholder:"Пароль"}),u.jsx(Cx,{type:"button",onClick:()=>l(_=>!_),children:a?u.jsx(Qr,{size:20}):u.jsx(Zr,{size:20})})]}),f.password&&u.jsx(Vs,{children:f.password})]}),n==="register"&&u.jsxs(Sx,{children:[u.jsx(Go,{name:"confirmPassword",type:s?"text":"password",value:v.confirmPassword,onChange:p,placeholder:"Повторіть пароль"}),u.jsx(Cx,{type:"button",onClick:()=>c(_=>!_),children:s?u.jsx(Qr,{size:20}):u.jsx(Zr,{size:20})})]}),f.confirmPassword&&u.jsx(Vs,{children:f.confirmPassword}),n==="login"&&u.jsx(Z9,{children:u.jsx("span",{onClick:k,children:"Забули пароль?"})}),n==="forgotPassword"&&g&&u.jsx(K9,{children:"Перевірте свою пошту. Ми надіслали вам посилання для відновлення пароля."}),u.jsx(X9,{disabled:n==="forgotPassword"&&g,onClick:n==="login"?b:n==="register"?C:E,children:n==="login"?"Увійти":n==="register"?"Зареєструватися":"Надіслати посилання"}),u.jsx(Q9,{children:n==="login"?u.jsxs(u.Fragment,{children:["Немає акаунта?"," ",u.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):u.jsxs(u.Fragment,{children:["Вже є акаунт?"," ",u.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})," "]})},rB=({isLoggedIn:e,children:t})=>e?t:u.jsx(G_,{to:"/",replace:!0}),iB=S.main`
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

`,oB=S.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`,aB=S.aside`
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
`,sB=S.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,lB=S.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,cB=S.h3`
  margin-bottom: 4px;
`,uB=S.p`
  color: #777;
`,kx=S.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Us=S(ty)`
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
`,dB=S.div`
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
`,fB=S.div`
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
`,pB=S.h2`
  margin: 0 0 14px;

  text-align: center;

  color:var(--black-color);
  font-family: var(--second-font);

  font-size: 28px;
  font-weight: 300;
`,hB=S.p`
  margin: 0 auto 32px;
   font-family: var(--second-font);

  max-width: 360px;

  text-align: center;

  color: #3c3734;

  font-size: 16px;
  line-height: 1.6;
`,mB=S.div`
  display: flex;
  gap: 14px;

  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,gB=S.button`
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
`,vB=S.button`
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
`,Pk=({onClose:e,onConfirm:t})=>u.jsx(dB,{onClick:e,children:u.jsxs(fB,{onClick:n=>n.stopPropagation(),children:[u.jsx(pB,{children:"Вийти з акаунту?"}),u.jsx(hB,{children:"Ви впевнені, що хочете вийти з особистого кабінету?"}),u.jsxs(mB,{children:[u.jsx(gB,{onClick:e,children:"Скасувати"}),u.jsx(vB,{onClick:t,children:"Вийти"})]})]})}),xB=()=>{var c,f;const[e,t]=x.useState(""),[n,r]=x.useState(""),[i,o]=x.useState(!1),a=It(),l=Ke();x.useEffect(()=>{(async()=>{try{const v=localStorage.getItem("token"),g=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${v}`}})).json();t(g.first_name),r(g.email)}catch(v){console.error(v)}})()},[]);const s=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),a(rs()),a(nr()),await zu.purge(),l("/",{replace:!0})};return u.jsxs(aB,{children:[i&&u.jsx(Pk,{onClose:()=>o(!1),onConfirm:s}),u.jsxs(sB,{children:[u.jsx(lB,{children:((f=(c=e||e)==null?void 0:c[0])==null?void 0:f.toUpperCase())||"?"}),u.jsxs("div",{children:[u.jsx(cB,{children:e}),u.jsx(uB,{children:n})]})]}),u.jsxs(kx,{children:[u.jsxs(kx,{children:[u.jsx(Us,{to:"/account/profile",children:"Особисті дані"}),u.jsx(Us,{to:"/account/orders",children:"Замовлення"}),u.jsx(Us,{to:"/account/password",children:"Змінити пароль"})]}),u.jsx(Us,{as:"button",className:"logout",onClick:()=>o(!0),children:"Вийти"})]})]})};var wg={};wg.match=kB;wg.parse=jk;var yB=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,bB=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,wB=/^(?:(min|max)-)?(.+)/,SB=/(em|rem|px|cm|mm|in|pt|pc)?$/,CB=/(dpi|dpcm|dppx)?$/;function kB(e,t){return jk(e).some(function(n){var r=n.inverse,i=n.type==="all"||t.type===n.type;if(i&&r||!(i||r))return!1;var o=n.expressions.every(function(a){var l=a.feature,s=a.modifier,c=a.value,f=t[l];if(!f)return!1;switch(l){case"orientation":case"scan":return f.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=Px(c),f=Px(f);break;case"resolution":c=Ex(c),f=Ex(f);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=_x(c),f=_x(f);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,f=parseInt(f,10)||0;break}switch(s){case"min":return f>=c;case"max":return f<=c;default:return f===c}});return o&&!r||!o&&r})}function jk(e){return e.split(",").map(function(t){t=t.trim();var n=t.match(yB),r=n[1],i=n[2],o=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(l){var s=l.match(bB),c=s[1].toLowerCase().match(wB);return{modifier:c[1],feature:c[2],value:s[2]}}),a})}function _x(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function Ex(e){var t=parseFloat(e),n=String(e).match(CB)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function Px(e){var t=parseFloat(e),n=String(e).match(SB)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var _B=wg.match,jx=typeof window<"u"?window.matchMedia:null;function EB(e,t,n){var r=this,i;jx&&!n&&(i=jx.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=_B(e,t),this.media=e),this.addListener=o,this.removeListener=a,this.dispose=s;function o(c){i&&i.addListener(c)}function a(c){i&&i.removeListener(c)}function l(c){r.matches=c.matches,r.media=c.media}function s(){i&&i.removeListener(l)}}function PB(e,t,n){return new EB(e,t,n)}var jB=PB;const TB=Ha(jB);var OB=/[A-Z]/g,$B=/^ms-/,Cf={};function IB(e){return"-"+e.toLowerCase()}function Tk(e){if(Cf.hasOwnProperty(e))return Cf[e];var t=e.replace(OB,IB);return Cf[e]=$B.test(t)?"-"+t:t}function MB(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let o=0;o<i;o++){const a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var Ok={exports:{}},DB="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",LB=DB,AB=LB;function $k(){}function Ik(){}Ik.resetWarningCache=$k;var RB=function(){function e(r,i,o,a,l,s){if(s!==AB){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ik,resetWarningCache:$k};return n.PropTypes=n,n};Ok.exports=RB();var zB=Ok.exports;const pe=Ha(zB),ht=pe.oneOfType([pe.string,pe.number]),Sg={all:pe.bool,grid:pe.bool,aural:pe.bool,braille:pe.bool,handheld:pe.bool,print:pe.bool,projection:pe.bool,screen:pe.bool,tty:pe.bool,tv:pe.bool,embossed:pe.bool},Mk={orientation:pe.oneOf(["portrait","landscape"]),scan:pe.oneOf(["progressive","interlace"]),aspectRatio:pe.string,deviceAspectRatio:pe.string,height:ht,deviceHeight:ht,width:ht,deviceWidth:ht,color:pe.bool,colorIndex:pe.bool,monochrome:pe.bool,resolution:ht,type:Object.keys(Sg)},{type:qV,...FB}=Mk,Dk={minAspectRatio:pe.string,maxAspectRatio:pe.string,minDeviceAspectRatio:pe.string,maxDeviceAspectRatio:pe.string,minHeight:ht,maxHeight:ht,minDeviceHeight:ht,maxDeviceHeight:ht,minWidth:ht,maxWidth:ht,minDeviceWidth:ht,maxDeviceWidth:ht,minColor:pe.number,maxColor:pe.number,minColorIndex:pe.number,maxColorIndex:pe.number,minMonochrome:pe.number,maxMonochrome:pe.number,minResolution:ht,maxResolution:ht,...FB},NB={...Sg,...Dk};var BB={all:NB,types:Sg,matchers:Mk,features:Dk};const VB=e=>`not ${e}`,UB=(e,t)=>{const n=Tk(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?VB(n):`(${n}: ${t})`},WB=e=>e.join(" and "),HB=e=>{const t=[];return Object.keys(BB.all).forEach(n=>{const r=e[n];r!=null&&t.push(UB(n,r))}),WB(t)},GB=x.createContext(void 0),qB=e=>e.query||HB(e),Tx=e=>e?Object.keys(e).reduce((n,r)=>(n[Tk(r)]=e[r],n),{}):void 0,Lk=()=>{const e=x.useRef(!1);return x.useEffect(()=>{e.current=!0},[]),e.current},YB=e=>{const t=x.useContext(GB),n=()=>Tx(e)||Tx(t),[r,i]=x.useState(n);return x.useEffect(()=>{const o=n();MB(r,o)||i(o)},[e,t]),r},XB=e=>{const t=()=>qB(e),[n,r]=x.useState(t);return x.useEffect(()=>{const i=t();n!==i&&r(i)},[e]),n},KB=(e,t)=>{const n=()=>TB(e,t||{},!!t),[r,i]=x.useState(n),o=Lk();return x.useEffect(()=>{if(o){const a=n();return i(a),()=>{a&&a.dispose()}}},[e,t]),r},QB=e=>{const[t,n]=x.useState(e.matches);return x.useEffect(()=>{const r=i=>{n(i.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},ZB=(e,t,n)=>{const r=YB(t),i=XB(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const o=KB(i,r),a=QB(o),l=Lk();return x.useEffect(()=>{l&&n&&n(a)},[a]),x.useEffect(()=>()=>{o&&o.dispose()},[]),a},JB=S.div`
  margin-bottom: 24px;
`,eV=S.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,tV=S.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,nV=S.h3`
  margin-bottom: 4px;
`,rV=S.p`
  color: #777;
`,iV=S.button`
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
`,oV=S.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`,Ws=S(ty)`
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
`,aV=()=>{var g,y;const[e,t]=x.useState(!1),[n,r]=x.useState(!1),[i,o]=x.useState(""),[a,l]=x.useState(""),s=It(),c=Ke(),f=Dn(),d=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),s(rs()),s(nr()),await zu.purge(),c("/",{replace:!0})};x.useEffect(()=>{(async()=>{try{const p=localStorage.getItem("token"),b=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${p}`}})).json();o(b.first_name),l(b.email)}catch(p){console.error(p)}})()},[]);const m={"/account":"Особисті дані","/account/profile":"Особисті дані","/account/orders":"Замовлення","/account/favorites":"Обране","/account/password":"Змінити пароль"}[f.pathname]||"Особисті дані";return u.jsxs(JB,{children:[n&&u.jsx(Pk,{onClose:()=>r(!1),onConfirm:d}),u.jsxs(eV,{children:[u.jsx(tV,{children:((y=(g=i||i)==null?void 0:g[0])==null?void 0:y.toUpperCase())||"?"}),u.jsxs("div",{children:[u.jsx(nV,{children:i}),u.jsx(rV,{children:a})]})]}),u.jsxs(iV,{onClick:()=>t(w=>!w),children:[m,e?u.jsx($O,{size:22}):u.jsx(TO,{size:22})]}),e&&u.jsxs(oV,{children:[u.jsx(Ws,{to:"/account/profile",onClick:()=>t(!1),children:"Особисті дані"}),u.jsx(Ws,{to:"/account/orders",onClick:()=>t(!1),children:"Замовлення"}),u.jsx(Ws,{to:"/account/password",onClick:()=>t(!1),children:"Змінити пароль"}),u.jsx(Ws,{className:"logout",onClick:()=>r(!0),children:"Вийти"})]})]})},sV=()=>{const e=ZB({maxWidth:767});return u.jsxs(iB,{className:"container",children:[e?u.jsx(aV,{}):u.jsx(xB,{}),u.jsx(oB,{children:u.jsx(Jx,{})})]})},lV=S.div`
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
`,cV=S.h2`
  margin-bottom: 28px;
`,Hs=S.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,Gs=S.input`
  height: 52px;

  padding: 0 18px;

  border-radius: 14px;
  border: 1px solid #ddd;

  &:focus {
    outline: none;
    border-color: #ef7d1a;
  }
`,uV=S.button`
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
`,Ox=()=>{const[e,t]=x.useState({first_name:"",last_name:"",email:"",phone:""}),[n,r]=x.useState({first_name:"",last_name:"",email:"",phone:""}),[i,o]=x.useState(null),[a,l]=x.useState(!0),s=Ke();x.useEffect(()=>{(async()=>{try{const m=localStorage.getItem("token"),g=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${m}`}});if(g.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),s("/login",{replace:!0});return}if(!g.ok)throw new Error(`HTTP error: ${g.status}`);const y=await g.json();o(y.id);const w={first_name:y.first_name||"",last_name:y.last_name||"",email:y.email||"",phone:y.phone||""};r(w),t(w)}catch(m){console.error(m)}finally{l(!1)}})()},[s]);const c=v=>{const{name:m,value:g}=v.target;r(y=>({...y,[m]:g}))},f=n.first_name!==e.first_name||n.last_name!==e.last_name||n.phone!==e.phone,d=async()=>{try{const v=localStorage.getItem("token"),m=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${i}`,{method:"PUT",headers:{Authorization:`Bearer ${v}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:n.first_name,last_name:n.last_name,phone:n.phone})});if(!m.ok)throw new Error("Помилка оновлення");const g=await m.json();localStorage.setItem("user",JSON.stringify(g)),t(n),K.success("Дані оновлено успішно")}catch(v){console.error(v),K.error("Не вдалось оновити дані")}};return a?u.jsx("p",{children:"Завантаження..."}):u.jsxs(lV,{children:[u.jsx(Ln,{autoClose:1500}),u.jsx(cV,{children:"Особисті дані"}),u.jsxs(Hs,{children:["Ім я",u.jsx(Gs,{name:"first_name",value:n.first_name,onChange:c})]}),u.jsxs(Hs,{children:["Прізвище",u.jsx(Gs,{name:"last_name",value:n.last_name,onChange:c})]}),u.jsxs(Hs,{children:["Email",u.jsx(Gs,{value:n.email,disabled:!0})]}),u.jsxs(Hs,{children:["Телефон",u.jsx(Gs,{name:"phone",value:n.phone,onChange:c})]}),u.jsx(uV,{onClick:d,disabled:!f,children:"Зберегти"})]})},dV=S.div`
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
`,fV=S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,pV=S.div`
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
     box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  text-align: left;
`,hV=S.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 24px;
`,mV=S.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,gV=S.div`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`,vV=S.div`
  display: flex;
  flex-direction: column;
      align-items: flex-start;
      align-items: flex-start;
       gap: 8px;
`,xV=S.div`
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
`,yV=S.span`
  font-family: var(--second-font);
  font-weight: 700;
  font-size: 16px;
`,bV=S.p`
  font-family: var(--second-font);
  font-weight: 400;
  font-size: 16px;
 `,wV=S.span`
  margin-left: auto;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;

  background-color: ${e=>e.status==="pending"?"#fff0e6":e.status==="confirmed"?"#e8f0fe":e.status==="paid"?"#e6f4ea":e.status==="delivered"?"#e0f2fe":e.status==="done"?"#dcfce7":e.status==="cancelled"?"#fce8e6":"#f1f3f4"};

  color: ${e=>e.status==="pending"?"#d97706":e.status==="confirmed"?"#1a73e8":e.status==="paid"?"#137333":e.status==="delivered"?"#0369a1":e.status==="done"?"#15803d":e.status==="cancelled"?"#d93025":"#5f6368"};
`,SV=S.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,CV=S.div`
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
`,kV=S.div`
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
`,_V=S.div`
  font-family: var(--second-font);
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px dashed #e0e0e0;
  font-size: 13px;
  color: #555;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,EV=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),i=localStorage.getItem("token"),o=(()=>{try{return JSON.parse(localStorage.getItem("user")||"null")}catch{return null}})(),a=Ke(),l={pending:"Створено",confirmed:"Підтверджено",paid:"Сплачено",delivered:"Доставлено",done:"Завершено",cancelled:"Скасовано"};return x.useEffect(()=>{if(!i||!(o!=null&&o.email)){r(!1);return}(async()=>{try{const c=await fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[email][$eq]=${encodeURIComponent(o.email)}`,{headers:{Authorization:`Bearer ${i}`}});if(c.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),a("/login",{replace:!0});return}if(!c.ok)throw new Error(`HTTP ${c.status}`);const f=await c.json(),d=Array.isArray(f)?f:f.data||[];t(d)}catch(c){console.error("Помилка завантаження замовлень:",c)}finally{r(!1)}})()},[i,o==null?void 0:o.email,a]),u.jsx(dV,{children:u.jsx(fV,{children:u.jsxs(pV,{children:[u.jsx(hV,{children:"Мої замовлення"}),n?u.jsx("p",{children:"Завантаження замовлень..."}):e.length===0?u.jsx("p",{children:"У вас поки немає замовлень."}):u.jsx(mV,{children:[...e].sort((s,c)=>{var v,m;const f=new Date(((v=s.attributes)==null?void 0:v.date)||s.date);return new Date(((m=c.attributes)==null?void 0:m.date)||c.date)-f}).map(s=>{const c=s.attributes||s,f=typeof c.products=="string"?JSON.parse(c.products):c.products||[];return u.jsxs(gV,{children:[u.jsxs(xV,{children:[u.jsxs(vV,{children:[u.jsxs(yV,{children:["№ ",c.order_number]}),c.date&&u.jsxs(bV,{children:["Дата створення замовлення:"," ",new Date(c.date).toLocaleDateString("uk-UA")]})]}),u.jsx(wV,{status:c.status_order,children:l[c.status_order]||"Створено"})]}),u.jsx(SV,{children:f.map(d=>u.jsxs(CV,{onClick:()=>a(`/product/${d.slug}`),children:[u.jsx("img",{src:d.image||er,alt:d.name}),u.jsxs(kV,{children:[u.jsx("p",{children:d.name}),u.jsxs("span",{children:[d.quantity," шт. × ",d.price," грн"]})]})]},d.id))}),u.jsxs(_V,{children:[c.city&&u.jsxs("span",{children:[u.jsx("b",{children:"Місто:"})," ",c.city]}),c.delivery_method&&u.jsxs("span",{children:[u.jsx("b",{children:"Доставка:"})," ",c.delivery_method]}),c.delivery_address&&u.jsxs("span",{children:[u.jsx("b",{children:"Адреса:"})," ",c.delivery_address]}),c.ttn&&u.jsxs("span",{children:[u.jsx("b",{children:"ТТН:"})," ",c.ttn]})]})]},s.id||c.order_number)})})]})})})},PV=S.div`
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
`,jV=S.div`
  width: 100%;
  max-width: 500px;
  margin: 60px auto;
`,$x=S.h1`
  margin: 0 0 12px;

  font-size: 30px;
  line-height: 1.2;
  font-weight: 300;

  color: #312620;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,TV=S.p`
  margin: 0 0 32px;

  font-size: 15px;
  line-height: 1.5;

  color: #8d837d;

  text-align: center;
`,OV=S.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,Ix=S.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  color: #3d2f29;
`,Mx=S.input`
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
`,ma=S.div`
  position: relative;
  width: 100%;
 
`,ga=S.button`
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
`,$V=S.button`
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
`,IV=S.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;`,MV=S.button`
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
`,DV=S.p`
  margin: -8px 0 8px;

  font-size: 14px;
  line-height: 1.4;

  color: #c62828;
`,LV=S.p`
  margin: 20px 0 0;

  font-size: 15px;
  line-height: 1.5;

  color: #555;

  text-align: center;
`,AV=({openLogin:e})=>{const[t]=ny(),n=Ke(),r=t.get("code"),[i,o]=x.useState(""),[a,l]=x.useState(!1),[s,c]=x.useState(!1),[f,d]=x.useState(""),[v,m]=x.useState(""),[g,y]=x.useState(!1),[w,p]=x.useState(!1),h=async C=>{var k;if(C.preventDefault(),m(""),!r){m("Посилання для відновлення пароля недійсне.");return}if(i.length<6){m("Пароль має містити щонайменше 6 символів.");return}if(i!==f){m("Паролі не збігаються.");return}p(!0);try{const P=await fetch("https://backenddidiv-production.up.railway.app/api/auth/reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:r,password:i,passwordConfirmation:f})}),E=await P.json();if(!P.ok)throw new Error(((k=E==null?void 0:E.error)==null?void 0:k.message)||"Не вдалося змінити пароль.");y(!0)}catch{m("Сталася помилка. Спробуйте ще раз.")}finally{p(!1)}},b=()=>{n("/"),e()};return u.jsx(PV,{children:u.jsx(jV,{children:g?u.jsxs(IV,{children:[u.jsx($x,{children:"Пароль змінено"}),u.jsx(LV,{children:"Ваш пароль успішно змінено. Тепер ви можете увійти до свого акаунта."}),u.jsx(MV,{type:"button",onClick:b,children:"Увійти"})]}):u.jsxs(u.Fragment,{children:[u.jsx($x,{children:"Новий пароль"}),u.jsx(TV,{children:"Введіть новий пароль для вашого облікового запису."}),u.jsxs(OV,{onSubmit:h,children:[u.jsxs(Ix,{children:["Новий пароль",u.jsxs(ma,{children:[u.jsx(Mx,{type:a?"text":"password",value:i,onChange:C=>o(C.target.value),placeholder:"Введіть новий пароль",autoComplete:"new-password"}),u.jsx(ga,{type:"button",onClick:()=>l(C=>!C),children:a?u.jsx(Qr,{size:20}):u.jsx(Zr,{size:20})})," "]})]}),u.jsxs(Ix,{children:["Повторіть пароль",u.jsxs(ma,{children:[u.jsx(Mx,{type:s?"text":"password",value:f,onChange:C=>d(C.target.value),placeholder:"Повторіть новий пароль",autoComplete:"new-password"}),u.jsx(ga,{type:"button",onClick:()=>c(C=>!C),children:s?u.jsx(Qr,{size:20}):u.jsx(Zr,{size:20})})]})]}),v&&u.jsx(DV,{children:v}),u.jsx($V,{type:"submit",disabled:w,children:w?"Збереження...":"Змінити пароль"})]})]})})})},RV=S.div`
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
`,zV=S.form`
  width: 100%;
  max-width: 480px;

  margin: 0 auto;
   @media screen and (min-width:768px) {
    margin-right:auto;
    margin-left: 0;
    
  }
`,FV=S.h1`
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
`,NV=S.p`
  margin: 0 0 40px;

  font-size: 17px;
  line-height: 1.5;

  color: #777;
`,kf=S.div`
  display: flex;
  flex-direction: column;
 font-family: var(--second-font);
 font-weight:300;
  margin-bottom: 24px;
`,_f=S.label`
  margin-bottom: 9px;

  font-size: 16px;
  line-height: 1.3;

  color: #333;
`,Ef=S.input`
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
`,BV=S.button`
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
`;S.button`
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
`;const VV=S.p`
  margin: -4px 0 20px;

  font-size: 13px;
  line-height: 1.4;

  color: #b42318;
`,UV=S.p`
  margin: -4px 0 20px;

  font-size: 13px;
  line-height: 1.4;

  color: #26734d;
`,WV=()=>{const[e,t]=x.useState(!1),[n,r]=x.useState(!1),[i,o]=x.useState(!1),[a,l]=x.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[s,c]=x.useState(""),[f,d]=x.useState(""),[v,m]=x.useState(!1),g=w=>{const{name:p,value:h}=w.target;l(b=>({...b,[p]:h})),c(""),d("")},y=async w=>{if(w.preventDefault(),c(""),d(""),!a.currentPassword||!a.newPassword||!a.confirmPassword){c("Заповніть усі поля.");return}if(a.newPassword.length<6){c("Новий пароль повинен містити щонайменше 6 символів.");return}if(a.newPassword!==a.confirmPassword){c("Нові паролі не співпадають.");return}if(a.currentPassword===a.newPassword){c("Новий пароль повинен відрізнятися від поточного.");return}try{m(!0);const p=localStorage.getItem("token"),h=await fetch("https://backenddidiv-production.up.railway.app/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`},body:JSON.stringify({currentPassword:a.currentPassword,password:a.newPassword,passwordConfirmation:a.newPassword})}),b=await h.json().catch(()=>null);if(!h.ok)throw new Error((b==null?void 0:b.message)||"Не вдалося змінити пароль.");d("Пароль успішно змінено."),l({currentPassword:"",newPassword:"",confirmPassword:""})}catch(p){c(p.message||"Сталася помилка. Спробуйте ще раз.")}finally{m(!1)}};return u.jsx(RV,{children:u.jsxs(zV,{onSubmit:y,children:[u.jsx(FV,{children:"Зміна пароля"}),u.jsx(NV,{children:"Введіть поточний пароль і встановіть новий."}),u.jsxs(kf,{children:[u.jsx(_f,{htmlFor:"currentPassword",children:"Поточний пароль"}),u.jsxs(ma,{children:[u.jsx(Ef,{id:"currentPassword",name:"currentPassword",type:e?"text":"password",value:a.currentPassword,onChange:g,autoComplete:"current-password",placeholder:"Введіть поточний пароль"}),u.jsx(ga,{type:"button",onClick:()=>t(w=>!w),children:e?u.jsx(Qr,{size:20}):u.jsx(Zr,{size:20})})]})]}),u.jsxs(kf,{children:[u.jsx(_f,{htmlFor:"newPassword",children:"Новий пароль"}),u.jsxs(ma,{children:[u.jsx(Ef,{id:"newPassword",name:"newPassword",type:n?"text":"password",value:a.newPassword,onChange:g,autoComplete:"new-password",placeholder:"Введіть новий пароль"}),u.jsx(ga,{type:"button",onClick:()=>r(w=>!w),children:n?u.jsx(Qr,{size:20}):u.jsx(Zr,{size:20})})]})]}),u.jsxs(kf,{children:[u.jsx(_f,{htmlFor:"confirmPassword",children:"Підтвердження нового пароля"}),u.jsxs(ma,{children:[u.jsx(Ef,{id:"confirmPassword",name:"confirmPassword",type:i?"text":"password",value:a.confirmPassword,onChange:g,autoComplete:"new-password",placeholder:"Повторіть новий пароль"}),u.jsx(ga,{type:"button",onClick:()=>o(w=>!w),children:i?u.jsx(Qr,{size:20}):u.jsx(Zr,{size:20})})]})]}),s&&u.jsx(VV,{children:s}),f&&u.jsx(UV,{children:f}),u.jsx(BV,{type:"submit",disabled:v,children:v?"Зміна пароля...":"Змінити пароль"})]})})};function HV(){const e=It(),[t,n]=x.useState(!1),[r,i]=x.useState("login"),o=!!localStorage.getItem("token"),a=localStorage.getItem("token"),l=JSON.parse(localStorage.getItem("user")||"null"),s=l==null?void 0:l.documentId,c=Ue(d=>d.favorites.items),f=Ue(d=>d.cart.items);return x.useEffect(()=>{if(!a)return;(async()=>{try{const v=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${a}`}});if(v.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),e(nr()),e(rs()),window.location.reload();return}v.ok||console.error("Auth check error:",v.status)}catch(v){console.error("Помилка перевірки авторизації:",v)}})()},[a,e]),x.useEffect(()=>{if(!a||!s)return;(async()=>{const v=localStorage.getItem("token");if(!v)return;const y=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${s}&populate=product.images`,{headers:{Authorization:`Bearer ${v}`}})).json()).data.map(w=>({...w.product,favoriteId:w.id,favoriteDocumentId:w.documentId}));e(Q$(y))})()},[s,e,a]),u.jsxs(I3,{children:[u.jsx(hM,{}),u.jsx(n9,{}),u.jsxs(x.Suspense,{fallback:u.jsx(fM,{}),children:[u.jsx(Y_,{children:u.jsxs(Te,{path:"/",element:u.jsx(r4,{openLogin:()=>{i("login"),n(!0)},openRegister:()=>{i("register"),n(!0)}}),children:[u.jsx(Te,{index:!0,element:u.jsx(lD,{})}),u.jsx(Te,{path:"catalog",element:u.jsx(E3,{})}),u.jsx(Te,{path:"/catalog/:category",element:u.jsx(JD,{})}),u.jsx(Te,{path:"/product/:identifier",element:u.jsx(hA,{})}),u.jsx(Te,{path:"cart",element:u.jsx(RR,{})}),u.jsx(Te,{path:"favorite",element:u.jsx(WR,{})}),u.jsx(Te,{path:"/catalog/new",element:u.jsx(B9,{})}),u.jsx(Te,{path:"/catalog/sale",element:u.jsx(V9,{})}),u.jsx(Te,{path:"checkout",element:u.jsx(A7,{})}),u.jsx(Te,{path:"/order-confirmation",element:u.jsx(W7,{})}),u.jsx(Te,{path:"about",element:u.jsx(t9,{})}),u.jsx(Te,{path:"contacts",element:u.jsx(h9,{})}),u.jsx(Te,{path:"delivery",element:u.jsx(KR,{})}),u.jsx(Te,{path:"/reset-password",element:u.jsx(AV,{openLogin:()=>{i("login"),n(!0)}})}),u.jsxs(Te,{path:"account",element:u.jsx(rB,{isLoggedIn:o,children:u.jsx(sV,{})}),children:[u.jsx(Te,{index:!0,element:u.jsx(Ox,{})}),u.jsx(Te,{path:"profile",element:u.jsx(Ox,{})}),u.jsx(Te,{path:"orders",element:u.jsx(EV,{})}),u.jsx(Te,{path:"password",element:u.jsx(WV,{})})]}),u.jsx(Te,{path:"*",element:u.jsx($3,{})})]})}),u.jsx(nB,{localFavorites:c,localCartItems:f,isOpen:t,mode:r,onClose:()=>n(!1),setMode:i})]})]})}$f.createRoot(document.getElementById("root")).render(u.jsx(nO,{store:BC,children:u.jsx(Q.StrictMode,{children:u.jsx(tE,{basename:"/Didiv/",children:u.jsx(HV,{})})})}));
