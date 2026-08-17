function fC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Na(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function jt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var gy={exports:{}},vc={},vy={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),pC=Symbol.for("react.portal"),hC=Symbol.for("react.fragment"),mC=Symbol.for("react.strict_mode"),gC=Symbol.for("react.profiler"),vC=Symbol.for("react.provider"),yC=Symbol.for("react.context"),xC=Symbol.for("react.forward_ref"),bC=Symbol.for("react.suspense"),wC=Symbol.for("react.memo"),SC=Symbol.for("react.lazy"),hg=Symbol.iterator;function _C(e){return e===null||typeof e!="object"?null:(e=hg&&e[hg]||e["@@iterator"],typeof e=="function"?e:null)}var yy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xy=Object.assign,by={};function co(e,t,n){this.props=e,this.context=t,this.refs=by,this.updater=n||yy}co.prototype.isReactComponent={};co.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};co.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wy(){}wy.prototype=co.prototype;function th(e,t,n){this.props=e,this.context=t,this.refs=by,this.updater=n||yy}var nh=th.prototype=new wy;nh.constructor=th;xy(nh,co.prototype);nh.isPureReactComponent=!0;var mg=Array.isArray,Sy=Object.prototype.hasOwnProperty,rh={current:null},_y={key:!0,ref:!0,__self:!0,__source:!0};function Cy(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Sy.call(t,r)&&!_y.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ba,type:e,key:o,ref:a,props:i,_owner:rh.current}}function CC(e,t){return{$$typeof:Ba,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ih(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ba}function EC(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gg=/\/+/g;function Vu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?EC(""+e.key):t.toString(36)}function Ns(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ba:case pC:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Vu(a,0):r,mg(i)?(n="",e!=null&&(n=e.replace(gg,"$&/")+"/"),Ns(i,t,n,"",function(c){return c})):i!=null&&(ih(i)&&(i=CC(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(gg,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",mg(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Vu(o,l);a+=Ns(o,t,n,s,i)}else if(s=_C(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Vu(o,l++),a+=Ns(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function as(e,t,n){if(e==null)return e;var r=[],i=0;return Ns(e,r,"","",function(o){return t.call(n,o,i++)}),r}function kC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},Bs={transition:null},TC={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Bs,ReactCurrentOwner:rh};re.Children={map:as,forEach:function(e,t,n){as(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return as(e,function(){t++}),t},toArray:function(e){return as(e,function(t){return t})||[]},only:function(e){if(!ih(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=co;re.Fragment=hC;re.Profiler=gC;re.PureComponent=th;re.StrictMode=mC;re.Suspense=bC;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TC;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xy({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=rh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Sy.call(t,s)&&!_y.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ba,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:yC,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vC,_context:e},e.Consumer=e};re.createElement=Cy;re.createFactory=function(e){var t=Cy.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:xC,render:e}};re.isValidElement=ih;re.lazy=function(e){return{$$typeof:SC,_payload:{_status:-1,_result:e},_init:kC}};re.memo=function(e,t){return{$$typeof:wC,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Bs.transition;Bs.transition={};try{e()}finally{Bs.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return yt.current.useCallback(e,t)};re.useContext=function(e){return yt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};re.useEffect=function(e,t){return yt.current.useEffect(e,t)};re.useId=function(){return yt.current.useId()};re.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return yt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};re.useRef=function(e){return yt.current.useRef(e)};re.useState=function(e){return yt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return yt.current.useTransition()};re.version="18.2.0";vy.exports=re;var x=vy.exports;const X=Na(x),gf=fC({__proto__:null,default:X},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PC=x,OC=Symbol.for("react.element"),jC=Symbol.for("react.fragment"),MC=Object.prototype.hasOwnProperty,$C=PC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IC={key:!0,ref:!0,__self:!0,__source:!0};function Ey(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)MC.call(t,r)&&!IC.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:OC,type:e,key:o,ref:a,props:i,_owner:$C.current}}vc.Fragment=jC;vc.jsx=Ey;vc.jsxs=Ey;gy.exports=vc;var f=gy.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}var fr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(fr||(fr={}));const vg="popstate";function DC(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return vf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hl(i)}return RC(t,n,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function oh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function LC(){return Math.random().toString(36).substr(2,8)}function yg(e,t){return{usr:e.state,key:e.key,idx:t}}function vf(e,t,n,r){return n===void 0&&(n=null),fa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?uo(t):t,{state:n,key:t&&t.key||r||LC()})}function hl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function uo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function RC(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=fr.Pop,s=null,c=d();c==null&&(c=0,a.replaceState(fa({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function u(){l=fr.Pop;let w=d(),h=w==null?null:w-c;c=w,s&&s({action:l,location:g.location,delta:h})}function y(w,h){l=fr.Push;let v=vf(g.location,w,h);n&&n(v,w),c=d()+1;let b=yg(v,c),S=g.createHref(v);try{a.pushState(b,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&s&&s({action:l,location:g.location,delta:1})}function p(w,h){l=fr.Replace;let v=vf(g.location,w,h);n&&n(v,w),c=d();let b=yg(v,c),S=g.createHref(v);a.replaceState(b,"",S),o&&s&&s({action:l,location:g.location,delta:0})}function m(w){let h=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof w=="string"?w:hl(w);return $e(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let g={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(vg,u),s=w,()=>{i.removeEventListener(vg,u),s=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let h=m(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:y,replace:p,go(w){return a.go(w)}};return g}var xg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xg||(xg={}));function AC(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?uo(t):t,i=ah(r.pathname||"/",n);if(i==null)return null;let o=ky(e);FC(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=qC(o[l],KC(i));return a}function ky(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&($e(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=vr([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&($e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ky(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:HC(c,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Ty(o.path))i(o,a,s)}),t}function Ty(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Ty(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function FC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:GC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zC=/^:\w+$/,NC=3,BC=2,VC=1,UC=10,WC=-2,bg=e=>e==="*";function HC(e,t){let n=e.split("/"),r=n.length;return n.some(bg)&&(r+=WC),t&&(r+=BC),n.filter(i=>!bg(i)).reduce((i,o)=>i+(zC.test(o)?NC:o===""?VC:UC),r)}function GC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function qC(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=YC({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!d)return null;Object.assign(r,d.params);let u=l.route;o.push({params:r,pathname:vr([i,d.pathname]),pathnameBase:eE(vr([i,d.pathnameBase])),route:u}),d.pathnameBase!=="/"&&(i=vr([i,d.pathnameBase]))}return o}function YC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=XC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,u)=>{if(d==="*"){let y=l[u]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return c[d]=QC(l[u]||"",d),c},{}),pathname:o,pathnameBase:a,pattern:e}}function XC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),oh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function KC(e){try{return decodeURI(e)}catch(t){return oh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function QC(e,t){try{return decodeURIComponent(e)}catch(n){return oh(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ah(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ZC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?uo(e):e;return{pathname:n?n.startsWith("/")?n:JC(n,t):t,search:tE(r),hash:nE(i)}}function JC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Uu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=uo(e):(i=fa({},e),$e(!i.pathname||!i.pathname.includes("?"),Uu("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),Uu("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),Uu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let u=t.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),u-=1;i.pathname=y.join("/")}l=u>=0?t[u]:"/"}let s=ZC(i,l),c=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const vr=e=>e.join("/").replace(/\/\/+/g,"/"),eE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function rE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Py=["post","put","patch","delete"];new Set(Py);const iE=["get",...Py];new Set(iE);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ml(){return ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ml.apply(this,arguments)}const ch=x.createContext(null),Oy=x.createContext(null),si=x.createContext(null),yc=x.createContext(null),In=x.createContext({outlet:null,matches:[],isDataRoute:!1}),jy=x.createContext(null);function oE(e,t){let{relative:n}=t===void 0?{}:t;fo()||$e(!1);let{basename:r,navigator:i}=x.useContext(si),{hash:o,pathname:a,search:l}=uh(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:vr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function fo(){return x.useContext(yc)!=null}function er(){return fo()||$e(!1),x.useContext(yc).location}function My(e){x.useContext(si).static||x.useLayoutEffect(e)}function Bt(){let{isDataRoute:e}=x.useContext(In);return e?bE():aE()}function aE(){fo()||$e(!1);let e=x.useContext(ch),{basename:t,navigator:n}=x.useContext(si),{matches:r}=x.useContext(In),{pathname:i}=er(),o=JSON.stringify(sh(r).map(s=>s.pathnameBase)),a=x.useRef(!1);return My(()=>{a.current=!0}),x.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=lh(s,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:vr([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,o,i,e])}const sE=x.createContext(null);function lE(e){let t=x.useContext(In).outlet;return t&&x.createElement(sE.Provider,{value:e},t)}function $y(){let{matches:e}=x.useContext(In),t=e[e.length-1];return t?t.params:{}}function uh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(In),{pathname:i}=er(),o=JSON.stringify(sh(r).map(a=>a.pathnameBase));return x.useMemo(()=>lh(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function cE(e,t){return uE(e,t)}function uE(e,t,n){fo()||$e(!1);let{navigator:r}=x.useContext(si),{matches:i}=x.useContext(In),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=er(),c;if(t){var d;let g=typeof t=="string"?uo(t):t;l==="/"||(d=g.pathname)!=null&&d.startsWith(l)||$e(!1),c=g}else c=s;let u=c.pathname||"/",y=l==="/"?u:u.slice(l.length)||"/",p=AC(e,{pathname:y}),m=mE(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:vr([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:vr([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,n);return t&&m?x.createElement(yc.Provider,{value:{location:ml({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:fr.Pop}},m):m}function dE(){let e=xE(),t=rE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,o)}const fE=x.createElement(dE,null);class pE extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(In.Provider,{value:this.props.routeContext},x.createElement(jy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hE(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(ch);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(In.Provider,{value:t},r)}function mE(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||$e(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,c)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,u=null;n&&(u=s.route.errorElement||fE);let y=t.concat(o.slice(0,c+1)),p=()=>{let m;return d?m=u:s.route.Component?m=x.createElement(s.route.Component,null):s.route.element?m=s.route.element:m=l,x.createElement(hE,{match:s,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:m})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?x.createElement(pE,{location:n.location,revalidation:n.revalidation,component:u,error:d,children:p(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):p()},null)}var Iy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Iy||{}),gl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gl||{});function gE(e){let t=x.useContext(ch);return t||$e(!1),t}function vE(e){let t=x.useContext(Oy);return t||$e(!1),t}function yE(e){let t=x.useContext(In);return t||$e(!1),t}function Dy(e){let t=yE(),n=t.matches[t.matches.length-1];return n.route.id||$e(!1),n.route.id}function xE(){var e;let t=x.useContext(jy),n=vE(gl.UseRouteError),r=Dy(gl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function bE(){let{router:e}=gE(Iy.UseNavigateStable),t=Dy(gl.UseNavigateStable),n=x.useRef(!1);return My(()=>{n.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ml({fromRouteId:t},o)))},[e,t])}function wE(e){let{to:t,replace:n,state:r,relative:i}=e;fo()||$e(!1);let{matches:o}=x.useContext(In),{pathname:a}=er(),l=Bt(),s=lh(t,sh(o).map(d=>d.pathnameBase),a,i==="path"),c=JSON.stringify(s);return x.useEffect(()=>l(JSON.parse(c),{replace:n,state:r,relative:i}),[l,c,i,n,r]),null}function Ly(e){return lE(e.context)}function ze(e){$e(!1)}function SE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=fr.Pop,navigator:o,static:a=!1}=e;fo()&&$e(!1);let l=t.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=uo(r));let{pathname:c="/",search:d="",hash:u="",state:y=null,key:p="default"}=r,m=x.useMemo(()=>{let g=ah(c,l);return g==null?null:{location:{pathname:g,search:d,hash:u,state:y,key:p},navigationType:i}},[l,c,d,u,y,p,i]);return m==null?null:x.createElement(si.Provider,{value:s},x.createElement(yc.Provider,{children:n,value:m}))}function _E(e){let{children:t,location:n}=e;return cE(yf(t),n)}new Promise(()=>{});function yf(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){n.push.apply(n,yf(r.props.children,o));return}r.type!==ze&&$e(!1),!r.props.index||!r.props.children||$e(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=yf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vl.apply(this,arguments)}function Ry(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function CE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function EE(e,t){return e.button===0&&(!t||t==="_self")&&!CE(e)}function xf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function kE(e,t){let n=xf(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const TE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],PE=["aria-current","caseSensitive","className","end","style","to","children"],OE="startTransition",wg=gf[OE];function jE(e){let{basename:t,children:n,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=DC({window:i,v5Compat:!0}));let a=o.current,[l,s]=x.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},d=x.useCallback(u=>{c&&wg?wg(()=>s(u)):s(u)},[s,c]);return x.useLayoutEffect(()=>a.listen(d),[a,d]),x.createElement(SE,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const ME=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$E=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:d}=t,u=Ry(t,TE),{basename:y}=x.useContext(si),p,m=!1;if(typeof c=="string"&&$E.test(c)&&(p=c,ME))try{let v=new URL(window.location.href),b=c.startsWith("//")?new URL(v.protocol+c):new URL(c),S=ah(b.pathname,y);b.origin===v.origin&&S!=null?c=S+b.search+b.hash:m=!0}catch{}let g=oE(c,{relative:i}),w=IE(c,{replace:a,state:l,target:s,preventScrollReset:d,relative:i});function h(v){r&&r(v),v.defaultPrevented||w(v)}return x.createElement("a",vl({},u,{href:p||g,onClick:m||o?r:h,ref:n,target:s}))}),Ay=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,children:c}=t,d=Ry(t,PE),u=uh(s,{relative:d.relative}),y=er(),p=x.useContext(Oy),{navigator:m}=x.useContext(si),g=m.encodeLocation?m.encodeLocation(u).pathname:u.pathname,w=y.pathname,h=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(w=w.toLowerCase(),h=h?h.toLowerCase():null,g=g.toLowerCase());let v=w===g||!a&&w.startsWith(g)&&w.charAt(g.length)==="/",b=h!=null&&(h===g||!a&&h.startsWith(g)&&h.charAt(g.length)==="/"),S=v?r:void 0,E;typeof o=="function"?E=o({isActive:v,isPending:b}):E=[o,v?"active":null,b?"pending":null].filter(Boolean).join(" ");let P=typeof l=="function"?l({isActive:v,isPending:b}):l;return x.createElement(Te,vl({},d,{"aria-current":S,className:E,ref:n,style:P,to:s}),typeof c=="function"?c({isActive:v,isPending:b}):c)});var Sg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Sg||(Sg={}));var _g;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_g||(_g={}));function IE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Bt(),s=er(),c=uh(e,{relative:a});return x.useCallback(d=>{if(EE(d,n)){d.preventDefault();let u=r!==void 0?r:hl(s)===hl(c);l(e,{replace:u,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}function DE(e){let t=x.useRef(xf(e)),n=x.useRef(!1),r=er(),i=x.useMemo(()=>kE(r.search,n.current?null:t.current),[r.search]),o=Bt(),a=x.useCallback((l,s)=>{const c=xf(typeof l=="function"?l(i):l);n.current=!0,o("?"+c,s)},[o,i]);return[i,a]}var bf={},Fy={exports:{}},Vt={},zy={exports:{}},Ny={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,I){var z=T.length;T.push(I);e:for(;0<z;){var B=z-1>>>1,N=T[B];if(0<i(N,I))T[B]=I,T[z]=N,z=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var I=T[0],z=T.pop();if(z!==I){T[0]=z;e:for(var B=0,N=T.length,U=N>>>1;B<U;){var G=2*(B+1)-1,W=T[G],Y=G+1,ee=T[Y];if(0>i(W,z))Y<N&&0>i(ee,W)?(T[B]=ee,T[Y]=z,B=Y):(T[B]=W,T[G]=z,B=G);else if(Y<N&&0>i(ee,z))T[B]=ee,T[Y]=z,B=Y;else break e}}return I}function i(T,I){var z=T.sortIndex-I.sortIndex;return z!==0?z:T.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],d=1,u=null,y=3,p=!1,m=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(T){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=T)r(c),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(c)}}function S(T){if(g=!1,b(T),!m)if(n(s)!==null)m=!0,L(E);else{var I=n(c);I!==null&&O(S,I.startTime-T)}}function E(T,I){m=!1,g&&(g=!1,h(C),C=-1),p=!0;var z=y;try{for(b(I),u=n(s);u!==null&&(!(u.expirationTime>I)||T&&!D());){var B=u.callback;if(typeof B=="function"){u.callback=null,y=u.priorityLevel;var N=B(u.expirationTime<=I);I=e.unstable_now(),typeof N=="function"?u.callback=N:u===n(s)&&r(s),b(I)}else r(s);u=n(s)}if(u!==null)var U=!0;else{var G=n(c);G!==null&&O(S,G.startTime-I),U=!1}return U}finally{u=null,y=z,p=!1}}var P=!1,k=null,C=-1,M=5,$=-1;function D(){return!(e.unstable_now()-$<M)}function R(){if(k!==null){var T=e.unstable_now();$=T;var I=!0;try{I=k(!0,T)}finally{I?j():(P=!1,k=null)}}else P=!1}var j;if(typeof v=="function")j=function(){v(R)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,A=F.port2;F.port1.onmessage=R,j=function(){A.postMessage(null)}}else j=function(){w(R,0)};function L(T){k=T,P||(P=!0,j())}function O(T,I){C=w(function(){T(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,L(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(y){case 1:case 2:case 3:var I=3;break;default:I=y}var z=y;y=I;try{return T()}finally{y=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,I){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=y;y=T;try{return I()}finally{y=z}},e.unstable_scheduleCallback=function(T,I,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,T){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=z+N,T={id:d++,callback:I,priorityLevel:T,startTime:z,expirationTime:N,sortIndex:-1},z>B?(T.sortIndex=z,t(c,T),n(s)===null&&T===n(c)&&(g?(h(C),C=-1):g=!0,O(S,z-B))):(T.sortIndex=N,t(s,T),m||p||(m=!0,L(E))),T},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(T){var I=y;return function(){var z=y;y=I;try{return T.apply(this,arguments)}finally{y=z}}}})(Ny);zy.exports=Ny;var LE=zy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By=x,zt=LE;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vy=new Set,pa={};function li(e,t){qi(e,t),qi(e+"Capture",t)}function qi(e,t){for(pa[e]=t,e=0;e<t.length;e++)Vy.add(t[e])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wf=Object.prototype.hasOwnProperty,RE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cg={},Eg={};function AE(e){return wf.call(Eg,e)?!0:wf.call(Cg,e)?!1:RE.test(e)?Eg[e]=!0:(Cg[e]=!0,!1)}function FE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zE(e,t,n,r){if(t===null||typeof t>"u"||FE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new xt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new xt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new xt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new xt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new xt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new xt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new xt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new xt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new xt(e,5,!1,e.toLowerCase(),null,!1,!1)});var dh=/[\-:]([a-z])/g;function fh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dh,fh);nt[t]=new xt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dh,fh);nt[t]=new xt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dh,fh);nt[t]=new xt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new xt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new xt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ph(e,t,n,r){var i=nt.hasOwnProperty(t)?nt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zE(t,n,i,r)&&(n=null),r||i===null?AE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tr=By.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ss=Symbol.for("react.element"),ki=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),Sf=Symbol.for("react.profiler"),Uy=Symbol.for("react.provider"),Wy=Symbol.for("react.context"),mh=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),Cf=Symbol.for("react.suspense_list"),gh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Hy=Symbol.for("react.offscreen"),kg=Symbol.iterator;function To(e){return e===null||typeof e!="object"?null:(e=kg&&e[kg]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Wu;function Wo(e){if(Wu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wu=t&&t[1]||""}return`
`+Wu+e}var Hu=!1;function Gu(e,t){if(!e||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wo(e):""}function NE(e){switch(e.tag){case 5:return Wo(e.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return e=Gu(e.type,!1),e;case 11:return e=Gu(e.type.render,!1),e;case 1:return e=Gu(e.type,!0),e;default:return""}}function Ef(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ti:return"Fragment";case ki:return"Portal";case Sf:return"Profiler";case hh:return"StrictMode";case _f:return"Suspense";case Cf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wy:return(e.displayName||"Context")+".Consumer";case Uy:return(e._context.displayName||"Context")+".Provider";case mh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gh:return t=e.displayName||null,t!==null?t:Ef(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return Ef(e(t))}catch{}}return null}function BE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(t);case 8:return t===hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function VE(e){var t=Gy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ls(e){e._valueTracker||(e._valueTracker=VE(e))}function qy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kf(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yy(e,t){t=t.checked,t!=null&&ph(e,"checked",t,!1)}function Tf(e,t){Yy(e,t);var n=Tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pf(e,t.type,Tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pf(e,t,n){(t!=="number"||yl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ho=Array.isArray;function Fi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Of(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Og(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Ho(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tr(n)}}function Xy(e,t){var n=Tr(t.value),r=Tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ky(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ky(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cs,Qy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cs=cs||document.createElement("div"),cs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ha(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UE=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(e){UE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jo[t]=Jo[e]})});function Zy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jo.hasOwnProperty(e)&&Jo[e]?(""+t).trim():t+"px"}function Jy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var WE=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(e,t){if(t){if(WE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function $f(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var If=null;function vh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Df=null,zi=null,Ni=null;function Mg(e){if(e=Wa(e)){if(typeof Df!="function")throw Error(V(280));var t=e.stateNode;t&&(t=_c(t),Df(e.stateNode,e.type,t))}}function ex(e){zi?Ni?Ni.push(e):Ni=[e]:zi=e}function tx(){if(zi){var e=zi,t=Ni;if(Ni=zi=null,Mg(e),t)for(e=0;e<t.length;e++)Mg(t[e])}}function nx(e,t){return e(t)}function rx(){}var qu=!1;function ix(e,t,n){if(qu)return e(t,n);qu=!0;try{return nx(e,t,n)}finally{qu=!1,(zi!==null||Ni!==null)&&(rx(),tx())}}function ma(e,t){var n=e.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var Lf=!1;if(Yn)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{Lf=!1}function HE(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ea=!1,xl=null,bl=!1,Rf=null,GE={onError:function(e){ea=!0,xl=e}};function qE(e,t,n,r,i,o,a,l,s){ea=!1,xl=null,HE.apply(GE,arguments)}function YE(e,t,n,r,i,o,a,l,s){if(qE.apply(this,arguments),ea){if(ea){var c=xl;ea=!1,xl=null}else throw Error(V(198));bl||(bl=!0,Rf=c)}}function ci(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ox(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $g(e){if(ci(e)!==e)throw Error(V(188))}function XE(e){var t=e.alternate;if(!t){if(t=ci(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $g(i),e;if(o===r)return $g(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function ax(e){return e=XE(e),e!==null?sx(e):null}function sx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sx(e);if(t!==null)return t;e=e.sibling}return null}var lx=zt.unstable_scheduleCallback,Ig=zt.unstable_cancelCallback,KE=zt.unstable_shouldYield,QE=zt.unstable_requestPaint,Me=zt.unstable_now,ZE=zt.unstable_getCurrentPriorityLevel,yh=zt.unstable_ImmediatePriority,cx=zt.unstable_UserBlockingPriority,wl=zt.unstable_NormalPriority,JE=zt.unstable_LowPriority,ux=zt.unstable_IdlePriority,xc=null,Tn=null;function ek(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(xc,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:rk,tk=Math.log,nk=Math.LN2;function rk(e){return e>>>=0,e===0?32:31-(tk(e)/nk|0)|0}var us=64,ds=4194304;function Go(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Go(l):(o&=a,o!==0&&(r=Go(o)))}else a=n&~i,a!==0?r=Go(a):o!==0&&(r=Go(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dn(t),i=1<<n,r|=e[n],t&=~i;return r}function ik(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ok(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-dn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=ik(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Af(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dx(){var e=us;return us<<=1,!(us&4194240)&&(us=64),e}function Yu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Va(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dn(t),e[t]=n}function ak(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function fx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var px,bh,hx,mx,gx,Ff=!1,fs=[],yr=null,xr=null,br=null,ga=new Map,va=new Map,ur=[],sk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dg(e,t){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":ga.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(t.pointerId)}}function Oo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wa(t),t!==null&&bh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lk(e,t,n,r,i){switch(t){case"focusin":return yr=Oo(yr,e,t,n,r,i),!0;case"dragenter":return xr=Oo(xr,e,t,n,r,i),!0;case"mouseover":return br=Oo(br,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ga.set(o,Oo(ga.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,va.set(o,Oo(va.get(o)||null,e,t,n,r,i)),!0}return!1}function vx(e){var t=Ur(e.target);if(t!==null){var n=ci(t);if(n!==null){if(t=n.tag,t===13){if(t=ox(n),t!==null){e.blockedOn=t,gx(e.priority,function(){hx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);If=r,n.target.dispatchEvent(r),If=null}else return t=Wa(n),t!==null&&bh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lg(e,t,n){Vs(e)&&n.delete(t)}function ck(){Ff=!1,yr!==null&&Vs(yr)&&(yr=null),xr!==null&&Vs(xr)&&(xr=null),br!==null&&Vs(br)&&(br=null),ga.forEach(Lg),va.forEach(Lg)}function jo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ff||(Ff=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,ck)))}function ya(e){function t(i){return jo(i,e)}if(0<fs.length){jo(fs[0],e);for(var n=1;n<fs.length;n++){var r=fs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yr!==null&&jo(yr,e),xr!==null&&jo(xr,e),br!==null&&jo(br,e),ga.forEach(t),va.forEach(t),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)vx(n),n.blockedOn===null&&ur.shift()}var Bi=tr.ReactCurrentBatchConfig,_l=!0;function uk(e,t,n,r){var i=me,o=Bi.transition;Bi.transition=null;try{me=1,wh(e,t,n,r)}finally{me=i,Bi.transition=o}}function dk(e,t,n,r){var i=me,o=Bi.transition;Bi.transition=null;try{me=4,wh(e,t,n,r)}finally{me=i,Bi.transition=o}}function wh(e,t,n,r){if(_l){var i=zf(e,t,n,r);if(i===null)id(e,t,r,Cl,n),Dg(e,r);else if(lk(i,e,t,n,r))r.stopPropagation();else if(Dg(e,r),t&4&&-1<sk.indexOf(e)){for(;i!==null;){var o=Wa(i);if(o!==null&&px(o),o=zf(e,t,n,r),o===null&&id(e,t,r,Cl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else id(e,t,r,null,n)}}var Cl=null;function zf(e,t,n,r){if(Cl=null,e=vh(r),e=Ur(e),e!==null)if(t=ci(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ox(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Cl=e,null}function yx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZE()){case yh:return 1;case cx:return 4;case wl:case JE:return 16;case ux:return 536870912;default:return 16}default:return 16}}var pr=null,Sh=null,Us=null;function xx(){if(Us)return Us;var e,t=Sh,n=t.length,r,i="value"in pr?pr.value:pr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Us=i.slice(e,1<r?1-r:void 0)}function Ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ps(){return!0}function Rg(){return!1}function Ut(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ps:Rg,this.isPropagationStopped=Rg,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),t}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=Ut(po),Ua=Pe({},po,{view:0,detail:0}),fk=Ut(Ua),Xu,Ku,Mo,bc=Pe({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ch,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(Xu=e.screenX-Mo.screenX,Ku=e.screenY-Mo.screenY):Ku=Xu=0,Mo=e),Xu)},movementY:function(e){return"movementY"in e?e.movementY:Ku}}),Ag=Ut(bc),pk=Pe({},bc,{dataTransfer:0}),hk=Ut(pk),mk=Pe({},Ua,{relatedTarget:0}),Qu=Ut(mk),gk=Pe({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),vk=Ut(gk),yk=Pe({},po,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xk=Ut(yk),bk=Pe({},po,{data:0}),Fg=Ut(bk),wk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_k={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ck(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_k[e])?!!t[e]:!1}function Ch(){return Ck}var Ek=Pe({},Ua,{key:function(e){if(e.key){var t=wk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ch,charCode:function(e){return e.type==="keypress"?Ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kk=Ut(Ek),Tk=Pe({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zg=Ut(Tk),Pk=Pe({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ch}),Ok=Ut(Pk),jk=Pe({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mk=Ut(jk),$k=Pe({},bc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ik=Ut($k),Dk=[9,13,27,32],Eh=Yn&&"CompositionEvent"in window,ta=null;Yn&&"documentMode"in document&&(ta=document.documentMode);var Lk=Yn&&"TextEvent"in window&&!ta,bx=Yn&&(!Eh||ta&&8<ta&&11>=ta),Ng=String.fromCharCode(32),Bg=!1;function wx(e,t){switch(e){case"keyup":return Dk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pi=!1;function Rk(e,t){switch(e){case"compositionend":return Sx(t);case"keypress":return t.which!==32?null:(Bg=!0,Ng);case"textInput":return e=t.data,e===Ng&&Bg?null:e;default:return null}}function Ak(e,t){if(Pi)return e==="compositionend"||!Eh&&wx(e,t)?(e=xx(),Us=Sh=pr=null,Pi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bx&&t.locale!=="ko"?null:t.data;default:return null}}var Fk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fk[e.type]:t==="textarea"}function _x(e,t,n,r){ex(r),t=El(t,"onChange"),0<t.length&&(n=new _h("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var na=null,xa=null;function zk(e){Dx(e,0)}function wc(e){var t=Mi(e);if(qy(t))return e}function Nk(e,t){if(e==="change")return t}var Cx=!1;if(Yn){var Zu;if(Yn){var Ju="oninput"in document;if(!Ju){var Ug=document.createElement("div");Ug.setAttribute("oninput","return;"),Ju=typeof Ug.oninput=="function"}Zu=Ju}else Zu=!1;Cx=Zu&&(!document.documentMode||9<document.documentMode)}function Wg(){na&&(na.detachEvent("onpropertychange",Ex),xa=na=null)}function Ex(e){if(e.propertyName==="value"&&wc(xa)){var t=[];_x(t,xa,e,vh(e)),ix(zk,t)}}function Bk(e,t,n){e==="focusin"?(Wg(),na=t,xa=n,na.attachEvent("onpropertychange",Ex)):e==="focusout"&&Wg()}function Vk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wc(xa)}function Uk(e,t){if(e==="click")return wc(t)}function Wk(e,t){if(e==="input"||e==="change")return wc(t)}function Hk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:Hk;function ba(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wf.call(t,i)||!gn(e[i],t[i]))return!1}return!0}function Hg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gg(e,t){var n=Hg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hg(n)}}function kx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tx(){for(var e=window,t=yl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yl(e.document)}return t}function kh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gk(e){var t=Tx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kx(n.ownerDocument.documentElement,n)){if(r!==null&&kh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Gg(n,o);var a=Gg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qk=Yn&&"documentMode"in document&&11>=document.documentMode,Oi=null,Nf=null,ra=null,Bf=!1;function qg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bf||Oi==null||Oi!==yl(r)||(r=Oi,"selectionStart"in r&&kh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&ba(ra,r)||(ra=r,r=El(Nf,"onSelect"),0<r.length&&(t=new _h("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Oi)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ji={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},ed={},Px={};Yn&&(Px=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function Sc(e){if(ed[e])return ed[e];if(!ji[e])return e;var t=ji[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Px)return ed[e]=t[n];return e}var Ox=Sc("animationend"),jx=Sc("animationiteration"),Mx=Sc("animationstart"),$x=Sc("transitionend"),Ix=new Map,Yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){Ix.set(e,t),li(t,[e])}for(var td=0;td<Yg.length;td++){var nd=Yg[td],Yk=nd.toLowerCase(),Xk=nd[0].toUpperCase()+nd.slice(1);jr(Yk,"on"+Xk)}jr(Ox,"onAnimationEnd");jr(jx,"onAnimationIteration");jr(Mx,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr($x,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kk=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Xg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,YE(r,t,void 0,e),e.currentTarget=null}function Dx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Xg(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Xg(i,l,c),o=s}}}if(bl)throw e=Rf,bl=!1,Rf=null,e}function ye(e,t){var n=t[Gf];n===void 0&&(n=t[Gf]=new Set);var r=e+"__bubble";n.has(r)||(Lx(t,e,2,!1),n.add(r))}function rd(e,t,n){var r=0;t&&(r|=4),Lx(n,e,r,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function wa(e){if(!e[ms]){e[ms]=!0,Vy.forEach(function(n){n!=="selectionchange"&&(Kk.has(n)||rd(n,!1,e),rd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,rd("selectionchange",!1,t))}}function Lx(e,t,n,r){switch(yx(t)){case 1:var i=uk;break;case 4:i=dk;break;default:i=wh}n=i.bind(null,t,n,e),i=void 0,!Lf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function id(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Ur(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ix(function(){var c=o,d=vh(n),u=[];e:{var y=Ix.get(e);if(y!==void 0){var p=_h,m=e;switch(e){case"keypress":if(Ws(n)===0)break e;case"keydown":case"keyup":p=kk;break;case"focusin":m="focus",p=Qu;break;case"focusout":m="blur",p=Qu;break;case"beforeblur":case"afterblur":p=Qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=hk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ok;break;case Ox:case jx:case Mx:p=vk;break;case $x:p=Mk;break;case"scroll":p=fk;break;case"wheel":p=Ik;break;case"copy":case"cut":case"paste":p=xk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=zg}var g=(t&4)!==0,w=!g&&e==="scroll",h=g?y!==null?y+"Capture":null:y;g=[];for(var v=c,b;v!==null;){b=v;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,h!==null&&(S=ma(v,h),S!=null&&g.push(Sa(v,S,b)))),w)break;v=v.return}0<g.length&&(y=new p(y,m,null,n,d),u.push({event:y,listeners:g}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",y&&n!==If&&(m=n.relatedTarget||n.fromElement)&&(Ur(m)||m[Xn]))break e;if((p||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?Ur(m):null,m!==null&&(w=ci(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(g=Ag,S="onMouseLeave",h="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(g=zg,S="onPointerLeave",h="onPointerEnter",v="pointer"),w=p==null?y:Mi(p),b=m==null?y:Mi(m),y=new g(S,v+"leave",p,n,d),y.target=w,y.relatedTarget=b,S=null,Ur(d)===c&&(g=new g(h,v+"enter",m,n,d),g.target=b,g.relatedTarget=w,S=g),w=S,p&&m)t:{for(g=p,h=m,v=0,b=g;b;b=pi(b))v++;for(b=0,S=h;S;S=pi(S))b++;for(;0<v-b;)g=pi(g),v--;for(;0<b-v;)h=pi(h),b--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=pi(g),h=pi(h)}g=null}else g=null;p!==null&&Kg(u,y,p,g,!1),m!==null&&w!==null&&Kg(u,w,m,g,!0)}}e:{if(y=c?Mi(c):window,p=y.nodeName&&y.nodeName.toLowerCase(),p==="select"||p==="input"&&y.type==="file")var E=Nk;else if(Vg(y))if(Cx)E=Wk;else{E=Vk;var P=Bk}else(p=y.nodeName)&&p.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(E=Uk);if(E&&(E=E(e,c))){_x(u,E,n,d);break e}P&&P(e,y,c),e==="focusout"&&(P=y._wrapperState)&&P.controlled&&y.type==="number"&&Pf(y,"number",y.value)}switch(P=c?Mi(c):window,e){case"focusin":(Vg(P)||P.contentEditable==="true")&&(Oi=P,Nf=c,ra=null);break;case"focusout":ra=Nf=Oi=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,qg(u,n,d);break;case"selectionchange":if(qk)break;case"keydown":case"keyup":qg(u,n,d)}var k;if(Eh)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Pi?wx(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(bx&&n.locale!=="ko"&&(Pi||C!=="onCompositionStart"?C==="onCompositionEnd"&&Pi&&(k=xx()):(pr=d,Sh="value"in pr?pr.value:pr.textContent,Pi=!0)),P=El(c,C),0<P.length&&(C=new Fg(C,e,null,n,d),u.push({event:C,listeners:P}),k?C.data=k:(k=Sx(n),k!==null&&(C.data=k)))),(k=Lk?Rk(e,n):Ak(e,n))&&(c=El(c,"onBeforeInput"),0<c.length&&(d=new Fg("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=k))}Dx(u,t)})}function Sa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function El(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ma(e,n),o!=null&&r.unshift(Sa(e,o,i)),o=ma(e,t),o!=null&&r.push(Sa(e,o,i))),e=e.return}return r}function pi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=ma(n,o),s!=null&&a.unshift(Sa(n,s,l))):i||(s=ma(n,o),s!=null&&a.push(Sa(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Qk=/\r\n?/g,Zk=/\u0000|\uFFFD/g;function Qg(e){return(typeof e=="string"?e:""+e).replace(Qk,`
`).replace(Zk,"")}function gs(e,t,n){if(t=Qg(t),Qg(e)!==t&&n)throw Error(V(425))}function kl(){}var Vf=null,Uf=null;function Wf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hf=typeof setTimeout=="function"?setTimeout:void 0,Jk=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,eT=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(e){return Zg.resolve(null).then(e).catch(tT)}:Hf;function tT(e){setTimeout(function(){throw e})}function od(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ya(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ya(t)}function wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ho=Math.random().toString(36).slice(2),En="__reactFiber$"+ho,_a="__reactProps$"+ho,Xn="__reactContainer$"+ho,Gf="__reactEvents$"+ho,nT="__reactListeners$"+ho,rT="__reactHandles$"+ho;function Ur(e){var t=e[En];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xn]||n[En]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jg(e);e!==null;){if(n=e[En])return n;e=Jg(e)}return t}e=n,n=e.parentNode}return null}function Wa(e){return e=e[En]||e[Xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function _c(e){return e[_a]||null}var qf=[],$i=-1;function Mr(e){return{current:e}}function be(e){0>$i||(e.current=qf[$i],qf[$i]=null,$i--)}function ve(e,t){$i++,qf[$i]=e.current,e.current=t}var Pr={},ut=Mr(Pr),kt=Mr(!1),Kr=Pr;function Yi(e,t){var n=e.type.contextTypes;if(!n)return Pr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(e){return e=e.childContextTypes,e!=null}function Tl(){be(kt),be(ut)}function e0(e,t,n){if(ut.current!==Pr)throw Error(V(168));ve(ut,t),ve(kt,n)}function Rx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,BE(e)||"Unknown",i));return Pe({},n,r)}function Pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pr,Kr=ut.current,ve(ut,e),ve(kt,kt.current),!0}function t0(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Rx(e,t,Kr),r.__reactInternalMemoizedMergedChildContext=e,be(kt),be(ut),ve(ut,e)):be(kt),ve(kt,n)}var Nn=null,Cc=!1,ad=!1;function Ax(e){Nn===null?Nn=[e]:Nn.push(e)}function iT(e){Cc=!0,Ax(e)}function $r(){if(!ad&&Nn!==null){ad=!0;var e=0,t=me;try{var n=Nn;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nn=null,Cc=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(e+1)),lx(yh,$r),i}finally{me=t,ad=!1}}return null}var Ii=[],Di=0,Ol=null,jl=0,Gt=[],qt=0,Qr=null,Un=1,Wn="";function Ar(e,t){Ii[Di++]=jl,Ii[Di++]=Ol,Ol=e,jl=t}function Fx(e,t,n){Gt[qt++]=Un,Gt[qt++]=Wn,Gt[qt++]=Qr,Qr=e;var r=Un;e=Wn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var o=32-dn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Un=1<<32-dn(t)+i|n<<i|r,Wn=o+e}else Un=1<<o|n<<i|r,Wn=e}function Th(e){e.return!==null&&(Ar(e,1),Fx(e,1,0))}function Ph(e){for(;e===Ol;)Ol=Ii[--Di],Ii[Di]=null,jl=Ii[--Di],Ii[Di]=null;for(;e===Qr;)Qr=Gt[--qt],Gt[qt]=null,Wn=Gt[--qt],Gt[qt]=null,Un=Gt[--qt],Gt[qt]=null}var At=null,Lt=null,Ce=!1,cn=null;function zx(e,t){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function n0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,At=e,Lt=wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,At=e,Lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qr!==null?{id:Un,overflow:Wn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,At=e,Lt=null,!0):!1;default:return!1}}function Yf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xf(e){if(Ce){var t=Lt;if(t){var n=t;if(!n0(e,t)){if(Yf(e))throw Error(V(418));t=wr(n.nextSibling);var r=At;t&&n0(e,t)?zx(r,n):(e.flags=e.flags&-4097|2,Ce=!1,At=e)}}else{if(Yf(e))throw Error(V(418));e.flags=e.flags&-4097|2,Ce=!1,At=e}}}function r0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;At=e}function vs(e){if(e!==At)return!1;if(!Ce)return r0(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wf(e.type,e.memoizedProps)),t&&(t=Lt)){if(Yf(e))throw Nx(),Error(V(418));for(;t;)zx(e,t),t=wr(t.nextSibling)}if(r0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Lt=wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Lt=null}}else Lt=At?wr(e.stateNode.nextSibling):null;return!0}function Nx(){for(var e=Lt;e;)e=wr(e.nextSibling)}function Xi(){Lt=At=null,Ce=!1}function Oh(e){cn===null?cn=[e]:cn.push(e)}var oT=tr.ReactCurrentBatchConfig;function an(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ml=Mr(null),$l=null,Li=null,jh=null;function Mh(){jh=Li=$l=null}function $h(e){var t=Ml.current;be(Ml),e._currentValue=t}function Kf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vi(e,t){$l=e,jh=Li=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function Kt(e){var t=e._currentValue;if(jh!==e)if(e={context:e,memoizedValue:t,next:null},Li===null){if($l===null)throw Error(V(308));Li=e,$l.dependencies={lanes:0,firstContext:e}}else Li=Li.next=e;return t}var Wr=null;function Ih(e){Wr===null?Wr=[e]:Wr.push(e)}function Bx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ih(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kn(e,r)}function Kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cr=!1;function Dh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ih(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kn(e,n)}function Hs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xh(e,n)}}function i0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Il(e,t,n,r){var i=e.updateQueue;cr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(o!==null){var u=i.baseState;a=0,d=c=s=null,l=o;do{var y=l.lane,p=l.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,g=l;switch(y=t,p=n,g.tag){case 1:if(m=g.payload,typeof m=="function"){u=m.call(p,u,y);break e}u=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,y=typeof m=="function"?m.call(p,u,y):m,y==null)break e;u=Pe({},u,y);break e;case 2:cr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else p={eventTime:p,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=p,s=u):d=d.next=p,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(d===null&&(s=u),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Jr|=a,e.lanes=a,e.memoizedState=u}}function o0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Ux=new By.Component().refs;function Qf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ec={isMounted:function(e){return(e=e._reactInternals)?ci(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=Cr(e),o=Hn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(fn(t,e,i,r),Hs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=Cr(e),o=Hn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(fn(t,e,i,r),Hs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=Cr(e),i=Hn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sr(e,i,r),t!==null&&(fn(t,e,r,n),Hs(t,e,r))}};function a0(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ba(n,r)||!ba(i,o):!0}function Wx(e,t,n){var r=!1,i=Pr,o=t.contextType;return typeof o=="object"&&o!==null?o=Kt(o):(i=Tt(t)?Kr:ut.current,r=t.contextTypes,o=(r=r!=null)?Yi(e,i):Pr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ec,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function s0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function Zf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ux,Dh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Kt(o):(o=Tt(t)?Kr:ut.current,i.context=Yi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ec.enqueueReplaceState(i,i.state,null),Il(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $o(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Ux&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ys(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function l0(e){var t=e._init;return t(e._payload)}function Hx(e){function t(h,v){if(e){var b=h.deletions;b===null?(h.deletions=[v],h.flags|=16):b.push(v)}}function n(h,v){if(!e)return null;for(;v!==null;)t(h,v),v=v.sibling;return null}function r(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function i(h,v){return h=Er(h,v),h.index=0,h.sibling=null,h}function o(h,v,b){return h.index=b,e?(b=h.alternate,b!==null?(b=b.index,b<v?(h.flags|=2,v):b):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,v,b,S){return v===null||v.tag!==6?(v=pd(b,h.mode,S),v.return=h,v):(v=i(v,b),v.return=h,v)}function s(h,v,b,S){var E=b.type;return E===Ti?d(h,v,b.props.children,S,b.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lr&&l0(E)===v.type)?(S=i(v,b.props),S.ref=$o(h,v,b),S.return=h,S):(S=Qs(b.type,b.key,b.props,null,h.mode,S),S.ref=$o(h,v,b),S.return=h,S)}function c(h,v,b,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=hd(b,h.mode,S),v.return=h,v):(v=i(v,b.children||[]),v.return=h,v)}function d(h,v,b,S,E){return v===null||v.tag!==7?(v=Yr(b,h.mode,S,E),v.return=h,v):(v=i(v,b),v.return=h,v)}function u(h,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=pd(""+v,h.mode,b),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ss:return b=Qs(v.type,v.key,v.props,null,h.mode,b),b.ref=$o(h,null,v),b.return=h,b;case ki:return v=hd(v,h.mode,b),v.return=h,v;case lr:var S=v._init;return u(h,S(v._payload),b)}if(Ho(v)||To(v))return v=Yr(v,h.mode,b,null),v.return=h,v;ys(h,v)}return null}function y(h,v,b,S){var E=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return E!==null?null:l(h,v,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ss:return b.key===E?s(h,v,b,S):null;case ki:return b.key===E?c(h,v,b,S):null;case lr:return E=b._init,y(h,v,E(b._payload),S)}if(Ho(b)||To(b))return E!==null?null:d(h,v,b,S,null);ys(h,b)}return null}function p(h,v,b,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(b)||null,l(v,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ss:return h=h.get(S.key===null?b:S.key)||null,s(v,h,S,E);case ki:return h=h.get(S.key===null?b:S.key)||null,c(v,h,S,E);case lr:var P=S._init;return p(h,v,b,P(S._payload),E)}if(Ho(S)||To(S))return h=h.get(b)||null,d(v,h,S,E,null);ys(v,S)}return null}function m(h,v,b,S){for(var E=null,P=null,k=v,C=v=0,M=null;k!==null&&C<b.length;C++){k.index>C?(M=k,k=null):M=k.sibling;var $=y(h,k,b[C],S);if($===null){k===null&&(k=M);break}e&&k&&$.alternate===null&&t(h,k),v=o($,v,C),P===null?E=$:P.sibling=$,P=$,k=M}if(C===b.length)return n(h,k),Ce&&Ar(h,C),E;if(k===null){for(;C<b.length;C++)k=u(h,b[C],S),k!==null&&(v=o(k,v,C),P===null?E=k:P.sibling=k,P=k);return Ce&&Ar(h,C),E}for(k=r(h,k);C<b.length;C++)M=p(k,h,C,b[C],S),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?C:M.key),v=o(M,v,C),P===null?E=M:P.sibling=M,P=M);return e&&k.forEach(function(D){return t(h,D)}),Ce&&Ar(h,C),E}function g(h,v,b,S){var E=To(b);if(typeof E!="function")throw Error(V(150));if(b=E.call(b),b==null)throw Error(V(151));for(var P=E=null,k=v,C=v=0,M=null,$=b.next();k!==null&&!$.done;C++,$=b.next()){k.index>C?(M=k,k=null):M=k.sibling;var D=y(h,k,$.value,S);if(D===null){k===null&&(k=M);break}e&&k&&D.alternate===null&&t(h,k),v=o(D,v,C),P===null?E=D:P.sibling=D,P=D,k=M}if($.done)return n(h,k),Ce&&Ar(h,C),E;if(k===null){for(;!$.done;C++,$=b.next())$=u(h,$.value,S),$!==null&&(v=o($,v,C),P===null?E=$:P.sibling=$,P=$);return Ce&&Ar(h,C),E}for(k=r(h,k);!$.done;C++,$=b.next())$=p(k,h,C,$.value,S),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?C:$.key),v=o($,v,C),P===null?E=$:P.sibling=$,P=$);return e&&k.forEach(function(R){return t(h,R)}),Ce&&Ar(h,C),E}function w(h,v,b,S){if(typeof b=="object"&&b!==null&&b.type===Ti&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ss:e:{for(var E=b.key,P=v;P!==null;){if(P.key===E){if(E=b.type,E===Ti){if(P.tag===7){n(h,P.sibling),v=i(P,b.props.children),v.return=h,h=v;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lr&&l0(E)===P.type){n(h,P.sibling),v=i(P,b.props),v.ref=$o(h,P,b),v.return=h,h=v;break e}n(h,P);break}else t(h,P);P=P.sibling}b.type===Ti?(v=Yr(b.props.children,h.mode,S,b.key),v.return=h,h=v):(S=Qs(b.type,b.key,b.props,null,h.mode,S),S.ref=$o(h,v,b),S.return=h,h=S)}return a(h);case ki:e:{for(P=b.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(h,v.sibling),v=i(v,b.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else t(h,v);v=v.sibling}v=hd(b,h.mode,S),v.return=h,h=v}return a(h);case lr:return P=b._init,w(h,v,P(b._payload),S)}if(Ho(b))return m(h,v,b,S);if(To(b))return g(h,v,b,S);ys(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(h,v.sibling),v=i(v,b),v.return=h,h=v):(n(h,v),v=pd(b,h.mode,S),v.return=h,h=v),a(h)):n(h,v)}return w}var Ki=Hx(!0),Gx=Hx(!1),Ha={},Pn=Mr(Ha),Ca=Mr(Ha),Ea=Mr(Ha);function Hr(e){if(e===Ha)throw Error(V(174));return e}function Lh(e,t){switch(ve(Ea,t),ve(Ca,e),ve(Pn,Ha),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jf(t,e)}be(Pn),ve(Pn,t)}function Qi(){be(Pn),be(Ca),be(Ea)}function qx(e){Hr(Ea.current);var t=Hr(Pn.current),n=jf(t,e.type);t!==n&&(ve(Ca,e),ve(Pn,n))}function Rh(e){Ca.current===e&&(be(Pn),be(Ca))}var Ee=Mr(0);function Dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sd=[];function Ah(){for(var e=0;e<sd.length;e++)sd[e]._workInProgressVersionPrimary=null;sd.length=0}var Gs=tr.ReactCurrentDispatcher,ld=tr.ReactCurrentBatchConfig,Zr=0,ke=null,Ne=null,Ye=null,Ll=!1,ia=!1,ka=0,aT=0;function rt(){throw Error(V(321))}function Fh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function zh(e,t,n,r,i,o){if(Zr=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gs.current=e===null||e.memoizedState===null?uT:dT,e=n(r,i),ia){o=0;do{if(ia=!1,ka=0,25<=o)throw Error(V(301));o+=1,Ye=Ne=null,t.updateQueue=null,Gs.current=fT,e=n(r,i)}while(ia)}if(Gs.current=Rl,t=Ne!==null&&Ne.next!==null,Zr=0,Ye=Ne=ke=null,Ll=!1,t)throw Error(V(300));return e}function Nh(){var e=ka!==0;return ka=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ke.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Qt(){if(Ne===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ye===null?ke.memoizedState:Ye.next;if(t!==null)Ye=t,Ne=e;else{if(e===null)throw Error(V(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ye===null?ke.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ta(e,t){return typeof t=="function"?t(e):t}function cd(e){var t=Qt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var d=c.lane;if((Zr&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=u,a=r):s=s.next=u,ke.lanes|=d,Jr|=d}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,gn(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,Jr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ud(e){var t=Qt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);gn(o,t.memoizedState)||(Et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Yx(){}function Xx(e,t){var n=ke,r=Qt(),i=t(),o=!gn(r.memoizedState,i);if(o&&(r.memoizedState=i,Et=!0),r=r.queue,Bh(Zx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Pa(9,Qx.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(V(349));Zr&30||Kx(n,t,i)}return i}function Kx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qx(e,t,n,r){t.value=n,t.getSnapshot=r,Jx(t)&&eb(e)}function Zx(e,t,n){return n(function(){Jx(t)&&eb(e)})}function Jx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function eb(e){var t=Kn(e,1);t!==null&&fn(t,e,1,-1)}function c0(e){var t=Sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},t.queue=e,e=e.dispatch=cT.bind(null,ke,e),[t.memoizedState,e]}function Pa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tb(){return Qt().memoizedState}function qs(e,t,n,r){var i=Sn();ke.flags|=e,i.memoizedState=Pa(1|t,n,void 0,r===void 0?null:r)}function kc(e,t,n,r){var i=Qt();r=r===void 0?null:r;var o=void 0;if(Ne!==null){var a=Ne.memoizedState;if(o=a.destroy,r!==null&&Fh(r,a.deps)){i.memoizedState=Pa(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Pa(1|t,n,o,r)}function u0(e,t){return qs(8390656,8,e,t)}function Bh(e,t){return kc(2048,8,e,t)}function nb(e,t){return kc(4,2,e,t)}function rb(e,t){return kc(4,4,e,t)}function ib(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ob(e,t,n){return n=n!=null?n.concat([e]):null,kc(4,4,ib.bind(null,t,e),n)}function Vh(){}function ab(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sb(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lb(e,t,n){return Zr&21?(gn(n,t)||(n=dx(),ke.lanes|=n,Jr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function sT(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=ld.transition;ld.transition={};try{e(!1),t()}finally{me=n,ld.transition=r}}function cb(){return Qt().memoizedState}function lT(e,t,n){var r=Cr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ub(e))db(t,n);else if(n=Bx(e,t,n,r),n!==null){var i=gt();fn(n,e,r,i),fb(n,t,r)}}function cT(e,t,n){var r=Cr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ub(e))db(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,a)){var s=t.interleaved;s===null?(i.next=i,Ih(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Bx(e,t,i,r),n!==null&&(i=gt(),fn(n,e,r,i),fb(n,t,r))}}function ub(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function db(e,t){ia=Ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xh(e,n)}}var Rl={readContext:Kt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},uT={readContext:Kt,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:Kt,useEffect:u0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qs(4194308,4,ib.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qs(4194308,4,e,t)},useInsertionEffect:function(e,t){return qs(4,2,e,t)},useMemo:function(e,t){var n=Sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lT.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:c0,useDebugValue:Vh,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=c0(!1),t=e[0];return e=sT.bind(null,e[1]),Sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Sn();if(Ce){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Xe===null)throw Error(V(349));Zr&30||Kx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,u0(Zx.bind(null,r,o,e),[e]),r.flags|=2048,Pa(9,Qx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Sn(),t=Xe.identifierPrefix;if(Ce){var n=Wn,r=Un;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ka++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=aT++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dT={readContext:Kt,useCallback:ab,useContext:Kt,useEffect:Bh,useImperativeHandle:ob,useInsertionEffect:nb,useLayoutEffect:rb,useMemo:sb,useReducer:cd,useRef:tb,useState:function(){return cd(Ta)},useDebugValue:Vh,useDeferredValue:function(e){var t=Qt();return lb(t,Ne.memoizedState,e)},useTransition:function(){var e=cd(Ta)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:Yx,useSyncExternalStore:Xx,useId:cb,unstable_isNewReconciler:!1},fT={readContext:Kt,useCallback:ab,useContext:Kt,useEffect:Bh,useImperativeHandle:ob,useInsertionEffect:nb,useLayoutEffect:rb,useMemo:sb,useReducer:ud,useRef:tb,useState:function(){return ud(Ta)},useDebugValue:Vh,useDeferredValue:function(e){var t=Qt();return Ne===null?t.memoizedState=e:lb(t,Ne.memoizedState,e)},useTransition:function(){var e=ud(Ta)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:Yx,useSyncExternalStore:Xx,useId:cb,unstable_isNewReconciler:!1};function Zi(e,t){try{var n="",r=t;do n+=NE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function dd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pT=typeof WeakMap=="function"?WeakMap:Map;function pb(e,t,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fl||(Fl=!0,cp=r),Jf(e,t)},n}function hb(e,t,n){n=Hn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Jf(e,t),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function d0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pT;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=TT.bind(null,e,t,n),t.then(e,e))}function f0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function p0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Hn(-1,1),t.tag=2,Sr(n,t,1))),n.lanes|=1),e)}var hT=tr.ReactCurrentOwner,Et=!1;function ht(e,t,n,r){t.child=e===null?Gx(t,null,n,r):Ki(t,e.child,n,r)}function h0(e,t,n,r,i){n=n.render;var o=t.ref;return Vi(t,i),r=zh(e,t,n,r,o,i),n=Nh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qn(e,t,i)):(Ce&&n&&Th(t),t.flags|=1,ht(e,t,r,i),t.child)}function m0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Kh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,mb(e,t,o,r,i)):(e=Qs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(a,r)&&e.ref===t.ref)return Qn(e,t,i)}return t.flags|=1,e=Er(o,r),e.ref=t.ref,e.return=t,t.child=e}function mb(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ba(o,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Qn(e,t,i)}return ep(e,t,n,r,i)}function gb(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Ai,It),It|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Ai,It),It|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(Ai,It),It|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ve(Ai,It),It|=r;return ht(e,t,i,n),t.child}function vb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ep(e,t,n,r,i){var o=Tt(n)?Kr:ut.current;return o=Yi(t,o),Vi(t,i),n=zh(e,t,n,r,o,i),r=Nh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qn(e,t,i)):(Ce&&r&&Th(t),t.flags|=1,ht(e,t,n,i),t.child)}function g0(e,t,n,r,i){if(Tt(n)){var o=!0;Pl(t)}else o=!1;if(Vi(t,i),t.stateNode===null)Ys(e,t),Wx(t,n,r),Zf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kt(c):(c=Tt(n)?Kr:ut.current,c=Yi(t,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&s0(t,a,r,c),cr=!1;var y=t.memoizedState;a.state=y,Il(t,r,a,i),s=t.memoizedState,l!==r||y!==s||kt.current||cr?(typeof d=="function"&&(Qf(t,n,d,r),s=t.memoizedState),(l=cr||a0(t,n,l,r,y,s,c))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Vx(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:an(t.type,l),a.props=c,u=t.pendingProps,y=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Kt(s):(s=Tt(n)?Kr:ut.current,s=Yi(t,s));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==u||y!==s)&&s0(t,a,r,s),cr=!1,y=t.memoizedState,a.state=y,Il(t,r,a,i);var m=t.memoizedState;l!==u||y!==m||kt.current||cr?(typeof p=="function"&&(Qf(t,n,p,r),m=t.memoizedState),(c=cr||a0(t,n,c,r,y,m,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return tp(e,t,n,r,o,i)}function tp(e,t,n,r,i,o){vb(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&t0(t,n,!1),Qn(e,t,o);r=t.stateNode,hT.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ki(t,e.child,null,o),t.child=Ki(t,null,l,o)):ht(e,t,l,o),t.memoizedState=r.state,i&&t0(t,n,!0),t.child}function yb(e){var t=e.stateNode;t.pendingContext?e0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&e0(e,t.context,!1),Lh(e,t.containerInfo)}function v0(e,t,n,r,i){return Xi(),Oh(i),t.flags|=256,ht(e,t,n,r),t.child}var np={dehydrated:null,treeContext:null,retryLane:0};function rp(e){return{baseLanes:e,cachePool:null,transitions:null}}function xb(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ee,i&1),e===null)return Xf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Oc(a,r,0,null),e=Yr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=rp(n),t.memoizedState=np,e):Uh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mT(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Er(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Er(l,o):(o=Yr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?rp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=np,r}return o=e.child,e=o.sibling,r=Er(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uh(e,t){return t=Oc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xs(e,t,n,r){return r!==null&&Oh(r),Ki(t,e.child,null,n),e=Uh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mT(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=dd(Error(V(422))),xs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Oc({mode:"visible",children:r.children},i,0,null),o=Yr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ki(t,e.child,null,a),t.child.memoizedState=rp(a),t.memoizedState=np,o);if(!(t.mode&1))return xs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=dd(o,r,void 0),xs(e,t,a,r)}if(l=(a&e.childLanes)!==0,Et||l){if(r=Xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kn(e,i),fn(r,e,i,-1))}return Xh(),r=dd(Error(V(421))),xs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=PT.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Lt=wr(i.nextSibling),At=t,Ce=!0,cn=null,e!==null&&(Gt[qt++]=Un,Gt[qt++]=Wn,Gt[qt++]=Qr,Un=e.id,Wn=e.overflow,Qr=t),t=Uh(t,r.children),t.flags|=4096,t)}function y0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kf(e.return,t,n)}function fd(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bb(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ht(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&y0(e,n,t);else if(e.tag===19)y0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Dl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Dl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fd(t,!0,n,null,o);break;case"together":fd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ys(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=Er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gT(e,t,n){switch(t.tag){case 3:yb(t),Xi();break;case 5:qx(t);break;case 1:Tt(t.type)&&Pl(t);break;case 4:Lh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?xb(e,t,n):(ve(Ee,Ee.current&1),e=Qn(e,t,n),e!==null?e.sibling:null);ve(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,gb(e,t,n)}return Qn(e,t,n)}var wb,ip,Sb,_b;wb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ip=function(){};Sb=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Hr(Pn.current);var o=null;switch(n){case"input":i=kf(e,i),r=kf(e,r),o=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),o=[];break;case"textarea":i=Of(e,i),r=Of(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=kl)}Mf(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(pa.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(pa.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ye("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};_b=function(e,t,n,r){n!==r&&(t.flags|=4)};function Io(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vT(e,t,n){var r=t.pendingProps;switch(Ph(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return Tt(t.type)&&Tl(),it(t),null;case 3:return r=t.stateNode,Qi(),be(kt),be(ut),Ah(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,cn!==null&&(fp(cn),cn=null))),ip(e,t),it(t),null;case 5:Rh(t);var i=Hr(Ea.current);if(n=t.type,e!==null&&t.stateNode!=null)Sb(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return it(t),null}if(e=Hr(Pn.current),vs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[En]=t,r[_a]=o,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)ye(qo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Tg(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":Og(r,o),ye("invalid",r)}Mf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),i=["children",""+l]):pa.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":ls(r),Pg(r,o,!0);break;case"textarea":ls(r),jg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=kl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ky(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[En]=t,e[_a]=r,wb(e,t,!1,!1),t.stateNode=e;e:{switch(a=$f(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)ye(qo[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":Tg(e,r),i=kf(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Og(e,r),i=Of(e,r),ye("invalid",e);break;default:i=r}Mf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Jy(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Qy(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ha(e,s):typeof s=="number"&&ha(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(pa.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ye("scroll",e):s!=null&&ph(e,o,s,a))}switch(n){case"input":ls(e),Pg(e,r,!1);break;case"textarea":ls(e),jg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Fi(e,!!r.multiple,o,!1):r.defaultValue!=null&&Fi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)_b(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Hr(Ea.current),Hr(Pn.current),vs(t)){if(r=t.stateNode,n=t.memoizedProps,r[En]=t,(o=r.nodeValue!==n)&&(e=At,e!==null))switch(e.tag){case 3:gs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=t,t.stateNode=r}return it(t),null;case 13:if(be(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Lt!==null&&t.mode&1&&!(t.flags&128))Nx(),Xi(),t.flags|=98560,o=!1;else if(o=vs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[En]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),o=!1}else cn!==null&&(fp(cn),cn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Ve===0&&(Ve=3):Xh())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return Qi(),ip(e,t),e===null&&wa(t.stateNode.containerInfo),it(t),null;case 10:return $h(t.type._context),it(t),null;case 17:return Tt(t.type)&&Tl(),it(t),null;case 19:if(be(Ee),o=t.memoizedState,o===null)return it(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Io(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Dl(e),a!==null){for(t.flags|=128,Io(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>Ji&&(t.flags|=128,r=!0,Io(o,!1),t.lanes=4194304)}else{if(!r)if(e=Dl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ce)return it(t),null}else 2*Me()-o.renderingStartTime>Ji&&n!==1073741824&&(t.flags|=128,r=!0,Io(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,n=Ee.current,ve(Ee,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return Yh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?It&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function yT(e,t){switch(Ph(t),t.tag){case 1:return Tt(t.type)&&Tl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(),be(kt),be(ut),Ah(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rh(t),null;case 13:if(be(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Ee),null;case 4:return Qi(),null;case 10:return $h(t.type._context),null;case 22:case 23:return Yh(),null;case 24:return null;default:return null}}var bs=!1,lt=!1,xT=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ri(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function op(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var x0=!1;function bT(e,t){if(Vf=_l,e=Tx(),kh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,d=0,u=e,y=null;t:for(;;){for(var p;u!==n||i!==0&&u.nodeType!==3||(l=a+i),u!==o||r!==0&&u.nodeType!==3||(s=a+r),u.nodeType===3&&(a+=u.nodeValue.length),(p=u.firstChild)!==null;)y=u,u=p;for(;;){if(u===e)break t;if(y===n&&++c===i&&(l=a),y===o&&++d===r&&(s=a),(p=u.nextSibling)!==null)break;u=y,y=u.parentNode}u=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:e,selectionRange:n},_l=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,w=m.memoizedState,h=t.stateNode,v=h.getSnapshotBeforeUpdate(t.elementType===t.type?g:an(t.type,g),w);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return m=x0,x0=!1,m}function oa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&op(t,n,o)}i=i.next}while(i!==r)}}function Tc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ap(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cb(e){var t=e.alternate;t!==null&&(e.alternate=null,Cb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[En],delete t[_a],delete t[Gf],delete t[nT],delete t[rT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Eb(e){return e.tag===5||e.tag===3||e.tag===4}function b0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kl));else if(r!==4&&(e=e.child,e!==null))for(sp(e,t,n),e=e.sibling;e!==null;)sp(e,t,n),e=e.sibling}function lp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lp(e,t,n),e=e.sibling;e!==null;)lp(e,t,n),e=e.sibling}var Je=null,sn=!1;function ar(e,t,n){for(n=n.child;n!==null;)kb(e,t,n),n=n.sibling}function kb(e,t,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(xc,n)}catch{}switch(n.tag){case 5:lt||Ri(n,t);case 6:var r=Je,i=sn;Je=null,ar(e,t,n),Je=r,sn=i,Je!==null&&(sn?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(sn?(e=Je,n=n.stateNode,e.nodeType===8?od(e.parentNode,n):e.nodeType===1&&od(e,n),ya(e)):od(Je,n.stateNode));break;case 4:r=Je,i=sn,Je=n.stateNode.containerInfo,sn=!0,ar(e,t,n),Je=r,sn=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&op(n,t,a),i=i.next}while(i!==r)}ar(e,t,n);break;case 1:if(!lt&&(Ri(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,t,l)}ar(e,t,n);break;case 21:ar(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,ar(e,t,n),lt=r):ar(e,t,n);break;default:ar(e,t,n)}}function w0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xT),t.forEach(function(r){var i=OT.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,sn=!1;break e;case 3:Je=l.stateNode.containerInfo,sn=!0;break e;case 4:Je=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(Je===null)throw Error(V(160));kb(o,a,i),Je=null,sn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Oe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tb(t,e),t=t.sibling}function Tb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),bn(e),r&4){try{oa(3,e,e.return),Tc(3,e)}catch(g){Oe(e,e.return,g)}try{oa(5,e,e.return)}catch(g){Oe(e,e.return,g)}}break;case 1:tn(t,e),bn(e),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(tn(t,e),bn(e),r&512&&n!==null&&Ri(n,n.return),e.flags&32){var i=e.stateNode;try{ha(i,"")}catch(g){Oe(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Yy(i,o),$f(l,a);var c=$f(l,o);for(a=0;a<s.length;a+=2){var d=s[a],u=s[a+1];d==="style"?Jy(i,u):d==="dangerouslySetInnerHTML"?Qy(i,u):d==="children"?ha(i,u):ph(i,d,u,c)}switch(l){case"input":Tf(i,o);break;case"textarea":Xy(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Fi(i,!!o.multiple,p,!1):y!==!!o.multiple&&(o.defaultValue!=null?Fi(i,!!o.multiple,o.defaultValue,!0):Fi(i,!!o.multiple,o.multiple?[]:"",!1))}i[_a]=o}catch(g){Oe(e,e.return,g)}}break;case 6:if(tn(t,e),bn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){Oe(e,e.return,g)}}break;case 3:if(tn(t,e),bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(t.containerInfo)}catch(g){Oe(e,e.return,g)}break;case 4:tn(t,e),bn(e);break;case 13:tn(t,e),bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gh=Me())),r&4&&w0(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(c=lt)||d,tn(t,e),lt=c):tn(t,e),bn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(H=e,d=e.child;d!==null;){for(u=H=d;H!==null;){switch(y=H,p=y.child,y.tag){case 0:case 11:case 14:case 15:oa(4,y,y.return);break;case 1:Ri(y,y.return);var m=y.stateNode;if(typeof m.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Oe(r,n,g)}}break;case 5:Ri(y,y.return);break;case 22:if(y.memoizedState!==null){_0(u);continue}}p!==null?(p.return=y,H=p):_0(u)}d=d.sibling}e:for(d=null,u=e;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=u.stateNode,s=u.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Zy("display",a))}catch(g){Oe(e,e.return,g)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(g){Oe(e,e.return,g)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:tn(t,e),bn(e),r&4&&w0(e);break;case 21:break;default:tn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Eb(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ha(i,""),r.flags&=-33);var o=b0(e);lp(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=b0(e);sp(e,l,a);break;default:throw Error(V(161))}}catch(s){Oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wT(e,t,n){H=e,Pb(e)}function Pb(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||bs;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||lt;l=bs;var c=lt;if(bs=a,(lt=s)&&!c)for(H=i;H!==null;)a=H,s=a.child,a.tag===22&&a.memoizedState!==null?C0(i):s!==null?(s.return=a,H=s):C0(i);for(;o!==null;)H=o,Pb(o),o=o.sibling;H=i,bs=l,lt=c}S0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):S0(e)}}function S0(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||Tc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:an(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&o0(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}o0(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&ya(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}lt||t.flags&512&&ap(t)}catch(y){Oe(t,t.return,y)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function _0(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function C0(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tc(4,t)}catch(s){Oe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Oe(t,i,s)}}var o=t.return;try{ap(t)}catch(s){Oe(t,o,s)}break;case 5:var a=t.return;try{ap(t)}catch(s){Oe(t,a,s)}}}catch(s){Oe(t,t.return,s)}if(t===e){H=null;break}var l=t.sibling;if(l!==null){l.return=t.return,H=l;break}H=t.return}}var ST=Math.ceil,Al=tr.ReactCurrentDispatcher,Wh=tr.ReactCurrentOwner,Xt=tr.ReactCurrentBatchConfig,se=0,Xe=null,Re=null,tt=0,It=0,Ai=Mr(0),Ve=0,Oa=null,Jr=0,Pc=0,Hh=0,aa=null,Ct=null,Gh=0,Ji=1/0,An=null,Fl=!1,cp=null,_r=null,ws=!1,hr=null,zl=0,sa=0,up=null,Xs=-1,Ks=0;function gt(){return se&6?Me():Xs!==-1?Xs:Xs=Me()}function Cr(e){return e.mode&1?se&2&&tt!==0?tt&-tt:oT.transition!==null?(Ks===0&&(Ks=dx()),Ks):(e=me,e!==0||(e=window.event,e=e===void 0?16:yx(e.type)),e):1}function fn(e,t,n,r){if(50<sa)throw sa=0,up=null,Error(V(185));Va(e,n,r),(!(se&2)||e!==Xe)&&(e===Xe&&(!(se&2)&&(Pc|=n),Ve===4&&dr(e,tt)),Pt(e,r),n===1&&se===0&&!(t.mode&1)&&(Ji=Me()+500,Cc&&$r()))}function Pt(e,t){var n=e.callbackNode;ok(e,t);var r=Sl(e,e===Xe?tt:0);if(r===0)n!==null&&Ig(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ig(n),t===1)e.tag===0?iT(E0.bind(null,e)):Ax(E0.bind(null,e)),eT(function(){!(se&6)&&$r()}),n=null;else{switch(fx(r)){case 1:n=yh;break;case 4:n=cx;break;case 16:n=wl;break;case 536870912:n=ux;break;default:n=wl}n=Rb(n,Ob.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ob(e,t){if(Xs=-1,Ks=0,se&6)throw Error(V(327));var n=e.callbackNode;if(Ui()&&e.callbackNode!==n)return null;var r=Sl(e,e===Xe?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Nl(e,r);else{t=r;var i=se;se|=2;var o=Mb();(Xe!==e||tt!==t)&&(An=null,Ji=Me()+500,qr(e,t));do try{ET();break}catch(l){jb(e,l)}while(1);Mh(),Al.current=o,se=i,Re!==null?t=0:(Xe=null,tt=0,t=Ve)}if(t!==0){if(t===2&&(i=Af(e),i!==0&&(r=i,t=dp(e,i))),t===1)throw n=Oa,qr(e,0),dr(e,r),Pt(e,Me()),n;if(t===6)dr(e,r);else{if(i=e.current.alternate,!(r&30)&&!_T(i)&&(t=Nl(e,r),t===2&&(o=Af(e),o!==0&&(r=o,t=dp(e,o))),t===1))throw n=Oa,qr(e,0),dr(e,r),Pt(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Fr(e,Ct,An);break;case 3:if(dr(e,r),(r&130023424)===r&&(t=Gh+500-Me(),10<t)){if(Sl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hf(Fr.bind(null,e,Ct,An),t);break}Fr(e,Ct,An);break;case 4:if(dr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ST(r/1960))-r,10<r){e.timeoutHandle=Hf(Fr.bind(null,e,Ct,An),r);break}Fr(e,Ct,An);break;case 5:Fr(e,Ct,An);break;default:throw Error(V(329))}}}return Pt(e,Me()),e.callbackNode===n?Ob.bind(null,e):null}function dp(e,t){var n=aa;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=Ct,Ct=n,t!==null&&fp(t)),e}function fp(e){Ct===null?Ct=e:Ct.push.apply(Ct,e)}function _T(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~Hh,t&=~Pc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dn(t),r=1<<n;e[n]=-1,t&=~r}}function E0(e){if(se&6)throw Error(V(327));Ui();var t=Sl(e,0);if(!(t&1))return Pt(e,Me()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var r=Af(e);r!==0&&(t=r,n=dp(e,r))}if(n===1)throw n=Oa,qr(e,0),dr(e,t),Pt(e,Me()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fr(e,Ct,An),Pt(e,Me()),null}function qh(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Ji=Me()+500,Cc&&$r())}}function ei(e){hr!==null&&hr.tag===0&&!(se&6)&&Ui();var t=se;se|=1;var n=Xt.transition,r=me;try{if(Xt.transition=null,me=1,e)return e()}finally{me=r,Xt.transition=n,se=t,!(se&6)&&$r()}}function Yh(){It=Ai.current,be(Ai)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jk(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Ph(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:Qi(),be(kt),be(ut),Ah();break;case 5:Rh(r);break;case 4:Qi();break;case 13:be(Ee);break;case 19:be(Ee);break;case 10:$h(r.type._context);break;case 22:case 23:Yh()}n=n.return}if(Xe=e,Re=e=Er(e.current,null),tt=It=t,Ve=0,Oa=null,Hh=Pc=Jr=0,Ct=aa=null,Wr!==null){for(t=0;t<Wr.length;t++)if(n=Wr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Wr=null}return e}function jb(e,t){do{var n=Re;try{if(Mh(),Gs.current=Rl,Ll){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ll=!1}if(Zr=0,Ye=Ne=ke=null,ia=!1,ka=0,Wh.current=null,n===null||n.return===null){Ve=1,Oa=t,Re=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=tt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=f0(a);if(p!==null){p.flags&=-257,p0(p,a,l,o,t),p.mode&1&&d0(o,c,t),t=p,s=c;var m=t.updateQueue;if(m===null){var g=new Set;g.add(s),t.updateQueue=g}else m.add(s);break e}else{if(!(t&1)){d0(o,c,t),Xh();break e}s=Error(V(426))}}else if(Ce&&l.mode&1){var w=f0(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),p0(w,a,l,o,t),Oh(Zi(s,l));break e}}o=s=Zi(s,l),Ve!==4&&(Ve=2),aa===null?aa=[o]:aa.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=pb(o,s,t);i0(o,h);break e;case 1:l=s;var v=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(_r===null||!_r.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=hb(o,l,t);i0(o,S);break e}}o=o.return}while(o!==null)}Ib(n)}catch(E){t=E,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function Mb(){var e=Al.current;return Al.current=Rl,e===null?Rl:e}function Xh(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Xe===null||!(Jr&268435455)&&!(Pc&268435455)||dr(Xe,tt)}function Nl(e,t){var n=se;se|=2;var r=Mb();(Xe!==e||tt!==t)&&(An=null,qr(e,t));do try{CT();break}catch(i){jb(e,i)}while(1);if(Mh(),se=n,Al.current=r,Re!==null)throw Error(V(261));return Xe=null,tt=0,Ve}function CT(){for(;Re!==null;)$b(Re)}function ET(){for(;Re!==null&&!KE();)$b(Re)}function $b(e){var t=Lb(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?Ib(e):Re=t,Wh.current=null}function Ib(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yT(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Re=null;return}}else if(n=vT(n,t,It),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ve===0&&(Ve=5)}function Fr(e,t,n){var r=me,i=Xt.transition;try{Xt.transition=null,me=1,kT(e,t,n,r)}finally{Xt.transition=i,me=r}return null}function kT(e,t,n,r){do Ui();while(hr!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ak(e,o),e===Xe&&(Re=Xe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ws||(ws=!0,Rb(wl,function(){return Ui(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Xt.transition,Xt.transition=null;var a=me;me=1;var l=se;se|=4,Wh.current=null,bT(e,n),Tb(n,e),Gk(Uf),_l=!!Vf,Uf=Vf=null,e.current=n,wT(n),QE(),se=l,me=a,Xt.transition=o}else e.current=n;if(ws&&(ws=!1,hr=e,zl=i),o=e.pendingLanes,o===0&&(_r=null),ek(n.stateNode),Pt(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fl)throw Fl=!1,e=cp,cp=null,e;return zl&1&&e.tag!==0&&Ui(),o=e.pendingLanes,o&1?e===up?sa++:(sa=0,up=e):sa=0,$r(),null}function Ui(){if(hr!==null){var e=fx(zl),t=Xt.transition,n=me;try{if(Xt.transition=null,me=16>e?16:e,hr===null)var r=!1;else{if(e=hr,hr=null,zl=0,se&6)throw Error(V(331));var i=se;for(se|=4,H=e.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:oa(8,d,o)}var u=d.child;if(u!==null)u.return=d,H=u;else for(;H!==null;){d=H;var y=d.sibling,p=d.return;if(Cb(d),d===c){H=null;break}if(y!==null){y.return=p,H=y;break}H=p}}}var m=o.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:oa(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,H=h;break e}H=o.return}}var v=e.current;for(H=v;H!==null;){a=H;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,H=b;else e:for(a=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Tc(9,l)}}catch(E){Oe(l,l.return,E)}if(l===a){H=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,H=S;break e}H=l.return}}if(se=i,$r(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(xc,e)}catch{}r=!0}return r}finally{me=n,Xt.transition=t}}return!1}function k0(e,t,n){t=Zi(n,t),t=pb(e,t,1),e=Sr(e,t,1),t=gt(),e!==null&&(Va(e,1,t),Pt(e,t))}function Oe(e,t,n){if(e.tag===3)k0(e,e,n);else for(;t!==null;){if(t.tag===3){k0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){e=Zi(n,e),e=hb(t,e,1),t=Sr(t,e,1),e=gt(),t!==null&&(Va(t,1,e),Pt(t,e));break}}t=t.return}}function TT(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(tt&n)===n&&(Ve===4||Ve===3&&(tt&130023424)===tt&&500>Me()-Gh?qr(e,0):Hh|=n),Pt(e,t)}function Db(e,t){t===0&&(e.mode&1?(t=ds,ds<<=1,!(ds&130023424)&&(ds=4194304)):t=1);var n=gt();e=Kn(e,t),e!==null&&(Va(e,t,n),Pt(e,n))}function PT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Db(e,n)}function OT(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Db(e,n)}var Lb;Lb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,gT(e,t,n);Et=!!(e.flags&131072)}else Et=!1,Ce&&t.flags&1048576&&Fx(t,jl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ys(e,t),e=t.pendingProps;var i=Yi(t,ut.current);Vi(t,n),i=zh(null,t,r,e,i,n);var o=Nh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Tt(r)?(o=!0,Pl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dh(t),i.updater=Ec,t.stateNode=i,i._reactInternals=t,Zf(t,r,e,n),t=tp(null,t,r,!0,o,n)):(t.tag=0,Ce&&o&&Th(t),ht(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ys(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=MT(r),e=an(r,e),i){case 0:t=ep(null,t,r,e,n);break e;case 1:t=g0(null,t,r,e,n);break e;case 11:t=h0(null,t,r,e,n);break e;case 14:t=m0(null,t,r,an(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),ep(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),g0(e,t,r,i,n);case 3:e:{if(yb(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vx(e,t),Il(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zi(Error(V(423)),t),t=v0(e,t,r,n,i);break e}else if(r!==i){i=Zi(Error(V(424)),t),t=v0(e,t,r,n,i);break e}else for(Lt=wr(t.stateNode.containerInfo.firstChild),At=t,Ce=!0,cn=null,n=Gx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xi(),r===i){t=Qn(e,t,n);break e}ht(e,t,r,n)}t=t.child}return t;case 5:return qx(t),e===null&&Xf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Wf(r,i)?a=null:o!==null&&Wf(r,o)&&(t.flags|=32),vb(e,t),ht(e,t,a,n),t.child;case 6:return e===null&&Xf(t),null;case 13:return xb(e,t,n);case 4:return Lh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ki(t,null,r,n):ht(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),h0(e,t,r,i,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ve(Ml,r._currentValue),r._currentValue=a,o!==null)if(gn(o.value,a)){if(o.children===i.children&&!kt.current){t=Qn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Hn(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Kf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Kf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ht(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Vi(t,n),i=Kt(i),r=r(i),t.flags|=1,ht(e,t,r,n),t.child;case 14:return r=t.type,i=an(r,t.pendingProps),i=an(r.type,i),m0(e,t,r,i,n);case 15:return mb(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),Ys(e,t),t.tag=1,Tt(r)?(e=!0,Pl(t)):e=!1,Vi(t,n),Wx(t,r,i),Zf(t,r,i,n),tp(null,t,r,!0,e,n);case 19:return bb(e,t,n);case 22:return gb(e,t,n)}throw Error(V(156,t.tag))};function Rb(e,t){return lx(e,t)}function jT(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(e,t,n,r){return new jT(e,t,n,r)}function Kh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function MT(e){if(typeof e=="function")return Kh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mh)return 11;if(e===gh)return 14}return 2}function Er(e,t){var n=e.alternate;return n===null?(n=Yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Kh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ti:return Yr(n.children,i,o,t);case hh:a=8,i|=8;break;case Sf:return e=Yt(12,n,t,i|2),e.elementType=Sf,e.lanes=o,e;case _f:return e=Yt(13,n,t,i),e.elementType=_f,e.lanes=o,e;case Cf:return e=Yt(19,n,t,i),e.elementType=Cf,e.lanes=o,e;case Hy:return Oc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uy:a=10;break e;case Wy:a=9;break e;case mh:a=11;break e;case gh:a=14;break e;case lr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Yt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yr(e,t,n,r){return e=Yt(7,e,r,t),e.lanes=n,e}function Oc(e,t,n,r){return e=Yt(22,e,r,t),e.elementType=Hy,e.lanes=n,e.stateNode={isHidden:!1},e}function pd(e,t,n){return e=Yt(6,e,null,t),e.lanes=n,e}function hd(e,t,n){return t=Yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $T(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yu(0),this.expirationTimes=Yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qh(e,t,n,r,i,o,a,l,s){return e=new $T(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Yt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dh(o),e}function IT(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ki,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ab(e){if(!e)return Pr;e=e._reactInternals;e:{if(ci(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Tt(n))return Rx(e,n,t)}return t}function Fb(e,t,n,r,i,o,a,l,s){return e=Qh(n,r,!0,e,i,o,a,l,s),e.context=Ab(null),n=e.current,r=gt(),i=Cr(n),o=Hn(r,i),o.callback=t??null,Sr(n,o,i),e.current.lanes=i,Va(e,i,r),Pt(e,r),e}function jc(e,t,n,r){var i=t.current,o=gt(),a=Cr(i);return n=Ab(n),t.context===null?t.context=n:t.pendingContext=n,t=Hn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sr(i,t,a),e!==null&&(fn(e,i,a,o),Hs(e,i,a)),a}function Bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function T0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zh(e,t){T0(e,t),(e=e.alternate)&&T0(e,t)}function DT(){return null}var zb=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jh(e){this._internalRoot=e}Mc.prototype.render=Jh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));jc(e,t,null,null)};Mc.prototype.unmount=Jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ei(function(){jc(null,e,null,null)}),t[Xn]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var t=mx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ur.length&&t!==0&&t<ur[n].priority;n++);ur.splice(n,0,e),n===0&&vx(e)}};function em(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function P0(){}function LT(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Bl(a);o.call(c)}}var a=Fb(t,r,e,0,null,!1,!1,"",P0);return e._reactRootContainer=a,e[Xn]=a.current,wa(e.nodeType===8?e.parentNode:e),ei(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Bl(s);l.call(c)}}var s=Qh(e,0,!1,null,null,!1,!1,"",P0);return e._reactRootContainer=s,e[Xn]=s.current,wa(e.nodeType===8?e.parentNode:e),ei(function(){jc(t,s,n,r)}),s}function Ic(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Bl(a);l.call(s)}}jc(t,a,e,i)}else a=LT(n,t,e,i,r);return Bl(a)}px=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Go(t.pendingLanes);n!==0&&(xh(t,n|1),Pt(t,Me()),!(se&6)&&(Ji=Me()+500,$r()))}break;case 13:ei(function(){var r=Kn(e,1);if(r!==null){var i=gt();fn(r,e,1,i)}}),Zh(e,1)}};bh=function(e){if(e.tag===13){var t=Kn(e,134217728);if(t!==null){var n=gt();fn(t,e,134217728,n)}Zh(e,134217728)}};hx=function(e){if(e.tag===13){var t=Cr(e),n=Kn(e,t);if(n!==null){var r=gt();fn(n,e,t,r)}Zh(e,t)}};mx=function(){return me};gx=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};Df=function(e,t,n){switch(t){case"input":if(Tf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_c(r);if(!i)throw Error(V(90));qy(r),Tf(r,i)}}}break;case"textarea":Xy(e,n);break;case"select":t=n.value,t!=null&&Fi(e,!!n.multiple,t,!1)}};nx=qh;rx=ei;var RT={usingClientEntryPoint:!1,Events:[Wa,Mi,_c,ex,tx,qh]},Do={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},AT={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ax(e),e===null?null:e.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||DT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{xc=Ss.inject(AT),Tn=Ss}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RT;Vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!em(t))throw Error(V(200));return IT(e,t,null,n)};Vt.createRoot=function(e,t){if(!em(e))throw Error(V(299));var n=!1,r="",i=zb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qh(e,1,!1,null,null,n,!1,r,i),e[Xn]=t.current,wa(e.nodeType===8?e.parentNode:e),new Jh(t)};Vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=ax(t),e=e===null?null:e.stateNode,e};Vt.flushSync=function(e){return ei(e)};Vt.hydrate=function(e,t,n){if(!$c(t))throw Error(V(200));return Ic(null,e,t,!0,n)};Vt.hydrateRoot=function(e,t,n){if(!em(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=zb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Fb(t,null,e,1,n??null,i,!1,o,a),e[Xn]=t.current,wa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mc(t)};Vt.render=function(e,t,n){if(!$c(t))throw Error(V(200));return Ic(null,e,t,!1,n)};Vt.unmountComponentAtNode=function(e){if(!$c(e))throw Error(V(40));return e._reactRootContainer?(ei(function(){Ic(null,null,e,!1,function(){e._reactRootContainer=null,e[Xn]=null})}),!0):!1};Vt.unstable_batchedUpdates=qh;Vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$c(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Ic(e,t,n,!1,r)};Vt.version="18.2.0-next-9e3b772b8-20220608";function Nb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nb)}catch(e){console.error(e)}}Nb(),Fy.exports=Vt;var Dc=Fy.exports,O0=Dc;bf.createRoot=O0.createRoot,bf.hydrateRoot=O0.hydrateRoot;var ct=function(){return ct=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ct.apply(this,arguments)};function eo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function FT(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var zT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,NT=FT(function(e){return zT.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),xe="-ms-",la="-moz-",ce="-webkit-",Bb="comm",Lc="rule",tm="decl",BT="@import",VT="@namespace",Vb="@keyframes",UT="@layer",Ub=Math.abs,nm=String.fromCharCode,pp=Object.assign;function WT(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function Wb(e){return e.trim()}function Fn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Zs(e,t,n){return e.indexOf(t,n)}function Be(e,t){return e.charCodeAt(t)|0}function ti(e,t,n){return e.slice(t,n)}function ln(e){return e.length}function Hb(e){return e.length}function Yo(e,t){return t.push(e),e}function HT(e,t){return e.map(t).join("")}function j0(e,t){return e.filter(function(n){return!Fn(n,t)})}var Rc=1,to=1,Gb=0,Zt=0,De=0,mo="";function Ac(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Rc,column:to,length:a,return:"",siblings:l}}function sr(e,t){return pp(Ac("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function hi(e){for(;e.root;)e=sr(e.root,{children:[e]});Yo(e,e.siblings)}function GT(){return De}function qT(){return De=Zt>0?Be(mo,--Zt):0,to--,De===10&&(to=1,Rc--),De}function pn(){return De=Zt<Gb?Be(mo,Zt++):0,to++,De===10&&(to=1,Rc++),De}function mr(){return Be(mo,Zt)}function Js(){return Zt}function Fc(e,t){return ti(mo,e,t)}function ja(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function YT(e){return Rc=to=1,Gb=ln(mo=e),Zt=0,[]}function XT(e){return mo="",e}function md(e){return Wb(Fc(Zt-1,hp(e===91?e+2:e===40?e+1:e)))}function KT(e){for(;(De=mr())&&De<33;)pn();return ja(e)>2||ja(De)>3?"":" "}function QT(e,t){for(;--t&&pn()&&!(De<48||De>102||De>57&&De<65||De>70&&De<97););return Fc(e,Js()+(t<6&&mr()==32&&pn()==32))}function hp(e){for(;pn();)switch(De){case e:return Zt;case 34:case 39:e!==34&&e!==39&&hp(De);break;case 40:e===41&&hp(e);break;case 92:pn();break}return Zt}function ZT(e,t){for(;pn()&&e+De!==47+10;)if(e+De===42+42&&mr()===47)break;return"/*"+Fc(t,Zt-1)+"*"+nm(e===47?e:pn())}function JT(e){for(;!ja(mr());)pn();return Fc(e,Zt)}function eP(e){return XT(el("",null,null,null,[""],e=YT(e),0,[0],e))}function el(e,t,n,r,i,o,a,l,s){for(var c=0,d=0,u=a,y=0,p=0,m=0,g=1,w=1,h=1,v=0,b="",S=i,E=o,P=r,k=b;w;)switch(m=v,v=pn()){case 40:if(m!=108&&Be(k,u-1)==58){Zs(k+=ne(md(v),"&","&\f"),"&\f",Ub(c?l[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:k+=md(v);break;case 9:case 10:case 13:case 32:k+=KT(m);break;case 92:k+=QT(Js()-1,7);continue;case 47:switch(mr()){case 42:case 47:Yo(tP(ZT(pn(),Js()),t,n,s),s),(ja(m||1)==5||ja(mr()||1)==5)&&ln(k)&&ti(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*g:l[c++]=ln(k)*h;case 125*g:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+d:h==-1&&(k=ne(k,/\f/g,"")),p>0&&(ln(k)-u||g===0&&m===47)&&Yo(p>32?$0(k+";",r,n,u-1,s):$0(ne(k," ","")+";",r,n,u-2,s),s);break;case 59:k+=";";default:if(Yo(P=M0(k,t,n,c,d,i,l,b,S=[],E=[],u,o),o),v===123)if(d===0)el(k,t,P,P,S,o,u,l,E);else{switch(y){case 99:if(Be(k,3)===110)break;case 108:if(Be(k,2)===97)break;default:d=0;case 100:case 109:case 115:}d?el(e,P,P,r&&Yo(M0(e,P,P,0,0,i,l,b,i,S=[],u,E),E),i,E,u,l,r?S:E):el(k,P,P,P,[""],E,0,l,E)}}c=d=p=0,g=h=1,b=k="",u=a;break;case 58:u=1+ln(k),p=m;default:if(g<1){if(v==123)--g;else if(v==125&&g++==0&&qT()==125)continue}switch(k+=nm(v),v*g){case 38:h=d>0?1:(k+="\f",-1);break;case 44:l[c++]=(ln(k)-1)*h,h=1;break;case 64:mr()===45&&(k+=md(pn())),y=mr(),d=u=ln(b=k+=JT(Js())),v++;break;case 45:m===45&&ln(k)==2&&(g=0)}}return o}function M0(e,t,n,r,i,o,a,l,s,c,d,u){for(var y=i-1,p=i===0?o:[""],m=Hb(p),g=0,w=0,h=0;g<r;++g)for(var v=0,b=ti(e,y+1,y=Ub(w=a[g])),S=e;v<m;++v)(S=Wb(w>0?p[v]+" "+b:ne(b,/&\f/g,p[v])))&&(s[h++]=S);return Ac(e,t,n,i===0?Lc:l,s,c,d,u)}function tP(e,t,n,r){return Ac(e,t,n,Bb,nm(GT()),ti(e,2,-2),0,r)}function $0(e,t,n,r,i){return Ac(e,t,n,tm,ti(e,0,r),ti(e,r+1,-1),r,i)}function qb(e,t,n){switch(WT(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ce+e+e;case 4855:return ce+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return la+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+la+e+xe+e+e;case 5936:switch(Be(e,t+11)){case 114:return ce+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ce+e+xe+e+e;case 6165:return ce+e+xe+"flex-"+e+e;case 5187:return ce+e+ne(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return ce+e+xe+"flex-item-"+ne(e,/flex-|-self/g,"")+(Fn(e,/flex-|baseline/)?"":xe+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ce+e+xe+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ce+e+xe+ne(e,"shrink","negative")+e;case 5292:return ce+e+xe+ne(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+ne(e,"-grow","")+ce+e+xe+ne(e,"grow","positive")+e;case 4554:return ce+ne(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+xe+"flex-pack:$3"),/space-between/,"justify")+ce+e+e;case 4200:if(!Fn(e,/flex-|baseline/))return xe+"grid-column-align"+ti(e,t)+e;break;case 2592:case 3360:return xe+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Fn(r.props,/grid-\w+-end/)})?~Zs(e+(n=n[t].value),"span",0)?e:xe+ne(e,"-start","")+e+xe+"grid-row-span:"+(~Zs(n,"span",0)?Fn(n,/\d+/):+Fn(n,/\d+/)-+Fn(e,/\d+/))+";":xe+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Fn(r.props,/grid-\w+-start/)})?e:xe+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+la+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zs(e,"stretch",0)?qb(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,c){return xe+i+":"+o+c+(a?xe+i+"-span:"+(l?s:+s-+o)+c:"")+e});case 4949:if(Be(e,t+6)===121)return ne(e,":",":"+ce)+e;break;case 6444:switch(Be(e,Be(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Be(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+xe+"$2box$3")+e;case 100:return ne(e,":",":"+xe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Vl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function nP(e,t,n,r){switch(e.type){case UT:if(e.children.length)break;case BT:case VT:case tm:return e.return=e.return||e.value;case Bb:return"";case Vb:return e.return=e.value+"{"+Vl(e.children,r)+"}";case Lc:if(!ln(e.value=e.props.join(",")))return""}return ln(n=Vl(e.children,r))?e.return=e.value+"{"+n+"}":""}function rP(e){var t=Hb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function iP(e){return function(t){t.root||(t=t.return)&&e(t)}}function oP(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case tm:e.return=qb(e.value,e.length,n);return;case Vb:return Vl([sr(e,{value:ne(e.value,"@","@"+ce)})],r);case Lc:if(e.length)return HT(n=e.props,function(i){switch(Fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hi(sr(e,{props:[ne(i,/:(read-\w+)/,":"+la+"$1")]})),hi(sr(e,{props:[i]})),pp(e,{props:j0(n,r)});break;case"::placeholder":hi(sr(e,{props:[ne(i,/:(plac\w+)/,":"+ce+"input-$1")]})),hi(sr(e,{props:[ne(i,/:(plac\w+)/,":"+la+"$1")]})),hi(sr(e,{props:[ne(i,/:(plac\w+)/,xe+"input-$1")]})),hi(sr(e,{props:[i]})),pp(e,{props:j0(n,r)});break}return""})}}var aP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},no=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Yb="active",Xb="data-styled-version",zc="6.3.11",rm=`/*!sc*/
`,ca=typeof window<"u"&&typeof document<"u",sP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),lP={};function Ga(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tl=new Map,Ul=new Map,nl=1,Xo=function(e){if(tl.has(e))return tl.get(e);for(;Ul.has(nl);)nl++;var t=nl++;return tl.set(e,t),Ul.set(t,e),t},cP=function(e,t){nl=t+1,tl.set(e,t),Ul.set(t,e)},im=Object.freeze([]),ro=Object.freeze({});function Kb(e,t,n){return n===void 0&&(n=ro),e.theme!==n.theme&&e.theme||t||n.theme}var Qb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),uP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dP=/(^-|-$)/g;function I0(e){return e.replace(uP,"-").replace(dP,"")}var fP=/(a)(d)/gi,D0=function(e){return String.fromCharCode(e+(e>25?39:97))};function mp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=D0(t%52)+n;return(D0(t%52)+n).replace(fP,"$1-$2")}var gd,zr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zb=function(e){return zr(5381,e)};function om(e){return mp(Zb(e)>>>0)}function pP(e){return e.displayName||e.name||"Component"}function vd(e){return typeof e=="string"&&!0}var Jb=typeof Symbol=="function"&&Symbol.for,ew=Jb?Symbol.for("react.memo"):60115,hP=Jb?Symbol.for("react.forward_ref"):60112,mP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vP=((gd={})[hP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gd[ew]=tw,gd);function L0(e){return("type"in(t=e)&&t.type.$$typeof)===ew?tw:"$$typeof"in e?vP[e.$$typeof]:mP;var t}var yP=Object.defineProperty,xP=Object.getOwnPropertyNames,R0=Object.getOwnPropertySymbols,bP=Object.getOwnPropertyDescriptor,wP=Object.getPrototypeOf,A0=Object.prototype;function nw(e,t,n){if(typeof t!="string"){if(A0){var r=wP(t);r&&r!==A0&&nw(e,r,n)}var i=xP(t);R0&&(i=i.concat(R0(t)));for(var o=L0(e),a=L0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in gP||n&&n[s]||a&&s in a||o&&s in o)){var c=bP(t,s);try{yP(e,s,c)}catch{}}}}return e}function io(e){return typeof e=="function"}function am(e){return typeof e=="object"&&"styledComponentId"in e}function Gr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wl(e,t){return e.join(t||"")}function Ma(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gp(e,t,n){if(n===void 0&&(n=!1),!n&&!Ma(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gp(e[r],t[r]);else if(Ma(t))for(var r in t)e[r]=gp(e[r],t[r]);return e}function sm(e,t){Object.defineProperty(e,"toString",{value:t})}var SP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ga(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+rm;return n},e}(),_P="style[".concat(no,"][").concat(Xb,'="').concat(zc,'"]'),CP=new RegExp("^".concat(no,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},vp=function(e){if(!e)return document;if(F0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(F0(t))return t}return document},EP=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},kP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(rm),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(CP);if(s){var c=0|parseInt(s[1],10),d=s[2];c!==0&&(cP(d,c),EP(e,d,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},yd=function(e){for(var t=vp(e.options.target).querySelectorAll(_P),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(no)!==Yb&&(kP(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function TP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var rw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(no,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(no,Yb),r.setAttribute(Xb,zc);var a=TP();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},PP=function(){function e(t){this.element=rw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ga(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),OP=function(){function e(t){this.element=rw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),jP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),z0=ca,MP={isServer:!ca,useCSSOMInjection:!sP},Hl=function(){function e(t,n,r){t===void 0&&(t=ro),n===void 0&&(n={});var i=this;this.options=ct(ct({},MP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ca&&z0&&(z0=!1,yd(this)),sm(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",c=function(u){var y=function(h){return Ul.get(h)}(u);if(y===void 0)return"continue";var p=o.names.get(y);if(p===void 0||!p.size)return"continue";var m=a.getGroup(u);if(m.length===0)return"continue";var g=no+".g"+u+'[id="'+y+'"]',w="";p.forEach(function(h){h.length>0&&(w+=h+",")}),s+=m+g+'{content:"'+w+'"}'+rm},d=0;d<l;d++)c(d);return s}(i)})}return e.registerId=function(t){return Xo(t)},e.prototype.rehydrate=function(){!this.server&&ca&&yd(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ct(ct({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ca&&t.target!==this.options.target&&vp(this.options.target)!==vp(t.target)&&yd(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new jP(i):r?new PP(i):new OP(i)}(this.options),new SP(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Xo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Xo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Xo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),$P=/&/g,zn=47,Nr=42;function N0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==zn||e.charCodeAt(o+1)!==Nr)if(i)a===Nr&&e.charCodeAt(o+1)===zn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function iw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=iw(n.children,t)),n})}function IP(e){var t,n,r,i=e===void 0?ro:e,o=i.options,a=o===void 0?ro:o,l=i.plugins,s=l===void 0?im:l,c=function(m,g,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},d=s.slice();d.push(function(m){m.type===Lc&&m.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),m.props[0]=m.props[0].replace($P,n).replace(r,c))}),a.prefix&&d.push(oP),d.push(nP);var u=[],y=rP(d.concat(iP(function(m){return u.push(m)}))),p=function(m,g,w,h){g===void 0&&(g=""),w===void 0&&(w=""),h===void 0&&(h="&"),t=h,n=g,r=void 0;var v=function(S){if(!N0(S))return S;for(var E=S.length,P="",k=0,C=0,M=0,$=!1,D=0;D<E;D++){var R=S.charCodeAt(D);if(M!==0||$||R!==zn||S.charCodeAt(D+1)!==Nr)if($)R===Nr&&S.charCodeAt(D+1)===zn&&($=!1,D++);else if(R!==34&&R!==39||D!==0&&S.charCodeAt(D-1)===92){if(M===0)if(R===123)C++;else if(R===125){if(--C<0){for(var j=D+1;j<E;){var F=S.charCodeAt(j);if(F===59||F===10)break;j++}j<E&&S.charCodeAt(j)===59&&j++,C=0,D=j-1,k=j;continue}C===0&&(P+=S.substring(k,D+1),k=D+1)}else R===59&&C===0&&(P+=S.substring(k,D+1),k=D+1)}else M===0?M=R:M===R&&(M=0);else $=!0,D++}if(k<E){var A=S.substring(k);N0(A)||(P+=A)}return P}(function(S){if(S.indexOf("//")===-1)return S;for(var E=S.length,P=[],k=0,C=0,M=0,$=0;C<E;){var D=S.charCodeAt(C);if(D!==34&&D!==39||C!==0&&S.charCodeAt(C-1)===92)if(M===0)if(D===zn&&C+1<E&&S.charCodeAt(C+1)===Nr){for(C+=2;C+1<E&&(S.charCodeAt(C)!==Nr||S.charCodeAt(C+1)!==zn);)C++;C+=2}else if(D===40&&C>=3&&(32|S.charCodeAt(C-1))==108&&(32|S.charCodeAt(C-2))==114&&(32|S.charCodeAt(C-3))==117)$=1,C++;else if($>0)D===41?$--:D===40&&$++,C++;else if(D===Nr&&C+1<E&&S.charCodeAt(C+1)===zn)C>k&&P.push(S.substring(k,C)),k=C+=2;else if(D===zn&&C+1<E&&S.charCodeAt(C+1)===zn){for(C>k&&P.push(S.substring(k,C));C<E&&S.charCodeAt(C)!==10;)C++;k=C}else C++;else C++;else M===0?M=D:M===D&&(M=0),C++}return k===0?S:(k<E&&P.push(S.substring(k)),P.join(""))}(m)),b=eP(w||g?"".concat(w," ").concat(g," { ").concat(v," }"):v);return a.namespace&&(b=iw(b,a.namespace)),u=[],Vl(b,y),u};return p.hash=s.length?s.reduce(function(m,g){return g.name||Ga(15),zr(m,g.name)},5381).toString():"",p}var DP=new Hl,yp=IP(),ow=X.createContext({shouldForwardProp:void 0,styleSheet:DP,stylis:yp});ow.Consumer;X.createContext(void 0);function xp(){return X.useContext(ow)}var aw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=yp);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,sm(this,function(){throw Ga(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=yp),this.name+t.hash},e}();function LP(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in aP||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var RP=function(e){return e>="A"&&e<="Z"};function B0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;RP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var sw=function(e){return e==null||e===!1||e===""},lw=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!sw(r)&&(Array.isArray(r)&&r.isCss||io(r)?t.push("".concat(B0(n),":"),r,";"):Ma(r)?t.push.apply(t,eo(eo(["".concat(n," {")],lw(r),!1),["}"],!1)):t.push("".concat(B0(n),": ").concat(LP(n,r),";")))}return t};function kr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(sw(e))return i;if(am(e))return i.push(".".concat(e.styledComponentId)),i;if(io(e)){if(!io(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return kr(o,t,n,r,i)}var a;if(e instanceof aw)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Ma(e)){for(var l=lw(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)kr(e[s],t,n,r,i);return i}function cw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(io(n)&&!am(n))return!1}return!0}var AP=Zb(zc),FP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&cw(t),this.componentId=n,this.baseHash=zr(AP,n),this.baseStyle=r,Hl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gr(i,this.staticRulesId);else{var o=Wl(kr(this.rules,t,n,r)),a=mp(zr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Gr(i,a),this.staticRulesId=a}else{for(var s=zr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var u=this.rules[d];if(typeof u=="string")c+=u;else if(u){var y=Wl(kr(u,t,n,r));s=zr(zr(s,String(d)),y),c+=y}}if(c){var p=mp(s>>>0);if(!n.hasNameForId(this.componentId,p)){var m=r(c,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,m)}i=Gr(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Xo(this.componentId)):""}},e}(),lm=X.createContext(void 0);lm.Consumer;var xd={};function zP(e,t,n){var r=am(e),i=e,o=!vd(e),a=t.attrs,l=a===void 0?im:a,s=t.componentId,c=s===void 0?function(S,E){var P=typeof S!="string"?"sc":I0(S);xd[P]=(xd[P]||0)+1;var k="".concat(P,"-").concat(om(zc+P+xd[P]));return E?"".concat(E,"-").concat(k):k}(t.displayName,t.parentComponentId):s,d=t.displayName,u=d===void 0?function(S){return vd(S)?"styled.".concat(S):"Styled(".concat(pP(S),")")}(e):d,y=t.displayName&&t.componentId?"".concat(I0(t.displayName),"-").concat(t.componentId):t.componentId||c,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(S,E){return g(S,E)&&w(S,E)}}else m=g}var h=new FP(n,y,r?i.componentStyle:void 0);function v(S,E){return function(P,k,C){var M=P.attrs,$=P.componentStyle,D=P.defaultProps,R=P.foldedComponentIds,j=P.styledComponentId,F=P.target,A=X.useContext(lm),L=xp(),O=P.shouldForwardProp||L.shouldForwardProp,T=Kb(k,A,D)||ro,I=function(Y,ee,pe){for(var we,ie=ct(ct({},ee),{className:void 0,theme:pe}),Ie=0;Ie<Y.length;Ie+=1){var We=io(we=Y[Ie])?we(ie):we;for(var He in We)He==="className"?ie.className=Gr(ie.className,We[He]):He==="style"?ie.style=ct(ct({},ie.style),We[He]):ie[He]=We[He]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Gr(ie.className,ee.className)),ie}(M,k,T),z=I.as||F,B={};for(var N in I)I[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&I.theme===T||(N==="forwardedAs"?B.as=I.forwardedAs:O&&!O(N,z)||(B[N]=I[N]));var U=function(Y,ee){var pe=xp(),we=Y.generateAndInjectStyles(ee,pe.styleSheet,pe.stylis);return we}($,I),G=U.className,W=Gr(R,j);return G&&(W+=" "+G),I.className&&(W+=" "+I.className),B[vd(z)&&!Qb.has(z)?"class":"className"]=W,C&&(B.ref=C),x.createElement(z,B)}(b,S,E)}v.displayName=u;var b=X.forwardRef(v);return b.attrs=p,b.componentStyle=h,b.displayName=u,b.shouldForwardProp=m,b.foldedComponentIds=r?Gr(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=y,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var C=0,M=P;C<M.length;C++)gp(E,M[C],!0);return E}({},i.defaultProps,S):S}}),sm(b,function(){return".".concat(b.styledComponentId)}),o&&nw(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function V0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var U0=function(e){return Object.assign(e,{isCss:!0})};function cm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(io(e)||Ma(e))return U0(kr(V0(im,eo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?kr(r):U0(kr(V0(r,t)))}function bp(e,t,n){if(n===void 0&&(n=ro),!t)throw Ga(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,cm.apply(void 0,eo([i],o,!1)))};return r.attrs=function(i){return bp(e,t,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return bp(e,t,ct(ct({},n),i))},r}var uw=function(e){return bp(zP,e)},_=uw;Qb.forEach(function(e){_[e]=uw(e)});var NP=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=cw(t),Hl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Wl(kr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Hl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function BP(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=cm.apply(void 0,eo([e],t,!1)),i="sc-global-".concat(om(JSON.stringify(r))),o=new NP(r,i),a=new WeakMap,l=function(c){var d=xp(),u=X.useContext(lm),y=a.get(d.styleSheet);return y===void 0&&(y=d.styleSheet.allocateGSInstance(i),a.set(d.styleSheet,y)),(typeof window>"u"||!d.styleSheet.server)&&s(y,c,d.styleSheet,u,d.stylis),X.useLayoutEffect(function(){return d.styleSheet.server||s(y,c,d.styleSheet,u,d.stylis),function(){var p;o.removeStyles(y,d.styleSheet),p=d.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(m){return m.remove()})}},[y,c,d.styleSheet,u,d.stylis]),null};function s(c,d,u,y,p){if(o.isStatic)o.renderStyles(c,lP,u,p);else{var m=ct(ct({},d),{theme:Kb(d,y,l.defaultProps)});o.renderStyles(c,m,u,p)}}return X.memo(l)}function um(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Wl(cm.apply(void 0,eo([e],t,!1))),i=om(r);return new aw(i,r)}const VP=_.div`
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
`,mi=_(Te)`
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

    
`,hn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",fO=()=>{const[e,t]=x.useState(""),[n,r]=x.useState([]),[i,o]=x.useState(!1),a=Bt(),l=x.useRef(null);x.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const c=setTimeout(async()=>{try{const u=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(u.data),o(!0)}catch(d){console.error(d)}},300);return()=>clearTimeout(c)},[e]),x.useEffect(()=>{const c=d=>{l.current&&!l.current.contains(d.target)&&o(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const s=c=>{t(""),o(!1),a(`/product/${c.id}`)};return f.jsxs(nO,{ref:l,children:[f.jsx(rO,{name:"site-search",value:e,onChange:c=>t(c.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),f.jsx(iO,{className:"search-button",children:f.jsx(oO,{children:f.jsx("use",{href:`${hn}#icon-search`})})}),i&&n.length>0&&f.jsx(aO,{children:n.map(c=>{var y,p;const u=c.new_price&&c.new_price<c.price?c.new_price:c.price;return f.jsxs(sO,{onClick:()=>s(c),children:[f.jsx(lO,{src:((p=(y=c.images)==null?void 0:y[0])==null?void 0:p.url)||"/nofoto.png",alt:""}),f.jsxs(dO,{children:[f.jsx(cO,{children:c.name}),f.jsxs(uO,{children:[u," грн."]})]})]},c.id)})})]})};var dw={exports:{}},fw={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=x;function pO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hO=typeof Object.is=="function"?Object.is:pO,mO=qa.useSyncExternalStore,gO=qa.useRef,vO=qa.useEffect,yO=qa.useMemo,xO=qa.useDebugValue;fw.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=gO(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=yO(function(){function s(p){if(!c){if(c=!0,d=p,p=r(p),i!==void 0&&a.hasValue){var m=a.value;if(i(m,p))return u=m}return u=p}if(m=u,hO(d,p))return m;var g=r(p);return i!==void 0&&i(m,g)?(d=p,m):(d=p,u=g)}var c=!1,d,u,y=n===void 0?null:n;return[function(){return s(t())},y===null?void 0:function(){return s(y())}]},[t,n,r,i]);var l=mO(e,o[0],o[1]);return vO(function(){a.hasValue=!0,a.value=l},[l]),xO(l),l};dw.exports=fw;var bO=dw.exports;function wO(e){e()}function SO(){let e=null,t=null;return{clear(){e=null,t=null},notify(){wO(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var W0={notify(){},get:()=>[]};function _O(e,t){let n,r=W0,i=0,o=!1;function a(g){d();const w=r.subscribe(g);let h=!1;return()=>{h||(h=!0,w(),u())}}function l(){r.notify()}function s(){m.onStateChange&&m.onStateChange()}function c(){return o}function d(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=SO())}function u(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=W0)}function y(){o||(o=!0,d())}function p(){o&&(o=!1,u())}const m={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:c,trySubscribe:y,tryUnsubscribe:p,getListeners:()=>r};return m}var CO=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EO=CO(),kO=()=>typeof navigator<"u"&&navigator.product==="ReactNative",TO=kO(),PO=()=>EO||TO?x.useLayoutEffect:x.useEffect,OO=PO(),bd=Symbol.for("react-redux-context"),wd=typeof globalThis<"u"?globalThis:{};function jO(){if(!x.createContext)return{};const e=wd[bd]??(wd[bd]=new Map);let t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var Or=jO();function MO(e){const{children:t,context:n,serverState:r,store:i}=e,o=x.useMemo(()=>{const s=_O(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=x.useMemo(()=>i.getState(),[i]);OO(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Or;return x.createElement(l.Provider,{value:o},t)}var $O=MO;function dm(e=Or){return function(){return x.useContext(e)}}var pw=dm();function hw(e=Or){const t=e===Or?pw:dm(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var IO=hw();function DO(e=Or){const t=e===Or?IO:hw(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Jt=DO(),LO=(e,t)=>e===t;function RO(e=Or){const t=e===Or?pw:dm(e),n=(r,i={})=>{const{equalityFn:o=LO}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:c}=a;x.useRef(!0);const d=x.useCallback({[r.name](y){return r(y)}}[r.name],[r]),u=bO.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,c||l.getState,d,o);return x.useDebugValue(u),u};return Object.assign(n,{withTypes:()=>n}),n}var Ue=RO();const AO=_(Te)`
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
`,BO=({onClick:e})=>{const t=Ue(n=>n.cart.items.length);return f.jsx(AO,{to:"/cart",children:f.jsxs(zO,{onClick:e,children:[f.jsx(FO,{children:f.jsx("use",{href:`${hn}#icon-cart`})}),t>0&&f.jsx(NO,{children:t})]})})},VO=_.nav`
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
`,gi=_(Te)`
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
`,UO=()=>f.jsxs(VO,{children:[f.jsx(gi,{to:"/",children:"Головна"}),f.jsx(gi,{to:"/catalog",children:"Каталог"}),f.jsx(gi,{to:"/catalog/new",children:"Новинки"}),f.jsx(gi,{to:"/catalog/sale",children:"Акційні товари"}),f.jsx(gi,{to:"/about",children:"Про нас"}),f.jsx(gi,{to:"/contacts",children:"Контакти"})]}),WO=_.svg`
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
`,YO=({onClick:e})=>{const t=Ue(n=>n.favorites.items.length);return f.jsx(HO,{to:"/favorite",children:f.jsxs(GO,{onClick:e,children:[f.jsx(WO,{children:f.jsx("use",{href:`${hn}#icon-heart`})}),t>0&&f.jsx(qO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
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
 */const JO=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>x.createElement("svg",{ref:s,...QO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:mw("lucide",i),...!o&&!ZO(l)&&{"aria-hidden":"true"},...l},[...a.map(([c,d])=>x.createElement(c,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(e,t)=>{const n=x.forwardRef(({className:r,...i},o)=>x.createElement(JO,{ref:o,iconNode:t,className:mw(`lucide-${XO(H0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=H0(e),n};/**
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
 */const uj=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ya=Ke("heart",uj);/**
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
 */const wj=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],go=Ke("shopping-cart",wj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],gw=Ke("sliders-horizontal",Sj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],vw=Ke("trash-2",_j);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Ej=Ke("user-round",Cj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yw=Ke("x",kj),Tj=({openLogin:e})=>{const[t,n]=x.useState(!1),r=Bt(),i=()=>{localStorage.getItem("token")?r("/account"):e()};return f.jsx(VP,{children:f.jsx(UP,{children:f.jsxs(WP,{children:[f.jsxs(HP,{children:[f.jsx(YP,{to:"/",children:"Дідів хлів"}),f.jsxs(GP,{children:[f.jsx(BO,{}),f.jsx(qP,{onClick:i,children:f.jsx(Ej,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),f.jsx(YO,{}),f.jsx(UO,{}),f.jsx(KP,{onClick:()=>n(!t),children:f.jsx(XP,{children:f.jsx("use",{href:`${hn}#icon-menu`})})}),f.jsx(tO,{open:t,onClick:()=>n(!1)}),f.jsxs(QP,{open:t,children:[f.jsx(ZP,{onClick:()=>n(!1),children:f.jsx(yw,{size:28,strokeWidth:1.5})}),f.jsxs(JP,{children:[f.jsxs(mi,{onClick:()=>n(!1),to:"/",children:[f.jsx(fj,{size:22,strokeWidth:1.5})," Головна"]}),f.jsxs(mi,{onClick:()=>n(!1),to:"/catalog",children:[f.jsx(bj,{size:22,strokeWidth:1.5})," Каталог"]}),f.jsxs(mi,{onClick:()=>n(!1),to:"/catalog/new",children:[f.jsx(gj,{size:22,strokeWidth:1.5}),"Новинки"]}),f.jsxs(mi,{onClick:()=>n(!1),to:"/catalog/sale",children:[f.jsx(rj,{size:22,strokeWidth:1.5}),"Акційні товари"]}),f.jsxs(mi,{onClick:()=>n(!1),to:"/about",children:[f.jsx(hj,{size:22,strokeWidth:1.5})," Про нас"]}),f.jsxs(mi,{onClick:()=>n(!1),to:"/contacts",children:[f.jsx(yj,{size:22,strokeWidth:1.5})," Контакти"]})]}),f.jsx(eO,{children:f.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),f.jsx(fO,{})]})})})},Pj=_.div`

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
`,Mj=_.div`
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
`,$j=()=>f.jsx(Pj,{children:f.jsxs(Oj,{children:[f.jsxs(jj,{children:[f.jsxs(Sd,{children:[f.jsx(_d,{children:"Навігація"}),f.jsx(wn,{to:"/",children:"Головна"}),f.jsx(wn,{to:"/about",children:"Про нас"}),f.jsx(wn,{to:"/catalog",children:"Каталог"}),f.jsx(wn,{to:"/contacts",children:"Контакти"})]}),f.jsxs(Sd,{children:[f.jsx(_d,{children:"Інформація"}),f.jsx(wn,{to:"/delivery",children:"Оплата і доставка"}),f.jsx(wn,{children:"Повернення"}),f.jsx(wn,{children:"Гарантія"}),f.jsx(wn,{children:"Політика конфіденційності"})]})]}),f.jsxs(Sd,{children:[f.jsx(_d,{children:"Контакти"}),f.jsx(wn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),f.jsx(wn,{href:"mailto:email@email.com",children:"email@email.com"}),f.jsxs(Mj,{children:[f.jsx(Cd,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${hn}#icon-instagram`})})}),f.jsx(Cd,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${hn}#icon-telegram`})})}),f.jsx(Cd,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:f.jsx("use",{href:`${hn}#icon-olx`})})})]})]})]})}),Ij=({openLogin:e,openRegister:t})=>f.jsxs(f.Fragment,{children:[f.jsx(Tj,{openLogin:e,openRegister:t}),f.jsx("main",{style:{flex:1},children:f.jsx(Ly,{})}),f.jsx($j,{})]}),Dj=_.section`

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

`,Rj=_.div`
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
`,Aj=_.div`
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
`;function Ze(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Gj=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),Y0=Gj,Ed=()=>Math.random().toString(36).substring(7).split("").join("."),qj={INIT:`@@redux/INIT${Ed()}`,REPLACE:`@@redux/REPLACE${Ed()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Ed()}`},Gl=qj;function fm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function pm(e,t,n){if(typeof e!="function")throw new Error(Ze(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ze(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ze(1));return n(pm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function c(){a===o&&(a=new Map,o.forEach((w,h)=>{a.set(h,w)}))}function d(){if(s)throw new Error(Ze(3));return i}function u(w){if(typeof w!="function")throw new Error(Ze(4));if(s)throw new Error(Ze(5));let h=!0;c();const v=l++;return a.set(v,w),function(){if(h){if(s)throw new Error(Ze(6));h=!1,c(),a.delete(v),o=null}}}function y(w){if(!fm(w))throw new Error(Ze(7));if(typeof w.type>"u")throw new Error(Ze(8));if(typeof w.type!="string")throw new Error(Ze(17));if(s)throw new Error(Ze(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(v=>{v()}),w}function p(w){if(typeof w!="function")throw new Error(Ze(10));r=w,y({type:Gl.REPLACE})}function m(){const w=u;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(Ze(11));function v(){const S=h;S.next&&S.next(d())}return v(),{unsubscribe:w(v)}},[Y0](){return this}}}return y({type:Gl.INIT}),{dispatch:y,subscribe:u,getState:d,replaceReducer:p,[Y0]:m}}function Yj(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Gl.INIT})>"u")throw new Error(Ze(12));if(typeof n(void 0,{type:Gl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ze(13))})}function Xj(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{Yj(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const c={};for(let d=0;d<r.length;d++){const u=r[d],y=n[u],p=a[u],m=y(p,l);if(typeof m>"u")throw l&&l.type,new Error(Ze(14));c[u]=m,s=s||m!==p}return s=s||r.length!==Object.keys(a).length,s?c:a}}function ql(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function Kj(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Ze(15))};const a={getState:i.getState,dispatch:(s,...c)=>o(s,...c)},l=e.map(s=>s(a));return o=ql(...l)(i.dispatch),{...i,dispatch:o}}}function Qj(e){return fm(e)&&"type"in e&&typeof e.type=="string"}var xw=Symbol.for("immer-nothing"),X0=Symbol.for("immer-draftable"),vt=Symbol.for("immer-state");function un(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Rt=Object,oo=Rt.getPrototypeOf,Yl="constructor",Vc="prototype",wp="configurable",Xl="enumerable",rl="writable",$a="value",Zn=e=>!!e&&!!e[vt];function vn(e){var t;return e?bw(e)||Wc(e)||!!e[X0]||!!((t=e[Yl])!=null&&t[X0])||Hc(e)||Gc(e):!1}var Zj=Rt[Vc][Yl].toString(),K0=new WeakMap;function bw(e){if(!e||!hm(e))return!1;const t=oo(e);if(t===null||t===Rt[Vc])return!0;const n=Rt.hasOwnProperty.call(t,Yl)&&t[Yl];if(n===Object)return!0;if(!Ei(n))return!1;let r=K0.get(n);return r===void 0&&(r=Function.toString.call(n),K0.set(n,r)),r===Zj}function Uc(e,t,n=!0){Xa(e)===0?(n?Reflect.ownKeys(e):Rt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Xa(e){const t=e[vt];return t?t.type_:Wc(e)?1:Hc(e)?2:Gc(e)?3:0}var Q0=(e,t,n=Xa(e))=>n===2?e.has(t):Rt[Vc].hasOwnProperty.call(e,t),Sp=(e,t,n=Xa(e))=>n===2?e.get(t):e[t],Kl=(e,t,n,r=Xa(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function Jj(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Wc=Array.isArray,Hc=e=>e instanceof Map,Gc=e=>e instanceof Set,hm=e=>typeof e=="object",Ei=e=>typeof e=="function",kd=e=>typeof e=="boolean";function e4(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Bn=e=>e.copy_||e.base_,mm=e=>e.modified_?e.copy_:e.base_;function _p(e,t){if(Hc(e))return new Map(e);if(Gc(e))return new Set(e);if(Wc(e))return Array[Vc].slice.call(e);const n=bw(e);if(t===!0||t==="class_only"&&!n){const r=Rt.getOwnPropertyDescriptors(e);delete r[vt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[rl]===!1&&(l[rl]=!0,l[wp]=!0),(l.get||l.set)&&(r[a]={[wp]:!0,[rl]:!0,[Xl]:l[Xl],[$a]:e[a]})}return Rt.create(oo(e),r)}else{const r=oo(e);if(r!==null&&n)return{...e};const i=Rt.create(r);return Rt.assign(i,e)}}function gm(e,t=!1){return qc(e)||Zn(e)||!vn(e)||(Xa(e)>1&&Rt.defineProperties(e,{set:_s,add:_s,clear:_s,delete:_s}),Rt.freeze(e),t&&Uc(e,(n,r)=>{gm(r,!0)},!1)),e}function t4(){un(2)}var _s={[$a]:t4};function qc(e){return e===null||!hm(e)?!0:Rt.isFrozen(e)}var Ql="MapSet",Cp="Patches",Z0="ArrayMethods",ww={};function ni(e){const t=ww[e];return t||un(0,e),t}var J0=e=>!!ww[e],Ia,Sw=()=>Ia,n4=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:J0(Ql)?ni(Ql):void 0,arrayMethodsPlugin_:J0(Z0)?ni(Z0):void 0});function ev(e,t){t&&(e.patchPlugin_=ni(Cp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Ep(e){kp(e),e.drafts_.forEach(r4),e.drafts_=null}function kp(e){e===Ia&&(Ia=e.parent_)}var tv=e=>Ia=n4(Ia,e);function r4(e){const t=e[vt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function nv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[vt].modified_&&(Ep(t),un(4)),vn(e)&&(e=rv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[vt].base_,e,t)}else e=rv(t,n);return i4(t,e,!0),Ep(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==xw?e:void 0}function rv(e,t){if(qc(t))return t;const n=t[vt];if(!n)return Zl(t,e.handledSet_,e);if(!Yc(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Ew(n,e)}return n.copy_}function i4(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&gm(t,n)}function _w(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Yc=(e,t)=>e.scope_===t,o4=[];function Cw(e,t,n,r){const i=Bn(e),o=e.type_;if(r!==void 0&&Sp(i,r,o)===t){Kl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Uc(i,(s,c)=>{if(Zn(c)){const d=l.get(c)||[];d.push(s),l.set(c,d)}})}const a=e.draftLocations_.get(t)??o4;for(const l of a)Kl(i,l,n,o)}function a4(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!Yc(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=mm(o);Cw(e,o.draft_??o,a,n),Ew(o,i)})}function Ew(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}_w(e)}}function s4(e,t,n){const{scope_:r}=e;if(Zn(n)){const i=n[vt];Yc(i,r)&&i.callbacks_.push(function(){il(e);const a=mm(i);Cw(e,n,a,t)})}else vn(n)&&e.callbacks_.push(function(){const o=Bn(e);e.type_===3?o.has(n)&&Zl(n,r.handledSet_,r):Sp(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Zl(Sp(e.copy_,t,e.type_),r.handledSet_,r)})}function Zl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Zn(e)||t.has(e)||!vn(e)||qc(e)||(t.add(e),Uc(e,(r,i)=>{if(Zn(i)){const o=i[vt];if(Yc(o,n)){const a=mm(o);Kl(e,r,a,e.type_),_w(o)}}else vn(i)&&Zl(i,t,n)})),e}function l4(e,t){const n=Wc(e),r={type_:n?1:0,scope_:t?t.scope_:Sw(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Jl;n&&(i=[r],o=Da);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Jl={get(e,t){if(t===vt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Bn(e);if(!Q0(i,t,e.type_))return c4(e,i,t);const o=i[t];if(e.finalized_||!vn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&e4(t))return o;if(o===Td(e.base_,t)){il(e);const a=e.type_===1?+t:t,l=Pp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Bn(e)},ownKeys(e){return Reflect.ownKeys(Bn(e))},set(e,t,n){const r=kw(Bn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Td(Bn(e),t),o=i==null?void 0:i[vt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(Jj(n,i)&&(n!==void 0||Q0(e.base_,t,e.type_)))return!0;il(e),Tp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),s4(e,t,n)),!0},deleteProperty(e,t){return il(e),Td(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Tp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Bn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[rl]:!0,[wp]:e.type_!==1||t!=="length",[Xl]:r[Xl],[$a]:n[t]}},defineProperty(){un(11)},getPrototypeOf(e){return oo(e.base_)},setPrototypeOf(){un(12)}},Da={};for(let e in Jl){let t=Jl[e];Da[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Da.deleteProperty=function(e,t){return Da.set.call(this,e,t,void 0)};Da.set=function(e,t,n){return Jl.set.call(this,e[0],t,n,e[0])};function Td(e,t){const n=e[vt];return(n?Bn(n):e)[t]}function c4(e,t,n){var i;const r=kw(t,n);return r?$a in r?r[$a]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function kw(e,t){if(!(t in e))return;let n=oo(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=oo(n)}}function Tp(e){e.modified_||(e.modified_=!0,e.parent_&&Tp(e.parent_))}function il(e){e.copy_||(e.assigned_=new Map,e.copy_=_p(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var u4=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(Ei(t)&&!Ei(n)){const o=n;n=t;const a=this;return function(s=o,...c){return a.produce(s,d=>n.call(this,d,...c))}}Ei(n)||un(6),r!==void 0&&!Ei(r)&&un(7);let i;if(vn(t)){const o=tv(this),a=Pp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?Ep(o):kp(o)}return ev(o,r),nv(i,o)}else if(!t||!hm(t)){if(i=n(t),i===void 0&&(i=t),i===xw&&(i=void 0),this.autoFreeze_&&gm(i,!0),r){const o=[],a=[];ni(Cp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else un(1,t)},this.produceWithPatches=(t,n)=>{if(Ei(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},kd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),kd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),kd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){vn(e)||un(8),Zn(e)&&(e=d4(e));const t=tv(this),n=Pp(t,e,void 0);return n[vt].isManual_=!0,kp(t),n}finishDraft(e,t){const n=e&&e[vt];(!n||!n.isManual_)&&un(9);const{scope_:r}=n;return ev(r,t),nv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=ni(Cp).applyPatches_;return Zn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Pp(e,t,n,r){const[i,o]=Hc(t)?ni(Ql).proxyMap_(t,n):Gc(t)?ni(Ql).proxySet_(t,n):l4(t,n);return((n==null?void 0:n.scope_)??Sw()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?a4(n,o,r):o.callbacks_.push(function(s){var d;(d=s.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:c}=s;o.modified_&&c&&c.generatePatches_(o,[],s)}),i}function d4(e){return Zn(e)||un(10,e),Tw(e)}function Tw(e){if(!vn(e)||qc(e))return e;const t=e[vt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=_p(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=_p(e,!0);return Uc(n,(i,o)=>{Kl(n,i,Tw(o))},r),t&&(t.finalized_=!1),n}var f4=new u4,Pw=f4.produce;function Ow(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var p4=Ow(),h4=Ow,m4=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ql:ql.apply(null,arguments)};function iv(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Gn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>Qj(r)&&r.type===e,n}var jw=class Ko extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ko.prototype)}static get[Symbol.species](){return Ko}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ko(...t[0].concat(this)):new Ko(...t.concat(this))}};function ov(e){return vn(e)?Pw(e,()=>{}):e}function Cs(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function g4(e){return typeof e=="boolean"}var v4=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new jw;return n&&(g4(n)?a.push(p4):a.push(h4(n.extraArgument))),a},y4="RTK_autoBatch",av=e=>t=>{setTimeout(t,e)},x4=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:av(10):e.type==="callback"?e.queueNotification:av(e.timeout),c=()=>{a=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const u=()=>i&&d(),y=r.subscribe(u);return l.add(d),()=>{y(),l.delete(d)}},dispatch(d){var u;try{return i=!((u=d==null?void 0:d.meta)!=null&&u[y4]),o=!i,o&&(a||(a=!0,s(c))),r.dispatch(d)}finally{i=!0}}})},b4=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new jw(e);return r&&i.push(x4(typeof r=="object"?r:void 0)),i};function w4(e){const t=v4(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(fm(n))s=Xj(n);else throw new Error(Gn(1));let c;typeof r=="function"?c=r(t):c=t();let d=ql;i&&(d=m4({trace:!1,...typeof i=="object"&&i}));const u=Kj(...c),y=b4(u);let p=typeof l=="function"?l(y):y();const m=d(...p);return pm(s,a,m)}function Mw(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(Gn(28));if(l in t)throw new Error(Gn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function S4(e){return typeof e=="function"}function _4(e,t){let[n,r,i]=Mw(t),o;if(S4(e))o=()=>ov(e());else{const l=ov(e);o=()=>l}function a(l=o(),s){let c=[n[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,u)=>{if(u)if(Zn(d)){const p=u(d,s);return p===void 0?d:p}else{if(vn(d))return Pw(d,y=>u(y,s));{const y=u(d,s);if(y===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}}return d},l)}return a.getInitialState=o,a}var C4=Symbol.for("rtk-slice-createasyncthunk");function E4(e,t){return`${e}/${t}`}function k4({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[C4];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(Gn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(P4()):i.reducers)||{},s=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(S,E){const P=typeof S=="string"?S:S.type;if(!P)throw new Error(Gn(12));if(P in c.sliceCaseReducersByType)throw new Error(Gn(13));return c.sliceCaseReducersByType[P]=E,d},addMatcher(S,E){return c.sliceMatchers.push({matcher:S,reducer:E}),d},exposeAction(S,E){return c.actionCreators[S]=E,d},exposeCaseReducer(S,E){return c.sliceCaseReducersByName[S]=E,d}};s.forEach(S=>{const E=l[S],P={reducerName:S,type:E4(o,S),createNotation:typeof i.reducers=="function"};j4(E)?$4(P,E,d,t):O4(P,E,d)});function u(){const[S={},E=[],P=void 0]=typeof i.extraReducers=="function"?Mw(i.extraReducers):[i.extraReducers],k={...S,...c.sliceCaseReducersByType};return _4(i.initialState,C=>{for(let M in k)C.addCase(M,k[M]);for(let M of c.sliceMatchers)C.addMatcher(M.matcher,M.reducer);for(let M of E)C.addMatcher(M.matcher,M.reducer);P&&C.addDefaultCase(P)})}const y=S=>S,p=new Map,m=new WeakMap;let g;function w(S,E){return g||(g=u()),g(S,E)}function h(){return g||(g=u()),g.getInitialState()}function v(S,E=!1){function P(C){let M=C[S];return typeof M>"u"&&E&&(M=Cs(m,P,h)),M}function k(C=y){const M=Cs(p,E,()=>new WeakMap);return Cs(M,C,()=>{const $={};for(const[D,R]of Object.entries(i.selectors??{}))$[D]=T4(R,C,()=>Cs(m,C,h),E);return $})}return{reducerPath:S,getSelectors:k,get selectors(){return k(P)},selectSlice:P}}const b={name:o,reducer:w,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:h,...v(a),injectInto(S,{reducerPath:E,...P}={}){const k=E??a;return S.inject({reducerPath:k,reducer:w},P),{...b,...v(k,!0)}}};return b}}function T4(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var $w=k4();function P4(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function O4({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!M4(r))throw new Error(Gn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?iv(e,a):iv(e))}function j4(e){return e._reducerDefinitionType==="asyncThunk"}function M4(e){return e._reducerDefinitionType==="reducerWithPrepare"}function $4({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Gn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:c,options:d}=n,u=i(e,o,d);r.exposeAction(t,u),a&&r.addCase(u.fulfilled,a),l&&r.addCase(u.pending,l),s&&r.addCase(u.rejected,s),c&&r.addMatcher(u.settled,c),r.exposeCaseReducer(t,{fulfilled:a||Es,pending:l||Es,rejected:s||Es,settled:c||Es})}function Es(){}function Gn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Iw=$w({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===t.payload.id);r&&r.quantity>=n.stock||(r?r.quantity=(r.quantity||0)+1:e.items.push({...t.payload,quantity:1}))},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:vo,removeFromCart:I4,clearCart:vm,addAllToCart:D4,incrementQuantity:L4,decrementQuantity:R4}=Iw.actions,A4=Iw.reducer;function Dw(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Dw(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Xr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Dw(e))&&(r&&(r+=" "),r+=t);return r}function F4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}F4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Ka=e=>typeof e=="number"&&!isNaN(e),ri=e=>typeof e=="string",Jn=e=>typeof e=="function",z4=e=>ri(e)||Ka(e),Op=e=>ri(e)||Jn(e)?e:null,N4=(e,t)=>e===!1||Ka(e)&&e>0?e:t,jp=e=>x.isValidElement(e)||ri(e)||Jn(e)||Ka(e);function B4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function V4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:c,isIn:d,playToast:u}){let y=n?`${e}--${a}`:e,p=n?`${t}--${a}`:t,m=x.useRef(0);return x.useLayoutEffect(()=>{let g=c.current,w=y.split(" "),h=v=>{v.target===c.current&&(u(),g.removeEventListener("animationend",h),g.removeEventListener("animationcancel",h),m.current===0&&v.type!=="animationcancel"&&g.classList.remove(...w))};g.classList.add(...w),g.addEventListener("animationend",h),g.addEventListener("animationcancel",h)},[]),x.useEffect(()=>{let g=c.current,w=()=>{g.removeEventListener("animationend",w),r?B4(g,s,i):s()};d||(l?w():(m.current=1,g.className+=` ${p}`,g.addEventListener("animationend",w)))},[d]),X.createElement(X.Fragment,null,o)}}function sv(e,t){return{content:Lw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Lw(e,t,n=!1){return x.isValidElement(e)&&!ri(e.type)?x.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Jn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function U4({closeToast:e,theme:t,ariaLabel:n="close"}){return X.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},X.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},X.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function W4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:c,theme:d}){let u=i||a&&l===0,y={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(y.transform=`scaleX(${l})`);let p=Xr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),m=Jn(o)?o({rtl:s,type:r,defaultClassName:p}):Xr(p,o),g={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{c&&n()}};return X.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":u},X.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),X.createElement("div",{role:"progressbar","aria-hidden":u?"true":"false","aria-label":"notification timer",className:m,style:y,...g}))}var H4=1,Rw=()=>`${H4++}`;function G4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,c=new Set,d=v=>(c.add(v),()=>c.delete(v)),u=()=>{a=Array.from(s.values()),c.forEach(v=>v())},y=({containerId:v,toastId:b,updateId:S})=>{let E=v?v!==e:e!==1,P=s.has(b)&&S==null;return E||P},p=(v,b)=>{s.forEach(S=>{var E;(b==null||b===S.props.toastId)&&((E=S.toggle)==null||E.call(S,v))})},m=v=>{var b,S;(S=(b=v.props)==null?void 0:b.onClose)==null||S.call(b,v.removalReason),v.isActive=!1},g=v=>{if(v==null)s.forEach(m);else{let b=s.get(v);b&&m(b)}u()},w=()=>{i-=o.length,o=[]},h=v=>{var b,S;let{toastId:E,updateId:P}=v.props,k=P==null;v.staleId&&s.delete(v.staleId),v.isActive=!0,s.set(E,v),u(),n(sv(v,k?"added":"updated")),k&&((S=(b=v.props).onOpen)==null||S.call(b))};return{id:e,props:l,observe:d,toggle:p,removeToast:g,toasts:s,clearQueue:w,buildToast:(v,b)=>{if(y(b))return;let{toastId:S,updateId:E,data:P,staleId:k,delay:C}=b,M=E==null;M&&i++;let $={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(b).filter(([R,j])=>j!=null)),toastId:S,updateId:E,data:P,isIn:!1,className:Op(b.className||l.toastClassName),progressClassName:Op(b.progressClassName||l.progressClassName),autoClose:b.isLoading?!1:N4(b.autoClose,l.autoClose),closeToast(R){s.get(S).removalReason=R,g(S)},deleteToast(){let R=s.get(S);if(R!=null){if(n(sv(R,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){h(o.shift());return}u()}}};$.closeButton=l.closeButton,b.closeButton===!1||jp(b.closeButton)?$.closeButton=b.closeButton:b.closeButton===!0&&($.closeButton=jp(l.closeButton)?l.closeButton:!0);let D={content:v,props:$,staleId:k};l.limit&&l.limit>0&&i>l.limit&&M?o.push(D):Ka(C)?setTimeout(()=>{h(D)},C):h(D)},setProps(v){l=v},setToggle:(v,b)=>{let S=s.get(v);S&&(S.toggle=b)},isToastActive:v=>{var b;return(b=s.get(v))==null?void 0:b.isActive},getSnapshot:()=>a}}var mt=new Map,La=[],Mp=new Set,q4=e=>Mp.forEach(t=>t(e)),Aw=()=>mt.size>0;function Y4(){La.forEach(e=>zw(e.content,e.options)),La=[]}var X4=(e,{containerId:t})=>{var n;return(n=mt.get(t||1))==null?void 0:n.toasts.get(e)};function Fw(e,t){var n;if(t)return!!((n=mt.get(t))!=null&&n.isToastActive(e));let r=!1;return mt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function K4(e){if(!Aw()){La=La.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||z4(e))mt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=mt.get(e.containerId);t?t.removeToast(e.id):mt.forEach(n=>{n.removeToast(e.id)})}}var Q4=(e={})=>{mt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function zw(e,t){jp(e)&&(Aw()||La.push({content:e,options:t}),mt.forEach(n=>{n.buildToast(e,t)}))}function Z4(e){var t;(t=mt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Nw(e,t){mt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function J4(e){let t=e.containerId||1;return{subscribe(n){let r=G4(t,e,q4);mt.set(t,r);let i=r.observe(n);return Y4(),()=>{i(),mt.delete(t)}},setProps(n){var r;(r=mt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=mt.get(t))==null?void 0:n.getSnapshot()}}}function e3(e){return Mp.add(e),()=>{Mp.delete(e)}}function t3(e){return e&&(ri(e.toastId)||Ka(e.toastId))?e.toastId:Rw()}function Qa(e,t){return zw(e,t),t.toastId}function Xc(e,t){return{...t,type:t&&t.type||e,toastId:t3(t)}}function Kc(e){return(t,n)=>Qa(t,Xc(e,n))}function Z(e,t){return Qa(e,Xc("default",t))}Z.loading=(e,t)=>Qa(e,Xc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function n3(e,{pending:t,error:n,success:r},i){let o;t&&(o=ri(t)?Z.loading(t,i):Z.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,u)=>{if(d==null){Z.dismiss(o);return}let y={type:c,...a,...i,data:u},p=ri(d)?{render:d}:d;return o?Z.update(o,{...y,...p}):Z(p.render,{...y,...p}),u},s=Jn(e)?e():e;return s.then(c=>l("success",r,c)).catch(c=>l("error",n,c)),s}Z.promise=n3;Z.success=Kc("success");Z.info=Kc("info");Z.error=Kc("error");Z.warning=Kc("warning");Z.warn=Z.warning;Z.dark=(e,t)=>Qa(e,Xc("default",{theme:"dark",...t}));function r3(e){K4(e)}Z.dismiss=r3;Z.clearWaitingQueue=Q4;Z.isActive=Fw;Z.update=(e,t={})=>{let n=X4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Rw()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Qa(a,o)}};Z.done=e=>{Z.update(e,{progress:1})};Z.onChange=e3;Z.play=e=>Nw(!0,e);Z.pause=e=>Nw(!1,e);function i3(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=x.useRef(J4(e)).current;i(e);let o=(t=x.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(c=>{let{position:d}=c.props;s.has(d)||s.set(d,[]),s.get(d).push(c)}),Array.from(s,c=>l(c[0],c[1]))}return{getToastToRender:a,isToastActive:Fw,count:o==null?void 0:o.length}}function o3(e){let[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useRef(null),a=x.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:c,onClick:d,closeOnClick:u}=e;Z4({id:e.toastId,containerId:e.containerId,fn:n}),x.useEffect(()=>{if(e.pauseOnFocusLoss)return y(),()=>{p()}},[e.pauseOnFocusLoss]);function y(){document.hasFocus()||h(),window.addEventListener("focus",w),window.addEventListener("blur",h)}function p(){window.removeEventListener("focus",w),window.removeEventListener("blur",h)}function m(k){if(e.draggable===!0||e.draggable===k.pointerType){v();let C=o.current;a.canCloseOnClick=!0,a.canDrag=!0,C.style.transition="none",e.draggableDirection==="x"?(a.start=k.clientX,a.removalDistance=C.offsetWidth*(e.draggablePercent/100)):(a.start=k.clientY,a.removalDistance=C.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function g(k){let{top:C,bottom:M,left:$,right:D}=o.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&e.pauseOnHover&&k.clientX>=$&&k.clientX<=D&&k.clientY>=C&&k.clientY<=M?h():w()}function w(){n(!0)}function h(){n(!1)}function v(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",E)}function b(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",E)}function S(k){let C=o.current;if(a.canDrag&&C){a.didMove=!0,t&&h(),e.draggableDirection==="x"?a.delta=k.clientX-a.start:a.delta=k.clientY-a.start,a.start!==k.clientX&&(a.canCloseOnClick=!1);let M=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;C.style.transform=`translate3d(${M},0)`,C.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function E(){b();let k=o.current;if(a.canDrag&&a.didMove&&k){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let P={onPointerDown:m,onPointerUp:g};return l&&s&&(P.onMouseEnter=h,e.stacked||(P.onMouseLeave=w)),u&&(P.onClick=k=>{d&&d(k),a.canCloseOnClick&&c(!0)}),{playToast:w,pauseToast:h,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:P}}var a3=typeof window<"u"?x.useLayoutEffect:x.useEffect,Qc=({theme:e,type:t,isLoading:n,...r})=>X.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function s3(e){return X.createElement(Qc,{...e},X.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function l3(e){return X.createElement(Qc,{...e},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function c3(e){return X.createElement(Qc,{...e},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function u3(e){return X.createElement(Qc,{...e},X.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function d3(){return X.createElement("div",{className:"Toastify__spinner"})}var $p={info:l3,warning:s3,success:c3,error:u3,spinner:d3},f3=e=>e in $p;function p3({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Jn(r)?i=r({...o,isLoading:n}):x.isValidElement(r)?i=x.cloneElement(r,o):n?i=$p.spinner():f3(t)&&(i=$p[t](o))),i}var h3=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=o3(e),{closeButton:a,children:l,autoClose:s,onClick:c,type:d,hideProgressBar:u,closeToast:y,transition:p,position:m,className:g,style:w,progressClassName:h,updateId:v,role:b,progress:S,rtl:E,toastId:P,deleteToast:k,isIn:C,isLoading:M,closeOnClick:$,theme:D,ariaLabel:R}=e,j=Xr("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":$}),F=Jn(g)?g({rtl:E,position:m,type:d,defaultClassName:j}):Xr(j,g),A=p3(e),L=!!S||!s,O={closeToast:y,type:d,theme:D},T=null;return a===!1||(Jn(a)?T=a(O):x.isValidElement(a)?T=x.cloneElement(a,O):T=U4(O)),X.createElement(p,{isIn:C,done:k,position:m,preventExitTransition:n,nodeRef:r,playToast:o},X.createElement("div",{id:P,tabIndex:0,onClick:c,"data-in":C,className:F,...i,style:w,ref:r,...C&&{role:b,"aria-label":R}},A!=null&&X.createElement("div",{className:Xr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},A),Lw(l,e,!t),T,!e.customProgressBar&&X.createElement(W4,{...v&&!L?{key:`p-${v}`}:{},rtl:E,theme:D,delay:s,isRunning:t,isIn:C,closeToast:y,hide:u,type:d,className:h,controlledProgress:L,progress:S||0})))},m3=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),g3=V4(m3("bounce",!0)),v3={position:"top-right",transition:g3,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Dn(e){let t={...v3,...e},n=e.stacked,[r,i]=x.useState(!0),o=x.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=i3(t),{className:c,style:d,rtl:u,containerId:y,hotKeys:p}=t;function m(w){let h=Xr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":u});return Jn(c)?c({position:w,rtl:u,defaultClassName:h}):Xr(h,Op(c))}function g(){n&&(i(!0),Z.play())}return a3(()=>{var w;if(n){let h=o.current.querySelectorAll('[data-in="true"]'),v=12,b=(w=t.position)==null?void 0:w.includes("top"),S=0,E=0;Array.from(h).reverse().forEach((P,k)=>{let C=P;C.classList.add("Toastify__toast--stacked"),k>0&&(C.dataset.collapsed=`${r}`),C.dataset.pos||(C.dataset.pos=b?"top":"bot");let M=S*(r?.2:1)+(r?0:v*k);C.style.setProperty("--y",`${b?M:M*-1}px`),C.style.setProperty("--g",`${v}`),C.style.setProperty("--s",`${1-(r?E:0)}`),S+=C.offsetHeight,E+=.025})}},[r,s,n]),x.useEffect(()=>{function w(h){var v;let b=o.current;p(h)&&((v=b.querySelector('[tabIndex="0"]'))==null||v.focus(),i(!1),Z.pause()),h.key==="Escape"&&(document.activeElement===b||b!=null&&b.contains(document.activeElement))&&(i(!0),Z.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[p]),X.createElement("section",{ref:o,className:"Toastify",id:y,onMouseEnter:()=>{n&&(i(!1),Z.pause())},onMouseLeave:g,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,h)=>{let v=h.length?{...d}:{...d,pointerEvents:"none"};return X.createElement("div",{tabIndex:-1,className:m(w),"data-stacked":n,style:v,key:`c-${w}`},h.map(({content:b,props:S})=>X.createElement(h3,{...S,stacked:n,collapseAll:g,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},b)))}))}const ii="/Didiv/assets/nofoto-2f8d9d99.png",y3=_.div`
`,x3=_.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,b3=_.h2`
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

`,w3=_.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;_.div``;const S3=_.div`
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
`,_3=_.div`
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
`,C3=_.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,E3=_.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,k3=_.p`
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

`;const Bw=_.div.attrs({className:"card-buttons"})`
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
`;const T3=_.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,Pd=_.button`
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
`,P3=_.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,O3=_.button`
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
`,j3=_.div`
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
`,vi=_.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,Vw=_.div`
  text-align: center;
  width: 100px;
 
`,Uw=_.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ww=_.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Hw=_.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Gw=_.span`
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
`,qw=$w({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]},setFavorites(e,t){e.items=t.payload},addFavorite(e,t){e.items.push(t.payload)},removeFavorite(e,t){e.items=e.items.filter(n=>n.id!==t.payload)}}}),{toggleFavorite:EB,clearFavorite:Yw,addFavorite:lv,removeFavorite:cv,setFavorites:M3}=qw.actions,$3=qw.reducer,I3=async(e,t,n,r)=>{const i=t==null?void 0:t.find(a=>{var l;return((l=a.product)==null?void 0:l.documentId)===(e==null?void 0:e.documentId)});if(i){const a=i.user.map(l=>l.documentId);if(!a.includes(n)){a.push(n);const l=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:a}})});if(!l.ok)throw new Error("Не вдалося оновити favorite");return await l.json()}return i}const o=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e.documentId,user:[n]}})});if(!o.ok)throw new Error("Не вдалося створити favorite");return await o.json()},D3=async(e,t,n,r)=>{var l;const i=t==null?void 0:t.find(s=>{var c;return((c=s.product)==null?void 0:c.documentId)===(e==null?void 0:e.documentId)});if(!i)return;const o=(l=i.user)==null?void 0:l.filter(s=>s.documentId!==n).map(s=>s.documentId);if((o==null?void 0:o.length)===0){if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити favorite");return}const a=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:o}})});if(!a.ok)throw new Error("Не вдалося оновити favorite");return await a.json()},ui=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o){t?(n(cv(e.id)),r.warning(`${e.name} видалено з обраного`)):(n(lv(e)),r.success(`${e.name} додано в обране`));return}const a=o.documentId,l=o.id;try{const c=await(await fetch(`https://backenddidiv-production.up.railway.app/api/users/${l}?populate[favorites][populate][0]=product&populate[favorites][populate][1]=user`,{headers:{Authorization:`Bearer ${i}`}})).json(),d=await fetch("https://backenddidiv-production.up.railway.app/api/favorites?populate=*",{headers:{Authorization:`Bearer ${i}`}}),{data:u}=await d.json(),y=c==null?void 0:c.favorites;t?(await D3(e,y,a,i),n(cv(e.id)),r.warning(`${e.name} видалено з обраного`)):(await I3(e,u,a,i),n(lv(e)),r.success(`${e.name} додано в обране`))}catch(s){r.error("Не вдалося оновити обране"),console.error(s)}},Xw=()=>{const e=Jt(),[t,n]=x.useState([]),r=Ue(l=>l.favorites.items),i=Ue(l=>l.cart.items);x.useEffect(()=>{const l=new Date,s=new Date;s.setDate(l.getDate()-7);const c=s.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${c}`).then(d=>d.json()).then(d=>n(d.data)).catch(d=>console.error("Помилка завантаження нових товарів:",d))},[]);const o=(l,s)=>{s.stopPropagation();const c=r.some(d=>d.id===(l==null?void 0:l.id));ui(l,c,e,Z)},a=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:f.jsxs(Dj,{children:[f.jsx(Dn,{}),f.jsx(Lj,{children:"Нові товари"}),f.jsxs(Rj,{children:[a.map(l=>{var w;const s=r.some(h=>h.id===l.id),c=i.find(h=>h.id===l.id),u=(c?c.quantity:0)>=(l.stock||0),y=l.new_price&&l.new_price<l.price,p=y?l.new_price:l.price,m=y?Math.round((l.price-l.new_price)/l.price*100):0,g=(h,v)=>{if(v.stopPropagation(),u){Z.error("Товар уже у кошику");return}e(vo({...h,quantity:1})),Z.success(`${h.name} додано в кошик!`)};return f.jsxs(Aj,{children:[f.jsxs(Fj,{to:`/product/${l.id}`,children:[f.jsx(zj,{children:"Новинка"}),f.jsx("img",{src:((w=l.images)==null?void 0:w[0].url)||ii,alt:l.name,onError:h=>{h.currentTarget.onerror=null,h.currentTarget.src=ii}}),f.jsx("div",{className:"overlay"})]}),f.jsxs(Nj,{children:[f.jsx(Bj,{children:l.name}),f.jsxs(Vj,{children:[f.jsx(Vw,{children:f.jsxs(Uw,{children:[f.jsxs(Ww,{$discount:y,children:[p.toLocaleString()," грн"]}),y&&f.jsxs(Hw,{children:[l.price.toLocaleString()," грн"]}),y&&f.jsxs(Gw,{children:["-",m,"%"]})]})}),f.jsxs(Bw,{children:[f.jsx(ec,{onClick:h=>g(l,h),children:f.jsx(go,{size:24,color:c?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(ec,{onClick:h=>o(l,h),children:f.jsx(Ya,{size:24,fill:s?"#ff4d4f":"none",color:s?"#ff4d4f":"#000000",strokeWidth:s?1:2})})]})]})]})]},l.id)}),f.jsx(Uj,{to:"/catalog/new",children:f.jsxs(Wj,{children:[f.jsx("p",{children:"Усі новинки"}),f.jsx(Hj,{children:f.jsx(Bc,{size:24})})]})})]})]})};function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function L3(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function R3(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var A3=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(R3(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=L3(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),at="-ms-",tc="-moz-",ue="-webkit-",Kw="comm",xm="rule",bm="decl",F3="@import",Qw="@keyframes",z3="@layer",N3=Math.abs,Zc=String.fromCharCode,B3=Object.assign;function V3(e,t){return et(e,0)^45?(((t<<2^et(e,0))<<2^et(e,1))<<2^et(e,2))<<2^et(e,3):0}function Zw(e){return e.trim()}function U3(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function Ip(e,t){return e.indexOf(t)}function et(e,t){return e.charCodeAt(t)|0}function Ra(e,t,n){return e.slice(t,n)}function _n(e){return e.length}function wm(e){return e.length}function ks(e,t){return t.push(e),e}function W3(e,t){return e.map(t).join("")}var Jc=1,ao=1,Jw=0,Ot=0,Le=0,yo="";function eu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Jc,column:ao,length:a,return:""}}function Lo(e,t){return B3(eu("",null,null,"",null,null,0),e,{length:-e.length},t)}function H3(){return Le}function G3(){return Le=Ot>0?et(yo,--Ot):0,ao--,Le===10&&(ao=1,Jc--),Le}function Ft(){return Le=Ot<Jw?et(yo,Ot++):0,ao++,Le===10&&(ao=1,Jc++),Le}function On(){return et(yo,Ot)}function ol(){return Ot}function Za(e,t){return Ra(yo,e,t)}function Aa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eS(e){return Jc=ao=1,Jw=_n(yo=e),Ot=0,[]}function tS(e){return yo="",e}function al(e){return Zw(Za(Ot-1,Dp(e===91?e+2:e===40?e+1:e)))}function q3(e){for(;(Le=On())&&Le<33;)Ft();return Aa(e)>2||Aa(Le)>3?"":" "}function Y3(e,t){for(;--t&&Ft()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Za(e,ol()+(t<6&&On()==32&&Ft()==32))}function Dp(e){for(;Ft();)switch(Le){case e:return Ot;case 34:case 39:e!==34&&e!==39&&Dp(Le);break;case 40:e===41&&Dp(e);break;case 92:Ft();break}return Ot}function X3(e,t){for(;Ft()&&e+Le!==47+10;)if(e+Le===42+42&&On()===47)break;return"/*"+Za(t,Ot-1)+"*"+Zc(e===47?e:Ft())}function K3(e){for(;!Aa(On());)Ft();return Za(e,Ot)}function Q3(e){return tS(sl("",null,null,null,[""],e=eS(e),0,[0],e))}function sl(e,t,n,r,i,o,a,l,s){for(var c=0,d=0,u=a,y=0,p=0,m=0,g=1,w=1,h=1,v=0,b="",S=i,E=o,P=r,k=b;w;)switch(m=v,v=Ft()){case 40:if(m!=108&&et(k,u-1)==58){Ip(k+=de(al(v),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=al(v);break;case 9:case 10:case 13:case 32:k+=q3(m);break;case 92:k+=Y3(ol()-1,7);continue;case 47:switch(On()){case 42:case 47:ks(Z3(X3(Ft(),ol()),t,n),s);break;default:k+="/"}break;case 123*g:l[c++]=_n(k)*h;case 125*g:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+d:h==-1&&(k=de(k,/\f/g,"")),p>0&&_n(k)-u&&ks(p>32?dv(k+";",r,n,u-1):dv(de(k," ","")+";",r,n,u-2),s);break;case 59:k+=";";default:if(ks(P=uv(k,t,n,c,d,i,l,b,S=[],E=[],u),o),v===123)if(d===0)sl(k,t,P,P,S,o,u,l,E);else switch(y===99&&et(k,3)===110?100:y){case 100:case 108:case 109:case 115:sl(e,P,P,r&&ks(uv(e,P,P,0,0,i,l,b,i,S=[],u),E),i,E,u,l,r?S:E);break;default:sl(k,P,P,P,[""],E,0,l,E)}}c=d=p=0,g=h=1,b=k="",u=a;break;case 58:u=1+_n(k),p=m;default:if(g<1){if(v==123)--g;else if(v==125&&g++==0&&G3()==125)continue}switch(k+=Zc(v),v*g){case 38:h=d>0?1:(k+="\f",-1);break;case 44:l[c++]=(_n(k)-1)*h,h=1;break;case 64:On()===45&&(k+=al(Ft())),y=On(),d=u=_n(b=k+=K3(ol())),v++;break;case 45:m===45&&_n(k)==2&&(g=0)}}return o}function uv(e,t,n,r,i,o,a,l,s,c,d){for(var u=i-1,y=i===0?o:[""],p=wm(y),m=0,g=0,w=0;m<r;++m)for(var h=0,v=Ra(e,u+1,u=N3(g=a[m])),b=e;h<p;++h)(b=Zw(g>0?y[h]+" "+v:de(v,/&\f/g,y[h])))&&(s[w++]=b);return eu(e,t,n,i===0?xm:l,s,c,d)}function Z3(e,t,n){return eu(e,t,n,Kw,Zc(H3()),Ra(e,2,-2),0)}function dv(e,t,n,r){return eu(e,t,n,bm,Ra(e,0,r),Ra(e,r+1,-1),r)}function Wi(e,t){for(var n="",r=wm(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function J3(e,t,n,r){switch(e.type){case z3:if(e.children.length)break;case F3:case bm:return e.return=e.return||e.value;case Kw:return"";case Qw:return e.return=e.value+"{"+Wi(e.children,r)+"}";case xm:e.value=e.props.join(",")}return _n(n=Wi(e.children,r))?e.return=e.value+"{"+n+"}":""}function e5(e){var t=wm(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function t5(e){return function(t){t.root||(t=t.return)&&e(t)}}function n5(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var r5=function(t,n,r){for(var i=0,o=0;i=o,o=On(),i===38&&o===12&&(n[r]=1),!Aa(o);)Ft();return Za(t,Ot)},i5=function(t,n){var r=-1,i=44;do switch(Aa(i)){case 0:i===38&&On()===12&&(n[r]=1),t[r]+=r5(Ot-1,n,r);break;case 2:t[r]+=al(i);break;case 4:if(i===44){t[++r]=On()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Zc(i)}while(i=Ft());return t},o5=function(t,n){return tS(i5(eS(t),n))},fv=new WeakMap,a5=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!fv.get(r))&&!i){fv.set(t,!0);for(var o=[],a=o5(n,o),l=r.props,s=0,c=0;s<a.length;s++)for(var d=0;d<l.length;d++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},s5=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function nS(e,t){switch(V3(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+tc+e+at+e+e;case 6828:case 4268:return ue+e+at+e+e;case 6165:return ue+e+at+"flex-"+e+e;case 5187:return ue+e+de(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+at+"flex-$1$2")+e;case 5443:return ue+e+at+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ue+e+at+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ue+e+at+de(e,"shrink","negative")+e;case 5292:return ue+e+at+de(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+de(e,"-grow","")+ue+e+at+de(e,"grow","positive")+e;case 4554:return ue+de(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+at+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_n(e)-1-t>6)switch(et(e,t+1)){case 109:if(et(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+tc+(et(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ip(e,"stretch")?nS(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(et(e,t+1)!==115)break;case 6444:switch(et(e,_n(e)-3-(~Ip(e,"!important")&&10))){case 107:return de(e,":",":"+ue)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(et(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+at+"$2box$3")+e}break;case 5936:switch(et(e,t+11)){case 114:return ue+e+at+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+at+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+at+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ue+e+at+e+e}return e}var l5=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case bm:t.return=nS(t.value,t.length);break;case Qw:return Wi([Lo(t,{value:de(t.value,"@","@"+ue)})],i);case xm:if(t.length)return W3(t.props,function(o){switch(U3(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Wi([Lo(t,{props:[de(o,/:(read-\w+)/,":"+tc+"$1")]})],i);case"::placeholder":return Wi([Lo(t,{props:[de(o,/:(plac\w+)/,":"+ue+"input-$1")]}),Lo(t,{props:[de(o,/:(plac\w+)/,":"+tc+"$1")]}),Lo(t,{props:[de(o,/:(plac\w+)/,at+"input-$1")]})],i)}return""})}},c5=[l5],u5=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var w=g.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=t.stylisPlugins||c5,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var w=g.getAttribute("data-emotion").split(" "),h=1;h<w.length;h++)o[w[h]]=!0;l.push(g)});var s,c=[a5,s5];{var d,u=[J3,t5(function(g){d.insert(g)})],y=e5(c.concat(i,u)),p=function(w){return Wi(Q3(w),y)};s=function(w,h,v,b){d=v,p(w?w+"{"+h.styles+"}":h.styles),b&&(m.inserted[h.name]=!0)}}var m={key:n,sheet:new A3({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return m.sheet.hydrate(l),m},rS={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,Sm=Qe?Symbol.for("react.element"):60103,_m=Qe?Symbol.for("react.portal"):60106,tu=Qe?Symbol.for("react.fragment"):60107,nu=Qe?Symbol.for("react.strict_mode"):60108,ru=Qe?Symbol.for("react.profiler"):60114,iu=Qe?Symbol.for("react.provider"):60109,ou=Qe?Symbol.for("react.context"):60110,Cm=Qe?Symbol.for("react.async_mode"):60111,au=Qe?Symbol.for("react.concurrent_mode"):60111,su=Qe?Symbol.for("react.forward_ref"):60112,lu=Qe?Symbol.for("react.suspense"):60113,d5=Qe?Symbol.for("react.suspense_list"):60120,cu=Qe?Symbol.for("react.memo"):60115,uu=Qe?Symbol.for("react.lazy"):60116,f5=Qe?Symbol.for("react.block"):60121,p5=Qe?Symbol.for("react.fundamental"):60117,h5=Qe?Symbol.for("react.responder"):60118,m5=Qe?Symbol.for("react.scope"):60119;function Wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Sm:switch(e=e.type,e){case Cm:case au:case tu:case ru:case nu:case lu:return e;default:switch(e=e&&e.$$typeof,e){case ou:case su:case uu:case cu:case iu:return e;default:return t}}case _m:return t}}}function iS(e){return Wt(e)===au}ge.AsyncMode=Cm;ge.ConcurrentMode=au;ge.ContextConsumer=ou;ge.ContextProvider=iu;ge.Element=Sm;ge.ForwardRef=su;ge.Fragment=tu;ge.Lazy=uu;ge.Memo=cu;ge.Portal=_m;ge.Profiler=ru;ge.StrictMode=nu;ge.Suspense=lu;ge.isAsyncMode=function(e){return iS(e)||Wt(e)===Cm};ge.isConcurrentMode=iS;ge.isContextConsumer=function(e){return Wt(e)===ou};ge.isContextProvider=function(e){return Wt(e)===iu};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sm};ge.isForwardRef=function(e){return Wt(e)===su};ge.isFragment=function(e){return Wt(e)===tu};ge.isLazy=function(e){return Wt(e)===uu};ge.isMemo=function(e){return Wt(e)===cu};ge.isPortal=function(e){return Wt(e)===_m};ge.isProfiler=function(e){return Wt(e)===ru};ge.isStrictMode=function(e){return Wt(e)===nu};ge.isSuspense=function(e){return Wt(e)===lu};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===tu||e===au||e===ru||e===nu||e===lu||e===d5||typeof e=="object"&&e!==null&&(e.$$typeof===uu||e.$$typeof===cu||e.$$typeof===iu||e.$$typeof===ou||e.$$typeof===su||e.$$typeof===p5||e.$$typeof===h5||e.$$typeof===m5||e.$$typeof===f5)};ge.typeOf=Wt;rS.exports=ge;var g5=rS.exports,oS=g5,v5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},y5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},aS={};aS[oS.ForwardRef]=v5;aS[oS.Memo]=y5;var x5=!0;function sS(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Em=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||x5===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},lS=function(t,n,r){Em(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function b5(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var w5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},S5=/[A-Z]|^ms/g,_5=/_EMO_([^_]+?)_([^]*?)_EMO_/g,cS=function(t){return t.charCodeAt(1)===45},pv=function(t){return t!=null&&typeof t!="boolean"},Od=n5(function(e){return cS(e)?e:e.replace(S5,"-$&").toLowerCase()}),hv=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(_5,function(r,i,o){return Cn={name:i,styles:o,next:Cn},i})}return w5[t]!==1&&!cS(t)&&typeof n=="number"&&n!==0?n+"px":n};function Fa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Cn={name:n.name,styles:n.styles,next:Cn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Cn={name:r.name,styles:r.styles,next:Cn},r=r.next;var i=n.styles+";";return i}return C5(e,t,n)}case"function":{if(e!==void 0){var o=Cn,a=n(e);return Cn=o,Fa(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function C5(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Fa(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":pv(a)&&(r+=Od(o)+":"+hv(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)pv(a[l])&&(r+=Od(o)+":"+hv(o,a[l])+";");else{var s=Fa(e,t,a);switch(o){case"animation":case"animationName":{r+=Od(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var mv=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Cn,km=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Cn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Fa(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Fa(r,n,t[l]),i&&(o+=a[l]);mv.lastIndex=0;for(var s="",c;(c=mv.exec(o))!==null;)s+="-"+c[1];var d=b5(o)+s;return{name:d,styles:o,next:Cn}},E5=function(t){return t()},k5=gf["useInsertionEffect"]?gf["useInsertionEffect"]:!1,uS=k5||E5,Tm={}.hasOwnProperty,dS=x.createContext(typeof HTMLElement<"u"?u5({key:"css"}):null);dS.Provider;var fS=function(t){return x.forwardRef(function(n,r){var i=x.useContext(dS);return t(n,i,r)})},pS=x.createContext({}),Lp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",T5=function(t,n){var r={};for(var i in n)Tm.call(n,i)&&(r[i]=n[i]);return r[Lp]=t,r},P5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Em(n,r,i),uS(function(){return lS(n,r,i)}),null},O5=fS(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Lp],o=[r],a="";typeof e.className=="string"?a=sS(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=km(o,void 0,x.useContext(pS));a+=t.key+"-"+l.name;var s={};for(var c in e)Tm.call(e,c)&&c!=="css"&&c!==Lp&&(s[c]=e[c]);return s.ref=n,s.className=a,x.createElement(x.Fragment,null,x.createElement(P5,{cache:t,serialized:l,isStringTag:typeof i=="string"}),x.createElement(i,s))}),j5=O5,K=function(t,n){var r=arguments;if(n==null||!Tm.call(n,"css"))return x.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=j5,o[1]=T5(t,n);for(var a=2;a<i;a++)o[a]=r[a];return x.createElement.apply(null,o)};function Pm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return km(t)}var M5=function(){var t=Pm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},$5=NT,I5=function(t){return t!=="theme"},gv=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?$5:I5},vv=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},D5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Em(n,r,i),uS(function(){return lS(n,r,i)}),null},L5=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=vv(t,n,r),s=l||gv(i),c=!s("as");return function(){var d=arguments,u=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&u.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)u.push.apply(u,d);else{u.push(d[0][0]);for(var y=d.length,p=1;p<y;p++)u.push(d[p],d[0][p])}var m=fS(function(g,w,h){var v=c&&g.as||i,b="",S=[],E=g;if(g.theme==null){E={};for(var P in g)E[P]=g[P];E.theme=x.useContext(pS)}typeof g.className=="string"?b=sS(w.registered,S,g.className):g.className!=null&&(b=g.className+" ");var k=km(u.concat(S),w.registered,E);b+=w.key+"-"+k.name,a!==void 0&&(b+=" "+a);var C=c&&l===void 0?gv(v):s,M={};for(var $ in g)c&&$==="as"||C($)&&(M[$]=g[$]);return M.className=b,M.ref=h,x.createElement(x.Fragment,null,x.createElement(D5,{cache:w,serialized:k,isStringTag:typeof v=="string"}),x.createElement(v,M))});return m.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=u,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return"."+a}}),m.withComponent=function(g,w){return e(g,J({},n,w,{shouldForwardProp:vv(m,w,!0)})).apply(void 0,u)},m}},R5=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ae=L5.bind();R5.forEach(function(e){Ae[e]=Ae(e)});const A5=Ae.section`
  background-color: var(--second-background);
`,F5=Ae.div`
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
`,z5=Ae.div`

`,N5=Ae.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,B5=Ae.div`
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
`;const V5=Ae(Te)`
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
`,U5=Ae.div`
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
`,W5=Ae.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,H5=Ae.p`
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
`;var G5={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};q5(G5);function q5(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var Y5="#4fa94d",X5={"aria-busy":!0,role:"progressbar"},K5=_.div`
  display: ${e=>e.$visible?"flex":"none"};
`,Q5="http://www.w3.org/2000/svg",Ja=({height:e=100,width:t=100,radius:n=5,color:r=Y5,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>f.jsx(K5,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...X5,children:f.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:Q5,"data-testid":"ball-triangle-svg",children:[f.jsx("title",{children:"Ball Triangle"}),f.jsx("desc",{children:"Animated representation of three balls"}),f.jsx("g",{fill:"none",fillRule:"evenodd",children:f.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[f.jsxs("circle",{cx:"5",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"27",cy:"5",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"49",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),rn=242.776657104492,Z5=1.6,J5=um`
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
  animation: ${J5} ${Z5}s linear infinite;
`;var eM=um`
to {
   transform: rotate(360deg);
 }
`;_.svg`
  animation: ${eM} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var tM=um`
to {
   stroke-dashoffset: 136;
 }
`;_.polygon`
  stroke-dasharray: 17;
  animation: ${tM} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;_.svg`
  transform-origin: 50% 65%;
`;const nM=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0);return x.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ja,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsx(A5,{children:f.jsxs(F5,{children:[f.jsx(z5,{children:f.jsx(Xw,{})}),f.jsx(N5,{children:"Каталог"}),f.jsx(B5,{children:e.map(i=>f.jsxs(V5,{to:`/catalog/${i.title}`,children:[f.jsx(U5,{children:f.jsx(W5,{src:i.image,alt:i.title})}),f.jsx(H5,{children:i.title})]},i.id))})]})})},rM=Ae.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,iM=Ae.h1`
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
`,oM=Ae.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,aM=Ae(Te)`

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

  
`,sM=()=>f.jsxs(rM,{children:[f.jsxs(iM,{children:[" ",f.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),f.jsx(oM,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),f.jsx(aM,{children:" На головну"})]});const lM=_.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,cM=_.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var hS={},mS={},du={},gS={exports:{}},es={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var yv=Object.getOwnPropertySymbols,uM=Object.prototype.hasOwnProperty,dM=Object.prototype.propertyIsEnumerable;function fM(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function pM(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var hM=pM()?Object.assign:function(e,t){for(var n,r=fM(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)uM.call(n,a)&&(r[a]=n[a]);if(yv){i=yv(n);for(var l=0;l<i.length;l++)dM.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},vS={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om=hM,xo=60103,yS=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var xS=60109,bS=60110,wS=60112;le.Suspense=60113;var SS=60115,_S=60116;if(typeof Symbol=="function"&&Symbol.for){var nn=Symbol.for;xo=nn("react.element"),yS=nn("react.portal"),le.Fragment=nn("react.fragment"),le.StrictMode=nn("react.strict_mode"),le.Profiler=nn("react.profiler"),xS=nn("react.provider"),bS=nn("react.context"),wS=nn("react.forward_ref"),le.Suspense=nn("react.suspense"),SS=nn("react.memo"),_S=nn("react.lazy")}var xv=typeof Symbol=="function"&&Symbol.iterator;function mM(e){return e===null||typeof e!="object"?null:(e=xv&&e[xv]||e["@@iterator"],typeof e=="function"?e:null)}function ts(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var CS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ES={};function bo(e,t,n){this.props=e,this.context=t,this.refs=ES,this.updater=n||CS}bo.prototype.isReactComponent={};bo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(ts(85));this.updater.enqueueSetState(this,e,t,"setState")};bo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kS(){}kS.prototype=bo.prototype;function jm(e,t,n){this.props=e,this.context=t,this.refs=ES,this.updater=n||CS}var Mm=jm.prototype=new kS;Mm.constructor=jm;Om(Mm,bo.prototype);Mm.isPureReactComponent=!0;var $m={current:null},TS=Object.prototype.hasOwnProperty,PS={key:!0,ref:!0,__self:!0,__source:!0};function OS(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)TS.call(t,r)&&!PS.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xo,type:e,key:o,ref:a,props:i,_owner:$m.current}}function gM(e,t){return{$$typeof:xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Im(e){return typeof e=="object"&&e!==null&&e.$$typeof===xo}function vM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bv=/\/+/g;function jd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vM(""+e.key):t.toString(36)}function ll(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case xo:case yS:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+jd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(bv,"$&/")+"/"),ll(i,t,n,"",function(c){return c})):i!=null&&(Im(i)&&(i=gM(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(bv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+jd(o,l);a+=ll(o,t,n,s,i)}else if(s=mM(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+jd(o,l++),a+=ll(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(ts(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Ts(e,t,n){if(e==null)return e;var r=[],i=0;return ll(e,r,"","",function(o){return t.call(n,o,i++)}),r}function yM(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var jS={current:null};function nr(){var e=jS.current;if(e===null)throw Error(ts(321));return e}var xM={ReactCurrentDispatcher:jS,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:$m,IsSomeRendererActing:{current:!1},assign:Om};le.Children={map:Ts,forEach:function(e,t,n){Ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ts(e,function(){t++}),t},toArray:function(e){return Ts(e,function(t){return t})||[]},only:function(e){if(!Im(e))throw Error(ts(143));return e}};le.Component=bo;le.PureComponent=jm;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xM;le.cloneElement=function(e,t,n){if(e==null)throw Error(ts(267,e));var r=Om({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=$m.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)TS.call(t,s)&&!PS.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:xo,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:bS,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:xS,_context:e},e.Consumer=e};le.createElement=OS;le.createFactory=function(e){var t=OS.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:wS,render:e}};le.isValidElement=Im;le.lazy=function(e){return{$$typeof:_S,_payload:{_status:-1,_result:e},_init:yM}};le.memo=function(e,t){return{$$typeof:SS,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return nr().useCallback(e,t)};le.useContext=function(e,t){return nr().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return nr().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return nr().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return nr().useLayoutEffect(e,t)};le.useMemo=function(e,t){return nr().useMemo(e,t)};le.useReducer=function(e,t,n){return nr().useReducer(e,t,n)};le.useRef=function(e){return nr().useRef(e)};le.useState=function(e){return nr().useState(e)};le.version="17.0.2";vS.exports=le;var bM=vS.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wM=bM,MS=60103;es.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var wv=Symbol.for;MS=wv("react.element"),es.Fragment=wv("react.fragment")}var SM=wM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_M=Object.prototype.hasOwnProperty,CM={key:!0,ref:!0,__self:!0,__source:!0};function $S(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)_M.call(t,r)&&!CM.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:MS,type:e,key:o,ref:a,props:i,_owner:SM.current}}es.jsx=$S;es.jsxs=$S;gS.exports=es;var Mt=gS.exports,IS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(IS);var $t=IS.exports;const EM={"lds-circle":"_lds-circle_qlxhy_1"},kM=Object.freeze(Object.defineProperty({__proto__:null,default:EM},Symbol.toStringTag,{value:"Module"})),TM=jt(kM);var DS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(du,"__esModule",{value:!0});du.Circle=void 0;const PM=Mt,OM=DS($t),jM=DS(TM);function MM({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,PM.jsx)("div",{className:(0,OM.default)(jM.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}du.Circle=MM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=du;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(mS);var LS={},fu={};const $M={"lds-default":"_lds-default_wt1n8_1"},IM=Object.freeze(Object.defineProperty({__proto__:null,default:$M},Symbol.toStringTag,{value:"Module"})),DM=jt(IM);var RS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fu,"__esModule",{value:!0});fu.Default=void 0;const Sv=Mt,LM=RS($t),RM=RS(DM);function AM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,Sv.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,Sv.jsx)("div",{className:(0,LM.default)(RM.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}fu.Default=AM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=fu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(LS);var AS={},pu={};const FM={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},zM=Object.freeze(Object.defineProperty({__proto__:null,default:FM},Symbol.toStringTag,{value:"Module"})),NM=jt(zM);var FS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pu,"__esModule",{value:!0});pu.DualRing=void 0;const _v=Mt,Cv=FS($t),Ev=FS(NM);function BM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,_v.jsx)("div",{className:(0,Cv.default)(Ev.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,_v.jsx)("div",{className:(0,Cv.default)(Ev.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}pu.DualRing=BM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=pu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(AS);var zS={},hu={};const VM={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},UM=Object.freeze(Object.defineProperty({__proto__:null,default:VM},Symbol.toStringTag,{value:"Module"})),WM=jt(UM);var NS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hu,"__esModule",{value:!0});hu.Ellipsis=void 0;const kv=Mt,HM=NS($t),GM=NS(WM);function qM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,kv.jsx)("div",{style:{background:`${e}`}},l));return(0,kv.jsx)("div",{className:(0,HM.default)(GM.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}hu.Ellipsis=qM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=hu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(zS);var BS={},mu={};const YM={"lds-facebook":"_lds-facebook_1ts9g_1"},XM=Object.freeze(Object.defineProperty({__proto__:null,default:YM},Symbol.toStringTag,{value:"Module"})),KM=jt(XM);var VS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mu,"__esModule",{value:!0});mu.Facebook=void 0;const Tv=Mt,QM=VS($t),ZM=VS(KM);function JM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,Tv.jsx)("div",{style:{background:`${e}`}},l));return(0,Tv.jsx)("div",{className:(0,QM.default)(ZM.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}mu.Facebook=JM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=mu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(BS);var US={},gu={};const e$={"lds-grid":"_lds-grid_1ftub_1"},t$=Object.freeze(Object.defineProperty({__proto__:null,default:e$},Symbol.toStringTag,{value:"Module"})),n$=jt(t$);var WS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gu,"__esModule",{value:!0});gu.Grid=void 0;const Pv=Mt,r$=WS($t),i$=WS(n$);function o$({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,Pv.jsx)("div",{style:{background:`${e}`}},l));return(0,Pv.jsx)("div",{className:(0,r$.default)(i$.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}gu.Grid=o$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=gu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(US);var HS={},vu={};const a$={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},s$=Object.freeze(Object.defineProperty({__proto__:null,default:a$},Symbol.toStringTag,{value:"Module"})),l$=jt(s$);var GS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vu,"__esModule",{value:!0});vu.Heart=void 0;const Ps=Mt,Md=GS($t),$d=GS(l$);function c$({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Ps.jsx)("div",{className:(0,Md.default)($d.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,Ps.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,Ps.jsx)("div",{className:(0,Md.default)($d.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,Ps.jsx)("div",{className:(0,Md.default)($d.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}vu.Heart=c$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=vu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(HS);var qS={},yu={};const u$={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},d$=Object.freeze(Object.defineProperty({__proto__:null,default:u$},Symbol.toStringTag,{value:"Module"})),f$=jt(d$);var YS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yu,"__esModule",{value:!0});yu.Hourglass=void 0;const Ov=Mt,jv=YS($t),Mv=YS(f$);function p$({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,Ov.jsx)("div",{className:(0,jv.default)(Mv.default["lds-hourglass"],n),style:{...r},children:(0,Ov.jsx)("div",{className:(0,jv.default)(Mv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}yu.Hourglass=p$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=yu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(qS);var XS={},xu={};const KS="_center_1rufi_10",QS="_spin_1rufi_1",h$={"lds-orbitals":"_lds-orbitals_1rufi_1",center:KS,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:QS},m$=Object.freeze(Object.defineProperty({__proto__:null,center:KS,default:h$,spin:QS},Symbol.toStringTag,{value:"Module"})),g$=jt(m$);var ZS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xu,"__esModule",{value:!0});xu.Orbitals=void 0;const ot=Mt,ft=ZS($t),_e=ZS(g$);function v$({color:e="#7f58af",className:t,style:n}){return(0,ot.jsxs)("div",{className:(0,ft.default)(_e.default["lds-orbitals"],t),style:{...n},children:[(0,ot.jsx)("div",{className:_e.default.center,style:{background:e}}),(0,ot.jsxs)("div",{className:(0,ft.default)(_e.default["inner-spin"]),children:[(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-arc"],_e.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-arc"],_e.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-arc"],_e.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-arc"],_e.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-moon-a"]),style:{background:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["inner-moon-b"]),style:{background:e}})]}),(0,ot.jsxs)("div",{className:(0,ft.default)(_e.default["outer-spin"]),children:[(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-arc"],_e.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-arc"],_e.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-arc"],_e.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-arc"],_e.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-moon-a"]),style:{background:e}}),(0,ot.jsx)("div",{className:(0,ft.default)(_e.default["outer-moon-b"]),style:{background:e}})]})]})}xu.Orbitals=v$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=xu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(XS);var JS={},bu={};const y$={"lds-ring":"_lds-ring_xgxdp_1"},x$=Object.freeze(Object.defineProperty({__proto__:null,default:y$},Symbol.toStringTag,{value:"Module"})),b$=jt(x$);var e2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bu,"__esModule",{value:!0});bu.Ring=void 0;const $v=Mt,w$=e2($t),S$=e2(b$);function _$({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,$v.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,$v.jsx)("div",{className:(0,w$.default)(S$.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}bu.Ring=_$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=bu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(JS);var t2={},wu={};const C$={"lds-ripple":"_lds-ripple_1lgcf_1"},E$=Object.freeze(Object.defineProperty({__proto__:null,default:C$},Symbol.toStringTag,{value:"Module"})),k$=jt(E$);var n2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wu,"__esModule",{value:!0});wu.Ripple=void 0;const Iv=Mt,T$=n2($t),P$=n2(k$);function O$({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,Iv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,Iv.jsx)("div",{className:(0,T$.default)(P$.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}wu.Ripple=O$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=wu;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(t2);var r2={},Su={};const j$={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},M$=Object.freeze(Object.defineProperty({__proto__:null,default:j$},Symbol.toStringTag,{value:"Module"})),$$=jt(M$);var i2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Su,"__esModule",{value:!0});Su.Roller=void 0;const Id=Mt,Dv=i2($t),Lv=i2($$);function I$({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Id.jsx)("div",{children:(0,Id.jsx)("div",{className:(0,Dv.default)(Lv.default["div-after"]),style:{background:e}})},o));return(0,Id.jsx)("div",{className:(0,Dv.default)(Lv.default["lds-roller"],t),style:{...n},children:r})}Su.Roller=I$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=Su;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(r2);var o2={},_u={};const D$={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},L$=Object.freeze(Object.defineProperty({__proto__:null,default:D$},Symbol.toStringTag,{value:"Module"})),R$=jt(L$);var a2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_u,"__esModule",{value:!0});_u.Spinner=void 0;const Dd=Mt,Rv=a2($t),Av=a2(R$);function A$({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,Dd.jsx)("div",{children:(0,Dd.jsx)("div",{className:(0,Rv.default)(Av.default["div-after"]),style:{background:e}})},o));return(0,Dd.jsx)("div",{className:(0,Rv.default)(Av.default["lds-spinner"],t),style:{...n},children:r})}_u.Spinner=A$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=_u;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(o2);var s2={},Cu={};const l2="_left_v9vlb_30",c2="_right_v9vlb_33",u2="_anim_v9vlb_37",F$={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:l2,right:c2,anim:u2,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},z$=Object.freeze(Object.defineProperty({__proto__:null,anim:u2,default:F$,left:l2,right:c2},Symbol.toStringTag,{value:"Module"})),N$=jt(z$);var d2=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cu,"__esModule",{value:!0});Cu.Ouroboro=void 0;const Ro=Mt,Ao=d2($t),Fo=d2(N$);function B$({color:e="#7f58af",style:t,className:n}){return(0,Ro.jsxs)("div",{className:(0,Ao.default)(Fo.default["lds-ouroboro"],n),style:{...t},children:[(0,Ro.jsx)("span",{className:(0,Ao.default)(Fo.default.left),children:(0,Ro.jsx)("span",{className:(0,Ao.default)(Fo.default.anim),style:{background:e}})}),(0,Ro.jsx)("span",{className:(0,Ao.default)(Fo.default.right),children:(0,Ro.jsx)("span",{className:(0,Ao.default)(Fo.default.anim),style:{background:e}})})]})}Cu.Ouroboro=B$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Cu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(s2);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=mS;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=LS;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=AS;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=zS;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=BS;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=US;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=HS;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=qS;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const c=XS;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return c.Orbitals}});const d=JS;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return d.Ring}});const u=t2;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return u.Ripple}});const y=r2;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return y.Roller}});const p=o2;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return p.Spinner}});const m=s2;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return m.Ouroboro}})})(hS);const V$=()=>f.jsx(cM,{children:f.jsx(hS.Default,{color:"#6d433da8"})});const U$="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",W$=BP`
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
  src: url(${U$}) format('truetype');
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
`,H$=_.div`
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
`,G$=_(Te)`
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
`,q$=_.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,Y$=_.h3`

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
`,X$=_.a`

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
`,K$=_.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,Q$=()=>{const[e,t]=x.useState([]);return x.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),f.jsxs(f.Fragment,{children:[f.jsx(q$,{children:"Каталог"}),f.jsxs(H$,{children:[e.slice(0,7).map(n=>f.jsx(G$,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:f.jsx(Y$,{children:n.title})},n.title)),f.jsxs(X$,{href:"catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(K$,{children:f.jsx(Bc,{size:24})})]})]})]})};function Fv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Dm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Fv(t[r])&&Fv(e[r])&&Object.keys(t[r]).length>0&&Dm(e[r],t[r])})}const f2={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function jn(){const e=typeof document<"u"?document:{};return Dm(e,f2),e}const Z$={document:f2,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function bt(){const e=typeof window<"u"?window:{};return Dm(e,Z$),e}function J$(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function eI(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function p2(e,t=0){return setTimeout(e,t)}function nc(){return Date.now()}function tI(e){const t=bt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function nI(e,t="x"){const n=bt();let r,i,o;const a=tI(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Os(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function rI(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Dt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!rI(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(Os(t[l])&&Os(r[l])?r[l].__swiper__?t[l]=r[l]:Dt(t[l],r[l]):!Os(t[l])&&Os(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Dt(t[l],r[l])):t[l]=r[l])}}}return t}function yi(e,t,n){e.style.setProperty(t,n)}function h2({swiper:e,targetPosition:t,side:n}){const r=bt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",c=(u,y)=>s==="next"&&u>=y||s==="prev"&&u<=y,d=()=>{a=new Date().getTime(),o===null&&(o=a);const u=Math.max(Math.min((a-o)/l,1),0),y=.5-Math.cos(u*Math.PI)/2;let p=i+y*(t-i);if(c(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),c(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function kn(e,t=""){const n=bt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function iI(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function oI(e,t){const n=bt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=iI(e,t))),r}function rc(e){try{console.warn(e);return}catch{}}function ic(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:J$(t)),n}function aI(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function sI(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function gr(e,t){return bt().getComputedStyle(e,null).getPropertyValue(t)}function oc(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function m2(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Rp(e,t,n){const r=bt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function za(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function g2(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=kn(e.el,`.${r[i]}`)[0];o||(o=ic("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const zv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function lI({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:zv};function i(p){let m;return p&&typeof p=="string"&&e.isElement&&(m=e.el.querySelector(p)||e.hostEl.querySelector(p),m)?m:(p&&(typeof p=="string"&&(m=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&m&&m.length>1&&e.el.querySelectorAll(p).length===1?m=e.el.querySelector(p):m&&m.length===1&&(m=m[0])),p&&!m?p:m)}function o(p,m){const g=e.params.navigation;p=qe(p),p.forEach(w=>{w&&(w.classList[m?"add":"remove"](...g.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=m),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](g.lockClass))})}function a(){const{nextEl:p,prevEl:m}=e.navigation;if(e.params.loop){o(m,!1),o(p,!1);return}o(m,e.isBeginning&&!e.params.rewind),o(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const p=e.params.navigation;if(e.params.navigation=g2(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let m=i(p.nextEl),g=i(p.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:g}),m=qe(m),g=qe(g);const w=(h,v)=>{if(h){if(p.addIcons&&h.matches(".swiper-button-next,.swiper-button-prev")&&!h.querySelector("svg")){const b=document.createElement("div");za(b,zv),h.appendChild(b.querySelector("svg")),b.remove()}h.addEventListener("click",v==="next"?s:l)}!e.enabled&&h&&h.classList.add(...p.lockClass.split(" "))};m.forEach(h=>w(h,"next")),g.forEach(h=>w(h,"prev"))}function d(){let{nextEl:p,prevEl:m}=e.navigation;p=qe(p),m=qe(m);const g=(w,h)=>{w.removeEventListener("click",h==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(w=>g(w,"next")),m.forEach(w=>g(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?y():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:p,prevEl:m}=e.navigation;if(p=qe(p),m=qe(m),e.enabled){a();return}[...p,...m].filter(g=>!!g).forEach(g=>g.classList.add(e.params.navigation.lockClass))}),n("click",(p,m)=>{let{nextEl:g,prevEl:w}=e.navigation;g=qe(g),w=qe(w);const h=m.target;let v=w.includes(h)||g.includes(h);if(e.isElement&&!v){const b=m.path||m.composedPath&&m.composedPath();b&&(v=b.find(S=>g.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===h||e.pagination.el.contains(h)))return;let b;g.length?b=g[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(b=w[0].classList.contains(e.params.navigation.hiddenClass)),r(b===!0?"navigationShow":"navigationHide"),[...g,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const u=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),a()},y=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:u,disable:y,update:a,init:c,destroy:d})}function zo(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function cI({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(h,v){const{bulletActiveClass:b}=e.params.pagination;h&&(h=h[`${v==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${b}-${v}`),h=h[`${v==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${b}-${v}-${v}`)))}function c(h,v,b){if(h=h%b,v=v%b,v===h+1)return"next";if(v===h-1)return"previous"}function d(h){const v=h.target.closest(zo(e.params.pagination.bulletClass));if(!v)return;h.preventDefault();const b=oc(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const S=c(e.realIndex,b,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b)}function u(){const h=e.rtl,v=e.params.pagination;if(l())return;let b=e.pagination.el;b=qe(b);let S,E;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,k=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,S=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const C=e.pagination.bullets;let M,$,D;if(v.dynamicBullets&&(o=Rp(C[0],e.isHorizontal()?"width":"height",!0),b.forEach(R=>{R.style[e.isHorizontal()?"width":"height"]=`${o*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&E!==void 0&&(a+=S-(E||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),M=Math.max(S-a,0),$=M+(Math.min(C.length,v.dynamicMainBullets)-1),D=($+M)/2),C.forEach(R=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${v.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();R.classList.remove(...j)}),b.length>1)C.forEach(R=>{const j=oc(R);j===S?R.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&R.setAttribute("part","bullet"),v.dynamicBullets&&(j>=M&&j<=$&&R.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),j===M&&s(R,"prev"),j===$&&s(R,"next"))});else{const R=C[S];if(R&&R.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&C.forEach((j,F)=>{j.setAttribute("part",F===S?"bullet-active":"bullet")}),v.dynamicBullets){const j=C[M],F=C[$];for(let A=M;A<=$;A+=1)C[A]&&C[A].classList.add(...`${v.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(F,"next")}}if(v.dynamicBullets){const R=Math.min(C.length,v.dynamicMainBullets+4),j=(o*R-o)/2-D*o,F=h?"right":"left";C.forEach(A=>{A.style[e.isHorizontal()?F:"top"]=`${j}px`})}}b.forEach((C,M)=>{if(v.type==="fraction"&&(C.querySelectorAll(zo(v.currentClass)).forEach($=>{$.textContent=v.formatFractionCurrent(S+1)}),C.querySelectorAll(zo(v.totalClass)).forEach($=>{$.textContent=v.formatFractionTotal(k)})),v.type==="progressbar"){let $;v.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";const D=(S+1)/k;let R=1,j=1;$==="horizontal"?R=D:j=D,C.querySelectorAll(zo(v.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${R}) scaleY(${j})`,F.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(za(C,v.renderCustom(e,S+1,k)),M===0&&r("paginationRender",C)):(M===0&&r("paginationRender",C),r("paginationUpdate",C)),e.params.watchOverflow&&e.enabled&&C.classList[e.isLocked?"add":"remove"](v.lockClass)})}function y(){const h=e.params.pagination;if(l())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=qe(b);let S="";if(h.type==="bullets"){let E=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>v&&(E=v);for(let P=0;P<E;P+=1)h.renderBullet?S+=h.renderBullet.call(e,P,h.bulletClass):S+=`<${h.bulletElement} ${e.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(e,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(e,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach(E=>{h.type!=="custom"&&za(E,S||""),h.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(zo(h.bulletClass)))}),h.type!=="custom"&&r("paginationRender",b[0])}function p(){e.params.pagination=g2(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let v;typeof h.el=="string"&&e.isElement&&(v=e.el.querySelector(h.el)),!v&&typeof h.el=="string"&&(v=[...document.querySelectorAll(h.el)]),v||(v=h.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(h.el)],v.length>1&&(v=v.find(b=>m2(b,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=qe(v),v.forEach(b=>{h.type==="bullets"&&h.clickable&&b.classList.add(...(h.clickableClass||"").split(" ")),b.classList.add(h.modifierClass+h.type),b.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(b.classList.add(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&b.classList.add(h.progressbarOppositeClass),h.clickable&&b.addEventListener("click",d),e.enabled||b.classList.add(h.lockClass)}))}function m(){const h=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=qe(v),v.forEach(b=>{b.classList.remove(h.hiddenClass),b.classList.remove(h.modifierClass+h.type),b.classList.remove(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(b.classList.remove(...(h.clickableClass||"").split(" ")),b.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(b=>b.classList.remove(...h.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const h=e.params.pagination;let{el:v}=e.pagination;v=qe(v),v.forEach(b=>{b.classList.remove(h.horizontalClass,h.verticalClass),b.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(p(),y(),u())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&u()}),n("snapIndexChange",()=>{u()}),n("snapGridLengthChange",()=>{y(),u()}),n("destroy",()=>{m()}),n("enable disable",()=>{let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{u()}),n("click",(h,v)=>{const b=v.target,S=qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const E=S[0].classList.contains(e.params.pagination.hiddenClass);r(E===!0?"paginationShow":"paginationHide"),S.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),p(),y(),u()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=qe(h),h.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:g,disable:w,render:y,update:u,init:p,destroy:m})}function uI({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,c,d=new Date().getTime(),u,y,p,m,g,w;function h(O){!e||e.destroyed||!e.wrapperEl||O.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",h),!(w||O.detail&&O.detail.bySwiperTouchMove)&&M())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(s=c,u=!1);const O=e.autoplay.paused?c:d+s-new Date().getTime();e.autoplay.timeLeft=O,r("autoplayTimeLeft",O,O/l),a=requestAnimationFrame(()=>{v()})},b=()=>{let O;return e.virtual&&e.params.virtual.enabled?O=e.slides.find(I=>I.classList.contains("swiper-slide-active")):O=e.slides[e.activeIndex],O?parseInt(O.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let O=e.params.autoplay.delay;const T=b();return!Number.isNaN(T)&&T>0&&(O=T),O},E=O=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),v();let T=O;typeof T>"u"&&(T=S(),l=T,s=T),c=T;const I=e.params.speed,z=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,I,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,I,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return T>0?(clearTimeout(o),o=setTimeout(()=>{z()},T)):requestAnimationFrame(()=>{z()}),T},P=()=>{d=new Date().getTime(),e.autoplay.running=!0,E(),r("autoplayStart")},k=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},C=(O,T)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),O||(g=!0);const I=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",h):M()};if(e.autoplay.paused=!0,T){I();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),I())},M=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),g?(g=!1,E(c)):E(),e.autoplay.paused=!1,r("autoplayResume"))},$=()=>{if(e.destroyed||!e.autoplay.running)return;const O=jn();O.visibilityState==="hidden"&&(g=!0,C(!0)),O.visibilityState==="visible"&&M()},D=O=>{O.pointerType==="mouse"&&(g=!0,w=!0,!(e.animating||e.autoplay.paused)&&C(!0))},R=O=>{O.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&M())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",D),e.el.addEventListener("pointerleave",R))},F=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",D),e.el.removeEventListener("pointerleave",R))},A=()=>{jn().addEventListener("visibilitychange",$)},L=()=>{jn().removeEventListener("visibilitychange",$)};n("init",()=>{e.params.autoplay.enabled&&(j(),A(),P())}),n("destroy",()=>{F(),L(),e.autoplay.running&&k()}),n("_freeModeStaticRelease",()=>{(p||g)&&M()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?k():C(!0,!0)}),n("beforeTransitionStart",(O,T,I)=>{e.destroyed||!e.autoplay.running||(I||!e.params.autoplay.disableOnInteraction?C(!0,!0):k())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){k();return}y=!0,p=!1,g=!1,m=setTimeout(()=>{g=!0,p=!0,C(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!y)){if(clearTimeout(m),clearTimeout(o),e.params.autoplay.disableOnInteraction){p=!1,y=!1;return}p&&e.params.cssMode&&M(),p=!1,y=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=S(),l=S())}),Object.assign(e.autoplay,{start:P,stop:k,pause:C,resume:M})}let Ld;function dI(){const e=bt(),t=jn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function v2(){return Ld||(Ld=dI()),Ld}let Rd;function fI({userAgent:e}={}){const t=v2(),n=bt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),y=r==="Win32";let p=r==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&p&&t.touch&&m.indexOf(`${a}x${l}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),p=!1),s&&!y&&(o.os="android",o.android=!0),(c||u||d)&&(o.os="ios",o.ios=!0),o}function y2(e={}){return Rd||(Rd=fI(e)),Rd}let Ad;function pI(){const e=bt(),t=y2();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,c]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=s<16||s===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function x2(){return Ad||(Ad=pI()),Ad}function hI({swiper:e,on:t,emit:n}){const r=bt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(d=>{o=r.requestAnimationFrame(()=>{const{width:u,height:y}=e;let p=u,m=y;d.forEach(({contentBoxSize:g,contentRect:w,target:h})=>{h&&h!==e.el||(p=w?w.width:(g[0]||g).inlineSize,m=w?w.height:(g[0]||g).blockSize)}),(p!==u||m!==y)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function mI({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=bt(),a=(c,d={})=>{const u=o.MutationObserver||o.WebkitMutationObserver,y=new u(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const m=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(m):o.setTimeout(m,0)});y.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(y)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=m2(e.hostEl);for(let d=0;d<c.length;d+=1)a(c[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var gI={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function vI(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(gr(r,"padding-left")||0,10)-parseInt(gr(r,"padding-right")||0,10),n=n-parseInt(gr(r,"padding-top")||0,10)-parseInt(gr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function yI(){const e=this;function t($,D){return parseFloat($.getPropertyValue(e.getDirectionLabel(D))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,c=kn(i,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:c.length;let u=[];const y=[],p=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(e));let g=n.slidesOffsetAfter;typeof g=="function"&&(g=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,h=e.slidesGrid.length,v=e.size-m-g;let b=n.spaceBetween,S=-m,E=0,P=0;if(typeof v>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*v:typeof b=="string"&&(b=parseFloat(b)),e.virtualSize=-b-m-g,c.forEach($=>{o?$.style.marginLeft="":$.style.marginRight="",$.style.marginBottom="",$.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(yi(r,"--swiper-centered-offset-before",""),yi(r,"--swiper-centered-offset-after","")),n.cssMode&&(yi(r,"--swiper-slides-offset-before",`${m}px`),yi(r,"--swiper-slides-offset-after",`${g}px`));const k=n.grid&&n.grid.rows>1&&e.grid;k?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let C;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter($=>typeof n.breakpoints[$].slidesPerView<"u").length>0;for(let $=0;$<d;$+=1){C=0;const D=c[$];if(!(D&&(k&&e.grid.updateSlide($,D,c),gr(D,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(C=n.virtual.slidesPerViewAutoSlideSize),C&&D&&(n.roundLengths&&(C=Math.floor(C)),D.style[e.getDirectionLabel("width")]=`${C}px`);else if(n.slidesPerView==="auto"){M&&(D.style[e.getDirectionLabel("width")]="");const R=getComputedStyle(D),j=D.style.transform,F=D.style.webkitTransform;if(j&&(D.style.transform="none"),F&&(D.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?Rp(D,"width",!0):Rp(D,"height",!0);else{const A=t(R,"width"),L=t(R,"padding-left"),O=t(R,"padding-right"),T=t(R,"margin-left"),I=t(R,"margin-right"),z=R.getPropertyValue("box-sizing");if(z&&z==="border-box")C=A+T+I;else{const{clientWidth:B,offsetWidth:N}=D;C=A+L+O+T+I+(N-B)}}j&&(D.style.transform=j),F&&(D.style.webkitTransform=F),n.roundLengths&&(C=Math.floor(C))}else C=(v-(n.slidesPerView-1)*b)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),D&&(D.style[e.getDirectionLabel("width")]=`${C}px`);D&&(D.swiperSlideSize=C),p.push(C),n.centeredSlides?(S=S+C/2+E/2+b,E===0&&$!==0&&(S=S-v/2-b),$===0&&(S=S-v/2-b),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),P%n.slidesPerGroup===0&&u.push(S),y.push(S)):(n.roundLengths&&(S=Math.floor(S)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&u.push(S),y.push(S),S=S+C+b),e.virtualSize+=C+b,E=C,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+g,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+b}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),k&&e.grid.updateWrapperSize(C,u),!n.centeredSlides){const $=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,D=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||$);let R=u.length;if(D){let F;if(n.slidesPerView==="auto"){F=1;let A=0;for(let L=p.length-1;L>=0&&(A+=p[L]+(L<p.length-1?b:0),A<=v);L-=1)F=p.length-L}else F=Math.floor(n.slidesPerView);R=Math.max(d-F,0)}const j=[];for(let F=0;F<u.length;F+=1){let A=u[F];n.roundLengths&&(A=Math.floor(A)),D?F<=R&&j.push(A):u[F]<=e.virtualSize-v&&j.push(A)}u=j,Math.floor(e.virtualSize-v)-Math.floor(u[u.length-1])>1&&(D||u.push(e.virtualSize-v))}if(l&&n.loop){const $=p[0]+b;if(n.slidesPerGroup>1){const D=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),R=$*n.slidesPerGroup;for(let j=0;j<D;j+=1)u.push(u[u.length-1]+R)}for(let D=0;D<e.virtual.slidesBefore+e.virtual.slidesAfter;D+=1)n.slidesPerGroup===1&&u.push(u[u.length-1]+$),y.push(y[y.length-1]+$),e.virtualSize+=$}if(u.length===0&&(u=[0]),b!==0){const $=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((D,R)=>!n.cssMode||n.loop?!0:R!==c.length-1).forEach(D=>{D.style[$]=`${b}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let $=0;p.forEach(R=>{$+=R+(b||0)}),$-=b;const D=$>v?$-v:0;u=u.map(R=>R<=0?-m:R>D?D+g:R)}if(n.centerInsufficientSlides){let $=0;if(p.forEach(D=>{$+=D+(b||0)}),$-=b,$<v){const D=(v-$)/2;u.forEach((R,j)=>{u[j]=R-D}),y.forEach((R,j)=>{y[j]=R+D})}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:y,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){yi(r,"--swiper-centered-offset-before",`${-u[0]}px`),yi(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const $=-e.snapGrid[0],D=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(R=>R+$),e.slidesGrid=e.slidesGrid.map(R=>R+D)}if(d!==s&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const $=`${n.containerModifierClass}backface-hidden`,D=e.el.classList.contains($);d<=n.maxBackfaceHiddenSlides?D||e.el.classList.add($):D&&e.el.classList.remove($)}}function xI(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function bI(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Nv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function wI(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const c=r[s];let d=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const u=(a+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),y=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),p=-(a-d),m=p+t.slidesSizesGrid[s],g=p>=0&&p<=t.size-t.slidesSizesGrid[s],w=p>=0&&p<t.size-1||m>1&&m<=t.size||p<=0&&m>=t.size;w&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s)),Nv(c,w,n.slideVisibleClass),Nv(c,g,n.slideFullyVisibleClass),c.progress=i?-u:u,c.originalProgress=i?-y:y}}function SI(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,c=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,u=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=u||i>=1,d&&(i=0),u&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[d],p=t.slidesGrid[u],m=t.slidesGrid[t.slidesGrid.length-1],g=Math.abs(e);g>=y?l=(g-y)/m:l=(g+m-p)/m,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(s&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Fd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function _I(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=u=>kn(r,`.${n.slideClass}${u}, swiper-slide${u}`)[0];let s,c,d;if(o)if(n.loop){let u=i-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${u}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(u=>u.column===i),d=t.find(u=>u.column===i+1),c=t.find(u=>u.column===i-1)):s=t[i];s&&(a||(d=sI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),c=aI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(u=>{Fd(u,u===s,n.slideActiveClass),Fd(u,u===d,n.slideNextClass),Fd(u,u===c,n.slidePrevClass)}),e.emitSlidesClasses()}const cl=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},zd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Ap=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,c)=>a+r+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&zd(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&zd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&zd(e,a)};function CI(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function EI(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,c;const d=p=>{let m=p-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof s>"u"&&(s=CI(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,s);c=p+Math.floor((s-p)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(s);return}const u=t.grid&&i.grid&&i.grid.rows>1;let y;if(t.virtual&&i.virtual.enabled)i.loop?y=d(s):y=s;else if(u){const p=t.slides.find(g=>g.column===s);let m=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(t.slides.indexOf(p),0)),y=Math.floor(m/i.grid.rows)}else if(t.slides[s]){const p=t.slides[s].getAttribute("data-swiper-slide-index");p?y=parseInt(p,10):y=s}else y=s;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:y,previousIndex:o,activeIndex:s}),t.initialized&&Ap(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function kI(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var TI={updateSize:vI,updateSlides:yI,updateAutoHeight:xI,updateSlidesOffset:bI,updateSlidesProgress:wI,updateProgress:SI,updateSlidesClasses:_I,updateActiveIndex:EI,updateClickedSlide:kI};function PI(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=nI(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function OI(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const c=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let d;const u=n.maxTranslate()-n.minTranslate();u===0?d=0:d=(e-n.minTranslate())/u,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function jI(){return-this.snapGrid[0]}function MI(){return-this.snapGrid[this.snapGrid.length-1]}function $I(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),c=o.maxTranslate();let d;if(r&&e>s?d=s:r&&e<c?d=c:d=e,o.updateProgress(d),a.cssMode){const u=o.isHorizontal();if(t===0)l[u?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return h2({swiper:o,targetPosition:-d,side:u?"left":"top"}),!0;l.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(y){!o||o.destroyed||y.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var II={getTranslate:PI,setTranslate:OI,minTranslate:jI,maxTranslate:MI,translateTo:$I};function DI(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function b2({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function LI(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),b2({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function RI(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),b2({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var AI={setTransition:DI,transitionStart:LI,transitionEnd:RI};function FI(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:y,wrapperEl:p,enabled:m}=o;if(!m&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const g=Math.min(o.params.slidesPerGroupSkip,a);let w=g+Math.floor((a-g)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const h=-s[w];if(l.normalizeSlideIndex)for(let k=0;k<c.length;k+=1){const C=-Math.floor(h*100),M=Math.floor(c[k]*100),$=Math.floor(c[k+1]*100);typeof c[k+1]<"u"?C>=M&&C<$-($-M)/2?a=k:C>=M&&C<$&&(a=k+1):C>=M&&(a=k)}if(o.initialized&&a!==u&&(!o.allowSlideNext&&(y?h>o.translate&&h>o.minTranslate():h<o.translate&&h<o.minTranslate())||!o.allowSlidePrev&&h>o.translate&&h>o.maxTranslate()&&(u||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(h);let v;a>u?v="next":a<u?v="prev":v="reset";const b=o.virtual&&o.params.virtual.enabled;if(!(b&&i)&&(y&&-h===o.translate||!y&&h===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(h),v!=="reset"&&(o.transitionStart(n,v),o.transitionEnd(n,v)),!1;if(l.cssMode){const k=o.isHorizontal(),C=y?h:-h;if(t===0)b&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),b&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[k?"scrollLeft":"scrollTop"]=C})):p[k?"scrollLeft":"scrollTop"]=C,b&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return h2({swiper:o,targetPosition:C,side:k?"left":"top"}),!0;p.scrollTo({[k?"left":"top"]:C,behavior:"smooth"})}return!0}const P=x2().isSafari;return b&&!i&&P&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(h),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,v),t===0?o.transitionEnd(n,v):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(C){!o||o.destroyed||C.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,v))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function zI(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const g=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===g).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:u}=i.params,y=c||!!d||!!u;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),y&&p%2===0&&(p=p+1));let m=s-l<p;if(y&&(m=m||l<Math.ceil(p/2)),r&&y&&i.params.slidesPerView!=="auto"&&!o&&(m=!1),m){const g=y?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:g,slideTo:!0,activeSlideIndex:g==="next"?l+1:l-s+1,slideRealIndex:g==="next"?i.realIndex:void 0})}if(o){const g=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===g).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function NI(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function BI(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const u=l?r.translate:-r.translate;function y(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const p=y(u),m=o.map(v=>y(v)),g=i.freeMode&&i.freeMode.enabled;let w=o[m.indexOf(p)-1];if(typeof w>"u"&&(i.cssMode||g)){let v;o.forEach((b,S)=>{p>=b&&(v=S)}),typeof v<"u"&&(w=g?o[v]:o[v>0?v-1:v])}let h=0;if(typeof w<"u"&&(h=a.indexOf(w),h<0&&(h=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(h=h-r.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),i.rewind&&r.isBeginning){const v=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(h,e,t,n)}),!0;return r.slideTo(h,e,t,n)}function VI(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function UI(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const c=i.snapGrid[l],d=i.snapGrid[l+1];s-c>(d-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],d=i.snapGrid[l];s-c<=(d-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function WI(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(kn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),p2(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var HI={slideTo:FI,slideToLoop:zI,slideNext:NI,slidePrev:BI,slideReset:VI,slideToClosest:UI,slideToClickedSlide:WI};function GI(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{kn(i,`.${r.slideClass}, swiper-slide`).forEach((m,g)=>{m.setAttribute("data-swiper-slide-index",g)})},a=()=>{const p=kn(i,`.${r.slideBlankClass}`);p.forEach(m=>{m.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),c=n.slides.length%s!==0,d=l&&n.slides.length%r.grid.rows!==0,u=p=>{for(let m=0;m<p;m+=1){const g=n.isElement?ic("swiper-slide",[r.slideBlankClass]):ic("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(g)}};if(c){if(r.loopAddBlankSlides){const p=s-n.slides.length%s;u(p),n.recalcSlides(),n.updateSlides()}else rc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(d){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;u(p),n.recalcSlides(),n.updateSlides()}else rc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const y=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:y?void 0:"next",initial:t})}function qI({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:y,params:p}=s,{centeredSlides:m,slidesOffsetBefore:g,slidesOffsetAfter:w,initialSlide:h}=p,v=m||!!g||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!v&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):v&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=u,s.emit("loopFix");return}let b=p.slidesPerView;b==="auto"?b=s.slidesPerViewDynamic():(b=Math.ceil(parseFloat(p.slidesPerView,10)),v&&b%2===0&&(b=b+1));const S=p.slidesPerGroupAuto?b:p.slidesPerGroup;let E=v?Math.max(S,Math.ceil(b/2)):S;E%S!==0&&(E+=S-E%S),E+=p.loopAdditionalSlides,s.loopedSlides=E;const P=s.grid&&p.grid&&p.grid.rows>1;c.length<b+E||s.params.effect==="cards"&&c.length<b+E*2?rc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):P&&p.grid.fill==="row"&&rc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],C=[],M=P?Math.ceil(c.length/p.grid.rows):c.length,$=o&&M-h<b&&!v;let D=$?h:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(c.find(T=>T.classList.contains(p.slideActiveClass))):D=i;const R=n==="next"||!n,j=n==="prev"||!n;let F=0,A=0;const O=(P?c[i].column:i)+(v&&typeof r>"u"?-b/2+.5:0);if(O<E){F=Math.max(E-O,S);for(let T=0;T<E-O;T+=1){const I=T-Math.floor(T/M)*M;if(P){const z=M-I-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===z&&k.push(B)}else k.push(M-I-1)}}else if(O+b>M-E){A=Math.max(O-(M-E*2),S),$&&(A=Math.max(A,b-M+h+1));for(let T=0;T<A;T+=1){const I=T-Math.floor(T/M)*M;P?c.forEach((z,B)=>{z.column===I&&C.push(B)}):C.push(I)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&c.length<b+E*2&&(C.includes(i)&&C.splice(C.indexOf(i),1),k.includes(i)&&k.splice(k.indexOf(i),1)),j&&k.forEach(T=>{c[T].swiperLoopMoveDOM=!0,y.prepend(c[T]),c[T].swiperLoopMoveDOM=!1}),R&&C.forEach(T=>{c[T].swiperLoopMoveDOM=!0,y.append(c[T]),c[T].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():P&&(k.length>0&&j||C.length>0&&R)&&s.slides.forEach((T,I)=>{s.grid.updateSlide(I,T,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(k.length>0&&j){if(typeof e>"u"){const T=s.slidesGrid[D],z=s.slidesGrid[D+F]-T;l?s.setTranslate(s.translate-z):(s.slideTo(D+Math.ceil(F),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else if(r){const T=P?k.length/p.grid.rows:k.length;s.slideTo(s.activeIndex+T,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(C.length>0&&R)if(typeof e>"u"){const T=s.slidesGrid[D],z=s.slidesGrid[D-A]-T;l?s.setTranslate(s.translate-z):(s.slideTo(D-A,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else{const T=P?C.length/p.grid.rows:C.length;s.slideTo(s.activeIndex-T,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=u,s.controller&&s.controller.control&&!a){const T={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(I=>{!I.destroyed&&I.params.loop&&I.loopFix({...T,slideTo:I.params.slidesPerView===p.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...T,slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}s.emit("loopFix")}function YI(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var XI={loopCreate:GI,loopFix:qI,loopDestroy:YI};function KI(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function QI(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var ZI={setGrabCursor:KI,unsetGrabCursor:QI};function JI(e,t=this){function n(r){if(!r||r===jn()||r===bt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Bv(e,t,n){const r=bt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function eD(e){const t=this,n=jn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Bv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!oI(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&d&&(s=d[0]);const u=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,y=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(y?JI(u,s):s.closest(u))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const p=a.currentX,m=a.currentY;if(!Bv(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=m,i.touchStartTime=nc(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let g=!0;s.matches(i.focusableElements)&&(g=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=g&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function tD(e){const t=jn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].find(P=>P.identifier===r.touchId),!c||c.identifier!==r.touchId)return}else c=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const d=c.pageX,u=c.pageY;if(s.preventedByNestedSwiper){o.startX=d,o.startY=u;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:u,currentX:d,currentY:u}),r.touchStartTime=nc());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(u<o.startY&&n.translate<=n.maxTranslate()||u>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(d>o.startX&&-n.translate<=n.maxTranslate()||d<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=u;const y=o.currentX-o.startX,p=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(y**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let P;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:y*y+p*p>=25&&(P=Math.atan2(Math.abs(p),Math.abs(y))*180/Math.PI,r.isScrolling=n.isHorizontal()?P>i.touchAngle:90-P>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let m=n.isHorizontal()?y:p,g=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),g=Math.abs(g)*(a?1:-1)),o.diff=m,m*=i.touchRatio,a&&(m=-m,g=-g);const w=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const h=n.params.loop&&!i.cssMode,v=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(h&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const P=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(P)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let b;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&h&&v&&Math.abs(m)>=1){Object.assign(o,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),m>0?(h&&v&&!b&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**E))):m<0&&(h&&v&&!b&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**E))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function nD(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(E=>E.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:c,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=nc(),y=u-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),y<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=nc(),p2(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(a.followFinger?p=s?t.translate:-t.translate:p=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-t.maxTranslate()&&!t.params.loop;let g=0,w=t.slidesSizesGrid[0];for(let E=0;E<c.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){const P=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[E+P]<"u"?(m||p>=c[E]&&p<c[E+P])&&(g=E,w=c[E+P]-c[E]):(m||p>=c[E])&&(g=E,w=c[c.length-1]-c[c.length-2])}let h=null,v=null;a.rewind&&(t.isBeginning?v=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));const b=(p-c[g])/w,S=g<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(y>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?h:g+S):t.slideTo(g)),t.swipeDirection==="prev"&&(b>1-a.longSwipesRatio?t.slideTo(g+S):v!==null&&b<0&&Math.abs(b)>a.longSwipesRatio?t.slideTo(v):t.slideTo(g))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(g+S):t.slideTo(g):(t.swipeDirection==="next"&&t.slideTo(h!==null?h:g+S),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:g))}}function Vv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function rD(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function iD(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function oD(e){const t=this;cl(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function aD(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const w2=(e,t)=>{const n=jn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Vv,!0):e[c]("observerUpdate",Vv,!0),i[s]("load",e.onLoad,{capture:!0}))};function sD(){const e=this,{params:t}=e;e.onTouchStart=eD.bind(e),e.onTouchMove=tD.bind(e),e.onTouchEnd=nD.bind(e),e.onDocumentTouchStart=aD.bind(e),t.cssMode&&(e.onScroll=iD.bind(e)),e.onClick=rD.bind(e),e.onLoad=oD.bind(e),w2(e,"on")}function lD(){w2(this,"off")}var cD={attachEvents:sD,detachEvents:lD};const Uv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function uD(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=jn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),c=e.getBreakpoint(o,l,s);if(!c||e.currentBreakpoint===c)return;const u=(c in o?o[c]:void 0)||e.originalParams,y=Uv(e,r),p=Uv(e,u),m=e.params.grabCursor,g=u.grabCursor,w=r.enabled;y&&!p?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&p&&(i.classList.add(`${r.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),m&&!g?e.unsetGrabCursor():!m&&g&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof u[P]>"u")return;const k=r[P]&&r[P].enabled,C=u[P]&&u[P].enabled;k&&!C&&e[P].disable(),!k&&C&&e[P].enable()});const h=u.direction&&u.direction!==r.direction,v=r.loop&&(u.slidesPerView!==r.slidesPerView||h),b=r.loop;h&&n&&e.changeDirection(),Dt(e.params,u);const S=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),n&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&E?(e.loopCreate(t),e.updateSlides()):b&&!E&&e.loopDestroy()),e.emit("breakpoint",u)}function dD(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=bt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:c}=a[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var fD={setBreakpoint:uD,getBreakpoint:dD};function pD(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function hD(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=pD(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function mD(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var gD={addClasses:hD,removeClasses:mD};function vD(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var yD={checkOverflow:vD},Fp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function xD(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Dt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Dt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Dt(t,r)}}const Nd={eventsEmitter:gI,update:TI,translate:II,transition:AI,slide:HI,loop:XI,grabCursor:ZI,events:cD,breakpoints:fD,checkOverflow:yD,classes:gD},Bd={};let Lm=class Rn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Dt({},r),n&&!r.el&&(r.el=n);const i=jn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(c=>{const d=Dt({},r,{el:c});s.push(new Rn(d))}),s}const o=this;o.__swiper__=!0,o.support=v2(),o.device=y2({userAgent:r.userAgent}),o.browser=x2(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:xD(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Dt({},Fp,a);return o.params=Dt({},l,Bd,r),o.originalParams=Dt({},o.params),o.passedParams=Dt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=kn(n,`.${r.slideClass}, swiper-slide`),o=oc(i[0]);return oc(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=kn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let u=o[c]?Math.ceil(o[c].swiperSlideSize):0,y;for(let p=c+1;p<o.length;p+=1)o[p]&&!y&&(u+=Math.ceil(o[p].swiperSlideSize),d+=1,u>s&&(y=!0));for(let p=c-1;p>=0;p-=1)o[p]&&!y&&(u+=o[p].swiperSlideSize,d+=1,u>s&&(y=!0))}else if(t==="current")for(let u=c+1;u<o.length;u+=1)(n?a[u]+l[u]-a[c]<s:a[u]-a[c]<s)&&(d+=1);else for(let u=c-1;u>=0;u-=1)a[c]-a[u]<s&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&cl(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):kn(r,i())[0])();return!a&&n.params.createElements&&(a=ic("div",n.params.wrapperClass),r.append(a),kn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||gr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||gr(r,"direction")==="rtl"),wrongRTL:gr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?cl(n,o):o.addEventListener("load",a=>{cl(n,a.target)})}),Ap(n),n.initialized=!0,Ap(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),eI(r)),r.destroyed=!0),null}static extendDefaults(t){Dt(Bd,t)}static get extendedDefaults(){return Bd}static get defaults(){return Fp}static installModule(t){Rn.prototype.__modules__||(Rn.prototype.__modules__=[]);const n=Rn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Rn.installModule(n)),Rn):(Rn.installModule(t),Rn)}};Object.keys(Nd).forEach(e=>{Object.keys(Nd[e]).forEach(t=>{Lm.prototype[t]=Nd[e][t]})});Lm.use([hI,mI]);const S2=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function oi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Hi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:oi(t[r])&&oi(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Hi(e[r],t[r]):e[r]=t[r]})}function _2(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function C2(e={}){return e.pagination&&typeof e.pagination.el>"u"}function E2(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function k2(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function bD(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function wD({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(C=>C!=="children"&&C!=="direction"&&C!=="wrapperClass"),{params:c,pagination:d,navigation:u,scrollbar:y,virtual:p,thumbs:m}=e;let g,w,h,v,b,S,E,P;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(g=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(c.pagination||c.pagination===!1)&&d&&!d.el&&(h=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&y&&!y.el&&(v=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&u&&!u.prevEl&&!u.nextEl&&(b=!0);const k=C=>{e[C]&&(e[C].destroy(),C==="navigation"?(e.isElement&&(e[C].prevEl.remove(),e[C].nextEl.remove()),c[C].prevEl=void 0,c[C].nextEl=void 0,e[C].prevEl=void 0,e[C].nextEl=void 0):(e.isElement&&e[C].el.remove(),c[C].el=void 0,e[C].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?S=!0:!c.loop&&n.loop?E=!0:P=!0),s.forEach(C=>{if(oi(c[C])&&oi(n[C]))Object.assign(c[C],n[C]),(C==="navigation"||C==="pagination"||C==="scrollbar")&&"enabled"in n[C]&&!n[C].enabled&&k(C);else{const M=n[C];(M===!0||M===!1)&&(C==="navigation"||C==="pagination"||C==="scrollbar")?M===!1&&k(C):c[C]=n[C]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&t&&p&&c.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&c.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&c.loop&&(P=!0),g&&m.init()&&m.update(!0),w&&(e.controller.control=c.controller.control),h&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),d.init(),d.render(),d.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),y.init(),y.updateSize(),y.setTranslate()),b&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),za(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),za(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(c.navigation.nextEl=i),o&&(c.navigation.prevEl=o),u.init(),u.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||P)&&e.loopDestroy(),(E||P)&&e.loopCreate(),e.update()}function SD(e={},t=!0){const n={on:{}},r={},i={};Hi(n,Fp),n._emitClasses=!0,n.init=!1;const o={},a=S2.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?oi(e[s])?(n[s]={},i[s]={},Hi(n[s],e[s]),Hi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function _D({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){_2(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),C2(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),E2(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function CD(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),c=n.map(i);s.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return S2.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(oi(e[s])&&oi(t[s])){const c=Object.keys(e[s]),d=Object.keys(t[s]);c.length!==d.length?a(s):(c.forEach(u=>{e[s][u]!==t[s][u]&&a(s)}),d.forEach(u=>{e[s][u]!==t[s][u]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const ED=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function ac(){return ac=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ac.apply(this,arguments)}function T2(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function P2(e){const t=[];return X.Children.toArray(e).forEach(n=>{T2(n)?t.push(n):n.props&&n.props.children&&P2(n.props.children).forEach(r=>t.push(r))}),t}function kD(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return X.Children.toArray(e).forEach(r=>{if(T2(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=P2(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function TD(e,t,n){if(!n)return null;const r=d=>{let u=d;return d<0?u=t.length+d:u>=t.length&&(u=u-t.length),u},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let d=l;d<s;d+=1)d>=o&&d<=a&&c.push(t[r(d)]);return c.map((d,u)=>X.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${u}`}))}function ua(e,t){return typeof window>"u"?x.useEffect(e,t):x.useLayoutEffect(e,t)}const Wv=x.createContext(null),PD=x.createContext(null),O2=x.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,c]=x.useState("swiper"),[d,u]=x.useState(null),[y,p]=x.useState(!1),m=x.useRef(!1),g=x.useRef(null),w=x.useRef(null),h=x.useRef(null),v=x.useRef(null),b=x.useRef(null),S=x.useRef(null),E=x.useRef(null),P=x.useRef(null),{params:k,passedParams:C,rest:M,events:$}=SD(o),{slides:D,slots:R}=kD(r),j=()=>{p(!y)};Object.assign(k.on,{_containerClasses(T,I){c(I)}});const F=()=>{Object.assign(k.on,$),l=!0;const T={...k};if(delete T.wrapperClass,w.current=new Lm(T),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=D;const I={cache:!1,slides:D,renderExternal:u,renderExternalUpdate:!1};Hi(w.current.params.virtual,I),Hi(w.current.originalParams.virtual,I)}};g.current||F(),w.current&&w.current.on("_beforeBreakpoint",j);const A=()=>{l||!$||!w.current||Object.keys($).forEach(T=>{w.current.on(T,$[T])})},L=()=>{!$||!w.current||Object.keys($).forEach(T=>{w.current.off(T,$[T])})};x.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",j)}),x.useEffect(()=>{!m.current&&w.current&&(w.current.emitSlidesClasses(),m.current=!0)}),ua(()=>{if(a&&(a.current=g.current),!!g.current)return w.current.destroyed&&F(),_D({el:g.current,nextEl:b.current,prevEl:S.current,paginationEl:E.current,scrollbarEl:P.current,swiper:w.current},k),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),ua(()=>{A();const T=CD(C,h.current,D,v.current,I=>I.key);return h.current=C,v.current=D,T.length&&w.current&&!w.current.destroyed&&wD({swiper:w.current,slides:D,passedParams:C,changedParams:T,nextEl:b.current,prevEl:S.current,scrollbarEl:P.current,paginationEl:E.current}),()=>{L()}}),ua(()=>{ED(w.current)},[d]);function O(){return k.virtual?TD(w.current,D,d):D.map((T,I)=>X.cloneElement(T,{swiper:w.current,swiperSlideIndex:I}))}return X.createElement(t,ac({ref:g,className:k2(`${s}${e?` ${e}`:""}`)},M),X.createElement(PD.Provider,{value:w.current},R["container-start"],X.createElement(n,{className:bD(k.wrapperClass)},R["wrapper-start"],O(),R["wrapper-end"]),_2(k)&&X.createElement(X.Fragment,null,X.createElement("div",{ref:S,className:"swiper-button-prev"}),X.createElement("div",{ref:b,className:"swiper-button-next"})),E2(k)&&X.createElement("div",{ref:P,className:"swiper-scrollbar"}),C2(k)&&X.createElement("div",{ref:E,className:"swiper-pagination"}),R["container-end"]))});O2.displayName="Swiper";const j2=x.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},c)=>{const d=x.useRef(null),[u,y]=x.useState("swiper-slide"),[p,m]=x.useState(!1);function g(b,S,E){S===d.current&&y(E)}ua(()=>{if(typeof l<"u"&&(d.current.swiperSlideIndex=l),c&&(c.current=d.current),!(!d.current||!r)){if(r.destroyed){u!=="swiper-slide"&&y("swiper-slide");return}return r.on("_slideClass",g),()=>{r&&r.off("_slideClass",g)}}}),ua(()=>{r&&d.current&&!r.destroyed&&y(r.getSlideClasses(d.current))},[r]);const w={isActive:u.indexOf("swiper-slide-active")>=0,isVisible:u.indexOf("swiper-slide-visible")>=0,isPrev:u.indexOf("swiper-slide-prev")>=0,isNext:u.indexOf("swiper-slide-next")>=0},h=()=>typeof t=="function"?t(w):t,v=()=>{m(!0)};return X.createElement(e,ac({ref:d,className:k2(`${u}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:v},s),i&&X.createElement(Wv.Provider,{value:w},X.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},h(),o&&!p&&X.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}}))),!i&&X.createElement(Wv.Provider,{value:w},h(),o&&!p&&X.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}})))});j2.displayName="SwiperSlide";const OD=_.section`
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
`,jD=_.div`
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
`,MD=_.div`
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
`,$D=_(Te)`
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
`,ID=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],DD=()=>f.jsx(OD,{children:f.jsx(O2,{modules:[lI,uI,cI],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:ID.map(e=>f.jsx(j2,{children:f.jsx(jD,{bg:e.img,children:f.jsxs(MD,{children:[f.jsx("h1",{children:e.title}),f.jsx("p",{children:e.desc}),f.jsx($D,{to:e.url,children:e.btn})]})})},e.id))})}),LD=_.div`
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
`,M2=()=>f.jsxs(LD,{children:[f.jsxs(Vd,{children:[f.jsx(Ud,{children:"3000+"}),f.jsx(Wd,{children:"Перевірених деталей"})]}),f.jsxs(Vd,{children:[f.jsx(Ud,{children:"6 років"}),f.jsx(Wd,{children:"Досвіду на ринку"})]}),f.jsxs(Vd,{children:[f.jsx(Ud,{children:"100%"}),f.jsx(Wd,{children:"Контроль якості"})]})]}),RD=Ae.div`
  background:var(--background-color);
`,AD=Ae.div`
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
`;const FD=()=>f.jsx(RD,{children:f.jsxs(AD,{children:[f.jsx(DD,{}),f.jsx(Xw,{}),f.jsx(Q$,{}),f.jsx(M2,{})]})}),zD=_.div`
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
`,ND=_.section`
  background-color:  var(--second-background);
`,BD=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,VD=_.button`
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
`,UD=_.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,WD=_.button`
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
`;const HD=_.div`
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
`,GD=_.div`
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
`;const qD=_.div`
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
`;const YD=_.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,XD=_.button`
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
`,$2=_.button`
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
`,KD=_.div`
  position: relative;
  display: inline-block;

`,QD=_.div`
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
`,ZD=_.aside`

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
`,JD=_.h3`
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
`;const e6=_.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,t6=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,n6=_.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,r6=_.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,i6=_.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,o6=_.label`
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
`,a6=_.span`
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
`;var Np={},Rm={},Am={},wo={};Object.defineProperty(wo,"__esModule",{value:!0});wo.Direction=void 0;var Hv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Hv||(wo.Direction=Hv={}));(function(e){var t=te&&te.__spreadArray||function(R,j,F){if(F||arguments.length===2)for(var A=0,L=j.length,O;A<L;A++)(O||!(A in j))&&(O||(O=Array.prototype.slice.call(j,0,A)),O[A]=j[A]);return R.concat(O||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=x,r=wo,i=function(R){var j=R.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(R){return R.touches&&R.touches.length||R.changedTouches&&R.changedTouches.length}e.isTouchEvent=o;function a(R,j,F){var A=(j-R)/F,L=8,O=Number(A.toFixed(L));return parseInt(O.toString(),10)===O}e.isStepDivisible=a;function l(R,j,F,A,L,O,T){var I=1e11;if(R=Math.round(R*I)/I,!O){var z=T[j-1],B=T[j+1];if(z&&z>R)return z;if(B&&B<R)return B}if(R>A)return A;if(R<F)return F;var N=Math.floor(R*I-F*I)%Math.floor(L*I),U=Math.floor(R*I-Math.abs(N)),G=N===0?R:U/I,W=Math.abs(N/I)<L/2?G:G+L,Y=(0,e.getStepDecimals)(L);return parseFloat(W.toFixed(Y))}e.normalizeValue=l;function s(R,j,F){return(R-j)/(F-j)}e.relativeValue=s;function c(R){return R===r.Direction.Up||R===r.Direction.Down}e.isVertical=c;function d(R,j,F){if(j>=F)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(F,")"));if(R<j)throw new RangeError("value (".concat(R,") is smaller than min (").concat(j,")"));if(R>F)throw new RangeError("value (".concat(R,") is bigger than max (").concat(F,")"))}e.checkBoundaries=d;function u(R,j,F){return R<j?j:R>F?F:R}e.checkValuesAgainstBoundaries=u;function y(R){if(!(R.length<2)&&!R.slice(1).every(function(j,F){return R[F]<=j}))throw new RangeError("values={[".concat(R,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=y;function p(R){var j=window.getComputedStyle(R);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=p;function m(R){var j=window.getComputedStyle(R);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=m;function g(R,j,F){var A=F?-1:1;R.forEach(function(L,O){return h(L,A*j[O].x,j[O].y)})}e.translateThumbs=g;function w(R,j,F,A){for(var L=0,O=$(R[0],j,F,A),T=1;T<R.length;T++){var I=$(R[T],j,F,A);I<O&&(O=I,L=T)}return L}e.getClosestThumbIndex=w;function h(R,j,F){R.style.transform="translate(".concat(j,"px, ").concat(F,"px)")}e.translate=h;var v=function(R){var j=[],F=null,A=function(){for(var L=[],O=0;O<arguments.length;O++)L[O]=arguments[O];j=L,!F&&(F=requestAnimationFrame(function(){F=null,R.apply(void 0,j)}))};return A};e.schd=v;function b(R,j,F){var A=R.slice(0);return A[j]=F,A}e.replaceAt=b;function S(R){var j=R.values,F=R.colors,A=R.min,L=R.max,O=R.direction,T=O===void 0?r.Direction.Right:O,I=R.rtl,z=I===void 0?!1:I;z&&T===r.Direction.Right?T=r.Direction.Left:z&&r.Direction.Left&&(T=r.Direction.Right);var B=j.slice(0).sort(function(U,G){return U-G}).map(function(U){return(U-A)/(L-A)*100}),N=B.reduce(function(U,G,W){return"".concat(U,", ").concat(F[W]," ").concat(G,"%, ").concat(F[W+1]," ").concat(G,"%")},"");return"linear-gradient(".concat(T,", ").concat(F[0]," 0%").concat(N,", ").concat(F[F.length-1]," 100%)")}e.getTrackBackground=S;function E(){}e.voidFn=E;function P(R){throw new Error("Didn't expect to get here")}e.assertUnreachable=P;var k=function(R,j,F,A,L){L===void 0&&(L=function(T){return T});var O=Math.ceil(t([R],Array.from(R.children),!0).reduce(function(T,I){var z=Math.ceil(I.getBoundingClientRect().width);if(I.innerText&&I.innerText.includes(F)&&I.childElementCount===0){var B=I.cloneNode(!0);B.innerHTML=L(j.toFixed(A)),B.style.visibility="hidden",document.body.appendChild(B),z=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return z>T?z:T},R.getBoundingClientRect().width));return O},C=function(R,j,F,A,L,O,T){T===void 0&&(T=function(B){return B});var I=[],z=function(B){var N=k(F[B],A[B],L,O,T),U=j[B].x;j.forEach(function(G,W){var Y=G.x,ee=k(F[W],A[W],L,O,T);B!==W&&(U>=Y&&U<=Y+ee||U+N>=Y&&U+N<=Y+ee)&&(I.includes(W)||(I.push(B),I.push(W),I=t(t([],I,!0),[B,W],!1),z(W)))})};return z(R),Array.from(new Set(I.sort()))},M=function(R,j,F,A,L,O){A===void 0&&(A=.1),L===void 0&&(L=" - "),O===void 0&&(O=function(W){return W});var T=(0,e.getStepDecimals)(A),I=(0,n.useState)({}),z=I[0],B=I[1],N=(0,n.useState)(O(j[F].toFixed(T))),U=N[0],G=N[1];return(0,n.useEffect)(function(){if(R){var W=R.getThumbs();if(W.length<1)return;var Y={},ee=R.getOffsets(),pe=C(F,ee,W,j,L,T,O),we=O(j[F].toFixed(T));if(pe.length){var ie=pe.reduce(function(wt,_o,rs,Co){return wt.length?t(t([],wt,!0),[ee[Co[rs]].x],!1):[ee[Co[rs]].x]},[]);if(Math.min.apply(Math,ie)===ee[F].x){var Ie=[];pe.forEach(function(wt){Ie.push(j[wt].toFixed(T))}),we=Array.from(new Set(Ie.sort(function(wt,_o){return parseFloat(wt)-parseFloat(_o)}))).map(O).join(L);var We=Math.min.apply(Math,ie),He=Math.max.apply(Math,ie),fi=W[pe[ie.indexOf(He)]].getBoundingClientRect().width;Y.left="".concat(Math.abs(We-(He+fi))/2,"px"),Y.transform="translate(-50%, 0)"}else Y.visibility="hidden"}G(we),B(Y)}},[R,j]),[U,z]};e.useThumbOverlap=M;function $(R,j,F,A){var L=R.getBoundingClientRect(),O=L.left,T=L.top,I=L.width,z=L.height;return c(A)?Math.abs(F-(T+z/2)):Math.abs(j-(O+I/2))}var D=function(){var R,j=((R=navigator.userAgentData)===null||R===void 0?void 0:R.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=D})(Am);var s6=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),l6=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),c6=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u6=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&l6(t,e,n);return c6(t,e),t},Gv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Rm,"__esModule",{value:!0});var js=u6(x),oe=Am,Fe=wo,d6=["ArrowRight","ArrowUp","k","PageUp"],f6=["ArrowLeft","ArrowDown","j","PageDown"],p6=function(e){s6(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=js.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,c=r.trackRef.current;if(!c)return console.warn("No track element found."),[];var d=c.getBoundingClientRect(),u=(0,oe.getPaddingAndBorder)(c);return r.getThumbs().map(function(y,p){var m={x:0,y:0},g=y.getBoundingClientRect(),w=(0,oe.getMargin)(y);switch(o){case Fe.Direction.Right:return m.x=(w.left+u.left)*-1,m.y=((g.height-d.height)/2+u.top)*-1,m.x+=d.width*(0,oe.relativeValue)(a[p],l,s)-g.width/2,m;case Fe.Direction.Left:return m.x=(w.right+u.right)*-1,m.y=((g.height-d.height)/2+u.top)*-1,m.x+=d.width-d.width*(0,oe.relativeValue)(a[p],l,s)-g.width/2,m;case Fe.Direction.Up:return m.x=((g.width-d.width)/2+w.left+u.left)*-1,m.y=-u.left,m.y+=d.height-d.height*(0,oe.relativeValue)(a[p],l,s)-g.height/2,m;case Fe.Direction.Down:return m.x=((g.width-d.width)/2+w.left+u.left)*-1,m.y=-u.left,m.y+=d.height*(0,oe.relativeValue)(a[p],l,s)-g.height/2,m;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,c=o.rtl,d=o.direction,u=r.state.isChanged,y=r.getTargetIndex(i.nativeEvent),p=c||d===Fe.Direction.Left||d===Fe.Direction.Down?-1:1;y!==-1&&(d6.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]+p*(i.key==="PageUp"?s*10:s),y)))):f6.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]-p*(i.key==="PageDown"?s*10:s),y)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){u&&r.fireOnFinalChange()}):u&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,c=r.props,d=c.direction,u=c.min,y=c.max,p=c.onChange,m=c.values,g=c.step,w=c.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var h=r.trackRef.current;if(!h)return null;var v=h.getBoundingClientRect(),b=(0,oe.isVertical)(d)?v.height:v.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],E=o-s[1],P=0;switch(d){case Fe.Direction.Right:case Fe.Direction.Left:P=S/b*(y-u);break;case Fe.Direction.Down:case Fe.Direction.Up:P=E/b*(y-u);break;default:(0,oe.assertUnreachable)(d)}if(w&&(P*=-1),Math.abs(P)>=g/2){for(var k=0;k<r.thumbRefs.length;k++){if(m[k]===y&&Math.sign(P)===1||m[k]===u&&Math.sign(P)===-1)return;var C=m[k]+P;C>y?P=y-m[k]:C<u&&(P=u-m[k])}for(var M=m.slice(0),k=0;k<r.thumbRefs.length;k++)M=(0,oe.replaceAt)(M,k,r.normalizeValue(m[k]+P,k));r.setState({draggedTrackPos:[i,o]}),p(M)}}else{var $=0;switch(d){case Fe.Direction.Right:$=(i-v.left)/b*(y-u)+u;break;case Fe.Direction.Left:$=(b-(i-v.left))/b*(y-u)+u;break;case Fe.Direction.Down:$=(o-v.top)/b*(y-u)+u;break;case Fe.Direction.Up:$=(b-(o-v.top))/b*(y-u)+u;break;default:(0,oe.assertUnreachable)(d)}w&&($=y+u-$),Math.abs(m[l]-$)>=g/2&&p((0,oe.replaceAt)(m,l,r.normalizeValue($,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,c=a.step,d=a.allowOverlap,u=a.values;return(0,oe.normalizeValue)(i,o,l,s,c,d,u)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=js.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),c=[],d=0;d<r.numOfMarks+1;d++){var u=9999,y=9999;if(r.markRefs[d].current){var p=r.markRefs[d].current.getBoundingClientRect();u=p.height,y=p.width}r.props.direction===Fe.Direction.Left||r.props.direction===Fe.Direction.Right?c.push([Math.round(o/r.numOfMarks*d+l-y/2),-Math.round((u-a)/2)]):c.push([Math.round(a/r.numOfMarks*d+s-u/2),-Math.round((y-o)/2)])}r.setState({markOffsets:c})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return js.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,c=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),c),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(d){(0,oe.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,c=s===void 0?function(){return null}:s,d=r.values,u=r.min,y=r.max,p=r.allowOverlap,m=r.disabled,g=this.state,w=g.draggedThumbIndex,h=g.thumbZIndexes,v=g.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!m?"pointer":"inherit"},onMouseDown:m?oe.voidFn:this.onMouseDownTrack,onTouchStart:m?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:m,children:Gv(Gv([],v.map(function(b,S,E){return c({props:{style:n.props.direction===Fe.Direction.Left||n.props.direction===Fe.Direction.Right?{position:"absolute",left:"".concat(b[0],"px"),marginTop:"".concat(b[1],"px")}:{position:"absolute",top:"".concat(b[0],"px"),marginLeft:"".concat(b[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),d.map(function(b,S){var E=n.state.draggedThumbIndex===S;return l({index:S,value:b,isDragged:E,props:{style:{position:"absolute",zIndex:h[S],cursor:m?"inherit":E?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:m?void 0:0,"aria-valuemax":p?y:d[S+1]||y,"aria-valuemin":p?u:d[S-1]||u,"aria-valuenow":b,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:m?oe.voidFn:n.onKeyDown,onKeyUp:m?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Fe.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(js.Component);Rm.default=p6;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Rm);e.Range=n.default;var r=Am;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=wo;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Np);const h6=_.div`
  padding: 20px 0;
`,m6=_.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,qv=_.input`
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
`;const g6=_.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,v6=_.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,I2=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,c]=x.useState([o,a]);x.useEffect(()=>{e&&e.length===2&&(c(e),t&&t(e))},[e,t]);const d=p=>{c(p),t&&t(p)},u=(p,m)=>{const g=m===""?"":Number(m),w=[...s];w[p]=g,d(w)},y=p=>{const m=[...s];p===0?((m[0]===""||m[0]<o)&&(m[0]=o),m[0]>m[1]-50&&(m[0]=m[1]-50)):((m[1]===""||m[1]>a)&&(m[1]=a),m[1]<m[0]+50&&(m[1]=m[0]+50)),d(m)};return f.jsx(f.Fragment,{children:l&&f.jsxs(h6,{children:[f.jsxs(m6,{children:[f.jsx(qv,{type:"number",value:s[0],min:o,max:s[1],onChange:p=>u(0,p.target.value),onBlur:()=>y(0)}),f.jsx(qv,{type:"number",value:s[1],min:s[0],max:a,onChange:p=>u(1,p.target.value),onBlur:()=>y(1)})]}),f.jsx(Np.Range,{values:s,step:50,min:o,max:a,onChange:d,renderTrack:({props:p,children:m})=>f.jsx(g6,{...p,background:Np.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:m}),renderThumb:({props:p})=>f.jsx(v6,{...p})})]})})},y6=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=x.useState([]),[l,s]=x.useState({});x.useEffect(()=>{t&&(async()=>{try{const w=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`)).json()).data||[],h={};w.forEach(b=>{var S;(S=b.attributes)==null||S.forEach(E=>{h[E.label]||(h[E.label]=new Set),h[E.label].add(E.value)})});const v=Object.entries(h).map(([b,S])=>({type:"checkbox",label:b,name:b.toLowerCase(),options:Array.from(S)}));console.log("fillltr",v),a(v)}catch(m){console.error(m)}})()},[t]);const c=p=>{s(m=>({...m,[p]:!m[p]}))},d=(p,m)=>{r(g=>{const w=g[p]||[];return w.includes(m)?{...g,[p]:w.filter(h=>h!==m)}:{...g,[p]:[...w,m]}})},u=Object.values(n).some(p=>Array.isArray(p)&&p.length>0),y=()=>{u&&r({})};return console.log(u),f.jsxs(ZD,{children:[f.jsxs(JD,{children:["Фільтри ",f.jsx(gw,{size:20})]}),(o||[]).map(p=>{var g;const m=!!l[p.name];return f.jsxs(e6,{children:[f.jsxs(t6,{onClick:()=>c(p.name),children:[f.jsx(n6,{children:p.label}),f.jsx(r6,{isOpen:m})]}),f.jsxs(i6,{isOpen:m,children:[p.type==="checkbox"&&((g=p.options)==null?void 0:g.map(w=>{var h;return f.jsxs(o6,{children:[f.jsx(zp,{checked:((h=n[p.name])==null?void 0:h.includes(w))||!1,onChange:()=>d(p.name,w)}),f.jsx(a6,{}),w]},w)})),p.type==="range"&&f.jsx(I2,{onChange:i,childValues:e})]})]},p.name)}),f.jsx($2,{onClick:y,disabled:!u,children:"Скинути обрані фільтри"})]})},x6=_.aside`
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
`;const b6=_.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,w6=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,S6=_.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,_6=_.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,C6=_.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,E6=_.label`
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
`,k6=_.span`
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
`,T6=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=x.useState({}),[l,s]=x.useState([]);x.useEffect(()=>{t&&(async()=>{try{const y=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const p=await y.json();console.log("dataaaa",p.data);const m=p.data||[],g={};m.forEach(h=>{var v;(v=h.attributes)==null||v.forEach(b=>{g[b.label]||(g[b.label]=new Set),g[b.label].add(b.value)})});const w=Object.entries(g).map(([h,v])=>({type:"checkbox",label:h,name:h.toLowerCase(),options:Array.from(v)}));console.log("fillltr",w),s(w)}catch(y){console.error(y)}})()},[t]);const c=u=>{a(y=>({...y,[u]:!y[u]}))},d=(u,y)=>{r(p=>{const m=p[u]||[];return m.includes(y)?{...p,[u]:m.filter(g=>g!==y)}:{...p,[u]:[...m,y]}})};return f.jsx(x6,{children:(l||[]).map(u=>{var p;const y=!!o[u.name];return f.jsxs(b6,{children:[f.jsxs(w6,{onClick:()=>c(u.name),children:[f.jsx(S6,{children:u.label}),f.jsx(_6,{isOpen:y})]}),f.jsxs(C6,{isOpen:y,children:[u.type==="checkbox"&&((p=u.options)==null?void 0:p.map(m=>{var g;return f.jsxs(E6,{children:[f.jsx(Bp,{checked:((g=n[u.name])==null?void 0:g.includes(m))||!1,onChange:()=>d(u.name,m)}),f.jsx(k6,{}),m]},m)})),u.type==="range"&&f.jsx(I2,{onChange:i,childValues:e})]})]},u.name)})})},P6=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:c})=>{const[d,u]=x.useState([]),[y,p]=x.useState(!0),[m,g]=x.useState(1),w=24;let h=d;const v=x.useRef(null);x.useEffect(()=>{const j=F=>{v.current&&!v.current.contains(F.target)&&o(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[o]),x.useEffect(()=>{(async()=>{try{p(!0);const A=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();u(A.data);const L=A.data.map(O=>O.price);if(L.length>0){let O=Math.min(...L),T=Math.max(...L);e([O,T])}}catch(F){console.error("Error fetching products:",F)}finally{p(!1)}})()},[t,e]),x.useEffect(()=>{g(1)},[t,n,r]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[m]);const b=Bt(),S=Jt(),E=Ue(j=>j.favorites.items),P=Ue(j=>j.cart.items),k=(j,F)=>{F.stopPropagation();const A=E.some(L=>L.id===(j==null?void 0:j.id));ui(j,A,S,Z)};if(Object.keys(n).forEach(j=>{const F=n[j];Array.isArray(F)&&F.length>0&&(h=h.filter(A=>{var O;const L=(O=A.attributes)==null?void 0:O.find(T=>T.label.toLowerCase()===j.toLowerCase());return L&&F.includes(L.value)}))}),r&&r.length===2){const[j,F]=r;console.log(j,F)}const C=x.useMemo(()=>{const j=[...h],F=A=>A.new_price&&A.new_price<A.price?A.new_price:A.price;switch(i){case"name":return j.sort((A,L)=>s==="asc"?A.name.localeCompare(L.name):L.name.localeCompare(A.name));case"price":return j.sort((A,L)=>{const O=F(A),T=F(L);return s==="asc"?O-T:T-O});case"date":return j.sort((A,L)=>s==="asc"?new Date(A.createdAt)-new Date(L.createdAt):new Date(L.createdAt)-new Date(A.createdAt));default:return j}},[i,h,s]),M=m*w,$=M-w,D=C.slice($,M),R=Math.ceil(h.length/w);return y?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ja,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsxs(y3,{children:[f.jsxs(x3,{children:[f.jsx(b3,{children:t}),f.jsxs(P3,{ref:v,children:[f.jsxs(O3,{onClick:()=>o(j=>!j),children:["Сортування",f.jsx(Nc,{strokeWidth:.9,size:22})]}),a&&f.jsxs(j3,{children:[f.jsx(vi,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),f.jsx(vi,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),f.jsx(vi,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(vi,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(vi,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(vi,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(Dn,{autoClose:1500}),h.length===0?f.jsx(w3,{children:f.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):f.jsx(S3,{children:D.map(j=>{var U,G;const F=E.some(W=>W.id===j.id),A=P.find(W=>W.id===j.id),O=(A?A.quantity:0)>=(j.stock||0),T=(j==null?void 0:j.available)??!0,I=j.new_price&&j.new_price<j.price,z=I?j.new_price:j.price,B=I?Math.round((j.price-j.new_price)/j.price*100):0,N=(W,Y)=>{if(Y.stopPropagation(),O){Z.error("Товар уже у кошику");return}S(vo({...W,quantity:1})),Z.success(`${W.name} додано в кошик!`)};return f.jsxs(_3,{onClick:()=>b(`/product/${j.id}`),style:{cursor:"pointer"},children:[!T&&f.jsx(ym,{children:"Заброньовано"}),f.jsx(C3,{src:((G=(U=j.images)==null?void 0:U[0])==null?void 0:G.url)||"/placeholder.jpg",alt:j.name,onError:W=>{W.currentTarget.onerror=null,W.currentTarget.src=ii}}),f.jsx(k3,{children:j.name}),f.jsxs(E3,{children:[f.jsx(Vw,{children:f.jsxs(Uw,{children:[f.jsxs(Ww,{$discount:I,children:[z.toLocaleString()," грн"]}),I&&f.jsxs(Hw,{children:[j.price.toLocaleString()," грн"]}),I&&f.jsxs(Gw,{children:["-",B,"%"]})]})}),f.jsxs(Bw,{children:[T&&f.jsx(ec,{onClick:W=>N(j,W),children:f.jsx(go,{size:24,color:A?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(ec,{onClick:W=>k(j,W),children:f.jsx(Ya,{size:24,fill:F?"#ff4d4f":"none",color:F?"#ff4d4f":"#000000",strokeWidth:F?1:2})})]})]})]},j.id)})}),h.length>w&&f.jsxs(T3,{children:[f.jsx(Pd,{onClick:()=>g(j=>Math.max(j-1,1)),disabled:m===1,children:"Назад"}),Array.from({length:R},(j,F)=>f.jsx(Pd,{onClick:()=>g(F+1),active:m===F+1,children:F+1},F)),f.jsx(Pd,{onClick:()=>g(j=>Math.min(j+1,R)),disabled:m===R,children:"Вперед"})]})]})},O6=()=>{const[e,t]=x.useState({});console.log(e);const{category:n}=$y(),[r,i]=x.useState(!1),[o,a]=x.useState(!1),[l,s]=x.useState("date"),[c,d]=x.useState("desc"),[u,y]=x.useState([]),[p,m]=x.useState([0,0]),g=Object.values(e).some(h=>Array.isArray(h)&&h.length>0),w=()=>{g&&t({})};return f.jsxs(ND,{children:[f.jsxs(zD,{children:[f.jsxs(BD,{children:[f.jsxs(VD,{onClick:()=>i(!0),children:["Фільтр",f.jsx(UD,{children:f.jsx("use",{href:`${hn}#icon-filter`})})]}),f.jsxs(KD,{children:[f.jsxs(WD,{onClick:()=>a(h=>!h),children:["Сортування",f.jsx(Nc,{strokeWidth:.9,size:22})]}),o&&f.jsxs(QD,{children:[f.jsx(xi,{onClick:()=>{s("name"),d("asc"),a(!1)},children:"А-Я"}),f.jsx(xi,{onClick:()=>{s("name"),d("desc"),a(!1)},children:"Я-А"}),f.jsx(xi,{onClick:()=>{s("price"),d("asc"),a(!1)},children:"Ціна ↑"}),f.jsx(xi,{onClick:()=>{s("price"),d("desc"),a(!1)},children:"Ціна ↓"}),f.jsx(xi,{onClick:()=>{s("date"),d("desc"),a(!1)},children:"Спочатку новіші"}),f.jsx(xi,{onClick:()=>{s("date"),d("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(y6,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:u,priceRange:p,setPriceRange:m}),f.jsx(P6,{priceRange:p,values:u,setValues:y,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:c,setSortOrder:d}),r&&f.jsx(HD,{onClick:()=>i(!1),open:r,children:f.jsxs(GD,{onClick:h=>h.stopPropagation(),open:r,children:[f.jsxs(qD,{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx(gw,{size:20}),f.jsx("h2",{children:"Фільтри"})]}),f.jsx(yw,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),f.jsx(T6,{childValues:u,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:p,setPriceRange:m}),f.jsxs(YD,{children:[f.jsx($2,{onClick:w,disabled:!g,children:"Скинути обрані фільтри"}),f.jsx(XD,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},Yv=_.div`
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
`,j6=_.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,M6=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,$6=_.div``;_.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const I6=_.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,D6=_.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,L6=_.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,R6=_.div``,A6=_.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,F6=_.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,z6=_.div`
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

`,N6=_.span`
  color: #27ae60;
  font-size: 17px;
`,B6=_.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,V6=_.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,Xv=_.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,U6=_.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,W6=_.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,H6=_.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,G6=_.div`
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
`,q6=_.button`
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
`;const Kv=_.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,Y6=_.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,Qv=_.div`
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
`;const X6=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,Zv=_.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,Jv=_.div`
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
`,e1=_.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,t1=_.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,K6=_.button`
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
`,Q6=_.svg`
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
`,Z6=_.div`
  position: relative;
  display: inline-block;

  &:hover ${D2} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,L2="carousel",R2="controller",J6="navigation",eL="no-scroll",Fm="portal",tL="root",A2="toolbar",n1="zoom",Hd="loading",Gd="error",qd="complete",nL="placeholder",rL=e=>`active-slide-${e}`,iL="fullsize",zm="flex_center",oL="no_scroll",F2="no_scroll_padding",Nm="slide",z2="slide_wrapper",aL="slide_wrapper_interactive",Br="prev",Vr="next",r1="swipe",so="close",N2="onPointerDown",B2="onPointerMove",V2="onPointerUp",U2="onPointerLeave",W2="onPointerCancel",Bm="onKeyDown",sL="onKeyUp",Vm="onWheel",lL="Escape",cL="ArrowLeft",uL="ArrowRight",dL="button",Vp="icon",H2="contain",i1="cover",G2="Unknown action type",q2="yarl__";function Mn(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${q2}${e}`}function _t(e){return`--${q2}${e}`}function ns(e,t){return`${e}${t?`_${t}`:""}`}function Um(e){return t=>ns(e,t)}function lo(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function fL(e,t,n){return lo(e,"{index} of {total}").replace(/\{index}/g,`${Ym(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function Wm(...e){return()=>{e.forEach(t=>{t()})}}function rr(e,t,n){return()=>{const r=x.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Hm(){return typeof window<"u"}function Gm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function So(e){return e.type===void 0||e.type==="image"}function qm(e,t){return e.imageFit===i1||e.imageFit!==H2&&t===i1}function Eu(e){return typeof e=="string"?Number.parseInt(e,10):e}function sc(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=Eu(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function pL(e,t){const n=sc(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function hL(){return(Hm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Ym(e,t){return t>0?(e%t+t)%t:0}function Y2(e){return e.length>0}function X2(e,t){return e[Ym(t,e.length)]}function Up(e,t){return Y2(e)?X2(e,t):void 0}function mL(e){return So(e)?e.src:void 0}function gL(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=x.isValidElement(n)?x.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function vL(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const yL=Number(x.version.split(".")[0])>=19;function xL(e){return{inert:yL?e:e?"":void 0}}function bL(e){e.scrollTop}const Wp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[so]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:H2,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Ir(e,t){return{name:e,component:t}}function Ge(e,t){return{module:e,children:t}}function K2(e,t,n){return e.module.name===t?n(e):e.children?[Ge(e.module,e.children.flatMap(r=>{var i;return(i=K2(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function bi(e,t,n){return e.flatMap(r=>{var i;return(i=K2(r,t,n))!==null&&i!==void 0?i:[]})}function wL(e,t=[],n=[]){let r=e;const i=p=>{const m=[...r];for(;m.length>0;){const g=m.pop();if((g==null?void 0:g.module.name)===p)return!0;g!=null&&g.children&&m.push(...g.children)}return!1},o=(p,m)=>{if(p===""){r=[Ge(m,r)];return}r=bi(r,p,g=>[Ge(m,[g])])},a=(p,m)=>{r=bi(r,p,g=>[Ge(g.module,[Ge(m,g.children)])])},l=(p,m,g)=>{r=bi(r,p,w=>{var h;return[Ge(w.module,[...g?[Ge(m)]:[],...(h=w.children)!==null&&h!==void 0?h:[],...g?[]:[Ge(m)]])]})},s=(p,m,g)=>{r=bi(r,p,w=>[...g?[Ge(m)]:[],w,...g?[]:[Ge(m)]])},c=p=>{a(R2,p)},d=(p,m)=>{r=bi(r,p,g=>[Ge(m,g.children)])},u=p=>{r=bi(r,p,m=>m.children)},y=p=>{n.push(p)};return t.forEach(p=>{p({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:c,replace:d,remove:u,augment:y})}),{config:r,augmentation:p=>n.reduce((m,g)=>g(m),p)}}const Q2=x.createContext(null),Z2=rr("useA11yContext","A11yContext",Q2);function SL({children:e}){const[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const c=d=>u=>{var y;u.currentTarget.contains(u.relatedTarget)||n(d),(y=d?l:s)===null||y===void 0||y(u)};return{onFocus:c(!0),onBlur:c(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return x.createElement(Q2.Provider,{value:o},e)}const J2=x.createContext(null),ku=rr("useDocument","DocumentContext",J2);function _L({nodeRef:e,children:t}){const n=x.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return x.createElement(J2.Provider,{value:n},t)}const e_=x.createContext(null),Tu=rr("useEvents","EventsContext",e_);function CL({children:e}){const[t]=x.useState({});x.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=x.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(c=>c!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(c=>c(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return x.createElement(e_.Provider,{value:n},e)}const t_=x.createContext(null),en=rr("useLightboxProps","LightboxPropsContext",t_);function EL({children:e,...t}){return x.createElement(t_.Provider,{value:t},e)}const n_=x.createContext(null),Dr=rr("useLightboxState","LightboxStateContext",n_),r_=x.createContext(null),kL=rr("useLightboxDispatch","LightboxDispatchContext",r_);function TL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Ym(i,n.length),a=Up(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Up(t.slides,t.index)}:e;default:throw new Error(G2)}}function PL({slides:e,index:t,children:n}){const[r,i]=x.useReducer(TL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Up(e,t)}),[o,a]=x.useState(e),[l,s]=x.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const c=x.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return x.createElement(r_.Provider,{value:i},x.createElement(n_.Provider,{value:c},n))}const i_=x.createContext(null),Pu=rr("useTimeouts","TimeoutsContext",i_);function OL({children:e}){const[t]=x.useState([]);x.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=x.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return x.createElement(i_.Provider,{value:n},e)}const Xm=x.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:c,labels:d}=en(),u=lo(d,t);return x.createElement("button",{ref:s,type:"button",title:u,"aria-label":u,className:Mn(ae(dL),n),onClick:o,style:{...a,...c.button},...l},i?i():x.createElement(r,{className:ae(Vp),style:c.icon}))});function jL(e,t){const n=r=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function di(e,t){return jL(e,x.createElement("g",{fill:"currentColor"},x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const ML=di("Close",x.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),$L=di("Previous",x.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),IL=di("Next",x.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),DL=di("Loading",x.createElement(x.Fragment,null,Array.from({length:8}).map((e,t,n)=>x.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),LL=di("Error",x.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),$n=Hm()?x.useLayoutEffect:x.useEffect;function Km(){const[e,t]=x.useState(!1);return x.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function RL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(Eu);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function o1(e,t){const n=x.useRef(void 0),r=x.useRef(void 0),i=Km();return $n(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:c,easing:d,onfinish:u}=t(n.current,e.current.getBoundingClientRect(),RL(e.current))||{};if(s&&c){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:c,easing:d})}catch(y){console.error(y)}r.current&&(r.current.onfinish=()=>{r.current=void 0,u==null||u()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function o_(){const e=x.useRef(null),t=x.useRef(void 0),[n,r]=x.useState();return{setContainerRef:x.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=c=>parseFloat(c)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function ul(){const e=x.useRef(void 0),{setTimeout:t,clearTimeout:n}=Pu();return x.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function he(e){const t=x.useRef(e);return $n(()=>{t.current=e}),x.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function a1(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Hp(e,t){return x.useMemo(()=>e==null&&t==null?null:n=>{a1(e,n),a1(t,n)},[e,t])}function AL(e,t=!1){const n=x.useRef(!1);$n(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=x.useCallback(()=>{n.current=!0},[]),i=x.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Qm(){const[e,t]=x.useState(!1);return $n(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function FL(){const[e]=x.useState({}),t=x.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=x.useMemo(()=>({onPointerDown:i=>t(N2,i),onPointerMove:i=>t(B2,i),onPointerUp:i=>t(V2,i),onPointerLeave:i=>t(U2,i),onPointerCancel:i=>t(W2,i),onKeyDown:i=>t(Bm,i),onKeyUp:i=>t(sL,i),onWheel:i=>t(Vm,i)}),[t]),r=x.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function s1(e,t){const n=x.useRef(0),r=ul(),i=he((...o)=>{n.current=Date.now(),e(o)});return x.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Yd=Um("slide"),Xd=Um("slide_image");function lc({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:c}){var d,u,y,p,m,g,w,h;const[v,b]=x.useState(Hd),{publish:S}=Tu(),{setTimeout:E}=Pu(),P=x.useRef(null);x.useEffect(()=>{t===0&&S(rL(v))},[t,v,S]);const k=he(N=>{("decode"in N?N.decode():Promise.resolve()).catch(()=>{}).then(()=>{N.parentNode&&(b(qd),E(()=>{l==null||l(N)},0))})}),C=x.useCallback(N=>{P.current=N,N!=null&&N.complete&&k(N)},[k]),M=x.useCallback(N=>{k(N.currentTarget)},[k]),$=he(()=>{b(Gd),s==null||s()}),D=qm(e,i),R=(N,U)=>Number.isFinite(N)?N:U,j=R(Math.max(...((u=(d=e.srcSet)===null||d===void 0?void 0:d.map(N=>N.width))!==null&&u!==void 0?u:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((y=P.current)===null||y===void 0?void 0:y.naturalWidth)||0),F=R(Math.max(...((m=(p=e.srcSet)===null||p===void 0?void 0:p.map(N=>N.height))!==null&&m!==void 0?m:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((g=P.current)===null||g===void 0?void 0:g.naturalHeight)||0),A=j&&F?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${F}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},L=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((N,U)=>N.width-U.width).map(N=>`${N.src} ${N.width}w`).join(", "),O=()=>r&&!D&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,T=L&&r&&Hm()?`${Math.round(Math.min(O(),r.width))}px`:void 0,{style:I,className:z,...B}=(typeof o=="function"?o(e):o)||{};return x.createElement(x.Fragment,null,x.createElement("img",{ref:C,onLoad:M,onError:$,onClick:a,draggable:!1,className:Mn(ae(Xd()),D&&ae(Xd("cover")),v!==qd&&ae(Xd("loading")),z),style:{...A,...c,...I},...B,alt:(h=e.alt)!==null&&h!==void 0?h:"",sizes:T,srcSet:L,src:e.src}),v!==qd&&x.createElement("div",{className:ae(Yd(nL))},v===Hd&&(n!=null&&n.iconLoading?n.iconLoading():x.createElement(DL,{className:Mn(ae(Vp),ae(Yd(Hd)))})),v===Gd&&(n!=null&&n.iconError?n.iconError():x.createElement(LL,{className:Mn(ae(Vp),ae(Yd(Gd)))}))))}const zL=x.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=x.useRef(null),{trackFocusWithin:s}=Z2();return x.createElement(_L,{nodeRef:l},x.createElement("div",{ref:Hp(a,l),className:Mn(ae("root"),t),...s(r,i),...o},n))});var st;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(st||(st={}));function a_(e,t,n,r,i){x.useEffect(()=>i?()=>{}:Wm(e(N2,t),e(B2,n),e(V2,r),e(U2,r),e(W2,r)),[e,t,n,r,i])}var on;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(on||(on={}));const Kd=30;function NL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,c,d,u,y,p,m,g,w){const h=x.useRef(0),v=x.useRef([]),b=x.useRef(void 0),S=x.useRef(0),E=x.useRef(on.NONE),P=x.useCallback(j=>{b.current===j.pointerId&&(b.current=void 0,E.current=on.NONE);const F=v.current;F.splice(0,F.length,...F.filter(A=>A.pointerId!==j.pointerId))},[]),k=x.useCallback(j=>{P(j),j.persist(),v.current.push(j)},[P]),C=x.useCallback(j=>v.current.find(({pointerId:F})=>j.pointerId===F),[]),M=he(j=>{k(j)}),$=(j,F)=>u&&j>F||d&&j<-F,D=he(j=>{const F=C(j);if(F)if(b.current===j.pointerId){const A=Date.now()-S.current,L=h.current;E.current===on.SWIPE?Math.abs(L)>.3*i||Math.abs(L)>5&&A<o?s(L,A):c(L):E.current===on.PULL&&($(L,2*Kd)?m(L,A):g(L)),h.current=0,E.current=on.NONE}else{const{target:A}=j;t&&A instanceof HTMLElement&&A===F.target&&(A.classList.contains(ae(Nm))||A.classList.contains(ae(z2)))&&w()}P(j)}),R=he(j=>{const F=C(j);if(F){const A=b.current===j.pointerId;if(j.buttons===0){A&&h.current!==0?D(j):P(F);return}const L=j.clientX-F.clientX,O=j.clientY-F.clientY;if(b.current===void 0){const T=I=>{k(j),b.current=j.pointerId,S.current=Date.now(),E.current=I};Math.abs(L)>Math.abs(O)&&Math.abs(L)>Kd&&r(L)?e||(T(on.SWIPE),a()):Math.abs(O)>Math.abs(L)&&$(O,Kd)&&(T(on.PULL),y())}else A&&(E.current===on.SWIPE?(h.current=L,l(L)):E.current===on.PULL&&(h.current=O,p(O)))}});a_(n,M,R,D)}function BL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=x.useRef(null),r=he(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return x.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function VL(e,t,n,r,i,o,a,l,s){const c=x.useRef(0),d=x.useRef(0),u=x.useRef(void 0),y=x.useRef(void 0),p=x.useRef(0),m=x.useRef(void 0),g=x.useRef(0),{setTimeout:w,clearTimeout:h}=Pu(),v=x.useCallback(()=>{u.current&&(h(u.current),u.current=void 0)},[h]),b=x.useCallback(()=>{y.current&&(h(y.current),y.current=void 0)},[h]),S=he(()=>{e!==st.SWIPE&&(c.current=0,g.current=0,v(),b())});x.useEffect(S,[e,S]);const E=he(k=>{y.current=void 0,c.current===k&&s(c.current)}),P=he(k=>{if(k.ctrlKey||Math.abs(k.deltaY)>Math.abs(k.deltaX))return;const C=M=>{p.current=M,h(m.current),m.current=M>0?w(()=>{p.current=0,m.current=void 0},300):void 0};if(e===st.NONE){if(Math.abs(k.deltaX)<=1.2*Math.abs(p.current)){C(k.deltaX);return}if(!n(-k.deltaX))return;if(d.current+=k.deltaX,v(),Math.abs(d.current)>30)d.current=0,C(0),g.current=Date.now(),o();else{const M=d.current;u.current=w(()=>{u.current=void 0,M===d.current&&(d.current=0)},i)}}else if(e===st.SWIPE){let M=c.current-k.deltaX;if(M=Math.min(Math.abs(M),r)*Math.sign(M),c.current=M,a(M),b(),Math.abs(M)>.2*r){C(k.deltaX),l(M,Date.now()-g.current);return}y.current=w(()=>E(M),2*i)}else C(k.deltaX)});x.useEffect(()=>t(Vm,P),[t,P])}const l1=Um("container"),s_=x.createContext(null),ir=rr("useController","ControllerContext",s_);function UL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:c,closeOnPullDown:d,preventDefaultWheelX:u,preventDefaultWheelY:y}=o,[p,m]=x.useState(),g=Dr(),w=kL(),[h,v]=x.useState(st.NONE),b=x.useRef(0),S=x.useRef(0),E=x.useRef(1),{registerSensors:P,subscribeSensors:k}=FL(),{subscribe:C,publish:M}=Tu(),$=ul(),D=ul(),R=ul(),{containerRef:j,setContainerRef:F,containerRect:A}=o_(),L=Hp(BL({preventDefaultWheelX:u,preventDefaultWheelY:y}),F),O=x.useRef(null),T=Hp(O,void 0),{getOwnerDocument:I}=ku(),z=Qm(),B=q=>(z?-1:1)*(typeof q=="number"?q:1),N=he(()=>{var q;return(q=j.current)===null||q===void 0?void 0:q.focus()}),U=he(()=>t),G=he(()=>g),W=x.useCallback(q=>M(Br,q),[M]),Y=x.useCallback(q=>M(Vr,q),[M]),ee=x.useCallback(()=>M(so),[M]),pe=q=>!(r.finite&&(B(q)>0&&g.currentIndex===0||B(q)<0&&g.currentIndex===g.slides.length-1)),we=q=>{var Se;b.current=q,(Se=j.current)===null||Se===void 0||Se.style.setProperty(_t("swipe_offset"),`${Math.round(q)}px`)},ie=q=>{var Se,dt;S.current=q,E.current=(()=>{const Eo=(()=>d&&q>0?q:c&&q<0?-q:0)();return Math.min(Math.max(Gm(1-Eo/60*(1-.5),2),.5),1)})(),(Se=j.current)===null||Se===void 0||Se.style.setProperty(_t("pull_offset"),`${Math.round(q)}px`),(dt=j.current)===null||dt===void 0||dt.style.setProperty(_t("pull_opacity"),`${E.current}`)},{prepareAnimation:Ie}=o1(O,(q,Se,dt)=>{if(O.current&&A)return{keyframes:[{transform:`translate(0, ${q.rect.y-Se.y+dt.y}px)`,opacity:q.opacity},{transform:"translate(0, 0)",opacity:1}],duration:q.duration,easing:i.easing.fade}}),We=(q,Se)=>{if(c||d){ie(q);let dt=0;O.current&&(dt=i.fade*(Se?2:1),Ie({rect:O.current.getBoundingClientRect(),opacity:E.current,duration:dt})),R(()=>{ie(0),v(st.NONE)},dt),v(st.ANIMATION),Se||ee()}},{prepareAnimation:He,isAnimationPlaying:fi}=o1(O,(q,Se,dt)=>{var yn;if(O.current&&A&&(!((yn=g.animation)===null||yn===void 0)&&yn.duration)){const Ht=sc(r.spacing),Eo=(Ht.percent?Ht.percent*A.width/100:Ht.pixel)||0;return{keyframes:[{transform:`translate(${B(g.globalIndex-q.index)*(A.width+Eo)+q.rect.x-Se.x+dt.x}px, 0)`},{transform:"translate(0, 0)"}],duration:g.animation.duration,easing:g.animation.easing}}}),wt=he(q=>{var Se,dt;const yn=q.offset||0,Ht=yn?i.swipe:(Se=i.navigation)!==null&&Se!==void 0?Se:i.swipe,Eo=!yn&&!fi()?i.easing.navigation:i.easing.swipe;let{direction:is}=q;const os=(dt=q.count)!==null&&dt!==void 0?dt:1;let zu=st.ANIMATION,xn=Ht*os;if(!is){const ko=A==null?void 0:A.width,pg=q.duration||0,Bu=ko?Ht/ko*Math.abs(yn):Ht;os!==0?(pg<Bu?xn=xn/Bu*Math.max(pg,Bu/5):ko&&(xn=Ht/ko*(ko-Math.abs(yn))),is=B(yn)>0?Br:Vr):xn=Ht/2}let Nu=0;is===Br?pe(B(1))?Nu=-os:(zu=st.NONE,xn=Ht):is===Vr&&(pe(B(-1))?Nu=os:(zu=st.NONE,xn=Ht)),xn=Math.round(xn),D(()=>{we(0),v(st.NONE)},xn),O.current&&He({rect:O.current.getBoundingClientRect(),index:g.globalIndex}),v(zu),M(r1,{type:"swipe",increment:Nu,duration:xn,easing:Eo})});x.useEffect(()=>{var q,Se;!((q=g.animation)===null||q===void 0)&&q.increment&&(!((Se=g.animation)===null||Se===void 0)&&Se.duration)&&$(()=>w({type:"swipe",increment:0}),g.animation.duration)},[g.animation,w,$]);const _o=[k,pe,(A==null?void 0:A.width)||0,i.swipe,()=>v(st.SWIPE),q=>we(q),(q,Se)=>wt({offset:q,duration:Se,count:1}),q=>wt({offset:q,count:0})],rs=[()=>{d&&v(st.PULL)},q=>ie(q),q=>We(q),q=>We(q,!0)];NL(o,..._o,c,d,...rs,ee),VL(h,..._o);const Co=he(()=>{o.focus&&I().querySelector(`.${ae(Fm)} .${ae(l1())}`)&&N()});x.useEffect(Co,[Co]);const fg=he(()=>{var q;(q=a.view)===null||q===void 0||q.call(a,{index:g.currentIndex})});x.useEffect(fg,[g.globalIndex,fg]),x.useEffect(()=>Wm(C(Br,q=>wt({direction:Br,...q})),C(Vr,q=>wt({direction:Vr,...q})),C(r1,q=>w(q))),[C,wt,w]);const dC=x.useMemo(()=>({prev:W,next:Y,close:ee,focus:N,slideRect:A?pL(A,r.padding):{width:0,height:0},containerRect:A||{width:0,height:0},subscribeSensors:k,containerRef:j,setCarouselRef:T,toolbarWidth:p,setToolbarWidth:m}),[W,Y,ee,N,k,A,j,T,p,m,r.padding]);return x.useImperativeHandle(o.ref,()=>({prev:W,next:Y,close:ee,focus:N,getLightboxProps:U,getLightboxState:G}),[W,Y,ee,N,U,G]),x.createElement("div",{ref:L,className:Mn(ae(l1()),ae(zm)),style:{...h===st.SWIPE?{[_t("swipe_offset")]:`${Math.round(b.current)}px`}:null,...h===st.PULL?{[_t("pull_offset")]:`${Math.round(S.current)}px`,[_t("pull_opacity")]:`${E.current}`}:null,...o.touchAction!=="none"?{[_t("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...P},A&&x.createElement(s_.Provider,{value:dC},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const WL=Ir(R2,UL);function Lr(e){return ns(L2,e)}function c1(e){return ns(Nm,e)}function HL({slide:e,offset:t}){const n=x.useRef(null),{currentIndex:r,slides:i}=Dr(),{slideRect:o,focus:a}=ir(),{render:l,carousel:{imageFit:s,imageProps:c},on:{click:d},styles:{slide:u},labels:y}=en(),{getOwnerDocument:p}=ku(),m=t!==0;x.useEffect(()=>{var w;m&&(!((w=n.current)===null||w===void 0)&&w.contains(p().activeElement))&&a()},[m,a,p]);const g=()=>{var w,h,v,b;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&So(e)&&(S=x.createElement(lc,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:c,onClick:m?void 0:()=>d==null?void 0:d({index:r})})),S?x.createElement(x.Fragment,null,(h=l.slideHeader)===null||h===void 0?void 0:h.call(l,{slide:e}),((v=l.slideContainer)!==null&&v!==void 0?v:({children:E})=>E)({slide:e,children:S}),(b=l.slideFooter)===null||b===void 0?void 0:b.call(l,{slide:e})):null};return x.createElement("div",{ref:n,className:Mn(ae(c1()),!m&&ae(c1("current")),ae(zm)),...xL(m),style:u,role:"group","aria-roledescription":lo(y,"Slide"),"aria-label":fL(y,i,r+t)},g())}function GL(){const e=en().styles.slide;return x.createElement("div",{className:ae(Nm),style:e})}function qL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Dr(),{setCarouselRef:o}=ir(),{autoPlaying:a,focusWithin:l}=Z2(),s=sc(e.spacing),c=sc(e.padding),d=vL(e,n,1),u=[];if(Y2(n))for(let y=r-d;y<=r+d;y+=1){const p=X2(n,y),m=i-r+y,g=e.finite&&(y<0||y>n.length-1);u.push(g?{key:m}:{key:[`${m}`,mL(p)].filter(Boolean).join("|"),offset:y-r,slide:p})}return x.createElement("div",{ref:o,className:Mn(ae(Lr()),u.length>0&&ae(Lr("with_slides"))),style:{[`${_t(Lr("slides_count"))}`]:u.length,[`${_t(Lr("spacing_px"))}`]:s.pixel||0,[`${_t(Lr("spacing_percent"))}`]:s.percent||0,[`${_t(Lr("padding_px"))}`]:c.pixel||0,[`${_t(Lr("padding_percent"))}`]:c.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":lo(t,"Carousel"),"aria-label":lo(t,"Photo gallery")},u.map(({key:y,slide:p,offset:m})=>p?x.createElement(HL,{key:y,slide:p,offset:m}):x.createElement(GL,{key:y})))}const YL=Ir(L2,qL);function l_(){const{carousel:e}=en(),{slides:t,currentIndex:n}=Dr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function XL(e){var t;const n=Qm(),{publish:r}=Tu(),{animation:i}=en(),{prevDisabled:o,nextDisabled:a}=l_(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=s1(()=>r(Br),l),c=s1(()=>r(Vr),l),d=he(u=>{switch(u.key){case lL:r(so);break;case cL:(n?a:o)||(n?c:s)();break;case uL:(n?o:a)||(n?s:c)();break}});x.useEffect(()=>e(Bm,d),[e,d])}function u1({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return x.createElement(Xm,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...AL(ir().focus,o)})}function KL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=ir(),{prevDisabled:s,nextDisabled:c}=l_();return XL(l),x.createElement(x.Fragment,null,e?e():x.createElement(u1,{label:"Previous",action:Br,icon:$L,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():x.createElement(u1,{label:"Next",action:Vr,icon:IL,renderIcon:r,style:i.navigationNext,disabled:c,onClick:a}))}const QL=Ir(J6,KL),d1=ae(oL),ZL=ae(F2);function JL(e){return"style"in e}function f1(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(Eu(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function eR({noScroll:{disabled:e},children:t}){const n=Qm(),{getOwnerDocument:r,getOwnerWindow:i}=ku();return x.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),c=Math.round(a.innerWidth-s.clientWidth);if(c>0){o.push(f1(l,c,n));const d=l.getElementsByTagName("*");for(let u=0;u<d.length;u+=1){const y=d[u];JL(y)&&a.getComputedStyle(y).getPropertyValue("position")==="fixed"&&!y.classList.contains(ZL)&&o.push(f1(y,c,n))}}return l.classList.add(d1),()=>{l.classList.remove(d1),o.forEach(d=>d())}},[n,e,r,i]),x.createElement(x.Fragment,null,t)}const tR=Ir(eL,eR);function p1(e){return ns(Fm,e)}function h1(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function nR({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,c]=x.useState(!1),[d,u]=x.useState(!1),y=x.useRef([]),p=x.useRef(null),{setTimeout:m}=Pu(),{subscribe:g}=Tu(),h=Km()?0:t.fade;x.useEffect(()=>(c(!0),()=>{c(!1),u(!1)}),[]);const v=he(()=>{y.current.forEach(P=>P()),y.current=[]}),b=he(()=>{var P;u(!1),v(),(P=i.exiting)===null||P===void 0||P.call(i),m(()=>{var k;(k=i.exited)===null||k===void 0||k.call(i),a()},h)});x.useEffect(()=>g(so,b),[g,b]);const S=he(P=>{var k,C,M;bL(P),u(!0),(k=i.entering)===null||k===void 0||k.call(i);const $=(M=(C=P.parentNode)===null||C===void 0?void 0:C.children)!==null&&M!==void 0?M:[];for(let D=0;D<$.length;D+=1){const R=$[D];["TEMPLATE","SCRIPT","STYLE"].indexOf(R.tagName)===-1&&R!==P&&(y.current.push(h1(R,"inert","")),y.current.push(h1(R,"aria-hidden","true")))}y.current.push(()=>{var D,R;(R=(D=p.current)===null||D===void 0?void 0:D.focus)===null||R===void 0||R.call(D)}),m(()=>{var D;(D=i.entered)===null||D===void 0||D.call(i)},h)}),E=x.useCallback(P=>{P?S(P):v()},[S,v]);return s?Dc.createPortal(x.createElement(zL,{ref:E,className:Mn(r,ae(p1()),ae(F2),d&&ae(p1("open"))),"aria-modal":!0,role:"dialog","aria-label":lo(l,"Lightbox"),style:{...t.fade!==Wp.animation.fade?{[_t("fade_animation_duration")]:`${h}ms`}:null,...t.easing.fade!==Wp.animation.easing.fade?{[_t("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:P=>{p.current||(p.current=P.relatedTarget)}},e),o.root||document.body):null}const rR=Ir(Fm,nR);function iR({children:e}){return x.createElement(x.Fragment,null,e)}const oR=Ir(tL,iR);function aR(e){return ns(A2,e)}function sR({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=ir(),{setContainerRef:a,containerRect:l}=o_();$n(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():x.createElement(Xm,{key:so,label:"Close",icon:ML,renderIcon:n,onClick:i});return x.createElement("div",{ref:a,style:r.toolbar,className:ae(aR())},e==null?void 0:e.map(c=>c===so?s():c))}const lR=Ir(A2,sR);function c_(e,t){var n;return x.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>c_(r,t)))}function cR(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function uR({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:c,...d}){const{animation:u,carousel:y,render:p,toolbar:m,controller:g,noScroll:w,on:h,slides:v,index:b,plugins:S,...E}=Wp,{config:P,augmentation:k}=wL([Ge(rR,[Ge(tR,[Ge(WL,[Ge(YL),Ge(lR),Ge(QL)])])])],l||S),C=k({animation:cR(u,t),carousel:{...y,...e},render:{...p,...n},toolbar:{...m,...r},controller:{...g,...i},noScroll:{...w,...o},on:{...h,...a},...E,...d});return C.open?x.createElement(EL,{...C},x.createElement(PL,{slides:s||v,index:Eu(c||b)},x.createElement(OL,null,x.createElement(CL,null,x.createElement(SL,null,c_(Ge(oR,P),C)))))):null}const dR={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function fR(e){return Math.min(Math.max(e,Number.EPSILON),1)}function u_(e){const{minZoom:t,...n}={...dR,...e};return{minZoom:fR(t),...n}}function pR(e,t,n,r){const i=x.useRef(void 0),o=x.useRef(void 0),{zoom:a}=en().animation,l=Km(),s=he(()=>{var c,d,u;if((c=i.current)===null||c===void 0||c.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(u=(d=r.current).animate)===null||u===void 0?void 0:u.call(d,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(y){console.error(y)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return $n(s,[e,t,n,s]),x.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function hR(e,t){const{on:n}=en(),r=he(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});x.useEffect(r,[e,r])}function Ou(){const{zoom:e}=en();return u_(e)}function mR(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Dr(),{imageFit:l}=en().carousel,{maxZoomPixelRatio:s}=Ou();if(e&&a){const d={...a,...t};if(So(d)){const u=qm(d,l),y=Math.max(...(((n=d.srcSet)===null||n===void 0?void 0:n.map(m=>m.width))||[]).concat(d.width?[d.width]:[])),p=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(m=>m.height))||[]).concat(d.height?[d.height]:[]));y>0&&p>0&&e.width>0&&e.height>0&&(o=u?{width:Math.round(Math.min(y,e.width/e.height*p)),height:Math.round(Math.min(p,e.height/e.width*y))}:{width:y,height:p},o={width:o.width*s,height:o.height*s},i=u?{width:Math.min(e.width,o.width,y),height:Math.min(e.height,o.height,p)}:{width:Math.round(Math.min(e.width,e.height/p*y,y)),height:Math.round(Math.min(e.height,e.width/y*p,p))})}}const c=i.width?Math.max(Gm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:c}}function m1(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function g1(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function gR(e,t,n,r,i,o,a,l,s){const c=x.useRef([]),d=x.useRef(0),u=x.useRef(void 0),{globalIndex:y}=Dr(),{getOwnerWindow:p}=ku(),{containerRef:m,subscribeSensors:g}=ir(),{keyboardMoveDistance:w,zoomInMultiplier:h,wheelZoomDistanceFactor:v,scrollToZoom:b,doubleTapDelay:S,doubleClickDelay:E,doubleClickMaxStops:P,pinchZoomDistanceFactor:k,pinchZoomV4:C}=Ou(),M=x.useCallback(T=>{if(m.current){const{pageX:I,pageY:z}=T,{scrollX:B,scrollY:N}=p(),{left:U,top:G,width:W,height:Y}=m.current.getBoundingClientRect();return[I-U-B-W/2,z-G-N-Y/2]}return[]},[m,p]),$=he(T=>{const{key:I,metaKey:z,ctrlKey:B}=T,N=z||B,U=()=>{T.preventDefault(),T.stopPropagation()};if(e>1){const G=(W,Y)=>{U(),l(W,Y)};I==="ArrowDown"?G(0,w):I==="ArrowUp"?G(0,-w):I==="ArrowLeft"?G(-w,0):I==="ArrowRight"&&G(w,0)}I==="+"||N&&I==="="?(U(),i()):I==="-"||N&&I==="_"?(U(),o()):N&&I==="0"&&(U(),a(1))}),D=he(T=>{if((T.ctrlKey||b)&&Math.abs(T.deltaY)>Math.abs(T.deltaX)){T.stopPropagation(),a(g1(e,-T.deltaY,v),!0,...M(T));return}e>1&&(T.stopPropagation(),b||l(T.deltaX,T.deltaY))}),R=x.useCallback(T=>{const I=c.current;I.splice(0,I.length,...I.filter(z=>z.pointerId!==T.pointerId))},[]),j=x.useCallback(T=>{R(T),T.persist(),c.current.push(T)},[R]),F=he(T=>{var I;const z=c.current;if(T.pointerType==="mouse"&&T.buttons>1||!(!((I=s==null?void 0:s.current)===null||I===void 0)&&I.contains(T.target)))return;e>1&&T.stopPropagation();const{timeStamp:B}=T;if(z.length===0&&B-d.current<(T.pointerType==="touch"?S:E)){d.current=0;const N=e>=1?e!==n?e*Math.max(n**(1/P),h):1:e!==t?e/Math.max(t**(-1/P),h):1;a(N,!1,...M(T))}else d.current=B;if(j(T),z.length===2){const N=m1(z[0],z[1]);u.current={previousDistance:N,initialDistance:Math.max(N,1),initialZoom:e}}}),A=he(T=>{const I=c.current,z=I.find(B=>B.pointerId===T.pointerId);if(I.length===2&&u.current){T.stopPropagation(),j(T);const B=m1(I[0],I[1]),N=C?u.current.initialZoom/u.current.initialDistance*B:g1(e,B-u.current.previousDistance,k);a(N,!0,...I.map(U=>M(U)).reduce((U,G)=>G.map((W,Y)=>U[Y]+W/2))),u.current.previousDistance=B;return}e>1&&(T.stopPropagation(),z&&(I.length===1&&l((z.clientX-T.clientX)/e,(z.clientY-T.clientY)/e),j(T)))}),L=x.useCallback(T=>{const I=c.current;I.length===2&&I.find(z=>z.pointerId===T.pointerId)&&(u.current=void 0),R(T)},[R]),O=x.useCallback(()=>{const T=c.current;T.splice(0,T.length),d.current=0,u.current=void 0},[]);a_(g,F,A,L,r),x.useEffect(O,[y,O]),x.useEffect(()=>r?()=>{}:Wm(O,g(Bm,$),g(Vm,D)),[r,g,O,$,D])}function vR(e,t,n){const[r,i]=x.useState(1),[o,a]=x.useState(0),[l,s]=x.useState(0),c=pR(r,o,l,n),{currentSlide:d,globalIndex:u}=Dr(),{containerRect:y,slideRect:p}=ir(),{minZoom:m,zoomInMultiplier:g}=Ou(),w=d&&So(d)?d.src:void 0,h=!w||!(n!=null&&n.current);$n(()=>{i(1),a(0),s(0)},[u,w]);const v=x.useCallback((k,C,M)=>{const $=M||r,D=o-(k||0),R=l-(C||0),j=(e.width*$-p.width)/2/$,F=(e.height*$-p.height)/2/$;a(Math.min(Math.abs(D),Math.max(j,0))*Math.sign(D)),s(Math.min(Math.abs(R),Math.max(F,0))*Math.sign(R))},[r,o,l,p,e.width,e.height]),b=x.useCallback((k,C,M,$)=>{const D=Gm(k+.01<t?k-.01>m?k:m:t,5);C||c(),v(M?M*(1/r-1/D):0,$?$*(1/r-1/D):0,D),i(D)},[r,m,t,v,c]),S=he(()=>{r>1&&(r>t&&b(t,!0),v())});$n(S,[y.width,y.height,S]);const E=x.useCallback(()=>{const k=r*g;b(r<1&&k>1?1:k)},[r,g,b]),P=x.useCallback(()=>{const k=r/g;b(r>1&&k<1?1:k)},[r,g,b]);return{zoom:r,offsetX:o,offsetY:l,disabled:h,changeOffsets:v,changeZoom:b,zoomIn:E,zoomOut:P}}const d_=x.createContext(null),Zm=rr("useZoom","ZoomControllerContext",d_);function yR({children:e}){const[t,n]=x.useState(),{slideRect:r}=ir(),{ref:i,minZoom:o}=Ou(),{imageRect:a,maxZoom:l}=mR(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:c,offsetY:d,disabled:u,changeZoom:y,changeOffsets:p,zoomIn:m,zoomOut:g}=vR(a,l,t==null?void 0:t.zoomWrapperRef);hR(s,u),gR(s,o,l,u,m,g,y,p,t==null?void 0:t.zoomWrapperRef);const w=x.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:c,offsetY:d,disabled:u,zoomIn:m,zoomOut:g,changeZoom:y}),[s,o,l,c,d,u,m,g,y]);x.useImperativeHandle(i,()=>w,[w]);const h=x.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return x.createElement(d_.Provider,{value:h},e)}const xR=di("ZoomIn",x.createElement(x.Fragment,null,x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),x.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),bR=di("ZoomOut",x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),v1=x.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=x.useRef(!1),o=x.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:c,zoomOut:d,disabled:u}=Zm(),{render:y}=en(),p=u||(t?a>=s:a<=l);return x.useEffect(()=>{p&&i.current&&o.current&&n(),p||(i.current=!0)},[p,n]),x.createElement(Xm,{ref:r,disabled:p,label:t?"Zoom in":"Zoom out",icon:t?xR:bR,renderIcon:t?y.iconZoomIn:y.iconZoomOut,onClick:t?c:d,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function wR(){const e=x.useRef(null),t=x.useRef(null),{focus:n}=ir(),r=x.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=x.useCallback(()=>r(e),[r]),o=x.useCallback(()=>r(t),[r]);return x.createElement(x.Fragment,null,x.createElement(v1,{zoomIn:!0,ref:e,onLoseFocus:o}),x.createElement(v1,{ref:t,onLoseFocus:i}))}function SR(){const{render:e}=en(),t=Zm();return e.buttonZoom?x.createElement(x.Fragment,null,e.buttonZoom(t)):x.createElement(wR,null)}function _R(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function CR({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(G2)}}function ER(e){var t,n;const[{current:r,preload:i},o]=x.useReducer(CR,{}),{slide:a,rect:l,imageFit:s,render:c,interactive:d}=e,u=a.srcSet.sort((E,P)=>E.width-P.width),y=(t=a.width)!==null&&t!==void 0?t:u[u.length-1].width,p=(n=a.height)!==null&&n!==void 0?n:u[u.length-1].height,m=qm(a,s),g=Math.max(...u.map(E=>E.width)),w=Math.min((m?Math.max:Math.min)(l.width,y*(l.height/p)),g),h=hL(),v=he(()=>{var E;const P=(E=u.find(k=>k.width>=w*h))!==null&&E!==void 0?E:u[u.length-1];(!r||u.findIndex(k=>k.src===r)<u.findIndex(k=>k===P))&&o({type:"fetch",source:P.src})});$n(v,[l.width,l.height,h,v]);const b=he(E=>o({type:"done",source:E})),S={WebkitTransform:d?"initial":"translateZ(0)"};return m||Object.assign(S,l.width/l.height<y/p?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),x.createElement(x.Fragment,null,i&&i!==r&&x.createElement(lc,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>b(i),render:{...c,iconLoading:()=>null,iconError:()=>null}}),r&&x.createElement(lc,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function kR({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=x.useState(),l=x.useRef(null),{zoom:s,maxZoom:c,offsetX:d,offsetY:u,setZoomWrapper:y}=Zm(),p=s>1,{carousel:m,on:g}=en(),{currentIndex:w}=Dr();$n(()=>n===0?(y({zoomWrapperRef:l,imageDimensions:o}),()=>y(void 0)):()=>{},[n,o,y]);let h=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:c});if(!h&&So(t)){const v={slide:t,offset:n,rect:r,render:e,imageFit:m.imageFit,imageProps:m.imageProps,onClick:n===0?()=>{var b;return(b=g.click)===null||b===void 0?void 0:b.call(g,{index:w})}:void 0};h=_R(t)?x.createElement(ER,{...v,slide:t,interactive:p,rect:n===0?{width:r.width*s,height:r.height*s}:r}):x.createElement(lc,{onLoad:b=>a({width:b.naturalWidth,height:b.naturalHeight}),...v})}return h?x.createElement("div",{ref:l,className:Mn(ae(iL),ae(zm),ae(z2),p&&ae(aL)),style:n===0?{transform:`scale(${s}) translateX(${d}px) translateY(${u}px)`}:void 0},h):null}const TR=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=u_(n);return{zoom:l,toolbar:gL(r,n1,x.createElement(SR,null)),render:{...i,slide:s=>{var c;return So(s.slide)?x.createElement(kR,{render:i,...s}):(c=i.slide)===null||c===void 0?void 0:c.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Ir(n1,yR))};var f_={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",c="day",d="week",u="month",y="quarter",p="year",m="date",g="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var A=["th","st","nd","rd"],L=F%100;return"["+F+(A[(L-20)%10]||A[L]||A[0])+"]"}},b=function(F,A,L){var O=String(F);return!O||O.length>=A?F:""+Array(A+1-O.length).join(L)+F},S={s:b,z:function(F){var A=-F.utcOffset(),L=Math.abs(A),O=Math.floor(L/60),T=L%60;return(A<=0?"+":"-")+b(O,2,"0")+":"+b(T,2,"0")},m:function F(A,L){if(A.date()<L.date())return-F(L,A);var O=12*(L.year()-A.year())+(L.month()-A.month()),T=A.clone().add(O,u),I=L-T<0,z=A.clone().add(O+(I?-1:1),u);return+(-(O+(L-T)/(I?T-z:z-T))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:u,y:p,w:d,d:c,D:m,h:s,m:l,s:a,ms:o,Q:y}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},E="en",P={};P[E]=v;var k="$isDayjsObject",C=function(F){return F instanceof R||!(!F||!F[k])},M=function F(A,L,O){var T;if(!A)return E;if(typeof A=="string"){var I=A.toLowerCase();P[I]&&(T=I),L&&(P[I]=L,T=I);var z=A.split("-");if(!T&&z.length>1)return F(z[0])}else{var B=A.name;P[B]=A,T=B}return!O&&T&&(E=T),T||!O&&E},$=function(F,A){if(C(F))return F.clone();var L=typeof A=="object"?A:{};return L.date=F,L.args=arguments,new R(L)},D=S;D.l=M,D.i=C,D.w=function(F,A){return $(F,{locale:A.$L,utc:A.$u,x:A.$x,$offset:A.$offset})};var R=function(){function F(L){this.$L=M(L.locale,null,!0),this.parse(L),this.$x=this.$x||L.x||{},this[k]=!0}var A=F.prototype;return A.parse=function(L){this.$d=function(O){var T=O.date,I=O.utc;if(T===null)return new Date(NaN);if(D.u(T))return new Date;if(T instanceof Date)return new Date(T);if(typeof T=="string"&&!/Z$/i.test(T)){var z=T.match(w);if(z){var B=z[2]-1||0,N=(z[7]||"0").substring(0,3);return I?new Date(Date.UTC(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)):new Date(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)}}return new Date(T)}(L),this.init()},A.init=function(){var L=this.$d;this.$y=L.getFullYear(),this.$M=L.getMonth(),this.$D=L.getDate(),this.$W=L.getDay(),this.$H=L.getHours(),this.$m=L.getMinutes(),this.$s=L.getSeconds(),this.$ms=L.getMilliseconds()},A.$utils=function(){return D},A.isValid=function(){return this.$d.toString()!==g},A.isSame=function(L,O){var T=$(L);return this.startOf(O)<=T&&T<=this.endOf(O)},A.isAfter=function(L,O){return $(L)<this.startOf(O)},A.isBefore=function(L,O){return this.endOf(O)<$(L)},A.$g=function(L,O,T){return D.u(L)?this[O]:this.set(T,L)},A.unix=function(){return Math.floor(this.valueOf()/1e3)},A.valueOf=function(){return this.$d.getTime()},A.startOf=function(L,O){var T=this,I=!!D.u(O)||O,z=D.p(L),B=function(we,ie){var Ie=D.w(T.$u?Date.UTC(T.$y,ie,we):new Date(T.$y,ie,we),T);return I?Ie:Ie.endOf(c)},N=function(we,ie){return D.w(T.toDate()[we].apply(T.toDate("s"),(I?[0,0,0,0]:[23,59,59,999]).slice(ie)),T)},U=this.$W,G=this.$M,W=this.$D,Y="set"+(this.$u?"UTC":"");switch(z){case p:return I?B(1,0):B(31,11);case u:return I?B(1,G):B(0,G+1);case d:var ee=this.$locale().weekStart||0,pe=(U<ee?U+7:U)-ee;return B(I?W-pe:W+(6-pe),G);case c:case m:return N(Y+"Hours",0);case s:return N(Y+"Minutes",1);case l:return N(Y+"Seconds",2);case a:return N(Y+"Milliseconds",3);default:return this.clone()}},A.endOf=function(L){return this.startOf(L,!1)},A.$set=function(L,O){var T,I=D.p(L),z="set"+(this.$u?"UTC":""),B=(T={},T[c]=z+"Date",T[m]=z+"Date",T[u]=z+"Month",T[p]=z+"FullYear",T[s]=z+"Hours",T[l]=z+"Minutes",T[a]=z+"Seconds",T[o]=z+"Milliseconds",T)[I],N=I===c?this.$D+(O-this.$W):O;if(I===u||I===p){var U=this.clone().set(m,1);U.$d[B](N),U.init(),this.$d=U.set(m,Math.min(this.$D,U.daysInMonth())).$d}else B&&this.$d[B](N);return this.init(),this},A.set=function(L,O){return this.clone().$set(L,O)},A.get=function(L){return this[D.p(L)]()},A.add=function(L,O){var T,I=this;L=Number(L);var z=D.p(O),B=function(G){var W=$(I);return D.w(W.date(W.date()+Math.round(G*L)),I)};if(z===u)return this.set(u,this.$M+L);if(z===p)return this.set(p,this.$y+L);if(z===c)return B(1);if(z===d)return B(7);var N=(T={},T[l]=r,T[s]=i,T[a]=n,T)[z]||1,U=this.$d.getTime()+L*N;return D.w(U,this)},A.subtract=function(L,O){return this.add(-1*L,O)},A.format=function(L){var O=this,T=this.$locale();if(!this.isValid())return T.invalidDate||g;var I=L||"YYYY-MM-DDTHH:mm:ssZ",z=D.z(this),B=this.$H,N=this.$m,U=this.$M,G=T.weekdays,W=T.months,Y=T.meridiem,ee=function(ie,Ie,We,He){return ie&&(ie[Ie]||ie(O,I))||We[Ie].slice(0,He)},pe=function(ie){return D.s(B%12||12,ie,"0")},we=Y||function(ie,Ie,We){var He=ie<12?"AM":"PM";return We?He.toLowerCase():He};return I.replace(h,function(ie,Ie){return Ie||function(We){switch(We){case"YY":return String(O.$y).slice(-2);case"YYYY":return D.s(O.$y,4,"0");case"M":return U+1;case"MM":return D.s(U+1,2,"0");case"MMM":return ee(T.monthsShort,U,W,3);case"MMMM":return ee(W,U);case"D":return O.$D;case"DD":return D.s(O.$D,2,"0");case"d":return String(O.$W);case"dd":return ee(T.weekdaysMin,O.$W,G,2);case"ddd":return ee(T.weekdaysShort,O.$W,G,3);case"dddd":return G[O.$W];case"H":return String(B);case"HH":return D.s(B,2,"0");case"h":return pe(1);case"hh":return pe(2);case"a":return we(B,N,!0);case"A":return we(B,N,!1);case"m":return String(N);case"mm":return D.s(N,2,"0");case"s":return String(O.$s);case"ss":return D.s(O.$s,2,"0");case"SSS":return D.s(O.$ms,3,"0");case"Z":return z}return null}(ie)||z.replace(":","")})},A.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},A.diff=function(L,O,T){var I,z=this,B=D.p(O),N=$(L),U=(N.utcOffset()-this.utcOffset())*r,G=this-N,W=function(){return D.m(z,N)};switch(B){case p:I=W()/12;break;case u:I=W();break;case y:I=W()/3;break;case d:I=(G-U)/6048e5;break;case c:I=(G-U)/864e5;break;case s:I=G/i;break;case l:I=G/r;break;case a:I=G/n;break;default:I=G}return T?I:D.a(I)},A.daysInMonth=function(){return this.endOf(u).$D},A.$locale=function(){return P[this.$L]},A.locale=function(L,O){if(!L)return this.$L;var T=this.clone(),I=M(L,O,!0);return I&&(T.$L=I),T},A.clone=function(){return D.w(this.$d,this)},A.toDate=function(){return new Date(this.valueOf())},A.toJSON=function(){return this.isValid()?this.toISOString():null},A.toISOString=function(){return this.$d.toISOString()},A.toString=function(){return this.$d.toUTCString()},F}(),j=R.prototype;return $.prototype=j,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",c],["$M",u],["$y",p],["$D",m]].forEach(function(F){j[F[1]]=function(A){return this.$g(A,F[0],F[1])}}),$.extend=function(F,A){return F.$i||(F(A,R,$),F.$i=!0),$},$.locale=M,$.isDayjs=C,$.unix=function(F){return $(1e3*F)},$.en=P[E],$.Ls=P,$.p={},$})})(f_);var PR=f_.exports;const y1=Na(PR),OR=_.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;_.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const jR=_.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,MR=_.input`
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
`,$R=_.textarea`
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
`,IR=_.button`
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
`,DR=_.div`
  margin-top: 30px;
`,LR=_.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,RR=_.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,AR=_.span`
  font-weight: bold;
  color: #333;
`,FR=_.span`
  font-size: 12px;
  color: #999;
`,zR=_.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,NR=_.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,BR=_.div`
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
`,x1=({productId:e,questions:t})=>{const[n,r]=x.useState(""),[i,o]=x.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(Z.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return f.jsxs(OR,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(jR,{onSubmit:a,children:[f.jsx(MR,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),f.jsx($R,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),f.jsx(IR,{children:"Надіслати запитання"})]}),f.jsx(DR,{children:t&&t.length>0?t.map(l=>l.answer?f.jsxs(LR,{children:[f.jsxs(RR,{children:[f.jsx(AR,{children:l.userName||"Гість"}),f.jsx(FR,{children:new Date(l.createdAt).toLocaleDateString()})]}),f.jsx(zR,{children:l.question}),f.jsxs(NR,{children:[f.jsx(BR,{children:"Адміністратор"}),f.jsx("p",{children:l.answer})]})]},l.id):null):f.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},VR=()=>{var L;const{id:e}=$y(),[t,n]=x.useState([]),[r,i]=x.useState(1),[o,a]=x.useState("description"),[l,s]=x.useState(null),[c,d]=x.useState(!1),[u,y]=x.useState(0),[p,m]=x.useState(!0),g=t.find(O=>O.id===Number(e)),w=g?y1().diff(y1(g.createdAt),"day")<7:!1,v=(O=>{const[T,I]=x.useState(!1);return x.useEffect(()=>{const z=window.matchMedia(O),B=()=>I(z.matches);return B(),z.addEventListener("change",B),()=>z.removeEventListener("change",B)},[O]),T})("(min-width: 768px)"),b=Ue(O=>O.cart.items),S=g?b.find(O=>O.id===g.id):null,E=(S==null?void 0:S.quantity)||0;x.useEffect(()=>{(async()=>{try{m(!0);const I=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[id][$eq]=${e}&populate=*`)).json();n(I.data)}catch(T){console.error("Error fetching products:",T)}finally{m(!1)}})()},[e]);const P=(g==null?void 0:g.available)??!0;console.log(g),x.useEffect(()=>{var O,T;g&&g.images&&s((T=(O=g.images)==null?void 0:O[0])==null?void 0:T.url)},[g]);const k=((g==null?void 0:g.images)??[]).map(O=>({src:O.url})),C=()=>{const O=g.images.findIndex(T=>T.url===l);y(O>=0?O:0),d(!0)},M=Jt(),D=Ue(O=>O.favorites.items).some(O=>O.id===(g==null?void 0:g.id)),R=()=>{if(E>=g.stock){Z.warning("Товар вже в кошику (досягнуто максимум)");return}if(E+r>g.stock){Z.warning(`Доступно лише ${g.stock} шт.`);return}M(vo({...g,quantity:r})),Z.success(`${g.name} додано в кошик!`)},j=(O,T)=>{T.stopPropagation(),ui(O,D,M,Z)},F=(g==null?void 0:g.new_price)&&(g==null?void 0:g.new_price)<g.price,A=F?Math.round((g.price-g.new_price)/g.price*100):0;return p?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ja,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):g?f.jsxs(Yv,{children:[" ",f.jsx(Dn,{autoClose:1500}),f.jsxs(j6,{children:[f.jsx(Te,{to:"/",children:"Головна"})," / ",f.jsx(Te,{to:"/catalog",children:"Каталог"})," /"," ",g.name]}),f.jsxs(M6,{children:[f.jsxs($6,{children:[f.jsx(I6,{src:l,alt:g.name,onClick:C}),f.jsx(D6,{children:(g.images??[]).map(O=>{const T=O.url;return f.jsx(L6,{src:T,onClick:()=>s(T),style:{cursor:"pointer",opacity:l===T?1:.4}},O.id)})})]}),f.jsx(uR,{open:c,close:()=>d(!1),index:u,slides:k,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var T,I;y(O),(I=(T=g==null?void 0:g.images)==null?void 0:T[O])!=null&&I.url&&s(g.images[O].url)}},plugins:[TR],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),f.jsxs(R6,{children:[f.jsx(A6,{children:g.name}),f.jsx(F6,{children:w&&f.jsx(N6,{children:"● Новий товар"})}),!P&&f.jsx(z6,{children:" Заброньовано"}),f.jsxs(B6,{children:[f.jsx(V6,{children:F?f.jsxs(f.Fragment,{children:[f.jsxs(Xv,{$discount:!0,children:[g.new_price.toLocaleString()," грн"]}),f.jsxs(U6,{children:[g.price.toLocaleString()," грн"]}),f.jsxs(W6,{children:["-",A,"%"]})]}):f.jsxs(Xv,{children:[g.price.toLocaleString()," грн"]})}),f.jsxs(H6,{children:[f.jsxs(G6,{children:[f.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),f.jsx("span",{children:r}),f.jsxs(Z6,{$active:r>=g.stock,children:[f.jsx("button",{onClick:()=>i(Math.min(g.stock,r+1)),disabled:r>=g.stock,children:"+"}),f.jsxs(D2,{children:["Максимум: ",g.stock]})]})]}),f.jsxs(q6,{onClick:R,disabled:!P,children:[" ",f.jsx(go,{size:25}),f.jsx("span",{children:"В КОШИК"})]}),f.jsxs(K6,{$active:D,onClick:O=>j(g,O),children:[f.jsxs(Q6,{$active:D,children:[" ",f.jsx("use",{href:`${hn}#icon-heart`})]}),f.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!v&&f.jsxs(Zv,{children:[f.jsxs(Jv,{children:[f.jsx(No,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(No,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),f.jsx(No,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(e1,{children:[o==="description"&&f.jsx(t1,{children:g.description}),o==="attributes"&&f.jsx(Kv,{children:(L=g.attributes)!=null&&L.length?g.attributes.map(O=>f.jsxs(Qv,{children:[f.jsx("span",{children:O.label}),f.jsx("b",{children:O.value})]},O.id)):f.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&f.jsx(x1,{productId:g.documentId,questions:g.questions})]})]}),v&&f.jsxs(X6,{children:[f.jsxs(Zv,{children:[f.jsxs(Jv,{children:[f.jsx(No,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(No,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(e1,{children:[o==="description"&&f.jsx(t1,{children:g.description}),o==="FAQ"&&f.jsx(x1,{productId:g.documentId,questions:g.questions})]})]}),f.jsxs(Kv,{children:[f.jsx(Y6,{children:" Характеристики"}),(()=>{const O=[...g.attributes||[],...g.features||[]];return O.length?O.map((T,I)=>f.jsxs(Qv,{children:[f.jsx("span",{children:T.label}),f.jsx("b",{children:T.value})]},`${T.id}-${I}`)):f.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):f.jsx(Yv,{children:"Товар не знайдено"})},UR=_.div`
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

  
`,WR=_.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,HR=_.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,GR=_.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,qR=_.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,YR=_.div`
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
`,XR=_.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,KR=_.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,QR=_.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,ZR=_.div`

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
`;const ju=_.div`
  text-align: center;
  width: 100px;
 
`,Mu=_.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,$u=_.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Iu=_.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Du=_.span`
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
`,JR=_.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,eA=_.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,tA=_.div`

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
`,nA=_.div`
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
`,rA=_(Te)`
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
`,iA=_.button`
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
`;const oA=_.div`
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
`,aA=_.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,sA=_.div`
  background-color: #fdfaf7;
`,lA=_.div`
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
`;const cA=_.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,uA=_.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,dA=_.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,fA=_.button`
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
`,pA=()=>f.jsx(sA,{children:f.jsxs(oA,{children:[f.jsx(aA,{children:"Головна / Кошик"}),f.jsxs(lA,{children:[f.jsx(cA,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),f.jsx(uA,{children:"Ваш кошик порожній"}),f.jsx(dA,{children:"Ви ще не додали жодного товару в кошик"}),f.jsx(fA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),hA=_.div`
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
`,mA=({item:e})=>{const t=Jt();return f.jsxs(hA,{children:[f.jsx("button",{onClick:()=>t(R4(e.id)),children:"-"}),f.jsx("span",{children:e.quantity}),f.jsx("button",{onClick:()=>t(L4({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},gA=()=>{const e=Jt(),t=Bt(),[n,r]=x.useState([]),i=Ue(p=>p.cart.items),a=Ue(p=>p.cart.items).reduce((p,m)=>p+m.quantity,0),l=i.reduce((p,m)=>p+(m.new_price??m.price)*(m.quantity||1),0),s=Ue(p=>p.favorites.items),c=i.length===0,d=(p,m)=>{m.stopPropagation();const g=s.some(w=>w.id===(p==null?void 0:p.id));ui(p,g,e,Z)},u=p=>{r(m=>[...m,p.id]),setTimeout(()=>{e(I4(p)),r(m=>m.filter(g=>g!==p.id))},300)},y=()=>{e(vm())};return f.jsx(f.Fragment,{children:c?f.jsx(pA,{}):f.jsxs(UR,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(WR,{children:[" ",f.jsx(Te,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Te,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),f.jsx(HR,{children:"Кошик"}),f.jsxs(GR,{children:[f.jsx(qR,{children:i.map((p,m)=>{var b,S;console.log(p);const g=s.some(E=>E.id===p.id),w=p.new_price&&p.new_price<p.price,h=w?p.new_price:p.price,v=w?Math.round((p.price-p.new_price)/p.price*100):0;return f.jsxs(YR,{className:n.includes(p.id)?"removing":"",children:[f.jsx(XR,{src:((S=(b=p.images)==null?void 0:b[0])==null?void 0:S.url)||"/nofoto.png",alt:p.name,onClick:()=>t(`/product/${p.id}`),onError:E=>{E.currentTarget.onerror=null,E.currentTarget.src=ii}}),f.jsx(KR,{children:f.jsx("h3",{children:p.name})}),f.jsxs(QR,{children:[f.jsx(mA,{item:{...p,quantity:p.quantity||1}}),f.jsx(ju,{children:f.jsxs(Mu,{children:[f.jsxs($u,{$discount:w,children:[(h*(p.quantity||1)).toLocaleString()," грн"]}),w&&f.jsxs(f.Fragment,{children:[f.jsxs(Iu,{children:[(p.price*(p.quantity||1)).toLocaleString()," грн"]}),f.jsxs(Du,{children:["-",v,"%"]})]})]})})]}),f.jsxs(ZR,{children:[f.jsx(eA,{onClick:E=>d(p,E),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:f.jsx(Ya,{size:22,fill:g?"#ff4d4f":"none",color:g?"#ff4d4f":"#999"})}),f.jsx(JR,{onClick:()=>u(p),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:f.jsx(vw,{size:22})})]})]},`${p.id}-${m}`)})}),f.jsxs(tA,{children:[f.jsxs(nA,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[a," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[l," грн"]})]}),f.jsx(rA,{to:"/checkout",children:"Оформити замовлення"}),f.jsx(iA,{onClick:y,children:"Oчистити кошик"})]})]})]})})},vA=_.div`
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
`,yA=_.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,xA=_.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,bA=_.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,wA=_.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,SA=_.div`
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
`,_A=_.div`
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
`;const CA=_.div`
  position: relative;
`,EA=_.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,kA=_.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,TA=_.div`
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
`;const PA=_.div`
  display: flex;
  gap: 16px;
`,b1=_.button`
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
`,OA=_.div`
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
`,jA=_.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,MA=_.button`
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
`,$A=_.button`
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
`,IA=_.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,DA=_.div`
   
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
`;const LA=_.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;_.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const RA=_.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,AA=_.button`
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
`,FA=()=>f.jsxs(f.Fragment,{children:[f.jsx(IA,{children:"Головна / Обране"}),f.jsxs(DA,{children:[f.jsx(LA,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),f.jsx(RA,{children:"Ви ще не додали жодного товару в обране"}),f.jsx(AA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),zA=()=>{const e=Jt(),t=Bt(),n=Ue(u=>u.favorites.items);console.log(n);const[r,i]=x.useState([]),o=Ue(u=>u.cart.items),a=()=>{const u=n.filter(y=>y.available!==!1).map(y=>{const p=o.find(w=>w.id===y.id),m=p?p.quantity:0,g=y.stock-m;return g<=0?null:{...y,quantity:g}}).filter(Boolean);if(u.length===0){Z.error("Усі товари вже в максимальній кількості");return}e(D4(u)),Z.success("Додано максимально доступну кількість товарів")};console.log(n);const l=n.reduce((u,y)=>u+(y.new_price??y.price)*(y.quantity||1),0),s=(u,y)=>{y.stopPropagation();const p=n.some(m=>m.id===(u==null?void 0:u.id));setTimeout(()=>{i(m=>m.filter(g=>g!==u.id))},300),ui(u,p,e,Z)},c=()=>{e(Yw())},d=n.length===0;return f.jsx(f.Fragment,{children:d?f.jsx(FA,{}):f.jsxs(vA,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(yA,{children:[" ",f.jsx(Te,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Te,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),f.jsx(xA,{children:"Обране"}),f.jsxs(bA,{children:[f.jsx(wA,{children:n.map(u=>{var h,v;const y=u.new_price&&u.new_price<u.price,p=y?u.new_price:u.price,m=(u==null?void 0:u.available)??!0,g=y?Math.round((u.price-u.new_price)/u.price*100):0,w=b=>{const S=o.find(P=>P.id===b.id);if((S?S.quantity:0)>=b.stock){Z.error(`Вибачте, доступно лише ${b.stock} шт.`);return}e(vo(b)),Z.success(`${b.name} додано в кошик!`)};return f.jsxs(SA,{className:r.includes(u.id)?"removing":"",children:[!m&&f.jsx(_A,{children:"Заброньовано"}),f.jsx(CA,{children:f.jsx(EA,{src:((v=(h=u.images)==null?void 0:h[0])==null?void 0:v.url)||ii,alt:u.name,onClick:()=>t(`/product/${u.id}`),onError:b=>{b.currentTarget.onerror=null}})}),f.jsx(kA,{children:u.name}),f.jsxs(TA,{children:[f.jsx(ju,{children:f.jsxs(Mu,{children:[f.jsxs($u,{$discount:y,children:[(p*(u.quantity||1)).toLocaleString()," ","грн"]}),y&&f.jsxs(f.Fragment,{children:[f.jsxs(Iu,{children:[(u.price*(u.quantity||1)).toLocaleString()," ","грн"]}),f.jsxs(Du,{children:["-",g,"%"]})]})]})}),f.jsxs(PA,{children:[f.jsx(b1,{onClick:()=>w(u),disabled:!m,children:f.jsx(go,{size:30})}),f.jsx(b1,{onClick:b=>s(u,b),children:f.jsx(vw,{size:30})})]})]})]},u.id)})}),f.jsxs(OA,{children:[f.jsxs(jA,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[n.length," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[l," грн"]})]}),f.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),f.jsx(MA,{onClick:()=>a(),children:"Додати все до кошика"}),f.jsx($A,{onClick:c,children:"Очистити обрані"})]})]})]})})},NA=_.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,BA=_.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,VA=_.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,UA=_.h1`
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
`;const WA=({title:e,children:t,breadcrumbPath:n})=>f.jsxs(NA,{children:[f.jsxs(BA,{children:["Головна / ",n]}),f.jsxs(VA,{children:[f.jsx(UA,{children:e}),t]})]}),w1=_.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,S1=_.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,_1=_.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,C1=_.ul`
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
`,HA=()=>f.jsxs(WA,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[f.jsxs(w1,{children:[f.jsx(S1,{children:"Способи доставки"}),f.jsx(_1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),f.jsxs(C1,{children:[f.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),f.jsx("li",{children:"Самовивіз з нашого магазину"}),f.jsx("li",{children:"Укрпошта"})]})]}),f.jsxs(w1,{children:[f.jsx(S1,{children:"Варіанти оплати"}),f.jsx(_1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),f.jsxs(C1,{children:[f.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),f.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),f.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ai(e){"@babel/helpers - typeof";return ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ai(e)}function GA(e,t){if(ai(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ai(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function p_(e){var t=GA(e,"string");return ai(t)==="symbol"?t:String(t)}function Qo(e,t,n){return t=p_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?E1(Object(n),!0).forEach(function(r){Qo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qA(e){if(Array.isArray(e))return e}function YA(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){c=!0,i=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}function Gp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h_(e,t){if(e){if(typeof e=="string")return Gp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gp(e,t)}}function XA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qn(e,t){return qA(e)||YA(e,t)||h_(e,t)||XA()}function KA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function or(e,t){if(e==null)return{};var n=KA(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var QA=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function ZA(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,c=e.onChange,d=e.onInputChange,u=e.onMenuClose,y=e.onMenuOpen,p=e.value,m=or(e,QA),g=x.useState(l!==void 0?l:n),w=qn(g,2),h=w[0],v=w[1],b=x.useState(s!==void 0?s:i),S=qn(b,2),E=S[0],P=S[1],k=x.useState(p!==void 0?p:a),C=qn(k,2),M=C[0],$=C[1],D=x.useCallback(function(T,I){typeof c=="function"&&c(T,I),$(T)},[c]),R=x.useCallback(function(T,I){var z;typeof d=="function"&&(z=d(T,I)),v(z!==void 0?z:T)},[d]),j=x.useCallback(function(){typeof y=="function"&&y(),P(!0)},[y]),F=x.useCallback(function(){typeof u=="function"&&u(),P(!1)},[u]),A=l!==void 0?l:h,L=s!==void 0?s:E,O=p!==void 0?p:M;return Q(Q({},m),{},{inputValue:A,menuIsOpen:L,onChange:D,onInputChange:R,onMenuClose:F,onMenuOpen:j,value:O})}function JA(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p_(r.key),r)}}function e8(e,t,n){return t&&k1(e.prototype,t),n&&k1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function qp(e,t){return qp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},qp(e,t)}function t8(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&qp(e,t)}function cc(e){return cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},cc(e)}function n8(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function r8(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i8(e,t){if(t&&(ai(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return r8(e)}function o8(e){var t=n8();return function(){var r=cc(e),i;if(t){var o=cc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return i8(this,i)}}function a8(e){if(Array.isArray(e))return Gp(e)}function s8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function l8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jm(e){return a8(e)||s8(e)||h_(e)||l8()}function c8(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const u8=Math.min,d8=Math.max,uc=Math.round,Ms=Math.floor,dc=e=>({x:e,y:e});function f8(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Lu(){return typeof window<"u"}function m_(e){return v_(e)?(e.nodeName||"").toLowerCase():"#document"}function mn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function g_(e){var t;return(t=(v_(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function v_(e){return Lu()?e instanceof Node||e instanceof mn(e).Node:!1}function Yp(e){return Lu()?e instanceof Element||e instanceof mn(e).Element:!1}function eg(e){return Lu()?e instanceof HTMLElement||e instanceof mn(e).HTMLElement:!1}function T1(e){return!Lu()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof mn(e).ShadowRoot}function y_(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=tg(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Qd;function p8(){return Qd==null&&(Qd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Qd}function h8(e){return/^(html|body|#document)$/.test(m_(e))}function tg(e){return mn(e).getComputedStyle(e)}function m8(e){if(m_(e)==="html")return e;const t=e.assignedSlot||e.parentNode||T1(e)&&e.host||g_(e);return T1(t)?t.host:t}function x_(e){const t=m8(e);return h8(t)?e.ownerDocument?e.ownerDocument.body:e.body:eg(t)&&y_(t)?t:x_(t)}function fc(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=x_(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=mn(i);if(o){const l=Xp(a);return t.concat(a,a.visualViewport||[],y_(i)?i:[],l&&n?fc(l):[])}else return t.concat(i,fc(i,[],n))}function Xp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function g8(e){const t=tg(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=eg(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=uc(n)!==o||uc(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function ng(e){return Yp(e)?e:e.contextElement}function Zd(e){const t=ng(e);if(!eg(t))return dc(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=g8(t);let a=(o?uc(n.width):n.width)/r,l=(o?uc(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const v8=dc(0);function y8(e){const t=mn(e);return!p8()||!t.visualViewport?v8:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function x8(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==mn(e)?!1:t}function P1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=ng(e);let a=dc(1);t&&(r?Yp(r)&&(a=Zd(r)):a=Zd(e));const l=x8(o,n,r)?y8(o):dc(0);let s=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,d=i.width/a.x,u=i.height/a.y;if(o){const y=mn(o),p=r&&Yp(r)?mn(r):r;let m=y,g=Xp(m);for(;g&&r&&p!==m;){const w=Zd(g),h=g.getBoundingClientRect(),v=tg(g),b=h.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,S=h.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;s*=w.x,c*=w.y,d*=w.x,u*=w.y,s+=b,c+=S,m=mn(g),g=Xp(m)}}return f8({width:d,height:u,x:s,y:c})}function b_(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function b8(e,t){let n=null,r;const i=g_(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const c=e.getBoundingClientRect(),{left:d,top:u,width:y,height:p}=c;if(l||t(),!y||!p)return;const m=Ms(u),g=Ms(i.clientWidth-(d+y)),w=Ms(i.clientHeight-(u+p)),h=Ms(d),b={rootMargin:-m+"px "+-g+"px "+-w+"px "+-h+"px",threshold:d8(0,u8(1,s))||1};let S=!0;function E(P){const k=P[0].intersectionRatio;if(k!==s){if(!S)return a();k?a(!1,k):r=setTimeout(()=>{a(!1,1e-7)},1e3)}k===1&&!b_(c,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(E,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,b)}n.observe(e)}return a(!0),o}function w8(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=ng(e),d=i||o?[...c?fc(c):[],...t?fc(t):[]]:[];d.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const u=c&&l?b8(c,n):null;let y=-1,p=null;a&&(p=new ResizeObserver(h=>{let[v]=h;v&&v.target===c&&p&&t&&(p.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(t)})),n()}),c&&!s&&p.observe(c),t&&p.observe(t));let m,g=s?P1(e):null;s&&w();function w(){const h=P1(e);g&&!b_(g,h)&&n(),g=h,m=requestAnimationFrame(w)}return n(),()=>{var h;d.forEach(v=>{i&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),u==null||u(),(h=p)==null||h.disconnect(),p=null,s&&cancelAnimationFrame(m)}}var Kp=x.useLayoutEffect,S8=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],pc=function(){};function _8(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function C8(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(_8(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var O1=function(t){return I8(t)?t.filter(Boolean):ai(t)==="object"&&t!==null?[t]:[]},w_=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=or(t,S8);return Q({},n)},je=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Ru(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function E8(e){return Ru(e)?window.innerHeight:e.clientHeight}function S_(e){return Ru(e)?window.pageYOffset:e.scrollTop}function hc(e,t){if(Ru(e)){window.scrollTo(0,t);return}e.scrollTop=t}function k8(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function T8(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function $s(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:pc,i=S_(e),o=t-i,a=10,l=0;function s(){l+=a;var c=T8(l,i,o,n);hc(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function j1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?hc(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&hc(e,Math.max(t.offsetTop-i,0))}function P8(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function M1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function O8(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var __=!1,j8={get passive(){return __=!0}},Is=typeof window<"u"?window:{};Is.addEventListener&&Is.removeEventListener&&(Is.addEventListener("p",pc,j8),Is.removeEventListener("p",pc,!1));var M8=__;function $8(e){return e!=null}function I8(e){return Array.isArray(e)}function Ds(e,t,n){return e?t:n}var D8=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=qn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=qn(l,2),c=s[0],d=s[1];return a[c]=d,a},{})},L8=["children","innerProps"],R8=["children","innerProps"];function A8(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=k8(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var d=s.getBoundingClientRect(),u=d.height,y=n.getBoundingClientRect(),p=y.bottom,m=y.height,g=y.top,w=n.offsetParent.getBoundingClientRect(),h=w.top,v=a?window.innerHeight:E8(s),b=S_(s),S=parseInt(getComputedStyle(n).marginBottom,10),E=parseInt(getComputedStyle(n).marginTop,10),P=h-E,k=v-g,C=P+b,M=u-b-g,$=p-v+b+S,D=b+g-E,R=160;switch(i){case"auto":case"bottom":if(k>=m)return{placement:"bottom",maxHeight:t};if(M>=m&&!a)return o&&$s(s,$,R),{placement:"bottom",maxHeight:t};if(!a&&M>=r||a&&k>=r){o&&$s(s,$,R);var j=a?k-S:M-S;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var F=t,A=a?P:C;return A>=r&&(F=Math.min(A-S-l,t)),{placement:"top",maxHeight:F}}if(i==="bottom")return o&&hc(s,$),{placement:"bottom",maxHeight:t};break;case"top":if(P>=m)return{placement:"top",maxHeight:t};if(C>=m&&!a)return o&&$s(s,D,R),{placement:"top",maxHeight:t};if(!a&&C>=r||a&&P>=r){var L=t;return(!a&&C>=r||a&&P>=r)&&(L=a?P-E:C-E),o&&$s(s,D,R),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function F8(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var C_=function(t){return t==="auto"?"bottom":t},z8=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Q((r={label:"menu"},Qo(r,F8(i),"100%"),Qo(r,"position","absolute"),Qo(r,"width","100%"),Qo(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},E_=x.createContext(null),N8=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,c=x.useContext(E_)||{},d=c.setPortalPlacement,u=x.useRef(null),y=x.useState(i),p=qn(y,2),m=p[0],g=p[1],w=x.useState(null),h=qn(w,2),v=h[0],b=h[1],S=s.spacing.controlHeight;return Kp(function(){var E=u.current;if(E){var P=a==="fixed",k=l&&!P,C=A8({maxHeight:i,menuEl:E,minHeight:r,placement:o,shouldScroll:k,isFixedPosition:P,controlHeight:S});g(C.maxHeight),b(C.placement),d==null||d(C.placement)}},[i,o,a,l,r,d,S]),n({ref:u,placerProps:Q(Q({},t),{},{placement:v||C_(o),maxHeight:m})})},B8=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return K("div",J({},je(t,"menu",{menu:!0}),{ref:r},i),n)},V8=B8,U8=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Q({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},W8=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return K("div",J({},je(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},k_=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Q({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},H8=k_,G8=k_,q8=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=or(t,L8);return K("div",J({},je(Q(Q({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},Y8=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=or(t,R8);return K("div",J({},je(Q(Q({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},X8=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},K8=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=x.useRef(null),c=x.useRef(null),d=x.useState(C_(a)),u=qn(d,2),y=u[0],p=u[1],m=x.useMemo(function(){return{setPortalPlacement:p}},[]),g=x.useState(null),w=qn(g,2),h=w[0],v=w[1],b=x.useCallback(function(){if(i){var k=P8(i),C=l==="fixed"?0:window.pageYOffset,M=k[y]+C;(M!==(h==null?void 0:h.offset)||k.left!==(h==null?void 0:h.rect.left)||k.width!==(h==null?void 0:h.rect.width))&&v({offset:M,rect:k})}},[i,l,y,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Kp(function(){b()},[b]);var S=x.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=w8(i,s.current,b,{elementResize:"ResizeObserver"in window}))},[i,b]);Kp(function(){S()},[S]);var E=x.useCallback(function(k){s.current=k,S()},[S]);if(!n&&l!=="fixed"||!h)return null;var P=K("div",J({ref:E},je(Q(Q({},t),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),o),r);return K(E_.Provider,{value:m},n?Dc.createPortal(P,n):P)},Q8=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},Z8=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return K("div",J({},je(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},J8=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Q({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},eF=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return K("div",J({},je(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},tF=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},nF=function(t){var n=t.children,r=t.innerProps;return K("div",J({},je(t,"indicatorsContainer",{indicators:!0}),r),n)},$1,rF=["size"],iF=["innerProps","isRtl","size"],oF={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},T_=function(t){var n=t.size,r=or(t,rF);return K("svg",J({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:oF},r))},rg=function(t){return K(T_,J({size:20},t),K("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},P_=function(t){return K(T_,J({size:20},t),K("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},O_=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Q({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},aF=O_,sF=function(t){var n=t.children,r=t.innerProps;return K("div",J({},je(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||K(P_,null))},lF=O_,cF=function(t){var n=t.children,r=t.innerProps;return K("div",J({},je(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||K(rg,null))},uF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Q({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},dF=function(t){var n=t.innerProps;return K("span",J({},n,je(t,"indicatorSeparator",{"indicator-separator":!0})))},fF=M5($1||($1=c8([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),pF=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Q({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Jd=function(t){var n=t.delay,r=t.offset;return K("span",{css:Pm({animation:"".concat(fF," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},hF=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=or(t,iF);return K("div",J({},je(Q(Q({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),K(Jd,{delay:0,offset:r}),K(Jd,{delay:160,offset:!0}),K(Jd,{delay:320,offset:!r}))},mF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Q({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},gF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return K("div",J({ref:o},je(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},vF=gF,yF=["data"],xF=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},bF=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,d=t.theme,u=t.selectProps;return K("div",J({},je(t,"group",{group:!0}),s),K(a,J({},l,{selectProps:u,theme:d,getStyles:i,getClassNames:o,cx:r}),c),K("div",null,n))},wF=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Q({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},SF=function(t){var n=w_(t);n.data;var r=or(n,yF);return K("div",J({},je(t,"groupHeading",{"group-heading":!0}),r))},_F=bF,CF=["innerRef","isDisabled","isHidden","inputClassName"],EF=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Q(Q({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},kF),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},j_={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},kF={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Q({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},j_)},TF=function(t){return Q({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},j_)},PF=function(t){var n=t.cx,r=t.value,i=w_(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,c=or(i,CF);return K("div",J({},je(t,"input",{"input-container":!0}),{"data-value":r||""}),K("input",J({className:n({input:!0},s),ref:o,style:TF(l),disabled:a},c)))},OF=PF,jF=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Q({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},MF=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Q({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},$F=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Q({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},M_=function(t){var n=t.children,r=t.innerProps;return K("div",r,n)},IF=M_,DF=M_;function LF(e){var t=e.children,n=e.innerProps;return K("div",J({role:"button"},n),t||K(rg,{size:14}))}var RF=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,c=r.Container,d=r.Label,u=r.Remove;return K(c,{data:i,innerProps:Q(Q({},je(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},K(d,{data:i,innerProps:Q({},je(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),K(u,{data:i,innerProps:Q(Q({},je(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},AF=RF,FF=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Q({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},zF=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return K("div",J({},je(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},NF=zF,BF=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Q({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},VF=function(t){var n=t.children,r=t.innerProps;return K("div",J({},je(t,"placeholder",{placeholder:!0}),r),n)},UF=VF,WF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Q({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},HF=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return K("div",J({},je(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},GF=HF,qF={ClearIndicator:cF,Control:vF,DropdownIndicator:sF,DownChevron:P_,CrossIcon:rg,Group:_F,GroupHeading:SF,IndicatorsContainer:nF,IndicatorSeparator:dF,Input:OF,LoadingIndicator:hF,Menu:V8,MenuList:W8,MenuPortal:K8,LoadingMessage:Y8,NoOptionsMessage:q8,MultiValue:AF,MultiValueContainer:IF,MultiValueLabel:DF,MultiValueRemove:LF,Option:NF,Placeholder:UF,SelectContainer:Z8,SingleValue:GF,ValueContainer:eF},YF=function(t){return Q(Q({},qF),t.components)},I1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function XF(e,t){return!!(e===t||I1(e)&&I1(t))}function KF(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!XF(e[n],t[n]))return!1;return!0}function QF(e,t){t===void 0&&(t=KF);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var ZF={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},JF=function(t){return K("span",J({css:ZF},t))},D1=JF,ez={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,c=t.isSelected,d=t.isAppleDevice,u=function(g,w){return g&&g.length?"".concat(g.indexOf(w)+1," of ").concat(g.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(u(l,r),".");if(n==="menu"&&d){var y=s?" disabled":"",p="".concat(c?" selected":"").concat(y);return"".concat(a).concat(p,", ").concat(u(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},tz=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=t.id,d=t.isAppleDevice,u=s.ariaLiveMessages,y=s.getOptionLabel,p=s.inputValue,m=s.isMulti,g=s.isOptionDisabled,w=s.isSearchable,h=s.menuIsOpen,v=s.options,b=s.screenReaderStatus,S=s.tabSelectsValue,E=s.isLoading,P=s["aria-label"],k=s["aria-live"],C=x.useMemo(function(){return Q(Q({},ez),u||{})},[u]),M=x.useMemo(function(){var A="";if(n&&C.onChange){var L=n.option,O=n.options,T=n.removedValue,I=n.removedValues,z=n.value,B=function(pe){return Array.isArray(pe)?null:pe},N=T||L||B(z),U=N?y(N):"",G=O||I||void 0,W=G?G.map(y):[],Y=Q({isDisabled:N&&g(N,l),label:U,labels:W},n);A=C.onChange(Y)}return A},[n,C,g,l,y]),$=x.useMemo(function(){var A="",L=r||i,O=!!(r&&l&&l.includes(r));if(L&&C.onFocus){var T={focused:L,label:y(L),isDisabled:g(L,l),isSelected:O,options:o,context:L===r?"menu":"value",selectValue:l,isAppleDevice:d};A=C.onFocus(T)}return A},[r,i,y,g,C,o,l,d]),D=x.useMemo(function(){var A="";if(h&&v.length&&!E&&C.onFilter){var L=b({count:o.length});A=C.onFilter({inputValue:p,resultsMessage:L})}return A},[o,p,h,C,v,b,E]),R=(n==null?void 0:n.action)==="initial-input-focus",j=x.useMemo(function(){var A="";if(C.guidance){var L=i?"value":h?"menu":"input";A=C.guidance({"aria-label":P,context:L,isDisabled:r&&g(r,l),isMulti:m,isSearchable:w,tabSelectsValue:S,isInitialFocus:R})}return A},[P,r,i,m,g,w,h,C,l,S,R]),F=K(x.Fragment,null,K("span",{id:"aria-selection"},M),K("span",{id:"aria-focused"},$),K("span",{id:"aria-results"},D),K("span",{id:"aria-guidance"},j));return K(x.Fragment,null,K(D1,{id:c},R&&F),K(D1,{"aria-live":k,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!R&&F))},nz=tz,Qp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],rz=new RegExp("["+Qp.map(function(e){return e.letters}).join("")+"]","g"),$_={};for(var ef=0;ef<Qp.length;ef++)for(var tf=Qp[ef],nf=0;nf<tf.letters.length;nf++)$_[tf.letters[nf]]=tf.base;var I_=function(t){return t.replace(rz,function(n){return $_[n]})},iz=QF(I_),L1=function(t){return t.replace(/^\s+|\s+$/g,"")},oz=function(t){return"".concat(t.label," ").concat(t.value)},az=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Q({ignoreCase:!0,ignoreAccents:!0,stringify:oz,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,c=i.matchFrom,d=s?L1(r):r,u=s?L1(l(n)):l(n);return o&&(d=d.toLowerCase(),u=u.toLowerCase()),a&&(d=iz(d),u=I_(u)),c==="start"?u.substr(0,d.length)===d:u.indexOf(d)>-1}},sz=["innerRef"];function lz(e){var t=e.innerRef,n=or(e,sz),r=D8(n,"onExited","in","enter","exit","appear");return K("input",J({ref:t},r,{css:Pm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var cz=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function uz(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=x.useRef(!1),l=x.useRef(!1),s=x.useRef(0),c=x.useRef(null),d=x.useCallback(function(w,h){if(c.current!==null){var v=c.current,b=v.scrollTop,S=v.scrollHeight,E=v.clientHeight,P=c.current,k=h>0,C=S-E-b,M=!1;C>h&&a.current&&(r&&r(w),a.current=!1),k&&l.current&&(o&&o(w),l.current=!1),k&&h>C?(n&&!a.current&&n(w),P.scrollTop=S,M=!0,a.current=!0):!k&&-h>b&&(i&&!l.current&&i(w),P.scrollTop=0,M=!0,l.current=!0),M&&cz(w)}},[n,r,i,o]),u=x.useCallback(function(w){d(w,w.deltaY)},[d]),y=x.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),p=x.useCallback(function(w){var h=s.current-w.changedTouches[0].clientY;d(w,h)},[d]),m=x.useCallback(function(w){if(w){var h=M8?{passive:!1}:!1;w.addEventListener("wheel",u,h),w.addEventListener("touchstart",y,h),w.addEventListener("touchmove",p,h)}},[p,y,u]),g=x.useCallback(function(w){w&&(w.removeEventListener("wheel",u,!1),w.removeEventListener("touchstart",y,!1),w.removeEventListener("touchmove",p,!1))},[p,y,u]);return x.useEffect(function(){if(t){var w=c.current;return m(w),function(){g(w)}}},[t,m,g]),function(w){c.current=w}}var R1=["boxSizing","height","overflow","paddingRight","position"],A1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function F1(e){e.cancelable&&e.preventDefault()}function z1(e){e.stopPropagation()}function N1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function B1(){return"ontouchstart"in window||navigator.maxTouchPoints}var V1=!!(typeof window<"u"&&window.document&&window.document.createElement),Bo=0,wi={capture:!1,passive:!1};function dz(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=x.useRef({}),o=x.useRef(null),a=x.useCallback(function(s){if(V1){var c=document.body,d=c&&c.style;if(r&&R1.forEach(function(m){var g=d&&d[m];i.current[m]=g}),r&&Bo<1){var u=parseInt(i.current.paddingRight,10)||0,y=document.body?document.body.clientWidth:0,p=window.innerWidth-y+u||0;Object.keys(A1).forEach(function(m){var g=A1[m];d&&(d[m]=g)}),d&&(d.paddingRight="".concat(p,"px"))}c&&B1()&&(c.addEventListener("touchmove",F1,wi),s&&(s.addEventListener("touchstart",N1,wi),s.addEventListener("touchmove",z1,wi))),Bo+=1}},[r]),l=x.useCallback(function(s){if(V1){var c=document.body,d=c&&c.style;Bo=Math.max(Bo-1,0),r&&Bo<1&&R1.forEach(function(u){var y=i.current[u];d&&(d[u]=y)}),c&&B1()&&(c.removeEventListener("touchmove",F1,wi),s&&(s.removeEventListener("touchstart",N1,wi),s.removeEventListener("touchmove",z1,wi)))}},[r]);return x.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var fz=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},pz={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function hz(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=uz({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=dz({isEnabled:n}),u=function(p){c(p),d(p)};return K(x.Fragment,null,n&&K("div",{onClick:fz,css:pz}),t(u))}var mz={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},gz=function(t){var n=t.name,r=t.onFocus;return K("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:mz,value:"",onChange:function(){}})},vz=gz;function ig(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function yz(){return ig(/^iPhone/i)}function D_(){return ig(/^Mac/i)}function xz(){return ig(/^iPad/i)||D_()&&navigator.maxTouchPoints>1}function bz(){return yz()||xz()}function wz(){return D_()||bz()}var Sz=function(t){return t.label},_z=function(t){return t.label},Cz=function(t){return t.value},Ez=function(t){return!!t.isDisabled},kz={clearIndicator:lF,container:Q8,control:mF,dropdownIndicator:aF,group:xF,groupHeading:wF,indicatorsContainer:tF,indicatorSeparator:uF,input:EF,loadingIndicator:pF,loadingMessage:G8,menu:z8,menuList:U8,menuPortal:X8,multiValue:jF,multiValueLabel:MF,multiValueRemove:$F,noOptionsMessage:H8,option:FF,placeholder:BF,singleValue:WF,valueContainer:J8},Tz={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Pz=4,L_=4,Oz=38,jz=L_*2,Mz={baseUnit:L_,controlHeight:Oz,menuGutter:jz},rf={borderRadius:Pz,colors:Tz,spacing:Mz},$z={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:M1(),captureMenuScroll:!M1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:az(),formatGroupLabel:Sz,getOptionLabel:_z,getOptionValue:Cz,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Ez,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!O8(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function U1(e,t,n,r){var i=F_(e,t,n),o=z_(e,t,n),a=A_(e,t),l=mc(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function dl(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return U1(e,a,t,l)}).filter(function(a){return H1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=U1(e,n,t,r);return H1(e,o)?o:void 0}).filter($8)}function R_(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Jm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function W1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Jm(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function Iz(e,t){return R_(dl(e,t))}function H1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!B_(e)||!o)&&N_(e,{label:a,value:l,data:i},r)}function Dz(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function Lz(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var of=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},A_=function(t,n){return t.getOptionLabel(n)},mc=function(t,n){return t.getOptionValue(n)};function F_(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function z_(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=mc(e,t);return n.some(function(i){return mc(e,i)===r})}function N_(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var B_=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},Rz=1,V_=function(e){t8(n,e);var t=o8(n);function n(r){var i;if(JA(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var d=i.props,u=d.onChange,y=d.name;c.name=y,i.ariaOnChange(s,c),u(s,c)},i.setValue=function(s,c,d){var u=i.props,y=u.closeMenuOnSelect,p=u.isMulti,m=u.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:m}),y&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:d})},i.selectOption=function(s){var c=i.props,d=c.blurInputOnSelect,u=c.isMulti,y=c.name,p=i.state.selectValue,m=u&&i.isOptionSelected(s,p),g=i.isOptionDisabled(s,p);if(m){var w=i.getOptionValue(s);i.setValue(p.filter(function(h){return i.getOptionValue(h)!==w}),"deselect-option",s)}else if(!g)u?i.setValue([].concat(Jm(p),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:y});return}d&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,d=i.state.selectValue,u=i.getOptionValue(s),y=d.filter(function(m){return i.getOptionValue(m)!==u}),p=Ds(c,y,y[0]||null);i.onChange(p,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Ds(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,d=c[c.length-1],u=c.slice(0,c.length-1),y=Ds(s,u,u[0]||null);d&&i.onChange(y,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(s){return of(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return W1(dl(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return C8.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return A_(i.props,s)},i.getOptionValue=function(s){return mc(i.props,s)},i.getStyles=function(s,c){var d=i.props.unstyled,u=kz[s](c,d);u.boxSizing="border-box";var y=i.props.styles[s];return y?y(u,c):u},i.getClassNames=function(s,c){var d,u;return(d=(u=i.props.classNames)[s])===null||d===void 0?void 0:d.call(u,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return YF(i.props)},i.buildCategorizedOptions=function(){return dl(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return R_(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:Q({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,d=c.isMulti,u=c.menuIsOpen;i.focusInput(),u?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Ru(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,d=c&&c.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,d=c&&c.item(0);if(d){var u=Math.abs(d.clientX-i.initialTouchX),y=Math.abs(d.clientY-i.initialTouchY),p=5;i.userIsDragging=u>p||y>p}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,d=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),d=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:d>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return B_(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,d=c.isMulti,u=c.backspaceRemovesValue,y=c.escapeClearsValue,p=c.inputValue,m=c.isClearable,g=c.isDisabled,w=c.menuIsOpen,h=c.onKeyDown,v=c.tabSelectsValue,b=c.openMenuOnFocus,S=i.state,E=S.focusedOption,P=S.focusedValue,k=S.selectValue;if(!g&&!(typeof h=="function"&&(h(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||p)return;i.focusValue("previous");break;case"ArrowRight":if(!d||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(P)i.removeValue(P);else{if(!u)return;d?i.popValue():m&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!v||!E||b&&i.isOptionSelected(E,k))return;i.selectOption(E);break;case"Enter":if(s.keyCode===229)break;if(w){if(!E||i.isComposing)return;i.selectOption(E);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):m&&y&&i.clearValue();break;case" ":if(p)return;if(!w){i.openMenu("first");break}if(!E)return;i.selectOption(E);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++Rz),i.state.selectValue=O1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=of(o,a[l])}return i}return e8(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&j1(this.menuListRef,this.focusedOptionRef),wz()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(j1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),d=i==="first"?0:c.length-1;if(!this.props.isMulti){var u=c.indexOf(l[0]);u>-1&&(d=u)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[d],focusedOptionId:this.getFocusedOptionId(c[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,d=-1;if(a.length){switch(i){case"previous":s===0?d=0:s===-1?d=c:d=s-1;break;case"next":s>-1&&s<c&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,c=l.indexOf(a);a||(c=-1),i==="up"?s=c>0?c-1:l.length-1:i==="down"?s=(c+1)%l.length:i==="pageup"?(s=c-o,s<0&&(s=0)):i==="pagedown"?(s=c+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(rf):Q(Q({},rf),this.props.theme):rf}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,c=this.selectOption,d=this.setValue,u=this.props,y=u.isMulti,p=u.isRtl,m=u.options,g=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:g,isMulti:y,isRtl:p,options:m,selectOption:c,selectProps:u,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return F_(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return z_(this.props,i,o)}},{key:"filterOption",value:function(i,o){return N_(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,c=i.tabIndex,d=i.form,u=i.menuIsOpen,y=i.required,p=this.getComponents(),m=p.Input,g=this.state,w=g.inputIsHidden,h=g.ariaSelection,v=this.commonProps,b=l||this.getElementId("input"),S=Q(Q(Q({"aria-autocomplete":"list","aria-expanded":u,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":y,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},u&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?x.createElement(m,J({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:b,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:d,type:"text",value:s},S)):x.createElement(lz,J({id:b,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:pc,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:d,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,c=o.MultiValueRemove,d=o.SingleValue,u=o.Placeholder,y=this.commonProps,p=this.props,m=p.controlShouldRenderValue,g=p.isDisabled,w=p.isMulti,h=p.inputValue,v=p.placeholder,b=this.state,S=b.selectValue,E=b.focusedValue,P=b.isFocused;if(!this.hasValue()||!m)return h?null:x.createElement(u,J({},y,{key:"placeholder",isDisabled:g,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),v);if(w)return S.map(function(C,M){var $=C===E,D="".concat(i.getOptionLabel(C),"-").concat(i.getOptionValue(C));return x.createElement(a,J({},y,{components:{Container:l,Label:s,Remove:c},isFocused:$,isDisabled:g,key:D,index:M,removeProps:{onClick:function(){return i.removeValue(C)},onTouchEnd:function(){return i.removeValue(C)},onMouseDown:function(j){j.preventDefault()}},data:C}),i.formatOptionLabel(C,"value"))});if(h)return null;var k=S[0];return x.createElement(d,J({},y,{data:k,isDisabled:g}),this.formatOptionLabel(k,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||c)return null;var u={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,J({},a,{innerProps:u,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!o||!c)return null;var u={"aria-hidden":"true"};return x.createElement(o,J({},a,{innerProps:u,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return x.createElement(a,J({},l,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,J({},a,{innerProps:c,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,c=o.MenuList,d=o.MenuPortal,u=o.LoadingMessage,y=o.NoOptionsMessage,p=o.Option,m=this.commonProps,g=this.state.focusedOption,w=this.props,h=w.captureMenuScroll,v=w.inputValue,b=w.isLoading,S=w.loadingMessage,E=w.minMenuHeight,P=w.maxMenuHeight,k=w.menuIsOpen,C=w.menuPlacement,M=w.menuPosition,$=w.menuPortalTarget,D=w.menuShouldBlockScroll,R=w.menuShouldScrollIntoView,j=w.noOptionsMessage,F=w.onMenuScrollToTop,A=w.onMenuScrollToBottom;if(!k)return null;var L=function(U,G){var W=U.type,Y=U.data,ee=U.isDisabled,pe=U.isSelected,we=U.label,ie=U.value,Ie=g===Y,We=ee?void 0:function(){return i.onOptionHover(Y)},He=ee?void 0:function(){return i.selectOption(Y)},fi="".concat(i.getElementId("option"),"-").concat(G),wt={id:fi,onClick:He,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:pe};return x.createElement(p,J({},m,{innerProps:wt,data:Y,isDisabled:ee,isSelected:pe,key:fi,label:we,type:W,value:ie,isFocused:Ie,innerRef:Ie?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},O;if(this.hasOptions())O=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var U=N.data,G=N.options,W=N.index,Y="".concat(i.getElementId("group"),"-").concat(W),ee="".concat(Y,"-heading");return x.createElement(a,J({},m,{key:Y,data:U,options:G,Heading:l,headingProps:{id:ee,data:N.data},label:i.formatGroupLabel(N.data)}),N.options.map(function(pe){return L(pe,"".concat(W,"-").concat(pe.index))}))}else if(N.type==="option")return L(N,"".concat(N.index))});else if(b){var T=S({inputValue:v});if(T===null)return null;O=x.createElement(u,m,T)}else{var I=j({inputValue:v});if(I===null)return null;O=x.createElement(y,m,I)}var z={minMenuHeight:E,maxMenuHeight:P,menuPlacement:C,menuPosition:M,menuShouldScrollIntoView:R},B=x.createElement(N8,J({},m,z),function(N){var U=N.ref,G=N.placerProps,W=G.placement,Y=G.maxHeight;return x.createElement(s,J({},m,z,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:b,placement:W}),x.createElement(hz,{captureEnabled:h,onTopArrive:F,onBottomArrive:A,lockEnabled:D},function(ee){return x.createElement(c,J({},m,{innerRef:function(we){i.getMenuListRef(we),ee(we)},innerProps:{role:"listbox","aria-multiselectable":m.isMulti,id:i.getElementId("listbox")},isLoading:b,maxHeight:Y,focusedOption:g}),O)}))});return $||M==="fixed"?x.createElement(d,J({},m,{appendTo:$,controlElement:this.controlRef,menuPlacement:C,menuPosition:M}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,c=o.name,d=o.required,u=this.state.selectValue;if(d&&!this.hasValue()&&!l)return x.createElement(vz,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(s)if(a){var y=u.map(function(g){return i.getOptionValue(g)}).join(a);return x.createElement("input",{name:c,type:"hidden",value:y})}else{var p=u.length>0?u.map(function(g,w){return x.createElement("input",{key:"i-".concat(w),name:c,type:"hidden",value:i.getOptionValue(g)})}):x.createElement("input",{name:c,type:"hidden",value:""});return x.createElement("div",null,p)}else{var m=u[0]?this.getOptionValue(u[0]):"";return x.createElement("input",{name:c,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,c=o.isFocused,d=o.selectValue,u=this.getFocusableOptions();return x.createElement(nz,J({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:d,focusableOptions:u,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,c=this.props,d=c.className,u=c.id,y=c.isDisabled,p=c.menuIsOpen,m=this.state.isFocused,g=this.commonProps=this.getCommonProps();return x.createElement(l,J({},g,{className:d,innerProps:{id:u,onKeyDown:this.onKeyDown},isDisabled:y,isFocused:m}),this.renderLiveRegion(),x.createElement(o,J({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:y,isFocused:m,menuIsOpen:p}),x.createElement(s,J({},g,{isDisabled:y}),this.renderPlaceholderOrValue(),this.renderInput()),x.createElement(a,J({},g,{isDisabled:y}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,d=o.isFocused,u=o.prevWasFocused,y=o.instancePrefix,p=i.options,m=i.value,g=i.menuIsOpen,w=i.inputValue,h=i.isMulti,v=O1(m),b={};if(a&&(m!==a.value||p!==a.options||g!==a.menuIsOpen||w!==a.inputValue)){var S=g?Iz(i,v):[],E=g?W1(dl(i,v),"".concat(y,"-option")):[],P=l?Dz(o,v):null,k=Lz(o,S),C=of(E,k);b={selectValue:v,focusedOption:k,focusedOptionId:C,focusableOptionsWithIds:E,focusedValue:P,clearFocusValueOnUpdate:!1}}var M=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},$=c,D=d&&u;return d&&!D&&($={value:Ds(h,v,v[0]||null),options:v,action:"initial-input-focus"},D=!u),(c==null?void 0:c.action)==="initial-input-focus"&&($=null),Q(Q(Q({},b),M),{},{prevProps:i,ariaSelection:$,prevWasFocused:D})}}]),n}(x.Component);V_.defaultProps=$z;var Az=x.forwardRef(function(e,t){var n=ZA(e);return x.createElement(V_,J({ref:t},n))}),Au=Az;const Fz=_.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,zz=_.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Nz=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>f.jsxs(Fz,{children:[f.jsx(zz,{children:"Місто"}),f.jsx(Au,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),Bz=_.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Vz=_.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Uz=({options:e=[],value:t,onChange:n,selectedCity:r})=>f.jsxs(Bz,{children:[f.jsx(Vz,{children:"Спосіб доставки"}),f.jsx(Au,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),G1=_.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,q1=_.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Wz=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?f.jsxs(G1,{children:[f.jsx(q1,{children:"Відділення Нової пошти"}),f.jsx(Au,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?f.jsxs(G1,{children:[f.jsx(q1,{children:"Адреса доставки (Укрпошта)"}),f.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,Hz=_.div`
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
`;const Gz=_.button`
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
`,qz=_.ul`
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
`,Yz=_.li`
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
`,Xz=_.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,Kz=_.div`
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
`,Qz=_.div`
  text-align: center;
  width: 100px;
 
`,Zz=_.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Jz=_.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,eN=_.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,tN=_.span`
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
`,nN=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>f.jsxs(Hz,{children:[f.jsx("h3",{children:"Ваше замовлення"}),f.jsx(qz,{children:e.map((o,a)=>{var u,y;const l=o.new_price&&o.new_price<o.price,s=l?o.new_price:o.price,c=l?Math.round((o.price-o.new_price)/o.price*100):0,d=s*(o.quantity||1);return f.jsxs(Yz,{children:[f.jsx(Xz,{src:((y=(u=o.images)==null?void 0:u[0])==null?void 0:y.url)||ii,alt:o.name}),f.jsxs(Kz,{children:[f.jsx("p",{className:"item-name",children:o.name}),f.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),f.jsx(Qz,{children:f.jsxs(Zz,{children:[f.jsxs(Jz,{$discount:l,children:[d.toLocaleString()," грн"]}),l&&f.jsxs(f.Fragment,{children:[f.jsxs(eN,{children:[(o.price*(o.quantity||1)).toLocaleString()," грн"]}),f.jsxs(tN,{children:["-",c,"%"]})]})]})})]},`${o.id}-${a}`)})}),f.jsxs("div",{className:"summary-row",children:[f.jsxs("span",{children:["Товари (",n,")"]}),f.jsxs("span",{children:[t," грн"]})]}),f.jsxs("div",{className:"summary-row",children:[f.jsx("span",{children:"Доставка"}),f.jsx("span",{children:"За тарифами перевізника"})]}),f.jsx("hr",{}),f.jsxs("div",{className:"total",children:[f.jsx("span",{children:"Всього до сплати:"}),f.jsxs("span",{children:[t," грн"]})]}),f.jsx(Gz,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&f.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var U_={exports:{}};function rN(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var af=rN(x),iN=Dc;function oN(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Zp(){return(Zp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function aN(e,t){e.prototype=Object.create(t.prototype),oN(e.prototype.constructor=e,t)}function sN(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function Si(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var lN=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return c[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},Y1=lN;function X1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function cN(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var uN={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dN="_";function K1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=dN),n==null&&(n=uN),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Nt(e,t){return e.permanents.indexOf(t)!==-1}function Fu(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Nt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function Q1(e,t){return t.split("").every(function(n,r){return Nt(e,r)||!Fu(e,r,n)})}function Zo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Nt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Nt(e,o)&&Fu(e,o,a)){i=o+1;break}}return i}function W_(e,t){return Zo(e,t)===e.mask.length}function Vn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Jp(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Nt(e,t.length);)t+=r[t.length];return t}if(t)return Jp(e,Vn(e,""),t,0);for(var o=0;o<r.length;o++)Nt(e,o)?t+=r[o]:t+=n;return t}function fN(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(d,u){return u<n||i<=u?d:Nt(e,u)?a[u]:o}).join("");for(var c=i;c<s.length;c++)Nt(e,c)&&(s[c]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Vn(e,t)}function Jp(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=W_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(c){for(;p=c,Nt(e,y=r)&&p!==i[y];){if(r>=t.length&&(t+=i[r]),d=c,u=r,o&&Nt(e,u)&&d===o)return!0;if(++r>=i.length)return!1}var d,u,y,p;return!Fu(e,r,c)&&c!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),Vn(e,t)):o||(t+=c),++r<i.length)}),t}function pN(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,Nt(e,c=r)&&d!==i[c];)if(++r>=i.length)return!1;var c,d;return(Fu(e,r,s)||s===o)&&r++,r<i.length}),r-l}function hN(e,t){for(var n=t;0<=n;--n)if(!Nt(e,n))return n;return null}function da(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Nt(e,r))return r;return null}function sf(e){return e||e===0?e+"":""}function mN(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,c="",d=0,u=0,y=Math.min(i.start,n.start);return n.end>i.start?u=(d=pN(e,r,c=s.slice(i.start,n.end),y))?i.length:0:s.length<r.length&&(u=r.length-s.length),s=r,u&&(u===1&&!i.length&&(y=i.start===n.start?da(e,n.start):hN(e,n.start)),s=fN(e,s,y,u)),s=Jp(e,s,c,y),(y+=d)>=o.length?y=o.length:y<a.length&&!d?y=a.length:y>=a.length&&y<l&&d&&(y=da(e,y)),c||(c=null),{value:s=Vn(e,s),enteredString:c,selection:{start:y,end:y}}}function gN(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function St(e){return typeof e=="function"}function vN(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function H_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Z1(e){return(H_()?vN():function(){return setTimeout(e,1e3/60)})(e)}function lf(e){(H_()||clearTimeout)(e)}var yN=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=Z1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(lf(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var m=iN.findDOMNode(Si(Si(i))),g=typeof window<"u"&&m instanceof window.Element;if(m&&!g)return null;if(m.nodeName!=="INPUT"&&(m=m.querySelector("input")),!m)throw new Error("react-input-mask: inputComponent doesn't contain input node");return m},i.getInputValue=function(){var m=i.getInputDOMNode();return m?m.value:null},i.setInputValue=function(m){var g=i.getInputDOMNode();g&&(i.value=m,g.value=m)},i.setCursorToEnd=function(){var m=Zo(i.maskOptions,i.value),g=da(i.maskOptions,m);g!==null&&i.setCursorPosition(g)},i.setSelection=function(m,g,w){w===void 0&&(w={});var h=i.getInputDOMNode(),v=i.isFocused();h&&v&&(w.deferred||X1(h,m,g),i.selectionDeferId!==null&&lf(i.selectionDeferId),i.selectionDeferId=Z1(function(){i.selectionDeferId=null,X1(h,m,g)}),i.previousSelection={start:m,end:g,length:Math.abs(g-m)})},i.getSelection=function(){return cN(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(m){i.setSelection(m,m)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var m=i.maskOptions,g=m.mask,w=m.maskChar,h=m.permanents,v=m.formatChars;return{mask:g,maskChar:w,permanents:h,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:v}},i.isInputAutofilled=function(m,g,w,h){var v=i.getInputDOMNode();try{if(v.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||h.end<w.length&&g.end===m.length},i.onChange=function(m){var g=Si(Si(i)).beforePasteState,w=Si(Si(i)).previousSelection,h=i.props.beforeMaskedValueChange,v=i.getInputValue(),b=i.value,S=i.getSelection();i.isInputAutofilled(v,S,b,w)&&(b=Vn(i.maskOptions,""),w={start:0,end:0,length:0}),g&&(w=g.selection,b=g.value,S={start:w.start+v.length,end:w.start+v.length,length:0},v=b.slice(0,w.start)+v+b.slice(w.end),i.beforePasteState=null);var E=mN(i.maskOptions,v,S,b,w),P=E.enteredString,k=E.selection,C=E.value;if(St(h)){var M=h({value:C,selection:k},{value:b,selection:w},P,i.getBeforeMaskedValueChangeConfig());C=M.value,k=M.selection}i.setInputValue(C),St(i.props.onChange)&&i.props.onChange(m),i.isWindowsPhoneBrowser?i.setSelection(k.start,k.end,{deferred:!0}):i.setSelection(k.start,k.end)},i.onFocus=function(m){var g=i.props.beforeMaskedValueChange,w=i.maskOptions,h=w.mask,v=w.prefix;if(i.focused=!0,i.mounted=!0,h){if(i.value)Zo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var b=Vn(i.maskOptions,v),S=Vn(i.maskOptions,b),E=Zo(i.maskOptions,S),P=da(i.maskOptions,E),k={start:P,end:P};if(St(g)){var C=g({value:S,selection:k},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=C.value,k=C.selection}var M=S!==i.getInputValue();M&&i.setInputValue(S),M&&St(i.props.onChange)&&i.props.onChange(m),i.setSelection(k.start,k.end)}i.runSaveSelectionLoop()}St(i.props.onFocus)&&i.props.onFocus(m)},i.onBlur=function(m){var g=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&Q1(i.maskOptions,i.value)){var h="";St(g)&&(h=g({value:h,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var v=h!==i.getInputValue();v&&i.setInputValue(h),v&&St(i.props.onChange)&&i.props.onChange(m)}St(i.props.onBlur)&&i.props.onBlur(m)},i.onMouseDown=function(m){if(!i.focused&&document.addEventListener){i.mouseDownX=m.clientX,i.mouseDownY=m.clientY,i.mouseDownTime=new Date().getTime();var g=function w(h){if(document.removeEventListener("mouseup",w),i.focused){var v=Math.abs(h.clientX-i.mouseDownX),b=Math.abs(h.clientY-i.mouseDownY),S=Math.max(v,b),E=new Date().getTime()-i.mouseDownTime;(S<=10&&E<=200||S<=5&&E<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",g)}St(i.props.onMouseDown)&&i.props.onMouseDown(m)},i.onPaste=function(m){St(i.props.onPaste)&&i.props.onPaste(m),m.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(m){i.props.children==null&&St(i.props.inputRef)&&i.props.inputRef(m)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,c=r.beforeMaskedValueChange,d=r.defaultValue,u=r.value;i.maskOptions=K1(o,a,l),d==null&&(d=""),u==null&&(u=d);var y=sf(u);if(i.maskOptions.mask&&(s||y)&&(y=Vn(i.maskOptions,y),St(c))){var p=r.value;r.value==null&&(p=d),y=c({value:y,selection:null},{value:p=sf(p),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=y,i}aN(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=gN(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,c=i.formatChars,d=this.maskOptions,u=a||this.isFocused(),y=this.props.value!=null,p=y?sf(this.props.value):this.value,m=r?r.start:null;if(this.maskOptions=K1(l,s,c),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var g=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||y||(p=this.getInputValue()),(g||this.maskOptions.mask&&(p||u))&&(p=Vn(this.maskOptions,p)),g){var w=Zo(this.maskOptions,p);(m===null||w<m)&&(m=W_(this.maskOptions,p)?w:da(this.maskOptions,w))}!this.maskOptions.mask||!Q1(this.maskOptions,p)||u||y&&this.props.value||(p="");var h={start:m,end:m};if(St(o)){var v=o({value:p,selection:h},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());p=v.value,h=v.selection}this.value=p;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):g&&this.forceUpdate();var S=!1;h.start!=null&&h.end!=null&&(S=!r||r.start!==h.start||r.end!==h.end),(S||b)&&this.setSelection(h.start,h.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&lf(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=sN(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){St(o)||Y1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Zp({},a);l.forEach(function(d){return delete s[d]}),r=o(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&Y1(!1)}else r=af.createElement("input",Zp({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),r=af.cloneElement(r,c)},t}(af.Component),xN=yN;U_.exports=xN;var bN=U_.exports;const wN=Na(bN);_.div`
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
`;const cf=_.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,uf=_.label`
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
`;const SN=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:"Контактні дані"}),f.jsxs(cf,{children:[f.jsx(uf,{children:"Прізвище та ім’я"}),f.jsx(df,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&f.jsx(ff,{children:n.fullName})]}),f.jsxs(cf,{children:[f.jsx(uf,{children:"Номер телефону"}),f.jsx(wN,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>f.jsx(df,{...i,type:"tel"})}),n.phone&&f.jsx(ff,{children:n.phone})]}),f.jsxs(cf,{children:[f.jsx(uf,{children:"E-mail"}),f.jsx(df,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&f.jsx(ff,{children:n.email})]})]})},_N=_.div`
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
`;const CN=_.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,EN=_.div`
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
`;const kN=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),f.jsx(Au,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&f.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},pf={}.VITE_NP_API_KEY,J1="https://api.novaposhta.ua/v2.0/json/",TN=()=>{const e=Ue(L=>L.cart.items),t=Bt(),n=Jt();console.log("апі",pf);const[r,i]=x.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[o,a]=x.useState(""),[l,s]=x.useState(null),[c,d]=x.useState(null),[u,y]=x.useState(null),[p,m]=x.useState(null),[g,w]=x.useState([]),[h,v]=x.useState([]),[b,S]=x.useState(null),E=e.reduce((L,O)=>L+(O.new_price??O.price)*O.quantity,0),P=e.reduce((L,O)=>L+O.quantity,0),C=(()=>{const L=new Date().getFullYear().toString().slice(-2),O=Date.now().toString().slice(-4),T=Math.floor(100+Math.random()*900);return`${L}${O}${T}`})();console.log(C),x.useEffect(()=>{if(o.length<2)return;const L=setTimeout(async()=>{const T=await(await fetch(J1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:pf,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:o}})})).json();w(T.data.map(I=>({value:I.Ref,label:I.Description})))},500);return()=>clearTimeout(L)},[o]),x.useEffect(()=>{if(!l||c!=="nova")return;(async()=>{const T=await(await fetch(J1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:pf,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:l.value}})})).json();v(T.data.map(I=>({value:I.Ref,label:I.Description})))})()},[l,c]);const M=L=>{s(L),i(O=>({...O,city:(L==null?void 0:L.label)||"",postOffice:""})),d(null),y(null),m(null)},$=()=>{const L={};return r.fullName.trim().split(" ").length<2&&(L.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(L.email="Некоректний email"),r.phone.replace(/\D/g,"").length<12&&(L.phone="Номер неповний"),l||(L.city=!0),c==="nova"&&!u&&(L.postOffice=!0),c==="ukr"&&!p&&(L.postOffice=!0),c||(L.delivery=!0),b||(L.payment=!0),L},D=x.useMemo($,[r,c,u,p,l,b]),R=Object.keys(D).length===0&&e.length>0,j=async L=>{if(L.preventDefault(),!b){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:r.fullName,phone:r.phone,email:r.email,city:r.city,products:e==null?void 0:e.map(T=>({id:T.id,name:T.name,quantity:T.quantity,price:T.new_price??T.price})),status_order:"pending",order_number:C,payment_method:b==="liqpay"?"Онлайн (LiqPay)":b==="cod"?"Післяплата":b==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:c==="nova"?"Нова Пошта":c==="ukr"?"УкрПошта":"Самовивіз",delivery_address:c==="nova"?u==null?void 0:u.label:c==="ukr"?p:"Самовивіз"}})}),b==="liqpay"){const T=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:E,order_number:C})}),{data:I,signature:z}=await T.json(),B=document.createElement("form");B.method="POST",B.action="https://www.liqpay.ua/api/3/checkout",B.innerHTML=`
        <input type="hidden" name="data" value="${I}" />
        <input type="hidden" name="signature" value="${z}" />
      `,document.body.appendChild(B),B.requestSubmit();return}const O={...r,name:r.fullName,city:l.label,deliveryMethod:c==="nova"?"Нова Пошта":c==="ukr"?"УкрПошта":"Самовивіз",address:c==="nova"?u==null?void 0:u.label:c==="ukr"?p:"Самовивіз",products:e==null?void 0:e.map(T=>({id:T.id,name:T.name,quantity:T.quantity,price:T.new_price??T.price})),total:E,order_number:C,delivery_address:c==="nova"?u==null?void 0:u.label:c==="ukr"?p:"Самовивіз",payment_method:b==="liqpay"?"Онлайн (LiqPay)":b==="cod"?"Післяплата":b==="bank_transfer"?"Оплата за реквізитами":""};n(vm()),t("/order-confirmation",{state:{order:O}})}catch(O){console.error(O),alert("Помилка оформлення")}},F=x.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),A=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return f.jsx(_N,{children:f.jsxs(CN,{children:[f.jsxs(EN,{children:[f.jsx(SN,{formData:r,setFormData:i,errors:D}),f.jsx(Nz,{cityOptions:g,selectedCity:l,onChange:M,onInputChange:a}),f.jsx(Uz,{options:F,value:c,onChange:d,selectedCity:l}),f.jsx(Wz,{deliveryMethod:c,officeOptions:h,selectedOffice:u,selectedUkrOffice:p,setSelectedOffice:y,setSelectedUkrOffice:m}),f.jsx(kN,{options:A,value:b,onChange:S,error:D.payment})]}),f.jsx(nN,{cartItems:e,totalAmount:E,totalQuantity:P,isFormValid:R,handleSubmit:j})]})})},PN=_.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,ON=_.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,Rr=_.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,jN=_.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,MN=_.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,$N=_.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,IN=_.li`
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
`;const DN=_.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,ey=_.button`
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
`,LN=()=>{var y,p;const e=Bt(),t=er(),[n]=DE(),r=Jt(),i=(y=t.state)==null?void 0:y.order,o=n.get("orderId"),[a,l]=x.useState(i||null),[s,c]=x.useState(!i);x.useEffect(()=>{r(vm())},[r]),x.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(m=>m.json()).then(m=>{var g;((g=m.data)==null?void 0:g.length)>0&&l(m.data[0]),c(!1)}).catch(()=>c(!1)):c(!1))},[o,i]),console.log(a);const u=((a==null?void 0:a.products)??[]).reduce((m,g)=>m+Number(g.new_price??g.price)*(g.quantity||1),0);return s?f.jsx("div",{children:"Завантаження..."}):a?f.jsxs(PN,{children:[f.jsx(ON,{children:"Дякуємо за ваше замовлення!"}),f.jsxs(Rr,{children:["Ваше замовлення ",f.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),f.jsx(Rr,{children:"Ми зв’яжемось з Вами в найближчий час"}),f.jsxs(jN,{children:[f.jsx(MN,{children:"Деталі замовлення:"}),f.jsx($N,{children:(p=a.products)==null?void 0:p.map(m=>f.jsxs(IN,{children:[f.jsxs("span",{className:"item-info",children:[m.name," (x",m.quantity,")"]}),f.jsxs("span",{className:"item-price",children:[(m.new_price??m.price)*(m.quantity||1)," грн"]})]},m.id))}),f.jsxs(Rr,{children:[f.jsx("strong",{children:"На суму:"})," ",u," грн."]}),f.jsxs(Rr,{children:[f.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),f.jsxs(Rr,{children:[f.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),f.jsxs(Rr,{children:[f.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),f.jsxs(Rr,{children:[f.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),f.jsxs(DN,{children:[f.jsx(ey,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),f.jsx(ey,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):f.jsxs("div",{children:["Замовлення не знайдено",f.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},RN=_.section`
  background-color: var(--second-background);
`,AN=_.div`
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
`,FN=_.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,zN=_.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,NN=_.p`

  font-size: 16px;
  color: #666;
`,BN=_.section`
  margin-bottom: 50px;
`,VN=_.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,UN=_.section`
  margin-bottom: 60px;
`,WN=_.h2`
  margin-bottom: 30px;
`,HN=_.div`
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
`,GN=()=>f.jsxs(RN,{children:[f.jsxs(AN,{children:[f.jsxs(FN,{children:[f.jsx(zN,{children:"Про Дідів Хлів"}),f.jsx(NN,{children:"Даємо друге життя якісним велозапчастинам"})]}),f.jsxs(BN,{children:[f.jsx(VN,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),f.jsx(M2,{})]}),f.jsxs(UN,{children:[f.jsx(WN,{children:"Наша майстерня"}),f.jsxs(HN,{children:[f.jsx(Ls,{color:"#e2e2e2",children:"Фото майстерні"}),f.jsx(Ls,{color:"#d1d1d1",children:"Процес діагностики"}),f.jsx(Ls,{color:"#bcbcbc",children:"Склад запчастин"}),f.jsx(Ls,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),qN=()=>{const{pathname:e}=er();return x.useEffect(()=>{window.scrollTo(0,0)},[e]),null},YN=_.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,XN=_.div`
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
`,KN=_.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,QN=_.p`
  color: #585555;
  margin-bottom: 40px;
`,ZN=_.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,JN=_.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Rs=_.div`
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
`,e7=_.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,t7=_.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,n7=_.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,r7=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,ty=_.a`
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
`;const i7=_.div`
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

 
`,o7=()=>f.jsx(YN,{children:f.jsxs(XN,{children:[f.jsx(KN,{children:"Контакти"}),f.jsx(QN,{children:"Зв’яжіться з нами для консультації або замовлення"}),f.jsxs(ZN,{children:[f.jsxs(JN,{children:[f.jsxs(Rs,{children:[f.jsx("h3",{children:"Адреса"}),f.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),f.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),f.jsxs(Rs,{children:[f.jsx("h3",{children:"Телефон"}),f.jsx("p",{children:"+38 (097) 123-45-67"})]}),f.jsxs(Rs,{children:[f.jsx("h3",{children:"Email"}),f.jsx("p",{children:"didivhliv.com"})]}),f.jsxs(Rs,{children:[f.jsx("h3",{children:"Графік роботи"}),f.jsx("p",{children:"З 11:00 - 20:00"}),f.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),f.jsxs(e7,{children:[f.jsx(t7,{children:"Ми в соцмережах"}),f.jsx(n7,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),f.jsxs(r7,{children:[f.jsxs(ty,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${hn}#icon-instagram`})}),f.jsx("span",{children:"Instagram"})]}),f.jsxs(ty,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${hn}#icon-telegram`})}),f.jsx("span",{children:"Telegram"})]})]}),f.jsx(i7,{children:"Приєднуйся до спільноти!"})]})]})]})}),a7=_.section`
  background-color:  var(--second-background);
`,s7=_.div`
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
  
`,l7=_.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,c7=_.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,u7=_.div`
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
`,d7=_.div`
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
`,f7=_.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,p7=_.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,h7=_.p`
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
`;const m7=_.div.attrs({className:"card-buttons"})`
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
`,Gi=_.button`
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
`,g7=_.div`
  position: relative;
  display: inline-block;
  

`,v7=_.button`
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
`,y7=_.div`
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
`,_i=_.div`
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
  
`,x7=_.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,b7=_.div`
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
`,w7=_.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,S7=_.h1`

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

`,_7=_.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,C7=_.div`
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
`;const E7=_.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding: 20px;
`,k7=_.p`
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
`,T7=_.div`
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
`;const P7=_.div.attrs({className:"card-buttons"})`
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
`;const O7=_.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,j7=_.div`
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
`,Ci=_.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,M7=_.button`
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
`,$7=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),i=Ue(E=>E.favorites.items),o=Ue(E=>E.cart.items),[a,l]=x.useState(!1),[s,c]=x.useState("date"),[d,u]=x.useState("asc"),[y,p]=x.useState(1),[m,g]=x.useState(1),w=Bt(),h=Jt(),v=x.useRef(null);x.useEffect(()=>{const E=P=>{v.current&&!v.current.contains(P.target)&&l(!1)};return document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[y]),x.useEffect(()=>{(async()=>{const P=new Date,k=new Date;k.setDate(P.getDate()-7);const C=k.toISOString();try{r(!0);const M=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${C}&pagination[page]=${y}&pagination[pageSize]=24`);if(!M.ok)throw new Error(`HTTP error! Status: ${M.status}`);const $=await M.json();t($.data),g($.meta.pagination.pageCount)}catch(M){console.error("Помилка при завантаженні продуктів:",M)}finally{r(!1)}})()},[y]);const b=x.useMemo(()=>{const E=[...e],P=k=>k.new_price&&k.new_price<k.price?k.new_price:k.price;switch(s){case"name":return E.sort((k,C)=>d==="asc"?k.name.localeCompare(C.name):C.name.localeCompare(k.name));case"price":return E.sort((k,C)=>{const M=P(k),$=P(C);return d==="asc"?M-$:$-M});case"date":return E.sort((k,C)=>d==="asc"?new Date(k.createdAt)-new Date(C.createdAt):new Date(C.createdAt)-new Date(k.createdAt));default:return E}},[s,e,d]),S=(E,P)=>{P.stopPropagation();const k=i.some(C=>C.id===(E==null?void 0:E.id));ui(E,k,h,Z)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ja,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):b.length===0?f.jsxs(q_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),f.jsxs(Y_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(Bc,{size:24})]})]}):f.jsxs(a7,{children:[f.jsxs(s7,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(l7,{children:[f.jsx(c7,{children:"Нові товари "}),f.jsxs(g7,{ref:v,children:[f.jsxs(v7,{onClick:()=>l(E=>!E),children:["Сортування",f.jsx(Nc,{strokeWidth:.9,size:22})]}),a&&f.jsxs(y7,{children:[f.jsx(_i,{onClick:()=>{c("name"),u("asc"),l(!1)},children:"А-Я"}),f.jsx(_i,{onClick:()=>{c("name"),u("desc"),l(!1)},children:"Я-А"}),f.jsx(_i,{onClick:()=>{c("price"),u("asc"),l(!1)},children:"Ціна ↑"}),f.jsx(_i,{onClick:()=>{c("price"),u("desc"),l(!1)},children:"Ціна ↓"}),f.jsx(_i,{onClick:()=>{c("date"),u("desc"),l(!1)},children:"Спочатку новіші"}),f.jsx(_i,{onClick:()=>{c("date"),u("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(u7,{children:b.map(E=>{var A,L;const P=i.some(O=>O.id===E.id),k=(E==null?void 0:E.available)??!0,C=o.find(O=>O.id===E.id),$=(C?C.quantity:0)>=(E.stock||0),D=E.new_price&&E.new_price<E.price,R=D?E.new_price:E.price,j=D?Math.round((E.price-E.new_price)/E.price*100):0,F=(O,T)=>{if(T.stopPropagation(),$){Z.error("Товар уже у кошику");return}h(vo({...O,quantity:1})),Z.success(`${O.name} додано в кошик!`)};return f.jsxs(d7,{onClick:()=>w(`/product/${E.id}`),children:[!k&&f.jsx(ym,{children:"Заброньовано"}),f.jsx(f7,{src:((L=(A=E.images)==null?void 0:A[0])==null?void 0:L.url)||ii,alt:E.name}),f.jsx(h7,{children:E.name}),f.jsxs(p7,{children:[f.jsx(ju,{children:f.jsxs(Mu,{children:[f.jsxs($u,{$discount:D,children:[R.toLocaleString()," грн"]}),D&&f.jsxs(Iu,{children:[E.price.toLocaleString()," грн"]}),D&&f.jsxs(Du,{children:["-",j,"%"]})]})}),f.jsxs(m7,{children:[k&&f.jsx(gc,{onClick:O=>F(E,O),children:f.jsx(go,{size:24,color:C?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(gc,{onClick:O=>S(E,O),children:f.jsx(Ya,{size:24,fill:P?"#ff4d4f":"none",color:P?"#ff4d4f":"#000000",strokeWidth:P?1:2})})]})]})]},E.id)})}),f.jsxs(G_,{children:[f.jsx(Gi,{onClick:()=>p(E=>Math.max(E-1,1)),disabled:y===1,children:"Назад"}),Array.from({length:m},(E,P)=>f.jsx(Gi,{onClick:()=>p(P+1),active:y===P+1,children:P+1},P)),f.jsx(Gi,{onClick:()=>p(E=>Math.min(E+1,m)),disabled:y===m,children:"Вперед"})]})]})," "]})},I7=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),[i,o]=x.useState(!1),[a,l]=x.useState("date"),[s,c]=x.useState("desc"),[d,u]=x.useState(1),y=24;console.log(i);const p=Bt(),m=Jt(),g=Ue(C=>C.favorites.items),w=Ue(C=>C.cart.items),h=x.useRef(null);x.useEffect(()=>{const C=M=>{h.current&&!h.current.contains(M.target)&&o(!1)};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[]),x.useEffect(()=>{(async()=>{const M="https://backenddidiv-production.up.railway.app";try{const D=await(await fetch(`${M}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json();console.log(D.data),t(D.data),r(!1)}catch($){console.log($)}})()},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[d]);const v=x.useMemo(()=>{const C=[...e];switch(a){case"name":return C.sort((M,$)=>s==="asc"?M.name.localeCompare($.name):$.name.localeCompare(M.name));case"price":return C.sort((M,$)=>s==="asc"?M.new_price-$.new_price:$.new_price-M.new_price);case"date":return C.sort((M,$)=>s==="asc"?new Date(M.createdAt)-new Date($.createdAt):new Date($.createdAt)-new Date(M.createdAt));default:return C}},[a,e,s]),b=d*y,S=b-y,E=v.slice(S,b),P=Math.ceil(e.length/y),k=(C,M)=>{M.stopPropagation();const $=g.some(D=>D.id===(C==null?void 0:C.id));ui(C,$,m,Z)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ja,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?f.jsxs(q_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),f.jsxs(Y_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(Bc,{size:24})]})]}):f.jsx(x7,{children:f.jsxs(b7,{children:[f.jsx(Dn,{autoClose:1500}),f.jsxs(w7,{children:[f.jsx(S7,{children:"Акційні товари"}),f.jsxs(O7,{ref:h,children:[f.jsxs(M7,{onClick:()=>o(C=>!C),children:["Сортування",f.jsx(Nc,{strokeWidth:.9,size:22})]}),i&&f.jsxs(j7,{children:[f.jsx(Ci,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),f.jsx(Ci,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),f.jsx(Ci,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(Ci,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(Ci,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(Ci,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(_7,{children:E.map(C=>{var T,I;const M=C.new_price&&C.new_price<C.price,$=M?C.new_price:C.price,D=(C==null?void 0:C.available)??!0,R=M?Math.round((C.price-C.new_price)/C.price*100):0,j=g.some(z=>z.id===C.id),F=w.find(z=>z.id===C.id),L=(F?F.quantity:0)>=(C.stock||0),O=(z,B)=>{if(B.stopPropagation(),L){Z.error("Товар уже у кошику");return}m(vo({...z,quantity:1})),Z.success(`${z.name} додано в кошик!`)};return f.jsxs(C7,{onClick:()=>p(`/product/${C.id}`),style:{cursor:"pointer"},children:[!D&&f.jsx(ym,{children:"Заброньовано"}),f.jsx(E7,{src:((I=(T=C.images)==null?void 0:T[0])==null?void 0:I.url)||"/nofoto.png"}),f.jsx(k7,{children:C.name}),f.jsxs(T7,{children:[f.jsx(ju,{children:f.jsxs(Mu,{children:[f.jsxs($u,{$discount:M,children:[$.toLocaleString()," грн"]}),M&&f.jsxs(Iu,{children:[C.price.toLocaleString()," грн"]}),M&&f.jsxs(Du,{children:["-",R,"%"]})]})}),f.jsxs(P7,{children:[D&&f.jsx(gc,{onClick:z=>O(C,z),children:f.jsx(go,{size:24,color:F?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(gc,{onClick:z=>k(C,z),children:f.jsx(Ya,{size:24,fill:j?"#ff4d4f":"none",color:j?"#ff4d4f":"#000000",strokeWidth:j?1:2})})]})]})]},C.id)})}),v.length>y&&f.jsxs(G_,{children:[f.jsx(Gi,{onClick:()=>u(C=>Math.max(C-1,1)),disabled:d===1,children:"Назад"}),Array.from({length:P},(C,M)=>f.jsx(Gi,{onClick:()=>u(M+1),active:d===M+1,children:M+1},M)),f.jsx(Gi,{onClick:()=>u(C=>Math.min(C+1,P)),disabled:d===P,children:"Вперед"})]})]})})},D7=_.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;

`,L7=_.div`
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
`,R7=_.button`
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
`,A7=_.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width:768px){
    font-size:42px;
  }
`,F7=_.p`
  text-align:center;
  color:#8d837d;

  margin-bottom:32px;
`,z7=_.div`
  display:flex;

  background:#efe8df;

  border-radius:40px;

  padding:5px;

  margin-bottom:35px;
`,ny=_.button`
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
`,N7=_.button`
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
`,ry=_.div`
  position: relative;
  width: 100%;
 
`,iy=_.button`
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
`,B7=_.p`
  margin-top:28px;

  text-align:center;

  color:#8b817a;

  font-size:15px;

  span{
      color:#ff7a00;
      cursor:pointer;
      font-weight:600;
  }
`,V7=({isOpen:e,onClose:t,mode:n,setMode:r,localFavorites:i})=>{const[o,a]=x.useState(!1),[l,s]=x.useState(!1),[c,d]=x.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),u=async(w,h,v)=>{w.length&&await Promise.all(w.map(async b=>{console.log(b);const S=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[product][documentId][$eq]=${b.documentId}&populate=user`,{headers:{Authorization:`Bearer ${h}`}});if(!S.ok){console.error(await S.json());return}const E=await S.json();if(E.data.length>0){const k=E.data[0];console.log("favr",k);const C=k.user||[];if(C.some(D=>D.documentId===v))return;const $=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${k.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${h}`,"Content-Type":"application/json"},body:JSON.stringify({data:{user:[...C.map(D=>D.documentId),v]}})});$.ok||console.error(await $.json());return}const P=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{Authorization:`Bearer ${h}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:b.documentId,user:[v]}})});P.ok||console.error(await P.json())}))};if(x.useEffect(()=>{const w=h=>{h.key==="Escape"&&t()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[t]),!e)return null;const y=w=>{d(h=>({...h,[w.target.name]:w.target.value}))},p=w=>{w.target===w.currentTarget&&t()},m=async()=>{var v;const w=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:c.email,password:c.password})}),h=await w.json();if(!w.ok){alert(((v=h.error)==null?void 0:v.message)||"Помилка авторизації");return}localStorage.setItem("token",h.jwt),localStorage.setItem("user",JSON.stringify(h.user)),await u(i,h.jwt,h.user.documentId),t()},g=async()=>{if(c.password!==c.confirmPassword){alert("Паролі не співпадають");return}const h=await(await fetch("https://backenddidiv-production.up.railway.app/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c.email,email:c.email,password:c.password})})).json();localStorage.setItem("token",h.jwt);try{const v=localStorage.getItem("token");if(localStorage.setItem("user",JSON.stringify(h.user)),!(await fetch(`https://backenddidiv-production.up.railway.app/api/users/${h.user.id}`,{method:"PUT",headers:{Authorization:`Bearer ${v}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:c.first_name,last_name:c.last_name})})).ok)throw new Error("Помилка оновлення")}catch(v){console.error(v),alert("Не вдалося оновити дані")}t()};return f.jsxs(f.Fragment,{children:[" ",f.jsx(Dn,{autoClose:1500}),f.jsx(D7,{onClick:p,children:f.jsxs(L7,{children:[f.jsx(R7,{onClick:t,children:"×"}),f.jsx(A7,{children:n==="login"?"Вхід":"Реєстрація"}),f.jsx(F7,{children:n==="login"?"Увійдіть до свого акаунта":"Створіть новий акаунт"}),f.jsxs(z7,{children:[f.jsx(ny,{active:n==="login",onClick:()=>r("login"),children:"Вхід"}),f.jsx(ny,{active:n==="register",onClick:()=>r("register"),children:"Реєстрація"})]}),n==="register"&&f.jsxs(f.Fragment,{children:[f.jsx(Vo,{name:"first_name",value:c.first_name,onChange:y,placeholder:"Ім'я"}),f.jsx(Vo,{name:"last_name",value:c.last_name,onChange:y,placeholder:"Прізвище"})]}),f.jsx(Vo,{name:"email",type:"email",value:c.email,onChange:y,placeholder:"Email"}),f.jsxs(ry,{children:[f.jsx(Vo,{name:"password",type:o?"text":"password",value:c.password,onChange:y,placeholder:"Пароль"}),f.jsx(iy,{type:"button",onClick:()=>a(w=>!w),children:o?f.jsx(G0,{size:20}):f.jsx(q0,{size:20})})]}),n==="register"&&f.jsxs(ry,{children:[f.jsx(Vo,{name:"confirmPassword",type:l?"text":"password",value:c.confirmPassword,onChange:y,placeholder:"Повторіть пароль"}),f.jsx(iy,{type:"button",onClick:()=>s(w=>!w),children:o?f.jsx(G0,{size:20}):f.jsx(q0,{size:20})})]}),f.jsx(N7,{onClick:n==="login"?m:g,children:n==="login"?"Увійти":"Зареєструватися"}),f.jsx(B7,{children:n==="login"?f.jsxs(f.Fragment,{children:["Немає акаунта?"," ",f.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):f.jsxs(f.Fragment,{children:["Вже є акаунт?"," ",f.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})," "]})},U7=({isLoggedIn:e,children:t})=>e?t:f.jsx(wE,{to:"/",replace:!0}),W7=_.main`
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

`,H7=_.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`,G7=_.aside`
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 1440px) {
    position: sticky;
    top: 110px;
  }
`,q7=_.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,Y7=_.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,X7=_.h3`
  margin-bottom: 4px;
`,K7=_.p`
  color: #777;
`,oy=_.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,As=_(Ay)`
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
`;var og="persist:",X_="persist/FLUSH",ag="persist/REHYDRATE",K_="persist/PAUSE",Q_="persist/PERSIST",Z_="persist/PURGE",J_="persist/REGISTER",Q7=-1;function fl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fl=function(n){return typeof n}:fl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fl(e)}function ay(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z7(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ay(n,!0).forEach(function(r){J7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ay(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function J7(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function e9(e,t,n,r){r.debug;var i=Z7({},n);return e&&fl(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function t9(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:og).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=n9;var s=e.writeFailHandler||null,c={},d={},u=[],y=null,p=null,m=function(E){Object.keys(E).forEach(function(P){h(P)&&c[P]!==E[P]&&u.indexOf(P)===-1&&u.push(P)}),Object.keys(c).forEach(function(P){E[P]===void 0&&h(P)&&u.indexOf(P)===-1&&c[P]!==void 0&&u.push(P)}),y===null&&(y=setInterval(g,i)),c=E};function g(){if(u.length===0){y&&clearInterval(y),y=null;return}var S=u.shift(),E=r.reduce(function(P,k){return k.in(P,S,c)},c[S]);if(E!==void 0)try{d[S]=l(E)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete d[S];u.length===0&&w()}function w(){Object.keys(d).forEach(function(S){c[S]===void 0&&delete d[S]}),p=a.setItem(o,l(d)).catch(v)}function h(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function v(S){s&&s(S)}var b=function(){for(;u.length!==0;)g();return p||Promise.resolve()};return{update:m,flush:b}}function n9(e){return JSON.stringify(e)}function r9(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:og).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=i9,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(c,d){return d.out(c,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function i9(e){return JSON.parse(e)}function o9(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:og).concat(e.key);return t.removeItem(n,a9)}function a9(e){}function sy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sy(n,!0).forEach(function(r){s9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sy(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function s9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l9(e,t){if(e==null)return{};var n=c9(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function c9(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var u9=5e3;function eC(e,t){var n=e.version!==void 0?e.version:Q7;e.debug;var r=e.stateReconciler===void 0?e9:e.stateReconciler,i=e.getStoredState||r9,o=e.timeout!==void 0?e.timeout:u9,a=null,l=!1,s=!0,c=function(u){return u._persist.rehydrated&&a&&!s&&a.update(u),u};return function(d,u){var y=d||{},p=y._persist,m=l9(y,["_persist"]),g=m;if(u.type===Q_){var w=!1,h=function(C,M){w||(u.rehydrate(e.key,C,M),w=!0)};if(o&&setTimeout(function(){!w&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=t9(e)),p)return Ln({},t(g,u),{_persist:p});if(typeof u.rehydrate!="function"||typeof u.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return u.register(e.key),i(e).then(function(k){var C=e.migrate||function(M,$){return Promise.resolve(M)};C(k,n).then(function(M){h(M)},function(M){h(void 0,M)})},function(k){h(void 0,k)}),Ln({},t(g,u),{_persist:{version:n,rehydrated:!1}})}else{if(u.type===Z_)return l=!0,u.result(o9(e)),Ln({},t(g,u),{_persist:p});if(u.type===X_)return u.result(a&&a.flush()),Ln({},t(g,u),{_persist:p});if(u.type===K_)s=!0;else if(u.type===ag){if(l)return Ln({},g,{_persist:Ln({},p,{rehydrated:!0})});if(u.key===e.key){var v=t(g,u),b=u.payload,S=r!==!1&&b!==void 0?r(b,d,v,e):v,E=Ln({},S,{_persist:Ln({},p,{rehydrated:!0})});return c(E)}}}if(!p)return t(d,u);var P=t(g,u);return P===g?d:c(Ln({},P,{_persist:p}))}}function ly(e){return p9(e)||f9(e)||d9()}function d9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function p9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function cy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function eh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cy(n,!0).forEach(function(r){h9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cy(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function h9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var tC={registry:[],bootstrapped:!1},m9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:tC,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case J_:return eh({},t,{registry:[].concat(ly(t.registry),[n.key])});case ag:var r=t.registry.indexOf(n.key),i=ly(t.registry);return i.splice(r,1),eh({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function g9(e,t,n){var r=n||!1,i=pm(m9,tC,t&&t.enhancer?t.enhancer:void 0),o=function(c){i.dispatch({type:J_,key:c})},a=function(c,d,u){var y={type:ag,payload:d,err:u,key:c};e.dispatch(y),i.dispatch(y),r&&l.getState().bootstrapped&&(r(),r=!1)},l=eh({},i,{purge:function(){var c=[];return e.dispatch({type:Z_,result:function(u){c.push(u)}}),Promise.all(c)},flush:function(){var c=[];return e.dispatch({type:X_,result:function(u){c.push(u)}}),Promise.all(c)},pause:function(){e.dispatch({type:K_})},persist:function(){e.dispatch({type:Q_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var sg={},lg={};lg.__esModule=!0;lg.default=x9;function pl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pl=function(n){return typeof n}:pl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pl(e)}function hf(){}var v9={getItem:hf,setItem:hf,removeItem:hf};function y9(e){if((typeof self>"u"?"undefined":pl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function x9(e){var t="".concat(e,"Storage");return y9(t)?self[t]:v9}sg.__esModule=!0;sg.default=S9;var b9=w9(lg);function w9(e){return e&&e.__esModule?e:{default:e}}function S9(e){var t=(0,b9.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var cg=void 0,_9=C9(sg);function C9(e){return e&&e.__esModule?e:{default:e}}var E9=(0,_9.default)("local");cg=E9;const k9={key:"cart",storage:cg},T9={key:"favorites",storage:cg},P9=eC(k9,A4),O9=eC(T9,$3),nC=w4({reducer:{cart:P9,favorites:O9},middleware:e=>e({serializableCheck:!1})}),j9=g9(nC),M9=()=>{var l,s;const[e,t]=x.useState(""),[n,r]=x.useState(""),i=Jt(),o=Bt();x.useEffect(()=>{(async()=>{try{const d=localStorage.getItem("token"),y=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${d}`}})).json();t(y.first_name),r(y.email)}catch(d){console.error(d)}})()},[]);const a=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),i(Yw()),await j9.purge(),o("/",{replace:!0})};return f.jsxs(G7,{children:[f.jsxs(q7,{children:[f.jsx(Y7,{children:((s=(l=e||e)==null?void 0:l[0])==null?void 0:s.toUpperCase())||"?"}),f.jsxs("div",{children:[f.jsx(X7,{children:e}),f.jsx(K7,{children:n})]})]}),f.jsxs(oy,{children:[f.jsxs(oy,{children:[f.jsx(As,{$active:!0,to:"/account/profile",children:"Особисті дані"}),f.jsx(As,{to:"/account/orders",children:"Замовлення"}),f.jsx(As,{to:"/account/password",children:"Змінити пароль"})]}),f.jsx(As,{onClick:a,children:"Вийти"})]})]})};var ug={};ug.match=A9;ug.parse=rC;var $9=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,I9=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,D9=/^(?:(min|max)-)?(.+)/,L9=/(em|rem|px|cm|mm|in|pt|pc)?$/,R9=/(dpi|dpcm|dppx)?$/;function A9(e,t){return rC(e).some(function(n){var r=n.inverse,i=n.type==="all"||t.type===n.type;if(i&&r||!(i||r))return!1;var o=n.expressions.every(function(a){var l=a.feature,s=a.modifier,c=a.value,d=t[l];if(!d)return!1;switch(l){case"orientation":case"scan":return d.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=fy(c),d=fy(d);break;case"resolution":c=dy(c),d=dy(d);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=uy(c),d=uy(d);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,d=parseInt(d,10)||0;break}switch(s){case"min":return d>=c;case"max":return d<=c;default:return d===c}});return o&&!r||!o&&r})}function rC(e){return e.split(",").map(function(t){t=t.trim();var n=t.match($9),r=n[1],i=n[2],o=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(l){var s=l.match(I9),c=s[1].toLowerCase().match(D9);return{modifier:c[1],feature:c[2],value:s[2]}}),a})}function uy(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function dy(e){var t=parseFloat(e),n=String(e).match(R9)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function fy(e){var t=parseFloat(e),n=String(e).match(L9)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var F9=ug.match,py=typeof window<"u"?window.matchMedia:null;function z9(e,t,n){var r=this,i;py&&!n&&(i=py.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=F9(e,t),this.media=e),this.addListener=o,this.removeListener=a,this.dispose=s;function o(c){i&&i.addListener(c)}function a(c){i&&i.removeListener(c)}function l(c){r.matches=c.matches,r.media=c.media}function s(){i&&i.removeListener(l)}}function N9(e,t,n){return new z9(e,t,n)}var B9=N9;const V9=Na(B9);var U9=/[A-Z]/g,W9=/^ms-/,mf={};function H9(e){return"-"+e.toLowerCase()}function iC(e){if(mf.hasOwnProperty(e))return mf[e];var t=e.replace(U9,H9);return mf[e]=W9.test(t)?"-"+t:t}function G9(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let o=0;o<i;o++){const a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var oC={exports:{}},q9="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y9=q9,X9=Y9;function aC(){}function sC(){}sC.resetWarningCache=aC;var K9=function(){function e(r,i,o,a,l,s){if(s!==X9){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:sC,resetWarningCache:aC};return n.PropTypes=n,n};oC.exports=K9();var Q9=oC.exports;const fe=Na(Q9),pt=fe.oneOfType([fe.string,fe.number]),dg={all:fe.bool,grid:fe.bool,aural:fe.bool,braille:fe.bool,handheld:fe.bool,print:fe.bool,projection:fe.bool,screen:fe.bool,tty:fe.bool,tv:fe.bool,embossed:fe.bool},lC={orientation:fe.oneOf(["portrait","landscape"]),scan:fe.oneOf(["progressive","interlace"]),aspectRatio:fe.string,deviceAspectRatio:fe.string,height:pt,deviceHeight:pt,width:pt,deviceWidth:pt,color:fe.bool,colorIndex:fe.bool,monochrome:fe.bool,resolution:pt,type:Object.keys(dg)},{type:kB,...Z9}=lC,cC={minAspectRatio:fe.string,maxAspectRatio:fe.string,minDeviceAspectRatio:fe.string,maxDeviceAspectRatio:fe.string,minHeight:pt,maxHeight:pt,minDeviceHeight:pt,maxDeviceHeight:pt,minWidth:pt,maxWidth:pt,minDeviceWidth:pt,maxDeviceWidth:pt,minColor:fe.number,maxColor:fe.number,minColorIndex:fe.number,maxColorIndex:fe.number,minMonochrome:fe.number,maxMonochrome:fe.number,minResolution:pt,maxResolution:pt,...Z9},J9={...dg,...cC};var eB={all:J9,types:dg,matchers:lC,features:cC};const tB=e=>`not ${e}`,nB=(e,t)=>{const n=iC(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?tB(n):`(${n}: ${t})`},rB=e=>e.join(" and "),iB=e=>{const t=[];return Object.keys(eB.all).forEach(n=>{const r=e[n];r!=null&&t.push(nB(n,r))}),rB(t)},oB=x.createContext(void 0),aB=e=>e.query||iB(e),hy=e=>e?Object.keys(e).reduce((n,r)=>(n[iC(r)]=e[r],n),{}):void 0,uC=()=>{const e=x.useRef(!1);return x.useEffect(()=>{e.current=!0},[]),e.current},sB=e=>{const t=x.useContext(oB),n=()=>hy(e)||hy(t),[r,i]=x.useState(n);return x.useEffect(()=>{const o=n();G9(r,o)||i(o)},[e,t]),r},lB=e=>{const t=()=>aB(e),[n,r]=x.useState(t);return x.useEffect(()=>{const i=t();n!==i&&r(i)},[e]),n},cB=(e,t)=>{const n=()=>V9(e,t||{},!!t),[r,i]=x.useState(n),o=uC();return x.useEffect(()=>{if(o){const a=n();return i(a),()=>{a&&a.dispose()}}},[e,t]),r},uB=e=>{const[t,n]=x.useState(e.matches);return x.useEffect(()=>{const r=i=>{n(i.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},dB=(e,t,n)=>{const r=sB(t),i=lB(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const o=cB(i,r),a=uB(o),l=uC();return x.useEffect(()=>{l&&n&&n(a)},[a]),x.useEffect(()=>()=>{o&&o.dispose()},[]),a},fB=_.div`
  margin-bottom: 24px;
`,pB=_.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,hB=_.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,mB=_.h3`
  margin-bottom: 4px;
`,gB=_.p`
  color: #777;
`,vB=_.button`
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
`,yB=_.div`
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
`,xB=()=>{var s,c;const[e,t]=x.useState(!1),[n,r]=x.useState(""),[i,o]=x.useState("");x.useEffect(()=>{(async()=>{try{const u=localStorage.getItem("token"),p=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${u}`}})).json();r(p.first_name),o(p.email)}catch(u){console.error(u)}})()},[]);const l={"/account":"Особисті дані","/account/profile":"Особисті дані","/account/orders":"Замовлення","/account/favorites":"Обране","/account/password":"Змінити пароль"}[location.pathname]||"Особисті дані";return f.jsxs(fB,{children:[f.jsxs(pB,{children:[f.jsx(hB,{children:((c=(s=n||n)==null?void 0:s[0])==null?void 0:c.toUpperCase())||"?"}),f.jsxs("div",{children:[f.jsx(mB,{children:n}),f.jsx(gB,{children:i})]})]}),f.jsxs(vB,{onClick:()=>t(d=>!d),children:[l,e?f.jsx(sj,{size:22}):f.jsx(oj,{size:22})]}),e&&f.jsxs(yB,{children:[f.jsx(Uo,{to:"/account/profile",onClick:()=>t(!1),children:"Особисті дані"}),f.jsx(Uo,{to:"/account/orders",onClick:()=>t(!1),children:"Замовлення"}),f.jsx(Uo,{to:"/account/favorites",onClick:()=>t(!1),children:"Обране"}),f.jsx(Uo,{to:"/account/password",onClick:()=>t(!1),children:"Змінити пароль"}),f.jsx(Uo,{to:"/",children:"Вийти"})]})]})},bB=()=>{const e=dB({maxWidth:767});return f.jsxs(W7,{className:"container",children:[e?f.jsx(xB,{}):f.jsx(M9,{}),f.jsx(H7,{children:f.jsx(Ly,{})})]})},wB=_.div`
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
`,SB=_.h2`
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
`,_B=_.button`
  width: 220px;
  height: 52px;

  border: none;
  border-radius: 14px;

  background: #ef7d1a;
  color: white;

  cursor: pointer;
`,my=()=>{const[e,t]=x.useState({first_name:"",last_name:"",email:"",phone:""}),[n,r]=x.useState(null),[i,o]=x.useState(!0);x.useEffect(()=>{(async()=>{try{const c=localStorage.getItem("token"),u=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${c}`}})).json();r(u.id),t({first_name:u.first_name||"",last_name:u.last_name||"",email:u.email||"",phone:u.phone||""})}catch(c){console.error(c)}finally{o(!1)}})()},[]);const a=s=>{const{name:c,value:d}=s.target;t(u=>({...u,[c]:d}))},l=async()=>{try{const s=localStorage.getItem("token");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/users/${n}`,{method:"PUT",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:e.first_name,last_name:e.last_name,phone:e.phone})})).ok)throw new Error("Помилка оновлення");Z.success("Дані оновлено успішно")}catch(s){console.error(s),Z.error("Не вдалось оновити дані")}};return i?f.jsx("p",{children:"Завантаження..."}):f.jsxs(wB,{children:[f.jsx(Dn,{autoClose:1500}),f.jsx(SB,{children:"Особисті дані"}),f.jsxs(Fs,{children:["Ім я",f.jsx(zs,{name:"first_name",value:e.first_name,onChange:a})]}),f.jsxs(Fs,{children:["Прізвище",f.jsx(zs,{name:"last_name",value:e.last_name,onChange:a})]}),f.jsxs(Fs,{children:["Email",f.jsx(zs,{value:e.email,disabled:!0})]}),f.jsxs(Fs,{children:["Телефон",f.jsx(zs,{name:"phone",value:e.phone,onChange:a})]}),f.jsx(_B,{onClick:l,children:"Зберегти"})]})};function CB(){const e=Jt(),[t,n]=x.useState(!1),[r,i]=x.useState("login"),o=!!localStorage.getItem("token"),a=localStorage.getItem("token"),l=JSON.parse(localStorage.getItem("user")||"null"),s=l==null?void 0:l.documentId,c=Ue(d=>d.favorites.items);return x.useEffect(()=>{if(!a||!s)return;(async()=>{const u=localStorage.getItem("token");if(!u)return;const m=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${s}&populate=product.images`,{headers:{Authorization:`Bearer ${u}`}})).json()).data.map(g=>({...g.product,favoriteId:g.id,favoriteDocumentId:g.documentId}));e(M3(m))})()},[s,e,a]),f.jsxs(lM,{children:[f.jsx(W$,{}),f.jsx(qN,{}),f.jsxs(x.Suspense,{fallback:f.jsx(V$,{}),children:[f.jsx(_E,{children:f.jsxs(ze,{path:"/",element:f.jsx(Ij,{openLogin:()=>{i("login"),n(!0)},openRegister:()=>{i("register"),n(!0)}}),children:[f.jsx(ze,{index:!0,element:f.jsx(FD,{})}),f.jsx(ze,{path:"catalog",element:f.jsx(nM,{})}),f.jsx(ze,{path:"/catalog/:category",element:f.jsx(O6,{})}),f.jsx(ze,{path:"/product/:id",element:f.jsx(VR,{})}),f.jsx(ze,{path:"cart",element:f.jsx(gA,{})}),f.jsx(ze,{path:"favorite",element:f.jsx(zA,{})}),f.jsx(ze,{path:"/catalog/new",element:f.jsx($7,{})}),f.jsx(ze,{path:"/catalog/sale",element:f.jsx(I7,{})}),f.jsx(ze,{path:"checkout",element:f.jsx(TN,{})}),f.jsx(ze,{path:"/order-confirmation",element:f.jsx(LN,{})}),f.jsx(ze,{path:"about",element:f.jsx(GN,{})}),f.jsx(ze,{path:"contacts",element:f.jsx(o7,{})}),f.jsx(ze,{path:"delivery",element:f.jsx(HA,{})}),f.jsxs(ze,{path:"account",element:f.jsx(U7,{isLoggedIn:o,children:f.jsx(bB,{})}),children:[f.jsx(ze,{index:!0,element:f.jsx(my,{})}),f.jsx(ze,{path:"profile",element:f.jsx(my,{})})]}),f.jsx(ze,{path:"*",element:f.jsx(sM,{})})]})}),f.jsx(V7,{localFavorites:c,isOpen:t,mode:r,onClose:()=>n(!1),setMode:i})]})]})}bf.createRoot(document.getElementById("root")).render(f.jsx($O,{store:nC,children:f.jsx(X.StrictMode,{children:f.jsx(jE,{basename:"/Didiv/",children:f.jsx(CB,{})})})}));
