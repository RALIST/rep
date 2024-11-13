function Bf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Vf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var as={exports:{}},Fi={},ss={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),Hf=Symbol.for("react.portal"),Wf=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),Yf=Symbol.for("react.profiler"),Kf=Symbol.for("react.provider"),Xf=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),Zf=Symbol.for("react.suspense"),Jf=Symbol.for("react.memo"),qf=Symbol.for("react.lazy"),Vu=Symbol.iterator;function bf(e){return e===null||typeof e!="object"?null:(e=Vu&&e[Vu]||e["@@iterator"],typeof e=="function"?e:null)}var cs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fs=Object.assign,ds={};function Cn(e,t,n){this.props=e,this.context=t,this.refs=ds,this.updater=n||cs}Cn.prototype.isReactComponent={};Cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ps(){}ps.prototype=Cn.prototype;function Bl(e,t,n){this.props=e,this.context=t,this.refs=ds,this.updater=n||cs}var Vl=Bl.prototype=new ps;Vl.constructor=Bl;fs(Vl,Cn.prototype);Vl.isPureReactComponent=!0;var Hu=Array.isArray,ms=Object.prototype.hasOwnProperty,Hl={current:null},hs={key:!0,ref:!0,__self:!0,__source:!0};function gs(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)ms.call(t,r)&&!hs.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:wr,type:e,key:o,ref:l,props:i,_owner:Hl.current}}function ed(e,t){return{$$typeof:wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wl(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function td(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wu=/\/+/g;function yo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?td(""+e.key):t.toString(36)}function Jr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case wr:case Hf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+yo(l,0):r,Hu(i)?(n="",e!=null&&(n=e.replace(Wu,"$&/")+"/"),Jr(i,t,n,"",function(c){return c})):i!=null&&(Wl(i)&&(i=ed(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Wu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Hu(e))for(var u=0;u<e.length;u++){o=e[u];var a=r+yo(o,u);l+=Jr(o,t,n,a,i)}else if(a=bf(e),typeof a=="function")for(e=a.call(e),u=0;!(o=e.next()).done;)o=o.value,a=r+yo(o,u++),l+=Jr(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Tr(e,t,n){if(e==null)return e;var r=[],i=0;return Jr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function nd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},qr={transition:null},rd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:qr,ReactCurrentOwner:Hl};function vs(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!Wl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Cn;$.Fragment=Wf;$.Profiler=Yf;$.PureComponent=Bl;$.StrictMode=Qf;$.Suspense=Zf;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rd;$.act=vs;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fs({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Hl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)ms.call(t,a)&&!hs.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:wr,type:e.type,key:i,ref:o,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:Xf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kf,_context:e},e.Consumer=e};$.createElement=gs;$.createFactory=function(e){var t=gs.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Gf,render:e}};$.isValidElement=Wl;$.lazy=function(e){return{$$typeof:qf,_payload:{_status:-1,_result:e},_init:nd}};$.memo=function(e,t){return{$$typeof:Jf,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=qr.transition;qr.transition={};try{e()}finally{qr.transition=t}};$.unstable_act=vs;$.useCallback=function(e,t){return ge.current.useCallback(e,t)};$.useContext=function(e){return ge.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};$.useEffect=function(e,t){return ge.current.useEffect(e,t)};$.useId=function(){return ge.current.useId()};$.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return ge.current.useMemo(e,t)};$.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};$.useRef=function(e){return ge.current.useRef(e)};$.useState=function(e){return ge.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return ge.current.useTransition()};$.version="18.3.1";ss.exports=$;var W=ss.exports;const id=Vf(W),Qu=Bf({__proto__:null,default:id},[W]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od=W,ld=Symbol.for("react.element"),ud=Symbol.for("react.fragment"),ad=Object.prototype.hasOwnProperty,sd=od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cd={key:!0,ref:!0,__self:!0,__source:!0};function ys(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ad.call(t,r)&&!cd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ld,type:e,key:o,ref:l,props:i,_owner:sd.current}}Fi.Fragment=ud;Fi.jsx=ys;Fi.jsxs=ys;as.exports=Fi;var v=as.exports,xs={exports:{}},Ne={},ws={exports:{}},ks={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,j){var O=P.length;P.push(j);e:for(;0<O;){var G=O-1>>>1,te=P[G];if(0<i(te,j))P[G]=j,P[O]=te,O=G;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],O=P.pop();if(O!==j){P[0]=O;e:for(var G=0,te=P.length,Pr=te>>>1;G<Pr;){var Lt=2*(G+1)-1,vo=P[Lt],Ot=Lt+1,zr=P[Ot];if(0>i(vo,O))Ot<te&&0>i(zr,vo)?(P[G]=zr,P[Ot]=O,G=Ot):(P[G]=vo,P[Lt]=O,G=Lt);else if(Ot<te&&0>i(zr,O))P[G]=zr,P[Ot]=O,G=Ot;else break e}}return j}function i(P,j){var O=P.sortIndex-j.sortIndex;return O!==0?O:P.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var a=[],c=[],m=1,h=null,p=3,w=!1,x=!1,g=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(P){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=P)r(c),j.sortIndex=j.expirationTime,t(a,j);else break;j=n(c)}}function y(P){if(g=!1,d(P),!x)if(n(a)!==null)x=!0,ho(C);else{var j=n(c);j!==null&&go(y,j.startTime-P)}}function C(P,j){x=!1,g&&(g=!1,f(T),T=-1),w=!0;var O=p;try{for(d(j),h=n(a);h!==null&&(!(h.expirationTime>j)||P&&!De());){var G=h.callback;if(typeof G=="function"){h.callback=null,p=h.priorityLevel;var te=G(h.expirationTime<=j);j=e.unstable_now(),typeof te=="function"?h.callback=te:h===n(a)&&r(a),d(j)}else r(a);h=n(a)}if(h!==null)var Pr=!0;else{var Lt=n(c);Lt!==null&&go(y,Lt.startTime-j),Pr=!1}return Pr}finally{h=null,p=O,w=!1}}var E=!1,S=null,T=-1,A=5,L=-1;function De(){return!(e.unstable_now()-L<A)}function Nn(){if(S!==null){var P=e.unstable_now();L=P;var j=!0;try{j=S(!0,P)}finally{j?jn():(E=!1,S=null)}}else E=!1}var jn;if(typeof s=="function")jn=function(){s(Nn)};else if(typeof MessageChannel<"u"){var Bu=new MessageChannel,Uf=Bu.port2;Bu.port1.onmessage=Nn,jn=function(){Uf.postMessage(null)}}else jn=function(){N(Nn,0)};function ho(P){S=P,E||(E=!0,jn())}function go(P,j){T=N(function(){P(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,ho(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var j=3;break;default:j=p}var O=p;p=j;try{return P()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var O=p;p=P;try{return j()}finally{p=O}},e.unstable_scheduleCallback=function(P,j,O){var G=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,P){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=O+te,P={id:m++,callback:j,priorityLevel:P,startTime:O,expirationTime:te,sortIndex:-1},O>G?(P.sortIndex=O,t(c,P),n(a)===null&&P===n(c)&&(g?(f(T),T=-1):g=!0,go(y,O-G))):(P.sortIndex=te,t(a,P),x||w||(x=!0,ho(C))),P},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(P){var j=p;return function(){var O=p;p=j;try{return P.apply(this,arguments)}finally{p=O}}}})(ks);ws.exports=ks;var fd=ws.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd=W,Te=fd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ss=new Set,er={};function Qt(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(er[e]=t,e=0;e<t.length;e++)Ss.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=Object.prototype.hasOwnProperty,pd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yu={},Ku={};function md(e){return Yo.call(Ku,e)?!0:Yo.call(Yu,e)?!1:pd.test(e)?Ku[e]=!0:(Yu[e]=!0,!1)}function hd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gd(e,t,n,r){if(t===null||typeof t>"u"||hd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ql=/[\-:]([a-z])/g;function Yl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ql,Yl);ae[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ql,Yl);ae[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ql,Yl);ae[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Kl(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gd(t,n,i,r)&&(n=null),r||i===null?md(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nr=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),Xl=Symbol.for("react.strict_mode"),Ko=Symbol.for("react.profiler"),Cs=Symbol.for("react.provider"),Es=Symbol.for("react.context"),Gl=Symbol.for("react.forward_ref"),Xo=Symbol.for("react.suspense"),Go=Symbol.for("react.suspense_list"),Zl=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),_s=Symbol.for("react.offscreen"),Xu=Symbol.iterator;function Ln(e){return e===null||typeof e!="object"?null:(e=Xu&&e[Xu]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,xo;function Bn(e){if(xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xo=t&&t[1]||""}return`
`+xo+e}var wo=!1;function ko(e,t){if(!e||wo)return"";wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=u);break}}}finally{wo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Bn(e):""}function vd(e){switch(e.tag){case 5:return Bn(e.type);case 16:return Bn("Lazy");case 13:return Bn("Suspense");case 19:return Bn("SuspenseList");case 0:case 2:case 15:return e=ko(e.type,!1),e;case 11:return e=ko(e.type.render,!1),e;case 1:return e=ko(e.type,!0),e;default:return""}}function Zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Gt:return"Portal";case Ko:return"Profiler";case Xl:return"StrictMode";case Xo:return"Suspense";case Go:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Es:return(e.displayName||"Context")+".Consumer";case Cs:return(e._context.displayName||"Context")+".Provider";case Gl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zl:return t=e.displayName||null,t!==null?t:Zo(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return Zo(e(t))}catch{}}return null}function yd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zo(t);case 8:return t===Xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xd(e){var t=Ps(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){e._valueTracker||(e._valueTracker=xd(e))}function zs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ps(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jo(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ts(e,t){t=t.checked,t!=null&&Kl(e,"checked",t,!1)}function qo(e,t){Ts(e,t);var n=Pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bo(e,t.type,n):t.hasOwnProperty("defaultValue")&&bo(e,t.type,Pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bo(e,t,n){(t!=="number"||di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vn=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function el(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ju(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Vn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pt(n)}}function Ns(e,t){var n=Pt(t.value),r=Pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function js(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?js(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,Ls=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wd=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){wd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function Os(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function $s(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Os(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kd=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(e,t){if(t){if(kd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function rl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,sn=null,cn=null;function bu(e){if(e=Cr(e)){if(typeof ol!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Vi(t),ol(e.stateNode,e.type,t))}}function Rs(e){sn?cn?cn.push(e):cn=[e]:sn=e}function Ms(){if(sn){var e=sn,t=cn;if(cn=sn=null,bu(e),t)for(e=0;e<t.length;e++)bu(t[e])}}function Is(e,t){return e(t)}function Fs(){}var So=!1;function Ds(e,t,n){if(So)return e(t,n);So=!0;try{return Is(e,t,n)}finally{So=!1,(sn!==null||cn!==null)&&(Fs(),Ms())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var ll=!1;if(ot)try{var On={};Object.defineProperty(On,"passive",{get:function(){ll=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{ll=!1}function Sd(e,t,n,r,i,o,l,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Yn=!1,pi=null,mi=!1,ul=null,Cd={onError:function(e){Yn=!0,pi=e}};function Ed(e,t,n,r,i,o,l,u,a){Yn=!1,pi=null,Sd.apply(Cd,arguments)}function _d(e,t,n,r,i,o,l,u,a){if(Ed.apply(this,arguments),Yn){if(Yn){var c=pi;Yn=!1,pi=null}else throw Error(k(198));mi||(mi=!0,ul=c)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function As(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ea(e){if(Yt(e)!==e)throw Error(k(188))}function Pd(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ea(i),e;if(o===r)return ea(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Us(e){return e=Pd(e),e!==null?Bs(e):null}function Bs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bs(e);if(t!==null)return t;e=e.sibling}return null}var Vs=Te.unstable_scheduleCallback,ta=Te.unstable_cancelCallback,zd=Te.unstable_shouldYield,Td=Te.unstable_requestPaint,Z=Te.unstable_now,Nd=Te.unstable_getCurrentPriorityLevel,ql=Te.unstable_ImmediatePriority,Hs=Te.unstable_UserBlockingPriority,hi=Te.unstable_NormalPriority,jd=Te.unstable_LowPriority,Ws=Te.unstable_IdlePriority,Di=null,Je=null;function Ld(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Di,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Rd,Od=Math.log,$d=Math.LN2;function Rd(e){return e>>>=0,e===0?32:31-(Od(e)/$d|0)|0}var Or=64,$r=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=Hn(u):(o&=l,o!==0&&(r=Hn(o)))}else l=n&~i,l!==0?r=Hn(l):o!==0&&(r=Hn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),i=1<<n,r|=e[n],t&=~i;return r}function Md(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-He(o),u=1<<l,a=i[l];a===-1?(!(u&n)||u&r)&&(i[l]=Md(u,t)):a<=t&&(e.expiredLanes|=u),o&=~u}}function al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qs(){var e=Or;return Or<<=1,!(Or&4194240)&&(Or=64),e}function Co(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function Fd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-He(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function bl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Ys(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ks,eu,Xs,Gs,Zs,sl=!1,Rr=[],yt=null,xt=null,wt=null,rr=new Map,ir=new Map,mt=[],Dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function na(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(t.pointerId)}}function $n(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Cr(t),t!==null&&eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ad(e,t,n,r,i){switch(t){case"focusin":return yt=$n(yt,e,t,n,r,i),!0;case"dragenter":return xt=$n(xt,e,t,n,r,i),!0;case"mouseover":return wt=$n(wt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return rr.set(o,$n(rr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ir.set(o,$n(ir.get(o)||null,e,t,n,r,i)),!0}return!1}function Js(e){var t=Mt(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=As(n),t!==null){e.blockedOn=t,Zs(e.priority,function(){Xs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);il=r,n.target.dispatchEvent(r),il=null}else return t=Cr(n),t!==null&&eu(t),e.blockedOn=n,!1;t.shift()}return!0}function ra(e,t,n){br(e)&&n.delete(t)}function Ud(){sl=!1,yt!==null&&br(yt)&&(yt=null),xt!==null&&br(xt)&&(xt=null),wt!==null&&br(wt)&&(wt=null),rr.forEach(ra),ir.forEach(ra)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,sl||(sl=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Ud)))}function or(e){function t(i){return Rn(i,e)}if(0<Rr.length){Rn(Rr[0],e);for(var n=1;n<Rr.length;n++){var r=Rr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yt!==null&&Rn(yt,e),xt!==null&&Rn(xt,e),wt!==null&&Rn(wt,e),rr.forEach(t),ir.forEach(t),n=0;n<mt.length;n++)r=mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mt.length&&(n=mt[0],n.blockedOn===null);)Js(n),n.blockedOn===null&&mt.shift()}var fn=st.ReactCurrentBatchConfig,vi=!0;function Bd(e,t,n,r){var i=F,o=fn.transition;fn.transition=null;try{F=1,tu(e,t,n,r)}finally{F=i,fn.transition=o}}function Vd(e,t,n,r){var i=F,o=fn.transition;fn.transition=null;try{F=4,tu(e,t,n,r)}finally{F=i,fn.transition=o}}function tu(e,t,n,r){if(vi){var i=cl(e,t,n,r);if(i===null)$o(e,t,r,yi,n),na(e,r);else if(Ad(i,e,t,n,r))r.stopPropagation();else if(na(e,r),t&4&&-1<Dd.indexOf(e)){for(;i!==null;){var o=Cr(i);if(o!==null&&Ks(o),o=cl(e,t,n,r),o===null&&$o(e,t,r,yi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else $o(e,t,r,null,n)}}var yi=null;function cl(e,t,n,r){if(yi=null,e=Jl(r),e=Mt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=As(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yi=e,null}function qs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nd()){case ql:return 1;case Hs:return 4;case hi:case jd:return 16;case Ws:return 536870912;default:return 16}default:return 16}}var gt=null,nu=null,ei=null;function bs(){if(ei)return ei;var e,t=nu,n=t.length,r,i="value"in gt?gt.value:gt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ei=i.slice(e,1<r?1-r:void 0)}function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function ia(){return!1}function je(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Mr:ia,this.isPropagationStopped=ia,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=je(En),Sr=K({},En,{view:0,detail:0}),Hd=je(Sr),Eo,_o,Mn,Ai=K({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mn&&(Mn&&e.type==="mousemove"?(Eo=e.screenX-Mn.screenX,_o=e.screenY-Mn.screenY):_o=Eo=0,Mn=e),Eo)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),oa=je(Ai),Wd=K({},Ai,{dataTransfer:0}),Qd=je(Wd),Yd=K({},Sr,{relatedTarget:0}),Po=je(Yd),Kd=K({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=je(Kd),Gd=K({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zd=je(Gd),Jd=K({},En,{data:0}),la=je(Jd),qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ep={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ep[e])?!!t[e]:!1}function iu(){return tp}var np=K({},Sr,{key:function(e){if(e.key){var t=qd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rp=je(np),ip=K({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ua=je(ip),op=K({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),lp=je(op),up=K({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),ap=je(up),sp=K({},Ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cp=je(sp),fp=[9,13,27,32],ou=ot&&"CompositionEvent"in window,Kn=null;ot&&"documentMode"in document&&(Kn=document.documentMode);var dp=ot&&"TextEvent"in window&&!Kn,ec=ot&&(!ou||Kn&&8<Kn&&11>=Kn),aa=" ",sa=!1;function tc(e,t){switch(e){case"keyup":return fp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function pp(e,t){switch(e){case"compositionend":return nc(t);case"keypress":return t.which!==32?null:(sa=!0,aa);case"textInput":return e=t.data,e===aa&&sa?null:e;default:return null}}function mp(e,t){if(Jt)return e==="compositionend"||!ou&&tc(e,t)?(e=bs(),ei=nu=gt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ec&&t.locale!=="ko"?null:t.data;default:return null}}var hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hp[e.type]:t==="textarea"}function rc(e,t,n,r){Rs(r),t=xi(t,"onChange"),0<t.length&&(n=new ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,lr=null;function gp(e){mc(e,0)}function Ui(e){var t=en(e);if(zs(t))return e}function vp(e,t){if(e==="change")return t}var ic=!1;if(ot){var zo;if(ot){var To="oninput"in document;if(!To){var fa=document.createElement("div");fa.setAttribute("oninput","return;"),To=typeof fa.oninput=="function"}zo=To}else zo=!1;ic=zo&&(!document.documentMode||9<document.documentMode)}function da(){Xn&&(Xn.detachEvent("onpropertychange",oc),lr=Xn=null)}function oc(e){if(e.propertyName==="value"&&Ui(lr)){var t=[];rc(t,lr,e,Jl(e)),Ds(gp,t)}}function yp(e,t,n){e==="focusin"?(da(),Xn=t,lr=n,Xn.attachEvent("onpropertychange",oc)):e==="focusout"&&da()}function xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(lr)}function wp(e,t){if(e==="click")return Ui(t)}function kp(e,t){if(e==="input"||e==="change")return Ui(t)}function Sp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qe=typeof Object.is=="function"?Object.is:Sp;function ur(e,t){if(Qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yo.call(t,i)||!Qe(e[i],t[i]))return!1}return!0}function pa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ma(e,t){var n=pa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pa(n)}}function lc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uc(){for(var e=window,t=di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=di(e.document)}return t}function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cp(e){var t=uc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lc(n.ownerDocument.documentElement,n)){if(r!==null&&lu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ma(n,o);var l=ma(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ep=ot&&"documentMode"in document&&11>=document.documentMode,qt=null,fl=null,Gn=null,dl=!1;function ha(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dl||qt==null||qt!==di(r)||(r=qt,"selectionStart"in r&&lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&ur(Gn,r)||(Gn=r,r=xi(fl,"onSelect"),0<r.length&&(t=new ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bt={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionend:Ir("Transition","TransitionEnd")},No={},ac={};ot&&(ac=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function Bi(e){if(No[e])return No[e];if(!bt[e])return e;var t=bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ac)return No[e]=t[n];return e}var sc=Bi("animationend"),cc=Bi("animationiteration"),fc=Bi("animationstart"),dc=Bi("transitionend"),pc=new Map,ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){pc.set(e,t),Qt(t,[e])}for(var jo=0;jo<ga.length;jo++){var Lo=ga[jo],_p=Lo.toLowerCase(),Pp=Lo[0].toUpperCase()+Lo.slice(1);Tt(_p,"on"+Pp)}Tt(sc,"onAnimationEnd");Tt(cc,"onAnimationIteration");Tt(fc,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(dc,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function va(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_d(r,t,void 0,e),e.currentTarget=null}function mc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==o&&i.isPropagationStopped())break e;va(i,u,c),o=a}else for(l=0;l<r.length;l++){if(u=r[l],a=u.instance,c=u.currentTarget,u=u.listener,a!==o&&i.isPropagationStopped())break e;va(i,u,c),o=a}}}if(mi)throw e=ul,mi=!1,ul=null,e}function B(e,t){var n=t[vl];n===void 0&&(n=t[vl]=new Set);var r=e+"__bubble";n.has(r)||(hc(t,e,2,!1),n.add(r))}function Oo(e,t,n){var r=0;t&&(r|=4),hc(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Fr]){e[Fr]=!0,Ss.forEach(function(n){n!=="selectionchange"&&(zp.has(n)||Oo(n,!1,e),Oo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,Oo("selectionchange",!1,t))}}function hc(e,t,n,r){switch(qs(t)){case 1:var i=Bd;break;case 4:i=Vd;break;default:i=tu}n=i.bind(null,t,n,e),i=void 0,!ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $o(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Mt(u),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}u=u.parentNode}}r=r.return}Ds(function(){var c=o,m=Jl(n),h=[];e:{var p=pc.get(e);if(p!==void 0){var w=ru,x=e;switch(e){case"keypress":if(ti(n)===0)break e;case"keydown":case"keyup":w=rp;break;case"focusin":x="focus",w=Po;break;case"focusout":x="blur",w=Po;break;case"beforeblur":case"afterblur":w=Po;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=oa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=lp;break;case sc:case cc:case fc:w=Xd;break;case dc:w=ap;break;case"scroll":w=Hd;break;case"wheel":w=cp;break;case"copy":case"cut":case"paste":w=Zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ua}var g=(t&4)!==0,N=!g&&e==="scroll",f=g?p!==null?p+"Capture":null:p;g=[];for(var s=c,d;s!==null;){d=s;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=nr(s,f),y!=null&&g.push(sr(s,y,d)))),N)break;s=s.return}0<g.length&&(p=new w(p,x,null,n,m),h.push({event:p,listeners:g}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==il&&(x=n.relatedTarget||n.fromElement)&&(Mt(x)||x[lt]))break e;if((w||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?Mt(x):null,x!==null&&(N=Yt(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(g=oa,y="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(g=ua,y="onPointerLeave",f="onPointerEnter",s="pointer"),N=w==null?p:en(w),d=x==null?p:en(x),p=new g(y,s+"leave",w,n,m),p.target=N,p.relatedTarget=d,y=null,Mt(m)===c&&(g=new g(f,s+"enter",x,n,m),g.target=d,g.relatedTarget=N,y=g),N=y,w&&x)t:{for(g=w,f=x,s=0,d=g;d;d=Xt(d))s++;for(d=0,y=f;y;y=Xt(y))d++;for(;0<s-d;)g=Xt(g),s--;for(;0<d-s;)f=Xt(f),d--;for(;s--;){if(g===f||f!==null&&g===f.alternate)break t;g=Xt(g),f=Xt(f)}g=null}else g=null;w!==null&&ya(h,p,w,g,!1),x!==null&&N!==null&&ya(h,N,x,g,!0)}}e:{if(p=c?en(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var C=vp;else if(ca(p))if(ic)C=kp;else{C=xp;var E=yp}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=wp);if(C&&(C=C(e,c))){rc(h,C,n,m);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&bo(p,"number",p.value)}switch(E=c?en(c):window,e){case"focusin":(ca(E)||E.contentEditable==="true")&&(qt=E,fl=c,Gn=null);break;case"focusout":Gn=fl=qt=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,ha(h,n,m);break;case"selectionchange":if(Ep)break;case"keydown":case"keyup":ha(h,n,m)}var S;if(ou)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Jt?tc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(ec&&n.locale!=="ko"&&(Jt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Jt&&(S=bs()):(gt=m,nu="value"in gt?gt.value:gt.textContent,Jt=!0)),E=xi(c,T),0<E.length&&(T=new la(T,e,null,n,m),h.push({event:T,listeners:E}),S?T.data=S:(S=nc(n),S!==null&&(T.data=S)))),(S=dp?pp(e,n):mp(e,n))&&(c=xi(c,"onBeforeInput"),0<c.length&&(m=new la("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=S))}mc(h,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=nr(e,n),o!=null&&r.unshift(sr(e,o,i)),o=nr(e,t),o!=null&&r.push(sr(e,o,i))),e=e.return}return r}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ya(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,i?(a=nr(n,o),a!=null&&l.unshift(sr(n,a,u))):i||(a=nr(n,o),a!=null&&l.push(sr(n,a,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Tp=/\r\n?/g,Np=/\u0000|\uFFFD/g;function xa(e){return(typeof e=="string"?e:""+e).replace(Tp,`
`).replace(Np,"")}function Dr(e,t,n){if(t=xa(t),xa(e)!==t&&n)throw Error(k(425))}function wi(){}var pl=null,ml=null;function hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gl=typeof setTimeout=="function"?setTimeout:void 0,jp=typeof clearTimeout=="function"?clearTimeout:void 0,wa=typeof Promise=="function"?Promise:void 0,Lp=typeof queueMicrotask=="function"?queueMicrotask:typeof wa<"u"?function(e){return wa.resolve(null).then(e).catch(Op)}:gl;function Op(e){setTimeout(function(){throw e})}function Ro(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);or(t)}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ka(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _n=Math.random().toString(36).slice(2),Ze="__reactFiber$"+_n,cr="__reactProps$"+_n,lt="__reactContainer$"+_n,vl="__reactEvents$"+_n,$p="__reactListeners$"+_n,Rp="__reactHandles$"+_n;function Mt(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ka(e);e!==null;){if(n=e[Ze])return n;e=ka(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[Ze]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Vi(e){return e[cr]||null}var yl=[],tn=-1;function Nt(e){return{current:e}}function V(e){0>tn||(e.current=yl[tn],yl[tn]=null,tn--)}function U(e,t){tn++,yl[tn]=e.current,e.current=t}var zt={},pe=Nt(zt),we=Nt(!1),Ut=zt;function gn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function ki(){V(we),V(pe)}function Sa(e,t,n){if(pe.current!==zt)throw Error(k(168));U(pe,t),U(we,n)}function gc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,yd(e)||"Unknown",i));return K({},n,r)}function Si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Ut=pe.current,U(pe,e),U(we,we.current),!0}function Ca(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=gc(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,V(we),V(pe),U(pe,e)):V(we),U(we,n)}var tt=null,Hi=!1,Mo=!1;function vc(e){tt===null?tt=[e]:tt.push(e)}function Mp(e){Hi=!0,vc(e)}function jt(){if(!Mo&&tt!==null){Mo=!0;var e=0,t=F;try{var n=tt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,Hi=!1}catch(i){throw tt!==null&&(tt=tt.slice(e+1)),Vs(ql,jt),i}finally{F=t,Mo=!1}}return null}var nn=[],rn=0,Ci=null,Ei=0,Oe=[],$e=0,Bt=null,nt=1,rt="";function $t(e,t){nn[rn++]=Ei,nn[rn++]=Ci,Ci=e,Ei=t}function yc(e,t,n){Oe[$e++]=nt,Oe[$e++]=rt,Oe[$e++]=Bt,Bt=e;var r=nt;e=rt;var i=32-He(r)-1;r&=~(1<<i),n+=1;var o=32-He(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,nt=1<<32-He(t)+i|n<<i|r,rt=o+e}else nt=1<<o|n<<i|r,rt=e}function uu(e){e.return!==null&&($t(e,1),yc(e,1,0))}function au(e){for(;e===Ci;)Ci=nn[--rn],nn[rn]=null,Ei=nn[--rn],nn[rn]=null;for(;e===Bt;)Bt=Oe[--$e],Oe[$e]=null,rt=Oe[--$e],Oe[$e]=null,nt=Oe[--$e],Oe[$e]=null}var Pe=null,_e=null,H=!1,Ve=null;function xc(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ea(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,_e=kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,_e=null,!0):!1;default:return!1}}function xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(H){var t=_e;if(t){var n=t;if(!Ea(e,t)){if(xl(e))throw Error(k(418));t=kt(n.nextSibling);var r=Pe;t&&Ea(e,t)?xc(r,n):(e.flags=e.flags&-4097|2,H=!1,Pe=e)}}else{if(xl(e))throw Error(k(418));e.flags=e.flags&-4097|2,H=!1,Pe=e}}}function _a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Ar(e){if(e!==Pe)return!1;if(!H)return _a(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hl(e.type,e.memoizedProps)),t&&(t=_e)){if(xl(e))throw wc(),Error(k(418));for(;t;)xc(e,t),t=kt(t.nextSibling)}if(_a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Pe?kt(e.stateNode.nextSibling):null;return!0}function wc(){for(var e=_e;e;)e=kt(e.nextSibling)}function vn(){_e=Pe=null,H=!1}function su(e){Ve===null?Ve=[e]:Ve.push(e)}var Ip=st.ReactCurrentBatchConfig;function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pa(e){var t=e._init;return t(e._payload)}function kc(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function i(f,s){return f=_t(f,s),f.index=0,f.sibling=null,f}function o(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,s,d,y){return s===null||s.tag!==6?(s=Vo(d,f.mode,y),s.return=f,s):(s=i(s,d),s.return=f,s)}function a(f,s,d,y){var C=d.type;return C===Zt?m(f,s,d.props.children,y,d.key):s!==null&&(s.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dt&&Pa(C)===s.type)?(y=i(s,d.props),y.ref=In(f,s,d),y.return=f,y):(y=ai(d.type,d.key,d.props,null,f.mode,y),y.ref=In(f,s,d),y.return=f,y)}function c(f,s,d,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Ho(d,f.mode,y),s.return=f,s):(s=i(s,d.children||[]),s.return=f,s)}function m(f,s,d,y,C){return s===null||s.tag!==7?(s=At(d,f.mode,y,C),s.return=f,s):(s=i(s,d),s.return=f,s)}function h(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Vo(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Nr:return d=ai(s.type,s.key,s.props,null,f.mode,d),d.ref=In(f,null,s),d.return=f,d;case Gt:return s=Ho(s,f.mode,d),s.return=f,s;case dt:var y=s._init;return h(f,y(s._payload),d)}if(Vn(s)||Ln(s))return s=At(s,f.mode,d,null),s.return=f,s;Ur(f,s)}return null}function p(f,s,d,y){var C=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return C!==null?null:u(f,s,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Nr:return d.key===C?a(f,s,d,y):null;case Gt:return d.key===C?c(f,s,d,y):null;case dt:return C=d._init,p(f,s,C(d._payload),y)}if(Vn(d)||Ln(d))return C!==null?null:m(f,s,d,y,null);Ur(f,d)}return null}function w(f,s,d,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,u(s,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Nr:return f=f.get(y.key===null?d:y.key)||null,a(s,f,y,C);case Gt:return f=f.get(y.key===null?d:y.key)||null,c(s,f,y,C);case dt:var E=y._init;return w(f,s,d,E(y._payload),C)}if(Vn(y)||Ln(y))return f=f.get(d)||null,m(s,f,y,C,null);Ur(s,y)}return null}function x(f,s,d,y){for(var C=null,E=null,S=s,T=s=0,A=null;S!==null&&T<d.length;T++){S.index>T?(A=S,S=null):A=S.sibling;var L=p(f,S,d[T],y);if(L===null){S===null&&(S=A);break}e&&S&&L.alternate===null&&t(f,S),s=o(L,s,T),E===null?C=L:E.sibling=L,E=L,S=A}if(T===d.length)return n(f,S),H&&$t(f,T),C;if(S===null){for(;T<d.length;T++)S=h(f,d[T],y),S!==null&&(s=o(S,s,T),E===null?C=S:E.sibling=S,E=S);return H&&$t(f,T),C}for(S=r(f,S);T<d.length;T++)A=w(S,f,T,d[T],y),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?T:A.key),s=o(A,s,T),E===null?C=A:E.sibling=A,E=A);return e&&S.forEach(function(De){return t(f,De)}),H&&$t(f,T),C}function g(f,s,d,y){var C=Ln(d);if(typeof C!="function")throw Error(k(150));if(d=C.call(d),d==null)throw Error(k(151));for(var E=C=null,S=s,T=s=0,A=null,L=d.next();S!==null&&!L.done;T++,L=d.next()){S.index>T?(A=S,S=null):A=S.sibling;var De=p(f,S,L.value,y);if(De===null){S===null&&(S=A);break}e&&S&&De.alternate===null&&t(f,S),s=o(De,s,T),E===null?C=De:E.sibling=De,E=De,S=A}if(L.done)return n(f,S),H&&$t(f,T),C;if(S===null){for(;!L.done;T++,L=d.next())L=h(f,L.value,y),L!==null&&(s=o(L,s,T),E===null?C=L:E.sibling=L,E=L);return H&&$t(f,T),C}for(S=r(f,S);!L.done;T++,L=d.next())L=w(S,f,T,L.value,y),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?T:L.key),s=o(L,s,T),E===null?C=L:E.sibling=L,E=L);return e&&S.forEach(function(Nn){return t(f,Nn)}),H&&$t(f,T),C}function N(f,s,d,y){if(typeof d=="object"&&d!==null&&d.type===Zt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Nr:e:{for(var C=d.key,E=s;E!==null;){if(E.key===C){if(C=d.type,C===Zt){if(E.tag===7){n(f,E.sibling),s=i(E,d.props.children),s.return=f,f=s;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dt&&Pa(C)===E.type){n(f,E.sibling),s=i(E,d.props),s.ref=In(f,E,d),s.return=f,f=s;break e}n(f,E);break}else t(f,E);E=E.sibling}d.type===Zt?(s=At(d.props.children,f.mode,y,d.key),s.return=f,f=s):(y=ai(d.type,d.key,d.props,null,f.mode,y),y.ref=In(f,s,d),y.return=f,f=y)}return l(f);case Gt:e:{for(E=d.key;s!==null;){if(s.key===E)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(f,s.sibling),s=i(s,d.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=Ho(d,f.mode,y),s.return=f,f=s}return l(f);case dt:return E=d._init,N(f,s,E(d._payload),y)}if(Vn(d))return x(f,s,d,y);if(Ln(d))return g(f,s,d,y);Ur(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(n(f,s.sibling),s=i(s,d),s.return=f,f=s):(n(f,s),s=Vo(d,f.mode,y),s.return=f,f=s),l(f)):n(f,s)}return N}var yn=kc(!0),Sc=kc(!1),_i=Nt(null),Pi=null,on=null,cu=null;function fu(){cu=on=Pi=null}function du(e){var t=_i.current;V(_i),e._currentValue=t}function kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){Pi=e,cu=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Ie(e){var t=e._currentValue;if(cu!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(Pi===null)throw Error(k(308));on=e,Pi.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var It=null;function pu(e){It===null?It=[e]:It.push(e)}function Cc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pu(t)):(n.next=i.next,i.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pt=!1;function mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ut(e,n)}return i=r.interleaved,i===null?(t.next=t,pu(r)):(t.next=i.next,i.next=t),r.interleaved=t,ut(e,n)}function ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bl(e,n)}}function za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zi(e,t,n,r){var i=e.updateQueue;pt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,c=a.next;a.next=null,l===null?o=c:l.next=c,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==l&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=a))}if(o!==null){var h=i.baseState;l=0,m=c=a=null,u=o;do{var p=u.lane,w=u.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:w,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,g=u;switch(p=t,w=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){h=x.call(w,h,p);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,p=typeof x=="function"?x.call(w,h,p):x,p==null)break e;h=K({},h,p);break e;case 2:pt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else w={eventTime:w,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=w,a=h):m=m.next=w,l|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(m===null&&(a=h),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ht|=l,e.lanes=l,e.memoizedState=h}}function Ta(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Er={},qe=Nt(Er),fr=Nt(Er),dr=Nt(Er);function Ft(e){if(e===Er)throw Error(k(174));return e}function hu(e,t){switch(U(dr,t),U(fr,e),U(qe,Er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tl(t,e)}V(qe),U(qe,t)}function xn(){V(qe),V(fr),V(dr)}function _c(e){Ft(dr.current);var t=Ft(qe.current),n=tl(t,e.type);t!==n&&(U(fr,e),U(qe,n))}function gu(e){fr.current===e&&(V(qe),V(fr))}var Q=Nt(0);function Ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Io=[];function vu(){for(var e=0;e<Io.length;e++)Io[e]._workInProgressVersionPrimary=null;Io.length=0}var ri=st.ReactCurrentDispatcher,Fo=st.ReactCurrentBatchConfig,Vt=0,Y=null,b=null,ne=null,Ni=!1,Zn=!1,pr=0,Fp=0;function se(){throw Error(k(321))}function yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qe(e[n],t[n]))return!1;return!0}function xu(e,t,n,r,i,o){if(Vt=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ri.current=e===null||e.memoizedState===null?Bp:Vp,e=n(r,i),Zn){o=0;do{if(Zn=!1,pr=0,25<=o)throw Error(k(301));o+=1,ne=b=null,t.updateQueue=null,ri.current=Hp,e=n(r,i)}while(Zn)}if(ri.current=ji,t=b!==null&&b.next!==null,Vt=0,ne=b=Y=null,Ni=!1,t)throw Error(k(300));return e}function wu(){var e=pr!==0;return pr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Y.memoizedState=ne=e:ne=ne.next=e,ne}function Fe(){if(b===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var t=ne===null?Y.memoizedState:ne.next;if(t!==null)ne=t,b=e;else{if(e===null)throw Error(k(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},ne===null?Y.memoizedState=ne=e:ne=ne.next=e}return ne}function mr(e,t){return typeof t=="function"?t(e):t}function Do(e){var t=Fe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=b,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,a=null,c=o;do{var m=c.lane;if((Vt&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=h,l=r):a=a.next=h,Y.lanes|=m,Ht|=m}c=c.next}while(c!==null&&c!==o);a===null?l=r:a.next=u,Qe(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,Ht|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ao(e){var t=Fe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Qe(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Pc(){}function zc(e,t){var n=Y,r=Fe(),i=t(),o=!Qe(r.memoizedState,i);if(o&&(r.memoizedState=i,xe=!0),r=r.queue,ku(jc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,hr(9,Nc.bind(null,n,r,i,t),void 0,null),re===null)throw Error(k(349));Vt&30||Tc(n,t,i)}return i}function Tc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nc(e,t,n,r){t.value=n,t.getSnapshot=r,Lc(t)&&Oc(e)}function jc(e,t,n){return n(function(){Lc(t)&&Oc(e)})}function Lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qe(e,n)}catch{return!0}}function Oc(e){var t=ut(e,1);t!==null&&We(t,e,1,-1)}function Na(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=Up.bind(null,Y,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $c(){return Fe().memoizedState}function ii(e,t,n,r){var i=Ke();Y.flags|=e,i.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Wi(e,t,n,r){var i=Fe();r=r===void 0?null:r;var o=void 0;if(b!==null){var l=b.memoizedState;if(o=l.destroy,r!==null&&yu(r,l.deps)){i.memoizedState=hr(t,n,o,r);return}}Y.flags|=e,i.memoizedState=hr(1|t,n,o,r)}function ja(e,t){return ii(8390656,8,e,t)}function ku(e,t){return Wi(2048,8,e,t)}function Rc(e,t){return Wi(4,2,e,t)}function Mc(e,t){return Wi(4,4,e,t)}function Ic(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fc(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4,4,Ic.bind(null,t,e),n)}function Su(){}function Dc(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ac(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uc(e,t,n){return Vt&21?(Qe(n,t)||(n=Qs(),Y.lanes|=n,Ht|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function Dp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Fo.transition;Fo.transition={};try{e(!1),t()}finally{F=n,Fo.transition=r}}function Bc(){return Fe().memoizedState}function Ap(e,t,n){var r=Et(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vc(e))Hc(t,n);else if(n=Cc(e,t,n,r),n!==null){var i=he();We(n,e,r,i),Wc(n,t,r)}}function Up(e,t,n){var r=Et(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vc(e))Hc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,Qe(u,l)){var a=t.interleaved;a===null?(i.next=i,pu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Cc(e,t,i,r),n!==null&&(i=he(),We(n,e,r,i),Wc(n,t,r))}}function Vc(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Hc(e,t){Zn=Ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bl(e,n)}}var ji={readContext:Ie,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Bp={readContext:Ie,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:ja,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ii(4194308,4,Ic.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return ii(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ap.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Na,useDebugValue:Su,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Na(!1),t=e[0];return e=Dp.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=Ke();if(H){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),re===null)throw Error(k(349));Vt&30||Tc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ja(jc.bind(null,r,o,e),[e]),r.flags|=2048,hr(9,Nc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ke(),t=re.identifierPrefix;if(H){var n=rt,r=nt;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Fp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vp={readContext:Ie,useCallback:Dc,useContext:Ie,useEffect:ku,useImperativeHandle:Fc,useInsertionEffect:Rc,useLayoutEffect:Mc,useMemo:Ac,useReducer:Do,useRef:$c,useState:function(){return Do(mr)},useDebugValue:Su,useDeferredValue:function(e){var t=Fe();return Uc(t,b.memoizedState,e)},useTransition:function(){var e=Do(mr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Pc,useSyncExternalStore:zc,useId:Bc,unstable_isNewReconciler:!1},Hp={readContext:Ie,useCallback:Dc,useContext:Ie,useEffect:ku,useImperativeHandle:Fc,useInsertionEffect:Rc,useLayoutEffect:Mc,useMemo:Ac,useReducer:Ao,useRef:$c,useState:function(){return Ao(mr)},useDebugValue:Su,useDeferredValue:function(e){var t=Fe();return b===null?t.memoizedState=e:Uc(t,b.memoizedState,e)},useTransition:function(){var e=Ao(mr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Pc,useSyncExternalStore:zc,useId:Bc,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Sl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qi={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=Et(e),o=it(r,i);o.payload=t,n!=null&&(o.callback=n),t=St(e,o,i),t!==null&&(We(t,e,i,r),ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=Et(e),o=it(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=St(e,o,i),t!==null&&(We(t,e,i,r),ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=Et(e),i=it(n,r);i.tag=2,t!=null&&(i.callback=t),t=St(e,i,r),t!==null&&(We(t,e,r,n),ni(t,e,r))}};function La(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ur(n,r)||!ur(i,o):!0}function Qc(e,t,n){var r=!1,i=zt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ie(o):(i=ke(t)?Ut:pe.current,r=t.contextTypes,o=(r=r!=null)?gn(e,i):zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Oa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qi.enqueueReplaceState(t,t.state,null)}function Cl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},mu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ie(o):(o=ke(t)?Ut:pe.current,i.context=gn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Sl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Qi.enqueueReplaceState(i,i.state,null),zi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=vd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Uo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function El(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wp=typeof WeakMap=="function"?WeakMap:Map;function Yc(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oi||(Oi=!0,Rl=r),El(e,t)},n}function Kc(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){El(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){El(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function $a(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=im.bind(null,e,t,n),t.then(e,e))}function Ra(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ma(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e)}var Qp=st.ReactCurrentOwner,xe=!1;function me(e,t,n,r){t.child=e===null?Sc(t,null,n,r):yn(t,e.child,n,r)}function Ia(e,t,n,r,i){n=n.render;var o=t.ref;return dn(t,i),r=xu(e,t,n,r,o,i),n=wu(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,at(e,t,i)):(H&&n&&uu(t),t.flags|=1,me(e,t,r,i),t.child)}function Fa(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ju(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Xc(e,t,o,r,i)):(e=ai(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ur,n(l,r)&&e.ref===t.ref)return at(e,t,i)}return t.flags|=1,e=_t(o,r),e.ref=t.ref,e.return=t,t.child=e}function Xc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ur(o,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,at(e,t,i)}return _l(e,t,n,r,i)}function Gc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(un,Ee),Ee|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(un,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(un,Ee),Ee|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(un,Ee),Ee|=r;return me(e,t,i,n),t.child}function Zc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,n,r,i){var o=ke(n)?Ut:pe.current;return o=gn(t,o),dn(t,i),n=xu(e,t,n,r,o,i),r=wu(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,at(e,t,i)):(H&&r&&uu(t),t.flags|=1,me(e,t,n,i),t.child)}function Da(e,t,n,r,i){if(ke(n)){var o=!0;Si(t)}else o=!1;if(dn(t,i),t.stateNode===null)oi(e,t),Qc(t,n,r),Cl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ie(c):(c=ke(n)?Ut:pe.current,c=gn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||a!==c)&&Oa(t,l,r,c),pt=!1;var p=t.memoizedState;l.state=p,zi(t,r,l,i),a=t.memoizedState,u!==r||p!==a||we.current||pt?(typeof m=="function"&&(Sl(t,n,m,r),a=t.memoizedState),(u=pt||La(t,n,u,r,p,a,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ec(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Ue(t.type,u),l.props=c,h=t.pendingProps,p=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ie(a):(a=ke(n)?Ut:pe.current,a=gn(t,a));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==h||p!==a)&&Oa(t,l,r,a),pt=!1,p=t.memoizedState,l.state=p,zi(t,r,l,i);var x=t.memoizedState;u!==h||p!==x||we.current||pt?(typeof w=="function"&&(Sl(t,n,w,r),x=t.memoizedState),(c=pt||La(t,n,c,r,p,x,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,o,i)}function Pl(e,t,n,r,i,o){Zc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ca(t,n,!1),at(e,t,o);r=t.stateNode,Qp.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=yn(t,e.child,null,o),t.child=yn(t,null,u,o)):me(e,t,u,o),t.memoizedState=r.state,i&&Ca(t,n,!0),t.child}function Jc(e){var t=e.stateNode;t.pendingContext?Sa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sa(e,t.context,!1),hu(e,t.containerInfo)}function Aa(e,t,n,r,i){return vn(),su(i),t.flags|=256,me(e,t,n,r),t.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function qc(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(Q,i&1),e===null)return wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Xi(l,r,0,null),e=At(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Tl(n),t.memoizedState=zl,e):Cu(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Yp(e,t,l,r,u,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=_t(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=_t(u,o):(o=At(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Tl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=zl,r}return o=e.child,e=o.sibling,r=_t(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cu(e,t){return t=Xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Br(e,t,n,r){return r!==null&&su(r),yn(t,e.child,null,n),e=Cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yp(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Uo(Error(k(422))),Br(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Xi({mode:"visible",children:r.children},i,0,null),o=At(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yn(t,e.child,null,l),t.child.memoizedState=Tl(l),t.memoizedState=zl,o);if(!(t.mode&1))return Br(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(k(419)),r=Uo(o,r,void 0),Br(e,t,l,r)}if(u=(l&e.childLanes)!==0,xe||u){if(r=re,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ut(e,i),We(r,e,i,-1))}return Nu(),r=Uo(Error(k(421))),Br(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=om.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=kt(i.nextSibling),Pe=t,H=!0,Ve=null,e!==null&&(Oe[$e++]=nt,Oe[$e++]=rt,Oe[$e++]=Bt,nt=e.id,rt=e.overflow,Bt=t),t=Cu(t,r.children),t.flags|=4096,t)}function Ua(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),kl(e.return,t,n)}function Bo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ua(e,n,t);else if(e.tag===19)Ua(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ti(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ti(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bo(t,!0,n,null,o);break;case"together":Bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function at(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ht|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=_t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kp(e,t,n){switch(t.tag){case 3:Jc(t),vn();break;case 5:_c(t);break;case 1:ke(t.type)&&Si(t);break;case 4:hu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(_i,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?qc(e,t,n):(U(Q,Q.current&1),e=at(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Gc(e,t,n)}return at(e,t,n)}var ef,Nl,tf,nf;ef=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nl=function(){};tf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ft(qe.current);var o=null;switch(n){case"input":i=Jo(e,i),r=Jo(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=el(e,i),r=el(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wi)}nl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var u=i[c];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(er.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(u=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(l in u)!u.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&u[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(er.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&B("scroll",e),o||u===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};nf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xp(e,t,n){var r=t.pendingProps;switch(au(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&ki(),ce(t),null;case 3:return r=t.stateNode,xn(),V(we),V(pe),vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(Fl(Ve),Ve=null))),Nl(e,t),ce(t),null;case 5:gu(t);var i=Ft(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)tf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ce(t),null}if(e=Ft(qe.current),Ar(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ze]=t,r[cr]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Wn.length;i++)B(Wn[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Gu(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":Ju(r,o),B("invalid",r)}nl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Dr(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Dr(r.textContent,u,e),i=["children",""+u]):er.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":jr(r),Zu(r,o,!0);break;case"textarea":jr(r),qu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=js(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ze]=t,e[cr]=r,ef(e,t,!1,!1),t.stateNode=e;e:{switch(l=rl(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wn.length;i++)B(Wn[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":Gu(e,r),i=Jo(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),B("invalid",e);break;case"textarea":Ju(e,r),i=el(e,r),B("invalid",e);break;default:i=r}nl(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var a=u[o];o==="style"?$s(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ls(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&tr(e,a):typeof a=="number"&&tr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(er.hasOwnProperty(o)?a!=null&&o==="onScroll"&&B("scroll",e):a!=null&&Kl(e,o,a,l))}switch(n){case"input":jr(e),Zu(e,r,!1);break;case"textarea":jr(e),qu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?an(e,!!r.multiple,o,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)nf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Ft(dr.current),Ft(qe.current),Ar(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ze]=t,(o=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r}return ce(t),null;case 13:if(V(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&_e!==null&&t.mode&1&&!(t.flags&128))wc(),vn(),t.flags|=98560,o=!1;else if(o=Ar(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ze]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Ve!==null&&(Fl(Ve),Ve=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ee===0&&(ee=3):Nu())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return xn(),Nl(e,t),e===null&&ar(t.stateNode.containerInfo),ce(t),null;case 10:return du(t.type._context),ce(t),null;case 17:return ke(t.type)&&ki(),ce(t),null;case 19:if(V(Q),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Fn(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ti(e),l!==null){for(t.flags|=128,Fn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>kn&&(t.flags|=128,r=!0,Fn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ti(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!H)return ce(t),null}else 2*Z()-o.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Fn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Tu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Gp(e,t){switch(au(t),t.tag){case 1:return ke(t.type)&&ki(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),V(we),V(pe),vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gu(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return xn(),null;case 10:return du(t.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var Vr=!1,de=!1,Zp=typeof WeakSet=="function"?WeakSet:Set,_=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function jl(e,t,n){try{n()}catch(r){X(e,t,r)}}var Ba=!1;function Jp(e,t){if(pl=vi,e=uc(),lu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,a=-1,c=0,m=0,h=e,p=null;t:for(;;){for(var w;h!==n||i!==0&&h.nodeType!==3||(u=l+i),h!==o||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(w=h.firstChild)!==null;)p=h,h=w;for(;;){if(h===e)break t;if(p===n&&++c===i&&(u=l),p===o&&++m===r&&(a=l),(w=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=w}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ml={focusedElem:e,selectionRange:n},vi=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,N=x.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ue(t.type,g),N);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){X(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=Ba,Ba=!1,x}function Jn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&jl(t,n,o)}i=i.next}while(i!==r)}}function Yi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ll(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rf(e){var t=e.alternate;t!==null&&(e.alternate=null,rf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[cr],delete t[vl],delete t[$p],delete t[Rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function of(e){return e.tag===5||e.tag===3||e.tag===4}function Va(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||of(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wi));else if(r!==4&&(e=e.child,e!==null))for(Ol(e,t,n),e=e.sibling;e!==null;)Ol(e,t,n),e=e.sibling}function $l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($l(e,t,n),e=e.sibling;e!==null;)$l(e,t,n),e=e.sibling}var oe=null,Be=!1;function ct(e,t,n){for(n=n.child;n!==null;)lf(e,t,n),n=n.sibling}function lf(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Di,n)}catch{}switch(n.tag){case 5:de||ln(n,t);case 6:var r=oe,i=Be;oe=null,ct(e,t,n),oe=r,Be=i,oe!==null&&(Be?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Be?(e=oe,n=n.stateNode,e.nodeType===8?Ro(e.parentNode,n):e.nodeType===1&&Ro(e,n),or(e)):Ro(oe,n.stateNode));break;case 4:r=oe,i=Be,oe=n.stateNode.containerInfo,Be=!0,ct(e,t,n),oe=r,Be=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&jl(n,t,l),i=i.next}while(i!==r)}ct(e,t,n);break;case 1:if(!de&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){X(n,t,u)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,ct(e,t,n),de=r):ct(e,t,n);break;default:ct(e,t,n)}}function Ha(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zp),t.forEach(function(r){var i=lm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:oe=u.stateNode,Be=!1;break e;case 3:oe=u.stateNode.containerInfo,Be=!0;break e;case 4:oe=u.stateNode.containerInfo,Be=!0;break e}u=u.return}if(oe===null)throw Error(k(160));lf(o,l,i),oe=null,Be=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){X(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uf(t,e),t=t.sibling}function uf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Ye(e),r&4){try{Jn(3,e,e.return),Yi(3,e)}catch(g){X(e,e.return,g)}try{Jn(5,e,e.return)}catch(g){X(e,e.return,g)}}break;case 1:Ae(t,e),Ye(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(Ae(t,e),Ye(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var i=e.stateNode;try{tr(i,"")}catch(g){X(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Ts(i,o),rl(u,l);var c=rl(u,o);for(l=0;l<a.length;l+=2){var m=a[l],h=a[l+1];m==="style"?$s(i,h):m==="dangerouslySetInnerHTML"?Ls(i,h):m==="children"?tr(i,h):Kl(i,m,h,c)}switch(u){case"input":qo(i,o);break;case"textarea":Ns(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?an(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?an(i,!!o.multiple,o.defaultValue,!0):an(i,!!o.multiple,o.multiple?[]:"",!1))}i[cr]=o}catch(g){X(e,e.return,g)}}break;case 6:if(Ae(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){X(e,e.return,g)}}break;case 3:if(Ae(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{or(t.containerInfo)}catch(g){X(e,e.return,g)}break;case 4:Ae(t,e),Ye(e);break;case 13:Ae(t,e),Ye(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Pu=Z())),r&4&&Ha(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(de=(c=de)||m,Ae(t,e),de=c):Ae(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(_=e,m=e.child;m!==null;){for(h=_=m;_!==null;){switch(p=_,w=p.child,p.tag){case 0:case 11:case 14:case 15:Jn(4,p,p.return);break;case 1:ln(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(g){X(r,n,g)}}break;case 5:ln(p,p.return);break;case 22:if(p.memoizedState!==null){Qa(h);continue}}w!==null?(w.return=p,_=w):Qa(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Os("display",l))}catch(g){X(e,e.return,g)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){X(e,e.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ae(t,e),Ye(e),r&4&&Ha(e);break;case 21:break;default:Ae(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(of(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(tr(i,""),r.flags&=-33);var o=Va(e);$l(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=Va(e);Ol(e,u,l);break;default:throw Error(k(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qp(e,t,n){_=e,af(e)}function af(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Vr;if(!l){var u=i.alternate,a=u!==null&&u.memoizedState!==null||de;u=Vr;var c=de;if(Vr=l,(de=a)&&!c)for(_=i;_!==null;)l=_,a=l.child,l.tag===22&&l.memoizedState!==null?Ya(i):a!==null?(a.return=l,_=a):Ya(i);for(;o!==null;)_=o,af(o),o=o.sibling;_=i,Vr=u,de=c}Wa(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):Wa(e)}}function Wa(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Yi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ta(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ta(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&or(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}de||t.flags&512&&Ll(t)}catch(p){X(t,t.return,p)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Qa(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Ya(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yi(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){X(t,i,a)}}var o=t.return;try{Ll(t)}catch(a){X(t,o,a)}break;case 5:var l=t.return;try{Ll(t)}catch(a){X(t,l,a)}}}catch(a){X(t,t.return,a)}if(t===e){_=null;break}var u=t.sibling;if(u!==null){u.return=t.return,_=u;break}_=t.return}}var bp=Math.ceil,Li=st.ReactCurrentDispatcher,Eu=st.ReactCurrentOwner,Me=st.ReactCurrentBatchConfig,R=0,re=null,q=null,ue=0,Ee=0,un=Nt(0),ee=0,gr=null,Ht=0,Ki=0,_u=0,qn=null,ye=null,Pu=0,kn=1/0,et=null,Oi=!1,Rl=null,Ct=null,Hr=!1,vt=null,$i=0,bn=0,Ml=null,li=-1,ui=0;function he(){return R&6?Z():li!==-1?li:li=Z()}function Et(e){return e.mode&1?R&2&&ue!==0?ue&-ue:Ip.transition!==null?(ui===0&&(ui=Qs()),ui):(e=F,e!==0||(e=window.event,e=e===void 0?16:qs(e.type)),e):1}function We(e,t,n,r){if(50<bn)throw bn=0,Ml=null,Error(k(185));kr(e,n,r),(!(R&2)||e!==re)&&(e===re&&(!(R&2)&&(Ki|=n),ee===4&&ht(e,ue)),Se(e,r),n===1&&R===0&&!(t.mode&1)&&(kn=Z()+500,Hi&&jt()))}function Se(e,t){var n=e.callbackNode;Id(e,t);var r=gi(e,e===re?ue:0);if(r===0)n!==null&&ta(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ta(n),t===1)e.tag===0?Mp(Ka.bind(null,e)):vc(Ka.bind(null,e)),Lp(function(){!(R&6)&&jt()}),n=null;else{switch(Ys(r)){case 1:n=ql;break;case 4:n=Hs;break;case 16:n=hi;break;case 536870912:n=Ws;break;default:n=hi}n=gf(n,sf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sf(e,t){if(li=-1,ui=0,R&6)throw Error(k(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=gi(e,e===re?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ri(e,r);else{t=r;var i=R;R|=2;var o=ff();(re!==e||ue!==t)&&(et=null,kn=Z()+500,Dt(e,t));do try{nm();break}catch(u){cf(e,u)}while(!0);fu(),Li.current=o,R=i,q!==null?t=0:(re=null,ue=0,t=ee)}if(t!==0){if(t===2&&(i=al(e),i!==0&&(r=i,t=Il(e,i))),t===1)throw n=gr,Dt(e,0),ht(e,r),Se(e,Z()),n;if(t===6)ht(e,r);else{if(i=e.current.alternate,!(r&30)&&!em(i)&&(t=Ri(e,r),t===2&&(o=al(e),o!==0&&(r=o,t=Il(e,o))),t===1))throw n=gr,Dt(e,0),ht(e,r),Se(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Rt(e,ye,et);break;case 3:if(ht(e,r),(r&130023424)===r&&(t=Pu+500-Z(),10<t)){if(gi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gl(Rt.bind(null,e,ye,et),t);break}Rt(e,ye,et);break;case 4:if(ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-He(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bp(r/1960))-r,10<r){e.timeoutHandle=gl(Rt.bind(null,e,ye,et),r);break}Rt(e,ye,et);break;case 5:Rt(e,ye,et);break;default:throw Error(k(329))}}}return Se(e,Z()),e.callbackNode===n?sf.bind(null,e):null}function Il(e,t){var n=qn;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=Ri(e,t),e!==2&&(t=ye,ye=n,t!==null&&Fl(t)),e}function Fl(e){ye===null?ye=e:ye.push.apply(ye,e)}function em(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Qe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ht(e,t){for(t&=~_u,t&=~Ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function Ka(e){if(R&6)throw Error(k(327));pn();var t=gi(e,0);if(!(t&1))return Se(e,Z()),null;var n=Ri(e,t);if(e.tag!==0&&n===2){var r=al(e);r!==0&&(t=r,n=Il(e,r))}if(n===1)throw n=gr,Dt(e,0),ht(e,t),Se(e,Z()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,ye,et),Se(e,Z()),null}function zu(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(kn=Z()+500,Hi&&jt())}}function Wt(e){vt!==null&&vt.tag===0&&!(R&6)&&pn();var t=R;R|=1;var n=Me.transition,r=F;try{if(Me.transition=null,F=1,e)return e()}finally{F=r,Me.transition=n,R=t,!(R&6)&&jt()}}function Tu(){Ee=un.current,V(un)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ki();break;case 3:xn(),V(we),V(pe),vu();break;case 5:gu(r);break;case 4:xn();break;case 13:V(Q);break;case 19:V(Q);break;case 10:du(r.type._context);break;case 22:case 23:Tu()}n=n.return}if(re=e,q=e=_t(e.current,null),ue=Ee=t,ee=0,gr=null,_u=Ki=Ht=0,ye=qn=null,It!==null){for(t=0;t<It.length;t++)if(n=It[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}It=null}return e}function cf(e,t){do{var n=q;try{if(fu(),ri.current=ji,Ni){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ni=!1}if(Vt=0,ne=b=Y=null,Zn=!1,pr=0,Eu.current=null,n===null||n.return===null){ee=1,gr=t,q=null;break}e:{var o=e,l=n.return,u=n,a=t;if(t=ue,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=u,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Ra(l);if(w!==null){w.flags&=-257,Ma(w,l,u,o,t),w.mode&1&&$a(o,c,t),t=w,a=c;var x=t.updateQueue;if(x===null){var g=new Set;g.add(a),t.updateQueue=g}else x.add(a);break e}else{if(!(t&1)){$a(o,c,t),Nu();break e}a=Error(k(426))}}else if(H&&u.mode&1){var N=Ra(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ma(N,l,u,o,t),su(wn(a,u));break e}}o=a=wn(a,u),ee!==4&&(ee=2),qn===null?qn=[o]:qn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Yc(o,a,t);za(o,f);break e;case 1:u=a;var s=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ct===null||!Ct.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Kc(o,u,t);za(o,y);break e}}o=o.return}while(o!==null)}pf(n)}catch(C){t=C,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function ff(){var e=Li.current;return Li.current=ji,e===null?ji:e}function Nu(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(Ht&268435455)&&!(Ki&268435455)||ht(re,ue)}function Ri(e,t){var n=R;R|=2;var r=ff();(re!==e||ue!==t)&&(et=null,Dt(e,t));do try{tm();break}catch(i){cf(e,i)}while(!0);if(fu(),R=n,Li.current=r,q!==null)throw Error(k(261));return re=null,ue=0,ee}function tm(){for(;q!==null;)df(q)}function nm(){for(;q!==null&&!zd();)df(q)}function df(e){var t=hf(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?pf(e):q=t,Eu.current=null}function pf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gp(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,q=null;return}}else if(n=Xp(n,t,Ee),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ee===0&&(ee=5)}function Rt(e,t,n){var r=F,i=Me.transition;try{Me.transition=null,F=1,rm(e,t,n,r)}finally{Me.transition=i,F=r}return null}function rm(e,t,n,r){do pn();while(vt!==null);if(R&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Fd(e,o),e===re&&(q=re=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hr||(Hr=!0,gf(hi,function(){return pn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var l=F;F=1;var u=R;R|=4,Eu.current=null,Jp(e,n),uf(n,e),Cp(ml),vi=!!pl,ml=pl=null,e.current=n,qp(n),Td(),R=u,F=l,Me.transition=o}else e.current=n;if(Hr&&(Hr=!1,vt=e,$i=i),o=e.pendingLanes,o===0&&(Ct=null),Ld(n.stateNode),Se(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oi)throw Oi=!1,e=Rl,Rl=null,e;return $i&1&&e.tag!==0&&pn(),o=e.pendingLanes,o&1?e===Ml?bn++:(bn=0,Ml=e):bn=0,jt(),null}function pn(){if(vt!==null){var e=Ys($i),t=Me.transition,n=F;try{if(Me.transition=null,F=16>e?16:e,vt===null)var r=!1;else{if(e=vt,vt=null,$i=0,R&6)throw Error(k(331));var i=R;for(R|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var u=o.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(_=c;_!==null;){var m=_;switch(m.tag){case 0:case 11:case 15:Jn(8,m,o)}var h=m.child;if(h!==null)h.return=m,_=h;else for(;_!==null;){m=_;var p=m.sibling,w=m.return;if(rf(m),m===c){_=null;break}if(p!==null){p.return=w,_=p;break}_=w}}}var x=o.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var N=g.sibling;g.sibling=null,g=N}while(g!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Jn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,_=f;break e}_=o.return}}var s=e.current;for(_=s;_!==null;){l=_;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,_=d;else e:for(l=s;_!==null;){if(u=_,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Yi(9,u)}}catch(C){X(u,u.return,C)}if(u===l){_=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,_=y;break e}_=u.return}}if(R=i,jt(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Di,e)}catch{}r=!0}return r}finally{F=n,Me.transition=t}}return!1}function Xa(e,t,n){t=wn(n,t),t=Yc(e,t,1),e=St(e,t,1),t=he(),e!==null&&(kr(e,1,t),Se(e,t))}function X(e,t,n){if(e.tag===3)Xa(e,e,n);else for(;t!==null;){if(t.tag===3){Xa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=wn(n,e),e=Kc(t,e,1),t=St(t,e,1),e=he(),t!==null&&(kr(t,1,e),Se(t,e));break}}t=t.return}}function im(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(ue&n)===n&&(ee===4||ee===3&&(ue&130023424)===ue&&500>Z()-Pu?Dt(e,0):_u|=n),Se(e,t)}function mf(e,t){t===0&&(e.mode&1?(t=$r,$r<<=1,!($r&130023424)&&($r=4194304)):t=1);var n=he();e=ut(e,t),e!==null&&(kr(e,t,n),Se(e,n))}function om(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mf(e,n)}function lm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),mf(e,n)}var hf;hf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,Kp(e,t,n);xe=!!(e.flags&131072)}else xe=!1,H&&t.flags&1048576&&yc(t,Ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oi(e,t),e=t.pendingProps;var i=gn(t,pe.current);dn(t,n),i=xu(null,t,r,e,i,n);var o=wu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(o=!0,Si(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mu(t),i.updater=Qi,t.stateNode=i,i._reactInternals=t,Cl(t,r,e,n),t=Pl(null,t,r,!0,o,n)):(t.tag=0,H&&o&&uu(t),me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=am(r),e=Ue(r,e),i){case 0:t=_l(null,t,r,e,n);break e;case 1:t=Da(null,t,r,e,n);break e;case 11:t=Ia(null,t,r,e,n);break e;case 14:t=Fa(null,t,r,Ue(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),_l(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Da(e,t,r,i,n);case 3:e:{if(Jc(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ec(e,t),zi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=wn(Error(k(423)),t),t=Aa(e,t,r,n,i);break e}else if(r!==i){i=wn(Error(k(424)),t),t=Aa(e,t,r,n,i);break e}else for(_e=kt(t.stateNode.containerInfo.firstChild),Pe=t,H=!0,Ve=null,n=Sc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===i){t=at(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return _c(t),e===null&&wl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,hl(r,i)?l=null:o!==null&&hl(r,o)&&(t.flags|=32),Zc(e,t),me(e,t,l,n),t.child;case 6:return e===null&&wl(t),null;case 13:return qc(e,t,n);case 4:return hu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Ia(e,t,r,i,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,U(_i,r._currentValue),r._currentValue=l,o!==null)if(Qe(o.value,l)){if(o.children===i.children&&!we.current){t=at(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=it(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kl(o.return,n,t),u.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),kl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,dn(t,n),i=Ie(i),r=r(i),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),Fa(e,t,r,i,n);case 15:return Xc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),oi(e,t),t.tag=1,ke(r)?(e=!0,Si(t)):e=!1,dn(t,n),Qc(t,r,i),Cl(t,r,i,n),Pl(null,t,r,!0,e,n);case 19:return bc(e,t,n);case 22:return Gc(e,t,n)}throw Error(k(156,t.tag))};function gf(e,t){return Vs(e,t)}function um(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new um(e,t,n,r)}function ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function am(e){if(typeof e=="function")return ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gl)return 11;if(e===Zl)return 14}return 2}function _t(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ai(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ju(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Zt:return At(n.children,i,o,t);case Xl:l=8,i|=8;break;case Ko:return e=Re(12,n,t,i|2),e.elementType=Ko,e.lanes=o,e;case Xo:return e=Re(13,n,t,i),e.elementType=Xo,e.lanes=o,e;case Go:return e=Re(19,n,t,i),e.elementType=Go,e.lanes=o,e;case _s:return Xi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cs:l=10;break e;case Es:l=9;break e;case Gl:l=11;break e;case Zl:l=14;break e;case dt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Re(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function At(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function Xi(e,t,n,r){return e=Re(22,e,r,t),e.elementType=_s,e.lanes=n,e.stateNode={isHidden:!1},e}function Vo(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function Ho(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Co(0),this.expirationTimes=Co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lu(e,t,n,r,i,o,l,u,a){return e=new sm(e,t,n,u,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Re(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(o),e}function cm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vf(e){if(!e)return zt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ke(n))return gc(e,n,t)}return t}function yf(e,t,n,r,i,o,l,u,a){return e=Lu(n,r,!0,e,i,o,l,u,a),e.context=vf(null),n=e.current,r=he(),i=Et(n),o=it(r,i),o.callback=t??null,St(n,o,i),e.current.lanes=i,kr(e,i,r),Se(e,r),e}function Gi(e,t,n,r){var i=t.current,o=he(),l=Et(i);return n=vf(n),t.context===null?t.context=n:t.pendingContext=n,t=it(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(i,t,l),e!==null&&(We(e,i,l,o),ni(e,i,l)),l}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ga(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ou(e,t){Ga(e,t),(e=e.alternate)&&Ga(e,t)}function fm(){return null}var xf=typeof reportError=="function"?reportError:function(e){console.error(e)};function $u(e){this._internalRoot=e}Zi.prototype.render=$u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Gi(e,t,null,null)};Zi.prototype.unmount=$u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Gi(null,e,null,null)}),t[lt]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mt.length&&t!==0&&t<mt[n].priority;n++);mt.splice(n,0,e),n===0&&Js(e)}};function Ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Za(){}function dm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Mi(l);o.call(c)}}var l=yf(t,r,e,0,null,!1,!1,"",Za);return e._reactRootContainer=l,e[lt]=l.current,ar(e.nodeType===8?e.parentNode:e),Wt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var c=Mi(a);u.call(c)}}var a=Lu(e,0,!1,null,null,!1,!1,"",Za);return e._reactRootContainer=a,e[lt]=a.current,ar(e.nodeType===8?e.parentNode:e),Wt(function(){Gi(t,a,n,r)}),a}function qi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var a=Mi(l);u.call(a)}}Gi(t,l,e,i)}else l=dm(n,t,e,i,r);return Mi(l)}Ks=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&(bl(t,n|1),Se(t,Z()),!(R&6)&&(kn=Z()+500,jt()))}break;case 13:Wt(function(){var r=ut(e,1);if(r!==null){var i=he();We(r,e,1,i)}}),Ou(e,1)}};eu=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=he();We(t,e,134217728,n)}Ou(e,134217728)}};Xs=function(e){if(e.tag===13){var t=Et(e),n=ut(e,t);if(n!==null){var r=he();We(n,e,t,r)}Ou(e,t)}};Gs=function(){return F};Zs=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};ol=function(e,t,n){switch(t){case"input":if(qo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vi(r);if(!i)throw Error(k(90));zs(r),qo(r,i)}}}break;case"textarea":Ns(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};Is=zu;Fs=Wt;var pm={usingClientEntryPoint:!1,Events:[Cr,en,Vi,Rs,Ms,zu]},Dn={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mm={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Us(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||fm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{Di=Wr.inject(mm),Je=Wr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pm;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(t))throw Error(k(200));return cm(e,t,null,n)};Ne.createRoot=function(e,t){if(!Ru(e))throw Error(k(299));var n=!1,r="",i=xf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Lu(e,1,!1,null,null,n,!1,r,i),e[lt]=t.current,ar(e.nodeType===8?e.parentNode:e),new $u(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Us(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Wt(e)};Ne.hydrate=function(e,t,n){if(!Ji(t))throw Error(k(200));return qi(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Ru(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=xf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=yf(t,null,e,1,n??null,i,!1,o,l),e[lt]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zi(t)};Ne.render=function(e,t,n){if(!Ji(t))throw Error(k(200));return qi(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Ji(e))throw Error(k(40));return e._reactRootContainer?(Wt(function(){qi(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};Ne.unstable_batchedUpdates=zu;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ji(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return qi(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function wf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wf)}catch(e){console.error(e)}}wf(),xs.exports=Ne;var hm=xs.exports,kf,Ja=hm;kf=Ja.createRoot,Ja.hydrateRoot;function Dl(){return Dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dl.apply(null,arguments)}function Sf(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var gm=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,vm=Sf(function(e){return gm.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ym=!1;function xm(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function wm(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var km=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!ym:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(wm(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=xm(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),fe="-ms-",Ii="-moz-",M="-webkit-",Cf="comm",Mu="rule",Iu="decl",Sm="@import",Ef="@keyframes",Cm="@layer",Em=Math.abs,bi=String.fromCharCode,_m=Object.assign;function Pm(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function _f(e){return e.trim()}function zm(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Al(e,t){return e.indexOf(t)}function le(e,t){return e.charCodeAt(t)|0}function vr(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function Fu(e){return e.length}function Qr(e,t){return t.push(e),e}function Tm(e,t){return e.map(t).join("")}var eo=1,Sn=1,Pf=0,Ce=0,J=0,Pn="";function to(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:eo,column:Sn,length:l,return:""}}function An(e,t){return _m(to("",null,null,"",null,null,0),e,{length:-e.length},t)}function Nm(){return J}function jm(){return J=Ce>0?le(Pn,--Ce):0,Sn--,J===10&&(Sn=1,eo--),J}function ze(){return J=Ce<Pf?le(Pn,Ce++):0,Sn++,J===10&&(Sn=1,eo++),J}function be(){return le(Pn,Ce)}function si(){return Ce}function _r(e,t){return vr(Pn,e,t)}function yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zf(e){return eo=Sn=1,Pf=Xe(Pn=e),Ce=0,[]}function Tf(e){return Pn="",e}function ci(e){return _f(_r(Ce-1,Ul(e===91?e+2:e===40?e+1:e)))}function Lm(e){for(;(J=be())&&J<33;)ze();return yr(e)>2||yr(J)>3?"":" "}function Om(e,t){for(;--t&&ze()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return _r(e,si()+(t<6&&be()==32&&ze()==32))}function Ul(e){for(;ze();)switch(J){case e:return Ce;case 34:case 39:e!==34&&e!==39&&Ul(J);break;case 40:e===41&&Ul(e);break;case 92:ze();break}return Ce}function $m(e,t){for(;ze()&&e+J!==57;)if(e+J===84&&be()===47)break;return"/*"+_r(t,Ce-1)+"*"+bi(e===47?e:ze())}function Rm(e){for(;!yr(be());)ze();return _r(e,Ce)}function Mm(e){return Tf(fi("",null,null,null,[""],e=zf(e),0,[0],e))}function fi(e,t,n,r,i,o,l,u,a){for(var c=0,m=0,h=l,p=0,w=0,x=0,g=1,N=1,f=1,s=0,d="",y=i,C=o,E=r,S=d;N;)switch(x=s,s=ze()){case 40:if(x!=108&&le(S,h-1)==58){Al(S+=I(ci(s),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:S+=ci(s);break;case 9:case 10:case 13:case 32:S+=Lm(x);break;case 92:S+=Om(si()-1,7);continue;case 47:switch(be()){case 42:case 47:Qr(Im($m(ze(),si()),t,n),a);break;default:S+="/"}break;case 123*g:u[c++]=Xe(S)*f;case 125*g:case 59:case 0:switch(s){case 0:case 125:N=0;case 59+m:f==-1&&(S=I(S,/\f/g,"")),w>0&&Xe(S)-h&&Qr(w>32?ba(S+";",r,n,h-1):ba(I(S," ","")+";",r,n,h-2),a);break;case 59:S+=";";default:if(Qr(E=qa(S,t,n,c,m,i,u,d,y=[],C=[],h),o),s===123)if(m===0)fi(S,t,E,E,y,o,h,u,C);else switch(p===99&&le(S,3)===110?100:p){case 100:case 108:case 109:case 115:fi(e,E,E,r&&Qr(qa(e,E,E,0,0,i,u,d,i,y=[],h),C),i,C,h,u,r?y:C);break;default:fi(S,E,E,E,[""],C,0,u,C)}}c=m=w=0,g=f=1,d=S="",h=l;break;case 58:h=1+Xe(S),w=x;default:if(g<1){if(s==123)--g;else if(s==125&&g++==0&&jm()==125)continue}switch(S+=bi(s),s*g){case 38:f=m>0?1:(S+="\f",-1);break;case 44:u[c++]=(Xe(S)-1)*f,f=1;break;case 64:be()===45&&(S+=ci(ze())),p=be(),m=h=Xe(d=S+=Rm(si())),s++;break;case 45:x===45&&Xe(S)==2&&(g=0)}}return o}function qa(e,t,n,r,i,o,l,u,a,c,m){for(var h=i-1,p=i===0?o:[""],w=Fu(p),x=0,g=0,N=0;x<r;++x)for(var f=0,s=vr(e,h+1,h=Em(g=l[x])),d=e;f<w;++f)(d=_f(g>0?p[f]+" "+s:I(s,/&\f/g,p[f])))&&(a[N++]=d);return to(e,t,n,i===0?Mu:u,a,c,m)}function Im(e,t,n){return to(e,t,n,Cf,bi(Nm()),vr(e,2,-2),0)}function ba(e,t,n,r){return to(e,t,n,Iu,vr(e,0,r),vr(e,r+1,-1),r)}function mn(e,t){for(var n="",r=Fu(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Fm(e,t,n,r){switch(e.type){case Cm:if(e.children.length)break;case Sm:case Iu:return e.return=e.return||e.value;case Cf:return"";case Ef:return e.return=e.value+"{"+mn(e.children,r)+"}";case Mu:e.value=e.props.join(",")}return Xe(n=mn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Dm(e){var t=Fu(e);return function(n,r,i,o){for(var l="",u=0;u<t;u++)l+=e[u](n,r,i,o)||"";return l}}function Am(e){return function(t){t.root||(t=t.return)&&e(t)}}var Um=function(t,n,r){for(var i=0,o=0;i=o,o=be(),i===38&&o===12&&(n[r]=1),!yr(o);)ze();return _r(t,Ce)},Bm=function(t,n){var r=-1,i=44;do switch(yr(i)){case 0:i===38&&be()===12&&(n[r]=1),t[r]+=Um(Ce-1,n,r);break;case 2:t[r]+=ci(i);break;case 4:if(i===44){t[++r]=be()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=bi(i)}while(i=ze());return t},Vm=function(t,n){return Tf(Bm(zf(t),n))},es=new WeakMap,Hm=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!es.get(r))&&!i){es.set(t,!0);for(var o=[],l=Vm(n,o),u=r.props,a=0,c=0;a<l.length;a++)for(var m=0;m<u.length;m++,c++)t.props[c]=o[a]?l[a].replace(/&\f/g,u[m]):u[m]+" "+l[a]}}},Wm=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Nf(e,t){switch(Pm(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Ii+e+fe+e+e;case 6828:case 4268:return M+e+fe+e+e;case 6165:return M+e+fe+"flex-"+e+e;case 5187:return M+e+I(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return M+e+fe+"flex-item-"+I(e,/flex-|-self/,"")+e;case 4675:return M+e+fe+"flex-line-pack"+I(e,/align-content|flex-|-self/,"")+e;case 5548:return M+e+fe+I(e,"shrink","negative")+e;case 5292:return M+e+fe+I(e,"basis","preferred-size")+e;case 6060:return M+"box-"+I(e,"-grow","")+M+e+fe+I(e,"grow","positive")+e;case 4554:return M+I(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Ii+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Al(e,"stretch")?Nf(I(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(le(e,t+1)!==115)break;case 6444:switch(le(e,Xe(e)-3-(~Al(e,"!important")&&10))){case 107:return I(e,":",":"+M)+e;case 101:return I(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(le(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+fe+"$2box$3")+e}break;case 5936:switch(le(e,t+11)){case 114:return M+e+fe+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+fe+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+fe+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return M+e+fe+e+e}return e}var Qm=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Iu:t.return=Nf(t.value,t.length);break;case Ef:return mn([An(t,{value:I(t.value,"@","@"+M)})],i);case Mu:if(t.length)return Tm(t.props,function(o){switch(zm(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return mn([An(t,{props:[I(o,/:(read-\w+)/,":"+Ii+"$1")]})],i);case"::placeholder":return mn([An(t,{props:[I(o,/:(plac\w+)/,":"+M+"input-$1")]}),An(t,{props:[I(o,/:(plac\w+)/,":"+Ii+"$1")]}),An(t,{props:[I(o,/:(plac\w+)/,fe+"input-$1")]})],i)}return""})}},Ym=[Qm],Km=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var N=g.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=t.stylisPlugins||Ym,o={},l,u=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var N=g.getAttribute("data-emotion").split(" "),f=1;f<N.length;f++)o[N[f]]=!0;u.push(g)});var a,c=[Hm,Wm];{var m,h=[Fm,Am(function(g){m.insert(g)})],p=Dm(c.concat(i,h)),w=function(N){return mn(Mm(N),p)};a=function(N,f,s,d){m=s,w(N?N+"{"+f.styles+"}":f.styles),d&&(x.inserted[f.name]=!0)}}var x={key:n,sheet:new km({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return x.sheet.hydrate(u),x},jf={exports:{}},D={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=typeof Symbol=="function"&&Symbol.for,Du=ie?Symbol.for("react.element"):60103,Au=ie?Symbol.for("react.portal"):60106,no=ie?Symbol.for("react.fragment"):60107,ro=ie?Symbol.for("react.strict_mode"):60108,io=ie?Symbol.for("react.profiler"):60114,oo=ie?Symbol.for("react.provider"):60109,lo=ie?Symbol.for("react.context"):60110,Uu=ie?Symbol.for("react.async_mode"):60111,uo=ie?Symbol.for("react.concurrent_mode"):60111,ao=ie?Symbol.for("react.forward_ref"):60112,so=ie?Symbol.for("react.suspense"):60113,Xm=ie?Symbol.for("react.suspense_list"):60120,co=ie?Symbol.for("react.memo"):60115,fo=ie?Symbol.for("react.lazy"):60116,Gm=ie?Symbol.for("react.block"):60121,Zm=ie?Symbol.for("react.fundamental"):60117,Jm=ie?Symbol.for("react.responder"):60118,qm=ie?Symbol.for("react.scope"):60119;function Le(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Du:switch(e=e.type,e){case Uu:case uo:case no:case io:case ro:case so:return e;default:switch(e=e&&e.$$typeof,e){case lo:case ao:case fo:case co:case oo:return e;default:return t}}case Au:return t}}}function Lf(e){return Le(e)===uo}D.AsyncMode=Uu;D.ConcurrentMode=uo;D.ContextConsumer=lo;D.ContextProvider=oo;D.Element=Du;D.ForwardRef=ao;D.Fragment=no;D.Lazy=fo;D.Memo=co;D.Portal=Au;D.Profiler=io;D.StrictMode=ro;D.Suspense=so;D.isAsyncMode=function(e){return Lf(e)||Le(e)===Uu};D.isConcurrentMode=Lf;D.isContextConsumer=function(e){return Le(e)===lo};D.isContextProvider=function(e){return Le(e)===oo};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Du};D.isForwardRef=function(e){return Le(e)===ao};D.isFragment=function(e){return Le(e)===no};D.isLazy=function(e){return Le(e)===fo};D.isMemo=function(e){return Le(e)===co};D.isPortal=function(e){return Le(e)===Au};D.isProfiler=function(e){return Le(e)===io};D.isStrictMode=function(e){return Le(e)===ro};D.isSuspense=function(e){return Le(e)===so};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===no||e===uo||e===io||e===ro||e===so||e===Xm||typeof e=="object"&&e!==null&&(e.$$typeof===fo||e.$$typeof===co||e.$$typeof===oo||e.$$typeof===lo||e.$$typeof===ao||e.$$typeof===Zm||e.$$typeof===Jm||e.$$typeof===qm||e.$$typeof===Gm)};D.typeOf=Le;jf.exports=D;var bm=jf.exports,Of=bm,e0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},t0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$f={};$f[Of.ForwardRef]=e0;$f[Of.Memo]=t0;var n0=!0;function r0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var Rf=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||n0===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},i0=function(t,n,r){Rf(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function o0(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var l0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},u0=!1,a0=/[A-Z]|^ms/g,s0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Mf=function(t){return t.charCodeAt(1)===45},ts=function(t){return t!=null&&typeof t!="boolean"},Wo=Sf(function(e){return Mf(e)?e:e.replace(a0,"-$&").toLowerCase()}),ns=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(s0,function(r,i,o){return Ge={name:i,styles:o,next:Ge},i})}return l0[t]!==1&&!Mf(t)&&typeof n=="number"&&n!==0?n+"px":n},c0="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function xr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return Ge={name:i.name,styles:i.styles,next:Ge},i.name;var o=n;if(o.styles!==void 0){var l=o.next;if(l!==void 0)for(;l!==void 0;)Ge={name:l.name,styles:l.styles,next:Ge},l=l.next;var u=o.styles+";";return u}return f0(e,t,n)}case"function":{if(e!==void 0){var a=Ge,c=n(e);return Ge=a,xr(e,t,c)}break}}var m=n;if(t==null)return m;var h=t[m];return h!==void 0?h:m}function f0(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=xr(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object"){var u=l;t!=null&&t[u]!==void 0?r+=o+"{"+t[u]+"}":ts(u)&&(r+=Wo(o)+":"+ns(o,u)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&u0)throw new Error(c0);if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)ts(l[a])&&(r+=Wo(o)+":"+ns(o,l[a])+";");else{var c=xr(e,t,l);switch(o){case"animation":case"animationName":{r+=Wo(o)+":"+c+";";break}default:r+=o+"{"+c+"}"}}}}return r}var rs=/label:\s*([^\s;{]+)\s*(;|$)/g,Ge;function If(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";Ge=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,i+=xr(n,t,o);else{var l=o;i+=l[0]}for(var u=1;u<e.length;u++)if(i+=xr(n,t,e[u]),r){var a=o;i+=a[u]}rs.lastIndex=0;for(var c="",m;(m=rs.exec(i))!==null;)c+="-"+m[1];var h=o0(i)+c;return{name:h,styles:i,next:Ge}}var d0=function(t){return t()},p0=Qu.useInsertionEffect?Qu.useInsertionEffect:!1,m0=p0||d0,Ff=W.createContext(typeof HTMLElement<"u"?Km({key:"css"}):null);Ff.Provider;var h0=function(t){return W.forwardRef(function(n,r){var i=W.useContext(Ff);return t(n,i,r)})},g0=W.createContext({});function v0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return If(t)}var Kt=function(){var t=v0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},y0=vm,x0=function(t){return t!=="theme"},is=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?y0:x0},os=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(l){return t.__emotion_forwardProp(l)&&o(l)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},w0=!1,k0=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Rf(n,r,i),m0(function(){return i0(n,r,i)}),null},S0=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,l;n!==void 0&&(o=n.label,l=n.target);var u=os(t,n,r),a=u||is(i),c=!a("as");return function(){var m=arguments,h=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&h.push("label:"+o+";"),m[0]==null||m[0].raw===void 0)h.push.apply(h,m);else{h.push(m[0][0]);for(var p=m.length,w=1;w<p;w++)h.push(m[w],m[0][w])}var x=h0(function(g,N,f){var s=c&&g.as||i,d="",y=[],C=g;if(g.theme==null){C={};for(var E in g)C[E]=g[E];C.theme=W.useContext(g0)}typeof g.className=="string"?d=r0(N.registered,y,g.className):g.className!=null&&(d=g.className+" ");var S=If(h.concat(y),N.registered,C);d+=N.key+"-"+S.name,l!==void 0&&(d+=" "+l);var T=c&&u===void 0?is(s):a,A={};for(var L in g)c&&L==="as"||T(L)&&(A[L]=g[L]);return A.className=d,f&&(A.ref=f),W.createElement(W.Fragment,null,W.createElement(k0,{cache:N,serialized:S,isStringTag:typeof s=="string"}),W.createElement(s,A))});return x.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=h,x.__emotion_forwardProp=u,Object.defineProperty(x,"toString",{value:function(){return l===void 0&&w0?"NO_COMPONENT_SELECTOR":"."+l}}),x.withComponent=function(g,N){return e(g,Dl({},n,N,{shouldForwardProp:os(x,N,!0)})).apply(void 0,h)},x}},C0=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],z=S0.bind();C0.forEach(function(e){z[e]=z(e)});const po=Kt`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,E0=Kt`
  0% {
    width: 0;
  }
  100% {
    width: 100px;
  }
`,_0=z.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e74c3c, #c0392b);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 6rem 1.5rem 3rem;
    min-height: auto;
  }
`,P0=z.div`
  flex: 1;
  padding: 2rem;
  animation: ${po} 0.4s ease-out;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
    order: 2;
  }
`,z0=z.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    height: 4px;
    background: #e74c3c;
    margin-top: 1rem;
    animation: ${E0} 0.6s ease-out forwards;
    width: 100px;
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 7vw, 2.5rem);
    
    &::after {
      margin: 1rem auto 0;
      width: 60px;
    }
  }
`,T0=z.p`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: #34495e;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  max-width: 600px;
  animation: ${po} 0.4s ease-out 0.2s both;

  @media (max-width: 768px) {
    margin: 0 auto 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`,N0=z.button`
  padding: clamp(0.8rem, 3vw, 1.2rem) clamp(1.5rem, 5vw, 2.5rem);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
  animation: ${po} 0.4s ease-out 0.3s both;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    
    &:hover {
      transform: none;
    }
  }
`,j0=z.div`
  flex: 1;
  padding: 2rem;
  animation: ${po} 0.4s ease-out 0.2s both;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, rgba(231, 76, 60, 0.1) 0%, rgba(231, 76, 60, 0) 70%);
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  img {
    max-width: 60%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: perspective(1000px) rotateY(-5deg);
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    order: 1;
    margin-bottom: 2rem;
    
    img {
      transform: none;
      max-width: 90%;
      margin: 0 auto;
      display: block;
      
      &:hover {
        transform: none;
      }
    }
  }
`,L0="/rep/assets/1-DrR02rAR.jpg",O0=()=>{const e=t=>{t.preventDefault();const n=document.getElementById("contact");n&&n.scrollIntoView({behavior:"smooth",block:"start"})};return v.jsxs(_0,{children:[v.jsxs(P0,{children:[v.jsx(z0,{children:"30 лет помогаю детям полюбить русский язык"}),v.jsx(T0,{children:"Индивидуальный подход к каждому ученику, душевная атмосфера и высокие результаты. Вместе откроем красоту родного языка."}),v.jsx(N0,{onClick:e,children:v.jsx("span",{children:"Записаться на пробный урок"})})]}),v.jsx(j0,{children:v.jsx("img",{src:L0,alt:"Преподаватель русского языка"})})]})},Df=Kt`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,$0=z.section`
  padding: 6rem 2rem;
  background: #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, rgba(195, 207, 226, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`,R0=z.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  color: #2c3e50;
  margin-bottom: 4rem;
  font-weight: 800;
  position: relative;
  animation: ${Df} 0.4s ease-out;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #e74c3c;
    margin: 1rem auto 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,M0=z.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
`,I0=z.div`
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  animation: ${Df} 0.4s ease-out forwards;
  animation-delay: ${e=>.1*(e.index+1)}s;
  opacity: 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(44, 62, 80, 0.05);
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    ${e=>e.iconColor&&`
      &::before {
        opacity: 0.1;
      }
    `}
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.iconColor||"#e74c3c"};
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    animation-delay: ${e=>.05*(e.index+1)}s;
    
    &:hover {
      transform: none;
    }
  }

  @media (hover: none) {
    &:hover {
      transform: none;
    }
  }
`,F0=z.div`
  font-size: clamp(2.5rem, 5vw, 3rem);
  color: ${e=>e.color||"#e74c3c"};
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    background: ${e=>e.color||"#e74c3c"}20;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    
    &::after {
      width: 40px;
      height: 40px;
    }
  }
`,D0=z.h3`
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
`,A0=z.p`
  color: #34495e;
  line-height: 1.8;
  position: relative;
  z-index: 1;
  font-size: clamp(0.9rem, 2vw, 1rem);

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,U0=()=>{const e=[{icon:"💝",title:"Душевное тепло и поддержка",description:"Создаю атмосферу, где каждый ребёнок чувствует себя ценным и важным, где ошибки — это часть пути к успеху",color:"#e74c3c"},{icon:"🤝",title:"Внимание к каждому",description:"Чутко отслеживаю прогресс и настроение ученика, адаптируя темп и методы обучения для максимального комфорта",color:"#3498db"},{icon:"🌱",title:"Бережное развитие",description:"Помогаю раскрыть природные способности ребёнка, укрепляя его уверенность в себе с каждым новым достижением",color:"#2ecc71"},{icon:"🎯",title:"Путь к успеху",description:"Вместе ставим цели и достигаем их, превращая сложные задачи в интересные вызовы, которые хочется преодолевать",color:"#f1c40f"},{icon:"🎨",title:"Творческий подход",description:"Использую увлекательные методики, которые делают обучение интересным и запоминающимся приключением",color:"#9b59b6"},{icon:"🤗",title:"Семейное участие",description:"Поддерживаю тесную связь с родителями, делясь успехами и совместно работая над развитием ребёнка",color:"#e67e22"}];return v.jsxs($0,{id:"benefits",children:[v.jsx(R0,{children:"Как я помогаю вашему ребёнку"}),v.jsx(M0,{children:e.map((t,n)=>v.jsxs(I0,{index:n,iconColor:t.color,children:[v.jsx(F0,{color:t.color,children:t.icon}),v.jsx(D0,{children:t.title}),v.jsx(A0,{children:t.description})]},n))})]})},zn=Kt`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,B0=z.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`,V0=z.div`
  max-width: 600px;
  margin: 0 auto;
  padding: clamp(1.5rem, 5vw, 3rem);
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  animation: ${zn} 0.4s ease-out;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e74c3c, #c0392b);
    border-radius: 20px 20px 0 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
    border-radius: 15px;
  }
`,H0=z.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 800;
  position: relative;
  animation: ${zn} 0.4s ease-out;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #e74c3c;
    margin: 1rem auto 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding-right: 30px;
  }
`,W0=z.p`
  text-align: center;
  color: #34495e;
  font-size: clamp(1rem, 2vw, 1.1rem);
  margin-bottom: 2rem;
  line-height: 1.6;
  animation: ${zn} 0.4s ease-out 0.1s both;
`,Q0=z.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,Yr=z.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: ${zn} 0.4s ease-out;
  animation-delay: ${e=>.05*e.index}s;
  opacity: 0;
  animation-fill-mode: forwards;
`,Kr=z.label`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #2c3e50;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '*';
    color: #e74c3c;
    font-size: 1.2em;
  }
`,Af=`
  padding: clamp(0.8rem, 2.5vw, 1rem);
  border: 2px solid rgba(44, 62, 80, 0.1);
  border-radius: 10px;
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  &:focus {
    outline: none;
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }

  &::placeholder {
    color: #95a5a6;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Qo=z.input`
  ${Af}
`,Y0=z.textarea`
  ${Af}
  min-height: 150px;
  resize: vertical;

  @media (max-width: 768px) {
    min-height: 120px;
  }
`,K0=z.button`
  padding: clamp(1rem, 3vw, 1.2rem) 2rem;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  animation: ${zn} 0.4s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  span {
    position: relative;
    z-index: 1;
  }

  &:disabled {
    background: #95a5a6;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    
    &:hover {
      transform: none;
    }
  }

  @media (hover: none) {
    &:hover {
      transform: none;
    }
  }
`,X0=z.div`
  text-align: center;
  color: #27ae60;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  padding: 1.5rem;
  background: rgba(39, 174, 96, 0.1);
  border-radius: 10px;
  margin-top: 1.5rem;
  animation: ${zn} 0.3s ease-out;
  border: 2px solid rgba(39, 174, 96, 0.2);

  &::before {
    content: '✓';
    display: block;
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: 0.5rem;
  }
`,G0=()=>{const[e,t]=W.useState({name:"",email:"",phone:"",message:""}),[n,r]=W.useState(!1),i=l=>{const{name:u,value:a}=l.target;t(c=>({...c,[u]:a}))},o=l=>{l.preventDefault(),console.log("Form submitted:",e),r(!0),t({name:"",email:"",phone:"",message:""})};return v.jsx(B0,{id:"contact",children:v.jsxs(V0,{children:[v.jsx(H0,{children:"Давайте начнём наш путь"}),v.jsx(W0,{children:"Запишитесь на пробный урок, и мы вместе создадим индивидуальную программу обучения для вашего ребёнка"}),v.jsxs(Q0,{onSubmit:o,children:[v.jsxs(Yr,{index:1,children:[v.jsx(Kr,{htmlFor:"name",children:"Как вас зовут?"}),v.jsx(Qo,{type:"text",id:"name",name:"name",value:e.name,onChange:i,required:!0,placeholder:"Ваше имя"})]}),v.jsxs(Yr,{index:2,children:[v.jsx(Kr,{htmlFor:"email",children:"Электронная почта"}),v.jsx(Qo,{type:"email",id:"email",name:"email",value:e.email,onChange:i,required:!0,placeholder:"example@mail.com"})]}),v.jsxs(Yr,{index:3,children:[v.jsx(Kr,{htmlFor:"phone",children:"Номер телефона"}),v.jsx(Qo,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:i,required:!0,placeholder:"+7 (___) ___-__-__"})]}),v.jsxs(Yr,{index:4,children:[v.jsx(Kr,{htmlFor:"message",children:"Расскажите о ваших целях"}),v.jsx(Y0,{id:"message",name:"message",value:e.message,onChange:i,required:!0,placeholder:"Поделитесь, чего вы хотите достичь, какие сложности испытываете, или задайте любые вопросы"})]}),v.jsx(K0,{type:"submit",children:v.jsx("span",{children:"Записаться на пробный урок"})})]}),n&&v.jsx(X0,{children:"Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время, чтобы обсудить все детали и ответить на ваши вопросы."})]})})},Tn=Kt`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Z0=Kt`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,J0=z.section`
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #fff 0%, #f5f7fa 100%);
  position: relative;
  overflow: hidden;
  margin-top: -2rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    margin-top: -1rem;
  }
`,q0=z.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  color: #2c3e50;
  margin-bottom: 4rem;
  font-weight: 800;
  position: relative;
  z-index: 2;
  animation: ${Tn} 0.4s ease-out;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #e74c3c;
    margin: 1rem auto 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,b0=z.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,eh=z.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: clamp(1.5rem, 5vw, 3rem);
  margin: 0 auto;
  max-width: 800px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: ${Z0} 0.3s ease-out;
  text-align: center;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  touch-action: pan-y pinch-zoom;

  &::before {
    content: '"';
    position: absolute;
    top: -30px;
    left: 30px;
    font-size: clamp(6rem, 10vw, 10rem);
    color: #e74c3c;
    opacity: 0.1;
    font-family: Georgia, serif;
    line-height: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    
    &::before {
      top: -20px;
      left: 20px;
    }
  }
`,th=z.div`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  border-radius: 50%;
  margin: 0 auto 2rem;
  overflow: hidden;
  border: 4px solid #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: ${Tn} 0.3s ease-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    margin: 0 auto 1.5rem;
  }
`,nh=z.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #34495e;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
  z-index: 1;
  animation: ${Tn} 0.3s ease-out 0.1s both;

  @media (max-width: 768px) {
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`,rh=z.h4`
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 700;
  animation: ${Tn} 0.3s ease-out 0.2s both;
`,ih=z.p`
  color: #e74c3c;
  font-weight: 600;
  margin-bottom: 2rem;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  animation: ${Tn} 0.3s ease-out 0.3s both;
`,oh=z.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  animation: ${Tn} 0.3s ease-out 0.4s both;
`,lh=z.button`
  background: ${e=>e.active?"#e74c3c":"transparent"};
  border: 2px solid #e74c3c;
  width: clamp(8px, 2vw, 12px);
  height: clamp(8px, 2vw, 12px);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #e74c3c;
    transform: scale(1.2);
  }

  @media (hover: none) {
    &:hover {
      transform: none;
    }
  }
`,ls=z.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  
  ${e=>e.direction==="prev"?"left: 0;":"right: 0;"}

  &:hover {
    background: #f8f9fa;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-50%) scale(1.1);
  }

  &::before {
    content: ${e=>e.direction==="prev"?'"←"':'"→"'};
    font-size: 1.5rem;
    color: #2c3e50;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,ft=[{name:"Елена Петрова",image:"https://placehold.co/200x200",info:"Мама ученицы 7 класса",text:"Я безмерно благодарна за то, как изменилось отношение моей дочери к русскому языку. Раньше это был самый нелюбимый предмет, а теперь она с удовольствием выполняет домашние задания и даже начала читать классическую литературу! Особенно ценно то, как учитель умеет поддержать и вдохновить ребёнка, найти подход и раскрыть его способности."},{name:"Михаил Иванов",image:"https://placehold.co/200x200",info:"Отец ученика с особенностями развития",text:"Мы долго искали преподавателя, который смог бы найти подход к нашему сыну. И мы так рады, что нашли! Благодаря чуткости, терпению и профессионализму учителя, наш ребёнок не только улучшил свои знания, но и стал более уверенным в себе. Каждый урок проходит в тёплой, доброжелательной атмосфере."},{name:"Анна Сидорова",image:"https://placehold.co/200x200",info:"Мама выпускницы, ЕГЭ на 98 баллов",text:"Подготовка к ЕГЭ - это всегда стресс, но благодаря нашему преподавателю этот период прошёл спокойно и продуктивно. Дочь не только блестяще сдала экзамен, но и сохранила любовь к предмету. Особенно ценно то, что учитель всегда была на связи, поддерживала и подбадривала в моменты неуверенности."},{name:"Дмитрий Николаев",image:"https://placehold.co/200x200",info:"Папа двух учеников",text:"Оба моих ребёнка занимаются у этого преподавателя, и я вижу, как по-разному она подходит к каждому из них, учитывая их характеры и способности. Старший сын уже победитель олимпиад, а младшая дочь, которая раньше стеснялась отвечать у доски, теперь с удовольствием участвует в школьных конкурсах чтецов."}],uh=()=>{const[e,t]=W.useState(0),[n,r]=W.useState(null),[i,o]=W.useState(null),l=()=>{t(p=>p===ft.length-1?0:p+1)},u=()=>{t(p=>p===0?ft.length-1:p-1)},a=p=>{t(p)},c=p=>{o(null),r(p.targetTouches[0].clientX)},m=p=>{o(p.targetTouches[0].clientX)},h=()=>{if(!n||!i)return;const p=n-i,w=p>50,x=p<-50;w&&l(),x&&u()};return W.useEffect(()=>{const p=setInterval(()=>{l()},5e3);return()=>clearInterval(p)},[e]),v.jsxs(J0,{id:"testimonials",children:[v.jsx(q0,{children:"Отзывы родителей"}),v.jsxs(b0,{children:[v.jsx(ls,{direction:"prev",onClick:u}),v.jsxs(eh,{onTouchStart:c,onTouchMove:m,onTouchEnd:h,children:[v.jsx(th,{children:v.jsx("img",{src:ft[e].image,alt:ft[e].name})}),v.jsx(nh,{children:ft[e].text}),v.jsx(rh,{children:ft[e].name}),v.jsx(ih,{children:ft[e].info}),v.jsx(oh,{children:ft.map((p,w)=>v.jsx(lh,{active:e===w,onClick:()=>a(w),"aria-label":`Go to testimonial ${w+1}`},w))})]}),v.jsx(ls,{direction:"next",onClick:l})]})]})},ah="/rep/assets/2-CHd4qoP9.jpg",mo=Kt`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,sh=z.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #fff 0%, #f5f7fa 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`,ch=z.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,fh=z.div`
  position: relative;
  animation: ${mo} 0.4s ease-out;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
    border-radius: 20px;
    opacity: 0.1;
    z-index: -1;
  }

  @media (max-width: 768px) {
    order: -1;
  }
`,dh=z.div`
  animation: ${mo} 0.4s ease-out 0.2s both;
`,ph=z.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 800;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #e74c3c;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    
    &::after {
      margin: 1rem auto 0;
    }
  }
`,us=z.div`
  color: #34495e;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`,mh=z.div`
  background: rgba(231, 76, 60, 0.1);
  border-left: 4px solid #e74c3c;
  padding: 1.5rem;
  border-radius: 0 10px 10px 0;
  margin: 2rem 0;
  font-style: italic;
  color: #2c3e50;
  animation: ${mo} 0.4s ease-out 0.4s both;

  @media (max-width: 768px) {
    text-align: left;
  }
`,hh=z.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  animation: ${mo} 0.4s ease-out 0.6s both;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Xr=z.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(44, 62, 80, 0.1);

  h3 {
    color: #e74c3c;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  p {
    color: #34495e;
    font-size: 0.9rem;
    margin: 0;
  }
`,gh=()=>v.jsx(sh,{id:"about",children:v.jsxs(ch,{children:[v.jsxs(dh,{children:[v.jsx(ph,{children:"С любовью к языку и ученикам"}),v.jsxs(us,{children:[v.jsx("p",{children:"Для меня преподавание — это не просто профессия, а истинное призвание, которому я посвятила более 30 лет своей жизни. За эти годы сотни моих учеников не только успешно освоили русский язык, но и открыли для себя его удивительную красоту и богатство."}),v.jsx("p",{children:"Особую гордость вызывает мой опыт работы с детьми, имеющими особенности здоровья. Именно эта работа научила меня безграничному терпению, чуткости и умению находить подход к каждому ребёнку. Я твёрдо верю, что каждый ученик способен достичь успеха, если создать для него правильную, поддерживающую атмосферу."})]}),v.jsx(mh,{children:"“В каждом ребёнке я вижу уникальную личность. Моя задача — не просто научить правилам языка, но и помочь ученику поверить в свои силы, раскрыть свой потенциал в доброжелательной и безопасной обстановке.”"}),v.jsx(us,{children:v.jsx("p",{children:"На моих уроках дети не только учатся, но и чувствуют себя комфортно и уверенно. Я стремлюсь создать атмосферу, где каждый может задать вопрос, не боясь ошибиться, где любопытство и стремление к знаниям всегда поощряются."})}),v.jsxs(hh,{children:[v.jsxs(Xr,{children:[v.jsx("h3",{children:"Признанный опыт"}),v.jsx("p",{children:"Заслуженный учитель РФ с высшей квалификационной категорией. Награждена почётными грамотами Министерства образования."})]}),v.jsxs(Xr,{children:[v.jsx("h3",{children:"Забота о каждом"}),v.jsx("p",{children:"Специализируюсь на работе с детьми разного уровня подготовки, включая особенные потребности в обучении."})]}),v.jsxs(Xr,{children:[v.jsx("h3",{children:"Индивидуальный подход"}),v.jsx("p",{children:"Разрабатываю персональные программы обучения, учитывая особенности и интересы каждого ученика."})]}),v.jsxs(Xr,{children:[v.jsx("h3",{children:"Результаты, которыми горжусь"}),v.jsx("p",{children:"Мои ученики регулярно становятся призёрами олимпиад и поступают в лучшие вузы страны."})]})]})]}),v.jsx(fh,{children:v.jsx("img",{src:ah,alt:"Преподаватель русского языка"})})]})}),vh=z.div`
  min-height: 100vh;
`,yh=z.header`
  background-color: ${e=>e.isMenuOpen?"#fff":"rgba(255, 255, 255, 0.95)"};
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,xh=z.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`,wh=z.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: bold;
  color: ${e=>(e.isMenuOpen,"#e74c3c")};
  transition: color 0.3s ease;
  z-index: 1001;

  &:hover {
    color: #c0392b;
  }
`,kh=z.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    opacity: ${e=>e.isOpen?"1":"0"};
    visibility: ${e=>e.isOpen?"visible":"hidden"};
    transition: all 0.3s ease;
    z-index: 999;
    padding: 5rem 2rem 2rem;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #e74c3c, #c0392b);
    }
  }
`,Sh=z.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`,Gr=z.a`
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: ${e=>e.active?"rgba(231, 76, 60, 0.1)":"transparent"};
  width: 100%;
  max-width: 300px;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #e74c3c;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:active {
    background: rgba(231, 76, 60, 0.1);
    transform: scale(0.98);
  }
  
  @media (min-width: 768px) {
    display: none;
  }
`,Zr=z.a`
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  padding: 0.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #e74c3c;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #e74c3c;

    &::after {
      width: 100%;
    }
  }
`,Ch=z.button`
  display: none;
  background: ${e=>e.isOpen?"#fff":"none"};
  border: none;
  cursor: pointer;
  width: 44px;
  height: 44px;
  position: relative;
  z-index: 1001;
  -webkit-tap-highlight-color: transparent;
  border-radius: 50%;
  box-shadow: ${e=>e.isOpen?"0 2px 8px rgba(0, 0, 0, 0.1)":"none"};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    background: ${e=>e.isOpen?"rgba(255, 255, 255, 0.9)":"transparent"};
    z-index: -1;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${e=>e.isOpen?"#e74c3c":"#2c3e50"};
    transition: all 0.3s ease;
    transform-origin: center;

    &:first-of-type {
      transform: ${e=>e.isOpen?"translateY(8px) rotate(45deg)":"none"};
    }

    &:nth-of-type(2) {
      opacity: ${e=>e.isOpen?"0":"1"};
    }

    &:last-of-type {
      transform: ${e=>e.isOpen?"translateY(-8px) rotate(-45deg)":"none"};
    }
  }

  &:active {
    span {
      background-color: #c0392b;
    }
  }
`,Eh=z.main`
  padding-top: 4rem;

  @media (max-width: 768px) {
    padding-top: 3.5rem;
  }
`,Un=z.section`
  scroll-margin-top: 5rem;

  @media (max-width: 768px) {
    scroll-margin-top: 4rem;
  }
`;function _h(){const[e,t]=W.useState(!1),[n,r]=W.useState(""),i=(o,l)=>{o.preventDefault();const u=document.getElementById(l);if(u){const m=u.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:m,behavior:"smooth"}),t(!1),r(l)}};return W.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),W.useEffect(()=>{const o=()=>{const u=["about","benefits","testimonials","contact"].find(a=>{const c=document.getElementById(a);if(c){const m=c.getBoundingClientRect();return m.top<=100&&m.bottom>=100}return!1});r(u||"")};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),v.jsxs(vh,{children:[v.jsx(yh,{isMenuOpen:e,children:v.jsxs(xh,{children:[v.jsx(wh,{isMenuOpen:e,children:"Русский Язык"}),v.jsxs(Sh,{children:[v.jsx(Zr,{href:"#about",onClick:o=>i(o,"about"),children:"Обо мне"}),v.jsx(Zr,{href:"#benefits",onClick:o=>i(o,"benefits"),children:"Преимущества"}),v.jsx(Zr,{href:"#testimonials",onClick:o=>i(o,"testimonials"),children:"Отзывы"}),v.jsx(Zr,{href:"#contact",onClick:o=>i(o,"contact"),children:"Записаться"})]}),v.jsxs(Ch,{onClick:()=>t(!e),isOpen:e,"aria-label":e?"Закрыть меню":"Открыть меню",children:[v.jsx("span",{}),v.jsx("span",{}),v.jsx("span",{})]})]})}),v.jsxs(kh,{isOpen:e,children:[v.jsx(Gr,{href:"#about",onClick:o=>i(o,"about"),active:n==="about",children:"Обо мне"}),v.jsx(Gr,{href:"#benefits",onClick:o=>i(o,"benefits"),active:n==="benefits",children:"Преимущества"}),v.jsx(Gr,{href:"#testimonials",onClick:o=>i(o,"testimonials"),active:n==="testimonials",children:"Отзывы"}),v.jsx(Gr,{href:"#contact",onClick:o=>i(o,"contact"),active:n==="contact",children:"Записаться"})]}),v.jsxs(Eh,{children:[v.jsx(Un,{children:v.jsx(O0,{})}),v.jsx(Un,{id:"about",children:v.jsx(gh,{})}),v.jsx(Un,{id:"benefits",children:v.jsx(U0,{})}),v.jsx(Un,{id:"testimonials",children:v.jsx(uh,{})}),v.jsx(Un,{id:"contact",children:v.jsx(G0,{})})]})]})}kf(document.getElementById("root")).render(v.jsx(W.StrictMode,{children:v.jsx(_h,{})}));
