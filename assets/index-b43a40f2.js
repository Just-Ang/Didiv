function Dk(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Va(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function $t(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var $x={exports:{}},Sc={},Ix={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),Lk=Symbol.for("react.portal"),Ak=Symbol.for("react.fragment"),Rk=Symbol.for("react.strict_mode"),zk=Symbol.for("react.profiler"),Fk=Symbol.for("react.provider"),Nk=Symbol.for("react.context"),Bk=Symbol.for("react.forward_ref"),Vk=Symbol.for("react.suspense"),Uk=Symbol.for("react.memo"),Wk=Symbol.for("react.lazy"),bg=Symbol.iterator;function Hk(e){return e===null||typeof e!="object"?null:(e=bg&&e[bg]||e["@@iterator"],typeof e=="function"?e:null)}var Mx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dx=Object.assign,Lx={};function fo(e,t,n){this.props=e,this.context=t,this.refs=Lx,this.updater=n||Mx}fo.prototype.isReactComponent={};fo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ax(){}Ax.prototype=fo.prototype;function sh(e,t,n){this.props=e,this.context=t,this.refs=Lx,this.updater=n||Mx}var lh=sh.prototype=new Ax;lh.constructor=sh;Dx(lh,fo.prototype);lh.isPureReactComponent=!0;var wg=Array.isArray,Rx=Object.prototype.hasOwnProperty,ch={current:null},zx={key:!0,ref:!0,__self:!0,__source:!0};function Fx(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Rx.call(t,r)&&!zx.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ua,type:e,key:o,ref:a,props:i,_owner:ch.current}}function Gk(e,t){return{$$typeof:Ua,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function uh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ua}function qk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sg=/\/+/g;function Xu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qk(""+e.key):t.toString(36)}function Us(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ua:case Lk:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Xu(a,0):r,wg(i)?(n="",e!=null&&(n=e.replace(Sg,"$&/")+"/"),Us(i,t,n,"",function(c){return c})):i!=null&&(uh(i)&&(i=Gk(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Sg,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",wg(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Xu(o,l);a+=Us(o,t,n,s,i)}else if(s=Hk(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Xu(o,l++),a+=Us(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ls(e,t,n){if(e==null)return e;var r=[],i=0;return Us(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Yk(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},Ws={transition:null},Xk={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Ws,ReactCurrentOwner:ch};re.Children={map:ls,forEach:function(e,t,n){ls(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ls(e,function(){t++}),t},toArray:function(e){return ls(e,function(t){return t})||[]},only:function(e){if(!uh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=fo;re.Fragment=Ak;re.Profiler=zk;re.PureComponent=sh;re.StrictMode=Rk;re.Suspense=Vk;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xk;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dx({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ch.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Rx.call(t,s)&&!zx.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ua,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:Nk,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fk,_context:e},e.Consumer=e};re.createElement=Fx;re.createFactory=function(e){var t=Fx.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:Bk,render:e}};re.isValidElement=uh;re.lazy=function(e){return{$$typeof:Wk,_payload:{_status:-1,_result:e},_init:Yk}};re.memo=function(e,t){return{$$typeof:Uk,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Ws.transition;Ws.transition={};try{e()}finally{Ws.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return yt.current.useCallback(e,t)};re.useContext=function(e){return yt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};re.useEffect=function(e,t){return yt.current.useEffect(e,t)};re.useId=function(){return yt.current.useId()};re.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return yt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};re.useRef=function(e){return yt.current.useRef(e)};re.useState=function(e){return yt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return yt.current.useTransition()};re.version="18.2.0";Ix.exports=re;var y=Ix.exports;const Q=Va(y),Sf=Dk({__proto__:null,default:Q},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kk=y,Qk=Symbol.for("react.element"),Zk=Symbol.for("react.fragment"),Jk=Object.prototype.hasOwnProperty,e_=Kk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t_={key:!0,ref:!0,__self:!0,__source:!0};function Nx(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Jk.call(t,r)&&!t_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Qk,type:e,key:o,ref:a,props:i,_owner:e_.current}}Sc.Fragment=Zk;Sc.jsx=Nx;Sc.jsxs=Nx;$x.exports=Sc;var u=$x.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ha.apply(this,arguments)}var hr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hr||(hr={}));const Cg="popstate";function n_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Cf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vl(i)}return i_(t,n,null,e)}function Me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function r_(){return Math.random().toString(36).substr(2,8)}function kg(e,t){return{usr:e.state,key:e.key,idx:t}}function Cf(e,t,n,r){return n===void 0&&(n=null),ha({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?po(t):t,{state:n,key:t&&t.key||r||r_()})}function vl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function po(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function i_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=hr.Pop,s=null,c=d();c==null&&(c=0,a.replaceState(ha({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=hr.Pop;let w=d(),m=w==null?null:w-c;c=w,s&&s({action:l,location:x.location,delta:m})}function v(w,m){l=hr.Push;let p=Cf(x.location,w,m);n&&n(p,w),c=d()+1;let b=kg(p,c),C=x.createHref(p);try{a.pushState(b,"",C)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(C)}o&&s&&s({action:l,location:x.location,delta:1})}function h(w,m){l=hr.Replace;let p=Cf(x.location,w,m);n&&n(p,w),c=d();let b=kg(p,c),C=x.createHref(p);a.replaceState(b,"",C),o&&s&&s({action:l,location:x.location,delta:0})}function g(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:vl(w);return Me(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let x={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Cg,f),s=w,()=>{i.removeEventListener(Cg,f),s=null}},createHref(w){return t(i,w)},createURL:g,encodeLocation(w){let m=g(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:v,replace:h,go(w){return a.go(w)}};return x}var _g;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_g||(_g={}));function o_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?po(t):t,i=fh(r.pathname||"/",n);if(i==null)return null;let o=Bx(e);a_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=m_(o[l],x_(i));return a}function Bx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Me(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=yr([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(Me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Bx(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:p_(c,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Vx(o.path))i(o,a,s)}),t}function Vx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Vx(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function a_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:h_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const s_=/^:\w+$/,l_=3,c_=2,u_=1,d_=10,f_=-2,Eg=e=>e==="*";function p_(e,t){let n=e.split("/"),r=n.length;return n.some(Eg)&&(r+=f_),t&&(r+=c_),n.filter(i=>!Eg(i)).reduce((i,o)=>i+(s_.test(o)?l_:o===""?u_:d_),r)}function h_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function m_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=g_({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!d)return null;Object.assign(r,d.params);let f=l.route;o.push({params:r,pathname:yr([i,d.pathname]),pathnameBase:S_(yr([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=yr([i,d.pathnameBase]))}return o}function g_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=v_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{if(d==="*"){let v=l[f]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return c[d]=y_(l[f]||"",d),c},{}),pathname:o,pathnameBase:a,pattern:e}}function v_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),dh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function x_(e){try{return decodeURI(e)}catch(t){return dh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function y_(e,t){try{return decodeURIComponent(e)}catch(n){return dh(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function fh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function b_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?po(e):e;return{pathname:n?n.startsWith("/")?n:w_(n,t):t,search:C_(r),hash:k_(i)}}function w_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ku(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ph(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=po(e):(i=ha({},e),Me(!i.pathname||!i.pathname.includes("?"),Ku("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),Ku("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),Ku("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let f=t.length-1;if(a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),f-=1;i.pathname=v.join("/")}l=f>=0?t[f]:"/"}let s=b_(i,l),c=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const yr=e=>e.join("/").replace(/\/\/+/g,"/"),S_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,k_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function __(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ux=["post","put","patch","delete"];new Set(Ux);const E_=["get",...Ux];new Set(E_);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xl.apply(this,arguments)}const mh=y.createContext(null),Wx=y.createContext(null),li=y.createContext(null),Cc=y.createContext(null),Mn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Hx=y.createContext(null);function j_(e,t){let{relative:n}=t===void 0?{}:t;ho()||Me(!1);let{basename:r,navigator:i}=y.useContext(li),{hash:o,pathname:a,search:l}=gh(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:yr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function ho(){return y.useContext(Cc)!=null}function Dn(){return ho()||Me(!1),y.useContext(Cc).location}function Gx(e){y.useContext(li).static||y.useLayoutEffect(e)}function Ke(){let{isDataRoute:e}=y.useContext(Mn);return e?V_():P_()}function P_(){ho()||Me(!1);let e=y.useContext(mh),{basename:t,navigator:n}=y.useContext(li),{matches:r}=y.useContext(Mn),{pathname:i}=Dn(),o=JSON.stringify(ph(r).map(s=>s.pathnameBase)),a=y.useRef(!1);return Gx(()=>{a.current=!0}),y.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=hh(s,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:yr([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,o,i,e])}const T_=y.createContext(null);function O_(e){let t=y.useContext(Mn).outlet;return t&&y.createElement(T_.Provider,{value:e},t)}function qx(){let{matches:e}=y.useContext(Mn),t=e[e.length-1];return t?t.params:{}}function gh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=y.useContext(Mn),{pathname:i}=Dn(),o=JSON.stringify(ph(r).map(a=>a.pathnameBase));return y.useMemo(()=>hh(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function $_(e,t){return I_(e,t)}function I_(e,t,n){ho()||Me(!1);let{navigator:r}=y.useContext(li),{matches:i}=y.useContext(Mn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Dn(),c;if(t){var d;let x=typeof t=="string"?po(t):t;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||Me(!1),c=x}else c=s;let f=c.pathname||"/",v=l==="/"?f:f.slice(l.length)||"/",h=o_(e,{pathname:v}),g=R_(h&&h.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:yr([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:yr([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&g?y.createElement(Cc.Provider,{value:{location:xl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:hr.Pop}},g):g}function M_(){let e=B_(),t=__(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:i},n):null,o)}const D_=y.createElement(M_,null);class L_ extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?y.createElement(Mn.Provider,{value:this.props.routeContext},y.createElement(Hx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function A_(e){let{routeContext:t,match:n,children:r}=e,i=y.useContext(mh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Mn.Provider,{value:t},r)}function R_(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Me(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,c)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,f=null;n&&(f=s.route.errorElement||D_);let v=t.concat(o.slice(0,c+1)),h=()=>{let g;return d?g=f:s.route.Component?g=y.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=l,y.createElement(A_,{match:s,routeContext:{outlet:l,matches:v,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?y.createElement(L_,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:h(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):h()},null)}var Yx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yx||{}),yl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(yl||{});function z_(e){let t=y.useContext(mh);return t||Me(!1),t}function F_(e){let t=y.useContext(Wx);return t||Me(!1),t}function N_(e){let t=y.useContext(Mn);return t||Me(!1),t}function Xx(e){let t=N_(),n=t.matches[t.matches.length-1];return n.route.id||Me(!1),n.route.id}function B_(){var e;let t=y.useContext(Hx),n=F_(yl.UseRouteError),r=Xx(yl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function V_(){let{router:e}=z_(Yx.UseNavigateStable),t=Xx(yl.UseNavigateStable),n=y.useRef(!1);return Gx(()=>{n.current=!0}),y.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,xl({fromRouteId:t},o)))},[e,t])}function U_(e){let{to:t,replace:n,state:r,relative:i}=e;ho()||Me(!1);let{matches:o}=y.useContext(Mn),{pathname:a}=Dn(),l=Ke(),s=hh(t,ph(o).map(d=>d.pathnameBase),a,i==="path"),c=JSON.stringify(s);return y.useEffect(()=>l(JSON.parse(c),{replace:n,state:r,relative:i}),[l,c,i,n,r]),null}function Kx(e){return O_(e.context)}function $e(e){Me(!1)}function W_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=hr.Pop,navigator:o,static:a=!1}=e;ho()&&Me(!1);let l=t.replace(/^\/*/,"/"),s=y.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=po(r));let{pathname:c="/",search:d="",hash:f="",state:v=null,key:h="default"}=r,g=y.useMemo(()=>{let x=fh(c,l);return x==null?null:{location:{pathname:x,search:d,hash:f,state:v,key:h},navigationType:i}},[l,c,d,f,v,h,i]);return g==null?null:y.createElement(li.Provider,{value:s},y.createElement(Cc.Provider,{children:n,value:g}))}function H_(e){let{children:t,location:n}=e;return $_(kf(t),n)}new Promise(()=>{});function kf(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let o=[...t,i];if(r.type===y.Fragment){n.push.apply(n,kf(r.props.children,o));return}r.type!==$e&&Me(!1),!r.props.index||!r.props.children||Me(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=kf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bl.apply(this,arguments)}function Qx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function G_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function q_(e,t){return e.button===0&&(!t||t==="_self")&&!G_(e)}function _f(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Y_(e,t){let n=_f(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const X_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],K_=["aria-current","caseSensitive","className","end","style","to","children"],Q_="startTransition",jg=Sf[Q_];function Z_(e){let{basename:t,children:n,future:r,window:i}=e,o=y.useRef();o.current==null&&(o.current=n_({window:i,v5Compat:!0}));let a=o.current,[l,s]=y.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},d=y.useCallback(f=>{c&&jg?jg(()=>s(f)):s(f)},[s,c]);return y.useLayoutEffect(()=>a.listen(d),[a,d]),y.createElement(W_,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const J_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,je=y.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:d}=t,f=Qx(t,X_),{basename:v}=y.useContext(li),h,g=!1;if(typeof c=="string"&&eE.test(c)&&(h=c,J_))try{let p=new URL(window.location.href),b=c.startsWith("//")?new URL(p.protocol+c):new URL(c),C=fh(b.pathname,v);b.origin===p.origin&&C!=null?c=C+b.search+b.hash:g=!0}catch{}let x=j_(c,{relative:i}),w=tE(c,{replace:a,state:l,target:s,preventScrollReset:d,relative:i});function m(p){r&&r(p),p.defaultPrevented||w(p)}return y.createElement("a",bl({},f,{href:h||x,onClick:g||o?r:m,ref:n,target:s}))}),Zx=y.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,children:c}=t,d=Qx(t,K_),f=gh(s,{relative:d.relative}),v=Dn(),h=y.useContext(Wx),{navigator:g}=y.useContext(li),x=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,w=v.pathname,m=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;i||(w=w.toLowerCase(),m=m?m.toLowerCase():null,x=x.toLowerCase());let p=w===x||!a&&w.startsWith(x)&&w.charAt(x.length)==="/",b=m!=null&&(m===x||!a&&m.startsWith(x)&&m.charAt(x.length)==="/"),C=p?r:void 0,S;typeof o=="function"?S=o({isActive:p,isPending:b}):S=[o,p?"active":null,b?"pending":null].filter(Boolean).join(" ");let j=typeof l=="function"?l({isActive:p,isPending:b}):l;return y.createElement(je,bl({},d,{"aria-current":C,className:S,ref:n,style:j,to:s}),typeof c=="function"?c({isActive:p,isPending:b}):c)});var Pg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Pg||(Pg={}));var Tg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tg||(Tg={}));function tE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Ke(),s=Dn(),c=gh(e,{relative:a});return y.useCallback(d=>{if(q_(d,n)){d.preventDefault();let f=r!==void 0?r:vl(s)===vl(c);l(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}function Jx(e){let t=y.useRef(_f(e)),n=y.useRef(!1),r=Dn(),i=y.useMemo(()=>Y_(r.search,n.current?null:t.current),[r.search]),o=Ke(),a=y.useCallback((l,s)=>{const c=_f(typeof l=="function"?l(i):l);n.current=!0,o("?"+c,s)},[o,i]);return[i,a]}var Ef={},ey={exports:{}},Ut={},ty={exports:{}},ny={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,O){var F=P.length;P.push(O);e:for(;0<F;){var B=F-1>>>1,N=P[B];if(0<i(N,O))P[B]=O,P[F]=N,F=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var O=P[0],F=P.pop();if(F!==O){P[0]=F;e:for(var B=0,N=P.length,V=N>>>1;B<V;){var H=2*(B+1)-1,G=P[H],W=H+1,q=P[W];if(0>i(G,F))W<N&&0>i(q,G)?(P[B]=q,P[W]=F,B=W):(P[B]=G,P[H]=F,B=H);else if(W<N&&0>i(q,F))P[B]=q,P[W]=F,B=W;else break e}}return O}function i(P,O){var F=P.sortIndex-O.sortIndex;return F!==0?F:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],d=1,f=null,v=3,h=!1,g=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(P){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=P)r(c),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(c)}}function C(P){if(x=!1,b(P),!g)if(n(s)!==null)g=!0,R(S);else{var O=n(c);O!==null&&z(C,O.startTime-P)}}function S(P,O){g=!1,x&&(x=!1,m(_),_=-1),h=!0;var F=v;try{for(b(O),f=n(s);f!==null&&(!(f.expirationTime>O)||P&&!M());){var B=f.callback;if(typeof B=="function"){f.callback=null,v=f.priorityLevel;var N=B(f.expirationTime<=O);O=e.unstable_now(),typeof N=="function"?f.callback=N:f===n(s)&&r(s),b(O)}else r(s);f=n(s)}if(f!==null)var V=!0;else{var H=n(c);H!==null&&z(C,H.startTime-O),V=!1}return V}finally{f=null,v=F,h=!1}}var j=!1,E=null,_=-1,$=5,I=-1;function M(){return!(e.unstable_now()-I<$)}function D(){if(E!==null){var P=e.unstable_now();I=P;var O=!0;try{O=E(!0,P)}finally{O?T():(j=!1,E=null)}}else j=!1}var T;if(typeof p=="function")T=function(){p(D)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,L=A.port2;A.port1.onmessage=D,T=function(){L.postMessage(null)}}else T=function(){w(D,0)};function R(P){E=P,j||(j=!0,T())}function z(P,O){_=w(function(){P(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,R(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(v){case 1:case 2:case 3:var O=3;break;default:O=v}var F=v;v=O;try{return P()}finally{v=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=v;v=P;try{return O()}finally{v=F}},e.unstable_scheduleCallback=function(P,O,F){var B=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?B+F:B):F=B,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=F+N,P={id:d++,callback:O,priorityLevel:P,startTime:F,expirationTime:N,sortIndex:-1},F>B?(P.sortIndex=F,t(c,P),n(s)===null&&P===n(c)&&(x?(m(_),_=-1):x=!0,z(C,F-B))):(P.sortIndex=N,t(s,P),g||h||(g=!0,R(S))),P},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(P){var O=v;return function(){var F=v;v=O;try{return P.apply(this,arguments)}finally{v=F}}}})(ny);ty.exports=ny;var nE=ty.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry=y,Bt=nE;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iy=new Set,ma={};function ci(e,t){Xi(e,t),Xi(e+"Capture",t)}function Xi(e,t){for(ma[e]=t,e=0;e<t.length;e++)iy.add(t[e])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jf=Object.prototype.hasOwnProperty,rE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Og={},$g={};function iE(e){return jf.call($g,e)?!0:jf.call(Og,e)?!1:rE.test(e)?$g[e]=!0:(Og[e]=!0,!1)}function oE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function aE(e,t,n,r){if(t===null||typeof t>"u"||oE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function bt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){rt[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];rt[t]=new bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){rt[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){rt[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){rt[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){rt[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){rt[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){rt[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){rt[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var vh=/[\-:]([a-z])/g;function xh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vh,xh);rt[t]=new bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vh,xh);rt[t]=new bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vh,xh);rt[t]=new bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){rt[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});rt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){rt[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function yh(e,t,n,r){var i=rt.hasOwnProperty(t)?rt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(aE(t,n,i,r)&&(n=null),r||i===null?iE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rr=ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cs=Symbol.for("react.element"),Pi=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),bh=Symbol.for("react.strict_mode"),Pf=Symbol.for("react.profiler"),oy=Symbol.for("react.provider"),ay=Symbol.for("react.context"),wh=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),Of=Symbol.for("react.suspense_list"),Sh=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),sy=Symbol.for("react.offscreen"),Ig=Symbol.iterator;function To(e){return e===null||typeof e!="object"?null:(e=Ig&&e[Ig]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Qu;function Go(e){if(Qu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qu=t&&t[1]||""}return`
`+Qu+e}var Zu=!1;function Ju(e,t){if(!e||Zu)return"";Zu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Zu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Go(e):""}function sE(e){switch(e.tag){case 5:return Go(e.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return e=Ju(e.type,!1),e;case 11:return e=Ju(e.type.render,!1),e;case 1:return e=Ju(e.type,!0),e;default:return""}}function $f(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ti:return"Fragment";case Pi:return"Portal";case Pf:return"Profiler";case bh:return"StrictMode";case Tf:return"Suspense";case Of:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ay:return(e.displayName||"Context")+".Consumer";case oy:return(e._context.displayName||"Context")+".Provider";case wh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sh:return t=e.displayName||null,t!==null?t:$f(e.type)||"Memo";case ur:t=e._payload,e=e._init;try{return $f(e(t))}catch{}}return null}function lE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $f(t);case 8:return t===bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ly(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cE(e){var t=ly(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function us(e){e._valueTracker||(e._valueTracker=cE(e))}function cy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ly(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function If(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uy(e,t){t=t.checked,t!=null&&yh(e,"checked",t,!1)}function Mf(e,t){uy(e,t);var n=Tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Df(e,t.type,n):t.hasOwnProperty("defaultValue")&&Df(e,t.type,Tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Df(e,t,n){(t!=="number"||wl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qo=Array.isArray;function Ni(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(qo(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tr(n)}}function dy(e,t){var n=Tr(t.value),r=Tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ag(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Af(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ds,py=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ds=ds||document.createElement("div"),ds.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ds.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ga(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uE=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(e){uE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ta[t]=ta[e]})});function hy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ta.hasOwnProperty(e)&&ta[e]?(""+t).trim():t+"px"}function my(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dE=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rf(e,t){if(t){if(dE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function zf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function Ch(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nf=null,Bi=null,Vi=null;function Rg(e){if(e=Ga(e)){if(typeof Nf!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Pc(t),Nf(e.stateNode,e.type,t))}}function gy(e){Bi?Vi?Vi.push(e):Vi=[e]:Bi=e}function vy(){if(Bi){var e=Bi,t=Vi;if(Vi=Bi=null,Rg(e),t)for(e=0;e<t.length;e++)Rg(t[e])}}function xy(e,t){return e(t)}function yy(){}var ed=!1;function by(e,t,n){if(ed)return e(t,n);ed=!0;try{return xy(e,t,n)}finally{ed=!1,(Bi!==null||Vi!==null)&&(yy(),vy())}}function va(e,t){var n=e.stateNode;if(n===null)return null;var r=Pc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var Bf=!1;if(Xn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Bf=!1}function fE(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var na=!1,Sl=null,Cl=!1,Vf=null,pE={onError:function(e){na=!0,Sl=e}};function hE(e,t,n,r,i,o,a,l,s){na=!1,Sl=null,fE.apply(pE,arguments)}function mE(e,t,n,r,i,o,a,l,s){if(hE.apply(this,arguments),na){if(na){var c=Sl;na=!1,Sl=null}else throw Error(U(198));Cl||(Cl=!0,Vf=c)}}function ui(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zg(e){if(ui(e)!==e)throw Error(U(188))}function gE(e){var t=e.alternate;if(!t){if(t=ui(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zg(i),e;if(o===r)return zg(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function Sy(e){return e=gE(e),e!==null?Cy(e):null}function Cy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cy(e);if(t!==null)return t;e=e.sibling}return null}var ky=Bt.unstable_scheduleCallback,Fg=Bt.unstable_cancelCallback,vE=Bt.unstable_shouldYield,xE=Bt.unstable_requestPaint,Ie=Bt.unstable_now,yE=Bt.unstable_getCurrentPriorityLevel,kh=Bt.unstable_ImmediatePriority,_y=Bt.unstable_UserBlockingPriority,kl=Bt.unstable_NormalPriority,bE=Bt.unstable_LowPriority,Ey=Bt.unstable_IdlePriority,kc=null,jn=null;function wE(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(kc,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:kE,SE=Math.log,CE=Math.LN2;function kE(e){return e>>>=0,e===0?32:31-(SE(e)/CE|0)|0}var fs=64,ps=4194304;function Yo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _l(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Yo(l):(o&=a,o!==0&&(r=Yo(o)))}else a=n&~i,a!==0?r=Yo(a):o!==0&&(r=Yo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dn(t),i=1<<n,r|=e[n],t&=~i;return r}function _E(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-dn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=_E(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Uf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jy(){var e=fs;return fs<<=1,!(fs&4194240)&&(fs=64),e}function td(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dn(t),e[t]=n}function jE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function _h(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function Py(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ty,Eh,Oy,$y,Iy,Wf=!1,hs=[],br=null,wr=null,Sr=null,xa=new Map,ya=new Map,fr=[],PE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ng(e,t){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":xa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(t.pointerId)}}function $o(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ga(t),t!==null&&Eh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function TE(e,t,n,r,i){switch(t){case"focusin":return br=$o(br,e,t,n,r,i),!0;case"dragenter":return wr=$o(wr,e,t,n,r,i),!0;case"mouseover":return Sr=$o(Sr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return xa.set(o,$o(xa.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ya.set(o,$o(ya.get(o)||null,e,t,n,r,i)),!0}return!1}function My(e){var t=Hr(e.target);if(t!==null){var n=ui(t);if(n!==null){if(t=n.tag,t===13){if(t=wy(n),t!==null){e.blockedOn=t,Iy(e.priority,function(){Oy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ff=r,n.target.dispatchEvent(r),Ff=null}else return t=Ga(n),t!==null&&Eh(t),e.blockedOn=n,!1;t.shift()}return!0}function Bg(e,t,n){Hs(e)&&n.delete(t)}function OE(){Wf=!1,br!==null&&Hs(br)&&(br=null),wr!==null&&Hs(wr)&&(wr=null),Sr!==null&&Hs(Sr)&&(Sr=null),xa.forEach(Bg),ya.forEach(Bg)}function Io(e,t){e.blockedOn===t&&(e.blockedOn=null,Wf||(Wf=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,OE)))}function ba(e){function t(i){return Io(i,e)}if(0<hs.length){Io(hs[0],e);for(var n=1;n<hs.length;n++){var r=hs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(br!==null&&Io(br,e),wr!==null&&Io(wr,e),Sr!==null&&Io(Sr,e),xa.forEach(t),ya.forEach(t),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)My(n),n.blockedOn===null&&fr.shift()}var Ui=rr.ReactCurrentBatchConfig,El=!0;function $E(e,t,n,r){var i=ge,o=Ui.transition;Ui.transition=null;try{ge=1,jh(e,t,n,r)}finally{ge=i,Ui.transition=o}}function IE(e,t,n,r){var i=ge,o=Ui.transition;Ui.transition=null;try{ge=4,jh(e,t,n,r)}finally{ge=i,Ui.transition=o}}function jh(e,t,n,r){if(El){var i=Hf(e,t,n,r);if(i===null)dd(e,t,r,jl,n),Ng(e,r);else if(TE(i,e,t,n,r))r.stopPropagation();else if(Ng(e,r),t&4&&-1<PE.indexOf(e)){for(;i!==null;){var o=Ga(i);if(o!==null&&Ty(o),o=Hf(e,t,n,r),o===null&&dd(e,t,r,jl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else dd(e,t,r,null,n)}}var jl=null;function Hf(e,t,n,r){if(jl=null,e=Ch(r),e=Hr(e),e!==null)if(t=ui(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jl=e,null}function Dy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yE()){case kh:return 1;case _y:return 4;case kl:case bE:return 16;case Ey:return 536870912;default:return 16}default:return 16}}var mr=null,Ph=null,Gs=null;function Ly(){if(Gs)return Gs;var e,t=Ph,n=t.length,r,i="value"in mr?mr.value:mr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Gs=i.slice(e,1<r?1-r:void 0)}function qs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ms(){return!0}function Vg(){return!1}function Wt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ms:Vg,this.isPropagationStopped=Vg,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ms)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ms)},persist:function(){},isPersistent:ms}),t}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Th=Wt(mo),Ha=Pe({},mo,{view:0,detail:0}),ME=Wt(Ha),nd,rd,Mo,_c=Pe({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(nd=e.screenX-Mo.screenX,rd=e.screenY-Mo.screenY):rd=nd=0,Mo=e),nd)},movementY:function(e){return"movementY"in e?e.movementY:rd}}),Ug=Wt(_c),DE=Pe({},_c,{dataTransfer:0}),LE=Wt(DE),AE=Pe({},Ha,{relatedTarget:0}),id=Wt(AE),RE=Pe({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),zE=Wt(RE),FE=Pe({},mo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),NE=Wt(FE),BE=Pe({},mo,{data:0}),Wg=Wt(BE),VE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=WE[e])?!!t[e]:!1}function Oh(){return HE}var GE=Pe({},Ha,{key:function(e){if(e.key){var t=VE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?UE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oh,charCode:function(e){return e.type==="keypress"?qs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qE=Wt(GE),YE=Pe({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hg=Wt(YE),XE=Pe({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oh}),KE=Wt(XE),QE=Pe({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZE=Wt(QE),JE=Pe({},_c,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ej=Wt(JE),tj=[9,13,27,32],$h=Xn&&"CompositionEvent"in window,ra=null;Xn&&"documentMode"in document&&(ra=document.documentMode);var nj=Xn&&"TextEvent"in window&&!ra,Ay=Xn&&(!$h||ra&&8<ra&&11>=ra),Gg=String.fromCharCode(32),qg=!1;function Ry(e,t){switch(e){case"keyup":return tj.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oi=!1;function rj(e,t){switch(e){case"compositionend":return zy(t);case"keypress":return t.which!==32?null:(qg=!0,Gg);case"textInput":return e=t.data,e===Gg&&qg?null:e;default:return null}}function ij(e,t){if(Oi)return e==="compositionend"||!$h&&Ry(e,t)?(e=Ly(),Gs=Ph=mr=null,Oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ay&&t.locale!=="ko"?null:t.data;default:return null}}var oj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oj[e.type]:t==="textarea"}function Fy(e,t,n,r){gy(r),t=Pl(t,"onChange"),0<t.length&&(n=new Th("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ia=null,wa=null;function aj(e){Ky(e,0)}function Ec(e){var t=Mi(e);if(cy(t))return e}function sj(e,t){if(e==="change")return t}var Ny=!1;if(Xn){var od;if(Xn){var ad="oninput"in document;if(!ad){var Xg=document.createElement("div");Xg.setAttribute("oninput","return;"),ad=typeof Xg.oninput=="function"}od=ad}else od=!1;Ny=od&&(!document.documentMode||9<document.documentMode)}function Kg(){ia&&(ia.detachEvent("onpropertychange",By),wa=ia=null)}function By(e){if(e.propertyName==="value"&&Ec(wa)){var t=[];Fy(t,wa,e,Ch(e)),by(aj,t)}}function lj(e,t,n){e==="focusin"?(Kg(),ia=t,wa=n,ia.attachEvent("onpropertychange",By)):e==="focusout"&&Kg()}function cj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ec(wa)}function uj(e,t){if(e==="click")return Ec(t)}function dj(e,t){if(e==="input"||e==="change")return Ec(t)}function fj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:fj;function Sa(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jf.call(t,i)||!gn(e[i],t[i]))return!1}return!0}function Qg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zg(e,t){var n=Qg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qg(n)}}function Vy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uy(){for(var e=window,t=wl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wl(e.document)}return t}function Ih(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pj(e){var t=Uy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vy(n.ownerDocument.documentElement,n)){if(r!==null&&Ih(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Zg(n,o);var a=Zg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hj=Xn&&"documentMode"in document&&11>=document.documentMode,$i=null,Gf=null,oa=null,qf=!1;function Jg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qf||$i==null||$i!==wl(r)||(r=$i,"selectionStart"in r&&Ih(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oa&&Sa(oa,r)||(oa=r,r=Pl(Gf,"onSelect"),0<r.length&&(t=new Th("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$i)))}function gs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ii={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionend:gs("Transition","TransitionEnd")},sd={},Wy={};Xn&&(Wy=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function jc(e){if(sd[e])return sd[e];if(!Ii[e])return e;var t=Ii[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wy)return sd[e]=t[n];return e}var Hy=jc("animationend"),Gy=jc("animationiteration"),qy=jc("animationstart"),Yy=jc("transitionend"),Xy=new Map,e0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(e,t){Xy.set(e,t),ci(t,[e])}for(var ld=0;ld<e0.length;ld++){var cd=e0[ld],mj=cd.toLowerCase(),gj=cd[0].toUpperCase()+cd.slice(1);Ir(mj,"on"+gj)}Ir(Hy,"onAnimationEnd");Ir(Gy,"onAnimationIteration");Ir(qy,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(Yy,"onTransitionEnd");Xi("onMouseEnter",["mouseout","mouseover"]);Xi("onMouseLeave",["mouseout","mouseover"]);Xi("onPointerEnter",["pointerout","pointerover"]);Xi("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vj=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function t0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mE(r,t,void 0,e),e.currentTarget=null}function Ky(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;t0(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;t0(i,l,c),o=s}}}if(Cl)throw e=Vf,Cl=!1,Vf=null,e}function ye(e,t){var n=t[Zf];n===void 0&&(n=t[Zf]=new Set);var r=e+"__bubble";n.has(r)||(Qy(t,e,2,!1),n.add(r))}function ud(e,t,n){var r=0;t&&(r|=4),Qy(n,e,r,t)}var vs="_reactListening"+Math.random().toString(36).slice(2);function Ca(e){if(!e[vs]){e[vs]=!0,iy.forEach(function(n){n!=="selectionchange"&&(vj.has(n)||ud(n,!1,e),ud(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vs]||(t[vs]=!0,ud("selectionchange",!1,t))}}function Qy(e,t,n,r){switch(Dy(t)){case 1:var i=$E;break;case 4:i=IE;break;default:i=jh}n=i.bind(null,t,n,e),i=void 0,!Bf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function dd(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Hr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}by(function(){var c=o,d=Ch(n),f=[];e:{var v=Xy.get(e);if(v!==void 0){var h=Th,g=e;switch(e){case"keypress":if(qs(n)===0)break e;case"keydown":case"keyup":h=qE;break;case"focusin":g="focus",h=id;break;case"focusout":g="blur",h=id;break;case"beforeblur":case"afterblur":h=id;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=LE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=KE;break;case Hy:case Gy:case qy:h=zE;break;case Yy:h=ZE;break;case"scroll":h=ME;break;case"wheel":h=ej;break;case"copy":case"cut":case"paste":h=NE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Hg}var x=(t&4)!==0,w=!x&&e==="scroll",m=x?v!==null?v+"Capture":null:v;x=[];for(var p=c,b;p!==null;){b=p;var C=b.stateNode;if(b.tag===5&&C!==null&&(b=C,m!==null&&(C=va(p,m),C!=null&&x.push(ka(p,C,b)))),w)break;p=p.return}0<x.length&&(v=new h(v,g,null,n,d),f.push({event:v,listeners:x}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",v&&n!==Ff&&(g=n.relatedTarget||n.fromElement)&&(Hr(g)||g[Kn]))break e;if((h||v)&&(v=d.window===d?d:(v=d.ownerDocument)?v.defaultView||v.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=c,g=g?Hr(g):null,g!==null&&(w=ui(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=c),h!==g)){if(x=Ug,C="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Hg,C="onPointerLeave",m="onPointerEnter",p="pointer"),w=h==null?v:Mi(h),b=g==null?v:Mi(g),v=new x(C,p+"leave",h,n,d),v.target=w,v.relatedTarget=b,C=null,Hr(d)===c&&(x=new x(m,p+"enter",g,n,d),x.target=b,x.relatedTarget=w,C=x),w=C,h&&g)t:{for(x=h,m=g,p=0,b=x;b;b=mi(b))p++;for(b=0,C=m;C;C=mi(C))b++;for(;0<p-b;)x=mi(x),p--;for(;0<b-p;)m=mi(m),b--;for(;p--;){if(x===m||m!==null&&x===m.alternate)break t;x=mi(x),m=mi(m)}x=null}else x=null;h!==null&&n0(f,v,h,x,!1),g!==null&&w!==null&&n0(f,w,g,x,!0)}}e:{if(v=c?Mi(c):window,h=v.nodeName&&v.nodeName.toLowerCase(),h==="select"||h==="input"&&v.type==="file")var S=sj;else if(Yg(v))if(Ny)S=dj;else{S=cj;var j=lj}else(h=v.nodeName)&&h.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(S=uj);if(S&&(S=S(e,c))){Fy(f,S,n,d);break e}j&&j(e,v,c),e==="focusout"&&(j=v._wrapperState)&&j.controlled&&v.type==="number"&&Df(v,"number",v.value)}switch(j=c?Mi(c):window,e){case"focusin":(Yg(j)||j.contentEditable==="true")&&($i=j,Gf=c,oa=null);break;case"focusout":oa=Gf=$i=null;break;case"mousedown":qf=!0;break;case"contextmenu":case"mouseup":case"dragend":qf=!1,Jg(f,n,d);break;case"selectionchange":if(hj)break;case"keydown":case"keyup":Jg(f,n,d)}var E;if($h)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Oi?Ry(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ay&&n.locale!=="ko"&&(Oi||_!=="onCompositionStart"?_==="onCompositionEnd"&&Oi&&(E=Ly()):(mr=d,Ph="value"in mr?mr.value:mr.textContent,Oi=!0)),j=Pl(c,_),0<j.length&&(_=new Wg(_,e,null,n,d),f.push({event:_,listeners:j}),E?_.data=E:(E=zy(n),E!==null&&(_.data=E)))),(E=nj?rj(e,n):ij(e,n))&&(c=Pl(c,"onBeforeInput"),0<c.length&&(d=new Wg("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}Ky(f,t)})}function ka(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=va(e,n),o!=null&&r.unshift(ka(e,o,i)),o=va(e,t),o!=null&&r.push(ka(e,o,i))),e=e.return}return r}function mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function n0(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=va(n,o),s!=null&&a.unshift(ka(n,s,l))):i||(s=va(n,o),s!=null&&a.push(ka(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var xj=/\r\n?/g,yj=/\u0000|\uFFFD/g;function r0(e){return(typeof e=="string"?e:""+e).replace(xj,`
`).replace(yj,"")}function xs(e,t,n){if(t=r0(t),r0(e)!==t&&n)throw Error(U(425))}function Tl(){}var Yf=null,Xf=null;function Kf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qf=typeof setTimeout=="function"?setTimeout:void 0,bj=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,wj=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(e){return i0.resolve(null).then(e).catch(Sj)}:Qf;function Sj(e){setTimeout(function(){throw e})}function fd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ba(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ba(t)}function Cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function o0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var go=Math.random().toString(36).slice(2),_n="__reactFiber$"+go,_a="__reactProps$"+go,Kn="__reactContainer$"+go,Zf="__reactEvents$"+go,Cj="__reactListeners$"+go,kj="__reactHandles$"+go;function Hr(e){var t=e[_n];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kn]||n[_n]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=o0(e);e!==null;){if(n=e[_n])return n;e=o0(e)}return t}e=n,n=e.parentNode}return null}function Ga(e){return e=e[_n]||e[Kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Pc(e){return e[_a]||null}var Jf=[],Di=-1;function Mr(e){return{current:e}}function we(e){0>Di||(e.current=Jf[Di],Jf[Di]=null,Di--)}function xe(e,t){Di++,Jf[Di]=e.current,e.current=t}var Or={},dt=Mr(Or),jt=Mr(!1),Zr=Or;function Ki(e,t){var n=e.type.contextTypes;if(!n)return Or;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(e){return e=e.childContextTypes,e!=null}function Ol(){we(jt),we(dt)}function a0(e,t,n){if(dt.current!==Or)throw Error(U(168));xe(dt,t),xe(jt,n)}function Zy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,lE(e)||"Unknown",i));return Pe({},n,r)}function $l(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Or,Zr=dt.current,xe(dt,e),xe(jt,jt.current),!0}function s0(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=Zy(e,t,Zr),r.__reactInternalMemoizedMergedChildContext=e,we(jt),we(dt),xe(dt,e)):we(jt),xe(jt,n)}var Bn=null,Tc=!1,pd=!1;function Jy(e){Bn===null?Bn=[e]:Bn.push(e)}function _j(e){Tc=!0,Jy(e)}function Dr(){if(!pd&&Bn!==null){pd=!0;var e=0,t=ge;try{var n=Bn;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bn=null,Tc=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(e+1)),ky(kh,Dr),i}finally{ge=t,pd=!1}}return null}var Li=[],Ai=0,Il=null,Ml=0,qt=[],Yt=0,Jr=null,Wn=1,Hn="";function Fr(e,t){Li[Ai++]=Ml,Li[Ai++]=Il,Il=e,Ml=t}function eb(e,t,n){qt[Yt++]=Wn,qt[Yt++]=Hn,qt[Yt++]=Jr,Jr=e;var r=Wn;e=Hn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var o=32-dn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Wn=1<<32-dn(t)+i|n<<i|r,Hn=o+e}else Wn=1<<o|n<<i|r,Hn=e}function Mh(e){e.return!==null&&(Fr(e,1),eb(e,1,0))}function Dh(e){for(;e===Il;)Il=Li[--Ai],Li[Ai]=null,Ml=Li[--Ai],Li[Ai]=null;for(;e===Jr;)Jr=qt[--Yt],qt[Yt]=null,Hn=qt[--Yt],qt[Yt]=null,Wn=qt[--Yt],qt[Yt]=null}var Ft=null,Rt=null,ke=!1,cn=null;function tb(e,t){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function l0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ft=e,Rt=Cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ft=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jr!==null?{id:Wn,overflow:Hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ft=e,Rt=null,!0):!1;default:return!1}}function ep(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tp(e){if(ke){var t=Rt;if(t){var n=t;if(!l0(e,t)){if(ep(e))throw Error(U(418));t=Cr(n.nextSibling);var r=Ft;t&&l0(e,t)?tb(r,n):(e.flags=e.flags&-4097|2,ke=!1,Ft=e)}}else{if(ep(e))throw Error(U(418));e.flags=e.flags&-4097|2,ke=!1,Ft=e}}}function c0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ft=e}function ys(e){if(e!==Ft)return!1;if(!ke)return c0(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kf(e.type,e.memoizedProps)),t&&(t=Rt)){if(ep(e))throw nb(),Error(U(418));for(;t;)tb(e,t),t=Cr(t.nextSibling)}if(c0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=Cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=Ft?Cr(e.stateNode.nextSibling):null;return!0}function nb(){for(var e=Rt;e;)e=Cr(e.nextSibling)}function Qi(){Rt=Ft=null,ke=!1}function Lh(e){cn===null?cn=[e]:cn.push(e)}var Ej=rr.ReactCurrentBatchConfig;function an(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Dl=Mr(null),Ll=null,Ri=null,Ah=null;function Rh(){Ah=Ri=Ll=null}function zh(e){var t=Dl.current;we(Dl),e._currentValue=t}function np(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wi(e,t){Ll=e,Ah=Ri=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function Qt(e){var t=e._currentValue;if(Ah!==e)if(e={context:e,memoizedValue:t,next:null},Ri===null){if(Ll===null)throw Error(U(308));Ri=e,Ll.dependencies={lanes:0,firstContext:e}}else Ri=Ri.next=e;return t}var Gr=null;function Fh(e){Gr===null?Gr=[e]:Gr.push(e)}function rb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qn(e,r)}function Qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dr=!1;function Nh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ib(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qn(e,n)}return i=r.interleaved,i===null?(t.next=t,Fh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qn(e,n)}function Ys(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_h(e,n)}}function u0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Al(e,t,n,r){var i=e.updateQueue;dr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;a=0,d=c=s=null,l=o;do{var v=l.lane,h=l.eventTime;if((r&v)===v){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,x=l;switch(v=t,h=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(h,f,v);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,v=typeof g=="function"?g.call(h,f,v):g,v==null)break e;f=Pe({},f,v);break e;case 2:dr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else h={eventTime:h,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=h,s=f):d=d.next=h,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(d===null&&(s=f),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ti|=a,e.lanes=a,e.memoizedState=f}}function d0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var ob=new ry.Component().refs;function rp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oc={isMounted:function(e){return(e=e._reactInternals)?ui(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vt(),i=Er(e),o=Gn(r,i);o.payload=t,n!=null&&(o.callback=n),t=kr(e,o,i),t!==null&&(fn(t,e,i,r),Ys(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vt(),i=Er(e),o=Gn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=kr(e,o,i),t!==null&&(fn(t,e,i,r),Ys(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),r=Er(e),i=Gn(n,r);i.tag=2,t!=null&&(i.callback=t),t=kr(e,i,r),t!==null&&(fn(t,e,r,n),Ys(t,e,r))}};function f0(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Sa(n,r)||!Sa(i,o):!0}function ab(e,t,n){var r=!1,i=Or,o=t.contextType;return typeof o=="object"&&o!==null?o=Qt(o):(i=Pt(t)?Zr:dt.current,r=t.contextTypes,o=(r=r!=null)?Ki(e,i):Or),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function p0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oc.enqueueReplaceState(t,t.state,null)}function ip(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ob,Nh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Qt(o):(o=Pt(t)?Zr:dt.current,i.context=Ki(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(rp(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oc.enqueueReplaceState(i,i.state,null),Al(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Do(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===ob&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function bs(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function h0(e){var t=e._init;return t(e._payload)}function sb(e){function t(m,p){if(e){var b=m.deletions;b===null?(m.deletions=[p],m.flags|=16):b.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=jr(m,p),m.index=0,m.sibling=null,m}function o(m,p,b){return m.index=b,e?(b=m.alternate,b!==null?(b=b.index,b<p?(m.flags|=2,p):b):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,b,C){return p===null||p.tag!==6?(p=bd(b,m.mode,C),p.return=m,p):(p=i(p,b),p.return=m,p)}function s(m,p,b,C){var S=b.type;return S===Ti?d(m,p,b.props.children,C,b.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ur&&h0(S)===p.type)?(C=i(p,b.props),C.ref=Do(m,p,b),C.return=m,C):(C=el(b.type,b.key,b.props,null,m.mode,C),C.ref=Do(m,p,b),C.return=m,C)}function c(m,p,b,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==b.containerInfo||p.stateNode.implementation!==b.implementation?(p=wd(b,m.mode,C),p.return=m,p):(p=i(p,b.children||[]),p.return=m,p)}function d(m,p,b,C,S){return p===null||p.tag!==7?(p=Kr(b,m.mode,C,S),p.return=m,p):(p=i(p,b),p.return=m,p)}function f(m,p,b){if(typeof p=="string"&&p!==""||typeof p=="number")return p=bd(""+p,m.mode,b),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case cs:return b=el(p.type,p.key,p.props,null,m.mode,b),b.ref=Do(m,null,p),b.return=m,b;case Pi:return p=wd(p,m.mode,b),p.return=m,p;case ur:var C=p._init;return f(m,C(p._payload),b)}if(qo(p)||To(p))return p=Kr(p,m.mode,b,null),p.return=m,p;bs(m,p)}return null}function v(m,p,b,C){var S=p!==null?p.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return S!==null?null:l(m,p,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case cs:return b.key===S?s(m,p,b,C):null;case Pi:return b.key===S?c(m,p,b,C):null;case ur:return S=b._init,v(m,p,S(b._payload),C)}if(qo(b)||To(b))return S!==null?null:d(m,p,b,C,null);bs(m,b)}return null}function h(m,p,b,C,S){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(b)||null,l(p,m,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case cs:return m=m.get(C.key===null?b:C.key)||null,s(p,m,C,S);case Pi:return m=m.get(C.key===null?b:C.key)||null,c(p,m,C,S);case ur:var j=C._init;return h(m,p,b,j(C._payload),S)}if(qo(C)||To(C))return m=m.get(b)||null,d(p,m,C,S,null);bs(p,C)}return null}function g(m,p,b,C){for(var S=null,j=null,E=p,_=p=0,$=null;E!==null&&_<b.length;_++){E.index>_?($=E,E=null):$=E.sibling;var I=v(m,E,b[_],C);if(I===null){E===null&&(E=$);break}e&&E&&I.alternate===null&&t(m,E),p=o(I,p,_),j===null?S=I:j.sibling=I,j=I,E=$}if(_===b.length)return n(m,E),ke&&Fr(m,_),S;if(E===null){for(;_<b.length;_++)E=f(m,b[_],C),E!==null&&(p=o(E,p,_),j===null?S=E:j.sibling=E,j=E);return ke&&Fr(m,_),S}for(E=r(m,E);_<b.length;_++)$=h(E,m,_,b[_],C),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?_:$.key),p=o($,p,_),j===null?S=$:j.sibling=$,j=$);return e&&E.forEach(function(M){return t(m,M)}),ke&&Fr(m,_),S}function x(m,p,b,C){var S=To(b);if(typeof S!="function")throw Error(U(150));if(b=S.call(b),b==null)throw Error(U(151));for(var j=S=null,E=p,_=p=0,$=null,I=b.next();E!==null&&!I.done;_++,I=b.next()){E.index>_?($=E,E=null):$=E.sibling;var M=v(m,E,I.value,C);if(M===null){E===null&&(E=$);break}e&&E&&M.alternate===null&&t(m,E),p=o(M,p,_),j===null?S=M:j.sibling=M,j=M,E=$}if(I.done)return n(m,E),ke&&Fr(m,_),S;if(E===null){for(;!I.done;_++,I=b.next())I=f(m,I.value,C),I!==null&&(p=o(I,p,_),j===null?S=I:j.sibling=I,j=I);return ke&&Fr(m,_),S}for(E=r(m,E);!I.done;_++,I=b.next())I=h(E,m,_,I.value,C),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?_:I.key),p=o(I,p,_),j===null?S=I:j.sibling=I,j=I);return e&&E.forEach(function(D){return t(m,D)}),ke&&Fr(m,_),S}function w(m,p,b,C){if(typeof b=="object"&&b!==null&&b.type===Ti&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case cs:e:{for(var S=b.key,j=p;j!==null;){if(j.key===S){if(S=b.type,S===Ti){if(j.tag===7){n(m,j.sibling),p=i(j,b.props.children),p.return=m,m=p;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ur&&h0(S)===j.type){n(m,j.sibling),p=i(j,b.props),p.ref=Do(m,j,b),p.return=m,m=p;break e}n(m,j);break}else t(m,j);j=j.sibling}b.type===Ti?(p=Kr(b.props.children,m.mode,C,b.key),p.return=m,m=p):(C=el(b.type,b.key,b.props,null,m.mode,C),C.ref=Do(m,p,b),C.return=m,m=C)}return a(m);case Pi:e:{for(j=b.key;p!==null;){if(p.key===j)if(p.tag===4&&p.stateNode.containerInfo===b.containerInfo&&p.stateNode.implementation===b.implementation){n(m,p.sibling),p=i(p,b.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=wd(b,m.mode,C),p.return=m,m=p}return a(m);case ur:return j=b._init,w(m,p,j(b._payload),C)}if(qo(b))return g(m,p,b,C);if(To(b))return x(m,p,b,C);bs(m,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,b),p.return=m,m=p):(n(m,p),p=bd(b,m.mode,C),p.return=m,m=p),a(m)):n(m,p)}return w}var Zi=sb(!0),lb=sb(!1),qa={},Pn=Mr(qa),Ea=Mr(qa),ja=Mr(qa);function qr(e){if(e===qa)throw Error(U(174));return e}function Bh(e,t){switch(xe(ja,t),xe(Ea,e),xe(Pn,qa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Af(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Af(t,e)}we(Pn),xe(Pn,t)}function Ji(){we(Pn),we(Ea),we(ja)}function cb(e){qr(ja.current);var t=qr(Pn.current),n=Af(t,e.type);t!==n&&(xe(Ea,e),xe(Pn,n))}function Vh(e){Ea.current===e&&(we(Pn),we(Ea))}var _e=Mr(0);function Rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hd=[];function Uh(){for(var e=0;e<hd.length;e++)hd[e]._workInProgressVersionPrimary=null;hd.length=0}var Xs=rr.ReactCurrentDispatcher,md=rr.ReactCurrentBatchConfig,ei=0,Ee=null,Ne=null,Ye=null,zl=!1,aa=!1,Pa=0,jj=0;function it(){throw Error(U(321))}function Wh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function Hh(e,t,n,r,i,o){if(ei=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xs.current=e===null||e.memoizedState===null?$j:Ij,e=n(r,i),aa){o=0;do{if(aa=!1,Pa=0,25<=o)throw Error(U(301));o+=1,Ye=Ne=null,t.updateQueue=null,Xs.current=Mj,e=n(r,i)}while(aa)}if(Xs.current=Fl,t=Ne!==null&&Ne.next!==null,ei=0,Ye=Ne=Ee=null,zl=!1,t)throw Error(U(300));return e}function Gh(){var e=Pa!==0;return Pa=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ee.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Zt(){if(Ne===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ye===null?Ee.memoizedState:Ye.next;if(t!==null)Ye=t,Ne=e;else{if(e===null)throw Error(U(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ye===null?Ee.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ta(e,t){return typeof t=="function"?t(e):t}function gd(e){var t=Zt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var d=c.lane;if((ei&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,Ee.lanes|=d,ti|=d}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,gn(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,ti|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vd(e){var t=Zt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);gn(o,t.memoizedState)||(Et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ub(){}function db(e,t){var n=Ee,r=Zt(),i=t(),o=!gn(r.memoizedState,i);if(o&&(r.memoizedState=i,Et=!0),r=r.queue,qh(hb.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Oa(9,pb.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(U(349));ei&30||fb(n,t,i)}return i}function fb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pb(e,t,n,r){t.value=n,t.getSnapshot=r,mb(t)&&gb(e)}function hb(e,t,n){return n(function(){mb(t)&&gb(e)})}function mb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function gb(e){var t=Qn(e,1);t!==null&&fn(t,e,1,-1)}function m0(e){var t=Sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},t.queue=e,e=e.dispatch=Oj.bind(null,Ee,e),[t.memoizedState,e]}function Oa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vb(){return Zt().memoizedState}function Ks(e,t,n,r){var i=Sn();Ee.flags|=e,i.memoizedState=Oa(1|t,n,void 0,r===void 0?null:r)}function $c(e,t,n,r){var i=Zt();r=r===void 0?null:r;var o=void 0;if(Ne!==null){var a=Ne.memoizedState;if(o=a.destroy,r!==null&&Wh(r,a.deps)){i.memoizedState=Oa(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=Oa(1|t,n,o,r)}function g0(e,t){return Ks(8390656,8,e,t)}function qh(e,t){return $c(2048,8,e,t)}function xb(e,t){return $c(4,2,e,t)}function yb(e,t){return $c(4,4,e,t)}function bb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wb(e,t,n){return n=n!=null?n.concat([e]):null,$c(4,4,bb.bind(null,t,e),n)}function Yh(){}function Sb(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cb(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kb(e,t,n){return ei&21?(gn(n,t)||(n=jy(),Ee.lanes|=n,ti|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function Pj(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=md.transition;md.transition={};try{e(!1),t()}finally{ge=n,md.transition=r}}function _b(){return Zt().memoizedState}function Tj(e,t,n){var r=Er(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Eb(e))jb(t,n);else if(n=rb(e,t,n,r),n!==null){var i=vt();fn(n,e,r,i),Pb(n,t,r)}}function Oj(e,t,n){var r=Er(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eb(e))jb(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,a)){var s=t.interleaved;s===null?(i.next=i,Fh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=rb(e,t,i,r),n!==null&&(i=vt(),fn(n,e,r,i),Pb(n,t,r))}}function Eb(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function jb(e,t){aa=zl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_h(e,n)}}var Fl={readContext:Qt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},$j={readContext:Qt,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:g0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ks(4194308,4,bb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ks(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ks(4,2,e,t)},useMemo:function(e,t){var n=Sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Tj.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:m0,useDebugValue:Yh,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=m0(!1),t=e[0];return e=Pj.bind(null,e[1]),Sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=Sn();if(ke){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),Xe===null)throw Error(U(349));ei&30||fb(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,g0(hb.bind(null,r,o,e),[e]),r.flags|=2048,Oa(9,pb.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Sn(),t=Xe.identifierPrefix;if(ke){var n=Hn,r=Wn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jj++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ij={readContext:Qt,useCallback:Sb,useContext:Qt,useEffect:qh,useImperativeHandle:wb,useInsertionEffect:xb,useLayoutEffect:yb,useMemo:Cb,useReducer:gd,useRef:vb,useState:function(){return gd(Ta)},useDebugValue:Yh,useDeferredValue:function(e){var t=Zt();return kb(t,Ne.memoizedState,e)},useTransition:function(){var e=gd(Ta)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:ub,useSyncExternalStore:db,useId:_b,unstable_isNewReconciler:!1},Mj={readContext:Qt,useCallback:Sb,useContext:Qt,useEffect:qh,useImperativeHandle:wb,useInsertionEffect:xb,useLayoutEffect:yb,useMemo:Cb,useReducer:vd,useRef:vb,useState:function(){return vd(Ta)},useDebugValue:Yh,useDeferredValue:function(e){var t=Zt();return Ne===null?t.memoizedState=e:kb(t,Ne.memoizedState,e)},useTransition:function(){var e=vd(Ta)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:ub,useSyncExternalStore:db,useId:_b,unstable_isNewReconciler:!1};function eo(e,t){try{var n="",r=t;do n+=sE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function xd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function op(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dj=typeof WeakMap=="function"?WeakMap:Map;function Tb(e,t,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bl||(Bl=!0,mp=r),op(e,t)},n}function Ob(e,t,n){n=Gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){op(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){op(e,t),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function v0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dj;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Yj.bind(null,e,t,n),t.then(e,e))}function x0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function y0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gn(-1,1),t.tag=2,kr(n,t,1))),n.lanes|=1),e)}var Lj=rr.ReactCurrentOwner,Et=!1;function mt(e,t,n,r){t.child=e===null?lb(t,null,n,r):Zi(t,e.child,n,r)}function b0(e,t,n,r,i){n=n.render;var o=t.ref;return Wi(t,i),r=Hh(e,t,n,r,o,i),n=Gh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(ke&&n&&Mh(t),t.flags|=1,mt(e,t,r,i),t.child)}function w0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!nm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$b(e,t,o,r,i)):(e=el(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Sa,n(a,r)&&e.ref===t.ref)return Zn(e,t,i)}return t.flags|=1,e=jr(o,r),e.ref=t.ref,e.return=t,t.child=e}function $b(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Sa(o,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Zn(e,t,i)}return ap(e,t,n,r,i)}function Ib(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Fi,Lt),Lt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(Fi,Lt),Lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,xe(Fi,Lt),Lt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,xe(Fi,Lt),Lt|=r;return mt(e,t,i,n),t.child}function Mb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ap(e,t,n,r,i){var o=Pt(n)?Zr:dt.current;return o=Ki(t,o),Wi(t,i),n=Hh(e,t,n,r,o,i),r=Gh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(ke&&r&&Mh(t),t.flags|=1,mt(e,t,n,i),t.child)}function S0(e,t,n,r,i){if(Pt(n)){var o=!0;$l(t)}else o=!1;if(Wi(t,i),t.stateNode===null)Qs(e,t),ab(t,n,r),ip(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qt(c):(c=Pt(n)?Zr:dt.current,c=Ki(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&p0(t,a,r,c),dr=!1;var v=t.memoizedState;a.state=v,Al(t,r,a,i),s=t.memoizedState,l!==r||v!==s||jt.current||dr?(typeof d=="function"&&(rp(t,n,d,r),s=t.memoizedState),(l=dr||f0(t,n,l,r,v,s,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ib(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:an(t.type,l),a.props=c,f=t.pendingProps,v=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Qt(s):(s=Pt(n)?Zr:dt.current,s=Ki(t,s));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||v!==s)&&p0(t,a,r,s),dr=!1,v=t.memoizedState,a.state=v,Al(t,r,a,i);var g=t.memoizedState;l!==f||v!==g||jt.current||dr?(typeof h=="function"&&(rp(t,n,h,r),g=t.memoizedState),(c=dr||f0(t,n,c,r,v,g,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return sp(e,t,n,r,o,i)}function sp(e,t,n,r,i,o){Mb(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&s0(t,n,!1),Zn(e,t,o);r=t.stateNode,Lj.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Zi(t,e.child,null,o),t.child=Zi(t,null,l,o)):mt(e,t,l,o),t.memoizedState=r.state,i&&s0(t,n,!0),t.child}function Db(e){var t=e.stateNode;t.pendingContext?a0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&a0(e,t.context,!1),Bh(e,t.containerInfo)}function C0(e,t,n,r,i){return Qi(),Lh(i),t.flags|=256,mt(e,t,n,r),t.child}var lp={dehydrated:null,treeContext:null,retryLane:0};function cp(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lb(e,t,n){var r=t.pendingProps,i=_e.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe(_e,i&1),e===null)return tp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Dc(a,r,0,null),e=Kr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=cp(n),t.memoizedState=lp,e):Xh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Aj(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=jr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=jr(l,o):(o=Kr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?cp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=lp,r}return o=e.child,e=o.sibling,r=jr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xh(e,t){return t=Dc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ws(e,t,n,r){return r!==null&&Lh(r),Zi(t,e.child,null,n),e=Xh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Aj(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=xd(Error(U(422))),ws(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Dc({mode:"visible",children:r.children},i,0,null),o=Kr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Zi(t,e.child,null,a),t.child.memoizedState=cp(a),t.memoizedState=lp,o);if(!(t.mode&1))return ws(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(U(419)),r=xd(o,r,void 0),ws(e,t,a,r)}if(l=(a&e.childLanes)!==0,Et||l){if(r=Xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qn(e,i),fn(r,e,i,-1))}return tm(),r=xd(Error(U(421))),ws(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Xj.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Rt=Cr(i.nextSibling),Ft=t,ke=!0,cn=null,e!==null&&(qt[Yt++]=Wn,qt[Yt++]=Hn,qt[Yt++]=Jr,Wn=e.id,Hn=e.overflow,Jr=t),t=Xh(t,r.children),t.flags|=4096,t)}function k0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),np(e.return,t,n)}function yd(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ab(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(mt(e,t,r.children,n),r=_e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&k0(e,n,t);else if(e.tag===19)k0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(_e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Rl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Rl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yd(t,!0,n,null,o);break;case"together":yd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ti|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=jr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rj(e,t,n){switch(t.tag){case 3:Db(t),Qi();break;case 5:cb(t);break;case 1:Pt(t.type)&&$l(t);break;case 4:Bh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;xe(Dl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(_e,_e.current&1),t.flags|=128,null):n&t.child.childLanes?Lb(e,t,n):(xe(_e,_e.current&1),e=Zn(e,t,n),e!==null?e.sibling:null);xe(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ab(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,Ib(e,t,n)}return Zn(e,t,n)}var Rb,up,zb,Fb;Rb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};up=function(){};zb=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qr(Pn.current);var o=null;switch(n){case"input":i=If(e,i),r=If(e,r),o=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),o=[];break;case"textarea":i=Lf(e,i),r=Lf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Tl)}Rf(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ma.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ma.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ye("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Fb=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lo(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zj(e,t,n){var r=t.pendingProps;switch(Dh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return Pt(t.type)&&Ol(),ot(t),null;case 3:return r=t.stateNode,Ji(),we(jt),we(dt),Uh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ys(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,cn!==null&&(xp(cn),cn=null))),up(e,t),ot(t),null;case 5:Vh(t);var i=qr(ja.current);if(n=t.type,e!==null&&t.stateNode!=null)zb(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return ot(t),null}if(e=qr(Pn.current),ys(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[_n]=t,r[_a]=o,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Xo.length;i++)ye(Xo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Mg(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":Lg(r,o),ye("invalid",r)}Rf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&xs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&xs(r.textContent,l,e),i=["children",""+l]):ma.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":us(r),Dg(r,o,!0);break;case"textarea":us(r),Ag(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Tl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[_n]=t,e[_a]=r,Rb(e,t,!1,!1),t.stateNode=e;e:{switch(a=zf(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xo.length;i++)ye(Xo[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":Mg(e,r),i=If(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Lg(e,r),i=Lf(e,r),ye("invalid",e);break;default:i=r}Rf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?my(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&py(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ga(e,s):typeof s=="number"&&ga(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ma.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ye("scroll",e):s!=null&&yh(e,o,s,a))}switch(n){case"input":us(e),Dg(e,r,!1);break;case"textarea":us(e),Ag(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ni(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ni(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)Fb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=qr(ja.current),qr(Pn.current),ys(t)){if(r=t.stateNode,n=t.memoizedProps,r[_n]=t,(o=r.nodeValue!==n)&&(e=Ft,e!==null))switch(e.tag){case 3:xs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=t,t.stateNode=r}return ot(t),null;case 13:if(we(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&Rt!==null&&t.mode&1&&!(t.flags&128))nb(),Qi(),t.flags|=98560,o=!1;else if(o=ys(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[_n]=t}else Qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ot(t),o=!1}else cn!==null&&(xp(cn),cn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Ve===0&&(Ve=3):tm())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return Ji(),up(e,t),e===null&&Ca(t.stateNode.containerInfo),ot(t),null;case 10:return zh(t.type._context),ot(t),null;case 17:return Pt(t.type)&&Ol(),ot(t),null;case 19:if(we(_e),o=t.memoizedState,o===null)return ot(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Lo(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Rl(e),a!==null){for(t.flags|=128,Lo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(_e,_e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>to&&(t.flags|=128,r=!0,Lo(o,!1),t.lanes=4194304)}else{if(!r)if(e=Rl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ke)return ot(t),null}else 2*Ie()-o.renderingStartTime>to&&n!==1073741824&&(t.flags|=128,r=!0,Lo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,n=_e.current,xe(_e,r?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return em(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Lt&1073741824&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function Fj(e,t){switch(Dh(t),t.tag){case 1:return Pt(t.type)&&Ol(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(),we(jt),we(dt),Uh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vh(t),null;case 13:if(we(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));Qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(_e),null;case 4:return Ji(),null;case 10:return zh(t.type._context),null;case 22:case 23:return em(),null;case 24:return null;default:return null}}var Ss=!1,ct=!1,Nj=typeof WeakSet=="function"?WeakSet:Set,Y=null;function zi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function dp(e,t,n){try{n()}catch(r){Te(e,t,r)}}var _0=!1;function Bj(e,t){if(Yf=El,e=Uy(),Ih(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,d=0,f=e,v=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)v=f,f=h;for(;;){if(f===e)break t;if(v===n&&++c===i&&(l=a),v===o&&++d===r&&(s=a),(h=f.nextSibling)!==null)break;f=v,v=f.parentNode}f=h}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xf={focusedElem:e,selectionRange:n},El=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,w=g.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:an(t.type,x),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(C){Te(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return g=_0,_0=!1,g}function sa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&dp(t,n,o)}i=i.next}while(i!==r)}}function Ic(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nb(e){var t=e.alternate;t!==null&&(e.alternate=null,Nb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_n],delete t[_a],delete t[Zf],delete t[Cj],delete t[kj])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bb(e){return e.tag===5||e.tag===3||e.tag===4}function E0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tl));else if(r!==4&&(e=e.child,e!==null))for(pp(e,t,n),e=e.sibling;e!==null;)pp(e,t,n),e=e.sibling}function hp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hp(e,t,n),e=e.sibling;e!==null;)hp(e,t,n),e=e.sibling}var et=null,sn=!1;function lr(e,t,n){for(n=n.child;n!==null;)Vb(e,t,n),n=n.sibling}function Vb(e,t,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(kc,n)}catch{}switch(n.tag){case 5:ct||zi(n,t);case 6:var r=et,i=sn;et=null,lr(e,t,n),et=r,sn=i,et!==null&&(sn?(e=et,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(sn?(e=et,n=n.stateNode,e.nodeType===8?fd(e.parentNode,n):e.nodeType===1&&fd(e,n),ba(e)):fd(et,n.stateNode));break;case 4:r=et,i=sn,et=n.stateNode.containerInfo,sn=!0,lr(e,t,n),et=r,sn=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&dp(n,t,a),i=i.next}while(i!==r)}lr(e,t,n);break;case 1:if(!ct&&(zi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}lr(e,t,n);break;case 21:lr(e,t,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,lr(e,t,n),ct=r):lr(e,t,n);break;default:lr(e,t,n)}}function j0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nj),t.forEach(function(r){var i=Kj.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,sn=!1;break e;case 3:et=l.stateNode.containerInfo,sn=!0;break e;case 4:et=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(et===null)throw Error(U(160));Vb(o,a,i),et=null,sn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Te(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ub(t,e),t=t.sibling}function Ub(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),bn(e),r&4){try{sa(3,e,e.return),Ic(3,e)}catch(x){Te(e,e.return,x)}try{sa(5,e,e.return)}catch(x){Te(e,e.return,x)}}break;case 1:tn(t,e),bn(e),r&512&&n!==null&&zi(n,n.return);break;case 5:if(tn(t,e),bn(e),r&512&&n!==null&&zi(n,n.return),e.flags&32){var i=e.stateNode;try{ga(i,"")}catch(x){Te(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&uy(i,o),zf(l,a);var c=zf(l,o);for(a=0;a<s.length;a+=2){var d=s[a],f=s[a+1];d==="style"?my(i,f):d==="dangerouslySetInnerHTML"?py(i,f):d==="children"?ga(i,f):yh(i,d,f,c)}switch(l){case"input":Mf(i,o);break;case"textarea":dy(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Ni(i,!!o.multiple,h,!1):v!==!!o.multiple&&(o.defaultValue!=null?Ni(i,!!o.multiple,o.defaultValue,!0):Ni(i,!!o.multiple,o.multiple?[]:"",!1))}i[_a]=o}catch(x){Te(e,e.return,x)}}break;case 6:if(tn(t,e),bn(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Te(e,e.return,x)}}break;case 3:if(tn(t,e),bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(t.containerInfo)}catch(x){Te(e,e.return,x)}break;case 4:tn(t,e),bn(e);break;case 13:tn(t,e),bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zh=Ie())),r&4&&j0(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ct=(c=ct)||d,tn(t,e),ct=c):tn(t,e),bn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(Y=e,d=e.child;d!==null;){for(f=Y=d;Y!==null;){switch(v=Y,h=v.child,v.tag){case 0:case 11:case 14:case 15:sa(4,v,v.return);break;case 1:zi(v,v.return);var g=v.stateNode;if(typeof g.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){Te(r,n,x)}}break;case 5:zi(v,v.return);break;case 22:if(v.memoizedState!==null){T0(f);continue}}h!==null?(h.return=v,Y=h):T0(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=hy("display",a))}catch(x){Te(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Te(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tn(t,e),bn(e),r&4&&j0(e);break;case 21:break;default:tn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bb(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ga(i,""),r.flags&=-33);var o=E0(e);hp(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=E0(e);pp(e,l,a);break;default:throw Error(U(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vj(e,t,n){Y=e,Wb(e)}function Wb(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var i=Y,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ss;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ct;l=Ss;var c=ct;if(Ss=a,(ct=s)&&!c)for(Y=i;Y!==null;)a=Y,s=a.child,a.tag===22&&a.memoizedState!==null?O0(i):s!==null?(s.return=a,Y=s):O0(i);for(;o!==null;)Y=o,Wb(o),o=o.sibling;Y=i,Ss=l,ct=c}P0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Y=o):P0(e)}}function P0(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ct||Ic(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:an(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&d0(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}d0(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ba(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ct||t.flags&512&&fp(t)}catch(v){Te(t,t.return,v)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function T0(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function O0(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ic(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Te(t,i,s)}}var o=t.return;try{fp(t)}catch(s){Te(t,o,s)}break;case 5:var a=t.return;try{fp(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){Y=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Y=l;break}Y=t.return}}var Uj=Math.ceil,Nl=rr.ReactCurrentDispatcher,Kh=rr.ReactCurrentOwner,Kt=rr.ReactCurrentBatchConfig,le=0,Xe=null,Re=null,nt=0,Lt=0,Fi=Mr(0),Ve=0,$a=null,ti=0,Mc=0,Qh=0,la=null,_t=null,Zh=0,to=1/0,zn=null,Bl=!1,mp=null,_r=null,Cs=!1,gr=null,Vl=0,ca=0,gp=null,Zs=-1,Js=0;function vt(){return le&6?Ie():Zs!==-1?Zs:Zs=Ie()}function Er(e){return e.mode&1?le&2&&nt!==0?nt&-nt:Ej.transition!==null?(Js===0&&(Js=jy()),Js):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Dy(e.type)),e):1}function fn(e,t,n,r){if(50<ca)throw ca=0,gp=null,Error(U(185));Wa(e,n,r),(!(le&2)||e!==Xe)&&(e===Xe&&(!(le&2)&&(Mc|=n),Ve===4&&pr(e,nt)),Tt(e,r),n===1&&le===0&&!(t.mode&1)&&(to=Ie()+500,Tc&&Dr()))}function Tt(e,t){var n=e.callbackNode;EE(e,t);var r=_l(e,e===Xe?nt:0);if(r===0)n!==null&&Fg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fg(n),t===1)e.tag===0?_j($0.bind(null,e)):Jy($0.bind(null,e)),wj(function(){!(le&6)&&Dr()}),n=null;else{switch(Py(r)){case 1:n=kh;break;case 4:n=_y;break;case 16:n=kl;break;case 536870912:n=Ey;break;default:n=kl}n=Zb(n,Hb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hb(e,t){if(Zs=-1,Js=0,le&6)throw Error(U(327));var n=e.callbackNode;if(Hi()&&e.callbackNode!==n)return null;var r=_l(e,e===Xe?nt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ul(e,r);else{t=r;var i=le;le|=2;var o=qb();(Xe!==e||nt!==t)&&(zn=null,to=Ie()+500,Xr(e,t));do try{Gj();break}catch(l){Gb(e,l)}while(1);Rh(),Nl.current=o,le=i,Re!==null?t=0:(Xe=null,nt=0,t=Ve)}if(t!==0){if(t===2&&(i=Uf(e),i!==0&&(r=i,t=vp(e,i))),t===1)throw n=$a,Xr(e,0),pr(e,r),Tt(e,Ie()),n;if(t===6)pr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Wj(i)&&(t=Ul(e,r),t===2&&(o=Uf(e),o!==0&&(r=o,t=vp(e,o))),t===1))throw n=$a,Xr(e,0),pr(e,r),Tt(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Nr(e,_t,zn);break;case 3:if(pr(e,r),(r&130023424)===r&&(t=Zh+500-Ie(),10<t)){if(_l(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){vt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Qf(Nr.bind(null,e,_t,zn),t);break}Nr(e,_t,zn);break;case 4:if(pr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uj(r/1960))-r,10<r){e.timeoutHandle=Qf(Nr.bind(null,e,_t,zn),r);break}Nr(e,_t,zn);break;case 5:Nr(e,_t,zn);break;default:throw Error(U(329))}}}return Tt(e,Ie()),e.callbackNode===n?Hb.bind(null,e):null}function vp(e,t){var n=la;return e.current.memoizedState.isDehydrated&&(Xr(e,t).flags|=256),e=Ul(e,t),e!==2&&(t=_t,_t=n,t!==null&&xp(t)),e}function xp(e){_t===null?_t=e:_t.push.apply(_t,e)}function Wj(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pr(e,t){for(t&=~Qh,t&=~Mc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dn(t),r=1<<n;e[n]=-1,t&=~r}}function $0(e){if(le&6)throw Error(U(327));Hi();var t=_l(e,0);if(!(t&1))return Tt(e,Ie()),null;var n=Ul(e,t);if(e.tag!==0&&n===2){var r=Uf(e);r!==0&&(t=r,n=vp(e,r))}if(n===1)throw n=$a,Xr(e,0),pr(e,t),Tt(e,Ie()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nr(e,_t,zn),Tt(e,Ie()),null}function Jh(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(to=Ie()+500,Tc&&Dr())}}function ni(e){gr!==null&&gr.tag===0&&!(le&6)&&Hi();var t=le;le|=1;var n=Kt.transition,r=ge;try{if(Kt.transition=null,ge=1,e)return e()}finally{ge=r,Kt.transition=n,le=t,!(le&6)&&Dr()}}function em(){Lt=Fi.current,we(Fi)}function Xr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bj(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Dh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ol();break;case 3:Ji(),we(jt),we(dt),Uh();break;case 5:Vh(r);break;case 4:Ji();break;case 13:we(_e);break;case 19:we(_e);break;case 10:zh(r.type._context);break;case 22:case 23:em()}n=n.return}if(Xe=e,Re=e=jr(e.current,null),nt=Lt=t,Ve=0,$a=null,Qh=Mc=ti=0,_t=la=null,Gr!==null){for(t=0;t<Gr.length;t++)if(n=Gr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Gr=null}return e}function Gb(e,t){do{var n=Re;try{if(Rh(),Xs.current=Fl,zl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zl=!1}if(ei=0,Ye=Ne=Ee=null,aa=!1,Pa=0,Kh.current=null,n===null||n.return===null){Ve=1,$a=t,Re=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=nt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var v=d.alternate;v?(d.updateQueue=v.updateQueue,d.memoizedState=v.memoizedState,d.lanes=v.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=x0(a);if(h!==null){h.flags&=-257,y0(h,a,l,o,t),h.mode&1&&v0(o,c,t),t=h,s=c;var g=t.updateQueue;if(g===null){var x=new Set;x.add(s),t.updateQueue=x}else g.add(s);break e}else{if(!(t&1)){v0(o,c,t),tm();break e}s=Error(U(426))}}else if(ke&&l.mode&1){var w=x0(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),y0(w,a,l,o,t),Lh(eo(s,l));break e}}o=s=eo(s,l),Ve!==4&&(Ve=2),la===null?la=[o]:la.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Tb(o,s,t);u0(o,m);break e;case 1:l=s;var p=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(_r===null||!_r.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Ob(o,l,t);u0(o,C);break e}}o=o.return}while(o!==null)}Xb(n)}catch(S){t=S,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function qb(){var e=Nl.current;return Nl.current=Fl,e===null?Fl:e}function tm(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Xe===null||!(ti&268435455)&&!(Mc&268435455)||pr(Xe,nt)}function Ul(e,t){var n=le;le|=2;var r=qb();(Xe!==e||nt!==t)&&(zn=null,Xr(e,t));do try{Hj();break}catch(i){Gb(e,i)}while(1);if(Rh(),le=n,Nl.current=r,Re!==null)throw Error(U(261));return Xe=null,nt=0,Ve}function Hj(){for(;Re!==null;)Yb(Re)}function Gj(){for(;Re!==null&&!vE();)Yb(Re)}function Yb(e){var t=Qb(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?Xb(e):Re=t,Kh.current=null}function Xb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Fj(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Re=null;return}}else if(n=zj(n,t,Lt),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ve===0&&(Ve=5)}function Nr(e,t,n){var r=ge,i=Kt.transition;try{Kt.transition=null,ge=1,qj(e,t,n,r)}finally{Kt.transition=i,ge=r}return null}function qj(e,t,n,r){do Hi();while(gr!==null);if(le&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(jE(e,o),e===Xe&&(Re=Xe=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cs||(Cs=!0,Zb(kl,function(){return Hi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Kt.transition,Kt.transition=null;var a=ge;ge=1;var l=le;le|=4,Kh.current=null,Bj(e,n),Ub(n,e),pj(Xf),El=!!Yf,Xf=Yf=null,e.current=n,Vj(n),xE(),le=l,ge=a,Kt.transition=o}else e.current=n;if(Cs&&(Cs=!1,gr=e,Vl=i),o=e.pendingLanes,o===0&&(_r=null),wE(n.stateNode),Tt(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bl)throw Bl=!1,e=mp,mp=null,e;return Vl&1&&e.tag!==0&&Hi(),o=e.pendingLanes,o&1?e===gp?ca++:(ca=0,gp=e):ca=0,Dr(),null}function Hi(){if(gr!==null){var e=Py(Vl),t=Kt.transition,n=ge;try{if(Kt.transition=null,ge=16>e?16:e,gr===null)var r=!1;else{if(e=gr,gr=null,Vl=0,le&6)throw Error(U(331));var i=le;for(le|=4,Y=e.current;Y!==null;){var o=Y,a=o.child;if(Y.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:sa(8,d,o)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var v=d.sibling,h=d.return;if(Nb(d),d===c){Y=null;break}if(v!==null){v.return=h,Y=v;break}Y=h}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}Y=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Y=a;else e:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:sa(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,Y=m;break e}Y=o.return}}var p=e.current;for(Y=p;Y!==null;){a=Y;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,Y=b;else e:for(a=p;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ic(9,l)}}catch(S){Te(l,l.return,S)}if(l===a){Y=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,Y=C;break e}Y=l.return}}if(le=i,Dr(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(kc,e)}catch{}r=!0}return r}finally{ge=n,Kt.transition=t}}return!1}function I0(e,t,n){t=eo(n,t),t=Tb(e,t,1),e=kr(e,t,1),t=vt(),e!==null&&(Wa(e,1,t),Tt(e,t))}function Te(e,t,n){if(e.tag===3)I0(e,e,n);else for(;t!==null;){if(t.tag===3){I0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){e=eo(n,e),e=Ob(t,e,1),t=kr(t,e,1),e=vt(),t!==null&&(Wa(t,1,e),Tt(t,e));break}}t=t.return}}function Yj(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(nt&n)===n&&(Ve===4||Ve===3&&(nt&130023424)===nt&&500>Ie()-Zh?Xr(e,0):Qh|=n),Tt(e,t)}function Kb(e,t){t===0&&(e.mode&1?(t=ps,ps<<=1,!(ps&130023424)&&(ps=4194304)):t=1);var n=vt();e=Qn(e,t),e!==null&&(Wa(e,t,n),Tt(e,n))}function Xj(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kb(e,n)}function Kj(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Kb(e,n)}var Qb;Qb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||jt.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,Rj(e,t,n);Et=!!(e.flags&131072)}else Et=!1,ke&&t.flags&1048576&&eb(t,Ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qs(e,t),e=t.pendingProps;var i=Ki(t,dt.current);Wi(t,n),i=Hh(null,t,r,e,i,n);var o=Gh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(r)?(o=!0,$l(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nh(t),i.updater=Oc,t.stateNode=i,i._reactInternals=t,ip(t,r,e,n),t=sp(null,t,r,!0,o,n)):(t.tag=0,ke&&o&&Mh(t),mt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Zj(r),e=an(r,e),i){case 0:t=ap(null,t,r,e,n);break e;case 1:t=S0(null,t,r,e,n);break e;case 11:t=b0(null,t,r,e,n);break e;case 14:t=w0(null,t,r,an(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),ap(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),S0(e,t,r,i,n);case 3:e:{if(Db(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ib(e,t),Al(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=eo(Error(U(423)),t),t=C0(e,t,r,n,i);break e}else if(r!==i){i=eo(Error(U(424)),t),t=C0(e,t,r,n,i);break e}else for(Rt=Cr(t.stateNode.containerInfo.firstChild),Ft=t,ke=!0,cn=null,n=lb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){t=Zn(e,t,n);break e}mt(e,t,r,n)}t=t.child}return t;case 5:return cb(t),e===null&&tp(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Kf(r,i)?a=null:o!==null&&Kf(r,o)&&(t.flags|=32),Mb(e,t),mt(e,t,a,n),t.child;case 6:return e===null&&tp(t),null;case 13:return Lb(e,t,n);case 4:return Bh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zi(t,null,r,n):mt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),b0(e,t,r,i,n);case 7:return mt(e,t,t.pendingProps,n),t.child;case 8:return mt(e,t,t.pendingProps.children,n),t.child;case 12:return mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,xe(Dl,r._currentValue),r._currentValue=a,o!==null)if(gn(o.value,a)){if(o.children===i.children&&!jt.current){t=Zn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Gn(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),np(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(U(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),np(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}mt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Wi(t,n),i=Qt(i),r=r(i),t.flags|=1,mt(e,t,r,n),t.child;case 14:return r=t.type,i=an(r,t.pendingProps),i=an(r.type,i),w0(e,t,r,i,n);case 15:return $b(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),Qs(e,t),t.tag=1,Pt(r)?(e=!0,$l(t)):e=!1,Wi(t,n),ab(t,r,i),ip(t,r,i,n),sp(null,t,r,!0,e,n);case 19:return Ab(e,t,n);case 22:return Ib(e,t,n)}throw Error(U(156,t.tag))};function Zb(e,t){return ky(e,t)}function Qj(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,r){return new Qj(e,t,n,r)}function nm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zj(e){if(typeof e=="function")return nm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wh)return 11;if(e===Sh)return 14}return 2}function jr(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function el(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")nm(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ti:return Kr(n.children,i,o,t);case bh:a=8,i|=8;break;case Pf:return e=Xt(12,n,t,i|2),e.elementType=Pf,e.lanes=o,e;case Tf:return e=Xt(13,n,t,i),e.elementType=Tf,e.lanes=o,e;case Of:return e=Xt(19,n,t,i),e.elementType=Of,e.lanes=o,e;case sy:return Dc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oy:a=10;break e;case ay:a=9;break e;case wh:a=11;break e;case Sh:a=14;break e;case ur:a=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Xt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Kr(e,t,n,r){return e=Xt(7,e,r,t),e.lanes=n,e}function Dc(e,t,n,r){return e=Xt(22,e,r,t),e.elementType=sy,e.lanes=n,e.stateNode={isHidden:!1},e}function bd(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function wd(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jj(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=td(0),this.expirationTimes=td(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=td(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rm(e,t,n,r,i,o,a,l,s){return e=new Jj(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nh(o),e}function eP(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jb(e){if(!e)return Or;e=e._reactInternals;e:{if(ui(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(Pt(n))return Zy(e,n,t)}return t}function ew(e,t,n,r,i,o,a,l,s){return e=rm(n,r,!0,e,i,o,a,l,s),e.context=Jb(null),n=e.current,r=vt(),i=Er(n),o=Gn(r,i),o.callback=t??null,kr(n,o,i),e.current.lanes=i,Wa(e,i,r),Tt(e,r),e}function Lc(e,t,n,r){var i=t.current,o=vt(),a=Er(i);return n=Jb(n),t.context===null?t.context=n:t.pendingContext=n,t=Gn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kr(i,t,a),e!==null&&(fn(e,i,a,o),Ys(e,i,a)),a}function Wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function M0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function im(e,t){M0(e,t),(e=e.alternate)&&M0(e,t)}function tP(){return null}var tw=typeof reportError=="function"?reportError:function(e){console.error(e)};function om(e){this._internalRoot=e}Ac.prototype.render=om.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Lc(e,t,null,null)};Ac.prototype.unmount=om.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ni(function(){Lc(null,e,null,null)}),t[Kn]=null}};function Ac(e){this._internalRoot=e}Ac.prototype.unstable_scheduleHydration=function(e){if(e){var t=$y();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fr.length&&t!==0&&t<fr[n].priority;n++);fr.splice(n,0,e),n===0&&My(e)}};function am(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function D0(){}function nP(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Wl(a);o.call(c)}}var a=ew(t,r,e,0,null,!1,!1,"",D0);return e._reactRootContainer=a,e[Kn]=a.current,Ca(e.nodeType===8?e.parentNode:e),ni(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Wl(s);l.call(c)}}var s=rm(e,0,!1,null,null,!1,!1,"",D0);return e._reactRootContainer=s,e[Kn]=s.current,Ca(e.nodeType===8?e.parentNode:e),ni(function(){Lc(t,s,n,r)}),s}function zc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Wl(a);l.call(s)}}Lc(t,a,e,i)}else a=nP(n,t,e,i,r);return Wl(a)}Ty=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Yo(t.pendingLanes);n!==0&&(_h(t,n|1),Tt(t,Ie()),!(le&6)&&(to=Ie()+500,Dr()))}break;case 13:ni(function(){var r=Qn(e,1);if(r!==null){var i=vt();fn(r,e,1,i)}}),im(e,1)}};Eh=function(e){if(e.tag===13){var t=Qn(e,134217728);if(t!==null){var n=vt();fn(t,e,134217728,n)}im(e,134217728)}};Oy=function(e){if(e.tag===13){var t=Er(e),n=Qn(e,t);if(n!==null){var r=vt();fn(n,e,t,r)}im(e,t)}};$y=function(){return ge};Iy=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};Nf=function(e,t,n){switch(t){case"input":if(Mf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Pc(r);if(!i)throw Error(U(90));cy(r),Mf(r,i)}}}break;case"textarea":dy(e,n);break;case"select":t=n.value,t!=null&&Ni(e,!!n.multiple,t,!1)}};xy=Jh;yy=ni;var rP={usingClientEntryPoint:!1,Events:[Ga,Mi,Pc,gy,vy,Jh]},Ao={findFiberByHostInstance:Hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iP={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sy(e),e===null?null:e.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||tP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ks.isDisabled&&ks.supportsFiber)try{kc=ks.inject(iP),jn=ks}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rP;Ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!am(t))throw Error(U(200));return eP(e,t,null,n)};Ut.createRoot=function(e,t){if(!am(e))throw Error(U(299));var n=!1,r="",i=tw;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=rm(e,1,!1,null,null,n,!1,r,i),e[Kn]=t.current,Ca(e.nodeType===8?e.parentNode:e),new om(t)};Ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=Sy(t),e=e===null?null:e.stateNode,e};Ut.flushSync=function(e){return ni(e)};Ut.hydrate=function(e,t,n){if(!Rc(t))throw Error(U(200));return zc(null,e,t,!0,n)};Ut.hydrateRoot=function(e,t,n){if(!am(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=tw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ew(t,null,e,1,n??null,i,!1,o,a),e[Kn]=t.current,Ca(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ac(t)};Ut.render=function(e,t,n){if(!Rc(t))throw Error(U(200));return zc(null,e,t,!1,n)};Ut.unmountComponentAtNode=function(e){if(!Rc(e))throw Error(U(40));return e._reactRootContainer?(ni(function(){zc(null,null,e,!1,function(){e._reactRootContainer=null,e[Kn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Jh;Ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Rc(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return zc(e,t,n,!1,r)};Ut.version="18.2.0-next-9e3b772b8-20220608";function nw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nw)}catch(e){console.error(e)}}nw(),ey.exports=Ut;var Fc=ey.exports,L0=Fc;Ef.createRoot=L0.createRoot,Ef.hydrateRoot=L0.hydrateRoot;var ut=function(){return ut=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ut.apply(this,arguments)};function no(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function oP(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var aP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,sP=oP(function(e){return aP.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),be="-ms-",ua="-moz-",ue="-webkit-",rw="comm",Nc="rule",sm="decl",lP="@import",cP="@namespace",iw="@keyframes",uP="@layer",ow=Math.abs,lm=String.fromCharCode,yp=Object.assign;function dP(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function aw(e){return e.trim()}function Fn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function tl(e,t,n){return e.indexOf(t,n)}function Be(e,t){return e.charCodeAt(t)|0}function ri(e,t,n){return e.slice(t,n)}function ln(e){return e.length}function sw(e){return e.length}function Ko(e,t){return t.push(e),e}function fP(e,t){return e.map(t).join("")}function A0(e,t){return e.filter(function(n){return!Fn(n,t)})}var Bc=1,ro=1,lw=0,Jt=0,Le=0,vo="";function Vc(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Bc,column:ro,length:a,return:"",siblings:l}}function cr(e,t){return yp(Vc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function gi(e){for(;e.root;)e=cr(e.root,{children:[e]});Ko(e,e.siblings)}function pP(){return Le}function hP(){return Le=Jt>0?Be(vo,--Jt):0,ro--,Le===10&&(ro=1,Bc--),Le}function pn(){return Le=Jt<lw?Be(vo,Jt++):0,ro++,Le===10&&(ro=1,Bc++),Le}function vr(){return Be(vo,Jt)}function nl(){return Jt}function Uc(e,t){return ri(vo,e,t)}function Ia(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mP(e){return Bc=ro=1,lw=ln(vo=e),Jt=0,[]}function gP(e){return vo="",e}function Sd(e){return aw(Uc(Jt-1,bp(e===91?e+2:e===40?e+1:e)))}function vP(e){for(;(Le=vr())&&Le<33;)pn();return Ia(e)>2||Ia(Le)>3?"":" "}function xP(e,t){for(;--t&&pn()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Uc(e,nl()+(t<6&&vr()==32&&pn()==32))}function bp(e){for(;pn();)switch(Le){case e:return Jt;case 34:case 39:e!==34&&e!==39&&bp(Le);break;case 40:e===41&&bp(e);break;case 92:pn();break}return Jt}function yP(e,t){for(;pn()&&e+Le!==47+10;)if(e+Le===42+42&&vr()===47)break;return"/*"+Uc(t,Jt-1)+"*"+lm(e===47?e:pn())}function bP(e){for(;!Ia(vr());)pn();return Uc(e,Jt)}function wP(e){return gP(rl("",null,null,null,[""],e=mP(e),0,[0],e))}function rl(e,t,n,r,i,o,a,l,s){for(var c=0,d=0,f=a,v=0,h=0,g=0,x=1,w=1,m=1,p=0,b="",C=i,S=o,j=r,E=b;w;)switch(g=p,p=pn()){case 40:if(g!=108&&Be(E,f-1)==58){tl(E+=ne(Sd(p),"&","&\f"),"&\f",ow(c?l[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:E+=Sd(p);break;case 9:case 10:case 13:case 32:E+=vP(g);break;case 92:E+=xP(nl()-1,7);continue;case 47:switch(vr()){case 42:case 47:Ko(SP(yP(pn(),nl()),t,n,s),s),(Ia(g||1)==5||Ia(vr()||1)==5)&&ln(E)&&ri(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*x:l[c++]=ln(E)*m;case 125*x:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+d:m==-1&&(E=ne(E,/\f/g,"")),h>0&&(ln(E)-f||x===0&&g===47)&&Ko(h>32?z0(E+";",r,n,f-1,s):z0(ne(E," ","")+";",r,n,f-2,s),s);break;case 59:E+=";";default:if(Ko(j=R0(E,t,n,c,d,i,l,b,C=[],S=[],f,o),o),p===123)if(d===0)rl(E,t,j,j,C,o,f,l,S);else{switch(v){case 99:if(Be(E,3)===110)break;case 108:if(Be(E,2)===97)break;default:d=0;case 100:case 109:case 115:}d?rl(e,j,j,r&&Ko(R0(e,j,j,0,0,i,l,b,i,C=[],f,S),S),i,S,f,l,r?C:S):rl(E,j,j,j,[""],S,0,l,S)}}c=d=h=0,x=m=1,b=E="",f=a;break;case 58:f=1+ln(E),h=g;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&hP()==125)continue}switch(E+=lm(p),p*x){case 38:m=d>0?1:(E+="\f",-1);break;case 44:l[c++]=(ln(E)-1)*m,m=1;break;case 64:vr()===45&&(E+=Sd(pn())),v=vr(),d=f=ln(b=E+=bP(nl())),p++;break;case 45:g===45&&ln(E)==2&&(x=0)}}return o}function R0(e,t,n,r,i,o,a,l,s,c,d,f){for(var v=i-1,h=i===0?o:[""],g=sw(h),x=0,w=0,m=0;x<r;++x)for(var p=0,b=ri(e,v+1,v=ow(w=a[x])),C=e;p<g;++p)(C=aw(w>0?h[p]+" "+b:ne(b,/&\f/g,h[p])))&&(s[m++]=C);return Vc(e,t,n,i===0?Nc:l,s,c,d,f)}function SP(e,t,n,r){return Vc(e,t,n,rw,lm(pP()),ri(e,2,-2),0,r)}function z0(e,t,n,r,i){return Vc(e,t,n,sm,ri(e,0,r),ri(e,r+1,-1),r,i)}function cw(e,t,n){switch(dP(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ua+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+ua+e+be+e+e;case 5936:switch(Be(e,t+11)){case 114:return ue+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+be+e+e;case 6165:return ue+e+be+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+be+"flex-$1$2")+e;case 5443:return ue+e+be+"flex-item-"+ne(e,/flex-|-self/g,"")+(Fn(e,/flex-|baseline/)?"":be+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+be+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+be+ne(e,"shrink","negative")+e;case 5292:return ue+e+be+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+be+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+be+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!Fn(e,/flex-|baseline/))return be+"grid-column-align"+ri(e,t)+e;break;case 2592:case 3360:return be+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Fn(r.props,/grid-\w+-end/)})?~tl(e+(n=n[t].value),"span",0)?e:be+ne(e,"-start","")+e+be+"grid-row-span:"+(~tl(n,"span",0)?Fn(n,/\d+/):+Fn(n,/\d+/)-+Fn(e,/\d+/))+";":be+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Fn(r.props,/grid-\w+-start/)})?e:be+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+ua+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~tl(e,"stretch",0)?cw(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,c){return be+i+":"+o+c+(a?be+i+"-span:"+(l?s:+s-+o)+c:"")+e});case 4949:if(Be(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Be(e,Be(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Be(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+be+"$2box$3")+e;case 100:return ne(e,":",":"+be)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Hl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function CP(e,t,n,r){switch(e.type){case uP:if(e.children.length)break;case lP:case cP:case sm:return e.return=e.return||e.value;case rw:return"";case iw:return e.return=e.value+"{"+Hl(e.children,r)+"}";case Nc:if(!ln(e.value=e.props.join(",")))return""}return ln(n=Hl(e.children,r))?e.return=e.value+"{"+n+"}":""}function kP(e){var t=sw(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function _P(e){return function(t){t.root||(t=t.return)&&e(t)}}function EP(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case sm:e.return=cw(e.value,e.length,n);return;case iw:return Hl([cr(e,{value:ne(e.value,"@","@"+ue)})],r);case Nc:if(e.length)return fP(n=e.props,function(i){switch(Fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gi(cr(e,{props:[ne(i,/:(read-\w+)/,":"+ua+"$1")]})),gi(cr(e,{props:[i]})),yp(e,{props:A0(n,r)});break;case"::placeholder":gi(cr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),gi(cr(e,{props:[ne(i,/:(plac\w+)/,":"+ua+"$1")]})),gi(cr(e,{props:[ne(i,/:(plac\w+)/,be+"input-$1")]})),gi(cr(e,{props:[i]})),yp(e,{props:A0(n,r)});break}return""})}}var jP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},io=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",uw="active",dw="data-styled-version",Wc="6.3.11",cm=`/*!sc*/
`,da=typeof window<"u"&&typeof document<"u",PP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),TP={};function Ya(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var il=new Map,Gl=new Map,ol=1,Qo=function(e){if(il.has(e))return il.get(e);for(;Gl.has(ol);)ol++;var t=ol++;return il.set(e,t),Gl.set(t,e),t},OP=function(e,t){ol=t+1,il.set(e,t),Gl.set(t,e)},um=Object.freeze([]),oo=Object.freeze({});function fw(e,t,n){return n===void 0&&(n=oo),e.theme!==n.theme&&e.theme||t||n.theme}var pw=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),$P=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,IP=/(^-|-$)/g;function F0(e){return e.replace($P,"-").replace(IP,"")}var MP=/(a)(d)/gi,N0=function(e){return String.fromCharCode(e+(e>25?39:97))};function wp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=N0(t%52)+n;return(N0(t%52)+n).replace(MP,"$1-$2")}var Cd,Br=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hw=function(e){return Br(5381,e)};function dm(e){return wp(hw(e)>>>0)}function DP(e){return e.displayName||e.name||"Component"}function kd(e){return typeof e=="string"&&!0}var mw=typeof Symbol=="function"&&Symbol.for,gw=mw?Symbol.for("react.memo"):60115,LP=mw?Symbol.for("react.forward_ref"):60112,AP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},RP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zP=((Cd={})[LP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cd[gw]=vw,Cd);function B0(e){return("type"in(t=e)&&t.type.$$typeof)===gw?vw:"$$typeof"in e?zP[e.$$typeof]:AP;var t}var FP=Object.defineProperty,NP=Object.getOwnPropertyNames,V0=Object.getOwnPropertySymbols,BP=Object.getOwnPropertyDescriptor,VP=Object.getPrototypeOf,U0=Object.prototype;function xw(e,t,n){if(typeof t!="string"){if(U0){var r=VP(t);r&&r!==U0&&xw(e,r,n)}var i=NP(t);V0&&(i=i.concat(V0(t)));for(var o=B0(e),a=B0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in RP||n&&n[s]||a&&s in a||o&&s in o)){var c=BP(t,s);try{FP(e,s,c)}catch{}}}}return e}function ao(e){return typeof e=="function"}function fm(e){return typeof e=="object"&&"styledComponentId"in e}function Yr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ql(e,t){return e.join(t||"")}function Ma(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sp(e,t,n){if(n===void 0&&(n=!1),!n&&!Ma(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sp(e[r],t[r]);else if(Ma(t))for(var r in t)e[r]=Sp(e[r],t[r]);return e}function pm(e,t){Object.defineProperty(e,"toString",{value:t})}var UP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ya(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+cm;return n},e}(),WP="style[".concat(io,"][").concat(dw,'="').concat(Wc,'"]'),HP=new RegExp("^".concat(io,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),W0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Cp=function(e){if(!e)return document;if(W0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(W0(t))return t}return document},GP=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},qP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(cm),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(HP);if(s){var c=0|parseInt(s[1],10),d=s[2];c!==0&&(OP(d,c),GP(e,d,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},_d=function(e){for(var t=Cp(e.options.target).querySelectorAll(WP),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(io)!==uw&&(qP(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function YP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(io,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(io,uw),r.setAttribute(dw,Wc);var a=YP();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},XP=function(){function e(t){this.element=yw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ya(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),KP=function(){function e(t){this.element=yw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),QP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),H0=da,ZP={isServer:!da,useCSSOMInjection:!PP},Yl=function(){function e(t,n,r){t===void 0&&(t=oo),n===void 0&&(n={});var i=this;this.options=ut(ut({},ZP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&da&&H0&&(H0=!1,_d(this)),pm(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",c=function(f){var v=function(m){return Gl.get(m)}(f);if(v===void 0)return"continue";var h=o.names.get(v);if(h===void 0||!h.size)return"continue";var g=a.getGroup(f);if(g.length===0)return"continue";var x=io+".g"+f+'[id="'+v+'"]',w="";h.forEach(function(m){m.length>0&&(w+=m+",")}),s+=g+x+'{content:"'+w+'"}'+cm},d=0;d<l;d++)c(d);return s}(i)})}return e.registerId=function(t){return Qo(t)},e.prototype.rehydrate=function(){!this.server&&da&&_d(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ut(ut({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&da&&t.target!==this.options.target&&Cp(this.options.target)!==Cp(t.target)&&_d(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new QP(i):r?new XP(i):new KP(i)}(this.options),new UP(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Qo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Qo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Qo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),JP=/&/g,Nn=47,Vr=42;function G0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==Nn||e.charCodeAt(o+1)!==Vr)if(i)a===Vr&&e.charCodeAt(o+1)===Nn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function bw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=bw(n.children,t)),n})}function eT(e){var t,n,r,i=e===void 0?oo:e,o=i.options,a=o===void 0?oo:o,l=i.plugins,s=l===void 0?um:l,c=function(g,x,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):g},d=s.slice();d.push(function(g){g.type===Nc&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(JP,n).replace(r,c))}),a.prefix&&d.push(EP),d.push(CP);var f=[],v=kP(d.concat(_P(function(g){return f.push(g)}))),h=function(g,x,w,m){x===void 0&&(x=""),w===void 0&&(w=""),m===void 0&&(m="&"),t=m,n=x,r=void 0;var p=function(C){if(!G0(C))return C;for(var S=C.length,j="",E=0,_=0,$=0,I=!1,M=0;M<S;M++){var D=C.charCodeAt(M);if($!==0||I||D!==Nn||C.charCodeAt(M+1)!==Vr)if(I)D===Vr&&C.charCodeAt(M+1)===Nn&&(I=!1,M++);else if(D!==34&&D!==39||M!==0&&C.charCodeAt(M-1)===92){if($===0)if(D===123)_++;else if(D===125){if(--_<0){for(var T=M+1;T<S;){var A=C.charCodeAt(T);if(A===59||A===10)break;T++}T<S&&C.charCodeAt(T)===59&&T++,_=0,M=T-1,E=T;continue}_===0&&(j+=C.substring(E,M+1),E=M+1)}else D===59&&_===0&&(j+=C.substring(E,M+1),E=M+1)}else $===0?$=D:$===D&&($=0);else I=!0,M++}if(E<S){var L=C.substring(E);G0(L)||(j+=L)}return j}(function(C){if(C.indexOf("//")===-1)return C;for(var S=C.length,j=[],E=0,_=0,$=0,I=0;_<S;){var M=C.charCodeAt(_);if(M!==34&&M!==39||_!==0&&C.charCodeAt(_-1)===92)if($===0)if(M===Nn&&_+1<S&&C.charCodeAt(_+1)===Vr){for(_+=2;_+1<S&&(C.charCodeAt(_)!==Vr||C.charCodeAt(_+1)!==Nn);)_++;_+=2}else if(M===40&&_>=3&&(32|C.charCodeAt(_-1))==108&&(32|C.charCodeAt(_-2))==114&&(32|C.charCodeAt(_-3))==117)I=1,_++;else if(I>0)M===41?I--:M===40&&I++,_++;else if(M===Vr&&_+1<S&&C.charCodeAt(_+1)===Nn)_>E&&j.push(C.substring(E,_)),E=_+=2;else if(M===Nn&&_+1<S&&C.charCodeAt(_+1)===Nn){for(_>E&&j.push(C.substring(E,_));_<S&&C.charCodeAt(_)!==10;)_++;E=_}else _++;else _++;else $===0?$=M:$===M&&($=0),_++}return E===0?C:(E<S&&j.push(C.substring(E)),j.join(""))}(g)),b=wP(w||x?"".concat(w," ").concat(x," { ").concat(p," }"):p);return a.namespace&&(b=bw(b,a.namespace)),f=[],Hl(b,v),f};return h.hash=s.length?s.reduce(function(g,x){return x.name||Ya(15),Br(g,x.name)},5381).toString():"",h}var tT=new Yl,kp=eT(),ww=Q.createContext({shouldForwardProp:void 0,styleSheet:tT,stylis:kp});ww.Consumer;Q.createContext(void 0);function _p(){return Q.useContext(ww)}var Sw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=kp);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,pm(this,function(){throw Ya(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=kp),this.name+t.hash},e}();function nT(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in jP||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var rT=function(e){return e>="A"&&e<="Z"};function q0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;rT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Cw=function(e){return e==null||e===!1||e===""},kw=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Cw(r)&&(Array.isArray(r)&&r.isCss||ao(r)?t.push("".concat(q0(n),":"),r,";"):Ma(r)?t.push.apply(t,no(no(["".concat(n," {")],kw(r),!1),["}"],!1)):t.push("".concat(q0(n),": ").concat(nT(n,r),";")))}return t};function Pr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(Cw(e))return i;if(fm(e))return i.push(".".concat(e.styledComponentId)),i;if(ao(e)){if(!ao(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Pr(o,t,n,r,i)}var a;if(e instanceof Sw)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Ma(e)){for(var l=kw(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Pr(e[s],t,n,r,i);return i}function _w(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ao(n)&&!fm(n))return!1}return!0}var iT=hw(Wc),oT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_w(t),this.componentId=n,this.baseHash=Br(iT,n),this.baseStyle=r,Yl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Yr(i,this.staticRulesId);else{var o=ql(Pr(this.rules,t,n,r)),a=wp(Br(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Yr(i,a),this.staticRulesId=a}else{for(var s=Br(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var v=ql(Pr(f,t,n,r));s=Br(Br(s,String(d)),v),c+=v}}if(c){var h=wp(s>>>0);if(!n.hasNameForId(this.componentId,h)){var g=r(c,".".concat(h),void 0,this.componentId);n.insertRules(this.componentId,h,g)}i=Yr(i,h)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Qo(this.componentId)):""}},e}(),hm=Q.createContext(void 0);hm.Consumer;var Ed={};function aT(e,t,n){var r=fm(e),i=e,o=!kd(e),a=t.attrs,l=a===void 0?um:a,s=t.componentId,c=s===void 0?function(C,S){var j=typeof C!="string"?"sc":F0(C);Ed[j]=(Ed[j]||0)+1;var E="".concat(j,"-").concat(dm(Wc+j+Ed[j]));return S?"".concat(S,"-").concat(E):E}(t.displayName,t.parentComponentId):s,d=t.displayName,f=d===void 0?function(C){return kd(C)?"styled.".concat(C):"Styled(".concat(DP(C),")")}(e):d,v=t.displayName&&t.componentId?"".concat(F0(t.displayName),"-").concat(t.componentId):t.componentId||c,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;g=function(C,S){return x(C,S)&&w(C,S)}}else g=x}var m=new oT(n,v,r?i.componentStyle:void 0);function p(C,S){return function(j,E,_){var $=j.attrs,I=j.componentStyle,M=j.defaultProps,D=j.foldedComponentIds,T=j.styledComponentId,A=j.target,L=Q.useContext(hm),R=_p(),z=j.shouldForwardProp||R.shouldForwardProp,P=fw(E,L,M)||oo,O=function(W,q,oe){for(var he,ie=ut(ut({},q),{className:void 0,theme:oe}),De=0;De<W.length;De+=1){var We=ao(he=W[De])?he(ie):he;for(var He in We)He==="className"?ie.className=Yr(ie.className,We[He]):He==="style"?ie.style=ut(ut({},ie.style),We[He]):ie[He]=We[He]}return"className"in q&&typeof q.className=="string"&&(ie.className=Yr(ie.className,q.className)),ie}($,E,P),F=O.as||A,B={};for(var N in O)O[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&O.theme===P||(N==="forwardedAs"?B.as=O.forwardedAs:z&&!z(N,F)||(B[N]=O[N]));var V=function(W,q){var oe=_p(),he=W.generateAndInjectStyles(q,oe.styleSheet,oe.stylis);return he}(I,O),H=V.className,G=Yr(D,T);return H&&(G+=" "+H),O.className&&(G+=" "+O.className),B[kd(F)&&!pw.has(F)?"class":"className"]=G,_&&(B.ref=_),y.createElement(F,B)}(b,C,S)}p.displayName=f;var b=Q.forwardRef(p);return b.attrs=h,b.componentStyle=m,b.displayName=f,b.shouldForwardProp=g,b.foldedComponentIds=r?Yr(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=v,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(S){for(var j=[],E=1;E<arguments.length;E++)j[E-1]=arguments[E];for(var _=0,$=j;_<$.length;_++)Sp(S,$[_],!0);return S}({},i.defaultProps,C):C}}),pm(b,function(){return".".concat(b.styledComponentId)}),o&&xw(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Y0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var X0=function(e){return Object.assign(e,{isCss:!0})};function mm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ao(e)||Ma(e))return X0(Pr(Y0(um,no([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Pr(r):X0(Pr(Y0(r,t)))}function Ep(e,t,n){if(n===void 0&&(n=oo),!t)throw Ya(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,mm.apply(void 0,no([i],o,!1)))};return r.attrs=function(i){return Ep(e,t,ut(ut({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ep(e,t,ut(ut({},n),i))},r}var Ew=function(e){return Ep(aT,e)},k=Ew;pw.forEach(function(e){k[e]=Ew(e)});var sT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=_w(t),Yl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ql(Pr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Yl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function lT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=mm.apply(void 0,no([e],t,!1)),i="sc-global-".concat(dm(JSON.stringify(r))),o=new sT(r,i),a=new WeakMap,l=function(c){var d=_p(),f=Q.useContext(hm),v=a.get(d.styleSheet);return v===void 0&&(v=d.styleSheet.allocateGSInstance(i),a.set(d.styleSheet,v)),(typeof window>"u"||!d.styleSheet.server)&&s(v,c,d.styleSheet,f,d.stylis),Q.useLayoutEffect(function(){return d.styleSheet.server||s(v,c,d.styleSheet,f,d.stylis),function(){var h;o.removeStyles(v,d.styleSheet),h=d.styleSheet.options.target,typeof document<"u"&&(h??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(g){return g.remove()})}},[v,c,d.styleSheet,f,d.stylis]),null};function s(c,d,f,v,h){if(o.isStatic)o.renderStyles(c,TP,f,h);else{var g=ut(ut({},d),{theme:fw(d,v,l.defaultProps)});o.renderStyles(c,g,f,h)}}return Q.memo(l)}function gm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ql(mm.apply(void 0,no([e],t,!1))),i=dm(r);return new Sw(i,r)}const cT=k.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,uT=k.div`
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
`,dT=k.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,fT=k.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,pT=k.div`
  display: flex;
  justify-content: space-around;
  

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`,hT=k.button`
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

    
`;k(je)`
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
`;const mT=k(je)`
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
`;const gT=k.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,vT=k.button`
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
`;const xT=k.div`
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
`,yT=k.button`
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
`,bT=k.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,vi=k(je)`
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
`,wT=k.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,ST=k.div`
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
`,CT=k.div`
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
`,kT=k.input`
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
`,_T=k.button`
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
`,ET=k.svg`
  width: 24px;
  height: 24px;
`,jT=k.ul`
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
`,PT=k.li`
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


`,TT=k.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,OT=k.h3`
      text-align: left;
      font-size: 18px;
      font-weight: 400;

`,$T=k.h3`
 font-weight: 500;
      font-size: 20px;
         

`,IT=k.div`
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

    
`,hn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",MT=()=>{const[e,t]=y.useState(""),[n,r]=y.useState([]),[i,o]=y.useState(!1),a=Ke(),l=y.useRef(null);y.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const c=setTimeout(async()=>{try{const f=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(f.data),o(!0)}catch(d){console.error(d)}},300);return()=>clearTimeout(c)},[e]),y.useEffect(()=>{const c=d=>{l.current&&!l.current.contains(d.target)&&o(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const s=c=>{t(""),o(!1),a(`/product/${c.slug??c.id}`)};return u.jsxs(CT,{ref:l,children:[u.jsx(kT,{name:"site-search",value:e,onChange:c=>t(c.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),u.jsx(_T,{className:"search-button",children:u.jsx(ET,{children:u.jsx("use",{href:`${hn}#icon-search`})})}),i&&n.length>0&&u.jsx(jT,{children:n.map(c=>{var v,h;const f=c.new_price&&c.new_price<c.price?c.new_price:c.price;return u.jsxs(PT,{onClick:()=>s(c),children:[u.jsx(TT,{src:((h=(v=c.images)==null?void 0:v[0])==null?void 0:h.url)||"/nofoto.png",alt:""}),u.jsxs(IT,{children:[u.jsx(OT,{children:c.name}),u.jsxs($T,{children:[f," грн."]})]})]},c.id)})})]})};var jw={exports:{}},Pw={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=y;function DT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var LT=typeof Object.is=="function"?Object.is:DT,AT=Xa.useSyncExternalStore,RT=Xa.useRef,zT=Xa.useEffect,FT=Xa.useMemo,NT=Xa.useDebugValue;Pw.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=RT(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=FT(function(){function s(h){if(!c){if(c=!0,d=h,h=r(h),i!==void 0&&a.hasValue){var g=a.value;if(i(g,h))return f=g}return f=h}if(g=f,LT(d,h))return g;var x=r(h);return i!==void 0&&i(g,x)?(d=h,g):(d=h,f=x)}var c=!1,d,f,v=n===void 0?null:n;return[function(){return s(t())},v===null?void 0:function(){return s(v())}]},[t,n,r,i]);var l=AT(e,o[0],o[1]);return zT(function(){a.hasValue=!0,a.value=l},[l]),NT(l),l};jw.exports=Pw;var BT=jw.exports;function VT(e){e()}function UT(){let e=null,t=null;return{clear(){e=null,t=null},notify(){VT(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var K0={notify(){},get:()=>[]};function WT(e,t){let n,r=K0,i=0,o=!1;function a(x){d();const w=r.subscribe(x);let m=!1;return()=>{m||(m=!0,w(),f())}}function l(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function c(){return o}function d(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=UT())}function f(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=K0)}function v(){o||(o=!0,d())}function h(){o&&(o=!1,f())}const g={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:c,trySubscribe:v,tryUnsubscribe:h,getListeners:()=>r};return g}var HT=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",GT=HT(),qT=()=>typeof navigator<"u"&&navigator.product==="ReactNative",YT=qT(),XT=()=>GT||YT?y.useLayoutEffect:y.useEffect,KT=XT(),jd=Symbol.for("react-redux-context"),Pd=typeof globalThis<"u"?globalThis:{};function QT(){if(!y.createContext)return{};const e=Pd[jd]??(Pd[jd]=new Map);let t=e.get(y.createContext);return t||(t=y.createContext(null),e.set(y.createContext,t)),t}var $r=QT();function ZT(e){const{children:t,context:n,serverState:r,store:i}=e,o=y.useMemo(()=>{const s=WT(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=y.useMemo(()=>i.getState(),[i]);KT(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||$r;return y.createElement(l.Provider,{value:o},t)}var JT=ZT;function vm(e=$r){return function(){return y.useContext(e)}}var Tw=vm();function Ow(e=$r){const t=e===$r?Tw:vm(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var eO=Ow();function tO(e=$r){const t=e===$r?eO:Ow(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var It=tO(),nO=(e,t)=>e===t;function rO(e=$r){const t=e===$r?Tw:vm(e),n=(r,i={})=>{const{equalityFn:o=nO}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:c}=a;y.useRef(!0);const d=y.useCallback({[r.name](v){return r(v)}}[r.name],[r]),f=BT.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,c||l.getState,d,o);return y.useDebugValue(f),f};return Object.assign(n,{withTypes:()=>n}),n}var Ue=rO();const iO=k(je)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,oO=k.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,aO=k.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,sO=k.div`
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
`,lO=({onClick:e})=>{const t=Ue(n=>n.cart.items.length);return u.jsx(iO,{to:"/cart",children:u.jsxs(aO,{onClick:e,children:[u.jsx(oO,{children:u.jsx("use",{href:`${hn}#icon-cart`})}),t>0&&u.jsx(sO,{children:t})]})})},cO=k.nav`
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
`,xi=k(je)`
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
`,uO=()=>u.jsxs(cO,{children:[u.jsx(xi,{to:"/",children:"Головна"}),u.jsx(xi,{to:"/catalog",children:"Каталог"}),u.jsx(xi,{to:"/catalog/new",children:"Новинки"}),u.jsx(xi,{to:"/catalog/sale",children:"Акційні товари"}),u.jsx(xi,{to:"/about",children:"Про нас"}),u.jsx(xi,{to:"/contacts",children:"Контакти"})]}),dO=k.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,fO=k(je)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,pO=k.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,hO=k.div`

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
`,mO=({onClick:e})=>{const t=Ue(n=>n.favorites.items.length);return u.jsx(fO,{to:"/favorite",children:u.jsxs(pO,{onClick:e,children:[u.jsx(dO,{children:u.jsx("use",{href:`${hn}#icon-heart`})}),t>0&&u.jsx(hO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=e=>{const t=vO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>y.createElement("svg",{ref:s,...xO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:$w("lucide",i),...!o&&!yO(l)&&{"aria-hidden":"true"},...l},[...a.map(([c,d])=>y.createElement(c,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(e,t)=>{const n=y.forwardRef(({className:r,...i},o)=>y.createElement(bO,{ref:o,iconNode:t,className:$w(`lucide-${gO(Q0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Q0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Hc=Qe("arrow-down-narrow-wide",wO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Gc=Qe("arrow-right",SO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],kO=Qe("badge-percent",CO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],EO=Qe("chevron-down",_O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],PO=Qe("chevron-up",jO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Xl=Qe("eye-off",TO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Kl=Qe("eye",OO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ka=Qe("heart",$O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],MO=Qe("house",IO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],LO=Qe("info",DO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],RO=Qe("layers-plus",AO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],FO=Qe("mail",zO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],BO=Qe("shopping-bag",NO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],xo=Qe("shopping-cart",VO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Iw=Qe("sliders-horizontal",UO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Mw=Qe("trash-2",WO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HO=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],GO=Qe("user-round",HO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Dw=Qe("x",qO),YO=({openLogin:e})=>{const[t,n]=y.useState(!1),r=Ke(),i=async()=>{const o=localStorage.getItem("token");if(!o){e();return}try{const a=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${o}`}});if(a.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("persist:cart"),localStorage.removeItem("persist:favorites"),window.location.reload(),e();return}if(!a.ok){console.error("Помилка перевірки авторизації:",a.status);return}r("/account/orders")}catch(a){console.error("Помилка перевірки авторизації:",a)}};return u.jsx(cT,{children:u.jsx(uT,{children:u.jsxs(dT,{children:[u.jsxs(fT,{children:[u.jsx(mT,{to:"/",children:"Дідів хлів"}),u.jsxs(pT,{children:[u.jsx(lO,{}),u.jsx(hT,{onClick:i,children:u.jsx(GO,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),u.jsx(mO,{}),u.jsx(uO,{}),u.jsx(vT,{onClick:()=>n(!t),children:u.jsx(gT,{children:u.jsx("use",{href:`${hn}#icon-menu`})})}),u.jsx(ST,{open:t,onClick:()=>n(!1)}),u.jsxs(xT,{open:t,children:[u.jsx(yT,{onClick:()=>n(!1),children:u.jsx(Dw,{size:28,strokeWidth:1.5})}),u.jsxs(bT,{children:[u.jsxs(vi,{onClick:()=>n(!1),to:"/",children:[u.jsx(MO,{size:22,strokeWidth:1.5})," Головна"]}),u.jsxs(vi,{onClick:()=>n(!1),to:"/catalog",children:[u.jsx(BO,{size:22,strokeWidth:1.5})," Каталог"]}),u.jsxs(vi,{onClick:()=>n(!1),to:"/catalog/new",children:[u.jsx(RO,{size:22,strokeWidth:1.5}),"Новинки"]}),u.jsxs(vi,{onClick:()=>n(!1),to:"/catalog/sale",children:[u.jsx(kO,{size:22,strokeWidth:1.5}),"Акційні товари"]}),u.jsxs(vi,{onClick:()=>n(!1),to:"/about",children:[u.jsx(LO,{size:22,strokeWidth:1.5})," Про нас"]}),u.jsxs(vi,{onClick:()=>n(!1),to:"/contacts",children:[u.jsx(FO,{size:22,strokeWidth:1.5})," Контакти"]})]}),u.jsx(wT,{children:u.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),u.jsx(MT,{})]})})})},XO=k.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,KO=k.footer`
 
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
`,QO=k.div`
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
`,Td=k.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,Od=k.h3`
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
`,wn=k(je)`
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
`,ZO=k.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,$d=k.a`
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
`,JO=()=>u.jsx(XO,{children:u.jsxs(KO,{children:[u.jsxs(QO,{children:[u.jsxs(Td,{children:[u.jsx(Od,{children:"Навігація"}),u.jsx(wn,{to:"/",children:"Головна"}),u.jsx(wn,{to:"/about",children:"Про нас"}),u.jsx(wn,{to:"/catalog",children:"Каталог"}),u.jsx(wn,{to:"/contacts",children:"Контакти"})]}),u.jsxs(Td,{children:[u.jsx(Od,{children:"Інформація"}),u.jsx(wn,{to:"/delivery",children:"Оплата і доставка"}),u.jsx(wn,{children:"Повернення"}),u.jsx(wn,{children:"Гарантія"}),u.jsx(wn,{children:"Політика конфіденційності"})]})]}),u.jsxs(Td,{children:[u.jsx(Od,{children:"Контакти"}),u.jsx(wn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),u.jsx(wn,{href:"mailto:email@email.com",children:"email@email.com"}),u.jsxs(ZO,{children:[u.jsx($d,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-instagram`})})}),u.jsx($d,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-telegram`})})}),u.jsx($d,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:u.jsx("use",{href:`${hn}#icon-olx`})})})]})]})]})}),e4=({openLogin:e,openRegister:t})=>u.jsxs(u.Fragment,{children:[u.jsx(YO,{openLogin:e,openRegister:t}),u.jsx("main",{style:{flex:1},children:u.jsx(Kx,{})}),u.jsx(JO,{})]}),t4=k.section`
  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
`,n4=k.h2`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,r4=k.div`
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
`,i4=k.div`
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
`,o4=k.p`
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
`,a4=k(je)`
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
`,s4=k.span`
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
`,l4=k.div`
  padding: 10px 0;
`,c4=k.h3`
  font-size: 20px;
  font-weight: 600;

  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`,u4=k.div`
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
`;k(je)`
  color: var(--white-color);
  padding: 10px 20px;
  background: var(--orange-color);
  border-radius: 15px;
  text-decoration: none;
`;const d4=k(je)`
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
`,f4=k.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
`,p4=k.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Lw(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Lw(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Qr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Lw(e))&&(r&&(r+=" "),r+=t);return r}function h4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}h4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Qa=e=>typeof e=="number"&&!isNaN(e),ii=e=>typeof e=="string",Jn=e=>typeof e=="function",m4=e=>ii(e)||Qa(e),jp=e=>ii(e)||Jn(e)?e:null,g4=(e,t)=>e===!1||Qa(e)&&e>0?e:t,Pp=e=>y.isValidElement(e)||ii(e)||Jn(e)||Qa(e);function v4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function x4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:c,isIn:d,playToast:f}){let v=n?`${e}--${a}`:e,h=n?`${t}--${a}`:t,g=y.useRef(0);return y.useLayoutEffect(()=>{let x=c.current,w=v.split(" "),m=p=>{p.target===c.current&&(f(),x.removeEventListener("animationend",m),x.removeEventListener("animationcancel",m),g.current===0&&p.type!=="animationcancel"&&x.classList.remove(...w))};x.classList.add(...w),x.addEventListener("animationend",m),x.addEventListener("animationcancel",m)},[]),y.useEffect(()=>{let x=c.current,w=()=>{x.removeEventListener("animationend",w),r?v4(x,s,i):s()};d||(l?w():(g.current=1,x.className+=` ${h}`,x.addEventListener("animationend",w)))},[d]),Q.createElement(Q.Fragment,null,o)}}function Z0(e,t){return{content:Aw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Aw(e,t,n=!1){return y.isValidElement(e)&&!ii(e.type)?y.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Jn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function y4({closeToast:e,theme:t,ariaLabel:n="close"}){return Q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},Q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function b4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:c,theme:d}){let f=i||a&&l===0,v={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(v.transform=`scaleX(${l})`);let h=Qr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),g=Jn(o)?o({rtl:s,type:r,defaultClassName:h}):Qr(h,o),x={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{c&&n()}};return Q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":f},Q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),Q.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer",className:g,style:v,...x}))}var w4=1,Rw=()=>`${w4++}`;function S4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,c=new Set,d=p=>(c.add(p),()=>c.delete(p)),f=()=>{a=Array.from(s.values()),c.forEach(p=>p())},v=({containerId:p,toastId:b,updateId:C})=>{let S=p?p!==e:e!==1,j=s.has(b)&&C==null;return S||j},h=(p,b)=>{s.forEach(C=>{var S;(b==null||b===C.props.toastId)&&((S=C.toggle)==null||S.call(C,p))})},g=p=>{var b,C;(C=(b=p.props)==null?void 0:b.onClose)==null||C.call(b,p.removalReason),p.isActive=!1},x=p=>{if(p==null)s.forEach(g);else{let b=s.get(p);b&&g(b)}f()},w=()=>{i-=o.length,o=[]},m=p=>{var b,C;let{toastId:S,updateId:j}=p.props,E=j==null;p.staleId&&s.delete(p.staleId),p.isActive=!0,s.set(S,p),f(),n(Z0(p,E?"added":"updated")),E&&((C=(b=p.props).onOpen)==null||C.call(b))};return{id:e,props:l,observe:d,toggle:h,removeToast:x,toasts:s,clearQueue:w,buildToast:(p,b)=>{if(v(b))return;let{toastId:C,updateId:S,data:j,staleId:E,delay:_}=b,$=S==null;$&&i++;let I={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(b).filter(([D,T])=>T!=null)),toastId:C,updateId:S,data:j,isIn:!1,className:jp(b.className||l.toastClassName),progressClassName:jp(b.progressClassName||l.progressClassName),autoClose:b.isLoading?!1:g4(b.autoClose,l.autoClose),closeToast(D){s.get(C).removalReason=D,x(C)},deleteToast(){let D=s.get(C);if(D!=null){if(n(Z0(D,"removed")),s.delete(C),i--,i<0&&(i=0),o.length>0){m(o.shift());return}f()}}};I.closeButton=l.closeButton,b.closeButton===!1||Pp(b.closeButton)?I.closeButton=b.closeButton:b.closeButton===!0&&(I.closeButton=Pp(l.closeButton)?l.closeButton:!0);let M={content:p,props:I,staleId:E};l.limit&&l.limit>0&&i>l.limit&&$?o.push(M):Qa(_)?setTimeout(()=>{m(M)},_):m(M)},setProps(p){l=p},setToggle:(p,b)=>{let C=s.get(p);C&&(C.toggle=b)},isToastActive:p=>{var b;return(b=s.get(p))==null?void 0:b.isActive},getSnapshot:()=>a}}var gt=new Map,Da=[],Tp=new Set,C4=e=>Tp.forEach(t=>t(e)),zw=()=>gt.size>0;function k4(){Da.forEach(e=>Nw(e.content,e.options)),Da=[]}var _4=(e,{containerId:t})=>{var n;return(n=gt.get(t||1))==null?void 0:n.toasts.get(e)};function Fw(e,t){var n;if(t)return!!((n=gt.get(t))!=null&&n.isToastActive(e));let r=!1;return gt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function E4(e){if(!zw()){Da=Da.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||m4(e))gt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=gt.get(e.containerId);t?t.removeToast(e.id):gt.forEach(n=>{n.removeToast(e.id)})}}var j4=(e={})=>{gt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Nw(e,t){Pp(e)&&(zw()||Da.push({content:e,options:t}),gt.forEach(n=>{n.buildToast(e,t)}))}function P4(e){var t;(t=gt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Bw(e,t){gt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function T4(e){let t=e.containerId||1;return{subscribe(n){let r=S4(t,e,C4);gt.set(t,r);let i=r.observe(n);return k4(),()=>{i(),gt.delete(t)}},setProps(n){var r;(r=gt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=gt.get(t))==null?void 0:n.getSnapshot()}}}function O4(e){return Tp.add(e),()=>{Tp.delete(e)}}function $4(e){return e&&(ii(e.toastId)||Qa(e.toastId))?e.toastId:Rw()}function Za(e,t){return Nw(e,t),t.toastId}function qc(e,t){return{...t,type:t&&t.type||e,toastId:$4(t)}}function Yc(e){return(t,n)=>Za(t,qc(e,n))}function K(e,t){return Za(e,qc("default",t))}K.loading=(e,t)=>Za(e,qc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function I4(e,{pending:t,error:n,success:r},i){let o;t&&(o=ii(t)?K.loading(t,i):K.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,f)=>{if(d==null){K.dismiss(o);return}let v={type:c,...a,...i,data:f},h=ii(d)?{render:d}:d;return o?K.update(o,{...v,...h}):K(h.render,{...v,...h}),f},s=Jn(e)?e():e;return s.then(c=>l("success",r,c)).catch(c=>l("error",n,c)),s}K.promise=I4;K.success=Yc("success");K.info=Yc("info");K.error=Yc("error");K.warning=Yc("warning");K.warn=K.warning;K.dark=(e,t)=>Za(e,qc("default",{theme:"dark",...t}));function M4(e){E4(e)}K.dismiss=M4;K.clearWaitingQueue=j4;K.isActive=Fw;K.update=(e,t={})=>{let n=_4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Rw()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Za(a,o)}};K.done=e=>{K.update(e,{progress:1})};K.onChange=O4;K.play=e=>Bw(!0,e);K.pause=e=>Bw(!1,e);function D4(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=y.useRef(T4(e)).current;i(e);let o=(t=y.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(c=>{let{position:d}=c.props;s.has(d)||s.set(d,[]),s.get(d).push(c)}),Array.from(s,c=>l(c[0],c[1]))}return{getToastToRender:a,isToastActive:Fw,count:o==null?void 0:o.length}}function L4(e){let[t,n]=y.useState(!1),[r,i]=y.useState(!1),o=y.useRef(null),a=y.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:c,onClick:d,closeOnClick:f}=e;P4({id:e.toastId,containerId:e.containerId,fn:n}),y.useEffect(()=>{if(e.pauseOnFocusLoss)return v(),()=>{h()}},[e.pauseOnFocusLoss]);function v(){document.hasFocus()||m(),window.addEventListener("focus",w),window.addEventListener("blur",m)}function h(){window.removeEventListener("focus",w),window.removeEventListener("blur",m)}function g(E){if(e.draggable===!0||e.draggable===E.pointerType){p();let _=o.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=E.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=E.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function x(E){let{top:_,bottom:$,left:I,right:M}=o.current.getBoundingClientRect();E.nativeEvent.type!=="touchend"&&e.pauseOnHover&&E.clientX>=I&&E.clientX<=M&&E.clientY>=_&&E.clientY<=$?m():w()}function w(){n(!0)}function m(){n(!1)}function p(){a.didMove=!1,document.addEventListener("pointermove",C),document.addEventListener("pointerup",S)}function b(){document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",S)}function C(E){let _=o.current;if(a.canDrag&&_){a.didMove=!0,t&&m(),e.draggableDirection==="x"?a.delta=E.clientX-a.start:a.delta=E.clientY-a.start,a.start!==E.clientX&&(a.canCloseOnClick=!1);let $=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${$},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function S(){b();let E=o.current;if(a.canDrag&&a.didMove&&E){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}let j={onPointerDown:g,onPointerUp:x};return l&&s&&(j.onMouseEnter=m,e.stacked||(j.onMouseLeave=w)),f&&(j.onClick=E=>{d&&d(E),a.canCloseOnClick&&c(!0)}),{playToast:w,pauseToast:m,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:j}}var A4=typeof window<"u"?y.useLayoutEffect:y.useEffect,Xc=({theme:e,type:t,isLoading:n,...r})=>Q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function R4(e){return Q.createElement(Xc,{...e},Q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function z4(e){return Q.createElement(Xc,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function F4(e){return Q.createElement(Xc,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function N4(e){return Q.createElement(Xc,{...e},Q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function B4(){return Q.createElement("div",{className:"Toastify__spinner"})}var Op={info:z4,warning:R4,success:F4,error:N4,spinner:B4},V4=e=>e in Op;function U4({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Jn(r)?i=r({...o,isLoading:n}):y.isValidElement(r)?i=y.cloneElement(r,o):n?i=Op.spinner():V4(t)&&(i=Op[t](o))),i}var W4=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=L4(e),{closeButton:a,children:l,autoClose:s,onClick:c,type:d,hideProgressBar:f,closeToast:v,transition:h,position:g,className:x,style:w,progressClassName:m,updateId:p,role:b,progress:C,rtl:S,toastId:j,deleteToast:E,isIn:_,isLoading:$,closeOnClick:I,theme:M,ariaLabel:D}=e,T=Qr("Toastify__toast",`Toastify__toast-theme--${M}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":I}),A=Jn(x)?x({rtl:S,position:g,type:d,defaultClassName:T}):Qr(T,x),L=U4(e),R=!!C||!s,z={closeToast:v,type:d,theme:M},P=null;return a===!1||(Jn(a)?P=a(z):y.isValidElement(a)?P=y.cloneElement(a,z):P=y4(z)),Q.createElement(h,{isIn:_,done:E,position:g,preventExitTransition:n,nodeRef:r,playToast:o},Q.createElement("div",{id:j,tabIndex:0,onClick:c,"data-in":_,className:A,...i,style:w,ref:r,..._&&{role:b,"aria-label":D}},L!=null&&Q.createElement("div",{className:Qr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},L),Aw(l,e,!t),P,!e.customProgressBar&&Q.createElement(b4,{...p&&!R?{key:`p-${p}`}:{},rtl:S,theme:M,delay:s,isRunning:t,isIn:_,closeToast:v,hide:f,type:d,className:m,controlledProgress:R,progress:C||0})))},H4=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),G4=x4(H4("bounce",!0)),q4={position:"top-right",transition:G4,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Ln(e){let t={...q4,...e},n=e.stacked,[r,i]=y.useState(!0),o=y.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=D4(t),{className:c,style:d,rtl:f,containerId:v,hotKeys:h}=t;function g(w){let m=Qr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":f});return Jn(c)?c({position:w,rtl:f,defaultClassName:m}):Qr(m,jp(c))}function x(){n&&(i(!0),K.play())}return A4(()=>{var w;if(n){let m=o.current.querySelectorAll('[data-in="true"]'),p=12,b=(w=t.position)==null?void 0:w.includes("top"),C=0,S=0;Array.from(m).reverse().forEach((j,E)=>{let _=j;_.classList.add("Toastify__toast--stacked"),E>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=b?"top":"bot");let $=C*(r?.2:1)+(r?0:p*E);_.style.setProperty("--y",`${b?$:$*-1}px`),_.style.setProperty("--g",`${p}`),_.style.setProperty("--s",`${1-(r?S:0)}`),C+=_.offsetHeight,S+=.025})}},[r,s,n]),y.useEffect(()=>{function w(m){var p;let b=o.current;h(m)&&((p=b.querySelector('[tabIndex="0"]'))==null||p.focus(),i(!1),K.pause()),m.key==="Escape"&&(document.activeElement===b||b!=null&&b.contains(document.activeElement))&&(i(!0),K.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[h]),Q.createElement("section",{ref:o,className:"Toastify",id:v,onMouseEnter:()=>{n&&(i(!1),K.pause())},onMouseLeave:x,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,m)=>{let p=m.length?{...d}:{...d,pointerEvents:"none"};return Q.createElement("div",{tabIndex:-1,className:g(w),"data-stacked":n,style:p,key:`c-${w}`},m.map(({content:b,props:C})=>Q.createElement(W4,{...C,stacked:n,collapseAll:x,isIn:l(C.toastId,C.containerId),key:`t-${C.key}`},b)))}))}const er="/Didiv/assets/nofoto-2f8d9d99.png",Y4=k.div`
`,X4=k.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,K4=k.h2`
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

`,Q4=k.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;k.div``;const Z4=k.div`
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
`,J4=k.div`
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
`,Vw=k.div`
  position: relative;
  display: block;
 `,Kc=k.div`
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
`,xm=k.div`
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
`,ym=k.div`
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
`,e$=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;
`,t$=k.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,n$=k.p`
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

`;const Uw=k.div.attrs({className:"card-buttons"})`
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
`,Ql=k.button`
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
`;const r$=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,Id=k.button`
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
`,i$=k.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,o$=k.button`
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
`,a$=k.div`
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
`,Ww=k.div`
  text-align: center;
  width: 100px;
 
`,Hw=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Gw=k.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,qw=k.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Yw=k.span`
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
`;function Je(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var s$=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),J0=s$,Md=()=>Math.random().toString(36).substring(7).split("").join("."),l$={INIT:`@@redux/INIT${Md()}`,REPLACE:`@@redux/REPLACE${Md()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Md()}`},Zl=l$;function bm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function wm(e,t,n){if(typeof e!="function")throw new Error(Je(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Je(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Je(1));return n(wm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function c(){a===o&&(a=new Map,o.forEach((w,m)=>{a.set(m,w)}))}function d(){if(s)throw new Error(Je(3));return i}function f(w){if(typeof w!="function")throw new Error(Je(4));if(s)throw new Error(Je(5));let m=!0;c();const p=l++;return a.set(p,w),function(){if(m){if(s)throw new Error(Je(6));m=!1,c(),a.delete(p),o=null}}}function v(w){if(!bm(w))throw new Error(Je(7));if(typeof w.type>"u")throw new Error(Je(8));if(typeof w.type!="string")throw new Error(Je(17));if(s)throw new Error(Je(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(p=>{p()}),w}function h(w){if(typeof w!="function")throw new Error(Je(10));r=w,v({type:Zl.REPLACE})}function g(){const w=f;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(Je(11));function p(){const C=m;C.next&&C.next(d())}return p(),{unsubscribe:w(p)}},[J0](){return this}}}return v({type:Zl.INIT}),{dispatch:v,subscribe:f,getState:d,replaceReducer:h,[J0]:g}}function c$(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Zl.INIT})>"u")throw new Error(Je(12));if(typeof n(void 0,{type:Zl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Je(13))})}function u$(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{c$(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const c={};for(let d=0;d<r.length;d++){const f=r[d],v=n[f],h=a[f],g=v(h,l);if(typeof g>"u")throw l&&l.type,new Error(Je(14));c[f]=g,s=s||g!==h}return s=s||r.length!==Object.keys(a).length,s?c:a}}function Jl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function d$(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Je(15))};const a={getState:i.getState,dispatch:(s,...c)=>o(s,...c)},l=e.map(s=>s(a));return o=Jl(...l)(i.dispatch),{...i,dispatch:o}}}function f$(e){return bm(e)&&"type"in e&&typeof e.type=="string"}var Xw=Symbol.for("immer-nothing"),ev=Symbol.for("immer-draftable"),xt=Symbol.for("immer-state");function un(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var zt=Object,so=zt.getPrototypeOf,ec="constructor",Qc="prototype",$p="configurable",tc="enumerable",al="writable",La="value",tr=e=>!!e&&!!e[xt];function vn(e){var t;return e?Kw(e)||Jc(e)||!!e[ev]||!!((t=e[ec])!=null&&t[ev])||eu(e)||tu(e):!1}var p$=zt[Qc][ec].toString(),tv=new WeakMap;function Kw(e){if(!e||!Sm(e))return!1;const t=so(e);if(t===null||t===zt[Qc])return!0;const n=zt.hasOwnProperty.call(t,ec)&&t[ec];if(n===Object)return!0;if(!ji(n))return!1;let r=tv.get(n);return r===void 0&&(r=Function.toString.call(n),tv.set(n,r)),r===p$}function Zc(e,t,n=!0){Ja(e)===0?(n?Reflect.ownKeys(e):zt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ja(e){const t=e[xt];return t?t.type_:Jc(e)?1:eu(e)?2:tu(e)?3:0}var nv=(e,t,n=Ja(e))=>n===2?e.has(t):zt[Qc].hasOwnProperty.call(e,t),Ip=(e,t,n=Ja(e))=>n===2?e.get(t):e[t],nc=(e,t,n,r=Ja(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function h$(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Jc=Array.isArray,eu=e=>e instanceof Map,tu=e=>e instanceof Set,Sm=e=>typeof e=="object",ji=e=>typeof e=="function",Dd=e=>typeof e=="boolean";function m$(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Vn=e=>e.copy_||e.base_,Cm=e=>e.modified_?e.copy_:e.base_;function Mp(e,t){if(eu(e))return new Map(e);if(tu(e))return new Set(e);if(Jc(e))return Array[Qc].slice.call(e);const n=Kw(e);if(t===!0||t==="class_only"&&!n){const r=zt.getOwnPropertyDescriptors(e);delete r[xt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[al]===!1&&(l[al]=!0,l[$p]=!0),(l.get||l.set)&&(r[a]={[$p]:!0,[al]:!0,[tc]:l[tc],[La]:e[a]})}return zt.create(so(e),r)}else{const r=so(e);if(r!==null&&n)return{...e};const i=zt.create(r);return zt.assign(i,e)}}function km(e,t=!1){return nu(e)||tr(e)||!vn(e)||(Ja(e)>1&&zt.defineProperties(e,{set:_s,add:_s,clear:_s,delete:_s}),zt.freeze(e),t&&Zc(e,(n,r)=>{km(r,!0)},!1)),e}function g$(){un(2)}var _s={[La]:g$};function nu(e){return e===null||!Sm(e)?!0:zt.isFrozen(e)}var rc="MapSet",Dp="Patches",rv="ArrayMethods",Qw={};function oi(e){const t=Qw[e];return t||un(0,e),t}var iv=e=>!!Qw[e],Aa,Zw=()=>Aa,v$=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:iv(rc)?oi(rc):void 0,arrayMethodsPlugin_:iv(rv)?oi(rv):void 0});function ov(e,t){t&&(e.patchPlugin_=oi(Dp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Lp(e){Ap(e),e.drafts_.forEach(x$),e.drafts_=null}function Ap(e){e===Aa&&(Aa=e.parent_)}var av=e=>Aa=v$(Aa,e);function x$(e){const t=e[xt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function sv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[xt].modified_&&(Lp(t),un(4)),vn(e)&&(e=lv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[xt].base_,e,t)}else e=lv(t,n);return y$(t,e,!0),Lp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Xw?e:void 0}function lv(e,t){if(nu(t))return t;const n=t[xt];if(!n)return ic(t,e.handledSet_,e);if(!ru(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);tS(n,e)}return n.copy_}function y$(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&km(t,n)}function Jw(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var ru=(e,t)=>e.scope_===t,b$=[];function eS(e,t,n,r){const i=Vn(e),o=e.type_;if(r!==void 0&&Ip(i,r,o)===t){nc(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Zc(i,(s,c)=>{if(tr(c)){const d=l.get(c)||[];d.push(s),l.set(c,d)}})}const a=e.draftLocations_.get(t)??b$;for(const l of a)nc(i,l,n,o)}function w$(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!ru(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=Cm(o);eS(e,o.draft_??o,a,n),tS(o,i)})}function tS(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Jw(e)}}function S$(e,t,n){const{scope_:r}=e;if(tr(n)){const i=n[xt];ru(i,r)&&i.callbacks_.push(function(){sl(e);const a=Cm(i);eS(e,n,a,t)})}else vn(n)&&e.callbacks_.push(function(){const o=Vn(e);e.type_===3?o.has(n)&&ic(n,r.handledSet_,r):Ip(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&ic(Ip(e.copy_,t,e.type_),r.handledSet_,r)})}function ic(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||tr(e)||t.has(e)||!vn(e)||nu(e)||(t.add(e),Zc(e,(r,i)=>{if(tr(i)){const o=i[xt];if(ru(o,n)){const a=Cm(o);nc(e,r,a,e.type_),Jw(o)}}else vn(i)&&ic(i,t,n)})),e}function C$(e,t){const n=Jc(e),r={type_:n?1:0,scope_:t?t.scope_:Zw(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=oc;n&&(i=[r],o=Ra);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var oc={get(e,t){if(t===xt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Vn(e);if(!nv(i,t,e.type_))return k$(e,i,t);const o=i[t];if(e.finalized_||!vn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&m$(t))return o;if(o===Ld(e.base_,t)){sl(e);const a=e.type_===1?+t:t,l=zp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Vn(e)},ownKeys(e){return Reflect.ownKeys(Vn(e))},set(e,t,n){const r=nS(Vn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Ld(Vn(e),t),o=i==null?void 0:i[xt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(h$(n,i)&&(n!==void 0||nv(e.base_,t,e.type_)))return!0;sl(e),Rp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),S$(e,t,n)),!0},deleteProperty(e,t){return sl(e),Ld(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Rp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Vn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[al]:!0,[$p]:e.type_!==1||t!=="length",[tc]:r[tc],[La]:n[t]}},defineProperty(){un(11)},getPrototypeOf(e){return so(e.base_)},setPrototypeOf(){un(12)}},Ra={};for(let e in oc){let t=oc[e];Ra[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Ra.deleteProperty=function(e,t){return Ra.set.call(this,e,t,void 0)};Ra.set=function(e,t,n){return oc.set.call(this,e[0],t,n,e[0])};function Ld(e,t){const n=e[xt];return(n?Vn(n):e)[t]}function k$(e,t,n){var i;const r=nS(t,n);return r?La in r?r[La]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function nS(e,t){if(!(t in e))return;let n=so(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=so(n)}}function Rp(e){e.modified_||(e.modified_=!0,e.parent_&&Rp(e.parent_))}function sl(e){e.copy_||(e.assigned_=new Map,e.copy_=Mp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var _$=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(ji(t)&&!ji(n)){const o=n;n=t;const a=this;return function(s=o,...c){return a.produce(s,d=>n.call(this,d,...c))}}ji(n)||un(6),r!==void 0&&!ji(r)&&un(7);let i;if(vn(t)){const o=av(this),a=zp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?Lp(o):Ap(o)}return ov(o,r),sv(i,o)}else if(!t||!Sm(t)){if(i=n(t),i===void 0&&(i=t),i===Xw&&(i=void 0),this.autoFreeze_&&km(i,!0),r){const o=[],a=[];oi(Dp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else un(1,t)},this.produceWithPatches=(t,n)=>{if(ji(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},Dd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Dd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Dd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){vn(e)||un(8),tr(e)&&(e=E$(e));const t=av(this),n=zp(t,e,void 0);return n[xt].isManual_=!0,Ap(t),n}finishDraft(e,t){const n=e&&e[xt];(!n||!n.isManual_)&&un(9);const{scope_:r}=n;return ov(r,t),sv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=oi(Dp).applyPatches_;return tr(e)?r(e,t):this.produce(e,i=>r(i,t))}};function zp(e,t,n,r){const[i,o]=eu(t)?oi(rc).proxyMap_(t,n):tu(t)?oi(rc).proxySet_(t,n):C$(t,n);return((n==null?void 0:n.scope_)??Zw()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?w$(n,o,r):o.callbacks_.push(function(s){var d;(d=s.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:c}=s;o.modified_&&c&&c.generatePatches_(o,[],s)}),i}function E$(e){return tr(e)||un(10,e),rS(e)}function rS(e){if(!vn(e)||nu(e))return e;const t=e[xt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Mp(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=Mp(e,!0);return Zc(n,(i,o)=>{nc(n,i,rS(o))},r),t&&(t.finalized_=!1),n}var j$=new _$,iS=j$.produce;function oS(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var P$=oS(),T$=oS,O$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Jl:Jl.apply(null,arguments)};function cv(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(qn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>f$(r)&&r.type===e,n}var aS=class Zo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Zo.prototype)}static get[Symbol.species](){return Zo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Zo(...t[0].concat(this)):new Zo(...t.concat(this))}};function uv(e){return vn(e)?iS(e,()=>{}):e}function Es(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function $$(e){return typeof e=="boolean"}var I$=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new aS;return n&&($$(n)?a.push(P$):a.push(T$(n.extraArgument))),a},M$="RTK_autoBatch",dv=e=>t=>{setTimeout(t,e)},D$=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:dv(10):e.type==="callback"?e.queueNotification:dv(e.timeout),c=()=>{a=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const f=()=>i&&d(),v=r.subscribe(f);return l.add(d),()=>{v(),l.delete(d)}},dispatch(d){var f;try{return i=!((f=d==null?void 0:d.meta)!=null&&f[M$]),o=!i,o&&(a||(a=!0,s(c))),r.dispatch(d)}finally{i=!0}}})},L$=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new aS(e);return r&&i.push(D$(typeof r=="object"?r:void 0)),i};function A$(e){const t=I$(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(bm(n))s=u$(n);else throw new Error(qn(1));let c;typeof r=="function"?c=r(t):c=t();let d=Jl;i&&(d=O$({trace:!1,...typeof i=="object"&&i}));const f=d$(...c),v=L$(f);let h=typeof l=="function"?l(v):v();const g=d(...h);return wm(s,a,g)}function sS(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(qn(28));if(l in t)throw new Error(qn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function R$(e){return typeof e=="function"}function z$(e,t){let[n,r,i]=sS(t),o;if(R$(e))o=()=>uv(e());else{const l=uv(e);o=()=>l}function a(l=o(),s){let c=[n[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,f)=>{if(f)if(tr(d)){const h=f(d,s);return h===void 0?d:h}else{if(vn(d))return iS(d,v=>f(v,s));{const v=f(d,s);if(v===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return d},l)}return a.getInitialState=o,a}var F$=Symbol.for("rtk-slice-createasyncthunk");function N$(e,t){return`${e}/${t}`}function B$({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[F$];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(qn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(U$()):i.reducers)||{},s=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(C,S){const j=typeof C=="string"?C:C.type;if(!j)throw new Error(qn(12));if(j in c.sliceCaseReducersByType)throw new Error(qn(13));return c.sliceCaseReducersByType[j]=S,d},addMatcher(C,S){return c.sliceMatchers.push({matcher:C,reducer:S}),d},exposeAction(C,S){return c.actionCreators[C]=S,d},exposeCaseReducer(C,S){return c.sliceCaseReducersByName[C]=S,d}};s.forEach(C=>{const S=l[C],j={reducerName:C,type:N$(o,C),createNotation:typeof i.reducers=="function"};H$(S)?q$(j,S,d,t):W$(j,S,d)});function f(){const[C={},S=[],j=void 0]=typeof i.extraReducers=="function"?sS(i.extraReducers):[i.extraReducers],E={...C,...c.sliceCaseReducersByType};return z$(i.initialState,_=>{for(let $ in E)_.addCase($,E[$]);for(let $ of c.sliceMatchers)_.addMatcher($.matcher,$.reducer);for(let $ of S)_.addMatcher($.matcher,$.reducer);j&&_.addDefaultCase(j)})}const v=C=>C,h=new Map,g=new WeakMap;let x;function w(C,S){return x||(x=f()),x(C,S)}function m(){return x||(x=f()),x.getInitialState()}function p(C,S=!1){function j(_){let $=_[C];return typeof $>"u"&&S&&($=Es(g,j,m)),$}function E(_=v){const $=Es(h,S,()=>new WeakMap);return Es($,_,()=>{const I={};for(const[M,D]of Object.entries(i.selectors??{}))I[M]=V$(D,_,()=>Es(g,_,m),S);return I})}return{reducerPath:C,getSelectors:E,get selectors(){return E(j)},selectSlice:j}}const b={name:o,reducer:w,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:m,...p(a),injectInto(C,{reducerPath:S,...j}={}){const E=S??a;return C.inject({reducerPath:E,reducer:w},j),{...b,...p(E,!0)}}};return b}}function V$(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var lS=B$();function U$(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function W$({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!G$(r))throw new Error(qn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?cv(e,a):cv(e))}function H$(e){return e._reducerDefinitionType==="asyncThunk"}function G$(e){return e._reducerDefinitionType==="reducerWithPrepare"}function q$({type:e,reducerName:t},n,r,i){if(!i)throw new Error(qn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:c,options:d}=n,f=i(e,o,d);r.exposeAction(t,f),a&&r.addCase(f.fulfilled,a),l&&r.addCase(f.pending,l),s&&r.addCase(f.rejected,s),c&&r.addMatcher(f.settled,c),r.exposeCaseReducer(t,{fulfilled:a||js,pending:l||js,rejected:s||js,settled:c||js})}function js(){}function qn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const cS=lS({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]},setFavorites(e,t){e.items=t.payload},addFavorite(e,t){e.items.some(r=>r.id===t.payload.id)||e.items.push(t.payload)},removeFavorite(e,t){e.items=e.items.filter(n=>n.id!==t.payload)}}}),{toggleFavorite:DV,clearFavorite:es,addFavorite:fv,removeFavorite:pv,setFavorites:Y$}=cS.actions,X$=cS.reducer,K$=async(e,t,n,r)=>{const i=t==null?void 0:t.find(a=>{var l;return((l=a.product)==null?void 0:l.documentId)===(e==null?void 0:e.documentId)});if(i){const a=i.user.map(l=>l.documentId);if(!a.includes(n)){a.push(n);const l=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:a}})});if(!l.ok)throw new Error("Не вдалося оновити favorite");return await l.json()}return i}const o=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e.documentId,user:[n]}})});if(!o.ok)throw new Error("Не вдалося створити favorite");return await o.json()},Q$=async(e,t,n,r)=>{var l;const i=t==null?void 0:t.find(s=>{var c;return((c=s.product)==null?void 0:c.documentId)===(e==null?void 0:e.documentId)});if(!i)return;const o=(l=i.user)==null?void 0:l.filter(s=>s.documentId!==n).map(s=>s.documentId);if((o==null?void 0:o.length)===0){if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити favorite");return}const a=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:o}})});if(!a.ok)throw new Error("Не вдалося оновити favorite");return await a.json()},di=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o)return t?(n(pv(e.id)),r.warning(`${e.name} видалено з обраного`)):(n(fv(e)),r.success(`${e.name} додано в обране`)),!0;const a=o.documentId,l=o.id;try{const s=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${l}?populate[favorites][populate][0]=product&populate[favorites][populate][1]=user`,{headers:{Authorization:`Bearer ${i}`}});if(!s.ok)throw new Error("Не вдалося отримати favorites користувача");const c=await s.json(),d=await fetch("https://backenddidiv-production.up.railway.app/api/favorites?populate=*",{headers:{Authorization:`Bearer ${i}`}}),{data:f}=await d.json(),v=c==null?void 0:c.favorites;return t?(await Q$(e,v,a,i),n(pv(e.id)),r.warning(`${e.name} видалено з обраного`),!0):(await K$(e,f,a,i),n(fv(e)),r.success(`${e.name} додано в обране`),!0)}catch{return r.error("Не вдалося оновити обране"),!1}},uS=lS({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===n.id);if(r){if(r.quantity>=n.stock)return;r.quantity+=1}else e.items.push({...n,quantity:1})},setCartItemQuantity:(e,t)=>{const{id:n,quantity:r}=t.payload,i=e.items.find(o=>o.id===n);i&&(i.quantity=r)},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},setCartItems:(e,t)=>{e.items=t.payload},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{setCartItems:dS,addToCart:hv,setCartItemQuantity:mv,removeFromCart:fS,clearCart:nr,addAllToCart:Z$,incrementQuantity:gv,decrementQuantity:vv}=uS.actions,J$=uS.reducer,e5=async(e,t,n,r)=>{const i=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e,quantity:t,user:n}})});if(!i.ok)throw new Error("Не вдалося створити CartItem");return i.json()},t5=async(e,t,n)=>{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({data:{quantity:t}})});if(!r.ok)throw new Error("Не вдалося оновити CartItem");return r.json()},yo=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o){for(let l=0;l<t;l++)n(hv(e));return r.success(`${e.name} додано в кошик!`),!0}const a=o.id;try{const l=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${a}&populate=product`,{headers:{Authorization:`Bearer ${i}`}});if(!l.ok)throw new Error("Не вдалося отримати кошик користувача");const{data:s}=await l.json(),c=s.find(d=>{var f;return((f=d.product)==null?void 0:f.documentId)===e.documentId});if(c){const d=c.quantity+t;if(d>e.stock)return r.warning(`Доступно лише ${e.stock} шт.`),!1;await t5(c.documentId,d,i),n(mv({id:e.id,quantity:d}))}else await e5(e.documentId,t,a,i),n(hv({...e})),t>1&&n(mv({id:e.id,quantity:t}));return r.success(`${e.name} додано в кошик!`),!0}catch(l){return console.error(l),r.error("Не вдалося додати товар у кошик"),!1}},pS=()=>{const e=It(),[t,n]=y.useState([]),r=Ue(s=>s.favorites.items),i=Ue(s=>s.cart.items),o=Ke();y.useEffect(()=>{const s=new Date,c=new Date;c.setDate(s.getDate()-7);const d=c.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${d}`).then(f=>f.json()).then(f=>n(f.data)).catch(f=>console.error("Помилка завантаження нових товарів:",f))},[]);const a=(s,c)=>{c.stopPropagation();const d=r.some(f=>f.id===(s==null?void 0:s.id));di(s,d,e,K)},l=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:u.jsxs(t4,{children:[u.jsx(Ln,{}),u.jsx(n4,{children:"Нові товари"}),u.jsxs(r4,{children:[l.map(s=>{var b;const c=r.some(C=>C.id===s.id),d=(s==null?void 0:s.available)??!0,f=(s==null?void 0:s.stock)===0,v=i.find(C=>C.id===s.id),g=(v?v.quantity:0)>=(s.stock||0),x=s.new_price&&s.new_price<s.price,w=x?s.new_price:s.price,m=x?Math.round((s.price-s.new_price)/s.price*100):0,p=async()=>{if(g){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(g){K.warning(`Доступно лише ${s.stock} шт.`);return}await yo(s,1,e,K)};return u.jsxs(i4,{onClick:()=>o(`/product/${s.slug??s.id}`),$soldOut:f,children:[u.jsxs(a4,{children:[u.jsx(s4,{children:"Новинка"}),f&&u.jsx(Kc,{children:"Продано"}),!d&&u.jsx(o4,{children:"Бронь"}),u.jsx("img",{src:((b=s.images)==null?void 0:b[0].url)||er,alt:s.name,onError:C=>{C.currentTarget.onerror=null,C.currentTarget.src=er}}),u.jsx("div",{className:"overlay"})]}),u.jsxs(l4,{children:[u.jsx(c4,{children:s.name}),u.jsxs(u4,{children:[u.jsx(Ww,{children:u.jsxs(Hw,{children:[u.jsxs(Gw,{$discount:x,children:[w.toLocaleString()," грн"]}),x&&u.jsxs(qw,{children:[s.price.toLocaleString()," грн"]}),x&&u.jsxs(Yw,{children:["-",m,"%"]})]})}),u.jsxs(Uw,{children:[d&&!f&&u.jsx(Ql,{onClick:C=>p(),children:u.jsx(xo,{size:24,color:v?"var(--orange-color)":"black",strokeWidth:2})}),!f&&u.jsx(Ql,{onClick:C=>a(s,C),children:u.jsx(Ka,{size:24,fill:c?"#ff4d4f":"none",color:c?"#ff4d4f":"#000000",strokeWidth:c?1:2})})]})]})]})]},s.id)}),u.jsx(d4,{to:"/catalog/new",children:u.jsxs(f4,{children:[u.jsx("p",{children:"Усі новинки"}),u.jsx(p4,{children:u.jsx(Gc,{size:24})})]})})]})]})};function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function n5(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function r5(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var i5=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(r5(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=n5(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),st="-ms-",ac="-moz-",de="-webkit-",hS="comm",_m="rule",Em="decl",o5="@import",mS="@keyframes",a5="@layer",s5=Math.abs,iu=String.fromCharCode,l5=Object.assign;function c5(e,t){return tt(e,0)^45?(((t<<2^tt(e,0))<<2^tt(e,1))<<2^tt(e,2))<<2^tt(e,3):0}function gS(e){return e.trim()}function u5(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,n){return e.replace(t,n)}function Fp(e,t){return e.indexOf(t)}function tt(e,t){return e.charCodeAt(t)|0}function za(e,t,n){return e.slice(t,n)}function Cn(e){return e.length}function jm(e){return e.length}function Ps(e,t){return t.push(e),e}function d5(e,t){return e.map(t).join("")}var ou=1,lo=1,vS=0,Ot=0,Ae=0,bo="";function au(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ou,column:lo,length:a,return:""}}function Ro(e,t){return l5(au("",null,null,"",null,null,0),e,{length:-e.length},t)}function f5(){return Ae}function p5(){return Ae=Ot>0?tt(bo,--Ot):0,lo--,Ae===10&&(lo=1,ou--),Ae}function Nt(){return Ae=Ot<vS?tt(bo,Ot++):0,lo++,Ae===10&&(lo=1,ou++),Ae}function Tn(){return tt(bo,Ot)}function ll(){return Ot}function ts(e,t){return za(bo,e,t)}function Fa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xS(e){return ou=lo=1,vS=Cn(bo=e),Ot=0,[]}function yS(e){return bo="",e}function cl(e){return gS(ts(Ot-1,Np(e===91?e+2:e===40?e+1:e)))}function h5(e){for(;(Ae=Tn())&&Ae<33;)Nt();return Fa(e)>2||Fa(Ae)>3?"":" "}function m5(e,t){for(;--t&&Nt()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return ts(e,ll()+(t<6&&Tn()==32&&Nt()==32))}function Np(e){for(;Nt();)switch(Ae){case e:return Ot;case 34:case 39:e!==34&&e!==39&&Np(Ae);break;case 40:e===41&&Np(e);break;case 92:Nt();break}return Ot}function g5(e,t){for(;Nt()&&e+Ae!==47+10;)if(e+Ae===42+42&&Tn()===47)break;return"/*"+ts(t,Ot-1)+"*"+iu(e===47?e:Nt())}function v5(e){for(;!Fa(Tn());)Nt();return ts(e,Ot)}function x5(e){return yS(ul("",null,null,null,[""],e=xS(e),0,[0],e))}function ul(e,t,n,r,i,o,a,l,s){for(var c=0,d=0,f=a,v=0,h=0,g=0,x=1,w=1,m=1,p=0,b="",C=i,S=o,j=r,E=b;w;)switch(g=p,p=Nt()){case 40:if(g!=108&&tt(E,f-1)==58){Fp(E+=fe(cl(p),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:E+=cl(p);break;case 9:case 10:case 13:case 32:E+=h5(g);break;case 92:E+=m5(ll()-1,7);continue;case 47:switch(Tn()){case 42:case 47:Ps(y5(g5(Nt(),ll()),t,n),s);break;default:E+="/"}break;case 123*x:l[c++]=Cn(E)*m;case 125*x:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+d:m==-1&&(E=fe(E,/\f/g,"")),h>0&&Cn(E)-f&&Ps(h>32?yv(E+";",r,n,f-1):yv(fe(E," ","")+";",r,n,f-2),s);break;case 59:E+=";";default:if(Ps(j=xv(E,t,n,c,d,i,l,b,C=[],S=[],f),o),p===123)if(d===0)ul(E,t,j,j,C,o,f,l,S);else switch(v===99&&tt(E,3)===110?100:v){case 100:case 108:case 109:case 115:ul(e,j,j,r&&Ps(xv(e,j,j,0,0,i,l,b,i,C=[],f),S),i,S,f,l,r?C:S);break;default:ul(E,j,j,j,[""],S,0,l,S)}}c=d=h=0,x=m=1,b=E="",f=a;break;case 58:f=1+Cn(E),h=g;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&p5()==125)continue}switch(E+=iu(p),p*x){case 38:m=d>0?1:(E+="\f",-1);break;case 44:l[c++]=(Cn(E)-1)*m,m=1;break;case 64:Tn()===45&&(E+=cl(Nt())),v=Tn(),d=f=Cn(b=E+=v5(ll())),p++;break;case 45:g===45&&Cn(E)==2&&(x=0)}}return o}function xv(e,t,n,r,i,o,a,l,s,c,d){for(var f=i-1,v=i===0?o:[""],h=jm(v),g=0,x=0,w=0;g<r;++g)for(var m=0,p=za(e,f+1,f=s5(x=a[g])),b=e;m<h;++m)(b=gS(x>0?v[m]+" "+p:fe(p,/&\f/g,v[m])))&&(s[w++]=b);return au(e,t,n,i===0?_m:l,s,c,d)}function y5(e,t,n){return au(e,t,n,hS,iu(f5()),za(e,2,-2),0)}function yv(e,t,n,r){return au(e,t,n,Em,za(e,0,r),za(e,r+1,-1),r)}function Gi(e,t){for(var n="",r=jm(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function b5(e,t,n,r){switch(e.type){case a5:if(e.children.length)break;case o5:case Em:return e.return=e.return||e.value;case hS:return"";case mS:return e.return=e.value+"{"+Gi(e.children,r)+"}";case _m:e.value=e.props.join(",")}return Cn(n=Gi(e.children,r))?e.return=e.value+"{"+n+"}":""}function w5(e){var t=jm(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function S5(e){return function(t){t.root||(t=t.return)&&e(t)}}function C5(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var k5=function(t,n,r){for(var i=0,o=0;i=o,o=Tn(),i===38&&o===12&&(n[r]=1),!Fa(o);)Nt();return ts(t,Ot)},_5=function(t,n){var r=-1,i=44;do switch(Fa(i)){case 0:i===38&&Tn()===12&&(n[r]=1),t[r]+=k5(Ot-1,n,r);break;case 2:t[r]+=cl(i);break;case 4:if(i===44){t[++r]=Tn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=iu(i)}while(i=Nt());return t},E5=function(t,n){return yS(_5(xS(t),n))},bv=new WeakMap,j5=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!bv.get(r))&&!i){bv.set(t,!0);for(var o=[],a=E5(n,o),l=r.props,s=0,c=0;s<a.length;s++)for(var d=0;d<l.length;d++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},P5=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function bS(e,t){switch(c5(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+ac+e+st+e+e;case 6828:case 4268:return de+e+st+e+e;case 6165:return de+e+st+"flex-"+e+e;case 5187:return de+e+fe(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+st+"flex-$1$2")+e;case 5443:return de+e+st+"flex-item-"+fe(e,/flex-|-self/,"")+e;case 4675:return de+e+st+"flex-line-pack"+fe(e,/align-content|flex-|-self/,"")+e;case 5548:return de+e+st+fe(e,"shrink","negative")+e;case 5292:return de+e+st+fe(e,"basis","preferred-size")+e;case 6060:return de+"box-"+fe(e,"-grow","")+de+e+st+fe(e,"grow","positive")+e;case 4554:return de+fe(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(e)-1-t>6)switch(tt(e,t+1)){case 109:if(tt(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+ac+(tt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Fp(e,"stretch")?bS(fe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(tt(e,t+1)!==115)break;case 6444:switch(tt(e,Cn(e)-3-(~Fp(e,"!important")&&10))){case 107:return fe(e,":",":"+de)+e;case 101:return fe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+de+(tt(e,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+st+"$2box$3")+e}break;case 5936:switch(tt(e,t+11)){case 114:return de+e+st+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+st+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+st+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return de+e+st+e+e}return e}var T5=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Em:t.return=bS(t.value,t.length);break;case mS:return Gi([Ro(t,{value:fe(t.value,"@","@"+de)})],i);case _m:if(t.length)return d5(t.props,function(o){switch(u5(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Gi([Ro(t,{props:[fe(o,/:(read-\w+)/,":"+ac+"$1")]})],i);case"::placeholder":return Gi([Ro(t,{props:[fe(o,/:(plac\w+)/,":"+de+"input-$1")]}),Ro(t,{props:[fe(o,/:(plac\w+)/,":"+ac+"$1")]}),Ro(t,{props:[fe(o,/:(plac\w+)/,st+"input-$1")]})],i)}return""})}},O5=[T5],$5=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var w=x.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||O5,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var w=x.getAttribute("data-emotion").split(" "),m=1;m<w.length;m++)o[w[m]]=!0;l.push(x)});var s,c=[j5,P5];{var d,f=[b5,S5(function(x){d.insert(x)})],v=w5(c.concat(i,f)),h=function(w){return Gi(x5(w),v)};s=function(w,m,p,b){d=p,h(w?w+"{"+m.styles+"}":m.styles),b&&(g.inserted[m.name]=!0)}}var g={key:n,sheet:new i5({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return g.sheet.hydrate(l),g},wS={exports:{}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze=typeof Symbol=="function"&&Symbol.for,Pm=Ze?Symbol.for("react.element"):60103,Tm=Ze?Symbol.for("react.portal"):60106,su=Ze?Symbol.for("react.fragment"):60107,lu=Ze?Symbol.for("react.strict_mode"):60108,cu=Ze?Symbol.for("react.profiler"):60114,uu=Ze?Symbol.for("react.provider"):60109,du=Ze?Symbol.for("react.context"):60110,Om=Ze?Symbol.for("react.async_mode"):60111,fu=Ze?Symbol.for("react.concurrent_mode"):60111,pu=Ze?Symbol.for("react.forward_ref"):60112,hu=Ze?Symbol.for("react.suspense"):60113,I5=Ze?Symbol.for("react.suspense_list"):60120,mu=Ze?Symbol.for("react.memo"):60115,gu=Ze?Symbol.for("react.lazy"):60116,M5=Ze?Symbol.for("react.block"):60121,D5=Ze?Symbol.for("react.fundamental"):60117,L5=Ze?Symbol.for("react.responder"):60118,A5=Ze?Symbol.for("react.scope"):60119;function Ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Pm:switch(e=e.type,e){case Om:case fu:case su:case cu:case lu:case hu:return e;default:switch(e=e&&e.$$typeof,e){case du:case pu:case gu:case mu:case uu:return e;default:return t}}case Tm:return t}}}function SS(e){return Ht(e)===fu}ve.AsyncMode=Om;ve.ConcurrentMode=fu;ve.ContextConsumer=du;ve.ContextProvider=uu;ve.Element=Pm;ve.ForwardRef=pu;ve.Fragment=su;ve.Lazy=gu;ve.Memo=mu;ve.Portal=Tm;ve.Profiler=cu;ve.StrictMode=lu;ve.Suspense=hu;ve.isAsyncMode=function(e){return SS(e)||Ht(e)===Om};ve.isConcurrentMode=SS;ve.isContextConsumer=function(e){return Ht(e)===du};ve.isContextProvider=function(e){return Ht(e)===uu};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pm};ve.isForwardRef=function(e){return Ht(e)===pu};ve.isFragment=function(e){return Ht(e)===su};ve.isLazy=function(e){return Ht(e)===gu};ve.isMemo=function(e){return Ht(e)===mu};ve.isPortal=function(e){return Ht(e)===Tm};ve.isProfiler=function(e){return Ht(e)===cu};ve.isStrictMode=function(e){return Ht(e)===lu};ve.isSuspense=function(e){return Ht(e)===hu};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===su||e===fu||e===cu||e===lu||e===hu||e===I5||typeof e=="object"&&e!==null&&(e.$$typeof===gu||e.$$typeof===mu||e.$$typeof===uu||e.$$typeof===du||e.$$typeof===pu||e.$$typeof===D5||e.$$typeof===L5||e.$$typeof===A5||e.$$typeof===M5)};ve.typeOf=Ht;wS.exports=ve;var R5=wS.exports,CS=R5,z5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},F5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kS={};kS[CS.ForwardRef]=z5;kS[CS.Memo]=F5;var N5=!0;function _S(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var $m=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||N5===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},ES=function(t,n,r){$m(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function B5(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var V5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},U5=/[A-Z]|^ms/g,W5=/_EMO_([^_]+?)_([^]*?)_EMO_/g,jS=function(t){return t.charCodeAt(1)===45},wv=function(t){return t!=null&&typeof t!="boolean"},Ad=C5(function(e){return jS(e)?e:e.replace(U5,"-$&").toLowerCase()}),Sv=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(W5,function(r,i,o){return kn={name:i,styles:o,next:kn},i})}return V5[t]!==1&&!jS(t)&&typeof n=="number"&&n!==0?n+"px":n};function Na(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return kn={name:n.name,styles:n.styles,next:kn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)kn={name:r.name,styles:r.styles,next:kn},r=r.next;var i=n.styles+";";return i}return H5(e,t,n)}case"function":{if(e!==void 0){var o=kn,a=n(e);return kn=o,Na(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function H5(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Na(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":wv(a)&&(r+=Ad(o)+":"+Sv(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)wv(a[l])&&(r+=Ad(o)+":"+Sv(o,a[l])+";");else{var s=Na(e,t,a);switch(o){case"animation":case"animationName":{r+=Ad(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var Cv=/label:\s*([^\s;\n{]+)\s*(;|$)/g,kn,Im=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";kn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Na(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Na(r,n,t[l]),i&&(o+=a[l]);Cv.lastIndex=0;for(var s="",c;(c=Cv.exec(o))!==null;)s+="-"+c[1];var d=B5(o)+s;return{name:d,styles:o,next:kn}},G5=function(t){return t()},q5=Sf["useInsertionEffect"]?Sf["useInsertionEffect"]:!1,PS=q5||G5,Mm={}.hasOwnProperty,TS=y.createContext(typeof HTMLElement<"u"?$5({key:"css"}):null);TS.Provider;var OS=function(t){return y.forwardRef(function(n,r){var i=y.useContext(TS);return t(n,i,r)})},$S=y.createContext({}),Bp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Y5=function(t,n){var r={};for(var i in n)Mm.call(n,i)&&(r[i]=n[i]);return r[Bp]=t,r},X5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return $m(n,r,i),PS(function(){return ES(n,r,i)}),null},K5=OS(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Bp],o=[r],a="";typeof e.className=="string"?a=_S(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Im(o,void 0,y.useContext($S));a+=t.key+"-"+l.name;var s={};for(var c in e)Mm.call(e,c)&&c!=="css"&&c!==Bp&&(s[c]=e[c]);return s.ref=n,s.className=a,y.createElement(y.Fragment,null,y.createElement(X5,{cache:t,serialized:l,isStringTag:typeof i=="string"}),y.createElement(i,s))}),Q5=K5,Z=function(t,n){var r=arguments;if(n==null||!Mm.call(n,"css"))return y.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=Q5,o[1]=Y5(t,n);for(var a=2;a<i;a++)o[a]=r[a];return y.createElement.apply(null,o)};function Dm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Im(t)}var Z5=function(){var t=Dm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},J5=sP,e3=function(t){return t!=="theme"},kv=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?J5:e3},_v=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},t3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return $m(n,r,i),PS(function(){return ES(n,r,i)}),null},n3=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=_v(t,n,r),s=l||kv(i),c=!s("as");return function(){var d=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{f.push(d[0][0]);for(var v=d.length,h=1;h<v;h++)f.push(d[h],d[0][h])}var g=OS(function(x,w,m){var p=c&&x.as||i,b="",C=[],S=x;if(x.theme==null){S={};for(var j in x)S[j]=x[j];S.theme=y.useContext($S)}typeof x.className=="string"?b=_S(w.registered,C,x.className):x.className!=null&&(b=x.className+" ");var E=Im(f.concat(C),w.registered,S);b+=w.key+"-"+E.name,a!==void 0&&(b+=" "+a);var _=c&&l===void 0?kv(p):s,$={};for(var I in x)c&&I==="as"||_(I)&&($[I]=x[I]);return $.className=b,$.ref=m,y.createElement(y.Fragment,null,y.createElement(t3,{cache:w,serialized:E,isStringTag:typeof p=="string"}),y.createElement(p,$))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=f,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(x,w){return e(x,ee({},n,w,{shouldForwardProp:_v(g,w,!0)})).apply(void 0,f)},g}},r3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ze=n3.bind();r3.forEach(function(e){ze[e]=ze(e)});const i3=ze.section`
  background-color: var(--second-background);
`,o3=ze.div`
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
`,a3=ze.div`

`,s3=ze.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,l3=ze.div`
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
`;const c3=ze(je)`
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
`,u3=ze.div`
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
`,d3=ze.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,f3=ze.p`
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
`;var p3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};h3(p3);function h3(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var m3="#4fa94d",g3={"aria-busy":!0,role:"progressbar"},v3=k.div`
  display: ${e=>e.$visible?"flex":"none"};
`,x3="http://www.w3.org/2000/svg",fi=({height:e=100,width:t=100,radius:n=5,color:r=m3,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>u.jsx(v3,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...g3,children:u.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:x3,"data-testid":"ball-triangle-svg",children:[u.jsx("title",{children:"Ball Triangle"}),u.jsx("desc",{children:"Animated representation of three balls"}),u.jsx("g",{fill:"none",fillRule:"evenodd",children:u.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[u.jsxs("circle",{cx:"5",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"27",cy:"5",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"49",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),rn=242.776657104492,y3=1.6,b3=gm`
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
  animation: ${b3} ${y3}s linear infinite;
`;var w3=gm`
to {
   transform: rotate(360deg);
 }
`;k.svg`
  animation: ${w3} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var S3=gm`
to {
   stroke-dashoffset: 136;
 }
`;k.polygon`
  stroke-dasharray: 17;
  animation: ${S3} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;k.svg`
  transform-origin: 50% 65%;
`;const C3=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(!0);return y.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();t(a.data.map(l=>{var s;return{id:l.id,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(i3,{children:u.jsxs(o3,{children:[u.jsx(a3,{children:u.jsx(pS,{})}),u.jsx(s3,{children:"Каталог"}),u.jsx(l3,{children:e.map(i=>u.jsxs(c3,{to:`/catalog/${i.title}`,children:[u.jsx(u3,{children:u.jsx(d3,{src:i.image,alt:i.title})}),u.jsx(f3,{children:i.title})]},i.id))})]})})},k3=ze.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,_3=ze.h1`
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
`,E3=ze.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,j3=ze(je)`

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

  
`,P3=()=>u.jsxs(k3,{children:[u.jsxs(_3,{children:[" ",u.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),u.jsx(E3,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),u.jsx(j3,{children:" На головну"})]});const T3=k.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,O3=k.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var IS={},MS={},vu={},DS={exports:{}},ns={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ev=Object.getOwnPropertySymbols,$3=Object.prototype.hasOwnProperty,I3=Object.prototype.propertyIsEnumerable;function M3(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function D3(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var L3=D3()?Object.assign:function(e,t){for(var n,r=M3(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)$3.call(n,a)&&(r[a]=n[a]);if(Ev){i=Ev(n);for(var l=0;l<i.length;l++)I3.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},LS={exports:{}},ce={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm=L3,wo=60103,AS=60106;ce.Fragment=60107;ce.StrictMode=60108;ce.Profiler=60114;var RS=60109,zS=60110,FS=60112;ce.Suspense=60113;var NS=60115,BS=60116;if(typeof Symbol=="function"&&Symbol.for){var nn=Symbol.for;wo=nn("react.element"),AS=nn("react.portal"),ce.Fragment=nn("react.fragment"),ce.StrictMode=nn("react.strict_mode"),ce.Profiler=nn("react.profiler"),RS=nn("react.provider"),zS=nn("react.context"),FS=nn("react.forward_ref"),ce.Suspense=nn("react.suspense"),NS=nn("react.memo"),BS=nn("react.lazy")}var jv=typeof Symbol=="function"&&Symbol.iterator;function A3(e){return e===null||typeof e!="object"?null:(e=jv&&e[jv]||e["@@iterator"],typeof e=="function"?e:null)}function rs(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var VS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},US={};function So(e,t,n){this.props=e,this.context=t,this.refs=US,this.updater=n||VS}So.prototype.isReactComponent={};So.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(rs(85));this.updater.enqueueSetState(this,e,t,"setState")};So.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function WS(){}WS.prototype=So.prototype;function Am(e,t,n){this.props=e,this.context=t,this.refs=US,this.updater=n||VS}var Rm=Am.prototype=new WS;Rm.constructor=Am;Lm(Rm,So.prototype);Rm.isPureReactComponent=!0;var zm={current:null},HS=Object.prototype.hasOwnProperty,GS={key:!0,ref:!0,__self:!0,__source:!0};function qS(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)HS.call(t,r)&&!GS.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wo,type:e,key:o,ref:a,props:i,_owner:zm.current}}function R3(e,t){return{$$typeof:wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fm(e){return typeof e=="object"&&e!==null&&e.$$typeof===wo}function z3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pv=/\/+/g;function Rd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?z3(""+e.key):t.toString(36)}function dl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case wo:case AS:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Rd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(Pv,"$&/")+"/"),dl(i,t,n,"",function(c){return c})):i!=null&&(Fm(i)&&(i=R3(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Pv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Rd(o,l);a+=dl(o,t,n,s,i)}else if(s=A3(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Rd(o,l++),a+=dl(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(rs(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Ts(e,t,n){if(e==null)return e;var r=[],i=0;return dl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function F3(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var YS={current:null};function ir(){var e=YS.current;if(e===null)throw Error(rs(321));return e}var N3={ReactCurrentDispatcher:YS,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:zm,IsSomeRendererActing:{current:!1},assign:Lm};ce.Children={map:Ts,forEach:function(e,t,n){Ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ts(e,function(){t++}),t},toArray:function(e){return Ts(e,function(t){return t})||[]},only:function(e){if(!Fm(e))throw Error(rs(143));return e}};ce.Component=So;ce.PureComponent=Am;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N3;ce.cloneElement=function(e,t,n){if(e==null)throw Error(rs(267,e));var r=Lm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=zm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)HS.call(t,s)&&!GS.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:wo,type:e.type,key:i,ref:o,props:r,_owner:a}};ce.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:zS,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:RS,_context:e},e.Consumer=e};ce.createElement=qS;ce.createFactory=function(e){var t=qS.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:FS,render:e}};ce.isValidElement=Fm;ce.lazy=function(e){return{$$typeof:BS,_payload:{_status:-1,_result:e},_init:F3}};ce.memo=function(e,t){return{$$typeof:NS,type:e,compare:t===void 0?null:t}};ce.useCallback=function(e,t){return ir().useCallback(e,t)};ce.useContext=function(e,t){return ir().useContext(e,t)};ce.useDebugValue=function(){};ce.useEffect=function(e,t){return ir().useEffect(e,t)};ce.useImperativeHandle=function(e,t,n){return ir().useImperativeHandle(e,t,n)};ce.useLayoutEffect=function(e,t){return ir().useLayoutEffect(e,t)};ce.useMemo=function(e,t){return ir().useMemo(e,t)};ce.useReducer=function(e,t,n){return ir().useReducer(e,t,n)};ce.useRef=function(e){return ir().useRef(e)};ce.useState=function(e){return ir().useState(e)};ce.version="17.0.2";LS.exports=ce;var B3=LS.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V3=B3,XS=60103;ns.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Tv=Symbol.for;XS=Tv("react.element"),ns.Fragment=Tv("react.fragment")}var U3=V3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W3=Object.prototype.hasOwnProperty,H3={key:!0,ref:!0,__self:!0,__source:!0};function KS(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)W3.call(t,r)&&!H3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:XS,type:e,key:o,ref:a,props:i,_owner:U3.current}}ns.jsx=KS;ns.jsxs=KS;DS.exports=ns;var Mt=DS.exports,QS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(QS);var Dt=QS.exports;const G3={"lds-circle":"_lds-circle_qlxhy_1"},q3=Object.freeze(Object.defineProperty({__proto__:null,default:G3},Symbol.toStringTag,{value:"Module"})),Y3=$t(q3);var ZS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vu,"__esModule",{value:!0});vu.Circle=void 0;const X3=Mt,K3=ZS(Dt),Q3=ZS(Y3);function Z3({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,X3.jsx)("div",{className:(0,K3.default)(Q3.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}vu.Circle=Z3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=vu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(MS);var JS={},xu={};const J3={"lds-default":"_lds-default_wt1n8_1"},eI=Object.freeze(Object.defineProperty({__proto__:null,default:J3},Symbol.toStringTag,{value:"Module"})),tI=$t(eI);var e2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xu,"__esModule",{value:!0});xu.Default=void 0;const Ov=Mt,nI=e2(Dt),rI=e2(tI);function iI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,Ov.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,Ov.jsx)("div",{className:(0,nI.default)(rI.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}xu.Default=iI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=xu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(JS);var t2={},yu={};const oI={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},aI=Object.freeze(Object.defineProperty({__proto__:null,default:oI},Symbol.toStringTag,{value:"Module"})),sI=$t(aI);var n2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yu,"__esModule",{value:!0});yu.DualRing=void 0;const $v=Mt,Iv=n2(Dt),Mv=n2(sI);function lI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,$v.jsx)("div",{className:(0,Iv.default)(Mv.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,$v.jsx)("div",{className:(0,Iv.default)(Mv.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}yu.DualRing=lI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=yu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(t2);var r2={},bu={};const cI={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},uI=Object.freeze(Object.defineProperty({__proto__:null,default:cI},Symbol.toStringTag,{value:"Module"})),dI=$t(uI);var i2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bu,"__esModule",{value:!0});bu.Ellipsis=void 0;const Dv=Mt,fI=i2(Dt),pI=i2(dI);function hI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,Dv.jsx)("div",{style:{background:`${e}`}},l));return(0,Dv.jsx)("div",{className:(0,fI.default)(pI.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}bu.Ellipsis=hI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=bu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(r2);var o2={},wu={};const mI={"lds-facebook":"_lds-facebook_1ts9g_1"},gI=Object.freeze(Object.defineProperty({__proto__:null,default:mI},Symbol.toStringTag,{value:"Module"})),vI=$t(gI);var a2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wu,"__esModule",{value:!0});wu.Facebook=void 0;const Lv=Mt,xI=a2(Dt),yI=a2(vI);function bI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,Lv.jsx)("div",{style:{background:`${e}`}},l));return(0,Lv.jsx)("div",{className:(0,xI.default)(yI.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}wu.Facebook=bI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=wu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(o2);var s2={},Su={};const wI={"lds-grid":"_lds-grid_1ftub_1"},SI=Object.freeze(Object.defineProperty({__proto__:null,default:wI},Symbol.toStringTag,{value:"Module"})),CI=$t(SI);var l2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Su,"__esModule",{value:!0});Su.Grid=void 0;const Av=Mt,kI=l2(Dt),_I=l2(CI);function EI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,Av.jsx)("div",{style:{background:`${e}`}},l));return(0,Av.jsx)("div",{className:(0,kI.default)(_I.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}Su.Grid=EI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=Su;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(s2);var c2={},Cu={};const jI={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},PI=Object.freeze(Object.defineProperty({__proto__:null,default:jI},Symbol.toStringTag,{value:"Module"})),TI=$t(PI);var u2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cu,"__esModule",{value:!0});Cu.Heart=void 0;const Os=Mt,zd=u2(Dt),Fd=u2(TI);function OI({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Os.jsx)("div",{className:(0,zd.default)(Fd.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,Os.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,Os.jsx)("div",{className:(0,zd.default)(Fd.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,Os.jsx)("div",{className:(0,zd.default)(Fd.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}Cu.Heart=OI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=Cu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(c2);var d2={},ku={};const $I={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},II=Object.freeze(Object.defineProperty({__proto__:null,default:$I},Symbol.toStringTag,{value:"Module"})),MI=$t(II);var f2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ku,"__esModule",{value:!0});ku.Hourglass=void 0;const Rv=Mt,zv=f2(Dt),Fv=f2(MI);function DI({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,Rv.jsx)("div",{className:(0,zv.default)(Fv.default["lds-hourglass"],n),style:{...r},children:(0,Rv.jsx)("div",{className:(0,zv.default)(Fv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}ku.Hourglass=DI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=ku;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(d2);var p2={},_u={};const h2="_center_1rufi_10",m2="_spin_1rufi_1",LI={"lds-orbitals":"_lds-orbitals_1rufi_1",center:h2,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:m2},AI=Object.freeze(Object.defineProperty({__proto__:null,center:h2,default:LI,spin:m2},Symbol.toStringTag,{value:"Module"})),RI=$t(AI);var g2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_u,"__esModule",{value:!0});_u.Orbitals=void 0;const at=Mt,pt=g2(Dt),Ce=g2(RI);function zI({color:e="#7f58af",className:t,style:n}){return(0,at.jsxs)("div",{className:(0,pt.default)(Ce.default["lds-orbitals"],t),style:{...n},children:[(0,at.jsx)("div",{className:Ce.default.center,style:{background:e}}),(0,at.jsxs)("div",{className:(0,pt.default)(Ce.default["inner-spin"]),children:[(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-arc"],Ce.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-arc"],Ce.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-arc"],Ce.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-arc"],Ce.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-moon-a"]),style:{background:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["inner-moon-b"]),style:{background:e}})]}),(0,at.jsxs)("div",{className:(0,pt.default)(Ce.default["outer-spin"]),children:[(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-arc"],Ce.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-arc"],Ce.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-arc"],Ce.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-arc"],Ce.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-moon-a"]),style:{background:e}}),(0,at.jsx)("div",{className:(0,pt.default)(Ce.default["outer-moon-b"]),style:{background:e}})]})]})}_u.Orbitals=zI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=_u;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(p2);var v2={},Eu={};const FI={"lds-ring":"_lds-ring_xgxdp_1"},NI=Object.freeze(Object.defineProperty({__proto__:null,default:FI},Symbol.toStringTag,{value:"Module"})),BI=$t(NI);var x2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Eu,"__esModule",{value:!0});Eu.Ring=void 0;const Nv=Mt,VI=x2(Dt),UI=x2(BI);function WI({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,Nv.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,Nv.jsx)("div",{className:(0,VI.default)(UI.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}Eu.Ring=WI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Eu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(v2);var y2={},ju={};const HI={"lds-ripple":"_lds-ripple_1lgcf_1"},GI=Object.freeze(Object.defineProperty({__proto__:null,default:HI},Symbol.toStringTag,{value:"Module"})),qI=$t(GI);var b2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ju,"__esModule",{value:!0});ju.Ripple=void 0;const Bv=Mt,YI=b2(Dt),XI=b2(qI);function KI({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,Bv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,Bv.jsx)("div",{className:(0,YI.default)(XI.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}ju.Ripple=KI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=ju;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(y2);var w2={},Pu={};const QI={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},ZI=Object.freeze(Object.defineProperty({__proto__:null,default:QI},Symbol.toStringTag,{value:"Module"})),JI=$t(ZI);var S2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pu,"__esModule",{value:!0});Pu.Roller=void 0;const Nd=Mt,Vv=S2(Dt),Uv=S2(JI);function eM({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Nd.jsx)("div",{children:(0,Nd.jsx)("div",{className:(0,Vv.default)(Uv.default["div-after"]),style:{background:e}})},o));return(0,Nd.jsx)("div",{className:(0,Vv.default)(Uv.default["lds-roller"],t),style:{...n},children:r})}Pu.Roller=eM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=Pu;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(w2);var C2={},Tu={};const tM={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},nM=Object.freeze(Object.defineProperty({__proto__:null,default:tM},Symbol.toStringTag,{value:"Module"})),rM=$t(nM);var k2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Tu,"__esModule",{value:!0});Tu.Spinner=void 0;const Bd=Mt,Wv=k2(Dt),Hv=k2(rM);function iM({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,Bd.jsx)("div",{children:(0,Bd.jsx)("div",{className:(0,Wv.default)(Hv.default["div-after"]),style:{background:e}})},o));return(0,Bd.jsx)("div",{className:(0,Wv.default)(Hv.default["lds-spinner"],t),style:{...n},children:r})}Tu.Spinner=iM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=Tu;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(C2);var _2={},Ou={};const E2="_left_v9vlb_30",j2="_right_v9vlb_33",P2="_anim_v9vlb_37",oM={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:E2,right:j2,anim:P2,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},aM=Object.freeze(Object.defineProperty({__proto__:null,anim:P2,default:oM,left:E2,right:j2},Symbol.toStringTag,{value:"Module"})),sM=$t(aM);var T2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ou,"__esModule",{value:!0});Ou.Ouroboro=void 0;const zo=Mt,Fo=T2(Dt),No=T2(sM);function lM({color:e="#7f58af",style:t,className:n}){return(0,zo.jsxs)("div",{className:(0,Fo.default)(No.default["lds-ouroboro"],n),style:{...t},children:[(0,zo.jsx)("span",{className:(0,Fo.default)(No.default.left),children:(0,zo.jsx)("span",{className:(0,Fo.default)(No.default.anim),style:{background:e}})}),(0,zo.jsx)("span",{className:(0,Fo.default)(No.default.right),children:(0,zo.jsx)("span",{className:(0,Fo.default)(No.default.anim),style:{background:e}})})]})}Ou.Ouroboro=lM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Ou;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(_2);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=MS;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=JS;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=t2;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=r2;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=o2;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=s2;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=c2;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=d2;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const c=p2;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return c.Orbitals}});const d=v2;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return d.Ring}});const f=y2;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return f.Ripple}});const v=w2;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return v.Roller}});const h=C2;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return h.Spinner}});const g=_2;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return g.Ouroboro}})})(IS);const cM=()=>u.jsx(O3,{children:u.jsx(IS.Default,{color:"#6d433da8"})});const uM="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",dM=lT`
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
  src: url(${uM}) format('truetype');
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
`,fM=k.div`
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
`,pM=k(je)`
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
`,hM=k.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,mM=k.h3`

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
`,gM=k.a`

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
`,vM=k.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,xM=()=>{const[e,t]=y.useState([]);return y.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),u.jsxs(u.Fragment,{children:[u.jsx(hM,{children:"Каталог"}),u.jsxs(fM,{children:[e.slice(0,7).map(n=>u.jsx(pM,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:u.jsx(mM,{children:n.title})},n.title)),u.jsxs(gM,{href:"catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(vM,{children:u.jsx(Gc,{size:24})})]})]})]})};function Gv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Nm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Gv(t[r])&&Gv(e[r])&&Object.keys(t[r]).length>0&&Nm(e[r],t[r])})}const O2={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function On(){const e=typeof document<"u"?document:{};return Nm(e,O2),e}const yM={document:O2,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function wt(){const e=typeof window<"u"?window:{};return Nm(e,yM),e}function bM(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function wM(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function $2(e,t=0){return setTimeout(e,t)}function sc(){return Date.now()}function SM(e){const t=wt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function CM(e,t="x"){const n=wt();let r,i,o;const a=SM(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function $s(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function kM(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function At(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!kM(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&($s(t[l])&&$s(r[l])?r[l].__swiper__?t[l]=r[l]:At(t[l],r[l]):!$s(t[l])&&$s(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:At(t[l],r[l])):t[l]=r[l])}}}return t}function bi(e,t,n){e.style.setProperty(t,n)}function I2({swiper:e,targetPosition:t,side:n}){const r=wt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",c=(f,v)=>s==="next"&&f>=v||s==="prev"&&f<=v,d=()=>{a=new Date().getTime(),o===null&&(o=a);const f=Math.max(Math.min((a-o)/l,1),0),v=.5-Math.cos(f*Math.PI)/2;let h=i+v*(t-i);if(c(h,t)&&(h=t),e.wrapperEl.scrollTo({[n]:h}),c(h,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:h})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function En(e,t=""){const n=wt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function _M(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function EM(e,t){const n=wt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=_M(e,t))),r}function lc(e){try{console.warn(e);return}catch{}}function cc(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:bM(t)),n}function jM(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function PM(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function xr(e,t){return wt().getComputedStyle(e,null).getPropertyValue(t)}function uc(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function M2(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Vp(e,t,n){const r=wt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Ba(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function D2(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=En(e.el,`.${r[i]}`)[0];o||(o=cc("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const qv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function TM({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:qv};function i(h){let g;return h&&typeof h=="string"&&e.isElement&&(g=e.el.querySelector(h)||e.hostEl.querySelector(h),g)?g:(h&&(typeof h=="string"&&(g=[...document.querySelectorAll(h)]),e.params.uniqueNavElements&&typeof h=="string"&&g&&g.length>1&&e.el.querySelectorAll(h).length===1?g=e.el.querySelector(h):g&&g.length===1&&(g=g[0])),h&&!g?h:g)}function o(h,g){const x=e.params.navigation;h=qe(h),h.forEach(w=>{w&&(w.classList[g?"add":"remove"](...x.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=g),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](x.lockClass))})}function a(){const{nextEl:h,prevEl:g}=e.navigation;if(e.params.loop){o(g,!1),o(h,!1);return}o(g,e.isBeginning&&!e.params.rewind),o(h,e.isEnd&&!e.params.rewind)}function l(h){h.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(h){h.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const h=e.params.navigation;if(e.params.navigation=D2(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(h.nextEl||h.prevEl))return;let g=i(h.nextEl),x=i(h.prevEl);Object.assign(e.navigation,{nextEl:g,prevEl:x}),g=qe(g),x=qe(x);const w=(m,p)=>{if(m){if(h.addIcons&&m.matches(".swiper-button-next,.swiper-button-prev")&&!m.querySelector("svg")){const b=document.createElement("div");Ba(b,qv),m.appendChild(b.querySelector("svg")),b.remove()}m.addEventListener("click",p==="next"?s:l)}!e.enabled&&m&&m.classList.add(...h.lockClass.split(" "))};g.forEach(m=>w(m,"next")),x.forEach(m=>w(m,"prev"))}function d(){let{nextEl:h,prevEl:g}=e.navigation;h=qe(h),g=qe(g);const x=(w,m)=>{w.removeEventListener("click",m==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};h.forEach(w=>x(w,"next")),g.forEach(w=>x(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?v():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:h,prevEl:g}=e.navigation;if(h=qe(h),g=qe(g),e.enabled){a();return}[...h,...g].filter(x=>!!x).forEach(x=>x.classList.add(e.params.navigation.lockClass))}),n("click",(h,g)=>{let{nextEl:x,prevEl:w}=e.navigation;x=qe(x),w=qe(w);const m=g.target;let p=w.includes(m)||x.includes(m);if(e.isElement&&!p){const b=g.path||g.composedPath&&g.composedPath();b&&(p=b.find(C=>x.includes(C)||w.includes(C)))}if(e.params.navigation.hideOnClick&&!p){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===m||e.pagination.el.contains(m)))return;let b;x.length?b=x[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(b=w[0].classList.contains(e.params.navigation.hiddenClass)),r(b===!0?"navigationShow":"navigationHide"),[...x,...w].filter(C=>!!C).forEach(C=>C.classList.toggle(e.params.navigation.hiddenClass))}});const f=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),a()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:f,disable:v,update:a,init:c,destroy:d})}function Bo(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function OM({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(m,p){const{bulletActiveClass:b}=e.params.pagination;m&&(m=m[`${p==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${b}-${p}`),m=m[`${p==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${b}-${p}-${p}`)))}function c(m,p,b){if(m=m%b,p=p%b,p===m+1)return"next";if(p===m-1)return"previous"}function d(m){const p=m.target.closest(Bo(e.params.pagination.bulletClass));if(!p)return;m.preventDefault();const b=uc(p)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const C=c(e.realIndex,b,e.slides.length);C==="next"?e.slideNext():C==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b)}function f(){const m=e.rtl,p=e.params.pagination;if(l())return;let b=e.pagination.el;b=qe(b);let C,S;const j=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,E=e.params.loop?Math.ceil(j/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(S=e.previousRealIndex||0,C=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(C=e.snapIndex,S=e.previousSnapIndex):(S=e.previousIndex||0,C=e.activeIndex||0),p.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let $,I,M;if(p.dynamicBullets&&(o=Vp(_[0],e.isHorizontal()?"width":"height",!0),b.forEach(D=>{D.style[e.isHorizontal()?"width":"height"]=`${o*(p.dynamicMainBullets+4)}px`}),p.dynamicMainBullets>1&&S!==void 0&&(a+=C-(S||0),a>p.dynamicMainBullets-1?a=p.dynamicMainBullets-1:a<0&&(a=0)),$=Math.max(C-a,0),I=$+(Math.min(_.length,p.dynamicMainBullets)-1),M=(I+$)/2),_.forEach(D=>{const T=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(A=>`${p.bulletActiveClass}${A}`)].map(A=>typeof A=="string"&&A.includes(" ")?A.split(" "):A).flat();D.classList.remove(...T)}),b.length>1)_.forEach(D=>{const T=uc(D);T===C?D.classList.add(...p.bulletActiveClass.split(" ")):e.isElement&&D.setAttribute("part","bullet"),p.dynamicBullets&&(T>=$&&T<=I&&D.classList.add(...`${p.bulletActiveClass}-main`.split(" ")),T===$&&s(D,"prev"),T===I&&s(D,"next"))});else{const D=_[C];if(D&&D.classList.add(...p.bulletActiveClass.split(" ")),e.isElement&&_.forEach((T,A)=>{T.setAttribute("part",A===C?"bullet-active":"bullet")}),p.dynamicBullets){const T=_[$],A=_[I];for(let L=$;L<=I;L+=1)_[L]&&_[L].classList.add(...`${p.bulletActiveClass}-main`.split(" "));s(T,"prev"),s(A,"next")}}if(p.dynamicBullets){const D=Math.min(_.length,p.dynamicMainBullets+4),T=(o*D-o)/2-M*o,A=m?"right":"left";_.forEach(L=>{L.style[e.isHorizontal()?A:"top"]=`${T}px`})}}b.forEach((_,$)=>{if(p.type==="fraction"&&(_.querySelectorAll(Bo(p.currentClass)).forEach(I=>{I.textContent=p.formatFractionCurrent(C+1)}),_.querySelectorAll(Bo(p.totalClass)).forEach(I=>{I.textContent=p.formatFractionTotal(E)})),p.type==="progressbar"){let I;p.progressbarOpposite?I=e.isHorizontal()?"vertical":"horizontal":I=e.isHorizontal()?"horizontal":"vertical";const M=(C+1)/E;let D=1,T=1;I==="horizontal"?D=M:T=M,_.querySelectorAll(Bo(p.progressbarFillClass)).forEach(A=>{A.style.transform=`translate3d(0,0,0) scaleX(${D}) scaleY(${T})`,A.style.transitionDuration=`${e.params.speed}ms`})}p.type==="custom"&&p.renderCustom?(Ba(_,p.renderCustom(e,C+1,E)),$===0&&r("paginationRender",_)):($===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](p.lockClass)})}function v(){const m=e.params.pagination;if(l())return;const p=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=qe(b);let C="";if(m.type==="bullets"){let S=e.params.loop?Math.ceil(p/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&S>p&&(S=p);for(let j=0;j<S;j+=1)m.renderBullet?C+=m.renderBullet.call(e,j,m.bulletClass):C+=`<${m.bulletElement} ${e.isElement?'part="bullet"':""} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?C=m.renderFraction.call(e,m.currentClass,m.totalClass):C=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?C=m.renderProgressbar.call(e,m.progressbarFillClass):C=`<span class="${m.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach(S=>{m.type!=="custom"&&Ba(S,C||""),m.type==="bullets"&&e.pagination.bullets.push(...S.querySelectorAll(Bo(m.bulletClass)))}),m.type!=="custom"&&r("paginationRender",b[0])}function h(){e.params.pagination=D2(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const m=e.params.pagination;if(!m.el)return;let p;typeof m.el=="string"&&e.isElement&&(p=e.el.querySelector(m.el)),!p&&typeof m.el=="string"&&(p=[...document.querySelectorAll(m.el)]),p||(p=m.el),!(!p||p.length===0)&&(e.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(p)&&p.length>1&&(p=[...e.el.querySelectorAll(m.el)],p.length>1&&(p=p.find(b=>M2(b,".swiper")[0]===e.el))),Array.isArray(p)&&p.length===1&&(p=p[0]),Object.assign(e.pagination,{el:p}),p=qe(p),p.forEach(b=>{m.type==="bullets"&&m.clickable&&b.classList.add(...(m.clickableClass||"").split(" ")),b.classList.add(m.modifierClass+m.type),b.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(b.classList.add(`${m.modifierClass}${m.type}-dynamic`),a=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&b.classList.add(m.progressbarOppositeClass),m.clickable&&b.addEventListener("click",d),e.enabled||b.classList.add(m.lockClass)}))}function g(){const m=e.params.pagination;if(l())return;let p=e.pagination.el;p&&(p=qe(p),p.forEach(b=>{b.classList.remove(m.hiddenClass),b.classList.remove(m.modifierClass+m.type),b.classList.remove(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&(b.classList.remove(...(m.clickableClass||"").split(" ")),b.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(b=>b.classList.remove(...m.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const m=e.params.pagination;let{el:p}=e.pagination;p=qe(p),p.forEach(b=>{b.classList.remove(m.horizontalClass,m.verticalClass),b.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(h(),v(),f())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&f()}),n("snapIndexChange",()=>{f()}),n("snapGridLengthChange",()=>{v(),f()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:m}=e.pagination;m&&(m=qe(m),m.forEach(p=>p.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{f()}),n("click",(m,p)=>{const b=p.target,C=qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&C&&C.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const S=C[0].classList.contains(e.params.pagination.hiddenClass);r(S===!0?"paginationShow":"paginationHide"),C.forEach(j=>j.classList.toggle(e.params.pagination.hiddenClass))}});const x=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=qe(m),m.forEach(p=>p.classList.remove(e.params.pagination.paginationDisabledClass))),h(),v(),f()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=qe(m),m.forEach(p=>p.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:x,disable:w,render:v,update:f,init:h,destroy:g})}function $M({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,c,d=new Date().getTime(),f,v,h,g,x,w;function m(z){!e||e.destroyed||!e.wrapperEl||z.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(w||z.detail&&z.detail.bySwiperTouchMove)&&$())}const p=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?f=!0:f&&(s=c,f=!1);const z=e.autoplay.paused?c:d+s-new Date().getTime();e.autoplay.timeLeft=z,r("autoplayTimeLeft",z,z/l),a=requestAnimationFrame(()=>{p()})},b=()=>{let z;return e.virtual&&e.params.virtual.enabled?z=e.slides.find(O=>O.classList.contains("swiper-slide-active")):z=e.slides[e.activeIndex],z?parseInt(z.getAttribute("data-swiper-autoplay"),10):void 0},C=()=>{let z=e.params.autoplay.delay;const P=b();return!Number.isNaN(P)&&P>0&&(z=P),z},S=z=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),p();let P=z;typeof P>"u"&&(P=C(),l=P,s=P),c=P;const O=e.params.speed,F=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(O,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,O,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(O,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,O,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{S()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{F()},P)):requestAnimationFrame(()=>{F()}),P},j=()=>{d=new Date().getTime(),e.autoplay.running=!0,S(),r("autoplayStart")},E=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},_=(z,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),z||(x=!0);const O=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):$()};if(e.autoplay.paused=!0,P){O();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),O())},$=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),x?(x=!1,S(c)):S(),e.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const z=On();z.visibilityState==="hidden"&&(x=!0,_(!0)),z.visibilityState==="visible"&&$()},M=z=>{z.pointerType==="mouse"&&(x=!0,w=!0,!(e.animating||e.autoplay.paused)&&_(!0))},D=z=>{z.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&$())},T=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",M),e.el.addEventListener("pointerleave",D))},A=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",M),e.el.removeEventListener("pointerleave",D))},L=()=>{On().addEventListener("visibilitychange",I)},R=()=>{On().removeEventListener("visibilitychange",I)};n("init",()=>{e.params.autoplay.enabled&&(T(),L(),j())}),n("destroy",()=>{A(),R(),e.autoplay.running&&E()}),n("_freeModeStaticRelease",()=>{(h||x)&&$()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?E():_(!0,!0)}),n("beforeTransitionStart",(z,P,O)=>{e.destroyed||!e.autoplay.running||(O||!e.params.autoplay.disableOnInteraction?_(!0,!0):E())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){E();return}v=!0,h=!1,x=!1,g=setTimeout(()=>{x=!0,h=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(g),clearTimeout(o),e.params.autoplay.disableOnInteraction){h=!1,v=!1;return}h&&e.params.cssMode&&$(),h=!1,v=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=C(),l=C())}),Object.assign(e.autoplay,{start:j,stop:E,pause:_,resume:$})}let Vd;function IM(){const e=wt(),t=On();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function L2(){return Vd||(Vd=IM()),Vd}let Ud;function MM({userAgent:e}={}){const t=L2(),n=wt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),f=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=r==="Win32";let h=r==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&h&&t.touch&&g.indexOf(`${a}x${l}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),h=!1),s&&!v&&(o.os="android",o.android=!0),(c||f||d)&&(o.os="ios",o.ios=!0),o}function A2(e={}){return Ud||(Ud=MM(e)),Ud}let Wd;function DM(){const e=wt(),t=A2();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,c]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=s<16||s===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function R2(){return Wd||(Wd=DM()),Wd}function LM({swiper:e,on:t,emit:n}){const r=wt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(d=>{o=r.requestAnimationFrame(()=>{const{width:f,height:v}=e;let h=f,g=v;d.forEach(({contentBoxSize:x,contentRect:w,target:m})=>{m&&m!==e.el||(h=w?w.width:(x[0]||x).inlineSize,g=w?w.height:(x[0]||x).blockSize)}),(h!==f||g!==v)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function AM({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=wt(),a=(c,d={})=>{const f=o.MutationObserver||o.WebkitMutationObserver,v=new f(h=>{if(e.__preventObserver__)return;if(h.length===1){r("observerUpdate",h[0]);return}const g=function(){r("observerUpdate",h[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});v.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(v)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=M2(e.hostEl);for(let d=0;d<c.length;d+=1)a(c[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var RM={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function zM(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(xr(r,"padding-left")||0,10)-parseInt(xr(r,"padding-right")||0,10),n=n-parseInt(xr(r,"padding-top")||0,10)-parseInt(xr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function FM(){const e=this;function t(I,M){return parseFloat(I.getPropertyValue(e.getDirectionLabel(M))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,c=En(i,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:c.length;let f=[];const v=[],h=[];let g=n.slidesOffsetBefore;typeof g=="function"&&(g=n.slidesOffsetBefore.call(e));let x=n.slidesOffsetAfter;typeof x=="function"&&(x=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,m=e.slidesGrid.length,p=e.size-g-x;let b=n.spaceBetween,C=-g,S=0,j=0;if(typeof p>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*p:typeof b=="string"&&(b=parseFloat(b)),e.virtualSize=-b-g-x,c.forEach(I=>{o?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(bi(r,"--swiper-centered-offset-before",""),bi(r,"--swiper-centered-offset-after","")),n.cssMode&&(bi(r,"--swiper-slides-offset-before",`${g}px`),bi(r,"--swiper-slides-offset-after",`${x}px`));const E=n.grid&&n.grid.rows>1&&e.grid;E?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let _;const $=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(I=>typeof n.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<d;I+=1){_=0;const M=c[I];if(!(M&&(E&&e.grid.updateSlide(I,M,c),xr(M,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&M&&(n.roundLengths&&(_=Math.floor(_)),M.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){$&&(M.style[e.getDirectionLabel("width")]="");const D=getComputedStyle(M),T=M.style.transform,A=M.style.webkitTransform;if(T&&(M.style.transform="none"),A&&(M.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?Vp(M,"width",!0):Vp(M,"height",!0);else{const L=t(D,"width"),R=t(D,"padding-left"),z=t(D,"padding-right"),P=t(D,"margin-left"),O=t(D,"margin-right"),F=D.getPropertyValue("box-sizing");if(F&&F==="border-box")_=L+P+O;else{const{clientWidth:B,offsetWidth:N}=M;_=L+R+z+P+O+(N-B)}}T&&(M.style.transform=T),A&&(M.style.webkitTransform=A),n.roundLengths&&(_=Math.floor(_))}else _=(p-(n.slidesPerView-1)*b)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),M&&(M.style[e.getDirectionLabel("width")]=`${_}px`);M&&(M.swiperSlideSize=_),h.push(_),n.centeredSlides?(C=C+_/2+S/2+b,S===0&&I!==0&&(C=C-p/2-b),I===0&&(C=C-p/2-b),Math.abs(C)<1/1e3&&(C=0),n.roundLengths&&(C=Math.floor(C)),j%n.slidesPerGroup===0&&f.push(C),v.push(C)):(n.roundLengths&&(C=Math.floor(C)),(j-Math.min(e.params.slidesPerGroupSkip,j))%e.params.slidesPerGroup===0&&f.push(C),v.push(C),C=C+_+b),e.virtualSize+=_+b,S=_,j+=1}}if(e.virtualSize=Math.max(e.virtualSize,p)+x,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+b}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),E&&e.grid.updateWrapperSize(_,f),!n.centeredSlides){const I=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,M=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||I);let D=f.length;if(M){let A;if(n.slidesPerView==="auto"){A=1;let L=0;for(let R=h.length-1;R>=0&&(L+=h[R]+(R<h.length-1?b:0),L<=p);R-=1)A=h.length-R}else A=Math.floor(n.slidesPerView);D=Math.max(d-A,0)}const T=[];for(let A=0;A<f.length;A+=1){let L=f[A];n.roundLengths&&(L=Math.floor(L)),M?A<=D&&T.push(L):f[A]<=e.virtualSize-p&&T.push(L)}f=T,Math.floor(e.virtualSize-p)-Math.floor(f[f.length-1])>1&&(M||f.push(e.virtualSize-p))}if(l&&n.loop){const I=h[0]+b;if(n.slidesPerGroup>1){const M=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),D=I*n.slidesPerGroup;for(let T=0;T<M;T+=1)f.push(f[f.length-1]+D)}for(let M=0;M<e.virtual.slidesBefore+e.virtual.slidesAfter;M+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+I),v.push(v[v.length-1]+I),e.virtualSize+=I}if(f.length===0&&(f=[0]),b!==0){const I=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((M,D)=>!n.cssMode||n.loop?!0:D!==c.length-1).forEach(M=>{M.style[I]=`${b}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let I=0;h.forEach(D=>{I+=D+(b||0)}),I-=b;const M=I>p?I-p:0;f=f.map(D=>D<=0?-g:D>M?M+x:D)}if(n.centerInsufficientSlides){let I=0;if(h.forEach(M=>{I+=M+(b||0)}),I-=b,I<p){const M=(p-I)/2;f.forEach((D,T)=>{f[T]=D-M}),v.forEach((D,T)=>{v[T]=D+M})}}if(Object.assign(e,{slides:c,snapGrid:f,slidesGrid:v,slidesSizesGrid:h}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){bi(r,"--swiper-centered-offset-before",`${-f[0]}px`),bi(r,"--swiper-centered-offset-after",`${e.size/2-h[h.length-1]/2}px`);const I=-e.snapGrid[0],M=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(D=>D+I),e.slidesGrid=e.slidesGrid.map(D=>D+M)}if(d!==s&&e.emit("slidesLengthChange"),f.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==m&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const I=`${n.containerModifierClass}backface-hidden`,M=e.el.classList.contains(I);d<=n.maxBackfaceHiddenSlides?M||e.el.classList.add(I):M&&e.el.classList.remove(I)}}function NM(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function BM(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Yv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function VM(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const c=r[s];let d=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const f=(a+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),v=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),h=-(a-d),g=h+t.slidesSizesGrid[s],x=h>=0&&h<=t.size-t.slidesSizesGrid[s],w=h>=0&&h<t.size-1||g>1&&g<=t.size||h<=0&&g>=t.size;w&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s)),Yv(c,w,n.slideVisibleClass),Yv(c,x,n.slideFullyVisibleClass),c.progress=i?-f:f,c.originalProgress=i?-v:v}}function UM(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,c=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=f||i>=1,d&&(i=0),f&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),v=t.slidesGrid[d],h=t.slidesGrid[f],g=t.slidesGrid[t.slidesGrid.length-1],x=Math.abs(e);x>=v?l=(x-v)/g:l=(x+g-h)/g,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(s&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Hd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function WM(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=f=>En(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let s,c,d;if(o)if(n.loop){let f=i-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${f}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(f=>f.column===i),d=t.find(f=>f.column===i+1),c=t.find(f=>f.column===i-1)):s=t[i];s&&(a||(d=PM(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),c=jM(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(f=>{Hd(f,f===s,n.slideActiveClass),Hd(f,f===d,n.slideNextClass),Hd(f,f===c,n.slidePrevClass)}),e.emitSlidesClasses()}const fl=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},Gd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Up=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,c)=>a+r+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&Gd(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&Gd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Gd(e,a)};function HM(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function GM(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,c;const d=h=>{let g=h-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof s>"u"&&(s=HM(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const h=Math.min(i.slidesPerGroupSkip,s);c=h+Math.floor((s-h)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(s);return}const f=t.grid&&i.grid&&i.grid.rows>1;let v;if(t.virtual&&i.virtual.enabled)i.loop?v=d(s):v=s;else if(f){const h=t.slides.find(x=>x.column===s);let g=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(h),0)),v=Math.floor(g/i.grid.rows)}else if(t.slides[s]){const h=t.slides[s].getAttribute("data-swiper-slide-index");h?v=parseInt(h,10):v=s}else v=s;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:v,previousIndex:o,activeIndex:s}),t.initialized&&Up(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==v&&t.emit("realIndexChange"),t.emit("slideChange"))}function qM(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var YM={updateSize:zM,updateSlides:FM,updateAutoHeight:NM,updateSlidesOffset:BM,updateSlidesProgress:VM,updateProgress:UM,updateSlidesClasses:WM,updateActiveIndex:GM,updateClickedSlide:qM};function XM(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=CM(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function KM(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const c=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let d;const f=n.maxTranslate()-n.minTranslate();f===0?d=0:d=(e-n.minTranslate())/f,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function QM(){return-this.snapGrid[0]}function ZM(){return-this.snapGrid[this.snapGrid.length-1]}function JM(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),c=o.maxTranslate();let d;if(r&&e>s?d=s:r&&e<c?d=c:d=e,o.updateProgress(d),a.cssMode){const f=o.isHorizontal();if(t===0)l[f?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return I2({swiper:o,targetPosition:-d,side:f?"left":"top"}),!0;l.scrollTo({[f?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(v){!o||o.destroyed||v.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var e6={getTranslate:XM,setTranslate:KM,minTranslate:QM,maxTranslate:ZM,translateTo:JM};function t6(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function z2({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function n6(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),z2({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function r6(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),z2({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var i6={setTransition:t6,transitionStart:n6,transitionEnd:r6};function o6(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:c,previousIndex:d,activeIndex:f,rtlTranslate:v,wrapperEl:h,enabled:g}=o;if(!g&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const x=Math.min(o.params.slidesPerGroupSkip,a);let w=x+Math.floor((a-x)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const m=-s[w];if(l.normalizeSlideIndex)for(let E=0;E<c.length;E+=1){const _=-Math.floor(m*100),$=Math.floor(c[E]*100),I=Math.floor(c[E+1]*100);typeof c[E+1]<"u"?_>=$&&_<I-(I-$)/2?a=E:_>=$&&_<I&&(a=E+1):_>=$&&(a=E)}if(o.initialized&&a!==f&&(!o.allowSlideNext&&(v?m>o.translate&&m>o.minTranslate():m<o.translate&&m<o.minTranslate())||!o.allowSlidePrev&&m>o.translate&&m>o.maxTranslate()&&(f||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(m);let p;a>f?p="next":a<f?p="prev":p="reset";const b=o.virtual&&o.params.virtual.enabled;if(!(b&&i)&&(v&&-m===o.translate||!v&&m===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(m),p!=="reset"&&(o.transitionStart(n,p),o.transitionEnd(n,p)),!1;if(l.cssMode){const E=o.isHorizontal(),_=v?m:-m;if(t===0)b&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),b&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[E?"scrollLeft":"scrollTop"]=_})):h[E?"scrollLeft":"scrollTop"]=_,b&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return I2({swiper:o,targetPosition:_,side:E?"left":"top"}),!0;h.scrollTo({[E?"left":"top"]:_,behavior:"smooth"})}return!0}const j=R2().isSafari;return b&&!i&&j&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(m),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,p),t===0?o.transitionEnd(n,p):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(_){!o||o.destroyed||_.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,p))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function a6(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const x=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===x).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:f}=i.params,v=c||!!d||!!f;let h=i.params.slidesPerView;h==="auto"?h=i.slidesPerViewDynamic():(h=Math.ceil(parseFloat(i.params.slidesPerView,10)),v&&h%2===0&&(h=h+1));let g=s-l<h;if(v&&(g=g||l<Math.ceil(h/2)),r&&v&&i.params.slidesPerView!=="auto"&&!o&&(g=!1),g){const x=v?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:x,slideTo:!0,activeSlideIndex:x==="next"?l+1:l-s+1,slideRealIndex:x==="next"?i.realIndex:void 0})}if(o){const x=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===x).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function s6(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function l6(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=l?r.translate:-r.translate;function v(p){return p<0?-Math.floor(Math.abs(p)):Math.floor(p)}const h=v(f),g=o.map(p=>v(p)),x=i.freeMode&&i.freeMode.enabled;let w=o[g.indexOf(h)-1];if(typeof w>"u"&&(i.cssMode||x)){let p;o.forEach((b,C)=>{h>=b&&(p=C)}),typeof p<"u"&&(w=x?o[p]:o[p>0?p-1:p])}let m=0;if(typeof w<"u"&&(m=a.indexOf(w),m<0&&(m=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(m=m-r.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&r.isBeginning){const p=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(p,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(m,e,t,n)}),!0;return r.slideTo(m,e,t,n)}function c6(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function u6(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const c=i.snapGrid[l],d=i.snapGrid[l+1];s-c>(d-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],d=i.snapGrid[l];s-c<=(d-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function d6(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(En(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),$2(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var f6={slideTo:o6,slideToLoop:a6,slideNext:s6,slidePrev:l6,slideReset:c6,slideToClosest:u6,slideToClickedSlide:d6};function p6(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{En(i,`.${r.slideClass}, swiper-slide`).forEach((g,x)=>{g.setAttribute("data-swiper-slide-index",x)})},a=()=>{const h=En(i,`.${r.slideBlankClass}`);h.forEach(g=>{g.remove()}),h.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),c=n.slides.length%s!==0,d=l&&n.slides.length%r.grid.rows!==0,f=h=>{for(let g=0;g<h;g+=1){const x=n.isElement?cc("swiper-slide",[r.slideBlankClass]):cc("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(x)}};if(c){if(r.loopAddBlankSlides){const h=s-n.slides.length%s;f(h),n.recalcSlides(),n.updateSlides()}else lc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(d){if(r.loopAddBlankSlides){const h=r.grid.rows-n.slides.length%r.grid.rows;f(h),n.recalcSlides(),n.updateSlides()}else lc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const v=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:v?void 0:"next",initial:t})}function h6({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:f,slidesEl:v,params:h}=s,{centeredSlides:g,slidesOffsetBefore:x,slidesOffsetAfter:w,initialSlide:m}=h,p=g||!!x||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&h.virtual.enabled){t&&(!p&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):p&&s.snapIndex<h.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=f,s.emit("loopFix");return}let b=h.slidesPerView;b==="auto"?b=s.slidesPerViewDynamic():(b=Math.ceil(parseFloat(h.slidesPerView,10)),p&&b%2===0&&(b=b+1));const C=h.slidesPerGroupAuto?b:h.slidesPerGroup;let S=p?Math.max(C,Math.ceil(b/2)):C;S%C!==0&&(S+=C-S%C),S+=h.loopAdditionalSlides,s.loopedSlides=S;const j=s.grid&&h.grid&&h.grid.rows>1;c.length<b+S||s.params.effect==="cards"&&c.length<b+S*2?lc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):j&&h.grid.fill==="row"&&lc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],_=[],$=j?Math.ceil(c.length/h.grid.rows):c.length,I=o&&$-m<b&&!p;let M=I?m:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(c.find(P=>P.classList.contains(h.slideActiveClass))):M=i;const D=n==="next"||!n,T=n==="prev"||!n;let A=0,L=0;const z=(j?c[i].column:i)+(p&&typeof r>"u"?-b/2+.5:0);if(z<S){A=Math.max(S-z,C);for(let P=0;P<S-z;P+=1){const O=P-Math.floor(P/$)*$;if(j){const F=$-O-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===F&&E.push(B)}else E.push($-O-1)}}else if(z+b>$-S){L=Math.max(z-($-S*2),C),I&&(L=Math.max(L,b-$+m+1));for(let P=0;P<L;P+=1){const O=P-Math.floor(P/$)*$;j?c.forEach((F,B)=>{F.column===O&&_.push(B)}):_.push(O)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&c.length<b+S*2&&(_.includes(i)&&_.splice(_.indexOf(i),1),E.includes(i)&&E.splice(E.indexOf(i),1)),T&&E.forEach(P=>{c[P].swiperLoopMoveDOM=!0,v.prepend(c[P]),c[P].swiperLoopMoveDOM=!1}),D&&_.forEach(P=>{c[P].swiperLoopMoveDOM=!0,v.append(c[P]),c[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),h.slidesPerView==="auto"?s.updateSlides():j&&(E.length>0&&T||_.length>0&&D)&&s.slides.forEach((P,O)=>{s.grid.updateSlide(O,P,s.slides)}),h.watchSlidesProgress&&s.updateSlidesOffset(),t){if(E.length>0&&T){if(typeof e>"u"){const P=s.slidesGrid[M],F=s.slidesGrid[M+A]-P;l?s.setTranslate(s.translate-F):(s.slideTo(M+Math.ceil(A),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-F,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-F))}else if(r){const P=j?E.length/h.grid.rows:E.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&D)if(typeof e>"u"){const P=s.slidesGrid[M],F=s.slidesGrid[M-L]-P;l?s.setTranslate(s.translate-F):(s.slideTo(M-L,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-F,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-F))}else{const P=j?_.length/h.grid.rows:_.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=f,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(O=>{!O.destroyed&&O.params.loop&&O.loopFix({...P,slideTo:O.params.slidesPerView===h.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===h.slidesPerView?t:!1})}s.emit("loopFix")}function m6(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var g6={loopCreate:p6,loopFix:h6,loopDestroy:m6};function v6(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function x6(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var y6={setGrabCursor:v6,unsetGrabCursor:x6};function b6(e,t=this){function n(r){if(!r||r===On()||r===wt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Xv(e,t,n){const r=wt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function w6(e){const t=this,n=On();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Xv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!EM(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&d&&(s=d[0]);const f=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(v?b6(f,s):s.closest(f))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const h=a.currentX,g=a.currentY;if(!Xv(t,r,h))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=h,a.startY=g,i.touchStartTime=sc(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let x=!0;s.matches(i.focusableElements)&&(x=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=x&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function S6(e){const t=On(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].find(j=>j.identifier===r.touchId),!c||c.identifier!==r.touchId)return}else c=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const d=c.pageX,f=c.pageY;if(s.preventedByNestedSwiper){o.startX=d,o.startY=f;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:f,currentX:d,currentY:f}),r.touchStartTime=sc());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(f<o.startY&&n.translate<=n.maxTranslate()||f>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(d>o.startX&&-n.translate<=n.maxTranslate()||d<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=f;const v=o.currentX-o.startX,h=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(v**2+h**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let j;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:v*v+h*h>=25&&(j=Math.atan2(Math.abs(h),Math.abs(v))*180/Math.PI,r.isScrolling=n.isHorizontal()?j>i.touchAngle:90-j>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let g=n.isHorizontal()?v:h,x=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(g=Math.abs(g)*(a?1:-1),x=Math.abs(x)*(a?1:-1)),o.diff=g,g*=i.touchRatio,a&&(g=-g,x=-x);const w=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=x>0?"prev":"next";const m=n.params.loop&&!i.cssMode,p=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(m&&p&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const j=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(j)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let b;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&m&&p&&Math.abs(g)>=1){Object.assign(o,{startX:d,startY:f,currentX:d,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let C=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),g>0?(m&&p&&!b&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(C=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**S))):g<0&&(m&&p&&!b&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(C=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**S))),C&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function C6(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(S=>S.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:c,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=sc(),v=f-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),v<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=sc(),$2(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let h;if(a.followFinger?h=s?t.translate:-t.translate:h=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:h});return}const g=h>=-t.maxTranslate()&&!t.params.loop;let x=0,w=t.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){const j=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[S+j]<"u"?(g||h>=c[S]&&h<c[S+j])&&(x=S,w=c[S+j]-c[S]):(g||h>=c[S])&&(x=S,w=c[c.length-1]-c[c.length-2])}let m=null,p=null;a.rewind&&(t.isBeginning?p=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const b=(h-c[x])/w,C=x<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(v>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?m:x+C):t.slideTo(x)),t.swipeDirection==="prev"&&(b>1-a.longSwipesRatio?t.slideTo(x+C):p!==null&&b<0&&Math.abs(b)>a.longSwipesRatio?t.slideTo(p):t.slideTo(x))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(x+C):t.slideTo(x):(t.swipeDirection==="next"&&t.slideTo(m!==null?m:x+C),t.swipeDirection==="prev"&&t.slideTo(p!==null?p:x))}}function Kv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function k6(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function _6(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function E6(e){const t=this;fl(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function j6(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const F2=(e,t)=>{const n=On(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Kv,!0):e[c]("observerUpdate",Kv,!0),i[s]("load",e.onLoad,{capture:!0}))};function P6(){const e=this,{params:t}=e;e.onTouchStart=w6.bind(e),e.onTouchMove=S6.bind(e),e.onTouchEnd=C6.bind(e),e.onDocumentTouchStart=j6.bind(e),t.cssMode&&(e.onScroll=_6.bind(e)),e.onClick=k6.bind(e),e.onLoad=E6.bind(e),F2(e,"on")}function T6(){F2(this,"off")}var O6={attachEvents:P6,detachEvents:T6};const Qv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function $6(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=On(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),c=e.getBreakpoint(o,l,s);if(!c||e.currentBreakpoint===c)return;const f=(c in o?o[c]:void 0)||e.originalParams,v=Qv(e,r),h=Qv(e,f),g=e.params.grabCursor,x=f.grabCursor,w=r.enabled;v&&!h?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!v&&h&&(i.classList.add(`${r.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!x?e.unsetGrabCursor():!g&&x&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(j=>{if(typeof f[j]>"u")return;const E=r[j]&&r[j].enabled,_=f[j]&&f[j].enabled;E&&!_&&e[j].disable(),!E&&_&&e[j].enable()});const m=f.direction&&f.direction!==r.direction,p=r.loop&&(f.slidesPerView!==r.slidesPerView||m),b=r.loop;m&&n&&e.changeDirection(),At(e.params,f);const C=e.params.enabled,S=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!C?e.disable():!w&&C&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",f),n&&(p?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&S?(e.loopCreate(t),e.updateSlides()):b&&!S&&e.loopDestroy()),e.emit("breakpoint",f)}function I6(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=wt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:c}=a[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var M6={setBreakpoint:$6,getBreakpoint:I6};function D6(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function L6(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=D6(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function A6(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var R6={addClasses:L6,removeClasses:A6};function z6(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var F6={checkOverflow:z6},Wp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function N6(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){At(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){At(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),At(t,r)}}const qd={eventsEmitter:RM,update:YM,translate:e6,transition:i6,slide:f6,loop:g6,grabCursor:y6,events:O6,breakpoints:M6,checkOverflow:F6,classes:R6},Yd={};let Bm=class Rn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=At({},r),n&&!r.el&&(r.el=n);const i=On();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(c=>{const d=At({},r,{el:c});s.push(new Rn(d))}),s}const o=this;o.__swiper__=!0,o.support=L2(),o.device=A2({userAgent:r.userAgent}),o.browser=R2(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:N6(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=At({},Wp,a);return o.params=At({},l,Yd,r),o.originalParams=At({},o.params),o.passedParams=At({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=En(n,`.${r.slideClass}, swiper-slide`),o=uc(i[0]);return uc(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=En(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let f=o[c]?Math.ceil(o[c].swiperSlideSize):0,v;for(let h=c+1;h<o.length;h+=1)o[h]&&!v&&(f+=Math.ceil(o[h].swiperSlideSize),d+=1,f>s&&(v=!0));for(let h=c-1;h>=0;h-=1)o[h]&&!v&&(f+=o[h].swiperSlideSize,d+=1,f>s&&(v=!0))}else if(t==="current")for(let f=c+1;f<o.length;f+=1)(n?a[f]+l[f]-a[c]<s:a[f]-a[c]<s)&&(d+=1);else for(let f=c-1;f>=0;f-=1)a[c]-a[f]<s&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&fl(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):En(r,i())[0])();return!a&&n.params.createElements&&(a=cc("div",n.params.wrapperClass),r.append(a),En(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||xr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||xr(r,"direction")==="rtl"),wrongRTL:xr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?fl(n,o):o.addEventListener("load",a=>{fl(n,a.target)})}),Up(n),n.initialized=!0,Up(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),wM(r)),r.destroyed=!0),null}static extendDefaults(t){At(Yd,t)}static get extendedDefaults(){return Yd}static get defaults(){return Wp}static installModule(t){Rn.prototype.__modules__||(Rn.prototype.__modules__=[]);const n=Rn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Rn.installModule(n)),Rn):(Rn.installModule(t),Rn)}};Object.keys(qd).forEach(e=>{Object.keys(qd[e]).forEach(t=>{Bm.prototype[t]=qd[e][t]})});Bm.use([LM,AM]);const N2=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ai(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function qi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:ai(t[r])&&ai(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:qi(e[r],t[r]):e[r]=t[r]})}function B2(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function V2(e={}){return e.pagination&&typeof e.pagination.el>"u"}function U2(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function W2(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function B6(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function V6({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:c,pagination:d,navigation:f,scrollbar:v,virtual:h,thumbs:g}=e;let x,w,m,p,b,C,S,j;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(x=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(c.pagination||c.pagination===!1)&&d&&!d.el&&(m=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&v&&!v.el&&(p=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(b=!0);const E=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),c[_].prevEl=void 0,c[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),c[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?C=!0:!c.loop&&n.loop?S=!0:j=!0),s.forEach(_=>{if(ai(c[_])&&ai(n[_]))Object.assign(c[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&E(_);else{const $=n[_];($===!0||$===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?$===!1&&E(_):c[_]=n[_]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&t&&h&&c.virtual.enabled?(h.slides=t,h.update(!0)):r.includes("virtual")&&h&&c.virtual.enabled&&(t&&(h.slides=t),h.update(!0)),r.includes("children")&&t&&c.loop&&(j=!0),x&&g.init()&&g.update(!0),w&&(e.controller.control=c.controller.control),m&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),d.init(),d.render(),d.update()),p&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),v.init(),v.updateSize(),v.setTranslate()),b&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Ba(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Ba(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(c.navigation.nextEl=i),o&&(c.navigation.prevEl=o),f.init(),f.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(C||j)&&e.loopDestroy(),(S||j)&&e.loopCreate(),e.update()}function U6(e={},t=!0){const n={on:{}},r={},i={};qi(n,Wp),n._emitClasses=!0,n.init=!1;const o={},a=N2.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?ai(e[s])?(n[s]={},i[s]={},qi(n[s],e[s]),qi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function W6({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){B2(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),V2(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),U2(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function H6(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),c=n.map(i);s.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return N2.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(ai(e[s])&&ai(t[s])){const c=Object.keys(e[s]),d=Object.keys(t[s]);c.length!==d.length?a(s):(c.forEach(f=>{e[s][f]!==t[s][f]&&a(s)}),d.forEach(f=>{e[s][f]!==t[s][f]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const G6=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function dc(){return dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dc.apply(this,arguments)}function H2(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function G2(e){const t=[];return Q.Children.toArray(e).forEach(n=>{H2(n)?t.push(n):n.props&&n.props.children&&G2(n.props.children).forEach(r=>t.push(r))}),t}function q6(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Q.Children.toArray(e).forEach(r=>{if(H2(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=G2(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function Y6(e,t,n){if(!n)return null;const r=d=>{let f=d;return d<0?f=t.length+d:f>=t.length&&(f=f-t.length),f},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let d=l;d<s;d+=1)d>=o&&d<=a&&c.push(t[r(d)]);return c.map((d,f)=>Q.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${f}`}))}function fa(e,t){return typeof window>"u"?y.useEffect(e,t):y.useLayoutEffect(e,t)}const Zv=y.createContext(null),X6=y.createContext(null),q2=y.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,c]=y.useState("swiper"),[d,f]=y.useState(null),[v,h]=y.useState(!1),g=y.useRef(!1),x=y.useRef(null),w=y.useRef(null),m=y.useRef(null),p=y.useRef(null),b=y.useRef(null),C=y.useRef(null),S=y.useRef(null),j=y.useRef(null),{params:E,passedParams:_,rest:$,events:I}=U6(o),{slides:M,slots:D}=q6(r),T=()=>{h(!v)};Object.assign(E.on,{_containerClasses(P,O){c(O)}});const A=()=>{Object.assign(E.on,I),l=!0;const P={...E};if(delete P.wrapperClass,w.current=new Bm(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=M;const O={cache:!1,slides:M,renderExternal:f,renderExternalUpdate:!1};qi(w.current.params.virtual,O),qi(w.current.originalParams.virtual,O)}};x.current||A(),w.current&&w.current.on("_beforeBreakpoint",T);const L=()=>{l||!I||!w.current||Object.keys(I).forEach(P=>{w.current.on(P,I[P])})},R=()=>{!I||!w.current||Object.keys(I).forEach(P=>{w.current.off(P,I[P])})};y.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",T)}),y.useEffect(()=>{!g.current&&w.current&&(w.current.emitSlidesClasses(),g.current=!0)}),fa(()=>{if(a&&(a.current=x.current),!!x.current)return w.current.destroyed&&A(),W6({el:x.current,nextEl:b.current,prevEl:C.current,paginationEl:S.current,scrollbarEl:j.current,swiper:w.current},E),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),fa(()=>{L();const P=H6(_,m.current,M,p.current,O=>O.key);return m.current=_,p.current=M,P.length&&w.current&&!w.current.destroyed&&V6({swiper:w.current,slides:M,passedParams:_,changedParams:P,nextEl:b.current,prevEl:C.current,scrollbarEl:j.current,paginationEl:S.current}),()=>{R()}}),fa(()=>{G6(w.current)},[d]);function z(){return E.virtual?Y6(w.current,M,d):M.map((P,O)=>Q.cloneElement(P,{swiper:w.current,swiperSlideIndex:O}))}return Q.createElement(t,dc({ref:x,className:W2(`${s}${e?` ${e}`:""}`)},$),Q.createElement(X6.Provider,{value:w.current},D["container-start"],Q.createElement(n,{className:B6(E.wrapperClass)},D["wrapper-start"],z(),D["wrapper-end"]),B2(E)&&Q.createElement(Q.Fragment,null,Q.createElement("div",{ref:C,className:"swiper-button-prev"}),Q.createElement("div",{ref:b,className:"swiper-button-next"})),U2(E)&&Q.createElement("div",{ref:j,className:"swiper-scrollbar"}),V2(E)&&Q.createElement("div",{ref:S,className:"swiper-pagination"}),D["container-end"]))});q2.displayName="Swiper";const Y2=y.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},c)=>{const d=y.useRef(null),[f,v]=y.useState("swiper-slide"),[h,g]=y.useState(!1);function x(b,C,S){C===d.current&&v(S)}fa(()=>{if(typeof l<"u"&&(d.current.swiperSlideIndex=l),c&&(c.current=d.current),!(!d.current||!r)){if(r.destroyed){f!=="swiper-slide"&&v("swiper-slide");return}return r.on("_slideClass",x),()=>{r&&r.off("_slideClass",x)}}}),fa(()=>{r&&d.current&&!r.destroyed&&v(r.getSlideClasses(d.current))},[r]);const w={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},m=()=>typeof t=="function"?t(w):t,p=()=>{g(!0)};return Q.createElement(e,dc({ref:d,className:W2(`${f}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:p},s),i&&Q.createElement(Zv.Provider,{value:w},Q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},m(),o&&!h&&Q.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}}))),!i&&Q.createElement(Zv.Provider,{value:w},m(),o&&!h&&Q.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}})))});Y2.displayName="SwiperSlide";const K6=k.section`
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
`,Q6=k.div`
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
`,Z6=k.div`
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
`,J6=k(je)`
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
`,eD=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],tD=()=>u.jsx(K6,{children:u.jsx(q2,{modules:[TM,$M,OM],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:eD.map(e=>u.jsx(Y2,{children:u.jsx(Q6,{bg:e.img,children:u.jsxs(Z6,{children:[u.jsx("h1",{children:e.title}),u.jsx("p",{children:e.desc}),u.jsx(J6,{to:e.url,children:e.btn})]})})},e.id))})}),nD=k.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Xd=k.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,Kd=k.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Qd=k.div`
  font-size: 14px;
  color: #888;
`,X2=()=>u.jsxs(nD,{children:[u.jsxs(Xd,{children:[u.jsx(Kd,{children:"3000+"}),u.jsx(Qd,{children:"Перевірених деталей"})]}),u.jsxs(Xd,{children:[u.jsx(Kd,{children:"6 років"}),u.jsx(Qd,{children:"Досвіду на ринку"})]}),u.jsxs(Xd,{children:[u.jsx(Kd,{children:"100%"}),u.jsx(Qd,{children:"Контроль якості"})]})]}),rD=ze.div`
  background:var(--background-color);
`,iD=ze.div`
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
`;const oD=()=>u.jsx(rD,{children:u.jsxs(iD,{children:[u.jsx(tD,{}),u.jsx(pS,{}),u.jsx(xM,{}),u.jsx(X2,{})]})}),aD=k.div`
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
`,sD=k.section`
  background-color:  var(--second-background);
`,lD=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,cD=k.button`
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
`,uD=k.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,dD=k.button`
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
`;const fD=k.div`
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
`,pD=k.div`
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
`;const hD=k.div`
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
`;const mD=k.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,gD=k.button`
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
`,K2=k.button`
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
`,vD=k.div`
  position: relative;
  display: inline-block;

`,xD=k.div`
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
`,yD=k.aside`

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
`,bD=k.h3`
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
`;const wD=k.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,SD=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,CD=k.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,kD=k.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,_D=k.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,ED=k.label`
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
`,jD=k.span`
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
`;var Gp={},Vm={},Um={},Co={};Object.defineProperty(Co,"__esModule",{value:!0});Co.Direction=void 0;var Jv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Jv||(Co.Direction=Jv={}));(function(e){var t=te&&te.__spreadArray||function(D,T,A){if(A||arguments.length===2)for(var L=0,R=T.length,z;L<R;L++)(z||!(L in T))&&(z||(z=Array.prototype.slice.call(T,0,L)),z[L]=T[L]);return D.concat(z||Array.prototype.slice.call(T))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=y,r=Co,i=function(D){var T=D.toString().split(".")[1];return T?T.length:0};e.getStepDecimals=i;function o(D){return D.touches&&D.touches.length||D.changedTouches&&D.changedTouches.length}e.isTouchEvent=o;function a(D,T,A){var L=(T-D)/A,R=8,z=Number(L.toFixed(R));return parseInt(z.toString(),10)===z}e.isStepDivisible=a;function l(D,T,A,L,R,z,P){var O=1e11;if(D=Math.round(D*O)/O,!z){var F=P[T-1],B=P[T+1];if(F&&F>D)return F;if(B&&B<D)return B}if(D>L)return L;if(D<A)return A;var N=Math.floor(D*O-A*O)%Math.floor(R*O),V=Math.floor(D*O-Math.abs(N)),H=N===0?D:V/O,G=Math.abs(N/O)<R/2?H:H+R,W=(0,e.getStepDecimals)(R);return parseFloat(G.toFixed(W))}e.normalizeValue=l;function s(D,T,A){return(D-T)/(A-T)}e.relativeValue=s;function c(D){return D===r.Direction.Up||D===r.Direction.Down}e.isVertical=c;function d(D,T,A){if(T>=A)throw new RangeError("min (".concat(T,") is equal/bigger than max (").concat(A,")"));if(D<T)throw new RangeError("value (".concat(D,") is smaller than min (").concat(T,")"));if(D>A)throw new RangeError("value (".concat(D,") is bigger than max (").concat(A,")"))}e.checkBoundaries=d;function f(D,T,A){return D<T?T:D>A?A:D}e.checkValuesAgainstBoundaries=f;function v(D){if(!(D.length<2)&&!D.slice(1).every(function(T,A){return D[A]<=T}))throw new RangeError("values={[".concat(D,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=v;function h(D){var T=window.getComputedStyle(D);return{top:parseInt(T["margin-top"],10),bottom:parseInt(T["margin-bottom"],10),left:parseInt(T["margin-left"],10),right:parseInt(T["margin-right"],10)}}e.getMargin=h;function g(D){var T=window.getComputedStyle(D);return{top:parseInt(T["padding-top"],10)+parseInt(T["border-top-width"],10),bottom:parseInt(T["padding-bottom"],10)+parseInt(T["border-bottom-width"],10),left:parseInt(T["padding-left"],10)+parseInt(T["border-left-width"],10),right:parseInt(T["padding-right"],10)+parseInt(T["border-right-width"],10)}}e.getPaddingAndBorder=g;function x(D,T,A){var L=A?-1:1;D.forEach(function(R,z){return m(R,L*T[z].x,T[z].y)})}e.translateThumbs=x;function w(D,T,A,L){for(var R=0,z=I(D[0],T,A,L),P=1;P<D.length;P++){var O=I(D[P],T,A,L);O<z&&(z=O,R=P)}return R}e.getClosestThumbIndex=w;function m(D,T,A){D.style.transform="translate(".concat(T,"px, ").concat(A,"px)")}e.translate=m;var p=function(D){var T=[],A=null,L=function(){for(var R=[],z=0;z<arguments.length;z++)R[z]=arguments[z];T=R,!A&&(A=requestAnimationFrame(function(){A=null,D.apply(void 0,T)}))};return L};e.schd=p;function b(D,T,A){var L=D.slice(0);return L[T]=A,L}e.replaceAt=b;function C(D){var T=D.values,A=D.colors,L=D.min,R=D.max,z=D.direction,P=z===void 0?r.Direction.Right:z,O=D.rtl,F=O===void 0?!1:O;F&&P===r.Direction.Right?P=r.Direction.Left:F&&r.Direction.Left&&(P=r.Direction.Right);var B=T.slice(0).sort(function(V,H){return V-H}).map(function(V){return(V-L)/(R-L)*100}),N=B.reduce(function(V,H,G){return"".concat(V,", ").concat(A[G]," ").concat(H,"%, ").concat(A[G+1]," ").concat(H,"%")},"");return"linear-gradient(".concat(P,", ").concat(A[0]," 0%").concat(N,", ").concat(A[A.length-1]," 100%)")}e.getTrackBackground=C;function S(){}e.voidFn=S;function j(D){throw new Error("Didn't expect to get here")}e.assertUnreachable=j;var E=function(D,T,A,L,R){R===void 0&&(R=function(P){return P});var z=Math.ceil(t([D],Array.from(D.children),!0).reduce(function(P,O){var F=Math.ceil(O.getBoundingClientRect().width);if(O.innerText&&O.innerText.includes(A)&&O.childElementCount===0){var B=O.cloneNode(!0);B.innerHTML=R(T.toFixed(L)),B.style.visibility="hidden",document.body.appendChild(B),F=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return F>P?F:P},D.getBoundingClientRect().width));return z},_=function(D,T,A,L,R,z,P){P===void 0&&(P=function(B){return B});var O=[],F=function(B){var N=E(A[B],L[B],R,z,P),V=T[B].x;T.forEach(function(H,G){var W=H.x,q=E(A[G],L[G],R,z,P);B!==G&&(V>=W&&V<=W+q||V+N>=W&&V+N<=W+q)&&(O.includes(G)||(O.push(B),O.push(G),O=t(t([],O,!0),[B,G],!1),F(G)))})};return F(D),Array.from(new Set(O.sort()))},$=function(D,T,A,L,R,z){L===void 0&&(L=.1),R===void 0&&(R=" - "),z===void 0&&(z=function(G){return G});var P=(0,e.getStepDecimals)(L),O=(0,n.useState)({}),F=O[0],B=O[1],N=(0,n.useState)(z(T[A].toFixed(P))),V=N[0],H=N[1];return(0,n.useEffect)(function(){if(D){var G=D.getThumbs();if(G.length<1)return;var W={},q=D.getOffsets(),oe=_(A,q,G,T,R,P,z),he=z(T[A].toFixed(P));if(oe.length){var ie=oe.reduce(function(St,_o,os,Eo){return St.length?t(t([],St,!0),[q[Eo[os]].x],!1):[q[Eo[os]].x]},[]);if(Math.min.apply(Math,ie)===q[A].x){var De=[];oe.forEach(function(St){De.push(T[St].toFixed(P))}),he=Array.from(new Set(De.sort(function(St,_o){return parseFloat(St)-parseFloat(_o)}))).map(z).join(R);var We=Math.min.apply(Math,ie),He=Math.max.apply(Math,ie),hi=G[oe[ie.indexOf(He)]].getBoundingClientRect().width;W.left="".concat(Math.abs(We-(He+hi))/2,"px"),W.transform="translate(-50%, 0)"}else W.visibility="hidden"}H(he),B(W)}},[D,T]),[V,F]};e.useThumbOverlap=$;function I(D,T,A,L){var R=D.getBoundingClientRect(),z=R.left,P=R.top,O=R.width,F=R.height;return c(L)?Math.abs(A-(P+F/2)):Math.abs(T-(z+O/2))}var M=function(){var D,T=((D=navigator.userAgentData)===null||D===void 0?void 0:D.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(T)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=M})(Um);var PD=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),TD=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),OD=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),$D=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&TD(t,e,n);return OD(t,e),t},e1=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Vm,"__esModule",{value:!0});var Is=$D(y),ae=Um,Fe=Co,ID=["ArrowRight","ArrowUp","k","PageUp"],MD=["ArrowLeft","ArrowDown","j","PageDown"],DD=function(e){PD(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=Is.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,c=r.trackRef.current;if(!c)return console.warn("No track element found."),[];var d=c.getBoundingClientRect(),f=(0,ae.getPaddingAndBorder)(c);return r.getThumbs().map(function(v,h){var g={x:0,y:0},x=v.getBoundingClientRect(),w=(0,ae.getMargin)(v);switch(o){case Fe.Direction.Right:return g.x=(w.left+f.left)*-1,g.y=((x.height-d.height)/2+f.top)*-1,g.x+=d.width*(0,ae.relativeValue)(a[h],l,s)-x.width/2,g;case Fe.Direction.Left:return g.x=(w.right+f.right)*-1,g.y=((x.height-d.height)/2+f.top)*-1,g.x+=d.width-d.width*(0,ae.relativeValue)(a[h],l,s)-x.width/2,g;case Fe.Direction.Up:return g.x=((x.width-d.width)/2+w.left+f.left)*-1,g.y=-f.left,g.y+=d.height-d.height*(0,ae.relativeValue)(a[h],l,s)-x.height/2,g;case Fe.Direction.Down:return g.x=((x.width-d.width)/2+w.left+f.left)*-1,g.y=-f.left,g.y+=d.height*(0,ae.relativeValue)(a[h],l,s)-x.height/2,g;default:return(0,ae.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,ae.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,ae.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,ae.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,ae.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,ae.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,c=o.rtl,d=o.direction,f=r.state.isChanged,v=r.getTargetIndex(i.nativeEvent),h=c||d===Fe.Direction.Left||d===Fe.Direction.Down?-1:1;v!==-1&&(ID.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:v,isChanged:!0}),l((0,ae.replaceAt)(a,v,r.normalizeValue(a[v]+h*(i.key==="PageUp"?s*10:s),v)))):MD.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:v,isChanged:!0}),l((0,ae.replaceAt)(a,v,r.normalizeValue(a[v]-h*(i.key==="PageDown"?s*10:s),v)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){f&&r.fireOnFinalChange()}):f&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,c=r.props,d=c.direction,f=c.min,v=c.max,h=c.onChange,g=c.values,x=c.step,w=c.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var m=r.trackRef.current;if(!m)return null;var p=m.getBoundingClientRect(),b=(0,ae.isVertical)(d)?p.height:p.width;if(s[0]!==-1&&s[1]!==-1){var C=i-s[0],S=o-s[1],j=0;switch(d){case Fe.Direction.Right:case Fe.Direction.Left:j=C/b*(v-f);break;case Fe.Direction.Down:case Fe.Direction.Up:j=S/b*(v-f);break;default:(0,ae.assertUnreachable)(d)}if(w&&(j*=-1),Math.abs(j)>=x/2){for(var E=0;E<r.thumbRefs.length;E++){if(g[E]===v&&Math.sign(j)===1||g[E]===f&&Math.sign(j)===-1)return;var _=g[E]+j;_>v?j=v-g[E]:_<f&&(j=f-g[E])}for(var $=g.slice(0),E=0;E<r.thumbRefs.length;E++)$=(0,ae.replaceAt)($,E,r.normalizeValue(g[E]+j,E));r.setState({draggedTrackPos:[i,o]}),h($)}}else{var I=0;switch(d){case Fe.Direction.Right:I=(i-p.left)/b*(v-f)+f;break;case Fe.Direction.Left:I=(b-(i-p.left))/b*(v-f)+f;break;case Fe.Direction.Down:I=(o-p.top)/b*(v-f)+f;break;case Fe.Direction.Up:I=(b-(o-p.top))/b*(v-f)+f;break;default:(0,ae.assertUnreachable)(d)}w&&(I=v+f-I),Math.abs(g[l]-I)>=x/2&&h((0,ae.replaceAt)(g,l,r.normalizeValue(I,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,c=a.step,d=a.allowOverlap,f=a.values;return(0,ae.normalizeValue)(i,o,l,s,c,d,f)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=Is.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),c=[],d=0;d<r.numOfMarks+1;d++){var f=9999,v=9999;if(r.markRefs[d].current){var h=r.markRefs[d].current.getBoundingClientRect();f=h.height,v=h.width}r.props.direction===Fe.Direction.Left||r.props.direction===Fe.Direction.Right?c.push([Math.round(o/r.numOfMarks*d+l-v/2),-Math.round((f-a)/2)]):c.push([Math.round(a/r.numOfMarks*d+s-f/2),-Math.round((v-o)/2)])}r.setState({markOffsets:c})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,ae.schd)(r.onMouseMove),r.schdOnTouchMove=(0,ae.schd)(r.onTouchMove),r.schdOnEnd=(0,ae.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return Is.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,ae.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,ae.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,ae.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,ae.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,c=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,ae.translateThumbs)(this.getThumbs(),this.getOffsets(),c),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(d){(0,ae.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,c=s===void 0?function(){return null}:s,d=r.values,f=r.min,v=r.max,h=r.allowOverlap,g=r.disabled,x=this.state,w=x.draggedThumbIndex,m=x.thumbZIndexes,p=x.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,ae.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!g?"pointer":"inherit"},onMouseDown:g?ae.voidFn:this.onMouseDownTrack,onTouchStart:g?ae.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:g,children:e1(e1([],p.map(function(b,C,S){return c({props:{style:n.props.direction===Fe.Direction.Left||n.props.direction===Fe.Direction.Right?{position:"absolute",left:"".concat(b[0],"px"),marginTop:"".concat(b[1],"px")}:{position:"absolute",top:"".concat(b[0],"px"),marginLeft:"".concat(b[1],"px")},key:"mark".concat(C),ref:n.markRefs[C]},index:C})}),!0),d.map(function(b,C){var S=n.state.draggedThumbIndex===C;return l({index:C,value:b,isDragged:S,props:{style:{position:"absolute",zIndex:m[C],cursor:g?"inherit":S?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:C,tabIndex:g?void 0:0,"aria-valuemax":h?v:d[C+1]||v,"aria-valuemin":h?f:d[C-1]||f,"aria-valuenow":b,draggable:!1,ref:n.thumbRefs[C],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:g?ae.voidFn:n.onKeyDown,onKeyUp:g?ae.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Fe.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(Is.Component);Vm.default=DD;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Vm);e.Range=n.default;var r=Um;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=Co;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Gp);const LD=k.div`
  padding: 20px 0;
`,AD=k.div`
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
`;const RD=k.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,zD=k.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,Q2=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,c]=y.useState([o,a]);y.useEffect(()=>{e&&e.length===2&&(c(e),t&&t(e))},[e,t]);const d=h=>{c(h),t&&t(h)},f=(h,g)=>{const x=g===""?"":Number(g),w=[...s];w[h]=x,d(w)},v=h=>{const g=[...s];h===0?((g[0]===""||g[0]<o)&&(g[0]=o),g[0]>g[1]-50&&(g[0]=g[1]-50)):((g[1]===""||g[1]>a)&&(g[1]=a),g[1]<g[0]+50&&(g[1]=g[0]+50)),d(g)};return u.jsx(u.Fragment,{children:l&&u.jsxs(LD,{children:[u.jsxs(AD,{children:[u.jsx(t1,{type:"number",value:s[0],min:o,max:s[1],onChange:h=>f(0,h.target.value),onBlur:()=>v(0)}),u.jsx(t1,{type:"number",value:s[1],min:s[0],max:a,onChange:h=>f(1,h.target.value),onBlur:()=>v(1)})]}),u.jsx(Gp.Range,{values:s,step:50,min:o,max:a,onChange:d,renderTrack:({props:h,children:g})=>u.jsx(RD,{...h,background:Gp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:g}),renderThumb:({props:h})=>u.jsx(zD,{...h})})]})})},FD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=y.useState([]),[l,s]=y.useState({});y.useEffect(()=>{t&&(async()=>{try{const w=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],m={};w.forEach(b=>{var C;(C=b.attributes)==null||C.forEach(S=>{m[S.label]||(m[S.label]=new Set),m[S.label].add(S.value)})});const p=Object.entries(m).map(([b,C])=>({type:"checkbox",label:b,name:b.toLowerCase(),options:Array.from(C)}));a(p)}catch(g){console.error(g)}})()},[t]);const c=h=>{s(g=>({...g,[h]:!g[h]}))},d=(h,g)=>{r(x=>{const w=x[h]||[];return w.includes(g)?{...x,[h]:w.filter(m=>m!==g)}:{...x,[h]:[...w,g]}})},f=Object.values(n).some(h=>Array.isArray(h)&&h.length>0),v=()=>{f&&r({})};return u.jsxs(yD,{children:[u.jsxs(bD,{children:["Фільтри ",u.jsx(Iw,{size:20})]}),(o||[]).map(h=>{var x;const g=!!l[h.name];return u.jsxs(wD,{children:[u.jsxs(SD,{onClick:()=>c(h.name),children:[u.jsx(CD,{children:h.label}),u.jsx(kD,{isOpen:g})]}),u.jsxs(_D,{isOpen:g,children:[h.type==="checkbox"&&((x=h.options)==null?void 0:x.map(w=>{var m;return u.jsxs(ED,{children:[u.jsx(Hp,{checked:((m=n[h.name])==null?void 0:m.includes(w))||!1,onChange:()=>d(h.name,w)}),u.jsx(jD,{}),w]},w)})),h.type==="range"&&u.jsx(Q2,{onChange:i,childValues:e})]})]},h.name)}),u.jsx(K2,{onClick:v,disabled:!f,children:"Скинути обрані фільтри"})]})},ND=k.aside`
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
`;const BD=k.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,VD=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,UD=k.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,WD=k.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,HD=k.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,GD=k.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,qp=k.input.attrs({type:"checkbox"})`
  display: none;
`,qD=k.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${qp}:checked + & {
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

  ${qp}:checked + &::after {
    opacity: 1;
  }
`,YD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=y.useState({}),[l,s]=y.useState([]);y.useEffect(()=>{t&&(async()=>{try{const g=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],x={};g.forEach(m=>{var p;(p=m.attributes)==null||p.forEach(b=>{x[b.label]||(x[b.label]=new Set),x[b.label].add(b.value)})});const w=Object.entries(x).map(([m,p])=>({type:"checkbox",label:m,name:m.toLowerCase(),options:Array.from(p)}));s(w)}catch(v){console.error(v)}})()},[t]);const c=f=>{a(v=>({...v,[f]:!v[f]}))},d=(f,v)=>{r(h=>{const g=h[f]||[];return g.includes(v)?{...h,[f]:g.filter(x=>x!==v)}:{...h,[f]:[...g,v]}})};return u.jsx(ND,{children:(l||[]).map(f=>{var h;const v=!!o[f.name];return u.jsxs(BD,{children:[u.jsxs(VD,{onClick:()=>c(f.name),children:[u.jsx(UD,{children:f.label}),u.jsx(WD,{isOpen:v})]}),u.jsxs(HD,{isOpen:v,children:[f.type==="checkbox"&&((h=f.options)==null?void 0:h.map(g=>{var x;return u.jsxs(GD,{children:[u.jsx(qp,{checked:((x=n[f.name])==null?void 0:x.includes(g))||!1,onChange:()=>d(f.name,g)}),u.jsx(qD,{}),g]},g)})),f.type==="range"&&u.jsx(Q2,{onChange:i,childValues:e})]})]},f.name)})})},XD=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:c})=>{const[d,f]=y.useState([]),[v,h]=y.useState(!0),[g,x]=y.useState(1),w=24;let m=d;console.log(d);const p=y.useRef(null);y.useEffect(()=>{const T=A=>{p.current&&!p.current.contains(A.target)&&o(!1)};return document.addEventListener("mousedown",T),()=>{document.removeEventListener("mousedown",T)}},[o]),y.useEffect(()=>{(async()=>{try{h(!0);const L=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();f(L.data);const R=Date.now(),z=7*24*60*60*1e3,P=L.data.filter(F=>{if(F.stock>0||!F.sold_date)return!0;const B=new Date(F.sold_date).getTime();return R-B<z});f(P);const O=L.data.map(F=>F.price);if(O.length>0){let F=Math.min(...O),B=Math.max(...O);e([F,B])}}catch(A){console.error("Error fetching products:",A)}finally{h(!1)}})()},[t,e]),y.useEffect(()=>{x(1)},[t,n,r]),y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[g]);const b=Ke(),C=It(),S=Ue(T=>T.favorites.items),j=Ue(T=>T.cart.items),E=(T,A)=>{A.stopPropagation();const L=S.some(R=>R.id===(T==null?void 0:T.id));di(T,L,C,K)};if(Object.keys(n).forEach(T=>{const A=n[T];Array.isArray(A)&&A.length>0&&(m=m.filter(L=>{var z;const R=(z=L.attributes)==null?void 0:z.find(P=>P.label.toLowerCase()===T.toLowerCase());return R&&A.includes(R.value)}))}),r&&r.length===2){const[T,A]=r;console.log(T,A)}const _=y.useMemo(()=>{const T=[...m],A=L=>L.new_price&&L.new_price<L.price?L.new_price:L.price;switch(i){case"name":return T.sort((L,R)=>s==="asc"?L.name.localeCompare(R.name):R.name.localeCompare(L.name));case"price":return T.sort((L,R)=>{const z=A(L),P=A(R);return s==="asc"?z-P:P-z});case"date":return T.sort((L,R)=>s==="asc"?new Date(L.createdAt)-new Date(R.createdAt):new Date(R.createdAt)-new Date(L.createdAt));default:return T}},[i,m,s]),$=g*w,I=$-w,M=_.slice(I,$),D=Math.ceil(m.length/w);return v?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsxs(Y4,{children:[u.jsxs(X4,{children:[u.jsx(K4,{children:t}),u.jsxs(i$,{ref:p,children:[u.jsxs(o$,{onClick:()=>o(T=>!T),children:["Сортування",u.jsx(Hc,{strokeWidth:.9,size:22})]}),a&&u.jsxs(a$,{children:[u.jsx(yi,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),u.jsx(yi,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),u.jsx(yi,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),u.jsx(yi,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),u.jsx(yi,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),u.jsx(yi,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(Ln,{autoClose:1500}),m.length===0?u.jsx(Q4,{children:u.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):u.jsx(Z4,{children:M.map(T=>{var G,W;const A=S.some(q=>q.id===T.id),L=T!=null&&T.createdAt?Date.now()-new Date(T.createdAt).getTime()<7*24*60*60*1e3:!1,R=j.find(q=>q.id===T.id),z=(T==null?void 0:T.available)??!0,P=(T==null?void 0:T.stock)===0,O=T.new_price&&T.new_price<T.price,F=O?T.new_price:T.price,B=O?Math.round((T.price-T.new_price)/T.price*100):0,N=T?j.find(q=>q.id===T.id):null,V=(N==null?void 0:N.quantity)||0,H=async(q,oe)=>{if(oe.stopPropagation(),V>=q.stock){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(V+1>q.stock){K.warning(`Доступно лише ${q.stock} шт.`);return}await yo(q,1,C,K)};return u.jsxs(J4,{onClick:()=>b(`/product/${T.slug??T.id}`),$soldOut:P,style:{cursor:"pointer"},children:[u.jsxs(Vw,{children:[L&&u.jsx(ym,{children:"Новинка"}),!z&&u.jsx(xm,{children:"Бронь"}),P&&u.jsx(Kc,{children:"Продано"}),u.jsx(e$,{src:((W=(G=T.images)==null?void 0:G[0])==null?void 0:W.url)||"/placeholder.jpg",alt:T.name,onError:q=>{q.currentTarget.onerror=null,q.currentTarget.src=er}})]}),u.jsx(n$,{children:T.name}),u.jsxs(t$,{children:[u.jsx(Ww,{children:u.jsxs(Hw,{children:[u.jsxs(Gw,{$discount:O,children:[F.toLocaleString()," грн"]}),O&&u.jsxs(qw,{children:[T.price.toLocaleString()," грн"]}),O&&u.jsxs(Yw,{children:["-",B,"%"]})]})}),u.jsxs(Uw,{children:[z&&!P&&u.jsx(Ql,{onClick:q=>H(T,q),children:u.jsx(xo,{size:24,color:R?"var(--orange-color)":"black",strokeWidth:2})}),!P&&u.jsx(Ql,{onClick:q=>E(T,q),children:u.jsx(Ka,{size:24,fill:A?"#ff4d4f":"none",color:A?"#ff4d4f":"#000000",strokeWidth:A?1:2})})]})]})]},T.id)})}),m.length>w&&u.jsxs(r$,{children:[u.jsx(Id,{onClick:()=>x(T=>Math.max(T-1,1)),disabled:g===1,children:"Назад"}),Array.from({length:D},(T,A)=>u.jsx(Id,{onClick:()=>x(A+1),active:g===A+1,children:A+1},A)),u.jsx(Id,{onClick:()=>x(T=>Math.min(T+1,D)),disabled:g===D,children:"Вперед"})]})]})},KD=()=>{const[e,t]=y.useState({}),{category:n}=qx(),[r,i]=y.useState(!1),[o,a]=y.useState(!1),[l,s]=y.useState("date"),[c,d]=y.useState("desc"),[f,v]=y.useState([]),[h,g]=y.useState([0,0]),x=Object.values(e).some(m=>Array.isArray(m)&&m.length>0),w=()=>{x&&t({})};return u.jsxs(sD,{children:[u.jsxs(aD,{children:[u.jsxs(lD,{children:[u.jsxs(cD,{onClick:()=>i(!0),children:["Фільтр",u.jsx(uD,{children:u.jsx("use",{href:`${hn}#icon-filter`})})]}),u.jsxs(vD,{children:[u.jsxs(dD,{onClick:()=>a(m=>!m),children:["Сортування",u.jsx(Hc,{strokeWidth:.9,size:22})]}),o&&u.jsxs(xD,{children:[u.jsx(wi,{onClick:()=>{s("name"),d("asc"),a(!1)},children:"А-Я"}),u.jsx(wi,{onClick:()=>{s("name"),d("desc"),a(!1)},children:"Я-А"}),u.jsx(wi,{onClick:()=>{s("price"),d("asc"),a(!1)},children:"Ціна ↑"}),u.jsx(wi,{onClick:()=>{s("price"),d("desc"),a(!1)},children:"Ціна ↓"}),u.jsx(wi,{onClick:()=>{s("date"),d("desc"),a(!1)},children:"Спочатку новіші"}),u.jsx(wi,{onClick:()=>{s("date"),d("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(FD,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:f,priceRange:h,setPriceRange:g}),u.jsx(XD,{priceRange:h,values:f,setValues:v,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:c,setSortOrder:d}),r&&u.jsx(fD,{onClick:()=>i(!1),open:r,children:u.jsxs(pD,{onClick:m=>m.stopPropagation(),open:r,children:[u.jsxs(hD,{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(Iw,{size:20}),u.jsx("h2",{children:"Фільтри"})]}),u.jsx(Dw,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),u.jsx(YD,{childValues:f,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:h,setPriceRange:g}),u.jsxs(mD,{children:[u.jsx(K2,{onClick:w,disabled:!x,children:"Скинути обрані фільтри"}),u.jsx(gD,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},n1=k.div`
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
`,QD=k.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,ZD=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,JD=k.div``,eL=k.div`
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
`;const tL=k.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,nL=k.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,rL=k.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,iL=k.div``,oL=k.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,aL=k.p`
   font-size: 17px;
  margin-bottom: 10px;
  color: #151414;
    font-family: var(--second-font);

`,sL=k.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,lL=k.div`
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

`,cL=k.span`
  color: #27ae60;
  font-size: 17px;
`,uL=k.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,dL=k.div`
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
`,fL=k.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,pL=k.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,hL=k.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,mL=k.div`
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
`,gL=k.button`
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
`,vL=k.h3`
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
`;const xL=k.div`
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
`,yL=k.button`
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
`,bL=k.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,Z2=k.span`

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
`,wL=k.div`
  position: relative;
  display: inline-block;

  &:hover ${Z2} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,J2="carousel",eC="controller",SL="navigation",CL="no-scroll",Wm="portal",kL="root",tC="toolbar",u1="zoom",Zd="loading",Jd="error",ef="complete",_L="placeholder",EL=e=>`active-slide-${e}`,jL="fullsize",Hm="flex_center",PL="no_scroll",nC="no_scroll_padding",Gm="slide",rC="slide_wrapper",TL="slide_wrapper_interactive",Ur="prev",Wr="next",d1="swipe",co="close",iC="onPointerDown",oC="onPointerMove",aC="onPointerUp",sC="onPointerLeave",lC="onPointerCancel",qm="onKeyDown",OL="onKeyUp",Ym="onWheel",$L="Escape",IL="ArrowLeft",ML="ArrowRight",DL="button",Yp="icon",cC="contain",f1="cover",uC="Unknown action type",dC="yarl__";function $n(...e){return e.filter(Boolean).join(" ")}function se(e){return`${dC}${e}`}function kt(e){return`--${dC}${e}`}function is(e,t){return`${e}${t?`_${t}`:""}`}function Xm(e){return t=>is(e,t)}function uo(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function LL(e,t,n){return uo(e,"{index} of {total}").replace(/\{index}/g,`${eg(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function Km(...e){return()=>{e.forEach(t=>{t()})}}function or(e,t,n){return()=>{const r=y.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Qm(){return typeof window<"u"}function Zm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function ko(e){return e.type===void 0||e.type==="image"}function Jm(e,t){return e.imageFit===f1||e.imageFit!==cC&&t===f1}function $u(e){return typeof e=="string"?Number.parseInt(e,10):e}function fc(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=$u(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function AL(e,t){const n=fc(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function RL(){return(Qm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function eg(e,t){return t>0?(e%t+t)%t:0}function fC(e){return e.length>0}function pC(e,t){return e[eg(t,e.length)]}function Xp(e,t){return fC(e)?pC(e,t):void 0}function zL(e){return ko(e)?e.src:void 0}function FL(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=y.isValidElement(n)?y.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function NL(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const BL=Number(y.version.split(".")[0])>=19;function VL(e){return{inert:BL?e:e?"":void 0}}function UL(e){e.scrollTop}const Kp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[co]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:cC,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Lr(e,t){return{name:e,component:t}}function Ge(e,t){return{module:e,children:t}}function hC(e,t,n){return e.module.name===t?n(e):e.children?[Ge(e.module,e.children.flatMap(r=>{var i;return(i=hC(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function Si(e,t,n){return e.flatMap(r=>{var i;return(i=hC(r,t,n))!==null&&i!==void 0?i:[]})}function WL(e,t=[],n=[]){let r=e;const i=h=>{const g=[...r];for(;g.length>0;){const x=g.pop();if((x==null?void 0:x.module.name)===h)return!0;x!=null&&x.children&&g.push(...x.children)}return!1},o=(h,g)=>{if(h===""){r=[Ge(g,r)];return}r=Si(r,h,x=>[Ge(g,[x])])},a=(h,g)=>{r=Si(r,h,x=>[Ge(x.module,[Ge(g,x.children)])])},l=(h,g,x)=>{r=Si(r,h,w=>{var m;return[Ge(w.module,[...x?[Ge(g)]:[],...(m=w.children)!==null&&m!==void 0?m:[],...x?[]:[Ge(g)]])]})},s=(h,g,x)=>{r=Si(r,h,w=>[...x?[Ge(g)]:[],w,...x?[]:[Ge(g)]])},c=h=>{a(eC,h)},d=(h,g)=>{r=Si(r,h,x=>[Ge(g,x.children)])},f=h=>{r=Si(r,h,g=>g.children)},v=h=>{n.push(h)};return t.forEach(h=>{h({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:c,replace:d,remove:f,augment:v})}),{config:r,augmentation:h=>n.reduce((g,x)=>x(g),h)}}const mC=y.createContext(null),gC=or("useA11yContext","A11yContext",mC);function HL({children:e}){const[t,n]=y.useState(!1),[r,i]=y.useState(!1),o=y.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const c=d=>f=>{var v;f.currentTarget.contains(f.relatedTarget)||n(d),(v=d?l:s)===null||v===void 0||v(f)};return{onFocus:c(!0),onBlur:c(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return y.createElement(mC.Provider,{value:o},e)}const vC=y.createContext(null),Iu=or("useDocument","DocumentContext",vC);function GL({nodeRef:e,children:t}){const n=y.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return y.createElement(vC.Provider,{value:n},t)}const xC=y.createContext(null),Mu=or("useEvents","EventsContext",xC);function qL({children:e}){const[t]=y.useState({});y.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=y.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(c=>c!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(c=>c(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return y.createElement(xC.Provider,{value:n},e)}const yC=y.createContext(null),en=or("useLightboxProps","LightboxPropsContext",yC);function YL({children:e,...t}){return y.createElement(yC.Provider,{value:t},e)}const bC=y.createContext(null),Ar=or("useLightboxState","LightboxStateContext",bC),wC=y.createContext(null),XL=or("useLightboxDispatch","LightboxDispatchContext",wC);function KL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=eg(i,n.length),a=Xp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Xp(t.slides,t.index)}:e;default:throw new Error(uC)}}function QL({slides:e,index:t,children:n}){const[r,i]=y.useReducer(KL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Xp(e,t)}),[o,a]=y.useState(e),[l,s]=y.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const c=y.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return y.createElement(wC.Provider,{value:i},y.createElement(bC.Provider,{value:c},n))}const SC=y.createContext(null),Du=or("useTimeouts","TimeoutsContext",SC);function ZL({children:e}){const[t]=y.useState([]);y.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=y.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return y.createElement(SC.Provider,{value:n},e)}const tg=y.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:c,labels:d}=en(),f=uo(d,t);return y.createElement("button",{ref:s,type:"button",title:f,"aria-label":f,className:$n(se(DL),n),onClick:o,style:{...a,...c.button},...l},i?i():y.createElement(r,{className:se(Yp),style:c.icon}))});function JL(e,t){const n=r=>y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function pi(e,t){return JL(e,y.createElement("g",{fill:"currentColor"},y.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const eA=pi("Close",y.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),tA=pi("Previous",y.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),nA=pi("Next",y.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),rA=pi("Loading",y.createElement(y.Fragment,null,Array.from({length:8}).map((e,t,n)=>y.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),iA=pi("Error",y.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),In=Qm()?y.useLayoutEffect:y.useEffect;function ng(){const[e,t]=y.useState(!1);return y.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function oA(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map($u);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function p1(e,t){const n=y.useRef(void 0),r=y.useRef(void 0),i=ng();return In(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:c,easing:d,onfinish:f}=t(n.current,e.current.getBoundingClientRect(),oA(e.current))||{};if(s&&c){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:c,easing:d})}catch(v){console.error(v)}r.current&&(r.current.onfinish=()=>{r.current=void 0,f==null||f()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function CC(){const e=y.useRef(null),t=y.useRef(void 0),[n,r]=y.useState();return{setContainerRef:y.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=c=>parseFloat(c)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function pl(){const e=y.useRef(void 0),{setTimeout:t,clearTimeout:n}=Du();return y.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function me(e){const t=y.useRef(e);return In(()=>{t.current=e}),y.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function h1(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Qp(e,t){return y.useMemo(()=>e==null&&t==null?null:n=>{h1(e,n),h1(t,n)},[e,t])}function aA(e,t=!1){const n=y.useRef(!1);In(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=y.useCallback(()=>{n.current=!0},[]),i=y.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function rg(){const[e,t]=y.useState(!1);return In(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function sA(){const[e]=y.useState({}),t=y.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=y.useMemo(()=>({onPointerDown:i=>t(iC,i),onPointerMove:i=>t(oC,i),onPointerUp:i=>t(aC,i),onPointerLeave:i=>t(sC,i),onPointerCancel:i=>t(lC,i),onKeyDown:i=>t(qm,i),onKeyUp:i=>t(OL,i),onWheel:i=>t(Ym,i)}),[t]),r=y.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function m1(e,t){const n=y.useRef(0),r=pl(),i=me((...o)=>{n.current=Date.now(),e(o)});return y.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const tf=Xm("slide"),nf=Xm("slide_image");function pc({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:c}){var d,f,v,h,g,x,w,m;const[p,b]=y.useState(Zd),{publish:C}=Mu(),{setTimeout:S}=Du(),j=y.useRef(null);y.useEffect(()=>{t===0&&C(EL(p))},[t,p,C]);const E=me(N=>{("decode"in N?N.decode():Promise.resolve()).catch(()=>{}).then(()=>{N.parentNode&&(b(ef),S(()=>{l==null||l(N)},0))})}),_=y.useCallback(N=>{j.current=N,N!=null&&N.complete&&E(N)},[E]),$=y.useCallback(N=>{E(N.currentTarget)},[E]),I=me(()=>{b(Jd),s==null||s()}),M=Jm(e,i),D=(N,V)=>Number.isFinite(N)?N:V,T=D(Math.max(...((f=(d=e.srcSet)===null||d===void 0?void 0:d.map(N=>N.width))!==null&&f!==void 0?f:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((v=j.current)===null||v===void 0?void 0:v.naturalWidth)||0),A=D(Math.max(...((g=(h=e.srcSet)===null||h===void 0?void 0:h.map(N=>N.height))!==null&&g!==void 0?g:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((x=j.current)===null||x===void 0?void 0:x.naturalHeight)||0),L=T&&A?{maxWidth:`min(${T}px, 100%)`,maxHeight:`min(${A}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},R=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((N,V)=>N.width-V.width).map(N=>`${N.src} ${N.width}w`).join(", "),z=()=>r&&!M&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=R&&r&&Qm()?`${Math.round(Math.min(z(),r.width))}px`:void 0,{style:O,className:F,...B}=(typeof o=="function"?o(e):o)||{};return y.createElement(y.Fragment,null,y.createElement("img",{ref:_,onLoad:$,onError:I,onClick:a,draggable:!1,className:$n(se(nf()),M&&se(nf("cover")),p!==ef&&se(nf("loading")),F),style:{...L,...c,...O},...B,alt:(m=e.alt)!==null&&m!==void 0?m:"",sizes:P,srcSet:R,src:e.src}),p!==ef&&y.createElement("div",{className:se(tf(_L))},p===Zd&&(n!=null&&n.iconLoading?n.iconLoading():y.createElement(rA,{className:$n(se(Yp),se(tf(Zd)))})),p===Jd&&(n!=null&&n.iconError?n.iconError():y.createElement(iA,{className:$n(se(Yp),se(tf(Jd)))}))))}const lA=y.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=y.useRef(null),{trackFocusWithin:s}=gC();return y.createElement(GL,{nodeRef:l},y.createElement("div",{ref:Qp(a,l),className:$n(se("root"),t),...s(r,i),...o},n))});var lt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(lt||(lt={}));function kC(e,t,n,r,i){y.useEffect(()=>i?()=>{}:Km(e(iC,t),e(oC,n),e(aC,r),e(sC,r),e(lC,r)),[e,t,n,r,i])}var on;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(on||(on={}));const rf=30;function cA({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,c,d,f,v,h,g,x,w){const m=y.useRef(0),p=y.useRef([]),b=y.useRef(void 0),C=y.useRef(0),S=y.useRef(on.NONE),j=y.useCallback(T=>{b.current===T.pointerId&&(b.current=void 0,S.current=on.NONE);const A=p.current;A.splice(0,A.length,...A.filter(L=>L.pointerId!==T.pointerId))},[]),E=y.useCallback(T=>{j(T),T.persist(),p.current.push(T)},[j]),_=y.useCallback(T=>p.current.find(({pointerId:A})=>T.pointerId===A),[]),$=me(T=>{E(T)}),I=(T,A)=>f&&T>A||d&&T<-A,M=me(T=>{const A=_(T);if(A)if(b.current===T.pointerId){const L=Date.now()-C.current,R=m.current;S.current===on.SWIPE?Math.abs(R)>.3*i||Math.abs(R)>5&&L<o?s(R,L):c(R):S.current===on.PULL&&(I(R,2*rf)?g(R,L):x(R)),m.current=0,S.current=on.NONE}else{const{target:L}=T;t&&L instanceof HTMLElement&&L===A.target&&(L.classList.contains(se(Gm))||L.classList.contains(se(rC)))&&w()}j(T)}),D=me(T=>{const A=_(T);if(A){const L=b.current===T.pointerId;if(T.buttons===0){L&&m.current!==0?M(T):j(A);return}const R=T.clientX-A.clientX,z=T.clientY-A.clientY;if(b.current===void 0){const P=O=>{E(T),b.current=T.pointerId,C.current=Date.now(),S.current=O};Math.abs(R)>Math.abs(z)&&Math.abs(R)>rf&&r(R)?e||(P(on.SWIPE),a()):Math.abs(z)>Math.abs(R)&&I(z,rf)&&(P(on.PULL),v())}else L&&(S.current===on.SWIPE?(m.current=R,l(R)):S.current===on.PULL&&(m.current=z,h(z)))}});kC(n,$,D,M)}function uA({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=y.useRef(null),r=me(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return y.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function dA(e,t,n,r,i,o,a,l,s){const c=y.useRef(0),d=y.useRef(0),f=y.useRef(void 0),v=y.useRef(void 0),h=y.useRef(0),g=y.useRef(void 0),x=y.useRef(0),{setTimeout:w,clearTimeout:m}=Du(),p=y.useCallback(()=>{f.current&&(m(f.current),f.current=void 0)},[m]),b=y.useCallback(()=>{v.current&&(m(v.current),v.current=void 0)},[m]),C=me(()=>{e!==lt.SWIPE&&(c.current=0,x.current=0,p(),b())});y.useEffect(C,[e,C]);const S=me(E=>{v.current=void 0,c.current===E&&s(c.current)}),j=me(E=>{if(E.ctrlKey||Math.abs(E.deltaY)>Math.abs(E.deltaX))return;const _=$=>{h.current=$,m(g.current),g.current=$>0?w(()=>{h.current=0,g.current=void 0},300):void 0};if(e===lt.NONE){if(Math.abs(E.deltaX)<=1.2*Math.abs(h.current)){_(E.deltaX);return}if(!n(-E.deltaX))return;if(d.current+=E.deltaX,p(),Math.abs(d.current)>30)d.current=0,_(0),x.current=Date.now(),o();else{const $=d.current;f.current=w(()=>{f.current=void 0,$===d.current&&(d.current=0)},i)}}else if(e===lt.SWIPE){let $=c.current-E.deltaX;if($=Math.min(Math.abs($),r)*Math.sign($),c.current=$,a($),b(),Math.abs($)>.2*r){_(E.deltaX),l($,Date.now()-x.current);return}v.current=w(()=>S($),2*i)}else _(E.deltaX)});y.useEffect(()=>t(Ym,j),[t,j])}const g1=Xm("container"),_C=y.createContext(null),ar=or("useController","ControllerContext",_C);function fA({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:c,closeOnPullDown:d,preventDefaultWheelX:f,preventDefaultWheelY:v}=o,[h,g]=y.useState(),x=Ar(),w=XL(),[m,p]=y.useState(lt.NONE),b=y.useRef(0),C=y.useRef(0),S=y.useRef(1),{registerSensors:j,subscribeSensors:E}=sA(),{subscribe:_,publish:$}=Mu(),I=pl(),M=pl(),D=pl(),{containerRef:T,setContainerRef:A,containerRect:L}=CC(),R=Qp(uA({preventDefaultWheelX:f,preventDefaultWheelY:v}),A),z=y.useRef(null),P=Qp(z,void 0),{getOwnerDocument:O}=Iu(),F=rg(),B=X=>(F?-1:1)*(typeof X=="number"?X:1),N=me(()=>{var X;return(X=T.current)===null||X===void 0?void 0:X.focus()}),V=me(()=>t),H=me(()=>x),G=y.useCallback(X=>$(Ur,X),[$]),W=y.useCallback(X=>$(Wr,X),[$]),q=y.useCallback(()=>$(co),[$]),oe=X=>!(r.finite&&(B(X)>0&&x.currentIndex===0||B(X)<0&&x.currentIndex===x.slides.length-1)),he=X=>{var Se;b.current=X,(Se=T.current)===null||Se===void 0||Se.style.setProperty(kt("swipe_offset"),`${Math.round(X)}px`)},ie=X=>{var Se,ft;C.current=X,S.current=(()=>{const jo=(()=>d&&X>0?X:c&&X<0?-X:0)();return Math.min(Math.max(Zm(1-jo/60*(1-.5),2),.5),1)})(),(Se=T.current)===null||Se===void 0||Se.style.setProperty(kt("pull_offset"),`${Math.round(X)}px`),(ft=T.current)===null||ft===void 0||ft.style.setProperty(kt("pull_opacity"),`${S.current}`)},{prepareAnimation:De}=p1(z,(X,Se,ft)=>{if(z.current&&L)return{keyframes:[{transform:`translate(0, ${X.rect.y-Se.y+ft.y}px)`,opacity:X.opacity},{transform:"translate(0, 0)",opacity:1}],duration:X.duration,easing:i.easing.fade}}),We=(X,Se)=>{if(c||d){ie(X);let ft=0;z.current&&(ft=i.fade*(Se?2:1),De({rect:z.current.getBoundingClientRect(),opacity:S.current,duration:ft})),D(()=>{ie(0),p(lt.NONE)},ft),p(lt.ANIMATION),Se||q()}},{prepareAnimation:He,isAnimationPlaying:hi}=p1(z,(X,Se,ft)=>{var xn;if(z.current&&L&&(!((xn=x.animation)===null||xn===void 0)&&xn.duration)){const Gt=fc(r.spacing),jo=(Gt.percent?Gt.percent*L.width/100:Gt.pixel)||0;return{keyframes:[{transform:`translate(${B(x.globalIndex-X.index)*(L.width+jo)+X.rect.x-Se.x+ft.x}px, 0)`},{transform:"translate(0, 0)"}],duration:x.animation.duration,easing:x.animation.easing}}}),St=me(X=>{var Se,ft;const xn=X.offset||0,Gt=xn?i.swipe:(Se=i.navigation)!==null&&Se!==void 0?Se:i.swipe,jo=!xn&&!hi()?i.easing.navigation:i.easing.swipe;let{direction:as}=X;const ss=(ft=X.count)!==null&&ft!==void 0?ft:1;let Gu=lt.ANIMATION,yn=Gt*ss;if(!as){const Po=L==null?void 0:L.width,yg=X.duration||0,Yu=Po?Gt/Po*Math.abs(xn):Gt;ss!==0?(yg<Yu?yn=yn/Yu*Math.max(yg,Yu/5):Po&&(yn=Gt/Po*(Po-Math.abs(xn))),as=B(xn)>0?Ur:Wr):yn=Gt/2}let qu=0;as===Ur?oe(B(1))?qu=-ss:(Gu=lt.NONE,yn=Gt):as===Wr&&(oe(B(-1))?qu=ss:(Gu=lt.NONE,yn=Gt)),yn=Math.round(yn),M(()=>{he(0),p(lt.NONE)},yn),z.current&&He({rect:z.current.getBoundingClientRect(),index:x.globalIndex}),p(Gu),$(d1,{type:"swipe",increment:qu,duration:yn,easing:jo})});y.useEffect(()=>{var X,Se;!((X=x.animation)===null||X===void 0)&&X.increment&&(!((Se=x.animation)===null||Se===void 0)&&Se.duration)&&I(()=>w({type:"swipe",increment:0}),x.animation.duration)},[x.animation,w,I]);const _o=[E,oe,(L==null?void 0:L.width)||0,i.swipe,()=>p(lt.SWIPE),X=>he(X),(X,Se)=>St({offset:X,duration:Se,count:1}),X=>St({offset:X,count:0})],os=[()=>{d&&p(lt.PULL)},X=>ie(X),X=>We(X),X=>We(X,!0)];cA(o,..._o,c,d,...os,q),dA(m,..._o);const Eo=me(()=>{o.focus&&O().querySelector(`.${se(Wm)} .${se(g1())}`)&&N()});y.useEffect(Eo,[Eo]);const xg=me(()=>{var X;(X=a.view)===null||X===void 0||X.call(a,{index:x.currentIndex})});y.useEffect(xg,[x.globalIndex,xg]),y.useEffect(()=>Km(_(Ur,X=>St({direction:Ur,...X})),_(Wr,X=>St({direction:Wr,...X})),_(d1,X=>w(X))),[_,St,w]);const Mk=y.useMemo(()=>({prev:G,next:W,close:q,focus:N,slideRect:L?AL(L,r.padding):{width:0,height:0},containerRect:L||{width:0,height:0},subscribeSensors:E,containerRef:T,setCarouselRef:P,toolbarWidth:h,setToolbarWidth:g}),[G,W,q,N,E,L,T,P,h,g,r.padding]);return y.useImperativeHandle(o.ref,()=>({prev:G,next:W,close:q,focus:N,getLightboxProps:V,getLightboxState:H}),[G,W,q,N,V,H]),y.createElement("div",{ref:R,className:$n(se(g1()),se(Hm)),style:{...m===lt.SWIPE?{[kt("swipe_offset")]:`${Math.round(b.current)}px`}:null,...m===lt.PULL?{[kt("pull_offset")]:`${Math.round(C.current)}px`,[kt("pull_opacity")]:`${S.current}`}:null,...o.touchAction!=="none"?{[kt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...j},L&&y.createElement(_C.Provider,{value:Mk},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const pA=Lr(eC,fA);function Rr(e){return is(J2,e)}function v1(e){return is(Gm,e)}function hA({slide:e,offset:t}){const n=y.useRef(null),{currentIndex:r,slides:i}=Ar(),{slideRect:o,focus:a}=ar(),{render:l,carousel:{imageFit:s,imageProps:c},on:{click:d},styles:{slide:f},labels:v}=en(),{getOwnerDocument:h}=Iu(),g=t!==0;y.useEffect(()=>{var w;g&&(!((w=n.current)===null||w===void 0)&&w.contains(h().activeElement))&&a()},[g,a,h]);const x=()=>{var w,m,p,b;let C=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!C&&ko(e)&&(C=y.createElement(pc,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:c,onClick:g?void 0:()=>d==null?void 0:d({index:r})})),C?y.createElement(y.Fragment,null,(m=l.slideHeader)===null||m===void 0?void 0:m.call(l,{slide:e}),((p=l.slideContainer)!==null&&p!==void 0?p:({children:S})=>S)({slide:e,children:C}),(b=l.slideFooter)===null||b===void 0?void 0:b.call(l,{slide:e})):null};return y.createElement("div",{ref:n,className:$n(se(v1()),!g&&se(v1("current")),se(Hm)),...VL(g),style:f,role:"group","aria-roledescription":uo(v,"Slide"),"aria-label":LL(v,i,r+t)},x())}function mA(){const e=en().styles.slide;return y.createElement("div",{className:se(Gm),style:e})}function gA({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Ar(),{setCarouselRef:o}=ar(),{autoPlaying:a,focusWithin:l}=gC(),s=fc(e.spacing),c=fc(e.padding),d=NL(e,n,1),f=[];if(fC(n))for(let v=r-d;v<=r+d;v+=1){const h=pC(n,v),g=i-r+v,x=e.finite&&(v<0||v>n.length-1);f.push(x?{key:g}:{key:[`${g}`,zL(h)].filter(Boolean).join("|"),offset:v-r,slide:h})}return y.createElement("div",{ref:o,className:$n(se(Rr()),f.length>0&&se(Rr("with_slides"))),style:{[`${kt(Rr("slides_count"))}`]:f.length,[`${kt(Rr("spacing_px"))}`]:s.pixel||0,[`${kt(Rr("spacing_percent"))}`]:s.percent||0,[`${kt(Rr("padding_px"))}`]:c.pixel||0,[`${kt(Rr("padding_percent"))}`]:c.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":uo(t,"Carousel"),"aria-label":uo(t,"Photo gallery")},f.map(({key:v,slide:h,offset:g})=>h?y.createElement(hA,{key:v,slide:h,offset:g}):y.createElement(mA,{key:v})))}const vA=Lr(J2,gA);function EC(){const{carousel:e}=en(),{slides:t,currentIndex:n}=Ar(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function xA(e){var t;const n=rg(),{publish:r}=Mu(),{animation:i}=en(),{prevDisabled:o,nextDisabled:a}=EC(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=m1(()=>r(Ur),l),c=m1(()=>r(Wr),l),d=me(f=>{switch(f.key){case $L:r(co);break;case IL:(n?a:o)||(n?c:s)();break;case ML:(n?o:a)||(n?s:c)();break}});y.useEffect(()=>e(qm,d),[e,d])}function x1({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return y.createElement(tg,{label:e,icon:t,renderIcon:n,className:se(`navigation_${r}`),disabled:o,onClick:i,style:a,...aA(ar().focus,o)})}function yA({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=ar(),{prevDisabled:s,nextDisabled:c}=EC();return xA(l),y.createElement(y.Fragment,null,e?e():y.createElement(x1,{label:"Previous",action:Ur,icon:tA,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():y.createElement(x1,{label:"Next",action:Wr,icon:nA,renderIcon:r,style:i.navigationNext,disabled:c,onClick:a}))}const bA=Lr(SL,yA),y1=se(PL),wA=se(nC);function SA(e){return"style"in e}function b1(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${($u(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function CA({noScroll:{disabled:e},children:t}){const n=rg(),{getOwnerDocument:r,getOwnerWindow:i}=Iu();return y.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),c=Math.round(a.innerWidth-s.clientWidth);if(c>0){o.push(b1(l,c,n));const d=l.getElementsByTagName("*");for(let f=0;f<d.length;f+=1){const v=d[f];SA(v)&&a.getComputedStyle(v).getPropertyValue("position")==="fixed"&&!v.classList.contains(wA)&&o.push(b1(v,c,n))}}return l.classList.add(y1),()=>{l.classList.remove(y1),o.forEach(d=>d())}},[n,e,r,i]),y.createElement(y.Fragment,null,t)}const kA=Lr(CL,CA);function w1(e){return is(Wm,e)}function S1(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function _A({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,c]=y.useState(!1),[d,f]=y.useState(!1),v=y.useRef([]),h=y.useRef(null),{setTimeout:g}=Du(),{subscribe:x}=Mu(),m=ng()?0:t.fade;y.useEffect(()=>(c(!0),()=>{c(!1),f(!1)}),[]);const p=me(()=>{v.current.forEach(j=>j()),v.current=[]}),b=me(()=>{var j;f(!1),p(),(j=i.exiting)===null||j===void 0||j.call(i),g(()=>{var E;(E=i.exited)===null||E===void 0||E.call(i),a()},m)});y.useEffect(()=>x(co,b),[x,b]);const C=me(j=>{var E,_,$;UL(j),f(!0),(E=i.entering)===null||E===void 0||E.call(i);const I=($=(_=j.parentNode)===null||_===void 0?void 0:_.children)!==null&&$!==void 0?$:[];for(let M=0;M<I.length;M+=1){const D=I[M];["TEMPLATE","SCRIPT","STYLE"].indexOf(D.tagName)===-1&&D!==j&&(v.current.push(S1(D,"inert","")),v.current.push(S1(D,"aria-hidden","true")))}v.current.push(()=>{var M,D;(D=(M=h.current)===null||M===void 0?void 0:M.focus)===null||D===void 0||D.call(M)}),g(()=>{var M;(M=i.entered)===null||M===void 0||M.call(i)},m)}),S=y.useCallback(j=>{j?C(j):p()},[C,p]);return s?Fc.createPortal(y.createElement(lA,{ref:S,className:$n(r,se(w1()),se(nC),d&&se(w1("open"))),"aria-modal":!0,role:"dialog","aria-label":uo(l,"Lightbox"),style:{...t.fade!==Kp.animation.fade?{[kt("fade_animation_duration")]:`${m}ms`}:null,...t.easing.fade!==Kp.animation.easing.fade?{[kt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:j=>{h.current||(h.current=j.relatedTarget)}},e),o.root||document.body):null}const EA=Lr(Wm,_A);function jA({children:e}){return y.createElement(y.Fragment,null,e)}const PA=Lr(kL,jA);function TA(e){return is(tC,e)}function OA({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=ar(),{setContainerRef:a,containerRect:l}=CC();In(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():y.createElement(tg,{key:co,label:"Close",icon:eA,renderIcon:n,onClick:i});return y.createElement("div",{ref:a,style:r.toolbar,className:se(TA())},e==null?void 0:e.map(c=>c===co?s():c))}const $A=Lr(tC,OA);function jC(e,t){var n;return y.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>jC(r,t)))}function IA(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function MA({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:c,...d}){const{animation:f,carousel:v,render:h,toolbar:g,controller:x,noScroll:w,on:m,slides:p,index:b,plugins:C,...S}=Kp,{config:j,augmentation:E}=WL([Ge(EA,[Ge(kA,[Ge(pA,[Ge(vA),Ge($A),Ge(bA)])])])],l||C),_=E({animation:IA(f,t),carousel:{...v,...e},render:{...h,...n},toolbar:{...g,...r},controller:{...x,...i},noScroll:{...w,...o},on:{...m,...a},...S,...d});return _.open?y.createElement(YL,{..._},y.createElement(QL,{slides:s||p,index:$u(c||b)},y.createElement(ZL,null,y.createElement(qL,null,y.createElement(HL,null,jC(Ge(PA,j),_)))))):null}const DA={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function LA(e){return Math.min(Math.max(e,Number.EPSILON),1)}function PC(e){const{minZoom:t,...n}={...DA,...e};return{minZoom:LA(t),...n}}function AA(e,t,n,r){const i=y.useRef(void 0),o=y.useRef(void 0),{zoom:a}=en().animation,l=ng(),s=me(()=>{var c,d,f;if((c=i.current)===null||c===void 0||c.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(f=(d=r.current).animate)===null||f===void 0?void 0:f.call(d,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(v){console.error(v)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return In(s,[e,t,n,s]),y.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function RA(e,t){const{on:n}=en(),r=me(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});y.useEffect(r,[e,r])}function Lu(){const{zoom:e}=en();return PC(e)}function zA(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Ar(),{imageFit:l}=en().carousel,{maxZoomPixelRatio:s}=Lu();if(e&&a){const d={...a,...t};if(ko(d)){const f=Jm(d,l),v=Math.max(...(((n=d.srcSet)===null||n===void 0?void 0:n.map(g=>g.width))||[]).concat(d.width?[d.width]:[])),h=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(g=>g.height))||[]).concat(d.height?[d.height]:[]));v>0&&h>0&&e.width>0&&e.height>0&&(o=f?{width:Math.round(Math.min(v,e.width/e.height*h)),height:Math.round(Math.min(h,e.height/e.width*v))}:{width:v,height:h},o={width:o.width*s,height:o.height*s},i=f?{width:Math.min(e.width,o.width,v),height:Math.min(e.height,o.height,h)}:{width:Math.round(Math.min(e.width,e.height/h*v,v)),height:Math.round(Math.min(e.height,e.width/v*h,h))})}}const c=i.width?Math.max(Zm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:c}}function C1(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function k1(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function FA(e,t,n,r,i,o,a,l,s){const c=y.useRef([]),d=y.useRef(0),f=y.useRef(void 0),{globalIndex:v}=Ar(),{getOwnerWindow:h}=Iu(),{containerRef:g,subscribeSensors:x}=ar(),{keyboardMoveDistance:w,zoomInMultiplier:m,wheelZoomDistanceFactor:p,scrollToZoom:b,doubleTapDelay:C,doubleClickDelay:S,doubleClickMaxStops:j,pinchZoomDistanceFactor:E,pinchZoomV4:_}=Lu(),$=y.useCallback(P=>{if(g.current){const{pageX:O,pageY:F}=P,{scrollX:B,scrollY:N}=h(),{left:V,top:H,width:G,height:W}=g.current.getBoundingClientRect();return[O-V-B-G/2,F-H-N-W/2]}return[]},[g,h]),I=me(P=>{const{key:O,metaKey:F,ctrlKey:B}=P,N=F||B,V=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const H=(G,W)=>{V(),l(G,W)};O==="ArrowDown"?H(0,w):O==="ArrowUp"?H(0,-w):O==="ArrowLeft"?H(-w,0):O==="ArrowRight"&&H(w,0)}O==="+"||N&&O==="="?(V(),i()):O==="-"||N&&O==="_"?(V(),o()):N&&O==="0"&&(V(),a(1))}),M=me(P=>{if((P.ctrlKey||b)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(k1(e,-P.deltaY,p),!0,...$(P));return}e>1&&(P.stopPropagation(),b||l(P.deltaX,P.deltaY))}),D=y.useCallback(P=>{const O=c.current;O.splice(0,O.length,...O.filter(F=>F.pointerId!==P.pointerId))},[]),T=y.useCallback(P=>{D(P),P.persist(),c.current.push(P)},[D]),A=me(P=>{var O;const F=c.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!((O=s==null?void 0:s.current)===null||O===void 0)&&O.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(F.length===0&&B-d.current<(P.pointerType==="touch"?C:S)){d.current=0;const N=e>=1?e!==n?e*Math.max(n**(1/j),m):1:e!==t?e/Math.max(t**(-1/j),m):1;a(N,!1,...$(P))}else d.current=B;if(T(P),F.length===2){const N=C1(F[0],F[1]);f.current={previousDistance:N,initialDistance:Math.max(N,1),initialZoom:e}}}),L=me(P=>{const O=c.current,F=O.find(B=>B.pointerId===P.pointerId);if(O.length===2&&f.current){P.stopPropagation(),T(P);const B=C1(O[0],O[1]),N=_?f.current.initialZoom/f.current.initialDistance*B:k1(e,B-f.current.previousDistance,E);a(N,!0,...O.map(V=>$(V)).reduce((V,H)=>H.map((G,W)=>V[W]+G/2))),f.current.previousDistance=B;return}e>1&&(P.stopPropagation(),F&&(O.length===1&&l((F.clientX-P.clientX)/e,(F.clientY-P.clientY)/e),T(P)))}),R=y.useCallback(P=>{const O=c.current;O.length===2&&O.find(F=>F.pointerId===P.pointerId)&&(f.current=void 0),D(P)},[D]),z=y.useCallback(()=>{const P=c.current;P.splice(0,P.length),d.current=0,f.current=void 0},[]);kC(x,A,L,R,r),y.useEffect(z,[v,z]),y.useEffect(()=>r?()=>{}:Km(z,x(qm,I),x(Ym,M)),[r,x,z,I,M])}function NA(e,t,n){const[r,i]=y.useState(1),[o,a]=y.useState(0),[l,s]=y.useState(0),c=AA(r,o,l,n),{currentSlide:d,globalIndex:f}=Ar(),{containerRect:v,slideRect:h}=ar(),{minZoom:g,zoomInMultiplier:x}=Lu(),w=d&&ko(d)?d.src:void 0,m=!w||!(n!=null&&n.current);In(()=>{i(1),a(0),s(0)},[f,w]);const p=y.useCallback((E,_,$)=>{const I=$||r,M=o-(E||0),D=l-(_||0),T=(e.width*I-h.width)/2/I,A=(e.height*I-h.height)/2/I;a(Math.min(Math.abs(M),Math.max(T,0))*Math.sign(M)),s(Math.min(Math.abs(D),Math.max(A,0))*Math.sign(D))},[r,o,l,h,e.width,e.height]),b=y.useCallback((E,_,$,I)=>{const M=Zm(E+.01<t?E-.01>g?E:g:t,5);_||c(),p($?$*(1/r-1/M):0,I?I*(1/r-1/M):0,M),i(M)},[r,g,t,p,c]),C=me(()=>{r>1&&(r>t&&b(t,!0),p())});In(C,[v.width,v.height,C]);const S=y.useCallback(()=>{const E=r*x;b(r<1&&E>1?1:E)},[r,x,b]),j=y.useCallback(()=>{const E=r/x;b(r>1&&E<1?1:E)},[r,x,b]);return{zoom:r,offsetX:o,offsetY:l,disabled:m,changeOffsets:p,changeZoom:b,zoomIn:S,zoomOut:j}}const TC=y.createContext(null),ig=or("useZoom","ZoomControllerContext",TC);function BA({children:e}){const[t,n]=y.useState(),{slideRect:r}=ar(),{ref:i,minZoom:o}=Lu(),{imageRect:a,maxZoom:l}=zA(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:c,offsetY:d,disabled:f,changeZoom:v,changeOffsets:h,zoomIn:g,zoomOut:x}=NA(a,l,t==null?void 0:t.zoomWrapperRef);RA(s,f),FA(s,o,l,f,g,x,v,h,t==null?void 0:t.zoomWrapperRef);const w=y.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:c,offsetY:d,disabled:f,zoomIn:g,zoomOut:x,changeZoom:v}),[s,o,l,c,d,f,g,x,v]);y.useImperativeHandle(i,()=>w,[w]);const m=y.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return y.createElement(TC.Provider,{value:m},e)}const VA=pi("ZoomIn",y.createElement(y.Fragment,null,y.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),y.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),UA=pi("ZoomOut",y.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),_1=y.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=y.useRef(!1),o=y.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:c,zoomOut:d,disabled:f}=ig(),{render:v}=en(),h=f||(t?a>=s:a<=l);return y.useEffect(()=>{h&&i.current&&o.current&&n(),h||(i.current=!0)},[h,n]),y.createElement(tg,{ref:r,disabled:h,label:t?"Zoom in":"Zoom out",icon:t?VA:UA,renderIcon:t?v.iconZoomIn:v.iconZoomOut,onClick:t?c:d,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function WA(){const e=y.useRef(null),t=y.useRef(null),{focus:n}=ar(),r=y.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=y.useCallback(()=>r(e),[r]),o=y.useCallback(()=>r(t),[r]);return y.createElement(y.Fragment,null,y.createElement(_1,{zoomIn:!0,ref:e,onLoseFocus:o}),y.createElement(_1,{ref:t,onLoseFocus:i}))}function HA(){const{render:e}=en(),t=ig();return e.buttonZoom?y.createElement(y.Fragment,null,e.buttonZoom(t)):y.createElement(WA,null)}function GA(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function qA({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(uC)}}function YA(e){var t,n;const[{current:r,preload:i},o]=y.useReducer(qA,{}),{slide:a,rect:l,imageFit:s,render:c,interactive:d}=e,f=a.srcSet.sort((S,j)=>S.width-j.width),v=(t=a.width)!==null&&t!==void 0?t:f[f.length-1].width,h=(n=a.height)!==null&&n!==void 0?n:f[f.length-1].height,g=Jm(a,s),x=Math.max(...f.map(S=>S.width)),w=Math.min((g?Math.max:Math.min)(l.width,v*(l.height/h)),x),m=RL(),p=me(()=>{var S;const j=(S=f.find(E=>E.width>=w*m))!==null&&S!==void 0?S:f[f.length-1];(!r||f.findIndex(E=>E.src===r)<f.findIndex(E=>E===j))&&o({type:"fetch",source:j.src})});In(p,[l.width,l.height,m,p]);const b=me(S=>o({type:"done",source:S})),C={WebkitTransform:d?"initial":"translateZ(0)"};return g||Object.assign(C,l.width/l.height<v/h?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),y.createElement(y.Fragment,null,i&&i!==r&&y.createElement(pc,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...C},onLoad:()=>b(i),render:{...c,iconLoading:()=>null,iconError:()=>null}}),r&&y.createElement(pc,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:C}))}function XA({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=y.useState(),l=y.useRef(null),{zoom:s,maxZoom:c,offsetX:d,offsetY:f,setZoomWrapper:v}=ig(),h=s>1,{carousel:g,on:x}=en(),{currentIndex:w}=Ar();In(()=>n===0?(v({zoomWrapperRef:l,imageDimensions:o}),()=>v(void 0)):()=>{},[n,o,v]);let m=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:c});if(!m&&ko(t)){const p={slide:t,offset:n,rect:r,render:e,imageFit:g.imageFit,imageProps:g.imageProps,onClick:n===0?()=>{var b;return(b=x.click)===null||b===void 0?void 0:b.call(x,{index:w})}:void 0};m=GA(t)?y.createElement(YA,{...p,slide:t,interactive:h,rect:n===0?{width:r.width*s,height:r.height*s}:r}):y.createElement(pc,{onLoad:b=>a({width:b.naturalWidth,height:b.naturalHeight}),...p})}return m?y.createElement("div",{ref:l,className:$n(se(jL),se(Hm),se(rC),h&&se(TL)),style:n===0?{transform:`scale(${s}) translateX(${d}px) translateY(${f}px)`}:void 0},m):null}const KA=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=PC(n);return{zoom:l,toolbar:FL(r,u1,y.createElement(HA,null)),render:{...i,slide:s=>{var c;return ko(s.slide)?y.createElement(XA,{render:i,...s}):(c=i.slide)===null||c===void 0?void 0:c.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Lr(u1,BA))};var OC={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",c="day",d="week",f="month",v="quarter",h="year",g="date",x="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(A){var L=["th","st","nd","rd"],R=A%100;return"["+A+(L[(R-20)%10]||L[R]||L[0])+"]"}},b=function(A,L,R){var z=String(A);return!z||z.length>=L?A:""+Array(L+1-z.length).join(R)+A},C={s:b,z:function(A){var L=-A.utcOffset(),R=Math.abs(L),z=Math.floor(R/60),P=R%60;return(L<=0?"+":"-")+b(z,2,"0")+":"+b(P,2,"0")},m:function A(L,R){if(L.date()<R.date())return-A(R,L);var z=12*(R.year()-L.year())+(R.month()-L.month()),P=L.clone().add(z,f),O=R-P<0,F=L.clone().add(z+(O?-1:1),f);return+(-(z+(R-P)/(O?P-F:F-P))||0)},a:function(A){return A<0?Math.ceil(A)||0:Math.floor(A)},p:function(A){return{M:f,y:h,w:d,d:c,D:g,h:s,m:l,s:a,ms:o,Q:v}[A]||String(A||"").toLowerCase().replace(/s$/,"")},u:function(A){return A===void 0}},S="en",j={};j[S]=p;var E="$isDayjsObject",_=function(A){return A instanceof D||!(!A||!A[E])},$=function A(L,R,z){var P;if(!L)return S;if(typeof L=="string"){var O=L.toLowerCase();j[O]&&(P=O),R&&(j[O]=R,P=O);var F=L.split("-");if(!P&&F.length>1)return A(F[0])}else{var B=L.name;j[B]=L,P=B}return!z&&P&&(S=P),P||!z&&S},I=function(A,L){if(_(A))return A.clone();var R=typeof L=="object"?L:{};return R.date=A,R.args=arguments,new D(R)},M=C;M.l=$,M.i=_,M.w=function(A,L){return I(A,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var D=function(){function A(R){this.$L=$(R.locale,null,!0),this.parse(R),this.$x=this.$x||R.x||{},this[E]=!0}var L=A.prototype;return L.parse=function(R){this.$d=function(z){var P=z.date,O=z.utc;if(P===null)return new Date(NaN);if(M.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var F=P.match(w);if(F){var B=F[2]-1||0,N=(F[7]||"0").substring(0,3);return O?new Date(Date.UTC(F[1],B,F[3]||1,F[4]||0,F[5]||0,F[6]||0,N)):new Date(F[1],B,F[3]||1,F[4]||0,F[5]||0,F[6]||0,N)}}return new Date(P)}(R),this.init()},L.init=function(){var R=this.$d;this.$y=R.getFullYear(),this.$M=R.getMonth(),this.$D=R.getDate(),this.$W=R.getDay(),this.$H=R.getHours(),this.$m=R.getMinutes(),this.$s=R.getSeconds(),this.$ms=R.getMilliseconds()},L.$utils=function(){return M},L.isValid=function(){return this.$d.toString()!==x},L.isSame=function(R,z){var P=I(R);return this.startOf(z)<=P&&P<=this.endOf(z)},L.isAfter=function(R,z){return I(R)<this.startOf(z)},L.isBefore=function(R,z){return this.endOf(z)<I(R)},L.$g=function(R,z,P){return M.u(R)?this[z]:this.set(P,R)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(R,z){var P=this,O=!!M.u(z)||z,F=M.p(R),B=function(he,ie){var De=M.w(P.$u?Date.UTC(P.$y,ie,he):new Date(P.$y,ie,he),P);return O?De:De.endOf(c)},N=function(he,ie){return M.w(P.toDate()[he].apply(P.toDate("s"),(O?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},V=this.$W,H=this.$M,G=this.$D,W="set"+(this.$u?"UTC":"");switch(F){case h:return O?B(1,0):B(31,11);case f:return O?B(1,H):B(0,H+1);case d:var q=this.$locale().weekStart||0,oe=(V<q?V+7:V)-q;return B(O?G-oe:G+(6-oe),H);case c:case g:return N(W+"Hours",0);case s:return N(W+"Minutes",1);case l:return N(W+"Seconds",2);case a:return N(W+"Milliseconds",3);default:return this.clone()}},L.endOf=function(R){return this.startOf(R,!1)},L.$set=function(R,z){var P,O=M.p(R),F="set"+(this.$u?"UTC":""),B=(P={},P[c]=F+"Date",P[g]=F+"Date",P[f]=F+"Month",P[h]=F+"FullYear",P[s]=F+"Hours",P[l]=F+"Minutes",P[a]=F+"Seconds",P[o]=F+"Milliseconds",P)[O],N=O===c?this.$D+(z-this.$W):z;if(O===f||O===h){var V=this.clone().set(g,1);V.$d[B](N),V.init(),this.$d=V.set(g,Math.min(this.$D,V.daysInMonth())).$d}else B&&this.$d[B](N);return this.init(),this},L.set=function(R,z){return this.clone().$set(R,z)},L.get=function(R){return this[M.p(R)]()},L.add=function(R,z){var P,O=this;R=Number(R);var F=M.p(z),B=function(H){var G=I(O);return M.w(G.date(G.date()+Math.round(H*R)),O)};if(F===f)return this.set(f,this.$M+R);if(F===h)return this.set(h,this.$y+R);if(F===c)return B(1);if(F===d)return B(7);var N=(P={},P[l]=r,P[s]=i,P[a]=n,P)[F]||1,V=this.$d.getTime()+R*N;return M.w(V,this)},L.subtract=function(R,z){return this.add(-1*R,z)},L.format=function(R){var z=this,P=this.$locale();if(!this.isValid())return P.invalidDate||x;var O=R||"YYYY-MM-DDTHH:mm:ssZ",F=M.z(this),B=this.$H,N=this.$m,V=this.$M,H=P.weekdays,G=P.months,W=P.meridiem,q=function(ie,De,We,He){return ie&&(ie[De]||ie(z,O))||We[De].slice(0,He)},oe=function(ie){return M.s(B%12||12,ie,"0")},he=W||function(ie,De,We){var He=ie<12?"AM":"PM";return We?He.toLowerCase():He};return O.replace(m,function(ie,De){return De||function(We){switch(We){case"YY":return String(z.$y).slice(-2);case"YYYY":return M.s(z.$y,4,"0");case"M":return V+1;case"MM":return M.s(V+1,2,"0");case"MMM":return q(P.monthsShort,V,G,3);case"MMMM":return q(G,V);case"D":return z.$D;case"DD":return M.s(z.$D,2,"0");case"d":return String(z.$W);case"dd":return q(P.weekdaysMin,z.$W,H,2);case"ddd":return q(P.weekdaysShort,z.$W,H,3);case"dddd":return H[z.$W];case"H":return String(B);case"HH":return M.s(B,2,"0");case"h":return oe(1);case"hh":return oe(2);case"a":return he(B,N,!0);case"A":return he(B,N,!1);case"m":return String(N);case"mm":return M.s(N,2,"0");case"s":return String(z.$s);case"ss":return M.s(z.$s,2,"0");case"SSS":return M.s(z.$ms,3,"0");case"Z":return F}return null}(ie)||F.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(R,z,P){var O,F=this,B=M.p(z),N=I(R),V=(N.utcOffset()-this.utcOffset())*r,H=this-N,G=function(){return M.m(F,N)};switch(B){case h:O=G()/12;break;case f:O=G();break;case v:O=G()/3;break;case d:O=(H-V)/6048e5;break;case c:O=(H-V)/864e5;break;case s:O=H/i;break;case l:O=H/r;break;case a:O=H/n;break;default:O=H}return P?O:M.a(O)},L.daysInMonth=function(){return this.endOf(f).$D},L.$locale=function(){return j[this.$L]},L.locale=function(R,z){if(!R)return this.$L;var P=this.clone(),O=$(R,z,!0);return O&&(P.$L=O),P},L.clone=function(){return M.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},A}(),T=D.prototype;return I.prototype=T,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",c],["$M",f],["$y",h],["$D",g]].forEach(function(A){T[A[1]]=function(L){return this.$g(L,A[0],A[1])}}),I.extend=function(A,L){return A.$i||(A(L,D,I),A.$i=!0),I},I.locale=$,I.isDayjs=_,I.unix=function(A){return I(1e3*A)},I.en=j[S],I.Ls=j,I.p={},I})})(OC);var QA=OC.exports;const E1=Va(QA),ZA=k.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;k.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const JA=k.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,e8=k.input`
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
`,t8=k.textarea`
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
`,n8=k.button`
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
`,r8=k.div`
  margin-top: 30px;
`,i8=k.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,o8=k.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,a8=k.span`
  font-weight: bold;
  color: #333;
`,s8=k.span`
  font-size: 12px;
  color: #999;
`,l8=k.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,c8=k.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,u8=k.div`
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
`,j1=({productId:e,questions:t})=>{const[n,r]=y.useState(""),[i,o]=y.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(K.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return u.jsxs(ZA,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(JA,{onSubmit:a,children:[u.jsx(e8,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),u.jsx(t8,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),u.jsx(n8,{children:"Надіслати запитання"})]}),u.jsx(r8,{children:t&&t.length>0?t.map(l=>l.answer?u.jsxs(i8,{children:[u.jsxs(o8,{children:[u.jsx(a8,{children:l.userName||"Гість"}),u.jsx(s8,{children:new Date(l.createdAt).toLocaleDateString()})]}),u.jsx(l8,{children:l.question}),u.jsxs(c8,{children:[u.jsx(u8,{children:"Адміністратор"}),u.jsx("p",{children:l.answer})]})]},l.id):null):u.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},d8=()=>{var P;const{identifier:e}=qx(),[t,n]=y.useState([]),[r,i]=y.useState(1),[o,a]=y.useState("description"),[l,s]=y.useState(null),[c,d]=y.useState(!1),[f,v]=y.useState(0),[h,g]=y.useState(!0),x=!isNaN(e),w=t.find(O=>x?String(O.id)===String(e):O.slug===e),m=w?E1().diff(E1(w.createdAt),"day")<7:!1,b=(O=>{const[F,B]=y.useState(!1);return y.useEffect(()=>{const N=window.matchMedia(O),V=()=>B(N.matches);return V(),N.addEventListener("change",V),()=>N.removeEventListener("change",V)},[O]),F})("(min-width: 768px)"),C=Ue(O=>O.cart.items),S=w?C.find(O=>O.id===w.id):null,j=(S==null?void 0:S.quantity)||0;y.useEffect(()=>{(async()=>{try{g(!0);const F=x?`filters[id][$eq]=${e}`:`filters[slug][$eq]=${e}`,N=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${F}&populate=*`)).json();n(N.data)}catch(F){console.error("Error fetching products:",F)}finally{g(!1)}})()},[e,x]);const E=(w==null?void 0:w.available)??!0,_=(w==null?void 0:w.stock)===0;y.useEffect(()=>{var O,F;w&&w.images&&s((F=(O=w.images)==null?void 0:O[0])==null?void 0:F.url)},[w]);const $=((w==null?void 0:w.images)??[]).map(O=>({src:O.url})),I=()=>{const O=w.images.findIndex(F=>F.url===l);v(O>=0?O:0),d(!0)},M=It(),T=Ue(O=>O.favorites.items).some(O=>O.id===(w==null?void 0:w.id)),A=async()=>{if(!_){if(j>=w.stock){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(j+r>w.stock){K.warning(`Доступно лише ${w.stock} шт.`);return}await yo(w,r,M,K)}},L=(O,F)=>{F.stopPropagation(),di(O,T,M,K)},R=(w==null?void 0:w.new_price)&&(w==null?void 0:w.new_price)<w.price,z=R?Math.round((w.price-w.new_price)/w.price*100):0;return h?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):w?u.jsxs(n1,{children:[" ",u.jsx(Ln,{autoClose:1500}),u.jsxs(QD,{children:[u.jsx(je,{to:"/",children:"Головна"})," / ",u.jsx(je,{to:"/catalog",children:"Каталог"})," /"," ",w.name]}),u.jsxs(ZD,{children:[u.jsxs(JD,{children:[u.jsxs("div",{style:{position:"relative"},children:[u.jsx(tL,{src:l||er,alt:w.name,onClick:_?void 0:I,style:{filter:_?"grayscale(100%)":"none",opacity:_?.55:1,cursor:_?"default":"pointer"}}),_&&u.jsx(eL,{children:"ПРОДАНО"})]}),u.jsx(nL,{children:(w.images??[]).map(O=>{const F=O.url;return u.jsx(rL,{src:F,onClick:()=>!_&&s(F),style:{cursor:_?"default":"pointer",opacity:l===F?1:.4,filter:_?"grayscale(100%)":"none"}},O.id)})})]}),u.jsx(MA,{open:c,close:()=>d(!1),index:f,slides:$,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var F,B;v(O),(B=(F=w==null?void 0:w.images)==null?void 0:F[O])!=null&&B.url&&s(w.images[O].url)}},plugins:[KA],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),u.jsxs(iL,{children:[u.jsx(oL,{children:w.name}),u.jsxs(aL,{children:["Артикул: ",w.sku??""]}),u.jsx(sL,{children:m&&u.jsx(cL,{children:"● Новий товар"})}),!E&&u.jsx(lL,{children:"Бронь"}),u.jsxs(uL,{children:[u.jsx(dL,{children:R?u.jsxs(u.Fragment,{children:[u.jsxs(r1,{$discount:!0,children:[w.new_price.toLocaleString()," грн"]}),u.jsxs(fL,{children:[w.price.toLocaleString()," грн"]}),u.jsxs(pL,{children:["-",z,"%"]})]}):u.jsxs(r1,{children:[w.price.toLocaleString()," грн"]})}),u.jsxs(hL,{children:[u.jsxs(mL,{children:[u.jsx("button",{onClick:()=>i(Math.max(1,r-1)),disabled:_,children:"-"}),u.jsx("span",{children:r}),u.jsxs(wL,{$active:r>=w.stock,children:[u.jsx("button",{onClick:()=>i(Math.min(w.stock,r+1)),disabled:_||r>=w.stock,children:"+"}),u.jsxs(Z2,{children:["Максимум: ",w.stock]})]})]}),u.jsxs(gL,{onClick:A,disabled:!E||_,children:[" ",u.jsx(xo,{size:25}),u.jsx("span",{children:"В КОШИК"})]}),u.jsxs(yL,{$active:T,onClick:O=>{_||L(w,O)},disabled:_,children:[u.jsxs(bL,{$active:T,children:[" ",u.jsx("use",{href:`${hn}#icon-heart`})]}),u.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!b&&u.jsxs(a1,{children:[u.jsxs(s1,{children:[u.jsx(Vo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(Vo,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),u.jsx(Vo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs(l1,{children:[o==="description"&&u.jsx(c1,{children:w.description}),o==="attributes"&&u.jsx(i1,{children:(P=w.attributes)!=null&&P.length?w.attributes.map(O=>u.jsxs(o1,{children:[u.jsx("span",{children:O.label}),u.jsx("b",{children:O.value})]},O.id)):u.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&u.jsx(j1,{productId:w.documentId,questions:w.questions})]})]}),b&&u.jsxs(xL,{children:[u.jsxs(a1,{children:[u.jsxs(s1,{children:[u.jsx(Vo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(Vo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs(l1,{children:[o==="description"&&u.jsx(c1,{children:w.description}),o==="FAQ"&&u.jsx(j1,{productId:w.documentId,questions:w.questions})]})]}),u.jsxs(i1,{children:[u.jsx(vL,{children:" Характеристики"}),(()=>{const O=[...w.attributes||[],...w.features||[]];return O.length?O.map((F,B)=>u.jsxs(o1,{children:[u.jsx("span",{children:F.label}),u.jsx("b",{children:F.value})]},`${F.id}-${B}`)):u.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):u.jsx(n1,{children:"Товар не знайдено"})};var og="persist:",$C="persist/FLUSH",ag="persist/REHYDRATE",IC="persist/PAUSE",MC="persist/PERSIST",DC="persist/PURGE",LC="persist/REGISTER",f8=-1;function hl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hl=function(n){return typeof n}:hl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hl(e)}function P1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function p8(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P1(n,!0).forEach(function(r){h8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function h8(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m8(e,t,n,r){r.debug;var i=p8({},n);return e&&hl(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function g8(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:og).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(S){return S}:typeof e.serialize=="function"?l=e.serialize:l=v8;var s=e.writeFailHandler||null,c={},d={},f=[],v=null,h=null,g=function(S){Object.keys(S).forEach(function(j){m(j)&&c[j]!==S[j]&&f.indexOf(j)===-1&&f.push(j)}),Object.keys(c).forEach(function(j){S[j]===void 0&&m(j)&&f.indexOf(j)===-1&&c[j]!==void 0&&f.push(j)}),v===null&&(v=setInterval(x,i)),c=S};function x(){if(f.length===0){v&&clearInterval(v),v=null;return}var C=f.shift(),S=r.reduce(function(j,E){return E.in(j,C,c)},c[C]);if(S!==void 0)try{d[C]=l(S)}catch(j){console.error("redux-persist/createPersistoid: error serializing state",j)}else delete d[C];f.length===0&&w()}function w(){Object.keys(d).forEach(function(C){c[C]===void 0&&delete d[C]}),h=a.setItem(o,l(d)).catch(p)}function m(C){return!(n&&n.indexOf(C)===-1&&C!=="_persist"||t&&t.indexOf(C)!==-1)}function p(C){s&&s(C)}var b=function(){for(;f.length!==0;)x();return h||Promise.resolve()};return{update:g,flush:b}}function v8(e){return JSON.stringify(e)}function x8(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:og).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=y8,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(c,d){return d.out(c,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function y8(e){return JSON.parse(e)}function b8(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:og).concat(e.key);return t.removeItem(n,w8)}function w8(e){}function T1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function An(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T1(n,!0).forEach(function(r){S8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function S8(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C8(e,t){if(e==null)return{};var n=k8(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function k8(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var _8=5e3;function AC(e,t){var n=e.version!==void 0?e.version:f8;e.debug;var r=e.stateReconciler===void 0?m8:e.stateReconciler,i=e.getStoredState||x8,o=e.timeout!==void 0?e.timeout:_8,a=null,l=!1,s=!0,c=function(f){return f._persist.rehydrated&&a&&!s&&a.update(f),f};return function(d,f){var v=d||{},h=v._persist,g=C8(v,["_persist"]),x=g;if(f.type===MC){var w=!1,m=function(_,$){w||(f.rehydrate(e.key,_,$),w=!0)};if(o&&setTimeout(function(){!w&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=g8(e)),h)return An({},t(x,f),{_persist:h});if(typeof f.rehydrate!="function"||typeof f.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return f.register(e.key),i(e).then(function(E){var _=e.migrate||function($,I){return Promise.resolve($)};_(E,n).then(function($){m($)},function($){m(void 0,$)})},function(E){m(void 0,E)}),An({},t(x,f),{_persist:{version:n,rehydrated:!1}})}else{if(f.type===DC)return l=!0,f.result(b8(e)),An({},t(x,f),{_persist:h});if(f.type===$C)return f.result(a&&a.flush()),An({},t(x,f),{_persist:h});if(f.type===IC)s=!0;else if(f.type===ag){if(l)return An({},x,{_persist:An({},h,{rehydrated:!0})});if(f.key===e.key){var p=t(x,f),b=f.payload,C=r!==!1&&b!==void 0?r(b,d,p,e):p,S=An({},C,{_persist:An({},h,{rehydrated:!0})});return c(S)}}}if(!h)return t(d,f);var j=t(x,f);return j===x?d:c(An({},j,{_persist:h}))}}function O1(e){return P8(e)||j8(e)||E8()}function E8(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function j8(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function P8(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function $1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Zp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$1(n,!0).forEach(function(r){T8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function T8(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var RC={registry:[],bootstrapped:!1},O8=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:RC,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case LC:return Zp({},t,{registry:[].concat(O1(t.registry),[n.key])});case ag:var r=t.registry.indexOf(n.key),i=O1(t.registry);return i.splice(r,1),Zp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function $8(e,t,n){var r=n||!1,i=wm(O8,RC,t&&t.enhancer?t.enhancer:void 0),o=function(c){i.dispatch({type:LC,key:c})},a=function(c,d,f){var v={type:ag,payload:d,err:f,key:c};e.dispatch(v),i.dispatch(v),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Zp({},i,{purge:function(){var c=[];return e.dispatch({type:DC,result:function(f){c.push(f)}}),Promise.all(c)},flush:function(){var c=[];return e.dispatch({type:$C,result:function(f){c.push(f)}}),Promise.all(c)},pause:function(){e.dispatch({type:IC})},persist:function(){e.dispatch({type:MC,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var sg={},lg={};lg.__esModule=!0;lg.default=D8;function ml(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ml=function(n){return typeof n}:ml=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ml(e)}function of(){}var I8={getItem:of,setItem:of,removeItem:of};function M8(e){if((typeof self>"u"?"undefined":ml(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function D8(e){var t="".concat(e,"Storage");return M8(t)?self[t]:I8}sg.__esModule=!0;sg.default=R8;var L8=A8(lg);function A8(e){return e&&e.__esModule?e:{default:e}}function R8(e){var t=(0,L8.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var cg=void 0,z8=F8(sg);function F8(e){return e&&e.__esModule?e:{default:e}}var N8=(0,z8.default)("local");cg=N8;const B8={key:"cart",storage:cg},V8={key:"favorites",storage:cg},U8=AC(B8,J$),W8=AC(V8,X$),zC=A$({reducer:{cart:U8,favorites:W8},middleware:e=>e({serializableCheck:!1})}),Au=$8(zC),H8=k.div`
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

  
`,G8=k.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,q8=k.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,Y8=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width:  895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,X8=k.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,K8=k.div`
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
  
`,FC=k.div`
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
 `,Q8=k.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,Z8=k.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,J8=k.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,eR=k.div`

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
`;const Ru=k.div`
  text-align: center;
  width: 100px;
 
`,zu=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Fu=k.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Nu=k.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Bu=k.span`
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
`,tR=k.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,nR=k.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';


&:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
`,rR=k.div`

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
`,iR=k.div`
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
`,oR=k(je)`
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
`,aR=k.button`
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
`;const sR=k.div`
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
`,lR=k.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,cR=k.div`
  background-color: #fdfaf7;
`,uR=k.div`
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
`;const dR=k.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,fR=k.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,pR=k.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,hR=k.button`
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
`,mR=()=>u.jsx(cR,{children:u.jsxs(sR,{children:[u.jsx(lR,{children:"Головна / Кошик"}),u.jsxs(uR,{children:[u.jsx(dR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),u.jsx(fR,{children:"Ваш кошик порожній"}),u.jsx(pR,{children:"Ви ще не додали жодного товару в кошик"}),u.jsx(hR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),gR=k.div`
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
`,vR=({item:e,cartItem:t,user:n,token:r,disabled:i,isSoldOut:o})=>{const a=It(),l=async()=>{if(i)return;const c=e.quantity+1;if(!n){a(gv({id:e.id,stock:e.stock}));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(gv({id:e.id,stock:e.stock}))}catch(d){console.error("Помилка оновлення кількості:",d)}},s=async()=>{if(i)return;const c=e.quantity-1;if(!n){a(vv(e.id));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(vv(e.id))}catch(d){console.error("Помилка оновлення кількості:",d)}};return u.jsxs(gR,{children:[u.jsx("button",{onClick:s,disabled:o||e.quantity<=1,children:"-"}),u.jsx("span",{children:e.quantity}),u.jsx("button",{onClick:l,disabled:o||e.quantity>=e.stock,children:"+"})]})},xR=async(e,t,n)=>{try{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!r.ok)throw new Error("Не вдалося отримати товари кошика");const i=await r.json();await Promise.all(i.data.map(async o=>{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}})).ok)throw new Error("Не вдалося видалити товар з кошика")})),t(nr())}catch(r){throw console.error("clearCartFromBackend error:",r),r}},yR=k.div`
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
`,bR=k.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,wR=k.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,SR=k.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,CR=k.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,kR=k.div`
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
`,NC=k.div`
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
`;const _R=k.div`
  position: relative;
`,ER=k.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,jR=k.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,PR=k.div`
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
`;const TR=k.div`
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
`,OR=k.div`
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
`,$R=k.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,IR=k.button`
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
`;const MR=async(e,t,n,r)=>{try{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${t}&filters[product][id][$eq]=${e.id}`,{headers:{Authorization:`Bearer ${r}`}});if(!i.ok)throw new Error("Не вдалося знайти товар у кошику");const a=(await i.json()).data[0];if(!a)throw new Error("Товар у кошику не знайдено");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${a.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити товар");n(fS(e))}catch(i){throw console.error("deleteCartItemFromBackend error:",i),i}},DR=()=>{const e=It(),t=Ke(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),[i,o]=y.useState([]),a=Ue(S=>S.cart.items),[l,s]=y.useState([]),[c,d]=y.useState([]);console.log("cartItems",c);const[f,v]=y.useState(!0);console.log("localCartItems",l);const h=a.filter(S=>S.available!==!1&&S.stock>0).reduce((S,j)=>S+j.quantity,0),g=a.filter(S=>S.available!==!1&&S.stock>0).reduce((S,j)=>S+(j.new_price??j.price)*(j.quantity||1),0),x=Ue(S=>S.favorites.items),w=l.length===0,m=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e(es()),e(nr()),s([]),d([]),await Au.purge(),t("/",{replace:!0})};y.useEffect(()=>{(async()=>{if(!n||!r){s(a),v(!1);return}try{const j=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(j.status===401){m();return}if(!j.ok)throw new Error("Не вдалося отримати кошик");const E=await j.json();d(E.data);const _=E.data.map($=>$.product?{...$.product,quantity:$.quantity}:null).filter(Boolean);s(_),e(dS(_))}catch(j){console.error(j),K.error("Не вдалося завантажити кошик")}finally{v(!1)}})()},[]),y.useEffect(()=>{s(a)},[a]);const p=(S,j)=>{j.stopPropagation();const E=x.some(_=>_.id===(S==null?void 0:S.id));di(S,E,e,K)},b=async S=>{o(j=>[...j,S.id]);try{if(!r){setTimeout(()=>{e(fS(S)),o(j=>j.filter(E=>E!==S.id))},300);return}await MR(S,r.id,e,n),setTimeout(()=>{o(j=>j.filter(E=>E!==S.id))},300)}catch{o(E=>E.filter(_=>_!==S.id)),K.error("Не вдалося видалити товар з кошика")}},C=async()=>{if(!r){e(nr()),s([]);return}try{await xR(r.id,e,n),s([])}catch{K.error("Не вдалося очистити кошик")}};return f?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:w?u.jsx(mR,{}):u.jsxs(H8,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(G8,{children:[" ",u.jsx(je,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",u.jsx(je,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),u.jsx(q8,{children:"Кошик"}),u.jsxs(Y8,{children:[u.jsx(X8,{children:l.map((S,j)=>{var A,L;const E=c.find(R=>{var z;return((z=R.product)==null?void 0:z.documentId)===S.documentId}),_=x.some(R=>R.id===S.id),$=S.new_price&&S.new_price<S.price,I=(S==null?void 0:S.available)??!0,M=(S==null?void 0:S.stock)===0,D=$?S.new_price:S.price,T=$?Math.round((S.price-S.new_price)/S.price*100):0;return u.jsxs(K8,{className:`
    ${i.includes(S.id)?"removing":""}
    ${I?"":"unavailable"}
    ${M?"sold-out":""}
  `,children:[u.jsxs(Vw,{onClick:()=>t(`/product/${S.slug??S.id}`),children:[!I&&u.jsx(NC,{children:"Бронь"})," ",M&&u.jsx(FC,{children:"Продано"}),u.jsx(Q8,{src:((L=(A=S.images)==null?void 0:A[0])==null?void 0:L.url)||"/nofoto.png",alt:S.name,style:{filter:M?"grayscale(100%)":"none",opacity:M?.55:1},onError:R=>{R.currentTarget.onerror=null,R.currentTarget.src=er}})]}),u.jsx(Z8,{onClick:()=>t(`/product/${S.slug??S.id}`),children:u.jsx("h3",{children:S.name})}),u.jsxs(J8,{children:[u.jsx(vR,{item:S,cartItem:E,user:r,token:n,disabled:M,isSoldOut:M}),u.jsx(Ru,{children:u.jsxs(zu,{children:[u.jsxs(Fu,{$discount:$,children:[(D*(S.quantity||1)).toLocaleString()," ","грн"]}),$&&u.jsxs(u.Fragment,{children:[u.jsxs(Nu,{children:[(S.price*(S.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(Bu,{children:["-",T,"%"]})]})]})})]}),u.jsxs(eR,{children:[u.jsx(nR,{onClick:R=>{M||p(S,R)},disabled:M,style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:u.jsx(Ka,{size:22,fill:_?"#ff4d4f":"none",color:_?"#ff4d4f":"#999"})}),u.jsx(tR,{onClick:()=>b(S),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:u.jsx(Mw,{size:22})})]})]},`${S.id}-${j}`)})}),u.jsxs(rR,{children:[u.jsxs(iR,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[h," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[g," грн"]})]}),u.jsx(oR,{to:"/checkout",onClick:S=>{h===0&&(S.preventDefault(),K.warning("У кошику немає доступних товарів"))},children:"Оформити замовлення"}),u.jsx(aR,{onClick:C,children:"Oчистити кошик"})]})]})]})})},LR=k.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,AR=k.div`
   
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
`;const RR=k.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;k.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const zR=k.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,FR=k.button`
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
`,NR=()=>u.jsxs(u.Fragment,{children:[u.jsx(LR,{children:"Головна / Обране"}),u.jsxs(AR,{children:[u.jsx(RR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),u.jsx(zR,{children:"Ви ще не додали жодного товару в обране"}),u.jsx(FR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),BR=()=>{const e=It(),t=Ke(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),i=Ue(p=>p.favorites.items),[o,a]=y.useState([]),[l,s]=y.useState(!0),[c,d]=y.useState([]),f=Ue(p=>p.cart.items),v=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e(es()),e(nr()),a([]),await Au.purge(),t("/",{replace:!0})};y.useEffect(()=>{(async()=>{if(!n||!r){a(i),s(!1);return}try{const b=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(b.status===401){v();return}if(!b.ok)throw new Error("Не вдалося отримати обране");const S=(await b.json()).data.map(j=>j.product).filter(Boolean);a(S)}catch(b){console.error(b),K.error("Не вдалося завантажити обране"),a(i)}finally{s(!1)}})()},[]);const h=()=>{const p=o.filter(b=>b.available!==!1&&b.stock!==0).map(b=>{const C=f.find(_=>_.id===b.id),S=(C==null?void 0:C.quantity)??0,E=Number(b.stock??0)-S;return E<=0?null:{...b,quantity:E}}).filter(Boolean);if(p.length===0){K.error("Усі товари вже в максимальній кількості");return}e(Z$(p)),K.success("Додано максимально доступну кількість товарів")};console.log("favorites",o);const g=o.filter(p=>p.available!==!1&&p.stock!==0).length,x=o.filter(p=>p.available!==!1&&p.stock>0).reduce((p,b)=>p+(b.new_price??b.price)*(b.quantity||1),0);console.log("favorites",o),console.log(g);const w=async(p,b)=>{b.stopPropagation();const C=o.some(j=>j.documentId===p.documentId);d(j=>[...j,p.id]),await di(p,C,e,K)&&C?setTimeout(()=>{a(j=>j.filter(E=>E.documentId!==p.documentId)),d(j=>j.filter(E=>E!==p.id))},300):d(j=>j.filter(E=>E!==p.id))},m=o.length===0;return l?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:m?u.jsx(NR,{}):u.jsxs(yR,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(bR,{children:[" ",u.jsx(je,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",u.jsx(je,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),u.jsx(wR,{children:"Обране"}),u.jsxs(SR,{children:[u.jsx(CR,{children:o.map(p=>{var $,I;const b=p.new_price&&p.new_price<p.price,C=b?p.new_price:p.price,S=(p==null?void 0:p.available)??!0,j=(p==null?void 0:p.stock)===0,E=b?Math.round((p.price-p.new_price)/p.price*100):0,_=async M=>{const D=f.find(A=>A.id===M.id);if((D?D.quantity:0)>=M.stock){K.error(`Вибачте, доступно лише ${M.stock} шт.`);return}await yo(M,1,e,K)};return u.jsxs(kR,{className:c.includes(p.id)?"removing":"",children:[u.jsxs(_R,{onClick:()=>t(`/product/${p.slug??p.id}`),children:[" ",!S&&u.jsx(NC,{children:"Бронь"}),j&&u.jsx(FC,{children:"Продано"}),u.jsx(ER,{src:((I=($=p.images)==null?void 0:$[0])==null?void 0:I.url)||er,alt:p.name,style:{filter:j?"grayscale(100%)":"none",opacity:j?.55:1},onError:M=>{M.currentTarget.onerror=null}})]}),u.jsx(jR,{onClick:()=>t(`/product/${p.slug??p.id}`),children:p.name}),u.jsxs(PR,{children:[u.jsx(Ru,{children:u.jsxs(zu,{children:[u.jsxs(Fu,{$discount:b,children:[(C*(p.quantity||1)).toLocaleString()," ","грн"]}),b&&u.jsxs(u.Fragment,{children:[u.jsxs(Nu,{children:[(p.price*(p.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(Bu,{children:["-",E,"%"]})]})]})}),u.jsxs(TR,{children:[u.jsx(I1,{onClick:()=>{j||_(p)},disabled:!S||j,children:u.jsx(xo,{size:30})}),u.jsx(I1,{onClick:M=>w(p,M),children:u.jsx(Mw,{size:30})})]})]})]},p.id)})}),u.jsxs(OR,{children:[u.jsxs($R,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[g," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[x," грн"]})]}),u.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),u.jsx(IR,{onClick:()=>h(),children:"Додати все до кошика"})]})]})]})})},VR=k.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,UR=k.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,WR=k.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,HR=k.h1`
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
`;const GR=({title:e,children:t,breadcrumbPath:n})=>u.jsxs(VR,{children:[u.jsxs(UR,{children:["Головна / ",n]}),u.jsxs(WR,{children:[u.jsx(HR,{children:e}),t]})]}),M1=k.section`
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
`,qR=()=>u.jsxs(GR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[u.jsxs(M1,{children:[u.jsx(D1,{children:"Способи доставки"}),u.jsx(L1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),u.jsxs(A1,{children:[u.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),u.jsx("li",{children:"Самовивіз з нашого магазину"}),u.jsx("li",{children:"Укрпошта"})]})]}),u.jsxs(M1,{children:[u.jsx(D1,{children:"Варіанти оплати"}),u.jsx(L1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),u.jsxs(A1,{children:[u.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),u.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),u.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function si(e){"@babel/helpers - typeof";return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},si(e)}function YR(e,t){if(si(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(si(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function BC(e){var t=YR(e,"string");return si(t)==="symbol"?t:String(t)}function Jo(e,t,n){return t=BC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?R1(Object(n),!0).forEach(function(r){Jo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function XR(e){if(Array.isArray(e))return e}function KR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){c=!0,i=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}function Jp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function VC(e,t){if(e){if(typeof e=="string")return Jp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jp(e,t)}}function QR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yn(e,t){return XR(e)||KR(e,t)||VC(e,t)||QR()}function ZR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function sr(e,t){if(e==null)return{};var n=ZR(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var JR=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function ez(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,c=e.onChange,d=e.onInputChange,f=e.onMenuClose,v=e.onMenuOpen,h=e.value,g=sr(e,JR),x=y.useState(l!==void 0?l:n),w=Yn(x,2),m=w[0],p=w[1],b=y.useState(s!==void 0?s:i),C=Yn(b,2),S=C[0],j=C[1],E=y.useState(h!==void 0?h:a),_=Yn(E,2),$=_[0],I=_[1],M=y.useCallback(function(P,O){typeof c=="function"&&c(P,O),I(P)},[c]),D=y.useCallback(function(P,O){var F;typeof d=="function"&&(F=d(P,O)),p(F!==void 0?F:P)},[d]),T=y.useCallback(function(){typeof v=="function"&&v(),j(!0)},[v]),A=y.useCallback(function(){typeof f=="function"&&f(),j(!1)},[f]),L=l!==void 0?l:m,R=s!==void 0?s:S,z=h!==void 0?h:$;return J(J({},g),{},{inputValue:L,menuIsOpen:R,onChange:M,onInputChange:D,onMenuClose:A,onMenuOpen:T,value:z})}function tz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,BC(r.key),r)}}function nz(e,t,n){return t&&z1(e.prototype,t),n&&z1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function eh(e,t){return eh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},eh(e,t)}function rz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&eh(e,t)}function hc(e){return hc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},hc(e)}function iz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function oz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function az(e,t){if(t&&(si(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oz(e)}function sz(e){var t=iz();return function(){var r=hc(e),i;if(t){var o=hc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return az(this,i)}}function lz(e){if(Array.isArray(e))return Jp(e)}function cz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ug(e){return lz(e)||cz(e)||VC(e)||uz()}function dz(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const fz=Math.min,pz=Math.max,mc=Math.round,Ms=Math.floor,gc=e=>({x:e,y:e});function hz(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Vu(){return typeof window<"u"}function UC(e){return HC(e)?(e.nodeName||"").toLowerCase():"#document"}function mn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function WC(e){var t;return(t=(HC(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function HC(e){return Vu()?e instanceof Node||e instanceof mn(e).Node:!1}function th(e){return Vu()?e instanceof Element||e instanceof mn(e).Element:!1}function dg(e){return Vu()?e instanceof HTMLElement||e instanceof mn(e).HTMLElement:!1}function F1(e){return!Vu()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof mn(e).ShadowRoot}function GC(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=fg(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let af;function mz(){return af==null&&(af=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),af}function gz(e){return/^(html|body|#document)$/.test(UC(e))}function fg(e){return mn(e).getComputedStyle(e)}function vz(e){if(UC(e)==="html")return e;const t=e.assignedSlot||e.parentNode||F1(e)&&e.host||WC(e);return F1(t)?t.host:t}function qC(e){const t=vz(e);return gz(t)?e.ownerDocument?e.ownerDocument.body:e.body:dg(t)&&GC(t)?t:qC(t)}function vc(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=qC(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=mn(i);if(o){const l=nh(a);return t.concat(a,a.visualViewport||[],GC(i)?i:[],l&&n?vc(l):[])}else return t.concat(i,vc(i,[],n))}function nh(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function xz(e){const t=fg(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=dg(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=mc(n)!==o||mc(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function pg(e){return th(e)?e:e.contextElement}function sf(e){const t=pg(e);if(!dg(t))return gc(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=xz(t);let a=(o?mc(n.width):n.width)/r,l=(o?mc(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const yz=gc(0);function bz(e){const t=mn(e);return!mz()||!t.visualViewport?yz:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function wz(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==mn(e)?!1:t}function N1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=pg(e);let a=gc(1);t&&(r?th(r)&&(a=sf(r)):a=sf(e));const l=wz(o,n,r)?bz(o):gc(0);let s=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,d=i.width/a.x,f=i.height/a.y;if(o){const v=mn(o),h=r&&th(r)?mn(r):r;let g=v,x=nh(g);for(;x&&r&&h!==g;){const w=sf(x),m=x.getBoundingClientRect(),p=fg(x),b=m.left+(x.clientLeft+parseFloat(p.paddingLeft))*w.x,C=m.top+(x.clientTop+parseFloat(p.paddingTop))*w.y;s*=w.x,c*=w.y,d*=w.x,f*=w.y,s+=b,c+=C,g=mn(x),x=nh(g)}}return hz({width:d,height:f,x:s,y:c})}function YC(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Sz(e,t){let n=null,r;const i=WC(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const c=e.getBoundingClientRect(),{left:d,top:f,width:v,height:h}=c;if(l||t(),!v||!h)return;const g=Ms(f),x=Ms(i.clientWidth-(d+v)),w=Ms(i.clientHeight-(f+h)),m=Ms(d),b={rootMargin:-g+"px "+-x+"px "+-w+"px "+-m+"px",threshold:pz(0,fz(1,s))||1};let C=!0;function S(j){const E=j[0].intersectionRatio;if(E!==s){if(!C)return a();E?a(!1,E):r=setTimeout(()=>{a(!1,1e-7)},1e3)}E===1&&!YC(c,e.getBoundingClientRect())&&a(),C=!1}try{n=new IntersectionObserver(S,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(S,b)}n.observe(e)}return a(!0),o}function Cz(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=pg(e),d=i||o?[...c?vc(c):[],...t?vc(t):[]]:[];d.forEach(m=>{i&&m.addEventListener("scroll",n,{passive:!0}),o&&m.addEventListener("resize",n)});const f=c&&l?Sz(c,n):null;let v=-1,h=null;a&&(h=new ResizeObserver(m=>{let[p]=m;p&&p.target===c&&h&&t&&(h.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var b;(b=h)==null||b.observe(t)})),n()}),c&&!s&&h.observe(c),t&&h.observe(t));let g,x=s?N1(e):null;s&&w();function w(){const m=N1(e);x&&!YC(x,m)&&n(),x=m,g=requestAnimationFrame(w)}return n(),()=>{var m;d.forEach(p=>{i&&p.removeEventListener("scroll",n),o&&p.removeEventListener("resize",n)}),f==null||f(),(m=h)==null||m.disconnect(),h=null,s&&cancelAnimationFrame(g)}}var rh=y.useLayoutEffect,kz=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],xc=function(){};function _z(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function Ez(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(_z(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var B1=function(t){return Lz(t)?t.filter(Boolean):si(t)==="object"&&t!==null?[t]:[]},XC=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=sr(t,kz);return J({},n)},Oe=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Uu(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function jz(e){return Uu(e)?window.innerHeight:e.clientHeight}function KC(e){return Uu(e)?window.pageYOffset:e.scrollTop}function yc(e,t){if(Uu(e)){window.scrollTo(0,t);return}e.scrollTop=t}function Pz(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function Tz(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ds(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:xc,i=KC(e),o=t-i,a=10,l=0;function s(){l+=a;var c=Tz(l,i,o,n);yc(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function V1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?yc(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&yc(e,Math.max(t.offsetTop-i,0))}function Oz(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function U1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function $z(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var QC=!1,Iz={get passive(){return QC=!0}},Ls=typeof window<"u"?window:{};Ls.addEventListener&&Ls.removeEventListener&&(Ls.addEventListener("p",xc,Iz),Ls.removeEventListener("p",xc,!1));var Mz=QC;function Dz(e){return e!=null}function Lz(e){return Array.isArray(e)}function As(e,t,n){return e?t:n}var Az=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Yn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Yn(l,2),c=s[0],d=s[1];return a[c]=d,a},{})},Rz=["children","innerProps"],zz=["children","innerProps"];function Fz(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=Pz(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var d=s.getBoundingClientRect(),f=d.height,v=n.getBoundingClientRect(),h=v.bottom,g=v.height,x=v.top,w=n.offsetParent.getBoundingClientRect(),m=w.top,p=a?window.innerHeight:jz(s),b=KC(s),C=parseInt(getComputedStyle(n).marginBottom,10),S=parseInt(getComputedStyle(n).marginTop,10),j=m-S,E=p-x,_=j+b,$=f-b-x,I=h-p+b+C,M=b+x-S,D=160;switch(i){case"auto":case"bottom":if(E>=g)return{placement:"bottom",maxHeight:t};if($>=g&&!a)return o&&Ds(s,I,D),{placement:"bottom",maxHeight:t};if(!a&&$>=r||a&&E>=r){o&&Ds(s,I,D);var T=a?E-C:$-C;return{placement:"bottom",maxHeight:T}}if(i==="auto"||a){var A=t,L=a?j:_;return L>=r&&(A=Math.min(L-C-l,t)),{placement:"top",maxHeight:A}}if(i==="bottom")return o&&yc(s,I),{placement:"bottom",maxHeight:t};break;case"top":if(j>=g)return{placement:"top",maxHeight:t};if(_>=g&&!a)return o&&Ds(s,M,D),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&j>=r){var R=t;return(!a&&_>=r||a&&j>=r)&&(R=a?j-S:_-S),o&&Ds(s,M,D),{placement:"top",maxHeight:R}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function Nz(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var ZC=function(t){return t==="auto"?"bottom":t},Bz=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return J((r={label:"menu"},Jo(r,Nz(i),"100%"),Jo(r,"position","absolute"),Jo(r,"width","100%"),Jo(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},JC=y.createContext(null),Vz=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,c=y.useContext(JC)||{},d=c.setPortalPlacement,f=y.useRef(null),v=y.useState(i),h=Yn(v,2),g=h[0],x=h[1],w=y.useState(null),m=Yn(w,2),p=m[0],b=m[1],C=s.spacing.controlHeight;return rh(function(){var S=f.current;if(S){var j=a==="fixed",E=l&&!j,_=Fz({maxHeight:i,menuEl:S,minHeight:r,placement:o,shouldScroll:E,isFixedPosition:j,controlHeight:C});x(_.maxHeight),b(_.placement),d==null||d(_.placement)}},[i,o,a,l,r,d,C]),n({ref:f,placerProps:J(J({},t),{},{placement:p||ZC(o),maxHeight:g})})},Uz=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Z("div",ee({},Oe(t,"menu",{menu:!0}),{ref:r},i),n)},Wz=Uz,Hz=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return J({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},Gz=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Z("div",ee({},Oe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},ek=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return J({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},qz=ek,Yz=ek,Xz=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=sr(t,Rz);return Z("div",ee({},Oe(J(J({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},Kz=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=sr(t,zz);return Z("div",ee({},Oe(J(J({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},Qz=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},Zz=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=y.useRef(null),c=y.useRef(null),d=y.useState(ZC(a)),f=Yn(d,2),v=f[0],h=f[1],g=y.useMemo(function(){return{setPortalPlacement:h}},[]),x=y.useState(null),w=Yn(x,2),m=w[0],p=w[1],b=y.useCallback(function(){if(i){var E=Oz(i),_=l==="fixed"?0:window.pageYOffset,$=E[v]+_;($!==(m==null?void 0:m.offset)||E.left!==(m==null?void 0:m.rect.left)||E.width!==(m==null?void 0:m.rect.width))&&p({offset:$,rect:E})}},[i,l,v,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);rh(function(){b()},[b]);var C=y.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=Cz(i,s.current,b,{elementResize:"ResizeObserver"in window}))},[i,b]);rh(function(){C()},[C]);var S=y.useCallback(function(E){s.current=E,C()},[C]);if(!n&&l!=="fixed"||!m)return null;var j=Z("div",ee({ref:S},Oe(J(J({},t),{},{offset:m.offset,position:l,rect:m.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Z(JC.Provider,{value:g},n?Fc.createPortal(j,n):j)},Jz=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},eF=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Z("div",ee({},Oe(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},tF=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return J({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},nF=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Z("div",ee({},Oe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},rF=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},iF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Oe(t,"indicatorsContainer",{indicators:!0}),r),n)},W1,oF=["size"],aF=["innerProps","isRtl","size"],sF={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},tk=function(t){var n=t.size,r=sr(t,oF);return Z("svg",ee({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:sF},r))},hg=function(t){return Z(tk,ee({size:20},t),Z("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},nk=function(t){return Z(tk,ee({size:20},t),Z("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},rk=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return J({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},lF=rk,cF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Oe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Z(nk,null))},uF=rk,dF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Oe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Z(hg,null))},fF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return J({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},pF=function(t){var n=t.innerProps;return Z("span",ee({},n,Oe(t,"indicatorSeparator",{"indicator-separator":!0})))},hF=Z5(W1||(W1=dz([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),mF=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return J({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},lf=function(t){var n=t.delay,r=t.offset;return Z("span",{css:Dm({animation:"".concat(hF," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},gF=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=sr(t,aF);return Z("div",ee({},Oe(J(J({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Z(lf,{delay:0,offset:r}),Z(lf,{delay:160,offset:!0}),Z(lf,{delay:320,offset:!r}))},vF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return J({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},xF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Z("div",ee({ref:o},Oe(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},yF=xF,bF=["data"],wF=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},SF=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,d=t.theme,f=t.selectProps;return Z("div",ee({},Oe(t,"group",{group:!0}),s),Z(a,ee({},l,{selectProps:f,theme:d,getStyles:i,getClassNames:o,cx:r}),c),Z("div",null,n))},CF=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return J({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},kF=function(t){var n=XC(t);n.data;var r=sr(n,bF);return Z("div",ee({},Oe(t,"groupHeading",{"group-heading":!0}),r))},_F=SF,EF=["innerRef","isDisabled","isHidden","inputClassName"],jF=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return J(J({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},PF),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},ik={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},PF={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":J({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},ik)},TF=function(t){return J({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},ik)},OF=function(t){var n=t.cx,r=t.value,i=XC(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,c=sr(i,EF);return Z("div",ee({},Oe(t,"input",{"input-container":!0}),{"data-value":r||""}),Z("input",ee({className:n({input:!0},s),ref:o,style:TF(l),disabled:a},c)))},$F=OF,IF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return J({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},MF=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return J({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},DF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return J({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},ok=function(t){var n=t.children,r=t.innerProps;return Z("div",r,n)},LF=ok,AF=ok;function RF(e){var t=e.children,n=e.innerProps;return Z("div",ee({role:"button"},n),t||Z(hg,{size:14}))}var zF=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,c=r.Container,d=r.Label,f=r.Remove;return Z(c,{data:i,innerProps:J(J({},Oe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Z(d,{data:i,innerProps:J({},Oe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Z(f,{data:i,innerProps:J(J({},Oe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},FF=zF,NF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return J({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},BF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Z("div",ee({},Oe(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},VF=BF,UF=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return J({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},WF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Oe(t,"placeholder",{placeholder:!0}),r),n)},HF=WF,GF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return J({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},qF=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Z("div",ee({},Oe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},YF=qF,XF={ClearIndicator:dF,Control:yF,DropdownIndicator:cF,DownChevron:nk,CrossIcon:hg,Group:_F,GroupHeading:kF,IndicatorsContainer:iF,IndicatorSeparator:pF,Input:$F,LoadingIndicator:gF,Menu:Wz,MenuList:Gz,MenuPortal:Zz,LoadingMessage:Kz,NoOptionsMessage:Xz,MultiValue:FF,MultiValueContainer:LF,MultiValueLabel:AF,MultiValueRemove:RF,Option:VF,Placeholder:HF,SelectContainer:eF,SingleValue:YF,ValueContainer:nF},KF=function(t){return J(J({},XF),t.components)},H1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function QF(e,t){return!!(e===t||H1(e)&&H1(t))}function ZF(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!QF(e[n],t[n]))return!1;return!0}function JF(e,t){t===void 0&&(t=ZF);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var eN={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},tN=function(t){return Z("span",ee({css:eN},t))},G1=tN,nN={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,c=t.isSelected,d=t.isAppleDevice,f=function(x,w){return x&&x.length?"".concat(x.indexOf(w)+1," of ").concat(x.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(f(l,r),".");if(n==="menu"&&d){var v=s?" disabled":"",h="".concat(c?" selected":"").concat(v);return"".concat(a).concat(h,", ").concat(f(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},rN=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=t.id,d=t.isAppleDevice,f=s.ariaLiveMessages,v=s.getOptionLabel,h=s.inputValue,g=s.isMulti,x=s.isOptionDisabled,w=s.isSearchable,m=s.menuIsOpen,p=s.options,b=s.screenReaderStatus,C=s.tabSelectsValue,S=s.isLoading,j=s["aria-label"],E=s["aria-live"],_=y.useMemo(function(){return J(J({},nN),f||{})},[f]),$=y.useMemo(function(){var L="";if(n&&_.onChange){var R=n.option,z=n.options,P=n.removedValue,O=n.removedValues,F=n.value,B=function(oe){return Array.isArray(oe)?null:oe},N=P||R||B(F),V=N?v(N):"",H=z||O||void 0,G=H?H.map(v):[],W=J({isDisabled:N&&x(N,l),label:V,labels:G},n);L=_.onChange(W)}return L},[n,_,x,l,v]),I=y.useMemo(function(){var L="",R=r||i,z=!!(r&&l&&l.includes(r));if(R&&_.onFocus){var P={focused:R,label:v(R),isDisabled:x(R,l),isSelected:z,options:o,context:R===r?"menu":"value",selectValue:l,isAppleDevice:d};L=_.onFocus(P)}return L},[r,i,v,x,_,o,l,d]),M=y.useMemo(function(){var L="";if(m&&p.length&&!S&&_.onFilter){var R=b({count:o.length});L=_.onFilter({inputValue:h,resultsMessage:R})}return L},[o,h,m,_,p,b,S]),D=(n==null?void 0:n.action)==="initial-input-focus",T=y.useMemo(function(){var L="";if(_.guidance){var R=i?"value":m?"menu":"input";L=_.guidance({"aria-label":j,context:R,isDisabled:r&&x(r,l),isMulti:g,isSearchable:w,tabSelectsValue:C,isInitialFocus:D})}return L},[j,r,i,g,x,w,m,_,l,C,D]),A=Z(y.Fragment,null,Z("span",{id:"aria-selection"},$),Z("span",{id:"aria-focused"},I),Z("span",{id:"aria-results"},M),Z("span",{id:"aria-guidance"},T));return Z(y.Fragment,null,Z(G1,{id:c},D&&A),Z(G1,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!D&&A))},iN=rN,ih=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],oN=new RegExp("["+ih.map(function(e){return e.letters}).join("")+"]","g"),ak={};for(var cf=0;cf<ih.length;cf++)for(var uf=ih[cf],df=0;df<uf.letters.length;df++)ak[uf.letters[df]]=uf.base;var sk=function(t){return t.replace(oN,function(n){return ak[n]})},aN=JF(sk),q1=function(t){return t.replace(/^\s+|\s+$/g,"")},sN=function(t){return"".concat(t.label," ").concat(t.value)},lN=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=J({ignoreCase:!0,ignoreAccents:!0,stringify:sN,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,c=i.matchFrom,d=s?q1(r):r,f=s?q1(l(n)):l(n);return o&&(d=d.toLowerCase(),f=f.toLowerCase()),a&&(d=aN(d),f=sk(f)),c==="start"?f.substr(0,d.length)===d:f.indexOf(d)>-1}},cN=["innerRef"];function uN(e){var t=e.innerRef,n=sr(e,cN),r=Az(n,"onExited","in","enter","exit","appear");return Z("input",ee({ref:t},r,{css:Dm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var dN=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function fN(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=y.useRef(!1),l=y.useRef(!1),s=y.useRef(0),c=y.useRef(null),d=y.useCallback(function(w,m){if(c.current!==null){var p=c.current,b=p.scrollTop,C=p.scrollHeight,S=p.clientHeight,j=c.current,E=m>0,_=C-S-b,$=!1;_>m&&a.current&&(r&&r(w),a.current=!1),E&&l.current&&(o&&o(w),l.current=!1),E&&m>_?(n&&!a.current&&n(w),j.scrollTop=C,$=!0,a.current=!0):!E&&-m>b&&(i&&!l.current&&i(w),j.scrollTop=0,$=!0,l.current=!0),$&&dN(w)}},[n,r,i,o]),f=y.useCallback(function(w){d(w,w.deltaY)},[d]),v=y.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),h=y.useCallback(function(w){var m=s.current-w.changedTouches[0].clientY;d(w,m)},[d]),g=y.useCallback(function(w){if(w){var m=Mz?{passive:!1}:!1;w.addEventListener("wheel",f,m),w.addEventListener("touchstart",v,m),w.addEventListener("touchmove",h,m)}},[h,v,f]),x=y.useCallback(function(w){w&&(w.removeEventListener("wheel",f,!1),w.removeEventListener("touchstart",v,!1),w.removeEventListener("touchmove",h,!1))},[h,v,f]);return y.useEffect(function(){if(t){var w=c.current;return g(w),function(){x(w)}}},[t,g,x]),function(w){c.current=w}}var Y1=["boxSizing","height","overflow","paddingRight","position"],X1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function K1(e){e.cancelable&&e.preventDefault()}function Q1(e){e.stopPropagation()}function Z1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function J1(){return"ontouchstart"in window||navigator.maxTouchPoints}var ex=!!(typeof window<"u"&&window.document&&window.document.createElement),Uo=0,Ci={capture:!1,passive:!1};function pN(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=y.useRef({}),o=y.useRef(null),a=y.useCallback(function(s){if(ex){var c=document.body,d=c&&c.style;if(r&&Y1.forEach(function(g){var x=d&&d[g];i.current[g]=x}),r&&Uo<1){var f=parseInt(i.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,h=window.innerWidth-v+f||0;Object.keys(X1).forEach(function(g){var x=X1[g];d&&(d[g]=x)}),d&&(d.paddingRight="".concat(h,"px"))}c&&J1()&&(c.addEventListener("touchmove",K1,Ci),s&&(s.addEventListener("touchstart",Z1,Ci),s.addEventListener("touchmove",Q1,Ci))),Uo+=1}},[r]),l=y.useCallback(function(s){if(ex){var c=document.body,d=c&&c.style;Uo=Math.max(Uo-1,0),r&&Uo<1&&Y1.forEach(function(f){var v=i.current[f];d&&(d[f]=v)}),c&&J1()&&(c.removeEventListener("touchmove",K1,Ci),s&&(s.removeEventListener("touchstart",Z1,Ci),s.removeEventListener("touchmove",Q1,Ci)))}},[r]);return y.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var hN=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},mN={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function gN(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=fN({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=pN({isEnabled:n}),f=function(h){c(h),d(h)};return Z(y.Fragment,null,n&&Z("div",{onClick:hN,css:mN}),t(f))}var vN={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},xN=function(t){var n=t.name,r=t.onFocus;return Z("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:vN,value:"",onChange:function(){}})},yN=xN;function mg(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function bN(){return mg(/^iPhone/i)}function lk(){return mg(/^Mac/i)}function wN(){return mg(/^iPad/i)||lk()&&navigator.maxTouchPoints>1}function SN(){return bN()||wN()}function CN(){return lk()||SN()}var kN=function(t){return t.label},_N=function(t){return t.label},EN=function(t){return t.value},jN=function(t){return!!t.isDisabled},PN={clearIndicator:uF,container:Jz,control:vF,dropdownIndicator:lF,group:wF,groupHeading:CF,indicatorsContainer:rF,indicatorSeparator:fF,input:jF,loadingIndicator:mF,loadingMessage:Yz,menu:Bz,menuList:Hz,menuPortal:Qz,multiValue:IF,multiValueLabel:MF,multiValueRemove:DF,noOptionsMessage:qz,option:NF,placeholder:UF,singleValue:GF,valueContainer:tF},TN={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},ON=4,ck=4,$N=38,IN=ck*2,MN={baseUnit:ck,controlHeight:$N,menuGutter:IN},ff={borderRadius:ON,colors:TN,spacing:MN},DN={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:U1(),captureMenuScroll:!U1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:lN(),formatGroupLabel:kN,getOptionLabel:_N,getOptionValue:EN,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:jN,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!$z(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function tx(e,t,n,r){var i=fk(e,t,n),o=pk(e,t,n),a=dk(e,t),l=bc(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function gl(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return tx(e,a,t,l)}).filter(function(a){return rx(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=tx(e,n,t,r);return rx(e,o)?o:void 0}).filter(Dz)}function uk(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,ug(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function nx(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,ug(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function LN(e,t){return uk(gl(e,t))}function rx(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!mk(e)||!o)&&hk(e,{label:a,value:l,data:i},r)}function AN(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function RN(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var pf=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},dk=function(t,n){return t.getOptionLabel(n)},bc=function(t,n){return t.getOptionValue(n)};function fk(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function pk(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=bc(e,t);return n.some(function(i){return bc(e,i)===r})}function hk(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var mk=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},zN=1,gk=function(e){rz(n,e);var t=sz(n);function n(r){var i;if(tz(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var d=i.props,f=d.onChange,v=d.name;c.name=v,i.ariaOnChange(s,c),f(s,c)},i.setValue=function(s,c,d){var f=i.props,v=f.closeMenuOnSelect,h=f.isMulti,g=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),v&&(i.setState({inputIsHiddenAfterUpdate:!h}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:d})},i.selectOption=function(s){var c=i.props,d=c.blurInputOnSelect,f=c.isMulti,v=c.name,h=i.state.selectValue,g=f&&i.isOptionSelected(s,h),x=i.isOptionDisabled(s,h);if(g){var w=i.getOptionValue(s);i.setValue(h.filter(function(m){return i.getOptionValue(m)!==w}),"deselect-option",s)}else if(!x)f?i.setValue([].concat(ug(h),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:v});return}d&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,d=i.state.selectValue,f=i.getOptionValue(s),v=d.filter(function(g){return i.getOptionValue(g)!==f}),h=As(c,v,v[0]||null);i.onChange(h,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(As(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,d=c[c.length-1],f=c.slice(0,c.length-1),v=As(s,f,f[0]||null);d&&i.onChange(v,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(s){return pf(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return nx(gl(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return Ez.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return dk(i.props,s)},i.getOptionValue=function(s){return bc(i.props,s)},i.getStyles=function(s,c){var d=i.props.unstyled,f=PN[s](c,d);f.boxSizing="border-box";var v=i.props.styles[s];return v?v(f,c):f},i.getClassNames=function(s,c){var d,f;return(d=(f=i.props.classNames)[s])===null||d===void 0?void 0:d.call(f,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return KF(i.props)},i.buildCategorizedOptions=function(){return gl(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return uk(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:J({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,d=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Uu(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,d=c&&c.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,d=c&&c.item(0);if(d){var f=Math.abs(d.clientX-i.initialTouchX),v=Math.abs(d.clientY-i.initialTouchY),h=5;i.userIsDragging=f>h||v>h}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,d=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),d=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:d>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return mk(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,d=c.isMulti,f=c.backspaceRemovesValue,v=c.escapeClearsValue,h=c.inputValue,g=c.isClearable,x=c.isDisabled,w=c.menuIsOpen,m=c.onKeyDown,p=c.tabSelectsValue,b=c.openMenuOnFocus,C=i.state,S=C.focusedOption,j=C.focusedValue,E=C.selectValue;if(!x&&!(typeof m=="function"&&(m(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||h)return;i.focusValue("previous");break;case"ArrowRight":if(!d||h)return;i.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(j)i.removeValue(j);else{if(!f)return;d?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!p||!S||b&&i.isOptionSelected(S,E))return;i.selectOption(S);break;case"Enter":if(s.keyCode===229)break;if(w){if(!S||i.isComposing)return;i.selectOption(S);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:h}),i.onMenuClose()):g&&v&&i.clearValue();break;case" ":if(h)return;if(!w){i.openMenu("first");break}if(!S)return;i.selectOption(S);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++zN),i.state.selectValue=B1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=pf(o,a[l])}return i}return nz(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&V1(this.menuListRef,this.focusedOptionRef),CN()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(V1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),d=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(l[0]);f>-1&&(d=f)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[d],focusedOptionId:this.getFocusedOptionId(c[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,d=-1;if(a.length){switch(i){case"previous":s===0?d=0:s===-1?d=c:d=s-1;break;case"next":s>-1&&s<c&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,c=l.indexOf(a);a||(c=-1),i==="up"?s=c>0?c-1:l.length-1:i==="down"?s=(c+1)%l.length:i==="pageup"?(s=c-o,s<0&&(s=0)):i==="pagedown"?(s=c+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ff):J(J({},ff),this.props.theme):ff}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,c=this.selectOption,d=this.setValue,f=this.props,v=f.isMulti,h=f.isRtl,g=f.options,x=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:x,isMulti:v,isRtl:h,options:g,selectOption:c,selectProps:f,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return fk(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return pk(this.props,i,o)}},{key:"filterOption",value:function(i,o){return hk(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,c=i.tabIndex,d=i.form,f=i.menuIsOpen,v=i.required,h=this.getComponents(),g=h.Input,x=this.state,w=x.inputIsHidden,m=x.ariaSelection,p=this.commonProps,b=l||this.getElementId("input"),C=J(J(J({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?y.createElement(g,ee({},p,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:b,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:d,type:"text",value:s},C)):y.createElement(uN,ee({id:b,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:xc,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:d,value:""},C))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,c=o.MultiValueRemove,d=o.SingleValue,f=o.Placeholder,v=this.commonProps,h=this.props,g=h.controlShouldRenderValue,x=h.isDisabled,w=h.isMulti,m=h.inputValue,p=h.placeholder,b=this.state,C=b.selectValue,S=b.focusedValue,j=b.isFocused;if(!this.hasValue()||!g)return m?null:y.createElement(f,ee({},v,{key:"placeholder",isDisabled:x,isFocused:j,innerProps:{id:this.getElementId("placeholder")}}),p);if(w)return C.map(function(_,$){var I=_===S,M="".concat(i.getOptionLabel(_),"-").concat(i.getOptionValue(_));return y.createElement(a,ee({},v,{components:{Container:l,Label:s,Remove:c},isFocused:I,isDisabled:x,key:M,index:$,removeProps:{onClick:function(){return i.removeValue(_)},onTouchEnd:function(){return i.removeValue(_)},onMouseDown:function(T){T.preventDefault()}},data:_}),i.formatOptionLabel(_,"value"))});if(m)return null;var E=C[0];return y.createElement(d,ee({},v,{data:E,isDisabled:x}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return y.createElement(o,ee({},a,{innerProps:f,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!o||!c)return null;var f={"aria-hidden":"true"};return y.createElement(o,ee({},a,{innerProps:f,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return y.createElement(a,ee({},l,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return y.createElement(o,ee({},a,{innerProps:c,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,c=o.MenuList,d=o.MenuPortal,f=o.LoadingMessage,v=o.NoOptionsMessage,h=o.Option,g=this.commonProps,x=this.state.focusedOption,w=this.props,m=w.captureMenuScroll,p=w.inputValue,b=w.isLoading,C=w.loadingMessage,S=w.minMenuHeight,j=w.maxMenuHeight,E=w.menuIsOpen,_=w.menuPlacement,$=w.menuPosition,I=w.menuPortalTarget,M=w.menuShouldBlockScroll,D=w.menuShouldScrollIntoView,T=w.noOptionsMessage,A=w.onMenuScrollToTop,L=w.onMenuScrollToBottom;if(!E)return null;var R=function(V,H){var G=V.type,W=V.data,q=V.isDisabled,oe=V.isSelected,he=V.label,ie=V.value,De=x===W,We=q?void 0:function(){return i.onOptionHover(W)},He=q?void 0:function(){return i.selectOption(W)},hi="".concat(i.getElementId("option"),"-").concat(H),St={id:hi,onClick:He,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:oe};return y.createElement(h,ee({},g,{innerProps:St,data:W,isDisabled:q,isSelected:oe,key:hi,label:he,type:G,value:ie,isFocused:De,innerRef:De?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(V.data,"menu"))},z;if(this.hasOptions())z=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var V=N.data,H=N.options,G=N.index,W="".concat(i.getElementId("group"),"-").concat(G),q="".concat(W,"-heading");return y.createElement(a,ee({},g,{key:W,data:V,options:H,Heading:l,headingProps:{id:q,data:N.data},label:i.formatGroupLabel(N.data)}),N.options.map(function(oe){return R(oe,"".concat(G,"-").concat(oe.index))}))}else if(N.type==="option")return R(N,"".concat(N.index))});else if(b){var P=C({inputValue:p});if(P===null)return null;z=y.createElement(f,g,P)}else{var O=T({inputValue:p});if(O===null)return null;z=y.createElement(v,g,O)}var F={minMenuHeight:S,maxMenuHeight:j,menuPlacement:_,menuPosition:$,menuShouldScrollIntoView:D},B=y.createElement(Vz,ee({},g,F),function(N){var V=N.ref,H=N.placerProps,G=H.placement,W=H.maxHeight;return y.createElement(s,ee({},g,F,{innerRef:V,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:b,placement:G}),y.createElement(gN,{captureEnabled:m,onTopArrive:A,onBottomArrive:L,lockEnabled:M},function(q){return y.createElement(c,ee({},g,{innerRef:function(he){i.getMenuListRef(he),q(he)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:b,maxHeight:W,focusedOption:x}),z)}))});return I||$==="fixed"?y.createElement(d,ee({},g,{appendTo:I,controlElement:this.controlRef,menuPlacement:_,menuPosition:$}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,c=o.name,d=o.required,f=this.state.selectValue;if(d&&!this.hasValue()&&!l)return y.createElement(yN,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(s)if(a){var v=f.map(function(x){return i.getOptionValue(x)}).join(a);return y.createElement("input",{name:c,type:"hidden",value:v})}else{var h=f.length>0?f.map(function(x,w){return y.createElement("input",{key:"i-".concat(w),name:c,type:"hidden",value:i.getOptionValue(x)})}):y.createElement("input",{name:c,type:"hidden",value:""});return y.createElement("div",null,h)}else{var g=f[0]?this.getOptionValue(f[0]):"";return y.createElement("input",{name:c,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,c=o.isFocused,d=o.selectValue,f=this.getFocusableOptions();return y.createElement(iN,ee({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:d,focusableOptions:f,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,c=this.props,d=c.className,f=c.id,v=c.isDisabled,h=c.menuIsOpen,g=this.state.isFocused,x=this.commonProps=this.getCommonProps();return y.createElement(l,ee({},x,{className:d,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:g}),this.renderLiveRegion(),y.createElement(o,ee({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:g,menuIsOpen:h}),y.createElement(s,ee({},x,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),y.createElement(a,ee({},x,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,d=o.isFocused,f=o.prevWasFocused,v=o.instancePrefix,h=i.options,g=i.value,x=i.menuIsOpen,w=i.inputValue,m=i.isMulti,p=B1(g),b={};if(a&&(g!==a.value||h!==a.options||x!==a.menuIsOpen||w!==a.inputValue)){var C=x?LN(i,p):[],S=x?nx(gl(i,p),"".concat(v,"-option")):[],j=l?AN(o,p):null,E=RN(o,C),_=pf(S,E);b={selectValue:p,focusedOption:E,focusedOptionId:_,focusableOptionsWithIds:S,focusedValue:j,clearFocusValueOnUpdate:!1}}var $=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=c,M=d&&f;return d&&!M&&(I={value:As(m,p,p[0]||null),options:p,action:"initial-input-focus"},M=!f),(c==null?void 0:c.action)==="initial-input-focus"&&(I=null),J(J(J({},b),$),{},{prevProps:i,ariaSelection:I,prevWasFocused:M})}}]),n}(y.Component);gk.defaultProps=DN;var FN=y.forwardRef(function(e,t){var n=ez(e);return y.createElement(gk,ee({ref:t},n))}),Wu=FN;const NN=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,BN=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,VN=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>u.jsxs(NN,{children:[u.jsx(BN,{children:"Місто"}),u.jsx(Wu,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),UN=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,WN=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,HN=({options:e=[],value:t,onChange:n,selectedCity:r})=>u.jsxs(UN,{children:[u.jsx(WN,{children:"Спосіб доставки"}),u.jsx(Wu,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),ix=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,ox=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,GN=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?u.jsxs(ix,{children:[u.jsx(ox,{children:"Відділення Нової пошти"}),u.jsx(Wu,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?u.jsxs(ix,{children:[u.jsx(ox,{children:"Адреса доставки (Укрпошта)"}),u.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,qN=k.div`
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
`;const YN=k.button`
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
`,XN=k.ul`
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
`,KN=k.li`
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
`,QN=k.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,ZN=k.div`
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
`,JN=k.div`
  text-align: center;
  width: 100px;
 
`,e7=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,t7=k.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,n7=k.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,r7=k.span`
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
`,i7=k.div`
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
`;const o7=k.div`
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,a7=k.div`
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
`;const s7=k.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 18px 2px 28px;

  font-size: 16px;
     color: var(--black-color);
`,l7=k.input`
  width: 20px;
  height: 20px;

  accent-color: #5b4637;
  cursor: pointer;

  flex-shrink: 0;
`,c7=k.label`
  font-size: 16px;
  line-height: 1.4;

      color: var(--black-color);
  cursor: pointer;
`,u7=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i,noCall:o,setNoCall:a})=>(console.log(n,t),u.jsxs(qN,{children:[u.jsx("h3",{children:"Ваше замовлення"}),u.jsx(XN,{children:e.map((l,s)=>{var h,g;const c=l.new_price&&l.new_price<l.price,d=c?l.new_price:l.price,f=c?Math.round((l.price-l.new_price)/l.price*100):0,v=l.available!==!1?d*(l.quantity||1):0;return u.jsxs(KN,{children:[u.jsx(QN,{src:((g=(h=l.images)==null?void 0:h[0])==null?void 0:g.url)||er,alt:l.name}),u.jsxs(ZN,{children:[u.jsx("p",{className:"item-name",children:l.name}),u.jsxs("p",{className:"item-details",children:[l.quantity," шт. × ",l.price," грн"]})]}),u.jsx(JN,{children:u.jsxs(e7,{children:[u.jsxs(t7,{$discount:c,children:[v.toLocaleString()," грн"]}),c&&u.jsxs(u.Fragment,{children:[u.jsxs(n7,{children:[(l.price*(l.quantity||1)).toLocaleString()," грн"]}),u.jsxs(r7,{children:["-",f,"%"]})]})]})})]},`${l.id}-${s}`)})}),u.jsxs("div",{className:"summary-row",children:[u.jsxs("span",{children:["Товари (",n,")"]}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs("div",{className:"summary-row",children:[u.jsx("span",{children:"Доставка"}),u.jsx("span",{children:"За тарифами перевізника"})]}),u.jsx("hr",{}),u.jsxs("div",{className:"total",children:[u.jsx("span",{children:"Всього до сплати:"}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs(s7,{children:[u.jsx(l7,{type:"checkbox",id:"noCall",checked:o,onChange:l=>a(l.target.checked)}),u.jsx(c7,{htmlFor:"noCall",children:"Не передзвонювати"})]}),u.jsx(YN,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&u.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]}));var vk={exports:{}};function d7(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var hf=d7(y),f7=Fc;function p7(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function oh(){return(oh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h7(e,t){e.prototype=Object.create(t.prototype),p7(e.prototype.constructor=e,t)}function m7(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function ki(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g7=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return c[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},ax=g7;function sx(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function v7(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var x7={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},y7="_";function lx(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=y7),n==null&&(n=x7),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Vt(e,t){return e.permanents.indexOf(t)!==-1}function Hu(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Vt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function cx(e,t){return t.split("").every(function(n,r){return Vt(e,r)||!Hu(e,r,n)})}function ea(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Vt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Vt(e,o)&&Hu(e,o,a)){i=o+1;break}}return i}function xk(e,t){return ea(e,t)===e.mask.length}function Un(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=ah(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Vt(e,t.length);)t+=r[t.length];return t}if(t)return ah(e,Un(e,""),t,0);for(var o=0;o<r.length;o++)Vt(e,o)?t+=r[o]:t+=n;return t}function b7(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(d,f){return f<n||i<=f?d:Vt(e,f)?a[f]:o}).join("");for(var c=i;c<s.length;c++)Vt(e,c)&&(s[c]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Un(e,t)}function ah(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=xk(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(c){for(;h=c,Vt(e,v=r)&&h!==i[v];){if(r>=t.length&&(t+=i[r]),d=c,f=r,o&&Vt(e,f)&&d===o)return!0;if(++r>=i.length)return!1}var d,f,v,h;return!Hu(e,r,c)&&c!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),Un(e,t)):o||(t+=c),++r<i.length)}),t}function w7(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,Vt(e,c=r)&&d!==i[c];)if(++r>=i.length)return!1;var c,d;return(Hu(e,r,s)||s===o)&&r++,r<i.length}),r-l}function S7(e,t){for(var n=t;0<=n;--n)if(!Vt(e,n))return n;return null}function pa(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Vt(e,r))return r;return null}function mf(e){return e||e===0?e+"":""}function C7(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,c="",d=0,f=0,v=Math.min(i.start,n.start);return n.end>i.start?f=(d=w7(e,r,c=s.slice(i.start,n.end),v))?i.length:0:s.length<r.length&&(f=r.length-s.length),s=r,f&&(f===1&&!i.length&&(v=i.start===n.start?pa(e,n.start):S7(e,n.start)),s=b7(e,s,v,f)),s=ah(e,s,c,v),(v+=d)>=o.length?v=o.length:v<a.length&&!d?v=a.length:v>=a.length&&v<l&&d&&(v=pa(e,v)),c||(c=null),{value:s=Un(e,s),enteredString:c,selection:{start:v,end:v}}}function k7(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function Ct(e){return typeof e=="function"}function _7(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function yk(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function ux(e){return(yk()?_7():function(){return setTimeout(e,1e3/60)})(e)}function gf(e){(yk()||clearTimeout)(e)}var E7=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=ux(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(gf(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var g=f7.findDOMNode(ki(ki(i))),x=typeof window<"u"&&g instanceof window.Element;if(g&&!x)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},i.getInputValue=function(){var g=i.getInputDOMNode();return g?g.value:null},i.setInputValue=function(g){var x=i.getInputDOMNode();x&&(i.value=g,x.value=g)},i.setCursorToEnd=function(){var g=ea(i.maskOptions,i.value),x=pa(i.maskOptions,g);x!==null&&i.setCursorPosition(x)},i.setSelection=function(g,x,w){w===void 0&&(w={});var m=i.getInputDOMNode(),p=i.isFocused();m&&p&&(w.deferred||sx(m,g,x),i.selectionDeferId!==null&&gf(i.selectionDeferId),i.selectionDeferId=ux(function(){i.selectionDeferId=null,sx(m,g,x)}),i.previousSelection={start:g,end:x,length:Math.abs(x-g)})},i.getSelection=function(){return v7(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(g){i.setSelection(g,g)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var g=i.maskOptions,x=g.mask,w=g.maskChar,m=g.permanents,p=g.formatChars;return{mask:x,maskChar:w,permanents:m,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:p}},i.isInputAutofilled=function(g,x,w,m){var p=i.getInputDOMNode();try{if(p.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||m.end<w.length&&x.end===g.length},i.onChange=function(g){var x=ki(ki(i)).beforePasteState,w=ki(ki(i)).previousSelection,m=i.props.beforeMaskedValueChange,p=i.getInputValue(),b=i.value,C=i.getSelection();i.isInputAutofilled(p,C,b,w)&&(b=Un(i.maskOptions,""),w={start:0,end:0,length:0}),x&&(w=x.selection,b=x.value,C={start:w.start+p.length,end:w.start+p.length,length:0},p=b.slice(0,w.start)+p+b.slice(w.end),i.beforePasteState=null);var S=C7(i.maskOptions,p,C,b,w),j=S.enteredString,E=S.selection,_=S.value;if(Ct(m)){var $=m({value:_,selection:E},{value:b,selection:w},j,i.getBeforeMaskedValueChangeConfig());_=$.value,E=$.selection}i.setInputValue(_),Ct(i.props.onChange)&&i.props.onChange(g),i.isWindowsPhoneBrowser?i.setSelection(E.start,E.end,{deferred:!0}):i.setSelection(E.start,E.end)},i.onFocus=function(g){var x=i.props.beforeMaskedValueChange,w=i.maskOptions,m=w.mask,p=w.prefix;if(i.focused=!0,i.mounted=!0,m){if(i.value)ea(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var b=Un(i.maskOptions,p),C=Un(i.maskOptions,b),S=ea(i.maskOptions,C),j=pa(i.maskOptions,S),E={start:j,end:j};if(Ct(x)){var _=x({value:C,selection:E},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());C=_.value,E=_.selection}var $=C!==i.getInputValue();$&&i.setInputValue(C),$&&Ct(i.props.onChange)&&i.props.onChange(g),i.setSelection(E.start,E.end)}i.runSaveSelectionLoop()}Ct(i.props.onFocus)&&i.props.onFocus(g)},i.onBlur=function(g){var x=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&cx(i.maskOptions,i.value)){var m="";Ct(x)&&(m=x({value:m,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var p=m!==i.getInputValue();p&&i.setInputValue(m),p&&Ct(i.props.onChange)&&i.props.onChange(g)}Ct(i.props.onBlur)&&i.props.onBlur(g)},i.onMouseDown=function(g){if(!i.focused&&document.addEventListener){i.mouseDownX=g.clientX,i.mouseDownY=g.clientY,i.mouseDownTime=new Date().getTime();var x=function w(m){if(document.removeEventListener("mouseup",w),i.focused){var p=Math.abs(m.clientX-i.mouseDownX),b=Math.abs(m.clientY-i.mouseDownY),C=Math.max(p,b),S=new Date().getTime()-i.mouseDownTime;(C<=10&&S<=200||C<=5&&S<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",x)}Ct(i.props.onMouseDown)&&i.props.onMouseDown(g)},i.onPaste=function(g){Ct(i.props.onPaste)&&i.props.onPaste(g),g.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(g){i.props.children==null&&Ct(i.props.inputRef)&&i.props.inputRef(g)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,c=r.beforeMaskedValueChange,d=r.defaultValue,f=r.value;i.maskOptions=lx(o,a,l),d==null&&(d=""),f==null&&(f=d);var v=mf(f);if(i.maskOptions.mask&&(s||v)&&(v=Un(i.maskOptions,v),Ct(c))){var h=r.value;r.value==null&&(h=d),v=c({value:v,selection:null},{value:h=mf(h),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=v,i}h7(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=k7(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,c=i.formatChars,d=this.maskOptions,f=a||this.isFocused(),v=this.props.value!=null,h=v?mf(this.props.value):this.value,g=r?r.start:null;if(this.maskOptions=lx(l,s,c),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var x=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||v||(h=this.getInputValue()),(x||this.maskOptions.mask&&(h||f))&&(h=Un(this.maskOptions,h)),x){var w=ea(this.maskOptions,h);(g===null||w<g)&&(g=xk(this.maskOptions,h)?w:pa(this.maskOptions,w))}!this.maskOptions.mask||!cx(this.maskOptions,h)||f||v&&this.props.value||(h="");var m={start:g,end:g};if(Ct(o)){var p=o({value:h,selection:m},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());h=p.value,m=p.selection}this.value=h;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):x&&this.forceUpdate();var C=!1;m.start!=null&&m.end!=null&&(C=!r||r.start!==m.start||r.end!==m.end),(C||b)&&this.setSelection(m.start,m.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&gf(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=m7(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){Ct(o)||ax(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=oh({},a);l.forEach(function(d){return delete s[d]}),r=o(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&ax(!1)}else r=hf.createElement("input",oh({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),r=hf.cloneElement(r,c)},t}(hf.Component),j7=E7;vk.exports=j7;var P7=vk.exports;const T7=Va(P7);k.div`
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
`;const vf=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,xf=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,yf=k.input`
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
`;const bf=k.span`
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
`;const O7=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Контактні дані"}),u.jsxs(vf,{children:[u.jsx(xf,{children:"Прізвище та ім’я"}),u.jsx(yf,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&u.jsx(bf,{children:n.fullName})]}),u.jsxs(vf,{children:[u.jsx(xf,{children:"Номер телефону"}),u.jsx(T7,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>u.jsx(yf,{...i,type:"tel"})}),n.phone&&u.jsx(bf,{children:n.phone})]}),u.jsxs(vf,{children:[u.jsx(xf,{children:"E-mail"}),u.jsx(yf,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&u.jsx(bf,{children:n.email})]})]})},$7=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return u.jsxs("div",{style:{marginBottom:"20px"},children:[u.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),u.jsx(Wu,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&u.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},I7=e=>{if(!e)return"";const t=e.replace(/\D/g,"");return t.length!==10?e:`+38 (${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,8)}-${t.slice(8,10)}`},dx=async(e,t,n)=>{if(!(e!=null&&e.documentId)||!t)return;const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${e.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!r.ok)throw new Error("Не вдалося отримати кошик");const{data:i}=await r.json();await Promise.all(i.map(o=>fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}}))),n(nr())},fx={}.VITE_NP_API_KEY,px="https://api.novaposhta.ua/v2.0/json/",M7=()=>{const e=Ue(N=>N.cart.items),t=Ke(),n=It(),r=localStorage.getItem("token");console.log(e,"cartitmes");const i=y.useMemo(()=>{const N=localStorage.getItem("user");return N?JSON.parse(N):null},[]);console.log(i);const[o,a]=y.useState({fullName:"",phone:"+38(0",email:"",city:"",postOffice:""});console.log(o);const[l,s]=y.useState(""),[c,d]=y.useState(null),[f,v]=y.useState(null),[h,g]=y.useState(null),[x,w]=y.useState(null),[m,p]=y.useState([]),[b,C]=y.useState([]),[S,j]=y.useState(null),[E,_]=y.useState(!1);console.log("noCall",E);const $=y.useRef(!1);y.useEffect(()=>{!i||$.current||($.current=!0,a({fullName:`${i.last_name||""} ${i.first_name||""}`.trim(),phone:I7(i.phone),email:i.email||""}))},[i]);const I=e.filter(N=>N.available!==!1&&N.stock!==0).reduce((N,V)=>N+(V.new_price??V.price)*V.quantity,0),M=e.filter(N=>N.available!==!1&&N.stock!==0),D=e.filter(N=>N.available!==!1&&N.stock!==0).reduce((N,V)=>N+V.quantity,0),A=(()=>{const N=new Date().getFullYear().toString().slice(-2),V=Date.now().toString().slice(-4),H=Math.floor(100+Math.random()*900);return`${N}${V}${H}`})();y.useEffect(()=>{if(l.length<2)return;const N=setTimeout(async()=>{try{const V=await fetch(px,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:fx,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:l}})});if(!V.ok)throw new Error(`HTTP помилка: ${V.status}`);const H=await V.json();H.success&&Array.isArray(H.data)?p(H.data.map(G=>({value:G.Ref,label:G.Description}))):(console.warn("API Нової Пошти повернуло помилку або порожній список міст:",H.errors),p([]))}catch(V){console.error("Не вдалося завантажити міста:",V)}},500);return()=>clearTimeout(N)},[l]),y.useEffect(()=>{if(!c||f!=="nova")return;(async()=>{try{const V=await fetch(px,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:fx,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:c.value}})});if(!V.ok)throw new Error(`HTTP помилка: ${V.status}`);const H=await V.json();H.success&&Array.isArray(H.data)?C(H.data.map(G=>({value:G.Ref,label:G.Description}))):(console.warn("API Нової Пошти повернуло помилку або порожній список відділень:",H.errors),C([]))}catch(V){console.error("Не вдалося завантажити відділення Нової Пошти:",V)}})()},[c,f]);const L=N=>{d(N),a(V=>({...V,city:(N==null?void 0:N.label)||"",postOffice:""})),v(null),g(null),w(null)},R=()=>{const N={};return o.fullName.trim().split(" ").length<2&&(N.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(N.email="Некоректний email"),o.phone.replace(/\D/g,"").length<12&&(N.phone="Номер неповний"),c||(N.city=!0),f==="nova"&&!h&&(N.postOffice=!0),f==="ukr"&&!x&&(N.postOffice=!0),f||(N.delivery=!0),S||(N.payment=!0),N},z=y.useMemo(R,[o,f,h,x,c,S]),P=Object.keys(z).length===0&&e.length>0,O=async N=>{if(N.preventDefault(),!S){alert("Оберіть спосіб оплати");return}const V={"Content-Type":"application/json"};r&&(V.Authorization=`Bearer ${r}`);try{if(!(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:V,body:JSON.stringify({data:{name:o.fullName,phone:o.phone,email:o.email,city:o.city,date:new Date().toISOString(),products:e==null?void 0:e.map(W=>{var q;return{id:W==null?void 0:W.id,name:W==null?void 0:W.name,quantity:W==null?void 0:W.quantity,price:(W==null?void 0:W.new_price)??W.price,image:(q=W==null?void 0:W.images)==null?void 0:q[0].url,slug:W==null?void 0:W.slug}}),status_order:"pending",order_number:A,no_call:E,...(i==null?void 0:i.documentId)&&{user:i.documentId},payment_method:S==="liqpay"?"Онлайн (LiqPay)":S==="cod"?"Післяплата":S==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:f==="nova"?"Нова Пошта":f==="ukr"?"УкрПошта":"Самовивіз",delivery_address:f==="nova"?h==null?void 0:h.label:f==="ukr"?x:"Самовивіз"}})})).ok)throw new Error("Не вдалося створити замовлення");for(const W of e){const q=Math.max(0,W.stock-W.quantity);(await fetch(`https://backenddidiv-production.up.railway.app/api/products/${W.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",...r&&{Authorization:`Bearer ${r}`}},body:JSON.stringify({data:{stock:q,...q===0&&{sold_date:new Date().toISOString()}}})})).ok||console.error(`Не вдалося оновити stock товару ${W.name}`)}if(S==="liqpay"){const W=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:I,order_number:A})}),{data:q,signature:oe}=await W.json();await dx(i,r,n);const he=document.createElement("form");he.method="POST",he.action="https://www.liqpay.ua/api/3/checkout",he.innerHTML=`
        <input type="hidden" name="data" value="${q}" />
        <input type="hidden" name="signature" value="${oe}" />
      `,document.body.appendChild(he),he.requestSubmit();return}const G={...o,name:o.fullName,city:c.label,deliveryMethod:f==="nova"?"Нова Пошта":f==="ukr"?"УкрПошта":"Самовивіз",address:f==="nova"?h==null?void 0:h.label:f==="ukr"?x:"Самовивіз",products:e==null?void 0:e.map(W=>({id:W.id,name:W.name,quantity:W.quantity,price:W.new_price??W.price})),total:I,order_number:A,delivery_address:f==="nova"?h==null?void 0:h.label:f==="ukr"?x:"Самовивіз",payment_method:S==="liqpay"?"Онлайн (LiqPay)":S==="cod"?"Післяплата":S==="bank_transfer"?"Оплата за реквізитами":""};await dx(i,r,n),t("/order-confirmation",{state:{order:G}})}catch(H){console.error(H),alert("Помилка оформлення")}},F=y.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),B=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return u.jsx(i7,{children:u.jsxs(o7,{children:[u.jsxs(a7,{children:[u.jsx(O7,{formData:o,setFormData:a,errors:z}),u.jsx(VN,{cityOptions:m,selectedCity:c,onChange:L,onInputChange:s}),u.jsx(HN,{options:F,value:f,onChange:v,selectedCity:c}),u.jsx(GN,{deliveryMethod:f,officeOptions:b,selectedOffice:h,selectedUkrOffice:x,setSelectedOffice:g,setSelectedUkrOffice:w}),u.jsx($7,{options:B,value:S,onChange:j,error:z.payment})]}),u.jsx(u7,{cartItems:M,totalAmount:I,totalQuantity:D,isFormValid:P,handleSubmit:O,setNoCall:_,noCall:E})]})})},D7=k.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,L7=k.h1`
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
`,A7=k.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,R7=k.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,z7=k.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,F7=k.li`
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
`;const N7=k.div`
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
`,B7=()=>{var v,h;const e=Ke(),t=Dn(),[n]=Jx(),r=It(),i=(v=t.state)==null?void 0:v.order,o=n.get("orderId"),[a,l]=y.useState(i||null),[s,c]=y.useState(!i);y.useEffect(()=>{r(nr())},[r]),y.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(g=>g.json()).then(g=>{var x;((x=g.data)==null?void 0:x.length)>0&&l(g.data[0]),c(!1)}).catch(()=>c(!1)):c(!1))},[o,i]);const f=((a==null?void 0:a.products)??[]).reduce((g,x)=>g+Number(x.new_price??x.price)*(x.quantity||1),0);return s?u.jsx("div",{children:"Завантаження..."}):a?u.jsxs(D7,{children:[u.jsx(L7,{children:"Дякуємо за ваше замовлення!"}),u.jsxs(zr,{children:["Ваше замовлення ",u.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),u.jsx(zr,{children:"Ми зв’яжемось з Вами в найближчий час"}),u.jsxs(A7,{children:[u.jsx(R7,{children:"Деталі замовлення:"}),u.jsx(z7,{children:(h=a.products)==null?void 0:h.map(g=>u.jsxs(F7,{children:[u.jsxs("span",{className:"item-info",children:[g.name," (x",g.quantity,")"]}),u.jsxs("span",{className:"item-price",children:[(g.new_price??g.price)*(g.quantity||1)," грн"]})]},g.id))}),u.jsxs(zr,{children:[u.jsx("strong",{children:"На суму:"})," ",f," грн."]}),u.jsxs(zr,{children:[u.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),u.jsxs(zr,{children:[u.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),u.jsxs(zr,{children:[u.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),u.jsxs(zr,{children:[u.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),u.jsxs(N7,{children:[u.jsx(hx,{onClick:()=>e("/"),children:"Повернутися на головну"}),u.jsx(hx,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):u.jsxs("div",{children:["Замовлення не знайдено",u.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},V7=k.section`
  background-color: var(--second-background);
`,U7=k.div`
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
`,W7=k.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,H7=k.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,G7=k.p`

  font-size: 16px;
  color: #666;
`,q7=k.section`
  margin-bottom: 50px;
`,Y7=k.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,X7=k.section`
  margin-bottom: 60px;
`,K7=k.h2`
  margin-bottom: 30px;
`,Q7=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Rs=k.div`
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
`,Z7=()=>u.jsxs(V7,{children:[u.jsxs(U7,{children:[u.jsxs(W7,{children:[u.jsx(H7,{children:"Про Дідів Хлів"}),u.jsx(G7,{children:"Даємо друге життя якісним велозапчастинам"})]}),u.jsxs(q7,{children:[u.jsx(Y7,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),u.jsx(X2,{})]}),u.jsxs(X7,{children:[u.jsx(K7,{children:"Наша майстерня"}),u.jsxs(Q7,{children:[u.jsx(Rs,{color:"#e2e2e2",children:"Фото майстерні"}),u.jsx(Rs,{color:"#d1d1d1",children:"Процес діагностики"}),u.jsx(Rs,{color:"#bcbcbc",children:"Склад запчастин"}),u.jsx(Rs,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),J7=()=>{const{pathname:e}=Dn();return y.useEffect(()=>{window.scrollTo(0,0)},[e]),null},e9=k.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,t9=k.div`
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
`,n9=k.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,r9=k.p`
  color: #585555;
  margin-bottom: 40px;
`,i9=k.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,o9=k.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,zs=k.div`
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
`,a9=k.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,s9=k.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,l9=k.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,c9=k.div`
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
`;const u9=k.div`
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

 
`,d9=()=>u.jsx(e9,{children:u.jsxs(t9,{children:[u.jsx(n9,{children:"Контакти"}),u.jsx(r9,{children:"Зв’яжіться з нами для консультації або замовлення"}),u.jsxs(i9,{children:[u.jsxs(o9,{children:[u.jsxs(zs,{children:[u.jsx("h3",{children:"Адреса"}),u.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),u.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),u.jsxs(zs,{children:[u.jsx("h3",{children:"Телефон"}),u.jsx("p",{children:"+38 (097) 123-45-67"})]}),u.jsxs(zs,{children:[u.jsx("h3",{children:"Email"}),u.jsx("p",{children:"didivhliv.com"})]}),u.jsxs(zs,{children:[u.jsx("h3",{children:"Графік роботи"}),u.jsx("p",{children:"З 11:00 - 20:00"}),u.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),u.jsxs(a9,{children:[u.jsx(s9,{children:"Ми в соцмережах"}),u.jsx(l9,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),u.jsxs(c9,{children:[u.jsxs(mx,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-instagram`})}),u.jsx("span",{children:"Instagram"})]}),u.jsxs(mx,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-telegram`})}),u.jsx("span",{children:"Telegram"})]})]}),u.jsx(u9,{children:"Приєднуйся до спільноти!"})]})]})]})}),f9=k.section`
  background-color:  var(--second-background);
`,p9=k.div`
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
  
`,h9=k.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,m9=k.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,g9=k.div`
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
`,v9=k.div`
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
`,x9=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;

`,y9=k.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,b9=k.p`
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
`;const w9=k.div.attrs({className:"card-buttons"})`
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
`,bk=k.div`
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
`,S9=k.div`
  position: relative;
  display: inline-block;
  

`,C9=k.button`
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
`,k9=k.div`
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
`,wk=k.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,Sk=k(je)`
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
  
`,_9=k.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,E9=k.div`
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
`,j9=k.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,P9=k.h1`

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

`,T9=k.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,O9=k.div`
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
`;const Ck=k.div`
  position: relative;
`,$9=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 padding: 10px;
`,I9=k.p`
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
`,M9=k.div`
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
`;const D9=k.div.attrs({className:"card-buttons"})`
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
`,wc=k.button`
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
`;const L9=k.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,A9=k.div`
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
`,R9=k.button`
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
`,z9=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(!0),i=Ue(S=>S.favorites.items),o=Ue(S=>S.cart.items),[a,l]=y.useState(!1),[s,c]=y.useState("date"),[d,f]=y.useState("asc"),[v,h]=y.useState(1),[g,x]=y.useState(1),w=Ke(),m=It(),p=y.useRef(null);y.useEffect(()=>{const S=j=>{p.current&&!p.current.contains(j.target)&&l(!1)};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[]),y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[v]),y.useEffect(()=>{(async()=>{const j=new Date,E=new Date;E.setDate(j.getDate()-7);const _=E.toISOString();try{r(!0);const $=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${_}&pagination[page]=${v}&pagination[pageSize]=24`);if(!$.ok)throw new Error(`HTTP error! Status: ${$.status}`);const I=await $.json();t(I.data),x(I.meta.pagination.pageCount)}catch($){console.error("Помилка при завантаженні продуктів:",$)}finally{r(!1)}})()},[v]);const b=y.useMemo(()=>{const S=[...e],j=E=>E.new_price&&E.new_price<E.price?E.new_price:E.price;switch(s){case"name":return S.sort((E,_)=>d==="asc"?E.name.localeCompare(_.name):_.name.localeCompare(E.name));case"price":return S.sort((E,_)=>{const $=j(E),I=j(_);return d==="asc"?$-I:I-$});case"date":return S.sort((E,_)=>d==="asc"?new Date(E.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(E.createdAt));default:return S}},[s,e,d]),C=(S,j)=>{j.stopPropagation();const E=i.some(_=>_.id===(S==null?void 0:S.id));di(S,E,m,K)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):b.length===0?u.jsxs(wk,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),u.jsxs(Sk,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Gc,{size:24})]})]}):u.jsxs(f9,{children:[u.jsxs(p9,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(h9,{children:[u.jsx(m9,{children:"Нові товари "}),u.jsxs(S9,{ref:p,children:[u.jsxs(C9,{onClick:()=>l(S=>!S),children:["Сортування",u.jsx(Hc,{strokeWidth:.9,size:22})]}),a&&u.jsxs(k9,{children:[u.jsx(_i,{onClick:()=>{c("name"),f("asc"),l(!1)},children:"А-Я"}),u.jsx(_i,{onClick:()=>{c("name"),f("desc"),l(!1)},children:"Я-А"}),u.jsx(_i,{onClick:()=>{c("price"),f("asc"),l(!1)},children:"Ціна ↑"}),u.jsx(_i,{onClick:()=>{c("price"),f("desc"),l(!1)},children:"Ціна ↓"}),u.jsx(_i,{onClick:()=>{c("date"),f("desc"),l(!1)},children:"Спочатку новіші"}),u.jsx(_i,{onClick:()=>{c("date"),f("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(g9,{children:b.map(S=>{var R,z;const j=i.some(P=>P.id===S.id),E=(S==null?void 0:S.available)??!0,_=(S==null?void 0:S.stock)===0,$=o.find(P=>P.id===S.id),M=($?$.quantity:0)>=(S.stock||0),D=S.new_price&&S.new_price<S.price,T=D?S.new_price:S.price,A=D?Math.round((S.price-S.new_price)/S.price*100):0,L=async(P,O)=>{if(O.stopPropagation(),M){K.error("Товар уже у кошику");return}await yo(P,1,m,K)};return u.jsxs(v9,{onClick:()=>w(`/product/${S.slug??S.id}`),$soldOut:_,children:[!E&&u.jsx(xm,{children:"Бронь"}),u.jsx(ym,{children:"Новинка"}),u.jsxs(Ck,{children:[_&&u.jsx(Kc,{children:"Продано"}),u.jsx(x9,{src:((z=(R=S.images)==null?void 0:R[0])==null?void 0:z.url)||er,alt:S.name})]}),u.jsx(b9,{children:S.name}),u.jsxs(y9,{children:[u.jsx(Ru,{children:u.jsxs(zu,{children:[u.jsxs(Fu,{$discount:D,children:[T.toLocaleString()," грн"]}),D&&u.jsxs(Nu,{children:[S.price.toLocaleString()," грн"]}),D&&u.jsxs(Bu,{children:["-",A,"%"]})]})}),u.jsxs(w9,{children:[E&&!_&&u.jsx(wc,{onClick:P=>L(S,P),children:u.jsx(xo,{size:24,color:$?"var(--orange-color)":"black",strokeWidth:2})}),!_&&u.jsx(wc,{onClick:P=>C(S,P),children:u.jsx(Ka,{size:24,fill:j?"#ff4d4f":"none",color:j?"#ff4d4f":"#000000",strokeWidth:j?1:2})})]})]})]},S.id)})}),u.jsxs(bk,{children:[u.jsx(Yi,{onClick:()=>h(S=>Math.max(S-1,1)),disabled:v===1,children:"Назад"}),Array.from({length:g},(S,j)=>u.jsx(Yi,{onClick:()=>h(j+1),active:v===j+1,children:j+1},j)),u.jsx(Yi,{onClick:()=>h(S=>Math.min(S+1,g)),disabled:v===g,children:"Вперед"})]})]})," "]})},F9=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(!0),[i,o]=y.useState(!1),[a,l]=y.useState("date"),[s,c]=y.useState("desc"),[d,f]=y.useState(1),v=24,h=Ke(),g=It(),x=Ue(_=>_.favorites.items),w=Ue(_=>_.cart.items),m=y.useRef(null);y.useEffect(()=>{const _=$=>{m.current&&!m.current.contains($.target)&&o(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),y.useEffect(()=>{(async()=>{const $="https://backenddidiv-production.up.railway.app";try{const M=await(await fetch(`${$}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json(),D=Date.now(),T=7*24*60*60*1e3,A=M.data.filter(L=>{if(L.stock>0||!L.sold_date)return!0;const R=new Date(L.sold_date).getTime();return D-R<T});t(A),r(!1)}catch(I){console.log(I)}})()},[]),y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[d]);const p=y.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort(($,I)=>s==="asc"?$.name.localeCompare(I.name):I.name.localeCompare($.name));case"price":return _.sort(($,I)=>s==="asc"?$.new_price-I.new_price:I.new_price-$.new_price);case"date":return _.sort(($,I)=>s==="asc"?new Date($.createdAt)-new Date(I.createdAt):new Date(I.createdAt)-new Date($.createdAt));default:return _}},[a,e,s]),b=d*v,C=b-v,S=p.slice(C,b),j=Math.ceil(e.length/v),E=(_,$)=>{$.stopPropagation();const I=x.some(M=>M.id===(_==null?void 0:_.id));di(_,I,g,K)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?u.jsxs(wk,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),u.jsxs(Sk,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Gc,{size:24})]})]}):u.jsx(_9,{children:u.jsxs(E9,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(j9,{children:[u.jsx(P9,{children:"Акційні товари"}),u.jsxs(L9,{ref:m,children:[u.jsxs(R9,{onClick:()=>o(_=>!_),children:["Сортування",u.jsx(Hc,{strokeWidth:.9,size:22})]}),i&&u.jsxs(A9,{children:[u.jsx(Ei,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),u.jsx(Ei,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),u.jsx(Ei,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),u.jsx(Ei,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),u.jsx(Ei,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),u.jsx(Ei,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(T9,{children:S.map(_=>{var F,B;const $=_.new_price&&_.new_price<_.price,I=_!=null&&_.createdAt?Date.now()-new Date(_.createdAt).getTime()<7*24*60*60*1e3:!1,M=$?_.new_price:_.price,D=(_==null?void 0:_.available)??!0,T=(_==null?void 0:_.stock)===0,A=$?Math.round((_.price-_.new_price)/_.price*100):0,L=x.some(N=>N.id===_.id),R=w.find(N=>N.id===_.id),P=(R?R.quantity:0)>=(_.stock||0),O=async(N,V)=>{if(V.stopPropagation(),P){K.error("Товар уже у кошику");return}await yo(_,1,g,K)};return u.jsxs(O9,{onClick:()=>h(`/product/${_.slug??_.id}`),style:{cursor:"pointer"},$soldOut:T,children:[" ",I&&u.jsx(ym,{children:"Новинка"}),!D&&u.jsx(xm,{children:"Бронь"}),u.jsxs(Ck,{children:[T&&u.jsx(Kc,{children:"Продано"}),u.jsx($9,{src:((B=(F=_.images)==null?void 0:F[0])==null?void 0:B.url)||"/nofoto.png"})]}),u.jsx(I9,{children:_.name}),u.jsxs(M9,{children:[u.jsx(Ru,{children:u.jsxs(zu,{children:[u.jsxs(Fu,{$discount:$,children:[M.toLocaleString()," грн"]}),$&&u.jsxs(Nu,{children:[_.price.toLocaleString()," грн"]}),$&&u.jsxs(Bu,{children:["-",A,"%"]})]})}),u.jsxs(D9,{children:[D&&!T&&u.jsx(wc,{onClick:N=>O(_,N),children:u.jsx(xo,{size:24,color:R?"var(--orange-color)":"black",strokeWidth:2})}),!T&&u.jsx(wc,{onClick:N=>E(_,N),children:u.jsx(Ka,{size:24,fill:L?"#ff4d4f":"none",color:L?"#ff4d4f":"#000000",strokeWidth:L?1:2})})]})]})]},_.id)})}),p.length>v&&u.jsxs(bk,{children:[u.jsx(Yi,{onClick:()=>f(_=>Math.max(_-1,1)),disabled:d===1,children:"Назад"}),Array.from({length:j},(_,$)=>u.jsx(Yi,{onClick:()=>f($+1),active:d===$+1,children:$+1},$)),u.jsx(Yi,{onClick:()=>f(_=>Math.min(_+1,j)),disabled:d===j,children:"Вперед"})]})]})})},N9=k.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;

`,B9=k.div`
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
`,V9=k.button`
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
`,U9=k.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width:768px){
    font-size:42px;
  }
`,W9=k.p`
  text-align:center;
  color:#8d837d;

  margin-bottom:32px;
`,H9=k.div`
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
`,G9=k.button`
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
`,q9=k.p`
  margin-top:28px;

  text-align:center;

  color:#8b817a;

  font-size:15px;

  span{
      color:#ff7a00;
      cursor:pointer;
      font-weight:600;
  }
`,Y9=k.p`
  margin-bottom:20px;

  text-align:center;

  color:#8b817a;

  font-size:15px;

  span{
      color:#ff7a00;
      cursor:pointer;
      font-weight:600;
  }
`,Ho=k.p`
  margin: -8px 0 8px;
  color: var(--red-color);
  font-size: 15px;
  margin-bottom: 20px;
`,X9=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[product][documentId][$eq]=${r.documentId}&populate=user`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=l.user||[];if(s.some(f=>f.documentId===n))return;const d=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{user:[...s.map(f=>f.documentId),n]}})});d.ok||console.error(await d.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:[n]}})});a.ok||console.error(await a.json())}))},K9=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${n}&filters[product][documentId][$eq]=${r.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{quantity:r.quantity}})});s.ok||console.error(await s.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:n,quantity:r.quantity}})});a.ok||console.error(await a.json())}))},Q9=async(e,t)=>{const n=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${t}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${e}`}});if(!n.ok)throw new Error("Не вдалося отримати кошик");return(await n.json()).data.map(i=>i.product?{...i.product,quantity:i.quantity}:null).filter(Boolean)},Z9=({isOpen:e,onClose:t,mode:n,setMode:r,localFavorites:i,localCartItems:o})=>{const[a,l]=y.useState(!1),[s,c]=y.useState(!1),[d,f]=y.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""});console.log(d);const[v,h]=y.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),g=It();if(y.useEffect(()=>{const C=S=>{S.key==="Escape"&&t()};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[t]),!e)return null;const x=C=>{const{name:S,value:j}=C.target;h(E=>({...E,[S]:j})),f(E=>({...E,[S]:""}))},w=C=>{C.target===C.currentTarget&&t()},m=async()=>{f({first_name:"",last_name:"",email:"",password:"",confirmPassword:""});const C=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:v.email,password:v.password})}),S=await C.json();if(!C.ok){f({email:"Неправильна електронна пошта або пароль",password:"Неправильна електронна пошта або пароль",confirmPassword:""});return}localStorage.setItem("token",S.jwt),localStorage.setItem("user",JSON.stringify(S.user)),await X9(i,S.jwt,S.user.documentId),await K9(o,S.jwt,S.user.documentId);const j=await Q9(S.jwt,S.user.documentId);g(dS(j)),t()},p=async()=>{var E,_,$,I,M,D;f({email:"",password:"",confirmPassword:""});const C=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!v.first_name.trim()){f(T=>({...T,first_name:"Введіть ім'я"}));return}if(!v.last_name.trim()){f(T=>({...T,last_name:"Введіть прізвище"}));return}if(!v.email.trim()){f(T=>({...T,email:"Введіть електронну пошту"}));return}if(!C.test(v.email)){f(T=>({...T,email:"Введіть правильну електронну пошту"}));return}if(!v.password){f(T=>({...T,password:"Введіть пароль"}));return}if(v.password.length<6){f(T=>({...T,password:"Пароль має містити щонайменше 6 символів"}));return}if(v.password!==v.confirmPassword){f(T=>({...T,confirmPassword:"Паролі не співпадають"}));return}const S=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:v.email,email:v.email,password:v.password})}),j=await S.json();if(!S.ok){(_=(E=j.error)==null?void 0:E.message)!=null&&_.toLowerCase().includes("already")||(I=($=j.error)==null?void 0:$.message)!=null&&I.toLowerCase().includes("taken")||(D=(M=j.error)==null?void 0:M.message)!=null&&D.toLowerCase().includes("email")?f(T=>({...T,email:"Ця пошта вже зареєстрована"})):f(T=>{var A;return{...T,email:((A=j.error)==null?void 0:A.message)||"Не вдалося зареєструватися"}});return}localStorage.setItem("token",j.jwt);try{const T=localStorage.getItem("token");localStorage.setItem("user",JSON.stringify(j.user));const A=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${j.user.id}`,{method:"PUT",headers:{Authorization:`Bearer ${T}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:v.first_name,last_name:v.last_name})});if(!A.ok)throw new Error("Помилка оновлення");const L=await A.json();localStorage.setItem("user",JSON.stringify(L))}catch(T){console.error(T),alert("Не вдалося оновити дані")}t()},b=async()=>{if(f({email:"",password:"",confirmPassword:""}),!v.email.trim()){f(S=>({...S,email:"Введіть електронну пошту"}));return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)){f(S=>({...S,email:"Введіть правильну електронну пошту"}));return}try{const S=await fetch("https://backenddidiv-production.up.railway.app/api/auth/forgot-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:v.email})}),j=await S.json();if(console.log("Forgot password response:",j),!S.ok){f(E=>{var _;return{...E,email:((_=j.error)==null?void 0:_.message)||"Не вдалося надіслати лист"}});return}alert("Лист для відновлення пароля надіслано на вашу пошту")}catch(S){console.error(S),f(j=>({...j,email:"Помилка з’єднання із сервером"}))}};return u.jsxs(u.Fragment,{children:[" ",u.jsx(Ln,{autoClose:1500}),u.jsx(N9,{onClick:w,children:u.jsxs(B9,{children:[u.jsx(V9,{onClick:t,children:"×"}),u.jsx(U9,{children:n==="login"?"Вхід":n==="register"?"Реєстрація":"Відновлення пароля"}),u.jsx(W9,{children:n==="login"?"Увійдіть до свого акаунта":n==="register"?"Створіть новий акаунт":"Введіть email, щоб отримати посилання для відновлення пароля"}),u.jsxs(H9,{children:[u.jsx(gx,{active:n==="login",onClick:()=>r("login"),children:"Вхід"}),u.jsx(gx,{active:n==="register",onClick:()=>r("register"),children:"Реєстрація"})]}),n==="register"&&u.jsxs(u.Fragment,{children:[u.jsx(Wo,{name:"first_name",value:v.first_name,onChange:x,placeholder:"Ім'я"}),d.first_name&&u.jsx(Ho,{children:d.first_name}),u.jsx(Wo,{name:"last_name",value:v.last_name,onChange:x,placeholder:"Прізвище"}),d.last_name&&u.jsx(Ho,{children:d.last_name})]}),u.jsx(Wo,{name:"email",type:"email",value:v.email,onChange:x,placeholder:"Email"}),d.email&&u.jsx(Ho,{children:d.email}),n!=="forgotPassword"&&u.jsxs(u.Fragment,{children:[u.jsxs(vx,{children:[u.jsx(Wo,{name:"password",type:a?"text":"password",value:v.password,onChange:x,placeholder:"Пароль"}),u.jsx(xx,{type:"button",onClick:()=>l(C=>!C),children:a?u.jsx(Xl,{size:20}):u.jsx(Kl,{size:20})})]}),d.password&&u.jsx(Ho,{children:d.password})]}),n==="register"&&u.jsxs(vx,{children:[u.jsx(Wo,{name:"confirmPassword",type:s?"text":"password",value:v.confirmPassword,onChange:x,placeholder:"Повторіть пароль"}),u.jsx(xx,{type:"button",onClick:()=>c(C=>!C),children:s?u.jsx(Xl,{size:20}):u.jsx(Kl,{size:20})})]}),d.confirmPassword&&u.jsx(Ho,{children:d.confirmPassword}),n==="login"&&u.jsx(Y9,{children:u.jsx("span",{onClick:()=>r("forgotPassword"),children:"Забули пароль?"})}),u.jsx(G9,{onClick:n==="login"?m:n==="register"?p:b,children:n==="login"?"Увійти":n==="register"?"Зареєструватися":"Надіслати посилання"}),u.jsx(q9,{children:n==="login"?u.jsxs(u.Fragment,{children:["Немає акаунта?"," ",u.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):u.jsxs(u.Fragment,{children:["Вже є акаунт?"," ",u.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})," "]})},J9=({isLoggedIn:e,children:t})=>e?t:u.jsx(U_,{to:"/",replace:!0}),eB=k.main`
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

`,tB=k.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`,nB=k.aside`
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
`,rB=k.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,iB=k.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,oB=k.h3`
  margin-bottom: 4px;
`,aB=k.p`
  color: #777;
`,yx=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Fs=k(Zx)`
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
`,sB=k.div`
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
`,lB=k.div`
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
`,cB=k.h2`
  margin: 0 0 14px;

  text-align: center;

  color:var(--black-color);
  font-family: var(--second-font);

  font-size: 28px;
  font-weight: 300;
`,uB=k.p`
  margin: 0 auto 32px;
   font-family: var(--second-font);

  max-width: 360px;

  text-align: center;

  color: #3c3734;

  font-size: 16px;
  line-height: 1.6;
`,dB=k.div`
  display: flex;
  gap: 14px;

  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,fB=k.button`
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
`,pB=k.button`
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
`,kk=({onClose:e,onConfirm:t})=>u.jsx(sB,{onClick:e,children:u.jsxs(lB,{onClick:n=>n.stopPropagation(),children:[u.jsx(cB,{children:"Вийти з акаунту?"}),u.jsx(uB,{children:"Ви впевнені, що хочете вийти з особистого кабінету?"}),u.jsxs(dB,{children:[u.jsx(fB,{onClick:e,children:"Скасувати"}),u.jsx(pB,{onClick:t,children:"Вийти"})]})]})}),hB=()=>{var c,d;const[e,t]=y.useState(""),[n,r]=y.useState(""),[i,o]=y.useState(!1),a=It(),l=Ke();y.useEffect(()=>{(async()=>{try{const v=localStorage.getItem("token"),g=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${v}`}})).json();t(g.first_name),r(g.email)}catch(v){console.error(v)}})()},[]);const s=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),a(es()),a(nr()),await Au.purge(),l("/",{replace:!0})};return u.jsxs(nB,{children:[i&&u.jsx(kk,{onClose:()=>o(!1),onConfirm:s}),u.jsxs(rB,{children:[u.jsx(iB,{children:((d=(c=e||e)==null?void 0:c[0])==null?void 0:d.toUpperCase())||"?"}),u.jsxs("div",{children:[u.jsx(oB,{children:e}),u.jsx(aB,{children:n})]})]}),u.jsxs(yx,{children:[u.jsxs(yx,{children:[u.jsx(Fs,{to:"/account/profile",children:"Особисті дані"}),u.jsx(Fs,{to:"/account/orders",children:"Замовлення"}),u.jsx(Fs,{to:"/account/password",children:"Змінити пароль"})]}),u.jsx(Fs,{as:"button",className:"logout",onClick:()=>o(!0),children:"Вийти"})]})]})};var gg={};gg.match=bB;gg.parse=_k;var mB=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,gB=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,vB=/^(?:(min|max)-)?(.+)/,xB=/(em|rem|px|cm|mm|in|pt|pc)?$/,yB=/(dpi|dpcm|dppx)?$/;function bB(e,t){return _k(e).some(function(n){var r=n.inverse,i=n.type==="all"||t.type===n.type;if(i&&r||!(i||r))return!1;var o=n.expressions.every(function(a){var l=a.feature,s=a.modifier,c=a.value,d=t[l];if(!d)return!1;switch(l){case"orientation":case"scan":return d.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=Sx(c),d=Sx(d);break;case"resolution":c=wx(c),d=wx(d);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=bx(c),d=bx(d);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,d=parseInt(d,10)||0;break}switch(s){case"min":return d>=c;case"max":return d<=c;default:return d===c}});return o&&!r||!o&&r})}function _k(e){return e.split(",").map(function(t){t=t.trim();var n=t.match(mB),r=n[1],i=n[2],o=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(l){var s=l.match(gB),c=s[1].toLowerCase().match(vB);return{modifier:c[1],feature:c[2],value:s[2]}}),a})}function bx(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function wx(e){var t=parseFloat(e),n=String(e).match(yB)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function Sx(e){var t=parseFloat(e),n=String(e).match(xB)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var wB=gg.match,Cx=typeof window<"u"?window.matchMedia:null;function SB(e,t,n){var r=this,i;Cx&&!n&&(i=Cx.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=wB(e,t),this.media=e),this.addListener=o,this.removeListener=a,this.dispose=s;function o(c){i&&i.addListener(c)}function a(c){i&&i.removeListener(c)}function l(c){r.matches=c.matches,r.media=c.media}function s(){i&&i.removeListener(l)}}function CB(e,t,n){return new SB(e,t,n)}var kB=CB;const _B=Va(kB);var EB=/[A-Z]/g,jB=/^ms-/,wf={};function PB(e){return"-"+e.toLowerCase()}function Ek(e){if(wf.hasOwnProperty(e))return wf[e];var t=e.replace(EB,PB);return wf[e]=jB.test(t)?"-"+t:t}function TB(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let o=0;o<i;o++){const a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var jk={exports:{}},OB="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$B=OB,IB=$B;function Pk(){}function Tk(){}Tk.resetWarningCache=Pk;var MB=function(){function e(r,i,o,a,l,s){if(s!==IB){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Tk,resetWarningCache:Pk};return n.PropTypes=n,n};jk.exports=MB();var DB=jk.exports;const pe=Va(DB),ht=pe.oneOfType([pe.string,pe.number]),vg={all:pe.bool,grid:pe.bool,aural:pe.bool,braille:pe.bool,handheld:pe.bool,print:pe.bool,projection:pe.bool,screen:pe.bool,tty:pe.bool,tv:pe.bool,embossed:pe.bool},Ok={orientation:pe.oneOf(["portrait","landscape"]),scan:pe.oneOf(["progressive","interlace"]),aspectRatio:pe.string,deviceAspectRatio:pe.string,height:ht,deviceHeight:ht,width:ht,deviceWidth:ht,color:pe.bool,colorIndex:pe.bool,monochrome:pe.bool,resolution:ht,type:Object.keys(vg)},{type:LV,...LB}=Ok,$k={minAspectRatio:pe.string,maxAspectRatio:pe.string,minDeviceAspectRatio:pe.string,maxDeviceAspectRatio:pe.string,minHeight:ht,maxHeight:ht,minDeviceHeight:ht,maxDeviceHeight:ht,minWidth:ht,maxWidth:ht,minDeviceWidth:ht,maxDeviceWidth:ht,minColor:pe.number,maxColor:pe.number,minColorIndex:pe.number,maxColorIndex:pe.number,minMonochrome:pe.number,maxMonochrome:pe.number,minResolution:ht,maxResolution:ht,...LB},AB={...vg,...$k};var RB={all:AB,types:vg,matchers:Ok,features:$k};const zB=e=>`not ${e}`,FB=(e,t)=>{const n=Ek(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?zB(n):`(${n}: ${t})`},NB=e=>e.join(" and "),BB=e=>{const t=[];return Object.keys(RB.all).forEach(n=>{const r=e[n];r!=null&&t.push(FB(n,r))}),NB(t)},VB=y.createContext(void 0),UB=e=>e.query||BB(e),kx=e=>e?Object.keys(e).reduce((n,r)=>(n[Ek(r)]=e[r],n),{}):void 0,Ik=()=>{const e=y.useRef(!1);return y.useEffect(()=>{e.current=!0},[]),e.current},WB=e=>{const t=y.useContext(VB),n=()=>kx(e)||kx(t),[r,i]=y.useState(n);return y.useEffect(()=>{const o=n();TB(r,o)||i(o)},[e,t]),r},HB=e=>{const t=()=>UB(e),[n,r]=y.useState(t);return y.useEffect(()=>{const i=t();n!==i&&r(i)},[e]),n},GB=(e,t)=>{const n=()=>_B(e,t||{},!!t),[r,i]=y.useState(n),o=Ik();return y.useEffect(()=>{if(o){const a=n();return i(a),()=>{a&&a.dispose()}}},[e,t]),r},qB=e=>{const[t,n]=y.useState(e.matches);return y.useEffect(()=>{const r=i=>{n(i.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},YB=(e,t,n)=>{const r=WB(t),i=HB(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const o=GB(i,r),a=qB(o),l=Ik();return y.useEffect(()=>{l&&n&&n(a)},[a]),y.useEffect(()=>()=>{o&&o.dispose()},[]),a},XB=k.div`
  margin-bottom: 24px;
`,KB=k.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,QB=k.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,ZB=k.h3`
  margin-bottom: 4px;
`,JB=k.p`
  color: #777;
`,eV=k.button`
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
`,tV=k.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`,Ns=k(Zx)`
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
`,nV=()=>{var g,x;const[e,t]=y.useState(!1),[n,r]=y.useState(!1),[i,o]=y.useState(""),[a,l]=y.useState(""),s=It(),c=Ke(),d=Dn(),f=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),s(es()),s(nr()),await Au.purge(),c("/",{replace:!0})};y.useEffect(()=>{(async()=>{try{const m=localStorage.getItem("token"),b=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${m}`}})).json();o(b.first_name),l(b.email)}catch(m){console.error(m)}})()},[]);const h={"/account":"Особисті дані","/account/profile":"Особисті дані","/account/orders":"Замовлення","/account/favorites":"Обране","/account/password":"Змінити пароль"}[d.pathname]||"Особисті дані";return u.jsxs(XB,{children:[n&&u.jsx(kk,{onClose:()=>r(!1),onConfirm:f}),u.jsxs(KB,{children:[u.jsx(QB,{children:((x=(g=i||i)==null?void 0:g[0])==null?void 0:x.toUpperCase())||"?"}),u.jsxs("div",{children:[u.jsx(ZB,{children:i}),u.jsx(JB,{children:a})]})]}),u.jsxs(eV,{onClick:()=>t(w=>!w),children:[h,e?u.jsx(PO,{size:22}):u.jsx(EO,{size:22})]}),e&&u.jsxs(tV,{children:[u.jsx(Ns,{to:"/account/profile",onClick:()=>t(!1),children:"Особисті дані"}),u.jsx(Ns,{to:"/account/orders",onClick:()=>t(!1),children:"Замовлення"}),u.jsx(Ns,{to:"/account/password",onClick:()=>t(!1),children:"Змінити пароль"}),u.jsx(Ns,{className:"logout",onClick:()=>r(!0),children:"Вийти"})]})]})},rV=()=>{const e=YB({maxWidth:767});return u.jsxs(eB,{className:"container",children:[e?u.jsx(nV,{}):u.jsx(hB,{}),u.jsx(tB,{children:u.jsx(Kx,{})})]})},iV=k.div`
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
`,oV=k.h2`
  margin-bottom: 28px;
`,Bs=k.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,Vs=k.input`
  height: 52px;

  padding: 0 18px;

  border-radius: 14px;
  border: 1px solid #ddd;

  &:focus {
    outline: none;
    border-color: #ef7d1a;
  }
`,aV=k.button`
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
`,_x=()=>{const[e,t]=y.useState({first_name:"",last_name:"",email:"",phone:""}),[n,r]=y.useState({first_name:"",last_name:"",email:"",phone:""}),[i,o]=y.useState(null),[a,l]=y.useState(!0),s=Ke();y.useEffect(()=>{(async()=>{try{const h=localStorage.getItem("token"),g=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${h}`}});if(g.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),s("/login",{replace:!0});return}if(!g.ok)throw new Error(`HTTP error: ${g.status}`);const x=await g.json();o(x.id);const w={first_name:x.first_name||"",last_name:x.last_name||"",email:x.email||"",phone:x.phone||""};r(w),t(w)}catch(h){console.error(h)}finally{l(!1)}})()},[s]);const c=v=>{const{name:h,value:g}=v.target;r(x=>({...x,[h]:g}))},d=n.first_name!==e.first_name||n.last_name!==e.last_name||n.phone!==e.phone,f=async()=>{try{const v=localStorage.getItem("token"),h=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${i}`,{method:"PUT",headers:{Authorization:`Bearer ${v}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:n.first_name,last_name:n.last_name,phone:n.phone})});if(!h.ok)throw new Error("Помилка оновлення");const g=await h.json();localStorage.setItem("user",JSON.stringify(g)),t(n),K.success("Дані оновлено успішно")}catch(v){console.error(v),K.error("Не вдалось оновити дані")}};return a?u.jsx("p",{children:"Завантаження..."}):u.jsxs(iV,{children:[u.jsx(Ln,{autoClose:1500}),u.jsx(oV,{children:"Особисті дані"}),u.jsxs(Bs,{children:["Ім я",u.jsx(Vs,{name:"first_name",value:n.first_name,onChange:c})]}),u.jsxs(Bs,{children:["Прізвище",u.jsx(Vs,{name:"last_name",value:n.last_name,onChange:c})]}),u.jsxs(Bs,{children:["Email",u.jsx(Vs,{value:n.email,disabled:!0})]}),u.jsxs(Bs,{children:["Телефон",u.jsx(Vs,{name:"phone",value:n.phone,onChange:c})]}),u.jsx(aV,{onClick:f,disabled:!d,children:"Зберегти"})]})},sV=k.div`
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
`,lV=k.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,cV=k.div`
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
     box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  text-align: left;
`,uV=k.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 24px;
`,dV=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,fV=k.div`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`,pV=k.div`
  display: flex;
  flex-direction: column;
      align-items: flex-start;
      align-items: flex-start;
       gap: 8px;
`,hV=k.div`
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
`,mV=k.span`
  font-family: var(--second-font);
  font-weight: 700;
  font-size: 16px;
`,gV=k.p`
  font-family: var(--second-font);
  font-weight: 400;
  font-size: 16px;
 `,vV=k.span`
  margin-left: auto;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;

  background-color: ${e=>e.status==="pending"?"#fff0e6":e.status==="confirmed"?"#e8f0fe":e.status==="paid"?"#e6f4ea":e.status==="delivered"?"#e0f2fe":e.status==="done"?"#dcfce7":e.status==="cancelled"?"#fce8e6":"#f1f3f4"};

  color: ${e=>e.status==="pending"?"#d97706":e.status==="confirmed"?"#1a73e8":e.status==="paid"?"#137333":e.status==="delivered"?"#0369a1":e.status==="done"?"#15803d":e.status==="cancelled"?"#d93025":"#5f6368"};
`,xV=k.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,yV=k.div`
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
`,bV=k.div`
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
`,wV=k.div`
  font-family: var(--second-font);
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px dashed #e0e0e0;
  font-size: 13px;
  color: #555;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,SV=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(!0),i=localStorage.getItem("token"),o=(()=>{try{return JSON.parse(localStorage.getItem("user")||"null")}catch{return null}})();console.log("orders",e);const a=Ke(),l={pending:"Створено",confirmed:"Підтверджено",paid:"Сплачено",delivered:"Доставлено",done:"Завершено",cancelled:"Скасовано"};return y.useEffect(()=>{if(!i||!(o!=null&&o.email)){r(!1);return}(async()=>{try{const c=await fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[email][$eq]=${encodeURIComponent(o.email)}`,{headers:{Authorization:`Bearer ${i}`}});if(c.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),a("/login",{replace:!0});return}if(!c.ok)throw new Error(`HTTP ${c.status}`);const d=await c.json(),f=Array.isArray(d)?d:d.data||[];t(f)}catch(c){console.error("Помилка завантаження замовлень:",c)}finally{r(!1)}})()},[i,o==null?void 0:o.email,a]),u.jsx(sV,{children:u.jsx(lV,{children:u.jsxs(cV,{children:[u.jsx(uV,{children:"Мої замовлення"}),n?u.jsx("p",{children:"Завантаження замовлень..."}):e.length===0?u.jsx("p",{children:"У вас поки немає замовлень."}):u.jsx(dV,{children:[...e].sort((s,c)=>{var v,h;const d=new Date(((v=s.attributes)==null?void 0:v.date)||s.date);return new Date(((h=c.attributes)==null?void 0:h.date)||c.date)-d}).map(s=>{const c=s.attributes||s,d=typeof c.products=="string"?JSON.parse(c.products):c.products||[];return u.jsxs(fV,{children:[u.jsxs(hV,{children:[u.jsxs(pV,{children:[u.jsxs(mV,{children:["№ ",c.order_number]}),c.date&&u.jsxs(gV,{children:["Дата створення замовлення:"," ",new Date(c.date).toLocaleDateString("uk-UA")]})]}),u.jsx(vV,{status:c.status_order,children:l[c.status_order]||"Створено"})]}),u.jsx(xV,{children:d.map(f=>u.jsxs(yV,{onClick:()=>a(`/product/${f.slug}`),children:[u.jsx("img",{src:f.image||er,alt:f.name}),u.jsxs(bV,{children:[u.jsx("p",{children:f.name}),u.jsxs("span",{children:[f.quantity," шт. × ",f.price," грн"]})]})]},f.id))}),u.jsxs(wV,{children:[c.city&&u.jsxs("span",{children:[u.jsx("b",{children:"Місто:"})," ",c.city]}),c.delivery_method&&u.jsxs("span",{children:[u.jsx("b",{children:"Доставка:"})," ",c.delivery_method]}),c.delivery_address&&u.jsxs("span",{children:[u.jsx("b",{children:"Адреса:"})," ",c.delivery_address]}),c.ttn&&u.jsxs("span",{children:[u.jsx("b",{children:"ТТН:"})," ",c.ttn]})]})]},s.id||c.order_number)})})]})})})},CV=k.div`
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
`,kV=k.div`
  width: 100%;
  max-width: 500px;
  margin: 60px auto;
`,Ex=k.h1`
  margin: 0 0 12px;

  font-size: 30px;
  line-height: 1.2;
  font-weight: 300;

  color: #312620;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,_V=k.p`
  margin: 0 0 32px;

  font-size: 15px;
  line-height: 1.5;

  color: #8d837d;

  text-align: center;
`,EV=k.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,jx=k.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  color: #3d2f29;
`,Px=k.input`
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
`,Tx=k.div`
  position: relative;
  width: 100%;
 
`,Ox=k.button`
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
`,jV=k.button`
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
`,PV=k.div`
display: flex;
justify-content: center;
align-items:center;`,TV=k.button`
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
`,OV=k.p`
  margin: -8px 0 8px;

  font-size: 14px;
  line-height: 1.4;

  color: #c62828;
`,$V=k.p`
  margin: 20px 0 0;

  font-size: 15px;
  line-height: 1.5;

  color: #555;

  text-align: center;
`,IV=({openLogin:e})=>{const[t]=Jx(),n=Ke(),r=t.get("code"),[i,o]=y.useState(""),[a,l]=y.useState(!1),[s,c]=y.useState(!1),[d,f]=y.useState(""),[v,h]=y.useState(""),[g,x]=y.useState(!1),[w,m]=y.useState(!1),p=async C=>{var S;if(C.preventDefault(),h(""),!r){h("Посилання для відновлення пароля недійсне.");return}if(i.length<6){h("Пароль має містити щонайменше 6 символів.");return}if(i!==d){h("Паролі не збігаються.");return}m(!0);try{const j=await fetch("https://backenddidiv-production.up.railway.app/api/auth/reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:r,password:i,passwordConfirmation:d})}),E=await j.json();if(!j.ok)throw new Error(((S=E==null?void 0:E.error)==null?void 0:S.message)||"Не вдалося змінити пароль.");x(!0)}catch{h("Сталася помилка. Спробуйте ще раз.")}finally{m(!1)}},b=()=>{n("/"),e()};return u.jsx(CV,{children:u.jsx(kV,{children:g?u.jsxs(PV,{children:[u.jsx(Ex,{children:"Пароль змінено"}),u.jsx($V,{children:"Ваш пароль успішно змінено. Тепер ви можете увійти до свого акаунта."}),u.jsx(TV,{type:"button",onClick:b,children:"Увійти"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Ex,{children:"Новий пароль"}),u.jsx(_V,{children:"Введіть новий пароль для вашого облікового запису."}),u.jsxs(EV,{onSubmit:p,children:[u.jsxs(jx,{children:["Новий пароль",u.jsxs(Tx,{children:[u.jsx(Px,{type:a?"text":"password",value:i,onChange:C=>o(C.target.value),placeholder:"Введіть новий пароль",autoComplete:"new-password"}),u.jsx(Ox,{type:"button",onClick:()=>l(C=>!C),children:a?u.jsx(Xl,{size:20}):u.jsx(Kl,{size:20})})," "]})]}),u.jsxs(jx,{children:["Повторіть пароль",u.jsxs(Tx,{children:[u.jsx(Px,{type:s?"text":"password",value:d,onChange:C=>f(C.target.value),placeholder:"Повторіть новий пароль",autoComplete:"new-password"}),u.jsx(Ox,{type:"button",onClick:()=>c(C=>!C),children:s?u.jsx(Xl,{size:20}):u.jsx(Kl,{size:20})})]})]}),v&&u.jsx(OV,{children:v}),u.jsx(jV,{type:"submit",disabled:w,children:w?"Збереження...":"Змінити пароль"})]})]})})})};function MV(){const e=It(),[t,n]=y.useState(!1),[r,i]=y.useState("login"),o=!!localStorage.getItem("token"),a=localStorage.getItem("token"),l=JSON.parse(localStorage.getItem("user")||"null"),s=l==null?void 0:l.documentId,c=Ue(f=>f.favorites.items),d=Ue(f=>f.cart.items);return y.useEffect(()=>{if(!a)return;(async()=>{try{const v=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${a}`}});if(v.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),e(nr()),e(es()),window.location.reload();return}v.ok||console.error("Auth check error:",v.status)}catch(v){console.error("Помилка перевірки авторизації:",v)}})()},[a,e]),y.useEffect(()=>{if(!a||!s)return;(async()=>{const v=localStorage.getItem("token");if(!v)return;const x=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${s}&populate=product.images`,{headers:{Authorization:`Bearer ${v}`}})).json()).data.map(w=>({...w.product,favoriteId:w.id,favoriteDocumentId:w.documentId}));e(Y$(x))})()},[s,e,a]),u.jsxs(T3,{children:[u.jsx(dM,{}),u.jsx(J7,{}),u.jsxs(y.Suspense,{fallback:u.jsx(cM,{}),children:[u.jsx(H_,{children:u.jsxs($e,{path:"/",element:u.jsx(e4,{openLogin:()=>{i("login"),n(!0)},openRegister:()=>{i("register"),n(!0)}}),children:[u.jsx($e,{index:!0,element:u.jsx(oD,{})}),u.jsx($e,{path:"catalog",element:u.jsx(C3,{})}),u.jsx($e,{path:"/catalog/:category",element:u.jsx(KD,{})}),u.jsx($e,{path:"/product/:identifier",element:u.jsx(d8,{})}),u.jsx($e,{path:"cart",element:u.jsx(DR,{})}),u.jsx($e,{path:"favorite",element:u.jsx(BR,{})}),u.jsx($e,{path:"/catalog/new",element:u.jsx(z9,{})}),u.jsx($e,{path:"/catalog/sale",element:u.jsx(F9,{})}),u.jsx($e,{path:"checkout",element:u.jsx(M7,{})}),u.jsx($e,{path:"/order-confirmation",element:u.jsx(B7,{})}),u.jsx($e,{path:"about",element:u.jsx(Z7,{})}),u.jsx($e,{path:"contacts",element:u.jsx(d9,{})}),u.jsx($e,{path:"delivery",element:u.jsx(qR,{})}),u.jsx($e,{path:"/reset-password",element:u.jsx(IV,{openLogin:()=>{i("login"),n(!0)}})}),u.jsxs($e,{path:"account",element:u.jsx(J9,{isLoggedIn:o,children:u.jsx(rV,{})}),children:[u.jsx($e,{index:!0,element:u.jsx(_x,{})}),u.jsx($e,{path:"profile",element:u.jsx(_x,{})}),u.jsx($e,{path:"orders",element:u.jsx(SV,{})})]}),u.jsx($e,{path:"*",element:u.jsx(P3,{})})]})}),u.jsx(Z9,{localFavorites:c,localCartItems:d,isOpen:t,mode:r,onClose:()=>n(!1),setMode:i})]})]})}Ef.createRoot(document.getElementById("root")).render(u.jsx(JT,{store:zC,children:u.jsx(Q.StrictMode,{children:u.jsx(Z_,{basename:"/Didiv/",children:u.jsx(MV,{})})})}));
