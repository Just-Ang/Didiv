function E_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ba(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function $t(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Cx={exports:{}},xc={},_x={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),T_=Symbol.for("react.portal"),P_=Symbol.for("react.fragment"),j_=Symbol.for("react.strict_mode"),O_=Symbol.for("react.profiler"),$_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),I_=Symbol.for("react.forward_ref"),D_=Symbol.for("react.suspense"),L_=Symbol.for("react.memo"),A_=Symbol.for("react.lazy"),mg=Symbol.iterator;function R_(e){return e===null||typeof e!="object"?null:(e=mg&&e[mg]||e["@@iterator"],typeof e=="function"?e:null)}var kx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ex=Object.assign,Tx={};function uo(e,t,n){this.props=e,this.context=t,this.refs=Tx,this.updater=n||kx}uo.prototype.isReactComponent={};uo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};uo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Px(){}Px.prototype=uo.prototype;function nh(e,t,n){this.props=e,this.context=t,this.refs=Tx,this.updater=n||kx}var rh=nh.prototype=new Px;rh.constructor=nh;Ex(rh,uo.prototype);rh.isPureReactComponent=!0;var gg=Array.isArray,jx=Object.prototype.hasOwnProperty,ih={current:null},Ox={key:!0,ref:!0,__self:!0,__source:!0};function $x(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)jx.call(t,r)&&!Ox.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Va,type:e,key:o,ref:a,props:i,_owner:ih.current}}function z_(e,t){return{$$typeof:Va,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Va}function F_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vg=/\/+/g;function Wu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?F_(""+e.key):t.toString(36)}function Bs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Va:case T_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Wu(a,0):r,gg(i)?(n="",e!=null&&(n=e.replace(vg,"$&/")+"/"),Bs(i,t,n,"",function(c){return c})):i!=null&&(oh(i)&&(i=z_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(vg,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",gg(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Wu(o,l);a+=Bs(o,t,n,s,i)}else if(s=R_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Wu(o,l++),a+=Bs(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function as(e,t,n){if(e==null)return e;var r=[],i=0;return Bs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function N_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xt={current:null},Vs={transition:null},B_={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:Vs,ReactCurrentOwner:ih};re.Children={map:as,forEach:function(e,t,n){as(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return as(e,function(){t++}),t},toArray:function(e){return as(e,function(t){return t})||[]},only:function(e){if(!oh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=uo;re.Fragment=P_;re.Profiler=O_;re.PureComponent=nh;re.StrictMode=j_;re.Suspense=D_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ex({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ih.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)jx.call(t,s)&&!Ox.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Va,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:M_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$_,_context:e},e.Consumer=e};re.createElement=$x;re.createFactory=function(e){var t=$x.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:I_,render:e}};re.isValidElement=oh;re.lazy=function(e){return{$$typeof:A_,_payload:{_status:-1,_result:e},_init:N_}};re.memo=function(e,t){return{$$typeof:L_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Vs.transition;Vs.transition={};try{e()}finally{Vs.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return xt.current.useCallback(e,t)};re.useContext=function(e){return xt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return xt.current.useDeferredValue(e)};re.useEffect=function(e,t){return xt.current.useEffect(e,t)};re.useId=function(){return xt.current.useId()};re.useImperativeHandle=function(e,t,n){return xt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return xt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return xt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return xt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return xt.current.useReducer(e,t,n)};re.useRef=function(e){return xt.current.useRef(e)};re.useState=function(e){return xt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return xt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return xt.current.useTransition()};re.version="18.2.0";_x.exports=re;var y=_x.exports;const Q=Ba(y),vf=E_({__proto__:null,default:Q},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_=y,U_=Symbol.for("react.element"),W_=Symbol.for("react.fragment"),H_=Object.prototype.hasOwnProperty,G_=V_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q_={key:!0,ref:!0,__self:!0,__source:!0};function Mx(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)H_.call(t,r)&&!q_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:U_,type:e,key:o,ref:a,props:i,_owner:G_.current}}xc.Fragment=W_;xc.jsx=Mx;xc.jsxs=Mx;Cx.exports=xc;var u=Cx.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pa.apply(this,arguments)}var fr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(fr||(fr={}));const xg="popstate";function Y_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return xf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ml(i)}return K_(t,n,null,e)}function Me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ah(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function X_(){return Math.random().toString(36).substr(2,8)}function yg(e,t){return{usr:e.state,key:e.key,idx:t}}function xf(e,t,n,r){return n===void 0&&(n=null),pa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fo(t):t,{state:n,key:t&&t.key||r||X_()})}function ml(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function fo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function K_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=fr.Pop,s=null,c=d();c==null&&(c=0,a.replaceState(pa({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=fr.Pop;let w=d(),h=w==null?null:w-c;c=w,s&&s({action:l,location:x.location,delta:h})}function v(w,h){l=fr.Push;let g=xf(x.location,w,h);n&&n(g,w),c=d()+1;let b=yg(g,c),S=x.createHref(g);try{a.pushState(b,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(S)}o&&s&&s({action:l,location:x.location,delta:1})}function m(w,h){l=fr.Replace;let g=xf(x.location,w,h);n&&n(g,w),c=d();let b=yg(g,c),S=x.createHref(g);a.replaceState(b,"",S),o&&s&&s({action:l,location:x.location,delta:0})}function p(w){let h=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof w=="string"?w:ml(w);return Me(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let x={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(xg,f),s=w,()=>{i.removeEventListener(xg,f),s=null}},createHref(w){return t(i,w)},createURL:p,encodeLocation(w){let h=p(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:v,replace:m,go(w){return a.go(w)}};return x}var bg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bg||(bg={}));function Q_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?fo(t):t,i=sh(r.pathname||"/",n);if(i==null)return null;let o=Ix(e);Z_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=sk(o[l],uk(i));return a}function Ix(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Me(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=vr([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(Me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ix(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:ok(c,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Dx(o.path))i(o,a,s)}),t}function Dx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Dx(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Z_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ak(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J_=/^:\w+$/,ek=3,tk=2,nk=1,rk=10,ik=-2,wg=e=>e==="*";function ok(e,t){let n=e.split("/"),r=n.length;return n.some(wg)&&(r+=ik),t&&(r+=tk),n.filter(i=>!wg(i)).reduce((i,o)=>i+(J_.test(o)?ek:o===""?nk:rk),r)}function ak(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function sk(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=lk({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!d)return null;Object.assign(r,d.params);let f=l.route;o.push({params:r,pathname:vr([i,d.pathname]),pathnameBase:hk(vr([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=vr([i,d.pathnameBase]))}return o}function lk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ck(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{if(d==="*"){let v=l[f]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return c[d]=dk(l[f]||"",d),c},{}),pathname:o,pathnameBase:a,pattern:e}}function ck(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ah(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function uk(e){try{return decodeURI(e)}catch(t){return ah(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dk(e,t){try{return decodeURIComponent(e)}catch(n){return ah(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function sh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?fo(e):e;return{pathname:n?n.startsWith("/")?n:pk(n,t):t,search:mk(r),hash:gk(i)}}function pk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ch(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=fo(e):(i=pa({},e),Me(!i.pathname||!i.pathname.includes("?"),Hu("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),Hu("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),Hu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let f=t.length-1;if(a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),f-=1;i.pathname=v.join("/")}l=f>=0?t[f]:"/"}let s=fk(i,l),c=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const vr=e=>e.join("/").replace(/\/\/+/g,"/"),hk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Lx=["post","put","patch","delete"];new Set(Lx);const xk=["get",...Lx];new Set(xk);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gl.apply(this,arguments)}const uh=y.createContext(null),Ax=y.createContext(null),si=y.createContext(null),yc=y.createContext(null),In=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Rx=y.createContext(null);function yk(e,t){let{relative:n}=t===void 0?{}:t;po()||Me(!1);let{basename:r,navigator:i}=y.useContext(si),{hash:o,pathname:a,search:l}=dh(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:vr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function po(){return y.useContext(yc)!=null}function Dn(){return po()||Me(!1),y.useContext(yc).location}function zx(e){y.useContext(si).static||y.useLayoutEffect(e)}function yt(){let{isDataRoute:e}=y.useContext(In);return e?Dk():bk()}function bk(){po()||Me(!1);let e=y.useContext(uh),{basename:t,navigator:n}=y.useContext(si),{matches:r}=y.useContext(In),{pathname:i}=Dn(),o=JSON.stringify(lh(r).map(s=>s.pathnameBase)),a=y.useRef(!1);return zx(()=>{a.current=!0}),y.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=ch(s,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:vr([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,o,i,e])}const wk=y.createContext(null);function Sk(e){let t=y.useContext(In).outlet;return t&&y.createElement(wk.Provider,{value:e},t)}function Fx(){let{matches:e}=y.useContext(In),t=e[e.length-1];return t?t.params:{}}function dh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=y.useContext(In),{pathname:i}=Dn(),o=JSON.stringify(lh(r).map(a=>a.pathnameBase));return y.useMemo(()=>ch(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Ck(e,t){return _k(e,t)}function _k(e,t,n){po()||Me(!1);let{navigator:r}=y.useContext(si),{matches:i}=y.useContext(In),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Dn(),c;if(t){var d;let x=typeof t=="string"?fo(t):t;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||Me(!1),c=x}else c=s;let f=c.pathname||"/",v=l==="/"?f:f.slice(l.length)||"/",m=Q_(e,{pathname:v}),p=jk(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:vr([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:vr([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&p?y.createElement(yc.Provider,{value:{location:gl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:fr.Pop}},p):p}function kk(){let e=Ik(),t=vk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:i},n):null,o)}const Ek=y.createElement(kk,null);class Tk extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?y.createElement(In.Provider,{value:this.props.routeContext},y.createElement(Rx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Pk(e){let{routeContext:t,match:n,children:r}=e,i=y.useContext(uh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(In.Provider,{value:t},r)}function jk(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Me(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,c)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,f=null;n&&(f=s.route.errorElement||Ek);let v=t.concat(o.slice(0,c+1)),m=()=>{let p;return d?p=f:s.route.Component?p=y.createElement(s.route.Component,null):s.route.element?p=s.route.element:p=l,y.createElement(Pk,{match:s,routeContext:{outlet:l,matches:v,isDataRoute:n!=null},children:p})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?y.createElement(Tk,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var Nx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Nx||{}),vl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vl||{});function Ok(e){let t=y.useContext(uh);return t||Me(!1),t}function $k(e){let t=y.useContext(Ax);return t||Me(!1),t}function Mk(e){let t=y.useContext(In);return t||Me(!1),t}function Bx(e){let t=Mk(),n=t.matches[t.matches.length-1];return n.route.id||Me(!1),n.route.id}function Ik(){var e;let t=y.useContext(Rx),n=$k(vl.UseRouteError),r=Bx(vl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Dk(){let{router:e}=Ok(Nx.UseNavigateStable),t=Bx(vl.UseNavigateStable),n=y.useRef(!1);return zx(()=>{n.current=!0}),y.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,gl({fromRouteId:t},o)))},[e,t])}function Lk(e){let{to:t,replace:n,state:r,relative:i}=e;po()||Me(!1);let{matches:o}=y.useContext(In),{pathname:a}=Dn(),l=yt(),s=ch(t,lh(o).map(d=>d.pathnameBase),a,i==="path"),c=JSON.stringify(s);return y.useEffect(()=>l(JSON.parse(c),{replace:n,state:r,relative:i}),[l,c,i,n,r]),null}function Vx(e){return Sk(e.context)}function De(e){Me(!1)}function Ak(e){let{basename:t="/",children:n=null,location:r,navigationType:i=fr.Pop,navigator:o,static:a=!1}=e;po()&&Me(!1);let l=t.replace(/^\/*/,"/"),s=y.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=fo(r));let{pathname:c="/",search:d="",hash:f="",state:v=null,key:m="default"}=r,p=y.useMemo(()=>{let x=sh(c,l);return x==null?null:{location:{pathname:x,search:d,hash:f,state:v,key:m},navigationType:i}},[l,c,d,f,v,m,i]);return p==null?null:y.createElement(si.Provider,{value:s},y.createElement(yc.Provider,{children:n,value:p}))}function Rk(e){let{children:t,location:n}=e;return Ck(yf(t),n)}new Promise(()=>{});function yf(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let o=[...t,i];if(r.type===y.Fragment){n.push.apply(n,yf(r.props.children,o));return}r.type!==De&&Me(!1),!r.props.index||!r.props.children||Me(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=yf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xl.apply(this,arguments)}function Ux(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Fk(e,t){return e.button===0&&(!t||t==="_self")&&!zk(e)}function bf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Nk(e,t){let n=bf(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const Bk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Vk=["aria-current","caseSensitive","className","end","style","to","children"],Uk="startTransition",Sg=vf[Uk];function Wk(e){let{basename:t,children:n,future:r,window:i}=e,o=y.useRef();o.current==null&&(o.current=Y_({window:i,v5Compat:!0}));let a=o.current,[l,s]=y.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},d=y.useCallback(f=>{c&&Sg?Sg(()=>s(f)):s(f)},[s,c]);return y.useLayoutEffect(()=>a.listen(d),[a,d]),y.createElement(Ak,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const Hk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=y.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:d}=t,f=Ux(t,Bk),{basename:v}=y.useContext(si),m,p=!1;if(typeof c=="string"&&Gk.test(c)&&(m=c,Hk))try{let g=new URL(window.location.href),b=c.startsWith("//")?new URL(g.protocol+c):new URL(c),S=sh(b.pathname,v);b.origin===g.origin&&S!=null?c=S+b.search+b.hash:p=!0}catch{}let x=yk(c,{relative:i}),w=qk(c,{replace:a,state:l,target:s,preventScrollReset:d,relative:i});function h(g){r&&r(g),g.defaultPrevented||w(g)}return y.createElement("a",xl({},f,{href:m||x,onClick:p||o?r:h,ref:n,target:s}))}),Wx=y.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,children:c}=t,d=Ux(t,Vk),f=dh(s,{relative:d.relative}),v=Dn(),m=y.useContext(Ax),{navigator:p}=y.useContext(si),x=p.encodeLocation?p.encodeLocation(f).pathname:f.pathname,w=v.pathname,h=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(w=w.toLowerCase(),h=h?h.toLowerCase():null,x=x.toLowerCase());let g=w===x||!a&&w.startsWith(x)&&w.charAt(x.length)==="/",b=h!=null&&(h===x||!a&&h.startsWith(x)&&h.charAt(x.length)==="/"),S=g?r:void 0,k;typeof o=="function"?k=o({isActive:g,isPending:b}):k=[o,g?"active":null,b?"pending":null].filter(Boolean).join(" ");let T=typeof l=="function"?l({isActive:g,isPending:b}):l;return y.createElement(Te,xl({},d,{"aria-current":S,className:k,ref:n,style:T,to:s}),typeof c=="function"?c({isActive:g,isPending:b}):c)});var Cg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Cg||(Cg={}));var _g;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_g||(_g={}));function qk(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=yt(),s=Dn(),c=dh(e,{relative:a});return y.useCallback(d=>{if(Fk(d,n)){d.preventDefault();let f=r!==void 0?r:ml(s)===ml(c);l(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}function Yk(e){let t=y.useRef(bf(e)),n=y.useRef(!1),r=Dn(),i=y.useMemo(()=>Nk(r.search,n.current?null:t.current),[r.search]),o=yt(),a=y.useCallback((l,s)=>{const c=bf(typeof l=="function"?l(i):l);n.current=!0,o("?"+c,s)},[o,i]);return[i,a]}var wf={},Hx={exports:{}},Ut={},Gx={exports:{}},qx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,O){var N=P.length;P.push(O);e:for(;0<N;){var B=N-1>>>1,F=P[B];if(0<i(F,O))P[B]=O,P[N]=F,N=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var O=P[0],N=P.pop();if(N!==O){P[0]=N;e:for(var B=0,F=P.length,V=F>>>1;B<V;){var H=2*(B+1)-1,G=P[H],W=H+1,q=P[W];if(0>i(G,N))W<F&&0>i(q,G)?(P[B]=q,P[W]=N,B=W):(P[B]=G,P[H]=N,B=H);else if(W<F&&0>i(q,N))P[B]=q,P[W]=N,B=W;else break e}}return O}function i(P,O){var N=P.sortIndex-O.sortIndex;return N!==0?N:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],d=1,f=null,v=3,m=!1,p=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(P){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=P)r(c),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(c)}}function S(P){if(x=!1,b(P),!p)if(n(s)!==null)p=!0,R(k);else{var O=n(c);O!==null&&z(S,O.startTime-P)}}function k(P,O){p=!1,x&&(x=!1,h(_),_=-1),m=!0;var N=v;try{for(b(O),f=n(s);f!==null&&(!(f.expirationTime>O)||P&&!L());){var B=f.callback;if(typeof B=="function"){f.callback=null,v=f.priorityLevel;var F=B(f.expirationTime<=O);O=e.unstable_now(),typeof F=="function"?f.callback=F:f===n(s)&&r(s),b(O)}else r(s);f=n(s)}if(f!==null)var V=!0;else{var H=n(c);H!==null&&z(S,H.startTime-O),V=!1}return V}finally{f=null,v=N,m=!1}}var T=!1,E=null,_=-1,$=5,M=-1;function L(){return!(e.unstable_now()-M<$)}function D(){if(E!==null){var P=e.unstable_now();M=P;var O=!0;try{O=E(!0,P)}finally{O?j():(T=!1,E=null)}}else T=!1}var j;if(typeof g=="function")j=function(){g(D)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,I=A.port2;A.port1.onmessage=D,j=function(){I.postMessage(null)}}else j=function(){w(D,0)};function R(P){E=P,T||(T=!0,j())}function z(P,O){_=w(function(){P(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){p||m||(p=!0,R(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(v){case 1:case 2:case 3:var O=3;break;default:O=v}var N=v;v=O;try{return P()}finally{v=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var N=v;v=P;try{return O()}finally{v=N}},e.unstable_scheduleCallback=function(P,O,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,P){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=N+F,P={id:d++,callback:O,priorityLevel:P,startTime:N,expirationTime:F,sortIndex:-1},N>B?(P.sortIndex=N,t(c,P),n(s)===null&&P===n(c)&&(x?(h(_),_=-1):x=!0,z(S,N-B))):(P.sortIndex=F,t(s,P),p||m||(p=!0,R(k))),P},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(P){var O=v;return function(){var N=v;v=O;try{return P.apply(this,arguments)}finally{v=N}}}})(qx);Gx.exports=qx;var Xk=Gx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx=y,Bt=Xk;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xx=new Set,ha={};function li(e,t){Yi(e,t),Yi(e+"Capture",t)}function Yi(e,t){for(ha[e]=t,e=0;e<t.length;e++)Xx.add(t[e])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=Object.prototype.hasOwnProperty,Kk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kg={},Eg={};function Qk(e){return Sf.call(Eg,e)?!0:Sf.call(kg,e)?!1:Kk.test(e)?Eg[e]=!0:(kg[e]=!0,!1)}function Zk(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jk(e,t,n,r){if(t===null||typeof t>"u"||Zk(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function bt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var fh=/[\-:]([a-z])/g;function ph(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fh,ph);nt[t]=new bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fh,ph);nt[t]=new bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fh,ph);nt[t]=new bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function hh(e,t,n,r){var i=nt.hasOwnProperty(t)?nt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jk(t,n,i,r)&&(n=null),r||i===null?Qk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tr=Yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ss=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),mh=Symbol.for("react.strict_mode"),Cf=Symbol.for("react.profiler"),Kx=Symbol.for("react.provider"),Qx=Symbol.for("react.context"),gh=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),kf=Symbol.for("react.suspense_list"),vh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Zx=Symbol.for("react.offscreen"),Tg=Symbol.iterator;function jo(e){return e===null||typeof e!="object"?null:(e=Tg&&e[Tg]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Gu;function Ho(e){if(Gu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gu=t&&t[1]||""}return`
`+Gu+e}var qu=!1;function Yu(e,t){if(!e||qu)return"";qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{qu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ho(e):""}function eE(e){switch(e.tag){case 5:return Ho(e.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return e=Yu(e.type,!1),e;case 11:return e=Yu(e.type.render,!1),e;case 1:return e=Yu(e.type,!0),e;default:return""}}function Ef(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pi:return"Fragment";case Ti:return"Portal";case Cf:return"Profiler";case mh:return"StrictMode";case _f:return"Suspense";case kf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qx:return(e.displayName||"Context")+".Consumer";case Kx:return(e._context.displayName||"Context")+".Provider";case gh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vh:return t=e.displayName||null,t!==null?t:Ef(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return Ef(e(t))}catch{}}return null}function tE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(t);case 8:return t===mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nE(e){var t=Jx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ls(e){e._valueTracker||(e._valueTracker=nE(e))}function ey(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jx(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tf(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ty(e,t){t=t.checked,t!=null&&hh(e,"checked",t,!1)}function Pf(e,t){ty(e,t);var n=Tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jf(e,t.type,n):t.hasOwnProperty("defaultValue")&&jf(e,t.type,Tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jf(e,t,n){(t!=="number"||yl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Go=Array.isArray;function Fi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Of(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Og(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(Go(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tr(n)}}function ny(e,t){var n=Tr(t.value),r=Tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $g(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ry(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $f(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ry(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cs,iy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cs=cs||document.createElement("div"),cs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rE=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(e){rE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ea[t]=ea[e]})});function oy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ea.hasOwnProperty(e)&&ea[e]?(""+t).trim():t+"px"}function ay(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=oy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var iE=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(e,t){if(t){if(iE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function If(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Df=null;function xh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lf=null,Ni=null,Bi=null;function Mg(e){if(e=Ha(e)){if(typeof Lf!="function")throw Error(U(280));var t=e.stateNode;t&&(t=_c(t),Lf(e.stateNode,e.type,t))}}function sy(e){Ni?Bi?Bi.push(e):Bi=[e]:Ni=e}function ly(){if(Ni){var e=Ni,t=Bi;if(Bi=Ni=null,Mg(e),t)for(e=0;e<t.length;e++)Mg(t[e])}}function cy(e,t){return e(t)}function uy(){}var Xu=!1;function dy(e,t,n){if(Xu)return e(t,n);Xu=!0;try{return cy(e,t,n)}finally{Xu=!1,(Ni!==null||Bi!==null)&&(uy(),ly())}}function ga(e,t){var n=e.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var Af=!1;if(Xn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Af=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Af=!1}function oE(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ta=!1,bl=null,wl=!1,Rf=null,aE={onError:function(e){ta=!0,bl=e}};function sE(e,t,n,r,i,o,a,l,s){ta=!1,bl=null,oE.apply(aE,arguments)}function lE(e,t,n,r,i,o,a,l,s){if(sE.apply(this,arguments),ta){if(ta){var c=bl;ta=!1,bl=null}else throw Error(U(198));wl||(wl=!0,Rf=c)}}function ci(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ig(e){if(ci(e)!==e)throw Error(U(188))}function cE(e){var t=e.alternate;if(!t){if(t=ci(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ig(i),e;if(o===r)return Ig(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function py(e){return e=cE(e),e!==null?hy(e):null}function hy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hy(e);if(t!==null)return t;e=e.sibling}return null}var my=Bt.unstable_scheduleCallback,Dg=Bt.unstable_cancelCallback,uE=Bt.unstable_shouldYield,dE=Bt.unstable_requestPaint,$e=Bt.unstable_now,fE=Bt.unstable_getCurrentPriorityLevel,yh=Bt.unstable_ImmediatePriority,gy=Bt.unstable_UserBlockingPriority,Sl=Bt.unstable_NormalPriority,pE=Bt.unstable_LowPriority,vy=Bt.unstable_IdlePriority,bc=null,Tn=null;function hE(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(bc,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:vE,mE=Math.log,gE=Math.LN2;function vE(e){return e>>>=0,e===0?32:31-(mE(e)/gE|0)|0}var us=64,ds=4194304;function qo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=qo(l):(o&=a,o!==0&&(r=qo(o)))}else a=n&~i,a!==0?r=qo(a):o!==0&&(r=qo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dn(t),i=1<<n,r|=e[n],t&=~i;return r}function xE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-dn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=xE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function zf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xy(){var e=us;return us<<=1,!(us&4194240)&&(us=64),e}function Ku(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ua(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dn(t),e[t]=n}function bE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function bh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function yy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var by,wh,wy,Sy,Cy,Ff=!1,fs=[],xr=null,yr=null,br=null,va=new Map,xa=new Map,ur=[],wE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lg(e,t){switch(e){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":va.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(t.pointerId)}}function $o(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ha(t),t!==null&&wh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function SE(e,t,n,r,i){switch(t){case"focusin":return xr=$o(xr,e,t,n,r,i),!0;case"dragenter":return yr=$o(yr,e,t,n,r,i),!0;case"mouseover":return br=$o(br,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return va.set(o,$o(va.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xa.set(o,$o(xa.get(o)||null,e,t,n,r,i)),!0}return!1}function _y(e){var t=Ur(e.target);if(t!==null){var n=ci(t);if(n!==null){if(t=n.tag,t===13){if(t=fy(n),t!==null){e.blockedOn=t,Cy(e.priority,function(){wy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Df=r,n.target.dispatchEvent(r),Df=null}else return t=Ha(n),t!==null&&wh(t),e.blockedOn=n,!1;t.shift()}return!0}function Ag(e,t,n){Us(e)&&n.delete(t)}function CE(){Ff=!1,xr!==null&&Us(xr)&&(xr=null),yr!==null&&Us(yr)&&(yr=null),br!==null&&Us(br)&&(br=null),va.forEach(Ag),xa.forEach(Ag)}function Mo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ff||(Ff=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,CE)))}function ya(e){function t(i){return Mo(i,e)}if(0<fs.length){Mo(fs[0],e);for(var n=1;n<fs.length;n++){var r=fs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xr!==null&&Mo(xr,e),yr!==null&&Mo(yr,e),br!==null&&Mo(br,e),va.forEach(t),xa.forEach(t),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)_y(n),n.blockedOn===null&&ur.shift()}var Vi=tr.ReactCurrentBatchConfig,_l=!0;function _E(e,t,n,r){var i=ge,o=Vi.transition;Vi.transition=null;try{ge=1,Sh(e,t,n,r)}finally{ge=i,Vi.transition=o}}function kE(e,t,n,r){var i=ge,o=Vi.transition;Vi.transition=null;try{ge=4,Sh(e,t,n,r)}finally{ge=i,Vi.transition=o}}function Sh(e,t,n,r){if(_l){var i=Nf(e,t,n,r);if(i===null)ad(e,t,r,kl,n),Lg(e,r);else if(SE(i,e,t,n,r))r.stopPropagation();else if(Lg(e,r),t&4&&-1<wE.indexOf(e)){for(;i!==null;){var o=Ha(i);if(o!==null&&by(o),o=Nf(e,t,n,r),o===null&&ad(e,t,r,kl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ad(e,t,r,null,n)}}var kl=null;function Nf(e,t,n,r){if(kl=null,e=xh(r),e=Ur(e),e!==null)if(t=ci(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return kl=e,null}function ky(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fE()){case yh:return 1;case gy:return 4;case Sl:case pE:return 16;case vy:return 536870912;default:return 16}default:return 16}}var pr=null,Ch=null,Ws=null;function Ey(){if(Ws)return Ws;var e,t=Ch,n=t.length,r,i="value"in pr?pr.value:pr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ws=i.slice(e,1<r?1-r:void 0)}function Hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ps(){return!0}function Rg(){return!1}function Wt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ps:Rg,this.isPropagationStopped=Rg,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),t}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=Wt(ho),Wa=Pe({},ho,{view:0,detail:0}),EE=Wt(Wa),Qu,Zu,Io,wc=Pe({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Io&&(Io&&e.type==="mousemove"?(Qu=e.screenX-Io.screenX,Zu=e.screenY-Io.screenY):Zu=Qu=0,Io=e),Qu)},movementY:function(e){return"movementY"in e?e.movementY:Zu}}),zg=Wt(wc),TE=Pe({},wc,{dataTransfer:0}),PE=Wt(TE),jE=Pe({},Wa,{relatedTarget:0}),Ju=Wt(jE),OE=Pe({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),$E=Wt(OE),ME=Pe({},ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),IE=Wt(ME),DE=Pe({},ho,{data:0}),Fg=Wt(DE),LE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=RE[e])?!!t[e]:!1}function kh(){return zE}var FE=Pe({},Wa,{key:function(e){if(e.key){var t=LE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?AE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kh,charCode:function(e){return e.type==="keypress"?Hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),NE=Wt(FE),BE=Pe({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ng=Wt(BE),VE=Pe({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kh}),UE=Wt(VE),WE=Pe({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),HE=Wt(WE),GE=Pe({},wc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qE=Wt(GE),YE=[9,13,27,32],Eh=Xn&&"CompositionEvent"in window,na=null;Xn&&"documentMode"in document&&(na=document.documentMode);var XE=Xn&&"TextEvent"in window&&!na,Ty=Xn&&(!Eh||na&&8<na&&11>=na),Bg=String.fromCharCode(32),Vg=!1;function Py(e,t){switch(e){case"keyup":return YE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ji=!1;function KE(e,t){switch(e){case"compositionend":return jy(t);case"keypress":return t.which!==32?null:(Vg=!0,Bg);case"textInput":return e=t.data,e===Bg&&Vg?null:e;default:return null}}function QE(e,t){if(ji)return e==="compositionend"||!Eh&&Py(e,t)?(e=Ey(),Ws=Ch=pr=null,ji=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ty&&t.locale!=="ko"?null:t.data;default:return null}}var ZE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ug(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ZE[e.type]:t==="textarea"}function Oy(e,t,n,r){sy(r),t=El(t,"onChange"),0<t.length&&(n=new _h("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ra=null,ba=null;function JE(e){By(e,0)}function Sc(e){var t=Mi(e);if(ey(t))return e}function eT(e,t){if(e==="change")return t}var $y=!1;if(Xn){var ed;if(Xn){var td="oninput"in document;if(!td){var Wg=document.createElement("div");Wg.setAttribute("oninput","return;"),td=typeof Wg.oninput=="function"}ed=td}else ed=!1;$y=ed&&(!document.documentMode||9<document.documentMode)}function Hg(){ra&&(ra.detachEvent("onpropertychange",My),ba=ra=null)}function My(e){if(e.propertyName==="value"&&Sc(ba)){var t=[];Oy(t,ba,e,xh(e)),dy(JE,t)}}function tT(e,t,n){e==="focusin"?(Hg(),ra=t,ba=n,ra.attachEvent("onpropertychange",My)):e==="focusout"&&Hg()}function nT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sc(ba)}function rT(e,t){if(e==="click")return Sc(t)}function iT(e,t){if(e==="input"||e==="change")return Sc(t)}function oT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:oT;function wa(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sf.call(t,i)||!gn(e[i],t[i]))return!1}return!0}function Gg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qg(e,t){var n=Gg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gg(n)}}function Iy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Iy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dy(){for(var e=window,t=yl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yl(e.document)}return t}function Th(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function aT(e){var t=Dy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Iy(n.ownerDocument.documentElement,n)){if(r!==null&&Th(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=qg(n,o);var a=qg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sT=Xn&&"documentMode"in document&&11>=document.documentMode,Oi=null,Bf=null,ia=null,Vf=!1;function Yg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vf||Oi==null||Oi!==yl(r)||(r=Oi,"selectionStart"in r&&Th(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&wa(ia,r)||(ia=r,r=El(Bf,"onSelect"),0<r.length&&(t=new _h("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Oi)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $i={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},nd={},Ly={};Xn&&(Ly=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function Cc(e){if(nd[e])return nd[e];if(!$i[e])return e;var t=$i[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ly)return nd[e]=t[n];return e}var Ay=Cc("animationend"),Ry=Cc("animationiteration"),zy=Cc("animationstart"),Fy=Cc("transitionend"),Ny=new Map,Xg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){Ny.set(e,t),li(t,[e])}for(var rd=0;rd<Xg.length;rd++){var id=Xg[rd],lT=id.toLowerCase(),cT=id[0].toUpperCase()+id.slice(1);Or(lT,"on"+cT)}Or(Ay,"onAnimationEnd");Or(Ry,"onAnimationIteration");Or(zy,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(Fy,"onTransitionEnd");Yi("onMouseEnter",["mouseout","mouseover"]);Yi("onMouseLeave",["mouseout","mouseover"]);Yi("onPointerEnter",["pointerout","pointerover"]);Yi("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function Kg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,lE(r,t,void 0,e),e.currentTarget=null}function By(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Kg(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Kg(i,l,c),o=s}}}if(wl)throw e=Rf,wl=!1,Rf=null,e}function ye(e,t){var n=t[qf];n===void 0&&(n=t[qf]=new Set);var r=e+"__bubble";n.has(r)||(Vy(t,e,2,!1),n.add(r))}function od(e,t,n){var r=0;t&&(r|=4),Vy(n,e,r,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function Sa(e){if(!e[ms]){e[ms]=!0,Xx.forEach(function(n){n!=="selectionchange"&&(uT.has(n)||od(n,!1,e),od(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,od("selectionchange",!1,t))}}function Vy(e,t,n,r){switch(ky(t)){case 1:var i=_E;break;case 4:i=kE;break;default:i=Sh}n=i.bind(null,t,n,e),i=void 0,!Af||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ad(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Ur(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}dy(function(){var c=o,d=xh(n),f=[];e:{var v=Ny.get(e);if(v!==void 0){var m=_h,p=e;switch(e){case"keypress":if(Hs(n)===0)break e;case"keydown":case"keyup":m=NE;break;case"focusin":p="focus",m=Ju;break;case"focusout":p="blur",m=Ju;break;case"beforeblur":case"afterblur":m=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=PE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=UE;break;case Ay:case Ry:case zy:m=$E;break;case Fy:m=HE;break;case"scroll":m=EE;break;case"wheel":m=qE;break;case"copy":case"cut":case"paste":m=IE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ng}var x=(t&4)!==0,w=!x&&e==="scroll",h=x?v!==null?v+"Capture":null:v;x=[];for(var g=c,b;g!==null;){b=g;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,h!==null&&(S=ga(g,h),S!=null&&x.push(Ca(g,S,b)))),w)break;g=g.return}0<x.length&&(v=new m(v,p,null,n,d),f.push({event:v,listeners:x}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",v&&n!==Df&&(p=n.relatedTarget||n.fromElement)&&(Ur(p)||p[Kn]))break e;if((m||v)&&(v=d.window===d?d:(v=d.ownerDocument)?v.defaultView||v.parentWindow:window,m?(p=n.relatedTarget||n.toElement,m=c,p=p?Ur(p):null,p!==null&&(w=ci(p),p!==w||p.tag!==5&&p.tag!==6)&&(p=null)):(m=null,p=c),m!==p)){if(x=zg,S="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ng,S="onPointerLeave",h="onPointerEnter",g="pointer"),w=m==null?v:Mi(m),b=p==null?v:Mi(p),v=new x(S,g+"leave",m,n,d),v.target=w,v.relatedTarget=b,S=null,Ur(d)===c&&(x=new x(h,g+"enter",p,n,d),x.target=b,x.relatedTarget=w,S=x),w=S,m&&p)t:{for(x=m,h=p,g=0,b=x;b;b=hi(b))g++;for(b=0,S=h;S;S=hi(S))b++;for(;0<g-b;)x=hi(x),g--;for(;0<b-g;)h=hi(h),b--;for(;g--;){if(x===h||h!==null&&x===h.alternate)break t;x=hi(x),h=hi(h)}x=null}else x=null;m!==null&&Qg(f,v,m,x,!1),p!==null&&w!==null&&Qg(f,w,p,x,!0)}}e:{if(v=c?Mi(c):window,m=v.nodeName&&v.nodeName.toLowerCase(),m==="select"||m==="input"&&v.type==="file")var k=eT;else if(Ug(v))if($y)k=iT;else{k=nT;var T=tT}else(m=v.nodeName)&&m.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(k=rT);if(k&&(k=k(e,c))){Oy(f,k,n,d);break e}T&&T(e,v,c),e==="focusout"&&(T=v._wrapperState)&&T.controlled&&v.type==="number"&&jf(v,"number",v.value)}switch(T=c?Mi(c):window,e){case"focusin":(Ug(T)||T.contentEditable==="true")&&(Oi=T,Bf=c,ia=null);break;case"focusout":ia=Bf=Oi=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,Yg(f,n,d);break;case"selectionchange":if(sT)break;case"keydown":case"keyup":Yg(f,n,d)}var E;if(Eh)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ji?Py(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ty&&n.locale!=="ko"&&(ji||_!=="onCompositionStart"?_==="onCompositionEnd"&&ji&&(E=Ey()):(pr=d,Ch="value"in pr?pr.value:pr.textContent,ji=!0)),T=El(c,_),0<T.length&&(_=new Fg(_,e,null,n,d),f.push({event:_,listeners:T}),E?_.data=E:(E=jy(n),E!==null&&(_.data=E)))),(E=XE?KE(e,n):QE(e,n))&&(c=El(c,"onBeforeInput"),0<c.length&&(d=new Fg("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}By(f,t)})}function Ca(e,t,n){return{instance:e,listener:t,currentTarget:n}}function El(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ga(e,n),o!=null&&r.unshift(Ca(e,o,i)),o=ga(e,t),o!=null&&r.push(Ca(e,o,i))),e=e.return}return r}function hi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=ga(n,o),s!=null&&a.unshift(Ca(n,s,l))):i||(s=ga(n,o),s!=null&&a.push(Ca(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var dT=/\r\n?/g,fT=/\u0000|\uFFFD/g;function Zg(e){return(typeof e=="string"?e:""+e).replace(dT,`
`).replace(fT,"")}function gs(e,t,n){if(t=Zg(t),Zg(e)!==t&&n)throw Error(U(425))}function Tl(){}var Uf=null,Wf=null;function Hf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gf=typeof setTimeout=="function"?setTimeout:void 0,pT=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,hT=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(e){return Jg.resolve(null).then(e).catch(mT)}:Gf;function mT(e){setTimeout(function(){throw e})}function sd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ya(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ya(t)}function wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function e0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mo=Math.random().toString(36).slice(2),kn="__reactFiber$"+mo,_a="__reactProps$"+mo,Kn="__reactContainer$"+mo,qf="__reactEvents$"+mo,gT="__reactListeners$"+mo,vT="__reactHandles$"+mo;function Ur(e){var t=e[kn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kn]||n[kn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=e0(e);e!==null;){if(n=e[kn])return n;e=e0(e)}return t}e=n,n=e.parentNode}return null}function Ha(e){return e=e[kn]||e[Kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function _c(e){return e[_a]||null}var Yf=[],Ii=-1;function $r(e){return{current:e}}function we(e){0>Ii||(e.current=Yf[Ii],Yf[Ii]=null,Ii--)}function xe(e,t){Ii++,Yf[Ii]=e.current,e.current=t}var Pr={},ut=$r(Pr),Tt=$r(!1),Kr=Pr;function Xi(e,t){var n=e.type.contextTypes;if(!n)return Pr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(e){return e=e.childContextTypes,e!=null}function Pl(){we(Tt),we(ut)}function t0(e,t,n){if(ut.current!==Pr)throw Error(U(168));xe(ut,t),xe(Tt,n)}function Uy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,tE(e)||"Unknown",i));return Pe({},n,r)}function jl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pr,Kr=ut.current,xe(ut,e),xe(Tt,Tt.current),!0}function n0(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=Uy(e,t,Kr),r.__reactInternalMemoizedMergedChildContext=e,we(Tt),we(ut),xe(ut,e)):we(Tt),xe(Tt,n)}var Bn=null,kc=!1,ld=!1;function Wy(e){Bn===null?Bn=[e]:Bn.push(e)}function xT(e){kc=!0,Wy(e)}function Mr(){if(!ld&&Bn!==null){ld=!0;var e=0,t=ge;try{var n=Bn;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bn=null,kc=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(e+1)),my(yh,Mr),i}finally{ge=t,ld=!1}}return null}var Di=[],Li=0,Ol=null,$l=0,qt=[],Yt=0,Qr=null,Wn=1,Hn="";function Rr(e,t){Di[Li++]=$l,Di[Li++]=Ol,Ol=e,$l=t}function Hy(e,t,n){qt[Yt++]=Wn,qt[Yt++]=Hn,qt[Yt++]=Qr,Qr=e;var r=Wn;e=Hn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var o=32-dn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Wn=1<<32-dn(t)+i|n<<i|r,Hn=o+e}else Wn=1<<o|n<<i|r,Hn=e}function Ph(e){e.return!==null&&(Rr(e,1),Hy(e,1,0))}function jh(e){for(;e===Ol;)Ol=Di[--Li],Di[Li]=null,$l=Di[--Li],Di[Li]=null;for(;e===Qr;)Qr=qt[--Yt],qt[Yt]=null,Hn=qt[--Yt],qt[Yt]=null,Wn=qt[--Yt],qt[Yt]=null}var Ft=null,Rt=null,_e=!1,cn=null;function Gy(e,t){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function r0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ft=e,Rt=wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ft=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qr!==null?{id:Wn,overflow:Hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ft=e,Rt=null,!0):!1;default:return!1}}function Xf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kf(e){if(_e){var t=Rt;if(t){var n=t;if(!r0(e,t)){if(Xf(e))throw Error(U(418));t=wr(n.nextSibling);var r=Ft;t&&r0(e,t)?Gy(r,n):(e.flags=e.flags&-4097|2,_e=!1,Ft=e)}}else{if(Xf(e))throw Error(U(418));e.flags=e.flags&-4097|2,_e=!1,Ft=e}}}function i0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ft=e}function vs(e){if(e!==Ft)return!1;if(!_e)return i0(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hf(e.type,e.memoizedProps)),t&&(t=Rt)){if(Xf(e))throw qy(),Error(U(418));for(;t;)Gy(e,t),t=wr(t.nextSibling)}if(i0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=Ft?wr(e.stateNode.nextSibling):null;return!0}function qy(){for(var e=Rt;e;)e=wr(e.nextSibling)}function Ki(){Rt=Ft=null,_e=!1}function Oh(e){cn===null?cn=[e]:cn.push(e)}var yT=tr.ReactCurrentBatchConfig;function an(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ml=$r(null),Il=null,Ai=null,$h=null;function Mh(){$h=Ai=Il=null}function Ih(e){var t=Ml.current;we(Ml),e._currentValue=t}function Qf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ui(e,t){Il=e,$h=Ai=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function Qt(e){var t=e._currentValue;if($h!==e)if(e={context:e,memoizedValue:t,next:null},Ai===null){if(Il===null)throw Error(U(308));Ai=e,Il.dependencies={lanes:0,firstContext:e}}else Ai=Ai.next=e;return t}var Wr=null;function Dh(e){Wr===null?Wr=[e]:Wr.push(e)}function Yy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qn(e,r)}function Qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cr=!1;function Lh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qn(e,n)}return i=r.interleaved,i===null?(t.next=t,Dh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qn(e,n)}function Gs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bh(e,n)}}function o0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Dl(e,t,n,r){var i=e.updateQueue;cr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;a=0,d=c=s=null,l=o;do{var v=l.lane,m=l.eventTime;if((r&v)===v){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,x=l;switch(v=t,m=n,x.tag){case 1:if(p=x.payload,typeof p=="function"){f=p.call(m,f,v);break e}f=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=x.payload,v=typeof p=="function"?p.call(m,f,v):p,v==null)break e;f=Pe({},f,v);break e;case 2:cr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else m={eventTime:m,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=m,s=f):d=d.next=m,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(d===null&&(s=f),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Jr|=a,e.lanes=a,e.memoizedState=f}}function a0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Ky=new Yx.Component().refs;function Zf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ec={isMounted:function(e){return(e=e._reactInternals)?ci(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=_r(e),o=Gn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(fn(t,e,i,r),Gs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=_r(e),o=Gn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(fn(t,e,i,r),Gs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=_r(e),i=Gn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sr(e,i,r),t!==null&&(fn(t,e,r,n),Gs(t,e,r))}};function s0(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!wa(n,r)||!wa(i,o):!0}function Qy(e,t,n){var r=!1,i=Pr,o=t.contextType;return typeof o=="object"&&o!==null?o=Qt(o):(i=Pt(t)?Kr:ut.current,r=t.contextTypes,o=(r=r!=null)?Xi(e,i):Pr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ec,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function l0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function Jf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ky,Lh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Qt(o):(o=Pt(t)?Kr:ut.current,i.context=Xi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Zf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ec.enqueueReplaceState(i,i.state,null),Dl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Do(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Ky&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function xs(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function c0(e){var t=e._init;return t(e._payload)}function Zy(e){function t(h,g){if(e){var b=h.deletions;b===null?(h.deletions=[g],h.flags|=16):b.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function i(h,g){return h=kr(h,g),h.index=0,h.sibling=null,h}function o(h,g,b){return h.index=b,e?(b=h.alternate,b!==null?(b=b.index,b<g?(h.flags|=2,g):b):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,g,b,S){return g===null||g.tag!==6?(g=md(b,h.mode,S),g.return=h,g):(g=i(g,b),g.return=h,g)}function s(h,g,b,S){var k=b.type;return k===Pi?d(h,g,b.props.children,S,b.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===lr&&c0(k)===g.type)?(S=i(g,b.props),S.ref=Do(h,g,b),S.return=h,S):(S=Zs(b.type,b.key,b.props,null,h.mode,S),S.ref=Do(h,g,b),S.return=h,S)}function c(h,g,b,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=gd(b,h.mode,S),g.return=h,g):(g=i(g,b.children||[]),g.return=h,g)}function d(h,g,b,S,k){return g===null||g.tag!==7?(g=Yr(b,h.mode,S,k),g.return=h,g):(g=i(g,b),g.return=h,g)}function f(h,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=md(""+g,h.mode,b),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ss:return b=Zs(g.type,g.key,g.props,null,h.mode,b),b.ref=Do(h,null,g),b.return=h,b;case Ti:return g=gd(g,h.mode,b),g.return=h,g;case lr:var S=g._init;return f(h,S(g._payload),b)}if(Go(g)||jo(g))return g=Yr(g,h.mode,b,null),g.return=h,g;xs(h,g)}return null}function v(h,g,b,S){var k=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return k!==null?null:l(h,g,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ss:return b.key===k?s(h,g,b,S):null;case Ti:return b.key===k?c(h,g,b,S):null;case lr:return k=b._init,v(h,g,k(b._payload),S)}if(Go(b)||jo(b))return k!==null?null:d(h,g,b,S,null);xs(h,b)}return null}function m(h,g,b,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(b)||null,l(g,h,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ss:return h=h.get(S.key===null?b:S.key)||null,s(g,h,S,k);case Ti:return h=h.get(S.key===null?b:S.key)||null,c(g,h,S,k);case lr:var T=S._init;return m(h,g,b,T(S._payload),k)}if(Go(S)||jo(S))return h=h.get(b)||null,d(g,h,S,k,null);xs(g,S)}return null}function p(h,g,b,S){for(var k=null,T=null,E=g,_=g=0,$=null;E!==null&&_<b.length;_++){E.index>_?($=E,E=null):$=E.sibling;var M=v(h,E,b[_],S);if(M===null){E===null&&(E=$);break}e&&E&&M.alternate===null&&t(h,E),g=o(M,g,_),T===null?k=M:T.sibling=M,T=M,E=$}if(_===b.length)return n(h,E),_e&&Rr(h,_),k;if(E===null){for(;_<b.length;_++)E=f(h,b[_],S),E!==null&&(g=o(E,g,_),T===null?k=E:T.sibling=E,T=E);return _e&&Rr(h,_),k}for(E=r(h,E);_<b.length;_++)$=m(E,h,_,b[_],S),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?_:$.key),g=o($,g,_),T===null?k=$:T.sibling=$,T=$);return e&&E.forEach(function(L){return t(h,L)}),_e&&Rr(h,_),k}function x(h,g,b,S){var k=jo(b);if(typeof k!="function")throw Error(U(150));if(b=k.call(b),b==null)throw Error(U(151));for(var T=k=null,E=g,_=g=0,$=null,M=b.next();E!==null&&!M.done;_++,M=b.next()){E.index>_?($=E,E=null):$=E.sibling;var L=v(h,E,M.value,S);if(L===null){E===null&&(E=$);break}e&&E&&L.alternate===null&&t(h,E),g=o(L,g,_),T===null?k=L:T.sibling=L,T=L,E=$}if(M.done)return n(h,E),_e&&Rr(h,_),k;if(E===null){for(;!M.done;_++,M=b.next())M=f(h,M.value,S),M!==null&&(g=o(M,g,_),T===null?k=M:T.sibling=M,T=M);return _e&&Rr(h,_),k}for(E=r(h,E);!M.done;_++,M=b.next())M=m(E,h,_,M.value,S),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?_:M.key),g=o(M,g,_),T===null?k=M:T.sibling=M,T=M);return e&&E.forEach(function(D){return t(h,D)}),_e&&Rr(h,_),k}function w(h,g,b,S){if(typeof b=="object"&&b!==null&&b.type===Pi&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ss:e:{for(var k=b.key,T=g;T!==null;){if(T.key===k){if(k=b.type,k===Pi){if(T.tag===7){n(h,T.sibling),g=i(T,b.props.children),g.return=h,h=g;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===lr&&c0(k)===T.type){n(h,T.sibling),g=i(T,b.props),g.ref=Do(h,T,b),g.return=h,h=g;break e}n(h,T);break}else t(h,T);T=T.sibling}b.type===Pi?(g=Yr(b.props.children,h.mode,S,b.key),g.return=h,h=g):(S=Zs(b.type,b.key,b.props,null,h.mode,S),S.ref=Do(h,g,b),S.return=h,h=S)}return a(h);case Ti:e:{for(T=b.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(h,g.sibling),g=i(g,b.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=gd(b,h.mode,S),g.return=h,h=g}return a(h);case lr:return T=b._init,w(h,g,T(b._payload),S)}if(Go(b))return p(h,g,b,S);if(jo(b))return x(h,g,b,S);xs(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(n(h,g.sibling),g=i(g,b),g.return=h,h=g):(n(h,g),g=md(b,h.mode,S),g.return=h,h=g),a(h)):n(h,g)}return w}var Qi=Zy(!0),Jy=Zy(!1),Ga={},Pn=$r(Ga),ka=$r(Ga),Ea=$r(Ga);function Hr(e){if(e===Ga)throw Error(U(174));return e}function Ah(e,t){switch(xe(Ea,t),xe(ka,e),xe(Pn,Ga),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$f(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$f(t,e)}we(Pn),xe(Pn,t)}function Zi(){we(Pn),we(ka),we(Ea)}function eb(e){Hr(Ea.current);var t=Hr(Pn.current),n=$f(t,e.type);t!==n&&(xe(ka,e),xe(Pn,n))}function Rh(e){ka.current===e&&(we(Pn),we(ka))}var ke=$r(0);function Ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cd=[];function zh(){for(var e=0;e<cd.length;e++)cd[e]._workInProgressVersionPrimary=null;cd.length=0}var qs=tr.ReactCurrentDispatcher,ud=tr.ReactCurrentBatchConfig,Zr=0,Ee=null,Ne=null,Ye=null,Al=!1,oa=!1,Ta=0,bT=0;function rt(){throw Error(U(321))}function Fh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function Nh(e,t,n,r,i,o){if(Zr=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qs.current=e===null||e.memoizedState===null?_T:kT,e=n(r,i),oa){o=0;do{if(oa=!1,Ta=0,25<=o)throw Error(U(301));o+=1,Ye=Ne=null,t.updateQueue=null,qs.current=ET,e=n(r,i)}while(oa)}if(qs.current=Rl,t=Ne!==null&&Ne.next!==null,Zr=0,Ye=Ne=Ee=null,Al=!1,t)throw Error(U(300));return e}function Bh(){var e=Ta!==0;return Ta=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ee.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Zt(){if(Ne===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ye===null?Ee.memoizedState:Ye.next;if(t!==null)Ye=t,Ne=e;else{if(e===null)throw Error(U(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ye===null?Ee.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Pa(e,t){return typeof t=="function"?t(e):t}function dd(e){var t=Zt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var d=c.lane;if((Zr&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,Ee.lanes|=d,Jr|=d}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,gn(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,Jr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fd(e){var t=Zt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);gn(o,t.memoizedState)||(Et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function tb(){}function nb(e,t){var n=Ee,r=Zt(),i=t(),o=!gn(r.memoizedState,i);if(o&&(r.memoizedState=i,Et=!0),r=r.queue,Vh(ob.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,ja(9,ib.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(U(349));Zr&30||rb(n,t,i)}return i}function rb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ib(e,t,n,r){t.value=n,t.getSnapshot=r,ab(t)&&sb(e)}function ob(e,t,n){return n(function(){ab(t)&&sb(e)})}function ab(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function sb(e){var t=Qn(e,1);t!==null&&fn(t,e,1,-1)}function u0(e){var t=Sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},t.queue=e,e=e.dispatch=CT.bind(null,Ee,e),[t.memoizedState,e]}function ja(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lb(){return Zt().memoizedState}function Ys(e,t,n,r){var i=Sn();Ee.flags|=e,i.memoizedState=ja(1|t,n,void 0,r===void 0?null:r)}function Tc(e,t,n,r){var i=Zt();r=r===void 0?null:r;var o=void 0;if(Ne!==null){var a=Ne.memoizedState;if(o=a.destroy,r!==null&&Fh(r,a.deps)){i.memoizedState=ja(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=ja(1|t,n,o,r)}function d0(e,t){return Ys(8390656,8,e,t)}function Vh(e,t){return Tc(2048,8,e,t)}function cb(e,t){return Tc(4,2,e,t)}function ub(e,t){return Tc(4,4,e,t)}function db(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fb(e,t,n){return n=n!=null?n.concat([e]):null,Tc(4,4,db.bind(null,t,e),n)}function Uh(){}function pb(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hb(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mb(e,t,n){return Zr&21?(gn(n,t)||(n=xy(),Ee.lanes|=n,Jr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function wT(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=ud.transition;ud.transition={};try{e(!1),t()}finally{ge=n,ud.transition=r}}function gb(){return Zt().memoizedState}function ST(e,t,n){var r=_r(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vb(e))xb(t,n);else if(n=Yy(e,t,n,r),n!==null){var i=gt();fn(n,e,r,i),yb(n,t,r)}}function CT(e,t,n){var r=_r(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vb(e))xb(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,a)){var s=t.interleaved;s===null?(i.next=i,Dh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Yy(e,t,i,r),n!==null&&(i=gt(),fn(n,e,r,i),yb(n,t,r))}}function vb(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function xb(e,t){oa=Al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bh(e,n)}}var Rl={readContext:Qt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},_T={readContext:Qt,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:d0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ys(4194308,4,db.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ys(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ys(4,2,e,t)},useMemo:function(e,t){var n=Sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ST.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:u0,useDebugValue:Uh,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=u0(!1),t=e[0];return e=wT.bind(null,e[1]),Sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=Sn();if(_e){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),Xe===null)throw Error(U(349));Zr&30||rb(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,d0(ob.bind(null,r,o,e),[e]),r.flags|=2048,ja(9,ib.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Sn(),t=Xe.identifierPrefix;if(_e){var n=Hn,r=Wn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ta++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bT++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kT={readContext:Qt,useCallback:pb,useContext:Qt,useEffect:Vh,useImperativeHandle:fb,useInsertionEffect:cb,useLayoutEffect:ub,useMemo:hb,useReducer:dd,useRef:lb,useState:function(){return dd(Pa)},useDebugValue:Uh,useDeferredValue:function(e){var t=Zt();return mb(t,Ne.memoizedState,e)},useTransition:function(){var e=dd(Pa)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:tb,useSyncExternalStore:nb,useId:gb,unstable_isNewReconciler:!1},ET={readContext:Qt,useCallback:pb,useContext:Qt,useEffect:Vh,useImperativeHandle:fb,useInsertionEffect:cb,useLayoutEffect:ub,useMemo:hb,useReducer:fd,useRef:lb,useState:function(){return fd(Pa)},useDebugValue:Uh,useDeferredValue:function(e){var t=Zt();return Ne===null?t.memoizedState=e:mb(t,Ne.memoizedState,e)},useTransition:function(){var e=fd(Pa)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:tb,useSyncExternalStore:nb,useId:gb,unstable_isNewReconciler:!1};function Ji(e,t){try{var n="",r=t;do n+=eE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function pd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ep(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var TT=typeof WeakMap=="function"?WeakMap:Map;function bb(e,t,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fl||(Fl=!0,up=r),ep(e,t)},n}function wb(e,t,n){n=Gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ep(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ep(e,t),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function f0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new TT;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=BT.bind(null,e,t,n),t.then(e,e))}function p0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function h0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gn(-1,1),t.tag=2,Sr(n,t,1))),n.lanes|=1),e)}var PT=tr.ReactCurrentOwner,Et=!1;function ht(e,t,n,r){t.child=e===null?Jy(t,null,n,r):Qi(t,e.child,n,r)}function m0(e,t,n,r,i){n=n.render;var o=t.ref;return Ui(t,i),r=Nh(e,t,n,r,o,i),n=Bh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(_e&&n&&Ph(t),t.flags|=1,ht(e,t,r,i),t.child)}function g0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Qh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Sb(e,t,o,r,i)):(e=Zs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(a,r)&&e.ref===t.ref)return Zn(e,t,i)}return t.flags|=1,e=kr(o,r),e.ref=t.ref,e.return=t,t.child=e}function Sb(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(wa(o,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Zn(e,t,i)}return tp(e,t,n,r,i)}function Cb(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(zi,Lt),Lt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(zi,Lt),Lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,xe(zi,Lt),Lt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,xe(zi,Lt),Lt|=r;return ht(e,t,i,n),t.child}function _b(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tp(e,t,n,r,i){var o=Pt(n)?Kr:ut.current;return o=Xi(t,o),Ui(t,i),n=Nh(e,t,n,r,o,i),r=Bh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(_e&&r&&Ph(t),t.flags|=1,ht(e,t,n,i),t.child)}function v0(e,t,n,r,i){if(Pt(n)){var o=!0;jl(t)}else o=!1;if(Ui(t,i),t.stateNode===null)Xs(e,t),Qy(t,n,r),Jf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qt(c):(c=Pt(n)?Kr:ut.current,c=Xi(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&l0(t,a,r,c),cr=!1;var v=t.memoizedState;a.state=v,Dl(t,r,a,i),s=t.memoizedState,l!==r||v!==s||Tt.current||cr?(typeof d=="function"&&(Zf(t,n,d,r),s=t.memoizedState),(l=cr||s0(t,n,l,r,v,s,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Xy(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:an(t.type,l),a.props=c,f=t.pendingProps,v=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Qt(s):(s=Pt(n)?Kr:ut.current,s=Xi(t,s));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||v!==s)&&l0(t,a,r,s),cr=!1,v=t.memoizedState,a.state=v,Dl(t,r,a,i);var p=t.memoizedState;l!==f||v!==p||Tt.current||cr?(typeof m=="function"&&(Zf(t,n,m,r),p=t.memoizedState),(c=cr||s0(t,n,c,r,v,p,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,p,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,p,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return np(e,t,n,r,o,i)}function np(e,t,n,r,i,o){_b(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&n0(t,n,!1),Zn(e,t,o);r=t.stateNode,PT.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Qi(t,e.child,null,o),t.child=Qi(t,null,l,o)):ht(e,t,l,o),t.memoizedState=r.state,i&&n0(t,n,!0),t.child}function kb(e){var t=e.stateNode;t.pendingContext?t0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&t0(e,t.context,!1),Ah(e,t.containerInfo)}function x0(e,t,n,r,i){return Ki(),Oh(i),t.flags|=256,ht(e,t,n,r),t.child}var rp={dehydrated:null,treeContext:null,retryLane:0};function ip(e){return{baseLanes:e,cachePool:null,transitions:null}}function Eb(e,t,n){var r=t.pendingProps,i=ke.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe(ke,i&1),e===null)return Kf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Oc(a,r,0,null),e=Yr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ip(n),t.memoizedState=rp,e):Wh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jT(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=kr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=kr(l,o):(o=Yr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ip(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=rp,r}return o=e.child,e=o.sibling,r=kr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wh(e,t){return t=Oc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ys(e,t,n,r){return r!==null&&Oh(r),Qi(t,e.child,null,n),e=Wh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jT(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=pd(Error(U(422))),ys(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Oc({mode:"visible",children:r.children},i,0,null),o=Yr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Qi(t,e.child,null,a),t.child.memoizedState=ip(a),t.memoizedState=rp,o);if(!(t.mode&1))return ys(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(U(419)),r=pd(o,r,void 0),ys(e,t,a,r)}if(l=(a&e.childLanes)!==0,Et||l){if(r=Xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qn(e,i),fn(r,e,i,-1))}return Kh(),r=pd(Error(U(421))),ys(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=VT.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Rt=wr(i.nextSibling),Ft=t,_e=!0,cn=null,e!==null&&(qt[Yt++]=Wn,qt[Yt++]=Hn,qt[Yt++]=Qr,Wn=e.id,Hn=e.overflow,Qr=t),t=Wh(t,r.children),t.flags|=4096,t)}function y0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qf(e.return,t,n)}function hd(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Tb(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ht(e,t,r.children,n),r=ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&y0(e,n,t);else if(e.tag===19)y0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(ke,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ll(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ll(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hd(t,!0,n,null,o);break;case"together":hd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=kr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function OT(e,t,n){switch(t.tag){case 3:kb(t),Ki();break;case 5:eb(t);break;case 1:Pt(t.type)&&jl(t);break;case 4:Ah(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;xe(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(ke,ke.current&1),t.flags|=128,null):n&t.child.childLanes?Eb(e,t,n):(xe(ke,ke.current&1),e=Zn(e,t,n),e!==null?e.sibling:null);xe(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,Cb(e,t,n)}return Zn(e,t,n)}var Pb,op,jb,Ob;Pb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};op=function(){};jb=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Hr(Pn.current);var o=null;switch(n){case"input":i=Tf(e,i),r=Tf(e,r),o=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),o=[];break;case"textarea":i=Of(e,i),r=Of(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Tl)}Mf(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ha.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ha.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ye("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Ob=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lo(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $T(e,t,n){var r=t.pendingProps;switch(jh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return Pt(t.type)&&Pl(),it(t),null;case 3:return r=t.stateNode,Zi(),we(Tt),we(ut),zh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,cn!==null&&(pp(cn),cn=null))),op(e,t),it(t),null;case 5:Rh(t);var i=Hr(Ea.current);if(n=t.type,e!==null&&t.stateNode!=null)jb(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return it(t),null}if(e=Hr(Pn.current),vs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kn]=t,r[_a]=o,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Yo.length;i++)ye(Yo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Pg(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":Og(r,o),ye("invalid",r)}Mf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),i=["children",""+l]):ha.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":ls(r),jg(r,o,!0);break;case"textarea":ls(r),$g(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Tl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ry(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[kn]=t,e[_a]=r,Pb(e,t,!1,!1),t.stateNode=e;e:{switch(a=If(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yo.length;i++)ye(Yo[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":Pg(e,r),i=Tf(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Og(e,r),i=Of(e,r),ye("invalid",e);break;default:i=r}Mf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ay(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&iy(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ma(e,s):typeof s=="number"&&ma(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ha.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ye("scroll",e):s!=null&&hh(e,o,s,a))}switch(n){case"input":ls(e),jg(e,r,!1);break;case"textarea":ls(e),$g(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Fi(e,!!r.multiple,o,!1):r.defaultValue!=null&&Fi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)Ob(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=Hr(Ea.current),Hr(Pn.current),vs(t)){if(r=t.stateNode,n=t.memoizedProps,r[kn]=t,(o=r.nodeValue!==n)&&(e=Ft,e!==null))switch(e.tag){case 3:gs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=t,t.stateNode=r}return it(t),null;case 13:if(we(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&Rt!==null&&t.mode&1&&!(t.flags&128))qy(),Ki(),t.flags|=98560,o=!1;else if(o=vs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[kn]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),o=!1}else cn!==null&&(pp(cn),cn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ke.current&1?Ve===0&&(Ve=3):Kh())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return Zi(),op(e,t),e===null&&Sa(t.stateNode.containerInfo),it(t),null;case 10:return Ih(t.type._context),it(t),null;case 17:return Pt(t.type)&&Pl(),it(t),null;case 19:if(we(ke),o=t.memoizedState,o===null)return it(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Lo(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ll(e),a!==null){for(t.flags|=128,Lo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(ke,ke.current&1|2),t.child}e=e.sibling}o.tail!==null&&$e()>eo&&(t.flags|=128,r=!0,Lo(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ll(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return it(t),null}else 2*$e()-o.renderingStartTime>eo&&n!==1073741824&&(t.flags|=128,r=!0,Lo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=$e(),t.sibling=null,n=ke.current,xe(ke,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return Xh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Lt&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function MT(e,t){switch(jh(t),t.tag){case 1:return Pt(t.type)&&Pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(),we(Tt),we(ut),zh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rh(t),null;case 13:if(we(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(ke),null;case 4:return Zi(),null;case 10:return Ih(t.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var bs=!1,lt=!1,IT=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Ri(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function ap(e,t,n){try{n()}catch(r){je(e,t,r)}}var b0=!1;function DT(e,t){if(Uf=_l,e=Dy(),Th(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,d=0,f=e,v=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)v=f,f=m;for(;;){if(f===e)break t;if(v===n&&++c===i&&(l=a),v===o&&++d===r&&(s=a),(m=f.nextSibling)!==null)break;f=v,v=f.parentNode}f=m}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wf={focusedElem:e,selectionRange:n},_l=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var x=p.memoizedProps,w=p.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:an(t.type,x),w);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(S){je(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return p=b0,b0=!1,p}function aa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ap(t,n,o)}i=i.next}while(i!==r)}}function Pc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $b(e){var t=e.alternate;t!==null&&(e.alternate=null,$b(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kn],delete t[_a],delete t[qf],delete t[gT],delete t[vT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mb(e){return e.tag===5||e.tag===3||e.tag===4}function w0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tl));else if(r!==4&&(e=e.child,e!==null))for(lp(e,t,n),e=e.sibling;e!==null;)lp(e,t,n),e=e.sibling}function cp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(cp(e,t,n),e=e.sibling;e!==null;)cp(e,t,n),e=e.sibling}var Je=null,sn=!1;function ar(e,t,n){for(n=n.child;n!==null;)Ib(e,t,n),n=n.sibling}function Ib(e,t,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:lt||Ri(n,t);case 6:var r=Je,i=sn;Je=null,ar(e,t,n),Je=r,sn=i,Je!==null&&(sn?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(sn?(e=Je,n=n.stateNode,e.nodeType===8?sd(e.parentNode,n):e.nodeType===1&&sd(e,n),ya(e)):sd(Je,n.stateNode));break;case 4:r=Je,i=sn,Je=n.stateNode.containerInfo,sn=!0,ar(e,t,n),Je=r,sn=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ap(n,t,a),i=i.next}while(i!==r)}ar(e,t,n);break;case 1:if(!lt&&(Ri(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,t,l)}ar(e,t,n);break;case 21:ar(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,ar(e,t,n),lt=r):ar(e,t,n);break;default:ar(e,t,n)}}function S0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new IT),t.forEach(function(r){var i=UT.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,sn=!1;break e;case 3:Je=l.stateNode.containerInfo,sn=!0;break e;case 4:Je=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(Je===null)throw Error(U(160));Ib(o,a,i),Je=null,sn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){je(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Db(t,e),t=t.sibling}function Db(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),bn(e),r&4){try{aa(3,e,e.return),Pc(3,e)}catch(x){je(e,e.return,x)}try{aa(5,e,e.return)}catch(x){je(e,e.return,x)}}break;case 1:tn(t,e),bn(e),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(tn(t,e),bn(e),r&512&&n!==null&&Ri(n,n.return),e.flags&32){var i=e.stateNode;try{ma(i,"")}catch(x){je(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ty(i,o),If(l,a);var c=If(l,o);for(a=0;a<s.length;a+=2){var d=s[a],f=s[a+1];d==="style"?ay(i,f):d==="dangerouslySetInnerHTML"?iy(i,f):d==="children"?ma(i,f):hh(i,d,f,c)}switch(l){case"input":Pf(i,o);break;case"textarea":ny(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Fi(i,!!o.multiple,m,!1):v!==!!o.multiple&&(o.defaultValue!=null?Fi(i,!!o.multiple,o.defaultValue,!0):Fi(i,!!o.multiple,o.multiple?[]:"",!1))}i[_a]=o}catch(x){je(e,e.return,x)}}break;case 6:if(tn(t,e),bn(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){je(e,e.return,x)}}break;case 3:if(tn(t,e),bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(t.containerInfo)}catch(x){je(e,e.return,x)}break;case 4:tn(t,e),bn(e);break;case 13:tn(t,e),bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(qh=$e())),r&4&&S0(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(c=lt)||d,tn(t,e),lt=c):tn(t,e),bn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(Y=e,d=e.child;d!==null;){for(f=Y=d;Y!==null;){switch(v=Y,m=v.child,v.tag){case 0:case 11:case 14:case 15:aa(4,v,v.return);break;case 1:Ri(v,v.return);var p=v.stateNode;if(typeof p.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(x){je(r,n,x)}}break;case 5:Ri(v,v.return);break;case 22:if(v.memoizedState!==null){_0(f);continue}}m!==null?(m.return=v,Y=m):_0(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=oy("display",a))}catch(x){je(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){je(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tn(t,e),bn(e),r&4&&S0(e);break;case 21:break;default:tn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mb(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ma(i,""),r.flags&=-33);var o=w0(e);cp(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=w0(e);lp(e,l,a);break;default:throw Error(U(161))}}catch(s){je(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function LT(e,t,n){Y=e,Lb(e)}function Lb(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var i=Y,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||bs;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||lt;l=bs;var c=lt;if(bs=a,(lt=s)&&!c)for(Y=i;Y!==null;)a=Y,s=a.child,a.tag===22&&a.memoizedState!==null?k0(i):s!==null?(s.return=a,Y=s):k0(i);for(;o!==null;)Y=o,Lb(o),o=o.sibling;Y=i,bs=l,lt=c}C0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Y=o):C0(e)}}function C0(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||Pc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:an(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&a0(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}a0(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ya(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}lt||t.flags&512&&sp(t)}catch(v){je(t,t.return,v)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function _0(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function k0(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pc(4,t)}catch(s){je(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){je(t,i,s)}}var o=t.return;try{sp(t)}catch(s){je(t,o,s)}break;case 5:var a=t.return;try{sp(t)}catch(s){je(t,a,s)}}}catch(s){je(t,t.return,s)}if(t===e){Y=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Y=l;break}Y=t.return}}var AT=Math.ceil,zl=tr.ReactCurrentDispatcher,Hh=tr.ReactCurrentOwner,Kt=tr.ReactCurrentBatchConfig,le=0,Xe=null,Re=null,tt=0,Lt=0,zi=$r(0),Ve=0,Oa=null,Jr=0,jc=0,Gh=0,sa=null,kt=null,qh=0,eo=1/0,zn=null,Fl=!1,up=null,Cr=null,ws=!1,hr=null,Nl=0,la=0,dp=null,Ks=-1,Qs=0;function gt(){return le&6?$e():Ks!==-1?Ks:Ks=$e()}function _r(e){return e.mode&1?le&2&&tt!==0?tt&-tt:yT.transition!==null?(Qs===0&&(Qs=xy()),Qs):(e=ge,e!==0||(e=window.event,e=e===void 0?16:ky(e.type)),e):1}function fn(e,t,n,r){if(50<la)throw la=0,dp=null,Error(U(185));Ua(e,n,r),(!(le&2)||e!==Xe)&&(e===Xe&&(!(le&2)&&(jc|=n),Ve===4&&dr(e,tt)),jt(e,r),n===1&&le===0&&!(t.mode&1)&&(eo=$e()+500,kc&&Mr()))}function jt(e,t){var n=e.callbackNode;yE(e,t);var r=Cl(e,e===Xe?tt:0);if(r===0)n!==null&&Dg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Dg(n),t===1)e.tag===0?xT(E0.bind(null,e)):Wy(E0.bind(null,e)),hT(function(){!(le&6)&&Mr()}),n=null;else{switch(yy(r)){case 1:n=yh;break;case 4:n=gy;break;case 16:n=Sl;break;case 536870912:n=vy;break;default:n=Sl}n=Ub(n,Ab.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ab(e,t){if(Ks=-1,Qs=0,le&6)throw Error(U(327));var n=e.callbackNode;if(Wi()&&e.callbackNode!==n)return null;var r=Cl(e,e===Xe?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bl(e,r);else{t=r;var i=le;le|=2;var o=zb();(Xe!==e||tt!==t)&&(zn=null,eo=$e()+500,qr(e,t));do try{FT();break}catch(l){Rb(e,l)}while(1);Mh(),zl.current=o,le=i,Re!==null?t=0:(Xe=null,tt=0,t=Ve)}if(t!==0){if(t===2&&(i=zf(e),i!==0&&(r=i,t=fp(e,i))),t===1)throw n=Oa,qr(e,0),dr(e,r),jt(e,$e()),n;if(t===6)dr(e,r);else{if(i=e.current.alternate,!(r&30)&&!RT(i)&&(t=Bl(e,r),t===2&&(o=zf(e),o!==0&&(r=o,t=fp(e,o))),t===1))throw n=Oa,qr(e,0),dr(e,r),jt(e,$e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:zr(e,kt,zn);break;case 3:if(dr(e,r),(r&130023424)===r&&(t=qh+500-$e(),10<t)){if(Cl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gf(zr.bind(null,e,kt,zn),t);break}zr(e,kt,zn);break;case 4:if(dr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*AT(r/1960))-r,10<r){e.timeoutHandle=Gf(zr.bind(null,e,kt,zn),r);break}zr(e,kt,zn);break;case 5:zr(e,kt,zn);break;default:throw Error(U(329))}}}return jt(e,$e()),e.callbackNode===n?Ab.bind(null,e):null}function fp(e,t){var n=sa;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=Bl(e,t),e!==2&&(t=kt,kt=n,t!==null&&pp(t)),e}function pp(e){kt===null?kt=e:kt.push.apply(kt,e)}function RT(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~Gh,t&=~jc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dn(t),r=1<<n;e[n]=-1,t&=~r}}function E0(e){if(le&6)throw Error(U(327));Wi();var t=Cl(e,0);if(!(t&1))return jt(e,$e()),null;var n=Bl(e,t);if(e.tag!==0&&n===2){var r=zf(e);r!==0&&(t=r,n=fp(e,r))}if(n===1)throw n=Oa,qr(e,0),dr(e,t),jt(e,$e()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zr(e,kt,zn),jt(e,$e()),null}function Yh(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(eo=$e()+500,kc&&Mr())}}function ei(e){hr!==null&&hr.tag===0&&!(le&6)&&Wi();var t=le;le|=1;var n=Kt.transition,r=ge;try{if(Kt.transition=null,ge=1,e)return e()}finally{ge=r,Kt.transition=n,le=t,!(le&6)&&Mr()}}function Xh(){Lt=zi.current,we(zi)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pT(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(jh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pl();break;case 3:Zi(),we(Tt),we(ut),zh();break;case 5:Rh(r);break;case 4:Zi();break;case 13:we(ke);break;case 19:we(ke);break;case 10:Ih(r.type._context);break;case 22:case 23:Xh()}n=n.return}if(Xe=e,Re=e=kr(e.current,null),tt=Lt=t,Ve=0,Oa=null,Gh=jc=Jr=0,kt=sa=null,Wr!==null){for(t=0;t<Wr.length;t++)if(n=Wr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Wr=null}return e}function Rb(e,t){do{var n=Re;try{if(Mh(),qs.current=Rl,Al){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Al=!1}if(Zr=0,Ye=Ne=Ee=null,oa=!1,Ta=0,Hh.current=null,n===null||n.return===null){Ve=1,Oa=t,Re=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=tt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var v=d.alternate;v?(d.updateQueue=v.updateQueue,d.memoizedState=v.memoizedState,d.lanes=v.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=p0(a);if(m!==null){m.flags&=-257,h0(m,a,l,o,t),m.mode&1&&f0(o,c,t),t=m,s=c;var p=t.updateQueue;if(p===null){var x=new Set;x.add(s),t.updateQueue=x}else p.add(s);break e}else{if(!(t&1)){f0(o,c,t),Kh();break e}s=Error(U(426))}}else if(_e&&l.mode&1){var w=p0(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),h0(w,a,l,o,t),Oh(Ji(s,l));break e}}o=s=Ji(s,l),Ve!==4&&(Ve=2),sa===null?sa=[o]:sa.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=bb(o,s,t);o0(o,h);break e;case 1:l=s;var g=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Cr===null||!Cr.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=wb(o,l,t);o0(o,S);break e}}o=o.return}while(o!==null)}Nb(n)}catch(k){t=k,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function zb(){var e=zl.current;return zl.current=Rl,e===null?Rl:e}function Kh(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Xe===null||!(Jr&268435455)&&!(jc&268435455)||dr(Xe,tt)}function Bl(e,t){var n=le;le|=2;var r=zb();(Xe!==e||tt!==t)&&(zn=null,qr(e,t));do try{zT();break}catch(i){Rb(e,i)}while(1);if(Mh(),le=n,zl.current=r,Re!==null)throw Error(U(261));return Xe=null,tt=0,Ve}function zT(){for(;Re!==null;)Fb(Re)}function FT(){for(;Re!==null&&!uE();)Fb(Re)}function Fb(e){var t=Vb(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?Nb(e):Re=t,Hh.current=null}function Nb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=MT(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Re=null;return}}else if(n=$T(n,t,Lt),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ve===0&&(Ve=5)}function zr(e,t,n){var r=ge,i=Kt.transition;try{Kt.transition=null,ge=1,NT(e,t,n,r)}finally{Kt.transition=i,ge=r}return null}function NT(e,t,n,r){do Wi();while(hr!==null);if(le&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(bE(e,o),e===Xe&&(Re=Xe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ws||(ws=!0,Ub(Sl,function(){return Wi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Kt.transition,Kt.transition=null;var a=ge;ge=1;var l=le;le|=4,Hh.current=null,DT(e,n),Db(n,e),aT(Wf),_l=!!Uf,Wf=Uf=null,e.current=n,LT(n),dE(),le=l,ge=a,Kt.transition=o}else e.current=n;if(ws&&(ws=!1,hr=e,Nl=i),o=e.pendingLanes,o===0&&(Cr=null),hE(n.stateNode),jt(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fl)throw Fl=!1,e=up,up=null,e;return Nl&1&&e.tag!==0&&Wi(),o=e.pendingLanes,o&1?e===dp?la++:(la=0,dp=e):la=0,Mr(),null}function Wi(){if(hr!==null){var e=yy(Nl),t=Kt.transition,n=ge;try{if(Kt.transition=null,ge=16>e?16:e,hr===null)var r=!1;else{if(e=hr,hr=null,Nl=0,le&6)throw Error(U(331));var i=le;for(le|=4,Y=e.current;Y!==null;){var o=Y,a=o.child;if(Y.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:aa(8,d,o)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var v=d.sibling,m=d.return;if($b(d),d===c){Y=null;break}if(v!==null){v.return=m,Y=v;break}Y=m}}}var p=o.alternate;if(p!==null){var x=p.child;if(x!==null){p.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}Y=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Y=a;else e:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:aa(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Y=h;break e}Y=o.return}}var g=e.current;for(Y=g;Y!==null;){a=Y;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,Y=b;else e:for(a=g;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pc(9,l)}}catch(k){je(l,l.return,k)}if(l===a){Y=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,Y=S;break e}Y=l.return}}if(le=i,Mr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(bc,e)}catch{}r=!0}return r}finally{ge=n,Kt.transition=t}}return!1}function T0(e,t,n){t=Ji(n,t),t=bb(e,t,1),e=Sr(e,t,1),t=gt(),e!==null&&(Ua(e,1,t),jt(e,t))}function je(e,t,n){if(e.tag===3)T0(e,e,n);else for(;t!==null;){if(t.tag===3){T0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){e=Ji(n,e),e=wb(t,e,1),t=Sr(t,e,1),e=gt(),t!==null&&(Ua(t,1,e),jt(t,e));break}}t=t.return}}function BT(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(tt&n)===n&&(Ve===4||Ve===3&&(tt&130023424)===tt&&500>$e()-qh?qr(e,0):Gh|=n),jt(e,t)}function Bb(e,t){t===0&&(e.mode&1?(t=ds,ds<<=1,!(ds&130023424)&&(ds=4194304)):t=1);var n=gt();e=Qn(e,t),e!==null&&(Ua(e,t,n),jt(e,n))}function VT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bb(e,n)}function UT(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Bb(e,n)}var Vb;Vb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,OT(e,t,n);Et=!!(e.flags&131072)}else Et=!1,_e&&t.flags&1048576&&Hy(t,$l,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xs(e,t),e=t.pendingProps;var i=Xi(t,ut.current);Ui(t,n),i=Nh(null,t,r,e,i,n);var o=Bh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(r)?(o=!0,jl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lh(t),i.updater=Ec,t.stateNode=i,i._reactInternals=t,Jf(t,r,e,n),t=np(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&Ph(t),ht(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=HT(r),e=an(r,e),i){case 0:t=tp(null,t,r,e,n);break e;case 1:t=v0(null,t,r,e,n);break e;case 11:t=m0(null,t,r,e,n);break e;case 14:t=g0(null,t,r,an(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),tp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),v0(e,t,r,i,n);case 3:e:{if(kb(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Xy(e,t),Dl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ji(Error(U(423)),t),t=x0(e,t,r,n,i);break e}else if(r!==i){i=Ji(Error(U(424)),t),t=x0(e,t,r,n,i);break e}else for(Rt=wr(t.stateNode.containerInfo.firstChild),Ft=t,_e=!0,cn=null,n=Jy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){t=Zn(e,t,n);break e}ht(e,t,r,n)}t=t.child}return t;case 5:return eb(t),e===null&&Kf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Hf(r,i)?a=null:o!==null&&Hf(r,o)&&(t.flags|=32),_b(e,t),ht(e,t,a,n),t.child;case 6:return e===null&&Kf(t),null;case 13:return Eb(e,t,n);case 4:return Ah(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qi(t,null,r,n):ht(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),m0(e,t,r,i,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,xe(Ml,r._currentValue),r._currentValue=a,o!==null)if(gn(o.value,a)){if(o.children===i.children&&!Tt.current){t=Zn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Gn(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Qf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(U(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Qf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ht(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ui(t,n),i=Qt(i),r=r(i),t.flags|=1,ht(e,t,r,n),t.child;case 14:return r=t.type,i=an(r,t.pendingProps),i=an(r.type,i),g0(e,t,r,i,n);case 15:return Sb(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),Xs(e,t),t.tag=1,Pt(r)?(e=!0,jl(t)):e=!1,Ui(t,n),Qy(t,r,i),Jf(t,r,i,n),np(null,t,r,!0,e,n);case 19:return Tb(e,t,n);case 22:return Cb(e,t,n)}throw Error(U(156,t.tag))};function Ub(e,t){return my(e,t)}function WT(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,r){return new WT(e,t,n,r)}function Qh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function HT(e){if(typeof e=="function")return Qh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gh)return 11;if(e===vh)return 14}return 2}function kr(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Qh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Pi:return Yr(n.children,i,o,t);case mh:a=8,i|=8;break;case Cf:return e=Xt(12,n,t,i|2),e.elementType=Cf,e.lanes=o,e;case _f:return e=Xt(13,n,t,i),e.elementType=_f,e.lanes=o,e;case kf:return e=Xt(19,n,t,i),e.elementType=kf,e.lanes=o,e;case Zx:return Oc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kx:a=10;break e;case Qx:a=9;break e;case gh:a=11;break e;case vh:a=14;break e;case lr:a=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Xt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yr(e,t,n,r){return e=Xt(7,e,r,t),e.lanes=n,e}function Oc(e,t,n,r){return e=Xt(22,e,r,t),e.elementType=Zx,e.lanes=n,e.stateNode={isHidden:!1},e}function md(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function gd(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function GT(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zh(e,t,n,r,i,o,a,l,s){return e=new GT(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lh(o),e}function qT(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wb(e){if(!e)return Pr;e=e._reactInternals;e:{if(ci(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(Pt(n))return Uy(e,n,t)}return t}function Hb(e,t,n,r,i,o,a,l,s){return e=Zh(n,r,!0,e,i,o,a,l,s),e.context=Wb(null),n=e.current,r=gt(),i=_r(n),o=Gn(r,i),o.callback=t??null,Sr(n,o,i),e.current.lanes=i,Ua(e,i,r),jt(e,r),e}function $c(e,t,n,r){var i=t.current,o=gt(),a=_r(i);return n=Wb(n),t.context===null?t.context=n:t.pendingContext=n,t=Gn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sr(i,t,a),e!==null&&(fn(e,i,a,o),Gs(e,i,a)),a}function Vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function P0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jh(e,t){P0(e,t),(e=e.alternate)&&P0(e,t)}function YT(){return null}var Gb=typeof reportError=="function"?reportError:function(e){console.error(e)};function em(e){this._internalRoot=e}Mc.prototype.render=em.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));$c(e,t,null,null)};Mc.prototype.unmount=em.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ei(function(){$c(null,e,null,null)}),t[Kn]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ur.length&&t!==0&&t<ur[n].priority;n++);ur.splice(n,0,e),n===0&&_y(e)}};function tm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ic(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function j0(){}function XT(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Vl(a);o.call(c)}}var a=Hb(t,r,e,0,null,!1,!1,"",j0);return e._reactRootContainer=a,e[Kn]=a.current,Sa(e.nodeType===8?e.parentNode:e),ei(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Vl(s);l.call(c)}}var s=Zh(e,0,!1,null,null,!1,!1,"",j0);return e._reactRootContainer=s,e[Kn]=s.current,Sa(e.nodeType===8?e.parentNode:e),ei(function(){$c(t,s,n,r)}),s}function Dc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Vl(a);l.call(s)}}$c(t,a,e,i)}else a=XT(n,t,e,i,r);return Vl(a)}by=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qo(t.pendingLanes);n!==0&&(bh(t,n|1),jt(t,$e()),!(le&6)&&(eo=$e()+500,Mr()))}break;case 13:ei(function(){var r=Qn(e,1);if(r!==null){var i=gt();fn(r,e,1,i)}}),Jh(e,1)}};wh=function(e){if(e.tag===13){var t=Qn(e,134217728);if(t!==null){var n=gt();fn(t,e,134217728,n)}Jh(e,134217728)}};wy=function(e){if(e.tag===13){var t=_r(e),n=Qn(e,t);if(n!==null){var r=gt();fn(n,e,t,r)}Jh(e,t)}};Sy=function(){return ge};Cy=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};Lf=function(e,t,n){switch(t){case"input":if(Pf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_c(r);if(!i)throw Error(U(90));ey(r),Pf(r,i)}}}break;case"textarea":ny(e,n);break;case"select":t=n.value,t!=null&&Fi(e,!!n.multiple,t,!1)}};cy=Yh;uy=ei;var KT={usingClientEntryPoint:!1,Events:[Ha,Mi,_c,sy,ly,Yh]},Ao={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},QT={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=py(e),e===null?null:e.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||YT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{bc=Ss.inject(QT),Tn=Ss}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KT;Ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tm(t))throw Error(U(200));return qT(e,t,null,n)};Ut.createRoot=function(e,t){if(!tm(e))throw Error(U(299));var n=!1,r="",i=Gb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zh(e,1,!1,null,null,n,!1,r,i),e[Kn]=t.current,Sa(e.nodeType===8?e.parentNode:e),new em(t)};Ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=py(t),e=e===null?null:e.stateNode,e};Ut.flushSync=function(e){return ei(e)};Ut.hydrate=function(e,t,n){if(!Ic(t))throw Error(U(200));return Dc(null,e,t,!0,n)};Ut.hydrateRoot=function(e,t,n){if(!tm(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Gb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Hb(t,null,e,1,n??null,i,!1,o,a),e[Kn]=t.current,Sa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mc(t)};Ut.render=function(e,t,n){if(!Ic(t))throw Error(U(200));return Dc(null,e,t,!1,n)};Ut.unmountComponentAtNode=function(e){if(!Ic(e))throw Error(U(40));return e._reactRootContainer?(ei(function(){Dc(null,null,e,!1,function(){e._reactRootContainer=null,e[Kn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Yh;Ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ic(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Dc(e,t,n,!1,r)};Ut.version="18.2.0-next-9e3b772b8-20220608";function qb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qb)}catch(e){console.error(e)}}qb(),Hx.exports=Ut;var Lc=Hx.exports,O0=Lc;wf.createRoot=O0.createRoot,wf.hydrateRoot=O0.hydrateRoot;var ct=function(){return ct=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ct.apply(this,arguments)};function to(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function ZT(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var JT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,eP=ZT(function(e){return JT.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),be="-ms-",ca="-moz-",ue="-webkit-",Yb="comm",Ac="rule",nm="decl",tP="@import",nP="@namespace",Xb="@keyframes",rP="@layer",Kb=Math.abs,rm=String.fromCharCode,hp=Object.assign;function iP(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function Qb(e){return e.trim()}function Fn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Js(e,t,n){return e.indexOf(t,n)}function Be(e,t){return e.charCodeAt(t)|0}function ti(e,t,n){return e.slice(t,n)}function ln(e){return e.length}function Zb(e){return e.length}function Xo(e,t){return t.push(e),e}function oP(e,t){return e.map(t).join("")}function $0(e,t){return e.filter(function(n){return!Fn(n,t)})}var Rc=1,no=1,Jb=0,Jt=0,Le=0,go="";function zc(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Rc,column:no,length:a,return:"",siblings:l}}function sr(e,t){return hp(zc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function mi(e){for(;e.root;)e=sr(e.root,{children:[e]});Xo(e,e.siblings)}function aP(){return Le}function sP(){return Le=Jt>0?Be(go,--Jt):0,no--,Le===10&&(no=1,Rc--),Le}function pn(){return Le=Jt<Jb?Be(go,Jt++):0,no++,Le===10&&(no=1,Rc++),Le}function mr(){return Be(go,Jt)}function el(){return Jt}function Fc(e,t){return ti(go,e,t)}function $a(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lP(e){return Rc=no=1,Jb=ln(go=e),Jt=0,[]}function cP(e){return go="",e}function vd(e){return Qb(Fc(Jt-1,mp(e===91?e+2:e===40?e+1:e)))}function uP(e){for(;(Le=mr())&&Le<33;)pn();return $a(e)>2||$a(Le)>3?"":" "}function dP(e,t){for(;--t&&pn()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Fc(e,el()+(t<6&&mr()==32&&pn()==32))}function mp(e){for(;pn();)switch(Le){case e:return Jt;case 34:case 39:e!==34&&e!==39&&mp(Le);break;case 40:e===41&&mp(e);break;case 92:pn();break}return Jt}function fP(e,t){for(;pn()&&e+Le!==47+10;)if(e+Le===42+42&&mr()===47)break;return"/*"+Fc(t,Jt-1)+"*"+rm(e===47?e:pn())}function pP(e){for(;!$a(mr());)pn();return Fc(e,Jt)}function hP(e){return cP(tl("",null,null,null,[""],e=lP(e),0,[0],e))}function tl(e,t,n,r,i,o,a,l,s){for(var c=0,d=0,f=a,v=0,m=0,p=0,x=1,w=1,h=1,g=0,b="",S=i,k=o,T=r,E=b;w;)switch(p=g,g=pn()){case 40:if(p!=108&&Be(E,f-1)==58){Js(E+=ne(vd(g),"&","&\f"),"&\f",Kb(c?l[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:E+=vd(g);break;case 9:case 10:case 13:case 32:E+=uP(p);break;case 92:E+=dP(el()-1,7);continue;case 47:switch(mr()){case 42:case 47:Xo(mP(fP(pn(),el()),t,n,s),s),($a(p||1)==5||$a(mr()||1)==5)&&ln(E)&&ti(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*x:l[c++]=ln(E)*h;case 125*x:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+d:h==-1&&(E=ne(E,/\f/g,"")),m>0&&(ln(E)-f||x===0&&p===47)&&Xo(m>32?I0(E+";",r,n,f-1,s):I0(ne(E," ","")+";",r,n,f-2,s),s);break;case 59:E+=";";default:if(Xo(T=M0(E,t,n,c,d,i,l,b,S=[],k=[],f,o),o),g===123)if(d===0)tl(E,t,T,T,S,o,f,l,k);else{switch(v){case 99:if(Be(E,3)===110)break;case 108:if(Be(E,2)===97)break;default:d=0;case 100:case 109:case 115:}d?tl(e,T,T,r&&Xo(M0(e,T,T,0,0,i,l,b,i,S=[],f,k),k),i,k,f,l,r?S:k):tl(E,T,T,T,[""],k,0,l,k)}}c=d=m=0,x=h=1,b=E="",f=a;break;case 58:f=1+ln(E),m=p;default:if(x<1){if(g==123)--x;else if(g==125&&x++==0&&sP()==125)continue}switch(E+=rm(g),g*x){case 38:h=d>0?1:(E+="\f",-1);break;case 44:l[c++]=(ln(E)-1)*h,h=1;break;case 64:mr()===45&&(E+=vd(pn())),v=mr(),d=f=ln(b=E+=pP(el())),g++;break;case 45:p===45&&ln(E)==2&&(x=0)}}return o}function M0(e,t,n,r,i,o,a,l,s,c,d,f){for(var v=i-1,m=i===0?o:[""],p=Zb(m),x=0,w=0,h=0;x<r;++x)for(var g=0,b=ti(e,v+1,v=Kb(w=a[x])),S=e;g<p;++g)(S=Qb(w>0?m[g]+" "+b:ne(b,/&\f/g,m[g])))&&(s[h++]=S);return zc(e,t,n,i===0?Ac:l,s,c,d,f)}function mP(e,t,n,r){return zc(e,t,n,Yb,rm(aP()),ti(e,2,-2),0,r)}function I0(e,t,n,r,i){return zc(e,t,n,nm,ti(e,0,r),ti(e,r+1,-1),r,i)}function ew(e,t,n){switch(iP(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ca+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+ca+e+be+e+e;case 5936:switch(Be(e,t+11)){case 114:return ue+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+be+e+e;case 6165:return ue+e+be+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+be+"flex-$1$2")+e;case 5443:return ue+e+be+"flex-item-"+ne(e,/flex-|-self/g,"")+(Fn(e,/flex-|baseline/)?"":be+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+be+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+be+ne(e,"shrink","negative")+e;case 5292:return ue+e+be+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+be+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+be+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!Fn(e,/flex-|baseline/))return be+"grid-column-align"+ti(e,t)+e;break;case 2592:case 3360:return be+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Fn(r.props,/grid-\w+-end/)})?~Js(e+(n=n[t].value),"span",0)?e:be+ne(e,"-start","")+e+be+"grid-row-span:"+(~Js(n,"span",0)?Fn(n,/\d+/):+Fn(n,/\d+/)-+Fn(e,/\d+/))+";":be+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Fn(r.props,/grid-\w+-start/)})?e:be+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+ca+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Js(e,"stretch",0)?ew(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,c){return be+i+":"+o+c+(a?be+i+"-span:"+(l?s:+s-+o)+c:"")+e});case 4949:if(Be(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Be(e,Be(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Be(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+be+"$2box$3")+e;case 100:return ne(e,":",":"+be)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Ul(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function gP(e,t,n,r){switch(e.type){case rP:if(e.children.length)break;case tP:case nP:case nm:return e.return=e.return||e.value;case Yb:return"";case Xb:return e.return=e.value+"{"+Ul(e.children,r)+"}";case Ac:if(!ln(e.value=e.props.join(",")))return""}return ln(n=Ul(e.children,r))?e.return=e.value+"{"+n+"}":""}function vP(e){var t=Zb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function xP(e){return function(t){t.root||(t=t.return)&&e(t)}}function yP(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case nm:e.return=ew(e.value,e.length,n);return;case Xb:return Ul([sr(e,{value:ne(e.value,"@","@"+ue)})],r);case Ac:if(e.length)return oP(n=e.props,function(i){switch(Fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mi(sr(e,{props:[ne(i,/:(read-\w+)/,":"+ca+"$1")]})),mi(sr(e,{props:[i]})),hp(e,{props:$0(n,r)});break;case"::placeholder":mi(sr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),mi(sr(e,{props:[ne(i,/:(plac\w+)/,":"+ca+"$1")]})),mi(sr(e,{props:[ne(i,/:(plac\w+)/,be+"input-$1")]})),mi(sr(e,{props:[i]})),hp(e,{props:$0(n,r)});break}return""})}}var bP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ro=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",tw="active",nw="data-styled-version",Nc="6.3.11",im=`/*!sc*/
`,ua=typeof window<"u"&&typeof document<"u",wP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),SP={};function qa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nl=new Map,Wl=new Map,rl=1,Ko=function(e){if(nl.has(e))return nl.get(e);for(;Wl.has(rl);)rl++;var t=rl++;return nl.set(e,t),Wl.set(t,e),t},CP=function(e,t){rl=t+1,nl.set(e,t),Wl.set(t,e)},om=Object.freeze([]),io=Object.freeze({});function rw(e,t,n){return n===void 0&&(n=io),e.theme!==n.theme&&e.theme||t||n.theme}var iw=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),_P=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kP=/(^-|-$)/g;function D0(e){return e.replace(_P,"-").replace(kP,"")}var EP=/(a)(d)/gi,L0=function(e){return String.fromCharCode(e+(e>25?39:97))};function gp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=L0(t%52)+n;return(L0(t%52)+n).replace(EP,"$1-$2")}var xd,Fr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ow=function(e){return Fr(5381,e)};function am(e){return gp(ow(e)>>>0)}function TP(e){return e.displayName||e.name||"Component"}function yd(e){return typeof e=="string"&&!0}var aw=typeof Symbol=="function"&&Symbol.for,sw=aw?Symbol.for("react.memo"):60115,PP=aw?Symbol.for("react.forward_ref"):60112,jP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},OP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$P=((xd={})[PP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xd[sw]=lw,xd);function A0(e){return("type"in(t=e)&&t.type.$$typeof)===sw?lw:"$$typeof"in e?$P[e.$$typeof]:jP;var t}var MP=Object.defineProperty,IP=Object.getOwnPropertyNames,R0=Object.getOwnPropertySymbols,DP=Object.getOwnPropertyDescriptor,LP=Object.getPrototypeOf,z0=Object.prototype;function cw(e,t,n){if(typeof t!="string"){if(z0){var r=LP(t);r&&r!==z0&&cw(e,r,n)}var i=IP(t);R0&&(i=i.concat(R0(t)));for(var o=A0(e),a=A0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in OP||n&&n[s]||a&&s in a||o&&s in o)){var c=DP(t,s);try{MP(e,s,c)}catch{}}}}return e}function oo(e){return typeof e=="function"}function sm(e){return typeof e=="object"&&"styledComponentId"in e}function Gr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hl(e,t){return e.join(t||"")}function Ma(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function vp(e,t,n){if(n===void 0&&(n=!1),!n&&!Ma(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=vp(e[r],t[r]);else if(Ma(t))for(var r in t)e[r]=vp(e[r],t[r]);return e}function lm(e,t){Object.defineProperty(e,"toString",{value:t})}var AP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw qa(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+im;return n},e}(),RP="style[".concat(ro,"][").concat(nw,'="').concat(Nc,'"]'),zP=new RegExp("^".concat(ro,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},xp=function(e){if(!e)return document;if(F0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(F0(t))return t}return document},FP=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},NP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(im),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(zP);if(s){var c=0|parseInt(s[1],10),d=s[2];c!==0&&(CP(d,c),FP(e,d,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},bd=function(e){for(var t=xp(e.options.target).querySelectorAll(RP),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ro)!==tw&&(NP(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function BP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var uw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(ro,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ro,tw),r.setAttribute(nw,Nc);var a=BP();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},VP=function(){function e(t){this.element=uw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw qa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),UP=function(){function e(t){this.element=uw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),WP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),N0=ua,HP={isServer:!ua,useCSSOMInjection:!wP},Gl=function(){function e(t,n,r){t===void 0&&(t=io),n===void 0&&(n={});var i=this;this.options=ct(ct({},HP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ua&&N0&&(N0=!1,bd(this)),lm(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",c=function(f){var v=function(h){return Wl.get(h)}(f);if(v===void 0)return"continue";var m=o.names.get(v);if(m===void 0||!m.size)return"continue";var p=a.getGroup(f);if(p.length===0)return"continue";var x=ro+".g"+f+'[id="'+v+'"]',w="";m.forEach(function(h){h.length>0&&(w+=h+",")}),s+=p+x+'{content:"'+w+'"}'+im},d=0;d<l;d++)c(d);return s}(i)})}return e.registerId=function(t){return Ko(t)},e.prototype.rehydrate=function(){!this.server&&ua&&bd(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ct(ct({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ua&&t.target!==this.options.target&&xp(this.options.target)!==xp(t.target)&&bd(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new WP(i):r?new VP(i):new UP(i)}(this.options),new AP(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ko(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ko(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ko(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),GP=/&/g,Nn=47,Nr=42;function B0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==Nn||e.charCodeAt(o+1)!==Nr)if(i)a===Nr&&e.charCodeAt(o+1)===Nn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function dw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=dw(n.children,t)),n})}function qP(e){var t,n,r,i=e===void 0?io:e,o=i.options,a=o===void 0?io:o,l=i.plugins,s=l===void 0?om:l,c=function(p,x,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):p},d=s.slice();d.push(function(p){p.type===Ac&&p.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),p.props[0]=p.props[0].replace(GP,n).replace(r,c))}),a.prefix&&d.push(yP),d.push(gP);var f=[],v=vP(d.concat(xP(function(p){return f.push(p)}))),m=function(p,x,w,h){x===void 0&&(x=""),w===void 0&&(w=""),h===void 0&&(h="&"),t=h,n=x,r=void 0;var g=function(S){if(!B0(S))return S;for(var k=S.length,T="",E=0,_=0,$=0,M=!1,L=0;L<k;L++){var D=S.charCodeAt(L);if($!==0||M||D!==Nn||S.charCodeAt(L+1)!==Nr)if(M)D===Nr&&S.charCodeAt(L+1)===Nn&&(M=!1,L++);else if(D!==34&&D!==39||L!==0&&S.charCodeAt(L-1)===92){if($===0)if(D===123)_++;else if(D===125){if(--_<0){for(var j=L+1;j<k;){var A=S.charCodeAt(j);if(A===59||A===10)break;j++}j<k&&S.charCodeAt(j)===59&&j++,_=0,L=j-1,E=j;continue}_===0&&(T+=S.substring(E,L+1),E=L+1)}else D===59&&_===0&&(T+=S.substring(E,L+1),E=L+1)}else $===0?$=D:$===D&&($=0);else M=!0,L++}if(E<k){var I=S.substring(E);B0(I)||(T+=I)}return T}(function(S){if(S.indexOf("//")===-1)return S;for(var k=S.length,T=[],E=0,_=0,$=0,M=0;_<k;){var L=S.charCodeAt(_);if(L!==34&&L!==39||_!==0&&S.charCodeAt(_-1)===92)if($===0)if(L===Nn&&_+1<k&&S.charCodeAt(_+1)===Nr){for(_+=2;_+1<k&&(S.charCodeAt(_)!==Nr||S.charCodeAt(_+1)!==Nn);)_++;_+=2}else if(L===40&&_>=3&&(32|S.charCodeAt(_-1))==108&&(32|S.charCodeAt(_-2))==114&&(32|S.charCodeAt(_-3))==117)M=1,_++;else if(M>0)L===41?M--:L===40&&M++,_++;else if(L===Nr&&_+1<k&&S.charCodeAt(_+1)===Nn)_>E&&T.push(S.substring(E,_)),E=_+=2;else if(L===Nn&&_+1<k&&S.charCodeAt(_+1)===Nn){for(_>E&&T.push(S.substring(E,_));_<k&&S.charCodeAt(_)!==10;)_++;E=_}else _++;else _++;else $===0?$=L:$===L&&($=0),_++}return E===0?S:(E<k&&T.push(S.substring(E)),T.join(""))}(p)),b=hP(w||x?"".concat(w," ").concat(x," { ").concat(g," }"):g);return a.namespace&&(b=dw(b,a.namespace)),f=[],Ul(b,v),f};return m.hash=s.length?s.reduce(function(p,x){return x.name||qa(15),Fr(p,x.name)},5381).toString():"",m}var YP=new Gl,yp=qP(),fw=Q.createContext({shouldForwardProp:void 0,styleSheet:YP,stylis:yp});fw.Consumer;Q.createContext(void 0);function bp(){return Q.useContext(fw)}var pw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=yp);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,lm(this,function(){throw qa(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=yp),this.name+t.hash},e}();function XP(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in bP||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var KP=function(e){return e>="A"&&e<="Z"};function V0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;KP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var hw=function(e){return e==null||e===!1||e===""},mw=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!hw(r)&&(Array.isArray(r)&&r.isCss||oo(r)?t.push("".concat(V0(n),":"),r,";"):Ma(r)?t.push.apply(t,to(to(["".concat(n," {")],mw(r),!1),["}"],!1)):t.push("".concat(V0(n),": ").concat(XP(n,r),";")))}return t};function Er(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(hw(e))return i;if(sm(e))return i.push(".".concat(e.styledComponentId)),i;if(oo(e)){if(!oo(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Er(o,t,n,r,i)}var a;if(e instanceof pw)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Ma(e)){for(var l=mw(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Er(e[s],t,n,r,i);return i}function gw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(oo(n)&&!sm(n))return!1}return!0}var QP=ow(Nc),ZP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gw(t),this.componentId=n,this.baseHash=Fr(QP,n),this.baseStyle=r,Gl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gr(i,this.staticRulesId);else{var o=Hl(Er(this.rules,t,n,r)),a=gp(Fr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Gr(i,a),this.staticRulesId=a}else{for(var s=Fr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var v=Hl(Er(f,t,n,r));s=Fr(Fr(s,String(d)),v),c+=v}}if(c){var m=gp(s>>>0);if(!n.hasNameForId(this.componentId,m)){var p=r(c,".".concat(m),void 0,this.componentId);n.insertRules(this.componentId,m,p)}i=Gr(i,m)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ko(this.componentId)):""}},e}(),cm=Q.createContext(void 0);cm.Consumer;var wd={};function JP(e,t,n){var r=sm(e),i=e,o=!yd(e),a=t.attrs,l=a===void 0?om:a,s=t.componentId,c=s===void 0?function(S,k){var T=typeof S!="string"?"sc":D0(S);wd[T]=(wd[T]||0)+1;var E="".concat(T,"-").concat(am(Nc+T+wd[T]));return k?"".concat(k,"-").concat(E):E}(t.displayName,t.parentComponentId):s,d=t.displayName,f=d===void 0?function(S){return yd(S)?"styled.".concat(S):"Styled(".concat(TP(S),")")}(e):d,v=t.displayName&&t.componentId?"".concat(D0(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,p=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;p=function(S,k){return x(S,k)&&w(S,k)}}else p=x}var h=new ZP(n,v,r?i.componentStyle:void 0);function g(S,k){return function(T,E,_){var $=T.attrs,M=T.componentStyle,L=T.defaultProps,D=T.foldedComponentIds,j=T.styledComponentId,A=T.target,I=Q.useContext(cm),R=bp(),z=T.shouldForwardProp||R.shouldForwardProp,P=rw(E,I,L)||io,O=function(W,q,oe){for(var he,ie=ct(ct({},q),{className:void 0,theme:oe}),Ie=0;Ie<W.length;Ie+=1){var We=oo(he=W[Ie])?he(ie):he;for(var He in We)He==="className"?ie.className=Gr(ie.className,We[He]):He==="style"?ie.style=ct(ct({},ie.style),We[He]):ie[He]=We[He]}return"className"in q&&typeof q.className=="string"&&(ie.className=Gr(ie.className,q.className)),ie}($,E,P),N=O.as||A,B={};for(var F in O)O[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&O.theme===P||(F==="forwardedAs"?B.as=O.forwardedAs:z&&!z(F,N)||(B[F]=O[F]));var V=function(W,q){var oe=bp(),he=W.generateAndInjectStyles(q,oe.styleSheet,oe.stylis);return he}(M,O),H=V.className,G=Gr(D,j);return H&&(G+=" "+H),O.className&&(G+=" "+O.className),B[yd(N)&&!iw.has(N)?"class":"className"]=G,_&&(B.ref=_),y.createElement(N,B)}(b,S,k)}g.displayName=f;var b=Q.forwardRef(g);return b.attrs=m,b.componentStyle=h,b.displayName=f,b.shouldForwardProp=p,b.foldedComponentIds=r?Gr(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=v,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(k){for(var T=[],E=1;E<arguments.length;E++)T[E-1]=arguments[E];for(var _=0,$=T;_<$.length;_++)vp(k,$[_],!0);return k}({},i.defaultProps,S):S}}),lm(b,function(){return".".concat(b.styledComponentId)}),o&&cw(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function U0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var W0=function(e){return Object.assign(e,{isCss:!0})};function um(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(oo(e)||Ma(e))return W0(Er(U0(om,to([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Er(r):W0(Er(U0(r,t)))}function wp(e,t,n){if(n===void 0&&(n=io),!t)throw qa(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,um.apply(void 0,to([i],o,!1)))};return r.attrs=function(i){return wp(e,t,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return wp(e,t,ct(ct({},n),i))},r}var vw=function(e){return wp(JP,e)},C=vw;iw.forEach(function(e){C[e]=vw(e)});var ej=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=gw(t),Gl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Hl(Er(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Gl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function tj(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=um.apply(void 0,to([e],t,!1)),i="sc-global-".concat(am(JSON.stringify(r))),o=new ej(r,i),a=new WeakMap,l=function(c){var d=bp(),f=Q.useContext(cm),v=a.get(d.styleSheet);return v===void 0&&(v=d.styleSheet.allocateGSInstance(i),a.set(d.styleSheet,v)),(typeof window>"u"||!d.styleSheet.server)&&s(v,c,d.styleSheet,f,d.stylis),Q.useLayoutEffect(function(){return d.styleSheet.server||s(v,c,d.styleSheet,f,d.stylis),function(){var m;o.removeStyles(v,d.styleSheet),m=d.styleSheet.options.target,typeof document<"u"&&(m??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(p){return p.remove()})}},[v,c,d.styleSheet,f,d.stylis]),null};function s(c,d,f,v,m){if(o.isStatic)o.renderStyles(c,SP,f,m);else{var p=ct(ct({},d),{theme:rw(d,v,l.defaultProps)});o.renderStyles(c,p,f,m)}}return Q.memo(l)}function dm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Hl(um.apply(void 0,to([e],t,!1))),i=am(r);return new pw(i,r)}const nj=C.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,rj=C.div`
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
`,ij=C.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,oj=C.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,aj=C.div`
  display: flex;
  justify-content: space-around;
  

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`,sj=C.button`
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
`;const lj=C(Te)`
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
`;const cj=C.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,uj=C.button`
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
`;const dj=C.div`
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
`,fj=C.button`
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
`,pj=C.nav`
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
`,hj=C.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,mj=C.div`
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
`,gj=C.div`
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
`,vj=C.input`
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
`,xj=C.button`
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
`,yj=C.svg`
  width: 24px;
  height: 24px;
`,bj=C.ul`
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
`,wj=C.li`
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


`,Sj=C.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,Cj=C.h3`
      text-align: left;
      font-size: 22px;
      font-weight: 800;

`,_j=C.h3`

      font-size: 22px;
         

`,kj=C.div`
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

    
`,hn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",Ej=()=>{const[e,t]=y.useState(""),[n,r]=y.useState([]),[i,o]=y.useState(!1),a=yt(),l=y.useRef(null);y.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const c=setTimeout(async()=>{try{const f=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(f.data),o(!0)}catch(d){console.error(d)}},300);return()=>clearTimeout(c)},[e]),y.useEffect(()=>{const c=d=>{l.current&&!l.current.contains(d.target)&&o(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const s=c=>{t(""),o(!1),a(`/product/${c.id}`)};return u.jsxs(gj,{ref:l,children:[u.jsx(vj,{name:"site-search",value:e,onChange:c=>t(c.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),u.jsx(xj,{className:"search-button",children:u.jsx(yj,{children:u.jsx("use",{href:`${hn}#icon-search`})})}),i&&n.length>0&&u.jsx(bj,{children:n.map(c=>{var v,m;const f=c.new_price&&c.new_price<c.price?c.new_price:c.price;return u.jsxs(wj,{onClick:()=>s(c),children:[u.jsx(Sj,{src:((m=(v=c.images)==null?void 0:v[0])==null?void 0:m.url)||"/nofoto.png",alt:""}),u.jsxs(kj,{children:[u.jsx(Cj,{children:c.name}),u.jsxs(_j,{children:[f," грн."]})]})]},c.id)})})]})};var xw={exports:{}},yw={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=y;function Tj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pj=typeof Object.is=="function"?Object.is:Tj,jj=Ya.useSyncExternalStore,Oj=Ya.useRef,$j=Ya.useEffect,Mj=Ya.useMemo,Ij=Ya.useDebugValue;yw.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=Oj(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Mj(function(){function s(m){if(!c){if(c=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var p=a.value;if(i(p,m))return f=p}return f=m}if(p=f,Pj(d,m))return p;var x=r(m);return i!==void 0&&i(p,x)?(d=m,p):(d=m,f=x)}var c=!1,d,f,v=n===void 0?null:n;return[function(){return s(t())},v===null?void 0:function(){return s(v())}]},[t,n,r,i]);var l=jj(e,o[0],o[1]);return $j(function(){a.hasValue=!0,a.value=l},[l]),Ij(l),l};xw.exports=yw;var Dj=xw.exports;function Lj(e){e()}function Aj(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Lj(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var H0={notify(){},get:()=>[]};function Rj(e,t){let n,r=H0,i=0,o=!1;function a(x){d();const w=r.subscribe(x);let h=!1;return()=>{h||(h=!0,w(),f())}}function l(){r.notify()}function s(){p.onStateChange&&p.onStateChange()}function c(){return o}function d(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=Aj())}function f(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=H0)}function v(){o||(o=!0,d())}function m(){o&&(o=!1,f())}const p={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:c,trySubscribe:v,tryUnsubscribe:m,getListeners:()=>r};return p}var zj=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fj=zj(),Nj=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Bj=Nj(),Vj=()=>Fj||Bj?y.useLayoutEffect:y.useEffect,Uj=Vj(),Sd=Symbol.for("react-redux-context"),Cd=typeof globalThis<"u"?globalThis:{};function Wj(){if(!y.createContext)return{};const e=Cd[Sd]??(Cd[Sd]=new Map);let t=e.get(y.createContext);return t||(t=y.createContext(null),e.set(y.createContext,t)),t}var jr=Wj();function Hj(e){const{children:t,context:n,serverState:r,store:i}=e,o=y.useMemo(()=>{const s=Rj(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=y.useMemo(()=>i.getState(),[i]);Uj(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||jr;return y.createElement(l.Provider,{value:o},t)}var Gj=Hj;function fm(e=jr){return function(){return y.useContext(e)}}var bw=fm();function ww(e=jr){const t=e===jr?bw:fm(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var qj=ww();function Yj(e=jr){const t=e===jr?qj:ww(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Mt=Yj(),Xj=(e,t)=>e===t;function Kj(e=jr){const t=e===jr?bw:fm(e),n=(r,i={})=>{const{equalityFn:o=Xj}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:c}=a;y.useRef(!0);const d=y.useCallback({[r.name](v){return r(v)}}[r.name],[r]),f=Dj.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,c||l.getState,d,o);return y.useDebugValue(f),f};return Object.assign(n,{withTypes:()=>n}),n}var Ue=Kj();const Qj=C(Te)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,Zj=C.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,Jj=C.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,eO=C.div`
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
`,tO=({onClick:e})=>{const t=Ue(n=>n.cart.items.length);return u.jsx(Qj,{to:"/cart",children:u.jsxs(Jj,{onClick:e,children:[u.jsx(Zj,{children:u.jsx("use",{href:`${hn}#icon-cart`})}),t>0&&u.jsx(eO,{children:t})]})})},nO=C.nav`
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
`,rO=()=>u.jsxs(nO,{children:[u.jsx(vi,{to:"/",children:"Головна"}),u.jsx(vi,{to:"/catalog",children:"Каталог"}),u.jsx(vi,{to:"/catalog/new",children:"Новинки"}),u.jsx(vi,{to:"/catalog/sale",children:"Акційні товари"}),u.jsx(vi,{to:"/about",children:"Про нас"}),u.jsx(vi,{to:"/contacts",children:"Контакти"})]}),iO=C.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,oO=C(Te)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,aO=C.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,sO=C.div`

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
`,lO=({onClick:e})=>{const t=Ue(n=>n.favorites.items.length);return u.jsx(oO,{to:"/favorite",children:u.jsxs(aO,{onClick:e,children:[u.jsx(iO,{children:u.jsx("use",{href:`${hn}#icon-heart`})}),t>0&&u.jsx(sO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=e=>{const t=uO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>y.createElement("svg",{ref:s,...dO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Sw("lucide",i),...!o&&!fO(l)&&{"aria-hidden":"true"},...l},[...a.map(([c,d])=>y.createElement(c,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(e,t)=>{const n=y.forwardRef(({className:r,...i},o)=>y.createElement(pO,{ref:o,iconNode:t,className:Sw(`lucide-${cO(G0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=G0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Bc=Ke("arrow-down-narrow-wide",hO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Vc=Ke("arrow-right",mO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],vO=Ke("badge-percent",gO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],yO=Ke("chevron-down",xO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],wO=Ke("chevron-up",bO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],q0=Ke("eye-off",SO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Y0=Ke("eye",CO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Xa=Ke("heart",_O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],EO=Ke("house",kO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],PO=Ke("info",TO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],OO=Ke("layers-plus",jO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],MO=Ke("mail",$O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],DO=Ke("shopping-bag",IO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],vo=Ke("shopping-cart",LO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Cw=Ke("sliders-horizontal",AO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],_w=Ke("trash-2",RO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],FO=Ke("user-round",zO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kw=Ke("x",NO),BO=({openLogin:e})=>{const[t,n]=y.useState(!1),r=yt(),i=()=>{localStorage.getItem("token")?r("/account/profile"):e()};return u.jsx(nj,{children:u.jsx(rj,{children:u.jsxs(ij,{children:[u.jsxs(oj,{children:[u.jsx(lj,{to:"/",children:"Дідів хлів"}),u.jsxs(aj,{children:[u.jsx(tO,{}),u.jsx(sj,{onClick:i,children:u.jsx(FO,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),u.jsx(lO,{}),u.jsx(rO,{}),u.jsx(uj,{onClick:()=>n(!t),children:u.jsx(cj,{children:u.jsx("use",{href:`${hn}#icon-menu`})})}),u.jsx(mj,{open:t,onClick:()=>n(!1)}),u.jsxs(dj,{open:t,children:[u.jsx(fj,{onClick:()=>n(!1),children:u.jsx(kw,{size:28,strokeWidth:1.5})}),u.jsxs(pj,{children:[u.jsxs(gi,{onClick:()=>n(!1),to:"/",children:[u.jsx(EO,{size:22,strokeWidth:1.5})," Головна"]}),u.jsxs(gi,{onClick:()=>n(!1),to:"/catalog",children:[u.jsx(DO,{size:22,strokeWidth:1.5})," Каталог"]}),u.jsxs(gi,{onClick:()=>n(!1),to:"/catalog/new",children:[u.jsx(OO,{size:22,strokeWidth:1.5}),"Новинки"]}),u.jsxs(gi,{onClick:()=>n(!1),to:"/catalog/sale",children:[u.jsx(vO,{size:22,strokeWidth:1.5}),"Акційні товари"]}),u.jsxs(gi,{onClick:()=>n(!1),to:"/about",children:[u.jsx(PO,{size:22,strokeWidth:1.5})," Про нас"]}),u.jsxs(gi,{onClick:()=>n(!1),to:"/contacts",children:[u.jsx(MO,{size:22,strokeWidth:1.5})," Контакти"]})]}),u.jsx(hj,{children:u.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),u.jsx(Ej,{})]})})})},VO=C.div`

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
`,WO=C.div`
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
`,_d=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,kd=C.h3`
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
`,HO=C.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,Ed=C.a`
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
`,GO=()=>u.jsx(VO,{children:u.jsxs(UO,{children:[u.jsxs(WO,{children:[u.jsxs(_d,{children:[u.jsx(kd,{children:"Навігація"}),u.jsx(wn,{to:"/",children:"Головна"}),u.jsx(wn,{to:"/about",children:"Про нас"}),u.jsx(wn,{to:"/catalog",children:"Каталог"}),u.jsx(wn,{to:"/contacts",children:"Контакти"})]}),u.jsxs(_d,{children:[u.jsx(kd,{children:"Інформація"}),u.jsx(wn,{to:"/delivery",children:"Оплата і доставка"}),u.jsx(wn,{children:"Повернення"}),u.jsx(wn,{children:"Гарантія"}),u.jsx(wn,{children:"Політика конфіденційності"})]})]}),u.jsxs(_d,{children:[u.jsx(kd,{children:"Контакти"}),u.jsx(wn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),u.jsx(wn,{href:"mailto:email@email.com",children:"email@email.com"}),u.jsxs(HO,{children:[u.jsx(Ed,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-instagram`})})}),u.jsx(Ed,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-telegram`})})}),u.jsx(Ed,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:u.jsx("use",{href:`${hn}#icon-olx`})})})]})]})]})}),qO=({openLogin:e,openRegister:t})=>u.jsxs(u.Fragment,{children:[u.jsx(BO,{openLogin:e,openRegister:t}),u.jsx("main",{style:{flex:1},children:u.jsx(Vx,{})}),u.jsx(GO,{})]}),YO=C.section`
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
`,ZO=C.p`
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
`,JO=C(Te)`
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
`,e4=C.span`
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
`,t4=C.div`
  padding: 10px 0;
`,n4=C.h3`
  font-size: 20px;
  font-weight: 600;

  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`,r4=C.div`
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
    background: var(--orange-color);
    color: white;
  }
`;C(Te)`
  color: var(--white-color);
  padding: 10px 20px;
  background: var(--orange-color);
  border-radius: 15px;
  text-decoration: none;
`;const i4=C(Te)`
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
`,o4=C.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
`,a4=C.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Ew(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ew(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Xr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ew(e))&&(r&&(r+=" "),r+=t);return r}function s4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}s4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Ka=e=>typeof e=="number"&&!isNaN(e),ni=e=>typeof e=="string",Jn=e=>typeof e=="function",l4=e=>ni(e)||Ka(e),Sp=e=>ni(e)||Jn(e)?e:null,c4=(e,t)=>e===!1||Ka(e)&&e>0?e:t,Cp=e=>y.isValidElement(e)||ni(e)||Jn(e)||Ka(e);function u4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function d4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:c,isIn:d,playToast:f}){let v=n?`${e}--${a}`:e,m=n?`${t}--${a}`:t,p=y.useRef(0);return y.useLayoutEffect(()=>{let x=c.current,w=v.split(" "),h=g=>{g.target===c.current&&(f(),x.removeEventListener("animationend",h),x.removeEventListener("animationcancel",h),p.current===0&&g.type!=="animationcancel"&&x.classList.remove(...w))};x.classList.add(...w),x.addEventListener("animationend",h),x.addEventListener("animationcancel",h)},[]),y.useEffect(()=>{let x=c.current,w=()=>{x.removeEventListener("animationend",w),r?u4(x,s,i):s()};d||(l?w():(p.current=1,x.className+=` ${m}`,x.addEventListener("animationend",w)))},[d]),Q.createElement(Q.Fragment,null,o)}}function X0(e,t){return{content:Tw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Tw(e,t,n=!1){return y.isValidElement(e)&&!ni(e.type)?y.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Jn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function f4({closeToast:e,theme:t,ariaLabel:n="close"}){return Q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},Q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function p4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:c,theme:d}){let f=i||a&&l===0,v={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(v.transform=`scaleX(${l})`);let m=Xr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),p=Jn(o)?o({rtl:s,type:r,defaultClassName:m}):Xr(m,o),x={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{c&&n()}};return Q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":f},Q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),Q.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer",className:p,style:v,...x}))}var h4=1,Pw=()=>`${h4++}`;function m4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,c=new Set,d=g=>(c.add(g),()=>c.delete(g)),f=()=>{a=Array.from(s.values()),c.forEach(g=>g())},v=({containerId:g,toastId:b,updateId:S})=>{let k=g?g!==e:e!==1,T=s.has(b)&&S==null;return k||T},m=(g,b)=>{s.forEach(S=>{var k;(b==null||b===S.props.toastId)&&((k=S.toggle)==null||k.call(S,g))})},p=g=>{var b,S;(S=(b=g.props)==null?void 0:b.onClose)==null||S.call(b,g.removalReason),g.isActive=!1},x=g=>{if(g==null)s.forEach(p);else{let b=s.get(g);b&&p(b)}f()},w=()=>{i-=o.length,o=[]},h=g=>{var b,S;let{toastId:k,updateId:T}=g.props,E=T==null;g.staleId&&s.delete(g.staleId),g.isActive=!0,s.set(k,g),f(),n(X0(g,E?"added":"updated")),E&&((S=(b=g.props).onOpen)==null||S.call(b))};return{id:e,props:l,observe:d,toggle:m,removeToast:x,toasts:s,clearQueue:w,buildToast:(g,b)=>{if(v(b))return;let{toastId:S,updateId:k,data:T,staleId:E,delay:_}=b,$=k==null;$&&i++;let M={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(b).filter(([D,j])=>j!=null)),toastId:S,updateId:k,data:T,isIn:!1,className:Sp(b.className||l.toastClassName),progressClassName:Sp(b.progressClassName||l.progressClassName),autoClose:b.isLoading?!1:c4(b.autoClose,l.autoClose),closeToast(D){s.get(S).removalReason=D,x(S)},deleteToast(){let D=s.get(S);if(D!=null){if(n(X0(D,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){h(o.shift());return}f()}}};M.closeButton=l.closeButton,b.closeButton===!1||Cp(b.closeButton)?M.closeButton=b.closeButton:b.closeButton===!0&&(M.closeButton=Cp(l.closeButton)?l.closeButton:!0);let L={content:g,props:M,staleId:E};l.limit&&l.limit>0&&i>l.limit&&$?o.push(L):Ka(_)?setTimeout(()=>{h(L)},_):h(L)},setProps(g){l=g},setToggle:(g,b)=>{let S=s.get(g);S&&(S.toggle=b)},isToastActive:g=>{var b;return(b=s.get(g))==null?void 0:b.isActive},getSnapshot:()=>a}}var mt=new Map,Ia=[],_p=new Set,g4=e=>_p.forEach(t=>t(e)),jw=()=>mt.size>0;function v4(){Ia.forEach(e=>$w(e.content,e.options)),Ia=[]}var x4=(e,{containerId:t})=>{var n;return(n=mt.get(t||1))==null?void 0:n.toasts.get(e)};function Ow(e,t){var n;if(t)return!!((n=mt.get(t))!=null&&n.isToastActive(e));let r=!1;return mt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function y4(e){if(!jw()){Ia=Ia.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||l4(e))mt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=mt.get(e.containerId);t?t.removeToast(e.id):mt.forEach(n=>{n.removeToast(e.id)})}}var b4=(e={})=>{mt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function $w(e,t){Cp(e)&&(jw()||Ia.push({content:e,options:t}),mt.forEach(n=>{n.buildToast(e,t)}))}function w4(e){var t;(t=mt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Mw(e,t){mt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function S4(e){let t=e.containerId||1;return{subscribe(n){let r=m4(t,e,g4);mt.set(t,r);let i=r.observe(n);return v4(),()=>{i(),mt.delete(t)}},setProps(n){var r;(r=mt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=mt.get(t))==null?void 0:n.getSnapshot()}}}function C4(e){return _p.add(e),()=>{_p.delete(e)}}function _4(e){return e&&(ni(e.toastId)||Ka(e.toastId))?e.toastId:Pw()}function Qa(e,t){return $w(e,t),t.toastId}function Uc(e,t){return{...t,type:t&&t.type||e,toastId:_4(t)}}function Wc(e){return(t,n)=>Qa(t,Uc(e,n))}function K(e,t){return Qa(e,Uc("default",t))}K.loading=(e,t)=>Qa(e,Uc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function k4(e,{pending:t,error:n,success:r},i){let o;t&&(o=ni(t)?K.loading(t,i):K.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,f)=>{if(d==null){K.dismiss(o);return}let v={type:c,...a,...i,data:f},m=ni(d)?{render:d}:d;return o?K.update(o,{...v,...m}):K(m.render,{...v,...m}),f},s=Jn(e)?e():e;return s.then(c=>l("success",r,c)).catch(c=>l("error",n,c)),s}K.promise=k4;K.success=Wc("success");K.info=Wc("info");K.error=Wc("error");K.warning=Wc("warning");K.warn=K.warning;K.dark=(e,t)=>Qa(e,Uc("default",{theme:"dark",...t}));function E4(e){y4(e)}K.dismiss=E4;K.clearWaitingQueue=b4;K.isActive=Ow;K.update=(e,t={})=>{let n=x4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Pw()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Qa(a,o)}};K.done=e=>{K.update(e,{progress:1})};K.onChange=C4;K.play=e=>Mw(!0,e);K.pause=e=>Mw(!1,e);function T4(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=y.useRef(S4(e)).current;i(e);let o=(t=y.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(c=>{let{position:d}=c.props;s.has(d)||s.set(d,[]),s.get(d).push(c)}),Array.from(s,c=>l(c[0],c[1]))}return{getToastToRender:a,isToastActive:Ow,count:o==null?void 0:o.length}}function P4(e){let[t,n]=y.useState(!1),[r,i]=y.useState(!1),o=y.useRef(null),a=y.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:c,onClick:d,closeOnClick:f}=e;w4({id:e.toastId,containerId:e.containerId,fn:n}),y.useEffect(()=>{if(e.pauseOnFocusLoss)return v(),()=>{m()}},[e.pauseOnFocusLoss]);function v(){document.hasFocus()||h(),window.addEventListener("focus",w),window.addEventListener("blur",h)}function m(){window.removeEventListener("focus",w),window.removeEventListener("blur",h)}function p(E){if(e.draggable===!0||e.draggable===E.pointerType){g();let _=o.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=E.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=E.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function x(E){let{top:_,bottom:$,left:M,right:L}=o.current.getBoundingClientRect();E.nativeEvent.type!=="touchend"&&e.pauseOnHover&&E.clientX>=M&&E.clientX<=L&&E.clientY>=_&&E.clientY<=$?h():w()}function w(){n(!0)}function h(){n(!1)}function g(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",k)}function b(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",k)}function S(E){let _=o.current;if(a.canDrag&&_){a.didMove=!0,t&&h(),e.draggableDirection==="x"?a.delta=E.clientX-a.start:a.delta=E.clientY-a.start,a.start!==E.clientX&&(a.canCloseOnClick=!1);let $=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${$},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function k(){b();let E=o.current;if(a.canDrag&&a.didMove&&E){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}let T={onPointerDown:p,onPointerUp:x};return l&&s&&(T.onMouseEnter=h,e.stacked||(T.onMouseLeave=w)),f&&(T.onClick=E=>{d&&d(E),a.canCloseOnClick&&c(!0)}),{playToast:w,pauseToast:h,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:T}}var j4=typeof window<"u"?y.useLayoutEffect:y.useEffect,Hc=({theme:e,type:t,isLoading:n,...r})=>Q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function O4(e){return Q.createElement(Hc,{...e},Q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function $4(e){return Q.createElement(Hc,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function M4(e){return Q.createElement(Hc,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function I4(e){return Q.createElement(Hc,{...e},Q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function D4(){return Q.createElement("div",{className:"Toastify__spinner"})}var kp={info:$4,warning:O4,success:M4,error:I4,spinner:D4},L4=e=>e in kp;function A4({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Jn(r)?i=r({...o,isLoading:n}):y.isValidElement(r)?i=y.cloneElement(r,o):n?i=kp.spinner():L4(t)&&(i=kp[t](o))),i}var R4=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=P4(e),{closeButton:a,children:l,autoClose:s,onClick:c,type:d,hideProgressBar:f,closeToast:v,transition:m,position:p,className:x,style:w,progressClassName:h,updateId:g,role:b,progress:S,rtl:k,toastId:T,deleteToast:E,isIn:_,isLoading:$,closeOnClick:M,theme:L,ariaLabel:D}=e,j=Xr("Toastify__toast",`Toastify__toast-theme--${L}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":M}),A=Jn(x)?x({rtl:k,position:p,type:d,defaultClassName:j}):Xr(j,x),I=A4(e),R=!!S||!s,z={closeToast:v,type:d,theme:L},P=null;return a===!1||(Jn(a)?P=a(z):y.isValidElement(a)?P=y.cloneElement(a,z):P=f4(z)),Q.createElement(m,{isIn:_,done:E,position:p,preventExitTransition:n,nodeRef:r,playToast:o},Q.createElement("div",{id:T,tabIndex:0,onClick:c,"data-in":_,className:A,...i,style:w,ref:r,..._&&{role:b,"aria-label":D}},I!=null&&Q.createElement("div",{className:Xr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},I),Tw(l,e,!t),P,!e.customProgressBar&&Q.createElement(p4,{...g&&!R?{key:`p-${g}`}:{},rtl:k,theme:L,delay:s,isRunning:t,isIn:_,closeToast:v,hide:f,type:d,className:h,controlledProgress:R,progress:S||0})))},z4=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),F4=d4(z4("bounce",!0)),N4={position:"top-right",transition:F4,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Ln(e){let t={...N4,...e},n=e.stacked,[r,i]=y.useState(!0),o=y.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=T4(t),{className:c,style:d,rtl:f,containerId:v,hotKeys:m}=t;function p(w){let h=Xr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":f});return Jn(c)?c({position:w,rtl:f,defaultClassName:h}):Xr(h,Sp(c))}function x(){n&&(i(!0),K.play())}return j4(()=>{var w;if(n){let h=o.current.querySelectorAll('[data-in="true"]'),g=12,b=(w=t.position)==null?void 0:w.includes("top"),S=0,k=0;Array.from(h).reverse().forEach((T,E)=>{let _=T;_.classList.add("Toastify__toast--stacked"),E>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=b?"top":"bot");let $=S*(r?.2:1)+(r?0:g*E);_.style.setProperty("--y",`${b?$:$*-1}px`),_.style.setProperty("--g",`${g}`),_.style.setProperty("--s",`${1-(r?k:0)}`),S+=_.offsetHeight,k+=.025})}},[r,s,n]),y.useEffect(()=>{function w(h){var g;let b=o.current;m(h)&&((g=b.querySelector('[tabIndex="0"]'))==null||g.focus(),i(!1),K.pause()),h.key==="Escape"&&(document.activeElement===b||b!=null&&b.contains(document.activeElement))&&(i(!0),K.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[m]),Q.createElement("section",{ref:o,className:"Toastify",id:v,onMouseEnter:()=>{n&&(i(!1),K.pause())},onMouseLeave:x,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,h)=>{let g=h.length?{...d}:{...d,pointerEvents:"none"};return Q.createElement("div",{tabIndex:-1,className:p(w),"data-stacked":n,style:g,key:`c-${w}`},h.map(({content:b,props:S})=>Q.createElement(R4,{...S,stacked:n,collapseAll:x,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},b)))}))}const ri="/Didiv/assets/nofoto-2f8d9d99.png",B4=C.div`
`,V4=C.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,U4=C.h2`
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

`,W4=C.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;C.div``;const H4=C.div`
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
`,G4=C.div`
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
`,Iw=C.div`
  position: relative;
  display: block;
 `,Gc=C.div`
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
`,q4=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;
`,Y4=C.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,X4=C.p`
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

`;const Dw=C.div.attrs({className:"card-buttons"})`
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
`;const K4=C.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,Td=C.button`
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
`,Q4=C.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,Z4=C.button`
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
`,J4=C.div`
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
`,xi=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,Lw=C.div`
  text-align: center;
  width: 100px;
 
`,Aw=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Rw=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,zw=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Fw=C.span`
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
`;function Ze(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var e$=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),K0=e$,Pd=()=>Math.random().toString(36).substring(7).split("").join("."),t$={INIT:`@@redux/INIT${Pd()}`,REPLACE:`@@redux/REPLACE${Pd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Pd()}`},Yl=t$;function mm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function gm(e,t,n){if(typeof e!="function")throw new Error(Ze(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ze(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ze(1));return n(gm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function c(){a===o&&(a=new Map,o.forEach((w,h)=>{a.set(h,w)}))}function d(){if(s)throw new Error(Ze(3));return i}function f(w){if(typeof w!="function")throw new Error(Ze(4));if(s)throw new Error(Ze(5));let h=!0;c();const g=l++;return a.set(g,w),function(){if(h){if(s)throw new Error(Ze(6));h=!1,c(),a.delete(g),o=null}}}function v(w){if(!mm(w))throw new Error(Ze(7));if(typeof w.type>"u")throw new Error(Ze(8));if(typeof w.type!="string")throw new Error(Ze(17));if(s)throw new Error(Ze(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(g=>{g()}),w}function m(w){if(typeof w!="function")throw new Error(Ze(10));r=w,v({type:Yl.REPLACE})}function p(){const w=f;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(Ze(11));function g(){const S=h;S.next&&S.next(d())}return g(),{unsubscribe:w(g)}},[K0](){return this}}}return v({type:Yl.INIT}),{dispatch:v,subscribe:f,getState:d,replaceReducer:m,[K0]:p}}function n$(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Yl.INIT})>"u")throw new Error(Ze(12));if(typeof n(void 0,{type:Yl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ze(13))})}function r$(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{n$(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const c={};for(let d=0;d<r.length;d++){const f=r[d],v=n[f],m=a[f],p=v(m,l);if(typeof p>"u")throw l&&l.type,new Error(Ze(14));c[f]=p,s=s||p!==m}return s=s||r.length!==Object.keys(a).length,s?c:a}}function Xl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function i$(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Ze(15))};const a={getState:i.getState,dispatch:(s,...c)=>o(s,...c)},l=e.map(s=>s(a));return o=Xl(...l)(i.dispatch),{...i,dispatch:o}}}function o$(e){return mm(e)&&"type"in e&&typeof e.type=="string"}var Nw=Symbol.for("immer-nothing"),Q0=Symbol.for("immer-draftable"),vt=Symbol.for("immer-state");function un(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var zt=Object,ao=zt.getPrototypeOf,Kl="constructor",qc="prototype",Ep="configurable",Ql="enumerable",il="writable",Da="value",er=e=>!!e&&!!e[vt];function vn(e){var t;return e?Bw(e)||Xc(e)||!!e[Q0]||!!((t=e[Kl])!=null&&t[Q0])||Kc(e)||Qc(e):!1}var a$=zt[qc][Kl].toString(),Z0=new WeakMap;function Bw(e){if(!e||!vm(e))return!1;const t=ao(e);if(t===null||t===zt[qc])return!0;const n=zt.hasOwnProperty.call(t,Kl)&&t[Kl];if(n===Object)return!0;if(!Ei(n))return!1;let r=Z0.get(n);return r===void 0&&(r=Function.toString.call(n),Z0.set(n,r)),r===a$}function Yc(e,t,n=!0){Za(e)===0?(n?Reflect.ownKeys(e):zt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Za(e){const t=e[vt];return t?t.type_:Xc(e)?1:Kc(e)?2:Qc(e)?3:0}var J0=(e,t,n=Za(e))=>n===2?e.has(t):zt[qc].hasOwnProperty.call(e,t),Tp=(e,t,n=Za(e))=>n===2?e.get(t):e[t],Zl=(e,t,n,r=Za(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function s$(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Xc=Array.isArray,Kc=e=>e instanceof Map,Qc=e=>e instanceof Set,vm=e=>typeof e=="object",Ei=e=>typeof e=="function",jd=e=>typeof e=="boolean";function l$(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Vn=e=>e.copy_||e.base_,xm=e=>e.modified_?e.copy_:e.base_;function Pp(e,t){if(Kc(e))return new Map(e);if(Qc(e))return new Set(e);if(Xc(e))return Array[qc].slice.call(e);const n=Bw(e);if(t===!0||t==="class_only"&&!n){const r=zt.getOwnPropertyDescriptors(e);delete r[vt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[il]===!1&&(l[il]=!0,l[Ep]=!0),(l.get||l.set)&&(r[a]={[Ep]:!0,[il]:!0,[Ql]:l[Ql],[Da]:e[a]})}return zt.create(ao(e),r)}else{const r=ao(e);if(r!==null&&n)return{...e};const i=zt.create(r);return zt.assign(i,e)}}function ym(e,t=!1){return Zc(e)||er(e)||!vn(e)||(Za(e)>1&&zt.defineProperties(e,{set:Cs,add:Cs,clear:Cs,delete:Cs}),zt.freeze(e),t&&Yc(e,(n,r)=>{ym(r,!0)},!1)),e}function c$(){un(2)}var Cs={[Da]:c$};function Zc(e){return e===null||!vm(e)?!0:zt.isFrozen(e)}var Jl="MapSet",jp="Patches",ev="ArrayMethods",Vw={};function ii(e){const t=Vw[e];return t||un(0,e),t}var tv=e=>!!Vw[e],La,Uw=()=>La,u$=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:tv(Jl)?ii(Jl):void 0,arrayMethodsPlugin_:tv(ev)?ii(ev):void 0});function nv(e,t){t&&(e.patchPlugin_=ii(jp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Op(e){$p(e),e.drafts_.forEach(d$),e.drafts_=null}function $p(e){e===La&&(La=e.parent_)}var rv=e=>La=u$(La,e);function d$(e){const t=e[vt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function iv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[vt].modified_&&(Op(t),un(4)),vn(e)&&(e=ov(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[vt].base_,e,t)}else e=ov(t,n);return f$(t,e,!0),Op(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Nw?e:void 0}function ov(e,t){if(Zc(t))return t;const n=t[vt];if(!n)return ec(t,e.handledSet_,e);if(!Jc(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Gw(n,e)}return n.copy_}function f$(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ym(t,n)}function Ww(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Jc=(e,t)=>e.scope_===t,p$=[];function Hw(e,t,n,r){const i=Vn(e),o=e.type_;if(r!==void 0&&Tp(i,r,o)===t){Zl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Yc(i,(s,c)=>{if(er(c)){const d=l.get(c)||[];d.push(s),l.set(c,d)}})}const a=e.draftLocations_.get(t)??p$;for(const l of a)Zl(i,l,n,o)}function h$(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!Jc(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=xm(o);Hw(e,o.draft_??o,a,n),Gw(o,i)})}function Gw(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Ww(e)}}function m$(e,t,n){const{scope_:r}=e;if(er(n)){const i=n[vt];Jc(i,r)&&i.callbacks_.push(function(){ol(e);const a=xm(i);Hw(e,n,a,t)})}else vn(n)&&e.callbacks_.push(function(){const o=Vn(e);e.type_===3?o.has(n)&&ec(n,r.handledSet_,r):Tp(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&ec(Tp(e.copy_,t,e.type_),r.handledSet_,r)})}function ec(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||er(e)||t.has(e)||!vn(e)||Zc(e)||(t.add(e),Yc(e,(r,i)=>{if(er(i)){const o=i[vt];if(Jc(o,n)){const a=xm(o);Zl(e,r,a,e.type_),Ww(o)}}else vn(i)&&ec(i,t,n)})),e}function g$(e,t){const n=Xc(e),r={type_:n?1:0,scope_:t?t.scope_:Uw(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=tc;n&&(i=[r],o=Aa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var tc={get(e,t){if(t===vt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Vn(e);if(!J0(i,t,e.type_))return v$(e,i,t);const o=i[t];if(e.finalized_||!vn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&l$(t))return o;if(o===Od(e.base_,t)){ol(e);const a=e.type_===1?+t:t,l=Ip(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Vn(e)},ownKeys(e){return Reflect.ownKeys(Vn(e))},set(e,t,n){const r=qw(Vn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Od(Vn(e),t),o=i==null?void 0:i[vt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(s$(n,i)&&(n!==void 0||J0(e.base_,t,e.type_)))return!0;ol(e),Mp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),m$(e,t,n)),!0},deleteProperty(e,t){return ol(e),Od(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Mp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Vn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[il]:!0,[Ep]:e.type_!==1||t!=="length",[Ql]:r[Ql],[Da]:n[t]}},defineProperty(){un(11)},getPrototypeOf(e){return ao(e.base_)},setPrototypeOf(){un(12)}},Aa={};for(let e in tc){let t=tc[e];Aa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Aa.deleteProperty=function(e,t){return Aa.set.call(this,e,t,void 0)};Aa.set=function(e,t,n){return tc.set.call(this,e[0],t,n,e[0])};function Od(e,t){const n=e[vt];return(n?Vn(n):e)[t]}function v$(e,t,n){var i;const r=qw(t,n);return r?Da in r?r[Da]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function qw(e,t){if(!(t in e))return;let n=ao(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=ao(n)}}function Mp(e){e.modified_||(e.modified_=!0,e.parent_&&Mp(e.parent_))}function ol(e){e.copy_||(e.assigned_=new Map,e.copy_=Pp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var x$=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(Ei(t)&&!Ei(n)){const o=n;n=t;const a=this;return function(s=o,...c){return a.produce(s,d=>n.call(this,d,...c))}}Ei(n)||un(6),r!==void 0&&!Ei(r)&&un(7);let i;if(vn(t)){const o=rv(this),a=Ip(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?Op(o):$p(o)}return nv(o,r),iv(i,o)}else if(!t||!vm(t)){if(i=n(t),i===void 0&&(i=t),i===Nw&&(i=void 0),this.autoFreeze_&&ym(i,!0),r){const o=[],a=[];ii(jp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else un(1,t)},this.produceWithPatches=(t,n)=>{if(Ei(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},jd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),jd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),jd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){vn(e)||un(8),er(e)&&(e=y$(e));const t=rv(this),n=Ip(t,e,void 0);return n[vt].isManual_=!0,$p(t),n}finishDraft(e,t){const n=e&&e[vt];(!n||!n.isManual_)&&un(9);const{scope_:r}=n;return nv(r,t),iv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=ii(jp).applyPatches_;return er(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Ip(e,t,n,r){const[i,o]=Kc(t)?ii(Jl).proxyMap_(t,n):Qc(t)?ii(Jl).proxySet_(t,n):g$(t,n);return((n==null?void 0:n.scope_)??Uw()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?h$(n,o,r):o.callbacks_.push(function(s){var d;(d=s.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:c}=s;o.modified_&&c&&c.generatePatches_(o,[],s)}),i}function y$(e){return er(e)||un(10,e),Yw(e)}function Yw(e){if(!vn(e)||Zc(e))return e;const t=e[vt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Pp(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=Pp(e,!0);return Yc(n,(i,o)=>{Zl(n,i,Yw(o))},r),t&&(t.finalized_=!1),n}var b$=new x$,Xw=b$.produce;function Kw(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var w$=Kw(),S$=Kw,C$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Xl:Xl.apply(null,arguments)};function av(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(qn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>o$(r)&&r.type===e,n}var Qw=class Qo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Qo.prototype)}static get[Symbol.species](){return Qo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Qo(...t[0].concat(this)):new Qo(...t.concat(this))}};function sv(e){return vn(e)?Xw(e,()=>{}):e}function _s(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function _$(e){return typeof e=="boolean"}var k$=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new Qw;return n&&(_$(n)?a.push(w$):a.push(S$(n.extraArgument))),a},E$="RTK_autoBatch",lv=e=>t=>{setTimeout(t,e)},T$=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:lv(10):e.type==="callback"?e.queueNotification:lv(e.timeout),c=()=>{a=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const f=()=>i&&d(),v=r.subscribe(f);return l.add(d),()=>{v(),l.delete(d)}},dispatch(d){var f;try{return i=!((f=d==null?void 0:d.meta)!=null&&f[E$]),o=!i,o&&(a||(a=!0,s(c))),r.dispatch(d)}finally{i=!0}}})},P$=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new Qw(e);return r&&i.push(T$(typeof r=="object"?r:void 0)),i};function j$(e){const t=k$(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(mm(n))s=r$(n);else throw new Error(qn(1));let c;typeof r=="function"?c=r(t):c=t();let d=Xl;i&&(d=C$({trace:!1,...typeof i=="object"&&i}));const f=i$(...c),v=P$(f);let m=typeof l=="function"?l(v):v();const p=d(...m);return gm(s,a,p)}function Zw(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(qn(28));if(l in t)throw new Error(qn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function O$(e){return typeof e=="function"}function $$(e,t){let[n,r,i]=Zw(t),o;if(O$(e))o=()=>sv(e());else{const l=sv(e);o=()=>l}function a(l=o(),s){let c=[n[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,f)=>{if(f)if(er(d)){const m=f(d,s);return m===void 0?d:m}else{if(vn(d))return Xw(d,v=>f(v,s));{const v=f(d,s);if(v===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return d},l)}return a.getInitialState=o,a}var M$=Symbol.for("rtk-slice-createasyncthunk");function I$(e,t){return`${e}/${t}`}function D$({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[M$];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(qn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(A$()):i.reducers)||{},s=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(S,k){const T=typeof S=="string"?S:S.type;if(!T)throw new Error(qn(12));if(T in c.sliceCaseReducersByType)throw new Error(qn(13));return c.sliceCaseReducersByType[T]=k,d},addMatcher(S,k){return c.sliceMatchers.push({matcher:S,reducer:k}),d},exposeAction(S,k){return c.actionCreators[S]=k,d},exposeCaseReducer(S,k){return c.sliceCaseReducersByName[S]=k,d}};s.forEach(S=>{const k=l[S],T={reducerName:S,type:I$(o,S),createNotation:typeof i.reducers=="function"};z$(k)?N$(T,k,d,t):R$(T,k,d)});function f(){const[S={},k=[],T=void 0]=typeof i.extraReducers=="function"?Zw(i.extraReducers):[i.extraReducers],E={...S,...c.sliceCaseReducersByType};return $$(i.initialState,_=>{for(let $ in E)_.addCase($,E[$]);for(let $ of c.sliceMatchers)_.addMatcher($.matcher,$.reducer);for(let $ of k)_.addMatcher($.matcher,$.reducer);T&&_.addDefaultCase(T)})}const v=S=>S,m=new Map,p=new WeakMap;let x;function w(S,k){return x||(x=f()),x(S,k)}function h(){return x||(x=f()),x.getInitialState()}function g(S,k=!1){function T(_){let $=_[S];return typeof $>"u"&&k&&($=_s(p,T,h)),$}function E(_=v){const $=_s(m,k,()=>new WeakMap);return _s($,_,()=>{const M={};for(const[L,D]of Object.entries(i.selectors??{}))M[L]=L$(D,_,()=>_s(p,_,h),k);return M})}return{reducerPath:S,getSelectors:E,get selectors(){return E(T)},selectSlice:T}}const b={name:o,reducer:w,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:h,...g(a),injectInto(S,{reducerPath:k,...T}={}){const E=k??a;return S.inject({reducerPath:E,reducer:w},T),{...b,...g(E,!0)}}};return b}}function L$(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var Jw=D$();function A$(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function R$({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!F$(r))throw new Error(qn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?av(e,a):av(e))}function z$(e){return e._reducerDefinitionType==="asyncThunk"}function F$(e){return e._reducerDefinitionType==="reducerWithPrepare"}function N$({type:e,reducerName:t},n,r,i){if(!i)throw new Error(qn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:c,options:d}=n,f=i(e,o,d);r.exposeAction(t,f),a&&r.addCase(f.fulfilled,a),l&&r.addCase(f.pending,l),s&&r.addCase(f.rejected,s),c&&r.addMatcher(f.settled,c),r.exposeCaseReducer(t,{fulfilled:a||ks,pending:l||ks,rejected:s||ks,settled:c||ks})}function ks(){}function qn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const eS=Jw({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]},setFavorites(e,t){e.items=t.payload},addFavorite(e,t){e.items.some(r=>r.id===t.payload.id)||e.items.push(t.payload)},removeFavorite(e,t){e.items=e.items.filter(n=>n.id!==t.payload)}}}),{toggleFavorite:mV,clearFavorite:tS,addFavorite:cv,removeFavorite:uv,setFavorites:B$}=eS.actions,V$=eS.reducer,U$=async(e,t,n,r)=>{const i=t==null?void 0:t.find(a=>{var l;return((l=a.product)==null?void 0:l.documentId)===(e==null?void 0:e.documentId)});if(i){const a=i.user.map(l=>l.documentId);if(!a.includes(n)){a.push(n);const l=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:a}})});if(!l.ok)throw new Error("Не вдалося оновити favorite");return await l.json()}return i}const o=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e.documentId,user:[n]}})});if(!o.ok)throw new Error("Не вдалося створити favorite");return await o.json()},W$=async(e,t,n,r)=>{var l;const i=t==null?void 0:t.find(s=>{var c;return((c=s.product)==null?void 0:c.documentId)===(e==null?void 0:e.documentId)});if(!i)return;const o=(l=i.user)==null?void 0:l.filter(s=>s.documentId!==n).map(s=>s.documentId);if((o==null?void 0:o.length)===0){if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити favorite");return}const a=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:o}})});if(!a.ok)throw new Error("Не вдалося оновити favorite");return await a.json()},ui=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o)return t?(n(uv(e.id)),r.warning(`${e.name} видалено з обраного`)):(n(cv(e)),r.success(`${e.name} додано в обране`)),!0;const a=o.documentId,l=o.id;try{const s=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${l}?populate[favorites][populate][0]=product&populate[favorites][populate][1]=user`,{headers:{Authorization:`Bearer ${i}`}});if(!s.ok)throw new Error("Не вдалося отримати favorites користувача");const c=await s.json(),d=await fetch("https://backenddidiv-production.up.railway.app/api/favorites?populate=*",{headers:{Authorization:`Bearer ${i}`}}),{data:f}=await d.json(),v=c==null?void 0:c.favorites;return t?(await W$(e,v,a,i),n(uv(e.id)),r.warning(`${e.name} видалено з обраного`),!0):(await U$(e,f,a,i),n(cv(e)),r.success(`${e.name} додано в обране`),!0)}catch{return r.error("Не вдалося оновити обране"),!1}},nS=Jw({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===n.id);if(r){if(r.quantity>=n.stock)return;r.quantity+=1}else e.items.push({...n,quantity:1})},setCartItemQuantity:(e,t)=>{const{id:n,quantity:r}=t.payload,i=e.items.find(o=>o.id===n);i&&(i.quantity=r)},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},setCartItems:(e,t)=>{e.items=t.payload},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{setCartItems:rS,addToCart:dv,setCartItemQuantity:fv,removeFromCart:iS,clearCart:xo,addAllToCart:H$,incrementQuantity:pv,decrementQuantity:hv}=nS.actions,G$=nS.reducer,q$=async(e,t,n,r)=>{const i=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e,quantity:t,user:n}})});if(!i.ok)throw new Error("Не вдалося створити CartItem");return i.json()},Y$=async(e,t,n)=>{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({data:{quantity:t}})});if(!r.ok)throw new Error("Не вдалося оновити CartItem");return r.json()},yo=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o){for(let l=0;l<t;l++)n(dv(e));return r.success(`${e.name} додано в кошик!`),!0}const a=o.id;try{const l=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${a}&populate=product`,{headers:{Authorization:`Bearer ${i}`}});if(!l.ok)throw new Error("Не вдалося отримати кошик користувача");const{data:s}=await l.json(),c=s.find(d=>{var f;return((f=d.product)==null?void 0:f.documentId)===e.documentId});if(c){const d=c.quantity+t;if(d>e.stock)return r.warning(`Доступно лише ${e.stock} шт.`),!1;await Y$(c.documentId,d,i),n(fv({id:e.id,quantity:d}))}else await q$(e.documentId,t,a,i),n(dv({...e})),t>1&&n(fv({id:e.id,quantity:t}));return r.success(`${e.name} додано в кошик!`),!0}catch(l){return console.error(l),r.error("Не вдалося додати товар у кошик"),!1}},oS=()=>{const e=Mt(),[t,n]=y.useState([]),r=Ue(s=>s.favorites.items),i=Ue(s=>s.cart.items),o=yt();y.useEffect(()=>{const s=new Date,c=new Date;c.setDate(s.getDate()-7);const d=c.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${d}`).then(f=>f.json()).then(f=>n(f.data)).catch(f=>console.error("Помилка завантаження нових товарів:",f))},[]);const a=(s,c)=>{c.stopPropagation();const d=r.some(f=>f.id===(s==null?void 0:s.id));ui(s,d,e,K)},l=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:u.jsxs(YO,{children:[u.jsx(Ln,{}),u.jsx(XO,{children:"Нові товари"}),u.jsxs(KO,{children:[l.map(s=>{var b;const c=r.some(S=>S.id===s.id),d=(s==null?void 0:s.available)??!0,f=(s==null?void 0:s.stock)===0,v=i.find(S=>S.id===s.id),p=(v?v.quantity:0)>=(s.stock||0),x=s.new_price&&s.new_price<s.price,w=x?s.new_price:s.price,h=x?Math.round((s.price-s.new_price)/s.price*100):0,g=async()=>{if(p){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(p){K.warning(`Доступно лише ${s.stock} шт.`);return}await yo(s,1,e,K)};return u.jsxs(QO,{onClick:()=>o(`/product/${s.slug??s.id}`),$soldOut:f,children:[u.jsxs(JO,{children:[u.jsx(e4,{children:"Новинка"}),f&&u.jsx(Gc,{children:"Продано"}),!d&&u.jsx(ZO,{children:"Бронь"}),u.jsx("img",{src:((b=s.images)==null?void 0:b[0].url)||ri,alt:s.name,onError:S=>{S.currentTarget.onerror=null,S.currentTarget.src=ri}}),u.jsx("div",{className:"overlay"})]}),u.jsxs(t4,{children:[u.jsx(n4,{children:s.name}),u.jsxs(r4,{children:[u.jsx(Lw,{children:u.jsxs(Aw,{children:[u.jsxs(Rw,{$discount:x,children:[w.toLocaleString()," грн"]}),x&&u.jsxs(zw,{children:[s.price.toLocaleString()," грн"]}),x&&u.jsxs(Fw,{children:["-",h,"%"]})]})}),u.jsxs(Dw,{children:[d&&!f&&u.jsx(ql,{onClick:S=>g(),children:u.jsx(vo,{size:24,color:v?"var(--orange-color)":"black",strokeWidth:2})}),!f&&u.jsx(ql,{onClick:S=>a(s,S),children:u.jsx(Xa,{size:24,fill:c?"#ff4d4f":"none",color:c?"#ff4d4f":"#000000",strokeWidth:c?1:2})})]})]})]})]},s.id)}),u.jsx(i4,{to:"/catalog/new",children:u.jsxs(o4,{children:[u.jsx("p",{children:"Усі новинки"}),u.jsx(a4,{children:u.jsx(Vc,{size:24})})]})})]})]})};function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function X$(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function K$(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Q$=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(K$(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=X$(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),at="-ms-",nc="-moz-",de="-webkit-",aS="comm",bm="rule",wm="decl",Z$="@import",sS="@keyframes",J$="@layer",e5=Math.abs,eu=String.fromCharCode,t5=Object.assign;function n5(e,t){return et(e,0)^45?(((t<<2^et(e,0))<<2^et(e,1))<<2^et(e,2))<<2^et(e,3):0}function lS(e){return e.trim()}function r5(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,n){return e.replace(t,n)}function Dp(e,t){return e.indexOf(t)}function et(e,t){return e.charCodeAt(t)|0}function Ra(e,t,n){return e.slice(t,n)}function Cn(e){return e.length}function Sm(e){return e.length}function Es(e,t){return t.push(e),e}function i5(e,t){return e.map(t).join("")}var tu=1,so=1,cS=0,Ot=0,Ae=0,bo="";function nu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:tu,column:so,length:a,return:""}}function Ro(e,t){return t5(nu("",null,null,"",null,null,0),e,{length:-e.length},t)}function o5(){return Ae}function a5(){return Ae=Ot>0?et(bo,--Ot):0,so--,Ae===10&&(so=1,tu--),Ae}function Nt(){return Ae=Ot<cS?et(bo,Ot++):0,so++,Ae===10&&(so=1,tu++),Ae}function jn(){return et(bo,Ot)}function al(){return Ot}function Ja(e,t){return Ra(bo,e,t)}function za(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function uS(e){return tu=so=1,cS=Cn(bo=e),Ot=0,[]}function dS(e){return bo="",e}function sl(e){return lS(Ja(Ot-1,Lp(e===91?e+2:e===40?e+1:e)))}function s5(e){for(;(Ae=jn())&&Ae<33;)Nt();return za(e)>2||za(Ae)>3?"":" "}function l5(e,t){for(;--t&&Nt()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return Ja(e,al()+(t<6&&jn()==32&&Nt()==32))}function Lp(e){for(;Nt();)switch(Ae){case e:return Ot;case 34:case 39:e!==34&&e!==39&&Lp(Ae);break;case 40:e===41&&Lp(e);break;case 92:Nt();break}return Ot}function c5(e,t){for(;Nt()&&e+Ae!==47+10;)if(e+Ae===42+42&&jn()===47)break;return"/*"+Ja(t,Ot-1)+"*"+eu(e===47?e:Nt())}function u5(e){for(;!za(jn());)Nt();return Ja(e,Ot)}function d5(e){return dS(ll("",null,null,null,[""],e=uS(e),0,[0],e))}function ll(e,t,n,r,i,o,a,l,s){for(var c=0,d=0,f=a,v=0,m=0,p=0,x=1,w=1,h=1,g=0,b="",S=i,k=o,T=r,E=b;w;)switch(p=g,g=Nt()){case 40:if(p!=108&&et(E,f-1)==58){Dp(E+=fe(sl(g),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=sl(g);break;case 9:case 10:case 13:case 32:E+=s5(p);break;case 92:E+=l5(al()-1,7);continue;case 47:switch(jn()){case 42:case 47:Es(f5(c5(Nt(),al()),t,n),s);break;default:E+="/"}break;case 123*x:l[c++]=Cn(E)*h;case 125*x:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+d:h==-1&&(E=fe(E,/\f/g,"")),m>0&&Cn(E)-f&&Es(m>32?gv(E+";",r,n,f-1):gv(fe(E," ","")+";",r,n,f-2),s);break;case 59:E+=";";default:if(Es(T=mv(E,t,n,c,d,i,l,b,S=[],k=[],f),o),g===123)if(d===0)ll(E,t,T,T,S,o,f,l,k);else switch(v===99&&et(E,3)===110?100:v){case 100:case 108:case 109:case 115:ll(e,T,T,r&&Es(mv(e,T,T,0,0,i,l,b,i,S=[],f),k),i,k,f,l,r?S:k);break;default:ll(E,T,T,T,[""],k,0,l,k)}}c=d=m=0,x=h=1,b=E="",f=a;break;case 58:f=1+Cn(E),m=p;default:if(x<1){if(g==123)--x;else if(g==125&&x++==0&&a5()==125)continue}switch(E+=eu(g),g*x){case 38:h=d>0?1:(E+="\f",-1);break;case 44:l[c++]=(Cn(E)-1)*h,h=1;break;case 64:jn()===45&&(E+=sl(Nt())),v=jn(),d=f=Cn(b=E+=u5(al())),g++;break;case 45:p===45&&Cn(E)==2&&(x=0)}}return o}function mv(e,t,n,r,i,o,a,l,s,c,d){for(var f=i-1,v=i===0?o:[""],m=Sm(v),p=0,x=0,w=0;p<r;++p)for(var h=0,g=Ra(e,f+1,f=e5(x=a[p])),b=e;h<m;++h)(b=lS(x>0?v[h]+" "+g:fe(g,/&\f/g,v[h])))&&(s[w++]=b);return nu(e,t,n,i===0?bm:l,s,c,d)}function f5(e,t,n){return nu(e,t,n,aS,eu(o5()),Ra(e,2,-2),0)}function gv(e,t,n,r){return nu(e,t,n,wm,Ra(e,0,r),Ra(e,r+1,-1),r)}function Hi(e,t){for(var n="",r=Sm(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function p5(e,t,n,r){switch(e.type){case J$:if(e.children.length)break;case Z$:case wm:return e.return=e.return||e.value;case aS:return"";case sS:return e.return=e.value+"{"+Hi(e.children,r)+"}";case bm:e.value=e.props.join(",")}return Cn(n=Hi(e.children,r))?e.return=e.value+"{"+n+"}":""}function h5(e){var t=Sm(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function m5(e){return function(t){t.root||(t=t.return)&&e(t)}}function g5(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var v5=function(t,n,r){for(var i=0,o=0;i=o,o=jn(),i===38&&o===12&&(n[r]=1),!za(o);)Nt();return Ja(t,Ot)},x5=function(t,n){var r=-1,i=44;do switch(za(i)){case 0:i===38&&jn()===12&&(n[r]=1),t[r]+=v5(Ot-1,n,r);break;case 2:t[r]+=sl(i);break;case 4:if(i===44){t[++r]=jn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=eu(i)}while(i=Nt());return t},y5=function(t,n){return dS(x5(uS(t),n))},vv=new WeakMap,b5=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!vv.get(r))&&!i){vv.set(t,!0);for(var o=[],a=y5(n,o),l=r.props,s=0,c=0;s<a.length;s++)for(var d=0;d<l.length;d++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},w5=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function fS(e,t){switch(n5(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+nc+e+at+e+e;case 6828:case 4268:return de+e+at+e+e;case 6165:return de+e+at+"flex-"+e+e;case 5187:return de+e+fe(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+at+"flex-$1$2")+e;case 5443:return de+e+at+"flex-item-"+fe(e,/flex-|-self/,"")+e;case 4675:return de+e+at+"flex-line-pack"+fe(e,/align-content|flex-|-self/,"")+e;case 5548:return de+e+at+fe(e,"shrink","negative")+e;case 5292:return de+e+at+fe(e,"basis","preferred-size")+e;case 6060:return de+"box-"+fe(e,"-grow","")+de+e+at+fe(e,"grow","positive")+e;case 4554:return de+fe(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+at+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(e)-1-t>6)switch(et(e,t+1)){case 109:if(et(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+nc+(et(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Dp(e,"stretch")?fS(fe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(et(e,t+1)!==115)break;case 6444:switch(et(e,Cn(e)-3-(~Dp(e,"!important")&&10))){case 107:return fe(e,":",":"+de)+e;case 101:return fe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+de+(et(e,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+at+"$2box$3")+e}break;case 5936:switch(et(e,t+11)){case 114:return de+e+at+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+at+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+at+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return de+e+at+e+e}return e}var S5=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case wm:t.return=fS(t.value,t.length);break;case sS:return Hi([Ro(t,{value:fe(t.value,"@","@"+de)})],i);case bm:if(t.length)return i5(t.props,function(o){switch(r5(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Hi([Ro(t,{props:[fe(o,/:(read-\w+)/,":"+nc+"$1")]})],i);case"::placeholder":return Hi([Ro(t,{props:[fe(o,/:(plac\w+)/,":"+de+"input-$1")]}),Ro(t,{props:[fe(o,/:(plac\w+)/,":"+nc+"$1")]}),Ro(t,{props:[fe(o,/:(plac\w+)/,at+"input-$1")]})],i)}return""})}},C5=[S5],_5=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var w=x.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||C5,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var w=x.getAttribute("data-emotion").split(" "),h=1;h<w.length;h++)o[w[h]]=!0;l.push(x)});var s,c=[b5,w5];{var d,f=[p5,m5(function(x){d.insert(x)})],v=h5(c.concat(i,f)),m=function(w){return Hi(d5(w),v)};s=function(w,h,g,b){d=g,m(w?w+"{"+h.styles+"}":h.styles),b&&(p.inserted[h.name]=!0)}}var p={key:n,sheet:new Q$({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return p.sheet.hydrate(l),p},pS={exports:{}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,Cm=Qe?Symbol.for("react.element"):60103,_m=Qe?Symbol.for("react.portal"):60106,ru=Qe?Symbol.for("react.fragment"):60107,iu=Qe?Symbol.for("react.strict_mode"):60108,ou=Qe?Symbol.for("react.profiler"):60114,au=Qe?Symbol.for("react.provider"):60109,su=Qe?Symbol.for("react.context"):60110,km=Qe?Symbol.for("react.async_mode"):60111,lu=Qe?Symbol.for("react.concurrent_mode"):60111,cu=Qe?Symbol.for("react.forward_ref"):60112,uu=Qe?Symbol.for("react.suspense"):60113,k5=Qe?Symbol.for("react.suspense_list"):60120,du=Qe?Symbol.for("react.memo"):60115,fu=Qe?Symbol.for("react.lazy"):60116,E5=Qe?Symbol.for("react.block"):60121,T5=Qe?Symbol.for("react.fundamental"):60117,P5=Qe?Symbol.for("react.responder"):60118,j5=Qe?Symbol.for("react.scope"):60119;function Ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Cm:switch(e=e.type,e){case km:case lu:case ru:case ou:case iu:case uu:return e;default:switch(e=e&&e.$$typeof,e){case su:case cu:case fu:case du:case au:return e;default:return t}}case _m:return t}}}function hS(e){return Ht(e)===lu}ve.AsyncMode=km;ve.ConcurrentMode=lu;ve.ContextConsumer=su;ve.ContextProvider=au;ve.Element=Cm;ve.ForwardRef=cu;ve.Fragment=ru;ve.Lazy=fu;ve.Memo=du;ve.Portal=_m;ve.Profiler=ou;ve.StrictMode=iu;ve.Suspense=uu;ve.isAsyncMode=function(e){return hS(e)||Ht(e)===km};ve.isConcurrentMode=hS;ve.isContextConsumer=function(e){return Ht(e)===su};ve.isContextProvider=function(e){return Ht(e)===au};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cm};ve.isForwardRef=function(e){return Ht(e)===cu};ve.isFragment=function(e){return Ht(e)===ru};ve.isLazy=function(e){return Ht(e)===fu};ve.isMemo=function(e){return Ht(e)===du};ve.isPortal=function(e){return Ht(e)===_m};ve.isProfiler=function(e){return Ht(e)===ou};ve.isStrictMode=function(e){return Ht(e)===iu};ve.isSuspense=function(e){return Ht(e)===uu};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ru||e===lu||e===ou||e===iu||e===uu||e===k5||typeof e=="object"&&e!==null&&(e.$$typeof===fu||e.$$typeof===du||e.$$typeof===au||e.$$typeof===su||e.$$typeof===cu||e.$$typeof===T5||e.$$typeof===P5||e.$$typeof===j5||e.$$typeof===E5)};ve.typeOf=Ht;pS.exports=ve;var O5=pS.exports,mS=O5,$5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},M5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gS={};gS[mS.ForwardRef]=$5;gS[mS.Memo]=M5;var I5=!0;function vS(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Em=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||I5===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},xS=function(t,n,r){Em(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function D5(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var L5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},A5=/[A-Z]|^ms/g,R5=/_EMO_([^_]+?)_([^]*?)_EMO_/g,yS=function(t){return t.charCodeAt(1)===45},xv=function(t){return t!=null&&typeof t!="boolean"},$d=g5(function(e){return yS(e)?e:e.replace(A5,"-$&").toLowerCase()}),yv=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(R5,function(r,i,o){return _n={name:i,styles:o,next:_n},i})}return L5[t]!==1&&!yS(t)&&typeof n=="number"&&n!==0?n+"px":n};function Fa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return _n={name:n.name,styles:n.styles,next:_n},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)_n={name:r.name,styles:r.styles,next:_n},r=r.next;var i=n.styles+";";return i}return z5(e,t,n)}case"function":{if(e!==void 0){var o=_n,a=n(e);return _n=o,Fa(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function z5(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Fa(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":xv(a)&&(r+=$d(o)+":"+yv(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)xv(a[l])&&(r+=$d(o)+":"+yv(o,a[l])+";");else{var s=Fa(e,t,a);switch(o){case"animation":case"animationName":{r+=$d(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var bv=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_n,Tm=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";_n=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Fa(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Fa(r,n,t[l]),i&&(o+=a[l]);bv.lastIndex=0;for(var s="",c;(c=bv.exec(o))!==null;)s+="-"+c[1];var d=D5(o)+s;return{name:d,styles:o,next:_n}},F5=function(t){return t()},N5=vf["useInsertionEffect"]?vf["useInsertionEffect"]:!1,bS=N5||F5,Pm={}.hasOwnProperty,wS=y.createContext(typeof HTMLElement<"u"?_5({key:"css"}):null);wS.Provider;var SS=function(t){return y.forwardRef(function(n,r){var i=y.useContext(wS);return t(n,i,r)})},CS=y.createContext({}),Ap="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",B5=function(t,n){var r={};for(var i in n)Pm.call(n,i)&&(r[i]=n[i]);return r[Ap]=t,r},V5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Em(n,r,i),bS(function(){return xS(n,r,i)}),null},U5=SS(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Ap],o=[r],a="";typeof e.className=="string"?a=vS(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Tm(o,void 0,y.useContext(CS));a+=t.key+"-"+l.name;var s={};for(var c in e)Pm.call(e,c)&&c!=="css"&&c!==Ap&&(s[c]=e[c]);return s.ref=n,s.className=a,y.createElement(y.Fragment,null,y.createElement(V5,{cache:t,serialized:l,isStringTag:typeof i=="string"}),y.createElement(i,s))}),W5=U5,Z=function(t,n){var r=arguments;if(n==null||!Pm.call(n,"css"))return y.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=W5,o[1]=B5(t,n);for(var a=2;a<i;a++)o[a]=r[a];return y.createElement.apply(null,o)};function jm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Tm(t)}var H5=function(){var t=jm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},G5=eP,q5=function(t){return t!=="theme"},wv=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?G5:q5},Sv=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Y5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Em(n,r,i),bS(function(){return xS(n,r,i)}),null},X5=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=Sv(t,n,r),s=l||wv(i),c=!s("as");return function(){var d=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{f.push(d[0][0]);for(var v=d.length,m=1;m<v;m++)f.push(d[m],d[0][m])}var p=SS(function(x,w,h){var g=c&&x.as||i,b="",S=[],k=x;if(x.theme==null){k={};for(var T in x)k[T]=x[T];k.theme=y.useContext(CS)}typeof x.className=="string"?b=vS(w.registered,S,x.className):x.className!=null&&(b=x.className+" ");var E=Tm(f.concat(S),w.registered,k);b+=w.key+"-"+E.name,a!==void 0&&(b+=" "+a);var _=c&&l===void 0?wv(g):s,$={};for(var M in x)c&&M==="as"||_(M)&&($[M]=x[M]);return $.className=b,$.ref=h,y.createElement(y.Fragment,null,y.createElement(Y5,{cache:w,serialized:E,isStringTag:typeof g=="string"}),y.createElement(g,$))});return p.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=i,p.__emotion_styles=f,p.__emotion_forwardProp=l,Object.defineProperty(p,"toString",{value:function(){return"."+a}}),p.withComponent=function(x,w){return e(x,ee({},n,w,{shouldForwardProp:Sv(p,w,!0)})).apply(void 0,f)},p}},K5=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ze=X5.bind();K5.forEach(function(e){ze[e]=ze(e)});const Q5=ze.section`
  background-color: var(--second-background);
`,Z5=ze.div`
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
`,J5=ze.div`

`,e3=ze.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,t3=ze.div`
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
`;const n3=ze(Te)`
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
`,r3=ze.div`
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
`,i3=ze.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,o3=ze.p`
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
`;var a3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};s3(a3);function s3(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var l3="#4fa94d",c3={"aria-busy":!0,role:"progressbar"},u3=C.div`
  display: ${e=>e.$visible?"flex":"none"};
`,d3="http://www.w3.org/2000/svg",di=({height:e=100,width:t=100,radius:n=5,color:r=l3,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>u.jsx(u3,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...c3,children:u.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:d3,"data-testid":"ball-triangle-svg",children:[u.jsx("title",{children:"Ball Triangle"}),u.jsx("desc",{children:"Animated representation of three balls"}),u.jsx("g",{fill:"none",fillRule:"evenodd",children:u.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[u.jsxs("circle",{cx:"5",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"27",cy:"5",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"49",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),rn=242.776657104492,f3=1.6,p3=dm`
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
  animation: ${p3} ${f3}s linear infinite;
`;var h3=dm`
to {
   transform: rotate(360deg);
 }
`;C.svg`
  animation: ${h3} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var m3=dm`
to {
   stroke-dashoffset: 136;
 }
`;C.polygon`
  stroke-dasharray: 17;
  animation: ${m3} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;C.svg`
  transform-origin: 50% 65%;
`;const g3=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(!0);return y.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();t(a.data.map(l=>{var s;return{id:l.id,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(Q5,{children:u.jsxs(Z5,{children:[u.jsx(J5,{children:u.jsx(oS,{})}),u.jsx(e3,{children:"Каталог"}),u.jsx(t3,{children:e.map(i=>u.jsxs(n3,{to:`/catalog/${i.title}`,children:[u.jsx(r3,{children:u.jsx(i3,{src:i.image,alt:i.title})}),u.jsx(o3,{children:i.title})]},i.id))})]})})},v3=ze.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,x3=ze.h1`
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
`,y3=ze.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,b3=ze(Te)`

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

  
`,w3=()=>u.jsxs(v3,{children:[u.jsxs(x3,{children:[" ",u.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),u.jsx(y3,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),u.jsx(b3,{children:" На головну"})]});const S3=C.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,C3=C.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var _S={},kS={},pu={},ES={exports:{}},es={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Cv=Object.getOwnPropertySymbols,_3=Object.prototype.hasOwnProperty,k3=Object.prototype.propertyIsEnumerable;function E3(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function T3(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var P3=T3()?Object.assign:function(e,t){for(var n,r=E3(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)_3.call(n,a)&&(r[a]=n[a]);if(Cv){i=Cv(n);for(var l=0;l<i.length;l++)k3.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},TS={exports:{}},ce={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om=P3,wo=60103,PS=60106;ce.Fragment=60107;ce.StrictMode=60108;ce.Profiler=60114;var jS=60109,OS=60110,$S=60112;ce.Suspense=60113;var MS=60115,IS=60116;if(typeof Symbol=="function"&&Symbol.for){var nn=Symbol.for;wo=nn("react.element"),PS=nn("react.portal"),ce.Fragment=nn("react.fragment"),ce.StrictMode=nn("react.strict_mode"),ce.Profiler=nn("react.profiler"),jS=nn("react.provider"),OS=nn("react.context"),$S=nn("react.forward_ref"),ce.Suspense=nn("react.suspense"),MS=nn("react.memo"),IS=nn("react.lazy")}var _v=typeof Symbol=="function"&&Symbol.iterator;function j3(e){return e===null||typeof e!="object"?null:(e=_v&&e[_v]||e["@@iterator"],typeof e=="function"?e:null)}function ts(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var DS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},LS={};function So(e,t,n){this.props=e,this.context=t,this.refs=LS,this.updater=n||DS}So.prototype.isReactComponent={};So.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(ts(85));this.updater.enqueueSetState(this,e,t,"setState")};So.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function AS(){}AS.prototype=So.prototype;function $m(e,t,n){this.props=e,this.context=t,this.refs=LS,this.updater=n||DS}var Mm=$m.prototype=new AS;Mm.constructor=$m;Om(Mm,So.prototype);Mm.isPureReactComponent=!0;var Im={current:null},RS=Object.prototype.hasOwnProperty,zS={key:!0,ref:!0,__self:!0,__source:!0};function FS(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)RS.call(t,r)&&!zS.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wo,type:e,key:o,ref:a,props:i,_owner:Im.current}}function O3(e,t){return{$$typeof:wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Dm(e){return typeof e=="object"&&e!==null&&e.$$typeof===wo}function $3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var kv=/\/+/g;function Md(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$3(""+e.key):t.toString(36)}function cl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case wo:case PS:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Md(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(kv,"$&/")+"/"),cl(i,t,n,"",function(c){return c})):i!=null&&(Dm(i)&&(i=O3(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(kv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Md(o,l);a+=cl(o,t,n,s,i)}else if(s=j3(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Md(o,l++),a+=cl(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(ts(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Ts(e,t,n){if(e==null)return e;var r=[],i=0;return cl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function M3(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var NS={current:null};function nr(){var e=NS.current;if(e===null)throw Error(ts(321));return e}var I3={ReactCurrentDispatcher:NS,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Im,IsSomeRendererActing:{current:!1},assign:Om};ce.Children={map:Ts,forEach:function(e,t,n){Ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ts(e,function(){t++}),t},toArray:function(e){return Ts(e,function(t){return t})||[]},only:function(e){if(!Dm(e))throw Error(ts(143));return e}};ce.Component=So;ce.PureComponent=$m;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I3;ce.cloneElement=function(e,t,n){if(e==null)throw Error(ts(267,e));var r=Om({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Im.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)RS.call(t,s)&&!zS.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:wo,type:e.type,key:i,ref:o,props:r,_owner:a}};ce.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:OS,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:jS,_context:e},e.Consumer=e};ce.createElement=FS;ce.createFactory=function(e){var t=FS.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:$S,render:e}};ce.isValidElement=Dm;ce.lazy=function(e){return{$$typeof:IS,_payload:{_status:-1,_result:e},_init:M3}};ce.memo=function(e,t){return{$$typeof:MS,type:e,compare:t===void 0?null:t}};ce.useCallback=function(e,t){return nr().useCallback(e,t)};ce.useContext=function(e,t){return nr().useContext(e,t)};ce.useDebugValue=function(){};ce.useEffect=function(e,t){return nr().useEffect(e,t)};ce.useImperativeHandle=function(e,t,n){return nr().useImperativeHandle(e,t,n)};ce.useLayoutEffect=function(e,t){return nr().useLayoutEffect(e,t)};ce.useMemo=function(e,t){return nr().useMemo(e,t)};ce.useReducer=function(e,t,n){return nr().useReducer(e,t,n)};ce.useRef=function(e){return nr().useRef(e)};ce.useState=function(e){return nr().useState(e)};ce.version="17.0.2";TS.exports=ce;var D3=TS.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L3=D3,BS=60103;es.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Ev=Symbol.for;BS=Ev("react.element"),es.Fragment=Ev("react.fragment")}var A3=L3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R3=Object.prototype.hasOwnProperty,z3={key:!0,ref:!0,__self:!0,__source:!0};function VS(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)R3.call(t,r)&&!z3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:BS,type:e,key:o,ref:a,props:i,_owner:A3.current}}es.jsx=VS;es.jsxs=VS;ES.exports=es;var It=ES.exports,US={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(US);var Dt=US.exports;const F3={"lds-circle":"_lds-circle_qlxhy_1"},N3=Object.freeze(Object.defineProperty({__proto__:null,default:F3},Symbol.toStringTag,{value:"Module"})),B3=$t(N3);var WS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pu,"__esModule",{value:!0});pu.Circle=void 0;const V3=It,U3=WS(Dt),W3=WS(B3);function H3({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,V3.jsx)("div",{className:(0,U3.default)(W3.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}pu.Circle=H3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=pu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(kS);var HS={},hu={};const G3={"lds-default":"_lds-default_wt1n8_1"},q3=Object.freeze(Object.defineProperty({__proto__:null,default:G3},Symbol.toStringTag,{value:"Module"})),Y3=$t(q3);var GS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hu,"__esModule",{value:!0});hu.Default=void 0;const Tv=It,X3=GS(Dt),K3=GS(Y3);function Q3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,Tv.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,Tv.jsx)("div",{className:(0,X3.default)(K3.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}hu.Default=Q3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=hu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(HS);var qS={},mu={};const Z3={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},J3=Object.freeze(Object.defineProperty({__proto__:null,default:Z3},Symbol.toStringTag,{value:"Module"})),eM=$t(J3);var YS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mu,"__esModule",{value:!0});mu.DualRing=void 0;const Pv=It,jv=YS(Dt),Ov=YS(eM);function tM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Pv.jsx)("div",{className:(0,jv.default)(Ov.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,Pv.jsx)("div",{className:(0,jv.default)(Ov.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}mu.DualRing=tM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=mu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(qS);var XS={},gu={};const nM={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},rM=Object.freeze(Object.defineProperty({__proto__:null,default:nM},Symbol.toStringTag,{value:"Module"})),iM=$t(rM);var KS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gu,"__esModule",{value:!0});gu.Ellipsis=void 0;const $v=It,oM=KS(Dt),aM=KS(iM);function sM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,$v.jsx)("div",{style:{background:`${e}`}},l));return(0,$v.jsx)("div",{className:(0,oM.default)(aM.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}gu.Ellipsis=sM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=gu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(XS);var QS={},vu={};const lM={"lds-facebook":"_lds-facebook_1ts9g_1"},cM=Object.freeze(Object.defineProperty({__proto__:null,default:lM},Symbol.toStringTag,{value:"Module"})),uM=$t(cM);var ZS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vu,"__esModule",{value:!0});vu.Facebook=void 0;const Mv=It,dM=ZS(Dt),fM=ZS(uM);function pM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,Mv.jsx)("div",{style:{background:`${e}`}},l));return(0,Mv.jsx)("div",{className:(0,dM.default)(fM.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}vu.Facebook=pM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=vu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(QS);var JS={},xu={};const hM={"lds-grid":"_lds-grid_1ftub_1"},mM=Object.freeze(Object.defineProperty({__proto__:null,default:hM},Symbol.toStringTag,{value:"Module"})),gM=$t(mM);var e2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xu,"__esModule",{value:!0});xu.Grid=void 0;const Iv=It,vM=e2(Dt),xM=e2(gM);function yM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,Iv.jsx)("div",{style:{background:`${e}`}},l));return(0,Iv.jsx)("div",{className:(0,vM.default)(xM.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}xu.Grid=yM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=xu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(JS);var t2={},yu={};const bM={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},wM=Object.freeze(Object.defineProperty({__proto__:null,default:bM},Symbol.toStringTag,{value:"Module"})),SM=$t(wM);var n2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yu,"__esModule",{value:!0});yu.Heart=void 0;const Ps=It,Id=n2(Dt),Dd=n2(SM);function CM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Ps.jsx)("div",{className:(0,Id.default)(Dd.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,Ps.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,Ps.jsx)("div",{className:(0,Id.default)(Dd.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,Ps.jsx)("div",{className:(0,Id.default)(Dd.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}yu.Heart=CM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=yu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(t2);var r2={},bu={};const _M={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},kM=Object.freeze(Object.defineProperty({__proto__:null,default:_M},Symbol.toStringTag,{value:"Module"})),EM=$t(kM);var i2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bu,"__esModule",{value:!0});bu.Hourglass=void 0;const Dv=It,Lv=i2(Dt),Av=i2(EM);function TM({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,Dv.jsx)("div",{className:(0,Lv.default)(Av.default["lds-hourglass"],n),style:{...r},children:(0,Dv.jsx)("div",{className:(0,Lv.default)(Av.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}bu.Hourglass=TM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=bu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(r2);var o2={},wu={};const a2="_center_1rufi_10",s2="_spin_1rufi_1",PM={"lds-orbitals":"_lds-orbitals_1rufi_1",center:a2,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:s2},jM=Object.freeze(Object.defineProperty({__proto__:null,center:a2,default:PM,spin:s2},Symbol.toStringTag,{value:"Module"})),OM=$t(jM);var l2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wu,"__esModule",{value:!0});wu.Orbitals=void 0;const ot=It,ft=l2(Dt),Ce=l2(OM);function $M({color:e="#7f58af",className:t,style:n}){return(0,ot.jsxs)("div",{className:(0,ft.default)(Ce.default["lds-orbitals"],t),style:{...n},children:[(0,ot.jsx)("div",{className:Ce.default.center,style:{background:e}}),(0,ot.jsxs)("div",{className:(0,ft.default)(Ce.default["inner-spin"]),children:[(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-arc"],Ce.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-arc"],Ce.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-arc"],Ce.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-arc"],Ce.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-moon-a"]),style:{background:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-moon-b"]),style:{background:e}})]}),(0,ot.jsxs)("div",{className:(0,ft.default)(Ce.default["outer-spin"]),children:[(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-arc"],Ce.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-arc"],Ce.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-arc"],Ce.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-arc"],Ce.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-moon-a"]),style:{background:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-moon-b"]),style:{background:e}})]})]})}wu.Orbitals=$M;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=wu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(o2);var c2={},Su={};const MM={"lds-ring":"_lds-ring_xgxdp_1"},IM=Object.freeze(Object.defineProperty({__proto__:null,default:MM},Symbol.toStringTag,{value:"Module"})),DM=$t(IM);var u2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Su,"__esModule",{value:!0});Su.Ring=void 0;const Rv=It,LM=u2(Dt),AM=u2(DM);function RM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,Rv.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,Rv.jsx)("div",{className:(0,LM.default)(AM.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}Su.Ring=RM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Su;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(c2);var d2={},Cu={};const zM={"lds-ripple":"_lds-ripple_1lgcf_1"},FM=Object.freeze(Object.defineProperty({__proto__:null,default:zM},Symbol.toStringTag,{value:"Module"})),NM=$t(FM);var f2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cu,"__esModule",{value:!0});Cu.Ripple=void 0;const zv=It,BM=f2(Dt),VM=f2(NM);function UM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,zv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,zv.jsx)("div",{className:(0,BM.default)(VM.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}Cu.Ripple=UM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=Cu;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(d2);var p2={},_u={};const WM={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},HM=Object.freeze(Object.defineProperty({__proto__:null,default:WM},Symbol.toStringTag,{value:"Module"})),GM=$t(HM);var h2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_u,"__esModule",{value:!0});_u.Roller=void 0;const Ld=It,Fv=h2(Dt),Nv=h2(GM);function qM({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Ld.jsx)("div",{children:(0,Ld.jsx)("div",{className:(0,Fv.default)(Nv.default["div-after"]),style:{background:e}})},o));return(0,Ld.jsx)("div",{className:(0,Fv.default)(Nv.default["lds-roller"],t),style:{...n},children:r})}_u.Roller=qM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=_u;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(p2);var m2={},ku={};const YM={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},XM=Object.freeze(Object.defineProperty({__proto__:null,default:YM},Symbol.toStringTag,{value:"Module"})),KM=$t(XM);var g2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ku,"__esModule",{value:!0});ku.Spinner=void 0;const Ad=It,Bv=g2(Dt),Vv=g2(KM);function QM({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,Ad.jsx)("div",{children:(0,Ad.jsx)("div",{className:(0,Bv.default)(Vv.default["div-after"]),style:{background:e}})},o));return(0,Ad.jsx)("div",{className:(0,Bv.default)(Vv.default["lds-spinner"],t),style:{...n},children:r})}ku.Spinner=QM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=ku;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(m2);var v2={},Eu={};const x2="_left_v9vlb_30",y2="_right_v9vlb_33",b2="_anim_v9vlb_37",ZM={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:x2,right:y2,anim:b2,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},JM=Object.freeze(Object.defineProperty({__proto__:null,anim:b2,default:ZM,left:x2,right:y2},Symbol.toStringTag,{value:"Module"})),eI=$t(JM);var w2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Eu,"__esModule",{value:!0});Eu.Ouroboro=void 0;const zo=It,Fo=w2(Dt),No=w2(eI);function tI({color:e="#7f58af",style:t,className:n}){return(0,zo.jsxs)("div",{className:(0,Fo.default)(No.default["lds-ouroboro"],n),style:{...t},children:[(0,zo.jsx)("span",{className:(0,Fo.default)(No.default.left),children:(0,zo.jsx)("span",{className:(0,Fo.default)(No.default.anim),style:{background:e}})}),(0,zo.jsx)("span",{className:(0,Fo.default)(No.default.right),children:(0,zo.jsx)("span",{className:(0,Fo.default)(No.default.anim),style:{background:e}})})]})}Eu.Ouroboro=tI;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Eu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(v2);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=kS;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=HS;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=qS;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=XS;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=QS;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=JS;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=t2;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=r2;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const c=o2;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return c.Orbitals}});const d=c2;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return d.Ring}});const f=d2;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return f.Ripple}});const v=p2;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return v.Roller}});const m=m2;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return m.Spinner}});const p=v2;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return p.Ouroboro}})})(_S);const nI=()=>u.jsx(C3,{children:u.jsx(_S.Default,{color:"#6d433da8"})});const rI="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",iI=tj`
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
  src: url(${rI}) format('truetype');
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
`,oI=C.div`
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
`,aI=C(Te)`
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
`,sI=C.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,lI=C.h3`

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
`,cI=C.a`

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
`,uI=C.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,dI=()=>{const[e,t]=y.useState([]);return y.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),u.jsxs(u.Fragment,{children:[u.jsx(sI,{children:"Каталог"}),u.jsxs(oI,{children:[e.slice(0,7).map(n=>u.jsx(aI,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:u.jsx(lI,{children:n.title})},n.title)),u.jsxs(cI,{href:"catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(uI,{children:u.jsx(Vc,{size:24})})]})]})]})};function Uv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Lm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Uv(t[r])&&Uv(e[r])&&Object.keys(t[r]).length>0&&Lm(e[r],t[r])})}const S2={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function On(){const e=typeof document<"u"?document:{};return Lm(e,S2),e}const fI={document:S2,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function wt(){const e=typeof window<"u"?window:{};return Lm(e,fI),e}function pI(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function hI(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function C2(e,t=0){return setTimeout(e,t)}function rc(){return Date.now()}function mI(e){const t=wt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function gI(e,t="x"){const n=wt();let r,i,o;const a=mI(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function js(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function vI(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function At(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!vI(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(js(t[l])&&js(r[l])?r[l].__swiper__?t[l]=r[l]:At(t[l],r[l]):!js(t[l])&&js(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:At(t[l],r[l])):t[l]=r[l])}}}return t}function yi(e,t,n){e.style.setProperty(t,n)}function _2({swiper:e,targetPosition:t,side:n}){const r=wt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",c=(f,v)=>s==="next"&&f>=v||s==="prev"&&f<=v,d=()=>{a=new Date().getTime(),o===null&&(o=a);const f=Math.max(Math.min((a-o)/l,1),0),v=.5-Math.cos(f*Math.PI)/2;let m=i+v*(t-i);if(c(m,t)&&(m=t),e.wrapperEl.scrollTo({[n]:m}),c(m,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:m})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function En(e,t=""){const n=wt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function xI(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function yI(e,t){const n=wt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=xI(e,t))),r}function ic(e){try{console.warn(e);return}catch{}}function oc(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:pI(t)),n}function bI(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function wI(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function gr(e,t){return wt().getComputedStyle(e,null).getPropertyValue(t)}function ac(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function k2(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Rp(e,t,n){const r=wt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Na(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function E2(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=En(e.el,`.${r[i]}`)[0];o||(o=oc("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const Wv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function SI({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Wv};function i(m){let p;return m&&typeof m=="string"&&e.isElement&&(p=e.el.querySelector(m)||e.hostEl.querySelector(m),p)?p:(m&&(typeof m=="string"&&(p=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&p&&p.length>1&&e.el.querySelectorAll(m).length===1?p=e.el.querySelector(m):p&&p.length===1&&(p=p[0])),m&&!p?m:p)}function o(m,p){const x=e.params.navigation;m=qe(m),m.forEach(w=>{w&&(w.classList[p?"add":"remove"](...x.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=p),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](x.lockClass))})}function a(){const{nextEl:m,prevEl:p}=e.navigation;if(e.params.loop){o(p,!1),o(m,!1);return}o(p,e.isBeginning&&!e.params.rewind),o(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const m=e.params.navigation;if(e.params.navigation=E2(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let p=i(m.nextEl),x=i(m.prevEl);Object.assign(e.navigation,{nextEl:p,prevEl:x}),p=qe(p),x=qe(x);const w=(h,g)=>{if(h){if(m.addIcons&&h.matches(".swiper-button-next,.swiper-button-prev")&&!h.querySelector("svg")){const b=document.createElement("div");Na(b,Wv),h.appendChild(b.querySelector("svg")),b.remove()}h.addEventListener("click",g==="next"?s:l)}!e.enabled&&h&&h.classList.add(...m.lockClass.split(" "))};p.forEach(h=>w(h,"next")),x.forEach(h=>w(h,"prev"))}function d(){let{nextEl:m,prevEl:p}=e.navigation;m=qe(m),p=qe(p);const x=(w,h)=>{w.removeEventListener("click",h==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(w=>x(w,"next")),p.forEach(w=>x(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?v():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:m,prevEl:p}=e.navigation;if(m=qe(m),p=qe(p),e.enabled){a();return}[...m,...p].filter(x=>!!x).forEach(x=>x.classList.add(e.params.navigation.lockClass))}),n("click",(m,p)=>{let{nextEl:x,prevEl:w}=e.navigation;x=qe(x),w=qe(w);const h=p.target;let g=w.includes(h)||x.includes(h);if(e.isElement&&!g){const b=p.path||p.composedPath&&p.composedPath();b&&(g=b.find(S=>x.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!g){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===h||e.pagination.el.contains(h)))return;let b;x.length?b=x[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(b=w[0].classList.contains(e.params.navigation.hiddenClass)),r(b===!0?"navigationShow":"navigationHide"),[...x,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const f=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),a()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:f,disable:v,update:a,init:c,destroy:d})}function Bo(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function CI({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(h,g){const{bulletActiveClass:b}=e.params.pagination;h&&(h=h[`${g==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${b}-${g}`),h=h[`${g==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${b}-${g}-${g}`)))}function c(h,g,b){if(h=h%b,g=g%b,g===h+1)return"next";if(g===h-1)return"previous"}function d(h){const g=h.target.closest(Bo(e.params.pagination.bulletClass));if(!g)return;h.preventDefault();const b=ac(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const S=c(e.realIndex,b,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b)}function f(){const h=e.rtl,g=e.params.pagination;if(l())return;let b=e.pagination.el;b=qe(b);let S,k;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,E=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(k=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,k=e.previousSnapIndex):(k=e.previousIndex||0,S=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let $,M,L;if(g.dynamicBullets&&(o=Rp(_[0],e.isHorizontal()?"width":"height",!0),b.forEach(D=>{D.style[e.isHorizontal()?"width":"height"]=`${o*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&k!==void 0&&(a+=S-(k||0),a>g.dynamicMainBullets-1?a=g.dynamicMainBullets-1:a<0&&(a=0)),$=Math.max(S-a,0),M=$+(Math.min(_.length,g.dynamicMainBullets)-1),L=(M+$)/2),_.forEach(D=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(A=>`${g.bulletActiveClass}${A}`)].map(A=>typeof A=="string"&&A.includes(" ")?A.split(" "):A).flat();D.classList.remove(...j)}),b.length>1)_.forEach(D=>{const j=ac(D);j===S?D.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&D.setAttribute("part","bullet"),g.dynamicBullets&&(j>=$&&j<=M&&D.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),j===$&&s(D,"prev"),j===M&&s(D,"next"))});else{const D=_[S];if(D&&D.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&_.forEach((j,A)=>{j.setAttribute("part",A===S?"bullet-active":"bullet")}),g.dynamicBullets){const j=_[$],A=_[M];for(let I=$;I<=M;I+=1)_[I]&&_[I].classList.add(...`${g.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(A,"next")}}if(g.dynamicBullets){const D=Math.min(_.length,g.dynamicMainBullets+4),j=(o*D-o)/2-L*o,A=h?"right":"left";_.forEach(I=>{I.style[e.isHorizontal()?A:"top"]=`${j}px`})}}b.forEach((_,$)=>{if(g.type==="fraction"&&(_.querySelectorAll(Bo(g.currentClass)).forEach(M=>{M.textContent=g.formatFractionCurrent(S+1)}),_.querySelectorAll(Bo(g.totalClass)).forEach(M=>{M.textContent=g.formatFractionTotal(E)})),g.type==="progressbar"){let M;g.progressbarOpposite?M=e.isHorizontal()?"vertical":"horizontal":M=e.isHorizontal()?"horizontal":"vertical";const L=(S+1)/E;let D=1,j=1;M==="horizontal"?D=L:j=L,_.querySelectorAll(Bo(g.progressbarFillClass)).forEach(A=>{A.style.transform=`translate3d(0,0,0) scaleX(${D}) scaleY(${j})`,A.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(Na(_,g.renderCustom(e,S+1,E)),$===0&&r("paginationRender",_)):($===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](g.lockClass)})}function v(){const h=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=qe(b);let S="";if(h.type==="bullets"){let k=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&k>g&&(k=g);for(let T=0;T<k;T+=1)h.renderBullet?S+=h.renderBullet.call(e,T,h.bulletClass):S+=`<${h.bulletElement} ${e.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(e,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(e,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach(k=>{h.type!=="custom"&&Na(k,S||""),h.type==="bullets"&&e.pagination.bullets.push(...k.querySelectorAll(Bo(h.bulletClass)))}),h.type!=="custom"&&r("paginationRender",b[0])}function m(){e.params.pagination=E2(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let g;typeof h.el=="string"&&e.isElement&&(g=e.el.querySelector(h.el)),!g&&typeof h.el=="string"&&(g=[...document.querySelectorAll(h.el)]),g||(g=h.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(h.el)],g.length>1&&(g=g.find(b=>k2(b,".swiper")[0]===e.el))),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=qe(g),g.forEach(b=>{h.type==="bullets"&&h.clickable&&b.classList.add(...(h.clickableClass||"").split(" ")),b.classList.add(h.modifierClass+h.type),b.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(b.classList.add(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&b.classList.add(h.progressbarOppositeClass),h.clickable&&b.addEventListener("click",d),e.enabled||b.classList.add(h.lockClass)}))}function p(){const h=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=qe(g),g.forEach(b=>{b.classList.remove(h.hiddenClass),b.classList.remove(h.modifierClass+h.type),b.classList.remove(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(b.classList.remove(...(h.clickableClass||"").split(" ")),b.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(b=>b.classList.remove(...h.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const h=e.params.pagination;let{el:g}=e.pagination;g=qe(g),g.forEach(b=>{b.classList.remove(h.horizontalClass,h.verticalClass),b.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(m(),v(),f())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&f()}),n("snapIndexChange",()=>{f()}),n("snapGridLengthChange",()=>{v(),f()}),n("destroy",()=>{p()}),n("enable disable",()=>{let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{f()}),n("click",(h,g)=>{const b=g.target,S=qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const k=S[0].classList.contains(e.params.pagination.hiddenClass);r(k===!0?"paginationShow":"paginationHide"),S.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const x=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),m(),v(),f()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),p()};Object.assign(e.pagination,{enable:x,disable:w,render:v,update:f,init:m,destroy:p})}function _I({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,c,d=new Date().getTime(),f,v,m,p,x,w;function h(z){!e||e.destroyed||!e.wrapperEl||z.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",h),!(w||z.detail&&z.detail.bySwiperTouchMove)&&$())}const g=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?f=!0:f&&(s=c,f=!1);const z=e.autoplay.paused?c:d+s-new Date().getTime();e.autoplay.timeLeft=z,r("autoplayTimeLeft",z,z/l),a=requestAnimationFrame(()=>{g()})},b=()=>{let z;return e.virtual&&e.params.virtual.enabled?z=e.slides.find(O=>O.classList.contains("swiper-slide-active")):z=e.slides[e.activeIndex],z?parseInt(z.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let z=e.params.autoplay.delay;const P=b();return!Number.isNaN(P)&&P>0&&(z=P),z},k=z=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),g();let P=z;typeof P>"u"&&(P=S(),l=P,s=P),c=P;const O=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(O,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,O,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(O,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,O,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{k()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{N()},P)):requestAnimationFrame(()=>{N()}),P},T=()=>{d=new Date().getTime(),e.autoplay.running=!0,k(),r("autoplayStart")},E=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},_=(z,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),z||(x=!0);const O=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",h):$()};if(e.autoplay.paused=!0,P){O();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),O())},$=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),x?(x=!1,k(c)):k(),e.autoplay.paused=!1,r("autoplayResume"))},M=()=>{if(e.destroyed||!e.autoplay.running)return;const z=On();z.visibilityState==="hidden"&&(x=!0,_(!0)),z.visibilityState==="visible"&&$()},L=z=>{z.pointerType==="mouse"&&(x=!0,w=!0,!(e.animating||e.autoplay.paused)&&_(!0))},D=z=>{z.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&$())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",L),e.el.addEventListener("pointerleave",D))},A=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",L),e.el.removeEventListener("pointerleave",D))},I=()=>{On().addEventListener("visibilitychange",M)},R=()=>{On().removeEventListener("visibilitychange",M)};n("init",()=>{e.params.autoplay.enabled&&(j(),I(),T())}),n("destroy",()=>{A(),R(),e.autoplay.running&&E()}),n("_freeModeStaticRelease",()=>{(m||x)&&$()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?E():_(!0,!0)}),n("beforeTransitionStart",(z,P,O)=>{e.destroyed||!e.autoplay.running||(O||!e.params.autoplay.disableOnInteraction?_(!0,!0):E())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){E();return}v=!0,m=!1,x=!1,p=setTimeout(()=>{x=!0,m=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(p),clearTimeout(o),e.params.autoplay.disableOnInteraction){m=!1,v=!1;return}m&&e.params.cssMode&&$(),m=!1,v=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=S(),l=S())}),Object.assign(e.autoplay,{start:T,stop:E,pause:_,resume:$})}let Rd;function kI(){const e=wt(),t=On();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function T2(){return Rd||(Rd=kI()),Rd}let zd;function EI({userAgent:e}={}){const t=T2(),n=wt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),f=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=r==="Win32";let m=r==="MacIntel";const p=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&m&&t.touch&&p.indexOf(`${a}x${l}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),m=!1),s&&!v&&(o.os="android",o.android=!0),(c||f||d)&&(o.os="ios",o.ios=!0),o}function P2(e={}){return zd||(zd=EI(e)),zd}let Fd;function TI(){const e=wt(),t=P2();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,c]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=s<16||s===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function j2(){return Fd||(Fd=TI()),Fd}function PI({swiper:e,on:t,emit:n}){const r=wt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(d=>{o=r.requestAnimationFrame(()=>{const{width:f,height:v}=e;let m=f,p=v;d.forEach(({contentBoxSize:x,contentRect:w,target:h})=>{h&&h!==e.el||(m=w?w.width:(x[0]||x).inlineSize,p=w?w.height:(x[0]||x).blockSize)}),(m!==f||p!==v)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function jI({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=wt(),a=(c,d={})=>{const f=o.MutationObserver||o.WebkitMutationObserver,v=new f(m=>{if(e.__preventObserver__)return;if(m.length===1){r("observerUpdate",m[0]);return}const p=function(){r("observerUpdate",m[0])};o.requestAnimationFrame?o.requestAnimationFrame(p):o.setTimeout(p,0)});v.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(v)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=k2(e.hostEl);for(let d=0;d<c.length;d+=1)a(c[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var OI={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function $I(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(gr(r,"padding-left")||0,10)-parseInt(gr(r,"padding-right")||0,10),n=n-parseInt(gr(r,"padding-top")||0,10)-parseInt(gr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function MI(){const e=this;function t(M,L){return parseFloat(M.getPropertyValue(e.getDirectionLabel(L))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,c=En(i,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:c.length;let f=[];const v=[],m=[];let p=n.slidesOffsetBefore;typeof p=="function"&&(p=n.slidesOffsetBefore.call(e));let x=n.slidesOffsetAfter;typeof x=="function"&&(x=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,h=e.slidesGrid.length,g=e.size-p-x;let b=n.spaceBetween,S=-p,k=0,T=0;if(typeof g>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*g:typeof b=="string"&&(b=parseFloat(b)),e.virtualSize=-b-p-x,c.forEach(M=>{o?M.style.marginLeft="":M.style.marginRight="",M.style.marginBottom="",M.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(yi(r,"--swiper-centered-offset-before",""),yi(r,"--swiper-centered-offset-after","")),n.cssMode&&(yi(r,"--swiper-slides-offset-before",`${p}px`),yi(r,"--swiper-slides-offset-after",`${x}px`));const E=n.grid&&n.grid.rows>1&&e.grid;E?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let _;const $=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(M=>typeof n.breakpoints[M].slidesPerView<"u").length>0;for(let M=0;M<d;M+=1){_=0;const L=c[M];if(!(L&&(E&&e.grid.updateSlide(M,L,c),gr(L,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&L&&(n.roundLengths&&(_=Math.floor(_)),L.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){$&&(L.style[e.getDirectionLabel("width")]="");const D=getComputedStyle(L),j=L.style.transform,A=L.style.webkitTransform;if(j&&(L.style.transform="none"),A&&(L.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?Rp(L,"width",!0):Rp(L,"height",!0);else{const I=t(D,"width"),R=t(D,"padding-left"),z=t(D,"padding-right"),P=t(D,"margin-left"),O=t(D,"margin-right"),N=D.getPropertyValue("box-sizing");if(N&&N==="border-box")_=I+P+O;else{const{clientWidth:B,offsetWidth:F}=L;_=I+R+z+P+O+(F-B)}}j&&(L.style.transform=j),A&&(L.style.webkitTransform=A),n.roundLengths&&(_=Math.floor(_))}else _=(g-(n.slidesPerView-1)*b)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),L&&(L.style[e.getDirectionLabel("width")]=`${_}px`);L&&(L.swiperSlideSize=_),m.push(_),n.centeredSlides?(S=S+_/2+k/2+b,k===0&&M!==0&&(S=S-g/2-b),M===0&&(S=S-g/2-b),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),T%n.slidesPerGroup===0&&f.push(S),v.push(S)):(n.roundLengths&&(S=Math.floor(S)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&f.push(S),v.push(S),S=S+_+b),e.virtualSize+=_+b,k=_,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,g)+x,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+b}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),E&&e.grid.updateWrapperSize(_,f),!n.centeredSlides){const M=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,L=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||M);let D=f.length;if(L){let A;if(n.slidesPerView==="auto"){A=1;let I=0;for(let R=m.length-1;R>=0&&(I+=m[R]+(R<m.length-1?b:0),I<=g);R-=1)A=m.length-R}else A=Math.floor(n.slidesPerView);D=Math.max(d-A,0)}const j=[];for(let A=0;A<f.length;A+=1){let I=f[A];n.roundLengths&&(I=Math.floor(I)),L?A<=D&&j.push(I):f[A]<=e.virtualSize-g&&j.push(I)}f=j,Math.floor(e.virtualSize-g)-Math.floor(f[f.length-1])>1&&(L||f.push(e.virtualSize-g))}if(l&&n.loop){const M=m[0]+b;if(n.slidesPerGroup>1){const L=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),D=M*n.slidesPerGroup;for(let j=0;j<L;j+=1)f.push(f[f.length-1]+D)}for(let L=0;L<e.virtual.slidesBefore+e.virtual.slidesAfter;L+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+M),v.push(v[v.length-1]+M),e.virtualSize+=M}if(f.length===0&&(f=[0]),b!==0){const M=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((L,D)=>!n.cssMode||n.loop?!0:D!==c.length-1).forEach(L=>{L.style[M]=`${b}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let M=0;m.forEach(D=>{M+=D+(b||0)}),M-=b;const L=M>g?M-g:0;f=f.map(D=>D<=0?-p:D>L?L+x:D)}if(n.centerInsufficientSlides){let M=0;if(m.forEach(L=>{M+=L+(b||0)}),M-=b,M<g){const L=(g-M)/2;f.forEach((D,j)=>{f[j]=D-L}),v.forEach((D,j)=>{v[j]=D+L})}}if(Object.assign(e,{slides:c,snapGrid:f,slidesGrid:v,slidesSizesGrid:m}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){yi(r,"--swiper-centered-offset-before",`${-f[0]}px`),yi(r,"--swiper-centered-offset-after",`${e.size/2-m[m.length-1]/2}px`);const M=-e.snapGrid[0],L=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(D=>D+M),e.slidesGrid=e.slidesGrid.map(D=>D+L)}if(d!==s&&e.emit("slidesLengthChange"),f.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const M=`${n.containerModifierClass}backface-hidden`,L=e.el.classList.contains(M);d<=n.maxBackfaceHiddenSlides?L||e.el.classList.add(M):L&&e.el.classList.remove(M)}}function II(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function DI(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Hv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function LI(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const c=r[s];let d=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const f=(a+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),v=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),m=-(a-d),p=m+t.slidesSizesGrid[s],x=m>=0&&m<=t.size-t.slidesSizesGrid[s],w=m>=0&&m<t.size-1||p>1&&p<=t.size||m<=0&&p>=t.size;w&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s)),Hv(c,w,n.slideVisibleClass),Hv(c,x,n.slideFullyVisibleClass),c.progress=i?-f:f,c.originalProgress=i?-v:v}}function AI(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,c=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=f||i>=1,d&&(i=0),f&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),v=t.slidesGrid[d],m=t.slidesGrid[f],p=t.slidesGrid[t.slidesGrid.length-1],x=Math.abs(e);x>=v?l=(x-v)/p:l=(x+p-m)/p,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(s&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Nd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function RI(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=f=>En(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let s,c,d;if(o)if(n.loop){let f=i-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${f}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(f=>f.column===i),d=t.find(f=>f.column===i+1),c=t.find(f=>f.column===i-1)):s=t[i];s&&(a||(d=wI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),c=bI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(f=>{Nd(f,f===s,n.slideActiveClass),Nd(f,f===d,n.slideNextClass),Nd(f,f===c,n.slidePrevClass)}),e.emitSlidesClasses()}const ul=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},Bd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},zp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,c)=>a+r+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&Bd(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&Bd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Bd(e,a)};function zI(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function FI(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,c;const d=m=>{let p=m-t.virtual.slidesBefore;return p<0&&(p=t.virtual.slides.length+p),p>=t.virtual.slides.length&&(p-=t.virtual.slides.length),p};if(typeof s>"u"&&(s=zI(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const m=Math.min(i.slidesPerGroupSkip,s);c=m+Math.floor((s-m)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(s);return}const f=t.grid&&i.grid&&i.grid.rows>1;let v;if(t.virtual&&i.virtual.enabled)i.loop?v=d(s):v=s;else if(f){const m=t.slides.find(x=>x.column===s);let p=parseInt(m.getAttribute("data-swiper-slide-index"),10);Number.isNaN(p)&&(p=Math.max(t.slides.indexOf(m),0)),v=Math.floor(p/i.grid.rows)}else if(t.slides[s]){const m=t.slides[s].getAttribute("data-swiper-slide-index");m?v=parseInt(m,10):v=s}else v=s;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:v,previousIndex:o,activeIndex:s}),t.initialized&&zp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==v&&t.emit("realIndexChange"),t.emit("slideChange"))}function NI(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var BI={updateSize:$I,updateSlides:MI,updateAutoHeight:II,updateSlidesOffset:DI,updateSlidesProgress:LI,updateProgress:AI,updateSlidesClasses:RI,updateActiveIndex:FI,updateClickedSlide:NI};function VI(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=gI(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function UI(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const c=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let d;const f=n.maxTranslate()-n.minTranslate();f===0?d=0:d=(e-n.minTranslate())/f,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function WI(){return-this.snapGrid[0]}function HI(){return-this.snapGrid[this.snapGrid.length-1]}function GI(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),c=o.maxTranslate();let d;if(r&&e>s?d=s:r&&e<c?d=c:d=e,o.updateProgress(d),a.cssMode){const f=o.isHorizontal();if(t===0)l[f?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return _2({swiper:o,targetPosition:-d,side:f?"left":"top"}),!0;l.scrollTo({[f?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(v){!o||o.destroyed||v.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var qI={getTranslate:VI,setTranslate:UI,minTranslate:WI,maxTranslate:HI,translateTo:GI};function YI(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function O2({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function XI(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),O2({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function KI(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),O2({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var QI={setTransition:YI,transitionStart:XI,transitionEnd:KI};function ZI(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:c,previousIndex:d,activeIndex:f,rtlTranslate:v,wrapperEl:m,enabled:p}=o;if(!p&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const x=Math.min(o.params.slidesPerGroupSkip,a);let w=x+Math.floor((a-x)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const h=-s[w];if(l.normalizeSlideIndex)for(let E=0;E<c.length;E+=1){const _=-Math.floor(h*100),$=Math.floor(c[E]*100),M=Math.floor(c[E+1]*100);typeof c[E+1]<"u"?_>=$&&_<M-(M-$)/2?a=E:_>=$&&_<M&&(a=E+1):_>=$&&(a=E)}if(o.initialized&&a!==f&&(!o.allowSlideNext&&(v?h>o.translate&&h>o.minTranslate():h<o.translate&&h<o.minTranslate())||!o.allowSlidePrev&&h>o.translate&&h>o.maxTranslate()&&(f||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(h);let g;a>f?g="next":a<f?g="prev":g="reset";const b=o.virtual&&o.params.virtual.enabled;if(!(b&&i)&&(v&&-h===o.translate||!v&&h===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(h),g!=="reset"&&(o.transitionStart(n,g),o.transitionEnd(n,g)),!1;if(l.cssMode){const E=o.isHorizontal(),_=v?h:-h;if(t===0)b&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),b&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[E?"scrollLeft":"scrollTop"]=_})):m[E?"scrollLeft":"scrollTop"]=_,b&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return _2({swiper:o,targetPosition:_,side:E?"left":"top"}),!0;m.scrollTo({[E?"left":"top"]:_,behavior:"smooth"})}return!0}const T=j2().isSafari;return b&&!i&&T&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(h),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,g),t===0?o.transitionEnd(n,g):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(_){!o||o.destroyed||_.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,g))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function JI(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const x=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===x).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:f}=i.params,v=c||!!d||!!f;let m=i.params.slidesPerView;m==="auto"?m=i.slidesPerViewDynamic():(m=Math.ceil(parseFloat(i.params.slidesPerView,10)),v&&m%2===0&&(m=m+1));let p=s-l<m;if(v&&(p=p||l<Math.ceil(m/2)),r&&v&&i.params.slidesPerView!=="auto"&&!o&&(p=!1),p){const x=v?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:x,slideTo:!0,activeSlideIndex:x==="next"?l+1:l-s+1,slideRealIndex:x==="next"?i.realIndex:void 0})}if(o){const x=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===x).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function e6(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function t6(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=l?r.translate:-r.translate;function v(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const m=v(f),p=o.map(g=>v(g)),x=i.freeMode&&i.freeMode.enabled;let w=o[p.indexOf(m)-1];if(typeof w>"u"&&(i.cssMode||x)){let g;o.forEach((b,S)=>{m>=b&&(g=S)}),typeof g<"u"&&(w=x?o[g]:o[g>0?g-1:g])}let h=0;if(typeof w<"u"&&(h=a.indexOf(w),h<0&&(h=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(h=h-r.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),i.rewind&&r.isBeginning){const g=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(g,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(h,e,t,n)}),!0;return r.slideTo(h,e,t,n)}function n6(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function r6(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const c=i.snapGrid[l],d=i.snapGrid[l+1];s-c>(d-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],d=i.snapGrid[l];s-c<=(d-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function i6(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(En(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),C2(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var o6={slideTo:ZI,slideToLoop:JI,slideNext:e6,slidePrev:t6,slideReset:n6,slideToClosest:r6,slideToClickedSlide:i6};function a6(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{En(i,`.${r.slideClass}, swiper-slide`).forEach((p,x)=>{p.setAttribute("data-swiper-slide-index",x)})},a=()=>{const m=En(i,`.${r.slideBlankClass}`);m.forEach(p=>{p.remove()}),m.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),c=n.slides.length%s!==0,d=l&&n.slides.length%r.grid.rows!==0,f=m=>{for(let p=0;p<m;p+=1){const x=n.isElement?oc("swiper-slide",[r.slideBlankClass]):oc("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(x)}};if(c){if(r.loopAddBlankSlides){const m=s-n.slides.length%s;f(m),n.recalcSlides(),n.updateSlides()}else ic("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(d){if(r.loopAddBlankSlides){const m=r.grid.rows-n.slides.length%r.grid.rows;f(m),n.recalcSlides(),n.updateSlides()}else ic("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const v=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:v?void 0:"next",initial:t})}function s6({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:f,slidesEl:v,params:m}=s,{centeredSlides:p,slidesOffsetBefore:x,slidesOffsetAfter:w,initialSlide:h}=m,g=p||!!x||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&m.virtual.enabled){t&&(!g&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):g&&s.snapIndex<m.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=f,s.emit("loopFix");return}let b=m.slidesPerView;b==="auto"?b=s.slidesPerViewDynamic():(b=Math.ceil(parseFloat(m.slidesPerView,10)),g&&b%2===0&&(b=b+1));const S=m.slidesPerGroupAuto?b:m.slidesPerGroup;let k=g?Math.max(S,Math.ceil(b/2)):S;k%S!==0&&(k+=S-k%S),k+=m.loopAdditionalSlides,s.loopedSlides=k;const T=s.grid&&m.grid&&m.grid.rows>1;c.length<b+k||s.params.effect==="cards"&&c.length<b+k*2?ic("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&m.grid.fill==="row"&&ic("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],_=[],$=T?Math.ceil(c.length/m.grid.rows):c.length,M=o&&$-h<b&&!g;let L=M?h:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(c.find(P=>P.classList.contains(m.slideActiveClass))):L=i;const D=n==="next"||!n,j=n==="prev"||!n;let A=0,I=0;const z=(T?c[i].column:i)+(g&&typeof r>"u"?-b/2+.5:0);if(z<k){A=Math.max(k-z,S);for(let P=0;P<k-z;P+=1){const O=P-Math.floor(P/$)*$;if(T){const N=$-O-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===N&&E.push(B)}else E.push($-O-1)}}else if(z+b>$-k){I=Math.max(z-($-k*2),S),M&&(I=Math.max(I,b-$+h+1));for(let P=0;P<I;P+=1){const O=P-Math.floor(P/$)*$;T?c.forEach((N,B)=>{N.column===O&&_.push(B)}):_.push(O)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&c.length<b+k*2&&(_.includes(i)&&_.splice(_.indexOf(i),1),E.includes(i)&&E.splice(E.indexOf(i),1)),j&&E.forEach(P=>{c[P].swiperLoopMoveDOM=!0,v.prepend(c[P]),c[P].swiperLoopMoveDOM=!1}),D&&_.forEach(P=>{c[P].swiperLoopMoveDOM=!0,v.append(c[P]),c[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),m.slidesPerView==="auto"?s.updateSlides():T&&(E.length>0&&j||_.length>0&&D)&&s.slides.forEach((P,O)=>{s.grid.updateSlide(O,P,s.slides)}),m.watchSlidesProgress&&s.updateSlidesOffset(),t){if(E.length>0&&j){if(typeof e>"u"){const P=s.slidesGrid[L],N=s.slidesGrid[L+A]-P;l?s.setTranslate(s.translate-N):(s.slideTo(L+Math.ceil(A),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const P=T?E.length/m.grid.rows:E.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&D)if(typeof e>"u"){const P=s.slidesGrid[L],N=s.slidesGrid[L-I]-P;l?s.setTranslate(s.translate-N):(s.slideTo(L-I,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const P=T?_.length/m.grid.rows:_.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=f,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(O=>{!O.destroyed&&O.params.loop&&O.loopFix({...P,slideTo:O.params.slidesPerView===m.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===m.slidesPerView?t:!1})}s.emit("loopFix")}function l6(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var c6={loopCreate:a6,loopFix:s6,loopDestroy:l6};function u6(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function d6(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var f6={setGrabCursor:u6,unsetGrabCursor:d6};function p6(e,t=this){function n(r){if(!r||r===On()||r===wt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Gv(e,t,n){const r=wt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function h6(e){const t=this,n=On();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Gv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!yI(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&d&&(s=d[0]);const f=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(v?p6(f,s):s.closest(f))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const m=a.currentX,p=a.currentY;if(!Gv(t,r,m))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=m,a.startY=p,i.touchStartTime=rc(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let x=!0;s.matches(i.focusableElements)&&(x=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=x&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function m6(e){const t=On(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].find(T=>T.identifier===r.touchId),!c||c.identifier!==r.touchId)return}else c=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const d=c.pageX,f=c.pageY;if(s.preventedByNestedSwiper){o.startX=d,o.startY=f;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:f,currentX:d,currentY:f}),r.touchStartTime=rc());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(f<o.startY&&n.translate<=n.maxTranslate()||f>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(d>o.startX&&-n.translate<=n.maxTranslate()||d<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=f;const v=o.currentX-o.startX,m=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(v**2+m**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:v*v+m*m>=25&&(T=Math.atan2(Math.abs(m),Math.abs(v))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let p=n.isHorizontal()?v:m,x=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(p=Math.abs(p)*(a?1:-1),x=Math.abs(x)*(a?1:-1)),o.diff=p,p*=i.touchRatio,a&&(p=-p,x=-x);const w=n.touchesDirection;n.swipeDirection=p>0?"prev":"next",n.touchesDirection=x>0?"prev":"next";const h=n.params.loop&&!i.cssMode,g=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(h&&g&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let b;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&h&&g&&Math.abs(p)>=1){Object.assign(o,{startX:d,startY:f,currentX:d,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=p+r.startTranslate;let S=!0,k=i.resistanceRatio;if(i.touchReleaseOnEdges&&(k=0),p>0?(h&&g&&!b&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+p)**k))):p<0&&(h&&g&&!b&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-p)**k))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(p)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function g6(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(k=>k.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:c,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=rc(),v=f-n.touchStartTime;if(t.allowClick){const k=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(k&&k[0]||r.target,k),t.emit("tap click",r),v<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=rc(),C2(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let m;if(a.followFinger?m=s?t.translate:-t.translate:m=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:m});return}const p=m>=-t.maxTranslate()&&!t.params.loop;let x=0,w=t.slidesSizesGrid[0];for(let k=0;k<c.length;k+=k<a.slidesPerGroupSkip?1:a.slidesPerGroup){const T=k<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[k+T]<"u"?(p||m>=c[k]&&m<c[k+T])&&(x=k,w=c[k+T]-c[k]):(p||m>=c[k])&&(x=k,w=c[c.length-1]-c[c.length-2])}let h=null,g=null;a.rewind&&(t.isBeginning?g=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));const b=(m-c[x])/w,S=x<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(v>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?h:x+S):t.slideTo(x)),t.swipeDirection==="prev"&&(b>1-a.longSwipesRatio?t.slideTo(x+S):g!==null&&b<0&&Math.abs(b)>a.longSwipesRatio?t.slideTo(g):t.slideTo(x))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(x+S):t.slideTo(x):(t.swipeDirection==="next"&&t.slideTo(h!==null?h:x+S),t.swipeDirection==="prev"&&t.slideTo(g!==null?g:x))}}function qv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function v6(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function x6(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function y6(e){const t=this;ul(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function b6(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const $2=(e,t)=>{const n=On(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",qv,!0):e[c]("observerUpdate",qv,!0),i[s]("load",e.onLoad,{capture:!0}))};function w6(){const e=this,{params:t}=e;e.onTouchStart=h6.bind(e),e.onTouchMove=m6.bind(e),e.onTouchEnd=g6.bind(e),e.onDocumentTouchStart=b6.bind(e),t.cssMode&&(e.onScroll=x6.bind(e)),e.onClick=v6.bind(e),e.onLoad=y6.bind(e),$2(e,"on")}function S6(){$2(this,"off")}var C6={attachEvents:w6,detachEvents:S6};const Yv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function _6(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=On(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),c=e.getBreakpoint(o,l,s);if(!c||e.currentBreakpoint===c)return;const f=(c in o?o[c]:void 0)||e.originalParams,v=Yv(e,r),m=Yv(e,f),p=e.params.grabCursor,x=f.grabCursor,w=r.enabled;v&&!m?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!v&&m&&(i.classList.add(`${r.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!x?e.unsetGrabCursor():!p&&x&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(T=>{if(typeof f[T]>"u")return;const E=r[T]&&r[T].enabled,_=f[T]&&f[T].enabled;E&&!_&&e[T].disable(),!E&&_&&e[T].enable()});const h=f.direction&&f.direction!==r.direction,g=r.loop&&(f.slidesPerView!==r.slidesPerView||h),b=r.loop;h&&n&&e.changeDirection(),At(e.params,f);const S=e.params.enabled,k=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",f),n&&(g?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&k?(e.loopCreate(t),e.updateSlides()):b&&!k&&e.loopDestroy()),e.emit("breakpoint",f)}function k6(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=wt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:c}=a[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var E6={setBreakpoint:_6,getBreakpoint:k6};function T6(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function P6(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=T6(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function j6(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var O6={addClasses:P6,removeClasses:j6};function $6(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var M6={checkOverflow:$6},Fp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function I6(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){At(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){At(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),At(t,r)}}const Vd={eventsEmitter:OI,update:BI,translate:qI,transition:QI,slide:o6,loop:c6,grabCursor:f6,events:C6,breakpoints:E6,checkOverflow:M6,classes:O6},Ud={};let Am=class Rn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=At({},r),n&&!r.el&&(r.el=n);const i=On();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(c=>{const d=At({},r,{el:c});s.push(new Rn(d))}),s}const o=this;o.__swiper__=!0,o.support=T2(),o.device=P2({userAgent:r.userAgent}),o.browser=j2(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:I6(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=At({},Fp,a);return o.params=At({},l,Ud,r),o.originalParams=At({},o.params),o.passedParams=At({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=En(n,`.${r.slideClass}, swiper-slide`),o=ac(i[0]);return ac(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=En(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let f=o[c]?Math.ceil(o[c].swiperSlideSize):0,v;for(let m=c+1;m<o.length;m+=1)o[m]&&!v&&(f+=Math.ceil(o[m].swiperSlideSize),d+=1,f>s&&(v=!0));for(let m=c-1;m>=0;m-=1)o[m]&&!v&&(f+=o[m].swiperSlideSize,d+=1,f>s&&(v=!0))}else if(t==="current")for(let f=c+1;f<o.length;f+=1)(n?a[f]+l[f]-a[c]<s:a[f]-a[c]<s)&&(d+=1);else for(let f=c-1;f>=0;f-=1)a[c]-a[f]<s&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&ul(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):En(r,i())[0])();return!a&&n.params.createElements&&(a=oc("div",n.params.wrapperClass),r.append(a),En(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||gr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||gr(r,"direction")==="rtl"),wrongRTL:gr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?ul(n,o):o.addEventListener("load",a=>{ul(n,a.target)})}),zp(n),n.initialized=!0,zp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),hI(r)),r.destroyed=!0),null}static extendDefaults(t){At(Ud,t)}static get extendedDefaults(){return Ud}static get defaults(){return Fp}static installModule(t){Rn.prototype.__modules__||(Rn.prototype.__modules__=[]);const n=Rn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Rn.installModule(n)),Rn):(Rn.installModule(t),Rn)}};Object.keys(Vd).forEach(e=>{Object.keys(Vd[e]).forEach(t=>{Am.prototype[t]=Vd[e][t]})});Am.use([PI,jI]);const M2=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function oi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Gi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:oi(t[r])&&oi(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Gi(e[r],t[r]):e[r]=t[r]})}function I2(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function D2(e={}){return e.pagination&&typeof e.pagination.el>"u"}function L2(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function A2(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function D6(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function L6({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:c,pagination:d,navigation:f,scrollbar:v,virtual:m,thumbs:p}=e;let x,w,h,g,b,S,k,T;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(x=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(c.pagination||c.pagination===!1)&&d&&!d.el&&(h=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&v&&!v.el&&(g=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(b=!0);const E=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),c[_].prevEl=void 0,c[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),c[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?S=!0:!c.loop&&n.loop?k=!0:T=!0),s.forEach(_=>{if(oi(c[_])&&oi(n[_]))Object.assign(c[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&E(_);else{const $=n[_];($===!0||$===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?$===!1&&E(_):c[_]=n[_]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&t&&m&&c.virtual.enabled?(m.slides=t,m.update(!0)):r.includes("virtual")&&m&&c.virtual.enabled&&(t&&(m.slides=t),m.update(!0)),r.includes("children")&&t&&c.loop&&(T=!0),x&&p.init()&&p.update(!0),w&&(e.controller.control=c.controller.control),h&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),d.init(),d.render(),d.update()),g&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),v.init(),v.updateSize(),v.setTranslate()),b&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Na(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Na(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(c.navigation.nextEl=i),o&&(c.navigation.prevEl=o),f.init(),f.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||T)&&e.loopDestroy(),(k||T)&&e.loopCreate(),e.update()}function A6(e={},t=!0){const n={on:{}},r={},i={};Gi(n,Fp),n._emitClasses=!0,n.init=!1;const o={},a=M2.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?oi(e[s])?(n[s]={},i[s]={},Gi(n[s],e[s]),Gi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function R6({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){I2(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),D2(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),L2(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function z6(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),c=n.map(i);s.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return M2.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(oi(e[s])&&oi(t[s])){const c=Object.keys(e[s]),d=Object.keys(t[s]);c.length!==d.length?a(s):(c.forEach(f=>{e[s][f]!==t[s][f]&&a(s)}),d.forEach(f=>{e[s][f]!==t[s][f]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const F6=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function sc(){return sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sc.apply(this,arguments)}function R2(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function z2(e){const t=[];return Q.Children.toArray(e).forEach(n=>{R2(n)?t.push(n):n.props&&n.props.children&&z2(n.props.children).forEach(r=>t.push(r))}),t}function N6(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Q.Children.toArray(e).forEach(r=>{if(R2(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=z2(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function B6(e,t,n){if(!n)return null;const r=d=>{let f=d;return d<0?f=t.length+d:f>=t.length&&(f=f-t.length),f},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let d=l;d<s;d+=1)d>=o&&d<=a&&c.push(t[r(d)]);return c.map((d,f)=>Q.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${f}`}))}function da(e,t){return typeof window>"u"?y.useEffect(e,t):y.useLayoutEffect(e,t)}const Xv=y.createContext(null),V6=y.createContext(null),F2=y.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,c]=y.useState("swiper"),[d,f]=y.useState(null),[v,m]=y.useState(!1),p=y.useRef(!1),x=y.useRef(null),w=y.useRef(null),h=y.useRef(null),g=y.useRef(null),b=y.useRef(null),S=y.useRef(null),k=y.useRef(null),T=y.useRef(null),{params:E,passedParams:_,rest:$,events:M}=A6(o),{slides:L,slots:D}=N6(r),j=()=>{m(!v)};Object.assign(E.on,{_containerClasses(P,O){c(O)}});const A=()=>{Object.assign(E.on,M),l=!0;const P={...E};if(delete P.wrapperClass,w.current=new Am(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=L;const O={cache:!1,slides:L,renderExternal:f,renderExternalUpdate:!1};Gi(w.current.params.virtual,O),Gi(w.current.originalParams.virtual,O)}};x.current||A(),w.current&&w.current.on("_beforeBreakpoint",j);const I=()=>{l||!M||!w.current||Object.keys(M).forEach(P=>{w.current.on(P,M[P])})},R=()=>{!M||!w.current||Object.keys(M).forEach(P=>{w.current.off(P,M[P])})};y.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",j)}),y.useEffect(()=>{!p.current&&w.current&&(w.current.emitSlidesClasses(),p.current=!0)}),da(()=>{if(a&&(a.current=x.current),!!x.current)return w.current.destroyed&&A(),R6({el:x.current,nextEl:b.current,prevEl:S.current,paginationEl:k.current,scrollbarEl:T.current,swiper:w.current},E),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),da(()=>{I();const P=z6(_,h.current,L,g.current,O=>O.key);return h.current=_,g.current=L,P.length&&w.current&&!w.current.destroyed&&L6({swiper:w.current,slides:L,passedParams:_,changedParams:P,nextEl:b.current,prevEl:S.current,scrollbarEl:T.current,paginationEl:k.current}),()=>{R()}}),da(()=>{F6(w.current)},[d]);function z(){return E.virtual?B6(w.current,L,d):L.map((P,O)=>Q.cloneElement(P,{swiper:w.current,swiperSlideIndex:O}))}return Q.createElement(t,sc({ref:x,className:A2(`${s}${e?` ${e}`:""}`)},$),Q.createElement(V6.Provider,{value:w.current},D["container-start"],Q.createElement(n,{className:D6(E.wrapperClass)},D["wrapper-start"],z(),D["wrapper-end"]),I2(E)&&Q.createElement(Q.Fragment,null,Q.createElement("div",{ref:S,className:"swiper-button-prev"}),Q.createElement("div",{ref:b,className:"swiper-button-next"})),L2(E)&&Q.createElement("div",{ref:T,className:"swiper-scrollbar"}),D2(E)&&Q.createElement("div",{ref:k,className:"swiper-pagination"}),D["container-end"]))});F2.displayName="Swiper";const N2=y.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},c)=>{const d=y.useRef(null),[f,v]=y.useState("swiper-slide"),[m,p]=y.useState(!1);function x(b,S,k){S===d.current&&v(k)}da(()=>{if(typeof l<"u"&&(d.current.swiperSlideIndex=l),c&&(c.current=d.current),!(!d.current||!r)){if(r.destroyed){f!=="swiper-slide"&&v("swiper-slide");return}return r.on("_slideClass",x),()=>{r&&r.off("_slideClass",x)}}}),da(()=>{r&&d.current&&!r.destroyed&&v(r.getSlideClasses(d.current))},[r]);const w={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},h=()=>typeof t=="function"?t(w):t,g=()=>{p(!0)};return Q.createElement(e,sc({ref:d,className:A2(`${f}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:g},s),i&&Q.createElement(Xv.Provider,{value:w},Q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},h(),o&&!m&&Q.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}}))),!i&&Q.createElement(Xv.Provider,{value:w},h(),o&&!m&&Q.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}})))});N2.displayName="SwiperSlide";const U6=C.section`
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
`,W6=C.div`
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
`,H6=C.div`
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
`,G6=C(Te)`
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
`,q6=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],Y6=()=>u.jsx(U6,{children:u.jsx(F2,{modules:[SI,_I,CI],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:q6.map(e=>u.jsx(N2,{children:u.jsx(W6,{bg:e.img,children:u.jsxs(H6,{children:[u.jsx("h1",{children:e.title}),u.jsx("p",{children:e.desc}),u.jsx(G6,{to:e.url,children:e.btn})]})})},e.id))})}),X6=C.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Wd=C.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,Hd=C.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Gd=C.div`
  font-size: 14px;
  color: #888;
`,B2=()=>u.jsxs(X6,{children:[u.jsxs(Wd,{children:[u.jsx(Hd,{children:"3000+"}),u.jsx(Gd,{children:"Перевірених деталей"})]}),u.jsxs(Wd,{children:[u.jsx(Hd,{children:"6 років"}),u.jsx(Gd,{children:"Досвіду на ринку"})]}),u.jsxs(Wd,{children:[u.jsx(Hd,{children:"100%"}),u.jsx(Gd,{children:"Контроль якості"})]})]}),K6=ze.div`
  background:var(--background-color);
`,Q6=ze.div`
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
`;const Z6=()=>u.jsx(K6,{children:u.jsxs(Q6,{children:[u.jsx(Y6,{}),u.jsx(oS,{}),u.jsx(dI,{}),u.jsx(B2,{})]})}),J6=C.div`
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
`,eD=C.section`
  background-color:  var(--second-background);
`,tD=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,nD=C.button`
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
`,rD=C.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,iD=C.button`
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
`;const oD=C.div`
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
`,aD=C.div`
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
`;const sD=C.div`
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
`;const lD=C.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,cD=C.button`
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
`,V2=C.button`
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
`,uD=C.div`
  position: relative;
  display: inline-block;

`,dD=C.div`
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
`,fD=C.aside`

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
`,pD=C.h3`
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
`;const hD=C.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,mD=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,gD=C.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,vD=C.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,xD=C.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,yD=C.label`
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
`,bD=C.span`
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
`;var Bp={},Rm={},zm={},Co={};Object.defineProperty(Co,"__esModule",{value:!0});Co.Direction=void 0;var Kv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Kv||(Co.Direction=Kv={}));(function(e){var t=te&&te.__spreadArray||function(D,j,A){if(A||arguments.length===2)for(var I=0,R=j.length,z;I<R;I++)(z||!(I in j))&&(z||(z=Array.prototype.slice.call(j,0,I)),z[I]=j[I]);return D.concat(z||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=y,r=Co,i=function(D){var j=D.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(D){return D.touches&&D.touches.length||D.changedTouches&&D.changedTouches.length}e.isTouchEvent=o;function a(D,j,A){var I=(j-D)/A,R=8,z=Number(I.toFixed(R));return parseInt(z.toString(),10)===z}e.isStepDivisible=a;function l(D,j,A,I,R,z,P){var O=1e11;if(D=Math.round(D*O)/O,!z){var N=P[j-1],B=P[j+1];if(N&&N>D)return N;if(B&&B<D)return B}if(D>I)return I;if(D<A)return A;var F=Math.floor(D*O-A*O)%Math.floor(R*O),V=Math.floor(D*O-Math.abs(F)),H=F===0?D:V/O,G=Math.abs(F/O)<R/2?H:H+R,W=(0,e.getStepDecimals)(R);return parseFloat(G.toFixed(W))}e.normalizeValue=l;function s(D,j,A){return(D-j)/(A-j)}e.relativeValue=s;function c(D){return D===r.Direction.Up||D===r.Direction.Down}e.isVertical=c;function d(D,j,A){if(j>=A)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(A,")"));if(D<j)throw new RangeError("value (".concat(D,") is smaller than min (").concat(j,")"));if(D>A)throw new RangeError("value (".concat(D,") is bigger than max (").concat(A,")"))}e.checkBoundaries=d;function f(D,j,A){return D<j?j:D>A?A:D}e.checkValuesAgainstBoundaries=f;function v(D){if(!(D.length<2)&&!D.slice(1).every(function(j,A){return D[A]<=j}))throw new RangeError("values={[".concat(D,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=v;function m(D){var j=window.getComputedStyle(D);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=m;function p(D){var j=window.getComputedStyle(D);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=p;function x(D,j,A){var I=A?-1:1;D.forEach(function(R,z){return h(R,I*j[z].x,j[z].y)})}e.translateThumbs=x;function w(D,j,A,I){for(var R=0,z=M(D[0],j,A,I),P=1;P<D.length;P++){var O=M(D[P],j,A,I);O<z&&(z=O,R=P)}return R}e.getClosestThumbIndex=w;function h(D,j,A){D.style.transform="translate(".concat(j,"px, ").concat(A,"px)")}e.translate=h;var g=function(D){var j=[],A=null,I=function(){for(var R=[],z=0;z<arguments.length;z++)R[z]=arguments[z];j=R,!A&&(A=requestAnimationFrame(function(){A=null,D.apply(void 0,j)}))};return I};e.schd=g;function b(D,j,A){var I=D.slice(0);return I[j]=A,I}e.replaceAt=b;function S(D){var j=D.values,A=D.colors,I=D.min,R=D.max,z=D.direction,P=z===void 0?r.Direction.Right:z,O=D.rtl,N=O===void 0?!1:O;N&&P===r.Direction.Right?P=r.Direction.Left:N&&r.Direction.Left&&(P=r.Direction.Right);var B=j.slice(0).sort(function(V,H){return V-H}).map(function(V){return(V-I)/(R-I)*100}),F=B.reduce(function(V,H,G){return"".concat(V,", ").concat(A[G]," ").concat(H,"%, ").concat(A[G+1]," ").concat(H,"%")},"");return"linear-gradient(".concat(P,", ").concat(A[0]," 0%").concat(F,", ").concat(A[A.length-1]," 100%)")}e.getTrackBackground=S;function k(){}e.voidFn=k;function T(D){throw new Error("Didn't expect to get here")}e.assertUnreachable=T;var E=function(D,j,A,I,R){R===void 0&&(R=function(P){return P});var z=Math.ceil(t([D],Array.from(D.children),!0).reduce(function(P,O){var N=Math.ceil(O.getBoundingClientRect().width);if(O.innerText&&O.innerText.includes(A)&&O.childElementCount===0){var B=O.cloneNode(!0);B.innerHTML=R(j.toFixed(I)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>P?N:P},D.getBoundingClientRect().width));return z},_=function(D,j,A,I,R,z,P){P===void 0&&(P=function(B){return B});var O=[],N=function(B){var F=E(A[B],I[B],R,z,P),V=j[B].x;j.forEach(function(H,G){var W=H.x,q=E(A[G],I[G],R,z,P);B!==G&&(V>=W&&V<=W+q||V+F>=W&&V+F<=W+q)&&(O.includes(G)||(O.push(B),O.push(G),O=t(t([],O,!0),[B,G],!1),N(G)))})};return N(D),Array.from(new Set(O.sort()))},$=function(D,j,A,I,R,z){I===void 0&&(I=.1),R===void 0&&(R=" - "),z===void 0&&(z=function(G){return G});var P=(0,e.getStepDecimals)(I),O=(0,n.useState)({}),N=O[0],B=O[1],F=(0,n.useState)(z(j[A].toFixed(P))),V=F[0],H=F[1];return(0,n.useEffect)(function(){if(D){var G=D.getThumbs();if(G.length<1)return;var W={},q=D.getOffsets(),oe=_(A,q,G,j,R,P,z),he=z(j[A].toFixed(P));if(oe.length){var ie=oe.reduce(function(St,ko,rs,Eo){return St.length?t(t([],St,!0),[q[Eo[rs]].x],!1):[q[Eo[rs]].x]},[]);if(Math.min.apply(Math,ie)===q[A].x){var Ie=[];oe.forEach(function(St){Ie.push(j[St].toFixed(P))}),he=Array.from(new Set(Ie.sort(function(St,ko){return parseFloat(St)-parseFloat(ko)}))).map(z).join(R);var We=Math.min.apply(Math,ie),He=Math.max.apply(Math,ie),pi=G[oe[ie.indexOf(He)]].getBoundingClientRect().width;W.left="".concat(Math.abs(We-(He+pi))/2,"px"),W.transform="translate(-50%, 0)"}else W.visibility="hidden"}H(he),B(W)}},[D,j]),[V,N]};e.useThumbOverlap=$;function M(D,j,A,I){var R=D.getBoundingClientRect(),z=R.left,P=R.top,O=R.width,N=R.height;return c(I)?Math.abs(A-(P+N/2)):Math.abs(j-(z+O/2))}var L=function(){var D,j=((D=navigator.userAgentData)===null||D===void 0?void 0:D.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=L})(zm);var wD=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),SD=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),CD=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),_D=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&SD(t,e,n);return CD(t,e),t},Qv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Rm,"__esModule",{value:!0});var Os=_D(y),ae=zm,Fe=Co,kD=["ArrowRight","ArrowUp","k","PageUp"],ED=["ArrowLeft","ArrowDown","j","PageDown"],TD=function(e){wD(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=Os.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,c=r.trackRef.current;if(!c)return console.warn("No track element found."),[];var d=c.getBoundingClientRect(),f=(0,ae.getPaddingAndBorder)(c);return r.getThumbs().map(function(v,m){var p={x:0,y:0},x=v.getBoundingClientRect(),w=(0,ae.getMargin)(v);switch(o){case Fe.Direction.Right:return p.x=(w.left+f.left)*-1,p.y=((x.height-d.height)/2+f.top)*-1,p.x+=d.width*(0,ae.relativeValue)(a[m],l,s)-x.width/2,p;case Fe.Direction.Left:return p.x=(w.right+f.right)*-1,p.y=((x.height-d.height)/2+f.top)*-1,p.x+=d.width-d.width*(0,ae.relativeValue)(a[m],l,s)-x.width/2,p;case Fe.Direction.Up:return p.x=((x.width-d.width)/2+w.left+f.left)*-1,p.y=-f.left,p.y+=d.height-d.height*(0,ae.relativeValue)(a[m],l,s)-x.height/2,p;case Fe.Direction.Down:return p.x=((x.width-d.width)/2+w.left+f.left)*-1,p.y=-f.left,p.y+=d.height*(0,ae.relativeValue)(a[m],l,s)-x.height/2,p;default:return(0,ae.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,ae.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,ae.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,ae.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,ae.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,ae.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,c=o.rtl,d=o.direction,f=r.state.isChanged,v=r.getTargetIndex(i.nativeEvent),m=c||d===Fe.Direction.Left||d===Fe.Direction.Down?-1:1;v!==-1&&(kD.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:v,isChanged:!0}),l((0,ae.replaceAt)(a,v,r.normalizeValue(a[v]+m*(i.key==="PageUp"?s*10:s),v)))):ED.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:v,isChanged:!0}),l((0,ae.replaceAt)(a,v,r.normalizeValue(a[v]-m*(i.key==="PageDown"?s*10:s),v)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){f&&r.fireOnFinalChange()}):f&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,c=r.props,d=c.direction,f=c.min,v=c.max,m=c.onChange,p=c.values,x=c.step,w=c.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var h=r.trackRef.current;if(!h)return null;var g=h.getBoundingClientRect(),b=(0,ae.isVertical)(d)?g.height:g.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],k=o-s[1],T=0;switch(d){case Fe.Direction.Right:case Fe.Direction.Left:T=S/b*(v-f);break;case Fe.Direction.Down:case Fe.Direction.Up:T=k/b*(v-f);break;default:(0,ae.assertUnreachable)(d)}if(w&&(T*=-1),Math.abs(T)>=x/2){for(var E=0;E<r.thumbRefs.length;E++){if(p[E]===v&&Math.sign(T)===1||p[E]===f&&Math.sign(T)===-1)return;var _=p[E]+T;_>v?T=v-p[E]:_<f&&(T=f-p[E])}for(var $=p.slice(0),E=0;E<r.thumbRefs.length;E++)$=(0,ae.replaceAt)($,E,r.normalizeValue(p[E]+T,E));r.setState({draggedTrackPos:[i,o]}),m($)}}else{var M=0;switch(d){case Fe.Direction.Right:M=(i-g.left)/b*(v-f)+f;break;case Fe.Direction.Left:M=(b-(i-g.left))/b*(v-f)+f;break;case Fe.Direction.Down:M=(o-g.top)/b*(v-f)+f;break;case Fe.Direction.Up:M=(b-(o-g.top))/b*(v-f)+f;break;default:(0,ae.assertUnreachable)(d)}w&&(M=v+f-M),Math.abs(p[l]-M)>=x/2&&m((0,ae.replaceAt)(p,l,r.normalizeValue(M,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,c=a.step,d=a.allowOverlap,f=a.values;return(0,ae.normalizeValue)(i,o,l,s,c,d,f)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=Os.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),c=[],d=0;d<r.numOfMarks+1;d++){var f=9999,v=9999;if(r.markRefs[d].current){var m=r.markRefs[d].current.getBoundingClientRect();f=m.height,v=m.width}r.props.direction===Fe.Direction.Left||r.props.direction===Fe.Direction.Right?c.push([Math.round(o/r.numOfMarks*d+l-v/2),-Math.round((f-a)/2)]):c.push([Math.round(a/r.numOfMarks*d+s-f/2),-Math.round((v-o)/2)])}r.setState({markOffsets:c})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,ae.schd)(r.onMouseMove),r.schdOnTouchMove=(0,ae.schd)(r.onTouchMove),r.schdOnEnd=(0,ae.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return Os.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,ae.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,ae.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,ae.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,ae.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,c=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,ae.translateThumbs)(this.getThumbs(),this.getOffsets(),c),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(d){(0,ae.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,c=s===void 0?function(){return null}:s,d=r.values,f=r.min,v=r.max,m=r.allowOverlap,p=r.disabled,x=this.state,w=x.draggedThumbIndex,h=x.thumbZIndexes,g=x.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,ae.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!p?"pointer":"inherit"},onMouseDown:p?ae.voidFn:this.onMouseDownTrack,onTouchStart:p?ae.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:p,children:Qv(Qv([],g.map(function(b,S,k){return c({props:{style:n.props.direction===Fe.Direction.Left||n.props.direction===Fe.Direction.Right?{position:"absolute",left:"".concat(b[0],"px"),marginTop:"".concat(b[1],"px")}:{position:"absolute",top:"".concat(b[0],"px"),marginLeft:"".concat(b[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),d.map(function(b,S){var k=n.state.draggedThumbIndex===S;return l({index:S,value:b,isDragged:k,props:{style:{position:"absolute",zIndex:h[S],cursor:p?"inherit":k?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:p?void 0:0,"aria-valuemax":m?v:d[S+1]||v,"aria-valuemin":m?f:d[S-1]||f,"aria-valuenow":b,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:p?ae.voidFn:n.onKeyDown,onKeyUp:p?ae.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Fe.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(Os.Component);Rm.default=TD;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Rm);e.Range=n.default;var r=zm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=Co;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Bp);const PD=C.div`
  padding: 20px 0;
`,jD=C.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Zv=C.input`
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
`;const OD=C.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,$D=C.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,U2=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,c]=y.useState([o,a]);y.useEffect(()=>{e&&e.length===2&&(c(e),t&&t(e))},[e,t]);const d=m=>{c(m),t&&t(m)},f=(m,p)=>{const x=p===""?"":Number(p),w=[...s];w[m]=x,d(w)},v=m=>{const p=[...s];m===0?((p[0]===""||p[0]<o)&&(p[0]=o),p[0]>p[1]-50&&(p[0]=p[1]-50)):((p[1]===""||p[1]>a)&&(p[1]=a),p[1]<p[0]+50&&(p[1]=p[0]+50)),d(p)};return u.jsx(u.Fragment,{children:l&&u.jsxs(PD,{children:[u.jsxs(jD,{children:[u.jsx(Zv,{type:"number",value:s[0],min:o,max:s[1],onChange:m=>f(0,m.target.value),onBlur:()=>v(0)}),u.jsx(Zv,{type:"number",value:s[1],min:s[0],max:a,onChange:m=>f(1,m.target.value),onBlur:()=>v(1)})]}),u.jsx(Bp.Range,{values:s,step:50,min:o,max:a,onChange:d,renderTrack:({props:m,children:p})=>u.jsx(OD,{...m,background:Bp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:p}),renderThumb:({props:m})=>u.jsx($D,{...m})})]})})},MD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=y.useState([]),[l,s]=y.useState({});y.useEffect(()=>{t&&(async()=>{try{const w=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],h={};w.forEach(b=>{var S;(S=b.attributes)==null||S.forEach(k=>{h[k.label]||(h[k.label]=new Set),h[k.label].add(k.value)})});const g=Object.entries(h).map(([b,S])=>({type:"checkbox",label:b,name:b.toLowerCase(),options:Array.from(S)}));a(g)}catch(p){console.error(p)}})()},[t]);const c=m=>{s(p=>({...p,[m]:!p[m]}))},d=(m,p)=>{r(x=>{const w=x[m]||[];return w.includes(p)?{...x,[m]:w.filter(h=>h!==p)}:{...x,[m]:[...w,p]}})},f=Object.values(n).some(m=>Array.isArray(m)&&m.length>0),v=()=>{f&&r({})};return u.jsxs(fD,{children:[u.jsxs(pD,{children:["Фільтри ",u.jsx(Cw,{size:20})]}),(o||[]).map(m=>{var x;const p=!!l[m.name];return u.jsxs(hD,{children:[u.jsxs(mD,{onClick:()=>c(m.name),children:[u.jsx(gD,{children:m.label}),u.jsx(vD,{isOpen:p})]}),u.jsxs(xD,{isOpen:p,children:[m.type==="checkbox"&&((x=m.options)==null?void 0:x.map(w=>{var h;return u.jsxs(yD,{children:[u.jsx(Np,{checked:((h=n[m.name])==null?void 0:h.includes(w))||!1,onChange:()=>d(m.name,w)}),u.jsx(bD,{}),w]},w)})),m.type==="range"&&u.jsx(U2,{onChange:i,childValues:e})]})]},m.name)}),u.jsx(V2,{onClick:v,disabled:!f,children:"Скинути обрані фільтри"})]})},ID=C.aside`
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
`;const DD=C.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,LD=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,AD=C.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,RD=C.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,zD=C.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,FD=C.label`
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
`,ND=C.span`
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
`,BD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=y.useState({}),[l,s]=y.useState([]);y.useEffect(()=>{t&&(async()=>{try{const p=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],x={};p.forEach(h=>{var g;(g=h.attributes)==null||g.forEach(b=>{x[b.label]||(x[b.label]=new Set),x[b.label].add(b.value)})});const w=Object.entries(x).map(([h,g])=>({type:"checkbox",label:h,name:h.toLowerCase(),options:Array.from(g)}));s(w)}catch(v){console.error(v)}})()},[t]);const c=f=>{a(v=>({...v,[f]:!v[f]}))},d=(f,v)=>{r(m=>{const p=m[f]||[];return p.includes(v)?{...m,[f]:p.filter(x=>x!==v)}:{...m,[f]:[...p,v]}})};return u.jsx(ID,{children:(l||[]).map(f=>{var m;const v=!!o[f.name];return u.jsxs(DD,{children:[u.jsxs(LD,{onClick:()=>c(f.name),children:[u.jsx(AD,{children:f.label}),u.jsx(RD,{isOpen:v})]}),u.jsxs(zD,{isOpen:v,children:[f.type==="checkbox"&&((m=f.options)==null?void 0:m.map(p=>{var x;return u.jsxs(FD,{children:[u.jsx(Vp,{checked:((x=n[f.name])==null?void 0:x.includes(p))||!1,onChange:()=>d(f.name,p)}),u.jsx(ND,{}),p]},p)})),f.type==="range"&&u.jsx(U2,{onChange:i,childValues:e})]})]},f.name)})})},VD=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:c})=>{const[d,f]=y.useState([]),[v,m]=y.useState(!0),[p,x]=y.useState(1),w=24;let h=d;console.log(d);const g=y.useRef(null);y.useEffect(()=>{const j=A=>{g.current&&!g.current.contains(A.target)&&o(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[o]),y.useEffect(()=>{(async()=>{try{m(!0);const I=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();f(I.data);const R=I.data.map(z=>z.price);if(R.length>0){let z=Math.min(...R),P=Math.max(...R);e([z,P])}}catch(A){console.error("Error fetching products:",A)}finally{m(!1)}})()},[t,e]),y.useEffect(()=>{x(1)},[t,n,r]),y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[p]);const b=yt(),S=Mt(),k=Ue(j=>j.favorites.items),T=Ue(j=>j.cart.items),E=(j,A)=>{A.stopPropagation();const I=k.some(R=>R.id===(j==null?void 0:j.id));ui(j,I,S,K)};if(Object.keys(n).forEach(j=>{const A=n[j];Array.isArray(A)&&A.length>0&&(h=h.filter(I=>{var z;const R=(z=I.attributes)==null?void 0:z.find(P=>P.label.toLowerCase()===j.toLowerCase());return R&&A.includes(R.value)}))}),r&&r.length===2){const[j,A]=r;console.log(j,A)}const _=y.useMemo(()=>{const j=[...h],A=I=>I.new_price&&I.new_price<I.price?I.new_price:I.price;switch(i){case"name":return j.sort((I,R)=>s==="asc"?I.name.localeCompare(R.name):R.name.localeCompare(I.name));case"price":return j.sort((I,R)=>{const z=A(I),P=A(R);return s==="asc"?z-P:P-z});case"date":return j.sort((I,R)=>s==="asc"?new Date(I.createdAt)-new Date(R.createdAt):new Date(R.createdAt)-new Date(I.createdAt));default:return j}},[i,h,s]),$=p*w,M=$-w,L=_.slice(M,$),D=Math.ceil(h.length/w);return v?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsxs(B4,{children:[u.jsxs(V4,{children:[u.jsx(U4,{children:t}),u.jsxs(Q4,{ref:g,children:[u.jsxs(Z4,{onClick:()=>o(j=>!j),children:["Сортування",u.jsx(Bc,{strokeWidth:.9,size:22})]}),a&&u.jsxs(J4,{children:[u.jsx(xi,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),u.jsx(xi,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),u.jsx(xi,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),u.jsx(xi,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),u.jsx(xi,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),u.jsx(xi,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(Ln,{autoClose:1500}),h.length===0?u.jsx(W4,{children:u.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):u.jsx(H4,{children:L.map(j=>{var G,W;const A=k.some(q=>q.id===j.id),I=j!=null&&j.createdAt?Date.now()-new Date(j.createdAt).getTime()<7*24*60*60*1e3:!1,R=T.find(q=>q.id===j.id),z=(j==null?void 0:j.available)??!0,P=(j==null?void 0:j.stock)===0,O=j.new_price&&j.new_price<j.price,N=O?j.new_price:j.price,B=O?Math.round((j.price-j.new_price)/j.price*100):0,F=j?T.find(q=>q.id===j.id):null,V=(F==null?void 0:F.quantity)||0,H=async(q,oe)=>{if(oe.stopPropagation(),V>=q.stock){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(V+1>q.stock){K.warning(`Доступно лише ${q.stock} шт.`);return}await yo(q,1,S,K)};return u.jsxs(G4,{onClick:()=>b(`/product/${j.slug??j.id}`),$soldOut:P,style:{cursor:"pointer"},children:[u.jsxs(Iw,{children:[I&&u.jsx(hm,{children:"Новинка"}),!z&&u.jsx(pm,{children:"Бронь"}),P&&u.jsx(Gc,{children:"Продано"}),u.jsx(q4,{src:((W=(G=j.images)==null?void 0:G[0])==null?void 0:W.url)||"/placeholder.jpg",alt:j.name,onError:q=>{q.currentTarget.onerror=null,q.currentTarget.src=ri}})]}),u.jsx(X4,{children:j.name}),u.jsxs(Y4,{children:[u.jsx(Lw,{children:u.jsxs(Aw,{children:[u.jsxs(Rw,{$discount:O,children:[N.toLocaleString()," грн"]}),O&&u.jsxs(zw,{children:[j.price.toLocaleString()," грн"]}),O&&u.jsxs(Fw,{children:["-",B,"%"]})]})}),u.jsxs(Dw,{children:[z&&!P&&u.jsx(ql,{onClick:q=>H(j,q),children:u.jsx(vo,{size:24,color:R?"var(--orange-color)":"black",strokeWidth:2})}),!P&&u.jsx(ql,{onClick:q=>E(j,q),children:u.jsx(Xa,{size:24,fill:A?"#ff4d4f":"none",color:A?"#ff4d4f":"#000000",strokeWidth:A?1:2})})]})]})]},j.id)})}),h.length>w&&u.jsxs(K4,{children:[u.jsx(Td,{onClick:()=>x(j=>Math.max(j-1,1)),disabled:p===1,children:"Назад"}),Array.from({length:D},(j,A)=>u.jsx(Td,{onClick:()=>x(A+1),active:p===A+1,children:A+1},A)),u.jsx(Td,{onClick:()=>x(j=>Math.min(j+1,D)),disabled:p===D,children:"Вперед"})]})]})},UD=()=>{const[e,t]=y.useState({}),{category:n}=Fx(),[r,i]=y.useState(!1),[o,a]=y.useState(!1),[l,s]=y.useState("date"),[c,d]=y.useState("desc"),[f,v]=y.useState([]),[m,p]=y.useState([0,0]),x=Object.values(e).some(h=>Array.isArray(h)&&h.length>0),w=()=>{x&&t({})};return u.jsxs(eD,{children:[u.jsxs(J6,{children:[u.jsxs(tD,{children:[u.jsxs(nD,{onClick:()=>i(!0),children:["Фільтр",u.jsx(rD,{children:u.jsx("use",{href:`${hn}#icon-filter`})})]}),u.jsxs(uD,{children:[u.jsxs(iD,{onClick:()=>a(h=>!h),children:["Сортування",u.jsx(Bc,{strokeWidth:.9,size:22})]}),o&&u.jsxs(dD,{children:[u.jsx(bi,{onClick:()=>{s("name"),d("asc"),a(!1)},children:"А-Я"}),u.jsx(bi,{onClick:()=>{s("name"),d("desc"),a(!1)},children:"Я-А"}),u.jsx(bi,{onClick:()=>{s("price"),d("asc"),a(!1)},children:"Ціна ↑"}),u.jsx(bi,{onClick:()=>{s("price"),d("desc"),a(!1)},children:"Ціна ↓"}),u.jsx(bi,{onClick:()=>{s("date"),d("desc"),a(!1)},children:"Спочатку новіші"}),u.jsx(bi,{onClick:()=>{s("date"),d("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(MD,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:f,priceRange:m,setPriceRange:p}),u.jsx(VD,{priceRange:m,values:f,setValues:v,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:c,setSortOrder:d}),r&&u.jsx(oD,{onClick:()=>i(!1),open:r,children:u.jsxs(aD,{onClick:h=>h.stopPropagation(),open:r,children:[u.jsxs(sD,{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(Cw,{size:20}),u.jsx("h2",{children:"Фільтри"})]}),u.jsx(kw,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),u.jsx(BD,{childValues:f,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:m,setPriceRange:p}),u.jsxs(lD,{children:[u.jsx(V2,{onClick:w,disabled:!x,children:"Скинути обрані фільтри"}),u.jsx(cD,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},Jv=C.div`
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
`,WD=C.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,HD=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,GD=C.div``,qD=C.div`
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
`;C.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const YD=C.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,XD=C.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,KD=C.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,QD=C.div``,ZD=C.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,JD=C.p`
   font-size: 17px;
  margin-bottom: 10px;
  color: #151414;
    font-family: var(--second-font);

`,eL=C.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,tL=C.div`
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

`,nL=C.span`
  color: #27ae60;
  font-size: 17px;
`,rL=C.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,iL=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,e1=C.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,oL=C.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,aL=C.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,sL=C.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,lL=C.div`
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
`,cL=C.button`
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
`;const t1=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,uL=C.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,n1=C.div`
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
`;const dL=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,r1=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,i1=C.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,Vo=C.button`
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
`,o1=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,a1=C.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,fL=C.button`
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
`,pL=C.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,W2=C.span`

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
`,hL=C.div`
  position: relative;
  display: inline-block;

  &:hover ${W2} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,H2="carousel",G2="controller",mL="navigation",gL="no-scroll",Fm="portal",vL="root",q2="toolbar",s1="zoom",qd="loading",Yd="error",Xd="complete",xL="placeholder",yL=e=>`active-slide-${e}`,bL="fullsize",Nm="flex_center",wL="no_scroll",Y2="no_scroll_padding",Bm="slide",X2="slide_wrapper",SL="slide_wrapper_interactive",Br="prev",Vr="next",l1="swipe",lo="close",K2="onPointerDown",Q2="onPointerMove",Z2="onPointerUp",J2="onPointerLeave",eC="onPointerCancel",Vm="onKeyDown",CL="onKeyUp",Um="onWheel",_L="Escape",kL="ArrowLeft",EL="ArrowRight",TL="button",Up="icon",tC="contain",c1="cover",nC="Unknown action type",rC="yarl__";function $n(...e){return e.filter(Boolean).join(" ")}function se(e){return`${rC}${e}`}function _t(e){return`--${rC}${e}`}function ns(e,t){return`${e}${t?`_${t}`:""}`}function Wm(e){return t=>ns(e,t)}function co(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function PL(e,t,n){return co(e,"{index} of {total}").replace(/\{index}/g,`${Xm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function Hm(...e){return()=>{e.forEach(t=>{t()})}}function rr(e,t,n){return()=>{const r=y.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Gm(){return typeof window<"u"}function qm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function _o(e){return e.type===void 0||e.type==="image"}function Ym(e,t){return e.imageFit===c1||e.imageFit!==tC&&t===c1}function Tu(e){return typeof e=="string"?Number.parseInt(e,10):e}function lc(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=Tu(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function jL(e,t){const n=lc(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function OL(){return(Gm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Xm(e,t){return t>0?(e%t+t)%t:0}function iC(e){return e.length>0}function oC(e,t){return e[Xm(t,e.length)]}function Wp(e,t){return iC(e)?oC(e,t):void 0}function $L(e){return _o(e)?e.src:void 0}function ML(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=y.isValidElement(n)?y.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function IL(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const DL=Number(y.version.split(".")[0])>=19;function LL(e){return{inert:DL?e:e?"":void 0}}function AL(e){e.scrollTop}const Hp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[lo]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:tC,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Ir(e,t){return{name:e,component:t}}function Ge(e,t){return{module:e,children:t}}function aC(e,t,n){return e.module.name===t?n(e):e.children?[Ge(e.module,e.children.flatMap(r=>{var i;return(i=aC(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function wi(e,t,n){return e.flatMap(r=>{var i;return(i=aC(r,t,n))!==null&&i!==void 0?i:[]})}function RL(e,t=[],n=[]){let r=e;const i=m=>{const p=[...r];for(;p.length>0;){const x=p.pop();if((x==null?void 0:x.module.name)===m)return!0;x!=null&&x.children&&p.push(...x.children)}return!1},o=(m,p)=>{if(m===""){r=[Ge(p,r)];return}r=wi(r,m,x=>[Ge(p,[x])])},a=(m,p)=>{r=wi(r,m,x=>[Ge(x.module,[Ge(p,x.children)])])},l=(m,p,x)=>{r=wi(r,m,w=>{var h;return[Ge(w.module,[...x?[Ge(p)]:[],...(h=w.children)!==null&&h!==void 0?h:[],...x?[]:[Ge(p)]])]})},s=(m,p,x)=>{r=wi(r,m,w=>[...x?[Ge(p)]:[],w,...x?[]:[Ge(p)]])},c=m=>{a(G2,m)},d=(m,p)=>{r=wi(r,m,x=>[Ge(p,x.children)])},f=m=>{r=wi(r,m,p=>p.children)},v=m=>{n.push(m)};return t.forEach(m=>{m({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:c,replace:d,remove:f,augment:v})}),{config:r,augmentation:m=>n.reduce((p,x)=>x(p),m)}}const sC=y.createContext(null),lC=rr("useA11yContext","A11yContext",sC);function zL({children:e}){const[t,n]=y.useState(!1),[r,i]=y.useState(!1),o=y.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const c=d=>f=>{var v;f.currentTarget.contains(f.relatedTarget)||n(d),(v=d?l:s)===null||v===void 0||v(f)};return{onFocus:c(!0),onBlur:c(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return y.createElement(sC.Provider,{value:o},e)}const cC=y.createContext(null),Pu=rr("useDocument","DocumentContext",cC);function FL({nodeRef:e,children:t}){const n=y.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return y.createElement(cC.Provider,{value:n},t)}const uC=y.createContext(null),ju=rr("useEvents","EventsContext",uC);function NL({children:e}){const[t]=y.useState({});y.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=y.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(c=>c!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(c=>c(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return y.createElement(uC.Provider,{value:n},e)}const dC=y.createContext(null),en=rr("useLightboxProps","LightboxPropsContext",dC);function BL({children:e,...t}){return y.createElement(dC.Provider,{value:t},e)}const fC=y.createContext(null),Dr=rr("useLightboxState","LightboxStateContext",fC),pC=y.createContext(null),VL=rr("useLightboxDispatch","LightboxDispatchContext",pC);function UL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Xm(i,n.length),a=Wp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Wp(t.slides,t.index)}:e;default:throw new Error(nC)}}function WL({slides:e,index:t,children:n}){const[r,i]=y.useReducer(UL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Wp(e,t)}),[o,a]=y.useState(e),[l,s]=y.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const c=y.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return y.createElement(pC.Provider,{value:i},y.createElement(fC.Provider,{value:c},n))}const hC=y.createContext(null),Ou=rr("useTimeouts","TimeoutsContext",hC);function HL({children:e}){const[t]=y.useState([]);y.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=y.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return y.createElement(hC.Provider,{value:n},e)}const Km=y.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:c,labels:d}=en(),f=co(d,t);return y.createElement("button",{ref:s,type:"button",title:f,"aria-label":f,className:$n(se(TL),n),onClick:o,style:{...a,...c.button},...l},i?i():y.createElement(r,{className:se(Up),style:c.icon}))});function GL(e,t){const n=r=>y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function fi(e,t){return GL(e,y.createElement("g",{fill:"currentColor"},y.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const qL=fi("Close",y.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),YL=fi("Previous",y.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),XL=fi("Next",y.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),KL=fi("Loading",y.createElement(y.Fragment,null,Array.from({length:8}).map((e,t,n)=>y.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),QL=fi("Error",y.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Mn=Gm()?y.useLayoutEffect:y.useEffect;function Qm(){const[e,t]=y.useState(!1);return y.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function ZL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(Tu);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function u1(e,t){const n=y.useRef(void 0),r=y.useRef(void 0),i=Qm();return Mn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:c,easing:d,onfinish:f}=t(n.current,e.current.getBoundingClientRect(),ZL(e.current))||{};if(s&&c){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:c,easing:d})}catch(v){console.error(v)}r.current&&(r.current.onfinish=()=>{r.current=void 0,f==null||f()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function mC(){const e=y.useRef(null),t=y.useRef(void 0),[n,r]=y.useState();return{setContainerRef:y.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=c=>parseFloat(c)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function dl(){const e=y.useRef(void 0),{setTimeout:t,clearTimeout:n}=Ou();return y.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function me(e){const t=y.useRef(e);return Mn(()=>{t.current=e}),y.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function d1(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Gp(e,t){return y.useMemo(()=>e==null&&t==null?null:n=>{d1(e,n),d1(t,n)},[e,t])}function JL(e,t=!1){const n=y.useRef(!1);Mn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=y.useCallback(()=>{n.current=!0},[]),i=y.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Zm(){const[e,t]=y.useState(!1);return Mn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function eA(){const[e]=y.useState({}),t=y.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=y.useMemo(()=>({onPointerDown:i=>t(K2,i),onPointerMove:i=>t(Q2,i),onPointerUp:i=>t(Z2,i),onPointerLeave:i=>t(J2,i),onPointerCancel:i=>t(eC,i),onKeyDown:i=>t(Vm,i),onKeyUp:i=>t(CL,i),onWheel:i=>t(Um,i)}),[t]),r=y.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function f1(e,t){const n=y.useRef(0),r=dl(),i=me((...o)=>{n.current=Date.now(),e(o)});return y.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Kd=Wm("slide"),Qd=Wm("slide_image");function cc({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:c}){var d,f,v,m,p,x,w,h;const[g,b]=y.useState(qd),{publish:S}=ju(),{setTimeout:k}=Ou(),T=y.useRef(null);y.useEffect(()=>{t===0&&S(yL(g))},[t,g,S]);const E=me(F=>{("decode"in F?F.decode():Promise.resolve()).catch(()=>{}).then(()=>{F.parentNode&&(b(Xd),k(()=>{l==null||l(F)},0))})}),_=y.useCallback(F=>{T.current=F,F!=null&&F.complete&&E(F)},[E]),$=y.useCallback(F=>{E(F.currentTarget)},[E]),M=me(()=>{b(Yd),s==null||s()}),L=Ym(e,i),D=(F,V)=>Number.isFinite(F)?F:V,j=D(Math.max(...((f=(d=e.srcSet)===null||d===void 0?void 0:d.map(F=>F.width))!==null&&f!==void 0?f:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((v=T.current)===null||v===void 0?void 0:v.naturalWidth)||0),A=D(Math.max(...((p=(m=e.srcSet)===null||m===void 0?void 0:m.map(F=>F.height))!==null&&p!==void 0?p:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((x=T.current)===null||x===void 0?void 0:x.naturalHeight)||0),I=j&&A?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${A}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},R=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((F,V)=>F.width-V.width).map(F=>`${F.src} ${F.width}w`).join(", "),z=()=>r&&!L&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=R&&r&&Gm()?`${Math.round(Math.min(z(),r.width))}px`:void 0,{style:O,className:N,...B}=(typeof o=="function"?o(e):o)||{};return y.createElement(y.Fragment,null,y.createElement("img",{ref:_,onLoad:$,onError:M,onClick:a,draggable:!1,className:$n(se(Qd()),L&&se(Qd("cover")),g!==Xd&&se(Qd("loading")),N),style:{...I,...c,...O},...B,alt:(h=e.alt)!==null&&h!==void 0?h:"",sizes:P,srcSet:R,src:e.src}),g!==Xd&&y.createElement("div",{className:se(Kd(xL))},g===qd&&(n!=null&&n.iconLoading?n.iconLoading():y.createElement(KL,{className:$n(se(Up),se(Kd(qd)))})),g===Yd&&(n!=null&&n.iconError?n.iconError():y.createElement(QL,{className:$n(se(Up),se(Kd(Yd)))}))))}const tA=y.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=y.useRef(null),{trackFocusWithin:s}=lC();return y.createElement(FL,{nodeRef:l},y.createElement("div",{ref:Gp(a,l),className:$n(se("root"),t),...s(r,i),...o},n))});var st;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(st||(st={}));function gC(e,t,n,r,i){y.useEffect(()=>i?()=>{}:Hm(e(K2,t),e(Q2,n),e(Z2,r),e(J2,r),e(eC,r)),[e,t,n,r,i])}var on;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(on||(on={}));const Zd=30;function nA({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,c,d,f,v,m,p,x,w){const h=y.useRef(0),g=y.useRef([]),b=y.useRef(void 0),S=y.useRef(0),k=y.useRef(on.NONE),T=y.useCallback(j=>{b.current===j.pointerId&&(b.current=void 0,k.current=on.NONE);const A=g.current;A.splice(0,A.length,...A.filter(I=>I.pointerId!==j.pointerId))},[]),E=y.useCallback(j=>{T(j),j.persist(),g.current.push(j)},[T]),_=y.useCallback(j=>g.current.find(({pointerId:A})=>j.pointerId===A),[]),$=me(j=>{E(j)}),M=(j,A)=>f&&j>A||d&&j<-A,L=me(j=>{const A=_(j);if(A)if(b.current===j.pointerId){const I=Date.now()-S.current,R=h.current;k.current===on.SWIPE?Math.abs(R)>.3*i||Math.abs(R)>5&&I<o?s(R,I):c(R):k.current===on.PULL&&(M(R,2*Zd)?p(R,I):x(R)),h.current=0,k.current=on.NONE}else{const{target:I}=j;t&&I instanceof HTMLElement&&I===A.target&&(I.classList.contains(se(Bm))||I.classList.contains(se(X2)))&&w()}T(j)}),D=me(j=>{const A=_(j);if(A){const I=b.current===j.pointerId;if(j.buttons===0){I&&h.current!==0?L(j):T(A);return}const R=j.clientX-A.clientX,z=j.clientY-A.clientY;if(b.current===void 0){const P=O=>{E(j),b.current=j.pointerId,S.current=Date.now(),k.current=O};Math.abs(R)>Math.abs(z)&&Math.abs(R)>Zd&&r(R)?e||(P(on.SWIPE),a()):Math.abs(z)>Math.abs(R)&&M(z,Zd)&&(P(on.PULL),v())}else I&&(k.current===on.SWIPE?(h.current=R,l(R)):k.current===on.PULL&&(h.current=z,m(z)))}});gC(n,$,D,L)}function rA({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=y.useRef(null),r=me(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return y.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function iA(e,t,n,r,i,o,a,l,s){const c=y.useRef(0),d=y.useRef(0),f=y.useRef(void 0),v=y.useRef(void 0),m=y.useRef(0),p=y.useRef(void 0),x=y.useRef(0),{setTimeout:w,clearTimeout:h}=Ou(),g=y.useCallback(()=>{f.current&&(h(f.current),f.current=void 0)},[h]),b=y.useCallback(()=>{v.current&&(h(v.current),v.current=void 0)},[h]),S=me(()=>{e!==st.SWIPE&&(c.current=0,x.current=0,g(),b())});y.useEffect(S,[e,S]);const k=me(E=>{v.current=void 0,c.current===E&&s(c.current)}),T=me(E=>{if(E.ctrlKey||Math.abs(E.deltaY)>Math.abs(E.deltaX))return;const _=$=>{m.current=$,h(p.current),p.current=$>0?w(()=>{m.current=0,p.current=void 0},300):void 0};if(e===st.NONE){if(Math.abs(E.deltaX)<=1.2*Math.abs(m.current)){_(E.deltaX);return}if(!n(-E.deltaX))return;if(d.current+=E.deltaX,g(),Math.abs(d.current)>30)d.current=0,_(0),x.current=Date.now(),o();else{const $=d.current;f.current=w(()=>{f.current=void 0,$===d.current&&(d.current=0)},i)}}else if(e===st.SWIPE){let $=c.current-E.deltaX;if($=Math.min(Math.abs($),r)*Math.sign($),c.current=$,a($),b(),Math.abs($)>.2*r){_(E.deltaX),l($,Date.now()-x.current);return}v.current=w(()=>k($),2*i)}else _(E.deltaX)});y.useEffect(()=>t(Um,T),[t,T])}const p1=Wm("container"),vC=y.createContext(null),ir=rr("useController","ControllerContext",vC);function oA({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:c,closeOnPullDown:d,preventDefaultWheelX:f,preventDefaultWheelY:v}=o,[m,p]=y.useState(),x=Dr(),w=VL(),[h,g]=y.useState(st.NONE),b=y.useRef(0),S=y.useRef(0),k=y.useRef(1),{registerSensors:T,subscribeSensors:E}=eA(),{subscribe:_,publish:$}=ju(),M=dl(),L=dl(),D=dl(),{containerRef:j,setContainerRef:A,containerRect:I}=mC(),R=Gp(rA({preventDefaultWheelX:f,preventDefaultWheelY:v}),A),z=y.useRef(null),P=Gp(z,void 0),{getOwnerDocument:O}=Pu(),N=Zm(),B=X=>(N?-1:1)*(typeof X=="number"?X:1),F=me(()=>{var X;return(X=j.current)===null||X===void 0?void 0:X.focus()}),V=me(()=>t),H=me(()=>x),G=y.useCallback(X=>$(Br,X),[$]),W=y.useCallback(X=>$(Vr,X),[$]),q=y.useCallback(()=>$(lo),[$]),oe=X=>!(r.finite&&(B(X)>0&&x.currentIndex===0||B(X)<0&&x.currentIndex===x.slides.length-1)),he=X=>{var Se;b.current=X,(Se=j.current)===null||Se===void 0||Se.style.setProperty(_t("swipe_offset"),`${Math.round(X)}px`)},ie=X=>{var Se,dt;S.current=X,k.current=(()=>{const To=(()=>d&&X>0?X:c&&X<0?-X:0)();return Math.min(Math.max(qm(1-To/60*(1-.5),2),.5),1)})(),(Se=j.current)===null||Se===void 0||Se.style.setProperty(_t("pull_offset"),`${Math.round(X)}px`),(dt=j.current)===null||dt===void 0||dt.style.setProperty(_t("pull_opacity"),`${k.current}`)},{prepareAnimation:Ie}=u1(z,(X,Se,dt)=>{if(z.current&&I)return{keyframes:[{transform:`translate(0, ${X.rect.y-Se.y+dt.y}px)`,opacity:X.opacity},{transform:"translate(0, 0)",opacity:1}],duration:X.duration,easing:i.easing.fade}}),We=(X,Se)=>{if(c||d){ie(X);let dt=0;z.current&&(dt=i.fade*(Se?2:1),Ie({rect:z.current.getBoundingClientRect(),opacity:k.current,duration:dt})),D(()=>{ie(0),g(st.NONE)},dt),g(st.ANIMATION),Se||q()}},{prepareAnimation:He,isAnimationPlaying:pi}=u1(z,(X,Se,dt)=>{var xn;if(z.current&&I&&(!((xn=x.animation)===null||xn===void 0)&&xn.duration)){const Gt=lc(r.spacing),To=(Gt.percent?Gt.percent*I.width/100:Gt.pixel)||0;return{keyframes:[{transform:`translate(${B(x.globalIndex-X.index)*(I.width+To)+X.rect.x-Se.x+dt.x}px, 0)`},{transform:"translate(0, 0)"}],duration:x.animation.duration,easing:x.animation.easing}}}),St=me(X=>{var Se,dt;const xn=X.offset||0,Gt=xn?i.swipe:(Se=i.navigation)!==null&&Se!==void 0?Se:i.swipe,To=!xn&&!pi()?i.easing.navigation:i.easing.swipe;let{direction:is}=X;const os=(dt=X.count)!==null&&dt!==void 0?dt:1;let Bu=st.ANIMATION,yn=Gt*os;if(!is){const Po=I==null?void 0:I.width,hg=X.duration||0,Uu=Po?Gt/Po*Math.abs(xn):Gt;os!==0?(hg<Uu?yn=yn/Uu*Math.max(hg,Uu/5):Po&&(yn=Gt/Po*(Po-Math.abs(xn))),is=B(xn)>0?Br:Vr):yn=Gt/2}let Vu=0;is===Br?oe(B(1))?Vu=-os:(Bu=st.NONE,yn=Gt):is===Vr&&(oe(B(-1))?Vu=os:(Bu=st.NONE,yn=Gt)),yn=Math.round(yn),L(()=>{he(0),g(st.NONE)},yn),z.current&&He({rect:z.current.getBoundingClientRect(),index:x.globalIndex}),g(Bu),$(l1,{type:"swipe",increment:Vu,duration:yn,easing:To})});y.useEffect(()=>{var X,Se;!((X=x.animation)===null||X===void 0)&&X.increment&&(!((Se=x.animation)===null||Se===void 0)&&Se.duration)&&M(()=>w({type:"swipe",increment:0}),x.animation.duration)},[x.animation,w,M]);const ko=[E,oe,(I==null?void 0:I.width)||0,i.swipe,()=>g(st.SWIPE),X=>he(X),(X,Se)=>St({offset:X,duration:Se,count:1}),X=>St({offset:X,count:0})],rs=[()=>{d&&g(st.PULL)},X=>ie(X),X=>We(X),X=>We(X,!0)];nA(o,...ko,c,d,...rs,q),iA(h,...ko);const Eo=me(()=>{o.focus&&O().querySelector(`.${se(Fm)} .${se(p1())}`)&&F()});y.useEffect(Eo,[Eo]);const pg=me(()=>{var X;(X=a.view)===null||X===void 0||X.call(a,{index:x.currentIndex})});y.useEffect(pg,[x.globalIndex,pg]),y.useEffect(()=>Hm(_(Br,X=>St({direction:Br,...X})),_(Vr,X=>St({direction:Vr,...X})),_(l1,X=>w(X))),[_,St,w]);const k_=y.useMemo(()=>({prev:G,next:W,close:q,focus:F,slideRect:I?jL(I,r.padding):{width:0,height:0},containerRect:I||{width:0,height:0},subscribeSensors:E,containerRef:j,setCarouselRef:P,toolbarWidth:m,setToolbarWidth:p}),[G,W,q,F,E,I,j,P,m,p,r.padding]);return y.useImperativeHandle(o.ref,()=>({prev:G,next:W,close:q,focus:F,getLightboxProps:V,getLightboxState:H}),[G,W,q,F,V,H]),y.createElement("div",{ref:R,className:$n(se(p1()),se(Nm)),style:{...h===st.SWIPE?{[_t("swipe_offset")]:`${Math.round(b.current)}px`}:null,...h===st.PULL?{[_t("pull_offset")]:`${Math.round(S.current)}px`,[_t("pull_opacity")]:`${k.current}`}:null,...o.touchAction!=="none"?{[_t("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...T},I&&y.createElement(vC.Provider,{value:k_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const aA=Ir(G2,oA);function Lr(e){return ns(H2,e)}function h1(e){return ns(Bm,e)}function sA({slide:e,offset:t}){const n=y.useRef(null),{currentIndex:r,slides:i}=Dr(),{slideRect:o,focus:a}=ir(),{render:l,carousel:{imageFit:s,imageProps:c},on:{click:d},styles:{slide:f},labels:v}=en(),{getOwnerDocument:m}=Pu(),p=t!==0;y.useEffect(()=>{var w;p&&(!((w=n.current)===null||w===void 0)&&w.contains(m().activeElement))&&a()},[p,a,m]);const x=()=>{var w,h,g,b;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&_o(e)&&(S=y.createElement(cc,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:c,onClick:p?void 0:()=>d==null?void 0:d({index:r})})),S?y.createElement(y.Fragment,null,(h=l.slideHeader)===null||h===void 0?void 0:h.call(l,{slide:e}),((g=l.slideContainer)!==null&&g!==void 0?g:({children:k})=>k)({slide:e,children:S}),(b=l.slideFooter)===null||b===void 0?void 0:b.call(l,{slide:e})):null};return y.createElement("div",{ref:n,className:$n(se(h1()),!p&&se(h1("current")),se(Nm)),...LL(p),style:f,role:"group","aria-roledescription":co(v,"Slide"),"aria-label":PL(v,i,r+t)},x())}function lA(){const e=en().styles.slide;return y.createElement("div",{className:se(Bm),style:e})}function cA({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Dr(),{setCarouselRef:o}=ir(),{autoPlaying:a,focusWithin:l}=lC(),s=lc(e.spacing),c=lc(e.padding),d=IL(e,n,1),f=[];if(iC(n))for(let v=r-d;v<=r+d;v+=1){const m=oC(n,v),p=i-r+v,x=e.finite&&(v<0||v>n.length-1);f.push(x?{key:p}:{key:[`${p}`,$L(m)].filter(Boolean).join("|"),offset:v-r,slide:m})}return y.createElement("div",{ref:o,className:$n(se(Lr()),f.length>0&&se(Lr("with_slides"))),style:{[`${_t(Lr("slides_count"))}`]:f.length,[`${_t(Lr("spacing_px"))}`]:s.pixel||0,[`${_t(Lr("spacing_percent"))}`]:s.percent||0,[`${_t(Lr("padding_px"))}`]:c.pixel||0,[`${_t(Lr("padding_percent"))}`]:c.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":co(t,"Carousel"),"aria-label":co(t,"Photo gallery")},f.map(({key:v,slide:m,offset:p})=>m?y.createElement(sA,{key:v,slide:m,offset:p}):y.createElement(lA,{key:v})))}const uA=Ir(H2,cA);function xC(){const{carousel:e}=en(),{slides:t,currentIndex:n}=Dr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function dA(e){var t;const n=Zm(),{publish:r}=ju(),{animation:i}=en(),{prevDisabled:o,nextDisabled:a}=xC(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=f1(()=>r(Br),l),c=f1(()=>r(Vr),l),d=me(f=>{switch(f.key){case _L:r(lo);break;case kL:(n?a:o)||(n?c:s)();break;case EL:(n?o:a)||(n?s:c)();break}});y.useEffect(()=>e(Vm,d),[e,d])}function m1({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return y.createElement(Km,{label:e,icon:t,renderIcon:n,className:se(`navigation_${r}`),disabled:o,onClick:i,style:a,...JL(ir().focus,o)})}function fA({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=ir(),{prevDisabled:s,nextDisabled:c}=xC();return dA(l),y.createElement(y.Fragment,null,e?e():y.createElement(m1,{label:"Previous",action:Br,icon:YL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():y.createElement(m1,{label:"Next",action:Vr,icon:XL,renderIcon:r,style:i.navigationNext,disabled:c,onClick:a}))}const pA=Ir(mL,fA),g1=se(wL),hA=se(Y2);function mA(e){return"style"in e}function v1(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(Tu(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function gA({noScroll:{disabled:e},children:t}){const n=Zm(),{getOwnerDocument:r,getOwnerWindow:i}=Pu();return y.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),c=Math.round(a.innerWidth-s.clientWidth);if(c>0){o.push(v1(l,c,n));const d=l.getElementsByTagName("*");for(let f=0;f<d.length;f+=1){const v=d[f];mA(v)&&a.getComputedStyle(v).getPropertyValue("position")==="fixed"&&!v.classList.contains(hA)&&o.push(v1(v,c,n))}}return l.classList.add(g1),()=>{l.classList.remove(g1),o.forEach(d=>d())}},[n,e,r,i]),y.createElement(y.Fragment,null,t)}const vA=Ir(gL,gA);function x1(e){return ns(Fm,e)}function y1(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function xA({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,c]=y.useState(!1),[d,f]=y.useState(!1),v=y.useRef([]),m=y.useRef(null),{setTimeout:p}=Ou(),{subscribe:x}=ju(),h=Qm()?0:t.fade;y.useEffect(()=>(c(!0),()=>{c(!1),f(!1)}),[]);const g=me(()=>{v.current.forEach(T=>T()),v.current=[]}),b=me(()=>{var T;f(!1),g(),(T=i.exiting)===null||T===void 0||T.call(i),p(()=>{var E;(E=i.exited)===null||E===void 0||E.call(i),a()},h)});y.useEffect(()=>x(lo,b),[x,b]);const S=me(T=>{var E,_,$;AL(T),f(!0),(E=i.entering)===null||E===void 0||E.call(i);const M=($=(_=T.parentNode)===null||_===void 0?void 0:_.children)!==null&&$!==void 0?$:[];for(let L=0;L<M.length;L+=1){const D=M[L];["TEMPLATE","SCRIPT","STYLE"].indexOf(D.tagName)===-1&&D!==T&&(v.current.push(y1(D,"inert","")),v.current.push(y1(D,"aria-hidden","true")))}v.current.push(()=>{var L,D;(D=(L=m.current)===null||L===void 0?void 0:L.focus)===null||D===void 0||D.call(L)}),p(()=>{var L;(L=i.entered)===null||L===void 0||L.call(i)},h)}),k=y.useCallback(T=>{T?S(T):g()},[S,g]);return s?Lc.createPortal(y.createElement(tA,{ref:k,className:$n(r,se(x1()),se(Y2),d&&se(x1("open"))),"aria-modal":!0,role:"dialog","aria-label":co(l,"Lightbox"),style:{...t.fade!==Hp.animation.fade?{[_t("fade_animation_duration")]:`${h}ms`}:null,...t.easing.fade!==Hp.animation.easing.fade?{[_t("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:T=>{m.current||(m.current=T.relatedTarget)}},e),o.root||document.body):null}const yA=Ir(Fm,xA);function bA({children:e}){return y.createElement(y.Fragment,null,e)}const wA=Ir(vL,bA);function SA(e){return ns(q2,e)}function CA({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=ir(),{setContainerRef:a,containerRect:l}=mC();Mn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():y.createElement(Km,{key:lo,label:"Close",icon:qL,renderIcon:n,onClick:i});return y.createElement("div",{ref:a,style:r.toolbar,className:se(SA())},e==null?void 0:e.map(c=>c===lo?s():c))}const _A=Ir(q2,CA);function yC(e,t){var n;return y.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>yC(r,t)))}function kA(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function EA({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:c,...d}){const{animation:f,carousel:v,render:m,toolbar:p,controller:x,noScroll:w,on:h,slides:g,index:b,plugins:S,...k}=Hp,{config:T,augmentation:E}=RL([Ge(yA,[Ge(vA,[Ge(aA,[Ge(uA),Ge(_A),Ge(pA)])])])],l||S),_=E({animation:kA(f,t),carousel:{...v,...e},render:{...m,...n},toolbar:{...p,...r},controller:{...x,...i},noScroll:{...w,...o},on:{...h,...a},...k,...d});return _.open?y.createElement(BL,{..._},y.createElement(WL,{slides:s||g,index:Tu(c||b)},y.createElement(HL,null,y.createElement(NL,null,y.createElement(zL,null,yC(Ge(wA,T),_)))))):null}const TA={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function PA(e){return Math.min(Math.max(e,Number.EPSILON),1)}function bC(e){const{minZoom:t,...n}={...TA,...e};return{minZoom:PA(t),...n}}function jA(e,t,n,r){const i=y.useRef(void 0),o=y.useRef(void 0),{zoom:a}=en().animation,l=Qm(),s=me(()=>{var c,d,f;if((c=i.current)===null||c===void 0||c.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(f=(d=r.current).animate)===null||f===void 0?void 0:f.call(d,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(v){console.error(v)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Mn(s,[e,t,n,s]),y.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function OA(e,t){const{on:n}=en(),r=me(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});y.useEffect(r,[e,r])}function $u(){const{zoom:e}=en();return bC(e)}function $A(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Dr(),{imageFit:l}=en().carousel,{maxZoomPixelRatio:s}=$u();if(e&&a){const d={...a,...t};if(_o(d)){const f=Ym(d,l),v=Math.max(...(((n=d.srcSet)===null||n===void 0?void 0:n.map(p=>p.width))||[]).concat(d.width?[d.width]:[])),m=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(p=>p.height))||[]).concat(d.height?[d.height]:[]));v>0&&m>0&&e.width>0&&e.height>0&&(o=f?{width:Math.round(Math.min(v,e.width/e.height*m)),height:Math.round(Math.min(m,e.height/e.width*v))}:{width:v,height:m},o={width:o.width*s,height:o.height*s},i=f?{width:Math.min(e.width,o.width,v),height:Math.min(e.height,o.height,m)}:{width:Math.round(Math.min(e.width,e.height/m*v,v)),height:Math.round(Math.min(e.height,e.width/v*m,m))})}}const c=i.width?Math.max(qm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:c}}function b1(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function w1(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function MA(e,t,n,r,i,o,a,l,s){const c=y.useRef([]),d=y.useRef(0),f=y.useRef(void 0),{globalIndex:v}=Dr(),{getOwnerWindow:m}=Pu(),{containerRef:p,subscribeSensors:x}=ir(),{keyboardMoveDistance:w,zoomInMultiplier:h,wheelZoomDistanceFactor:g,scrollToZoom:b,doubleTapDelay:S,doubleClickDelay:k,doubleClickMaxStops:T,pinchZoomDistanceFactor:E,pinchZoomV4:_}=$u(),$=y.useCallback(P=>{if(p.current){const{pageX:O,pageY:N}=P,{scrollX:B,scrollY:F}=m(),{left:V,top:H,width:G,height:W}=p.current.getBoundingClientRect();return[O-V-B-G/2,N-H-F-W/2]}return[]},[p,m]),M=me(P=>{const{key:O,metaKey:N,ctrlKey:B}=P,F=N||B,V=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const H=(G,W)=>{V(),l(G,W)};O==="ArrowDown"?H(0,w):O==="ArrowUp"?H(0,-w):O==="ArrowLeft"?H(-w,0):O==="ArrowRight"&&H(w,0)}O==="+"||F&&O==="="?(V(),i()):O==="-"||F&&O==="_"?(V(),o()):F&&O==="0"&&(V(),a(1))}),L=me(P=>{if((P.ctrlKey||b)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(w1(e,-P.deltaY,g),!0,...$(P));return}e>1&&(P.stopPropagation(),b||l(P.deltaX,P.deltaY))}),D=y.useCallback(P=>{const O=c.current;O.splice(0,O.length,...O.filter(N=>N.pointerId!==P.pointerId))},[]),j=y.useCallback(P=>{D(P),P.persist(),c.current.push(P)},[D]),A=me(P=>{var O;const N=c.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!((O=s==null?void 0:s.current)===null||O===void 0)&&O.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(N.length===0&&B-d.current<(P.pointerType==="touch"?S:k)){d.current=0;const F=e>=1?e!==n?e*Math.max(n**(1/T),h):1:e!==t?e/Math.max(t**(-1/T),h):1;a(F,!1,...$(P))}else d.current=B;if(j(P),N.length===2){const F=b1(N[0],N[1]);f.current={previousDistance:F,initialDistance:Math.max(F,1),initialZoom:e}}}),I=me(P=>{const O=c.current,N=O.find(B=>B.pointerId===P.pointerId);if(O.length===2&&f.current){P.stopPropagation(),j(P);const B=b1(O[0],O[1]),F=_?f.current.initialZoom/f.current.initialDistance*B:w1(e,B-f.current.previousDistance,E);a(F,!0,...O.map(V=>$(V)).reduce((V,H)=>H.map((G,W)=>V[W]+G/2))),f.current.previousDistance=B;return}e>1&&(P.stopPropagation(),N&&(O.length===1&&l((N.clientX-P.clientX)/e,(N.clientY-P.clientY)/e),j(P)))}),R=y.useCallback(P=>{const O=c.current;O.length===2&&O.find(N=>N.pointerId===P.pointerId)&&(f.current=void 0),D(P)},[D]),z=y.useCallback(()=>{const P=c.current;P.splice(0,P.length),d.current=0,f.current=void 0},[]);gC(x,A,I,R,r),y.useEffect(z,[v,z]),y.useEffect(()=>r?()=>{}:Hm(z,x(Vm,M),x(Um,L)),[r,x,z,M,L])}function IA(e,t,n){const[r,i]=y.useState(1),[o,a]=y.useState(0),[l,s]=y.useState(0),c=jA(r,o,l,n),{currentSlide:d,globalIndex:f}=Dr(),{containerRect:v,slideRect:m}=ir(),{minZoom:p,zoomInMultiplier:x}=$u(),w=d&&_o(d)?d.src:void 0,h=!w||!(n!=null&&n.current);Mn(()=>{i(1),a(0),s(0)},[f,w]);const g=y.useCallback((E,_,$)=>{const M=$||r,L=o-(E||0),D=l-(_||0),j=(e.width*M-m.width)/2/M,A=(e.height*M-m.height)/2/M;a(Math.min(Math.abs(L),Math.max(j,0))*Math.sign(L)),s(Math.min(Math.abs(D),Math.max(A,0))*Math.sign(D))},[r,o,l,m,e.width,e.height]),b=y.useCallback((E,_,$,M)=>{const L=qm(E+.01<t?E-.01>p?E:p:t,5);_||c(),g($?$*(1/r-1/L):0,M?M*(1/r-1/L):0,L),i(L)},[r,p,t,g,c]),S=me(()=>{r>1&&(r>t&&b(t,!0),g())});Mn(S,[v.width,v.height,S]);const k=y.useCallback(()=>{const E=r*x;b(r<1&&E>1?1:E)},[r,x,b]),T=y.useCallback(()=>{const E=r/x;b(r>1&&E<1?1:E)},[r,x,b]);return{zoom:r,offsetX:o,offsetY:l,disabled:h,changeOffsets:g,changeZoom:b,zoomIn:k,zoomOut:T}}const wC=y.createContext(null),Jm=rr("useZoom","ZoomControllerContext",wC);function DA({children:e}){const[t,n]=y.useState(),{slideRect:r}=ir(),{ref:i,minZoom:o}=$u(),{imageRect:a,maxZoom:l}=$A(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:c,offsetY:d,disabled:f,changeZoom:v,changeOffsets:m,zoomIn:p,zoomOut:x}=IA(a,l,t==null?void 0:t.zoomWrapperRef);OA(s,f),MA(s,o,l,f,p,x,v,m,t==null?void 0:t.zoomWrapperRef);const w=y.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:c,offsetY:d,disabled:f,zoomIn:p,zoomOut:x,changeZoom:v}),[s,o,l,c,d,f,p,x,v]);y.useImperativeHandle(i,()=>w,[w]);const h=y.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return y.createElement(wC.Provider,{value:h},e)}const LA=fi("ZoomIn",y.createElement(y.Fragment,null,y.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),y.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),AA=fi("ZoomOut",y.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),S1=y.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=y.useRef(!1),o=y.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:c,zoomOut:d,disabled:f}=Jm(),{render:v}=en(),m=f||(t?a>=s:a<=l);return y.useEffect(()=>{m&&i.current&&o.current&&n(),m||(i.current=!0)},[m,n]),y.createElement(Km,{ref:r,disabled:m,label:t?"Zoom in":"Zoom out",icon:t?LA:AA,renderIcon:t?v.iconZoomIn:v.iconZoomOut,onClick:t?c:d,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function RA(){const e=y.useRef(null),t=y.useRef(null),{focus:n}=ir(),r=y.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=y.useCallback(()=>r(e),[r]),o=y.useCallback(()=>r(t),[r]);return y.createElement(y.Fragment,null,y.createElement(S1,{zoomIn:!0,ref:e,onLoseFocus:o}),y.createElement(S1,{ref:t,onLoseFocus:i}))}function zA(){const{render:e}=en(),t=Jm();return e.buttonZoom?y.createElement(y.Fragment,null,e.buttonZoom(t)):y.createElement(RA,null)}function FA(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function NA({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(nC)}}function BA(e){var t,n;const[{current:r,preload:i},o]=y.useReducer(NA,{}),{slide:a,rect:l,imageFit:s,render:c,interactive:d}=e,f=a.srcSet.sort((k,T)=>k.width-T.width),v=(t=a.width)!==null&&t!==void 0?t:f[f.length-1].width,m=(n=a.height)!==null&&n!==void 0?n:f[f.length-1].height,p=Ym(a,s),x=Math.max(...f.map(k=>k.width)),w=Math.min((p?Math.max:Math.min)(l.width,v*(l.height/m)),x),h=OL(),g=me(()=>{var k;const T=(k=f.find(E=>E.width>=w*h))!==null&&k!==void 0?k:f[f.length-1];(!r||f.findIndex(E=>E.src===r)<f.findIndex(E=>E===T))&&o({type:"fetch",source:T.src})});Mn(g,[l.width,l.height,h,g]);const b=me(k=>o({type:"done",source:k})),S={WebkitTransform:d?"initial":"translateZ(0)"};return p||Object.assign(S,l.width/l.height<v/m?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),y.createElement(y.Fragment,null,i&&i!==r&&y.createElement(cc,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>b(i),render:{...c,iconLoading:()=>null,iconError:()=>null}}),r&&y.createElement(cc,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function VA({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=y.useState(),l=y.useRef(null),{zoom:s,maxZoom:c,offsetX:d,offsetY:f,setZoomWrapper:v}=Jm(),m=s>1,{carousel:p,on:x}=en(),{currentIndex:w}=Dr();Mn(()=>n===0?(v({zoomWrapperRef:l,imageDimensions:o}),()=>v(void 0)):()=>{},[n,o,v]);let h=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:c});if(!h&&_o(t)){const g={slide:t,offset:n,rect:r,render:e,imageFit:p.imageFit,imageProps:p.imageProps,onClick:n===0?()=>{var b;return(b=x.click)===null||b===void 0?void 0:b.call(x,{index:w})}:void 0};h=FA(t)?y.createElement(BA,{...g,slide:t,interactive:m,rect:n===0?{width:r.width*s,height:r.height*s}:r}):y.createElement(cc,{onLoad:b=>a({width:b.naturalWidth,height:b.naturalHeight}),...g})}return h?y.createElement("div",{ref:l,className:$n(se(bL),se(Nm),se(X2),m&&se(SL)),style:n===0?{transform:`scale(${s}) translateX(${d}px) translateY(${f}px)`}:void 0},h):null}const UA=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=bC(n);return{zoom:l,toolbar:ML(r,s1,y.createElement(zA,null)),render:{...i,slide:s=>{var c;return _o(s.slide)?y.createElement(VA,{render:i,...s}):(c=i.slide)===null||c===void 0?void 0:c.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Ir(s1,DA))};var SC={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",c="day",d="week",f="month",v="quarter",m="year",p="date",x="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(A){var I=["th","st","nd","rd"],R=A%100;return"["+A+(I[(R-20)%10]||I[R]||I[0])+"]"}},b=function(A,I,R){var z=String(A);return!z||z.length>=I?A:""+Array(I+1-z.length).join(R)+A},S={s:b,z:function(A){var I=-A.utcOffset(),R=Math.abs(I),z=Math.floor(R/60),P=R%60;return(I<=0?"+":"-")+b(z,2,"0")+":"+b(P,2,"0")},m:function A(I,R){if(I.date()<R.date())return-A(R,I);var z=12*(R.year()-I.year())+(R.month()-I.month()),P=I.clone().add(z,f),O=R-P<0,N=I.clone().add(z+(O?-1:1),f);return+(-(z+(R-P)/(O?P-N:N-P))||0)},a:function(A){return A<0?Math.ceil(A)||0:Math.floor(A)},p:function(A){return{M:f,y:m,w:d,d:c,D:p,h:s,m:l,s:a,ms:o,Q:v}[A]||String(A||"").toLowerCase().replace(/s$/,"")},u:function(A){return A===void 0}},k="en",T={};T[k]=g;var E="$isDayjsObject",_=function(A){return A instanceof D||!(!A||!A[E])},$=function A(I,R,z){var P;if(!I)return k;if(typeof I=="string"){var O=I.toLowerCase();T[O]&&(P=O),R&&(T[O]=R,P=O);var N=I.split("-");if(!P&&N.length>1)return A(N[0])}else{var B=I.name;T[B]=I,P=B}return!z&&P&&(k=P),P||!z&&k},M=function(A,I){if(_(A))return A.clone();var R=typeof I=="object"?I:{};return R.date=A,R.args=arguments,new D(R)},L=S;L.l=$,L.i=_,L.w=function(A,I){return M(A,{locale:I.$L,utc:I.$u,x:I.$x,$offset:I.$offset})};var D=function(){function A(R){this.$L=$(R.locale,null,!0),this.parse(R),this.$x=this.$x||R.x||{},this[E]=!0}var I=A.prototype;return I.parse=function(R){this.$d=function(z){var P=z.date,O=z.utc;if(P===null)return new Date(NaN);if(L.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var N=P.match(w);if(N){var B=N[2]-1||0,F=(N[7]||"0").substring(0,3);return O?new Date(Date.UTC(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,F)):new Date(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,F)}}return new Date(P)}(R),this.init()},I.init=function(){var R=this.$d;this.$y=R.getFullYear(),this.$M=R.getMonth(),this.$D=R.getDate(),this.$W=R.getDay(),this.$H=R.getHours(),this.$m=R.getMinutes(),this.$s=R.getSeconds(),this.$ms=R.getMilliseconds()},I.$utils=function(){return L},I.isValid=function(){return this.$d.toString()!==x},I.isSame=function(R,z){var P=M(R);return this.startOf(z)<=P&&P<=this.endOf(z)},I.isAfter=function(R,z){return M(R)<this.startOf(z)},I.isBefore=function(R,z){return this.endOf(z)<M(R)},I.$g=function(R,z,P){return L.u(R)?this[z]:this.set(P,R)},I.unix=function(){return Math.floor(this.valueOf()/1e3)},I.valueOf=function(){return this.$d.getTime()},I.startOf=function(R,z){var P=this,O=!!L.u(z)||z,N=L.p(R),B=function(he,ie){var Ie=L.w(P.$u?Date.UTC(P.$y,ie,he):new Date(P.$y,ie,he),P);return O?Ie:Ie.endOf(c)},F=function(he,ie){return L.w(P.toDate()[he].apply(P.toDate("s"),(O?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},V=this.$W,H=this.$M,G=this.$D,W="set"+(this.$u?"UTC":"");switch(N){case m:return O?B(1,0):B(31,11);case f:return O?B(1,H):B(0,H+1);case d:var q=this.$locale().weekStart||0,oe=(V<q?V+7:V)-q;return B(O?G-oe:G+(6-oe),H);case c:case p:return F(W+"Hours",0);case s:return F(W+"Minutes",1);case l:return F(W+"Seconds",2);case a:return F(W+"Milliseconds",3);default:return this.clone()}},I.endOf=function(R){return this.startOf(R,!1)},I.$set=function(R,z){var P,O=L.p(R),N="set"+(this.$u?"UTC":""),B=(P={},P[c]=N+"Date",P[p]=N+"Date",P[f]=N+"Month",P[m]=N+"FullYear",P[s]=N+"Hours",P[l]=N+"Minutes",P[a]=N+"Seconds",P[o]=N+"Milliseconds",P)[O],F=O===c?this.$D+(z-this.$W):z;if(O===f||O===m){var V=this.clone().set(p,1);V.$d[B](F),V.init(),this.$d=V.set(p,Math.min(this.$D,V.daysInMonth())).$d}else B&&this.$d[B](F);return this.init(),this},I.set=function(R,z){return this.clone().$set(R,z)},I.get=function(R){return this[L.p(R)]()},I.add=function(R,z){var P,O=this;R=Number(R);var N=L.p(z),B=function(H){var G=M(O);return L.w(G.date(G.date()+Math.round(H*R)),O)};if(N===f)return this.set(f,this.$M+R);if(N===m)return this.set(m,this.$y+R);if(N===c)return B(1);if(N===d)return B(7);var F=(P={},P[l]=r,P[s]=i,P[a]=n,P)[N]||1,V=this.$d.getTime()+R*F;return L.w(V,this)},I.subtract=function(R,z){return this.add(-1*R,z)},I.format=function(R){var z=this,P=this.$locale();if(!this.isValid())return P.invalidDate||x;var O=R||"YYYY-MM-DDTHH:mm:ssZ",N=L.z(this),B=this.$H,F=this.$m,V=this.$M,H=P.weekdays,G=P.months,W=P.meridiem,q=function(ie,Ie,We,He){return ie&&(ie[Ie]||ie(z,O))||We[Ie].slice(0,He)},oe=function(ie){return L.s(B%12||12,ie,"0")},he=W||function(ie,Ie,We){var He=ie<12?"AM":"PM";return We?He.toLowerCase():He};return O.replace(h,function(ie,Ie){return Ie||function(We){switch(We){case"YY":return String(z.$y).slice(-2);case"YYYY":return L.s(z.$y,4,"0");case"M":return V+1;case"MM":return L.s(V+1,2,"0");case"MMM":return q(P.monthsShort,V,G,3);case"MMMM":return q(G,V);case"D":return z.$D;case"DD":return L.s(z.$D,2,"0");case"d":return String(z.$W);case"dd":return q(P.weekdaysMin,z.$W,H,2);case"ddd":return q(P.weekdaysShort,z.$W,H,3);case"dddd":return H[z.$W];case"H":return String(B);case"HH":return L.s(B,2,"0");case"h":return oe(1);case"hh":return oe(2);case"a":return he(B,F,!0);case"A":return he(B,F,!1);case"m":return String(F);case"mm":return L.s(F,2,"0");case"s":return String(z.$s);case"ss":return L.s(z.$s,2,"0");case"SSS":return L.s(z.$ms,3,"0");case"Z":return N}return null}(ie)||N.replace(":","")})},I.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},I.diff=function(R,z,P){var O,N=this,B=L.p(z),F=M(R),V=(F.utcOffset()-this.utcOffset())*r,H=this-F,G=function(){return L.m(N,F)};switch(B){case m:O=G()/12;break;case f:O=G();break;case v:O=G()/3;break;case d:O=(H-V)/6048e5;break;case c:O=(H-V)/864e5;break;case s:O=H/i;break;case l:O=H/r;break;case a:O=H/n;break;default:O=H}return P?O:L.a(O)},I.daysInMonth=function(){return this.endOf(f).$D},I.$locale=function(){return T[this.$L]},I.locale=function(R,z){if(!R)return this.$L;var P=this.clone(),O=$(R,z,!0);return O&&(P.$L=O),P},I.clone=function(){return L.w(this.$d,this)},I.toDate=function(){return new Date(this.valueOf())},I.toJSON=function(){return this.isValid()?this.toISOString():null},I.toISOString=function(){return this.$d.toISOString()},I.toString=function(){return this.$d.toUTCString()},A}(),j=D.prototype;return M.prototype=j,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",c],["$M",f],["$y",m],["$D",p]].forEach(function(A){j[A[1]]=function(I){return this.$g(I,A[0],A[1])}}),M.extend=function(A,I){return A.$i||(A(I,D,M),A.$i=!0),M},M.locale=$,M.isDayjs=_,M.unix=function(A){return M(1e3*A)},M.en=T[k],M.Ls=T,M.p={},M})})(SC);var WA=SC.exports;const C1=Ba(WA),HA=C.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;C.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const GA=C.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,qA=C.input`
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
`,YA=C.textarea`
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
`,XA=C.button`
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
`,KA=C.div`
  margin-top: 30px;
`,QA=C.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,ZA=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,JA=C.span`
  font-weight: bold;
  color: #333;
`,eR=C.span`
  font-size: 12px;
  color: #999;
`,tR=C.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,nR=C.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,rR=C.div`
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
`,_1=({productId:e,questions:t})=>{const[n,r]=y.useState(""),[i,o]=y.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(K.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return u.jsxs(HA,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(GA,{onSubmit:a,children:[u.jsx(qA,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),u.jsx(YA,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),u.jsx(XA,{children:"Надіслати запитання"})]}),u.jsx(KA,{children:t&&t.length>0?t.map(l=>l.answer?u.jsxs(QA,{children:[u.jsxs(ZA,{children:[u.jsx(JA,{children:l.userName||"Гість"}),u.jsx(eR,{children:new Date(l.createdAt).toLocaleDateString()})]}),u.jsx(tR,{children:l.question}),u.jsxs(nR,{children:[u.jsx(rR,{children:"Адміністратор"}),u.jsx("p",{children:l.answer})]})]},l.id):null):u.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},iR=()=>{var P;const{identifier:e}=Fx(),[t,n]=y.useState([]),[r,i]=y.useState(1),[o,a]=y.useState("description"),[l,s]=y.useState(null),[c,d]=y.useState(!1),[f,v]=y.useState(0),[m,p]=y.useState(!0),x=!isNaN(e),w=t.find(O=>x?String(O.id)===String(e):O.slug===e),h=w?C1().diff(C1(w.createdAt),"day")<7:!1,b=(O=>{const[N,B]=y.useState(!1);return y.useEffect(()=>{const F=window.matchMedia(O),V=()=>B(F.matches);return V(),F.addEventListener("change",V),()=>F.removeEventListener("change",V)},[O]),N})("(min-width: 768px)"),S=Ue(O=>O.cart.items),k=w?S.find(O=>O.id===w.id):null,T=(k==null?void 0:k.quantity)||0;y.useEffect(()=>{(async()=>{try{p(!0);const N=x?`filters[id][$eq]=${e}`:`filters[slug][$eq]=${e}`,F=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${N}&populate=*`)).json();n(F.data)}catch(N){console.error("Error fetching products:",N)}finally{p(!1)}})()},[e,x]);const E=(w==null?void 0:w.available)??!0,_=(w==null?void 0:w.stock)===0;y.useEffect(()=>{var O,N;w&&w.images&&s((N=(O=w.images)==null?void 0:O[0])==null?void 0:N.url)},[w]);const $=((w==null?void 0:w.images)??[]).map(O=>({src:O.url})),M=()=>{const O=w.images.findIndex(N=>N.url===l);v(O>=0?O:0),d(!0)},L=Mt(),j=Ue(O=>O.favorites.items).some(O=>O.id===(w==null?void 0:w.id)),A=async()=>{if(!_){if(T>=w.stock){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(T+r>w.stock){K.warning(`Доступно лише ${w.stock} шт.`);return}await yo(w,r,L,K)}},I=(O,N)=>{N.stopPropagation(),ui(O,j,L,K)},R=(w==null?void 0:w.new_price)&&(w==null?void 0:w.new_price)<w.price,z=R?Math.round((w.price-w.new_price)/w.price*100):0;return m?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):w?u.jsxs(Jv,{children:[" ",u.jsx(Ln,{autoClose:1500}),u.jsxs(WD,{children:[u.jsx(Te,{to:"/",children:"Головна"})," / ",u.jsx(Te,{to:"/catalog",children:"Каталог"})," /"," ",w.name]}),u.jsxs(HD,{children:[u.jsxs(GD,{children:[u.jsxs("div",{style:{position:"relative"},children:[u.jsx(YD,{src:l,alt:w.name,onClick:_?void 0:M,style:{filter:_?"grayscale(100%)":"none",opacity:_?.55:1,cursor:_?"default":"pointer"}}),_&&u.jsx(qD,{children:"ПРОДАНО"})]}),u.jsx(XD,{children:(w.images??[]).map(O=>{const N=O.url;return u.jsx(KD,{src:N,onClick:()=>!_&&s(N),style:{cursor:_?"default":"pointer",opacity:l===N?1:.4,filter:_?"grayscale(100%)":"none"}},O.id)})})]}),u.jsx(EA,{open:c,close:()=>d(!1),index:f,slides:$,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var N,B;v(O),(B=(N=w==null?void 0:w.images)==null?void 0:N[O])!=null&&B.url&&s(w.images[O].url)}},plugins:[UA],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),u.jsxs(QD,{children:[u.jsx(ZD,{children:w.name}),u.jsxs(JD,{children:["Артикул: ",w.sku??""]}),u.jsx(eL,{children:h&&u.jsx(nL,{children:"● Новий товар"})}),!E&&u.jsx(tL,{children:"Бронь"}),u.jsxs(rL,{children:[u.jsx(iL,{children:R?u.jsxs(u.Fragment,{children:[u.jsxs(e1,{$discount:!0,children:[w.new_price.toLocaleString()," грн"]}),u.jsxs(oL,{children:[w.price.toLocaleString()," грн"]}),u.jsxs(aL,{children:["-",z,"%"]})]}):u.jsxs(e1,{children:[w.price.toLocaleString()," грн"]})}),u.jsxs(sL,{children:[u.jsxs(lL,{children:[u.jsx("button",{onClick:()=>i(Math.max(1,r-1)),disabled:_,children:"-"}),u.jsx("span",{children:r}),u.jsxs(hL,{$active:r>=w.stock,children:[u.jsx("button",{onClick:()=>i(Math.min(w.stock,r+1)),disabled:_||r>=w.stock,children:"+"}),u.jsxs(W2,{children:["Максимум: ",w.stock]})]})]}),u.jsxs(cL,{onClick:A,disabled:!E||_,children:[" ",u.jsx(vo,{size:25}),u.jsx("span",{children:"В КОШИК"})]}),u.jsxs(fL,{$active:j,onClick:O=>{_||I(w,O)},disabled:_,children:[u.jsxs(pL,{$active:j,children:[" ",u.jsx("use",{href:`${hn}#icon-heart`})]}),u.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!b&&u.jsxs(r1,{children:[u.jsxs(i1,{children:[u.jsx(Vo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(Vo,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),u.jsx(Vo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs(o1,{children:[o==="description"&&u.jsx(a1,{children:w.description}),o==="attributes"&&u.jsx(t1,{children:(P=w.attributes)!=null&&P.length?w.attributes.map(O=>u.jsxs(n1,{children:[u.jsx("span",{children:O.label}),u.jsx("b",{children:O.value})]},O.id)):u.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&u.jsx(_1,{productId:w.documentId,questions:w.questions})]})]}),b&&u.jsxs(dL,{children:[u.jsxs(r1,{children:[u.jsxs(i1,{children:[u.jsx(Vo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(Vo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs(o1,{children:[o==="description"&&u.jsx(a1,{children:w.description}),o==="FAQ"&&u.jsx(_1,{productId:w.documentId,questions:w.questions})]})]}),u.jsxs(t1,{children:[u.jsx(uL,{children:" Характеристики"}),(()=>{const O=[...w.attributes||[],...w.features||[]];return O.length?O.map((N,B)=>u.jsxs(n1,{children:[u.jsx("span",{children:N.label}),u.jsx("b",{children:N.value})]},`${N.id}-${B}`)):u.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):u.jsx(Jv,{children:"Товар не знайдено"})},oR=C.div`
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

  
`,aR=C.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,sR=C.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,lR=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width:  895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,cR=C.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,uR=C.div`
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
  
`,dR=C.div`
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
 `,fR=C.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,pR=C.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,hR=C.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,mR=C.div`

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
`;const Mu=C.div`
  text-align: center;
  width: 100px;
 
`,Iu=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Du=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Lu=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Au=C.span`
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
`,gR=C.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,vR=C.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';


&:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
`,xR=C.div`

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
`,yR=C.div`
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
`,bR=C(Te)`
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
`,wR=C.button`
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
`;const SR=C.div`
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
`,CR=C.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,_R=C.div`
  background-color: #fdfaf7;
`,kR=C.div`
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
`;const ER=C.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,TR=C.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,PR=C.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,jR=C.button`
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
`,OR=()=>u.jsx(_R,{children:u.jsxs(SR,{children:[u.jsx(CR,{children:"Головна / Кошик"}),u.jsxs(kR,{children:[u.jsx(ER,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),u.jsx(TR,{children:"Ваш кошик порожній"}),u.jsx(PR,{children:"Ви ще не додали жодного товару в кошик"}),u.jsx(jR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),$R=C.div`
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
`,MR=({item:e,cartItem:t,user:n,token:r,disabled:i,isSoldOut:o})=>{const a=Mt(),l=async()=>{if(i)return;const c=e.quantity+1;if(!n){a(pv({id:e.id,stock:e.stock}));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(pv({id:e.id,stock:e.stock}))}catch(d){console.error("Помилка оновлення кількості:",d)}},s=async()=>{if(i)return;const c=e.quantity-1;if(!n){a(hv(e.id));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(hv(e.id))}catch(d){console.error("Помилка оновлення кількості:",d)}};return u.jsxs($R,{children:[u.jsx("button",{onClick:s,disabled:o||e.quantity<=1,children:"-"}),u.jsx("span",{children:e.quantity}),u.jsx("button",{onClick:l,disabled:o||e.quantity>=e.stock,children:"+"})]})},IR=async(e,t,n)=>{try{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!r.ok)throw new Error("Не вдалося отримати товари кошика");const i=await r.json();await Promise.all(i.data.map(async o=>{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}})).ok)throw new Error("Не вдалося видалити товар з кошика")})),t(xo())}catch(r){throw console.error("clearCartFromBackend error:",r),r}},DR=C.div`
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
`,LR=C.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,AR=C.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,RR=C.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,zR=C.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,FR=C.div`
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
`,CC=C.div`
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
`;const NR=C.div`
  position: relative;
`,BR=C.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,VR=C.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,UR=C.div`
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
`;const WR=C.div`
  display: flex;
  gap: 16px;
`,k1=C.button`
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
`,HR=C.div`
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
`,GR=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,qR=C.button`
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
`;const YR=async(e,t,n,r)=>{try{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${t}&filters[product][id][$eq]=${e.id}`,{headers:{Authorization:`Bearer ${r}`}});if(!i.ok)throw new Error("Не вдалося знайти товар у кошику");const a=(await i.json()).data[0];if(!a)throw new Error("Товар у кошику не знайдено");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${a.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити товар");n(iS(e))}catch(i){throw console.error("deleteCartItemFromBackend error:",i),i}},XR=()=>{const e=Mt(),t=yt(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),[i,o]=y.useState([]),a=Ue(S=>S.cart.items),[l,s]=y.useState([]),[c,d]=y.useState([]);console.log("cartItems",c);const[f,v]=y.useState(!0);console.log("localCartItems",l);const m=a.filter(S=>S.available!==!1&&S.stock>0).reduce((S,k)=>S+k.quantity,0),p=a.filter(S=>S.available!==!1&&S.stock>0).reduce((S,k)=>S+(k.new_price??k.price)*(k.quantity||1),0),x=Ue(S=>S.favorites.items),w=l.length===0;y.useEffect(()=>{(async()=>{if(!n||!r){s(a),v(!1);return}try{const k=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(!k.ok)throw new Error("Не вдалося отримати кошик");const T=await k.json();d(T.data);const E=T.data.map(_=>_.product?{..._.product,quantity:_.quantity}:null).filter(Boolean);s(E),e(rS(E))}catch(k){console.error(k),K.error("Не вдалося завантажити кошик"),s(a)}finally{v(!1)}})()},[]),y.useEffect(()=>{s(a)},[a]);const h=(S,k)=>{k.stopPropagation();const T=x.some(E=>E.id===(S==null?void 0:S.id));ui(S,T,e,K)},g=async S=>{o(k=>[...k,S.id]);try{if(!r){setTimeout(()=>{e(iS(S)),o(k=>k.filter(T=>T!==S.id))},300);return}await YR(S,r.id,e,n),setTimeout(()=>{o(k=>k.filter(T=>T!==S.id))},300)}catch{o(T=>T.filter(E=>E!==S.id)),K.error("Не вдалося видалити товар з кошика")}},b=async()=>{if(!r){e(xo()),s([]);return}try{await IR(r.id,e,n),s([])}catch{K.error("Не вдалося очистити кошик")}};return f?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:w?u.jsx(OR,{}):u.jsxs(oR,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(aR,{children:[" ",u.jsx(Te,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",u.jsx(Te,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),u.jsx(sR,{children:"Кошик"}),u.jsxs(lR,{children:[u.jsx(cR,{children:l.map((S,k)=>{var j,A;const T=c.find(I=>{var R;return((R=I.product)==null?void 0:R.documentId)===S.documentId}),E=x.some(I=>I.id===S.id),_=S.new_price&&S.new_price<S.price,$=(S==null?void 0:S.available)??!0,M=(S==null?void 0:S.stock)===0,L=_?S.new_price:S.price,D=_?Math.round((S.price-S.new_price)/S.price*100):0;return u.jsxs(uR,{className:`
    ${i.includes(S.id)?"removing":""}
    ${$?"":"unavailable"}
    ${M?"sold-out":""}
  `,children:[u.jsxs(Iw,{onClick:()=>t(`/product/${S.slug??S.id}`),children:[!$&&u.jsx(CC,{children:"Бронь"})," ",M&&u.jsx(dR,{children:"Продано"}),u.jsx(fR,{src:((A=(j=S.images)==null?void 0:j[0])==null?void 0:A.url)||"/nofoto.png",alt:S.name,style:{filter:M?"grayscale(100%)":"none",opacity:M?.55:1},onError:I=>{I.currentTarget.onerror=null,I.currentTarget.src=ri}})]}),u.jsx(pR,{onClick:()=>t(`/product/${S.slug??S.id}`),children:u.jsx("h3",{children:S.name})}),u.jsxs(hR,{children:[u.jsx(MR,{item:S,cartItem:T,user:r,token:n,disabled:M,isSoldOut:M}),u.jsx(Mu,{children:u.jsxs(Iu,{children:[u.jsxs(Du,{$discount:_,children:[(L*(S.quantity||1)).toLocaleString()," ","грн"]}),_&&u.jsxs(u.Fragment,{children:[u.jsxs(Lu,{children:[(S.price*(S.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(Au,{children:["-",D,"%"]})]})]})})]}),u.jsxs(mR,{children:[u.jsx(vR,{onClick:I=>{M||h(S,I)},disabled:M,style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:u.jsx(Xa,{size:22,fill:E?"#ff4d4f":"none",color:E?"#ff4d4f":"#999"})}),u.jsx(gR,{onClick:()=>g(S),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:u.jsx(_w,{size:22})})]})]},`${S.id}-${k}`)})}),u.jsxs(xR,{children:[u.jsxs(yR,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[m," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[p," грн"]})]}),u.jsx(bR,{to:"/checkout",onClick:S=>{m===0&&(S.preventDefault(),K.warning("У кошику немає доступних товарів"))},children:"Оформити замовлення"}),u.jsx(wR,{onClick:b,children:"Oчистити кошик"})]})]})]})})},KR=C.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,QR=C.div`
   
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
`;const ZR=C.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;C.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const JR=C.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,e8=C.button`
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
`,t8=()=>u.jsxs(u.Fragment,{children:[u.jsx(KR,{children:"Головна / Обране"}),u.jsxs(QR,{children:[u.jsx(ZR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),u.jsx(JR,{children:"Ви ще не додали жодного товару в обране"}),u.jsx(e8,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),n8=()=>{const e=Mt(),t=yt(),n=Ue(p=>p.favorites.items),[r,i]=y.useState([]),[o,a]=y.useState(!0),[l,s]=y.useState([]),c=Ue(p=>p.cart.items);y.useEffect(()=>{(async()=>{const x=localStorage.getItem("token"),w=JSON.parse(localStorage.getItem("user"));if(!x||!w){i(n),a(!1);return}try{const h=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${w.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${x}`}});if(!h.ok)throw new Error("Не вдалося отримати обране");const b=(await h.json()).data.map(S=>S.product).filter(Boolean);i(b)}catch(h){console.error(h),K.error("Не вдалося завантажити обране"),i(n)}finally{a(!1)}})()},[]);const d=()=>{const p=r.filter(x=>x.available!==!1).map(x=>{const w=c.find(S=>S.id===x.id),h=(w==null?void 0:w.quantity)??0,b=Number(x.stock??0)-h;return b<=0?null:{...x,quantity:b}}).filter(Boolean);if(p.length===0){K.error("Усі товари вже в максимальній кількості");return}e(H$(p)),K.success("Додано максимально доступну кількість товарів")},f=r.reduce((p,x)=>p+(x.new_price??x.price)*(x.quantity||1),0),v=async(p,x)=>{x.stopPropagation();const w=r.some(g=>g.documentId===p.documentId);s(g=>[...g,p.id]),await ui(p,w,e,K)&&w?setTimeout(()=>{i(g=>g.filter(b=>b.documentId!==p.documentId)),s(g=>g.filter(b=>b!==p.id))},300):s(g=>g.filter(b=>b!==p.id))},m=r.length===0;return o?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:m?u.jsx(t8,{}):u.jsxs(DR,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(LR,{children:[" ",u.jsx(Te,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",u.jsx(Te,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),u.jsx(AR,{children:"Обране"}),u.jsxs(RR,{children:[u.jsx(zR,{children:r.map(p=>{var S,k;const x=p.new_price&&p.new_price<p.price,w=x?p.new_price:p.price,h=(p==null?void 0:p.available)??!0,g=x?Math.round((p.price-p.new_price)/p.price*100):0,b=async T=>{const E=c.find($=>$.id===T.id);if((E?E.quantity:0)>=T.stock){K.error(`Вибачте, доступно лише ${T.stock} шт.`);return}await yo(T,1,e,K)};return u.jsxs(FR,{className:l.includes(p.id)?"removing":"",children:[u.jsxs(NR,{onClick:()=>t(`/product/${p.slug??p.id}`),children:[" ",!h&&u.jsx(CC,{children:"Бронь"}),u.jsx(BR,{src:((k=(S=p.images)==null?void 0:S[0])==null?void 0:k.url)||ri,alt:p.name,onError:T=>{T.currentTarget.onerror=null}})]}),u.jsx(VR,{onClick:()=>t(`/product/${p.slug??p.id}`),children:p.name}),u.jsxs(UR,{children:[u.jsx(Mu,{children:u.jsxs(Iu,{children:[u.jsxs(Du,{$discount:x,children:[(w*(p.quantity||1)).toLocaleString()," ","грн"]}),x&&u.jsxs(u.Fragment,{children:[u.jsxs(Lu,{children:[(p.price*(p.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(Au,{children:["-",g,"%"]})]})]})}),u.jsxs(WR,{children:[u.jsx(k1,{onClick:()=>b(p),disabled:!h,children:u.jsx(vo,{size:30})}),u.jsx(k1,{onClick:T=>v(p,T),children:u.jsx(_w,{size:30})})]})]})]},p.id)})}),u.jsxs(HR,{children:[u.jsxs(GR,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[r.length," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[f," грн"]})]}),u.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),u.jsx(qR,{onClick:()=>d(),children:"Додати все до кошика"})]})]})]})})},r8=C.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,i8=C.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,o8=C.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,a8=C.h1`
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
`;const s8=({title:e,children:t,breadcrumbPath:n})=>u.jsxs(r8,{children:[u.jsxs(i8,{children:["Головна / ",n]}),u.jsxs(o8,{children:[u.jsx(a8,{children:e}),t]})]}),E1=C.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,T1=C.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,P1=C.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,j1=C.ul`
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
`,l8=()=>u.jsxs(s8,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[u.jsxs(E1,{children:[u.jsx(T1,{children:"Способи доставки"}),u.jsx(P1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),u.jsxs(j1,{children:[u.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),u.jsx("li",{children:"Самовивіз з нашого магазину"}),u.jsx("li",{children:"Укрпошта"})]})]}),u.jsxs(E1,{children:[u.jsx(T1,{children:"Варіанти оплати"}),u.jsx(P1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),u.jsxs(j1,{children:[u.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),u.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),u.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ai(e){"@babel/helpers - typeof";return ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ai(e)}function c8(e,t){if(ai(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ai(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _C(e){var t=c8(e,"string");return ai(t)==="symbol"?t:String(t)}function Zo(e,t,n){return t=_C(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?O1(Object(n),!0).forEach(function(r){Zo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function u8(e){if(Array.isArray(e))return e}function d8(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){c=!0,i=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}function qp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function kC(e,t){if(e){if(typeof e=="string")return qp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qp(e,t)}}function f8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yn(e,t){return u8(e)||d8(e,t)||kC(e,t)||f8()}function p8(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function or(e,t){if(e==null)return{};var n=p8(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var h8=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function m8(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,c=e.onChange,d=e.onInputChange,f=e.onMenuClose,v=e.onMenuOpen,m=e.value,p=or(e,h8),x=y.useState(l!==void 0?l:n),w=Yn(x,2),h=w[0],g=w[1],b=y.useState(s!==void 0?s:i),S=Yn(b,2),k=S[0],T=S[1],E=y.useState(m!==void 0?m:a),_=Yn(E,2),$=_[0],M=_[1],L=y.useCallback(function(P,O){typeof c=="function"&&c(P,O),M(P)},[c]),D=y.useCallback(function(P,O){var N;typeof d=="function"&&(N=d(P,O)),g(N!==void 0?N:P)},[d]),j=y.useCallback(function(){typeof v=="function"&&v(),T(!0)},[v]),A=y.useCallback(function(){typeof f=="function"&&f(),T(!1)},[f]),I=l!==void 0?l:h,R=s!==void 0?s:k,z=m!==void 0?m:$;return J(J({},p),{},{inputValue:I,menuIsOpen:R,onChange:L,onInputChange:D,onMenuClose:A,onMenuOpen:j,value:z})}function g8(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_C(r.key),r)}}function v8(e,t,n){return t&&$1(e.prototype,t),n&&$1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Yp(e,t){return Yp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Yp(e,t)}function x8(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yp(e,t)}function uc(e){return uc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},uc(e)}function y8(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b8(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w8(e,t){if(t&&(ai(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return b8(e)}function S8(e){var t=y8();return function(){var r=uc(e),i;if(t){var o=uc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return w8(this,i)}}function C8(e){if(Array.isArray(e))return qp(e)}function _8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function k8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eg(e){return C8(e)||_8(e)||kC(e)||k8()}function E8(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const T8=Math.min,P8=Math.max,dc=Math.round,$s=Math.floor,fc=e=>({x:e,y:e});function j8(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Ru(){return typeof window<"u"}function EC(e){return PC(e)?(e.nodeName||"").toLowerCase():"#document"}function mn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function TC(e){var t;return(t=(PC(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function PC(e){return Ru()?e instanceof Node||e instanceof mn(e).Node:!1}function Xp(e){return Ru()?e instanceof Element||e instanceof mn(e).Element:!1}function tg(e){return Ru()?e instanceof HTMLElement||e instanceof mn(e).HTMLElement:!1}function M1(e){return!Ru()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof mn(e).ShadowRoot}function jC(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ng(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Jd;function O8(){return Jd==null&&(Jd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Jd}function $8(e){return/^(html|body|#document)$/.test(EC(e))}function ng(e){return mn(e).getComputedStyle(e)}function M8(e){if(EC(e)==="html")return e;const t=e.assignedSlot||e.parentNode||M1(e)&&e.host||TC(e);return M1(t)?t.host:t}function OC(e){const t=M8(e);return $8(t)?e.ownerDocument?e.ownerDocument.body:e.body:tg(t)&&jC(t)?t:OC(t)}function pc(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=OC(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=mn(i);if(o){const l=Kp(a);return t.concat(a,a.visualViewport||[],jC(i)?i:[],l&&n?pc(l):[])}else return t.concat(i,pc(i,[],n))}function Kp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function I8(e){const t=ng(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=tg(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=dc(n)!==o||dc(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function rg(e){return Xp(e)?e:e.contextElement}function ef(e){const t=rg(e);if(!tg(t))return fc(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=I8(t);let a=(o?dc(n.width):n.width)/r,l=(o?dc(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const D8=fc(0);function L8(e){const t=mn(e);return!O8()||!t.visualViewport?D8:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function A8(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==mn(e)?!1:t}function I1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=rg(e);let a=fc(1);t&&(r?Xp(r)&&(a=ef(r)):a=ef(e));const l=A8(o,n,r)?L8(o):fc(0);let s=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,d=i.width/a.x,f=i.height/a.y;if(o){const v=mn(o),m=r&&Xp(r)?mn(r):r;let p=v,x=Kp(p);for(;x&&r&&m!==p;){const w=ef(x),h=x.getBoundingClientRect(),g=ng(x),b=h.left+(x.clientLeft+parseFloat(g.paddingLeft))*w.x,S=h.top+(x.clientTop+parseFloat(g.paddingTop))*w.y;s*=w.x,c*=w.y,d*=w.x,f*=w.y,s+=b,c+=S,p=mn(x),x=Kp(p)}}return j8({width:d,height:f,x:s,y:c})}function $C(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function R8(e,t){let n=null,r;const i=TC(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const c=e.getBoundingClientRect(),{left:d,top:f,width:v,height:m}=c;if(l||t(),!v||!m)return;const p=$s(f),x=$s(i.clientWidth-(d+v)),w=$s(i.clientHeight-(f+m)),h=$s(d),b={rootMargin:-p+"px "+-x+"px "+-w+"px "+-h+"px",threshold:P8(0,T8(1,s))||1};let S=!0;function k(T){const E=T[0].intersectionRatio;if(E!==s){if(!S)return a();E?a(!1,E):r=setTimeout(()=>{a(!1,1e-7)},1e3)}E===1&&!$C(c,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(k,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(k,b)}n.observe(e)}return a(!0),o}function z8(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=rg(e),d=i||o?[...c?pc(c):[],...t?pc(t):[]]:[];d.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const f=c&&l?R8(c,n):null;let v=-1,m=null;a&&(m=new ResizeObserver(h=>{let[g]=h;g&&g.target===c&&m&&t&&(m.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var b;(b=m)==null||b.observe(t)})),n()}),c&&!s&&m.observe(c),t&&m.observe(t));let p,x=s?I1(e):null;s&&w();function w(){const h=I1(e);x&&!$C(x,h)&&n(),x=h,p=requestAnimationFrame(w)}return n(),()=>{var h;d.forEach(g=>{i&&g.removeEventListener("scroll",n),o&&g.removeEventListener("resize",n)}),f==null||f(),(h=m)==null||h.disconnect(),m=null,s&&cancelAnimationFrame(p)}}var Qp=y.useLayoutEffect,F8=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],hc=function(){};function N8(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function B8(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(N8(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var D1=function(t){return K8(t)?t.filter(Boolean):ai(t)==="object"&&t!==null?[t]:[]},MC=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=or(t,F8);return J({},n)},Oe=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function zu(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function V8(e){return zu(e)?window.innerHeight:e.clientHeight}function IC(e){return zu(e)?window.pageYOffset:e.scrollTop}function mc(e,t){if(zu(e)){window.scrollTo(0,t);return}e.scrollTop=t}function U8(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function W8(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ms(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:hc,i=IC(e),o=t-i,a=10,l=0;function s(){l+=a;var c=W8(l,i,o,n);mc(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function L1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?mc(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&mc(e,Math.max(t.offsetTop-i,0))}function H8(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function A1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function G8(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var DC=!1,q8={get passive(){return DC=!0}},Is=typeof window<"u"?window:{};Is.addEventListener&&Is.removeEventListener&&(Is.addEventListener("p",hc,q8),Is.removeEventListener("p",hc,!1));var Y8=DC;function X8(e){return e!=null}function K8(e){return Array.isArray(e)}function Ds(e,t,n){return e?t:n}var Q8=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Yn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Yn(l,2),c=s[0],d=s[1];return a[c]=d,a},{})},Z8=["children","innerProps"],J8=["children","innerProps"];function ez(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=U8(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var d=s.getBoundingClientRect(),f=d.height,v=n.getBoundingClientRect(),m=v.bottom,p=v.height,x=v.top,w=n.offsetParent.getBoundingClientRect(),h=w.top,g=a?window.innerHeight:V8(s),b=IC(s),S=parseInt(getComputedStyle(n).marginBottom,10),k=parseInt(getComputedStyle(n).marginTop,10),T=h-k,E=g-x,_=T+b,$=f-b-x,M=m-g+b+S,L=b+x-k,D=160;switch(i){case"auto":case"bottom":if(E>=p)return{placement:"bottom",maxHeight:t};if($>=p&&!a)return o&&Ms(s,M,D),{placement:"bottom",maxHeight:t};if(!a&&$>=r||a&&E>=r){o&&Ms(s,M,D);var j=a?E-S:$-S;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var A=t,I=a?T:_;return I>=r&&(A=Math.min(I-S-l,t)),{placement:"top",maxHeight:A}}if(i==="bottom")return o&&mc(s,M),{placement:"bottom",maxHeight:t};break;case"top":if(T>=p)return{placement:"top",maxHeight:t};if(_>=p&&!a)return o&&Ms(s,L,D),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&T>=r){var R=t;return(!a&&_>=r||a&&T>=r)&&(R=a?T-k:_-k),o&&Ms(s,L,D),{placement:"top",maxHeight:R}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function tz(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var LC=function(t){return t==="auto"?"bottom":t},nz=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return J((r={label:"menu"},Zo(r,tz(i),"100%"),Zo(r,"position","absolute"),Zo(r,"width","100%"),Zo(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},AC=y.createContext(null),rz=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,c=y.useContext(AC)||{},d=c.setPortalPlacement,f=y.useRef(null),v=y.useState(i),m=Yn(v,2),p=m[0],x=m[1],w=y.useState(null),h=Yn(w,2),g=h[0],b=h[1],S=s.spacing.controlHeight;return Qp(function(){var k=f.current;if(k){var T=a==="fixed",E=l&&!T,_=ez({maxHeight:i,menuEl:k,minHeight:r,placement:o,shouldScroll:E,isFixedPosition:T,controlHeight:S});x(_.maxHeight),b(_.placement),d==null||d(_.placement)}},[i,o,a,l,r,d,S]),n({ref:f,placerProps:J(J({},t),{},{placement:g||LC(o),maxHeight:p})})},iz=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Z("div",ee({},Oe(t,"menu",{menu:!0}),{ref:r},i),n)},oz=iz,az=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return J({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},sz=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Z("div",ee({},Oe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},RC=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return J({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},lz=RC,cz=RC,uz=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=or(t,Z8);return Z("div",ee({},Oe(J(J({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},dz=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=or(t,J8);return Z("div",ee({},Oe(J(J({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},fz=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},pz=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=y.useRef(null),c=y.useRef(null),d=y.useState(LC(a)),f=Yn(d,2),v=f[0],m=f[1],p=y.useMemo(function(){return{setPortalPlacement:m}},[]),x=y.useState(null),w=Yn(x,2),h=w[0],g=w[1],b=y.useCallback(function(){if(i){var E=H8(i),_=l==="fixed"?0:window.pageYOffset,$=E[v]+_;($!==(h==null?void 0:h.offset)||E.left!==(h==null?void 0:h.rect.left)||E.width!==(h==null?void 0:h.rect.width))&&g({offset:$,rect:E})}},[i,l,v,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Qp(function(){b()},[b]);var S=y.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=z8(i,s.current,b,{elementResize:"ResizeObserver"in window}))},[i,b]);Qp(function(){S()},[S]);var k=y.useCallback(function(E){s.current=E,S()},[S]);if(!n&&l!=="fixed"||!h)return null;var T=Z("div",ee({ref:k},Oe(J(J({},t),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Z(AC.Provider,{value:p},n?Lc.createPortal(T,n):T)},hz=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},mz=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Z("div",ee({},Oe(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},gz=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return J({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},vz=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Z("div",ee({},Oe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},xz=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},yz=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Oe(t,"indicatorsContainer",{indicators:!0}),r),n)},R1,bz=["size"],wz=["innerProps","isRtl","size"],Sz={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},zC=function(t){var n=t.size,r=or(t,bz);return Z("svg",ee({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Sz},r))},ig=function(t){return Z(zC,ee({size:20},t),Z("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},FC=function(t){return Z(zC,ee({size:20},t),Z("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},NC=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return J({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},Cz=NC,_z=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Oe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Z(FC,null))},kz=NC,Ez=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Oe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Z(ig,null))},Tz=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return J({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},Pz=function(t){var n=t.innerProps;return Z("span",ee({},n,Oe(t,"indicatorSeparator",{"indicator-separator":!0})))},jz=H5(R1||(R1=E8([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Oz=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return J({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},tf=function(t){var n=t.delay,r=t.offset;return Z("span",{css:jm({animation:"".concat(jz," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},$z=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=or(t,wz);return Z("div",ee({},Oe(J(J({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Z(tf,{delay:0,offset:r}),Z(tf,{delay:160,offset:!0}),Z(tf,{delay:320,offset:!r}))},Mz=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return J({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},Iz=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Z("div",ee({ref:o},Oe(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},Dz=Iz,Lz=["data"],Az=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Rz=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,d=t.theme,f=t.selectProps;return Z("div",ee({},Oe(t,"group",{group:!0}),s),Z(a,ee({},l,{selectProps:f,theme:d,getStyles:i,getClassNames:o,cx:r}),c),Z("div",null,n))},zz=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return J({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},Fz=function(t){var n=MC(t);n.data;var r=or(n,Lz);return Z("div",ee({},Oe(t,"groupHeading",{"group-heading":!0}),r))},Nz=Rz,Bz=["innerRef","isDisabled","isHidden","inputClassName"],Vz=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return J(J({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},Uz),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},BC={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Uz={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":J({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},BC)},Wz=function(t){return J({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},BC)},Hz=function(t){var n=t.cx,r=t.value,i=MC(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,c=or(i,Bz);return Z("div",ee({},Oe(t,"input",{"input-container":!0}),{"data-value":r||""}),Z("input",ee({className:n({input:!0},s),ref:o,style:Wz(l),disabled:a},c)))},Gz=Hz,qz=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return J({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},Yz=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return J({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Xz=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return J({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},VC=function(t){var n=t.children,r=t.innerProps;return Z("div",r,n)},Kz=VC,Qz=VC;function Zz(e){var t=e.children,n=e.innerProps;return Z("div",ee({role:"button"},n),t||Z(ig,{size:14}))}var Jz=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,c=r.Container,d=r.Label,f=r.Remove;return Z(c,{data:i,innerProps:J(J({},Oe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Z(d,{data:i,innerProps:J({},Oe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Z(f,{data:i,innerProps:J(J({},Oe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},eF=Jz,tF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return J({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},nF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Z("div",ee({},Oe(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},rF=nF,iF=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return J({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},oF=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Oe(t,"placeholder",{placeholder:!0}),r),n)},aF=oF,sF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return J({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},lF=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Z("div",ee({},Oe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},cF=lF,uF={ClearIndicator:Ez,Control:Dz,DropdownIndicator:_z,DownChevron:FC,CrossIcon:ig,Group:Nz,GroupHeading:Fz,IndicatorsContainer:yz,IndicatorSeparator:Pz,Input:Gz,LoadingIndicator:$z,Menu:oz,MenuList:sz,MenuPortal:pz,LoadingMessage:dz,NoOptionsMessage:uz,MultiValue:eF,MultiValueContainer:Kz,MultiValueLabel:Qz,MultiValueRemove:Zz,Option:rF,Placeholder:aF,SelectContainer:mz,SingleValue:cF,ValueContainer:vz},dF=function(t){return J(J({},uF),t.components)},z1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function fF(e,t){return!!(e===t||z1(e)&&z1(t))}function pF(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!fF(e[n],t[n]))return!1;return!0}function hF(e,t){t===void 0&&(t=pF);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var mF={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},gF=function(t){return Z("span",ee({css:mF},t))},F1=gF,vF={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,c=t.isSelected,d=t.isAppleDevice,f=function(x,w){return x&&x.length?"".concat(x.indexOf(w)+1," of ").concat(x.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(f(l,r),".");if(n==="menu"&&d){var v=s?" disabled":"",m="".concat(c?" selected":"").concat(v);return"".concat(a).concat(m,", ").concat(f(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},xF=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=t.id,d=t.isAppleDevice,f=s.ariaLiveMessages,v=s.getOptionLabel,m=s.inputValue,p=s.isMulti,x=s.isOptionDisabled,w=s.isSearchable,h=s.menuIsOpen,g=s.options,b=s.screenReaderStatus,S=s.tabSelectsValue,k=s.isLoading,T=s["aria-label"],E=s["aria-live"],_=y.useMemo(function(){return J(J({},vF),f||{})},[f]),$=y.useMemo(function(){var I="";if(n&&_.onChange){var R=n.option,z=n.options,P=n.removedValue,O=n.removedValues,N=n.value,B=function(oe){return Array.isArray(oe)?null:oe},F=P||R||B(N),V=F?v(F):"",H=z||O||void 0,G=H?H.map(v):[],W=J({isDisabled:F&&x(F,l),label:V,labels:G},n);I=_.onChange(W)}return I},[n,_,x,l,v]),M=y.useMemo(function(){var I="",R=r||i,z=!!(r&&l&&l.includes(r));if(R&&_.onFocus){var P={focused:R,label:v(R),isDisabled:x(R,l),isSelected:z,options:o,context:R===r?"menu":"value",selectValue:l,isAppleDevice:d};I=_.onFocus(P)}return I},[r,i,v,x,_,o,l,d]),L=y.useMemo(function(){var I="";if(h&&g.length&&!k&&_.onFilter){var R=b({count:o.length});I=_.onFilter({inputValue:m,resultsMessage:R})}return I},[o,m,h,_,g,b,k]),D=(n==null?void 0:n.action)==="initial-input-focus",j=y.useMemo(function(){var I="";if(_.guidance){var R=i?"value":h?"menu":"input";I=_.guidance({"aria-label":T,context:R,isDisabled:r&&x(r,l),isMulti:p,isSearchable:w,tabSelectsValue:S,isInitialFocus:D})}return I},[T,r,i,p,x,w,h,_,l,S,D]),A=Z(y.Fragment,null,Z("span",{id:"aria-selection"},$),Z("span",{id:"aria-focused"},M),Z("span",{id:"aria-results"},L),Z("span",{id:"aria-guidance"},j));return Z(y.Fragment,null,Z(F1,{id:c},D&&A),Z(F1,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!D&&A))},yF=xF,Zp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],bF=new RegExp("["+Zp.map(function(e){return e.letters}).join("")+"]","g"),UC={};for(var nf=0;nf<Zp.length;nf++)for(var rf=Zp[nf],of=0;of<rf.letters.length;of++)UC[rf.letters[of]]=rf.base;var WC=function(t){return t.replace(bF,function(n){return UC[n]})},wF=hF(WC),N1=function(t){return t.replace(/^\s+|\s+$/g,"")},SF=function(t){return"".concat(t.label," ").concat(t.value)},CF=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=J({ignoreCase:!0,ignoreAccents:!0,stringify:SF,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,c=i.matchFrom,d=s?N1(r):r,f=s?N1(l(n)):l(n);return o&&(d=d.toLowerCase(),f=f.toLowerCase()),a&&(d=wF(d),f=WC(f)),c==="start"?f.substr(0,d.length)===d:f.indexOf(d)>-1}},_F=["innerRef"];function kF(e){var t=e.innerRef,n=or(e,_F),r=Q8(n,"onExited","in","enter","exit","appear");return Z("input",ee({ref:t},r,{css:jm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var EF=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function TF(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=y.useRef(!1),l=y.useRef(!1),s=y.useRef(0),c=y.useRef(null),d=y.useCallback(function(w,h){if(c.current!==null){var g=c.current,b=g.scrollTop,S=g.scrollHeight,k=g.clientHeight,T=c.current,E=h>0,_=S-k-b,$=!1;_>h&&a.current&&(r&&r(w),a.current=!1),E&&l.current&&(o&&o(w),l.current=!1),E&&h>_?(n&&!a.current&&n(w),T.scrollTop=S,$=!0,a.current=!0):!E&&-h>b&&(i&&!l.current&&i(w),T.scrollTop=0,$=!0,l.current=!0),$&&EF(w)}},[n,r,i,o]),f=y.useCallback(function(w){d(w,w.deltaY)},[d]),v=y.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),m=y.useCallback(function(w){var h=s.current-w.changedTouches[0].clientY;d(w,h)},[d]),p=y.useCallback(function(w){if(w){var h=Y8?{passive:!1}:!1;w.addEventListener("wheel",f,h),w.addEventListener("touchstart",v,h),w.addEventListener("touchmove",m,h)}},[m,v,f]),x=y.useCallback(function(w){w&&(w.removeEventListener("wheel",f,!1),w.removeEventListener("touchstart",v,!1),w.removeEventListener("touchmove",m,!1))},[m,v,f]);return y.useEffect(function(){if(t){var w=c.current;return p(w),function(){x(w)}}},[t,p,x]),function(w){c.current=w}}var B1=["boxSizing","height","overflow","paddingRight","position"],V1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function U1(e){e.cancelable&&e.preventDefault()}function W1(e){e.stopPropagation()}function H1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function G1(){return"ontouchstart"in window||navigator.maxTouchPoints}var q1=!!(typeof window<"u"&&window.document&&window.document.createElement),Uo=0,Si={capture:!1,passive:!1};function PF(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=y.useRef({}),o=y.useRef(null),a=y.useCallback(function(s){if(q1){var c=document.body,d=c&&c.style;if(r&&B1.forEach(function(p){var x=d&&d[p];i.current[p]=x}),r&&Uo<1){var f=parseInt(i.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,m=window.innerWidth-v+f||0;Object.keys(V1).forEach(function(p){var x=V1[p];d&&(d[p]=x)}),d&&(d.paddingRight="".concat(m,"px"))}c&&G1()&&(c.addEventListener("touchmove",U1,Si),s&&(s.addEventListener("touchstart",H1,Si),s.addEventListener("touchmove",W1,Si))),Uo+=1}},[r]),l=y.useCallback(function(s){if(q1){var c=document.body,d=c&&c.style;Uo=Math.max(Uo-1,0),r&&Uo<1&&B1.forEach(function(f){var v=i.current[f];d&&(d[f]=v)}),c&&G1()&&(c.removeEventListener("touchmove",U1,Si),s&&(s.removeEventListener("touchstart",H1,Si),s.removeEventListener("touchmove",W1,Si)))}},[r]);return y.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var jF=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},OF={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function $F(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=TF({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=PF({isEnabled:n}),f=function(m){c(m),d(m)};return Z(y.Fragment,null,n&&Z("div",{onClick:jF,css:OF}),t(f))}var MF={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},IF=function(t){var n=t.name,r=t.onFocus;return Z("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:MF,value:"",onChange:function(){}})},DF=IF;function og(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function LF(){return og(/^iPhone/i)}function HC(){return og(/^Mac/i)}function AF(){return og(/^iPad/i)||HC()&&navigator.maxTouchPoints>1}function RF(){return LF()||AF()}function zF(){return HC()||RF()}var FF=function(t){return t.label},NF=function(t){return t.label},BF=function(t){return t.value},VF=function(t){return!!t.isDisabled},UF={clearIndicator:kz,container:hz,control:Mz,dropdownIndicator:Cz,group:Az,groupHeading:zz,indicatorsContainer:xz,indicatorSeparator:Tz,input:Vz,loadingIndicator:Oz,loadingMessage:cz,menu:nz,menuList:az,menuPortal:fz,multiValue:qz,multiValueLabel:Yz,multiValueRemove:Xz,noOptionsMessage:lz,option:tF,placeholder:iF,singleValue:sF,valueContainer:gz},WF={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},HF=4,GC=4,GF=38,qF=GC*2,YF={baseUnit:GC,controlHeight:GF,menuGutter:qF},af={borderRadius:HF,colors:WF,spacing:YF},XF={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:A1(),captureMenuScroll:!A1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:CF(),formatGroupLabel:FF,getOptionLabel:NF,getOptionValue:BF,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:VF,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!G8(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Y1(e,t,n,r){var i=XC(e,t,n),o=KC(e,t,n),a=YC(e,t),l=gc(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function fl(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return Y1(e,a,t,l)}).filter(function(a){return K1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Y1(e,n,t,r);return K1(e,o)?o:void 0}).filter(X8)}function qC(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,eg(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function X1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,eg(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function KF(e,t){return qC(fl(e,t))}function K1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!ZC(e)||!o)&&QC(e,{label:a,value:l,data:i},r)}function QF(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function ZF(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var sf=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},YC=function(t,n){return t.getOptionLabel(n)},gc=function(t,n){return t.getOptionValue(n)};function XC(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function KC(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=gc(e,t);return n.some(function(i){return gc(e,i)===r})}function QC(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var ZC=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},JF=1,JC=function(e){x8(n,e);var t=S8(n);function n(r){var i;if(g8(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var d=i.props,f=d.onChange,v=d.name;c.name=v,i.ariaOnChange(s,c),f(s,c)},i.setValue=function(s,c,d){var f=i.props,v=f.closeMenuOnSelect,m=f.isMulti,p=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:p}),v&&(i.setState({inputIsHiddenAfterUpdate:!m}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:d})},i.selectOption=function(s){var c=i.props,d=c.blurInputOnSelect,f=c.isMulti,v=c.name,m=i.state.selectValue,p=f&&i.isOptionSelected(s,m),x=i.isOptionDisabled(s,m);if(p){var w=i.getOptionValue(s);i.setValue(m.filter(function(h){return i.getOptionValue(h)!==w}),"deselect-option",s)}else if(!x)f?i.setValue([].concat(eg(m),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:v});return}d&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,d=i.state.selectValue,f=i.getOptionValue(s),v=d.filter(function(p){return i.getOptionValue(p)!==f}),m=Ds(c,v,v[0]||null);i.onChange(m,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Ds(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,d=c[c.length-1],f=c.slice(0,c.length-1),v=Ds(s,f,f[0]||null);d&&i.onChange(v,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(s){return sf(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return X1(fl(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return B8.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return YC(i.props,s)},i.getOptionValue=function(s){return gc(i.props,s)},i.getStyles=function(s,c){var d=i.props.unstyled,f=UF[s](c,d);f.boxSizing="border-box";var v=i.props.styles[s];return v?v(f,c):f},i.getClassNames=function(s,c){var d,f;return(d=(f=i.props.classNames)[s])===null||d===void 0?void 0:d.call(f,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return dF(i.props)},i.buildCategorizedOptions=function(){return fl(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return qC(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:J({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,d=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&zu(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,d=c&&c.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,d=c&&c.item(0);if(d){var f=Math.abs(d.clientX-i.initialTouchX),v=Math.abs(d.clientY-i.initialTouchY),m=5;i.userIsDragging=f>m||v>m}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,d=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),d=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:d>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return ZC(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,d=c.isMulti,f=c.backspaceRemovesValue,v=c.escapeClearsValue,m=c.inputValue,p=c.isClearable,x=c.isDisabled,w=c.menuIsOpen,h=c.onKeyDown,g=c.tabSelectsValue,b=c.openMenuOnFocus,S=i.state,k=S.focusedOption,T=S.focusedValue,E=S.selectValue;if(!x&&!(typeof h=="function"&&(h(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||m)return;i.focusValue("previous");break;case"ArrowRight":if(!d||m)return;i.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(T)i.removeValue(T);else{if(!f)return;d?i.popValue():p&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!g||!k||b&&i.isOptionSelected(k,E))return;i.selectOption(k);break;case"Enter":if(s.keyCode===229)break;if(w){if(!k||i.isComposing)return;i.selectOption(k);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:m}),i.onMenuClose()):p&&v&&i.clearValue();break;case" ":if(m)return;if(!w){i.openMenu("first");break}if(!k)return;i.selectOption(k);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++JF),i.state.selectValue=D1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=sf(o,a[l])}return i}return v8(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&L1(this.menuListRef,this.focusedOptionRef),zF()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(L1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),d=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(l[0]);f>-1&&(d=f)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[d],focusedOptionId:this.getFocusedOptionId(c[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,d=-1;if(a.length){switch(i){case"previous":s===0?d=0:s===-1?d=c:d=s-1;break;case"next":s>-1&&s<c&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,c=l.indexOf(a);a||(c=-1),i==="up"?s=c>0?c-1:l.length-1:i==="down"?s=(c+1)%l.length:i==="pageup"?(s=c-o,s<0&&(s=0)):i==="pagedown"?(s=c+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(af):J(J({},af),this.props.theme):af}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,c=this.selectOption,d=this.setValue,f=this.props,v=f.isMulti,m=f.isRtl,p=f.options,x=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:x,isMulti:v,isRtl:m,options:p,selectOption:c,selectProps:f,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return XC(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return KC(this.props,i,o)}},{key:"filterOption",value:function(i,o){return QC(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,c=i.tabIndex,d=i.form,f=i.menuIsOpen,v=i.required,m=this.getComponents(),p=m.Input,x=this.state,w=x.inputIsHidden,h=x.ariaSelection,g=this.commonProps,b=l||this.getElementId("input"),S=J(J(J({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?y.createElement(p,ee({},g,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:b,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:d,type:"text",value:s},S)):y.createElement(kF,ee({id:b,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:hc,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:d,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,c=o.MultiValueRemove,d=o.SingleValue,f=o.Placeholder,v=this.commonProps,m=this.props,p=m.controlShouldRenderValue,x=m.isDisabled,w=m.isMulti,h=m.inputValue,g=m.placeholder,b=this.state,S=b.selectValue,k=b.focusedValue,T=b.isFocused;if(!this.hasValue()||!p)return h?null:y.createElement(f,ee({},v,{key:"placeholder",isDisabled:x,isFocused:T,innerProps:{id:this.getElementId("placeholder")}}),g);if(w)return S.map(function(_,$){var M=_===k,L="".concat(i.getOptionLabel(_),"-").concat(i.getOptionValue(_));return y.createElement(a,ee({},v,{components:{Container:l,Label:s,Remove:c},isFocused:M,isDisabled:x,key:L,index:$,removeProps:{onClick:function(){return i.removeValue(_)},onTouchEnd:function(){return i.removeValue(_)},onMouseDown:function(j){j.preventDefault()}},data:_}),i.formatOptionLabel(_,"value"))});if(h)return null;var E=S[0];return y.createElement(d,ee({},v,{data:E,isDisabled:x}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return y.createElement(o,ee({},a,{innerProps:f,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!o||!c)return null;var f={"aria-hidden":"true"};return y.createElement(o,ee({},a,{innerProps:f,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return y.createElement(a,ee({},l,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return y.createElement(o,ee({},a,{innerProps:c,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,c=o.MenuList,d=o.MenuPortal,f=o.LoadingMessage,v=o.NoOptionsMessage,m=o.Option,p=this.commonProps,x=this.state.focusedOption,w=this.props,h=w.captureMenuScroll,g=w.inputValue,b=w.isLoading,S=w.loadingMessage,k=w.minMenuHeight,T=w.maxMenuHeight,E=w.menuIsOpen,_=w.menuPlacement,$=w.menuPosition,M=w.menuPortalTarget,L=w.menuShouldBlockScroll,D=w.menuShouldScrollIntoView,j=w.noOptionsMessage,A=w.onMenuScrollToTop,I=w.onMenuScrollToBottom;if(!E)return null;var R=function(V,H){var G=V.type,W=V.data,q=V.isDisabled,oe=V.isSelected,he=V.label,ie=V.value,Ie=x===W,We=q?void 0:function(){return i.onOptionHover(W)},He=q?void 0:function(){return i.selectOption(W)},pi="".concat(i.getElementId("option"),"-").concat(H),St={id:pi,onClick:He,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:oe};return y.createElement(m,ee({},p,{innerProps:St,data:W,isDisabled:q,isSelected:oe,key:pi,label:he,type:G,value:ie,isFocused:Ie,innerRef:Ie?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(V.data,"menu"))},z;if(this.hasOptions())z=this.getCategorizedOptions().map(function(F){if(F.type==="group"){var V=F.data,H=F.options,G=F.index,W="".concat(i.getElementId("group"),"-").concat(G),q="".concat(W,"-heading");return y.createElement(a,ee({},p,{key:W,data:V,options:H,Heading:l,headingProps:{id:q,data:F.data},label:i.formatGroupLabel(F.data)}),F.options.map(function(oe){return R(oe,"".concat(G,"-").concat(oe.index))}))}else if(F.type==="option")return R(F,"".concat(F.index))});else if(b){var P=S({inputValue:g});if(P===null)return null;z=y.createElement(f,p,P)}else{var O=j({inputValue:g});if(O===null)return null;z=y.createElement(v,p,O)}var N={minMenuHeight:k,maxMenuHeight:T,menuPlacement:_,menuPosition:$,menuShouldScrollIntoView:D},B=y.createElement(rz,ee({},p,N),function(F){var V=F.ref,H=F.placerProps,G=H.placement,W=H.maxHeight;return y.createElement(s,ee({},p,N,{innerRef:V,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:b,placement:G}),y.createElement($F,{captureEnabled:h,onTopArrive:A,onBottomArrive:I,lockEnabled:L},function(q){return y.createElement(c,ee({},p,{innerRef:function(he){i.getMenuListRef(he),q(he)},innerProps:{role:"listbox","aria-multiselectable":p.isMulti,id:i.getElementId("listbox")},isLoading:b,maxHeight:W,focusedOption:x}),z)}))});return M||$==="fixed"?y.createElement(d,ee({},p,{appendTo:M,controlElement:this.controlRef,menuPlacement:_,menuPosition:$}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,c=o.name,d=o.required,f=this.state.selectValue;if(d&&!this.hasValue()&&!l)return y.createElement(DF,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(s)if(a){var v=f.map(function(x){return i.getOptionValue(x)}).join(a);return y.createElement("input",{name:c,type:"hidden",value:v})}else{var m=f.length>0?f.map(function(x,w){return y.createElement("input",{key:"i-".concat(w),name:c,type:"hidden",value:i.getOptionValue(x)})}):y.createElement("input",{name:c,type:"hidden",value:""});return y.createElement("div",null,m)}else{var p=f[0]?this.getOptionValue(f[0]):"";return y.createElement("input",{name:c,type:"hidden",value:p})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,c=o.isFocused,d=o.selectValue,f=this.getFocusableOptions();return y.createElement(yF,ee({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:d,focusableOptions:f,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,c=this.props,d=c.className,f=c.id,v=c.isDisabled,m=c.menuIsOpen,p=this.state.isFocused,x=this.commonProps=this.getCommonProps();return y.createElement(l,ee({},x,{className:d,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:p}),this.renderLiveRegion(),y.createElement(o,ee({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:p,menuIsOpen:m}),y.createElement(s,ee({},x,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),y.createElement(a,ee({},x,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,d=o.isFocused,f=o.prevWasFocused,v=o.instancePrefix,m=i.options,p=i.value,x=i.menuIsOpen,w=i.inputValue,h=i.isMulti,g=D1(p),b={};if(a&&(p!==a.value||m!==a.options||x!==a.menuIsOpen||w!==a.inputValue)){var S=x?KF(i,g):[],k=x?X1(fl(i,g),"".concat(v,"-option")):[],T=l?QF(o,g):null,E=ZF(o,S),_=sf(k,E);b={selectValue:g,focusedOption:E,focusedOptionId:_,focusableOptionsWithIds:k,focusedValue:T,clearFocusValueOnUpdate:!1}}var $=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},M=c,L=d&&f;return d&&!L&&(M={value:Ds(h,g,g[0]||null),options:g,action:"initial-input-focus"},L=!f),(c==null?void 0:c.action)==="initial-input-focus"&&(M=null),J(J(J({},b),$),{},{prevProps:i,ariaSelection:M,prevWasFocused:L})}}]),n}(y.Component);JC.defaultProps=XF;var eN=y.forwardRef(function(e,t){var n=m8(e);return y.createElement(JC,ee({ref:t},n))}),Fu=eN;const tN=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,nN=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,rN=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>u.jsxs(tN,{children:[u.jsx(nN,{children:"Місто"}),u.jsx(Fu,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),iN=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,oN=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,aN=({options:e=[],value:t,onChange:n,selectedCity:r})=>u.jsxs(iN,{children:[u.jsx(oN,{children:"Спосіб доставки"}),u.jsx(Fu,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),Q1=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Z1=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,sN=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?u.jsxs(Q1,{children:[u.jsx(Z1,{children:"Відділення Нової пошти"}),u.jsx(Fu,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?u.jsxs(Q1,{children:[u.jsx(Z1,{children:"Адреса доставки (Укрпошта)"}),u.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,lN=C.div`
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
`;const cN=C.button`
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
`,uN=C.ul`
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
`,dN=C.li`
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
`,fN=C.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,pN=C.div`
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
`,hN=C.div`
  text-align: center;
  width: 100px;
 
`,mN=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,gN=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,vN=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,xN=C.span`
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
`,yN=C.div`
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
`;const bN=C.div`
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,wN=C.div`
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
`;const SN=C.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 18px 2px 28px;

  font-size: 16px;
     color: var(--black-color);
`,CN=C.input`
  width: 20px;
  height: 20px;

  accent-color: #5b4637;
  cursor: pointer;

  flex-shrink: 0;
`,_N=C.label`
  font-size: 16px;
  line-height: 1.4;

      color: var(--black-color);
  cursor: pointer;
`,kN=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i,noCall:o,setNoCall:a})=>(console.log(n,t),u.jsxs(lN,{children:[u.jsx("h3",{children:"Ваше замовлення"}),u.jsx(uN,{children:e.map((l,s)=>{var m,p;const c=l.new_price&&l.new_price<l.price,d=c?l.new_price:l.price,f=c?Math.round((l.price-l.new_price)/l.price*100):0,v=l.available!==!1?d*(l.quantity||1):0;return u.jsxs(dN,{children:[u.jsx(fN,{src:((p=(m=l.images)==null?void 0:m[0])==null?void 0:p.url)||ri,alt:l.name}),u.jsxs(pN,{children:[u.jsx("p",{className:"item-name",children:l.name}),u.jsxs("p",{className:"item-details",children:[l.quantity," шт. × ",l.price," грн"]})]}),u.jsx(hN,{children:u.jsxs(mN,{children:[u.jsxs(gN,{$discount:c,children:[v.toLocaleString()," грн"]}),c&&u.jsxs(u.Fragment,{children:[u.jsxs(vN,{children:[(l.price*(l.quantity||1)).toLocaleString()," грн"]}),u.jsxs(xN,{children:["-",f,"%"]})]})]})})]},`${l.id}-${s}`)})}),u.jsxs("div",{className:"summary-row",children:[u.jsxs("span",{children:["Товари (",n,")"]}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs("div",{className:"summary-row",children:[u.jsx("span",{children:"Доставка"}),u.jsx("span",{children:"За тарифами перевізника"})]}),u.jsx("hr",{}),u.jsxs("div",{className:"total",children:[u.jsx("span",{children:"Всього до сплати:"}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs(SN,{children:[u.jsx(CN,{type:"checkbox",id:"noCall",checked:o,onChange:l=>a(l.target.checked)}),u.jsx(_N,{htmlFor:"noCall",children:"Не потребує підтвердження дзвінком"})]}),u.jsx(cN,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&u.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]}));var e_={exports:{}};function EN(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var lf=EN(y),TN=Lc;function PN(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Jp(){return(Jp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function jN(e,t){e.prototype=Object.create(t.prototype),PN(e.prototype.constructor=e,t)}function ON(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function Ci(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var $N=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return c[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},J1=$N;function ex(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function MN(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var IN={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},DN="_";function tx(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=DN),n==null&&(n=IN),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Vt(e,t){return e.permanents.indexOf(t)!==-1}function Nu(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Vt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function nx(e,t){return t.split("").every(function(n,r){return Vt(e,r)||!Nu(e,r,n)})}function Jo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Vt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Vt(e,o)&&Nu(e,o,a)){i=o+1;break}}return i}function t_(e,t){return Jo(e,t)===e.mask.length}function Un(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=eh(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Vt(e,t.length);)t+=r[t.length];return t}if(t)return eh(e,Un(e,""),t,0);for(var o=0;o<r.length;o++)Vt(e,o)?t+=r[o]:t+=n;return t}function LN(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(d,f){return f<n||i<=f?d:Vt(e,f)?a[f]:o}).join("");for(var c=i;c<s.length;c++)Vt(e,c)&&(s[c]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Un(e,t)}function eh(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=t_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(c){for(;m=c,Vt(e,v=r)&&m!==i[v];){if(r>=t.length&&(t+=i[r]),d=c,f=r,o&&Vt(e,f)&&d===o)return!0;if(++r>=i.length)return!1}var d,f,v,m;return!Nu(e,r,c)&&c!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),Un(e,t)):o||(t+=c),++r<i.length)}),t}function AN(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,Vt(e,c=r)&&d!==i[c];)if(++r>=i.length)return!1;var c,d;return(Nu(e,r,s)||s===o)&&r++,r<i.length}),r-l}function RN(e,t){for(var n=t;0<=n;--n)if(!Vt(e,n))return n;return null}function fa(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Vt(e,r))return r;return null}function cf(e){return e||e===0?e+"":""}function zN(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,c="",d=0,f=0,v=Math.min(i.start,n.start);return n.end>i.start?f=(d=AN(e,r,c=s.slice(i.start,n.end),v))?i.length:0:s.length<r.length&&(f=r.length-s.length),s=r,f&&(f===1&&!i.length&&(v=i.start===n.start?fa(e,n.start):RN(e,n.start)),s=LN(e,s,v,f)),s=eh(e,s,c,v),(v+=d)>=o.length?v=o.length:v<a.length&&!d?v=a.length:v>=a.length&&v<l&&d&&(v=fa(e,v)),c||(c=null),{value:s=Un(e,s),enteredString:c,selection:{start:v,end:v}}}function FN(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function Ct(e){return typeof e=="function"}function NN(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function n_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function rx(e){return(n_()?NN():function(){return setTimeout(e,1e3/60)})(e)}function uf(e){(n_()||clearTimeout)(e)}var BN=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=rx(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(uf(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var p=TN.findDOMNode(Ci(Ci(i))),x=typeof window<"u"&&p instanceof window.Element;if(p&&!x)return null;if(p.nodeName!=="INPUT"&&(p=p.querySelector("input")),!p)throw new Error("react-input-mask: inputComponent doesn't contain input node");return p},i.getInputValue=function(){var p=i.getInputDOMNode();return p?p.value:null},i.setInputValue=function(p){var x=i.getInputDOMNode();x&&(i.value=p,x.value=p)},i.setCursorToEnd=function(){var p=Jo(i.maskOptions,i.value),x=fa(i.maskOptions,p);x!==null&&i.setCursorPosition(x)},i.setSelection=function(p,x,w){w===void 0&&(w={});var h=i.getInputDOMNode(),g=i.isFocused();h&&g&&(w.deferred||ex(h,p,x),i.selectionDeferId!==null&&uf(i.selectionDeferId),i.selectionDeferId=rx(function(){i.selectionDeferId=null,ex(h,p,x)}),i.previousSelection={start:p,end:x,length:Math.abs(x-p)})},i.getSelection=function(){return MN(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(p){i.setSelection(p,p)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var p=i.maskOptions,x=p.mask,w=p.maskChar,h=p.permanents,g=p.formatChars;return{mask:x,maskChar:w,permanents:h,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:g}},i.isInputAutofilled=function(p,x,w,h){var g=i.getInputDOMNode();try{if(g.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||h.end<w.length&&x.end===p.length},i.onChange=function(p){var x=Ci(Ci(i)).beforePasteState,w=Ci(Ci(i)).previousSelection,h=i.props.beforeMaskedValueChange,g=i.getInputValue(),b=i.value,S=i.getSelection();i.isInputAutofilled(g,S,b,w)&&(b=Un(i.maskOptions,""),w={start:0,end:0,length:0}),x&&(w=x.selection,b=x.value,S={start:w.start+g.length,end:w.start+g.length,length:0},g=b.slice(0,w.start)+g+b.slice(w.end),i.beforePasteState=null);var k=zN(i.maskOptions,g,S,b,w),T=k.enteredString,E=k.selection,_=k.value;if(Ct(h)){var $=h({value:_,selection:E},{value:b,selection:w},T,i.getBeforeMaskedValueChangeConfig());_=$.value,E=$.selection}i.setInputValue(_),Ct(i.props.onChange)&&i.props.onChange(p),i.isWindowsPhoneBrowser?i.setSelection(E.start,E.end,{deferred:!0}):i.setSelection(E.start,E.end)},i.onFocus=function(p){var x=i.props.beforeMaskedValueChange,w=i.maskOptions,h=w.mask,g=w.prefix;if(i.focused=!0,i.mounted=!0,h){if(i.value)Jo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var b=Un(i.maskOptions,g),S=Un(i.maskOptions,b),k=Jo(i.maskOptions,S),T=fa(i.maskOptions,k),E={start:T,end:T};if(Ct(x)){var _=x({value:S,selection:E},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=_.value,E=_.selection}var $=S!==i.getInputValue();$&&i.setInputValue(S),$&&Ct(i.props.onChange)&&i.props.onChange(p),i.setSelection(E.start,E.end)}i.runSaveSelectionLoop()}Ct(i.props.onFocus)&&i.props.onFocus(p)},i.onBlur=function(p){var x=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&nx(i.maskOptions,i.value)){var h="";Ct(x)&&(h=x({value:h,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var g=h!==i.getInputValue();g&&i.setInputValue(h),g&&Ct(i.props.onChange)&&i.props.onChange(p)}Ct(i.props.onBlur)&&i.props.onBlur(p)},i.onMouseDown=function(p){if(!i.focused&&document.addEventListener){i.mouseDownX=p.clientX,i.mouseDownY=p.clientY,i.mouseDownTime=new Date().getTime();var x=function w(h){if(document.removeEventListener("mouseup",w),i.focused){var g=Math.abs(h.clientX-i.mouseDownX),b=Math.abs(h.clientY-i.mouseDownY),S=Math.max(g,b),k=new Date().getTime()-i.mouseDownTime;(S<=10&&k<=200||S<=5&&k<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",x)}Ct(i.props.onMouseDown)&&i.props.onMouseDown(p)},i.onPaste=function(p){Ct(i.props.onPaste)&&i.props.onPaste(p),p.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(p){i.props.children==null&&Ct(i.props.inputRef)&&i.props.inputRef(p)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,c=r.beforeMaskedValueChange,d=r.defaultValue,f=r.value;i.maskOptions=tx(o,a,l),d==null&&(d=""),f==null&&(f=d);var v=cf(f);if(i.maskOptions.mask&&(s||v)&&(v=Un(i.maskOptions,v),Ct(c))){var m=r.value;r.value==null&&(m=d),v=c({value:v,selection:null},{value:m=cf(m),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=v,i}jN(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=FN(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,c=i.formatChars,d=this.maskOptions,f=a||this.isFocused(),v=this.props.value!=null,m=v?cf(this.props.value):this.value,p=r?r.start:null;if(this.maskOptions=tx(l,s,c),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var x=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||v||(m=this.getInputValue()),(x||this.maskOptions.mask&&(m||f))&&(m=Un(this.maskOptions,m)),x){var w=Jo(this.maskOptions,m);(p===null||w<p)&&(p=t_(this.maskOptions,m)?w:fa(this.maskOptions,w))}!this.maskOptions.mask||!nx(this.maskOptions,m)||f||v&&this.props.value||(m="");var h={start:p,end:p};if(Ct(o)){var g=o({value:m,selection:h},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());m=g.value,h=g.selection}this.value=m;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):x&&this.forceUpdate();var S=!1;h.start!=null&&h.end!=null&&(S=!r||r.start!==h.start||r.end!==h.end),(S||b)&&this.setSelection(h.start,h.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&uf(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=ON(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){Ct(o)||J1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Jp({},a);l.forEach(function(d){return delete s[d]}),r=o(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&J1(!1)}else r=lf.createElement("input",Jp({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),r=lf.cloneElement(r,c)},t}(lf.Component),VN=BN;e_.exports=VN;var UN=e_.exports;const WN=Ba(UN);C.div`
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
`;const df=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,ff=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,pf=C.input`
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
`;const hf=C.span`
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
`;const HN=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Контактні дані"}),u.jsxs(df,{children:[u.jsx(ff,{children:"Прізвище та ім’я"}),u.jsx(pf,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&u.jsx(hf,{children:n.fullName})]}),u.jsxs(df,{children:[u.jsx(ff,{children:"Номер телефону"}),u.jsx(WN,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>u.jsx(pf,{...i,type:"tel"})}),n.phone&&u.jsx(hf,{children:n.phone})]}),u.jsxs(df,{children:[u.jsx(ff,{children:"E-mail"}),u.jsx(pf,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&u.jsx(hf,{children:n.email})]})]})},GN=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return u.jsxs("div",{style:{marginBottom:"20px"},children:[u.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),u.jsx(Fu,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&u.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},qN=e=>{if(!e)return"";const t=e.replace(/\D/g,"");return t.length!==10?e:`+38 (${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,8)}-${t.slice(8,10)}`},ix=async(e,t,n)=>{if(!(e!=null&&e.documentId)||!t)return;const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${e.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!r.ok)throw new Error("Не вдалося отримати кошик");const{data:i}=await r.json();await Promise.all(i.map(o=>fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}}))),n(xo())},ox={}.VITE_NP_API_KEY,ax="https://api.novaposhta.ua/v2.0/json/",YN=()=>{const e=Ue(F=>F.cart.items),t=yt(),n=Mt(),r=localStorage.getItem("token"),i=y.useMemo(()=>{const F=localStorage.getItem("user");return F?JSON.parse(F):null},[]);console.log(i);const[o,a]=y.useState({fullName:"",phone:"+38(0",email:"",city:"",postOffice:""});console.log(o);const[l,s]=y.useState(""),[c,d]=y.useState(null),[f,v]=y.useState(null),[m,p]=y.useState(null),[x,w]=y.useState(null),[h,g]=y.useState([]),[b,S]=y.useState([]),[k,T]=y.useState(null),[E,_]=y.useState(!1);console.log("noCall",E);const $=y.useRef(!1);y.useEffect(()=>{!i||$.current||($.current=!0,a({fullName:`${i.last_name||""} ${i.first_name||""}`.trim(),phone:qN(i.phone),email:i.email||""}))},[i]);const M=e.filter(F=>F.available!==!1).reduce((F,V)=>F+(V.new_price??V.price)*V.quantity,0),L=e.filter(F=>F.available!==!1),D=e.filter(F=>F.available!==!1).reduce((F,V)=>F+V.quantity,0),A=(()=>{const F=new Date().getFullYear().toString().slice(-2),V=Date.now().toString().slice(-4),H=Math.floor(100+Math.random()*900);return`${F}${V}${H}`})();y.useEffect(()=>{if(l.length<2)return;const F=setTimeout(async()=>{const H=await(await fetch(ax,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:ox,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:l}})})).json();g(H.data.map(G=>({value:G.Ref,label:G.Description})))},500);return()=>clearTimeout(F)},[l]),y.useEffect(()=>{if(!c||f!=="nova")return;(async()=>{const H=await(await fetch(ax,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:ox,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:c.value}})})).json();S(H.data.map(G=>({value:G.Ref,label:G.Description})))})()},[c,f]);const I=F=>{d(F),a(V=>({...V,city:(F==null?void 0:F.label)||"",postOffice:""})),v(null),p(null),w(null)},R=()=>{const F={};return o.fullName.trim().split(" ").length<2&&(F.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(F.email="Некоректний email"),o.phone.replace(/\D/g,"").length<12&&(F.phone="Номер неповний"),c||(F.city=!0),f==="nova"&&!m&&(F.postOffice=!0),f==="ukr"&&!x&&(F.postOffice=!0),f||(F.delivery=!0),k||(F.payment=!0),F},z=y.useMemo(R,[o,f,m,x,c,k]),P=Object.keys(z).length===0&&e.length>0,O=async F=>{if(F.preventDefault(),!k){alert("Оберіть спосіб оплати");return}const V={"Content-Type":"application/json"};r&&(V.Authorization=`Bearer ${r}`);try{if(!(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:V,body:JSON.stringify({data:{name:o.fullName,phone:o.phone,email:o.email,city:o.city,products:e==null?void 0:e.map(W=>{var q;return{id:W==null?void 0:W.id,name:W==null?void 0:W.name,quantity:W==null?void 0:W.quantity,price:(W==null?void 0:W.new_price)??W.price,image:(q=W==null?void 0:W.images)==null?void 0:q[0].url}}),status_order:"pending",order_number:A,no_call:E,...(i==null?void 0:i.documentId)&&{user:i.documentId},payment_method:k==="liqpay"?"Онлайн (LiqPay)":k==="cod"?"Післяплата":k==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:f==="nova"?"Нова Пошта":f==="ukr"?"УкрПошта":"Самовивіз",delivery_address:f==="nova"?m==null?void 0:m.label:f==="ukr"?x:"Самовивіз"}})})).ok)throw new Error("Не вдалося створити замовлення");for(const W of e){const q=Math.max(0,W.stock-W.quantity);(await fetch(`https://backenddidiv-production.up.railway.app/api/products/${W.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",...r&&{Authorization:`Bearer ${r}`}},body:JSON.stringify({data:{stock:q}})})).ok||console.error(`Не вдалося оновити stock товару ${W.name}`)}if(k==="liqpay"){const W=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:M,order_number:A})}),{data:q,signature:oe}=await W.json();await ix(i,r,n);const he=document.createElement("form");he.method="POST",he.action="https://www.liqpay.ua/api/3/checkout",he.innerHTML=`
        <input type="hidden" name="data" value="${q}" />
        <input type="hidden" name="signature" value="${oe}" />
      `,document.body.appendChild(he),he.requestSubmit();return}const G={...o,name:o.fullName,city:c.label,deliveryMethod:f==="nova"?"Нова Пошта":f==="ukr"?"УкрПошта":"Самовивіз",address:f==="nova"?m==null?void 0:m.label:f==="ukr"?x:"Самовивіз",products:e==null?void 0:e.map(W=>({id:W.id,name:W.name,quantity:W.quantity,price:W.new_price??W.price})),total:M,order_number:A,delivery_address:f==="nova"?m==null?void 0:m.label:f==="ukr"?x:"Самовивіз",payment_method:k==="liqpay"?"Онлайн (LiqPay)":k==="cod"?"Післяплата":k==="bank_transfer"?"Оплата за реквізитами":""};await ix(i,r,n),t("/order-confirmation",{state:{order:G}})}catch(H){console.error(H),alert("Помилка оформлення")}},N=y.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),B=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return u.jsx(yN,{children:u.jsxs(bN,{children:[u.jsxs(wN,{children:[u.jsx(HN,{formData:o,setFormData:a,errors:z}),u.jsx(rN,{cityOptions:h,selectedCity:c,onChange:I,onInputChange:s}),u.jsx(aN,{options:N,value:f,onChange:v,selectedCity:c}),u.jsx(sN,{deliveryMethod:f,officeOptions:b,selectedOffice:m,selectedUkrOffice:x,setSelectedOffice:p,setSelectedUkrOffice:w}),u.jsx(GN,{options:B,value:k,onChange:T,error:z.payment})]}),u.jsx(kN,{cartItems:L,totalAmount:M,totalQuantity:D,isFormValid:P,handleSubmit:O,setNoCall:_,noCall:E})]})})},XN=C.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,KN=C.h1`
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
`,QN=C.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,ZN=C.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,JN=C.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,e7=C.li`
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
`;const t7=C.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,sx=C.button`
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
`,n7=()=>{var v,m;const e=yt(),t=Dn(),[n]=Yk(),r=Mt(),i=(v=t.state)==null?void 0:v.order,o=n.get("orderId"),[a,l]=y.useState(i||null),[s,c]=y.useState(!i);y.useEffect(()=>{r(xo())},[r]),y.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(p=>p.json()).then(p=>{var x;((x=p.data)==null?void 0:x.length)>0&&l(p.data[0]),c(!1)}).catch(()=>c(!1)):c(!1))},[o,i]);const f=((a==null?void 0:a.products)??[]).reduce((p,x)=>p+Number(x.new_price??x.price)*(x.quantity||1),0);return s?u.jsx("div",{children:"Завантаження..."}):a?u.jsxs(XN,{children:[u.jsx(KN,{children:"Дякуємо за ваше замовлення!"}),u.jsxs(Ar,{children:["Ваше замовлення ",u.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),u.jsx(Ar,{children:"Ми зв’яжемось з Вами в найближчий час"}),u.jsxs(QN,{children:[u.jsx(ZN,{children:"Деталі замовлення:"}),u.jsx(JN,{children:(m=a.products)==null?void 0:m.map(p=>u.jsxs(e7,{children:[u.jsxs("span",{className:"item-info",children:[p.name," (x",p.quantity,")"]}),u.jsxs("span",{className:"item-price",children:[(p.new_price??p.price)*(p.quantity||1)," грн"]})]},p.id))}),u.jsxs(Ar,{children:[u.jsx("strong",{children:"На суму:"})," ",f," грн."]}),u.jsxs(Ar,{children:[u.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),u.jsxs(Ar,{children:[u.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),u.jsxs(Ar,{children:[u.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),u.jsxs(Ar,{children:[u.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),u.jsxs(t7,{children:[u.jsx(sx,{onClick:()=>e("/"),children:"Повернутися на головну"}),u.jsx(sx,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):u.jsxs("div",{children:["Замовлення не знайдено",u.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},r7=C.section`
  background-color: var(--second-background);
`,i7=C.div`
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
`,o7=C.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,a7=C.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,s7=C.p`

  font-size: 16px;
  color: #666;
`,l7=C.section`
  margin-bottom: 50px;
`,c7=C.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,u7=C.section`
  margin-bottom: 60px;
`,d7=C.h2`
  margin-bottom: 30px;
`,f7=C.div`
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
`,p7=()=>u.jsxs(r7,{children:[u.jsxs(i7,{children:[u.jsxs(o7,{children:[u.jsx(a7,{children:"Про Дідів Хлів"}),u.jsx(s7,{children:"Даємо друге життя якісним велозапчастинам"})]}),u.jsxs(l7,{children:[u.jsx(c7,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),u.jsx(B2,{})]}),u.jsxs(u7,{children:[u.jsx(d7,{children:"Наша майстерня"}),u.jsxs(f7,{children:[u.jsx(Ls,{color:"#e2e2e2",children:"Фото майстерні"}),u.jsx(Ls,{color:"#d1d1d1",children:"Процес діагностики"}),u.jsx(Ls,{color:"#bcbcbc",children:"Склад запчастин"}),u.jsx(Ls,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),h7=()=>{const{pathname:e}=Dn();return y.useEffect(()=>{window.scrollTo(0,0)},[e]),null},m7=C.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,g7=C.div`
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
`,v7=C.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,x7=C.p`
  color: #585555;
  margin-bottom: 40px;
`,y7=C.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,b7=C.div`
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
`,w7=C.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,S7=C.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,C7=C.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,_7=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,lx=C.a`
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
`;const k7=C.div`
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

 
`,E7=()=>u.jsx(m7,{children:u.jsxs(g7,{children:[u.jsx(v7,{children:"Контакти"}),u.jsx(x7,{children:"Зв’яжіться з нами для консультації або замовлення"}),u.jsxs(y7,{children:[u.jsxs(b7,{children:[u.jsxs(As,{children:[u.jsx("h3",{children:"Адреса"}),u.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),u.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),u.jsxs(As,{children:[u.jsx("h3",{children:"Телефон"}),u.jsx("p",{children:"+38 (097) 123-45-67"})]}),u.jsxs(As,{children:[u.jsx("h3",{children:"Email"}),u.jsx("p",{children:"didivhliv.com"})]}),u.jsxs(As,{children:[u.jsx("h3",{children:"Графік роботи"}),u.jsx("p",{children:"З 11:00 - 20:00"}),u.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),u.jsxs(w7,{children:[u.jsx(S7,{children:"Ми в соцмережах"}),u.jsx(C7,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),u.jsxs(_7,{children:[u.jsxs(lx,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-instagram`})}),u.jsx("span",{children:"Instagram"})]}),u.jsxs(lx,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${hn}#icon-telegram`})}),u.jsx("span",{children:"Telegram"})]})]}),u.jsx(k7,{children:"Приєднуйся до спільноти!"})]})]})]})}),T7=C.section`
  background-color:  var(--second-background);
`,P7=C.div`
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
  
`,j7=C.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,O7=C.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,$7=C.div`
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
`,M7=C.div`
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
`,I7=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;

`,D7=C.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,L7=C.p`
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
`;const A7=C.div.attrs({className:"card-buttons"})`
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
`,r_=C.div`
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
`,R7=C.div`
  position: relative;
  display: inline-block;
  

`,z7=C.button`
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
`,F7=C.div`
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
`,i_=C.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,o_=C(Te)`
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
  
`,N7=C.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,B7=C.div`
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
`,V7=C.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,U7=C.h1`

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

`,W7=C.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,H7=C.div`
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
`;const a_=C.div`
  position: relative;
`,G7=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 padding: 10px;
`,q7=C.p`
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
`,Y7=C.div`
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
`;const X7=C.div.attrs({className:"card-buttons"})`
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
`;const K7=C.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,Q7=C.div`
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
`,Z7=C.button`
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
`,J7=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(!0),i=Ue(k=>k.favorites.items),o=Ue(k=>k.cart.items),[a,l]=y.useState(!1),[s,c]=y.useState("date"),[d,f]=y.useState("asc"),[v,m]=y.useState(1),[p,x]=y.useState(1),w=yt(),h=Mt(),g=y.useRef(null);y.useEffect(()=>{const k=T=>{g.current&&!g.current.contains(T.target)&&l(!1)};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[]),y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[v]),y.useEffect(()=>{(async()=>{const T=new Date,E=new Date;E.setDate(T.getDate()-7);const _=E.toISOString();try{r(!0);const $=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${_}&pagination[page]=${v}&pagination[pageSize]=24`);if(!$.ok)throw new Error(`HTTP error! Status: ${$.status}`);const M=await $.json();t(M.data),x(M.meta.pagination.pageCount)}catch($){console.error("Помилка при завантаженні продуктів:",$)}finally{r(!1)}})()},[v]);const b=y.useMemo(()=>{const k=[...e],T=E=>E.new_price&&E.new_price<E.price?E.new_price:E.price;switch(s){case"name":return k.sort((E,_)=>d==="asc"?E.name.localeCompare(_.name):_.name.localeCompare(E.name));case"price":return k.sort((E,_)=>{const $=T(E),M=T(_);return d==="asc"?$-M:M-$});case"date":return k.sort((E,_)=>d==="asc"?new Date(E.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(E.createdAt));default:return k}},[s,e,d]),S=(k,T)=>{T.stopPropagation();const E=i.some(_=>_.id===(k==null?void 0:k.id));ui(k,E,h,K)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):b.length===0?u.jsxs(i_,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),u.jsxs(o_,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Vc,{size:24})]})]}):u.jsxs(T7,{children:[u.jsxs(P7,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(j7,{children:[u.jsx(O7,{children:"Нові товари "}),u.jsxs(R7,{ref:g,children:[u.jsxs(z7,{onClick:()=>l(k=>!k),children:["Сортування",u.jsx(Bc,{strokeWidth:.9,size:22})]}),a&&u.jsxs(F7,{children:[u.jsx(_i,{onClick:()=>{c("name"),f("asc"),l(!1)},children:"А-Я"}),u.jsx(_i,{onClick:()=>{c("name"),f("desc"),l(!1)},children:"Я-А"}),u.jsx(_i,{onClick:()=>{c("price"),f("asc"),l(!1)},children:"Ціна ↑"}),u.jsx(_i,{onClick:()=>{c("price"),f("desc"),l(!1)},children:"Ціна ↓"}),u.jsx(_i,{onClick:()=>{c("date"),f("desc"),l(!1)},children:"Спочатку новіші"}),u.jsx(_i,{onClick:()=>{c("date"),f("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx($7,{children:b.map(k=>{var R,z;const T=i.some(P=>P.id===k.id),E=(k==null?void 0:k.available)??!0,_=(k==null?void 0:k.stock)===0,$=o.find(P=>P.id===k.id),L=($?$.quantity:0)>=(k.stock||0),D=k.new_price&&k.new_price<k.price,j=D?k.new_price:k.price,A=D?Math.round((k.price-k.new_price)/k.price*100):0,I=async(P,O)=>{if(O.stopPropagation(),L){K.error("Товар уже у кошику");return}await yo(P,1,h,K)};return u.jsxs(M7,{onClick:()=>w(`/product/${k.slug??k.id}`),$soldOut:_,children:[!E&&u.jsx(pm,{children:"Бронь"}),u.jsx(hm,{children:"Новинка"}),u.jsxs(a_,{children:[_&&u.jsx(Gc,{children:"Продано"}),u.jsx(I7,{src:((z=(R=k.images)==null?void 0:R[0])==null?void 0:z.url)||ri,alt:k.name})]}),u.jsx(L7,{children:k.name}),u.jsxs(D7,{children:[u.jsx(Mu,{children:u.jsxs(Iu,{children:[u.jsxs(Du,{$discount:D,children:[j.toLocaleString()," грн"]}),D&&u.jsxs(Lu,{children:[k.price.toLocaleString()," грн"]}),D&&u.jsxs(Au,{children:["-",A,"%"]})]})}),u.jsxs(A7,{children:[E&&!_&&u.jsx(vc,{onClick:P=>I(k,P),children:u.jsx(vo,{size:24,color:$?"var(--orange-color)":"black",strokeWidth:2})}),!_&&u.jsx(vc,{onClick:P=>S(k,P),children:u.jsx(Xa,{size:24,fill:T?"#ff4d4f":"none",color:T?"#ff4d4f":"#000000",strokeWidth:T?1:2})})]})]})]},k.id)})}),u.jsxs(r_,{children:[u.jsx(qi,{onClick:()=>m(k=>Math.max(k-1,1)),disabled:v===1,children:"Назад"}),Array.from({length:p},(k,T)=>u.jsx(qi,{onClick:()=>m(T+1),active:v===T+1,children:T+1},T)),u.jsx(qi,{onClick:()=>m(k=>Math.min(k+1,p)),disabled:v===p,children:"Вперед"})]})]})," "]})},e9=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(!0),[i,o]=y.useState(!1),[a,l]=y.useState("date"),[s,c]=y.useState("desc"),[d,f]=y.useState(1),v=24,m=yt(),p=Mt(),x=Ue(_=>_.favorites.items),w=Ue(_=>_.cart.items),h=y.useRef(null);y.useEffect(()=>{const _=$=>{h.current&&!h.current.contains($.target)&&o(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),y.useEffect(()=>{(async()=>{const $="https://backenddidiv-production.up.railway.app";try{const L=await(await fetch(`${$}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json();t(L.data),r(!1)}catch(M){console.log(M)}})()},[]),y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[d]);const g=y.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort(($,M)=>s==="asc"?$.name.localeCompare(M.name):M.name.localeCompare($.name));case"price":return _.sort(($,M)=>s==="asc"?$.new_price-M.new_price:M.new_price-$.new_price);case"date":return _.sort(($,M)=>s==="asc"?new Date($.createdAt)-new Date(M.createdAt):new Date(M.createdAt)-new Date($.createdAt));default:return _}},[a,e,s]),b=d*v,S=b-v,k=g.slice(S,b),T=Math.ceil(e.length/v),E=(_,$)=>{$.stopPropagation();const M=x.some(L=>L.id===(_==null?void 0:_.id));ui(_,M,p,K)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?u.jsxs(i_,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),u.jsxs(o_,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Vc,{size:24})]})]}):u.jsx(N7,{children:u.jsxs(B7,{children:[u.jsx(Ln,{autoClose:1500}),u.jsxs(V7,{children:[u.jsx(U7,{children:"Акційні товари"}),u.jsxs(K7,{ref:h,children:[u.jsxs(Z7,{onClick:()=>o(_=>!_),children:["Сортування",u.jsx(Bc,{strokeWidth:.9,size:22})]}),i&&u.jsxs(Q7,{children:[u.jsx(ki,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),u.jsx(ki,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),u.jsx(ki,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),u.jsx(ki,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),u.jsx(ki,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),u.jsx(ki,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(W7,{children:k.map(_=>{var N,B;const $=_.new_price&&_.new_price<_.price,M=_!=null&&_.createdAt?Date.now()-new Date(_.createdAt).getTime()<7*24*60*60*1e3:!1,L=$?_.new_price:_.price,D=(_==null?void 0:_.available)??!0,j=(_==null?void 0:_.stock)===0,A=$?Math.round((_.price-_.new_price)/_.price*100):0,I=x.some(F=>F.id===_.id),R=w.find(F=>F.id===_.id),P=(R?R.quantity:0)>=(_.stock||0),O=async(F,V)=>{if(V.stopPropagation(),P){K.error("Товар уже у кошику");return}await yo(_,1,p,K)};return u.jsxs(H7,{onClick:()=>m(`/product/${_.slug??_.id}`),style:{cursor:"pointer"},$soldOut:j,children:[" ",M&&u.jsx(hm,{children:"Новинка"}),!D&&u.jsx(pm,{children:"Бронь"}),u.jsxs(a_,{children:[j&&u.jsx(Gc,{children:"Продано"}),u.jsx(G7,{src:((B=(N=_.images)==null?void 0:N[0])==null?void 0:B.url)||"/nofoto.png"})]}),u.jsx(q7,{children:_.name}),u.jsxs(Y7,{children:[u.jsx(Mu,{children:u.jsxs(Iu,{children:[u.jsxs(Du,{$discount:$,children:[L.toLocaleString()," грн"]}),$&&u.jsxs(Lu,{children:[_.price.toLocaleString()," грн"]}),$&&u.jsxs(Au,{children:["-",A,"%"]})]})}),u.jsxs(X7,{children:[D&&!j&&u.jsx(vc,{onClick:F=>O(_,F),children:u.jsx(vo,{size:24,color:R?"var(--orange-color)":"black",strokeWidth:2})}),!j&&u.jsx(vc,{onClick:F=>E(_,F),children:u.jsx(Xa,{size:24,fill:I?"#ff4d4f":"none",color:I?"#ff4d4f":"#000000",strokeWidth:I?1:2})})]})]})]},_.id)})}),g.length>v&&u.jsxs(r_,{children:[u.jsx(qi,{onClick:()=>f(_=>Math.max(_-1,1)),disabled:d===1,children:"Назад"}),Array.from({length:T},(_,$)=>u.jsx(qi,{onClick:()=>f($+1),active:d===$+1,children:$+1},$)),u.jsx(qi,{onClick:()=>f(_=>Math.min(_+1,T)),disabled:d===T,children:"Вперед"})]})]})})},t9=C.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;

`,n9=C.div`
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
`,r9=C.button`
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
`,i9=C.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width:768px){
    font-size:42px;
  }
`,o9=C.p`
  text-align:center;
  color:#8d837d;

  margin-bottom:32px;
`,a9=C.div`
  display:flex;

  background:#efe8df;

  border-radius:40px;

  padding:5px;

  margin-bottom:35px;
`,cx=C.button`
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
`,Wo=C.input`
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
`,s9=C.button`
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
`,ux=C.div`
  position: relative;
  width: 100%;
 
`,dx=C.button`
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
`,l9=C.p`
  margin-top:28px;

  text-align:center;

  color:#8b817a;

  font-size:15px;

  span{
      color:#ff7a00;
      cursor:pointer;
      font-weight:600;
  }
`,c9=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[product][documentId][$eq]=${r.documentId}&populate=user`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=l.user||[];if(s.some(f=>f.documentId===n))return;const d=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{user:[...s.map(f=>f.documentId),n]}})});d.ok||console.error(await d.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:[n]}})});a.ok||console.error(await a.json())}))},u9=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${n}&filters[product][documentId][$eq]=${r.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{quantity:r.quantity}})});s.ok||console.error(await s.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:n,quantity:r.quantity}})});a.ok||console.error(await a.json())}))},d9=async(e,t)=>{const n=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${t}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${e}`}});if(!n.ok)throw new Error("Не вдалося отримати кошик");return(await n.json()).data.map(i=>i.product?{...i.product,quantity:i.quantity}:null).filter(Boolean)},f9=({isOpen:e,onClose:t,mode:n,setMode:r,localFavorites:i,localCartItems:o})=>{const[a,l]=y.useState(!1),[s,c]=y.useState(!1),[d,f]=y.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),v=Mt();if(y.useEffect(()=>{const h=g=>{g.key==="Escape"&&t()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[t]),!e)return null;const m=h=>{f(g=>({...g,[h.target.name]:h.target.value}))},p=h=>{h.target===h.currentTarget&&t()},x=async()=>{var S;const h=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:d.email,password:d.password})}),g=await h.json();if(!h.ok){alert(((S=g.error)==null?void 0:S.message)||"Помилка авторизації");return}localStorage.setItem("token",g.jwt),localStorage.setItem("user",JSON.stringify(g.user)),await c9(i,g.jwt,g.user.documentId),await u9(o,g.jwt,g.user.documentId);const b=await d9(g.jwt,g.user.documentId);v(rS(b)),t()},w=async()=>{if(d.password!==d.confirmPassword){alert("Паролі не співпадають");return}const g=await(await fetch("https://backenddidiv-production.up.railway.app/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:d.email,email:d.email,password:d.password})})).json();localStorage.setItem("token",g.jwt);try{const b=localStorage.getItem("token");localStorage.setItem("user",JSON.stringify(g.user));const S=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${g.user.id}`,{method:"PUT",headers:{Authorization:`Bearer ${b}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:d.first_name,last_name:d.last_name})});if(!S.ok)throw new Error("Помилка оновлення");const k=await S.json();localStorage.setItem("user",JSON.stringify(k))}catch(b){console.error(b),alert("Не вдалося оновити дані")}t()};return u.jsxs(u.Fragment,{children:[" ",u.jsx(Ln,{autoClose:1500}),u.jsx(t9,{onClick:p,children:u.jsxs(n9,{children:[u.jsx(r9,{onClick:t,children:"×"}),u.jsx(i9,{children:n==="login"?"Вхід":"Реєстрація"}),u.jsx(o9,{children:n==="login"?"Увійдіть до свого акаунта":"Створіть новий акаунт"}),u.jsxs(a9,{children:[u.jsx(cx,{active:n==="login",onClick:()=>r("login"),children:"Вхід"}),u.jsx(cx,{active:n==="register",onClick:()=>r("register"),children:"Реєстрація"})]}),n==="register"&&u.jsxs(u.Fragment,{children:[u.jsx(Wo,{name:"first_name",value:d.first_name,onChange:m,placeholder:"Ім'я"}),u.jsx(Wo,{name:"last_name",value:d.last_name,onChange:m,placeholder:"Прізвище"})]}),u.jsx(Wo,{name:"email",type:"email",value:d.email,onChange:m,placeholder:"Email"}),u.jsxs(ux,{children:[u.jsx(Wo,{name:"password",type:a?"text":"password",value:d.password,onChange:m,placeholder:"Пароль"}),u.jsx(dx,{type:"button",onClick:()=>l(h=>!h),children:a?u.jsx(q0,{size:20}):u.jsx(Y0,{size:20})})]}),n==="register"&&u.jsxs(ux,{children:[u.jsx(Wo,{name:"confirmPassword",type:s?"text":"password",value:d.confirmPassword,onChange:m,placeholder:"Повторіть пароль"}),u.jsx(dx,{type:"button",onClick:()=>c(h=>!h),children:a?u.jsx(q0,{size:20}):u.jsx(Y0,{size:20})})]}),u.jsx(s9,{onClick:n==="login"?x:w,children:n==="login"?"Увійти":"Зареєструватися"}),u.jsx(l9,{children:n==="login"?u.jsxs(u.Fragment,{children:["Немає акаунта?"," ",u.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):u.jsxs(u.Fragment,{children:["Вже є акаунт?"," ",u.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})," "]})},p9=({isLoggedIn:e,children:t})=>e?t:u.jsx(Lk,{to:"/",replace:!0}),h9=C.main`
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

`,m9=C.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`,g9=C.aside`
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
`,v9=C.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,x9=C.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,y9=C.h3`
  margin-bottom: 4px;
`,b9=C.p`
  color: #777;
`,fx=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Rs=C(Wx)`
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
`;var ag="persist:",s_="persist/FLUSH",sg="persist/REHYDRATE",l_="persist/PAUSE",c_="persist/PERSIST",u_="persist/PURGE",d_="persist/REGISTER",w9=-1;function pl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pl=function(n){return typeof n}:pl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pl(e)}function px(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function S9(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?px(n,!0).forEach(function(r){C9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):px(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function C9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _9(e,t,n,r){r.debug;var i=S9({},n);return e&&pl(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function k9(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:ag).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(k){return k}:typeof e.serialize=="function"?l=e.serialize:l=E9;var s=e.writeFailHandler||null,c={},d={},f=[],v=null,m=null,p=function(k){Object.keys(k).forEach(function(T){h(T)&&c[T]!==k[T]&&f.indexOf(T)===-1&&f.push(T)}),Object.keys(c).forEach(function(T){k[T]===void 0&&h(T)&&f.indexOf(T)===-1&&c[T]!==void 0&&f.push(T)}),v===null&&(v=setInterval(x,i)),c=k};function x(){if(f.length===0){v&&clearInterval(v),v=null;return}var S=f.shift(),k=r.reduce(function(T,E){return E.in(T,S,c)},c[S]);if(k!==void 0)try{d[S]=l(k)}catch(T){console.error("redux-persist/createPersistoid: error serializing state",T)}else delete d[S];f.length===0&&w()}function w(){Object.keys(d).forEach(function(S){c[S]===void 0&&delete d[S]}),m=a.setItem(o,l(d)).catch(g)}function h(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function g(S){s&&s(S)}var b=function(){for(;f.length!==0;)x();return m||Promise.resolve()};return{update:p,flush:b}}function E9(e){return JSON.stringify(e)}function T9(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:ag).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=P9,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(c,d){return d.out(c,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function P9(e){return JSON.parse(e)}function j9(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:ag).concat(e.key);return t.removeItem(n,O9)}function O9(e){}function hx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function An(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hx(n,!0).forEach(function(r){$9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M9(e,t){if(e==null)return{};var n=I9(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function I9(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var D9=5e3;function f_(e,t){var n=e.version!==void 0?e.version:w9;e.debug;var r=e.stateReconciler===void 0?_9:e.stateReconciler,i=e.getStoredState||T9,o=e.timeout!==void 0?e.timeout:D9,a=null,l=!1,s=!0,c=function(f){return f._persist.rehydrated&&a&&!s&&a.update(f),f};return function(d,f){var v=d||{},m=v._persist,p=M9(v,["_persist"]),x=p;if(f.type===c_){var w=!1,h=function(_,$){w||(f.rehydrate(e.key,_,$),w=!0)};if(o&&setTimeout(function(){!w&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=k9(e)),m)return An({},t(x,f),{_persist:m});if(typeof f.rehydrate!="function"||typeof f.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return f.register(e.key),i(e).then(function(E){var _=e.migrate||function($,M){return Promise.resolve($)};_(E,n).then(function($){h($)},function($){h(void 0,$)})},function(E){h(void 0,E)}),An({},t(x,f),{_persist:{version:n,rehydrated:!1}})}else{if(f.type===u_)return l=!0,f.result(j9(e)),An({},t(x,f),{_persist:m});if(f.type===s_)return f.result(a&&a.flush()),An({},t(x,f),{_persist:m});if(f.type===l_)s=!0;else if(f.type===sg){if(l)return An({},x,{_persist:An({},m,{rehydrated:!0})});if(f.key===e.key){var g=t(x,f),b=f.payload,S=r!==!1&&b!==void 0?r(b,d,g,e):g,k=An({},S,{_persist:An({},m,{rehydrated:!0})});return c(k)}}}if(!m)return t(d,f);var T=t(x,f);return T===x?d:c(An({},T,{_persist:m}))}}function mx(e){return R9(e)||A9(e)||L9()}function L9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function A9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function R9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function gx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function th(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gx(n,!0).forEach(function(r){z9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function z9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p_={registry:[],bootstrapped:!1},F9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:p_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d_:return th({},t,{registry:[].concat(mx(t.registry),[n.key])});case sg:var r=t.registry.indexOf(n.key),i=mx(t.registry);return i.splice(r,1),th({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function N9(e,t,n){var r=n||!1,i=gm(F9,p_,t&&t.enhancer?t.enhancer:void 0),o=function(c){i.dispatch({type:d_,key:c})},a=function(c,d,f){var v={type:sg,payload:d,err:f,key:c};e.dispatch(v),i.dispatch(v),r&&l.getState().bootstrapped&&(r(),r=!1)},l=th({},i,{purge:function(){var c=[];return e.dispatch({type:u_,result:function(f){c.push(f)}}),Promise.all(c)},flush:function(){var c=[];return e.dispatch({type:s_,result:function(f){c.push(f)}}),Promise.all(c)},pause:function(){e.dispatch({type:l_})},persist:function(){e.dispatch({type:c_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var lg={},cg={};cg.__esModule=!0;cg.default=U9;function hl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hl=function(n){return typeof n}:hl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hl(e)}function mf(){}var B9={getItem:mf,setItem:mf,removeItem:mf};function V9(e){if((typeof self>"u"?"undefined":hl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function U9(e){var t="".concat(e,"Storage");return V9(t)?self[t]:B9}lg.__esModule=!0;lg.default=G9;var W9=H9(cg);function H9(e){return e&&e.__esModule?e:{default:e}}function G9(e){var t=(0,W9.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var ug=void 0,q9=Y9(lg);function Y9(e){return e&&e.__esModule?e:{default:e}}var X9=(0,q9.default)("local");ug=X9;const K9={key:"cart",storage:ug},Q9={key:"favorites",storage:ug},Z9=f_(K9,G$),J9=f_(Q9,V$),h_=j$({reducer:{cart:Z9,favorites:J9},middleware:e=>e({serializableCheck:!1})}),m_=N9(h_),eB=C.div`
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
`,tB=C.div`
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
`,nB=C.h2`
  margin: 0 0 14px;

  text-align: center;

  color:var(--black-color);
  font-family: var(--second-font);

  font-size: 28px;
  font-weight: 300;
`,rB=C.p`
  margin: 0 auto 32px;
   font-family: var(--second-font);

  max-width: 360px;

  text-align: center;

  color: #3c3734;

  font-size: 16px;
  line-height: 1.6;
`,iB=C.div`
  display: flex;
  gap: 14px;

  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,oB=C.button`
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
`,aB=C.button`
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
`,g_=({onClose:e,onConfirm:t})=>u.jsx(eB,{onClick:e,children:u.jsxs(tB,{onClick:n=>n.stopPropagation(),children:[u.jsx(nB,{children:"Вийти з акаунту?"}),u.jsx(rB,{children:"Ви впевнені, що хочете вийти з особистого кабінету?"}),u.jsxs(iB,{children:[u.jsx(oB,{onClick:e,children:"Скасувати"}),u.jsx(aB,{onClick:t,children:"Вийти"})]})]})}),sB=()=>{var c,d;const[e,t]=y.useState(""),[n,r]=y.useState(""),[i,o]=y.useState(!1),a=Mt(),l=yt();y.useEffect(()=>{(async()=>{try{const v=localStorage.getItem("token"),p=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${v}`}})).json();t(p.first_name),r(p.email)}catch(v){console.error(v)}})()},[]);const s=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),a(tS()),a(xo()),await m_.purge(),l("/",{replace:!0})};return u.jsxs(g9,{children:[i&&u.jsx(g_,{onClose:()=>o(!1),onConfirm:s}),u.jsxs(v9,{children:[u.jsx(x9,{children:((d=(c=e||e)==null?void 0:c[0])==null?void 0:d.toUpperCase())||"?"}),u.jsxs("div",{children:[u.jsx(y9,{children:e}),u.jsx(b9,{children:n})]})]}),u.jsxs(fx,{children:[u.jsxs(fx,{children:[u.jsx(Rs,{to:"/account/profile",children:"Особисті дані"}),u.jsx(Rs,{to:"/account/orders",children:"Замовлення"}),u.jsx(Rs,{to:"/account/password",children:"Змінити пароль"})]}),u.jsx(Rs,{as:"button",className:"logout",onClick:()=>o(!0),children:"Вийти"})]})]})};var dg={};dg.match=pB;dg.parse=v_;var lB=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,cB=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,uB=/^(?:(min|max)-)?(.+)/,dB=/(em|rem|px|cm|mm|in|pt|pc)?$/,fB=/(dpi|dpcm|dppx)?$/;function pB(e,t){return v_(e).some(function(n){var r=n.inverse,i=n.type==="all"||t.type===n.type;if(i&&r||!(i||r))return!1;var o=n.expressions.every(function(a){var l=a.feature,s=a.modifier,c=a.value,d=t[l];if(!d)return!1;switch(l){case"orientation":case"scan":return d.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=yx(c),d=yx(d);break;case"resolution":c=xx(c),d=xx(d);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=vx(c),d=vx(d);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,d=parseInt(d,10)||0;break}switch(s){case"min":return d>=c;case"max":return d<=c;default:return d===c}});return o&&!r||!o&&r})}function v_(e){return e.split(",").map(function(t){t=t.trim();var n=t.match(lB),r=n[1],i=n[2],o=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(l){var s=l.match(cB),c=s[1].toLowerCase().match(uB);return{modifier:c[1],feature:c[2],value:s[2]}}),a})}function vx(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function xx(e){var t=parseFloat(e),n=String(e).match(fB)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function yx(e){var t=parseFloat(e),n=String(e).match(dB)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var hB=dg.match,bx=typeof window<"u"?window.matchMedia:null;function mB(e,t,n){var r=this,i;bx&&!n&&(i=bx.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=hB(e,t),this.media=e),this.addListener=o,this.removeListener=a,this.dispose=s;function o(c){i&&i.addListener(c)}function a(c){i&&i.removeListener(c)}function l(c){r.matches=c.matches,r.media=c.media}function s(){i&&i.removeListener(l)}}function gB(e,t,n){return new mB(e,t,n)}var vB=gB;const xB=Ba(vB);var yB=/[A-Z]/g,bB=/^ms-/,gf={};function wB(e){return"-"+e.toLowerCase()}function x_(e){if(gf.hasOwnProperty(e))return gf[e];var t=e.replace(yB,wB);return gf[e]=bB.test(t)?"-"+t:t}function SB(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let o=0;o<i;o++){const a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var y_={exports:{}},CB="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_B=CB,kB=_B;function b_(){}function w_(){}w_.resetWarningCache=b_;var EB=function(){function e(r,i,o,a,l,s){if(s!==kB){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:w_,resetWarningCache:b_};return n.PropTypes=n,n};y_.exports=EB();var TB=y_.exports;const pe=Ba(TB),pt=pe.oneOfType([pe.string,pe.number]),fg={all:pe.bool,grid:pe.bool,aural:pe.bool,braille:pe.bool,handheld:pe.bool,print:pe.bool,projection:pe.bool,screen:pe.bool,tty:pe.bool,tv:pe.bool,embossed:pe.bool},S_={orientation:pe.oneOf(["portrait","landscape"]),scan:pe.oneOf(["progressive","interlace"]),aspectRatio:pe.string,deviceAspectRatio:pe.string,height:pt,deviceHeight:pt,width:pt,deviceWidth:pt,color:pe.bool,colorIndex:pe.bool,monochrome:pe.bool,resolution:pt,type:Object.keys(fg)},{type:gV,...PB}=S_,C_={minAspectRatio:pe.string,maxAspectRatio:pe.string,minDeviceAspectRatio:pe.string,maxDeviceAspectRatio:pe.string,minHeight:pt,maxHeight:pt,minDeviceHeight:pt,maxDeviceHeight:pt,minWidth:pt,maxWidth:pt,minDeviceWidth:pt,maxDeviceWidth:pt,minColor:pe.number,maxColor:pe.number,minColorIndex:pe.number,maxColorIndex:pe.number,minMonochrome:pe.number,maxMonochrome:pe.number,minResolution:pt,maxResolution:pt,...PB},jB={...fg,...C_};var OB={all:jB,types:fg,matchers:S_,features:C_};const $B=e=>`not ${e}`,MB=(e,t)=>{const n=x_(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?$B(n):`(${n}: ${t})`},IB=e=>e.join(" and "),DB=e=>{const t=[];return Object.keys(OB.all).forEach(n=>{const r=e[n];r!=null&&t.push(MB(n,r))}),IB(t)},LB=y.createContext(void 0),AB=e=>e.query||DB(e),wx=e=>e?Object.keys(e).reduce((n,r)=>(n[x_(r)]=e[r],n),{}):void 0,__=()=>{const e=y.useRef(!1);return y.useEffect(()=>{e.current=!0},[]),e.current},RB=e=>{const t=y.useContext(LB),n=()=>wx(e)||wx(t),[r,i]=y.useState(n);return y.useEffect(()=>{const o=n();SB(r,o)||i(o)},[e,t]),r},zB=e=>{const t=()=>AB(e),[n,r]=y.useState(t);return y.useEffect(()=>{const i=t();n!==i&&r(i)},[e]),n},FB=(e,t)=>{const n=()=>xB(e,t||{},!!t),[r,i]=y.useState(n),o=__();return y.useEffect(()=>{if(o){const a=n();return i(a),()=>{a&&a.dispose()}}},[e,t]),r},NB=e=>{const[t,n]=y.useState(e.matches);return y.useEffect(()=>{const r=i=>{n(i.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},BB=(e,t,n)=>{const r=RB(t),i=zB(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const o=FB(i,r),a=NB(o),l=__();return y.useEffect(()=>{l&&n&&n(a)},[a]),y.useEffect(()=>()=>{o&&o.dispose()},[]),a},VB=C.div`
  margin-bottom: 24px;
`,UB=C.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,WB=C.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,HB=C.h3`
  margin-bottom: 4px;
`,GB=C.p`
  color: #777;
`,qB=C.button`
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
`,YB=C.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`,zs=C(Wx)`
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
`,XB=()=>{var p,x;const[e,t]=y.useState(!1),[n,r]=y.useState(!1),[i,o]=y.useState(""),[a,l]=y.useState(""),s=Mt(),c=yt(),d=Dn(),f=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),s(tS()),s(xo()),await m_.purge(),c("/",{replace:!0})};y.useEffect(()=>{(async()=>{try{const h=localStorage.getItem("token"),b=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${h}`}})).json();o(b.first_name),l(b.email)}catch(h){console.error(h)}})()},[]);const m={"/account":"Особисті дані","/account/profile":"Особисті дані","/account/orders":"Замовлення","/account/favorites":"Обране","/account/password":"Змінити пароль"}[d.pathname]||"Особисті дані";return u.jsxs(VB,{children:[n&&u.jsx(g_,{onClose:()=>r(!1),onConfirm:f}),u.jsxs(UB,{children:[u.jsx(WB,{children:((x=(p=i||i)==null?void 0:p[0])==null?void 0:x.toUpperCase())||"?"}),u.jsxs("div",{children:[u.jsx(HB,{children:i}),u.jsx(GB,{children:a})]})]}),u.jsxs(qB,{onClick:()=>t(w=>!w),children:[m,e?u.jsx(wO,{size:22}):u.jsx(yO,{size:22})]}),e&&u.jsxs(YB,{children:[u.jsx(zs,{to:"/account/profile",onClick:()=>t(!1),children:"Особисті дані"}),u.jsx(zs,{to:"/account/orders",onClick:()=>t(!1),children:"Замовлення"}),u.jsx(zs,{to:"/account/password",onClick:()=>t(!1),children:"Змінити пароль"}),u.jsx(zs,{className:"logout",onClick:()=>r(!0),children:"Вийти"})]})]})},KB=()=>{const e=BB({maxWidth:767});return u.jsxs(h9,{className:"container",children:[e?u.jsx(XB,{}):u.jsx(sB,{}),u.jsx(m9,{children:u.jsx(Vx,{})})]})},QB=C.div`
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
`,ZB=C.h2`
  margin-bottom: 28px;
`,Fs=C.label`
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
`,JB=C.button`
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
`,Sx=()=>{const[e,t]=y.useState({first_name:"",last_name:"",email:"",phone:""}),[n,r]=y.useState({first_name:"",last_name:"",email:"",phone:""}),[i,o]=y.useState(null),[a,l]=y.useState(!0);y.useEffect(()=>{(async()=>{try{const v=localStorage.getItem("token"),p=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${v}`}})).json();o(p.id);const x={first_name:p.first_name||"",last_name:p.last_name||"",email:p.email||"",phone:p.phone||""};r(x),t(x)}catch(v){console.error(v)}finally{l(!1)}})()},[]);const s=f=>{const{name:v,value:m}=f.target;r(p=>({...p,[v]:m}))},c=n.first_name!==e.first_name||n.last_name!==e.last_name||n.phone!==e.phone,d=async()=>{try{const f=localStorage.getItem("token"),v=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${i}`,{method:"PUT",headers:{Authorization:`Bearer ${f}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:n.first_name,last_name:n.last_name,phone:n.phone})});if(!v.ok)throw new Error("Помилка оновлення");const m=await v.json();localStorage.setItem("user",JSON.stringify(m)),t(n),K.success("Дані оновлено успішно")}catch(f){console.error(f),K.error("Не вдалось оновити дані")}};return a?u.jsx("p",{children:"Завантаження..."}):u.jsxs(QB,{children:[u.jsx(Ln,{autoClose:1500}),u.jsx(ZB,{children:"Особисті дані"}),u.jsxs(Fs,{children:["Ім я",u.jsx(Ns,{name:"first_name",value:n.first_name,onChange:s})]}),u.jsxs(Fs,{children:["Прізвище",u.jsx(Ns,{name:"last_name",value:n.last_name,onChange:s})]}),u.jsxs(Fs,{children:["Email",u.jsx(Ns,{value:n.email,disabled:!0})]}),u.jsxs(Fs,{children:["Телефон",u.jsx(Ns,{name:"phone",value:n.phone,onChange:s})]}),u.jsx(JB,{onClick:d,disabled:!c,children:"Зберегти"})]})},eV=C.div`
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
`,tV=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,nV=C.div`
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
     box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  text-align: left;
`,rV=C.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 24px;
`,iV=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,oV=C.div`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`,aV=C.div`
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
`,sV=C.span`
  font-weight: 700;
  font-size: 16px;
`,lV=C.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  background-color: ${e=>e.status==="completed"?"#e6f4ea":e.status==="pending"?"#fff0e6":"#f1f3f4"};
  color: ${e=>e.status==="completed"?"#137333":e.status==="pending"?"#d97706":"#5f6368"};
`,cV=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,uV=C.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
  }
`,dV=C.div`
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
`,fV=C.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px dashed #e0e0e0;
  font-size: 13px;
  color: #555;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,pV=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(!0),i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));return y.useEffect(()=>{(async()=>{try{const s=await(await fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[email][$eq]=${encodeURIComponent(o.email)}`,{headers:{Authorization:`Bearer ${i}`}})).json(),c=Array.isArray(s)?s:s.data||[];t(c)}catch(l){console.error("Помилка завантаження замовлень:",l)}finally{r(!1)}})()},[i,o.email]),u.jsx(eV,{children:u.jsx(tV,{children:u.jsxs(nV,{children:[u.jsx(rV,{children:"Мої замовлення"}),n?u.jsx("p",{children:"Завантаження замовлень..."}):e.length===0?u.jsx("p",{children:"У вас поки немає замовлень."}):u.jsx(iV,{children:e.map(a=>{const l=a.attributes||a,s=typeof l.products=="string"?JSON.parse(l.products):l.products||[];return u.jsxs(oV,{children:[u.jsx(aV,{children:u.jsxs("div",{children:[u.jsxs(sV,{children:["№ ",l.order_number]}),u.jsx(lV,{status:l.status_order,children:l.status_order||"pending"})]})}),u.jsx(cV,{children:s.map(c=>u.jsxs(uV,{children:[u.jsx("img",{src:c.image,alt:c.name}),u.jsxs(dV,{children:[u.jsx("p",{children:c.name}),u.jsxs("span",{children:[c.quantity," шт. × ",c.price," грн"]})]})]},c.id))}),u.jsxs(fV,{children:[l.city&&u.jsxs("span",{children:[u.jsx("b",{children:"Місто:"})," ",l.city]}),l.delivery_method&&u.jsxs("span",{children:[u.jsx("b",{children:"Доставка:"})," ",l.delivery_method]}),l.delivery_address&&u.jsxs("span",{children:[u.jsx("b",{children:"Адреса:"})," ",l.delivery_address]}),l.ttn&&u.jsxs("span",{children:[u.jsx("b",{children:"ТТН:"})," ",l.ttn]})]})]},a.id||l.order_number)})})]})})})};function hV(){const e=Mt(),[t,n]=y.useState(!1),[r,i]=y.useState("login"),o=!!localStorage.getItem("token"),a=localStorage.getItem("token"),l=JSON.parse(localStorage.getItem("user")||"null"),s=l==null?void 0:l.documentId,c=Ue(f=>f.favorites.items),d=Ue(f=>f.cart.items);return y.useEffect(()=>{if(!a||!s)return;(async()=>{const v=localStorage.getItem("token");if(!v)return;const x=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${s}&populate=product.images`,{headers:{Authorization:`Bearer ${v}`}})).json()).data.map(w=>({...w.product,favoriteId:w.id,favoriteDocumentId:w.documentId}));e(B$(x))})()},[s,e,a]),u.jsxs(S3,{children:[u.jsx(iI,{}),u.jsx(h7,{}),u.jsxs(y.Suspense,{fallback:u.jsx(nI,{}),children:[u.jsx(Rk,{children:u.jsxs(De,{path:"/",element:u.jsx(qO,{openLogin:()=>{i("login"),n(!0)},openRegister:()=>{i("register"),n(!0)}}),children:[u.jsx(De,{index:!0,element:u.jsx(Z6,{})}),u.jsx(De,{path:"catalog",element:u.jsx(g3,{})}),u.jsx(De,{path:"/catalog/:category",element:u.jsx(UD,{})}),u.jsx(De,{path:"/product/:identifier",element:u.jsx(iR,{})}),u.jsx(De,{path:"cart",element:u.jsx(XR,{})}),u.jsx(De,{path:"favorite",element:u.jsx(n8,{})}),u.jsx(De,{path:"/catalog/new",element:u.jsx(J7,{})}),u.jsx(De,{path:"/catalog/sale",element:u.jsx(e9,{})}),u.jsx(De,{path:"checkout",element:u.jsx(YN,{})}),u.jsx(De,{path:"/order-confirmation",element:u.jsx(n7,{})}),u.jsx(De,{path:"about",element:u.jsx(p7,{})}),u.jsx(De,{path:"contacts",element:u.jsx(E7,{})}),u.jsx(De,{path:"delivery",element:u.jsx(l8,{})}),u.jsxs(De,{path:"account",element:u.jsx(p9,{isLoggedIn:o,children:u.jsx(KB,{})}),children:[u.jsx(De,{index:!0,element:u.jsx(Sx,{})}),u.jsx(De,{path:"profile",element:u.jsx(Sx,{})}),u.jsx(De,{path:"orders",element:u.jsx(pV,{})})]}),u.jsx(De,{path:"*",element:u.jsx(w3,{})})]})}),u.jsx(f9,{localFavorites:c,localCartItems:d,isOpen:t,mode:r,onClose:()=>n(!1),setMode:i})]})]})}wf.createRoot(document.getElementById("root")).render(u.jsx(Gj,{store:h_,children:u.jsx(Q.StrictMode,{children:u.jsx(Wk,{basename:"/Didiv/",children:u.jsx(hV,{})})})}));
