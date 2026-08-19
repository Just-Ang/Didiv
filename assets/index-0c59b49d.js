function h_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ba(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function jt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var yy={exports:{}},yc={},xy={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),m_=Symbol.for("react.portal"),g_=Symbol.for("react.fragment"),v_=Symbol.for("react.strict_mode"),y_=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),b_=Symbol.for("react.context"),w_=Symbol.for("react.forward_ref"),S_=Symbol.for("react.suspense"),C_=Symbol.for("react.memo"),__=Symbol.for("react.lazy"),hg=Symbol.iterator;function E_(e){return e===null||typeof e!="object"?null:(e=hg&&e[hg]||e["@@iterator"],typeof e=="function"?e:null)}var by={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wy=Object.assign,Sy={};function uo(e,t,n){this.props=e,this.context=t,this.refs=Sy,this.updater=n||by}uo.prototype.isReactComponent={};uo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};uo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cy(){}Cy.prototype=uo.prototype;function th(e,t,n){this.props=e,this.context=t,this.refs=Sy,this.updater=n||by}var nh=th.prototype=new Cy;nh.constructor=th;wy(nh,uo.prototype);nh.isPureReactComponent=!0;var mg=Array.isArray,_y=Object.prototype.hasOwnProperty,rh={current:null},Ey={key:!0,ref:!0,__self:!0,__source:!0};function ky(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)_y.call(t,r)&&!Ey.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Va,type:e,key:o,ref:a,props:i,_owner:rh.current}}function k_(e,t){return{$$typeof:Va,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ih(e){return typeof e=="object"&&e!==null&&e.$$typeof===Va}function T_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gg=/\/+/g;function Uu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?T_(""+e.key):t.toString(36)}function Bs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Va:case m_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Uu(a,0):r,mg(i)?(n="",e!=null&&(n=e.replace(gg,"$&/")+"/"),Bs(i,t,n,"",function(c){return c})):i!=null&&(ih(i)&&(i=k_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(gg,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",mg(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Uu(o,l);a+=Bs(o,t,n,s,i)}else if(s=E_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Uu(o,l++),a+=Bs(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ss(e,t,n){if(e==null)return e;var r=[],i=0;return Bs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function P_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},Vs={transition:null},O_={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Vs,ReactCurrentOwner:rh};re.Children={map:ss,forEach:function(e,t,n){ss(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ss(e,function(){t++}),t},toArray:function(e){return ss(e,function(t){return t})||[]},only:function(e){if(!ih(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=uo;re.Fragment=g_;re.Profiler=y_;re.PureComponent=th;re.StrictMode=v_;re.Suspense=S_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wy({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=rh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)_y.call(t,s)&&!Ey.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Va,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:b_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:x_,_context:e},e.Consumer=e};re.createElement=ky;re.createFactory=function(e){var t=ky.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:w_,render:e}};re.isValidElement=ih;re.lazy=function(e){return{$$typeof:__,_payload:{_status:-1,_result:e},_init:P_}};re.memo=function(e,t){return{$$typeof:C_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Vs.transition;Vs.transition={};try{e()}finally{Vs.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return yt.current.useCallback(e,t)};re.useContext=function(e){return yt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};re.useEffect=function(e,t){return yt.current.useEffect(e,t)};re.useId=function(){return yt.current.useId()};re.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return yt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};re.useRef=function(e){return yt.current.useRef(e)};re.useState=function(e){return yt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return yt.current.useTransition()};re.version="18.2.0";xy.exports=re;var b=xy.exports;const K=Ba(b),gf=h_({__proto__:null,default:K},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_=b,$_=Symbol.for("react.element"),M_=Symbol.for("react.fragment"),I_=Object.prototype.hasOwnProperty,D_=j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L_={key:!0,ref:!0,__self:!0,__source:!0};function Ty(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)I_.call(t,r)&&!L_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:$_,type:e,key:o,ref:a,props:i,_owner:D_.current}}yc.Fragment=M_;yc.jsx=Ty;yc.jsxs=Ty;yy.exports=yc;var f=yy.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}var fr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(fr||(fr={}));const vg="popstate";function A_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return vf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ml(i)}return F_(t,n,null,e)}function Me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function oh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function R_(){return Math.random().toString(36).substr(2,8)}function yg(e,t){return{usr:e.state,key:e.key,idx:t}}function vf(e,t,n,r){return n===void 0&&(n=null),fa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fo(t):t,{state:n,key:t&&t.key||r||R_()})}function ml(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function fo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function F_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=fr.Pop,s=null,c=u();c==null&&(c=0,a.replaceState(fa({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function d(){l=fr.Pop;let w=u(),p=w==null?null:w-c;c=w,s&&s({action:l,location:x.location,delta:p})}function y(w,p){l=fr.Push;let m=vf(x.location,w,p);n&&n(m,w),c=u()+1;let v=yg(m,c),S=x.createHref(m);try{a.pushState(v,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&s&&s({action:l,location:x.location,delta:1})}function g(w,p){l=fr.Replace;let m=vf(x.location,w,p);n&&n(m,w),c=u();let v=yg(m,c),S=x.createHref(m);a.replaceState(v,"",S),o&&s&&s({action:l,location:x.location,delta:0})}function h(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:ml(w);return Me(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let x={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(vg,d),s=w,()=>{i.removeEventListener(vg,d),s=null}},createHref(w){return t(i,w)},createURL:h,encodeLocation(w){let p=h(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:y,replace:g,go(w){return a.go(w)}};return x}var xg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xg||(xg={}));function z_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?fo(t):t,i=ah(r.pathname||"/",n);if(i==null)return null;let o=Py(e);N_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=X_(o[l],Z_(i));return a}function Py(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Me(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=vr([r,s.relativePath]),u=n.concat(s);o.children&&o.children.length>0&&(Me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Py(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:q_(c,o.index),routesMeta:u})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Oy(o.path))i(o,a,s)}),t}function Oy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Oy(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function N_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Y_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const B_=/^:\w+$/,V_=3,U_=2,W_=1,H_=10,G_=-2,bg=e=>e==="*";function q_(e,t){let n=e.split("/"),r=n.length;return n.some(bg)&&(r+=G_),t&&(r+=U_),n.filter(i=>!bg(i)).reduce((i,o)=>i+(B_.test(o)?V_:o===""?W_:H_),r)}function Y_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function X_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",u=K_({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!u)return null;Object.assign(r,u.params);let d=l.route;o.push({params:r,pathname:vr([i,u.pathname]),pathnameBase:nE(vr([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=vr([i,u.pathnameBase]))}return o}function K_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Q_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let y=l[d]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return c[u]=J_(l[d]||"",u),c},{}),pathname:o,pathnameBase:a,pattern:e}}function Q_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),oh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Z_(e){try{return decodeURI(e)}catch(t){return oh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function J_(e,t){try{return decodeURIComponent(e)}catch(n){return oh(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ah(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function eE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?fo(e):e;return{pathname:n?n.startsWith("/")?n:tE(n,t):t,search:rE(r),hash:iE(i)}}function tE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=fo(e):(i=fa({},e),Me(!i.pathname||!i.pathname.includes("?"),Wu("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),Wu("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),Wu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),d-=1;i.pathname=y.join("/")}l=d>=0?t[d]:"/"}let s=eE(i,l),c=a&&a!=="/"&&a.endsWith("/"),u=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||u)&&(s.pathname+="/"),s}const vr=e=>e.join("/").replace(/\/\/+/g,"/"),nE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,iE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function oE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jy=["post","put","patch","delete"];new Set(jy);const aE=["get",...jy];new Set(aE);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gl.apply(this,arguments)}const ch=b.createContext(null),$y=b.createContext(null),si=b.createContext(null),xc=b.createContext(null),In=b.createContext({outlet:null,matches:[],isDataRoute:!1}),My=b.createContext(null);function sE(e,t){let{relative:n}=t===void 0?{}:t;po()||Me(!1);let{basename:r,navigator:i}=b.useContext(si),{hash:o,pathname:a,search:l}=uh(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:vr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function po(){return b.useContext(xc)!=null}function er(){return po()||Me(!1),b.useContext(xc).location}function Iy(e){b.useContext(si).static||b.useLayoutEffect(e)}function $t(){let{isDataRoute:e}=b.useContext(In);return e?SE():lE()}function lE(){po()||Me(!1);let e=b.useContext(ch),{basename:t,navigator:n}=b.useContext(si),{matches:r}=b.useContext(In),{pathname:i}=er(),o=JSON.stringify(sh(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return Iy(()=>{a.current=!0}),b.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let u=lh(s,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:vr([t,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[t,n,o,i,e])}const cE=b.createContext(null);function uE(e){let t=b.useContext(In).outlet;return t&&b.createElement(cE.Provider,{value:e},t)}function Dy(){let{matches:e}=b.useContext(In),t=e[e.length-1];return t?t.params:{}}function uh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(In),{pathname:i}=er(),o=JSON.stringify(sh(r).map(a=>a.pathnameBase));return b.useMemo(()=>lh(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function dE(e,t){return fE(e,t)}function fE(e,t,n){po()||Me(!1);let{navigator:r}=b.useContext(si),{matches:i}=b.useContext(In),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=er(),c;if(t){var u;let x=typeof t=="string"?fo(t):t;l==="/"||(u=x.pathname)!=null&&u.startsWith(l)||Me(!1),c=x}else c=s;let d=c.pathname||"/",y=l==="/"?d:d.slice(l.length)||"/",g=z_(e,{pathname:y}),h=vE(g&&g.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:vr([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:vr([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&h?b.createElement(xc.Provider,{value:{location:gl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:fr.Pop}},h):h}function pE(){let e=wE(),t=oE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const hE=b.createElement(pE,null);class mE extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(In.Provider,{value:this.props.routeContext},b.createElement(My.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gE(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(ch);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(In.Provider,{value:t},r)}function vE(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Me(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,c)=>{let u=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||hE);let y=t.concat(o.slice(0,c+1)),g=()=>{let h;return u?h=d:s.route.Component?h=b.createElement(s.route.Component,null):s.route.element?h=s.route.element:h=l,b.createElement(gE,{match:s,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:h})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?b.createElement(mE,{location:n.location,revalidation:n.revalidation,component:d,error:u,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var Ly=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ly||{}),vl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vl||{});function yE(e){let t=b.useContext(ch);return t||Me(!1),t}function xE(e){let t=b.useContext($y);return t||Me(!1),t}function bE(e){let t=b.useContext(In);return t||Me(!1),t}function Ay(e){let t=bE(),n=t.matches[t.matches.length-1];return n.route.id||Me(!1),n.route.id}function wE(){var e;let t=b.useContext(My),n=xE(vl.UseRouteError),r=Ay(vl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function SE(){let{router:e}=yE(Ly.UseNavigateStable),t=Ay(vl.UseNavigateStable),n=b.useRef(!1);return Iy(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,gl({fromRouteId:t},o)))},[e,t])}function CE(e){let{to:t,replace:n,state:r,relative:i}=e;po()||Me(!1);let{matches:o}=b.useContext(In),{pathname:a}=er(),l=$t(),s=lh(t,sh(o).map(u=>u.pathnameBase),a,i==="path"),c=JSON.stringify(s);return b.useEffect(()=>l(JSON.parse(c),{replace:n,state:r,relative:i}),[l,c,i,n,r]),null}function Ry(e){return uE(e.context)}function Ne(e){Me(!1)}function _E(e){let{basename:t="/",children:n=null,location:r,navigationType:i=fr.Pop,navigator:o,static:a=!1}=e;po()&&Me(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=fo(r));let{pathname:c="/",search:u="",hash:d="",state:y=null,key:g="default"}=r,h=b.useMemo(()=>{let x=ah(c,l);return x==null?null:{location:{pathname:x,search:u,hash:d,state:y,key:g},navigationType:i}},[l,c,u,d,y,g,i]);return h==null?null:b.createElement(si.Provider,{value:s},b.createElement(xc.Provider,{children:n,value:h}))}function EE(e){let{children:t,location:n}=e;return dE(yf(t),n)}new Promise(()=>{});function yf(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,yf(r.props.children,o));return}r.type!==Ne&&Me(!1),!r.props.index||!r.props.children||Me(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=yf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yl(){return yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yl.apply(this,arguments)}function Fy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function kE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function TE(e,t){return e.button===0&&(!t||t==="_self")&&!kE(e)}function xf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function PE(e,t){let n=xf(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const OE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],jE=["aria-current","caseSensitive","className","end","style","to","children"],$E="startTransition",wg=gf[$E];function ME(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=A_({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},u=b.useCallback(d=>{c&&wg?wg(()=>s(d)):s(d)},[s,c]);return b.useLayoutEffect(()=>a.listen(u),[a,u]),b.createElement(_E,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const IE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:u}=t,d=Fy(t,OE),{basename:y}=b.useContext(si),g,h=!1;if(typeof c=="string"&&DE.test(c)&&(g=c,IE))try{let m=new URL(window.location.href),v=c.startsWith("//")?new URL(m.protocol+c):new URL(c),S=ah(v.pathname,y);v.origin===m.origin&&S!=null?c=S+v.search+v.hash:h=!0}catch{}let x=sE(c,{relative:i}),w=LE(c,{replace:a,state:l,target:s,preventScrollReset:u,relative:i});function p(m){r&&r(m),m.defaultPrevented||w(m)}return b.createElement("a",yl({},d,{href:g||x,onClick:h||o?r:p,ref:n,target:s}))}),zy=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,children:c}=t,u=Fy(t,jE),d=uh(s,{relative:u.relative}),y=er(),g=b.useContext($y),{navigator:h}=b.useContext(si),x=h.encodeLocation?h.encodeLocation(d).pathname:d.pathname,w=y.pathname,p=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(w=w.toLowerCase(),p=p?p.toLowerCase():null,x=x.toLowerCase());let m=w===x||!a&&w.startsWith(x)&&w.charAt(x.length)==="/",v=p!=null&&(p===x||!a&&p.startsWith(x)&&p.charAt(x.length)==="/"),S=m?r:void 0,E;typeof o=="function"?E=o({isActive:m,isPending:v}):E=[o,m?"active":null,v?"pending":null].filter(Boolean).join(" ");let P=typeof l=="function"?l({isActive:m,isPending:v}):l;return b.createElement(Te,yl({},u,{"aria-current":S,className:E,ref:n,style:P,to:s}),typeof c=="function"?c({isActive:m,isPending:v}):c)});var Sg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Sg||(Sg={}));var Cg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cg||(Cg={}));function LE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=$t(),s=er(),c=uh(e,{relative:a});return b.useCallback(u=>{if(TE(u,n)){u.preventDefault();let d=r!==void 0?r:ml(s)===ml(c);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}function AE(e){let t=b.useRef(xf(e)),n=b.useRef(!1),r=er(),i=b.useMemo(()=>PE(r.search,n.current?null:t.current),[r.search]),o=$t(),a=b.useCallback((l,s)=>{const c=xf(typeof l=="function"?l(i):l);n.current=!0,o("?"+c,s)},[o,i]);return[i,a]}var bf={},Ny={exports:{}},Vt={},By={exports:{}},Vy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,j){var z=T.length;T.push(j);e:for(;0<z;){var B=z-1>>>1,N=T[B];if(0<i(N,j))T[B]=j,T[z]=N,z=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var j=T[0],z=T.pop();if(z!==j){T[0]=z;e:for(var B=0,N=T.length,U=N>>>1;B<U;){var G=2*(B+1)-1,W=T[G],Y=G+1,ee=T[Y];if(0>i(W,z))Y<N&&0>i(ee,W)?(T[B]=ee,T[Y]=z,B=Y):(T[B]=W,T[G]=z,B=G);else if(Y<N&&0>i(ee,z))T[B]=ee,T[Y]=z,B=Y;else break e}}return j}function i(T,j){var z=T.sortIndex-j.sortIndex;return z!==0?z:T.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],u=1,d=null,y=3,g=!1,h=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=T)r(c),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(c)}}function S(T){if(x=!1,v(T),!h)if(n(s)!==null)h=!0,A(E);else{var j=n(c);j!==null&&R(S,j.startTime-T)}}function E(T,j){h=!1,x&&(x=!1,p(_),_=-1),g=!0;var z=y;try{for(v(j),d=n(s);d!==null&&(!(d.expirationTime>j)||T&&!I());){var B=d.callback;if(typeof B=="function"){d.callback=null,y=d.priorityLevel;var N=B(d.expirationTime<=j);j=e.unstable_now(),typeof N=="function"?d.callback=N:d===n(s)&&r(s),v(j)}else r(s);d=n(s)}if(d!==null)var U=!0;else{var G=n(c);G!==null&&R(S,G.startTime-j),U=!1}return U}finally{d=null,y=z,g=!1}}var P=!1,k=null,_=-1,$=5,M=-1;function I(){return!(e.unstable_now()-M<$)}function D(){if(k!==null){var T=e.unstable_now();M=T;var j=!0;try{j=k(!0,T)}finally{j?O():(P=!1,k=null)}}else P=!1}var O;if(typeof m=="function")O=function(){m(D)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,L=F.port2;F.port1.onmessage=D,O=function(){L.postMessage(null)}}else O=function(){w(D,0)};function A(T){k=T,P||(P=!0,O())}function R(T,j){_=w(function(){T(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){h||g||(h=!0,A(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(y){case 1:case 2:case 3:var j=3;break;default:j=y}var z=y;y=j;try{return T()}finally{y=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=y;y=T;try{return j()}finally{y=z}},e.unstable_scheduleCallback=function(T,j,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,T){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=z+N,T={id:u++,callback:j,priorityLevel:T,startTime:z,expirationTime:N,sortIndex:-1},z>B?(T.sortIndex=z,t(c,T),n(s)===null&&T===n(c)&&(x?(p(_),_=-1):x=!0,R(S,z-B))):(T.sortIndex=N,t(s,T),h||g||(h=!0,A(E))),T},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(T){var j=y;return function(){var z=y;y=j;try{return T.apply(this,arguments)}finally{y=z}}}})(Vy);By.exports=Vy;var RE=By.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy=b,Nt=RE;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wy=new Set,pa={};function li(e,t){Yi(e,t),Yi(e+"Capture",t)}function Yi(e,t){for(pa[e]=t,e=0;e<t.length;e++)Wy.add(t[e])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wf=Object.prototype.hasOwnProperty,FE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_g={},Eg={};function zE(e){return wf.call(Eg,e)?!0:wf.call(_g,e)?!1:FE.test(e)?Eg[e]=!0:(_g[e]=!0,!1)}function NE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function BE(e,t,n,r){if(t===null||typeof t>"u"||NE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new xt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new xt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new xt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new xt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new xt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new xt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new xt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new xt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new xt(e,5,!1,e.toLowerCase(),null,!1,!1)});var dh=/[\-:]([a-z])/g;function fh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dh,fh);nt[t]=new xt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dh,fh);nt[t]=new xt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dh,fh);nt[t]=new xt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new xt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new xt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ph(e,t,n,r){var i=nt.hasOwnProperty(t)?nt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(BE(t,n,i,r)&&(n=null),r||i===null?zE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tr=Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ls=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),Sf=Symbol.for("react.profiler"),Hy=Symbol.for("react.provider"),Gy=Symbol.for("react.context"),mh=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),_f=Symbol.for("react.suspense_list"),gh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),qy=Symbol.for("react.offscreen"),kg=Symbol.iterator;function To(e){return e===null||typeof e!="object"?null:(e=kg&&e[kg]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Hu;function Wo(e){if(Hu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hu=t&&t[1]||""}return`
`+Hu+e}var Gu=!1;function qu(e,t){if(!e||Gu)return"";Gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Gu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wo(e):""}function VE(e){switch(e.tag){case 5:return Wo(e.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return e=qu(e.type,!1),e;case 11:return e=qu(e.type.render,!1),e;case 1:return e=qu(e.type,!0),e;default:return""}}function Ef(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pi:return"Fragment";case Ti:return"Portal";case Sf:return"Profiler";case hh:return"StrictMode";case Cf:return"Suspense";case _f:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gy:return(e.displayName||"Context")+".Consumer";case Hy:return(e._context.displayName||"Context")+".Provider";case mh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gh:return t=e.displayName||null,t!==null?t:Ef(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return Ef(e(t))}catch{}}return null}function UE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(t);case 8:return t===hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function WE(e){var t=Yy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cs(e){e._valueTracker||(e._valueTracker=WE(e))}function Xy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kf(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ky(e,t){t=t.checked,t!=null&&ph(e,"checked",t,!1)}function Tf(e,t){Ky(e,t);var n=Tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pf(e,t.type,Tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pf(e,t,n){(t!=="number"||xl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ho=Array.isArray;function zi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Of(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Og(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Ho(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tr(n)}}function Qy(e,t){var n=Tr(t.value),r=Tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var us,Jy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(us=us||document.createElement("div"),us.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=us.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ha(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HE=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(e){HE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jo[t]=Jo[e]})});function ex(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jo.hasOwnProperty(e)&&Jo[e]?(""+t).trim():t+"px"}function tx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ex(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var GE=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $f(e,t){if(t){if(GE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function Mf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var If=null;function vh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Df=null,Ni=null,Bi=null;function $g(e){if(e=Ha(e)){if(typeof Df!="function")throw Error(V(280));var t=e.stateNode;t&&(t=_c(t),Df(e.stateNode,e.type,t))}}function nx(e){Ni?Bi?Bi.push(e):Bi=[e]:Ni=e}function rx(){if(Ni){var e=Ni,t=Bi;if(Bi=Ni=null,$g(e),t)for(e=0;e<t.length;e++)$g(t[e])}}function ix(e,t){return e(t)}function ox(){}var Yu=!1;function ax(e,t,n){if(Yu)return e(t,n);Yu=!0;try{return ix(e,t,n)}finally{Yu=!1,(Ni!==null||Bi!==null)&&(ox(),rx())}}function ma(e,t){var n=e.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var Lf=!1;if(Yn)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{Lf=!1}function qE(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var ea=!1,bl=null,wl=!1,Af=null,YE={onError:function(e){ea=!0,bl=e}};function XE(e,t,n,r,i,o,a,l,s){ea=!1,bl=null,qE.apply(YE,arguments)}function KE(e,t,n,r,i,o,a,l,s){if(XE.apply(this,arguments),ea){if(ea){var c=bl;ea=!1,bl=null}else throw Error(V(198));wl||(wl=!0,Af=c)}}function ci(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mg(e){if(ci(e)!==e)throw Error(V(188))}function QE(e){var t=e.alternate;if(!t){if(t=ci(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Mg(i),e;if(o===r)return Mg(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function lx(e){return e=QE(e),e!==null?cx(e):null}function cx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cx(e);if(t!==null)return t;e=e.sibling}return null}var ux=Nt.unstable_scheduleCallback,Ig=Nt.unstable_cancelCallback,ZE=Nt.unstable_shouldYield,JE=Nt.unstable_requestPaint,$e=Nt.unstable_now,ek=Nt.unstable_getCurrentPriorityLevel,yh=Nt.unstable_ImmediatePriority,dx=Nt.unstable_UserBlockingPriority,Sl=Nt.unstable_NormalPriority,tk=Nt.unstable_LowPriority,fx=Nt.unstable_IdlePriority,bc=null,Tn=null;function nk(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(bc,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:ok,rk=Math.log,ik=Math.LN2;function ok(e){return e>>>=0,e===0?32:31-(rk(e)/ik|0)|0}var ds=64,fs=4194304;function Go(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Go(l):(o&=a,o!==0&&(r=Go(o)))}else a=n&~i,a!==0?r=Go(a):o!==0&&(r=Go(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dn(t),i=1<<n,r|=e[n],t&=~i;return r}function ak(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-dn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=ak(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Rf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function px(){var e=ds;return ds<<=1,!(ds&4194240)&&(ds=64),e}function Xu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ua(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dn(t),e[t]=n}function lk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function hx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mx,bh,gx,vx,yx,Ff=!1,ps=[],yr=null,xr=null,br=null,ga=new Map,va=new Map,ur=[],ck="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dg(e,t){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":ga.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(t.pointerId)}}function Oo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ha(t),t!==null&&bh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function uk(e,t,n,r,i){switch(t){case"focusin":return yr=Oo(yr,e,t,n,r,i),!0;case"dragenter":return xr=Oo(xr,e,t,n,r,i),!0;case"mouseover":return br=Oo(br,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ga.set(o,Oo(ga.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,va.set(o,Oo(va.get(o)||null,e,t,n,r,i)),!0}return!1}function xx(e){var t=Ur(e.target);if(t!==null){var n=ci(t);if(n!==null){if(t=n.tag,t===13){if(t=sx(n),t!==null){e.blockedOn=t,yx(e.priority,function(){gx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);If=r,n.target.dispatchEvent(r),If=null}else return t=Ha(n),t!==null&&bh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lg(e,t,n){Us(e)&&n.delete(t)}function dk(){Ff=!1,yr!==null&&Us(yr)&&(yr=null),xr!==null&&Us(xr)&&(xr=null),br!==null&&Us(br)&&(br=null),ga.forEach(Lg),va.forEach(Lg)}function jo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ff||(Ff=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,dk)))}function ya(e){function t(i){return jo(i,e)}if(0<ps.length){jo(ps[0],e);for(var n=1;n<ps.length;n++){var r=ps[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yr!==null&&jo(yr,e),xr!==null&&jo(xr,e),br!==null&&jo(br,e),ga.forEach(t),va.forEach(t),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)xx(n),n.blockedOn===null&&ur.shift()}var Vi=tr.ReactCurrentBatchConfig,_l=!0;function fk(e,t,n,r){var i=me,o=Vi.transition;Vi.transition=null;try{me=1,wh(e,t,n,r)}finally{me=i,Vi.transition=o}}function pk(e,t,n,r){var i=me,o=Vi.transition;Vi.transition=null;try{me=4,wh(e,t,n,r)}finally{me=i,Vi.transition=o}}function wh(e,t,n,r){if(_l){var i=zf(e,t,n,r);if(i===null)od(e,t,r,El,n),Dg(e,r);else if(uk(i,e,t,n,r))r.stopPropagation();else if(Dg(e,r),t&4&&-1<ck.indexOf(e)){for(;i!==null;){var o=Ha(i);if(o!==null&&mx(o),o=zf(e,t,n,r),o===null&&od(e,t,r,El,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else od(e,t,r,null,n)}}var El=null;function zf(e,t,n,r){if(El=null,e=vh(r),e=Ur(e),e!==null)if(t=ci(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return El=e,null}function bx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ek()){case yh:return 1;case dx:return 4;case Sl:case tk:return 16;case fx:return 536870912;default:return 16}default:return 16}}var pr=null,Sh=null,Ws=null;function wx(){if(Ws)return Ws;var e,t=Sh,n=t.length,r,i="value"in pr?pr.value:pr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ws=i.slice(e,1<r?1-r:void 0)}function Hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hs(){return!0}function Ag(){return!1}function Ut(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hs:Ag,this.isPropagationStopped=Ag,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),t}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=Ut(ho),Wa=Pe({},ho,{view:0,detail:0}),hk=Ut(Wa),Ku,Qu,$o,wc=Pe({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_h,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$o&&($o&&e.type==="mousemove"?(Ku=e.screenX-$o.screenX,Qu=e.screenY-$o.screenY):Qu=Ku=0,$o=e),Ku)},movementY:function(e){return"movementY"in e?e.movementY:Qu}}),Rg=Ut(wc),mk=Pe({},wc,{dataTransfer:0}),gk=Ut(mk),vk=Pe({},Wa,{relatedTarget:0}),Zu=Ut(vk),yk=Pe({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),xk=Ut(yk),bk=Pe({},ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wk=Ut(bk),Sk=Pe({},ho,{data:0}),Fg=Ut(Sk),Ck={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_k={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ek={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ek[e])?!!t[e]:!1}function _h(){return kk}var Tk=Pe({},Wa,{key:function(e){if(e.key){var t=Ck[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_k[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_h,charCode:function(e){return e.type==="keypress"?Hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pk=Ut(Tk),Ok=Pe({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zg=Ut(Ok),jk=Pe({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_h}),$k=Ut(jk),Mk=Pe({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ik=Ut(Mk),Dk=Pe({},wc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lk=Ut(Dk),Ak=[9,13,27,32],Eh=Yn&&"CompositionEvent"in window,ta=null;Yn&&"documentMode"in document&&(ta=document.documentMode);var Rk=Yn&&"TextEvent"in window&&!ta,Sx=Yn&&(!Eh||ta&&8<ta&&11>=ta),Ng=String.fromCharCode(32),Bg=!1;function Cx(e,t){switch(e){case"keyup":return Ak.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _x(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oi=!1;function Fk(e,t){switch(e){case"compositionend":return _x(t);case"keypress":return t.which!==32?null:(Bg=!0,Ng);case"textInput":return e=t.data,e===Ng&&Bg?null:e;default:return null}}function zk(e,t){if(Oi)return e==="compositionend"||!Eh&&Cx(e,t)?(e=wx(),Ws=Sh=pr=null,Oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sx&&t.locale!=="ko"?null:t.data;default:return null}}var Nk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nk[e.type]:t==="textarea"}function Ex(e,t,n,r){nx(r),t=kl(t,"onChange"),0<t.length&&(n=new Ch("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var na=null,xa=null;function Bk(e){Ax(e,0)}function Sc(e){var t=Mi(e);if(Xy(t))return e}function Vk(e,t){if(e==="change")return t}var kx=!1;if(Yn){var Ju;if(Yn){var ed="oninput"in document;if(!ed){var Ug=document.createElement("div");Ug.setAttribute("oninput","return;"),ed=typeof Ug.oninput=="function"}Ju=ed}else Ju=!1;kx=Ju&&(!document.documentMode||9<document.documentMode)}function Wg(){na&&(na.detachEvent("onpropertychange",Tx),xa=na=null)}function Tx(e){if(e.propertyName==="value"&&Sc(xa)){var t=[];Ex(t,xa,e,vh(e)),ax(Bk,t)}}function Uk(e,t,n){e==="focusin"?(Wg(),na=t,xa=n,na.attachEvent("onpropertychange",Tx)):e==="focusout"&&Wg()}function Wk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sc(xa)}function Hk(e,t){if(e==="click")return Sc(t)}function Gk(e,t){if(e==="input"||e==="change")return Sc(t)}function qk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:qk;function ba(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wf.call(t,i)||!gn(e[i],t[i]))return!1}return!0}function Hg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gg(e,t){var n=Hg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hg(n)}}function Px(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Px(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ox(){for(var e=window,t=xl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xl(e.document)}return t}function kh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yk(e){var t=Ox(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Px(n.ownerDocument.documentElement,n)){if(r!==null&&kh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Gg(n,o);var a=Gg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xk=Yn&&"documentMode"in document&&11>=document.documentMode,ji=null,Nf=null,ra=null,Bf=!1;function qg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bf||ji==null||ji!==xl(r)||(r=ji,"selectionStart"in r&&kh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&ba(ra,r)||(ra=r,r=kl(Nf,"onSelect"),0<r.length&&(t=new Ch("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ji)))}function ms(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $i={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionend:ms("Transition","TransitionEnd")},td={},jx={};Yn&&(jx=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function Cc(e){if(td[e])return td[e];if(!$i[e])return e;var t=$i[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jx)return td[e]=t[n];return e}var $x=Cc("animationend"),Mx=Cc("animationiteration"),Ix=Cc("animationstart"),Dx=Cc("transitionend"),Lx=new Map,Yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){Lx.set(e,t),li(t,[e])}for(var nd=0;nd<Yg.length;nd++){var rd=Yg[nd],Kk=rd.toLowerCase(),Qk=rd[0].toUpperCase()+rd.slice(1);jr(Kk,"on"+Qk)}jr($x,"onAnimationEnd");jr(Mx,"onAnimationIteration");jr(Ix,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Dx,"onTransitionEnd");Yi("onMouseEnter",["mouseout","mouseover"]);Yi("onMouseLeave",["mouseout","mouseover"]);Yi("onPointerEnter",["pointerout","pointerover"]);Yi("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zk=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Xg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,KE(r,t,void 0,e),e.currentTarget=null}function Ax(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Xg(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Xg(i,l,c),o=s}}}if(wl)throw e=Af,wl=!1,Af=null,e}function ye(e,t){var n=t[Gf];n===void 0&&(n=t[Gf]=new Set);var r=e+"__bubble";n.has(r)||(Rx(t,e,2,!1),n.add(r))}function id(e,t,n){var r=0;t&&(r|=4),Rx(n,e,r,t)}var gs="_reactListening"+Math.random().toString(36).slice(2);function wa(e){if(!e[gs]){e[gs]=!0,Wy.forEach(function(n){n!=="selectionchange"&&(Zk.has(n)||id(n,!1,e),id(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gs]||(t[gs]=!0,id("selectionchange",!1,t))}}function Rx(e,t,n,r){switch(bx(t)){case 1:var i=fk;break;case 4:i=pk;break;default:i=wh}n=i.bind(null,t,n,e),i=void 0,!Lf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function od(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Ur(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ax(function(){var c=o,u=vh(n),d=[];e:{var y=Lx.get(e);if(y!==void 0){var g=Ch,h=e;switch(e){case"keypress":if(Hs(n)===0)break e;case"keydown":case"keyup":g=Pk;break;case"focusin":h="focus",g=Zu;break;case"focusout":h="blur",g=Zu;break;case"beforeblur":case"afterblur":g=Zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=gk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=$k;break;case $x:case Mx:case Ix:g=xk;break;case Dx:g=Ik;break;case"scroll":g=hk;break;case"wheel":g=Lk;break;case"copy":case"cut":case"paste":g=wk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=zg}var x=(t&4)!==0,w=!x&&e==="scroll",p=x?y!==null?y+"Capture":null:y;x=[];for(var m=c,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,p!==null&&(S=ma(m,p),S!=null&&x.push(Sa(m,S,v)))),w)break;m=m.return}0<x.length&&(y=new g(y,h,null,n,u),d.push({event:y,listeners:x}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",y&&n!==If&&(h=n.relatedTarget||n.fromElement)&&(Ur(h)||h[Xn]))break e;if((g||y)&&(y=u.window===u?u:(y=u.ownerDocument)?y.defaultView||y.parentWindow:window,g?(h=n.relatedTarget||n.toElement,g=c,h=h?Ur(h):null,h!==null&&(w=ci(h),h!==w||h.tag!==5&&h.tag!==6)&&(h=null)):(g=null,h=c),g!==h)){if(x=Rg,S="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=zg,S="onPointerLeave",p="onPointerEnter",m="pointer"),w=g==null?y:Mi(g),v=h==null?y:Mi(h),y=new x(S,m+"leave",g,n,u),y.target=w,y.relatedTarget=v,S=null,Ur(u)===c&&(x=new x(p,m+"enter",h,n,u),x.target=v,x.relatedTarget=w,S=x),w=S,g&&h)t:{for(x=g,p=h,m=0,v=x;v;v=hi(v))m++;for(v=0,S=p;S;S=hi(S))v++;for(;0<m-v;)x=hi(x),m--;for(;0<v-m;)p=hi(p),v--;for(;m--;){if(x===p||p!==null&&x===p.alternate)break t;x=hi(x),p=hi(p)}x=null}else x=null;g!==null&&Kg(d,y,g,x,!1),h!==null&&w!==null&&Kg(d,w,h,x,!0)}}e:{if(y=c?Mi(c):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var E=Vk;else if(Vg(y))if(kx)E=Gk;else{E=Wk;var P=Uk}else(g=y.nodeName)&&g.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(E=Hk);if(E&&(E=E(e,c))){Ex(d,E,n,u);break e}P&&P(e,y,c),e==="focusout"&&(P=y._wrapperState)&&P.controlled&&y.type==="number"&&Pf(y,"number",y.value)}switch(P=c?Mi(c):window,e){case"focusin":(Vg(P)||P.contentEditable==="true")&&(ji=P,Nf=c,ra=null);break;case"focusout":ra=Nf=ji=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,qg(d,n,u);break;case"selectionchange":if(Xk)break;case"keydown":case"keyup":qg(d,n,u)}var k;if(Eh)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Oi?Cx(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Sx&&n.locale!=="ko"&&(Oi||_!=="onCompositionStart"?_==="onCompositionEnd"&&Oi&&(k=wx()):(pr=u,Sh="value"in pr?pr.value:pr.textContent,Oi=!0)),P=kl(c,_),0<P.length&&(_=new Fg(_,e,null,n,u),d.push({event:_,listeners:P}),k?_.data=k:(k=_x(n),k!==null&&(_.data=k)))),(k=Rk?Fk(e,n):zk(e,n))&&(c=kl(c,"onBeforeInput"),0<c.length&&(u=new Fg("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=k))}Ax(d,t)})}function Sa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ma(e,n),o!=null&&r.unshift(Sa(e,o,i)),o=ma(e,t),o!=null&&r.push(Sa(e,o,i))),e=e.return}return r}function hi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=ma(n,o),s!=null&&a.unshift(Sa(n,s,l))):i||(s=ma(n,o),s!=null&&a.push(Sa(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Jk=/\r\n?/g,eT=/\u0000|\uFFFD/g;function Qg(e){return(typeof e=="string"?e:""+e).replace(Jk,`
`).replace(eT,"")}function vs(e,t,n){if(t=Qg(t),Qg(e)!==t&&n)throw Error(V(425))}function Tl(){}var Vf=null,Uf=null;function Wf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hf=typeof setTimeout=="function"?setTimeout:void 0,tT=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,nT=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(e){return Zg.resolve(null).then(e).catch(rT)}:Hf;function rT(e){setTimeout(function(){throw e})}function ad(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ya(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ya(t)}function wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mo=Math.random().toString(36).slice(2),En="__reactFiber$"+mo,Ca="__reactProps$"+mo,Xn="__reactContainer$"+mo,Gf="__reactEvents$"+mo,iT="__reactListeners$"+mo,oT="__reactHandles$"+mo;function Ur(e){var t=e[En];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xn]||n[En]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jg(e);e!==null;){if(n=e[En])return n;e=Jg(e)}return t}e=n,n=e.parentNode}return null}function Ha(e){return e=e[En]||e[Xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function _c(e){return e[Ca]||null}var qf=[],Ii=-1;function $r(e){return{current:e}}function be(e){0>Ii||(e.current=qf[Ii],qf[Ii]=null,Ii--)}function ve(e,t){Ii++,qf[Ii]=e.current,e.current=t}var Pr={},ut=$r(Pr),kt=$r(!1),Kr=Pr;function Xi(e,t){var n=e.type.contextTypes;if(!n)return Pr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(e){return e=e.childContextTypes,e!=null}function Pl(){be(kt),be(ut)}function e0(e,t,n){if(ut.current!==Pr)throw Error(V(168));ve(ut,t),ve(kt,n)}function Fx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,UE(e)||"Unknown",i));return Pe({},n,r)}function Ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pr,Kr=ut.current,ve(ut,e),ve(kt,kt.current),!0}function t0(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Fx(e,t,Kr),r.__reactInternalMemoizedMergedChildContext=e,be(kt),be(ut),ve(ut,e)):be(kt),ve(kt,n)}var Nn=null,Ec=!1,sd=!1;function zx(e){Nn===null?Nn=[e]:Nn.push(e)}function aT(e){Ec=!0,zx(e)}function Mr(){if(!sd&&Nn!==null){sd=!0;var e=0,t=me;try{var n=Nn;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nn=null,Ec=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(e+1)),ux(yh,Mr),i}finally{me=t,sd=!1}}return null}var Di=[],Li=0,jl=null,$l=0,qt=[],Yt=0,Qr=null,Un=1,Wn="";function Rr(e,t){Di[Li++]=$l,Di[Li++]=jl,jl=e,$l=t}function Nx(e,t,n){qt[Yt++]=Un,qt[Yt++]=Wn,qt[Yt++]=Qr,Qr=e;var r=Un;e=Wn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var o=32-dn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Un=1<<32-dn(t)+i|n<<i|r,Wn=o+e}else Un=1<<o|n<<i|r,Wn=e}function Th(e){e.return!==null&&(Rr(e,1),Nx(e,1,0))}function Ph(e){for(;e===jl;)jl=Di[--Li],Di[Li]=null,$l=Di[--Li],Di[Li]=null;for(;e===Qr;)Qr=qt[--Yt],qt[Yt]=null,Wn=qt[--Yt],qt[Yt]=null,Un=qt[--Yt],qt[Yt]=null}var Ft=null,At=null,_e=!1,cn=null;function Bx(e,t){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function n0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ft=e,At=wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ft=e,At=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qr!==null?{id:Un,overflow:Wn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ft=e,At=null,!0):!1;default:return!1}}function Yf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xf(e){if(_e){var t=At;if(t){var n=t;if(!n0(e,t)){if(Yf(e))throw Error(V(418));t=wr(n.nextSibling);var r=Ft;t&&n0(e,t)?Bx(r,n):(e.flags=e.flags&-4097|2,_e=!1,Ft=e)}}else{if(Yf(e))throw Error(V(418));e.flags=e.flags&-4097|2,_e=!1,Ft=e}}}function r0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ft=e}function ys(e){if(e!==Ft)return!1;if(!_e)return r0(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wf(e.type,e.memoizedProps)),t&&(t=At)){if(Yf(e))throw Vx(),Error(V(418));for(;t;)Bx(e,t),t=wr(t.nextSibling)}if(r0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){At=wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}At=null}}else At=Ft?wr(e.stateNode.nextSibling):null;return!0}function Vx(){for(var e=At;e;)e=wr(e.nextSibling)}function Ki(){At=Ft=null,_e=!1}function Oh(e){cn===null?cn=[e]:cn.push(e)}var sT=tr.ReactCurrentBatchConfig;function an(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ml=$r(null),Il=null,Ai=null,jh=null;function $h(){jh=Ai=Il=null}function Mh(e){var t=Ml.current;be(Ml),e._currentValue=t}function Kf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ui(e,t){Il=e,jh=Ai=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function Qt(e){var t=e._currentValue;if(jh!==e)if(e={context:e,memoizedValue:t,next:null},Ai===null){if(Il===null)throw Error(V(308));Ai=e,Il.dependencies={lanes:0,firstContext:e}}else Ai=Ai.next=e;return t}var Wr=null;function Ih(e){Wr===null?Wr=[e]:Wr.push(e)}function Ux(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ih(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kn(e,r)}function Kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cr=!1;function Dh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ih(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kn(e,n)}function Gs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xh(e,n)}}function i0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Dl(e,t,n,r){var i=e.updateQueue;cr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,u=c=s=null,l=o;do{var y=l.lane,g=l.eventTime;if((r&y)===y){u!==null&&(u=u.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,x=l;switch(y=t,g=n,x.tag){case 1:if(h=x.payload,typeof h=="function"){d=h.call(g,d,y);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=x.payload,y=typeof h=="function"?h.call(g,d,y):h,y==null)break e;d=Pe({},d,y);break e;case 2:cr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else g={eventTime:g,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=g,s=d):u=u.next=g,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(u===null&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Jr|=a,e.lanes=a,e.memoizedState=d}}function o0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Hx=new Uy.Component().refs;function Qf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kc={isMounted:function(e){return(e=e._reactInternals)?ci(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=_r(e),o=Hn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(fn(t,e,i,r),Gs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=_r(e),o=Hn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(fn(t,e,i,r),Gs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=_r(e),i=Hn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sr(e,i,r),t!==null&&(fn(t,e,r,n),Gs(t,e,r))}};function a0(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ba(n,r)||!ba(i,o):!0}function Gx(e,t,n){var r=!1,i=Pr,o=t.contextType;return typeof o=="object"&&o!==null?o=Qt(o):(i=Tt(t)?Kr:ut.current,r=t.contextTypes,o=(r=r!=null)?Xi(e,i):Pr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function s0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kc.enqueueReplaceState(t,t.state,null)}function Zf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Hx,Dh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Qt(o):(o=Tt(t)?Kr:ut.current,i.context=Xi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&kc.enqueueReplaceState(i,i.state,null),Dl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Hx&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function xs(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function l0(e){var t=e._init;return t(e._payload)}function qx(e){function t(p,m){if(e){var v=p.deletions;v===null?(p.deletions=[m],p.flags|=16):v.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=Er(p,m),p.index=0,p.sibling=null,p}function o(p,m,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<m?(p.flags|=2,m):v):(p.flags|=2,m)):(p.flags|=1048576,m)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,m,v,S){return m===null||m.tag!==6?(m=hd(v,p.mode,S),m.return=p,m):(m=i(m,v),m.return=p,m)}function s(p,m,v,S){var E=v.type;return E===Pi?u(p,m,v.props.children,S,v.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lr&&l0(E)===m.type)?(S=i(m,v.props),S.ref=Mo(p,m,v),S.return=p,S):(S=Zs(v.type,v.key,v.props,null,p.mode,S),S.ref=Mo(p,m,v),S.return=p,S)}function c(p,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=md(v,p.mode,S),m.return=p,m):(m=i(m,v.children||[]),m.return=p,m)}function u(p,m,v,S,E){return m===null||m.tag!==7?(m=Yr(v,p.mode,S,E),m.return=p,m):(m=i(m,v),m.return=p,m)}function d(p,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=hd(""+m,p.mode,v),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ls:return v=Zs(m.type,m.key,m.props,null,p.mode,v),v.ref=Mo(p,null,m),v.return=p,v;case Ti:return m=md(m,p.mode,v),m.return=p,m;case lr:var S=m._init;return d(p,S(m._payload),v)}if(Ho(m)||To(m))return m=Yr(m,p.mode,v,null),m.return=p,m;xs(p,m)}return null}function y(p,m,v,S){var E=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:l(p,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ls:return v.key===E?s(p,m,v,S):null;case Ti:return v.key===E?c(p,m,v,S):null;case lr:return E=v._init,y(p,m,E(v._payload),S)}if(Ho(v)||To(v))return E!==null?null:u(p,m,v,S,null);xs(p,v)}return null}function g(p,m,v,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(v)||null,l(m,p,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ls:return p=p.get(S.key===null?v:S.key)||null,s(m,p,S,E);case Ti:return p=p.get(S.key===null?v:S.key)||null,c(m,p,S,E);case lr:var P=S._init;return g(p,m,v,P(S._payload),E)}if(Ho(S)||To(S))return p=p.get(v)||null,u(m,p,S,E,null);xs(m,S)}return null}function h(p,m,v,S){for(var E=null,P=null,k=m,_=m=0,$=null;k!==null&&_<v.length;_++){k.index>_?($=k,k=null):$=k.sibling;var M=y(p,k,v[_],S);if(M===null){k===null&&(k=$);break}e&&k&&M.alternate===null&&t(p,k),m=o(M,m,_),P===null?E=M:P.sibling=M,P=M,k=$}if(_===v.length)return n(p,k),_e&&Rr(p,_),E;if(k===null){for(;_<v.length;_++)k=d(p,v[_],S),k!==null&&(m=o(k,m,_),P===null?E=k:P.sibling=k,P=k);return _e&&Rr(p,_),E}for(k=r(p,k);_<v.length;_++)$=g(k,p,_,v[_],S),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?_:$.key),m=o($,m,_),P===null?E=$:P.sibling=$,P=$);return e&&k.forEach(function(I){return t(p,I)}),_e&&Rr(p,_),E}function x(p,m,v,S){var E=To(v);if(typeof E!="function")throw Error(V(150));if(v=E.call(v),v==null)throw Error(V(151));for(var P=E=null,k=m,_=m=0,$=null,M=v.next();k!==null&&!M.done;_++,M=v.next()){k.index>_?($=k,k=null):$=k.sibling;var I=y(p,k,M.value,S);if(I===null){k===null&&(k=$);break}e&&k&&I.alternate===null&&t(p,k),m=o(I,m,_),P===null?E=I:P.sibling=I,P=I,k=$}if(M.done)return n(p,k),_e&&Rr(p,_),E;if(k===null){for(;!M.done;_++,M=v.next())M=d(p,M.value,S),M!==null&&(m=o(M,m,_),P===null?E=M:P.sibling=M,P=M);return _e&&Rr(p,_),E}for(k=r(p,k);!M.done;_++,M=v.next())M=g(k,p,_,M.value,S),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?_:M.key),m=o(M,m,_),P===null?E=M:P.sibling=M,P=M);return e&&k.forEach(function(D){return t(p,D)}),_e&&Rr(p,_),E}function w(p,m,v,S){if(typeof v=="object"&&v!==null&&v.type===Pi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ls:e:{for(var E=v.key,P=m;P!==null;){if(P.key===E){if(E=v.type,E===Pi){if(P.tag===7){n(p,P.sibling),m=i(P,v.props.children),m.return=p,p=m;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lr&&l0(E)===P.type){n(p,P.sibling),m=i(P,v.props),m.ref=Mo(p,P,v),m.return=p,p=m;break e}n(p,P);break}else t(p,P);P=P.sibling}v.type===Pi?(m=Yr(v.props.children,p.mode,S,v.key),m.return=p,p=m):(S=Zs(v.type,v.key,v.props,null,p.mode,S),S.ref=Mo(p,m,v),S.return=p,p=S)}return a(p);case Ti:e:{for(P=v.key;m!==null;){if(m.key===P)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(p,m.sibling),m=i(m,v.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=md(v,p.mode,S),m.return=p,p=m}return a(p);case lr:return P=v._init,w(p,m,P(v._payload),S)}if(Ho(v))return h(p,m,v,S);if(To(v))return x(p,m,v,S);xs(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,v),m.return=p,p=m):(n(p,m),m=hd(v,p.mode,S),m.return=p,p=m),a(p)):n(p,m)}return w}var Qi=qx(!0),Yx=qx(!1),Ga={},Pn=$r(Ga),_a=$r(Ga),Ea=$r(Ga);function Hr(e){if(e===Ga)throw Error(V(174));return e}function Lh(e,t){switch(ve(Ea,t),ve(_a,e),ve(Pn,Ga),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jf(t,e)}be(Pn),ve(Pn,t)}function Zi(){be(Pn),be(_a),be(Ea)}function Xx(e){Hr(Ea.current);var t=Hr(Pn.current),n=jf(t,e.type);t!==n&&(ve(_a,e),ve(Pn,n))}function Ah(e){_a.current===e&&(be(Pn),be(_a))}var Ee=$r(0);function Ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ld=[];function Rh(){for(var e=0;e<ld.length;e++)ld[e]._workInProgressVersionPrimary=null;ld.length=0}var qs=tr.ReactCurrentDispatcher,cd=tr.ReactCurrentBatchConfig,Zr=0,ke=null,Be=null,Ye=null,Al=!1,ia=!1,ka=0,lT=0;function rt(){throw Error(V(321))}function Fh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function zh(e,t,n,r,i,o){if(Zr=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qs.current=e===null||e.memoizedState===null?fT:pT,e=n(r,i),ia){o=0;do{if(ia=!1,ka=0,25<=o)throw Error(V(301));o+=1,Ye=Be=null,t.updateQueue=null,qs.current=hT,e=n(r,i)}while(ia)}if(qs.current=Rl,t=Be!==null&&Be.next!==null,Zr=0,Ye=Be=ke=null,Al=!1,t)throw Error(V(300));return e}function Nh(){var e=ka!==0;return ka=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ke.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Zt(){if(Be===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ye===null?ke.memoizedState:Ye.next;if(t!==null)Ye=t,Be=e;else{if(e===null)throw Error(V(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ye===null?ke.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ta(e,t){return typeof t=="function"?t(e):t}function ud(e){var t=Zt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Be,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var u=c.lane;if((Zr&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,ke.lanes|=u,Jr|=u}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,gn(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,Jr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dd(e){var t=Zt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);gn(o,t.memoizedState)||(Et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Kx(){}function Qx(e,t){var n=ke,r=Zt(),i=t(),o=!gn(r.memoizedState,i);if(o&&(r.memoizedState=i,Et=!0),r=r.queue,Bh(eb.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Pa(9,Jx.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(V(349));Zr&30||Zx(n,t,i)}return i}function Zx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jx(e,t,n,r){t.value=n,t.getSnapshot=r,tb(t)&&nb(e)}function eb(e,t,n){return n(function(){tb(t)&&nb(e)})}function tb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function nb(e){var t=Kn(e,1);t!==null&&fn(t,e,1,-1)}function c0(e){var t=Sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},t.queue=e,e=e.dispatch=dT.bind(null,ke,e),[t.memoizedState,e]}function Pa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rb(){return Zt().memoizedState}function Ys(e,t,n,r){var i=Sn();ke.flags|=e,i.memoizedState=Pa(1|t,n,void 0,r===void 0?null:r)}function Tc(e,t,n,r){var i=Zt();r=r===void 0?null:r;var o=void 0;if(Be!==null){var a=Be.memoizedState;if(o=a.destroy,r!==null&&Fh(r,a.deps)){i.memoizedState=Pa(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Pa(1|t,n,o,r)}function u0(e,t){return Ys(8390656,8,e,t)}function Bh(e,t){return Tc(2048,8,e,t)}function ib(e,t){return Tc(4,2,e,t)}function ob(e,t){return Tc(4,4,e,t)}function ab(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sb(e,t,n){return n=n!=null?n.concat([e]):null,Tc(4,4,ab.bind(null,t,e),n)}function Vh(){}function lb(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cb(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ub(e,t,n){return Zr&21?(gn(n,t)||(n=px(),ke.lanes|=n,Jr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function cT(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=cd.transition;cd.transition={};try{e(!1),t()}finally{me=n,cd.transition=r}}function db(){return Zt().memoizedState}function uT(e,t,n){var r=_r(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fb(e))pb(t,n);else if(n=Ux(e,t,n,r),n!==null){var i=gt();fn(n,e,r,i),hb(n,t,r)}}function dT(e,t,n){var r=_r(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fb(e))pb(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,a)){var s=t.interleaved;s===null?(i.next=i,Ih(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Ux(e,t,i,r),n!==null&&(i=gt(),fn(n,e,r,i),hb(n,t,r))}}function fb(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function pb(e,t){ia=Al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xh(e,n)}}var Rl={readContext:Qt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},fT={readContext:Qt,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:u0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ys(4194308,4,ab.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ys(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ys(4,2,e,t)},useMemo:function(e,t){var n=Sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uT.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:c0,useDebugValue:Vh,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=c0(!1),t=e[0];return e=cT.bind(null,e[1]),Sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Sn();if(_e){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Xe===null)throw Error(V(349));Zr&30||Zx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,u0(eb.bind(null,r,o,e),[e]),r.flags|=2048,Pa(9,Jx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Sn(),t=Xe.identifierPrefix;if(_e){var n=Wn,r=Un;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ka++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lT++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pT={readContext:Qt,useCallback:lb,useContext:Qt,useEffect:Bh,useImperativeHandle:sb,useInsertionEffect:ib,useLayoutEffect:ob,useMemo:cb,useReducer:ud,useRef:rb,useState:function(){return ud(Ta)},useDebugValue:Vh,useDeferredValue:function(e){var t=Zt();return ub(t,Be.memoizedState,e)},useTransition:function(){var e=ud(Ta)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:Kx,useSyncExternalStore:Qx,useId:db,unstable_isNewReconciler:!1},hT={readContext:Qt,useCallback:lb,useContext:Qt,useEffect:Bh,useImperativeHandle:sb,useInsertionEffect:ib,useLayoutEffect:ob,useMemo:cb,useReducer:dd,useRef:rb,useState:function(){return dd(Ta)},useDebugValue:Vh,useDeferredValue:function(e){var t=Zt();return Be===null?t.memoizedState=e:ub(t,Be.memoizedState,e)},useTransition:function(){var e=dd(Ta)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:Kx,useSyncExternalStore:Qx,useId:db,unstable_isNewReconciler:!1};function Ji(e,t){try{var n="",r=t;do n+=VE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mT=typeof WeakMap=="function"?WeakMap:Map;function mb(e,t,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zl||(zl=!0,cp=r),Jf(e,t)},n}function gb(e,t,n){n=Hn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Jf(e,t),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function d0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mT;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=OT.bind(null,e,t,n),t.then(e,e))}function f0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function p0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Hn(-1,1),t.tag=2,Sr(n,t,1))),n.lanes|=1),e)}var gT=tr.ReactCurrentOwner,Et=!1;function ht(e,t,n,r){t.child=e===null?Yx(t,null,n,r):Qi(t,e.child,n,r)}function h0(e,t,n,r,i){n=n.render;var o=t.ref;return Ui(t,i),r=zh(e,t,n,r,o,i),n=Nh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qn(e,t,i)):(_e&&n&&Th(t),t.flags|=1,ht(e,t,r,i),t.child)}function m0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Kh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vb(e,t,o,r,i)):(e=Zs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(a,r)&&e.ref===t.ref)return Qn(e,t,i)}return t.flags|=1,e=Er(o,r),e.ref=t.ref,e.return=t,t.child=e}function vb(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ba(o,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Qn(e,t,i)}return ep(e,t,n,r,i)}function yb(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Fi,Dt),Dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Fi,Dt),Dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(Fi,Dt),Dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ve(Fi,Dt),Dt|=r;return ht(e,t,i,n),t.child}function xb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ep(e,t,n,r,i){var o=Tt(n)?Kr:ut.current;return o=Xi(t,o),Ui(t,i),n=zh(e,t,n,r,o,i),r=Nh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qn(e,t,i)):(_e&&r&&Th(t),t.flags|=1,ht(e,t,n,i),t.child)}function g0(e,t,n,r,i){if(Tt(n)){var o=!0;Ol(t)}else o=!1;if(Ui(t,i),t.stateNode===null)Xs(e,t),Gx(t,n,r),Zf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qt(c):(c=Tt(n)?Kr:ut.current,c=Xi(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&s0(t,a,r,c),cr=!1;var y=t.memoizedState;a.state=y,Dl(t,r,a,i),s=t.memoizedState,l!==r||y!==s||kt.current||cr?(typeof u=="function"&&(Qf(t,n,u,r),s=t.memoizedState),(l=cr||a0(t,n,l,r,y,s,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wx(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:an(t.type,l),a.props=c,d=t.pendingProps,y=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Qt(s):(s=Tt(n)?Kr:ut.current,s=Xi(t,s));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||y!==s)&&s0(t,a,r,s),cr=!1,y=t.memoizedState,a.state=y,Dl(t,r,a,i);var h=t.memoizedState;l!==d||y!==h||kt.current||cr?(typeof g=="function"&&(Qf(t,n,g,r),h=t.memoizedState),(c=cr||a0(t,n,c,r,y,h,s)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return tp(e,t,n,r,o,i)}function tp(e,t,n,r,i,o){xb(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&t0(t,n,!1),Qn(e,t,o);r=t.stateNode,gT.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Qi(t,e.child,null,o),t.child=Qi(t,null,l,o)):ht(e,t,l,o),t.memoizedState=r.state,i&&t0(t,n,!0),t.child}function bb(e){var t=e.stateNode;t.pendingContext?e0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&e0(e,t.context,!1),Lh(e,t.containerInfo)}function v0(e,t,n,r,i){return Ki(),Oh(i),t.flags|=256,ht(e,t,n,r),t.child}var np={dehydrated:null,treeContext:null,retryLane:0};function rp(e){return{baseLanes:e,cachePool:null,transitions:null}}function wb(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ee,i&1),e===null)return Xf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=jc(a,r,0,null),e=Yr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=rp(n),t.memoizedState=np,e):Uh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return vT(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Er(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Er(l,o):(o=Yr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?rp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=np,r}return o=e.child,e=o.sibling,r=Er(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uh(e,t){return t=jc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bs(e,t,n,r){return r!==null&&Oh(r),Qi(t,e.child,null,n),e=Uh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vT(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=fd(Error(V(422))),bs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=jc({mode:"visible",children:r.children},i,0,null),o=Yr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Qi(t,e.child,null,a),t.child.memoizedState=rp(a),t.memoizedState=np,o);if(!(t.mode&1))return bs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=fd(o,r,void 0),bs(e,t,a,r)}if(l=(a&e.childLanes)!==0,Et||l){if(r=Xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kn(e,i),fn(r,e,i,-1))}return Xh(),r=fd(Error(V(421))),bs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jT.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,At=wr(i.nextSibling),Ft=t,_e=!0,cn=null,e!==null&&(qt[Yt++]=Un,qt[Yt++]=Wn,qt[Yt++]=Qr,Un=e.id,Wn=e.overflow,Qr=t),t=Uh(t,r.children),t.flags|=4096,t)}function y0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kf(e.return,t,n)}function pd(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Sb(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ht(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&y0(e,n,t);else if(e.tag===19)y0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ll(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ll(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pd(t,!0,n,null,o);break;case"together":pd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=Er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yT(e,t,n){switch(t.tag){case 3:bb(t),Ki();break;case 5:Xx(t);break;case 1:Tt(t.type)&&Ol(t);break;case 4:Lh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?wb(e,t,n):(ve(Ee,Ee.current&1),e=Qn(e,t,n),e!==null?e.sibling:null);ve(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,yb(e,t,n)}return Qn(e,t,n)}var Cb,ip,_b,Eb;Cb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ip=function(){};_b=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Hr(Pn.current);var o=null;switch(n){case"input":i=kf(e,i),r=kf(e,r),o=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),o=[];break;case"textarea":i=Of(e,i),r=Of(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Tl)}$f(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(pa.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(pa.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ye("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Eb=function(e,t,n,r){n!==r&&(t.flags|=4)};function Io(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xT(e,t,n){var r=t.pendingProps;switch(Ph(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return Tt(t.type)&&Pl(),it(t),null;case 3:return r=t.stateNode,Zi(),be(kt),be(ut),Rh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ys(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,cn!==null&&(fp(cn),cn=null))),ip(e,t),it(t),null;case 5:Ah(t);var i=Hr(Ea.current);if(n=t.type,e!==null&&t.stateNode!=null)_b(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return it(t),null}if(e=Hr(Pn.current),ys(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[En]=t,r[Ca]=o,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)ye(qo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Tg(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":Og(r,o),ye("invalid",r)}$f(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&vs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&vs(r.textContent,l,e),i=["children",""+l]):pa.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":cs(r),Pg(r,o,!0);break;case"textarea":cs(r),jg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Tl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[En]=t,e[Ca]=r,Cb(e,t,!1,!1),t.stateNode=e;e:{switch(a=Mf(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)ye(qo[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":Tg(e,r),i=kf(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Og(e,r),i=Of(e,r),ye("invalid",e);break;default:i=r}$f(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?tx(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Jy(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ha(e,s):typeof s=="number"&&ha(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(pa.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ye("scroll",e):s!=null&&ph(e,o,s,a))}switch(n){case"input":cs(e),Pg(e,r,!1);break;case"textarea":cs(e),jg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?zi(e,!!r.multiple,o,!1):r.defaultValue!=null&&zi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)Eb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Hr(Ea.current),Hr(Pn.current),ys(t)){if(r=t.stateNode,n=t.memoizedProps,r[En]=t,(o=r.nodeValue!==n)&&(e=Ft,e!==null))switch(e.tag){case 3:vs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=t,t.stateNode=r}return it(t),null;case 13:if(be(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&At!==null&&t.mode&1&&!(t.flags&128))Vx(),Ki(),t.flags|=98560,o=!1;else if(o=ys(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[En]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),o=!1}else cn!==null&&(fp(cn),cn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Ue===0&&(Ue=3):Xh())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return Zi(),ip(e,t),e===null&&wa(t.stateNode.containerInfo),it(t),null;case 10:return Mh(t.type._context),it(t),null;case 17:return Tt(t.type)&&Pl(),it(t),null;case 19:if(be(Ee),o=t.memoizedState,o===null)return it(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Io(o,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ll(e),a!==null){for(t.flags|=128,Io(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&$e()>eo&&(t.flags|=128,r=!0,Io(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ll(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return it(t),null}else 2*$e()-o.renderingStartTime>eo&&n!==1073741824&&(t.flags|=128,r=!0,Io(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=$e(),t.sibling=null,n=Ee.current,ve(Ee,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return Yh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Dt&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function bT(e,t){switch(Ph(t),t.tag){case 1:return Tt(t.type)&&Pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(),be(kt),be(ut),Rh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ah(t),null;case 13:if(be(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Ee),null;case 4:return Zi(),null;case 10:return Mh(t.type._context),null;case 22:case 23:return Yh(),null;case 24:return null;default:return null}}var ws=!1,lt=!1,wT=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ri(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function op(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var x0=!1;function ST(e,t){if(Vf=_l,e=Ox(),kh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,u=0,d=e,y=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(g=d.firstChild)!==null;)y=d,d=g;for(;;){if(d===e)break t;if(y===n&&++c===i&&(l=a),y===o&&++u===r&&(s=a),(g=d.nextSibling)!==null)break;d=y,y=d.parentNode}d=g}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:e,selectionRange:n},_l=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var x=h.memoizedProps,w=h.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:an(t.type,x),w);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return h=x0,x0=!1,h}function oa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&op(t,n,o)}i=i.next}while(i!==r)}}function Pc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ap(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kb(e){var t=e.alternate;t!==null&&(e.alternate=null,kb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[En],delete t[Ca],delete t[Gf],delete t[iT],delete t[oT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tb(e){return e.tag===5||e.tag===3||e.tag===4}function b0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tl));else if(r!==4&&(e=e.child,e!==null))for(sp(e,t,n),e=e.sibling;e!==null;)sp(e,t,n),e=e.sibling}function lp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lp(e,t,n),e=e.sibling;e!==null;)lp(e,t,n),e=e.sibling}var Je=null,sn=!1;function ar(e,t,n){for(n=n.child;n!==null;)Pb(e,t,n),n=n.sibling}function Pb(e,t,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:lt||Ri(n,t);case 6:var r=Je,i=sn;Je=null,ar(e,t,n),Je=r,sn=i,Je!==null&&(sn?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(sn?(e=Je,n=n.stateNode,e.nodeType===8?ad(e.parentNode,n):e.nodeType===1&&ad(e,n),ya(e)):ad(Je,n.stateNode));break;case 4:r=Je,i=sn,Je=n.stateNode.containerInfo,sn=!0,ar(e,t,n),Je=r,sn=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&op(n,t,a),i=i.next}while(i!==r)}ar(e,t,n);break;case 1:if(!lt&&(Ri(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,t,l)}ar(e,t,n);break;case 21:ar(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,ar(e,t,n),lt=r):ar(e,t,n);break;default:ar(e,t,n)}}function w0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wT),t.forEach(function(r){var i=$T.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,sn=!1;break e;case 3:Je=l.stateNode.containerInfo,sn=!0;break e;case 4:Je=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(Je===null)throw Error(V(160));Pb(o,a,i),Je=null,sn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Oe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ob(t,e),t=t.sibling}function Ob(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),bn(e),r&4){try{oa(3,e,e.return),Pc(3,e)}catch(x){Oe(e,e.return,x)}try{oa(5,e,e.return)}catch(x){Oe(e,e.return,x)}}break;case 1:tn(t,e),bn(e),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(tn(t,e),bn(e),r&512&&n!==null&&Ri(n,n.return),e.flags&32){var i=e.stateNode;try{ha(i,"")}catch(x){Oe(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ky(i,o),Mf(l,a);var c=Mf(l,o);for(a=0;a<s.length;a+=2){var u=s[a],d=s[a+1];u==="style"?tx(i,d):u==="dangerouslySetInnerHTML"?Jy(i,d):u==="children"?ha(i,d):ph(i,u,d,c)}switch(l){case"input":Tf(i,o);break;case"textarea":Qy(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?zi(i,!!o.multiple,g,!1):y!==!!o.multiple&&(o.defaultValue!=null?zi(i,!!o.multiple,o.defaultValue,!0):zi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ca]=o}catch(x){Oe(e,e.return,x)}}break;case 6:if(tn(t,e),bn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Oe(e,e.return,x)}}break;case 3:if(tn(t,e),bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(t.containerInfo)}catch(x){Oe(e,e.return,x)}break;case 4:tn(t,e),bn(e);break;case 13:tn(t,e),bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gh=$e())),r&4&&w0(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(c=lt)||u,tn(t,e),lt=c):tn(t,e),bn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(d=H=u;H!==null;){switch(y=H,g=y.child,y.tag){case 0:case 11:case 14:case 15:oa(4,y,y.return);break;case 1:Ri(y,y.return);var h=y.stateNode;if(typeof h.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(x){Oe(r,n,x)}}break;case 5:Ri(y,y.return);break;case 22:if(y.memoizedState!==null){C0(d);continue}}g!==null?(g.return=y,H=g):C0(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ex("display",a))}catch(x){Oe(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Oe(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tn(t,e),bn(e),r&4&&w0(e);break;case 21:break;default:tn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tb(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ha(i,""),r.flags&=-33);var o=b0(e);lp(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=b0(e);sp(e,l,a);break;default:throw Error(V(161))}}catch(s){Oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function CT(e,t,n){H=e,jb(e)}function jb(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ws;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||lt;l=ws;var c=lt;if(ws=a,(lt=s)&&!c)for(H=i;H!==null;)a=H,s=a.child,a.tag===22&&a.memoizedState!==null?_0(i):s!==null?(s.return=a,H=s):_0(i);for(;o!==null;)H=o,jb(o),o=o.sibling;H=i,ws=l,lt=c}S0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):S0(e)}}function S0(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||Pc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:an(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&o0(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}o0(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ya(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}lt||t.flags&512&&ap(t)}catch(y){Oe(t,t.return,y)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function C0(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function _0(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pc(4,t)}catch(s){Oe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Oe(t,i,s)}}var o=t.return;try{ap(t)}catch(s){Oe(t,o,s)}break;case 5:var a=t.return;try{ap(t)}catch(s){Oe(t,a,s)}}}catch(s){Oe(t,t.return,s)}if(t===e){H=null;break}var l=t.sibling;if(l!==null){l.return=t.return,H=l;break}H=t.return}}var _T=Math.ceil,Fl=tr.ReactCurrentDispatcher,Wh=tr.ReactCurrentOwner,Kt=tr.ReactCurrentBatchConfig,se=0,Xe=null,Ae=null,tt=0,Dt=0,Fi=$r(0),Ue=0,Oa=null,Jr=0,Oc=0,Hh=0,aa=null,_t=null,Gh=0,eo=1/0,Rn=null,zl=!1,cp=null,Cr=null,Ss=!1,hr=null,Nl=0,sa=0,up=null,Ks=-1,Qs=0;function gt(){return se&6?$e():Ks!==-1?Ks:Ks=$e()}function _r(e){return e.mode&1?se&2&&tt!==0?tt&-tt:sT.transition!==null?(Qs===0&&(Qs=px()),Qs):(e=me,e!==0||(e=window.event,e=e===void 0?16:bx(e.type)),e):1}function fn(e,t,n,r){if(50<sa)throw sa=0,up=null,Error(V(185));Ua(e,n,r),(!(se&2)||e!==Xe)&&(e===Xe&&(!(se&2)&&(Oc|=n),Ue===4&&dr(e,tt)),Pt(e,r),n===1&&se===0&&!(t.mode&1)&&(eo=$e()+500,Ec&&Mr()))}function Pt(e,t){var n=e.callbackNode;sk(e,t);var r=Cl(e,e===Xe?tt:0);if(r===0)n!==null&&Ig(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ig(n),t===1)e.tag===0?aT(E0.bind(null,e)):zx(E0.bind(null,e)),nT(function(){!(se&6)&&Mr()}),n=null;else{switch(hx(r)){case 1:n=yh;break;case 4:n=dx;break;case 16:n=Sl;break;case 536870912:n=fx;break;default:n=Sl}n=Fb(n,$b.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $b(e,t){if(Ks=-1,Qs=0,se&6)throw Error(V(327));var n=e.callbackNode;if(Wi()&&e.callbackNode!==n)return null;var r=Cl(e,e===Xe?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bl(e,r);else{t=r;var i=se;se|=2;var o=Ib();(Xe!==e||tt!==t)&&(Rn=null,eo=$e()+500,qr(e,t));do try{TT();break}catch(l){Mb(e,l)}while(1);$h(),Fl.current=o,se=i,Ae!==null?t=0:(Xe=null,tt=0,t=Ue)}if(t!==0){if(t===2&&(i=Rf(e),i!==0&&(r=i,t=dp(e,i))),t===1)throw n=Oa,qr(e,0),dr(e,r),Pt(e,$e()),n;if(t===6)dr(e,r);else{if(i=e.current.alternate,!(r&30)&&!ET(i)&&(t=Bl(e,r),t===2&&(o=Rf(e),o!==0&&(r=o,t=dp(e,o))),t===1))throw n=Oa,qr(e,0),dr(e,r),Pt(e,$e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Fr(e,_t,Rn);break;case 3:if(dr(e,r),(r&130023424)===r&&(t=Gh+500-$e(),10<t)){if(Cl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hf(Fr.bind(null,e,_t,Rn),t);break}Fr(e,_t,Rn);break;case 4:if(dr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_T(r/1960))-r,10<r){e.timeoutHandle=Hf(Fr.bind(null,e,_t,Rn),r);break}Fr(e,_t,Rn);break;case 5:Fr(e,_t,Rn);break;default:throw Error(V(329))}}}return Pt(e,$e()),e.callbackNode===n?$b.bind(null,e):null}function dp(e,t){var n=aa;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=Bl(e,t),e!==2&&(t=_t,_t=n,t!==null&&fp(t)),e}function fp(e){_t===null?_t=e:_t.push.apply(_t,e)}function ET(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~Hh,t&=~Oc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dn(t),r=1<<n;e[n]=-1,t&=~r}}function E0(e){if(se&6)throw Error(V(327));Wi();var t=Cl(e,0);if(!(t&1))return Pt(e,$e()),null;var n=Bl(e,t);if(e.tag!==0&&n===2){var r=Rf(e);r!==0&&(t=r,n=dp(e,r))}if(n===1)throw n=Oa,qr(e,0),dr(e,t),Pt(e,$e()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fr(e,_t,Rn),Pt(e,$e()),null}function qh(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(eo=$e()+500,Ec&&Mr())}}function ei(e){hr!==null&&hr.tag===0&&!(se&6)&&Wi();var t=se;se|=1;var n=Kt.transition,r=me;try{if(Kt.transition=null,me=1,e)return e()}finally{me=r,Kt.transition=n,se=t,!(se&6)&&Mr()}}function Yh(){Dt=Fi.current,be(Fi)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tT(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Ph(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pl();break;case 3:Zi(),be(kt),be(ut),Rh();break;case 5:Ah(r);break;case 4:Zi();break;case 13:be(Ee);break;case 19:be(Ee);break;case 10:Mh(r.type._context);break;case 22:case 23:Yh()}n=n.return}if(Xe=e,Ae=e=Er(e.current,null),tt=Dt=t,Ue=0,Oa=null,Hh=Oc=Jr=0,_t=aa=null,Wr!==null){for(t=0;t<Wr.length;t++)if(n=Wr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Wr=null}return e}function Mb(e,t){do{var n=Ae;try{if($h(),qs.current=Rl,Al){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Al=!1}if(Zr=0,Ye=Be=ke=null,ia=!1,ka=0,Wh.current=null,n===null||n.return===null){Ue=1,Oa=t,Ae=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=tt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=l,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var y=u.alternate;y?(u.updateQueue=y.updateQueue,u.memoizedState=y.memoizedState,u.lanes=y.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=f0(a);if(g!==null){g.flags&=-257,p0(g,a,l,o,t),g.mode&1&&d0(o,c,t),t=g,s=c;var h=t.updateQueue;if(h===null){var x=new Set;x.add(s),t.updateQueue=x}else h.add(s);break e}else{if(!(t&1)){d0(o,c,t),Xh();break e}s=Error(V(426))}}else if(_e&&l.mode&1){var w=f0(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),p0(w,a,l,o,t),Oh(Ji(s,l));break e}}o=s=Ji(s,l),Ue!==4&&(Ue=2),aa===null?aa=[o]:aa.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=mb(o,s,t);i0(o,p);break e;case 1:l=s;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cr===null||!Cr.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=gb(o,l,t);i0(o,S);break e}}o=o.return}while(o!==null)}Lb(n)}catch(E){t=E,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function Ib(){var e=Fl.current;return Fl.current=Rl,e===null?Rl:e}function Xh(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Xe===null||!(Jr&268435455)&&!(Oc&268435455)||dr(Xe,tt)}function Bl(e,t){var n=se;se|=2;var r=Ib();(Xe!==e||tt!==t)&&(Rn=null,qr(e,t));do try{kT();break}catch(i){Mb(e,i)}while(1);if($h(),se=n,Fl.current=r,Ae!==null)throw Error(V(261));return Xe=null,tt=0,Ue}function kT(){for(;Ae!==null;)Db(Ae)}function TT(){for(;Ae!==null&&!ZE();)Db(Ae)}function Db(e){var t=Rb(e.alternate,e,Dt);e.memoizedProps=e.pendingProps,t===null?Lb(e):Ae=t,Wh.current=null}function Lb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bT(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Ae=null;return}}else if(n=xT(n,t,Dt),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ue===0&&(Ue=5)}function Fr(e,t,n){var r=me,i=Kt.transition;try{Kt.transition=null,me=1,PT(e,t,n,r)}finally{Kt.transition=i,me=r}return null}function PT(e,t,n,r){do Wi();while(hr!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(lk(e,o),e===Xe&&(Ae=Xe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ss||(Ss=!0,Fb(Sl,function(){return Wi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Kt.transition,Kt.transition=null;var a=me;me=1;var l=se;se|=4,Wh.current=null,ST(e,n),Ob(n,e),Yk(Uf),_l=!!Vf,Uf=Vf=null,e.current=n,CT(n),JE(),se=l,me=a,Kt.transition=o}else e.current=n;if(Ss&&(Ss=!1,hr=e,Nl=i),o=e.pendingLanes,o===0&&(Cr=null),nk(n.stateNode),Pt(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zl)throw zl=!1,e=cp,cp=null,e;return Nl&1&&e.tag!==0&&Wi(),o=e.pendingLanes,o&1?e===up?sa++:(sa=0,up=e):sa=0,Mr(),null}function Wi(){if(hr!==null){var e=hx(Nl),t=Kt.transition,n=me;try{if(Kt.transition=null,me=16>e?16:e,hr===null)var r=!1;else{if(e=hr,hr=null,Nl=0,se&6)throw Error(V(331));var i=se;for(se|=4,H=e.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(H=c;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:oa(8,u,o)}var d=u.child;if(d!==null)d.return=u,H=d;else for(;H!==null;){u=H;var y=u.sibling,g=u.return;if(kb(u),u===c){H=null;break}if(y!==null){y.return=g,H=y;break}H=g}}}var h=o.alternate;if(h!==null){var x=h.child;if(x!==null){h.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:oa(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,H=p;break e}H=o.return}}var m=e.current;for(H=m;H!==null;){a=H;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,H=v;else e:for(a=m;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pc(9,l)}}catch(E){Oe(l,l.return,E)}if(l===a){H=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,H=S;break e}H=l.return}}if(se=i,Mr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(bc,e)}catch{}r=!0}return r}finally{me=n,Kt.transition=t}}return!1}function k0(e,t,n){t=Ji(n,t),t=mb(e,t,1),e=Sr(e,t,1),t=gt(),e!==null&&(Ua(e,1,t),Pt(e,t))}function Oe(e,t,n){if(e.tag===3)k0(e,e,n);else for(;t!==null;){if(t.tag===3){k0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){e=Ji(n,e),e=gb(t,e,1),t=Sr(t,e,1),e=gt(),t!==null&&(Ua(t,1,e),Pt(t,e));break}}t=t.return}}function OT(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(tt&n)===n&&(Ue===4||Ue===3&&(tt&130023424)===tt&&500>$e()-Gh?qr(e,0):Hh|=n),Pt(e,t)}function Ab(e,t){t===0&&(e.mode&1?(t=fs,fs<<=1,!(fs&130023424)&&(fs=4194304)):t=1);var n=gt();e=Kn(e,t),e!==null&&(Ua(e,t,n),Pt(e,n))}function jT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ab(e,n)}function $T(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Ab(e,n)}var Rb;Rb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,yT(e,t,n);Et=!!(e.flags&131072)}else Et=!1,_e&&t.flags&1048576&&Nx(t,$l,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xs(e,t),e=t.pendingProps;var i=Xi(t,ut.current);Ui(t,n),i=zh(null,t,r,e,i,n);var o=Nh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Tt(r)?(o=!0,Ol(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dh(t),i.updater=kc,t.stateNode=i,i._reactInternals=t,Zf(t,r,e,n),t=tp(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&Th(t),ht(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=IT(r),e=an(r,e),i){case 0:t=ep(null,t,r,e,n);break e;case 1:t=g0(null,t,r,e,n);break e;case 11:t=h0(null,t,r,e,n);break e;case 14:t=m0(null,t,r,an(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),ep(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),g0(e,t,r,i,n);case 3:e:{if(bb(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Wx(e,t),Dl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ji(Error(V(423)),t),t=v0(e,t,r,n,i);break e}else if(r!==i){i=Ji(Error(V(424)),t),t=v0(e,t,r,n,i);break e}else for(At=wr(t.stateNode.containerInfo.firstChild),Ft=t,_e=!0,cn=null,n=Yx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){t=Qn(e,t,n);break e}ht(e,t,r,n)}t=t.child}return t;case 5:return Xx(t),e===null&&Xf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Wf(r,i)?a=null:o!==null&&Wf(r,o)&&(t.flags|=32),xb(e,t),ht(e,t,a,n),t.child;case 6:return e===null&&Xf(t),null;case 13:return wb(e,t,n);case 4:return Lh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qi(t,null,r,n):ht(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),h0(e,t,r,i,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ve(Ml,r._currentValue),r._currentValue=a,o!==null)if(gn(o.value,a)){if(o.children===i.children&&!kt.current){t=Qn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Hn(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Kf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Kf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ht(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ui(t,n),i=Qt(i),r=r(i),t.flags|=1,ht(e,t,r,n),t.child;case 14:return r=t.type,i=an(r,t.pendingProps),i=an(r.type,i),m0(e,t,r,i,n);case 15:return vb(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),Xs(e,t),t.tag=1,Tt(r)?(e=!0,Ol(t)):e=!1,Ui(t,n),Gx(t,r,i),Zf(t,r,i,n),tp(null,t,r,!0,e,n);case 19:return Sb(e,t,n);case 22:return yb(e,t,n)}throw Error(V(156,t.tag))};function Fb(e,t){return ux(e,t)}function MT(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,r){return new MT(e,t,n,r)}function Kh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function IT(e){if(typeof e=="function")return Kh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mh)return 11;if(e===gh)return 14}return 2}function Er(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Kh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Pi:return Yr(n.children,i,o,t);case hh:a=8,i|=8;break;case Sf:return e=Xt(12,n,t,i|2),e.elementType=Sf,e.lanes=o,e;case Cf:return e=Xt(13,n,t,i),e.elementType=Cf,e.lanes=o,e;case _f:return e=Xt(19,n,t,i),e.elementType=_f,e.lanes=o,e;case qy:return jc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hy:a=10;break e;case Gy:a=9;break e;case mh:a=11;break e;case gh:a=14;break e;case lr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Xt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yr(e,t,n,r){return e=Xt(7,e,r,t),e.lanes=n,e}function jc(e,t,n,r){return e=Xt(22,e,r,t),e.elementType=qy,e.lanes=n,e.stateNode={isHidden:!1},e}function hd(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function md(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function DT(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qh(e,t,n,r,i,o,a,l,s){return e=new DT(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dh(o),e}function LT(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zb(e){if(!e)return Pr;e=e._reactInternals;e:{if(ci(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Tt(n))return Fx(e,n,t)}return t}function Nb(e,t,n,r,i,o,a,l,s){return e=Qh(n,r,!0,e,i,o,a,l,s),e.context=zb(null),n=e.current,r=gt(),i=_r(n),o=Hn(r,i),o.callback=t??null,Sr(n,o,i),e.current.lanes=i,Ua(e,i,r),Pt(e,r),e}function $c(e,t,n,r){var i=t.current,o=gt(),a=_r(i);return n=zb(n),t.context===null?t.context=n:t.pendingContext=n,t=Hn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sr(i,t,a),e!==null&&(fn(e,i,a,o),Gs(e,i,a)),a}function Vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function T0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zh(e,t){T0(e,t),(e=e.alternate)&&T0(e,t)}function AT(){return null}var Bb=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jh(e){this._internalRoot=e}Mc.prototype.render=Jh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));$c(e,t,null,null)};Mc.prototype.unmount=Jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ei(function(){$c(null,e,null,null)}),t[Xn]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var t=vx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ur.length&&t!==0&&t<ur[n].priority;n++);ur.splice(n,0,e),n===0&&xx(e)}};function em(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ic(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function P0(){}function RT(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Vl(a);o.call(c)}}var a=Nb(t,r,e,0,null,!1,!1,"",P0);return e._reactRootContainer=a,e[Xn]=a.current,wa(e.nodeType===8?e.parentNode:e),ei(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Vl(s);l.call(c)}}var s=Qh(e,0,!1,null,null,!1,!1,"",P0);return e._reactRootContainer=s,e[Xn]=s.current,wa(e.nodeType===8?e.parentNode:e),ei(function(){$c(t,s,n,r)}),s}function Dc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Vl(a);l.call(s)}}$c(t,a,e,i)}else a=RT(n,t,e,i,r);return Vl(a)}mx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Go(t.pendingLanes);n!==0&&(xh(t,n|1),Pt(t,$e()),!(se&6)&&(eo=$e()+500,Mr()))}break;case 13:ei(function(){var r=Kn(e,1);if(r!==null){var i=gt();fn(r,e,1,i)}}),Zh(e,1)}};bh=function(e){if(e.tag===13){var t=Kn(e,134217728);if(t!==null){var n=gt();fn(t,e,134217728,n)}Zh(e,134217728)}};gx=function(e){if(e.tag===13){var t=_r(e),n=Kn(e,t);if(n!==null){var r=gt();fn(n,e,t,r)}Zh(e,t)}};vx=function(){return me};yx=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};Df=function(e,t,n){switch(t){case"input":if(Tf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_c(r);if(!i)throw Error(V(90));Xy(r),Tf(r,i)}}}break;case"textarea":Qy(e,n);break;case"select":t=n.value,t!=null&&zi(e,!!n.multiple,t,!1)}};ix=qh;ox=ei;var FT={usingClientEntryPoint:!1,Events:[Ha,Mi,_c,nx,rx,qh]},Do={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zT={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lx(e),e===null?null:e.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||AT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{bc=Cs.inject(zT),Tn=Cs}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FT;Vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!em(t))throw Error(V(200));return LT(e,t,null,n)};Vt.createRoot=function(e,t){if(!em(e))throw Error(V(299));var n=!1,r="",i=Bb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qh(e,1,!1,null,null,n,!1,r,i),e[Xn]=t.current,wa(e.nodeType===8?e.parentNode:e),new Jh(t)};Vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=lx(t),e=e===null?null:e.stateNode,e};Vt.flushSync=function(e){return ei(e)};Vt.hydrate=function(e,t,n){if(!Ic(t))throw Error(V(200));return Dc(null,e,t,!0,n)};Vt.hydrateRoot=function(e,t,n){if(!em(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Bb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Nb(t,null,e,1,n??null,i,!1,o,a),e[Xn]=t.current,wa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mc(t)};Vt.render=function(e,t,n){if(!Ic(t))throw Error(V(200));return Dc(null,e,t,!1,n)};Vt.unmountComponentAtNode=function(e){if(!Ic(e))throw Error(V(40));return e._reactRootContainer?(ei(function(){Dc(null,null,e,!1,function(){e._reactRootContainer=null,e[Xn]=null})}),!0):!1};Vt.unstable_batchedUpdates=qh;Vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ic(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Dc(e,t,n,!1,r)};Vt.version="18.2.0-next-9e3b772b8-20220608";function Vb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vb)}catch(e){console.error(e)}}Vb(),Ny.exports=Vt;var Lc=Ny.exports,O0=Lc;bf.createRoot=O0.createRoot,bf.hydrateRoot=O0.hydrateRoot;var ct=function(){return ct=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ct.apply(this,arguments)};function to(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function NT(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var BT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,VT=NT(function(e){return BT.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),xe="-ms-",la="-moz-",ce="-webkit-",Ub="comm",Ac="rule",tm="decl",UT="@import",WT="@namespace",Wb="@keyframes",HT="@layer",Hb=Math.abs,nm=String.fromCharCode,pp=Object.assign;function GT(e,t){return Ve(e,0)^45?(((t<<2^Ve(e,0))<<2^Ve(e,1))<<2^Ve(e,2))<<2^Ve(e,3):0}function Gb(e){return e.trim()}function Fn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Js(e,t,n){return e.indexOf(t,n)}function Ve(e,t){return e.charCodeAt(t)|0}function ti(e,t,n){return e.slice(t,n)}function ln(e){return e.length}function qb(e){return e.length}function Yo(e,t){return t.push(e),e}function qT(e,t){return e.map(t).join("")}function j0(e,t){return e.filter(function(n){return!Fn(n,t)})}var Rc=1,no=1,Yb=0,Jt=0,De=0,go="";function Fc(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Rc,column:no,length:a,return:"",siblings:l}}function sr(e,t){return pp(Fc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function mi(e){for(;e.root;)e=sr(e.root,{children:[e]});Yo(e,e.siblings)}function YT(){return De}function XT(){return De=Jt>0?Ve(go,--Jt):0,no--,De===10&&(no=1,Rc--),De}function pn(){return De=Jt<Yb?Ve(go,Jt++):0,no++,De===10&&(no=1,Rc++),De}function mr(){return Ve(go,Jt)}function el(){return Jt}function zc(e,t){return ti(go,e,t)}function ja(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function KT(e){return Rc=no=1,Yb=ln(go=e),Jt=0,[]}function QT(e){return go="",e}function gd(e){return Gb(zc(Jt-1,hp(e===91?e+2:e===40?e+1:e)))}function ZT(e){for(;(De=mr())&&De<33;)pn();return ja(e)>2||ja(De)>3?"":" "}function JT(e,t){for(;--t&&pn()&&!(De<48||De>102||De>57&&De<65||De>70&&De<97););return zc(e,el()+(t<6&&mr()==32&&pn()==32))}function hp(e){for(;pn();)switch(De){case e:return Jt;case 34:case 39:e!==34&&e!==39&&hp(De);break;case 40:e===41&&hp(e);break;case 92:pn();break}return Jt}function eP(e,t){for(;pn()&&e+De!==47+10;)if(e+De===42+42&&mr()===47)break;return"/*"+zc(t,Jt-1)+"*"+nm(e===47?e:pn())}function tP(e){for(;!ja(mr());)pn();return zc(e,Jt)}function nP(e){return QT(tl("",null,null,null,[""],e=KT(e),0,[0],e))}function tl(e,t,n,r,i,o,a,l,s){for(var c=0,u=0,d=a,y=0,g=0,h=0,x=1,w=1,p=1,m=0,v="",S=i,E=o,P=r,k=v;w;)switch(h=m,m=pn()){case 40:if(h!=108&&Ve(k,d-1)==58){Js(k+=ne(gd(m),"&","&\f"),"&\f",Hb(c?l[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:k+=gd(m);break;case 9:case 10:case 13:case 32:k+=ZT(h);break;case 92:k+=JT(el()-1,7);continue;case 47:switch(mr()){case 42:case 47:Yo(rP(eP(pn(),el()),t,n,s),s),(ja(h||1)==5||ja(mr()||1)==5)&&ln(k)&&ti(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*x:l[c++]=ln(k)*p;case 125*x:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+u:p==-1&&(k=ne(k,/\f/g,"")),g>0&&(ln(k)-d||x===0&&h===47)&&Yo(g>32?M0(k+";",r,n,d-1,s):M0(ne(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Yo(P=$0(k,t,n,c,u,i,l,v,S=[],E=[],d,o),o),m===123)if(u===0)tl(k,t,P,P,S,o,d,l,E);else{switch(y){case 99:if(Ve(k,3)===110)break;case 108:if(Ve(k,2)===97)break;default:u=0;case 100:case 109:case 115:}u?tl(e,P,P,r&&Yo($0(e,P,P,0,0,i,l,v,i,S=[],d,E),E),i,E,d,l,r?S:E):tl(k,P,P,P,[""],E,0,l,E)}}c=u=g=0,x=p=1,v=k="",d=a;break;case 58:d=1+ln(k),g=h;default:if(x<1){if(m==123)--x;else if(m==125&&x++==0&&XT()==125)continue}switch(k+=nm(m),m*x){case 38:p=u>0?1:(k+="\f",-1);break;case 44:l[c++]=(ln(k)-1)*p,p=1;break;case 64:mr()===45&&(k+=gd(pn())),y=mr(),u=d=ln(v=k+=tP(el())),m++;break;case 45:h===45&&ln(k)==2&&(x=0)}}return o}function $0(e,t,n,r,i,o,a,l,s,c,u,d){for(var y=i-1,g=i===0?o:[""],h=qb(g),x=0,w=0,p=0;x<r;++x)for(var m=0,v=ti(e,y+1,y=Hb(w=a[x])),S=e;m<h;++m)(S=Gb(w>0?g[m]+" "+v:ne(v,/&\f/g,g[m])))&&(s[p++]=S);return Fc(e,t,n,i===0?Ac:l,s,c,u,d)}function rP(e,t,n,r){return Fc(e,t,n,Ub,nm(YT()),ti(e,2,-2),0,r)}function M0(e,t,n,r,i){return Fc(e,t,n,tm,ti(e,0,r),ti(e,r+1,-1),r,i)}function Xb(e,t,n){switch(GT(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ce+e+e;case 4855:return ce+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return la+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+la+e+xe+e+e;case 5936:switch(Ve(e,t+11)){case 114:return ce+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ce+e+xe+e+e;case 6165:return ce+e+xe+"flex-"+e+e;case 5187:return ce+e+ne(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return ce+e+xe+"flex-item-"+ne(e,/flex-|-self/g,"")+(Fn(e,/flex-|baseline/)?"":xe+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ce+e+xe+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ce+e+xe+ne(e,"shrink","negative")+e;case 5292:return ce+e+xe+ne(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+ne(e,"-grow","")+ce+e+xe+ne(e,"grow","positive")+e;case 4554:return ce+ne(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+xe+"flex-pack:$3"),/space-between/,"justify")+ce+e+e;case 4200:if(!Fn(e,/flex-|baseline/))return xe+"grid-column-align"+ti(e,t)+e;break;case 2592:case 3360:return xe+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Fn(r.props,/grid-\w+-end/)})?~Js(e+(n=n[t].value),"span",0)?e:xe+ne(e,"-start","")+e+xe+"grid-row-span:"+(~Js(n,"span",0)?Fn(n,/\d+/):+Fn(n,/\d+/)-+Fn(e,/\d+/))+";":xe+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Fn(r.props,/grid-\w+-start/)})?e:xe+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(e)-1-t>6)switch(Ve(e,t+1)){case 109:if(Ve(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+la+(Ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Js(e,"stretch",0)?Xb(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,c){return xe+i+":"+o+c+(a?xe+i+"-span:"+(l?s:+s-+o)+c:"")+e});case 4949:if(Ve(e,t+6)===121)return ne(e,":",":"+ce)+e;break;case 6444:switch(Ve(e,Ve(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Ve(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+xe+"$2box$3")+e;case 100:return ne(e,":",":"+xe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Ul(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function iP(e,t,n,r){switch(e.type){case HT:if(e.children.length)break;case UT:case WT:case tm:return e.return=e.return||e.value;case Ub:return"";case Wb:return e.return=e.value+"{"+Ul(e.children,r)+"}";case Ac:if(!ln(e.value=e.props.join(",")))return""}return ln(n=Ul(e.children,r))?e.return=e.value+"{"+n+"}":""}function oP(e){var t=qb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function aP(e){return function(t){t.root||(t=t.return)&&e(t)}}function sP(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case tm:e.return=Xb(e.value,e.length,n);return;case Wb:return Ul([sr(e,{value:ne(e.value,"@","@"+ce)})],r);case Ac:if(e.length)return qT(n=e.props,function(i){switch(Fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mi(sr(e,{props:[ne(i,/:(read-\w+)/,":"+la+"$1")]})),mi(sr(e,{props:[i]})),pp(e,{props:j0(n,r)});break;case"::placeholder":mi(sr(e,{props:[ne(i,/:(plac\w+)/,":"+ce+"input-$1")]})),mi(sr(e,{props:[ne(i,/:(plac\w+)/,":"+la+"$1")]})),mi(sr(e,{props:[ne(i,/:(plac\w+)/,xe+"input-$1")]})),mi(sr(e,{props:[i]})),pp(e,{props:j0(n,r)});break}return""})}}var lP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ro=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Kb="active",Qb="data-styled-version",Nc="6.3.11",rm=`/*!sc*/
`,ca=typeof window<"u"&&typeof document<"u",cP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),uP={};function qa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nl=new Map,Wl=new Map,rl=1,Xo=function(e){if(nl.has(e))return nl.get(e);for(;Wl.has(rl);)rl++;var t=rl++;return nl.set(e,t),Wl.set(t,e),t},dP=function(e,t){rl=t+1,nl.set(e,t),Wl.set(t,e)},im=Object.freeze([]),io=Object.freeze({});function Zb(e,t,n){return n===void 0&&(n=io),e.theme!==n.theme&&e.theme||t||n.theme}var Jb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),fP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pP=/(^-|-$)/g;function I0(e){return e.replace(fP,"-").replace(pP,"")}var hP=/(a)(d)/gi,D0=function(e){return String.fromCharCode(e+(e>25?39:97))};function mp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=D0(t%52)+n;return(D0(t%52)+n).replace(hP,"$1-$2")}var vd,zr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ew=function(e){return zr(5381,e)};function om(e){return mp(ew(e)>>>0)}function mP(e){return e.displayName||e.name||"Component"}function yd(e){return typeof e=="string"&&!0}var tw=typeof Symbol=="function"&&Symbol.for,nw=tw?Symbol.for("react.memo"):60115,gP=tw?Symbol.for("react.forward_ref"):60112,vP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xP=((vd={})[gP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vd[nw]=rw,vd);function L0(e){return("type"in(t=e)&&t.type.$$typeof)===nw?rw:"$$typeof"in e?xP[e.$$typeof]:vP;var t}var bP=Object.defineProperty,wP=Object.getOwnPropertyNames,A0=Object.getOwnPropertySymbols,SP=Object.getOwnPropertyDescriptor,CP=Object.getPrototypeOf,R0=Object.prototype;function iw(e,t,n){if(typeof t!="string"){if(R0){var r=CP(t);r&&r!==R0&&iw(e,r,n)}var i=wP(t);A0&&(i=i.concat(A0(t)));for(var o=L0(e),a=L0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in yP||n&&n[s]||a&&s in a||o&&s in o)){var c=SP(t,s);try{bP(e,s,c)}catch{}}}}return e}function oo(e){return typeof e=="function"}function am(e){return typeof e=="object"&&"styledComponentId"in e}function Gr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hl(e,t){return e.join(t||"")}function $a(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gp(e,t,n){if(n===void 0&&(n=!1),!n&&!$a(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gp(e[r],t[r]);else if($a(t))for(var r in t)e[r]=gp(e[r],t[r]);return e}function sm(e,t){Object.defineProperty(e,"toString",{value:t})}var _P=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw qa(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+rm;return n},e}(),EP="style[".concat(ro,"][").concat(Qb,'="').concat(Nc,'"]'),kP=new RegExp("^".concat(ro,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},vp=function(e){if(!e)return document;if(F0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(F0(t))return t}return document},TP=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},PP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(rm),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(kP);if(s){var c=0|parseInt(s[1],10),u=s[2];c!==0&&(dP(u,c),TP(e,u,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},xd=function(e){for(var t=vp(e.options.target).querySelectorAll(EP),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ro)!==Kb&&(PP(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function OP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ow=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(ro,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ro,Kb),r.setAttribute(Qb,Nc);var a=OP();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},jP=function(){function e(t){this.element=ow(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw qa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),$P=function(){function e(t){this.element=ow(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),MP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),z0=ca,IP={isServer:!ca,useCSSOMInjection:!cP},Gl=function(){function e(t,n,r){t===void 0&&(t=io),n===void 0&&(n={});var i=this;this.options=ct(ct({},IP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ca&&z0&&(z0=!1,xd(this)),sm(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",c=function(d){var y=function(p){return Wl.get(p)}(d);if(y===void 0)return"continue";var g=o.names.get(y);if(g===void 0||!g.size)return"continue";var h=a.getGroup(d);if(h.length===0)return"continue";var x=ro+".g"+d+'[id="'+y+'"]',w="";g.forEach(function(p){p.length>0&&(w+=p+",")}),s+=h+x+'{content:"'+w+'"}'+rm},u=0;u<l;u++)c(u);return s}(i)})}return e.registerId=function(t){return Xo(t)},e.prototype.rehydrate=function(){!this.server&&ca&&xd(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ct(ct({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ca&&t.target!==this.options.target&&vp(this.options.target)!==vp(t.target)&&xd(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new MP(i):r?new jP(i):new $P(i)}(this.options),new _P(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Xo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Xo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Xo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),DP=/&/g,zn=47,Nr=42;function N0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==zn||e.charCodeAt(o+1)!==Nr)if(i)a===Nr&&e.charCodeAt(o+1)===zn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function aw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=aw(n.children,t)),n})}function LP(e){var t,n,r,i=e===void 0?io:e,o=i.options,a=o===void 0?io:o,l=i.plugins,s=l===void 0?im:l,c=function(h,x,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},u=s.slice();u.push(function(h){h.type===Ac&&h.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),h.props[0]=h.props[0].replace(DP,n).replace(r,c))}),a.prefix&&u.push(sP),u.push(iP);var d=[],y=oP(u.concat(aP(function(h){return d.push(h)}))),g=function(h,x,w,p){x===void 0&&(x=""),w===void 0&&(w=""),p===void 0&&(p="&"),t=p,n=x,r=void 0;var m=function(S){if(!N0(S))return S;for(var E=S.length,P="",k=0,_=0,$=0,M=!1,I=0;I<E;I++){var D=S.charCodeAt(I);if($!==0||M||D!==zn||S.charCodeAt(I+1)!==Nr)if(M)D===Nr&&S.charCodeAt(I+1)===zn&&(M=!1,I++);else if(D!==34&&D!==39||I!==0&&S.charCodeAt(I-1)===92){if($===0)if(D===123)_++;else if(D===125){if(--_<0){for(var O=I+1;O<E;){var F=S.charCodeAt(O);if(F===59||F===10)break;O++}O<E&&S.charCodeAt(O)===59&&O++,_=0,I=O-1,k=O;continue}_===0&&(P+=S.substring(k,I+1),k=I+1)}else D===59&&_===0&&(P+=S.substring(k,I+1),k=I+1)}else $===0?$=D:$===D&&($=0);else M=!0,I++}if(k<E){var L=S.substring(k);N0(L)||(P+=L)}return P}(function(S){if(S.indexOf("//")===-1)return S;for(var E=S.length,P=[],k=0,_=0,$=0,M=0;_<E;){var I=S.charCodeAt(_);if(I!==34&&I!==39||_!==0&&S.charCodeAt(_-1)===92)if($===0)if(I===zn&&_+1<E&&S.charCodeAt(_+1)===Nr){for(_+=2;_+1<E&&(S.charCodeAt(_)!==Nr||S.charCodeAt(_+1)!==zn);)_++;_+=2}else if(I===40&&_>=3&&(32|S.charCodeAt(_-1))==108&&(32|S.charCodeAt(_-2))==114&&(32|S.charCodeAt(_-3))==117)M=1,_++;else if(M>0)I===41?M--:I===40&&M++,_++;else if(I===Nr&&_+1<E&&S.charCodeAt(_+1)===zn)_>k&&P.push(S.substring(k,_)),k=_+=2;else if(I===zn&&_+1<E&&S.charCodeAt(_+1)===zn){for(_>k&&P.push(S.substring(k,_));_<E&&S.charCodeAt(_)!==10;)_++;k=_}else _++;else _++;else $===0?$=I:$===I&&($=0),_++}return k===0?S:(k<E&&P.push(S.substring(k)),P.join(""))}(h)),v=nP(w||x?"".concat(w," ").concat(x," { ").concat(m," }"):m);return a.namespace&&(v=aw(v,a.namespace)),d=[],Ul(v,y),d};return g.hash=s.length?s.reduce(function(h,x){return x.name||qa(15),zr(h,x.name)},5381).toString():"",g}var AP=new Gl,yp=LP(),sw=K.createContext({shouldForwardProp:void 0,styleSheet:AP,stylis:yp});sw.Consumer;K.createContext(void 0);function xp(){return K.useContext(sw)}var lw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=yp);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,sm(this,function(){throw qa(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=yp),this.name+t.hash},e}();function RP(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in lP||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var FP=function(e){return e>="A"&&e<="Z"};function B0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;FP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var cw=function(e){return e==null||e===!1||e===""},uw=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!cw(r)&&(Array.isArray(r)&&r.isCss||oo(r)?t.push("".concat(B0(n),":"),r,";"):$a(r)?t.push.apply(t,to(to(["".concat(n," {")],uw(r),!1),["}"],!1)):t.push("".concat(B0(n),": ").concat(RP(n,r),";")))}return t};function kr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(cw(e))return i;if(am(e))return i.push(".".concat(e.styledComponentId)),i;if(oo(e)){if(!oo(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return kr(o,t,n,r,i)}var a;if(e instanceof lw)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if($a(e)){for(var l=uw(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)kr(e[s],t,n,r,i);return i}function dw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(oo(n)&&!am(n))return!1}return!0}var zP=ew(Nc),NP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&dw(t),this.componentId=n,this.baseHash=zr(zP,n),this.baseStyle=r,Gl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gr(i,this.staticRulesId);else{var o=Hl(kr(this.rules,t,n,r)),a=mp(zr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Gr(i,a),this.staticRulesId=a}else{for(var s=zr(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var y=Hl(kr(d,t,n,r));s=zr(zr(s,String(u)),y),c+=y}}if(c){var g=mp(s>>>0);if(!n.hasNameForId(this.componentId,g)){var h=r(c,".".concat(g),void 0,this.componentId);n.insertRules(this.componentId,g,h)}i=Gr(i,g)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Xo(this.componentId)):""}},e}(),lm=K.createContext(void 0);lm.Consumer;var bd={};function BP(e,t,n){var r=am(e),i=e,o=!yd(e),a=t.attrs,l=a===void 0?im:a,s=t.componentId,c=s===void 0?function(S,E){var P=typeof S!="string"?"sc":I0(S);bd[P]=(bd[P]||0)+1;var k="".concat(P,"-").concat(om(Nc+P+bd[P]));return E?"".concat(E,"-").concat(k):k}(t.displayName,t.parentComponentId):s,u=t.displayName,d=u===void 0?function(S){return yd(S)?"styled.".concat(S):"Styled(".concat(mP(S),")")}(e):u,y=t.displayName&&t.componentId?"".concat(I0(t.displayName),"-").concat(t.componentId):t.componentId||c,g=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;h=function(S,E){return x(S,E)&&w(S,E)}}else h=x}var p=new NP(n,y,r?i.componentStyle:void 0);function m(S,E){return function(P,k,_){var $=P.attrs,M=P.componentStyle,I=P.defaultProps,D=P.foldedComponentIds,O=P.styledComponentId,F=P.target,L=K.useContext(lm),A=xp(),R=P.shouldForwardProp||A.shouldForwardProp,T=Zb(k,L,I)||io,j=function(Y,ee,pe){for(var we,ie=ct(ct({},ee),{className:void 0,theme:pe}),Ie=0;Ie<Y.length;Ie+=1){var We=oo(we=Y[Ie])?we(ie):we;for(var He in We)He==="className"?ie.className=Gr(ie.className,We[He]):He==="style"?ie.style=ct(ct({},ie.style),We[He]):ie[He]=We[He]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Gr(ie.className,ee.className)),ie}($,k,T),z=j.as||F,B={};for(var N in j)j[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&j.theme===T||(N==="forwardedAs"?B.as=j.forwardedAs:R&&!R(N,z)||(B[N]=j[N]));var U=function(Y,ee){var pe=xp(),we=Y.generateAndInjectStyles(ee,pe.styleSheet,pe.stylis);return we}(M,j),G=U.className,W=Gr(D,O);return G&&(W+=" "+G),j.className&&(W+=" "+j.className),B[yd(z)&&!Jb.has(z)?"class":"className"]=W,_&&(B.ref=_),b.createElement(z,B)}(v,S,E)}m.displayName=d;var v=K.forwardRef(m);return v.attrs=g,v.componentStyle=p,v.displayName=d,v.shouldForwardProp=h,v.foldedComponentIds=r?Gr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=y,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var _=0,$=P;_<$.length;_++)gp(E,$[_],!0);return E}({},i.defaultProps,S):S}}),sm(v,function(){return".".concat(v.styledComponentId)}),o&&iw(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function V0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var U0=function(e){return Object.assign(e,{isCss:!0})};function cm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(oo(e)||$a(e))return U0(kr(V0(im,to([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?kr(r):U0(kr(V0(r,t)))}function bp(e,t,n){if(n===void 0&&(n=io),!t)throw qa(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,cm.apply(void 0,to([i],o,!1)))};return r.attrs=function(i){return bp(e,t,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return bp(e,t,ct(ct({},n),i))},r}var fw=function(e){return bp(BP,e)},C=fw;Jb.forEach(function(e){C[e]=fw(e)});var VP=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=dw(t),Gl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Hl(kr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Gl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function UP(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=cm.apply(void 0,to([e],t,!1)),i="sc-global-".concat(om(JSON.stringify(r))),o=new VP(r,i),a=new WeakMap,l=function(c){var u=xp(),d=K.useContext(lm),y=a.get(u.styleSheet);return y===void 0&&(y=u.styleSheet.allocateGSInstance(i),a.set(u.styleSheet,y)),(typeof window>"u"||!u.styleSheet.server)&&s(y,c,u.styleSheet,d,u.stylis),K.useLayoutEffect(function(){return u.styleSheet.server||s(y,c,u.styleSheet,d,u.stylis),function(){var g;o.removeStyles(y,u.styleSheet),g=u.styleSheet.options.target,typeof document<"u"&&(g??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(h){return h.remove()})}},[y,c,u.styleSheet,d,u.stylis]),null};function s(c,u,d,y,g){if(o.isStatic)o.renderStyles(c,uP,d,g);else{var h=ct(ct({},u),{theme:Zb(u,y,l.defaultProps)});o.renderStyles(c,h,d,g)}}return K.memo(l)}function um(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Hl(cm.apply(void 0,to([e],t,!1))),i=om(r);return new lw(i,r)}const WP=C.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,HP=C.div`
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
`,GP=C.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,qP=C.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,YP=C.div`
  display: flex;
  justify-content: space-around;
  

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`,XP=C.button`
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
`;const KP=C(Te)`
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
`;const QP=C.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,ZP=C.button`
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
`;const JP=C.div`
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
`,eO=C.button`
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
`,tO=C.nav`
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
`,nO=C.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,rO=C.div`
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
`,iO=C.div`
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
`,oO=C.input`
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
`,aO=C.button`
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
`,sO=C.svg`
  width: 24px;
  height: 24px;
`,lO=C.ul`
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
`,cO=C.li`
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


`,uO=C.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,dO=C.h3`
      text-align: left;
      font-size: 22px;
      font-weight: 800;

`,fO=C.h3`

      font-size: 22px;
         

`,pO=C.div`
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

    
`,hn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",hO=()=>{const[e,t]=b.useState(""),[n,r]=b.useState([]),[i,o]=b.useState(!1),a=$t(),l=b.useRef(null);b.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const c=setTimeout(async()=>{try{const d=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(d.data),o(!0)}catch(u){console.error(u)}},300);return()=>clearTimeout(c)},[e]),b.useEffect(()=>{const c=u=>{l.current&&!l.current.contains(u.target)&&o(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const s=c=>{t(""),o(!1),a(`/product/${c.id}`)};return f.jsxs(iO,{ref:l,children:[f.jsx(oO,{name:"site-search",value:e,onChange:c=>t(c.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),f.jsx(aO,{className:"search-button",children:f.jsx(sO,{children:f.jsx("use",{href:`${hn}#icon-search`})})}),i&&n.length>0&&f.jsx(lO,{children:n.map(c=>{var y,g;const d=c.new_price&&c.new_price<c.price?c.new_price:c.price;return f.jsxs(cO,{onClick:()=>s(c),children:[f.jsx(uO,{src:((g=(y=c.images)==null?void 0:y[0])==null?void 0:g.url)||"/nofoto.png",alt:""}),f.jsxs(pO,{children:[f.jsx(dO,{children:c.name}),f.jsxs(fO,{children:[d," грн."]})]})]},c.id)})})]})};var pw={exports:{}},hw={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=b;function mO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gO=typeof Object.is=="function"?Object.is:mO,vO=Ya.useSyncExternalStore,yO=Ya.useRef,xO=Ya.useEffect,bO=Ya.useMemo,wO=Ya.useDebugValue;hw.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=yO(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=bO(function(){function s(g){if(!c){if(c=!0,u=g,g=r(g),i!==void 0&&a.hasValue){var h=a.value;if(i(h,g))return d=h}return d=g}if(h=d,gO(u,g))return h;var x=r(g);return i!==void 0&&i(h,x)?(u=g,h):(u=g,d=x)}var c=!1,u,d,y=n===void 0?null:n;return[function(){return s(t())},y===null?void 0:function(){return s(y())}]},[t,n,r,i]);var l=vO(e,o[0],o[1]);return xO(function(){a.hasValue=!0,a.value=l},[l]),wO(l),l};pw.exports=hw;var SO=pw.exports;function CO(e){e()}function _O(){let e=null,t=null;return{clear(){e=null,t=null},notify(){CO(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var W0={notify(){},get:()=>[]};function EO(e,t){let n,r=W0,i=0,o=!1;function a(x){u();const w=r.subscribe(x);let p=!1;return()=>{p||(p=!0,w(),d())}}function l(){r.notify()}function s(){h.onStateChange&&h.onStateChange()}function c(){return o}function u(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=_O())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=W0)}function y(){o||(o=!0,u())}function g(){o&&(o=!1,d())}const h={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:c,trySubscribe:y,tryUnsubscribe:g,getListeners:()=>r};return h}var kO=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TO=kO(),PO=()=>typeof navigator<"u"&&navigator.product==="ReactNative",OO=PO(),jO=()=>TO||OO?b.useLayoutEffect:b.useEffect,$O=jO(),wd=Symbol.for("react-redux-context"),Sd=typeof globalThis<"u"?globalThis:{};function MO(){if(!b.createContext)return{};const e=Sd[wd]??(Sd[wd]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var Or=MO();function IO(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=EO(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);$O(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Or;return b.createElement(l.Provider,{value:o},t)}var DO=IO;function dm(e=Or){return function(){return b.useContext(e)}}var mw=dm();function gw(e=Or){const t=e===Or?mw:dm(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var LO=gw();function AO(e=Or){const t=e===Or?LO:gw(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Wt=AO(),RO=(e,t)=>e===t;function FO(e=Or){const t=e===Or?mw:dm(e),n=(r,i={})=>{const{equalityFn:o=RO}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:c}=a;b.useRef(!0);const u=b.useCallback({[r.name](y){return r(y)}}[r.name],[r]),d=SO.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,c||l.getState,u,o);return b.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Re=FO();const zO=C(Te)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,NO=C.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,BO=C.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,VO=C.div`
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
`,UO=({onClick:e})=>{const t=Re(n=>n.cart.items.length);return f.jsx(zO,{to:"/cart",children:f.jsxs(BO,{onClick:e,children:[f.jsx(NO,{children:f.jsx("use",{href:`${hn}#icon-cart`})}),t>0&&f.jsx(VO,{children:t})]})})},WO=C.nav`
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
`,HO=()=>f.jsxs(WO,{children:[f.jsx(vi,{to:"/",children:"Головна"}),f.jsx(vi,{to:"/catalog",children:"Каталог"}),f.jsx(vi,{to:"/catalog/new",children:"Новинки"}),f.jsx(vi,{to:"/catalog/sale",children:"Акційні товари"}),f.jsx(vi,{to:"/about",children:"Про нас"}),f.jsx(vi,{to:"/contacts",children:"Контакти"})]}),GO=C.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,qO=C(Te)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,YO=C.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,XO=C.div`

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
`,KO=({onClick:e})=>{const t=Re(n=>n.favorites.items.length);return f.jsx(qO,{to:"/favorite",children:f.jsxs(YO,{onClick:e,children:[f.jsx(GO,{children:f.jsx("use",{href:`${hn}#icon-heart`})}),t>0&&f.jsx(XO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=e=>{const t=ZO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...JO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:vw("lucide",i),...!o&&!ej(l)&&{"aria-hidden":"true"},...l},[...a.map(([c,u])=>b.createElement(c,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(tj,{ref:o,iconNode:t,className:vw(`lucide-${QO(H0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=H0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Bc=Ke("arrow-down-narrow-wide",nj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Vc=Ke("arrow-right",rj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],oj=Ke("badge-percent",ij);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],sj=Ke("chevron-down",aj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],cj=Ke("chevron-up",lj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uj=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],G0=Ke("eye-off",uj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],q0=Ke("eye",dj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Xa=Ke("heart",fj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],hj=Ke("house",pj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],gj=Ke("info",mj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],yj=Ke("layers-plus",vj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],bj=Ke("mail",xj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Sj=Ke("shopping-bag",wj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],vo=Ke("shopping-cart",Cj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],yw=Ke("sliders-horizontal",_j);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],xw=Ke("trash-2",Ej);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Tj=Ke("user-round",kj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bw=Ke("x",Pj),Oj=({openLogin:e})=>{const[t,n]=b.useState(!1),r=$t(),i=()=>{localStorage.getItem("token")?r("/account"):e()};return f.jsx(WP,{children:f.jsx(HP,{children:f.jsxs(GP,{children:[f.jsxs(qP,{children:[f.jsx(KP,{to:"/",children:"Дідів хлів"}),f.jsxs(YP,{children:[f.jsx(UO,{}),f.jsx(XP,{onClick:i,children:f.jsx(Tj,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),f.jsx(KO,{}),f.jsx(HO,{}),f.jsx(ZP,{onClick:()=>n(!t),children:f.jsx(QP,{children:f.jsx("use",{href:`${hn}#icon-menu`})})}),f.jsx(rO,{open:t,onClick:()=>n(!1)}),f.jsxs(JP,{open:t,children:[f.jsx(eO,{onClick:()=>n(!1),children:f.jsx(bw,{size:28,strokeWidth:1.5})}),f.jsxs(tO,{children:[f.jsxs(gi,{onClick:()=>n(!1),to:"/",children:[f.jsx(hj,{size:22,strokeWidth:1.5})," Головна"]}),f.jsxs(gi,{onClick:()=>n(!1),to:"/catalog",children:[f.jsx(Sj,{size:22,strokeWidth:1.5})," Каталог"]}),f.jsxs(gi,{onClick:()=>n(!1),to:"/catalog/new",children:[f.jsx(yj,{size:22,strokeWidth:1.5}),"Новинки"]}),f.jsxs(gi,{onClick:()=>n(!1),to:"/catalog/sale",children:[f.jsx(oj,{size:22,strokeWidth:1.5}),"Акційні товари"]}),f.jsxs(gi,{onClick:()=>n(!1),to:"/about",children:[f.jsx(gj,{size:22,strokeWidth:1.5})," Про нас"]}),f.jsxs(gi,{onClick:()=>n(!1),to:"/contacts",children:[f.jsx(bj,{size:22,strokeWidth:1.5})," Контакти"]})]}),f.jsx(nO,{children:f.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),f.jsx(hO,{})]})})})},jj=C.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,$j=C.footer`
 
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
`,Mj=C.div`
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
`,Ij=C.div`
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
`,Dj=()=>f.jsx(jj,{children:f.jsxs($j,{children:[f.jsxs(Mj,{children:[f.jsxs(Cd,{children:[f.jsx(_d,{children:"Навігація"}),f.jsx(wn,{to:"/",children:"Головна"}),f.jsx(wn,{to:"/about",children:"Про нас"}),f.jsx(wn,{to:"/catalog",children:"Каталог"}),f.jsx(wn,{to:"/contacts",children:"Контакти"})]}),f.jsxs(Cd,{children:[f.jsx(_d,{children:"Інформація"}),f.jsx(wn,{to:"/delivery",children:"Оплата і доставка"}),f.jsx(wn,{children:"Повернення"}),f.jsx(wn,{children:"Гарантія"}),f.jsx(wn,{children:"Політика конфіденційності"})]})]}),f.jsxs(Cd,{children:[f.jsx(_d,{children:"Контакти"}),f.jsx(wn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),f.jsx(wn,{href:"mailto:email@email.com",children:"email@email.com"}),f.jsxs(Ij,{children:[f.jsx(Ed,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${hn}#icon-instagram`})})}),f.jsx(Ed,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${hn}#icon-telegram`})})}),f.jsx(Ed,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:f.jsx("use",{href:`${hn}#icon-olx`})})})]})]})]})}),Lj=({openLogin:e,openRegister:t})=>f.jsxs(f.Fragment,{children:[f.jsx(Oj,{openLogin:e,openRegister:t}),f.jsx("main",{style:{flex:1},children:f.jsx(Ry,{})}),f.jsx(Dj,{})]}),Aj=C.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,Rj=C.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
      text-align: center;

  @media screen and (min-width: 768px) {
 font-size: 35px;

  }

`,Fj=C.div`
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
`,zj=C.div`
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
`,Nj=C(Te)`
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
`,Bj=C.span`
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
`,Vj=C.div`
  padding: 10px 0;
`,Uj=C.h3`
  font-size: 20px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
   margin-bottom:16px;
`,Wj=C.div`
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

`;const Hj=C(Te)`
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

`,Gj=C.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,qj=C.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function ww(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=ww(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Xr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=ww(e))&&(r&&(r+=" "),r+=t);return r}function Yj(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}Yj(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Ka=e=>typeof e=="number"&&!isNaN(e),ni=e=>typeof e=="string",Zn=e=>typeof e=="function",Xj=e=>ni(e)||Ka(e),wp=e=>ni(e)||Zn(e)?e:null,Kj=(e,t)=>e===!1||Ka(e)&&e>0?e:t,Sp=e=>b.isValidElement(e)||ni(e)||Zn(e)||Ka(e);function Qj(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function Zj({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:c,isIn:u,playToast:d}){let y=n?`${e}--${a}`:e,g=n?`${t}--${a}`:t,h=b.useRef(0);return b.useLayoutEffect(()=>{let x=c.current,w=y.split(" "),p=m=>{m.target===c.current&&(d(),x.removeEventListener("animationend",p),x.removeEventListener("animationcancel",p),h.current===0&&m.type!=="animationcancel"&&x.classList.remove(...w))};x.classList.add(...w),x.addEventListener("animationend",p),x.addEventListener("animationcancel",p)},[]),b.useEffect(()=>{let x=c.current,w=()=>{x.removeEventListener("animationend",w),r?Qj(x,s,i):s()};u||(l?w():(h.current=1,x.className+=` ${g}`,x.addEventListener("animationend",w)))},[u]),K.createElement(K.Fragment,null,o)}}function Y0(e,t){return{content:Sw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Sw(e,t,n=!1){return b.isValidElement(e)&&!ni(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Zn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function Jj({closeToast:e,theme:t,ariaLabel:n="close"}){return K.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},K.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},K.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function e4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:c,theme:u}){let d=i||a&&l===0,y={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(y.transform=`scaleX(${l})`);let g=Xr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${u}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),h=Zn(o)?o({rtl:s,type:r,defaultClassName:g}):Xr(g,o),x={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{c&&n()}};return K.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},K.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${u} Toastify__progress-bar--${r}`}),K.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:h,style:y,...x}))}var t4=1,Cw=()=>`${t4++}`;function n4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,c=new Set,u=m=>(c.add(m),()=>c.delete(m)),d=()=>{a=Array.from(s.values()),c.forEach(m=>m())},y=({containerId:m,toastId:v,updateId:S})=>{let E=m?m!==e:e!==1,P=s.has(v)&&S==null;return E||P},g=(m,v)=>{s.forEach(S=>{var E;(v==null||v===S.props.toastId)&&((E=S.toggle)==null||E.call(S,m))})},h=m=>{var v,S;(S=(v=m.props)==null?void 0:v.onClose)==null||S.call(v,m.removalReason),m.isActive=!1},x=m=>{if(m==null)s.forEach(h);else{let v=s.get(m);v&&h(v)}d()},w=()=>{i-=o.length,o=[]},p=m=>{var v,S;let{toastId:E,updateId:P}=m.props,k=P==null;m.staleId&&s.delete(m.staleId),m.isActive=!0,s.set(E,m),d(),n(Y0(m,k?"added":"updated")),k&&((S=(v=m.props).onOpen)==null||S.call(v))};return{id:e,props:l,observe:u,toggle:g,removeToast:x,toasts:s,clearQueue:w,buildToast:(m,v)=>{if(y(v))return;let{toastId:S,updateId:E,data:P,staleId:k,delay:_}=v,$=E==null;$&&i++;let M={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(v).filter(([D,O])=>O!=null)),toastId:S,updateId:E,data:P,isIn:!1,className:wp(v.className||l.toastClassName),progressClassName:wp(v.progressClassName||l.progressClassName),autoClose:v.isLoading?!1:Kj(v.autoClose,l.autoClose),closeToast(D){s.get(S).removalReason=D,x(S)},deleteToast(){let D=s.get(S);if(D!=null){if(n(Y0(D,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){p(o.shift());return}d()}}};M.closeButton=l.closeButton,v.closeButton===!1||Sp(v.closeButton)?M.closeButton=v.closeButton:v.closeButton===!0&&(M.closeButton=Sp(l.closeButton)?l.closeButton:!0);let I={content:m,props:M,staleId:k};l.limit&&l.limit>0&&i>l.limit&&$?o.push(I):Ka(_)?setTimeout(()=>{p(I)},_):p(I)},setProps(m){l=m},setToggle:(m,v)=>{let S=s.get(m);S&&(S.toggle=v)},isToastActive:m=>{var v;return(v=s.get(m))==null?void 0:v.isActive},getSnapshot:()=>a}}var mt=new Map,Ma=[],Cp=new Set,r4=e=>Cp.forEach(t=>t(e)),_w=()=>mt.size>0;function i4(){Ma.forEach(e=>kw(e.content,e.options)),Ma=[]}var o4=(e,{containerId:t})=>{var n;return(n=mt.get(t||1))==null?void 0:n.toasts.get(e)};function Ew(e,t){var n;if(t)return!!((n=mt.get(t))!=null&&n.isToastActive(e));let r=!1;return mt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function a4(e){if(!_w()){Ma=Ma.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||Xj(e))mt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=mt.get(e.containerId);t?t.removeToast(e.id):mt.forEach(n=>{n.removeToast(e.id)})}}var s4=(e={})=>{mt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function kw(e,t){Sp(e)&&(_w()||Ma.push({content:e,options:t}),mt.forEach(n=>{n.buildToast(e,t)}))}function l4(e){var t;(t=mt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Tw(e,t){mt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function c4(e){let t=e.containerId||1;return{subscribe(n){let r=n4(t,e,r4);mt.set(t,r);let i=r.observe(n);return i4(),()=>{i(),mt.delete(t)}},setProps(n){var r;(r=mt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=mt.get(t))==null?void 0:n.getSnapshot()}}}function u4(e){return Cp.add(e),()=>{Cp.delete(e)}}function d4(e){return e&&(ni(e.toastId)||Ka(e.toastId))?e.toastId:Cw()}function Qa(e,t){return kw(e,t),t.toastId}function Uc(e,t){return{...t,type:t&&t.type||e,toastId:d4(t)}}function Wc(e){return(t,n)=>Qa(t,Uc(e,n))}function X(e,t){return Qa(e,Uc("default",t))}X.loading=(e,t)=>Qa(e,Uc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function f4(e,{pending:t,error:n,success:r},i){let o;t&&(o=ni(t)?X.loading(t,i):X.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,u,d)=>{if(u==null){X.dismiss(o);return}let y={type:c,...a,...i,data:d},g=ni(u)?{render:u}:u;return o?X.update(o,{...y,...g}):X(g.render,{...y,...g}),d},s=Zn(e)?e():e;return s.then(c=>l("success",r,c)).catch(c=>l("error",n,c)),s}X.promise=f4;X.success=Wc("success");X.info=Wc("info");X.error=Wc("error");X.warning=Wc("warning");X.warn=X.warning;X.dark=(e,t)=>Qa(e,Uc("default",{theme:"dark",...t}));function p4(e){a4(e)}X.dismiss=p4;X.clearWaitingQueue=s4;X.isActive=Ew;X.update=(e,t={})=>{let n=o4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Cw()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Qa(a,o)}};X.done=e=>{X.update(e,{progress:1})};X.onChange=u4;X.play=e=>Tw(!0,e);X.pause=e=>Tw(!1,e);function h4(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(c4(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(c=>{let{position:u}=c.props;s.has(u)||s.set(u,[]),s.get(u).push(c)}),Array.from(s,c=>l(c[0],c[1]))}return{getToastToRender:a,isToastActive:Ew,count:o==null?void 0:o.length}}function m4(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:c,onClick:u,closeOnClick:d}=e;l4({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return y(),()=>{g()}},[e.pauseOnFocusLoss]);function y(){document.hasFocus()||p(),window.addEventListener("focus",w),window.addEventListener("blur",p)}function g(){window.removeEventListener("focus",w),window.removeEventListener("blur",p)}function h(k){if(e.draggable===!0||e.draggable===k.pointerType){m();let _=o.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=k.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=k.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function x(k){let{top:_,bottom:$,left:M,right:I}=o.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&e.pauseOnHover&&k.clientX>=M&&k.clientX<=I&&k.clientY>=_&&k.clientY<=$?p():w()}function w(){n(!0)}function p(){n(!1)}function m(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",E)}function v(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",E)}function S(k){let _=o.current;if(a.canDrag&&_){a.didMove=!0,t&&p(),e.draggableDirection==="x"?a.delta=k.clientX-a.start:a.delta=k.clientY-a.start,a.start!==k.clientX&&(a.canCloseOnClick=!1);let $=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${$},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function E(){v();let k=o.current;if(a.canDrag&&a.didMove&&k){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let P={onPointerDown:h,onPointerUp:x};return l&&s&&(P.onMouseEnter=p,e.stacked||(P.onMouseLeave=w)),d&&(P.onClick=k=>{u&&u(k),a.canCloseOnClick&&c(!0)}),{playToast:w,pauseToast:p,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:P}}var g4=typeof window<"u"?b.useLayoutEffect:b.useEffect,Hc=({theme:e,type:t,isLoading:n,...r})=>K.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function v4(e){return K.createElement(Hc,{...e},K.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function y4(e){return K.createElement(Hc,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function x4(e){return K.createElement(Hc,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function b4(e){return K.createElement(Hc,{...e},K.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function w4(){return K.createElement("div",{className:"Toastify__spinner"})}var _p={info:y4,warning:v4,success:x4,error:b4,spinner:w4},S4=e=>e in _p;function C4({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Zn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=_p.spinner():S4(t)&&(i=_p[t](o))),i}var _4=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=m4(e),{closeButton:a,children:l,autoClose:s,onClick:c,type:u,hideProgressBar:d,closeToast:y,transition:g,position:h,className:x,style:w,progressClassName:p,updateId:m,role:v,progress:S,rtl:E,toastId:P,deleteToast:k,isIn:_,isLoading:$,closeOnClick:M,theme:I,ariaLabel:D}=e,O=Xr("Toastify__toast",`Toastify__toast-theme--${I}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":M}),F=Zn(x)?x({rtl:E,position:h,type:u,defaultClassName:O}):Xr(O,x),L=C4(e),A=!!S||!s,R={closeToast:y,type:u,theme:I},T=null;return a===!1||(Zn(a)?T=a(R):b.isValidElement(a)?T=b.cloneElement(a,R):T=Jj(R)),K.createElement(g,{isIn:_,done:k,position:h,preventExitTransition:n,nodeRef:r,playToast:o},K.createElement("div",{id:P,tabIndex:0,onClick:c,"data-in":_,className:F,...i,style:w,ref:r,..._&&{role:v,"aria-label":D}},L!=null&&K.createElement("div",{className:Xr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},L),Sw(l,e,!t),T,!e.customProgressBar&&K.createElement(e4,{...m&&!A?{key:`p-${m}`}:{},rtl:E,theme:I,delay:s,isRunning:t,isIn:_,closeToast:y,hide:d,type:u,className:p,controlledProgress:A,progress:S||0})))},E4=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),k4=Zj(E4("bounce",!0)),T4={position:"top-right",transition:k4,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Dn(e){let t={...T4,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=h4(t),{className:c,style:u,rtl:d,containerId:y,hotKeys:g}=t;function h(w){let p=Xr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":d});return Zn(c)?c({position:w,rtl:d,defaultClassName:p}):Xr(p,wp(c))}function x(){n&&(i(!0),X.play())}return g4(()=>{var w;if(n){let p=o.current.querySelectorAll('[data-in="true"]'),m=12,v=(w=t.position)==null?void 0:w.includes("top"),S=0,E=0;Array.from(p).reverse().forEach((P,k)=>{let _=P;_.classList.add("Toastify__toast--stacked"),k>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=v?"top":"bot");let $=S*(r?.2:1)+(r?0:m*k);_.style.setProperty("--y",`${v?$:$*-1}px`),_.style.setProperty("--g",`${m}`),_.style.setProperty("--s",`${1-(r?E:0)}`),S+=_.offsetHeight,E+=.025})}},[r,s,n]),b.useEffect(()=>{function w(p){var m;let v=o.current;g(p)&&((m=v.querySelector('[tabIndex="0"]'))==null||m.focus(),i(!1),X.pause()),p.key==="Escape"&&(document.activeElement===v||v!=null&&v.contains(document.activeElement))&&(i(!0),X.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[g]),K.createElement("section",{ref:o,className:"Toastify",id:y,onMouseEnter:()=>{n&&(i(!1),X.pause())},onMouseLeave:x,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,p)=>{let m=p.length?{...u}:{...u,pointerEvents:"none"};return K.createElement("div",{tabIndex:-1,className:h(w),"data-stacked":n,style:m,key:`c-${w}`},p.map(({content:v,props:S})=>K.createElement(_4,{...S,stacked:n,collapseAll:x,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},v)))}))}const ri="/Didiv/assets/nofoto-2f8d9d99.png",P4=C.div`
`,O4=C.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,j4=C.h2`
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

`,$4=C.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;C.div``;const M4=C.div`
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
`,I4=C.div`
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
`,fm=C.div`
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
`,D4=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,L4=C.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,A4=C.p`
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

`;const Pw=C.div.attrs({className:"card-buttons"})`
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
`;const R4=C.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,kd=C.button`
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
`,F4=C.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,z4=C.button`
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
`,N4=C.div`
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
`,Ow=C.div`
  text-align: center;
  width: 100px;
 
`,jw=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,$w=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Mw=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Iw=C.span`
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
`;function Ze(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var B4=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),X0=B4,Td=()=>Math.random().toString(36).substring(7).split("").join("."),V4={INIT:`@@redux/INIT${Td()}`,REPLACE:`@@redux/REPLACE${Td()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Td()}`},Yl=V4;function pm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function hm(e,t,n){if(typeof e!="function")throw new Error(Ze(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ze(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ze(1));return n(hm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function c(){a===o&&(a=new Map,o.forEach((w,p)=>{a.set(p,w)}))}function u(){if(s)throw new Error(Ze(3));return i}function d(w){if(typeof w!="function")throw new Error(Ze(4));if(s)throw new Error(Ze(5));let p=!0;c();const m=l++;return a.set(m,w),function(){if(p){if(s)throw new Error(Ze(6));p=!1,c(),a.delete(m),o=null}}}function y(w){if(!pm(w))throw new Error(Ze(7));if(typeof w.type>"u")throw new Error(Ze(8));if(typeof w.type!="string")throw new Error(Ze(17));if(s)throw new Error(Ze(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(m=>{m()}),w}function g(w){if(typeof w!="function")throw new Error(Ze(10));r=w,y({type:Yl.REPLACE})}function h(){const w=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(Ze(11));function m(){const S=p;S.next&&S.next(u())}return m(),{unsubscribe:w(m)}},[X0](){return this}}}return y({type:Yl.INIT}),{dispatch:y,subscribe:d,getState:u,replaceReducer:g,[X0]:h}}function U4(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Yl.INIT})>"u")throw new Error(Ze(12));if(typeof n(void 0,{type:Yl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ze(13))})}function W4(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{U4(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const c={};for(let u=0;u<r.length;u++){const d=r[u],y=n[d],g=a[d],h=y(g,l);if(typeof h>"u")throw l&&l.type,new Error(Ze(14));c[d]=h,s=s||h!==g}return s=s||r.length!==Object.keys(a).length,s?c:a}}function Xl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function H4(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Ze(15))};const a={getState:i.getState,dispatch:(s,...c)=>o(s,...c)},l=e.map(s=>s(a));return o=Xl(...l)(i.dispatch),{...i,dispatch:o}}}function G4(e){return pm(e)&&"type"in e&&typeof e.type=="string"}var Dw=Symbol.for("immer-nothing"),K0=Symbol.for("immer-draftable"),vt=Symbol.for("immer-state");function un(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Rt=Object,ao=Rt.getPrototypeOf,Kl="constructor",Gc="prototype",Ep="configurable",Ql="enumerable",il="writable",Ia="value",Jn=e=>!!e&&!!e[vt];function vn(e){var t;return e?Lw(e)||Yc(e)||!!e[K0]||!!((t=e[Kl])!=null&&t[K0])||Xc(e)||Kc(e):!1}var q4=Rt[Gc][Kl].toString(),Q0=new WeakMap;function Lw(e){if(!e||!mm(e))return!1;const t=ao(e);if(t===null||t===Rt[Gc])return!0;const n=Rt.hasOwnProperty.call(t,Kl)&&t[Kl];if(n===Object)return!0;if(!ki(n))return!1;let r=Q0.get(n);return r===void 0&&(r=Function.toString.call(n),Q0.set(n,r)),r===q4}function qc(e,t,n=!0){Za(e)===0?(n?Reflect.ownKeys(e):Rt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Za(e){const t=e[vt];return t?t.type_:Yc(e)?1:Xc(e)?2:Kc(e)?3:0}var Z0=(e,t,n=Za(e))=>n===2?e.has(t):Rt[Gc].hasOwnProperty.call(e,t),kp=(e,t,n=Za(e))=>n===2?e.get(t):e[t],Zl=(e,t,n,r=Za(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function Y4(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Yc=Array.isArray,Xc=e=>e instanceof Map,Kc=e=>e instanceof Set,mm=e=>typeof e=="object",ki=e=>typeof e=="function",Pd=e=>typeof e=="boolean";function X4(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Bn=e=>e.copy_||e.base_,gm=e=>e.modified_?e.copy_:e.base_;function Tp(e,t){if(Xc(e))return new Map(e);if(Kc(e))return new Set(e);if(Yc(e))return Array[Gc].slice.call(e);const n=Lw(e);if(t===!0||t==="class_only"&&!n){const r=Rt.getOwnPropertyDescriptors(e);delete r[vt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[il]===!1&&(l[il]=!0,l[Ep]=!0),(l.get||l.set)&&(r[a]={[Ep]:!0,[il]:!0,[Ql]:l[Ql],[Ia]:e[a]})}return Rt.create(ao(e),r)}else{const r=ao(e);if(r!==null&&n)return{...e};const i=Rt.create(r);return Rt.assign(i,e)}}function vm(e,t=!1){return Qc(e)||Jn(e)||!vn(e)||(Za(e)>1&&Rt.defineProperties(e,{set:_s,add:_s,clear:_s,delete:_s}),Rt.freeze(e),t&&qc(e,(n,r)=>{vm(r,!0)},!1)),e}function K4(){un(2)}var _s={[Ia]:K4};function Qc(e){return e===null||!mm(e)?!0:Rt.isFrozen(e)}var Jl="MapSet",Pp="Patches",J0="ArrayMethods",Aw={};function ii(e){const t=Aw[e];return t||un(0,e),t}var ev=e=>!!Aw[e],Da,Rw=()=>Da,Q4=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:ev(Jl)?ii(Jl):void 0,arrayMethodsPlugin_:ev(J0)?ii(J0):void 0});function tv(e,t){t&&(e.patchPlugin_=ii(Pp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Op(e){jp(e),e.drafts_.forEach(Z4),e.drafts_=null}function jp(e){e===Da&&(Da=e.parent_)}var nv=e=>Da=Q4(Da,e);function Z4(e){const t=e[vt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function rv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[vt].modified_&&(Op(t),un(4)),vn(e)&&(e=iv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[vt].base_,e,t)}else e=iv(t,n);return J4(t,e,!0),Op(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Dw?e:void 0}function iv(e,t){if(Qc(t))return t;const n=t[vt];if(!n)return ec(t,e.handledSet_,e);if(!Zc(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Nw(n,e)}return n.copy_}function J4(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&vm(t,n)}function Fw(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Zc=(e,t)=>e.scope_===t,e$=[];function zw(e,t,n,r){const i=Bn(e),o=e.type_;if(r!==void 0&&kp(i,r,o)===t){Zl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;qc(i,(s,c)=>{if(Jn(c)){const u=l.get(c)||[];u.push(s),l.set(c,u)}})}const a=e.draftLocations_.get(t)??e$;for(const l of a)Zl(i,l,n,o)}function t$(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!Zc(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=gm(o);zw(e,o.draft_??o,a,n),Nw(o,i)})}function Nw(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Fw(e)}}function n$(e,t,n){const{scope_:r}=e;if(Jn(n)){const i=n[vt];Zc(i,r)&&i.callbacks_.push(function(){ol(e);const a=gm(i);zw(e,n,a,t)})}else vn(n)&&e.callbacks_.push(function(){const o=Bn(e);e.type_===3?o.has(n)&&ec(n,r.handledSet_,r):kp(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&ec(kp(e.copy_,t,e.type_),r.handledSet_,r)})}function ec(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Jn(e)||t.has(e)||!vn(e)||Qc(e)||(t.add(e),qc(e,(r,i)=>{if(Jn(i)){const o=i[vt];if(Zc(o,n)){const a=gm(o);Zl(e,r,a,e.type_),Fw(o)}}else vn(i)&&ec(i,t,n)})),e}function r$(e,t){const n=Yc(e),r={type_:n?1:0,scope_:t?t.scope_:Rw(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=tc;n&&(i=[r],o=La);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var tc={get(e,t){if(t===vt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Bn(e);if(!Z0(i,t,e.type_))return i$(e,i,t);const o=i[t];if(e.finalized_||!vn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&X4(t))return o;if(o===Od(e.base_,t)){ol(e);const a=e.type_===1?+t:t,l=Mp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Bn(e)},ownKeys(e){return Reflect.ownKeys(Bn(e))},set(e,t,n){const r=Bw(Bn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Od(Bn(e),t),o=i==null?void 0:i[vt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(Y4(n,i)&&(n!==void 0||Z0(e.base_,t,e.type_)))return!0;ol(e),$p(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),n$(e,t,n)),!0},deleteProperty(e,t){return ol(e),Od(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),$p(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Bn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[il]:!0,[Ep]:e.type_!==1||t!=="length",[Ql]:r[Ql],[Ia]:n[t]}},defineProperty(){un(11)},getPrototypeOf(e){return ao(e.base_)},setPrototypeOf(){un(12)}},La={};for(let e in tc){let t=tc[e];La[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}La.deleteProperty=function(e,t){return La.set.call(this,e,t,void 0)};La.set=function(e,t,n){return tc.set.call(this,e[0],t,n,e[0])};function Od(e,t){const n=e[vt];return(n?Bn(n):e)[t]}function i$(e,t,n){var i;const r=Bw(t,n);return r?Ia in r?r[Ia]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Bw(e,t){if(!(t in e))return;let n=ao(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=ao(n)}}function $p(e){e.modified_||(e.modified_=!0,e.parent_&&$p(e.parent_))}function ol(e){e.copy_||(e.assigned_=new Map,e.copy_=Tp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var o$=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(ki(t)&&!ki(n)){const o=n;n=t;const a=this;return function(s=o,...c){return a.produce(s,u=>n.call(this,u,...c))}}ki(n)||un(6),r!==void 0&&!ki(r)&&un(7);let i;if(vn(t)){const o=nv(this),a=Mp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?Op(o):jp(o)}return tv(o,r),rv(i,o)}else if(!t||!mm(t)){if(i=n(t),i===void 0&&(i=t),i===Dw&&(i=void 0),this.autoFreeze_&&vm(i,!0),r){const o=[],a=[];ii(Pp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else un(1,t)},this.produceWithPatches=(t,n)=>{if(ki(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},Pd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Pd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Pd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){vn(e)||un(8),Jn(e)&&(e=a$(e));const t=nv(this),n=Mp(t,e,void 0);return n[vt].isManual_=!0,jp(t),n}finishDraft(e,t){const n=e&&e[vt];(!n||!n.isManual_)&&un(9);const{scope_:r}=n;return tv(r,t),rv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=ii(Pp).applyPatches_;return Jn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Mp(e,t,n,r){const[i,o]=Xc(t)?ii(Jl).proxyMap_(t,n):Kc(t)?ii(Jl).proxySet_(t,n):r$(t,n);return((n==null?void 0:n.scope_)??Rw()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?t$(n,o,r):o.callbacks_.push(function(s){var u;(u=s.mapSetPlugin_)==null||u.fixSetContents(o);const{patchPlugin_:c}=s;o.modified_&&c&&c.generatePatches_(o,[],s)}),i}function a$(e){return Jn(e)||un(10,e),Vw(e)}function Vw(e){if(!vn(e)||Qc(e))return e;const t=e[vt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Tp(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=Tp(e,!0);return qc(n,(i,o)=>{Zl(n,i,Vw(o))},r),t&&(t.finalized_=!1),n}var s$=new o$,Uw=s$.produce;function Ww(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var l$=Ww(),c$=Ww,u$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Xl:Xl.apply(null,arguments)};function ov(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Gn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>G4(r)&&r.type===e,n}var Hw=class Ko extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ko.prototype)}static get[Symbol.species](){return Ko}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ko(...t[0].concat(this)):new Ko(...t.concat(this))}};function av(e){return vn(e)?Uw(e,()=>{}):e}function Es(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function d$(e){return typeof e=="boolean"}var f$=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new Hw;return n&&(d$(n)?a.push(l$):a.push(c$(n.extraArgument))),a},p$="RTK_autoBatch",sv=e=>t=>{setTimeout(t,e)},h$=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:sv(10):e.type==="callback"?e.queueNotification:sv(e.timeout),c=()=>{a=!1,o&&(o=!1,l.forEach(u=>u()))};return Object.assign({},r,{subscribe(u){const d=()=>i&&u(),y=r.subscribe(d);return l.add(u),()=>{y(),l.delete(u)}},dispatch(u){var d;try{return i=!((d=u==null?void 0:u.meta)!=null&&d[p$]),o=!i,o&&(a||(a=!0,s(c))),r.dispatch(u)}finally{i=!0}}})},m$=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new Hw(e);return r&&i.push(h$(typeof r=="object"?r:void 0)),i};function g$(e){const t=f$(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(pm(n))s=W4(n);else throw new Error(Gn(1));let c;typeof r=="function"?c=r(t):c=t();let u=Xl;i&&(u=u$({trace:!1,...typeof i=="object"&&i}));const d=H4(...c),y=m$(d);let g=typeof l=="function"?l(y):y();const h=u(...g);return hm(s,a,h)}function Gw(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(Gn(28));if(l in t)throw new Error(Gn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function v$(e){return typeof e=="function"}function y$(e,t){let[n,r,i]=Gw(t),o;if(v$(e))o=()=>av(e());else{const l=av(e);o=()=>l}function a(l=o(),s){let c=[n[s.type],...r.filter(({matcher:u})=>u(s)).map(({reducer:u})=>u)];return c.filter(u=>!!u).length===0&&(c=[i]),c.reduce((u,d)=>{if(d)if(Jn(u)){const g=d(u,s);return g===void 0?u:g}else{if(vn(u))return Uw(u,y=>d(y,s));{const y=d(u,s);if(y===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}}return u},l)}return a.getInitialState=o,a}var x$=Symbol.for("rtk-slice-createasyncthunk");function b$(e,t){return`${e}/${t}`}function w$({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[x$];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(Gn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(C$()):i.reducers)||{},s=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(S,E){const P=typeof S=="string"?S:S.type;if(!P)throw new Error(Gn(12));if(P in c.sliceCaseReducersByType)throw new Error(Gn(13));return c.sliceCaseReducersByType[P]=E,u},addMatcher(S,E){return c.sliceMatchers.push({matcher:S,reducer:E}),u},exposeAction(S,E){return c.actionCreators[S]=E,u},exposeCaseReducer(S,E){return c.sliceCaseReducersByName[S]=E,u}};s.forEach(S=>{const E=l[S],P={reducerName:S,type:b$(o,S),createNotation:typeof i.reducers=="function"};E$(E)?T$(P,E,u,t):_$(P,E,u)});function d(){const[S={},E=[],P=void 0]=typeof i.extraReducers=="function"?Gw(i.extraReducers):[i.extraReducers],k={...S,...c.sliceCaseReducersByType};return y$(i.initialState,_=>{for(let $ in k)_.addCase($,k[$]);for(let $ of c.sliceMatchers)_.addMatcher($.matcher,$.reducer);for(let $ of E)_.addMatcher($.matcher,$.reducer);P&&_.addDefaultCase(P)})}const y=S=>S,g=new Map,h=new WeakMap;let x;function w(S,E){return x||(x=d()),x(S,E)}function p(){return x||(x=d()),x.getInitialState()}function m(S,E=!1){function P(_){let $=_[S];return typeof $>"u"&&E&&($=Es(h,P,p)),$}function k(_=y){const $=Es(g,E,()=>new WeakMap);return Es($,_,()=>{const M={};for(const[I,D]of Object.entries(i.selectors??{}))M[I]=S$(D,_,()=>Es(h,_,p),E);return M})}return{reducerPath:S,getSelectors:k,get selectors(){return k(P)},selectSlice:P}}const v={name:o,reducer:w,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:p,...m(a),injectInto(S,{reducerPath:E,...P}={}){const k=E??a;return S.inject({reducerPath:k,reducer:w},P),{...v,...m(k,!0)}}};return v}}function S$(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var qw=w$();function C$(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function _$({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!k$(r))throw new Error(Gn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?ov(e,a):ov(e))}function E$(e){return e._reducerDefinitionType==="asyncThunk"}function k$(e){return e._reducerDefinitionType==="reducerWithPrepare"}function T$({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Gn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:c,options:u}=n,d=i(e,o,u);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),c&&r.addMatcher(d.settled,c),r.exposeCaseReducer(t,{fulfilled:a||ks,pending:l||ks,rejected:s||ks,settled:c||ks})}function ks(){}function Gn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Yw=qw({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]},setFavorites(e,t){e.items=t.payload},addFavorite(e,t){e.items.some(r=>r.id===t.payload.id)||e.items.push(t.payload)},removeFavorite(e,t){e.items=e.items.filter(n=>n.id!==t.payload)}}}),{toggleFavorite:DB,clearFavorite:P$,addFavorite:lv,removeFavorite:cv,setFavorites:O$}=Yw.actions,j$=Yw.reducer,$$=async(e,t,n,r)=>{const i=t==null?void 0:t.find(a=>{var l;return((l=a.product)==null?void 0:l.documentId)===(e==null?void 0:e.documentId)});if(i){const a=i.user.map(l=>l.documentId);if(!a.includes(n)){a.push(n);const l=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:a}})});if(!l.ok)throw new Error("Не вдалося оновити favorite");return await l.json()}return i}const o=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e.documentId,user:[n]}})});if(!o.ok)throw new Error("Не вдалося створити favorite");return await o.json()},M$=async(e,t,n,r)=>{var l;const i=t==null?void 0:t.find(s=>{var c;return((c=s.product)==null?void 0:c.documentId)===(e==null?void 0:e.documentId)});if(!i)return;const o=(l=i.user)==null?void 0:l.filter(s=>s.documentId!==n).map(s=>s.documentId);if((o==null?void 0:o.length)===0){if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити favorite");return}const a=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:o}})});if(!a.ok)throw new Error("Не вдалося оновити favorite");return await a.json()},ui=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o)return t?(n(cv(e.id)),r.warning(`${e.name} видалено з обраного`)):(n(lv(e)),r.success(`${e.name} додано в обране`)),!0;const a=o.documentId,l=o.id;try{const s=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${l}?populate[favorites][populate][0]=product&populate[favorites][populate][1]=user`,{headers:{Authorization:`Bearer ${i}`}});if(!s.ok)throw new Error("Не вдалося отримати favorites користувача");const c=await s.json(),u=await fetch("https://backenddidiv-production.up.railway.app/api/favorites?populate=*",{headers:{Authorization:`Bearer ${i}`}}),{data:d}=await u.json(),y=c==null?void 0:c.favorites;return t?(await M$(e,y,a,i),n(cv(e.id)),r.warning(`${e.name} видалено з обраного`),!0):(await $$(e,d,a,i),n(lv(e)),r.success(`${e.name} додано в обране`),!0)}catch{return r.error("Не вдалося оновити обране"),!1}},Xw=qw({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===n.id);if(r){if(r.quantity>=n.stock)return;r.quantity+=1}else e.items.push({...n,quantity:1})},setCartItemQuantity:(e,t)=>{const{id:n,quantity:r}=t.payload,i=e.items.find(o=>o.id===n);i&&(i.quantity=r)},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},setCartItems:(e,t)=>{e.items=t.payload},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{setCartItems:Kw,addToCart:Aa,setCartItemQuantity:uv,removeFromCart:I$,clearCart:Ja,addAllToCart:D$,incrementQuantity:L$,decrementQuantity:A$}=Xw.actions,R$=Xw.reducer,F$=async(e,t,n,r)=>{const i=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e,quantity:t,user:n}})});if(!i.ok)throw new Error("Не вдалося створити CartItem");return i.json()},z$=async(e,t,n)=>{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({data:{quantity:t}})});if(!r.ok)throw new Error("Не вдалося оновити CartItem");return r.json()},ym=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o){for(let l=0;l<t;l++)n(Aa(e));return r.success(`${e.name} додано в кошик!`),!0}const a=o.id;try{const l=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${a}&populate=product`,{headers:{Authorization:`Bearer ${i}`}});if(!l.ok)throw new Error("Не вдалося отримати кошик користувача");const{data:s}=await l.json(),c=s.find(u=>{var d;return((d=u.product)==null?void 0:d.documentId)===e.documentId});if(c){const u=c.quantity+t;if(u>e.stock)return r.warning(`Доступно лише ${e.stock} шт.`),!1;await z$(c.documentId,u,i),n(uv({id:e.id,quantity:u}))}else await F$(e.documentId,t,a,i),n(Aa({...e})),t>1&&n(uv({id:e.id,quantity:t}));return r.success(`${e.name} додано в кошик!`),!0}catch(l){return console.error(l),r.error("Не вдалося додати товар у кошик"),!1}},Qw=()=>{const e=Wt(),[t,n]=b.useState([]),r=Re(s=>s.favorites.items),i=Re(s=>s.cart.items),o=$t();b.useEffect(()=>{const s=new Date,c=new Date;c.setDate(s.getDate()-7);const u=c.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${u}`).then(d=>d.json()).then(d=>n(d.data)).catch(d=>console.error("Помилка завантаження нових товарів:",d))},[]);const a=(s,c)=>{c.stopPropagation();const u=r.some(d=>d.id===(s==null?void 0:s.id));ui(s,u,e,X)},l=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:f.jsxs(Aj,{children:[f.jsx(Dn,{}),f.jsx(Rj,{children:"Нові товари"}),f.jsxs(Fj,{children:[l.map(s=>{var p;const c=r.some(m=>m.id===s.id),u=i.find(m=>m.id===s.id),y=(u?u.quantity:0)>=(s.stock||0),g=s.new_price&&s.new_price<s.price,h=g?s.new_price:s.price,x=g?Math.round((s.price-s.new_price)/s.price*100):0,w=async()=>{if(y){X.warning("Товар вже в кошику (досягнуто максимум)");return}if(y){X.warning(`Доступно лише ${s.stock} шт.`);return}await ym(s,1,e,X)};return f.jsxs(zj,{onClick:()=>o(`/product/${s.slug??s.id}`),children:[f.jsxs(Nj,{children:[f.jsx(Bj,{children:"Новинка"}),f.jsx("img",{src:((p=s.images)==null?void 0:p[0].url)||ri,alt:s.name,onError:m=>{m.currentTarget.onerror=null,m.currentTarget.src=ri}}),f.jsx("div",{className:"overlay"})]}),f.jsxs(Vj,{children:[f.jsx(Uj,{children:s.name}),f.jsxs(Wj,{children:[f.jsx(Ow,{children:f.jsxs(jw,{children:[f.jsxs($w,{$discount:g,children:[h.toLocaleString()," грн"]}),g&&f.jsxs(Mw,{children:[s.price.toLocaleString()," грн"]}),g&&f.jsxs(Iw,{children:["-",x,"%"]})]})}),f.jsxs(Pw,{children:[f.jsx(ql,{onClick:m=>w(),children:f.jsx(vo,{size:24,color:u?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(ql,{onClick:m=>a(s,m),children:f.jsx(Xa,{size:24,fill:c?"#ff4d4f":"none",color:c?"#ff4d4f":"#000000",strokeWidth:c?1:2})})]})]})]})]},s.id)}),f.jsx(Hj,{to:"/catalog/new",children:f.jsxs(Gj,{children:[f.jsx("p",{children:"Усі новинки"}),f.jsx(qj,{children:f.jsx(Vc,{size:24})})]})})]})]})};function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function N$(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function B$(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var V$=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(B$(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=N$(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),at="-ms-",nc="-moz-",ue="-webkit-",Zw="comm",xm="rule",bm="decl",U$="@import",Jw="@keyframes",W$="@layer",H$=Math.abs,Jc=String.fromCharCode,G$=Object.assign;function q$(e,t){return et(e,0)^45?(((t<<2^et(e,0))<<2^et(e,1))<<2^et(e,2))<<2^et(e,3):0}function eS(e){return e.trim()}function Y$(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function Ip(e,t){return e.indexOf(t)}function et(e,t){return e.charCodeAt(t)|0}function Ra(e,t,n){return e.slice(t,n)}function Cn(e){return e.length}function wm(e){return e.length}function Ts(e,t){return t.push(e),e}function X$(e,t){return e.map(t).join("")}var eu=1,so=1,tS=0,Ot=0,Le=0,yo="";function tu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:eu,column:so,length:a,return:""}}function Lo(e,t){return G$(tu("",null,null,"",null,null,0),e,{length:-e.length},t)}function K$(){return Le}function Q$(){return Le=Ot>0?et(yo,--Ot):0,so--,Le===10&&(so=1,eu--),Le}function zt(){return Le=Ot<tS?et(yo,Ot++):0,so++,Le===10&&(so=1,eu++),Le}function On(){return et(yo,Ot)}function al(){return Ot}function es(e,t){return Ra(yo,e,t)}function Fa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nS(e){return eu=so=1,tS=Cn(yo=e),Ot=0,[]}function rS(e){return yo="",e}function sl(e){return eS(es(Ot-1,Dp(e===91?e+2:e===40?e+1:e)))}function Z$(e){for(;(Le=On())&&Le<33;)zt();return Fa(e)>2||Fa(Le)>3?"":" "}function J$(e,t){for(;--t&&zt()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return es(e,al()+(t<6&&On()==32&&zt()==32))}function Dp(e){for(;zt();)switch(Le){case e:return Ot;case 34:case 39:e!==34&&e!==39&&Dp(Le);break;case 40:e===41&&Dp(e);break;case 92:zt();break}return Ot}function e3(e,t){for(;zt()&&e+Le!==47+10;)if(e+Le===42+42&&On()===47)break;return"/*"+es(t,Ot-1)+"*"+Jc(e===47?e:zt())}function t3(e){for(;!Fa(On());)zt();return es(e,Ot)}function n3(e){return rS(ll("",null,null,null,[""],e=nS(e),0,[0],e))}function ll(e,t,n,r,i,o,a,l,s){for(var c=0,u=0,d=a,y=0,g=0,h=0,x=1,w=1,p=1,m=0,v="",S=i,E=o,P=r,k=v;w;)switch(h=m,m=zt()){case 40:if(h!=108&&et(k,d-1)==58){Ip(k+=de(sl(m),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:k+=sl(m);break;case 9:case 10:case 13:case 32:k+=Z$(h);break;case 92:k+=J$(al()-1,7);continue;case 47:switch(On()){case 42:case 47:Ts(r3(e3(zt(),al()),t,n),s);break;default:k+="/"}break;case 123*x:l[c++]=Cn(k)*p;case 125*x:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+u:p==-1&&(k=de(k,/\f/g,"")),g>0&&Cn(k)-d&&Ts(g>32?fv(k+";",r,n,d-1):fv(de(k," ","")+";",r,n,d-2),s);break;case 59:k+=";";default:if(Ts(P=dv(k,t,n,c,u,i,l,v,S=[],E=[],d),o),m===123)if(u===0)ll(k,t,P,P,S,o,d,l,E);else switch(y===99&&et(k,3)===110?100:y){case 100:case 108:case 109:case 115:ll(e,P,P,r&&Ts(dv(e,P,P,0,0,i,l,v,i,S=[],d),E),i,E,d,l,r?S:E);break;default:ll(k,P,P,P,[""],E,0,l,E)}}c=u=g=0,x=p=1,v=k="",d=a;break;case 58:d=1+Cn(k),g=h;default:if(x<1){if(m==123)--x;else if(m==125&&x++==0&&Q$()==125)continue}switch(k+=Jc(m),m*x){case 38:p=u>0?1:(k+="\f",-1);break;case 44:l[c++]=(Cn(k)-1)*p,p=1;break;case 64:On()===45&&(k+=sl(zt())),y=On(),u=d=Cn(v=k+=t3(al())),m++;break;case 45:h===45&&Cn(k)==2&&(x=0)}}return o}function dv(e,t,n,r,i,o,a,l,s,c,u){for(var d=i-1,y=i===0?o:[""],g=wm(y),h=0,x=0,w=0;h<r;++h)for(var p=0,m=Ra(e,d+1,d=H$(x=a[h])),v=e;p<g;++p)(v=eS(x>0?y[p]+" "+m:de(m,/&\f/g,y[p])))&&(s[w++]=v);return tu(e,t,n,i===0?xm:l,s,c,u)}function r3(e,t,n){return tu(e,t,n,Zw,Jc(K$()),Ra(e,2,-2),0)}function fv(e,t,n,r){return tu(e,t,n,bm,Ra(e,0,r),Ra(e,r+1,-1),r)}function Hi(e,t){for(var n="",r=wm(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function i3(e,t,n,r){switch(e.type){case W$:if(e.children.length)break;case U$:case bm:return e.return=e.return||e.value;case Zw:return"";case Jw:return e.return=e.value+"{"+Hi(e.children,r)+"}";case xm:e.value=e.props.join(",")}return Cn(n=Hi(e.children,r))?e.return=e.value+"{"+n+"}":""}function o3(e){var t=wm(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function a3(e){return function(t){t.root||(t=t.return)&&e(t)}}function s3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var l3=function(t,n,r){for(var i=0,o=0;i=o,o=On(),i===38&&o===12&&(n[r]=1),!Fa(o);)zt();return es(t,Ot)},c3=function(t,n){var r=-1,i=44;do switch(Fa(i)){case 0:i===38&&On()===12&&(n[r]=1),t[r]+=l3(Ot-1,n,r);break;case 2:t[r]+=sl(i);break;case 4:if(i===44){t[++r]=On()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Jc(i)}while(i=zt());return t},u3=function(t,n){return rS(c3(nS(t),n))},pv=new WeakMap,d3=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!pv.get(r))&&!i){pv.set(t,!0);for(var o=[],a=u3(n,o),l=r.props,s=0,c=0;s<a.length;s++)for(var u=0;u<l.length;u++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[u]):l[u]+" "+a[s]}}},f3=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function iS(e,t){switch(q$(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+nc+e+at+e+e;case 6828:case 4268:return ue+e+at+e+e;case 6165:return ue+e+at+"flex-"+e+e;case 5187:return ue+e+de(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+at+"flex-$1$2")+e;case 5443:return ue+e+at+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ue+e+at+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ue+e+at+de(e,"shrink","negative")+e;case 5292:return ue+e+at+de(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+de(e,"-grow","")+ue+e+at+de(e,"grow","positive")+e;case 4554:return ue+de(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+at+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(e)-1-t>6)switch(et(e,t+1)){case 109:if(et(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+nc+(et(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ip(e,"stretch")?iS(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(et(e,t+1)!==115)break;case 6444:switch(et(e,Cn(e)-3-(~Ip(e,"!important")&&10))){case 107:return de(e,":",":"+ue)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(et(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+at+"$2box$3")+e}break;case 5936:switch(et(e,t+11)){case 114:return ue+e+at+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+at+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+at+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ue+e+at+e+e}return e}var p3=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case bm:t.return=iS(t.value,t.length);break;case Jw:return Hi([Lo(t,{value:de(t.value,"@","@"+ue)})],i);case xm:if(t.length)return X$(t.props,function(o){switch(Y$(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Hi([Lo(t,{props:[de(o,/:(read-\w+)/,":"+nc+"$1")]})],i);case"::placeholder":return Hi([Lo(t,{props:[de(o,/:(plac\w+)/,":"+ue+"input-$1")]}),Lo(t,{props:[de(o,/:(plac\w+)/,":"+nc+"$1")]}),Lo(t,{props:[de(o,/:(plac\w+)/,at+"input-$1")]})],i)}return""})}},h3=[p3],m3=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var w=x.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||h3,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var w=x.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)o[w[p]]=!0;l.push(x)});var s,c=[d3,f3];{var u,d=[i3,a3(function(x){u.insert(x)})],y=o3(c.concat(i,d)),g=function(w){return Hi(n3(w),y)};s=function(w,p,m,v){u=m,g(w?w+"{"+p.styles+"}":p.styles),v&&(h.inserted[p.name]=!0)}}var h={key:n,sheet:new V$({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return h.sheet.hydrate(l),h},oS={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,Sm=Qe?Symbol.for("react.element"):60103,Cm=Qe?Symbol.for("react.portal"):60106,nu=Qe?Symbol.for("react.fragment"):60107,ru=Qe?Symbol.for("react.strict_mode"):60108,iu=Qe?Symbol.for("react.profiler"):60114,ou=Qe?Symbol.for("react.provider"):60109,au=Qe?Symbol.for("react.context"):60110,_m=Qe?Symbol.for("react.async_mode"):60111,su=Qe?Symbol.for("react.concurrent_mode"):60111,lu=Qe?Symbol.for("react.forward_ref"):60112,cu=Qe?Symbol.for("react.suspense"):60113,g3=Qe?Symbol.for("react.suspense_list"):60120,uu=Qe?Symbol.for("react.memo"):60115,du=Qe?Symbol.for("react.lazy"):60116,v3=Qe?Symbol.for("react.block"):60121,y3=Qe?Symbol.for("react.fundamental"):60117,x3=Qe?Symbol.for("react.responder"):60118,b3=Qe?Symbol.for("react.scope"):60119;function Ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Sm:switch(e=e.type,e){case _m:case su:case nu:case iu:case ru:case cu:return e;default:switch(e=e&&e.$$typeof,e){case au:case lu:case du:case uu:case ou:return e;default:return t}}case Cm:return t}}}function aS(e){return Ht(e)===su}ge.AsyncMode=_m;ge.ConcurrentMode=su;ge.ContextConsumer=au;ge.ContextProvider=ou;ge.Element=Sm;ge.ForwardRef=lu;ge.Fragment=nu;ge.Lazy=du;ge.Memo=uu;ge.Portal=Cm;ge.Profiler=iu;ge.StrictMode=ru;ge.Suspense=cu;ge.isAsyncMode=function(e){return aS(e)||Ht(e)===_m};ge.isConcurrentMode=aS;ge.isContextConsumer=function(e){return Ht(e)===au};ge.isContextProvider=function(e){return Ht(e)===ou};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sm};ge.isForwardRef=function(e){return Ht(e)===lu};ge.isFragment=function(e){return Ht(e)===nu};ge.isLazy=function(e){return Ht(e)===du};ge.isMemo=function(e){return Ht(e)===uu};ge.isPortal=function(e){return Ht(e)===Cm};ge.isProfiler=function(e){return Ht(e)===iu};ge.isStrictMode=function(e){return Ht(e)===ru};ge.isSuspense=function(e){return Ht(e)===cu};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nu||e===su||e===iu||e===ru||e===cu||e===g3||typeof e=="object"&&e!==null&&(e.$$typeof===du||e.$$typeof===uu||e.$$typeof===ou||e.$$typeof===au||e.$$typeof===lu||e.$$typeof===y3||e.$$typeof===x3||e.$$typeof===b3||e.$$typeof===v3)};ge.typeOf=Ht;oS.exports=ge;var w3=oS.exports,sS=w3,S3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},C3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lS={};lS[sS.ForwardRef]=S3;lS[sS.Memo]=C3;var _3=!0;function cS(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Em=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||_3===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},uS=function(t,n,r){Em(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function E3(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var k3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},T3=/[A-Z]|^ms/g,P3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,dS=function(t){return t.charCodeAt(1)===45},hv=function(t){return t!=null&&typeof t!="boolean"},jd=s3(function(e){return dS(e)?e:e.replace(T3,"-$&").toLowerCase()}),mv=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(P3,function(r,i,o){return _n={name:i,styles:o,next:_n},i})}return k3[t]!==1&&!dS(t)&&typeof n=="number"&&n!==0?n+"px":n};function za(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return _n={name:n.name,styles:n.styles,next:_n},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)_n={name:r.name,styles:r.styles,next:_n},r=r.next;var i=n.styles+";";return i}return O3(e,t,n)}case"function":{if(e!==void 0){var o=_n,a=n(e);return _n=o,za(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function O3(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=za(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":hv(a)&&(r+=jd(o)+":"+mv(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)hv(a[l])&&(r+=jd(o)+":"+mv(o,a[l])+";");else{var s=za(e,t,a);switch(o){case"animation":case"animationName":{r+=jd(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var gv=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_n,km=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";_n=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=za(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=za(r,n,t[l]),i&&(o+=a[l]);gv.lastIndex=0;for(var s="",c;(c=gv.exec(o))!==null;)s+="-"+c[1];var u=E3(o)+s;return{name:u,styles:o,next:_n}},j3=function(t){return t()},$3=gf["useInsertionEffect"]?gf["useInsertionEffect"]:!1,fS=$3||j3,Tm={}.hasOwnProperty,pS=b.createContext(typeof HTMLElement<"u"?m3({key:"css"}):null);pS.Provider;var hS=function(t){return b.forwardRef(function(n,r){var i=b.useContext(pS);return t(n,i,r)})},mS=b.createContext({}),Lp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",M3=function(t,n){var r={};for(var i in n)Tm.call(n,i)&&(r[i]=n[i]);return r[Lp]=t,r},I3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Em(n,r,i),fS(function(){return uS(n,r,i)}),null},D3=hS(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Lp],o=[r],a="";typeof e.className=="string"?a=cS(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=km(o,void 0,b.useContext(mS));a+=t.key+"-"+l.name;var s={};for(var c in e)Tm.call(e,c)&&c!=="css"&&c!==Lp&&(s[c]=e[c]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(I3,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),L3=D3,Q=function(t,n){var r=arguments;if(n==null||!Tm.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=L3,o[1]=M3(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function Pm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return km(t)}var A3=function(){var t=Pm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},R3=VT,F3=function(t){return t!=="theme"},vv=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?R3:F3},yv=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},z3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Em(n,r,i),fS(function(){return uS(n,r,i)}),null},N3=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=yv(t,n,r),s=l||vv(i),c=!s("as");return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{d.push(u[0][0]);for(var y=u.length,g=1;g<y;g++)d.push(u[g],u[0][g])}var h=hS(function(x,w,p){var m=c&&x.as||i,v="",S=[],E=x;if(x.theme==null){E={};for(var P in x)E[P]=x[P];E.theme=b.useContext(mS)}typeof x.className=="string"?v=cS(w.registered,S,x.className):x.className!=null&&(v=x.className+" ");var k=km(d.concat(S),w.registered,E);v+=w.key+"-"+k.name,a!==void 0&&(v+=" "+a);var _=c&&l===void 0?vv(m):s,$={};for(var M in x)c&&M==="as"||_(M)&&($[M]=x[M]);return $.className=v,$.ref=p,b.createElement(b.Fragment,null,b.createElement(z3,{cache:w,serialized:k,isStringTag:typeof m=="string"}),b.createElement(m,$))});return h.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=l,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(x,w){return e(x,J({},n,w,{shouldForwardProp:yv(h,w,!0)})).apply(void 0,d)},h}},B3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fe=N3.bind();B3.forEach(function(e){Fe[e]=Fe(e)});const V3=Fe.section`
  background-color: var(--second-background);
`,U3=Fe.div`
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
`,W3=Fe.div`

`,H3=Fe.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,G3=Fe.div`
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
`;const q3=Fe(Te)`
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
`,Y3=Fe.div`
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
`,X3=Fe.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,K3=Fe.p`
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
`;var Q3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};Z3(Q3);function Z3(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var J3="#4fa94d",e5={"aria-busy":!0,role:"progressbar"},t5=C.div`
  display: ${e=>e.$visible?"flex":"none"};
`,n5="http://www.w3.org/2000/svg",di=({height:e=100,width:t=100,radius:n=5,color:r=J3,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>f.jsx(t5,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...e5,children:f.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:n5,"data-testid":"ball-triangle-svg",children:[f.jsx("title",{children:"Ball Triangle"}),f.jsx("desc",{children:"Animated representation of three balls"}),f.jsx("g",{fill:"none",fillRule:"evenodd",children:f.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[f.jsxs("circle",{cx:"5",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"27",cy:"5",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"49",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),rn=242.776657104492,r5=1.6,i5=um`
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
  animation: ${i5} ${r5}s linear infinite;
`;var o5=um`
to {
   transform: rotate(360deg);
 }
`;C.svg`
  animation: ${o5} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var a5=um`
to {
   stroke-dashoffset: 136;
 }
`;C.polygon`
  stroke-dasharray: 17;
  animation: ${a5} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;C.svg`
  transform-origin: 50% 65%;
`;const s5=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsx(V3,{children:f.jsxs(U3,{children:[f.jsx(W3,{children:f.jsx(Qw,{})}),f.jsx(H3,{children:"Каталог"}),f.jsx(G3,{children:e.map(i=>f.jsxs(q3,{to:`/catalog/${i.title}`,children:[f.jsx(Y3,{children:f.jsx(X3,{src:i.image,alt:i.title})}),f.jsx(K3,{children:i.title})]},i.id))})]})})},l5=Fe.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,c5=Fe.h1`
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
`,u5=Fe.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,d5=Fe(Te)`

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

  
`,f5=()=>f.jsxs(l5,{children:[f.jsxs(c5,{children:[" ",f.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),f.jsx(u5,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),f.jsx(d5,{children:" На головну"})]});const p5=C.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,h5=C.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var gS={},vS={},fu={},yS={exports:{}},ts={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var xv=Object.getOwnPropertySymbols,m5=Object.prototype.hasOwnProperty,g5=Object.prototype.propertyIsEnumerable;function v5(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function y5(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var x5=y5()?Object.assign:function(e,t){for(var n,r=v5(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)m5.call(n,a)&&(r[a]=n[a]);if(xv){i=xv(n);for(var l=0;l<i.length;l++)g5.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},xS={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om=x5,xo=60103,bS=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var wS=60109,SS=60110,CS=60112;le.Suspense=60113;var _S=60115,ES=60116;if(typeof Symbol=="function"&&Symbol.for){var nn=Symbol.for;xo=nn("react.element"),bS=nn("react.portal"),le.Fragment=nn("react.fragment"),le.StrictMode=nn("react.strict_mode"),le.Profiler=nn("react.profiler"),wS=nn("react.provider"),SS=nn("react.context"),CS=nn("react.forward_ref"),le.Suspense=nn("react.suspense"),_S=nn("react.memo"),ES=nn("react.lazy")}var bv=typeof Symbol=="function"&&Symbol.iterator;function b5(e){return e===null||typeof e!="object"?null:(e=bv&&e[bv]||e["@@iterator"],typeof e=="function"?e:null)}function ns(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},TS={};function bo(e,t,n){this.props=e,this.context=t,this.refs=TS,this.updater=n||kS}bo.prototype.isReactComponent={};bo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(ns(85));this.updater.enqueueSetState(this,e,t,"setState")};bo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function PS(){}PS.prototype=bo.prototype;function jm(e,t,n){this.props=e,this.context=t,this.refs=TS,this.updater=n||kS}var $m=jm.prototype=new PS;$m.constructor=jm;Om($m,bo.prototype);$m.isPureReactComponent=!0;var Mm={current:null},OS=Object.prototype.hasOwnProperty,jS={key:!0,ref:!0,__self:!0,__source:!0};function $S(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)OS.call(t,r)&&!jS.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xo,type:e,key:o,ref:a,props:i,_owner:Mm.current}}function w5(e,t){return{$$typeof:xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Im(e){return typeof e=="object"&&e!==null&&e.$$typeof===xo}function S5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wv=/\/+/g;function $d(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S5(""+e.key):t.toString(36)}function cl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case xo:case bS:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+$d(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(wv,"$&/")+"/"),cl(i,t,n,"",function(c){return c})):i!=null&&(Im(i)&&(i=w5(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(wv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+$d(o,l);a+=cl(o,t,n,s,i)}else if(s=b5(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+$d(o,l++),a+=cl(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(ns(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Ps(e,t,n){if(e==null)return e;var r=[],i=0;return cl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function C5(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var MS={current:null};function nr(){var e=MS.current;if(e===null)throw Error(ns(321));return e}var _5={ReactCurrentDispatcher:MS,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Mm,IsSomeRendererActing:{current:!1},assign:Om};le.Children={map:Ps,forEach:function(e,t,n){Ps(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ps(e,function(){t++}),t},toArray:function(e){return Ps(e,function(t){return t})||[]},only:function(e){if(!Im(e))throw Error(ns(143));return e}};le.Component=bo;le.PureComponent=jm;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_5;le.cloneElement=function(e,t,n){if(e==null)throw Error(ns(267,e));var r=Om({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Mm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)OS.call(t,s)&&!jS.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:xo,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:SS,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:wS,_context:e},e.Consumer=e};le.createElement=$S;le.createFactory=function(e){var t=$S.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:CS,render:e}};le.isValidElement=Im;le.lazy=function(e){return{$$typeof:ES,_payload:{_status:-1,_result:e},_init:C5}};le.memo=function(e,t){return{$$typeof:_S,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return nr().useCallback(e,t)};le.useContext=function(e,t){return nr().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return nr().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return nr().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return nr().useLayoutEffect(e,t)};le.useMemo=function(e,t){return nr().useMemo(e,t)};le.useReducer=function(e,t,n){return nr().useReducer(e,t,n)};le.useRef=function(e){return nr().useRef(e)};le.useState=function(e){return nr().useState(e)};le.version="17.0.2";xS.exports=le;var E5=xS.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k5=E5,IS=60103;ts.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Sv=Symbol.for;IS=Sv("react.element"),ts.Fragment=Sv("react.fragment")}var T5=k5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P5=Object.prototype.hasOwnProperty,O5={key:!0,ref:!0,__self:!0,__source:!0};function DS(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)P5.call(t,r)&&!O5.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:IS,type:e,key:o,ref:a,props:i,_owner:T5.current}}ts.jsx=DS;ts.jsxs=DS;yS.exports=ts;var Mt=yS.exports,LS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(LS);var It=LS.exports;const j5={"lds-circle":"_lds-circle_qlxhy_1"},$5=Object.freeze(Object.defineProperty({__proto__:null,default:j5},Symbol.toStringTag,{value:"Module"})),M5=jt($5);var AS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fu,"__esModule",{value:!0});fu.Circle=void 0;const I5=Mt,D5=AS(It),L5=AS(M5);function A5({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,I5.jsx)("div",{className:(0,D5.default)(L5.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}fu.Circle=A5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=fu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(vS);var RS={},pu={};const R5={"lds-default":"_lds-default_wt1n8_1"},F5=Object.freeze(Object.defineProperty({__proto__:null,default:R5},Symbol.toStringTag,{value:"Module"})),z5=jt(F5);var FS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pu,"__esModule",{value:!0});pu.Default=void 0;const Cv=Mt,N5=FS(It),B5=FS(z5);function V5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,Cv.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,Cv.jsx)("div",{className:(0,N5.default)(B5.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}pu.Default=V5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=pu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(RS);var zS={},hu={};const U5={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},W5=Object.freeze(Object.defineProperty({__proto__:null,default:U5},Symbol.toStringTag,{value:"Module"})),H5=jt(W5);var NS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hu,"__esModule",{value:!0});hu.DualRing=void 0;const _v=Mt,Ev=NS(It),kv=NS(H5);function G5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,_v.jsx)("div",{className:(0,Ev.default)(kv.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,_v.jsx)("div",{className:(0,Ev.default)(kv.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}hu.DualRing=G5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=hu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(zS);var BS={},mu={};const q5={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},Y5=Object.freeze(Object.defineProperty({__proto__:null,default:q5},Symbol.toStringTag,{value:"Module"})),X5=jt(Y5);var VS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mu,"__esModule",{value:!0});mu.Ellipsis=void 0;const Tv=Mt,K5=VS(It),Q5=VS(X5);function Z5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,Tv.jsx)("div",{style:{background:`${e}`}},l));return(0,Tv.jsx)("div",{className:(0,K5.default)(Q5.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}mu.Ellipsis=Z5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=mu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(BS);var US={},gu={};const J5={"lds-facebook":"_lds-facebook_1ts9g_1"},eM=Object.freeze(Object.defineProperty({__proto__:null,default:J5},Symbol.toStringTag,{value:"Module"})),tM=jt(eM);var WS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gu,"__esModule",{value:!0});gu.Facebook=void 0;const Pv=Mt,nM=WS(It),rM=WS(tM);function iM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,Pv.jsx)("div",{style:{background:`${e}`}},l));return(0,Pv.jsx)("div",{className:(0,nM.default)(rM.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}gu.Facebook=iM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=gu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(US);var HS={},vu={};const oM={"lds-grid":"_lds-grid_1ftub_1"},aM=Object.freeze(Object.defineProperty({__proto__:null,default:oM},Symbol.toStringTag,{value:"Module"})),sM=jt(aM);var GS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vu,"__esModule",{value:!0});vu.Grid=void 0;const Ov=Mt,lM=GS(It),cM=GS(sM);function uM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,Ov.jsx)("div",{style:{background:`${e}`}},l));return(0,Ov.jsx)("div",{className:(0,lM.default)(cM.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}vu.Grid=uM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=vu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(HS);var qS={},yu={};const dM={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},fM=Object.freeze(Object.defineProperty({__proto__:null,default:dM},Symbol.toStringTag,{value:"Module"})),pM=jt(fM);var YS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yu,"__esModule",{value:!0});yu.Heart=void 0;const Os=Mt,Md=YS(It),Id=YS(pM);function hM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Os.jsx)("div",{className:(0,Md.default)(Id.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,Os.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,Os.jsx)("div",{className:(0,Md.default)(Id.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,Os.jsx)("div",{className:(0,Md.default)(Id.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}yu.Heart=hM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=yu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(qS);var XS={},xu={};const mM={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},gM=Object.freeze(Object.defineProperty({__proto__:null,default:mM},Symbol.toStringTag,{value:"Module"})),vM=jt(gM);var KS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xu,"__esModule",{value:!0});xu.Hourglass=void 0;const jv=Mt,$v=KS(It),Mv=KS(vM);function yM({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,jv.jsx)("div",{className:(0,$v.default)(Mv.default["lds-hourglass"],n),style:{...r},children:(0,jv.jsx)("div",{className:(0,$v.default)(Mv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}xu.Hourglass=yM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=xu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(XS);var QS={},bu={};const ZS="_center_1rufi_10",JS="_spin_1rufi_1",xM={"lds-orbitals":"_lds-orbitals_1rufi_1",center:ZS,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:JS},bM=Object.freeze(Object.defineProperty({__proto__:null,center:ZS,default:xM,spin:JS},Symbol.toStringTag,{value:"Module"})),wM=jt(bM);var e2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bu,"__esModule",{value:!0});bu.Orbitals=void 0;const ot=Mt,ft=e2(It),Ce=e2(wM);function SM({color:e="#7f58af",className:t,style:n}){return(0,ot.jsxs)("div",{className:(0,ft.default)(Ce.default["lds-orbitals"],t),style:{...n},children:[(0,ot.jsx)("div",{className:Ce.default.center,style:{background:e}}),(0,ot.jsxs)("div",{className:(0,ft.default)(Ce.default["inner-spin"]),children:[(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-arc"],Ce.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-arc"],Ce.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-arc"],Ce.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-arc"],Ce.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-moon-a"]),style:{background:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["inner-moon-b"]),style:{background:e}})]}),(0,ot.jsxs)("div",{className:(0,ft.default)(Ce.default["outer-spin"]),children:[(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-arc"],Ce.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-arc"],Ce.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-arc"],Ce.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-arc"],Ce.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-moon-a"]),style:{background:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(Ce.default["outer-moon-b"]),style:{background:e}})]})]})}bu.Orbitals=SM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=bu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(QS);var t2={},wu={};const CM={"lds-ring":"_lds-ring_xgxdp_1"},_M=Object.freeze(Object.defineProperty({__proto__:null,default:CM},Symbol.toStringTag,{value:"Module"})),EM=jt(_M);var n2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wu,"__esModule",{value:!0});wu.Ring=void 0;const Iv=Mt,kM=n2(It),TM=n2(EM);function PM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,Iv.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,Iv.jsx)("div",{className:(0,kM.default)(TM.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}wu.Ring=PM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=wu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(t2);var r2={},Su={};const OM={"lds-ripple":"_lds-ripple_1lgcf_1"},jM=Object.freeze(Object.defineProperty({__proto__:null,default:OM},Symbol.toStringTag,{value:"Module"})),$M=jt(jM);var i2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Su,"__esModule",{value:!0});Su.Ripple=void 0;const Dv=Mt,MM=i2(It),IM=i2($M);function DM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,Dv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,Dv.jsx)("div",{className:(0,MM.default)(IM.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}Su.Ripple=DM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=Su;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(r2);var o2={},Cu={};const LM={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},AM=Object.freeze(Object.defineProperty({__proto__:null,default:LM},Symbol.toStringTag,{value:"Module"})),RM=jt(AM);var a2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cu,"__esModule",{value:!0});Cu.Roller=void 0;const Dd=Mt,Lv=a2(It),Av=a2(RM);function FM({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Dd.jsx)("div",{children:(0,Dd.jsx)("div",{className:(0,Lv.default)(Av.default["div-after"]),style:{background:e}})},o));return(0,Dd.jsx)("div",{className:(0,Lv.default)(Av.default["lds-roller"],t),style:{...n},children:r})}Cu.Roller=FM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=Cu;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(o2);var s2={},_u={};const zM={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},NM=Object.freeze(Object.defineProperty({__proto__:null,default:zM},Symbol.toStringTag,{value:"Module"})),BM=jt(NM);var l2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_u,"__esModule",{value:!0});_u.Spinner=void 0;const Ld=Mt,Rv=l2(It),Fv=l2(BM);function VM({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,Ld.jsx)("div",{children:(0,Ld.jsx)("div",{className:(0,Rv.default)(Fv.default["div-after"]),style:{background:e}})},o));return(0,Ld.jsx)("div",{className:(0,Rv.default)(Fv.default["lds-spinner"],t),style:{...n},children:r})}_u.Spinner=VM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=_u;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(s2);var c2={},Eu={};const u2="_left_v9vlb_30",d2="_right_v9vlb_33",f2="_anim_v9vlb_37",UM={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:u2,right:d2,anim:f2,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},WM=Object.freeze(Object.defineProperty({__proto__:null,anim:f2,default:UM,left:u2,right:d2},Symbol.toStringTag,{value:"Module"})),HM=jt(WM);var p2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Eu,"__esModule",{value:!0});Eu.Ouroboro=void 0;const Ao=Mt,Ro=p2(It),Fo=p2(HM);function GM({color:e="#7f58af",style:t,className:n}){return(0,Ao.jsxs)("div",{className:(0,Ro.default)(Fo.default["lds-ouroboro"],n),style:{...t},children:[(0,Ao.jsx)("span",{className:(0,Ro.default)(Fo.default.left),children:(0,Ao.jsx)("span",{className:(0,Ro.default)(Fo.default.anim),style:{background:e}})}),(0,Ao.jsx)("span",{className:(0,Ro.default)(Fo.default.right),children:(0,Ao.jsx)("span",{className:(0,Ro.default)(Fo.default.anim),style:{background:e}})})]})}Eu.Ouroboro=GM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Eu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(c2);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=vS;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=RS;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=zS;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=BS;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=US;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=HS;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=qS;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=XS;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const c=QS;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return c.Orbitals}});const u=t2;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return u.Ring}});const d=r2;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const y=o2;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return y.Roller}});const g=s2;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return g.Spinner}});const h=c2;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return h.Ouroboro}})})(gS);const qM=()=>f.jsx(h5,{children:f.jsx(gS.Default,{color:"#6d433da8"})});const YM="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",XM=UP`
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
  src: url(${YM}) format('truetype');
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
`,KM=C.div`
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
`,QM=C(Te)`
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
`,ZM=C.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,JM=C.h3`

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
`,eI=C.a`

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
`,tI=C.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,nI=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),f.jsxs(f.Fragment,{children:[f.jsx(ZM,{children:"Каталог"}),f.jsxs(KM,{children:[e.slice(0,7).map(n=>f.jsx(QM,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:f.jsx(JM,{children:n.title})},n.title)),f.jsxs(eI,{href:"catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(tI,{children:f.jsx(Vc,{size:24})})]})]})]})};function zv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Dm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:zv(t[r])&&zv(e[r])&&Object.keys(t[r]).length>0&&Dm(e[r],t[r])})}const h2={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function jn(){const e=typeof document<"u"?document:{};return Dm(e,h2),e}const rI={document:h2,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function bt(){const e=typeof window<"u"?window:{};return Dm(e,rI),e}function iI(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function oI(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function m2(e,t=0){return setTimeout(e,t)}function rc(){return Date.now()}function aI(e){const t=bt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function sI(e,t="x"){const n=bt();let r,i,o;const a=aI(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function js(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function lI(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Lt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!lI(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(js(t[l])&&js(r[l])?r[l].__swiper__?t[l]=r[l]:Lt(t[l],r[l]):!js(t[l])&&js(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Lt(t[l],r[l])):t[l]=r[l])}}}return t}function xi(e,t,n){e.style.setProperty(t,n)}function g2({swiper:e,targetPosition:t,side:n}){const r=bt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",c=(d,y)=>s==="next"&&d>=y||s==="prev"&&d<=y,u=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),y=.5-Math.cos(d*Math.PI)/2;let g=i+y*(t-i);if(c(g,t)&&(g=t),e.wrapperEl.scrollTo({[n]:g}),c(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:g})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function kn(e,t=""){const n=bt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function cI(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function uI(e,t){const n=bt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=cI(e,t))),r}function ic(e){try{console.warn(e);return}catch{}}function oc(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:iI(t)),n}function dI(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function fI(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function gr(e,t){return bt().getComputedStyle(e,null).getPropertyValue(t)}function ac(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function v2(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Ap(e,t,n){const r=bt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Na(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function y2(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=kn(e.el,`.${r[i]}`)[0];o||(o=oc("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const Nv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function pI({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Nv};function i(g){let h;return g&&typeof g=="string"&&e.isElement&&(h=e.el.querySelector(g)||e.hostEl.querySelector(g),h)?h:(g&&(typeof g=="string"&&(h=[...document.querySelectorAll(g)]),e.params.uniqueNavElements&&typeof g=="string"&&h&&h.length>1&&e.el.querySelectorAll(g).length===1?h=e.el.querySelector(g):h&&h.length===1&&(h=h[0])),g&&!h?g:h)}function o(g,h){const x=e.params.navigation;g=qe(g),g.forEach(w=>{w&&(w.classList[h?"add":"remove"](...x.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=h),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](x.lockClass))})}function a(){const{nextEl:g,prevEl:h}=e.navigation;if(e.params.loop){o(h,!1),o(g,!1);return}o(h,e.isBeginning&&!e.params.rewind),o(g,e.isEnd&&!e.params.rewind)}function l(g){g.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(g){g.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const g=e.params.navigation;if(e.params.navigation=y2(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let h=i(g.nextEl),x=i(g.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:x}),h=qe(h),x=qe(x);const w=(p,m)=>{if(p){if(g.addIcons&&p.matches(".swiper-button-next,.swiper-button-prev")&&!p.querySelector("svg")){const v=document.createElement("div");Na(v,Nv),p.appendChild(v.querySelector("svg")),v.remove()}p.addEventListener("click",m==="next"?s:l)}!e.enabled&&p&&p.classList.add(...g.lockClass.split(" "))};h.forEach(p=>w(p,"next")),x.forEach(p=>w(p,"prev"))}function u(){let{nextEl:g,prevEl:h}=e.navigation;g=qe(g),h=qe(h);const x=(w,p)=>{w.removeEventListener("click",p==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};g.forEach(w=>x(w,"next")),h.forEach(w=>x(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?y():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{u()}),n("enable disable",()=>{let{nextEl:g,prevEl:h}=e.navigation;if(g=qe(g),h=qe(h),e.enabled){a();return}[...g,...h].filter(x=>!!x).forEach(x=>x.classList.add(e.params.navigation.lockClass))}),n("click",(g,h)=>{let{nextEl:x,prevEl:w}=e.navigation;x=qe(x),w=qe(w);const p=h.target;let m=w.includes(p)||x.includes(p);if(e.isElement&&!m){const v=h.path||h.composedPath&&h.composedPath();v&&(m=v.find(S=>x.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===p||e.pagination.el.contains(p)))return;let v;x.length?v=x[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(v=w[0].classList.contains(e.params.navigation.hiddenClass)),r(v===!0?"navigationShow":"navigationHide"),[...x,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),a()},y=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(e.navigation,{enable:d,disable:y,update:a,init:c,destroy:u})}function zo(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function hI({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(p,m){const{bulletActiveClass:v}=e.params.pagination;p&&(p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${v}-${m}`),p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${v}-${m}-${m}`)))}function c(p,m,v){if(p=p%v,m=m%v,m===p+1)return"next";if(m===p-1)return"previous"}function u(p){const m=p.target.closest(zo(e.params.pagination.bulletClass));if(!m)return;p.preventDefault();const v=ac(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===v)return;const S=c(e.realIndex,v,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(v)}else e.slideTo(v)}function d(){const p=e.rtl,m=e.params.pagination;if(l())return;let v=e.pagination.el;v=qe(v);let S,E;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,k=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,S=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let $,M,I;if(m.dynamicBullets&&(o=Ap(_[0],e.isHorizontal()?"width":"height",!0),v.forEach(D=>{D.style[e.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&E!==void 0&&(a+=S-(E||0),a>m.dynamicMainBullets-1?a=m.dynamicMainBullets-1:a<0&&(a=0)),$=Math.max(S-a,0),M=$+(Math.min(_.length,m.dynamicMainBullets)-1),I=(M+$)/2),_.forEach(D=>{const O=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${m.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();D.classList.remove(...O)}),v.length>1)_.forEach(D=>{const O=ac(D);O===S?D.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&D.setAttribute("part","bullet"),m.dynamicBullets&&(O>=$&&O<=M&&D.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),O===$&&s(D,"prev"),O===M&&s(D,"next"))});else{const D=_[S];if(D&&D.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&_.forEach((O,F)=>{O.setAttribute("part",F===S?"bullet-active":"bullet")}),m.dynamicBullets){const O=_[$],F=_[M];for(let L=$;L<=M;L+=1)_[L]&&_[L].classList.add(...`${m.bulletActiveClass}-main`.split(" "));s(O,"prev"),s(F,"next")}}if(m.dynamicBullets){const D=Math.min(_.length,m.dynamicMainBullets+4),O=(o*D-o)/2-I*o,F=p?"right":"left";_.forEach(L=>{L.style[e.isHorizontal()?F:"top"]=`${O}px`})}}v.forEach((_,$)=>{if(m.type==="fraction"&&(_.querySelectorAll(zo(m.currentClass)).forEach(M=>{M.textContent=m.formatFractionCurrent(S+1)}),_.querySelectorAll(zo(m.totalClass)).forEach(M=>{M.textContent=m.formatFractionTotal(k)})),m.type==="progressbar"){let M;m.progressbarOpposite?M=e.isHorizontal()?"vertical":"horizontal":M=e.isHorizontal()?"horizontal":"vertical";const I=(S+1)/k;let D=1,O=1;M==="horizontal"?D=I:O=I,_.querySelectorAll(zo(m.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${D}) scaleY(${O})`,F.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(Na(_,m.renderCustom(e,S+1,k)),$===0&&r("paginationRender",_)):($===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](m.lockClass)})}function y(){const p=e.params.pagination;if(l())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let v=e.pagination.el;v=qe(v);let S="";if(p.type==="bullets"){let E=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>m&&(E=m);for(let P=0;P<E;P+=1)p.renderBullet?S+=p.renderBullet.call(e,P,p.bulletClass):S+=`<${p.bulletElement} ${e.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?S=p.renderFraction.call(e,p.currentClass,p.totalClass):S=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?S=p.renderProgressbar.call(e,p.progressbarFillClass):S=`<span class="${p.progressbarFillClass}"></span>`),e.pagination.bullets=[],v.forEach(E=>{p.type!=="custom"&&Na(E,S||""),p.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(zo(p.bulletClass)))}),p.type!=="custom"&&r("paginationRender",v[0])}function g(){e.params.pagination=y2(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const p=e.params.pagination;if(!p.el)return;let m;typeof p.el=="string"&&e.isElement&&(m=e.el.querySelector(p.el)),!m&&typeof p.el=="string"&&(m=[...document.querySelectorAll(p.el)]),m||(m=p.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(p.el)],m.length>1&&(m=m.find(v=>v2(v,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=qe(m),m.forEach(v=>{p.type==="bullets"&&p.clickable&&v.classList.add(...(p.clickableClass||"").split(" ")),v.classList.add(p.modifierClass+p.type),v.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(v.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&v.classList.add(p.progressbarOppositeClass),p.clickable&&v.addEventListener("click",u),e.enabled||v.classList.add(p.lockClass)}))}function h(){const p=e.params.pagination;if(l())return;let m=e.pagination.el;m&&(m=qe(m),m.forEach(v=>{v.classList.remove(p.hiddenClass),v.classList.remove(p.modifierClass+p.type),v.classList.remove(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(v.classList.remove(...(p.clickableClass||"").split(" ")),v.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(v=>v.classList.remove(...p.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const p=e.params.pagination;let{el:m}=e.pagination;m=qe(m),m.forEach(v=>{v.classList.remove(p.horizontalClass,p.verticalClass),v.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(g(),y(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{y(),d()}),n("destroy",()=>{h()}),n("enable disable",()=>{let{el:p}=e.pagination;p&&(p=qe(p),p.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(p,m)=>{const v=m.target,S=qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!v.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&v===e.navigation.nextEl||e.navigation.prevEl&&v===e.navigation.prevEl))return;const E=S[0].classList.contains(e.params.pagination.hiddenClass);r(E===!0?"paginationShow":"paginationHide"),S.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const x=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=qe(p),p.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),g(),y(),d()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=qe(p),p.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:x,disable:w,render:y,update:d,init:g,destroy:h})}function mI({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,c,u=new Date().getTime(),d,y,g,h,x,w;function p(R){!e||e.destroyed||!e.wrapperEl||R.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",p),!(w||R.detail&&R.detail.bySwiperTouchMove)&&$())}const m=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=c,d=!1);const R=e.autoplay.paused?c:u+s-new Date().getTime();e.autoplay.timeLeft=R,r("autoplayTimeLeft",R,R/l),a=requestAnimationFrame(()=>{m()})},v=()=>{let R;return e.virtual&&e.params.virtual.enabled?R=e.slides.find(j=>j.classList.contains("swiper-slide-active")):R=e.slides[e.activeIndex],R?parseInt(R.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let R=e.params.autoplay.delay;const T=v();return!Number.isNaN(T)&&T>0&&(R=T),R},E=R=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),m();let T=R;typeof T>"u"&&(T=S(),l=T,s=T),c=T;const j=e.params.speed,z=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(j,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,j,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(j,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,j,!0,!0),r("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return T>0?(clearTimeout(o),o=setTimeout(()=>{z()},T)):requestAnimationFrame(()=>{z()}),T},P=()=>{u=new Date().getTime(),e.autoplay.running=!0,E(),r("autoplayStart")},k=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},_=(R,T)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),R||(x=!0);const j=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",p):$()};if(e.autoplay.paused=!0,T){j();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),j())},$=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),x?(x=!1,E(c)):E(),e.autoplay.paused=!1,r("autoplayResume"))},M=()=>{if(e.destroyed||!e.autoplay.running)return;const R=jn();R.visibilityState==="hidden"&&(x=!0,_(!0)),R.visibilityState==="visible"&&$()},I=R=>{R.pointerType==="mouse"&&(x=!0,w=!0,!(e.animating||e.autoplay.paused)&&_(!0))},D=R=>{R.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&$())},O=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",I),e.el.addEventListener("pointerleave",D))},F=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",I),e.el.removeEventListener("pointerleave",D))},L=()=>{jn().addEventListener("visibilitychange",M)},A=()=>{jn().removeEventListener("visibilitychange",M)};n("init",()=>{e.params.autoplay.enabled&&(O(),L(),P())}),n("destroy",()=>{F(),A(),e.autoplay.running&&k()}),n("_freeModeStaticRelease",()=>{(g||x)&&$()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?k():_(!0,!0)}),n("beforeTransitionStart",(R,T,j)=>{e.destroyed||!e.autoplay.running||(j||!e.params.autoplay.disableOnInteraction?_(!0,!0):k())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){k();return}y=!0,g=!1,x=!1,h=setTimeout(()=>{x=!0,g=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!y)){if(clearTimeout(h),clearTimeout(o),e.params.autoplay.disableOnInteraction){g=!1,y=!1;return}g&&e.params.cssMode&&$(),g=!1,y=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=S(),l=S())}),Object.assign(e.autoplay,{start:P,stop:k,pause:_,resume:$})}let Ad;function gI(){const e=bt(),t=jn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function x2(){return Ad||(Ad=gI()),Ad}let Rd;function vI({userAgent:e}={}){const t=x2(),n=bt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),y=r==="Win32";let g=r==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&g&&t.touch&&h.indexOf(`${a}x${l}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),g=!1),s&&!y&&(o.os="android",o.android=!0),(c||d||u)&&(o.os="ios",o.ios=!0),o}function b2(e={}){return Rd||(Rd=vI(e)),Rd}let Fd;function yI(){const e=bt(),t=b2();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,c]=l.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));n=s<16||s===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function w2(){return Fd||(Fd=yI()),Fd}function xI({swiper:e,on:t,emit:n}){const r=bt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(u=>{o=r.requestAnimationFrame(()=>{const{width:d,height:y}=e;let g=d,h=y;u.forEach(({contentBoxSize:x,contentRect:w,target:p})=>{p&&p!==e.el||(g=w?w.width:(x[0]||x).inlineSize,h=w?w.height:(x[0]||x).blockSize)}),(g!==d||h!==y)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function bI({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=bt(),a=(c,u={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,y=new d(g=>{if(e.__preventObserver__)return;if(g.length===1){r("observerUpdate",g[0]);return}const h=function(){r("observerUpdate",g[0])};o.requestAnimationFrame?o.requestAnimationFrame(h):o.setTimeout(h,0)});y.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:e.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),i.push(y)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=v2(e.hostEl);for(let u=0;u<c.length;u+=1)a(c[u])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var wI={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function SI(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(gr(r,"padding-left")||0,10)-parseInt(gr(r,"padding-right")||0,10),n=n-parseInt(gr(r,"padding-top")||0,10)-parseInt(gr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function CI(){const e=this;function t(M,I){return parseFloat(M.getPropertyValue(e.getDirectionLabel(I))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,c=kn(i,`.${e.params.slideClass}, swiper-slide`),u=l?e.virtual.slides.length:c.length;let d=[];const y=[],g=[];let h=n.slidesOffsetBefore;typeof h=="function"&&(h=n.slidesOffsetBefore.call(e));let x=n.slidesOffsetAfter;typeof x=="function"&&(x=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,p=e.slidesGrid.length,m=e.size-h-x;let v=n.spaceBetween,S=-h,E=0,P=0;if(typeof m>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*m:typeof v=="string"&&(v=parseFloat(v)),e.virtualSize=-v-h-x,c.forEach(M=>{o?M.style.marginLeft="":M.style.marginRight="",M.style.marginBottom="",M.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(xi(r,"--swiper-centered-offset-before",""),xi(r,"--swiper-centered-offset-after","")),n.cssMode&&(xi(r,"--swiper-slides-offset-before",`${h}px`),xi(r,"--swiper-slides-offset-after",`${x}px`));const k=n.grid&&n.grid.rows>1&&e.grid;k?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let _;const $=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(M=>typeof n.breakpoints[M].slidesPerView<"u").length>0;for(let M=0;M<u;M+=1){_=0;const I=c[M];if(!(I&&(k&&e.grid.updateSlide(M,I,c),gr(I,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&I&&(n.roundLengths&&(_=Math.floor(_)),I.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){$&&(I.style[e.getDirectionLabel("width")]="");const D=getComputedStyle(I),O=I.style.transform,F=I.style.webkitTransform;if(O&&(I.style.transform="none"),F&&(I.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?Ap(I,"width",!0):Ap(I,"height",!0);else{const L=t(D,"width"),A=t(D,"padding-left"),R=t(D,"padding-right"),T=t(D,"margin-left"),j=t(D,"margin-right"),z=D.getPropertyValue("box-sizing");if(z&&z==="border-box")_=L+T+j;else{const{clientWidth:B,offsetWidth:N}=I;_=L+A+R+T+j+(N-B)}}O&&(I.style.transform=O),F&&(I.style.webkitTransform=F),n.roundLengths&&(_=Math.floor(_))}else _=(m-(n.slidesPerView-1)*v)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),I&&(I.style[e.getDirectionLabel("width")]=`${_}px`);I&&(I.swiperSlideSize=_),g.push(_),n.centeredSlides?(S=S+_/2+E/2+v,E===0&&M!==0&&(S=S-m/2-v),M===0&&(S=S-m/2-v),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),P%n.slidesPerGroup===0&&d.push(S),y.push(S)):(n.roundLengths&&(S=Math.floor(S)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&d.push(S),y.push(S),S=S+_+v),e.virtualSize+=_+v,E=_,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,m)+x,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+v}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+v}px`),k&&e.grid.updateWrapperSize(_,d),!n.centeredSlides){const M=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,I=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||M);let D=d.length;if(I){let F;if(n.slidesPerView==="auto"){F=1;let L=0;for(let A=g.length-1;A>=0&&(L+=g[A]+(A<g.length-1?v:0),L<=m);A-=1)F=g.length-A}else F=Math.floor(n.slidesPerView);D=Math.max(u-F,0)}const O=[];for(let F=0;F<d.length;F+=1){let L=d[F];n.roundLengths&&(L=Math.floor(L)),I?F<=D&&O.push(L):d[F]<=e.virtualSize-m&&O.push(L)}d=O,Math.floor(e.virtualSize-m)-Math.floor(d[d.length-1])>1&&(I||d.push(e.virtualSize-m))}if(l&&n.loop){const M=g[0]+v;if(n.slidesPerGroup>1){const I=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),D=M*n.slidesPerGroup;for(let O=0;O<I;O+=1)d.push(d[d.length-1]+D)}for(let I=0;I<e.virtual.slidesBefore+e.virtual.slidesAfter;I+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+M),y.push(y[y.length-1]+M),e.virtualSize+=M}if(d.length===0&&(d=[0]),v!==0){const M=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((I,D)=>!n.cssMode||n.loop?!0:D!==c.length-1).forEach(I=>{I.style[M]=`${v}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let M=0;g.forEach(D=>{M+=D+(v||0)}),M-=v;const I=M>m?M-m:0;d=d.map(D=>D<=0?-h:D>I?I+x:D)}if(n.centerInsufficientSlides){let M=0;if(g.forEach(I=>{M+=I+(v||0)}),M-=v,M<m){const I=(m-M)/2;d.forEach((D,O)=>{d[O]=D-I}),y.forEach((D,O)=>{y[O]=D+I})}}if(Object.assign(e,{slides:c,snapGrid:d,slidesGrid:y,slidesSizesGrid:g}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){xi(r,"--swiper-centered-offset-before",`${-d[0]}px`),xi(r,"--swiper-centered-offset-after",`${e.size/2-g[g.length-1]/2}px`);const M=-e.snapGrid[0],I=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(D=>D+M),e.slidesGrid=e.slidesGrid.map(D=>D+I)}if(u!==s&&e.emit("slidesLengthChange"),d.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==p&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const M=`${n.containerModifierClass}backface-hidden`,I=e.el.classList.contains(M);u<=n.maxBackfaceHiddenSlides?I||e.el.classList.add(M):I&&e.el.classList.remove(M)}}function _I(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function EI(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Bv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function kI(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const c=r[s];let u=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+l),y=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+l),g=-(a-u),h=g+t.slidesSizesGrid[s],x=g>=0&&g<=t.size-t.slidesSizesGrid[s],w=g>=0&&g<t.size-1||h>1&&h<=t.size||g<=0&&h>=t.size;w&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s)),Bv(c,w,n.slideVisibleClass),Bv(c,x,n.slideFullyVisibleClass),c.progress=i?-d:d,c.originalProgress=i?-y:y}}function TI(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,c=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const u=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=u||i<=0,a=d||i>=1,u&&(i=0),d&&(i=1)}if(n.loop){const u=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[u],g=t.slidesGrid[d],h=t.slidesGrid[t.slidesGrid.length-1],x=Math.abs(e);x>=y?l=(x-y)/h:l=(x+h-g)/h,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(s&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const zd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function PI(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>kn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,c,u;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),u=t.find(d=>d.column===i+1),c=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(u=fI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),c=dI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(d=>{zd(d,d===s,n.slideActiveClass),zd(d,d===u,n.slideNextClass),zd(d,d===c,n.slidePrevClass)}),e.emitSlidesClasses()}const ul=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},Nd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Rp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,c)=>a+r+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&Nd(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&Nd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Nd(e,a)};function OI(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function jI(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,c;const u=g=>{let h=g-t.virtual.slidesBefore;return h<0&&(h=t.virtual.slides.length+h),h>=t.virtual.slides.length&&(h-=t.virtual.slides.length),h};if(typeof s>"u"&&(s=OI(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,s);c=g+Math.floor((s-g)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let y;if(t.virtual&&i.virtual.enabled)i.loop?y=u(s):y=s;else if(d){const g=t.slides.find(x=>x.column===s);let h=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(t.slides.indexOf(g),0)),y=Math.floor(h/i.grid.rows)}else if(t.slides[s]){const g=t.slides[s].getAttribute("data-swiper-slide-index");g?y=parseInt(g,10):y=s}else y=s;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:y,previousIndex:o,activeIndex:s}),t.initialized&&Rp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function $I(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var MI={updateSize:SI,updateSlides:CI,updateAutoHeight:_I,updateSlidesOffset:EI,updateSlidesProgress:kI,updateProgress:TI,updateSlidesClasses:PI,updateActiveIndex:jI,updateClickedSlide:$I};function II(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=sI(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function DI(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const c=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let u;const d=n.maxTranslate()-n.minTranslate();d===0?u=0:u=(e-n.minTranslate())/d,u!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function LI(){return-this.snapGrid[0]}function AI(){return-this.snapGrid[this.snapGrid.length-1]}function RI(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),c=o.maxTranslate();let u;if(r&&e>s?u=s:r&&e<c?u=c:u=e,o.updateProgress(u),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-u;else{if(!o.support.smoothScroll)return g2({swiper:o,targetPosition:-u,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(y){!o||o.destroyed||y.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var FI={getTranslate:II,setTranslate:DI,minTranslate:LI,maxTranslate:AI,translateTo:RI};function zI(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function S2({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function NI(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),S2({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function BI(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),S2({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var VI={setTransition:zI,transitionStart:NI,transitionEnd:BI};function UI(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:y,wrapperEl:g,enabled:h}=o;if(!h&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const x=Math.min(o.params.slidesPerGroupSkip,a);let w=x+Math.floor((a-x)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const p=-s[w];if(l.normalizeSlideIndex)for(let k=0;k<c.length;k+=1){const _=-Math.floor(p*100),$=Math.floor(c[k]*100),M=Math.floor(c[k+1]*100);typeof c[k+1]<"u"?_>=$&&_<M-(M-$)/2?a=k:_>=$&&_<M&&(a=k+1):_>=$&&(a=k)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(y?p>o.translate&&p>o.minTranslate():p<o.translate&&p<o.minTranslate())||!o.allowSlidePrev&&p>o.translate&&p>o.maxTranslate()&&(d||0)!==a))return!1;a!==(u||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(p);let m;a>d?m="next":a<d?m="prev":m="reset";const v=o.virtual&&o.params.virtual.enabled;if(!(v&&i)&&(y&&-p===o.translate||!y&&p===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(p),m!=="reset"&&(o.transitionStart(n,m),o.transitionEnd(n,m)),!1;if(l.cssMode){const k=o.isHorizontal(),_=y?p:-p;if(t===0)v&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),v&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[k?"scrollLeft":"scrollTop"]=_})):g[k?"scrollLeft":"scrollTop"]=_,v&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return g2({swiper:o,targetPosition:_,side:k?"left":"top"}),!0;g.scrollTo({[k?"left":"top"]:_,behavior:"smooth"})}return!0}const P=w2().isSafari;return v&&!i&&P&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(p),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,m),t===0?o.transitionEnd(n,m):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(_){!o||o.destroyed||_.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,m))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function WI(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const x=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===x).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c,slidesOffsetBefore:u,slidesOffsetAfter:d}=i.params,y=c||!!u||!!d;let g=i.params.slidesPerView;g==="auto"?g=i.slidesPerViewDynamic():(g=Math.ceil(parseFloat(i.params.slidesPerView,10)),y&&g%2===0&&(g=g+1));let h=s-l<g;if(y&&(h=h||l<Math.ceil(g/2)),r&&y&&i.params.slidesPerView!=="auto"&&!o&&(h=!1),h){const x=y?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:x,slideTo:!0,activeSlideIndex:x==="next"?l+1:l-s+1,slideRealIndex:x==="next"?i.realIndex:void 0})}if(o){const x=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===x).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function HI(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function GI(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const u=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function y(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const g=y(d),h=o.map(m=>y(m)),x=i.freeMode&&i.freeMode.enabled;let w=o[h.indexOf(g)-1];if(typeof w>"u"&&(i.cssMode||x)){let m;o.forEach((v,S)=>{g>=v&&(m=S)}),typeof m<"u"&&(w=x?o[m]:o[m>0?m-1:m])}let p=0;if(typeof w<"u"&&(p=a.indexOf(w),p<0&&(p=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(p=p-r.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),i.rewind&&r.isBeginning){const m=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(m,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(p,e,t,n)}),!0;return r.slideTo(p,e,t,n)}function qI(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function YI(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const c=i.snapGrid[l],u=i.snapGrid[l+1];s-c>(u-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],u=i.snapGrid[l];s-c<=(u-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function XI(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(kn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),m2(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var KI={slideTo:UI,slideToLoop:WI,slideNext:HI,slidePrev:GI,slideReset:qI,slideToClosest:YI,slideToClickedSlide:XI};function QI(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{kn(i,`.${r.slideClass}, swiper-slide`).forEach((h,x)=>{h.setAttribute("data-swiper-slide-index",x)})},a=()=>{const g=kn(i,`.${r.slideBlankClass}`);g.forEach(h=>{h.remove()}),g.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),c=n.slides.length%s!==0,u=l&&n.slides.length%r.grid.rows!==0,d=g=>{for(let h=0;h<g;h+=1){const x=n.isElement?oc("swiper-slide",[r.slideBlankClass]):oc("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(x)}};if(c){if(r.loopAddBlankSlides){const g=s-n.slides.length%s;d(g),n.recalcSlides(),n.updateSlides()}else ic("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(u){if(r.loopAddBlankSlides){const g=r.grid.rows-n.slides.length%r.grid.rows;d(g),n.recalcSlides(),n.updateSlides()}else ic("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const y=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:y?void 0:"next",initial:t})}function ZI({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:y,params:g}=s,{centeredSlides:h,slidesOffsetBefore:x,slidesOffsetAfter:w,initialSlide:p}=g,m=h||!!x||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&g.virtual.enabled){t&&(!m&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):m&&s.snapIndex<g.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=u,s.allowSlideNext=d,s.emit("loopFix");return}let v=g.slidesPerView;v==="auto"?v=s.slidesPerViewDynamic():(v=Math.ceil(parseFloat(g.slidesPerView,10)),m&&v%2===0&&(v=v+1));const S=g.slidesPerGroupAuto?v:g.slidesPerGroup;let E=m?Math.max(S,Math.ceil(v/2)):S;E%S!==0&&(E+=S-E%S),E+=g.loopAdditionalSlides,s.loopedSlides=E;const P=s.grid&&g.grid&&g.grid.rows>1;c.length<v+E||s.params.effect==="cards"&&c.length<v+E*2?ic("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):P&&g.grid.fill==="row"&&ic("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],_=[],$=P?Math.ceil(c.length/g.grid.rows):c.length,M=o&&$-p<v&&!m;let I=M?p:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(c.find(T=>T.classList.contains(g.slideActiveClass))):I=i;const D=n==="next"||!n,O=n==="prev"||!n;let F=0,L=0;const R=(P?c[i].column:i)+(m&&typeof r>"u"?-v/2+.5:0);if(R<E){F=Math.max(E-R,S);for(let T=0;T<E-R;T+=1){const j=T-Math.floor(T/$)*$;if(P){const z=$-j-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===z&&k.push(B)}else k.push($-j-1)}}else if(R+v>$-E){L=Math.max(R-($-E*2),S),M&&(L=Math.max(L,v-$+p+1));for(let T=0;T<L;T+=1){const j=T-Math.floor(T/$)*$;P?c.forEach((z,B)=>{z.column===j&&_.push(B)}):_.push(j)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&c.length<v+E*2&&(_.includes(i)&&_.splice(_.indexOf(i),1),k.includes(i)&&k.splice(k.indexOf(i),1)),O&&k.forEach(T=>{c[T].swiperLoopMoveDOM=!0,y.prepend(c[T]),c[T].swiperLoopMoveDOM=!1}),D&&_.forEach(T=>{c[T].swiperLoopMoveDOM=!0,y.append(c[T]),c[T].swiperLoopMoveDOM=!1}),s.recalcSlides(),g.slidesPerView==="auto"?s.updateSlides():P&&(k.length>0&&O||_.length>0&&D)&&s.slides.forEach((T,j)=>{s.grid.updateSlide(j,T,s.slides)}),g.watchSlidesProgress&&s.updateSlidesOffset(),t){if(k.length>0&&O){if(typeof e>"u"){const T=s.slidesGrid[I],z=s.slidesGrid[I+F]-T;l?s.setTranslate(s.translate-z):(s.slideTo(I+Math.ceil(F),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else if(r){const T=P?k.length/g.grid.rows:k.length;s.slideTo(s.activeIndex+T,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&D)if(typeof e>"u"){const T=s.slidesGrid[I],z=s.slidesGrid[I-L]-T;l?s.setTranslate(s.translate-z):(s.slideTo(I-L,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else{const T=P?_.length/g.grid.rows:_.length;s.slideTo(s.activeIndex-T,0,!1,!0)}}if(s.allowSlidePrev=u,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const T={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(j=>{!j.destroyed&&j.params.loop&&j.loopFix({...T,slideTo:j.params.slidesPerView===g.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...T,slideTo:s.controller.control.params.slidesPerView===g.slidesPerView?t:!1})}s.emit("loopFix")}function JI(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var eD={loopCreate:QI,loopFix:ZI,loopDestroy:JI};function tD(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function nD(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var rD={setGrabCursor:tD,unsetGrabCursor:nD};function iD(e,t=this){function n(r){if(!r||r===jn()||r===bt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Vv(e,t,n){const r=bt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function oD(e){const t=this,n=jn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Vv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!uI(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",u=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&u&&(s=u[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,y=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(y?iD(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const g=a.currentX,h=a.currentY;if(!Vv(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=g,a.startY=h,i.touchStartTime=rc(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let x=!0;s.matches(i.focusableElements)&&(x=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=x&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function aD(e){const t=jn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].find(P=>P.identifier===r.touchId),!c||c.identifier!==r.touchId)return}else c=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const u=c.pageX,d=c.pageY;if(s.preventedByNestedSwiper){o.startX=u,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=rc());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(u>o.startX&&-n.translate<=n.maxTranslate()||u<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(u<o.startX&&n.translate<=n.maxTranslate()||u>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=u,o.currentY=d;const y=o.currentX-o.startX,g=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(y**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let P;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:y*y+g*g>=25&&(P=Math.atan2(Math.abs(g),Math.abs(y))*180/Math.PI,r.isScrolling=n.isHorizontal()?P>i.touchAngle:90-P>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let h=n.isHorizontal()?y:g,x=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(h=Math.abs(h)*(a?1:-1),x=Math.abs(x)*(a?1:-1)),o.diff=h,h*=i.touchRatio,a&&(h=-h,x=-x);const w=n.touchesDirection;n.swipeDirection=h>0?"prev":"next",n.touchesDirection=x>0?"prev":"next";const p=n.params.loop&&!i.cssMode,m=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(p&&m&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const P=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(P)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let v;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&p&&m&&Math.abs(h)>=1){Object.assign(o,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=h+r.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),h>0?(p&&m&&!v&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+h)**E))):h<0&&(p&&m&&!v&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-h)**E))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(h)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function sD(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(E=>E.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:c,enabled:u}=t;if(!u||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=rc(),y=d-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),y<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=rc(),m2(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(a.followFinger?g=s?t.translate:-t.translate:g=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const h=g>=-t.maxTranslate()&&!t.params.loop;let x=0,w=t.slidesSizesGrid[0];for(let E=0;E<c.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){const P=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[E+P]<"u"?(h||g>=c[E]&&g<c[E+P])&&(x=E,w=c[E+P]-c[E]):(h||g>=c[E])&&(x=E,w=c[c.length-1]-c[c.length-2])}let p=null,m=null;a.rewind&&(t.isBeginning?m=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(p=0));const v=(g-c[x])/w,S=x<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(y>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(v>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?p:x+S):t.slideTo(x)),t.swipeDirection==="prev"&&(v>1-a.longSwipesRatio?t.slideTo(x+S):m!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?t.slideTo(m):t.slideTo(x))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(x+S):t.slideTo(x):(t.swipeDirection==="next"&&t.slideTo(p!==null?p:x+S),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:x))}}function Uv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function lD(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function cD(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function uD(e){const t=this;ul(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function dD(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const C2=(e,t)=>{const n=jn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Uv,!0):e[c]("observerUpdate",Uv,!0),i[s]("load",e.onLoad,{capture:!0}))};function fD(){const e=this,{params:t}=e;e.onTouchStart=oD.bind(e),e.onTouchMove=aD.bind(e),e.onTouchEnd=sD.bind(e),e.onDocumentTouchStart=dD.bind(e),t.cssMode&&(e.onScroll=cD.bind(e)),e.onClick=lD.bind(e),e.onLoad=uD.bind(e),C2(e,"on")}function pD(){C2(this,"off")}var hD={attachEvents:fD,detachEvents:pD};const Wv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function mD(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=jn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),c=e.getBreakpoint(o,l,s);if(!c||e.currentBreakpoint===c)return;const d=(c in o?o[c]:void 0)||e.originalParams,y=Wv(e,r),g=Wv(e,d),h=e.params.grabCursor,x=d.grabCursor,w=r.enabled;y&&!g?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&g&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),h&&!x?e.unsetGrabCursor():!h&&x&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof d[P]>"u")return;const k=r[P]&&r[P].enabled,_=d[P]&&d[P].enabled;k&&!_&&e[P].disable(),!k&&_&&e[P].enable()});const p=d.direction&&d.direction!==r.direction,m=r.loop&&(d.slidesPerView!==r.slidesPerView||p),v=r.loop;p&&n&&e.changeDirection(),Lt(e.params,d);const S=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",d),n&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!v&&E?(e.loopCreate(t),e.updateSlides()):v&&!E&&e.loopDestroy()),e.emit("breakpoint",d)}function gD(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=bt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:c}=a[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var vD={setBreakpoint:mD,getBreakpoint:gD};function yD(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function xD(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=yD(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function bD(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var wD={addClasses:xD,removeClasses:bD};function SD(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var CD={checkOverflow:SD},Fp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function _D(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Lt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Lt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Lt(t,r)}}const Bd={eventsEmitter:wI,update:MI,translate:FI,transition:VI,slide:KI,loop:eD,grabCursor:rD,events:hD,breakpoints:vD,checkOverflow:CD,classes:wD},Vd={};let Lm=class An{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Lt({},r),n&&!r.el&&(r.el=n);const i=jn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(c=>{const u=Lt({},r,{el:c});s.push(new An(u))}),s}const o=this;o.__swiper__=!0,o.support=x2(),o.device=b2({userAgent:r.userAgent}),o.browser=w2(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:_D(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Lt({},Fp,a);return o.params=Lt({},l,Vd,r),o.originalParams=Lt({},o.params),o.passedParams=Lt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=kn(n,`.${r.slideClass}, swiper-slide`),o=ac(i[0]);return ac(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=kn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[c]?Math.ceil(o[c].swiperSlideSize):0,y;for(let g=c+1;g<o.length;g+=1)o[g]&&!y&&(d+=Math.ceil(o[g].swiperSlideSize),u+=1,d>s&&(y=!0));for(let g=c-1;g>=0;g-=1)o[g]&&!y&&(d+=o[g].swiperSlideSize,u+=1,d>s&&(y=!0))}else if(t==="current")for(let d=c+1;d<o.length;d+=1)(n?a[d]+l[d]-a[c]<s:a[d]-a[c]<s)&&(u+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<s&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&ul(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):kn(r,i())[0])();return!a&&n.params.createElements&&(a=oc("div",n.params.wrapperClass),r.append(a),kn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||gr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||gr(r,"direction")==="rtl"),wrongRTL:gr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?ul(n,o):o.addEventListener("load",a=>{ul(n,a.target)})}),Rp(n),n.initialized=!0,Rp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),oI(r)),r.destroyed=!0),null}static extendDefaults(t){Lt(Vd,t)}static get extendedDefaults(){return Vd}static get defaults(){return Fp}static installModule(t){An.prototype.__modules__||(An.prototype.__modules__=[]);const n=An.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>An.installModule(n)),An):(An.installModule(t),An)}};Object.keys(Bd).forEach(e=>{Object.keys(Bd[e]).forEach(t=>{Lm.prototype[t]=Bd[e][t]})});Lm.use([xI,bI]);const _2=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function oi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Gi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:oi(t[r])&&oi(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Gi(e[r],t[r]):e[r]=t[r]})}function E2(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function k2(e={}){return e.pagination&&typeof e.pagination.el>"u"}function T2(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function P2(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function ED(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function kD({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:c,pagination:u,navigation:d,scrollbar:y,virtual:g,thumbs:h}=e;let x,w,p,m,v,S,E,P;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(x=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(c.pagination||c.pagination===!1)&&u&&!u.el&&(p=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&y&&!y.el&&(m=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(v=!0);const k=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),c[_].prevEl=void 0,c[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),c[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?S=!0:!c.loop&&n.loop?E=!0:P=!0),s.forEach(_=>{if(oi(c[_])&&oi(n[_]))Object.assign(c[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&k(_);else{const $=n[_];($===!0||$===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?$===!1&&k(_):c[_]=n[_]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&t&&g&&c.virtual.enabled?(g.slides=t,g.update(!0)):r.includes("virtual")&&g&&c.virtual.enabled&&(t&&(g.slides=t),g.update(!0)),r.includes("children")&&t&&c.loop&&(P=!0),x&&h.init()&&h.update(!0),w&&(e.controller.control=c.controller.control),p&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),u.init(),u.render(),u.update()),m&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),y.init(),y.updateSize(),y.setTranslate()),v&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Na(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Na(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(c.navigation.nextEl=i),o&&(c.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||P)&&e.loopDestroy(),(E||P)&&e.loopCreate(),e.update()}function TD(e={},t=!0){const n={on:{}},r={},i={};Gi(n,Fp),n._emitClasses=!0,n.init=!1;const o={},a=_2.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?oi(e[s])?(n[s]={},i[s]={},Gi(n[s],e[s]),Gi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function PD({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){E2(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),k2(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),T2(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function OD(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),c=n.map(i);s.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return _2.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(oi(e[s])&&oi(t[s])){const c=Object.keys(e[s]),u=Object.keys(t[s]);c.length!==u.length?a(s):(c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const jD=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function sc(){return sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sc.apply(this,arguments)}function O2(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function j2(e){const t=[];return K.Children.toArray(e).forEach(n=>{O2(n)?t.push(n):n.props&&n.props.children&&j2(n.props.children).forEach(r=>t.push(r))}),t}function $D(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return K.Children.toArray(e).forEach(r=>{if(O2(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=j2(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function MD(e,t,n){if(!n)return null;const r=u=>{let d=u;return u<0?d=t.length+u:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let u=l;u<s;u+=1)u>=o&&u<=a&&c.push(t[r(u)]);return c.map((u,d)=>K.cloneElement(u,{swiper:e,style:i,key:u.props.virtualIndex||u.key||`slide-${d}`}))}function ua(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const Hv=b.createContext(null),ID=b.createContext(null),$2=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,c]=b.useState("swiper"),[u,d]=b.useState(null),[y,g]=b.useState(!1),h=b.useRef(!1),x=b.useRef(null),w=b.useRef(null),p=b.useRef(null),m=b.useRef(null),v=b.useRef(null),S=b.useRef(null),E=b.useRef(null),P=b.useRef(null),{params:k,passedParams:_,rest:$,events:M}=TD(o),{slides:I,slots:D}=$D(r),O=()=>{g(!y)};Object.assign(k.on,{_containerClasses(T,j){c(j)}});const F=()=>{Object.assign(k.on,M),l=!0;const T={...k};if(delete T.wrapperClass,w.current=new Lm(T),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=I;const j={cache:!1,slides:I,renderExternal:d,renderExternalUpdate:!1};Gi(w.current.params.virtual,j),Gi(w.current.originalParams.virtual,j)}};x.current||F(),w.current&&w.current.on("_beforeBreakpoint",O);const L=()=>{l||!M||!w.current||Object.keys(M).forEach(T=>{w.current.on(T,M[T])})},A=()=>{!M||!w.current||Object.keys(M).forEach(T=>{w.current.off(T,M[T])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",O)}),b.useEffect(()=>{!h.current&&w.current&&(w.current.emitSlidesClasses(),h.current=!0)}),ua(()=>{if(a&&(a.current=x.current),!!x.current)return w.current.destroyed&&F(),PD({el:x.current,nextEl:v.current,prevEl:S.current,paginationEl:E.current,scrollbarEl:P.current,swiper:w.current},k),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),ua(()=>{L();const T=OD(_,p.current,I,m.current,j=>j.key);return p.current=_,m.current=I,T.length&&w.current&&!w.current.destroyed&&kD({swiper:w.current,slides:I,passedParams:_,changedParams:T,nextEl:v.current,prevEl:S.current,scrollbarEl:P.current,paginationEl:E.current}),()=>{A()}}),ua(()=>{jD(w.current)},[u]);function R(){return k.virtual?MD(w.current,I,u):I.map((T,j)=>K.cloneElement(T,{swiper:w.current,swiperSlideIndex:j}))}return K.createElement(t,sc({ref:x,className:P2(`${s}${e?` ${e}`:""}`)},$),K.createElement(ID.Provider,{value:w.current},D["container-start"],K.createElement(n,{className:ED(k.wrapperClass)},D["wrapper-start"],R(),D["wrapper-end"]),E2(k)&&K.createElement(K.Fragment,null,K.createElement("div",{ref:S,className:"swiper-button-prev"}),K.createElement("div",{ref:v,className:"swiper-button-next"})),T2(k)&&K.createElement("div",{ref:P,className:"swiper-scrollbar"}),k2(k)&&K.createElement("div",{ref:E,className:"swiper-pagination"}),D["container-end"]))});$2.displayName="Swiper";const M2=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},c)=>{const u=b.useRef(null),[d,y]=b.useState("swiper-slide"),[g,h]=b.useState(!1);function x(v,S,E){S===u.current&&y(E)}ua(()=>{if(typeof l<"u"&&(u.current.swiperSlideIndex=l),c&&(c.current=u.current),!(!u.current||!r)){if(r.destroyed){d!=="swiper-slide"&&y("swiper-slide");return}return r.on("_slideClass",x),()=>{r&&r.off("_slideClass",x)}}}),ua(()=>{r&&u.current&&!r.destroyed&&y(r.getSlideClasses(u.current))},[r]);const w={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},p=()=>typeof t=="function"?t(w):t,m=()=>{h(!0)};return K.createElement(e,sc({ref:u,className:P2(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:m},s),i&&K.createElement(Hv.Provider,{value:w},K.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},p(),o&&!g&&K.createElement("div",{className:"swiper-lazy-preloader",ref:v=>{v&&(v.lazyPreloaderManaged=!0)}}))),!i&&K.createElement(Hv.Provider,{value:w},p(),o&&!g&&K.createElement("div",{className:"swiper-lazy-preloader",ref:v=>{v&&(v.lazyPreloaderManaged=!0)}})))});M2.displayName="SwiperSlide";const DD=C.section`
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
`,LD=C.div`
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
`,AD=C.div`
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
`,RD=C(Te)`
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
`,FD=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],zD=()=>f.jsx(DD,{children:f.jsx($2,{modules:[pI,mI,hI],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:FD.map(e=>f.jsx(M2,{children:f.jsx(LD,{bg:e.img,children:f.jsxs(AD,{children:[f.jsx("h1",{children:e.title}),f.jsx("p",{children:e.desc}),f.jsx(RD,{to:e.url,children:e.btn})]})})},e.id))})}),ND=C.div`
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
`,I2=()=>f.jsxs(ND,{children:[f.jsxs(Ud,{children:[f.jsx(Wd,{children:"3000+"}),f.jsx(Hd,{children:"Перевірених деталей"})]}),f.jsxs(Ud,{children:[f.jsx(Wd,{children:"6 років"}),f.jsx(Hd,{children:"Досвіду на ринку"})]}),f.jsxs(Ud,{children:[f.jsx(Wd,{children:"100%"}),f.jsx(Hd,{children:"Контроль якості"})]})]}),BD=Fe.div`
  background:var(--background-color);
`,VD=Fe.div`
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
`;const UD=()=>f.jsx(BD,{children:f.jsxs(VD,{children:[f.jsx(zD,{}),f.jsx(Qw,{}),f.jsx(nI,{}),f.jsx(I2,{})]})}),WD=C.div`
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
`,HD=C.section`
  background-color:  var(--second-background);
`,GD=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,qD=C.button`
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
`,YD=C.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,XD=C.button`
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
`;const KD=C.div`
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
`,QD=C.div`
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
`;const ZD=C.div`
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
`;const JD=C.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,e6=C.button`
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
`,D2=C.button`
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
`,t6=C.div`
  position: relative;
  display: inline-block;

`,n6=C.div`
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
`,r6=C.aside`

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
`,i6=C.h3`
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
`;const o6=C.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,a6=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,s6=C.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,l6=C.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,c6=C.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,u6=C.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,zp=C.input.attrs({type:"checkbox"})`
  display: none;
`,d6=C.span`
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
`;var Np={},Am={},Rm={},wo={};Object.defineProperty(wo,"__esModule",{value:!0});wo.Direction=void 0;var Gv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Gv||(wo.Direction=Gv={}));(function(e){var t=te&&te.__spreadArray||function(D,O,F){if(F||arguments.length===2)for(var L=0,A=O.length,R;L<A;L++)(R||!(L in O))&&(R||(R=Array.prototype.slice.call(O,0,L)),R[L]=O[L]);return D.concat(R||Array.prototype.slice.call(O))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=wo,i=function(D){var O=D.toString().split(".")[1];return O?O.length:0};e.getStepDecimals=i;function o(D){return D.touches&&D.touches.length||D.changedTouches&&D.changedTouches.length}e.isTouchEvent=o;function a(D,O,F){var L=(O-D)/F,A=8,R=Number(L.toFixed(A));return parseInt(R.toString(),10)===R}e.isStepDivisible=a;function l(D,O,F,L,A,R,T){var j=1e11;if(D=Math.round(D*j)/j,!R){var z=T[O-1],B=T[O+1];if(z&&z>D)return z;if(B&&B<D)return B}if(D>L)return L;if(D<F)return F;var N=Math.floor(D*j-F*j)%Math.floor(A*j),U=Math.floor(D*j-Math.abs(N)),G=N===0?D:U/j,W=Math.abs(N/j)<A/2?G:G+A,Y=(0,e.getStepDecimals)(A);return parseFloat(W.toFixed(Y))}e.normalizeValue=l;function s(D,O,F){return(D-O)/(F-O)}e.relativeValue=s;function c(D){return D===r.Direction.Up||D===r.Direction.Down}e.isVertical=c;function u(D,O,F){if(O>=F)throw new RangeError("min (".concat(O,") is equal/bigger than max (").concat(F,")"));if(D<O)throw new RangeError("value (".concat(D,") is smaller than min (").concat(O,")"));if(D>F)throw new RangeError("value (".concat(D,") is bigger than max (").concat(F,")"))}e.checkBoundaries=u;function d(D,O,F){return D<O?O:D>F?F:D}e.checkValuesAgainstBoundaries=d;function y(D){if(!(D.length<2)&&!D.slice(1).every(function(O,F){return D[F]<=O}))throw new RangeError("values={[".concat(D,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=y;function g(D){var O=window.getComputedStyle(D);return{top:parseInt(O["margin-top"],10),bottom:parseInt(O["margin-bottom"],10),left:parseInt(O["margin-left"],10),right:parseInt(O["margin-right"],10)}}e.getMargin=g;function h(D){var O=window.getComputedStyle(D);return{top:parseInt(O["padding-top"],10)+parseInt(O["border-top-width"],10),bottom:parseInt(O["padding-bottom"],10)+parseInt(O["border-bottom-width"],10),left:parseInt(O["padding-left"],10)+parseInt(O["border-left-width"],10),right:parseInt(O["padding-right"],10)+parseInt(O["border-right-width"],10)}}e.getPaddingAndBorder=h;function x(D,O,F){var L=F?-1:1;D.forEach(function(A,R){return p(A,L*O[R].x,O[R].y)})}e.translateThumbs=x;function w(D,O,F,L){for(var A=0,R=M(D[0],O,F,L),T=1;T<D.length;T++){var j=M(D[T],O,F,L);j<R&&(R=j,A=T)}return A}e.getClosestThumbIndex=w;function p(D,O,F){D.style.transform="translate(".concat(O,"px, ").concat(F,"px)")}e.translate=p;var m=function(D){var O=[],F=null,L=function(){for(var A=[],R=0;R<arguments.length;R++)A[R]=arguments[R];O=A,!F&&(F=requestAnimationFrame(function(){F=null,D.apply(void 0,O)}))};return L};e.schd=m;function v(D,O,F){var L=D.slice(0);return L[O]=F,L}e.replaceAt=v;function S(D){var O=D.values,F=D.colors,L=D.min,A=D.max,R=D.direction,T=R===void 0?r.Direction.Right:R,j=D.rtl,z=j===void 0?!1:j;z&&T===r.Direction.Right?T=r.Direction.Left:z&&r.Direction.Left&&(T=r.Direction.Right);var B=O.slice(0).sort(function(U,G){return U-G}).map(function(U){return(U-L)/(A-L)*100}),N=B.reduce(function(U,G,W){return"".concat(U,", ").concat(F[W]," ").concat(G,"%, ").concat(F[W+1]," ").concat(G,"%")},"");return"linear-gradient(".concat(T,", ").concat(F[0]," 0%").concat(N,", ").concat(F[F.length-1]," 100%)")}e.getTrackBackground=S;function E(){}e.voidFn=E;function P(D){throw new Error("Didn't expect to get here")}e.assertUnreachable=P;var k=function(D,O,F,L,A){A===void 0&&(A=function(T){return T});var R=Math.ceil(t([D],Array.from(D.children),!0).reduce(function(T,j){var z=Math.ceil(j.getBoundingClientRect().width);if(j.innerText&&j.innerText.includes(F)&&j.childElementCount===0){var B=j.cloneNode(!0);B.innerHTML=A(O.toFixed(L)),B.style.visibility="hidden",document.body.appendChild(B),z=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return z>T?z:T},D.getBoundingClientRect().width));return R},_=function(D,O,F,L,A,R,T){T===void 0&&(T=function(B){return B});var j=[],z=function(B){var N=k(F[B],L[B],A,R,T),U=O[B].x;O.forEach(function(G,W){var Y=G.x,ee=k(F[W],L[W],A,R,T);B!==W&&(U>=Y&&U<=Y+ee||U+N>=Y&&U+N<=Y+ee)&&(j.includes(W)||(j.push(B),j.push(W),j=t(t([],j,!0),[B,W],!1),z(W)))})};return z(D),Array.from(new Set(j.sort()))},$=function(D,O,F,L,A,R){L===void 0&&(L=.1),A===void 0&&(A=" - "),R===void 0&&(R=function(W){return W});var T=(0,e.getStepDecimals)(L),j=(0,n.useState)({}),z=j[0],B=j[1],N=(0,n.useState)(R(O[F].toFixed(T))),U=N[0],G=N[1];return(0,n.useEffect)(function(){if(D){var W=D.getThumbs();if(W.length<1)return;var Y={},ee=D.getOffsets(),pe=_(F,ee,W,O,A,T,R),we=R(O[F].toFixed(T));if(pe.length){var ie=pe.reduce(function(wt,Co,is,_o){return wt.length?t(t([],wt,!0),[ee[_o[is]].x],!1):[ee[_o[is]].x]},[]);if(Math.min.apply(Math,ie)===ee[F].x){var Ie=[];pe.forEach(function(wt){Ie.push(O[wt].toFixed(T))}),we=Array.from(new Set(Ie.sort(function(wt,Co){return parseFloat(wt)-parseFloat(Co)}))).map(R).join(A);var We=Math.min.apply(Math,ie),He=Math.max.apply(Math,ie),pi=W[pe[ie.indexOf(He)]].getBoundingClientRect().width;Y.left="".concat(Math.abs(We-(He+pi))/2,"px"),Y.transform="translate(-50%, 0)"}else Y.visibility="hidden"}G(we),B(Y)}},[D,O]),[U,z]};e.useThumbOverlap=$;function M(D,O,F,L){var A=D.getBoundingClientRect(),R=A.left,T=A.top,j=A.width,z=A.height;return c(L)?Math.abs(F-(T+z/2)):Math.abs(O-(R+j/2))}var I=function(){var D,O=((D=navigator.userAgentData)===null||D===void 0?void 0:D.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(O)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=I})(Rm);var f6=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),p6=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),h6=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),m6=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&p6(t,e,n);return h6(t,e),t},qv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Am,"__esModule",{value:!0});var $s=m6(b),oe=Rm,ze=wo,g6=["ArrowRight","ArrowUp","k","PageUp"],v6=["ArrowLeft","ArrowDown","j","PageDown"],y6=function(e){f6(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=$s.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,c=r.trackRef.current;if(!c)return console.warn("No track element found."),[];var u=c.getBoundingClientRect(),d=(0,oe.getPaddingAndBorder)(c);return r.getThumbs().map(function(y,g){var h={x:0,y:0},x=y.getBoundingClientRect(),w=(0,oe.getMargin)(y);switch(o){case ze.Direction.Right:return h.x=(w.left+d.left)*-1,h.y=((x.height-u.height)/2+d.top)*-1,h.x+=u.width*(0,oe.relativeValue)(a[g],l,s)-x.width/2,h;case ze.Direction.Left:return h.x=(w.right+d.right)*-1,h.y=((x.height-u.height)/2+d.top)*-1,h.x+=u.width-u.width*(0,oe.relativeValue)(a[g],l,s)-x.width/2,h;case ze.Direction.Up:return h.x=((x.width-u.width)/2+w.left+d.left)*-1,h.y=-d.left,h.y+=u.height-u.height*(0,oe.relativeValue)(a[g],l,s)-x.height/2,h;case ze.Direction.Down:return h.x=((x.width-u.width)/2+w.left+d.left)*-1,h.y=-d.left,h.y+=u.height*(0,oe.relativeValue)(a[g],l,s)-x.height/2,h;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,c=o.rtl,u=o.direction,d=r.state.isChanged,y=r.getTargetIndex(i.nativeEvent),g=c||u===ze.Direction.Left||u===ze.Direction.Down?-1:1;y!==-1&&(g6.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]+g*(i.key==="PageUp"?s*10:s),y)))):v6.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]-g*(i.key==="PageDown"?s*10:s),y)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,c=r.props,u=c.direction,d=c.min,y=c.max,g=c.onChange,h=c.values,x=c.step,w=c.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var p=r.trackRef.current;if(!p)return null;var m=p.getBoundingClientRect(),v=(0,oe.isVertical)(u)?m.height:m.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],E=o-s[1],P=0;switch(u){case ze.Direction.Right:case ze.Direction.Left:P=S/v*(y-d);break;case ze.Direction.Down:case ze.Direction.Up:P=E/v*(y-d);break;default:(0,oe.assertUnreachable)(u)}if(w&&(P*=-1),Math.abs(P)>=x/2){for(var k=0;k<r.thumbRefs.length;k++){if(h[k]===y&&Math.sign(P)===1||h[k]===d&&Math.sign(P)===-1)return;var _=h[k]+P;_>y?P=y-h[k]:_<d&&(P=d-h[k])}for(var $=h.slice(0),k=0;k<r.thumbRefs.length;k++)$=(0,oe.replaceAt)($,k,r.normalizeValue(h[k]+P,k));r.setState({draggedTrackPos:[i,o]}),g($)}}else{var M=0;switch(u){case ze.Direction.Right:M=(i-m.left)/v*(y-d)+d;break;case ze.Direction.Left:M=(v-(i-m.left))/v*(y-d)+d;break;case ze.Direction.Down:M=(o-m.top)/v*(y-d)+d;break;case ze.Direction.Up:M=(v-(o-m.top))/v*(y-d)+d;break;default:(0,oe.assertUnreachable)(u)}w&&(M=y+d-M),Math.abs(h[l]-M)>=x/2&&g((0,oe.replaceAt)(h,l,r.normalizeValue(M,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,c=a.step,u=a.allowOverlap,d=a.values;return(0,oe.normalizeValue)(i,o,l,s,c,u,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=$s.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),c=[],u=0;u<r.numOfMarks+1;u++){var d=9999,y=9999;if(r.markRefs[u].current){var g=r.markRefs[u].current.getBoundingClientRect();d=g.height,y=g.width}r.props.direction===ze.Direction.Left||r.props.direction===ze.Direction.Right?c.push([Math.round(o/r.numOfMarks*u+l-y/2),-Math.round((d-a)/2)]):c.push([Math.round(a/r.numOfMarks*u+s-d/2),-Math.round((y-o)/2)])}r.setState({markOffsets:c})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return $s.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,c=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),c),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(u){(0,oe.isStepDivisible)(a,u,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,c=s===void 0?function(){return null}:s,u=r.values,d=r.min,y=r.max,g=r.allowOverlap,h=r.disabled,x=this.state,w=x.draggedThumbIndex,p=x.thumbZIndexes,m=x.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":u.length===1&&!h?"pointer":"inherit"},onMouseDown:h?oe.voidFn:this.onMouseDownTrack,onTouchStart:h?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:h,children:qv(qv([],m.map(function(v,S,E){return c({props:{style:n.props.direction===ze.Direction.Left||n.props.direction===ze.Direction.Right?{position:"absolute",left:"".concat(v[0],"px"),marginTop:"".concat(v[1],"px")}:{position:"absolute",top:"".concat(v[0],"px"),marginLeft:"".concat(v[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),u.map(function(v,S){var E=n.state.draggedThumbIndex===S;return l({index:S,value:v,isDragged:E,props:{style:{position:"absolute",zIndex:p[S],cursor:h?"inherit":E?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:h?void 0:0,"aria-valuemax":g?y:u[S+1]||y,"aria-valuemin":g?d:u[S-1]||d,"aria-valuenow":v,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:h?oe.voidFn:n.onKeyDown,onKeyUp:h?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:ze.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}($s.Component);Am.default=y6;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Am);e.Range=n.default;var r=Rm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=wo;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Np);const x6=C.div`
  padding: 20px 0;
`,b6=C.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Yv=C.input`
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
`;const w6=C.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,S6=C.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,L2=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,c]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(c(e),t&&t(e))},[e,t]);const u=g=>{c(g),t&&t(g)},d=(g,h)=>{const x=h===""?"":Number(h),w=[...s];w[g]=x,u(w)},y=g=>{const h=[...s];g===0?((h[0]===""||h[0]<o)&&(h[0]=o),h[0]>h[1]-50&&(h[0]=h[1]-50)):((h[1]===""||h[1]>a)&&(h[1]=a),h[1]<h[0]+50&&(h[1]=h[0]+50)),u(h)};return f.jsx(f.Fragment,{children:l&&f.jsxs(x6,{children:[f.jsxs(b6,{children:[f.jsx(Yv,{type:"number",value:s[0],min:o,max:s[1],onChange:g=>d(0,g.target.value),onBlur:()=>y(0)}),f.jsx(Yv,{type:"number",value:s[1],min:s[0],max:a,onChange:g=>d(1,g.target.value),onBlur:()=>y(1)})]}),f.jsx(Np.Range,{values:s,step:50,min:o,max:a,onChange:u,renderTrack:({props:g,children:h})=>f.jsx(w6,{...g,background:Np.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:h}),renderThumb:({props:g})=>f.jsx(S6,{...g})})]})})},C6=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState([]),[l,s]=b.useState({});b.useEffect(()=>{t&&(async()=>{try{const w=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],p={};w.forEach(v=>{var S;(S=v.attributes)==null||S.forEach(E=>{p[E.label]||(p[E.label]=new Set),p[E.label].add(E.value)})});const m=Object.entries(p).map(([v,S])=>({type:"checkbox",label:v,name:v.toLowerCase(),options:Array.from(S)}));a(m)}catch(h){console.error(h)}})()},[t]);const c=g=>{s(h=>({...h,[g]:!h[g]}))},u=(g,h)=>{r(x=>{const w=x[g]||[];return w.includes(h)?{...x,[g]:w.filter(p=>p!==h)}:{...x,[g]:[...w,h]}})},d=Object.values(n).some(g=>Array.isArray(g)&&g.length>0),y=()=>{d&&r({})};return f.jsxs(r6,{children:[f.jsxs(i6,{children:["Фільтри ",f.jsx(yw,{size:20})]}),(o||[]).map(g=>{var x;const h=!!l[g.name];return f.jsxs(o6,{children:[f.jsxs(a6,{onClick:()=>c(g.name),children:[f.jsx(s6,{children:g.label}),f.jsx(l6,{isOpen:h})]}),f.jsxs(c6,{isOpen:h,children:[g.type==="checkbox"&&((x=g.options)==null?void 0:x.map(w=>{var p;return f.jsxs(u6,{children:[f.jsx(zp,{checked:((p=n[g.name])==null?void 0:p.includes(w))||!1,onChange:()=>u(g.name,w)}),f.jsx(d6,{}),w]},w)})),g.type==="range"&&f.jsx(L2,{onChange:i,childValues:e})]})]},g.name)}),f.jsx(D2,{onClick:y,disabled:!d,children:"Скинути обрані фільтри"})]})},_6=C.aside`
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
`;const E6=C.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,k6=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,T6=C.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,P6=C.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,O6=C.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,j6=C.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Bp=C.input.attrs({type:"checkbox"})`
  display: none;
`,$6=C.span`
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
`,M6=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState({}),[l,s]=b.useState([]);b.useEffect(()=>{t&&(async()=>{try{const h=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],x={};h.forEach(p=>{var m;(m=p.attributes)==null||m.forEach(v=>{x[v.label]||(x[v.label]=new Set),x[v.label].add(v.value)})});const w=Object.entries(x).map(([p,m])=>({type:"checkbox",label:p,name:p.toLowerCase(),options:Array.from(m)}));s(w)}catch(y){console.error(y)}})()},[t]);const c=d=>{a(y=>({...y,[d]:!y[d]}))},u=(d,y)=>{r(g=>{const h=g[d]||[];return h.includes(y)?{...g,[d]:h.filter(x=>x!==y)}:{...g,[d]:[...h,y]}})};return f.jsx(_6,{children:(l||[]).map(d=>{var g;const y=!!o[d.name];return f.jsxs(E6,{children:[f.jsxs(k6,{onClick:()=>c(d.name),children:[f.jsx(T6,{children:d.label}),f.jsx(P6,{isOpen:y})]}),f.jsxs(O6,{isOpen:y,children:[d.type==="checkbox"&&((g=d.options)==null?void 0:g.map(h=>{var x;return f.jsxs(j6,{children:[f.jsx(Bp,{checked:((x=n[d.name])==null?void 0:x.includes(h))||!1,onChange:()=>u(d.name,h)}),f.jsx($6,{}),h]},h)})),d.type==="range"&&f.jsx(L2,{onChange:i,childValues:e})]})]},d.name)})})},I6=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:c})=>{const[u,d]=b.useState([]),[y,g]=b.useState(!0),[h,x]=b.useState(1),w=24;let p=u;const m=b.useRef(null);b.useEffect(()=>{const O=F=>{m.current&&!m.current.contains(F.target)&&o(!1)};return document.addEventListener("mousedown",O),()=>{document.removeEventListener("mousedown",O)}},[o]),b.useEffect(()=>{(async()=>{try{g(!0);const L=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();d(L.data);const A=L.data.map(R=>R.price);if(A.length>0){let R=Math.min(...A),T=Math.max(...A);e([R,T])}}catch(F){console.error("Error fetching products:",F)}finally{g(!1)}})()},[t,e]),b.useEffect(()=>{x(1)},[t,n,r]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[h]);const v=$t(),S=Wt(),E=Re(O=>O.favorites.items),P=Re(O=>O.cart.items),k=(O,F)=>{F.stopPropagation();const L=E.some(A=>A.id===(O==null?void 0:O.id));ui(O,L,S,X)};if(Object.keys(n).forEach(O=>{const F=n[O];Array.isArray(F)&&F.length>0&&(p=p.filter(L=>{var R;const A=(R=L.attributes)==null?void 0:R.find(T=>T.label.toLowerCase()===O.toLowerCase());return A&&F.includes(A.value)}))}),r&&r.length===2){const[O,F]=r;console.log(O,F)}const _=b.useMemo(()=>{const O=[...p],F=L=>L.new_price&&L.new_price<L.price?L.new_price:L.price;switch(i){case"name":return O.sort((L,A)=>s==="asc"?L.name.localeCompare(A.name):A.name.localeCompare(L.name));case"price":return O.sort((L,A)=>{const R=F(L),T=F(A);return s==="asc"?R-T:T-R});case"date":return O.sort((L,A)=>s==="asc"?new Date(L.createdAt)-new Date(A.createdAt):new Date(A.createdAt)-new Date(L.createdAt));default:return O}},[i,p,s]),$=h*w,M=$-w,I=_.slice(M,$),D=Math.ceil(p.length/w);return y?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsxs(P4,{children:[f.jsxs(O4,{children:[f.jsx(j4,{children:t}),f.jsxs(F4,{ref:m,children:[f.jsxs(z4,{onClick:()=>o(O=>!O),children:["Сортування",f.jsx(Bc,{strokeWidth:.9,size:22})]}),a&&f.jsxs(N4,{children:[f.jsx(yi,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),f.jsx(yi,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),f.jsx(yi,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(yi,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(yi,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(yi,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(Dn,{autoClose:1500}),p.length===0?f.jsx($4,{children:f.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):f.jsx(M4,{children:I.map(O=>{var U,G;const F=E.some(W=>W.id===O.id),L=P.find(W=>W.id===O.id),R=(L?L.quantity:0)>=(O.stock||0),T=(O==null?void 0:O.available)??!0,j=O.new_price&&O.new_price<O.price,z=j?O.new_price:O.price,B=j?Math.round((O.price-O.new_price)/O.price*100):0,N=(W,Y)=>{if(Y.stopPropagation(),R){X.error("Товар уже у кошику");return}S(Aa({...W,quantity:1})),X.success(`${W.name} додано в кошик!`)};return f.jsxs(I4,{onClick:()=>v(`/product/${O.slug??O.id}`),style:{cursor:"pointer"},children:[!T&&f.jsx(fm,{children:"Заброньовано"}),f.jsx(D4,{src:((G=(U=O.images)==null?void 0:U[0])==null?void 0:G.url)||"/placeholder.jpg",alt:O.name,onError:W=>{W.currentTarget.onerror=null,W.currentTarget.src=ri}}),f.jsx(A4,{children:O.name}),f.jsxs(L4,{children:[f.jsx(Ow,{children:f.jsxs(jw,{children:[f.jsxs($w,{$discount:j,children:[z.toLocaleString()," грн"]}),j&&f.jsxs(Mw,{children:[O.price.toLocaleString()," грн"]}),j&&f.jsxs(Iw,{children:["-",B,"%"]})]})}),f.jsxs(Pw,{children:[T&&f.jsx(ql,{onClick:W=>N(O,W),children:f.jsx(vo,{size:24,color:L?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(ql,{onClick:W=>k(O,W),children:f.jsx(Xa,{size:24,fill:F?"#ff4d4f":"none",color:F?"#ff4d4f":"#000000",strokeWidth:F?1:2})})]})]})]},O.id)})}),p.length>w&&f.jsxs(R4,{children:[f.jsx(kd,{onClick:()=>x(O=>Math.max(O-1,1)),disabled:h===1,children:"Назад"}),Array.from({length:D},(O,F)=>f.jsx(kd,{onClick:()=>x(F+1),active:h===F+1,children:F+1},F)),f.jsx(kd,{onClick:()=>x(O=>Math.min(O+1,D)),disabled:h===D,children:"Вперед"})]})]})},D6=()=>{const[e,t]=b.useState({}),{category:n}=Dy(),[r,i]=b.useState(!1),[o,a]=b.useState(!1),[l,s]=b.useState("date"),[c,u]=b.useState("desc"),[d,y]=b.useState([]),[g,h]=b.useState([0,0]),x=Object.values(e).some(p=>Array.isArray(p)&&p.length>0),w=()=>{x&&t({})};return f.jsxs(HD,{children:[f.jsxs(WD,{children:[f.jsxs(GD,{children:[f.jsxs(qD,{onClick:()=>i(!0),children:["Фільтр",f.jsx(YD,{children:f.jsx("use",{href:`${hn}#icon-filter`})})]}),f.jsxs(t6,{children:[f.jsxs(XD,{onClick:()=>a(p=>!p),children:["Сортування",f.jsx(Bc,{strokeWidth:.9,size:22})]}),o&&f.jsxs(n6,{children:[f.jsx(bi,{onClick:()=>{s("name"),u("asc"),a(!1)},children:"А-Я"}),f.jsx(bi,{onClick:()=>{s("name"),u("desc"),a(!1)},children:"Я-А"}),f.jsx(bi,{onClick:()=>{s("price"),u("asc"),a(!1)},children:"Ціна ↑"}),f.jsx(bi,{onClick:()=>{s("price"),u("desc"),a(!1)},children:"Ціна ↓"}),f.jsx(bi,{onClick:()=>{s("date"),u("desc"),a(!1)},children:"Спочатку новіші"}),f.jsx(bi,{onClick:()=>{s("date"),u("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(C6,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:d,priceRange:g,setPriceRange:h}),f.jsx(I6,{priceRange:g,values:d,setValues:y,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:c,setSortOrder:u}),r&&f.jsx(KD,{onClick:()=>i(!1),open:r,children:f.jsxs(QD,{onClick:p=>p.stopPropagation(),open:r,children:[f.jsxs(ZD,{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx(yw,{size:20}),f.jsx("h2",{children:"Фільтри"})]}),f.jsx(bw,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),f.jsx(M6,{childValues:d,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:g,setPriceRange:h}),f.jsxs(JD,{children:[f.jsx(D2,{onClick:w,disabled:!x,children:"Скинути обрані фільтри"}),f.jsx(e6,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},Xv=C.div`
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
`,L6=C.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,A6=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,R6=C.div``;C.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const F6=C.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,z6=C.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,N6=C.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,B6=C.div``,V6=C.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,U6=C.p`
   font-size: 17px;
  margin-bottom: 10px;
  color: #151414;
    font-family: var(--second-font);

`,W6=C.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,H6=C.div`
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

`,G6=C.span`
  color: #27ae60;
  font-size: 17px;
`,q6=C.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,Y6=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,Kv=C.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,X6=C.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,K6=C.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,Q6=C.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,Z6=C.div`
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
`,J6=C.button`
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
`;const Qv=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,eL=C.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,Zv=C.div`
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
`;const tL=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,Jv=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,e1=C.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,No=C.button`
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
`,t1=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,n1=C.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,nL=C.button`
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
`,rL=C.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,A2=C.span`

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
`,iL=C.div`
  position: relative;
  display: inline-block;

  &:hover ${A2} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,R2="carousel",F2="controller",oL="navigation",aL="no-scroll",Fm="portal",sL="root",z2="toolbar",r1="zoom",Gd="loading",qd="error",Yd="complete",lL="placeholder",cL=e=>`active-slide-${e}`,uL="fullsize",zm="flex_center",dL="no_scroll",N2="no_scroll_padding",Nm="slide",B2="slide_wrapper",fL="slide_wrapper_interactive",Br="prev",Vr="next",i1="swipe",lo="close",V2="onPointerDown",U2="onPointerMove",W2="onPointerUp",H2="onPointerLeave",G2="onPointerCancel",Bm="onKeyDown",pL="onKeyUp",Vm="onWheel",hL="Escape",mL="ArrowLeft",gL="ArrowRight",vL="button",Vp="icon",q2="contain",o1="cover",Y2="Unknown action type",X2="yarl__";function $n(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${X2}${e}`}function Ct(e){return`--${X2}${e}`}function rs(e,t){return`${e}${t?`_${t}`:""}`}function Um(e){return t=>rs(e,t)}function co(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function yL(e,t,n){return co(e,"{index} of {total}").replace(/\{index}/g,`${Ym(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function Wm(...e){return()=>{e.forEach(t=>{t()})}}function rr(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Hm(){return typeof window<"u"}function Gm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function So(e){return e.type===void 0||e.type==="image"}function qm(e,t){return e.imageFit===o1||e.imageFit!==q2&&t===o1}function ku(e){return typeof e=="string"?Number.parseInt(e,10):e}function lc(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=ku(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function xL(e,t){const n=lc(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function bL(){return(Hm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Ym(e,t){return t>0?(e%t+t)%t:0}function K2(e){return e.length>0}function Q2(e,t){return e[Ym(t,e.length)]}function Up(e,t){return K2(e)?Q2(e,t):void 0}function wL(e){return So(e)?e.src:void 0}function SL(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function CL(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const _L=Number(b.version.split(".")[0])>=19;function EL(e){return{inert:_L?e:e?"":void 0}}function kL(e){e.scrollTop}const Wp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[lo]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:q2,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Ir(e,t){return{name:e,component:t}}function Ge(e,t){return{module:e,children:t}}function Z2(e,t,n){return e.module.name===t?n(e):e.children?[Ge(e.module,e.children.flatMap(r=>{var i;return(i=Z2(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function wi(e,t,n){return e.flatMap(r=>{var i;return(i=Z2(r,t,n))!==null&&i!==void 0?i:[]})}function TL(e,t=[],n=[]){let r=e;const i=g=>{const h=[...r];for(;h.length>0;){const x=h.pop();if((x==null?void 0:x.module.name)===g)return!0;x!=null&&x.children&&h.push(...x.children)}return!1},o=(g,h)=>{if(g===""){r=[Ge(h,r)];return}r=wi(r,g,x=>[Ge(h,[x])])},a=(g,h)=>{r=wi(r,g,x=>[Ge(x.module,[Ge(h,x.children)])])},l=(g,h,x)=>{r=wi(r,g,w=>{var p;return[Ge(w.module,[...x?[Ge(h)]:[],...(p=w.children)!==null&&p!==void 0?p:[],...x?[]:[Ge(h)]])]})},s=(g,h,x)=>{r=wi(r,g,w=>[...x?[Ge(h)]:[],w,...x?[]:[Ge(h)]])},c=g=>{a(F2,g)},u=(g,h)=>{r=wi(r,g,x=>[Ge(h,x.children)])},d=g=>{r=wi(r,g,h=>h.children)},y=g=>{n.push(g)};return t.forEach(g=>{g({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:c,replace:u,remove:d,augment:y})}),{config:r,augmentation:g=>n.reduce((h,x)=>x(h),g)}}const J2=b.createContext(null),eC=rr("useA11yContext","A11yContext",J2);function PL({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const c=u=>d=>{var y;d.currentTarget.contains(d.relatedTarget)||n(u),(y=u?l:s)===null||y===void 0||y(d)};return{onFocus:c(!0),onBlur:c(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(J2.Provider,{value:o},e)}const tC=b.createContext(null),Tu=rr("useDocument","DocumentContext",tC);function OL({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(tC.Provider,{value:n},t)}const nC=b.createContext(null),Pu=rr("useEvents","EventsContext",nC);function jL({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(c=>c!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(c=>c(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(nC.Provider,{value:n},e)}const rC=b.createContext(null),en=rr("useLightboxProps","LightboxPropsContext",rC);function $L({children:e,...t}){return b.createElement(rC.Provider,{value:t},e)}const iC=b.createContext(null),Dr=rr("useLightboxState","LightboxStateContext",iC),oC=b.createContext(null),ML=rr("useLightboxDispatch","LightboxDispatchContext",oC);function IL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Ym(i,n.length),a=Up(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Up(t.slides,t.index)}:e;default:throw new Error(Y2)}}function DL({slides:e,index:t,children:n}){const[r,i]=b.useReducer(IL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Up(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const c=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(oC.Provider,{value:i},b.createElement(iC.Provider,{value:c},n))}const aC=b.createContext(null),Ou=rr("useTimeouts","TimeoutsContext",aC);function LL({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(aC.Provider,{value:n},e)}const Xm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:c,labels:u}=en(),d=co(u,t);return b.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:$n(ae(vL),n),onClick:o,style:{...a,...c.button},...l},i?i():b.createElement(r,{className:ae(Vp),style:c.icon}))});function AL(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function fi(e,t){return AL(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const RL=fi("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),FL=fi("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),zL=fi("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),NL=fi("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),BL=fi("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Mn=Hm()?b.useLayoutEffect:b.useEffect;function Km(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function VL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(ku);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function a1(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=Km();return Mn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:c,easing:u,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),VL(e.current))||{};if(s&&c){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:c,easing:u})}catch(y){console.error(y)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function sC(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=c=>parseFloat(c)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function dl(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=Ou();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function he(e){const t=b.useRef(e);return Mn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function s1(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Hp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{s1(e,n),s1(t,n)},[e,t])}function UL(e,t=!1){const n=b.useRef(!1);Mn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Qm(){const[e,t]=b.useState(!1);return Mn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function WL(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(V2,i),onPointerMove:i=>t(U2,i),onPointerUp:i=>t(W2,i),onPointerLeave:i=>t(H2,i),onPointerCancel:i=>t(G2,i),onKeyDown:i=>t(Bm,i),onKeyUp:i=>t(pL,i),onWheel:i=>t(Vm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function l1(e,t){const n=b.useRef(0),r=dl(),i=he((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Xd=Um("slide"),Kd=Um("slide_image");function cc({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:c}){var u,d,y,g,h,x,w,p;const[m,v]=b.useState(Gd),{publish:S}=Pu(),{setTimeout:E}=Ou(),P=b.useRef(null);b.useEffect(()=>{t===0&&S(cL(m))},[t,m,S]);const k=he(N=>{("decode"in N?N.decode():Promise.resolve()).catch(()=>{}).then(()=>{N.parentNode&&(v(Yd),E(()=>{l==null||l(N)},0))})}),_=b.useCallback(N=>{P.current=N,N!=null&&N.complete&&k(N)},[k]),$=b.useCallback(N=>{k(N.currentTarget)},[k]),M=he(()=>{v(qd),s==null||s()}),I=qm(e,i),D=(N,U)=>Number.isFinite(N)?N:U,O=D(Math.max(...((d=(u=e.srcSet)===null||u===void 0?void 0:u.map(N=>N.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((y=P.current)===null||y===void 0?void 0:y.naturalWidth)||0),F=D(Math.max(...((h=(g=e.srcSet)===null||g===void 0?void 0:g.map(N=>N.height))!==null&&h!==void 0?h:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((x=P.current)===null||x===void 0?void 0:x.naturalHeight)||0),L=O&&F?{maxWidth:`min(${O}px, 100%)`,maxHeight:`min(${F}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},A=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((N,U)=>N.width-U.width).map(N=>`${N.src} ${N.width}w`).join(", "),R=()=>r&&!I&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,T=A&&r&&Hm()?`${Math.round(Math.min(R(),r.width))}px`:void 0,{style:j,className:z,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:_,onLoad:$,onError:M,onClick:a,draggable:!1,className:$n(ae(Kd()),I&&ae(Kd("cover")),m!==Yd&&ae(Kd("loading")),z),style:{...L,...c,...j},...B,alt:(p=e.alt)!==null&&p!==void 0?p:"",sizes:T,srcSet:A,src:e.src}),m!==Yd&&b.createElement("div",{className:ae(Xd(lL))},m===Gd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(NL,{className:$n(ae(Vp),ae(Xd(Gd)))})),m===qd&&(n!=null&&n.iconError?n.iconError():b.createElement(BL,{className:$n(ae(Vp),ae(Xd(qd)))}))))}const HL=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=eC();return b.createElement(OL,{nodeRef:l},b.createElement("div",{ref:Hp(a,l),className:$n(ae("root"),t),...s(r,i),...o},n))});var st;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(st||(st={}));function lC(e,t,n,r,i){b.useEffect(()=>i?()=>{}:Wm(e(V2,t),e(U2,n),e(W2,r),e(H2,r),e(G2,r)),[e,t,n,r,i])}var on;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(on||(on={}));const Qd=30;function GL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,c,u,d,y,g,h,x,w){const p=b.useRef(0),m=b.useRef([]),v=b.useRef(void 0),S=b.useRef(0),E=b.useRef(on.NONE),P=b.useCallback(O=>{v.current===O.pointerId&&(v.current=void 0,E.current=on.NONE);const F=m.current;F.splice(0,F.length,...F.filter(L=>L.pointerId!==O.pointerId))},[]),k=b.useCallback(O=>{P(O),O.persist(),m.current.push(O)},[P]),_=b.useCallback(O=>m.current.find(({pointerId:F})=>O.pointerId===F),[]),$=he(O=>{k(O)}),M=(O,F)=>d&&O>F||u&&O<-F,I=he(O=>{const F=_(O);if(F)if(v.current===O.pointerId){const L=Date.now()-S.current,A=p.current;E.current===on.SWIPE?Math.abs(A)>.3*i||Math.abs(A)>5&&L<o?s(A,L):c(A):E.current===on.PULL&&(M(A,2*Qd)?h(A,L):x(A)),p.current=0,E.current=on.NONE}else{const{target:L}=O;t&&L instanceof HTMLElement&&L===F.target&&(L.classList.contains(ae(Nm))||L.classList.contains(ae(B2)))&&w()}P(O)}),D=he(O=>{const F=_(O);if(F){const L=v.current===O.pointerId;if(O.buttons===0){L&&p.current!==0?I(O):P(F);return}const A=O.clientX-F.clientX,R=O.clientY-F.clientY;if(v.current===void 0){const T=j=>{k(O),v.current=O.pointerId,S.current=Date.now(),E.current=j};Math.abs(A)>Math.abs(R)&&Math.abs(A)>Qd&&r(A)?e||(T(on.SWIPE),a()):Math.abs(R)>Math.abs(A)&&M(R,Qd)&&(T(on.PULL),y())}else L&&(E.current===on.SWIPE?(p.current=A,l(A)):E.current===on.PULL&&(p.current=R,g(R)))}});lC(n,$,D,I)}function qL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=he(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function YL(e,t,n,r,i,o,a,l,s){const c=b.useRef(0),u=b.useRef(0),d=b.useRef(void 0),y=b.useRef(void 0),g=b.useRef(0),h=b.useRef(void 0),x=b.useRef(0),{setTimeout:w,clearTimeout:p}=Ou(),m=b.useCallback(()=>{d.current&&(p(d.current),d.current=void 0)},[p]),v=b.useCallback(()=>{y.current&&(p(y.current),y.current=void 0)},[p]),S=he(()=>{e!==st.SWIPE&&(c.current=0,x.current=0,m(),v())});b.useEffect(S,[e,S]);const E=he(k=>{y.current=void 0,c.current===k&&s(c.current)}),P=he(k=>{if(k.ctrlKey||Math.abs(k.deltaY)>Math.abs(k.deltaX))return;const _=$=>{g.current=$,p(h.current),h.current=$>0?w(()=>{g.current=0,h.current=void 0},300):void 0};if(e===st.NONE){if(Math.abs(k.deltaX)<=1.2*Math.abs(g.current)){_(k.deltaX);return}if(!n(-k.deltaX))return;if(u.current+=k.deltaX,m(),Math.abs(u.current)>30)u.current=0,_(0),x.current=Date.now(),o();else{const $=u.current;d.current=w(()=>{d.current=void 0,$===u.current&&(u.current=0)},i)}}else if(e===st.SWIPE){let $=c.current-k.deltaX;if($=Math.min(Math.abs($),r)*Math.sign($),c.current=$,a($),v(),Math.abs($)>.2*r){_(k.deltaX),l($,Date.now()-x.current);return}y.current=w(()=>E($),2*i)}else _(k.deltaX)});b.useEffect(()=>t(Vm,P),[t,P])}const c1=Um("container"),cC=b.createContext(null),ir=rr("useController","ControllerContext",cC);function XL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:c,closeOnPullDown:u,preventDefaultWheelX:d,preventDefaultWheelY:y}=o,[g,h]=b.useState(),x=Dr(),w=ML(),[p,m]=b.useState(st.NONE),v=b.useRef(0),S=b.useRef(0),E=b.useRef(1),{registerSensors:P,subscribeSensors:k}=WL(),{subscribe:_,publish:$}=Pu(),M=dl(),I=dl(),D=dl(),{containerRef:O,setContainerRef:F,containerRect:L}=sC(),A=Hp(qL({preventDefaultWheelX:d,preventDefaultWheelY:y}),F),R=b.useRef(null),T=Hp(R,void 0),{getOwnerDocument:j}=Tu(),z=Qm(),B=q=>(z?-1:1)*(typeof q=="number"?q:1),N=he(()=>{var q;return(q=O.current)===null||q===void 0?void 0:q.focus()}),U=he(()=>t),G=he(()=>x),W=b.useCallback(q=>$(Br,q),[$]),Y=b.useCallback(q=>$(Vr,q),[$]),ee=b.useCallback(()=>$(lo),[$]),pe=q=>!(r.finite&&(B(q)>0&&x.currentIndex===0||B(q)<0&&x.currentIndex===x.slides.length-1)),we=q=>{var Se;v.current=q,(Se=O.current)===null||Se===void 0||Se.style.setProperty(Ct("swipe_offset"),`${Math.round(q)}px`)},ie=q=>{var Se,dt;S.current=q,E.current=(()=>{const Eo=(()=>u&&q>0?q:c&&q<0?-q:0)();return Math.min(Math.max(Gm(1-Eo/60*(1-.5),2),.5),1)})(),(Se=O.current)===null||Se===void 0||Se.style.setProperty(Ct("pull_offset"),`${Math.round(q)}px`),(dt=O.current)===null||dt===void 0||dt.style.setProperty(Ct("pull_opacity"),`${E.current}`)},{prepareAnimation:Ie}=a1(R,(q,Se,dt)=>{if(R.current&&L)return{keyframes:[{transform:`translate(0, ${q.rect.y-Se.y+dt.y}px)`,opacity:q.opacity},{transform:"translate(0, 0)",opacity:1}],duration:q.duration,easing:i.easing.fade}}),We=(q,Se)=>{if(c||u){ie(q);let dt=0;R.current&&(dt=i.fade*(Se?2:1),Ie({rect:R.current.getBoundingClientRect(),opacity:E.current,duration:dt})),D(()=>{ie(0),m(st.NONE)},dt),m(st.ANIMATION),Se||ee()}},{prepareAnimation:He,isAnimationPlaying:pi}=a1(R,(q,Se,dt)=>{var yn;if(R.current&&L&&(!((yn=x.animation)===null||yn===void 0)&&yn.duration)){const Gt=lc(r.spacing),Eo=(Gt.percent?Gt.percent*L.width/100:Gt.pixel)||0;return{keyframes:[{transform:`translate(${B(x.globalIndex-q.index)*(L.width+Eo)+q.rect.x-Se.x+dt.x}px, 0)`},{transform:"translate(0, 0)"}],duration:x.animation.duration,easing:x.animation.easing}}}),wt=he(q=>{var Se,dt;const yn=q.offset||0,Gt=yn?i.swipe:(Se=i.navigation)!==null&&Se!==void 0?Se:i.swipe,Eo=!yn&&!pi()?i.easing.navigation:i.easing.swipe;let{direction:os}=q;const as=(dt=q.count)!==null&&dt!==void 0?dt:1;let Nu=st.ANIMATION,xn=Gt*as;if(!os){const ko=L==null?void 0:L.width,pg=q.duration||0,Vu=ko?Gt/ko*Math.abs(yn):Gt;as!==0?(pg<Vu?xn=xn/Vu*Math.max(pg,Vu/5):ko&&(xn=Gt/ko*(ko-Math.abs(yn))),os=B(yn)>0?Br:Vr):xn=Gt/2}let Bu=0;os===Br?pe(B(1))?Bu=-as:(Nu=st.NONE,xn=Gt):os===Vr&&(pe(B(-1))?Bu=as:(Nu=st.NONE,xn=Gt)),xn=Math.round(xn),I(()=>{we(0),m(st.NONE)},xn),R.current&&He({rect:R.current.getBoundingClientRect(),index:x.globalIndex}),m(Nu),$(i1,{type:"swipe",increment:Bu,duration:xn,easing:Eo})});b.useEffect(()=>{var q,Se;!((q=x.animation)===null||q===void 0)&&q.increment&&(!((Se=x.animation)===null||Se===void 0)&&Se.duration)&&M(()=>w({type:"swipe",increment:0}),x.animation.duration)},[x.animation,w,M]);const Co=[k,pe,(L==null?void 0:L.width)||0,i.swipe,()=>m(st.SWIPE),q=>we(q),(q,Se)=>wt({offset:q,duration:Se,count:1}),q=>wt({offset:q,count:0})],is=[()=>{u&&m(st.PULL)},q=>ie(q),q=>We(q),q=>We(q,!0)];GL(o,...Co,c,u,...is,ee),YL(p,...Co);const _o=he(()=>{o.focus&&j().querySelector(`.${ae(Fm)} .${ae(c1())}`)&&N()});b.useEffect(_o,[_o]);const fg=he(()=>{var q;(q=a.view)===null||q===void 0||q.call(a,{index:x.currentIndex})});b.useEffect(fg,[x.globalIndex,fg]),b.useEffect(()=>Wm(_(Br,q=>wt({direction:Br,...q})),_(Vr,q=>wt({direction:Vr,...q})),_(i1,q=>w(q))),[_,wt,w]);const p_=b.useMemo(()=>({prev:W,next:Y,close:ee,focus:N,slideRect:L?xL(L,r.padding):{width:0,height:0},containerRect:L||{width:0,height:0},subscribeSensors:k,containerRef:O,setCarouselRef:T,toolbarWidth:g,setToolbarWidth:h}),[W,Y,ee,N,k,L,O,T,g,h,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:W,next:Y,close:ee,focus:N,getLightboxProps:U,getLightboxState:G}),[W,Y,ee,N,U,G]),b.createElement("div",{ref:A,className:$n(ae(c1()),ae(zm)),style:{...p===st.SWIPE?{[Ct("swipe_offset")]:`${Math.round(v.current)}px`}:null,...p===st.PULL?{[Ct("pull_offset")]:`${Math.round(S.current)}px`,[Ct("pull_opacity")]:`${E.current}`}:null,...o.touchAction!=="none"?{[Ct("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...P},L&&b.createElement(cC.Provider,{value:p_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const KL=Ir(F2,XL);function Lr(e){return rs(R2,e)}function u1(e){return rs(Nm,e)}function QL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Dr(),{slideRect:o,focus:a}=ir(),{render:l,carousel:{imageFit:s,imageProps:c},on:{click:u},styles:{slide:d},labels:y}=en(),{getOwnerDocument:g}=Tu(),h=t!==0;b.useEffect(()=>{var w;h&&(!((w=n.current)===null||w===void 0)&&w.contains(g().activeElement))&&a()},[h,a,g]);const x=()=>{var w,p,m,v;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&So(e)&&(S=b.createElement(cc,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:c,onClick:h?void 0:()=>u==null?void 0:u({index:r})})),S?b.createElement(b.Fragment,null,(p=l.slideHeader)===null||p===void 0?void 0:p.call(l,{slide:e}),((m=l.slideContainer)!==null&&m!==void 0?m:({children:E})=>E)({slide:e,children:S}),(v=l.slideFooter)===null||v===void 0?void 0:v.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:$n(ae(u1()),!h&&ae(u1("current")),ae(zm)),...EL(h),style:d,role:"group","aria-roledescription":co(y,"Slide"),"aria-label":yL(y,i,r+t)},x())}function ZL(){const e=en().styles.slide;return b.createElement("div",{className:ae(Nm),style:e})}function JL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Dr(),{setCarouselRef:o}=ir(),{autoPlaying:a,focusWithin:l}=eC(),s=lc(e.spacing),c=lc(e.padding),u=CL(e,n,1),d=[];if(K2(n))for(let y=r-u;y<=r+u;y+=1){const g=Q2(n,y),h=i-r+y,x=e.finite&&(y<0||y>n.length-1);d.push(x?{key:h}:{key:[`${h}`,wL(g)].filter(Boolean).join("|"),offset:y-r,slide:g})}return b.createElement("div",{ref:o,className:$n(ae(Lr()),d.length>0&&ae(Lr("with_slides"))),style:{[`${Ct(Lr("slides_count"))}`]:d.length,[`${Ct(Lr("spacing_px"))}`]:s.pixel||0,[`${Ct(Lr("spacing_percent"))}`]:s.percent||0,[`${Ct(Lr("padding_px"))}`]:c.pixel||0,[`${Ct(Lr("padding_percent"))}`]:c.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":co(t,"Carousel"),"aria-label":co(t,"Photo gallery")},d.map(({key:y,slide:g,offset:h})=>g?b.createElement(QL,{key:y,slide:g,offset:h}):b.createElement(ZL,{key:y})))}const eA=Ir(R2,JL);function uC(){const{carousel:e}=en(),{slides:t,currentIndex:n}=Dr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function tA(e){var t;const n=Qm(),{publish:r}=Pu(),{animation:i}=en(),{prevDisabled:o,nextDisabled:a}=uC(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=l1(()=>r(Br),l),c=l1(()=>r(Vr),l),u=he(d=>{switch(d.key){case hL:r(lo);break;case mL:(n?a:o)||(n?c:s)();break;case gL:(n?o:a)||(n?s:c)();break}});b.useEffect(()=>e(Bm,u),[e,u])}function d1({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(Xm,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...UL(ir().focus,o)})}function nA({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=ir(),{prevDisabled:s,nextDisabled:c}=uC();return tA(l),b.createElement(b.Fragment,null,e?e():b.createElement(d1,{label:"Previous",action:Br,icon:FL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(d1,{label:"Next",action:Vr,icon:zL,renderIcon:r,style:i.navigationNext,disabled:c,onClick:a}))}const rA=Ir(oL,nA),f1=ae(dL),iA=ae(N2);function oA(e){return"style"in e}function p1(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(ku(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function aA({noScroll:{disabled:e},children:t}){const n=Qm(),{getOwnerDocument:r,getOwnerWindow:i}=Tu();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),c=Math.round(a.innerWidth-s.clientWidth);if(c>0){o.push(p1(l,c,n));const u=l.getElementsByTagName("*");for(let d=0;d<u.length;d+=1){const y=u[d];oA(y)&&a.getComputedStyle(y).getPropertyValue("position")==="fixed"&&!y.classList.contains(iA)&&o.push(p1(y,c,n))}}return l.classList.add(f1),()=>{l.classList.remove(f1),o.forEach(u=>u())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const sA=Ir(aL,aA);function h1(e){return rs(Fm,e)}function m1(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function lA({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,c]=b.useState(!1),[u,d]=b.useState(!1),y=b.useRef([]),g=b.useRef(null),{setTimeout:h}=Ou(),{subscribe:x}=Pu(),p=Km()?0:t.fade;b.useEffect(()=>(c(!0),()=>{c(!1),d(!1)}),[]);const m=he(()=>{y.current.forEach(P=>P()),y.current=[]}),v=he(()=>{var P;d(!1),m(),(P=i.exiting)===null||P===void 0||P.call(i),h(()=>{var k;(k=i.exited)===null||k===void 0||k.call(i),a()},p)});b.useEffect(()=>x(lo,v),[x,v]);const S=he(P=>{var k,_,$;kL(P),d(!0),(k=i.entering)===null||k===void 0||k.call(i);const M=($=(_=P.parentNode)===null||_===void 0?void 0:_.children)!==null&&$!==void 0?$:[];for(let I=0;I<M.length;I+=1){const D=M[I];["TEMPLATE","SCRIPT","STYLE"].indexOf(D.tagName)===-1&&D!==P&&(y.current.push(m1(D,"inert","")),y.current.push(m1(D,"aria-hidden","true")))}y.current.push(()=>{var I,D;(D=(I=g.current)===null||I===void 0?void 0:I.focus)===null||D===void 0||D.call(I)}),h(()=>{var I;(I=i.entered)===null||I===void 0||I.call(i)},p)}),E=b.useCallback(P=>{P?S(P):m()},[S,m]);return s?Lc.createPortal(b.createElement(HL,{ref:E,className:$n(r,ae(h1()),ae(N2),u&&ae(h1("open"))),"aria-modal":!0,role:"dialog","aria-label":co(l,"Lightbox"),style:{...t.fade!==Wp.animation.fade?{[Ct("fade_animation_duration")]:`${p}ms`}:null,...t.easing.fade!==Wp.animation.easing.fade?{[Ct("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:P=>{g.current||(g.current=P.relatedTarget)}},e),o.root||document.body):null}const cA=Ir(Fm,lA);function uA({children:e}){return b.createElement(b.Fragment,null,e)}const dA=Ir(sL,uA);function fA(e){return rs(z2,e)}function pA({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=ir(),{setContainerRef:a,containerRect:l}=sC();Mn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(Xm,{key:lo,label:"Close",icon:RL,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:ae(fA())},e==null?void 0:e.map(c=>c===lo?s():c))}const hA=Ir(z2,pA);function dC(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>dC(r,t)))}function mA(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function gA({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:c,...u}){const{animation:d,carousel:y,render:g,toolbar:h,controller:x,noScroll:w,on:p,slides:m,index:v,plugins:S,...E}=Wp,{config:P,augmentation:k}=TL([Ge(cA,[Ge(sA,[Ge(KL,[Ge(eA),Ge(hA),Ge(rA)])])])],l||S),_=k({animation:mA(d,t),carousel:{...y,...e},render:{...g,...n},toolbar:{...h,...r},controller:{...x,...i},noScroll:{...w,...o},on:{...p,...a},...E,...u});return _.open?b.createElement($L,{..._},b.createElement(DL,{slides:s||m,index:ku(c||v)},b.createElement(LL,null,b.createElement(jL,null,b.createElement(PL,null,dC(Ge(dA,P),_)))))):null}const vA={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function yA(e){return Math.min(Math.max(e,Number.EPSILON),1)}function fC(e){const{minZoom:t,...n}={...vA,...e};return{minZoom:yA(t),...n}}function xA(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=en().animation,l=Km(),s=he(()=>{var c,u,d;if((c=i.current)===null||c===void 0||c.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(u=r.current).animate)===null||d===void 0?void 0:d.call(u,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(y){console.error(y)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Mn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function bA(e,t){const{on:n}=en(),r=he(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function ju(){const{zoom:e}=en();return fC(e)}function wA(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Dr(),{imageFit:l}=en().carousel,{maxZoomPixelRatio:s}=ju();if(e&&a){const u={...a,...t};if(So(u)){const d=qm(u,l),y=Math.max(...(((n=u.srcSet)===null||n===void 0?void 0:n.map(h=>h.width))||[]).concat(u.width?[u.width]:[])),g=Math.max(...(((r=u.srcSet)===null||r===void 0?void 0:r.map(h=>h.height))||[]).concat(u.height?[u.height]:[]));y>0&&g>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(y,e.width/e.height*g)),height:Math.round(Math.min(g,e.height/e.width*y))}:{width:y,height:g},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,y),height:Math.min(e.height,o.height,g)}:{width:Math.round(Math.min(e.width,e.height/g*y,y)),height:Math.round(Math.min(e.height,e.width/y*g,g))})}}const c=i.width?Math.max(Gm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:c}}function g1(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function v1(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function SA(e,t,n,r,i,o,a,l,s){const c=b.useRef([]),u=b.useRef(0),d=b.useRef(void 0),{globalIndex:y}=Dr(),{getOwnerWindow:g}=Tu(),{containerRef:h,subscribeSensors:x}=ir(),{keyboardMoveDistance:w,zoomInMultiplier:p,wheelZoomDistanceFactor:m,scrollToZoom:v,doubleTapDelay:S,doubleClickDelay:E,doubleClickMaxStops:P,pinchZoomDistanceFactor:k,pinchZoomV4:_}=ju(),$=b.useCallback(T=>{if(h.current){const{pageX:j,pageY:z}=T,{scrollX:B,scrollY:N}=g(),{left:U,top:G,width:W,height:Y}=h.current.getBoundingClientRect();return[j-U-B-W/2,z-G-N-Y/2]}return[]},[h,g]),M=he(T=>{const{key:j,metaKey:z,ctrlKey:B}=T,N=z||B,U=()=>{T.preventDefault(),T.stopPropagation()};if(e>1){const G=(W,Y)=>{U(),l(W,Y)};j==="ArrowDown"?G(0,w):j==="ArrowUp"?G(0,-w):j==="ArrowLeft"?G(-w,0):j==="ArrowRight"&&G(w,0)}j==="+"||N&&j==="="?(U(),i()):j==="-"||N&&j==="_"?(U(),o()):N&&j==="0"&&(U(),a(1))}),I=he(T=>{if((T.ctrlKey||v)&&Math.abs(T.deltaY)>Math.abs(T.deltaX)){T.stopPropagation(),a(v1(e,-T.deltaY,m),!0,...$(T));return}e>1&&(T.stopPropagation(),v||l(T.deltaX,T.deltaY))}),D=b.useCallback(T=>{const j=c.current;j.splice(0,j.length,...j.filter(z=>z.pointerId!==T.pointerId))},[]),O=b.useCallback(T=>{D(T),T.persist(),c.current.push(T)},[D]),F=he(T=>{var j;const z=c.current;if(T.pointerType==="mouse"&&T.buttons>1||!(!((j=s==null?void 0:s.current)===null||j===void 0)&&j.contains(T.target)))return;e>1&&T.stopPropagation();const{timeStamp:B}=T;if(z.length===0&&B-u.current<(T.pointerType==="touch"?S:E)){u.current=0;const N=e>=1?e!==n?e*Math.max(n**(1/P),p):1:e!==t?e/Math.max(t**(-1/P),p):1;a(N,!1,...$(T))}else u.current=B;if(O(T),z.length===2){const N=g1(z[0],z[1]);d.current={previousDistance:N,initialDistance:Math.max(N,1),initialZoom:e}}}),L=he(T=>{const j=c.current,z=j.find(B=>B.pointerId===T.pointerId);if(j.length===2&&d.current){T.stopPropagation(),O(T);const B=g1(j[0],j[1]),N=_?d.current.initialZoom/d.current.initialDistance*B:v1(e,B-d.current.previousDistance,k);a(N,!0,...j.map(U=>$(U)).reduce((U,G)=>G.map((W,Y)=>U[Y]+W/2))),d.current.previousDistance=B;return}e>1&&(T.stopPropagation(),z&&(j.length===1&&l((z.clientX-T.clientX)/e,(z.clientY-T.clientY)/e),O(T)))}),A=b.useCallback(T=>{const j=c.current;j.length===2&&j.find(z=>z.pointerId===T.pointerId)&&(d.current=void 0),D(T)},[D]),R=b.useCallback(()=>{const T=c.current;T.splice(0,T.length),u.current=0,d.current=void 0},[]);lC(x,F,L,A,r),b.useEffect(R,[y,R]),b.useEffect(()=>r?()=>{}:Wm(R,x(Bm,M),x(Vm,I)),[r,x,R,M,I])}function CA(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),c=xA(r,o,l,n),{currentSlide:u,globalIndex:d}=Dr(),{containerRect:y,slideRect:g}=ir(),{minZoom:h,zoomInMultiplier:x}=ju(),w=u&&So(u)?u.src:void 0,p=!w||!(n!=null&&n.current);Mn(()=>{i(1),a(0),s(0)},[d,w]);const m=b.useCallback((k,_,$)=>{const M=$||r,I=o-(k||0),D=l-(_||0),O=(e.width*M-g.width)/2/M,F=(e.height*M-g.height)/2/M;a(Math.min(Math.abs(I),Math.max(O,0))*Math.sign(I)),s(Math.min(Math.abs(D),Math.max(F,0))*Math.sign(D))},[r,o,l,g,e.width,e.height]),v=b.useCallback((k,_,$,M)=>{const I=Gm(k+.01<t?k-.01>h?k:h:t,5);_||c(),m($?$*(1/r-1/I):0,M?M*(1/r-1/I):0,I),i(I)},[r,h,t,m,c]),S=he(()=>{r>1&&(r>t&&v(t,!0),m())});Mn(S,[y.width,y.height,S]);const E=b.useCallback(()=>{const k=r*x;v(r<1&&k>1?1:k)},[r,x,v]),P=b.useCallback(()=>{const k=r/x;v(r>1&&k<1?1:k)},[r,x,v]);return{zoom:r,offsetX:o,offsetY:l,disabled:p,changeOffsets:m,changeZoom:v,zoomIn:E,zoomOut:P}}const pC=b.createContext(null),Zm=rr("useZoom","ZoomControllerContext",pC);function _A({children:e}){const[t,n]=b.useState(),{slideRect:r}=ir(),{ref:i,minZoom:o}=ju(),{imageRect:a,maxZoom:l}=wA(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:c,offsetY:u,disabled:d,changeZoom:y,changeOffsets:g,zoomIn:h,zoomOut:x}=CA(a,l,t==null?void 0:t.zoomWrapperRef);bA(s,d),SA(s,o,l,d,h,x,y,g,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:c,offsetY:u,disabled:d,zoomIn:h,zoomOut:x,changeZoom:y}),[s,o,l,c,u,d,h,x,y]);b.useImperativeHandle(i,()=>w,[w]);const p=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(pC.Provider,{value:p},e)}const EA=fi("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),kA=fi("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),y1=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:c,zoomOut:u,disabled:d}=Zm(),{render:y}=en(),g=d||(t?a>=s:a<=l);return b.useEffect(()=>{g&&i.current&&o.current&&n(),g||(i.current=!0)},[g,n]),b.createElement(Xm,{ref:r,disabled:g,label:t?"Zoom in":"Zoom out",icon:t?EA:kA,renderIcon:t?y.iconZoomIn:y.iconZoomOut,onClick:t?c:u,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function TA(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=ir(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(y1,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(y1,{ref:t,onLoseFocus:i}))}function PA(){const{render:e}=en(),t=Zm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(TA,null)}function OA(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function jA({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(Y2)}}function $A(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(jA,{}),{slide:a,rect:l,imageFit:s,render:c,interactive:u}=e,d=a.srcSet.sort((E,P)=>E.width-P.width),y=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,g=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,h=qm(a,s),x=Math.max(...d.map(E=>E.width)),w=Math.min((h?Math.max:Math.min)(l.width,y*(l.height/g)),x),p=bL(),m=he(()=>{var E;const P=(E=d.find(k=>k.width>=w*p))!==null&&E!==void 0?E:d[d.length-1];(!r||d.findIndex(k=>k.src===r)<d.findIndex(k=>k===P))&&o({type:"fetch",source:P.src})});Mn(m,[l.width,l.height,p,m]);const v=he(E=>o({type:"done",source:E})),S={WebkitTransform:u?"initial":"translateZ(0)"};return h||Object.assign(S,l.width/l.height<y/g?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(cc,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>v(i),render:{...c,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(cc,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function MA({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:c,offsetX:u,offsetY:d,setZoomWrapper:y}=Zm(),g=s>1,{carousel:h,on:x}=en(),{currentIndex:w}=Dr();Mn(()=>n===0?(y({zoomWrapperRef:l,imageDimensions:o}),()=>y(void 0)):()=>{},[n,o,y]);let p=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:c});if(!p&&So(t)){const m={slide:t,offset:n,rect:r,render:e,imageFit:h.imageFit,imageProps:h.imageProps,onClick:n===0?()=>{var v;return(v=x.click)===null||v===void 0?void 0:v.call(x,{index:w})}:void 0};p=OA(t)?b.createElement($A,{...m,slide:t,interactive:g,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(cc,{onLoad:v=>a({width:v.naturalWidth,height:v.naturalHeight}),...m})}return p?b.createElement("div",{ref:l,className:$n(ae(uL),ae(zm),ae(B2),g&&ae(fL)),style:n===0?{transform:`scale(${s}) translateX(${u}px) translateY(${d}px)`}:void 0},p):null}const IA=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=fC(n);return{zoom:l,toolbar:SL(r,r1,b.createElement(PA,null)),render:{...i,slide:s=>{var c;return So(s.slide)?b.createElement(MA,{render:i,...s}):(c=i.slide)===null||c===void 0?void 0:c.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Ir(r1,_A))};var hC={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",c="day",u="week",d="month",y="quarter",g="year",h="date",x="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var L=["th","st","nd","rd"],A=F%100;return"["+F+(L[(A-20)%10]||L[A]||L[0])+"]"}},v=function(F,L,A){var R=String(F);return!R||R.length>=L?F:""+Array(L+1-R.length).join(A)+F},S={s:v,z:function(F){var L=-F.utcOffset(),A=Math.abs(L),R=Math.floor(A/60),T=A%60;return(L<=0?"+":"-")+v(R,2,"0")+":"+v(T,2,"0")},m:function F(L,A){if(L.date()<A.date())return-F(A,L);var R=12*(A.year()-L.year())+(A.month()-L.month()),T=L.clone().add(R,d),j=A-T<0,z=L.clone().add(R+(j?-1:1),d);return+(-(R+(A-T)/(j?T-z:z-T))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:d,y:g,w:u,d:c,D:h,h:s,m:l,s:a,ms:o,Q:y}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},E="en",P={};P[E]=m;var k="$isDayjsObject",_=function(F){return F instanceof D||!(!F||!F[k])},$=function F(L,A,R){var T;if(!L)return E;if(typeof L=="string"){var j=L.toLowerCase();P[j]&&(T=j),A&&(P[j]=A,T=j);var z=L.split("-");if(!T&&z.length>1)return F(z[0])}else{var B=L.name;P[B]=L,T=B}return!R&&T&&(E=T),T||!R&&E},M=function(F,L){if(_(F))return F.clone();var A=typeof L=="object"?L:{};return A.date=F,A.args=arguments,new D(A)},I=S;I.l=$,I.i=_,I.w=function(F,L){return M(F,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var D=function(){function F(A){this.$L=$(A.locale,null,!0),this.parse(A),this.$x=this.$x||A.x||{},this[k]=!0}var L=F.prototype;return L.parse=function(A){this.$d=function(R){var T=R.date,j=R.utc;if(T===null)return new Date(NaN);if(I.u(T))return new Date;if(T instanceof Date)return new Date(T);if(typeof T=="string"&&!/Z$/i.test(T)){var z=T.match(w);if(z){var B=z[2]-1||0,N=(z[7]||"0").substring(0,3);return j?new Date(Date.UTC(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)):new Date(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)}}return new Date(T)}(A),this.init()},L.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},L.$utils=function(){return I},L.isValid=function(){return this.$d.toString()!==x},L.isSame=function(A,R){var T=M(A);return this.startOf(R)<=T&&T<=this.endOf(R)},L.isAfter=function(A,R){return M(A)<this.startOf(R)},L.isBefore=function(A,R){return this.endOf(R)<M(A)},L.$g=function(A,R,T){return I.u(A)?this[R]:this.set(T,A)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(A,R){var T=this,j=!!I.u(R)||R,z=I.p(A),B=function(we,ie){var Ie=I.w(T.$u?Date.UTC(T.$y,ie,we):new Date(T.$y,ie,we),T);return j?Ie:Ie.endOf(c)},N=function(we,ie){return I.w(T.toDate()[we].apply(T.toDate("s"),(j?[0,0,0,0]:[23,59,59,999]).slice(ie)),T)},U=this.$W,G=this.$M,W=this.$D,Y="set"+(this.$u?"UTC":"");switch(z){case g:return j?B(1,0):B(31,11);case d:return j?B(1,G):B(0,G+1);case u:var ee=this.$locale().weekStart||0,pe=(U<ee?U+7:U)-ee;return B(j?W-pe:W+(6-pe),G);case c:case h:return N(Y+"Hours",0);case s:return N(Y+"Minutes",1);case l:return N(Y+"Seconds",2);case a:return N(Y+"Milliseconds",3);default:return this.clone()}},L.endOf=function(A){return this.startOf(A,!1)},L.$set=function(A,R){var T,j=I.p(A),z="set"+(this.$u?"UTC":""),B=(T={},T[c]=z+"Date",T[h]=z+"Date",T[d]=z+"Month",T[g]=z+"FullYear",T[s]=z+"Hours",T[l]=z+"Minutes",T[a]=z+"Seconds",T[o]=z+"Milliseconds",T)[j],N=j===c?this.$D+(R-this.$W):R;if(j===d||j===g){var U=this.clone().set(h,1);U.$d[B](N),U.init(),this.$d=U.set(h,Math.min(this.$D,U.daysInMonth())).$d}else B&&this.$d[B](N);return this.init(),this},L.set=function(A,R){return this.clone().$set(A,R)},L.get=function(A){return this[I.p(A)]()},L.add=function(A,R){var T,j=this;A=Number(A);var z=I.p(R),B=function(G){var W=M(j);return I.w(W.date(W.date()+Math.round(G*A)),j)};if(z===d)return this.set(d,this.$M+A);if(z===g)return this.set(g,this.$y+A);if(z===c)return B(1);if(z===u)return B(7);var N=(T={},T[l]=r,T[s]=i,T[a]=n,T)[z]||1,U=this.$d.getTime()+A*N;return I.w(U,this)},L.subtract=function(A,R){return this.add(-1*A,R)},L.format=function(A){var R=this,T=this.$locale();if(!this.isValid())return T.invalidDate||x;var j=A||"YYYY-MM-DDTHH:mm:ssZ",z=I.z(this),B=this.$H,N=this.$m,U=this.$M,G=T.weekdays,W=T.months,Y=T.meridiem,ee=function(ie,Ie,We,He){return ie&&(ie[Ie]||ie(R,j))||We[Ie].slice(0,He)},pe=function(ie){return I.s(B%12||12,ie,"0")},we=Y||function(ie,Ie,We){var He=ie<12?"AM":"PM";return We?He.toLowerCase():He};return j.replace(p,function(ie,Ie){return Ie||function(We){switch(We){case"YY":return String(R.$y).slice(-2);case"YYYY":return I.s(R.$y,4,"0");case"M":return U+1;case"MM":return I.s(U+1,2,"0");case"MMM":return ee(T.monthsShort,U,W,3);case"MMMM":return ee(W,U);case"D":return R.$D;case"DD":return I.s(R.$D,2,"0");case"d":return String(R.$W);case"dd":return ee(T.weekdaysMin,R.$W,G,2);case"ddd":return ee(T.weekdaysShort,R.$W,G,3);case"dddd":return G[R.$W];case"H":return String(B);case"HH":return I.s(B,2,"0");case"h":return pe(1);case"hh":return pe(2);case"a":return we(B,N,!0);case"A":return we(B,N,!1);case"m":return String(N);case"mm":return I.s(N,2,"0");case"s":return String(R.$s);case"ss":return I.s(R.$s,2,"0");case"SSS":return I.s(R.$ms,3,"0");case"Z":return z}return null}(ie)||z.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(A,R,T){var j,z=this,B=I.p(R),N=M(A),U=(N.utcOffset()-this.utcOffset())*r,G=this-N,W=function(){return I.m(z,N)};switch(B){case g:j=W()/12;break;case d:j=W();break;case y:j=W()/3;break;case u:j=(G-U)/6048e5;break;case c:j=(G-U)/864e5;break;case s:j=G/i;break;case l:j=G/r;break;case a:j=G/n;break;default:j=G}return T?j:I.a(j)},L.daysInMonth=function(){return this.endOf(d).$D},L.$locale=function(){return P[this.$L]},L.locale=function(A,R){if(!A)return this.$L;var T=this.clone(),j=$(A,R,!0);return j&&(T.$L=j),T},L.clone=function(){return I.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},F}(),O=D.prototype;return M.prototype=O,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",c],["$M",d],["$y",g],["$D",h]].forEach(function(F){O[F[1]]=function(L){return this.$g(L,F[0],F[1])}}),M.extend=function(F,L){return F.$i||(F(L,D,M),F.$i=!0),M},M.locale=$,M.isDayjs=_,M.unix=function(F){return M(1e3*F)},M.en=P[E],M.Ls=P,M.p={},M})})(hC);var DA=hC.exports;const x1=Ba(DA),LA=C.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;C.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const AA=C.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,RA=C.input`
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
`,FA=C.textarea`
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
`,zA=C.button`
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
`,NA=C.div`
  margin-top: 30px;
`,BA=C.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,VA=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,UA=C.span`
  font-weight: bold;
  color: #333;
`,WA=C.span`
  font-size: 12px;
  color: #999;
`,HA=C.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,GA=C.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,qA=C.div`
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
`,b1=({productId:e,questions:t})=>{const[n,r]=b.useState(""),[i,o]=b.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(X.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return f.jsxs(LA,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(AA,{onSubmit:a,children:[f.jsx(RA,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),f.jsx(FA,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),f.jsx(zA,{children:"Надіслати запитання"})]}),f.jsx(NA,{children:t&&t.length>0?t.map(l=>l.answer?f.jsxs(BA,{children:[f.jsxs(VA,{children:[f.jsx(UA,{children:l.userName||"Гість"}),f.jsx(WA,{children:new Date(l.createdAt).toLocaleDateString()})]}),f.jsx(HA,{children:l.question}),f.jsxs(GA,{children:[f.jsx(qA,{children:"Адміністратор"}),f.jsx("p",{children:l.answer})]})]},l.id):null):f.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},YA=()=>{var R;const{identifier:e}=Dy(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[c,u]=b.useState(!1),[d,y]=b.useState(0),[g,h]=b.useState(!0),x=!isNaN(e),w=t.find(T=>x?String(T.id)===String(e):T.slug===e),p=w?x1().diff(x1(w.createdAt),"day")<7:!1,v=(T=>{const[j,z]=b.useState(!1);return b.useEffect(()=>{const B=window.matchMedia(T),N=()=>z(B.matches);return N(),B.addEventListener("change",N),()=>B.removeEventListener("change",N)},[T]),j})("(min-width: 768px)"),S=Re(T=>T.cart.items),E=w?S.find(T=>T.id===w.id):null,P=(E==null?void 0:E.quantity)||0;b.useEffect(()=>{(async()=>{try{h(!0);const j=x?`filters[id][$eq]=${e}`:`filters[slug][$eq]=${e}`,B=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${j}&populate=*`)).json();n(B.data)}catch(j){console.error("Error fetching products:",j)}finally{h(!1)}})()},[e,x]);const k=(w==null?void 0:w.available)??!0;b.useEffect(()=>{var T,j;w&&w.images&&s((j=(T=w.images)==null?void 0:T[0])==null?void 0:j.url)},[w]);const _=((w==null?void 0:w.images)??[]).map(T=>({src:T.url})),$=()=>{const T=w.images.findIndex(j=>j.url===l);y(T>=0?T:0),u(!0)},M=Wt(),D=Re(T=>T.favorites.items).some(T=>T.id===(w==null?void 0:w.id)),O=async()=>{if(P>=w.stock){X.warning("Товар вже в кошику (досягнуто максимум)");return}if(P+r>w.stock){X.warning(`Доступно лише ${w.stock} шт.`);return}await ym(w,r,M,X)},F=(T,j)=>{j.stopPropagation(),ui(T,D,M,X)},L=(w==null?void 0:w.new_price)&&(w==null?void 0:w.new_price)<w.price,A=L?Math.round((w.price-w.new_price)/w.price*100):0;return g?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):w?f.jsxs(Xv,{children:[" ",f.jsx(Dn,{autoClose:1500}),f.jsxs(L6,{children:[f.jsx(Te,{to:"/",children:"Головна"})," / ",f.jsx(Te,{to:"/catalog",children:"Каталог"})," /"," ",w.name]}),f.jsxs(A6,{children:[f.jsxs(R6,{children:[f.jsx(F6,{src:l,alt:w.name,onClick:$}),f.jsx(z6,{children:(w.images??[]).map(T=>{const j=T.url;return f.jsx(N6,{src:j,onClick:()=>s(j),style:{cursor:"pointer",opacity:l===j?1:.4}},T.id)})})]}),f.jsx(gA,{open:c,close:()=>u(!1),index:d,slides:_,controller:{closeOnBackdropClick:!0},on:{view:({index:T})=>{var j,z;y(T),(z=(j=w==null?void 0:w.images)==null?void 0:j[T])!=null&&z.url&&s(w.images[T].url)}},plugins:[IA],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),f.jsxs(B6,{children:[f.jsx(V6,{children:w.name}),f.jsxs(U6,{children:["Артикул: ",w.sku??""]}),f.jsx(W6,{children:p&&f.jsx(G6,{children:"● Новий товар"})}),!k&&f.jsx(H6,{children:" Заброньовано"}),f.jsxs(q6,{children:[f.jsx(Y6,{children:L?f.jsxs(f.Fragment,{children:[f.jsxs(Kv,{$discount:!0,children:[w.new_price.toLocaleString()," грн"]}),f.jsxs(X6,{children:[w.price.toLocaleString()," грн"]}),f.jsxs(K6,{children:["-",A,"%"]})]}):f.jsxs(Kv,{children:[w.price.toLocaleString()," грн"]})}),f.jsxs(Q6,{children:[f.jsxs(Z6,{children:[f.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),f.jsx("span",{children:r}),f.jsxs(iL,{$active:r>=w.stock,children:[f.jsx("button",{onClick:()=>i(Math.min(w.stock,r+1)),disabled:r>=w.stock,children:"+"}),f.jsxs(A2,{children:["Максимум: ",w.stock]})]})]}),f.jsxs(J6,{onClick:O,disabled:!k,children:[" ",f.jsx(vo,{size:25}),f.jsx("span",{children:"В КОШИК"})]}),f.jsxs(nL,{$active:D,onClick:T=>F(w,T),children:[f.jsxs(rL,{$active:D,children:[" ",f.jsx("use",{href:`${hn}#icon-heart`})]}),f.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!v&&f.jsxs(Jv,{children:[f.jsxs(e1,{children:[f.jsx(No,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(No,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),f.jsx(No,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(t1,{children:[o==="description"&&f.jsx(n1,{children:w.description}),o==="attributes"&&f.jsx(Qv,{children:(R=w.attributes)!=null&&R.length?w.attributes.map(T=>f.jsxs(Zv,{children:[f.jsx("span",{children:T.label}),f.jsx("b",{children:T.value})]},T.id)):f.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&f.jsx(b1,{productId:w.documentId,questions:w.questions})]})]}),v&&f.jsxs(tL,{children:[f.jsxs(Jv,{children:[f.jsxs(e1,{children:[f.jsx(No,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(No,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(t1,{children:[o==="description"&&f.jsx(n1,{children:w.description}),o==="FAQ"&&f.jsx(b1,{productId:w.documentId,questions:w.questions})]})]}),f.jsxs(Qv,{children:[f.jsx(eL,{children:" Характеристики"}),(()=>{const T=[...w.attributes||[],...w.features||[]];return T.length?T.map((j,z)=>f.jsxs(Zv,{children:[f.jsx("span",{children:j.label}),f.jsx("b",{children:j.value})]},`${j.id}-${z}`)):f.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):f.jsx(Xv,{children:"Товар не знайдено"})},XA=C.div`
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

  
`,KA=C.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,QA=C.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,ZA=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,JA=C.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,eR=C.div`
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
`,tR=C.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,nR=C.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,rR=C.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,iR=C.div`

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
`,oR=C.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,aR=C.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,sR=C.div`

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
`,lR=C.div`
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
`,cR=C(Te)`
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
`,uR=C.button`
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
`;const dR=C.div`
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
`,fR=C.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,pR=C.div`
  background-color: #fdfaf7;
`,hR=C.div`
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
`;const mR=C.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,gR=C.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,vR=C.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,yR=C.button`
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
`,xR=()=>f.jsx(pR,{children:f.jsxs(dR,{children:[f.jsx(fR,{children:"Головна / Кошик"}),f.jsxs(hR,{children:[f.jsx(mR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),f.jsx(gR,{children:"Ваш кошик порожній"}),f.jsx(vR,{children:"Ви ще не додали жодного товару в кошик"}),f.jsx(yR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),bR=C.div`
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
`,wR=({item:e})=>{const t=Wt();return f.jsxs(bR,{children:[f.jsx("button",{onClick:()=>t(A$(e.id)),children:"-"}),f.jsx("span",{children:e.quantity}),f.jsx("button",{onClick:()=>t(L$({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},SR=async(e,t,n)=>{try{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!r.ok)throw new Error("Не вдалося отримати товари кошика");const i=await r.json();await Promise.all(i.data.map(async o=>{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}})).ok)throw new Error("Не вдалося видалити товар з кошика")})),t(Ja())}catch(r){throw console.error("clearCartFromBackend error:",r),r}},CR=()=>{const e=Wt(),t=$t(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),[i,o]=b.useState([]),a=Re(v=>v.cart.items),[l,s]=b.useState([]),[c,u]=b.useState(!0),y=Re(v=>v.cart.items).reduce((v,S)=>v+S.quantity,0),g=l.reduce((v,S)=>v+(S.new_price??S.price)*(S.quantity||1),0),h=Re(v=>v.favorites.items),x=l.length===0;b.useEffect(()=>{(async()=>{if(!n||!r){s(a),u(!1);return}try{const S=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(!S.ok)throw new Error("Не вдалося отримати кошик");const P=(await S.json()).data.map(k=>k.product?{...k.product,quantity:k.quantity}:null).filter(Boolean);s(P),e(Kw(P))}catch(S){console.error(S),X.error("Не вдалося завантажити кошик"),s(a)}finally{u(!1)}})()},[]);const w=(v,S)=>{S.stopPropagation();const E=h.some(P=>P.id===(v==null?void 0:v.id));ui(v,E,e,X)},p=v=>{o(S=>[...S,v.id]),setTimeout(()=>{e(I$(v)),o(S=>S.filter(E=>E!==v.id))},300)},m=async()=>{if(!r){e(Ja()),s([]);return}try{await SR(r.id,e,n),s([])}catch{X.error("Не вдалося очистити кошик")}};return c?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsx(f.Fragment,{children:x?f.jsx(xR,{}):f.jsxs(XA,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(KA,{children:[" ",f.jsx(Te,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Te,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),f.jsx(QA,{children:"Кошик"}),f.jsxs(ZA,{children:[f.jsx(JA,{children:l.map((v,S)=>{var $,M;const E=h.some(I=>I.id===v.id),P=v.new_price&&v.new_price<v.price,k=P?v.new_price:v.price,_=P?Math.round((v.price-v.new_price)/v.price*100):0;return f.jsxs(eR,{className:i.includes(v.id)?"removing":"",onClick:()=>t(`/product/${v.slug??v.id}`),children:[f.jsx(tR,{src:((M=($=v.images)==null?void 0:$[0])==null?void 0:M.url)||"/nofoto.png",alt:v.name,onError:I=>{I.currentTarget.onerror=null,I.currentTarget.src=ri}}),f.jsx(nR,{children:f.jsx("h3",{children:v.name})}),f.jsxs(rR,{children:[f.jsx(wR,{item:{...v,quantity:v.quantity||1}}),f.jsx($u,{children:f.jsxs(Mu,{children:[f.jsxs(Iu,{$discount:P,children:[(k*(v.quantity||1)).toLocaleString()," ","грн"]}),P&&f.jsxs(f.Fragment,{children:[f.jsxs(Du,{children:[(v.price*(v.quantity||1)).toLocaleString()," ","грн"]}),f.jsxs(Lu,{children:["-",_,"%"]})]})]})})]}),f.jsxs(iR,{children:[f.jsx(aR,{onClick:I=>w(v,I),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:f.jsx(Xa,{size:22,fill:E?"#ff4d4f":"none",color:E?"#ff4d4f":"#999"})}),f.jsx(oR,{onClick:()=>p(v),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:f.jsx(xw,{size:22})})]})]},`${v.id}-${S}`)})}),f.jsxs(sR,{children:[f.jsxs(lR,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[y," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[g," грн"]})]}),f.jsx(cR,{to:"/checkout",children:"Оформити замовлення"}),f.jsx(uR,{onClick:m,children:"Oчистити кошик"})]})]})]})})},_R=C.div`
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
`,ER=C.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,kR=C.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,TR=C.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,PR=C.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,OR=C.div`
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
`,jR=C.div`
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
`;C.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const $R=C.div`
  position: relative;
`,MR=C.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,IR=C.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,DR=C.div`
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
`;const LR=C.div`
  display: flex;
  gap: 16px;
`,w1=C.button`
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
`,AR=C.div`
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
`,RR=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,FR=C.button`
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
`;const zR=C.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,NR=C.div`
   
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
`;const BR=C.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;C.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const VR=C.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,UR=C.button`
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
`,WR=()=>f.jsxs(f.Fragment,{children:[f.jsx(zR,{children:"Головна / Обране"}),f.jsxs(NR,{children:[f.jsx(BR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),f.jsx(VR,{children:"Ви ще не додали жодного товару в обране"}),f.jsx(UR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),HR=()=>{const e=Wt(),t=$t(),n=Re(h=>h.favorites.items),[r,i]=b.useState([]),[o,a]=b.useState(!0),[l,s]=b.useState([]),c=Re(h=>h.cart.items);b.useEffect(()=>{(async()=>{const x=localStorage.getItem("token"),w=JSON.parse(localStorage.getItem("user"));if(!x||!w){i(n),a(!1);return}try{const p=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${w.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${x}`}});if(!p.ok)throw new Error("Не вдалося отримати обране");const v=(await p.json()).data.map(S=>S.product).filter(Boolean);i(v)}catch(p){console.error(p),X.error("Не вдалося завантажити обране"),i(n)}finally{a(!1)}})()},[]);const u=()=>{const h=r.filter(x=>x.available!==!1).map(x=>{const w=c.find(S=>S.id===x.id),p=(w==null?void 0:w.quantity)??0,v=Number(x.stock??0)-p;return v<=0?null:{...x,quantity:v}}).filter(Boolean);if(h.length===0){X.error("Усі товари вже в максимальній кількості");return}e(D$(h)),X.success("Додано максимально доступну кількість товарів")},d=r.reduce((h,x)=>h+(x.new_price??x.price)*(x.quantity||1),0),y=async(h,x)=>{x.stopPropagation();const w=r.some(m=>m.documentId===h.documentId);s(m=>[...m,h.id]),await ui(h,w,e,X)&&w?setTimeout(()=>{i(m=>m.filter(v=>v.documentId!==h.documentId)),s(m=>m.filter(v=>v!==h.id))},300):s(m=>m.filter(v=>v!==h.id))},g=r.length===0;return o?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsx(f.Fragment,{children:g?f.jsx(WR,{}):f.jsxs(_R,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(ER,{children:[" ",f.jsx(Te,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Te,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),f.jsx(kR,{children:"Обране"}),f.jsxs(TR,{children:[f.jsx(PR,{children:r.map(h=>{var S,E;const x=h.new_price&&h.new_price<h.price,w=x?h.new_price:h.price,p=(h==null?void 0:h.available)??!0,m=x?Math.round((h.price-h.new_price)/h.price*100):0,v=async P=>{const k=c.find($=>$.id===P.id);if((k?k.quantity:0)>=P.stock){X.error(`Вибачте, доступно лише ${P.stock} шт.`);return}await ym(P,1,e,X)};return f.jsxs(OR,{className:l.includes(h.id)?"removing":"",children:[!p&&f.jsx(jR,{children:"Заброньовано"}),f.jsx($R,{onClick:()=>t(`/product/${h.slug??h.id}`),children:f.jsx(MR,{src:((E=(S=h.images)==null?void 0:S[0])==null?void 0:E.url)||ri,alt:h.name,onError:P=>{P.currentTarget.onerror=null}})}),f.jsx(IR,{children:h.name}),f.jsxs(DR,{children:[f.jsx($u,{children:f.jsxs(Mu,{children:[f.jsxs(Iu,{$discount:x,children:[(w*(h.quantity||1)).toLocaleString()," ","грн"]}),x&&f.jsxs(f.Fragment,{children:[f.jsxs(Du,{children:[(h.price*(h.quantity||1)).toLocaleString()," ","грн"]}),f.jsxs(Lu,{children:["-",m,"%"]})]})]})}),f.jsxs(LR,{children:[f.jsx(w1,{onClick:()=>v(h),disabled:!p,children:f.jsx(vo,{size:30})}),f.jsx(w1,{onClick:P=>y(h,P),children:f.jsx(xw,{size:30})})]})]})]},h.id)})}),f.jsxs(AR,{children:[f.jsxs(RR,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[r.length," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[d," грн"]})]}),f.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),f.jsx(FR,{onClick:()=>u(),children:"Додати все до кошика"})]})]})]})})},GR=C.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,qR=C.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,YR=C.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,XR=C.h1`
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
`;const KR=({title:e,children:t,breadcrumbPath:n})=>f.jsxs(GR,{children:[f.jsxs(qR,{children:["Головна / ",n]}),f.jsxs(YR,{children:[f.jsx(XR,{children:e}),t]})]}),S1=C.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,C1=C.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,_1=C.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,E1=C.ul`
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
`,QR=()=>f.jsxs(KR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[f.jsxs(S1,{children:[f.jsx(C1,{children:"Способи доставки"}),f.jsx(_1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),f.jsxs(E1,{children:[f.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),f.jsx("li",{children:"Самовивіз з нашого магазину"}),f.jsx("li",{children:"Укрпошта"})]})]}),f.jsxs(S1,{children:[f.jsx(C1,{children:"Варіанти оплати"}),f.jsx(_1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),f.jsxs(E1,{children:[f.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),f.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),f.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ai(e){"@babel/helpers - typeof";return ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ai(e)}function ZR(e,t){if(ai(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ai(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mC(e){var t=ZR(e,"string");return ai(t)==="symbol"?t:String(t)}function Qo(e,t,n){return t=mC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k1(Object(n),!0).forEach(function(r){Qo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JR(e){if(Array.isArray(e))return e}function e8(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(u){c=!0,i=u}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}function Gp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gC(e,t){if(e){if(typeof e=="string")return Gp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gp(e,t)}}function t8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qn(e,t){return JR(e)||e8(e,t)||gC(e,t)||t8()}function n8(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function or(e,t){if(e==null)return{};var n=n8(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var r8=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function i8(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,c=e.onChange,u=e.onInputChange,d=e.onMenuClose,y=e.onMenuOpen,g=e.value,h=or(e,r8),x=b.useState(l!==void 0?l:n),w=qn(x,2),p=w[0],m=w[1],v=b.useState(s!==void 0?s:i),S=qn(v,2),E=S[0],P=S[1],k=b.useState(g!==void 0?g:a),_=qn(k,2),$=_[0],M=_[1],I=b.useCallback(function(T,j){typeof c=="function"&&c(T,j),M(T)},[c]),D=b.useCallback(function(T,j){var z;typeof u=="function"&&(z=u(T,j)),m(z!==void 0?z:T)},[u]),O=b.useCallback(function(){typeof y=="function"&&y(),P(!0)},[y]),F=b.useCallback(function(){typeof d=="function"&&d(),P(!1)},[d]),L=l!==void 0?l:p,A=s!==void 0?s:E,R=g!==void 0?g:$;return Z(Z({},h),{},{inputValue:L,menuIsOpen:A,onChange:I,onInputChange:D,onMenuClose:F,onMenuOpen:O,value:R})}function o8(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,mC(r.key),r)}}function a8(e,t,n){return t&&T1(e.prototype,t),n&&T1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function qp(e,t){return qp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},qp(e,t)}function s8(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&qp(e,t)}function uc(e){return uc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},uc(e)}function l8(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function c8(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u8(e,t){if(t&&(ai(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c8(e)}function d8(e){var t=l8();return function(){var r=uc(e),i;if(t){var o=uc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return u8(this,i)}}function f8(e){if(Array.isArray(e))return Gp(e)}function p8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function h8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jm(e){return f8(e)||p8(e)||gC(e)||h8()}function m8(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const g8=Math.min,v8=Math.max,dc=Math.round,Ms=Math.floor,fc=e=>({x:e,y:e});function y8(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Au(){return typeof window<"u"}function vC(e){return xC(e)?(e.nodeName||"").toLowerCase():"#document"}function mn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function yC(e){var t;return(t=(xC(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function xC(e){return Au()?e instanceof Node||e instanceof mn(e).Node:!1}function Yp(e){return Au()?e instanceof Element||e instanceof mn(e).Element:!1}function eg(e){return Au()?e instanceof HTMLElement||e instanceof mn(e).HTMLElement:!1}function P1(e){return!Au()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof mn(e).ShadowRoot}function bC(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=tg(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Zd;function x8(){return Zd==null&&(Zd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Zd}function b8(e){return/^(html|body|#document)$/.test(vC(e))}function tg(e){return mn(e).getComputedStyle(e)}function w8(e){if(vC(e)==="html")return e;const t=e.assignedSlot||e.parentNode||P1(e)&&e.host||yC(e);return P1(t)?t.host:t}function wC(e){const t=w8(e);return b8(t)?e.ownerDocument?e.ownerDocument.body:e.body:eg(t)&&bC(t)?t:wC(t)}function pc(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=wC(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=mn(i);if(o){const l=Xp(a);return t.concat(a,a.visualViewport||[],bC(i)?i:[],l&&n?pc(l):[])}else return t.concat(i,pc(i,[],n))}function Xp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function S8(e){const t=tg(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=eg(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=dc(n)!==o||dc(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function ng(e){return Yp(e)?e:e.contextElement}function Jd(e){const t=ng(e);if(!eg(t))return fc(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=S8(t);let a=(o?dc(n.width):n.width)/r,l=(o?dc(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const C8=fc(0);function _8(e){const t=mn(e);return!x8()||!t.visualViewport?C8:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function E8(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==mn(e)?!1:t}function O1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=ng(e);let a=fc(1);t&&(r?Yp(r)&&(a=Jd(r)):a=Jd(e));const l=E8(o,n,r)?_8(o):fc(0);let s=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,u=i.width/a.x,d=i.height/a.y;if(o){const y=mn(o),g=r&&Yp(r)?mn(r):r;let h=y,x=Xp(h);for(;x&&r&&g!==h;){const w=Jd(x),p=x.getBoundingClientRect(),m=tg(x),v=p.left+(x.clientLeft+parseFloat(m.paddingLeft))*w.x,S=p.top+(x.clientTop+parseFloat(m.paddingTop))*w.y;s*=w.x,c*=w.y,u*=w.x,d*=w.y,s+=v,c+=S,h=mn(x),x=Xp(h)}}return y8({width:u,height:d,x:s,y:c})}function SC(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function k8(e,t){let n=null,r;const i=yC(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const c=e.getBoundingClientRect(),{left:u,top:d,width:y,height:g}=c;if(l||t(),!y||!g)return;const h=Ms(d),x=Ms(i.clientWidth-(u+y)),w=Ms(i.clientHeight-(d+g)),p=Ms(u),v={rootMargin:-h+"px "+-x+"px "+-w+"px "+-p+"px",threshold:v8(0,g8(1,s))||1};let S=!0;function E(P){const k=P[0].intersectionRatio;if(k!==s){if(!S)return a();k?a(!1,k):r=setTimeout(()=>{a(!1,1e-7)},1e3)}k===1&&!SC(c,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(E,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,v)}n.observe(e)}return a(!0),o}function T8(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=ng(e),u=i||o?[...c?pc(c):[],...t?pc(t):[]]:[];u.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const d=c&&l?k8(c,n):null;let y=-1,g=null;a&&(g=new ResizeObserver(p=>{let[m]=p;m&&m.target===c&&g&&t&&(g.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var v;(v=g)==null||v.observe(t)})),n()}),c&&!s&&g.observe(c),t&&g.observe(t));let h,x=s?O1(e):null;s&&w();function w(){const p=O1(e);x&&!SC(x,p)&&n(),x=p,h=requestAnimationFrame(w)}return n(),()=>{var p;u.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),d==null||d(),(p=g)==null||p.disconnect(),g=null,s&&cancelAnimationFrame(h)}}var Kp=b.useLayoutEffect,P8=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],hc=function(){};function O8(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function j8(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(O8(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var j1=function(t){return z8(t)?t.filter(Boolean):ai(t)==="object"&&t!==null?[t]:[]},CC=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=or(t,P8);return Z({},n)},je=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Ru(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function $8(e){return Ru(e)?window.innerHeight:e.clientHeight}function _C(e){return Ru(e)?window.pageYOffset:e.scrollTop}function mc(e,t){if(Ru(e)){window.scrollTo(0,t);return}e.scrollTop=t}function M8(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function I8(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Is(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:hc,i=_C(e),o=t-i,a=10,l=0;function s(){l+=a;var c=I8(l,i,o,n);mc(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function $1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?mc(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&mc(e,Math.max(t.offsetTop-i,0))}function D8(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function M1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function L8(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var EC=!1,A8={get passive(){return EC=!0}},Ds=typeof window<"u"?window:{};Ds.addEventListener&&Ds.removeEventListener&&(Ds.addEventListener("p",hc,A8),Ds.removeEventListener("p",hc,!1));var R8=EC;function F8(e){return e!=null}function z8(e){return Array.isArray(e)}function Ls(e,t,n){return e?t:n}var N8=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=qn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=qn(l,2),c=s[0],u=s[1];return a[c]=u,a},{})},B8=["children","innerProps"],V8=["children","innerProps"];function U8(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=M8(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var u=s.getBoundingClientRect(),d=u.height,y=n.getBoundingClientRect(),g=y.bottom,h=y.height,x=y.top,w=n.offsetParent.getBoundingClientRect(),p=w.top,m=a?window.innerHeight:$8(s),v=_C(s),S=parseInt(getComputedStyle(n).marginBottom,10),E=parseInt(getComputedStyle(n).marginTop,10),P=p-E,k=m-x,_=P+v,$=d-v-x,M=g-m+v+S,I=v+x-E,D=160;switch(i){case"auto":case"bottom":if(k>=h)return{placement:"bottom",maxHeight:t};if($>=h&&!a)return o&&Is(s,M,D),{placement:"bottom",maxHeight:t};if(!a&&$>=r||a&&k>=r){o&&Is(s,M,D);var O=a?k-S:$-S;return{placement:"bottom",maxHeight:O}}if(i==="auto"||a){var F=t,L=a?P:_;return L>=r&&(F=Math.min(L-S-l,t)),{placement:"top",maxHeight:F}}if(i==="bottom")return o&&mc(s,M),{placement:"bottom",maxHeight:t};break;case"top":if(P>=h)return{placement:"top",maxHeight:t};if(_>=h&&!a)return o&&Is(s,I,D),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&P>=r){var A=t;return(!a&&_>=r||a&&P>=r)&&(A=a?P-E:_-E),o&&Is(s,I,D),{placement:"top",maxHeight:A}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function W8(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var kC=function(t){return t==="auto"?"bottom":t},H8=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},Qo(r,W8(i),"100%"),Qo(r,"position","absolute"),Qo(r,"width","100%"),Qo(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},TC=b.createContext(null),G8=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,c=b.useContext(TC)||{},u=c.setPortalPlacement,d=b.useRef(null),y=b.useState(i),g=qn(y,2),h=g[0],x=g[1],w=b.useState(null),p=qn(w,2),m=p[0],v=p[1],S=s.spacing.controlHeight;return Kp(function(){var E=d.current;if(E){var P=a==="fixed",k=l&&!P,_=U8({maxHeight:i,menuEl:E,minHeight:r,placement:o,shouldScroll:k,isFixedPosition:P,controlHeight:S});x(_.maxHeight),v(_.placement),u==null||u(_.placement)}},[i,o,a,l,r,u,S]),n({ref:d,placerProps:Z(Z({},t),{},{placement:m||kC(o),maxHeight:h})})},q8=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Q("div",J({},je(t,"menu",{menu:!0}),{ref:r},i),n)},Y8=q8,X8=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},K8=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Q("div",J({},je(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},PC=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},Q8=PC,Z8=PC,J8=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=or(t,B8);return Q("div",J({},je(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},eF=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=or(t,V8);return Q("div",J({},je(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},tF=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},nF=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),c=b.useRef(null),u=b.useState(kC(a)),d=qn(u,2),y=d[0],g=d[1],h=b.useMemo(function(){return{setPortalPlacement:g}},[]),x=b.useState(null),w=qn(x,2),p=w[0],m=w[1],v=b.useCallback(function(){if(i){var k=D8(i),_=l==="fixed"?0:window.pageYOffset,$=k[y]+_;($!==(p==null?void 0:p.offset)||k.left!==(p==null?void 0:p.rect.left)||k.width!==(p==null?void 0:p.rect.width))&&m({offset:$,rect:k})}},[i,l,y,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);Kp(function(){v()},[v]);var S=b.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=T8(i,s.current,v,{elementResize:"ResizeObserver"in window}))},[i,v]);Kp(function(){S()},[S]);var E=b.useCallback(function(k){s.current=k,S()},[S]);if(!n&&l!=="fixed"||!p)return null;var P=Q("div",J({ref:E},je(Z(Z({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Q(TC.Provider,{value:h},n?Lc.createPortal(P,n):P)},rF=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},iF=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Q("div",J({},je(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},oF=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},aF=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Q("div",J({},je(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},sF=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},lF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"indicatorsContainer",{indicators:!0}),r),n)},I1,cF=["size"],uF=["innerProps","isRtl","size"],dF={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},OC=function(t){var n=t.size,r=or(t,cF);return Q("svg",J({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:dF},r))},rg=function(t){return Q(OC,J({size:20},t),Q("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},jC=function(t){return Q(OC,J({size:20},t),Q("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},$C=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},fF=$C,pF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Q(jC,null))},hF=$C,mF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Q(rg,null))},gF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},vF=function(t){var n=t.innerProps;return Q("span",J({},n,je(t,"indicatorSeparator",{"indicator-separator":!0})))},yF=A3(I1||(I1=m8([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),xF=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},ef=function(t){var n=t.delay,r=t.offset;return Q("span",{css:Pm({animation:"".concat(yF," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},bF=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=or(t,uF);return Q("div",J({},je(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Q(ef,{delay:0,offset:r}),Q(ef,{delay:160,offset:!0}),Q(ef,{delay:320,offset:!r}))},wF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},SF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Q("div",J({ref:o},je(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},CF=SF,_F=["data"],EF=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},kF=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,u=t.theme,d=t.selectProps;return Q("div",J({},je(t,"group",{group:!0}),s),Q(a,J({},l,{selectProps:d,theme:u,getStyles:i,getClassNames:o,cx:r}),c),Q("div",null,n))},TF=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},PF=function(t){var n=CC(t);n.data;var r=or(n,_F);return Q("div",J({},je(t,"groupHeading",{"group-heading":!0}),r))},OF=kF,jF=["innerRef","isDisabled","isHidden","inputClassName"],$F=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},MF),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},MC={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},MF={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},MC)},IF=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},MC)},DF=function(t){var n=t.cx,r=t.value,i=CC(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,c=or(i,jF);return Q("div",J({},je(t,"input",{"input-container":!0}),{"data-value":r||""}),Q("input",J({className:n({input:!0},s),ref:o,style:IF(l),disabled:a},c)))},LF=DF,AF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},RF=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},FF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},IC=function(t){var n=t.children,r=t.innerProps;return Q("div",r,n)},zF=IC,NF=IC;function BF(e){var t=e.children,n=e.innerProps;return Q("div",J({role:"button"},n),t||Q(rg,{size:14}))}var VF=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,c=r.Container,u=r.Label,d=r.Remove;return Q(c,{data:i,innerProps:Z(Z({},je(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Q(u,{data:i,innerProps:Z({},je(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Q(d,{data:i,innerProps:Z(Z({},je(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},UF=VF,WF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},HF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Q("div",J({},je(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},GF=HF,qF=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},YF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"placeholder",{placeholder:!0}),r),n)},XF=YF,KF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},QF=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Q("div",J({},je(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},ZF=QF,JF={ClearIndicator:mF,Control:CF,DropdownIndicator:pF,DownChevron:jC,CrossIcon:rg,Group:OF,GroupHeading:PF,IndicatorsContainer:lF,IndicatorSeparator:vF,Input:LF,LoadingIndicator:bF,Menu:Y8,MenuList:K8,MenuPortal:nF,LoadingMessage:eF,NoOptionsMessage:J8,MultiValue:UF,MultiValueContainer:zF,MultiValueLabel:NF,MultiValueRemove:BF,Option:GF,Placeholder:XF,SelectContainer:iF,SingleValue:ZF,ValueContainer:aF},ez=function(t){return Z(Z({},JF),t.components)},D1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function tz(e,t){return!!(e===t||D1(e)&&D1(t))}function nz(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!tz(e[n],t[n]))return!1;return!0}function rz(e,t){t===void 0&&(t=nz);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var iz={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},oz=function(t){return Q("span",J({css:iz},t))},L1=oz,az={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,c=t.isSelected,u=t.isAppleDevice,d=function(x,w){return x&&x.length?"".concat(x.indexOf(w)+1," of ").concat(x.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&u){var y=s?" disabled":"",g="".concat(c?" selected":"").concat(y);return"".concat(a).concat(g,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},sz=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=t.id,u=t.isAppleDevice,d=s.ariaLiveMessages,y=s.getOptionLabel,g=s.inputValue,h=s.isMulti,x=s.isOptionDisabled,w=s.isSearchable,p=s.menuIsOpen,m=s.options,v=s.screenReaderStatus,S=s.tabSelectsValue,E=s.isLoading,P=s["aria-label"],k=s["aria-live"],_=b.useMemo(function(){return Z(Z({},az),d||{})},[d]),$=b.useMemo(function(){var L="";if(n&&_.onChange){var A=n.option,R=n.options,T=n.removedValue,j=n.removedValues,z=n.value,B=function(pe){return Array.isArray(pe)?null:pe},N=T||A||B(z),U=N?y(N):"",G=R||j||void 0,W=G?G.map(y):[],Y=Z({isDisabled:N&&x(N,l),label:U,labels:W},n);L=_.onChange(Y)}return L},[n,_,x,l,y]),M=b.useMemo(function(){var L="",A=r||i,R=!!(r&&l&&l.includes(r));if(A&&_.onFocus){var T={focused:A,label:y(A),isDisabled:x(A,l),isSelected:R,options:o,context:A===r?"menu":"value",selectValue:l,isAppleDevice:u};L=_.onFocus(T)}return L},[r,i,y,x,_,o,l,u]),I=b.useMemo(function(){var L="";if(p&&m.length&&!E&&_.onFilter){var A=v({count:o.length});L=_.onFilter({inputValue:g,resultsMessage:A})}return L},[o,g,p,_,m,v,E]),D=(n==null?void 0:n.action)==="initial-input-focus",O=b.useMemo(function(){var L="";if(_.guidance){var A=i?"value":p?"menu":"input";L=_.guidance({"aria-label":P,context:A,isDisabled:r&&x(r,l),isMulti:h,isSearchable:w,tabSelectsValue:S,isInitialFocus:D})}return L},[P,r,i,h,x,w,p,_,l,S,D]),F=Q(b.Fragment,null,Q("span",{id:"aria-selection"},$),Q("span",{id:"aria-focused"},M),Q("span",{id:"aria-results"},I),Q("span",{id:"aria-guidance"},O));return Q(b.Fragment,null,Q(L1,{id:c},D&&F),Q(L1,{"aria-live":k,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!D&&F))},lz=sz,Qp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],cz=new RegExp("["+Qp.map(function(e){return e.letters}).join("")+"]","g"),DC={};for(var tf=0;tf<Qp.length;tf++)for(var nf=Qp[tf],rf=0;rf<nf.letters.length;rf++)DC[nf.letters[rf]]=nf.base;var LC=function(t){return t.replace(cz,function(n){return DC[n]})},uz=rz(LC),A1=function(t){return t.replace(/^\s+|\s+$/g,"")},dz=function(t){return"".concat(t.label," ").concat(t.value)},fz=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:dz,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,c=i.matchFrom,u=s?A1(r):r,d=s?A1(l(n)):l(n);return o&&(u=u.toLowerCase(),d=d.toLowerCase()),a&&(u=uz(u),d=LC(d)),c==="start"?d.substr(0,u.length)===u:d.indexOf(u)>-1}},pz=["innerRef"];function hz(e){var t=e.innerRef,n=or(e,pz),r=N8(n,"onExited","in","enter","exit","appear");return Q("input",J({ref:t},r,{css:Pm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var mz=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function gz(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),c=b.useRef(null),u=b.useCallback(function(w,p){if(c.current!==null){var m=c.current,v=m.scrollTop,S=m.scrollHeight,E=m.clientHeight,P=c.current,k=p>0,_=S-E-v,$=!1;_>p&&a.current&&(r&&r(w),a.current=!1),k&&l.current&&(o&&o(w),l.current=!1),k&&p>_?(n&&!a.current&&n(w),P.scrollTop=S,$=!0,a.current=!0):!k&&-p>v&&(i&&!l.current&&i(w),P.scrollTop=0,$=!0,l.current=!0),$&&mz(w)}},[n,r,i,o]),d=b.useCallback(function(w){u(w,w.deltaY)},[u]),y=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),g=b.useCallback(function(w){var p=s.current-w.changedTouches[0].clientY;u(w,p)},[u]),h=b.useCallback(function(w){if(w){var p=R8?{passive:!1}:!1;w.addEventListener("wheel",d,p),w.addEventListener("touchstart",y,p),w.addEventListener("touchmove",g,p)}},[g,y,d]),x=b.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",y,!1),w.removeEventListener("touchmove",g,!1))},[g,y,d]);return b.useEffect(function(){if(t){var w=c.current;return h(w),function(){x(w)}}},[t,h,x]),function(w){c.current=w}}var R1=["boxSizing","height","overflow","paddingRight","position"],F1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function z1(e){e.cancelable&&e.preventDefault()}function N1(e){e.stopPropagation()}function B1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function V1(){return"ontouchstart"in window||navigator.maxTouchPoints}var U1=!!(typeof window<"u"&&window.document&&window.document.createElement),Bo=0,Si={capture:!1,passive:!1};function vz(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(U1){var c=document.body,u=c&&c.style;if(r&&R1.forEach(function(h){var x=u&&u[h];i.current[h]=x}),r&&Bo<1){var d=parseInt(i.current.paddingRight,10)||0,y=document.body?document.body.clientWidth:0,g=window.innerWidth-y+d||0;Object.keys(F1).forEach(function(h){var x=F1[h];u&&(u[h]=x)}),u&&(u.paddingRight="".concat(g,"px"))}c&&V1()&&(c.addEventListener("touchmove",z1,Si),s&&(s.addEventListener("touchstart",B1,Si),s.addEventListener("touchmove",N1,Si))),Bo+=1}},[r]),l=b.useCallback(function(s){if(U1){var c=document.body,u=c&&c.style;Bo=Math.max(Bo-1,0),r&&Bo<1&&R1.forEach(function(d){var y=i.current[d];u&&(u[d]=y)}),c&&V1()&&(c.removeEventListener("touchmove",z1,Si),s&&(s.removeEventListener("touchstart",B1,Si),s.removeEventListener("touchmove",N1,Si)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var yz=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},xz={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function bz(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=gz({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),u=vz({isEnabled:n}),d=function(g){c(g),u(g)};return Q(b.Fragment,null,n&&Q("div",{onClick:yz,css:xz}),t(d))}var wz={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Sz=function(t){var n=t.name,r=t.onFocus;return Q("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:wz,value:"",onChange:function(){}})},Cz=Sz;function ig(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function _z(){return ig(/^iPhone/i)}function AC(){return ig(/^Mac/i)}function Ez(){return ig(/^iPad/i)||AC()&&navigator.maxTouchPoints>1}function kz(){return _z()||Ez()}function Tz(){return AC()||kz()}var Pz=function(t){return t.label},Oz=function(t){return t.label},jz=function(t){return t.value},$z=function(t){return!!t.isDisabled},Mz={clearIndicator:hF,container:rF,control:wF,dropdownIndicator:fF,group:EF,groupHeading:TF,indicatorsContainer:sF,indicatorSeparator:gF,input:$F,loadingIndicator:xF,loadingMessage:Z8,menu:H8,menuList:X8,menuPortal:tF,multiValue:AF,multiValueLabel:RF,multiValueRemove:FF,noOptionsMessage:Q8,option:WF,placeholder:qF,singleValue:KF,valueContainer:oF},Iz={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Dz=4,RC=4,Lz=38,Az=RC*2,Rz={baseUnit:RC,controlHeight:Lz,menuGutter:Az},of={borderRadius:Dz,colors:Iz,spacing:Rz},Fz={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:M1(),captureMenuScroll:!M1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:fz(),formatGroupLabel:Pz,getOptionLabel:Oz,getOptionValue:jz,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:$z,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!L8(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function W1(e,t,n,r){var i=NC(e,t,n),o=BC(e,t,n),a=zC(e,t),l=gc(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function fl(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return W1(e,a,t,l)}).filter(function(a){return G1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=W1(e,n,t,r);return G1(e,o)?o:void 0}).filter(F8)}function FC(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Jm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function H1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Jm(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function zz(e,t){return FC(fl(e,t))}function G1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!UC(e)||!o)&&VC(e,{label:a,value:l,data:i},r)}function Nz(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function Bz(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var af=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},zC=function(t,n){return t.getOptionLabel(n)},gc=function(t,n){return t.getOptionValue(n)};function NC(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function BC(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=gc(e,t);return n.some(function(i){return gc(e,i)===r})}function VC(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var UC=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},Vz=1,WC=function(e){s8(n,e);var t=d8(n);function n(r){var i;if(o8(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var u=i.props,d=u.onChange,y=u.name;c.name=y,i.ariaOnChange(s,c),d(s,c)},i.setValue=function(s,c,u){var d=i.props,y=d.closeMenuOnSelect,g=d.isMulti,h=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:h}),y&&(i.setState({inputIsHiddenAfterUpdate:!g}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:u})},i.selectOption=function(s){var c=i.props,u=c.blurInputOnSelect,d=c.isMulti,y=c.name,g=i.state.selectValue,h=d&&i.isOptionSelected(s,g),x=i.isOptionDisabled(s,g);if(h){var w=i.getOptionValue(s);i.setValue(g.filter(function(p){return i.getOptionValue(p)!==w}),"deselect-option",s)}else if(!x)d?i.setValue([].concat(Jm(g),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:y});return}u&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,u=i.state.selectValue,d=i.getOptionValue(s),y=u.filter(function(h){return i.getOptionValue(h)!==d}),g=Ls(c,y,y[0]||null);i.onChange(g,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Ls(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,u=c[c.length-1],d=c.slice(0,c.length-1),y=Ls(s,d,d[0]||null);u&&i.onChange(y,{action:"pop-value",removedValue:u})},i.getFocusedOptionId=function(s){return af(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return H1(fl(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),u=0;u<s;u++)c[u]=arguments[u];return j8.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return zC(i.props,s)},i.getOptionValue=function(s){return gc(i.props,s)},i.getStyles=function(s,c){var u=i.props.unstyled,d=Mz[s](c,u);d.boxSizing="border-box";var y=i.props.styles[s];return y?y(d,c):d},i.getClassNames=function(s,c){var u,d;return(u=(d=i.props.classNames)[s])===null||u===void 0?void 0:u.call(d,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return ez(i.props)},i.buildCategorizedOptions=function(){return fl(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return FC(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:Z({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,u=c.isMulti,d=c.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!u}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Ru(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,u=c&&c.item(0);u&&(i.initialTouchX=u.clientX,i.initialTouchY=u.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,u=c&&c.item(0);if(u){var d=Math.abs(u.clientX-i.initialTouchX),y=Math.abs(u.clientY-i.initialTouchY),g=5;i.userIsDragging=d>g||y>g}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,u=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(u,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),u=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:u>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return UC(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,u=c.isMulti,d=c.backspaceRemovesValue,y=c.escapeClearsValue,g=c.inputValue,h=c.isClearable,x=c.isDisabled,w=c.menuIsOpen,p=c.onKeyDown,m=c.tabSelectsValue,v=c.openMenuOnFocus,S=i.state,E=S.focusedOption,P=S.focusedValue,k=S.selectValue;if(!x&&!(typeof p=="function"&&(p(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!u||g)return;i.focusValue("previous");break;case"ArrowRight":if(!u||g)return;i.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(P)i.removeValue(P);else{if(!d)return;u?i.popValue():h&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!m||!E||v&&i.isOptionSelected(E,k))return;i.selectOption(E);break;case"Enter":if(s.keyCode===229)break;if(w){if(!E||i.isComposing)return;i.selectOption(E);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:g}),i.onMenuClose()):h&&y&&i.clearValue();break;case" ":if(g)return;if(!w){i.openMenu("first");break}if(!E)return;i.selectOption(E);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++Vz),i.state.selectValue=j1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=af(o,a[l])}return i}return a8(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&$1(this.menuListRef,this.focusedOptionRef),Tz()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&($1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),u=i==="first"?0:c.length-1;if(!this.props.isMulti){var d=c.indexOf(l[0]);d>-1&&(u=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[u],focusedOptionId:this.getFocusedOptionId(c[u])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,u=-1;if(a.length){switch(i){case"previous":s===0?u=0:s===-1?u=c:u=s-1;break;case"next":s>-1&&s<c&&(u=s+1);break}this.setState({inputIsHidden:u!==-1,focusedValue:a[u]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,c=l.indexOf(a);a||(c=-1),i==="up"?s=c>0?c-1:l.length-1:i==="down"?s=(c+1)%l.length:i==="pageup"?(s=c-o,s<0&&(s=0)):i==="pagedown"?(s=c+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(of):Z(Z({},of),this.props.theme):of}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,c=this.selectOption,u=this.setValue,d=this.props,y=d.isMulti,g=d.isRtl,h=d.options,x=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:x,isMulti:y,isRtl:g,options:h,selectOption:c,selectProps:d,setValue:u,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return NC(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return BC(this.props,i,o)}},{key:"filterOption",value:function(i,o){return VC(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,c=i.tabIndex,u=i.form,d=i.menuIsOpen,y=i.required,g=this.getComponents(),h=g.Input,x=this.state,w=x.inputIsHidden,p=x.ariaSelection,m=this.commonProps,v=l||this.getElementId("input"),S=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":y,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(h,J({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:v,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:u,type:"text",value:s},S)):b.createElement(hz,J({id:v,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:hc,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:u,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,c=o.MultiValueRemove,u=o.SingleValue,d=o.Placeholder,y=this.commonProps,g=this.props,h=g.controlShouldRenderValue,x=g.isDisabled,w=g.isMulti,p=g.inputValue,m=g.placeholder,v=this.state,S=v.selectValue,E=v.focusedValue,P=v.isFocused;if(!this.hasValue()||!h)return p?null:b.createElement(d,J({},y,{key:"placeholder",isDisabled:x,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),m);if(w)return S.map(function(_,$){var M=_===E,I="".concat(i.getOptionLabel(_),"-").concat(i.getOptionValue(_));return b.createElement(a,J({},y,{components:{Container:l,Label:s,Remove:c},isFocused:M,isDisabled:x,key:I,index:$,removeProps:{onClick:function(){return i.removeValue(_)},onTouchEnd:function(){return i.removeValue(_)},onMouseDown:function(O){O.preventDefault()}},data:_}),i.formatOptionLabel(_,"value"))});if(p)return null;var k=S[0];return b.createElement(u,J({},y,{data:k,isDisabled:x}),this.formatOptionLabel(k,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,u=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||c)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:d,isFocused:u}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,u=this.state.isFocused;if(!o||!c)return null;var d={"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:d,isDisabled:s,isFocused:u}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return b.createElement(a,J({},l,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:c,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,c=o.MenuList,u=o.MenuPortal,d=o.LoadingMessage,y=o.NoOptionsMessage,g=o.Option,h=this.commonProps,x=this.state.focusedOption,w=this.props,p=w.captureMenuScroll,m=w.inputValue,v=w.isLoading,S=w.loadingMessage,E=w.minMenuHeight,P=w.maxMenuHeight,k=w.menuIsOpen,_=w.menuPlacement,$=w.menuPosition,M=w.menuPortalTarget,I=w.menuShouldBlockScroll,D=w.menuShouldScrollIntoView,O=w.noOptionsMessage,F=w.onMenuScrollToTop,L=w.onMenuScrollToBottom;if(!k)return null;var A=function(U,G){var W=U.type,Y=U.data,ee=U.isDisabled,pe=U.isSelected,we=U.label,ie=U.value,Ie=x===Y,We=ee?void 0:function(){return i.onOptionHover(Y)},He=ee?void 0:function(){return i.selectOption(Y)},pi="".concat(i.getElementId("option"),"-").concat(G),wt={id:pi,onClick:He,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:pe};return b.createElement(g,J({},h,{innerProps:wt,data:Y,isDisabled:ee,isSelected:pe,key:pi,label:we,type:W,value:ie,isFocused:Ie,innerRef:Ie?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},R;if(this.hasOptions())R=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var U=N.data,G=N.options,W=N.index,Y="".concat(i.getElementId("group"),"-").concat(W),ee="".concat(Y,"-heading");return b.createElement(a,J({},h,{key:Y,data:U,options:G,Heading:l,headingProps:{id:ee,data:N.data},label:i.formatGroupLabel(N.data)}),N.options.map(function(pe){return A(pe,"".concat(W,"-").concat(pe.index))}))}else if(N.type==="option")return A(N,"".concat(N.index))});else if(v){var T=S({inputValue:m});if(T===null)return null;R=b.createElement(d,h,T)}else{var j=O({inputValue:m});if(j===null)return null;R=b.createElement(y,h,j)}var z={minMenuHeight:E,maxMenuHeight:P,menuPlacement:_,menuPosition:$,menuShouldScrollIntoView:D},B=b.createElement(G8,J({},h,z),function(N){var U=N.ref,G=N.placerProps,W=G.placement,Y=G.maxHeight;return b.createElement(s,J({},h,z,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:v,placement:W}),b.createElement(bz,{captureEnabled:p,onTopArrive:F,onBottomArrive:L,lockEnabled:I},function(ee){return b.createElement(c,J({},h,{innerRef:function(we){i.getMenuListRef(we),ee(we)},innerProps:{role:"listbox","aria-multiselectable":h.isMulti,id:i.getElementId("listbox")},isLoading:v,maxHeight:Y,focusedOption:x}),R)}))});return M||$==="fixed"?b.createElement(u,J({},h,{appendTo:M,controlElement:this.controlRef,menuPlacement:_,menuPosition:$}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,c=o.name,u=o.required,d=this.state.selectValue;if(u&&!this.hasValue()&&!l)return b.createElement(Cz,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(s)if(a){var y=d.map(function(x){return i.getOptionValue(x)}).join(a);return b.createElement("input",{name:c,type:"hidden",value:y})}else{var g=d.length>0?d.map(function(x,w){return b.createElement("input",{key:"i-".concat(w),name:c,type:"hidden",value:i.getOptionValue(x)})}):b.createElement("input",{name:c,type:"hidden",value:""});return b.createElement("div",null,g)}else{var h=d[0]?this.getOptionValue(d[0]):"";return b.createElement("input",{name:c,type:"hidden",value:h})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,c=o.isFocused,u=o.selectValue,d=this.getFocusableOptions();return b.createElement(lz,J({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:u,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,c=this.props,u=c.className,d=c.id,y=c.isDisabled,g=c.menuIsOpen,h=this.state.isFocused,x=this.commonProps=this.getCommonProps();return b.createElement(l,J({},x,{className:u,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:y,isFocused:h}),this.renderLiveRegion(),b.createElement(o,J({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:y,isFocused:h,menuIsOpen:g}),b.createElement(s,J({},x,{isDisabled:y}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,J({},x,{isDisabled:y}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,u=o.isFocused,d=o.prevWasFocused,y=o.instancePrefix,g=i.options,h=i.value,x=i.menuIsOpen,w=i.inputValue,p=i.isMulti,m=j1(h),v={};if(a&&(h!==a.value||g!==a.options||x!==a.menuIsOpen||w!==a.inputValue)){var S=x?zz(i,m):[],E=x?H1(fl(i,m),"".concat(y,"-option")):[],P=l?Nz(o,m):null,k=Bz(o,S),_=af(E,k);v={selectValue:m,focusedOption:k,focusedOptionId:_,focusableOptionsWithIds:E,focusedValue:P,clearFocusValueOnUpdate:!1}}var $=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},M=c,I=u&&d;return u&&!I&&(M={value:Ls(p,m,m[0]||null),options:m,action:"initial-input-focus"},I=!d),(c==null?void 0:c.action)==="initial-input-focus"&&(M=null),Z(Z(Z({},v),$),{},{prevProps:i,ariaSelection:M,prevWasFocused:I})}}]),n}(b.Component);WC.defaultProps=Fz;var Uz=b.forwardRef(function(e,t){var n=i8(e);return b.createElement(WC,J({ref:t},n))}),Fu=Uz;const Wz=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Hz=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Gz=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>f.jsxs(Wz,{children:[f.jsx(Hz,{children:"Місто"}),f.jsx(Fu,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),qz=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Yz=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Xz=({options:e=[],value:t,onChange:n,selectedCity:r})=>f.jsxs(qz,{children:[f.jsx(Yz,{children:"Спосіб доставки"}),f.jsx(Fu,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),q1=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Y1=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Kz=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?f.jsxs(q1,{children:[f.jsx(Y1,{children:"Відділення Нової пошти"}),f.jsx(Fu,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?f.jsxs(q1,{children:[f.jsx(Y1,{children:"Адреса доставки (Укрпошта)"}),f.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,Qz=C.div`
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
`;const Zz=C.button`
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
`,Jz=C.ul`
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
`,eN=C.li`
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
`,tN=C.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,nN=C.div`
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
`,rN=C.div`
  text-align: center;
  width: 100px;
 
`,iN=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,oN=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,aN=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,sN=C.span`
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
`,lN=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>f.jsxs(Qz,{children:[f.jsx("h3",{children:"Ваше замовлення"}),f.jsx(Jz,{children:e.map((o,a)=>{var d,y;const l=o.new_price&&o.new_price<o.price,s=l?o.new_price:o.price,c=l?Math.round((o.price-o.new_price)/o.price*100):0,u=s*(o.quantity||1);return f.jsxs(eN,{children:[f.jsx(tN,{src:((y=(d=o.images)==null?void 0:d[0])==null?void 0:y.url)||ri,alt:o.name}),f.jsxs(nN,{children:[f.jsx("p",{className:"item-name",children:o.name}),f.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),f.jsx(rN,{children:f.jsxs(iN,{children:[f.jsxs(oN,{$discount:l,children:[u.toLocaleString()," грн"]}),l&&f.jsxs(f.Fragment,{children:[f.jsxs(aN,{children:[(o.price*(o.quantity||1)).toLocaleString()," грн"]}),f.jsxs(sN,{children:["-",c,"%"]})]})]})})]},`${o.id}-${a}`)})}),f.jsxs("div",{className:"summary-row",children:[f.jsxs("span",{children:["Товари (",n,")"]}),f.jsxs("span",{children:[t," грн"]})]}),f.jsxs("div",{className:"summary-row",children:[f.jsx("span",{children:"Доставка"}),f.jsx("span",{children:"За тарифами перевізника"})]}),f.jsx("hr",{}),f.jsxs("div",{className:"total",children:[f.jsx("span",{children:"Всього до сплати:"}),f.jsxs("span",{children:[t," грн"]})]}),f.jsx(Zz,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&f.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var HC={exports:{}};function cN(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var sf=cN(b),uN=Lc;function dN(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Zp(){return(Zp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function fN(e,t){e.prototype=Object.create(t.prototype),dN(e.prototype.constructor=e,t)}function pN(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function Ci(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var hN=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,l],u=0;(s=new Error(t.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},X1=hN;function K1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function mN(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var gN={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},vN="_";function Q1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=vN),n==null&&(n=gN),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Bt(e,t){return e.permanents.indexOf(t)!==-1}function zu(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Bt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function Z1(e,t){return t.split("").every(function(n,r){return Bt(e,r)||!zu(e,r,n)})}function Zo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Bt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Bt(e,o)&&zu(e,o,a)){i=o+1;break}}return i}function GC(e,t){return Zo(e,t)===e.mask.length}function Vn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Jp(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Bt(e,t.length);)t+=r[t.length];return t}if(t)return Jp(e,Vn(e,""),t,0);for(var o=0;o<r.length;o++)Bt(e,o)?t+=r[o]:t+=n;return t}function yN(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(u,d){return d<n||i<=d?u:Bt(e,d)?a[d]:o}).join("");for(var c=i;c<s.length;c++)Bt(e,c)&&(s[c]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Vn(e,t)}function Jp(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=GC(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(c){for(;g=c,Bt(e,y=r)&&g!==i[y];){if(r>=t.length&&(t+=i[r]),u=c,d=r,o&&Bt(e,d)&&u===o)return!0;if(++r>=i.length)return!1}var u,d,y,g;return!zu(e,r,c)&&c!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),Vn(e,t)):o||(t+=c),++r<i.length)}),t}function xN(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;u=s,Bt(e,c=r)&&u!==i[c];)if(++r>=i.length)return!1;var c,u;return(zu(e,r,s)||s===o)&&r++,r<i.length}),r-l}function bN(e,t){for(var n=t;0<=n;--n)if(!Bt(e,n))return n;return null}function da(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Bt(e,r))return r;return null}function lf(e){return e||e===0?e+"":""}function wN(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,c="",u=0,d=0,y=Math.min(i.start,n.start);return n.end>i.start?d=(u=xN(e,r,c=s.slice(i.start,n.end),y))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(y=i.start===n.start?da(e,n.start):bN(e,n.start)),s=yN(e,s,y,d)),s=Jp(e,s,c,y),(y+=u)>=o.length?y=o.length:y<a.length&&!u?y=a.length:y>=a.length&&y<l&&u&&(y=da(e,y)),c||(c=null),{value:s=Vn(e,s),enteredString:c,selection:{start:y,end:y}}}function SN(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function St(e){return typeof e=="function"}function CN(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function qC(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function J1(e){return(qC()?CN():function(){return setTimeout(e,1e3/60)})(e)}function cf(e){(qC()||clearTimeout)(e)}var _N=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=J1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(cf(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var h=uN.findDOMNode(Ci(Ci(i))),x=typeof window<"u"&&h instanceof window.Element;if(h&&!x)return null;if(h.nodeName!=="INPUT"&&(h=h.querySelector("input")),!h)throw new Error("react-input-mask: inputComponent doesn't contain input node");return h},i.getInputValue=function(){var h=i.getInputDOMNode();return h?h.value:null},i.setInputValue=function(h){var x=i.getInputDOMNode();x&&(i.value=h,x.value=h)},i.setCursorToEnd=function(){var h=Zo(i.maskOptions,i.value),x=da(i.maskOptions,h);x!==null&&i.setCursorPosition(x)},i.setSelection=function(h,x,w){w===void 0&&(w={});var p=i.getInputDOMNode(),m=i.isFocused();p&&m&&(w.deferred||K1(p,h,x),i.selectionDeferId!==null&&cf(i.selectionDeferId),i.selectionDeferId=J1(function(){i.selectionDeferId=null,K1(p,h,x)}),i.previousSelection={start:h,end:x,length:Math.abs(x-h)})},i.getSelection=function(){return mN(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(h){i.setSelection(h,h)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var h=i.maskOptions,x=h.mask,w=h.maskChar,p=h.permanents,m=h.formatChars;return{mask:x,maskChar:w,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:m}},i.isInputAutofilled=function(h,x,w,p){var m=i.getInputDOMNode();try{if(m.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<w.length&&x.end===h.length},i.onChange=function(h){var x=Ci(Ci(i)).beforePasteState,w=Ci(Ci(i)).previousSelection,p=i.props.beforeMaskedValueChange,m=i.getInputValue(),v=i.value,S=i.getSelection();i.isInputAutofilled(m,S,v,w)&&(v=Vn(i.maskOptions,""),w={start:0,end:0,length:0}),x&&(w=x.selection,v=x.value,S={start:w.start+m.length,end:w.start+m.length,length:0},m=v.slice(0,w.start)+m+v.slice(w.end),i.beforePasteState=null);var E=wN(i.maskOptions,m,S,v,w),P=E.enteredString,k=E.selection,_=E.value;if(St(p)){var $=p({value:_,selection:k},{value:v,selection:w},P,i.getBeforeMaskedValueChangeConfig());_=$.value,k=$.selection}i.setInputValue(_),St(i.props.onChange)&&i.props.onChange(h),i.isWindowsPhoneBrowser?i.setSelection(k.start,k.end,{deferred:!0}):i.setSelection(k.start,k.end)},i.onFocus=function(h){var x=i.props.beforeMaskedValueChange,w=i.maskOptions,p=w.mask,m=w.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)Zo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var v=Vn(i.maskOptions,m),S=Vn(i.maskOptions,v),E=Zo(i.maskOptions,S),P=da(i.maskOptions,E),k={start:P,end:P};if(St(x)){var _=x({value:S,selection:k},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=_.value,k=_.selection}var $=S!==i.getInputValue();$&&i.setInputValue(S),$&&St(i.props.onChange)&&i.props.onChange(h),i.setSelection(k.start,k.end)}i.runSaveSelectionLoop()}St(i.props.onFocus)&&i.props.onFocus(h)},i.onBlur=function(h){var x=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&Z1(i.maskOptions,i.value)){var p="";St(x)&&(p=x({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var m=p!==i.getInputValue();m&&i.setInputValue(p),m&&St(i.props.onChange)&&i.props.onChange(h)}St(i.props.onBlur)&&i.props.onBlur(h)},i.onMouseDown=function(h){if(!i.focused&&document.addEventListener){i.mouseDownX=h.clientX,i.mouseDownY=h.clientY,i.mouseDownTime=new Date().getTime();var x=function w(p){if(document.removeEventListener("mouseup",w),i.focused){var m=Math.abs(p.clientX-i.mouseDownX),v=Math.abs(p.clientY-i.mouseDownY),S=Math.max(m,v),E=new Date().getTime()-i.mouseDownTime;(S<=10&&E<=200||S<=5&&E<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",x)}St(i.props.onMouseDown)&&i.props.onMouseDown(h)},i.onPaste=function(h){St(i.props.onPaste)&&i.props.onPaste(h),h.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(h){i.props.children==null&&St(i.props.inputRef)&&i.props.inputRef(h)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,c=r.beforeMaskedValueChange,u=r.defaultValue,d=r.value;i.maskOptions=Q1(o,a,l),u==null&&(u=""),d==null&&(d=u);var y=lf(d);if(i.maskOptions.mask&&(s||y)&&(y=Vn(i.maskOptions,y),St(c))){var g=r.value;r.value==null&&(g=u),y=c({value:y,selection:null},{value:g=lf(g),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=y,i}fN(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=SN(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,c=i.formatChars,u=this.maskOptions,d=a||this.isFocused(),y=this.props.value!=null,g=y?lf(this.props.value):this.value,h=r?r.start:null;if(this.maskOptions=Q1(l,s,c),this.maskOptions.mask){!u.mask&&this.isFocused()&&this.runSaveSelectionLoop();var x=this.maskOptions.mask&&this.maskOptions.mask!==u.mask;if(u.mask||y||(g=this.getInputValue()),(x||this.maskOptions.mask&&(g||d))&&(g=Vn(this.maskOptions,g)),x){var w=Zo(this.maskOptions,g);(h===null||w<h)&&(h=GC(this.maskOptions,g)?w:da(this.maskOptions,w))}!this.maskOptions.mask||!Z1(this.maskOptions,g)||d||y&&this.props.value||(g="");var p={start:h,end:h};if(St(o)){var m=o({value:g,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());g=m.value,p=m.selection}this.value=g;var v=this.getInputValue()!==this.value;v?(this.setInputValue(this.value),this.forceUpdate()):x&&this.forceUpdate();var S=!1;p.start!=null&&p.end!=null&&(S=!r||r.start!==p.start||r.end!==p.end),(S||v)&&this.setSelection(p.start,p.end)}else u.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&cf(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=pN(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){St(o)||X1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Zp({},a);l.forEach(function(u){return delete s[u]}),r=o(s),l.filter(function(u){return r.props[u]!=null&&r.props[u]!==a[u]}).length&&X1(!1)}else r=sf.createElement("input",Zp({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),r=sf.cloneElement(r,c)},t}(sf.Component),EN=_N;HC.exports=EN;var kN=HC.exports;const TN=Ba(kN);C.div`
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
`;const PN=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:"Контактні дані"}),f.jsxs(uf,{children:[f.jsx(df,{children:"Прізвище та ім’я"}),f.jsx(ff,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&f.jsx(pf,{children:n.fullName})]}),f.jsxs(uf,{children:[f.jsx(df,{children:"Номер телефону"}),f.jsx(TN,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>f.jsx(ff,{...i,type:"tel"})}),n.phone&&f.jsx(pf,{children:n.phone})]}),f.jsxs(uf,{children:[f.jsx(df,{children:"E-mail"}),f.jsx(ff,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&f.jsx(pf,{children:n.email})]})]})},ON=C.div`
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
`;const jN=C.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,$N=C.div`
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
`;const MN=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),f.jsx(Fu,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&f.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},ey={}.VITE_NP_API_KEY,ty="https://api.novaposhta.ua/v2.0/json/",IN=()=>{const e=Re(A=>A.cart.items),t=$t(),n=Wt(),[r,i]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[o,a]=b.useState(""),[l,s]=b.useState(null),[c,u]=b.useState(null),[d,y]=b.useState(null),[g,h]=b.useState(null),[x,w]=b.useState([]),[p,m]=b.useState([]),[v,S]=b.useState(null),E=e.reduce((A,R)=>A+(R.new_price??R.price)*R.quantity,0),P=e.reduce((A,R)=>A+R.quantity,0),_=(()=>{const A=new Date().getFullYear().toString().slice(-2),R=Date.now().toString().slice(-4),T=Math.floor(100+Math.random()*900);return`${A}${R}${T}`})();b.useEffect(()=>{if(o.length<2)return;const A=setTimeout(async()=>{const T=await(await fetch(ty,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:ey,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:o}})})).json();w(T.data.map(j=>({value:j.Ref,label:j.Description})))},500);return()=>clearTimeout(A)},[o]),b.useEffect(()=>{if(!l||c!=="nova")return;(async()=>{const T=await(await fetch(ty,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:ey,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:l.value}})})).json();m(T.data.map(j=>({value:j.Ref,label:j.Description})))})()},[l,c]);const $=A=>{s(A),i(R=>({...R,city:(A==null?void 0:A.label)||"",postOffice:""})),u(null),y(null),h(null)},M=()=>{const A={};return r.fullName.trim().split(" ").length<2&&(A.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(A.email="Некоректний email"),r.phone.replace(/\D/g,"").length<12&&(A.phone="Номер неповний"),l||(A.city=!0),c==="nova"&&!d&&(A.postOffice=!0),c==="ukr"&&!g&&(A.postOffice=!0),c||(A.delivery=!0),v||(A.payment=!0),A},I=b.useMemo(M,[r,c,d,g,l,v]),D=Object.keys(I).length===0&&e.length>0,O=async A=>{if(A.preventDefault(),!v){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:r.fullName,phone:r.phone,email:r.email,city:r.city,products:e==null?void 0:e.map(T=>({id:T.id,name:T.name,quantity:T.quantity,price:T.new_price??T.price})),status_order:"pending",order_number:_,payment_method:v==="liqpay"?"Онлайн (LiqPay)":v==="cod"?"Післяплата":v==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:c==="nova"?"Нова Пошта":c==="ukr"?"УкрПошта":"Самовивіз",delivery_address:c==="nova"?d==null?void 0:d.label:c==="ukr"?g:"Самовивіз"}})}),v==="liqpay"){const T=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:E,order_number:_})}),{data:j,signature:z}=await T.json(),B=document.createElement("form");B.method="POST",B.action="https://www.liqpay.ua/api/3/checkout",B.innerHTML=`
        <input type="hidden" name="data" value="${j}" />
        <input type="hidden" name="signature" value="${z}" />
      `,document.body.appendChild(B),B.requestSubmit();return}const R={...r,name:r.fullName,city:l.label,deliveryMethod:c==="nova"?"Нова Пошта":c==="ukr"?"УкрПошта":"Самовивіз",address:c==="nova"?d==null?void 0:d.label:c==="ukr"?g:"Самовивіз",products:e==null?void 0:e.map(T=>({id:T.id,name:T.name,quantity:T.quantity,price:T.new_price??T.price})),total:E,order_number:_,delivery_address:c==="nova"?d==null?void 0:d.label:c==="ukr"?g:"Самовивіз",payment_method:v==="liqpay"?"Онлайн (LiqPay)":v==="cod"?"Післяплата":v==="bank_transfer"?"Оплата за реквізитами":""};n(Ja()),t("/order-confirmation",{state:{order:R}})}catch(R){console.error(R),alert("Помилка оформлення")}},F=b.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),L=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return f.jsx(ON,{children:f.jsxs(jN,{children:[f.jsxs($N,{children:[f.jsx(PN,{formData:r,setFormData:i,errors:I}),f.jsx(Gz,{cityOptions:x,selectedCity:l,onChange:$,onInputChange:a}),f.jsx(Xz,{options:F,value:c,onChange:u,selectedCity:l}),f.jsx(Kz,{deliveryMethod:c,officeOptions:p,selectedOffice:d,selectedUkrOffice:g,setSelectedOffice:y,setSelectedUkrOffice:h}),f.jsx(MN,{options:L,value:v,onChange:S,error:I.payment})]}),f.jsx(lN,{cartItems:e,totalAmount:E,totalQuantity:P,isFormValid:D,handleSubmit:O})]})})},DN=C.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,LN=C.h1`
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
`,AN=C.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,RN=C.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,FN=C.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,zN=C.li`
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
`;const NN=C.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,ny=C.button`
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
`,BN=()=>{var y,g;const e=$t(),t=er(),[n]=AE(),r=Wt(),i=(y=t.state)==null?void 0:y.order,o=n.get("orderId"),[a,l]=b.useState(i||null),[s,c]=b.useState(!i);b.useEffect(()=>{r(Ja())},[r]),b.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(h=>h.json()).then(h=>{var x;((x=h.data)==null?void 0:x.length)>0&&l(h.data[0]),c(!1)}).catch(()=>c(!1)):c(!1))},[o,i]);const d=((a==null?void 0:a.products)??[]).reduce((h,x)=>h+Number(x.new_price??x.price)*(x.quantity||1),0);return s?f.jsx("div",{children:"Завантаження..."}):a?f.jsxs(DN,{children:[f.jsx(LN,{children:"Дякуємо за ваше замовлення!"}),f.jsxs(Ar,{children:["Ваше замовлення ",f.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),f.jsx(Ar,{children:"Ми зв’яжемось з Вами в найближчий час"}),f.jsxs(AN,{children:[f.jsx(RN,{children:"Деталі замовлення:"}),f.jsx(FN,{children:(g=a.products)==null?void 0:g.map(h=>f.jsxs(zN,{children:[f.jsxs("span",{className:"item-info",children:[h.name," (x",h.quantity,")"]}),f.jsxs("span",{className:"item-price",children:[(h.new_price??h.price)*(h.quantity||1)," грн"]})]},h.id))}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"На суму:"})," ",d," грн."]}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),f.jsxs(NN,{children:[f.jsx(ny,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),f.jsx(ny,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):f.jsxs("div",{children:["Замовлення не знайдено",f.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},VN=C.section`
  background-color: var(--second-background);
`,UN=C.div`
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
`,WN=C.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,HN=C.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,GN=C.p`

  font-size: 16px;
  color: #666;
`,qN=C.section`
  margin-bottom: 50px;
`,YN=C.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,XN=C.section`
  margin-bottom: 60px;
`,KN=C.h2`
  margin-bottom: 30px;
`,QN=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,As=C.div`
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
`,ZN=()=>f.jsxs(VN,{children:[f.jsxs(UN,{children:[f.jsxs(WN,{children:[f.jsx(HN,{children:"Про Дідів Хлів"}),f.jsx(GN,{children:"Даємо друге життя якісним велозапчастинам"})]}),f.jsxs(qN,{children:[f.jsx(YN,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),f.jsx(I2,{})]}),f.jsxs(XN,{children:[f.jsx(KN,{children:"Наша майстерня"}),f.jsxs(QN,{children:[f.jsx(As,{color:"#e2e2e2",children:"Фото майстерні"}),f.jsx(As,{color:"#d1d1d1",children:"Процес діагностики"}),f.jsx(As,{color:"#bcbcbc",children:"Склад запчастин"}),f.jsx(As,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),JN=()=>{const{pathname:e}=er();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},e7=C.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,t7=C.div`
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
`,n7=C.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,r7=C.p`
  color: #585555;
  margin-bottom: 40px;
`,i7=C.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,o7=C.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Rs=C.div`
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
`,a7=C.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,s7=C.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,l7=C.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,c7=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,ry=C.a`
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
`;const u7=C.div`
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

 
`,d7=()=>f.jsx(e7,{children:f.jsxs(t7,{children:[f.jsx(n7,{children:"Контакти"}),f.jsx(r7,{children:"Зв’яжіться з нами для консультації або замовлення"}),f.jsxs(i7,{children:[f.jsxs(o7,{children:[f.jsxs(Rs,{children:[f.jsx("h3",{children:"Адреса"}),f.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),f.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),f.jsxs(Rs,{children:[f.jsx("h3",{children:"Телефон"}),f.jsx("p",{children:"+38 (097) 123-45-67"})]}),f.jsxs(Rs,{children:[f.jsx("h3",{children:"Email"}),f.jsx("p",{children:"didivhliv.com"})]}),f.jsxs(Rs,{children:[f.jsx("h3",{children:"Графік роботи"}),f.jsx("p",{children:"З 11:00 - 20:00"}),f.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),f.jsxs(a7,{children:[f.jsx(s7,{children:"Ми в соцмережах"}),f.jsx(l7,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),f.jsxs(c7,{children:[f.jsxs(ry,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${hn}#icon-instagram`})}),f.jsx("span",{children:"Instagram"})]}),f.jsxs(ry,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${hn}#icon-telegram`})}),f.jsx("span",{children:"Telegram"})]})]}),f.jsx(u7,{children:"Приєднуйся до спільноти!"})]})]})]})}),f7=C.section`
  background-color:  var(--second-background);
`,p7=C.div`
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
  
`,h7=C.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,m7=C.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,g7=C.div`
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
`,v7=C.div`
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
`,y7=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,x7=C.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,b7=C.p`
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
`;const w7=C.div.attrs({className:"card-buttons"})`
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
`,YC=C.div`
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
`,S7=C.div`
  position: relative;
  display: inline-block;
  

`,C7=C.button`
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
`,_7=C.div`
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
`,XC=C.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,KC=C(Te)`
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
  
`,E7=C.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,k7=C.div`
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
`,T7=C.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,P7=C.h1`

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

`,O7=C.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,j7=C.div`
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
`;const $7=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding: 20px;
`,M7=C.p`
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
`,I7=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px 16px;
`;C.span`
  font-size: 16px;
  font-weight: 700;

  &:last-child {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    font-weight: 400;
  }
`;const D7=C.div.attrs({className:"card-buttons"})`
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
`;const L7=C.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,A7=C.div`
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
`,Ei=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,R7=C.button`
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
`,F7=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),i=Re(E=>E.favorites.items),o=Re(E=>E.cart.items),[a,l]=b.useState(!1),[s,c]=b.useState("date"),[u,d]=b.useState("asc"),[y,g]=b.useState(1),[h,x]=b.useState(1),w=$t(),p=Wt(),m=b.useRef(null);b.useEffect(()=>{const E=P=>{m.current&&!m.current.contains(P.target)&&l(!1)};return document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[y]),b.useEffect(()=>{(async()=>{const P=new Date,k=new Date;k.setDate(P.getDate()-7);const _=k.toISOString();try{r(!0);const $=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${_}&pagination[page]=${y}&pagination[pageSize]=24`);if(!$.ok)throw new Error(`HTTP error! Status: ${$.status}`);const M=await $.json();t(M.data),x(M.meta.pagination.pageCount)}catch($){console.error("Помилка при завантаженні продуктів:",$)}finally{r(!1)}})()},[y]);const v=b.useMemo(()=>{const E=[...e],P=k=>k.new_price&&k.new_price<k.price?k.new_price:k.price;switch(s){case"name":return E.sort((k,_)=>u==="asc"?k.name.localeCompare(_.name):_.name.localeCompare(k.name));case"price":return E.sort((k,_)=>{const $=P(k),M=P(_);return u==="asc"?$-M:M-$});case"date":return E.sort((k,_)=>u==="asc"?new Date(k.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(k.createdAt));default:return E}},[s,e,u]),S=(E,P)=>{P.stopPropagation();const k=i.some(_=>_.id===(E==null?void 0:E.id));ui(E,k,p,X)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):v.length===0?f.jsxs(XC,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),f.jsxs(KC,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(Vc,{size:24})]})]}):f.jsxs(f7,{children:[f.jsxs(p7,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(h7,{children:[f.jsx(m7,{children:"Нові товари "}),f.jsxs(S7,{ref:m,children:[f.jsxs(C7,{onClick:()=>l(E=>!E),children:["Сортування",f.jsx(Bc,{strokeWidth:.9,size:22})]}),a&&f.jsxs(_7,{children:[f.jsx(_i,{onClick:()=>{c("name"),d("asc"),l(!1)},children:"А-Я"}),f.jsx(_i,{onClick:()=>{c("name"),d("desc"),l(!1)},children:"Я-А"}),f.jsx(_i,{onClick:()=>{c("price"),d("asc"),l(!1)},children:"Ціна ↑"}),f.jsx(_i,{onClick:()=>{c("price"),d("desc"),l(!1)},children:"Ціна ↓"}),f.jsx(_i,{onClick:()=>{c("date"),d("desc"),l(!1)},children:"Спочатку новіші"}),f.jsx(_i,{onClick:()=>{c("date"),d("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(g7,{children:v.map(E=>{var L,A;const P=i.some(R=>R.id===E.id),k=(E==null?void 0:E.available)??!0,_=o.find(R=>R.id===E.id),M=(_?_.quantity:0)>=(E.stock||0),I=E.new_price&&E.new_price<E.price,D=I?E.new_price:E.price,O=I?Math.round((E.price-E.new_price)/E.price*100):0,F=(R,T)=>{if(T.stopPropagation(),M){X.error("Товар уже у кошику");return}p(Aa({...R,quantity:1})),X.success(`${R.name} додано в кошик!`)};return f.jsxs(v7,{onClick:()=>w(`/product/${E.slug??E.id}`),children:[!k&&f.jsx(fm,{children:"Заброньовано"}),f.jsx(y7,{src:((A=(L=E.images)==null?void 0:L[0])==null?void 0:A.url)||ri,alt:E.name}),f.jsx(b7,{children:E.name}),f.jsxs(x7,{children:[f.jsx($u,{children:f.jsxs(Mu,{children:[f.jsxs(Iu,{$discount:I,children:[D.toLocaleString()," грн"]}),I&&f.jsxs(Du,{children:[E.price.toLocaleString()," грн"]}),I&&f.jsxs(Lu,{children:["-",O,"%"]})]})}),f.jsxs(w7,{children:[k&&f.jsx(vc,{onClick:R=>F(E,R),children:f.jsx(vo,{size:24,color:_?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(vc,{onClick:R=>S(E,R),children:f.jsx(Xa,{size:24,fill:P?"#ff4d4f":"none",color:P?"#ff4d4f":"#000000",strokeWidth:P?1:2})})]})]})]},E.id)})}),f.jsxs(YC,{children:[f.jsx(qi,{onClick:()=>g(E=>Math.max(E-1,1)),disabled:y===1,children:"Назад"}),Array.from({length:h},(E,P)=>f.jsx(qi,{onClick:()=>g(P+1),active:y===P+1,children:P+1},P)),f.jsx(qi,{onClick:()=>g(E=>Math.min(E+1,h)),disabled:y===h,children:"Вперед"})]})]})," "]})},z7=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,o]=b.useState(!1),[a,l]=b.useState("date"),[s,c]=b.useState("desc"),[u,d]=b.useState(1),y=24,g=$t(),h=Wt(),x=Re(_=>_.favorites.items),w=Re(_=>_.cart.items),p=b.useRef(null);b.useEffect(()=>{const _=$=>{p.current&&!p.current.contains($.target)&&o(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),b.useEffect(()=>{(async()=>{const $="https://backenddidiv-production.up.railway.app";try{const I=await(await fetch(`${$}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json();t(I.data),r(!1)}catch(M){console.log(M)}})()},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[u]);const m=b.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort(($,M)=>s==="asc"?$.name.localeCompare(M.name):M.name.localeCompare($.name));case"price":return _.sort(($,M)=>s==="asc"?$.new_price-M.new_price:M.new_price-$.new_price);case"date":return _.sort(($,M)=>s==="asc"?new Date($.createdAt)-new Date(M.createdAt):new Date(M.createdAt)-new Date($.createdAt));default:return _}},[a,e,s]),v=u*y,S=v-y,E=m.slice(S,v),P=Math.ceil(e.length/y),k=(_,$)=>{$.stopPropagation();const M=x.some(I=>I.id===(_==null?void 0:_.id));ui(_,M,h,X)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(di,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?f.jsxs(XC,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),f.jsxs(KC,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(Vc,{size:24})]})]}):f.jsx(E7,{children:f.jsxs(k7,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(T7,{children:[f.jsx(P7,{children:"Акційні товари"}),f.jsxs(L7,{ref:p,children:[f.jsxs(R7,{onClick:()=>o(_=>!_),children:["Сортування",f.jsx(Bc,{strokeWidth:.9,size:22})]}),i&&f.jsxs(A7,{children:[f.jsx(Ei,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),f.jsx(Ei,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),f.jsx(Ei,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(Ei,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(Ei,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(Ei,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(O7,{children:E.map(_=>{var T,j;const $=_.new_price&&_.new_price<_.price,M=$?_.new_price:_.price,I=(_==null?void 0:_.available)??!0,D=$?Math.round((_.price-_.new_price)/_.price*100):0,O=x.some(z=>z.id===_.id),F=w.find(z=>z.id===_.id),A=(F?F.quantity:0)>=(_.stock||0),R=(z,B)=>{if(B.stopPropagation(),A){X.error("Товар уже у кошику");return}h(Aa({...z,quantity:1})),X.success(`${z.name} додано в кошик!`)};return f.jsxs(j7,{onClick:()=>g(`/product/${_.slug??_.id}`),style:{cursor:"pointer"},children:[!I&&f.jsx(fm,{children:"Заброньовано"}),f.jsx($7,{src:((j=(T=_.images)==null?void 0:T[0])==null?void 0:j.url)||"/nofoto.png"}),f.jsx(M7,{children:_.name}),f.jsxs(I7,{children:[f.jsx($u,{children:f.jsxs(Mu,{children:[f.jsxs(Iu,{$discount:$,children:[M.toLocaleString()," грн"]}),$&&f.jsxs(Du,{children:[_.price.toLocaleString()," грн"]}),$&&f.jsxs(Lu,{children:["-",D,"%"]})]})}),f.jsxs(D7,{children:[I&&f.jsx(vc,{onClick:z=>R(_,z),children:f.jsx(vo,{size:24,color:F?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(vc,{onClick:z=>k(_,z),children:f.jsx(Xa,{size:24,fill:O?"#ff4d4f":"none",color:O?"#ff4d4f":"#000000",strokeWidth:O?1:2})})]})]})]},_.id)})}),m.length>y&&f.jsxs(YC,{children:[f.jsx(qi,{onClick:()=>d(_=>Math.max(_-1,1)),disabled:u===1,children:"Назад"}),Array.from({length:P},(_,$)=>f.jsx(qi,{onClick:()=>d($+1),active:u===$+1,children:$+1},$)),f.jsx(qi,{onClick:()=>d(_=>Math.min(_+1,P)),disabled:u===P,children:"Вперед"})]})]})})},N7=C.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;

`,B7=C.div`
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
`,V7=C.button`
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
`,U7=C.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width:768px){
    font-size:42px;
  }
`,W7=C.p`
  text-align:center;
  color:#8d837d;

  margin-bottom:32px;
`,H7=C.div`
  display:flex;

  background:#efe8df;

  border-radius:40px;

  padding:5px;

  margin-bottom:35px;
`,iy=C.button`
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
`,Vo=C.input`
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
`,G7=C.button`
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
`,oy=C.div`
  position: relative;
  width: 100%;
 
`,ay=C.button`
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
`,q7=C.p`
  margin-top:28px;

  text-align:center;

  color:#8b817a;

  font-size:15px;

  span{
      color:#ff7a00;
      cursor:pointer;
      font-weight:600;
  }
`,Y7=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[product][documentId][$eq]=${r.documentId}&populate=user`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=l.user||[];if(s.some(d=>d.documentId===n))return;const u=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{user:[...s.map(d=>d.documentId),n]}})});u.ok||console.error(await u.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:[n]}})});a.ok||console.error(await a.json())}))},X7=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${n}&filters[product][documentId][$eq]=${r.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{quantity:r.quantity}})});s.ok||console.error(await s.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:n,quantity:r.quantity}})});a.ok||console.error(await a.json())}))},K7=async(e,t)=>{const n=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${t}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${e}`}});if(!n.ok)throw new Error("Не вдалося отримати кошик");return(await n.json()).data.map(i=>i.product?{...i.product,quantity:i.quantity}:null).filter(Boolean)},Q7=({isOpen:e,onClose:t,mode:n,setMode:r,localFavorites:i,localCartItems:o})=>{const[a,l]=b.useState(!1),[s,c]=b.useState(!1),[u,d]=b.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),y=Wt();if(b.useEffect(()=>{const p=m=>{m.key==="Escape"&&t()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[t]),!e)return null;const g=p=>{d(m=>({...m,[p.target.name]:p.target.value}))},h=p=>{p.target===p.currentTarget&&t()},x=async()=>{var S;const p=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:u.email,password:u.password})}),m=await p.json();if(!p.ok){alert(((S=m.error)==null?void 0:S.message)||"Помилка авторизації");return}localStorage.setItem("token",m.jwt),localStorage.setItem("user",JSON.stringify(m.user)),await Y7(i,m.jwt,m.user.documentId),await X7(o,m.jwt,m.user.documentId);const v=await K7(m.jwt,m.user.documentId);y(Kw(v)),t()},w=async()=>{if(u.password!==u.confirmPassword){alert("Паролі не співпадають");return}const m=await(await fetch("https://backenddidiv-production.up.railway.app/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u.email,email:u.email,password:u.password})})).json();localStorage.setItem("token",m.jwt);try{const v=localStorage.getItem("token");if(localStorage.setItem("user",JSON.stringify(m.user)),!(await fetch(`https://backenddidiv-production.up.railway.app/api/users/${m.user.id}`,{method:"PUT",headers:{Authorization:`Bearer ${v}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:u.first_name,last_name:u.last_name})})).ok)throw new Error("Помилка оновлення")}catch(v){console.error(v),alert("Не вдалося оновити дані")}t()};return f.jsxs(f.Fragment,{children:[" ",f.jsx(Dn,{autoClose:1500}),f.jsx(N7,{onClick:h,children:f.jsxs(B7,{children:[f.jsx(V7,{onClick:t,children:"×"}),f.jsx(U7,{children:n==="login"?"Вхід":"Реєстрація"}),f.jsx(W7,{children:n==="login"?"Увійдіть до свого акаунта":"Створіть новий акаунт"}),f.jsxs(H7,{children:[f.jsx(iy,{active:n==="login",onClick:()=>r("login"),children:"Вхід"}),f.jsx(iy,{active:n==="register",onClick:()=>r("register"),children:"Реєстрація"})]}),n==="register"&&f.jsxs(f.Fragment,{children:[f.jsx(Vo,{name:"first_name",value:u.first_name,onChange:g,placeholder:"Ім'я"}),f.jsx(Vo,{name:"last_name",value:u.last_name,onChange:g,placeholder:"Прізвище"})]}),f.jsx(Vo,{name:"email",type:"email",value:u.email,onChange:g,placeholder:"Email"}),f.jsxs(oy,{children:[f.jsx(Vo,{name:"password",type:a?"text":"password",value:u.password,onChange:g,placeholder:"Пароль"}),f.jsx(ay,{type:"button",onClick:()=>l(p=>!p),children:a?f.jsx(G0,{size:20}):f.jsx(q0,{size:20})})]}),n==="register"&&f.jsxs(oy,{children:[f.jsx(Vo,{name:"confirmPassword",type:s?"text":"password",value:u.confirmPassword,onChange:g,placeholder:"Повторіть пароль"}),f.jsx(ay,{type:"button",onClick:()=>c(p=>!p),children:a?f.jsx(G0,{size:20}):f.jsx(q0,{size:20})})]}),f.jsx(G7,{onClick:n==="login"?x:w,children:n==="login"?"Увійти":"Зареєструватися"}),f.jsx(q7,{children:n==="login"?f.jsxs(f.Fragment,{children:["Немає акаунта?"," ",f.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):f.jsxs(f.Fragment,{children:["Вже є акаунт?"," ",f.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})," "]})},Z7=({isLoggedIn:e,children:t})=>e?t:f.jsx(CE,{to:"/",replace:!0}),J7=C.main`
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

`,e9=C.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`,t9=C.aside`
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 1440px) {
    position: sticky;
    top: 110px;
  }
`,n9=C.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,r9=C.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,i9=C.h3`
  margin-bottom: 4px;
`,o9=C.p`
  color: #777;
`,sy=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Fs=C(zy)`
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
`;var og="persist:",QC="persist/FLUSH",ag="persist/REHYDRATE",ZC="persist/PAUSE",JC="persist/PERSIST",e_="persist/PURGE",t_="persist/REGISTER",a9=-1;function pl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pl=function(n){return typeof n}:pl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pl(e)}function ly(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function s9(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ly(n,!0).forEach(function(r){l9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ly(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function l9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c9(e,t,n,r){r.debug;var i=s9({},n);return e&&pl(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function u9(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:og).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=d9;var s=e.writeFailHandler||null,c={},u={},d=[],y=null,g=null,h=function(E){Object.keys(E).forEach(function(P){p(P)&&c[P]!==E[P]&&d.indexOf(P)===-1&&d.push(P)}),Object.keys(c).forEach(function(P){E[P]===void 0&&p(P)&&d.indexOf(P)===-1&&c[P]!==void 0&&d.push(P)}),y===null&&(y=setInterval(x,i)),c=E};function x(){if(d.length===0){y&&clearInterval(y),y=null;return}var S=d.shift(),E=r.reduce(function(P,k){return k.in(P,S,c)},c[S]);if(E!==void 0)try{u[S]=l(E)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete u[S];d.length===0&&w()}function w(){Object.keys(u).forEach(function(S){c[S]===void 0&&delete u[S]}),g=a.setItem(o,l(u)).catch(m)}function p(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function m(S){s&&s(S)}var v=function(){for(;d.length!==0;)x();return g||Promise.resolve()};return{update:h,flush:v}}function d9(e){return JSON.stringify(e)}function f9(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:og).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=p9,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(c,u){return u.out(c,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function p9(e){return JSON.parse(e)}function h9(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:og).concat(e.key);return t.removeItem(n,m9)}function m9(e){}function cy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cy(n,!0).forEach(function(r){g9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cy(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function g9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v9(e,t){if(e==null)return{};var n=y9(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function y9(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var x9=5e3;function n_(e,t){var n=e.version!==void 0?e.version:a9;e.debug;var r=e.stateReconciler===void 0?c9:e.stateReconciler,i=e.getStoredState||f9,o=e.timeout!==void 0?e.timeout:x9,a=null,l=!1,s=!0,c=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(u,d){var y=u||{},g=y._persist,h=v9(y,["_persist"]),x=h;if(d.type===JC){var w=!1,p=function(_,$){w||(d.rehydrate(e.key,_,$),w=!0)};if(o&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=u9(e)),g)return Ln({},t(x,d),{_persist:g});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(k){var _=e.migrate||function($,M){return Promise.resolve($)};_(k,n).then(function($){p($)},function($){p(void 0,$)})},function(k){p(void 0,k)}),Ln({},t(x,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===e_)return l=!0,d.result(h9(e)),Ln({},t(x,d),{_persist:g});if(d.type===QC)return d.result(a&&a.flush()),Ln({},t(x,d),{_persist:g});if(d.type===ZC)s=!0;else if(d.type===ag){if(l)return Ln({},x,{_persist:Ln({},g,{rehydrated:!0})});if(d.key===e.key){var m=t(x,d),v=d.payload,S=r!==!1&&v!==void 0?r(v,u,m,e):m,E=Ln({},S,{_persist:Ln({},g,{rehydrated:!0})});return c(E)}}}if(!g)return t(u,d);var P=t(x,d);return P===x?u:c(Ln({},P,{_persist:g}))}}function uy(e){return S9(e)||w9(e)||b9()}function b9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function w9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function S9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function dy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function eh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dy(n,!0).forEach(function(r){C9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dy(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function C9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r_={registry:[],bootstrapped:!1},_9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case t_:return eh({},t,{registry:[].concat(uy(t.registry),[n.key])});case ag:var r=t.registry.indexOf(n.key),i=uy(t.registry);return i.splice(r,1),eh({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function E9(e,t,n){var r=n||!1,i=hm(_9,r_,t&&t.enhancer?t.enhancer:void 0),o=function(c){i.dispatch({type:t_,key:c})},a=function(c,u,d){var y={type:ag,payload:u,err:d,key:c};e.dispatch(y),i.dispatch(y),r&&l.getState().bootstrapped&&(r(),r=!1)},l=eh({},i,{purge:function(){var c=[];return e.dispatch({type:e_,result:function(d){c.push(d)}}),Promise.all(c)},flush:function(){var c=[];return e.dispatch({type:QC,result:function(d){c.push(d)}}),Promise.all(c)},pause:function(){e.dispatch({type:ZC})},persist:function(){e.dispatch({type:JC,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var sg={},lg={};lg.__esModule=!0;lg.default=P9;function hl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hl=function(n){return typeof n}:hl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hl(e)}function hf(){}var k9={getItem:hf,setItem:hf,removeItem:hf};function T9(e){if((typeof self>"u"?"undefined":hl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function P9(e){var t="".concat(e,"Storage");return T9(t)?self[t]:k9}sg.__esModule=!0;sg.default=$9;var O9=j9(lg);function j9(e){return e&&e.__esModule?e:{default:e}}function $9(e){var t=(0,O9.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var cg=void 0,M9=I9(sg);function I9(e){return e&&e.__esModule?e:{default:e}}var D9=(0,M9.default)("local");cg=D9;const L9={key:"cart",storage:cg},A9={key:"favorites",storage:cg},R9=n_(L9,R$),F9=n_(A9,j$),i_=g$({reducer:{cart:R9,favorites:F9},middleware:e=>e({serializableCheck:!1})}),z9=E9(i_),N9=()=>{var l,s;const[e,t]=b.useState(""),[n,r]=b.useState(""),i=Wt(),o=$t();b.useEffect(()=>{(async()=>{try{const u=localStorage.getItem("token"),y=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${u}`}})).json();t(y.first_name),r(y.email)}catch(u){console.error(u)}})()},[]);const a=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),i(P$()),i(Ja()),await z9.purge(),o("/",{replace:!0})};return f.jsxs(t9,{children:[f.jsxs(n9,{children:[f.jsx(r9,{children:((s=(l=e||e)==null?void 0:l[0])==null?void 0:s.toUpperCase())||"?"}),f.jsxs("div",{children:[f.jsx(i9,{children:e}),f.jsx(o9,{children:n})]})]}),f.jsxs(sy,{children:[f.jsxs(sy,{children:[f.jsx(Fs,{$active:!0,to:"/account/profile",children:"Особисті дані"}),f.jsx(Fs,{to:"/account/orders",children:"Замовлення"}),f.jsx(Fs,{to:"/account/password",children:"Змінити пароль"})]}),f.jsx(Fs,{onClick:a,children:"Вийти"})]})]})};var ug={};ug.match=G9;ug.parse=o_;var B9=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,V9=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,U9=/^(?:(min|max)-)?(.+)/,W9=/(em|rem|px|cm|mm|in|pt|pc)?$/,H9=/(dpi|dpcm|dppx)?$/;function G9(e,t){return o_(e).some(function(n){var r=n.inverse,i=n.type==="all"||t.type===n.type;if(i&&r||!(i||r))return!1;var o=n.expressions.every(function(a){var l=a.feature,s=a.modifier,c=a.value,u=t[l];if(!u)return!1;switch(l){case"orientation":case"scan":return u.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=hy(c),u=hy(u);break;case"resolution":c=py(c),u=py(u);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=fy(c),u=fy(u);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,u=parseInt(u,10)||0;break}switch(s){case"min":return u>=c;case"max":return u<=c;default:return u===c}});return o&&!r||!o&&r})}function o_(e){return e.split(",").map(function(t){t=t.trim();var n=t.match(B9),r=n[1],i=n[2],o=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(l){var s=l.match(V9),c=s[1].toLowerCase().match(U9);return{modifier:c[1],feature:c[2],value:s[2]}}),a})}function fy(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function py(e){var t=parseFloat(e),n=String(e).match(H9)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function hy(e){var t=parseFloat(e),n=String(e).match(W9)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var q9=ug.match,my=typeof window<"u"?window.matchMedia:null;function Y9(e,t,n){var r=this,i;my&&!n&&(i=my.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=q9(e,t),this.media=e),this.addListener=o,this.removeListener=a,this.dispose=s;function o(c){i&&i.addListener(c)}function a(c){i&&i.removeListener(c)}function l(c){r.matches=c.matches,r.media=c.media}function s(){i&&i.removeListener(l)}}function X9(e,t,n){return new Y9(e,t,n)}var K9=X9;const Q9=Ba(K9);var Z9=/[A-Z]/g,J9=/^ms-/,mf={};function eB(e){return"-"+e.toLowerCase()}function a_(e){if(mf.hasOwnProperty(e))return mf[e];var t=e.replace(Z9,eB);return mf[e]=J9.test(t)?"-"+t:t}function tB(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let o=0;o<i;o++){const a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var s_={exports:{}},nB="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rB=nB,iB=rB;function l_(){}function c_(){}c_.resetWarningCache=l_;var oB=function(){function e(r,i,o,a,l,s){if(s!==iB){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c_,resetWarningCache:l_};return n.PropTypes=n,n};s_.exports=oB();var aB=s_.exports;const fe=Ba(aB),pt=fe.oneOfType([fe.string,fe.number]),dg={all:fe.bool,grid:fe.bool,aural:fe.bool,braille:fe.bool,handheld:fe.bool,print:fe.bool,projection:fe.bool,screen:fe.bool,tty:fe.bool,tv:fe.bool,embossed:fe.bool},u_={orientation:fe.oneOf(["portrait","landscape"]),scan:fe.oneOf(["progressive","interlace"]),aspectRatio:fe.string,deviceAspectRatio:fe.string,height:pt,deviceHeight:pt,width:pt,deviceWidth:pt,color:fe.bool,colorIndex:fe.bool,monochrome:fe.bool,resolution:pt,type:Object.keys(dg)},{type:LB,...sB}=u_,d_={minAspectRatio:fe.string,maxAspectRatio:fe.string,minDeviceAspectRatio:fe.string,maxDeviceAspectRatio:fe.string,minHeight:pt,maxHeight:pt,minDeviceHeight:pt,maxDeviceHeight:pt,minWidth:pt,maxWidth:pt,minDeviceWidth:pt,maxDeviceWidth:pt,minColor:fe.number,maxColor:fe.number,minColorIndex:fe.number,maxColorIndex:fe.number,minMonochrome:fe.number,maxMonochrome:fe.number,minResolution:pt,maxResolution:pt,...sB},lB={...dg,...d_};var cB={all:lB,types:dg,matchers:u_,features:d_};const uB=e=>`not ${e}`,dB=(e,t)=>{const n=a_(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?uB(n):`(${n}: ${t})`},fB=e=>e.join(" and "),pB=e=>{const t=[];return Object.keys(cB.all).forEach(n=>{const r=e[n];r!=null&&t.push(dB(n,r))}),fB(t)},hB=b.createContext(void 0),mB=e=>e.query||pB(e),gy=e=>e?Object.keys(e).reduce((n,r)=>(n[a_(r)]=e[r],n),{}):void 0,f_=()=>{const e=b.useRef(!1);return b.useEffect(()=>{e.current=!0},[]),e.current},gB=e=>{const t=b.useContext(hB),n=()=>gy(e)||gy(t),[r,i]=b.useState(n);return b.useEffect(()=>{const o=n();tB(r,o)||i(o)},[e,t]),r},vB=e=>{const t=()=>mB(e),[n,r]=b.useState(t);return b.useEffect(()=>{const i=t();n!==i&&r(i)},[e]),n},yB=(e,t)=>{const n=()=>Q9(e,t||{},!!t),[r,i]=b.useState(n),o=f_();return b.useEffect(()=>{if(o){const a=n();return i(a),()=>{a&&a.dispose()}}},[e,t]),r},xB=e=>{const[t,n]=b.useState(e.matches);return b.useEffect(()=>{const r=i=>{n(i.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},bB=(e,t,n)=>{const r=gB(t),i=vB(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const o=yB(i,r),a=xB(o),l=f_();return b.useEffect(()=>{l&&n&&n(a)},[a]),b.useEffect(()=>()=>{o&&o.dispose()},[]),a},wB=C.div`
  margin-bottom: 24px;
`,SB=C.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,CB=C.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,_B=C.h3`
  margin-bottom: 4px;
`,EB=C.p`
  color: #777;
`,kB=C.button`
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
`,TB=C.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`,Uo=C(zy)`
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
`,PB=()=>{var s,c;const[e,t]=b.useState(!1),[n,r]=b.useState(""),[i,o]=b.useState("");b.useEffect(()=>{(async()=>{try{const d=localStorage.getItem("token"),g=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${d}`}})).json();r(g.first_name),o(g.email)}catch(d){console.error(d)}})()},[]);const l={"/account":"Особисті дані","/account/profile":"Особисті дані","/account/orders":"Замовлення","/account/favorites":"Обране","/account/password":"Змінити пароль"}[location.pathname]||"Особисті дані";return f.jsxs(wB,{children:[f.jsxs(SB,{children:[f.jsx(CB,{children:((c=(s=n||n)==null?void 0:s[0])==null?void 0:c.toUpperCase())||"?"}),f.jsxs("div",{children:[f.jsx(_B,{children:n}),f.jsx(EB,{children:i})]})]}),f.jsxs(kB,{onClick:()=>t(u=>!u),children:[l,e?f.jsx(cj,{size:22}):f.jsx(sj,{size:22})]}),e&&f.jsxs(TB,{children:[f.jsx(Uo,{to:"/account/profile",onClick:()=>t(!1),children:"Особисті дані"}),f.jsx(Uo,{to:"/account/orders",onClick:()=>t(!1),children:"Замовлення"}),f.jsx(Uo,{to:"/account/favorites",onClick:()=>t(!1),children:"Обране"}),f.jsx(Uo,{to:"/account/password",onClick:()=>t(!1),children:"Змінити пароль"}),f.jsx(Uo,{to:"/",children:"Вийти"})]})]})},OB=()=>{const e=bB({maxWidth:767});return f.jsxs(J7,{className:"container",children:[e?f.jsx(PB,{}):f.jsx(N9,{}),f.jsx(e9,{children:f.jsx(Ry,{})})]})},jB=C.div`
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
`,$B=C.h2`
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
`,MB=C.button`
  width: 220px;
  height: 52px;

  border: none;
  border-radius: 14px;

  background: #ef7d1a;
  color: white;

  cursor: pointer;
`,vy=()=>{const[e,t]=b.useState({first_name:"",last_name:"",email:"",phone:""}),[n,r]=b.useState(null),[i,o]=b.useState(!0);b.useEffect(()=>{(async()=>{try{const c=localStorage.getItem("token"),d=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${c}`}})).json();r(d.id),t({first_name:d.first_name||"",last_name:d.last_name||"",email:d.email||"",phone:d.phone||""})}catch(c){console.error(c)}finally{o(!1)}})()},[]);const a=s=>{const{name:c,value:u}=s.target;t(d=>({...d,[c]:u}))},l=async()=>{try{const s=localStorage.getItem("token");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/users/${n}`,{method:"PUT",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:e.first_name,last_name:e.last_name,phone:e.phone})})).ok)throw new Error("Помилка оновлення");X.success("Дані оновлено успішно")}catch(s){console.error(s),X.error("Не вдалось оновити дані")}};return i?f.jsx("p",{children:"Завантаження..."}):f.jsxs(jB,{children:[f.jsx(Dn,{autoClose:1500}),f.jsx($B,{children:"Особисті дані"}),f.jsxs(zs,{children:["Ім я",f.jsx(Ns,{name:"first_name",value:e.first_name,onChange:a})]}),f.jsxs(zs,{children:["Прізвище",f.jsx(Ns,{name:"last_name",value:e.last_name,onChange:a})]}),f.jsxs(zs,{children:["Email",f.jsx(Ns,{value:e.email,disabled:!0})]}),f.jsxs(zs,{children:["Телефон",f.jsx(Ns,{name:"phone",value:e.phone,onChange:a})]}),f.jsx(MB,{onClick:l,children:"Зберегти"})]})};function IB(){const e=Wt(),[t,n]=b.useState(!1),[r,i]=b.useState("login"),o=!!localStorage.getItem("token"),a=localStorage.getItem("token"),l=JSON.parse(localStorage.getItem("user")||"null"),s=l==null?void 0:l.documentId,c=Re(d=>d.favorites.items),u=Re(d=>d.cart.items);return b.useEffect(()=>{if(!a||!s)return;(async()=>{const y=localStorage.getItem("token");if(!y)return;const x=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${s}&populate=product.images`,{headers:{Authorization:`Bearer ${y}`}})).json()).data.map(w=>({...w.product,favoriteId:w.id,favoriteDocumentId:w.documentId}));e(O$(x))})()},[s,e,a]),f.jsxs(p5,{children:[f.jsx(XM,{}),f.jsx(JN,{}),f.jsxs(b.Suspense,{fallback:f.jsx(qM,{}),children:[f.jsx(EE,{children:f.jsxs(Ne,{path:"/",element:f.jsx(Lj,{openLogin:()=>{i("login"),n(!0)},openRegister:()=>{i("register"),n(!0)}}),children:[f.jsx(Ne,{index:!0,element:f.jsx(UD,{})}),f.jsx(Ne,{path:"catalog",element:f.jsx(s5,{})}),f.jsx(Ne,{path:"/catalog/:category",element:f.jsx(D6,{})}),f.jsx(Ne,{path:"/product/:identifier",element:f.jsx(YA,{})}),f.jsx(Ne,{path:"cart",element:f.jsx(CR,{})}),f.jsx(Ne,{path:"favorite",element:f.jsx(HR,{})}),f.jsx(Ne,{path:"/catalog/new",element:f.jsx(F7,{})}),f.jsx(Ne,{path:"/catalog/sale",element:f.jsx(z7,{})}),f.jsx(Ne,{path:"checkout",element:f.jsx(IN,{})}),f.jsx(Ne,{path:"/order-confirmation",element:f.jsx(BN,{})}),f.jsx(Ne,{path:"about",element:f.jsx(ZN,{})}),f.jsx(Ne,{path:"contacts",element:f.jsx(d7,{})}),f.jsx(Ne,{path:"delivery",element:f.jsx(QR,{})}),f.jsxs(Ne,{path:"account",element:f.jsx(Z7,{isLoggedIn:o,children:f.jsx(OB,{})}),children:[f.jsx(Ne,{index:!0,element:f.jsx(vy,{})}),f.jsx(Ne,{path:"profile",element:f.jsx(vy,{})})]}),f.jsx(Ne,{path:"*",element:f.jsx(f5,{})})]})}),f.jsx(Q7,{localFavorites:c,localCartItems:u,isOpen:t,mode:r,onClose:()=>n(!1),setMode:i})]})]})}bf.createRoot(document.getElementById("root")).render(f.jsx(DO,{store:i_,children:f.jsx(K.StrictMode,{children:f.jsx(ME,{basename:"/Didiv/",children:f.jsx(IB,{})})})}));
