function fC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ba(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function jt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var vy={exports:{}},vc={},yy={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),pC=Symbol.for("react.portal"),hC=Symbol.for("react.fragment"),mC=Symbol.for("react.strict_mode"),gC=Symbol.for("react.profiler"),vC=Symbol.for("react.provider"),yC=Symbol.for("react.context"),xC=Symbol.for("react.forward_ref"),bC=Symbol.for("react.suspense"),wC=Symbol.for("react.memo"),SC=Symbol.for("react.lazy"),hg=Symbol.iterator;function _C(e){return e===null||typeof e!="object"?null:(e=hg&&e[hg]||e["@@iterator"],typeof e=="function"?e:null)}var xy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},by=Object.assign,wy={};function fo(e,t,n){this.props=e,this.context=t,this.refs=wy,this.updater=n||xy}fo.prototype.isReactComponent={};fo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sy(){}Sy.prototype=fo.prototype;function nh(e,t,n){this.props=e,this.context=t,this.refs=wy,this.updater=n||xy}var rh=nh.prototype=new Sy;rh.constructor=nh;by(rh,fo.prototype);rh.isPureReactComponent=!0;var mg=Array.isArray,_y=Object.prototype.hasOwnProperty,ih={current:null},Cy={key:!0,ref:!0,__self:!0,__source:!0};function Ey(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)_y.call(t,r)&&!Cy.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Va,type:e,key:o,ref:a,props:i,_owner:ih.current}}function CC(e,t){return{$$typeof:Va,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Va}function EC(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gg=/\/+/g;function Uu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?EC(""+e.key):t.toString(36)}function Ns(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Va:case pC:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Uu(a,0):r,mg(i)?(n="",e!=null&&(n=e.replace(gg,"$&/")+"/"),Ns(i,t,n,"",function(c){return c})):i!=null&&(oh(i)&&(i=CC(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(gg,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",mg(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Uu(o,l);a+=Ns(o,t,n,s,i)}else if(s=_C(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Uu(o,l++),a+=Ns(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function as(e,t,n){if(e==null)return e;var r=[],i=0;return Ns(e,r,"","",function(o){return t.call(n,o,i++)}),r}function kC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},Bs={transition:null},TC={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Bs,ReactCurrentOwner:ih};re.Children={map:as,forEach:function(e,t,n){as(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return as(e,function(){t++}),t},toArray:function(e){return as(e,function(t){return t})||[]},only:function(e){if(!oh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=fo;re.Fragment=hC;re.Profiler=gC;re.PureComponent=nh;re.StrictMode=mC;re.Suspense=bC;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TC;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=by({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ih.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)_y.call(t,s)&&!Cy.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Va,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:yC,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vC,_context:e},e.Consumer=e};re.createElement=Ey;re.createFactory=function(e){var t=Ey.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:xC,render:e}};re.isValidElement=oh;re.lazy=function(e){return{$$typeof:SC,_payload:{_status:-1,_result:e},_init:kC}};re.memo=function(e,t){return{$$typeof:wC,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Bs.transition;Bs.transition={};try{e()}finally{Bs.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return yt.current.useCallback(e,t)};re.useContext=function(e){return yt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};re.useEffect=function(e,t){return yt.current.useEffect(e,t)};re.useId=function(){return yt.current.useId()};re.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return yt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};re.useRef=function(e){return yt.current.useRef(e)};re.useState=function(e){return yt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return yt.current.useTransition()};re.version="18.2.0";yy.exports=re;var b=yy.exports;const X=Ba(b),vf=fC({__proto__:null,default:X},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PC=b,OC=Symbol.for("react.element"),jC=Symbol.for("react.fragment"),$C=Object.prototype.hasOwnProperty,MC=PC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IC={key:!0,ref:!0,__self:!0,__source:!0};function ky(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)$C.call(t,r)&&!IC.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:OC,type:e,key:o,ref:a,props:i,_owner:MC.current}}vc.Fragment=jC;vc.jsx=ky;vc.jsxs=ky;vy.exports=vc;var f=vy.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pa.apply(this,arguments)}var fr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(fr||(fr={}));const vg="popstate";function DC(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return yf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hl(i)}return AC(t,n,null,e)}function Me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ah(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function LC(){return Math.random().toString(36).substr(2,8)}function yg(e,t){return{usr:e.state,key:e.key,idx:t}}function yf(e,t,n,r){return n===void 0&&(n=null),pa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?po(t):t,{state:n,key:t&&t.key||r||LC()})}function hl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function po(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function AC(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=fr.Pop,s=null,c=u();c==null&&(c=0,a.replaceState(pa({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function d(){l=fr.Pop;let w=u(),p=w==null?null:w-c;c=w,s&&s({action:l,location:y.location,delta:p})}function v(w,p){l=fr.Push;let m=yf(y.location,w,p);n&&n(m,w),c=u()+1;let x=yg(m,c),S=y.createHref(m);try{a.pushState(x,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&s&&s({action:l,location:y.location,delta:1})}function g(w,p){l=fr.Replace;let m=yf(y.location,w,p);n&&n(m,w),c=u();let x=yg(m,c),S=y.createHref(m);a.replaceState(x,"",S),o&&s&&s({action:l,location:y.location,delta:0})}function h(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:hl(w);return Me(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let y={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(vg,d),s=w,()=>{i.removeEventListener(vg,d),s=null}},createHref(w){return t(i,w)},createURL:h,encodeLocation(w){let p=h(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:v,replace:g,go(w){return a.go(w)}};return y}var xg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xg||(xg={}));function RC(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?po(t):t,i=sh(r.pathname||"/",n);if(i==null)return null;let o=Ty(e);FC(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=qC(o[l],KC(i));return a}function Ty(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Me(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=vr([r,s.relativePath]),u=n.concat(s);o.children&&o.children.length>0&&(Me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ty(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:HC(c,o.index),routesMeta:u})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Py(o.path))i(o,a,s)}),t}function Py(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Py(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function FC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:GC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zC=/^:\w+$/,NC=3,BC=2,VC=1,UC=10,WC=-2,bg=e=>e==="*";function HC(e,t){let n=e.split("/"),r=n.length;return n.some(bg)&&(r+=WC),t&&(r+=BC),n.filter(i=>!bg(i)).reduce((i,o)=>i+(zC.test(o)?NC:o===""?VC:UC),r)}function GC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function qC(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",u=YC({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!u)return null;Object.assign(r,u.params);let d=l.route;o.push({params:r,pathname:vr([i,u.pathname]),pathnameBase:eE(vr([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=vr([i,u.pathnameBase]))}return o}function YC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=XC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let v=l[d]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return c[u]=QC(l[d]||"",u),c},{}),pathname:o,pathnameBase:a,pattern:e}}function XC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ah(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function KC(e){try{return decodeURI(e)}catch(t){return ah(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function QC(e,t){try{return decodeURIComponent(e)}catch(n){return ah(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function sh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ZC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?po(e):e;return{pathname:n?n.startsWith("/")?n:JC(n,t):t,search:tE(r),hash:nE(i)}}function JC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ch(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=po(e):(i=pa({},e),Me(!i.pathname||!i.pathname.includes("?"),Wu("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),Wu("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),Wu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),d-=1;i.pathname=v.join("/")}l=d>=0?t[d]:"/"}let s=ZC(i,l),c=a&&a!=="/"&&a.endsWith("/"),u=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||u)&&(s.pathname+="/"),s}const vr=e=>e.join("/").replace(/\/\/+/g,"/"),eE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function rE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Oy=["post","put","patch","delete"];new Set(Oy);const iE=["get",...Oy];new Set(iE);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ml(){return ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ml.apply(this,arguments)}const uh=b.createContext(null),jy=b.createContext(null),li=b.createContext(null),yc=b.createContext(null),In=b.createContext({outlet:null,matches:[],isDataRoute:!1}),$y=b.createContext(null);function oE(e,t){let{relative:n}=t===void 0?{}:t;ho()||Me(!1);let{basename:r,navigator:i}=b.useContext(li),{hash:o,pathname:a,search:l}=dh(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:vr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function ho(){return b.useContext(yc)!=null}function er(){return ho()||Me(!1),b.useContext(yc).location}function My(e){b.useContext(li).static||b.useLayoutEffect(e)}function $t(){let{isDataRoute:e}=b.useContext(In);return e?bE():aE()}function aE(){ho()||Me(!1);let e=b.useContext(uh),{basename:t,navigator:n}=b.useContext(li),{matches:r}=b.useContext(In),{pathname:i}=er(),o=JSON.stringify(lh(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return My(()=>{a.current=!0}),b.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let u=ch(s,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:vr([t,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[t,n,o,i,e])}const sE=b.createContext(null);function lE(e){let t=b.useContext(In).outlet;return t&&b.createElement(sE.Provider,{value:e},t)}function Iy(){let{matches:e}=b.useContext(In),t=e[e.length-1];return t?t.params:{}}function dh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(In),{pathname:i}=er(),o=JSON.stringify(lh(r).map(a=>a.pathnameBase));return b.useMemo(()=>ch(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function cE(e,t){return uE(e,t)}function uE(e,t,n){ho()||Me(!1);let{navigator:r}=b.useContext(li),{matches:i}=b.useContext(In),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=er(),c;if(t){var u;let y=typeof t=="string"?po(t):t;l==="/"||(u=y.pathname)!=null&&u.startsWith(l)||Me(!1),c=y}else c=s;let d=c.pathname||"/",v=l==="/"?d:d.slice(l.length)||"/",g=RC(e,{pathname:v}),h=mE(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:vr([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:vr([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&h?b.createElement(yc.Provider,{value:{location:ml({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:fr.Pop}},h):h}function dE(){let e=xE(),t=rE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const fE=b.createElement(dE,null);class pE extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(In.Provider,{value:this.props.routeContext},b.createElement($y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hE(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(uh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(In.Provider,{value:t},r)}function mE(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Me(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,c)=>{let u=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||fE);let v=t.concat(o.slice(0,c+1)),g=()=>{let h;return u?h=d:s.route.Component?h=b.createElement(s.route.Component,null):s.route.element?h=s.route.element:h=l,b.createElement(hE,{match:s,routeContext:{outlet:l,matches:v,isDataRoute:n!=null},children:h})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?b.createElement(pE,{location:n.location,revalidation:n.revalidation,component:d,error:u,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var Dy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Dy||{}),gl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gl||{});function gE(e){let t=b.useContext(uh);return t||Me(!1),t}function vE(e){let t=b.useContext(jy);return t||Me(!1),t}function yE(e){let t=b.useContext(In);return t||Me(!1),t}function Ly(e){let t=yE(),n=t.matches[t.matches.length-1];return n.route.id||Me(!1),n.route.id}function xE(){var e;let t=b.useContext($y),n=vE(gl.UseRouteError),r=Ly(gl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function bE(){let{router:e}=gE(Dy.UseNavigateStable),t=Ly(gl.UseNavigateStable),n=b.useRef(!1);return My(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ml({fromRouteId:t},o)))},[e,t])}function wE(e){let{to:t,replace:n,state:r,relative:i}=e;ho()||Me(!1);let{matches:o}=b.useContext(In),{pathname:a}=er(),l=$t(),s=ch(t,lh(o).map(u=>u.pathnameBase),a,i==="path"),c=JSON.stringify(s);return b.useEffect(()=>l(JSON.parse(c),{replace:n,state:r,relative:i}),[l,c,i,n,r]),null}function Ay(e){return lE(e.context)}function Ne(e){Me(!1)}function SE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=fr.Pop,navigator:o,static:a=!1}=e;ho()&&Me(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=po(r));let{pathname:c="/",search:u="",hash:d="",state:v=null,key:g="default"}=r,h=b.useMemo(()=>{let y=sh(c,l);return y==null?null:{location:{pathname:y,search:u,hash:d,state:v,key:g},navigationType:i}},[l,c,u,d,v,g,i]);return h==null?null:b.createElement(li.Provider,{value:s},b.createElement(yc.Provider,{children:n,value:h}))}function _E(e){let{children:t,location:n}=e;return cE(xf(t),n)}new Promise(()=>{});function xf(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,xf(r.props.children,o));return}r.type!==Ne&&Me(!1),!r.props.index||!r.props.children||Me(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=xf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vl.apply(this,arguments)}function Ry(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function CE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function EE(e,t){return e.button===0&&(!t||t==="_self")&&!CE(e)}function bf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function kE(e,t){let n=bf(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const TE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],PE=["aria-current","caseSensitive","className","end","style","to","children"],OE="startTransition",wg=vf[OE];function jE(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=DC({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},u=b.useCallback(d=>{c&&wg?wg(()=>s(d)):s(d)},[s,c]);return b.useLayoutEffect(()=>a.listen(u),[a,u]),b.createElement(SE,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const $E=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ME=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:u}=t,d=Ry(t,TE),{basename:v}=b.useContext(li),g,h=!1;if(typeof c=="string"&&ME.test(c)&&(g=c,$E))try{let m=new URL(window.location.href),x=c.startsWith("//")?new URL(m.protocol+c):new URL(c),S=sh(x.pathname,v);x.origin===m.origin&&S!=null?c=S+x.search+x.hash:h=!0}catch{}let y=oE(c,{relative:i}),w=IE(c,{replace:a,state:l,target:s,preventScrollReset:u,relative:i});function p(m){r&&r(m),m.defaultPrevented||w(m)}return b.createElement("a",vl({},d,{href:g||y,onClick:h||o?r:p,ref:n,target:s}))}),Fy=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,children:c}=t,u=Ry(t,PE),d=dh(s,{relative:u.relative}),v=er(),g=b.useContext(jy),{navigator:h}=b.useContext(li),y=h.encodeLocation?h.encodeLocation(d).pathname:d.pathname,w=v.pathname,p=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(w=w.toLowerCase(),p=p?p.toLowerCase():null,y=y.toLowerCase());let m=w===y||!a&&w.startsWith(y)&&w.charAt(y.length)==="/",x=p!=null&&(p===y||!a&&p.startsWith(y)&&p.charAt(y.length)==="/"),S=m?r:void 0,E;typeof o=="function"?E=o({isActive:m,isPending:x}):E=[o,m?"active":null,x?"pending":null].filter(Boolean).join(" ");let P=typeof l=="function"?l({isActive:m,isPending:x}):l;return b.createElement(Te,vl({},u,{"aria-current":S,className:E,ref:n,style:P,to:s}),typeof c=="function"?c({isActive:m,isPending:x}):c)});var Sg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Sg||(Sg={}));var _g;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_g||(_g={}));function IE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=$t(),s=er(),c=dh(e,{relative:a});return b.useCallback(u=>{if(EE(u,n)){u.preventDefault();let d=r!==void 0?r:hl(s)===hl(c);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}function DE(e){let t=b.useRef(bf(e)),n=b.useRef(!1),r=er(),i=b.useMemo(()=>kE(r.search,n.current?null:t.current),[r.search]),o=$t(),a=b.useCallback((l,s)=>{const c=bf(typeof l=="function"?l(i):l);n.current=!0,o("?"+c,s)},[o,i]);return[i,a]}var wf={},zy={exports:{}},Vt={},Ny={exports:{}},By={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,$){var z=T.length;T.push($);e:for(;0<z;){var B=z-1>>>1,N=T[B];if(0<i(N,$))T[B]=$,T[z]=N,z=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var $=T[0],z=T.pop();if(z!==$){T[0]=z;e:for(var B=0,N=T.length,U=N>>>1;B<U;){var G=2*(B+1)-1,W=T[G],Y=G+1,ee=T[Y];if(0>i(W,z))Y<N&&0>i(ee,W)?(T[B]=ee,T[Y]=z,B=Y):(T[B]=W,T[G]=z,B=G);else if(Y<N&&0>i(ee,z))T[B]=ee,T[Y]=z,B=Y;else break e}}return $}function i(T,$){var z=T.sortIndex-$.sortIndex;return z!==0?z:T.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],u=1,d=null,v=3,g=!1,h=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(T){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=T)r(c),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(c)}}function S(T){if(y=!1,x(T),!h)if(n(s)!==null)h=!0,L(E);else{var $=n(c);$!==null&&R(S,$.startTime-T)}}function E(T,$){h=!1,y&&(y=!1,p(C),C=-1),g=!0;var z=v;try{for(x($),d=n(s);d!==null&&(!(d.expirationTime>$)||T&&!A());){var B=d.callback;if(typeof B=="function"){d.callback=null,v=d.priorityLevel;var N=B(d.expirationTime<=$);$=e.unstable_now(),typeof N=="function"?d.callback=N:d===n(s)&&r(s),x($)}else r(s);d=n(s)}if(d!==null)var U=!0;else{var G=n(c);G!==null&&R(S,G.startTime-$),U=!1}return U}finally{d=null,v=z,g=!1}}var P=!1,k=null,C=-1,j=5,M=-1;function A(){return!(e.unstable_now()-M<j)}function I(){if(k!==null){var T=e.unstable_now();M=T;var $=!0;try{$=k(!0,T)}finally{$?O():(P=!1,k=null)}}else P=!1}var O;if(typeof m=="function")O=function(){m(I)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,D=F.port2;F.port1.onmessage=I,O=function(){D.postMessage(null)}}else O=function(){w(I,0)};function L(T){k=T,P||(P=!0,O())}function R(T,$){C=w(function(){T(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){h||g||(h=!0,L(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var z=v;v=$;try{return T()}finally{v=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,$){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=v;v=T;try{return $()}finally{v=z}},e.unstable_scheduleCallback=function(T,$,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,T){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=z+N,T={id:u++,callback:$,priorityLevel:T,startTime:z,expirationTime:N,sortIndex:-1},z>B?(T.sortIndex=z,t(c,T),n(s)===null&&T===n(c)&&(y?(p(C),C=-1):y=!0,R(S,z-B))):(T.sortIndex=N,t(s,T),h||g||(h=!0,L(E))),T},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(T){var $=v;return function(){var z=v;v=$;try{return T.apply(this,arguments)}finally{v=z}}}})(By);Ny.exports=By;var LE=Ny.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy=b,Nt=LE;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uy=new Set,ha={};function ci(e,t){Xi(e,t),Xi(e+"Capture",t)}function Xi(e,t){for(ha[e]=t,e=0;e<t.length;e++)Uy.add(t[e])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=Object.prototype.hasOwnProperty,AE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cg={},Eg={};function RE(e){return Sf.call(Eg,e)?!0:Sf.call(Cg,e)?!1:AE.test(e)?Eg[e]=!0:(Cg[e]=!0,!1)}function FE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zE(e,t,n,r){if(t===null||typeof t>"u"||FE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new xt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new xt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new xt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new xt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new xt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new xt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new xt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new xt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new xt(e,5,!1,e.toLowerCase(),null,!1,!1)});var fh=/[\-:]([a-z])/g;function ph(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fh,ph);nt[t]=new xt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fh,ph);nt[t]=new xt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fh,ph);nt[t]=new xt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new xt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new xt(e,1,!1,e.toLowerCase(),null,!0,!0)});function hh(e,t,n,r){var i=nt.hasOwnProperty(t)?nt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zE(t,n,i,r)&&(n=null),r||i===null?RE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tr=Vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ss=Symbol.for("react.element"),Pi=Symbol.for("react.portal"),Oi=Symbol.for("react.fragment"),mh=Symbol.for("react.strict_mode"),_f=Symbol.for("react.profiler"),Wy=Symbol.for("react.provider"),Hy=Symbol.for("react.context"),gh=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),Ef=Symbol.for("react.suspense_list"),vh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Gy=Symbol.for("react.offscreen"),kg=Symbol.iterator;function Po(e){return e===null||typeof e!="object"?null:(e=kg&&e[kg]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Hu;function Ho(e){if(Hu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hu=t&&t[1]||""}return`
`+Hu+e}var Gu=!1;function qu(e,t){if(!e||Gu)return"";Gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Gu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ho(e):""}function NE(e){switch(e.tag){case 5:return Ho(e.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return e=qu(e.type,!1),e;case 11:return e=qu(e.type.render,!1),e;case 1:return e=qu(e.type,!0),e;default:return""}}function kf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Oi:return"Fragment";case Pi:return"Portal";case _f:return"Profiler";case mh:return"StrictMode";case Cf:return"Suspense";case Ef:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hy:return(e.displayName||"Context")+".Consumer";case Wy:return(e._context.displayName||"Context")+".Provider";case gh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vh:return t=e.displayName||null,t!==null?t:kf(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return kf(e(t))}catch{}}return null}function BE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kf(t);case 8:return t===mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function VE(e){var t=qy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ls(e){e._valueTracker||(e._valueTracker=VE(e))}function Yy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tf(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xy(e,t){t=t.checked,t!=null&&hh(e,"checked",t,!1)}function Pf(e,t){Xy(e,t);var n=Tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Of(e,t.type,n):t.hasOwnProperty("defaultValue")&&Of(e,t.type,Tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Of(e,t,n){(t!=="number"||yl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Go=Array.isArray;function Ni(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function jf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Og(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Go(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tr(n)}}function Ky(e,t){var n=Tr(t.value),r=Tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $f(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cs,Zy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cs=cs||document.createElement("div"),cs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UE=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(e){UE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ea[t]=ea[e]})});function Jy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ea.hasOwnProperty(e)&&ea[e]?(""+t).trim():t+"px"}function ex(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var WE=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(e,t){if(t){if(WE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function If(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Df=null;function yh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lf=null,Bi=null,Vi=null;function $g(e){if(e=Ha(e)){if(typeof Lf!="function")throw Error(V(280));var t=e.stateNode;t&&(t=_c(t),Lf(e.stateNode,e.type,t))}}function tx(e){Bi?Vi?Vi.push(e):Vi=[e]:Bi=e}function nx(){if(Bi){var e=Bi,t=Vi;if(Vi=Bi=null,$g(e),t)for(e=0;e<t.length;e++)$g(t[e])}}function rx(e,t){return e(t)}function ix(){}var Yu=!1;function ox(e,t,n){if(Yu)return e(t,n);Yu=!0;try{return rx(e,t,n)}finally{Yu=!1,(Bi!==null||Vi!==null)&&(ix(),nx())}}function ga(e,t){var n=e.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var Af=!1;if(Yn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Af=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Af=!1}function HE(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var ta=!1,xl=null,bl=!1,Rf=null,GE={onError:function(e){ta=!0,xl=e}};function qE(e,t,n,r,i,o,a,l,s){ta=!1,xl=null,HE.apply(GE,arguments)}function YE(e,t,n,r,i,o,a,l,s){if(qE.apply(this,arguments),ta){if(ta){var c=xl;ta=!1,xl=null}else throw Error(V(198));bl||(bl=!0,Rf=c)}}function ui(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ax(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mg(e){if(ui(e)!==e)throw Error(V(188))}function XE(e){var t=e.alternate;if(!t){if(t=ui(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Mg(i),e;if(o===r)return Mg(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function sx(e){return e=XE(e),e!==null?lx(e):null}function lx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lx(e);if(t!==null)return t;e=e.sibling}return null}var cx=Nt.unstable_scheduleCallback,Ig=Nt.unstable_cancelCallback,KE=Nt.unstable_shouldYield,QE=Nt.unstable_requestPaint,$e=Nt.unstable_now,ZE=Nt.unstable_getCurrentPriorityLevel,xh=Nt.unstable_ImmediatePriority,ux=Nt.unstable_UserBlockingPriority,wl=Nt.unstable_NormalPriority,JE=Nt.unstable_LowPriority,dx=Nt.unstable_IdlePriority,xc=null,Tn=null;function ek(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(xc,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:rk,tk=Math.log,nk=Math.LN2;function rk(e){return e>>>=0,e===0?32:31-(tk(e)/nk|0)|0}var us=64,ds=4194304;function qo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=qo(l):(o&=a,o!==0&&(r=qo(o)))}else a=n&~i,a!==0?r=qo(a):o!==0&&(r=qo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dn(t),i=1<<n,r|=e[n],t&=~i;return r}function ik(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ok(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-dn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=ik(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Ff(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fx(){var e=us;return us<<=1,!(us&4194240)&&(us=64),e}function Xu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ua(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dn(t),e[t]=n}function ak(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function bh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function px(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hx,wh,mx,gx,vx,zf=!1,fs=[],yr=null,xr=null,br=null,va=new Map,ya=new Map,ur=[],sk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dg(e,t){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":va.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(t.pointerId)}}function jo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ha(t),t!==null&&wh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lk(e,t,n,r,i){switch(t){case"focusin":return yr=jo(yr,e,t,n,r,i),!0;case"dragenter":return xr=jo(xr,e,t,n,r,i),!0;case"mouseover":return br=jo(br,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return va.set(o,jo(va.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ya.set(o,jo(ya.get(o)||null,e,t,n,r,i)),!0}return!1}function yx(e){var t=Ur(e.target);if(t!==null){var n=ui(t);if(n!==null){if(t=n.tag,t===13){if(t=ax(n),t!==null){e.blockedOn=t,vx(e.priority,function(){mx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Df=r,n.target.dispatchEvent(r),Df=null}else return t=Ha(n),t!==null&&wh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lg(e,t,n){Vs(e)&&n.delete(t)}function ck(){zf=!1,yr!==null&&Vs(yr)&&(yr=null),xr!==null&&Vs(xr)&&(xr=null),br!==null&&Vs(br)&&(br=null),va.forEach(Lg),ya.forEach(Lg)}function $o(e,t){e.blockedOn===t&&(e.blockedOn=null,zf||(zf=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,ck)))}function xa(e){function t(i){return $o(i,e)}if(0<fs.length){$o(fs[0],e);for(var n=1;n<fs.length;n++){var r=fs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yr!==null&&$o(yr,e),xr!==null&&$o(xr,e),br!==null&&$o(br,e),va.forEach(t),ya.forEach(t),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)yx(n),n.blockedOn===null&&ur.shift()}var Ui=tr.ReactCurrentBatchConfig,_l=!0;function uk(e,t,n,r){var i=me,o=Ui.transition;Ui.transition=null;try{me=1,Sh(e,t,n,r)}finally{me=i,Ui.transition=o}}function dk(e,t,n,r){var i=me,o=Ui.transition;Ui.transition=null;try{me=4,Sh(e,t,n,r)}finally{me=i,Ui.transition=o}}function Sh(e,t,n,r){if(_l){var i=Nf(e,t,n,r);if(i===null)od(e,t,r,Cl,n),Dg(e,r);else if(lk(i,e,t,n,r))r.stopPropagation();else if(Dg(e,r),t&4&&-1<sk.indexOf(e)){for(;i!==null;){var o=Ha(i);if(o!==null&&hx(o),o=Nf(e,t,n,r),o===null&&od(e,t,r,Cl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else od(e,t,r,null,n)}}var Cl=null;function Nf(e,t,n,r){if(Cl=null,e=yh(r),e=Ur(e),e!==null)if(t=ui(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ax(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Cl=e,null}function xx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZE()){case xh:return 1;case ux:return 4;case wl:case JE:return 16;case dx:return 536870912;default:return 16}default:return 16}}var pr=null,_h=null,Us=null;function bx(){if(Us)return Us;var e,t=_h,n=t.length,r,i="value"in pr?pr.value:pr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Us=i.slice(e,1<r?1-r:void 0)}function Ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ps(){return!0}function Ag(){return!1}function Ut(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ps:Ag,this.isPropagationStopped=Ag,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),t}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=Ut(mo),Wa=Pe({},mo,{view:0,detail:0}),fk=Ut(Wa),Ku,Qu,Mo,bc=Pe({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(Ku=e.screenX-Mo.screenX,Qu=e.screenY-Mo.screenY):Qu=Ku=0,Mo=e),Ku)},movementY:function(e){return"movementY"in e?e.movementY:Qu}}),Rg=Ut(bc),pk=Pe({},bc,{dataTransfer:0}),hk=Ut(pk),mk=Pe({},Wa,{relatedTarget:0}),Zu=Ut(mk),gk=Pe({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),vk=Ut(gk),yk=Pe({},mo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xk=Ut(yk),bk=Pe({},mo,{data:0}),Fg=Ut(bk),wk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_k={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ck(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_k[e])?!!t[e]:!1}function Eh(){return Ck}var Ek=Pe({},Wa,{key:function(e){if(e.key){var t=wk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eh,charCode:function(e){return e.type==="keypress"?Ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kk=Ut(Ek),Tk=Pe({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zg=Ut(Tk),Pk=Pe({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eh}),Ok=Ut(Pk),jk=Pe({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),$k=Ut(jk),Mk=Pe({},bc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ik=Ut(Mk),Dk=[9,13,27,32],kh=Yn&&"CompositionEvent"in window,na=null;Yn&&"documentMode"in document&&(na=document.documentMode);var Lk=Yn&&"TextEvent"in window&&!na,wx=Yn&&(!kh||na&&8<na&&11>=na),Ng=String.fromCharCode(32),Bg=!1;function Sx(e,t){switch(e){case"keyup":return Dk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _x(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ji=!1;function Ak(e,t){switch(e){case"compositionend":return _x(t);case"keypress":return t.which!==32?null:(Bg=!0,Ng);case"textInput":return e=t.data,e===Ng&&Bg?null:e;default:return null}}function Rk(e,t){if(ji)return e==="compositionend"||!kh&&Sx(e,t)?(e=bx(),Us=_h=pr=null,ji=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wx&&t.locale!=="ko"?null:t.data;default:return null}}var Fk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fk[e.type]:t==="textarea"}function Cx(e,t,n,r){tx(r),t=El(t,"onChange"),0<t.length&&(n=new Ch("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ra=null,ba=null;function zk(e){Lx(e,0)}function wc(e){var t=Ii(e);if(Yy(t))return e}function Nk(e,t){if(e==="change")return t}var Ex=!1;if(Yn){var Ju;if(Yn){var ed="oninput"in document;if(!ed){var Ug=document.createElement("div");Ug.setAttribute("oninput","return;"),ed=typeof Ug.oninput=="function"}Ju=ed}else Ju=!1;Ex=Ju&&(!document.documentMode||9<document.documentMode)}function Wg(){ra&&(ra.detachEvent("onpropertychange",kx),ba=ra=null)}function kx(e){if(e.propertyName==="value"&&wc(ba)){var t=[];Cx(t,ba,e,yh(e)),ox(zk,t)}}function Bk(e,t,n){e==="focusin"?(Wg(),ra=t,ba=n,ra.attachEvent("onpropertychange",kx)):e==="focusout"&&Wg()}function Vk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wc(ba)}function Uk(e,t){if(e==="click")return wc(t)}function Wk(e,t){if(e==="input"||e==="change")return wc(t)}function Hk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:Hk;function wa(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sf.call(t,i)||!gn(e[i],t[i]))return!1}return!0}function Hg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gg(e,t){var n=Hg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hg(n)}}function Tx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Px(){for(var e=window,t=yl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yl(e.document)}return t}function Th(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gk(e){var t=Px(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tx(n.ownerDocument.documentElement,n)){if(r!==null&&Th(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Gg(n,o);var a=Gg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qk=Yn&&"documentMode"in document&&11>=document.documentMode,$i=null,Bf=null,ia=null,Vf=!1;function qg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vf||$i==null||$i!==yl(r)||(r=$i,"selectionStart"in r&&Th(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&wa(ia,r)||(ia=r,r=El(Bf,"onSelect"),0<r.length&&(t=new Ch("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$i)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mi={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},td={},Ox={};Yn&&(Ox=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function Sc(e){if(td[e])return td[e];if(!Mi[e])return e;var t=Mi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ox)return td[e]=t[n];return e}var jx=Sc("animationend"),$x=Sc("animationiteration"),Mx=Sc("animationstart"),Ix=Sc("transitionend"),Dx=new Map,Yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){Dx.set(e,t),ci(t,[e])}for(var nd=0;nd<Yg.length;nd++){var rd=Yg[nd],Yk=rd.toLowerCase(),Xk=rd[0].toUpperCase()+rd.slice(1);jr(Yk,"on"+Xk)}jr(jx,"onAnimationEnd");jr($x,"onAnimationIteration");jr(Mx,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Ix,"onTransitionEnd");Xi("onMouseEnter",["mouseout","mouseover"]);Xi("onMouseLeave",["mouseout","mouseover"]);Xi("onPointerEnter",["pointerout","pointerover"]);Xi("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function Xg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,YE(r,t,void 0,e),e.currentTarget=null}function Lx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Xg(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Xg(i,l,c),o=s}}}if(bl)throw e=Rf,bl=!1,Rf=null,e}function ye(e,t){var n=t[qf];n===void 0&&(n=t[qf]=new Set);var r=e+"__bubble";n.has(r)||(Ax(t,e,2,!1),n.add(r))}function id(e,t,n){var r=0;t&&(r|=4),Ax(n,e,r,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function Sa(e){if(!e[ms]){e[ms]=!0,Uy.forEach(function(n){n!=="selectionchange"&&(Kk.has(n)||id(n,!1,e),id(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,id("selectionchange",!1,t))}}function Ax(e,t,n,r){switch(xx(t)){case 1:var i=uk;break;case 4:i=dk;break;default:i=Sh}n=i.bind(null,t,n,e),i=void 0,!Af||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function od(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Ur(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ox(function(){var c=o,u=yh(n),d=[];e:{var v=Dx.get(e);if(v!==void 0){var g=Ch,h=e;switch(e){case"keypress":if(Ws(n)===0)break e;case"keydown":case"keyup":g=kk;break;case"focusin":h="focus",g=Zu;break;case"focusout":h="blur",g=Zu;break;case"beforeblur":case"afterblur":g=Zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=hk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ok;break;case jx:case $x:case Mx:g=vk;break;case Ix:g=$k;break;case"scroll":g=fk;break;case"wheel":g=Ik;break;case"copy":case"cut":case"paste":g=xk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=zg}var y=(t&4)!==0,w=!y&&e==="scroll",p=y?v!==null?v+"Capture":null:v;y=[];for(var m=c,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,p!==null&&(S=ga(m,p),S!=null&&y.push(_a(m,S,x)))),w)break;m=m.return}0<y.length&&(v=new g(v,h,null,n,u),d.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",v&&n!==Df&&(h=n.relatedTarget||n.fromElement)&&(Ur(h)||h[Xn]))break e;if((g||v)&&(v=u.window===u?u:(v=u.ownerDocument)?v.defaultView||v.parentWindow:window,g?(h=n.relatedTarget||n.toElement,g=c,h=h?Ur(h):null,h!==null&&(w=ui(h),h!==w||h.tag!==5&&h.tag!==6)&&(h=null)):(g=null,h=c),g!==h)){if(y=Rg,S="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=zg,S="onPointerLeave",p="onPointerEnter",m="pointer"),w=g==null?v:Ii(g),x=h==null?v:Ii(h),v=new y(S,m+"leave",g,n,u),v.target=w,v.relatedTarget=x,S=null,Ur(u)===c&&(y=new y(p,m+"enter",h,n,u),y.target=x,y.relatedTarget=w,S=y),w=S,g&&h)t:{for(y=g,p=h,m=0,x=y;x;x=mi(x))m++;for(x=0,S=p;S;S=mi(S))x++;for(;0<m-x;)y=mi(y),m--;for(;0<x-m;)p=mi(p),x--;for(;m--;){if(y===p||p!==null&&y===p.alternate)break t;y=mi(y),p=mi(p)}y=null}else y=null;g!==null&&Kg(d,v,g,y,!1),h!==null&&w!==null&&Kg(d,w,h,y,!0)}}e:{if(v=c?Ii(c):window,g=v.nodeName&&v.nodeName.toLowerCase(),g==="select"||g==="input"&&v.type==="file")var E=Nk;else if(Vg(v))if(Ex)E=Wk;else{E=Vk;var P=Bk}else(g=v.nodeName)&&g.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(E=Uk);if(E&&(E=E(e,c))){Cx(d,E,n,u);break e}P&&P(e,v,c),e==="focusout"&&(P=v._wrapperState)&&P.controlled&&v.type==="number"&&Of(v,"number",v.value)}switch(P=c?Ii(c):window,e){case"focusin":(Vg(P)||P.contentEditable==="true")&&($i=P,Bf=c,ia=null);break;case"focusout":ia=Bf=$i=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,qg(d,n,u);break;case"selectionchange":if(qk)break;case"keydown":case"keyup":qg(d,n,u)}var k;if(kh)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ji?Sx(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(wx&&n.locale!=="ko"&&(ji||C!=="onCompositionStart"?C==="onCompositionEnd"&&ji&&(k=bx()):(pr=u,_h="value"in pr?pr.value:pr.textContent,ji=!0)),P=El(c,C),0<P.length&&(C=new Fg(C,e,null,n,u),d.push({event:C,listeners:P}),k?C.data=k:(k=_x(n),k!==null&&(C.data=k)))),(k=Lk?Ak(e,n):Rk(e,n))&&(c=El(c,"onBeforeInput"),0<c.length&&(u=new Fg("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=k))}Lx(d,t)})}function _a(e,t,n){return{instance:e,listener:t,currentTarget:n}}function El(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ga(e,n),o!=null&&r.unshift(_a(e,o,i)),o=ga(e,t),o!=null&&r.push(_a(e,o,i))),e=e.return}return r}function mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=ga(n,o),s!=null&&a.unshift(_a(n,s,l))):i||(s=ga(n,o),s!=null&&a.push(_a(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Qk=/\r\n?/g,Zk=/\u0000|\uFFFD/g;function Qg(e){return(typeof e=="string"?e:""+e).replace(Qk,`
`).replace(Zk,"")}function gs(e,t,n){if(t=Qg(t),Qg(e)!==t&&n)throw Error(V(425))}function kl(){}var Uf=null,Wf=null;function Hf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gf=typeof setTimeout=="function"?setTimeout:void 0,Jk=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,eT=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(e){return Zg.resolve(null).then(e).catch(tT)}:Gf;function tT(e){setTimeout(function(){throw e})}function ad(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xa(t)}function wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var go=Math.random().toString(36).slice(2),En="__reactFiber$"+go,Ca="__reactProps$"+go,Xn="__reactContainer$"+go,qf="__reactEvents$"+go,nT="__reactListeners$"+go,rT="__reactHandles$"+go;function Ur(e){var t=e[En];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xn]||n[En]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jg(e);e!==null;){if(n=e[En])return n;e=Jg(e)}return t}e=n,n=e.parentNode}return null}function Ha(e){return e=e[En]||e[Xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ii(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function _c(e){return e[Ca]||null}var Yf=[],Di=-1;function $r(e){return{current:e}}function be(e){0>Di||(e.current=Yf[Di],Yf[Di]=null,Di--)}function ve(e,t){Di++,Yf[Di]=e.current,e.current=t}var Pr={},ut=$r(Pr),kt=$r(!1),Kr=Pr;function Ki(e,t){var n=e.type.contextTypes;if(!n)return Pr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(e){return e=e.childContextTypes,e!=null}function Tl(){be(kt),be(ut)}function e0(e,t,n){if(ut.current!==Pr)throw Error(V(168));ve(ut,t),ve(kt,n)}function Rx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,BE(e)||"Unknown",i));return Pe({},n,r)}function Pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pr,Kr=ut.current,ve(ut,e),ve(kt,kt.current),!0}function t0(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Rx(e,t,Kr),r.__reactInternalMemoizedMergedChildContext=e,be(kt),be(ut),ve(ut,e)):be(kt),ve(kt,n)}var Nn=null,Cc=!1,sd=!1;function Fx(e){Nn===null?Nn=[e]:Nn.push(e)}function iT(e){Cc=!0,Fx(e)}function Mr(){if(!sd&&Nn!==null){sd=!0;var e=0,t=me;try{var n=Nn;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nn=null,Cc=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(e+1)),cx(xh,Mr),i}finally{me=t,sd=!1}}return null}var Li=[],Ai=0,Ol=null,jl=0,Gt=[],qt=0,Qr=null,Un=1,Wn="";function Rr(e,t){Li[Ai++]=jl,Li[Ai++]=Ol,Ol=e,jl=t}function zx(e,t,n){Gt[qt++]=Un,Gt[qt++]=Wn,Gt[qt++]=Qr,Qr=e;var r=Un;e=Wn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var o=32-dn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Un=1<<32-dn(t)+i|n<<i|r,Wn=o+e}else Un=1<<o|n<<i|r,Wn=e}function Ph(e){e.return!==null&&(Rr(e,1),zx(e,1,0))}function Oh(e){for(;e===Ol;)Ol=Li[--Ai],Li[Ai]=null,jl=Li[--Ai],Li[Ai]=null;for(;e===Qr;)Qr=Gt[--qt],Gt[qt]=null,Wn=Gt[--qt],Gt[qt]=null,Un=Gt[--qt],Gt[qt]=null}var Ft=null,At=null,Ce=!1,cn=null;function Nx(e,t){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function n0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ft=e,At=wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ft=e,At=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qr!==null?{id:Un,overflow:Wn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ft=e,At=null,!0):!1;default:return!1}}function Xf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kf(e){if(Ce){var t=At;if(t){var n=t;if(!n0(e,t)){if(Xf(e))throw Error(V(418));t=wr(n.nextSibling);var r=Ft;t&&n0(e,t)?Nx(r,n):(e.flags=e.flags&-4097|2,Ce=!1,Ft=e)}}else{if(Xf(e))throw Error(V(418));e.flags=e.flags&-4097|2,Ce=!1,Ft=e}}}function r0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ft=e}function vs(e){if(e!==Ft)return!1;if(!Ce)return r0(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hf(e.type,e.memoizedProps)),t&&(t=At)){if(Xf(e))throw Bx(),Error(V(418));for(;t;)Nx(e,t),t=wr(t.nextSibling)}if(r0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){At=wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}At=null}}else At=Ft?wr(e.stateNode.nextSibling):null;return!0}function Bx(){for(var e=At;e;)e=wr(e.nextSibling)}function Qi(){At=Ft=null,Ce=!1}function jh(e){cn===null?cn=[e]:cn.push(e)}var oT=tr.ReactCurrentBatchConfig;function an(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var $l=$r(null),Ml=null,Ri=null,$h=null;function Mh(){$h=Ri=Ml=null}function Ih(e){var t=$l.current;be($l),e._currentValue=t}function Qf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wi(e,t){Ml=e,$h=Ri=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function Kt(e){var t=e._currentValue;if($h!==e)if(e={context:e,memoizedValue:t,next:null},Ri===null){if(Ml===null)throw Error(V(308));Ri=e,Ml.dependencies={lanes:0,firstContext:e}}else Ri=Ri.next=e;return t}var Wr=null;function Dh(e){Wr===null?Wr=[e]:Wr.push(e)}function Vx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kn(e,r)}function Kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cr=!1;function Lh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ux(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kn(e,n)}return i=r.interleaved,i===null?(t.next=t,Dh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kn(e,n)}function Hs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bh(e,n)}}function i0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Il(e,t,n,r){var i=e.updateQueue;cr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,u=c=s=null,l=o;do{var v=l.lane,g=l.eventTime;if((r&v)===v){u!==null&&(u=u.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,y=l;switch(v=t,g=n,y.tag){case 1:if(h=y.payload,typeof h=="function"){d=h.call(g,d,v);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,v=typeof h=="function"?h.call(g,d,v):h,v==null)break e;d=Pe({},d,v);break e;case 2:cr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else g={eventTime:g,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=g,s=d):u=u.next=g,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(u===null&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Jr|=a,e.lanes=a,e.memoizedState=d}}function o0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Wx=new Vy.Component().refs;function Zf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ec={isMounted:function(e){return(e=e._reactInternals)?ui(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=Cr(e),o=Hn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(fn(t,e,i,r),Hs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=Cr(e),o=Hn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(fn(t,e,i,r),Hs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=Cr(e),i=Hn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sr(e,i,r),t!==null&&(fn(t,e,r,n),Hs(t,e,r))}};function a0(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!wa(n,r)||!wa(i,o):!0}function Hx(e,t,n){var r=!1,i=Pr,o=t.contextType;return typeof o=="object"&&o!==null?o=Kt(o):(i=Tt(t)?Kr:ut.current,r=t.contextTypes,o=(r=r!=null)?Ki(e,i):Pr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ec,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function s0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function Jf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Wx,Lh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Kt(o):(o=Tt(t)?Kr:ut.current,i.context=Ki(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Zf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ec.enqueueReplaceState(i,i.state,null),Il(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Io(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Wx&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ys(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function l0(e){var t=e._init;return t(e._payload)}function Gx(e){function t(p,m){if(e){var x=p.deletions;x===null?(p.deletions=[m],p.flags|=16):x.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=Er(p,m),p.index=0,p.sibling=null,p}function o(p,m,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<m?(p.flags|=2,m):x):(p.flags|=2,m)):(p.flags|=1048576,m)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,m,x,S){return m===null||m.tag!==6?(m=hd(x,p.mode,S),m.return=p,m):(m=i(m,x),m.return=p,m)}function s(p,m,x,S){var E=x.type;return E===Oi?u(p,m,x.props.children,S,x.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lr&&l0(E)===m.type)?(S=i(m,x.props),S.ref=Io(p,m,x),S.return=p,S):(S=Qs(x.type,x.key,x.props,null,p.mode,S),S.ref=Io(p,m,x),S.return=p,S)}function c(p,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=md(x,p.mode,S),m.return=p,m):(m=i(m,x.children||[]),m.return=p,m)}function u(p,m,x,S,E){return m===null||m.tag!==7?(m=Yr(x,p.mode,S,E),m.return=p,m):(m=i(m,x),m.return=p,m)}function d(p,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=hd(""+m,p.mode,x),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ss:return x=Qs(m.type,m.key,m.props,null,p.mode,x),x.ref=Io(p,null,m),x.return=p,x;case Pi:return m=md(m,p.mode,x),m.return=p,m;case lr:var S=m._init;return d(p,S(m._payload),x)}if(Go(m)||Po(m))return m=Yr(m,p.mode,x,null),m.return=p,m;ys(p,m)}return null}function v(p,m,x,S){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:l(p,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ss:return x.key===E?s(p,m,x,S):null;case Pi:return x.key===E?c(p,m,x,S):null;case lr:return E=x._init,v(p,m,E(x._payload),S)}if(Go(x)||Po(x))return E!==null?null:u(p,m,x,S,null);ys(p,x)}return null}function g(p,m,x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(x)||null,l(m,p,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ss:return p=p.get(S.key===null?x:S.key)||null,s(m,p,S,E);case Pi:return p=p.get(S.key===null?x:S.key)||null,c(m,p,S,E);case lr:var P=S._init;return g(p,m,x,P(S._payload),E)}if(Go(S)||Po(S))return p=p.get(x)||null,u(m,p,S,E,null);ys(m,S)}return null}function h(p,m,x,S){for(var E=null,P=null,k=m,C=m=0,j=null;k!==null&&C<x.length;C++){k.index>C?(j=k,k=null):j=k.sibling;var M=v(p,k,x[C],S);if(M===null){k===null&&(k=j);break}e&&k&&M.alternate===null&&t(p,k),m=o(M,m,C),P===null?E=M:P.sibling=M,P=M,k=j}if(C===x.length)return n(p,k),Ce&&Rr(p,C),E;if(k===null){for(;C<x.length;C++)k=d(p,x[C],S),k!==null&&(m=o(k,m,C),P===null?E=k:P.sibling=k,P=k);return Ce&&Rr(p,C),E}for(k=r(p,k);C<x.length;C++)j=g(k,p,C,x[C],S),j!==null&&(e&&j.alternate!==null&&k.delete(j.key===null?C:j.key),m=o(j,m,C),P===null?E=j:P.sibling=j,P=j);return e&&k.forEach(function(A){return t(p,A)}),Ce&&Rr(p,C),E}function y(p,m,x,S){var E=Po(x);if(typeof E!="function")throw Error(V(150));if(x=E.call(x),x==null)throw Error(V(151));for(var P=E=null,k=m,C=m=0,j=null,M=x.next();k!==null&&!M.done;C++,M=x.next()){k.index>C?(j=k,k=null):j=k.sibling;var A=v(p,k,M.value,S);if(A===null){k===null&&(k=j);break}e&&k&&A.alternate===null&&t(p,k),m=o(A,m,C),P===null?E=A:P.sibling=A,P=A,k=j}if(M.done)return n(p,k),Ce&&Rr(p,C),E;if(k===null){for(;!M.done;C++,M=x.next())M=d(p,M.value,S),M!==null&&(m=o(M,m,C),P===null?E=M:P.sibling=M,P=M);return Ce&&Rr(p,C),E}for(k=r(p,k);!M.done;C++,M=x.next())M=g(k,p,C,M.value,S),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?C:M.key),m=o(M,m,C),P===null?E=M:P.sibling=M,P=M);return e&&k.forEach(function(I){return t(p,I)}),Ce&&Rr(p,C),E}function w(p,m,x,S){if(typeof x=="object"&&x!==null&&x.type===Oi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ss:e:{for(var E=x.key,P=m;P!==null;){if(P.key===E){if(E=x.type,E===Oi){if(P.tag===7){n(p,P.sibling),m=i(P,x.props.children),m.return=p,p=m;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lr&&l0(E)===P.type){n(p,P.sibling),m=i(P,x.props),m.ref=Io(p,P,x),m.return=p,p=m;break e}n(p,P);break}else t(p,P);P=P.sibling}x.type===Oi?(m=Yr(x.props.children,p.mode,S,x.key),m.return=p,p=m):(S=Qs(x.type,x.key,x.props,null,p.mode,S),S.ref=Io(p,m,x),S.return=p,p=S)}return a(p);case Pi:e:{for(P=x.key;m!==null;){if(m.key===P)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(p,m.sibling),m=i(m,x.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=md(x,p.mode,S),m.return=p,p=m}return a(p);case lr:return P=x._init,w(p,m,P(x._payload),S)}if(Go(x))return h(p,m,x,S);if(Po(x))return y(p,m,x,S);ys(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,x),m.return=p,p=m):(n(p,m),m=hd(x,p.mode,S),m.return=p,p=m),a(p)):n(p,m)}return w}var Zi=Gx(!0),qx=Gx(!1),Ga={},Pn=$r(Ga),Ea=$r(Ga),ka=$r(Ga);function Hr(e){if(e===Ga)throw Error(V(174));return e}function Ah(e,t){switch(ve(ka,t),ve(Ea,e),ve(Pn,Ga),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$f(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$f(t,e)}be(Pn),ve(Pn,t)}function Ji(){be(Pn),be(Ea),be(ka)}function Yx(e){Hr(ka.current);var t=Hr(Pn.current),n=$f(t,e.type);t!==n&&(ve(Ea,e),ve(Pn,n))}function Rh(e){Ea.current===e&&(be(Pn),be(Ea))}var Ee=$r(0);function Dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ld=[];function Fh(){for(var e=0;e<ld.length;e++)ld[e]._workInProgressVersionPrimary=null;ld.length=0}var Gs=tr.ReactCurrentDispatcher,cd=tr.ReactCurrentBatchConfig,Zr=0,ke=null,Be=null,Ye=null,Ll=!1,oa=!1,Ta=0,aT=0;function rt(){throw Error(V(321))}function zh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function Nh(e,t,n,r,i,o){if(Zr=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gs.current=e===null||e.memoizedState===null?uT:dT,e=n(r,i),oa){o=0;do{if(oa=!1,Ta=0,25<=o)throw Error(V(301));o+=1,Ye=Be=null,t.updateQueue=null,Gs.current=fT,e=n(r,i)}while(oa)}if(Gs.current=Al,t=Be!==null&&Be.next!==null,Zr=0,Ye=Be=ke=null,Ll=!1,t)throw Error(V(300));return e}function Bh(){var e=Ta!==0;return Ta=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ke.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Qt(){if(Be===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ye===null?ke.memoizedState:Ye.next;if(t!==null)Ye=t,Be=e;else{if(e===null)throw Error(V(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ye===null?ke.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Pa(e,t){return typeof t=="function"?t(e):t}function ud(e){var t=Qt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Be,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var u=c.lane;if((Zr&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,ke.lanes|=u,Jr|=u}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,gn(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,Jr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dd(e){var t=Qt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);gn(o,t.memoizedState)||(Et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Xx(){}function Kx(e,t){var n=ke,r=Qt(),i=t(),o=!gn(r.memoizedState,i);if(o&&(r.memoizedState=i,Et=!0),r=r.queue,Vh(Jx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Oa(9,Zx.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(V(349));Zr&30||Qx(n,t,i)}return i}function Qx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zx(e,t,n,r){t.value=n,t.getSnapshot=r,eb(t)&&tb(e)}function Jx(e,t,n){return n(function(){eb(t)&&tb(e)})}function eb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function tb(e){var t=Kn(e,1);t!==null&&fn(t,e,1,-1)}function c0(e){var t=Sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},t.queue=e,e=e.dispatch=cT.bind(null,ke,e),[t.memoizedState,e]}function Oa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nb(){return Qt().memoizedState}function qs(e,t,n,r){var i=Sn();ke.flags|=e,i.memoizedState=Oa(1|t,n,void 0,r===void 0?null:r)}function kc(e,t,n,r){var i=Qt();r=r===void 0?null:r;var o=void 0;if(Be!==null){var a=Be.memoizedState;if(o=a.destroy,r!==null&&zh(r,a.deps)){i.memoizedState=Oa(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Oa(1|t,n,o,r)}function u0(e,t){return qs(8390656,8,e,t)}function Vh(e,t){return kc(2048,8,e,t)}function rb(e,t){return kc(4,2,e,t)}function ib(e,t){return kc(4,4,e,t)}function ob(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ab(e,t,n){return n=n!=null?n.concat([e]):null,kc(4,4,ob.bind(null,t,e),n)}function Uh(){}function sb(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lb(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cb(e,t,n){return Zr&21?(gn(n,t)||(n=fx(),ke.lanes|=n,Jr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function sT(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=cd.transition;cd.transition={};try{e(!1),t()}finally{me=n,cd.transition=r}}function ub(){return Qt().memoizedState}function lT(e,t,n){var r=Cr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},db(e))fb(t,n);else if(n=Vx(e,t,n,r),n!==null){var i=gt();fn(n,e,r,i),pb(n,t,r)}}function cT(e,t,n){var r=Cr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(db(e))fb(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,a)){var s=t.interleaved;s===null?(i.next=i,Dh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Vx(e,t,i,r),n!==null&&(i=gt(),fn(n,e,r,i),pb(n,t,r))}}function db(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function fb(e,t){oa=Ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bh(e,n)}}var Al={readContext:Kt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},uT={readContext:Kt,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:Kt,useEffect:u0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qs(4194308,4,ob.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qs(4194308,4,e,t)},useInsertionEffect:function(e,t){return qs(4,2,e,t)},useMemo:function(e,t){var n=Sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lT.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:c0,useDebugValue:Uh,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=c0(!1),t=e[0];return e=sT.bind(null,e[1]),Sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Sn();if(Ce){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Xe===null)throw Error(V(349));Zr&30||Qx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,u0(Jx.bind(null,r,o,e),[e]),r.flags|=2048,Oa(9,Zx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Sn(),t=Xe.identifierPrefix;if(Ce){var n=Wn,r=Un;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ta++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=aT++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dT={readContext:Kt,useCallback:sb,useContext:Kt,useEffect:Vh,useImperativeHandle:ab,useInsertionEffect:rb,useLayoutEffect:ib,useMemo:lb,useReducer:ud,useRef:nb,useState:function(){return ud(Pa)},useDebugValue:Uh,useDeferredValue:function(e){var t=Qt();return cb(t,Be.memoizedState,e)},useTransition:function(){var e=ud(Pa)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:Xx,useSyncExternalStore:Kx,useId:ub,unstable_isNewReconciler:!1},fT={readContext:Kt,useCallback:sb,useContext:Kt,useEffect:Vh,useImperativeHandle:ab,useInsertionEffect:rb,useLayoutEffect:ib,useMemo:lb,useReducer:dd,useRef:nb,useState:function(){return dd(Pa)},useDebugValue:Uh,useDeferredValue:function(e){var t=Qt();return Be===null?t.memoizedState=e:cb(t,Be.memoizedState,e)},useTransition:function(){var e=dd(Pa)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:Xx,useSyncExternalStore:Kx,useId:ub,unstable_isNewReconciler:!1};function eo(e,t){try{var n="",r=t;do n+=NE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ep(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pT=typeof WeakMap=="function"?WeakMap:Map;function hb(e,t,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fl||(Fl=!0,up=r),ep(e,t)},n}function mb(e,t,n){n=Hn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ep(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ep(e,t),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function d0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pT;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=TT.bind(null,e,t,n),t.then(e,e))}function f0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function p0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Hn(-1,1),t.tag=2,Sr(n,t,1))),n.lanes|=1),e)}var hT=tr.ReactCurrentOwner,Et=!1;function ht(e,t,n,r){t.child=e===null?qx(t,null,n,r):Zi(t,e.child,n,r)}function h0(e,t,n,r,i){n=n.render;var o=t.ref;return Wi(t,i),r=Nh(e,t,n,r,o,i),n=Bh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qn(e,t,i)):(Ce&&n&&Ph(t),t.flags|=1,ht(e,t,r,i),t.child)}function m0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Qh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,gb(e,t,o,r,i)):(e=Qs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(a,r)&&e.ref===t.ref)return Qn(e,t,i)}return t.flags|=1,e=Er(o,r),e.ref=t.ref,e.return=t,t.child=e}function gb(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(wa(o,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Qn(e,t,i)}return tp(e,t,n,r,i)}function vb(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(zi,Dt),Dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(zi,Dt),Dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(zi,Dt),Dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ve(zi,Dt),Dt|=r;return ht(e,t,i,n),t.child}function yb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tp(e,t,n,r,i){var o=Tt(n)?Kr:ut.current;return o=Ki(t,o),Wi(t,i),n=Nh(e,t,n,r,o,i),r=Bh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qn(e,t,i)):(Ce&&r&&Ph(t),t.flags|=1,ht(e,t,n,i),t.child)}function g0(e,t,n,r,i){if(Tt(n)){var o=!0;Pl(t)}else o=!1;if(Wi(t,i),t.stateNode===null)Ys(e,t),Hx(t,n,r),Jf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kt(c):(c=Tt(n)?Kr:ut.current,c=Ki(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&s0(t,a,r,c),cr=!1;var v=t.memoizedState;a.state=v,Il(t,r,a,i),s=t.memoizedState,l!==r||v!==s||kt.current||cr?(typeof u=="function"&&(Zf(t,n,u,r),s=t.memoizedState),(l=cr||a0(t,n,l,r,v,s,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ux(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:an(t.type,l),a.props=c,d=t.pendingProps,v=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Kt(s):(s=Tt(n)?Kr:ut.current,s=Ki(t,s));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||v!==s)&&s0(t,a,r,s),cr=!1,v=t.memoizedState,a.state=v,Il(t,r,a,i);var h=t.memoizedState;l!==d||v!==h||kt.current||cr?(typeof g=="function"&&(Zf(t,n,g,r),h=t.memoizedState),(c=cr||a0(t,n,c,r,v,h,s)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return np(e,t,n,r,o,i)}function np(e,t,n,r,i,o){yb(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&t0(t,n,!1),Qn(e,t,o);r=t.stateNode,hT.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Zi(t,e.child,null,o),t.child=Zi(t,null,l,o)):ht(e,t,l,o),t.memoizedState=r.state,i&&t0(t,n,!0),t.child}function xb(e){var t=e.stateNode;t.pendingContext?e0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&e0(e,t.context,!1),Ah(e,t.containerInfo)}function v0(e,t,n,r,i){return Qi(),jh(i),t.flags|=256,ht(e,t,n,r),t.child}var rp={dehydrated:null,treeContext:null,retryLane:0};function ip(e){return{baseLanes:e,cachePool:null,transitions:null}}function bb(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ee,i&1),e===null)return Kf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Oc(a,r,0,null),e=Yr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ip(n),t.memoizedState=rp,e):Wh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mT(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Er(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Er(l,o):(o=Yr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ip(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=rp,r}return o=e.child,e=o.sibling,r=Er(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wh(e,t){return t=Oc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xs(e,t,n,r){return r!==null&&jh(r),Zi(t,e.child,null,n),e=Wh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mT(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=fd(Error(V(422))),xs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Oc({mode:"visible",children:r.children},i,0,null),o=Yr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Zi(t,e.child,null,a),t.child.memoizedState=ip(a),t.memoizedState=rp,o);if(!(t.mode&1))return xs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=fd(o,r,void 0),xs(e,t,a,r)}if(l=(a&e.childLanes)!==0,Et||l){if(r=Xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kn(e,i),fn(r,e,i,-1))}return Kh(),r=fd(Error(V(421))),xs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=PT.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,At=wr(i.nextSibling),Ft=t,Ce=!0,cn=null,e!==null&&(Gt[qt++]=Un,Gt[qt++]=Wn,Gt[qt++]=Qr,Un=e.id,Wn=e.overflow,Qr=t),t=Wh(t,r.children),t.flags|=4096,t)}function y0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qf(e.return,t,n)}function pd(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wb(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ht(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&y0(e,n,t);else if(e.tag===19)y0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Dl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Dl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pd(t,!0,n,null,o);break;case"together":pd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ys(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=Er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gT(e,t,n){switch(t.tag){case 3:xb(t),Qi();break;case 5:Yx(t);break;case 1:Tt(t.type)&&Pl(t);break;case 4:Ah(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve($l,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?bb(e,t,n):(ve(Ee,Ee.current&1),e=Qn(e,t,n),e!==null?e.sibling:null);ve(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,vb(e,t,n)}return Qn(e,t,n)}var Sb,op,_b,Cb;Sb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};op=function(){};_b=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Hr(Pn.current);var o=null;switch(n){case"input":i=Tf(e,i),r=Tf(e,r),o=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),o=[];break;case"textarea":i=jf(e,i),r=jf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=kl)}Mf(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ha.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ha.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ye("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Cb=function(e,t,n,r){n!==r&&(t.flags|=4)};function Do(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vT(e,t,n){var r=t.pendingProps;switch(Oh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return Tt(t.type)&&Tl(),it(t),null;case 3:return r=t.stateNode,Ji(),be(kt),be(ut),Fh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,cn!==null&&(pp(cn),cn=null))),op(e,t),it(t),null;case 5:Rh(t);var i=Hr(ka.current);if(n=t.type,e!==null&&t.stateNode!=null)_b(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return it(t),null}if(e=Hr(Pn.current),vs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[En]=t,r[Ca]=o,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Yo.length;i++)ye(Yo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Tg(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":Og(r,o),ye("invalid",r)}Mf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),i=["children",""+l]):ha.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":ls(r),Pg(r,o,!0);break;case"textarea":ls(r),jg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=kl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[En]=t,e[Ca]=r,Sb(e,t,!1,!1),t.stateNode=e;e:{switch(a=If(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yo.length;i++)ye(Yo[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":Tg(e,r),i=Tf(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Og(e,r),i=jf(e,r),ye("invalid",e);break;default:i=r}Mf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ex(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Zy(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ma(e,s):typeof s=="number"&&ma(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ha.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ye("scroll",e):s!=null&&hh(e,o,s,a))}switch(n){case"input":ls(e),Pg(e,r,!1);break;case"textarea":ls(e),jg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ni(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ni(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)Cb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Hr(ka.current),Hr(Pn.current),vs(t)){if(r=t.stateNode,n=t.memoizedProps,r[En]=t,(o=r.nodeValue!==n)&&(e=Ft,e!==null))switch(e.tag){case 3:gs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=t,t.stateNode=r}return it(t),null;case 13:if(be(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&At!==null&&t.mode&1&&!(t.flags&128))Bx(),Qi(),t.flags|=98560,o=!1;else if(o=vs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[En]=t}else Qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),o=!1}else cn!==null&&(pp(cn),cn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Ue===0&&(Ue=3):Kh())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return Ji(),op(e,t),e===null&&Sa(t.stateNode.containerInfo),it(t),null;case 10:return Ih(t.type._context),it(t),null;case 17:return Tt(t.type)&&Tl(),it(t),null;case 19:if(be(Ee),o=t.memoizedState,o===null)return it(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Do(o,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Dl(e),a!==null){for(t.flags|=128,Do(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&$e()>to&&(t.flags|=128,r=!0,Do(o,!1),t.lanes=4194304)}else{if(!r)if(e=Dl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Do(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ce)return it(t),null}else 2*$e()-o.renderingStartTime>to&&n!==1073741824&&(t.flags|=128,r=!0,Do(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=$e(),t.sibling=null,n=Ee.current,ve(Ee,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return Xh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Dt&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function yT(e,t){switch(Oh(t),t.tag){case 1:return Tt(t.type)&&Tl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(),be(kt),be(ut),Fh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rh(t),null;case 13:if(be(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Ee),null;case 4:return Ji(),null;case 10:return Ih(t.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var bs=!1,lt=!1,xT=typeof WeakSet=="function"?WeakSet:Set,H=null;function Fi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function ap(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var x0=!1;function bT(e,t){if(Uf=_l,e=Px(),Th(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,u=0,d=e,v=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(g=d.firstChild)!==null;)v=d,d=g;for(;;){if(d===e)break t;if(v===n&&++c===i&&(l=a),v===o&&++u===r&&(s=a),(g=d.nextSibling)!==null)break;d=v,v=d.parentNode}d=g}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wf={focusedElem:e,selectionRange:n},_l=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,w=h.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:an(t.type,y),w);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return h=x0,x0=!1,h}function aa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ap(t,n,o)}i=i.next}while(i!==r)}}function Tc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Eb(e){var t=e.alternate;t!==null&&(e.alternate=null,Eb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[En],delete t[Ca],delete t[qf],delete t[nT],delete t[rT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kb(e){return e.tag===5||e.tag===3||e.tag===4}function b0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kl));else if(r!==4&&(e=e.child,e!==null))for(lp(e,t,n),e=e.sibling;e!==null;)lp(e,t,n),e=e.sibling}function cp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(cp(e,t,n),e=e.sibling;e!==null;)cp(e,t,n),e=e.sibling}var Je=null,sn=!1;function ar(e,t,n){for(n=n.child;n!==null;)Tb(e,t,n),n=n.sibling}function Tb(e,t,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(xc,n)}catch{}switch(n.tag){case 5:lt||Fi(n,t);case 6:var r=Je,i=sn;Je=null,ar(e,t,n),Je=r,sn=i,Je!==null&&(sn?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(sn?(e=Je,n=n.stateNode,e.nodeType===8?ad(e.parentNode,n):e.nodeType===1&&ad(e,n),xa(e)):ad(Je,n.stateNode));break;case 4:r=Je,i=sn,Je=n.stateNode.containerInfo,sn=!0,ar(e,t,n),Je=r,sn=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ap(n,t,a),i=i.next}while(i!==r)}ar(e,t,n);break;case 1:if(!lt&&(Fi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,t,l)}ar(e,t,n);break;case 21:ar(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,ar(e,t,n),lt=r):ar(e,t,n);break;default:ar(e,t,n)}}function w0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xT),t.forEach(function(r){var i=OT.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,sn=!1;break e;case 3:Je=l.stateNode.containerInfo,sn=!0;break e;case 4:Je=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(Je===null)throw Error(V(160));Tb(o,a,i),Je=null,sn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Oe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pb(t,e),t=t.sibling}function Pb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),bn(e),r&4){try{aa(3,e,e.return),Tc(3,e)}catch(y){Oe(e,e.return,y)}try{aa(5,e,e.return)}catch(y){Oe(e,e.return,y)}}break;case 1:tn(t,e),bn(e),r&512&&n!==null&&Fi(n,n.return);break;case 5:if(tn(t,e),bn(e),r&512&&n!==null&&Fi(n,n.return),e.flags&32){var i=e.stateNode;try{ma(i,"")}catch(y){Oe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Xy(i,o),If(l,a);var c=If(l,o);for(a=0;a<s.length;a+=2){var u=s[a],d=s[a+1];u==="style"?ex(i,d):u==="dangerouslySetInnerHTML"?Zy(i,d):u==="children"?ma(i,d):hh(i,u,d,c)}switch(l){case"input":Pf(i,o);break;case"textarea":Ky(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Ni(i,!!o.multiple,g,!1):v!==!!o.multiple&&(o.defaultValue!=null?Ni(i,!!o.multiple,o.defaultValue,!0):Ni(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ca]=o}catch(y){Oe(e,e.return,y)}}break;case 6:if(tn(t,e),bn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Oe(e,e.return,y)}}break;case 3:if(tn(t,e),bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(t.containerInfo)}catch(y){Oe(e,e.return,y)}break;case 4:tn(t,e),bn(e);break;case 13:tn(t,e),bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(qh=$e())),r&4&&w0(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(c=lt)||u,tn(t,e),lt=c):tn(t,e),bn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(d=H=u;H!==null;){switch(v=H,g=v.child,v.tag){case 0:case 11:case 14:case 15:aa(4,v,v.return);break;case 1:Fi(v,v.return);var h=v.stateNode;if(typeof h.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(y){Oe(r,n,y)}}break;case 5:Fi(v,v.return);break;case 22:if(v.memoizedState!==null){_0(d);continue}}g!==null?(g.return=v,H=g):_0(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Jy("display",a))}catch(y){Oe(e,e.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Oe(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tn(t,e),bn(e),r&4&&w0(e);break;case 21:break;default:tn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kb(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ma(i,""),r.flags&=-33);var o=b0(e);cp(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=b0(e);lp(e,l,a);break;default:throw Error(V(161))}}catch(s){Oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wT(e,t,n){H=e,Ob(e)}function Ob(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||bs;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||lt;l=bs;var c=lt;if(bs=a,(lt=s)&&!c)for(H=i;H!==null;)a=H,s=a.child,a.tag===22&&a.memoizedState!==null?C0(i):s!==null?(s.return=a,H=s):C0(i);for(;o!==null;)H=o,Ob(o),o=o.sibling;H=i,bs=l,lt=c}S0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):S0(e)}}function S0(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||Tc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:an(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&o0(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}o0(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&xa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}lt||t.flags&512&&sp(t)}catch(v){Oe(t,t.return,v)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function _0(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function C0(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tc(4,t)}catch(s){Oe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Oe(t,i,s)}}var o=t.return;try{sp(t)}catch(s){Oe(t,o,s)}break;case 5:var a=t.return;try{sp(t)}catch(s){Oe(t,a,s)}}}catch(s){Oe(t,t.return,s)}if(t===e){H=null;break}var l=t.sibling;if(l!==null){l.return=t.return,H=l;break}H=t.return}}var ST=Math.ceil,Rl=tr.ReactCurrentDispatcher,Hh=tr.ReactCurrentOwner,Xt=tr.ReactCurrentBatchConfig,se=0,Xe=null,Ae=null,tt=0,Dt=0,zi=$r(0),Ue=0,ja=null,Jr=0,Pc=0,Gh=0,sa=null,Ct=null,qh=0,to=1/0,Rn=null,Fl=!1,up=null,_r=null,ws=!1,hr=null,zl=0,la=0,dp=null,Xs=-1,Ks=0;function gt(){return se&6?$e():Xs!==-1?Xs:Xs=$e()}function Cr(e){return e.mode&1?se&2&&tt!==0?tt&-tt:oT.transition!==null?(Ks===0&&(Ks=fx()),Ks):(e=me,e!==0||(e=window.event,e=e===void 0?16:xx(e.type)),e):1}function fn(e,t,n,r){if(50<la)throw la=0,dp=null,Error(V(185));Ua(e,n,r),(!(se&2)||e!==Xe)&&(e===Xe&&(!(se&2)&&(Pc|=n),Ue===4&&dr(e,tt)),Pt(e,r),n===1&&se===0&&!(t.mode&1)&&(to=$e()+500,Cc&&Mr()))}function Pt(e,t){var n=e.callbackNode;ok(e,t);var r=Sl(e,e===Xe?tt:0);if(r===0)n!==null&&Ig(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ig(n),t===1)e.tag===0?iT(E0.bind(null,e)):Fx(E0.bind(null,e)),eT(function(){!(se&6)&&Mr()}),n=null;else{switch(px(r)){case 1:n=xh;break;case 4:n=ux;break;case 16:n=wl;break;case 536870912:n=dx;break;default:n=wl}n=Rb(n,jb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jb(e,t){if(Xs=-1,Ks=0,se&6)throw Error(V(327));var n=e.callbackNode;if(Hi()&&e.callbackNode!==n)return null;var r=Sl(e,e===Xe?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Nl(e,r);else{t=r;var i=se;se|=2;var o=Mb();(Xe!==e||tt!==t)&&(Rn=null,to=$e()+500,qr(e,t));do try{ET();break}catch(l){$b(e,l)}while(1);Mh(),Rl.current=o,se=i,Ae!==null?t=0:(Xe=null,tt=0,t=Ue)}if(t!==0){if(t===2&&(i=Ff(e),i!==0&&(r=i,t=fp(e,i))),t===1)throw n=ja,qr(e,0),dr(e,r),Pt(e,$e()),n;if(t===6)dr(e,r);else{if(i=e.current.alternate,!(r&30)&&!_T(i)&&(t=Nl(e,r),t===2&&(o=Ff(e),o!==0&&(r=o,t=fp(e,o))),t===1))throw n=ja,qr(e,0),dr(e,r),Pt(e,$e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Fr(e,Ct,Rn);break;case 3:if(dr(e,r),(r&130023424)===r&&(t=qh+500-$e(),10<t)){if(Sl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gf(Fr.bind(null,e,Ct,Rn),t);break}Fr(e,Ct,Rn);break;case 4:if(dr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ST(r/1960))-r,10<r){e.timeoutHandle=Gf(Fr.bind(null,e,Ct,Rn),r);break}Fr(e,Ct,Rn);break;case 5:Fr(e,Ct,Rn);break;default:throw Error(V(329))}}}return Pt(e,$e()),e.callbackNode===n?jb.bind(null,e):null}function fp(e,t){var n=sa;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=Ct,Ct=n,t!==null&&pp(t)),e}function pp(e){Ct===null?Ct=e:Ct.push.apply(Ct,e)}function _T(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~Gh,t&=~Pc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dn(t),r=1<<n;e[n]=-1,t&=~r}}function E0(e){if(se&6)throw Error(V(327));Hi();var t=Sl(e,0);if(!(t&1))return Pt(e,$e()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var r=Ff(e);r!==0&&(t=r,n=fp(e,r))}if(n===1)throw n=ja,qr(e,0),dr(e,t),Pt(e,$e()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fr(e,Ct,Rn),Pt(e,$e()),null}function Yh(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(to=$e()+500,Cc&&Mr())}}function ei(e){hr!==null&&hr.tag===0&&!(se&6)&&Hi();var t=se;se|=1;var n=Xt.transition,r=me;try{if(Xt.transition=null,me=1,e)return e()}finally{me=r,Xt.transition=n,se=t,!(se&6)&&Mr()}}function Xh(){Dt=zi.current,be(zi)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jk(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:Ji(),be(kt),be(ut),Fh();break;case 5:Rh(r);break;case 4:Ji();break;case 13:be(Ee);break;case 19:be(Ee);break;case 10:Ih(r.type._context);break;case 22:case 23:Xh()}n=n.return}if(Xe=e,Ae=e=Er(e.current,null),tt=Dt=t,Ue=0,ja=null,Gh=Pc=Jr=0,Ct=sa=null,Wr!==null){for(t=0;t<Wr.length;t++)if(n=Wr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Wr=null}return e}function $b(e,t){do{var n=Ae;try{if(Mh(),Gs.current=Al,Ll){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ll=!1}if(Zr=0,Ye=Be=ke=null,oa=!1,Ta=0,Hh.current=null,n===null||n.return===null){Ue=1,ja=t,Ae=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=tt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=l,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var v=u.alternate;v?(u.updateQueue=v.updateQueue,u.memoizedState=v.memoizedState,u.lanes=v.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=f0(a);if(g!==null){g.flags&=-257,p0(g,a,l,o,t),g.mode&1&&d0(o,c,t),t=g,s=c;var h=t.updateQueue;if(h===null){var y=new Set;y.add(s),t.updateQueue=y}else h.add(s);break e}else{if(!(t&1)){d0(o,c,t),Kh();break e}s=Error(V(426))}}else if(Ce&&l.mode&1){var w=f0(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),p0(w,a,l,o,t),jh(eo(s,l));break e}}o=s=eo(s,l),Ue!==4&&(Ue=2),sa===null?sa=[o]:sa.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=hb(o,s,t);i0(o,p);break e;case 1:l=s;var m=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(_r===null||!_r.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=mb(o,l,t);i0(o,S);break e}}o=o.return}while(o!==null)}Db(n)}catch(E){t=E,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function Mb(){var e=Rl.current;return Rl.current=Al,e===null?Al:e}function Kh(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Xe===null||!(Jr&268435455)&&!(Pc&268435455)||dr(Xe,tt)}function Nl(e,t){var n=se;se|=2;var r=Mb();(Xe!==e||tt!==t)&&(Rn=null,qr(e,t));do try{CT();break}catch(i){$b(e,i)}while(1);if(Mh(),se=n,Rl.current=r,Ae!==null)throw Error(V(261));return Xe=null,tt=0,Ue}function CT(){for(;Ae!==null;)Ib(Ae)}function ET(){for(;Ae!==null&&!KE();)Ib(Ae)}function Ib(e){var t=Ab(e.alternate,e,Dt);e.memoizedProps=e.pendingProps,t===null?Db(e):Ae=t,Hh.current=null}function Db(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yT(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Ae=null;return}}else if(n=vT(n,t,Dt),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ue===0&&(Ue=5)}function Fr(e,t,n){var r=me,i=Xt.transition;try{Xt.transition=null,me=1,kT(e,t,n,r)}finally{Xt.transition=i,me=r}return null}function kT(e,t,n,r){do Hi();while(hr!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ak(e,o),e===Xe&&(Ae=Xe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ws||(ws=!0,Rb(wl,function(){return Hi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Xt.transition,Xt.transition=null;var a=me;me=1;var l=se;se|=4,Hh.current=null,bT(e,n),Pb(n,e),Gk(Wf),_l=!!Uf,Wf=Uf=null,e.current=n,wT(n),QE(),se=l,me=a,Xt.transition=o}else e.current=n;if(ws&&(ws=!1,hr=e,zl=i),o=e.pendingLanes,o===0&&(_r=null),ek(n.stateNode),Pt(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fl)throw Fl=!1,e=up,up=null,e;return zl&1&&e.tag!==0&&Hi(),o=e.pendingLanes,o&1?e===dp?la++:(la=0,dp=e):la=0,Mr(),null}function Hi(){if(hr!==null){var e=px(zl),t=Xt.transition,n=me;try{if(Xt.transition=null,me=16>e?16:e,hr===null)var r=!1;else{if(e=hr,hr=null,zl=0,se&6)throw Error(V(331));var i=se;for(se|=4,H=e.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(H=c;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:aa(8,u,o)}var d=u.child;if(d!==null)d.return=u,H=d;else for(;H!==null;){u=H;var v=u.sibling,g=u.return;if(Eb(u),u===c){H=null;break}if(v!==null){v.return=g,H=v;break}H=g}}}var h=o.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:aa(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,H=p;break e}H=o.return}}var m=e.current;for(H=m;H!==null;){a=H;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,H=x;else e:for(a=m;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Tc(9,l)}}catch(E){Oe(l,l.return,E)}if(l===a){H=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,H=S;break e}H=l.return}}if(se=i,Mr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(xc,e)}catch{}r=!0}return r}finally{me=n,Xt.transition=t}}return!1}function k0(e,t,n){t=eo(n,t),t=hb(e,t,1),e=Sr(e,t,1),t=gt(),e!==null&&(Ua(e,1,t),Pt(e,t))}function Oe(e,t,n){if(e.tag===3)k0(e,e,n);else for(;t!==null;){if(t.tag===3){k0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){e=eo(n,e),e=mb(t,e,1),t=Sr(t,e,1),e=gt(),t!==null&&(Ua(t,1,e),Pt(t,e));break}}t=t.return}}function TT(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(tt&n)===n&&(Ue===4||Ue===3&&(tt&130023424)===tt&&500>$e()-qh?qr(e,0):Gh|=n),Pt(e,t)}function Lb(e,t){t===0&&(e.mode&1?(t=ds,ds<<=1,!(ds&130023424)&&(ds=4194304)):t=1);var n=gt();e=Kn(e,t),e!==null&&(Ua(e,t,n),Pt(e,n))}function PT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lb(e,n)}function OT(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Lb(e,n)}var Ab;Ab=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,gT(e,t,n);Et=!!(e.flags&131072)}else Et=!1,Ce&&t.flags&1048576&&zx(t,jl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ys(e,t),e=t.pendingProps;var i=Ki(t,ut.current);Wi(t,n),i=Nh(null,t,r,e,i,n);var o=Bh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Tt(r)?(o=!0,Pl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lh(t),i.updater=Ec,t.stateNode=i,i._reactInternals=t,Jf(t,r,e,n),t=np(null,t,r,!0,o,n)):(t.tag=0,Ce&&o&&Ph(t),ht(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ys(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$T(r),e=an(r,e),i){case 0:t=tp(null,t,r,e,n);break e;case 1:t=g0(null,t,r,e,n);break e;case 11:t=h0(null,t,r,e,n);break e;case 14:t=m0(null,t,r,an(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),tp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),g0(e,t,r,i,n);case 3:e:{if(xb(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ux(e,t),Il(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=eo(Error(V(423)),t),t=v0(e,t,r,n,i);break e}else if(r!==i){i=eo(Error(V(424)),t),t=v0(e,t,r,n,i);break e}else for(At=wr(t.stateNode.containerInfo.firstChild),Ft=t,Ce=!0,cn=null,n=qx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){t=Qn(e,t,n);break e}ht(e,t,r,n)}t=t.child}return t;case 5:return Yx(t),e===null&&Kf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Hf(r,i)?a=null:o!==null&&Hf(r,o)&&(t.flags|=32),yb(e,t),ht(e,t,a,n),t.child;case 6:return e===null&&Kf(t),null;case 13:return bb(e,t,n);case 4:return Ah(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zi(t,null,r,n):ht(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),h0(e,t,r,i,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ve($l,r._currentValue),r._currentValue=a,o!==null)if(gn(o.value,a)){if(o.children===i.children&&!kt.current){t=Qn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Hn(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Qf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Qf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ht(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Wi(t,n),i=Kt(i),r=r(i),t.flags|=1,ht(e,t,r,n),t.child;case 14:return r=t.type,i=an(r,t.pendingProps),i=an(r.type,i),m0(e,t,r,i,n);case 15:return gb(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),Ys(e,t),t.tag=1,Tt(r)?(e=!0,Pl(t)):e=!1,Wi(t,n),Hx(t,r,i),Jf(t,r,i,n),np(null,t,r,!0,e,n);case 19:return wb(e,t,n);case 22:return vb(e,t,n)}throw Error(V(156,t.tag))};function Rb(e,t){return cx(e,t)}function jT(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(e,t,n,r){return new jT(e,t,n,r)}function Qh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $T(e){if(typeof e=="function")return Qh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gh)return 11;if(e===vh)return 14}return 2}function Er(e,t){var n=e.alternate;return n===null?(n=Yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Qh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Oi:return Yr(n.children,i,o,t);case mh:a=8,i|=8;break;case _f:return e=Yt(12,n,t,i|2),e.elementType=_f,e.lanes=o,e;case Cf:return e=Yt(13,n,t,i),e.elementType=Cf,e.lanes=o,e;case Ef:return e=Yt(19,n,t,i),e.elementType=Ef,e.lanes=o,e;case Gy:return Oc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wy:a=10;break e;case Hy:a=9;break e;case gh:a=11;break e;case vh:a=14;break e;case lr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Yt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yr(e,t,n,r){return e=Yt(7,e,r,t),e.lanes=n,e}function Oc(e,t,n,r){return e=Yt(22,e,r,t),e.elementType=Gy,e.lanes=n,e.stateNode={isHidden:!1},e}function hd(e,t,n){return e=Yt(6,e,null,t),e.lanes=n,e}function md(e,t,n){return t=Yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function MT(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zh(e,t,n,r,i,o,a,l,s){return e=new MT(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Yt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lh(o),e}function IT(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fb(e){if(!e)return Pr;e=e._reactInternals;e:{if(ui(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Tt(n))return Rx(e,n,t)}return t}function zb(e,t,n,r,i,o,a,l,s){return e=Zh(n,r,!0,e,i,o,a,l,s),e.context=Fb(null),n=e.current,r=gt(),i=Cr(n),o=Hn(r,i),o.callback=t??null,Sr(n,o,i),e.current.lanes=i,Ua(e,i,r),Pt(e,r),e}function jc(e,t,n,r){var i=t.current,o=gt(),a=Cr(i);return n=Fb(n),t.context===null?t.context=n:t.pendingContext=n,t=Hn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sr(i,t,a),e!==null&&(fn(e,i,a,o),Hs(e,i,a)),a}function Bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function T0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jh(e,t){T0(e,t),(e=e.alternate)&&T0(e,t)}function DT(){return null}var Nb=typeof reportError=="function"?reportError:function(e){console.error(e)};function em(e){this._internalRoot=e}$c.prototype.render=em.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));jc(e,t,null,null)};$c.prototype.unmount=em.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ei(function(){jc(null,e,null,null)}),t[Xn]=null}};function $c(e){this._internalRoot=e}$c.prototype.unstable_scheduleHydration=function(e){if(e){var t=gx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ur.length&&t!==0&&t<ur[n].priority;n++);ur.splice(n,0,e),n===0&&yx(e)}};function tm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function P0(){}function LT(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Bl(a);o.call(c)}}var a=zb(t,r,e,0,null,!1,!1,"",P0);return e._reactRootContainer=a,e[Xn]=a.current,Sa(e.nodeType===8?e.parentNode:e),ei(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Bl(s);l.call(c)}}var s=Zh(e,0,!1,null,null,!1,!1,"",P0);return e._reactRootContainer=s,e[Xn]=s.current,Sa(e.nodeType===8?e.parentNode:e),ei(function(){jc(t,s,n,r)}),s}function Ic(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Bl(a);l.call(s)}}jc(t,a,e,i)}else a=LT(n,t,e,i,r);return Bl(a)}hx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qo(t.pendingLanes);n!==0&&(bh(t,n|1),Pt(t,$e()),!(se&6)&&(to=$e()+500,Mr()))}break;case 13:ei(function(){var r=Kn(e,1);if(r!==null){var i=gt();fn(r,e,1,i)}}),Jh(e,1)}};wh=function(e){if(e.tag===13){var t=Kn(e,134217728);if(t!==null){var n=gt();fn(t,e,134217728,n)}Jh(e,134217728)}};mx=function(e){if(e.tag===13){var t=Cr(e),n=Kn(e,t);if(n!==null){var r=gt();fn(n,e,t,r)}Jh(e,t)}};gx=function(){return me};vx=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};Lf=function(e,t,n){switch(t){case"input":if(Pf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_c(r);if(!i)throw Error(V(90));Yy(r),Pf(r,i)}}}break;case"textarea":Ky(e,n);break;case"select":t=n.value,t!=null&&Ni(e,!!n.multiple,t,!1)}};rx=Yh;ix=ei;var AT={usingClientEntryPoint:!1,Events:[Ha,Ii,_c,tx,nx,Yh]},Lo={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},RT={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sx(e),e===null?null:e.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||DT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{xc=Ss.inject(RT),Tn=Ss}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AT;Vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tm(t))throw Error(V(200));return IT(e,t,null,n)};Vt.createRoot=function(e,t){if(!tm(e))throw Error(V(299));var n=!1,r="",i=Nb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zh(e,1,!1,null,null,n,!1,r,i),e[Xn]=t.current,Sa(e.nodeType===8?e.parentNode:e),new em(t)};Vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=sx(t),e=e===null?null:e.stateNode,e};Vt.flushSync=function(e){return ei(e)};Vt.hydrate=function(e,t,n){if(!Mc(t))throw Error(V(200));return Ic(null,e,t,!0,n)};Vt.hydrateRoot=function(e,t,n){if(!tm(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Nb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=zb(t,null,e,1,n??null,i,!1,o,a),e[Xn]=t.current,Sa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $c(t)};Vt.render=function(e,t,n){if(!Mc(t))throw Error(V(200));return Ic(null,e,t,!1,n)};Vt.unmountComponentAtNode=function(e){if(!Mc(e))throw Error(V(40));return e._reactRootContainer?(ei(function(){Ic(null,null,e,!1,function(){e._reactRootContainer=null,e[Xn]=null})}),!0):!1};Vt.unstable_batchedUpdates=Yh;Vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mc(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Ic(e,t,n,!1,r)};Vt.version="18.2.0-next-9e3b772b8-20220608";function Bb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bb)}catch(e){console.error(e)}}Bb(),zy.exports=Vt;var Dc=zy.exports,O0=Dc;wf.createRoot=O0.createRoot,wf.hydrateRoot=O0.hydrateRoot;var ct=function(){return ct=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ct.apply(this,arguments)};function no(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function FT(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var zT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,NT=FT(function(e){return zT.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),xe="-ms-",ca="-moz-",ce="-webkit-",Vb="comm",Lc="rule",nm="decl",BT="@import",VT="@namespace",Ub="@keyframes",UT="@layer",Wb=Math.abs,rm=String.fromCharCode,hp=Object.assign;function WT(e,t){return Ve(e,0)^45?(((t<<2^Ve(e,0))<<2^Ve(e,1))<<2^Ve(e,2))<<2^Ve(e,3):0}function Hb(e){return e.trim()}function Fn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Zs(e,t,n){return e.indexOf(t,n)}function Ve(e,t){return e.charCodeAt(t)|0}function ti(e,t,n){return e.slice(t,n)}function ln(e){return e.length}function Gb(e){return e.length}function Xo(e,t){return t.push(e),e}function HT(e,t){return e.map(t).join("")}function j0(e,t){return e.filter(function(n){return!Fn(n,t)})}var Ac=1,ro=1,qb=0,Zt=0,De=0,vo="";function Rc(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ac,column:ro,length:a,return:"",siblings:l}}function sr(e,t){return hp(Rc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function gi(e){for(;e.root;)e=sr(e.root,{children:[e]});Xo(e,e.siblings)}function GT(){return De}function qT(){return De=Zt>0?Ve(vo,--Zt):0,ro--,De===10&&(ro=1,Ac--),De}function pn(){return De=Zt<qb?Ve(vo,Zt++):0,ro++,De===10&&(ro=1,Ac++),De}function mr(){return Ve(vo,Zt)}function Js(){return Zt}function Fc(e,t){return ti(vo,e,t)}function $a(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function YT(e){return Ac=ro=1,qb=ln(vo=e),Zt=0,[]}function XT(e){return vo="",e}function gd(e){return Hb(Fc(Zt-1,mp(e===91?e+2:e===40?e+1:e)))}function KT(e){for(;(De=mr())&&De<33;)pn();return $a(e)>2||$a(De)>3?"":" "}function QT(e,t){for(;--t&&pn()&&!(De<48||De>102||De>57&&De<65||De>70&&De<97););return Fc(e,Js()+(t<6&&mr()==32&&pn()==32))}function mp(e){for(;pn();)switch(De){case e:return Zt;case 34:case 39:e!==34&&e!==39&&mp(De);break;case 40:e===41&&mp(e);break;case 92:pn();break}return Zt}function ZT(e,t){for(;pn()&&e+De!==47+10;)if(e+De===42+42&&mr()===47)break;return"/*"+Fc(t,Zt-1)+"*"+rm(e===47?e:pn())}function JT(e){for(;!$a(mr());)pn();return Fc(e,Zt)}function eP(e){return XT(el("",null,null,null,[""],e=YT(e),0,[0],e))}function el(e,t,n,r,i,o,a,l,s){for(var c=0,u=0,d=a,v=0,g=0,h=0,y=1,w=1,p=1,m=0,x="",S=i,E=o,P=r,k=x;w;)switch(h=m,m=pn()){case 40:if(h!=108&&Ve(k,d-1)==58){Zs(k+=ne(gd(m),"&","&\f"),"&\f",Wb(c?l[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:k+=gd(m);break;case 9:case 10:case 13:case 32:k+=KT(h);break;case 92:k+=QT(Js()-1,7);continue;case 47:switch(mr()){case 42:case 47:Xo(tP(ZT(pn(),Js()),t,n,s),s),($a(h||1)==5||$a(mr()||1)==5)&&ln(k)&&ti(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*y:l[c++]=ln(k)*p;case 125*y:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+u:p==-1&&(k=ne(k,/\f/g,"")),g>0&&(ln(k)-d||y===0&&h===47)&&Xo(g>32?M0(k+";",r,n,d-1,s):M0(ne(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Xo(P=$0(k,t,n,c,u,i,l,x,S=[],E=[],d,o),o),m===123)if(u===0)el(k,t,P,P,S,o,d,l,E);else{switch(v){case 99:if(Ve(k,3)===110)break;case 108:if(Ve(k,2)===97)break;default:u=0;case 100:case 109:case 115:}u?el(e,P,P,r&&Xo($0(e,P,P,0,0,i,l,x,i,S=[],d,E),E),i,E,d,l,r?S:E):el(k,P,P,P,[""],E,0,l,E)}}c=u=g=0,y=p=1,x=k="",d=a;break;case 58:d=1+ln(k),g=h;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&qT()==125)continue}switch(k+=rm(m),m*y){case 38:p=u>0?1:(k+="\f",-1);break;case 44:l[c++]=(ln(k)-1)*p,p=1;break;case 64:mr()===45&&(k+=gd(pn())),v=mr(),u=d=ln(x=k+=JT(Js())),m++;break;case 45:h===45&&ln(k)==2&&(y=0)}}return o}function $0(e,t,n,r,i,o,a,l,s,c,u,d){for(var v=i-1,g=i===0?o:[""],h=Gb(g),y=0,w=0,p=0;y<r;++y)for(var m=0,x=ti(e,v+1,v=Wb(w=a[y])),S=e;m<h;++m)(S=Hb(w>0?g[m]+" "+x:ne(x,/&\f/g,g[m])))&&(s[p++]=S);return Rc(e,t,n,i===0?Lc:l,s,c,u,d)}function tP(e,t,n,r){return Rc(e,t,n,Vb,rm(GT()),ti(e,2,-2),0,r)}function M0(e,t,n,r,i){return Rc(e,t,n,nm,ti(e,0,r),ti(e,r+1,-1),r,i)}function Yb(e,t,n){switch(WT(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ce+e+e;case 4855:return ce+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ca+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+ca+e+xe+e+e;case 5936:switch(Ve(e,t+11)){case 114:return ce+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ce+e+xe+e+e;case 6165:return ce+e+xe+"flex-"+e+e;case 5187:return ce+e+ne(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return ce+e+xe+"flex-item-"+ne(e,/flex-|-self/g,"")+(Fn(e,/flex-|baseline/)?"":xe+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ce+e+xe+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ce+e+xe+ne(e,"shrink","negative")+e;case 5292:return ce+e+xe+ne(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+ne(e,"-grow","")+ce+e+xe+ne(e,"grow","positive")+e;case 4554:return ce+ne(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+xe+"flex-pack:$3"),/space-between/,"justify")+ce+e+e;case 4200:if(!Fn(e,/flex-|baseline/))return xe+"grid-column-align"+ti(e,t)+e;break;case 2592:case 3360:return xe+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Fn(r.props,/grid-\w+-end/)})?~Zs(e+(n=n[t].value),"span",0)?e:xe+ne(e,"-start","")+e+xe+"grid-row-span:"+(~Zs(n,"span",0)?Fn(n,/\d+/):+Fn(n,/\d+/)-+Fn(e,/\d+/))+";":xe+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Fn(r.props,/grid-\w+-start/)})?e:xe+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(e)-1-t>6)switch(Ve(e,t+1)){case 109:if(Ve(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+ca+(Ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zs(e,"stretch",0)?Yb(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,c){return xe+i+":"+o+c+(a?xe+i+"-span:"+(l?s:+s-+o)+c:"")+e});case 4949:if(Ve(e,t+6)===121)return ne(e,":",":"+ce)+e;break;case 6444:switch(Ve(e,Ve(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Ve(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+xe+"$2box$3")+e;case 100:return ne(e,":",":"+xe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Vl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function nP(e,t,n,r){switch(e.type){case UT:if(e.children.length)break;case BT:case VT:case nm:return e.return=e.return||e.value;case Vb:return"";case Ub:return e.return=e.value+"{"+Vl(e.children,r)+"}";case Lc:if(!ln(e.value=e.props.join(",")))return""}return ln(n=Vl(e.children,r))?e.return=e.value+"{"+n+"}":""}function rP(e){var t=Gb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function iP(e){return function(t){t.root||(t=t.return)&&e(t)}}function oP(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case nm:e.return=Yb(e.value,e.length,n);return;case Ub:return Vl([sr(e,{value:ne(e.value,"@","@"+ce)})],r);case Lc:if(e.length)return HT(n=e.props,function(i){switch(Fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gi(sr(e,{props:[ne(i,/:(read-\w+)/,":"+ca+"$1")]})),gi(sr(e,{props:[i]})),hp(e,{props:j0(n,r)});break;case"::placeholder":gi(sr(e,{props:[ne(i,/:(plac\w+)/,":"+ce+"input-$1")]})),gi(sr(e,{props:[ne(i,/:(plac\w+)/,":"+ca+"$1")]})),gi(sr(e,{props:[ne(i,/:(plac\w+)/,xe+"input-$1")]})),gi(sr(e,{props:[i]})),hp(e,{props:j0(n,r)});break}return""})}}var aP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},io=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Xb="active",Kb="data-styled-version",zc="6.3.11",im=`/*!sc*/
`,ua=typeof window<"u"&&typeof document<"u",sP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),lP={};function qa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tl=new Map,Ul=new Map,nl=1,Ko=function(e){if(tl.has(e))return tl.get(e);for(;Ul.has(nl);)nl++;var t=nl++;return tl.set(e,t),Ul.set(t,e),t},cP=function(e,t){nl=t+1,tl.set(e,t),Ul.set(t,e)},om=Object.freeze([]),oo=Object.freeze({});function Qb(e,t,n){return n===void 0&&(n=oo),e.theme!==n.theme&&e.theme||t||n.theme}var Zb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),uP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dP=/(^-|-$)/g;function I0(e){return e.replace(uP,"-").replace(dP,"")}var fP=/(a)(d)/gi,D0=function(e){return String.fromCharCode(e+(e>25?39:97))};function gp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=D0(t%52)+n;return(D0(t%52)+n).replace(fP,"$1-$2")}var vd,zr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jb=function(e){return zr(5381,e)};function am(e){return gp(Jb(e)>>>0)}function pP(e){return e.displayName||e.name||"Component"}function yd(e){return typeof e=="string"&&!0}var ew=typeof Symbol=="function"&&Symbol.for,tw=ew?Symbol.for("react.memo"):60115,hP=ew?Symbol.for("react.forward_ref"):60112,mP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vP=((vd={})[hP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vd[tw]=nw,vd);function L0(e){return("type"in(t=e)&&t.type.$$typeof)===tw?nw:"$$typeof"in e?vP[e.$$typeof]:mP;var t}var yP=Object.defineProperty,xP=Object.getOwnPropertyNames,A0=Object.getOwnPropertySymbols,bP=Object.getOwnPropertyDescriptor,wP=Object.getPrototypeOf,R0=Object.prototype;function rw(e,t,n){if(typeof t!="string"){if(R0){var r=wP(t);r&&r!==R0&&rw(e,r,n)}var i=xP(t);A0&&(i=i.concat(A0(t)));for(var o=L0(e),a=L0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in gP||n&&n[s]||a&&s in a||o&&s in o)){var c=bP(t,s);try{yP(e,s,c)}catch{}}}}return e}function ao(e){return typeof e=="function"}function sm(e){return typeof e=="object"&&"styledComponentId"in e}function Gr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wl(e,t){return e.join(t||"")}function Ma(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function vp(e,t,n){if(n===void 0&&(n=!1),!n&&!Ma(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=vp(e[r],t[r]);else if(Ma(t))for(var r in t)e[r]=vp(e[r],t[r]);return e}function lm(e,t){Object.defineProperty(e,"toString",{value:t})}var SP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw qa(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+im;return n},e}(),_P="style[".concat(io,"][").concat(Kb,'="').concat(zc,'"]'),CP=new RegExp("^".concat(io,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},yp=function(e){if(!e)return document;if(F0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(F0(t))return t}return document},EP=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},kP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(im),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(CP);if(s){var c=0|parseInt(s[1],10),u=s[2];c!==0&&(cP(u,c),EP(e,u,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},xd=function(e){for(var t=yp(e.options.target).querySelectorAll(_P),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(io)!==Xb&&(kP(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function TP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var iw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(io,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(io,Xb),r.setAttribute(Kb,zc);var a=TP();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},PP=function(){function e(t){this.element=iw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw qa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),OP=function(){function e(t){this.element=iw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),jP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),z0=ua,$P={isServer:!ua,useCSSOMInjection:!sP},Hl=function(){function e(t,n,r){t===void 0&&(t=oo),n===void 0&&(n={});var i=this;this.options=ct(ct({},$P),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ua&&z0&&(z0=!1,xd(this)),lm(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",c=function(d){var v=function(p){return Ul.get(p)}(d);if(v===void 0)return"continue";var g=o.names.get(v);if(g===void 0||!g.size)return"continue";var h=a.getGroup(d);if(h.length===0)return"continue";var y=io+".g"+d+'[id="'+v+'"]',w="";g.forEach(function(p){p.length>0&&(w+=p+",")}),s+=h+y+'{content:"'+w+'"}'+im},u=0;u<l;u++)c(u);return s}(i)})}return e.registerId=function(t){return Ko(t)},e.prototype.rehydrate=function(){!this.server&&ua&&xd(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ct(ct({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ua&&t.target!==this.options.target&&yp(this.options.target)!==yp(t.target)&&xd(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new jP(i):r?new PP(i):new OP(i)}(this.options),new SP(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ko(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ko(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ko(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),MP=/&/g,zn=47,Nr=42;function N0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==zn||e.charCodeAt(o+1)!==Nr)if(i)a===Nr&&e.charCodeAt(o+1)===zn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function ow(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ow(n.children,t)),n})}function IP(e){var t,n,r,i=e===void 0?oo:e,o=i.options,a=o===void 0?oo:o,l=i.plugins,s=l===void 0?om:l,c=function(h,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},u=s.slice();u.push(function(h){h.type===Lc&&h.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),h.props[0]=h.props[0].replace(MP,n).replace(r,c))}),a.prefix&&u.push(oP),u.push(nP);var d=[],v=rP(u.concat(iP(function(h){return d.push(h)}))),g=function(h,y,w,p){y===void 0&&(y=""),w===void 0&&(w=""),p===void 0&&(p="&"),t=p,n=y,r=void 0;var m=function(S){if(!N0(S))return S;for(var E=S.length,P="",k=0,C=0,j=0,M=!1,A=0;A<E;A++){var I=S.charCodeAt(A);if(j!==0||M||I!==zn||S.charCodeAt(A+1)!==Nr)if(M)I===Nr&&S.charCodeAt(A+1)===zn&&(M=!1,A++);else if(I!==34&&I!==39||A!==0&&S.charCodeAt(A-1)===92){if(j===0)if(I===123)C++;else if(I===125){if(--C<0){for(var O=A+1;O<E;){var F=S.charCodeAt(O);if(F===59||F===10)break;O++}O<E&&S.charCodeAt(O)===59&&O++,C=0,A=O-1,k=O;continue}C===0&&(P+=S.substring(k,A+1),k=A+1)}else I===59&&C===0&&(P+=S.substring(k,A+1),k=A+1)}else j===0?j=I:j===I&&(j=0);else M=!0,A++}if(k<E){var D=S.substring(k);N0(D)||(P+=D)}return P}(function(S){if(S.indexOf("//")===-1)return S;for(var E=S.length,P=[],k=0,C=0,j=0,M=0;C<E;){var A=S.charCodeAt(C);if(A!==34&&A!==39||C!==0&&S.charCodeAt(C-1)===92)if(j===0)if(A===zn&&C+1<E&&S.charCodeAt(C+1)===Nr){for(C+=2;C+1<E&&(S.charCodeAt(C)!==Nr||S.charCodeAt(C+1)!==zn);)C++;C+=2}else if(A===40&&C>=3&&(32|S.charCodeAt(C-1))==108&&(32|S.charCodeAt(C-2))==114&&(32|S.charCodeAt(C-3))==117)M=1,C++;else if(M>0)A===41?M--:A===40&&M++,C++;else if(A===Nr&&C+1<E&&S.charCodeAt(C+1)===zn)C>k&&P.push(S.substring(k,C)),k=C+=2;else if(A===zn&&C+1<E&&S.charCodeAt(C+1)===zn){for(C>k&&P.push(S.substring(k,C));C<E&&S.charCodeAt(C)!==10;)C++;k=C}else C++;else C++;else j===0?j=A:j===A&&(j=0),C++}return k===0?S:(k<E&&P.push(S.substring(k)),P.join(""))}(h)),x=eP(w||y?"".concat(w," ").concat(y," { ").concat(m," }"):m);return a.namespace&&(x=ow(x,a.namespace)),d=[],Vl(x,v),d};return g.hash=s.length?s.reduce(function(h,y){return y.name||qa(15),zr(h,y.name)},5381).toString():"",g}var DP=new Hl,xp=IP(),aw=X.createContext({shouldForwardProp:void 0,styleSheet:DP,stylis:xp});aw.Consumer;X.createContext(void 0);function bp(){return X.useContext(aw)}var sw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=xp);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,lm(this,function(){throw qa(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=xp),this.name+t.hash},e}();function LP(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in aP||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var AP=function(e){return e>="A"&&e<="Z"};function B0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;AP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lw=function(e){return e==null||e===!1||e===""},cw=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!lw(r)&&(Array.isArray(r)&&r.isCss||ao(r)?t.push("".concat(B0(n),":"),r,";"):Ma(r)?t.push.apply(t,no(no(["".concat(n," {")],cw(r),!1),["}"],!1)):t.push("".concat(B0(n),": ").concat(LP(n,r),";")))}return t};function kr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(lw(e))return i;if(sm(e))return i.push(".".concat(e.styledComponentId)),i;if(ao(e)){if(!ao(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return kr(o,t,n,r,i)}var a;if(e instanceof sw)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Ma(e)){for(var l=cw(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)kr(e[s],t,n,r,i);return i}function uw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ao(n)&&!sm(n))return!1}return!0}var RP=Jb(zc),FP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&uw(t),this.componentId=n,this.baseHash=zr(RP,n),this.baseStyle=r,Hl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gr(i,this.staticRulesId);else{var o=Wl(kr(this.rules,t,n,r)),a=gp(zr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Gr(i,a),this.staticRulesId=a}else{for(var s=zr(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var v=Wl(kr(d,t,n,r));s=zr(zr(s,String(u)),v),c+=v}}if(c){var g=gp(s>>>0);if(!n.hasNameForId(this.componentId,g)){var h=r(c,".".concat(g),void 0,this.componentId);n.insertRules(this.componentId,g,h)}i=Gr(i,g)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ko(this.componentId)):""}},e}(),cm=X.createContext(void 0);cm.Consumer;var bd={};function zP(e,t,n){var r=sm(e),i=e,o=!yd(e),a=t.attrs,l=a===void 0?om:a,s=t.componentId,c=s===void 0?function(S,E){var P=typeof S!="string"?"sc":I0(S);bd[P]=(bd[P]||0)+1;var k="".concat(P,"-").concat(am(zc+P+bd[P]));return E?"".concat(E,"-").concat(k):k}(t.displayName,t.parentComponentId):s,u=t.displayName,d=u===void 0?function(S){return yd(S)?"styled.".concat(S):"Styled(".concat(pP(S),")")}(e):u,v=t.displayName&&t.componentId?"".concat(I0(t.displayName),"-").concat(t.componentId):t.componentId||c,g=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;h=function(S,E){return y(S,E)&&w(S,E)}}else h=y}var p=new FP(n,v,r?i.componentStyle:void 0);function m(S,E){return function(P,k,C){var j=P.attrs,M=P.componentStyle,A=P.defaultProps,I=P.foldedComponentIds,O=P.styledComponentId,F=P.target,D=X.useContext(cm),L=bp(),R=P.shouldForwardProp||L.shouldForwardProp,T=Qb(k,D,A)||oo,$=function(Y,ee,pe){for(var we,ie=ct(ct({},ee),{className:void 0,theme:pe}),Ie=0;Ie<Y.length;Ie+=1){var We=ao(we=Y[Ie])?we(ie):we;for(var He in We)He==="className"?ie.className=Gr(ie.className,We[He]):He==="style"?ie.style=ct(ct({},ie.style),We[He]):ie[He]=We[He]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Gr(ie.className,ee.className)),ie}(j,k,T),z=$.as||F,B={};for(var N in $)$[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&$.theme===T||(N==="forwardedAs"?B.as=$.forwardedAs:R&&!R(N,z)||(B[N]=$[N]));var U=function(Y,ee){var pe=bp(),we=Y.generateAndInjectStyles(ee,pe.styleSheet,pe.stylis);return we}(M,$),G=U.className,W=Gr(I,O);return G&&(W+=" "+G),$.className&&(W+=" "+$.className),B[yd(z)&&!Zb.has(z)?"class":"className"]=W,C&&(B.ref=C),b.createElement(z,B)}(x,S,E)}m.displayName=d;var x=X.forwardRef(m);return x.attrs=g,x.componentStyle=p,x.displayName=d,x.shouldForwardProp=h,x.foldedComponentIds=r?Gr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=v,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var C=0,j=P;C<j.length;C++)vp(E,j[C],!0);return E}({},i.defaultProps,S):S}}),lm(x,function(){return".".concat(x.styledComponentId)}),o&&rw(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function V0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var U0=function(e){return Object.assign(e,{isCss:!0})};function um(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ao(e)||Ma(e))return U0(kr(V0(om,no([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?kr(r):U0(kr(V0(r,t)))}function wp(e,t,n){if(n===void 0&&(n=oo),!t)throw qa(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,um.apply(void 0,no([i],o,!1)))};return r.attrs=function(i){return wp(e,t,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return wp(e,t,ct(ct({},n),i))},r}var dw=function(e){return wp(zP,e)},_=dw;Zb.forEach(function(e){_[e]=dw(e)});var NP=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=uw(t),Hl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Wl(kr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Hl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function BP(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=um.apply(void 0,no([e],t,!1)),i="sc-global-".concat(am(JSON.stringify(r))),o=new NP(r,i),a=new WeakMap,l=function(c){var u=bp(),d=X.useContext(cm),v=a.get(u.styleSheet);return v===void 0&&(v=u.styleSheet.allocateGSInstance(i),a.set(u.styleSheet,v)),(typeof window>"u"||!u.styleSheet.server)&&s(v,c,u.styleSheet,d,u.stylis),X.useLayoutEffect(function(){return u.styleSheet.server||s(v,c,u.styleSheet,d,u.stylis),function(){var g;o.removeStyles(v,u.styleSheet),g=u.styleSheet.options.target,typeof document<"u"&&(g??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(h){return h.remove()})}},[v,c,u.styleSheet,d,u.stylis]),null};function s(c,u,d,v,g){if(o.isStatic)o.renderStyles(c,lP,d,g);else{var h=ct(ct({},u),{theme:Qb(u,v,l.defaultProps)});o.renderStyles(c,h,d,g)}}return X.memo(l)}function dm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Wl(um.apply(void 0,no([e],t,!1))),i=am(r);return new sw(i,r)}const VP=_.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,UP=_.div`
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
`,WP=_.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,HP=_.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,GP=_.div`
  display: flex;
  justify-content: space-around;
  

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`,qP=_.button`
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

    
`;_(Te)`
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
`;const YP=_(Te)`
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
`;const XP=_.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,KP=_.button`
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
`;const QP=_.div`
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
`,ZP=_.button`
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
`,JP=_.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,vi=_(Te)`
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
`,eO=_.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,tO=_.div`
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
`,nO=_.div`
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
`,rO=_.input`
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
`,iO=_.button`
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
`,oO=_.svg`
  width: 24px;
  height: 24px;
`,aO=_.ul`
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
`,sO=_.li`
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


`,lO=_.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,cO=_.h3`
      text-align: left;
      font-size: 22px;
      font-weight: 800;

`,uO=_.h3`

      font-size: 22px;
         

`,dO=_.div`
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

    
`,hn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",fO=()=>{const[e,t]=b.useState(""),[n,r]=b.useState([]),[i,o]=b.useState(!1),a=$t(),l=b.useRef(null);b.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const c=setTimeout(async()=>{try{const d=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(d.data),o(!0)}catch(u){console.error(u)}},300);return()=>clearTimeout(c)},[e]),b.useEffect(()=>{const c=u=>{l.current&&!l.current.contains(u.target)&&o(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const s=c=>{t(""),o(!1),a(`/product/${c.id}`)};return f.jsxs(nO,{ref:l,children:[f.jsx(rO,{name:"site-search",value:e,onChange:c=>t(c.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),f.jsx(iO,{className:"search-button",children:f.jsx(oO,{children:f.jsx("use",{href:`${hn}#icon-search`})})}),i&&n.length>0&&f.jsx(aO,{children:n.map(c=>{var v,g;const d=c.new_price&&c.new_price<c.price?c.new_price:c.price;return f.jsxs(sO,{onClick:()=>s(c),children:[f.jsx(lO,{src:((g=(v=c.images)==null?void 0:v[0])==null?void 0:g.url)||"/nofoto.png",alt:""}),f.jsxs(dO,{children:[f.jsx(cO,{children:c.name}),f.jsxs(uO,{children:[d," грн."]})]})]},c.id)})})]})};var fw={exports:{}},pw={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=b;function pO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hO=typeof Object.is=="function"?Object.is:pO,mO=Ya.useSyncExternalStore,gO=Ya.useRef,vO=Ya.useEffect,yO=Ya.useMemo,xO=Ya.useDebugValue;pw.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=gO(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=yO(function(){function s(g){if(!c){if(c=!0,u=g,g=r(g),i!==void 0&&a.hasValue){var h=a.value;if(i(h,g))return d=h}return d=g}if(h=d,hO(u,g))return h;var y=r(g);return i!==void 0&&i(h,y)?(u=g,h):(u=g,d=y)}var c=!1,u,d,v=n===void 0?null:n;return[function(){return s(t())},v===null?void 0:function(){return s(v())}]},[t,n,r,i]);var l=mO(e,o[0],o[1]);return vO(function(){a.hasValue=!0,a.value=l},[l]),xO(l),l};fw.exports=pw;var bO=fw.exports;function wO(e){e()}function SO(){let e=null,t=null;return{clear(){e=null,t=null},notify(){wO(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var W0={notify(){},get:()=>[]};function _O(e,t){let n,r=W0,i=0,o=!1;function a(y){u();const w=r.subscribe(y);let p=!1;return()=>{p||(p=!0,w(),d())}}function l(){r.notify()}function s(){h.onStateChange&&h.onStateChange()}function c(){return o}function u(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=SO())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=W0)}function v(){o||(o=!0,u())}function g(){o&&(o=!1,d())}const h={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:c,trySubscribe:v,tryUnsubscribe:g,getListeners:()=>r};return h}var CO=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EO=CO(),kO=()=>typeof navigator<"u"&&navigator.product==="ReactNative",TO=kO(),PO=()=>EO||TO?b.useLayoutEffect:b.useEffect,OO=PO(),wd=Symbol.for("react-redux-context"),Sd=typeof globalThis<"u"?globalThis:{};function jO(){if(!b.createContext)return{};const e=Sd[wd]??(Sd[wd]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var Or=jO();function $O(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=_O(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);OO(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Or;return b.createElement(l.Provider,{value:o},t)}var MO=$O;function fm(e=Or){return function(){return b.useContext(e)}}var hw=fm();function mw(e=Or){const t=e===Or?hw:fm(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var IO=mw();function DO(e=Or){const t=e===Or?IO:mw(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Jt=DO(),LO=(e,t)=>e===t;function AO(e=Or){const t=e===Or?hw:fm(e),n=(r,i={})=>{const{equalityFn:o=LO}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:c}=a;b.useRef(!0);const u=b.useCallback({[r.name](v){return r(v)}}[r.name],[r]),d=bO.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,c||l.getState,u,o);return b.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Re=AO();const RO=_(Te)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,FO=_.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,zO=_.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,NO=_.div`
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
`,BO=({onClick:e})=>{const t=Re(n=>n.cart.items.length);return f.jsx(RO,{to:"/cart",children:f.jsxs(zO,{onClick:e,children:[f.jsx(FO,{children:f.jsx("use",{href:`${hn}#icon-cart`})}),t>0&&f.jsx(NO,{children:t})]})})},VO=_.nav`
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
`,yi=_(Te)`
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
`,UO=()=>f.jsxs(VO,{children:[f.jsx(yi,{to:"/",children:"Головна"}),f.jsx(yi,{to:"/catalog",children:"Каталог"}),f.jsx(yi,{to:"/catalog/new",children:"Новинки"}),f.jsx(yi,{to:"/catalog/sale",children:"Акційні товари"}),f.jsx(yi,{to:"/about",children:"Про нас"}),f.jsx(yi,{to:"/contacts",children:"Контакти"})]}),WO=_.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,HO=_(Te)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,GO=_.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,qO=_.div`

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
`,YO=({onClick:e})=>{const t=Re(n=>n.favorites.items.length);return f.jsx(HO,{to:"/favorite",children:f.jsxs(GO,{onClick:e,children:[f.jsx(WO,{children:f.jsx("use",{href:`${hn}#icon-heart`})}),t>0&&f.jsx(qO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=e=>{const t=KO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JO=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...QO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:gw("lucide",i),...!o&&!ZO(l)&&{"aria-hidden":"true"},...l},[...a.map(([c,u])=>b.createElement(c,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(JO,{ref:o,iconNode:t,className:gw(`lucide-${XO(H0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=H0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Nc=Ke("arrow-down-narrow-wide",ej);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Bc=Ke("arrow-right",tj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],rj=Ke("badge-percent",nj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],oj=Ke("chevron-down",ij);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],sj=Ke("chevron-up",aj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],G0=Ke("eye-off",lj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],q0=Ke("eye",cj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uj=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Xa=Ke("heart",uj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],fj=Ke("house",dj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],hj=Ke("info",pj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],gj=Ke("layers-plus",mj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],yj=Ke("mail",vj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],bj=Ke("shopping-bag",xj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],yo=Ke("shopping-cart",wj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],vw=Ke("sliders-horizontal",Sj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],yw=Ke("trash-2",_j);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Ej=Ke("user-round",Cj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xw=Ke("x",kj),Tj=({openLogin:e})=>{const[t,n]=b.useState(!1),r=$t(),i=()=>{localStorage.getItem("token")?r("/account"):e()};return f.jsx(VP,{children:f.jsx(UP,{children:f.jsxs(WP,{children:[f.jsxs(HP,{children:[f.jsx(YP,{to:"/",children:"Дідів хлів"}),f.jsxs(GP,{children:[f.jsx(BO,{}),f.jsx(qP,{onClick:i,children:f.jsx(Ej,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),f.jsx(YO,{}),f.jsx(UO,{}),f.jsx(KP,{onClick:()=>n(!t),children:f.jsx(XP,{children:f.jsx("use",{href:`${hn}#icon-menu`})})}),f.jsx(tO,{open:t,onClick:()=>n(!1)}),f.jsxs(QP,{open:t,children:[f.jsx(ZP,{onClick:()=>n(!1),children:f.jsx(xw,{size:28,strokeWidth:1.5})}),f.jsxs(JP,{children:[f.jsxs(vi,{onClick:()=>n(!1),to:"/",children:[f.jsx(fj,{size:22,strokeWidth:1.5})," Головна"]}),f.jsxs(vi,{onClick:()=>n(!1),to:"/catalog",children:[f.jsx(bj,{size:22,strokeWidth:1.5})," Каталог"]}),f.jsxs(vi,{onClick:()=>n(!1),to:"/catalog/new",children:[f.jsx(gj,{size:22,strokeWidth:1.5}),"Новинки"]}),f.jsxs(vi,{onClick:()=>n(!1),to:"/catalog/sale",children:[f.jsx(rj,{size:22,strokeWidth:1.5}),"Акційні товари"]}),f.jsxs(vi,{onClick:()=>n(!1),to:"/about",children:[f.jsx(hj,{size:22,strokeWidth:1.5})," Про нас"]}),f.jsxs(vi,{onClick:()=>n(!1),to:"/contacts",children:[f.jsx(yj,{size:22,strokeWidth:1.5})," Контакти"]})]}),f.jsx(eO,{children:f.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),f.jsx(fO,{})]})})})},Pj=_.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,Oj=_.footer`
 
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
`,jj=_.div`
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
`,_d=_.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,Cd=_.h3`
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
`,wn=_(Te)`
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
`,$j=_.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,Ed=_.a`
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
`,Mj=()=>f.jsx(Pj,{children:f.jsxs(Oj,{children:[f.jsxs(jj,{children:[f.jsxs(_d,{children:[f.jsx(Cd,{children:"Навігація"}),f.jsx(wn,{to:"/",children:"Головна"}),f.jsx(wn,{to:"/about",children:"Про нас"}),f.jsx(wn,{to:"/catalog",children:"Каталог"}),f.jsx(wn,{to:"/contacts",children:"Контакти"})]}),f.jsxs(_d,{children:[f.jsx(Cd,{children:"Інформація"}),f.jsx(wn,{to:"/delivery",children:"Оплата і доставка"}),f.jsx(wn,{children:"Повернення"}),f.jsx(wn,{children:"Гарантія"}),f.jsx(wn,{children:"Політика конфіденційності"})]})]}),f.jsxs(_d,{children:[f.jsx(Cd,{children:"Контакти"}),f.jsx(wn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),f.jsx(wn,{href:"mailto:email@email.com",children:"email@email.com"}),f.jsxs($j,{children:[f.jsx(Ed,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${hn}#icon-instagram`})})}),f.jsx(Ed,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${hn}#icon-telegram`})})}),f.jsx(Ed,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:f.jsx("use",{href:`${hn}#icon-olx`})})})]})]})]})}),Ij=({openLogin:e,openRegister:t})=>f.jsxs(f.Fragment,{children:[f.jsx(Tj,{openLogin:e,openRegister:t}),f.jsx("main",{style:{flex:1},children:f.jsx(Ay,{})}),f.jsx(Mj,{})]}),Dj=_.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,Lj=_.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
      text-align: center;

  @media screen and (min-width: 768px) {
 font-size: 35px;

  }

`,Aj=_.div`
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
`,Rj=_.div`
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
`,Fj=_(Te)`
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
`,zj=_.span`
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
`,Nj=_.div`
  padding: 10px 0;
`,Bj=_.h3`
  font-size: 20px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
   margin-bottom:16px;
`,Vj=_.div`
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
`;_(Te)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const Uj=_(Te)`
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

`,Wj=_.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,Hj=_.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Ze(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Gj=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),Y0=Gj,kd=()=>Math.random().toString(36).substring(7).split("").join("."),qj={INIT:`@@redux/INIT${kd()}`,REPLACE:`@@redux/REPLACE${kd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${kd()}`},Gl=qj;function pm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function hm(e,t,n){if(typeof e!="function")throw new Error(Ze(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ze(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ze(1));return n(hm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function c(){a===o&&(a=new Map,o.forEach((w,p)=>{a.set(p,w)}))}function u(){if(s)throw new Error(Ze(3));return i}function d(w){if(typeof w!="function")throw new Error(Ze(4));if(s)throw new Error(Ze(5));let p=!0;c();const m=l++;return a.set(m,w),function(){if(p){if(s)throw new Error(Ze(6));p=!1,c(),a.delete(m),o=null}}}function v(w){if(!pm(w))throw new Error(Ze(7));if(typeof w.type>"u")throw new Error(Ze(8));if(typeof w.type!="string")throw new Error(Ze(17));if(s)throw new Error(Ze(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(m=>{m()}),w}function g(w){if(typeof w!="function")throw new Error(Ze(10));r=w,v({type:Gl.REPLACE})}function h(){const w=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(Ze(11));function m(){const S=p;S.next&&S.next(u())}return m(),{unsubscribe:w(m)}},[Y0](){return this}}}return v({type:Gl.INIT}),{dispatch:v,subscribe:d,getState:u,replaceReducer:g,[Y0]:h}}function Yj(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Gl.INIT})>"u")throw new Error(Ze(12));if(typeof n(void 0,{type:Gl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ze(13))})}function Xj(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{Yj(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const c={};for(let u=0;u<r.length;u++){const d=r[u],v=n[d],g=a[d],h=v(g,l);if(typeof h>"u")throw l&&l.type,new Error(Ze(14));c[d]=h,s=s||h!==g}return s=s||r.length!==Object.keys(a).length,s?c:a}}function ql(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function Kj(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Ze(15))};const a={getState:i.getState,dispatch:(s,...c)=>o(s,...c)},l=e.map(s=>s(a));return o=ql(...l)(i.dispatch),{...i,dispatch:o}}}function Qj(e){return pm(e)&&"type"in e&&typeof e.type=="string"}var bw=Symbol.for("immer-nothing"),X0=Symbol.for("immer-draftable"),vt=Symbol.for("immer-state");function un(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Rt=Object,so=Rt.getPrototypeOf,Yl="constructor",Vc="prototype",Sp="configurable",Xl="enumerable",rl="writable",Ia="value",Zn=e=>!!e&&!!e[vt];function vn(e){var t;return e?ww(e)||Wc(e)||!!e[X0]||!!((t=e[Yl])!=null&&t[X0])||Hc(e)||Gc(e):!1}var Zj=Rt[Vc][Yl].toString(),K0=new WeakMap;function ww(e){if(!e||!mm(e))return!1;const t=so(e);if(t===null||t===Rt[Vc])return!0;const n=Rt.hasOwnProperty.call(t,Yl)&&t[Yl];if(n===Object)return!0;if(!Ti(n))return!1;let r=K0.get(n);return r===void 0&&(r=Function.toString.call(n),K0.set(n,r)),r===Zj}function Uc(e,t,n=!0){Ka(e)===0?(n?Reflect.ownKeys(e):Rt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ka(e){const t=e[vt];return t?t.type_:Wc(e)?1:Hc(e)?2:Gc(e)?3:0}var Q0=(e,t,n=Ka(e))=>n===2?e.has(t):Rt[Vc].hasOwnProperty.call(e,t),_p=(e,t,n=Ka(e))=>n===2?e.get(t):e[t],Kl=(e,t,n,r=Ka(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function Jj(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Wc=Array.isArray,Hc=e=>e instanceof Map,Gc=e=>e instanceof Set,mm=e=>typeof e=="object",Ti=e=>typeof e=="function",Td=e=>typeof e=="boolean";function e4(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Bn=e=>e.copy_||e.base_,gm=e=>e.modified_?e.copy_:e.base_;function Cp(e,t){if(Hc(e))return new Map(e);if(Gc(e))return new Set(e);if(Wc(e))return Array[Vc].slice.call(e);const n=ww(e);if(t===!0||t==="class_only"&&!n){const r=Rt.getOwnPropertyDescriptors(e);delete r[vt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[rl]===!1&&(l[rl]=!0,l[Sp]=!0),(l.get||l.set)&&(r[a]={[Sp]:!0,[rl]:!0,[Xl]:l[Xl],[Ia]:e[a]})}return Rt.create(so(e),r)}else{const r=so(e);if(r!==null&&n)return{...e};const i=Rt.create(r);return Rt.assign(i,e)}}function vm(e,t=!1){return qc(e)||Zn(e)||!vn(e)||(Ka(e)>1&&Rt.defineProperties(e,{set:_s,add:_s,clear:_s,delete:_s}),Rt.freeze(e),t&&Uc(e,(n,r)=>{vm(r,!0)},!1)),e}function t4(){un(2)}var _s={[Ia]:t4};function qc(e){return e===null||!mm(e)?!0:Rt.isFrozen(e)}var Ql="MapSet",Ep="Patches",Z0="ArrayMethods",Sw={};function ni(e){const t=Sw[e];return t||un(0,e),t}var J0=e=>!!Sw[e],Da,_w=()=>Da,n4=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:J0(Ql)?ni(Ql):void 0,arrayMethodsPlugin_:J0(Z0)?ni(Z0):void 0});function ev(e,t){t&&(e.patchPlugin_=ni(Ep),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function kp(e){Tp(e),e.drafts_.forEach(r4),e.drafts_=null}function Tp(e){e===Da&&(Da=e.parent_)}var tv=e=>Da=n4(Da,e);function r4(e){const t=e[vt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function nv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[vt].modified_&&(kp(t),un(4)),vn(e)&&(e=rv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[vt].base_,e,t)}else e=rv(t,n);return i4(t,e,!0),kp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==bw?e:void 0}function rv(e,t){if(qc(t))return t;const n=t[vt];if(!n)return Zl(t,e.handledSet_,e);if(!Yc(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);kw(n,e)}return n.copy_}function i4(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&vm(t,n)}function Cw(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Yc=(e,t)=>e.scope_===t,o4=[];function Ew(e,t,n,r){const i=Bn(e),o=e.type_;if(r!==void 0&&_p(i,r,o)===t){Kl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Uc(i,(s,c)=>{if(Zn(c)){const u=l.get(c)||[];u.push(s),l.set(c,u)}})}const a=e.draftLocations_.get(t)??o4;for(const l of a)Kl(i,l,n,o)}function a4(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!Yc(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=gm(o);Ew(e,o.draft_??o,a,n),kw(o,i)})}function kw(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Cw(e)}}function s4(e,t,n){const{scope_:r}=e;if(Zn(n)){const i=n[vt];Yc(i,r)&&i.callbacks_.push(function(){il(e);const a=gm(i);Ew(e,n,a,t)})}else vn(n)&&e.callbacks_.push(function(){const o=Bn(e);e.type_===3?o.has(n)&&Zl(n,r.handledSet_,r):_p(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Zl(_p(e.copy_,t,e.type_),r.handledSet_,r)})}function Zl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Zn(e)||t.has(e)||!vn(e)||qc(e)||(t.add(e),Uc(e,(r,i)=>{if(Zn(i)){const o=i[vt];if(Yc(o,n)){const a=gm(o);Kl(e,r,a,e.type_),Cw(o)}}else vn(i)&&Zl(i,t,n)})),e}function l4(e,t){const n=Wc(e),r={type_:n?1:0,scope_:t?t.scope_:_w(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Jl;n&&(i=[r],o=La);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Jl={get(e,t){if(t===vt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Bn(e);if(!Q0(i,t,e.type_))return c4(e,i,t);const o=i[t];if(e.finalized_||!vn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&e4(t))return o;if(o===Pd(e.base_,t)){il(e);const a=e.type_===1?+t:t,l=Op(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Bn(e)},ownKeys(e){return Reflect.ownKeys(Bn(e))},set(e,t,n){const r=Tw(Bn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Pd(Bn(e),t),o=i==null?void 0:i[vt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(Jj(n,i)&&(n!==void 0||Q0(e.base_,t,e.type_)))return!0;il(e),Pp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),s4(e,t,n)),!0},deleteProperty(e,t){return il(e),Pd(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Pp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Bn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[rl]:!0,[Sp]:e.type_!==1||t!=="length",[Xl]:r[Xl],[Ia]:n[t]}},defineProperty(){un(11)},getPrototypeOf(e){return so(e.base_)},setPrototypeOf(){un(12)}},La={};for(let e in Jl){let t=Jl[e];La[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}La.deleteProperty=function(e,t){return La.set.call(this,e,t,void 0)};La.set=function(e,t,n){return Jl.set.call(this,e[0],t,n,e[0])};function Pd(e,t){const n=e[vt];return(n?Bn(n):e)[t]}function c4(e,t,n){var i;const r=Tw(t,n);return r?Ia in r?r[Ia]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Tw(e,t){if(!(t in e))return;let n=so(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=so(n)}}function Pp(e){e.modified_||(e.modified_=!0,e.parent_&&Pp(e.parent_))}function il(e){e.copy_||(e.assigned_=new Map,e.copy_=Cp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var u4=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(Ti(t)&&!Ti(n)){const o=n;n=t;const a=this;return function(s=o,...c){return a.produce(s,u=>n.call(this,u,...c))}}Ti(n)||un(6),r!==void 0&&!Ti(r)&&un(7);let i;if(vn(t)){const o=tv(this),a=Op(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?kp(o):Tp(o)}return ev(o,r),nv(i,o)}else if(!t||!mm(t)){if(i=n(t),i===void 0&&(i=t),i===bw&&(i=void 0),this.autoFreeze_&&vm(i,!0),r){const o=[],a=[];ni(Ep).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else un(1,t)},this.produceWithPatches=(t,n)=>{if(Ti(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},Td(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Td(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Td(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){vn(e)||un(8),Zn(e)&&(e=d4(e));const t=tv(this),n=Op(t,e,void 0);return n[vt].isManual_=!0,Tp(t),n}finishDraft(e,t){const n=e&&e[vt];(!n||!n.isManual_)&&un(9);const{scope_:r}=n;return ev(r,t),nv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=ni(Ep).applyPatches_;return Zn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Op(e,t,n,r){const[i,o]=Hc(t)?ni(Ql).proxyMap_(t,n):Gc(t)?ni(Ql).proxySet_(t,n):l4(t,n);return((n==null?void 0:n.scope_)??_w()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?a4(n,o,r):o.callbacks_.push(function(s){var u;(u=s.mapSetPlugin_)==null||u.fixSetContents(o);const{patchPlugin_:c}=s;o.modified_&&c&&c.generatePatches_(o,[],s)}),i}function d4(e){return Zn(e)||un(10,e),Pw(e)}function Pw(e){if(!vn(e)||qc(e))return e;const t=e[vt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Cp(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=Cp(e,!0);return Uc(n,(i,o)=>{Kl(n,i,Pw(o))},r),t&&(t.finalized_=!1),n}var f4=new u4,Ow=f4.produce;function jw(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var p4=jw(),h4=jw,m4=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ql:ql.apply(null,arguments)};function iv(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Gn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>Qj(r)&&r.type===e,n}var $w=class Qo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Qo.prototype)}static get[Symbol.species](){return Qo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Qo(...t[0].concat(this)):new Qo(...t.concat(this))}};function ov(e){return vn(e)?Ow(e,()=>{}):e}function Cs(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function g4(e){return typeof e=="boolean"}var v4=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new $w;return n&&(g4(n)?a.push(p4):a.push(h4(n.extraArgument))),a},y4="RTK_autoBatch",av=e=>t=>{setTimeout(t,e)},x4=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:av(10):e.type==="callback"?e.queueNotification:av(e.timeout),c=()=>{a=!1,o&&(o=!1,l.forEach(u=>u()))};return Object.assign({},r,{subscribe(u){const d=()=>i&&u(),v=r.subscribe(d);return l.add(u),()=>{v(),l.delete(u)}},dispatch(u){var d;try{return i=!((d=u==null?void 0:u.meta)!=null&&d[y4]),o=!i,o&&(a||(a=!0,s(c))),r.dispatch(u)}finally{i=!0}}})},b4=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new $w(e);return r&&i.push(x4(typeof r=="object"?r:void 0)),i};function w4(e){const t=v4(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(pm(n))s=Xj(n);else throw new Error(Gn(1));let c;typeof r=="function"?c=r(t):c=t();let u=ql;i&&(u=m4({trace:!1,...typeof i=="object"&&i}));const d=Kj(...c),v=b4(d);let g=typeof l=="function"?l(v):v();const h=u(...g);return hm(s,a,h)}function Mw(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(Gn(28));if(l in t)throw new Error(Gn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function S4(e){return typeof e=="function"}function _4(e,t){let[n,r,i]=Mw(t),o;if(S4(e))o=()=>ov(e());else{const l=ov(e);o=()=>l}function a(l=o(),s){let c=[n[s.type],...r.filter(({matcher:u})=>u(s)).map(({reducer:u})=>u)];return c.filter(u=>!!u).length===0&&(c=[i]),c.reduce((u,d)=>{if(d)if(Zn(u)){const g=d(u,s);return g===void 0?u:g}else{if(vn(u))return Ow(u,v=>d(v,s));{const v=d(u,s);if(v===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return u},l)}return a.getInitialState=o,a}var C4=Symbol.for("rtk-slice-createasyncthunk");function E4(e,t){return`${e}/${t}`}function k4({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[C4];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(Gn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(P4()):i.reducers)||{},s=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(S,E){const P=typeof S=="string"?S:S.type;if(!P)throw new Error(Gn(12));if(P in c.sliceCaseReducersByType)throw new Error(Gn(13));return c.sliceCaseReducersByType[P]=E,u},addMatcher(S,E){return c.sliceMatchers.push({matcher:S,reducer:E}),u},exposeAction(S,E){return c.actionCreators[S]=E,u},exposeCaseReducer(S,E){return c.sliceCaseReducersByName[S]=E,u}};s.forEach(S=>{const E=l[S],P={reducerName:S,type:E4(o,S),createNotation:typeof i.reducers=="function"};j4(E)?M4(P,E,u,t):O4(P,E,u)});function d(){const[S={},E=[],P=void 0]=typeof i.extraReducers=="function"?Mw(i.extraReducers):[i.extraReducers],k={...S,...c.sliceCaseReducersByType};return _4(i.initialState,C=>{for(let j in k)C.addCase(j,k[j]);for(let j of c.sliceMatchers)C.addMatcher(j.matcher,j.reducer);for(let j of E)C.addMatcher(j.matcher,j.reducer);P&&C.addDefaultCase(P)})}const v=S=>S,g=new Map,h=new WeakMap;let y;function w(S,E){return y||(y=d()),y(S,E)}function p(){return y||(y=d()),y.getInitialState()}function m(S,E=!1){function P(C){let j=C[S];return typeof j>"u"&&E&&(j=Cs(h,P,p)),j}function k(C=v){const j=Cs(g,E,()=>new WeakMap);return Cs(j,C,()=>{const M={};for(const[A,I]of Object.entries(i.selectors??{}))M[A]=T4(I,C,()=>Cs(h,C,p),E);return M})}return{reducerPath:S,getSelectors:k,get selectors(){return k(P)},selectSlice:P}}const x={name:o,reducer:w,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:p,...m(a),injectInto(S,{reducerPath:E,...P}={}){const k=E??a;return S.inject({reducerPath:k,reducer:w},P),{...x,...m(k,!0)}}};return x}}function T4(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var Iw=k4();function P4(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function O4({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!$4(r))throw new Error(Gn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?iv(e,a):iv(e))}function j4(e){return e._reducerDefinitionType==="asyncThunk"}function $4(e){return e._reducerDefinitionType==="reducerWithPrepare"}function M4({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Gn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:c,options:u}=n,d=i(e,o,u);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),c&&r.addMatcher(d.settled,c),r.exposeCaseReducer(t,{fulfilled:a||Es,pending:l||Es,rejected:s||Es,settled:c||Es})}function Es(){}function Gn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Dw=Iw({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===n.id);if(r){if(r.quantity>=n.stock)return;r.quantity+=1}else e.items.push({...n,quantity:1})},setCartItemQuantity:(e,t)=>{const{id:n,quantity:r}=t.payload,i=e.items.find(o=>o.id===n);i&&(i.quantity=r)},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},setCartItems:(e,t)=>{e.items=t.payload},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{setCartItems:I4,addToCart:ri,setCartItemQuantity:sv,removeFromCart:D4,clearCart:Xc,addAllToCart:L4,incrementQuantity:A4,decrementQuantity:R4}=Dw.actions,F4=Dw.reducer;function Lw(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Lw(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Xr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Lw(e))&&(r&&(r+=" "),r+=t);return r}function z4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}z4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Qa=e=>typeof e=="number"&&!isNaN(e),ii=e=>typeof e=="string",Jn=e=>typeof e=="function",N4=e=>ii(e)||Qa(e),jp=e=>ii(e)||Jn(e)?e:null,B4=(e,t)=>e===!1||Qa(e)&&e>0?e:t,$p=e=>b.isValidElement(e)||ii(e)||Jn(e)||Qa(e);function V4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function U4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:c,isIn:u,playToast:d}){let v=n?`${e}--${a}`:e,g=n?`${t}--${a}`:t,h=b.useRef(0);return b.useLayoutEffect(()=>{let y=c.current,w=v.split(" "),p=m=>{m.target===c.current&&(d(),y.removeEventListener("animationend",p),y.removeEventListener("animationcancel",p),h.current===0&&m.type!=="animationcancel"&&y.classList.remove(...w))};y.classList.add(...w),y.addEventListener("animationend",p),y.addEventListener("animationcancel",p)},[]),b.useEffect(()=>{let y=c.current,w=()=>{y.removeEventListener("animationend",w),r?V4(y,s,i):s()};u||(l?w():(h.current=1,y.className+=` ${g}`,y.addEventListener("animationend",w)))},[u]),X.createElement(X.Fragment,null,o)}}function lv(e,t){return{content:Aw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Aw(e,t,n=!1){return b.isValidElement(e)&&!ii(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Jn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function W4({closeToast:e,theme:t,ariaLabel:n="close"}){return X.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},X.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},X.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function H4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:c,theme:u}){let d=i||a&&l===0,v={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(v.transform=`scaleX(${l})`);let g=Xr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${u}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),h=Jn(o)?o({rtl:s,type:r,defaultClassName:g}):Xr(g,o),y={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{c&&n()}};return X.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},X.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${u} Toastify__progress-bar--${r}`}),X.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:h,style:v,...y}))}var G4=1,Rw=()=>`${G4++}`;function q4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,c=new Set,u=m=>(c.add(m),()=>c.delete(m)),d=()=>{a=Array.from(s.values()),c.forEach(m=>m())},v=({containerId:m,toastId:x,updateId:S})=>{let E=m?m!==e:e!==1,P=s.has(x)&&S==null;return E||P},g=(m,x)=>{s.forEach(S=>{var E;(x==null||x===S.props.toastId)&&((E=S.toggle)==null||E.call(S,m))})},h=m=>{var x,S;(S=(x=m.props)==null?void 0:x.onClose)==null||S.call(x,m.removalReason),m.isActive=!1},y=m=>{if(m==null)s.forEach(h);else{let x=s.get(m);x&&h(x)}d()},w=()=>{i-=o.length,o=[]},p=m=>{var x,S;let{toastId:E,updateId:P}=m.props,k=P==null;m.staleId&&s.delete(m.staleId),m.isActive=!0,s.set(E,m),d(),n(lv(m,k?"added":"updated")),k&&((S=(x=m.props).onOpen)==null||S.call(x))};return{id:e,props:l,observe:u,toggle:g,removeToast:y,toasts:s,clearQueue:w,buildToast:(m,x)=>{if(v(x))return;let{toastId:S,updateId:E,data:P,staleId:k,delay:C}=x,j=E==null;j&&i++;let M={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([I,O])=>O!=null)),toastId:S,updateId:E,data:P,isIn:!1,className:jp(x.className||l.toastClassName),progressClassName:jp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:B4(x.autoClose,l.autoClose),closeToast(I){s.get(S).removalReason=I,y(S)},deleteToast(){let I=s.get(S);if(I!=null){if(n(lv(I,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){p(o.shift());return}d()}}};M.closeButton=l.closeButton,x.closeButton===!1||$p(x.closeButton)?M.closeButton=x.closeButton:x.closeButton===!0&&(M.closeButton=$p(l.closeButton)?l.closeButton:!0);let A={content:m,props:M,staleId:k};l.limit&&l.limit>0&&i>l.limit&&j?o.push(A):Qa(C)?setTimeout(()=>{p(A)},C):p(A)},setProps(m){l=m},setToggle:(m,x)=>{let S=s.get(m);S&&(S.toggle=x)},isToastActive:m=>{var x;return(x=s.get(m))==null?void 0:x.isActive},getSnapshot:()=>a}}var mt=new Map,Aa=[],Mp=new Set,Y4=e=>Mp.forEach(t=>t(e)),Fw=()=>mt.size>0;function X4(){Aa.forEach(e=>Nw(e.content,e.options)),Aa=[]}var K4=(e,{containerId:t})=>{var n;return(n=mt.get(t||1))==null?void 0:n.toasts.get(e)};function zw(e,t){var n;if(t)return!!((n=mt.get(t))!=null&&n.isToastActive(e));let r=!1;return mt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function Q4(e){if(!Fw()){Aa=Aa.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||N4(e))mt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=mt.get(e.containerId);t?t.removeToast(e.id):mt.forEach(n=>{n.removeToast(e.id)})}}var Z4=(e={})=>{mt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Nw(e,t){$p(e)&&(Fw()||Aa.push({content:e,options:t}),mt.forEach(n=>{n.buildToast(e,t)}))}function J4(e){var t;(t=mt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Bw(e,t){mt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function e3(e){let t=e.containerId||1;return{subscribe(n){let r=q4(t,e,Y4);mt.set(t,r);let i=r.observe(n);return X4(),()=>{i(),mt.delete(t)}},setProps(n){var r;(r=mt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=mt.get(t))==null?void 0:n.getSnapshot()}}}function t3(e){return Mp.add(e),()=>{Mp.delete(e)}}function n3(e){return e&&(ii(e.toastId)||Qa(e.toastId))?e.toastId:Rw()}function Za(e,t){return Nw(e,t),t.toastId}function Kc(e,t){return{...t,type:t&&t.type||e,toastId:n3(t)}}function Qc(e){return(t,n)=>Za(t,Kc(e,n))}function K(e,t){return Za(e,Kc("default",t))}K.loading=(e,t)=>Za(e,Kc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function r3(e,{pending:t,error:n,success:r},i){let o;t&&(o=ii(t)?K.loading(t,i):K.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,u,d)=>{if(u==null){K.dismiss(o);return}let v={type:c,...a,...i,data:d},g=ii(u)?{render:u}:u;return o?K.update(o,{...v,...g}):K(g.render,{...v,...g}),d},s=Jn(e)?e():e;return s.then(c=>l("success",r,c)).catch(c=>l("error",n,c)),s}K.promise=r3;K.success=Qc("success");K.info=Qc("info");K.error=Qc("error");K.warning=Qc("warning");K.warn=K.warning;K.dark=(e,t)=>Za(e,Kc("default",{theme:"dark",...t}));function i3(e){Q4(e)}K.dismiss=i3;K.clearWaitingQueue=Z4;K.isActive=zw;K.update=(e,t={})=>{let n=K4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Rw()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Za(a,o)}};K.done=e=>{K.update(e,{progress:1})};K.onChange=t3;K.play=e=>Bw(!0,e);K.pause=e=>Bw(!1,e);function o3(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(e3(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(c=>{let{position:u}=c.props;s.has(u)||s.set(u,[]),s.get(u).push(c)}),Array.from(s,c=>l(c[0],c[1]))}return{getToastToRender:a,isToastActive:zw,count:o==null?void 0:o.length}}function a3(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:c,onClick:u,closeOnClick:d}=e;J4({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return v(),()=>{g()}},[e.pauseOnFocusLoss]);function v(){document.hasFocus()||p(),window.addEventListener("focus",w),window.addEventListener("blur",p)}function g(){window.removeEventListener("focus",w),window.removeEventListener("blur",p)}function h(k){if(e.draggable===!0||e.draggable===k.pointerType){m();let C=o.current;a.canCloseOnClick=!0,a.canDrag=!0,C.style.transition="none",e.draggableDirection==="x"?(a.start=k.clientX,a.removalDistance=C.offsetWidth*(e.draggablePercent/100)):(a.start=k.clientY,a.removalDistance=C.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function y(k){let{top:C,bottom:j,left:M,right:A}=o.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&e.pauseOnHover&&k.clientX>=M&&k.clientX<=A&&k.clientY>=C&&k.clientY<=j?p():w()}function w(){n(!0)}function p(){n(!1)}function m(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",E)}function x(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",E)}function S(k){let C=o.current;if(a.canDrag&&C){a.didMove=!0,t&&p(),e.draggableDirection==="x"?a.delta=k.clientX-a.start:a.delta=k.clientY-a.start,a.start!==k.clientX&&(a.canCloseOnClick=!1);let j=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;C.style.transform=`translate3d(${j},0)`,C.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function E(){x();let k=o.current;if(a.canDrag&&a.didMove&&k){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let P={onPointerDown:h,onPointerUp:y};return l&&s&&(P.onMouseEnter=p,e.stacked||(P.onMouseLeave=w)),d&&(P.onClick=k=>{u&&u(k),a.canCloseOnClick&&c(!0)}),{playToast:w,pauseToast:p,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:P}}var s3=typeof window<"u"?b.useLayoutEffect:b.useEffect,Zc=({theme:e,type:t,isLoading:n,...r})=>X.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function l3(e){return X.createElement(Zc,{...e},X.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function c3(e){return X.createElement(Zc,{...e},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function u3(e){return X.createElement(Zc,{...e},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function d3(e){return X.createElement(Zc,{...e},X.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function f3(){return X.createElement("div",{className:"Toastify__spinner"})}var Ip={info:c3,warning:l3,success:u3,error:d3,spinner:f3},p3=e=>e in Ip;function h3({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Jn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=Ip.spinner():p3(t)&&(i=Ip[t](o))),i}var m3=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=a3(e),{closeButton:a,children:l,autoClose:s,onClick:c,type:u,hideProgressBar:d,closeToast:v,transition:g,position:h,className:y,style:w,progressClassName:p,updateId:m,role:x,progress:S,rtl:E,toastId:P,deleteToast:k,isIn:C,isLoading:j,closeOnClick:M,theme:A,ariaLabel:I}=e,O=Xr("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":M}),F=Jn(y)?y({rtl:E,position:h,type:u,defaultClassName:O}):Xr(O,y),D=h3(e),L=!!S||!s,R={closeToast:v,type:u,theme:A},T=null;return a===!1||(Jn(a)?T=a(R):b.isValidElement(a)?T=b.cloneElement(a,R):T=W4(R)),X.createElement(g,{isIn:C,done:k,position:h,preventExitTransition:n,nodeRef:r,playToast:o},X.createElement("div",{id:P,tabIndex:0,onClick:c,"data-in":C,className:F,...i,style:w,ref:r,...C&&{role:x,"aria-label":I}},D!=null&&X.createElement("div",{className:Xr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},D),Aw(l,e,!t),T,!e.customProgressBar&&X.createElement(H4,{...m&&!L?{key:`p-${m}`}:{},rtl:E,theme:A,delay:s,isRunning:t,isIn:C,closeToast:v,hide:d,type:u,className:p,controlledProgress:L,progress:S||0})))},g3=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),v3=U4(g3("bounce",!0)),y3={position:"top-right",transition:v3,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Dn(e){let t={...y3,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=o3(t),{className:c,style:u,rtl:d,containerId:v,hotKeys:g}=t;function h(w){let p=Xr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":d});return Jn(c)?c({position:w,rtl:d,defaultClassName:p}):Xr(p,jp(c))}function y(){n&&(i(!0),K.play())}return s3(()=>{var w;if(n){let p=o.current.querySelectorAll('[data-in="true"]'),m=12,x=(w=t.position)==null?void 0:w.includes("top"),S=0,E=0;Array.from(p).reverse().forEach((P,k)=>{let C=P;C.classList.add("Toastify__toast--stacked"),k>0&&(C.dataset.collapsed=`${r}`),C.dataset.pos||(C.dataset.pos=x?"top":"bot");let j=S*(r?.2:1)+(r?0:m*k);C.style.setProperty("--y",`${x?j:j*-1}px`),C.style.setProperty("--g",`${m}`),C.style.setProperty("--s",`${1-(r?E:0)}`),S+=C.offsetHeight,E+=.025})}},[r,s,n]),b.useEffect(()=>{function w(p){var m;let x=o.current;g(p)&&((m=x.querySelector('[tabIndex="0"]'))==null||m.focus(),i(!1),K.pause()),p.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),K.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[g]),X.createElement("section",{ref:o,className:"Toastify",id:v,onMouseEnter:()=>{n&&(i(!1),K.pause())},onMouseLeave:y,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,p)=>{let m=p.length?{...u}:{...u,pointerEvents:"none"};return X.createElement("div",{tabIndex:-1,className:h(w),"data-stacked":n,style:m,key:`c-${w}`},p.map(({content:x,props:S})=>X.createElement(m3,{...S,stacked:n,collapseAll:y,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},x)))}))}const oi="/Didiv/assets/nofoto-2f8d9d99.png",x3=_.div`
`,b3=_.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,w3=_.h2`
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

`,S3=_.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;_.div``;const _3=_.div`
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
`,C3=_.div`
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
`,E3=_.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,k3=_.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,T3=_.p`
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

`;const Vw=_.div.attrs({className:"card-buttons"})`
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
`,ec=_.button`
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
`;const P3=_.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,Od=_.button`
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
`,O3=_.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,j3=_.button`
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
`,$3=_.div`
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
`,xi=_.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,Uw=_.div`
  text-align: center;
  width: 100px;
 
`,Ww=_.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Hw=_.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Gw=_.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,qw=_.span`
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
`,Yw=Iw({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]},setFavorites(e,t){e.items=t.payload},addFavorite(e,t){e.items.some(r=>r.id===t.payload.id)||e.items.push(t.payload)},removeFavorite(e,t){e.items=e.items.filter(n=>n.id!==t.payload)}}}),{toggleFavorite:MB,clearFavorite:M3,addFavorite:cv,removeFavorite:uv,setFavorites:I3}=Yw.actions,D3=Yw.reducer,L3=async(e,t,n,r)=>{const i=t==null?void 0:t.find(a=>{var l;return((l=a.product)==null?void 0:l.documentId)===(e==null?void 0:e.documentId)});if(i){const a=i.user.map(l=>l.documentId);if(!a.includes(n)){a.push(n);const l=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:a}})});if(!l.ok)throw new Error("Не вдалося оновити favorite");return await l.json()}return i}const o=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e.documentId,user:[n]}})});if(!o.ok)throw new Error("Не вдалося створити favorite");return await o.json()},A3=async(e,t,n,r)=>{var l;const i=t==null?void 0:t.find(s=>{var c;return((c=s.product)==null?void 0:c.documentId)===(e==null?void 0:e.documentId)});if(!i)return;const o=(l=i.user)==null?void 0:l.filter(s=>s.documentId!==n).map(s=>s.documentId);if((o==null?void 0:o.length)===0){if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити favorite");return}const a=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:o}})});if(!a.ok)throw new Error("Не вдалося оновити favorite");return await a.json()},di=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o)return t?(n(uv(e.id)),r.warning(`${e.name} видалено з обраного`)):(n(cv(e)),r.success(`${e.name} додано в обране`)),!0;const a=o.documentId,l=o.id;try{const s=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${l}?populate[favorites][populate][0]=product&populate[favorites][populate][1]=user`,{headers:{Authorization:`Bearer ${i}`}});if(!s.ok)throw new Error("Не вдалося отримати favorites користувача");const c=await s.json(),u=await fetch("https://backenddidiv-production.up.railway.app/api/favorites?populate=*",{headers:{Authorization:`Bearer ${i}`}}),{data:d}=await u.json(),v=c==null?void 0:c.favorites;return t?(await A3(e,v,a,i),n(uv(e.id)),r.warning(`${e.name} видалено з обраного`),!0):(await L3(e,d,a,i),n(cv(e)),r.success(`${e.name} додано в обране`),!0)}catch{return r.error("Не вдалося оновити обране"),!1}},Xw=()=>{const e=Jt(),[t,n]=b.useState([]),r=Re(s=>s.favorites.items),i=Re(s=>s.cart.items),o=$t();b.useEffect(()=>{const s=new Date,c=new Date;c.setDate(s.getDate()-7);const u=c.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${u}`).then(d=>d.json()).then(d=>n(d.data)).catch(d=>console.error("Помилка завантаження нових товарів:",d))},[]);const a=(s,c)=>{c.stopPropagation();const u=r.some(d=>d.id===(s==null?void 0:s.id));di(s,u,e,K)},l=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:f.jsxs(Dj,{children:[f.jsx(Dn,{}),f.jsx(Lj,{children:"Нові товари"}),f.jsxs(Aj,{children:[l.map(s=>{var p;const c=r.some(m=>m.id===s.id),u=i.find(m=>m.id===s.id),v=(u?u.quantity:0)>=(s.stock||0),g=s.new_price&&s.new_price<s.price,h=g?s.new_price:s.price,y=g?Math.round((s.price-s.new_price)/s.price*100):0,w=(m,x)=>{if(x.stopPropagation(),v){K.error("Товар уже у кошику");return}e(ri({...m,quantity:1})),K.success(`${m.name} додано в кошик!`)};return f.jsxs(Rj,{onClick:()=>o(`/product/${s.slug??s.id}`),children:[f.jsxs(Fj,{children:[f.jsx(zj,{children:"Новинка"}),f.jsx("img",{src:((p=s.images)==null?void 0:p[0].url)||oi,alt:s.name,onError:m=>{m.currentTarget.onerror=null,m.currentTarget.src=oi}}),f.jsx("div",{className:"overlay"})]}),f.jsxs(Nj,{children:[f.jsx(Bj,{children:s.name}),f.jsxs(Vj,{children:[f.jsx(Uw,{children:f.jsxs(Ww,{children:[f.jsxs(Hw,{$discount:g,children:[h.toLocaleString()," грн"]}),g&&f.jsxs(Gw,{children:[s.price.toLocaleString()," грн"]}),g&&f.jsxs(qw,{children:["-",y,"%"]})]})}),f.jsxs(Vw,{children:[f.jsx(ec,{onClick:m=>w(s,m),children:f.jsx(yo,{size:24,color:u?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(ec,{onClick:m=>a(s,m),children:f.jsx(Xa,{size:24,fill:c?"#ff4d4f":"none",color:c?"#ff4d4f":"#000000",strokeWidth:c?1:2})})]})]})]})]},s.id)}),f.jsx(Uj,{to:"/catalog/new",children:f.jsxs(Wj,{children:[f.jsx("p",{children:"Усі новинки"}),f.jsx(Hj,{children:f.jsx(Bc,{size:24})})]})})]})]})};function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function R3(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function F3(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var z3=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(F3(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=R3(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),at="-ms-",tc="-moz-",ue="-webkit-",Kw="comm",xm="rule",bm="decl",N3="@import",Qw="@keyframes",B3="@layer",V3=Math.abs,Jc=String.fromCharCode,U3=Object.assign;function W3(e,t){return et(e,0)^45?(((t<<2^et(e,0))<<2^et(e,1))<<2^et(e,2))<<2^et(e,3):0}function Zw(e){return e.trim()}function H3(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function Dp(e,t){return e.indexOf(t)}function et(e,t){return e.charCodeAt(t)|0}function Ra(e,t,n){return e.slice(t,n)}function _n(e){return e.length}function wm(e){return e.length}function ks(e,t){return t.push(e),e}function G3(e,t){return e.map(t).join("")}var eu=1,lo=1,Jw=0,Ot=0,Le=0,xo="";function tu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:eu,column:lo,length:a,return:""}}function Ao(e,t){return U3(tu("",null,null,"",null,null,0),e,{length:-e.length},t)}function q3(){return Le}function Y3(){return Le=Ot>0?et(xo,--Ot):0,lo--,Le===10&&(lo=1,eu--),Le}function zt(){return Le=Ot<Jw?et(xo,Ot++):0,lo++,Le===10&&(lo=1,eu++),Le}function On(){return et(xo,Ot)}function ol(){return Ot}function Ja(e,t){return Ra(xo,e,t)}function Fa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eS(e){return eu=lo=1,Jw=_n(xo=e),Ot=0,[]}function tS(e){return xo="",e}function al(e){return Zw(Ja(Ot-1,Lp(e===91?e+2:e===40?e+1:e)))}function X3(e){for(;(Le=On())&&Le<33;)zt();return Fa(e)>2||Fa(Le)>3?"":" "}function K3(e,t){for(;--t&&zt()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Ja(e,ol()+(t<6&&On()==32&&zt()==32))}function Lp(e){for(;zt();)switch(Le){case e:return Ot;case 34:case 39:e!==34&&e!==39&&Lp(Le);break;case 40:e===41&&Lp(e);break;case 92:zt();break}return Ot}function Q3(e,t){for(;zt()&&e+Le!==47+10;)if(e+Le===42+42&&On()===47)break;return"/*"+Ja(t,Ot-1)+"*"+Jc(e===47?e:zt())}function Z3(e){for(;!Fa(On());)zt();return Ja(e,Ot)}function J3(e){return tS(sl("",null,null,null,[""],e=eS(e),0,[0],e))}function sl(e,t,n,r,i,o,a,l,s){for(var c=0,u=0,d=a,v=0,g=0,h=0,y=1,w=1,p=1,m=0,x="",S=i,E=o,P=r,k=x;w;)switch(h=m,m=zt()){case 40:if(h!=108&&et(k,d-1)==58){Dp(k+=de(al(m),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:k+=al(m);break;case 9:case 10:case 13:case 32:k+=X3(h);break;case 92:k+=K3(ol()-1,7);continue;case 47:switch(On()){case 42:case 47:ks(e$(Q3(zt(),ol()),t,n),s);break;default:k+="/"}break;case 123*y:l[c++]=_n(k)*p;case 125*y:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+u:p==-1&&(k=de(k,/\f/g,"")),g>0&&_n(k)-d&&ks(g>32?fv(k+";",r,n,d-1):fv(de(k," ","")+";",r,n,d-2),s);break;case 59:k+=";";default:if(ks(P=dv(k,t,n,c,u,i,l,x,S=[],E=[],d),o),m===123)if(u===0)sl(k,t,P,P,S,o,d,l,E);else switch(v===99&&et(k,3)===110?100:v){case 100:case 108:case 109:case 115:sl(e,P,P,r&&ks(dv(e,P,P,0,0,i,l,x,i,S=[],d),E),i,E,d,l,r?S:E);break;default:sl(k,P,P,P,[""],E,0,l,E)}}c=u=g=0,y=p=1,x=k="",d=a;break;case 58:d=1+_n(k),g=h;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&Y3()==125)continue}switch(k+=Jc(m),m*y){case 38:p=u>0?1:(k+="\f",-1);break;case 44:l[c++]=(_n(k)-1)*p,p=1;break;case 64:On()===45&&(k+=al(zt())),v=On(),u=d=_n(x=k+=Z3(ol())),m++;break;case 45:h===45&&_n(k)==2&&(y=0)}}return o}function dv(e,t,n,r,i,o,a,l,s,c,u){for(var d=i-1,v=i===0?o:[""],g=wm(v),h=0,y=0,w=0;h<r;++h)for(var p=0,m=Ra(e,d+1,d=V3(y=a[h])),x=e;p<g;++p)(x=Zw(y>0?v[p]+" "+m:de(m,/&\f/g,v[p])))&&(s[w++]=x);return tu(e,t,n,i===0?xm:l,s,c,u)}function e$(e,t,n){return tu(e,t,n,Kw,Jc(q3()),Ra(e,2,-2),0)}function fv(e,t,n,r){return tu(e,t,n,bm,Ra(e,0,r),Ra(e,r+1,-1),r)}function Gi(e,t){for(var n="",r=wm(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function t$(e,t,n,r){switch(e.type){case B3:if(e.children.length)break;case N3:case bm:return e.return=e.return||e.value;case Kw:return"";case Qw:return e.return=e.value+"{"+Gi(e.children,r)+"}";case xm:e.value=e.props.join(",")}return _n(n=Gi(e.children,r))?e.return=e.value+"{"+n+"}":""}function n$(e){var t=wm(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function r$(e){return function(t){t.root||(t=t.return)&&e(t)}}function i$(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var o$=function(t,n,r){for(var i=0,o=0;i=o,o=On(),i===38&&o===12&&(n[r]=1),!Fa(o);)zt();return Ja(t,Ot)},a$=function(t,n){var r=-1,i=44;do switch(Fa(i)){case 0:i===38&&On()===12&&(n[r]=1),t[r]+=o$(Ot-1,n,r);break;case 2:t[r]+=al(i);break;case 4:if(i===44){t[++r]=On()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Jc(i)}while(i=zt());return t},s$=function(t,n){return tS(a$(eS(t),n))},pv=new WeakMap,l$=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!pv.get(r))&&!i){pv.set(t,!0);for(var o=[],a=s$(n,o),l=r.props,s=0,c=0;s<a.length;s++)for(var u=0;u<l.length;u++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[u]):l[u]+" "+a[s]}}},c$=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function nS(e,t){switch(W3(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+tc+e+at+e+e;case 6828:case 4268:return ue+e+at+e+e;case 6165:return ue+e+at+"flex-"+e+e;case 5187:return ue+e+de(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+at+"flex-$1$2")+e;case 5443:return ue+e+at+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ue+e+at+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ue+e+at+de(e,"shrink","negative")+e;case 5292:return ue+e+at+de(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+de(e,"-grow","")+ue+e+at+de(e,"grow","positive")+e;case 4554:return ue+de(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+at+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_n(e)-1-t>6)switch(et(e,t+1)){case 109:if(et(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+tc+(et(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Dp(e,"stretch")?nS(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(et(e,t+1)!==115)break;case 6444:switch(et(e,_n(e)-3-(~Dp(e,"!important")&&10))){case 107:return de(e,":",":"+ue)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(et(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+at+"$2box$3")+e}break;case 5936:switch(et(e,t+11)){case 114:return ue+e+at+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+at+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+at+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ue+e+at+e+e}return e}var u$=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case bm:t.return=nS(t.value,t.length);break;case Qw:return Gi([Ao(t,{value:de(t.value,"@","@"+ue)})],i);case xm:if(t.length)return G3(t.props,function(o){switch(H3(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Gi([Ao(t,{props:[de(o,/:(read-\w+)/,":"+tc+"$1")]})],i);case"::placeholder":return Gi([Ao(t,{props:[de(o,/:(plac\w+)/,":"+ue+"input-$1")]}),Ao(t,{props:[de(o,/:(plac\w+)/,":"+tc+"$1")]}),Ao(t,{props:[de(o,/:(plac\w+)/,at+"input-$1")]})],i)}return""})}},d$=[u$],f$=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var w=y.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||d$,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var w=y.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)o[w[p]]=!0;l.push(y)});var s,c=[l$,c$];{var u,d=[t$,r$(function(y){u.insert(y)})],v=n$(c.concat(i,d)),g=function(w){return Gi(J3(w),v)};s=function(w,p,m,x){u=m,g(w?w+"{"+p.styles+"}":p.styles),x&&(h.inserted[p.name]=!0)}}var h={key:n,sheet:new z3({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return h.sheet.hydrate(l),h},rS={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,Sm=Qe?Symbol.for("react.element"):60103,_m=Qe?Symbol.for("react.portal"):60106,nu=Qe?Symbol.for("react.fragment"):60107,ru=Qe?Symbol.for("react.strict_mode"):60108,iu=Qe?Symbol.for("react.profiler"):60114,ou=Qe?Symbol.for("react.provider"):60109,au=Qe?Symbol.for("react.context"):60110,Cm=Qe?Symbol.for("react.async_mode"):60111,su=Qe?Symbol.for("react.concurrent_mode"):60111,lu=Qe?Symbol.for("react.forward_ref"):60112,cu=Qe?Symbol.for("react.suspense"):60113,p$=Qe?Symbol.for("react.suspense_list"):60120,uu=Qe?Symbol.for("react.memo"):60115,du=Qe?Symbol.for("react.lazy"):60116,h$=Qe?Symbol.for("react.block"):60121,m$=Qe?Symbol.for("react.fundamental"):60117,g$=Qe?Symbol.for("react.responder"):60118,v$=Qe?Symbol.for("react.scope"):60119;function Wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Sm:switch(e=e.type,e){case Cm:case su:case nu:case iu:case ru:case cu:return e;default:switch(e=e&&e.$$typeof,e){case au:case lu:case du:case uu:case ou:return e;default:return t}}case _m:return t}}}function iS(e){return Wt(e)===su}ge.AsyncMode=Cm;ge.ConcurrentMode=su;ge.ContextConsumer=au;ge.ContextProvider=ou;ge.Element=Sm;ge.ForwardRef=lu;ge.Fragment=nu;ge.Lazy=du;ge.Memo=uu;ge.Portal=_m;ge.Profiler=iu;ge.StrictMode=ru;ge.Suspense=cu;ge.isAsyncMode=function(e){return iS(e)||Wt(e)===Cm};ge.isConcurrentMode=iS;ge.isContextConsumer=function(e){return Wt(e)===au};ge.isContextProvider=function(e){return Wt(e)===ou};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sm};ge.isForwardRef=function(e){return Wt(e)===lu};ge.isFragment=function(e){return Wt(e)===nu};ge.isLazy=function(e){return Wt(e)===du};ge.isMemo=function(e){return Wt(e)===uu};ge.isPortal=function(e){return Wt(e)===_m};ge.isProfiler=function(e){return Wt(e)===iu};ge.isStrictMode=function(e){return Wt(e)===ru};ge.isSuspense=function(e){return Wt(e)===cu};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nu||e===su||e===iu||e===ru||e===cu||e===p$||typeof e=="object"&&e!==null&&(e.$$typeof===du||e.$$typeof===uu||e.$$typeof===ou||e.$$typeof===au||e.$$typeof===lu||e.$$typeof===m$||e.$$typeof===g$||e.$$typeof===v$||e.$$typeof===h$)};ge.typeOf=Wt;rS.exports=ge;var y$=rS.exports,oS=y$,x$={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},b$={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},aS={};aS[oS.ForwardRef]=x$;aS[oS.Memo]=b$;var w$=!0;function sS(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Em=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||w$===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},lS=function(t,n,r){Em(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function S$(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var _$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},C$=/[A-Z]|^ms/g,E$=/_EMO_([^_]+?)_([^]*?)_EMO_/g,cS=function(t){return t.charCodeAt(1)===45},hv=function(t){return t!=null&&typeof t!="boolean"},jd=i$(function(e){return cS(e)?e:e.replace(C$,"-$&").toLowerCase()}),mv=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(E$,function(r,i,o){return Cn={name:i,styles:o,next:Cn},i})}return _$[t]!==1&&!cS(t)&&typeof n=="number"&&n!==0?n+"px":n};function za(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Cn={name:n.name,styles:n.styles,next:Cn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Cn={name:r.name,styles:r.styles,next:Cn},r=r.next;var i=n.styles+";";return i}return k$(e,t,n)}case"function":{if(e!==void 0){var o=Cn,a=n(e);return Cn=o,za(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function k$(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=za(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":hv(a)&&(r+=jd(o)+":"+mv(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)hv(a[l])&&(r+=jd(o)+":"+mv(o,a[l])+";");else{var s=za(e,t,a);switch(o){case"animation":case"animationName":{r+=jd(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var gv=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Cn,km=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Cn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=za(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=za(r,n,t[l]),i&&(o+=a[l]);gv.lastIndex=0;for(var s="",c;(c=gv.exec(o))!==null;)s+="-"+c[1];var u=S$(o)+s;return{name:u,styles:o,next:Cn}},T$=function(t){return t()},P$=vf["useInsertionEffect"]?vf["useInsertionEffect"]:!1,uS=P$||T$,Tm={}.hasOwnProperty,dS=b.createContext(typeof HTMLElement<"u"?f$({key:"css"}):null);dS.Provider;var fS=function(t){return b.forwardRef(function(n,r){var i=b.useContext(dS);return t(n,i,r)})},pS=b.createContext({}),Ap="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",O$=function(t,n){var r={};for(var i in n)Tm.call(n,i)&&(r[i]=n[i]);return r[Ap]=t,r},j$=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Em(n,r,i),uS(function(){return lS(n,r,i)}),null},$$=fS(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Ap],o=[r],a="";typeof e.className=="string"?a=sS(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=km(o,void 0,b.useContext(pS));a+=t.key+"-"+l.name;var s={};for(var c in e)Tm.call(e,c)&&c!=="css"&&c!==Ap&&(s[c]=e[c]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(j$,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),M$=$$,Q=function(t,n){var r=arguments;if(n==null||!Tm.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=M$,o[1]=O$(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function Pm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return km(t)}var I$=function(){var t=Pm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},D$=NT,L$=function(t){return t!=="theme"},vv=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?D$:L$},yv=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},A$=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Em(n,r,i),uS(function(){return lS(n,r,i)}),null},R$=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=yv(t,n,r),s=l||vv(i),c=!s("as");return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{d.push(u[0][0]);for(var v=u.length,g=1;g<v;g++)d.push(u[g],u[0][g])}var h=fS(function(y,w,p){var m=c&&y.as||i,x="",S=[],E=y;if(y.theme==null){E={};for(var P in y)E[P]=y[P];E.theme=b.useContext(pS)}typeof y.className=="string"?x=sS(w.registered,S,y.className):y.className!=null&&(x=y.className+" ");var k=km(d.concat(S),w.registered,E);x+=w.key+"-"+k.name,a!==void 0&&(x+=" "+a);var C=c&&l===void 0?vv(m):s,j={};for(var M in y)c&&M==="as"||C(M)&&(j[M]=y[M]);return j.className=x,j.ref=p,b.createElement(b.Fragment,null,b.createElement(A$,{cache:w,serialized:k,isStringTag:typeof m=="string"}),b.createElement(m,j))});return h.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=l,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(y,w){return e(y,J({},n,w,{shouldForwardProp:yv(h,w,!0)})).apply(void 0,d)},h}},F$=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fe=R$.bind();F$.forEach(function(e){Fe[e]=Fe(e)});const z$=Fe.section`
  background-color: var(--second-background);
`,N$=Fe.div`
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
`,B$=Fe.div`

`,V$=Fe.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,U$=Fe.div`
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
`;const W$=Fe(Te)`
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
`,H$=Fe.div`
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
`,G$=Fe.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,q$=Fe.p`
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
`;var Y$={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};X$(Y$);function X$(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var K$="#4fa94d",Q$={"aria-busy":!0,role:"progressbar"},Z$=_.div`
  display: ${e=>e.$visible?"flex":"none"};
`,J$="http://www.w3.org/2000/svg",fi=({height:e=100,width:t=100,radius:n=5,color:r=K$,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>f.jsx(Z$,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...Q$,children:f.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:J$,"data-testid":"ball-triangle-svg",children:[f.jsx("title",{children:"Ball Triangle"}),f.jsx("desc",{children:"Animated representation of three balls"}),f.jsx("g",{fill:"none",fillRule:"evenodd",children:f.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[f.jsxs("circle",{cx:"5",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"27",cy:"5",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"49",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),rn=242.776657104492,e5=1.6,t5=dm`
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
`;_.path`
  stroke-dasharray: ${rn*.01}px, ${rn};
  stroke-dashoffset: 0;
  animation: ${t5} ${e5}s linear infinite;
`;var n5=dm`
to {
   transform: rotate(360deg);
 }
`;_.svg`
  animation: ${n5} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var r5=dm`
to {
   stroke-dashoffset: 136;
 }
`;_.polygon`
  stroke-dasharray: 17;
  animation: ${r5} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;_.svg`
  transform-origin: 50% 65%;
`;const i5=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsx(z$,{children:f.jsxs(N$,{children:[f.jsx(B$,{children:f.jsx(Xw,{})}),f.jsx(V$,{children:"Каталог"}),f.jsx(U$,{children:e.map(i=>f.jsxs(W$,{to:`/catalog/${i.title}`,children:[f.jsx(H$,{children:f.jsx(G$,{src:i.image,alt:i.title})}),f.jsx(q$,{children:i.title})]},i.id))})]})})},o5=Fe.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,a5=Fe.h1`
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
`,s5=Fe.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,l5=Fe(Te)`

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

  
`,c5=()=>f.jsxs(o5,{children:[f.jsxs(a5,{children:[" ",f.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),f.jsx(s5,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),f.jsx(l5,{children:" На головну"})]});const u5=_.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,d5=_.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var hS={},mS={},fu={},gS={exports:{}},es={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var xv=Object.getOwnPropertySymbols,f5=Object.prototype.hasOwnProperty,p5=Object.prototype.propertyIsEnumerable;function h5(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function m5(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var g5=m5()?Object.assign:function(e,t){for(var n,r=h5(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)f5.call(n,a)&&(r[a]=n[a]);if(xv){i=xv(n);for(var l=0;l<i.length;l++)p5.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},vS={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om=g5,bo=60103,yS=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var xS=60109,bS=60110,wS=60112;le.Suspense=60113;var SS=60115,_S=60116;if(typeof Symbol=="function"&&Symbol.for){var nn=Symbol.for;bo=nn("react.element"),yS=nn("react.portal"),le.Fragment=nn("react.fragment"),le.StrictMode=nn("react.strict_mode"),le.Profiler=nn("react.profiler"),xS=nn("react.provider"),bS=nn("react.context"),wS=nn("react.forward_ref"),le.Suspense=nn("react.suspense"),SS=nn("react.memo"),_S=nn("react.lazy")}var bv=typeof Symbol=="function"&&Symbol.iterator;function v5(e){return e===null||typeof e!="object"?null:(e=bv&&e[bv]||e["@@iterator"],typeof e=="function"?e:null)}function ts(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var CS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ES={};function wo(e,t,n){this.props=e,this.context=t,this.refs=ES,this.updater=n||CS}wo.prototype.isReactComponent={};wo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(ts(85));this.updater.enqueueSetState(this,e,t,"setState")};wo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kS(){}kS.prototype=wo.prototype;function jm(e,t,n){this.props=e,this.context=t,this.refs=ES,this.updater=n||CS}var $m=jm.prototype=new kS;$m.constructor=jm;Om($m,wo.prototype);$m.isPureReactComponent=!0;var Mm={current:null},TS=Object.prototype.hasOwnProperty,PS={key:!0,ref:!0,__self:!0,__source:!0};function OS(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)TS.call(t,r)&&!PS.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:bo,type:e,key:o,ref:a,props:i,_owner:Mm.current}}function y5(e,t){return{$$typeof:bo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Im(e){return typeof e=="object"&&e!==null&&e.$$typeof===bo}function x5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wv=/\/+/g;function $d(e,t){return typeof e=="object"&&e!==null&&e.key!=null?x5(""+e.key):t.toString(36)}function ll(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case bo:case yS:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+$d(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(wv,"$&/")+"/"),ll(i,t,n,"",function(c){return c})):i!=null&&(Im(i)&&(i=y5(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(wv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+$d(o,l);a+=ll(o,t,n,s,i)}else if(s=v5(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+$d(o,l++),a+=ll(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(ts(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Ts(e,t,n){if(e==null)return e;var r=[],i=0;return ll(e,r,"","",function(o){return t.call(n,o,i++)}),r}function b5(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var jS={current:null};function nr(){var e=jS.current;if(e===null)throw Error(ts(321));return e}var w5={ReactCurrentDispatcher:jS,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Mm,IsSomeRendererActing:{current:!1},assign:Om};le.Children={map:Ts,forEach:function(e,t,n){Ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ts(e,function(){t++}),t},toArray:function(e){return Ts(e,function(t){return t})||[]},only:function(e){if(!Im(e))throw Error(ts(143));return e}};le.Component=wo;le.PureComponent=jm;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w5;le.cloneElement=function(e,t,n){if(e==null)throw Error(ts(267,e));var r=Om({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Mm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)TS.call(t,s)&&!PS.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:bo,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:bS,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:xS,_context:e},e.Consumer=e};le.createElement=OS;le.createFactory=function(e){var t=OS.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:wS,render:e}};le.isValidElement=Im;le.lazy=function(e){return{$$typeof:_S,_payload:{_status:-1,_result:e},_init:b5}};le.memo=function(e,t){return{$$typeof:SS,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return nr().useCallback(e,t)};le.useContext=function(e,t){return nr().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return nr().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return nr().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return nr().useLayoutEffect(e,t)};le.useMemo=function(e,t){return nr().useMemo(e,t)};le.useReducer=function(e,t,n){return nr().useReducer(e,t,n)};le.useRef=function(e){return nr().useRef(e)};le.useState=function(e){return nr().useState(e)};le.version="17.0.2";vS.exports=le;var S5=vS.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _5=S5,$S=60103;es.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Sv=Symbol.for;$S=Sv("react.element"),es.Fragment=Sv("react.fragment")}var C5=_5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E5=Object.prototype.hasOwnProperty,k5={key:!0,ref:!0,__self:!0,__source:!0};function MS(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)E5.call(t,r)&&!k5.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:$S,type:e,key:o,ref:a,props:i,_owner:C5.current}}es.jsx=MS;es.jsxs=MS;gS.exports=es;var Mt=gS.exports,IS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(IS);var It=IS.exports;const T5={"lds-circle":"_lds-circle_qlxhy_1"},P5=Object.freeze(Object.defineProperty({__proto__:null,default:T5},Symbol.toStringTag,{value:"Module"})),O5=jt(P5);var DS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fu,"__esModule",{value:!0});fu.Circle=void 0;const j5=Mt,$5=DS(It),M5=DS(O5);function I5({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,j5.jsx)("div",{className:(0,$5.default)(M5.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}fu.Circle=I5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=fu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(mS);var LS={},pu={};const D5={"lds-default":"_lds-default_wt1n8_1"},L5=Object.freeze(Object.defineProperty({__proto__:null,default:D5},Symbol.toStringTag,{value:"Module"})),A5=jt(L5);var AS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pu,"__esModule",{value:!0});pu.Default=void 0;const _v=Mt,R5=AS(It),F5=AS(A5);function z5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,_v.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,_v.jsx)("div",{className:(0,R5.default)(F5.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}pu.Default=z5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=pu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(LS);var RS={},hu={};const N5={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},B5=Object.freeze(Object.defineProperty({__proto__:null,default:N5},Symbol.toStringTag,{value:"Module"})),V5=jt(B5);var FS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hu,"__esModule",{value:!0});hu.DualRing=void 0;const Cv=Mt,Ev=FS(It),kv=FS(V5);function U5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Cv.jsx)("div",{className:(0,Ev.default)(kv.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,Cv.jsx)("div",{className:(0,Ev.default)(kv.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}hu.DualRing=U5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=hu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(RS);var zS={},mu={};const W5={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},H5=Object.freeze(Object.defineProperty({__proto__:null,default:W5},Symbol.toStringTag,{value:"Module"})),G5=jt(H5);var NS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mu,"__esModule",{value:!0});mu.Ellipsis=void 0;const Tv=Mt,q5=NS(It),Y5=NS(G5);function X5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,Tv.jsx)("div",{style:{background:`${e}`}},l));return(0,Tv.jsx)("div",{className:(0,q5.default)(Y5.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}mu.Ellipsis=X5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=mu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(zS);var BS={},gu={};const K5={"lds-facebook":"_lds-facebook_1ts9g_1"},Q5=Object.freeze(Object.defineProperty({__proto__:null,default:K5},Symbol.toStringTag,{value:"Module"})),Z5=jt(Q5);var VS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gu,"__esModule",{value:!0});gu.Facebook=void 0;const Pv=Mt,J5=VS(It),eM=VS(Z5);function tM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,Pv.jsx)("div",{style:{background:`${e}`}},l));return(0,Pv.jsx)("div",{className:(0,J5.default)(eM.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}gu.Facebook=tM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=gu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(BS);var US={},vu={};const nM={"lds-grid":"_lds-grid_1ftub_1"},rM=Object.freeze(Object.defineProperty({__proto__:null,default:nM},Symbol.toStringTag,{value:"Module"})),iM=jt(rM);var WS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vu,"__esModule",{value:!0});vu.Grid=void 0;const Ov=Mt,oM=WS(It),aM=WS(iM);function sM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,Ov.jsx)("div",{style:{background:`${e}`}},l));return(0,Ov.jsx)("div",{className:(0,oM.default)(aM.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}vu.Grid=sM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=vu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(US);var HS={},yu={};const lM={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},cM=Object.freeze(Object.defineProperty({__proto__:null,default:lM},Symbol.toStringTag,{value:"Module"})),uM=jt(cM);var GS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yu,"__esModule",{value:!0});yu.Heart=void 0;const Ps=Mt,Md=GS(It),Id=GS(uM);function dM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Ps.jsx)("div",{className:(0,Md.default)(Id.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,Ps.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,Ps.jsx)("div",{className:(0,Md.default)(Id.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,Ps.jsx)("div",{className:(0,Md.default)(Id.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}yu.Heart=dM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=yu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(HS);var qS={},xu={};const fM={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},pM=Object.freeze(Object.defineProperty({__proto__:null,default:fM},Symbol.toStringTag,{value:"Module"})),hM=jt(pM);var YS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xu,"__esModule",{value:!0});xu.Hourglass=void 0;const jv=Mt,$v=YS(It),Mv=YS(hM);function mM({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,jv.jsx)("div",{className:(0,$v.default)(Mv.default["lds-hourglass"],n),style:{...r},children:(0,jv.jsx)("div",{className:(0,$v.default)(Mv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}xu.Hourglass=mM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=xu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(qS);var XS={},bu={};const KS="_center_1rufi_10",QS="_spin_1rufi_1",gM={"lds-orbitals":"_lds-orbitals_1rufi_1",center:KS,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:QS},vM=Object.freeze(Object.defineProperty({__proto__:null,center:KS,default:gM,spin:QS},Symbol.toStringTag,{value:"Module"})),yM=jt(vM);var ZS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bu,"__esModule",{value:!0});bu.Orbitals=void 0;const ot=Mt,ft=ZS(It),_e=ZS(yM);function xM({color:e="#7f58af",className:t,style:n}){return(0,ot.jsxs)("div",{className:(0,ft.default)(_e.default["lds-orbitals"],t),style:{...n},children:[(0,ot.jsx)("div",{className:_e.default.center,style:{background:e}}),(0,ot.jsxs)("div",{className:(0,ft.default)(_e.default["inner-spin"]),children:[(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-arc"],_e.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-arc"],_e.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-arc"],_e.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-arc"],_e.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-moon-a"]),style:{background:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-moon-b"]),style:{background:e}})]}),(0,ot.jsxs)("div",{className:(0,ft.default)(_e.default["outer-spin"]),children:[(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-arc"],_e.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-arc"],_e.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-arc"],_e.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-arc"],_e.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-moon-a"]),style:{background:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-moon-b"]),style:{background:e}})]})]})}bu.Orbitals=xM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=bu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(XS);var JS={},wu={};const bM={"lds-ring":"_lds-ring_xgxdp_1"},wM=Object.freeze(Object.defineProperty({__proto__:null,default:bM},Symbol.toStringTag,{value:"Module"})),SM=jt(wM);var e2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wu,"__esModule",{value:!0});wu.Ring=void 0;const Iv=Mt,_M=e2(It),CM=e2(SM);function EM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,Iv.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,Iv.jsx)("div",{className:(0,_M.default)(CM.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}wu.Ring=EM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=wu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(JS);var t2={},Su={};const kM={"lds-ripple":"_lds-ripple_1lgcf_1"},TM=Object.freeze(Object.defineProperty({__proto__:null,default:kM},Symbol.toStringTag,{value:"Module"})),PM=jt(TM);var n2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Su,"__esModule",{value:!0});Su.Ripple=void 0;const Dv=Mt,OM=n2(It),jM=n2(PM);function $M({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,Dv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,Dv.jsx)("div",{className:(0,OM.default)(jM.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}Su.Ripple=$M;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=Su;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(t2);var r2={},_u={};const MM={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},IM=Object.freeze(Object.defineProperty({__proto__:null,default:MM},Symbol.toStringTag,{value:"Module"})),DM=jt(IM);var i2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_u,"__esModule",{value:!0});_u.Roller=void 0;const Dd=Mt,Lv=i2(It),Av=i2(DM);function LM({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Dd.jsx)("div",{children:(0,Dd.jsx)("div",{className:(0,Lv.default)(Av.default["div-after"]),style:{background:e}})},o));return(0,Dd.jsx)("div",{className:(0,Lv.default)(Av.default["lds-roller"],t),style:{...n},children:r})}_u.Roller=LM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=_u;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(r2);var o2={},Cu={};const AM={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},RM=Object.freeze(Object.defineProperty({__proto__:null,default:AM},Symbol.toStringTag,{value:"Module"})),FM=jt(RM);var a2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cu,"__esModule",{value:!0});Cu.Spinner=void 0;const Ld=Mt,Rv=a2(It),Fv=a2(FM);function zM({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,Ld.jsx)("div",{children:(0,Ld.jsx)("div",{className:(0,Rv.default)(Fv.default["div-after"]),style:{background:e}})},o));return(0,Ld.jsx)("div",{className:(0,Rv.default)(Fv.default["lds-spinner"],t),style:{...n},children:r})}Cu.Spinner=zM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=Cu;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(o2);var s2={},Eu={};const l2="_left_v9vlb_30",c2="_right_v9vlb_33",u2="_anim_v9vlb_37",NM={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:l2,right:c2,anim:u2,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},BM=Object.freeze(Object.defineProperty({__proto__:null,anim:u2,default:NM,left:l2,right:c2},Symbol.toStringTag,{value:"Module"})),VM=jt(BM);var d2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Eu,"__esModule",{value:!0});Eu.Ouroboro=void 0;const Ro=Mt,Fo=d2(It),zo=d2(VM);function UM({color:e="#7f58af",style:t,className:n}){return(0,Ro.jsxs)("div",{className:(0,Fo.default)(zo.default["lds-ouroboro"],n),style:{...t},children:[(0,Ro.jsx)("span",{className:(0,Fo.default)(zo.default.left),children:(0,Ro.jsx)("span",{className:(0,Fo.default)(zo.default.anim),style:{background:e}})}),(0,Ro.jsx)("span",{className:(0,Fo.default)(zo.default.right),children:(0,Ro.jsx)("span",{className:(0,Fo.default)(zo.default.anim),style:{background:e}})})]})}Eu.Ouroboro=UM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Eu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(s2);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=mS;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=LS;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=RS;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=zS;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=BS;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=US;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=HS;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=qS;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const c=XS;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return c.Orbitals}});const u=JS;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return u.Ring}});const d=t2;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const v=r2;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return v.Roller}});const g=o2;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return g.Spinner}});const h=s2;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return h.Ouroboro}})})(hS);const WM=()=>f.jsx(d5,{children:f.jsx(hS.Default,{color:"#6d433da8"})});const HM="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",GM=BP`
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
  src: url(${HM}) format('truetype');
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
`,qM=_.div`
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
`,YM=_(Te)`
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
`,XM=_.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,KM=_.h3`

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
`,QM=_.a`

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
`,ZM=_.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,JM=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),f.jsxs(f.Fragment,{children:[f.jsx(XM,{children:"Каталог"}),f.jsxs(qM,{children:[e.slice(0,7).map(n=>f.jsx(YM,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:f.jsx(KM,{children:n.title})},n.title)),f.jsxs(QM,{href:"catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(ZM,{children:f.jsx(Bc,{size:24})})]})]})]})};function zv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Dm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:zv(t[r])&&zv(e[r])&&Object.keys(t[r]).length>0&&Dm(e[r],t[r])})}const f2={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function jn(){const e=typeof document<"u"?document:{};return Dm(e,f2),e}const eI={document:f2,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function bt(){const e=typeof window<"u"?window:{};return Dm(e,eI),e}function tI(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function nI(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function p2(e,t=0){return setTimeout(e,t)}function nc(){return Date.now()}function rI(e){const t=bt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function iI(e,t="x"){const n=bt();let r,i,o;const a=rI(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Os(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function oI(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Lt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!oI(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(Os(t[l])&&Os(r[l])?r[l].__swiper__?t[l]=r[l]:Lt(t[l],r[l]):!Os(t[l])&&Os(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Lt(t[l],r[l])):t[l]=r[l])}}}return t}function bi(e,t,n){e.style.setProperty(t,n)}function h2({swiper:e,targetPosition:t,side:n}){const r=bt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",c=(d,v)=>s==="next"&&d>=v||s==="prev"&&d<=v,u=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),v=.5-Math.cos(d*Math.PI)/2;let g=i+v*(t-i);if(c(g,t)&&(g=t),e.wrapperEl.scrollTo({[n]:g}),c(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:g})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function kn(e,t=""){const n=bt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function aI(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function sI(e,t){const n=bt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=aI(e,t))),r}function rc(e){try{console.warn(e);return}catch{}}function ic(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:tI(t)),n}function lI(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function cI(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function gr(e,t){return bt().getComputedStyle(e,null).getPropertyValue(t)}function oc(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function m2(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Rp(e,t,n){const r=bt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Na(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function g2(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=kn(e.el,`.${r[i]}`)[0];o||(o=ic("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const Nv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function uI({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Nv};function i(g){let h;return g&&typeof g=="string"&&e.isElement&&(h=e.el.querySelector(g)||e.hostEl.querySelector(g),h)?h:(g&&(typeof g=="string"&&(h=[...document.querySelectorAll(g)]),e.params.uniqueNavElements&&typeof g=="string"&&h&&h.length>1&&e.el.querySelectorAll(g).length===1?h=e.el.querySelector(g):h&&h.length===1&&(h=h[0])),g&&!h?g:h)}function o(g,h){const y=e.params.navigation;g=qe(g),g.forEach(w=>{w&&(w.classList[h?"add":"remove"](...y.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=h),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](y.lockClass))})}function a(){const{nextEl:g,prevEl:h}=e.navigation;if(e.params.loop){o(h,!1),o(g,!1);return}o(h,e.isBeginning&&!e.params.rewind),o(g,e.isEnd&&!e.params.rewind)}function l(g){g.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(g){g.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const g=e.params.navigation;if(e.params.navigation=g2(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let h=i(g.nextEl),y=i(g.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:y}),h=qe(h),y=qe(y);const w=(p,m)=>{if(p){if(g.addIcons&&p.matches(".swiper-button-next,.swiper-button-prev")&&!p.querySelector("svg")){const x=document.createElement("div");Na(x,Nv),p.appendChild(x.querySelector("svg")),x.remove()}p.addEventListener("click",m==="next"?s:l)}!e.enabled&&p&&p.classList.add(...g.lockClass.split(" "))};h.forEach(p=>w(p,"next")),y.forEach(p=>w(p,"prev"))}function u(){let{nextEl:g,prevEl:h}=e.navigation;g=qe(g),h=qe(h);const y=(w,p)=>{w.removeEventListener("click",p==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};g.forEach(w=>y(w,"next")),h.forEach(w=>y(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?v():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{u()}),n("enable disable",()=>{let{nextEl:g,prevEl:h}=e.navigation;if(g=qe(g),h=qe(h),e.enabled){a();return}[...g,...h].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),n("click",(g,h)=>{let{nextEl:y,prevEl:w}=e.navigation;y=qe(y),w=qe(w);const p=h.target;let m=w.includes(p)||y.includes(p);if(e.isElement&&!m){const x=h.path||h.composedPath&&h.composedPath();x&&(m=x.find(S=>y.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===p||e.pagination.el.contains(p)))return;let x;y.length?x=y[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...y,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),a()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(e.navigation,{enable:d,disable:v,update:a,init:c,destroy:u})}function No(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function dI({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(p,m){const{bulletActiveClass:x}=e.params.pagination;p&&(p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${x}-${m}`),p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${x}-${m}-${m}`)))}function c(p,m,x){if(p=p%x,m=m%x,m===p+1)return"next";if(m===p-1)return"previous"}function u(p){const m=p.target.closest(No(e.params.pagination.bulletClass));if(!m)return;p.preventDefault();const x=oc(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=c(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function d(){const p=e.rtl,m=e.params.pagination;if(l())return;let x=e.pagination.el;x=qe(x);let S,E;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,k=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,S=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const C=e.pagination.bullets;let j,M,A;if(m.dynamicBullets&&(o=Rp(C[0],e.isHorizontal()?"width":"height",!0),x.forEach(I=>{I.style[e.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&E!==void 0&&(a+=S-(E||0),a>m.dynamicMainBullets-1?a=m.dynamicMainBullets-1:a<0&&(a=0)),j=Math.max(S-a,0),M=j+(Math.min(C.length,m.dynamicMainBullets)-1),A=(M+j)/2),C.forEach(I=>{const O=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${m.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();I.classList.remove(...O)}),x.length>1)C.forEach(I=>{const O=oc(I);O===S?I.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&I.setAttribute("part","bullet"),m.dynamicBullets&&(O>=j&&O<=M&&I.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),O===j&&s(I,"prev"),O===M&&s(I,"next"))});else{const I=C[S];if(I&&I.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&C.forEach((O,F)=>{O.setAttribute("part",F===S?"bullet-active":"bullet")}),m.dynamicBullets){const O=C[j],F=C[M];for(let D=j;D<=M;D+=1)C[D]&&C[D].classList.add(...`${m.bulletActiveClass}-main`.split(" "));s(O,"prev"),s(F,"next")}}if(m.dynamicBullets){const I=Math.min(C.length,m.dynamicMainBullets+4),O=(o*I-o)/2-A*o,F=p?"right":"left";C.forEach(D=>{D.style[e.isHorizontal()?F:"top"]=`${O}px`})}}x.forEach((C,j)=>{if(m.type==="fraction"&&(C.querySelectorAll(No(m.currentClass)).forEach(M=>{M.textContent=m.formatFractionCurrent(S+1)}),C.querySelectorAll(No(m.totalClass)).forEach(M=>{M.textContent=m.formatFractionTotal(k)})),m.type==="progressbar"){let M;m.progressbarOpposite?M=e.isHorizontal()?"vertical":"horizontal":M=e.isHorizontal()?"horizontal":"vertical";const A=(S+1)/k;let I=1,O=1;M==="horizontal"?I=A:O=A,C.querySelectorAll(No(m.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${I}) scaleY(${O})`,F.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(Na(C,m.renderCustom(e,S+1,k)),j===0&&r("paginationRender",C)):(j===0&&r("paginationRender",C),r("paginationUpdate",C)),e.params.watchOverflow&&e.enabled&&C.classList[e.isLocked?"add":"remove"](m.lockClass)})}function v(){const p=e.params.pagination;if(l())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=qe(x);let S="";if(p.type==="bullets"){let E=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>m&&(E=m);for(let P=0;P<E;P+=1)p.renderBullet?S+=p.renderBullet.call(e,P,p.bulletClass):S+=`<${p.bulletElement} ${e.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?S=p.renderFraction.call(e,p.currentClass,p.totalClass):S=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?S=p.renderProgressbar.call(e,p.progressbarFillClass):S=`<span class="${p.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(E=>{p.type!=="custom"&&Na(E,S||""),p.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(No(p.bulletClass)))}),p.type!=="custom"&&r("paginationRender",x[0])}function g(){e.params.pagination=g2(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const p=e.params.pagination;if(!p.el)return;let m;typeof p.el=="string"&&e.isElement&&(m=e.el.querySelector(p.el)),!m&&typeof p.el=="string"&&(m=[...document.querySelectorAll(p.el)]),m||(m=p.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(p.el)],m.length>1&&(m=m.find(x=>m2(x,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=qe(m),m.forEach(x=>{p.type==="bullets"&&p.clickable&&x.classList.add(...(p.clickableClass||"").split(" ")),x.classList.add(p.modifierClass+p.type),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(x.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&x.classList.add(p.progressbarOppositeClass),p.clickable&&x.addEventListener("click",u),e.enabled||x.classList.add(p.lockClass)}))}function h(){const p=e.params.pagination;if(l())return;let m=e.pagination.el;m&&(m=qe(m),m.forEach(x=>{x.classList.remove(p.hiddenClass),x.classList.remove(p.modifierClass+p.type),x.classList.remove(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(x.classList.remove(...(p.clickableClass||"").split(" ")),x.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...p.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const p=e.params.pagination;let{el:m}=e.pagination;m=qe(m),m.forEach(x=>{x.classList.remove(p.horizontalClass,p.verticalClass),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(g(),v(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{v(),d()}),n("destroy",()=>{h()}),n("enable disable",()=>{let{el:p}=e.pagination;p&&(p=qe(p),p.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(p,m)=>{const x=m.target,S=qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const E=S[0].classList.contains(e.params.pagination.hiddenClass);r(E===!0?"paginationShow":"paginationHide"),S.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=qe(p),p.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),g(),v(),d()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=qe(p),p.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:y,disable:w,render:v,update:d,init:g,destroy:h})}function fI({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,c,u=new Date().getTime(),d,v,g,h,y,w;function p(R){!e||e.destroyed||!e.wrapperEl||R.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",p),!(w||R.detail&&R.detail.bySwiperTouchMove)&&j())}const m=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=c,d=!1);const R=e.autoplay.paused?c:u+s-new Date().getTime();e.autoplay.timeLeft=R,r("autoplayTimeLeft",R,R/l),a=requestAnimationFrame(()=>{m()})},x=()=>{let R;return e.virtual&&e.params.virtual.enabled?R=e.slides.find($=>$.classList.contains("swiper-slide-active")):R=e.slides[e.activeIndex],R?parseInt(R.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let R=e.params.autoplay.delay;const T=x();return!Number.isNaN(T)&&T>0&&(R=T),R},E=R=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),m();let T=R;typeof T>"u"&&(T=S(),l=T,s=T),c=T;const $=e.params.speed,z=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev($,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,$,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext($,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,$,!0,!0),r("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return T>0?(clearTimeout(o),o=setTimeout(()=>{z()},T)):requestAnimationFrame(()=>{z()}),T},P=()=>{u=new Date().getTime(),e.autoplay.running=!0,E(),r("autoplayStart")},k=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},C=(R,T)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),R||(y=!0);const $=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",p):j()};if(e.autoplay.paused=!0,T){$();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),$())},j=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),y?(y=!1,E(c)):E(),e.autoplay.paused=!1,r("autoplayResume"))},M=()=>{if(e.destroyed||!e.autoplay.running)return;const R=jn();R.visibilityState==="hidden"&&(y=!0,C(!0)),R.visibilityState==="visible"&&j()},A=R=>{R.pointerType==="mouse"&&(y=!0,w=!0,!(e.animating||e.autoplay.paused)&&C(!0))},I=R=>{R.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&j())},O=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",A),e.el.addEventListener("pointerleave",I))},F=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",A),e.el.removeEventListener("pointerleave",I))},D=()=>{jn().addEventListener("visibilitychange",M)},L=()=>{jn().removeEventListener("visibilitychange",M)};n("init",()=>{e.params.autoplay.enabled&&(O(),D(),P())}),n("destroy",()=>{F(),L(),e.autoplay.running&&k()}),n("_freeModeStaticRelease",()=>{(g||y)&&j()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?k():C(!0,!0)}),n("beforeTransitionStart",(R,T,$)=>{e.destroyed||!e.autoplay.running||($||!e.params.autoplay.disableOnInteraction?C(!0,!0):k())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){k();return}v=!0,g=!1,y=!1,h=setTimeout(()=>{y=!0,g=!0,C(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(h),clearTimeout(o),e.params.autoplay.disableOnInteraction){g=!1,v=!1;return}g&&e.params.cssMode&&j(),g=!1,v=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=S(),l=S())}),Object.assign(e.autoplay,{start:P,stop:k,pause:C,resume:j})}let Ad;function pI(){const e=bt(),t=jn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function v2(){return Ad||(Ad=pI()),Ad}let Rd;function hI({userAgent:e}={}){const t=v2(),n=bt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=r==="Win32";let g=r==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&g&&t.touch&&h.indexOf(`${a}x${l}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),g=!1),s&&!v&&(o.os="android",o.android=!0),(c||d||u)&&(o.os="ios",o.ios=!0),o}function y2(e={}){return Rd||(Rd=hI(e)),Rd}let Fd;function mI(){const e=bt(),t=y2();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,c]=l.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));n=s<16||s===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function x2(){return Fd||(Fd=mI()),Fd}function gI({swiper:e,on:t,emit:n}){const r=bt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(u=>{o=r.requestAnimationFrame(()=>{const{width:d,height:v}=e;let g=d,h=v;u.forEach(({contentBoxSize:y,contentRect:w,target:p})=>{p&&p!==e.el||(g=w?w.width:(y[0]||y).inlineSize,h=w?w.height:(y[0]||y).blockSize)}),(g!==d||h!==v)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function vI({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=bt(),a=(c,u={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,v=new d(g=>{if(e.__preventObserver__)return;if(g.length===1){r("observerUpdate",g[0]);return}const h=function(){r("observerUpdate",g[0])};o.requestAnimationFrame?o.requestAnimationFrame(h):o.setTimeout(h,0)});v.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:e.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),i.push(v)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=m2(e.hostEl);for(let u=0;u<c.length;u+=1)a(c[u])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var yI={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function xI(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(gr(r,"padding-left")||0,10)-parseInt(gr(r,"padding-right")||0,10),n=n-parseInt(gr(r,"padding-top")||0,10)-parseInt(gr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function bI(){const e=this;function t(M,A){return parseFloat(M.getPropertyValue(e.getDirectionLabel(A))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,c=kn(i,`.${e.params.slideClass}, swiper-slide`),u=l?e.virtual.slides.length:c.length;let d=[];const v=[],g=[];let h=n.slidesOffsetBefore;typeof h=="function"&&(h=n.slidesOffsetBefore.call(e));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,p=e.slidesGrid.length,m=e.size-h-y;let x=n.spaceBetween,S=-h,E=0,P=0;if(typeof m>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*m:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-h-y,c.forEach(M=>{o?M.style.marginLeft="":M.style.marginRight="",M.style.marginBottom="",M.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(bi(r,"--swiper-centered-offset-before",""),bi(r,"--swiper-centered-offset-after","")),n.cssMode&&(bi(r,"--swiper-slides-offset-before",`${h}px`),bi(r,"--swiper-slides-offset-after",`${y}px`));const k=n.grid&&n.grid.rows>1&&e.grid;k?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let C;const j=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(M=>typeof n.breakpoints[M].slidesPerView<"u").length>0;for(let M=0;M<u;M+=1){C=0;const A=c[M];if(!(A&&(k&&e.grid.updateSlide(M,A,c),gr(A,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(C=n.virtual.slidesPerViewAutoSlideSize),C&&A&&(n.roundLengths&&(C=Math.floor(C)),A.style[e.getDirectionLabel("width")]=`${C}px`);else if(n.slidesPerView==="auto"){j&&(A.style[e.getDirectionLabel("width")]="");const I=getComputedStyle(A),O=A.style.transform,F=A.style.webkitTransform;if(O&&(A.style.transform="none"),F&&(A.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?Rp(A,"width",!0):Rp(A,"height",!0);else{const D=t(I,"width"),L=t(I,"padding-left"),R=t(I,"padding-right"),T=t(I,"margin-left"),$=t(I,"margin-right"),z=I.getPropertyValue("box-sizing");if(z&&z==="border-box")C=D+T+$;else{const{clientWidth:B,offsetWidth:N}=A;C=D+L+R+T+$+(N-B)}}O&&(A.style.transform=O),F&&(A.style.webkitTransform=F),n.roundLengths&&(C=Math.floor(C))}else C=(m-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),A&&(A.style[e.getDirectionLabel("width")]=`${C}px`);A&&(A.swiperSlideSize=C),g.push(C),n.centeredSlides?(S=S+C/2+E/2+x,E===0&&M!==0&&(S=S-m/2-x),M===0&&(S=S-m/2-x),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),P%n.slidesPerGroup===0&&d.push(S),v.push(S)):(n.roundLengths&&(S=Math.floor(S)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&d.push(S),v.push(S),S=S+C+x),e.virtualSize+=C+x,E=C,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,m)+y,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),k&&e.grid.updateWrapperSize(C,d),!n.centeredSlides){const M=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,A=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||M);let I=d.length;if(A){let F;if(n.slidesPerView==="auto"){F=1;let D=0;for(let L=g.length-1;L>=0&&(D+=g[L]+(L<g.length-1?x:0),D<=m);L-=1)F=g.length-L}else F=Math.floor(n.slidesPerView);I=Math.max(u-F,0)}const O=[];for(let F=0;F<d.length;F+=1){let D=d[F];n.roundLengths&&(D=Math.floor(D)),A?F<=I&&O.push(D):d[F]<=e.virtualSize-m&&O.push(D)}d=O,Math.floor(e.virtualSize-m)-Math.floor(d[d.length-1])>1&&(A||d.push(e.virtualSize-m))}if(l&&n.loop){const M=g[0]+x;if(n.slidesPerGroup>1){const A=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),I=M*n.slidesPerGroup;for(let O=0;O<A;O+=1)d.push(d[d.length-1]+I)}for(let A=0;A<e.virtual.slidesBefore+e.virtual.slidesAfter;A+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+M),v.push(v[v.length-1]+M),e.virtualSize+=M}if(d.length===0&&(d=[0]),x!==0){const M=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((A,I)=>!n.cssMode||n.loop?!0:I!==c.length-1).forEach(A=>{A.style[M]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let M=0;g.forEach(I=>{M+=I+(x||0)}),M-=x;const A=M>m?M-m:0;d=d.map(I=>I<=0?-h:I>A?A+y:I)}if(n.centerInsufficientSlides){let M=0;if(g.forEach(A=>{M+=A+(x||0)}),M-=x,M<m){const A=(m-M)/2;d.forEach((I,O)=>{d[O]=I-A}),v.forEach((I,O)=>{v[O]=I+A})}}if(Object.assign(e,{slides:c,snapGrid:d,slidesGrid:v,slidesSizesGrid:g}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){bi(r,"--swiper-centered-offset-before",`${-d[0]}px`),bi(r,"--swiper-centered-offset-after",`${e.size/2-g[g.length-1]/2}px`);const M=-e.snapGrid[0],A=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(I=>I+M),e.slidesGrid=e.slidesGrid.map(I=>I+A)}if(u!==s&&e.emit("slidesLengthChange"),d.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==p&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const M=`${n.containerModifierClass}backface-hidden`,A=e.el.classList.contains(M);u<=n.maxBackfaceHiddenSlides?A||e.el.classList.add(M):A&&e.el.classList.remove(M)}}function wI(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function SI(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Bv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function _I(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const c=r[s];let u=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+l),v=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+l),g=-(a-u),h=g+t.slidesSizesGrid[s],y=g>=0&&g<=t.size-t.slidesSizesGrid[s],w=g>=0&&g<t.size-1||h>1&&h<=t.size||g<=0&&h>=t.size;w&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s)),Bv(c,w,n.slideVisibleClass),Bv(c,y,n.slideFullyVisibleClass),c.progress=i?-d:d,c.originalProgress=i?-v:v}}function CI(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,c=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const u=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=u||i<=0,a=d||i>=1,u&&(i=0),d&&(i=1)}if(n.loop){const u=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),v=t.slidesGrid[u],g=t.slidesGrid[d],h=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=v?l=(y-v)/h:l=(y+h-g)/h,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(s&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const zd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function EI(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>kn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,c,u;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),u=t.find(d=>d.column===i+1),c=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(u=cI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),c=lI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(d=>{zd(d,d===s,n.slideActiveClass),zd(d,d===u,n.slideNextClass),zd(d,d===c,n.slidePrevClass)}),e.emitSlidesClasses()}const cl=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},Nd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Fp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,c)=>a+r+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&Nd(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&Nd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Nd(e,a)};function kI(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function TI(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,c;const u=g=>{let h=g-t.virtual.slidesBefore;return h<0&&(h=t.virtual.slides.length+h),h>=t.virtual.slides.length&&(h-=t.virtual.slides.length),h};if(typeof s>"u"&&(s=kI(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,s);c=g+Math.floor((s-g)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let v;if(t.virtual&&i.virtual.enabled)i.loop?v=u(s):v=s;else if(d){const g=t.slides.find(y=>y.column===s);let h=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(t.slides.indexOf(g),0)),v=Math.floor(h/i.grid.rows)}else if(t.slides[s]){const g=t.slides[s].getAttribute("data-swiper-slide-index");g?v=parseInt(g,10):v=s}else v=s;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:v,previousIndex:o,activeIndex:s}),t.initialized&&Fp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==v&&t.emit("realIndexChange"),t.emit("slideChange"))}function PI(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var OI={updateSize:xI,updateSlides:bI,updateAutoHeight:wI,updateSlidesOffset:SI,updateSlidesProgress:_I,updateProgress:CI,updateSlidesClasses:EI,updateActiveIndex:TI,updateClickedSlide:PI};function jI(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=iI(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function $I(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const c=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let u;const d=n.maxTranslate()-n.minTranslate();d===0?u=0:u=(e-n.minTranslate())/d,u!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function MI(){return-this.snapGrid[0]}function II(){return-this.snapGrid[this.snapGrid.length-1]}function DI(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),c=o.maxTranslate();let u;if(r&&e>s?u=s:r&&e<c?u=c:u=e,o.updateProgress(u),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-u;else{if(!o.support.smoothScroll)return h2({swiper:o,targetPosition:-u,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(v){!o||o.destroyed||v.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var LI={getTranslate:jI,setTranslate:$I,minTranslate:MI,maxTranslate:II,translateTo:DI};function AI(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function b2({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function RI(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),b2({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function FI(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),b2({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var zI={setTransition:AI,transitionStart:RI,transitionEnd:FI};function NI(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:v,wrapperEl:g,enabled:h}=o;if(!h&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let w=y+Math.floor((a-y)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const p=-s[w];if(l.normalizeSlideIndex)for(let k=0;k<c.length;k+=1){const C=-Math.floor(p*100),j=Math.floor(c[k]*100),M=Math.floor(c[k+1]*100);typeof c[k+1]<"u"?C>=j&&C<M-(M-j)/2?a=k:C>=j&&C<M&&(a=k+1):C>=j&&(a=k)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(v?p>o.translate&&p>o.minTranslate():p<o.translate&&p<o.minTranslate())||!o.allowSlidePrev&&p>o.translate&&p>o.maxTranslate()&&(d||0)!==a))return!1;a!==(u||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(p);let m;a>d?m="next":a<d?m="prev":m="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(v&&-p===o.translate||!v&&p===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(p),m!=="reset"&&(o.transitionStart(n,m),o.transitionEnd(n,m)),!1;if(l.cssMode){const k=o.isHorizontal(),C=v?p:-p;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[k?"scrollLeft":"scrollTop"]=C})):g[k?"scrollLeft":"scrollTop"]=C,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return h2({swiper:o,targetPosition:C,side:k?"left":"top"}),!0;g.scrollTo({[k?"left":"top"]:C,behavior:"smooth"})}return!0}const P=x2().isSafari;return x&&!i&&P&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(p),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,m),t===0?o.transitionEnd(n,m):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(C){!o||o.destroyed||C.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,m))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function BI(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const y=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c,slidesOffsetBefore:u,slidesOffsetAfter:d}=i.params,v=c||!!u||!!d;let g=i.params.slidesPerView;g==="auto"?g=i.slidesPerViewDynamic():(g=Math.ceil(parseFloat(i.params.slidesPerView,10)),v&&g%2===0&&(g=g+1));let h=s-l<g;if(v&&(h=h||l<Math.ceil(g/2)),r&&v&&i.params.slidesPerView!=="auto"&&!o&&(h=!1),h){const y=v?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?l+1:l-s+1,slideRealIndex:y==="next"?i.realIndex:void 0})}if(o){const y=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function VI(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function UI(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const u=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function v(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const g=v(d),h=o.map(m=>v(m)),y=i.freeMode&&i.freeMode.enabled;let w=o[h.indexOf(g)-1];if(typeof w>"u"&&(i.cssMode||y)){let m;o.forEach((x,S)=>{g>=x&&(m=S)}),typeof m<"u"&&(w=y?o[m]:o[m>0?m-1:m])}let p=0;if(typeof w<"u"&&(p=a.indexOf(w),p<0&&(p=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(p=p-r.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),i.rewind&&r.isBeginning){const m=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(m,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(p,e,t,n)}),!0;return r.slideTo(p,e,t,n)}function WI(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function HI(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const c=i.snapGrid[l],u=i.snapGrid[l+1];s-c>(u-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],u=i.snapGrid[l];s-c<=(u-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function GI(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(kn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),p2(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var qI={slideTo:NI,slideToLoop:BI,slideNext:VI,slidePrev:UI,slideReset:WI,slideToClosest:HI,slideToClickedSlide:GI};function YI(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{kn(i,`.${r.slideClass}, swiper-slide`).forEach((h,y)=>{h.setAttribute("data-swiper-slide-index",y)})},a=()=>{const g=kn(i,`.${r.slideBlankClass}`);g.forEach(h=>{h.remove()}),g.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),c=n.slides.length%s!==0,u=l&&n.slides.length%r.grid.rows!==0,d=g=>{for(let h=0;h<g;h+=1){const y=n.isElement?ic("swiper-slide",[r.slideBlankClass]):ic("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(y)}};if(c){if(r.loopAddBlankSlides){const g=s-n.slides.length%s;d(g),n.recalcSlides(),n.updateSlides()}else rc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(u){if(r.loopAddBlankSlides){const g=r.grid.rows-n.slides.length%r.grid.rows;d(g),n.recalcSlides(),n.updateSlides()}else rc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const v=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:v?void 0:"next",initial:t})}function XI({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:v,params:g}=s,{centeredSlides:h,slidesOffsetBefore:y,slidesOffsetAfter:w,initialSlide:p}=g,m=h||!!y||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&g.virtual.enabled){t&&(!m&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):m&&s.snapIndex<g.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=u,s.allowSlideNext=d,s.emit("loopFix");return}let x=g.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(g.slidesPerView,10)),m&&x%2===0&&(x=x+1));const S=g.slidesPerGroupAuto?x:g.slidesPerGroup;let E=m?Math.max(S,Math.ceil(x/2)):S;E%S!==0&&(E+=S-E%S),E+=g.loopAdditionalSlides,s.loopedSlides=E;const P=s.grid&&g.grid&&g.grid.rows>1;c.length<x+E||s.params.effect==="cards"&&c.length<x+E*2?rc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):P&&g.grid.fill==="row"&&rc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],C=[],j=P?Math.ceil(c.length/g.grid.rows):c.length,M=o&&j-p<x&&!m;let A=M?p:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(c.find(T=>T.classList.contains(g.slideActiveClass))):A=i;const I=n==="next"||!n,O=n==="prev"||!n;let F=0,D=0;const R=(P?c[i].column:i)+(m&&typeof r>"u"?-x/2+.5:0);if(R<E){F=Math.max(E-R,S);for(let T=0;T<E-R;T+=1){const $=T-Math.floor(T/j)*j;if(P){const z=j-$-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===z&&k.push(B)}else k.push(j-$-1)}}else if(R+x>j-E){D=Math.max(R-(j-E*2),S),M&&(D=Math.max(D,x-j+p+1));for(let T=0;T<D;T+=1){const $=T-Math.floor(T/j)*j;P?c.forEach((z,B)=>{z.column===$&&C.push(B)}):C.push($)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&c.length<x+E*2&&(C.includes(i)&&C.splice(C.indexOf(i),1),k.includes(i)&&k.splice(k.indexOf(i),1)),O&&k.forEach(T=>{c[T].swiperLoopMoveDOM=!0,v.prepend(c[T]),c[T].swiperLoopMoveDOM=!1}),I&&C.forEach(T=>{c[T].swiperLoopMoveDOM=!0,v.append(c[T]),c[T].swiperLoopMoveDOM=!1}),s.recalcSlides(),g.slidesPerView==="auto"?s.updateSlides():P&&(k.length>0&&O||C.length>0&&I)&&s.slides.forEach((T,$)=>{s.grid.updateSlide($,T,s.slides)}),g.watchSlidesProgress&&s.updateSlidesOffset(),t){if(k.length>0&&O){if(typeof e>"u"){const T=s.slidesGrid[A],z=s.slidesGrid[A+F]-T;l?s.setTranslate(s.translate-z):(s.slideTo(A+Math.ceil(F),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else if(r){const T=P?k.length/g.grid.rows:k.length;s.slideTo(s.activeIndex+T,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(C.length>0&&I)if(typeof e>"u"){const T=s.slidesGrid[A],z=s.slidesGrid[A-D]-T;l?s.setTranslate(s.translate-z):(s.slideTo(A-D,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else{const T=P?C.length/g.grid.rows:C.length;s.slideTo(s.activeIndex-T,0,!1,!0)}}if(s.allowSlidePrev=u,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const T={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach($=>{!$.destroyed&&$.params.loop&&$.loopFix({...T,slideTo:$.params.slidesPerView===g.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...T,slideTo:s.controller.control.params.slidesPerView===g.slidesPerView?t:!1})}s.emit("loopFix")}function KI(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var QI={loopCreate:YI,loopFix:XI,loopDestroy:KI};function ZI(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function JI(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var eD={setGrabCursor:ZI,unsetGrabCursor:JI};function tD(e,t=this){function n(r){if(!r||r===jn()||r===bt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Vv(e,t,n){const r=bt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function nD(e){const t=this,n=jn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Vv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!sI(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",u=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&u&&(s=u[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(v?tD(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const g=a.currentX,h=a.currentY;if(!Vv(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=g,a.startY=h,i.touchStartTime=nc(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;s.matches(i.focusableElements)&&(y=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function rD(e){const t=jn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].find(P=>P.identifier===r.touchId),!c||c.identifier!==r.touchId)return}else c=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const u=c.pageX,d=c.pageY;if(s.preventedByNestedSwiper){o.startX=u,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=nc());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(u>o.startX&&-n.translate<=n.maxTranslate()||u<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(u<o.startX&&n.translate<=n.maxTranslate()||u>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=u,o.currentY=d;const v=o.currentX-o.startX,g=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(v**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let P;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:v*v+g*g>=25&&(P=Math.atan2(Math.abs(g),Math.abs(v))*180/Math.PI,r.isScrolling=n.isHorizontal()?P>i.touchAngle:90-P>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let h=n.isHorizontal()?v:g,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(h=Math.abs(h)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=h,h*=i.touchRatio,a&&(h=-h,y=-y);const w=n.touchesDirection;n.swipeDirection=h>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const p=n.params.loop&&!i.cssMode,m=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(p&&m&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const P=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(P)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&p&&m&&Math.abs(h)>=1){Object.assign(o,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=h+r.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),h>0?(p&&m&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+h)**E))):h<0&&(p&&m&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-h)**E))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(h)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function iD(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(E=>E.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:c,enabled:u}=t;if(!u||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=nc(),v=d-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),v<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=nc(),p2(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(a.followFinger?g=s?t.translate:-t.translate:g=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const h=g>=-t.maxTranslate()&&!t.params.loop;let y=0,w=t.slidesSizesGrid[0];for(let E=0;E<c.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){const P=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[E+P]<"u"?(h||g>=c[E]&&g<c[E+P])&&(y=E,w=c[E+P]-c[E]):(h||g>=c[E])&&(y=E,w=c[c.length-1]-c[c.length-2])}let p=null,m=null;a.rewind&&(t.isBeginning?m=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(p=0));const x=(g-c[y])/w,S=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(v>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?p:y+S):t.slideTo(y)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(y+S):m!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(m):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+S):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(p!==null?p:y+S),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:y))}}function Uv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function oD(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function aD(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function sD(e){const t=this;cl(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function lD(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const w2=(e,t)=>{const n=jn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Uv,!0):e[c]("observerUpdate",Uv,!0),i[s]("load",e.onLoad,{capture:!0}))};function cD(){const e=this,{params:t}=e;e.onTouchStart=nD.bind(e),e.onTouchMove=rD.bind(e),e.onTouchEnd=iD.bind(e),e.onDocumentTouchStart=lD.bind(e),t.cssMode&&(e.onScroll=aD.bind(e)),e.onClick=oD.bind(e),e.onLoad=sD.bind(e),w2(e,"on")}function uD(){w2(this,"off")}var dD={attachEvents:cD,detachEvents:uD};const Wv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function fD(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=jn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),c=e.getBreakpoint(o,l,s);if(!c||e.currentBreakpoint===c)return;const d=(c in o?o[c]:void 0)||e.originalParams,v=Wv(e,r),g=Wv(e,d),h=e.params.grabCursor,y=d.grabCursor,w=r.enabled;v&&!g?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!v&&g&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),h&&!y?e.unsetGrabCursor():!h&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof d[P]>"u")return;const k=r[P]&&r[P].enabled,C=d[P]&&d[P].enabled;k&&!C&&e[P].disable(),!k&&C&&e[P].enable()});const p=d.direction&&d.direction!==r.direction,m=r.loop&&(d.slidesPerView!==r.slidesPerView||p),x=r.loop;p&&n&&e.changeDirection(),Lt(e.params,d);const S=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",d),n&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&E?(e.loopCreate(t),e.updateSlides()):x&&!E&&e.loopDestroy()),e.emit("breakpoint",d)}function pD(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=bt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:c}=a[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var hD={setBreakpoint:fD,getBreakpoint:pD};function mD(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function gD(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=mD(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function vD(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var yD={addClasses:gD,removeClasses:vD};function xD(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var bD={checkOverflow:xD},zp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function wD(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Lt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Lt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Lt(t,r)}}const Bd={eventsEmitter:yI,update:OI,translate:LI,transition:zI,slide:qI,loop:QI,grabCursor:eD,events:dD,breakpoints:hD,checkOverflow:bD,classes:yD},Vd={};let Lm=class An{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Lt({},r),n&&!r.el&&(r.el=n);const i=jn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(c=>{const u=Lt({},r,{el:c});s.push(new An(u))}),s}const o=this;o.__swiper__=!0,o.support=v2(),o.device=y2({userAgent:r.userAgent}),o.browser=x2(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:wD(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Lt({},zp,a);return o.params=Lt({},l,Vd,r),o.originalParams=Lt({},o.params),o.passedParams=Lt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=kn(n,`.${r.slideClass}, swiper-slide`),o=oc(i[0]);return oc(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=kn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[c]?Math.ceil(o[c].swiperSlideSize):0,v;for(let g=c+1;g<o.length;g+=1)o[g]&&!v&&(d+=Math.ceil(o[g].swiperSlideSize),u+=1,d>s&&(v=!0));for(let g=c-1;g>=0;g-=1)o[g]&&!v&&(d+=o[g].swiperSlideSize,u+=1,d>s&&(v=!0))}else if(t==="current")for(let d=c+1;d<o.length;d+=1)(n?a[d]+l[d]-a[c]<s:a[d]-a[c]<s)&&(u+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<s&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&cl(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):kn(r,i())[0])();return!a&&n.params.createElements&&(a=ic("div",n.params.wrapperClass),r.append(a),kn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||gr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||gr(r,"direction")==="rtl"),wrongRTL:gr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?cl(n,o):o.addEventListener("load",a=>{cl(n,a.target)})}),Fp(n),n.initialized=!0,Fp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),nI(r)),r.destroyed=!0),null}static extendDefaults(t){Lt(Vd,t)}static get extendedDefaults(){return Vd}static get defaults(){return zp}static installModule(t){An.prototype.__modules__||(An.prototype.__modules__=[]);const n=An.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>An.installModule(n)),An):(An.installModule(t),An)}};Object.keys(Bd).forEach(e=>{Object.keys(Bd[e]).forEach(t=>{Lm.prototype[t]=Bd[e][t]})});Lm.use([gI,vI]);const S2=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ai(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function qi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:ai(t[r])&&ai(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:qi(e[r],t[r]):e[r]=t[r]})}function _2(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function C2(e={}){return e.pagination&&typeof e.pagination.el>"u"}function E2(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function k2(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function SD(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function _D({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(C=>C!=="children"&&C!=="direction"&&C!=="wrapperClass"),{params:c,pagination:u,navigation:d,scrollbar:v,virtual:g,thumbs:h}=e;let y,w,p,m,x,S,E,P;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(y=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(c.pagination||c.pagination===!1)&&u&&!u.el&&(p=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&v&&!v.el&&(m=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(x=!0);const k=C=>{e[C]&&(e[C].destroy(),C==="navigation"?(e.isElement&&(e[C].prevEl.remove(),e[C].nextEl.remove()),c[C].prevEl=void 0,c[C].nextEl=void 0,e[C].prevEl=void 0,e[C].nextEl=void 0):(e.isElement&&e[C].el.remove(),c[C].el=void 0,e[C].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?S=!0:!c.loop&&n.loop?E=!0:P=!0),s.forEach(C=>{if(ai(c[C])&&ai(n[C]))Object.assign(c[C],n[C]),(C==="navigation"||C==="pagination"||C==="scrollbar")&&"enabled"in n[C]&&!n[C].enabled&&k(C);else{const j=n[C];(j===!0||j===!1)&&(C==="navigation"||C==="pagination"||C==="scrollbar")?j===!1&&k(C):c[C]=n[C]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&t&&g&&c.virtual.enabled?(g.slides=t,g.update(!0)):r.includes("virtual")&&g&&c.virtual.enabled&&(t&&(g.slides=t),g.update(!0)),r.includes("children")&&t&&c.loop&&(P=!0),y&&h.init()&&h.update(!0),w&&(e.controller.control=c.controller.control),p&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),u.init(),u.render(),u.update()),m&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),v.init(),v.updateSize(),v.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Na(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Na(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(c.navigation.nextEl=i),o&&(c.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||P)&&e.loopDestroy(),(E||P)&&e.loopCreate(),e.update()}function CD(e={},t=!0){const n={on:{}},r={},i={};qi(n,zp),n._emitClasses=!0,n.init=!1;const o={},a=S2.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?ai(e[s])?(n[s]={},i[s]={},qi(n[s],e[s]),qi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function ED({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){_2(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),C2(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),E2(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function kD(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),c=n.map(i);s.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return S2.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(ai(e[s])&&ai(t[s])){const c=Object.keys(e[s]),u=Object.keys(t[s]);c.length!==u.length?a(s):(c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const TD=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function ac(){return ac=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ac.apply(this,arguments)}function T2(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function P2(e){const t=[];return X.Children.toArray(e).forEach(n=>{T2(n)?t.push(n):n.props&&n.props.children&&P2(n.props.children).forEach(r=>t.push(r))}),t}function PD(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return X.Children.toArray(e).forEach(r=>{if(T2(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=P2(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function OD(e,t,n){if(!n)return null;const r=u=>{let d=u;return u<0?d=t.length+u:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let u=l;u<s;u+=1)u>=o&&u<=a&&c.push(t[r(u)]);return c.map((u,d)=>X.cloneElement(u,{swiper:e,style:i,key:u.props.virtualIndex||u.key||`slide-${d}`}))}function da(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const Hv=b.createContext(null),jD=b.createContext(null),O2=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,c]=b.useState("swiper"),[u,d]=b.useState(null),[v,g]=b.useState(!1),h=b.useRef(!1),y=b.useRef(null),w=b.useRef(null),p=b.useRef(null),m=b.useRef(null),x=b.useRef(null),S=b.useRef(null),E=b.useRef(null),P=b.useRef(null),{params:k,passedParams:C,rest:j,events:M}=CD(o),{slides:A,slots:I}=PD(r),O=()=>{g(!v)};Object.assign(k.on,{_containerClasses(T,$){c($)}});const F=()=>{Object.assign(k.on,M),l=!0;const T={...k};if(delete T.wrapperClass,w.current=new Lm(T),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=A;const $={cache:!1,slides:A,renderExternal:d,renderExternalUpdate:!1};qi(w.current.params.virtual,$),qi(w.current.originalParams.virtual,$)}};y.current||F(),w.current&&w.current.on("_beforeBreakpoint",O);const D=()=>{l||!M||!w.current||Object.keys(M).forEach(T=>{w.current.on(T,M[T])})},L=()=>{!M||!w.current||Object.keys(M).forEach(T=>{w.current.off(T,M[T])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",O)}),b.useEffect(()=>{!h.current&&w.current&&(w.current.emitSlidesClasses(),h.current=!0)}),da(()=>{if(a&&(a.current=y.current),!!y.current)return w.current.destroyed&&F(),ED({el:y.current,nextEl:x.current,prevEl:S.current,paginationEl:E.current,scrollbarEl:P.current,swiper:w.current},k),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),da(()=>{D();const T=kD(C,p.current,A,m.current,$=>$.key);return p.current=C,m.current=A,T.length&&w.current&&!w.current.destroyed&&_D({swiper:w.current,slides:A,passedParams:C,changedParams:T,nextEl:x.current,prevEl:S.current,scrollbarEl:P.current,paginationEl:E.current}),()=>{L()}}),da(()=>{TD(w.current)},[u]);function R(){return k.virtual?OD(w.current,A,u):A.map((T,$)=>X.cloneElement(T,{swiper:w.current,swiperSlideIndex:$}))}return X.createElement(t,ac({ref:y,className:k2(`${s}${e?` ${e}`:""}`)},j),X.createElement(jD.Provider,{value:w.current},I["container-start"],X.createElement(n,{className:SD(k.wrapperClass)},I["wrapper-start"],R(),I["wrapper-end"]),_2(k)&&X.createElement(X.Fragment,null,X.createElement("div",{ref:S,className:"swiper-button-prev"}),X.createElement("div",{ref:x,className:"swiper-button-next"})),E2(k)&&X.createElement("div",{ref:P,className:"swiper-scrollbar"}),C2(k)&&X.createElement("div",{ref:E,className:"swiper-pagination"}),I["container-end"]))});O2.displayName="Swiper";const j2=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},c)=>{const u=b.useRef(null),[d,v]=b.useState("swiper-slide"),[g,h]=b.useState(!1);function y(x,S,E){S===u.current&&v(E)}da(()=>{if(typeof l<"u"&&(u.current.swiperSlideIndex=l),c&&(c.current=u.current),!(!u.current||!r)){if(r.destroyed){d!=="swiper-slide"&&v("swiper-slide");return}return r.on("_slideClass",y),()=>{r&&r.off("_slideClass",y)}}}),da(()=>{r&&u.current&&!r.destroyed&&v(r.getSlideClasses(u.current))},[r]);const w={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},p=()=>typeof t=="function"?t(w):t,m=()=>{h(!0)};return X.createElement(e,ac({ref:u,className:k2(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:m},s),i&&X.createElement(Hv.Provider,{value:w},X.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},p(),o&&!g&&X.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&X.createElement(Hv.Provider,{value:w},p(),o&&!g&&X.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});j2.displayName="SwiperSlide";const $D=_.section`
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
`,MD=_.div`
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
`,ID=_.div`
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
`,DD=_(Te)`
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
`,LD=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],AD=()=>f.jsx($D,{children:f.jsx(O2,{modules:[uI,fI,dI],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:LD.map(e=>f.jsx(j2,{children:f.jsx(MD,{bg:e.img,children:f.jsxs(ID,{children:[f.jsx("h1",{children:e.title}),f.jsx("p",{children:e.desc}),f.jsx(DD,{to:e.url,children:e.btn})]})})},e.id))})}),RD=_.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ud=_.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,Wd=_.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Hd=_.div`
  font-size: 14px;
  color: #888;
`,$2=()=>f.jsxs(RD,{children:[f.jsxs(Ud,{children:[f.jsx(Wd,{children:"3000+"}),f.jsx(Hd,{children:"Перевірених деталей"})]}),f.jsxs(Ud,{children:[f.jsx(Wd,{children:"6 років"}),f.jsx(Hd,{children:"Досвіду на ринку"})]}),f.jsxs(Ud,{children:[f.jsx(Wd,{children:"100%"}),f.jsx(Hd,{children:"Контроль якості"})]})]}),FD=Fe.div`
  background:var(--background-color);
`,zD=Fe.div`
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
`;const ND=()=>f.jsx(FD,{children:f.jsxs(zD,{children:[f.jsx(AD,{}),f.jsx(Xw,{}),f.jsx(JM,{}),f.jsx($2,{})]})}),BD=_.div`
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
`,VD=_.section`
  background-color:  var(--second-background);
`,UD=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,WD=_.button`
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
`,HD=_.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,GD=_.button`
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
`;const qD=_.div`
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
`,YD=_.div`
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
`;const XD=_.div`
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
`;const KD=_.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,QD=_.button`
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
`,M2=_.button`
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
`,ZD=_.div`
  position: relative;
  display: inline-block;

`,JD=_.div`
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
`,wi=_.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,e6=_.aside`

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
`,t6=_.h3`
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
`;const n6=_.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,r6=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,i6=_.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,o6=_.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,a6=_.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,s6=_.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Np=_.input.attrs({type:"checkbox"})`
  display: none;
`,l6=_.span`
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
`;var Bp={},Am={},Rm={},So={};Object.defineProperty(So,"__esModule",{value:!0});So.Direction=void 0;var Gv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Gv||(So.Direction=Gv={}));(function(e){var t=te&&te.__spreadArray||function(I,O,F){if(F||arguments.length===2)for(var D=0,L=O.length,R;D<L;D++)(R||!(D in O))&&(R||(R=Array.prototype.slice.call(O,0,D)),R[D]=O[D]);return I.concat(R||Array.prototype.slice.call(O))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=So,i=function(I){var O=I.toString().split(".")[1];return O?O.length:0};e.getStepDecimals=i;function o(I){return I.touches&&I.touches.length||I.changedTouches&&I.changedTouches.length}e.isTouchEvent=o;function a(I,O,F){var D=(O-I)/F,L=8,R=Number(D.toFixed(L));return parseInt(R.toString(),10)===R}e.isStepDivisible=a;function l(I,O,F,D,L,R,T){var $=1e11;if(I=Math.round(I*$)/$,!R){var z=T[O-1],B=T[O+1];if(z&&z>I)return z;if(B&&B<I)return B}if(I>D)return D;if(I<F)return F;var N=Math.floor(I*$-F*$)%Math.floor(L*$),U=Math.floor(I*$-Math.abs(N)),G=N===0?I:U/$,W=Math.abs(N/$)<L/2?G:G+L,Y=(0,e.getStepDecimals)(L);return parseFloat(W.toFixed(Y))}e.normalizeValue=l;function s(I,O,F){return(I-O)/(F-O)}e.relativeValue=s;function c(I){return I===r.Direction.Up||I===r.Direction.Down}e.isVertical=c;function u(I,O,F){if(O>=F)throw new RangeError("min (".concat(O,") is equal/bigger than max (").concat(F,")"));if(I<O)throw new RangeError("value (".concat(I,") is smaller than min (").concat(O,")"));if(I>F)throw new RangeError("value (".concat(I,") is bigger than max (").concat(F,")"))}e.checkBoundaries=u;function d(I,O,F){return I<O?O:I>F?F:I}e.checkValuesAgainstBoundaries=d;function v(I){if(!(I.length<2)&&!I.slice(1).every(function(O,F){return I[F]<=O}))throw new RangeError("values={[".concat(I,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=v;function g(I){var O=window.getComputedStyle(I);return{top:parseInt(O["margin-top"],10),bottom:parseInt(O["margin-bottom"],10),left:parseInt(O["margin-left"],10),right:parseInt(O["margin-right"],10)}}e.getMargin=g;function h(I){var O=window.getComputedStyle(I);return{top:parseInt(O["padding-top"],10)+parseInt(O["border-top-width"],10),bottom:parseInt(O["padding-bottom"],10)+parseInt(O["border-bottom-width"],10),left:parseInt(O["padding-left"],10)+parseInt(O["border-left-width"],10),right:parseInt(O["padding-right"],10)+parseInt(O["border-right-width"],10)}}e.getPaddingAndBorder=h;function y(I,O,F){var D=F?-1:1;I.forEach(function(L,R){return p(L,D*O[R].x,O[R].y)})}e.translateThumbs=y;function w(I,O,F,D){for(var L=0,R=M(I[0],O,F,D),T=1;T<I.length;T++){var $=M(I[T],O,F,D);$<R&&(R=$,L=T)}return L}e.getClosestThumbIndex=w;function p(I,O,F){I.style.transform="translate(".concat(O,"px, ").concat(F,"px)")}e.translate=p;var m=function(I){var O=[],F=null,D=function(){for(var L=[],R=0;R<arguments.length;R++)L[R]=arguments[R];O=L,!F&&(F=requestAnimationFrame(function(){F=null,I.apply(void 0,O)}))};return D};e.schd=m;function x(I,O,F){var D=I.slice(0);return D[O]=F,D}e.replaceAt=x;function S(I){var O=I.values,F=I.colors,D=I.min,L=I.max,R=I.direction,T=R===void 0?r.Direction.Right:R,$=I.rtl,z=$===void 0?!1:$;z&&T===r.Direction.Right?T=r.Direction.Left:z&&r.Direction.Left&&(T=r.Direction.Right);var B=O.slice(0).sort(function(U,G){return U-G}).map(function(U){return(U-D)/(L-D)*100}),N=B.reduce(function(U,G,W){return"".concat(U,", ").concat(F[W]," ").concat(G,"%, ").concat(F[W+1]," ").concat(G,"%")},"");return"linear-gradient(".concat(T,", ").concat(F[0]," 0%").concat(N,", ").concat(F[F.length-1]," 100%)")}e.getTrackBackground=S;function E(){}e.voidFn=E;function P(I){throw new Error("Didn't expect to get here")}e.assertUnreachable=P;var k=function(I,O,F,D,L){L===void 0&&(L=function(T){return T});var R=Math.ceil(t([I],Array.from(I.children),!0).reduce(function(T,$){var z=Math.ceil($.getBoundingClientRect().width);if($.innerText&&$.innerText.includes(F)&&$.childElementCount===0){var B=$.cloneNode(!0);B.innerHTML=L(O.toFixed(D)),B.style.visibility="hidden",document.body.appendChild(B),z=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return z>T?z:T},I.getBoundingClientRect().width));return R},C=function(I,O,F,D,L,R,T){T===void 0&&(T=function(B){return B});var $=[],z=function(B){var N=k(F[B],D[B],L,R,T),U=O[B].x;O.forEach(function(G,W){var Y=G.x,ee=k(F[W],D[W],L,R,T);B!==W&&(U>=Y&&U<=Y+ee||U+N>=Y&&U+N<=Y+ee)&&($.includes(W)||($.push(B),$.push(W),$=t(t([],$,!0),[B,W],!1),z(W)))})};return z(I),Array.from(new Set($.sort()))},j=function(I,O,F,D,L,R){D===void 0&&(D=.1),L===void 0&&(L=" - "),R===void 0&&(R=function(W){return W});var T=(0,e.getStepDecimals)(D),$=(0,n.useState)({}),z=$[0],B=$[1],N=(0,n.useState)(R(O[F].toFixed(T))),U=N[0],G=N[1];return(0,n.useEffect)(function(){if(I){var W=I.getThumbs();if(W.length<1)return;var Y={},ee=I.getOffsets(),pe=C(F,ee,W,O,L,T,R),we=R(O[F].toFixed(T));if(pe.length){var ie=pe.reduce(function(wt,Co,rs,Eo){return wt.length?t(t([],wt,!0),[ee[Eo[rs]].x],!1):[ee[Eo[rs]].x]},[]);if(Math.min.apply(Math,ie)===ee[F].x){var Ie=[];pe.forEach(function(wt){Ie.push(O[wt].toFixed(T))}),we=Array.from(new Set(Ie.sort(function(wt,Co){return parseFloat(wt)-parseFloat(Co)}))).map(R).join(L);var We=Math.min.apply(Math,ie),He=Math.max.apply(Math,ie),hi=W[pe[ie.indexOf(He)]].getBoundingClientRect().width;Y.left="".concat(Math.abs(We-(He+hi))/2,"px"),Y.transform="translate(-50%, 0)"}else Y.visibility="hidden"}G(we),B(Y)}},[I,O]),[U,z]};e.useThumbOverlap=j;function M(I,O,F,D){var L=I.getBoundingClientRect(),R=L.left,T=L.top,$=L.width,z=L.height;return c(D)?Math.abs(F-(T+z/2)):Math.abs(O-(R+$/2))}var A=function(){var I,O=((I=navigator.userAgentData)===null||I===void 0?void 0:I.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(O)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=A})(Rm);var c6=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),u6=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),d6=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),f6=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&u6(t,e,n);return d6(t,e),t},qv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Am,"__esModule",{value:!0});var js=f6(b),oe=Rm,ze=So,p6=["ArrowRight","ArrowUp","k","PageUp"],h6=["ArrowLeft","ArrowDown","j","PageDown"],m6=function(e){c6(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=js.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,c=r.trackRef.current;if(!c)return console.warn("No track element found."),[];var u=c.getBoundingClientRect(),d=(0,oe.getPaddingAndBorder)(c);return r.getThumbs().map(function(v,g){var h={x:0,y:0},y=v.getBoundingClientRect(),w=(0,oe.getMargin)(v);switch(o){case ze.Direction.Right:return h.x=(w.left+d.left)*-1,h.y=((y.height-u.height)/2+d.top)*-1,h.x+=u.width*(0,oe.relativeValue)(a[g],l,s)-y.width/2,h;case ze.Direction.Left:return h.x=(w.right+d.right)*-1,h.y=((y.height-u.height)/2+d.top)*-1,h.x+=u.width-u.width*(0,oe.relativeValue)(a[g],l,s)-y.width/2,h;case ze.Direction.Up:return h.x=((y.width-u.width)/2+w.left+d.left)*-1,h.y=-d.left,h.y+=u.height-u.height*(0,oe.relativeValue)(a[g],l,s)-y.height/2,h;case ze.Direction.Down:return h.x=((y.width-u.width)/2+w.left+d.left)*-1,h.y=-d.left,h.y+=u.height*(0,oe.relativeValue)(a[g],l,s)-y.height/2,h;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,c=o.rtl,u=o.direction,d=r.state.isChanged,v=r.getTargetIndex(i.nativeEvent),g=c||u===ze.Direction.Left||u===ze.Direction.Down?-1:1;v!==-1&&(p6.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:v,isChanged:!0}),l((0,oe.replaceAt)(a,v,r.normalizeValue(a[v]+g*(i.key==="PageUp"?s*10:s),v)))):h6.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:v,isChanged:!0}),l((0,oe.replaceAt)(a,v,r.normalizeValue(a[v]-g*(i.key==="PageDown"?s*10:s),v)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,c=r.props,u=c.direction,d=c.min,v=c.max,g=c.onChange,h=c.values,y=c.step,w=c.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var p=r.trackRef.current;if(!p)return null;var m=p.getBoundingClientRect(),x=(0,oe.isVertical)(u)?m.height:m.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],E=o-s[1],P=0;switch(u){case ze.Direction.Right:case ze.Direction.Left:P=S/x*(v-d);break;case ze.Direction.Down:case ze.Direction.Up:P=E/x*(v-d);break;default:(0,oe.assertUnreachable)(u)}if(w&&(P*=-1),Math.abs(P)>=y/2){for(var k=0;k<r.thumbRefs.length;k++){if(h[k]===v&&Math.sign(P)===1||h[k]===d&&Math.sign(P)===-1)return;var C=h[k]+P;C>v?P=v-h[k]:C<d&&(P=d-h[k])}for(var j=h.slice(0),k=0;k<r.thumbRefs.length;k++)j=(0,oe.replaceAt)(j,k,r.normalizeValue(h[k]+P,k));r.setState({draggedTrackPos:[i,o]}),g(j)}}else{var M=0;switch(u){case ze.Direction.Right:M=(i-m.left)/x*(v-d)+d;break;case ze.Direction.Left:M=(x-(i-m.left))/x*(v-d)+d;break;case ze.Direction.Down:M=(o-m.top)/x*(v-d)+d;break;case ze.Direction.Up:M=(x-(o-m.top))/x*(v-d)+d;break;default:(0,oe.assertUnreachable)(u)}w&&(M=v+d-M),Math.abs(h[l]-M)>=y/2&&g((0,oe.replaceAt)(h,l,r.normalizeValue(M,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,c=a.step,u=a.allowOverlap,d=a.values;return(0,oe.normalizeValue)(i,o,l,s,c,u,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=js.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),c=[],u=0;u<r.numOfMarks+1;u++){var d=9999,v=9999;if(r.markRefs[u].current){var g=r.markRefs[u].current.getBoundingClientRect();d=g.height,v=g.width}r.props.direction===ze.Direction.Left||r.props.direction===ze.Direction.Right?c.push([Math.round(o/r.numOfMarks*u+l-v/2),-Math.round((d-a)/2)]):c.push([Math.round(a/r.numOfMarks*u+s-d/2),-Math.round((v-o)/2)])}r.setState({markOffsets:c})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return js.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,c=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),c),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(u){(0,oe.isStepDivisible)(a,u,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,c=s===void 0?function(){return null}:s,u=r.values,d=r.min,v=r.max,g=r.allowOverlap,h=r.disabled,y=this.state,w=y.draggedThumbIndex,p=y.thumbZIndexes,m=y.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":u.length===1&&!h?"pointer":"inherit"},onMouseDown:h?oe.voidFn:this.onMouseDownTrack,onTouchStart:h?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:h,children:qv(qv([],m.map(function(x,S,E){return c({props:{style:n.props.direction===ze.Direction.Left||n.props.direction===ze.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),u.map(function(x,S){var E=n.state.draggedThumbIndex===S;return l({index:S,value:x,isDragged:E,props:{style:{position:"absolute",zIndex:p[S],cursor:h?"inherit":E?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:h?void 0:0,"aria-valuemax":g?v:u[S+1]||v,"aria-valuemin":g?d:u[S-1]||d,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:h?oe.voidFn:n.onKeyDown,onKeyUp:h?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:ze.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(js.Component);Am.default=m6;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Am);e.Range=n.default;var r=Rm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=So;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Bp);const g6=_.div`
  padding: 20px 0;
`,v6=_.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Yv=_.input`
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
`;const y6=_.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,x6=_.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,I2=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,c]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(c(e),t&&t(e))},[e,t]);const u=g=>{c(g),t&&t(g)},d=(g,h)=>{const y=h===""?"":Number(h),w=[...s];w[g]=y,u(w)},v=g=>{const h=[...s];g===0?((h[0]===""||h[0]<o)&&(h[0]=o),h[0]>h[1]-50&&(h[0]=h[1]-50)):((h[1]===""||h[1]>a)&&(h[1]=a),h[1]<h[0]+50&&(h[1]=h[0]+50)),u(h)};return f.jsx(f.Fragment,{children:l&&f.jsxs(g6,{children:[f.jsxs(v6,{children:[f.jsx(Yv,{type:"number",value:s[0],min:o,max:s[1],onChange:g=>d(0,g.target.value),onBlur:()=>v(0)}),f.jsx(Yv,{type:"number",value:s[1],min:s[0],max:a,onChange:g=>d(1,g.target.value),onBlur:()=>v(1)})]}),f.jsx(Bp.Range,{values:s,step:50,min:o,max:a,onChange:u,renderTrack:({props:g,children:h})=>f.jsx(y6,{...g,background:Bp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:h}),renderThumb:({props:g})=>f.jsx(x6,{...g})})]})})},b6=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState([]),[l,s]=b.useState({});b.useEffect(()=>{t&&(async()=>{try{const w=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],p={};w.forEach(x=>{var S;(S=x.attributes)==null||S.forEach(E=>{p[E.label]||(p[E.label]=new Set),p[E.label].add(E.value)})});const m=Object.entries(p).map(([x,S])=>({type:"checkbox",label:x,name:x.toLowerCase(),options:Array.from(S)}));console.log("fillltr",m),a(m)}catch(h){console.error(h)}})()},[t]);const c=g=>{s(h=>({...h,[g]:!h[g]}))},u=(g,h)=>{r(y=>{const w=y[g]||[];return w.includes(h)?{...y,[g]:w.filter(p=>p!==h)}:{...y,[g]:[...w,h]}})},d=Object.values(n).some(g=>Array.isArray(g)&&g.length>0),v=()=>{d&&r({})};return console.log(d),f.jsxs(e6,{children:[f.jsxs(t6,{children:["Фільтри ",f.jsx(vw,{size:20})]}),(o||[]).map(g=>{var y;const h=!!l[g.name];return f.jsxs(n6,{children:[f.jsxs(r6,{onClick:()=>c(g.name),children:[f.jsx(i6,{children:g.label}),f.jsx(o6,{isOpen:h})]}),f.jsxs(a6,{isOpen:h,children:[g.type==="checkbox"&&((y=g.options)==null?void 0:y.map(w=>{var p;return f.jsxs(s6,{children:[f.jsx(Np,{checked:((p=n[g.name])==null?void 0:p.includes(w))||!1,onChange:()=>u(g.name,w)}),f.jsx(l6,{}),w]},w)})),g.type==="range"&&f.jsx(I2,{onChange:i,childValues:e})]})]},g.name)}),f.jsx(M2,{onClick:v,disabled:!d,children:"Скинути обрані фільтри"})]})},w6=_.aside`
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
`;const S6=_.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,_6=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,C6=_.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,E6=_.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,k6=_.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,T6=_.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Vp=_.input.attrs({type:"checkbox"})`
  display: none;
`,P6=_.span`
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
`,O6=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState({}),[l,s]=b.useState([]);b.useEffect(()=>{t&&(async()=>{try{const v=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const g=await v.json();console.log("dataaaa",g.data);const h=g.data||[],y={};h.forEach(p=>{var m;(m=p.attributes)==null||m.forEach(x=>{y[x.label]||(y[x.label]=new Set),y[x.label].add(x.value)})});const w=Object.entries(y).map(([p,m])=>({type:"checkbox",label:p,name:p.toLowerCase(),options:Array.from(m)}));console.log("fillltr",w),s(w)}catch(v){console.error(v)}})()},[t]);const c=d=>{a(v=>({...v,[d]:!v[d]}))},u=(d,v)=>{r(g=>{const h=g[d]||[];return h.includes(v)?{...g,[d]:h.filter(y=>y!==v)}:{...g,[d]:[...h,v]}})};return f.jsx(w6,{children:(l||[]).map(d=>{var g;const v=!!o[d.name];return f.jsxs(S6,{children:[f.jsxs(_6,{onClick:()=>c(d.name),children:[f.jsx(C6,{children:d.label}),f.jsx(E6,{isOpen:v})]}),f.jsxs(k6,{isOpen:v,children:[d.type==="checkbox"&&((g=d.options)==null?void 0:g.map(h=>{var y;return f.jsxs(T6,{children:[f.jsx(Vp,{checked:((y=n[d.name])==null?void 0:y.includes(h))||!1,onChange:()=>u(d.name,h)}),f.jsx(P6,{}),h]},h)})),d.type==="range"&&f.jsx(I2,{onChange:i,childValues:e})]})]},d.name)})})},j6=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:c})=>{const[u,d]=b.useState([]),[v,g]=b.useState(!0),[h,y]=b.useState(1),w=24;let p=u;const m=b.useRef(null);b.useEffect(()=>{const O=F=>{m.current&&!m.current.contains(F.target)&&o(!1)};return document.addEventListener("mousedown",O),()=>{document.removeEventListener("mousedown",O)}},[o]),b.useEffect(()=>{(async()=>{try{g(!0);const D=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();d(D.data);const L=D.data.map(R=>R.price);if(L.length>0){let R=Math.min(...L),T=Math.max(...L);e([R,T])}}catch(F){console.error("Error fetching products:",F)}finally{g(!1)}})()},[t,e]),b.useEffect(()=>{y(1)},[t,n,r]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[h]);const x=$t(),S=Jt(),E=Re(O=>O.favorites.items),P=Re(O=>O.cart.items),k=(O,F)=>{F.stopPropagation();const D=E.some(L=>L.id===(O==null?void 0:O.id));di(O,D,S,K)};if(Object.keys(n).forEach(O=>{const F=n[O];Array.isArray(F)&&F.length>0&&(p=p.filter(D=>{var R;const L=(R=D.attributes)==null?void 0:R.find(T=>T.label.toLowerCase()===O.toLowerCase());return L&&F.includes(L.value)}))}),r&&r.length===2){const[O,F]=r;console.log(O,F)}const C=b.useMemo(()=>{const O=[...p],F=D=>D.new_price&&D.new_price<D.price?D.new_price:D.price;switch(i){case"name":return O.sort((D,L)=>s==="asc"?D.name.localeCompare(L.name):L.name.localeCompare(D.name));case"price":return O.sort((D,L)=>{const R=F(D),T=F(L);return s==="asc"?R-T:T-R});case"date":return O.sort((D,L)=>s==="asc"?new Date(D.createdAt)-new Date(L.createdAt):new Date(L.createdAt)-new Date(D.createdAt));default:return O}},[i,p,s]),j=h*w,M=j-w,A=C.slice(M,j),I=Math.ceil(p.length/w);return v?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsxs(x3,{children:[f.jsxs(b3,{children:[f.jsx(w3,{children:t}),f.jsxs(O3,{ref:m,children:[f.jsxs(j3,{onClick:()=>o(O=>!O),children:["Сортування",f.jsx(Nc,{strokeWidth:.9,size:22})]}),a&&f.jsxs($3,{children:[f.jsx(xi,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),f.jsx(xi,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),f.jsx(xi,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(xi,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(xi,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(xi,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(Dn,{autoClose:1500}),p.length===0?f.jsx(S3,{children:f.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):f.jsx(_3,{children:A.map(O=>{var U,G;const F=E.some(W=>W.id===O.id),D=P.find(W=>W.id===O.id),R=(D?D.quantity:0)>=(O.stock||0),T=(O==null?void 0:O.available)??!0,$=O.new_price&&O.new_price<O.price,z=$?O.new_price:O.price,B=$?Math.round((O.price-O.new_price)/O.price*100):0,N=(W,Y)=>{if(Y.stopPropagation(),R){K.error("Товар уже у кошику");return}S(ri({...W,quantity:1})),K.success(`${W.name} додано в кошик!`)};return f.jsxs(C3,{onClick:()=>x(`/product/${O.slug??O.id}`),style:{cursor:"pointer"},children:[!T&&f.jsx(ym,{children:"Заброньовано"}),f.jsx(E3,{src:((G=(U=O.images)==null?void 0:U[0])==null?void 0:G.url)||"/placeholder.jpg",alt:O.name,onError:W=>{W.currentTarget.onerror=null,W.currentTarget.src=oi}}),f.jsx(T3,{children:O.name}),f.jsxs(k3,{children:[f.jsx(Uw,{children:f.jsxs(Ww,{children:[f.jsxs(Hw,{$discount:$,children:[z.toLocaleString()," грн"]}),$&&f.jsxs(Gw,{children:[O.price.toLocaleString()," грн"]}),$&&f.jsxs(qw,{children:["-",B,"%"]})]})}),f.jsxs(Vw,{children:[T&&f.jsx(ec,{onClick:W=>N(O,W),children:f.jsx(yo,{size:24,color:D?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(ec,{onClick:W=>k(O,W),children:f.jsx(Xa,{size:24,fill:F?"#ff4d4f":"none",color:F?"#ff4d4f":"#000000",strokeWidth:F?1:2})})]})]})]},O.id)})}),p.length>w&&f.jsxs(P3,{children:[f.jsx(Od,{onClick:()=>y(O=>Math.max(O-1,1)),disabled:h===1,children:"Назад"}),Array.from({length:I},(O,F)=>f.jsx(Od,{onClick:()=>y(F+1),active:h===F+1,children:F+1},F)),f.jsx(Od,{onClick:()=>y(O=>Math.min(O+1,I)),disabled:h===I,children:"Вперед"})]})]})},$6=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=Iy(),[r,i]=b.useState(!1),[o,a]=b.useState(!1),[l,s]=b.useState("date"),[c,u]=b.useState("desc"),[d,v]=b.useState([]),[g,h]=b.useState([0,0]),y=Object.values(e).some(p=>Array.isArray(p)&&p.length>0),w=()=>{y&&t({})};return f.jsxs(VD,{children:[f.jsxs(BD,{children:[f.jsxs(UD,{children:[f.jsxs(WD,{onClick:()=>i(!0),children:["Фільтр",f.jsx(HD,{children:f.jsx("use",{href:`${hn}#icon-filter`})})]}),f.jsxs(ZD,{children:[f.jsxs(GD,{onClick:()=>a(p=>!p),children:["Сортування",f.jsx(Nc,{strokeWidth:.9,size:22})]}),o&&f.jsxs(JD,{children:[f.jsx(wi,{onClick:()=>{s("name"),u("asc"),a(!1)},children:"А-Я"}),f.jsx(wi,{onClick:()=>{s("name"),u("desc"),a(!1)},children:"Я-А"}),f.jsx(wi,{onClick:()=>{s("price"),u("asc"),a(!1)},children:"Ціна ↑"}),f.jsx(wi,{onClick:()=>{s("price"),u("desc"),a(!1)},children:"Ціна ↓"}),f.jsx(wi,{onClick:()=>{s("date"),u("desc"),a(!1)},children:"Спочатку новіші"}),f.jsx(wi,{onClick:()=>{s("date"),u("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(b6,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:d,priceRange:g,setPriceRange:h}),f.jsx(j6,{priceRange:g,values:d,setValues:v,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:c,setSortOrder:u}),r&&f.jsx(qD,{onClick:()=>i(!1),open:r,children:f.jsxs(YD,{onClick:p=>p.stopPropagation(),open:r,children:[f.jsxs(XD,{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx(vw,{size:20}),f.jsx("h2",{children:"Фільтри"})]}),f.jsx(xw,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),f.jsx(O6,{childValues:d,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:g,setPriceRange:h}),f.jsxs(KD,{children:[f.jsx(M2,{onClick:w,disabled:!y,children:"Скинути обрані фільтри"}),f.jsx(QD,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},Xv=_.div`
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
`,M6=_.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,I6=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,D6=_.div``;_.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const L6=_.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,A6=_.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,R6=_.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,F6=_.div``,z6=_.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,N6=_.p`
   font-size: 17px;
  margin-bottom: 10px;
  color: #151414;
    font-family: var(--second-font);

`,B6=_.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,V6=_.div`
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

`,U6=_.span`
  color: #27ae60;
  font-size: 17px;
`,W6=_.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,H6=_.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,Kv=_.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,G6=_.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,q6=_.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,Y6=_.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,X6=_.div`
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
`,K6=_.button`
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
`;const Qv=_.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,Q6=_.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,Zv=_.div`
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
`;const Z6=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,Jv=_.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,e1=_.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,Bo=_.button`
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
`,t1=_.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,n1=_.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,J6=_.button`
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
`,eL=_.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,D2=_.span`

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
`,tL=_.div`
  position: relative;
  display: inline-block;

  &:hover ${D2} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,L2="carousel",A2="controller",nL="navigation",rL="no-scroll",Fm="portal",iL="root",R2="toolbar",r1="zoom",Gd="loading",qd="error",Yd="complete",oL="placeholder",aL=e=>`active-slide-${e}`,sL="fullsize",zm="flex_center",lL="no_scroll",F2="no_scroll_padding",Nm="slide",z2="slide_wrapper",cL="slide_wrapper_interactive",Br="prev",Vr="next",i1="swipe",co="close",N2="onPointerDown",B2="onPointerMove",V2="onPointerUp",U2="onPointerLeave",W2="onPointerCancel",Bm="onKeyDown",uL="onKeyUp",Vm="onWheel",dL="Escape",fL="ArrowLeft",pL="ArrowRight",hL="button",Up="icon",H2="contain",o1="cover",G2="Unknown action type",q2="yarl__";function $n(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${q2}${e}`}function _t(e){return`--${q2}${e}`}function ns(e,t){return`${e}${t?`_${t}`:""}`}function Um(e){return t=>ns(e,t)}function uo(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function mL(e,t,n){return uo(e,"{index} of {total}").replace(/\{index}/g,`${Ym(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function Wm(...e){return()=>{e.forEach(t=>{t()})}}function rr(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Hm(){return typeof window<"u"}function Gm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function _o(e){return e.type===void 0||e.type==="image"}function qm(e,t){return e.imageFit===o1||e.imageFit!==H2&&t===o1}function ku(e){return typeof e=="string"?Number.parseInt(e,10):e}function sc(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=ku(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function gL(e,t){const n=sc(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function vL(){return(Hm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Ym(e,t){return t>0?(e%t+t)%t:0}function Y2(e){return e.length>0}function X2(e,t){return e[Ym(t,e.length)]}function Wp(e,t){return Y2(e)?X2(e,t):void 0}function yL(e){return _o(e)?e.src:void 0}function xL(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function bL(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const wL=Number(b.version.split(".")[0])>=19;function SL(e){return{inert:wL?e:e?"":void 0}}function _L(e){e.scrollTop}const Hp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[co]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:H2,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Ir(e,t){return{name:e,component:t}}function Ge(e,t){return{module:e,children:t}}function K2(e,t,n){return e.module.name===t?n(e):e.children?[Ge(e.module,e.children.flatMap(r=>{var i;return(i=K2(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function Si(e,t,n){return e.flatMap(r=>{var i;return(i=K2(r,t,n))!==null&&i!==void 0?i:[]})}function CL(e,t=[],n=[]){let r=e;const i=g=>{const h=[...r];for(;h.length>0;){const y=h.pop();if((y==null?void 0:y.module.name)===g)return!0;y!=null&&y.children&&h.push(...y.children)}return!1},o=(g,h)=>{if(g===""){r=[Ge(h,r)];return}r=Si(r,g,y=>[Ge(h,[y])])},a=(g,h)=>{r=Si(r,g,y=>[Ge(y.module,[Ge(h,y.children)])])},l=(g,h,y)=>{r=Si(r,g,w=>{var p;return[Ge(w.module,[...y?[Ge(h)]:[],...(p=w.children)!==null&&p!==void 0?p:[],...y?[]:[Ge(h)]])]})},s=(g,h,y)=>{r=Si(r,g,w=>[...y?[Ge(h)]:[],w,...y?[]:[Ge(h)]])},c=g=>{a(A2,g)},u=(g,h)=>{r=Si(r,g,y=>[Ge(h,y.children)])},d=g=>{r=Si(r,g,h=>h.children)},v=g=>{n.push(g)};return t.forEach(g=>{g({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:c,replace:u,remove:d,augment:v})}),{config:r,augmentation:g=>n.reduce((h,y)=>y(h),g)}}const Q2=b.createContext(null),Z2=rr("useA11yContext","A11yContext",Q2);function EL({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const c=u=>d=>{var v;d.currentTarget.contains(d.relatedTarget)||n(u),(v=u?l:s)===null||v===void 0||v(d)};return{onFocus:c(!0),onBlur:c(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(Q2.Provider,{value:o},e)}const J2=b.createContext(null),Tu=rr("useDocument","DocumentContext",J2);function kL({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(J2.Provider,{value:n},t)}const e_=b.createContext(null),Pu=rr("useEvents","EventsContext",e_);function TL({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(c=>c!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(c=>c(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(e_.Provider,{value:n},e)}const t_=b.createContext(null),en=rr("useLightboxProps","LightboxPropsContext",t_);function PL({children:e,...t}){return b.createElement(t_.Provider,{value:t},e)}const n_=b.createContext(null),Dr=rr("useLightboxState","LightboxStateContext",n_),r_=b.createContext(null),OL=rr("useLightboxDispatch","LightboxDispatchContext",r_);function jL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Ym(i,n.length),a=Wp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Wp(t.slides,t.index)}:e;default:throw new Error(G2)}}function $L({slides:e,index:t,children:n}){const[r,i]=b.useReducer(jL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Wp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const c=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(r_.Provider,{value:i},b.createElement(n_.Provider,{value:c},n))}const i_=b.createContext(null),Ou=rr("useTimeouts","TimeoutsContext",i_);function ML({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(i_.Provider,{value:n},e)}const Xm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:c,labels:u}=en(),d=uo(u,t);return b.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:$n(ae(hL),n),onClick:o,style:{...a,...c.button},...l},i?i():b.createElement(r,{className:ae(Up),style:c.icon}))});function IL(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function pi(e,t){return IL(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const DL=pi("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),LL=pi("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),AL=pi("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),RL=pi("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),FL=pi("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Mn=Hm()?b.useLayoutEffect:b.useEffect;function Km(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function zL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(ku);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function a1(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=Km();return Mn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:c,easing:u,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),zL(e.current))||{};if(s&&c){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:c,easing:u})}catch(v){console.error(v)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function o_(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=c=>parseFloat(c)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function ul(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=Ou();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function he(e){const t=b.useRef(e);return Mn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function s1(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Gp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{s1(e,n),s1(t,n)},[e,t])}function NL(e,t=!1){const n=b.useRef(!1);Mn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Qm(){const[e,t]=b.useState(!1);return Mn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function BL(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(N2,i),onPointerMove:i=>t(B2,i),onPointerUp:i=>t(V2,i),onPointerLeave:i=>t(U2,i),onPointerCancel:i=>t(W2,i),onKeyDown:i=>t(Bm,i),onKeyUp:i=>t(uL,i),onWheel:i=>t(Vm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function l1(e,t){const n=b.useRef(0),r=ul(),i=he((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Xd=Um("slide"),Kd=Um("slide_image");function lc({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:c}){var u,d,v,g,h,y,w,p;const[m,x]=b.useState(Gd),{publish:S}=Pu(),{setTimeout:E}=Ou(),P=b.useRef(null);b.useEffect(()=>{t===0&&S(aL(m))},[t,m,S]);const k=he(N=>{("decode"in N?N.decode():Promise.resolve()).catch(()=>{}).then(()=>{N.parentNode&&(x(Yd),E(()=>{l==null||l(N)},0))})}),C=b.useCallback(N=>{P.current=N,N!=null&&N.complete&&k(N)},[k]),j=b.useCallback(N=>{k(N.currentTarget)},[k]),M=he(()=>{x(qd),s==null||s()}),A=qm(e,i),I=(N,U)=>Number.isFinite(N)?N:U,O=I(Math.max(...((d=(u=e.srcSet)===null||u===void 0?void 0:u.map(N=>N.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((v=P.current)===null||v===void 0?void 0:v.naturalWidth)||0),F=I(Math.max(...((h=(g=e.srcSet)===null||g===void 0?void 0:g.map(N=>N.height))!==null&&h!==void 0?h:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((y=P.current)===null||y===void 0?void 0:y.naturalHeight)||0),D=O&&F?{maxWidth:`min(${O}px, 100%)`,maxHeight:`min(${F}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},L=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((N,U)=>N.width-U.width).map(N=>`${N.src} ${N.width}w`).join(", "),R=()=>r&&!A&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,T=L&&r&&Hm()?`${Math.round(Math.min(R(),r.width))}px`:void 0,{style:$,className:z,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:C,onLoad:j,onError:M,onClick:a,draggable:!1,className:$n(ae(Kd()),A&&ae(Kd("cover")),m!==Yd&&ae(Kd("loading")),z),style:{...D,...c,...$},...B,alt:(p=e.alt)!==null&&p!==void 0?p:"",sizes:T,srcSet:L,src:e.src}),m!==Yd&&b.createElement("div",{className:ae(Xd(oL))},m===Gd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(RL,{className:$n(ae(Up),ae(Xd(Gd)))})),m===qd&&(n!=null&&n.iconError?n.iconError():b.createElement(FL,{className:$n(ae(Up),ae(Xd(qd)))}))))}const VL=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=Z2();return b.createElement(kL,{nodeRef:l},b.createElement("div",{ref:Gp(a,l),className:$n(ae("root"),t),...s(r,i),...o},n))});var st;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(st||(st={}));function a_(e,t,n,r,i){b.useEffect(()=>i?()=>{}:Wm(e(N2,t),e(B2,n),e(V2,r),e(U2,r),e(W2,r)),[e,t,n,r,i])}var on;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(on||(on={}));const Qd=30;function UL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,c,u,d,v,g,h,y,w){const p=b.useRef(0),m=b.useRef([]),x=b.useRef(void 0),S=b.useRef(0),E=b.useRef(on.NONE),P=b.useCallback(O=>{x.current===O.pointerId&&(x.current=void 0,E.current=on.NONE);const F=m.current;F.splice(0,F.length,...F.filter(D=>D.pointerId!==O.pointerId))},[]),k=b.useCallback(O=>{P(O),O.persist(),m.current.push(O)},[P]),C=b.useCallback(O=>m.current.find(({pointerId:F})=>O.pointerId===F),[]),j=he(O=>{k(O)}),M=(O,F)=>d&&O>F||u&&O<-F,A=he(O=>{const F=C(O);if(F)if(x.current===O.pointerId){const D=Date.now()-S.current,L=p.current;E.current===on.SWIPE?Math.abs(L)>.3*i||Math.abs(L)>5&&D<o?s(L,D):c(L):E.current===on.PULL&&(M(L,2*Qd)?h(L,D):y(L)),p.current=0,E.current=on.NONE}else{const{target:D}=O;t&&D instanceof HTMLElement&&D===F.target&&(D.classList.contains(ae(Nm))||D.classList.contains(ae(z2)))&&w()}P(O)}),I=he(O=>{const F=C(O);if(F){const D=x.current===O.pointerId;if(O.buttons===0){D&&p.current!==0?A(O):P(F);return}const L=O.clientX-F.clientX,R=O.clientY-F.clientY;if(x.current===void 0){const T=$=>{k(O),x.current=O.pointerId,S.current=Date.now(),E.current=$};Math.abs(L)>Math.abs(R)&&Math.abs(L)>Qd&&r(L)?e||(T(on.SWIPE),a()):Math.abs(R)>Math.abs(L)&&M(R,Qd)&&(T(on.PULL),v())}else D&&(E.current===on.SWIPE?(p.current=L,l(L)):E.current===on.PULL&&(p.current=R,g(R)))}});a_(n,j,I,A)}function WL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=he(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function HL(e,t,n,r,i,o,a,l,s){const c=b.useRef(0),u=b.useRef(0),d=b.useRef(void 0),v=b.useRef(void 0),g=b.useRef(0),h=b.useRef(void 0),y=b.useRef(0),{setTimeout:w,clearTimeout:p}=Ou(),m=b.useCallback(()=>{d.current&&(p(d.current),d.current=void 0)},[p]),x=b.useCallback(()=>{v.current&&(p(v.current),v.current=void 0)},[p]),S=he(()=>{e!==st.SWIPE&&(c.current=0,y.current=0,m(),x())});b.useEffect(S,[e,S]);const E=he(k=>{v.current=void 0,c.current===k&&s(c.current)}),P=he(k=>{if(k.ctrlKey||Math.abs(k.deltaY)>Math.abs(k.deltaX))return;const C=j=>{g.current=j,p(h.current),h.current=j>0?w(()=>{g.current=0,h.current=void 0},300):void 0};if(e===st.NONE){if(Math.abs(k.deltaX)<=1.2*Math.abs(g.current)){C(k.deltaX);return}if(!n(-k.deltaX))return;if(u.current+=k.deltaX,m(),Math.abs(u.current)>30)u.current=0,C(0),y.current=Date.now(),o();else{const j=u.current;d.current=w(()=>{d.current=void 0,j===u.current&&(u.current=0)},i)}}else if(e===st.SWIPE){let j=c.current-k.deltaX;if(j=Math.min(Math.abs(j),r)*Math.sign(j),c.current=j,a(j),x(),Math.abs(j)>.2*r){C(k.deltaX),l(j,Date.now()-y.current);return}v.current=w(()=>E(j),2*i)}else C(k.deltaX)});b.useEffect(()=>t(Vm,P),[t,P])}const c1=Um("container"),s_=b.createContext(null),ir=rr("useController","ControllerContext",s_);function GL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:c,closeOnPullDown:u,preventDefaultWheelX:d,preventDefaultWheelY:v}=o,[g,h]=b.useState(),y=Dr(),w=OL(),[p,m]=b.useState(st.NONE),x=b.useRef(0),S=b.useRef(0),E=b.useRef(1),{registerSensors:P,subscribeSensors:k}=BL(),{subscribe:C,publish:j}=Pu(),M=ul(),A=ul(),I=ul(),{containerRef:O,setContainerRef:F,containerRect:D}=o_(),L=Gp(WL({preventDefaultWheelX:d,preventDefaultWheelY:v}),F),R=b.useRef(null),T=Gp(R,void 0),{getOwnerDocument:$}=Tu(),z=Qm(),B=q=>(z?-1:1)*(typeof q=="number"?q:1),N=he(()=>{var q;return(q=O.current)===null||q===void 0?void 0:q.focus()}),U=he(()=>t),G=he(()=>y),W=b.useCallback(q=>j(Br,q),[j]),Y=b.useCallback(q=>j(Vr,q),[j]),ee=b.useCallback(()=>j(co),[j]),pe=q=>!(r.finite&&(B(q)>0&&y.currentIndex===0||B(q)<0&&y.currentIndex===y.slides.length-1)),we=q=>{var Se;x.current=q,(Se=O.current)===null||Se===void 0||Se.style.setProperty(_t("swipe_offset"),`${Math.round(q)}px`)},ie=q=>{var Se,dt;S.current=q,E.current=(()=>{const ko=(()=>u&&q>0?q:c&&q<0?-q:0)();return Math.min(Math.max(Gm(1-ko/60*(1-.5),2),.5),1)})(),(Se=O.current)===null||Se===void 0||Se.style.setProperty(_t("pull_offset"),`${Math.round(q)}px`),(dt=O.current)===null||dt===void 0||dt.style.setProperty(_t("pull_opacity"),`${E.current}`)},{prepareAnimation:Ie}=a1(R,(q,Se,dt)=>{if(R.current&&D)return{keyframes:[{transform:`translate(0, ${q.rect.y-Se.y+dt.y}px)`,opacity:q.opacity},{transform:"translate(0, 0)",opacity:1}],duration:q.duration,easing:i.easing.fade}}),We=(q,Se)=>{if(c||u){ie(q);let dt=0;R.current&&(dt=i.fade*(Se?2:1),Ie({rect:R.current.getBoundingClientRect(),opacity:E.current,duration:dt})),I(()=>{ie(0),m(st.NONE)},dt),m(st.ANIMATION),Se||ee()}},{prepareAnimation:He,isAnimationPlaying:hi}=a1(R,(q,Se,dt)=>{var yn;if(R.current&&D&&(!((yn=y.animation)===null||yn===void 0)&&yn.duration)){const Ht=sc(r.spacing),ko=(Ht.percent?Ht.percent*D.width/100:Ht.pixel)||0;return{keyframes:[{transform:`translate(${B(y.globalIndex-q.index)*(D.width+ko)+q.rect.x-Se.x+dt.x}px, 0)`},{transform:"translate(0, 0)"}],duration:y.animation.duration,easing:y.animation.easing}}}),wt=he(q=>{var Se,dt;const yn=q.offset||0,Ht=yn?i.swipe:(Se=i.navigation)!==null&&Se!==void 0?Se:i.swipe,ko=!yn&&!hi()?i.easing.navigation:i.easing.swipe;let{direction:is}=q;const os=(dt=q.count)!==null&&dt!==void 0?dt:1;let Nu=st.ANIMATION,xn=Ht*os;if(!is){const To=D==null?void 0:D.width,pg=q.duration||0,Vu=To?Ht/To*Math.abs(yn):Ht;os!==0?(pg<Vu?xn=xn/Vu*Math.max(pg,Vu/5):To&&(xn=Ht/To*(To-Math.abs(yn))),is=B(yn)>0?Br:Vr):xn=Ht/2}let Bu=0;is===Br?pe(B(1))?Bu=-os:(Nu=st.NONE,xn=Ht):is===Vr&&(pe(B(-1))?Bu=os:(Nu=st.NONE,xn=Ht)),xn=Math.round(xn),A(()=>{we(0),m(st.NONE)},xn),R.current&&He({rect:R.current.getBoundingClientRect(),index:y.globalIndex}),m(Nu),j(i1,{type:"swipe",increment:Bu,duration:xn,easing:ko})});b.useEffect(()=>{var q,Se;!((q=y.animation)===null||q===void 0)&&q.increment&&(!((Se=y.animation)===null||Se===void 0)&&Se.duration)&&M(()=>w({type:"swipe",increment:0}),y.animation.duration)},[y.animation,w,M]);const Co=[k,pe,(D==null?void 0:D.width)||0,i.swipe,()=>m(st.SWIPE),q=>we(q),(q,Se)=>wt({offset:q,duration:Se,count:1}),q=>wt({offset:q,count:0})],rs=[()=>{u&&m(st.PULL)},q=>ie(q),q=>We(q),q=>We(q,!0)];UL(o,...Co,c,u,...rs,ee),HL(p,...Co);const Eo=he(()=>{o.focus&&$().querySelector(`.${ae(Fm)} .${ae(c1())}`)&&N()});b.useEffect(Eo,[Eo]);const fg=he(()=>{var q;(q=a.view)===null||q===void 0||q.call(a,{index:y.currentIndex})});b.useEffect(fg,[y.globalIndex,fg]),b.useEffect(()=>Wm(C(Br,q=>wt({direction:Br,...q})),C(Vr,q=>wt({direction:Vr,...q})),C(i1,q=>w(q))),[C,wt,w]);const dC=b.useMemo(()=>({prev:W,next:Y,close:ee,focus:N,slideRect:D?gL(D,r.padding):{width:0,height:0},containerRect:D||{width:0,height:0},subscribeSensors:k,containerRef:O,setCarouselRef:T,toolbarWidth:g,setToolbarWidth:h}),[W,Y,ee,N,k,D,O,T,g,h,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:W,next:Y,close:ee,focus:N,getLightboxProps:U,getLightboxState:G}),[W,Y,ee,N,U,G]),b.createElement("div",{ref:L,className:$n(ae(c1()),ae(zm)),style:{...p===st.SWIPE?{[_t("swipe_offset")]:`${Math.round(x.current)}px`}:null,...p===st.PULL?{[_t("pull_offset")]:`${Math.round(S.current)}px`,[_t("pull_opacity")]:`${E.current}`}:null,...o.touchAction!=="none"?{[_t("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...P},D&&b.createElement(s_.Provider,{value:dC},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const qL=Ir(A2,GL);function Lr(e){return ns(L2,e)}function u1(e){return ns(Nm,e)}function YL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Dr(),{slideRect:o,focus:a}=ir(),{render:l,carousel:{imageFit:s,imageProps:c},on:{click:u},styles:{slide:d},labels:v}=en(),{getOwnerDocument:g}=Tu(),h=t!==0;b.useEffect(()=>{var w;h&&(!((w=n.current)===null||w===void 0)&&w.contains(g().activeElement))&&a()},[h,a,g]);const y=()=>{var w,p,m,x;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&_o(e)&&(S=b.createElement(lc,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:c,onClick:h?void 0:()=>u==null?void 0:u({index:r})})),S?b.createElement(b.Fragment,null,(p=l.slideHeader)===null||p===void 0?void 0:p.call(l,{slide:e}),((m=l.slideContainer)!==null&&m!==void 0?m:({children:E})=>E)({slide:e,children:S}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:$n(ae(u1()),!h&&ae(u1("current")),ae(zm)),...SL(h),style:d,role:"group","aria-roledescription":uo(v,"Slide"),"aria-label":mL(v,i,r+t)},y())}function XL(){const e=en().styles.slide;return b.createElement("div",{className:ae(Nm),style:e})}function KL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Dr(),{setCarouselRef:o}=ir(),{autoPlaying:a,focusWithin:l}=Z2(),s=sc(e.spacing),c=sc(e.padding),u=bL(e,n,1),d=[];if(Y2(n))for(let v=r-u;v<=r+u;v+=1){const g=X2(n,v),h=i-r+v,y=e.finite&&(v<0||v>n.length-1);d.push(y?{key:h}:{key:[`${h}`,yL(g)].filter(Boolean).join("|"),offset:v-r,slide:g})}return b.createElement("div",{ref:o,className:$n(ae(Lr()),d.length>0&&ae(Lr("with_slides"))),style:{[`${_t(Lr("slides_count"))}`]:d.length,[`${_t(Lr("spacing_px"))}`]:s.pixel||0,[`${_t(Lr("spacing_percent"))}`]:s.percent||0,[`${_t(Lr("padding_px"))}`]:c.pixel||0,[`${_t(Lr("padding_percent"))}`]:c.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":uo(t,"Carousel"),"aria-label":uo(t,"Photo gallery")},d.map(({key:v,slide:g,offset:h})=>g?b.createElement(YL,{key:v,slide:g,offset:h}):b.createElement(XL,{key:v})))}const QL=Ir(L2,KL);function l_(){const{carousel:e}=en(),{slides:t,currentIndex:n}=Dr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function ZL(e){var t;const n=Qm(),{publish:r}=Pu(),{animation:i}=en(),{prevDisabled:o,nextDisabled:a}=l_(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=l1(()=>r(Br),l),c=l1(()=>r(Vr),l),u=he(d=>{switch(d.key){case dL:r(co);break;case fL:(n?a:o)||(n?c:s)();break;case pL:(n?o:a)||(n?s:c)();break}});b.useEffect(()=>e(Bm,u),[e,u])}function d1({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(Xm,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...NL(ir().focus,o)})}function JL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=ir(),{prevDisabled:s,nextDisabled:c}=l_();return ZL(l),b.createElement(b.Fragment,null,e?e():b.createElement(d1,{label:"Previous",action:Br,icon:LL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(d1,{label:"Next",action:Vr,icon:AL,renderIcon:r,style:i.navigationNext,disabled:c,onClick:a}))}const eA=Ir(nL,JL),f1=ae(lL),tA=ae(F2);function nA(e){return"style"in e}function p1(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(ku(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function rA({noScroll:{disabled:e},children:t}){const n=Qm(),{getOwnerDocument:r,getOwnerWindow:i}=Tu();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),c=Math.round(a.innerWidth-s.clientWidth);if(c>0){o.push(p1(l,c,n));const u=l.getElementsByTagName("*");for(let d=0;d<u.length;d+=1){const v=u[d];nA(v)&&a.getComputedStyle(v).getPropertyValue("position")==="fixed"&&!v.classList.contains(tA)&&o.push(p1(v,c,n))}}return l.classList.add(f1),()=>{l.classList.remove(f1),o.forEach(u=>u())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const iA=Ir(rL,rA);function h1(e){return ns(Fm,e)}function m1(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function oA({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,c]=b.useState(!1),[u,d]=b.useState(!1),v=b.useRef([]),g=b.useRef(null),{setTimeout:h}=Ou(),{subscribe:y}=Pu(),p=Km()?0:t.fade;b.useEffect(()=>(c(!0),()=>{c(!1),d(!1)}),[]);const m=he(()=>{v.current.forEach(P=>P()),v.current=[]}),x=he(()=>{var P;d(!1),m(),(P=i.exiting)===null||P===void 0||P.call(i),h(()=>{var k;(k=i.exited)===null||k===void 0||k.call(i),a()},p)});b.useEffect(()=>y(co,x),[y,x]);const S=he(P=>{var k,C,j;_L(P),d(!0),(k=i.entering)===null||k===void 0||k.call(i);const M=(j=(C=P.parentNode)===null||C===void 0?void 0:C.children)!==null&&j!==void 0?j:[];for(let A=0;A<M.length;A+=1){const I=M[A];["TEMPLATE","SCRIPT","STYLE"].indexOf(I.tagName)===-1&&I!==P&&(v.current.push(m1(I,"inert","")),v.current.push(m1(I,"aria-hidden","true")))}v.current.push(()=>{var A,I;(I=(A=g.current)===null||A===void 0?void 0:A.focus)===null||I===void 0||I.call(A)}),h(()=>{var A;(A=i.entered)===null||A===void 0||A.call(i)},p)}),E=b.useCallback(P=>{P?S(P):m()},[S,m]);return s?Dc.createPortal(b.createElement(VL,{ref:E,className:$n(r,ae(h1()),ae(F2),u&&ae(h1("open"))),"aria-modal":!0,role:"dialog","aria-label":uo(l,"Lightbox"),style:{...t.fade!==Hp.animation.fade?{[_t("fade_animation_duration")]:`${p}ms`}:null,...t.easing.fade!==Hp.animation.easing.fade?{[_t("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:P=>{g.current||(g.current=P.relatedTarget)}},e),o.root||document.body):null}const aA=Ir(Fm,oA);function sA({children:e}){return b.createElement(b.Fragment,null,e)}const lA=Ir(iL,sA);function cA(e){return ns(R2,e)}function uA({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=ir(),{setContainerRef:a,containerRect:l}=o_();Mn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(Xm,{key:co,label:"Close",icon:DL,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:ae(cA())},e==null?void 0:e.map(c=>c===co?s():c))}const dA=Ir(R2,uA);function c_(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>c_(r,t)))}function fA(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function pA({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:c,...u}){const{animation:d,carousel:v,render:g,toolbar:h,controller:y,noScroll:w,on:p,slides:m,index:x,plugins:S,...E}=Hp,{config:P,augmentation:k}=CL([Ge(aA,[Ge(iA,[Ge(qL,[Ge(QL),Ge(dA),Ge(eA)])])])],l||S),C=k({animation:fA(d,t),carousel:{...v,...e},render:{...g,...n},toolbar:{...h,...r},controller:{...y,...i},noScroll:{...w,...o},on:{...p,...a},...E,...u});return C.open?b.createElement(PL,{...C},b.createElement($L,{slides:s||m,index:ku(c||x)},b.createElement(ML,null,b.createElement(TL,null,b.createElement(EL,null,c_(Ge(lA,P),C)))))):null}const hA={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function mA(e){return Math.min(Math.max(e,Number.EPSILON),1)}function u_(e){const{minZoom:t,...n}={...hA,...e};return{minZoom:mA(t),...n}}function gA(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=en().animation,l=Km(),s=he(()=>{var c,u,d;if((c=i.current)===null||c===void 0||c.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(u=r.current).animate)===null||d===void 0?void 0:d.call(u,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(v){console.error(v)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Mn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function vA(e,t){const{on:n}=en(),r=he(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function ju(){const{zoom:e}=en();return u_(e)}function yA(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Dr(),{imageFit:l}=en().carousel,{maxZoomPixelRatio:s}=ju();if(e&&a){const u={...a,...t};if(_o(u)){const d=qm(u,l),v=Math.max(...(((n=u.srcSet)===null||n===void 0?void 0:n.map(h=>h.width))||[]).concat(u.width?[u.width]:[])),g=Math.max(...(((r=u.srcSet)===null||r===void 0?void 0:r.map(h=>h.height))||[]).concat(u.height?[u.height]:[]));v>0&&g>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(v,e.width/e.height*g)),height:Math.round(Math.min(g,e.height/e.width*v))}:{width:v,height:g},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,v),height:Math.min(e.height,o.height,g)}:{width:Math.round(Math.min(e.width,e.height/g*v,v)),height:Math.round(Math.min(e.height,e.width/v*g,g))})}}const c=i.width?Math.max(Gm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:c}}function g1(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function v1(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function xA(e,t,n,r,i,o,a,l,s){const c=b.useRef([]),u=b.useRef(0),d=b.useRef(void 0),{globalIndex:v}=Dr(),{getOwnerWindow:g}=Tu(),{containerRef:h,subscribeSensors:y}=ir(),{keyboardMoveDistance:w,zoomInMultiplier:p,wheelZoomDistanceFactor:m,scrollToZoom:x,doubleTapDelay:S,doubleClickDelay:E,doubleClickMaxStops:P,pinchZoomDistanceFactor:k,pinchZoomV4:C}=ju(),j=b.useCallback(T=>{if(h.current){const{pageX:$,pageY:z}=T,{scrollX:B,scrollY:N}=g(),{left:U,top:G,width:W,height:Y}=h.current.getBoundingClientRect();return[$-U-B-W/2,z-G-N-Y/2]}return[]},[h,g]),M=he(T=>{const{key:$,metaKey:z,ctrlKey:B}=T,N=z||B,U=()=>{T.preventDefault(),T.stopPropagation()};if(e>1){const G=(W,Y)=>{U(),l(W,Y)};$==="ArrowDown"?G(0,w):$==="ArrowUp"?G(0,-w):$==="ArrowLeft"?G(-w,0):$==="ArrowRight"&&G(w,0)}$==="+"||N&&$==="="?(U(),i()):$==="-"||N&&$==="_"?(U(),o()):N&&$==="0"&&(U(),a(1))}),A=he(T=>{if((T.ctrlKey||x)&&Math.abs(T.deltaY)>Math.abs(T.deltaX)){T.stopPropagation(),a(v1(e,-T.deltaY,m),!0,...j(T));return}e>1&&(T.stopPropagation(),x||l(T.deltaX,T.deltaY))}),I=b.useCallback(T=>{const $=c.current;$.splice(0,$.length,...$.filter(z=>z.pointerId!==T.pointerId))},[]),O=b.useCallback(T=>{I(T),T.persist(),c.current.push(T)},[I]),F=he(T=>{var $;const z=c.current;if(T.pointerType==="mouse"&&T.buttons>1||!(!(($=s==null?void 0:s.current)===null||$===void 0)&&$.contains(T.target)))return;e>1&&T.stopPropagation();const{timeStamp:B}=T;if(z.length===0&&B-u.current<(T.pointerType==="touch"?S:E)){u.current=0;const N=e>=1?e!==n?e*Math.max(n**(1/P),p):1:e!==t?e/Math.max(t**(-1/P),p):1;a(N,!1,...j(T))}else u.current=B;if(O(T),z.length===2){const N=g1(z[0],z[1]);d.current={previousDistance:N,initialDistance:Math.max(N,1),initialZoom:e}}}),D=he(T=>{const $=c.current,z=$.find(B=>B.pointerId===T.pointerId);if($.length===2&&d.current){T.stopPropagation(),O(T);const B=g1($[0],$[1]),N=C?d.current.initialZoom/d.current.initialDistance*B:v1(e,B-d.current.previousDistance,k);a(N,!0,...$.map(U=>j(U)).reduce((U,G)=>G.map((W,Y)=>U[Y]+W/2))),d.current.previousDistance=B;return}e>1&&(T.stopPropagation(),z&&($.length===1&&l((z.clientX-T.clientX)/e,(z.clientY-T.clientY)/e),O(T)))}),L=b.useCallback(T=>{const $=c.current;$.length===2&&$.find(z=>z.pointerId===T.pointerId)&&(d.current=void 0),I(T)},[I]),R=b.useCallback(()=>{const T=c.current;T.splice(0,T.length),u.current=0,d.current=void 0},[]);a_(y,F,D,L,r),b.useEffect(R,[v,R]),b.useEffect(()=>r?()=>{}:Wm(R,y(Bm,M),y(Vm,A)),[r,y,R,M,A])}function bA(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),c=gA(r,o,l,n),{currentSlide:u,globalIndex:d}=Dr(),{containerRect:v,slideRect:g}=ir(),{minZoom:h,zoomInMultiplier:y}=ju(),w=u&&_o(u)?u.src:void 0,p=!w||!(n!=null&&n.current);Mn(()=>{i(1),a(0),s(0)},[d,w]);const m=b.useCallback((k,C,j)=>{const M=j||r,A=o-(k||0),I=l-(C||0),O=(e.width*M-g.width)/2/M,F=(e.height*M-g.height)/2/M;a(Math.min(Math.abs(A),Math.max(O,0))*Math.sign(A)),s(Math.min(Math.abs(I),Math.max(F,0))*Math.sign(I))},[r,o,l,g,e.width,e.height]),x=b.useCallback((k,C,j,M)=>{const A=Gm(k+.01<t?k-.01>h?k:h:t,5);C||c(),m(j?j*(1/r-1/A):0,M?M*(1/r-1/A):0,A),i(A)},[r,h,t,m,c]),S=he(()=>{r>1&&(r>t&&x(t,!0),m())});Mn(S,[v.width,v.height,S]);const E=b.useCallback(()=>{const k=r*y;x(r<1&&k>1?1:k)},[r,y,x]),P=b.useCallback(()=>{const k=r/y;x(r>1&&k<1?1:k)},[r,y,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:p,changeOffsets:m,changeZoom:x,zoomIn:E,zoomOut:P}}const d_=b.createContext(null),Zm=rr("useZoom","ZoomControllerContext",d_);function wA({children:e}){const[t,n]=b.useState(),{slideRect:r}=ir(),{ref:i,minZoom:o}=ju(),{imageRect:a,maxZoom:l}=yA(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:c,offsetY:u,disabled:d,changeZoom:v,changeOffsets:g,zoomIn:h,zoomOut:y}=bA(a,l,t==null?void 0:t.zoomWrapperRef);vA(s,d),xA(s,o,l,d,h,y,v,g,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:c,offsetY:u,disabled:d,zoomIn:h,zoomOut:y,changeZoom:v}),[s,o,l,c,u,d,h,y,v]);b.useImperativeHandle(i,()=>w,[w]);const p=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(d_.Provider,{value:p},e)}const SA=pi("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),_A=pi("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),y1=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:c,zoomOut:u,disabled:d}=Zm(),{render:v}=en(),g=d||(t?a>=s:a<=l);return b.useEffect(()=>{g&&i.current&&o.current&&n(),g||(i.current=!0)},[g,n]),b.createElement(Xm,{ref:r,disabled:g,label:t?"Zoom in":"Zoom out",icon:t?SA:_A,renderIcon:t?v.iconZoomIn:v.iconZoomOut,onClick:t?c:u,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function CA(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=ir(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(y1,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(y1,{ref:t,onLoseFocus:i}))}function EA(){const{render:e}=en(),t=Zm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(CA,null)}function kA(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function TA({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(G2)}}function PA(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(TA,{}),{slide:a,rect:l,imageFit:s,render:c,interactive:u}=e,d=a.srcSet.sort((E,P)=>E.width-P.width),v=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,g=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,h=qm(a,s),y=Math.max(...d.map(E=>E.width)),w=Math.min((h?Math.max:Math.min)(l.width,v*(l.height/g)),y),p=vL(),m=he(()=>{var E;const P=(E=d.find(k=>k.width>=w*p))!==null&&E!==void 0?E:d[d.length-1];(!r||d.findIndex(k=>k.src===r)<d.findIndex(k=>k===P))&&o({type:"fetch",source:P.src})});Mn(m,[l.width,l.height,p,m]);const x=he(E=>o({type:"done",source:E})),S={WebkitTransform:u?"initial":"translateZ(0)"};return h||Object.assign(S,l.width/l.height<v/g?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(lc,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>x(i),render:{...c,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(lc,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function OA({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:c,offsetX:u,offsetY:d,setZoomWrapper:v}=Zm(),g=s>1,{carousel:h,on:y}=en(),{currentIndex:w}=Dr();Mn(()=>n===0?(v({zoomWrapperRef:l,imageDimensions:o}),()=>v(void 0)):()=>{},[n,o,v]);let p=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:c});if(!p&&_o(t)){const m={slide:t,offset:n,rect:r,render:e,imageFit:h.imageFit,imageProps:h.imageProps,onClick:n===0?()=>{var x;return(x=y.click)===null||x===void 0?void 0:x.call(y,{index:w})}:void 0};p=kA(t)?b.createElement(PA,{...m,slide:t,interactive:g,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(lc,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...m})}return p?b.createElement("div",{ref:l,className:$n(ae(sL),ae(zm),ae(z2),g&&ae(cL)),style:n===0?{transform:`scale(${s}) translateX(${u}px) translateY(${d}px)`}:void 0},p):null}const jA=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=u_(n);return{zoom:l,toolbar:xL(r,r1,b.createElement(EA,null)),render:{...i,slide:s=>{var c;return _o(s.slide)?b.createElement(OA,{render:i,...s}):(c=i.slide)===null||c===void 0?void 0:c.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Ir(r1,wA))};var f_={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",c="day",u="week",d="month",v="quarter",g="year",h="date",y="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var D=["th","st","nd","rd"],L=F%100;return"["+F+(D[(L-20)%10]||D[L]||D[0])+"]"}},x=function(F,D,L){var R=String(F);return!R||R.length>=D?F:""+Array(D+1-R.length).join(L)+F},S={s:x,z:function(F){var D=-F.utcOffset(),L=Math.abs(D),R=Math.floor(L/60),T=L%60;return(D<=0?"+":"-")+x(R,2,"0")+":"+x(T,2,"0")},m:function F(D,L){if(D.date()<L.date())return-F(L,D);var R=12*(L.year()-D.year())+(L.month()-D.month()),T=D.clone().add(R,d),$=L-T<0,z=D.clone().add(R+($?-1:1),d);return+(-(R+(L-T)/($?T-z:z-T))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:d,y:g,w:u,d:c,D:h,h:s,m:l,s:a,ms:o,Q:v}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},E="en",P={};P[E]=m;var k="$isDayjsObject",C=function(F){return F instanceof I||!(!F||!F[k])},j=function F(D,L,R){var T;if(!D)return E;if(typeof D=="string"){var $=D.toLowerCase();P[$]&&(T=$),L&&(P[$]=L,T=$);var z=D.split("-");if(!T&&z.length>1)return F(z[0])}else{var B=D.name;P[B]=D,T=B}return!R&&T&&(E=T),T||!R&&E},M=function(F,D){if(C(F))return F.clone();var L=typeof D=="object"?D:{};return L.date=F,L.args=arguments,new I(L)},A=S;A.l=j,A.i=C,A.w=function(F,D){return M(F,{locale:D.$L,utc:D.$u,x:D.$x,$offset:D.$offset})};var I=function(){function F(L){this.$L=j(L.locale,null,!0),this.parse(L),this.$x=this.$x||L.x||{},this[k]=!0}var D=F.prototype;return D.parse=function(L){this.$d=function(R){var T=R.date,$=R.utc;if(T===null)return new Date(NaN);if(A.u(T))return new Date;if(T instanceof Date)return new Date(T);if(typeof T=="string"&&!/Z$/i.test(T)){var z=T.match(w);if(z){var B=z[2]-1||0,N=(z[7]||"0").substring(0,3);return $?new Date(Date.UTC(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)):new Date(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)}}return new Date(T)}(L),this.init()},D.init=function(){var L=this.$d;this.$y=L.getFullYear(),this.$M=L.getMonth(),this.$D=L.getDate(),this.$W=L.getDay(),this.$H=L.getHours(),this.$m=L.getMinutes(),this.$s=L.getSeconds(),this.$ms=L.getMilliseconds()},D.$utils=function(){return A},D.isValid=function(){return this.$d.toString()!==y},D.isSame=function(L,R){var T=M(L);return this.startOf(R)<=T&&T<=this.endOf(R)},D.isAfter=function(L,R){return M(L)<this.startOf(R)},D.isBefore=function(L,R){return this.endOf(R)<M(L)},D.$g=function(L,R,T){return A.u(L)?this[R]:this.set(T,L)},D.unix=function(){return Math.floor(this.valueOf()/1e3)},D.valueOf=function(){return this.$d.getTime()},D.startOf=function(L,R){var T=this,$=!!A.u(R)||R,z=A.p(L),B=function(we,ie){var Ie=A.w(T.$u?Date.UTC(T.$y,ie,we):new Date(T.$y,ie,we),T);return $?Ie:Ie.endOf(c)},N=function(we,ie){return A.w(T.toDate()[we].apply(T.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(ie)),T)},U=this.$W,G=this.$M,W=this.$D,Y="set"+(this.$u?"UTC":"");switch(z){case g:return $?B(1,0):B(31,11);case d:return $?B(1,G):B(0,G+1);case u:var ee=this.$locale().weekStart||0,pe=(U<ee?U+7:U)-ee;return B($?W-pe:W+(6-pe),G);case c:case h:return N(Y+"Hours",0);case s:return N(Y+"Minutes",1);case l:return N(Y+"Seconds",2);case a:return N(Y+"Milliseconds",3);default:return this.clone()}},D.endOf=function(L){return this.startOf(L,!1)},D.$set=function(L,R){var T,$=A.p(L),z="set"+(this.$u?"UTC":""),B=(T={},T[c]=z+"Date",T[h]=z+"Date",T[d]=z+"Month",T[g]=z+"FullYear",T[s]=z+"Hours",T[l]=z+"Minutes",T[a]=z+"Seconds",T[o]=z+"Milliseconds",T)[$],N=$===c?this.$D+(R-this.$W):R;if($===d||$===g){var U=this.clone().set(h,1);U.$d[B](N),U.init(),this.$d=U.set(h,Math.min(this.$D,U.daysInMonth())).$d}else B&&this.$d[B](N);return this.init(),this},D.set=function(L,R){return this.clone().$set(L,R)},D.get=function(L){return this[A.p(L)]()},D.add=function(L,R){var T,$=this;L=Number(L);var z=A.p(R),B=function(G){var W=M($);return A.w(W.date(W.date()+Math.round(G*L)),$)};if(z===d)return this.set(d,this.$M+L);if(z===g)return this.set(g,this.$y+L);if(z===c)return B(1);if(z===u)return B(7);var N=(T={},T[l]=r,T[s]=i,T[a]=n,T)[z]||1,U=this.$d.getTime()+L*N;return A.w(U,this)},D.subtract=function(L,R){return this.add(-1*L,R)},D.format=function(L){var R=this,T=this.$locale();if(!this.isValid())return T.invalidDate||y;var $=L||"YYYY-MM-DDTHH:mm:ssZ",z=A.z(this),B=this.$H,N=this.$m,U=this.$M,G=T.weekdays,W=T.months,Y=T.meridiem,ee=function(ie,Ie,We,He){return ie&&(ie[Ie]||ie(R,$))||We[Ie].slice(0,He)},pe=function(ie){return A.s(B%12||12,ie,"0")},we=Y||function(ie,Ie,We){var He=ie<12?"AM":"PM";return We?He.toLowerCase():He};return $.replace(p,function(ie,Ie){return Ie||function(We){switch(We){case"YY":return String(R.$y).slice(-2);case"YYYY":return A.s(R.$y,4,"0");case"M":return U+1;case"MM":return A.s(U+1,2,"0");case"MMM":return ee(T.monthsShort,U,W,3);case"MMMM":return ee(W,U);case"D":return R.$D;case"DD":return A.s(R.$D,2,"0");case"d":return String(R.$W);case"dd":return ee(T.weekdaysMin,R.$W,G,2);case"ddd":return ee(T.weekdaysShort,R.$W,G,3);case"dddd":return G[R.$W];case"H":return String(B);case"HH":return A.s(B,2,"0");case"h":return pe(1);case"hh":return pe(2);case"a":return we(B,N,!0);case"A":return we(B,N,!1);case"m":return String(N);case"mm":return A.s(N,2,"0");case"s":return String(R.$s);case"ss":return A.s(R.$s,2,"0");case"SSS":return A.s(R.$ms,3,"0");case"Z":return z}return null}(ie)||z.replace(":","")})},D.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},D.diff=function(L,R,T){var $,z=this,B=A.p(R),N=M(L),U=(N.utcOffset()-this.utcOffset())*r,G=this-N,W=function(){return A.m(z,N)};switch(B){case g:$=W()/12;break;case d:$=W();break;case v:$=W()/3;break;case u:$=(G-U)/6048e5;break;case c:$=(G-U)/864e5;break;case s:$=G/i;break;case l:$=G/r;break;case a:$=G/n;break;default:$=G}return T?$:A.a($)},D.daysInMonth=function(){return this.endOf(d).$D},D.$locale=function(){return P[this.$L]},D.locale=function(L,R){if(!L)return this.$L;var T=this.clone(),$=j(L,R,!0);return $&&(T.$L=$),T},D.clone=function(){return A.w(this.$d,this)},D.toDate=function(){return new Date(this.valueOf())},D.toJSON=function(){return this.isValid()?this.toISOString():null},D.toISOString=function(){return this.$d.toISOString()},D.toString=function(){return this.$d.toUTCString()},F}(),O=I.prototype;return M.prototype=O,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",c],["$M",d],["$y",g],["$D",h]].forEach(function(F){O[F[1]]=function(D){return this.$g(D,F[0],F[1])}}),M.extend=function(F,D){return F.$i||(F(D,I,M),F.$i=!0),M},M.locale=j,M.isDayjs=C,M.unix=function(F){return M(1e3*F)},M.en=P[E],M.Ls=P,M.p={},M})})(f_);var $A=f_.exports;const x1=Ba($A),MA=_.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;_.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const IA=_.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,DA=_.input`
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
`,LA=_.textarea`
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
`,AA=_.button`
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
`,RA=_.div`
  margin-top: 30px;
`,FA=_.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,zA=_.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,NA=_.span`
  font-weight: bold;
  color: #333;
`,BA=_.span`
  font-size: 12px;
  color: #999;
`,VA=_.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,UA=_.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,WA=_.div`
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
`,b1=({productId:e,questions:t})=>{const[n,r]=b.useState(""),[i,o]=b.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(K.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return f.jsxs(MA,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(IA,{onSubmit:a,children:[f.jsx(DA,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),f.jsx(LA,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),f.jsx(AA,{children:"Надіслати запитання"})]}),f.jsx(RA,{children:t&&t.length>0?t.map(l=>l.answer?f.jsxs(FA,{children:[f.jsxs(zA,{children:[f.jsx(NA,{children:l.userName||"Гість"}),f.jsx(BA,{children:new Date(l.createdAt).toLocaleDateString()})]}),f.jsx(VA,{children:l.question}),f.jsxs(UA,{children:[f.jsx(WA,{children:"Адміністратор"}),f.jsx("p",{children:l.answer})]})]},l.id):null):f.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},HA=async(e,t,n,r)=>{const i=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e,quantity:t,user:n}})});if(!i.ok)throw new Error("Не вдалося створити CartItem");return i.json()},GA=async(e,t,n)=>{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({data:{quantity:t}})});if(!r.ok)throw new Error("Не вдалося оновити CartItem");return r.json()},qA=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o){for(let l=0;l<t;l++)n(ri(e));return r.success(`${e.name} додано в кошик!`),!0}const a=o.id;try{const l=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${a}&populate=product`,{headers:{Authorization:`Bearer ${i}`}});if(!l.ok)throw new Error("Не вдалося отримати кошик користувача");const{data:s}=await l.json(),c=s.find(u=>{var d;return((d=u.product)==null?void 0:d.documentId)===e.documentId});if(c){const u=c.quantity+t;if(u>e.stock)return r.warning(`Доступно лише ${e.stock} шт.`),!1;await GA(c.documentId,u,i),n(sv({id:e.id,quantity:u}))}else await HA(e.documentId,t,a,i),n(ri({...e})),t>1&&n(sv({id:e.id,quantity:t}));return r.success(`${e.name} додано в кошик!`),!0}catch(l){return console.error(l),r.error("Не вдалося додати товар у кошик"),!1}},YA=()=>{var R;const{identifier:e}=Iy(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[c,u]=b.useState(!1),[d,v]=b.useState(0),[g,h]=b.useState(!0),y=!isNaN(e),w=t.find(T=>y?String(T.id)===String(e):T.slug===e),p=w?x1().diff(x1(w.createdAt),"day")<7:!1,x=(T=>{const[$,z]=b.useState(!1);return b.useEffect(()=>{const B=window.matchMedia(T),N=()=>z(B.matches);return N(),B.addEventListener("change",N),()=>B.removeEventListener("change",N)},[T]),$})("(min-width: 768px)"),S=Re(T=>T.cart.items),E=w?S.find(T=>T.id===w.id):null,P=(E==null?void 0:E.quantity)||0;b.useEffect(()=>{(async()=>{try{h(!0);const $=y?`filters[id][$eq]=${e}`:`filters[slug][$eq]=${e}`,B=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${$}&populate=*`)).json();n(B.data)}catch($){console.error("Error fetching products:",$)}finally{h(!1)}})()},[e,y]);const k=(w==null?void 0:w.available)??!0;b.useEffect(()=>{var T,$;w&&w.images&&s(($=(T=w.images)==null?void 0:T[0])==null?void 0:$.url)},[w]);const C=((w==null?void 0:w.images)??[]).map(T=>({src:T.url})),j=()=>{const T=w.images.findIndex($=>$.url===l);v(T>=0?T:0),u(!0)},M=Jt(),I=Re(T=>T.favorites.items).some(T=>T.id===(w==null?void 0:w.id)),O=async()=>{if(P>=w.stock){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(P+r>w.stock){K.warning(`Доступно лише ${w.stock} шт.`);return}await qA(w,r,M,K)},F=(T,$)=>{$.stopPropagation(),di(T,I,M,K)},D=(w==null?void 0:w.new_price)&&(w==null?void 0:w.new_price)<w.price,L=D?Math.round((w.price-w.new_price)/w.price*100):0;return g?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):w?f.jsxs(Xv,{children:[" ",f.jsx(Dn,{autoClose:1500}),f.jsxs(M6,{children:[f.jsx(Te,{to:"/",children:"Головна"})," / ",f.jsx(Te,{to:"/catalog",children:"Каталог"})," /"," ",w.name]}),f.jsxs(I6,{children:[f.jsxs(D6,{children:[f.jsx(L6,{src:l,alt:w.name,onClick:j}),f.jsx(A6,{children:(w.images??[]).map(T=>{const $=T.url;return f.jsx(R6,{src:$,onClick:()=>s($),style:{cursor:"pointer",opacity:l===$?1:.4}},T.id)})})]}),f.jsx(pA,{open:c,close:()=>u(!1),index:d,slides:C,controller:{closeOnBackdropClick:!0},on:{view:({index:T})=>{var $,z;v(T),(z=($=w==null?void 0:w.images)==null?void 0:$[T])!=null&&z.url&&s(w.images[T].url)}},plugins:[jA],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),f.jsxs(F6,{children:[f.jsx(z6,{children:w.name}),f.jsxs(N6,{children:["Артикул: ",w.sku??""]}),f.jsx(B6,{children:p&&f.jsx(U6,{children:"● Новий товар"})}),!k&&f.jsx(V6,{children:" Заброньовано"}),f.jsxs(W6,{children:[f.jsx(H6,{children:D?f.jsxs(f.Fragment,{children:[f.jsxs(Kv,{$discount:!0,children:[w.new_price.toLocaleString()," грн"]}),f.jsxs(G6,{children:[w.price.toLocaleString()," грн"]}),f.jsxs(q6,{children:["-",L,"%"]})]}):f.jsxs(Kv,{children:[w.price.toLocaleString()," грн"]})}),f.jsxs(Y6,{children:[f.jsxs(X6,{children:[f.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),f.jsx("span",{children:r}),f.jsxs(tL,{$active:r>=w.stock,children:[f.jsx("button",{onClick:()=>i(Math.min(w.stock,r+1)),disabled:r>=w.stock,children:"+"}),f.jsxs(D2,{children:["Максимум: ",w.stock]})]})]}),f.jsxs(K6,{onClick:O,disabled:!k,children:[" ",f.jsx(yo,{size:25}),f.jsx("span",{children:"В КОШИК"})]}),f.jsxs(J6,{$active:I,onClick:T=>F(w,T),children:[f.jsxs(eL,{$active:I,children:[" ",f.jsx("use",{href:`${hn}#icon-heart`})]}),f.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!x&&f.jsxs(Jv,{children:[f.jsxs(e1,{children:[f.jsx(Bo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(Bo,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),f.jsx(Bo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(t1,{children:[o==="description"&&f.jsx(n1,{children:w.description}),o==="attributes"&&f.jsx(Qv,{children:(R=w.attributes)!=null&&R.length?w.attributes.map(T=>f.jsxs(Zv,{children:[f.jsx("span",{children:T.label}),f.jsx("b",{children:T.value})]},T.id)):f.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&f.jsx(b1,{productId:w.documentId,questions:w.questions})]})]}),x&&f.jsxs(Z6,{children:[f.jsxs(Jv,{children:[f.jsxs(e1,{children:[f.jsx(Bo,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(Bo,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(t1,{children:[o==="description"&&f.jsx(n1,{children:w.description}),o==="FAQ"&&f.jsx(b1,{productId:w.documentId,questions:w.questions})]})]}),f.jsxs(Qv,{children:[f.jsx(Q6,{children:" Характеристики"}),(()=>{const T=[...w.attributes||[],...w.features||[]];return T.length?T.map(($,z)=>f.jsxs(Zv,{children:[f.jsx("span",{children:$.label}),f.jsx("b",{children:$.value})]},`${$.id}-${z}`)):f.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):f.jsx(Xv,{children:"Товар не знайдено"})},XA=_.div`
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

  
`,KA=_.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,QA=_.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,ZA=_.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,JA=_.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,eR=_.div`
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
`,tR=_.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,nR=_.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,rR=_.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,iR=_.div`

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
`;const $u=_.div`
  text-align: center;
  width: 100px;
 
`,Mu=_.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Iu=_.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Du=_.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Lu=_.span`
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
`,oR=_.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,aR=_.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,sR=_.div`

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
`,lR=_.div`
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
`,cR=_(Te)`
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
`,uR=_.button`
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
`;const dR=_.div`
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
`,fR=_.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,pR=_.div`
  background-color: #fdfaf7;
`,hR=_.div`
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
`;const mR=_.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,gR=_.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,vR=_.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,yR=_.button`
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
`,xR=()=>f.jsx(pR,{children:f.jsxs(dR,{children:[f.jsx(fR,{children:"Головна / Кошик"}),f.jsxs(hR,{children:[f.jsx(mR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),f.jsx(gR,{children:"Ваш кошик порожній"}),f.jsx(vR,{children:"Ви ще не додали жодного товару в кошик"}),f.jsx(yR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),bR=_.div`
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
`,wR=({item:e})=>{const t=Jt();return f.jsxs(bR,{children:[f.jsx("button",{onClick:()=>t(R4(e.id)),children:"-"}),f.jsx("span",{children:e.quantity}),f.jsx("button",{onClick:()=>t(A4({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},SR=()=>{const e=Jt(),t=$t(),[n,r]=b.useState([]),i=Re(p=>p.cart.items),[o,a]=b.useState([]),[l,s]=b.useState(!0),u=Re(p=>p.cart.items).reduce((p,m)=>p+m.quantity,0),d=o.reduce((p,m)=>p+(m.new_price??m.price)*(m.quantity||1),0),v=Re(p=>p.favorites.items),g=o.length===0;b.useEffect(()=>{(async()=>{const m=localStorage.getItem("token"),x=JSON.parse(localStorage.getItem("user"));if(!m||!x){a(i),s(!1);return}try{const S=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${x.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${m}`}});if(!S.ok)throw new Error("Не вдалося отримати кошик");const P=(await S.json()).data.map(k=>k.product?{...k.product,quantity:k.quantity}:null).filter(Boolean);a(P),e(I4(P))}catch(S){console.error(S),K.error("Не вдалося завантажити кошик"),a(i)}finally{s(!1)}})()},[]);const h=(p,m)=>{m.stopPropagation();const x=v.some(S=>S.id===(p==null?void 0:p.id));di(p,x,e,K)},y=p=>{r(m=>[...m,p.id]),setTimeout(()=>{e(D4(p)),r(m=>m.filter(x=>x!==p.id))},300)},w=()=>{e(Xc())};return l?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsx(f.Fragment,{children:g?f.jsx(xR,{}):f.jsxs(XA,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(KA,{children:[" ",f.jsx(Te,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Te,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),f.jsx(QA,{children:"Кошик"}),f.jsxs(ZA,{children:[f.jsx(JA,{children:o.map((p,m)=>{var k,C;console.log(p);const x=v.some(j=>j.id===p.id),S=p.new_price&&p.new_price<p.price,E=S?p.new_price:p.price,P=S?Math.round((p.price-p.new_price)/p.price*100):0;return f.jsxs(eR,{className:n.includes(p.id)?"removing":"",onClick:()=>t(`/product/${p.slug??p.id}`),children:[f.jsx(tR,{src:((C=(k=p.images)==null?void 0:k[0])==null?void 0:C.url)||"/nofoto.png",alt:p.name,onError:j=>{j.currentTarget.onerror=null,j.currentTarget.src=oi}}),f.jsx(nR,{children:f.jsx("h3",{children:p.name})}),f.jsxs(rR,{children:[f.jsx(wR,{item:{...p,quantity:p.quantity||1}}),f.jsx($u,{children:f.jsxs(Mu,{children:[f.jsxs(Iu,{$discount:S,children:[(E*(p.quantity||1)).toLocaleString()," ","грн"]}),S&&f.jsxs(f.Fragment,{children:[f.jsxs(Du,{children:[(p.price*(p.quantity||1)).toLocaleString()," ","грн"]}),f.jsxs(Lu,{children:["-",P,"%"]})]})]})})]}),f.jsxs(iR,{children:[f.jsx(aR,{onClick:j=>h(p,j),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:f.jsx(Xa,{size:22,fill:x?"#ff4d4f":"none",color:x?"#ff4d4f":"#999"})}),f.jsx(oR,{onClick:()=>y(p),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:f.jsx(yw,{size:22})})]})]},`${p.id}-${m}`)})}),f.jsxs(sR,{children:[f.jsxs(lR,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[u," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[d," грн"]})]}),f.jsx(cR,{to:"/checkout",children:"Оформити замовлення"}),f.jsx(uR,{onClick:w,children:"Oчистити кошик"})]})]})]})})},_R=_.div`
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
`,CR=_.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,ER=_.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,kR=_.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,TR=_.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,PR=_.div`
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
`,OR=_.div`
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
`;const jR=_.div`
  position: relative;
`,$R=_.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,MR=_.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,IR=_.div`
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
`;const DR=_.div`
  display: flex;
  gap: 16px;
`,w1=_.button`
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
`,LR=_.div`
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
`,AR=_.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,RR=_.button`
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
`;_.button`
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
`;const FR=_.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,zR=_.div`
   
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
`;const NR=_.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;_.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const BR=_.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,VR=_.button`
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
`,UR=()=>f.jsxs(f.Fragment,{children:[f.jsx(FR,{children:"Головна / Обране"}),f.jsxs(zR,{children:[f.jsx(NR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),f.jsx(BR,{children:"Ви ще не додали жодного товару в обране"}),f.jsx(VR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),WR=()=>{const e=Jt(),t=$t(),n=Re(h=>h.favorites.items),[r,i]=b.useState([]),[o,a]=b.useState(!0),[l,s]=b.useState([]),c=Re(h=>h.cart.items);b.useEffect(()=>{(async()=>{const y=localStorage.getItem("token"),w=JSON.parse(localStorage.getItem("user"));if(!y||!w){i(n),a(!1);return}try{const p=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${w.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${y}`}});if(!p.ok)throw new Error("Не вдалося отримати обране");const x=(await p.json()).data.map(S=>S.product).filter(Boolean);i(x)}catch(p){console.error(p),K.error("Не вдалося завантажити обране"),i(n)}finally{a(!1)}})()},[]);const u=()=>{const h=r.filter(y=>y.available!==!1).map(y=>{const w=c.find(S=>S.id===y.id),p=(w==null?void 0:w.quantity)??0,x=Number(y.stock??0)-p;return x<=0?null:{...y,quantity:x}}).filter(Boolean);if(console.log("itemsToAdd:",h),h.length===0){K.error("Усі товари вже в максимальній кількості");return}e(L4(h)),K.success("Додано максимально доступну кількість товарів")},d=r.reduce((h,y)=>h+(y.new_price??y.price)*(y.quantity||1),0),v=async(h,y)=>{y.stopPropagation();const w=r.some(m=>m.documentId===h.documentId);s(m=>[...m,h.id]),await di(h,w,e,K)&&w?setTimeout(()=>{i(m=>m.filter(x=>x.documentId!==h.documentId)),s(m=>m.filter(x=>x!==h.id))},300):s(m=>m.filter(x=>x!==h.id))},g=r.length===0;return o?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsx(f.Fragment,{children:g?f.jsx(UR,{}):f.jsxs(_R,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(CR,{children:[" ",f.jsx(Te,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Te,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),f.jsx(ER,{children:"Обране"}),f.jsxs(kR,{children:[f.jsx(TR,{children:r.map(h=>{var S,E;const y=h.new_price&&h.new_price<h.price,w=y?h.new_price:h.price,p=(h==null?void 0:h.available)??!0,m=y?Math.round((h.price-h.new_price)/h.price*100):0,x=P=>{const k=c.find(j=>j.id===P.id);if((k?k.quantity:0)>=P.stock){K.error(`Вибачте, доступно лише ${P.stock} шт.`);return}e(ri(P)),K.success(`${P.name} додано в кошик!`)};return f.jsxs(PR,{className:l.includes(h.id)?"removing":"",children:[!p&&f.jsx(OR,{children:"Заброньовано"}),f.jsx(jR,{onClick:()=>t(`/product/${h.slug??h.id}`),children:f.jsx($R,{src:((E=(S=h.images)==null?void 0:S[0])==null?void 0:E.url)||oi,alt:h.name,onError:P=>{P.currentTarget.onerror=null}})}),f.jsx(MR,{children:h.name}),f.jsxs(IR,{children:[f.jsx($u,{children:f.jsxs(Mu,{children:[f.jsxs(Iu,{$discount:y,children:[(w*(h.quantity||1)).toLocaleString()," ","грн"]}),y&&f.jsxs(f.Fragment,{children:[f.jsxs(Du,{children:[(h.price*(h.quantity||1)).toLocaleString()," ","грн"]}),f.jsxs(Lu,{children:["-",m,"%"]})]})]})}),f.jsxs(DR,{children:[f.jsx(w1,{onClick:()=>x(h),disabled:!p,children:f.jsx(yo,{size:30})}),f.jsx(w1,{onClick:P=>v(h,P),children:f.jsx(yw,{size:30})})]})]})]},h.id)})}),f.jsxs(LR,{children:[f.jsxs(AR,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[r.length," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[d," грн"]})]}),f.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),f.jsx(RR,{onClick:()=>u(),children:"Додати все до кошика"})]})]})]})})},HR=_.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,GR=_.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,qR=_.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,YR=_.h1`
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
`;const XR=({title:e,children:t,breadcrumbPath:n})=>f.jsxs(HR,{children:[f.jsxs(GR,{children:["Головна / ",n]}),f.jsxs(qR,{children:[f.jsx(YR,{children:e}),t]})]}),S1=_.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,_1=_.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,C1=_.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,E1=_.ul`
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
`,KR=()=>f.jsxs(XR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[f.jsxs(S1,{children:[f.jsx(_1,{children:"Способи доставки"}),f.jsx(C1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),f.jsxs(E1,{children:[f.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),f.jsx("li",{children:"Самовивіз з нашого магазину"}),f.jsx("li",{children:"Укрпошта"})]})]}),f.jsxs(S1,{children:[f.jsx(_1,{children:"Варіанти оплати"}),f.jsx(C1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),f.jsxs(E1,{children:[f.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),f.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),f.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function si(e){"@babel/helpers - typeof";return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},si(e)}function QR(e,t){if(si(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(si(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function p_(e){var t=QR(e,"string");return si(t)==="symbol"?t:String(t)}function Zo(e,t,n){return t=p_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k1(Object(n),!0).forEach(function(r){Zo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZR(e){if(Array.isArray(e))return e}function JR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(u){c=!0,i=u}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}function qp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h_(e,t){if(e){if(typeof e=="string")return qp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qp(e,t)}}function e8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qn(e,t){return ZR(e)||JR(e,t)||h_(e,t)||e8()}function t8(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function or(e,t){if(e==null)return{};var n=t8(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var n8=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function r8(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,c=e.onChange,u=e.onInputChange,d=e.onMenuClose,v=e.onMenuOpen,g=e.value,h=or(e,n8),y=b.useState(l!==void 0?l:n),w=qn(y,2),p=w[0],m=w[1],x=b.useState(s!==void 0?s:i),S=qn(x,2),E=S[0],P=S[1],k=b.useState(g!==void 0?g:a),C=qn(k,2),j=C[0],M=C[1],A=b.useCallback(function(T,$){typeof c=="function"&&c(T,$),M(T)},[c]),I=b.useCallback(function(T,$){var z;typeof u=="function"&&(z=u(T,$)),m(z!==void 0?z:T)},[u]),O=b.useCallback(function(){typeof v=="function"&&v(),P(!0)},[v]),F=b.useCallback(function(){typeof d=="function"&&d(),P(!1)},[d]),D=l!==void 0?l:p,L=s!==void 0?s:E,R=g!==void 0?g:j;return Z(Z({},h),{},{inputValue:D,menuIsOpen:L,onChange:A,onInputChange:I,onMenuClose:F,onMenuOpen:O,value:R})}function i8(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p_(r.key),r)}}function o8(e,t,n){return t&&T1(e.prototype,t),n&&T1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Yp(e,t){return Yp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Yp(e,t)}function a8(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yp(e,t)}function cc(e){return cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},cc(e)}function s8(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function l8(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c8(e,t){if(t&&(si(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return l8(e)}function u8(e){var t=s8();return function(){var r=cc(e),i;if(t){var o=cc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return c8(this,i)}}function d8(e){if(Array.isArray(e))return qp(e)}function f8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function p8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jm(e){return d8(e)||f8(e)||h_(e)||p8()}function h8(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const m8=Math.min,g8=Math.max,uc=Math.round,$s=Math.floor,dc=e=>({x:e,y:e});function v8(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Au(){return typeof window<"u"}function m_(e){return v_(e)?(e.nodeName||"").toLowerCase():"#document"}function mn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function g_(e){var t;return(t=(v_(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function v_(e){return Au()?e instanceof Node||e instanceof mn(e).Node:!1}function Xp(e){return Au()?e instanceof Element||e instanceof mn(e).Element:!1}function eg(e){return Au()?e instanceof HTMLElement||e instanceof mn(e).HTMLElement:!1}function P1(e){return!Au()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof mn(e).ShadowRoot}function y_(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=tg(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Zd;function y8(){return Zd==null&&(Zd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Zd}function x8(e){return/^(html|body|#document)$/.test(m_(e))}function tg(e){return mn(e).getComputedStyle(e)}function b8(e){if(m_(e)==="html")return e;const t=e.assignedSlot||e.parentNode||P1(e)&&e.host||g_(e);return P1(t)?t.host:t}function x_(e){const t=b8(e);return x8(t)?e.ownerDocument?e.ownerDocument.body:e.body:eg(t)&&y_(t)?t:x_(t)}function fc(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=x_(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=mn(i);if(o){const l=Kp(a);return t.concat(a,a.visualViewport||[],y_(i)?i:[],l&&n?fc(l):[])}else return t.concat(i,fc(i,[],n))}function Kp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function w8(e){const t=tg(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=eg(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=uc(n)!==o||uc(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function ng(e){return Xp(e)?e:e.contextElement}function Jd(e){const t=ng(e);if(!eg(t))return dc(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=w8(t);let a=(o?uc(n.width):n.width)/r,l=(o?uc(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const S8=dc(0);function _8(e){const t=mn(e);return!y8()||!t.visualViewport?S8:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function C8(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==mn(e)?!1:t}function O1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=ng(e);let a=dc(1);t&&(r?Xp(r)&&(a=Jd(r)):a=Jd(e));const l=C8(o,n,r)?_8(o):dc(0);let s=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,u=i.width/a.x,d=i.height/a.y;if(o){const v=mn(o),g=r&&Xp(r)?mn(r):r;let h=v,y=Kp(h);for(;y&&r&&g!==h;){const w=Jd(y),p=y.getBoundingClientRect(),m=tg(y),x=p.left+(y.clientLeft+parseFloat(m.paddingLeft))*w.x,S=p.top+(y.clientTop+parseFloat(m.paddingTop))*w.y;s*=w.x,c*=w.y,u*=w.x,d*=w.y,s+=x,c+=S,h=mn(y),y=Kp(h)}}return v8({width:u,height:d,x:s,y:c})}function b_(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function E8(e,t){let n=null,r;const i=g_(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const c=e.getBoundingClientRect(),{left:u,top:d,width:v,height:g}=c;if(l||t(),!v||!g)return;const h=$s(d),y=$s(i.clientWidth-(u+v)),w=$s(i.clientHeight-(d+g)),p=$s(u),x={rootMargin:-h+"px "+-y+"px "+-w+"px "+-p+"px",threshold:g8(0,m8(1,s))||1};let S=!0;function E(P){const k=P[0].intersectionRatio;if(k!==s){if(!S)return a();k?a(!1,k):r=setTimeout(()=>{a(!1,1e-7)},1e3)}k===1&&!b_(c,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(E,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,x)}n.observe(e)}return a(!0),o}function k8(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=ng(e),u=i||o?[...c?fc(c):[],...t?fc(t):[]]:[];u.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const d=c&&l?E8(c,n):null;let v=-1,g=null;a&&(g=new ResizeObserver(p=>{let[m]=p;m&&m.target===c&&g&&t&&(g.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var x;(x=g)==null||x.observe(t)})),n()}),c&&!s&&g.observe(c),t&&g.observe(t));let h,y=s?O1(e):null;s&&w();function w(){const p=O1(e);y&&!b_(y,p)&&n(),y=p,h=requestAnimationFrame(w)}return n(),()=>{var p;u.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),d==null||d(),(p=g)==null||p.disconnect(),g=null,s&&cancelAnimationFrame(h)}}var Qp=b.useLayoutEffect,T8=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],pc=function(){};function P8(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function O8(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(P8(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var j1=function(t){return F8(t)?t.filter(Boolean):si(t)==="object"&&t!==null?[t]:[]},w_=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=or(t,T8);return Z({},n)},je=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Ru(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function j8(e){return Ru(e)?window.innerHeight:e.clientHeight}function S_(e){return Ru(e)?window.pageYOffset:e.scrollTop}function hc(e,t){if(Ru(e)){window.scrollTo(0,t);return}e.scrollTop=t}function $8(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function M8(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ms(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:pc,i=S_(e),o=t-i,a=10,l=0;function s(){l+=a;var c=M8(l,i,o,n);hc(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function $1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?hc(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&hc(e,Math.max(t.offsetTop-i,0))}function I8(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function M1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function D8(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var __=!1,L8={get passive(){return __=!0}},Is=typeof window<"u"?window:{};Is.addEventListener&&Is.removeEventListener&&(Is.addEventListener("p",pc,L8),Is.removeEventListener("p",pc,!1));var A8=__;function R8(e){return e!=null}function F8(e){return Array.isArray(e)}function Ds(e,t,n){return e?t:n}var z8=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=qn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=qn(l,2),c=s[0],u=s[1];return a[c]=u,a},{})},N8=["children","innerProps"],B8=["children","innerProps"];function V8(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=$8(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var u=s.getBoundingClientRect(),d=u.height,v=n.getBoundingClientRect(),g=v.bottom,h=v.height,y=v.top,w=n.offsetParent.getBoundingClientRect(),p=w.top,m=a?window.innerHeight:j8(s),x=S_(s),S=parseInt(getComputedStyle(n).marginBottom,10),E=parseInt(getComputedStyle(n).marginTop,10),P=p-E,k=m-y,C=P+x,j=d-x-y,M=g-m+x+S,A=x+y-E,I=160;switch(i){case"auto":case"bottom":if(k>=h)return{placement:"bottom",maxHeight:t};if(j>=h&&!a)return o&&Ms(s,M,I),{placement:"bottom",maxHeight:t};if(!a&&j>=r||a&&k>=r){o&&Ms(s,M,I);var O=a?k-S:j-S;return{placement:"bottom",maxHeight:O}}if(i==="auto"||a){var F=t,D=a?P:C;return D>=r&&(F=Math.min(D-S-l,t)),{placement:"top",maxHeight:F}}if(i==="bottom")return o&&hc(s,M),{placement:"bottom",maxHeight:t};break;case"top":if(P>=h)return{placement:"top",maxHeight:t};if(C>=h&&!a)return o&&Ms(s,A,I),{placement:"top",maxHeight:t};if(!a&&C>=r||a&&P>=r){var L=t;return(!a&&C>=r||a&&P>=r)&&(L=a?P-E:C-E),o&&Ms(s,A,I),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function U8(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var C_=function(t){return t==="auto"?"bottom":t},W8=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},Zo(r,U8(i),"100%"),Zo(r,"position","absolute"),Zo(r,"width","100%"),Zo(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},E_=b.createContext(null),H8=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,c=b.useContext(E_)||{},u=c.setPortalPlacement,d=b.useRef(null),v=b.useState(i),g=qn(v,2),h=g[0],y=g[1],w=b.useState(null),p=qn(w,2),m=p[0],x=p[1],S=s.spacing.controlHeight;return Qp(function(){var E=d.current;if(E){var P=a==="fixed",k=l&&!P,C=V8({maxHeight:i,menuEl:E,minHeight:r,placement:o,shouldScroll:k,isFixedPosition:P,controlHeight:S});y(C.maxHeight),x(C.placement),u==null||u(C.placement)}},[i,o,a,l,r,u,S]),n({ref:d,placerProps:Z(Z({},t),{},{placement:m||C_(o),maxHeight:h})})},G8=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Q("div",J({},je(t,"menu",{menu:!0}),{ref:r},i),n)},q8=G8,Y8=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},X8=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Q("div",J({},je(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},k_=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},K8=k_,Q8=k_,Z8=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=or(t,N8);return Q("div",J({},je(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},J8=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=or(t,B8);return Q("div",J({},je(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},eF=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},tF=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),c=b.useRef(null),u=b.useState(C_(a)),d=qn(u,2),v=d[0],g=d[1],h=b.useMemo(function(){return{setPortalPlacement:g}},[]),y=b.useState(null),w=qn(y,2),p=w[0],m=w[1],x=b.useCallback(function(){if(i){var k=I8(i),C=l==="fixed"?0:window.pageYOffset,j=k[v]+C;(j!==(p==null?void 0:p.offset)||k.left!==(p==null?void 0:p.rect.left)||k.width!==(p==null?void 0:p.rect.width))&&m({offset:j,rect:k})}},[i,l,v,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);Qp(function(){x()},[x]);var S=b.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=k8(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Qp(function(){S()},[S]);var E=b.useCallback(function(k){s.current=k,S()},[S]);if(!n&&l!=="fixed"||!p)return null;var P=Q("div",J({ref:E},je(Z(Z({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Q(E_.Provider,{value:h},n?Dc.createPortal(P,n):P)},nF=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},rF=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Q("div",J({},je(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},iF=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},oF=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Q("div",J({},je(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},aF=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},sF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"indicatorsContainer",{indicators:!0}),r),n)},I1,lF=["size"],cF=["innerProps","isRtl","size"],uF={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},T_=function(t){var n=t.size,r=or(t,lF);return Q("svg",J({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:uF},r))},rg=function(t){return Q(T_,J({size:20},t),Q("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},P_=function(t){return Q(T_,J({size:20},t),Q("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},O_=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},dF=O_,fF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Q(P_,null))},pF=O_,hF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Q(rg,null))},mF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},gF=function(t){var n=t.innerProps;return Q("span",J({},n,je(t,"indicatorSeparator",{"indicator-separator":!0})))},vF=I$(I1||(I1=h8([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),yF=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},ef=function(t){var n=t.delay,r=t.offset;return Q("span",{css:Pm({animation:"".concat(vF," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},xF=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=or(t,cF);return Q("div",J({},je(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Q(ef,{delay:0,offset:r}),Q(ef,{delay:160,offset:!0}),Q(ef,{delay:320,offset:!r}))},bF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},wF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Q("div",J({ref:o},je(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},SF=wF,_F=["data"],CF=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},EF=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,u=t.theme,d=t.selectProps;return Q("div",J({},je(t,"group",{group:!0}),s),Q(a,J({},l,{selectProps:d,theme:u,getStyles:i,getClassNames:o,cx:r}),c),Q("div",null,n))},kF=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},TF=function(t){var n=w_(t);n.data;var r=or(n,_F);return Q("div",J({},je(t,"groupHeading",{"group-heading":!0}),r))},PF=EF,OF=["innerRef","isDisabled","isHidden","inputClassName"],jF=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},$F),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},j_={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},$F={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},j_)},MF=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},j_)},IF=function(t){var n=t.cx,r=t.value,i=w_(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,c=or(i,OF);return Q("div",J({},je(t,"input",{"input-container":!0}),{"data-value":r||""}),Q("input",J({className:n({input:!0},s),ref:o,style:MF(l),disabled:a},c)))},DF=IF,LF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},AF=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},RF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},$_=function(t){var n=t.children,r=t.innerProps;return Q("div",r,n)},FF=$_,zF=$_;function NF(e){var t=e.children,n=e.innerProps;return Q("div",J({role:"button"},n),t||Q(rg,{size:14}))}var BF=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,c=r.Container,u=r.Label,d=r.Remove;return Q(c,{data:i,innerProps:Z(Z({},je(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Q(u,{data:i,innerProps:Z({},je(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Q(d,{data:i,innerProps:Z(Z({},je(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},VF=BF,UF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},WF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Q("div",J({},je(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},HF=WF,GF=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},qF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},je(t,"placeholder",{placeholder:!0}),r),n)},YF=qF,XF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},KF=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Q("div",J({},je(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},QF=KF,ZF={ClearIndicator:hF,Control:SF,DropdownIndicator:fF,DownChevron:P_,CrossIcon:rg,Group:PF,GroupHeading:TF,IndicatorsContainer:sF,IndicatorSeparator:gF,Input:DF,LoadingIndicator:xF,Menu:q8,MenuList:X8,MenuPortal:tF,LoadingMessage:J8,NoOptionsMessage:Z8,MultiValue:VF,MultiValueContainer:FF,MultiValueLabel:zF,MultiValueRemove:NF,Option:HF,Placeholder:YF,SelectContainer:rF,SingleValue:QF,ValueContainer:oF},JF=function(t){return Z(Z({},ZF),t.components)},D1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ez(e,t){return!!(e===t||D1(e)&&D1(t))}function tz(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!ez(e[n],t[n]))return!1;return!0}function nz(e,t){t===void 0&&(t=tz);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var rz={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},iz=function(t){return Q("span",J({css:rz},t))},L1=iz,oz={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,c=t.isSelected,u=t.isAppleDevice,d=function(y,w){return y&&y.length?"".concat(y.indexOf(w)+1," of ").concat(y.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&u){var v=s?" disabled":"",g="".concat(c?" selected":"").concat(v);return"".concat(a).concat(g,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},az=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=t.id,u=t.isAppleDevice,d=s.ariaLiveMessages,v=s.getOptionLabel,g=s.inputValue,h=s.isMulti,y=s.isOptionDisabled,w=s.isSearchable,p=s.menuIsOpen,m=s.options,x=s.screenReaderStatus,S=s.tabSelectsValue,E=s.isLoading,P=s["aria-label"],k=s["aria-live"],C=b.useMemo(function(){return Z(Z({},oz),d||{})},[d]),j=b.useMemo(function(){var D="";if(n&&C.onChange){var L=n.option,R=n.options,T=n.removedValue,$=n.removedValues,z=n.value,B=function(pe){return Array.isArray(pe)?null:pe},N=T||L||B(z),U=N?v(N):"",G=R||$||void 0,W=G?G.map(v):[],Y=Z({isDisabled:N&&y(N,l),label:U,labels:W},n);D=C.onChange(Y)}return D},[n,C,y,l,v]),M=b.useMemo(function(){var D="",L=r||i,R=!!(r&&l&&l.includes(r));if(L&&C.onFocus){var T={focused:L,label:v(L),isDisabled:y(L,l),isSelected:R,options:o,context:L===r?"menu":"value",selectValue:l,isAppleDevice:u};D=C.onFocus(T)}return D},[r,i,v,y,C,o,l,u]),A=b.useMemo(function(){var D="";if(p&&m.length&&!E&&C.onFilter){var L=x({count:o.length});D=C.onFilter({inputValue:g,resultsMessage:L})}return D},[o,g,p,C,m,x,E]),I=(n==null?void 0:n.action)==="initial-input-focus",O=b.useMemo(function(){var D="";if(C.guidance){var L=i?"value":p?"menu":"input";D=C.guidance({"aria-label":P,context:L,isDisabled:r&&y(r,l),isMulti:h,isSearchable:w,tabSelectsValue:S,isInitialFocus:I})}return D},[P,r,i,h,y,w,p,C,l,S,I]),F=Q(b.Fragment,null,Q("span",{id:"aria-selection"},j),Q("span",{id:"aria-focused"},M),Q("span",{id:"aria-results"},A),Q("span",{id:"aria-guidance"},O));return Q(b.Fragment,null,Q(L1,{id:c},I&&F),Q(L1,{"aria-live":k,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!I&&F))},sz=az,Zp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],lz=new RegExp("["+Zp.map(function(e){return e.letters}).join("")+"]","g"),M_={};for(var tf=0;tf<Zp.length;tf++)for(var nf=Zp[tf],rf=0;rf<nf.letters.length;rf++)M_[nf.letters[rf]]=nf.base;var I_=function(t){return t.replace(lz,function(n){return M_[n]})},cz=nz(I_),A1=function(t){return t.replace(/^\s+|\s+$/g,"")},uz=function(t){return"".concat(t.label," ").concat(t.value)},dz=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:uz,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,c=i.matchFrom,u=s?A1(r):r,d=s?A1(l(n)):l(n);return o&&(u=u.toLowerCase(),d=d.toLowerCase()),a&&(u=cz(u),d=I_(d)),c==="start"?d.substr(0,u.length)===u:d.indexOf(u)>-1}},fz=["innerRef"];function pz(e){var t=e.innerRef,n=or(e,fz),r=z8(n,"onExited","in","enter","exit","appear");return Q("input",J({ref:t},r,{css:Pm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var hz=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function mz(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),c=b.useRef(null),u=b.useCallback(function(w,p){if(c.current!==null){var m=c.current,x=m.scrollTop,S=m.scrollHeight,E=m.clientHeight,P=c.current,k=p>0,C=S-E-x,j=!1;C>p&&a.current&&(r&&r(w),a.current=!1),k&&l.current&&(o&&o(w),l.current=!1),k&&p>C?(n&&!a.current&&n(w),P.scrollTop=S,j=!0,a.current=!0):!k&&-p>x&&(i&&!l.current&&i(w),P.scrollTop=0,j=!0,l.current=!0),j&&hz(w)}},[n,r,i,o]),d=b.useCallback(function(w){u(w,w.deltaY)},[u]),v=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),g=b.useCallback(function(w){var p=s.current-w.changedTouches[0].clientY;u(w,p)},[u]),h=b.useCallback(function(w){if(w){var p=A8?{passive:!1}:!1;w.addEventListener("wheel",d,p),w.addEventListener("touchstart",v,p),w.addEventListener("touchmove",g,p)}},[g,v,d]),y=b.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",v,!1),w.removeEventListener("touchmove",g,!1))},[g,v,d]);return b.useEffect(function(){if(t){var w=c.current;return h(w),function(){y(w)}}},[t,h,y]),function(w){c.current=w}}var R1=["boxSizing","height","overflow","paddingRight","position"],F1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function z1(e){e.cancelable&&e.preventDefault()}function N1(e){e.stopPropagation()}function B1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function V1(){return"ontouchstart"in window||navigator.maxTouchPoints}var U1=!!(typeof window<"u"&&window.document&&window.document.createElement),Vo=0,_i={capture:!1,passive:!1};function gz(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(U1){var c=document.body,u=c&&c.style;if(r&&R1.forEach(function(h){var y=u&&u[h];i.current[h]=y}),r&&Vo<1){var d=parseInt(i.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,g=window.innerWidth-v+d||0;Object.keys(F1).forEach(function(h){var y=F1[h];u&&(u[h]=y)}),u&&(u.paddingRight="".concat(g,"px"))}c&&V1()&&(c.addEventListener("touchmove",z1,_i),s&&(s.addEventListener("touchstart",B1,_i),s.addEventListener("touchmove",N1,_i))),Vo+=1}},[r]),l=b.useCallback(function(s){if(U1){var c=document.body,u=c&&c.style;Vo=Math.max(Vo-1,0),r&&Vo<1&&R1.forEach(function(d){var v=i.current[d];u&&(u[d]=v)}),c&&V1()&&(c.removeEventListener("touchmove",z1,_i),s&&(s.removeEventListener("touchstart",B1,_i),s.removeEventListener("touchmove",N1,_i)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var vz=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},yz={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function xz(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=mz({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),u=gz({isEnabled:n}),d=function(g){c(g),u(g)};return Q(b.Fragment,null,n&&Q("div",{onClick:vz,css:yz}),t(d))}var bz={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},wz=function(t){var n=t.name,r=t.onFocus;return Q("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:bz,value:"",onChange:function(){}})},Sz=wz;function ig(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function _z(){return ig(/^iPhone/i)}function D_(){return ig(/^Mac/i)}function Cz(){return ig(/^iPad/i)||D_()&&navigator.maxTouchPoints>1}function Ez(){return _z()||Cz()}function kz(){return D_()||Ez()}var Tz=function(t){return t.label},Pz=function(t){return t.label},Oz=function(t){return t.value},jz=function(t){return!!t.isDisabled},$z={clearIndicator:pF,container:nF,control:bF,dropdownIndicator:dF,group:CF,groupHeading:kF,indicatorsContainer:aF,indicatorSeparator:mF,input:jF,loadingIndicator:yF,loadingMessage:Q8,menu:W8,menuList:Y8,menuPortal:eF,multiValue:LF,multiValueLabel:AF,multiValueRemove:RF,noOptionsMessage:K8,option:UF,placeholder:GF,singleValue:XF,valueContainer:iF},Mz={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Iz=4,L_=4,Dz=38,Lz=L_*2,Az={baseUnit:L_,controlHeight:Dz,menuGutter:Lz},of={borderRadius:Iz,colors:Mz,spacing:Az},Rz={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:M1(),captureMenuScroll:!M1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:dz(),formatGroupLabel:Tz,getOptionLabel:Pz,getOptionValue:Oz,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:jz,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!D8(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function W1(e,t,n,r){var i=F_(e,t,n),o=z_(e,t,n),a=R_(e,t),l=mc(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function dl(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return W1(e,a,t,l)}).filter(function(a){return G1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=W1(e,n,t,r);return G1(e,o)?o:void 0}).filter(R8)}function A_(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Jm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function H1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Jm(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function Fz(e,t){return A_(dl(e,t))}function G1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!B_(e)||!o)&&N_(e,{label:a,value:l,data:i},r)}function zz(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function Nz(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var af=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},R_=function(t,n){return t.getOptionLabel(n)},mc=function(t,n){return t.getOptionValue(n)};function F_(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function z_(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=mc(e,t);return n.some(function(i){return mc(e,i)===r})}function N_(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var B_=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},Bz=1,V_=function(e){a8(n,e);var t=u8(n);function n(r){var i;if(i8(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var u=i.props,d=u.onChange,v=u.name;c.name=v,i.ariaOnChange(s,c),d(s,c)},i.setValue=function(s,c,u){var d=i.props,v=d.closeMenuOnSelect,g=d.isMulti,h=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:h}),v&&(i.setState({inputIsHiddenAfterUpdate:!g}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:u})},i.selectOption=function(s){var c=i.props,u=c.blurInputOnSelect,d=c.isMulti,v=c.name,g=i.state.selectValue,h=d&&i.isOptionSelected(s,g),y=i.isOptionDisabled(s,g);if(h){var w=i.getOptionValue(s);i.setValue(g.filter(function(p){return i.getOptionValue(p)!==w}),"deselect-option",s)}else if(!y)d?i.setValue([].concat(Jm(g),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:v});return}u&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,u=i.state.selectValue,d=i.getOptionValue(s),v=u.filter(function(h){return i.getOptionValue(h)!==d}),g=Ds(c,v,v[0]||null);i.onChange(g,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Ds(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,u=c[c.length-1],d=c.slice(0,c.length-1),v=Ds(s,d,d[0]||null);u&&i.onChange(v,{action:"pop-value",removedValue:u})},i.getFocusedOptionId=function(s){return af(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return H1(dl(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),u=0;u<s;u++)c[u]=arguments[u];return O8.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return R_(i.props,s)},i.getOptionValue=function(s){return mc(i.props,s)},i.getStyles=function(s,c){var u=i.props.unstyled,d=$z[s](c,u);d.boxSizing="border-box";var v=i.props.styles[s];return v?v(d,c):d},i.getClassNames=function(s,c){var u,d;return(u=(d=i.props.classNames)[s])===null||u===void 0?void 0:u.call(d,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return JF(i.props)},i.buildCategorizedOptions=function(){return dl(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return A_(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:Z({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,u=c.isMulti,d=c.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!u}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Ru(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,u=c&&c.item(0);u&&(i.initialTouchX=u.clientX,i.initialTouchY=u.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,u=c&&c.item(0);if(u){var d=Math.abs(u.clientX-i.initialTouchX),v=Math.abs(u.clientY-i.initialTouchY),g=5;i.userIsDragging=d>g||v>g}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,u=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(u,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),u=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:u>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return B_(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,u=c.isMulti,d=c.backspaceRemovesValue,v=c.escapeClearsValue,g=c.inputValue,h=c.isClearable,y=c.isDisabled,w=c.menuIsOpen,p=c.onKeyDown,m=c.tabSelectsValue,x=c.openMenuOnFocus,S=i.state,E=S.focusedOption,P=S.focusedValue,k=S.selectValue;if(!y&&!(typeof p=="function"&&(p(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!u||g)return;i.focusValue("previous");break;case"ArrowRight":if(!u||g)return;i.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(P)i.removeValue(P);else{if(!d)return;u?i.popValue():h&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!m||!E||x&&i.isOptionSelected(E,k))return;i.selectOption(E);break;case"Enter":if(s.keyCode===229)break;if(w){if(!E||i.isComposing)return;i.selectOption(E);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:g}),i.onMenuClose()):h&&v&&i.clearValue();break;case" ":if(g)return;if(!w){i.openMenu("first");break}if(!E)return;i.selectOption(E);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++Bz),i.state.selectValue=j1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=af(o,a[l])}return i}return o8(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&$1(this.menuListRef,this.focusedOptionRef),kz()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&($1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),u=i==="first"?0:c.length-1;if(!this.props.isMulti){var d=c.indexOf(l[0]);d>-1&&(u=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[u],focusedOptionId:this.getFocusedOptionId(c[u])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,u=-1;if(a.length){switch(i){case"previous":s===0?u=0:s===-1?u=c:u=s-1;break;case"next":s>-1&&s<c&&(u=s+1);break}this.setState({inputIsHidden:u!==-1,focusedValue:a[u]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,c=l.indexOf(a);a||(c=-1),i==="up"?s=c>0?c-1:l.length-1:i==="down"?s=(c+1)%l.length:i==="pageup"?(s=c-o,s<0&&(s=0)):i==="pagedown"?(s=c+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(of):Z(Z({},of),this.props.theme):of}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,c=this.selectOption,u=this.setValue,d=this.props,v=d.isMulti,g=d.isRtl,h=d.options,y=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:y,isMulti:v,isRtl:g,options:h,selectOption:c,selectProps:d,setValue:u,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return F_(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return z_(this.props,i,o)}},{key:"filterOption",value:function(i,o){return N_(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,c=i.tabIndex,u=i.form,d=i.menuIsOpen,v=i.required,g=this.getComponents(),h=g.Input,y=this.state,w=y.inputIsHidden,p=y.ariaSelection,m=this.commonProps,x=l||this.getElementId("input"),S=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(h,J({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:u,type:"text",value:s},S)):b.createElement(pz,J({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:pc,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:u,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,c=o.MultiValueRemove,u=o.SingleValue,d=o.Placeholder,v=this.commonProps,g=this.props,h=g.controlShouldRenderValue,y=g.isDisabled,w=g.isMulti,p=g.inputValue,m=g.placeholder,x=this.state,S=x.selectValue,E=x.focusedValue,P=x.isFocused;if(!this.hasValue()||!h)return p?null:b.createElement(d,J({},v,{key:"placeholder",isDisabled:y,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),m);if(w)return S.map(function(C,j){var M=C===E,A="".concat(i.getOptionLabel(C),"-").concat(i.getOptionValue(C));return b.createElement(a,J({},v,{components:{Container:l,Label:s,Remove:c},isFocused:M,isDisabled:y,key:A,index:j,removeProps:{onClick:function(){return i.removeValue(C)},onTouchEnd:function(){return i.removeValue(C)},onMouseDown:function(O){O.preventDefault()}},data:C}),i.formatOptionLabel(C,"value"))});if(p)return null;var k=S[0];return b.createElement(u,J({},v,{data:k,isDisabled:y}),this.formatOptionLabel(k,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,u=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||c)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:d,isFocused:u}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,u=this.state.isFocused;if(!o||!c)return null;var d={"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:d,isDisabled:s,isFocused:u}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return b.createElement(a,J({},l,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:c,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,c=o.MenuList,u=o.MenuPortal,d=o.LoadingMessage,v=o.NoOptionsMessage,g=o.Option,h=this.commonProps,y=this.state.focusedOption,w=this.props,p=w.captureMenuScroll,m=w.inputValue,x=w.isLoading,S=w.loadingMessage,E=w.minMenuHeight,P=w.maxMenuHeight,k=w.menuIsOpen,C=w.menuPlacement,j=w.menuPosition,M=w.menuPortalTarget,A=w.menuShouldBlockScroll,I=w.menuShouldScrollIntoView,O=w.noOptionsMessage,F=w.onMenuScrollToTop,D=w.onMenuScrollToBottom;if(!k)return null;var L=function(U,G){var W=U.type,Y=U.data,ee=U.isDisabled,pe=U.isSelected,we=U.label,ie=U.value,Ie=y===Y,We=ee?void 0:function(){return i.onOptionHover(Y)},He=ee?void 0:function(){return i.selectOption(Y)},hi="".concat(i.getElementId("option"),"-").concat(G),wt={id:hi,onClick:He,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:pe};return b.createElement(g,J({},h,{innerProps:wt,data:Y,isDisabled:ee,isSelected:pe,key:hi,label:we,type:W,value:ie,isFocused:Ie,innerRef:Ie?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},R;if(this.hasOptions())R=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var U=N.data,G=N.options,W=N.index,Y="".concat(i.getElementId("group"),"-").concat(W),ee="".concat(Y,"-heading");return b.createElement(a,J({},h,{key:Y,data:U,options:G,Heading:l,headingProps:{id:ee,data:N.data},label:i.formatGroupLabel(N.data)}),N.options.map(function(pe){return L(pe,"".concat(W,"-").concat(pe.index))}))}else if(N.type==="option")return L(N,"".concat(N.index))});else if(x){var T=S({inputValue:m});if(T===null)return null;R=b.createElement(d,h,T)}else{var $=O({inputValue:m});if($===null)return null;R=b.createElement(v,h,$)}var z={minMenuHeight:E,maxMenuHeight:P,menuPlacement:C,menuPosition:j,menuShouldScrollIntoView:I},B=b.createElement(H8,J({},h,z),function(N){var U=N.ref,G=N.placerProps,W=G.placement,Y=G.maxHeight;return b.createElement(s,J({},h,z,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:W}),b.createElement(xz,{captureEnabled:p,onTopArrive:F,onBottomArrive:D,lockEnabled:A},function(ee){return b.createElement(c,J({},h,{innerRef:function(we){i.getMenuListRef(we),ee(we)},innerProps:{role:"listbox","aria-multiselectable":h.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:Y,focusedOption:y}),R)}))});return M||j==="fixed"?b.createElement(u,J({},h,{appendTo:M,controlElement:this.controlRef,menuPlacement:C,menuPosition:j}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,c=o.name,u=o.required,d=this.state.selectValue;if(u&&!this.hasValue()&&!l)return b.createElement(Sz,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(s)if(a){var v=d.map(function(y){return i.getOptionValue(y)}).join(a);return b.createElement("input",{name:c,type:"hidden",value:v})}else{var g=d.length>0?d.map(function(y,w){return b.createElement("input",{key:"i-".concat(w),name:c,type:"hidden",value:i.getOptionValue(y)})}):b.createElement("input",{name:c,type:"hidden",value:""});return b.createElement("div",null,g)}else{var h=d[0]?this.getOptionValue(d[0]):"";return b.createElement("input",{name:c,type:"hidden",value:h})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,c=o.isFocused,u=o.selectValue,d=this.getFocusableOptions();return b.createElement(sz,J({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:u,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,c=this.props,u=c.className,d=c.id,v=c.isDisabled,g=c.menuIsOpen,h=this.state.isFocused,y=this.commonProps=this.getCommonProps();return b.createElement(l,J({},y,{className:u,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:h}),this.renderLiveRegion(),b.createElement(o,J({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:h,menuIsOpen:g}),b.createElement(s,J({},y,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,J({},y,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,u=o.isFocused,d=o.prevWasFocused,v=o.instancePrefix,g=i.options,h=i.value,y=i.menuIsOpen,w=i.inputValue,p=i.isMulti,m=j1(h),x={};if(a&&(h!==a.value||g!==a.options||y!==a.menuIsOpen||w!==a.inputValue)){var S=y?Fz(i,m):[],E=y?H1(dl(i,m),"".concat(v,"-option")):[],P=l?zz(o,m):null,k=Nz(o,S),C=af(E,k);x={selectValue:m,focusedOption:k,focusedOptionId:C,focusableOptionsWithIds:E,focusedValue:P,clearFocusValueOnUpdate:!1}}var j=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},M=c,A=u&&d;return u&&!A&&(M={value:Ds(p,m,m[0]||null),options:m,action:"initial-input-focus"},A=!d),(c==null?void 0:c.action)==="initial-input-focus"&&(M=null),Z(Z(Z({},x),j),{},{prevProps:i,ariaSelection:M,prevWasFocused:A})}}]),n}(b.Component);V_.defaultProps=Rz;var Vz=b.forwardRef(function(e,t){var n=r8(e);return b.createElement(V_,J({ref:t},n))}),Fu=Vz;const Uz=_.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Wz=_.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Hz=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>f.jsxs(Uz,{children:[f.jsx(Wz,{children:"Місто"}),f.jsx(Fu,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),Gz=_.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,qz=_.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Yz=({options:e=[],value:t,onChange:n,selectedCity:r})=>f.jsxs(Gz,{children:[f.jsx(qz,{children:"Спосіб доставки"}),f.jsx(Fu,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),q1=_.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Y1=_.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Xz=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?f.jsxs(q1,{children:[f.jsx(Y1,{children:"Відділення Нової пошти"}),f.jsx(Fu,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?f.jsxs(q1,{children:[f.jsx(Y1,{children:"Адреса доставки (Укрпошта)"}),f.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,Kz=_.div`
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
`;const Qz=_.button`
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
`,Zz=_.ul`
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
`,Jz=_.li`
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
`,eN=_.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,tN=_.div`
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
`,nN=_.div`
  text-align: center;
  width: 100px;
 
`,rN=_.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,iN=_.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,oN=_.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,aN=_.span`
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
`,sN=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>f.jsxs(Kz,{children:[f.jsx("h3",{children:"Ваше замовлення"}),f.jsx(Zz,{children:e.map((o,a)=>{var d,v;const l=o.new_price&&o.new_price<o.price,s=l?o.new_price:o.price,c=l?Math.round((o.price-o.new_price)/o.price*100):0,u=s*(o.quantity||1);return f.jsxs(Jz,{children:[f.jsx(eN,{src:((v=(d=o.images)==null?void 0:d[0])==null?void 0:v.url)||oi,alt:o.name}),f.jsxs(tN,{children:[f.jsx("p",{className:"item-name",children:o.name}),f.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),f.jsx(nN,{children:f.jsxs(rN,{children:[f.jsxs(iN,{$discount:l,children:[u.toLocaleString()," грн"]}),l&&f.jsxs(f.Fragment,{children:[f.jsxs(oN,{children:[(o.price*(o.quantity||1)).toLocaleString()," грн"]}),f.jsxs(aN,{children:["-",c,"%"]})]})]})})]},`${o.id}-${a}`)})}),f.jsxs("div",{className:"summary-row",children:[f.jsxs("span",{children:["Товари (",n,")"]}),f.jsxs("span",{children:[t," грн"]})]}),f.jsxs("div",{className:"summary-row",children:[f.jsx("span",{children:"Доставка"}),f.jsx("span",{children:"За тарифами перевізника"})]}),f.jsx("hr",{}),f.jsxs("div",{className:"total",children:[f.jsx("span",{children:"Всього до сплати:"}),f.jsxs("span",{children:[t," грн"]})]}),f.jsx(Qz,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&f.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var U_={exports:{}};function lN(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var sf=lN(b),cN=Dc;function uN(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Jp(){return(Jp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function dN(e,t){e.prototype=Object.create(t.prototype),uN(e.prototype.constructor=e,t)}function fN(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function Ci(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var pN=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,l],u=0;(s=new Error(t.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},X1=pN;function K1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function hN(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var mN={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},gN="_";function Q1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=gN),n==null&&(n=mN),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Bt(e,t){return e.permanents.indexOf(t)!==-1}function zu(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Bt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function Z1(e,t){return t.split("").every(function(n,r){return Bt(e,r)||!zu(e,r,n)})}function Jo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Bt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Bt(e,o)&&zu(e,o,a)){i=o+1;break}}return i}function W_(e,t){return Jo(e,t)===e.mask.length}function Vn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=eh(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Bt(e,t.length);)t+=r[t.length];return t}if(t)return eh(e,Vn(e,""),t,0);for(var o=0;o<r.length;o++)Bt(e,o)?t+=r[o]:t+=n;return t}function vN(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(u,d){return d<n||i<=d?u:Bt(e,d)?a[d]:o}).join("");for(var c=i;c<s.length;c++)Bt(e,c)&&(s[c]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Vn(e,t)}function eh(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=W_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(c){for(;g=c,Bt(e,v=r)&&g!==i[v];){if(r>=t.length&&(t+=i[r]),u=c,d=r,o&&Bt(e,d)&&u===o)return!0;if(++r>=i.length)return!1}var u,d,v,g;return!zu(e,r,c)&&c!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),Vn(e,t)):o||(t+=c),++r<i.length)}),t}function yN(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;u=s,Bt(e,c=r)&&u!==i[c];)if(++r>=i.length)return!1;var c,u;return(zu(e,r,s)||s===o)&&r++,r<i.length}),r-l}function xN(e,t){for(var n=t;0<=n;--n)if(!Bt(e,n))return n;return null}function fa(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Bt(e,r))return r;return null}function lf(e){return e||e===0?e+"":""}function bN(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,c="",u=0,d=0,v=Math.min(i.start,n.start);return n.end>i.start?d=(u=yN(e,r,c=s.slice(i.start,n.end),v))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(v=i.start===n.start?fa(e,n.start):xN(e,n.start)),s=vN(e,s,v,d)),s=eh(e,s,c,v),(v+=u)>=o.length?v=o.length:v<a.length&&!u?v=a.length:v>=a.length&&v<l&&u&&(v=fa(e,v)),c||(c=null),{value:s=Vn(e,s),enteredString:c,selection:{start:v,end:v}}}function wN(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function St(e){return typeof e=="function"}function SN(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function H_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function J1(e){return(H_()?SN():function(){return setTimeout(e,1e3/60)})(e)}function cf(e){(H_()||clearTimeout)(e)}var _N=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=J1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(cf(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var h=cN.findDOMNode(Ci(Ci(i))),y=typeof window<"u"&&h instanceof window.Element;if(h&&!y)return null;if(h.nodeName!=="INPUT"&&(h=h.querySelector("input")),!h)throw new Error("react-input-mask: inputComponent doesn't contain input node");return h},i.getInputValue=function(){var h=i.getInputDOMNode();return h?h.value:null},i.setInputValue=function(h){var y=i.getInputDOMNode();y&&(i.value=h,y.value=h)},i.setCursorToEnd=function(){var h=Jo(i.maskOptions,i.value),y=fa(i.maskOptions,h);y!==null&&i.setCursorPosition(y)},i.setSelection=function(h,y,w){w===void 0&&(w={});var p=i.getInputDOMNode(),m=i.isFocused();p&&m&&(w.deferred||K1(p,h,y),i.selectionDeferId!==null&&cf(i.selectionDeferId),i.selectionDeferId=J1(function(){i.selectionDeferId=null,K1(p,h,y)}),i.previousSelection={start:h,end:y,length:Math.abs(y-h)})},i.getSelection=function(){return hN(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(h){i.setSelection(h,h)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var h=i.maskOptions,y=h.mask,w=h.maskChar,p=h.permanents,m=h.formatChars;return{mask:y,maskChar:w,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:m}},i.isInputAutofilled=function(h,y,w,p){var m=i.getInputDOMNode();try{if(m.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<w.length&&y.end===h.length},i.onChange=function(h){var y=Ci(Ci(i)).beforePasteState,w=Ci(Ci(i)).previousSelection,p=i.props.beforeMaskedValueChange,m=i.getInputValue(),x=i.value,S=i.getSelection();i.isInputAutofilled(m,S,x,w)&&(x=Vn(i.maskOptions,""),w={start:0,end:0,length:0}),y&&(w=y.selection,x=y.value,S={start:w.start+m.length,end:w.start+m.length,length:0},m=x.slice(0,w.start)+m+x.slice(w.end),i.beforePasteState=null);var E=bN(i.maskOptions,m,S,x,w),P=E.enteredString,k=E.selection,C=E.value;if(St(p)){var j=p({value:C,selection:k},{value:x,selection:w},P,i.getBeforeMaskedValueChangeConfig());C=j.value,k=j.selection}i.setInputValue(C),St(i.props.onChange)&&i.props.onChange(h),i.isWindowsPhoneBrowser?i.setSelection(k.start,k.end,{deferred:!0}):i.setSelection(k.start,k.end)},i.onFocus=function(h){var y=i.props.beforeMaskedValueChange,w=i.maskOptions,p=w.mask,m=w.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)Jo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Vn(i.maskOptions,m),S=Vn(i.maskOptions,x),E=Jo(i.maskOptions,S),P=fa(i.maskOptions,E),k={start:P,end:P};if(St(y)){var C=y({value:S,selection:k},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=C.value,k=C.selection}var j=S!==i.getInputValue();j&&i.setInputValue(S),j&&St(i.props.onChange)&&i.props.onChange(h),i.setSelection(k.start,k.end)}i.runSaveSelectionLoop()}St(i.props.onFocus)&&i.props.onFocus(h)},i.onBlur=function(h){var y=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&Z1(i.maskOptions,i.value)){var p="";St(y)&&(p=y({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var m=p!==i.getInputValue();m&&i.setInputValue(p),m&&St(i.props.onChange)&&i.props.onChange(h)}St(i.props.onBlur)&&i.props.onBlur(h)},i.onMouseDown=function(h){if(!i.focused&&document.addEventListener){i.mouseDownX=h.clientX,i.mouseDownY=h.clientY,i.mouseDownTime=new Date().getTime();var y=function w(p){if(document.removeEventListener("mouseup",w),i.focused){var m=Math.abs(p.clientX-i.mouseDownX),x=Math.abs(p.clientY-i.mouseDownY),S=Math.max(m,x),E=new Date().getTime()-i.mouseDownTime;(S<=10&&E<=200||S<=5&&E<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",y)}St(i.props.onMouseDown)&&i.props.onMouseDown(h)},i.onPaste=function(h){St(i.props.onPaste)&&i.props.onPaste(h),h.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(h){i.props.children==null&&St(i.props.inputRef)&&i.props.inputRef(h)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,c=r.beforeMaskedValueChange,u=r.defaultValue,d=r.value;i.maskOptions=Q1(o,a,l),u==null&&(u=""),d==null&&(d=u);var v=lf(d);if(i.maskOptions.mask&&(s||v)&&(v=Vn(i.maskOptions,v),St(c))){var g=r.value;r.value==null&&(g=u),v=c({value:v,selection:null},{value:g=lf(g),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=v,i}dN(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=wN(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,c=i.formatChars,u=this.maskOptions,d=a||this.isFocused(),v=this.props.value!=null,g=v?lf(this.props.value):this.value,h=r?r.start:null;if(this.maskOptions=Q1(l,s,c),this.maskOptions.mask){!u.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==u.mask;if(u.mask||v||(g=this.getInputValue()),(y||this.maskOptions.mask&&(g||d))&&(g=Vn(this.maskOptions,g)),y){var w=Jo(this.maskOptions,g);(h===null||w<h)&&(h=W_(this.maskOptions,g)?w:fa(this.maskOptions,w))}!this.maskOptions.mask||!Z1(this.maskOptions,g)||d||v&&this.props.value||(g="");var p={start:h,end:h};if(St(o)){var m=o({value:g,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());g=m.value,p=m.selection}this.value=g;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var S=!1;p.start!=null&&p.end!=null&&(S=!r||r.start!==p.start||r.end!==p.end),(S||x)&&this.setSelection(p.start,p.end)}else u.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&cf(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=fN(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){St(o)||X1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Jp({},a);l.forEach(function(u){return delete s[u]}),r=o(s),l.filter(function(u){return r.props[u]!=null&&r.props[u]!==a[u]}).length&&X1(!1)}else r=sf.createElement("input",Jp({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),r=sf.cloneElement(r,c)},t}(sf.Component),CN=_N;U_.exports=CN;var EN=U_.exports;const kN=Ba(EN);_.div`
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
`,df=_.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,ff=_.input`
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
`;const pf=_.span`
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
`;const TN=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:"Контактні дані"}),f.jsxs(uf,{children:[f.jsx(df,{children:"Прізвище та ім’я"}),f.jsx(ff,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&f.jsx(pf,{children:n.fullName})]}),f.jsxs(uf,{children:[f.jsx(df,{children:"Номер телефону"}),f.jsx(kN,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>f.jsx(ff,{...i,type:"tel"})}),n.phone&&f.jsx(pf,{children:n.phone})]}),f.jsxs(uf,{children:[f.jsx(df,{children:"E-mail"}),f.jsx(ff,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&f.jsx(pf,{children:n.email})]})]})},PN=_.div`
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
`;const ON=_.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,jN=_.div`
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
`;const $N=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),f.jsx(Fu,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&f.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},hf={}.VITE_NP_API_KEY,ey="https://api.novaposhta.ua/v2.0/json/",MN=()=>{const e=Re(L=>L.cart.items),t=$t(),n=Jt();console.log("апі",hf);const[r,i]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[o,a]=b.useState(""),[l,s]=b.useState(null),[c,u]=b.useState(null),[d,v]=b.useState(null),[g,h]=b.useState(null),[y,w]=b.useState([]),[p,m]=b.useState([]),[x,S]=b.useState(null),E=e.reduce((L,R)=>L+(R.new_price??R.price)*R.quantity,0),P=e.reduce((L,R)=>L+R.quantity,0),C=(()=>{const L=new Date().getFullYear().toString().slice(-2),R=Date.now().toString().slice(-4),T=Math.floor(100+Math.random()*900);return`${L}${R}${T}`})();console.log(C),b.useEffect(()=>{if(o.length<2)return;const L=setTimeout(async()=>{const T=await(await fetch(ey,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:hf,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:o}})})).json();w(T.data.map($=>({value:$.Ref,label:$.Description})))},500);return()=>clearTimeout(L)},[o]),b.useEffect(()=>{if(!l||c!=="nova")return;(async()=>{const T=await(await fetch(ey,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:hf,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:l.value}})})).json();m(T.data.map($=>({value:$.Ref,label:$.Description})))})()},[l,c]);const j=L=>{s(L),i(R=>({...R,city:(L==null?void 0:L.label)||"",postOffice:""})),u(null),v(null),h(null)},M=()=>{const L={};return r.fullName.trim().split(" ").length<2&&(L.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(L.email="Некоректний email"),r.phone.replace(/\D/g,"").length<12&&(L.phone="Номер неповний"),l||(L.city=!0),c==="nova"&&!d&&(L.postOffice=!0),c==="ukr"&&!g&&(L.postOffice=!0),c||(L.delivery=!0),x||(L.payment=!0),L},A=b.useMemo(M,[r,c,d,g,l,x]),I=Object.keys(A).length===0&&e.length>0,O=async L=>{if(L.preventDefault(),!x){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:r.fullName,phone:r.phone,email:r.email,city:r.city,products:e==null?void 0:e.map(T=>({id:T.id,name:T.name,quantity:T.quantity,price:T.new_price??T.price})),status_order:"pending",order_number:C,payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:c==="nova"?"Нова Пошта":c==="ukr"?"УкрПошта":"Самовивіз",delivery_address:c==="nova"?d==null?void 0:d.label:c==="ukr"?g:"Самовивіз"}})}),x==="liqpay"){const T=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:E,order_number:C})}),{data:$,signature:z}=await T.json(),B=document.createElement("form");B.method="POST",B.action="https://www.liqpay.ua/api/3/checkout",B.innerHTML=`
        <input type="hidden" name="data" value="${$}" />
        <input type="hidden" name="signature" value="${z}" />
      `,document.body.appendChild(B),B.requestSubmit();return}const R={...r,name:r.fullName,city:l.label,deliveryMethod:c==="nova"?"Нова Пошта":c==="ukr"?"УкрПошта":"Самовивіз",address:c==="nova"?d==null?void 0:d.label:c==="ukr"?g:"Самовивіз",products:e==null?void 0:e.map(T=>({id:T.id,name:T.name,quantity:T.quantity,price:T.new_price??T.price})),total:E,order_number:C,delivery_address:c==="nova"?d==null?void 0:d.label:c==="ukr"?g:"Самовивіз",payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":""};n(Xc()),t("/order-confirmation",{state:{order:R}})}catch(R){console.error(R),alert("Помилка оформлення")}},F=b.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),D=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return f.jsx(PN,{children:f.jsxs(ON,{children:[f.jsxs(jN,{children:[f.jsx(TN,{formData:r,setFormData:i,errors:A}),f.jsx(Hz,{cityOptions:y,selectedCity:l,onChange:j,onInputChange:a}),f.jsx(Yz,{options:F,value:c,onChange:u,selectedCity:l}),f.jsx(Xz,{deliveryMethod:c,officeOptions:p,selectedOffice:d,selectedUkrOffice:g,setSelectedOffice:v,setSelectedUkrOffice:h}),f.jsx($N,{options:D,value:x,onChange:S,error:A.payment})]}),f.jsx(sN,{cartItems:e,totalAmount:E,totalQuantity:P,isFormValid:I,handleSubmit:O})]})})},IN=_.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,DN=_.h1`
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
`,LN=_.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,AN=_.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,RN=_.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,FN=_.li`
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
`;const zN=_.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,ty=_.button`
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
`,NN=()=>{var v,g;const e=$t(),t=er(),[n]=DE(),r=Jt(),i=(v=t.state)==null?void 0:v.order,o=n.get("orderId"),[a,l]=b.useState(i||null),[s,c]=b.useState(!i);b.useEffect(()=>{r(Xc())},[r]),b.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(h=>h.json()).then(h=>{var y;((y=h.data)==null?void 0:y.length)>0&&l(h.data[0]),c(!1)}).catch(()=>c(!1)):c(!1))},[o,i]),console.log(a);const d=((a==null?void 0:a.products)??[]).reduce((h,y)=>h+Number(y.new_price??y.price)*(y.quantity||1),0);return s?f.jsx("div",{children:"Завантаження..."}):a?f.jsxs(IN,{children:[f.jsx(DN,{children:"Дякуємо за ваше замовлення!"}),f.jsxs(Ar,{children:["Ваше замовлення ",f.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),f.jsx(Ar,{children:"Ми зв’яжемось з Вами в найближчий час"}),f.jsxs(LN,{children:[f.jsx(AN,{children:"Деталі замовлення:"}),f.jsx(RN,{children:(g=a.products)==null?void 0:g.map(h=>f.jsxs(FN,{children:[f.jsxs("span",{className:"item-info",children:[h.name," (x",h.quantity,")"]}),f.jsxs("span",{className:"item-price",children:[(h.new_price??h.price)*(h.quantity||1)," грн"]})]},h.id))}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"На суму:"})," ",d," грн."]}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),f.jsxs(Ar,{children:[f.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),f.jsxs(zN,{children:[f.jsx(ty,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),f.jsx(ty,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):f.jsxs("div",{children:["Замовлення не знайдено",f.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},BN=_.section`
  background-color: var(--second-background);
`,VN=_.div`
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
`,UN=_.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,WN=_.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,HN=_.p`

  font-size: 16px;
  color: #666;
`,GN=_.section`
  margin-bottom: 50px;
`,qN=_.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,YN=_.section`
  margin-bottom: 60px;
`,XN=_.h2`
  margin-bottom: 30px;
`,KN=_.div`
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
`,QN=()=>f.jsxs(BN,{children:[f.jsxs(VN,{children:[f.jsxs(UN,{children:[f.jsx(WN,{children:"Про Дідів Хлів"}),f.jsx(HN,{children:"Даємо друге життя якісним велозапчастинам"})]}),f.jsxs(GN,{children:[f.jsx(qN,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),f.jsx($2,{})]}),f.jsxs(YN,{children:[f.jsx(XN,{children:"Наша майстерня"}),f.jsxs(KN,{children:[f.jsx(Ls,{color:"#e2e2e2",children:"Фото майстерні"}),f.jsx(Ls,{color:"#d1d1d1",children:"Процес діагностики"}),f.jsx(Ls,{color:"#bcbcbc",children:"Склад запчастин"}),f.jsx(Ls,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),ZN=()=>{const{pathname:e}=er();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},JN=_.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,e7=_.div`
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
`,t7=_.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,n7=_.p`
  color: #585555;
  margin-bottom: 40px;
`,r7=_.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,i7=_.div`
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
`,o7=_.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,a7=_.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,s7=_.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,l7=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,ny=_.a`
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
`;const c7=_.div`
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

 
`,u7=()=>f.jsx(JN,{children:f.jsxs(e7,{children:[f.jsx(t7,{children:"Контакти"}),f.jsx(n7,{children:"Зв’яжіться з нами для консультації або замовлення"}),f.jsxs(r7,{children:[f.jsxs(i7,{children:[f.jsxs(As,{children:[f.jsx("h3",{children:"Адреса"}),f.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),f.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),f.jsxs(As,{children:[f.jsx("h3",{children:"Телефон"}),f.jsx("p",{children:"+38 (097) 123-45-67"})]}),f.jsxs(As,{children:[f.jsx("h3",{children:"Email"}),f.jsx("p",{children:"didivhliv.com"})]}),f.jsxs(As,{children:[f.jsx("h3",{children:"Графік роботи"}),f.jsx("p",{children:"З 11:00 - 20:00"}),f.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),f.jsxs(o7,{children:[f.jsx(a7,{children:"Ми в соцмережах"}),f.jsx(s7,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),f.jsxs(l7,{children:[f.jsxs(ny,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${hn}#icon-instagram`})}),f.jsx("span",{children:"Instagram"})]}),f.jsxs(ny,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${hn}#icon-telegram`})}),f.jsx("span",{children:"Telegram"})]})]}),f.jsx(c7,{children:"Приєднуйся до спільноти!"})]})]})]})}),d7=_.section`
  background-color:  var(--second-background);
`,f7=_.div`
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
  
`,p7=_.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,h7=_.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,m7=_.div`
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
`,g7=_.div`
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
`,v7=_.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,y7=_.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,x7=_.p`
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
`;const b7=_.div.attrs({className:"card-buttons"})`
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
`,G_=_.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
  margin-top: auto; 
 padding-top: 40px; 
`,Yi=_.button`
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
`,w7=_.div`
  position: relative;
  display: inline-block;
  

`,S7=_.button`
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
`,_7=_.div`
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
`,Ei=_.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,q_=_.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,Y_=_(Te)`
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
  
`,C7=_.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,E7=_.div`
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
`,k7=_.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,T7=_.h1`

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

`,P7=_.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,O7=_.div`
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
`;const j7=_.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding: 20px;
`,$7=_.p`
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
`,M7=_.div`
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
`;const I7=_.div.attrs({className:"card-buttons"})`
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
`,gc=_.button`
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
`;const D7=_.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,L7=_.div`
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
`,ki=_.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,A7=_.button`
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
`,R7=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),i=Re(E=>E.favorites.items),o=Re(E=>E.cart.items),[a,l]=b.useState(!1),[s,c]=b.useState("date"),[u,d]=b.useState("asc"),[v,g]=b.useState(1),[h,y]=b.useState(1),w=$t(),p=Jt(),m=b.useRef(null);b.useEffect(()=>{const E=P=>{m.current&&!m.current.contains(P.target)&&l(!1)};return document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[v]),b.useEffect(()=>{(async()=>{const P=new Date,k=new Date;k.setDate(P.getDate()-7);const C=k.toISOString();try{r(!0);const j=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${C}&pagination[page]=${v}&pagination[pageSize]=24`);if(!j.ok)throw new Error(`HTTP error! Status: ${j.status}`);const M=await j.json();t(M.data),y(M.meta.pagination.pageCount)}catch(j){console.error("Помилка при завантаженні продуктів:",j)}finally{r(!1)}})()},[v]);const x=b.useMemo(()=>{const E=[...e],P=k=>k.new_price&&k.new_price<k.price?k.new_price:k.price;switch(s){case"name":return E.sort((k,C)=>u==="asc"?k.name.localeCompare(C.name):C.name.localeCompare(k.name));case"price":return E.sort((k,C)=>{const j=P(k),M=P(C);return u==="asc"?j-M:M-j});case"date":return E.sort((k,C)=>u==="asc"?new Date(k.createdAt)-new Date(C.createdAt):new Date(C.createdAt)-new Date(k.createdAt));default:return E}},[s,e,u]),S=(E,P)=>{P.stopPropagation();const k=i.some(C=>C.id===(E==null?void 0:E.id));di(E,k,p,K)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):x.length===0?f.jsxs(q_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),f.jsxs(Y_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(Bc,{size:24})]})]}):f.jsxs(d7,{children:[f.jsxs(f7,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(p7,{children:[f.jsx(h7,{children:"Нові товари "}),f.jsxs(w7,{ref:m,children:[f.jsxs(S7,{onClick:()=>l(E=>!E),children:["Сортування",f.jsx(Nc,{strokeWidth:.9,size:22})]}),a&&f.jsxs(_7,{children:[f.jsx(Ei,{onClick:()=>{c("name"),d("asc"),l(!1)},children:"А-Я"}),f.jsx(Ei,{onClick:()=>{c("name"),d("desc"),l(!1)},children:"Я-А"}),f.jsx(Ei,{onClick:()=>{c("price"),d("asc"),l(!1)},children:"Ціна ↑"}),f.jsx(Ei,{onClick:()=>{c("price"),d("desc"),l(!1)},children:"Ціна ↓"}),f.jsx(Ei,{onClick:()=>{c("date"),d("desc"),l(!1)},children:"Спочатку новіші"}),f.jsx(Ei,{onClick:()=>{c("date"),d("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(m7,{children:x.map(E=>{var D,L;const P=i.some(R=>R.id===E.id),k=(E==null?void 0:E.available)??!0,C=o.find(R=>R.id===E.id),M=(C?C.quantity:0)>=(E.stock||0),A=E.new_price&&E.new_price<E.price,I=A?E.new_price:E.price,O=A?Math.round((E.price-E.new_price)/E.price*100):0,F=(R,T)=>{if(T.stopPropagation(),M){K.error("Товар уже у кошику");return}p(ri({...R,quantity:1})),K.success(`${R.name} додано в кошик!`)};return f.jsxs(g7,{onClick:()=>w(`/product/${E.slug??E.id}`),children:[!k&&f.jsx(ym,{children:"Заброньовано"}),f.jsx(v7,{src:((L=(D=E.images)==null?void 0:D[0])==null?void 0:L.url)||oi,alt:E.name}),f.jsx(x7,{children:E.name}),f.jsxs(y7,{children:[f.jsx($u,{children:f.jsxs(Mu,{children:[f.jsxs(Iu,{$discount:A,children:[I.toLocaleString()," грн"]}),A&&f.jsxs(Du,{children:[E.price.toLocaleString()," грн"]}),A&&f.jsxs(Lu,{children:["-",O,"%"]})]})}),f.jsxs(b7,{children:[k&&f.jsx(gc,{onClick:R=>F(E,R),children:f.jsx(yo,{size:24,color:C?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(gc,{onClick:R=>S(E,R),children:f.jsx(Xa,{size:24,fill:P?"#ff4d4f":"none",color:P?"#ff4d4f":"#000000",strokeWidth:P?1:2})})]})]})]},E.id)})}),f.jsxs(G_,{children:[f.jsx(Yi,{onClick:()=>g(E=>Math.max(E-1,1)),disabled:v===1,children:"Назад"}),Array.from({length:h},(E,P)=>f.jsx(Yi,{onClick:()=>g(P+1),active:v===P+1,children:P+1},P)),f.jsx(Yi,{onClick:()=>g(E=>Math.min(E+1,h)),disabled:v===h,children:"Вперед"})]})]})," "]})},F7=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,o]=b.useState(!1),[a,l]=b.useState("date"),[s,c]=b.useState("desc"),[u,d]=b.useState(1),v=24;console.log(i);const g=$t(),h=Jt(),y=Re(C=>C.favorites.items),w=Re(C=>C.cart.items),p=b.useRef(null);b.useEffect(()=>{const C=j=>{p.current&&!p.current.contains(j.target)&&o(!1)};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[]),b.useEffect(()=>{(async()=>{const j="https://backenddidiv-production.up.railway.app";try{const A=await(await fetch(`${j}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json();console.log(A.data),t(A.data),r(!1)}catch(M){console.log(M)}})()},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[u]);const m=b.useMemo(()=>{const C=[...e];switch(a){case"name":return C.sort((j,M)=>s==="asc"?j.name.localeCompare(M.name):M.name.localeCompare(j.name));case"price":return C.sort((j,M)=>s==="asc"?j.new_price-M.new_price:M.new_price-j.new_price);case"date":return C.sort((j,M)=>s==="asc"?new Date(j.createdAt)-new Date(M.createdAt):new Date(M.createdAt)-new Date(j.createdAt));default:return C}},[a,e,s]),x=u*v,S=x-v,E=m.slice(S,x),P=Math.ceil(e.length/v),k=(C,j)=>{j.stopPropagation();const M=y.some(A=>A.id===(C==null?void 0:C.id));di(C,M,h,K)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(fi,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?f.jsxs(q_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),f.jsxs(Y_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(Bc,{size:24})]})]}):f.jsx(C7,{children:f.jsxs(E7,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(k7,{children:[f.jsx(T7,{children:"Акційні товари"}),f.jsxs(D7,{ref:p,children:[f.jsxs(A7,{onClick:()=>o(C=>!C),children:["Сортування",f.jsx(Nc,{strokeWidth:.9,size:22})]}),i&&f.jsxs(L7,{children:[f.jsx(ki,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),f.jsx(ki,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),f.jsx(ki,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(ki,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(ki,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(ki,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(P7,{children:E.map(C=>{var T,$;const j=C.new_price&&C.new_price<C.price,M=j?C.new_price:C.price,A=(C==null?void 0:C.available)??!0,I=j?Math.round((C.price-C.new_price)/C.price*100):0,O=y.some(z=>z.id===C.id),F=w.find(z=>z.id===C.id),L=(F?F.quantity:0)>=(C.stock||0),R=(z,B)=>{if(B.stopPropagation(),L){K.error("Товар уже у кошику");return}h(ri({...z,quantity:1})),K.success(`${z.name} додано в кошик!`)};return f.jsxs(O7,{onClick:()=>g(`/product/${C.slug??C.id}`),style:{cursor:"pointer"},children:[!A&&f.jsx(ym,{children:"Заброньовано"}),f.jsx(j7,{src:(($=(T=C.images)==null?void 0:T[0])==null?void 0:$.url)||"/nofoto.png"}),f.jsx($7,{children:C.name}),f.jsxs(M7,{children:[f.jsx($u,{children:f.jsxs(Mu,{children:[f.jsxs(Iu,{$discount:j,children:[M.toLocaleString()," грн"]}),j&&f.jsxs(Du,{children:[C.price.toLocaleString()," грн"]}),j&&f.jsxs(Lu,{children:["-",I,"%"]})]})}),f.jsxs(I7,{children:[A&&f.jsx(gc,{onClick:z=>R(C,z),children:f.jsx(yo,{size:24,color:F?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(gc,{onClick:z=>k(C,z),children:f.jsx(Xa,{size:24,fill:O?"#ff4d4f":"none",color:O?"#ff4d4f":"#000000",strokeWidth:O?1:2})})]})]})]},C.id)})}),m.length>v&&f.jsxs(G_,{children:[f.jsx(Yi,{onClick:()=>d(C=>Math.max(C-1,1)),disabled:u===1,children:"Назад"}),Array.from({length:P},(C,j)=>f.jsx(Yi,{onClick:()=>d(j+1),active:u===j+1,children:j+1},j)),f.jsx(Yi,{onClick:()=>d(C=>Math.min(C+1,P)),disabled:u===P,children:"Вперед"})]})]})})},z7=_.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;

`,N7=_.div`
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
`,B7=_.button`
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
`,V7=_.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width:768px){
    font-size:42px;
  }
`,U7=_.p`
  text-align:center;
  color:#8d837d;

  margin-bottom:32px;
`,W7=_.div`
  display:flex;

  background:#efe8df;

  border-radius:40px;

  padding:5px;

  margin-bottom:35px;
`,ry=_.button`
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
`,Uo=_.input`
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
`,H7=_.button`
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
`,iy=_.div`
  position: relative;
  width: 100%;
 
`,oy=_.button`
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
`,G7=_.p`
  margin-top:28px;

  text-align:center;

  color:#8b817a;

  font-size:15px;

  span{
      color:#ff7a00;
      cursor:pointer;
      font-weight:600;
  }
`,q7=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{console.log(r);const i=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[product][documentId][$eq]=${r.documentId}&populate=user`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0];console.log("favr",l);const s=l.user||[];if(s.some(d=>d.documentId===n))return;const u=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{user:[...s.map(d=>d.documentId),n]}})});u.ok||console.error(await u.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:[n]}})});a.ok||console.error(await a.json())}))},Y7=async(e,t,n)=>{console.log("localCartItems",e),e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${n}&filters[product][documentId][$eq]=${r.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(console.log("cartData",o),o.data.length>0){const l=o.data[0],s=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{quantity:r.quantity}})});s.ok||console.error(await s.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:n,quantity:r.quantity}})});a.ok||console.error(await a.json())}))},X7=({isOpen:e,onClose:t,mode:n,setMode:r,localFavorites:i,localCartItems:o})=>{const[a,l]=b.useState(!1),[s,c]=b.useState(!1),[u,d]=b.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""});if(b.useEffect(()=>{const w=p=>{p.key==="Escape"&&t()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[t]),!e)return null;const v=w=>{d(p=>({...p,[w.target.name]:w.target.value}))},g=w=>{w.target===w.currentTarget&&t()},h=async()=>{var m;const w=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:u.email,password:u.password})}),p=await w.json();if(!w.ok){alert(((m=p.error)==null?void 0:m.message)||"Помилка авторизації");return}localStorage.setItem("token",p.jwt),localStorage.setItem("user",JSON.stringify(p.user)),await q7(i,p.jwt,p.user.documentId),await Y7(o,p.jwt,p.user.documentId),t()},y=async()=>{if(u.password!==u.confirmPassword){alert("Паролі не співпадають");return}const p=await(await fetch("https://backenddidiv-production.up.railway.app/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u.email,email:u.email,password:u.password})})).json();localStorage.setItem("token",p.jwt);try{const m=localStorage.getItem("token");if(localStorage.setItem("user",JSON.stringify(p.user)),!(await fetch(`https://backenddidiv-production.up.railway.app/api/users/${p.user.id}`,{method:"PUT",headers:{Authorization:`Bearer ${m}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:u.first_name,last_name:u.last_name})})).ok)throw new Error("Помилка оновлення")}catch(m){console.error(m),alert("Не вдалося оновити дані")}t()};return f.jsxs(f.Fragment,{children:[" ",f.jsx(Dn,{autoClose:1500}),f.jsx(z7,{onClick:g,children:f.jsxs(N7,{children:[f.jsx(B7,{onClick:t,children:"×"}),f.jsx(V7,{children:n==="login"?"Вхід":"Реєстрація"}),f.jsx(U7,{children:n==="login"?"Увійдіть до свого акаунта":"Створіть новий акаунт"}),f.jsxs(W7,{children:[f.jsx(ry,{active:n==="login",onClick:()=>r("login"),children:"Вхід"}),f.jsx(ry,{active:n==="register",onClick:()=>r("register"),children:"Реєстрація"})]}),n==="register"&&f.jsxs(f.Fragment,{children:[f.jsx(Uo,{name:"first_name",value:u.first_name,onChange:v,placeholder:"Ім'я"}),f.jsx(Uo,{name:"last_name",value:u.last_name,onChange:v,placeholder:"Прізвище"})]}),f.jsx(Uo,{name:"email",type:"email",value:u.email,onChange:v,placeholder:"Email"}),f.jsxs(iy,{children:[f.jsx(Uo,{name:"password",type:a?"text":"password",value:u.password,onChange:v,placeholder:"Пароль"}),f.jsx(oy,{type:"button",onClick:()=>l(w=>!w),children:a?f.jsx(G0,{size:20}):f.jsx(q0,{size:20})})]}),n==="register"&&f.jsxs(iy,{children:[f.jsx(Uo,{name:"confirmPassword",type:s?"text":"password",value:u.confirmPassword,onChange:v,placeholder:"Повторіть пароль"}),f.jsx(oy,{type:"button",onClick:()=>c(w=>!w),children:a?f.jsx(G0,{size:20}):f.jsx(q0,{size:20})})]}),f.jsx(H7,{onClick:n==="login"?h:y,children:n==="login"?"Увійти":"Зареєструватися"}),f.jsx(G7,{children:n==="login"?f.jsxs(f.Fragment,{children:["Немає акаунта?"," ",f.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):f.jsxs(f.Fragment,{children:["Вже є акаунт?"," ",f.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})," "]})},K7=({isLoggedIn:e,children:t})=>e?t:f.jsx(wE,{to:"/",replace:!0}),Q7=_.main`
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

`,Z7=_.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`,J7=_.aside`
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 1440px) {
    position: sticky;
    top: 110px;
  }
`,e9=_.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,t9=_.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,n9=_.h3`
  margin-bottom: 4px;
`,r9=_.p`
  color: #777;
`,ay=_.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Rs=_(Fy)`
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
`;var og="persist:",X_="persist/FLUSH",ag="persist/REHYDRATE",K_="persist/PAUSE",Q_="persist/PERSIST",Z_="persist/PURGE",J_="persist/REGISTER",i9=-1;function fl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fl=function(n){return typeof n}:fl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fl(e)}function sy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function o9(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sy(n,!0).forEach(function(r){a9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sy(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function a9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s9(e,t,n,r){r.debug;var i=o9({},n);return e&&fl(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function l9(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:og).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=c9;var s=e.writeFailHandler||null,c={},u={},d=[],v=null,g=null,h=function(E){Object.keys(E).forEach(function(P){p(P)&&c[P]!==E[P]&&d.indexOf(P)===-1&&d.push(P)}),Object.keys(c).forEach(function(P){E[P]===void 0&&p(P)&&d.indexOf(P)===-1&&c[P]!==void 0&&d.push(P)}),v===null&&(v=setInterval(y,i)),c=E};function y(){if(d.length===0){v&&clearInterval(v),v=null;return}var S=d.shift(),E=r.reduce(function(P,k){return k.in(P,S,c)},c[S]);if(E!==void 0)try{u[S]=l(E)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete u[S];d.length===0&&w()}function w(){Object.keys(u).forEach(function(S){c[S]===void 0&&delete u[S]}),g=a.setItem(o,l(u)).catch(m)}function p(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function m(S){s&&s(S)}var x=function(){for(;d.length!==0;)y();return g||Promise.resolve()};return{update:h,flush:x}}function c9(e){return JSON.stringify(e)}function u9(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:og).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=d9,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(c,u){return u.out(c,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function d9(e){return JSON.parse(e)}function f9(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:og).concat(e.key);return t.removeItem(n,p9)}function p9(e){}function ly(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ly(n,!0).forEach(function(r){h9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ly(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function h9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m9(e,t){if(e==null)return{};var n=g9(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function g9(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var v9=5e3;function eC(e,t){var n=e.version!==void 0?e.version:i9;e.debug;var r=e.stateReconciler===void 0?s9:e.stateReconciler,i=e.getStoredState||u9,o=e.timeout!==void 0?e.timeout:v9,a=null,l=!1,s=!0,c=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(u,d){var v=u||{},g=v._persist,h=m9(v,["_persist"]),y=h;if(d.type===Q_){var w=!1,p=function(C,j){w||(d.rehydrate(e.key,C,j),w=!0)};if(o&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=l9(e)),g)return Ln({},t(y,d),{_persist:g});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(k){var C=e.migrate||function(j,M){return Promise.resolve(j)};C(k,n).then(function(j){p(j)},function(j){p(void 0,j)})},function(k){p(void 0,k)}),Ln({},t(y,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===Z_)return l=!0,d.result(f9(e)),Ln({},t(y,d),{_persist:g});if(d.type===X_)return d.result(a&&a.flush()),Ln({},t(y,d),{_persist:g});if(d.type===K_)s=!0;else if(d.type===ag){if(l)return Ln({},y,{_persist:Ln({},g,{rehydrated:!0})});if(d.key===e.key){var m=t(y,d),x=d.payload,S=r!==!1&&x!==void 0?r(x,u,m,e):m,E=Ln({},S,{_persist:Ln({},g,{rehydrated:!0})});return c(E)}}}if(!g)return t(u,d);var P=t(y,d);return P===y?u:c(Ln({},P,{_persist:g}))}}function cy(e){return b9(e)||x9(e)||y9()}function y9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function x9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function b9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function uy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function th(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uy(n,!0).forEach(function(r){w9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uy(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function w9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var tC={registry:[],bootstrapped:!1},S9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:tC,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case J_:return th({},t,{registry:[].concat(cy(t.registry),[n.key])});case ag:var r=t.registry.indexOf(n.key),i=cy(t.registry);return i.splice(r,1),th({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function _9(e,t,n){var r=n||!1,i=hm(S9,tC,t&&t.enhancer?t.enhancer:void 0),o=function(c){i.dispatch({type:J_,key:c})},a=function(c,u,d){var v={type:ag,payload:u,err:d,key:c};e.dispatch(v),i.dispatch(v),r&&l.getState().bootstrapped&&(r(),r=!1)},l=th({},i,{purge:function(){var c=[];return e.dispatch({type:Z_,result:function(d){c.push(d)}}),Promise.all(c)},flush:function(){var c=[];return e.dispatch({type:X_,result:function(d){c.push(d)}}),Promise.all(c)},pause:function(){e.dispatch({type:K_})},persist:function(){e.dispatch({type:Q_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var sg={},lg={};lg.__esModule=!0;lg.default=k9;function pl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pl=function(n){return typeof n}:pl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pl(e)}function mf(){}var C9={getItem:mf,setItem:mf,removeItem:mf};function E9(e){if((typeof self>"u"?"undefined":pl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function k9(e){var t="".concat(e,"Storage");return E9(t)?self[t]:C9}sg.__esModule=!0;sg.default=O9;var T9=P9(lg);function P9(e){return e&&e.__esModule?e:{default:e}}function O9(e){var t=(0,T9.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var cg=void 0,j9=$9(sg);function $9(e){return e&&e.__esModule?e:{default:e}}var M9=(0,j9.default)("local");cg=M9;const I9={key:"cart",storage:cg},D9={key:"favorites",storage:cg},L9=eC(I9,F4),A9=eC(D9,D3),nC=w4({reducer:{cart:L9,favorites:A9},middleware:e=>e({serializableCheck:!1})}),R9=_9(nC),F9=()=>{var l,s;const[e,t]=b.useState(""),[n,r]=b.useState(""),i=Jt(),o=$t();b.useEffect(()=>{(async()=>{try{const u=localStorage.getItem("token"),v=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${u}`}})).json();t(v.first_name),r(v.email)}catch(u){console.error(u)}})()},[]);const a=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),i(M3()),i(Xc()),await R9.purge(),o("/",{replace:!0})};return f.jsxs(J7,{children:[f.jsxs(e9,{children:[f.jsx(t9,{children:((s=(l=e||e)==null?void 0:l[0])==null?void 0:s.toUpperCase())||"?"}),f.jsxs("div",{children:[f.jsx(n9,{children:e}),f.jsx(r9,{children:n})]})]}),f.jsxs(ay,{children:[f.jsxs(ay,{children:[f.jsx(Rs,{$active:!0,to:"/account/profile",children:"Особисті дані"}),f.jsx(Rs,{to:"/account/orders",children:"Замовлення"}),f.jsx(Rs,{to:"/account/password",children:"Змінити пароль"})]}),f.jsx(Rs,{onClick:a,children:"Вийти"})]})]})};var ug={};ug.match=W9;ug.parse=rC;var z9=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,N9=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,B9=/^(?:(min|max)-)?(.+)/,V9=/(em|rem|px|cm|mm|in|pt|pc)?$/,U9=/(dpi|dpcm|dppx)?$/;function W9(e,t){return rC(e).some(function(n){var r=n.inverse,i=n.type==="all"||t.type===n.type;if(i&&r||!(i||r))return!1;var o=n.expressions.every(function(a){var l=a.feature,s=a.modifier,c=a.value,u=t[l];if(!u)return!1;switch(l){case"orientation":case"scan":return u.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=py(c),u=py(u);break;case"resolution":c=fy(c),u=fy(u);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=dy(c),u=dy(u);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,u=parseInt(u,10)||0;break}switch(s){case"min":return u>=c;case"max":return u<=c;default:return u===c}});return o&&!r||!o&&r})}function rC(e){return e.split(",").map(function(t){t=t.trim();var n=t.match(z9),r=n[1],i=n[2],o=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(l){var s=l.match(N9),c=s[1].toLowerCase().match(B9);return{modifier:c[1],feature:c[2],value:s[2]}}),a})}function dy(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function fy(e){var t=parseFloat(e),n=String(e).match(U9)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function py(e){var t=parseFloat(e),n=String(e).match(V9)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var H9=ug.match,hy=typeof window<"u"?window.matchMedia:null;function G9(e,t,n){var r=this,i;hy&&!n&&(i=hy.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=H9(e,t),this.media=e),this.addListener=o,this.removeListener=a,this.dispose=s;function o(c){i&&i.addListener(c)}function a(c){i&&i.removeListener(c)}function l(c){r.matches=c.matches,r.media=c.media}function s(){i&&i.removeListener(l)}}function q9(e,t,n){return new G9(e,t,n)}var Y9=q9;const X9=Ba(Y9);var K9=/[A-Z]/g,Q9=/^ms-/,gf={};function Z9(e){return"-"+e.toLowerCase()}function iC(e){if(gf.hasOwnProperty(e))return gf[e];var t=e.replace(K9,Z9);return gf[e]=Q9.test(t)?"-"+t:t}function J9(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let o=0;o<i;o++){const a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var oC={exports:{}},eB="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",tB=eB,nB=tB;function aC(){}function sC(){}sC.resetWarningCache=aC;var rB=function(){function e(r,i,o,a,l,s){if(s!==nB){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:sC,resetWarningCache:aC};return n.PropTypes=n,n};oC.exports=rB();var iB=oC.exports;const fe=Ba(iB),pt=fe.oneOfType([fe.string,fe.number]),dg={all:fe.bool,grid:fe.bool,aural:fe.bool,braille:fe.bool,handheld:fe.bool,print:fe.bool,projection:fe.bool,screen:fe.bool,tty:fe.bool,tv:fe.bool,embossed:fe.bool},lC={orientation:fe.oneOf(["portrait","landscape"]),scan:fe.oneOf(["progressive","interlace"]),aspectRatio:fe.string,deviceAspectRatio:fe.string,height:pt,deviceHeight:pt,width:pt,deviceWidth:pt,color:fe.bool,colorIndex:fe.bool,monochrome:fe.bool,resolution:pt,type:Object.keys(dg)},{type:IB,...oB}=lC,cC={minAspectRatio:fe.string,maxAspectRatio:fe.string,minDeviceAspectRatio:fe.string,maxDeviceAspectRatio:fe.string,minHeight:pt,maxHeight:pt,minDeviceHeight:pt,maxDeviceHeight:pt,minWidth:pt,maxWidth:pt,minDeviceWidth:pt,maxDeviceWidth:pt,minColor:fe.number,maxColor:fe.number,minColorIndex:fe.number,maxColorIndex:fe.number,minMonochrome:fe.number,maxMonochrome:fe.number,minResolution:pt,maxResolution:pt,...oB},aB={...dg,...cC};var sB={all:aB,types:dg,matchers:lC,features:cC};const lB=e=>`not ${e}`,cB=(e,t)=>{const n=iC(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?lB(n):`(${n}: ${t})`},uB=e=>e.join(" and "),dB=e=>{const t=[];return Object.keys(sB.all).forEach(n=>{const r=e[n];r!=null&&t.push(cB(n,r))}),uB(t)},fB=b.createContext(void 0),pB=e=>e.query||dB(e),my=e=>e?Object.keys(e).reduce((n,r)=>(n[iC(r)]=e[r],n),{}):void 0,uC=()=>{const e=b.useRef(!1);return b.useEffect(()=>{e.current=!0},[]),e.current},hB=e=>{const t=b.useContext(fB),n=()=>my(e)||my(t),[r,i]=b.useState(n);return b.useEffect(()=>{const o=n();J9(r,o)||i(o)},[e,t]),r},mB=e=>{const t=()=>pB(e),[n,r]=b.useState(t);return b.useEffect(()=>{const i=t();n!==i&&r(i)},[e]),n},gB=(e,t)=>{const n=()=>X9(e,t||{},!!t),[r,i]=b.useState(n),o=uC();return b.useEffect(()=>{if(o){const a=n();return i(a),()=>{a&&a.dispose()}}},[e,t]),r},vB=e=>{const[t,n]=b.useState(e.matches);return b.useEffect(()=>{const r=i=>{n(i.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},yB=(e,t,n)=>{const r=hB(t),i=mB(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const o=gB(i,r),a=vB(o),l=uC();return b.useEffect(()=>{l&&n&&n(a)},[a]),b.useEffect(()=>()=>{o&&o.dispose()},[]),a},xB=_.div`
  margin-bottom: 24px;
`,bB=_.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,wB=_.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,SB=_.h3`
  margin-bottom: 4px;
`,_B=_.p`
  color: #777;
`,CB=_.button`
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
`,EB=_.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`,Wo=_(Fy)`
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
`,kB=()=>{var s,c;const[e,t]=b.useState(!1),[n,r]=b.useState(""),[i,o]=b.useState("");b.useEffect(()=>{(async()=>{try{const d=localStorage.getItem("token"),g=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${d}`}})).json();r(g.first_name),o(g.email)}catch(d){console.error(d)}})()},[]);const l={"/account":"Особисті дані","/account/profile":"Особисті дані","/account/orders":"Замовлення","/account/favorites":"Обране","/account/password":"Змінити пароль"}[location.pathname]||"Особисті дані";return f.jsxs(xB,{children:[f.jsxs(bB,{children:[f.jsx(wB,{children:((c=(s=n||n)==null?void 0:s[0])==null?void 0:c.toUpperCase())||"?"}),f.jsxs("div",{children:[f.jsx(SB,{children:n}),f.jsx(_B,{children:i})]})]}),f.jsxs(CB,{onClick:()=>t(u=>!u),children:[l,e?f.jsx(sj,{size:22}):f.jsx(oj,{size:22})]}),e&&f.jsxs(EB,{children:[f.jsx(Wo,{to:"/account/profile",onClick:()=>t(!1),children:"Особисті дані"}),f.jsx(Wo,{to:"/account/orders",onClick:()=>t(!1),children:"Замовлення"}),f.jsx(Wo,{to:"/account/favorites",onClick:()=>t(!1),children:"Обране"}),f.jsx(Wo,{to:"/account/password",onClick:()=>t(!1),children:"Змінити пароль"}),f.jsx(Wo,{to:"/",children:"Вийти"})]})]})},TB=()=>{const e=yB({maxWidth:767});return f.jsxs(Q7,{className:"container",children:[e?f.jsx(kB,{}):f.jsx(F9,{}),f.jsx(Z7,{children:f.jsx(Ay,{})})]})},PB=_.div`
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
`,OB=_.h2`
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
`,jB=_.button`
  width: 220px;
  height: 52px;

  border: none;
  border-radius: 14px;

  background: #ef7d1a;
  color: white;

  cursor: pointer;
`,gy=()=>{const[e,t]=b.useState({first_name:"",last_name:"",email:"",phone:""}),[n,r]=b.useState(null),[i,o]=b.useState(!0);b.useEffect(()=>{(async()=>{try{const c=localStorage.getItem("token"),d=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${c}`}})).json();r(d.id),t({first_name:d.first_name||"",last_name:d.last_name||"",email:d.email||"",phone:d.phone||""})}catch(c){console.error(c)}finally{o(!1)}})()},[]);const a=s=>{const{name:c,value:u}=s.target;t(d=>({...d,[c]:u}))},l=async()=>{try{const s=localStorage.getItem("token");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/users/${n}`,{method:"PUT",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:e.first_name,last_name:e.last_name,phone:e.phone})})).ok)throw new Error("Помилка оновлення");K.success("Дані оновлено успішно")}catch(s){console.error(s),K.error("Не вдалось оновити дані")}};return i?f.jsx("p",{children:"Завантаження..."}):f.jsxs(PB,{children:[f.jsx(Dn,{autoClose:1500}),f.jsx(OB,{children:"Особисті дані"}),f.jsxs(Fs,{children:["Ім я",f.jsx(zs,{name:"first_name",value:e.first_name,onChange:a})]}),f.jsxs(Fs,{children:["Прізвище",f.jsx(zs,{name:"last_name",value:e.last_name,onChange:a})]}),f.jsxs(Fs,{children:["Email",f.jsx(zs,{value:e.email,disabled:!0})]}),f.jsxs(Fs,{children:["Телефон",f.jsx(zs,{name:"phone",value:e.phone,onChange:a})]}),f.jsx(jB,{onClick:l,children:"Зберегти"})]})};function $B(){const e=Jt(),[t,n]=b.useState(!1),[r,i]=b.useState("login"),o=!!localStorage.getItem("token"),a=localStorage.getItem("token"),l=JSON.parse(localStorage.getItem("user")||"null"),s=l==null?void 0:l.documentId,c=Re(d=>d.favorites.items),u=Re(d=>d.cart.items);return b.useEffect(()=>{if(!a||!s)return;(async()=>{const v=localStorage.getItem("token");if(!v)return;const y=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${s}&populate=product.images`,{headers:{Authorization:`Bearer ${v}`}})).json()).data.map(w=>({...w.product,favoriteId:w.id,favoriteDocumentId:w.documentId}));e(I3(y))})()},[s,e,a]),f.jsxs(u5,{children:[f.jsx(GM,{}),f.jsx(ZN,{}),f.jsxs(b.Suspense,{fallback:f.jsx(WM,{}),children:[f.jsx(_E,{children:f.jsxs(Ne,{path:"/",element:f.jsx(Ij,{openLogin:()=>{i("login"),n(!0)},openRegister:()=>{i("register"),n(!0)}}),children:[f.jsx(Ne,{index:!0,element:f.jsx(ND,{})}),f.jsx(Ne,{path:"catalog",element:f.jsx(i5,{})}),f.jsx(Ne,{path:"/catalog/:category",element:f.jsx($6,{})}),f.jsx(Ne,{path:"/product/:identifier",element:f.jsx(YA,{})}),f.jsx(Ne,{path:"cart",element:f.jsx(SR,{})}),f.jsx(Ne,{path:"favorite",element:f.jsx(WR,{})}),f.jsx(Ne,{path:"/catalog/new",element:f.jsx(R7,{})}),f.jsx(Ne,{path:"/catalog/sale",element:f.jsx(F7,{})}),f.jsx(Ne,{path:"checkout",element:f.jsx(MN,{})}),f.jsx(Ne,{path:"/order-confirmation",element:f.jsx(NN,{})}),f.jsx(Ne,{path:"about",element:f.jsx(QN,{})}),f.jsx(Ne,{path:"contacts",element:f.jsx(u7,{})}),f.jsx(Ne,{path:"delivery",element:f.jsx(KR,{})}),f.jsxs(Ne,{path:"account",element:f.jsx(K7,{isLoggedIn:o,children:f.jsx(TB,{})}),children:[f.jsx(Ne,{index:!0,element:f.jsx(gy,{})}),f.jsx(Ne,{path:"profile",element:f.jsx(gy,{})})]}),f.jsx(Ne,{path:"*",element:f.jsx(c5,{})})]})}),f.jsx(X7,{localFavorites:c,localCartItems:u,isOpen:t,mode:r,onClose:()=>n(!1),setMode:i})]})]})}wf.createRoot(document.getElementById("root")).render(f.jsx(MO,{store:nC,children:f.jsx(X.StrictMode,{children:f.jsx(jE,{basename:"/Didiv/",children:f.jsx($B,{})})})}));
