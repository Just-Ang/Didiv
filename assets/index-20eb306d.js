function C_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Na(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function $t(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var wy={exports:{}},yc={},Sy={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),__=Symbol.for("react.portal"),k_=Symbol.for("react.fragment"),E_=Symbol.for("react.strict_mode"),T_=Symbol.for("react.profiler"),P_=Symbol.for("react.provider"),O_=Symbol.for("react.context"),j_=Symbol.for("react.forward_ref"),$_=Symbol.for("react.suspense"),M_=Symbol.for("react.memo"),I_=Symbol.for("react.lazy"),mg=Symbol.iterator;function D_(e){return e===null||typeof e!="object"?null:(e=mg&&e[mg]||e["@@iterator"],typeof e=="function"?e:null)}var Cy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_y=Object.assign,ky={};function uo(e,t,n){this.props=e,this.context=t,this.refs=ky,this.updater=n||Cy}uo.prototype.isReactComponent={};uo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};uo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ey(){}Ey.prototype=uo.prototype;function nh(e,t,n){this.props=e,this.context=t,this.refs=ky,this.updater=n||Cy}var rh=nh.prototype=new Ey;rh.constructor=nh;_y(rh,uo.prototype);rh.isPureReactComponent=!0;var gg=Array.isArray,Ty=Object.prototype.hasOwnProperty,ih={current:null},Py={key:!0,ref:!0,__self:!0,__source:!0};function Oy(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ty.call(t,r)&&!Py.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ba,type:e,key:o,ref:a,props:i,_owner:ih.current}}function L_(e,t){return{$$typeof:Ba,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ba}function A_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vg=/\/+/g;function Uu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?A_(""+e.key):t.toString(36)}function Bs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ba:case __:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Uu(a,0):r,gg(i)?(n="",e!=null&&(n=e.replace(vg,"$&/")+"/"),Bs(i,t,n,"",function(c){return c})):i!=null&&(oh(i)&&(i=L_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(vg,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",gg(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Uu(o,l);a+=Bs(o,t,n,s,i)}else if(s=D_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Uu(o,l++),a+=Bs(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function as(e,t,n){if(e==null)return e;var r=[],i=0;return Bs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function R_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},Vs={transition:null},F_={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Vs,ReactCurrentOwner:ih};re.Children={map:as,forEach:function(e,t,n){as(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return as(e,function(){t++}),t},toArray:function(e){return as(e,function(t){return t})||[]},only:function(e){if(!oh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=uo;re.Fragment=k_;re.Profiler=T_;re.PureComponent=nh;re.StrictMode=E_;re.Suspense=$_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_y({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ih.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Ty.call(t,s)&&!Py.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ba,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:O_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:P_,_context:e},e.Consumer=e};re.createElement=Oy;re.createFactory=function(e){var t=Oy.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:j_,render:e}};re.isValidElement=oh;re.lazy=function(e){return{$$typeof:I_,_payload:{_status:-1,_result:e},_init:R_}};re.memo=function(e,t){return{$$typeof:M_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Vs.transition;Vs.transition={};try{e()}finally{Vs.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return yt.current.useCallback(e,t)};re.useContext=function(e){return yt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};re.useEffect=function(e,t){return yt.current.useEffect(e,t)};re.useId=function(){return yt.current.useId()};re.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return yt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};re.useRef=function(e){return yt.current.useRef(e)};re.useState=function(e){return yt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return yt.current.useTransition()};re.version="18.2.0";Sy.exports=re;var x=Sy.exports;const K=Na(x),gf=C_({__proto__:null,default:K},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=x,N_=Symbol.for("react.element"),B_=Symbol.for("react.fragment"),V_=Object.prototype.hasOwnProperty,U_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W_={key:!0,ref:!0,__self:!0,__source:!0};function jy(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)V_.call(t,r)&&!W_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:N_,type:e,key:o,ref:a,props:i,_owner:U_.current}}yc.Fragment=B_;yc.jsx=jy;yc.jsxs=jy;wy.exports=yc;var d=wy.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}var fr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(fr||(fr={}));const yg="popstate";function H_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return vf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ml(i)}return q_(t,n,null,e)}function Me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ah(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function G_(){return Math.random().toString(36).substr(2,8)}function xg(e,t){return{usr:e.state,key:e.key,idx:t}}function vf(e,t,n,r){return n===void 0&&(n=null),fa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fo(t):t,{state:n,key:t&&t.key||r||G_()})}function ml(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function fo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function q_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=fr.Pop,s=null,c=u();c==null&&(c=0,a.replaceState(fa({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function f(){l=fr.Pop;let w=u(),h=w==null?null:w-c;c=w,s&&s({action:l,location:y.location,delta:h})}function v(w,h){l=fr.Push;let g=vf(y.location,w,h);n&&n(g,w),c=u()+1;let b=xg(g,c),S=y.createHref(g);try{a.pushState(b,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(S)}o&&s&&s({action:l,location:y.location,delta:1})}function m(w,h){l=fr.Replace;let g=vf(y.location,w,h);n&&n(g,w),c=u();let b=xg(g,c),S=y.createHref(g);a.replaceState(b,"",S),o&&s&&s({action:l,location:y.location,delta:0})}function p(w){let h=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof w=="string"?w:ml(w);return Me(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let y={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(yg,f),s=w,()=>{i.removeEventListener(yg,f),s=null}},createHref(w){return t(i,w)},createURL:p,encodeLocation(w){let h=p(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:v,replace:m,go(w){return a.go(w)}};return y}var bg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bg||(bg={}));function Y_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?fo(t):t,i=sh(r.pathname||"/",n);if(i==null)return null;let o=$y(e);X_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=ik(o[l],sk(i));return a}function $y(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Me(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=vr([r,s.relativePath]),u=n.concat(s);o.children&&o.children.length>0&&(Me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$y(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:nk(c,o.index),routesMeta:u})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of My(o.path))i(o,a,s)}),t}function My(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=My(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function X_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:rk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const K_=/^:\w+$/,Q_=3,Z_=2,J_=1,ek=10,tk=-2,wg=e=>e==="*";function nk(e,t){let n=e.split("/"),r=n.length;return n.some(wg)&&(r+=tk),t&&(r+=Z_),n.filter(i=>!wg(i)).reduce((i,o)=>i+(K_.test(o)?Q_:o===""?J_:ek),r)}function rk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ik(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",u=ok({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!u)return null;Object.assign(r,u.params);let f=l.route;o.push({params:r,pathname:vr([i,u.pathname]),pathnameBase:dk(vr([i,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(i=vr([i,u.pathnameBase]))}return o}function ok(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ak(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,u,f)=>{if(u==="*"){let v=l[f]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return c[u]=lk(l[f]||"",u),c},{}),pathname:o,pathnameBase:a,pattern:e}}function ak(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ah(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function sk(e){try{return decodeURI(e)}catch(t){return ah(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function lk(e,t){try{return decodeURIComponent(e)}catch(n){return ah(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function sh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ck(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?fo(e):e;return{pathname:n?n.startsWith("/")?n:uk(n,t):t,search:fk(r),hash:pk(i)}}function uk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ch(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=fo(e):(i=fa({},e),Me(!i.pathname||!i.pathname.includes("?"),Wu("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),Wu("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),Wu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let f=t.length-1;if(a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),f-=1;i.pathname=v.join("/")}l=f>=0?t[f]:"/"}let s=ck(i,l),c=a&&a!=="/"&&a.endsWith("/"),u=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||u)&&(s.pathname+="/"),s}const vr=e=>e.join("/").replace(/\/\/+/g,"/"),dk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Iy=["post","put","patch","delete"];new Set(Iy);const mk=["get",...Iy];new Set(mk);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gl.apply(this,arguments)}const uh=x.createContext(null),Dy=x.createContext(null),si=x.createContext(null),xc=x.createContext(null),In=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Ly=x.createContext(null);function gk(e,t){let{relative:n}=t===void 0?{}:t;po()||Me(!1);let{basename:r,navigator:i}=x.useContext(si),{hash:o,pathname:a,search:l}=dh(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:vr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function po(){return x.useContext(xc)!=null}function Dn(){return po()||Me(!1),x.useContext(xc).location}function Ay(e){x.useContext(si).static||x.useLayoutEffect(e)}function xt(){let{isDataRoute:e}=x.useContext(In);return e?$k():vk()}function vk(){po()||Me(!1);let e=x.useContext(uh),{basename:t,navigator:n}=x.useContext(si),{matches:r}=x.useContext(In),{pathname:i}=Dn(),o=JSON.stringify(lh(r).map(s=>s.pathnameBase)),a=x.useRef(!1);return Ay(()=>{a.current=!0}),x.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let u=ch(s,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:vr([t,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[t,n,o,i,e])}const yk=x.createContext(null);function xk(e){let t=x.useContext(In).outlet;return t&&x.createElement(yk.Provider,{value:e},t)}function Ry(){let{matches:e}=x.useContext(In),t=e[e.length-1];return t?t.params:{}}function dh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(In),{pathname:i}=Dn(),o=JSON.stringify(lh(r).map(a=>a.pathnameBase));return x.useMemo(()=>ch(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function bk(e,t){return wk(e,t)}function wk(e,t,n){po()||Me(!1);let{navigator:r}=x.useContext(si),{matches:i}=x.useContext(In),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Dn(),c;if(t){var u;let y=typeof t=="string"?fo(t):t;l==="/"||(u=y.pathname)!=null&&u.startsWith(l)||Me(!1),c=y}else c=s;let f=c.pathname||"/",v=l==="/"?f:f.slice(l.length)||"/",m=Y_(e,{pathname:v}),p=Ek(m&&m.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:vr([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:vr([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&p?x.createElement(xc.Provider,{value:{location:gl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:fr.Pop}},p):p}function Sk(){let e=jk(),t=hk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,o)}const Ck=x.createElement(Sk,null);class _k extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(In.Provider,{value:this.props.routeContext},x.createElement(Ly.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kk(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(uh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(In.Provider,{value:t},r)}function Ek(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Me(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,c)=>{let u=s.route.id?a==null?void 0:a[s.route.id]:null,f=null;n&&(f=s.route.errorElement||Ck);let v=t.concat(o.slice(0,c+1)),m=()=>{let p;return u?p=f:s.route.Component?p=x.createElement(s.route.Component,null):s.route.element?p=s.route.element:p=l,x.createElement(kk,{match:s,routeContext:{outlet:l,matches:v,isDataRoute:n!=null},children:p})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?x.createElement(_k,{location:n.location,revalidation:n.revalidation,component:f,error:u,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var Fy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Fy||{}),vl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vl||{});function Tk(e){let t=x.useContext(uh);return t||Me(!1),t}function Pk(e){let t=x.useContext(Dy);return t||Me(!1),t}function Ok(e){let t=x.useContext(In);return t||Me(!1),t}function zy(e){let t=Ok(),n=t.matches[t.matches.length-1];return n.route.id||Me(!1),n.route.id}function jk(){var e;let t=x.useContext(Ly),n=Pk(vl.UseRouteError),r=zy(vl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function $k(){let{router:e}=Tk(Fy.UseNavigateStable),t=zy(vl.UseNavigateStable),n=x.useRef(!1);return Ay(()=>{n.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,gl({fromRouteId:t},o)))},[e,t])}function Mk(e){let{to:t,replace:n,state:r,relative:i}=e;po()||Me(!1);let{matches:o}=x.useContext(In),{pathname:a}=Dn(),l=xt(),s=ch(t,lh(o).map(u=>u.pathnameBase),a,i==="path"),c=JSON.stringify(s);return x.useEffect(()=>l(JSON.parse(c),{replace:n,state:r,relative:i}),[l,c,i,n,r]),null}function Ny(e){return xk(e.context)}function De(e){Me(!1)}function Ik(e){let{basename:t="/",children:n=null,location:r,navigationType:i=fr.Pop,navigator:o,static:a=!1}=e;po()&&Me(!1);let l=t.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=fo(r));let{pathname:c="/",search:u="",hash:f="",state:v=null,key:m="default"}=r,p=x.useMemo(()=>{let y=sh(c,l);return y==null?null:{location:{pathname:y,search:u,hash:f,state:v,key:m},navigationType:i}},[l,c,u,f,v,m,i]);return p==null?null:x.createElement(si.Provider,{value:s},x.createElement(xc.Provider,{children:n,value:p}))}function Dk(e){let{children:t,location:n}=e;return bk(yf(t),n)}new Promise(()=>{});function yf(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){n.push.apply(n,yf(r.props.children,o));return}r.type!==De&&Me(!1),!r.props.index||!r.props.children||Me(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=yf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yl(){return yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yl.apply(this,arguments)}function By(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Lk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ak(e,t){return e.button===0&&(!t||t==="_self")&&!Lk(e)}function xf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Rk(e,t){let n=xf(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const Fk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],zk=["aria-current","caseSensitive","className","end","style","to","children"],Nk="startTransition",Sg=gf[Nk];function Bk(e){let{basename:t,children:n,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=H_({window:i,v5Compat:!0}));let a=o.current,[l,s]=x.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},u=x.useCallback(f=>{c&&Sg?Sg(()=>s(f)):s(f)},[s,c]);return x.useLayoutEffect(()=>a.listen(u),[a,u]),x.createElement(Ik,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const Vk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:u}=t,f=By(t,Fk),{basename:v}=x.useContext(si),m,p=!1;if(typeof c=="string"&&Uk.test(c)&&(m=c,Vk))try{let g=new URL(window.location.href),b=c.startsWith("//")?new URL(g.protocol+c):new URL(c),S=sh(b.pathname,v);b.origin===g.origin&&S!=null?c=S+b.search+b.hash:p=!0}catch{}let y=gk(c,{relative:i}),w=Wk(c,{replace:a,state:l,target:s,preventScrollReset:u,relative:i});function h(g){r&&r(g),g.defaultPrevented||w(g)}return x.createElement("a",yl({},f,{href:m||y,onClick:p||o?r:h,ref:n,target:s}))}),Vy=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,children:c}=t,u=By(t,zk),f=dh(s,{relative:u.relative}),v=Dn(),m=x.useContext(Dy),{navigator:p}=x.useContext(si),y=p.encodeLocation?p.encodeLocation(f).pathname:f.pathname,w=v.pathname,h=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(w=w.toLowerCase(),h=h?h.toLowerCase():null,y=y.toLowerCase());let g=w===y||!a&&w.startsWith(y)&&w.charAt(y.length)==="/",b=h!=null&&(h===y||!a&&h.startsWith(y)&&h.charAt(y.length)==="/"),S=g?r:void 0,k;typeof o=="function"?k=o({isActive:g,isPending:b}):k=[o,g?"active":null,b?"pending":null].filter(Boolean).join(" ");let T=typeof l=="function"?l({isActive:g,isPending:b}):l;return x.createElement(Te,yl({},u,{"aria-current":S,className:k,ref:n,style:T,to:s}),typeof c=="function"?c({isActive:g,isPending:b}):c)});var Cg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Cg||(Cg={}));var _g;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_g||(_g={}));function Wk(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=xt(),s=Dn(),c=dh(e,{relative:a});return x.useCallback(u=>{if(Ak(u,n)){u.preventDefault();let f=r!==void 0?r:ml(s)===ml(c);l(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}function Hk(e){let t=x.useRef(xf(e)),n=x.useRef(!1),r=Dn(),i=x.useMemo(()=>Rk(r.search,n.current?null:t.current),[r.search]),o=xt(),a=x.useCallback((l,s)=>{const c=xf(typeof l=="function"?l(i):l);n.current=!0,o("?"+c,s)},[o,i]);return[i,a]}var bf={},Uy={exports:{}},Ut={},Wy={exports:{}},Hy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,O){var z=P.length;P.push(O);e:for(;0<z;){var N=z-1>>>1,B=P[N];if(0<i(B,O))P[N]=O,P[z]=B,z=N;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var O=P[0],z=P.pop();if(z!==O){P[0]=z;e:for(var N=0,B=P.length,U=B>>>1;N<U;){var W=2*(N+1)-1,Y=P[W],H=W+1,ee=P[H];if(0>i(Y,z))H<B&&0>i(ee,Y)?(P[N]=ee,P[H]=z,N=H):(P[N]=Y,P[W]=z,N=W);else if(H<B&&0>i(ee,z))P[N]=ee,P[H]=z,N=H;else break e}}return O}function i(P,O){var z=P.sortIndex-O.sortIndex;return z!==0?z:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],u=1,f=null,v=3,m=!1,p=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(P){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=P)r(c),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(c)}}function S(P){if(y=!1,b(P),!p)if(n(s)!==null)p=!0,F(k);else{var O=n(c);O!==null&&R(S,O.startTime-P)}}function k(P,O){p=!1,y&&(y=!1,h(_),_=-1),m=!0;var z=v;try{for(b(O),f=n(s);f!==null&&(!(f.expirationTime>O)||P&&!A());){var N=f.callback;if(typeof N=="function"){f.callback=null,v=f.priorityLevel;var B=N(f.expirationTime<=O);O=e.unstable_now(),typeof B=="function"?f.callback=B:f===n(s)&&r(s),b(O)}else r(s);f=n(s)}if(f!==null)var U=!0;else{var W=n(c);W!==null&&R(S,W.startTime-O),U=!1}return U}finally{f=null,v=z,m=!1}}var T=!1,E=null,_=-1,$=5,M=-1;function A(){return!(e.unstable_now()-M<$)}function I(){if(E!==null){var P=e.unstable_now();M=P;var O=!0;try{O=E(!0,P)}finally{O?j():(T=!1,E=null)}}else T=!1}var j;if(typeof g=="function")j=function(){g(I)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,D=L.port2;L.port1.onmessage=I,j=function(){D.postMessage(null)}}else j=function(){w(I,0)};function F(P){E=P,T||(T=!0,j())}function R(P,O){_=w(function(){P(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){p||m||(p=!0,F(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(v){case 1:case 2:case 3:var O=3;break;default:O=v}var z=v;v=O;try{return P()}finally{v=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=v;v=P;try{return O()}finally{v=z}},e.unstable_scheduleCallback=function(P,O,z){var N=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?N+z:N):z=N,P){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=z+B,P={id:u++,callback:O,priorityLevel:P,startTime:z,expirationTime:B,sortIndex:-1},z>N?(P.sortIndex=z,t(c,P),n(s)===null&&P===n(c)&&(y?(h(_),_=-1):y=!0,R(S,z-N))):(P.sortIndex=B,t(s,P),p||m||(p=!0,F(k))),P},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(P){var O=v;return function(){var z=v;v=O;try{return P.apply(this,arguments)}finally{v=z}}}})(Hy);Wy.exports=Hy;var Gk=Wy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy=x,Bt=Gk;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qy=new Set,pa={};function li(e,t){Yi(e,t),Yi(e+"Capture",t)}function Yi(e,t){for(pa[e]=t,e=0;e<t.length;e++)qy.add(t[e])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wf=Object.prototype.hasOwnProperty,qk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kg={},Eg={};function Yk(e){return wf.call(Eg,e)?!0:wf.call(kg,e)?!1:qk.test(e)?Eg[e]=!0:(kg[e]=!0,!1)}function Xk(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kk(e,t,n,r){if(t===null||typeof t>"u"||Xk(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function bt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var fh=/[\-:]([a-z])/g;function ph(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fh,ph);nt[t]=new bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fh,ph);nt[t]=new bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fh,ph);nt[t]=new bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function hh(e,t,n,r){var i=nt.hasOwnProperty(t)?nt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kk(t,n,i,r)&&(n=null),r||i===null?Yk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tr=Gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ss=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),mh=Symbol.for("react.strict_mode"),Sf=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),gh=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),_f=Symbol.for("react.suspense_list"),vh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Ky=Symbol.for("react.offscreen"),Tg=Symbol.iterator;function Po(e){return e===null||typeof e!="object"?null:(e=Tg&&e[Tg]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Hu;function Wo(e){if(Hu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hu=t&&t[1]||""}return`
`+Hu+e}var Gu=!1;function qu(e,t){if(!e||Gu)return"";Gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Gu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wo(e):""}function Qk(e){switch(e.tag){case 5:return Wo(e.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return e=qu(e.type,!1),e;case 11:return e=qu(e.type.render,!1),e;case 1:return e=qu(e.type,!0),e;default:return""}}function kf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pi:return"Fragment";case Ti:return"Portal";case Sf:return"Profiler";case mh:return"StrictMode";case Cf:return"Suspense";case _f:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xy:return(e.displayName||"Context")+".Consumer";case Yy:return(e._context.displayName||"Context")+".Provider";case gh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vh:return t=e.displayName||null,t!==null?t:kf(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return kf(e(t))}catch{}}return null}function Zk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kf(t);case 8:return t===mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jk(e){var t=Qy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ls(e){e._valueTracker||(e._valueTracker=Jk(e))}function Zy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ef(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jy(e,t){t=t.checked,t!=null&&hh(e,"checked",t,!1)}function Tf(e,t){Jy(e,t);var n=Tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pf(e,t.type,Tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Og(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pf(e,t,n){(t!=="number"||xl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ho=Array.isArray;function zi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Of(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Ho(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tr(n)}}function ex(e,t){var n=Tr(t.value),r=Tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $g(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tx(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tx(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cs,nx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cs=cs||document.createElement("div"),cs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ha(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eE=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(e){eE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jo[t]=Jo[e]})});function rx(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jo.hasOwnProperty(e)&&Jo[e]?(""+t).trim():t+"px"}function ix(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rx(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var tE=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $f(e,t){if(t){if(tE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function Mf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var If=null;function yh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Df=null,Ni=null,Bi=null;function Mg(e){if(e=Wa(e)){if(typeof Df!="function")throw Error(V(280));var t=e.stateNode;t&&(t=_c(t),Df(e.stateNode,e.type,t))}}function ox(e){Ni?Bi?Bi.push(e):Bi=[e]:Ni=e}function ax(){if(Ni){var e=Ni,t=Bi;if(Bi=Ni=null,Mg(e),t)for(e=0;e<t.length;e++)Mg(t[e])}}function sx(e,t){return e(t)}function lx(){}var Yu=!1;function cx(e,t,n){if(Yu)return e(t,n);Yu=!0;try{return sx(e,t,n)}finally{Yu=!1,(Ni!==null||Bi!==null)&&(lx(),ax())}}function ma(e,t){var n=e.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var Lf=!1;if(Xn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Lf=!1}function nE(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var ea=!1,bl=null,wl=!1,Af=null,rE={onError:function(e){ea=!0,bl=e}};function iE(e,t,n,r,i,o,a,l,s){ea=!1,bl=null,nE.apply(rE,arguments)}function oE(e,t,n,r,i,o,a,l,s){if(iE.apply(this,arguments),ea){if(ea){var c=bl;ea=!1,bl=null}else throw Error(V(198));wl||(wl=!0,Af=c)}}function ci(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ux(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ig(e){if(ci(e)!==e)throw Error(V(188))}function aE(e){var t=e.alternate;if(!t){if(t=ci(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ig(i),e;if(o===r)return Ig(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function dx(e){return e=aE(e),e!==null?fx(e):null}function fx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fx(e);if(t!==null)return t;e=e.sibling}return null}var px=Bt.unstable_scheduleCallback,Dg=Bt.unstable_cancelCallback,sE=Bt.unstable_shouldYield,lE=Bt.unstable_requestPaint,$e=Bt.unstable_now,cE=Bt.unstable_getCurrentPriorityLevel,xh=Bt.unstable_ImmediatePriority,hx=Bt.unstable_UserBlockingPriority,Sl=Bt.unstable_NormalPriority,uE=Bt.unstable_LowPriority,mx=Bt.unstable_IdlePriority,bc=null,Tn=null;function dE(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(bc,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:hE,fE=Math.log,pE=Math.LN2;function hE(e){return e>>>=0,e===0?32:31-(fE(e)/pE|0)|0}var us=64,ds=4194304;function Go(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Go(l):(o&=a,o!==0&&(r=Go(o)))}else a=n&~i,a!==0?r=Go(a):o!==0&&(r=Go(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dn(t),i=1<<n,r|=e[n],t&=~i;return r}function mE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-dn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=mE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Rf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gx(){var e=us;return us<<=1,!(us&4194240)&&(us=64),e}function Xu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Va(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dn(t),e[t]=n}function vE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function bh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function vx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yx,wh,xx,bx,wx,Ff=!1,fs=[],yr=null,xr=null,br=null,ga=new Map,va=new Map,ur=[],yE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lg(e,t){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":ga.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(t.pointerId)}}function jo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wa(t),t!==null&&wh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xE(e,t,n,r,i){switch(t){case"focusin":return yr=jo(yr,e,t,n,r,i),!0;case"dragenter":return xr=jo(xr,e,t,n,r,i),!0;case"mouseover":return br=jo(br,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ga.set(o,jo(ga.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,va.set(o,jo(va.get(o)||null,e,t,n,r,i)),!0}return!1}function Sx(e){var t=Ur(e.target);if(t!==null){var n=ci(t);if(n!==null){if(t=n.tag,t===13){if(t=ux(n),t!==null){e.blockedOn=t,wx(e.priority,function(){xx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);If=r,n.target.dispatchEvent(r),If=null}else return t=Wa(n),t!==null&&wh(t),e.blockedOn=n,!1;t.shift()}return!0}function Ag(e,t,n){Us(e)&&n.delete(t)}function bE(){Ff=!1,yr!==null&&Us(yr)&&(yr=null),xr!==null&&Us(xr)&&(xr=null),br!==null&&Us(br)&&(br=null),ga.forEach(Ag),va.forEach(Ag)}function $o(e,t){e.blockedOn===t&&(e.blockedOn=null,Ff||(Ff=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,bE)))}function ya(e){function t(i){return $o(i,e)}if(0<fs.length){$o(fs[0],e);for(var n=1;n<fs.length;n++){var r=fs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yr!==null&&$o(yr,e),xr!==null&&$o(xr,e),br!==null&&$o(br,e),ga.forEach(t),va.forEach(t),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)Sx(n),n.blockedOn===null&&ur.shift()}var Vi=tr.ReactCurrentBatchConfig,_l=!0;function wE(e,t,n,r){var i=me,o=Vi.transition;Vi.transition=null;try{me=1,Sh(e,t,n,r)}finally{me=i,Vi.transition=o}}function SE(e,t,n,r){var i=me,o=Vi.transition;Vi.transition=null;try{me=4,Sh(e,t,n,r)}finally{me=i,Vi.transition=o}}function Sh(e,t,n,r){if(_l){var i=zf(e,t,n,r);if(i===null)od(e,t,r,kl,n),Lg(e,r);else if(xE(i,e,t,n,r))r.stopPropagation();else if(Lg(e,r),t&4&&-1<yE.indexOf(e)){for(;i!==null;){var o=Wa(i);if(o!==null&&yx(o),o=zf(e,t,n,r),o===null&&od(e,t,r,kl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else od(e,t,r,null,n)}}var kl=null;function zf(e,t,n,r){if(kl=null,e=yh(r),e=Ur(e),e!==null)if(t=ci(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ux(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return kl=e,null}function Cx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cE()){case xh:return 1;case hx:return 4;case Sl:case uE:return 16;case mx:return 536870912;default:return 16}default:return 16}}var pr=null,Ch=null,Ws=null;function _x(){if(Ws)return Ws;var e,t=Ch,n=t.length,r,i="value"in pr?pr.value:pr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ws=i.slice(e,1<r?1-r:void 0)}function Hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ps(){return!0}function Rg(){return!1}function Wt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ps:Rg,this.isPropagationStopped=Rg,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),t}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=Wt(ho),Ua=Pe({},ho,{view:0,detail:0}),CE=Wt(Ua),Ku,Qu,Mo,wc=Pe({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(Ku=e.screenX-Mo.screenX,Qu=e.screenY-Mo.screenY):Qu=Ku=0,Mo=e),Ku)},movementY:function(e){return"movementY"in e?e.movementY:Qu}}),Fg=Wt(wc),_E=Pe({},wc,{dataTransfer:0}),kE=Wt(_E),EE=Pe({},Ua,{relatedTarget:0}),Zu=Wt(EE),TE=Pe({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),PE=Wt(TE),OE=Pe({},ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jE=Wt(OE),$E=Pe({},ho,{data:0}),zg=Wt($E),ME={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=DE[e])?!!t[e]:!1}function kh(){return LE}var AE=Pe({},Ua,{key:function(e){if(e.key){var t=ME[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?IE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kh,charCode:function(e){return e.type==="keypress"?Hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),RE=Wt(AE),FE=Pe({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ng=Wt(FE),zE=Pe({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kh}),NE=Wt(zE),BE=Pe({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),VE=Wt(BE),UE=Pe({},wc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),WE=Wt(UE),HE=[9,13,27,32],Eh=Xn&&"CompositionEvent"in window,ta=null;Xn&&"documentMode"in document&&(ta=document.documentMode);var GE=Xn&&"TextEvent"in window&&!ta,kx=Xn&&(!Eh||ta&&8<ta&&11>=ta),Bg=String.fromCharCode(32),Vg=!1;function Ex(e,t){switch(e){case"keyup":return HE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oi=!1;function qE(e,t){switch(e){case"compositionend":return Tx(t);case"keypress":return t.which!==32?null:(Vg=!0,Bg);case"textInput":return e=t.data,e===Bg&&Vg?null:e;default:return null}}function YE(e,t){if(Oi)return e==="compositionend"||!Eh&&Ex(e,t)?(e=_x(),Ws=Ch=pr=null,Oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kx&&t.locale!=="ko"?null:t.data;default:return null}}var XE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ug(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!XE[e.type]:t==="textarea"}function Px(e,t,n,r){ox(r),t=El(t,"onChange"),0<t.length&&(n=new _h("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var na=null,xa=null;function KE(e){zx(e,0)}function Sc(e){var t=Mi(e);if(Zy(t))return e}function QE(e,t){if(e==="change")return t}var Ox=!1;if(Xn){var Ju;if(Xn){var ed="oninput"in document;if(!ed){var Wg=document.createElement("div");Wg.setAttribute("oninput","return;"),ed=typeof Wg.oninput=="function"}Ju=ed}else Ju=!1;Ox=Ju&&(!document.documentMode||9<document.documentMode)}function Hg(){na&&(na.detachEvent("onpropertychange",jx),xa=na=null)}function jx(e){if(e.propertyName==="value"&&Sc(xa)){var t=[];Px(t,xa,e,yh(e)),cx(KE,t)}}function ZE(e,t,n){e==="focusin"?(Hg(),na=t,xa=n,na.attachEvent("onpropertychange",jx)):e==="focusout"&&Hg()}function JE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sc(xa)}function eT(e,t){if(e==="click")return Sc(t)}function tT(e,t){if(e==="input"||e==="change")return Sc(t)}function nT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:nT;function ba(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wf.call(t,i)||!gn(e[i],t[i]))return!1}return!0}function Gg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qg(e,t){var n=Gg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gg(n)}}function $x(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$x(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mx(){for(var e=window,t=xl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xl(e.document)}return t}function Th(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rT(e){var t=Mx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$x(n.ownerDocument.documentElement,n)){if(r!==null&&Th(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=qg(n,o);var a=qg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var iT=Xn&&"documentMode"in document&&11>=document.documentMode,ji=null,Nf=null,ra=null,Bf=!1;function Yg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bf||ji==null||ji!==xl(r)||(r=ji,"selectionStart"in r&&Th(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&ba(ra,r)||(ra=r,r=El(Nf,"onSelect"),0<r.length&&(t=new _h("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ji)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $i={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},td={},Ix={};Xn&&(Ix=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function Cc(e){if(td[e])return td[e];if(!$i[e])return e;var t=$i[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ix)return td[e]=t[n];return e}var Dx=Cc("animationend"),Lx=Cc("animationiteration"),Ax=Cc("animationstart"),Rx=Cc("transitionend"),Fx=new Map,Xg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){Fx.set(e,t),li(t,[e])}for(var nd=0;nd<Xg.length;nd++){var rd=Xg[nd],oT=rd.toLowerCase(),aT=rd[0].toUpperCase()+rd.slice(1);jr(oT,"on"+aT)}jr(Dx,"onAnimationEnd");jr(Lx,"onAnimationIteration");jr(Ax,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Rx,"onTransitionEnd");Yi("onMouseEnter",["mouseout","mouseover"]);Yi("onMouseLeave",["mouseout","mouseover"]);Yi("onPointerEnter",["pointerout","pointerover"]);Yi("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sT=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Kg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,oE(r,t,void 0,e),e.currentTarget=null}function zx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Kg(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Kg(i,l,c),o=s}}}if(wl)throw e=Af,wl=!1,Af=null,e}function ye(e,t){var n=t[Gf];n===void 0&&(n=t[Gf]=new Set);var r=e+"__bubble";n.has(r)||(Nx(t,e,2,!1),n.add(r))}function id(e,t,n){var r=0;t&&(r|=4),Nx(n,e,r,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function wa(e){if(!e[ms]){e[ms]=!0,qy.forEach(function(n){n!=="selectionchange"&&(sT.has(n)||id(n,!1,e),id(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,id("selectionchange",!1,t))}}function Nx(e,t,n,r){switch(Cx(t)){case 1:var i=wE;break;case 4:i=SE;break;default:i=Sh}n=i.bind(null,t,n,e),i=void 0,!Lf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function od(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Ur(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}cx(function(){var c=o,u=yh(n),f=[];e:{var v=Fx.get(e);if(v!==void 0){var m=_h,p=e;switch(e){case"keypress":if(Hs(n)===0)break e;case"keydown":case"keyup":m=RE;break;case"focusin":p="focus",m=Zu;break;case"focusout":p="blur",m=Zu;break;case"beforeblur":case"afterblur":m=Zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=kE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=NE;break;case Dx:case Lx:case Ax:m=PE;break;case Rx:m=VE;break;case"scroll":m=CE;break;case"wheel":m=WE;break;case"copy":case"cut":case"paste":m=jE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ng}var y=(t&4)!==0,w=!y&&e==="scroll",h=y?v!==null?v+"Capture":null:v;y=[];for(var g=c,b;g!==null;){b=g;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,h!==null&&(S=ma(g,h),S!=null&&y.push(Sa(g,S,b)))),w)break;g=g.return}0<y.length&&(v=new m(v,p,null,n,u),f.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",v&&n!==If&&(p=n.relatedTarget||n.fromElement)&&(Ur(p)||p[Kn]))break e;if((m||v)&&(v=u.window===u?u:(v=u.ownerDocument)?v.defaultView||v.parentWindow:window,m?(p=n.relatedTarget||n.toElement,m=c,p=p?Ur(p):null,p!==null&&(w=ci(p),p!==w||p.tag!==5&&p.tag!==6)&&(p=null)):(m=null,p=c),m!==p)){if(y=Fg,S="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ng,S="onPointerLeave",h="onPointerEnter",g="pointer"),w=m==null?v:Mi(m),b=p==null?v:Mi(p),v=new y(S,g+"leave",m,n,u),v.target=w,v.relatedTarget=b,S=null,Ur(u)===c&&(y=new y(h,g+"enter",p,n,u),y.target=b,y.relatedTarget=w,S=y),w=S,m&&p)t:{for(y=m,h=p,g=0,b=y;b;b=hi(b))g++;for(b=0,S=h;S;S=hi(S))b++;for(;0<g-b;)y=hi(y),g--;for(;0<b-g;)h=hi(h),b--;for(;g--;){if(y===h||h!==null&&y===h.alternate)break t;y=hi(y),h=hi(h)}y=null}else y=null;m!==null&&Qg(f,v,m,y,!1),p!==null&&w!==null&&Qg(f,w,p,y,!0)}}e:{if(v=c?Mi(c):window,m=v.nodeName&&v.nodeName.toLowerCase(),m==="select"||m==="input"&&v.type==="file")var k=QE;else if(Ug(v))if(Ox)k=tT;else{k=JE;var T=ZE}else(m=v.nodeName)&&m.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(k=eT);if(k&&(k=k(e,c))){Px(f,k,n,u);break e}T&&T(e,v,c),e==="focusout"&&(T=v._wrapperState)&&T.controlled&&v.type==="number"&&Pf(v,"number",v.value)}switch(T=c?Mi(c):window,e){case"focusin":(Ug(T)||T.contentEditable==="true")&&(ji=T,Nf=c,ra=null);break;case"focusout":ra=Nf=ji=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,Yg(f,n,u);break;case"selectionchange":if(iT)break;case"keydown":case"keyup":Yg(f,n,u)}var E;if(Eh)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Oi?Ex(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(kx&&n.locale!=="ko"&&(Oi||_!=="onCompositionStart"?_==="onCompositionEnd"&&Oi&&(E=_x()):(pr=u,Ch="value"in pr?pr.value:pr.textContent,Oi=!0)),T=El(c,_),0<T.length&&(_=new zg(_,e,null,n,u),f.push({event:_,listeners:T}),E?_.data=E:(E=Tx(n),E!==null&&(_.data=E)))),(E=GE?qE(e,n):YE(e,n))&&(c=El(c,"onBeforeInput"),0<c.length&&(u=new zg("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=E))}zx(f,t)})}function Sa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function El(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ma(e,n),o!=null&&r.unshift(Sa(e,o,i)),o=ma(e,t),o!=null&&r.push(Sa(e,o,i))),e=e.return}return r}function hi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=ma(n,o),s!=null&&a.unshift(Sa(n,s,l))):i||(s=ma(n,o),s!=null&&a.push(Sa(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var lT=/\r\n?/g,cT=/\u0000|\uFFFD/g;function Zg(e){return(typeof e=="string"?e:""+e).replace(lT,`
`).replace(cT,"")}function gs(e,t,n){if(t=Zg(t),Zg(e)!==t&&n)throw Error(V(425))}function Tl(){}var Vf=null,Uf=null;function Wf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hf=typeof setTimeout=="function"?setTimeout:void 0,uT=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,dT=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(e){return Jg.resolve(null).then(e).catch(fT)}:Hf;function fT(e){setTimeout(function(){throw e})}function ad(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ya(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ya(t)}function wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function e0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mo=Math.random().toString(36).slice(2),kn="__reactFiber$"+mo,Ca="__reactProps$"+mo,Kn="__reactContainer$"+mo,Gf="__reactEvents$"+mo,pT="__reactListeners$"+mo,hT="__reactHandles$"+mo;function Ur(e){var t=e[kn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kn]||n[kn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=e0(e);e!==null;){if(n=e[kn])return n;e=e0(e)}return t}e=n,n=e.parentNode}return null}function Wa(e){return e=e[kn]||e[Kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function _c(e){return e[Ca]||null}var qf=[],Ii=-1;function $r(e){return{current:e}}function be(e){0>Ii||(e.current=qf[Ii],qf[Ii]=null,Ii--)}function ve(e,t){Ii++,qf[Ii]=e.current,e.current=t}var Pr={},ut=$r(Pr),Tt=$r(!1),Kr=Pr;function Xi(e,t){var n=e.type.contextTypes;if(!n)return Pr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(e){return e=e.childContextTypes,e!=null}function Pl(){be(Tt),be(ut)}function t0(e,t,n){if(ut.current!==Pr)throw Error(V(168));ve(ut,t),ve(Tt,n)}function Bx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,Zk(e)||"Unknown",i));return Pe({},n,r)}function Ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pr,Kr=ut.current,ve(ut,e),ve(Tt,Tt.current),!0}function n0(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Bx(e,t,Kr),r.__reactInternalMemoizedMergedChildContext=e,be(Tt),be(ut),ve(ut,e)):be(Tt),ve(Tt,n)}var Bn=null,kc=!1,sd=!1;function Vx(e){Bn===null?Bn=[e]:Bn.push(e)}function mT(e){kc=!0,Vx(e)}function Mr(){if(!sd&&Bn!==null){sd=!0;var e=0,t=me;try{var n=Bn;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bn=null,kc=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(e+1)),px(xh,Mr),i}finally{me=t,sd=!1}}return null}var Di=[],Li=0,jl=null,$l=0,qt=[],Yt=0,Qr=null,Wn=1,Hn="";function Rr(e,t){Di[Li++]=$l,Di[Li++]=jl,jl=e,$l=t}function Ux(e,t,n){qt[Yt++]=Wn,qt[Yt++]=Hn,qt[Yt++]=Qr,Qr=e;var r=Wn;e=Hn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var o=32-dn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Wn=1<<32-dn(t)+i|n<<i|r,Hn=o+e}else Wn=1<<o|n<<i|r,Hn=e}function Ph(e){e.return!==null&&(Rr(e,1),Ux(e,1,0))}function Oh(e){for(;e===jl;)jl=Di[--Li],Di[Li]=null,$l=Di[--Li],Di[Li]=null;for(;e===Qr;)Qr=qt[--Yt],qt[Yt]=null,Hn=qt[--Yt],qt[Yt]=null,Wn=qt[--Yt],qt[Yt]=null}var zt=null,Rt=null,_e=!1,cn=null;function Wx(e,t){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function r0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,Rt=wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qr!==null?{id:Wn,overflow:Hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,zt=e,Rt=null,!0):!1;default:return!1}}function Yf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xf(e){if(_e){var t=Rt;if(t){var n=t;if(!r0(e,t)){if(Yf(e))throw Error(V(418));t=wr(n.nextSibling);var r=zt;t&&r0(e,t)?Wx(r,n):(e.flags=e.flags&-4097|2,_e=!1,zt=e)}}else{if(Yf(e))throw Error(V(418));e.flags=e.flags&-4097|2,_e=!1,zt=e}}}function i0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function vs(e){if(e!==zt)return!1;if(!_e)return i0(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wf(e.type,e.memoizedProps)),t&&(t=Rt)){if(Yf(e))throw Hx(),Error(V(418));for(;t;)Wx(e,t),t=wr(t.nextSibling)}if(i0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=zt?wr(e.stateNode.nextSibling):null;return!0}function Hx(){for(var e=Rt;e;)e=wr(e.nextSibling)}function Ki(){Rt=zt=null,_e=!1}function jh(e){cn===null?cn=[e]:cn.push(e)}var gT=tr.ReactCurrentBatchConfig;function an(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ml=$r(null),Il=null,Ai=null,$h=null;function Mh(){$h=Ai=Il=null}function Ih(e){var t=Ml.current;be(Ml),e._currentValue=t}function Kf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ui(e,t){Il=e,$h=Ai=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function Qt(e){var t=e._currentValue;if($h!==e)if(e={context:e,memoizedValue:t,next:null},Ai===null){if(Il===null)throw Error(V(308));Ai=e,Il.dependencies={lanes:0,firstContext:e}}else Ai=Ai.next=e;return t}var Wr=null;function Dh(e){Wr===null?Wr=[e]:Wr.push(e)}function Gx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qn(e,r)}function Qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cr=!1;function Lh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qn(e,n)}return i=r.interleaved,i===null?(t.next=t,Dh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qn(e,n)}function Gs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bh(e,n)}}function o0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Dl(e,t,n,r){var i=e.updateQueue;cr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;a=0,u=c=s=null,l=o;do{var v=l.lane,m=l.eventTime;if((r&v)===v){u!==null&&(u=u.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,y=l;switch(v=t,m=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){f=p.call(m,f,v);break e}f=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,v=typeof p=="function"?p.call(m,f,v):p,v==null)break e;f=Pe({},f,v);break e;case 2:cr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else m={eventTime:m,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=m,s=f):u=u.next=m,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(u===null&&(s=f),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Jr|=a,e.lanes=a,e.memoizedState=f}}function a0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Yx=new Gy.Component().refs;function Qf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ec={isMounted:function(e){return(e=e._reactInternals)?ci(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=_r(e),o=Gn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(fn(t,e,i,r),Gs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=_r(e),o=Gn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(fn(t,e,i,r),Gs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=_r(e),i=Gn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sr(e,i,r),t!==null&&(fn(t,e,r,n),Gs(t,e,r))}};function s0(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ba(n,r)||!ba(i,o):!0}function Xx(e,t,n){var r=!1,i=Pr,o=t.contextType;return typeof o=="object"&&o!==null?o=Qt(o):(i=Pt(t)?Kr:ut.current,r=t.contextTypes,o=(r=r!=null)?Xi(e,i):Pr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ec,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function l0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function Zf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Yx,Lh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Qt(o):(o=Pt(t)?Kr:ut.current,i.context=Xi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ec.enqueueReplaceState(i,i.state,null),Dl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Io(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Yx&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ys(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function c0(e){var t=e._init;return t(e._payload)}function Kx(e){function t(h,g){if(e){var b=h.deletions;b===null?(h.deletions=[g],h.flags|=16):b.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function i(h,g){return h=kr(h,g),h.index=0,h.sibling=null,h}function o(h,g,b){return h.index=b,e?(b=h.alternate,b!==null?(b=b.index,b<g?(h.flags|=2,g):b):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,g,b,S){return g===null||g.tag!==6?(g=hd(b,h.mode,S),g.return=h,g):(g=i(g,b),g.return=h,g)}function s(h,g,b,S){var k=b.type;return k===Pi?u(h,g,b.props.children,S,b.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===lr&&c0(k)===g.type)?(S=i(g,b.props),S.ref=Io(h,g,b),S.return=h,S):(S=Zs(b.type,b.key,b.props,null,h.mode,S),S.ref=Io(h,g,b),S.return=h,S)}function c(h,g,b,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=md(b,h.mode,S),g.return=h,g):(g=i(g,b.children||[]),g.return=h,g)}function u(h,g,b,S,k){return g===null||g.tag!==7?(g=Yr(b,h.mode,S,k),g.return=h,g):(g=i(g,b),g.return=h,g)}function f(h,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=hd(""+g,h.mode,b),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ss:return b=Zs(g.type,g.key,g.props,null,h.mode,b),b.ref=Io(h,null,g),b.return=h,b;case Ti:return g=md(g,h.mode,b),g.return=h,g;case lr:var S=g._init;return f(h,S(g._payload),b)}if(Ho(g)||Po(g))return g=Yr(g,h.mode,b,null),g.return=h,g;ys(h,g)}return null}function v(h,g,b,S){var k=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return k!==null?null:l(h,g,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ss:return b.key===k?s(h,g,b,S):null;case Ti:return b.key===k?c(h,g,b,S):null;case lr:return k=b._init,v(h,g,k(b._payload),S)}if(Ho(b)||Po(b))return k!==null?null:u(h,g,b,S,null);ys(h,b)}return null}function m(h,g,b,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(b)||null,l(g,h,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ss:return h=h.get(S.key===null?b:S.key)||null,s(g,h,S,k);case Ti:return h=h.get(S.key===null?b:S.key)||null,c(g,h,S,k);case lr:var T=S._init;return m(h,g,b,T(S._payload),k)}if(Ho(S)||Po(S))return h=h.get(b)||null,u(g,h,S,k,null);ys(g,S)}return null}function p(h,g,b,S){for(var k=null,T=null,E=g,_=g=0,$=null;E!==null&&_<b.length;_++){E.index>_?($=E,E=null):$=E.sibling;var M=v(h,E,b[_],S);if(M===null){E===null&&(E=$);break}e&&E&&M.alternate===null&&t(h,E),g=o(M,g,_),T===null?k=M:T.sibling=M,T=M,E=$}if(_===b.length)return n(h,E),_e&&Rr(h,_),k;if(E===null){for(;_<b.length;_++)E=f(h,b[_],S),E!==null&&(g=o(E,g,_),T===null?k=E:T.sibling=E,T=E);return _e&&Rr(h,_),k}for(E=r(h,E);_<b.length;_++)$=m(E,h,_,b[_],S),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?_:$.key),g=o($,g,_),T===null?k=$:T.sibling=$,T=$);return e&&E.forEach(function(A){return t(h,A)}),_e&&Rr(h,_),k}function y(h,g,b,S){var k=Po(b);if(typeof k!="function")throw Error(V(150));if(b=k.call(b),b==null)throw Error(V(151));for(var T=k=null,E=g,_=g=0,$=null,M=b.next();E!==null&&!M.done;_++,M=b.next()){E.index>_?($=E,E=null):$=E.sibling;var A=v(h,E,M.value,S);if(A===null){E===null&&(E=$);break}e&&E&&A.alternate===null&&t(h,E),g=o(A,g,_),T===null?k=A:T.sibling=A,T=A,E=$}if(M.done)return n(h,E),_e&&Rr(h,_),k;if(E===null){for(;!M.done;_++,M=b.next())M=f(h,M.value,S),M!==null&&(g=o(M,g,_),T===null?k=M:T.sibling=M,T=M);return _e&&Rr(h,_),k}for(E=r(h,E);!M.done;_++,M=b.next())M=m(E,h,_,M.value,S),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?_:M.key),g=o(M,g,_),T===null?k=M:T.sibling=M,T=M);return e&&E.forEach(function(I){return t(h,I)}),_e&&Rr(h,_),k}function w(h,g,b,S){if(typeof b=="object"&&b!==null&&b.type===Pi&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ss:e:{for(var k=b.key,T=g;T!==null;){if(T.key===k){if(k=b.type,k===Pi){if(T.tag===7){n(h,T.sibling),g=i(T,b.props.children),g.return=h,h=g;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===lr&&c0(k)===T.type){n(h,T.sibling),g=i(T,b.props),g.ref=Io(h,T,b),g.return=h,h=g;break e}n(h,T);break}else t(h,T);T=T.sibling}b.type===Pi?(g=Yr(b.props.children,h.mode,S,b.key),g.return=h,h=g):(S=Zs(b.type,b.key,b.props,null,h.mode,S),S.ref=Io(h,g,b),S.return=h,h=S)}return a(h);case Ti:e:{for(T=b.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(h,g.sibling),g=i(g,b.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=md(b,h.mode,S),g.return=h,h=g}return a(h);case lr:return T=b._init,w(h,g,T(b._payload),S)}if(Ho(b))return p(h,g,b,S);if(Po(b))return y(h,g,b,S);ys(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(n(h,g.sibling),g=i(g,b),g.return=h,h=g):(n(h,g),g=hd(b,h.mode,S),g.return=h,h=g),a(h)):n(h,g)}return w}var Qi=Kx(!0),Qx=Kx(!1),Ha={},Pn=$r(Ha),_a=$r(Ha),ka=$r(Ha);function Hr(e){if(e===Ha)throw Error(V(174));return e}function Ah(e,t){switch(ve(ka,t),ve(_a,e),ve(Pn,Ha),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jf(t,e)}be(Pn),ve(Pn,t)}function Zi(){be(Pn),be(_a),be(ka)}function Zx(e){Hr(ka.current);var t=Hr(Pn.current),n=jf(t,e.type);t!==n&&(ve(_a,e),ve(Pn,n))}function Rh(e){_a.current===e&&(be(Pn),be(_a))}var ke=$r(0);function Ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ld=[];function Fh(){for(var e=0;e<ld.length;e++)ld[e]._workInProgressVersionPrimary=null;ld.length=0}var qs=tr.ReactCurrentDispatcher,cd=tr.ReactCurrentBatchConfig,Zr=0,Ee=null,Ne=null,Ye=null,Al=!1,ia=!1,Ea=0,vT=0;function rt(){throw Error(V(321))}function zh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function Nh(e,t,n,r,i,o){if(Zr=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qs.current=e===null||e.memoizedState===null?wT:ST,e=n(r,i),ia){o=0;do{if(ia=!1,Ea=0,25<=o)throw Error(V(301));o+=1,Ye=Ne=null,t.updateQueue=null,qs.current=CT,e=n(r,i)}while(ia)}if(qs.current=Rl,t=Ne!==null&&Ne.next!==null,Zr=0,Ye=Ne=Ee=null,Al=!1,t)throw Error(V(300));return e}function Bh(){var e=Ea!==0;return Ea=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ee.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Zt(){if(Ne===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ye===null?Ee.memoizedState:Ye.next;if(t!==null)Ye=t,Ne=e;else{if(e===null)throw Error(V(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ye===null?Ee.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ta(e,t){return typeof t=="function"?t(e):t}function ud(e){var t=Zt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var u=c.lane;if((Zr&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,Ee.lanes|=u,Jr|=u}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,gn(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,Jr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dd(e){var t=Zt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);gn(o,t.memoizedState)||(Et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Jx(){}function eb(e,t){var n=Ee,r=Zt(),i=t(),o=!gn(r.memoizedState,i);if(o&&(r.memoizedState=i,Et=!0),r=r.queue,Vh(rb.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Pa(9,nb.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(V(349));Zr&30||tb(n,t,i)}return i}function tb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nb(e,t,n,r){t.value=n,t.getSnapshot=r,ib(t)&&ob(e)}function rb(e,t,n){return n(function(){ib(t)&&ob(e)})}function ib(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function ob(e){var t=Qn(e,1);t!==null&&fn(t,e,1,-1)}function u0(e){var t=Sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},t.queue=e,e=e.dispatch=bT.bind(null,Ee,e),[t.memoizedState,e]}function Pa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ab(){return Zt().memoizedState}function Ys(e,t,n,r){var i=Sn();Ee.flags|=e,i.memoizedState=Pa(1|t,n,void 0,r===void 0?null:r)}function Tc(e,t,n,r){var i=Zt();r=r===void 0?null:r;var o=void 0;if(Ne!==null){var a=Ne.memoizedState;if(o=a.destroy,r!==null&&zh(r,a.deps)){i.memoizedState=Pa(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=Pa(1|t,n,o,r)}function d0(e,t){return Ys(8390656,8,e,t)}function Vh(e,t){return Tc(2048,8,e,t)}function sb(e,t){return Tc(4,2,e,t)}function lb(e,t){return Tc(4,4,e,t)}function cb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ub(e,t,n){return n=n!=null?n.concat([e]):null,Tc(4,4,cb.bind(null,t,e),n)}function Uh(){}function db(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fb(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pb(e,t,n){return Zr&21?(gn(n,t)||(n=gx(),Ee.lanes|=n,Jr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function yT(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=cd.transition;cd.transition={};try{e(!1),t()}finally{me=n,cd.transition=r}}function hb(){return Zt().memoizedState}function xT(e,t,n){var r=_r(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mb(e))gb(t,n);else if(n=Gx(e,t,n,r),n!==null){var i=gt();fn(n,e,r,i),vb(n,t,r)}}function bT(e,t,n){var r=_r(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mb(e))gb(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,a)){var s=t.interleaved;s===null?(i.next=i,Dh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Gx(e,t,i,r),n!==null&&(i=gt(),fn(n,e,r,i),vb(n,t,r))}}function mb(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function gb(e,t){ia=Al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bh(e,n)}}var Rl={readContext:Qt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},wT={readContext:Qt,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:d0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ys(4194308,4,cb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ys(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ys(4,2,e,t)},useMemo:function(e,t){var n=Sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xT.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:u0,useDebugValue:Uh,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=u0(!1),t=e[0];return e=yT.bind(null,e[1]),Sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=Sn();if(_e){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Xe===null)throw Error(V(349));Zr&30||tb(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,d0(rb.bind(null,r,o,e),[e]),r.flags|=2048,Pa(9,nb.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Sn(),t=Xe.identifierPrefix;if(_e){var n=Hn,r=Wn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ea++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vT++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ST={readContext:Qt,useCallback:db,useContext:Qt,useEffect:Vh,useImperativeHandle:ub,useInsertionEffect:sb,useLayoutEffect:lb,useMemo:fb,useReducer:ud,useRef:ab,useState:function(){return ud(Ta)},useDebugValue:Uh,useDeferredValue:function(e){var t=Zt();return pb(t,Ne.memoizedState,e)},useTransition:function(){var e=ud(Ta)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:Jx,useSyncExternalStore:eb,useId:hb,unstable_isNewReconciler:!1},CT={readContext:Qt,useCallback:db,useContext:Qt,useEffect:Vh,useImperativeHandle:ub,useInsertionEffect:sb,useLayoutEffect:lb,useMemo:fb,useReducer:dd,useRef:ab,useState:function(){return dd(Ta)},useDebugValue:Uh,useDeferredValue:function(e){var t=Zt();return Ne===null?t.memoizedState=e:pb(t,Ne.memoizedState,e)},useTransition:function(){var e=dd(Ta)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:Jx,useSyncExternalStore:eb,useId:hb,unstable_isNewReconciler:!1};function Ji(e,t){try{var n="",r=t;do n+=Qk(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _T=typeof WeakMap=="function"?WeakMap:Map;function yb(e,t,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zl||(zl=!0,cp=r),Jf(e,t)},n}function xb(e,t,n){n=Gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Jf(e,t),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function f0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _T;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=FT.bind(null,e,t,n),t.then(e,e))}function p0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function h0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gn(-1,1),t.tag=2,Sr(n,t,1))),n.lanes|=1),e)}var kT=tr.ReactCurrentOwner,Et=!1;function ht(e,t,n,r){t.child=e===null?Qx(t,null,n,r):Qi(t,e.child,n,r)}function m0(e,t,n,r,i){n=n.render;var o=t.ref;return Ui(t,i),r=Nh(e,t,n,r,o,i),n=Bh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(_e&&n&&Ph(t),t.flags|=1,ht(e,t,r,i),t.child)}function g0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Qh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,bb(e,t,o,r,i)):(e=Zs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(a,r)&&e.ref===t.ref)return Zn(e,t,i)}return t.flags|=1,e=kr(o,r),e.ref=t.ref,e.return=t,t.child=e}function bb(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ba(o,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Zn(e,t,i)}return ep(e,t,n,r,i)}function wb(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Fi,Lt),Lt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Fi,Lt),Lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(Fi,Lt),Lt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ve(Fi,Lt),Lt|=r;return ht(e,t,i,n),t.child}function Sb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ep(e,t,n,r,i){var o=Pt(n)?Kr:ut.current;return o=Xi(t,o),Ui(t,i),n=Nh(e,t,n,r,o,i),r=Bh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(_e&&r&&Ph(t),t.flags|=1,ht(e,t,n,i),t.child)}function v0(e,t,n,r,i){if(Pt(n)){var o=!0;Ol(t)}else o=!1;if(Ui(t,i),t.stateNode===null)Xs(e,t),Xx(t,n,r),Zf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qt(c):(c=Pt(n)?Kr:ut.current,c=Xi(t,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&l0(t,a,r,c),cr=!1;var v=t.memoizedState;a.state=v,Dl(t,r,a,i),s=t.memoizedState,l!==r||v!==s||Tt.current||cr?(typeof u=="function"&&(Qf(t,n,u,r),s=t.memoizedState),(l=cr||s0(t,n,l,r,v,s,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qx(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:an(t.type,l),a.props=c,f=t.pendingProps,v=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Qt(s):(s=Pt(n)?Kr:ut.current,s=Xi(t,s));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||v!==s)&&l0(t,a,r,s),cr=!1,v=t.memoizedState,a.state=v,Dl(t,r,a,i);var p=t.memoizedState;l!==f||v!==p||Tt.current||cr?(typeof m=="function"&&(Qf(t,n,m,r),p=t.memoizedState),(c=cr||s0(t,n,c,r,v,p,s)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,p,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,p,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return tp(e,t,n,r,o,i)}function tp(e,t,n,r,i,o){Sb(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&n0(t,n,!1),Zn(e,t,o);r=t.stateNode,kT.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Qi(t,e.child,null,o),t.child=Qi(t,null,l,o)):ht(e,t,l,o),t.memoizedState=r.state,i&&n0(t,n,!0),t.child}function Cb(e){var t=e.stateNode;t.pendingContext?t0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&t0(e,t.context,!1),Ah(e,t.containerInfo)}function y0(e,t,n,r,i){return Ki(),jh(i),t.flags|=256,ht(e,t,n,r),t.child}var np={dehydrated:null,treeContext:null,retryLane:0};function rp(e){return{baseLanes:e,cachePool:null,transitions:null}}function _b(e,t,n){var r=t.pendingProps,i=ke.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(ke,i&1),e===null)return Xf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=jc(a,r,0,null),e=Yr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=rp(n),t.memoizedState=np,e):Wh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ET(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=kr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=kr(l,o):(o=Yr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?rp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=np,r}return o=e.child,e=o.sibling,r=kr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wh(e,t){return t=jc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xs(e,t,n,r){return r!==null&&jh(r),Qi(t,e.child,null,n),e=Wh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ET(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=fd(Error(V(422))),xs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=jc({mode:"visible",children:r.children},i,0,null),o=Yr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Qi(t,e.child,null,a),t.child.memoizedState=rp(a),t.memoizedState=np,o);if(!(t.mode&1))return xs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=fd(o,r,void 0),xs(e,t,a,r)}if(l=(a&e.childLanes)!==0,Et||l){if(r=Xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qn(e,i),fn(r,e,i,-1))}return Kh(),r=fd(Error(V(421))),xs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zT.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Rt=wr(i.nextSibling),zt=t,_e=!0,cn=null,e!==null&&(qt[Yt++]=Wn,qt[Yt++]=Hn,qt[Yt++]=Qr,Wn=e.id,Hn=e.overflow,Qr=t),t=Wh(t,r.children),t.flags|=4096,t)}function x0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kf(e.return,t,n)}function pd(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function kb(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ht(e,t,r.children,n),r=ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&x0(e,n,t);else if(e.tag===19)x0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(ke,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ll(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ll(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pd(t,!0,n,null,o);break;case"together":pd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=kr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function TT(e,t,n){switch(t.tag){case 3:Cb(t),Ki();break;case 5:Zx(t);break;case 1:Pt(t.type)&&Ol(t);break;case 4:Ah(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(ke,ke.current&1),t.flags|=128,null):n&t.child.childLanes?_b(e,t,n):(ve(ke,ke.current&1),e=Zn(e,t,n),e!==null?e.sibling:null);ve(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,wb(e,t,n)}return Zn(e,t,n)}var Eb,ip,Tb,Pb;Eb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ip=function(){};Tb=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Hr(Pn.current);var o=null;switch(n){case"input":i=Ef(e,i),r=Ef(e,r),o=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),o=[];break;case"textarea":i=Of(e,i),r=Of(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Tl)}$f(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(pa.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(pa.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ye("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Pb=function(e,t,n,r){n!==r&&(t.flags|=4)};function Do(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function PT(e,t,n){var r=t.pendingProps;switch(Oh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return Pt(t.type)&&Pl(),it(t),null;case 3:return r=t.stateNode,Zi(),be(Tt),be(ut),Fh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,cn!==null&&(fp(cn),cn=null))),ip(e,t),it(t),null;case 5:Rh(t);var i=Hr(ka.current);if(n=t.type,e!==null&&t.stateNode!=null)Tb(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return it(t),null}if(e=Hr(Pn.current),vs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kn]=t,r[Ca]=o,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)ye(qo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Pg(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":jg(r,o),ye("invalid",r)}$f(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),i=["children",""+l]):pa.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":ls(r),Og(r,o,!0);break;case"textarea":ls(r),$g(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Tl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tx(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[kn]=t,e[Ca]=r,Eb(e,t,!1,!1),t.stateNode=e;e:{switch(a=Mf(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)ye(qo[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":Pg(e,r),i=Ef(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ye("invalid",e);break;case"textarea":jg(e,r),i=Of(e,r),ye("invalid",e);break;default:i=r}$f(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ix(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&nx(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ha(e,s):typeof s=="number"&&ha(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(pa.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ye("scroll",e):s!=null&&hh(e,o,s,a))}switch(n){case"input":ls(e),Og(e,r,!1);break;case"textarea":ls(e),$g(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?zi(e,!!r.multiple,o,!1):r.defaultValue!=null&&zi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)Pb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Hr(ka.current),Hr(Pn.current),vs(t)){if(r=t.stateNode,n=t.memoizedProps,r[kn]=t,(o=r.nodeValue!==n)&&(e=zt,e!==null))switch(e.tag){case 3:gs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=t,t.stateNode=r}return it(t),null;case 13:if(be(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&Rt!==null&&t.mode&1&&!(t.flags&128))Hx(),Ki(),t.flags|=98560,o=!1;else if(o=vs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[kn]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),o=!1}else cn!==null&&(fp(cn),cn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ke.current&1?Ve===0&&(Ve=3):Kh())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return Zi(),ip(e,t),e===null&&wa(t.stateNode.containerInfo),it(t),null;case 10:return Ih(t.type._context),it(t),null;case 17:return Pt(t.type)&&Pl(),it(t),null;case 19:if(be(ke),o=t.memoizedState,o===null)return it(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Do(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ll(e),a!==null){for(t.flags|=128,Do(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(ke,ke.current&1|2),t.child}e=e.sibling}o.tail!==null&&$e()>eo&&(t.flags|=128,r=!0,Do(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ll(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Do(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return it(t),null}else 2*$e()-o.renderingStartTime>eo&&n!==1073741824&&(t.flags|=128,r=!0,Do(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=$e(),t.sibling=null,n=ke.current,ve(ke,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return Xh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Lt&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function OT(e,t){switch(Oh(t),t.tag){case 1:return Pt(t.type)&&Pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(),be(Tt),be(ut),Fh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rh(t),null;case 13:if(be(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(ke),null;case 4:return Zi(),null;case 10:return Ih(t.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var bs=!1,lt=!1,jT=typeof WeakSet=="function"?WeakSet:Set,G=null;function Ri(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function op(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var b0=!1;function $T(e,t){if(Vf=_l,e=Mx(),Th(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,u=0,f=e,v=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)v=f,f=m;for(;;){if(f===e)break t;if(v===n&&++c===i&&(l=a),v===o&&++u===r&&(s=a),(m=f.nextSibling)!==null)break;f=v,v=f.parentNode}f=m}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:e,selectionRange:n},_l=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,w=p.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:an(t.type,y),w);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return p=b0,b0=!1,p}function oa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&op(t,n,o)}i=i.next}while(i!==r)}}function Pc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ap(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ob(e){var t=e.alternate;t!==null&&(e.alternate=null,Ob(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kn],delete t[Ca],delete t[Gf],delete t[pT],delete t[hT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jb(e){return e.tag===5||e.tag===3||e.tag===4}function w0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tl));else if(r!==4&&(e=e.child,e!==null))for(sp(e,t,n),e=e.sibling;e!==null;)sp(e,t,n),e=e.sibling}function lp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lp(e,t,n),e=e.sibling;e!==null;)lp(e,t,n),e=e.sibling}var Je=null,sn=!1;function ar(e,t,n){for(n=n.child;n!==null;)$b(e,t,n),n=n.sibling}function $b(e,t,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:lt||Ri(n,t);case 6:var r=Je,i=sn;Je=null,ar(e,t,n),Je=r,sn=i,Je!==null&&(sn?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(sn?(e=Je,n=n.stateNode,e.nodeType===8?ad(e.parentNode,n):e.nodeType===1&&ad(e,n),ya(e)):ad(Je,n.stateNode));break;case 4:r=Je,i=sn,Je=n.stateNode.containerInfo,sn=!0,ar(e,t,n),Je=r,sn=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&op(n,t,a),i=i.next}while(i!==r)}ar(e,t,n);break;case 1:if(!lt&&(Ri(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,t,l)}ar(e,t,n);break;case 21:ar(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,ar(e,t,n),lt=r):ar(e,t,n);break;default:ar(e,t,n)}}function S0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jT),t.forEach(function(r){var i=NT.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,sn=!1;break e;case 3:Je=l.stateNode.containerInfo,sn=!0;break e;case 4:Je=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(Je===null)throw Error(V(160));$b(o,a,i),Je=null,sn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Oe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mb(t,e),t=t.sibling}function Mb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),bn(e),r&4){try{oa(3,e,e.return),Pc(3,e)}catch(y){Oe(e,e.return,y)}try{oa(5,e,e.return)}catch(y){Oe(e,e.return,y)}}break;case 1:tn(t,e),bn(e),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(tn(t,e),bn(e),r&512&&n!==null&&Ri(n,n.return),e.flags&32){var i=e.stateNode;try{ha(i,"")}catch(y){Oe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Jy(i,o),Mf(l,a);var c=Mf(l,o);for(a=0;a<s.length;a+=2){var u=s[a],f=s[a+1];u==="style"?ix(i,f):u==="dangerouslySetInnerHTML"?nx(i,f):u==="children"?ha(i,f):hh(i,u,f,c)}switch(l){case"input":Tf(i,o);break;case"textarea":ex(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?zi(i,!!o.multiple,m,!1):v!==!!o.multiple&&(o.defaultValue!=null?zi(i,!!o.multiple,o.defaultValue,!0):zi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ca]=o}catch(y){Oe(e,e.return,y)}}break;case 6:if(tn(t,e),bn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Oe(e,e.return,y)}}break;case 3:if(tn(t,e),bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(t.containerInfo)}catch(y){Oe(e,e.return,y)}break;case 4:tn(t,e),bn(e);break;case 13:tn(t,e),bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(qh=$e())),r&4&&S0(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(c=lt)||u,tn(t,e),lt=c):tn(t,e),bn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(G=e,u=e.child;u!==null;){for(f=G=u;G!==null;){switch(v=G,m=v.child,v.tag){case 0:case 11:case 14:case 15:oa(4,v,v.return);break;case 1:Ri(v,v.return);var p=v.stateNode;if(typeof p.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(y){Oe(r,n,y)}}break;case 5:Ri(v,v.return);break;case 22:if(v.memoizedState!==null){_0(f);continue}}m!==null?(m.return=v,G=m):_0(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=rx("display",a))}catch(y){Oe(e,e.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Oe(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tn(t,e),bn(e),r&4&&S0(e);break;case 21:break;default:tn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jb(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ha(i,""),r.flags&=-33);var o=w0(e);lp(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=w0(e);sp(e,l,a);break;default:throw Error(V(161))}}catch(s){Oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function MT(e,t,n){G=e,Ib(e)}function Ib(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||bs;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||lt;l=bs;var c=lt;if(bs=a,(lt=s)&&!c)for(G=i;G!==null;)a=G,s=a.child,a.tag===22&&a.memoizedState!==null?k0(i):s!==null?(s.return=a,G=s):k0(i);for(;o!==null;)G=o,Ib(o),o=o.sibling;G=i,bs=l,lt=c}C0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,G=o):C0(e)}}function C0(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||Pc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:an(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&a0(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}a0(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ya(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}lt||t.flags&512&&ap(t)}catch(v){Oe(t,t.return,v)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function _0(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function k0(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pc(4,t)}catch(s){Oe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Oe(t,i,s)}}var o=t.return;try{ap(t)}catch(s){Oe(t,o,s)}break;case 5:var a=t.return;try{ap(t)}catch(s){Oe(t,a,s)}}}catch(s){Oe(t,t.return,s)}if(t===e){G=null;break}var l=t.sibling;if(l!==null){l.return=t.return,G=l;break}G=t.return}}var IT=Math.ceil,Fl=tr.ReactCurrentDispatcher,Hh=tr.ReactCurrentOwner,Kt=tr.ReactCurrentBatchConfig,se=0,Xe=null,Re=null,tt=0,Lt=0,Fi=$r(0),Ve=0,Oa=null,Jr=0,Oc=0,Gh=0,aa=null,kt=null,qh=0,eo=1/0,Fn=null,zl=!1,cp=null,Cr=null,ws=!1,hr=null,Nl=0,sa=0,up=null,Ks=-1,Qs=0;function gt(){return se&6?$e():Ks!==-1?Ks:Ks=$e()}function _r(e){return e.mode&1?se&2&&tt!==0?tt&-tt:gT.transition!==null?(Qs===0&&(Qs=gx()),Qs):(e=me,e!==0||(e=window.event,e=e===void 0?16:Cx(e.type)),e):1}function fn(e,t,n,r){if(50<sa)throw sa=0,up=null,Error(V(185));Va(e,n,r),(!(se&2)||e!==Xe)&&(e===Xe&&(!(se&2)&&(Oc|=n),Ve===4&&dr(e,tt)),Ot(e,r),n===1&&se===0&&!(t.mode&1)&&(eo=$e()+500,kc&&Mr()))}function Ot(e,t){var n=e.callbackNode;gE(e,t);var r=Cl(e,e===Xe?tt:0);if(r===0)n!==null&&Dg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Dg(n),t===1)e.tag===0?mT(E0.bind(null,e)):Vx(E0.bind(null,e)),dT(function(){!(se&6)&&Mr()}),n=null;else{switch(vx(r)){case 1:n=xh;break;case 4:n=hx;break;case 16:n=Sl;break;case 536870912:n=mx;break;default:n=Sl}n=Bb(n,Db.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Db(e,t){if(Ks=-1,Qs=0,se&6)throw Error(V(327));var n=e.callbackNode;if(Wi()&&e.callbackNode!==n)return null;var r=Cl(e,e===Xe?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bl(e,r);else{t=r;var i=se;se|=2;var o=Ab();(Xe!==e||tt!==t)&&(Fn=null,eo=$e()+500,qr(e,t));do try{AT();break}catch(l){Lb(e,l)}while(1);Mh(),Fl.current=o,se=i,Re!==null?t=0:(Xe=null,tt=0,t=Ve)}if(t!==0){if(t===2&&(i=Rf(e),i!==0&&(r=i,t=dp(e,i))),t===1)throw n=Oa,qr(e,0),dr(e,r),Ot(e,$e()),n;if(t===6)dr(e,r);else{if(i=e.current.alternate,!(r&30)&&!DT(i)&&(t=Bl(e,r),t===2&&(o=Rf(e),o!==0&&(r=o,t=dp(e,o))),t===1))throw n=Oa,qr(e,0),dr(e,r),Ot(e,$e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Fr(e,kt,Fn);break;case 3:if(dr(e,r),(r&130023424)===r&&(t=qh+500-$e(),10<t)){if(Cl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hf(Fr.bind(null,e,kt,Fn),t);break}Fr(e,kt,Fn);break;case 4:if(dr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IT(r/1960))-r,10<r){e.timeoutHandle=Hf(Fr.bind(null,e,kt,Fn),r);break}Fr(e,kt,Fn);break;case 5:Fr(e,kt,Fn);break;default:throw Error(V(329))}}}return Ot(e,$e()),e.callbackNode===n?Db.bind(null,e):null}function dp(e,t){var n=aa;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=Bl(e,t),e!==2&&(t=kt,kt=n,t!==null&&fp(t)),e}function fp(e){kt===null?kt=e:kt.push.apply(kt,e)}function DT(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~Gh,t&=~Oc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dn(t),r=1<<n;e[n]=-1,t&=~r}}function E0(e){if(se&6)throw Error(V(327));Wi();var t=Cl(e,0);if(!(t&1))return Ot(e,$e()),null;var n=Bl(e,t);if(e.tag!==0&&n===2){var r=Rf(e);r!==0&&(t=r,n=dp(e,r))}if(n===1)throw n=Oa,qr(e,0),dr(e,t),Ot(e,$e()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fr(e,kt,Fn),Ot(e,$e()),null}function Yh(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(eo=$e()+500,kc&&Mr())}}function ei(e){hr!==null&&hr.tag===0&&!(se&6)&&Wi();var t=se;se|=1;var n=Kt.transition,r=me;try{if(Kt.transition=null,me=1,e)return e()}finally{me=r,Kt.transition=n,se=t,!(se&6)&&Mr()}}function Xh(){Lt=Fi.current,be(Fi)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uT(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pl();break;case 3:Zi(),be(Tt),be(ut),Fh();break;case 5:Rh(r);break;case 4:Zi();break;case 13:be(ke);break;case 19:be(ke);break;case 10:Ih(r.type._context);break;case 22:case 23:Xh()}n=n.return}if(Xe=e,Re=e=kr(e.current,null),tt=Lt=t,Ve=0,Oa=null,Gh=Oc=Jr=0,kt=aa=null,Wr!==null){for(t=0;t<Wr.length;t++)if(n=Wr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Wr=null}return e}function Lb(e,t){do{var n=Re;try{if(Mh(),qs.current=Rl,Al){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Al=!1}if(Zr=0,Ye=Ne=Ee=null,ia=!1,Ea=0,Hh.current=null,n===null||n.return===null){Ve=1,Oa=t,Re=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=tt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=l,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var v=u.alternate;v?(u.updateQueue=v.updateQueue,u.memoizedState=v.memoizedState,u.lanes=v.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=p0(a);if(m!==null){m.flags&=-257,h0(m,a,l,o,t),m.mode&1&&f0(o,c,t),t=m,s=c;var p=t.updateQueue;if(p===null){var y=new Set;y.add(s),t.updateQueue=y}else p.add(s);break e}else{if(!(t&1)){f0(o,c,t),Kh();break e}s=Error(V(426))}}else if(_e&&l.mode&1){var w=p0(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),h0(w,a,l,o,t),jh(Ji(s,l));break e}}o=s=Ji(s,l),Ve!==4&&(Ve=2),aa===null?aa=[o]:aa.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=yb(o,s,t);o0(o,h);break e;case 1:l=s;var g=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Cr===null||!Cr.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=xb(o,l,t);o0(o,S);break e}}o=o.return}while(o!==null)}Fb(n)}catch(k){t=k,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function Ab(){var e=Fl.current;return Fl.current=Rl,e===null?Rl:e}function Kh(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Xe===null||!(Jr&268435455)&&!(Oc&268435455)||dr(Xe,tt)}function Bl(e,t){var n=se;se|=2;var r=Ab();(Xe!==e||tt!==t)&&(Fn=null,qr(e,t));do try{LT();break}catch(i){Lb(e,i)}while(1);if(Mh(),se=n,Fl.current=r,Re!==null)throw Error(V(261));return Xe=null,tt=0,Ve}function LT(){for(;Re!==null;)Rb(Re)}function AT(){for(;Re!==null&&!sE();)Rb(Re)}function Rb(e){var t=Nb(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?Fb(e):Re=t,Hh.current=null}function Fb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=OT(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Re=null;return}}else if(n=PT(n,t,Lt),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ve===0&&(Ve=5)}function Fr(e,t,n){var r=me,i=Kt.transition;try{Kt.transition=null,me=1,RT(e,t,n,r)}finally{Kt.transition=i,me=r}return null}function RT(e,t,n,r){do Wi();while(hr!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(vE(e,o),e===Xe&&(Re=Xe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ws||(ws=!0,Bb(Sl,function(){return Wi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Kt.transition,Kt.transition=null;var a=me;me=1;var l=se;se|=4,Hh.current=null,$T(e,n),Mb(n,e),rT(Uf),_l=!!Vf,Uf=Vf=null,e.current=n,MT(n),lE(),se=l,me=a,Kt.transition=o}else e.current=n;if(ws&&(ws=!1,hr=e,Nl=i),o=e.pendingLanes,o===0&&(Cr=null),dE(n.stateNode),Ot(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zl)throw zl=!1,e=cp,cp=null,e;return Nl&1&&e.tag!==0&&Wi(),o=e.pendingLanes,o&1?e===up?sa++:(sa=0,up=e):sa=0,Mr(),null}function Wi(){if(hr!==null){var e=vx(Nl),t=Kt.transition,n=me;try{if(Kt.transition=null,me=16>e?16:e,hr===null)var r=!1;else{if(e=hr,hr=null,Nl=0,se&6)throw Error(V(331));var i=se;for(se|=4,G=e.current;G!==null;){var o=G,a=o.child;if(G.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(G=c;G!==null;){var u=G;switch(u.tag){case 0:case 11:case 15:oa(8,u,o)}var f=u.child;if(f!==null)f.return=u,G=f;else for(;G!==null;){u=G;var v=u.sibling,m=u.return;if(Ob(u),u===c){G=null;break}if(v!==null){v.return=m,G=v;break}G=m}}}var p=o.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}G=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,G=a;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:oa(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,G=h;break e}G=o.return}}var g=e.current;for(G=g;G!==null;){a=G;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,G=b;else e:for(a=g;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pc(9,l)}}catch(k){Oe(l,l.return,k)}if(l===a){G=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,G=S;break e}G=l.return}}if(se=i,Mr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(bc,e)}catch{}r=!0}return r}finally{me=n,Kt.transition=t}}return!1}function T0(e,t,n){t=Ji(n,t),t=yb(e,t,1),e=Sr(e,t,1),t=gt(),e!==null&&(Va(e,1,t),Ot(e,t))}function Oe(e,t,n){if(e.tag===3)T0(e,e,n);else for(;t!==null;){if(t.tag===3){T0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){e=Ji(n,e),e=xb(t,e,1),t=Sr(t,e,1),e=gt(),t!==null&&(Va(t,1,e),Ot(t,e));break}}t=t.return}}function FT(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(tt&n)===n&&(Ve===4||Ve===3&&(tt&130023424)===tt&&500>$e()-qh?qr(e,0):Gh|=n),Ot(e,t)}function zb(e,t){t===0&&(e.mode&1?(t=ds,ds<<=1,!(ds&130023424)&&(ds=4194304)):t=1);var n=gt();e=Qn(e,t),e!==null&&(Va(e,t,n),Ot(e,n))}function zT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zb(e,n)}function NT(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),zb(e,n)}var Nb;Nb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,TT(e,t,n);Et=!!(e.flags&131072)}else Et=!1,_e&&t.flags&1048576&&Ux(t,$l,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xs(e,t),e=t.pendingProps;var i=Xi(t,ut.current);Ui(t,n),i=Nh(null,t,r,e,i,n);var o=Bh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(r)?(o=!0,Ol(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lh(t),i.updater=Ec,t.stateNode=i,i._reactInternals=t,Zf(t,r,e,n),t=tp(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&Ph(t),ht(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=VT(r),e=an(r,e),i){case 0:t=ep(null,t,r,e,n);break e;case 1:t=v0(null,t,r,e,n);break e;case 11:t=m0(null,t,r,e,n);break e;case 14:t=g0(null,t,r,an(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),ep(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),v0(e,t,r,i,n);case 3:e:{if(Cb(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,qx(e,t),Dl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ji(Error(V(423)),t),t=y0(e,t,r,n,i);break e}else if(r!==i){i=Ji(Error(V(424)),t),t=y0(e,t,r,n,i);break e}else for(Rt=wr(t.stateNode.containerInfo.firstChild),zt=t,_e=!0,cn=null,n=Qx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){t=Zn(e,t,n);break e}ht(e,t,r,n)}t=t.child}return t;case 5:return Zx(t),e===null&&Xf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Wf(r,i)?a=null:o!==null&&Wf(r,o)&&(t.flags|=32),Sb(e,t),ht(e,t,a,n),t.child;case 6:return e===null&&Xf(t),null;case 13:return _b(e,t,n);case 4:return Ah(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qi(t,null,r,n):ht(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),m0(e,t,r,i,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ve(Ml,r._currentValue),r._currentValue=a,o!==null)if(gn(o.value,a)){if(o.children===i.children&&!Tt.current){t=Zn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Gn(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Kf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Kf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ht(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ui(t,n),i=Qt(i),r=r(i),t.flags|=1,ht(e,t,r,n),t.child;case 14:return r=t.type,i=an(r,t.pendingProps),i=an(r.type,i),g0(e,t,r,i,n);case 15:return bb(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),Xs(e,t),t.tag=1,Pt(r)?(e=!0,Ol(t)):e=!1,Ui(t,n),Xx(t,r,i),Zf(t,r,i,n),tp(null,t,r,!0,e,n);case 19:return kb(e,t,n);case 22:return wb(e,t,n)}throw Error(V(156,t.tag))};function Bb(e,t){return px(e,t)}function BT(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,r){return new BT(e,t,n,r)}function Qh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function VT(e){if(typeof e=="function")return Qh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gh)return 11;if(e===vh)return 14}return 2}function kr(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Qh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Pi:return Yr(n.children,i,o,t);case mh:a=8,i|=8;break;case Sf:return e=Xt(12,n,t,i|2),e.elementType=Sf,e.lanes=o,e;case Cf:return e=Xt(13,n,t,i),e.elementType=Cf,e.lanes=o,e;case _f:return e=Xt(19,n,t,i),e.elementType=_f,e.lanes=o,e;case Ky:return jc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yy:a=10;break e;case Xy:a=9;break e;case gh:a=11;break e;case vh:a=14;break e;case lr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Xt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yr(e,t,n,r){return e=Xt(7,e,r,t),e.lanes=n,e}function jc(e,t,n,r){return e=Xt(22,e,r,t),e.elementType=Ky,e.lanes=n,e.stateNode={isHidden:!1},e}function hd(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function md(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function UT(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zh(e,t,n,r,i,o,a,l,s){return e=new UT(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lh(o),e}function WT(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vb(e){if(!e)return Pr;e=e._reactInternals;e:{if(ci(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Pt(n))return Bx(e,n,t)}return t}function Ub(e,t,n,r,i,o,a,l,s){return e=Zh(n,r,!0,e,i,o,a,l,s),e.context=Vb(null),n=e.current,r=gt(),i=_r(n),o=Gn(r,i),o.callback=t??null,Sr(n,o,i),e.current.lanes=i,Va(e,i,r),Ot(e,r),e}function $c(e,t,n,r){var i=t.current,o=gt(),a=_r(i);return n=Vb(n),t.context===null?t.context=n:t.pendingContext=n,t=Gn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sr(i,t,a),e!==null&&(fn(e,i,a,o),Gs(e,i,a)),a}function Vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function P0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jh(e,t){P0(e,t),(e=e.alternate)&&P0(e,t)}function HT(){return null}var Wb=typeof reportError=="function"?reportError:function(e){console.error(e)};function em(e){this._internalRoot=e}Mc.prototype.render=em.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));$c(e,t,null,null)};Mc.prototype.unmount=em.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ei(function(){$c(null,e,null,null)}),t[Kn]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var t=bx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ur.length&&t!==0&&t<ur[n].priority;n++);ur.splice(n,0,e),n===0&&Sx(e)}};function tm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ic(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function O0(){}function GT(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Vl(a);o.call(c)}}var a=Ub(t,r,e,0,null,!1,!1,"",O0);return e._reactRootContainer=a,e[Kn]=a.current,wa(e.nodeType===8?e.parentNode:e),ei(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Vl(s);l.call(c)}}var s=Zh(e,0,!1,null,null,!1,!1,"",O0);return e._reactRootContainer=s,e[Kn]=s.current,wa(e.nodeType===8?e.parentNode:e),ei(function(){$c(t,s,n,r)}),s}function Dc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Vl(a);l.call(s)}}$c(t,a,e,i)}else a=GT(n,t,e,i,r);return Vl(a)}yx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Go(t.pendingLanes);n!==0&&(bh(t,n|1),Ot(t,$e()),!(se&6)&&(eo=$e()+500,Mr()))}break;case 13:ei(function(){var r=Qn(e,1);if(r!==null){var i=gt();fn(r,e,1,i)}}),Jh(e,1)}};wh=function(e){if(e.tag===13){var t=Qn(e,134217728);if(t!==null){var n=gt();fn(t,e,134217728,n)}Jh(e,134217728)}};xx=function(e){if(e.tag===13){var t=_r(e),n=Qn(e,t);if(n!==null){var r=gt();fn(n,e,t,r)}Jh(e,t)}};bx=function(){return me};wx=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};Df=function(e,t,n){switch(t){case"input":if(Tf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_c(r);if(!i)throw Error(V(90));Zy(r),Tf(r,i)}}}break;case"textarea":ex(e,n);break;case"select":t=n.value,t!=null&&zi(e,!!n.multiple,t,!1)}};sx=Yh;lx=ei;var qT={usingClientEntryPoint:!1,Events:[Wa,Mi,_c,ox,ax,Yh]},Lo={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},YT={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dx(e),e===null?null:e.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||HT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{bc=Ss.inject(YT),Tn=Ss}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qT;Ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tm(t))throw Error(V(200));return WT(e,t,null,n)};Ut.createRoot=function(e,t){if(!tm(e))throw Error(V(299));var n=!1,r="",i=Wb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zh(e,1,!1,null,null,n,!1,r,i),e[Kn]=t.current,wa(e.nodeType===8?e.parentNode:e),new em(t)};Ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=dx(t),e=e===null?null:e.stateNode,e};Ut.flushSync=function(e){return ei(e)};Ut.hydrate=function(e,t,n){if(!Ic(t))throw Error(V(200));return Dc(null,e,t,!0,n)};Ut.hydrateRoot=function(e,t,n){if(!tm(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Wb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ub(t,null,e,1,n??null,i,!1,o,a),e[Kn]=t.current,wa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mc(t)};Ut.render=function(e,t,n){if(!Ic(t))throw Error(V(200));return Dc(null,e,t,!1,n)};Ut.unmountComponentAtNode=function(e){if(!Ic(e))throw Error(V(40));return e._reactRootContainer?(ei(function(){Dc(null,null,e,!1,function(){e._reactRootContainer=null,e[Kn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Yh;Ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ic(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Dc(e,t,n,!1,r)};Ut.version="18.2.0-next-9e3b772b8-20220608";function Hb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hb)}catch(e){console.error(e)}}Hb(),Uy.exports=Ut;var Lc=Uy.exports,j0=Lc;bf.createRoot=j0.createRoot,bf.hydrateRoot=j0.hydrateRoot;var ct=function(){return ct=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ct.apply(this,arguments)};function to(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function XT(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var KT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,QT=XT(function(e){return KT.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),xe="-ms-",la="-moz-",ce="-webkit-",Gb="comm",Ac="rule",nm="decl",ZT="@import",JT="@namespace",qb="@keyframes",eP="@layer",Yb=Math.abs,rm=String.fromCharCode,pp=Object.assign;function tP(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function Xb(e){return e.trim()}function zn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Js(e,t,n){return e.indexOf(t,n)}function Be(e,t){return e.charCodeAt(t)|0}function ti(e,t,n){return e.slice(t,n)}function ln(e){return e.length}function Kb(e){return e.length}function Yo(e,t){return t.push(e),e}function nP(e,t){return e.map(t).join("")}function $0(e,t){return e.filter(function(n){return!zn(n,t)})}var Rc=1,no=1,Qb=0,Jt=0,Le=0,go="";function Fc(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Rc,column:no,length:a,return:"",siblings:l}}function sr(e,t){return pp(Fc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function mi(e){for(;e.root;)e=sr(e.root,{children:[e]});Yo(e,e.siblings)}function rP(){return Le}function iP(){return Le=Jt>0?Be(go,--Jt):0,no--,Le===10&&(no=1,Rc--),Le}function pn(){return Le=Jt<Qb?Be(go,Jt++):0,no++,Le===10&&(no=1,Rc++),Le}function mr(){return Be(go,Jt)}function el(){return Jt}function zc(e,t){return ti(go,e,t)}function ja(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function oP(e){return Rc=no=1,Qb=ln(go=e),Jt=0,[]}function aP(e){return go="",e}function gd(e){return Xb(zc(Jt-1,hp(e===91?e+2:e===40?e+1:e)))}function sP(e){for(;(Le=mr())&&Le<33;)pn();return ja(e)>2||ja(Le)>3?"":" "}function lP(e,t){for(;--t&&pn()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return zc(e,el()+(t<6&&mr()==32&&pn()==32))}function hp(e){for(;pn();)switch(Le){case e:return Jt;case 34:case 39:e!==34&&e!==39&&hp(Le);break;case 40:e===41&&hp(e);break;case 92:pn();break}return Jt}function cP(e,t){for(;pn()&&e+Le!==47+10;)if(e+Le===42+42&&mr()===47)break;return"/*"+zc(t,Jt-1)+"*"+rm(e===47?e:pn())}function uP(e){for(;!ja(mr());)pn();return zc(e,Jt)}function dP(e){return aP(tl("",null,null,null,[""],e=oP(e),0,[0],e))}function tl(e,t,n,r,i,o,a,l,s){for(var c=0,u=0,f=a,v=0,m=0,p=0,y=1,w=1,h=1,g=0,b="",S=i,k=o,T=r,E=b;w;)switch(p=g,g=pn()){case 40:if(p!=108&&Be(E,f-1)==58){Js(E+=ne(gd(g),"&","&\f"),"&\f",Yb(c?l[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:E+=gd(g);break;case 9:case 10:case 13:case 32:E+=sP(p);break;case 92:E+=lP(el()-1,7);continue;case 47:switch(mr()){case 42:case 47:Yo(fP(cP(pn(),el()),t,n,s),s),(ja(p||1)==5||ja(mr()||1)==5)&&ln(E)&&ti(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*y:l[c++]=ln(E)*h;case 125*y:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+u:h==-1&&(E=ne(E,/\f/g,"")),m>0&&(ln(E)-f||y===0&&p===47)&&Yo(m>32?I0(E+";",r,n,f-1,s):I0(ne(E," ","")+";",r,n,f-2,s),s);break;case 59:E+=";";default:if(Yo(T=M0(E,t,n,c,u,i,l,b,S=[],k=[],f,o),o),g===123)if(u===0)tl(E,t,T,T,S,o,f,l,k);else{switch(v){case 99:if(Be(E,3)===110)break;case 108:if(Be(E,2)===97)break;default:u=0;case 100:case 109:case 115:}u?tl(e,T,T,r&&Yo(M0(e,T,T,0,0,i,l,b,i,S=[],f,k),k),i,k,f,l,r?S:k):tl(E,T,T,T,[""],k,0,l,k)}}c=u=m=0,y=h=1,b=E="",f=a;break;case 58:f=1+ln(E),m=p;default:if(y<1){if(g==123)--y;else if(g==125&&y++==0&&iP()==125)continue}switch(E+=rm(g),g*y){case 38:h=u>0?1:(E+="\f",-1);break;case 44:l[c++]=(ln(E)-1)*h,h=1;break;case 64:mr()===45&&(E+=gd(pn())),v=mr(),u=f=ln(b=E+=uP(el())),g++;break;case 45:p===45&&ln(E)==2&&(y=0)}}return o}function M0(e,t,n,r,i,o,a,l,s,c,u,f){for(var v=i-1,m=i===0?o:[""],p=Kb(m),y=0,w=0,h=0;y<r;++y)for(var g=0,b=ti(e,v+1,v=Yb(w=a[y])),S=e;g<p;++g)(S=Xb(w>0?m[g]+" "+b:ne(b,/&\f/g,m[g])))&&(s[h++]=S);return Fc(e,t,n,i===0?Ac:l,s,c,u,f)}function fP(e,t,n,r){return Fc(e,t,n,Gb,rm(rP()),ti(e,2,-2),0,r)}function I0(e,t,n,r,i){return Fc(e,t,n,nm,ti(e,0,r),ti(e,r+1,-1),r,i)}function Zb(e,t,n){switch(tP(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ce+e+e;case 4855:return ce+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return la+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+la+e+xe+e+e;case 5936:switch(Be(e,t+11)){case 114:return ce+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ce+e+xe+e+e;case 6165:return ce+e+xe+"flex-"+e+e;case 5187:return ce+e+ne(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return ce+e+xe+"flex-item-"+ne(e,/flex-|-self/g,"")+(zn(e,/flex-|baseline/)?"":xe+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ce+e+xe+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ce+e+xe+ne(e,"shrink","negative")+e;case 5292:return ce+e+xe+ne(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+ne(e,"-grow","")+ce+e+xe+ne(e,"grow","positive")+e;case 4554:return ce+ne(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+xe+"flex-pack:$3"),/space-between/,"justify")+ce+e+e;case 4200:if(!zn(e,/flex-|baseline/))return xe+"grid-column-align"+ti(e,t)+e;break;case 2592:case 3360:return xe+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,zn(r.props,/grid-\w+-end/)})?~Js(e+(n=n[t].value),"span",0)?e:xe+ne(e,"-start","")+e+xe+"grid-row-span:"+(~Js(n,"span",0)?zn(n,/\d+/):+zn(n,/\d+/)-+zn(e,/\d+/))+";":xe+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return zn(r.props,/grid-\w+-start/)})?e:xe+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+la+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Js(e,"stretch",0)?Zb(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,c){return xe+i+":"+o+c+(a?xe+i+"-span:"+(l?s:+s-+o)+c:"")+e});case 4949:if(Be(e,t+6)===121)return ne(e,":",":"+ce)+e;break;case 6444:switch(Be(e,Be(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Be(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+xe+"$2box$3")+e;case 100:return ne(e,":",":"+xe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Ul(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function pP(e,t,n,r){switch(e.type){case eP:if(e.children.length)break;case ZT:case JT:case nm:return e.return=e.return||e.value;case Gb:return"";case qb:return e.return=e.value+"{"+Ul(e.children,r)+"}";case Ac:if(!ln(e.value=e.props.join(",")))return""}return ln(n=Ul(e.children,r))?e.return=e.value+"{"+n+"}":""}function hP(e){var t=Kb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function mP(e){return function(t){t.root||(t=t.return)&&e(t)}}function gP(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case nm:e.return=Zb(e.value,e.length,n);return;case qb:return Ul([sr(e,{value:ne(e.value,"@","@"+ce)})],r);case Ac:if(e.length)return nP(n=e.props,function(i){switch(zn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mi(sr(e,{props:[ne(i,/:(read-\w+)/,":"+la+"$1")]})),mi(sr(e,{props:[i]})),pp(e,{props:$0(n,r)});break;case"::placeholder":mi(sr(e,{props:[ne(i,/:(plac\w+)/,":"+ce+"input-$1")]})),mi(sr(e,{props:[ne(i,/:(plac\w+)/,":"+la+"$1")]})),mi(sr(e,{props:[ne(i,/:(plac\w+)/,xe+"input-$1")]})),mi(sr(e,{props:[i]})),pp(e,{props:$0(n,r)});break}return""})}}var vP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ro=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Jb="active",ew="data-styled-version",Nc="6.3.11",im=`/*!sc*/
`,ca=typeof window<"u"&&typeof document<"u",yP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),xP={};function Ga(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nl=new Map,Wl=new Map,rl=1,Xo=function(e){if(nl.has(e))return nl.get(e);for(;Wl.has(rl);)rl++;var t=rl++;return nl.set(e,t),Wl.set(t,e),t},bP=function(e,t){rl=t+1,nl.set(e,t),Wl.set(t,e)},om=Object.freeze([]),io=Object.freeze({});function tw(e,t,n){return n===void 0&&(n=io),e.theme!==n.theme&&e.theme||t||n.theme}var nw=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),wP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,SP=/(^-|-$)/g;function D0(e){return e.replace(wP,"-").replace(SP,"")}var CP=/(a)(d)/gi,L0=function(e){return String.fromCharCode(e+(e>25?39:97))};function mp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=L0(t%52)+n;return(L0(t%52)+n).replace(CP,"$1-$2")}var vd,zr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},rw=function(e){return zr(5381,e)};function am(e){return mp(rw(e)>>>0)}function _P(e){return e.displayName||e.name||"Component"}function yd(e){return typeof e=="string"&&!0}var iw=typeof Symbol=="function"&&Symbol.for,ow=iw?Symbol.for("react.memo"):60115,kP=iw?Symbol.for("react.forward_ref"):60112,EP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},aw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},PP=((vd={})[kP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vd[ow]=aw,vd);function A0(e){return("type"in(t=e)&&t.type.$$typeof)===ow?aw:"$$typeof"in e?PP[e.$$typeof]:EP;var t}var OP=Object.defineProperty,jP=Object.getOwnPropertyNames,R0=Object.getOwnPropertySymbols,$P=Object.getOwnPropertyDescriptor,MP=Object.getPrototypeOf,F0=Object.prototype;function sw(e,t,n){if(typeof t!="string"){if(F0){var r=MP(t);r&&r!==F0&&sw(e,r,n)}var i=jP(t);R0&&(i=i.concat(R0(t)));for(var o=A0(e),a=A0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in TP||n&&n[s]||a&&s in a||o&&s in o)){var c=$P(t,s);try{OP(e,s,c)}catch{}}}}return e}function oo(e){return typeof e=="function"}function sm(e){return typeof e=="object"&&"styledComponentId"in e}function Gr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hl(e,t){return e.join(t||"")}function $a(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gp(e,t,n){if(n===void 0&&(n=!1),!n&&!$a(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gp(e[r],t[r]);else if($a(t))for(var r in t)e[r]=gp(e[r],t[r]);return e}function lm(e,t){Object.defineProperty(e,"toString",{value:t})}var IP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ga(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+im;return n},e}(),DP="style[".concat(ro,"][").concat(ew,'="').concat(Nc,'"]'),LP=new RegExp("^".concat(ro,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),z0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},vp=function(e){if(!e)return document;if(z0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(z0(t))return t}return document},AP=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},RP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(im),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(LP);if(s){var c=0|parseInt(s[1],10),u=s[2];c!==0&&(bP(u,c),AP(e,u,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},xd=function(e){for(var t=vp(e.options.target).querySelectorAll(DP),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ro)!==Jb&&(RP(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function FP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(ro,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ro,Jb),r.setAttribute(ew,Nc);var a=FP();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},zP=function(){function e(t){this.element=lw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ga(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),NP=function(){function e(t){this.element=lw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),BP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),N0=ca,VP={isServer:!ca,useCSSOMInjection:!yP},Gl=function(){function e(t,n,r){t===void 0&&(t=io),n===void 0&&(n={});var i=this;this.options=ct(ct({},VP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ca&&N0&&(N0=!1,xd(this)),lm(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",c=function(f){var v=function(h){return Wl.get(h)}(f);if(v===void 0)return"continue";var m=o.names.get(v);if(m===void 0||!m.size)return"continue";var p=a.getGroup(f);if(p.length===0)return"continue";var y=ro+".g"+f+'[id="'+v+'"]',w="";m.forEach(function(h){h.length>0&&(w+=h+",")}),s+=p+y+'{content:"'+w+'"}'+im},u=0;u<l;u++)c(u);return s}(i)})}return e.registerId=function(t){return Xo(t)},e.prototype.rehydrate=function(){!this.server&&ca&&xd(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ct(ct({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ca&&t.target!==this.options.target&&vp(this.options.target)!==vp(t.target)&&xd(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new BP(i):r?new zP(i):new NP(i)}(this.options),new IP(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Xo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Xo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Xo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),UP=/&/g,Nn=47,Nr=42;function B0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==Nn||e.charCodeAt(o+1)!==Nr)if(i)a===Nr&&e.charCodeAt(o+1)===Nn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function cw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=cw(n.children,t)),n})}function WP(e){var t,n,r,i=e===void 0?io:e,o=i.options,a=o===void 0?io:o,l=i.plugins,s=l===void 0?om:l,c=function(p,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):p},u=s.slice();u.push(function(p){p.type===Ac&&p.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),p.props[0]=p.props[0].replace(UP,n).replace(r,c))}),a.prefix&&u.push(gP),u.push(pP);var f=[],v=hP(u.concat(mP(function(p){return f.push(p)}))),m=function(p,y,w,h){y===void 0&&(y=""),w===void 0&&(w=""),h===void 0&&(h="&"),t=h,n=y,r=void 0;var g=function(S){if(!B0(S))return S;for(var k=S.length,T="",E=0,_=0,$=0,M=!1,A=0;A<k;A++){var I=S.charCodeAt(A);if($!==0||M||I!==Nn||S.charCodeAt(A+1)!==Nr)if(M)I===Nr&&S.charCodeAt(A+1)===Nn&&(M=!1,A++);else if(I!==34&&I!==39||A!==0&&S.charCodeAt(A-1)===92){if($===0)if(I===123)_++;else if(I===125){if(--_<0){for(var j=A+1;j<k;){var L=S.charCodeAt(j);if(L===59||L===10)break;j++}j<k&&S.charCodeAt(j)===59&&j++,_=0,A=j-1,E=j;continue}_===0&&(T+=S.substring(E,A+1),E=A+1)}else I===59&&_===0&&(T+=S.substring(E,A+1),E=A+1)}else $===0?$=I:$===I&&($=0);else M=!0,A++}if(E<k){var D=S.substring(E);B0(D)||(T+=D)}return T}(function(S){if(S.indexOf("//")===-1)return S;for(var k=S.length,T=[],E=0,_=0,$=0,M=0;_<k;){var A=S.charCodeAt(_);if(A!==34&&A!==39||_!==0&&S.charCodeAt(_-1)===92)if($===0)if(A===Nn&&_+1<k&&S.charCodeAt(_+1)===Nr){for(_+=2;_+1<k&&(S.charCodeAt(_)!==Nr||S.charCodeAt(_+1)!==Nn);)_++;_+=2}else if(A===40&&_>=3&&(32|S.charCodeAt(_-1))==108&&(32|S.charCodeAt(_-2))==114&&(32|S.charCodeAt(_-3))==117)M=1,_++;else if(M>0)A===41?M--:A===40&&M++,_++;else if(A===Nr&&_+1<k&&S.charCodeAt(_+1)===Nn)_>E&&T.push(S.substring(E,_)),E=_+=2;else if(A===Nn&&_+1<k&&S.charCodeAt(_+1)===Nn){for(_>E&&T.push(S.substring(E,_));_<k&&S.charCodeAt(_)!==10;)_++;E=_}else _++;else _++;else $===0?$=A:$===A&&($=0),_++}return E===0?S:(E<k&&T.push(S.substring(E)),T.join(""))}(p)),b=dP(w||y?"".concat(w," ").concat(y," { ").concat(g," }"):g);return a.namespace&&(b=cw(b,a.namespace)),f=[],Ul(b,v),f};return m.hash=s.length?s.reduce(function(p,y){return y.name||Ga(15),zr(p,y.name)},5381).toString():"",m}var HP=new Gl,yp=WP(),uw=K.createContext({shouldForwardProp:void 0,styleSheet:HP,stylis:yp});uw.Consumer;K.createContext(void 0);function xp(){return K.useContext(uw)}var dw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=yp);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,lm(this,function(){throw Ga(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=yp),this.name+t.hash},e}();function GP(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in vP||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var qP=function(e){return e>="A"&&e<="Z"};function V0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;qP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var fw=function(e){return e==null||e===!1||e===""},pw=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!fw(r)&&(Array.isArray(r)&&r.isCss||oo(r)?t.push("".concat(V0(n),":"),r,";"):$a(r)?t.push.apply(t,to(to(["".concat(n," {")],pw(r),!1),["}"],!1)):t.push("".concat(V0(n),": ").concat(GP(n,r),";")))}return t};function Er(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(fw(e))return i;if(sm(e))return i.push(".".concat(e.styledComponentId)),i;if(oo(e)){if(!oo(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Er(o,t,n,r,i)}var a;if(e instanceof dw)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if($a(e)){for(var l=pw(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Er(e[s],t,n,r,i);return i}function hw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(oo(n)&&!sm(n))return!1}return!0}var YP=rw(Nc),XP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hw(t),this.componentId=n,this.baseHash=zr(YP,n),this.baseStyle=r,Gl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gr(i,this.staticRulesId);else{var o=Hl(Er(this.rules,t,n,r)),a=mp(zr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Gr(i,a),this.staticRulesId=a}else{for(var s=zr(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f;else if(f){var v=Hl(Er(f,t,n,r));s=zr(zr(s,String(u)),v),c+=v}}if(c){var m=mp(s>>>0);if(!n.hasNameForId(this.componentId,m)){var p=r(c,".".concat(m),void 0,this.componentId);n.insertRules(this.componentId,m,p)}i=Gr(i,m)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Xo(this.componentId)):""}},e}(),cm=K.createContext(void 0);cm.Consumer;var bd={};function KP(e,t,n){var r=sm(e),i=e,o=!yd(e),a=t.attrs,l=a===void 0?om:a,s=t.componentId,c=s===void 0?function(S,k){var T=typeof S!="string"?"sc":D0(S);bd[T]=(bd[T]||0)+1;var E="".concat(T,"-").concat(am(Nc+T+bd[T]));return k?"".concat(k,"-").concat(E):E}(t.displayName,t.parentComponentId):s,u=t.displayName,f=u===void 0?function(S){return yd(S)?"styled.".concat(S):"Styled(".concat(_P(S),")")}(e):u,v=t.displayName&&t.componentId?"".concat(D0(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,p=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;p=function(S,k){return y(S,k)&&w(S,k)}}else p=y}var h=new XP(n,v,r?i.componentStyle:void 0);function g(S,k){return function(T,E,_){var $=T.attrs,M=T.componentStyle,A=T.defaultProps,I=T.foldedComponentIds,j=T.styledComponentId,L=T.target,D=K.useContext(cm),F=xp(),R=T.shouldForwardProp||F.shouldForwardProp,P=tw(E,D,A)||io,O=function(H,ee,pe){for(var we,ie=ct(ct({},ee),{className:void 0,theme:pe}),Ie=0;Ie<H.length;Ie+=1){var We=oo(we=H[Ie])?we(ie):we;for(var He in We)He==="className"?ie.className=Gr(ie.className,We[He]):He==="style"?ie.style=ct(ct({},ie.style),We[He]):ie[He]=We[He]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Gr(ie.className,ee.className)),ie}($,E,P),z=O.as||L,N={};for(var B in O)O[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&O.theme===P||(B==="forwardedAs"?N.as=O.forwardedAs:R&&!R(B,z)||(N[B]=O[B]));var U=function(H,ee){var pe=xp(),we=H.generateAndInjectStyles(ee,pe.styleSheet,pe.stylis);return we}(M,O),W=U.className,Y=Gr(I,j);return W&&(Y+=" "+W),O.className&&(Y+=" "+O.className),N[yd(z)&&!nw.has(z)?"class":"className"]=Y,_&&(N.ref=_),x.createElement(z,N)}(b,S,k)}g.displayName=f;var b=K.forwardRef(g);return b.attrs=m,b.componentStyle=h,b.displayName=f,b.shouldForwardProp=p,b.foldedComponentIds=r?Gr(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=v,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(k){for(var T=[],E=1;E<arguments.length;E++)T[E-1]=arguments[E];for(var _=0,$=T;_<$.length;_++)gp(k,$[_],!0);return k}({},i.defaultProps,S):S}}),lm(b,function(){return".".concat(b.styledComponentId)}),o&&sw(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function U0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var W0=function(e){return Object.assign(e,{isCss:!0})};function um(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(oo(e)||$a(e))return W0(Er(U0(om,to([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Er(r):W0(Er(U0(r,t)))}function bp(e,t,n){if(n===void 0&&(n=io),!t)throw Ga(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,um.apply(void 0,to([i],o,!1)))};return r.attrs=function(i){return bp(e,t,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return bp(e,t,ct(ct({},n),i))},r}var mw=function(e){return bp(KP,e)},C=mw;nw.forEach(function(e){C[e]=mw(e)});var QP=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=hw(t),Gl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Hl(Er(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Gl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function ZP(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=um.apply(void 0,to([e],t,!1)),i="sc-global-".concat(am(JSON.stringify(r))),o=new QP(r,i),a=new WeakMap,l=function(c){var u=xp(),f=K.useContext(cm),v=a.get(u.styleSheet);return v===void 0&&(v=u.styleSheet.allocateGSInstance(i),a.set(u.styleSheet,v)),(typeof window>"u"||!u.styleSheet.server)&&s(v,c,u.styleSheet,f,u.stylis),K.useLayoutEffect(function(){return u.styleSheet.server||s(v,c,u.styleSheet,f,u.stylis),function(){var m;o.removeStyles(v,u.styleSheet),m=u.styleSheet.options.target,typeof document<"u"&&(m??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(p){return p.remove()})}},[v,c,u.styleSheet,f,u.stylis]),null};function s(c,u,f,v,m){if(o.isStatic)o.renderStyles(c,xP,f,m);else{var p=ct(ct({},u),{theme:tw(u,v,l.defaultProps)});o.renderStyles(c,p,f,m)}}return K.memo(l)}function dm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Hl(um.apply(void 0,to([e],t,!1))),i=am(r);return new dw(i,r)}const JP=C.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,eO=C.div`
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
`,tO=C.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,nO=C.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,rO=C.div`
  display: flex;
  justify-content: space-around;
  

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`,iO=C.button`
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
`;const oO=C(Te)`
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
`;const aO=C.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,sO=C.button`
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
`;const lO=C.div`
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
`,cO=C.button`
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
`,uO=C.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,gi=C(Te)`
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
`,dO=C.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,fO=C.div`
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
`,pO=C.div`
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
`,hO=C.input`
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
`,mO=C.button`
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
`,gO=C.svg`
  width: 24px;
  height: 24px;
`,vO=C.ul`
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
`,yO=C.li`
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


`,xO=C.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,bO=C.h3`
      text-align: left;
      font-size: 22px;
      font-weight: 800;

`,wO=C.h3`

      font-size: 22px;
         

`,SO=C.div`
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

    
`,hn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",CO=()=>{const[e,t]=x.useState(""),[n,r]=x.useState([]),[i,o]=x.useState(!1),a=xt(),l=x.useRef(null);x.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const c=setTimeout(async()=>{try{const f=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(f.data),o(!0)}catch(u){console.error(u)}},300);return()=>clearTimeout(c)},[e]),x.useEffect(()=>{const c=u=>{l.current&&!l.current.contains(u.target)&&o(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const s=c=>{t(""),o(!1),a(`/product/${c.id}`)};return d.jsxs(pO,{ref:l,children:[d.jsx(hO,{name:"site-search",value:e,onChange:c=>t(c.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),d.jsx(mO,{className:"search-button",children:d.jsx(gO,{children:d.jsx("use",{href:`${hn}#icon-search`})})}),i&&n.length>0&&d.jsx(vO,{children:n.map(c=>{var v,m;const f=c.new_price&&c.new_price<c.price?c.new_price:c.price;return d.jsxs(yO,{onClick:()=>s(c),children:[d.jsx(xO,{src:((m=(v=c.images)==null?void 0:v[0])==null?void 0:m.url)||"/nofoto.png",alt:""}),d.jsxs(SO,{children:[d.jsx(bO,{children:c.name}),d.jsxs(wO,{children:[f," грн."]})]})]},c.id)})})]})};var gw={exports:{}},vw={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=x;function _O(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kO=typeof Object.is=="function"?Object.is:_O,EO=qa.useSyncExternalStore,TO=qa.useRef,PO=qa.useEffect,OO=qa.useMemo,jO=qa.useDebugValue;vw.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=TO(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=OO(function(){function s(m){if(!c){if(c=!0,u=m,m=r(m),i!==void 0&&a.hasValue){var p=a.value;if(i(p,m))return f=p}return f=m}if(p=f,kO(u,m))return p;var y=r(m);return i!==void 0&&i(p,y)?(u=m,p):(u=m,f=y)}var c=!1,u,f,v=n===void 0?null:n;return[function(){return s(t())},v===null?void 0:function(){return s(v())}]},[t,n,r,i]);var l=EO(e,o[0],o[1]);return PO(function(){a.hasValue=!0,a.value=l},[l]),jO(l),l};gw.exports=vw;var $O=gw.exports;function MO(e){e()}function IO(){let e=null,t=null;return{clear(){e=null,t=null},notify(){MO(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var H0={notify(){},get:()=>[]};function DO(e,t){let n,r=H0,i=0,o=!1;function a(y){u();const w=r.subscribe(y);let h=!1;return()=>{h||(h=!0,w(),f())}}function l(){r.notify()}function s(){p.onStateChange&&p.onStateChange()}function c(){return o}function u(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=IO())}function f(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=H0)}function v(){o||(o=!0,u())}function m(){o&&(o=!1,f())}const p={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:c,trySubscribe:v,tryUnsubscribe:m,getListeners:()=>r};return p}var LO=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AO=LO(),RO=()=>typeof navigator<"u"&&navigator.product==="ReactNative",FO=RO(),zO=()=>AO||FO?x.useLayoutEffect:x.useEffect,NO=zO(),wd=Symbol.for("react-redux-context"),Sd=typeof globalThis<"u"?globalThis:{};function BO(){if(!x.createContext)return{};const e=Sd[wd]??(Sd[wd]=new Map);let t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var Or=BO();function VO(e){const{children:t,context:n,serverState:r,store:i}=e,o=x.useMemo(()=>{const s=DO(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=x.useMemo(()=>i.getState(),[i]);NO(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Or;return x.createElement(l.Provider,{value:o},t)}var UO=VO;function fm(e=Or){return function(){return x.useContext(e)}}var yw=fm();function xw(e=Or){const t=e===Or?yw:fm(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var WO=xw();function HO(e=Or){const t=e===Or?WO:xw(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Mt=HO(),GO=(e,t)=>e===t;function qO(e=Or){const t=e===Or?yw:fm(e),n=(r,i={})=>{const{equalityFn:o=GO}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:c}=a;x.useRef(!0);const u=x.useCallback({[r.name](v){return r(v)}}[r.name],[r]),f=$O.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,c||l.getState,u,o);return x.useDebugValue(f),f};return Object.assign(n,{withTypes:()=>n}),n}var Ue=qO();const YO=C(Te)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,XO=C.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,KO=C.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,QO=C.div`
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
`,ZO=({onClick:e})=>{const t=Ue(n=>n.cart.items.length);return d.jsx(YO,{to:"/cart",children:d.jsxs(KO,{onClick:e,children:[d.jsx(XO,{children:d.jsx("use",{href:`${hn}#icon-cart`})}),t>0&&d.jsx(QO,{children:t})]})})},JO=C.nav`
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
`,vi=C(Te)`
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
`,ej=()=>d.jsxs(JO,{children:[d.jsx(vi,{to:"/",children:"Головна"}),d.jsx(vi,{to:"/catalog",children:"Каталог"}),d.jsx(vi,{to:"/catalog/new",children:"Новинки"}),d.jsx(vi,{to:"/catalog/sale",children:"Акційні товари"}),d.jsx(vi,{to:"/about",children:"Про нас"}),d.jsx(vi,{to:"/contacts",children:"Контакти"})]}),tj=C.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,nj=C(Te)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,rj=C.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,ij=C.div`

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
`,oj=({onClick:e})=>{const t=Ue(n=>n.favorites.items.length);return d.jsx(nj,{to:"/favorite",children:d.jsxs(rj,{onClick:e,children:[d.jsx(tj,{children:d.jsx("use",{href:`${hn}#icon-heart`})}),t>0&&d.jsx(ij,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=e=>{const t=sj(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uj=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>x.createElement("svg",{ref:s,...lj,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:bw("lucide",i),...!o&&!cj(l)&&{"aria-hidden":"true"},...l},[...a.map(([c,u])=>x.createElement(c,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(e,t)=>{const n=x.forwardRef(({className:r,...i},o)=>x.createElement(uj,{ref:o,iconNode:t,className:bw(`lucide-${aj(G0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=G0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Bc=Ke("arrow-down-narrow-wide",dj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Vc=Ke("arrow-right",fj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],hj=Ke("badge-percent",pj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],gj=Ke("chevron-down",mj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],yj=Ke("chevron-up",vj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],q0=Ke("eye-off",xj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Y0=Ke("eye",bj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ya=Ke("heart",wj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Cj=Ke("house",Sj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],kj=Ke("info",_j);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],Tj=Ke("layers-plus",Ej);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Oj=Ke("mail",Pj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],$j=Ke("shopping-bag",jj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mj=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],vo=Ke("shopping-cart",Mj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ij=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],ww=Ke("sliders-horizontal",Ij);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dj=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Sw=Ke("trash-2",Dj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Aj=Ke("user-round",Lj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Cw=Ke("x",Rj),Fj=({openLogin:e})=>{const[t,n]=x.useState(!1),r=xt(),i=()=>{localStorage.getItem("token")?r("/account/profile"):e()};return d.jsx(JP,{children:d.jsx(eO,{children:d.jsxs(tO,{children:[d.jsxs(nO,{children:[d.jsx(oO,{to:"/",children:"Дідів хлів"}),d.jsxs(rO,{children:[d.jsx(ZO,{}),d.jsx(iO,{onClick:i,children:d.jsx(Aj,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),d.jsx(oj,{}),d.jsx(ej,{}),d.jsx(sO,{onClick:()=>n(!t),children:d.jsx(aO,{children:d.jsx("use",{href:`${hn}#icon-menu`})})}),d.jsx(fO,{open:t,onClick:()=>n(!1)}),d.jsxs(lO,{open:t,children:[d.jsx(cO,{onClick:()=>n(!1),children:d.jsx(Cw,{size:28,strokeWidth:1.5})}),d.jsxs(uO,{children:[d.jsxs(gi,{onClick:()=>n(!1),to:"/",children:[d.jsx(Cj,{size:22,strokeWidth:1.5})," Головна"]}),d.jsxs(gi,{onClick:()=>n(!1),to:"/catalog",children:[d.jsx($j,{size:22,strokeWidth:1.5})," Каталог"]}),d.jsxs(gi,{onClick:()=>n(!1),to:"/catalog/new",children:[d.jsx(Tj,{size:22,strokeWidth:1.5}),"Новинки"]}),d.jsxs(gi,{onClick:()=>n(!1),to:"/catalog/sale",children:[d.jsx(hj,{size:22,strokeWidth:1.5}),"Акційні товари"]}),d.jsxs(gi,{onClick:()=>n(!1),to:"/about",children:[d.jsx(kj,{size:22,strokeWidth:1.5})," Про нас"]}),d.jsxs(gi,{onClick:()=>n(!1),to:"/contacts",children:[d.jsx(Oj,{size:22,strokeWidth:1.5})," Контакти"]})]}),d.jsx(dO,{children:d.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),d.jsx(CO,{})]})})})},zj=C.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,Nj=C.footer`
 
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
`,Bj=C.div`
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
`,Cd=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,_d=C.h3`
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
`,wn=C(Te)`
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
`,Vj=C.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,kd=C.a`
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
`,Uj=()=>d.jsx(zj,{children:d.jsxs(Nj,{children:[d.jsxs(Bj,{children:[d.jsxs(Cd,{children:[d.jsx(_d,{children:"Навігація"}),d.jsx(wn,{to:"/",children:"Головна"}),d.jsx(wn,{to:"/about",children:"Про нас"}),d.jsx(wn,{to:"/catalog",children:"Каталог"}),d.jsx(wn,{to:"/contacts",children:"Контакти"})]}),d.jsxs(Cd,{children:[d.jsx(_d,{children:"Інформація"}),d.jsx(wn,{to:"/delivery",children:"Оплата і доставка"}),d.jsx(wn,{children:"Повернення"}),d.jsx(wn,{children:"Гарантія"}),d.jsx(wn,{children:"Політика конфіденційності"})]})]}),d.jsxs(Cd,{children:[d.jsx(_d,{children:"Контакти"}),d.jsx(wn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),d.jsx(wn,{href:"mailto:email@email.com",children:"email@email.com"}),d.jsxs(Vj,{children:[d.jsx(kd,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:d.jsx("svg",{width:"20px",children:d.jsx("use",{href:`${hn}#icon-instagram`})})}),d.jsx(kd,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:d.jsx("svg",{width:"20px",children:d.jsx("use",{href:`${hn}#icon-telegram`})})}),d.jsx(kd,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:d.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:d.jsx("use",{href:`${hn}#icon-olx`})})})]})]})]})}),Wj=({openLogin:e,openRegister:t})=>d.jsxs(d.Fragment,{children:[d.jsx(Fj,{openLogin:e,openRegister:t}),d.jsx("main",{style:{flex:1},children:d.jsx(Ny,{})}),d.jsx(Uj,{})]}),Hj=C.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,Gj=C.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
      text-align: center;

  @media screen and (min-width: 768px) {
 font-size: 35px;

  }

`,qj=C.div`
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
`,Yj=C.div`
position: relative;
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
`,Xj=C.p`
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
`,Kj=C(Te)`
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
`,Qj=C.span`
  position: absolute;
  top: 10px;
  left: 10px; 
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
    top: 8px;
    left: 8px;
  }
`,Zj=C.div`
  padding: 10px 0;
`,Jj=C.h3`
  font-size: 20px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
   margin-bottom:16px;
`,e4=C.div`
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
`;C(Te)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const t4=C(Te)`
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

`,n4=C.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,r4=C.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function _w(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=_w(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Xr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=_w(e))&&(r&&(r+=" "),r+=t);return r}function i4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}i4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Xa=e=>typeof e=="number"&&!isNaN(e),ni=e=>typeof e=="string",Jn=e=>typeof e=="function",o4=e=>ni(e)||Xa(e),wp=e=>ni(e)||Jn(e)?e:null,a4=(e,t)=>e===!1||Xa(e)&&e>0?e:t,Sp=e=>x.isValidElement(e)||ni(e)||Jn(e)||Xa(e);function s4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function l4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:c,isIn:u,playToast:f}){let v=n?`${e}--${a}`:e,m=n?`${t}--${a}`:t,p=x.useRef(0);return x.useLayoutEffect(()=>{let y=c.current,w=v.split(" "),h=g=>{g.target===c.current&&(f(),y.removeEventListener("animationend",h),y.removeEventListener("animationcancel",h),p.current===0&&g.type!=="animationcancel"&&y.classList.remove(...w))};y.classList.add(...w),y.addEventListener("animationend",h),y.addEventListener("animationcancel",h)},[]),x.useEffect(()=>{let y=c.current,w=()=>{y.removeEventListener("animationend",w),r?s4(y,s,i):s()};u||(l?w():(p.current=1,y.className+=` ${m}`,y.addEventListener("animationend",w)))},[u]),K.createElement(K.Fragment,null,o)}}function X0(e,t){return{content:kw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function kw(e,t,n=!1){return x.isValidElement(e)&&!ni(e.type)?x.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Jn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function c4({closeToast:e,theme:t,ariaLabel:n="close"}){return K.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},K.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},K.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function u4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:c,theme:u}){let f=i||a&&l===0,v={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(v.transform=`scaleX(${l})`);let m=Xr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${u}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),p=Jn(o)?o({rtl:s,type:r,defaultClassName:m}):Xr(m,o),y={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{c&&n()}};return K.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":f},K.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${u} Toastify__progress-bar--${r}`}),K.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer",className:p,style:v,...y}))}var d4=1,Ew=()=>`${d4++}`;function f4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,c=new Set,u=g=>(c.add(g),()=>c.delete(g)),f=()=>{a=Array.from(s.values()),c.forEach(g=>g())},v=({containerId:g,toastId:b,updateId:S})=>{let k=g?g!==e:e!==1,T=s.has(b)&&S==null;return k||T},m=(g,b)=>{s.forEach(S=>{var k;(b==null||b===S.props.toastId)&&((k=S.toggle)==null||k.call(S,g))})},p=g=>{var b,S;(S=(b=g.props)==null?void 0:b.onClose)==null||S.call(b,g.removalReason),g.isActive=!1},y=g=>{if(g==null)s.forEach(p);else{let b=s.get(g);b&&p(b)}f()},w=()=>{i-=o.length,o=[]},h=g=>{var b,S;let{toastId:k,updateId:T}=g.props,E=T==null;g.staleId&&s.delete(g.staleId),g.isActive=!0,s.set(k,g),f(),n(X0(g,E?"added":"updated")),E&&((S=(b=g.props).onOpen)==null||S.call(b))};return{id:e,props:l,observe:u,toggle:m,removeToast:y,toasts:s,clearQueue:w,buildToast:(g,b)=>{if(v(b))return;let{toastId:S,updateId:k,data:T,staleId:E,delay:_}=b,$=k==null;$&&i++;let M={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(b).filter(([I,j])=>j!=null)),toastId:S,updateId:k,data:T,isIn:!1,className:wp(b.className||l.toastClassName),progressClassName:wp(b.progressClassName||l.progressClassName),autoClose:b.isLoading?!1:a4(b.autoClose,l.autoClose),closeToast(I){s.get(S).removalReason=I,y(S)},deleteToast(){let I=s.get(S);if(I!=null){if(n(X0(I,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){h(o.shift());return}f()}}};M.closeButton=l.closeButton,b.closeButton===!1||Sp(b.closeButton)?M.closeButton=b.closeButton:b.closeButton===!0&&(M.closeButton=Sp(l.closeButton)?l.closeButton:!0);let A={content:g,props:M,staleId:E};l.limit&&l.limit>0&&i>l.limit&&$?o.push(A):Xa(_)?setTimeout(()=>{h(A)},_):h(A)},setProps(g){l=g},setToggle:(g,b)=>{let S=s.get(g);S&&(S.toggle=b)},isToastActive:g=>{var b;return(b=s.get(g))==null?void 0:b.isActive},getSnapshot:()=>a}}var mt=new Map,Ma=[],Cp=new Set,p4=e=>Cp.forEach(t=>t(e)),Tw=()=>mt.size>0;function h4(){Ma.forEach(e=>Ow(e.content,e.options)),Ma=[]}var m4=(e,{containerId:t})=>{var n;return(n=mt.get(t||1))==null?void 0:n.toasts.get(e)};function Pw(e,t){var n;if(t)return!!((n=mt.get(t))!=null&&n.isToastActive(e));let r=!1;return mt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function g4(e){if(!Tw()){Ma=Ma.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||o4(e))mt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=mt.get(e.containerId);t?t.removeToast(e.id):mt.forEach(n=>{n.removeToast(e.id)})}}var v4=(e={})=>{mt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Ow(e,t){Sp(e)&&(Tw()||Ma.push({content:e,options:t}),mt.forEach(n=>{n.buildToast(e,t)}))}function y4(e){var t;(t=mt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function jw(e,t){mt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function x4(e){let t=e.containerId||1;return{subscribe(n){let r=f4(t,e,p4);mt.set(t,r);let i=r.observe(n);return h4(),()=>{i(),mt.delete(t)}},setProps(n){var r;(r=mt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=mt.get(t))==null?void 0:n.getSnapshot()}}}function b4(e){return Cp.add(e),()=>{Cp.delete(e)}}function w4(e){return e&&(ni(e.toastId)||Xa(e.toastId))?e.toastId:Ew()}function Ka(e,t){return Ow(e,t),t.toastId}function Uc(e,t){return{...t,type:t&&t.type||e,toastId:w4(t)}}function Wc(e){return(t,n)=>Ka(t,Uc(e,n))}function X(e,t){return Ka(e,Uc("default",t))}X.loading=(e,t)=>Ka(e,Uc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function S4(e,{pending:t,error:n,success:r},i){let o;t&&(o=ni(t)?X.loading(t,i):X.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,u,f)=>{if(u==null){X.dismiss(o);return}let v={type:c,...a,...i,data:f},m=ni(u)?{render:u}:u;return o?X.update(o,{...v,...m}):X(m.render,{...v,...m}),f},s=Jn(e)?e():e;return s.then(c=>l("success",r,c)).catch(c=>l("error",n,c)),s}X.promise=S4;X.success=Wc("success");X.info=Wc("info");X.error=Wc("error");X.warning=Wc("warning");X.warn=X.warning;X.dark=(e,t)=>Ka(e,Uc("default",{theme:"dark",...t}));function C4(e){g4(e)}X.dismiss=C4;X.clearWaitingQueue=v4;X.isActive=Pw;X.update=(e,t={})=>{let n=m4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Ew()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Ka(a,o)}};X.done=e=>{X.update(e,{progress:1})};X.onChange=b4;X.play=e=>jw(!0,e);X.pause=e=>jw(!1,e);function _4(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=x.useRef(x4(e)).current;i(e);let o=(t=x.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(c=>{let{position:u}=c.props;s.has(u)||s.set(u,[]),s.get(u).push(c)}),Array.from(s,c=>l(c[0],c[1]))}return{getToastToRender:a,isToastActive:Pw,count:o==null?void 0:o.length}}function k4(e){let[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useRef(null),a=x.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:c,onClick:u,closeOnClick:f}=e;y4({id:e.toastId,containerId:e.containerId,fn:n}),x.useEffect(()=>{if(e.pauseOnFocusLoss)return v(),()=>{m()}},[e.pauseOnFocusLoss]);function v(){document.hasFocus()||h(),window.addEventListener("focus",w),window.addEventListener("blur",h)}function m(){window.removeEventListener("focus",w),window.removeEventListener("blur",h)}function p(E){if(e.draggable===!0||e.draggable===E.pointerType){g();let _=o.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=E.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=E.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function y(E){let{top:_,bottom:$,left:M,right:A}=o.current.getBoundingClientRect();E.nativeEvent.type!=="touchend"&&e.pauseOnHover&&E.clientX>=M&&E.clientX<=A&&E.clientY>=_&&E.clientY<=$?h():w()}function w(){n(!0)}function h(){n(!1)}function g(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",k)}function b(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",k)}function S(E){let _=o.current;if(a.canDrag&&_){a.didMove=!0,t&&h(),e.draggableDirection==="x"?a.delta=E.clientX-a.start:a.delta=E.clientY-a.start,a.start!==E.clientX&&(a.canCloseOnClick=!1);let $=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${$},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function k(){b();let E=o.current;if(a.canDrag&&a.didMove&&E){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}let T={onPointerDown:p,onPointerUp:y};return l&&s&&(T.onMouseEnter=h,e.stacked||(T.onMouseLeave=w)),f&&(T.onClick=E=>{u&&u(E),a.canCloseOnClick&&c(!0)}),{playToast:w,pauseToast:h,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:T}}var E4=typeof window<"u"?x.useLayoutEffect:x.useEffect,Hc=({theme:e,type:t,isLoading:n,...r})=>K.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function T4(e){return K.createElement(Hc,{...e},K.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function P4(e){return K.createElement(Hc,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function O4(e){return K.createElement(Hc,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function j4(e){return K.createElement(Hc,{...e},K.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function $4(){return K.createElement("div",{className:"Toastify__spinner"})}var _p={info:P4,warning:T4,success:O4,error:j4,spinner:$4},M4=e=>e in _p;function I4({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Jn(r)?i=r({...o,isLoading:n}):x.isValidElement(r)?i=x.cloneElement(r,o):n?i=_p.spinner():M4(t)&&(i=_p[t](o))),i}var D4=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=k4(e),{closeButton:a,children:l,autoClose:s,onClick:c,type:u,hideProgressBar:f,closeToast:v,transition:m,position:p,className:y,style:w,progressClassName:h,updateId:g,role:b,progress:S,rtl:k,toastId:T,deleteToast:E,isIn:_,isLoading:$,closeOnClick:M,theme:A,ariaLabel:I}=e,j=Xr("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":M}),L=Jn(y)?y({rtl:k,position:p,type:u,defaultClassName:j}):Xr(j,y),D=I4(e),F=!!S||!s,R={closeToast:v,type:u,theme:A},P=null;return a===!1||(Jn(a)?P=a(R):x.isValidElement(a)?P=x.cloneElement(a,R):P=c4(R)),K.createElement(m,{isIn:_,done:E,position:p,preventExitTransition:n,nodeRef:r,playToast:o},K.createElement("div",{id:T,tabIndex:0,onClick:c,"data-in":_,className:L,...i,style:w,ref:r,..._&&{role:b,"aria-label":I}},D!=null&&K.createElement("div",{className:Xr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},D),kw(l,e,!t),P,!e.customProgressBar&&K.createElement(u4,{...g&&!F?{key:`p-${g}`}:{},rtl:k,theme:A,delay:s,isRunning:t,isIn:_,closeToast:v,hide:f,type:u,className:h,controlledProgress:F,progress:S||0})))},L4=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),A4=l4(L4("bounce",!0)),R4={position:"top-right",transition:A4,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Ln(e){let t={...R4,...e},n=e.stacked,[r,i]=x.useState(!0),o=x.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=_4(t),{className:c,style:u,rtl:f,containerId:v,hotKeys:m}=t;function p(w){let h=Xr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":f});return Jn(c)?c({position:w,rtl:f,defaultClassName:h}):Xr(h,wp(c))}function y(){n&&(i(!0),X.play())}return E4(()=>{var w;if(n){let h=o.current.querySelectorAll('[data-in="true"]'),g=12,b=(w=t.position)==null?void 0:w.includes("top"),S=0,k=0;Array.from(h).reverse().forEach((T,E)=>{let _=T;_.classList.add("Toastify__toast--stacked"),E>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=b?"top":"bot");let $=S*(r?.2:1)+(r?0:g*E);_.style.setProperty("--y",`${b?$:$*-1}px`),_.style.setProperty("--g",`${g}`),_.style.setProperty("--s",`${1-(r?k:0)}`),S+=_.offsetHeight,k+=.025})}},[r,s,n]),x.useEffect(()=>{function w(h){var g;let b=o.current;m(h)&&((g=b.querySelector('[tabIndex="0"]'))==null||g.focus(),i(!1),X.pause()),h.key==="Escape"&&(document.activeElement===b||b!=null&&b.contains(document.activeElement))&&(i(!0),X.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[m]),K.createElement("section",{ref:o,className:"Toastify",id:v,onMouseEnter:()=>{n&&(i(!1),X.pause())},onMouseLeave:y,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,h)=>{let g=h.length?{...u}:{...u,pointerEvents:"none"};return K.createElement("div",{tabIndex:-1,className:p(w),"data-stacked":n,style:g,key:`c-${w}`},h.map(({content:b,props:S})=>K.createElement(D4,{...S,stacked:n,collapseAll:y,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},b)))}))}const ri="/Didiv/assets/nofoto-2f8d9d99.png",F4=C.div`
`,z4=C.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,N4=C.h2`
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

`,B4=C.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;C.div``;const V4=C.div`
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
`,U4=C.div`
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
`,$w=C.div`
  position: relative;
  display: block;
 `,pm=C.div`
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
`,hm=C.div`
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
`,W4=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;
`,H4=C.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,G4=C.p`
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

`;const Mw=C.div.attrs({className:"card-buttons"})`
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
`,ql=C.button`
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
`;const q4=C.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,Ed=C.button`
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
`,Y4=C.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,X4=C.button`
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
`,K4=C.div`
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
`,yi=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,Iw=C.div`
  text-align: center;
  width: 100px;
 
`,Dw=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Lw=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Aw=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Rw=C.span`
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
`;function Ze(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Q4=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),K0=Q4,Td=()=>Math.random().toString(36).substring(7).split("").join("."),Z4={INIT:`@@redux/INIT${Td()}`,REPLACE:`@@redux/REPLACE${Td()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Td()}`},Yl=Z4;function mm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function gm(e,t,n){if(typeof e!="function")throw new Error(Ze(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ze(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ze(1));return n(gm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function c(){a===o&&(a=new Map,o.forEach((w,h)=>{a.set(h,w)}))}function u(){if(s)throw new Error(Ze(3));return i}function f(w){if(typeof w!="function")throw new Error(Ze(4));if(s)throw new Error(Ze(5));let h=!0;c();const g=l++;return a.set(g,w),function(){if(h){if(s)throw new Error(Ze(6));h=!1,c(),a.delete(g),o=null}}}function v(w){if(!mm(w))throw new Error(Ze(7));if(typeof w.type>"u")throw new Error(Ze(8));if(typeof w.type!="string")throw new Error(Ze(17));if(s)throw new Error(Ze(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(g=>{g()}),w}function m(w){if(typeof w!="function")throw new Error(Ze(10));r=w,v({type:Yl.REPLACE})}function p(){const w=f;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(Ze(11));function g(){const S=h;S.next&&S.next(u())}return g(),{unsubscribe:w(g)}},[K0](){return this}}}return v({type:Yl.INIT}),{dispatch:v,subscribe:f,getState:u,replaceReducer:m,[K0]:p}}function J4(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Yl.INIT})>"u")throw new Error(Ze(12));if(typeof n(void 0,{type:Yl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ze(13))})}function e3(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{J4(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const c={};for(let u=0;u<r.length;u++){const f=r[u],v=n[f],m=a[f],p=v(m,l);if(typeof p>"u")throw l&&l.type,new Error(Ze(14));c[f]=p,s=s||p!==m}return s=s||r.length!==Object.keys(a).length,s?c:a}}function Xl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function t3(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Ze(15))};const a={getState:i.getState,dispatch:(s,...c)=>o(s,...c)},l=e.map(s=>s(a));return o=Xl(...l)(i.dispatch),{...i,dispatch:o}}}function n3(e){return mm(e)&&"type"in e&&typeof e.type=="string"}var Fw=Symbol.for("immer-nothing"),Q0=Symbol.for("immer-draftable"),vt=Symbol.for("immer-state");function un(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Ft=Object,ao=Ft.getPrototypeOf,Kl="constructor",Gc="prototype",kp="configurable",Ql="enumerable",il="writable",Ia="value",er=e=>!!e&&!!e[vt];function vn(e){var t;return e?zw(e)||Yc(e)||!!e[Q0]||!!((t=e[Kl])!=null&&t[Q0])||Xc(e)||Kc(e):!1}var r3=Ft[Gc][Kl].toString(),Z0=new WeakMap;function zw(e){if(!e||!vm(e))return!1;const t=ao(e);if(t===null||t===Ft[Gc])return!0;const n=Ft.hasOwnProperty.call(t,Kl)&&t[Kl];if(n===Object)return!0;if(!Ei(n))return!1;let r=Z0.get(n);return r===void 0&&(r=Function.toString.call(n),Z0.set(n,r)),r===r3}function qc(e,t,n=!0){Qa(e)===0?(n?Reflect.ownKeys(e):Ft.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Qa(e){const t=e[vt];return t?t.type_:Yc(e)?1:Xc(e)?2:Kc(e)?3:0}var J0=(e,t,n=Qa(e))=>n===2?e.has(t):Ft[Gc].hasOwnProperty.call(e,t),Ep=(e,t,n=Qa(e))=>n===2?e.get(t):e[t],Zl=(e,t,n,r=Qa(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function i3(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Yc=Array.isArray,Xc=e=>e instanceof Map,Kc=e=>e instanceof Set,vm=e=>typeof e=="object",Ei=e=>typeof e=="function",Pd=e=>typeof e=="boolean";function o3(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Vn=e=>e.copy_||e.base_,ym=e=>e.modified_?e.copy_:e.base_;function Tp(e,t){if(Xc(e))return new Map(e);if(Kc(e))return new Set(e);if(Yc(e))return Array[Gc].slice.call(e);const n=zw(e);if(t===!0||t==="class_only"&&!n){const r=Ft.getOwnPropertyDescriptors(e);delete r[vt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[il]===!1&&(l[il]=!0,l[kp]=!0),(l.get||l.set)&&(r[a]={[kp]:!0,[il]:!0,[Ql]:l[Ql],[Ia]:e[a]})}return Ft.create(ao(e),r)}else{const r=ao(e);if(r!==null&&n)return{...e};const i=Ft.create(r);return Ft.assign(i,e)}}function xm(e,t=!1){return Qc(e)||er(e)||!vn(e)||(Qa(e)>1&&Ft.defineProperties(e,{set:Cs,add:Cs,clear:Cs,delete:Cs}),Ft.freeze(e),t&&qc(e,(n,r)=>{xm(r,!0)},!1)),e}function a3(){un(2)}var Cs={[Ia]:a3};function Qc(e){return e===null||!vm(e)?!0:Ft.isFrozen(e)}var Jl="MapSet",Pp="Patches",ev="ArrayMethods",Nw={};function ii(e){const t=Nw[e];return t||un(0,e),t}var tv=e=>!!Nw[e],Da,Bw=()=>Da,s3=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:tv(Jl)?ii(Jl):void 0,arrayMethodsPlugin_:tv(ev)?ii(ev):void 0});function nv(e,t){t&&(e.patchPlugin_=ii(Pp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Op(e){jp(e),e.drafts_.forEach(l3),e.drafts_=null}function jp(e){e===Da&&(Da=e.parent_)}var rv=e=>Da=s3(Da,e);function l3(e){const t=e[vt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function iv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[vt].modified_&&(Op(t),un(4)),vn(e)&&(e=ov(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[vt].base_,e,t)}else e=ov(t,n);return c3(t,e,!0),Op(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Fw?e:void 0}function ov(e,t){if(Qc(t))return t;const n=t[vt];if(!n)return ec(t,e.handledSet_,e);if(!Zc(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Ww(n,e)}return n.copy_}function c3(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&xm(t,n)}function Vw(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Zc=(e,t)=>e.scope_===t,u3=[];function Uw(e,t,n,r){const i=Vn(e),o=e.type_;if(r!==void 0&&Ep(i,r,o)===t){Zl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;qc(i,(s,c)=>{if(er(c)){const u=l.get(c)||[];u.push(s),l.set(c,u)}})}const a=e.draftLocations_.get(t)??u3;for(const l of a)Zl(i,l,n,o)}function d3(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!Zc(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=ym(o);Uw(e,o.draft_??o,a,n),Ww(o,i)})}function Ww(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Vw(e)}}function f3(e,t,n){const{scope_:r}=e;if(er(n)){const i=n[vt];Zc(i,r)&&i.callbacks_.push(function(){ol(e);const a=ym(i);Uw(e,n,a,t)})}else vn(n)&&e.callbacks_.push(function(){const o=Vn(e);e.type_===3?o.has(n)&&ec(n,r.handledSet_,r):Ep(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&ec(Ep(e.copy_,t,e.type_),r.handledSet_,r)})}function ec(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||er(e)||t.has(e)||!vn(e)||Qc(e)||(t.add(e),qc(e,(r,i)=>{if(er(i)){const o=i[vt];if(Zc(o,n)){const a=ym(o);Zl(e,r,a,e.type_),Vw(o)}}else vn(i)&&ec(i,t,n)})),e}function p3(e,t){const n=Yc(e),r={type_:n?1:0,scope_:t?t.scope_:Bw(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=tc;n&&(i=[r],o=La);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var tc={get(e,t){if(t===vt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Vn(e);if(!J0(i,t,e.type_))return h3(e,i,t);const o=i[t];if(e.finalized_||!vn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&o3(t))return o;if(o===Od(e.base_,t)){ol(e);const a=e.type_===1?+t:t,l=Mp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Vn(e)},ownKeys(e){return Reflect.ownKeys(Vn(e))},set(e,t,n){const r=Hw(Vn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Od(Vn(e),t),o=i==null?void 0:i[vt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(i3(n,i)&&(n!==void 0||J0(e.base_,t,e.type_)))return!0;ol(e),$p(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),f3(e,t,n)),!0},deleteProperty(e,t){return ol(e),Od(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),$p(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Vn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[il]:!0,[kp]:e.type_!==1||t!=="length",[Ql]:r[Ql],[Ia]:n[t]}},defineProperty(){un(11)},getPrototypeOf(e){return ao(e.base_)},setPrototypeOf(){un(12)}},La={};for(let e in tc){let t=tc[e];La[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}La.deleteProperty=function(e,t){return La.set.call(this,e,t,void 0)};La.set=function(e,t,n){return tc.set.call(this,e[0],t,n,e[0])};function Od(e,t){const n=e[vt];return(n?Vn(n):e)[t]}function h3(e,t,n){var i;const r=Hw(t,n);return r?Ia in r?r[Ia]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Hw(e,t){if(!(t in e))return;let n=ao(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=ao(n)}}function $p(e){e.modified_||(e.modified_=!0,e.parent_&&$p(e.parent_))}function ol(e){e.copy_||(e.assigned_=new Map,e.copy_=Tp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var m3=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(Ei(t)&&!Ei(n)){const o=n;n=t;const a=this;return function(s=o,...c){return a.produce(s,u=>n.call(this,u,...c))}}Ei(n)||un(6),r!==void 0&&!Ei(r)&&un(7);let i;if(vn(t)){const o=rv(this),a=Mp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?Op(o):jp(o)}return nv(o,r),iv(i,o)}else if(!t||!vm(t)){if(i=n(t),i===void 0&&(i=t),i===Fw&&(i=void 0),this.autoFreeze_&&xm(i,!0),r){const o=[],a=[];ii(Pp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else un(1,t)},this.produceWithPatches=(t,n)=>{if(Ei(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},Pd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Pd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Pd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){vn(e)||un(8),er(e)&&(e=g3(e));const t=rv(this),n=Mp(t,e,void 0);return n[vt].isManual_=!0,jp(t),n}finishDraft(e,t){const n=e&&e[vt];(!n||!n.isManual_)&&un(9);const{scope_:r}=n;return nv(r,t),iv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=ii(Pp).applyPatches_;return er(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Mp(e,t,n,r){const[i,o]=Xc(t)?ii(Jl).proxyMap_(t,n):Kc(t)?ii(Jl).proxySet_(t,n):p3(t,n);return((n==null?void 0:n.scope_)??Bw()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?d3(n,o,r):o.callbacks_.push(function(s){var u;(u=s.mapSetPlugin_)==null||u.fixSetContents(o);const{patchPlugin_:c}=s;o.modified_&&c&&c.generatePatches_(o,[],s)}),i}function g3(e){return er(e)||un(10,e),Gw(e)}function Gw(e){if(!vn(e)||Qc(e))return e;const t=e[vt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Tp(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=Tp(e,!0);return qc(n,(i,o)=>{Zl(n,i,Gw(o))},r),t&&(t.finalized_=!1),n}var v3=new m3,qw=v3.produce;function Yw(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var y3=Yw(),x3=Yw,b3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Xl:Xl.apply(null,arguments)};function av(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(qn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>n3(r)&&r.type===e,n}var Xw=class Ko extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ko.prototype)}static get[Symbol.species](){return Ko}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ko(...t[0].concat(this)):new Ko(...t.concat(this))}};function sv(e){return vn(e)?qw(e,()=>{}):e}function _s(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function w3(e){return typeof e=="boolean"}var S3=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new Xw;return n&&(w3(n)?a.push(y3):a.push(x3(n.extraArgument))),a},C3="RTK_autoBatch",lv=e=>t=>{setTimeout(t,e)},_3=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:lv(10):e.type==="callback"?e.queueNotification:lv(e.timeout),c=()=>{a=!1,o&&(o=!1,l.forEach(u=>u()))};return Object.assign({},r,{subscribe(u){const f=()=>i&&u(),v=r.subscribe(f);return l.add(u),()=>{v(),l.delete(u)}},dispatch(u){var f;try{return i=!((f=u==null?void 0:u.meta)!=null&&f[C3]),o=!i,o&&(a||(a=!0,s(c))),r.dispatch(u)}finally{i=!0}}})},k3=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new Xw(e);return r&&i.push(_3(typeof r=="object"?r:void 0)),i};function E3(e){const t=S3(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(mm(n))s=e3(n);else throw new Error(qn(1));let c;typeof r=="function"?c=r(t):c=t();let u=Xl;i&&(u=b3({trace:!1,...typeof i=="object"&&i}));const f=t3(...c),v=k3(f);let m=typeof l=="function"?l(v):v();const p=u(...m);return gm(s,a,p)}function Kw(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(qn(28));if(l in t)throw new Error(qn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function T3(e){return typeof e=="function"}function P3(e,t){let[n,r,i]=Kw(t),o;if(T3(e))o=()=>sv(e());else{const l=sv(e);o=()=>l}function a(l=o(),s){let c=[n[s.type],...r.filter(({matcher:u})=>u(s)).map(({reducer:u})=>u)];return c.filter(u=>!!u).length===0&&(c=[i]),c.reduce((u,f)=>{if(f)if(er(u)){const m=f(u,s);return m===void 0?u:m}else{if(vn(u))return qw(u,v=>f(v,s));{const v=f(u,s);if(v===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return u},l)}return a.getInitialState=o,a}var O3=Symbol.for("rtk-slice-createasyncthunk");function j3(e,t){return`${e}/${t}`}function $3({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[O3];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(qn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(I3()):i.reducers)||{},s=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(S,k){const T=typeof S=="string"?S:S.type;if(!T)throw new Error(qn(12));if(T in c.sliceCaseReducersByType)throw new Error(qn(13));return c.sliceCaseReducersByType[T]=k,u},addMatcher(S,k){return c.sliceMatchers.push({matcher:S,reducer:k}),u},exposeAction(S,k){return c.actionCreators[S]=k,u},exposeCaseReducer(S,k){return c.sliceCaseReducersByName[S]=k,u}};s.forEach(S=>{const k=l[S],T={reducerName:S,type:j3(o,S),createNotation:typeof i.reducers=="function"};L3(k)?R3(T,k,u,t):D3(T,k,u)});function f(){const[S={},k=[],T=void 0]=typeof i.extraReducers=="function"?Kw(i.extraReducers):[i.extraReducers],E={...S,...c.sliceCaseReducersByType};return P3(i.initialState,_=>{for(let $ in E)_.addCase($,E[$]);for(let $ of c.sliceMatchers)_.addMatcher($.matcher,$.reducer);for(let $ of k)_.addMatcher($.matcher,$.reducer);T&&_.addDefaultCase(T)})}const v=S=>S,m=new Map,p=new WeakMap;let y;function w(S,k){return y||(y=f()),y(S,k)}function h(){return y||(y=f()),y.getInitialState()}function g(S,k=!1){function T(_){let $=_[S];return typeof $>"u"&&k&&($=_s(p,T,h)),$}function E(_=v){const $=_s(m,k,()=>new WeakMap);return _s($,_,()=>{const M={};for(const[A,I]of Object.entries(i.selectors??{}))M[A]=M3(I,_,()=>_s(p,_,h),k);return M})}return{reducerPath:S,getSelectors:E,get selectors(){return E(T)},selectSlice:T}}const b={name:o,reducer:w,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:h,...g(a),injectInto(S,{reducerPath:k,...T}={}){const E=k??a;return S.inject({reducerPath:E,reducer:w},T),{...b,...g(E,!0)}}};return b}}function M3(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var Qw=$3();function I3(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function D3({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!A3(r))throw new Error(qn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?av(e,a):av(e))}function L3(e){return e._reducerDefinitionType==="asyncThunk"}function A3(e){return e._reducerDefinitionType==="reducerWithPrepare"}function R3({type:e,reducerName:t},n,r,i){if(!i)throw new Error(qn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:c,options:u}=n,f=i(e,o,u);r.exposeAction(t,f),a&&r.addCase(f.fulfilled,a),l&&r.addCase(f.pending,l),s&&r.addCase(f.rejected,s),c&&r.addMatcher(f.settled,c),r.exposeCaseReducer(t,{fulfilled:a||ks,pending:l||ks,rejected:s||ks,settled:c||ks})}function ks(){}function qn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Zw=Qw({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]},setFavorites(e,t){e.items=t.payload},addFavorite(e,t){e.items.some(r=>r.id===t.payload.id)||e.items.push(t.payload)},removeFavorite(e,t){e.items=e.items.filter(n=>n.id!==t.payload)}}}),{toggleFavorite:sV,clearFavorite:Jw,addFavorite:cv,removeFavorite:uv,setFavorites:F3}=Zw.actions,z3=Zw.reducer,N3=async(e,t,n,r)=>{const i=t==null?void 0:t.find(a=>{var l;return((l=a.product)==null?void 0:l.documentId)===(e==null?void 0:e.documentId)});if(i){const a=i.user.map(l=>l.documentId);if(!a.includes(n)){a.push(n);const l=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:a}})});if(!l.ok)throw new Error("Не вдалося оновити favorite");return await l.json()}return i}const o=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e.documentId,user:[n]}})});if(!o.ok)throw new Error("Не вдалося створити favorite");return await o.json()},B3=async(e,t,n,r)=>{var l;const i=t==null?void 0:t.find(s=>{var c;return((c=s.product)==null?void 0:c.documentId)===(e==null?void 0:e.documentId)});if(!i)return;const o=(l=i.user)==null?void 0:l.filter(s=>s.documentId!==n).map(s=>s.documentId);if((o==null?void 0:o.length)===0){if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити favorite");return}const a=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:o}})});if(!a.ok)throw new Error("Не вдалося оновити favorite");return await a.json()},ui=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o)return t?(n(uv(e.id)),r.warning(`${e.name} видалено з обраного`)):(n(cv(e)),r.success(`${e.name} додано в обране`)),!0;const a=o.documentId,l=o.id;try{const s=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${l}?populate[favorites][populate][0]=product&populate[favorites][populate][1]=user`,{headers:{Authorization:`Bearer ${i}`}});if(!s.ok)throw new Error("Не вдалося отримати favorites користувача");const c=await s.json(),u=await fetch("https://backenddidiv-production.up.railway.app/api/favorites?populate=*",{headers:{Authorization:`Bearer ${i}`}}),{data:f}=await u.json(),v=c==null?void 0:c.favorites;return t?(await B3(e,v,a,i),n(uv(e.id)),r.warning(`${e.name} видалено з обраного`),!0):(await N3(e,f,a,i),n(cv(e)),r.success(`${e.name} додано в обране`),!0)}catch{return r.error("Не вдалося оновити обране"),!1}},eS=Qw({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===n.id);if(r){if(r.quantity>=n.stock)return;r.quantity+=1}else e.items.push({...n,quantity:1})},setCartItemQuantity:(e,t)=>{const{id:n,quantity:r}=t.payload,i=e.items.find(o=>o.id===n);i&&(i.quantity=r)},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},setCartItems:(e,t)=>{e.items=t.payload},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{setCartItems:tS,addToCart:Ip,setCartItemQuantity:dv,removeFromCart:nS,clearCart:yo,addAllToCart:V3,incrementQuantity:fv,decrementQuantity:pv}=eS.actions,U3=eS.reducer,W3=async(e,t,n,r)=>{const i=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e,quantity:t,user:n}})});if(!i.ok)throw new Error("Не вдалося створити CartItem");return i.json()},H3=async(e,t,n)=>{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({data:{quantity:t}})});if(!r.ok)throw new Error("Не вдалося оновити CartItem");return r.json()},Za=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o){for(let l=0;l<t;l++)n(Ip(e));return r.success(`${e.name} додано в кошик!`),!0}const a=o.id;try{const l=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${a}&populate=product`,{headers:{Authorization:`Bearer ${i}`}});if(!l.ok)throw new Error("Не вдалося отримати кошик користувача");const{data:s}=await l.json(),c=s.find(u=>{var f;return((f=u.product)==null?void 0:f.documentId)===e.documentId});if(c){const u=c.quantity+t;if(u>e.stock)return r.warning(`Доступно лише ${e.stock} шт.`),!1;await H3(c.documentId,u,i),n(dv({id:e.id,quantity:u}))}else await W3(e.documentId,t,a,i),n(Ip({...e})),t>1&&n(dv({id:e.id,quantity:t}));return r.success(`${e.name} додано в кошик!`),!0}catch(l){return console.error(l),r.error("Не вдалося додати товар у кошик"),!1}},rS=()=>{const e=Mt(),[t,n]=x.useState([]),r=Ue(s=>s.favorites.items),i=Ue(s=>s.cart.items),o=xt();x.useEffect(()=>{const s=new Date,c=new Date;c.setDate(s.getDate()-7);const u=c.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${u}`).then(f=>f.json()).then(f=>n(f.data)).catch(f=>console.error("Помилка завантаження нових товарів:",f))},[]);const a=(s,c)=>{c.stopPropagation();const u=r.some(f=>f.id===(s==null?void 0:s.id));ui(s,u,e,X)},l=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:d.jsxs(Hj,{children:[d.jsx(Ln,{}),d.jsx(Gj,{children:"Нові товари"}),d.jsxs(qj,{children:[l.map(s=>{var g;const c=r.some(b=>b.id===s.id),u=(s==null?void 0:s.available)??!0;console.log({name:s.name,available:s.available,isAvailable:u});const f=i.find(b=>b.id===s.id),m=(f?f.quantity:0)>=(s.stock||0),p=s.new_price&&s.new_price<s.price,y=p?s.new_price:s.price,w=p?Math.round((s.price-s.new_price)/s.price*100):0,h=async()=>{if(m){X.warning("Товар вже в кошику (досягнуто максимум)");return}if(m){X.warning(`Доступно лише ${s.stock} шт.`);return}await Za(s,1,e,X)};return d.jsxs(Yj,{onClick:()=>o(`/product/${s.slug??s.id}`),children:[d.jsxs(Kj,{children:[d.jsx(Qj,{children:"Новинка"}),!u&&d.jsx(Xj,{children:"Бронь"}),d.jsx("img",{src:((g=s.images)==null?void 0:g[0].url)||ri,alt:s.name,onError:b=>{b.currentTarget.onerror=null,b.currentTarget.src=ri}}),d.jsx("div",{className:"overlay"})]}),d.jsxs(Zj,{children:[d.jsx(Jj,{children:s.name}),d.jsxs(e4,{children:[d.jsx(Iw,{children:d.jsxs(Dw,{children:[d.jsxs(Lw,{$discount:p,children:[y.toLocaleString()," грн"]}),p&&d.jsxs(Aw,{children:[s.price.toLocaleString()," грн"]}),p&&d.jsxs(Rw,{children:["-",w,"%"]})]})}),d.jsxs(Mw,{children:[u&&d.jsx(ql,{onClick:b=>h(),children:d.jsx(vo,{size:24,color:f?"var(--orange-color)":"black",strokeWidth:2})}),d.jsx(ql,{onClick:b=>a(s,b),children:d.jsx(Ya,{size:24,fill:c?"#ff4d4f":"none",color:c?"#ff4d4f":"#000000",strokeWidth:c?1:2})})]})]})]})]},s.id)}),d.jsx(t4,{to:"/catalog/new",children:d.jsxs(n4,{children:[d.jsx("p",{children:"Усі новинки"}),d.jsx(r4,{children:d.jsx(Vc,{size:24})})]})})]})]})};function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function G3(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function q3(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Y3=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(q3(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=G3(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),at="-ms-",nc="-moz-",ue="-webkit-",iS="comm",bm="rule",wm="decl",X3="@import",oS="@keyframes",K3="@layer",Q3=Math.abs,Jc=String.fromCharCode,Z3=Object.assign;function J3(e,t){return et(e,0)^45?(((t<<2^et(e,0))<<2^et(e,1))<<2^et(e,2))<<2^et(e,3):0}function aS(e){return e.trim()}function e$(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function Dp(e,t){return e.indexOf(t)}function et(e,t){return e.charCodeAt(t)|0}function Aa(e,t,n){return e.slice(t,n)}function Cn(e){return e.length}function Sm(e){return e.length}function Es(e,t){return t.push(e),e}function t$(e,t){return e.map(t).join("")}var eu=1,so=1,sS=0,jt=0,Ae=0,xo="";function tu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:eu,column:so,length:a,return:""}}function Ao(e,t){return Z3(tu("",null,null,"",null,null,0),e,{length:-e.length},t)}function n$(){return Ae}function r$(){return Ae=jt>0?et(xo,--jt):0,so--,Ae===10&&(so=1,eu--),Ae}function Nt(){return Ae=jt<sS?et(xo,jt++):0,so++,Ae===10&&(so=1,eu++),Ae}function On(){return et(xo,jt)}function al(){return jt}function Ja(e,t){return Aa(xo,e,t)}function Ra(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lS(e){return eu=so=1,sS=Cn(xo=e),jt=0,[]}function cS(e){return xo="",e}function sl(e){return aS(Ja(jt-1,Lp(e===91?e+2:e===40?e+1:e)))}function i$(e){for(;(Ae=On())&&Ae<33;)Nt();return Ra(e)>2||Ra(Ae)>3?"":" "}function o$(e,t){for(;--t&&Nt()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return Ja(e,al()+(t<6&&On()==32&&Nt()==32))}function Lp(e){for(;Nt();)switch(Ae){case e:return jt;case 34:case 39:e!==34&&e!==39&&Lp(Ae);break;case 40:e===41&&Lp(e);break;case 92:Nt();break}return jt}function a$(e,t){for(;Nt()&&e+Ae!==47+10;)if(e+Ae===42+42&&On()===47)break;return"/*"+Ja(t,jt-1)+"*"+Jc(e===47?e:Nt())}function s$(e){for(;!Ra(On());)Nt();return Ja(e,jt)}function l$(e){return cS(ll("",null,null,null,[""],e=lS(e),0,[0],e))}function ll(e,t,n,r,i,o,a,l,s){for(var c=0,u=0,f=a,v=0,m=0,p=0,y=1,w=1,h=1,g=0,b="",S=i,k=o,T=r,E=b;w;)switch(p=g,g=Nt()){case 40:if(p!=108&&et(E,f-1)==58){Dp(E+=de(sl(g),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=sl(g);break;case 9:case 10:case 13:case 32:E+=i$(p);break;case 92:E+=o$(al()-1,7);continue;case 47:switch(On()){case 42:case 47:Es(c$(a$(Nt(),al()),t,n),s);break;default:E+="/"}break;case 123*y:l[c++]=Cn(E)*h;case 125*y:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+u:h==-1&&(E=de(E,/\f/g,"")),m>0&&Cn(E)-f&&Es(m>32?mv(E+";",r,n,f-1):mv(de(E," ","")+";",r,n,f-2),s);break;case 59:E+=";";default:if(Es(T=hv(E,t,n,c,u,i,l,b,S=[],k=[],f),o),g===123)if(u===0)ll(E,t,T,T,S,o,f,l,k);else switch(v===99&&et(E,3)===110?100:v){case 100:case 108:case 109:case 115:ll(e,T,T,r&&Es(hv(e,T,T,0,0,i,l,b,i,S=[],f),k),i,k,f,l,r?S:k);break;default:ll(E,T,T,T,[""],k,0,l,k)}}c=u=m=0,y=h=1,b=E="",f=a;break;case 58:f=1+Cn(E),m=p;default:if(y<1){if(g==123)--y;else if(g==125&&y++==0&&r$()==125)continue}switch(E+=Jc(g),g*y){case 38:h=u>0?1:(E+="\f",-1);break;case 44:l[c++]=(Cn(E)-1)*h,h=1;break;case 64:On()===45&&(E+=sl(Nt())),v=On(),u=f=Cn(b=E+=s$(al())),g++;break;case 45:p===45&&Cn(E)==2&&(y=0)}}return o}function hv(e,t,n,r,i,o,a,l,s,c,u){for(var f=i-1,v=i===0?o:[""],m=Sm(v),p=0,y=0,w=0;p<r;++p)for(var h=0,g=Aa(e,f+1,f=Q3(y=a[p])),b=e;h<m;++h)(b=aS(y>0?v[h]+" "+g:de(g,/&\f/g,v[h])))&&(s[w++]=b);return tu(e,t,n,i===0?bm:l,s,c,u)}function c$(e,t,n){return tu(e,t,n,iS,Jc(n$()),Aa(e,2,-2),0)}function mv(e,t,n,r){return tu(e,t,n,wm,Aa(e,0,r),Aa(e,r+1,-1),r)}function Hi(e,t){for(var n="",r=Sm(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function u$(e,t,n,r){switch(e.type){case K3:if(e.children.length)break;case X3:case wm:return e.return=e.return||e.value;case iS:return"";case oS:return e.return=e.value+"{"+Hi(e.children,r)+"}";case bm:e.value=e.props.join(",")}return Cn(n=Hi(e.children,r))?e.return=e.value+"{"+n+"}":""}function d$(e){var t=Sm(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function f$(e){return function(t){t.root||(t=t.return)&&e(t)}}function p$(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var h$=function(t,n,r){for(var i=0,o=0;i=o,o=On(),i===38&&o===12&&(n[r]=1),!Ra(o);)Nt();return Ja(t,jt)},m$=function(t,n){var r=-1,i=44;do switch(Ra(i)){case 0:i===38&&On()===12&&(n[r]=1),t[r]+=h$(jt-1,n,r);break;case 2:t[r]+=sl(i);break;case 4:if(i===44){t[++r]=On()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Jc(i)}while(i=Nt());return t},g$=function(t,n){return cS(m$(lS(t),n))},gv=new WeakMap,v$=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!gv.get(r))&&!i){gv.set(t,!0);for(var o=[],a=g$(n,o),l=r.props,s=0,c=0;s<a.length;s++)for(var u=0;u<l.length;u++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[u]):l[u]+" "+a[s]}}},y$=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function uS(e,t){switch(J3(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+nc+e+at+e+e;case 6828:case 4268:return ue+e+at+e+e;case 6165:return ue+e+at+"flex-"+e+e;case 5187:return ue+e+de(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+at+"flex-$1$2")+e;case 5443:return ue+e+at+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ue+e+at+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ue+e+at+de(e,"shrink","negative")+e;case 5292:return ue+e+at+de(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+de(e,"-grow","")+ue+e+at+de(e,"grow","positive")+e;case 4554:return ue+de(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+at+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(e)-1-t>6)switch(et(e,t+1)){case 109:if(et(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+nc+(et(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Dp(e,"stretch")?uS(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(et(e,t+1)!==115)break;case 6444:switch(et(e,Cn(e)-3-(~Dp(e,"!important")&&10))){case 107:return de(e,":",":"+ue)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(et(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+at+"$2box$3")+e}break;case 5936:switch(et(e,t+11)){case 114:return ue+e+at+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+at+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+at+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ue+e+at+e+e}return e}var x$=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case wm:t.return=uS(t.value,t.length);break;case oS:return Hi([Ao(t,{value:de(t.value,"@","@"+ue)})],i);case bm:if(t.length)return t$(t.props,function(o){switch(e$(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Hi([Ao(t,{props:[de(o,/:(read-\w+)/,":"+nc+"$1")]})],i);case"::placeholder":return Hi([Ao(t,{props:[de(o,/:(plac\w+)/,":"+ue+"input-$1")]}),Ao(t,{props:[de(o,/:(plac\w+)/,":"+nc+"$1")]}),Ao(t,{props:[de(o,/:(plac\w+)/,at+"input-$1")]})],i)}return""})}},b$=[x$],w$=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var w=y.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||b$,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var w=y.getAttribute("data-emotion").split(" "),h=1;h<w.length;h++)o[w[h]]=!0;l.push(y)});var s,c=[v$,y$];{var u,f=[u$,f$(function(y){u.insert(y)})],v=d$(c.concat(i,f)),m=function(w){return Hi(l$(w),v)};s=function(w,h,g,b){u=g,m(w?w+"{"+h.styles+"}":h.styles),b&&(p.inserted[h.name]=!0)}}var p={key:n,sheet:new Y3({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return p.sheet.hydrate(l),p},dS={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,Cm=Qe?Symbol.for("react.element"):60103,_m=Qe?Symbol.for("react.portal"):60106,nu=Qe?Symbol.for("react.fragment"):60107,ru=Qe?Symbol.for("react.strict_mode"):60108,iu=Qe?Symbol.for("react.profiler"):60114,ou=Qe?Symbol.for("react.provider"):60109,au=Qe?Symbol.for("react.context"):60110,km=Qe?Symbol.for("react.async_mode"):60111,su=Qe?Symbol.for("react.concurrent_mode"):60111,lu=Qe?Symbol.for("react.forward_ref"):60112,cu=Qe?Symbol.for("react.suspense"):60113,S$=Qe?Symbol.for("react.suspense_list"):60120,uu=Qe?Symbol.for("react.memo"):60115,du=Qe?Symbol.for("react.lazy"):60116,C$=Qe?Symbol.for("react.block"):60121,_$=Qe?Symbol.for("react.fundamental"):60117,k$=Qe?Symbol.for("react.responder"):60118,E$=Qe?Symbol.for("react.scope"):60119;function Ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Cm:switch(e=e.type,e){case km:case su:case nu:case iu:case ru:case cu:return e;default:switch(e=e&&e.$$typeof,e){case au:case lu:case du:case uu:case ou:return e;default:return t}}case _m:return t}}}function fS(e){return Ht(e)===su}ge.AsyncMode=km;ge.ConcurrentMode=su;ge.ContextConsumer=au;ge.ContextProvider=ou;ge.Element=Cm;ge.ForwardRef=lu;ge.Fragment=nu;ge.Lazy=du;ge.Memo=uu;ge.Portal=_m;ge.Profiler=iu;ge.StrictMode=ru;ge.Suspense=cu;ge.isAsyncMode=function(e){return fS(e)||Ht(e)===km};ge.isConcurrentMode=fS;ge.isContextConsumer=function(e){return Ht(e)===au};ge.isContextProvider=function(e){return Ht(e)===ou};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cm};ge.isForwardRef=function(e){return Ht(e)===lu};ge.isFragment=function(e){return Ht(e)===nu};ge.isLazy=function(e){return Ht(e)===du};ge.isMemo=function(e){return Ht(e)===uu};ge.isPortal=function(e){return Ht(e)===_m};ge.isProfiler=function(e){return Ht(e)===iu};ge.isStrictMode=function(e){return Ht(e)===ru};ge.isSuspense=function(e){return Ht(e)===cu};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nu||e===su||e===iu||e===ru||e===cu||e===S$||typeof e=="object"&&e!==null&&(e.$$typeof===du||e.$$typeof===uu||e.$$typeof===ou||e.$$typeof===au||e.$$typeof===lu||e.$$typeof===_$||e.$$typeof===k$||e.$$typeof===E$||e.$$typeof===C$)};ge.typeOf=Ht;dS.exports=ge;var T$=dS.exports,pS=T$,P$={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},O$={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hS={};hS[pS.ForwardRef]=P$;hS[pS.Memo]=O$;var j$=!0;function mS(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Em=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||j$===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},gS=function(t,n,r){Em(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function $$(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var M$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},I$=/[A-Z]|^ms/g,D$=/_EMO_([^_]+?)_([^]*?)_EMO_/g,vS=function(t){return t.charCodeAt(1)===45},vv=function(t){return t!=null&&typeof t!="boolean"},jd=p$(function(e){return vS(e)?e:e.replace(I$,"-$&").toLowerCase()}),yv=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(D$,function(r,i,o){return _n={name:i,styles:o,next:_n},i})}return M$[t]!==1&&!vS(t)&&typeof n=="number"&&n!==0?n+"px":n};function Fa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return _n={name:n.name,styles:n.styles,next:_n},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)_n={name:r.name,styles:r.styles,next:_n},r=r.next;var i=n.styles+";";return i}return L$(e,t,n)}case"function":{if(e!==void 0){var o=_n,a=n(e);return _n=o,Fa(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function L$(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Fa(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":vv(a)&&(r+=jd(o)+":"+yv(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)vv(a[l])&&(r+=jd(o)+":"+yv(o,a[l])+";");else{var s=Fa(e,t,a);switch(o){case"animation":case"animationName":{r+=jd(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var xv=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_n,Tm=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";_n=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Fa(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Fa(r,n,t[l]),i&&(o+=a[l]);xv.lastIndex=0;for(var s="",c;(c=xv.exec(o))!==null;)s+="-"+c[1];var u=$$(o)+s;return{name:u,styles:o,next:_n}},A$=function(t){return t()},R$=gf["useInsertionEffect"]?gf["useInsertionEffect"]:!1,yS=R$||A$,Pm={}.hasOwnProperty,xS=x.createContext(typeof HTMLElement<"u"?w$({key:"css"}):null);xS.Provider;var bS=function(t){return x.forwardRef(function(n,r){var i=x.useContext(xS);return t(n,i,r)})},wS=x.createContext({}),Ap="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",F$=function(t,n){var r={};for(var i in n)Pm.call(n,i)&&(r[i]=n[i]);return r[Ap]=t,r},z$=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Em(n,r,i),yS(function(){return gS(n,r,i)}),null},N$=bS(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Ap],o=[r],a="";typeof e.className=="string"?a=mS(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Tm(o,void 0,x.useContext(wS));a+=t.key+"-"+l.name;var s={};for(var c in e)Pm.call(e,c)&&c!=="css"&&c!==Ap&&(s[c]=e[c]);return s.ref=n,s.className=a,x.createElement(x.Fragment,null,x.createElement(z$,{cache:t,serialized:l,isStringTag:typeof i=="string"}),x.createElement(i,s))}),B$=N$,Q=function(t,n){var r=arguments;if(n==null||!Pm.call(n,"css"))return x.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=B$,o[1]=F$(t,n);for(var a=2;a<i;a++)o[a]=r[a];return x.createElement.apply(null,o)};function Om(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Tm(t)}var V$=function(){var t=Om.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},U$=QT,W$=function(t){return t!=="theme"},bv=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?U$:W$},wv=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},H$=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Em(n,r,i),yS(function(){return gS(n,r,i)}),null},G$=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=wv(t,n,r),s=l||bv(i),c=!s("as");return function(){var u=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)f.push.apply(f,u);else{f.push(u[0][0]);for(var v=u.length,m=1;m<v;m++)f.push(u[m],u[0][m])}var p=bS(function(y,w,h){var g=c&&y.as||i,b="",S=[],k=y;if(y.theme==null){k={};for(var T in y)k[T]=y[T];k.theme=x.useContext(wS)}typeof y.className=="string"?b=mS(w.registered,S,y.className):y.className!=null&&(b=y.className+" ");var E=Tm(f.concat(S),w.registered,k);b+=w.key+"-"+E.name,a!==void 0&&(b+=" "+a);var _=c&&l===void 0?bv(g):s,$={};for(var M in y)c&&M==="as"||_(M)&&($[M]=y[M]);return $.className=b,$.ref=h,x.createElement(x.Fragment,null,x.createElement(H$,{cache:w,serialized:E,isStringTag:typeof g=="string"}),x.createElement(g,$))});return p.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=i,p.__emotion_styles=f,p.__emotion_forwardProp=l,Object.defineProperty(p,"toString",{value:function(){return"."+a}}),p.withComponent=function(y,w){return e(y,J({},n,w,{shouldForwardProp:wv(p,w,!0)})).apply(void 0,f)},p}},q$=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fe=G$.bind();q$.forEach(function(e){Fe[e]=Fe(e)});const Y$=Fe.section`
  background-color: var(--second-background);
`,X$=Fe.div`
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
`,K$=Fe.div`

`,Q$=Fe.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,Z$=Fe.div`
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
`;Fe.div`
  position: absolute;
  inset: 0; /* займає всю картку */
  background: rgba(0, 0, 0, 0.622); /* чорний з прозорістю 25% */
`;const J$=Fe(Te)`
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
`,e5=Fe.div`
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
`,t5=Fe.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,n5=Fe.p`
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
`;var r5={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};i5(r5);function i5(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var o5="#4fa94d",a5={"aria-busy":!0,role:"progressbar"},s5=C.div`
  display: ${e=>e.$visible?"flex":"none"};
`,l5="http://www.w3.org/2000/svg",di=({height:e=100,width:t=100,radius:n=5,color:r=o5,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>d.jsx(s5,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...a5,children:d.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:l5,"data-testid":"ball-triangle-svg",children:[d.jsx("title",{children:"Ball Triangle"}),d.jsx("desc",{children:"Animated representation of three balls"}),d.jsx("g",{fill:"none",fillRule:"evenodd",children:d.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[d.jsxs("circle",{cx:"5",cy:"50",r:n,children:[d.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),d.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),d.jsxs("circle",{cx:"27",cy:"5",r:n,children:[d.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),d.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),d.jsxs("circle",{cx:"49",cy:"50",r:n,children:[d.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),d.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),rn=242.776657104492,c5=1.6,u5=dm`
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
`;C.path`
  stroke-dasharray: ${rn*.01}px, ${rn};
  stroke-dashoffset: 0;
  animation: ${u5} ${c5}s linear infinite;
`;var d5=dm`
to {
   transform: rotate(360deg);
 }
`;C.svg`
  animation: ${d5} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var f5=dm`
to {
   stroke-dashoffset: 136;
 }
`;C.polygon`
  stroke-dasharray: 17;
  animation: ${f5} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;C.svg`
  transform-origin: 50% 65%;
`;const p5=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0);return x.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:d.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):d.jsx(Y$,{children:d.jsxs(X$,{children:[d.jsx(K$,{children:d.jsx(rS,{})}),d.jsx(Q$,{children:"Каталог"}),d.jsx(Z$,{children:e.map(i=>d.jsxs(J$,{to:`/catalog/${i.title}`,children:[d.jsx(e5,{children:d.jsx(t5,{src:i.image,alt:i.title})}),d.jsx(n5,{children:i.title})]},i.id))})]})})},h5=Fe.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,m5=Fe.h1`
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
`,g5=Fe.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,v5=Fe(Te)`

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

  
`,y5=()=>d.jsxs(h5,{children:[d.jsxs(m5,{children:[" ",d.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),d.jsx(g5,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),d.jsx(v5,{children:" На головну"})]});const x5=C.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,b5=C.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var SS={},CS={},fu={},_S={exports:{}},es={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Sv=Object.getOwnPropertySymbols,w5=Object.prototype.hasOwnProperty,S5=Object.prototype.propertyIsEnumerable;function C5(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function _5(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var k5=_5()?Object.assign:function(e,t){for(var n,r=C5(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)w5.call(n,a)&&(r[a]=n[a]);if(Sv){i=Sv(n);for(var l=0;l<i.length;l++)S5.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},kS={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm=k5,bo=60103,ES=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var TS=60109,PS=60110,OS=60112;le.Suspense=60113;var jS=60115,$S=60116;if(typeof Symbol=="function"&&Symbol.for){var nn=Symbol.for;bo=nn("react.element"),ES=nn("react.portal"),le.Fragment=nn("react.fragment"),le.StrictMode=nn("react.strict_mode"),le.Profiler=nn("react.profiler"),TS=nn("react.provider"),PS=nn("react.context"),OS=nn("react.forward_ref"),le.Suspense=nn("react.suspense"),jS=nn("react.memo"),$S=nn("react.lazy")}var Cv=typeof Symbol=="function"&&Symbol.iterator;function E5(e){return e===null||typeof e!="object"?null:(e=Cv&&e[Cv]||e["@@iterator"],typeof e=="function"?e:null)}function ts(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var MS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},IS={};function wo(e,t,n){this.props=e,this.context=t,this.refs=IS,this.updater=n||MS}wo.prototype.isReactComponent={};wo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(ts(85));this.updater.enqueueSetState(this,e,t,"setState")};wo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function DS(){}DS.prototype=wo.prototype;function $m(e,t,n){this.props=e,this.context=t,this.refs=IS,this.updater=n||MS}var Mm=$m.prototype=new DS;Mm.constructor=$m;jm(Mm,wo.prototype);Mm.isPureReactComponent=!0;var Im={current:null},LS=Object.prototype.hasOwnProperty,AS={key:!0,ref:!0,__self:!0,__source:!0};function RS(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)LS.call(t,r)&&!AS.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:bo,type:e,key:o,ref:a,props:i,_owner:Im.current}}function T5(e,t){return{$$typeof:bo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Dm(e){return typeof e=="object"&&e!==null&&e.$$typeof===bo}function P5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _v=/\/+/g;function $d(e,t){return typeof e=="object"&&e!==null&&e.key!=null?P5(""+e.key):t.toString(36)}function cl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case bo:case ES:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+$d(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(_v,"$&/")+"/"),cl(i,t,n,"",function(c){return c})):i!=null&&(Dm(i)&&(i=T5(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(_v,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+$d(o,l);a+=cl(o,t,n,s,i)}else if(s=E5(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+$d(o,l++),a+=cl(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(ts(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Ts(e,t,n){if(e==null)return e;var r=[],i=0;return cl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function O5(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var FS={current:null};function nr(){var e=FS.current;if(e===null)throw Error(ts(321));return e}var j5={ReactCurrentDispatcher:FS,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Im,IsSomeRendererActing:{current:!1},assign:jm};le.Children={map:Ts,forEach:function(e,t,n){Ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ts(e,function(){t++}),t},toArray:function(e){return Ts(e,function(t){return t})||[]},only:function(e){if(!Dm(e))throw Error(ts(143));return e}};le.Component=wo;le.PureComponent=$m;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j5;le.cloneElement=function(e,t,n){if(e==null)throw Error(ts(267,e));var r=jm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Im.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)LS.call(t,s)&&!AS.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:bo,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:PS,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:TS,_context:e},e.Consumer=e};le.createElement=RS;le.createFactory=function(e){var t=RS.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:OS,render:e}};le.isValidElement=Dm;le.lazy=function(e){return{$$typeof:$S,_payload:{_status:-1,_result:e},_init:O5}};le.memo=function(e,t){return{$$typeof:jS,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return nr().useCallback(e,t)};le.useContext=function(e,t){return nr().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return nr().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return nr().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return nr().useLayoutEffect(e,t)};le.useMemo=function(e,t){return nr().useMemo(e,t)};le.useReducer=function(e,t,n){return nr().useReducer(e,t,n)};le.useRef=function(e){return nr().useRef(e)};le.useState=function(e){return nr().useState(e)};le.version="17.0.2";kS.exports=le;var $5=kS.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M5=$5,zS=60103;es.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var kv=Symbol.for;zS=kv("react.element"),es.Fragment=kv("react.fragment")}var I5=M5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D5=Object.prototype.hasOwnProperty,L5={key:!0,ref:!0,__self:!0,__source:!0};function NS(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)D5.call(t,r)&&!L5.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:zS,type:e,key:o,ref:a,props:i,_owner:I5.current}}es.jsx=NS;es.jsxs=NS;_S.exports=es;var It=_S.exports,BS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(BS);var Dt=BS.exports;const A5={"lds-circle":"_lds-circle_qlxhy_1"},R5=Object.freeze(Object.defineProperty({__proto__:null,default:A5},Symbol.toStringTag,{value:"Module"})),F5=$t(R5);var VS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fu,"__esModule",{value:!0});fu.Circle=void 0;const z5=It,N5=VS(Dt),B5=VS(F5);function V5({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,z5.jsx)("div",{className:(0,N5.default)(B5.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}fu.Circle=V5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=fu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(CS);var US={},pu={};const U5={"lds-default":"_lds-default_wt1n8_1"},W5=Object.freeze(Object.defineProperty({__proto__:null,default:U5},Symbol.toStringTag,{value:"Module"})),H5=$t(W5);var WS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pu,"__esModule",{value:!0});pu.Default=void 0;const Ev=It,G5=WS(Dt),q5=WS(H5);function Y5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,Ev.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,Ev.jsx)("div",{className:(0,G5.default)(q5.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}pu.Default=Y5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=pu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(US);var HS={},hu={};const X5={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},K5=Object.freeze(Object.defineProperty({__proto__:null,default:X5},Symbol.toStringTag,{value:"Module"})),Q5=$t(K5);var GS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hu,"__esModule",{value:!0});hu.DualRing=void 0;const Tv=It,Pv=GS(Dt),Ov=GS(Q5);function Z5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Tv.jsx)("div",{className:(0,Pv.default)(Ov.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,Tv.jsx)("div",{className:(0,Pv.default)(Ov.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}hu.DualRing=Z5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=hu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(HS);var qS={},mu={};const J5={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},eM=Object.freeze(Object.defineProperty({__proto__:null,default:J5},Symbol.toStringTag,{value:"Module"})),tM=$t(eM);var YS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mu,"__esModule",{value:!0});mu.Ellipsis=void 0;const jv=It,nM=YS(Dt),rM=YS(tM);function iM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,jv.jsx)("div",{style:{background:`${e}`}},l));return(0,jv.jsx)("div",{className:(0,nM.default)(rM.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}mu.Ellipsis=iM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=mu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(qS);var XS={},gu={};const oM={"lds-facebook":"_lds-facebook_1ts9g_1"},aM=Object.freeze(Object.defineProperty({__proto__:null,default:oM},Symbol.toStringTag,{value:"Module"})),sM=$t(aM);var KS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gu,"__esModule",{value:!0});gu.Facebook=void 0;const $v=It,lM=KS(Dt),cM=KS(sM);function uM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,$v.jsx)("div",{style:{background:`${e}`}},l));return(0,$v.jsx)("div",{className:(0,lM.default)(cM.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}gu.Facebook=uM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=gu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(XS);var QS={},vu={};const dM={"lds-grid":"_lds-grid_1ftub_1"},fM=Object.freeze(Object.defineProperty({__proto__:null,default:dM},Symbol.toStringTag,{value:"Module"})),pM=$t(fM);var ZS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vu,"__esModule",{value:!0});vu.Grid=void 0;const Mv=It,hM=ZS(Dt),mM=ZS(pM);function gM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,Mv.jsx)("div",{style:{background:`${e}`}},l));return(0,Mv.jsx)("div",{className:(0,hM.default)(mM.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}vu.Grid=gM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=vu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(QS);var JS={},yu={};const vM={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},yM=Object.freeze(Object.defineProperty({__proto__:null,default:vM},Symbol.toStringTag,{value:"Module"})),xM=$t(yM);var e2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yu,"__esModule",{value:!0});yu.Heart=void 0;const Ps=It,Md=e2(Dt),Id=e2(xM);function bM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Ps.jsx)("div",{className:(0,Md.default)(Id.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,Ps.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,Ps.jsx)("div",{className:(0,Md.default)(Id.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,Ps.jsx)("div",{className:(0,Md.default)(Id.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}yu.Heart=bM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=yu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(JS);var t2={},xu={};const wM={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},SM=Object.freeze(Object.defineProperty({__proto__:null,default:wM},Symbol.toStringTag,{value:"Module"})),CM=$t(SM);var n2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xu,"__esModule",{value:!0});xu.Hourglass=void 0;const Iv=It,Dv=n2(Dt),Lv=n2(CM);function _M({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,Iv.jsx)("div",{className:(0,Dv.default)(Lv.default["lds-hourglass"],n),style:{...r},children:(0,Iv.jsx)("div",{className:(0,Dv.default)(Lv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}xu.Hourglass=_M;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=xu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(t2);var r2={},bu={};const i2="_center_1rufi_10",o2="_spin_1rufi_1",kM={"lds-orbitals":"_lds-orbitals_1rufi_1",center:i2,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:o2},EM=Object.freeze(Object.defineProperty({__proto__:null,center:i2,default:kM,spin:o2},Symbol.toStringTag,{value:"Module"})),TM=$t(EM);var a2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bu,"__esModule",{value:!0});bu.Orbitals=void 0;const ot=It,ft=a2(Dt),Ce=a2(TM);function PM({color:e="#7f58af",className:t,style:n}){return(0,ot.jsxs)("div",{className:(0,ft.default)(Ce.default["lds-orbitals"],t),style:{...n},children:[(0,ot.jsx)("div",{className:Ce.default.center,style:{background:e}}),(0,ot.jsxs)("div",{className:(0,ft.default)(Ce.default["inner-spin"]),children:[(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-arc"],Ce.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-arc"],Ce.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-arc"],Ce.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-arc"],Ce.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-moon-a"]),style:{background:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-moon-b"]),style:{background:e}})]}),(0,ot.jsxs)("div",{className:(0,ft.default)(Ce.default["outer-spin"]),children:[(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-arc"],Ce.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-arc"],Ce.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-arc"],Ce.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-arc"],Ce.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-moon-a"]),style:{background:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-moon-b"]),style:{background:e}})]})]})}bu.Orbitals=PM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=bu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(r2);var s2={},wu={};const OM={"lds-ring":"_lds-ring_xgxdp_1"},jM=Object.freeze(Object.defineProperty({__proto__:null,default:OM},Symbol.toStringTag,{value:"Module"})),$M=$t(jM);var l2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wu,"__esModule",{value:!0});wu.Ring=void 0;const Av=It,MM=l2(Dt),IM=l2($M);function DM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,Av.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,Av.jsx)("div",{className:(0,MM.default)(IM.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}wu.Ring=DM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=wu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(s2);var c2={},Su={};const LM={"lds-ripple":"_lds-ripple_1lgcf_1"},AM=Object.freeze(Object.defineProperty({__proto__:null,default:LM},Symbol.toStringTag,{value:"Module"})),RM=$t(AM);var u2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Su,"__esModule",{value:!0});Su.Ripple=void 0;const Rv=It,FM=u2(Dt),zM=u2(RM);function NM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,Rv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,Rv.jsx)("div",{className:(0,FM.default)(zM.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}Su.Ripple=NM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=Su;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(c2);var d2={},Cu={};const BM={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},VM=Object.freeze(Object.defineProperty({__proto__:null,default:BM},Symbol.toStringTag,{value:"Module"})),UM=$t(VM);var f2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cu,"__esModule",{value:!0});Cu.Roller=void 0;const Dd=It,Fv=f2(Dt),zv=f2(UM);function WM({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Dd.jsx)("div",{children:(0,Dd.jsx)("div",{className:(0,Fv.default)(zv.default["div-after"]),style:{background:e}})},o));return(0,Dd.jsx)("div",{className:(0,Fv.default)(zv.default["lds-roller"],t),style:{...n},children:r})}Cu.Roller=WM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=Cu;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(d2);var p2={},_u={};const HM={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},GM=Object.freeze(Object.defineProperty({__proto__:null,default:HM},Symbol.toStringTag,{value:"Module"})),qM=$t(GM);var h2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_u,"__esModule",{value:!0});_u.Spinner=void 0;const Ld=It,Nv=h2(Dt),Bv=h2(qM);function YM({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,Ld.jsx)("div",{children:(0,Ld.jsx)("div",{className:(0,Nv.default)(Bv.default["div-after"]),style:{background:e}})},o));return(0,Ld.jsx)("div",{className:(0,Nv.default)(Bv.default["lds-spinner"],t),style:{...n},children:r})}_u.Spinner=YM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=_u;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(p2);var m2={},ku={};const g2="_left_v9vlb_30",v2="_right_v9vlb_33",y2="_anim_v9vlb_37",XM={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:g2,right:v2,anim:y2,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},KM=Object.freeze(Object.defineProperty({__proto__:null,anim:y2,default:XM,left:g2,right:v2},Symbol.toStringTag,{value:"Module"})),QM=$t(KM);var x2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ku,"__esModule",{value:!0});ku.Ouroboro=void 0;const Ro=It,Fo=x2(Dt),zo=x2(QM);function ZM({color:e="#7f58af",style:t,className:n}){return(0,Ro.jsxs)("div",{className:(0,Fo.default)(zo.default["lds-ouroboro"],n),style:{...t},children:[(0,Ro.jsx)("span",{className:(0,Fo.default)(zo.default.left),children:(0,Ro.jsx)("span",{className:(0,Fo.default)(zo.default.anim),style:{background:e}})}),(0,Ro.jsx)("span",{className:(0,Fo.default)(zo.default.right),children:(0,Ro.jsx)("span",{className:(0,Fo.default)(zo.default.anim),style:{background:e}})})]})}ku.Ouroboro=ZM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=ku;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(m2);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=CS;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=US;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=HS;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=qS;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=XS;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=QS;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=JS;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=t2;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const c=r2;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return c.Orbitals}});const u=s2;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return u.Ring}});const f=c2;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return f.Ripple}});const v=d2;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return v.Roller}});const m=p2;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return m.Spinner}});const p=m2;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return p.Ouroboro}})})(SS);const JM=()=>d.jsx(b5,{children:d.jsx(SS.Default,{color:"#6d433da8"})});const eI="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",tI=ZP`
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
  src: url(${eI}) format('truetype');
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
`,nI=C.div`
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
`,rI=C(Te)`
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
`,iI=C.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,oI=C.h3`

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
`,aI=C.a`

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
`,sI=C.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,lI=()=>{const[e,t]=x.useState([]);return x.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),d.jsxs(d.Fragment,{children:[d.jsx(iI,{children:"Каталог"}),d.jsxs(nI,{children:[e.slice(0,7).map(n=>d.jsx(rI,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:d.jsx(oI,{children:n.title})},n.title)),d.jsxs(aI,{href:"catalog",children:[d.jsx("p",{children:"Весь каталог"}),d.jsx(sI,{children:d.jsx(Vc,{size:24})})]})]})]})};function Vv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Lm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Vv(t[r])&&Vv(e[r])&&Object.keys(t[r]).length>0&&Lm(e[r],t[r])})}const b2={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function jn(){const e=typeof document<"u"?document:{};return Lm(e,b2),e}const cI={document:b2,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function wt(){const e=typeof window<"u"?window:{};return Lm(e,cI),e}function uI(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function dI(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function w2(e,t=0){return setTimeout(e,t)}function rc(){return Date.now()}function fI(e){const t=wt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function pI(e,t="x"){const n=wt();let r,i,o;const a=fI(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Os(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function hI(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function At(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!hI(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(Os(t[l])&&Os(r[l])?r[l].__swiper__?t[l]=r[l]:At(t[l],r[l]):!Os(t[l])&&Os(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:At(t[l],r[l])):t[l]=r[l])}}}return t}function xi(e,t,n){e.style.setProperty(t,n)}function S2({swiper:e,targetPosition:t,side:n}){const r=wt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",c=(f,v)=>s==="next"&&f>=v||s==="prev"&&f<=v,u=()=>{a=new Date().getTime(),o===null&&(o=a);const f=Math.max(Math.min((a-o)/l,1),0),v=.5-Math.cos(f*Math.PI)/2;let m=i+v*(t-i);if(c(m,t)&&(m=t),e.wrapperEl.scrollTo({[n]:m}),c(m,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:m})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function En(e,t=""){const n=wt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function mI(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function gI(e,t){const n=wt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=mI(e,t))),r}function ic(e){try{console.warn(e);return}catch{}}function oc(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:uI(t)),n}function vI(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function yI(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function gr(e,t){return wt().getComputedStyle(e,null).getPropertyValue(t)}function ac(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function C2(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Rp(e,t,n){const r=wt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function za(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function _2(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=En(e.el,`.${r[i]}`)[0];o||(o=oc("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const Uv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function xI({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Uv};function i(m){let p;return m&&typeof m=="string"&&e.isElement&&(p=e.el.querySelector(m)||e.hostEl.querySelector(m),p)?p:(m&&(typeof m=="string"&&(p=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&p&&p.length>1&&e.el.querySelectorAll(m).length===1?p=e.el.querySelector(m):p&&p.length===1&&(p=p[0])),m&&!p?m:p)}function o(m,p){const y=e.params.navigation;m=qe(m),m.forEach(w=>{w&&(w.classList[p?"add":"remove"](...y.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=p),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](y.lockClass))})}function a(){const{nextEl:m,prevEl:p}=e.navigation;if(e.params.loop){o(p,!1),o(m,!1);return}o(p,e.isBeginning&&!e.params.rewind),o(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const m=e.params.navigation;if(e.params.navigation=_2(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let p=i(m.nextEl),y=i(m.prevEl);Object.assign(e.navigation,{nextEl:p,prevEl:y}),p=qe(p),y=qe(y);const w=(h,g)=>{if(h){if(m.addIcons&&h.matches(".swiper-button-next,.swiper-button-prev")&&!h.querySelector("svg")){const b=document.createElement("div");za(b,Uv),h.appendChild(b.querySelector("svg")),b.remove()}h.addEventListener("click",g==="next"?s:l)}!e.enabled&&h&&h.classList.add(...m.lockClass.split(" "))};p.forEach(h=>w(h,"next")),y.forEach(h=>w(h,"prev"))}function u(){let{nextEl:m,prevEl:p}=e.navigation;m=qe(m),p=qe(p);const y=(w,h)=>{w.removeEventListener("click",h==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(w=>y(w,"next")),p.forEach(w=>y(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?v():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{u()}),n("enable disable",()=>{let{nextEl:m,prevEl:p}=e.navigation;if(m=qe(m),p=qe(p),e.enabled){a();return}[...m,...p].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),n("click",(m,p)=>{let{nextEl:y,prevEl:w}=e.navigation;y=qe(y),w=qe(w);const h=p.target;let g=w.includes(h)||y.includes(h);if(e.isElement&&!g){const b=p.path||p.composedPath&&p.composedPath();b&&(g=b.find(S=>y.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!g){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===h||e.pagination.el.contains(h)))return;let b;y.length?b=y[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(b=w[0].classList.contains(e.params.navigation.hiddenClass)),r(b===!0?"navigationShow":"navigationHide"),[...y,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const f=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),a()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(e.navigation,{enable:f,disable:v,update:a,init:c,destroy:u})}function No(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function bI({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(h,g){const{bulletActiveClass:b}=e.params.pagination;h&&(h=h[`${g==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${b}-${g}`),h=h[`${g==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${b}-${g}-${g}`)))}function c(h,g,b){if(h=h%b,g=g%b,g===h+1)return"next";if(g===h-1)return"previous"}function u(h){const g=h.target.closest(No(e.params.pagination.bulletClass));if(!g)return;h.preventDefault();const b=ac(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const S=c(e.realIndex,b,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b)}function f(){const h=e.rtl,g=e.params.pagination;if(l())return;let b=e.pagination.el;b=qe(b);let S,k;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,E=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(k=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,k=e.previousSnapIndex):(k=e.previousIndex||0,S=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let $,M,A;if(g.dynamicBullets&&(o=Rp(_[0],e.isHorizontal()?"width":"height",!0),b.forEach(I=>{I.style[e.isHorizontal()?"width":"height"]=`${o*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&k!==void 0&&(a+=S-(k||0),a>g.dynamicMainBullets-1?a=g.dynamicMainBullets-1:a<0&&(a=0)),$=Math.max(S-a,0),M=$+(Math.min(_.length,g.dynamicMainBullets)-1),A=(M+$)/2),_.forEach(I=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(L=>`${g.bulletActiveClass}${L}`)].map(L=>typeof L=="string"&&L.includes(" ")?L.split(" "):L).flat();I.classList.remove(...j)}),b.length>1)_.forEach(I=>{const j=ac(I);j===S?I.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&I.setAttribute("part","bullet"),g.dynamicBullets&&(j>=$&&j<=M&&I.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),j===$&&s(I,"prev"),j===M&&s(I,"next"))});else{const I=_[S];if(I&&I.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&_.forEach((j,L)=>{j.setAttribute("part",L===S?"bullet-active":"bullet")}),g.dynamicBullets){const j=_[$],L=_[M];for(let D=$;D<=M;D+=1)_[D]&&_[D].classList.add(...`${g.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(L,"next")}}if(g.dynamicBullets){const I=Math.min(_.length,g.dynamicMainBullets+4),j=(o*I-o)/2-A*o,L=h?"right":"left";_.forEach(D=>{D.style[e.isHorizontal()?L:"top"]=`${j}px`})}}b.forEach((_,$)=>{if(g.type==="fraction"&&(_.querySelectorAll(No(g.currentClass)).forEach(M=>{M.textContent=g.formatFractionCurrent(S+1)}),_.querySelectorAll(No(g.totalClass)).forEach(M=>{M.textContent=g.formatFractionTotal(E)})),g.type==="progressbar"){let M;g.progressbarOpposite?M=e.isHorizontal()?"vertical":"horizontal":M=e.isHorizontal()?"horizontal":"vertical";const A=(S+1)/E;let I=1,j=1;M==="horizontal"?I=A:j=A,_.querySelectorAll(No(g.progressbarFillClass)).forEach(L=>{L.style.transform=`translate3d(0,0,0) scaleX(${I}) scaleY(${j})`,L.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(za(_,g.renderCustom(e,S+1,E)),$===0&&r("paginationRender",_)):($===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](g.lockClass)})}function v(){const h=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=qe(b);let S="";if(h.type==="bullets"){let k=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&k>g&&(k=g);for(let T=0;T<k;T+=1)h.renderBullet?S+=h.renderBullet.call(e,T,h.bulletClass):S+=`<${h.bulletElement} ${e.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(e,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(e,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach(k=>{h.type!=="custom"&&za(k,S||""),h.type==="bullets"&&e.pagination.bullets.push(...k.querySelectorAll(No(h.bulletClass)))}),h.type!=="custom"&&r("paginationRender",b[0])}function m(){e.params.pagination=_2(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let g;typeof h.el=="string"&&e.isElement&&(g=e.el.querySelector(h.el)),!g&&typeof h.el=="string"&&(g=[...document.querySelectorAll(h.el)]),g||(g=h.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(h.el)],g.length>1&&(g=g.find(b=>C2(b,".swiper")[0]===e.el))),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=qe(g),g.forEach(b=>{h.type==="bullets"&&h.clickable&&b.classList.add(...(h.clickableClass||"").split(" ")),b.classList.add(h.modifierClass+h.type),b.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(b.classList.add(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&b.classList.add(h.progressbarOppositeClass),h.clickable&&b.addEventListener("click",u),e.enabled||b.classList.add(h.lockClass)}))}function p(){const h=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=qe(g),g.forEach(b=>{b.classList.remove(h.hiddenClass),b.classList.remove(h.modifierClass+h.type),b.classList.remove(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(b.classList.remove(...(h.clickableClass||"").split(" ")),b.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(b=>b.classList.remove(...h.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const h=e.params.pagination;let{el:g}=e.pagination;g=qe(g),g.forEach(b=>{b.classList.remove(h.horizontalClass,h.verticalClass),b.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(m(),v(),f())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&f()}),n("snapIndexChange",()=>{f()}),n("snapGridLengthChange",()=>{v(),f()}),n("destroy",()=>{p()}),n("enable disable",()=>{let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{f()}),n("click",(h,g)=>{const b=g.target,S=qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const k=S[0].classList.contains(e.params.pagination.hiddenClass);r(k===!0?"paginationShow":"paginationHide"),S.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),m(),v(),f()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),p()};Object.assign(e.pagination,{enable:y,disable:w,render:v,update:f,init:m,destroy:p})}function wI({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,c,u=new Date().getTime(),f,v,m,p,y,w;function h(R){!e||e.destroyed||!e.wrapperEl||R.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",h),!(w||R.detail&&R.detail.bySwiperTouchMove)&&$())}const g=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?f=!0:f&&(s=c,f=!1);const R=e.autoplay.paused?c:u+s-new Date().getTime();e.autoplay.timeLeft=R,r("autoplayTimeLeft",R,R/l),a=requestAnimationFrame(()=>{g()})},b=()=>{let R;return e.virtual&&e.params.virtual.enabled?R=e.slides.find(O=>O.classList.contains("swiper-slide-active")):R=e.slides[e.activeIndex],R?parseInt(R.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let R=e.params.autoplay.delay;const P=b();return!Number.isNaN(P)&&P>0&&(R=P),R},k=R=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),g();let P=R;typeof P>"u"&&(P=S(),l=P,s=P),c=P;const O=e.params.speed,z=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(O,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,O,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(O,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,O,!0,!0),r("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{k()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{z()},P)):requestAnimationFrame(()=>{z()}),P},T=()=>{u=new Date().getTime(),e.autoplay.running=!0,k(),r("autoplayStart")},E=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},_=(R,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),R||(y=!0);const O=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",h):$()};if(e.autoplay.paused=!0,P){O();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),O())},$=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),y?(y=!1,k(c)):k(),e.autoplay.paused=!1,r("autoplayResume"))},M=()=>{if(e.destroyed||!e.autoplay.running)return;const R=jn();R.visibilityState==="hidden"&&(y=!0,_(!0)),R.visibilityState==="visible"&&$()},A=R=>{R.pointerType==="mouse"&&(y=!0,w=!0,!(e.animating||e.autoplay.paused)&&_(!0))},I=R=>{R.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&$())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",A),e.el.addEventListener("pointerleave",I))},L=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",A),e.el.removeEventListener("pointerleave",I))},D=()=>{jn().addEventListener("visibilitychange",M)},F=()=>{jn().removeEventListener("visibilitychange",M)};n("init",()=>{e.params.autoplay.enabled&&(j(),D(),T())}),n("destroy",()=>{L(),F(),e.autoplay.running&&E()}),n("_freeModeStaticRelease",()=>{(m||y)&&$()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?E():_(!0,!0)}),n("beforeTransitionStart",(R,P,O)=>{e.destroyed||!e.autoplay.running||(O||!e.params.autoplay.disableOnInteraction?_(!0,!0):E())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){E();return}v=!0,m=!1,y=!1,p=setTimeout(()=>{y=!0,m=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(p),clearTimeout(o),e.params.autoplay.disableOnInteraction){m=!1,v=!1;return}m&&e.params.cssMode&&$(),m=!1,v=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=S(),l=S())}),Object.assign(e.autoplay,{start:T,stop:E,pause:_,resume:$})}let Ad;function SI(){const e=wt(),t=jn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function k2(){return Ad||(Ad=SI()),Ad}let Rd;function CI({userAgent:e}={}){const t=k2(),n=wt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),f=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=r==="Win32";let m=r==="MacIntel";const p=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&m&&t.touch&&p.indexOf(`${a}x${l}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),m=!1),s&&!v&&(o.os="android",o.android=!0),(c||f||u)&&(o.os="ios",o.ios=!0),o}function E2(e={}){return Rd||(Rd=CI(e)),Rd}let Fd;function _I(){const e=wt(),t=E2();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,c]=l.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));n=s<16||s===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function T2(){return Fd||(Fd=_I()),Fd}function kI({swiper:e,on:t,emit:n}){const r=wt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(u=>{o=r.requestAnimationFrame(()=>{const{width:f,height:v}=e;let m=f,p=v;u.forEach(({contentBoxSize:y,contentRect:w,target:h})=>{h&&h!==e.el||(m=w?w.width:(y[0]||y).inlineSize,p=w?w.height:(y[0]||y).blockSize)}),(m!==f||p!==v)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function EI({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=wt(),a=(c,u={})=>{const f=o.MutationObserver||o.WebkitMutationObserver,v=new f(m=>{if(e.__preventObserver__)return;if(m.length===1){r("observerUpdate",m[0]);return}const p=function(){r("observerUpdate",m[0])};o.requestAnimationFrame?o.requestAnimationFrame(p):o.setTimeout(p,0)});v.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:e.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),i.push(v)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=C2(e.hostEl);for(let u=0;u<c.length;u+=1)a(c[u])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var TI={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function PI(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(gr(r,"padding-left")||0,10)-parseInt(gr(r,"padding-right")||0,10),n=n-parseInt(gr(r,"padding-top")||0,10)-parseInt(gr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function OI(){const e=this;function t(M,A){return parseFloat(M.getPropertyValue(e.getDirectionLabel(A))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,c=En(i,`.${e.params.slideClass}, swiper-slide`),u=l?e.virtual.slides.length:c.length;let f=[];const v=[],m=[];let p=n.slidesOffsetBefore;typeof p=="function"&&(p=n.slidesOffsetBefore.call(e));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,h=e.slidesGrid.length,g=e.size-p-y;let b=n.spaceBetween,S=-p,k=0,T=0;if(typeof g>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*g:typeof b=="string"&&(b=parseFloat(b)),e.virtualSize=-b-p-y,c.forEach(M=>{o?M.style.marginLeft="":M.style.marginRight="",M.style.marginBottom="",M.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(xi(r,"--swiper-centered-offset-before",""),xi(r,"--swiper-centered-offset-after","")),n.cssMode&&(xi(r,"--swiper-slides-offset-before",`${p}px`),xi(r,"--swiper-slides-offset-after",`${y}px`));const E=n.grid&&n.grid.rows>1&&e.grid;E?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let _;const $=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(M=>typeof n.breakpoints[M].slidesPerView<"u").length>0;for(let M=0;M<u;M+=1){_=0;const A=c[M];if(!(A&&(E&&e.grid.updateSlide(M,A,c),gr(A,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&A&&(n.roundLengths&&(_=Math.floor(_)),A.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){$&&(A.style[e.getDirectionLabel("width")]="");const I=getComputedStyle(A),j=A.style.transform,L=A.style.webkitTransform;if(j&&(A.style.transform="none"),L&&(A.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?Rp(A,"width",!0):Rp(A,"height",!0);else{const D=t(I,"width"),F=t(I,"padding-left"),R=t(I,"padding-right"),P=t(I,"margin-left"),O=t(I,"margin-right"),z=I.getPropertyValue("box-sizing");if(z&&z==="border-box")_=D+P+O;else{const{clientWidth:N,offsetWidth:B}=A;_=D+F+R+P+O+(B-N)}}j&&(A.style.transform=j),L&&(A.style.webkitTransform=L),n.roundLengths&&(_=Math.floor(_))}else _=(g-(n.slidesPerView-1)*b)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),A&&(A.style[e.getDirectionLabel("width")]=`${_}px`);A&&(A.swiperSlideSize=_),m.push(_),n.centeredSlides?(S=S+_/2+k/2+b,k===0&&M!==0&&(S=S-g/2-b),M===0&&(S=S-g/2-b),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),T%n.slidesPerGroup===0&&f.push(S),v.push(S)):(n.roundLengths&&(S=Math.floor(S)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&f.push(S),v.push(S),S=S+_+b),e.virtualSize+=_+b,k=_,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,g)+y,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+b}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),E&&e.grid.updateWrapperSize(_,f),!n.centeredSlides){const M=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,A=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||M);let I=f.length;if(A){let L;if(n.slidesPerView==="auto"){L=1;let D=0;for(let F=m.length-1;F>=0&&(D+=m[F]+(F<m.length-1?b:0),D<=g);F-=1)L=m.length-F}else L=Math.floor(n.slidesPerView);I=Math.max(u-L,0)}const j=[];for(let L=0;L<f.length;L+=1){let D=f[L];n.roundLengths&&(D=Math.floor(D)),A?L<=I&&j.push(D):f[L]<=e.virtualSize-g&&j.push(D)}f=j,Math.floor(e.virtualSize-g)-Math.floor(f[f.length-1])>1&&(A||f.push(e.virtualSize-g))}if(l&&n.loop){const M=m[0]+b;if(n.slidesPerGroup>1){const A=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),I=M*n.slidesPerGroup;for(let j=0;j<A;j+=1)f.push(f[f.length-1]+I)}for(let A=0;A<e.virtual.slidesBefore+e.virtual.slidesAfter;A+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+M),v.push(v[v.length-1]+M),e.virtualSize+=M}if(f.length===0&&(f=[0]),b!==0){const M=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((A,I)=>!n.cssMode||n.loop?!0:I!==c.length-1).forEach(A=>{A.style[M]=`${b}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let M=0;m.forEach(I=>{M+=I+(b||0)}),M-=b;const A=M>g?M-g:0;f=f.map(I=>I<=0?-p:I>A?A+y:I)}if(n.centerInsufficientSlides){let M=0;if(m.forEach(A=>{M+=A+(b||0)}),M-=b,M<g){const A=(g-M)/2;f.forEach((I,j)=>{f[j]=I-A}),v.forEach((I,j)=>{v[j]=I+A})}}if(Object.assign(e,{slides:c,snapGrid:f,slidesGrid:v,slidesSizesGrid:m}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){xi(r,"--swiper-centered-offset-before",`${-f[0]}px`),xi(r,"--swiper-centered-offset-after",`${e.size/2-m[m.length-1]/2}px`);const M=-e.snapGrid[0],A=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(I=>I+M),e.slidesGrid=e.slidesGrid.map(I=>I+A)}if(u!==s&&e.emit("slidesLengthChange"),f.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const M=`${n.containerModifierClass}backface-hidden`,A=e.el.classList.contains(M);u<=n.maxBackfaceHiddenSlides?A||e.el.classList.add(M):A&&e.el.classList.remove(M)}}function jI(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function $I(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Wv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function MI(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const c=r[s];let u=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const f=(a+(n.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+l),v=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+l),m=-(a-u),p=m+t.slidesSizesGrid[s],y=m>=0&&m<=t.size-t.slidesSizesGrid[s],w=m>=0&&m<t.size-1||p>1&&p<=t.size||m<=0&&p>=t.size;w&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s)),Wv(c,w,n.slideVisibleClass),Wv(c,y,n.slideFullyVisibleClass),c.progress=i?-f:f,c.originalProgress=i?-v:v}}function II(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,c=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const u=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;o=u||i<=0,a=f||i>=1,u&&(i=0),f&&(i=1)}if(n.loop){const u=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),v=t.slidesGrid[u],m=t.slidesGrid[f],p=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=v?l=(y-v)/p:l=(y+p-m)/p,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(s&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const zd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function DI(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=f=>En(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let s,c,u;if(o)if(n.loop){let f=i-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${f}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(f=>f.column===i),u=t.find(f=>f.column===i+1),c=t.find(f=>f.column===i-1)):s=t[i];s&&(a||(u=yI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),c=vI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(f=>{zd(f,f===s,n.slideActiveClass),zd(f,f===u,n.slideNextClass),zd(f,f===c,n.slidePrevClass)}),e.emitSlidesClasses()}const ul=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},Nd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Fp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,c)=>a+r+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&Nd(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&Nd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Nd(e,a)};function LI(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function AI(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,c;const u=m=>{let p=m-t.virtual.slidesBefore;return p<0&&(p=t.virtual.slides.length+p),p>=t.virtual.slides.length&&(p-=t.virtual.slides.length),p};if(typeof s>"u"&&(s=LI(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const m=Math.min(i.slidesPerGroupSkip,s);c=m+Math.floor((s-m)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(s);return}const f=t.grid&&i.grid&&i.grid.rows>1;let v;if(t.virtual&&i.virtual.enabled)i.loop?v=u(s):v=s;else if(f){const m=t.slides.find(y=>y.column===s);let p=parseInt(m.getAttribute("data-swiper-slide-index"),10);Number.isNaN(p)&&(p=Math.max(t.slides.indexOf(m),0)),v=Math.floor(p/i.grid.rows)}else if(t.slides[s]){const m=t.slides[s].getAttribute("data-swiper-slide-index");m?v=parseInt(m,10):v=s}else v=s;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:v,previousIndex:o,activeIndex:s}),t.initialized&&Fp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==v&&t.emit("realIndexChange"),t.emit("slideChange"))}function RI(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var FI={updateSize:PI,updateSlides:OI,updateAutoHeight:jI,updateSlidesOffset:$I,updateSlidesProgress:MI,updateProgress:II,updateSlidesClasses:DI,updateActiveIndex:AI,updateClickedSlide:RI};function zI(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=pI(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function NI(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const c=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let u;const f=n.maxTranslate()-n.minTranslate();f===0?u=0:u=(e-n.minTranslate())/f,u!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function BI(){return-this.snapGrid[0]}function VI(){return-this.snapGrid[this.snapGrid.length-1]}function UI(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),c=o.maxTranslate();let u;if(r&&e>s?u=s:r&&e<c?u=c:u=e,o.updateProgress(u),a.cssMode){const f=o.isHorizontal();if(t===0)l[f?"scrollLeft":"scrollTop"]=-u;else{if(!o.support.smoothScroll)return S2({swiper:o,targetPosition:-u,side:f?"left":"top"}),!0;l.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(v){!o||o.destroyed||v.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var WI={getTranslate:zI,setTranslate:NI,minTranslate:BI,maxTranslate:VI,translateTo:UI};function HI(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function P2({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function GI(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),P2({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function qI(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),P2({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var YI={setTransition:HI,transitionStart:GI,transitionEnd:qI};function XI(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:c,previousIndex:u,activeIndex:f,rtlTranslate:v,wrapperEl:m,enabled:p}=o;if(!p&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let w=y+Math.floor((a-y)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const h=-s[w];if(l.normalizeSlideIndex)for(let E=0;E<c.length;E+=1){const _=-Math.floor(h*100),$=Math.floor(c[E]*100),M=Math.floor(c[E+1]*100);typeof c[E+1]<"u"?_>=$&&_<M-(M-$)/2?a=E:_>=$&&_<M&&(a=E+1):_>=$&&(a=E)}if(o.initialized&&a!==f&&(!o.allowSlideNext&&(v?h>o.translate&&h>o.minTranslate():h<o.translate&&h<o.minTranslate())||!o.allowSlidePrev&&h>o.translate&&h>o.maxTranslate()&&(f||0)!==a))return!1;a!==(u||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(h);let g;a>f?g="next":a<f?g="prev":g="reset";const b=o.virtual&&o.params.virtual.enabled;if(!(b&&i)&&(v&&-h===o.translate||!v&&h===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(h),g!=="reset"&&(o.transitionStart(n,g),o.transitionEnd(n,g)),!1;if(l.cssMode){const E=o.isHorizontal(),_=v?h:-h;if(t===0)b&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),b&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[E?"scrollLeft":"scrollTop"]=_})):m[E?"scrollLeft":"scrollTop"]=_,b&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return S2({swiper:o,targetPosition:_,side:E?"left":"top"}),!0;m.scrollTo({[E?"left":"top"]:_,behavior:"smooth"})}return!0}const T=T2().isSafari;return b&&!i&&T&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(h),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,g),t===0?o.transitionEnd(n,g):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(_){!o||o.destroyed||_.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,g))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function KI(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const y=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c,slidesOffsetBefore:u,slidesOffsetAfter:f}=i.params,v=c||!!u||!!f;let m=i.params.slidesPerView;m==="auto"?m=i.slidesPerViewDynamic():(m=Math.ceil(parseFloat(i.params.slidesPerView,10)),v&&m%2===0&&(m=m+1));let p=s-l<m;if(v&&(p=p||l<Math.ceil(m/2)),r&&v&&i.params.slidesPerView!=="auto"&&!o&&(p=!1),p){const y=v?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?l+1:l-s+1,slideRealIndex:y==="next"?i.realIndex:void 0})}if(o){const y=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function QI(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function ZI(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const u=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=l?r.translate:-r.translate;function v(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const m=v(f),p=o.map(g=>v(g)),y=i.freeMode&&i.freeMode.enabled;let w=o[p.indexOf(m)-1];if(typeof w>"u"&&(i.cssMode||y)){let g;o.forEach((b,S)=>{m>=b&&(g=S)}),typeof g<"u"&&(w=y?o[g]:o[g>0?g-1:g])}let h=0;if(typeof w<"u"&&(h=a.indexOf(w),h<0&&(h=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(h=h-r.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),i.rewind&&r.isBeginning){const g=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(g,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(h,e,t,n)}),!0;return r.slideTo(h,e,t,n)}function JI(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function eD(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const c=i.snapGrid[l],u=i.snapGrid[l+1];s-c>(u-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],u=i.snapGrid[l];s-c<=(u-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function tD(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(En(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),w2(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var nD={slideTo:XI,slideToLoop:KI,slideNext:QI,slidePrev:ZI,slideReset:JI,slideToClosest:eD,slideToClickedSlide:tD};function rD(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{En(i,`.${r.slideClass}, swiper-slide`).forEach((p,y)=>{p.setAttribute("data-swiper-slide-index",y)})},a=()=>{const m=En(i,`.${r.slideBlankClass}`);m.forEach(p=>{p.remove()}),m.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),c=n.slides.length%s!==0,u=l&&n.slides.length%r.grid.rows!==0,f=m=>{for(let p=0;p<m;p+=1){const y=n.isElement?oc("swiper-slide",[r.slideBlankClass]):oc("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(y)}};if(c){if(r.loopAddBlankSlides){const m=s-n.slides.length%s;f(m),n.recalcSlides(),n.updateSlides()}else ic("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(u){if(r.loopAddBlankSlides){const m=r.grid.rows-n.slides.length%r.grid.rows;f(m),n.recalcSlides(),n.updateSlides()}else ic("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const v=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:v?void 0:"next",initial:t})}function iD({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:f,slidesEl:v,params:m}=s,{centeredSlides:p,slidesOffsetBefore:y,slidesOffsetAfter:w,initialSlide:h}=m,g=p||!!y||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&m.virtual.enabled){t&&(!g&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):g&&s.snapIndex<m.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=u,s.allowSlideNext=f,s.emit("loopFix");return}let b=m.slidesPerView;b==="auto"?b=s.slidesPerViewDynamic():(b=Math.ceil(parseFloat(m.slidesPerView,10)),g&&b%2===0&&(b=b+1));const S=m.slidesPerGroupAuto?b:m.slidesPerGroup;let k=g?Math.max(S,Math.ceil(b/2)):S;k%S!==0&&(k+=S-k%S),k+=m.loopAdditionalSlides,s.loopedSlides=k;const T=s.grid&&m.grid&&m.grid.rows>1;c.length<b+k||s.params.effect==="cards"&&c.length<b+k*2?ic("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&m.grid.fill==="row"&&ic("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],_=[],$=T?Math.ceil(c.length/m.grid.rows):c.length,M=o&&$-h<b&&!g;let A=M?h:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(c.find(P=>P.classList.contains(m.slideActiveClass))):A=i;const I=n==="next"||!n,j=n==="prev"||!n;let L=0,D=0;const R=(T?c[i].column:i)+(g&&typeof r>"u"?-b/2+.5:0);if(R<k){L=Math.max(k-R,S);for(let P=0;P<k-R;P+=1){const O=P-Math.floor(P/$)*$;if(T){const z=$-O-1;for(let N=c.length-1;N>=0;N-=1)c[N].column===z&&E.push(N)}else E.push($-O-1)}}else if(R+b>$-k){D=Math.max(R-($-k*2),S),M&&(D=Math.max(D,b-$+h+1));for(let P=0;P<D;P+=1){const O=P-Math.floor(P/$)*$;T?c.forEach((z,N)=>{z.column===O&&_.push(N)}):_.push(O)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&c.length<b+k*2&&(_.includes(i)&&_.splice(_.indexOf(i),1),E.includes(i)&&E.splice(E.indexOf(i),1)),j&&E.forEach(P=>{c[P].swiperLoopMoveDOM=!0,v.prepend(c[P]),c[P].swiperLoopMoveDOM=!1}),I&&_.forEach(P=>{c[P].swiperLoopMoveDOM=!0,v.append(c[P]),c[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),m.slidesPerView==="auto"?s.updateSlides():T&&(E.length>0&&j||_.length>0&&I)&&s.slides.forEach((P,O)=>{s.grid.updateSlide(O,P,s.slides)}),m.watchSlidesProgress&&s.updateSlidesOffset(),t){if(E.length>0&&j){if(typeof e>"u"){const P=s.slidesGrid[A],z=s.slidesGrid[A+L]-P;l?s.setTranslate(s.translate-z):(s.slideTo(A+Math.ceil(L),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else if(r){const P=T?E.length/m.grid.rows:E.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&I)if(typeof e>"u"){const P=s.slidesGrid[A],z=s.slidesGrid[A-D]-P;l?s.setTranslate(s.translate-z):(s.slideTo(A-D,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else{const P=T?_.length/m.grid.rows:_.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=u,s.allowSlideNext=f,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(O=>{!O.destroyed&&O.params.loop&&O.loopFix({...P,slideTo:O.params.slidesPerView===m.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===m.slidesPerView?t:!1})}s.emit("loopFix")}function oD(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var aD={loopCreate:rD,loopFix:iD,loopDestroy:oD};function sD(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function lD(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var cD={setGrabCursor:sD,unsetGrabCursor:lD};function uD(e,t=this){function n(r){if(!r||r===jn()||r===wt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Hv(e,t,n){const r=wt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function dD(e){const t=this,n=jn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Hv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!gI(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",u=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&u&&(s=u[0]);const f=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(v?uD(f,s):s.closest(f))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const m=a.currentX,p=a.currentY;if(!Hv(t,r,m))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=m,a.startY=p,i.touchStartTime=rc(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;s.matches(i.focusableElements)&&(y=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function fD(e){const t=jn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].find(T=>T.identifier===r.touchId),!c||c.identifier!==r.touchId)return}else c=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const u=c.pageX,f=c.pageY;if(s.preventedByNestedSwiper){o.startX=u,o.startY=f;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:u,startY:f,currentX:u,currentY:f}),r.touchStartTime=rc());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(f<o.startY&&n.translate<=n.maxTranslate()||f>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(u>o.startX&&-n.translate<=n.maxTranslate()||u<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(u<o.startX&&n.translate<=n.maxTranslate()||u>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=u,o.currentY=f;const v=o.currentX-o.startX,m=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(v**2+m**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:v*v+m*m>=25&&(T=Math.atan2(Math.abs(m),Math.abs(v))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let p=n.isHorizontal()?v:m,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(p=Math.abs(p)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=p,p*=i.touchRatio,a&&(p=-p,y=-y);const w=n.touchesDirection;n.swipeDirection=p>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const h=n.params.loop&&!i.cssMode,g=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(h&&g&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let b;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&h&&g&&Math.abs(p)>=1){Object.assign(o,{startX:u,startY:f,currentX:u,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=p+r.startTranslate;let S=!0,k=i.resistanceRatio;if(i.touchReleaseOnEdges&&(k=0),p>0?(h&&g&&!b&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+p)**k))):p<0&&(h&&g&&!b&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-p)**k))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(p)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function pD(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(k=>k.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:c,enabled:u}=t;if(!u||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=rc(),v=f-n.touchStartTime;if(t.allowClick){const k=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(k&&k[0]||r.target,k),t.emit("tap click",r),v<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=rc(),w2(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let m;if(a.followFinger?m=s?t.translate:-t.translate:m=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:m});return}const p=m>=-t.maxTranslate()&&!t.params.loop;let y=0,w=t.slidesSizesGrid[0];for(let k=0;k<c.length;k+=k<a.slidesPerGroupSkip?1:a.slidesPerGroup){const T=k<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[k+T]<"u"?(p||m>=c[k]&&m<c[k+T])&&(y=k,w=c[k+T]-c[k]):(p||m>=c[k])&&(y=k,w=c[c.length-1]-c[c.length-2])}let h=null,g=null;a.rewind&&(t.isBeginning?g=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));const b=(m-c[y])/w,S=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(v>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?h:y+S):t.slideTo(y)),t.swipeDirection==="prev"&&(b>1-a.longSwipesRatio?t.slideTo(y+S):g!==null&&b<0&&Math.abs(b)>a.longSwipesRatio?t.slideTo(g):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+S):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(h!==null?h:y+S),t.swipeDirection==="prev"&&t.slideTo(g!==null?g:y))}}function Gv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function hD(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function mD(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function gD(e){const t=this;ul(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function vD(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const O2=(e,t)=>{const n=jn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Gv,!0):e[c]("observerUpdate",Gv,!0),i[s]("load",e.onLoad,{capture:!0}))};function yD(){const e=this,{params:t}=e;e.onTouchStart=dD.bind(e),e.onTouchMove=fD.bind(e),e.onTouchEnd=pD.bind(e),e.onDocumentTouchStart=vD.bind(e),t.cssMode&&(e.onScroll=mD.bind(e)),e.onClick=hD.bind(e),e.onLoad=gD.bind(e),O2(e,"on")}function xD(){O2(this,"off")}var bD={attachEvents:yD,detachEvents:xD};const qv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function wD(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=jn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),c=e.getBreakpoint(o,l,s);if(!c||e.currentBreakpoint===c)return;const f=(c in o?o[c]:void 0)||e.originalParams,v=qv(e,r),m=qv(e,f),p=e.params.grabCursor,y=f.grabCursor,w=r.enabled;v&&!m?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!v&&m&&(i.classList.add(`${r.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!y?e.unsetGrabCursor():!p&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(T=>{if(typeof f[T]>"u")return;const E=r[T]&&r[T].enabled,_=f[T]&&f[T].enabled;E&&!_&&e[T].disable(),!E&&_&&e[T].enable()});const h=f.direction&&f.direction!==r.direction,g=r.loop&&(f.slidesPerView!==r.slidesPerView||h),b=r.loop;h&&n&&e.changeDirection(),At(e.params,f);const S=e.params.enabled,k=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",f),n&&(g?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&k?(e.loopCreate(t),e.updateSlides()):b&&!k&&e.loopDestroy()),e.emit("breakpoint",f)}function SD(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=wt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:c}=a[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var CD={setBreakpoint:wD,getBreakpoint:SD};function _D(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function kD(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=_D(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function ED(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var TD={addClasses:kD,removeClasses:ED};function PD(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var OD={checkOverflow:PD},zp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function jD(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){At(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){At(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),At(t,r)}}const Bd={eventsEmitter:TI,update:FI,translate:WI,transition:YI,slide:nD,loop:aD,grabCursor:cD,events:bD,breakpoints:CD,checkOverflow:OD,classes:TD},Vd={};let Am=class Rn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=At({},r),n&&!r.el&&(r.el=n);const i=jn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(c=>{const u=At({},r,{el:c});s.push(new Rn(u))}),s}const o=this;o.__swiper__=!0,o.support=k2(),o.device=E2({userAgent:r.userAgent}),o.browser=T2(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:jD(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=At({},zp,a);return o.params=At({},l,Vd,r),o.originalParams=At({},o.params),o.passedParams=At({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=En(n,`.${r.slideClass}, swiper-slide`),o=ac(i[0]);return ac(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=En(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let f=o[c]?Math.ceil(o[c].swiperSlideSize):0,v;for(let m=c+1;m<o.length;m+=1)o[m]&&!v&&(f+=Math.ceil(o[m].swiperSlideSize),u+=1,f>s&&(v=!0));for(let m=c-1;m>=0;m-=1)o[m]&&!v&&(f+=o[m].swiperSlideSize,u+=1,f>s&&(v=!0))}else if(t==="current")for(let f=c+1;f<o.length;f+=1)(n?a[f]+l[f]-a[c]<s:a[f]-a[c]<s)&&(u+=1);else for(let f=c-1;f>=0;f-=1)a[c]-a[f]<s&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&ul(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):En(r,i())[0])();return!a&&n.params.createElements&&(a=oc("div",n.params.wrapperClass),r.append(a),En(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||gr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||gr(r,"direction")==="rtl"),wrongRTL:gr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?ul(n,o):o.addEventListener("load",a=>{ul(n,a.target)})}),Fp(n),n.initialized=!0,Fp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),dI(r)),r.destroyed=!0),null}static extendDefaults(t){At(Vd,t)}static get extendedDefaults(){return Vd}static get defaults(){return zp}static installModule(t){Rn.prototype.__modules__||(Rn.prototype.__modules__=[]);const n=Rn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Rn.installModule(n)),Rn):(Rn.installModule(t),Rn)}};Object.keys(Bd).forEach(e=>{Object.keys(Bd[e]).forEach(t=>{Am.prototype[t]=Bd[e][t]})});Am.use([kI,EI]);const j2=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function oi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Gi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:oi(t[r])&&oi(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Gi(e[r],t[r]):e[r]=t[r]})}function $2(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function M2(e={}){return e.pagination&&typeof e.pagination.el>"u"}function I2(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function D2(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function $D(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function MD({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:c,pagination:u,navigation:f,scrollbar:v,virtual:m,thumbs:p}=e;let y,w,h,g,b,S,k,T;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(y=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(c.pagination||c.pagination===!1)&&u&&!u.el&&(h=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&v&&!v.el&&(g=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(b=!0);const E=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),c[_].prevEl=void 0,c[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),c[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?S=!0:!c.loop&&n.loop?k=!0:T=!0),s.forEach(_=>{if(oi(c[_])&&oi(n[_]))Object.assign(c[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&E(_);else{const $=n[_];($===!0||$===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?$===!1&&E(_):c[_]=n[_]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&t&&m&&c.virtual.enabled?(m.slides=t,m.update(!0)):r.includes("virtual")&&m&&c.virtual.enabled&&(t&&(m.slides=t),m.update(!0)),r.includes("children")&&t&&c.loop&&(T=!0),y&&p.init()&&p.update(!0),w&&(e.controller.control=c.controller.control),h&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),u.init(),u.render(),u.update()),g&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),v.init(),v.updateSize(),v.setTranslate()),b&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),za(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),za(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(c.navigation.nextEl=i),o&&(c.navigation.prevEl=o),f.init(),f.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||T)&&e.loopDestroy(),(k||T)&&e.loopCreate(),e.update()}function ID(e={},t=!0){const n={on:{}},r={},i={};Gi(n,zp),n._emitClasses=!0,n.init=!1;const o={},a=j2.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?oi(e[s])?(n[s]={},i[s]={},Gi(n[s],e[s]),Gi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function DD({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){$2(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),M2(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),I2(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function LD(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),c=n.map(i);s.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return j2.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(oi(e[s])&&oi(t[s])){const c=Object.keys(e[s]),u=Object.keys(t[s]);c.length!==u.length?a(s):(c.forEach(f=>{e[s][f]!==t[s][f]&&a(s)}),u.forEach(f=>{e[s][f]!==t[s][f]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const AD=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function sc(){return sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sc.apply(this,arguments)}function L2(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function A2(e){const t=[];return K.Children.toArray(e).forEach(n=>{L2(n)?t.push(n):n.props&&n.props.children&&A2(n.props.children).forEach(r=>t.push(r))}),t}function RD(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return K.Children.toArray(e).forEach(r=>{if(L2(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=A2(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function FD(e,t,n){if(!n)return null;const r=u=>{let f=u;return u<0?f=t.length+u:f>=t.length&&(f=f-t.length),f},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let u=l;u<s;u+=1)u>=o&&u<=a&&c.push(t[r(u)]);return c.map((u,f)=>K.cloneElement(u,{swiper:e,style:i,key:u.props.virtualIndex||u.key||`slide-${f}`}))}function ua(e,t){return typeof window>"u"?x.useEffect(e,t):x.useLayoutEffect(e,t)}const Yv=x.createContext(null),zD=x.createContext(null),R2=x.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,c]=x.useState("swiper"),[u,f]=x.useState(null),[v,m]=x.useState(!1),p=x.useRef(!1),y=x.useRef(null),w=x.useRef(null),h=x.useRef(null),g=x.useRef(null),b=x.useRef(null),S=x.useRef(null),k=x.useRef(null),T=x.useRef(null),{params:E,passedParams:_,rest:$,events:M}=ID(o),{slides:A,slots:I}=RD(r),j=()=>{m(!v)};Object.assign(E.on,{_containerClasses(P,O){c(O)}});const L=()=>{Object.assign(E.on,M),l=!0;const P={...E};if(delete P.wrapperClass,w.current=new Am(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=A;const O={cache:!1,slides:A,renderExternal:f,renderExternalUpdate:!1};Gi(w.current.params.virtual,O),Gi(w.current.originalParams.virtual,O)}};y.current||L(),w.current&&w.current.on("_beforeBreakpoint",j);const D=()=>{l||!M||!w.current||Object.keys(M).forEach(P=>{w.current.on(P,M[P])})},F=()=>{!M||!w.current||Object.keys(M).forEach(P=>{w.current.off(P,M[P])})};x.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",j)}),x.useEffect(()=>{!p.current&&w.current&&(w.current.emitSlidesClasses(),p.current=!0)}),ua(()=>{if(a&&(a.current=y.current),!!y.current)return w.current.destroyed&&L(),DD({el:y.current,nextEl:b.current,prevEl:S.current,paginationEl:k.current,scrollbarEl:T.current,swiper:w.current},E),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),ua(()=>{D();const P=LD(_,h.current,A,g.current,O=>O.key);return h.current=_,g.current=A,P.length&&w.current&&!w.current.destroyed&&MD({swiper:w.current,slides:A,passedParams:_,changedParams:P,nextEl:b.current,prevEl:S.current,scrollbarEl:T.current,paginationEl:k.current}),()=>{F()}}),ua(()=>{AD(w.current)},[u]);function R(){return E.virtual?FD(w.current,A,u):A.map((P,O)=>K.cloneElement(P,{swiper:w.current,swiperSlideIndex:O}))}return K.createElement(t,sc({ref:y,className:D2(`${s}${e?` ${e}`:""}`)},$),K.createElement(zD.Provider,{value:w.current},I["container-start"],K.createElement(n,{className:$D(E.wrapperClass)},I["wrapper-start"],R(),I["wrapper-end"]),$2(E)&&K.createElement(K.Fragment,null,K.createElement("div",{ref:S,className:"swiper-button-prev"}),K.createElement("div",{ref:b,className:"swiper-button-next"})),I2(E)&&K.createElement("div",{ref:T,className:"swiper-scrollbar"}),M2(E)&&K.createElement("div",{ref:k,className:"swiper-pagination"}),I["container-end"]))});R2.displayName="Swiper";const F2=x.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},c)=>{const u=x.useRef(null),[f,v]=x.useState("swiper-slide"),[m,p]=x.useState(!1);function y(b,S,k){S===u.current&&v(k)}ua(()=>{if(typeof l<"u"&&(u.current.swiperSlideIndex=l),c&&(c.current=u.current),!(!u.current||!r)){if(r.destroyed){f!=="swiper-slide"&&v("swiper-slide");return}return r.on("_slideClass",y),()=>{r&&r.off("_slideClass",y)}}}),ua(()=>{r&&u.current&&!r.destroyed&&v(r.getSlideClasses(u.current))},[r]);const w={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},h=()=>typeof t=="function"?t(w):t,g=()=>{p(!0)};return K.createElement(e,sc({ref:u,className:D2(`${f}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:g},s),i&&K.createElement(Yv.Provider,{value:w},K.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},h(),o&&!m&&K.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}}))),!i&&K.createElement(Yv.Provider,{value:w},h(),o&&!m&&K.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}})))});F2.displayName="SwiperSlide";const ND=C.section`
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
`,BD=C.div`
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
`,VD=C.div`
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
`,UD=C(Te)`
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
`,WD=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],HD=()=>d.jsx(ND,{children:d.jsx(R2,{modules:[xI,wI,bI],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:WD.map(e=>d.jsx(F2,{children:d.jsx(BD,{bg:e.img,children:d.jsxs(VD,{children:[d.jsx("h1",{children:e.title}),d.jsx("p",{children:e.desc}),d.jsx(UD,{to:e.url,children:e.btn})]})})},e.id))})}),GD=C.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ud=C.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,Wd=C.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Hd=C.div`
  font-size: 14px;
  color: #888;
`,z2=()=>d.jsxs(GD,{children:[d.jsxs(Ud,{children:[d.jsx(Wd,{children:"3000+"}),d.jsx(Hd,{children:"Перевірених деталей"})]}),d.jsxs(Ud,{children:[d.jsx(Wd,{children:"6 років"}),d.jsx(Hd,{children:"Досвіду на ринку"})]}),d.jsxs(Ud,{children:[d.jsx(Wd,{children:"100%"}),d.jsx(Hd,{children:"Контроль якості"})]})]}),qD=Fe.div`
  background:var(--background-color);
`,YD=Fe.div`
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
`;Fe.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;Fe.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const XD=()=>d.jsx(qD,{children:d.jsxs(YD,{children:[d.jsx(HD,{}),d.jsx(rS,{}),d.jsx(lI,{}),d.jsx(z2,{})]})}),KD=C.div`
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
`,QD=C.section`
  background-color:  var(--second-background);
`,ZD=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,JD=C.button`
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
`,e6=C.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,t6=C.button`
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
`;const n6=C.div`
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
`,r6=C.div`
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
`;const i6=C.div`
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
`;const o6=C.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,a6=C.button`
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
`,N2=C.button`
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
`,s6=C.div`
  position: relative;
  display: inline-block;

`,l6=C.div`
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
`,bi=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,c6=C.aside`

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
`,u6=C.h3`
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
`;const d6=C.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,f6=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,p6=C.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,h6=C.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,m6=C.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,g6=C.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Np=C.input.attrs({type:"checkbox"})`
  display: none;
`,v6=C.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Np}:checked + & {
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

  ${Np}:checked + &::after {
    opacity: 1;
  }
`;var Bp={},Rm={},Fm={},So={};Object.defineProperty(So,"__esModule",{value:!0});So.Direction=void 0;var Xv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Xv||(So.Direction=Xv={}));(function(e){var t=te&&te.__spreadArray||function(I,j,L){if(L||arguments.length===2)for(var D=0,F=j.length,R;D<F;D++)(R||!(D in j))&&(R||(R=Array.prototype.slice.call(j,0,D)),R[D]=j[D]);return I.concat(R||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=x,r=So,i=function(I){var j=I.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(I){return I.touches&&I.touches.length||I.changedTouches&&I.changedTouches.length}e.isTouchEvent=o;function a(I,j,L){var D=(j-I)/L,F=8,R=Number(D.toFixed(F));return parseInt(R.toString(),10)===R}e.isStepDivisible=a;function l(I,j,L,D,F,R,P){var O=1e11;if(I=Math.round(I*O)/O,!R){var z=P[j-1],N=P[j+1];if(z&&z>I)return z;if(N&&N<I)return N}if(I>D)return D;if(I<L)return L;var B=Math.floor(I*O-L*O)%Math.floor(F*O),U=Math.floor(I*O-Math.abs(B)),W=B===0?I:U/O,Y=Math.abs(B/O)<F/2?W:W+F,H=(0,e.getStepDecimals)(F);return parseFloat(Y.toFixed(H))}e.normalizeValue=l;function s(I,j,L){return(I-j)/(L-j)}e.relativeValue=s;function c(I){return I===r.Direction.Up||I===r.Direction.Down}e.isVertical=c;function u(I,j,L){if(j>=L)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(L,")"));if(I<j)throw new RangeError("value (".concat(I,") is smaller than min (").concat(j,")"));if(I>L)throw new RangeError("value (".concat(I,") is bigger than max (").concat(L,")"))}e.checkBoundaries=u;function f(I,j,L){return I<j?j:I>L?L:I}e.checkValuesAgainstBoundaries=f;function v(I){if(!(I.length<2)&&!I.slice(1).every(function(j,L){return I[L]<=j}))throw new RangeError("values={[".concat(I,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=v;function m(I){var j=window.getComputedStyle(I);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=m;function p(I){var j=window.getComputedStyle(I);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=p;function y(I,j,L){var D=L?-1:1;I.forEach(function(F,R){return h(F,D*j[R].x,j[R].y)})}e.translateThumbs=y;function w(I,j,L,D){for(var F=0,R=M(I[0],j,L,D),P=1;P<I.length;P++){var O=M(I[P],j,L,D);O<R&&(R=O,F=P)}return F}e.getClosestThumbIndex=w;function h(I,j,L){I.style.transform="translate(".concat(j,"px, ").concat(L,"px)")}e.translate=h;var g=function(I){var j=[],L=null,D=function(){for(var F=[],R=0;R<arguments.length;R++)F[R]=arguments[R];j=F,!L&&(L=requestAnimationFrame(function(){L=null,I.apply(void 0,j)}))};return D};e.schd=g;function b(I,j,L){var D=I.slice(0);return D[j]=L,D}e.replaceAt=b;function S(I){var j=I.values,L=I.colors,D=I.min,F=I.max,R=I.direction,P=R===void 0?r.Direction.Right:R,O=I.rtl,z=O===void 0?!1:O;z&&P===r.Direction.Right?P=r.Direction.Left:z&&r.Direction.Left&&(P=r.Direction.Right);var N=j.slice(0).sort(function(U,W){return U-W}).map(function(U){return(U-D)/(F-D)*100}),B=N.reduce(function(U,W,Y){return"".concat(U,", ").concat(L[Y]," ").concat(W,"%, ").concat(L[Y+1]," ").concat(W,"%")},"");return"linear-gradient(".concat(P,", ").concat(L[0]," 0%").concat(B,", ").concat(L[L.length-1]," 100%)")}e.getTrackBackground=S;function k(){}e.voidFn=k;function T(I){throw new Error("Didn't expect to get here")}e.assertUnreachable=T;var E=function(I,j,L,D,F){F===void 0&&(F=function(P){return P});var R=Math.ceil(t([I],Array.from(I.children),!0).reduce(function(P,O){var z=Math.ceil(O.getBoundingClientRect().width);if(O.innerText&&O.innerText.includes(L)&&O.childElementCount===0){var N=O.cloneNode(!0);N.innerHTML=F(j.toFixed(D)),N.style.visibility="hidden",document.body.appendChild(N),z=Math.ceil(N.getBoundingClientRect().width),document.body.removeChild(N)}return z>P?z:P},I.getBoundingClientRect().width));return R},_=function(I,j,L,D,F,R,P){P===void 0&&(P=function(N){return N});var O=[],z=function(N){var B=E(L[N],D[N],F,R,P),U=j[N].x;j.forEach(function(W,Y){var H=W.x,ee=E(L[Y],D[Y],F,R,P);N!==Y&&(U>=H&&U<=H+ee||U+B>=H&&U+B<=H+ee)&&(O.includes(Y)||(O.push(N),O.push(Y),O=t(t([],O,!0),[N,Y],!1),z(Y)))})};return z(I),Array.from(new Set(O.sort()))},$=function(I,j,L,D,F,R){D===void 0&&(D=.1),F===void 0&&(F=" - "),R===void 0&&(R=function(Y){return Y});var P=(0,e.getStepDecimals)(D),O=(0,n.useState)({}),z=O[0],N=O[1],B=(0,n.useState)(R(j[L].toFixed(P))),U=B[0],W=B[1];return(0,n.useEffect)(function(){if(I){var Y=I.getThumbs();if(Y.length<1)return;var H={},ee=I.getOffsets(),pe=_(L,ee,Y,j,F,P,R),we=R(j[L].toFixed(P));if(pe.length){var ie=pe.reduce(function(St,_o,rs,ko){return St.length?t(t([],St,!0),[ee[ko[rs]].x],!1):[ee[ko[rs]].x]},[]);if(Math.min.apply(Math,ie)===ee[L].x){var Ie=[];pe.forEach(function(St){Ie.push(j[St].toFixed(P))}),we=Array.from(new Set(Ie.sort(function(St,_o){return parseFloat(St)-parseFloat(_o)}))).map(R).join(F);var We=Math.min.apply(Math,ie),He=Math.max.apply(Math,ie),pi=Y[pe[ie.indexOf(He)]].getBoundingClientRect().width;H.left="".concat(Math.abs(We-(He+pi))/2,"px"),H.transform="translate(-50%, 0)"}else H.visibility="hidden"}W(we),N(H)}},[I,j]),[U,z]};e.useThumbOverlap=$;function M(I,j,L,D){var F=I.getBoundingClientRect(),R=F.left,P=F.top,O=F.width,z=F.height;return c(D)?Math.abs(L-(P+z/2)):Math.abs(j-(R+O/2))}var A=function(){var I,j=((I=navigator.userAgentData)===null||I===void 0?void 0:I.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=A})(Fm);var y6=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),x6=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),b6=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),w6=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&x6(t,e,n);return b6(t,e),t},Kv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Rm,"__esModule",{value:!0});var js=w6(x),oe=Fm,ze=So,S6=["ArrowRight","ArrowUp","k","PageUp"],C6=["ArrowLeft","ArrowDown","j","PageDown"],_6=function(e){y6(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=js.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,c=r.trackRef.current;if(!c)return console.warn("No track element found."),[];var u=c.getBoundingClientRect(),f=(0,oe.getPaddingAndBorder)(c);return r.getThumbs().map(function(v,m){var p={x:0,y:0},y=v.getBoundingClientRect(),w=(0,oe.getMargin)(v);switch(o){case ze.Direction.Right:return p.x=(w.left+f.left)*-1,p.y=((y.height-u.height)/2+f.top)*-1,p.x+=u.width*(0,oe.relativeValue)(a[m],l,s)-y.width/2,p;case ze.Direction.Left:return p.x=(w.right+f.right)*-1,p.y=((y.height-u.height)/2+f.top)*-1,p.x+=u.width-u.width*(0,oe.relativeValue)(a[m],l,s)-y.width/2,p;case ze.Direction.Up:return p.x=((y.width-u.width)/2+w.left+f.left)*-1,p.y=-f.left,p.y+=u.height-u.height*(0,oe.relativeValue)(a[m],l,s)-y.height/2,p;case ze.Direction.Down:return p.x=((y.width-u.width)/2+w.left+f.left)*-1,p.y=-f.left,p.y+=u.height*(0,oe.relativeValue)(a[m],l,s)-y.height/2,p;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,c=o.rtl,u=o.direction,f=r.state.isChanged,v=r.getTargetIndex(i.nativeEvent),m=c||u===ze.Direction.Left||u===ze.Direction.Down?-1:1;v!==-1&&(S6.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:v,isChanged:!0}),l((0,oe.replaceAt)(a,v,r.normalizeValue(a[v]+m*(i.key==="PageUp"?s*10:s),v)))):C6.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:v,isChanged:!0}),l((0,oe.replaceAt)(a,v,r.normalizeValue(a[v]-m*(i.key==="PageDown"?s*10:s),v)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){f&&r.fireOnFinalChange()}):f&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,c=r.props,u=c.direction,f=c.min,v=c.max,m=c.onChange,p=c.values,y=c.step,w=c.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var h=r.trackRef.current;if(!h)return null;var g=h.getBoundingClientRect(),b=(0,oe.isVertical)(u)?g.height:g.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],k=o-s[1],T=0;switch(u){case ze.Direction.Right:case ze.Direction.Left:T=S/b*(v-f);break;case ze.Direction.Down:case ze.Direction.Up:T=k/b*(v-f);break;default:(0,oe.assertUnreachable)(u)}if(w&&(T*=-1),Math.abs(T)>=y/2){for(var E=0;E<r.thumbRefs.length;E++){if(p[E]===v&&Math.sign(T)===1||p[E]===f&&Math.sign(T)===-1)return;var _=p[E]+T;_>v?T=v-p[E]:_<f&&(T=f-p[E])}for(var $=p.slice(0),E=0;E<r.thumbRefs.length;E++)$=(0,oe.replaceAt)($,E,r.normalizeValue(p[E]+T,E));r.setState({draggedTrackPos:[i,o]}),m($)}}else{var M=0;switch(u){case ze.Direction.Right:M=(i-g.left)/b*(v-f)+f;break;case ze.Direction.Left:M=(b-(i-g.left))/b*(v-f)+f;break;case ze.Direction.Down:M=(o-g.top)/b*(v-f)+f;break;case ze.Direction.Up:M=(b-(o-g.top))/b*(v-f)+f;break;default:(0,oe.assertUnreachable)(u)}w&&(M=v+f-M),Math.abs(p[l]-M)>=y/2&&m((0,oe.replaceAt)(p,l,r.normalizeValue(M,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,c=a.step,u=a.allowOverlap,f=a.values;return(0,oe.normalizeValue)(i,o,l,s,c,u,f)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=js.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),c=[],u=0;u<r.numOfMarks+1;u++){var f=9999,v=9999;if(r.markRefs[u].current){var m=r.markRefs[u].current.getBoundingClientRect();f=m.height,v=m.width}r.props.direction===ze.Direction.Left||r.props.direction===ze.Direction.Right?c.push([Math.round(o/r.numOfMarks*u+l-v/2),-Math.round((f-a)/2)]):c.push([Math.round(a/r.numOfMarks*u+s-f/2),-Math.round((v-o)/2)])}r.setState({markOffsets:c})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return js.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,c=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),c),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(u){(0,oe.isStepDivisible)(a,u,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,c=s===void 0?function(){return null}:s,u=r.values,f=r.min,v=r.max,m=r.allowOverlap,p=r.disabled,y=this.state,w=y.draggedThumbIndex,h=y.thumbZIndexes,g=y.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":u.length===1&&!p?"pointer":"inherit"},onMouseDown:p?oe.voidFn:this.onMouseDownTrack,onTouchStart:p?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:p,children:Kv(Kv([],g.map(function(b,S,k){return c({props:{style:n.props.direction===ze.Direction.Left||n.props.direction===ze.Direction.Right?{position:"absolute",left:"".concat(b[0],"px"),marginTop:"".concat(b[1],"px")}:{position:"absolute",top:"".concat(b[0],"px"),marginLeft:"".concat(b[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),u.map(function(b,S){var k=n.state.draggedThumbIndex===S;return l({index:S,value:b,isDragged:k,props:{style:{position:"absolute",zIndex:h[S],cursor:p?"inherit":k?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:p?void 0:0,"aria-valuemax":m?v:u[S+1]||v,"aria-valuemin":m?f:u[S-1]||f,"aria-valuenow":b,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:p?oe.voidFn:n.onKeyDown,onKeyUp:p?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:ze.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(js.Component);Rm.default=_6;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Rm);e.Range=n.default;var r=Fm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=So;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Bp);const k6=C.div`
  padding: 20px 0;
`,E6=C.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Qv=C.input`
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
`;const T6=C.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,P6=C.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,B2=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,c]=x.useState([o,a]);x.useEffect(()=>{e&&e.length===2&&(c(e),t&&t(e))},[e,t]);const u=m=>{c(m),t&&t(m)},f=(m,p)=>{const y=p===""?"":Number(p),w=[...s];w[m]=y,u(w)},v=m=>{const p=[...s];m===0?((p[0]===""||p[0]<o)&&(p[0]=o),p[0]>p[1]-50&&(p[0]=p[1]-50)):((p[1]===""||p[1]>a)&&(p[1]=a),p[1]<p[0]+50&&(p[1]=p[0]+50)),u(p)};return d.jsx(d.Fragment,{children:l&&d.jsxs(k6,{children:[d.jsxs(E6,{children:[d.jsx(Qv,{type:"number",value:s[0],min:o,max:s[1],onChange:m=>f(0,m.target.value),onBlur:()=>v(0)}),d.jsx(Qv,{type:"number",value:s[1],min:s[0],max:a,onChange:m=>f(1,m.target.value),onBlur:()=>v(1)})]}),d.jsx(Bp.Range,{values:s,step:50,min:o,max:a,onChange:u,renderTrack:({props:m,children:p})=>d.jsx(T6,{...m,background:Bp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:p}),renderThumb:({props:m})=>d.jsx(P6,{...m})})]})})},O6=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=x.useState([]),[l,s]=x.useState({});x.useEffect(()=>{t&&(async()=>{try{const w=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],h={};w.forEach(b=>{var S;(S=b.attributes)==null||S.forEach(k=>{h[k.label]||(h[k.label]=new Set),h[k.label].add(k.value)})});const g=Object.entries(h).map(([b,S])=>({type:"checkbox",label:b,name:b.toLowerCase(),options:Array.from(S)}));a(g)}catch(p){console.error(p)}})()},[t]);const c=m=>{s(p=>({...p,[m]:!p[m]}))},u=(m,p)=>{r(y=>{const w=y[m]||[];return w.includes(p)?{...y,[m]:w.filter(h=>h!==p)}:{...y,[m]:[...w,p]}})},f=Object.values(n).some(m=>Array.isArray(m)&&m.length>0),v=()=>{f&&r({})};return d.jsxs(c6,{children:[d.jsxs(u6,{children:["Фільтри ",d.jsx(ww,{size:20})]}),(o||[]).map(m=>{var y;const p=!!l[m.name];return d.jsxs(d6,{children:[d.jsxs(f6,{onClick:()=>c(m.name),children:[d.jsx(p6,{children:m.label}),d.jsx(h6,{isOpen:p})]}),d.jsxs(m6,{isOpen:p,children:[m.type==="checkbox"&&((y=m.options)==null?void 0:y.map(w=>{var h;return d.jsxs(g6,{children:[d.jsx(Np,{checked:((h=n[m.name])==null?void 0:h.includes(w))||!1,onChange:()=>u(m.name,w)}),d.jsx(v6,{}),w]},w)})),m.type==="range"&&d.jsx(B2,{onChange:i,childValues:e})]})]},m.name)}),d.jsx(N2,{onClick:v,disabled:!f,children:"Скинути обрані фільтри"})]})},j6=C.aside`
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
`;const $6=C.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,M6=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,I6=C.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,D6=C.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,L6=C.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,A6=C.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Vp=C.input.attrs({type:"checkbox"})`
  display: none;
`,R6=C.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Vp}:checked + & {
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

  ${Vp}:checked + &::after {
    opacity: 1;
  }
`,F6=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=x.useState({}),[l,s]=x.useState([]);x.useEffect(()=>{t&&(async()=>{try{const p=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],y={};p.forEach(h=>{var g;(g=h.attributes)==null||g.forEach(b=>{y[b.label]||(y[b.label]=new Set),y[b.label].add(b.value)})});const w=Object.entries(y).map(([h,g])=>({type:"checkbox",label:h,name:h.toLowerCase(),options:Array.from(g)}));s(w)}catch(v){console.error(v)}})()},[t]);const c=f=>{a(v=>({...v,[f]:!v[f]}))},u=(f,v)=>{r(m=>{const p=m[f]||[];return p.includes(v)?{...m,[f]:p.filter(y=>y!==v)}:{...m,[f]:[...p,v]}})};return d.jsx(j6,{children:(l||[]).map(f=>{var m;const v=!!o[f.name];return d.jsxs($6,{children:[d.jsxs(M6,{onClick:()=>c(f.name),children:[d.jsx(I6,{children:f.label}),d.jsx(D6,{isOpen:v})]}),d.jsxs(L6,{isOpen:v,children:[f.type==="checkbox"&&((m=f.options)==null?void 0:m.map(p=>{var y;return d.jsxs(A6,{children:[d.jsx(Vp,{checked:((y=n[f.name])==null?void 0:y.includes(p))||!1,onChange:()=>u(f.name,p)}),d.jsx(R6,{}),p]},p)})),f.type==="range"&&d.jsx(B2,{onChange:i,childValues:e})]})]},f.name)})})},z6=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:c})=>{const[u,f]=x.useState([]),[v,m]=x.useState(!0),[p,y]=x.useState(1),w=24;let h=u;console.log(u);const g=x.useRef(null);x.useEffect(()=>{const j=L=>{g.current&&!g.current.contains(L.target)&&o(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[o]),x.useEffect(()=>{(async()=>{try{m(!0);const D=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();f(D.data);const F=D.data.map(R=>R.price);if(F.length>0){let R=Math.min(...F),P=Math.max(...F);e([R,P])}}catch(L){console.error("Error fetching products:",L)}finally{m(!1)}})()},[t,e]),x.useEffect(()=>{y(1)},[t,n,r]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[p]);const b=xt(),S=Mt(),k=Ue(j=>j.favorites.items),T=Ue(j=>j.cart.items),E=(j,L)=>{L.stopPropagation();const D=k.some(F=>F.id===(j==null?void 0:j.id));ui(j,D,S,X)};if(Object.keys(n).forEach(j=>{const L=n[j];Array.isArray(L)&&L.length>0&&(h=h.filter(D=>{var R;const F=(R=D.attributes)==null?void 0:R.find(P=>P.label.toLowerCase()===j.toLowerCase());return F&&L.includes(F.value)}))}),r&&r.length===2){const[j,L]=r;console.log(j,L)}const _=x.useMemo(()=>{const j=[...h],L=D=>D.new_price&&D.new_price<D.price?D.new_price:D.price;switch(i){case"name":return j.sort((D,F)=>s==="asc"?D.name.localeCompare(F.name):F.name.localeCompare(D.name));case"price":return j.sort((D,F)=>{const R=L(D),P=L(F);return s==="asc"?R-P:P-R});case"date":return j.sort((D,F)=>s==="asc"?new Date(D.createdAt)-new Date(F.createdAt):new Date(F.createdAt)-new Date(D.createdAt));default:return j}},[i,h,s]),$=p*w,M=$-w,A=_.slice(M,$),I=Math.ceil(h.length/w);return v?d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:d.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):d.jsxs(F4,{children:[d.jsxs(z4,{children:[d.jsx(N4,{children:t}),d.jsxs(Y4,{ref:g,children:[d.jsxs(X4,{onClick:()=>o(j=>!j),children:["Сортування",d.jsx(Bc,{strokeWidth:.9,size:22})]}),a&&d.jsxs(K4,{children:[d.jsx(yi,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),d.jsx(yi,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),d.jsx(yi,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),d.jsx(yi,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),d.jsx(yi,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),d.jsx(yi,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),d.jsx(Ln,{autoClose:1500}),h.length===0?d.jsx(B4,{children:d.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):d.jsx(V4,{children:A.map(j=>{var W,Y;const L=k.some(H=>H.id===j.id),D=j!=null&&j.createdAt?Date.now()-new Date(j.createdAt).getTime()<7*24*60*60*1e3:!1,F=T.find(H=>H.id===j.id),P=(F?F.quantity:0)>=(j.stock||0),O=(j==null?void 0:j.available)??!0,z=j.new_price&&j.new_price<j.price,N=z?j.new_price:j.price,B=z?Math.round((j.price-j.new_price)/j.price*100):0,U=(H,ee)=>{if(ee.stopPropagation(),P){X.error("Товар уже у кошику");return}S(Ip({...H,quantity:1})),X.success(`${H.name} додано в кошик!`)};return d.jsxs(U4,{onClick:()=>b(`/product/${j.slug??j.id}`),style:{cursor:"pointer"},children:[d.jsxs($w,{children:[D&&d.jsx(hm,{children:"Новинка"}),!O&&d.jsx(pm,{children:"Бронь"}),d.jsx(W4,{src:((Y=(W=j.images)==null?void 0:W[0])==null?void 0:Y.url)||"/placeholder.jpg",alt:j.name,onError:H=>{H.currentTarget.onerror=null,H.currentTarget.src=ri}})]}),d.jsx(G4,{children:j.name}),d.jsxs(H4,{children:[d.jsx(Iw,{children:d.jsxs(Dw,{children:[d.jsxs(Lw,{$discount:z,children:[N.toLocaleString()," грн"]}),z&&d.jsxs(Aw,{children:[j.price.toLocaleString()," грн"]}),z&&d.jsxs(Rw,{children:["-",B,"%"]})]})}),d.jsxs(Mw,{children:[O&&d.jsx(ql,{onClick:H=>U(j,H),children:d.jsx(vo,{size:24,color:F?"var(--orange-color)":"black",strokeWidth:2})}),d.jsx(ql,{onClick:H=>E(j,H),children:d.jsx(Ya,{size:24,fill:L?"#ff4d4f":"none",color:L?"#ff4d4f":"#000000",strokeWidth:L?1:2})})]})]})]},j.id)})}),h.length>w&&d.jsxs(q4,{children:[d.jsx(Ed,{onClick:()=>y(j=>Math.max(j-1,1)),disabled:p===1,children:"Назад"}),Array.from({length:I},(j,L)=>d.jsx(Ed,{onClick:()=>y(L+1),active:p===L+1,children:L+1},L)),d.jsx(Ed,{onClick:()=>y(j=>Math.min(j+1,I)),disabled:p===I,children:"Вперед"})]})]})},N6=()=>{const[e,t]=x.useState({}),{category:n}=Ry(),[r,i]=x.useState(!1),[o,a]=x.useState(!1),[l,s]=x.useState("date"),[c,u]=x.useState("desc"),[f,v]=x.useState([]),[m,p]=x.useState([0,0]),y=Object.values(e).some(h=>Array.isArray(h)&&h.length>0),w=()=>{y&&t({})};return d.jsxs(QD,{children:[d.jsxs(KD,{children:[d.jsxs(ZD,{children:[d.jsxs(JD,{onClick:()=>i(!0),children:["Фільтр",d.jsx(e6,{children:d.jsx("use",{href:`${hn}#icon-filter`})})]}),d.jsxs(s6,{children:[d.jsxs(t6,{onClick:()=>a(h=>!h),children:["Сортування",d.jsx(Bc,{strokeWidth:.9,size:22})]}),o&&d.jsxs(l6,{children:[d.jsx(bi,{onClick:()=>{s("name"),u("asc"),a(!1)},children:"А-Я"}),d.jsx(bi,{onClick:()=>{s("name"),u("desc"),a(!1)},children:"Я-А"}),d.jsx(bi,{onClick:()=>{s("price"),u("asc"),a(!1)},children:"Ціна ↑"}),d.jsx(bi,{onClick:()=>{s("price"),u("desc"),a(!1)},children:"Ціна ↓"}),d.jsx(bi,{onClick:()=>{s("date"),u("desc"),a(!1)},children:"Спочатку новіші"}),d.jsx(bi,{onClick:()=>{s("date"),u("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),d.jsx(O6,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:f,priceRange:m,setPriceRange:p}),d.jsx(z6,{priceRange:m,values:f,setValues:v,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:c,setSortOrder:u}),r&&d.jsx(n6,{onClick:()=>i(!1),open:r,children:d.jsxs(r6,{onClick:h=>h.stopPropagation(),open:r,children:[d.jsxs(i6,{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(ww,{size:20}),d.jsx("h2",{children:"Фільтри"})]}),d.jsx(Cw,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),d.jsx(F6,{childValues:f,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:m,setPriceRange:p}),d.jsxs(o6,{children:[d.jsx(N2,{onClick:w,disabled:!y,children:"Скинути обрані фільтри"}),d.jsx(a6,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},Zv=C.div`
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
`,B6=C.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,V6=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,U6=C.div``;C.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const W6=C.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,H6=C.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,G6=C.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,q6=C.div``,Y6=C.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,X6=C.p`
   font-size: 17px;
  margin-bottom: 10px;
  color: #151414;
    font-family: var(--second-font);

`,K6=C.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,Q6=C.div`
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

`,Z6=C.span`
  color: #27ae60;
  font-size: 17px;
`,J6=C.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,eL=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,Jv=C.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,tL=C.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,nL=C.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,rL=C.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,iL=C.div`
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
`,oL=C.button`
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
`;const e1=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,aL=C.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,t1=C.div`
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
`;const sL=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,n1=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,r1=C.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,Bo=C.button`
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
`,i1=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,o1=C.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,lL=C.button`
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
`,cL=C.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,V2=C.span`

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
`,uL=C.div`
  position: relative;
  display: inline-block;

  &:hover ${V2} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,U2="carousel",W2="controller",dL="navigation",fL="no-scroll",zm="portal",pL="root",H2="toolbar",a1="zoom",Gd="loading",qd="error",Yd="complete",hL="placeholder",mL=e=>`active-slide-${e}`,gL="fullsize",Nm="flex_center",vL="no_scroll",G2="no_scroll_padding",Bm="slide",q2="slide_wrapper",yL="slide_wrapper_interactive",Br="prev",Vr="next",s1="swipe",lo="close",Y2="onPointerDown",X2="onPointerMove",K2="onPointerUp",Q2="onPointerLeave",Z2="onPointerCancel",Vm="onKeyDown",xL="onKeyUp",Um="onWheel",bL="Escape",wL="ArrowLeft",SL="ArrowRight",CL="button",Up="icon",J2="contain",l1="cover",eC="Unknown action type",tC="yarl__";function $n(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${tC}${e}`}function _t(e){return`--${tC}${e}`}function ns(e,t){return`${e}${t?`_${t}`:""}`}function Wm(e){return t=>ns(e,t)}function co(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function _L(e,t,n){return co(e,"{index} of {total}").replace(/\{index}/g,`${Xm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function Hm(...e){return()=>{e.forEach(t=>{t()})}}function rr(e,t,n){return()=>{const r=x.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Gm(){return typeof window<"u"}function qm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function Co(e){return e.type===void 0||e.type==="image"}function Ym(e,t){return e.imageFit===l1||e.imageFit!==J2&&t===l1}function Eu(e){return typeof e=="string"?Number.parseInt(e,10):e}function lc(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=Eu(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function kL(e,t){const n=lc(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function EL(){return(Gm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Xm(e,t){return t>0?(e%t+t)%t:0}function nC(e){return e.length>0}function rC(e,t){return e[Xm(t,e.length)]}function Wp(e,t){return nC(e)?rC(e,t):void 0}function TL(e){return Co(e)?e.src:void 0}function PL(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=x.isValidElement(n)?x.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function OL(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const jL=Number(x.version.split(".")[0])>=19;function $L(e){return{inert:jL?e:e?"":void 0}}function ML(e){e.scrollTop}const Hp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[lo]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:J2,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Ir(e,t){return{name:e,component:t}}function Ge(e,t){return{module:e,children:t}}function iC(e,t,n){return e.module.name===t?n(e):e.children?[Ge(e.module,e.children.flatMap(r=>{var i;return(i=iC(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function wi(e,t,n){return e.flatMap(r=>{var i;return(i=iC(r,t,n))!==null&&i!==void 0?i:[]})}function IL(e,t=[],n=[]){let r=e;const i=m=>{const p=[...r];for(;p.length>0;){const y=p.pop();if((y==null?void 0:y.module.name)===m)return!0;y!=null&&y.children&&p.push(...y.children)}return!1},o=(m,p)=>{if(m===""){r=[Ge(p,r)];return}r=wi(r,m,y=>[Ge(p,[y])])},a=(m,p)=>{r=wi(r,m,y=>[Ge(y.module,[Ge(p,y.children)])])},l=(m,p,y)=>{r=wi(r,m,w=>{var h;return[Ge(w.module,[...y?[Ge(p)]:[],...(h=w.children)!==null&&h!==void 0?h:[],...y?[]:[Ge(p)]])]})},s=(m,p,y)=>{r=wi(r,m,w=>[...y?[Ge(p)]:[],w,...y?[]:[Ge(p)]])},c=m=>{a(W2,m)},u=(m,p)=>{r=wi(r,m,y=>[Ge(p,y.children)])},f=m=>{r=wi(r,m,p=>p.children)},v=m=>{n.push(m)};return t.forEach(m=>{m({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:c,replace:u,remove:f,augment:v})}),{config:r,augmentation:m=>n.reduce((p,y)=>y(p),m)}}const oC=x.createContext(null),aC=rr("useA11yContext","A11yContext",oC);function DL({children:e}){const[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const c=u=>f=>{var v;f.currentTarget.contains(f.relatedTarget)||n(u),(v=u?l:s)===null||v===void 0||v(f)};return{onFocus:c(!0),onBlur:c(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return x.createElement(oC.Provider,{value:o},e)}const sC=x.createContext(null),Tu=rr("useDocument","DocumentContext",sC);function LL({nodeRef:e,children:t}){const n=x.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return x.createElement(sC.Provider,{value:n},t)}const lC=x.createContext(null),Pu=rr("useEvents","EventsContext",lC);function AL({children:e}){const[t]=x.useState({});x.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=x.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(c=>c!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(c=>c(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return x.createElement(lC.Provider,{value:n},e)}const cC=x.createContext(null),en=rr("useLightboxProps","LightboxPropsContext",cC);function RL({children:e,...t}){return x.createElement(cC.Provider,{value:t},e)}const uC=x.createContext(null),Dr=rr("useLightboxState","LightboxStateContext",uC),dC=x.createContext(null),FL=rr("useLightboxDispatch","LightboxDispatchContext",dC);function zL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Xm(i,n.length),a=Wp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Wp(t.slides,t.index)}:e;default:throw new Error(eC)}}function NL({slides:e,index:t,children:n}){const[r,i]=x.useReducer(zL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Wp(e,t)}),[o,a]=x.useState(e),[l,s]=x.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const c=x.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return x.createElement(dC.Provider,{value:i},x.createElement(uC.Provider,{value:c},n))}const fC=x.createContext(null),Ou=rr("useTimeouts","TimeoutsContext",fC);function BL({children:e}){const[t]=x.useState([]);x.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=x.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return x.createElement(fC.Provider,{value:n},e)}const Km=x.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:c,labels:u}=en(),f=co(u,t);return x.createElement("button",{ref:s,type:"button",title:f,"aria-label":f,className:$n(ae(CL),n),onClick:o,style:{...a,...c.button},...l},i?i():x.createElement(r,{className:ae(Up),style:c.icon}))});function VL(e,t){const n=r=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function fi(e,t){return VL(e,x.createElement("g",{fill:"currentColor"},x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const UL=fi("Close",x.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),WL=fi("Previous",x.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),HL=fi("Next",x.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),GL=fi("Loading",x.createElement(x.Fragment,null,Array.from({length:8}).map((e,t,n)=>x.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),qL=fi("Error",x.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Mn=Gm()?x.useLayoutEffect:x.useEffect;function Qm(){const[e,t]=x.useState(!1);return x.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function YL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(Eu);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function c1(e,t){const n=x.useRef(void 0),r=x.useRef(void 0),i=Qm();return Mn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:c,easing:u,onfinish:f}=t(n.current,e.current.getBoundingClientRect(),YL(e.current))||{};if(s&&c){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:c,easing:u})}catch(v){console.error(v)}r.current&&(r.current.onfinish=()=>{r.current=void 0,f==null||f()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function pC(){const e=x.useRef(null),t=x.useRef(void 0),[n,r]=x.useState();return{setContainerRef:x.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=c=>parseFloat(c)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function dl(){const e=x.useRef(void 0),{setTimeout:t,clearTimeout:n}=Ou();return x.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function he(e){const t=x.useRef(e);return Mn(()=>{t.current=e}),x.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function u1(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Gp(e,t){return x.useMemo(()=>e==null&&t==null?null:n=>{u1(e,n),u1(t,n)},[e,t])}function XL(e,t=!1){const n=x.useRef(!1);Mn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=x.useCallback(()=>{n.current=!0},[]),i=x.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Zm(){const[e,t]=x.useState(!1);return Mn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function KL(){const[e]=x.useState({}),t=x.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=x.useMemo(()=>({onPointerDown:i=>t(Y2,i),onPointerMove:i=>t(X2,i),onPointerUp:i=>t(K2,i),onPointerLeave:i=>t(Q2,i),onPointerCancel:i=>t(Z2,i),onKeyDown:i=>t(Vm,i),onKeyUp:i=>t(xL,i),onWheel:i=>t(Um,i)}),[t]),r=x.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function d1(e,t){const n=x.useRef(0),r=dl(),i=he((...o)=>{n.current=Date.now(),e(o)});return x.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Xd=Wm("slide"),Kd=Wm("slide_image");function cc({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:c}){var u,f,v,m,p,y,w,h;const[g,b]=x.useState(Gd),{publish:S}=Pu(),{setTimeout:k}=Ou(),T=x.useRef(null);x.useEffect(()=>{t===0&&S(mL(g))},[t,g,S]);const E=he(B=>{("decode"in B?B.decode():Promise.resolve()).catch(()=>{}).then(()=>{B.parentNode&&(b(Yd),k(()=>{l==null||l(B)},0))})}),_=x.useCallback(B=>{T.current=B,B!=null&&B.complete&&E(B)},[E]),$=x.useCallback(B=>{E(B.currentTarget)},[E]),M=he(()=>{b(qd),s==null||s()}),A=Ym(e,i),I=(B,U)=>Number.isFinite(B)?B:U,j=I(Math.max(...((f=(u=e.srcSet)===null||u===void 0?void 0:u.map(B=>B.width))!==null&&f!==void 0?f:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((v=T.current)===null||v===void 0?void 0:v.naturalWidth)||0),L=I(Math.max(...((p=(m=e.srcSet)===null||m===void 0?void 0:m.map(B=>B.height))!==null&&p!==void 0?p:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((y=T.current)===null||y===void 0?void 0:y.naturalHeight)||0),D=j&&L?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${L}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},F=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((B,U)=>B.width-U.width).map(B=>`${B.src} ${B.width}w`).join(", "),R=()=>r&&!A&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=F&&r&&Gm()?`${Math.round(Math.min(R(),r.width))}px`:void 0,{style:O,className:z,...N}=(typeof o=="function"?o(e):o)||{};return x.createElement(x.Fragment,null,x.createElement("img",{ref:_,onLoad:$,onError:M,onClick:a,draggable:!1,className:$n(ae(Kd()),A&&ae(Kd("cover")),g!==Yd&&ae(Kd("loading")),z),style:{...D,...c,...O},...N,alt:(h=e.alt)!==null&&h!==void 0?h:"",sizes:P,srcSet:F,src:e.src}),g!==Yd&&x.createElement("div",{className:ae(Xd(hL))},g===Gd&&(n!=null&&n.iconLoading?n.iconLoading():x.createElement(GL,{className:$n(ae(Up),ae(Xd(Gd)))})),g===qd&&(n!=null&&n.iconError?n.iconError():x.createElement(qL,{className:$n(ae(Up),ae(Xd(qd)))}))))}const QL=x.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=x.useRef(null),{trackFocusWithin:s}=aC();return x.createElement(LL,{nodeRef:l},x.createElement("div",{ref:Gp(a,l),className:$n(ae("root"),t),...s(r,i),...o},n))});var st;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(st||(st={}));function hC(e,t,n,r,i){x.useEffect(()=>i?()=>{}:Hm(e(Y2,t),e(X2,n),e(K2,r),e(Q2,r),e(Z2,r)),[e,t,n,r,i])}var on;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(on||(on={}));const Qd=30;function ZL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,c,u,f,v,m,p,y,w){const h=x.useRef(0),g=x.useRef([]),b=x.useRef(void 0),S=x.useRef(0),k=x.useRef(on.NONE),T=x.useCallback(j=>{b.current===j.pointerId&&(b.current=void 0,k.current=on.NONE);const L=g.current;L.splice(0,L.length,...L.filter(D=>D.pointerId!==j.pointerId))},[]),E=x.useCallback(j=>{T(j),j.persist(),g.current.push(j)},[T]),_=x.useCallback(j=>g.current.find(({pointerId:L})=>j.pointerId===L),[]),$=he(j=>{E(j)}),M=(j,L)=>f&&j>L||u&&j<-L,A=he(j=>{const L=_(j);if(L)if(b.current===j.pointerId){const D=Date.now()-S.current,F=h.current;k.current===on.SWIPE?Math.abs(F)>.3*i||Math.abs(F)>5&&D<o?s(F,D):c(F):k.current===on.PULL&&(M(F,2*Qd)?p(F,D):y(F)),h.current=0,k.current=on.NONE}else{const{target:D}=j;t&&D instanceof HTMLElement&&D===L.target&&(D.classList.contains(ae(Bm))||D.classList.contains(ae(q2)))&&w()}T(j)}),I=he(j=>{const L=_(j);if(L){const D=b.current===j.pointerId;if(j.buttons===0){D&&h.current!==0?A(j):T(L);return}const F=j.clientX-L.clientX,R=j.clientY-L.clientY;if(b.current===void 0){const P=O=>{E(j),b.current=j.pointerId,S.current=Date.now(),k.current=O};Math.abs(F)>Math.abs(R)&&Math.abs(F)>Qd&&r(F)?e||(P(on.SWIPE),a()):Math.abs(R)>Math.abs(F)&&M(R,Qd)&&(P(on.PULL),v())}else D&&(k.current===on.SWIPE?(h.current=F,l(F)):k.current===on.PULL&&(h.current=R,m(R)))}});hC(n,$,I,A)}function JL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=x.useRef(null),r=he(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return x.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function eA(e,t,n,r,i,o,a,l,s){const c=x.useRef(0),u=x.useRef(0),f=x.useRef(void 0),v=x.useRef(void 0),m=x.useRef(0),p=x.useRef(void 0),y=x.useRef(0),{setTimeout:w,clearTimeout:h}=Ou(),g=x.useCallback(()=>{f.current&&(h(f.current),f.current=void 0)},[h]),b=x.useCallback(()=>{v.current&&(h(v.current),v.current=void 0)},[h]),S=he(()=>{e!==st.SWIPE&&(c.current=0,y.current=0,g(),b())});x.useEffect(S,[e,S]);const k=he(E=>{v.current=void 0,c.current===E&&s(c.current)}),T=he(E=>{if(E.ctrlKey||Math.abs(E.deltaY)>Math.abs(E.deltaX))return;const _=$=>{m.current=$,h(p.current),p.current=$>0?w(()=>{m.current=0,p.current=void 0},300):void 0};if(e===st.NONE){if(Math.abs(E.deltaX)<=1.2*Math.abs(m.current)){_(E.deltaX);return}if(!n(-E.deltaX))return;if(u.current+=E.deltaX,g(),Math.abs(u.current)>30)u.current=0,_(0),y.current=Date.now(),o();else{const $=u.current;f.current=w(()=>{f.current=void 0,$===u.current&&(u.current=0)},i)}}else if(e===st.SWIPE){let $=c.current-E.deltaX;if($=Math.min(Math.abs($),r)*Math.sign($),c.current=$,a($),b(),Math.abs($)>.2*r){_(E.deltaX),l($,Date.now()-y.current);return}v.current=w(()=>k($),2*i)}else _(E.deltaX)});x.useEffect(()=>t(Um,T),[t,T])}const f1=Wm("container"),mC=x.createContext(null),ir=rr("useController","ControllerContext",mC);function tA({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:c,closeOnPullDown:u,preventDefaultWheelX:f,preventDefaultWheelY:v}=o,[m,p]=x.useState(),y=Dr(),w=FL(),[h,g]=x.useState(st.NONE),b=x.useRef(0),S=x.useRef(0),k=x.useRef(1),{registerSensors:T,subscribeSensors:E}=KL(),{subscribe:_,publish:$}=Pu(),M=dl(),A=dl(),I=dl(),{containerRef:j,setContainerRef:L,containerRect:D}=pC(),F=Gp(JL({preventDefaultWheelX:f,preventDefaultWheelY:v}),L),R=x.useRef(null),P=Gp(R,void 0),{getOwnerDocument:O}=Tu(),z=Zm(),N=q=>(z?-1:1)*(typeof q=="number"?q:1),B=he(()=>{var q;return(q=j.current)===null||q===void 0?void 0:q.focus()}),U=he(()=>t),W=he(()=>y),Y=x.useCallback(q=>$(Br,q),[$]),H=x.useCallback(q=>$(Vr,q),[$]),ee=x.useCallback(()=>$(lo),[$]),pe=q=>!(r.finite&&(N(q)>0&&y.currentIndex===0||N(q)<0&&y.currentIndex===y.slides.length-1)),we=q=>{var Se;b.current=q,(Se=j.current)===null||Se===void 0||Se.style.setProperty(_t("swipe_offset"),`${Math.round(q)}px`)},ie=q=>{var Se,dt;S.current=q,k.current=(()=>{const Eo=(()=>u&&q>0?q:c&&q<0?-q:0)();return Math.min(Math.max(qm(1-Eo/60*(1-.5),2),.5),1)})(),(Se=j.current)===null||Se===void 0||Se.style.setProperty(_t("pull_offset"),`${Math.round(q)}px`),(dt=j.current)===null||dt===void 0||dt.style.setProperty(_t("pull_opacity"),`${k.current}`)},{prepareAnimation:Ie}=c1(R,(q,Se,dt)=>{if(R.current&&D)return{keyframes:[{transform:`translate(0, ${q.rect.y-Se.y+dt.y}px)`,opacity:q.opacity},{transform:"translate(0, 0)",opacity:1}],duration:q.duration,easing:i.easing.fade}}),We=(q,Se)=>{if(c||u){ie(q);let dt=0;R.current&&(dt=i.fade*(Se?2:1),Ie({rect:R.current.getBoundingClientRect(),opacity:k.current,duration:dt})),I(()=>{ie(0),g(st.NONE)},dt),g(st.ANIMATION),Se||ee()}},{prepareAnimation:He,isAnimationPlaying:pi}=c1(R,(q,Se,dt)=>{var yn;if(R.current&&D&&(!((yn=y.animation)===null||yn===void 0)&&yn.duration)){const Gt=lc(r.spacing),Eo=(Gt.percent?Gt.percent*D.width/100:Gt.pixel)||0;return{keyframes:[{transform:`translate(${N(y.globalIndex-q.index)*(D.width+Eo)+q.rect.x-Se.x+dt.x}px, 0)`},{transform:"translate(0, 0)"}],duration:y.animation.duration,easing:y.animation.easing}}}),St=he(q=>{var Se,dt;const yn=q.offset||0,Gt=yn?i.swipe:(Se=i.navigation)!==null&&Se!==void 0?Se:i.swipe,Eo=!yn&&!pi()?i.easing.navigation:i.easing.swipe;let{direction:is}=q;const os=(dt=q.count)!==null&&dt!==void 0?dt:1;let Nu=st.ANIMATION,xn=Gt*os;if(!is){const To=D==null?void 0:D.width,hg=q.duration||0,Vu=To?Gt/To*Math.abs(yn):Gt;os!==0?(hg<Vu?xn=xn/Vu*Math.max(hg,Vu/5):To&&(xn=Gt/To*(To-Math.abs(yn))),is=N(yn)>0?Br:Vr):xn=Gt/2}let Bu=0;is===Br?pe(N(1))?Bu=-os:(Nu=st.NONE,xn=Gt):is===Vr&&(pe(N(-1))?Bu=os:(Nu=st.NONE,xn=Gt)),xn=Math.round(xn),A(()=>{we(0),g(st.NONE)},xn),R.current&&He({rect:R.current.getBoundingClientRect(),index:y.globalIndex}),g(Nu),$(s1,{type:"swipe",increment:Bu,duration:xn,easing:Eo})});x.useEffect(()=>{var q,Se;!((q=y.animation)===null||q===void 0)&&q.increment&&(!((Se=y.animation)===null||Se===void 0)&&Se.duration)&&M(()=>w({type:"swipe",increment:0}),y.animation.duration)},[y.animation,w,M]);const _o=[E,pe,(D==null?void 0:D.width)||0,i.swipe,()=>g(st.SWIPE),q=>we(q),(q,Se)=>St({offset:q,duration:Se,count:1}),q=>St({offset:q,count:0})],rs=[()=>{u&&g(st.PULL)},q=>ie(q),q=>We(q),q=>We(q,!0)];ZL(o,..._o,c,u,...rs,ee),eA(h,..._o);const ko=he(()=>{o.focus&&O().querySelector(`.${ae(zm)} .${ae(f1())}`)&&B()});x.useEffect(ko,[ko]);const pg=he(()=>{var q;(q=a.view)===null||q===void 0||q.call(a,{index:y.currentIndex})});x.useEffect(pg,[y.globalIndex,pg]),x.useEffect(()=>Hm(_(Br,q=>St({direction:Br,...q})),_(Vr,q=>St({direction:Vr,...q})),_(s1,q=>w(q))),[_,St,w]);const S_=x.useMemo(()=>({prev:Y,next:H,close:ee,focus:B,slideRect:D?kL(D,r.padding):{width:0,height:0},containerRect:D||{width:0,height:0},subscribeSensors:E,containerRef:j,setCarouselRef:P,toolbarWidth:m,setToolbarWidth:p}),[Y,H,ee,B,E,D,j,P,m,p,r.padding]);return x.useImperativeHandle(o.ref,()=>({prev:Y,next:H,close:ee,focus:B,getLightboxProps:U,getLightboxState:W}),[Y,H,ee,B,U,W]),x.createElement("div",{ref:F,className:$n(ae(f1()),ae(Nm)),style:{...h===st.SWIPE?{[_t("swipe_offset")]:`${Math.round(b.current)}px`}:null,...h===st.PULL?{[_t("pull_offset")]:`${Math.round(S.current)}px`,[_t("pull_opacity")]:`${k.current}`}:null,...o.touchAction!=="none"?{[_t("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...T},D&&x.createElement(mC.Provider,{value:S_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const nA=Ir(W2,tA);function Lr(e){return ns(U2,e)}function p1(e){return ns(Bm,e)}function rA({slide:e,offset:t}){const n=x.useRef(null),{currentIndex:r,slides:i}=Dr(),{slideRect:o,focus:a}=ir(),{render:l,carousel:{imageFit:s,imageProps:c},on:{click:u},styles:{slide:f},labels:v}=en(),{getOwnerDocument:m}=Tu(),p=t!==0;x.useEffect(()=>{var w;p&&(!((w=n.current)===null||w===void 0)&&w.contains(m().activeElement))&&a()},[p,a,m]);const y=()=>{var w,h,g,b;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&Co(e)&&(S=x.createElement(cc,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:c,onClick:p?void 0:()=>u==null?void 0:u({index:r})})),S?x.createElement(x.Fragment,null,(h=l.slideHeader)===null||h===void 0?void 0:h.call(l,{slide:e}),((g=l.slideContainer)!==null&&g!==void 0?g:({children:k})=>k)({slide:e,children:S}),(b=l.slideFooter)===null||b===void 0?void 0:b.call(l,{slide:e})):null};return x.createElement("div",{ref:n,className:$n(ae(p1()),!p&&ae(p1("current")),ae(Nm)),...$L(p),style:f,role:"group","aria-roledescription":co(v,"Slide"),"aria-label":_L(v,i,r+t)},y())}function iA(){const e=en().styles.slide;return x.createElement("div",{className:ae(Bm),style:e})}function oA({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Dr(),{setCarouselRef:o}=ir(),{autoPlaying:a,focusWithin:l}=aC(),s=lc(e.spacing),c=lc(e.padding),u=OL(e,n,1),f=[];if(nC(n))for(let v=r-u;v<=r+u;v+=1){const m=rC(n,v),p=i-r+v,y=e.finite&&(v<0||v>n.length-1);f.push(y?{key:p}:{key:[`${p}`,TL(m)].filter(Boolean).join("|"),offset:v-r,slide:m})}return x.createElement("div",{ref:o,className:$n(ae(Lr()),f.length>0&&ae(Lr("with_slides"))),style:{[`${_t(Lr("slides_count"))}`]:f.length,[`${_t(Lr("spacing_px"))}`]:s.pixel||0,[`${_t(Lr("spacing_percent"))}`]:s.percent||0,[`${_t(Lr("padding_px"))}`]:c.pixel||0,[`${_t(Lr("padding_percent"))}`]:c.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":co(t,"Carousel"),"aria-label":co(t,"Photo gallery")},f.map(({key:v,slide:m,offset:p})=>m?x.createElement(rA,{key:v,slide:m,offset:p}):x.createElement(iA,{key:v})))}const aA=Ir(U2,oA);function gC(){const{carousel:e}=en(),{slides:t,currentIndex:n}=Dr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function sA(e){var t;const n=Zm(),{publish:r}=Pu(),{animation:i}=en(),{prevDisabled:o,nextDisabled:a}=gC(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=d1(()=>r(Br),l),c=d1(()=>r(Vr),l),u=he(f=>{switch(f.key){case bL:r(lo);break;case wL:(n?a:o)||(n?c:s)();break;case SL:(n?o:a)||(n?s:c)();break}});x.useEffect(()=>e(Vm,u),[e,u])}function h1({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return x.createElement(Km,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...XL(ir().focus,o)})}function lA({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=ir(),{prevDisabled:s,nextDisabled:c}=gC();return sA(l),x.createElement(x.Fragment,null,e?e():x.createElement(h1,{label:"Previous",action:Br,icon:WL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():x.createElement(h1,{label:"Next",action:Vr,icon:HL,renderIcon:r,style:i.navigationNext,disabled:c,onClick:a}))}const cA=Ir(dL,lA),m1=ae(vL),uA=ae(G2);function dA(e){return"style"in e}function g1(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(Eu(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function fA({noScroll:{disabled:e},children:t}){const n=Zm(),{getOwnerDocument:r,getOwnerWindow:i}=Tu();return x.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),c=Math.round(a.innerWidth-s.clientWidth);if(c>0){o.push(g1(l,c,n));const u=l.getElementsByTagName("*");for(let f=0;f<u.length;f+=1){const v=u[f];dA(v)&&a.getComputedStyle(v).getPropertyValue("position")==="fixed"&&!v.classList.contains(uA)&&o.push(g1(v,c,n))}}return l.classList.add(m1),()=>{l.classList.remove(m1),o.forEach(u=>u())}},[n,e,r,i]),x.createElement(x.Fragment,null,t)}const pA=Ir(fL,fA);function v1(e){return ns(zm,e)}function y1(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function hA({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,c]=x.useState(!1),[u,f]=x.useState(!1),v=x.useRef([]),m=x.useRef(null),{setTimeout:p}=Ou(),{subscribe:y}=Pu(),h=Qm()?0:t.fade;x.useEffect(()=>(c(!0),()=>{c(!1),f(!1)}),[]);const g=he(()=>{v.current.forEach(T=>T()),v.current=[]}),b=he(()=>{var T;f(!1),g(),(T=i.exiting)===null||T===void 0||T.call(i),p(()=>{var E;(E=i.exited)===null||E===void 0||E.call(i),a()},h)});x.useEffect(()=>y(lo,b),[y,b]);const S=he(T=>{var E,_,$;ML(T),f(!0),(E=i.entering)===null||E===void 0||E.call(i);const M=($=(_=T.parentNode)===null||_===void 0?void 0:_.children)!==null&&$!==void 0?$:[];for(let A=0;A<M.length;A+=1){const I=M[A];["TEMPLATE","SCRIPT","STYLE"].indexOf(I.tagName)===-1&&I!==T&&(v.current.push(y1(I,"inert","")),v.current.push(y1(I,"aria-hidden","true")))}v.current.push(()=>{var A,I;(I=(A=m.current)===null||A===void 0?void 0:A.focus)===null||I===void 0||I.call(A)}),p(()=>{var A;(A=i.entered)===null||A===void 0||A.call(i)},h)}),k=x.useCallback(T=>{T?S(T):g()},[S,g]);return s?Lc.createPortal(x.createElement(QL,{ref:k,className:$n(r,ae(v1()),ae(G2),u&&ae(v1("open"))),"aria-modal":!0,role:"dialog","aria-label":co(l,"Lightbox"),style:{...t.fade!==Hp.animation.fade?{[_t("fade_animation_duration")]:`${h}ms`}:null,...t.easing.fade!==Hp.animation.easing.fade?{[_t("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:T=>{m.current||(m.current=T.relatedTarget)}},e),o.root||document.body):null}const mA=Ir(zm,hA);function gA({children:e}){return x.createElement(x.Fragment,null,e)}const vA=Ir(pL,gA);function yA(e){return ns(H2,e)}function xA({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=ir(),{setContainerRef:a,containerRect:l}=pC();Mn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():x.createElement(Km,{key:lo,label:"Close",icon:UL,renderIcon:n,onClick:i});return x.createElement("div",{ref:a,style:r.toolbar,className:ae(yA())},e==null?void 0:e.map(c=>c===lo?s():c))}const bA=Ir(H2,xA);function vC(e,t){var n;return x.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>vC(r,t)))}function wA(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function SA({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:c,...u}){const{animation:f,carousel:v,render:m,toolbar:p,controller:y,noScroll:w,on:h,slides:g,index:b,plugins:S,...k}=Hp,{config:T,augmentation:E}=IL([Ge(mA,[Ge(pA,[Ge(nA,[Ge(aA),Ge(bA),Ge(cA)])])])],l||S),_=E({animation:wA(f,t),carousel:{...v,...e},render:{...m,...n},toolbar:{...p,...r},controller:{...y,...i},noScroll:{...w,...o},on:{...h,...a},...k,...u});return _.open?x.createElement(RL,{..._},x.createElement(NL,{slides:s||g,index:Eu(c||b)},x.createElement(BL,null,x.createElement(AL,null,x.createElement(DL,null,vC(Ge(vA,T),_)))))):null}const CA={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function _A(e){return Math.min(Math.max(e,Number.EPSILON),1)}function yC(e){const{minZoom:t,...n}={...CA,...e};return{minZoom:_A(t),...n}}function kA(e,t,n,r){const i=x.useRef(void 0),o=x.useRef(void 0),{zoom:a}=en().animation,l=Qm(),s=he(()=>{var c,u,f;if((c=i.current)===null||c===void 0||c.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(f=(u=r.current).animate)===null||f===void 0?void 0:f.call(u,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(v){console.error(v)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Mn(s,[e,t,n,s]),x.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function EA(e,t){const{on:n}=en(),r=he(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});x.useEffect(r,[e,r])}function ju(){const{zoom:e}=en();return yC(e)}function TA(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Dr(),{imageFit:l}=en().carousel,{maxZoomPixelRatio:s}=ju();if(e&&a){const u={...a,...t};if(Co(u)){const f=Ym(u,l),v=Math.max(...(((n=u.srcSet)===null||n===void 0?void 0:n.map(p=>p.width))||[]).concat(u.width?[u.width]:[])),m=Math.max(...(((r=u.srcSet)===null||r===void 0?void 0:r.map(p=>p.height))||[]).concat(u.height?[u.height]:[]));v>0&&m>0&&e.width>0&&e.height>0&&(o=f?{width:Math.round(Math.min(v,e.width/e.height*m)),height:Math.round(Math.min(m,e.height/e.width*v))}:{width:v,height:m},o={width:o.width*s,height:o.height*s},i=f?{width:Math.min(e.width,o.width,v),height:Math.min(e.height,o.height,m)}:{width:Math.round(Math.min(e.width,e.height/m*v,v)),height:Math.round(Math.min(e.height,e.width/v*m,m))})}}const c=i.width?Math.max(qm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:c}}function x1(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function b1(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function PA(e,t,n,r,i,o,a,l,s){const c=x.useRef([]),u=x.useRef(0),f=x.useRef(void 0),{globalIndex:v}=Dr(),{getOwnerWindow:m}=Tu(),{containerRef:p,subscribeSensors:y}=ir(),{keyboardMoveDistance:w,zoomInMultiplier:h,wheelZoomDistanceFactor:g,scrollToZoom:b,doubleTapDelay:S,doubleClickDelay:k,doubleClickMaxStops:T,pinchZoomDistanceFactor:E,pinchZoomV4:_}=ju(),$=x.useCallback(P=>{if(p.current){const{pageX:O,pageY:z}=P,{scrollX:N,scrollY:B}=m(),{left:U,top:W,width:Y,height:H}=p.current.getBoundingClientRect();return[O-U-N-Y/2,z-W-B-H/2]}return[]},[p,m]),M=he(P=>{const{key:O,metaKey:z,ctrlKey:N}=P,B=z||N,U=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const W=(Y,H)=>{U(),l(Y,H)};O==="ArrowDown"?W(0,w):O==="ArrowUp"?W(0,-w):O==="ArrowLeft"?W(-w,0):O==="ArrowRight"&&W(w,0)}O==="+"||B&&O==="="?(U(),i()):O==="-"||B&&O==="_"?(U(),o()):B&&O==="0"&&(U(),a(1))}),A=he(P=>{if((P.ctrlKey||b)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(b1(e,-P.deltaY,g),!0,...$(P));return}e>1&&(P.stopPropagation(),b||l(P.deltaX,P.deltaY))}),I=x.useCallback(P=>{const O=c.current;O.splice(0,O.length,...O.filter(z=>z.pointerId!==P.pointerId))},[]),j=x.useCallback(P=>{I(P),P.persist(),c.current.push(P)},[I]),L=he(P=>{var O;const z=c.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!((O=s==null?void 0:s.current)===null||O===void 0)&&O.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:N}=P;if(z.length===0&&N-u.current<(P.pointerType==="touch"?S:k)){u.current=0;const B=e>=1?e!==n?e*Math.max(n**(1/T),h):1:e!==t?e/Math.max(t**(-1/T),h):1;a(B,!1,...$(P))}else u.current=N;if(j(P),z.length===2){const B=x1(z[0],z[1]);f.current={previousDistance:B,initialDistance:Math.max(B,1),initialZoom:e}}}),D=he(P=>{const O=c.current,z=O.find(N=>N.pointerId===P.pointerId);if(O.length===2&&f.current){P.stopPropagation(),j(P);const N=x1(O[0],O[1]),B=_?f.current.initialZoom/f.current.initialDistance*N:b1(e,N-f.current.previousDistance,E);a(B,!0,...O.map(U=>$(U)).reduce((U,W)=>W.map((Y,H)=>U[H]+Y/2))),f.current.previousDistance=N;return}e>1&&(P.stopPropagation(),z&&(O.length===1&&l((z.clientX-P.clientX)/e,(z.clientY-P.clientY)/e),j(P)))}),F=x.useCallback(P=>{const O=c.current;O.length===2&&O.find(z=>z.pointerId===P.pointerId)&&(f.current=void 0),I(P)},[I]),R=x.useCallback(()=>{const P=c.current;P.splice(0,P.length),u.current=0,f.current=void 0},[]);hC(y,L,D,F,r),x.useEffect(R,[v,R]),x.useEffect(()=>r?()=>{}:Hm(R,y(Vm,M),y(Um,A)),[r,y,R,M,A])}function OA(e,t,n){const[r,i]=x.useState(1),[o,a]=x.useState(0),[l,s]=x.useState(0),c=kA(r,o,l,n),{currentSlide:u,globalIndex:f}=Dr(),{containerRect:v,slideRect:m}=ir(),{minZoom:p,zoomInMultiplier:y}=ju(),w=u&&Co(u)?u.src:void 0,h=!w||!(n!=null&&n.current);Mn(()=>{i(1),a(0),s(0)},[f,w]);const g=x.useCallback((E,_,$)=>{const M=$||r,A=o-(E||0),I=l-(_||0),j=(e.width*M-m.width)/2/M,L=(e.height*M-m.height)/2/M;a(Math.min(Math.abs(A),Math.max(j,0))*Math.sign(A)),s(Math.min(Math.abs(I),Math.max(L,0))*Math.sign(I))},[r,o,l,m,e.width,e.height]),b=x.useCallback((E,_,$,M)=>{const A=qm(E+.01<t?E-.01>p?E:p:t,5);_||c(),g($?$*(1/r-1/A):0,M?M*(1/r-1/A):0,A),i(A)},[r,p,t,g,c]),S=he(()=>{r>1&&(r>t&&b(t,!0),g())});Mn(S,[v.width,v.height,S]);const k=x.useCallback(()=>{const E=r*y;b(r<1&&E>1?1:E)},[r,y,b]),T=x.useCallback(()=>{const E=r/y;b(r>1&&E<1?1:E)},[r,y,b]);return{zoom:r,offsetX:o,offsetY:l,disabled:h,changeOffsets:g,changeZoom:b,zoomIn:k,zoomOut:T}}const xC=x.createContext(null),Jm=rr("useZoom","ZoomControllerContext",xC);function jA({children:e}){const[t,n]=x.useState(),{slideRect:r}=ir(),{ref:i,minZoom:o}=ju(),{imageRect:a,maxZoom:l}=TA(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:c,offsetY:u,disabled:f,changeZoom:v,changeOffsets:m,zoomIn:p,zoomOut:y}=OA(a,l,t==null?void 0:t.zoomWrapperRef);EA(s,f),PA(s,o,l,f,p,y,v,m,t==null?void 0:t.zoomWrapperRef);const w=x.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:c,offsetY:u,disabled:f,zoomIn:p,zoomOut:y,changeZoom:v}),[s,o,l,c,u,f,p,y,v]);x.useImperativeHandle(i,()=>w,[w]);const h=x.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return x.createElement(xC.Provider,{value:h},e)}const $A=fi("ZoomIn",x.createElement(x.Fragment,null,x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),x.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),MA=fi("ZoomOut",x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),w1=x.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=x.useRef(!1),o=x.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:c,zoomOut:u,disabled:f}=Jm(),{render:v}=en(),m=f||(t?a>=s:a<=l);return x.useEffect(()=>{m&&i.current&&o.current&&n(),m||(i.current=!0)},[m,n]),x.createElement(Km,{ref:r,disabled:m,label:t?"Zoom in":"Zoom out",icon:t?$A:MA,renderIcon:t?v.iconZoomIn:v.iconZoomOut,onClick:t?c:u,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function IA(){const e=x.useRef(null),t=x.useRef(null),{focus:n}=ir(),r=x.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=x.useCallback(()=>r(e),[r]),o=x.useCallback(()=>r(t),[r]);return x.createElement(x.Fragment,null,x.createElement(w1,{zoomIn:!0,ref:e,onLoseFocus:o}),x.createElement(w1,{ref:t,onLoseFocus:i}))}function DA(){const{render:e}=en(),t=Jm();return e.buttonZoom?x.createElement(x.Fragment,null,e.buttonZoom(t)):x.createElement(IA,null)}function LA(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function AA({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(eC)}}function RA(e){var t,n;const[{current:r,preload:i},o]=x.useReducer(AA,{}),{slide:a,rect:l,imageFit:s,render:c,interactive:u}=e,f=a.srcSet.sort((k,T)=>k.width-T.width),v=(t=a.width)!==null&&t!==void 0?t:f[f.length-1].width,m=(n=a.height)!==null&&n!==void 0?n:f[f.length-1].height,p=Ym(a,s),y=Math.max(...f.map(k=>k.width)),w=Math.min((p?Math.max:Math.min)(l.width,v*(l.height/m)),y),h=EL(),g=he(()=>{var k;const T=(k=f.find(E=>E.width>=w*h))!==null&&k!==void 0?k:f[f.length-1];(!r||f.findIndex(E=>E.src===r)<f.findIndex(E=>E===T))&&o({type:"fetch",source:T.src})});Mn(g,[l.width,l.height,h,g]);const b=he(k=>o({type:"done",source:k})),S={WebkitTransform:u?"initial":"translateZ(0)"};return p||Object.assign(S,l.width/l.height<v/m?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),x.createElement(x.Fragment,null,i&&i!==r&&x.createElement(cc,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>b(i),render:{...c,iconLoading:()=>null,iconError:()=>null}}),r&&x.createElement(cc,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function FA({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=x.useState(),l=x.useRef(null),{zoom:s,maxZoom:c,offsetX:u,offsetY:f,setZoomWrapper:v}=Jm(),m=s>1,{carousel:p,on:y}=en(),{currentIndex:w}=Dr();Mn(()=>n===0?(v({zoomWrapperRef:l,imageDimensions:o}),()=>v(void 0)):()=>{},[n,o,v]);let h=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:c});if(!h&&Co(t)){const g={slide:t,offset:n,rect:r,render:e,imageFit:p.imageFit,imageProps:p.imageProps,onClick:n===0?()=>{var b;return(b=y.click)===null||b===void 0?void 0:b.call(y,{index:w})}:void 0};h=LA(t)?x.createElement(RA,{...g,slide:t,interactive:m,rect:n===0?{width:r.width*s,height:r.height*s}:r}):x.createElement(cc,{onLoad:b=>a({width:b.naturalWidth,height:b.naturalHeight}),...g})}return h?x.createElement("div",{ref:l,className:$n(ae(gL),ae(Nm),ae(q2),m&&ae(yL)),style:n===0?{transform:`scale(${s}) translateX(${u}px) translateY(${f}px)`}:void 0},h):null}const zA=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=yC(n);return{zoom:l,toolbar:PL(r,a1,x.createElement(DA,null)),render:{...i,slide:s=>{var c;return Co(s.slide)?x.createElement(FA,{render:i,...s}):(c=i.slide)===null||c===void 0?void 0:c.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Ir(a1,jA))};var bC={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",c="day",u="week",f="month",v="quarter",m="year",p="date",y="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(L){var D=["th","st","nd","rd"],F=L%100;return"["+L+(D[(F-20)%10]||D[F]||D[0])+"]"}},b=function(L,D,F){var R=String(L);return!R||R.length>=D?L:""+Array(D+1-R.length).join(F)+L},S={s:b,z:function(L){var D=-L.utcOffset(),F=Math.abs(D),R=Math.floor(F/60),P=F%60;return(D<=0?"+":"-")+b(R,2,"0")+":"+b(P,2,"0")},m:function L(D,F){if(D.date()<F.date())return-L(F,D);var R=12*(F.year()-D.year())+(F.month()-D.month()),P=D.clone().add(R,f),O=F-P<0,z=D.clone().add(R+(O?-1:1),f);return+(-(R+(F-P)/(O?P-z:z-P))||0)},a:function(L){return L<0?Math.ceil(L)||0:Math.floor(L)},p:function(L){return{M:f,y:m,w:u,d:c,D:p,h:s,m:l,s:a,ms:o,Q:v}[L]||String(L||"").toLowerCase().replace(/s$/,"")},u:function(L){return L===void 0}},k="en",T={};T[k]=g;var E="$isDayjsObject",_=function(L){return L instanceof I||!(!L||!L[E])},$=function L(D,F,R){var P;if(!D)return k;if(typeof D=="string"){var O=D.toLowerCase();T[O]&&(P=O),F&&(T[O]=F,P=O);var z=D.split("-");if(!P&&z.length>1)return L(z[0])}else{var N=D.name;T[N]=D,P=N}return!R&&P&&(k=P),P||!R&&k},M=function(L,D){if(_(L))return L.clone();var F=typeof D=="object"?D:{};return F.date=L,F.args=arguments,new I(F)},A=S;A.l=$,A.i=_,A.w=function(L,D){return M(L,{locale:D.$L,utc:D.$u,x:D.$x,$offset:D.$offset})};var I=function(){function L(F){this.$L=$(F.locale,null,!0),this.parse(F),this.$x=this.$x||F.x||{},this[E]=!0}var D=L.prototype;return D.parse=function(F){this.$d=function(R){var P=R.date,O=R.utc;if(P===null)return new Date(NaN);if(A.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var z=P.match(w);if(z){var N=z[2]-1||0,B=(z[7]||"0").substring(0,3);return O?new Date(Date.UTC(z[1],N,z[3]||1,z[4]||0,z[5]||0,z[6]||0,B)):new Date(z[1],N,z[3]||1,z[4]||0,z[5]||0,z[6]||0,B)}}return new Date(P)}(F),this.init()},D.init=function(){var F=this.$d;this.$y=F.getFullYear(),this.$M=F.getMonth(),this.$D=F.getDate(),this.$W=F.getDay(),this.$H=F.getHours(),this.$m=F.getMinutes(),this.$s=F.getSeconds(),this.$ms=F.getMilliseconds()},D.$utils=function(){return A},D.isValid=function(){return this.$d.toString()!==y},D.isSame=function(F,R){var P=M(F);return this.startOf(R)<=P&&P<=this.endOf(R)},D.isAfter=function(F,R){return M(F)<this.startOf(R)},D.isBefore=function(F,R){return this.endOf(R)<M(F)},D.$g=function(F,R,P){return A.u(F)?this[R]:this.set(P,F)},D.unix=function(){return Math.floor(this.valueOf()/1e3)},D.valueOf=function(){return this.$d.getTime()},D.startOf=function(F,R){var P=this,O=!!A.u(R)||R,z=A.p(F),N=function(we,ie){var Ie=A.w(P.$u?Date.UTC(P.$y,ie,we):new Date(P.$y,ie,we),P);return O?Ie:Ie.endOf(c)},B=function(we,ie){return A.w(P.toDate()[we].apply(P.toDate("s"),(O?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},U=this.$W,W=this.$M,Y=this.$D,H="set"+(this.$u?"UTC":"");switch(z){case m:return O?N(1,0):N(31,11);case f:return O?N(1,W):N(0,W+1);case u:var ee=this.$locale().weekStart||0,pe=(U<ee?U+7:U)-ee;return N(O?Y-pe:Y+(6-pe),W);case c:case p:return B(H+"Hours",0);case s:return B(H+"Minutes",1);case l:return B(H+"Seconds",2);case a:return B(H+"Milliseconds",3);default:return this.clone()}},D.endOf=function(F){return this.startOf(F,!1)},D.$set=function(F,R){var P,O=A.p(F),z="set"+(this.$u?"UTC":""),N=(P={},P[c]=z+"Date",P[p]=z+"Date",P[f]=z+"Month",P[m]=z+"FullYear",P[s]=z+"Hours",P[l]=z+"Minutes",P[a]=z+"Seconds",P[o]=z+"Milliseconds",P)[O],B=O===c?this.$D+(R-this.$W):R;if(O===f||O===m){var U=this.clone().set(p,1);U.$d[N](B),U.init(),this.$d=U.set(p,Math.min(this.$D,U.daysInMonth())).$d}else N&&this.$d[N](B);return this.init(),this},D.set=function(F,R){return this.clone().$set(F,R)},D.get=function(F){return this[A.p(F)]()},D.add=function(F,R){var P,O=this;F=Number(F);var z=A.p(R),N=function(W){var Y=M(O);return A.w(Y.date(Y.date()+Math.round(W*F)),O)};if(z===f)return this.set(f,this.$M+F);if(z===m)return this.set(m,this.$y+F);if(z===c)return N(1);if(z===u)return N(7);var B=(P={},P[l]=r,P[s]=i,P[a]=n,P)[z]||1,U=this.$d.getTime()+F*B;return A.w(U,this)},D.subtract=function(F,R){return this.add(-1*F,R)},D.format=function(F){var R=this,P=this.$locale();if(!this.isValid())return P.invalidDate||y;var O=F||"YYYY-MM-DDTHH:mm:ssZ",z=A.z(this),N=this.$H,B=this.$m,U=this.$M,W=P.weekdays,Y=P.months,H=P.meridiem,ee=function(ie,Ie,We,He){return ie&&(ie[Ie]||ie(R,O))||We[Ie].slice(0,He)},pe=function(ie){return A.s(N%12||12,ie,"0")},we=H||function(ie,Ie,We){var He=ie<12?"AM":"PM";return We?He.toLowerCase():He};return O.replace(h,function(ie,Ie){return Ie||function(We){switch(We){case"YY":return String(R.$y).slice(-2);case"YYYY":return A.s(R.$y,4,"0");case"M":return U+1;case"MM":return A.s(U+1,2,"0");case"MMM":return ee(P.monthsShort,U,Y,3);case"MMMM":return ee(Y,U);case"D":return R.$D;case"DD":return A.s(R.$D,2,"0");case"d":return String(R.$W);case"dd":return ee(P.weekdaysMin,R.$W,W,2);case"ddd":return ee(P.weekdaysShort,R.$W,W,3);case"dddd":return W[R.$W];case"H":return String(N);case"HH":return A.s(N,2,"0");case"h":return pe(1);case"hh":return pe(2);case"a":return we(N,B,!0);case"A":return we(N,B,!1);case"m":return String(B);case"mm":return A.s(B,2,"0");case"s":return String(R.$s);case"ss":return A.s(R.$s,2,"0");case"SSS":return A.s(R.$ms,3,"0");case"Z":return z}return null}(ie)||z.replace(":","")})},D.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},D.diff=function(F,R,P){var O,z=this,N=A.p(R),B=M(F),U=(B.utcOffset()-this.utcOffset())*r,W=this-B,Y=function(){return A.m(z,B)};switch(N){case m:O=Y()/12;break;case f:O=Y();break;case v:O=Y()/3;break;case u:O=(W-U)/6048e5;break;case c:O=(W-U)/864e5;break;case s:O=W/i;break;case l:O=W/r;break;case a:O=W/n;break;default:O=W}return P?O:A.a(O)},D.daysInMonth=function(){return this.endOf(f).$D},D.$locale=function(){return T[this.$L]},D.locale=function(F,R){if(!F)return this.$L;var P=this.clone(),O=$(F,R,!0);return O&&(P.$L=O),P},D.clone=function(){return A.w(this.$d,this)},D.toDate=function(){return new Date(this.valueOf())},D.toJSON=function(){return this.isValid()?this.toISOString():null},D.toISOString=function(){return this.$d.toISOString()},D.toString=function(){return this.$d.toUTCString()},L}(),j=I.prototype;return M.prototype=j,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",c],["$M",f],["$y",m],["$D",p]].forEach(function(L){j[L[1]]=function(D){return this.$g(D,L[0],L[1])}}),M.extend=function(L,D){return L.$i||(L(D,I,M),L.$i=!0),M},M.locale=$,M.isDayjs=_,M.unix=function(L){return M(1e3*L)},M.en=T[k],M.Ls=T,M.p={},M})})(bC);var NA=bC.exports;const S1=Na(NA),BA=C.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;C.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const VA=C.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,UA=C.input`
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
`,WA=C.textarea`
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
`,HA=C.button`
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
`,GA=C.div`
  margin-top: 30px;
`,qA=C.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,YA=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,XA=C.span`
  font-weight: bold;
  color: #333;
`,KA=C.span`
  font-size: 12px;
  color: #999;
`,QA=C.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,ZA=C.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,JA=C.div`
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
`,C1=({productId:e,questions:t})=>{const[n,r]=x.useState(""),[i,o]=x.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(X.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return d.jsxs(BA,{children:[d.jsx(Ln,{autoClose:1500}),d.jsxs(VA,{onSubmit:a,children:[d.jsx(UA,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),d.jsx(WA,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),d.jsx(HA,{children:"Надіслати запитання"})]}),d.jsx(GA,{children:t&&t.length>0?t.map(l=>l.answer?d.jsxs(qA,{children:[d.jsxs(YA,{children:[d.jsx(XA,{children:l.userName||"Гість"}),d.jsx(KA,{children:new Date(l.createdAt).toLocaleDateString()})]}),d.jsx(QA,{children:l.question}),d.jsxs(ZA,{children:[d.jsx(JA,{children:"Адміністратор"}),d.jsx("p",{children:l.answer})]})]},l.id):null):d.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},eR=()=>{var R;const{identifier:e}=Ry(),[t,n]=x.useState([]),[r,i]=x.useState(1),[o,a]=x.useState("description"),[l,s]=x.useState(null),[c,u]=x.useState(!1),[f,v]=x.useState(0),[m,p]=x.useState(!0),y=!isNaN(e),w=t.find(P=>y?String(P.id)===String(e):P.slug===e),h=w?S1().diff(S1(w.createdAt),"day")<7:!1,b=(P=>{const[O,z]=x.useState(!1);return x.useEffect(()=>{const N=window.matchMedia(P),B=()=>z(N.matches);return B(),N.addEventListener("change",B),()=>N.removeEventListener("change",B)},[P]),O})("(min-width: 768px)"),S=Ue(P=>P.cart.items),k=w?S.find(P=>P.id===w.id):null,T=(k==null?void 0:k.quantity)||0;x.useEffect(()=>{(async()=>{try{p(!0);const O=y?`filters[id][$eq]=${e}`:`filters[slug][$eq]=${e}`,N=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${O}&populate=*`)).json();n(N.data)}catch(O){console.error("Error fetching products:",O)}finally{p(!1)}})()},[e,y]);const E=(w==null?void 0:w.available)??!0;x.useEffect(()=>{var P,O;w&&w.images&&s((O=(P=w.images)==null?void 0:P[0])==null?void 0:O.url)},[w]);const _=((w==null?void 0:w.images)??[]).map(P=>({src:P.url})),$=()=>{const P=w.images.findIndex(O=>O.url===l);v(P>=0?P:0),u(!0)},M=Mt(),I=Ue(P=>P.favorites.items).some(P=>P.id===(w==null?void 0:w.id)),j=async()=>{if(T>=w.stock){X.warning("Товар вже в кошику (досягнуто максимум)");return}if(T+r>w.stock){X.warning(`Доступно лише ${w.stock} шт.`);return}await Za(w,r,M,X)},L=(P,O)=>{O.stopPropagation(),ui(P,I,M,X)},D=(w==null?void 0:w.new_price)&&(w==null?void 0:w.new_price)<w.price,F=D?Math.round((w.price-w.new_price)/w.price*100):0;return m?d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:d.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):w?d.jsxs(Zv,{children:[" ",d.jsx(Ln,{autoClose:1500}),d.jsxs(B6,{children:[d.jsx(Te,{to:"/",children:"Головна"})," / ",d.jsx(Te,{to:"/catalog",children:"Каталог"})," /"," ",w.name]}),d.jsxs(V6,{children:[d.jsxs(U6,{children:[d.jsx(W6,{src:l,alt:w.name,onClick:$}),d.jsx(H6,{children:(w.images??[]).map(P=>{const O=P.url;return d.jsx(G6,{src:O,onClick:()=>s(O),style:{cursor:"pointer",opacity:l===O?1:.4}},P.id)})})]}),d.jsx(SA,{open:c,close:()=>u(!1),index:f,slides:_,controller:{closeOnBackdropClick:!0},on:{view:({index:P})=>{var O,z;v(P),(z=(O=w==null?void 0:w.images)==null?void 0:O[P])!=null&&z.url&&s(w.images[P].url)}},plugins:[zA],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),d.jsxs(q6,{children:[d.jsx(Y6,{children:w.name}),d.jsxs(X6,{children:["Артикул: ",w.sku??""]}),d.jsx(K6,{children:h&&d.jsx(Z6,{children:"● Новий товар"})}),!E&&d.jsx(Q6,{children:"Бронь"}),d.jsxs(J6,{children:[d.jsx(eL,{children:D?d.jsxs(d.Fragment,{children:[d.jsxs(Jv,{$discount:!0,children:[w.new_price.toLocaleString()," грн"]}),d.jsxs(tL,{children:[w.price.toLocaleString()," грн"]}),d.jsxs(nL,{children:["-",F,"%"]})]}):d.jsxs(Jv,{children:[w.price.toLocaleString()," грн"]})}),d.jsxs(rL,{children:[d.jsxs(iL,{children:[d.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),d.jsx("span",{children:r}),d.jsxs(uL,{$active:r>=w.stock,children:[d.jsx("button",{onClick:()=>i(Math.min(w.stock,r+1)),disabled:r>=w.stock,children:"+"}),d.jsxs(V2,{children:["Максимум: ",w.stock]})]})]}),d.jsxs(oL,{onClick:j,disabled:!E,children:[" ",d.jsx(vo,{size:25}),d.jsx("span",{children:"В КОШИК"})]}),d.jsxs(lL,{$active:I,onClick:P=>L(w,P),children:[d.jsxs(cL,{$active:I,children:[" ",d.jsx("use",{href:`${hn}#icon-heart`})]}),d.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!b&&d.jsxs(n1,{children:[d.jsxs(r1,{children:[d.jsx(Bo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),d.jsx(Bo,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),d.jsx(Bo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),d.jsxs(i1,{children:[o==="description"&&d.jsx(o1,{children:w.description}),o==="attributes"&&d.jsx(e1,{children:(R=w.attributes)!=null&&R.length?w.attributes.map(P=>d.jsxs(t1,{children:[d.jsx("span",{children:P.label}),d.jsx("b",{children:P.value})]},P.id)):d.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&d.jsx(C1,{productId:w.documentId,questions:w.questions})]})]}),b&&d.jsxs(sL,{children:[d.jsxs(n1,{children:[d.jsxs(r1,{children:[d.jsx(Bo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),d.jsx(Bo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),d.jsxs(i1,{children:[o==="description"&&d.jsx(o1,{children:w.description}),o==="FAQ"&&d.jsx(C1,{productId:w.documentId,questions:w.questions})]})]}),d.jsxs(e1,{children:[d.jsx(aL,{children:" Характеристики"}),(()=>{const P=[...w.attributes||[],...w.features||[]];return P.length?P.map((O,z)=>d.jsxs(t1,{children:[d.jsx("span",{children:O.label}),d.jsx("b",{children:O.value})]},`${O.id}-${z}`)):d.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):d.jsx(Zv,{children:"Товар не знайдено"})},tR=C.div`
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

  
`,nR=C.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,rR=C.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,iR=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width:  895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,oR=C.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,aR=C.div`
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

  @media screen and (min-width: 895px) {
    display: grid;
    grid-template-columns: 100px 1.5fr 230px 80px; 
    align-items: center;
    gap: 20px;
  }
  
`,sR=C.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,lR=C.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,cR=C.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,uR=C.div`

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
`;const $u=C.div`
  text-align: center;
  width: 100px;
 
`,Mu=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Iu=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Du=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Lu=C.span`
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
`,dR=C.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,fR=C.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,pR=C.div`

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
`,hR=C.div`
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
`,mR=C(Te)`
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
`,gR=C.button`
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
`;const vR=C.div`
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
`,yR=C.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,xR=C.div`
  background-color: #fdfaf7;
`,bR=C.div`
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
`;const wR=C.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,SR=C.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,CR=C.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,_R=C.button`
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
`,kR=()=>d.jsx(xR,{children:d.jsxs(vR,{children:[d.jsx(yR,{children:"Головна / Кошик"}),d.jsxs(bR,{children:[d.jsx(wR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),d.jsx(SR,{children:"Ваш кошик порожній"}),d.jsx(CR,{children:"Ви ще не додали жодного товару в кошик"}),d.jsx(_R,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),ER=C.div`
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
`,TR=({item:e,cartItem:t,user:n,token:r})=>{const i=Mt(),o=async()=>{const l=e.quantity+1;if(!n){i(fv({id:e.id,stock:e.stock}));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:l}})})).ok)throw new Error("Не вдалося оновити кількість");i(fv({id:e.id,stock:e.stock}))}catch(s){console.error("Помилка оновлення кількості:",s)}},a=async()=>{const l=e.quantity-1;if(!n){i(pv(e.id));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:l}})})).ok)throw new Error("Не вдалося оновити кількість");i(pv(e.id))}catch(s){console.error("Помилка оновлення кількості:",s)}};return d.jsxs(ER,{children:[d.jsx("button",{onClick:a,disabled:e.quantity<=1,children:"-"}),d.jsx("span",{children:e.quantity}),d.jsx("button",{onClick:o,disabled:e.quantity>=e.stock,children:"+"})]})},PR=async(e,t,n)=>{try{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!r.ok)throw new Error("Не вдалося отримати товари кошика");const i=await r.json();await Promise.all(i.data.map(async o=>{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}})).ok)throw new Error("Не вдалося видалити товар з кошика")})),t(yo())}catch(r){throw console.error("clearCartFromBackend error:",r),r}},OR=C.div`
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
`,jR=C.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,$R=C.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,MR=C.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,IR=C.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,DR=C.div`
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
`,wC=C.div`
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
`;C.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const LR=C.div`
  position: relative;
`,AR=C.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,RR=C.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,FR=C.div`
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
`;const zR=C.div`
  display: flex;
  gap: 16px;
`,_1=C.button`
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
`,NR=C.div`
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
`,BR=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,VR=C.button`
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
`;C.button`
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
`;const UR=async(e,t,n,r)=>{try{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${t}&filters[product][id][$eq]=${e.id}`,{headers:{Authorization:`Bearer ${r}`}});if(!i.ok)throw new Error("Не вдалося знайти товар у кошику");const a=(await i.json()).data[0];if(!a)throw new Error("Товар у кошику не знайдено");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${a.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити товар");n(nS(e))}catch(i){throw console.error("deleteCartItemFromBackend error:",i),i}},WR=()=>{const e=Mt(),t=xt(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),[i,o]=x.useState([]),a=Ue(S=>S.cart.items),[l,s]=x.useState([]),[c,u]=x.useState([]);console.log("cartItems",c);const[f,v]=x.useState(!0);console.log("localCartItems",l);const m=a.filter(S=>S.available!==!1).reduce((S,k)=>S+k.quantity,0),p=a.filter(S=>S.available!==!1).reduce((S,k)=>S+(k.new_price??k.price)*(k.quantity||1),0),y=Ue(S=>S.favorites.items),w=l.length===0;x.useEffect(()=>{(async()=>{if(!n||!r){s(a),v(!1);return}try{const k=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(!k.ok)throw new Error("Не вдалося отримати кошик");const T=await k.json();u(T.data);const E=T.data.map(_=>_.product?{..._.product,quantity:_.quantity}:null).filter(Boolean);s(E),e(tS(E))}catch(k){console.error(k),X.error("Не вдалося завантажити кошик"),s(a)}finally{v(!1)}})()},[]),x.useEffect(()=>{s(a)},[a]);const h=(S,k)=>{k.stopPropagation();const T=y.some(E=>E.id===(S==null?void 0:S.id));ui(S,T,e,X)},g=async S=>{o(k=>[...k,S.id]);try{if(!r){setTimeout(()=>{e(nS(S)),o(k=>k.filter(T=>T!==S.id))},300);return}await UR(S,r.id,e,n),setTimeout(()=>{o(k=>k.filter(T=>T!==S.id))},300)}catch{o(T=>T.filter(E=>E!==S.id)),X.error("Не вдалося видалити товар з кошика")}},b=async()=>{if(!r){e(yo()),s([]);return}try{await PR(r.id,e,n),s([])}catch{X.error("Не вдалося очистити кошик")}};return f?d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:d.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):d.jsx(d.Fragment,{children:w?d.jsx(kR,{}):d.jsxs(tR,{children:[d.jsx(Ln,{autoClose:1500}),d.jsxs(nR,{children:[" ",d.jsx(Te,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",d.jsx(Te,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),d.jsx(rR,{children:"Кошик"}),d.jsxs(iR,{children:[d.jsx(oR,{children:l.map((S,k)=>{var I,j;const T=c.find(L=>{var D;return((D=L.product)==null?void 0:D.documentId)===S.documentId}),E=y.some(L=>L.id===S.id),_=S.new_price&&S.new_price<S.price,$=(S==null?void 0:S.available)??!0,M=_?S.new_price:S.price,A=_?Math.round((S.price-S.new_price)/S.price*100):0;return d.jsxs(aR,{className:`
    ${i.includes(S.id)?"removing":""}
    ${$?"":"unavailable"}
  `,children:[d.jsxs($w,{onClick:()=>t(`/product/${S.slug??S.id}`),children:[!$&&d.jsx(wC,{children:"Бронь"}),d.jsx(sR,{src:((j=(I=S.images)==null?void 0:I[0])==null?void 0:j.url)||"/nofoto.png",alt:S.name,onError:L=>{L.currentTarget.onerror=null,L.currentTarget.src=ri}})]}),d.jsx(lR,{onClick:()=>t(`/product/${S.slug??S.id}`),children:d.jsx("h3",{children:S.name})}),d.jsxs(cR,{children:[d.jsx(TR,{item:S,cartItem:T,user:r,token:n}),d.jsx($u,{children:d.jsxs(Mu,{children:[d.jsxs(Iu,{$discount:_,children:[(M*(S.quantity||1)).toLocaleString()," ","грн"]}),_&&d.jsxs(d.Fragment,{children:[d.jsxs(Du,{children:[(S.price*(S.quantity||1)).toLocaleString()," ","грн"]}),d.jsxs(Lu,{children:["-",A,"%"]})]})]})})]}),d.jsxs(uR,{children:[d.jsx(fR,{onClick:L=>h(S,L),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:d.jsx(Ya,{size:22,fill:E?"#ff4d4f":"none",color:E?"#ff4d4f":"#999"})}),d.jsx(dR,{onClick:()=>g(S),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:d.jsx(Sw,{size:22})})]})]},`${S.id}-${k}`)})}),d.jsxs(pR,{children:[d.jsxs(hR,{children:[d.jsx("span",{children:"Всього в обраному:"}),d.jsxs("strong",{children:[m," шт."]}),d.jsx("span",{children:"На суму:"}),d.jsxs("strong",{children:[p," грн"]})]}),d.jsx(mR,{to:"/checkout",children:"Оформити замовлення"}),d.jsx(gR,{onClick:b,children:"Oчистити кошик"})]})]})]})})},HR=C.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,GR=C.div`
   
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
`;const qR=C.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;C.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const YR=C.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,XR=C.button`
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
`,KR=()=>d.jsxs(d.Fragment,{children:[d.jsx(HR,{children:"Головна / Обране"}),d.jsxs(GR,{children:[d.jsx(qR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),d.jsx(YR,{children:"Ви ще не додали жодного товару в обране"}),d.jsx(XR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),QR=()=>{const e=Mt(),t=xt(),n=Ue(p=>p.favorites.items),[r,i]=x.useState([]),[o,a]=x.useState(!0),[l,s]=x.useState([]),c=Ue(p=>p.cart.items);x.useEffect(()=>{(async()=>{const y=localStorage.getItem("token"),w=JSON.parse(localStorage.getItem("user"));if(!y||!w){i(n),a(!1);return}try{const h=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${w.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${y}`}});if(!h.ok)throw new Error("Не вдалося отримати обране");const b=(await h.json()).data.map(S=>S.product).filter(Boolean);i(b)}catch(h){console.error(h),X.error("Не вдалося завантажити обране"),i(n)}finally{a(!1)}})()},[]);const u=()=>{const p=r.filter(y=>y.available!==!1).map(y=>{const w=c.find(S=>S.id===y.id),h=(w==null?void 0:w.quantity)??0,b=Number(y.stock??0)-h;return b<=0?null:{...y,quantity:b}}).filter(Boolean);if(p.length===0){X.error("Усі товари вже в максимальній кількості");return}e(V3(p)),X.success("Додано максимально доступну кількість товарів")},f=r.reduce((p,y)=>p+(y.new_price??y.price)*(y.quantity||1),0),v=async(p,y)=>{y.stopPropagation();const w=r.some(g=>g.documentId===p.documentId);s(g=>[...g,p.id]),await ui(p,w,e,X)&&w?setTimeout(()=>{i(g=>g.filter(b=>b.documentId!==p.documentId)),s(g=>g.filter(b=>b!==p.id))},300):s(g=>g.filter(b=>b!==p.id))},m=r.length===0;return o?d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:d.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):d.jsx(d.Fragment,{children:m?d.jsx(KR,{}):d.jsxs(OR,{children:[d.jsx(Ln,{autoClose:1500}),d.jsxs(jR,{children:[" ",d.jsx(Te,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",d.jsx(Te,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),d.jsx($R,{children:"Обране"}),d.jsxs(MR,{children:[d.jsx(IR,{children:r.map(p=>{var S,k;const y=p.new_price&&p.new_price<p.price,w=y?p.new_price:p.price,h=(p==null?void 0:p.available)??!0,g=y?Math.round((p.price-p.new_price)/p.price*100):0,b=async T=>{const E=c.find($=>$.id===T.id);if((E?E.quantity:0)>=T.stock){X.error(`Вибачте, доступно лише ${T.stock} шт.`);return}await Za(T,1,e,X)};return d.jsxs(DR,{className:l.includes(p.id)?"removing":"",children:[d.jsxs(LR,{onClick:()=>t(`/product/${p.slug??p.id}`),children:[" ",!h&&d.jsx(wC,{children:"Бронь"}),d.jsx(AR,{src:((k=(S=p.images)==null?void 0:S[0])==null?void 0:k.url)||ri,alt:p.name,onError:T=>{T.currentTarget.onerror=null}})]}),d.jsx(RR,{onClick:()=>t(`/product/${p.slug??p.id}`),children:p.name}),d.jsxs(FR,{children:[d.jsx($u,{children:d.jsxs(Mu,{children:[d.jsxs(Iu,{$discount:y,children:[(w*(p.quantity||1)).toLocaleString()," ","грн"]}),y&&d.jsxs(d.Fragment,{children:[d.jsxs(Du,{children:[(p.price*(p.quantity||1)).toLocaleString()," ","грн"]}),d.jsxs(Lu,{children:["-",g,"%"]})]})]})}),d.jsxs(zR,{children:[d.jsx(_1,{onClick:()=>b(p),disabled:!h,children:d.jsx(vo,{size:30})}),d.jsx(_1,{onClick:T=>v(p,T),children:d.jsx(Sw,{size:30})})]})]})]},p.id)})}),d.jsxs(NR,{children:[d.jsxs(BR,{children:[d.jsx("span",{children:"Всього в обраному:"}),d.jsxs("strong",{children:[r.length," шт."]}),d.jsx("span",{children:"На суму:"}),d.jsxs("strong",{children:[f," грн"]})]}),d.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),d.jsx(VR,{onClick:()=>u(),children:"Додати все до кошика"})]})]})]})})},ZR=C.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,JR=C.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,e8=C.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,t8=C.h1`
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
`;const n8=({title:e,children:t,breadcrumbPath:n})=>d.jsxs(ZR,{children:[d.jsxs(JR,{children:["Головна / ",n]}),d.jsxs(e8,{children:[d.jsx(t8,{children:e}),t]})]}),k1=C.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,E1=C.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,T1=C.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,P1=C.ul`
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
`,r8=()=>d.jsxs(n8,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[d.jsxs(k1,{children:[d.jsx(E1,{children:"Способи доставки"}),d.jsx(T1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),d.jsxs(P1,{children:[d.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),d.jsx("li",{children:"Самовивіз з нашого магазину"}),d.jsx("li",{children:"Укрпошта"})]})]}),d.jsxs(k1,{children:[d.jsx(E1,{children:"Варіанти оплати"}),d.jsx(T1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),d.jsxs(P1,{children:[d.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),d.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),d.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ai(e){"@babel/helpers - typeof";return ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ai(e)}function i8(e,t){if(ai(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ai(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function SC(e){var t=i8(e,"string");return ai(t)==="symbol"?t:String(t)}function Qo(e,t,n){return t=SC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?O1(Object(n),!0).forEach(function(r){Qo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function o8(e){if(Array.isArray(e))return e}function a8(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(u){c=!0,i=u}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}function qp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function CC(e,t){if(e){if(typeof e=="string")return qp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qp(e,t)}}function s8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yn(e,t){return o8(e)||a8(e,t)||CC(e,t)||s8()}function l8(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function or(e,t){if(e==null)return{};var n=l8(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c8=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function u8(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,c=e.onChange,u=e.onInputChange,f=e.onMenuClose,v=e.onMenuOpen,m=e.value,p=or(e,c8),y=x.useState(l!==void 0?l:n),w=Yn(y,2),h=w[0],g=w[1],b=x.useState(s!==void 0?s:i),S=Yn(b,2),k=S[0],T=S[1],E=x.useState(m!==void 0?m:a),_=Yn(E,2),$=_[0],M=_[1],A=x.useCallback(function(P,O){typeof c=="function"&&c(P,O),M(P)},[c]),I=x.useCallback(function(P,O){var z;typeof u=="function"&&(z=u(P,O)),g(z!==void 0?z:P)},[u]),j=x.useCallback(function(){typeof v=="function"&&v(),T(!0)},[v]),L=x.useCallback(function(){typeof f=="function"&&f(),T(!1)},[f]),D=l!==void 0?l:h,F=s!==void 0?s:k,R=m!==void 0?m:$;return Z(Z({},p),{},{inputValue:D,menuIsOpen:F,onChange:A,onInputChange:I,onMenuClose:L,onMenuOpen:j,value:R})}function d8(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,SC(r.key),r)}}function f8(e,t,n){return t&&j1(e.prototype,t),n&&j1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Yp(e,t){return Yp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Yp(e,t)}function p8(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yp(e,t)}function uc(e){return uc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},uc(e)}function h8(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function m8(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g8(e,t){if(t&&(ai(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m8(e)}function v8(e){var t=h8();return function(){var r=uc(e),i;if(t){var o=uc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return g8(this,i)}}function y8(e){if(Array.isArray(e))return qp(e)}function x8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function b8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eg(e){return y8(e)||x8(e)||CC(e)||b8()}function w8(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const S8=Math.min,C8=Math.max,dc=Math.round,$s=Math.floor,fc=e=>({x:e,y:e});function _8(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Au(){return typeof window<"u"}function _C(e){return EC(e)?(e.nodeName||"").toLowerCase():"#document"}function mn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function kC(e){var t;return(t=(EC(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function EC(e){return Au()?e instanceof Node||e instanceof mn(e).Node:!1}function Xp(e){return Au()?e instanceof Element||e instanceof mn(e).Element:!1}function tg(e){return Au()?e instanceof HTMLElement||e instanceof mn(e).HTMLElement:!1}function $1(e){return!Au()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof mn(e).ShadowRoot}function TC(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ng(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Zd;function k8(){return Zd==null&&(Zd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Zd}function E8(e){return/^(html|body|#document)$/.test(_C(e))}function ng(e){return mn(e).getComputedStyle(e)}function T8(e){if(_C(e)==="html")return e;const t=e.assignedSlot||e.parentNode||$1(e)&&e.host||kC(e);return $1(t)?t.host:t}function PC(e){const t=T8(e);return E8(t)?e.ownerDocument?e.ownerDocument.body:e.body:tg(t)&&TC(t)?t:PC(t)}function pc(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=PC(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=mn(i);if(o){const l=Kp(a);return t.concat(a,a.visualViewport||[],TC(i)?i:[],l&&n?pc(l):[])}else return t.concat(i,pc(i,[],n))}function Kp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function P8(e){const t=ng(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=tg(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=dc(n)!==o||dc(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function rg(e){return Xp(e)?e:e.contextElement}function Jd(e){const t=rg(e);if(!tg(t))return fc(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=P8(t);let a=(o?dc(n.width):n.width)/r,l=(o?dc(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const O8=fc(0);function j8(e){const t=mn(e);return!k8()||!t.visualViewport?O8:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function $8(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==mn(e)?!1:t}function M1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=rg(e);let a=fc(1);t&&(r?Xp(r)&&(a=Jd(r)):a=Jd(e));const l=$8(o,n,r)?j8(o):fc(0);let s=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,u=i.width/a.x,f=i.height/a.y;if(o){const v=mn(o),m=r&&Xp(r)?mn(r):r;let p=v,y=Kp(p);for(;y&&r&&m!==p;){const w=Jd(y),h=y.getBoundingClientRect(),g=ng(y),b=h.left+(y.clientLeft+parseFloat(g.paddingLeft))*w.x,S=h.top+(y.clientTop+parseFloat(g.paddingTop))*w.y;s*=w.x,c*=w.y,u*=w.x,f*=w.y,s+=b,c+=S,p=mn(y),y=Kp(p)}}return _8({width:u,height:f,x:s,y:c})}function OC(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function M8(e,t){let n=null,r;const i=kC(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const c=e.getBoundingClientRect(),{left:u,top:f,width:v,height:m}=c;if(l||t(),!v||!m)return;const p=$s(f),y=$s(i.clientWidth-(u+v)),w=$s(i.clientHeight-(f+m)),h=$s(u),b={rootMargin:-p+"px "+-y+"px "+-w+"px "+-h+"px",threshold:C8(0,S8(1,s))||1};let S=!0;function k(T){const E=T[0].intersectionRatio;if(E!==s){if(!S)return a();E?a(!1,E):r=setTimeout(()=>{a(!1,1e-7)},1e3)}E===1&&!OC(c,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(k,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(k,b)}n.observe(e)}return a(!0),o}function I8(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=rg(e),u=i||o?[...c?pc(c):[],...t?pc(t):[]]:[];u.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const f=c&&l?M8(c,n):null;let v=-1,m=null;a&&(m=new ResizeObserver(h=>{let[g]=h;g&&g.target===c&&m&&t&&(m.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var b;(b=m)==null||b.observe(t)})),n()}),c&&!s&&m.observe(c),t&&m.observe(t));let p,y=s?M1(e):null;s&&w();function w(){const h=M1(e);y&&!OC(y,h)&&n(),y=h,p=requestAnimationFrame(w)}return n(),()=>{var h;u.forEach(g=>{i&&g.removeEventListener("scroll",n),o&&g.removeEventListener("resize",n)}),f==null||f(),(h=m)==null||h.disconnect(),m=null,s&&cancelAnimationFrame(p)}}var Qp=x.useLayoutEffect,D8=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],hc=function(){};function L8(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function A8(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(L8(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var I1=function(t){return H8(t)?t.filter(Boolean):ai(t)==="object"&&t!==null?[t]:[]},jC=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=or(t,D8);return Z({},n)},je=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Ru(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function R8(e){return Ru(e)?window.innerHeight:e.clientHeight}function $C(e){return Ru(e)?window.pageYOffset:e.scrollTop}function mc(e,t){if(Ru(e)){window.scrollTo(0,t);return}e.scrollTop=t}function F8(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function z8(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ms(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:hc,i=$C(e),o=t-i,a=10,l=0;function s(){l+=a;var c=z8(l,i,o,n);mc(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function D1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?mc(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&mc(e,Math.max(t.offsetTop-i,0))}function N8(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function L1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function B8(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var MC=!1,V8={get passive(){return MC=!0}},Is=typeof window<"u"?window:{};Is.addEventListener&&Is.removeEventListener&&(Is.addEventListener("p",hc,V8),Is.removeEventListener("p",hc,!1));var U8=MC;function W8(e){return e!=null}function H8(e){return Array.isArray(e)}function Ds(e,t,n){return e?t:n}var G8=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Yn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Yn(l,2),c=s[0],u=s[1];return a[c]=u,a},{})},q8=["children","innerProps"],Y8=["children","innerProps"];function X8(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=F8(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var u=s.getBoundingClientRect(),f=u.height,v=n.getBoundingClientRect(),m=v.bottom,p=v.height,y=v.top,w=n.offsetParent.getBoundingClientRect(),h=w.top,g=a?window.innerHeight:R8(s),b=$C(s),S=parseInt(getComputedStyle(n).marginBottom,10),k=parseInt(getComputedStyle(n).marginTop,10),T=h-k,E=g-y,_=T+b,$=f-b-y,M=m-g+b+S,A=b+y-k,I=160;switch(i){case"auto":case"bottom":if(E>=p)return{placement:"bottom",maxHeight:t};if($>=p&&!a)return o&&Ms(s,M,I),{placement:"bottom",maxHeight:t};if(!a&&$>=r||a&&E>=r){o&&Ms(s,M,I);var j=a?E-S:$-S;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var L=t,D=a?T:_;return D>=r&&(L=Math.min(D-S-l,t)),{placement:"top",maxHeight:L}}if(i==="bottom")return o&&mc(s,M),{placement:"bottom",maxHeight:t};break;case"top":if(T>=p)return{placement:"top",maxHeight:t};if(_>=p&&!a)return o&&Ms(s,A,I),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&T>=r){var F=t;return(!a&&_>=r||a&&T>=r)&&(F=a?T-k:_-k),o&&Ms(s,A,I),{placement:"top",maxHeight:F}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function K8(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var IC=function(t){return t==="auto"?"bottom":t},Q8=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},Qo(r,K8(i),"100%"),Qo(r,"position","absolute"),Qo(r,"width","100%"),Qo(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},DC=x.createContext(null),Z8=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,c=x.useContext(DC)||{},u=c.setPortalPlacement,f=x.useRef(null),v=x.useState(i),m=Yn(v,2),p=m[0],y=m[1],w=x.useState(null),h=Yn(w,2),g=h[0],b=h[1],S=s.spacing.controlHeight;return Qp(function(){var k=f.current;if(k){var T=a==="fixed",E=l&&!T,_=X8({maxHeight:i,menuEl:k,minHeight:r,placement:o,shouldScroll:E,isFixedPosition:T,controlHeight:S});y(_.maxHeight),b(_.placement),u==null||u(_.placement)}},[i,o,a,l,r,u,S]),n({ref:f,placerProps:Z(Z({},t),{},{placement:g||IC(o),maxHeight:p})})},J8=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Q("div",J({},je(t,"menu",{menu:!0}),{ref:r},i),n)},eF=J8,tF=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},nF=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Q("div",J({},je(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},LC=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},rF=LC,iF=LC,oF=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=or(t,q8);return Q("div",J({},je(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},aF=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=or(t,Y8);return Q("div",J({},je(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},sF=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},lF=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=x.useRef(null),c=x.useRef(null),u=x.useState(IC(a)),f=Yn(u,2),v=f[0],m=f[1],p=x.useMemo(function(){return{setPortalPlacement:m}},[]),y=x.useState(null),w=Yn(y,2),h=w[0],g=w[1],b=x.useCallback(function(){if(i){var E=N8(i),_=l==="fixed"?0:window.pageYOffset,$=E[v]+_;($!==(h==null?void 0:h.offset)||E.left!==(h==null?void 0:h.rect.left)||E.width!==(h==null?void 0:h.rect.width))&&g({offset:$,rect:E})}},[i,l,v,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Qp(function(){b()},[b]);var S=x.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=I8(i,s.current,b,{elementResize:"ResizeObserver"in window}))},[i,b]);Qp(function(){S()},[S]);var k=x.useCallback(function(E){s.current=E,S()},[S]);if(!n&&l!=="fixed"||!h)return null;var T=Q("div",J({ref:k},je(Z(Z({},t),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Q(DC.Provider,{value:p},n?Lc.createPortal(T,n):T)},cF=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},uF=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Q("div",J({},je(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},dF=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},fF=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Q("div",J({},je(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},pF=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},hF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"indicatorsContainer",{indicators:!0}),r),n)},A1,mF=["size"],gF=["innerProps","isRtl","size"],vF={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},AC=function(t){var n=t.size,r=or(t,mF);return Q("svg",J({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:vF},r))},ig=function(t){return Q(AC,J({size:20},t),Q("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},RC=function(t){return Q(AC,J({size:20},t),Q("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},FC=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},yF=FC,xF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Q(RC,null))},bF=FC,wF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Q(ig,null))},SF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},CF=function(t){var n=t.innerProps;return Q("span",J({},n,je(t,"indicatorSeparator",{"indicator-separator":!0})))},_F=V$(A1||(A1=w8([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),kF=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},ef=function(t){var n=t.delay,r=t.offset;return Q("span",{css:Om({animation:"".concat(_F," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},EF=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=or(t,gF);return Q("div",J({},je(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Q(ef,{delay:0,offset:r}),Q(ef,{delay:160,offset:!0}),Q(ef,{delay:320,offset:!r}))},TF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},PF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Q("div",J({ref:o},je(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},OF=PF,jF=["data"],$F=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},MF=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,u=t.theme,f=t.selectProps;return Q("div",J({},je(t,"group",{group:!0}),s),Q(a,J({},l,{selectProps:f,theme:u,getStyles:i,getClassNames:o,cx:r}),c),Q("div",null,n))},IF=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},DF=function(t){var n=jC(t);n.data;var r=or(n,jF);return Q("div",J({},je(t,"groupHeading",{"group-heading":!0}),r))},LF=MF,AF=["innerRef","isDisabled","isHidden","inputClassName"],RF=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},FF),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},zC={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},FF={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},zC)},zF=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},zC)},NF=function(t){var n=t.cx,r=t.value,i=jC(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,c=or(i,AF);return Q("div",J({},je(t,"input",{"input-container":!0}),{"data-value":r||""}),Q("input",J({className:n({input:!0},s),ref:o,style:zF(l),disabled:a},c)))},BF=NF,VF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},UF=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},WF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},NC=function(t){var n=t.children,r=t.innerProps;return Q("div",r,n)},HF=NC,GF=NC;function qF(e){var t=e.children,n=e.innerProps;return Q("div",J({role:"button"},n),t||Q(ig,{size:14}))}var YF=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,c=r.Container,u=r.Label,f=r.Remove;return Q(c,{data:i,innerProps:Z(Z({},je(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Q(u,{data:i,innerProps:Z({},je(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Q(f,{data:i,innerProps:Z(Z({},je(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},XF=YF,KF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},QF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Q("div",J({},je(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},ZF=QF,JF=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},ez=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"placeholder",{placeholder:!0}),r),n)},tz=ez,nz=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},rz=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Q("div",J({},je(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},iz=rz,oz={ClearIndicator:wF,Control:OF,DropdownIndicator:xF,DownChevron:RC,CrossIcon:ig,Group:LF,GroupHeading:DF,IndicatorsContainer:hF,IndicatorSeparator:CF,Input:BF,LoadingIndicator:EF,Menu:eF,MenuList:nF,MenuPortal:lF,LoadingMessage:aF,NoOptionsMessage:oF,MultiValue:XF,MultiValueContainer:HF,MultiValueLabel:GF,MultiValueRemove:qF,Option:ZF,Placeholder:tz,SelectContainer:uF,SingleValue:iz,ValueContainer:fF},az=function(t){return Z(Z({},oz),t.components)},R1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function sz(e,t){return!!(e===t||R1(e)&&R1(t))}function lz(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!sz(e[n],t[n]))return!1;return!0}function cz(e,t){t===void 0&&(t=lz);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var uz={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},dz=function(t){return Q("span",J({css:uz},t))},F1=dz,fz={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,c=t.isSelected,u=t.isAppleDevice,f=function(y,w){return y&&y.length?"".concat(y.indexOf(w)+1," of ").concat(y.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(f(l,r),".");if(n==="menu"&&u){var v=s?" disabled":"",m="".concat(c?" selected":"").concat(v);return"".concat(a).concat(m,", ").concat(f(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},pz=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=t.id,u=t.isAppleDevice,f=s.ariaLiveMessages,v=s.getOptionLabel,m=s.inputValue,p=s.isMulti,y=s.isOptionDisabled,w=s.isSearchable,h=s.menuIsOpen,g=s.options,b=s.screenReaderStatus,S=s.tabSelectsValue,k=s.isLoading,T=s["aria-label"],E=s["aria-live"],_=x.useMemo(function(){return Z(Z({},fz),f||{})},[f]),$=x.useMemo(function(){var D="";if(n&&_.onChange){var F=n.option,R=n.options,P=n.removedValue,O=n.removedValues,z=n.value,N=function(pe){return Array.isArray(pe)?null:pe},B=P||F||N(z),U=B?v(B):"",W=R||O||void 0,Y=W?W.map(v):[],H=Z({isDisabled:B&&y(B,l),label:U,labels:Y},n);D=_.onChange(H)}return D},[n,_,y,l,v]),M=x.useMemo(function(){var D="",F=r||i,R=!!(r&&l&&l.includes(r));if(F&&_.onFocus){var P={focused:F,label:v(F),isDisabled:y(F,l),isSelected:R,options:o,context:F===r?"menu":"value",selectValue:l,isAppleDevice:u};D=_.onFocus(P)}return D},[r,i,v,y,_,o,l,u]),A=x.useMemo(function(){var D="";if(h&&g.length&&!k&&_.onFilter){var F=b({count:o.length});D=_.onFilter({inputValue:m,resultsMessage:F})}return D},[o,m,h,_,g,b,k]),I=(n==null?void 0:n.action)==="initial-input-focus",j=x.useMemo(function(){var D="";if(_.guidance){var F=i?"value":h?"menu":"input";D=_.guidance({"aria-label":T,context:F,isDisabled:r&&y(r,l),isMulti:p,isSearchable:w,tabSelectsValue:S,isInitialFocus:I})}return D},[T,r,i,p,y,w,h,_,l,S,I]),L=Q(x.Fragment,null,Q("span",{id:"aria-selection"},$),Q("span",{id:"aria-focused"},M),Q("span",{id:"aria-results"},A),Q("span",{id:"aria-guidance"},j));return Q(x.Fragment,null,Q(F1,{id:c},I&&L),Q(F1,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!I&&L))},hz=pz,Zp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],mz=new RegExp("["+Zp.map(function(e){return e.letters}).join("")+"]","g"),BC={};for(var tf=0;tf<Zp.length;tf++)for(var nf=Zp[tf],rf=0;rf<nf.letters.length;rf++)BC[nf.letters[rf]]=nf.base;var VC=function(t){return t.replace(mz,function(n){return BC[n]})},gz=cz(VC),z1=function(t){return t.replace(/^\s+|\s+$/g,"")},vz=function(t){return"".concat(t.label," ").concat(t.value)},yz=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:vz,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,c=i.matchFrom,u=s?z1(r):r,f=s?z1(l(n)):l(n);return o&&(u=u.toLowerCase(),f=f.toLowerCase()),a&&(u=gz(u),f=VC(f)),c==="start"?f.substr(0,u.length)===u:f.indexOf(u)>-1}},xz=["innerRef"];function bz(e){var t=e.innerRef,n=or(e,xz),r=G8(n,"onExited","in","enter","exit","appear");return Q("input",J({ref:t},r,{css:Om({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var wz=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Sz(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=x.useRef(!1),l=x.useRef(!1),s=x.useRef(0),c=x.useRef(null),u=x.useCallback(function(w,h){if(c.current!==null){var g=c.current,b=g.scrollTop,S=g.scrollHeight,k=g.clientHeight,T=c.current,E=h>0,_=S-k-b,$=!1;_>h&&a.current&&(r&&r(w),a.current=!1),E&&l.current&&(o&&o(w),l.current=!1),E&&h>_?(n&&!a.current&&n(w),T.scrollTop=S,$=!0,a.current=!0):!E&&-h>b&&(i&&!l.current&&i(w),T.scrollTop=0,$=!0,l.current=!0),$&&wz(w)}},[n,r,i,o]),f=x.useCallback(function(w){u(w,w.deltaY)},[u]),v=x.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),m=x.useCallback(function(w){var h=s.current-w.changedTouches[0].clientY;u(w,h)},[u]),p=x.useCallback(function(w){if(w){var h=U8?{passive:!1}:!1;w.addEventListener("wheel",f,h),w.addEventListener("touchstart",v,h),w.addEventListener("touchmove",m,h)}},[m,v,f]),y=x.useCallback(function(w){w&&(w.removeEventListener("wheel",f,!1),w.removeEventListener("touchstart",v,!1),w.removeEventListener("touchmove",m,!1))},[m,v,f]);return x.useEffect(function(){if(t){var w=c.current;return p(w),function(){y(w)}}},[t,p,y]),function(w){c.current=w}}var N1=["boxSizing","height","overflow","paddingRight","position"],B1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function V1(e){e.cancelable&&e.preventDefault()}function U1(e){e.stopPropagation()}function W1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function H1(){return"ontouchstart"in window||navigator.maxTouchPoints}var G1=!!(typeof window<"u"&&window.document&&window.document.createElement),Vo=0,Si={capture:!1,passive:!1};function Cz(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=x.useRef({}),o=x.useRef(null),a=x.useCallback(function(s){if(G1){var c=document.body,u=c&&c.style;if(r&&N1.forEach(function(p){var y=u&&u[p];i.current[p]=y}),r&&Vo<1){var f=parseInt(i.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,m=window.innerWidth-v+f||0;Object.keys(B1).forEach(function(p){var y=B1[p];u&&(u[p]=y)}),u&&(u.paddingRight="".concat(m,"px"))}c&&H1()&&(c.addEventListener("touchmove",V1,Si),s&&(s.addEventListener("touchstart",W1,Si),s.addEventListener("touchmove",U1,Si))),Vo+=1}},[r]),l=x.useCallback(function(s){if(G1){var c=document.body,u=c&&c.style;Vo=Math.max(Vo-1,0),r&&Vo<1&&N1.forEach(function(f){var v=i.current[f];u&&(u[f]=v)}),c&&H1()&&(c.removeEventListener("touchmove",V1,Si),s&&(s.removeEventListener("touchstart",W1,Si),s.removeEventListener("touchmove",U1,Si)))}},[r]);return x.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var _z=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},kz={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Ez(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=Sz({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),u=Cz({isEnabled:n}),f=function(m){c(m),u(m)};return Q(x.Fragment,null,n&&Q("div",{onClick:_z,css:kz}),t(f))}var Tz={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Pz=function(t){var n=t.name,r=t.onFocus;return Q("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Tz,value:"",onChange:function(){}})},Oz=Pz;function og(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function jz(){return og(/^iPhone/i)}function UC(){return og(/^Mac/i)}function $z(){return og(/^iPad/i)||UC()&&navigator.maxTouchPoints>1}function Mz(){return jz()||$z()}function Iz(){return UC()||Mz()}var Dz=function(t){return t.label},Lz=function(t){return t.label},Az=function(t){return t.value},Rz=function(t){return!!t.isDisabled},Fz={clearIndicator:bF,container:cF,control:TF,dropdownIndicator:yF,group:$F,groupHeading:IF,indicatorsContainer:pF,indicatorSeparator:SF,input:RF,loadingIndicator:kF,loadingMessage:iF,menu:Q8,menuList:tF,menuPortal:sF,multiValue:VF,multiValueLabel:UF,multiValueRemove:WF,noOptionsMessage:rF,option:KF,placeholder:JF,singleValue:nz,valueContainer:dF},zz={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Nz=4,WC=4,Bz=38,Vz=WC*2,Uz={baseUnit:WC,controlHeight:Bz,menuGutter:Vz},of={borderRadius:Nz,colors:zz,spacing:Uz},Wz={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:L1(),captureMenuScroll:!L1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:yz(),formatGroupLabel:Dz,getOptionLabel:Lz,getOptionValue:Az,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Rz,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!B8(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function q1(e,t,n,r){var i=qC(e,t,n),o=YC(e,t,n),a=GC(e,t),l=gc(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function fl(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return q1(e,a,t,l)}).filter(function(a){return X1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=q1(e,n,t,r);return X1(e,o)?o:void 0}).filter(W8)}function HC(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,eg(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function Y1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,eg(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function Hz(e,t){return HC(fl(e,t))}function X1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!KC(e)||!o)&&XC(e,{label:a,value:l,data:i},r)}function Gz(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function qz(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var af=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},GC=function(t,n){return t.getOptionLabel(n)},gc=function(t,n){return t.getOptionValue(n)};function qC(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function YC(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=gc(e,t);return n.some(function(i){return gc(e,i)===r})}function XC(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var KC=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},Yz=1,QC=function(e){p8(n,e);var t=v8(n);function n(r){var i;if(d8(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var u=i.props,f=u.onChange,v=u.name;c.name=v,i.ariaOnChange(s,c),f(s,c)},i.setValue=function(s,c,u){var f=i.props,v=f.closeMenuOnSelect,m=f.isMulti,p=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:p}),v&&(i.setState({inputIsHiddenAfterUpdate:!m}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:u})},i.selectOption=function(s){var c=i.props,u=c.blurInputOnSelect,f=c.isMulti,v=c.name,m=i.state.selectValue,p=f&&i.isOptionSelected(s,m),y=i.isOptionDisabled(s,m);if(p){var w=i.getOptionValue(s);i.setValue(m.filter(function(h){return i.getOptionValue(h)!==w}),"deselect-option",s)}else if(!y)f?i.setValue([].concat(eg(m),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:v});return}u&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,u=i.state.selectValue,f=i.getOptionValue(s),v=u.filter(function(p){return i.getOptionValue(p)!==f}),m=Ds(c,v,v[0]||null);i.onChange(m,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Ds(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,u=c[c.length-1],f=c.slice(0,c.length-1),v=Ds(s,f,f[0]||null);u&&i.onChange(v,{action:"pop-value",removedValue:u})},i.getFocusedOptionId=function(s){return af(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return Y1(fl(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),u=0;u<s;u++)c[u]=arguments[u];return A8.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return GC(i.props,s)},i.getOptionValue=function(s){return gc(i.props,s)},i.getStyles=function(s,c){var u=i.props.unstyled,f=Fz[s](c,u);f.boxSizing="border-box";var v=i.props.styles[s];return v?v(f,c):f},i.getClassNames=function(s,c){var u,f;return(u=(f=i.props.classNames)[s])===null||u===void 0?void 0:u.call(f,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return az(i.props)},i.buildCategorizedOptions=function(){return fl(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return HC(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:Z({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,u=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!u}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Ru(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,u=c&&c.item(0);u&&(i.initialTouchX=u.clientX,i.initialTouchY=u.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,u=c&&c.item(0);if(u){var f=Math.abs(u.clientX-i.initialTouchX),v=Math.abs(u.clientY-i.initialTouchY),m=5;i.userIsDragging=f>m||v>m}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,u=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(u,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),u=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:u>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return KC(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,u=c.isMulti,f=c.backspaceRemovesValue,v=c.escapeClearsValue,m=c.inputValue,p=c.isClearable,y=c.isDisabled,w=c.menuIsOpen,h=c.onKeyDown,g=c.tabSelectsValue,b=c.openMenuOnFocus,S=i.state,k=S.focusedOption,T=S.focusedValue,E=S.selectValue;if(!y&&!(typeof h=="function"&&(h(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!u||m)return;i.focusValue("previous");break;case"ArrowRight":if(!u||m)return;i.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(T)i.removeValue(T);else{if(!f)return;u?i.popValue():p&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!g||!k||b&&i.isOptionSelected(k,E))return;i.selectOption(k);break;case"Enter":if(s.keyCode===229)break;if(w){if(!k||i.isComposing)return;i.selectOption(k);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:m}),i.onMenuClose()):p&&v&&i.clearValue();break;case" ":if(m)return;if(!w){i.openMenu("first");break}if(!k)return;i.selectOption(k);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++Yz),i.state.selectValue=I1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=af(o,a[l])}return i}return f8(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&D1(this.menuListRef,this.focusedOptionRef),Iz()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(D1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),u=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(l[0]);f>-1&&(u=f)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[u],focusedOptionId:this.getFocusedOptionId(c[u])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,u=-1;if(a.length){switch(i){case"previous":s===0?u=0:s===-1?u=c:u=s-1;break;case"next":s>-1&&s<c&&(u=s+1);break}this.setState({inputIsHidden:u!==-1,focusedValue:a[u]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,c=l.indexOf(a);a||(c=-1),i==="up"?s=c>0?c-1:l.length-1:i==="down"?s=(c+1)%l.length:i==="pageup"?(s=c-o,s<0&&(s=0)):i==="pagedown"?(s=c+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(of):Z(Z({},of),this.props.theme):of}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,c=this.selectOption,u=this.setValue,f=this.props,v=f.isMulti,m=f.isRtl,p=f.options,y=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:y,isMulti:v,isRtl:m,options:p,selectOption:c,selectProps:f,setValue:u,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return qC(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return YC(this.props,i,o)}},{key:"filterOption",value:function(i,o){return XC(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,c=i.tabIndex,u=i.form,f=i.menuIsOpen,v=i.required,m=this.getComponents(),p=m.Input,y=this.state,w=y.inputIsHidden,h=y.ariaSelection,g=this.commonProps,b=l||this.getElementId("input"),S=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?x.createElement(p,J({},g,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:b,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:u,type:"text",value:s},S)):x.createElement(bz,J({id:b,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:hc,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:u,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,c=o.MultiValueRemove,u=o.SingleValue,f=o.Placeholder,v=this.commonProps,m=this.props,p=m.controlShouldRenderValue,y=m.isDisabled,w=m.isMulti,h=m.inputValue,g=m.placeholder,b=this.state,S=b.selectValue,k=b.focusedValue,T=b.isFocused;if(!this.hasValue()||!p)return h?null:x.createElement(f,J({},v,{key:"placeholder",isDisabled:y,isFocused:T,innerProps:{id:this.getElementId("placeholder")}}),g);if(w)return S.map(function(_,$){var M=_===k,A="".concat(i.getOptionLabel(_),"-").concat(i.getOptionValue(_));return x.createElement(a,J({},v,{components:{Container:l,Label:s,Remove:c},isFocused:M,isDisabled:y,key:A,index:$,removeProps:{onClick:function(){return i.removeValue(_)},onTouchEnd:function(){return i.removeValue(_)},onMouseDown:function(j){j.preventDefault()}},data:_}),i.formatOptionLabel(_,"value"))});if(h)return null;var E=S[0];return x.createElement(u,J({},v,{data:E,isDisabled:y}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,u=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,J({},a,{innerProps:f,isFocused:u}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,u=this.state.isFocused;if(!o||!c)return null;var f={"aria-hidden":"true"};return x.createElement(o,J({},a,{innerProps:f,isDisabled:s,isFocused:u}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return x.createElement(a,J({},l,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,J({},a,{innerProps:c,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,c=o.MenuList,u=o.MenuPortal,f=o.LoadingMessage,v=o.NoOptionsMessage,m=o.Option,p=this.commonProps,y=this.state.focusedOption,w=this.props,h=w.captureMenuScroll,g=w.inputValue,b=w.isLoading,S=w.loadingMessage,k=w.minMenuHeight,T=w.maxMenuHeight,E=w.menuIsOpen,_=w.menuPlacement,$=w.menuPosition,M=w.menuPortalTarget,A=w.menuShouldBlockScroll,I=w.menuShouldScrollIntoView,j=w.noOptionsMessage,L=w.onMenuScrollToTop,D=w.onMenuScrollToBottom;if(!E)return null;var F=function(U,W){var Y=U.type,H=U.data,ee=U.isDisabled,pe=U.isSelected,we=U.label,ie=U.value,Ie=y===H,We=ee?void 0:function(){return i.onOptionHover(H)},He=ee?void 0:function(){return i.selectOption(H)},pi="".concat(i.getElementId("option"),"-").concat(W),St={id:pi,onClick:He,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:pe};return x.createElement(m,J({},p,{innerProps:St,data:H,isDisabled:ee,isSelected:pe,key:pi,label:we,type:Y,value:ie,isFocused:Ie,innerRef:Ie?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},R;if(this.hasOptions())R=this.getCategorizedOptions().map(function(B){if(B.type==="group"){var U=B.data,W=B.options,Y=B.index,H="".concat(i.getElementId("group"),"-").concat(Y),ee="".concat(H,"-heading");return x.createElement(a,J({},p,{key:H,data:U,options:W,Heading:l,headingProps:{id:ee,data:B.data},label:i.formatGroupLabel(B.data)}),B.options.map(function(pe){return F(pe,"".concat(Y,"-").concat(pe.index))}))}else if(B.type==="option")return F(B,"".concat(B.index))});else if(b){var P=S({inputValue:g});if(P===null)return null;R=x.createElement(f,p,P)}else{var O=j({inputValue:g});if(O===null)return null;R=x.createElement(v,p,O)}var z={minMenuHeight:k,maxMenuHeight:T,menuPlacement:_,menuPosition:$,menuShouldScrollIntoView:I},N=x.createElement(Z8,J({},p,z),function(B){var U=B.ref,W=B.placerProps,Y=W.placement,H=W.maxHeight;return x.createElement(s,J({},p,z,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:b,placement:Y}),x.createElement(Ez,{captureEnabled:h,onTopArrive:L,onBottomArrive:D,lockEnabled:A},function(ee){return x.createElement(c,J({},p,{innerRef:function(we){i.getMenuListRef(we),ee(we)},innerProps:{role:"listbox","aria-multiselectable":p.isMulti,id:i.getElementId("listbox")},isLoading:b,maxHeight:H,focusedOption:y}),R)}))});return M||$==="fixed"?x.createElement(u,J({},p,{appendTo:M,controlElement:this.controlRef,menuPlacement:_,menuPosition:$}),N):N}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,c=o.name,u=o.required,f=this.state.selectValue;if(u&&!this.hasValue()&&!l)return x.createElement(Oz,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(s)if(a){var v=f.map(function(y){return i.getOptionValue(y)}).join(a);return x.createElement("input",{name:c,type:"hidden",value:v})}else{var m=f.length>0?f.map(function(y,w){return x.createElement("input",{key:"i-".concat(w),name:c,type:"hidden",value:i.getOptionValue(y)})}):x.createElement("input",{name:c,type:"hidden",value:""});return x.createElement("div",null,m)}else{var p=f[0]?this.getOptionValue(f[0]):"";return x.createElement("input",{name:c,type:"hidden",value:p})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,c=o.isFocused,u=o.selectValue,f=this.getFocusableOptions();return x.createElement(hz,J({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:u,focusableOptions:f,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,c=this.props,u=c.className,f=c.id,v=c.isDisabled,m=c.menuIsOpen,p=this.state.isFocused,y=this.commonProps=this.getCommonProps();return x.createElement(l,J({},y,{className:u,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:p}),this.renderLiveRegion(),x.createElement(o,J({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:p,menuIsOpen:m}),x.createElement(s,J({},y,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),x.createElement(a,J({},y,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,u=o.isFocused,f=o.prevWasFocused,v=o.instancePrefix,m=i.options,p=i.value,y=i.menuIsOpen,w=i.inputValue,h=i.isMulti,g=I1(p),b={};if(a&&(p!==a.value||m!==a.options||y!==a.menuIsOpen||w!==a.inputValue)){var S=y?Hz(i,g):[],k=y?Y1(fl(i,g),"".concat(v,"-option")):[],T=l?Gz(o,g):null,E=qz(o,S),_=af(k,E);b={selectValue:g,focusedOption:E,focusedOptionId:_,focusableOptionsWithIds:k,focusedValue:T,clearFocusValueOnUpdate:!1}}var $=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},M=c,A=u&&f;return u&&!A&&(M={value:Ds(h,g,g[0]||null),options:g,action:"initial-input-focus"},A=!f),(c==null?void 0:c.action)==="initial-input-focus"&&(M=null),Z(Z(Z({},b),$),{},{prevProps:i,ariaSelection:M,prevWasFocused:A})}}]),n}(x.Component);QC.defaultProps=Wz;var Xz=x.forwardRef(function(e,t){var n=u8(e);return x.createElement(QC,J({ref:t},n))}),Fu=Xz;const Kz=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Qz=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Zz=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>d.jsxs(Kz,{children:[d.jsx(Qz,{children:"Місто"}),d.jsx(Fu,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),Jz=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,eN=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,tN=({options:e=[],value:t,onChange:n,selectedCity:r})=>d.jsxs(Jz,{children:[d.jsx(eN,{children:"Спосіб доставки"}),d.jsx(Fu,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),K1=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Q1=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,nN=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?d.jsxs(K1,{children:[d.jsx(Q1,{children:"Відділення Нової пошти"}),d.jsx(Fu,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?d.jsxs(K1,{children:[d.jsx(Q1,{children:"Адреса доставки (Укрпошта)"}),d.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,rN=C.div`
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
`;const iN=C.button`
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
`,oN=C.ul`
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
`,aN=C.li`
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
`,sN=C.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,lN=C.div`
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
`,cN=C.div`
  text-align: center;
  width: 100px;
 
`,uN=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,dN=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,fN=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,pN=C.span`
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
`,hN=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>(console.log(n,t),d.jsxs(rN,{children:[d.jsx("h3",{children:"Ваше замовлення"}),d.jsx(oN,{children:e.map((o,a)=>{var f,v;const l=o.new_price&&o.new_price<o.price,s=l?o.new_price:o.price,c=l?Math.round((o.price-o.new_price)/o.price*100):0,u=o.available!==!1?s*(o.quantity||1):0;return d.jsxs(aN,{children:[d.jsx(sN,{src:((v=(f=o.images)==null?void 0:f[0])==null?void 0:v.url)||ri,alt:o.name}),d.jsxs(lN,{children:[d.jsx("p",{className:"item-name",children:o.name}),d.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),d.jsx(cN,{children:d.jsxs(uN,{children:[d.jsxs(dN,{$discount:l,children:[u.toLocaleString()," грн"]}),l&&d.jsxs(d.Fragment,{children:[d.jsxs(fN,{children:[(o.price*(o.quantity||1)).toLocaleString()," грн"]}),d.jsxs(pN,{children:["-",c,"%"]})]})]})})]},`${o.id}-${a}`)})}),d.jsxs("div",{className:"summary-row",children:[d.jsxs("span",{children:["Товари (",n,")"]}),d.jsxs("span",{children:[t," грн"]})]}),d.jsxs("div",{className:"summary-row",children:[d.jsx("span",{children:"Доставка"}),d.jsx("span",{children:"За тарифами перевізника"})]}),d.jsx("hr",{}),d.jsxs("div",{className:"total",children:[d.jsx("span",{children:"Всього до сплати:"}),d.jsxs("span",{children:[t," грн"]})]}),d.jsx(iN,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&d.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]}));var ZC={exports:{}};function mN(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var sf=mN(x),gN=Lc;function vN(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Jp(){return(Jp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function yN(e,t){e.prototype=Object.create(t.prototype),vN(e.prototype.constructor=e,t)}function xN(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function Ci(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var bN=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,l],u=0;(s=new Error(t.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},Z1=bN;function J1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function wN(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var SN={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},CN="_";function ey(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=CN),n==null&&(n=SN),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Vt(e,t){return e.permanents.indexOf(t)!==-1}function zu(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Vt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function ty(e,t){return t.split("").every(function(n,r){return Vt(e,r)||!zu(e,r,n)})}function Zo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Vt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Vt(e,o)&&zu(e,o,a)){i=o+1;break}}return i}function JC(e,t){return Zo(e,t)===e.mask.length}function Un(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=eh(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Vt(e,t.length);)t+=r[t.length];return t}if(t)return eh(e,Un(e,""),t,0);for(var o=0;o<r.length;o++)Vt(e,o)?t+=r[o]:t+=n;return t}function _N(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(u,f){return f<n||i<=f?u:Vt(e,f)?a[f]:o}).join("");for(var c=i;c<s.length;c++)Vt(e,c)&&(s[c]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Un(e,t)}function eh(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=JC(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(c){for(;m=c,Vt(e,v=r)&&m!==i[v];){if(r>=t.length&&(t+=i[r]),u=c,f=r,o&&Vt(e,f)&&u===o)return!0;if(++r>=i.length)return!1}var u,f,v,m;return!zu(e,r,c)&&c!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),Un(e,t)):o||(t+=c),++r<i.length)}),t}function kN(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;u=s,Vt(e,c=r)&&u!==i[c];)if(++r>=i.length)return!1;var c,u;return(zu(e,r,s)||s===o)&&r++,r<i.length}),r-l}function EN(e,t){for(var n=t;0<=n;--n)if(!Vt(e,n))return n;return null}function da(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Vt(e,r))return r;return null}function lf(e){return e||e===0?e+"":""}function TN(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,c="",u=0,f=0,v=Math.min(i.start,n.start);return n.end>i.start?f=(u=kN(e,r,c=s.slice(i.start,n.end),v))?i.length:0:s.length<r.length&&(f=r.length-s.length),s=r,f&&(f===1&&!i.length&&(v=i.start===n.start?da(e,n.start):EN(e,n.start)),s=_N(e,s,v,f)),s=eh(e,s,c,v),(v+=u)>=o.length?v=o.length:v<a.length&&!u?v=a.length:v>=a.length&&v<l&&u&&(v=da(e,v)),c||(c=null),{value:s=Un(e,s),enteredString:c,selection:{start:v,end:v}}}function PN(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function Ct(e){return typeof e=="function"}function ON(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function e_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function ny(e){return(e_()?ON():function(){return setTimeout(e,1e3/60)})(e)}function cf(e){(e_()||clearTimeout)(e)}var jN=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=ny(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(cf(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var p=gN.findDOMNode(Ci(Ci(i))),y=typeof window<"u"&&p instanceof window.Element;if(p&&!y)return null;if(p.nodeName!=="INPUT"&&(p=p.querySelector("input")),!p)throw new Error("react-input-mask: inputComponent doesn't contain input node");return p},i.getInputValue=function(){var p=i.getInputDOMNode();return p?p.value:null},i.setInputValue=function(p){var y=i.getInputDOMNode();y&&(i.value=p,y.value=p)},i.setCursorToEnd=function(){var p=Zo(i.maskOptions,i.value),y=da(i.maskOptions,p);y!==null&&i.setCursorPosition(y)},i.setSelection=function(p,y,w){w===void 0&&(w={});var h=i.getInputDOMNode(),g=i.isFocused();h&&g&&(w.deferred||J1(h,p,y),i.selectionDeferId!==null&&cf(i.selectionDeferId),i.selectionDeferId=ny(function(){i.selectionDeferId=null,J1(h,p,y)}),i.previousSelection={start:p,end:y,length:Math.abs(y-p)})},i.getSelection=function(){return wN(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(p){i.setSelection(p,p)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var p=i.maskOptions,y=p.mask,w=p.maskChar,h=p.permanents,g=p.formatChars;return{mask:y,maskChar:w,permanents:h,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:g}},i.isInputAutofilled=function(p,y,w,h){var g=i.getInputDOMNode();try{if(g.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||h.end<w.length&&y.end===p.length},i.onChange=function(p){var y=Ci(Ci(i)).beforePasteState,w=Ci(Ci(i)).previousSelection,h=i.props.beforeMaskedValueChange,g=i.getInputValue(),b=i.value,S=i.getSelection();i.isInputAutofilled(g,S,b,w)&&(b=Un(i.maskOptions,""),w={start:0,end:0,length:0}),y&&(w=y.selection,b=y.value,S={start:w.start+g.length,end:w.start+g.length,length:0},g=b.slice(0,w.start)+g+b.slice(w.end),i.beforePasteState=null);var k=TN(i.maskOptions,g,S,b,w),T=k.enteredString,E=k.selection,_=k.value;if(Ct(h)){var $=h({value:_,selection:E},{value:b,selection:w},T,i.getBeforeMaskedValueChangeConfig());_=$.value,E=$.selection}i.setInputValue(_),Ct(i.props.onChange)&&i.props.onChange(p),i.isWindowsPhoneBrowser?i.setSelection(E.start,E.end,{deferred:!0}):i.setSelection(E.start,E.end)},i.onFocus=function(p){var y=i.props.beforeMaskedValueChange,w=i.maskOptions,h=w.mask,g=w.prefix;if(i.focused=!0,i.mounted=!0,h){if(i.value)Zo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var b=Un(i.maskOptions,g),S=Un(i.maskOptions,b),k=Zo(i.maskOptions,S),T=da(i.maskOptions,k),E={start:T,end:T};if(Ct(y)){var _=y({value:S,selection:E},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=_.value,E=_.selection}var $=S!==i.getInputValue();$&&i.setInputValue(S),$&&Ct(i.props.onChange)&&i.props.onChange(p),i.setSelection(E.start,E.end)}i.runSaveSelectionLoop()}Ct(i.props.onFocus)&&i.props.onFocus(p)},i.onBlur=function(p){var y=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&ty(i.maskOptions,i.value)){var h="";Ct(y)&&(h=y({value:h,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var g=h!==i.getInputValue();g&&i.setInputValue(h),g&&Ct(i.props.onChange)&&i.props.onChange(p)}Ct(i.props.onBlur)&&i.props.onBlur(p)},i.onMouseDown=function(p){if(!i.focused&&document.addEventListener){i.mouseDownX=p.clientX,i.mouseDownY=p.clientY,i.mouseDownTime=new Date().getTime();var y=function w(h){if(document.removeEventListener("mouseup",w),i.focused){var g=Math.abs(h.clientX-i.mouseDownX),b=Math.abs(h.clientY-i.mouseDownY),S=Math.max(g,b),k=new Date().getTime()-i.mouseDownTime;(S<=10&&k<=200||S<=5&&k<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",y)}Ct(i.props.onMouseDown)&&i.props.onMouseDown(p)},i.onPaste=function(p){Ct(i.props.onPaste)&&i.props.onPaste(p),p.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(p){i.props.children==null&&Ct(i.props.inputRef)&&i.props.inputRef(p)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,c=r.beforeMaskedValueChange,u=r.defaultValue,f=r.value;i.maskOptions=ey(o,a,l),u==null&&(u=""),f==null&&(f=u);var v=lf(f);if(i.maskOptions.mask&&(s||v)&&(v=Un(i.maskOptions,v),Ct(c))){var m=r.value;r.value==null&&(m=u),v=c({value:v,selection:null},{value:m=lf(m),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=v,i}yN(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=PN(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,c=i.formatChars,u=this.maskOptions,f=a||this.isFocused(),v=this.props.value!=null,m=v?lf(this.props.value):this.value,p=r?r.start:null;if(this.maskOptions=ey(l,s,c),this.maskOptions.mask){!u.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==u.mask;if(u.mask||v||(m=this.getInputValue()),(y||this.maskOptions.mask&&(m||f))&&(m=Un(this.maskOptions,m)),y){var w=Zo(this.maskOptions,m);(p===null||w<p)&&(p=JC(this.maskOptions,m)?w:da(this.maskOptions,w))}!this.maskOptions.mask||!ty(this.maskOptions,m)||f||v&&this.props.value||(m="");var h={start:p,end:p};if(Ct(o)){var g=o({value:m,selection:h},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());m=g.value,h=g.selection}this.value=m;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var S=!1;h.start!=null&&h.end!=null&&(S=!r||r.start!==h.start||r.end!==h.end),(S||b)&&this.setSelection(h.start,h.end)}else u.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&cf(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=xN(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){Ct(o)||Z1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Jp({},a);l.forEach(function(u){return delete s[u]}),r=o(s),l.filter(function(u){return r.props[u]!=null&&r.props[u]!==a[u]}).length&&Z1(!1)}else r=sf.createElement("input",Jp({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),r=sf.cloneElement(r,c)},t}(sf.Component),$N=jN;ZC.exports=$N;var MN=ZC.exports;const IN=Na(MN);C.div`
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
`;const uf=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,df=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,ff=C.input`
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
`;const pf=C.span`
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
`;const DN=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return d.jsxs(d.Fragment,{children:[d.jsx("h3",{children:"Контактні дані"}),d.jsxs(uf,{children:[d.jsx(df,{children:"Прізвище та ім’я"}),d.jsx(ff,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&d.jsx(pf,{children:n.fullName})]}),d.jsxs(uf,{children:[d.jsx(df,{children:"Номер телефону"}),d.jsx(IN,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>d.jsx(ff,{...i,type:"tel"})}),n.phone&&d.jsx(pf,{children:n.phone})]}),d.jsxs(uf,{children:[d.jsx(df,{children:"E-mail"}),d.jsx(ff,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&d.jsx(pf,{children:n.email})]})]})},LN=C.div`
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
`;const AN=C.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,RN=C.div`
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
`;const FN=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return d.jsxs("div",{style:{marginBottom:"20px"},children:[d.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),d.jsx(Fu,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&d.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},zN=e=>{if(!e)return"";const t=e.replace(/\D/g,"");return t.length!==10?e:`+38 (${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,8)}-${t.slice(8,10)}`},ry={}.VITE_NP_API_KEY,iy="https://api.novaposhta.ua/v2.0/json/",NN=()=>{const e=Ue(O=>O.cart.items),t=xt(),n=Mt(),r=x.useMemo(()=>{const O=localStorage.getItem("user");return O?JSON.parse(O):null},[]);console.log(r);const[i,o]=x.useState({fullName:"",phone:"+38(0",email:"",city:"",postOffice:""});console.log(i);const[a,l]=x.useState(""),[s,c]=x.useState(null),[u,f]=x.useState(null),[v,m]=x.useState(null),[p,y]=x.useState(null),[w,h]=x.useState([]),[g,b]=x.useState([]),[S,k]=x.useState(null),T=x.useRef(!1);x.useEffect(()=>{!r||T.current||(T.current=!0,o({fullName:`${r.last_name||""} ${r.first_name||""}`.trim(),phone:zN(r.phone),email:r.email||""}))},[r]);const E=e.filter(O=>O.available!==!1).reduce((O,z)=>O+(z.new_price??z.price)*z.quantity,0),_=e.filter(O=>O.available!==!1),$=e.filter(O=>O.available!==!1).reduce((O,z)=>O+z.quantity,0),A=(()=>{const O=new Date().getFullYear().toString().slice(-2),z=Date.now().toString().slice(-4),N=Math.floor(100+Math.random()*900);return`${O}${z}${N}`})();x.useEffect(()=>{if(a.length<2)return;const O=setTimeout(async()=>{const N=await(await fetch(iy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:ry,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:a}})})).json();h(N.data.map(B=>({value:B.Ref,label:B.Description})))},500);return()=>clearTimeout(O)},[a]),x.useEffect(()=>{if(!s||u!=="nova")return;(async()=>{const N=await(await fetch(iy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:ry,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:s.value}})})).json();b(N.data.map(B=>({value:B.Ref,label:B.Description})))})()},[s,u]);const I=O=>{c(O),o(z=>({...z,city:(O==null?void 0:O.label)||"",postOffice:""})),f(null),m(null),y(null)},j=()=>{const O={};return i.fullName.trim().split(" ").length<2&&(O.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email)||(O.email="Некоректний email"),i.phone.replace(/\D/g,"").length<12&&(O.phone="Номер неповний"),s||(O.city=!0),u==="nova"&&!v&&(O.postOffice=!0),u==="ukr"&&!p&&(O.postOffice=!0),u||(O.delivery=!0),S||(O.payment=!0),O},L=x.useMemo(j,[i,u,v,p,s,S]),D=Object.keys(L).length===0&&e.length>0,F=async O=>{if(O.preventDefault(),!S){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:i.fullName,phone:i.phone,email:i.email,city:i.city,products:e==null?void 0:e.map(N=>{var B;return{id:N==null?void 0:N.id,name:N==null?void 0:N.name,quantity:N==null?void 0:N.quantity,price:(N==null?void 0:N.new_price)??N.price,image:(B=N==null?void 0:N.images)==null?void 0:B[0].url}}),status_order:"pending",order_number:A,payment_method:S==="liqpay"?"Онлайн (LiqPay)":S==="cod"?"Післяплата":S==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",delivery_address:u==="nova"?v==null?void 0:v.label:u==="ukr"?p:"Самовивіз"}})}),S==="liqpay"){const N=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:E,order_number:A})}),{data:B,signature:U}=await N.json(),W=document.createElement("form");W.method="POST",W.action="https://www.liqpay.ua/api/3/checkout",W.innerHTML=`
        <input type="hidden" name="data" value="${B}" />
        <input type="hidden" name="signature" value="${U}" />
      `,document.body.appendChild(W),W.requestSubmit();return}const z={...i,name:i.fullName,city:s.label,deliveryMethod:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",address:u==="nova"?v==null?void 0:v.label:u==="ukr"?p:"Самовивіз",products:e==null?void 0:e.map(N=>({id:N.id,name:N.name,quantity:N.quantity,price:N.new_price??N.price})),total:E,order_number:A,delivery_address:u==="nova"?v==null?void 0:v.label:u==="ukr"?p:"Самовивіз",payment_method:S==="liqpay"?"Онлайн (LiqPay)":S==="cod"?"Післяплата":S==="bank_transfer"?"Оплата за реквізитами":""};n(yo()),t("/order-confirmation",{state:{order:z}})}catch(z){console.error(z),alert("Помилка оформлення")}},R=x.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),P=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return d.jsx(LN,{children:d.jsxs(AN,{children:[d.jsxs(RN,{children:[d.jsx(DN,{formData:i,setFormData:o,errors:L}),d.jsx(Zz,{cityOptions:w,selectedCity:s,onChange:I,onInputChange:l}),d.jsx(tN,{options:R,value:u,onChange:f,selectedCity:s}),d.jsx(nN,{deliveryMethod:u,officeOptions:g,selectedOffice:v,selectedUkrOffice:p,setSelectedOffice:m,setSelectedUkrOffice:y}),d.jsx(FN,{options:P,value:S,onChange:k,error:L.payment})]}),d.jsx(hN,{cartItems:_,totalAmount:E,totalQuantity:$,isFormValid:D,handleSubmit:F})]})})},BN=C.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,VN=C.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,Ar=C.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,UN=C.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,WN=C.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,HN=C.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,GN=C.li`
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
`;const qN=C.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,oy=C.button`
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
`,YN=()=>{var v,m;const e=xt(),t=Dn(),[n]=Hk(),r=Mt(),i=(v=t.state)==null?void 0:v.order,o=n.get("orderId"),[a,l]=x.useState(i||null),[s,c]=x.useState(!i);x.useEffect(()=>{r(yo())},[r]),x.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(p=>p.json()).then(p=>{var y;((y=p.data)==null?void 0:y.length)>0&&l(p.data[0]),c(!1)}).catch(()=>c(!1)):c(!1))},[o,i]);const f=((a==null?void 0:a.products)??[]).reduce((p,y)=>p+Number(y.new_price??y.price)*(y.quantity||1),0);return s?d.jsx("div",{children:"Завантаження..."}):a?d.jsxs(BN,{children:[d.jsx(VN,{children:"Дякуємо за ваше замовлення!"}),d.jsxs(Ar,{children:["Ваше замовлення ",d.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),d.jsx(Ar,{children:"Ми зв’яжемось з Вами в найближчий час"}),d.jsxs(UN,{children:[d.jsx(WN,{children:"Деталі замовлення:"}),d.jsx(HN,{children:(m=a.products)==null?void 0:m.map(p=>d.jsxs(GN,{children:[d.jsxs("span",{className:"item-info",children:[p.name," (x",p.quantity,")"]}),d.jsxs("span",{className:"item-price",children:[(p.new_price??p.price)*(p.quantity||1)," грн"]})]},p.id))}),d.jsxs(Ar,{children:[d.jsx("strong",{children:"На суму:"})," ",f," грн."]}),d.jsxs(Ar,{children:[d.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),d.jsxs(Ar,{children:[d.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),d.jsxs(Ar,{children:[d.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),d.jsxs(Ar,{children:[d.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),d.jsxs(qN,{children:[d.jsx(oy,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),d.jsx(oy,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):d.jsxs("div",{children:["Замовлення не знайдено",d.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},XN=C.section`
  background-color: var(--second-background);
`,KN=C.div`
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
`,QN=C.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,ZN=C.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,JN=C.p`

  font-size: 16px;
  color: #666;
`,e7=C.section`
  margin-bottom: 50px;
`,t7=C.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,n7=C.section`
  margin-bottom: 60px;
`,r7=C.h2`
  margin-bottom: 30px;
`,i7=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Ls=C.div`
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
`,o7=()=>d.jsxs(XN,{children:[d.jsxs(KN,{children:[d.jsxs(QN,{children:[d.jsx(ZN,{children:"Про Дідів Хлів"}),d.jsx(JN,{children:"Даємо друге життя якісним велозапчастинам"})]}),d.jsxs(e7,{children:[d.jsx(t7,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),d.jsx(z2,{})]}),d.jsxs(n7,{children:[d.jsx(r7,{children:"Наша майстерня"}),d.jsxs(i7,{children:[d.jsx(Ls,{color:"#e2e2e2",children:"Фото майстерні"}),d.jsx(Ls,{color:"#d1d1d1",children:"Процес діагностики"}),d.jsx(Ls,{color:"#bcbcbc",children:"Склад запчастин"}),d.jsx(Ls,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),a7=()=>{const{pathname:e}=Dn();return x.useEffect(()=>{window.scrollTo(0,0)},[e]),null},s7=C.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,l7=C.div`
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
`,c7=C.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,u7=C.p`
  color: #585555;
  margin-bottom: 40px;
`,d7=C.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,f7=C.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,As=C.div`
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
`,p7=C.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,h7=C.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,m7=C.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,g7=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,ay=C.a`
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
`;const v7=C.div`
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

 
`,y7=()=>d.jsx(s7,{children:d.jsxs(l7,{children:[d.jsx(c7,{children:"Контакти"}),d.jsx(u7,{children:"Зв’яжіться з нами для консультації або замовлення"}),d.jsxs(d7,{children:[d.jsxs(f7,{children:[d.jsxs(As,{children:[d.jsx("h3",{children:"Адреса"}),d.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),d.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),d.jsxs(As,{children:[d.jsx("h3",{children:"Телефон"}),d.jsx("p",{children:"+38 (097) 123-45-67"})]}),d.jsxs(As,{children:[d.jsx("h3",{children:"Email"}),d.jsx("p",{children:"didivhliv.com"})]}),d.jsxs(As,{children:[d.jsx("h3",{children:"Графік роботи"}),d.jsx("p",{children:"З 11:00 - 20:00"}),d.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),d.jsxs(p7,{children:[d.jsx(h7,{children:"Ми в соцмережах"}),d.jsx(m7,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),d.jsxs(g7,{children:[d.jsxs(ay,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[d.jsx("svg",{width:"20px",children:d.jsx("use",{href:`${hn}#icon-instagram`})}),d.jsx("span",{children:"Instagram"})]}),d.jsxs(ay,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[d.jsx("svg",{width:"20px",children:d.jsx("use",{href:`${hn}#icon-telegram`})}),d.jsx("span",{children:"Telegram"})]})]}),d.jsx(v7,{children:"Приєднуйся до спільноти!"})]})]})]})}),x7=C.section`
  background-color:  var(--second-background);
`,b7=C.div`
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
  
`,w7=C.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,S7=C.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,C7=C.div`
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
`,_7=C.div`
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
`,k7=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;

`,E7=C.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,T7=C.p`
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
`;const P7=C.div.attrs({className:"card-buttons"})`
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
`,t_=C.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
  margin-top: auto; 
 padding-top: 40px; 
`,qi=C.button`
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
`,O7=C.div`
  position: relative;
  display: inline-block;
  

`,j7=C.button`
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
`,$7=C.div`
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
`,_i=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,n_=C.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,r_=C(Te)`
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
  
`,M7=C.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,I7=C.div`
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
`,D7=C.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,L7=C.h1`

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

`,A7=C.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,R7=C.div`
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
`;const F7=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 padding: 10px;
`,z7=C.p`
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
`,N7=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px 10px;
`;C.span`
  font-size: 16px;
  font-weight: 700;

  &:last-child {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    font-weight: 400;
  }
`;const B7=C.div.attrs({className:"card-buttons"})`
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
`,vc=C.button`
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
`;const V7=C.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,U7=C.div`
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
`,ki=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,W7=C.button`
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
`,H7=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),i=Ue(k=>k.favorites.items),o=Ue(k=>k.cart.items),[a,l]=x.useState(!1),[s,c]=x.useState("date"),[u,f]=x.useState("asc"),[v,m]=x.useState(1),[p,y]=x.useState(1),w=xt(),h=Mt(),g=x.useRef(null);x.useEffect(()=>{const k=T=>{g.current&&!g.current.contains(T.target)&&l(!1)};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[v]),x.useEffect(()=>{(async()=>{const T=new Date,E=new Date;E.setDate(T.getDate()-7);const _=E.toISOString();try{r(!0);const $=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${_}&pagination[page]=${v}&pagination[pageSize]=24`);if(!$.ok)throw new Error(`HTTP error! Status: ${$.status}`);const M=await $.json();t(M.data),y(M.meta.pagination.pageCount)}catch($){console.error("Помилка при завантаженні продуктів:",$)}finally{r(!1)}})()},[v]);const b=x.useMemo(()=>{const k=[...e],T=E=>E.new_price&&E.new_price<E.price?E.new_price:E.price;switch(s){case"name":return k.sort((E,_)=>u==="asc"?E.name.localeCompare(_.name):_.name.localeCompare(E.name));case"price":return k.sort((E,_)=>{const $=T(E),M=T(_);return u==="asc"?$-M:M-$});case"date":return k.sort((E,_)=>u==="asc"?new Date(E.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(E.createdAt));default:return k}},[s,e,u]),S=(k,T)=>{T.stopPropagation();const E=i.some(_=>_.id===(k==null?void 0:k.id));ui(k,E,h,X)};return n?d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:d.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):b.length===0?d.jsxs(n_,{children:[d.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),d.jsxs(r_,{to:"/catalog",children:[d.jsx("p",{children:"Весь каталог"}),d.jsx(Vc,{size:24})]})]}):d.jsxs(x7,{children:[d.jsxs(b7,{children:[d.jsx(Ln,{autoClose:1500}),d.jsxs(w7,{children:[d.jsx(S7,{children:"Нові товари "}),d.jsxs(O7,{ref:g,children:[d.jsxs(j7,{onClick:()=>l(k=>!k),children:["Сортування",d.jsx(Bc,{strokeWidth:.9,size:22})]}),a&&d.jsxs($7,{children:[d.jsx(_i,{onClick:()=>{c("name"),f("asc"),l(!1)},children:"А-Я"}),d.jsx(_i,{onClick:()=>{c("name"),f("desc"),l(!1)},children:"Я-А"}),d.jsx(_i,{onClick:()=>{c("price"),f("asc"),l(!1)},children:"Ціна ↑"}),d.jsx(_i,{onClick:()=>{c("price"),f("desc"),l(!1)},children:"Ціна ↓"}),d.jsx(_i,{onClick:()=>{c("date"),f("desc"),l(!1)},children:"Спочатку новіші"}),d.jsx(_i,{onClick:()=>{c("date"),f("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),d.jsx(C7,{children:b.map(k=>{var D,F;const T=i.some(R=>R.id===k.id),E=(k==null?void 0:k.available)??!0,_=o.find(R=>R.id===k.id),M=(_?_.quantity:0)>=(k.stock||0),A=k.new_price&&k.new_price<k.price,I=A?k.new_price:k.price,j=A?Math.round((k.price-k.new_price)/k.price*100):0,L=async(R,P)=>{if(P.stopPropagation(),M){X.error("Товар уже у кошику");return}await Za(R,1,h,X)};return d.jsxs(_7,{onClick:()=>w(`/product/${k.slug??k.id}`),children:[!E&&d.jsx(pm,{children:"Бронь"}),d.jsx(hm,{children:"Новинка"}),d.jsx(k7,{src:((F=(D=k.images)==null?void 0:D[0])==null?void 0:F.url)||ri,alt:k.name}),d.jsx(T7,{children:k.name}),d.jsxs(E7,{children:[d.jsx($u,{children:d.jsxs(Mu,{children:[d.jsxs(Iu,{$discount:A,children:[I.toLocaleString()," грн"]}),A&&d.jsxs(Du,{children:[k.price.toLocaleString()," грн"]}),A&&d.jsxs(Lu,{children:["-",j,"%"]})]})}),d.jsxs(P7,{children:[E&&d.jsx(vc,{onClick:R=>L(k,R),children:d.jsx(vo,{size:24,color:_?"var(--orange-color)":"black",strokeWidth:2})}),d.jsx(vc,{onClick:R=>S(k,R),children:d.jsx(Ya,{size:24,fill:T?"#ff4d4f":"none",color:T?"#ff4d4f":"#000000",strokeWidth:T?1:2})})]})]})]},k.id)})}),d.jsxs(t_,{children:[d.jsx(qi,{onClick:()=>m(k=>Math.max(k-1,1)),disabled:v===1,children:"Назад"}),Array.from({length:p},(k,T)=>d.jsx(qi,{onClick:()=>m(T+1),active:v===T+1,children:T+1},T)),d.jsx(qi,{onClick:()=>m(k=>Math.min(k+1,p)),disabled:v===p,children:"Вперед"})]})]})," "]})},G7=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),[i,o]=x.useState(!1),[a,l]=x.useState("date"),[s,c]=x.useState("desc"),[u,f]=x.useState(1),v=24,m=xt(),p=Mt(),y=Ue(_=>_.favorites.items),w=Ue(_=>_.cart.items),h=x.useRef(null);x.useEffect(()=>{const _=$=>{h.current&&!h.current.contains($.target)&&o(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),x.useEffect(()=>{(async()=>{const $="https://backenddidiv-production.up.railway.app";try{const A=await(await fetch(`${$}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json();t(A.data),r(!1)}catch(M){console.log(M)}})()},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[u]);const g=x.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort(($,M)=>s==="asc"?$.name.localeCompare(M.name):M.name.localeCompare($.name));case"price":return _.sort(($,M)=>s==="asc"?$.new_price-M.new_price:M.new_price-$.new_price);case"date":return _.sort(($,M)=>s==="asc"?new Date($.createdAt)-new Date(M.createdAt):new Date(M.createdAt)-new Date($.createdAt));default:return _}},[a,e,s]),b=u*v,S=b-v,k=g.slice(S,b),T=Math.ceil(e.length/v),E=(_,$)=>{$.stopPropagation();const M=y.some(A=>A.id===(_==null?void 0:_.id));ui(_,M,p,X)};return n?d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:d.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?d.jsxs(n_,{children:[d.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),d.jsxs(r_,{to:"/catalog",children:[d.jsx("p",{children:"Весь каталог"}),d.jsx(Vc,{size:24})]})]}):d.jsx(M7,{children:d.jsxs(I7,{children:[d.jsx(Ln,{autoClose:1500}),d.jsxs(D7,{children:[d.jsx(L7,{children:"Акційні товари"}),d.jsxs(V7,{ref:h,children:[d.jsxs(W7,{onClick:()=>o(_=>!_),children:["Сортування",d.jsx(Bc,{strokeWidth:.9,size:22})]}),i&&d.jsxs(U7,{children:[d.jsx(ki,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),d.jsx(ki,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),d.jsx(ki,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),d.jsx(ki,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),d.jsx(ki,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),d.jsx(ki,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),d.jsx(A7,{children:k.map(_=>{var O,z;const $=_.new_price&&_.new_price<_.price,M=_!=null&&_.createdAt?Date.now()-new Date(_.createdAt).getTime()<7*24*60*60*1e3:!1,A=$?_.new_price:_.price,I=(_==null?void 0:_.available)??!0,j=$?Math.round((_.price-_.new_price)/_.price*100):0,L=y.some(N=>N.id===_.id),D=w.find(N=>N.id===_.id),R=(D?D.quantity:0)>=(_.stock||0),P=async(N,B)=>{if(B.stopPropagation(),R){X.error("Товар уже у кошику");return}await Za(_,1,p,X)};return d.jsxs(R7,{onClick:()=>m(`/product/${_.slug??_.id}`),style:{cursor:"pointer"},children:["                ",M&&d.jsx(hm,{children:"Новинка"}),!I&&d.jsx(pm,{children:"Бронь"}),d.jsx(F7,{src:((z=(O=_.images)==null?void 0:O[0])==null?void 0:z.url)||"/nofoto.png"}),d.jsx(z7,{children:_.name}),d.jsxs(N7,{children:[d.jsx($u,{children:d.jsxs(Mu,{children:[d.jsxs(Iu,{$discount:$,children:[A.toLocaleString()," грн"]}),$&&d.jsxs(Du,{children:[_.price.toLocaleString()," грн"]}),$&&d.jsxs(Lu,{children:["-",j,"%"]})]})}),d.jsxs(B7,{children:[I&&d.jsx(vc,{onClick:N=>P(_,N),children:d.jsx(vo,{size:24,color:D?"var(--orange-color)":"black",strokeWidth:2})}),d.jsx(vc,{onClick:N=>E(_,N),children:d.jsx(Ya,{size:24,fill:L?"#ff4d4f":"none",color:L?"#ff4d4f":"#000000",strokeWidth:L?1:2})})]})]})]},_.id)})}),g.length>v&&d.jsxs(t_,{children:[d.jsx(qi,{onClick:()=>f(_=>Math.max(_-1,1)),disabled:u===1,children:"Назад"}),Array.from({length:T},(_,$)=>d.jsx(qi,{onClick:()=>f($+1),active:u===$+1,children:$+1},$)),d.jsx(qi,{onClick:()=>f(_=>Math.min(_+1,T)),disabled:u===T,children:"Вперед"})]})]})})},q7=C.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;

`,Y7=C.div`
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
`,X7=C.button`
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
`,K7=C.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width:768px){
    font-size:42px;
  }
`,Q7=C.p`
  text-align:center;
  color:#8d837d;

  margin-bottom:32px;
`,Z7=C.div`
  display:flex;

  background:#efe8df;

  border-radius:40px;

  padding:5px;

  margin-bottom:35px;
`,sy=C.button`
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
`,Uo=C.input`
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
`,J7=C.button`
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
`,ly=C.div`
  position: relative;
  width: 100%;
 
`,cy=C.button`
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
`,e9=C.p`
  margin-top:28px;

  text-align:center;

  color:#8b817a;

  font-size:15px;

  span{
      color:#ff7a00;
      cursor:pointer;
      font-weight:600;
  }
`,t9=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[product][documentId][$eq]=${r.documentId}&populate=user`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=l.user||[];if(s.some(f=>f.documentId===n))return;const u=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{user:[...s.map(f=>f.documentId),n]}})});u.ok||console.error(await u.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:[n]}})});a.ok||console.error(await a.json())}))},n9=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${n}&filters[product][documentId][$eq]=${r.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{quantity:r.quantity}})});s.ok||console.error(await s.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:n,quantity:r.quantity}})});a.ok||console.error(await a.json())}))},r9=async(e,t)=>{const n=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${t}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${e}`}});if(!n.ok)throw new Error("Не вдалося отримати кошик");return(await n.json()).data.map(i=>i.product?{...i.product,quantity:i.quantity}:null).filter(Boolean)},i9=({isOpen:e,onClose:t,mode:n,setMode:r,localFavorites:i,localCartItems:o})=>{const[a,l]=x.useState(!1),[s,c]=x.useState(!1),[u,f]=x.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),v=Mt();if(x.useEffect(()=>{const h=g=>{g.key==="Escape"&&t()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[t]),!e)return null;const m=h=>{f(g=>({...g,[h.target.name]:h.target.value}))},p=h=>{h.target===h.currentTarget&&t()},y=async()=>{var S;const h=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:u.email,password:u.password})}),g=await h.json();if(!h.ok){alert(((S=g.error)==null?void 0:S.message)||"Помилка авторизації");return}localStorage.setItem("token",g.jwt),localStorage.setItem("user",JSON.stringify(g.user)),await t9(i,g.jwt,g.user.documentId),await n9(o,g.jwt,g.user.documentId);const b=await r9(g.jwt,g.user.documentId);v(tS(b)),t()},w=async()=>{if(u.password!==u.confirmPassword){alert("Паролі не співпадають");return}const g=await(await fetch("https://backenddidiv-production.up.railway.app/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u.email,email:u.email,password:u.password})})).json();localStorage.setItem("token",g.jwt);try{const b=localStorage.getItem("token");if(localStorage.setItem("user",JSON.stringify(g.user)),!(await fetch(`https://backenddidiv-production.up.railway.app/api/users/${g.user.id}`,{method:"PUT",headers:{Authorization:`Bearer ${b}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:u.first_name,last_name:u.last_name})})).ok)throw new Error("Помилка оновлення")}catch(b){console.error(b),alert("Не вдалося оновити дані")}t()};return d.jsxs(d.Fragment,{children:[" ",d.jsx(Ln,{autoClose:1500}),d.jsx(q7,{onClick:p,children:d.jsxs(Y7,{children:[d.jsx(X7,{onClick:t,children:"×"}),d.jsx(K7,{children:n==="login"?"Вхід":"Реєстрація"}),d.jsx(Q7,{children:n==="login"?"Увійдіть до свого акаунта":"Створіть новий акаунт"}),d.jsxs(Z7,{children:[d.jsx(sy,{active:n==="login",onClick:()=>r("login"),children:"Вхід"}),d.jsx(sy,{active:n==="register",onClick:()=>r("register"),children:"Реєстрація"})]}),n==="register"&&d.jsxs(d.Fragment,{children:[d.jsx(Uo,{name:"first_name",value:u.first_name,onChange:m,placeholder:"Ім'я"}),d.jsx(Uo,{name:"last_name",value:u.last_name,onChange:m,placeholder:"Прізвище"})]}),d.jsx(Uo,{name:"email",type:"email",value:u.email,onChange:m,placeholder:"Email"}),d.jsxs(ly,{children:[d.jsx(Uo,{name:"password",type:a?"text":"password",value:u.password,onChange:m,placeholder:"Пароль"}),d.jsx(cy,{type:"button",onClick:()=>l(h=>!h),children:a?d.jsx(q0,{size:20}):d.jsx(Y0,{size:20})})]}),n==="register"&&d.jsxs(ly,{children:[d.jsx(Uo,{name:"confirmPassword",type:s?"text":"password",value:u.confirmPassword,onChange:m,placeholder:"Повторіть пароль"}),d.jsx(cy,{type:"button",onClick:()=>c(h=>!h),children:a?d.jsx(q0,{size:20}):d.jsx(Y0,{size:20})})]}),d.jsx(J7,{onClick:n==="login"?y:w,children:n==="login"?"Увійти":"Зареєструватися"}),d.jsx(e9,{children:n==="login"?d.jsxs(d.Fragment,{children:["Немає акаунта?"," ",d.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):d.jsxs(d.Fragment,{children:["Вже є акаунт?"," ",d.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})," "]})},o9=({isLoggedIn:e,children:t})=>e?t:d.jsx(Mk,{to:"/",replace:!0}),a9=C.main`
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

`,s9=C.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`,l9=C.aside`
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 1440px) {
    position: sticky;
    top: 110px;
  }
`,c9=C.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,u9=C.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,d9=C.h3`
  margin-bottom: 4px;
`,f9=C.p`
  color: #777;
`,uy=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Rs=C(Vy)`
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
`;var ag="persist:",i_="persist/FLUSH",sg="persist/REHYDRATE",o_="persist/PAUSE",a_="persist/PERSIST",s_="persist/PURGE",l_="persist/REGISTER",p9=-1;function pl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pl=function(n){return typeof n}:pl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pl(e)}function dy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function h9(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dy(n,!0).forEach(function(r){m9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dy(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function m9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g9(e,t,n,r){r.debug;var i=h9({},n);return e&&pl(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function v9(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:ag).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(k){return k}:typeof e.serialize=="function"?l=e.serialize:l=y9;var s=e.writeFailHandler||null,c={},u={},f=[],v=null,m=null,p=function(k){Object.keys(k).forEach(function(T){h(T)&&c[T]!==k[T]&&f.indexOf(T)===-1&&f.push(T)}),Object.keys(c).forEach(function(T){k[T]===void 0&&h(T)&&f.indexOf(T)===-1&&c[T]!==void 0&&f.push(T)}),v===null&&(v=setInterval(y,i)),c=k};function y(){if(f.length===0){v&&clearInterval(v),v=null;return}var S=f.shift(),k=r.reduce(function(T,E){return E.in(T,S,c)},c[S]);if(k!==void 0)try{u[S]=l(k)}catch(T){console.error("redux-persist/createPersistoid: error serializing state",T)}else delete u[S];f.length===0&&w()}function w(){Object.keys(u).forEach(function(S){c[S]===void 0&&delete u[S]}),m=a.setItem(o,l(u)).catch(g)}function h(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function g(S){s&&s(S)}var b=function(){for(;f.length!==0;)y();return m||Promise.resolve()};return{update:p,flush:b}}function y9(e){return JSON.stringify(e)}function x9(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:ag).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=b9,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(c,u){return u.out(c,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function b9(e){return JSON.parse(e)}function w9(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:ag).concat(e.key);return t.removeItem(n,S9)}function S9(e){}function fy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function An(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fy(n,!0).forEach(function(r){C9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fy(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function C9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _9(e,t){if(e==null)return{};var n=k9(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function k9(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var E9=5e3;function c_(e,t){var n=e.version!==void 0?e.version:p9;e.debug;var r=e.stateReconciler===void 0?g9:e.stateReconciler,i=e.getStoredState||x9,o=e.timeout!==void 0?e.timeout:E9,a=null,l=!1,s=!0,c=function(f){return f._persist.rehydrated&&a&&!s&&a.update(f),f};return function(u,f){var v=u||{},m=v._persist,p=_9(v,["_persist"]),y=p;if(f.type===a_){var w=!1,h=function(_,$){w||(f.rehydrate(e.key,_,$),w=!0)};if(o&&setTimeout(function(){!w&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=v9(e)),m)return An({},t(y,f),{_persist:m});if(typeof f.rehydrate!="function"||typeof f.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return f.register(e.key),i(e).then(function(E){var _=e.migrate||function($,M){return Promise.resolve($)};_(E,n).then(function($){h($)},function($){h(void 0,$)})},function(E){h(void 0,E)}),An({},t(y,f),{_persist:{version:n,rehydrated:!1}})}else{if(f.type===s_)return l=!0,f.result(w9(e)),An({},t(y,f),{_persist:m});if(f.type===i_)return f.result(a&&a.flush()),An({},t(y,f),{_persist:m});if(f.type===o_)s=!0;else if(f.type===sg){if(l)return An({},y,{_persist:An({},m,{rehydrated:!0})});if(f.key===e.key){var g=t(y,f),b=f.payload,S=r!==!1&&b!==void 0?r(b,u,g,e):g,k=An({},S,{_persist:An({},m,{rehydrated:!0})});return c(k)}}}if(!m)return t(u,f);var T=t(y,f);return T===y?u:c(An({},T,{_persist:m}))}}function py(e){return O9(e)||P9(e)||T9()}function T9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function P9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function O9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function hy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function th(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hy(n,!0).forEach(function(r){j9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hy(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function j9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u_={registry:[],bootstrapped:!1},$9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l_:return th({},t,{registry:[].concat(py(t.registry),[n.key])});case sg:var r=t.registry.indexOf(n.key),i=py(t.registry);return i.splice(r,1),th({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function M9(e,t,n){var r=n||!1,i=gm($9,u_,t&&t.enhancer?t.enhancer:void 0),o=function(c){i.dispatch({type:l_,key:c})},a=function(c,u,f){var v={type:sg,payload:u,err:f,key:c};e.dispatch(v),i.dispatch(v),r&&l.getState().bootstrapped&&(r(),r=!1)},l=th({},i,{purge:function(){var c=[];return e.dispatch({type:s_,result:function(f){c.push(f)}}),Promise.all(c)},flush:function(){var c=[];return e.dispatch({type:i_,result:function(f){c.push(f)}}),Promise.all(c)},pause:function(){e.dispatch({type:o_})},persist:function(){e.dispatch({type:a_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var lg={},cg={};cg.__esModule=!0;cg.default=L9;function hl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hl=function(n){return typeof n}:hl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hl(e)}function hf(){}var I9={getItem:hf,setItem:hf,removeItem:hf};function D9(e){if((typeof self>"u"?"undefined":hl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function L9(e){var t="".concat(e,"Storage");return D9(t)?self[t]:I9}lg.__esModule=!0;lg.default=F9;var A9=R9(cg);function R9(e){return e&&e.__esModule?e:{default:e}}function F9(e){var t=(0,A9.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var ug=void 0,z9=N9(lg);function N9(e){return e&&e.__esModule?e:{default:e}}var B9=(0,z9.default)("local");ug=B9;const V9={key:"cart",storage:ug},U9={key:"favorites",storage:ug},W9=c_(V9,U3),H9=c_(U9,z3),d_=E3({reducer:{cart:W9,favorites:H9},middleware:e=>e({serializableCheck:!1})}),f_=M9(d_),G9=C.div`
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
`,q9=C.div`
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
`,Y9=C.h2`
  margin: 0 0 14px;

  text-align: center;

  color:var(--black-color);
  font-family: var(--second-font);

  font-size: 28px;
  font-weight: 300;
`,X9=C.p`
  margin: 0 auto 32px;
   font-family: var(--second-font);

  max-width: 360px;

  text-align: center;

  color: #3c3734;

  font-size: 16px;
  line-height: 1.6;
`,K9=C.div`
  display: flex;
  gap: 14px;

  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Q9=C.button`
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
`,Z9=C.button`
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
`,p_=({onClose:e,onConfirm:t})=>d.jsx(G9,{onClick:e,children:d.jsxs(q9,{onClick:n=>n.stopPropagation(),children:[d.jsx(Y9,{children:"Вийти з акаунту?"}),d.jsx(X9,{children:"Ви впевнені, що хочете вийти з особистого кабінету?"}),d.jsxs(K9,{children:[d.jsx(Q9,{onClick:e,children:"Скасувати"}),d.jsx(Z9,{onClick:t,children:"Вийти"})]})]})}),J9=()=>{var c,u;const[e,t]=x.useState(""),[n,r]=x.useState(""),[i,o]=x.useState(!1),a=Mt(),l=xt();x.useEffect(()=>{(async()=>{try{const v=localStorage.getItem("token"),p=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${v}`}})).json();t(p.first_name),r(p.email)}catch(v){console.error(v)}})()},[]);const s=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),a(Jw()),a(yo()),await f_.purge(),l("/",{replace:!0})};return d.jsxs(l9,{children:[i&&d.jsx(p_,{onClose:()=>o(!1),onConfirm:s}),d.jsxs(c9,{children:[d.jsx(u9,{children:((u=(c=e||e)==null?void 0:c[0])==null?void 0:u.toUpperCase())||"?"}),d.jsxs("div",{children:[d.jsx(d9,{children:e}),d.jsx(f9,{children:n})]})]}),d.jsxs(uy,{children:[d.jsxs(uy,{children:[d.jsx(Rs,{to:"/account/profile",children:"Особисті дані"}),d.jsx(Rs,{to:"/account/orders",children:"Замовлення"}),d.jsx(Rs,{to:"/account/password",children:"Змінити пароль"})]}),d.jsx(Rs,{as:"button",className:"logout",onClick:()=>o(!0),children:"Вийти"})]})]})};var dg={};dg.match=oB;dg.parse=h_;var eB=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,tB=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,nB=/^(?:(min|max)-)?(.+)/,rB=/(em|rem|px|cm|mm|in|pt|pc)?$/,iB=/(dpi|dpcm|dppx)?$/;function oB(e,t){return h_(e).some(function(n){var r=n.inverse,i=n.type==="all"||t.type===n.type;if(i&&r||!(i||r))return!1;var o=n.expressions.every(function(a){var l=a.feature,s=a.modifier,c=a.value,u=t[l];if(!u)return!1;switch(l){case"orientation":case"scan":return u.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=vy(c),u=vy(u);break;case"resolution":c=gy(c),u=gy(u);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=my(c),u=my(u);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,u=parseInt(u,10)||0;break}switch(s){case"min":return u>=c;case"max":return u<=c;default:return u===c}});return o&&!r||!o&&r})}function h_(e){return e.split(",").map(function(t){t=t.trim();var n=t.match(eB),r=n[1],i=n[2],o=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(l){var s=l.match(tB),c=s[1].toLowerCase().match(nB);return{modifier:c[1],feature:c[2],value:s[2]}}),a})}function my(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function gy(e){var t=parseFloat(e),n=String(e).match(iB)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function vy(e){var t=parseFloat(e),n=String(e).match(rB)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var aB=dg.match,yy=typeof window<"u"?window.matchMedia:null;function sB(e,t,n){var r=this,i;yy&&!n&&(i=yy.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=aB(e,t),this.media=e),this.addListener=o,this.removeListener=a,this.dispose=s;function o(c){i&&i.addListener(c)}function a(c){i&&i.removeListener(c)}function l(c){r.matches=c.matches,r.media=c.media}function s(){i&&i.removeListener(l)}}function lB(e,t,n){return new sB(e,t,n)}var cB=lB;const uB=Na(cB);var dB=/[A-Z]/g,fB=/^ms-/,mf={};function pB(e){return"-"+e.toLowerCase()}function m_(e){if(mf.hasOwnProperty(e))return mf[e];var t=e.replace(dB,pB);return mf[e]=fB.test(t)?"-"+t:t}function hB(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let o=0;o<i;o++){const a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var g_={exports:{}},mB="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",gB=mB,vB=gB;function v_(){}function y_(){}y_.resetWarningCache=v_;var yB=function(){function e(r,i,o,a,l,s){if(s!==vB){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:y_,resetWarningCache:v_};return n.PropTypes=n,n};g_.exports=yB();var xB=g_.exports;const fe=Na(xB),pt=fe.oneOfType([fe.string,fe.number]),fg={all:fe.bool,grid:fe.bool,aural:fe.bool,braille:fe.bool,handheld:fe.bool,print:fe.bool,projection:fe.bool,screen:fe.bool,tty:fe.bool,tv:fe.bool,embossed:fe.bool},x_={orientation:fe.oneOf(["portrait","landscape"]),scan:fe.oneOf(["progressive","interlace"]),aspectRatio:fe.string,deviceAspectRatio:fe.string,height:pt,deviceHeight:pt,width:pt,deviceWidth:pt,color:fe.bool,colorIndex:fe.bool,monochrome:fe.bool,resolution:pt,type:Object.keys(fg)},{type:lV,...bB}=x_,b_={minAspectRatio:fe.string,maxAspectRatio:fe.string,minDeviceAspectRatio:fe.string,maxDeviceAspectRatio:fe.string,minHeight:pt,maxHeight:pt,minDeviceHeight:pt,maxDeviceHeight:pt,minWidth:pt,maxWidth:pt,minDeviceWidth:pt,maxDeviceWidth:pt,minColor:fe.number,maxColor:fe.number,minColorIndex:fe.number,maxColorIndex:fe.number,minMonochrome:fe.number,maxMonochrome:fe.number,minResolution:pt,maxResolution:pt,...bB},wB={...fg,...b_};var SB={all:wB,types:fg,matchers:x_,features:b_};const CB=e=>`not ${e}`,_B=(e,t)=>{const n=m_(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?CB(n):`(${n}: ${t})`},kB=e=>e.join(" and "),EB=e=>{const t=[];return Object.keys(SB.all).forEach(n=>{const r=e[n];r!=null&&t.push(_B(n,r))}),kB(t)},TB=x.createContext(void 0),PB=e=>e.query||EB(e),xy=e=>e?Object.keys(e).reduce((n,r)=>(n[m_(r)]=e[r],n),{}):void 0,w_=()=>{const e=x.useRef(!1);return x.useEffect(()=>{e.current=!0},[]),e.current},OB=e=>{const t=x.useContext(TB),n=()=>xy(e)||xy(t),[r,i]=x.useState(n);return x.useEffect(()=>{const o=n();hB(r,o)||i(o)},[e,t]),r},jB=e=>{const t=()=>PB(e),[n,r]=x.useState(t);return x.useEffect(()=>{const i=t();n!==i&&r(i)},[e]),n},$B=(e,t)=>{const n=()=>uB(e,t||{},!!t),[r,i]=x.useState(n),o=w_();return x.useEffect(()=>{if(o){const a=n();return i(a),()=>{a&&a.dispose()}}},[e,t]),r},MB=e=>{const[t,n]=x.useState(e.matches);return x.useEffect(()=>{const r=i=>{n(i.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},IB=(e,t,n)=>{const r=OB(t),i=jB(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const o=$B(i,r),a=MB(o),l=w_();return x.useEffect(()=>{l&&n&&n(a)},[a]),x.useEffect(()=>()=>{o&&o.dispose()},[]),a},DB=C.div`
  margin-bottom: 24px;
`,LB=C.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,AB=C.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,RB=C.h3`
  margin-bottom: 4px;
`,FB=C.p`
  color: #777;
`,zB=C.button`
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
`,NB=C.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`,Fs=C(Vy)`
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
`,BB=()=>{var p,y;const[e,t]=x.useState(!1),[n,r]=x.useState(!1),[i,o]=x.useState(""),[a,l]=x.useState(""),s=Mt(),c=xt(),u=Dn(),f=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),s(Jw()),s(yo()),await f_.purge(),c("/",{replace:!0})};x.useEffect(()=>{(async()=>{try{const h=localStorage.getItem("token"),b=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${h}`}})).json();o(b.first_name),l(b.email)}catch(h){console.error(h)}})()},[]);const m={"/account":"Особисті дані","/account/profile":"Особисті дані","/account/orders":"Замовлення","/account/favorites":"Обране","/account/password":"Змінити пароль"}[u.pathname]||"Особисті дані";return d.jsxs(DB,{children:[n&&d.jsx(p_,{onClose:()=>r(!1),onConfirm:f}),d.jsxs(LB,{children:[d.jsx(AB,{children:((y=(p=i||i)==null?void 0:p[0])==null?void 0:y.toUpperCase())||"?"}),d.jsxs("div",{children:[d.jsx(RB,{children:i}),d.jsx(FB,{children:a})]})]}),d.jsxs(zB,{onClick:()=>t(w=>!w),children:[m,e?d.jsx(yj,{size:22}):d.jsx(gj,{size:22})]}),e&&d.jsxs(NB,{children:[d.jsx(Fs,{to:"/account/profile",onClick:()=>t(!1),children:"Особисті дані"}),d.jsx(Fs,{to:"/account/orders",onClick:()=>t(!1),children:"Замовлення"}),d.jsx(Fs,{to:"/account/password",onClick:()=>t(!1),children:"Змінити пароль"}),d.jsx(Fs,{className:"logout",onClick:()=>r(!0),children:"Вийти"})]})]})},VB=()=>{const e=IB({maxWidth:767});return d.jsxs(a9,{className:"container",children:[e?d.jsx(BB,{}):d.jsx(J9,{}),d.jsx(s9,{children:d.jsx(Ny,{})})]})},UB=C.div`
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
`,WB=C.h2`
  margin-bottom: 28px;
`,zs=C.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,Ns=C.input`
  height: 52px;

  padding: 0 18px;

  border-radius: 14px;
  border: 1px solid #ddd;

  &:focus {
    outline: none;
    border-color: #ef7d1a;
  }
`,HB=C.button`
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
`,by=()=>{const[e,t]=x.useState({first_name:"",last_name:"",email:"",phone:""}),[n,r]=x.useState({first_name:"",last_name:"",email:"",phone:""}),[i,o]=x.useState(null),[a,l]=x.useState(!0);x.useEffect(()=>{(async()=>{try{const v=localStorage.getItem("token"),p=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${v}`}})).json();o(p.id);const y={first_name:p.first_name||"",last_name:p.last_name||"",email:p.email||"",phone:p.phone||""};r(y),t(y)}catch(v){console.error(v)}finally{l(!1)}})()},[]);const s=f=>{const{name:v,value:m}=f.target;r(p=>({...p,[v]:m}))},c=n.first_name!==e.first_name||n.last_name!==e.last_name||n.phone!==e.phone,u=async()=>{try{const f=localStorage.getItem("token");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/users/${i}`,{method:"PUT",headers:{Authorization:`Bearer ${f}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:n.first_name,last_name:n.last_name,phone:n.phone})})).ok)throw new Error("Помилка оновлення");t(n),X.success("Дані оновлено успішно")}catch(f){console.error(f),X.error("Не вдалось оновити дані")}};return a?d.jsx("p",{children:"Завантаження..."}):d.jsxs(UB,{children:[d.jsx(Ln,{autoClose:1500}),d.jsx(WB,{children:"Особисті дані"}),d.jsxs(zs,{children:["Ім я",d.jsx(Ns,{name:"first_name",value:n.first_name,onChange:s})]}),d.jsxs(zs,{children:["Прізвище",d.jsx(Ns,{name:"last_name",value:n.last_name,onChange:s})]}),d.jsxs(zs,{children:["Email",d.jsx(Ns,{value:n.email,disabled:!0})]}),d.jsxs(zs,{children:["Телефон",d.jsx(Ns,{name:"phone",value:n.phone,onChange:s})]}),d.jsx(HB,{onClick:u,disabled:!c,children:"Зберегти"})]})},GB=C.div`
  width: 100%;
  max-width: 750px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
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
`,qB=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,YB=C.div`
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: left;
`,XB=C.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 24px;
`,KB=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,QB=C.div`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`,ZB=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 8px;

  div {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`,JB=C.span`
  font-weight: 700;
  font-size: 16px;
`,eV=C.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  background-color: ${e=>e.status==="completed"?"#e6f4ea":e.status==="pending"?"#fff0e6":"#f1f3f4"};
  color: ${e=>e.status==="completed"?"#137333":e.status==="pending"?"#d97706":"#5f6368"};
`,tV=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,nV=C.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
  }
`,rV=C.div`
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
`,iV=C.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px dashed #e0e0e0;
  font-size: 13px;
  color: #555;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,oV=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));return x.useEffect(()=>{(async()=>{try{const s=await(await fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[email][$eq]=${encodeURIComponent(o.email)}`,{headers:{Authorization:`Bearer ${i}`}})).json(),c=Array.isArray(s)?s:s.data||[];t(c)}catch(l){console.error("Помилка завантаження замовлень:",l)}finally{r(!1)}})()},[i,o.email]),d.jsx(GB,{children:d.jsx(qB,{children:d.jsxs(YB,{children:[d.jsx(XB,{children:"Мої замовлення"}),n?d.jsx("p",{children:"Завантаження замовлень..."}):e.length===0?d.jsx("p",{children:"У вас поки немає замовлень."}):d.jsx(KB,{children:e.map(a=>{const l=a.attributes||a,s=typeof l.products=="string"?JSON.parse(l.products):l.products||[];return d.jsxs(QB,{children:[d.jsx(ZB,{children:d.jsxs("div",{children:[d.jsxs(JB,{children:["№ ",l.order_number]}),d.jsx(eV,{status:l.status_order,children:l.status_order||"pending"})]})}),d.jsx(tV,{children:s.map(c=>d.jsxs(nV,{children:[d.jsx("img",{src:c.image,alt:c.name}),d.jsxs(rV,{children:[d.jsx("p",{children:c.name}),d.jsxs("span",{children:[c.quantity," шт. × ",c.price," грн"]})]})]},c.id))}),d.jsxs(iV,{children:[l.city&&d.jsxs("span",{children:[d.jsx("b",{children:"Місто:"})," ",l.city]}),l.delivery_method&&d.jsxs("span",{children:[d.jsx("b",{children:"Доставка:"})," ",l.delivery_method]}),l.delivery_address&&d.jsxs("span",{children:[d.jsx("b",{children:"Адреса:"})," ",l.delivery_address]}),l.ttn&&d.jsxs("span",{children:[d.jsx("b",{children:"ТТН:"})," ",l.ttn]})]})]},a.id||l.order_number)})})]})})})};function aV(){const e=Mt(),[t,n]=x.useState(!1),[r,i]=x.useState("login"),o=!!localStorage.getItem("token"),a=localStorage.getItem("token"),l=JSON.parse(localStorage.getItem("user")||"null"),s=l==null?void 0:l.documentId,c=Ue(f=>f.favorites.items),u=Ue(f=>f.cart.items);return x.useEffect(()=>{if(!a||!s)return;(async()=>{const v=localStorage.getItem("token");if(!v)return;const y=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${s}&populate=product.images`,{headers:{Authorization:`Bearer ${v}`}})).json()).data.map(w=>({...w.product,favoriteId:w.id,favoriteDocumentId:w.documentId}));e(F3(y))})()},[s,e,a]),d.jsxs(x5,{children:[d.jsx(tI,{}),d.jsx(a7,{}),d.jsxs(x.Suspense,{fallback:d.jsx(JM,{}),children:[d.jsx(Dk,{children:d.jsxs(De,{path:"/",element:d.jsx(Wj,{openLogin:()=>{i("login"),n(!0)},openRegister:()=>{i("register"),n(!0)}}),children:[d.jsx(De,{index:!0,element:d.jsx(XD,{})}),d.jsx(De,{path:"catalog",element:d.jsx(p5,{})}),d.jsx(De,{path:"/catalog/:category",element:d.jsx(N6,{})}),d.jsx(De,{path:"/product/:identifier",element:d.jsx(eR,{})}),d.jsx(De,{path:"cart",element:d.jsx(WR,{})}),d.jsx(De,{path:"favorite",element:d.jsx(QR,{})}),d.jsx(De,{path:"/catalog/new",element:d.jsx(H7,{})}),d.jsx(De,{path:"/catalog/sale",element:d.jsx(G7,{})}),d.jsx(De,{path:"checkout",element:d.jsx(NN,{})}),d.jsx(De,{path:"/order-confirmation",element:d.jsx(YN,{})}),d.jsx(De,{path:"about",element:d.jsx(o7,{})}),d.jsx(De,{path:"contacts",element:d.jsx(y7,{})}),d.jsx(De,{path:"delivery",element:d.jsx(r8,{})}),d.jsxs(De,{path:"account",element:d.jsx(o9,{isLoggedIn:o,children:d.jsx(VB,{})}),children:[d.jsx(De,{index:!0,element:d.jsx(by,{})}),d.jsx(De,{path:"profile",element:d.jsx(by,{})}),d.jsx(De,{path:"orders",element:d.jsx(oV,{})})]}),d.jsx(De,{path:"*",element:d.jsx(y5,{})})]})}),d.jsx(i9,{localFavorites:c,localCartItems:u,isOpen:t,mode:r,onClose:()=>n(!1),setMode:i})]})]})}bf.createRoot(document.getElementById("root")).render(d.jsx(UO,{store:d_,children:d.jsx(K.StrictMode,{children:d.jsx(Bk,{basename:"/Didiv/",children:d.jsx(aV,{})})})}));
