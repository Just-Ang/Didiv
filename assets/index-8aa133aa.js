function d_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Tt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var D1={exports:{}},nu={},L1={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),f_=Symbol.for("react.portal"),p_=Symbol.for("react.fragment"),h_=Symbol.for("react.strict_mode"),m_=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),v_=Symbol.for("react.context"),y_=Symbol.for("react.forward_ref"),x_=Symbol.for("react.suspense"),b_=Symbol.for("react.memo"),w_=Symbol.for("react.lazy"),Wm=Symbol.iterator;function S_(e){return e===null||typeof e!="object"?null:(e=Wm&&e[Wm]||e["@@iterator"],typeof e=="function"?e:null)}var A1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R1=Object.assign,F1={};function to(e,t,n){this.props=e,this.context=t,this.refs=F1,this.updater=n||A1}to.prototype.isReactComponent={};to.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};to.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N1(){}N1.prototype=to.prototype;function Lp(e,t,n){this.props=e,this.context=t,this.refs=F1,this.updater=n||A1}var Ap=Lp.prototype=new N1;Ap.constructor=Lp;R1(Ap,to.prototype);Ap.isPureReactComponent=!0;var Gm=Array.isArray,z1=Object.prototype.hasOwnProperty,Rp={current:null},B1={key:!0,ref:!0,__self:!0,__source:!0};function V1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)z1.call(t,r)&&!B1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Oa,type:e,key:o,ref:a,props:i,_owner:Rp.current}}function __(e,t){return{$$typeof:Oa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oa}function C_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ym=/\/+/g;function wc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?C_(""+e.key):t.toString(36)}function Ps(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Oa:case f_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+wc(a,0):r,Gm(i)?(n="",e!=null&&(n=e.replace(Ym,"$&/")+"/"),Ps(i,t,n,"",function(u){return u})):i!=null&&(Fp(i)&&(i=__(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ym,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Gm(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+wc(o,l);a+=Ps(o,t,n,s,i)}else if(s=S_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+wc(o,l++),a+=Ps(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ka(e,t,n){if(e==null)return e;var r=[],i=0;return Ps(e,r,"","",function(o){return t.call(n,o,i++)}),r}function E_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},Os={transition:null},k_={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Os,ReactCurrentOwner:Rp};re.Children={map:Ka,forEach:function(e,t,n){Ka(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ka(e,function(){t++}),t},toArray:function(e){return Ka(e,function(t){return t})||[]},only:function(e){if(!Fp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=to;re.Fragment=p_;re.Profiler=m_;re.PureComponent=Lp;re.StrictMode=h_;re.Suspense=x_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=R1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Rp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)z1.call(t,s)&&!B1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Oa,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:v_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:g_,_context:e},e.Consumer=e};re.createElement=V1;re.createFactory=function(e){var t=V1.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:y_,render:e}};re.isValidElement=Fp;re.lazy=function(e){return{$$typeof:w_,_payload:{_status:-1,_result:e},_init:E_}};re.memo=function(e,t){return{$$typeof:b_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Os.transition;Os.transition={};try{e()}finally{Os.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return ht.current.useCallback(e,t)};re.useContext=function(e){return ht.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};re.useEffect=function(e,t){return ht.current.useEffect(e,t)};re.useId=function(){return ht.current.useId()};re.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return ht.current.useMemo(e,t)};re.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};re.useRef=function(e){return ht.current.useRef(e)};re.useState=function(e){return ht.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return ht.current.useTransition()};re.version="18.2.0";L1.exports=re;var b=L1.exports;const q=Dp(b),Yd=d_({__proto__:null,default:q},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_=b,P_=Symbol.for("react.element"),O_=Symbol.for("react.fragment"),M_=Object.prototype.hasOwnProperty,j_=T_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$_={key:!0,ref:!0,__self:!0,__source:!0};function U1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)M_.call(t,r)&&!$_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:P_,type:e,key:o,ref:a,props:i,_owner:j_.current}}nu.Fragment=O_;nu.jsx=U1;nu.jsxs=U1;D1.exports=nu;var h=D1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ea.apply(this,arguments)}var lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lr||(lr={}));const qm="popstate";function I_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return qd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nl(i)}return L_(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Np(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function D_(){return Math.random().toString(36).substr(2,8)}function Xm(e,t){return{usr:e.state,key:e.key,idx:t}}function qd(e,t,n,r){return n===void 0&&(n=null),ea({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?no(t):t,{state:n,key:t&&t.key||r||D_()})}function nl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function no(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function L_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=lr.Pop,s=null,u=d();u==null&&(u=0,a.replaceState(ea({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function c(){l=lr.Pop;let w=d(),p=w==null?null:w-u;u=w,s&&s({action:l,location:v.location,delta:p})}function y(w,p){l=lr.Push;let g=qd(v.location,w,p);n&&n(g,w),u=d()+1;let x=Xm(g,u),S=v.createHref(g);try{a.pushState(x,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&s&&s({action:l,location:v.location,delta:1})}function f(w,p){l=lr.Replace;let g=qd(v.location,w,p);n&&n(g,w),u=d();let x=Xm(g,u),S=v.createHref(g);a.replaceState(x,"",S),o&&s&&s({action:l,location:v.location,delta:0})}function m(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof w=="string"?w:nl(w);return Le(p,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,p)}let v={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(qm,c),s=w,()=>{i.removeEventListener(qm,c),s=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let p=m(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:y,replace:f,go(w){return a.go(w)}};return v}var Km;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Km||(Km={}));function A_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?no(t):t,i=zp(r.pathname||"/",n);if(i==null)return null;let o=H1(e);R_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=G_(o[l],X_(i));return a}function H1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=pr([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),H1(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:H_(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of W1(o.path))i(o,a,s)}),t}function W1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=W1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function R_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:W_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const F_=/^:\w+$/,N_=3,z_=2,B_=1,V_=10,U_=-2,Qm=e=>e==="*";function H_(e,t){let n=e.split("/"),r=n.length;return n.some(Qm)&&(r+=U_),t&&(r+=z_),n.filter(i=>!Qm(i)).reduce((i,o)=>i+(F_.test(o)?N_:o===""?B_:V_),r)}function W_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function G_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Y_({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;o.push({params:r,pathname:pr([i,d.pathname]),pathnameBase:J_(pr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=pr([i,d.pathnameBase]))}return o}function Y_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=q_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let y=l[c]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return u[d]=K_(l[c]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function q_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Np(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function X_(e){try{return decodeURI(e)}catch(t){return Np(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function K_(e,t){try{return decodeURIComponent(e)}catch(n){return Np(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function zp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Q_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?no(e):e;return{pathname:n?n.startsWith("/")?n:Z_(n,t):t,search:eC(r),hash:tC(i)}}function Z_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function G1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Y1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=no(e):(i=ea({},e),Le(!i.pathname||!i.pathname.includes("?"),Sc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),Sc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),Sc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let c=t.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),c-=1;i.pathname=y.join("/")}l=c>=0?t[c]:"/"}let s=Q_(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const pr=e=>e.join("/").replace(/\/\/+/g,"/"),J_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),eC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,tC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function nC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const q1=["post","put","patch","delete"];new Set(q1);const rC=["get",...q1];new Set(rC);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rl.apply(this,arguments)}const Bp=b.createContext(null),iC=b.createContext(null),ro=b.createContext(null),ru=b.createContext(null),qn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),X1=b.createContext(null);function oC(e,t){let{relative:n}=t===void 0?{}:t;Ma()||Le(!1);let{basename:r,navigator:i}=b.useContext(ro),{hash:o,pathname:a,search:l}=Z1(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:pr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Ma(){return b.useContext(ru)!=null}function ni(){return Ma()||Le(!1),b.useContext(ru).location}function K1(e){b.useContext(ro).static||b.useLayoutEffect(e)}function Xn(){let{isDataRoute:e}=b.useContext(qn);return e?bC():aC()}function aC(){Ma()||Le(!1);let e=b.useContext(Bp),{basename:t,navigator:n}=b.useContext(ro),{matches:r}=b.useContext(qn),{pathname:i}=ni(),o=JSON.stringify(G1(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return K1(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=Y1(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pr([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const sC=b.createContext(null);function lC(e){let t=b.useContext(qn).outlet;return t&&b.createElement(sC.Provider,{value:e},t)}function Q1(){let{matches:e}=b.useContext(qn),t=e[e.length-1];return t?t.params:{}}function Z1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(qn),{pathname:i}=ni(),o=JSON.stringify(G1(r).map(a=>a.pathnameBase));return b.useMemo(()=>Y1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function uC(e,t){return cC(e,t)}function cC(e,t,n){Ma()||Le(!1);let{navigator:r}=b.useContext(ro),{matches:i}=b.useContext(qn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=ni(),u;if(t){var d;let v=typeof t=="string"?no(t):t;l==="/"||(d=v.pathname)!=null&&d.startsWith(l)||Le(!1),u=v}else u=s;let c=u.pathname||"/",y=l==="/"?c:c.slice(l.length)||"/",f=A_(e,{pathname:y}),m=mC(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:pr([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:pr([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&m?b.createElement(ru.Provider,{value:{location:rl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lr.Pop}},m):m}function dC(){let e=xC(),t=nC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const fC=b.createElement(dC,null);class pC extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(qn.Provider,{value:this.props.routeContext},b.createElement(X1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hC(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Bp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(qn.Provider,{value:t},r)}function mC(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,c=null;n&&(c=s.route.errorElement||fC);let y=t.concat(o.slice(0,u+1)),f=()=>{let m;return d?m=c:s.route.Component?m=b.createElement(s.route.Component,null):s.route.element?m=s.route.element:m=l,b.createElement(hC,{match:s,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:m})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(pC,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:f(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):f()},null)}var J1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(J1||{}),il=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(il||{});function gC(e){let t=b.useContext(Bp);return t||Le(!1),t}function vC(e){let t=b.useContext(iC);return t||Le(!1),t}function yC(e){let t=b.useContext(qn);return t||Le(!1),t}function ey(e){let t=yC(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function xC(){var e;let t=b.useContext(X1),n=vC(il.UseRouteError),r=ey(il.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function bC(){let{router:e}=gC(J1.UseNavigateStable),t=ey(il.UseNavigateStable),n=b.useRef(!1);return K1(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,rl({fromRouteId:t},o)))},[e,t])}function wC(e){return lC(e.context)}function ut(e){Le(!1)}function SC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=lr.Pop,navigator:o,static:a=!1}=e;Ma()&&Le(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=no(r));let{pathname:u="/",search:d="",hash:c="",state:y=null,key:f="default"}=r,m=b.useMemo(()=>{let v=zp(u,l);return v==null?null:{location:{pathname:v,search:d,hash:c,state:y,key:f},navigationType:i}},[l,u,d,c,y,f,i]);return m==null?null:b.createElement(ro.Provider,{value:s},b.createElement(ru.Provider,{children:n,value:m}))}function _C(e){let{children:t,location:n}=e;return uC(Xd(t),n)}new Promise(()=>{});function Xd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Xd(r.props.children,o));return}r.type!==ut&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Xd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kd(){return Kd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kd.apply(this,arguments)}function CC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function EC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function kC(e,t){return e.button===0&&(!t||t==="_self")&&!EC(e)}function Qd(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function TC(e,t){let n=Qd(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const PC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],OC="startTransition",Zm=Yd[OC];function MC(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=I_({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(c=>{u&&Zm?Zm(()=>s(c)):s(c)},[s,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.createElement(SC,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const jC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$C=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oe=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:d}=t,c=CC(t,PC),{basename:y}=b.useContext(ro),f,m=!1;if(typeof u=="string"&&$C.test(u)&&(f=u,jC))try{let g=new URL(window.location.href),x=u.startsWith("//")?new URL(g.protocol+u):new URL(u),S=zp(x.pathname,y);x.origin===g.origin&&S!=null?u=S+x.search+x.hash:m=!0}catch{}let v=oC(u,{relative:i}),w=IC(u,{replace:a,state:l,target:s,preventScrollReset:d,relative:i});function p(g){r&&r(g),g.defaultPrevented||w(g)}return b.createElement("a",Kd({},c,{href:f||v,onClick:m||o?r:p,ref:n,target:s}))});var Jm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Jm||(Jm={}));var eg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(eg||(eg={}));function IC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Xn(),s=ni(),u=Z1(e,{relative:a});return b.useCallback(d=>{if(kC(d,n)){d.preventDefault();let c=r!==void 0?r:nl(s)===nl(u);l(e,{replace:c,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}function DC(e){let t=b.useRef(Qd(e)),n=b.useRef(!1),r=ni(),i=b.useMemo(()=>TC(r.search,n.current?null:t.current),[r.search]),o=Xn(),a=b.useCallback((l,s)=>{const u=Qd(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,s)},[o,i]);return[i,a]}var Zd={},ty={exports:{}},Ft={},ny={exports:{}},ry={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,$){var N=P.length;P.push($);e:for(;0<N;){var B=N-1>>>1,z=P[B];if(0<i(z,$))P[B]=$,P[N]=z,N=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var $=P[0],N=P.pop();if(N!==$){P[0]=N;e:for(var B=0,z=P.length,U=z>>>1;B<U;){var G=2*(B+1)-1,Y=P[G],X=G+1,ee=P[X];if(0>i(Y,N))X<z&&0>i(ee,Y)?(P[B]=ee,P[X]=N,B=X):(P[B]=Y,P[G]=N,B=G);else if(X<z&&0>i(ee,N))P[B]=ee,P[X]=N,B=X;else break e}}return $}function i(P,$){var N=P.sortIndex-$.sortIndex;return N!==0?N:P.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,c=null,y=3,f=!1,m=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=P)r(u),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(u)}}function S(P){if(v=!1,x(P),!m)if(n(s)!==null)m=!0,j(C);else{var $=n(u);$!==null&&F(S,$.startTime-P)}}function C(P,$){m=!1,v&&(v=!1,p(E),E=-1),f=!0;var N=y;try{for(x($),c=n(s);c!==null&&(!(c.expirationTime>$)||P&&!A());){var B=c.callback;if(typeof B=="function"){c.callback=null,y=c.priorityLevel;var z=B(c.expirationTime<=$);$=e.unstable_now(),typeof z=="function"?c.callback=z:c===n(s)&&r(s),x($)}else r(s);c=n(s)}if(c!==null)var U=!0;else{var G=n(u);G!==null&&F(S,G.startTime-$),U=!1}return U}finally{c=null,y=N,f=!1}}var T=!1,_=null,E=-1,L=5,D=-1;function A(){return!(e.unstable_now()-D<L)}function O(){if(_!==null){var P=e.unstable_now();D=P;var $=!0;try{$=_(!0,P)}finally{$?I():(T=!1,_=null)}}else T=!1}var I;if(typeof g=="function")I=function(){g(O)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,M=R.port2;R.port1.onmessage=O,I=function(){M.postMessage(null)}}else I=function(){w(O,0)};function j(P){_=P,T||(T=!0,I())}function F(P,$){E=w(function(){P(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){m||f||(m=!0,j(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(y){case 1:case 2:case 3:var $=3;break;default:$=y}var N=y;y=$;try{return P()}finally{y=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,$){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var N=y;y=P;try{return $()}finally{y=N}},e.unstable_scheduleCallback=function(P,$,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,P){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,P={id:d++,callback:$,priorityLevel:P,startTime:N,expirationTime:z,sortIndex:-1},N>B?(P.sortIndex=N,t(u,P),n(s)===null&&P===n(u)&&(v?(p(E),E=-1):v=!0,F(S,N-B))):(P.sortIndex=z,t(s,P),m||f||(m=!0,j(C))),P},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(P){var $=y;return function(){var N=y;y=$;try{return P.apply(this,arguments)}finally{y=N}}}})(ry);ny.exports=ry;var LC=ny.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy=b,At=LC;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oy=new Set,ta={};function ri(e,t){Ni(e,t),Ni(e+"Capture",t)}function Ni(e,t){for(ta[e]=t,e=0;e<t.length;e++)oy.add(t[e])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=Object.prototype.hasOwnProperty,AC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tg={},ng={};function RC(e){return Jd.call(ng,e)?!0:Jd.call(tg,e)?!1:AC.test(e)?ng[e]=!0:(tg[e]=!0,!1)}function FC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function NC(e,t,n,r){if(t===null||typeof t>"u"||FC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ze[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ze[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ze[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ze[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ze[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ze[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ze[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ze[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ze[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vp=/[\-:]([a-z])/g;function Up(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vp,Up);Ze[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vp,Up);Ze[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vp,Up);Ze[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ze[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ze[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hp(e,t,n,r){var i=Ze.hasOwnProperty(t)?Ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(NC(t,n,i,r)&&(n=null),r||i===null?RC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kn=iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),xi=Symbol.for("react.portal"),bi=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),sy=Symbol.for("react.context"),Gp=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.suspense_list"),Yp=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),ly=Symbol.for("react.offscreen"),rg=Symbol.iterator;function vo(e){return e===null||typeof e!="object"?null:(e=rg&&e[rg]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,_c;function $o(e){if(_c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_c=t&&t[1]||""}return`
`+_c+e}var Cc=!1;function Ec(e,t){if(!e||Cc)return"";Cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Cc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$o(e):""}function zC(e){switch(e.tag){case 5:return $o(e.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return e=Ec(e.type,!1),e;case 11:return e=Ec(e.type.render,!1),e;case 1:return e=Ec(e.type,!0),e;default:return""}}function rf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bi:return"Fragment";case xi:return"Portal";case ef:return"Profiler";case Wp:return"StrictMode";case tf:return"Suspense";case nf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sy:return(e.displayName||"Context")+".Consumer";case ay:return(e._context.displayName||"Context")+".Provider";case Gp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yp:return t=e.displayName||null,t!==null?t:rf(e.type)||"Memo";case ir:t=e._payload,e=e._init;try{return rf(e(t))}catch{}}return null}function BC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rf(t);case 8:return t===Wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function VC(e){var t=uy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Za(e){e._valueTracker||(e._valueTracker=VC(e))}function cy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function of(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ig(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_r(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dy(e,t){t=t.checked,t!=null&&Hp(e,"checked",t,!1)}function af(e,t){dy(e,t);var n=_r(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sf(e,t.type,n):t.hasOwnProperty("defaultValue")&&sf(e,t.type,_r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function og(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sf(e,t,n){(t!=="number"||ol(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Io=Array.isArray;function ji(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_r(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function lf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ag(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Io(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_r(n)}}function fy(e,t){var n=_r(t.value),r=_r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function py(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?py(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ja,hy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ja.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UC=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(e){UC.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bo[t]=Bo[e]})});function my(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bo.hasOwnProperty(e)&&Bo[e]?(""+t).trim():t+"px"}function gy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=my(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var HC=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cf(e,t){if(t){if(HC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function df(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function qp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pf=null,$i=null,Ii=null;function lg(e){if(e=Ia(e)){if(typeof pf!="function")throw Error(V(280));var t=e.stateNode;t&&(t=lu(t),pf(e.stateNode,e.type,t))}}function vy(e){$i?Ii?Ii.push(e):Ii=[e]:$i=e}function yy(){if($i){var e=$i,t=Ii;if(Ii=$i=null,lg(e),t)for(e=0;e<t.length;e++)lg(t[e])}}function xy(e,t){return e(t)}function by(){}var kc=!1;function wy(e,t,n){if(kc)return e(t,n);kc=!0;try{return xy(e,t,n)}finally{kc=!1,($i!==null||Ii!==null)&&(by(),yy())}}function ra(e,t){var n=e.stateNode;if(n===null)return null;var r=lu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var hf=!1;if(Vn)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){hf=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{hf=!1}function WC(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Vo=!1,al=null,sl=!1,mf=null,GC={onError:function(e){Vo=!0,al=e}};function YC(e,t,n,r,i,o,a,l,s){Vo=!1,al=null,WC.apply(GC,arguments)}function qC(e,t,n,r,i,o,a,l,s){if(YC.apply(this,arguments),Vo){if(Vo){var u=al;Vo=!1,al=null}else throw Error(V(198));sl||(sl=!0,mf=u)}}function ii(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ug(e){if(ii(e)!==e)throw Error(V(188))}function XC(e){var t=e.alternate;if(!t){if(t=ii(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ug(i),e;if(o===r)return ug(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function _y(e){return e=XC(e),e!==null?Cy(e):null}function Cy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cy(e);if(t!==null)return t;e=e.sibling}return null}var Ey=At.unstable_scheduleCallback,cg=At.unstable_cancelCallback,KC=At.unstable_shouldYield,QC=At.unstable_requestPaint,Me=At.unstable_now,ZC=At.unstable_getCurrentPriorityLevel,Xp=At.unstable_ImmediatePriority,ky=At.unstable_UserBlockingPriority,ll=At.unstable_NormalPriority,JC=At.unstable_LowPriority,Ty=At.unstable_IdlePriority,iu=null,_n=null;function eE(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(iu,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:rE,tE=Math.log,nE=Math.LN2;function rE(e){return e>>>=0,e===0?32:31-(tE(e)/nE|0)|0}var es=64,ts=4194304;function Do(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Do(l):(o&=a,o!==0&&(r=Do(o)))}else a=n&~i,a!==0?r=Do(a):o!==0&&(r=Do(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),i=1<<n,r|=e[n],t&=~i;return r}function iE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-an(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=iE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function gf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Py(){var e=es;return es<<=1,!(es&4194240)&&(es=64),e}function Tc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ja(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function aE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Kp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function Oy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var My,Qp,jy,$y,Iy,vf=!1,ns=[],hr=null,mr=null,gr=null,ia=new Map,oa=new Map,ar=[],sE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dg(e,t){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":ia.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(t.pointerId)}}function xo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ia(t),t!==null&&Qp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lE(e,t,n,r,i){switch(t){case"focusin":return hr=xo(hr,e,t,n,r,i),!0;case"dragenter":return mr=xo(mr,e,t,n,r,i),!0;case"mouseover":return gr=xo(gr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ia.set(o,xo(ia.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,oa.set(o,xo(oa.get(o)||null,e,t,n,r,i)),!0}return!1}function Dy(e){var t=Nr(e.target);if(t!==null){var n=ii(t);if(n!==null){if(t=n.tag,t===13){if(t=Sy(n),t!==null){e.blockedOn=t,Iy(e.priority,function(){jy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ff=r,n.target.dispatchEvent(r),ff=null}else return t=Ia(n),t!==null&&Qp(t),e.blockedOn=n,!1;t.shift()}return!0}function fg(e,t,n){Ms(e)&&n.delete(t)}function uE(){vf=!1,hr!==null&&Ms(hr)&&(hr=null),mr!==null&&Ms(mr)&&(mr=null),gr!==null&&Ms(gr)&&(gr=null),ia.forEach(fg),oa.forEach(fg)}function bo(e,t){e.blockedOn===t&&(e.blockedOn=null,vf||(vf=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,uE)))}function aa(e){function t(i){return bo(i,e)}if(0<ns.length){bo(ns[0],e);for(var n=1;n<ns.length;n++){var r=ns[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hr!==null&&bo(hr,e),mr!==null&&bo(mr,e),gr!==null&&bo(gr,e),ia.forEach(t),oa.forEach(t),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Dy(n),n.blockedOn===null&&ar.shift()}var Di=Kn.ReactCurrentBatchConfig,cl=!0;function cE(e,t,n,r){var i=he,o=Di.transition;Di.transition=null;try{he=1,Zp(e,t,n,r)}finally{he=i,Di.transition=o}}function dE(e,t,n,r){var i=he,o=Di.transition;Di.transition=null;try{he=4,Zp(e,t,n,r)}finally{he=i,Di.transition=o}}function Zp(e,t,n,r){if(cl){var i=yf(e,t,n,r);if(i===null)Rc(e,t,r,dl,n),dg(e,r);else if(lE(i,e,t,n,r))r.stopPropagation();else if(dg(e,r),t&4&&-1<sE.indexOf(e)){for(;i!==null;){var o=Ia(i);if(o!==null&&My(o),o=yf(e,t,n,r),o===null&&Rc(e,t,r,dl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Rc(e,t,r,null,n)}}var dl=null;function yf(e,t,n,r){if(dl=null,e=qp(r),e=Nr(e),e!==null)if(t=ii(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dl=e,null}function Ly(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZC()){case Xp:return 1;case ky:return 4;case ll:case JC:return 16;case Ty:return 536870912;default:return 16}default:return 16}}var ur=null,Jp=null,js=null;function Ay(){if(js)return js;var e,t=Jp,n=t.length,r,i="value"in ur?ur.value:ur.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return js=i.slice(e,1<r?1-r:void 0)}function $s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rs(){return!0}function pg(){return!1}function Nt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?rs:pg,this.isPropagationStopped=pg,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rs)},persist:function(){},isPersistent:rs}),t}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eh=Nt(io),$a=ke({},io,{view:0,detail:0}),fE=Nt($a),Pc,Oc,wo,ou=ke({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:th,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wo&&(wo&&e.type==="mousemove"?(Pc=e.screenX-wo.screenX,Oc=e.screenY-wo.screenY):Oc=Pc=0,wo=e),Pc)},movementY:function(e){return"movementY"in e?e.movementY:Oc}}),hg=Nt(ou),pE=ke({},ou,{dataTransfer:0}),hE=Nt(pE),mE=ke({},$a,{relatedTarget:0}),Mc=Nt(mE),gE=ke({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),vE=Nt(gE),yE=ke({},io,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xE=Nt(yE),bE=ke({},io,{data:0}),mg=Nt(bE),wE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_E={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_E[e])?!!t[e]:!1}function th(){return CE}var EE=ke({},$a,{key:function(e){if(e.key){var t=wE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?SE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:th,charCode:function(e){return e.type==="keypress"?$s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kE=Nt(EE),TE=ke({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gg=Nt(TE),PE=ke({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:th}),OE=Nt(PE),ME=ke({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),jE=Nt(ME),$E=ke({},ou,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),IE=Nt($E),DE=[9,13,27,32],nh=Vn&&"CompositionEvent"in window,Uo=null;Vn&&"documentMode"in document&&(Uo=document.documentMode);var LE=Vn&&"TextEvent"in window&&!Uo,Ry=Vn&&(!nh||Uo&&8<Uo&&11>=Uo),vg=String.fromCharCode(32),yg=!1;function Fy(e,t){switch(e){case"keyup":return DE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ny(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wi=!1;function AE(e,t){switch(e){case"compositionend":return Ny(t);case"keypress":return t.which!==32?null:(yg=!0,vg);case"textInput":return e=t.data,e===vg&&yg?null:e;default:return null}}function RE(e,t){if(wi)return e==="compositionend"||!nh&&Fy(e,t)?(e=Ay(),js=Jp=ur=null,wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ry&&t.locale!=="ko"?null:t.data;default:return null}}var FE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!FE[e.type]:t==="textarea"}function zy(e,t,n,r){vy(r),t=fl(t,"onChange"),0<t.length&&(n=new eh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ho=null,sa=null;function NE(e){Qy(e,0)}function au(e){var t=Ci(e);if(cy(t))return e}function zE(e,t){if(e==="change")return t}var By=!1;if(Vn){var jc;if(Vn){var $c="oninput"in document;if(!$c){var bg=document.createElement("div");bg.setAttribute("oninput","return;"),$c=typeof bg.oninput=="function"}jc=$c}else jc=!1;By=jc&&(!document.documentMode||9<document.documentMode)}function wg(){Ho&&(Ho.detachEvent("onpropertychange",Vy),sa=Ho=null)}function Vy(e){if(e.propertyName==="value"&&au(sa)){var t=[];zy(t,sa,e,qp(e)),wy(NE,t)}}function BE(e,t,n){e==="focusin"?(wg(),Ho=t,sa=n,Ho.attachEvent("onpropertychange",Vy)):e==="focusout"&&wg()}function VE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return au(sa)}function UE(e,t){if(e==="click")return au(t)}function HE(e,t){if(e==="input"||e==="change")return au(t)}function WE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dn=typeof Object.is=="function"?Object.is:WE;function la(e,t){if(dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jd.call(t,i)||!dn(e[i],t[i]))return!1}return!0}function Sg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _g(e,t){var n=Sg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sg(n)}}function Uy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hy(){for(var e=window,t=ol();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ol(e.document)}return t}function rh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function GE(e){var t=Hy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uy(n.ownerDocument.documentElement,n)){if(r!==null&&rh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=_g(n,o);var a=_g(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var YE=Vn&&"documentMode"in document&&11>=document.documentMode,Si=null,xf=null,Wo=null,bf=!1;function Cg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bf||Si==null||Si!==ol(r)||(r=Si,"selectionStart"in r&&rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wo&&la(Wo,r)||(Wo=r,r=fl(xf,"onSelect"),0<r.length&&(t=new eh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Si)))}function is(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _i={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionend:is("Transition","TransitionEnd")},Ic={},Wy={};Vn&&(Wy=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function su(e){if(Ic[e])return Ic[e];if(!_i[e])return e;var t=_i[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wy)return Ic[e]=t[n];return e}var Gy=su("animationend"),Yy=su("animationiteration"),qy=su("animationstart"),Xy=su("transitionend"),Ky=new Map,Eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){Ky.set(e,t),ri(t,[e])}for(var Dc=0;Dc<Eg.length;Dc++){var Lc=Eg[Dc],qE=Lc.toLowerCase(),XE=Lc[0].toUpperCase()+Lc.slice(1);kr(qE,"on"+XE)}kr(Gy,"onAnimationEnd");kr(Yy,"onAnimationIteration");kr(qy,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(Xy,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function kg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qC(r,t,void 0,e),e.currentTarget=null}function Qy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;kg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;kg(i,l,u),o=s}}}if(sl)throw e=mf,sl=!1,mf=null,e}function ve(e,t){var n=t[Ef];n===void 0&&(n=t[Ef]=new Set);var r=e+"__bubble";n.has(r)||(Zy(t,e,2,!1),n.add(r))}function Ac(e,t,n){var r=0;t&&(r|=4),Zy(n,e,r,t)}var os="_reactListening"+Math.random().toString(36).slice(2);function ua(e){if(!e[os]){e[os]=!0,oy.forEach(function(n){n!=="selectionchange"&&(KE.has(n)||Ac(n,!1,e),Ac(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[os]||(t[os]=!0,Ac("selectionchange",!1,t))}}function Zy(e,t,n,r){switch(Ly(t)){case 1:var i=cE;break;case 4:i=dE;break;default:i=Zp}n=i.bind(null,t,n,e),i=void 0,!hf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Rc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Nr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}wy(function(){var u=o,d=qp(n),c=[];e:{var y=Ky.get(e);if(y!==void 0){var f=eh,m=e;switch(e){case"keypress":if($s(n)===0)break e;case"keydown":case"keyup":f=kE;break;case"focusin":m="focus",f=Mc;break;case"focusout":m="blur",f=Mc;break;case"beforeblur":case"afterblur":f=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=hE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=OE;break;case Gy:case Yy:case qy:f=vE;break;case Xy:f=jE;break;case"scroll":f=fE;break;case"wheel":f=IE;break;case"copy":case"cut":case"paste":f=xE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=gg}var v=(t&4)!==0,w=!v&&e==="scroll",p=v?y!==null?y+"Capture":null:y;v=[];for(var g=u,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,p!==null&&(S=ra(g,p),S!=null&&v.push(ca(g,S,x)))),w)break;g=g.return}0<v.length&&(y=new f(y,m,null,n,d),c.push({event:y,listeners:v}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",y&&n!==ff&&(m=n.relatedTarget||n.fromElement)&&(Nr(m)||m[Un]))break e;if((f||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=u,m=m?Nr(m):null,m!==null&&(w=ii(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=u),f!==m)){if(v=hg,S="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=gg,S="onPointerLeave",p="onPointerEnter",g="pointer"),w=f==null?y:Ci(f),x=m==null?y:Ci(m),y=new v(S,g+"leave",f,n,d),y.target=w,y.relatedTarget=x,S=null,Nr(d)===u&&(v=new v(p,g+"enter",m,n,d),v.target=x,v.relatedTarget=w,S=v),w=S,f&&m)t:{for(v=f,p=m,g=0,x=v;x;x=li(x))g++;for(x=0,S=p;S;S=li(S))x++;for(;0<g-x;)v=li(v),g--;for(;0<x-g;)p=li(p),x--;for(;g--;){if(v===p||p!==null&&v===p.alternate)break t;v=li(v),p=li(p)}v=null}else v=null;f!==null&&Tg(c,y,f,v,!1),m!==null&&w!==null&&Tg(c,w,m,v,!0)}}e:{if(y=u?Ci(u):window,f=y.nodeName&&y.nodeName.toLowerCase(),f==="select"||f==="input"&&y.type==="file")var C=zE;else if(xg(y))if(By)C=HE;else{C=VE;var T=BE}else(f=y.nodeName)&&f.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(C=UE);if(C&&(C=C(e,u))){zy(c,C,n,d);break e}T&&T(e,y,u),e==="focusout"&&(T=y._wrapperState)&&T.controlled&&y.type==="number"&&sf(y,"number",y.value)}switch(T=u?Ci(u):window,e){case"focusin":(xg(T)||T.contentEditable==="true")&&(Si=T,xf=u,Wo=null);break;case"focusout":Wo=xf=Si=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,Cg(c,n,d);break;case"selectionchange":if(YE)break;case"keydown":case"keyup":Cg(c,n,d)}var _;if(nh)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else wi?Fy(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ry&&n.locale!=="ko"&&(wi||E!=="onCompositionStart"?E==="onCompositionEnd"&&wi&&(_=Ay()):(ur=d,Jp="value"in ur?ur.value:ur.textContent,wi=!0)),T=fl(u,E),0<T.length&&(E=new mg(E,e,null,n,d),c.push({event:E,listeners:T}),_?E.data=_:(_=Ny(n),_!==null&&(E.data=_)))),(_=LE?AE(e,n):RE(e,n))&&(u=fl(u,"onBeforeInput"),0<u.length&&(d=new mg("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=_))}Qy(c,t)})}function ca(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ra(e,n),o!=null&&r.unshift(ca(e,o,i)),o=ra(e,t),o!=null&&r.push(ca(e,o,i))),e=e.return}return r}function li(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ra(n,o),s!=null&&a.unshift(ca(n,s,l))):i||(s=ra(n,o),s!=null&&a.push(ca(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var QE=/\r\n?/g,ZE=/\u0000|\uFFFD/g;function Pg(e){return(typeof e=="string"?e:""+e).replace(QE,`
`).replace(ZE,"")}function as(e,t,n){if(t=Pg(t),Pg(e)!==t&&n)throw Error(V(425))}function pl(){}var wf=null,Sf=null;function _f(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,JE=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,ek=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(e){return Og.resolve(null).then(e).catch(tk)}:Cf;function tk(e){setTimeout(function(){throw e})}function Fc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),aa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);aa(t)}function vr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var oo=Math.random().toString(36).slice(2),wn="__reactFiber$"+oo,da="__reactProps$"+oo,Un="__reactContainer$"+oo,Ef="__reactEvents$"+oo,nk="__reactListeners$"+oo,rk="__reactHandles$"+oo;function Nr(e){var t=e[wn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Un]||n[wn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mg(e);e!==null;){if(n=e[wn])return n;e=Mg(e)}return t}e=n,n=e.parentNode}return null}function Ia(e){return e=e[wn]||e[Un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ci(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function lu(e){return e[da]||null}var kf=[],Ei=-1;function Tr(e){return{current:e}}function xe(e){0>Ei||(e.current=kf[Ei],kf[Ei]=null,Ei--)}function ge(e,t){Ei++,kf[Ei]=e.current,e.current=t}var Cr={},at=Tr(Cr),St=Tr(!1),Gr=Cr;function zi(e,t){var n=e.type.contextTypes;if(!n)return Cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _t(e){return e=e.childContextTypes,e!=null}function hl(){xe(St),xe(at)}function jg(e,t,n){if(at.current!==Cr)throw Error(V(168));ge(at,t),ge(St,n)}function Jy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,BC(e)||"Unknown",i));return ke({},n,r)}function ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,Gr=at.current,ge(at,e),ge(St,St.current),!0}function $g(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Jy(e,t,Gr),r.__reactInternalMemoizedMergedChildContext=e,xe(St),xe(at),ge(at,e)):xe(St),ge(St,n)}var Dn=null,uu=!1,Nc=!1;function ex(e){Dn===null?Dn=[e]:Dn.push(e)}function ik(e){uu=!0,ex(e)}function Pr(){if(!Nc&&Dn!==null){Nc=!0;var e=0,t=he;try{var n=Dn;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dn=null,uu=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(e+1)),Ey(Xp,Pr),i}finally{he=t,Nc=!1}}return null}var ki=[],Ti=0,gl=null,vl=0,Vt=[],Ut=0,Yr=null,Rn=1,Fn="";function Ir(e,t){ki[Ti++]=vl,ki[Ti++]=gl,gl=e,vl=t}function tx(e,t,n){Vt[Ut++]=Rn,Vt[Ut++]=Fn,Vt[Ut++]=Yr,Yr=e;var r=Rn;e=Fn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var o=32-an(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Rn=1<<32-an(t)+i|n<<i|r,Fn=o+e}else Rn=1<<o|n<<i|r,Fn=e}function ih(e){e.return!==null&&(Ir(e,1),tx(e,1,0))}function oh(e){for(;e===gl;)gl=ki[--Ti],ki[Ti]=null,vl=ki[--Ti],ki[Ti]=null;for(;e===Yr;)Yr=Vt[--Ut],Vt[Ut]=null,Fn=Vt[--Ut],Vt[Ut]=null,Rn=Vt[--Ut],Vt[Ut]=null}var Dt=null,$t=null,_e=!1,rn=null;function nx(e,t){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ig(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,$t=vr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,$t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yr!==null?{id:Rn,overflow:Fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Dt=e,$t=null,!0):!1;default:return!1}}function Tf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pf(e){if(_e){var t=$t;if(t){var n=t;if(!Ig(e,t)){if(Tf(e))throw Error(V(418));t=vr(n.nextSibling);var r=Dt;t&&Ig(e,t)?nx(r,n):(e.flags=e.flags&-4097|2,_e=!1,Dt=e)}}else{if(Tf(e))throw Error(V(418));e.flags=e.flags&-4097|2,_e=!1,Dt=e}}}function Dg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function ss(e){if(e!==Dt)return!1;if(!_e)return Dg(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_f(e.type,e.memoizedProps)),t&&(t=$t)){if(Tf(e))throw rx(),Error(V(418));for(;t;)nx(e,t),t=vr(t.nextSibling)}if(Dg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$t=vr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$t=null}}else $t=Dt?vr(e.stateNode.nextSibling):null;return!0}function rx(){for(var e=$t;e;)e=vr(e.nextSibling)}function Bi(){$t=Dt=null,_e=!1}function ah(e){rn===null?rn=[e]:rn.push(e)}var ok=Kn.ReactCurrentBatchConfig;function en(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var yl=Tr(null),xl=null,Pi=null,sh=null;function lh(){sh=Pi=xl=null}function uh(e){var t=yl.current;xe(yl),e._currentValue=t}function Of(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Li(e,t){xl=e,sh=Pi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function Gt(e){var t=e._currentValue;if(sh!==e)if(e={context:e,memoizedValue:t,next:null},Pi===null){if(xl===null)throw Error(V(308));Pi=e,xl.dependencies={lanes:0,firstContext:e}}else Pi=Pi.next=e;return t}var zr=null;function ch(e){zr===null?zr=[e]:zr.push(e)}function ix(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ch(t)):(n.next=i.next,i.next=n),t.interleaved=n,Hn(e,r)}function Hn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var or=!1;function dh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ox(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Hn(e,n)}return i=r.interleaved,i===null?(t.next=t,ch(r)):(t.next=i.next,i.next=t),r.interleaved=t,Hn(e,n)}function Is(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kp(e,n)}}function Lg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bl(e,t,n,r){var i=e.updateQueue;or=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;a=0,d=u=s=null,l=o;do{var y=l.lane,f=l.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,v=l;switch(y=t,f=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){c=m.call(f,c,y);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,y=typeof m=="function"?m.call(f,c,y):m,y==null)break e;c=ke({},c,y);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else f={eventTime:f,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=f,s=c):d=d.next=f,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Xr|=a,e.lanes=a,e.memoizedState=c}}function Ag(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var ax=new iy.Component().refs;function Mf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cu={isMounted:function(e){return(e=e._reactInternals)?ii(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=br(e),o=Nn(r,i);o.payload=t,n!=null&&(o.callback=n),t=yr(e,o,i),t!==null&&(sn(t,e,i,r),Is(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=br(e),o=Nn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yr(e,o,i),t!==null&&(sn(t,e,i,r),Is(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=br(e),i=Nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=yr(e,i,r),t!==null&&(sn(t,e,r,n),Is(t,e,r))}};function Rg(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!la(n,r)||!la(i,o):!0}function sx(e,t,n){var r=!1,i=Cr,o=t.contextType;return typeof o=="object"&&o!==null?o=Gt(o):(i=_t(t)?Gr:at.current,r=t.contextTypes,o=(r=r!=null)?zi(e,i):Cr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cu.enqueueReplaceState(t,t.state,null)}function jf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ax,dh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Gt(o):(o=_t(t)?Gr:at.current,i.context=zi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Mf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&cu.enqueueReplaceState(i,i.state,null),bl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function So(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===ax&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ls(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ng(e){var t=e._init;return t(e._payload)}function lx(e){function t(p,g){if(e){var x=p.deletions;x===null?(p.deletions=[g],p.flags|=16):x.push(g)}}function n(p,g){if(!e)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function r(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function i(p,g){return p=wr(p,g),p.index=0,p.sibling=null,p}function o(p,g,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<g?(p.flags|=2,g):x):(p.flags|=2,g)):(p.flags|=1048576,g)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,g,x,S){return g===null||g.tag!==6?(g=Gc(x,p.mode,S),g.return=p,g):(g=i(g,x),g.return=p,g)}function s(p,g,x,S){var C=x.type;return C===bi?d(p,g,x.props.children,S,x.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ir&&Ng(C)===g.type)?(S=i(g,x.props),S.ref=So(p,g,x),S.return=p,S):(S=Ns(x.type,x.key,x.props,null,p.mode,S),S.ref=So(p,g,x),S.return=p,S)}function u(p,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Yc(x,p.mode,S),g.return=p,g):(g=i(g,x.children||[]),g.return=p,g)}function d(p,g,x,S,C){return g===null||g.tag!==7?(g=Hr(x,p.mode,S,C),g.return=p,g):(g=i(g,x),g.return=p,g)}function c(p,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Gc(""+g,p.mode,x),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qa:return x=Ns(g.type,g.key,g.props,null,p.mode,x),x.ref=So(p,null,g),x.return=p,x;case xi:return g=Yc(g,p.mode,x),g.return=p,g;case ir:var S=g._init;return c(p,S(g._payload),x)}if(Io(g)||vo(g))return g=Hr(g,p.mode,x,null),g.return=p,g;ls(p,g)}return null}function y(p,g,x,S){var C=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:l(p,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qa:return x.key===C?s(p,g,x,S):null;case xi:return x.key===C?u(p,g,x,S):null;case ir:return C=x._init,y(p,g,C(x._payload),S)}if(Io(x)||vo(x))return C!==null?null:d(p,g,x,S,null);ls(p,x)}return null}function f(p,g,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(x)||null,l(g,p,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Qa:return p=p.get(S.key===null?x:S.key)||null,s(g,p,S,C);case xi:return p=p.get(S.key===null?x:S.key)||null,u(g,p,S,C);case ir:var T=S._init;return f(p,g,x,T(S._payload),C)}if(Io(S)||vo(S))return p=p.get(x)||null,d(g,p,S,C,null);ls(g,S)}return null}function m(p,g,x,S){for(var C=null,T=null,_=g,E=g=0,L=null;_!==null&&E<x.length;E++){_.index>E?(L=_,_=null):L=_.sibling;var D=y(p,_,x[E],S);if(D===null){_===null&&(_=L);break}e&&_&&D.alternate===null&&t(p,_),g=o(D,g,E),T===null?C=D:T.sibling=D,T=D,_=L}if(E===x.length)return n(p,_),_e&&Ir(p,E),C;if(_===null){for(;E<x.length;E++)_=c(p,x[E],S),_!==null&&(g=o(_,g,E),T===null?C=_:T.sibling=_,T=_);return _e&&Ir(p,E),C}for(_=r(p,_);E<x.length;E++)L=f(_,p,E,x[E],S),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?E:L.key),g=o(L,g,E),T===null?C=L:T.sibling=L,T=L);return e&&_.forEach(function(A){return t(p,A)}),_e&&Ir(p,E),C}function v(p,g,x,S){var C=vo(x);if(typeof C!="function")throw Error(V(150));if(x=C.call(x),x==null)throw Error(V(151));for(var T=C=null,_=g,E=g=0,L=null,D=x.next();_!==null&&!D.done;E++,D=x.next()){_.index>E?(L=_,_=null):L=_.sibling;var A=y(p,_,D.value,S);if(A===null){_===null&&(_=L);break}e&&_&&A.alternate===null&&t(p,_),g=o(A,g,E),T===null?C=A:T.sibling=A,T=A,_=L}if(D.done)return n(p,_),_e&&Ir(p,E),C;if(_===null){for(;!D.done;E++,D=x.next())D=c(p,D.value,S),D!==null&&(g=o(D,g,E),T===null?C=D:T.sibling=D,T=D);return _e&&Ir(p,E),C}for(_=r(p,_);!D.done;E++,D=x.next())D=f(_,p,E,D.value,S),D!==null&&(e&&D.alternate!==null&&_.delete(D.key===null?E:D.key),g=o(D,g,E),T===null?C=D:T.sibling=D,T=D);return e&&_.forEach(function(O){return t(p,O)}),_e&&Ir(p,E),C}function w(p,g,x,S){if(typeof x=="object"&&x!==null&&x.type===bi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Qa:e:{for(var C=x.key,T=g;T!==null;){if(T.key===C){if(C=x.type,C===bi){if(T.tag===7){n(p,T.sibling),g=i(T,x.props.children),g.return=p,p=g;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ir&&Ng(C)===T.type){n(p,T.sibling),g=i(T,x.props),g.ref=So(p,T,x),g.return=p,p=g;break e}n(p,T);break}else t(p,T);T=T.sibling}x.type===bi?(g=Hr(x.props.children,p.mode,S,x.key),g.return=p,p=g):(S=Ns(x.type,x.key,x.props,null,p.mode,S),S.ref=So(p,g,x),S.return=p,p=S)}return a(p);case xi:e:{for(T=x.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(p,g.sibling),g=i(g,x.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else t(p,g);g=g.sibling}g=Yc(x,p.mode,S),g.return=p,p=g}return a(p);case ir:return T=x._init,w(p,g,T(x._payload),S)}if(Io(x))return m(p,g,x,S);if(vo(x))return v(p,g,x,S);ls(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(p,g.sibling),g=i(g,x),g.return=p,p=g):(n(p,g),g=Gc(x,p.mode,S),g.return=p,p=g),a(p)):n(p,g)}return w}var Vi=lx(!0),ux=lx(!1),Da={},Cn=Tr(Da),fa=Tr(Da),pa=Tr(Da);function Br(e){if(e===Da)throw Error(V(174));return e}function fh(e,t){switch(ge(pa,t),ge(fa,e),ge(Cn,Da),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uf(t,e)}xe(Cn),ge(Cn,t)}function Ui(){xe(Cn),xe(fa),xe(pa)}function cx(e){Br(pa.current);var t=Br(Cn.current),n=uf(t,e.type);t!==n&&(ge(fa,e),ge(Cn,n))}function ph(e){fa.current===e&&(xe(Cn),xe(fa))}var Ce=Tr(0);function wl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zc=[];function hh(){for(var e=0;e<zc.length;e++)zc[e]._workInProgressVersionPrimary=null;zc.length=0}var Ds=Kn.ReactCurrentDispatcher,Bc=Kn.ReactCurrentBatchConfig,qr=0,Ee=null,Fe=null,We=null,Sl=!1,Go=!1,ha=0,ak=0;function Je(){throw Error(V(321))}function mh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dn(e[n],t[n]))return!1;return!0}function gh(e,t,n,r,i,o){if(qr=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ds.current=e===null||e.memoizedState===null?ck:dk,e=n(r,i),Go){o=0;do{if(Go=!1,ha=0,25<=o)throw Error(V(301));o+=1,We=Fe=null,t.updateQueue=null,Ds.current=fk,e=n(r,i)}while(Go)}if(Ds.current=_l,t=Fe!==null&&Fe.next!==null,qr=0,We=Fe=Ee=null,Sl=!1,t)throw Error(V(300));return e}function vh(){var e=ha!==0;return ha=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ee.memoizedState=We=e:We=We.next=e,We}function Yt(){if(Fe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?Ee.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(V(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Ee.memoizedState=We=e:We=We.next=e}return We}function ma(e,t){return typeof t=="function"?t(e):t}function Vc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var d=u.lane;if((qr&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,Ee.lanes|=d,Xr|=d}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,dn(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,Xr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Uc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);dn(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function dx(){}function fx(e,t){var n=Ee,r=Yt(),i=t(),o=!dn(r.memoizedState,i);if(o&&(r.memoizedState=i,wt=!0),r=r.queue,yh(mx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,ga(9,hx.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(V(349));qr&30||px(n,t,i)}return i}function px(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hx(e,t,n,r){t.value=n,t.getSnapshot=r,gx(t)&&vx(e)}function mx(e,t,n){return n(function(){gx(t)&&vx(e)})}function gx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dn(e,n)}catch{return!0}}function vx(e){var t=Hn(e,1);t!==null&&sn(t,e,1,-1)}function zg(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},t.queue=e,e=e.dispatch=uk.bind(null,Ee,e),[t.memoizedState,e]}function ga(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yx(){return Yt().memoizedState}function Ls(e,t,n,r){var i=yn();Ee.flags|=e,i.memoizedState=ga(1|t,n,void 0,r===void 0?null:r)}function du(e,t,n,r){var i=Yt();r=r===void 0?null:r;var o=void 0;if(Fe!==null){var a=Fe.memoizedState;if(o=a.destroy,r!==null&&mh(r,a.deps)){i.memoizedState=ga(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=ga(1|t,n,o,r)}function Bg(e,t){return Ls(8390656,8,e,t)}function yh(e,t){return du(2048,8,e,t)}function xx(e,t){return du(4,2,e,t)}function bx(e,t){return du(4,4,e,t)}function wx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sx(e,t,n){return n=n!=null?n.concat([e]):null,du(4,4,wx.bind(null,t,e),n)}function xh(){}function _x(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cx(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ex(e,t,n){return qr&21?(dn(n,t)||(n=Py(),Ee.lanes|=n,Xr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function sk(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=Bc.transition;Bc.transition={};try{e(!1),t()}finally{he=n,Bc.transition=r}}function kx(){return Yt().memoizedState}function lk(e,t,n){var r=br(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tx(e))Px(t,n);else if(n=ix(e,t,n,r),n!==null){var i=ft();sn(n,e,r,i),Ox(n,t,r)}}function uk(e,t,n){var r=br(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tx(e))Px(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,dn(l,a)){var s=t.interleaved;s===null?(i.next=i,ch(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=ix(e,t,i,r),n!==null&&(i=ft(),sn(n,e,r,i),Ox(n,t,r))}}function Tx(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Px(e,t){Go=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ox(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kp(e,n)}}var _l={readContext:Gt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},ck={readContext:Gt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:Gt,useEffect:Bg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ls(4194308,4,wx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ls(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lk.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:zg,useDebugValue:xh,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=zg(!1),t=e[0];return e=sk.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=yn();if(_e){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Ge===null)throw Error(V(349));qr&30||px(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bg(mx.bind(null,r,o,e),[e]),r.flags|=2048,ga(9,hx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yn(),t=Ge.identifierPrefix;if(_e){var n=Fn,r=Rn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ha++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ak++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dk={readContext:Gt,useCallback:_x,useContext:Gt,useEffect:yh,useImperativeHandle:Sx,useInsertionEffect:xx,useLayoutEffect:bx,useMemo:Cx,useReducer:Vc,useRef:yx,useState:function(){return Vc(ma)},useDebugValue:xh,useDeferredValue:function(e){var t=Yt();return Ex(t,Fe.memoizedState,e)},useTransition:function(){var e=Vc(ma)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:dx,useSyncExternalStore:fx,useId:kx,unstable_isNewReconciler:!1},fk={readContext:Gt,useCallback:_x,useContext:Gt,useEffect:yh,useImperativeHandle:Sx,useInsertionEffect:xx,useLayoutEffect:bx,useMemo:Cx,useReducer:Uc,useRef:yx,useState:function(){return Uc(ma)},useDebugValue:xh,useDeferredValue:function(e){var t=Yt();return Fe===null?t.memoizedState=e:Ex(t,Fe.memoizedState,e)},useTransition:function(){var e=Uc(ma)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:dx,useSyncExternalStore:fx,useId:kx,unstable_isNewReconciler:!1};function Hi(e,t){try{var n="",r=t;do n+=zC(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Hc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $f(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pk=typeof WeakMap=="function"?WeakMap:Map;function Mx(e,t,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){El||(El=!0,Vf=r),$f(e,t)},n}function jx(e,t,n){n=Nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$f(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$f(e,t),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Vg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tk.bind(null,e,t,n),t.then(e,e))}function Ug(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nn(-1,1),t.tag=2,yr(n,t,1))),n.lanes|=1),e)}var hk=Kn.ReactCurrentOwner,wt=!1;function ct(e,t,n,r){t.child=e===null?ux(t,null,n,r):Vi(t,e.child,n,r)}function Wg(e,t,n,r,i){n=n.render;var o=t.ref;return Li(t,i),r=gh(e,t,n,r,o,i),n=vh(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(_e&&n&&ih(t),t.flags|=1,ct(e,t,r,i),t.child)}function Gg(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Th(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$x(e,t,o,r,i)):(e=Ns(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(a,r)&&e.ref===t.ref)return Wn(e,t,i)}return t.flags|=1,e=wr(o,r),e.ref=t.ref,e.return=t,t.child=e}function $x(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(la(o,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Wn(e,t,i)}return If(e,t,n,r,i)}function Ix(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Mi,Mt),Mt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Mi,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(Mi,Mt),Mt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(Mi,Mt),Mt|=r;return ct(e,t,i,n),t.child}function Dx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function If(e,t,n,r,i){var o=_t(n)?Gr:at.current;return o=zi(t,o),Li(t,i),n=gh(e,t,n,r,o,i),r=vh(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(_e&&r&&ih(t),t.flags|=1,ct(e,t,n,i),t.child)}function Yg(e,t,n,r,i){if(_t(n)){var o=!0;ml(t)}else o=!1;if(Li(t,i),t.stateNode===null)As(e,t),sx(t,n,r),jf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=_t(n)?Gr:at.current,u=zi(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Fg(t,a,r,u),or=!1;var y=t.memoizedState;a.state=y,bl(t,r,a,i),s=t.memoizedState,l!==r||y!==s||St.current||or?(typeof d=="function"&&(Mf(t,n,d,r),s=t.memoizedState),(l=or||Rg(t,n,l,r,y,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ox(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:en(t.type,l),a.props=u,c=t.pendingProps,y=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Gt(s):(s=_t(n)?Gr:at.current,s=zi(t,s));var f=n.getDerivedStateFromProps;(d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||y!==s)&&Fg(t,a,r,s),or=!1,y=t.memoizedState,a.state=y,bl(t,r,a,i);var m=t.memoizedState;l!==c||y!==m||St.current||or?(typeof f=="function"&&(Mf(t,n,f,r),m=t.memoizedState),(u=or||Rg(t,n,u,r,y,m,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Df(e,t,n,r,o,i)}function Df(e,t,n,r,i,o){Dx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&$g(t,n,!1),Wn(e,t,o);r=t.stateNode,hk.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Vi(t,e.child,null,o),t.child=Vi(t,null,l,o)):ct(e,t,l,o),t.memoizedState=r.state,i&&$g(t,n,!0),t.child}function Lx(e){var t=e.stateNode;t.pendingContext?jg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jg(e,t.context,!1),fh(e,t.containerInfo)}function qg(e,t,n,r,i){return Bi(),ah(i),t.flags|=256,ct(e,t,n,r),t.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Af(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ax(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ce,i&1),e===null)return Pf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=hu(a,r,0,null),e=Hr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Af(n),t.memoizedState=Lf,e):bh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mk(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=wr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=wr(l,o):(o=Hr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Af(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Lf,r}return o=e.child,e=o.sibling,r=wr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bh(e,t){return t=hu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function us(e,t,n,r){return r!==null&&ah(r),Vi(t,e.child,null,n),e=bh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mk(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Hc(Error(V(422))),us(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=hu({mode:"visible",children:r.children},i,0,null),o=Hr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Vi(t,e.child,null,a),t.child.memoizedState=Af(a),t.memoizedState=Lf,o);if(!(t.mode&1))return us(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=Hc(o,r,void 0),us(e,t,a,r)}if(l=(a&e.childLanes)!==0,wt||l){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Hn(e,i),sn(r,e,i,-1))}return kh(),r=Hc(Error(V(421))),us(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Pk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$t=vr(i.nextSibling),Dt=t,_e=!0,rn=null,e!==null&&(Vt[Ut++]=Rn,Vt[Ut++]=Fn,Vt[Ut++]=Yr,Rn=e.id,Fn=e.overflow,Yr=t),t=bh(t,r.children),t.flags|=4096,t)}function Xg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Of(e.return,t,n)}function Wc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Rx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ct(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xg(e,n,t);else if(e.tag===19)Xg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wc(t,!0,n,null,o);break;case"together":Wc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function As(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=wr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gk(e,t,n){switch(t.tag){case 3:Lx(t),Bi();break;case 5:cx(t);break;case 1:_t(t.type)&&ml(t);break;case 4:fh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(yl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Ax(e,t,n):(ge(Ce,Ce.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Ix(e,t,n)}return Wn(e,t,n)}var Fx,Rf,Nx,zx;Fx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};Nx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Br(Cn.current);var o=null;switch(n){case"input":i=of(e,i),r=of(e,r),o=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),o=[];break;case"textarea":i=lf(e,i),r=lf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pl)}cf(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ta.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ta.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ve("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};zx=function(e,t,n,r){n!==r&&(t.flags|=4)};function _o(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vk(e,t,n){var r=t.pendingProps;switch(oh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return _t(t.type)&&hl(),et(t),null;case 3:return r=t.stateNode,Ui(),xe(St),xe(at),hh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ss(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(Wf(rn),rn=null))),Rf(e,t),et(t),null;case 5:ph(t);var i=Br(pa.current);if(n=t.type,e!==null&&t.stateNode!=null)Nx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return et(t),null}if(e=Br(Cn.current),ss(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[wn]=t,r[da]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Lo.length;i++)ve(Lo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":ig(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":ag(r,o),ve("invalid",r)}cf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&as(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&as(r.textContent,l,e),i=["children",""+l]):ta.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":Za(r),og(r,o,!0);break;case"textarea":Za(r),sg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=pl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=py(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[wn]=t,e[da]=r,Fx(e,t,!1,!1),t.stateNode=e;e:{switch(a=df(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lo.length;i++)ve(Lo[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":ig(e,r),i=of(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",e);break;case"textarea":ag(e,r),i=lf(e,r),ve("invalid",e);break;default:i=r}cf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?gy(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&hy(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&na(e,s):typeof s=="number"&&na(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ta.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&Hp(e,o,s,a))}switch(n){case"input":Za(e),og(e,r,!1);break;case"textarea":Za(e),sg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_r(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ji(e,!!r.multiple,o,!1):r.defaultValue!=null&&ji(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)zx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Br(pa.current),Br(Cn.current),ss(t)){if(r=t.stateNode,n=t.memoizedProps,r[wn]=t,(o=r.nodeValue!==n)&&(e=Dt,e!==null))switch(e.tag){case 3:as(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&as(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=t,t.stateNode=r}return et(t),null;case 13:if(xe(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&$t!==null&&t.mode&1&&!(t.flags&128))rx(),Bi(),t.flags|=98560,o=!1;else if(o=ss(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[wn]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),o=!1}else rn!==null&&(Wf(rn),rn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?ze===0&&(ze=3):kh())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return Ui(),Rf(e,t),e===null&&ua(t.stateNode.containerInfo),et(t),null;case 10:return uh(t.type._context),et(t),null;case 17:return _t(t.type)&&hl(),et(t),null;case 19:if(xe(Ce),o=t.memoizedState,o===null)return et(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)_o(o,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=wl(e),a!==null){for(t.flags|=128,_o(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>Wi&&(t.flags|=128,r=!0,_o(o,!1),t.lanes=4194304)}else{if(!r)if(e=wl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return et(t),null}else 2*Me()-o.renderingStartTime>Wi&&n!==1073741824&&(t.flags|=128,r=!0,_o(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return Eh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Mt&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function yk(e,t){switch(oh(t),t.tag){case 1:return _t(t.type)&&hl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ui(),xe(St),xe(at),hh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ph(t),null;case 13:if(xe(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ce),null;case 4:return Ui(),null;case 10:return uh(t.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var cs=!1,it=!1,xk=typeof WeakSet=="function"?WeakSet:Set,H=null;function Oi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Ff(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Kg=!1;function bk(e,t){if(wf=cl,e=Hy(),rh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,c=e,y=null;t:for(;;){for(var f;c!==n||i!==0&&c.nodeType!==3||(l=a+i),c!==o||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(f=c.firstChild)!==null;)y=c,c=f;for(;;){if(c===e)break t;if(y===n&&++u===i&&(l=a),y===o&&++d===r&&(s=a),(f=c.nextSibling)!==null)break;c=y,y=c.parentNode}c=f}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:e,selectionRange:n},cl=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,w=m.memoizedState,p=t.stateNode,g=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:en(t.type,v),w);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return m=Kg,Kg=!1,m}function Yo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ff(t,n,o)}i=i.next}while(i!==r)}}function fu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bx(e){var t=e.alternate;t!==null&&(e.alternate=null,Bx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wn],delete t[da],delete t[Ef],delete t[nk],delete t[rk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vx(e){return e.tag===5||e.tag===3||e.tag===4}function Qg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pl));else if(r!==4&&(e=e.child,e!==null))for(zf(e,t,n),e=e.sibling;e!==null;)zf(e,t,n),e=e.sibling}function Bf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bf(e,t,n),e=e.sibling;e!==null;)Bf(e,t,n),e=e.sibling}var Xe=null,tn=!1;function nr(e,t,n){for(n=n.child;n!==null;)Ux(e,t,n),n=n.sibling}function Ux(e,t,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:it||Oi(n,t);case 6:var r=Xe,i=tn;Xe=null,nr(e,t,n),Xe=r,tn=i,Xe!==null&&(tn?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(tn?(e=Xe,n=n.stateNode,e.nodeType===8?Fc(e.parentNode,n):e.nodeType===1&&Fc(e,n),aa(e)):Fc(Xe,n.stateNode));break;case 4:r=Xe,i=tn,Xe=n.stateNode.containerInfo,tn=!0,nr(e,t,n),Xe=r,tn=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ff(n,t,a),i=i.next}while(i!==r)}nr(e,t,n);break;case 1:if(!it&&(Oi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}nr(e,t,n);break;case 21:nr(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,nr(e,t,n),it=r):nr(e,t,n);break;default:nr(e,t,n)}}function Zg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xk),t.forEach(function(r){var i=Ok.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,tn=!1;break e;case 3:Xe=l.stateNode.containerInfo,tn=!0;break e;case 4:Xe=l.stateNode.containerInfo,tn=!0;break e}l=l.return}if(Xe===null)throw Error(V(160));Ux(o,a,i),Xe=null,tn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hx(t,e),t=t.sibling}function Hx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),gn(e),r&4){try{Yo(3,e,e.return),fu(3,e)}catch(v){Te(e,e.return,v)}try{Yo(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:Kt(t,e),gn(e),r&512&&n!==null&&Oi(n,n.return);break;case 5:if(Kt(t,e),gn(e),r&512&&n!==null&&Oi(n,n.return),e.flags&32){var i=e.stateNode;try{na(i,"")}catch(v){Te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&dy(i,o),df(l,a);var u=df(l,o);for(a=0;a<s.length;a+=2){var d=s[a],c=s[a+1];d==="style"?gy(i,c):d==="dangerouslySetInnerHTML"?hy(i,c):d==="children"?na(i,c):Hp(i,d,c,u)}switch(l){case"input":af(i,o);break;case"textarea":fy(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?ji(i,!!o.multiple,f,!1):y!==!!o.multiple&&(o.defaultValue!=null?ji(i,!!o.multiple,o.defaultValue,!0):ji(i,!!o.multiple,o.multiple?[]:"",!1))}i[da]=o}catch(v){Te(e,e.return,v)}}break;case 6:if(Kt(t,e),gn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Te(e,e.return,v)}}break;case 3:if(Kt(t,e),gn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(t.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:Kt(t,e),gn(e);break;case 13:Kt(t,e),gn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(_h=Me())),r&4&&Zg(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||d,Kt(t,e),it=u):Kt(t,e),gn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(H=e,d=e.child;d!==null;){for(c=H=d;H!==null;){switch(y=H,f=y.child,y.tag){case 0:case 11:case 14:case 15:Yo(4,y,y.return);break;case 1:Oi(y,y.return);var m=y.stateNode;if(typeof m.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:Oi(y,y.return);break;case 22:if(y.memoizedState!==null){e0(c);continue}}f!==null?(f.return=y,H=f):e0(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=my("display",a))}catch(v){Te(e,e.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){Te(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Kt(t,e),gn(e),r&4&&Zg(e);break;case 21:break;default:Kt(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(na(i,""),r.flags&=-33);var o=Qg(e);Bf(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Qg(e);zf(e,l,a);break;default:throw Error(V(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wk(e,t,n){H=e,Wx(e)}function Wx(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||cs;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||it;l=cs;var u=it;if(cs=a,(it=s)&&!u)for(H=i;H!==null;)a=H,s=a.child,a.tag===22&&a.memoizedState!==null?t0(i):s!==null?(s.return=a,H=s):t0(i);for(;o!==null;)H=o,Wx(o),o=o.sibling;H=i,cs=l,it=u}Jg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):Jg(e)}}function Jg(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||fu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:en(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ag(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ag(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&aa(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}it||t.flags&512&&Nf(t)}catch(y){Te(t,t.return,y)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function e0(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function t0(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fu(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Te(t,i,s)}}var o=t.return;try{Nf(t)}catch(s){Te(t,o,s)}break;case 5:var a=t.return;try{Nf(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){H=null;break}var l=t.sibling;if(l!==null){l.return=t.return,H=l;break}H=t.return}}var Sk=Math.ceil,Cl=Kn.ReactCurrentDispatcher,wh=Kn.ReactCurrentOwner,Wt=Kn.ReactCurrentBatchConfig,se=0,Ge=null,De=null,Qe=0,Mt=0,Mi=Tr(0),ze=0,va=null,Xr=0,pu=0,Sh=0,qo=null,bt=null,_h=0,Wi=1/0,jn=null,El=!1,Vf=null,xr=null,ds=!1,cr=null,kl=0,Xo=0,Uf=null,Rs=-1,Fs=0;function ft(){return se&6?Me():Rs!==-1?Rs:Rs=Me()}function br(e){return e.mode&1?se&2&&Qe!==0?Qe&-Qe:ok.transition!==null?(Fs===0&&(Fs=Py()),Fs):(e=he,e!==0||(e=window.event,e=e===void 0?16:Ly(e.type)),e):1}function sn(e,t,n,r){if(50<Xo)throw Xo=0,Uf=null,Error(V(185));ja(e,n,r),(!(se&2)||e!==Ge)&&(e===Ge&&(!(se&2)&&(pu|=n),ze===4&&sr(e,Qe)),Ct(e,r),n===1&&se===0&&!(t.mode&1)&&(Wi=Me()+500,uu&&Pr()))}function Ct(e,t){var n=e.callbackNode;oE(e,t);var r=ul(e,e===Ge?Qe:0);if(r===0)n!==null&&cg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cg(n),t===1)e.tag===0?ik(n0.bind(null,e)):ex(n0.bind(null,e)),ek(function(){!(se&6)&&Pr()}),n=null;else{switch(Oy(r)){case 1:n=Xp;break;case 4:n=ky;break;case 16:n=ll;break;case 536870912:n=Ty;break;default:n=ll}n=Jx(n,Gx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gx(e,t){if(Rs=-1,Fs=0,se&6)throw Error(V(327));var n=e.callbackNode;if(Ai()&&e.callbackNode!==n)return null;var r=ul(e,e===Ge?Qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Tl(e,r);else{t=r;var i=se;se|=2;var o=qx();(Ge!==e||Qe!==t)&&(jn=null,Wi=Me()+500,Ur(e,t));do try{Ek();break}catch(l){Yx(e,l)}while(1);lh(),Cl.current=o,se=i,De!==null?t=0:(Ge=null,Qe=0,t=ze)}if(t!==0){if(t===2&&(i=gf(e),i!==0&&(r=i,t=Hf(e,i))),t===1)throw n=va,Ur(e,0),sr(e,r),Ct(e,Me()),n;if(t===6)sr(e,r);else{if(i=e.current.alternate,!(r&30)&&!_k(i)&&(t=Tl(e,r),t===2&&(o=gf(e),o!==0&&(r=o,t=Hf(e,o))),t===1))throw n=va,Ur(e,0),sr(e,r),Ct(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Dr(e,bt,jn);break;case 3:if(sr(e,r),(r&130023424)===r&&(t=_h+500-Me(),10<t)){if(ul(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cf(Dr.bind(null,e,bt,jn),t);break}Dr(e,bt,jn);break;case 4:if(sr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-an(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sk(r/1960))-r,10<r){e.timeoutHandle=Cf(Dr.bind(null,e,bt,jn),r);break}Dr(e,bt,jn);break;case 5:Dr(e,bt,jn);break;default:throw Error(V(329))}}}return Ct(e,Me()),e.callbackNode===n?Gx.bind(null,e):null}function Hf(e,t){var n=qo;return e.current.memoizedState.isDehydrated&&(Ur(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=bt,bt=n,t!==null&&Wf(t)),e}function Wf(e){bt===null?bt=e:bt.push.apply(bt,e)}function _k(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!dn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~Sh,t&=~pu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function n0(e){if(se&6)throw Error(V(327));Ai();var t=ul(e,0);if(!(t&1))return Ct(e,Me()),null;var n=Tl(e,t);if(e.tag!==0&&n===2){var r=gf(e);r!==0&&(t=r,n=Hf(e,r))}if(n===1)throw n=va,Ur(e,0),sr(e,t),Ct(e,Me()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dr(e,bt,jn),Ct(e,Me()),null}function Ch(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Wi=Me()+500,uu&&Pr())}}function Kr(e){cr!==null&&cr.tag===0&&!(se&6)&&Ai();var t=se;se|=1;var n=Wt.transition,r=he;try{if(Wt.transition=null,he=1,e)return e()}finally{he=r,Wt.transition=n,se=t,!(se&6)&&Pr()}}function Eh(){Mt=Mi.current,xe(Mi)}function Ur(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,JE(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hl();break;case 3:Ui(),xe(St),xe(at),hh();break;case 5:ph(r);break;case 4:Ui();break;case 13:xe(Ce);break;case 19:xe(Ce);break;case 10:uh(r.type._context);break;case 22:case 23:Eh()}n=n.return}if(Ge=e,De=e=wr(e.current,null),Qe=Mt=t,ze=0,va=null,Sh=pu=Xr=0,bt=qo=null,zr!==null){for(t=0;t<zr.length;t++)if(n=zr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}zr=null}return e}function Yx(e,t){do{var n=De;try{if(lh(),Ds.current=_l,Sl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sl=!1}if(qr=0,We=Fe=Ee=null,Go=!1,ha=0,wh.current=null,n===null||n.return===null){ze=1,va=t,De=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Qe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=Ug(a);if(f!==null){f.flags&=-257,Hg(f,a,l,o,t),f.mode&1&&Vg(o,u,t),t=f,s=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(s),t.updateQueue=v}else m.add(s);break e}else{if(!(t&1)){Vg(o,u,t),kh();break e}s=Error(V(426))}}else if(_e&&l.mode&1){var w=Ug(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Hg(w,a,l,o,t),ah(Hi(s,l));break e}}o=s=Hi(s,l),ze!==4&&(ze=2),qo===null?qo=[o]:qo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Mx(o,s,t);Lg(o,p);break e;case 1:l=s;var g=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(xr===null||!xr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=jx(o,l,t);Lg(o,S);break e}}o=o.return}while(o!==null)}Kx(n)}catch(C){t=C,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function qx(){var e=Cl.current;return Cl.current=_l,e===null?_l:e}function kh(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(Xr&268435455)&&!(pu&268435455)||sr(Ge,Qe)}function Tl(e,t){var n=se;se|=2;var r=qx();(Ge!==e||Qe!==t)&&(jn=null,Ur(e,t));do try{Ck();break}catch(i){Yx(e,i)}while(1);if(lh(),se=n,Cl.current=r,De!==null)throw Error(V(261));return Ge=null,Qe=0,ze}function Ck(){for(;De!==null;)Xx(De)}function Ek(){for(;De!==null&&!KC();)Xx(De)}function Xx(e){var t=Zx(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?Kx(e):De=t,wh.current=null}function Kx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yk(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,De=null;return}}else if(n=vk(n,t,Mt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);ze===0&&(ze=5)}function Dr(e,t,n){var r=he,i=Wt.transition;try{Wt.transition=null,he=1,kk(e,t,n,r)}finally{Wt.transition=i,he=r}return null}function kk(e,t,n,r){do Ai();while(cr!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(aE(e,o),e===Ge&&(De=Ge=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ds||(ds=!0,Jx(ll,function(){return Ai(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Wt.transition,Wt.transition=null;var a=he;he=1;var l=se;se|=4,wh.current=null,bk(e,n),Hx(n,e),GE(Sf),cl=!!wf,Sf=wf=null,e.current=n,wk(n),QC(),se=l,he=a,Wt.transition=o}else e.current=n;if(ds&&(ds=!1,cr=e,kl=i),o=e.pendingLanes,o===0&&(xr=null),eE(n.stateNode),Ct(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(El)throw El=!1,e=Vf,Vf=null,e;return kl&1&&e.tag!==0&&Ai(),o=e.pendingLanes,o&1?e===Uf?Xo++:(Xo=0,Uf=e):Xo=0,Pr(),null}function Ai(){if(cr!==null){var e=Oy(kl),t=Wt.transition,n=he;try{if(Wt.transition=null,he=16>e?16:e,cr===null)var r=!1;else{if(e=cr,cr=null,kl=0,se&6)throw Error(V(331));var i=se;for(se|=4,H=e.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(H=u;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Yo(8,d,o)}var c=d.child;if(c!==null)c.return=d,H=c;else for(;H!==null;){d=H;var y=d.sibling,f=d.return;if(Bx(d),d===u){H=null;break}if(y!==null){y.return=f,H=y;break}H=f}}}var m=o.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yo(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,H=p;break e}H=o.return}}var g=e.current;for(H=g;H!==null;){a=H;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,H=x;else e:for(a=g;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fu(9,l)}}catch(C){Te(l,l.return,C)}if(l===a){H=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,H=S;break e}H=l.return}}if(se=i,Pr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(iu,e)}catch{}r=!0}return r}finally{he=n,Wt.transition=t}}return!1}function r0(e,t,n){t=Hi(n,t),t=Mx(e,t,1),e=yr(e,t,1),t=ft(),e!==null&&(ja(e,1,t),Ct(e,t))}function Te(e,t,n){if(e.tag===3)r0(e,e,n);else for(;t!==null;){if(t.tag===3){r0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){e=Hi(n,e),e=jx(t,e,1),t=yr(t,e,1),e=ft(),t!==null&&(ja(t,1,e),Ct(t,e));break}}t=t.return}}function Tk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Qe&n)===n&&(ze===4||ze===3&&(Qe&130023424)===Qe&&500>Me()-_h?Ur(e,0):Sh|=n),Ct(e,t)}function Qx(e,t){t===0&&(e.mode&1?(t=ts,ts<<=1,!(ts&130023424)&&(ts=4194304)):t=1);var n=ft();e=Hn(e,t),e!==null&&(ja(e,t,n),Ct(e,n))}function Pk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qx(e,n)}function Ok(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Qx(e,n)}var Zx;Zx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,gk(e,t,n);wt=!!(e.flags&131072)}else wt=!1,_e&&t.flags&1048576&&tx(t,vl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;As(e,t),e=t.pendingProps;var i=zi(t,at.current);Li(t,n),i=gh(null,t,r,e,i,n);var o=vh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(r)?(o=!0,ml(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dh(t),i.updater=cu,t.stateNode=i,i._reactInternals=t,jf(t,r,e,n),t=Df(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&ih(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(As(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=jk(r),e=en(r,e),i){case 0:t=If(null,t,r,e,n);break e;case 1:t=Yg(null,t,r,e,n);break e;case 11:t=Wg(null,t,r,e,n);break e;case 14:t=Gg(null,t,r,en(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),If(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Yg(e,t,r,i,n);case 3:e:{if(Lx(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ox(e,t),bl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Hi(Error(V(423)),t),t=qg(e,t,r,n,i);break e}else if(r!==i){i=Hi(Error(V(424)),t),t=qg(e,t,r,n,i);break e}else for($t=vr(t.stateNode.containerInfo.firstChild),Dt=t,_e=!0,rn=null,n=ux(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),r===i){t=Wn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return cx(t),e===null&&Pf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,_f(r,i)?a=null:o!==null&&_f(r,o)&&(t.flags|=32),Dx(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&Pf(t),null;case 13:return Ax(e,t,n);case 4:return fh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vi(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Wg(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(yl,r._currentValue),r._currentValue=a,o!==null)if(dn(o.value,a)){if(o.children===i.children&&!St.current){t=Wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Nn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Of(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Of(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Li(t,n),i=Gt(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=en(r,t.pendingProps),i=en(r.type,i),Gg(e,t,r,i,n);case 15:return $x(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),As(e,t),t.tag=1,_t(r)?(e=!0,ml(t)):e=!1,Li(t,n),sx(t,r,i),jf(t,r,i,n),Df(null,t,r,!0,e,n);case 19:return Rx(e,t,n);case 22:return Ix(e,t,n)}throw Error(V(156,t.tag))};function Jx(e,t){return Ey(e,t)}function Mk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,n,r){return new Mk(e,t,n,r)}function Th(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jk(e){if(typeof e=="function")return Th(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gp)return 11;if(e===Yp)return 14}return 2}function wr(e,t){var n=e.alternate;return n===null?(n=Ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ns(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Th(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case bi:return Hr(n.children,i,o,t);case Wp:a=8,i|=8;break;case ef:return e=Ht(12,n,t,i|2),e.elementType=ef,e.lanes=o,e;case tf:return e=Ht(13,n,t,i),e.elementType=tf,e.lanes=o,e;case nf:return e=Ht(19,n,t,i),e.elementType=nf,e.lanes=o,e;case ly:return hu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ay:a=10;break e;case sy:a=9;break e;case Gp:a=11;break e;case Yp:a=14;break e;case ir:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Ht(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Hr(e,t,n,r){return e=Ht(7,e,r,t),e.lanes=n,e}function hu(e,t,n,r){return e=Ht(22,e,r,t),e.elementType=ly,e.lanes=n,e.stateNode={isHidden:!1},e}function Gc(e,t,n){return e=Ht(6,e,null,t),e.lanes=n,e}function Yc(e,t,n){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $k(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ph(e,t,n,r,i,o,a,l,s){return e=new $k(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ht(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dh(o),e}function Ik(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function eb(e){if(!e)return Cr;e=e._reactInternals;e:{if(ii(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(_t(n))return Jy(e,n,t)}return t}function tb(e,t,n,r,i,o,a,l,s){return e=Ph(n,r,!0,e,i,o,a,l,s),e.context=eb(null),n=e.current,r=ft(),i=br(n),o=Nn(r,i),o.callback=t??null,yr(n,o,i),e.current.lanes=i,ja(e,i,r),Ct(e,r),e}function mu(e,t,n,r){var i=t.current,o=ft(),a=br(i);return n=eb(n),t.context===null?t.context=n:t.pendingContext=n,t=Nn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yr(i,t,a),e!==null&&(sn(e,i,a,o),Is(e,i,a)),a}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function i0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oh(e,t){i0(e,t),(e=e.alternate)&&i0(e,t)}function Dk(){return null}var nb=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mh(e){this._internalRoot=e}gu.prototype.render=Mh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));mu(e,t,null,null)};gu.prototype.unmount=Mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kr(function(){mu(null,e,null,null)}),t[Un]=null}};function gu(e){this._internalRoot=e}gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=$y();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ar.length&&t!==0&&t<ar[n].priority;n++);ar.splice(n,0,e),n===0&&Dy(e)}};function jh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function o0(){}function Lk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Pl(a);o.call(u)}}var a=tb(t,r,e,0,null,!1,!1,"",o0);return e._reactRootContainer=a,e[Un]=a.current,ua(e.nodeType===8?e.parentNode:e),Kr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Pl(s);l.call(u)}}var s=Ph(e,0,!1,null,null,!1,!1,"",o0);return e._reactRootContainer=s,e[Un]=s.current,ua(e.nodeType===8?e.parentNode:e),Kr(function(){mu(t,s,n,r)}),s}function yu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Pl(a);l.call(s)}}mu(t,a,e,i)}else a=Lk(n,t,e,i,r);return Pl(a)}My=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Do(t.pendingLanes);n!==0&&(Kp(t,n|1),Ct(t,Me()),!(se&6)&&(Wi=Me()+500,Pr()))}break;case 13:Kr(function(){var r=Hn(e,1);if(r!==null){var i=ft();sn(r,e,1,i)}}),Oh(e,1)}};Qp=function(e){if(e.tag===13){var t=Hn(e,134217728);if(t!==null){var n=ft();sn(t,e,134217728,n)}Oh(e,134217728)}};jy=function(e){if(e.tag===13){var t=br(e),n=Hn(e,t);if(n!==null){var r=ft();sn(n,e,t,r)}Oh(e,t)}};$y=function(){return he};Iy=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};pf=function(e,t,n){switch(t){case"input":if(af(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=lu(r);if(!i)throw Error(V(90));cy(r),af(r,i)}}}break;case"textarea":fy(e,n);break;case"select":t=n.value,t!=null&&ji(e,!!n.multiple,t,!1)}};xy=Ch;by=Kr;var Ak={usingClientEntryPoint:!1,Events:[Ia,Ci,lu,vy,yy,Ch]},Co={findFiberByHostInstance:Nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Rk={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_y(e),e===null?null:e.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||Dk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fs.isDisabled&&fs.supportsFiber)try{iu=fs.inject(Rk),_n=fs}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ak;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(t))throw Error(V(200));return Ik(e,t,null,n)};Ft.createRoot=function(e,t){if(!jh(e))throw Error(V(299));var n=!1,r="",i=nb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ph(e,1,!1,null,null,n,!1,r,i),e[Un]=t.current,ua(e.nodeType===8?e.parentNode:e),new Mh(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=_y(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return Kr(e)};Ft.hydrate=function(e,t,n){if(!vu(t))throw Error(V(200));return yu(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!jh(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=nb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=tb(t,null,e,1,n??null,i,!1,o,a),e[Un]=t.current,ua(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gu(t)};Ft.render=function(e,t,n){if(!vu(t))throw Error(V(200));return yu(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!vu(e))throw Error(V(40));return e._reactRootContainer?(Kr(function(){yu(null,null,e,!1,function(){e._reactRootContainer=null,e[Un]=null})}),!0):!1};Ft.unstable_batchedUpdates=Ch;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return yu(e,t,n,!1,r)};Ft.version="18.2.0-next-9e3b772b8-20220608";function rb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rb)}catch(e){console.error(e)}}rb(),ty.exports=Ft;var xu=ty.exports,a0=xu;Zd.createRoot=a0.createRoot,Zd.hydrateRoot=a0.hydrateRoot;var ot=function(){return ot=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ot.apply(this,arguments)};function Gi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Fk(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Nk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,zk=Fk(function(e){return Nk.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ye="-ms-",Ko="-moz-",ue="-webkit-",ib="comm",bu="rule",$h="decl",Bk="@import",Vk="@namespace",ob="@keyframes",Uk="@layer",ab=Math.abs,Ih=String.fromCharCode,Gf=Object.assign;function Hk(e,t){return Ne(e,0)^45?(((t<<2^Ne(e,0))<<2^Ne(e,1))<<2^Ne(e,2))<<2^Ne(e,3):0}function sb(e){return e.trim()}function $n(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function zs(e,t,n){return e.indexOf(t,n)}function Ne(e,t){return e.charCodeAt(t)|0}function Qr(e,t,n){return e.slice(t,n)}function nn(e){return e.length}function lb(e){return e.length}function Ao(e,t){return t.push(e),e}function Wk(e,t){return e.map(t).join("")}function s0(e,t){return e.filter(function(n){return!$n(n,t)})}var wu=1,Yi=1,ub=0,qt=0,$e=0,ao="";function Su(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:wu,column:Yi,length:a,return:"",siblings:l}}function rr(e,t){return Gf(Su("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ui(e){for(;e.root;)e=rr(e.root,{children:[e]});Ao(e,e.siblings)}function Gk(){return $e}function Yk(){return $e=qt>0?Ne(ao,--qt):0,Yi--,$e===10&&(Yi=1,wu--),$e}function ln(){return $e=qt<ub?Ne(ao,qt++):0,Yi++,$e===10&&(Yi=1,wu++),$e}function dr(){return Ne(ao,qt)}function Bs(){return qt}function _u(e,t){return Qr(ao,e,t)}function ya(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qk(e){return wu=Yi=1,ub=nn(ao=e),qt=0,[]}function Xk(e){return ao="",e}function qc(e){return sb(_u(qt-1,Yf(e===91?e+2:e===40?e+1:e)))}function Kk(e){for(;($e=dr())&&$e<33;)ln();return ya(e)>2||ya($e)>3?"":" "}function Qk(e,t){for(;--t&&ln()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return _u(e,Bs()+(t<6&&dr()==32&&ln()==32))}function Yf(e){for(;ln();)switch($e){case e:return qt;case 34:case 39:e!==34&&e!==39&&Yf($e);break;case 40:e===41&&Yf(e);break;case 92:ln();break}return qt}function Zk(e,t){for(;ln()&&e+$e!==47+10;)if(e+$e===42+42&&dr()===47)break;return"/*"+_u(t,qt-1)+"*"+Ih(e===47?e:ln())}function Jk(e){for(;!ya(dr());)ln();return _u(e,qt)}function eT(e){return Xk(Vs("",null,null,null,[""],e=qk(e),0,[0],e))}function Vs(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,f=0,m=0,v=1,w=1,p=1,g=0,x="",S=i,C=o,T=r,_=x;w;)switch(m=g,g=ln()){case 40:if(m!=108&&Ne(_,c-1)==58){zs(_+=ne(qc(g),"&","&\f"),"&\f",ab(u?l[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:_+=qc(g);break;case 9:case 10:case 13:case 32:_+=Kk(m);break;case 92:_+=Qk(Bs()-1,7);continue;case 47:switch(dr()){case 42:case 47:Ao(tT(Zk(ln(),Bs()),t,n,s),s),(ya(m||1)==5||ya(dr()||1)==5)&&nn(_)&&Qr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*v:l[u++]=nn(_)*p;case 125*v:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+d:p==-1&&(_=ne(_,/\f/g,"")),f>0&&(nn(_)-c||v===0&&m===47)&&Ao(f>32?u0(_+";",r,n,c-1,s):u0(ne(_," ","")+";",r,n,c-2,s),s);break;case 59:_+=";";default:if(Ao(T=l0(_,t,n,u,d,i,l,x,S=[],C=[],c,o),o),g===123)if(d===0)Vs(_,t,T,T,S,o,c,l,C);else{switch(y){case 99:if(Ne(_,3)===110)break;case 108:if(Ne(_,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Vs(e,T,T,r&&Ao(l0(e,T,T,0,0,i,l,x,i,S=[],c,C),C),i,C,c,l,r?S:C):Vs(_,T,T,T,[""],C,0,l,C)}}u=d=f=0,v=p=1,x=_="",c=a;break;case 58:c=1+nn(_),f=m;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&Yk()==125)continue}switch(_+=Ih(g),g*v){case 38:p=d>0?1:(_+="\f",-1);break;case 44:l[u++]=(nn(_)-1)*p,p=1;break;case 64:dr()===45&&(_+=qc(ln())),y=dr(),d=c=nn(x=_+=Jk(Bs())),g++;break;case 45:m===45&&nn(_)==2&&(v=0)}}return o}function l0(e,t,n,r,i,o,a,l,s,u,d,c){for(var y=i-1,f=i===0?o:[""],m=lb(f),v=0,w=0,p=0;v<r;++v)for(var g=0,x=Qr(e,y+1,y=ab(w=a[v])),S=e;g<m;++g)(S=sb(w>0?f[g]+" "+x:ne(x,/&\f/g,f[g])))&&(s[p++]=S);return Su(e,t,n,i===0?bu:l,s,u,d,c)}function tT(e,t,n,r){return Su(e,t,n,ib,Ih(Gk()),Qr(e,2,-2),0,r)}function u0(e,t,n,r,i){return Su(e,t,n,$h,Qr(e,0,r),Qr(e,r+1,-1),r,i)}function cb(e,t,n){switch(Hk(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ko+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Ko+e+ye+e+e;case 5936:switch(Ne(e,t+11)){case 114:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ye+e+e;case 6165:return ue+e+ye+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return ue+e+ye+"flex-item-"+ne(e,/flex-|-self/g,"")+($n(e,/flex-|baseline/)?"":ye+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ye+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ye+ne(e,"shrink","negative")+e;case 5292:return ue+e+ye+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+ye+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ye+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!$n(e,/flex-|baseline/))return ye+"grid-column-align"+Qr(e,t)+e;break;case 2592:case 3360:return ye+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,$n(r.props,/grid-\w+-end/)})?~zs(e+(n=n[t].value),"span",0)?e:ye+ne(e,"-start","")+e+ye+"grid-row-span:"+(~zs(n,"span",0)?$n(n,/\d+/):+$n(n,/\d+/)-+$n(e,/\d+/))+";":ye+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return $n(r.props,/grid-\w+-start/)})?e:ye+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nn(e)-1-t>6)switch(Ne(e,t+1)){case 109:if(Ne(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Ko+(Ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~zs(e,"stretch",0)?cb(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ye+i+":"+o+u+(a?ye+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Ne(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Ne(e,Ne(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Ne(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ye+"$2box$3")+e;case 100:return ne(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Ol(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function nT(e,t,n,r){switch(e.type){case Uk:if(e.children.length)break;case Bk:case Vk:case $h:return e.return=e.return||e.value;case ib:return"";case ob:return e.return=e.value+"{"+Ol(e.children,r)+"}";case bu:if(!nn(e.value=e.props.join(",")))return""}return nn(n=Ol(e.children,r))?e.return=e.value+"{"+n+"}":""}function rT(e){var t=lb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function iT(e){return function(t){t.root||(t=t.return)&&e(t)}}function oT(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $h:e.return=cb(e.value,e.length,n);return;case ob:return Ol([rr(e,{value:ne(e.value,"@","@"+ue)})],r);case bu:if(e.length)return Wk(n=e.props,function(i){switch($n(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ui(rr(e,{props:[ne(i,/:(read-\w+)/,":"+Ko+"$1")]})),ui(rr(e,{props:[i]})),Gf(e,{props:s0(n,r)});break;case"::placeholder":ui(rr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),ui(rr(e,{props:[ne(i,/:(plac\w+)/,":"+Ko+"$1")]})),ui(rr(e,{props:[ne(i,/:(plac\w+)/,ye+"input-$1")]})),ui(rr(e,{props:[i]})),Gf(e,{props:s0(n,r)});break}return""})}}var aT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",db="active",fb="data-styled-version",Cu="6.3.11",Dh=`/*!sc*/
`,Qo=typeof window<"u"&&typeof document<"u",sT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),lT={};function La(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Us=new Map,Ml=new Map,Hs=1,Ro=function(e){if(Us.has(e))return Us.get(e);for(;Ml.has(Hs);)Hs++;var t=Hs++;return Us.set(e,t),Ml.set(t,e),t},uT=function(e,t){Hs=t+1,Us.set(e,t),Ml.set(t,e)},Lh=Object.freeze([]),Xi=Object.freeze({});function pb(e,t,n){return n===void 0&&(n=Xi),e.theme!==n.theme&&e.theme||t||n.theme}var hb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),cT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dT=/(^-|-$)/g;function c0(e){return e.replace(cT,"-").replace(dT,"")}var fT=/(a)(d)/gi,d0=function(e){return String.fromCharCode(e+(e>25?39:97))};function qf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=d0(t%52)+n;return(d0(t%52)+n).replace(fT,"$1-$2")}var Xc,Lr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},mb=function(e){return Lr(5381,e)};function Ah(e){return qf(mb(e)>>>0)}function pT(e){return e.displayName||e.name||"Component"}function Kc(e){return typeof e=="string"&&!0}var gb=typeof Symbol=="function"&&Symbol.for,vb=gb?Symbol.for("react.memo"):60115,hT=gb?Symbol.for("react.forward_ref"):60112,mT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vT=((Xc={})[hT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xc[vb]=yb,Xc);function f0(e){return("type"in(t=e)&&t.type.$$typeof)===vb?yb:"$$typeof"in e?vT[e.$$typeof]:mT;var t}var yT=Object.defineProperty,xT=Object.getOwnPropertyNames,p0=Object.getOwnPropertySymbols,bT=Object.getOwnPropertyDescriptor,wT=Object.getPrototypeOf,h0=Object.prototype;function xb(e,t,n){if(typeof t!="string"){if(h0){var r=wT(t);r&&r!==h0&&xb(e,r,n)}var i=xT(t);p0&&(i=i.concat(p0(t)));for(var o=f0(e),a=f0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in gT||n&&n[s]||a&&s in a||o&&s in o)){var u=bT(t,s);try{yT(e,s,u)}catch{}}}}return e}function Ki(e){return typeof e=="function"}function Rh(e){return typeof e=="object"&&"styledComponentId"in e}function Vr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function jl(e,t){return e.join(t||"")}function xa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xf(e,t,n){if(n===void 0&&(n=!1),!n&&!xa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xf(e[r],t[r]);else if(xa(t))for(var r in t)e[r]=Xf(e[r],t[r]);return e}function Fh(e,t){Object.defineProperty(e,"toString",{value:t})}var ST=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw La(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Dh;return n},e}(),_T="style[".concat(qi,"][").concat(fb,'="').concat(Cu,'"]'),CT=new RegExp("^".concat(qi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),m0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Kf=function(e){if(!e)return document;if(m0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(m0(t))return t}return document},ET=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},kT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Dh),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(CT);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(uT(d,u),ET(e,d,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Qc=function(e){for(var t=Kf(e.options.target).querySelectorAll(_T),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(qi)!==db&&(kT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function TT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var bb=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(qi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(qi,db),r.setAttribute(fb,Cu);var a=TT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},PT=function(){function e(t){this.element=bb(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw La(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),OT=function(){function e(t){this.element=bb(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),MT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),g0=Qo,jT={isServer:!Qo,useCSSOMInjection:!sT},$l=function(){function e(t,n,r){t===void 0&&(t=Xi),n===void 0&&(n={});var i=this;this.options=ot(ot({},jT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Qo&&g0&&(g0=!1,Qc(this)),Fh(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(c){var y=function(p){return Ml.get(p)}(c);if(y===void 0)return"continue";var f=o.names.get(y);if(f===void 0||!f.size)return"continue";var m=a.getGroup(c);if(m.length===0)return"continue";var v=qi+".g"+c+'[id="'+y+'"]',w="";f.forEach(function(p){p.length>0&&(w+=p+",")}),s+=m+v+'{content:"'+w+'"}'+Dh},d=0;d<l;d++)u(d);return s}(i)})}return e.registerId=function(t){return Ro(t)},e.prototype.rehydrate=function(){!this.server&&Qo&&Qc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Qo&&t.target!==this.options.target&&Kf(this.options.target)!==Kf(t.target)&&Qc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new MT(i):r?new PT(i):new OT(i)}(this.options),new ST(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ro(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ro(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ro(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),$T=/&/g,In=47,Ar=42;function v0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==In||e.charCodeAt(o+1)!==Ar)if(i)a===Ar&&e.charCodeAt(o+1)===In&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function wb(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wb(n.children,t)),n})}function IT(e){var t,n,r,i=e===void 0?Xi:e,o=i.options,a=o===void 0?Xi:o,l=i.plugins,s=l===void 0?Lh:l,u=function(m,v,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},d=s.slice();d.push(function(m){m.type===bu&&m.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),m.props[0]=m.props[0].replace($T,n).replace(r,u))}),a.prefix&&d.push(oT),d.push(nT);var c=[],y=rT(d.concat(iT(function(m){return c.push(m)}))),f=function(m,v,w,p){v===void 0&&(v=""),w===void 0&&(w=""),p===void 0&&(p="&"),t=p,n=v,r=void 0;var g=function(S){if(!v0(S))return S;for(var C=S.length,T="",_=0,E=0,L=0,D=!1,A=0;A<C;A++){var O=S.charCodeAt(A);if(L!==0||D||O!==In||S.charCodeAt(A+1)!==Ar)if(D)O===Ar&&S.charCodeAt(A+1)===In&&(D=!1,A++);else if(O!==34&&O!==39||A!==0&&S.charCodeAt(A-1)===92){if(L===0)if(O===123)E++;else if(O===125){if(--E<0){for(var I=A+1;I<C;){var R=S.charCodeAt(I);if(R===59||R===10)break;I++}I<C&&S.charCodeAt(I)===59&&I++,E=0,A=I-1,_=I;continue}E===0&&(T+=S.substring(_,A+1),_=A+1)}else O===59&&E===0&&(T+=S.substring(_,A+1),_=A+1)}else L===0?L=O:L===O&&(L=0);else D=!0,A++}if(_<C){var M=S.substring(_);v0(M)||(T+=M)}return T}(function(S){if(S.indexOf("//")===-1)return S;for(var C=S.length,T=[],_=0,E=0,L=0,D=0;E<C;){var A=S.charCodeAt(E);if(A!==34&&A!==39||E!==0&&S.charCodeAt(E-1)===92)if(L===0)if(A===In&&E+1<C&&S.charCodeAt(E+1)===Ar){for(E+=2;E+1<C&&(S.charCodeAt(E)!==Ar||S.charCodeAt(E+1)!==In);)E++;E+=2}else if(A===40&&E>=3&&(32|S.charCodeAt(E-1))==108&&(32|S.charCodeAt(E-2))==114&&(32|S.charCodeAt(E-3))==117)D=1,E++;else if(D>0)A===41?D--:A===40&&D++,E++;else if(A===Ar&&E+1<C&&S.charCodeAt(E+1)===In)E>_&&T.push(S.substring(_,E)),_=E+=2;else if(A===In&&E+1<C&&S.charCodeAt(E+1)===In){for(E>_&&T.push(S.substring(_,E));E<C&&S.charCodeAt(E)!==10;)E++;_=E}else E++;else E++;else L===0?L=A:L===A&&(L=0),E++}return _===0?S:(_<C&&T.push(S.substring(_)),T.join(""))}(m)),x=eT(w||v?"".concat(w," ").concat(v," { ").concat(g," }"):g);return a.namespace&&(x=wb(x,a.namespace)),c=[],Ol(x,y),c};return f.hash=s.length?s.reduce(function(m,v){return v.name||La(15),Lr(m,v.name)},5381).toString():"",f}var DT=new $l,Qf=IT(),Sb=q.createContext({shouldForwardProp:void 0,styleSheet:DT,stylis:Qf});Sb.Consumer;q.createContext(void 0);function Zf(){return q.useContext(Sb)}var _b=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Qf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Fh(this,function(){throw La(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qf),this.name+t.hash},e}();function LT(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in aT||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var AT=function(e){return e>="A"&&e<="Z"};function y0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;AT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Cb=function(e){return e==null||e===!1||e===""},Eb=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Cb(r)&&(Array.isArray(r)&&r.isCss||Ki(r)?t.push("".concat(y0(n),":"),r,";"):xa(r)?t.push.apply(t,Gi(Gi(["".concat(n," {")],Eb(r),!1),["}"],!1)):t.push("".concat(y0(n),": ").concat(LT(n,r),";")))}return t};function Sr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(Cb(e))return i;if(Rh(e))return i.push(".".concat(e.styledComponentId)),i;if(Ki(e)){if(!Ki(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Sr(o,t,n,r,i)}var a;if(e instanceof _b)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(xa(e)){for(var l=Eb(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Sr(e[s],t,n,r,i);return i}function kb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ki(n)&&!Rh(n))return!1}return!0}var RT=mb(Cu),FT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&kb(t),this.componentId=n,this.baseHash=Lr(RT,n),this.baseStyle=r,$l.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Vr(i,this.staticRulesId);else{var o=jl(Sr(this.rules,t,n,r)),a=qf(Lr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Vr(i,a),this.staticRulesId=a}else{for(var s=Lr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var y=jl(Sr(c,t,n,r));s=Lr(Lr(s,String(d)),y),u+=y}}if(u){var f=qf(s>>>0);if(!n.hasNameForId(this.componentId,f)){var m=r(u,".".concat(f),void 0,this.componentId);n.insertRules(this.componentId,f,m)}i=Vr(i,f)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ro(this.componentId)):""}},e}(),Nh=q.createContext(void 0);Nh.Consumer;var Zc={};function NT(e,t,n){var r=Rh(e),i=e,o=!Kc(e),a=t.attrs,l=a===void 0?Lh:a,s=t.componentId,u=s===void 0?function(S,C){var T=typeof S!="string"?"sc":c0(S);Zc[T]=(Zc[T]||0)+1;var _="".concat(T,"-").concat(Ah(Cu+T+Zc[T]));return C?"".concat(C,"-").concat(_):_}(t.displayName,t.parentComponentId):s,d=t.displayName,c=d===void 0?function(S){return Kc(S)?"styled.".concat(S):"Styled(".concat(pT(S),")")}(e):d,y=t.displayName&&t.componentId?"".concat(c0(t.displayName),"-").concat(t.componentId):t.componentId||u,f=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(S,C){return v(S,C)&&w(S,C)}}else m=v}var p=new FT(n,y,r?i.componentStyle:void 0);function g(S,C){return function(T,_,E){var L=T.attrs,D=T.componentStyle,A=T.defaultProps,O=T.foldedComponentIds,I=T.styledComponentId,R=T.target,M=q.useContext(Nh),j=Zf(),F=T.shouldForwardProp||j.shouldForwardProp,P=pb(_,M,A)||Xi,$=function(X,ee,fe){for(var be,ie=ot(ot({},ee),{className:void 0,theme:fe}),je=0;je<X.length;je+=1){var Be=Ki(be=X[je])?be(ie):be;for(var Ve in Be)Ve==="className"?ie.className=Vr(ie.className,Be[Ve]):Ve==="style"?ie.style=ot(ot({},ie.style),Be[Ve]):ie[Ve]=Be[Ve]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Vr(ie.className,ee.className)),ie}(L,_,P),N=$.as||R,B={};for(var z in $)$[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&$.theme===P||(z==="forwardedAs"?B.as=$.forwardedAs:F&&!F(z,N)||(B[z]=$[z]));var U=function(X,ee){var fe=Zf(),be=X.generateAndInjectStyles(ee,fe.styleSheet,fe.stylis);return be}(D,$),G=U.className,Y=Vr(O,I);return G&&(Y+=" "+G),$.className&&(Y+=" "+$.className),B[Kc(N)&&!hb.has(N)?"class":"className"]=Y,E&&(B.ref=E),b.createElement(N,B)}(x,S,C)}g.displayName=c;var x=q.forwardRef(g);return x.attrs=f,x.componentStyle=p,x.displayName=c,x.shouldForwardProp=m,x.foldedComponentIds=r?Vr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=y,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(C){for(var T=[],_=1;_<arguments.length;_++)T[_-1]=arguments[_];for(var E=0,L=T;E<L.length;E++)Xf(C,L[E],!0);return C}({},i.defaultProps,S):S}}),Fh(x,function(){return".".concat(x.styledComponentId)}),o&&xb(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function x0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var b0=function(e){return Object.assign(e,{isCss:!0})};function zh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ki(e)||xa(e))return b0(Sr(x0(Lh,Gi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Sr(r):b0(Sr(x0(r,t)))}function Jf(e,t,n){if(n===void 0&&(n=Xi),!t)throw La(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,zh.apply(void 0,Gi([i],o,!1)))};return r.attrs=function(i){return Jf(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Jf(e,t,ot(ot({},n),i))},r}var Tb=function(e){return Jf(NT,e)},k=Tb;hb.forEach(function(e){k[e]=Tb(e)});var zT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=kb(t),$l.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(jl(Sr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&$l.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function BT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=zh.apply(void 0,Gi([e],t,!1)),i="sc-global-".concat(Ah(JSON.stringify(r))),o=new zT(r,i),a=new WeakMap,l=function(u){var d=Zf(),c=q.useContext(Nh),y=a.get(d.styleSheet);return y===void 0&&(y=d.styleSheet.allocateGSInstance(i),a.set(d.styleSheet,y)),(typeof window>"u"||!d.styleSheet.server)&&s(y,u,d.styleSheet,c,d.stylis),q.useLayoutEffect(function(){return d.styleSheet.server||s(y,u,d.styleSheet,c,d.stylis),function(){var f;o.removeStyles(y,d.styleSheet),f=d.styleSheet.options.target,typeof document<"u"&&(f??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(m){return m.remove()})}},[y,u,d.styleSheet,c,d.stylis]),null};function s(u,d,c,y,f){if(o.isStatic)o.renderStyles(u,lT,c,f);else{var m=ot(ot({},d),{theme:pb(d,y,l.defaultProps)});o.renderStyles(u,m,c,f)}}return q.memo(l)}function Bh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=jl(zh.apply(void 0,Gi([e],t,!1))),i=Ah(r);return new _b(i,r)}const VT=k.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,UT=k.div`
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
    max-width: 1448px;
   
  }
`,HT=k.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,WT=k.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,GT=k.div`
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
`;const YT=k(Oe)`
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
`;const qT=k.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,XT=k.button`
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
`;const KT=k.div`
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
`,QT=k.button`
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
`,ZT=k.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,ps=k(Oe)`
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
`,JT=k.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,eP=k.div`
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
`,tP=k.div`
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
`,nP=k.input`
  border: none;
  outline: none;
  padding: 14px 22px;
  font-size: 16px;
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
`,rP=k.button`
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
`,iP=k.svg`
  width: 24px;
  height: 24px;
`,oP=k.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  border-radius: 12px;
  background: rgb(255, 255, 255);
  border: 1px solid #eee;
  max-height: 500px;
  overflow-y: auto;
  z-index: 1000;
  /* max-width:600px */
`,aP=k.li`
  display: flex;
  gap: 15px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`,un="/Didiv/assets/symbol-defs-fb9ce9f0.svg",sP=()=>{const[e,t]=b.useState("");console.log(e);const[n,r]=b.useState([]);console.log(n);const[i,o]=b.useState(!1);console.log(i);const a=Xn();b.useEffect(()=>{if(!e.trim()){r([]),o(!1);return}const s=setTimeout(async()=>{try{const d=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(d.data),o(!0)}catch(u){console.error(u)}},300);return()=>clearTimeout(s)},[e]);const l=s=>{t(""),o(!1),a(`/product/${s.id}`)};return h.jsxs(tP,{children:[h.jsx(nP,{name:"site-search",value:e,onChange:s=>t(s.target.value),placeholder:"Пошук",autoComplete:"off"}),h.jsx(rP,{className:"search-button",children:h.jsx(iP,{children:h.jsx("use",{href:`${un}#icon-search`})})}),i&&n.length>0&&h.jsx(oP,{children:n.map(s=>{var u,d;return h.jsxs(aP,{onClick:()=>l(s),children:[h.jsx("img",{src:((d=(u=s.images)==null?void 0:u[0])==null?void 0:d.url)||"/nofoto.png",alt:""}),h.jsx("span",{children:s.name})]},s.id)})})]})};var Pb={exports:{}},Ob={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=b;function lP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var uP=typeof Object.is=="function"?Object.is:lP,cP=Aa.useSyncExternalStore,dP=Aa.useRef,fP=Aa.useEffect,pP=Aa.useMemo,hP=Aa.useDebugValue;Ob.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=dP(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=pP(function(){function s(f){if(!u){if(u=!0,d=f,f=r(f),i!==void 0&&a.hasValue){var m=a.value;if(i(m,f))return c=m}return c=f}if(m=c,uP(d,f))return m;var v=r(f);return i!==void 0&&i(m,v)?(d=f,m):(d=f,c=v)}var u=!1,d,c,y=n===void 0?null:n;return[function(){return s(t())},y===null?void 0:function(){return s(y())}]},[t,n,r,i]);var l=cP(e,o[0],o[1]);return fP(function(){a.hasValue=!0,a.value=l},[l]),hP(l),l};Pb.exports=Ob;var mP=Pb.exports;function gP(e){e()}function vP(){let e=null,t=null;return{clear(){e=null,t=null},notify(){gP(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var w0={notify(){},get:()=>[]};function yP(e,t){let n,r=w0,i=0,o=!1;function a(v){d();const w=r.subscribe(v);let p=!1;return()=>{p||(p=!0,w(),c())}}function l(){r.notify()}function s(){m.onStateChange&&m.onStateChange()}function u(){return o}function d(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=vP())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=w0)}function y(){o||(o=!0,d())}function f(){o&&(o=!1,c())}const m={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:y,tryUnsubscribe:f,getListeners:()=>r};return m}var xP=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bP=xP(),wP=()=>typeof navigator<"u"&&navigator.product==="ReactNative",SP=wP(),_P=()=>bP||SP?b.useLayoutEffect:b.useEffect,CP=_P(),Jc=Symbol.for("react-redux-context"),ed=typeof globalThis<"u"?globalThis:{};function EP(){if(!b.createContext)return{};const e=ed[Jc]??(ed[Jc]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var Er=EP();function kP(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=yP(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);CP(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Er;return b.createElement(l.Provider,{value:o},t)}var TP=kP;function Vh(e=Er){return function(){return b.useContext(e)}}var Mb=Vh();function jb(e=Er){const t=e===Er?Mb:Vh(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var PP=jb();function OP(e=Er){const t=e===Er?PP:jb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Qn=OP(),MP=(e,t)=>e===t;function jP(e=Er){const t=e===Er?Mb:Vh(e),n=(r,i={})=>{const{equalityFn:o=MP}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const d=b.useCallback({[r.name](y){return r(y)}}[r.name],[r]),c=mP.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,d,o);return b.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var Et=jP();const $P=k(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,IP=k.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,DP=k.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,LP=k.div`
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
`,AP=({onClick:e})=>{const t=Et(n=>n.cart.items.length);return h.jsx($P,{to:"/cart",children:h.jsxs(DP,{onClick:e,children:[h.jsx(IP,{children:h.jsx("use",{href:`${un}#icon-cart`})}),t>0&&h.jsx(LP,{children:t})]})})},RP=k.nav`
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
`,ci=k(Oe)`
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
`,FP=()=>h.jsxs(RP,{children:[h.jsx(ci,{to:"/",children:"Головна"}),h.jsx(ci,{to:"/catalog",children:"Каталог"}),h.jsx(ci,{to:"/catalog",children:"Новинки"}),h.jsx(ci,{to:"/catalog",children:"Акційні товари"}),h.jsx(ci,{to:"/about",children:"Про нас"}),h.jsx(ci,{to:"/contacts",children:"Контакти"})]}),NP=k.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,zP=k(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,BP=k.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,VP=k.div`

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
`,UP=({onClick:e})=>{const t=Et(n=>n.favorites.items.length);return h.jsx(zP,{to:"/favorite",children:h.jsxs(BP,{onClick:e,children:[h.jsx(NP,{children:h.jsx("use",{href:`${un}#icon-heart`})}),t>0&&h.jsx(VP,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=e=>{const t=WP(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var GP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...GP,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:$b("lucide",i),...!o&&!YP(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,d])=>b.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(qP,{ref:o,iconNode:t,className:$b(`lucide-${HP(S0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=S0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Uh=pn("arrow-down-narrow-wide",XP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Hh=pn("arrow-right",KP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Wh=pn("heart",QP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],JP=pn("house",ZP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],tO=pn("info",eO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],rO=pn("mail",nO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iO=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],oO=pn("shopping-bag",iO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Ra=pn("shopping-cart",aO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sO=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Ib=pn("sliders-horizontal",sO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Db=pn("trash-2",lO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Lb=pn("x",uO),cO=()=>{const[e,t]=b.useState(!1);return h.jsx(VT,{children:h.jsx(UT,{children:h.jsxs(HT,{children:[h.jsxs(WT,{children:[h.jsx(YT,{to:"/",children:"Дідів хлів"}),h.jsxs(GT,{children:[h.jsx(AP,{}),h.jsx(UP,{}),h.jsx(FP,{}),h.jsx(XT,{onClick:()=>t(!e),children:h.jsx(qT,{children:h.jsx("use",{href:`${un}#icon-menu`})})}),h.jsx(eP,{open:e,onClick:()=>t(!1)}),h.jsxs(KT,{open:e,children:[h.jsx(QT,{onClick:()=>t(!1),children:h.jsx(Lb,{size:28,strokeWidth:1.5})}),h.jsxs(ZT,{children:[h.jsxs(ps,{onClick:()=>t(!1),to:"/",children:[h.jsx(JP,{size:22,strokeWidth:1.5})," Головна"]}),h.jsxs(ps,{onClick:()=>t(!1),to:"/about",children:[h.jsx(tO,{size:22,strokeWidth:1.5})," Про нас"]}),h.jsxs(ps,{onClick:()=>t(!1),to:"/catalog",children:[h.jsx(oO,{size:22,strokeWidth:1.5})," Каталог"]}),h.jsxs(ps,{onClick:()=>t(!1),to:"/contacts",children:[h.jsx(rO,{size:22,strokeWidth:1.5})," Контакти"]})]}),h.jsx(JT,{children:h.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),h.jsx(sP,{})]})})})},dO=k.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,fO=k.footer`
 
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
`,pO=k.div`
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
`,td=k.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,nd=k.h3`
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
`,hO=k.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,rd=k.a`
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
`,mO=()=>h.jsx(dO,{children:h.jsxs(fO,{children:[h.jsxs(pO,{children:[h.jsxs(td,{children:[h.jsx(nd,{children:"Навігація"}),h.jsx(vn,{to:"/",children:"Головна"}),h.jsx(vn,{to:"/about",children:"Про нас"}),h.jsx(vn,{to:"/catalog",children:"Каталог"}),h.jsx(vn,{to:"/contacts",children:"Контакти"})]}),h.jsxs(td,{children:[h.jsx(nd,{children:"Інформація"}),h.jsx(vn,{to:"/delivery",children:"Оплата і доставка"}),h.jsx(vn,{children:"Повернення"}),h.jsx(vn,{children:"Гарантія"}),h.jsx(vn,{children:"Політика конфіденційності"})]})]}),h.jsxs(td,{children:[h.jsx(nd,{children:"Контакти"}),h.jsx(vn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),h.jsx(vn,{href:"mailto:email@email.com",children:"email@email.com"}),h.jsxs(hO,{children:[h.jsx(rd,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:h.jsx("svg",{width:"20px",children:h.jsx("use",{href:`${un}#icon-instagram`})})}),h.jsx(rd,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:h.jsx("svg",{width:"20px",children:h.jsx("use",{href:`${un}#icon-telegram`})})}),h.jsx(rd,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:h.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:h.jsx("use",{href:`${un}#icon-olx`})})})]})]})]})}),gO=()=>h.jsxs(h.Fragment,{children:[h.jsx(cO,{}),h.jsx("main",{style:{flex:1},children:h.jsx(wC,{})}),h.jsx(mO,{})]}),vO=k.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,yO=k.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
      text-align: center;

  @media screen and (min-width: 768px) {
 font-size: 35px;

  }

`,xO=k.div`
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
`,bO=k.div`
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
`,wO=k(Oe)`
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
`,SO=k.span`
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
`,_O=k.div`
  padding: 10px 0;
`,CO=k.h3`
  font-size: 15px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,EO=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,kO=k.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`,TO=k.button`
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

`;const PO=k(Oe)`
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

`,OO=k.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,MO=k.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function qe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var jO=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),_0=jO,id=()=>Math.random().toString(36).substring(7).split("").join("."),$O={INIT:`@@redux/INIT${id()}`,REPLACE:`@@redux/REPLACE${id()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${id()}`},Il=$O;function Gh(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Yh(e,t,n){if(typeof e!="function")throw new Error(qe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(qe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(qe(1));return n(Yh)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,p)=>{a.set(p,w)}))}function d(){if(s)throw new Error(qe(3));return i}function c(w){if(typeof w!="function")throw new Error(qe(4));if(s)throw new Error(qe(5));let p=!0;u();const g=l++;return a.set(g,w),function(){if(p){if(s)throw new Error(qe(6));p=!1,u(),a.delete(g),o=null}}}function y(w){if(!Gh(w))throw new Error(qe(7));if(typeof w.type>"u")throw new Error(qe(8));if(typeof w.type!="string")throw new Error(qe(17));if(s)throw new Error(qe(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(g=>{g()}),w}function f(w){if(typeof w!="function")throw new Error(qe(10));r=w,y({type:Il.REPLACE})}function m(){const w=c;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(qe(11));function g(){const S=p;S.next&&S.next(d())}return g(),{unsubscribe:w(g)}},[_0](){return this}}}return y({type:Il.INIT}),{dispatch:y,subscribe:c,getState:d,replaceReducer:f,[_0]:m}}function IO(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Il.INIT})>"u")throw new Error(qe(12));if(typeof n(void 0,{type:Il.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(qe(13))})}function DO(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{IO(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],y=n[c],f=a[c],m=y(f,l);if(typeof m>"u")throw l&&l.type,new Error(qe(14));u[c]=m,s=s||m!==f}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Dl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function LO(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(qe(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Dl(...l)(i.dispatch),{...i,dispatch:o}}}function AO(e){return Gh(e)&&"type"in e&&typeof e.type=="string"}var Ab=Symbol.for("immer-nothing"),C0=Symbol.for("immer-draftable"),pt=Symbol.for("immer-state");function on(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var It=Object,Qi=It.getPrototypeOf,Ll="constructor",Eu="prototype",ep="configurable",Al="enumerable",Ws="writable",ba="value",Gn=e=>!!e&&!!e[pt];function fn(e){var t;return e?Rb(e)||Tu(e)||!!e[C0]||!!((t=e[Ll])!=null&&t[C0])||Pu(e)||Ou(e):!1}var RO=It[Eu][Ll].toString(),E0=new WeakMap;function Rb(e){if(!e||!qh(e))return!1;const t=Qi(e);if(t===null||t===It[Eu])return!0;const n=It.hasOwnProperty.call(t,Ll)&&t[Ll];if(n===Object)return!0;if(!yi(n))return!1;let r=E0.get(n);return r===void 0&&(r=Function.toString.call(n),E0.set(n,r)),r===RO}function ku(e,t,n=!0){Fa(e)===0?(n?Reflect.ownKeys(e):It.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Fa(e){const t=e[pt];return t?t.type_:Tu(e)?1:Pu(e)?2:Ou(e)?3:0}var k0=(e,t,n=Fa(e))=>n===2?e.has(t):It[Eu].hasOwnProperty.call(e,t),tp=(e,t,n=Fa(e))=>n===2?e.get(t):e[t],Rl=(e,t,n,r=Fa(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function FO(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Tu=Array.isArray,Pu=e=>e instanceof Map,Ou=e=>e instanceof Set,qh=e=>typeof e=="object",yi=e=>typeof e=="function",od=e=>typeof e=="boolean";function NO(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Ln=e=>e.copy_||e.base_,Xh=e=>e.modified_?e.copy_:e.base_;function np(e,t){if(Pu(e))return new Map(e);if(Ou(e))return new Set(e);if(Tu(e))return Array[Eu].slice.call(e);const n=Rb(e);if(t===!0||t==="class_only"&&!n){const r=It.getOwnPropertyDescriptors(e);delete r[pt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Ws]===!1&&(l[Ws]=!0,l[ep]=!0),(l.get||l.set)&&(r[a]={[ep]:!0,[Ws]:!0,[Al]:l[Al],[ba]:e[a]})}return It.create(Qi(e),r)}else{const r=Qi(e);if(r!==null&&n)return{...e};const i=It.create(r);return It.assign(i,e)}}function Kh(e,t=!1){return Mu(e)||Gn(e)||!fn(e)||(Fa(e)>1&&It.defineProperties(e,{set:hs,add:hs,clear:hs,delete:hs}),It.freeze(e),t&&ku(e,(n,r)=>{Kh(r,!0)},!1)),e}function zO(){on(2)}var hs={[ba]:zO};function Mu(e){return e===null||!qh(e)?!0:It.isFrozen(e)}var Fl="MapSet",rp="Patches",T0="ArrayMethods",Fb={};function Zr(e){const t=Fb[e];return t||on(0,e),t}var P0=e=>!!Fb[e],wa,Nb=()=>wa,BO=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:P0(Fl)?Zr(Fl):void 0,arrayMethodsPlugin_:P0(T0)?Zr(T0):void 0});function O0(e,t){t&&(e.patchPlugin_=Zr(rp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function ip(e){op(e),e.drafts_.forEach(VO),e.drafts_=null}function op(e){e===wa&&(wa=e.parent_)}var M0=e=>wa=BO(wa,e);function VO(e){const t=e[pt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function j0(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[pt].modified_&&(ip(t),on(4)),fn(e)&&(e=$0(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[pt].base_,e,t)}else e=$0(t,n);return UO(t,e,!0),ip(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Ab?e:void 0}function $0(e,t){if(Mu(t))return t;const n=t[pt];if(!n)return Nl(t,e.handledSet_,e);if(!ju(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Vb(n,e)}return n.copy_}function UO(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Kh(t,n)}function zb(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var ju=(e,t)=>e.scope_===t,HO=[];function Bb(e,t,n,r){const i=Ln(e),o=e.type_;if(r!==void 0&&tp(i,r,o)===t){Rl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;ku(i,(s,u)=>{if(Gn(u)){const d=l.get(u)||[];d.push(s),l.set(u,d)}})}const a=e.draftLocations_.get(t)??HO;for(const l of a)Rl(i,l,n,o)}function WO(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!ju(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=Xh(o);Bb(e,o.draft_??o,a,n),Vb(o,i)})}function Vb(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}zb(e)}}function GO(e,t,n){const{scope_:r}=e;if(Gn(n)){const i=n[pt];ju(i,r)&&i.callbacks_.push(function(){Gs(e);const a=Xh(i);Bb(e,n,a,t)})}else fn(n)&&e.callbacks_.push(function(){const o=Ln(e);e.type_===3?o.has(n)&&Nl(n,r.handledSet_,r):tp(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Nl(tp(e.copy_,t,e.type_),r.handledSet_,r)})}function Nl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Gn(e)||t.has(e)||!fn(e)||Mu(e)||(t.add(e),ku(e,(r,i)=>{if(Gn(i)){const o=i[pt];if(ju(o,n)){const a=Xh(o);Rl(e,r,a,e.type_),zb(o)}}else fn(i)&&Nl(i,t,n)})),e}function YO(e,t){const n=Tu(e),r={type_:n?1:0,scope_:t?t.scope_:Nb(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=zl;n&&(i=[r],o=Sa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var zl={get(e,t){if(t===pt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Ln(e);if(!k0(i,t,e.type_))return qO(e,i,t);const o=i[t];if(e.finalized_||!fn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&NO(t))return o;if(o===ad(e.base_,t)){Gs(e);const a=e.type_===1?+t:t,l=sp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Ln(e)},ownKeys(e){return Reflect.ownKeys(Ln(e))},set(e,t,n){const r=Ub(Ln(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=ad(Ln(e),t),o=i==null?void 0:i[pt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(FO(n,i)&&(n!==void 0||k0(e.base_,t,e.type_)))return!0;Gs(e),ap(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),GO(e,t,n)),!0},deleteProperty(e,t){return Gs(e),ad(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),ap(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Ln(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ws]:!0,[ep]:e.type_!==1||t!=="length",[Al]:r[Al],[ba]:n[t]}},defineProperty(){on(11)},getPrototypeOf(e){return Qi(e.base_)},setPrototypeOf(){on(12)}},Sa={};for(let e in zl){let t=zl[e];Sa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Sa.deleteProperty=function(e,t){return Sa.set.call(this,e,t,void 0)};Sa.set=function(e,t,n){return zl.set.call(this,e[0],t,n,e[0])};function ad(e,t){const n=e[pt];return(n?Ln(n):e)[t]}function qO(e,t,n){var i;const r=Ub(t,n);return r?ba in r?r[ba]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Ub(e,t){if(!(t in e))return;let n=Qi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Qi(n)}}function ap(e){e.modified_||(e.modified_=!0,e.parent_&&ap(e.parent_))}function Gs(e){e.copy_||(e.assigned_=new Map,e.copy_=np(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var XO=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(yi(t)&&!yi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,d=>n.call(this,d,...u))}}yi(n)||on(6),r!==void 0&&!yi(r)&&on(7);let i;if(fn(t)){const o=M0(this),a=sp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?ip(o):op(o)}return O0(o,r),j0(i,o)}else if(!t||!qh(t)){if(i=n(t),i===void 0&&(i=t),i===Ab&&(i=void 0),this.autoFreeze_&&Kh(i,!0),r){const o=[],a=[];Zr(rp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else on(1,t)},this.produceWithPatches=(t,n)=>{if(yi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},od(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),od(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),od(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){fn(e)||on(8),Gn(e)&&(e=KO(e));const t=M0(this),n=sp(t,e,void 0);return n[pt].isManual_=!0,op(t),n}finishDraft(e,t){const n=e&&e[pt];(!n||!n.isManual_)&&on(9);const{scope_:r}=n;return O0(r,t),j0(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Zr(rp).applyPatches_;return Gn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function sp(e,t,n,r){const[i,o]=Pu(t)?Zr(Fl).proxyMap_(t,n):Ou(t)?Zr(Fl).proxySet_(t,n):YO(t,n);return((n==null?void 0:n.scope_)??Nb()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?WO(n,o,r):o.callbacks_.push(function(s){var d;(d=s.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function KO(e){return Gn(e)||on(10,e),Hb(e)}function Hb(e){if(!fn(e)||Mu(e))return e;const t=e[pt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=np(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=np(e,!0);return ku(n,(i,o)=>{Rl(n,i,Hb(o))},r),t&&(t.finalized_=!1),n}var QO=new XO,Wb=QO.produce;function Gb(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var ZO=Gb(),JO=Gb,e4=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Dl:Dl.apply(null,arguments)};function I0(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(zn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>AO(r)&&r.type===e,n}var Yb=class Fo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Fo.prototype)}static get[Symbol.species](){return Fo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Fo(...t[0].concat(this)):new Fo(...t.concat(this))}};function D0(e){return fn(e)?Wb(e,()=>{}):e}function ms(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function t4(e){return typeof e=="boolean"}var n4=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new Yb;return n&&(t4(n)?a.push(ZO):a.push(JO(n.extraArgument))),a},r4="RTK_autoBatch",L0=e=>t=>{setTimeout(t,e)},i4=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:L0(10):e.type==="callback"?e.queueNotification:L0(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),y=r.subscribe(c);return l.add(d),()=>{y(),l.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[r4]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(d)}finally{i=!0}}})},o4=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new Yb(e);return r&&i.push(i4(typeof r=="object"?r:void 0)),i};function a4(e){const t=n4(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(Gh(n))s=DO(n);else throw new Error(zn(1));let u;typeof r=="function"?u=r(t):u=t();let d=Dl;i&&(d=e4({trace:!1,...typeof i=="object"&&i}));const c=LO(...u),y=o4(c);let f=typeof l=="function"?l(y):y();const m=d(...f);return Yh(s,a,m)}function qb(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(zn(28));if(l in t)throw new Error(zn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function s4(e){return typeof e=="function"}function l4(e,t){let[n,r,i]=qb(t),o;if(s4(e))o=()=>D0(e());else{const l=D0(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(Gn(d)){const f=c(d,s);return f===void 0?d:f}else{if(fn(d))return Wb(d,y=>c(y,s));{const y=c(d,s);if(y===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}}return d},l)}return a.getInitialState=o,a}var u4=Symbol.for("rtk-slice-createasyncthunk");function c4(e,t){return`${e}/${t}`}function d4({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[u4];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(zn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(p4()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(S,C){const T=typeof S=="string"?S:S.type;if(!T)throw new Error(zn(12));if(T in u.sliceCaseReducersByType)throw new Error(zn(13));return u.sliceCaseReducersByType[T]=C,d},addMatcher(S,C){return u.sliceMatchers.push({matcher:S,reducer:C}),d},exposeAction(S,C){return u.actionCreators[S]=C,d},exposeCaseReducer(S,C){return u.sliceCaseReducersByName[S]=C,d}};s.forEach(S=>{const C=l[S],T={reducerName:S,type:c4(o,S),createNotation:typeof i.reducers=="function"};m4(C)?v4(T,C,d,t):h4(T,C,d)});function c(){const[S={},C=[],T=void 0]=typeof i.extraReducers=="function"?qb(i.extraReducers):[i.extraReducers],_={...S,...u.sliceCaseReducersByType};return l4(i.initialState,E=>{for(let L in _)E.addCase(L,_[L]);for(let L of u.sliceMatchers)E.addMatcher(L.matcher,L.reducer);for(let L of C)E.addMatcher(L.matcher,L.reducer);T&&E.addDefaultCase(T)})}const y=S=>S,f=new Map,m=new WeakMap;let v;function w(S,C){return v||(v=c()),v(S,C)}function p(){return v||(v=c()),v.getInitialState()}function g(S,C=!1){function T(E){let L=E[S];return typeof L>"u"&&C&&(L=ms(m,T,p)),L}function _(E=y){const L=ms(f,C,()=>new WeakMap);return ms(L,E,()=>{const D={};for(const[A,O]of Object.entries(i.selectors??{}))D[A]=f4(O,E,()=>ms(m,E,p),C);return D})}return{reducerPath:S,getSelectors:_,get selectors(){return _(T)},selectSlice:T}}const x={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:p,...g(a),injectInto(S,{reducerPath:C,...T}={}){const _=C??a;return S.inject({reducerPath:_,reducer:w},T),{...x,...g(_,!0)}}};return x}}function f4(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var Xb=d4();function p4(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function h4({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!g4(r))throw new Error(zn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?I0(e,a):I0(e))}function m4(e){return e._reducerDefinitionType==="asyncThunk"}function g4(e){return e._reducerDefinitionType==="reducerWithPrepare"}function v4({type:e,reducerName:t},n,r,i){if(!i)throw new Error(zn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:d}=n,c=i(e,o,d);r.exposeAction(t,c),a&&r.addCase(c.fulfilled,a),l&&r.addCase(c.pending,l),s&&r.addCase(c.rejected,s),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(t,{fulfilled:a||gs,pending:l||gs,rejected:s||gs,settled:u||gs})}function gs(){}function zn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Kb=Xb({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===t.payload.id);r&&r.quantity>=n.stock||(r?r.quantity=(r.quantity||0)+1:e.items.push({...t.payload,quantity:1}))},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:Na,removeFromCart:y4,clearCart:Qh,addAllToCart:x4,incrementQuantity:b4,decrementQuantity:w4}=Kb.actions,S4=Kb.reducer;function Qb(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Qb(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Wr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Qb(e))&&(r&&(r+=" "),r+=t);return r}function _4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}_4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var za=e=>typeof e=="number"&&!isNaN(e),Jr=e=>typeof e=="string",Yn=e=>typeof e=="function",C4=e=>Jr(e)||za(e),lp=e=>Jr(e)||Yn(e)?e:null,E4=(e,t)=>e===!1||za(e)&&e>0?e:t,up=e=>b.isValidElement(e)||Jr(e)||Yn(e)||za(e);function k4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function T4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:d,playToast:c}){let y=n?`${e}--${a}`:e,f=n?`${t}--${a}`:t,m=b.useRef(0);return b.useLayoutEffect(()=>{let v=u.current,w=y.split(" "),p=g=>{g.target===u.current&&(c(),v.removeEventListener("animationend",p),v.removeEventListener("animationcancel",p),m.current===0&&g.type!=="animationcancel"&&v.classList.remove(...w))};v.classList.add(...w),v.addEventListener("animationend",p),v.addEventListener("animationcancel",p)},[]),b.useEffect(()=>{let v=u.current,w=()=>{v.removeEventListener("animationend",w),r?k4(v,s,i):s()};d||(l?w():(m.current=1,v.className+=` ${f}`,v.addEventListener("animationend",w)))},[d]),q.createElement(q.Fragment,null,o)}}function A0(e,t){return{content:Zb(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Zb(e,t,n=!1){return b.isValidElement(e)&&!Jr(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Yn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function P4({closeToast:e,theme:t,ariaLabel:n="close"}){return q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function O4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:d}){let c=i||a&&l===0,y={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(y.transform=`scaleX(${l})`);let f=Wr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),m=Yn(o)?o({rtl:s,type:r,defaultClassName:f}):Wr(f,o),v={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":c},q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),q.createElement("div",{role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:m,style:y,...v}))}var M4=1,Jb=()=>`${M4++}`;function j4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,d=g=>(u.add(g),()=>u.delete(g)),c=()=>{a=Array.from(s.values()),u.forEach(g=>g())},y=({containerId:g,toastId:x,updateId:S})=>{let C=g?g!==e:e!==1,T=s.has(x)&&S==null;return C||T},f=(g,x)=>{s.forEach(S=>{var C;(x==null||x===S.props.toastId)&&((C=S.toggle)==null||C.call(S,g))})},m=g=>{var x,S;(S=(x=g.props)==null?void 0:x.onClose)==null||S.call(x,g.removalReason),g.isActive=!1},v=g=>{if(g==null)s.forEach(m);else{let x=s.get(g);x&&m(x)}c()},w=()=>{i-=o.length,o=[]},p=g=>{var x,S;let{toastId:C,updateId:T}=g.props,_=T==null;g.staleId&&s.delete(g.staleId),g.isActive=!0,s.set(C,g),c(),n(A0(g,_?"added":"updated")),_&&((S=(x=g.props).onOpen)==null||S.call(x))};return{id:e,props:l,observe:d,toggle:f,removeToast:v,toasts:s,clearQueue:w,buildToast:(g,x)=>{if(y(x))return;let{toastId:S,updateId:C,data:T,staleId:_,delay:E}=x,L=C==null;L&&i++;let D={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([O,I])=>I!=null)),toastId:S,updateId:C,data:T,isIn:!1,className:lp(x.className||l.toastClassName),progressClassName:lp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:E4(x.autoClose,l.autoClose),closeToast(O){s.get(S).removalReason=O,v(S)},deleteToast(){let O=s.get(S);if(O!=null){if(n(A0(O,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){p(o.shift());return}c()}}};D.closeButton=l.closeButton,x.closeButton===!1||up(x.closeButton)?D.closeButton=x.closeButton:x.closeButton===!0&&(D.closeButton=up(l.closeButton)?l.closeButton:!0);let A={content:g,props:D,staleId:_};l.limit&&l.limit>0&&i>l.limit&&L?o.push(A):za(E)?setTimeout(()=>{p(A)},E):p(A)},setProps(g){l=g},setToggle:(g,x)=>{let S=s.get(g);S&&(S.toggle=x)},isToastActive:g=>{var x;return(x=s.get(g))==null?void 0:x.isActive},getSnapshot:()=>a}}var dt=new Map,_a=[],cp=new Set,$4=e=>cp.forEach(t=>t(e)),ew=()=>dt.size>0;function I4(){_a.forEach(e=>nw(e.content,e.options)),_a=[]}var D4=(e,{containerId:t})=>{var n;return(n=dt.get(t||1))==null?void 0:n.toasts.get(e)};function tw(e,t){var n;if(t)return!!((n=dt.get(t))!=null&&n.isToastActive(e));let r=!1;return dt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function L4(e){if(!ew()){_a=_a.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||C4(e))dt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=dt.get(e.containerId);t?t.removeToast(e.id):dt.forEach(n=>{n.removeToast(e.id)})}}var A4=(e={})=>{dt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function nw(e,t){up(e)&&(ew()||_a.push({content:e,options:t}),dt.forEach(n=>{n.buildToast(e,t)}))}function R4(e){var t;(t=dt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function rw(e,t){dt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function F4(e){let t=e.containerId||1;return{subscribe(n){let r=j4(t,e,$4);dt.set(t,r);let i=r.observe(n);return I4(),()=>{i(),dt.delete(t)}},setProps(n){var r;(r=dt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=dt.get(t))==null?void 0:n.getSnapshot()}}}function N4(e){return cp.add(e),()=>{cp.delete(e)}}function z4(e){return e&&(Jr(e.toastId)||za(e.toastId))?e.toastId:Jb()}function Ba(e,t){return nw(e,t),t.toastId}function $u(e,t){return{...t,type:t&&t.type||e,toastId:z4(t)}}function Iu(e){return(t,n)=>Ba(t,$u(e,n))}function J(e,t){return Ba(e,$u("default",t))}J.loading=(e,t)=>Ba(e,$u("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function B4(e,{pending:t,error:n,success:r},i){let o;t&&(o=Jr(t)?J.loading(t,i):J.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,c)=>{if(d==null){J.dismiss(o);return}let y={type:u,...a,...i,data:c},f=Jr(d)?{render:d}:d;return o?J.update(o,{...y,...f}):J(f.render,{...y,...f}),c},s=Yn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}J.promise=B4;J.success=Iu("success");J.info=Iu("info");J.error=Iu("error");J.warning=Iu("warning");J.warn=J.warning;J.dark=(e,t)=>Ba(e,$u("default",{theme:"dark",...t}));function V4(e){L4(e)}J.dismiss=V4;J.clearWaitingQueue=A4;J.isActive=tw;J.update=(e,t={})=>{let n=D4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Jb()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Ba(a,o)}};J.done=e=>{J.update(e,{progress:1})};J.onChange=N4;J.play=e=>rw(!0,e);J.pause=e=>rw(!1,e);function U4(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(F4(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:d}=u.props;s.has(d)||s.set(d,[]),s.get(d).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:tw,count:o==null?void 0:o.length}}function H4(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:d,closeOnClick:c}=e;R4({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return y(),()=>{f()}},[e.pauseOnFocusLoss]);function y(){document.hasFocus()||p(),window.addEventListener("focus",w),window.addEventListener("blur",p)}function f(){window.removeEventListener("focus",w),window.removeEventListener("blur",p)}function m(_){if(e.draggable===!0||e.draggable===_.pointerType){g();let E=o.current;a.canCloseOnClick=!0,a.canDrag=!0,E.style.transition="none",e.draggableDirection==="x"?(a.start=_.clientX,a.removalDistance=E.offsetWidth*(e.draggablePercent/100)):(a.start=_.clientY,a.removalDistance=E.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function v(_){let{top:E,bottom:L,left:D,right:A}=o.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&e.pauseOnHover&&_.clientX>=D&&_.clientX<=A&&_.clientY>=E&&_.clientY<=L?p():w()}function w(){n(!0)}function p(){n(!1)}function g(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",C)}function x(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",C)}function S(_){let E=o.current;if(a.canDrag&&E){a.didMove=!0,t&&p(),e.draggableDirection==="x"?a.delta=_.clientX-a.start:a.delta=_.clientY-a.start,a.start!==_.clientX&&(a.canCloseOnClick=!1);let L=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;E.style.transform=`translate3d(${L},0)`,E.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function C(){x();let _=o.current;if(a.canDrag&&a.didMove&&_){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}let T={onPointerDown:m,onPointerUp:v};return l&&s&&(T.onMouseEnter=p,e.stacked||(T.onMouseLeave=w)),c&&(T.onClick=_=>{d&&d(_),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:p,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:T}}var W4=typeof window<"u"?b.useLayoutEffect:b.useEffect,Du=({theme:e,type:t,isLoading:n,...r})=>q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function G4(e){return q.createElement(Du,{...e},q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function Y4(e){return q.createElement(Du,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function q4(e){return q.createElement(Du,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function X4(e){return q.createElement(Du,{...e},q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function K4(){return q.createElement("div",{className:"Toastify__spinner"})}var dp={info:Y4,warning:G4,success:q4,error:X4,spinner:K4},Q4=e=>e in dp;function Z4({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Yn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=dp.spinner():Q4(t)&&(i=dp[t](o))),i}var J4=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=H4(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:d,hideProgressBar:c,closeToast:y,transition:f,position:m,className:v,style:w,progressClassName:p,updateId:g,role:x,progress:S,rtl:C,toastId:T,deleteToast:_,isIn:E,isLoading:L,closeOnClick:D,theme:A,ariaLabel:O}=e,I=Wr("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":D}),R=Yn(v)?v({rtl:C,position:m,type:d,defaultClassName:I}):Wr(I,v),M=Z4(e),j=!!S||!s,F={closeToast:y,type:d,theme:A},P=null;return a===!1||(Yn(a)?P=a(F):b.isValidElement(a)?P=b.cloneElement(a,F):P=P4(F)),q.createElement(f,{isIn:E,done:_,position:m,preventExitTransition:n,nodeRef:r,playToast:o},q.createElement("div",{id:T,tabIndex:0,onClick:u,"data-in":E,className:R,...i,style:w,ref:r,...E&&{role:x,"aria-label":O}},M!=null&&q.createElement("div",{className:Wr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!L})},M),Zb(l,e,!t),P,!e.customProgressBar&&q.createElement(O4,{...g&&!j?{key:`p-${g}`}:{},rtl:C,theme:A,delay:s,isRunning:t,isIn:E,closeToast:y,hide:c,type:d,className:p,controlledProgress:j,progress:S||0})))},e3=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),t3=T4(e3("bounce",!0)),n3={position:"top-right",transition:t3,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function oi(e){let t={...n3,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=U4(t),{className:u,style:d,rtl:c,containerId:y,hotKeys:f}=t;function m(w){let p=Wr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":c});return Yn(u)?u({position:w,rtl:c,defaultClassName:p}):Wr(p,lp(u))}function v(){n&&(i(!0),J.play())}return W4(()=>{var w;if(n){let p=o.current.querySelectorAll('[data-in="true"]'),g=12,x=(w=t.position)==null?void 0:w.includes("top"),S=0,C=0;Array.from(p).reverse().forEach((T,_)=>{let E=T;E.classList.add("Toastify__toast--stacked"),_>0&&(E.dataset.collapsed=`${r}`),E.dataset.pos||(E.dataset.pos=x?"top":"bot");let L=S*(r?.2:1)+(r?0:g*_);E.style.setProperty("--y",`${x?L:L*-1}px`),E.style.setProperty("--g",`${g}`),E.style.setProperty("--s",`${1-(r?C:0)}`),S+=E.offsetHeight,C+=.025})}},[r,s,n]),b.useEffect(()=>{function w(p){var g;let x=o.current;f(p)&&((g=x.querySelector('[tabIndex="0"]'))==null||g.focus(),i(!1),J.pause()),p.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),J.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[f]),q.createElement("section",{ref:o,className:"Toastify",id:y,onMouseEnter:()=>{n&&(i(!1),J.pause())},onMouseLeave:v,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,p)=>{let g=p.length?{...d}:{...d,pointerEvents:"none"};return q.createElement("div",{tabIndex:-1,className:m(w),"data-stacked":n,style:g,key:`c-${w}`},p.map(({content:x,props:S})=>q.createElement(J4,{...S,stacked:n,collapseAll:v,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},x)))}))}const Ca="/Didiv/assets/nofoto-2f8d9d99.png",iw=()=>{const e=Qn(),[t,n]=b.useState([]);b.useEffect(()=>{const o=new Date,a=new Date;a.setDate(o.getDate()-7);const l=a.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${l}`).then(s=>s.json()).then(s=>n(s.data)).catch(s=>console.error("Помилка завантаження нових товарів:",s))},[]),console.log(t);const r=[...t].sort(()=>Math.random()-.5).slice(0,3),i=o=>{e(Na({...o,quantity:1})),J.success(`${o.name} додано в кошик!`)};return!t||t.length===0?null:h.jsxs(vO,{children:[h.jsx(oi,{}),h.jsx(yO,{children:"Нові товари"}),h.jsxs(xO,{children:[r.map(o=>{var a;return h.jsxs(bO,{children:[h.jsxs(wO,{to:`/product/${o.id}`,children:[h.jsx(SO,{children:"Новинка"}),h.jsx("img",{src:((a=o.images)==null?void 0:a[0].url)||Ca,alt:o.name,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=Ca}}),h.jsx("div",{className:"overlay"})]}),h.jsxs(_O,{children:[h.jsx(CO,{children:o.name}),h.jsxs(EO,{children:[h.jsxs(kO,{children:[o.price," грн"]}),h.jsx(TO,{onClick:()=>i(o),children:h.jsx(Ra,{size:22})})]})]})]},o.id)}),h.jsx(PO,{to:"/catalog/new",children:h.jsxs(OO,{children:[h.jsx("p",{children:"Усі новинки"}),h.jsx(MO,{children:h.jsx(Hh,{size:24})})]})})]})]})};function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function r3(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function i3(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var o3=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(i3(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=r3(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),nt="-ms-",Bl="-moz-",ce="-webkit-",ow="comm",Zh="rule",Jh="decl",a3="@import",aw="@keyframes",s3="@layer",l3=Math.abs,Lu=String.fromCharCode,u3=Object.assign;function c3(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function sw(e){return e.trim()}function d3(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function fp(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function Ea(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function em(e){return e.length}function vs(e,t){return t.push(e),e}function f3(e,t){return e.map(t).join("")}var Au=1,Zi=1,lw=0,kt=0,Ie=0,so="";function Ru(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Au,column:Zi,length:a,return:""}}function Eo(e,t){return u3(Ru("",null,null,"",null,null,0),e,{length:-e.length},t)}function p3(){return Ie}function h3(){return Ie=kt>0?Ke(so,--kt):0,Zi--,Ie===10&&(Zi=1,Au--),Ie}function Lt(){return Ie=kt<lw?Ke(so,kt++):0,Zi++,Ie===10&&(Zi=1,Au++),Ie}function En(){return Ke(so,kt)}function Ys(){return kt}function Va(e,t){return Ea(so,e,t)}function ka(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function uw(e){return Au=Zi=1,lw=xn(so=e),kt=0,[]}function cw(e){return so="",e}function qs(e){return sw(Va(kt-1,pp(e===91?e+2:e===40?e+1:e)))}function m3(e){for(;(Ie=En())&&Ie<33;)Lt();return ka(e)>2||ka(Ie)>3?"":" "}function g3(e,t){for(;--t&&Lt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Va(e,Ys()+(t<6&&En()==32&&Lt()==32))}function pp(e){for(;Lt();)switch(Ie){case e:return kt;case 34:case 39:e!==34&&e!==39&&pp(Ie);break;case 40:e===41&&pp(e);break;case 92:Lt();break}return kt}function v3(e,t){for(;Lt()&&e+Ie!==47+10;)if(e+Ie===42+42&&En()===47)break;return"/*"+Va(t,kt-1)+"*"+Lu(e===47?e:Lt())}function y3(e){for(;!ka(En());)Lt();return Va(e,kt)}function x3(e){return cw(Xs("",null,null,null,[""],e=uw(e),0,[0],e))}function Xs(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,f=0,m=0,v=1,w=1,p=1,g=0,x="",S=i,C=o,T=r,_=x;w;)switch(m=g,g=Lt()){case 40:if(m!=108&&Ke(_,c-1)==58){fp(_+=de(qs(g),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:_+=qs(g);break;case 9:case 10:case 13:case 32:_+=m3(m);break;case 92:_+=g3(Ys()-1,7);continue;case 47:switch(En()){case 42:case 47:vs(b3(v3(Lt(),Ys()),t,n),s);break;default:_+="/"}break;case 123*v:l[u++]=xn(_)*p;case 125*v:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+d:p==-1&&(_=de(_,/\f/g,"")),f>0&&xn(_)-c&&vs(f>32?F0(_+";",r,n,c-1):F0(de(_," ","")+";",r,n,c-2),s);break;case 59:_+=";";default:if(vs(T=R0(_,t,n,u,d,i,l,x,S=[],C=[],c),o),g===123)if(d===0)Xs(_,t,T,T,S,o,c,l,C);else switch(y===99&&Ke(_,3)===110?100:y){case 100:case 108:case 109:case 115:Xs(e,T,T,r&&vs(R0(e,T,T,0,0,i,l,x,i,S=[],c),C),i,C,c,l,r?S:C);break;default:Xs(_,T,T,T,[""],C,0,l,C)}}u=d=f=0,v=p=1,x=_="",c=a;break;case 58:c=1+xn(_),f=m;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&h3()==125)continue}switch(_+=Lu(g),g*v){case 38:p=d>0?1:(_+="\f",-1);break;case 44:l[u++]=(xn(_)-1)*p,p=1;break;case 64:En()===45&&(_+=qs(Lt())),y=En(),d=c=xn(x=_+=y3(Ys())),g++;break;case 45:m===45&&xn(_)==2&&(v=0)}}return o}function R0(e,t,n,r,i,o,a,l,s,u,d){for(var c=i-1,y=i===0?o:[""],f=em(y),m=0,v=0,w=0;m<r;++m)for(var p=0,g=Ea(e,c+1,c=l3(v=a[m])),x=e;p<f;++p)(x=sw(v>0?y[p]+" "+g:de(g,/&\f/g,y[p])))&&(s[w++]=x);return Ru(e,t,n,i===0?Zh:l,s,u,d)}function b3(e,t,n){return Ru(e,t,n,ow,Lu(p3()),Ea(e,2,-2),0)}function F0(e,t,n,r){return Ru(e,t,n,Jh,Ea(e,0,r),Ea(e,r+1,-1),r)}function Ri(e,t){for(var n="",r=em(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function w3(e,t,n,r){switch(e.type){case s3:if(e.children.length)break;case a3:case Jh:return e.return=e.return||e.value;case ow:return"";case aw:return e.return=e.value+"{"+Ri(e.children,r)+"}";case Zh:e.value=e.props.join(",")}return xn(n=Ri(e.children,r))?e.return=e.value+"{"+n+"}":""}function S3(e){var t=em(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function _3(e){return function(t){t.root||(t=t.return)&&e(t)}}function C3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var E3=function(t,n,r){for(var i=0,o=0;i=o,o=En(),i===38&&o===12&&(n[r]=1),!ka(o);)Lt();return Va(t,kt)},k3=function(t,n){var r=-1,i=44;do switch(ka(i)){case 0:i===38&&En()===12&&(n[r]=1),t[r]+=E3(kt-1,n,r);break;case 2:t[r]+=qs(i);break;case 4:if(i===44){t[++r]=En()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Lu(i)}while(i=Lt());return t},T3=function(t,n){return cw(k3(uw(t),n))},N0=new WeakMap,P3=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!N0.get(r))&&!i){N0.set(t,!0);for(var o=[],a=T3(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var d=0;d<l.length;d++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},O3=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function dw(e,t){switch(c3(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+Bl+e+nt+e+e;case 6828:case 4268:return ce+e+nt+e+e;case 6165:return ce+e+nt+"flex-"+e+e;case 5187:return ce+e+de(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+nt+"flex-$1$2")+e;case 5443:return ce+e+nt+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ce+e+nt+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+nt+de(e,"shrink","negative")+e;case 5292:return ce+e+nt+de(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+de(e,"-grow","")+ce+e+nt+de(e,"grow","positive")+e;case 4554:return ce+de(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Bl+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fp(e,"stretch")?dw(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ke(e,t+1)!==115)break;case 6444:switch(Ke(e,xn(e)-3-(~fp(e,"!important")&&10))){case 107:return de(e,":",":"+ce)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+nt+"$2box$3")+e}break;case 5936:switch(Ke(e,t+11)){case 114:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+nt+e+e}return e}var M3=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Jh:t.return=dw(t.value,t.length);break;case aw:return Ri([Eo(t,{value:de(t.value,"@","@"+ce)})],i);case Zh:if(t.length)return f3(t.props,function(o){switch(d3(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ri([Eo(t,{props:[de(o,/:(read-\w+)/,":"+Bl+"$1")]})],i);case"::placeholder":return Ri([Eo(t,{props:[de(o,/:(plac\w+)/,":"+ce+"input-$1")]}),Eo(t,{props:[de(o,/:(plac\w+)/,":"+Bl+"$1")]}),Eo(t,{props:[de(o,/:(plac\w+)/,nt+"input-$1")]})],i)}return""})}},j3=[M3],$3=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||j3,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)o[w[p]]=!0;l.push(v)});var s,u=[P3,O3];{var d,c=[w3,_3(function(v){d.insert(v)})],y=S3(u.concat(i,c)),f=function(w){return Ri(x3(w),y)};s=function(w,p,g,x){d=g,f(w?w+"{"+p.styles+"}":p.styles),x&&(m.inserted[p.name]=!0)}}var m={key:n,sheet:new o3({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return m.sheet.hydrate(l),m},fw={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,tm=Ye?Symbol.for("react.element"):60103,nm=Ye?Symbol.for("react.portal"):60106,Fu=Ye?Symbol.for("react.fragment"):60107,Nu=Ye?Symbol.for("react.strict_mode"):60108,zu=Ye?Symbol.for("react.profiler"):60114,Bu=Ye?Symbol.for("react.provider"):60109,Vu=Ye?Symbol.for("react.context"):60110,rm=Ye?Symbol.for("react.async_mode"):60111,Uu=Ye?Symbol.for("react.concurrent_mode"):60111,Hu=Ye?Symbol.for("react.forward_ref"):60112,Wu=Ye?Symbol.for("react.suspense"):60113,I3=Ye?Symbol.for("react.suspense_list"):60120,Gu=Ye?Symbol.for("react.memo"):60115,Yu=Ye?Symbol.for("react.lazy"):60116,D3=Ye?Symbol.for("react.block"):60121,L3=Ye?Symbol.for("react.fundamental"):60117,A3=Ye?Symbol.for("react.responder"):60118,R3=Ye?Symbol.for("react.scope"):60119;function zt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tm:switch(e=e.type,e){case rm:case Uu:case Fu:case zu:case Nu:case Wu:return e;default:switch(e=e&&e.$$typeof,e){case Vu:case Hu:case Yu:case Gu:case Bu:return e;default:return t}}case nm:return t}}}function pw(e){return zt(e)===Uu}me.AsyncMode=rm;me.ConcurrentMode=Uu;me.ContextConsumer=Vu;me.ContextProvider=Bu;me.Element=tm;me.ForwardRef=Hu;me.Fragment=Fu;me.Lazy=Yu;me.Memo=Gu;me.Portal=nm;me.Profiler=zu;me.StrictMode=Nu;me.Suspense=Wu;me.isAsyncMode=function(e){return pw(e)||zt(e)===rm};me.isConcurrentMode=pw;me.isContextConsumer=function(e){return zt(e)===Vu};me.isContextProvider=function(e){return zt(e)===Bu};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tm};me.isForwardRef=function(e){return zt(e)===Hu};me.isFragment=function(e){return zt(e)===Fu};me.isLazy=function(e){return zt(e)===Yu};me.isMemo=function(e){return zt(e)===Gu};me.isPortal=function(e){return zt(e)===nm};me.isProfiler=function(e){return zt(e)===zu};me.isStrictMode=function(e){return zt(e)===Nu};me.isSuspense=function(e){return zt(e)===Wu};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fu||e===Uu||e===zu||e===Nu||e===Wu||e===I3||typeof e=="object"&&e!==null&&(e.$$typeof===Yu||e.$$typeof===Gu||e.$$typeof===Bu||e.$$typeof===Vu||e.$$typeof===Hu||e.$$typeof===L3||e.$$typeof===A3||e.$$typeof===R3||e.$$typeof===D3)};me.typeOf=zt;fw.exports=me;var F3=fw.exports,hw=F3,N3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},z3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mw={};mw[hw.ForwardRef]=N3;mw[hw.Memo]=z3;var B3=!0;function gw(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var im=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||B3===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},vw=function(t,n,r){im(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function V3(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var U3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},H3=/[A-Z]|^ms/g,W3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,yw=function(t){return t.charCodeAt(1)===45},z0=function(t){return t!=null&&typeof t!="boolean"},sd=C3(function(e){return yw(e)?e:e.replace(H3,"-$&").toLowerCase()}),B0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(W3,function(r,i,o){return bn={name:i,styles:o,next:bn},i})}return U3[t]!==1&&!yw(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ta(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return bn={name:n.name,styles:n.styles,next:bn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)bn={name:r.name,styles:r.styles,next:bn},r=r.next;var i=n.styles+";";return i}return G3(e,t,n)}case"function":{if(e!==void 0){var o=bn,a=n(e);return bn=o,Ta(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function G3(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ta(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":z0(a)&&(r+=sd(o)+":"+B0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)z0(a[l])&&(r+=sd(o)+":"+B0(o,a[l])+";");else{var s=Ta(e,t,a);switch(o){case"animation":case"animationName":{r+=sd(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var V0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,bn,om=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";bn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ta(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Ta(r,n,t[l]),i&&(o+=a[l]);V0.lastIndex=0;for(var s="",u;(u=V0.exec(o))!==null;)s+="-"+u[1];var d=V3(o)+s;return{name:d,styles:o,next:bn}},Y3=function(t){return t()},q3=Yd["useInsertionEffect"]?Yd["useInsertionEffect"]:!1,xw=q3||Y3,am={}.hasOwnProperty,bw=b.createContext(typeof HTMLElement<"u"?$3({key:"css"}):null);bw.Provider;var ww=function(t){return b.forwardRef(function(n,r){var i=b.useContext(bw);return t(n,i,r)})},Sw=b.createContext({}),hp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",X3=function(t,n){var r={};for(var i in n)am.call(n,i)&&(r[i]=n[i]);return r[hp]=t,r},K3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return im(n,r,i),xw(function(){return vw(n,r,i)}),null},Q3=ww(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[hp],o=[r],a="";typeof e.className=="string"?a=gw(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=om(o,void 0,b.useContext(Sw));a+=t.key+"-"+l.name;var s={};for(var u in e)am.call(e,u)&&u!=="css"&&u!==hp&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(K3,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),Z3=Q3,K=function(t,n){var r=arguments;if(n==null||!am.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=Z3,o[1]=X3(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function sm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return om(t)}var J3=function(){var t=sm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},eM=zk,tM=function(t){return t!=="theme"},U0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?eM:tM},H0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},nM=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return im(n,r,i),xw(function(){return vw(n,r,i)}),null},rM=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=H0(t,n,r),s=l||U0(i),u=!s("as");return function(){var d=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&c.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)c.push.apply(c,d);else{c.push(d[0][0]);for(var y=d.length,f=1;f<y;f++)c.push(d[f],d[0][f])}var m=ww(function(v,w,p){var g=u&&v.as||i,x="",S=[],C=v;if(v.theme==null){C={};for(var T in v)C[T]=v[T];C.theme=b.useContext(Sw)}typeof v.className=="string"?x=gw(w.registered,S,v.className):v.className!=null&&(x=v.className+" ");var _=om(c.concat(S),w.registered,C);x+=w.key+"-"+_.name,a!==void 0&&(x+=" "+a);var E=u&&l===void 0?U0(g):s,L={};for(var D in v)u&&D==="as"||E(D)&&(L[D]=v[D]);return L.className=x,L.ref=p,b.createElement(b.Fragment,null,b.createElement(nM,{cache:w,serialized:_,isStringTag:typeof g=="string"}),b.createElement(g,L))});return m.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=c,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return"."+a}}),m.withComponent=function(v,w){return e(v,Z({},n,w,{shouldForwardProp:H0(m,w,!0)})).apply(void 0,c)},m}},iM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ae=rM.bind();iM.forEach(function(e){Ae[e]=Ae(e)});const oM=Ae.section`
  background-color: var(--second-background);
`,aM=Ae.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding-top: 30px;
   padding-left: 20px;
    padding-right: 20px;
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,sM=Ae.div`

`,lM=Ae.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,uM=Ae.div`
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
`;const cM=Ae(Oe)`
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
`,dM=Ae.div`
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
`,fM=Ae.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,pM=Ae.p`
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
`;var hM={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};mM(hM);function mM(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var gM="#4fa94d",vM={"aria-busy":!0,role:"progressbar"},yM=k.div`
  display: ${e=>e.$visible?"flex":"none"};
`,xM="http://www.w3.org/2000/svg",qu=({height:e=100,width:t=100,radius:n=5,color:r=gM,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>h.jsx(yM,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...vM,children:h.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:xM,"data-testid":"ball-triangle-svg",children:[h.jsx("title",{children:"Ball Triangle"}),h.jsx("desc",{children:"Animated representation of three balls"}),h.jsx("g",{fill:"none",fillRule:"evenodd",children:h.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[h.jsxs("circle",{cx:"5",cy:"50",r:n,children:[h.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),h.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),h.jsxs("circle",{cx:"27",cy:"5",r:n,children:[h.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),h.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),h.jsxs("circle",{cx:"49",cy:"50",r:n,children:[h.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),h.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),Zt=242.776657104492,bM=1.6,wM=Bh`
12.5% {
  stroke-dasharray: ${Zt*.14}px, ${Zt}px;
  stroke-dashoffset: -${Zt*.11}px;
}
43.75% {
  stroke-dasharray: ${Zt*.35}px, ${Zt}px;
  stroke-dashoffset: -${Zt*.35}px;
}
100% {
  stroke-dasharray: ${Zt*.01}px, ${Zt}px;
  stroke-dashoffset: -${Zt*.99}px;
}
`;k.path`
  stroke-dasharray: ${Zt*.01}px, ${Zt};
  stroke-dashoffset: 0;
  animation: ${wM} ${bM}s linear infinite;
`;var SM=Bh`
to {
   transform: rotate(360deg);
 }
`;k.svg`
  animation: ${SM} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var _M=Bh`
to {
   stroke-dashoffset: 136;
 }
`;k.polygon`
  stroke-dasharray: 17;
  animation: ${_M} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;k.svg`
  transform-origin: 50% 65%;
`;const CM=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?h.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:h.jsx(qu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):h.jsx(oM,{children:h.jsxs(aM,{children:[h.jsx(sM,{children:h.jsx(iw,{})}),h.jsx(lM,{children:"Каталог"}),h.jsx(uM,{children:e.map(i=>h.jsxs(cM,{to:`/catalog/${i.title}`,children:[h.jsx(dM,{children:h.jsx(fM,{src:i.image,alt:i.title})}),h.jsx(pM,{children:i.title})]},i.id))})]})})},EM=Ae.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,kM=Ae.h1`
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
`,TM=Ae.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,PM=Ae(Oe)`

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

  
`,OM=()=>h.jsxs(EM,{children:[h.jsxs(kM,{children:[" ",h.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),h.jsx(TM,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),h.jsx(PM,{children:" На головну"})]});const MM=k.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,jM=k.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var _w={},Cw={},Xu={},Ew={exports:{}},Ua={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var W0=Object.getOwnPropertySymbols,$M=Object.prototype.hasOwnProperty,IM=Object.prototype.propertyIsEnumerable;function DM(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function LM(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var AM=LM()?Object.assign:function(e,t){for(var n,r=DM(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)$M.call(n,a)&&(r[a]=n[a]);if(W0){i=W0(n);for(var l=0;l<i.length;l++)IM.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},kw={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=AM,lo=60103,Tw=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var Pw=60109,Ow=60110,Mw=60112;le.Suspense=60113;var jw=60115,$w=60116;if(typeof Symbol=="function"&&Symbol.for){var Qt=Symbol.for;lo=Qt("react.element"),Tw=Qt("react.portal"),le.Fragment=Qt("react.fragment"),le.StrictMode=Qt("react.strict_mode"),le.Profiler=Qt("react.profiler"),Pw=Qt("react.provider"),Ow=Qt("react.context"),Mw=Qt("react.forward_ref"),le.Suspense=Qt("react.suspense"),jw=Qt("react.memo"),$w=Qt("react.lazy")}var G0=typeof Symbol=="function"&&Symbol.iterator;function RM(e){return e===null||typeof e!="object"?null:(e=G0&&e[G0]||e["@@iterator"],typeof e=="function"?e:null)}function Ha(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dw={};function uo(e,t,n){this.props=e,this.context=t,this.refs=Dw,this.updater=n||Iw}uo.prototype.isReactComponent={};uo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Ha(85));this.updater.enqueueSetState(this,e,t,"setState")};uo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lw(){}Lw.prototype=uo.prototype;function um(e,t,n){this.props=e,this.context=t,this.refs=Dw,this.updater=n||Iw}var cm=um.prototype=new Lw;cm.constructor=um;lm(cm,uo.prototype);cm.isPureReactComponent=!0;var dm={current:null},Aw=Object.prototype.hasOwnProperty,Rw={key:!0,ref:!0,__self:!0,__source:!0};function Fw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Aw.call(t,r)&&!Rw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:lo,type:e,key:o,ref:a,props:i,_owner:dm.current}}function FM(e,t){return{$$typeof:lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fm(e){return typeof e=="object"&&e!==null&&e.$$typeof===lo}function NM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Y0=/\/+/g;function ld(e,t){return typeof e=="object"&&e!==null&&e.key!=null?NM(""+e.key):t.toString(36)}function Ks(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case lo:case Tw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ld(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(Y0,"$&/")+"/"),Ks(i,t,n,"",function(u){return u})):i!=null&&(fm(i)&&(i=FM(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Y0,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+ld(o,l);a+=Ks(o,t,n,s,i)}else if(s=RM(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+ld(o,l++),a+=Ks(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(Ha(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function ys(e,t,n){if(e==null)return e;var r=[],i=0;return Ks(e,r,"","",function(o){return t.call(n,o,i++)}),r}function zM(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var Nw={current:null};function Zn(){var e=Nw.current;if(e===null)throw Error(Ha(321));return e}var BM={ReactCurrentDispatcher:Nw,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:dm,IsSomeRendererActing:{current:!1},assign:lm};le.Children={map:ys,forEach:function(e,t,n){ys(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ys(e,function(){t++}),t},toArray:function(e){return ys(e,function(t){return t})||[]},only:function(e){if(!fm(e))throw Error(Ha(143));return e}};le.Component=uo;le.PureComponent=um;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BM;le.cloneElement=function(e,t,n){if(e==null)throw Error(Ha(267,e));var r=lm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=dm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Aw.call(t,s)&&!Rw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:lo,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Ow,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Pw,_context:e},e.Consumer=e};le.createElement=Fw;le.createFactory=function(e){var t=Fw.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:Mw,render:e}};le.isValidElement=fm;le.lazy=function(e){return{$$typeof:$w,_payload:{_status:-1,_result:e},_init:zM}};le.memo=function(e,t){return{$$typeof:jw,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return Zn().useCallback(e,t)};le.useContext=function(e,t){return Zn().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return Zn().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return Zn().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return Zn().useLayoutEffect(e,t)};le.useMemo=function(e,t){return Zn().useMemo(e,t)};le.useReducer=function(e,t,n){return Zn().useReducer(e,t,n)};le.useRef=function(e){return Zn().useRef(e)};le.useState=function(e){return Zn().useState(e)};le.version="17.0.2";kw.exports=le;var VM=kw.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UM=VM,zw=60103;Ua.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var q0=Symbol.for;zw=q0("react.element"),Ua.Fragment=q0("react.fragment")}var HM=UM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,WM=Object.prototype.hasOwnProperty,GM={key:!0,ref:!0,__self:!0,__source:!0};function Bw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)WM.call(t,r)&&!GM.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:zw,type:e,key:o,ref:a,props:i,_owner:HM.current}}Ua.jsx=Bw;Ua.jsxs=Bw;Ew.exports=Ua;var Pt=Ew.exports,Vw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Vw);var Ot=Vw.exports;const YM={"lds-circle":"_lds-circle_qlxhy_1"},qM=Object.freeze(Object.defineProperty({__proto__:null,default:YM},Symbol.toStringTag,{value:"Module"})),XM=Tt(qM);var Uw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.Circle=void 0;const KM=Pt,QM=Uw(Ot),ZM=Uw(XM);function JM({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,KM.jsx)("div",{className:(0,QM.default)(ZM.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}Xu.Circle=JM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=Xu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(Cw);var Hw={},Ku={};const ej={"lds-default":"_lds-default_wt1n8_1"},tj=Object.freeze(Object.defineProperty({__proto__:null,default:ej},Symbol.toStringTag,{value:"Module"})),nj=Tt(tj);var Ww=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ku,"__esModule",{value:!0});Ku.Default=void 0;const X0=Pt,rj=Ww(Ot),ij=Ww(nj);function oj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,X0.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,X0.jsx)("div",{className:(0,rj.default)(ij.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}Ku.Default=oj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=Ku;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(Hw);var Gw={},Qu={};const aj={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},sj=Object.freeze(Object.defineProperty({__proto__:null,default:aj},Symbol.toStringTag,{value:"Module"})),lj=Tt(sj);var Yw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Qu,"__esModule",{value:!0});Qu.DualRing=void 0;const K0=Pt,Q0=Yw(Ot),Z0=Yw(lj);function uj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,K0.jsx)("div",{className:(0,Q0.default)(Z0.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,K0.jsx)("div",{className:(0,Q0.default)(Z0.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}Qu.DualRing=uj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=Qu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(Gw);var qw={},Zu={};const cj={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},dj=Object.freeze(Object.defineProperty({__proto__:null,default:cj},Symbol.toStringTag,{value:"Module"})),fj=Tt(dj);var Xw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Zu,"__esModule",{value:!0});Zu.Ellipsis=void 0;const J0=Pt,pj=Xw(Ot),hj=Xw(fj);function mj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,J0.jsx)("div",{style:{background:`${e}`}},l));return(0,J0.jsx)("div",{className:(0,pj.default)(hj.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}Zu.Ellipsis=mj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=Zu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(qw);var Kw={},Ju={};const gj={"lds-facebook":"_lds-facebook_1ts9g_1"},vj=Object.freeze(Object.defineProperty({__proto__:null,default:gj},Symbol.toStringTag,{value:"Module"})),yj=Tt(vj);var Qw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ju,"__esModule",{value:!0});Ju.Facebook=void 0;const ev=Pt,xj=Qw(Ot),bj=Qw(yj);function wj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,ev.jsx)("div",{style:{background:`${e}`}},l));return(0,ev.jsx)("div",{className:(0,xj.default)(bj.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}Ju.Facebook=wj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=Ju;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(Kw);var Zw={},ec={};const Sj={"lds-grid":"_lds-grid_1ftub_1"},_j=Object.freeze(Object.defineProperty({__proto__:null,default:Sj},Symbol.toStringTag,{value:"Module"})),Cj=Tt(_j);var Jw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ec,"__esModule",{value:!0});ec.Grid=void 0;const tv=Pt,Ej=Jw(Ot),kj=Jw(Cj);function Tj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,tv.jsx)("div",{style:{background:`${e}`}},l));return(0,tv.jsx)("div",{className:(0,Ej.default)(kj.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}ec.Grid=Tj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=ec;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(Zw);var eS={},tc={};const Pj={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},Oj=Object.freeze(Object.defineProperty({__proto__:null,default:Pj},Symbol.toStringTag,{value:"Module"})),Mj=Tt(Oj);var tS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(tc,"__esModule",{value:!0});tc.Heart=void 0;const xs=Pt,ud=tS(Ot),cd=tS(Mj);function jj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,xs.jsx)("div",{className:(0,ud.default)(cd.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,xs.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,xs.jsx)("div",{className:(0,ud.default)(cd.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,xs.jsx)("div",{className:(0,ud.default)(cd.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}tc.Heart=jj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=tc;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(eS);var nS={},nc={};const $j={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},Ij=Object.freeze(Object.defineProperty({__proto__:null,default:$j},Symbol.toStringTag,{value:"Module"})),Dj=Tt(Ij);var rS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(nc,"__esModule",{value:!0});nc.Hourglass=void 0;const nv=Pt,rv=rS(Ot),iv=rS(Dj);function Lj({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,nv.jsx)("div",{className:(0,rv.default)(iv.default["lds-hourglass"],n),style:{...r},children:(0,nv.jsx)("div",{className:(0,rv.default)(iv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}nc.Hourglass=Lj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=nc;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(nS);var iS={},rc={};const oS="_center_1rufi_10",aS="_spin_1rufi_1",Aj={"lds-orbitals":"_lds-orbitals_1rufi_1",center:oS,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:aS},Rj=Object.freeze(Object.defineProperty({__proto__:null,center:oS,default:Aj,spin:aS},Symbol.toStringTag,{value:"Module"})),Fj=Tt(Rj);var sS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(rc,"__esModule",{value:!0});rc.Orbitals=void 0;const tt=Pt,lt=sS(Ot),Se=sS(Fj);function Nj({color:e="#7f58af",className:t,style:n}){return(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["lds-orbitals"],t),style:{...n},children:[(0,tt.jsx)("div",{className:Se.default.center,style:{background:e}}),(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["inner-spin"]),children:[(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-moon-b"]),style:{background:e}})]}),(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["outer-spin"]),children:[(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-moon-b"]),style:{background:e}})]})]})}rc.Orbitals=Nj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=rc;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(iS);var lS={},ic={};const zj={"lds-ring":"_lds-ring_xgxdp_1"},Bj=Object.freeze(Object.defineProperty({__proto__:null,default:zj},Symbol.toStringTag,{value:"Module"})),Vj=Tt(Bj);var uS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ic,"__esModule",{value:!0});ic.Ring=void 0;const ov=Pt,Uj=uS(Ot),Hj=uS(Vj);function Wj({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,ov.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,ov.jsx)("div",{className:(0,Uj.default)(Hj.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}ic.Ring=Wj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=ic;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(lS);var cS={},oc={};const Gj={"lds-ripple":"_lds-ripple_1lgcf_1"},Yj=Object.freeze(Object.defineProperty({__proto__:null,default:Gj},Symbol.toStringTag,{value:"Module"})),qj=Tt(Yj);var dS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oc,"__esModule",{value:!0});oc.Ripple=void 0;const av=Pt,Xj=dS(Ot),Kj=dS(qj);function Qj({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,av.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,av.jsx)("div",{className:(0,Xj.default)(Kj.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}oc.Ripple=Qj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=oc;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(cS);var fS={},ac={};const Zj={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},Jj=Object.freeze(Object.defineProperty({__proto__:null,default:Zj},Symbol.toStringTag,{value:"Module"})),e5=Tt(Jj);var pS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ac,"__esModule",{value:!0});ac.Roller=void 0;const dd=Pt,sv=pS(Ot),lv=pS(e5);function t5({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,dd.jsx)("div",{children:(0,dd.jsx)("div",{className:(0,sv.default)(lv.default["div-after"]),style:{background:e}})},o));return(0,dd.jsx)("div",{className:(0,sv.default)(lv.default["lds-roller"],t),style:{...n},children:r})}ac.Roller=t5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=ac;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(fS);var hS={},sc={};const n5={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},r5=Object.freeze(Object.defineProperty({__proto__:null,default:n5},Symbol.toStringTag,{value:"Module"})),i5=Tt(r5);var mS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(sc,"__esModule",{value:!0});sc.Spinner=void 0;const fd=Pt,uv=mS(Ot),cv=mS(i5);function o5({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,fd.jsx)("div",{children:(0,fd.jsx)("div",{className:(0,uv.default)(cv.default["div-after"]),style:{background:e}})},o));return(0,fd.jsx)("div",{className:(0,uv.default)(cv.default["lds-spinner"],t),style:{...n},children:r})}sc.Spinner=o5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=sc;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(hS);var gS={},lc={};const vS="_left_v9vlb_30",yS="_right_v9vlb_33",xS="_anim_v9vlb_37",a5={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:vS,right:yS,anim:xS,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},s5=Object.freeze(Object.defineProperty({__proto__:null,anim:xS,default:a5,left:vS,right:yS},Symbol.toStringTag,{value:"Module"})),l5=Tt(s5);var bS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lc,"__esModule",{value:!0});lc.Ouroboro=void 0;const ko=Pt,To=bS(Ot),Po=bS(l5);function u5({color:e="#7f58af",style:t,className:n}){return(0,ko.jsxs)("div",{className:(0,To.default)(Po.default["lds-ouroboro"],n),style:{...t},children:[(0,ko.jsx)("span",{className:(0,To.default)(Po.default.left),children:(0,ko.jsx)("span",{className:(0,To.default)(Po.default.anim),style:{background:e}})}),(0,ko.jsx)("span",{className:(0,To.default)(Po.default.right),children:(0,ko.jsx)("span",{className:(0,To.default)(Po.default.anim),style:{background:e}})})]})}lc.Ouroboro=u5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=lc;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(gS);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=Cw;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=Hw;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=Gw;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=qw;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=Kw;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=Zw;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=eS;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=nS;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=iS;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const d=lS;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return d.Ring}});const c=cS;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return c.Ripple}});const y=fS;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return y.Roller}});const f=hS;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return f.Spinner}});const m=gS;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return m.Ouroboro}})})(_w);const c5=()=>h.jsx(jM,{children:h.jsx(_w.Default,{color:"#6d433da8"})});const d5="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",f5=BT`
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
  src: url(${d5}) format('truetype');
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
`,p5=k.div`
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
`,h5=k(Oe)`
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
`,m5=k.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,g5=k.h3`

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
`,v5=k.a`

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
`,y5=k.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,x5=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),h.jsxs(h.Fragment,{children:[h.jsx(m5,{children:"Каталог"}),h.jsxs(p5,{children:[e.slice(0,7).map(n=>h.jsx(h5,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:h.jsx(g5,{children:n.title})},n.title)),h.jsxs(v5,{href:"catalog",children:[h.jsx("p",{children:"Весь каталог"}),h.jsx(y5,{children:h.jsx(Hh,{size:24})})]})]})]})};function dv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function pm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:dv(t[r])&&dv(e[r])&&Object.keys(t[r]).length>0&&pm(e[r],t[r])})}const wS={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function kn(){const e=typeof document<"u"?document:{};return pm(e,wS),e}const b5={document:wS,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function gt(){const e=typeof window<"u"?window:{};return pm(e,b5),e}function w5(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function S5(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function SS(e,t=0){return setTimeout(e,t)}function Vl(){return Date.now()}function _5(e){const t=gt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function C5(e,t="x"){const n=gt();let r,i,o;const a=_5(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function bs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function E5(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function jt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!E5(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(bs(t[l])&&bs(r[l])?r[l].__swiper__?t[l]=r[l]:jt(t[l],r[l]):!bs(t[l])&&bs(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:jt(t[l],r[l])):t[l]=r[l])}}}return t}function di(e,t,n){e.style.setProperty(t,n)}function _S({swiper:e,targetPosition:t,side:n}){const r=gt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(c,y)=>s==="next"&&c>=y||s==="prev"&&c<=y,d=()=>{a=new Date().getTime(),o===null&&(o=a);const c=Math.max(Math.min((a-o)/l,1),0),y=.5-Math.cos(c*Math.PI)/2;let f=i+y*(t-i);if(u(f,t)&&(f=t),e.wrapperEl.scrollTo({[n]:f}),u(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:f})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function Sn(e,t=""){const n=gt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function k5(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function T5(e,t){const n=gt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=k5(e,t))),r}function Ul(e){try{console.warn(e);return}catch{}}function Hl(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:w5(t)),n}function P5(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function O5(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function fr(e,t){return gt().getComputedStyle(e,null).getPropertyValue(t)}function Wl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function CS(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function mp(e,t,n){const r=gt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function He(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Pa(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function ES(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=Sn(e.el,`.${r[i]}`)[0];o||(o=Hl("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const fv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function M5({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:fv};function i(f){let m;return f&&typeof f=="string"&&e.isElement&&(m=e.el.querySelector(f)||e.hostEl.querySelector(f),m)?m:(f&&(typeof f=="string"&&(m=[...document.querySelectorAll(f)]),e.params.uniqueNavElements&&typeof f=="string"&&m&&m.length>1&&e.el.querySelectorAll(f).length===1?m=e.el.querySelector(f):m&&m.length===1&&(m=m[0])),f&&!m?f:m)}function o(f,m){const v=e.params.navigation;f=He(f),f.forEach(w=>{w&&(w.classList[m?"add":"remove"](...v.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=m),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](v.lockClass))})}function a(){const{nextEl:f,prevEl:m}=e.navigation;if(e.params.loop){o(m,!1),o(f,!1);return}o(m,e.isBeginning&&!e.params.rewind),o(f,e.isEnd&&!e.params.rewind)}function l(f){f.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(f){f.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const f=e.params.navigation;if(e.params.navigation=ES(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(f.nextEl||f.prevEl))return;let m=i(f.nextEl),v=i(f.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:v}),m=He(m),v=He(v);const w=(p,g)=>{if(p){if(f.addIcons&&p.matches(".swiper-button-next,.swiper-button-prev")&&!p.querySelector("svg")){const x=document.createElement("div");Pa(x,fv),p.appendChild(x.querySelector("svg")),x.remove()}p.addEventListener("click",g==="next"?s:l)}!e.enabled&&p&&p.classList.add(...f.lockClass.split(" "))};m.forEach(p=>w(p,"next")),v.forEach(p=>w(p,"prev"))}function d(){let{nextEl:f,prevEl:m}=e.navigation;f=He(f),m=He(m);const v=(w,p)=>{w.removeEventListener("click",p==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};f.forEach(w=>v(w,"next")),m.forEach(w=>v(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?y():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:f,prevEl:m}=e.navigation;if(f=He(f),m=He(m),e.enabled){a();return}[...f,...m].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),n("click",(f,m)=>{let{nextEl:v,prevEl:w}=e.navigation;v=He(v),w=He(w);const p=m.target;let g=w.includes(p)||v.includes(p);if(e.isElement&&!g){const x=m.path||m.composedPath&&m.composedPath();x&&(g=x.find(S=>v.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!g){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===p||e.pagination.el.contains(p)))return;let x;v.length?x=v[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...v,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const c=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},y=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:c,disable:y,update:a,init:u,destroy:d})}function Oo(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function j5({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(p,g){const{bulletActiveClass:x}=e.params.pagination;p&&(p=p[`${g==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${x}-${g}`),p=p[`${g==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${x}-${g}-${g}`)))}function u(p,g,x){if(p=p%x,g=g%x,g===p+1)return"next";if(g===p-1)return"previous"}function d(p){const g=p.target.closest(Oo(e.params.pagination.bulletClass));if(!g)return;p.preventDefault();const x=Wl(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=u(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function c(){const p=e.rtl,g=e.params.pagination;if(l())return;let x=e.pagination.el;x=He(x);let S,C;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,S=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const E=e.pagination.bullets;let L,D,A;if(g.dynamicBullets&&(o=mp(E[0],e.isHorizontal()?"width":"height",!0),x.forEach(O=>{O.style[e.isHorizontal()?"width":"height"]=`${o*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&C!==void 0&&(a+=S-(C||0),a>g.dynamicMainBullets-1?a=g.dynamicMainBullets-1:a<0&&(a=0)),L=Math.max(S-a,0),D=L+(Math.min(E.length,g.dynamicMainBullets)-1),A=(D+L)/2),E.forEach(O=>{const I=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${g.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();O.classList.remove(...I)}),x.length>1)E.forEach(O=>{const I=Wl(O);I===S?O.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&O.setAttribute("part","bullet"),g.dynamicBullets&&(I>=L&&I<=D&&O.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),I===L&&s(O,"prev"),I===D&&s(O,"next"))});else{const O=E[S];if(O&&O.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&E.forEach((I,R)=>{I.setAttribute("part",R===S?"bullet-active":"bullet")}),g.dynamicBullets){const I=E[L],R=E[D];for(let M=L;M<=D;M+=1)E[M]&&E[M].classList.add(...`${g.bulletActiveClass}-main`.split(" "));s(I,"prev"),s(R,"next")}}if(g.dynamicBullets){const O=Math.min(E.length,g.dynamicMainBullets+4),I=(o*O-o)/2-A*o,R=p?"right":"left";E.forEach(M=>{M.style[e.isHorizontal()?R:"top"]=`${I}px`})}}x.forEach((E,L)=>{if(g.type==="fraction"&&(E.querySelectorAll(Oo(g.currentClass)).forEach(D=>{D.textContent=g.formatFractionCurrent(S+1)}),E.querySelectorAll(Oo(g.totalClass)).forEach(D=>{D.textContent=g.formatFractionTotal(_)})),g.type==="progressbar"){let D;g.progressbarOpposite?D=e.isHorizontal()?"vertical":"horizontal":D=e.isHorizontal()?"horizontal":"vertical";const A=(S+1)/_;let O=1,I=1;D==="horizontal"?O=A:I=A,E.querySelectorAll(Oo(g.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${O}) scaleY(${I})`,R.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(Pa(E,g.renderCustom(e,S+1,_)),L===0&&r("paginationRender",E)):(L===0&&r("paginationRender",E),r("paginationUpdate",E)),e.params.watchOverflow&&e.enabled&&E.classList[e.isLocked?"add":"remove"](g.lockClass)})}function y(){const p=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=He(x);let S="";if(p.type==="bullets"){let C=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>g&&(C=g);for(let T=0;T<C;T+=1)p.renderBullet?S+=p.renderBullet.call(e,T,p.bulletClass):S+=`<${p.bulletElement} ${e.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?S=p.renderFraction.call(e,p.currentClass,p.totalClass):S=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?S=p.renderProgressbar.call(e,p.progressbarFillClass):S=`<span class="${p.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(C=>{p.type!=="custom"&&Pa(C,S||""),p.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(Oo(p.bulletClass)))}),p.type!=="custom"&&r("paginationRender",x[0])}function f(){e.params.pagination=ES(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const p=e.params.pagination;if(!p.el)return;let g;typeof p.el=="string"&&e.isElement&&(g=e.el.querySelector(p.el)),!g&&typeof p.el=="string"&&(g=[...document.querySelectorAll(p.el)]),g||(g=p.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(p.el)],g.length>1&&(g=g.find(x=>CS(x,".swiper")[0]===e.el))),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=He(g),g.forEach(x=>{p.type==="bullets"&&p.clickable&&x.classList.add(...(p.clickableClass||"").split(" ")),x.classList.add(p.modifierClass+p.type),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(x.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&x.classList.add(p.progressbarOppositeClass),p.clickable&&x.addEventListener("click",d),e.enabled||x.classList.add(p.lockClass)}))}function m(){const p=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=He(g),g.forEach(x=>{x.classList.remove(p.hiddenClass),x.classList.remove(p.modifierClass+p.type),x.classList.remove(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(x.classList.remove(...(p.clickableClass||"").split(" ")),x.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...p.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const p=e.params.pagination;let{el:g}=e.pagination;g=He(g),g.forEach(x=>{x.classList.remove(p.horizontalClass,p.verticalClass),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(f(),y(),c())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&c()}),n("snapIndexChange",()=>{c()}),n("snapGridLengthChange",()=>{y(),c()}),n("destroy",()=>{m()}),n("enable disable",()=>{let{el:p}=e.pagination;p&&(p=He(p),p.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{c()}),n("click",(p,g)=>{const x=g.target,S=He(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const C=S[0].classList.contains(e.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),S.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const v=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=He(p),p.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),f(),y(),c()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=He(p),p.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:v,disable:w,render:y,update:c,init:f,destroy:m})}function $5({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,d=new Date().getTime(),c,y,f,m,v,w;function p(F){!e||e.destroyed||!e.wrapperEl||F.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",p),!(w||F.detail&&F.detail.bySwiperTouchMove)&&L())}const g=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?c=!0:c&&(s=u,c=!1);const F=e.autoplay.paused?u:d+s-new Date().getTime();e.autoplay.timeLeft=F,r("autoplayTimeLeft",F,F/l),a=requestAnimationFrame(()=>{g()})},x=()=>{let F;return e.virtual&&e.params.virtual.enabled?F=e.slides.find($=>$.classList.contains("swiper-slide-active")):F=e.slides[e.activeIndex],F?parseInt(F.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let F=e.params.autoplay.delay;const P=x();return!Number.isNaN(P)&&P>0&&(F=P),F},C=F=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),g();let P=F;typeof P>"u"&&(P=S(),l=P,s=P),u=P;const $=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev($,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,$,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext($,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,$,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{N()},P)):requestAnimationFrame(()=>{N()}),P},T=()=>{d=new Date().getTime(),e.autoplay.running=!0,C(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},E=(F,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),F||(v=!0);const $=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",p):L()};if(e.autoplay.paused=!0,P){$();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),$())},L=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),v?(v=!1,C(u)):C(),e.autoplay.paused=!1,r("autoplayResume"))},D=()=>{if(e.destroyed||!e.autoplay.running)return;const F=kn();F.visibilityState==="hidden"&&(v=!0,E(!0)),F.visibilityState==="visible"&&L()},A=F=>{F.pointerType==="mouse"&&(v=!0,w=!0,!(e.animating||e.autoplay.paused)&&E(!0))},O=F=>{F.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&L())},I=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",A),e.el.addEventListener("pointerleave",O))},R=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",A),e.el.removeEventListener("pointerleave",O))},M=()=>{kn().addEventListener("visibilitychange",D)},j=()=>{kn().removeEventListener("visibilitychange",D)};n("init",()=>{e.params.autoplay.enabled&&(I(),M(),T())}),n("destroy",()=>{R(),j(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(f||v)&&L()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():E(!0,!0)}),n("beforeTransitionStart",(F,P,$)=>{e.destroyed||!e.autoplay.running||($||!e.params.autoplay.disableOnInteraction?E(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}y=!0,f=!1,v=!1,m=setTimeout(()=>{v=!0,f=!0,E(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!y)){if(clearTimeout(m),clearTimeout(o),e.params.autoplay.disableOnInteraction){f=!1,y=!1;return}f&&e.params.cssMode&&L(),f=!1,y=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=S(),l=S())}),Object.assign(e.autoplay,{start:T,stop:_,pause:E,resume:L})}let pd;function I5(){const e=gt(),t=kn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function kS(){return pd||(pd=I5()),pd}let hd;function D5({userAgent:e}={}){const t=kS(),n=gt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),c=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),y=r==="Win32";let f=r==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&f&&t.touch&&m.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),f=!1),s&&!y&&(o.os="android",o.android=!0),(u||c||d)&&(o.os="ios",o.ios=!0),o}function TS(e={}){return hd||(hd=D5(e)),hd}let md;function L5(){const e=gt(),t=TS();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function PS(){return md||(md=L5()),md}function A5({swiper:e,on:t,emit:n}){const r=gt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(d=>{o=r.requestAnimationFrame(()=>{const{width:c,height:y}=e;let f=c,m=y;d.forEach(({contentBoxSize:v,contentRect:w,target:p})=>{p&&p!==e.el||(f=w?w.width:(v[0]||v).inlineSize,m=w?w.height:(v[0]||v).blockSize)}),(f!==c||m!==y)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function R5({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=gt(),a=(u,d={})=>{const c=o.MutationObserver||o.WebkitMutationObserver,y=new c(f=>{if(e.__preventObserver__)return;if(f.length===1){r("observerUpdate",f[0]);return}const m=function(){r("observerUpdate",f[0])};o.requestAnimationFrame?o.requestAnimationFrame(m):o.setTimeout(m,0)});y.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(y)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=CS(e.hostEl);for(let d=0;d<u.length;d+=1)a(u[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var F5={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function N5(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(fr(r,"padding-left")||0,10)-parseInt(fr(r,"padding-right")||0,10),n=n-parseInt(fr(r,"padding-top")||0,10)-parseInt(fr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function z5(){const e=this;function t(D,A){return parseFloat(D.getPropertyValue(e.getDirectionLabel(A))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=Sn(i,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:u.length;let c=[];const y=[],f=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(e));let v=n.slidesOffsetAfter;typeof v=="function"&&(v=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,p=e.slidesGrid.length,g=e.size-m-v;let x=n.spaceBetween,S=-m,C=0,T=0;if(typeof g>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*g:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-m-v,u.forEach(D=>{o?D.style.marginLeft="":D.style.marginRight="",D.style.marginBottom="",D.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(di(r,"--swiper-centered-offset-before",""),di(r,"--swiper-centered-offset-after","")),n.cssMode&&(di(r,"--swiper-slides-offset-before",`${m}px`),di(r,"--swiper-slides-offset-after",`${v}px`));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let E;const L=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(D=>typeof n.breakpoints[D].slidesPerView<"u").length>0;for(let D=0;D<d;D+=1){E=0;const A=u[D];if(!(A&&(_&&e.grid.updateSlide(D,A,u),fr(A,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(E=n.virtual.slidesPerViewAutoSlideSize),E&&A&&(n.roundLengths&&(E=Math.floor(E)),A.style[e.getDirectionLabel("width")]=`${E}px`);else if(n.slidesPerView==="auto"){L&&(A.style[e.getDirectionLabel("width")]="");const O=getComputedStyle(A),I=A.style.transform,R=A.style.webkitTransform;if(I&&(A.style.transform="none"),R&&(A.style.webkitTransform="none"),n.roundLengths)E=e.isHorizontal()?mp(A,"width",!0):mp(A,"height",!0);else{const M=t(O,"width"),j=t(O,"padding-left"),F=t(O,"padding-right"),P=t(O,"margin-left"),$=t(O,"margin-right"),N=O.getPropertyValue("box-sizing");if(N&&N==="border-box")E=M+P+$;else{const{clientWidth:B,offsetWidth:z}=A;E=M+j+F+P+$+(z-B)}}I&&(A.style.transform=I),R&&(A.style.webkitTransform=R),n.roundLengths&&(E=Math.floor(E))}else E=(g-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(E=Math.floor(E)),A&&(A.style[e.getDirectionLabel("width")]=`${E}px`);A&&(A.swiperSlideSize=E),f.push(E),n.centeredSlides?(S=S+E/2+C/2+x,C===0&&D!==0&&(S=S-g/2-x),D===0&&(S=S-g/2-x),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),T%n.slidesPerGroup===0&&c.push(S),y.push(S)):(n.roundLengths&&(S=Math.floor(S)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&c.push(S),y.push(S),S=S+E+x),e.virtualSize+=E+x,C=E,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,g)+v,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),_&&e.grid.updateWrapperSize(E,c),!n.centeredSlides){const D=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,A=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||D);let O=c.length;if(A){let R;if(n.slidesPerView==="auto"){R=1;let M=0;for(let j=f.length-1;j>=0&&(M+=f[j]+(j<f.length-1?x:0),M<=g);j-=1)R=f.length-j}else R=Math.floor(n.slidesPerView);O=Math.max(d-R,0)}const I=[];for(let R=0;R<c.length;R+=1){let M=c[R];n.roundLengths&&(M=Math.floor(M)),A?R<=O&&I.push(M):c[R]<=e.virtualSize-g&&I.push(M)}c=I,Math.floor(e.virtualSize-g)-Math.floor(c[c.length-1])>1&&(A||c.push(e.virtualSize-g))}if(l&&n.loop){const D=f[0]+x;if(n.slidesPerGroup>1){const A=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),O=D*n.slidesPerGroup;for(let I=0;I<A;I+=1)c.push(c[c.length-1]+O)}for(let A=0;A<e.virtual.slidesBefore+e.virtual.slidesAfter;A+=1)n.slidesPerGroup===1&&c.push(c[c.length-1]+D),y.push(y[y.length-1]+D),e.virtualSize+=D}if(c.length===0&&(c=[0]),x!==0){const D=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((A,O)=>!n.cssMode||n.loop?!0:O!==u.length-1).forEach(A=>{A.style[D]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let D=0;f.forEach(O=>{D+=O+(x||0)}),D-=x;const A=D>g?D-g:0;c=c.map(O=>O<=0?-m:O>A?A+v:O)}if(n.centerInsufficientSlides){let D=0;if(f.forEach(A=>{D+=A+(x||0)}),D-=x,D<g){const A=(g-D)/2;c.forEach((O,I)=>{c[I]=O-A}),y.forEach((O,I)=>{y[I]=O+A})}}if(Object.assign(e,{slides:u,snapGrid:c,slidesGrid:y,slidesSizesGrid:f}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){di(r,"--swiper-centered-offset-before",`${-c[0]}px`),di(r,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const D=-e.snapGrid[0],A=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(O=>O+D),e.slidesGrid=e.slidesGrid.map(O=>O+A)}if(d!==s&&e.emit("slidesLengthChange"),c.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==p&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const D=`${n.containerModifierClass}backface-hidden`,A=e.el.classList.contains(D);d<=n.maxBackfaceHiddenSlides?A||e.el.classList.add(D):A&&e.el.classList.remove(D)}}function B5(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function V5(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const pv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function U5(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const c=(a+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),y=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),f=-(a-d),m=f+t.slidesSizesGrid[s],v=f>=0&&f<=t.size-t.slidesSizesGrid[s],w=f>=0&&f<t.size-1||m>1&&m<=t.size||f<=0&&m>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),pv(u,w,n.slideVisibleClass),pv(u,v,n.slideFullyVisibleClass),u.progress=i?-c:c,u.originalProgress=i?-y:y}}function H5(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,c=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=c||i>=1,d&&(i=0),c&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),c=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[d],f=t.slidesGrid[c],m=t.slidesGrid[t.slidesGrid.length-1],v=Math.abs(e);v>=y?l=(v-y)/m:l=(v+m-f)/m,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const gd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function W5(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=c=>Sn(r,`.${n.slideClass}${c}, swiper-slide${c}`)[0];let s,u,d;if(o)if(n.loop){let c=i-e.virtual.slidesBefore;c<0&&(c=e.virtual.slides.length+c),c>=e.virtual.slides.length&&(c-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${c}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(c=>c.column===i),d=t.find(c=>c.column===i+1),u=t.find(c=>c.column===i-1)):s=t[i];s&&(a||(d=O5(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=P5(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(c=>{gd(c,c===s,n.slideActiveClass),gd(c,c===d,n.slideNextClass),gd(c,c===u,n.slidePrevClass)}),e.emitSlidesClasses()}const Qs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},vd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},gp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&vd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&vd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&vd(e,a)};function G5(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function Y5(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const d=f=>{let m=f-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof s>"u"&&(s=G5(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const f=Math.min(i.slidesPerGroupSkip,s);u=f+Math.floor((s-f)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(s);return}const c=t.grid&&i.grid&&i.grid.rows>1;let y;if(t.virtual&&i.virtual.enabled)i.loop?y=d(s):y=s;else if(c){const f=t.slides.find(v=>v.column===s);let m=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(t.slides.indexOf(f),0)),y=Math.floor(m/i.grid.rows)}else if(t.slides[s]){const f=t.slides[s].getAttribute("data-swiper-slide-index");f?y=parseInt(f,10):y=s}else y=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:y,previousIndex:o,activeIndex:s}),t.initialized&&gp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function q5(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var X5={updateSize:N5,updateSlides:z5,updateAutoHeight:B5,updateSlidesOffset:V5,updateSlidesProgress:U5,updateProgress:H5,updateSlidesClasses:W5,updateActiveIndex:Y5,updateClickedSlide:q5};function K5(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=C5(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function Q5(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let d;const c=n.maxTranslate()-n.minTranslate();c===0?d=0:d=(e-n.minTranslate())/c,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function Z5(){return-this.snapGrid[0]}function J5(){return-this.snapGrid[this.snapGrid.length-1]}function e$(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>s?d=s:r&&e<u?d=u:d=e,o.updateProgress(d),a.cssMode){const c=o.isHorizontal();if(t===0)l[c?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return _S({swiper:o,targetPosition:-d,side:c?"left":"top"}),!0;l.scrollTo({[c?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(y){!o||o.destroyed||y.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var t$={getTranslate:K5,setTranslate:Q5,minTranslate:Z5,maxTranslate:J5,translateTo:e$};function n$(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function OS({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function r$(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),OS({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function i$(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),OS({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var o$={setTransition:n$,transitionStart:r$,transitionEnd:i$};function a$(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:d,activeIndex:c,rtlTranslate:y,wrapperEl:f,enabled:m}=o;if(!m&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const v=Math.min(o.params.slidesPerGroupSkip,a);let w=v+Math.floor((a-v)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const p=-s[w];if(l.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const E=-Math.floor(p*100),L=Math.floor(u[_]*100),D=Math.floor(u[_+1]*100);typeof u[_+1]<"u"?E>=L&&E<D-(D-L)/2?a=_:E>=L&&E<D&&(a=_+1):E>=L&&(a=_)}if(o.initialized&&a!==c&&(!o.allowSlideNext&&(y?p>o.translate&&p>o.minTranslate():p<o.translate&&p<o.minTranslate())||!o.allowSlidePrev&&p>o.translate&&p>o.maxTranslate()&&(c||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(p);let g;a>c?g="next":a<c?g="prev":g="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(y&&-p===o.translate||!y&&p===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(p),g!=="reset"&&(o.transitionStart(n,g),o.transitionEnd(n,g)),!1;if(l.cssMode){const _=o.isHorizontal(),E=y?p:-p;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[_?"scrollLeft":"scrollTop"]=E})):f[_?"scrollLeft":"scrollTop"]=E,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return _S({swiper:o,targetPosition:E,side:_?"left":"top"}),!0;f.scrollTo({[_?"left":"top"]:E,behavior:"smooth"})}return!0}const T=PS().isSafari;return x&&!i&&T&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(p),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,g),t===0?o.transitionEnd(n,g):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(E){!o||o.destroyed||E.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,g))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function s$(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const v=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:d,slidesOffsetAfter:c}=i.params,y=u||!!d||!!c;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),y&&f%2===0&&(f=f+1));let m=s-l<f;if(y&&(m=m||l<Math.ceil(f/2)),r&&y&&i.params.slidesPerView!=="auto"&&!o&&(m=!1),m){const v=y?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?l+1:l-s+1,slideRealIndex:v==="next"?i.realIndex:void 0})}if(o){const v=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function l$(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function u$(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const c=l?r.translate:-r.translate;function y(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const f=y(c),m=o.map(g=>y(g)),v=i.freeMode&&i.freeMode.enabled;let w=o[m.indexOf(f)-1];if(typeof w>"u"&&(i.cssMode||v)){let g;o.forEach((x,S)=>{f>=x&&(g=S)}),typeof g<"u"&&(w=v?o[g]:o[g>0?g-1:g])}let p=0;if(typeof w<"u"&&(p=a.indexOf(w),p<0&&(p=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(p=p-r.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),i.rewind&&r.isBeginning){const g=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(g,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(p,e,t,n)}),!0;return r.slideTo(p,e,t,n)}function c$(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function d$(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],d=i.snapGrid[l+1];s-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],d=i.snapGrid[l];s-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function f$(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(Sn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),SS(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var p$={slideTo:a$,slideToLoop:s$,slideNext:l$,slidePrev:u$,slideReset:c$,slideToClosest:d$,slideToClickedSlide:f$};function h$(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{Sn(i,`.${r.slideClass}, swiper-slide`).forEach((m,v)=>{m.setAttribute("data-swiper-slide-index",v)})},a=()=>{const f=Sn(i,`.${r.slideBlankClass}`);f.forEach(m=>{m.remove()}),f.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,d=l&&n.slides.length%r.grid.rows!==0,c=f=>{for(let m=0;m<f;m+=1){const v=n.isElement?Hl("swiper-slide",[r.slideBlankClass]):Hl("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(v)}};if(u){if(r.loopAddBlankSlides){const f=s-n.slides.length%s;c(f),n.recalcSlides(),n.updateSlides()}else Ul("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(d){if(r.loopAddBlankSlides){const f=r.grid.rows-n.slides.length%r.grid.rows;c(f),n.recalcSlides(),n.updateSlides()}else Ul("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const y=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:y?void 0:"next",initial:t})}function m$({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:c,slidesEl:y,params:f}=s,{centeredSlides:m,slidesOffsetBefore:v,slidesOffsetAfter:w,initialSlide:p}=f,g=m||!!v||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&f.virtual.enabled){t&&(!g&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):g&&s.snapIndex<f.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=c,s.emit("loopFix");return}let x=f.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(f.slidesPerView,10)),g&&x%2===0&&(x=x+1));const S=f.slidesPerGroupAuto?x:f.slidesPerGroup;let C=g?Math.max(S,Math.ceil(x/2)):S;C%S!==0&&(C+=S-C%S),C+=f.loopAdditionalSlides,s.loopedSlides=C;const T=s.grid&&f.grid&&f.grid.rows>1;u.length<x+C||s.params.effect==="cards"&&u.length<x+C*2?Ul("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&f.grid.fill==="row"&&Ul("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],E=[],L=T?Math.ceil(u.length/f.grid.rows):u.length,D=o&&L-p<x&&!g;let A=D?p:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(P=>P.classList.contains(f.slideActiveClass))):A=i;const O=n==="next"||!n,I=n==="prev"||!n;let R=0,M=0;const F=(T?u[i].column:i)+(g&&typeof r>"u"?-x/2+.5:0);if(F<C){R=Math.max(C-F,S);for(let P=0;P<C-F;P+=1){const $=P-Math.floor(P/L)*L;if(T){const N=L-$-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===N&&_.push(B)}else _.push(L-$-1)}}else if(F+x>L-C){M=Math.max(F-(L-C*2),S),D&&(M=Math.max(M,x-L+p+1));for(let P=0;P<M;P+=1){const $=P-Math.floor(P/L)*L;T?u.forEach((N,B)=>{N.column===$&&E.push(B)}):E.push($)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+C*2&&(E.includes(i)&&E.splice(E.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),I&&_.forEach(P=>{u[P].swiperLoopMoveDOM=!0,y.prepend(u[P]),u[P].swiperLoopMoveDOM=!1}),O&&E.forEach(P=>{u[P].swiperLoopMoveDOM=!0,y.append(u[P]),u[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),f.slidesPerView==="auto"?s.updateSlides():T&&(_.length>0&&I||E.length>0&&O)&&s.slides.forEach((P,$)=>{s.grid.updateSlide($,P,s.slides)}),f.watchSlidesProgress&&s.updateSlidesOffset(),t){if(_.length>0&&I){if(typeof e>"u"){const P=s.slidesGrid[A],N=s.slidesGrid[A+R]-P;l?s.setTranslate(s.translate-N):(s.slideTo(A+Math.ceil(R),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const P=T?_.length/f.grid.rows:_.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(E.length>0&&O)if(typeof e>"u"){const P=s.slidesGrid[A],N=s.slidesGrid[A-M]-P;l?s.setTranslate(s.translate-N):(s.slideTo(A-M,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const P=T?E.length/f.grid.rows:E.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=c,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach($=>{!$.destroyed&&$.params.loop&&$.loopFix({...P,slideTo:$.params.slidesPerView===f.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}s.emit("loopFix")}function g$(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var v$={loopCreate:h$,loopFix:m$,loopDestroy:g$};function y$(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function x$(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var b$={setGrabCursor:y$,unsetGrabCursor:x$};function w$(e,t=this){function n(r){if(!r||r===kn()||r===gt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function hv(e,t,n){const r=gt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function S$(e){const t=this,n=kn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){hv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!T5(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(s=d[0]);const c=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,y=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(y?w$(c,s):s.closest(c))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const f=a.currentX,m=a.currentY;if(!hv(t,r,f))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=f,a.startY=m,i.touchStartTime=Vl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let v=!0;s.matches(i.focusableElements)&&(v=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=v&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function _$(e){const t=kn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(T=>T.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const d=u.pageX,c=u.pageY;if(s.preventedByNestedSwiper){o.startX=d,o.startY=c;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c}),r.touchStartTime=Vl());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(c<o.startY&&n.translate<=n.maxTranslate()||c>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(d>o.startX&&-n.translate<=n.maxTranslate()||d<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=c;const y=o.currentX-o.startX,f=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(y**2+f**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:y*y+f*f>=25&&(T=Math.atan2(Math.abs(f),Math.abs(y))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let m=n.isHorizontal()?y:f,v=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),v=Math.abs(v)*(a?1:-1)),o.diff=m,m*=i.touchRatio,a&&(m=-m,v=-v);const w=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=v>0?"prev":"next";const p=n.params.loop&&!i.cssMode,g=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(p&&g&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&p&&g&&Math.abs(m)>=1){Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let S=!0,C=i.resistanceRatio;if(i.touchReleaseOnEdges&&(C=0),m>0?(p&&g&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**C))):m<0&&(p&&g&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**C))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function C$(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(C=>C.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const c=Vl(),y=c-n.touchStartTime;if(t.allowClick){const C=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(C&&C[0]||r.target,C),t.emit("tap click",r),y<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Vl(),SS(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(a.followFinger?f=s?t.translate:-t.translate:f=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const m=f>=-t.maxTranslate()&&!t.params.loop;let v=0,w=t.slidesSizesGrid[0];for(let C=0;C<u.length;C+=C<a.slidesPerGroupSkip?1:a.slidesPerGroup){const T=C<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[C+T]<"u"?(m||f>=u[C]&&f<u[C+T])&&(v=C,w=u[C+T]-u[C]):(m||f>=u[C])&&(v=C,w=u[u.length-1]-u[u.length-2])}let p=null,g=null;a.rewind&&(t.isBeginning?g=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(p=0));const x=(f-u[v])/w,S=v<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(y>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?p:v+S):t.slideTo(v)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(v+S):g!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(g):t.slideTo(v))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(v+S):t.slideTo(v):(t.swipeDirection==="next"&&t.slideTo(p!==null?p:v+S),t.swipeDirection==="prev"&&t.slideTo(g!==null?g:v))}}function mv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function E$(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function k$(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function T$(e){const t=this;Qs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function P$(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const MS=(e,t)=>{const n=kn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",mv,!0):e[u]("observerUpdate",mv,!0),i[s]("load",e.onLoad,{capture:!0}))};function O$(){const e=this,{params:t}=e;e.onTouchStart=S$.bind(e),e.onTouchMove=_$.bind(e),e.onTouchEnd=C$.bind(e),e.onDocumentTouchStart=P$.bind(e),t.cssMode&&(e.onScroll=k$.bind(e)),e.onClick=E$.bind(e),e.onLoad=T$.bind(e),MS(e,"on")}function M$(){MS(this,"off")}var j$={attachEvents:O$,detachEvents:M$};const gv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function $$(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=kn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const c=(u in o?o[u]:void 0)||e.originalParams,y=gv(e,r),f=gv(e,c),m=e.params.grabCursor,v=c.grabCursor,w=r.enabled;y&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),m&&!v?e.unsetGrabCursor():!m&&v&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(T=>{if(typeof c[T]>"u")return;const _=r[T]&&r[T].enabled,E=c[T]&&c[T].enabled;_&&!E&&e[T].disable(),!_&&E&&e[T].enable()});const p=c.direction&&c.direction!==r.direction,g=r.loop&&(c.slidesPerView!==r.slidesPerView||p),x=r.loop;p&&n&&e.changeDirection(),jt(e.params,c);const S=e.params.enabled,C=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",c),n&&(g?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&C?(e.loopCreate(t),e.updateSlides()):x&&!C&&e.loopDestroy()),e.emit("breakpoint",c)}function I$(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=gt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var D$={setBreakpoint:$$,getBreakpoint:I$};function L$(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function A$(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=L$(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function R$(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var F$={addClasses:A$,removeClasses:R$};function N$(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var z$={checkOverflow:N$},vp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function B$(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){jt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){jt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),jt(t,r)}}const yd={eventsEmitter:F5,update:X5,translate:t$,transition:o$,slide:p$,loop:v$,grabCursor:b$,events:j$,breakpoints:D$,checkOverflow:z$,classes:F$},xd={};let hm=class Mn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=jt({},r),n&&!r.el&&(r.el=n);const i=kn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const d=jt({},r,{el:u});s.push(new Mn(d))}),s}const o=this;o.__swiper__=!0,o.support=kS(),o.device=TS({userAgent:r.userAgent}),o.browser=PS(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:B$(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=jt({},vp,a);return o.params=jt({},l,xd,r),o.originalParams=jt({},o.params),o.passedParams=jt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Sn(n,`.${r.slideClass}, swiper-slide`),o=Wl(i[0]);return Wl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Sn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let c=o[u]?Math.ceil(o[u].swiperSlideSize):0,y;for(let f=u+1;f<o.length;f+=1)o[f]&&!y&&(c+=Math.ceil(o[f].swiperSlideSize),d+=1,c>s&&(y=!0));for(let f=u-1;f>=0;f-=1)o[f]&&!y&&(c+=o[f].swiperSlideSize,d+=1,c>s&&(y=!0))}else if(t==="current")for(let c=u+1;c<o.length;c+=1)(n?a[c]+l[c]-a[u]<s:a[c]-a[u]<s)&&(d+=1);else for(let c=u-1;c>=0;c-=1)a[u]-a[c]<s&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Qs(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Sn(r,i())[0])();return!a&&n.params.createElements&&(a=Hl("div",n.params.wrapperClass),r.append(a),Sn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||fr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||fr(r,"direction")==="rtl"),wrongRTL:fr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Qs(n,o):o.addEventListener("load",a=>{Qs(n,a.target)})}),gp(n),n.initialized=!0,gp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),S5(r)),r.destroyed=!0),null}static extendDefaults(t){jt(xd,t)}static get extendedDefaults(){return xd}static get defaults(){return vp}static installModule(t){Mn.prototype.__modules__||(Mn.prototype.__modules__=[]);const n=Mn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Mn.installModule(n)),Mn):(Mn.installModule(t),Mn)}};Object.keys(yd).forEach(e=>{Object.keys(yd[e]).forEach(t=>{hm.prototype[t]=yd[e][t]})});hm.use([A5,R5]);const jS=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ei(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Fi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:ei(t[r])&&ei(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Fi(e[r],t[r]):e[r]=t[r]})}function $S(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function IS(e={}){return e.pagination&&typeof e.pagination.el>"u"}function DS(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function LS(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function V$(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function U$({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(E=>E!=="children"&&E!=="direction"&&E!=="wrapperClass"),{params:u,pagination:d,navigation:c,scrollbar:y,virtual:f,thumbs:m}=e;let v,w,p,g,x,S,C,T;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(v=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&d&&!d.el&&(p=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&y&&!y.el&&(g=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&c&&!c.prevEl&&!c.nextEl&&(x=!0);const _=E=>{e[E]&&(e[E].destroy(),E==="navigation"?(e.isElement&&(e[E].prevEl.remove(),e[E].nextEl.remove()),u[E].prevEl=void 0,u[E].nextEl=void 0,e[E].prevEl=void 0,e[E].nextEl=void 0):(e.isElement&&e[E].el.remove(),u[E].el=void 0,e[E].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?S=!0:!u.loop&&n.loop?C=!0:T=!0),s.forEach(E=>{if(ei(u[E])&&ei(n[E]))Object.assign(u[E],n[E]),(E==="navigation"||E==="pagination"||E==="scrollbar")&&"enabled"in n[E]&&!n[E].enabled&&_(E);else{const L=n[E];(L===!0||L===!1)&&(E==="navigation"||E==="pagination"||E==="scrollbar")?L===!1&&_(E):u[E]=n[E]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&f&&u.virtual.enabled?(f.slides=t,f.update(!0)):r.includes("virtual")&&f&&u.virtual.enabled&&(t&&(f.slides=t),f.update(!0)),r.includes("children")&&t&&u.loop&&(T=!0),v&&m.init()&&m.update(!0),w&&(e.controller.control=u.controller.control),p&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),d.init(),d.render(),d.update()),g&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),y.init(),y.updateSize(),y.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Pa(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Pa(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),c.init(),c.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||T)&&e.loopDestroy(),(C||T)&&e.loopCreate(),e.update()}function H$(e={},t=!0){const n={on:{}},r={},i={};Fi(n,vp),n._emitClasses=!0,n.init=!1;const o={},a=jS.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?ei(e[s])?(n[s]={},i[s]={},Fi(n[s],e[s]),Fi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function W$({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){$S(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),IS(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),DS(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function G$(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return jS.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(ei(e[s])&&ei(t[s])){const u=Object.keys(e[s]),d=Object.keys(t[s]);u.length!==d.length?a(s):(u.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}),d.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const Y$=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Gl(){return Gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gl.apply(this,arguments)}function AS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function RS(e){const t=[];return q.Children.toArray(e).forEach(n=>{AS(n)?t.push(n):n.props&&n.props.children&&RS(n.props.children).forEach(r=>t.push(r))}),t}function q$(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return q.Children.toArray(e).forEach(r=>{if(AS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=RS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function X$(e,t,n){if(!n)return null;const r=d=>{let c=d;return d<0?c=t.length+d:c>=t.length&&(c=c-t.length),c},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let d=l;d<s;d+=1)d>=o&&d<=a&&u.push(t[r(d)]);return u.map((d,c)=>q.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${c}`}))}function Zo(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const vv=b.createContext(null),K$=b.createContext(null),FS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[d,c]=b.useState(null),[y,f]=b.useState(!1),m=b.useRef(!1),v=b.useRef(null),w=b.useRef(null),p=b.useRef(null),g=b.useRef(null),x=b.useRef(null),S=b.useRef(null),C=b.useRef(null),T=b.useRef(null),{params:_,passedParams:E,rest:L,events:D}=H$(o),{slides:A,slots:O}=q$(r),I=()=>{f(!y)};Object.assign(_.on,{_containerClasses(P,$){u($)}});const R=()=>{Object.assign(_.on,D),l=!0;const P={..._};if(delete P.wrapperClass,w.current=new hm(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=A;const $={cache:!1,slides:A,renderExternal:c,renderExternalUpdate:!1};Fi(w.current.params.virtual,$),Fi(w.current.originalParams.virtual,$)}};v.current||R(),w.current&&w.current.on("_beforeBreakpoint",I);const M=()=>{l||!D||!w.current||Object.keys(D).forEach(P=>{w.current.on(P,D[P])})},j=()=>{!D||!w.current||Object.keys(D).forEach(P=>{w.current.off(P,D[P])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",I)}),b.useEffect(()=>{!m.current&&w.current&&(w.current.emitSlidesClasses(),m.current=!0)}),Zo(()=>{if(a&&(a.current=v.current),!!v.current)return w.current.destroyed&&R(),W$({el:v.current,nextEl:x.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:T.current,swiper:w.current},_),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),Zo(()=>{M();const P=G$(E,p.current,A,g.current,$=>$.key);return p.current=E,g.current=A,P.length&&w.current&&!w.current.destroyed&&U$({swiper:w.current,slides:A,passedParams:E,changedParams:P,nextEl:x.current,prevEl:S.current,scrollbarEl:T.current,paginationEl:C.current}),()=>{j()}}),Zo(()=>{Y$(w.current)},[d]);function F(){return _.virtual?X$(w.current,A,d):A.map((P,$)=>q.cloneElement(P,{swiper:w.current,swiperSlideIndex:$}))}return q.createElement(t,Gl({ref:v,className:LS(`${s}${e?` ${e}`:""}`)},L),q.createElement(K$.Provider,{value:w.current},O["container-start"],q.createElement(n,{className:V$(_.wrapperClass)},O["wrapper-start"],F(),O["wrapper-end"]),$S(_)&&q.createElement(q.Fragment,null,q.createElement("div",{ref:S,className:"swiper-button-prev"}),q.createElement("div",{ref:x,className:"swiper-button-next"})),DS(_)&&q.createElement("div",{ref:T,className:"swiper-scrollbar"}),IS(_)&&q.createElement("div",{ref:C,className:"swiper-pagination"}),O["container-end"]))});FS.displayName="Swiper";const NS=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const d=b.useRef(null),[c,y]=b.useState("swiper-slide"),[f,m]=b.useState(!1);function v(x,S,C){S===d.current&&y(C)}Zo(()=>{if(typeof l<"u"&&(d.current.swiperSlideIndex=l),u&&(u.current=d.current),!(!d.current||!r)){if(r.destroyed){c!=="swiper-slide"&&y("swiper-slide");return}return r.on("_slideClass",v),()=>{r&&r.off("_slideClass",v)}}}),Zo(()=>{r&&d.current&&!r.destroyed&&y(r.getSlideClasses(d.current))},[r]);const w={isActive:c.indexOf("swiper-slide-active")>=0,isVisible:c.indexOf("swiper-slide-visible")>=0,isPrev:c.indexOf("swiper-slide-prev")>=0,isNext:c.indexOf("swiper-slide-next")>=0},p=()=>typeof t=="function"?t(w):t,g=()=>{m(!0)};return q.createElement(e,Gl({ref:d,className:LS(`${c}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:g},s),i&&q.createElement(vv.Provider,{value:w},q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},p(),o&&!f&&q.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&q.createElement(vv.Provider,{value:w},p(),o&&!f&&q.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});NS.displayName="SwiperSlide";const Q$=k.section`
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
`,Z$=k.div`
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
`,J$=k.div`
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
`,eI=k(Oe)`
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
`,tI=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],nI=()=>h.jsx(Q$,{children:h.jsx(FS,{modules:[M5,$5,j5],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:tI.map(e=>h.jsx(NS,{children:h.jsx(Z$,{bg:e.img,children:h.jsxs(J$,{children:[h.jsx("h1",{children:e.title}),h.jsx("p",{children:e.desc}),h.jsx(eI,{to:e.url,children:e.btn})]})})},e.id))})}),rI=k.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,bd=k.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,wd=k.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Sd=k.div`
  font-size: 14px;
  color: #888;
`,zS=()=>h.jsxs(rI,{children:[h.jsxs(bd,{children:[h.jsx(wd,{children:"3000+"}),h.jsx(Sd,{children:"Перевірених деталей"})]}),h.jsxs(bd,{children:[h.jsx(wd,{children:"6 років"}),h.jsx(Sd,{children:"Досвіду на ринку"})]}),h.jsxs(bd,{children:[h.jsx(wd,{children:"100%"}),h.jsx(Sd,{children:"Контроль якості"})]})]}),iI=Ae.div`
  background:var(--background-color);
`,oI=Ae.div`
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
`;const aI=()=>h.jsx(iI,{children:h.jsxs(oI,{children:[h.jsx(nI,{}),h.jsx(iw,{}),h.jsx(x5,{}),h.jsx(zS,{})]})}),sI=k.div`
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
`,lI=k.section`
  background-color:  var(--second-background);
`,uI=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,cI=k.button`
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
`,dI=k.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,fI=k.button`
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
`;const pI=k.div`
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
`,hI=k.div`
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
`;const mI=k.div`
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
`;const gI=k.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,vI=k.button`
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
`,BS=k.button`
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
`,yI=k.div`
  position: relative;
  display: inline-block;

`,xI=k.div`
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
`,fi=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,bI=k.aside`

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
`,wI=k.h3`
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
`;const SI=k.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,_I=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,CI=k.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,EI=k.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,kI=k.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,TI=k.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,yp=k.input.attrs({type:"checkbox"})`
  display: none;
`,PI=k.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${yp}:checked + & {
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

  ${yp}:checked + &::after {
    opacity: 1;
  }
`;var xp={},mm={},gm={},co={};Object.defineProperty(co,"__esModule",{value:!0});co.Direction=void 0;var yv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(yv||(co.Direction=yv={}));(function(e){var t=te&&te.__spreadArray||function(O,I,R){if(R||arguments.length===2)for(var M=0,j=I.length,F;M<j;M++)(F||!(M in I))&&(F||(F=Array.prototype.slice.call(I,0,M)),F[M]=I[M]);return O.concat(F||Array.prototype.slice.call(I))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=co,i=function(O){var I=O.toString().split(".")[1];return I?I.length:0};e.getStepDecimals=i;function o(O){return O.touches&&O.touches.length||O.changedTouches&&O.changedTouches.length}e.isTouchEvent=o;function a(O,I,R){var M=(I-O)/R,j=8,F=Number(M.toFixed(j));return parseInt(F.toString(),10)===F}e.isStepDivisible=a;function l(O,I,R,M,j,F,P){var $=1e11;if(O=Math.round(O*$)/$,!F){var N=P[I-1],B=P[I+1];if(N&&N>O)return N;if(B&&B<O)return B}if(O>M)return M;if(O<R)return R;var z=Math.floor(O*$-R*$)%Math.floor(j*$),U=Math.floor(O*$-Math.abs(z)),G=z===0?O:U/$,Y=Math.abs(z/$)<j/2?G:G+j,X=(0,e.getStepDecimals)(j);return parseFloat(Y.toFixed(X))}e.normalizeValue=l;function s(O,I,R){return(O-I)/(R-I)}e.relativeValue=s;function u(O){return O===r.Direction.Up||O===r.Direction.Down}e.isVertical=u;function d(O,I,R){if(I>=R)throw new RangeError("min (".concat(I,") is equal/bigger than max (").concat(R,")"));if(O<I)throw new RangeError("value (".concat(O,") is smaller than min (").concat(I,")"));if(O>R)throw new RangeError("value (".concat(O,") is bigger than max (").concat(R,")"))}e.checkBoundaries=d;function c(O,I,R){return O<I?I:O>R?R:O}e.checkValuesAgainstBoundaries=c;function y(O){if(!(O.length<2)&&!O.slice(1).every(function(I,R){return O[R]<=I}))throw new RangeError("values={[".concat(O,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=y;function f(O){var I=window.getComputedStyle(O);return{top:parseInt(I["margin-top"],10),bottom:parseInt(I["margin-bottom"],10),left:parseInt(I["margin-left"],10),right:parseInt(I["margin-right"],10)}}e.getMargin=f;function m(O){var I=window.getComputedStyle(O);return{top:parseInt(I["padding-top"],10)+parseInt(I["border-top-width"],10),bottom:parseInt(I["padding-bottom"],10)+parseInt(I["border-bottom-width"],10),left:parseInt(I["padding-left"],10)+parseInt(I["border-left-width"],10),right:parseInt(I["padding-right"],10)+parseInt(I["border-right-width"],10)}}e.getPaddingAndBorder=m;function v(O,I,R){var M=R?-1:1;O.forEach(function(j,F){return p(j,M*I[F].x,I[F].y)})}e.translateThumbs=v;function w(O,I,R,M){for(var j=0,F=D(O[0],I,R,M),P=1;P<O.length;P++){var $=D(O[P],I,R,M);$<F&&(F=$,j=P)}return j}e.getClosestThumbIndex=w;function p(O,I,R){O.style.transform="translate(".concat(I,"px, ").concat(R,"px)")}e.translate=p;var g=function(O){var I=[],R=null,M=function(){for(var j=[],F=0;F<arguments.length;F++)j[F]=arguments[F];I=j,!R&&(R=requestAnimationFrame(function(){R=null,O.apply(void 0,I)}))};return M};e.schd=g;function x(O,I,R){var M=O.slice(0);return M[I]=R,M}e.replaceAt=x;function S(O){var I=O.values,R=O.colors,M=O.min,j=O.max,F=O.direction,P=F===void 0?r.Direction.Right:F,$=O.rtl,N=$===void 0?!1:$;N&&P===r.Direction.Right?P=r.Direction.Left:N&&r.Direction.Left&&(P=r.Direction.Right);var B=I.slice(0).sort(function(U,G){return U-G}).map(function(U){return(U-M)/(j-M)*100}),z=B.reduce(function(U,G,Y){return"".concat(U,", ").concat(R[Y]," ").concat(G,"%, ").concat(R[Y+1]," ").concat(G,"%")},"");return"linear-gradient(".concat(P,", ").concat(R[0]," 0%").concat(z,", ").concat(R[R.length-1]," 100%)")}e.getTrackBackground=S;function C(){}e.voidFn=C;function T(O){throw new Error("Didn't expect to get here")}e.assertUnreachable=T;var _=function(O,I,R,M,j){j===void 0&&(j=function(P){return P});var F=Math.ceil(t([O],Array.from(O.children),!0).reduce(function(P,$){var N=Math.ceil($.getBoundingClientRect().width);if($.innerText&&$.innerText.includes(R)&&$.childElementCount===0){var B=$.cloneNode(!0);B.innerHTML=j(I.toFixed(M)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>P?N:P},O.getBoundingClientRect().width));return F},E=function(O,I,R,M,j,F,P){P===void 0&&(P=function(B){return B});var $=[],N=function(B){var z=_(R[B],M[B],j,F,P),U=I[B].x;I.forEach(function(G,Y){var X=G.x,ee=_(R[Y],M[Y],j,F,P);B!==Y&&(U>=X&&U<=X+ee||U+z>=X&&U+z<=X+ee)&&($.includes(Y)||($.push(B),$.push(Y),$=t(t([],$,!0),[B,Y],!1),N(Y)))})};return N(O),Array.from(new Set($.sort()))},L=function(O,I,R,M,j,F){M===void 0&&(M=.1),j===void 0&&(j=" - "),F===void 0&&(F=function(Y){return Y});var P=(0,e.getStepDecimals)(M),$=(0,n.useState)({}),N=$[0],B=$[1],z=(0,n.useState)(F(I[R].toFixed(P))),U=z[0],G=z[1];return(0,n.useEffect)(function(){if(O){var Y=O.getThumbs();if(Y.length<1)return;var X={},ee=O.getOffsets(),fe=E(R,ee,Y,I,j,P,F),be=F(I[R].toFixed(P));if(fe.length){var ie=fe.reduce(function(vt,po,Ya,ho){return vt.length?t(t([],vt,!0),[ee[ho[Ya]].x],!1):[ee[ho[Ya]].x]},[]);if(Math.min.apply(Math,ie)===ee[R].x){var je=[];fe.forEach(function(vt){je.push(I[vt].toFixed(P))}),be=Array.from(new Set(je.sort(function(vt,po){return parseFloat(vt)-parseFloat(po)}))).map(F).join(j);var Be=Math.min.apply(Math,ie),Ve=Math.max.apply(Math,ie),si=Y[fe[ie.indexOf(Ve)]].getBoundingClientRect().width;X.left="".concat(Math.abs(Be-(Ve+si))/2,"px"),X.transform="translate(-50%, 0)"}else X.visibility="hidden"}G(be),B(X)}},[O,I]),[U,N]};e.useThumbOverlap=L;function D(O,I,R,M){var j=O.getBoundingClientRect(),F=j.left,P=j.top,$=j.width,N=j.height;return u(M)?Math.abs(R-(P+N/2)):Math.abs(I-(F+$/2))}var A=function(){var O,I=((O=navigator.userAgentData)===null||O===void 0?void 0:O.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(I)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=A})(gm);var OI=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),MI=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),jI=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),$I=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&MI(t,e,n);return jI(t,e),t},xv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(mm,"__esModule",{value:!0});var ws=$I(b),oe=gm,Re=co,II=["ArrowRight","ArrowUp","k","PageUp"],DI=["ArrowLeft","ArrowDown","j","PageDown"],LI=function(e){OI(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=ws.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var d=u.getBoundingClientRect(),c=(0,oe.getPaddingAndBorder)(u);return r.getThumbs().map(function(y,f){var m={x:0,y:0},v=y.getBoundingClientRect(),w=(0,oe.getMargin)(y);switch(o){case Re.Direction.Right:return m.x=(w.left+c.left)*-1,m.y=((v.height-d.height)/2+c.top)*-1,m.x+=d.width*(0,oe.relativeValue)(a[f],l,s)-v.width/2,m;case Re.Direction.Left:return m.x=(w.right+c.right)*-1,m.y=((v.height-d.height)/2+c.top)*-1,m.x+=d.width-d.width*(0,oe.relativeValue)(a[f],l,s)-v.width/2,m;case Re.Direction.Up:return m.x=((v.width-d.width)/2+w.left+c.left)*-1,m.y=-c.left,m.y+=d.height-d.height*(0,oe.relativeValue)(a[f],l,s)-v.height/2,m;case Re.Direction.Down:return m.x=((v.width-d.width)/2+w.left+c.left)*-1,m.y=-c.left,m.y+=d.height*(0,oe.relativeValue)(a[f],l,s)-v.height/2,m;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,d=o.direction,c=r.state.isChanged,y=r.getTargetIndex(i.nativeEvent),f=u||d===Re.Direction.Left||d===Re.Direction.Down?-1:1;y!==-1&&(II.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]+f*(i.key==="PageUp"?s*10:s),y)))):DI.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]-f*(i.key==="PageDown"?s*10:s),y)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){c&&r.fireOnFinalChange()}):c&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,d=u.direction,c=u.min,y=u.max,f=u.onChange,m=u.values,v=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var p=r.trackRef.current;if(!p)return null;var g=p.getBoundingClientRect(),x=(0,oe.isVertical)(d)?g.height:g.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],C=o-s[1],T=0;switch(d){case Re.Direction.Right:case Re.Direction.Left:T=S/x*(y-c);break;case Re.Direction.Down:case Re.Direction.Up:T=C/x*(y-c);break;default:(0,oe.assertUnreachable)(d)}if(w&&(T*=-1),Math.abs(T)>=v/2){for(var _=0;_<r.thumbRefs.length;_++){if(m[_]===y&&Math.sign(T)===1||m[_]===c&&Math.sign(T)===-1)return;var E=m[_]+T;E>y?T=y-m[_]:E<c&&(T=c-m[_])}for(var L=m.slice(0),_=0;_<r.thumbRefs.length;_++)L=(0,oe.replaceAt)(L,_,r.normalizeValue(m[_]+T,_));r.setState({draggedTrackPos:[i,o]}),f(L)}}else{var D=0;switch(d){case Re.Direction.Right:D=(i-g.left)/x*(y-c)+c;break;case Re.Direction.Left:D=(x-(i-g.left))/x*(y-c)+c;break;case Re.Direction.Down:D=(o-g.top)/x*(y-c)+c;break;case Re.Direction.Up:D=(x-(o-g.top))/x*(y-c)+c;break;default:(0,oe.assertUnreachable)(d)}w&&(D=y+c-D),Math.abs(m[l]-D)>=v/2&&f((0,oe.replaceAt)(m,l,r.normalizeValue(D,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,d=a.allowOverlap,c=a.values;return(0,oe.normalizeValue)(i,o,l,s,u,d,c)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=ws.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],d=0;d<r.numOfMarks+1;d++){var c=9999,y=9999;if(r.markRefs[d].current){var f=r.markRefs[d].current.getBoundingClientRect();c=f.height,y=f.width}r.props.direction===Re.Direction.Left||r.props.direction===Re.Direction.Right?u.push([Math.round(o/r.numOfMarks*d+l-y/2),-Math.round((c-a)/2)]):u.push([Math.round(a/r.numOfMarks*d+s-c/2),-Math.round((y-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return ws.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(d){(0,oe.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,d=r.values,c=r.min,y=r.max,f=r.allowOverlap,m=r.disabled,v=this.state,w=v.draggedThumbIndex,p=v.thumbZIndexes,g=v.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!m?"pointer":"inherit"},onMouseDown:m?oe.voidFn:this.onMouseDownTrack,onTouchStart:m?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:m,children:xv(xv([],g.map(function(x,S,C){return u({props:{style:n.props.direction===Re.Direction.Left||n.props.direction===Re.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),d.map(function(x,S){var C=n.state.draggedThumbIndex===S;return l({index:S,value:x,isDragged:C,props:{style:{position:"absolute",zIndex:p[S],cursor:m?"inherit":C?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:m?void 0:0,"aria-valuemax":f?y:d[S+1]||y,"aria-valuemin":f?c:d[S-1]||c,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:m?oe.voidFn:n.onKeyDown,onKeyUp:m?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Re.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(ws.Component);mm.default=LI;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(mm);e.Range=n.default;var r=gm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=co;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(xp);const AI=k.div`
  padding: 20px 0;
`,RI=k.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,bv=k.input`
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
`;const FI=k.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,NI=k.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,VS=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,u]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(u(e),t&&t(e))},[e,t]);const d=f=>{u(f),t&&t(f)},c=(f,m)=>{const v=m===""?"":Number(m),w=[...s];w[f]=v,d(w)},y=f=>{const m=[...s];f===0?((m[0]===""||m[0]<o)&&(m[0]=o),m[0]>m[1]-50&&(m[0]=m[1]-50)):((m[1]===""||m[1]>a)&&(m[1]=a),m[1]<m[0]+50&&(m[1]=m[0]+50)),d(m)};return h.jsx(h.Fragment,{children:l&&h.jsxs(AI,{children:[h.jsxs(RI,{children:[h.jsx(bv,{type:"number",value:s[0],min:o,max:s[1],onChange:f=>c(0,f.target.value),onBlur:()=>y(0)}),h.jsx(bv,{type:"number",value:s[1],min:s[0],max:a,onChange:f=>c(1,f.target.value),onBlur:()=>y(1)})]}),h.jsx(xp.Range,{values:s,step:50,min:o,max:a,onChange:d,renderTrack:({props:f,children:m})=>h.jsx(FI,{...f,background:xp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:m}),renderThumb:({props:f})=>h.jsx(NI,{...f})})]})})},zI=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState([]),[l,s]=b.useState({});b.useEffect(()=>{t&&(async()=>{try{const m=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const v=await m.json();console.log("dataaaa",v.data);const w=v.data||[],p={};w.forEach(x=>{var S;(S=x.attributes)==null||S.forEach(C=>{p[C.label]||(p[C.label]=new Set),p[C.label].add(C.value)})});const g=Object.entries(p).map(([x,S])=>({type:"checkbox",label:x,name:x.toLowerCase(),options:Array.from(S)}));console.log("fillltr",g),a(g)}catch(m){console.error(m)}})()},[t]);const u=f=>{s(m=>({...m,[f]:!m[f]}))},d=(f,m)=>{r(v=>{const w=v[f]||[];return w.includes(m)?{...v,[f]:w.filter(p=>p!==m)}:{...v,[f]:[...w,m]}})},c=Object.values(n).some(f=>Array.isArray(f)&&f.length>0),y=()=>{c&&r({})};return console.log(c),h.jsxs(bI,{children:[h.jsxs(wI,{children:["Фільтри ",h.jsx(Ib,{size:20})]}),(o||[]).map(f=>{var v;const m=!!l[f.name];return h.jsxs(SI,{children:[h.jsxs(_I,{onClick:()=>u(f.name),children:[h.jsx(CI,{children:f.label}),h.jsx(EI,{isOpen:m})]}),h.jsxs(kI,{isOpen:m,children:[f.type==="checkbox"&&((v=f.options)==null?void 0:v.map(w=>{var p;return h.jsxs(TI,{children:[h.jsx(yp,{checked:((p=n[f.name])==null?void 0:p.includes(w))||!1,onChange:()=>d(f.name,w)}),h.jsx(PI,{}),w]},w)})),f.type==="range"&&h.jsx(VS,{onChange:i,childValues:e})]})]},f.name)}),h.jsx(BS,{onClick:y,disabled:!c,children:"Скинути обрані фільтри"})]})},BI=k.aside`
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
`;const VI=k.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,UI=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,HI=k.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,WI=k.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,GI=k.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,YI=k.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,bp=k.input.attrs({type:"checkbox"})`
  display: none;
`,qI=k.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${bp}:checked + & {
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

  ${bp}:checked + &::after {
    opacity: 1;
  }
`,XI=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState({}),[l,s]=b.useState([]);b.useEffect(()=>{t&&(async()=>{try{const y=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const f=await y.json();console.log("dataaaa",f.data);const m=f.data||[],v={};m.forEach(p=>{var g;(g=p.attributes)==null||g.forEach(x=>{v[x.label]||(v[x.label]=new Set),v[x.label].add(x.value)})});const w=Object.entries(v).map(([p,g])=>({type:"checkbox",label:p,name:p.toLowerCase(),options:Array.from(g)}));console.log("fillltr",w),s(w)}catch(y){console.error(y)}})()},[t]);const u=c=>{a(y=>({...y,[c]:!y[c]}))},d=(c,y)=>{r(f=>{const m=f[c]||[];return m.includes(y)?{...f,[c]:m.filter(v=>v!==y)}:{...f,[c]:[...m,y]}})};return h.jsx(BI,{children:(l||[]).map(c=>{var f;const y=!!o[c.name];return h.jsxs(VI,{children:[h.jsxs(UI,{onClick:()=>u(c.name),children:[h.jsx(HI,{children:c.label}),h.jsx(WI,{isOpen:y})]}),h.jsxs(GI,{isOpen:y,children:[c.type==="checkbox"&&((f=c.options)==null?void 0:f.map(m=>{var v;return h.jsxs(YI,{children:[h.jsx(bp,{checked:((v=n[c.name])==null?void 0:v.includes(m))||!1,onChange:()=>d(c.name,m)}),h.jsx(qI,{}),m]},m)})),c.type==="range"&&h.jsx(VS,{onChange:i,childValues:e})]})]},c.name)})})},KI=k.div`
`,QI=k.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    
`,ZI=k.h2`
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

`,JI=k.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;k.div``;const eD=k.div`
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
`,tD=k.div`
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
`,nD=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,rD=k.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,iD=k.p`
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
`,oD=k.p`
     font-size: 17px;
    font-weight: 800;

`,aD=k.div.attrs({className:"card-buttons"})`
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
`,wv=k.button`
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
`;const sD=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,_d=k.button`
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
`,lD=k.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,uD=k.button`
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
`,cD=k.div`
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
`,US=Xb({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:Wa,clearFavorite:dD}=US.actions,fD=US.reducer,pD=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:u})=>{const[d,c]=b.useState([]),[y,f]=b.useState(!0),[m,v]=b.useState(1),w=24;let p=d;b.useEffect(()=>{(async()=>{try{f(!0);const R=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();c(R.data);const M=R.data.map(j=>j.price);if(M.length>0){let j=Math.min(...M),F=Math.max(...M);e([j,F])}}catch(I){console.error("Error fetching products:",I)}finally{f(!1)}})()},[t,e]),b.useEffect(()=>{v(1)},[t,n,r]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[m]);const g=Xn(),x=Qn(),S=Et(O=>O.favorites.items),C=Et(O=>O.cart.items),T=(O,I)=>{I.stopPropagation();const R=S.some(M=>M.id===O.id);x(Wa(O)),R?J.warning(`${O.name} видалено з обраного`):J.info(`${O.name} додано в обране`)};if(Object.keys(n).forEach(O=>{const I=n[O];Array.isArray(I)&&I.length>0&&(p=p.filter(R=>{var j;const M=(j=R.attributes)==null?void 0:j.find(F=>F.label.toLowerCase()===O.toLowerCase());return M&&I.includes(M.value)}))}),r&&r.length===2){const[O,I]=r;console.log(O,I)}const _=b.useMemo(()=>{const O=[...p];switch(i){case"name":return O.sort((I,R)=>s==="asc"?I.name.localeCompare(R.name):R.name.localeCompare(I.name));case"price":return O.sort((I,R)=>s==="asc"?I.price-R.price:R.price-I.price);case"date":return O.sort((I,R)=>s==="asc"?new Date(I.createdAt)-new Date(R.createdAt):new Date(R.createdAt)-new Date(I.createdAt));default:return O}},[i,p,s]),E=m*w,L=E-w,D=_.slice(L,E),A=Math.ceil(p.length/w);return y?h.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:h.jsx(qu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):(console.log(D),console.log("filteredProducts.length:",p.length),console.log("currentProducts.length:",D.length),h.jsxs(KI,{children:[h.jsxs(QI,{children:[h.jsx(ZI,{children:t}),h.jsxs(lD,{children:[h.jsxs(uD,{onClick:()=>o(O=>!O),children:["Сортування",h.jsx(Uh,{strokeWidth:.9,size:22})]}),a&&h.jsxs(cD,{children:[h.jsx(pi,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),h.jsx(pi,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),h.jsx(pi,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),h.jsx(pi,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),h.jsx(pi,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),h.jsx(pi,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),h.jsx(oi,{autoClose:1500}),p.length===0?h.jsx(JI,{children:h.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):h.jsx(eD,{children:D.map(O=>{var P,$;const I=S.some(N=>N.id===O.id),R=C.find(N=>N.id===O.id),j=(R?R.quantity:0)>=(O.stock||0),F=(N,B)=>{if(B.stopPropagation(),j){J.error("Товар уже у кошику");return}x(Na({...N,quantity:1})),J.success(`${N.name} додано в кошик!`)};return h.jsxs(tD,{onClick:()=>g(`/product/${O.id}`),style:{cursor:"pointer"},children:[h.jsx(nD,{src:(($=(P=O.images)==null?void 0:P[0])==null?void 0:$.url)||"/placeholder.jpg",alt:O.name,onError:N=>{N.currentTarget.onerror=null,N.currentTarget.src=Ca}}),h.jsx(iD,{children:O.name}),h.jsxs(rD,{children:[h.jsxs(oD,{children:[O.price," грн"]}),h.jsxs(aD,{children:[h.jsx(wv,{onClick:N=>F(O,N),children:h.jsx(Ra,{size:24,color:R?"var(--orange-color)":"black",strokeWidth:2})}),h.jsx(wv,{onClick:N=>T(O,N),children:h.jsx(Wh,{size:24,fill:I?"#ff4d4f":"none",color:I?"#ff4d4f":"#000000",strokeWidth:I?1:2})})]})]})]},O.id)})}),p.length>w&&h.jsxs(sD,{children:[h.jsx(_d,{onClick:()=>v(O=>Math.max(O-1,1)),disabled:m===1,children:"Назад"}),Array.from({length:A},(O,I)=>h.jsx(_d,{onClick:()=>v(I+1),active:m===I+1,children:I+1},I)),h.jsx(_d,{onClick:()=>v(O=>Math.min(O+1,A)),disabled:m===A,children:"Вперед"})]})]}))},hD=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=Q1(),[r,i]=b.useState(!1),[o,a]=b.useState(!1),[l,s]=b.useState("date"),[u,d]=b.useState("desc"),[c,y]=b.useState([]),[f,m]=b.useState([0,0]);console.log(c),console.log(n);const v=Object.values(e).some(p=>Array.isArray(p)&&p.length>0),w=()=>{v&&t({})};return h.jsxs(lI,{children:[h.jsxs(sI,{children:[h.jsxs(uI,{children:[h.jsxs(cI,{onClick:()=>i(!0),children:["Фільтр",h.jsx(dI,{children:h.jsx("use",{href:`${un}#icon-filter`})})]}),h.jsxs(yI,{children:[h.jsxs(fI,{onClick:()=>a(p=>!p),children:["Сортування",h.jsx(Uh,{strokeWidth:.9,size:22})]}),o&&h.jsxs(xI,{children:[h.jsx(fi,{onClick:()=>{s("name"),d("asc"),a(!1)},children:"А-Я"}),h.jsx(fi,{onClick:()=>{s("name"),d("desc"),a(!1)},children:"Я-А"}),h.jsx(fi,{onClick:()=>{s("price"),d("asc"),a(!1)},children:"Ціна ↑"}),h.jsx(fi,{onClick:()=>{s("price"),d("desc"),a(!1)},children:"Ціна ↓"}),h.jsx(fi,{onClick:()=>{s("date"),d("desc"),a(!1)},children:"Спочатку новіші"}),h.jsx(fi,{onClick:()=>{s("date"),d("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),h.jsx(zI,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:c,priceRange:f,setPriceRange:m}),h.jsx(pD,{priceRange:f,values:c,setValues:y,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:u,setSortOrder:d}),r&&h.jsx(pI,{onClick:()=>i(!1),open:r,children:h.jsxs(hI,{onClick:p=>p.stopPropagation(),open:r,children:[h.jsxs(mI,{children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[h.jsx(Ib,{size:20}),h.jsx("h2",{children:"Фільтри"})]}),h.jsx(Lb,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),h.jsx(XI,{childValues:c,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:f,setPriceRange:m}),h.jsxs(gI,{children:[h.jsx(BS,{onClick:w,disabled:!v,children:"Скинути обрані фільтри"}),h.jsx(vI,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},Sv=k.div`
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
    max-width: 1448px;
    
  }
`,mD=k.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,gD=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,vD=k.div``;k.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const yD=k.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,xD=k.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,bD=k.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,wD=k.div``,SD=k.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,_D=k.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,CD=k.span`
  color: #27ae60;
  font-size: 17px;
`,ED=k.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,kD=k.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,TD=k.span`
  font-size: 32px;
  font-weight: 700;
`;k.span`
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
`;const PD=k.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,OD=k.div`
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
`,MD=k.button`
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
`;const _v=k.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,jD=k.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,Cv=k.div`
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
`,$D=k.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`,ID=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,Ev=k.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,kv=k.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,Mo=k.button`
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
`,Tv=k.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,Pv=k.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,DD=k.button`
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
`,LD=k.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,HS=k.span`

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
`,AD=k.div`
  position: relative;
  display: inline-block;

  &:hover ${HS} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,WS="carousel",GS="controller",RD="navigation",FD="no-scroll",vm="portal",ND="root",YS="toolbar",Ov="zoom",Cd="loading",Ed="error",kd="complete",zD="placeholder",BD=e=>`active-slide-${e}`,VD="fullsize",ym="flex_center",UD="no_scroll",qS="no_scroll_padding",xm="slide",XS="slide_wrapper",HD="slide_wrapper_interactive",Rr="prev",Fr="next",Mv="swipe",Ji="close",KS="onPointerDown",QS="onPointerMove",ZS="onPointerUp",JS="onPointerLeave",e2="onPointerCancel",bm="onKeyDown",WD="onKeyUp",wm="onWheel",GD="Escape",YD="ArrowLeft",qD="ArrowRight",XD="button",wp="icon",t2="contain",jv="cover",n2="Unknown action type",r2="yarl__";function Tn(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${r2}${e}`}function xt(e){return`--${r2}${e}`}function Ga(e,t){return`${e}${t?`_${t}`:""}`}function Sm(e){return t=>Ga(e,t)}function eo(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function KD(e,t,n){return eo(e,"{index} of {total}").replace(/\{index}/g,`${Tm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function _m(...e){return()=>{e.forEach(t=>{t()})}}function Jn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Cm(){return typeof window<"u"}function Em(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function fo(e){return e.type===void 0||e.type==="image"}function km(e,t){return e.imageFit===jv||e.imageFit!==t2&&t===jv}function uc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Yl(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=uc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function QD(e,t){const n=Yl(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function ZD(){return(Cm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Tm(e,t){return t>0?(e%t+t)%t:0}function i2(e){return e.length>0}function o2(e,t){return e[Tm(t,e.length)]}function Sp(e,t){return i2(e)?o2(e,t):void 0}function JD(e){return fo(e)?e.src:void 0}function eL(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function tL(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const nL=Number(b.version.split(".")[0])>=19;function rL(e){return{inert:nL?e:e?"":void 0}}function iL(e){e.scrollTop}const _p={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Ji]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:t2,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Or(e,t){return{name:e,component:t}}function Ue(e,t){return{module:e,children:t}}function a2(e,t,n){return e.module.name===t?n(e):e.children?[Ue(e.module,e.children.flatMap(r=>{var i;return(i=a2(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function hi(e,t,n){return e.flatMap(r=>{var i;return(i=a2(r,t,n))!==null&&i!==void 0?i:[]})}function oL(e,t=[],n=[]){let r=e;const i=f=>{const m=[...r];for(;m.length>0;){const v=m.pop();if((v==null?void 0:v.module.name)===f)return!0;v!=null&&v.children&&m.push(...v.children)}return!1},o=(f,m)=>{if(f===""){r=[Ue(m,r)];return}r=hi(r,f,v=>[Ue(m,[v])])},a=(f,m)=>{r=hi(r,f,v=>[Ue(v.module,[Ue(m,v.children)])])},l=(f,m,v)=>{r=hi(r,f,w=>{var p;return[Ue(w.module,[...v?[Ue(m)]:[],...(p=w.children)!==null&&p!==void 0?p:[],...v?[]:[Ue(m)]])]})},s=(f,m,v)=>{r=hi(r,f,w=>[...v?[Ue(m)]:[],w,...v?[]:[Ue(m)]])},u=f=>{a(GS,f)},d=(f,m)=>{r=hi(r,f,v=>[Ue(m,v.children)])},c=f=>{r=hi(r,f,m=>m.children)},y=f=>{n.push(f)};return t.forEach(f=>{f({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:d,remove:c,augment:y})}),{config:r,augmentation:f=>n.reduce((m,v)=>v(m),f)}}const s2=b.createContext(null),l2=Jn("useA11yContext","A11yContext",s2);function aL({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=d=>c=>{var y;c.currentTarget.contains(c.relatedTarget)||n(d),(y=d?l:s)===null||y===void 0||y(c)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(s2.Provider,{value:o},e)}const u2=b.createContext(null),cc=Jn("useDocument","DocumentContext",u2);function sL({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(u2.Provider,{value:n},t)}const c2=b.createContext(null),dc=Jn("useEvents","EventsContext",c2);function lL({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(c2.Provider,{value:n},e)}const d2=b.createContext(null),Xt=Jn("useLightboxProps","LightboxPropsContext",d2);function uL({children:e,...t}){return b.createElement(d2.Provider,{value:t},e)}const f2=b.createContext(null),Mr=Jn("useLightboxState","LightboxStateContext",f2),p2=b.createContext(null),cL=Jn("useLightboxDispatch","LightboxDispatchContext",p2);function dL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Tm(i,n.length),a=Sp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Sp(t.slides,t.index)}:e;default:throw new Error(n2)}}function fL({slides:e,index:t,children:n}){const[r,i]=b.useReducer(dL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Sp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(p2.Provider,{value:i},b.createElement(f2.Provider,{value:u},n))}const h2=b.createContext(null),fc=Jn("useTimeouts","TimeoutsContext",h2);function pL({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(h2.Provider,{value:n},e)}const Pm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:d}=Xt(),c=eo(d,t);return b.createElement("button",{ref:s,type:"button",title:c,"aria-label":c,className:Tn(ae(XD),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:ae(wp),style:u.icon}))});function hL(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ai(e,t){return hL(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const mL=ai("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),gL=ai("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),vL=ai("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),yL=ai("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),xL=ai("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Pn=Cm()?b.useLayoutEffect:b.useEffect;function Om(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function bL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(uc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function $v(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=Om();return Pn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:d,onfinish:c}=t(n.current,e.current.getBoundingClientRect(),bL(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:d})}catch(y){console.error(y)}r.current&&(r.current.onfinish=()=>{r.current=void 0,c==null||c()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function m2(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function Zs(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=fc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function pe(e){const t=b.useRef(e);return Pn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Iv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Cp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{Iv(e,n),Iv(t,n)},[e,t])}function wL(e,t=!1){const n=b.useRef(!1);Pn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Mm(){const[e,t]=b.useState(!1);return Pn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function SL(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(KS,i),onPointerMove:i=>t(QS,i),onPointerUp:i=>t(ZS,i),onPointerLeave:i=>t(JS,i),onPointerCancel:i=>t(e2,i),onKeyDown:i=>t(bm,i),onKeyUp:i=>t(WD,i),onWheel:i=>t(wm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Dv(e,t){const n=b.useRef(0),r=Zs(),i=pe((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Td=Sm("slide"),Pd=Sm("slide_image");function ql({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var d,c,y,f,m,v,w,p;const[g,x]=b.useState(Cd),{publish:S}=dc(),{setTimeout:C}=fc(),T=b.useRef(null);b.useEffect(()=>{t===0&&S(BD(g))},[t,g,S]);const _=pe(z=>{("decode"in z?z.decode():Promise.resolve()).catch(()=>{}).then(()=>{z.parentNode&&(x(kd),C(()=>{l==null||l(z)},0))})}),E=b.useCallback(z=>{T.current=z,z!=null&&z.complete&&_(z)},[_]),L=b.useCallback(z=>{_(z.currentTarget)},[_]),D=pe(()=>{x(Ed),s==null||s()}),A=km(e,i),O=(z,U)=>Number.isFinite(z)?z:U,I=O(Math.max(...((c=(d=e.srcSet)===null||d===void 0?void 0:d.map(z=>z.width))!==null&&c!==void 0?c:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((y=T.current)===null||y===void 0?void 0:y.naturalWidth)||0),R=O(Math.max(...((m=(f=e.srcSet)===null||f===void 0?void 0:f.map(z=>z.height))!==null&&m!==void 0?m:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((v=T.current)===null||v===void 0?void 0:v.naturalHeight)||0),M=I&&R?{maxWidth:`min(${I}px, 100%)`,maxHeight:`min(${R}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},j=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((z,U)=>z.width-U.width).map(z=>`${z.src} ${z.width}w`).join(", "),F=()=>r&&!A&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=j&&r&&Cm()?`${Math.round(Math.min(F(),r.width))}px`:void 0,{style:$,className:N,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:E,onLoad:L,onError:D,onClick:a,draggable:!1,className:Tn(ae(Pd()),A&&ae(Pd("cover")),g!==kd&&ae(Pd("loading")),N),style:{...M,...u,...$},...B,alt:(p=e.alt)!==null&&p!==void 0?p:"",sizes:P,srcSet:j,src:e.src}),g!==kd&&b.createElement("div",{className:ae(Td(zD))},g===Cd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(yL,{className:Tn(ae(wp),ae(Td(Cd)))})),g===Ed&&(n!=null&&n.iconError?n.iconError():b.createElement(xL,{className:Tn(ae(wp),ae(Td(Ed)))}))))}const _L=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=l2();return b.createElement(sL,{nodeRef:l},b.createElement("div",{ref:Cp(a,l),className:Tn(ae("root"),t),...s(r,i),...o},n))});var rt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(rt||(rt={}));function g2(e,t,n,r,i){b.useEffect(()=>i?()=>{}:_m(e(KS,t),e(QS,n),e(ZS,r),e(JS,r),e(e2,r)),[e,t,n,r,i])}var Jt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(Jt||(Jt={}));const Od=30;function CL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,d,c,y,f,m,v,w){const p=b.useRef(0),g=b.useRef([]),x=b.useRef(void 0),S=b.useRef(0),C=b.useRef(Jt.NONE),T=b.useCallback(I=>{x.current===I.pointerId&&(x.current=void 0,C.current=Jt.NONE);const R=g.current;R.splice(0,R.length,...R.filter(M=>M.pointerId!==I.pointerId))},[]),_=b.useCallback(I=>{T(I),I.persist(),g.current.push(I)},[T]),E=b.useCallback(I=>g.current.find(({pointerId:R})=>I.pointerId===R),[]),L=pe(I=>{_(I)}),D=(I,R)=>c&&I>R||d&&I<-R,A=pe(I=>{const R=E(I);if(R)if(x.current===I.pointerId){const M=Date.now()-S.current,j=p.current;C.current===Jt.SWIPE?Math.abs(j)>.3*i||Math.abs(j)>5&&M<o?s(j,M):u(j):C.current===Jt.PULL&&(D(j,2*Od)?m(j,M):v(j)),p.current=0,C.current=Jt.NONE}else{const{target:M}=I;t&&M instanceof HTMLElement&&M===R.target&&(M.classList.contains(ae(xm))||M.classList.contains(ae(XS)))&&w()}T(I)}),O=pe(I=>{const R=E(I);if(R){const M=x.current===I.pointerId;if(I.buttons===0){M&&p.current!==0?A(I):T(R);return}const j=I.clientX-R.clientX,F=I.clientY-R.clientY;if(x.current===void 0){const P=$=>{_(I),x.current=I.pointerId,S.current=Date.now(),C.current=$};Math.abs(j)>Math.abs(F)&&Math.abs(j)>Od&&r(j)?e||(P(Jt.SWIPE),a()):Math.abs(F)>Math.abs(j)&&D(F,Od)&&(P(Jt.PULL),y())}else M&&(C.current===Jt.SWIPE?(p.current=j,l(j)):C.current===Jt.PULL&&(p.current=F,f(F)))}});g2(n,L,O,A)}function EL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=pe(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function kL(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),d=b.useRef(0),c=b.useRef(void 0),y=b.useRef(void 0),f=b.useRef(0),m=b.useRef(void 0),v=b.useRef(0),{setTimeout:w,clearTimeout:p}=fc(),g=b.useCallback(()=>{c.current&&(p(c.current),c.current=void 0)},[p]),x=b.useCallback(()=>{y.current&&(p(y.current),y.current=void 0)},[p]),S=pe(()=>{e!==rt.SWIPE&&(u.current=0,v.current=0,g(),x())});b.useEffect(S,[e,S]);const C=pe(_=>{y.current=void 0,u.current===_&&s(u.current)}),T=pe(_=>{if(_.ctrlKey||Math.abs(_.deltaY)>Math.abs(_.deltaX))return;const E=L=>{f.current=L,p(m.current),m.current=L>0?w(()=>{f.current=0,m.current=void 0},300):void 0};if(e===rt.NONE){if(Math.abs(_.deltaX)<=1.2*Math.abs(f.current)){E(_.deltaX);return}if(!n(-_.deltaX))return;if(d.current+=_.deltaX,g(),Math.abs(d.current)>30)d.current=0,E(0),v.current=Date.now(),o();else{const L=d.current;c.current=w(()=>{c.current=void 0,L===d.current&&(d.current=0)},i)}}else if(e===rt.SWIPE){let L=u.current-_.deltaX;if(L=Math.min(Math.abs(L),r)*Math.sign(L),u.current=L,a(L),x(),Math.abs(L)>.2*r){E(_.deltaX),l(L,Date.now()-v.current);return}y.current=w(()=>C(L),2*i)}else E(_.deltaX)});b.useEffect(()=>t(wm,T),[t,T])}const Lv=Sm("container"),v2=b.createContext(null),er=Jn("useController","ControllerContext",v2);function TL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:d,preventDefaultWheelX:c,preventDefaultWheelY:y}=o,[f,m]=b.useState(),v=Mr(),w=cL(),[p,g]=b.useState(rt.NONE),x=b.useRef(0),S=b.useRef(0),C=b.useRef(1),{registerSensors:T,subscribeSensors:_}=SL(),{subscribe:E,publish:L}=dc(),D=Zs(),A=Zs(),O=Zs(),{containerRef:I,setContainerRef:R,containerRect:M}=m2(),j=Cp(EL({preventDefaultWheelX:c,preventDefaultWheelY:y}),R),F=b.useRef(null),P=Cp(F,void 0),{getOwnerDocument:$}=cc(),N=Mm(),B=W=>(N?-1:1)*(typeof W=="number"?W:1),z=pe(()=>{var W;return(W=I.current)===null||W===void 0?void 0:W.focus()}),U=pe(()=>t),G=pe(()=>v),Y=b.useCallback(W=>L(Rr,W),[L]),X=b.useCallback(W=>L(Fr,W),[L]),ee=b.useCallback(()=>L(Ji),[L]),fe=W=>!(r.finite&&(B(W)>0&&v.currentIndex===0||B(W)<0&&v.currentIndex===v.slides.length-1)),be=W=>{var we;x.current=W,(we=I.current)===null||we===void 0||we.style.setProperty(xt("swipe_offset"),`${Math.round(W)}px`)},ie=W=>{var we,st;S.current=W,C.current=(()=>{const mo=(()=>d&&W>0?W:u&&W<0?-W:0)();return Math.min(Math.max(Em(1-mo/60*(1-.5),2),.5),1)})(),(we=I.current)===null||we===void 0||we.style.setProperty(xt("pull_offset"),`${Math.round(W)}px`),(st=I.current)===null||st===void 0||st.style.setProperty(xt("pull_opacity"),`${C.current}`)},{prepareAnimation:je}=$v(F,(W,we,st)=>{if(F.current&&M)return{keyframes:[{transform:`translate(0, ${W.rect.y-we.y+st.y}px)`,opacity:W.opacity},{transform:"translate(0, 0)",opacity:1}],duration:W.duration,easing:i.easing.fade}}),Be=(W,we)=>{if(u||d){ie(W);let st=0;F.current&&(st=i.fade*(we?2:1),je({rect:F.current.getBoundingClientRect(),opacity:C.current,duration:st})),O(()=>{ie(0),g(rt.NONE)},st),g(rt.ANIMATION),we||ee()}},{prepareAnimation:Ve,isAnimationPlaying:si}=$v(F,(W,we,st)=>{var hn;if(F.current&&M&&(!((hn=v.animation)===null||hn===void 0)&&hn.duration)){const Bt=Yl(r.spacing),mo=(Bt.percent?Bt.percent*M.width/100:Bt.pixel)||0;return{keyframes:[{transform:`translate(${B(v.globalIndex-W.index)*(M.width+mo)+W.rect.x-we.x+st.x}px, 0)`},{transform:"translate(0, 0)"}],duration:v.animation.duration,easing:v.animation.easing}}}),vt=pe(W=>{var we,st;const hn=W.offset||0,Bt=hn?i.swipe:(we=i.navigation)!==null&&we!==void 0?we:i.swipe,mo=!hn&&!si()?i.easing.navigation:i.easing.swipe;let{direction:qa}=W;const Xa=(st=W.count)!==null&&st!==void 0?st:1;let yc=rt.ANIMATION,mn=Bt*Xa;if(!qa){const go=M==null?void 0:M.width,Hm=W.duration||0,bc=go?Bt/go*Math.abs(hn):Bt;Xa!==0?(Hm<bc?mn=mn/bc*Math.max(Hm,bc/5):go&&(mn=Bt/go*(go-Math.abs(hn))),qa=B(hn)>0?Rr:Fr):mn=Bt/2}let xc=0;qa===Rr?fe(B(1))?xc=-Xa:(yc=rt.NONE,mn=Bt):qa===Fr&&(fe(B(-1))?xc=Xa:(yc=rt.NONE,mn=Bt)),mn=Math.round(mn),A(()=>{be(0),g(rt.NONE)},mn),F.current&&Ve({rect:F.current.getBoundingClientRect(),index:v.globalIndex}),g(yc),L(Mv,{type:"swipe",increment:xc,duration:mn,easing:mo})});b.useEffect(()=>{var W,we;!((W=v.animation)===null||W===void 0)&&W.increment&&(!((we=v.animation)===null||we===void 0)&&we.duration)&&D(()=>w({type:"swipe",increment:0}),v.animation.duration)},[v.animation,w,D]);const po=[_,fe,(M==null?void 0:M.width)||0,i.swipe,()=>g(rt.SWIPE),W=>be(W),(W,we)=>vt({offset:W,duration:we,count:1}),W=>vt({offset:W,count:0})],Ya=[()=>{d&&g(rt.PULL)},W=>ie(W),W=>Be(W),W=>Be(W,!0)];CL(o,...po,u,d,...Ya,ee),kL(p,...po);const ho=pe(()=>{o.focus&&$().querySelector(`.${ae(vm)} .${ae(Lv())}`)&&z()});b.useEffect(ho,[ho]);const Um=pe(()=>{var W;(W=a.view)===null||W===void 0||W.call(a,{index:v.currentIndex})});b.useEffect(Um,[v.globalIndex,Um]),b.useEffect(()=>_m(E(Rr,W=>vt({direction:Rr,...W})),E(Fr,W=>vt({direction:Fr,...W})),E(Mv,W=>w(W))),[E,vt,w]);const c_=b.useMemo(()=>({prev:Y,next:X,close:ee,focus:z,slideRect:M?QD(M,r.padding):{width:0,height:0},containerRect:M||{width:0,height:0},subscribeSensors:_,containerRef:I,setCarouselRef:P,toolbarWidth:f,setToolbarWidth:m}),[Y,X,ee,z,_,M,I,P,f,m,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:Y,next:X,close:ee,focus:z,getLightboxProps:U,getLightboxState:G}),[Y,X,ee,z,U,G]),b.createElement("div",{ref:j,className:Tn(ae(Lv()),ae(ym)),style:{...p===rt.SWIPE?{[xt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...p===rt.PULL?{[xt("pull_offset")]:`${Math.round(S.current)}px`,[xt("pull_opacity")]:`${C.current}`}:null,...o.touchAction!=="none"?{[xt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...T},M&&b.createElement(v2.Provider,{value:c_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const PL=Or(GS,TL);function jr(e){return Ga(WS,e)}function Av(e){return Ga(xm,e)}function OL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Mr(),{slideRect:o,focus:a}=er(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:d},styles:{slide:c},labels:y}=Xt(),{getOwnerDocument:f}=cc(),m=t!==0;b.useEffect(()=>{var w;m&&(!((w=n.current)===null||w===void 0)&&w.contains(f().activeElement))&&a()},[m,a,f]);const v=()=>{var w,p,g,x;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&fo(e)&&(S=b.createElement(ql,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:m?void 0:()=>d==null?void 0:d({index:r})})),S?b.createElement(b.Fragment,null,(p=l.slideHeader)===null||p===void 0?void 0:p.call(l,{slide:e}),((g=l.slideContainer)!==null&&g!==void 0?g:({children:C})=>C)({slide:e,children:S}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:Tn(ae(Av()),!m&&ae(Av("current")),ae(ym)),...rL(m),style:c,role:"group","aria-roledescription":eo(y,"Slide"),"aria-label":KD(y,i,r+t)},v())}function ML(){const e=Xt().styles.slide;return b.createElement("div",{className:ae(xm),style:e})}function jL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Mr(),{setCarouselRef:o}=er(),{autoPlaying:a,focusWithin:l}=l2(),s=Yl(e.spacing),u=Yl(e.padding),d=tL(e,n,1),c=[];if(i2(n))for(let y=r-d;y<=r+d;y+=1){const f=o2(n,y),m=i-r+y,v=e.finite&&(y<0||y>n.length-1);c.push(v?{key:m}:{key:[`${m}`,JD(f)].filter(Boolean).join("|"),offset:y-r,slide:f})}return b.createElement("div",{ref:o,className:Tn(ae(jr()),c.length>0&&ae(jr("with_slides"))),style:{[`${xt(jr("slides_count"))}`]:c.length,[`${xt(jr("spacing_px"))}`]:s.pixel||0,[`${xt(jr("spacing_percent"))}`]:s.percent||0,[`${xt(jr("padding_px"))}`]:u.pixel||0,[`${xt(jr("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":eo(t,"Carousel"),"aria-label":eo(t,"Photo gallery")},c.map(({key:y,slide:f,offset:m})=>f?b.createElement(OL,{key:y,slide:f,offset:m}):b.createElement(ML,{key:y})))}const $L=Or(WS,jL);function y2(){const{carousel:e}=Xt(),{slides:t,currentIndex:n}=Mr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function IL(e){var t;const n=Mm(),{publish:r}=dc(),{animation:i}=Xt(),{prevDisabled:o,nextDisabled:a}=y2(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=Dv(()=>r(Rr),l),u=Dv(()=>r(Fr),l),d=pe(c=>{switch(c.key){case GD:r(Ji);break;case YD:(n?a:o)||(n?u:s)();break;case qD:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(bm,d),[e,d])}function Rv({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(Pm,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...wL(er().focus,o)})}function DL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=er(),{prevDisabled:s,nextDisabled:u}=y2();return IL(l),b.createElement(b.Fragment,null,e?e():b.createElement(Rv,{label:"Previous",action:Rr,icon:gL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(Rv,{label:"Next",action:Fr,icon:vL,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const LL=Or(RD,DL),Fv=ae(UD),AL=ae(qS);function RL(e){return"style"in e}function Nv(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(uc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function FL({noScroll:{disabled:e},children:t}){const n=Mm(),{getOwnerDocument:r,getOwnerWindow:i}=cc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Nv(l,u,n));const d=l.getElementsByTagName("*");for(let c=0;c<d.length;c+=1){const y=d[c];RL(y)&&a.getComputedStyle(y).getPropertyValue("position")==="fixed"&&!y.classList.contains(AL)&&o.push(Nv(y,u,n))}}return l.classList.add(Fv),()=>{l.classList.remove(Fv),o.forEach(d=>d())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const NL=Or(FD,FL);function zv(e){return Ga(vm,e)}function Bv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function zL({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[d,c]=b.useState(!1),y=b.useRef([]),f=b.useRef(null),{setTimeout:m}=fc(),{subscribe:v}=dc(),p=Om()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),c(!1)}),[]);const g=pe(()=>{y.current.forEach(T=>T()),y.current=[]}),x=pe(()=>{var T;c(!1),g(),(T=i.exiting)===null||T===void 0||T.call(i),m(()=>{var _;(_=i.exited)===null||_===void 0||_.call(i),a()},p)});b.useEffect(()=>v(Ji,x),[v,x]);const S=pe(T=>{var _,E,L;iL(T),c(!0),(_=i.entering)===null||_===void 0||_.call(i);const D=(L=(E=T.parentNode)===null||E===void 0?void 0:E.children)!==null&&L!==void 0?L:[];for(let A=0;A<D.length;A+=1){const O=D[A];["TEMPLATE","SCRIPT","STYLE"].indexOf(O.tagName)===-1&&O!==T&&(y.current.push(Bv(O,"inert","")),y.current.push(Bv(O,"aria-hidden","true")))}y.current.push(()=>{var A,O;(O=(A=f.current)===null||A===void 0?void 0:A.focus)===null||O===void 0||O.call(A)}),m(()=>{var A;(A=i.entered)===null||A===void 0||A.call(i)},p)}),C=b.useCallback(T=>{T?S(T):g()},[S,g]);return s?xu.createPortal(b.createElement(_L,{ref:C,className:Tn(r,ae(zv()),ae(qS),d&&ae(zv("open"))),"aria-modal":!0,role:"dialog","aria-label":eo(l,"Lightbox"),style:{...t.fade!==_p.animation.fade?{[xt("fade_animation_duration")]:`${p}ms`}:null,...t.easing.fade!==_p.animation.easing.fade?{[xt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:T=>{f.current||(f.current=T.relatedTarget)}},e),o.root||document.body):null}const BL=Or(vm,zL);function VL({children:e}){return b.createElement(b.Fragment,null,e)}const UL=Or(ND,VL);function HL(e){return Ga(YS,e)}function WL({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=er(),{setContainerRef:a,containerRect:l}=m2();Pn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(Pm,{key:Ji,label:"Close",icon:mL,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:ae(HL())},e==null?void 0:e.map(u=>u===Ji?s():u))}const GL=Or(YS,WL);function x2(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>x2(r,t)))}function YL(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function qL({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...d}){const{animation:c,carousel:y,render:f,toolbar:m,controller:v,noScroll:w,on:p,slides:g,index:x,plugins:S,...C}=_p,{config:T,augmentation:_}=oL([Ue(BL,[Ue(NL,[Ue(PL,[Ue($L),Ue(GL),Ue(LL)])])])],l||S),E=_({animation:YL(c,t),carousel:{...y,...e},render:{...f,...n},toolbar:{...m,...r},controller:{...v,...i},noScroll:{...w,...o},on:{...p,...a},...C,...d});return E.open?b.createElement(uL,{...E},b.createElement(fL,{slides:s||g,index:uc(u||x)},b.createElement(pL,null,b.createElement(lL,null,b.createElement(aL,null,x2(Ue(UL,T),E)))))):null}const XL={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function KL(e){return Math.min(Math.max(e,Number.EPSILON),1)}function b2(e){const{minZoom:t,...n}={...XL,...e};return{minZoom:KL(t),...n}}function QL(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Xt().animation,l=Om(),s=pe(()=>{var u,d,c;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(c=(d=r.current).animate)===null||c===void 0?void 0:c.call(d,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(y){console.error(y)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Pn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function ZL(e,t){const{on:n}=Xt(),r=pe(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function pc(){const{zoom:e}=Xt();return b2(e)}function JL(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Mr(),{imageFit:l}=Xt().carousel,{maxZoomPixelRatio:s}=pc();if(e&&a){const d={...a,...t};if(fo(d)){const c=km(d,l),y=Math.max(...(((n=d.srcSet)===null||n===void 0?void 0:n.map(m=>m.width))||[]).concat(d.width?[d.width]:[])),f=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(m=>m.height))||[]).concat(d.height?[d.height]:[]));y>0&&f>0&&e.width>0&&e.height>0&&(o=c?{width:Math.round(Math.min(y,e.width/e.height*f)),height:Math.round(Math.min(f,e.height/e.width*y))}:{width:y,height:f},o={width:o.width*s,height:o.height*s},i=c?{width:Math.min(e.width,o.width,y),height:Math.min(e.height,o.height,f)}:{width:Math.round(Math.min(e.width,e.height/f*y,y)),height:Math.round(Math.min(e.height,e.width/y*f,f))})}}const u=i.width?Math.max(Em(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Vv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Uv(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function eA(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),d=b.useRef(0),c=b.useRef(void 0),{globalIndex:y}=Mr(),{getOwnerWindow:f}=cc(),{containerRef:m,subscribeSensors:v}=er(),{keyboardMoveDistance:w,zoomInMultiplier:p,wheelZoomDistanceFactor:g,scrollToZoom:x,doubleTapDelay:S,doubleClickDelay:C,doubleClickMaxStops:T,pinchZoomDistanceFactor:_,pinchZoomV4:E}=pc(),L=b.useCallback(P=>{if(m.current){const{pageX:$,pageY:N}=P,{scrollX:B,scrollY:z}=f(),{left:U,top:G,width:Y,height:X}=m.current.getBoundingClientRect();return[$-U-B-Y/2,N-G-z-X/2]}return[]},[m,f]),D=pe(P=>{const{key:$,metaKey:N,ctrlKey:B}=P,z=N||B,U=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const G=(Y,X)=>{U(),l(Y,X)};$==="ArrowDown"?G(0,w):$==="ArrowUp"?G(0,-w):$==="ArrowLeft"?G(-w,0):$==="ArrowRight"&&G(w,0)}$==="+"||z&&$==="="?(U(),i()):$==="-"||z&&$==="_"?(U(),o()):z&&$==="0"&&(U(),a(1))}),A=pe(P=>{if((P.ctrlKey||x)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(Uv(e,-P.deltaY,g),!0,...L(P));return}e>1&&(P.stopPropagation(),x||l(P.deltaX,P.deltaY))}),O=b.useCallback(P=>{const $=u.current;$.splice(0,$.length,...$.filter(N=>N.pointerId!==P.pointerId))},[]),I=b.useCallback(P=>{O(P),P.persist(),u.current.push(P)},[O]),R=pe(P=>{var $;const N=u.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!(($=s==null?void 0:s.current)===null||$===void 0)&&$.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(N.length===0&&B-d.current<(P.pointerType==="touch"?S:C)){d.current=0;const z=e>=1?e!==n?e*Math.max(n**(1/T),p):1:e!==t?e/Math.max(t**(-1/T),p):1;a(z,!1,...L(P))}else d.current=B;if(I(P),N.length===2){const z=Vv(N[0],N[1]);c.current={previousDistance:z,initialDistance:Math.max(z,1),initialZoom:e}}}),M=pe(P=>{const $=u.current,N=$.find(B=>B.pointerId===P.pointerId);if($.length===2&&c.current){P.stopPropagation(),I(P);const B=Vv($[0],$[1]),z=E?c.current.initialZoom/c.current.initialDistance*B:Uv(e,B-c.current.previousDistance,_);a(z,!0,...$.map(U=>L(U)).reduce((U,G)=>G.map((Y,X)=>U[X]+Y/2))),c.current.previousDistance=B;return}e>1&&(P.stopPropagation(),N&&($.length===1&&l((N.clientX-P.clientX)/e,(N.clientY-P.clientY)/e),I(P)))}),j=b.useCallback(P=>{const $=u.current;$.length===2&&$.find(N=>N.pointerId===P.pointerId)&&(c.current=void 0),O(P)},[O]),F=b.useCallback(()=>{const P=u.current;P.splice(0,P.length),d.current=0,c.current=void 0},[]);g2(v,R,M,j,r),b.useEffect(F,[y,F]),b.useEffect(()=>r?()=>{}:_m(F,v(bm,D),v(wm,A)),[r,v,F,D,A])}function tA(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=QL(r,o,l,n),{currentSlide:d,globalIndex:c}=Mr(),{containerRect:y,slideRect:f}=er(),{minZoom:m,zoomInMultiplier:v}=pc(),w=d&&fo(d)?d.src:void 0,p=!w||!(n!=null&&n.current);Pn(()=>{i(1),a(0),s(0)},[c,w]);const g=b.useCallback((_,E,L)=>{const D=L||r,A=o-(_||0),O=l-(E||0),I=(e.width*D-f.width)/2/D,R=(e.height*D-f.height)/2/D;a(Math.min(Math.abs(A),Math.max(I,0))*Math.sign(A)),s(Math.min(Math.abs(O),Math.max(R,0))*Math.sign(O))},[r,o,l,f,e.width,e.height]),x=b.useCallback((_,E,L,D)=>{const A=Em(_+.01<t?_-.01>m?_:m:t,5);E||u(),g(L?L*(1/r-1/A):0,D?D*(1/r-1/A):0,A),i(A)},[r,m,t,g,u]),S=pe(()=>{r>1&&(r>t&&x(t,!0),g())});Pn(S,[y.width,y.height,S]);const C=b.useCallback(()=>{const _=r*v;x(r<1&&_>1?1:_)},[r,v,x]),T=b.useCallback(()=>{const _=r/v;x(r>1&&_<1?1:_)},[r,v,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:p,changeOffsets:g,changeZoom:x,zoomIn:C,zoomOut:T}}const w2=b.createContext(null),jm=Jn("useZoom","ZoomControllerContext",w2);function nA({children:e}){const[t,n]=b.useState(),{slideRect:r}=er(),{ref:i,minZoom:o}=pc(),{imageRect:a,maxZoom:l}=JL(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:d,disabled:c,changeZoom:y,changeOffsets:f,zoomIn:m,zoomOut:v}=tA(a,l,t==null?void 0:t.zoomWrapperRef);ZL(s,c),eA(s,o,l,c,m,v,y,f,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:d,disabled:c,zoomIn:m,zoomOut:v,changeZoom:y}),[s,o,l,u,d,c,m,v,y]);b.useImperativeHandle(i,()=>w,[w]);const p=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(w2.Provider,{value:p},e)}const rA=ai("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),iA=ai("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Hv=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:d,disabled:c}=jm(),{render:y}=Xt(),f=c||(t?a>=s:a<=l);return b.useEffect(()=>{f&&i.current&&o.current&&n(),f||(i.current=!0)},[f,n]),b.createElement(Pm,{ref:r,disabled:f,label:t?"Zoom in":"Zoom out",icon:t?rA:iA,renderIcon:t?y.iconZoomIn:y.iconZoomOut,onClick:t?u:d,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function oA(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=er(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(Hv,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(Hv,{ref:t,onLoseFocus:i}))}function aA(){const{render:e}=Xt(),t=jm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(oA,null)}function sA(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function lA({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(n2)}}function uA(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(lA,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:d}=e,c=a.srcSet.sort((C,T)=>C.width-T.width),y=(t=a.width)!==null&&t!==void 0?t:c[c.length-1].width,f=(n=a.height)!==null&&n!==void 0?n:c[c.length-1].height,m=km(a,s),v=Math.max(...c.map(C=>C.width)),w=Math.min((m?Math.max:Math.min)(l.width,y*(l.height/f)),v),p=ZD(),g=pe(()=>{var C;const T=(C=c.find(_=>_.width>=w*p))!==null&&C!==void 0?C:c[c.length-1];(!r||c.findIndex(_=>_.src===r)<c.findIndex(_=>_===T))&&o({type:"fetch",source:T.src})});Pn(g,[l.width,l.height,p,g]);const x=pe(C=>o({type:"done",source:C})),S={WebkitTransform:d?"initial":"translateZ(0)"};return m||Object.assign(S,l.width/l.height<y/f?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(ql,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(ql,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function cA({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:d,offsetY:c,setZoomWrapper:y}=jm(),f=s>1,{carousel:m,on:v}=Xt(),{currentIndex:w}=Mr();Pn(()=>n===0?(y({zoomWrapperRef:l,imageDimensions:o}),()=>y(void 0)):()=>{},[n,o,y]);let p=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!p&&fo(t)){const g={slide:t,offset:n,rect:r,render:e,imageFit:m.imageFit,imageProps:m.imageProps,onClick:n===0?()=>{var x;return(x=v.click)===null||x===void 0?void 0:x.call(v,{index:w})}:void 0};p=sA(t)?b.createElement(uA,{...g,slide:t,interactive:f,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(ql,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...g})}return p?b.createElement("div",{ref:l,className:Tn(ae(VD),ae(ym),ae(XS),f&&ae(HD)),style:n===0?{transform:`scale(${s}) translateX(${d}px) translateY(${c}px)`}:void 0},p):null}const dA=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=b2(n);return{zoom:l,toolbar:eL(r,Ov,b.createElement(aA,null)),render:{...i,slide:s=>{var u;return fo(s.slide)?b.createElement(cA,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Or(Ov,nA))};var S2={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",u="day",d="week",c="month",y="quarter",f="year",m="date",v="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(R){var M=["th","st","nd","rd"],j=R%100;return"["+R+(M[(j-20)%10]||M[j]||M[0])+"]"}},x=function(R,M,j){var F=String(R);return!F||F.length>=M?R:""+Array(M+1-F.length).join(j)+R},S={s:x,z:function(R){var M=-R.utcOffset(),j=Math.abs(M),F=Math.floor(j/60),P=j%60;return(M<=0?"+":"-")+x(F,2,"0")+":"+x(P,2,"0")},m:function R(M,j){if(M.date()<j.date())return-R(j,M);var F=12*(j.year()-M.year())+(j.month()-M.month()),P=M.clone().add(F,c),$=j-P<0,N=M.clone().add(F+($?-1:1),c);return+(-(F+(j-P)/($?P-N:N-P))||0)},a:function(R){return R<0?Math.ceil(R)||0:Math.floor(R)},p:function(R){return{M:c,y:f,w:d,d:u,D:m,h:s,m:l,s:a,ms:o,Q:y}[R]||String(R||"").toLowerCase().replace(/s$/,"")},u:function(R){return R===void 0}},C="en",T={};T[C]=g;var _="$isDayjsObject",E=function(R){return R instanceof O||!(!R||!R[_])},L=function R(M,j,F){var P;if(!M)return C;if(typeof M=="string"){var $=M.toLowerCase();T[$]&&(P=$),j&&(T[$]=j,P=$);var N=M.split("-");if(!P&&N.length>1)return R(N[0])}else{var B=M.name;T[B]=M,P=B}return!F&&P&&(C=P),P||!F&&C},D=function(R,M){if(E(R))return R.clone();var j=typeof M=="object"?M:{};return j.date=R,j.args=arguments,new O(j)},A=S;A.l=L,A.i=E,A.w=function(R,M){return D(R,{locale:M.$L,utc:M.$u,x:M.$x,$offset:M.$offset})};var O=function(){function R(j){this.$L=L(j.locale,null,!0),this.parse(j),this.$x=this.$x||j.x||{},this[_]=!0}var M=R.prototype;return M.parse=function(j){this.$d=function(F){var P=F.date,$=F.utc;if(P===null)return new Date(NaN);if(A.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var N=P.match(w);if(N){var B=N[2]-1||0,z=(N[7]||"0").substring(0,3);return $?new Date(Date.UTC(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,z)):new Date(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,z)}}return new Date(P)}(j),this.init()},M.init=function(){var j=this.$d;this.$y=j.getFullYear(),this.$M=j.getMonth(),this.$D=j.getDate(),this.$W=j.getDay(),this.$H=j.getHours(),this.$m=j.getMinutes(),this.$s=j.getSeconds(),this.$ms=j.getMilliseconds()},M.$utils=function(){return A},M.isValid=function(){return this.$d.toString()!==v},M.isSame=function(j,F){var P=D(j);return this.startOf(F)<=P&&P<=this.endOf(F)},M.isAfter=function(j,F){return D(j)<this.startOf(F)},M.isBefore=function(j,F){return this.endOf(F)<D(j)},M.$g=function(j,F,P){return A.u(j)?this[F]:this.set(P,j)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(j,F){var P=this,$=!!A.u(F)||F,N=A.p(j),B=function(be,ie){var je=A.w(P.$u?Date.UTC(P.$y,ie,be):new Date(P.$y,ie,be),P);return $?je:je.endOf(u)},z=function(be,ie){return A.w(P.toDate()[be].apply(P.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},U=this.$W,G=this.$M,Y=this.$D,X="set"+(this.$u?"UTC":"");switch(N){case f:return $?B(1,0):B(31,11);case c:return $?B(1,G):B(0,G+1);case d:var ee=this.$locale().weekStart||0,fe=(U<ee?U+7:U)-ee;return B($?Y-fe:Y+(6-fe),G);case u:case m:return z(X+"Hours",0);case s:return z(X+"Minutes",1);case l:return z(X+"Seconds",2);case a:return z(X+"Milliseconds",3);default:return this.clone()}},M.endOf=function(j){return this.startOf(j,!1)},M.$set=function(j,F){var P,$=A.p(j),N="set"+(this.$u?"UTC":""),B=(P={},P[u]=N+"Date",P[m]=N+"Date",P[c]=N+"Month",P[f]=N+"FullYear",P[s]=N+"Hours",P[l]=N+"Minutes",P[a]=N+"Seconds",P[o]=N+"Milliseconds",P)[$],z=$===u?this.$D+(F-this.$W):F;if($===c||$===f){var U=this.clone().set(m,1);U.$d[B](z),U.init(),this.$d=U.set(m,Math.min(this.$D,U.daysInMonth())).$d}else B&&this.$d[B](z);return this.init(),this},M.set=function(j,F){return this.clone().$set(j,F)},M.get=function(j){return this[A.p(j)]()},M.add=function(j,F){var P,$=this;j=Number(j);var N=A.p(F),B=function(G){var Y=D($);return A.w(Y.date(Y.date()+Math.round(G*j)),$)};if(N===c)return this.set(c,this.$M+j);if(N===f)return this.set(f,this.$y+j);if(N===u)return B(1);if(N===d)return B(7);var z=(P={},P[l]=r,P[s]=i,P[a]=n,P)[N]||1,U=this.$d.getTime()+j*z;return A.w(U,this)},M.subtract=function(j,F){return this.add(-1*j,F)},M.format=function(j){var F=this,P=this.$locale();if(!this.isValid())return P.invalidDate||v;var $=j||"YYYY-MM-DDTHH:mm:ssZ",N=A.z(this),B=this.$H,z=this.$m,U=this.$M,G=P.weekdays,Y=P.months,X=P.meridiem,ee=function(ie,je,Be,Ve){return ie&&(ie[je]||ie(F,$))||Be[je].slice(0,Ve)},fe=function(ie){return A.s(B%12||12,ie,"0")},be=X||function(ie,je,Be){var Ve=ie<12?"AM":"PM";return Be?Ve.toLowerCase():Ve};return $.replace(p,function(ie,je){return je||function(Be){switch(Be){case"YY":return String(F.$y).slice(-2);case"YYYY":return A.s(F.$y,4,"0");case"M":return U+1;case"MM":return A.s(U+1,2,"0");case"MMM":return ee(P.monthsShort,U,Y,3);case"MMMM":return ee(Y,U);case"D":return F.$D;case"DD":return A.s(F.$D,2,"0");case"d":return String(F.$W);case"dd":return ee(P.weekdaysMin,F.$W,G,2);case"ddd":return ee(P.weekdaysShort,F.$W,G,3);case"dddd":return G[F.$W];case"H":return String(B);case"HH":return A.s(B,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return be(B,z,!0);case"A":return be(B,z,!1);case"m":return String(z);case"mm":return A.s(z,2,"0");case"s":return String(F.$s);case"ss":return A.s(F.$s,2,"0");case"SSS":return A.s(F.$ms,3,"0");case"Z":return N}return null}(ie)||N.replace(":","")})},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(j,F,P){var $,N=this,B=A.p(F),z=D(j),U=(z.utcOffset()-this.utcOffset())*r,G=this-z,Y=function(){return A.m(N,z)};switch(B){case f:$=Y()/12;break;case c:$=Y();break;case y:$=Y()/3;break;case d:$=(G-U)/6048e5;break;case u:$=(G-U)/864e5;break;case s:$=G/i;break;case l:$=G/r;break;case a:$=G/n;break;default:$=G}return P?$:A.a($)},M.daysInMonth=function(){return this.endOf(c).$D},M.$locale=function(){return T[this.$L]},M.locale=function(j,F){if(!j)return this.$L;var P=this.clone(),$=L(j,F,!0);return $&&(P.$L=$),P},M.clone=function(){return A.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},R}(),I=O.prototype;return D.prototype=I,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",u],["$M",c],["$y",f],["$D",m]].forEach(function(R){I[R[1]]=function(M){return this.$g(M,R[0],R[1])}}),D.extend=function(R,M){return R.$i||(R(M,O,D),R.$i=!0),D},D.locale=L,D.isDayjs=E,D.unix=function(R){return D(1e3*R)},D.en=T[C],D.Ls=T,D.p={},D})})(S2);var fA=S2.exports;const Wv=Dp(fA),pA=k.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;k.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const hA=k.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,mA=k.input`
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
`,gA=k.textarea`
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
`,vA=k.button`
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
`,yA=k.div`
  margin-top: 30px;
`,xA=k.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,bA=k.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,wA=k.span`
  font-weight: bold;
  color: #333;
`,SA=k.span`
  font-size: 12px;
  color: #999;
`,_A=k.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,CA=k.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,EA=k.div`
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
`,Gv=({productId:e,questions:t})=>{const[n,r]=b.useState(""),[i,o]=b.useState(""),a=async l=>{l.preventDefault();const u=await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})});console.log(e),u.ok&&(J.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return h.jsxs(pA,{children:[h.jsx(oi,{autoClose:1500}),h.jsxs(hA,{onSubmit:a,children:[h.jsx(mA,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),h.jsx(gA,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),h.jsx(vA,{children:"Надіслати запитання"})]}),h.jsx(yA,{children:t&&t.length>0?t.map(l=>l.answer?h.jsxs(xA,{children:[h.jsxs(bA,{children:[h.jsx(wA,{children:l.userName||"Гість"}),h.jsx(SA,{children:new Date(l.createdAt).toLocaleDateString()})]}),h.jsx(_A,{children:l.question}),h.jsxs(CA,{children:[h.jsx(EA,{children:"Адміністратор"}),h.jsx("p",{children:l.answer})]})]},l.id):null):h.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},kA=()=>{var I,R;const{id:e}=Q1(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,d]=b.useState(!1),[c,y]=b.useState(0);console.log("products",t);const[f,m]=b.useState(!0),v=t.find(M=>M.id===Number(e)),w=v?Wv().diff(Wv(v.createdAt),"day")<7:!1,g=(M=>{const[j,F]=b.useState(!1);return b.useEffect(()=>{const P=window.matchMedia(M),$=()=>F(P.matches);return $(),P.addEventListener("change",$),()=>P.removeEventListener("change",$)},[M]),j})("(min-width: 768px)"),x=Et(M=>M.cart.items),S=v?x.find(M=>M.id===v.id):null,C=(S==null?void 0:S.quantity)||0;b.useEffect(()=>{(async()=>{try{m(!0);const F=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[id][$eq]=${e}&populate=*`)).json();n(F.data)}catch(j){console.error("Error fetching products:",j)}finally{m(!1)}})()},[e]),console.log(v),b.useEffect(()=>{var M,j;v&&v.images&&s((j=(M=v.images)==null?void 0:M[0])==null?void 0:j.url)},[v]);const T=((v==null?void 0:v.images)??[]).map(M=>({src:M.url})),_=()=>{const M=v.images.findIndex(j=>j.url===l);y(M>=0?M:0),d(!0)},E=Qn(),D=Et(M=>M.favorites.items).some(M=>M.id===(v==null?void 0:v.id)),A=()=>{if(C>=v.stock){J.warning("Товар вже в кошику (досягнуто максимум)");return}if(C+r>v.stock){J.warning(`Доступно лише ${v.stock} шт.`);return}E(Na({...v,quantity:r})),J.success(`${v.name} додано в кошик!`)},O=(M,j)=>{j.stopPropagation(),E(Wa(M)),D?J.warning(`${M.name} видалено з обраного`):J.info(`${M.name} додано в обране`)};return f?h.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:h.jsx(qu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):v?h.jsxs(Sv,{children:[" ",h.jsx(oi,{autoClose:1500}),h.jsxs(mD,{children:[h.jsx(Oe,{to:"/",children:"Головна"})," / ",h.jsx(Oe,{to:"/catalog",children:"Каталог"})," /"," ",v.name]}),h.jsxs(gD,{children:[h.jsxs(vD,{children:[h.jsx(yD,{src:l,alt:v.name,onClick:_}),h.jsx(xD,{children:(v.images??[]).map(M=>{const j=M.url;return h.jsx(bD,{src:j,onClick:()=>s(j),style:{cursor:"pointer",opacity:l===j?1:.4}},M.id)})})]}),h.jsx(qL,{open:u,close:()=>d(!1),index:c,slides:T,controller:{closeOnBackdropClick:!0},on:{view:({index:M})=>{var j,F;y(M),(F=(j=v==null?void 0:v.images)==null?void 0:j[M])!=null&&F.url&&s(v.images[M].url)}},plugins:[dA],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),h.jsxs(wD,{children:[h.jsx(SD,{children:v.name}),h.jsx(_D,{children:w&&h.jsx(CD,{children:"● Новий товар"})}),h.jsxs(ED,{children:[h.jsx(kD,{children:h.jsxs(TD,{children:[v.price.toLocaleString()," грн"]})}),h.jsxs(PD,{children:[h.jsxs(OD,{children:[h.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),h.jsx("span",{children:r}),h.jsxs(AD,{$active:r>=v.stock,children:[h.jsx("button",{onClick:()=>i(Math.min(v.stock,r+1)),disabled:r>=v.stock,children:"+"}),h.jsxs(HS,{children:["Максимум: ",v.stock]})]})]}),h.jsxs(MD,{onClick:A,children:[" ",h.jsx(Ra,{size:25}),h.jsx("span",{children:"В КОШИК"})]}),h.jsxs(DD,{$active:D,onClick:M=>O(v,M),children:[h.jsxs(LD,{$active:D,children:[" ",h.jsx("use",{href:`${un}#icon-heart`})]}),h.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),h.jsxs($D,{children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Ваше місто:"})," Київ"]}),h.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),!g&&h.jsxs(Ev,{children:[h.jsxs(kv,{children:[h.jsx(Mo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),h.jsx(Mo,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),h.jsx(Mo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),h.jsxs(Tv,{children:[o==="description"&&h.jsx(Pv,{children:v.description}),o==="attributes"&&h.jsx(_v,{children:(I=v.attributes)!=null&&I.length?v.attributes.map(M=>h.jsxs(Cv,{children:[h.jsx("span",{children:M.label}),h.jsx("b",{children:M.value})]},M.id)):h.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&h.jsx(Gv,{productId:v.documentId,questions:v.questions})]})]}),g&&h.jsxs(ID,{children:[h.jsxs(Ev,{children:[h.jsxs(kv,{children:[h.jsx(Mo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),h.jsx(Mo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),h.jsxs(Tv,{children:[o==="description"&&h.jsx(Pv,{children:v.description}),o==="FAQ"&&h.jsx(Gv,{productId:v.documentId,questions:v.questions})]})]}),h.jsxs(_v,{children:[h.jsx(jD,{children:" Характеристики"}),(R=v.attributes)!=null&&R.length?v.attributes.map(M=>h.jsxs(Cv,{children:[h.jsx("span",{children:M.label}),h.jsx("b",{children:M.value})]},M.id)):h.jsx("p",{children:"Характеристики відсутні"})]})]})]}):h.jsx(Sv,{children:"Товар не знайдено"})},TA=k.div`
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

  
`,PA=k.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,OA=k.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,MA=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,jA=k.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,$A=k.div`
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
`,IA=k.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,DA=k.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,LA=k.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,AA=k.div`

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
`;const RA=k.div`
  text-align: center;
  width: 100px;
 
`,FA=k.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,NA=k.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,zA=k.div`

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
`,BA=k.div`
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
`,VA=k(Oe)`
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
`,UA=k.button`
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
`;const HA=k.div`
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
`,WA=k.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,GA=k.div`
  background-color: #fdfaf7;
`,YA=k.div`
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
`;const qA=k.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,XA=k.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,KA=k.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,QA=k.button`
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
`,ZA=()=>h.jsx(GA,{children:h.jsxs(HA,{children:[h.jsx(WA,{children:"Головна / Кошик"}),h.jsxs(YA,{children:[h.jsx(qA,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),h.jsx(XA,{children:"Ваш кошик порожній"}),h.jsx(KA,{children:"Ви ще не додали жодного товару в кошик"}),h.jsx(QA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),JA=k.div`
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
`,eR=({item:e})=>{const t=Qn();return h.jsxs(JA,{children:[h.jsx("button",{onClick:()=>t(w4(e.id)),children:"-"}),h.jsx("span",{children:e.quantity}),h.jsx("button",{onClick:()=>t(b4({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},tR=()=>{const e=Qn(),t=Xn(),[n,r]=b.useState([]),i=Et(f=>f.cart.items),a=Et(f=>f.cart.items).reduce((f,m)=>f+m.quantity,0),l=i.reduce((f,m)=>f+m.price*(m.quantity||1),0),s=Et(f=>f.favorites.items),u=i.length===0,d=(f,m)=>{m.stopPropagation(),console.log(f);const v=s.some(w=>w.id===f.id);e(Wa(f)),v?J.warning(`${f.name} видалено з обраного`):J.info(`${f.name} додано в обране`)},c=f=>{r(m=>[...m,f.id]),setTimeout(()=>{e(y4(f)),r(m=>m.filter(v=>v!==f.id))},300)},y=()=>{e(Qh())};return h.jsx(h.Fragment,{children:u?h.jsx(ZA,{}):h.jsxs(TA,{children:[h.jsx(oi,{autoClose:1500}),h.jsxs(PA,{children:[" ",h.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",h.jsx(Oe,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),h.jsx(OA,{children:"Кошик"}),h.jsxs(MA,{children:[h.jsx(jA,{children:i.map((f,m)=>{var w,p;console.log(f);const v=s.some(g=>g.id===f.id);return h.jsxs($A,{className:n.includes(f.id)?"removing":"",children:[h.jsx(IA,{src:((p=(w=f.images)==null?void 0:w[0])==null?void 0:p.url)||"/nofoto.png",alt:f.name,onClick:()=>t(`/product/${f.id}`),onError:g=>{g.currentTarget.onerror=null,g.currentTarget.src=Ca}}),h.jsx(DA,{children:h.jsx("h3",{children:f.name})}),h.jsxs(LA,{children:[h.jsx(eR,{item:{...f,quantity:f.quantity||1}}),h.jsx(RA,{children:h.jsxs("div",{className:"current-price",children:[(f.price*(f.quantity||1)).toLocaleString()," грн"]})})]}),h.jsxs(AA,{children:[h.jsx(NA,{onClick:g=>d(f,g),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:h.jsx(Wh,{size:22,fill:v?"#ff4d4f":"none",color:v?"#ff4d4f":"#999"})}),h.jsx(FA,{onClick:()=>c(f),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:h.jsx(Db,{size:22})})]})]},`${f.id}-${m}`)})}),h.jsxs(zA,{children:[h.jsxs(BA,{children:[h.jsx("span",{children:"Всього в обраному:"}),h.jsxs("strong",{children:[a," шт."]}),h.jsx("span",{children:"На суму:"}),h.jsxs("strong",{children:[l," грн"]})]}),h.jsx(VA,{to:"/checkout",children:"Оформити замовлення"}),h.jsx(UA,{onClick:y,children:"Oчистити кошик"})]})]})]})})},nR=k.div`
  color: var(-black-color);
  font-family: var(--main-font);
  width: 100%;
  max-width: 750px;
  padding: 20px;
  margin: 0 auto;
 
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding: 30px;
  }
  @media screen and (min-width: 1200px) {
   max-width: 1448px;
  
  }
`,rR=k.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,iR=k.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,oR=k.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,aR=k.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,sR=k.div`
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
`;const lR=k.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,uR=k.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,cR=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,dR=k.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  width: 100px;
  text-align: center;
`,fR=k.div`
  display: flex;
  gap: 16px;
`,Yv=k.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,pR=k.div`
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
`,hR=k.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,mR=k.button`
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
`,gR=k.button`
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
`,vR=k.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,yR=k.div`
   
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
`;const xR=k.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;k.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const bR=k.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,wR=k.button`
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
`,SR=()=>h.jsxs(h.Fragment,{children:[h.jsx(vR,{children:"Головна / Обране"}),h.jsxs(yR,{children:[h.jsx(xR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),h.jsx(bR,{children:"Ви ще не додали жодного товару в обране"}),h.jsx(wR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),_R=()=>{const e=Qn(),t=Xn(),n=Et(c=>c.favorites.items),[r,i]=b.useState([]),o=Et(c=>c.cart.items),a=()=>{e(x4(n)),J.success("Товари додано в кошик!")};console.log(n);const l=n.reduce((c,y)=>c+y.price*(y.quantity||1),0),s=(c,y)=>{y.stopPropagation();const f=n.some(m=>m.id===c.id);i(m=>[...m,c.id]),setTimeout(()=>{e(Wa(c)),i(m=>m.filter(v=>v!==c.id))},300),f?J.warning(`${c.name} видалено з обраного`):J.info(`${c.name} додано в обране`)},u=()=>{e(dD())},d=n.length===0;return h.jsx(h.Fragment,{children:d?h.jsx(SR,{}):h.jsxs(nR,{children:[h.jsx(oi,{autoClose:1500}),h.jsxs(rR,{children:[" ",h.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",h.jsx(Oe,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),h.jsx(iR,{children:"Обране"}),h.jsxs(oR,{children:[h.jsx(aR,{children:n.map(c=>{var w,p;const y=o.find(g=>g.id===c.id),m=(y?y.quantity:0)>=c.stock,v=g=>{if(m){J.error(`Вибачте, доступно лише ${g.stock} шт.`);return}e(Na(g)),J.success(`${g.name} додано в кошик!`)};return h.jsxs(sR,{className:r.includes(c.id)?"removing":"",children:[h.jsx(lR,{src:((p=(w=c.images)==null?void 0:w[0])==null?void 0:p.url)||"/nofoto.png",alt:c.name,onClick:()=>t(`/product/${c.id}`),onError:g=>{g.currentTarget.onerror=null,g.currentTarget.src="/nofoto.png"}}),h.jsx(uR,{children:c.name}),h.jsxs(cR,{children:[h.jsxs(dR,{children:[c.price," грн"]}),h.jsxs(fR,{children:[h.jsx(Yv,{onClick:()=>v(c),children:h.jsx(Ra,{size:30})}),h.jsx(Yv,{onClick:g=>s(c,g),children:h.jsx(Db,{size:30})})]})]})]},c.id)})}),h.jsxs(pR,{children:[h.jsxs(hR,{children:[h.jsx("span",{children:"Всього в обраному:"}),h.jsxs("strong",{children:[n.length," шт."]}),h.jsx("span",{children:"На суму:"}),h.jsxs("strong",{children:[l," грн"]})]}),h.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),h.jsx(mR,{onClick:()=>a(),children:"Додати все до кошика"}),h.jsx(gR,{onClick:u,children:"Очистити обрані"})]})]})]})})},CR=k.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,ER=k.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,kR=k.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,TR=k.h1`
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
`;const PR=({title:e,children:t,breadcrumbPath:n})=>h.jsxs(CR,{children:[h.jsxs(ER,{children:["Головна / ",n]}),h.jsxs(kR,{children:[h.jsx(TR,{children:e}),t]})]}),qv=k.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,Xv=k.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Kv=k.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,Qv=k.ul`
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
`,OR=()=>h.jsxs(PR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[h.jsxs(qv,{children:[h.jsx(Xv,{children:"Способи доставки"}),h.jsx(Kv,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),h.jsxs(Qv,{children:[h.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),h.jsx("li",{children:"Самовивіз з нашого магазину"}),h.jsx("li",{children:"Укрпошта"})]})]}),h.jsxs(qv,{children:[h.jsx(Xv,{children:"Варіанти оплати"}),h.jsx(Kv,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),h.jsxs(Qv,{children:[h.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),h.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),h.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ti(e){"@babel/helpers - typeof";return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ti(e)}function MR(e,t){if(ti(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ti(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _2(e){var t=MR(e,"string");return ti(t)==="symbol"?t:String(t)}function No(e,t,n){return t=_2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zv(Object(n),!0).forEach(function(r){No(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jR(e){if(Array.isArray(e))return e}function $R(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){u=!0,i=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Ep(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C2(e,t){if(e){if(typeof e=="string")return Ep(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ep(e,t)}}function IR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bn(e,t){return jR(e)||$R(e,t)||C2(e,t)||IR()}function DR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function tr(e,t){if(e==null)return{};var n=DR(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var LR=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function AR(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,d=e.onInputChange,c=e.onMenuClose,y=e.onMenuOpen,f=e.value,m=tr(e,LR),v=b.useState(l!==void 0?l:n),w=Bn(v,2),p=w[0],g=w[1],x=b.useState(s!==void 0?s:i),S=Bn(x,2),C=S[0],T=S[1],_=b.useState(f!==void 0?f:a),E=Bn(_,2),L=E[0],D=E[1],A=b.useCallback(function(P,$){typeof u=="function"&&u(P,$),D(P)},[u]),O=b.useCallback(function(P,$){var N;typeof d=="function"&&(N=d(P,$)),g(N!==void 0?N:P)},[d]),I=b.useCallback(function(){typeof y=="function"&&y(),T(!0)},[y]),R=b.useCallback(function(){typeof c=="function"&&c(),T(!1)},[c]),M=l!==void 0?l:p,j=s!==void 0?s:C,F=f!==void 0?f:L;return Q(Q({},m),{},{inputValue:M,menuIsOpen:j,onChange:A,onInputChange:O,onMenuClose:R,onMenuOpen:I,value:F})}function RR(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_2(r.key),r)}}function FR(e,t,n){return t&&Jv(e.prototype,t),n&&Jv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function kp(e,t){return kp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},kp(e,t)}function NR(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&kp(e,t)}function Xl(e){return Xl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Xl(e)}function zR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function BR(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function VR(e,t){if(t&&(ti(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return BR(e)}function UR(e){var t=zR();return function(){var r=Xl(e),i;if(t){var o=Xl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return VR(this,i)}}function HR(e){if(Array.isArray(e))return Ep(e)}function WR(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function GR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $m(e){return HR(e)||WR(e)||C2(e)||GR()}function YR(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const qR=Math.min,XR=Math.max,Kl=Math.round,Ss=Math.floor,Ql=e=>({x:e,y:e});function KR(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function hc(){return typeof window<"u"}function E2(e){return T2(e)?(e.nodeName||"").toLowerCase():"#document"}function cn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function k2(e){var t;return(t=(T2(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function T2(e){return hc()?e instanceof Node||e instanceof cn(e).Node:!1}function Tp(e){return hc()?e instanceof Element||e instanceof cn(e).Element:!1}function Im(e){return hc()?e instanceof HTMLElement||e instanceof cn(e).HTMLElement:!1}function e1(e){return!hc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof cn(e).ShadowRoot}function P2(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Dm(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Md;function QR(){return Md==null&&(Md=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Md}function ZR(e){return/^(html|body|#document)$/.test(E2(e))}function Dm(e){return cn(e).getComputedStyle(e)}function JR(e){if(E2(e)==="html")return e;const t=e.assignedSlot||e.parentNode||e1(e)&&e.host||k2(e);return e1(t)?t.host:t}function O2(e){const t=JR(e);return ZR(t)?e.ownerDocument?e.ownerDocument.body:e.body:Im(t)&&P2(t)?t:O2(t)}function Zl(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=O2(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=cn(i);if(o){const l=Pp(a);return t.concat(a,a.visualViewport||[],P2(i)?i:[],l&&n?Zl(l):[])}else return t.concat(i,Zl(i,[],n))}function Pp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function e6(e){const t=Dm(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Im(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Kl(n)!==o||Kl(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Lm(e){return Tp(e)?e:e.contextElement}function jd(e){const t=Lm(e);if(!Im(t))return Ql(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=e6(t);let a=(o?Kl(n.width):n.width)/r,l=(o?Kl(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const t6=Ql(0);function n6(e){const t=cn(e);return!QR()||!t.visualViewport?t6:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function r6(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==cn(e)?!1:t}function t1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Lm(e);let a=Ql(1);t&&(r?Tp(r)&&(a=jd(r)):a=jd(e));const l=r6(o,n,r)?n6(o):Ql(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,d=i.width/a.x,c=i.height/a.y;if(o){const y=cn(o),f=r&&Tp(r)?cn(r):r;let m=y,v=Pp(m);for(;v&&r&&f!==m;){const w=jd(v),p=v.getBoundingClientRect(),g=Dm(v),x=p.left+(v.clientLeft+parseFloat(g.paddingLeft))*w.x,S=p.top+(v.clientTop+parseFloat(g.paddingTop))*w.y;s*=w.x,u*=w.y,d*=w.x,c*=w.y,s+=x,u+=S,m=cn(v),v=Pp(m)}}return KR({width:d,height:c,x:s,y:u})}function M2(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function i6(e,t){let n=null,r;const i=k2(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:d,top:c,width:y,height:f}=u;if(l||t(),!y||!f)return;const m=Ss(c),v=Ss(i.clientWidth-(d+y)),w=Ss(i.clientHeight-(c+f)),p=Ss(d),x={rootMargin:-m+"px "+-v+"px "+-w+"px "+-p+"px",threshold:XR(0,qR(1,s))||1};let S=!0;function C(T){const _=T[0].intersectionRatio;if(_!==s){if(!S)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},1e3)}_===1&&!M2(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(C,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,x)}n.observe(e)}return a(!0),o}function o6(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Lm(e),d=i||o?[...u?Zl(u):[],...t?Zl(t):[]]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const c=u&&l?i6(u,n):null;let y=-1,f=null;a&&(f=new ResizeObserver(p=>{let[g]=p;g&&g.target===u&&f&&t&&(f.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(t)})),n()}),u&&!s&&f.observe(u),t&&f.observe(t));let m,v=s?t1(e):null;s&&w();function w(){const p=t1(e);v&&!M2(v,p)&&n(),v=p,m=requestAnimationFrame(w)}return n(),()=>{var p;d.forEach(g=>{i&&g.removeEventListener("scroll",n),o&&g.removeEventListener("resize",n)}),c==null||c(),(p=f)==null||p.disconnect(),f=null,s&&cancelAnimationFrame(m)}}var Op=b.useLayoutEffect,a6=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Jl=function(){};function s6(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function l6(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(s6(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var n1=function(t){return v6(t)?t.filter(Boolean):ti(t)==="object"&&t!==null?[t]:[]},j2=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=tr(t,a6);return Q({},n)},Pe=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function mc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function u6(e){return mc(e)?window.innerHeight:e.clientHeight}function $2(e){return mc(e)?window.pageYOffset:e.scrollTop}function eu(e,t){if(mc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function c6(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function d6(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function _s(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Jl,i=$2(e),o=t-i,a=10,l=0;function s(){l+=a;var u=d6(l,i,o,n);eu(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function r1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?eu(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&eu(e,Math.max(t.offsetTop-i,0))}function f6(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function i1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function p6(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var I2=!1,h6={get passive(){return I2=!0}},Cs=typeof window<"u"?window:{};Cs.addEventListener&&Cs.removeEventListener&&(Cs.addEventListener("p",Jl,h6),Cs.removeEventListener("p",Jl,!1));var m6=I2;function g6(e){return e!=null}function v6(e){return Array.isArray(e)}function Es(e,t,n){return e?t:n}var y6=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Bn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Bn(l,2),u=s[0],d=s[1];return a[u]=d,a},{})},x6=["children","innerProps"],b6=["children","innerProps"];function w6(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=c6(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var d=s.getBoundingClientRect(),c=d.height,y=n.getBoundingClientRect(),f=y.bottom,m=y.height,v=y.top,w=n.offsetParent.getBoundingClientRect(),p=w.top,g=a?window.innerHeight:u6(s),x=$2(s),S=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),T=p-C,_=g-v,E=T+x,L=c-x-v,D=f-g+x+S,A=x+v-C,O=160;switch(i){case"auto":case"bottom":if(_>=m)return{placement:"bottom",maxHeight:t};if(L>=m&&!a)return o&&_s(s,D,O),{placement:"bottom",maxHeight:t};if(!a&&L>=r||a&&_>=r){o&&_s(s,D,O);var I=a?_-S:L-S;return{placement:"bottom",maxHeight:I}}if(i==="auto"||a){var R=t,M=a?T:E;return M>=r&&(R=Math.min(M-S-l,t)),{placement:"top",maxHeight:R}}if(i==="bottom")return o&&eu(s,D),{placement:"bottom",maxHeight:t};break;case"top":if(T>=m)return{placement:"top",maxHeight:t};if(E>=m&&!a)return o&&_s(s,A,O),{placement:"top",maxHeight:t};if(!a&&E>=r||a&&T>=r){var j=t;return(!a&&E>=r||a&&T>=r)&&(j=a?T-C:E-C),o&&_s(s,A,O),{placement:"top",maxHeight:j}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function S6(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var D2=function(t){return t==="auto"?"bottom":t},_6=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Q((r={label:"menu"},No(r,S6(i),"100%"),No(r,"position","absolute"),No(r,"width","100%"),No(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},L2=b.createContext(null),C6=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(L2)||{},d=u.setPortalPlacement,c=b.useRef(null),y=b.useState(i),f=Bn(y,2),m=f[0],v=f[1],w=b.useState(null),p=Bn(w,2),g=p[0],x=p[1],S=s.spacing.controlHeight;return Op(function(){var C=c.current;if(C){var T=a==="fixed",_=l&&!T,E=w6({maxHeight:i,menuEl:C,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:T,controlHeight:S});v(E.maxHeight),x(E.placement),d==null||d(E.placement)}},[i,o,a,l,r,d,S]),n({ref:c,placerProps:Q(Q({},t),{},{placement:g||D2(o),maxHeight:m})})},E6=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return K("div",Z({},Pe(t,"menu",{menu:!0}),{ref:r},i),n)},k6=E6,T6=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Q({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},P6=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return K("div",Z({},Pe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},A2=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Q({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},O6=A2,M6=A2,j6=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=tr(t,x6);return K("div",Z({},Pe(Q(Q({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},$6=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=tr(t,b6);return K("div",Z({},Pe(Q(Q({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},I6=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},D6=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),d=b.useState(D2(a)),c=Bn(d,2),y=c[0],f=c[1],m=b.useMemo(function(){return{setPortalPlacement:f}},[]),v=b.useState(null),w=Bn(v,2),p=w[0],g=w[1],x=b.useCallback(function(){if(i){var _=f6(i),E=l==="fixed"?0:window.pageYOffset,L=_[y]+E;(L!==(p==null?void 0:p.offset)||_.left!==(p==null?void 0:p.rect.left)||_.width!==(p==null?void 0:p.rect.width))&&g({offset:L,rect:_})}},[i,l,y,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);Op(function(){x()},[x]);var S=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=o6(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Op(function(){S()},[S]);var C=b.useCallback(function(_){s.current=_,S()},[S]);if(!n&&l!=="fixed"||!p)return null;var T=K("div",Z({ref:C},Pe(Q(Q({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return K(L2.Provider,{value:m},n?xu.createPortal(T,n):T)},L6=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},A6=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return K("div",Z({},Pe(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},R6=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Q({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},F6=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return K("div",Z({},Pe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},N6=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},z6=function(t){var n=t.children,r=t.innerProps;return K("div",Z({},Pe(t,"indicatorsContainer",{indicators:!0}),r),n)},o1,B6=["size"],V6=["innerProps","isRtl","size"],U6={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},R2=function(t){var n=t.size,r=tr(t,B6);return K("svg",Z({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:U6},r))},Am=function(t){return K(R2,Z({size:20},t),K("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},F2=function(t){return K(R2,Z({size:20},t),K("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},N2=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Q({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},H6=N2,W6=function(t){var n=t.children,r=t.innerProps;return K("div",Z({},Pe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||K(F2,null))},G6=N2,Y6=function(t){var n=t.children,r=t.innerProps;return K("div",Z({},Pe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||K(Am,null))},q6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Q({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},X6=function(t){var n=t.innerProps;return K("span",Z({},n,Pe(t,"indicatorSeparator",{"indicator-separator":!0})))},K6=J3(o1||(o1=YR([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Q6=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Q({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},$d=function(t){var n=t.delay,r=t.offset;return K("span",{css:sm({animation:"".concat(K6," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Z6=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=tr(t,V6);return K("div",Z({},Pe(Q(Q({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),K($d,{delay:0,offset:r}),K($d,{delay:160,offset:!0}),K($d,{delay:320,offset:!r}))},J6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Q({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},e8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return K("div",Z({ref:o},Pe(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},t8=e8,n8=["data"],r8=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},i8=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,d=t.theme,c=t.selectProps;return K("div",Z({},Pe(t,"group",{group:!0}),s),K(a,Z({},l,{selectProps:c,theme:d,getStyles:i,getClassNames:o,cx:r}),u),K("div",null,n))},o8=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Q({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},a8=function(t){var n=j2(t);n.data;var r=tr(n,n8);return K("div",Z({},Pe(t,"groupHeading",{"group-heading":!0}),r))},s8=i8,l8=["innerRef","isDisabled","isHidden","inputClassName"],u8=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Q(Q({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},c8),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},z2={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},c8={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Q({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},z2)},d8=function(t){return Q({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},z2)},f8=function(t){var n=t.cx,r=t.value,i=j2(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=tr(i,l8);return K("div",Z({},Pe(t,"input",{"input-container":!0}),{"data-value":r||""}),K("input",Z({className:n({input:!0},s),ref:o,style:d8(l),disabled:a},u)))},p8=f8,h8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Q({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},m8=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Q({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},g8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Q({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},B2=function(t){var n=t.children,r=t.innerProps;return K("div",r,n)},v8=B2,y8=B2;function x8(e){var t=e.children,n=e.innerProps;return K("div",Z({role:"button"},n),t||K(Am,{size:14}))}var b8=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,d=r.Label,c=r.Remove;return K(u,{data:i,innerProps:Q(Q({},Pe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},K(d,{data:i,innerProps:Q({},Pe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),K(c,{data:i,innerProps:Q(Q({},Pe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},w8=b8,S8=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Q({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},_8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return K("div",Z({},Pe(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},C8=_8,E8=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Q({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},k8=function(t){var n=t.children,r=t.innerProps;return K("div",Z({},Pe(t,"placeholder",{placeholder:!0}),r),n)},T8=k8,P8=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Q({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},O8=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return K("div",Z({},Pe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},M8=O8,j8={ClearIndicator:Y6,Control:t8,DropdownIndicator:W6,DownChevron:F2,CrossIcon:Am,Group:s8,GroupHeading:a8,IndicatorsContainer:z6,IndicatorSeparator:X6,Input:p8,LoadingIndicator:Z6,Menu:k6,MenuList:P6,MenuPortal:D6,LoadingMessage:$6,NoOptionsMessage:j6,MultiValue:w8,MultiValueContainer:v8,MultiValueLabel:y8,MultiValueRemove:x8,Option:C8,Placeholder:T8,SelectContainer:A6,SingleValue:M8,ValueContainer:F6},$8=function(t){return Q(Q({},j8),t.components)},a1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function I8(e,t){return!!(e===t||a1(e)&&a1(t))}function D8(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!I8(e[n],t[n]))return!1;return!0}function L8(e,t){t===void 0&&(t=D8);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var A8={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},R8=function(t){return K("span",Z({css:A8},t))},s1=R8,F8={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,d=t.isAppleDevice,c=function(v,w){return v&&v.length?"".concat(v.indexOf(w)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(c(l,r),".");if(n==="menu"&&d){var y=s?" disabled":"",f="".concat(u?" selected":"").concat(y);return"".concat(a).concat(f,", ").concat(c(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},N8=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,d=t.isAppleDevice,c=s.ariaLiveMessages,y=s.getOptionLabel,f=s.inputValue,m=s.isMulti,v=s.isOptionDisabled,w=s.isSearchable,p=s.menuIsOpen,g=s.options,x=s.screenReaderStatus,S=s.tabSelectsValue,C=s.isLoading,T=s["aria-label"],_=s["aria-live"],E=b.useMemo(function(){return Q(Q({},F8),c||{})},[c]),L=b.useMemo(function(){var M="";if(n&&E.onChange){var j=n.option,F=n.options,P=n.removedValue,$=n.removedValues,N=n.value,B=function(fe){return Array.isArray(fe)?null:fe},z=P||j||B(N),U=z?y(z):"",G=F||$||void 0,Y=G?G.map(y):[],X=Q({isDisabled:z&&v(z,l),label:U,labels:Y},n);M=E.onChange(X)}return M},[n,E,v,l,y]),D=b.useMemo(function(){var M="",j=r||i,F=!!(r&&l&&l.includes(r));if(j&&E.onFocus){var P={focused:j,label:y(j),isDisabled:v(j,l),isSelected:F,options:o,context:j===r?"menu":"value",selectValue:l,isAppleDevice:d};M=E.onFocus(P)}return M},[r,i,y,v,E,o,l,d]),A=b.useMemo(function(){var M="";if(p&&g.length&&!C&&E.onFilter){var j=x({count:o.length});M=E.onFilter({inputValue:f,resultsMessage:j})}return M},[o,f,p,E,g,x,C]),O=(n==null?void 0:n.action)==="initial-input-focus",I=b.useMemo(function(){var M="";if(E.guidance){var j=i?"value":p?"menu":"input";M=E.guidance({"aria-label":T,context:j,isDisabled:r&&v(r,l),isMulti:m,isSearchable:w,tabSelectsValue:S,isInitialFocus:O})}return M},[T,r,i,m,v,w,p,E,l,S,O]),R=K(b.Fragment,null,K("span",{id:"aria-selection"},L),K("span",{id:"aria-focused"},D),K("span",{id:"aria-results"},A),K("span",{id:"aria-guidance"},I));return K(b.Fragment,null,K(s1,{id:u},O&&R),K(s1,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!O&&R))},z8=N8,Mp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],B8=new RegExp("["+Mp.map(function(e){return e.letters}).join("")+"]","g"),V2={};for(var Id=0;Id<Mp.length;Id++)for(var Dd=Mp[Id],Ld=0;Ld<Dd.letters.length;Ld++)V2[Dd.letters[Ld]]=Dd.base;var U2=function(t){return t.replace(B8,function(n){return V2[n]})},V8=L8(U2),l1=function(t){return t.replace(/^\s+|\s+$/g,"")},U8=function(t){return"".concat(t.label," ").concat(t.value)},H8=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Q({ignoreCase:!0,ignoreAccents:!0,stringify:U8,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,d=s?l1(r):r,c=s?l1(l(n)):l(n);return o&&(d=d.toLowerCase(),c=c.toLowerCase()),a&&(d=V8(d),c=U2(c)),u==="start"?c.substr(0,d.length)===d:c.indexOf(d)>-1}},W8=["innerRef"];function G8(e){var t=e.innerRef,n=tr(e,W8),r=y6(n,"onExited","in","enter","exit","appear");return K("input",Z({ref:t},r,{css:sm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Y8=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function q8(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),d=b.useCallback(function(w,p){if(u.current!==null){var g=u.current,x=g.scrollTop,S=g.scrollHeight,C=g.clientHeight,T=u.current,_=p>0,E=S-C-x,L=!1;E>p&&a.current&&(r&&r(w),a.current=!1),_&&l.current&&(o&&o(w),l.current=!1),_&&p>E?(n&&!a.current&&n(w),T.scrollTop=S,L=!0,a.current=!0):!_&&-p>x&&(i&&!l.current&&i(w),T.scrollTop=0,L=!0,l.current=!0),L&&Y8(w)}},[n,r,i,o]),c=b.useCallback(function(w){d(w,w.deltaY)},[d]),y=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),f=b.useCallback(function(w){var p=s.current-w.changedTouches[0].clientY;d(w,p)},[d]),m=b.useCallback(function(w){if(w){var p=m6?{passive:!1}:!1;w.addEventListener("wheel",c,p),w.addEventListener("touchstart",y,p),w.addEventListener("touchmove",f,p)}},[f,y,c]),v=b.useCallback(function(w){w&&(w.removeEventListener("wheel",c,!1),w.removeEventListener("touchstart",y,!1),w.removeEventListener("touchmove",f,!1))},[f,y,c]);return b.useEffect(function(){if(t){var w=u.current;return m(w),function(){v(w)}}},[t,m,v]),function(w){u.current=w}}var u1=["boxSizing","height","overflow","paddingRight","position"],c1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function d1(e){e.cancelable&&e.preventDefault()}function f1(e){e.stopPropagation()}function p1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function h1(){return"ontouchstart"in window||navigator.maxTouchPoints}var m1=!!(typeof window<"u"&&window.document&&window.document.createElement),jo=0,mi={capture:!1,passive:!1};function X8(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(m1){var u=document.body,d=u&&u.style;if(r&&u1.forEach(function(m){var v=d&&d[m];i.current[m]=v}),r&&jo<1){var c=parseInt(i.current.paddingRight,10)||0,y=document.body?document.body.clientWidth:0,f=window.innerWidth-y+c||0;Object.keys(c1).forEach(function(m){var v=c1[m];d&&(d[m]=v)}),d&&(d.paddingRight="".concat(f,"px"))}u&&h1()&&(u.addEventListener("touchmove",d1,mi),s&&(s.addEventListener("touchstart",p1,mi),s.addEventListener("touchmove",f1,mi))),jo+=1}},[r]),l=b.useCallback(function(s){if(m1){var u=document.body,d=u&&u.style;jo=Math.max(jo-1,0),r&&jo<1&&u1.forEach(function(c){var y=i.current[c];d&&(d[c]=y)}),u&&h1()&&(u.removeEventListener("touchmove",d1,mi),s&&(s.removeEventListener("touchstart",p1,mi),s.removeEventListener("touchmove",f1,mi)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var K8=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},Q8={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Z8(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=q8({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=X8({isEnabled:n}),c=function(f){u(f),d(f)};return K(b.Fragment,null,n&&K("div",{onClick:K8,css:Q8}),t(c))}var J8={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},eF=function(t){var n=t.name,r=t.onFocus;return K("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:J8,value:"",onChange:function(){}})},tF=eF;function Rm(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function nF(){return Rm(/^iPhone/i)}function H2(){return Rm(/^Mac/i)}function rF(){return Rm(/^iPad/i)||H2()&&navigator.maxTouchPoints>1}function iF(){return nF()||rF()}function oF(){return H2()||iF()}var aF=function(t){return t.label},sF=function(t){return t.label},lF=function(t){return t.value},uF=function(t){return!!t.isDisabled},cF={clearIndicator:G6,container:L6,control:J6,dropdownIndicator:H6,group:r8,groupHeading:o8,indicatorsContainer:N6,indicatorSeparator:q6,input:u8,loadingIndicator:Q6,loadingMessage:M6,menu:_6,menuList:T6,menuPortal:I6,multiValue:h8,multiValueLabel:m8,multiValueRemove:g8,noOptionsMessage:O6,option:S8,placeholder:E8,singleValue:P8,valueContainer:R6},dF={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},fF=4,W2=4,pF=38,hF=W2*2,mF={baseUnit:W2,controlHeight:pF,menuGutter:hF},Ad={borderRadius:fF,colors:dF,spacing:mF},gF={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:i1(),captureMenuScroll:!i1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:H8(),formatGroupLabel:aF,getOptionLabel:sF,getOptionValue:lF,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:uF,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!p6(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function g1(e,t,n,r){var i=q2(e,t,n),o=X2(e,t,n),a=Y2(e,t),l=tu(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function Js(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return g1(e,a,t,l)}).filter(function(a){return y1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=g1(e,n,t,r);return y1(e,o)?o:void 0}).filter(g6)}function G2(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,$m(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function v1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,$m(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function vF(e,t){return G2(Js(e,t))}function y1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!Q2(e)||!o)&&K2(e,{label:a,value:l,data:i},r)}function yF(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function xF(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Rd=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},Y2=function(t,n){return t.getOptionLabel(n)},tu=function(t,n){return t.getOptionValue(n)};function q2(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function X2(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=tu(e,t);return n.some(function(i){return tu(e,i)===r})}function K2(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Q2=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},bF=1,Z2=function(e){NR(n,e);var t=UR(n);function n(r){var i;if(RR(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var d=i.props,c=d.onChange,y=d.name;u.name=y,i.ariaOnChange(s,u),c(s,u)},i.setValue=function(s,u,d){var c=i.props,y=c.closeMenuOnSelect,f=c.isMulti,m=c.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:m}),y&&(i.setState({inputIsHiddenAfterUpdate:!f}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:d})},i.selectOption=function(s){var u=i.props,d=u.blurInputOnSelect,c=u.isMulti,y=u.name,f=i.state.selectValue,m=c&&i.isOptionSelected(s,f),v=i.isOptionDisabled(s,f);if(m){var w=i.getOptionValue(s);i.setValue(f.filter(function(p){return i.getOptionValue(p)!==w}),"deselect-option",s)}else if(!v)c?i.setValue([].concat($m(f),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:y});return}d&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,d=i.state.selectValue,c=i.getOptionValue(s),y=d.filter(function(m){return i.getOptionValue(m)!==c}),f=Es(u,y,y[0]||null);i.onChange(f,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Es(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,d=u[u.length-1],c=u.slice(0,u.length-1),y=Es(s,c,c[0]||null);d&&i.onChange(y,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(s){return Rd(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return v1(Js(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];return l6.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return Y2(i.props,s)},i.getOptionValue=function(s){return tu(i.props,s)},i.getStyles=function(s,u){var d=i.props.unstyled,c=cF[s](u,d);c.boxSizing="border-box";var y=i.props.styles[s];return y?y(c,u):c},i.getClassNames=function(s,u){var d,c;return(d=(c=i.props.classNames)[s])===null||d===void 0?void 0:d.call(c,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return $8(i.props)},i.buildCategorizedOptions=function(){return Js(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return G2(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:Q({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,d=u.isMulti,c=u.menuIsOpen;i.focusInput(),c?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&mc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,d=u&&u.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,d=u&&u.item(0);if(d){var c=Math.abs(d.clientX-i.initialTouchX),y=Math.abs(d.clientY-i.initialTouchY),f=5;i.userIsDragging=c>f||y>f}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,d=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),d=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:d>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return Q2(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,d=u.isMulti,c=u.backspaceRemovesValue,y=u.escapeClearsValue,f=u.inputValue,m=u.isClearable,v=u.isDisabled,w=u.menuIsOpen,p=u.onKeyDown,g=u.tabSelectsValue,x=u.openMenuOnFocus,S=i.state,C=S.focusedOption,T=S.focusedValue,_=S.selectValue;if(!v&&!(typeof p=="function"&&(p(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||f)return;i.focusValue("previous");break;case"ArrowRight":if(!d||f)return;i.focusValue("next");break;case"Delete":case"Backspace":if(f)return;if(T)i.removeValue(T);else{if(!c)return;d?i.popValue():m&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!g||!C||x&&i.isOptionSelected(C,_))return;i.selectOption(C);break;case"Enter":if(s.keyCode===229)break;if(w){if(!C||i.isComposing)return;i.selectOption(C);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:f}),i.onMenuClose()):m&&y&&i.clearValue();break;case" ":if(f)return;if(!w){i.openMenu("first");break}if(!C)return;i.selectOption(C);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++bF),i.state.selectValue=n1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Rd(o,a[l])}return i}return FR(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&r1(this.menuListRef,this.focusedOptionRef),oF()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(r1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),d=i==="first"?0:u.length-1;if(!this.props.isMulti){var c=u.indexOf(l[0]);c>-1&&(d=c)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[d],focusedOptionId:this.getFocusedOptionId(u[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,d=-1;if(a.length){switch(i){case"previous":s===0?d=0:s===-1?d=u:d=s-1;break;case"next":s>-1&&s<u&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ad):Q(Q({},Ad),this.props.theme):Ad}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,d=this.setValue,c=this.props,y=c.isMulti,f=c.isRtl,m=c.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:v,isMulti:y,isRtl:f,options:m,selectOption:u,selectProps:c,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return q2(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return X2(this.props,i,o)}},{key:"filterOption",value:function(i,o){return K2(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,d=i.form,c=i.menuIsOpen,y=i.required,f=this.getComponents(),m=f.Input,v=this.state,w=v.inputIsHidden,p=v.ariaSelection,g=this.commonProps,x=l||this.getElementId("input"),S=Q(Q(Q({"aria-autocomplete":"list","aria-expanded":c,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":y,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},c&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(m,Z({},g,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:d,type:"text",value:s},S)):b.createElement(G8,Z({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Jl,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:d,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,d=o.SingleValue,c=o.Placeholder,y=this.commonProps,f=this.props,m=f.controlShouldRenderValue,v=f.isDisabled,w=f.isMulti,p=f.inputValue,g=f.placeholder,x=this.state,S=x.selectValue,C=x.focusedValue,T=x.isFocused;if(!this.hasValue()||!m)return p?null:b.createElement(c,Z({},y,{key:"placeholder",isDisabled:v,isFocused:T,innerProps:{id:this.getElementId("placeholder")}}),g);if(w)return S.map(function(E,L){var D=E===C,A="".concat(i.getOptionLabel(E),"-").concat(i.getOptionValue(E));return b.createElement(a,Z({},y,{components:{Container:l,Label:s,Remove:u},isFocused:D,isDisabled:v,key:A,index:L,removeProps:{onClick:function(){return i.removeValue(E)},onTouchEnd:function(){return i.removeValue(E)},onMouseDown:function(I){I.preventDefault()}},data:E}),i.formatOptionLabel(E,"value"))});if(p)return null;var _=S[0];return b.createElement(d,Z({},y,{data:_,isDisabled:v}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var c={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,Z({},a,{innerProps:c,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!o||!u)return null;var c={"aria-hidden":"true"};return b.createElement(o,Z({},a,{innerProps:c,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,Z({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,Z({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,d=o.MenuPortal,c=o.LoadingMessage,y=o.NoOptionsMessage,f=o.Option,m=this.commonProps,v=this.state.focusedOption,w=this.props,p=w.captureMenuScroll,g=w.inputValue,x=w.isLoading,S=w.loadingMessage,C=w.minMenuHeight,T=w.maxMenuHeight,_=w.menuIsOpen,E=w.menuPlacement,L=w.menuPosition,D=w.menuPortalTarget,A=w.menuShouldBlockScroll,O=w.menuShouldScrollIntoView,I=w.noOptionsMessage,R=w.onMenuScrollToTop,M=w.onMenuScrollToBottom;if(!_)return null;var j=function(U,G){var Y=U.type,X=U.data,ee=U.isDisabled,fe=U.isSelected,be=U.label,ie=U.value,je=v===X,Be=ee?void 0:function(){return i.onOptionHover(X)},Ve=ee?void 0:function(){return i.selectOption(X)},si="".concat(i.getElementId("option"),"-").concat(G),vt={id:si,onClick:Ve,onMouseMove:Be,onMouseOver:Be,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:fe};return b.createElement(f,Z({},m,{innerProps:vt,data:X,isDisabled:ee,isSelected:fe,key:si,label:be,type:Y,value:ie,isFocused:je,innerRef:je?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},F;if(this.hasOptions())F=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var U=z.data,G=z.options,Y=z.index,X="".concat(i.getElementId("group"),"-").concat(Y),ee="".concat(X,"-heading");return b.createElement(a,Z({},m,{key:X,data:U,options:G,Heading:l,headingProps:{id:ee,data:z.data},label:i.formatGroupLabel(z.data)}),z.options.map(function(fe){return j(fe,"".concat(Y,"-").concat(fe.index))}))}else if(z.type==="option")return j(z,"".concat(z.index))});else if(x){var P=S({inputValue:g});if(P===null)return null;F=b.createElement(c,m,P)}else{var $=I({inputValue:g});if($===null)return null;F=b.createElement(y,m,$)}var N={minMenuHeight:C,maxMenuHeight:T,menuPlacement:E,menuPosition:L,menuShouldScrollIntoView:O},B=b.createElement(C6,Z({},m,N),function(z){var U=z.ref,G=z.placerProps,Y=G.placement,X=G.maxHeight;return b.createElement(s,Z({},m,N,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:Y}),b.createElement(Z8,{captureEnabled:p,onTopArrive:R,onBottomArrive:M,lockEnabled:A},function(ee){return b.createElement(u,Z({},m,{innerRef:function(be){i.getMenuListRef(be),ee(be)},innerProps:{role:"listbox","aria-multiselectable":m.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:X,focusedOption:v}),F)}))});return D||L==="fixed"?b.createElement(d,Z({},m,{appendTo:D,controlElement:this.controlRef,menuPlacement:E,menuPosition:L}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,d=o.required,c=this.state.selectValue;if(d&&!this.hasValue()&&!l)return b.createElement(tF,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var y=c.map(function(v){return i.getOptionValue(v)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:y})}else{var f=c.length>0?c.map(function(v,w){return b.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(v)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,f)}else{var m=c[0]?this.getOptionValue(c[0]):"";return b.createElement("input",{name:u,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,d=o.selectValue,c=this.getFocusableOptions();return b.createElement(z8,Z({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:d,focusableOptions:c,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,d=u.className,c=u.id,y=u.isDisabled,f=u.menuIsOpen,m=this.state.isFocused,v=this.commonProps=this.getCommonProps();return b.createElement(l,Z({},v,{className:d,innerProps:{id:c,onKeyDown:this.onKeyDown},isDisabled:y,isFocused:m}),this.renderLiveRegion(),b.createElement(o,Z({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:y,isFocused:m,menuIsOpen:f}),b.createElement(s,Z({},v,{isDisabled:y}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,Z({},v,{isDisabled:y}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,d=o.isFocused,c=o.prevWasFocused,y=o.instancePrefix,f=i.options,m=i.value,v=i.menuIsOpen,w=i.inputValue,p=i.isMulti,g=n1(m),x={};if(a&&(m!==a.value||f!==a.options||v!==a.menuIsOpen||w!==a.inputValue)){var S=v?vF(i,g):[],C=v?v1(Js(i,g),"".concat(y,"-option")):[],T=l?yF(o,g):null,_=xF(o,S),E=Rd(C,_);x={selectValue:g,focusedOption:_,focusedOptionId:E,focusableOptionsWithIds:C,focusedValue:T,clearFocusValueOnUpdate:!1}}var L=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},D=u,A=d&&c;return d&&!A&&(D={value:Es(p,g,g[0]||null),options:g,action:"initial-input-focus"},A=!c),(u==null?void 0:u.action)==="initial-input-focus"&&(D=null),Q(Q(Q({},x),L),{},{prevProps:i,ariaSelection:D,prevWasFocused:A})}}]),n}(b.Component);Z2.defaultProps=gF;var wF=b.forwardRef(function(e,t){var n=AR(e);return b.createElement(Z2,Z({ref:t},n))}),gc=wF;const SF=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,_F=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,CF=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>h.jsxs(SF,{children:[h.jsx(_F,{children:"Місто"}),h.jsx(gc,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),EF=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,kF=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,TF=({options:e=[],value:t,onChange:n,selectedCity:r})=>h.jsxs(EF,{children:[h.jsx(kF,{children:"Спосіб доставки"}),h.jsx(gc,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),x1=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,b1=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,PF=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?h.jsxs(x1,{children:[h.jsx(b1,{children:"Відділення Нової пошти"}),h.jsx(gc,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?h.jsxs(x1,{children:[h.jsx(b1,{children:"Адреса доставки (Укрпошта)"}),h.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,OF=k.div`
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
`;const MF=k.button`
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
`,jF=k.ul`
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
`,$F=k.li`
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
`,IF=k.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,DF=k.div`
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
`,LF=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>h.jsxs(OF,{children:[h.jsx("h3",{children:"Ваше замовлення"}),h.jsx(jF,{children:e.map((o,a)=>{var l,s;return h.jsxs($F,{children:[h.jsx(IF,{src:((s=(l=o.images)==null?void 0:l[0])==null?void 0:s.url)||Ca,alt:o.name}),h.jsxs(DF,{children:[h.jsx("p",{className:"item-name",children:o.name}),h.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),h.jsxs("span",{className:"item-total",children:[o.price*o.quantity," грн"]})]},`${o.id}-${a}`)})}),h.jsxs("div",{className:"summary-row",children:[h.jsxs("span",{children:["Товари (",n,")"]}),h.jsxs("span",{children:[t," грн"]})]}),h.jsxs("div",{className:"summary-row",children:[h.jsx("span",{children:"Доставка"}),h.jsx("span",{children:"За тарифами перевізника"})]}),h.jsx("hr",{}),h.jsxs("div",{className:"total",children:[h.jsx("span",{children:"Всього до сплати:"}),h.jsxs("span",{children:[t," грн"]})]}),h.jsx(MF,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&h.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var J2={exports:{}};function AF(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Fd=AF(b),RF=xu;function FF(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function jp(){return(jp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function NF(e,t){e.prototype=Object.create(t.prototype),FF(e.prototype.constructor=e,t)}function zF(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function gi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var BF=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return u[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},w1=BF;function S1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function VF(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var UF={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},HF="_";function _1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=HF),n==null&&(n=UF),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Rt(e,t){return e.permanents.indexOf(t)!==-1}function vc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Rt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function C1(e,t){return t.split("").every(function(n,r){return Rt(e,r)||!vc(e,r,n)})}function zo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Rt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Rt(e,o)&&vc(e,o,a)){i=o+1;break}}return i}function e_(e,t){return zo(e,t)===e.mask.length}function An(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=$p(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Rt(e,t.length);)t+=r[t.length];return t}if(t)return $p(e,An(e,""),t,0);for(var o=0;o<r.length;o++)Rt(e,o)?t+=r[o]:t+=n;return t}function WF(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(d,c){return c<n||i<=c?d:Rt(e,c)?a[c]:o}).join("");for(var u=i;u<s.length;u++)Rt(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),An(e,t)}function $p(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=e_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;f=u,Rt(e,y=r)&&f!==i[y];){if(r>=t.length&&(t+=i[r]),d=u,c=r,o&&Rt(e,c)&&d===o)return!0;if(++r>=i.length)return!1}var d,c,y,f;return!vc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),An(e,t)):o||(t+=u),++r<i.length)}),t}function GF(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,Rt(e,u=r)&&d!==i[u];)if(++r>=i.length)return!1;var u,d;return(vc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function YF(e,t){for(var n=t;0<=n;--n)if(!Rt(e,n))return n;return null}function Jo(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Rt(e,r))return r;return null}function Nd(e){return e||e===0?e+"":""}function qF(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",d=0,c=0,y=Math.min(i.start,n.start);return n.end>i.start?c=(d=GF(e,r,u=s.slice(i.start,n.end),y))?i.length:0:s.length<r.length&&(c=r.length-s.length),s=r,c&&(c===1&&!i.length&&(y=i.start===n.start?Jo(e,n.start):YF(e,n.start)),s=WF(e,s,y,c)),s=$p(e,s,u,y),(y+=d)>=o.length?y=o.length:y<a.length&&!d?y=a.length:y>=a.length&&y<l&&d&&(y=Jo(e,y)),u||(u=null),{value:s=An(e,s),enteredString:u,selection:{start:y,end:y}}}function XF(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function yt(e){return typeof e=="function"}function KF(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function t_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function E1(e){return(t_()?KF():function(){return setTimeout(e,1e3/60)})(e)}function zd(e){(t_()||clearTimeout)(e)}var QF=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=E1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(zd(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var m=RF.findDOMNode(gi(gi(i))),v=typeof window<"u"&&m instanceof window.Element;if(m&&!v)return null;if(m.nodeName!=="INPUT"&&(m=m.querySelector("input")),!m)throw new Error("react-input-mask: inputComponent doesn't contain input node");return m},i.getInputValue=function(){var m=i.getInputDOMNode();return m?m.value:null},i.setInputValue=function(m){var v=i.getInputDOMNode();v&&(i.value=m,v.value=m)},i.setCursorToEnd=function(){var m=zo(i.maskOptions,i.value),v=Jo(i.maskOptions,m);v!==null&&i.setCursorPosition(v)},i.setSelection=function(m,v,w){w===void 0&&(w={});var p=i.getInputDOMNode(),g=i.isFocused();p&&g&&(w.deferred||S1(p,m,v),i.selectionDeferId!==null&&zd(i.selectionDeferId),i.selectionDeferId=E1(function(){i.selectionDeferId=null,S1(p,m,v)}),i.previousSelection={start:m,end:v,length:Math.abs(v-m)})},i.getSelection=function(){return VF(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(m){i.setSelection(m,m)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var m=i.maskOptions,v=m.mask,w=m.maskChar,p=m.permanents,g=m.formatChars;return{mask:v,maskChar:w,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:g}},i.isInputAutofilled=function(m,v,w,p){var g=i.getInputDOMNode();try{if(g.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<w.length&&v.end===m.length},i.onChange=function(m){var v=gi(gi(i)).beforePasteState,w=gi(gi(i)).previousSelection,p=i.props.beforeMaskedValueChange,g=i.getInputValue(),x=i.value,S=i.getSelection();i.isInputAutofilled(g,S,x,w)&&(x=An(i.maskOptions,""),w={start:0,end:0,length:0}),v&&(w=v.selection,x=v.value,S={start:w.start+g.length,end:w.start+g.length,length:0},g=x.slice(0,w.start)+g+x.slice(w.end),i.beforePasteState=null);var C=qF(i.maskOptions,g,S,x,w),T=C.enteredString,_=C.selection,E=C.value;if(yt(p)){var L=p({value:E,selection:_},{value:x,selection:w},T,i.getBeforeMaskedValueChangeConfig());E=L.value,_=L.selection}i.setInputValue(E),yt(i.props.onChange)&&i.props.onChange(m),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(m){var v=i.props.beforeMaskedValueChange,w=i.maskOptions,p=w.mask,g=w.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)zo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=An(i.maskOptions,g),S=An(i.maskOptions,x),C=zo(i.maskOptions,S),T=Jo(i.maskOptions,C),_={start:T,end:T};if(yt(v)){var E=v({value:S,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=E.value,_=E.selection}var L=S!==i.getInputValue();L&&i.setInputValue(S),L&&yt(i.props.onChange)&&i.props.onChange(m),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}yt(i.props.onFocus)&&i.props.onFocus(m)},i.onBlur=function(m){var v=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&C1(i.maskOptions,i.value)){var p="";yt(v)&&(p=v({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var g=p!==i.getInputValue();g&&i.setInputValue(p),g&&yt(i.props.onChange)&&i.props.onChange(m)}yt(i.props.onBlur)&&i.props.onBlur(m)},i.onMouseDown=function(m){if(!i.focused&&document.addEventListener){i.mouseDownX=m.clientX,i.mouseDownY=m.clientY,i.mouseDownTime=new Date().getTime();var v=function w(p){if(document.removeEventListener("mouseup",w),i.focused){var g=Math.abs(p.clientX-i.mouseDownX),x=Math.abs(p.clientY-i.mouseDownY),S=Math.max(g,x),C=new Date().getTime()-i.mouseDownTime;(S<=10&&C<=200||S<=5&&C<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",v)}yt(i.props.onMouseDown)&&i.props.onMouseDown(m)},i.onPaste=function(m){yt(i.props.onPaste)&&i.props.onPaste(m),m.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(m){i.props.children==null&&yt(i.props.inputRef)&&i.props.inputRef(m)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,d=r.defaultValue,c=r.value;i.maskOptions=_1(o,a,l),d==null&&(d=""),c==null&&(c=d);var y=Nd(c);if(i.maskOptions.mask&&(s||y)&&(y=An(i.maskOptions,y),yt(u))){var f=r.value;r.value==null&&(f=d),y=u({value:y,selection:null},{value:f=Nd(f),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=y,i}NF(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=XF(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,d=this.maskOptions,c=a||this.isFocused(),y=this.props.value!=null,f=y?Nd(this.props.value):this.value,m=r?r.start:null;if(this.maskOptions=_1(l,s,u),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var v=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||y||(f=this.getInputValue()),(v||this.maskOptions.mask&&(f||c))&&(f=An(this.maskOptions,f)),v){var w=zo(this.maskOptions,f);(m===null||w<m)&&(m=e_(this.maskOptions,f)?w:Jo(this.maskOptions,w))}!this.maskOptions.mask||!C1(this.maskOptions,f)||c||y&&this.props.value||(f="");var p={start:m,end:m};if(yt(o)){var g=o({value:f,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());f=g.value,p=g.selection}this.value=f;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):v&&this.forceUpdate();var S=!1;p.start!=null&&p.end!=null&&(S=!r||r.start!==p.start||r.end!==p.end),(S||x)&&this.setSelection(p.start,p.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&zd(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=zF(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){yt(o)||w1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=jp({},a);l.forEach(function(d){return delete s[d]}),r=o(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&w1(!1)}else r=Fd.createElement("input",jp({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Fd.cloneElement(r,u)},t}(Fd.Component),ZF=QF;J2.exports=ZF;var JF=J2.exports;const eN=Dp(JF);k.div`
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
`;const Bd=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Vd=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Ud=k.input`
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
`;const Hd=k.span`
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
`;const tN=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return h.jsxs(h.Fragment,{children:[h.jsx("h3",{children:"Контактні дані"}),h.jsxs(Bd,{children:[h.jsx(Vd,{children:"Прізвище та ім’я"}),h.jsx(Ud,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&h.jsx(Hd,{children:n.fullName})]}),h.jsxs(Bd,{children:[h.jsx(Vd,{children:"Номер телефону"}),h.jsx(eN,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>h.jsx(Ud,{...i,type:"tel"})}),n.phone&&h.jsx(Hd,{children:n.phone})]}),h.jsxs(Bd,{children:[h.jsx(Vd,{children:"E-mail"}),h.jsx(Ud,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&h.jsx(Hd,{children:n.email})]})]})},nN=k.div`
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
   max-width: 1448px;
  }
`;k.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;const rN=k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,iN=k.div`
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
`;const oN=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return h.jsxs("div",{style:{marginBottom:"20px"},children:[h.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),h.jsx(gc,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&h.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},k1={}.VITE_NP_API_KEY,T1="https://api.novaposhta.ua/v2.0/json/",aN=()=>{const e=Et(j=>j.cart.items),t=Xn(),n=Qn(),[r,i]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[o,a]=b.useState(""),[l,s]=b.useState(null),[u,d]=b.useState(null),[c,y]=b.useState(null),[f,m]=b.useState(null),[v,w]=b.useState([]),[p,g]=b.useState([]),[x,S]=b.useState(null);console.log(x);const C=e.reduce((j,F)=>j+F.price*F.quantity,0),T=e.reduce((j,F)=>j+F.quantity,0),E=(()=>{const j=new Date().getFullYear().toString().slice(-2),F=Date.now().toString().slice(-4),P=Math.floor(100+Math.random()*900);return`${j}${F}${P}`})();console.log(E),b.useEffect(()=>{if(o.length<2)return;const j=setTimeout(async()=>{const P=await(await fetch(T1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:k1,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:o}})})).json();w(P.data.map($=>({value:$.Ref,label:$.Description})))},500);return()=>clearTimeout(j)},[o]),b.useEffect(()=>{if(!l||u!=="nova")return;(async()=>{const P=await(await fetch(T1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:k1,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:l.value}})})).json();g(P.data.map($=>({value:$.Ref,label:$.Description})))})()},[l,u]);const L=j=>{s(j),i(F=>({...F,city:(j==null?void 0:j.label)||"",postOffice:""})),d(null),y(null),m(null)},D=()=>{const j={};return r.fullName.trim().split(" ").length<2&&(j.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(j.email="Некоректний email"),r.phone.replace(/\D/g,"").length<12&&(j.phone="Номер неповний"),l||(j.city=!0),u==="nova"&&!c&&(j.postOffice=!0),u==="ukr"&&!f&&(j.postOffice=!0),u||(j.delivery=!0),x||(j.payment=!0),j},A=b.useMemo(D,[r,u,c,f,l,x]),O=Object.keys(A).length===0&&e.length>0,I=async j=>{if(j.preventDefault(),!x){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:r.fullName,phone:r.phone,email:r.email,city:r.city,products:e==null?void 0:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity,price:P.price})),status_order:"pending",order_number:E,payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?f:"Самовивіз"}})}),x==="liqpay"){const P=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:C,order_number:E})}),{data:$,signature:N}=await P.json(),B=document.createElement("form");B.method="POST",B.action="https://www.liqpay.ua/api/3/checkout",B.innerHTML=`
        <input type="hidden" name="data" value="${$}" />
        <input type="hidden" name="signature" value="${N}" />
      `,document.body.appendChild(B),B.requestSubmit();return}const F={...r,name:r.fullName,city:l.label,deliveryMethod:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",address:u==="nova"?c==null?void 0:c.label:u==="ukr"?f:"Самовивіз",products:e==null?void 0:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity,price:P.price})),total:C,order_number:E,delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?f:"Самовивіз",payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":""};n(Qh()),t("/order-confirmation",{state:{order:F}})}catch(F){console.error(F),alert("Помилка оформлення")}},R=b.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),M=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return h.jsx(nN,{children:h.jsxs(rN,{children:[h.jsxs(iN,{children:[h.jsx(tN,{formData:r,setFormData:i,errors:A}),h.jsx(CF,{cityOptions:v,selectedCity:l,onChange:L,onInputChange:a}),h.jsx(TF,{options:R,value:u,onChange:d,selectedCity:l}),h.jsx(PF,{deliveryMethod:u,officeOptions:p,selectedOffice:c,selectedUkrOffice:f,setSelectedOffice:y,setSelectedUkrOffice:m}),h.jsx(oN,{options:M,value:x,onChange:S,error:A.payment})]}),h.jsx(LF,{cartItems:e,totalAmount:C,totalQuantity:T,isFormValid:O,handleSubmit:I})]})})},sN=k.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,lN=k.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,$r=k.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,uN=k.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,cN=k.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,dN=k.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,fN=k.li`
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
`;const pN=k.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,P1=k.button`
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
`,hN=()=>{var y,f;const e=Xn(),t=ni(),[n]=DC(),r=Qn(),i=(y=t.state)==null?void 0:y.order,o=n.get("orderId"),[a,l]=b.useState(i||null),[s,u]=b.useState(!i);b.useEffect(()=>{r(Qh())},[r]),b.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(m=>m.json()).then(m=>{var v;((v=m.data)==null?void 0:v.length)>0&&l(m.data[0]),u(!1)}).catch(()=>u(!1)):u(!1))},[o,i]),console.log(a);const c=((a==null?void 0:a.products)??[]).reduce((m,v)=>m+Number(v.price||0)*(v.quantity||1),0);return s?h.jsx("div",{children:"Завантаження..."}):a?h.jsxs(sN,{children:[h.jsx(lN,{children:"Дякуємо за ваше замовлення!"}),h.jsxs($r,{children:["Ваше замовлення ",h.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),h.jsx($r,{children:"Ми зв’яжемось з Вами в найближчий час"}),h.jsxs(uN,{children:[h.jsx(cN,{children:"Деталі замовлення:"}),h.jsx(dN,{children:(f=a.products)==null?void 0:f.map(m=>h.jsxs(fN,{children:[h.jsxs("span",{className:"item-info",children:[m.name," (x",m.quantity,")"]}),h.jsxs("span",{className:"item-price",children:[m.price*m.quantity," грн"]})]},m.id))}),h.jsxs($r,{children:[h.jsx("strong",{children:"На суму:"})," ",c," грн."]}),h.jsxs($r,{children:[h.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),h.jsxs($r,{children:[h.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),h.jsxs($r,{children:[h.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),h.jsxs($r,{children:[h.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),h.jsxs(pN,{children:[h.jsx(P1,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),h.jsx(P1,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):h.jsxs("div",{children:["Замовлення не знайдено",h.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},mN=k.section`
  background-color: var(--second-background);
`,gN=k.div`
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
   max-width: 1448px;
   
  }
`,vN=k.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,yN=k.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,xN=k.p`

  font-size: 16px;
  color: #666;
`,bN=k.section`
  margin-bottom: 50px;
`,wN=k.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,SN=k.section`
  margin-bottom: 60px;
`,_N=k.h2`
  margin-bottom: 30px;
`,CN=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ks=k.div`
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
`,EN=()=>h.jsxs(mN,{children:[h.jsxs(gN,{children:[h.jsxs(vN,{children:[h.jsx(yN,{children:"Про Дідів Хлів"}),h.jsx(xN,{children:"Даємо друге життя якісним велозапчастинам"})]}),h.jsxs(bN,{children:[h.jsx(wN,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),h.jsx(zS,{})]}),h.jsxs(SN,{children:[h.jsx(_N,{children:"Наша майстерня"}),h.jsxs(CN,{children:[h.jsx(ks,{color:"#e2e2e2",children:"Фото майстерні"}),h.jsx(ks,{color:"#d1d1d1",children:"Процес діагностики"}),h.jsx(ks,{color:"#bcbcbc",children:"Склад запчастин"}),h.jsx(ks,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),kN=()=>{const{pathname:e}=ni();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},TN=k.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,PN=k.div`
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
    max-width: 1448px;
   
  }
`,ON=k.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,MN=k.p`
  color: #585555;
  margin-bottom: 40px;
`,jN=k.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,$N=k.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Ts=k.div`
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
`,IN=k.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,DN=k.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,LN=k.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,AN=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,O1=k.a`
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
`;const RN=k.div`
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

 
`,FN=()=>h.jsx(TN,{children:h.jsxs(PN,{children:[h.jsx(ON,{children:"Контакти"}),h.jsx(MN,{children:"Зв’яжіться з нами для консультації або замовлення"}),h.jsxs(jN,{children:[h.jsxs($N,{children:[h.jsxs(Ts,{children:[h.jsx("h3",{children:"Адреса"}),h.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),h.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),h.jsxs(Ts,{children:[h.jsx("h3",{children:"Телефон"}),h.jsx("p",{children:"+38 (097) 123-45-67"})]}),h.jsxs(Ts,{children:[h.jsx("h3",{children:"Email"}),h.jsx("p",{children:"didivhliv.com"})]}),h.jsxs(Ts,{children:[h.jsx("h3",{children:"Графік роботи"}),h.jsx("p",{children:"З 11:00 - 20:00"}),h.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),h.jsxs(IN,{children:[h.jsx(DN,{children:"Ми в соцмережах"}),h.jsx(LN,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),h.jsxs(AN,{children:[h.jsxs(O1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[h.jsx("svg",{width:"20px",children:h.jsx("use",{href:`${un}#icon-instagram`})}),h.jsx("span",{children:"Instagram"})]}),h.jsxs(O1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[h.jsx("svg",{width:"20px",children:h.jsx("use",{href:`${un}#icon-telegram`})}),h.jsx("span",{children:"Telegram"})]})]}),h.jsx(RN,{children:"Приєднуйся до спільноти!"})]})]})]})}),NN=k.section`
  background-color:  var(--second-background);
`,zN=k.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding-top: 30px;
  padding-left: 20px;
    padding-right: 20px;

 @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
   
  }
  
`,BN=k.div`
      display: flex;
    width: 100%;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
  
`,VN=k.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
   margin-left: 40%;
  }

`,UN=k.div`
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
`,HN=k.div`
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
`,WN=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,GN=k.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,YN=k.p`
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
 
`,qN=k.p`
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
`;const XN=k.div.attrs({className:"card-buttons"})`
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
`,KN=k.button`
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
`,QN=k.button`
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
`,ZN=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
`,Wd=k.button`
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
`,JN=k.div`
  position: relative;
  display: inline-block;
  

`,ez=k.button`
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
`,tz=k.div`
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
`,vi=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,nz=k.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,rz=k(Oe)`
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
  
`,iz=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),i=Et(C=>C.favorites.items),o=Et(C=>C.cart.items),[a,l]=b.useState(!1),[s,u]=b.useState("date"),[d,c]=b.useState("asc"),[y,f]=b.useState(1),[m,v]=b.useState(1),w=Xn(),p=Qn();b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[y]),b.useEffect(()=>{(async()=>{const T=new Date,_=new Date;_.setDate(T.getDate()-7);const E=_.toISOString();try{r(!0);const L=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${E}&pagination[page]=${y}&pagination[pageSize]=24`);if(!L.ok)throw new Error(`HTTP error! Status: ${L.status}`);const D=await L.json();t(D.data),v(D.meta.pagination.pageCount)}catch(L){console.error("Помилка при завантаженні продуктів:",L)}finally{r(!1)}})()},[y]);const g=b.useMemo(()=>{const C=[...e];switch(s){case"name":return C.sort((T,_)=>d==="asc"?T.name.localeCompare(_.name):_.name.localeCompare(T.name));case"price":return C.sort((T,_)=>d==="asc"?T.price-_.price:_.price-T.price);case"date":return C.sort((T,_)=>d==="asc"?new Date(T.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(T.createdAt));default:return C}},[s,e,d]),x=(C,T)=>{T.stopPropagation();const _=o.find(L=>L.id===C.id);if((_?_.quantity:0)>=C.stock){J.error(`Вибачте, доступно лише ${C.stock} шт.`);return}p(Na({...C,quantity:1})),J.success(`${C.name} додано в кошик!`)},S=(C,T)=>{T.stopPropagation();const _=i.some(E=>E.id===C.id);p(Wa(C)),_?J.warning(`${C.name} видалено з обраного`):J.info(`${C.name} додано в обране`)};return n?h.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:h.jsx(qu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):g.length===0?h.jsxs(nz,{children:[h.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),h.jsxs(rz,{to:"/catalog",children:[h.jsx("p",{children:"Весь каталог"}),h.jsx(Hh,{size:24})]})]}):h.jsxs(NN,{children:[h.jsxs(zN,{children:[h.jsx(oi,{autoClose:1500}),h.jsxs(BN,{children:[h.jsx(VN,{children:"Нові товари"}),h.jsxs(JN,{children:[h.jsxs(ez,{onClick:()=>l(C=>!C),children:["Сортування",h.jsx(Uh,{strokeWidth:.9,size:22})]}),a&&h.jsxs(tz,{children:[h.jsx(vi,{onClick:()=>{u("name"),c("asc"),l(!1)},children:"А-Я"}),h.jsx(vi,{onClick:()=>{u("name"),c("desc"),l(!1)},children:"Я-А"}),h.jsx(vi,{onClick:()=>{u("price"),c("asc"),l(!1)},children:"Ціна ↑"}),h.jsx(vi,{onClick:()=>{u("price"),c("desc"),l(!1)},children:"Ціна ↓"}),h.jsx(vi,{onClick:()=>{u("date"),c("desc"),l(!1)},children:"Спочатку новіші"}),h.jsx(vi,{onClick:()=>{u("date"),c("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),h.jsx(UN,{children:g.map(C=>{var _,E;const T=i.some(L=>L.id===C.id);return h.jsxs(HN,{onClick:()=>w(`/product/${C.id}`),children:[h.jsx(WN,{src:(E=(_=C.images)==null?void 0:_[0])==null?void 0:E.url,alt:C.name}),h.jsx(YN,{children:C.name}),h.jsxs(GN,{children:[h.jsxs(qN,{children:[C.price," грн"]}),h.jsxs(XN,{children:[h.jsx(KN,{onClick:L=>x(C,L),children:h.jsx(Ra,{size:24,color:"black"})}),h.jsx(QN,{onClick:L=>S(C,L),children:h.jsx(Wh,{size:24,fill:T?"#ff4d4f":"none",color:T?"#ff4d4f":"#000000"})})]})]})]},C.id)})}),h.jsxs(ZN,{children:[h.jsx(Wd,{onClick:()=>f(C=>Math.max(C-1,1)),disabled:y===1,children:"Назад"}),Array.from({length:m},(C,T)=>h.jsx(Wd,{onClick:()=>f(T+1),active:y===T+1,children:T+1},T)),h.jsx(Wd,{onClick:()=>f(C=>Math.min(C+1,m)),disabled:y===m,children:"Вперед"})]})]})," "]})};function oz(){return h.jsxs(MM,{children:[h.jsx(f5,{}),h.jsx(kN,{}),h.jsx(b.Suspense,{fallback:h.jsx(c5,{}),children:h.jsx(_C,{children:h.jsxs(ut,{path:"/",element:h.jsx(gO,{}),children:[h.jsx(ut,{index:!0,element:h.jsx(aI,{})}),h.jsx(ut,{path:"catalog",element:h.jsx(CM,{})}),h.jsx(ut,{path:"/catalog/:category",element:h.jsx(hD,{})}),h.jsx(ut,{path:"/product/:id",element:h.jsx(kA,{})}),h.jsx(ut,{path:"cart",element:h.jsx(tR,{})}),h.jsx(ut,{path:"favorite",element:h.jsx(_R,{})}),h.jsx(ut,{path:"/catalog/new",element:h.jsx(iz,{})}),h.jsx(ut,{path:"checkout",element:h.jsx(aN,{})}),h.jsx(ut,{path:"/order-confirmation",element:h.jsx(hN,{})}),h.jsx(ut,{path:"about",element:h.jsx(EN,{})}),h.jsx(ut,{path:"contacts",element:h.jsx(FN,{})}),h.jsx(ut,{path:"delivery",element:h.jsx(OR,{})}),h.jsx(ut,{path:"*",element:h.jsx(OM,{})})]})})})]})}var Fm="persist:",n_="persist/FLUSH",Nm="persist/REHYDRATE",r_="persist/PAUSE",i_="persist/PERSIST",o_="persist/PURGE",a_="persist/REGISTER",az=-1;function el(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?el=function(n){return typeof n}:el=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},el(e)}function M1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function sz(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?M1(n,!0).forEach(function(r){lz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lz(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uz(e,t,n,r){r.debug;var i=sz({},n);return e&&el(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function cz(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:Fm).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(C){return C}:typeof e.serialize=="function"?l=e.serialize:l=dz;var s=e.writeFailHandler||null,u={},d={},c=[],y=null,f=null,m=function(C){Object.keys(C).forEach(function(T){p(T)&&u[T]!==C[T]&&c.indexOf(T)===-1&&c.push(T)}),Object.keys(u).forEach(function(T){C[T]===void 0&&p(T)&&c.indexOf(T)===-1&&u[T]!==void 0&&c.push(T)}),y===null&&(y=setInterval(v,i)),u=C};function v(){if(c.length===0){y&&clearInterval(y),y=null;return}var S=c.shift(),C=r.reduce(function(T,_){return _.in(T,S,u)},u[S]);if(C!==void 0)try{d[S]=l(C)}catch(T){console.error("redux-persist/createPersistoid: error serializing state",T)}else delete d[S];c.length===0&&w()}function w(){Object.keys(d).forEach(function(S){u[S]===void 0&&delete d[S]}),f=a.setItem(o,l(d)).catch(g)}function p(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function g(S){s&&s(S)}var x=function(){for(;c.length!==0;)v();return f||Promise.resolve()};return{update:m,flush:x}}function dz(e){return JSON.stringify(e)}function fz(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Fm).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=pz,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,d){return d.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function pz(e){return JSON.parse(e)}function hz(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Fm).concat(e.key);return t.removeItem(n,mz)}function mz(e){}function j1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?j1(n,!0).forEach(function(r){gz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gz(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vz(e,t){if(e==null)return{};var n=yz(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yz(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var xz=5e3;function s_(e,t){var n=e.version!==void 0?e.version:az;e.debug;var r=e.stateReconciler===void 0?uz:e.stateReconciler,i=e.getStoredState||fz,o=e.timeout!==void 0?e.timeout:xz,a=null,l=!1,s=!0,u=function(c){return c._persist.rehydrated&&a&&!s&&a.update(c),c};return function(d,c){var y=d||{},f=y._persist,m=vz(y,["_persist"]),v=m;if(c.type===i_){var w=!1,p=function(E,L){w||(c.rehydrate(e.key,E,L),w=!0)};if(o&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=cz(e)),f)return On({},t(v,c),{_persist:f});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),i(e).then(function(_){var E=e.migrate||function(L,D){return Promise.resolve(L)};E(_,n).then(function(L){p(L)},function(L){p(void 0,L)})},function(_){p(void 0,_)}),On({},t(v,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===o_)return l=!0,c.result(hz(e)),On({},t(v,c),{_persist:f});if(c.type===n_)return c.result(a&&a.flush()),On({},t(v,c),{_persist:f});if(c.type===r_)s=!0;else if(c.type===Nm){if(l)return On({},v,{_persist:On({},f,{rehydrated:!0})});if(c.key===e.key){var g=t(v,c),x=c.payload,S=r!==!1&&x!==void 0?r(x,d,g,e):g,C=On({},S,{_persist:On({},f,{rehydrated:!0})});return u(C)}}}if(!f)return t(d,c);var T=t(v,c);return T===v?d:u(On({},T,{_persist:f}))}}function $1(e){return Sz(e)||wz(e)||bz()}function bz(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function wz(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function Sz(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function I1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ip(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?I1(n,!0).forEach(function(r){_z(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l_={registry:[],bootstrapped:!1},Cz=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a_:return Ip({},t,{registry:[].concat($1(t.registry),[n.key])});case Nm:var r=t.registry.indexOf(n.key),i=$1(t.registry);return i.splice(r,1),Ip({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function Ez(e,t,n){var r=n||!1,i=Yh(Cz,l_,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:a_,key:u})},a=function(u,d,c){var y={type:Nm,payload:d,err:c,key:u};e.dispatch(y),i.dispatch(y),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Ip({},i,{purge:function(){var u=[];return e.dispatch({type:o_,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:n_,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:r_})},persist:function(){e.dispatch({type:i_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var zm={},Bm={};Bm.__esModule=!0;Bm.default=Pz;function tl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?tl=function(n){return typeof n}:tl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},tl(e)}function Gd(){}var kz={getItem:Gd,setItem:Gd,removeItem:Gd};function Tz(e){if((typeof self>"u"?"undefined":tl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function Pz(e){var t="".concat(e,"Storage");return Tz(t)?self[t]:kz}zm.__esModule=!0;zm.default=jz;var Oz=Mz(Bm);function Mz(e){return e&&e.__esModule?e:{default:e}}function jz(e){var t=(0,Oz.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Vm=void 0,$z=Iz(zm);function Iz(e){return e&&e.__esModule?e:{default:e}}var Dz=(0,$z.default)("local");Vm=Dz;const Lz={key:"cart",storage:Vm},Az={key:"favorites",storage:Vm},Rz=s_(Lz,S4),Fz=s_(Az,fD),u_=a4({reducer:{cart:Rz,favorites:Fz},middleware:e=>e({serializableCheck:!1})});Ez(u_);Zd.createRoot(document.getElementById("root")).render(h.jsx(TP,{store:u_,children:h.jsx(q.StrictMode,{children:h.jsx(MC,{basename:"/Didiv/",children:h.jsx(oz,{})})})}));
