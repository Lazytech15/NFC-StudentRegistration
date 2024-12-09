(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Vd={exports:{}},Ka={},Md={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function xw(){if(Wg)return Pe;Wg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),I=Symbol.iterator;function w(F){return F===null||typeof F!="object"?null:(F=I&&F[I]||F["@@iterator"],typeof F=="function"?F:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,U={};function L(F,Q,me){this.props=F,this.context=Q,this.refs=U,this.updater=me||P}L.prototype.isReactComponent={},L.prototype.setState=function(F,Q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Q,"setState")},L.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function W(){}W.prototype=L.prototype;function G(F,Q,me){this.props=F,this.context=Q,this.refs=U,this.updater=me||P}var ee=G.prototype=new W;ee.constructor=G,b(ee,L.prototype),ee.isPureReactComponent=!0;var ie=Array.isArray,ne=Object.prototype.hasOwnProperty,ae={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(F,Q,me){var Ae,ke={},Le=null,Ue=null;if(Q!=null)for(Ae in Q.ref!==void 0&&(Ue=Q.ref),Q.key!==void 0&&(Le=""+Q.key),Q)ne.call(Q,Ae)&&!x.hasOwnProperty(Ae)&&(ke[Ae]=Q[Ae]);var je=arguments.length-2;if(je===1)ke.children=me;else if(1<je){for(var We=Array(je),It=0;It<je;It++)We[It]=arguments[It+2];ke.children=We}if(F&&F.defaultProps)for(Ae in je=F.defaultProps,je)ke[Ae]===void 0&&(ke[Ae]=je[Ae]);return{$$typeof:n,type:F,key:Le,ref:Ue,props:ke,_owner:ae.current}}function A(F,Q){return{$$typeof:n,type:F.type,key:Q,ref:F.ref,props:F.props,_owner:F._owner}}function N(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function M(F){var Q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(me){return Q[me]})}var O=/\/+/g;function k(F,Q){return typeof F=="object"&&F!==null&&F.key!=null?M(""+F.key):Q.toString(36)}function qe(F,Q,me,Ae,ke){var Le=typeof F;(Le==="undefined"||Le==="boolean")&&(F=null);var Ue=!1;if(F===null)Ue=!0;else switch(Le){case"string":case"number":Ue=!0;break;case"object":switch(F.$$typeof){case n:case e:Ue=!0}}if(Ue)return Ue=F,ke=ke(Ue),F=Ae===""?"."+k(Ue,0):Ae,ie(ke)?(me="",F!=null&&(me=F.replace(O,"$&/")+"/"),qe(ke,Q,me,"",function(It){return It})):ke!=null&&(N(ke)&&(ke=A(ke,me+(!ke.key||Ue&&Ue.key===ke.key?"":(""+ke.key).replace(O,"$&/")+"/")+F)),Q.push(ke)),1;if(Ue=0,Ae=Ae===""?".":Ae+":",ie(F))for(var je=0;je<F.length;je++){Le=F[je];var We=Ae+k(Le,je);Ue+=qe(Le,Q,me,We,ke)}else if(We=w(F),typeof We=="function")for(F=We.call(F),je=0;!(Le=F.next()).done;)Le=Le.value,We=Ae+k(Le,je++),Ue+=qe(Le,Q,me,We,ke);else if(Le==="object")throw Q=String(F),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ue}function Tt(F,Q,me){if(F==null)return F;var Ae=[],ke=0;return qe(F,Ae,"","",function(Le){return Q.call(me,Le,ke++)}),Ae}function Mt(F){if(F._status===-1){var Q=F._result;Q=Q(),Q.then(function(me){(F._status===0||F._status===-1)&&(F._status=1,F._result=me)},function(me){(F._status===0||F._status===-1)&&(F._status=2,F._result=me)}),F._status===-1&&(F._status=0,F._result=Q)}if(F._status===1)return F._result.default;throw F._result}var $e={current:null},se={transition:null},_e={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:se,ReactCurrentOwner:ae};function le(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Tt,forEach:function(F,Q,me){Tt(F,function(){Q.apply(this,arguments)},me)},count:function(F){var Q=0;return Tt(F,function(){Q++}),Q},toArray:function(F){return Tt(F,function(Q){return Q})||[]},only:function(F){if(!N(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Pe.Component=L,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=G,Pe.StrictMode=i,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,Pe.act=le,Pe.cloneElement=function(F,Q,me){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Ae=b({},F.props),ke=F.key,Le=F.ref,Ue=F._owner;if(Q!=null){if(Q.ref!==void 0&&(Le=Q.ref,Ue=ae.current),Q.key!==void 0&&(ke=""+Q.key),F.type&&F.type.defaultProps)var je=F.type.defaultProps;for(We in Q)ne.call(Q,We)&&!x.hasOwnProperty(We)&&(Ae[We]=Q[We]===void 0&&je!==void 0?je[We]:Q[We])}var We=arguments.length-2;if(We===1)Ae.children=me;else if(1<We){je=Array(We);for(var It=0;It<We;It++)je[It]=arguments[It+2];Ae.children=je}return{$$typeof:n,type:F.type,key:ke,ref:Le,props:Ae,_owner:Ue}},Pe.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},Pe.createElement=S,Pe.createFactory=function(F){var Q=S.bind(null,F);return Q.type=F,Q},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(F){return{$$typeof:d,render:F}},Pe.isValidElement=N,Pe.lazy=function(F){return{$$typeof:E,_payload:{_status:-1,_result:F},_init:Mt}},Pe.memo=function(F,Q){return{$$typeof:_,type:F,compare:Q===void 0?null:Q}},Pe.startTransition=function(F){var Q=se.transition;se.transition={};try{F()}finally{se.transition=Q}},Pe.unstable_act=le,Pe.useCallback=function(F,Q){return $e.current.useCallback(F,Q)},Pe.useContext=function(F){return $e.current.useContext(F)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(F){return $e.current.useDeferredValue(F)},Pe.useEffect=function(F,Q){return $e.current.useEffect(F,Q)},Pe.useId=function(){return $e.current.useId()},Pe.useImperativeHandle=function(F,Q,me){return $e.current.useImperativeHandle(F,Q,me)},Pe.useInsertionEffect=function(F,Q){return $e.current.useInsertionEffect(F,Q)},Pe.useLayoutEffect=function(F,Q){return $e.current.useLayoutEffect(F,Q)},Pe.useMemo=function(F,Q){return $e.current.useMemo(F,Q)},Pe.useReducer=function(F,Q,me){return $e.current.useReducer(F,Q,me)},Pe.useRef=function(F){return $e.current.useRef(F)},Pe.useState=function(F){return $e.current.useState(F)},Pe.useSyncExternalStore=function(F,Q,me){return $e.current.useSyncExternalStore(F,Q,me)},Pe.useTransition=function(){return $e.current.useTransition()},Pe.version="18.3.1",Pe}var Gg;function Df(){return Gg||(Gg=1,Md.exports=xw()),Md.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function Nw(){if(Kg)return Ka;Kg=1;var n=Df(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(d,p,_){var E,I={},w=null,P=null;_!==void 0&&(w=""+_),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(P=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(I[E]=p[E]);if(d&&d.defaultProps)for(E in p=d.defaultProps,p)I[E]===void 0&&(I[E]=p[E]);return{$$typeof:e,type:d,key:w,ref:P,props:I,_owner:o.current}}return Ka.Fragment=t,Ka.jsx=h,Ka.jsxs=h,Ka}var Qg;function Dw(){return Qg||(Qg=1,Vd.exports=Nw()),Vd.exports}var R=Dw(),$=Df(),Yu={},Fd={exports:{}},sn={},Ud={exports:{}},jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function Ow(){return Xg||(Xg=1,function(n){function e(se,_e){var le=se.length;se.push(_e);e:for(;0<le;){var F=le-1>>>1,Q=se[F];if(0<o(Q,_e))se[F]=_e,se[le]=Q,le=F;else break e}}function t(se){return se.length===0?null:se[0]}function i(se){if(se.length===0)return null;var _e=se[0],le=se.pop();if(le!==_e){se[0]=le;e:for(var F=0,Q=se.length,me=Q>>>1;F<me;){var Ae=2*(F+1)-1,ke=se[Ae],Le=Ae+1,Ue=se[Le];if(0>o(ke,le))Le<Q&&0>o(Ue,ke)?(se[F]=Ue,se[Le]=le,F=Le):(se[F]=ke,se[Ae]=le,F=Ae);else if(Le<Q&&0>o(Ue,le))se[F]=Ue,se[Le]=le,F=Le;else break e}}return _e}function o(se,_e){var le=se.sortIndex-_e.sortIndex;return le!==0?le:se.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();n.unstable_now=function(){return h.now()-d}}var p=[],_=[],E=1,I=null,w=3,P=!1,b=!1,U=!1,L=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(se){for(var _e=t(_);_e!==null;){if(_e.callback===null)i(_);else if(_e.startTime<=se)i(_),_e.sortIndex=_e.expirationTime,e(p,_e);else break;_e=t(_)}}function ie(se){if(U=!1,ee(se),!b)if(t(p)!==null)b=!0,Mt(ne);else{var _e=t(_);_e!==null&&$e(ie,_e.startTime-se)}}function ne(se,_e){b=!1,U&&(U=!1,W(S),S=-1),P=!0;var le=w;try{for(ee(_e),I=t(p);I!==null&&(!(I.expirationTime>_e)||se&&!M());){var F=I.callback;if(typeof F=="function"){I.callback=null,w=I.priorityLevel;var Q=F(I.expirationTime<=_e);_e=n.unstable_now(),typeof Q=="function"?I.callback=Q:I===t(p)&&i(p),ee(_e)}else i(p);I=t(p)}if(I!==null)var me=!0;else{var Ae=t(_);Ae!==null&&$e(ie,Ae.startTime-_e),me=!1}return me}finally{I=null,w=le,P=!1}}var ae=!1,x=null,S=-1,A=5,N=-1;function M(){return!(n.unstable_now()-N<A)}function O(){if(x!==null){var se=n.unstable_now();N=se;var _e=!0;try{_e=x(!0,se)}finally{_e?k():(ae=!1,x=null)}}else ae=!1}var k;if(typeof G=="function")k=function(){G(O)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Tt=qe.port2;qe.port1.onmessage=O,k=function(){Tt.postMessage(null)}}else k=function(){L(O,0)};function Mt(se){x=se,ae||(ae=!0,k())}function $e(se,_e){S=L(function(){se(n.unstable_now())},_e)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){b||P||(b=!0,Mt(ne))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(se){switch(w){case 1:case 2:case 3:var _e=3;break;default:_e=w}var le=w;w=_e;try{return se()}finally{w=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,_e){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var le=w;w=se;try{return _e()}finally{w=le}},n.unstable_scheduleCallback=function(se,_e,le){var F=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?F+le:F):le=F,se){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=le+Q,se={id:E++,callback:_e,priorityLevel:se,startTime:le,expirationTime:Q,sortIndex:-1},le>F?(se.sortIndex=le,e(_,se),t(p)===null&&se===t(_)&&(U?(W(S),S=-1):U=!0,$e(ie,le-F))):(se.sortIndex=Q,e(p,se),b||P||(b=!0,Mt(ne))),se},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(se){var _e=w;return function(){var le=w;w=_e;try{return se.apply(this,arguments)}finally{w=le}}}}(jd)),jd}var Yg;function Lw(){return Yg||(Yg=1,Ud.exports=Ow()),Ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function bw(){if(Jg)return sn;Jg=1;var n=Df(),e=Lw();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},I={};function w(r){return p.call(I,r)?!0:p.call(E,r)?!1:_.test(r)?I[r]=!0:(E[r]=!0,!1)}function P(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function b(r,s,a,c){if(s===null||typeof s>"u"||P(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function U(r,s,a,c,f,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new U(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new U(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new U(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new U(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new U(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new U(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new U(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new U(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new U(r,5,!1,r.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function G(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(W,G);L[s]=new U(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(W,G);L[s]=new U(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(W,G);L[s]=new U(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new U(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new U(r,1,!1,r.toLowerCase(),null,!0,!0)});function ee(r,s,a,c){var f=L.hasOwnProperty(s)?L[s]:null;(f!==null?f.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(b(s,a,f,c)&&(a=null),c||f===null?w(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,c=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var ie=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),ae=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),M=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),Tt=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),$e=Symbol.for("react.offscreen"),se=Symbol.iterator;function _e(r){return r===null||typeof r!="object"?null:(r=se&&r[se]||r["@@iterator"],typeof r=="function"?r:null)}var le=Object.assign,F;function Q(r){if(F===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+r}var me=!1;function Ae(r,s){if(!r||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(q){var c=q}Reflect.construct(r,[],s)}else{try{s.call()}catch(q){c=q}r.call(s.prototype)}else{try{throw Error()}catch(q){c=q}r()}}catch(q){if(q&&c&&typeof q.stack=="string"){for(var f=q.stack.split(`
`),g=c.stack.split(`
`),v=f.length-1,C=g.length-1;1<=v&&0<=C&&f[v]!==g[C];)C--;for(;1<=v&&0<=C;v--,C--)if(f[v]!==g[C]){if(v!==1||C!==1)do if(v--,C--,0>C||f[v]!==g[C]){var D=`
`+f[v].replace(" at new "," at ");return r.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",r.displayName)),D}while(1<=v&&0<=C);break}}}finally{me=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Q(r):""}function ke(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function Le(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case ae:return"Portal";case A:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case qe:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case M:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case O:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Tt:return s=r.displayName||null,s!==null?s:Le(r.type)||"Memo";case Mt:s=r._payload,r=r._init;try{return Le(r(s))}catch{}}return null}function Ue(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function je(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function We(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function It(r){var s=We(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Er(r){r._valueTracker||(r._valueTracker=It(r))}function Ls(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=We(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Yr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function zi(r,s){var a=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function bs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=je(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ea(r,s){s=s.checked,s!=null&&ee(r,"checked",s,!1)}function ta(r,s){ea(r,s);var a=je(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Vs(r,s.type,a):s.hasOwnProperty("defaultValue")&&Vs(r,s.type,je(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Vl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Vs(r,s,a){(s!=="number"||Yr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var wr=Array.isArray;function Tr(r,s,a,c){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&c&&(r[a].defaultSelected=!0)}else{for(a=""+je(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function na(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ms(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(wr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:je(a)}}function Fs(r,s){var a=je(s.value),c=je(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function ra(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function mt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?mt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Ir,ia=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ir.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Jr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var $i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qi=["Webkit","ms","Moz","O"];Object.keys($i).forEach(function(r){qi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),$i[s]=$i[r]})});function sa(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||$i.hasOwnProperty(r)&&$i[r]?(""+s).trim():s+"px"}function oa(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=sa(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,f):r[a]=f}}var aa=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(r,s){if(s){if(aa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ua(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function Us(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var js=null,En=null,Zn=null;function Bs(r){if(r=Oa(r)){if(typeof js!="function")throw Error(t(280));var s=r.stateNode;s&&(s=du(s),js(r.stateNode,r.type,s))}}function er(r){En?Zn?Zn.push(r):Zn=[r]:En=r}function ca(){if(En){var r=En,s=Zn;if(Zn=En=null,Bs(r),s)for(r=0;r<s.length;r++)Bs(s[r])}}function Wi(r,s){return r(s)}function ha(){}var Sr=!1;function da(r,s,a){if(Sr)return r(s,a);Sr=!0;try{return Wi(r,s,a)}finally{Sr=!1,(En!==null||Zn!==null)&&(ha(),ca())}}function at(r,s){var a=r.stateNode;if(a===null)return null;var c=du(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var zs=!1;if(d)try{var On={};Object.defineProperty(On,"passive",{get:function(){zs=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{zs=!1}function Gi(r,s,a,c,f,g,v,C,D){var q=Array.prototype.slice.call(arguments,3);try{s.apply(a,q)}catch(J){this.onError(J)}}var Ki=!1,$s=null,Ln=!1,fa=null,ch={onError:function(r){Ki=!0,$s=r}};function qs(r,s,a,c,f,g,v,C,D){Ki=!1,$s=null,Gi.apply(ch,arguments)}function Ml(r,s,a,c,f,g,v,C,D){if(qs.apply(this,arguments),Ki){if(Ki){var q=$s;Ki=!1,$s=null}else throw Error(t(198));Ln||(Ln=!0,fa=q)}}function bn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Qi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Vn(r){if(bn(r)!==r)throw Error(t(188))}function Fl(r){var s=r.alternate;if(!s){if(s=bn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Vn(f),r;if(g===c)return Vn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var v=!1,C=f.child;C;){if(C===a){v=!0,a=f,c=g;break}if(C===c){v=!0,c=f,a=g;break}C=C.sibling}if(!v){for(C=g.child;C;){if(C===a){v=!0,a=g,c=f;break}if(C===c){v=!0,c=g,a=f;break}C=C.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function pa(r){return r=Fl(r),r!==null?Hs(r):null}function Hs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Hs(r);if(s!==null)return s;r=r.sibling}return null}var Ws=e.unstable_scheduleCallback,ma=e.unstable_cancelCallback,Ul=e.unstable_shouldYield,hh=e.unstable_requestPaint,Ge=e.unstable_now,jl=e.unstable_getCurrentPriorityLevel,Xi=e.unstable_ImmediatePriority,Zr=e.unstable_UserBlockingPriority,wn=e.unstable_NormalPriority,ga=e.unstable_LowPriority,Bl=e.unstable_IdlePriority,Yi=null,cn=null;function zl(r){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Yi,r,void 0,(r.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:ql,_a=Math.log,$l=Math.LN2;function ql(r){return r>>>=0,r===0?32:31-(_a(r)/$l|0)|0}var Gs=64,Ks=4194304;function ei(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ji(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,f=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var C=v&~f;C!==0?c=ei(C):(g&=v,g!==0&&(c=ei(g)))}else v=a&~f,v!==0?c=ei(v):g!==0&&(c=ei(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&f)&&(f=c&-c,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Wt(s),f=1<<a,c|=r[a],s&=~f;return c}function dh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-Wt(g),C=1<<v,D=f[v];D===-1?(!(C&a)||C&c)&&(f[v]=dh(C,s)):D<=s&&(r.expiredLanes|=C),g&=~C}}function hn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Zi(){var r=Gs;return Gs<<=1,!(Gs&4194240)&&(Gs=64),r}function ti(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ni(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Wt(s),r[s]=a}function He(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Wt(a),g=1<<f;s[f]=0,c[f]=-1,r[f]=-1,a&=~g}}function ri(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Wt(a),f=1<<c;f&s|r[c]&s&&(r[c]|=s),a&=~f}}var De=0;function ii(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Hl,Qs,Wl,Gl,Kl,ya=!1,tr=[],Pt=null,Mn=null,Fn=null,si=new Map,Tn=new Map,nr=[],fh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ql(r,s){switch(r){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":si.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(s.pointerId)}}function Yt(r,s,a,c,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Oa(s),s!==null&&Qs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function ph(r,s,a,c,f){switch(s){case"focusin":return Pt=Yt(Pt,r,s,a,c,f),!0;case"dragenter":return Mn=Yt(Mn,r,s,a,c,f),!0;case"mouseover":return Fn=Yt(Fn,r,s,a,c,f),!0;case"pointerover":var g=f.pointerId;return si.set(g,Yt(si.get(g)||null,r,s,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Tn.set(g,Yt(Tn.get(g)||null,r,s,a,c,f)),!0}return!1}function Xl(r){var s=is(r.target);if(s!==null){var a=bn(s);if(a!==null){if(s=a.tag,s===13){if(s=Qi(a),s!==null){r.blockedOn=s,Kl(r.priority,function(){Wl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Cr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Xs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Hi=c,a.target.dispatchEvent(c),Hi=null}else return s=Oa(a),s!==null&&Qs(s),r.blockedOn=a,!1;s.shift()}return!0}function es(r,s,a){Cr(r)&&a.delete(s)}function Yl(){ya=!1,Pt!==null&&Cr(Pt)&&(Pt=null),Mn!==null&&Cr(Mn)&&(Mn=null),Fn!==null&&Cr(Fn)&&(Fn=null),si.forEach(es),Tn.forEach(es)}function Un(r,s){r.blockedOn===s&&(r.blockedOn=null,ya||(ya=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Yl)))}function jn(r){function s(f){return Un(f,r)}if(0<tr.length){Un(tr[0],r);for(var a=1;a<tr.length;a++){var c=tr[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Pt!==null&&Un(Pt,r),Mn!==null&&Un(Mn,r),Fn!==null&&Un(Fn,r),si.forEach(s),Tn.forEach(s),a=0;a<nr.length;a++)c=nr[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<nr.length&&(a=nr[0],a.blockedOn===null);)Xl(a),a.blockedOn===null&&nr.shift()}var Ar=ie.ReactCurrentBatchConfig,oi=!0;function Je(r,s,a,c){var f=De,g=Ar.transition;Ar.transition=null;try{De=1,va(r,s,a,c)}finally{De=f,Ar.transition=g}}function mh(r,s,a,c){var f=De,g=Ar.transition;Ar.transition=null;try{De=4,va(r,s,a,c)}finally{De=f,Ar.transition=g}}function va(r,s,a,c){if(oi){var f=Xs(r,s,a,c);if(f===null)Ch(r,s,c,ts,a),Ql(r,c);else if(ph(f,r,s,a,c))c.stopPropagation();else if(Ql(r,c),s&4&&-1<fh.indexOf(r)){for(;f!==null;){var g=Oa(f);if(g!==null&&Hl(g),g=Xs(r,s,a,c),g===null&&Ch(r,s,c,ts,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else Ch(r,s,c,null,a)}}var ts=null;function Xs(r,s,a,c){if(ts=null,r=Us(c),r=is(r),r!==null)if(s=bn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Qi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return ts=r,null}function Ea(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jl()){case Xi:return 1;case Zr:return 4;case wn:case ga:return 16;case Bl:return 536870912;default:return 16}default:return 16}}var dn=null,Ys=null,Jt=null;function wa(){if(Jt)return Jt;var r,s=Ys,a=s.length,c,f="value"in dn?dn.value:dn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===f[g-c];c++);return Jt=f.slice(r,1<c?1-c:void 0)}function Js(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function rr(){return!0}function Ta(){return!1}function xt(r){function s(a,c,f,g,v){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var C in r)r.hasOwnProperty(C)&&(a=r[C],this[C]=a?a(g):g[C]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?rr:Ta,this.isPropagationStopped=Ta,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),s}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=xt(Bn),ir=le({},Bn,{view:0,detail:0}),gh=xt(ir),eo,kr,ai,ns=le({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ai&&(ai&&r.type==="mousemove"?(eo=r.screenX-ai.screenX,kr=r.screenY-ai.screenY):kr=eo=0,ai=r),eo)},movementY:function(r){return"movementY"in r?r.movementY:kr}}),to=xt(ns),Ia=le({},ns,{dataTransfer:0}),Jl=xt(Ia),no=le({},ir,{relatedTarget:0}),ro=xt(no),Zl=le({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pr=xt(Zl),eu=le({},Bn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),tu=xt(eu),nu=le({},Bn,{data:0}),Sa=xt(nu),io={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ru={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ru[r])?!!s[r]:!1}function sr(){return iu}var u=le({},ir,{key:function(r){if(r.key){var s=io[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Js(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Gt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(r){return r.type==="keypress"?Js(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Js(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=xt(u),y=le({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=xt(y),j=le({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr}),H=xt(j),re=le({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ze=xt(re),_t=le({},ns,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),be=xt(_t),St=[9,13,27,32],ht=d&&"CompositionEvent"in window,In=null;d&&"documentMode"in document&&(In=document.documentMode);var fn=d&&"TextEvent"in window&&!In,rs=d&&(!ht||In&&8<In&&11>=In),so=" ",jp=!1;function Bp(r,s){switch(r){case"keyup":return St.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var oo=!1;function AE(r,s){switch(r){case"compositionend":return zp(s);case"keypress":return s.which!==32?null:(jp=!0,so);case"textInput":return r=s.data,r===so&&jp?null:r;default:return null}}function kE(r,s){if(oo)return r==="compositionend"||!ht&&Bp(r,s)?(r=wa(),Jt=Ys=dn=null,oo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return rs&&s.locale!=="ko"?null:s.data;default:return null}}var PE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!PE[r.type]:s==="textarea"}function qp(r,s,a,c){er(c),s=uu(s,"onChange"),0<s.length&&(a=new Zs("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Ra=null,Ca=null;function xE(r){lm(r,0)}function su(r){var s=ho(r);if(Ls(s))return r}function NE(r,s){if(r==="change")return s}var Hp=!1;if(d){var _h;if(d){var yh="oninput"in document;if(!yh){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),yh=typeof Wp.oninput=="function"}_h=yh}else _h=!1;Hp=_h&&(!document.documentMode||9<document.documentMode)}function Gp(){Ra&&(Ra.detachEvent("onpropertychange",Kp),Ca=Ra=null)}function Kp(r){if(r.propertyName==="value"&&su(Ca)){var s=[];qp(s,Ca,r,Us(r)),da(xE,s)}}function DE(r,s,a){r==="focusin"?(Gp(),Ra=s,Ca=a,Ra.attachEvent("onpropertychange",Kp)):r==="focusout"&&Gp()}function OE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return su(Ca)}function LE(r,s){if(r==="click")return su(s)}function bE(r,s){if(r==="input"||r==="change")return su(s)}function VE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var zn=typeof Object.is=="function"?Object.is:VE;function Aa(r,s){if(zn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(s,f)||!zn(r[f],s[f]))return!1}return!0}function Qp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Xp(r,s){var a=Qp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qp(a)}}function Yp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Yp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Jp(){for(var r=window,s=Yr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Yr(r.document)}return s}function vh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function ME(r){var s=Jp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Yp(a.ownerDocument.documentElement,a)){if(c!==null&&vh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!r.extend&&g>c&&(f=c,c=g,g=f),f=Xp(a,g);var v=Xp(a,c);f&&v&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var FE=d&&"documentMode"in document&&11>=document.documentMode,ao=null,Eh=null,ka=null,wh=!1;function Zp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wh||ao==null||ao!==Yr(c)||(c=ao,"selectionStart"in c&&vh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ka&&Aa(ka,c)||(ka=c,c=uu(Eh,"onSelect"),0<c.length&&(s=new Zs("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=ao)))}function ou(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var lo={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},Th={},em={};d&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function au(r){if(Th[r])return Th[r];if(!lo[r])return r;var s=lo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in em)return Th[r]=s[a];return r}var tm=au("animationend"),nm=au("animationiteration"),rm=au("animationstart"),im=au("transitionend"),sm=new Map,om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(r,s){sm.set(r,s),l(s,[r])}for(var Ih=0;Ih<om.length;Ih++){var Sh=om[Ih],UE=Sh.toLowerCase(),jE=Sh[0].toUpperCase()+Sh.slice(1);li(UE,"on"+jE)}li(tm,"onAnimationEnd"),li(nm,"onAnimationIteration"),li(rm,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(im,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function am(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Ml(c,s,void 0,r),r.currentTarget=null}function lm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var C=c[v],D=C.instance,q=C.currentTarget;if(C=C.listener,D!==g&&f.isPropagationStopped())break e;am(f,C,q),g=D}else for(v=0;v<c.length;v++){if(C=c[v],D=C.instance,q=C.currentTarget,C=C.listener,D!==g&&f.isPropagationStopped())break e;am(f,C,q),g=D}}}if(Ln)throw r=fa,Ln=!1,fa=null,r}function Qe(r,s){var a=s[Dh];a===void 0&&(a=s[Dh]=new Set);var c=r+"__bubble";a.has(c)||(um(s,r,2,!1),a.add(c))}function Rh(r,s,a){var c=0;s&&(c|=4),um(a,r,c,s)}var lu="_reactListening"+Math.random().toString(36).slice(2);function xa(r){if(!r[lu]){r[lu]=!0,i.forEach(function(a){a!=="selectionchange"&&(BE.has(a)||Rh(a,!1,r),Rh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[lu]||(s[lu]=!0,Rh("selectionchange",!1,s))}}function um(r,s,a,c){switch(Ea(s)){case 1:var f=Je;break;case 4:f=mh;break;default:f=va}a=f.bind(null,s,a,r),f=void 0,!zs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function Ch(r,s,a,c,f){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var C=c.stateNode.containerInfo;if(C===f||C.nodeType===8&&C.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var D=v.tag;if((D===3||D===4)&&(D=v.stateNode.containerInfo,D===f||D.nodeType===8&&D.parentNode===f))return;v=v.return}for(;C!==null;){if(v=is(C),v===null)return;if(D=v.tag,D===5||D===6){c=g=v;continue e}C=C.parentNode}}c=c.return}da(function(){var q=g,J=Us(a),Z=[];e:{var Y=sm.get(r);if(Y!==void 0){var oe=Zs,de=r;switch(r){case"keypress":if(Js(a)===0)break e;case"keydown":case"keyup":oe=m;break;case"focusin":de="focus",oe=ro;break;case"focusout":de="blur",oe=ro;break;case"beforeblur":case"afterblur":oe=ro;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=to;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Jl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=H;break;case tm:case nm:case rm:oe=Pr;break;case im:oe=ze;break;case"scroll":oe=gh;break;case"wheel":oe=be;break;case"copy":case"cut":case"paste":oe=tu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=T}var fe=(s&4)!==0,lt=!fe&&r==="scroll",B=fe?Y!==null?Y+"Capture":null:Y;fe=[];for(var V=q,z;V!==null;){z=V;var te=z.stateNode;if(z.tag===5&&te!==null&&(z=te,B!==null&&(te=at(V,B),te!=null&&fe.push(Na(V,te,z)))),lt)break;V=V.return}0<fe.length&&(Y=new oe(Y,de,null,a,J),Z.push({event:Y,listeners:fe}))}}if(!(s&7)){e:{if(Y=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",Y&&a!==Hi&&(de=a.relatedTarget||a.fromElement)&&(is(de)||de[xr]))break e;if((oe||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,oe?(de=a.relatedTarget||a.toElement,oe=q,de=de?is(de):null,de!==null&&(lt=bn(de),de!==lt||de.tag!==5&&de.tag!==6)&&(de=null)):(oe=null,de=q),oe!==de)){if(fe=to,te="onMouseLeave",B="onMouseEnter",V="mouse",(r==="pointerout"||r==="pointerover")&&(fe=T,te="onPointerLeave",B="onPointerEnter",V="pointer"),lt=oe==null?Y:ho(oe),z=de==null?Y:ho(de),Y=new fe(te,V+"leave",oe,a,J),Y.target=lt,Y.relatedTarget=z,te=null,is(J)===q&&(fe=new fe(B,V+"enter",de,a,J),fe.target=z,fe.relatedTarget=lt,te=fe),lt=te,oe&&de)t:{for(fe=oe,B=de,V=0,z=fe;z;z=uo(z))V++;for(z=0,te=B;te;te=uo(te))z++;for(;0<V-z;)fe=uo(fe),V--;for(;0<z-V;)B=uo(B),z--;for(;V--;){if(fe===B||B!==null&&fe===B.alternate)break t;fe=uo(fe),B=uo(B)}fe=null}else fe=null;oe!==null&&cm(Z,Y,oe,fe,!1),de!==null&&lt!==null&&cm(Z,lt,de,fe,!0)}}e:{if(Y=q?ho(q):window,oe=Y.nodeName&&Y.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Y.type==="file")var pe=NE;else if($p(Y))if(Hp)pe=bE;else{pe=OE;var ye=DE}else(oe=Y.nodeName)&&oe.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(pe=LE);if(pe&&(pe=pe(r,q))){qp(Z,pe,a,J);break e}ye&&ye(r,Y,q),r==="focusout"&&(ye=Y._wrapperState)&&ye.controlled&&Y.type==="number"&&Vs(Y,"number",Y.value)}switch(ye=q?ho(q):window,r){case"focusin":($p(ye)||ye.contentEditable==="true")&&(ao=ye,Eh=q,ka=null);break;case"focusout":ka=Eh=ao=null;break;case"mousedown":wh=!0;break;case"contextmenu":case"mouseup":case"dragend":wh=!1,Zp(Z,a,J);break;case"selectionchange":if(FE)break;case"keydown":case"keyup":Zp(Z,a,J)}var ve;if(ht)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else oo?Bp(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(rs&&a.locale!=="ko"&&(oo||we!=="onCompositionStart"?we==="onCompositionEnd"&&oo&&(ve=wa()):(dn=J,Ys="value"in dn?dn.value:dn.textContent,oo=!0)),ye=uu(q,we),0<ye.length&&(we=new Sa(we,r,null,a,J),Z.push({event:we,listeners:ye}),ve?we.data=ve:(ve=zp(a),ve!==null&&(we.data=ve)))),(ve=fn?AE(r,a):kE(r,a))&&(q=uu(q,"onBeforeInput"),0<q.length&&(J=new Sa("onBeforeInput","beforeinput",null,a,J),Z.push({event:J,listeners:q}),J.data=ve))}lm(Z,s)})}function Na(r,s,a){return{instance:r,listener:s,currentTarget:a}}function uu(r,s){for(var a=s+"Capture",c=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=at(r,a),g!=null&&c.unshift(Na(r,g,f)),g=at(r,s),g!=null&&c.push(Na(r,g,f))),r=r.return}return c}function uo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function cm(r,s,a,c,f){for(var g=s._reactName,v=[];a!==null&&a!==c;){var C=a,D=C.alternate,q=C.stateNode;if(D!==null&&D===c)break;C.tag===5&&q!==null&&(C=q,f?(D=at(a,g),D!=null&&v.unshift(Na(a,D,C))):f||(D=at(a,g),D!=null&&v.push(Na(a,D,C)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var zE=/\r\n?/g,$E=/\u0000|\uFFFD/g;function hm(r){return(typeof r=="string"?r:""+r).replace(zE,`
`).replace($E,"")}function cu(r,s,a){if(s=hm(s),hm(r)!==s&&a)throw Error(t(425))}function hu(){}var Ah=null,kh=null;function Ph(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var xh=typeof setTimeout=="function"?setTimeout:void 0,qE=typeof clearTimeout=="function"?clearTimeout:void 0,dm=typeof Promise=="function"?Promise:void 0,HE=typeof queueMicrotask=="function"?queueMicrotask:typeof dm<"u"?function(r){return dm.resolve(null).then(r).catch(WE)}:xh;function WE(r){setTimeout(function(){throw r})}function Nh(r,s){var a=s,c=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){r.removeChild(f),jn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);jn(s)}function ui(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function fm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var co=Math.random().toString(36).slice(2),or="__reactFiber$"+co,Da="__reactProps$"+co,xr="__reactContainer$"+co,Dh="__reactEvents$"+co,GE="__reactListeners$"+co,KE="__reactHandles$"+co;function is(r){var s=r[or];if(s)return s;for(var a=r.parentNode;a;){if(s=a[xr]||a[or]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=fm(r);r!==null;){if(a=r[or])return a;r=fm(r)}return s}r=a,a=r.parentNode}return null}function Oa(r){return r=r[or]||r[xr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ho(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function du(r){return r[Da]||null}var Oh=[],fo=-1;function ci(r){return{current:r}}function Xe(r){0>fo||(r.current=Oh[fo],Oh[fo]=null,fo--)}function Ke(r,s){fo++,Oh[fo]=r.current,r.current=s}var hi={},Ft=ci(hi),Zt=ci(!1),ss=hi;function po(r,s){var a=r.type.contextTypes;if(!a)return hi;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function en(r){return r=r.childContextTypes,r!=null}function fu(){Xe(Zt),Xe(Ft)}function pm(r,s,a){if(Ft.current!==hi)throw Error(t(168));Ke(Ft,s),Ke(Zt,a)}function mm(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in s))throw Error(t(108,Ue(r)||"Unknown",f));return le({},a,c)}function pu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||hi,ss=Ft.current,Ke(Ft,r),Ke(Zt,Zt.current),!0}function gm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=mm(r,s,ss),c.__reactInternalMemoizedMergedChildContext=r,Xe(Zt),Xe(Ft),Ke(Ft,r)):Xe(Zt),Ke(Zt,a)}var Nr=null,mu=!1,Lh=!1;function _m(r){Nr===null?Nr=[r]:Nr.push(r)}function QE(r){mu=!0,_m(r)}function di(){if(!Lh&&Nr!==null){Lh=!0;var r=0,s=De;try{var a=Nr;for(De=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Nr=null,mu=!1}catch(f){throw Nr!==null&&(Nr=Nr.slice(r+1)),Ws(Xi,di),f}finally{De=s,Lh=!1}}return null}var mo=[],go=0,gu=null,_u=0,Sn=[],Rn=0,os=null,Dr=1,Or="";function as(r,s){mo[go++]=_u,mo[go++]=gu,gu=r,_u=s}function ym(r,s,a){Sn[Rn++]=Dr,Sn[Rn++]=Or,Sn[Rn++]=os,os=r;var c=Dr;r=Or;var f=32-Wt(c)-1;c&=~(1<<f),a+=1;var g=32-Wt(s)+f;if(30<g){var v=f-f%5;g=(c&(1<<v)-1).toString(32),c>>=v,f-=v,Dr=1<<32-Wt(s)+f|a<<f|c,Or=g+r}else Dr=1<<g|a<<f|c,Or=r}function bh(r){r.return!==null&&(as(r,1),ym(r,1,0))}function Vh(r){for(;r===gu;)gu=mo[--go],mo[go]=null,_u=mo[--go],mo[go]=null;for(;r===os;)os=Sn[--Rn],Sn[Rn]=null,Or=Sn[--Rn],Sn[Rn]=null,Dr=Sn[--Rn],Sn[Rn]=null}var pn=null,mn=null,Ze=!1,$n=null;function vm(r,s){var a=Pn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Em(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,pn=r,mn=ui(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,pn=r,mn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=os!==null?{id:Dr,overflow:Or}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Pn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,pn=r,mn=null,!0):!1;default:return!1}}function Mh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Fh(r){if(Ze){var s=mn;if(s){var a=s;if(!Em(r,s)){if(Mh(r))throw Error(t(418));s=ui(a.nextSibling);var c=pn;s&&Em(r,s)?vm(c,a):(r.flags=r.flags&-4097|2,Ze=!1,pn=r)}}else{if(Mh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ze=!1,pn=r}}}function wm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;pn=r}function yu(r){if(r!==pn)return!1;if(!Ze)return wm(r),Ze=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Ph(r.type,r.memoizedProps)),s&&(s=mn)){if(Mh(r))throw Tm(),Error(t(418));for(;s;)vm(r,s),s=ui(s.nextSibling)}if(wm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){mn=ui(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}mn=null}}else mn=pn?ui(r.stateNode.nextSibling):null;return!0}function Tm(){for(var r=mn;r;)r=ui(r.nextSibling)}function _o(){mn=pn=null,Ze=!1}function Uh(r){$n===null?$n=[r]:$n.push(r)}var XE=ie.ReactCurrentBatchConfig;function La(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var f=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var C=f.refs;v===null?delete C[g]:C[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function vu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Im(r){var s=r._init;return s(r._payload)}function Sm(r){function s(B,V){if(r){var z=B.deletions;z===null?(B.deletions=[V],B.flags|=16):z.push(V)}}function a(B,V){if(!r)return null;for(;V!==null;)s(B,V),V=V.sibling;return null}function c(B,V){for(B=new Map;V!==null;)V.key!==null?B.set(V.key,V):B.set(V.index,V),V=V.sibling;return B}function f(B,V){return B=Ei(B,V),B.index=0,B.sibling=null,B}function g(B,V,z){return B.index=z,r?(z=B.alternate,z!==null?(z=z.index,z<V?(B.flags|=2,V):z):(B.flags|=2,V)):(B.flags|=1048576,V)}function v(B){return r&&B.alternate===null&&(B.flags|=2),B}function C(B,V,z,te){return V===null||V.tag!==6?(V=xd(z,B.mode,te),V.return=B,V):(V=f(V,z),V.return=B,V)}function D(B,V,z,te){var pe=z.type;return pe===x?J(B,V,z.props.children,te,z.key):V!==null&&(V.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Mt&&Im(pe)===V.type)?(te=f(V,z.props),te.ref=La(B,V,z),te.return=B,te):(te=$u(z.type,z.key,z.props,null,B.mode,te),te.ref=La(B,V,z),te.return=B,te)}function q(B,V,z,te){return V===null||V.tag!==4||V.stateNode.containerInfo!==z.containerInfo||V.stateNode.implementation!==z.implementation?(V=Nd(z,B.mode,te),V.return=B,V):(V=f(V,z.children||[]),V.return=B,V)}function J(B,V,z,te,pe){return V===null||V.tag!==7?(V=ms(z,B.mode,te,pe),V.return=B,V):(V=f(V,z),V.return=B,V)}function Z(B,V,z){if(typeof V=="string"&&V!==""||typeof V=="number")return V=xd(""+V,B.mode,z),V.return=B,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ne:return z=$u(V.type,V.key,V.props,null,B.mode,z),z.ref=La(B,null,V),z.return=B,z;case ae:return V=Nd(V,B.mode,z),V.return=B,V;case Mt:var te=V._init;return Z(B,te(V._payload),z)}if(wr(V)||_e(V))return V=ms(V,B.mode,z,null),V.return=B,V;vu(B,V)}return null}function Y(B,V,z,te){var pe=V!==null?V.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return pe!==null?null:C(B,V,""+z,te);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ne:return z.key===pe?D(B,V,z,te):null;case ae:return z.key===pe?q(B,V,z,te):null;case Mt:return pe=z._init,Y(B,V,pe(z._payload),te)}if(wr(z)||_e(z))return pe!==null?null:J(B,V,z,te,null);vu(B,z)}return null}function oe(B,V,z,te,pe){if(typeof te=="string"&&te!==""||typeof te=="number")return B=B.get(z)||null,C(V,B,""+te,pe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case ne:return B=B.get(te.key===null?z:te.key)||null,D(V,B,te,pe);case ae:return B=B.get(te.key===null?z:te.key)||null,q(V,B,te,pe);case Mt:var ye=te._init;return oe(B,V,z,ye(te._payload),pe)}if(wr(te)||_e(te))return B=B.get(z)||null,J(V,B,te,pe,null);vu(V,te)}return null}function de(B,V,z,te){for(var pe=null,ye=null,ve=V,we=V=0,At=null;ve!==null&&we<z.length;we++){ve.index>we?(At=ve,ve=null):At=ve.sibling;var Fe=Y(B,ve,z[we],te);if(Fe===null){ve===null&&(ve=At);break}r&&ve&&Fe.alternate===null&&s(B,ve),V=g(Fe,V,we),ye===null?pe=Fe:ye.sibling=Fe,ye=Fe,ve=At}if(we===z.length)return a(B,ve),Ze&&as(B,we),pe;if(ve===null){for(;we<z.length;we++)ve=Z(B,z[we],te),ve!==null&&(V=g(ve,V,we),ye===null?pe=ve:ye.sibling=ve,ye=ve);return Ze&&as(B,we),pe}for(ve=c(B,ve);we<z.length;we++)At=oe(ve,B,we,z[we],te),At!==null&&(r&&At.alternate!==null&&ve.delete(At.key===null?we:At.key),V=g(At,V,we),ye===null?pe=At:ye.sibling=At,ye=At);return r&&ve.forEach(function(wi){return s(B,wi)}),Ze&&as(B,we),pe}function fe(B,V,z,te){var pe=_e(z);if(typeof pe!="function")throw Error(t(150));if(z=pe.call(z),z==null)throw Error(t(151));for(var ye=pe=null,ve=V,we=V=0,At=null,Fe=z.next();ve!==null&&!Fe.done;we++,Fe=z.next()){ve.index>we?(At=ve,ve=null):At=ve.sibling;var wi=Y(B,ve,Fe.value,te);if(wi===null){ve===null&&(ve=At);break}r&&ve&&wi.alternate===null&&s(B,ve),V=g(wi,V,we),ye===null?pe=wi:ye.sibling=wi,ye=wi,ve=At}if(Fe.done)return a(B,ve),Ze&&as(B,we),pe;if(ve===null){for(;!Fe.done;we++,Fe=z.next())Fe=Z(B,Fe.value,te),Fe!==null&&(V=g(Fe,V,we),ye===null?pe=Fe:ye.sibling=Fe,ye=Fe);return Ze&&as(B,we),pe}for(ve=c(B,ve);!Fe.done;we++,Fe=z.next())Fe=oe(ve,B,we,Fe.value,te),Fe!==null&&(r&&Fe.alternate!==null&&ve.delete(Fe.key===null?we:Fe.key),V=g(Fe,V,we),ye===null?pe=Fe:ye.sibling=Fe,ye=Fe);return r&&ve.forEach(function(Pw){return s(B,Pw)}),Ze&&as(B,we),pe}function lt(B,V,z,te){if(typeof z=="object"&&z!==null&&z.type===x&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case ne:e:{for(var pe=z.key,ye=V;ye!==null;){if(ye.key===pe){if(pe=z.type,pe===x){if(ye.tag===7){a(B,ye.sibling),V=f(ye,z.props.children),V.return=B,B=V;break e}}else if(ye.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Mt&&Im(pe)===ye.type){a(B,ye.sibling),V=f(ye,z.props),V.ref=La(B,ye,z),V.return=B,B=V;break e}a(B,ye);break}else s(B,ye);ye=ye.sibling}z.type===x?(V=ms(z.props.children,B.mode,te,z.key),V.return=B,B=V):(te=$u(z.type,z.key,z.props,null,B.mode,te),te.ref=La(B,V,z),te.return=B,B=te)}return v(B);case ae:e:{for(ye=z.key;V!==null;){if(V.key===ye)if(V.tag===4&&V.stateNode.containerInfo===z.containerInfo&&V.stateNode.implementation===z.implementation){a(B,V.sibling),V=f(V,z.children||[]),V.return=B,B=V;break e}else{a(B,V);break}else s(B,V);V=V.sibling}V=Nd(z,B.mode,te),V.return=B,B=V}return v(B);case Mt:return ye=z._init,lt(B,V,ye(z._payload),te)}if(wr(z))return de(B,V,z,te);if(_e(z))return fe(B,V,z,te);vu(B,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,V!==null&&V.tag===6?(a(B,V.sibling),V=f(V,z),V.return=B,B=V):(a(B,V),V=xd(z,B.mode,te),V.return=B,B=V),v(B)):a(B,V)}return lt}var yo=Sm(!0),Rm=Sm(!1),Eu=ci(null),wu=null,vo=null,jh=null;function Bh(){jh=vo=wu=null}function zh(r){var s=Eu.current;Xe(Eu),r._currentValue=s}function $h(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function Eo(r,s){wu=r,jh=vo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(tn=!0),r.firstContext=null)}function Cn(r){var s=r._currentValue;if(jh!==r)if(r={context:r,memoizedValue:s,next:null},vo===null){if(wu===null)throw Error(t(308));vo=r,wu.dependencies={lanes:0,firstContext:r}}else vo=vo.next=r;return s}var ls=null;function qh(r){ls===null?ls=[r]:ls.push(r)}function Cm(r,s,a,c){var f=s.interleaved;return f===null?(a.next=a,qh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Lr(r,c)}function Lr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var fi=!1;function Hh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Am(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function br(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function pi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Me&2){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,Lr(r,a)}return f=c.interleaved,f===null?(s.next=s,qh(c)):(s.next=f.next,f.next=s),c.interleaved=s,Lr(r,a)}function Tu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,ri(r,a)}}function km(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Iu(r,s,a,c){var f=r.updateQueue;fi=!1;var g=f.firstBaseUpdate,v=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var D=C,q=D.next;D.next=null,v===null?g=q:v.next=q,v=D;var J=r.alternate;J!==null&&(J=J.updateQueue,C=J.lastBaseUpdate,C!==v&&(C===null?J.firstBaseUpdate=q:C.next=q,J.lastBaseUpdate=D))}if(g!==null){var Z=f.baseState;v=0,J=q=D=null,C=g;do{var Y=C.lane,oe=C.eventTime;if((c&Y)===Y){J!==null&&(J=J.next={eventTime:oe,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var de=r,fe=C;switch(Y=s,oe=a,fe.tag){case 1:if(de=fe.payload,typeof de=="function"){Z=de.call(oe,Z,Y);break e}Z=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=fe.payload,Y=typeof de=="function"?de.call(oe,Z,Y):de,Y==null)break e;Z=le({},Z,Y);break e;case 2:fi=!0}}C.callback!==null&&C.lane!==0&&(r.flags|=64,Y=f.effects,Y===null?f.effects=[C]:Y.push(C))}else oe={eventTime:oe,lane:Y,tag:C.tag,payload:C.payload,callback:C.callback,next:null},J===null?(q=J=oe,D=Z):J=J.next=oe,v|=Y;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;Y=C,C=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(J===null&&(D=Z),f.baseState=D,f.firstBaseUpdate=q,f.lastBaseUpdate=J,s=f.shared.interleaved,s!==null){f=s;do v|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);hs|=v,r.lanes=v,r.memoizedState=Z}}function Pm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var ba={},ar=ci(ba),Va=ci(ba),Ma=ci(ba);function us(r){if(r===ba)throw Error(t(174));return r}function Wh(r,s){switch(Ke(Ma,s),Ke(Va,r),Ke(ar,ba),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:gt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=gt(s,r)}Xe(ar),Ke(ar,s)}function wo(){Xe(ar),Xe(Va),Xe(Ma)}function xm(r){us(Ma.current);var s=us(ar.current),a=gt(s,r.type);s!==a&&(Ke(Va,r),Ke(ar,a))}function Gh(r){Va.current===r&&(Xe(ar),Xe(Va))}var tt=ci(0);function Su(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Kh=[];function Qh(){for(var r=0;r<Kh.length;r++)Kh[r]._workInProgressVersionPrimary=null;Kh.length=0}var Ru=ie.ReactCurrentDispatcher,Xh=ie.ReactCurrentBatchConfig,cs=0,nt=null,yt=null,Rt=null,Cu=!1,Fa=!1,Ua=0,YE=0;function Ut(){throw Error(t(321))}function Yh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!zn(r[a],s[a]))return!1;return!0}function Jh(r,s,a,c,f,g){if(cs=g,nt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ru.current=r===null||r.memoizedState===null?tw:nw,r=a(c,f),Fa){g=0;do{if(Fa=!1,Ua=0,25<=g)throw Error(t(301));g+=1,Rt=yt=null,s.updateQueue=null,Ru.current=rw,r=a(c,f)}while(Fa)}if(Ru.current=Pu,s=yt!==null&&yt.next!==null,cs=0,Rt=yt=nt=null,Cu=!1,s)throw Error(t(300));return r}function Zh(){var r=Ua!==0;return Ua=0,r}function lr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?nt.memoizedState=Rt=r:Rt=Rt.next=r,Rt}function An(){if(yt===null){var r=nt.alternate;r=r!==null?r.memoizedState:null}else r=yt.next;var s=Rt===null?nt.memoizedState:Rt.next;if(s!==null)Rt=s,yt=r;else{if(r===null)throw Error(t(310));yt=r,r={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Rt===null?nt.memoizedState=Rt=r:Rt=Rt.next=r}return Rt}function ja(r,s){return typeof s=="function"?s(r):s}function ed(r){var s=An(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=yt,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var v=f.next;f.next=g.next,g.next=v}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var C=v=null,D=null,q=g;do{var J=q.lane;if((cs&J)===J)D!==null&&(D=D.next={lane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),c=q.hasEagerState?q.eagerState:r(c,q.action);else{var Z={lane:J,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null};D===null?(C=D=Z,v=c):D=D.next=Z,nt.lanes|=J,hs|=J}q=q.next}while(q!==null&&q!==g);D===null?v=c:D.next=C,zn(c,s.memoizedState)||(tn=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=D,a.lastRenderedState=c}if(r=a.interleaved,r!==null){f=r;do g=f.lane,nt.lanes|=g,hs|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function td(r){var s=An(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do g=r(g,v.action),v=v.next;while(v!==f);zn(g,s.memoizedState)||(tn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function Nm(){}function Dm(r,s){var a=nt,c=An(),f=s(),g=!zn(c.memoizedState,f);if(g&&(c.memoizedState=f,tn=!0),c=c.queue,nd(bm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||Rt!==null&&Rt.memoizedState.tag&1){if(a.flags|=2048,Ba(9,Lm.bind(null,a,c,f,s),void 0,null),Ct===null)throw Error(t(349));cs&30||Om(a,s,f)}return f}function Om(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Lm(r,s,a,c){s.value=a,s.getSnapshot=c,Vm(s)&&Mm(r)}function bm(r,s,a){return a(function(){Vm(s)&&Mm(r)})}function Vm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!zn(r,a)}catch{return!0}}function Mm(r){var s=Lr(r,1);s!==null&&Gn(s,r,1,-1)}function Fm(r){var s=lr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:r},s.queue=r,r=r.dispatch=ew.bind(null,nt,r),[s.memoizedState,r]}function Ba(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function Um(){return An().memoizedState}function Au(r,s,a,c){var f=lr();nt.flags|=r,f.memoizedState=Ba(1|s,a,void 0,c===void 0?null:c)}function ku(r,s,a,c){var f=An();c=c===void 0?null:c;var g=void 0;if(yt!==null){var v=yt.memoizedState;if(g=v.destroy,c!==null&&Yh(c,v.deps)){f.memoizedState=Ba(s,a,g,c);return}}nt.flags|=r,f.memoizedState=Ba(1|s,a,g,c)}function jm(r,s){return Au(8390656,8,r,s)}function nd(r,s){return ku(2048,8,r,s)}function Bm(r,s){return ku(4,2,r,s)}function zm(r,s){return ku(4,4,r,s)}function $m(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function qm(r,s,a){return a=a!=null?a.concat([r]):null,ku(4,4,$m.bind(null,s,r),a)}function rd(){}function Hm(r,s){var a=An();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Yh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Wm(r,s){var a=An();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Yh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Gm(r,s,a){return cs&21?(zn(a,s)||(a=Zi(),nt.lanes|=a,hs|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,tn=!0),r.memoizedState=a)}function JE(r,s){var a=De;De=a!==0&&4>a?a:4,r(!0);var c=Xh.transition;Xh.transition={};try{r(!1),s()}finally{De=a,Xh.transition=c}}function Km(){return An().memoizedState}function ZE(r,s,a){var c=yi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Qm(r))Xm(s,a);else if(a=Cm(r,s,a,c),a!==null){var f=Qt();Gn(a,r,c,f),Ym(a,s,c)}}function ew(r,s,a){var c=yi(r),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qm(r))Xm(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,C=g(v,a);if(f.hasEagerState=!0,f.eagerState=C,zn(C,v)){var D=s.interleaved;D===null?(f.next=f,qh(s)):(f.next=D.next,D.next=f),s.interleaved=f;return}}catch{}finally{}a=Cm(r,s,f,c),a!==null&&(f=Qt(),Gn(a,r,c,f),Ym(a,s,c))}}function Qm(r){var s=r.alternate;return r===nt||s!==null&&s===nt}function Xm(r,s){Fa=Cu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Ym(r,s,a){if(a&4194240){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,ri(r,a)}}var Pu={readContext:Cn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},tw={readContext:Cn,useCallback:function(r,s){return lr().memoizedState=[r,s===void 0?null:s],r},useContext:Cn,useEffect:jm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Au(4194308,4,$m.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Au(4194308,4,r,s)},useInsertionEffect:function(r,s){return Au(4,2,r,s)},useMemo:function(r,s){var a=lr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=lr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=ZE.bind(null,nt,r),[c.memoizedState,r]},useRef:function(r){var s=lr();return r={current:r},s.memoizedState=r},useState:Fm,useDebugValue:rd,useDeferredValue:function(r){return lr().memoizedState=r},useTransition:function(){var r=Fm(!1),s=r[0];return r=JE.bind(null,r[1]),lr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=nt,f=lr();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Ct===null)throw Error(t(349));cs&30||Om(c,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,jm(bm.bind(null,c,g,r),[r]),c.flags|=2048,Ba(9,Lm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=lr(),s=Ct.identifierPrefix;if(Ze){var a=Or,c=Dr;a=(c&~(1<<32-Wt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ua++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=YE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},nw={readContext:Cn,useCallback:Hm,useContext:Cn,useEffect:nd,useImperativeHandle:qm,useInsertionEffect:Bm,useLayoutEffect:zm,useMemo:Wm,useReducer:ed,useRef:Um,useState:function(){return ed(ja)},useDebugValue:rd,useDeferredValue:function(r){var s=An();return Gm(s,yt.memoizedState,r)},useTransition:function(){var r=ed(ja)[0],s=An().memoizedState;return[r,s]},useMutableSource:Nm,useSyncExternalStore:Dm,useId:Km,unstable_isNewReconciler:!1},rw={readContext:Cn,useCallback:Hm,useContext:Cn,useEffect:nd,useImperativeHandle:qm,useInsertionEffect:Bm,useLayoutEffect:zm,useMemo:Wm,useReducer:td,useRef:Um,useState:function(){return td(ja)},useDebugValue:rd,useDeferredValue:function(r){var s=An();return yt===null?s.memoizedState=r:Gm(s,yt.memoizedState,r)},useTransition:function(){var r=td(ja)[0],s=An().memoizedState;return[r,s]},useMutableSource:Nm,useSyncExternalStore:Dm,useId:Km,unstable_isNewReconciler:!1};function qn(r,s){if(r&&r.defaultProps){s=le({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function id(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:le({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var xu={isMounted:function(r){return(r=r._reactInternals)?bn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Qt(),f=yi(r),g=br(c,f);g.payload=s,a!=null&&(g.callback=a),s=pi(r,g,f),s!==null&&(Gn(s,r,f,c),Tu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Qt(),f=yi(r),g=br(c,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=pi(r,g,f),s!==null&&(Gn(s,r,f,c),Tu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Qt(),c=yi(r),f=br(a,c);f.tag=2,s!=null&&(f.callback=s),s=pi(r,f,c),s!==null&&(Gn(s,r,c,a),Tu(s,r,c))}};function Jm(r,s,a,c,f,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!Aa(a,c)||!Aa(f,g):!0}function Zm(r,s,a){var c=!1,f=hi,g=s.contextType;return typeof g=="object"&&g!==null?g=Cn(g):(f=en(s)?ss:Ft.current,c=s.contextTypes,g=(c=c!=null)?po(r,f):hi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=xu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function eg(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&xu.enqueueReplaceState(s,s.state,null)}function sd(r,s,a,c){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Hh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=Cn(g):(g=en(s)?ss:Ft.current,f.context=po(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(id(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&xu.enqueueReplaceState(f,f.state,null),Iu(r,a,f,c),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function To(r,s){try{var a="",c=s;do a+=ke(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function od(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function ad(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var iw=typeof WeakMap=="function"?WeakMap:Map;function tg(r,s,a){a=br(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Mu||(Mu=!0,Td=c),ad(r,s)},a}function ng(r,s,a){a=br(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;a.payload=function(){return c(f)},a.callback=function(){ad(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){ad(r,s),typeof c!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function rg(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new iw;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(a)||(f.add(a),r=yw.bind(null,r,s,a),s.then(r,r))}function ig(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function sg(r,s,a,c,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=br(-1,1),s.tag=2,pi(a,s,1))),a.lanes|=1),r)}var sw=ie.ReactCurrentOwner,tn=!1;function Kt(r,s,a,c){s.child=r===null?Rm(s,null,a,c):yo(s,r.child,a,c)}function og(r,s,a,c,f){a=a.render;var g=s.ref;return Eo(s,f),c=Jh(r,s,a,c,g,f),a=Zh(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Vr(r,s,f)):(Ze&&a&&bh(s),s.flags|=1,Kt(r,s,c,f),s.child)}function ag(r,s,a,c,f){if(r===null){var g=a.type;return typeof g=="function"&&!Pd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,lg(r,s,g,c,f)):(r=$u(a.type,null,c,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:Aa,a(v,c)&&r.ref===s.ref)return Vr(r,s,f)}return s.flags|=1,r=Ei(g,c),r.ref=s.ref,r.return=s,s.child=r}function lg(r,s,a,c,f){if(r!==null){var g=r.memoizedProps;if(Aa(g,c)&&r.ref===s.ref)if(tn=!1,s.pendingProps=c=g,(r.lanes&f)!==0)r.flags&131072&&(tn=!0);else return s.lanes=r.lanes,Vr(r,s,f)}return ld(r,s,a,c,f)}function ug(r,s,a){var c=s.pendingProps,f=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(So,gn),gn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ke(So,gn),gn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Ke(So,gn),gn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,Ke(So,gn),gn|=c;return Kt(r,s,f,a),s.child}function cg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function ld(r,s,a,c,f){var g=en(a)?ss:Ft.current;return g=po(s,g),Eo(s,f),a=Jh(r,s,a,c,g,f),c=Zh(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Vr(r,s,f)):(Ze&&c&&bh(s),s.flags|=1,Kt(r,s,a,f),s.child)}function hg(r,s,a,c,f){if(en(a)){var g=!0;pu(s)}else g=!1;if(Eo(s,f),s.stateNode===null)Du(r,s),Zm(s,a,c),sd(s,a,c,f),c=!0;else if(r===null){var v=s.stateNode,C=s.memoizedProps;v.props=C;var D=v.context,q=a.contextType;typeof q=="object"&&q!==null?q=Cn(q):(q=en(a)?ss:Ft.current,q=po(s,q));var J=a.getDerivedStateFromProps,Z=typeof J=="function"||typeof v.getSnapshotBeforeUpdate=="function";Z||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(C!==c||D!==q)&&eg(s,v,c,q),fi=!1;var Y=s.memoizedState;v.state=Y,Iu(s,c,v,f),D=s.memoizedState,C!==c||Y!==D||Zt.current||fi?(typeof J=="function"&&(id(s,a,J,c),D=s.memoizedState),(C=fi||Jm(s,a,C,c,Y,D,q))?(Z||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=D),v.props=c,v.state=D,v.context=q,c=C):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Am(r,s),C=s.memoizedProps,q=s.type===s.elementType?C:qn(s.type,C),v.props=q,Z=s.pendingProps,Y=v.context,D=a.contextType,typeof D=="object"&&D!==null?D=Cn(D):(D=en(a)?ss:Ft.current,D=po(s,D));var oe=a.getDerivedStateFromProps;(J=typeof oe=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(C!==Z||Y!==D)&&eg(s,v,c,D),fi=!1,Y=s.memoizedState,v.state=Y,Iu(s,c,v,f);var de=s.memoizedState;C!==Z||Y!==de||Zt.current||fi?(typeof oe=="function"&&(id(s,a,oe,c),de=s.memoizedState),(q=fi||Jm(s,a,q,c,Y,de,D)||!1)?(J||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,de,D),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,de,D)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||C===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=de),v.props=c,v.state=de,v.context=D,c=q):(typeof v.componentDidUpdate!="function"||C===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),c=!1)}return ud(r,s,a,c,g,f)}function ud(r,s,a,c,f,g){cg(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return f&&gm(s,a,!1),Vr(r,s,g);c=s.stateNode,sw.current=s;var C=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=yo(s,r.child,null,g),s.child=yo(s,null,C,g)):Kt(r,s,C,g),s.memoizedState=c.state,f&&gm(s,a,!0),s.child}function dg(r){var s=r.stateNode;s.pendingContext?pm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&pm(r,s.context,!1),Wh(r,s.containerInfo)}function fg(r,s,a,c,f){return _o(),Uh(f),s.flags|=256,Kt(r,s,a,c),s.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function hd(r){return{baseLanes:r,cachePool:null,transitions:null}}function pg(r,s,a){var c=s.pendingProps,f=tt.current,g=!1,v=(s.flags&128)!==0,C;if((C=v)||(C=r!==null&&r.memoizedState===null?!1:(f&2)!==0),C?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),Ke(tt,f&1),r===null)return Fh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=qu(v,c,0,null),r=ms(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=hd(a),s.memoizedState=cd,r):dd(s,v));if(f=r.memoizedState,f!==null&&(C=f.dehydrated,C!==null))return ow(r,s,v,c,C,f,a);if(g){g=c.fallback,v=s.mode,f=r.child,C=f.sibling;var D={mode:"hidden",children:c.children};return!(v&1)&&s.child!==f?(c=s.child,c.childLanes=0,c.pendingProps=D,s.deletions=null):(c=Ei(f,D),c.subtreeFlags=f.subtreeFlags&14680064),C!==null?g=Ei(C,g):(g=ms(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?hd(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=cd,c}return g=r.child,r=g.sibling,c=Ei(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function dd(r,s){return s=qu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Nu(r,s,a,c){return c!==null&&Uh(c),yo(s,r.child,null,a),r=dd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function ow(r,s,a,c,f,g,v){if(a)return s.flags&256?(s.flags&=-257,c=od(Error(t(422))),Nu(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,f=s.mode,c=qu({mode:"visible",children:c.children},f,0,null),g=ms(g,f,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&yo(s,r.child,null,v),s.child.memoizedState=hd(v),s.memoizedState=cd,g);if(!(s.mode&1))return Nu(r,s,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var C=c.dgst;return c=C,g=Error(t(419)),c=od(g,c,void 0),Nu(r,s,v,c)}if(C=(v&r.childLanes)!==0,tn||C){if(c=Ct,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|v)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Lr(r,f),Gn(c,r,f,-1))}return kd(),c=od(Error(t(421))),Nu(r,s,v,c)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=vw.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,mn=ui(f.nextSibling),pn=s,Ze=!0,$n=null,r!==null&&(Sn[Rn++]=Dr,Sn[Rn++]=Or,Sn[Rn++]=os,Dr=r.id,Or=r.overflow,os=s),s=dd(s,c.children),s.flags|=4096,s)}function mg(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),$h(r.return,s,a)}function fd(r,s,a,c,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function gg(r,s,a){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(Kt(r,s,c.children,a),c=tt.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&mg(r,a,s);else if(r.tag===19)mg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Ke(tt,c),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Su(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),fd(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Su(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}fd(s,!0,a,null,g);break;case"together":fd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Du(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Vr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),hs|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Ei(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Ei(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function aw(r,s,a){switch(s.tag){case 3:dg(s),_o();break;case 5:xm(s);break;case 1:en(s.type)&&pu(s);break;case 4:Wh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,f=s.memoizedProps.value;Ke(Eu,c._currentValue),c._currentValue=f;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ke(tt,tt.current&1),s.flags|=128,null):a&s.child.childLanes?pg(r,s,a):(Ke(tt,tt.current&1),r=Vr(r,s,a),r!==null?r.sibling:null);Ke(tt,tt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,r.flags&128){if(c)return gg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(tt,tt.current),c)break;return null;case 22:case 23:return s.lanes=0,ug(r,s,a)}return Vr(r,s,a)}var _g,pd,yg,vg;_g=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},pd=function(){},yg=function(r,s,a,c){var f=r.memoizedProps;if(f!==c){r=s.stateNode,us(ar.current);var g=null;switch(a){case"input":f=zi(r,f),c=zi(r,c),g=[];break;case"select":f=le({},f,{value:void 0}),c=le({},c,{value:void 0}),g=[];break;case"textarea":f=na(r,f),c=na(r,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=hu)}la(a,c);var v;a=null;for(q in f)if(!c.hasOwnProperty(q)&&f.hasOwnProperty(q)&&f[q]!=null)if(q==="style"){var C=f[q];for(v in C)C.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else q!=="dangerouslySetInnerHTML"&&q!=="children"&&q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&q!=="autoFocus"&&(o.hasOwnProperty(q)?g||(g=[]):(g=g||[]).push(q,null));for(q in c){var D=c[q];if(C=f!=null?f[q]:void 0,c.hasOwnProperty(q)&&D!==C&&(D!=null||C!=null))if(q==="style")if(C){for(v in C)!C.hasOwnProperty(v)||D&&D.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in D)D.hasOwnProperty(v)&&C[v]!==D[v]&&(a||(a={}),a[v]=D[v])}else a||(g||(g=[]),g.push(q,a)),a=D;else q==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,C=C?C.__html:void 0,D!=null&&C!==D&&(g=g||[]).push(q,D)):q==="children"?typeof D!="string"&&typeof D!="number"||(g=g||[]).push(q,""+D):q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&(o.hasOwnProperty(q)?(D!=null&&q==="onScroll"&&Qe("scroll",r),g||C===D||(g=[])):(g=g||[]).push(q,D))}a&&(g=g||[]).push("style",a);var q=g;(s.updateQueue=q)&&(s.flags|=4)}},vg=function(r,s,a,c){a!==c&&(s.flags|=4)};function za(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function jt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function lw(r,s,a){var c=s.pendingProps;switch(Vh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(s),null;case 1:return en(s.type)&&fu(),jt(s),null;case 3:return c=s.stateNode,wo(),Xe(Zt),Xe(Ft),Qh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(yu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,$n!==null&&(Rd($n),$n=null))),pd(r,s),jt(s),null;case 5:Gh(s);var f=us(Ma.current);if(a=s.type,r!==null&&s.stateNode!=null)yg(r,s,a,c,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return jt(s),null}if(r=us(ar.current),yu(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[or]=s,c[Da]=g,r=(s.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(f=0;f<Pa.length;f++)Qe(Pa[f],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":bs(c,g),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Qe("invalid",c);break;case"textarea":Ms(c,g),Qe("invalid",c)}la(a,g),f=null;for(var v in g)if(g.hasOwnProperty(v)){var C=g[v];v==="children"?typeof C=="string"?c.textContent!==C&&(g.suppressHydrationWarning!==!0&&cu(c.textContent,C,r),f=["children",C]):typeof C=="number"&&c.textContent!==""+C&&(g.suppressHydrationWarning!==!0&&cu(c.textContent,C,r),f=["children",""+C]):o.hasOwnProperty(v)&&C!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":Er(c),Vl(c,g,!0);break;case"textarea":Er(c),ra(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=hu)}c=f,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=mt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[or]=s,r[Da]=c,_g(r,s,!1,!1),s.stateNode=r;e:{switch(v=ua(a,c),a){case"dialog":Qe("cancel",r),Qe("close",r),f=c;break;case"iframe":case"object":case"embed":Qe("load",r),f=c;break;case"video":case"audio":for(f=0;f<Pa.length;f++)Qe(Pa[f],r);f=c;break;case"source":Qe("error",r),f=c;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),f=c;break;case"details":Qe("toggle",r),f=c;break;case"input":bs(r,c),f=zi(r,c),Qe("invalid",r);break;case"option":f=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},f=le({},c,{value:void 0}),Qe("invalid",r);break;case"textarea":Ms(r,c),f=na(r,c),Qe("invalid",r);break;default:f=c}la(a,f),C=f;for(g in C)if(C.hasOwnProperty(g)){var D=C[g];g==="style"?oa(r,D):g==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&ia(r,D)):g==="children"?typeof D=="string"?(a!=="textarea"||D!=="")&&Jr(r,D):typeof D=="number"&&Jr(r,""+D):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?D!=null&&g==="onScroll"&&Qe("scroll",r):D!=null&&ee(r,g,D,v))}switch(a){case"input":Er(r),Vl(r,c,!1);break;case"textarea":Er(r),ra(r);break;case"option":c.value!=null&&r.setAttribute("value",""+je(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?Tr(r,!!c.multiple,g,!1):c.defaultValue!=null&&Tr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=hu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return jt(s),null;case 6:if(r&&s.stateNode!=null)vg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=us(Ma.current),us(ar.current),yu(s)){if(c=s.stateNode,a=s.memoizedProps,c[or]=s,(g=c.nodeValue!==a)&&(r=pn,r!==null))switch(r.tag){case 3:cu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&cu(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[or]=s,s.stateNode=c}return jt(s),null;case 13:if(Xe(tt),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ze&&mn!==null&&s.mode&1&&!(s.flags&128))Tm(),_o(),s.flags|=98560,g=!1;else if(g=yu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[or]=s}else _o(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;jt(s),g=!1}else $n!==null&&(Rd($n),$n=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||tt.current&1?vt===0&&(vt=3):kd())),s.updateQueue!==null&&(s.flags|=4),jt(s),null);case 4:return wo(),pd(r,s),r===null&&xa(s.stateNode.containerInfo),jt(s),null;case 10:return zh(s.type._context),jt(s),null;case 17:return en(s.type)&&fu(),jt(s),null;case 19:if(Xe(tt),g=s.memoizedState,g===null)return jt(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)za(g,!1);else{if(vt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=Su(r),v!==null){for(s.flags|=128,za(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ke(tt,tt.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ge()>Ro&&(s.flags|=128,c=!0,za(g,!1),s.lanes=4194304)}else{if(!c)if(r=Su(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Ze)return jt(s),null}else 2*Ge()-g.renderingStartTime>Ro&&a!==1073741824&&(s.flags|=128,c=!0,za(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ge(),s.sibling=null,a=tt.current,Ke(tt,c?a&1|2:a&1),s):(jt(s),null);case 22:case 23:return Ad(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?gn&1073741824&&(jt(s),s.subtreeFlags&6&&(s.flags|=8192)):jt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function uw(r,s){switch(Vh(s),s.tag){case 1:return en(s.type)&&fu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return wo(),Xe(Zt),Xe(Ft),Qh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Gh(s),null;case 13:if(Xe(tt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));_o()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Xe(tt),null;case 4:return wo(),null;case 10:return zh(s.type._context),null;case 22:case 23:return Ad(),null;case 24:return null;default:return null}}var Ou=!1,Bt=!1,cw=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Io(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(r,s,c)}else a.current=null}function md(r,s,a){try{a()}catch(c){it(r,s,c)}}var Eg=!1;function hw(r,s){if(Ah=oi,r=Jp(),vh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,C=-1,D=-1,q=0,J=0,Z=r,Y=null;t:for(;;){for(var oe;Z!==a||f!==0&&Z.nodeType!==3||(C=v+f),Z!==g||c!==0&&Z.nodeType!==3||(D=v+c),Z.nodeType===3&&(v+=Z.nodeValue.length),(oe=Z.firstChild)!==null;)Y=Z,Z=oe;for(;;){if(Z===r)break t;if(Y===a&&++q===f&&(C=v),Y===g&&++J===c&&(D=v),(oe=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=oe}a=C===-1||D===-1?null:{start:C,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(kh={focusedElem:r,selectionRange:a},oi=!1,ce=s;ce!==null;)if(s=ce,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ce=r;else for(;ce!==null;){s=ce;try{var de=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var fe=de.memoizedProps,lt=de.memoizedState,B=s.stateNode,V=B.getSnapshotBeforeUpdate(s.elementType===s.type?fe:qn(s.type,fe),lt);B.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var z=s.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){it(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,ce=r;break}ce=s.return}return de=Eg,Eg=!1,de}function $a(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&md(s,a,g)}f=f.next}while(f!==c)}}function Lu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function gd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function wg(r){var s=r.alternate;s!==null&&(r.alternate=null,wg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[or],delete s[Da],delete s[Dh],delete s[GE],delete s[KE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Tg(r){return r.tag===5||r.tag===3||r.tag===4}function Ig(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Tg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function _d(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=hu));else if(c!==4&&(r=r.child,r!==null))for(_d(r,s,a),r=r.sibling;r!==null;)_d(r,s,a),r=r.sibling}function yd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(yd(r,s,a),r=r.sibling;r!==null;)yd(r,s,a),r=r.sibling}var Nt=null,Hn=!1;function mi(r,s,a){for(a=a.child;a!==null;)Sg(r,s,a),a=a.sibling}function Sg(r,s,a){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Yi,a)}catch{}switch(a.tag){case 5:Bt||Io(a,s);case 6:var c=Nt,f=Hn;Nt=null,mi(r,s,a),Nt=c,Hn=f,Nt!==null&&(Hn?(r=Nt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Nt.removeChild(a.stateNode));break;case 18:Nt!==null&&(Hn?(r=Nt,a=a.stateNode,r.nodeType===8?Nh(r.parentNode,a):r.nodeType===1&&Nh(r,a),jn(r)):Nh(Nt,a.stateNode));break;case 4:c=Nt,f=Hn,Nt=a.stateNode.containerInfo,Hn=!0,mi(r,s,a),Nt=c,Hn=f;break;case 0:case 11:case 14:case 15:if(!Bt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&md(a,s,v),f=f.next}while(f!==c)}mi(r,s,a);break;case 1:if(!Bt&&(Io(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(C){it(a,s,C)}mi(r,s,a);break;case 21:mi(r,s,a);break;case 22:a.mode&1?(Bt=(c=Bt)||a.memoizedState!==null,mi(r,s,a),Bt=c):mi(r,s,a);break;default:mi(r,s,a)}}function Rg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new cw),s.forEach(function(c){var f=Ew.bind(null,r,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Wn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=r,v=s,C=v;e:for(;C!==null;){switch(C.tag){case 5:Nt=C.stateNode,Hn=!1;break e;case 3:Nt=C.stateNode.containerInfo,Hn=!0;break e;case 4:Nt=C.stateNode.containerInfo,Hn=!0;break e}C=C.return}if(Nt===null)throw Error(t(160));Sg(g,v,f),Nt=null,Hn=!1;var D=f.alternate;D!==null&&(D.return=null),f.return=null}catch(q){it(f,s,q)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Cg(s,r),s=s.sibling}function Cg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Wn(s,r),ur(r),c&4){try{$a(3,r,r.return),Lu(3,r)}catch(fe){it(r,r.return,fe)}try{$a(5,r,r.return)}catch(fe){it(r,r.return,fe)}}break;case 1:Wn(s,r),ur(r),c&512&&a!==null&&Io(a,a.return);break;case 5:if(Wn(s,r),ur(r),c&512&&a!==null&&Io(a,a.return),r.flags&32){var f=r.stateNode;try{Jr(f,"")}catch(fe){it(r,r.return,fe)}}if(c&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,C=r.type,D=r.updateQueue;if(r.updateQueue=null,D!==null)try{C==="input"&&g.type==="radio"&&g.name!=null&&ea(f,g),ua(C,v);var q=ua(C,g);for(v=0;v<D.length;v+=2){var J=D[v],Z=D[v+1];J==="style"?oa(f,Z):J==="dangerouslySetInnerHTML"?ia(f,Z):J==="children"?Jr(f,Z):ee(f,J,Z,q)}switch(C){case"input":ta(f,g);break;case"textarea":Fs(f,g);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?Tr(f,!!g.multiple,oe,!1):Y!==!!g.multiple&&(g.defaultValue!=null?Tr(f,!!g.multiple,g.defaultValue,!0):Tr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Da]=g}catch(fe){it(r,r.return,fe)}}break;case 6:if(Wn(s,r),ur(r),c&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(fe){it(r,r.return,fe)}}break;case 3:if(Wn(s,r),ur(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{jn(s.containerInfo)}catch(fe){it(r,r.return,fe)}break;case 4:Wn(s,r),ur(r);break;case 13:Wn(s,r),ur(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(wd=Ge())),c&4&&Rg(r);break;case 22:if(J=a!==null&&a.memoizedState!==null,r.mode&1?(Bt=(q=Bt)||J,Wn(s,r),Bt=q):Wn(s,r),ur(r),c&8192){if(q=r.memoizedState!==null,(r.stateNode.isHidden=q)&&!J&&r.mode&1)for(ce=r,J=r.child;J!==null;){for(Z=ce=J;ce!==null;){switch(Y=ce,oe=Y.child,Y.tag){case 0:case 11:case 14:case 15:$a(4,Y,Y.return);break;case 1:Io(Y,Y.return);var de=Y.stateNode;if(typeof de.componentWillUnmount=="function"){c=Y,a=Y.return;try{s=c,de.props=s.memoizedProps,de.state=s.memoizedState,de.componentWillUnmount()}catch(fe){it(c,a,fe)}}break;case 5:Io(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Pg(Z);continue}}oe!==null?(oe.return=Y,ce=oe):Pg(Z)}J=J.sibling}e:for(J=null,Z=r;;){if(Z.tag===5){if(J===null){J=Z;try{f=Z.stateNode,q?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(C=Z.stateNode,D=Z.memoizedProps.style,v=D!=null&&D.hasOwnProperty("display")?D.display:null,C.style.display=sa("display",v))}catch(fe){it(r,r.return,fe)}}}else if(Z.tag===6){if(J===null)try{Z.stateNode.nodeValue=q?"":Z.memoizedProps}catch(fe){it(r,r.return,fe)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;J===Z&&(J=null),Z=Z.return}J===Z&&(J=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Wn(s,r),ur(r),c&4&&Rg(r);break;case 21:break;default:Wn(s,r),ur(r)}}function ur(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Tg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Jr(f,""),c.flags&=-33);var g=Ig(r);yd(r,g,f);break;case 3:case 4:var v=c.stateNode.containerInfo,C=Ig(r);_d(r,C,v);break;default:throw Error(t(161))}}catch(D){it(r,r.return,D)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function dw(r,s,a){ce=r,Ag(r)}function Ag(r,s,a){for(var c=(r.mode&1)!==0;ce!==null;){var f=ce,g=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||Ou;if(!v){var C=f.alternate,D=C!==null&&C.memoizedState!==null||Bt;C=Ou;var q=Bt;if(Ou=v,(Bt=D)&&!q)for(ce=f;ce!==null;)v=ce,D=v.child,v.tag===22&&v.memoizedState!==null?xg(f):D!==null?(D.return=v,ce=D):xg(f);for(;g!==null;)ce=g,Ag(g),g=g.sibling;ce=f,Ou=C,Bt=q}kg(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,ce=g):kg(r)}}function kg(r){for(;ce!==null;){var s=ce;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Bt||Lu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Bt)if(a===null)c.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:qn(s.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Pm(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Pm(s,v,a)}break;case 5:var C=s.stateNode;if(a===null&&s.flags&4){a=C;var D=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&a.focus();break;case"img":D.src&&(a.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var q=s.alternate;if(q!==null){var J=q.memoizedState;if(J!==null){var Z=J.dehydrated;Z!==null&&jn(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Bt||s.flags&512&&gd(s)}catch(Y){it(s,s.return,Y)}}if(s===r){ce=null;break}if(a=s.sibling,a!==null){a.return=s.return,ce=a;break}ce=s.return}}function Pg(r){for(;ce!==null;){var s=ce;if(s===r){ce=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ce=a;break}ce=s.return}}function xg(r){for(;ce!==null;){var s=ce;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Lu(4,s)}catch(D){it(s,a,D)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var f=s.return;try{c.componentDidMount()}catch(D){it(s,f,D)}}var g=s.return;try{gd(s)}catch(D){it(s,g,D)}break;case 5:var v=s.return;try{gd(s)}catch(D){it(s,v,D)}}}catch(D){it(s,s.return,D)}if(s===r){ce=null;break}var C=s.sibling;if(C!==null){C.return=s.return,ce=C;break}ce=s.return}}var fw=Math.ceil,bu=ie.ReactCurrentDispatcher,vd=ie.ReactCurrentOwner,kn=ie.ReactCurrentBatchConfig,Me=0,Ct=null,dt=null,Dt=0,gn=0,So=ci(0),vt=0,qa=null,hs=0,Vu=0,Ed=0,Ha=null,nn=null,wd=0,Ro=1/0,Mr=null,Mu=!1,Td=null,gi=null,Fu=!1,_i=null,Uu=0,Wa=0,Id=null,ju=-1,Bu=0;function Qt(){return Me&6?Ge():ju!==-1?ju:ju=Ge()}function yi(r){return r.mode&1?Me&2&&Dt!==0?Dt&-Dt:XE.transition!==null?(Bu===0&&(Bu=Zi()),Bu):(r=De,r!==0||(r=window.event,r=r===void 0?16:Ea(r.type)),r):1}function Gn(r,s,a,c){if(50<Wa)throw Wa=0,Id=null,Error(t(185));ni(r,a,c),(!(Me&2)||r!==Ct)&&(r===Ct&&(!(Me&2)&&(Vu|=a),vt===4&&vi(r,Dt)),rn(r,c),a===1&&Me===0&&!(s.mode&1)&&(Ro=Ge()+500,mu&&di()))}function rn(r,s){var a=r.callbackNode;Rr(r,s);var c=Ji(r,r===Ct?Dt:0);if(c===0)a!==null&&ma(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ma(a),s===1)r.tag===0?QE(Dg.bind(null,r)):_m(Dg.bind(null,r)),HE(function(){!(Me&6)&&di()}),a=null;else{switch(ii(c)){case 1:a=Xi;break;case 4:a=Zr;break;case 16:a=wn;break;case 536870912:a=Bl;break;default:a=wn}a=jg(a,Ng.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Ng(r,s){if(ju=-1,Bu=0,Me&6)throw Error(t(327));var a=r.callbackNode;if(Co()&&r.callbackNode!==a)return null;var c=Ji(r,r===Ct?Dt:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=zu(r,c);else{s=c;var f=Me;Me|=2;var g=Lg();(Ct!==r||Dt!==s)&&(Mr=null,Ro=Ge()+500,fs(r,s));do try{gw();break}catch(C){Og(r,C)}while(!0);Bh(),bu.current=g,Me=f,dt!==null?s=0:(Ct=null,Dt=0,s=vt)}if(s!==0){if(s===2&&(f=hn(r),f!==0&&(c=f,s=Sd(r,f))),s===1)throw a=qa,fs(r,0),vi(r,c),rn(r,Ge()),a;if(s===6)vi(r,c);else{if(f=r.current.alternate,!(c&30)&&!pw(f)&&(s=zu(r,c),s===2&&(g=hn(r),g!==0&&(c=g,s=Sd(r,g))),s===1))throw a=qa,fs(r,0),vi(r,c),rn(r,Ge()),a;switch(r.finishedWork=f,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ps(r,nn,Mr);break;case 3:if(vi(r,c),(c&130023424)===c&&(s=wd+500-Ge(),10<s)){if(Ji(r,0)!==0)break;if(f=r.suspendedLanes,(f&c)!==c){Qt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=xh(ps.bind(null,r,nn,Mr),s);break}ps(r,nn,Mr);break;case 4:if(vi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,f=-1;0<c;){var v=31-Wt(c);g=1<<v,v=s[v],v>f&&(f=v),c&=~g}if(c=f,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*fw(c/1960))-c,10<c){r.timeoutHandle=xh(ps.bind(null,r,nn,Mr),c);break}ps(r,nn,Mr);break;case 5:ps(r,nn,Mr);break;default:throw Error(t(329))}}}return rn(r,Ge()),r.callbackNode===a?Ng.bind(null,r):null}function Sd(r,s){var a=Ha;return r.current.memoizedState.isDehydrated&&(fs(r,s).flags|=256),r=zu(r,s),r!==2&&(s=nn,nn=a,s!==null&&Rd(s)),r}function Rd(r){nn===null?nn=r:nn.push.apply(nn,r)}function pw(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!zn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function vi(r,s){for(s&=~Ed,s&=~Vu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Wt(s),c=1<<a;r[a]=-1,s&=~c}}function Dg(r){if(Me&6)throw Error(t(327));Co();var s=Ji(r,0);if(!(s&1))return rn(r,Ge()),null;var a=zu(r,s);if(r.tag!==0&&a===2){var c=hn(r);c!==0&&(s=c,a=Sd(r,c))}if(a===1)throw a=qa,fs(r,0),vi(r,s),rn(r,Ge()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ps(r,nn,Mr),rn(r,Ge()),null}function Cd(r,s){var a=Me;Me|=1;try{return r(s)}finally{Me=a,Me===0&&(Ro=Ge()+500,mu&&di())}}function ds(r){_i!==null&&_i.tag===0&&!(Me&6)&&Co();var s=Me;Me|=1;var a=kn.transition,c=De;try{if(kn.transition=null,De=1,r)return r()}finally{De=c,kn.transition=a,Me=s,!(Me&6)&&di()}}function Ad(){gn=So.current,Xe(So)}function fs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,qE(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(Vh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&fu();break;case 3:wo(),Xe(Zt),Xe(Ft),Qh();break;case 5:Gh(c);break;case 4:wo();break;case 13:Xe(tt);break;case 19:Xe(tt);break;case 10:zh(c.type._context);break;case 22:case 23:Ad()}a=a.return}if(Ct=r,dt=r=Ei(r.current,null),Dt=gn=s,vt=0,qa=null,Ed=Vu=hs=0,nn=Ha=null,ls!==null){for(s=0;s<ls.length;s++)if(a=ls[s],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=f,c.next=v}a.pending=c}ls=null}return r}function Og(r,s){do{var a=dt;try{if(Bh(),Ru.current=Pu,Cu){for(var c=nt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Cu=!1}if(cs=0,Rt=yt=nt=null,Fa=!1,Ua=0,vd.current=null,a===null||a.return===null){vt=1,qa=s,dt=null;break}e:{var g=r,v=a.return,C=a,D=s;if(s=Dt,C.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var q=D,J=C,Z=J.tag;if(!(J.mode&1)&&(Z===0||Z===11||Z===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var oe=ig(v);if(oe!==null){oe.flags&=-257,sg(oe,v,C,g,s),oe.mode&1&&rg(g,q,s),s=oe,D=q;var de=s.updateQueue;if(de===null){var fe=new Set;fe.add(D),s.updateQueue=fe}else de.add(D);break e}else{if(!(s&1)){rg(g,q,s),kd();break e}D=Error(t(426))}}else if(Ze&&C.mode&1){var lt=ig(v);if(lt!==null){!(lt.flags&65536)&&(lt.flags|=256),sg(lt,v,C,g,s),Uh(To(D,C));break e}}g=D=To(D,C),vt!==4&&(vt=2),Ha===null?Ha=[g]:Ha.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var B=tg(g,D,s);km(g,B);break e;case 1:C=D;var V=g.type,z=g.stateNode;if(!(g.flags&128)&&(typeof V.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(gi===null||!gi.has(z)))){g.flags|=65536,s&=-s,g.lanes|=s;var te=ng(g,C,s);km(g,te);break e}}g=g.return}while(g!==null)}Vg(a)}catch(pe){s=pe,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function Lg(){var r=bu.current;return bu.current=Pu,r===null?Pu:r}function kd(){(vt===0||vt===3||vt===2)&&(vt=4),Ct===null||!(hs&268435455)&&!(Vu&268435455)||vi(Ct,Dt)}function zu(r,s){var a=Me;Me|=2;var c=Lg();(Ct!==r||Dt!==s)&&(Mr=null,fs(r,s));do try{mw();break}catch(f){Og(r,f)}while(!0);if(Bh(),Me=a,bu.current=c,dt!==null)throw Error(t(261));return Ct=null,Dt=0,vt}function mw(){for(;dt!==null;)bg(dt)}function gw(){for(;dt!==null&&!Ul();)bg(dt)}function bg(r){var s=Ug(r.alternate,r,gn);r.memoizedProps=r.pendingProps,s===null?Vg(r):dt=s,vd.current=null}function Vg(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=uw(a,s),a!==null){a.flags&=32767,dt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{vt=6,dt=null;return}}else if(a=lw(a,s,gn),a!==null){dt=a;return}if(s=s.sibling,s!==null){dt=s;return}dt=s=r}while(s!==null);vt===0&&(vt=5)}function ps(r,s,a){var c=De,f=kn.transition;try{kn.transition=null,De=1,_w(r,s,a,c)}finally{kn.transition=f,De=c}return null}function _w(r,s,a,c){do Co();while(_i!==null);if(Me&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(He(r,g),r===Ct&&(dt=Ct=null,Dt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Fu||(Fu=!0,jg(wn,function(){return Co(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=kn.transition,kn.transition=null;var v=De;De=1;var C=Me;Me|=4,vd.current=null,hw(r,a),Cg(a,r),ME(kh),oi=!!Ah,kh=Ah=null,r.current=a,dw(a),hh(),Me=C,De=v,kn.transition=g}else r.current=a;if(Fu&&(Fu=!1,_i=r,Uu=f),g=r.pendingLanes,g===0&&(gi=null),zl(a.stateNode),rn(r,Ge()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Mu)throw Mu=!1,r=Td,Td=null,r;return Uu&1&&r.tag!==0&&Co(),g=r.pendingLanes,g&1?r===Id?Wa++:(Wa=0,Id=r):Wa=0,di(),null}function Co(){if(_i!==null){var r=ii(Uu),s=kn.transition,a=De;try{if(kn.transition=null,De=16>r?16:r,_i===null)var c=!1;else{if(r=_i,_i=null,Uu=0,Me&6)throw Error(t(331));var f=Me;for(Me|=4,ce=r.current;ce!==null;){var g=ce,v=g.child;if(ce.flags&16){var C=g.deletions;if(C!==null){for(var D=0;D<C.length;D++){var q=C[D];for(ce=q;ce!==null;){var J=ce;switch(J.tag){case 0:case 11:case 15:$a(8,J,g)}var Z=J.child;if(Z!==null)Z.return=J,ce=Z;else for(;ce!==null;){J=ce;var Y=J.sibling,oe=J.return;if(wg(J),J===q){ce=null;break}if(Y!==null){Y.return=oe,ce=Y;break}ce=oe}}}var de=g.alternate;if(de!==null){var fe=de.child;if(fe!==null){de.child=null;do{var lt=fe.sibling;fe.sibling=null,fe=lt}while(fe!==null)}}ce=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,ce=v;else e:for(;ce!==null;){if(g=ce,g.flags&2048)switch(g.tag){case 0:case 11:case 15:$a(9,g,g.return)}var B=g.sibling;if(B!==null){B.return=g.return,ce=B;break e}ce=g.return}}var V=r.current;for(ce=V;ce!==null;){v=ce;var z=v.child;if(v.subtreeFlags&2064&&z!==null)z.return=v,ce=z;else e:for(v=V;ce!==null;){if(C=ce,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:Lu(9,C)}}catch(pe){it(C,C.return,pe)}if(C===v){ce=null;break e}var te=C.sibling;if(te!==null){te.return=C.return,ce=te;break e}ce=C.return}}if(Me=f,di(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Yi,r)}catch{}c=!0}return c}finally{De=a,kn.transition=s}}return!1}function Mg(r,s,a){s=To(a,s),s=tg(r,s,1),r=pi(r,s,1),s=Qt(),r!==null&&(ni(r,1,s),rn(r,s))}function it(r,s,a){if(r.tag===3)Mg(r,r,a);else for(;s!==null;){if(s.tag===3){Mg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gi===null||!gi.has(c))){r=To(a,r),r=ng(s,r,1),s=pi(s,r,1),r=Qt(),s!==null&&(ni(s,1,r),rn(s,r));break}}s=s.return}}function yw(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Qt(),r.pingedLanes|=r.suspendedLanes&a,Ct===r&&(Dt&a)===a&&(vt===4||vt===3&&(Dt&130023424)===Dt&&500>Ge()-wd?fs(r,0):Ed|=a),rn(r,s)}function Fg(r,s){s===0&&(r.mode&1?(s=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):s=1);var a=Qt();r=Lr(r,s),r!==null&&(ni(r,s,a),rn(r,a))}function vw(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Fg(r,a)}function Ew(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Fg(r,a)}var Ug;Ug=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Zt.current)tn=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return tn=!1,aw(r,s,a);tn=!!(r.flags&131072)}else tn=!1,Ze&&s.flags&1048576&&ym(s,_u,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Du(r,s),r=s.pendingProps;var f=po(s,Ft.current);Eo(s,a),f=Jh(null,s,c,r,f,a);var g=Zh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,en(c)?(g=!0,pu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Hh(s),f.updater=xu,s.stateNode=f,f._reactInternals=s,sd(s,c,r,a),s=ud(null,s,c,!0,g,a)):(s.tag=0,Ze&&g&&bh(s),Kt(null,s,f,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Du(r,s),r=s.pendingProps,f=c._init,c=f(c._payload),s.type=c,f=s.tag=Tw(c),r=qn(c,r),f){case 0:s=ld(null,s,c,r,a);break e;case 1:s=hg(null,s,c,r,a);break e;case 11:s=og(null,s,c,r,a);break e;case 14:s=ag(null,s,c,qn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:qn(c,f),ld(r,s,c,f,a);case 1:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:qn(c,f),hg(r,s,c,f,a);case 3:e:{if(dg(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,f=g.element,Am(r,s),Iu(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=To(Error(t(423)),s),s=fg(r,s,c,a,f);break e}else if(c!==f){f=To(Error(t(424)),s),s=fg(r,s,c,a,f);break e}else for(mn=ui(s.stateNode.containerInfo.firstChild),pn=s,Ze=!0,$n=null,a=Rm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_o(),c===f){s=Vr(r,s,a);break e}Kt(r,s,c,a)}s=s.child}return s;case 5:return xm(s),r===null&&Fh(s),c=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,v=f.children,Ph(c,f)?v=null:g!==null&&Ph(c,g)&&(s.flags|=32),cg(r,s),Kt(r,s,v,a),s.child;case 6:return r===null&&Fh(s),null;case 13:return pg(r,s,a);case 4:return Wh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=yo(s,null,c,a):Kt(r,s,c,a),s.child;case 11:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:qn(c,f),og(r,s,c,f,a);case 7:return Kt(r,s,s.pendingProps,a),s.child;case 8:return Kt(r,s,s.pendingProps.children,a),s.child;case 12:return Kt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,f=s.pendingProps,g=s.memoizedProps,v=f.value,Ke(Eu,c._currentValue),c._currentValue=v,g!==null)if(zn(g.value,v)){if(g.children===f.children&&!Zt.current){s=Vr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var C=g.dependencies;if(C!==null){v=g.child;for(var D=C.firstContext;D!==null;){if(D.context===c){if(g.tag===1){D=br(-1,a&-a),D.tag=2;var q=g.updateQueue;if(q!==null){q=q.shared;var J=q.pending;J===null?D.next=D:(D.next=J.next,J.next=D),q.pending=D}}g.lanes|=a,D=g.alternate,D!==null&&(D.lanes|=a),$h(g.return,a,s),C.lanes|=a;break}D=D.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,C=v.alternate,C!==null&&(C.lanes|=a),$h(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}Kt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,c=s.pendingProps.children,Eo(s,a),f=Cn(f),c=c(f),s.flags|=1,Kt(r,s,c,a),s.child;case 14:return c=s.type,f=qn(c,s.pendingProps),f=qn(c.type,f),ag(r,s,c,f,a);case 15:return lg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:qn(c,f),Du(r,s),s.tag=1,en(c)?(r=!0,pu(s)):r=!1,Eo(s,a),Zm(s,c,f),sd(s,c,f,a),ud(null,s,c,!0,r,a);case 19:return gg(r,s,a);case 22:return ug(r,s,a)}throw Error(t(156,s.tag))};function jg(r,s){return Ws(r,s)}function ww(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(r,s,a,c){return new ww(r,s,a,c)}function Pd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Tw(r){if(typeof r=="function")return Pd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===O)return 11;if(r===Tt)return 14}return 2}function Ei(r,s){var a=r.alternate;return a===null?(a=Pn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function $u(r,s,a,c,f,g){var v=2;if(c=r,typeof r=="function")Pd(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case x:return ms(a.children,f,g,s);case S:v=8,f|=8;break;case A:return r=Pn(12,a,s,f|2),r.elementType=A,r.lanes=g,r;case k:return r=Pn(13,a,s,f),r.elementType=k,r.lanes=g,r;case qe:return r=Pn(19,a,s,f),r.elementType=qe,r.lanes=g,r;case $e:return qu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:v=10;break e;case M:v=9;break e;case O:v=11;break e;case Tt:v=14;break e;case Mt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Pn(v,a,s,f),s.elementType=r,s.type=c,s.lanes=g,s}function ms(r,s,a,c){return r=Pn(7,r,c,s),r.lanes=a,r}function qu(r,s,a,c){return r=Pn(22,r,c,s),r.elementType=$e,r.lanes=a,r.stateNode={isHidden:!1},r}function xd(r,s,a){return r=Pn(6,r,null,s),r.lanes=a,r}function Nd(r,s,a){return s=Pn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function Iw(r,s,a,c,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Dd(r,s,a,c,f,g,v,C,D){return r=new Iw(r,s,a,C,D),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Pn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(g),r}function Sw(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Bg(r){if(!r)return hi;r=r._reactInternals;e:{if(bn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(en(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(en(a))return mm(r,a,s)}return s}function zg(r,s,a,c,f,g,v,C,D){return r=Dd(a,c,!0,r,f,g,v,C,D),r.context=Bg(null),a=r.current,c=Qt(),f=yi(a),g=br(c,f),g.callback=s??null,pi(a,g,f),r.current.lanes=f,ni(r,f,c),rn(r,c),r}function Hu(r,s,a,c){var f=s.current,g=Qt(),v=yi(f);return a=Bg(a),s.context===null?s.context=a:s.pendingContext=a,s=br(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=pi(f,s,v),r!==null&&(Gn(r,f,v,g),Tu(r,f,v)),v}function Wu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function $g(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Od(r,s){$g(r,s),(r=r.alternate)&&$g(r,s)}function Rw(){return null}var qg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ld(r){this._internalRoot=r}Gu.prototype.render=Ld.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Hu(r,s,null,null)},Gu.prototype.unmount=Ld.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ds(function(){Hu(null,r,null,null)}),s[xr]=null}};function Gu(r){this._internalRoot=r}Gu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Gl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<nr.length&&s!==0&&s<nr[a].priority;a++);nr.splice(a,0,r),a===0&&Xl(r)}};function bd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ku(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function Cw(r,s,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var q=Wu(v);g.call(q)}}var v=zg(s,c,r,0,null,!1,!1,"",Hg);return r._reactRootContainer=v,r[xr]=v.current,xa(r.nodeType===8?r.parentNode:r),ds(),v}for(;f=r.lastChild;)r.removeChild(f);if(typeof c=="function"){var C=c;c=function(){var q=Wu(D);C.call(q)}}var D=Dd(r,0,!1,null,null,!1,!1,"",Hg);return r._reactRootContainer=D,r[xr]=D.current,xa(r.nodeType===8?r.parentNode:r),ds(function(){Hu(s,D,a,c)}),D}function Qu(r,s,a,c,f){var g=a._reactRootContainer;if(g){var v=g;if(typeof f=="function"){var C=f;f=function(){var D=Wu(v);C.call(D)}}Hu(s,v,r,f)}else v=Cw(a,s,r,f,c);return Wu(v)}Hl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=ei(s.pendingLanes);a!==0&&(ri(s,a|1),rn(s,Ge()),!(Me&6)&&(Ro=Ge()+500,di()))}break;case 13:ds(function(){var c=Lr(r,1);if(c!==null){var f=Qt();Gn(c,r,1,f)}}),Od(r,1)}},Qs=function(r){if(r.tag===13){var s=Lr(r,134217728);if(s!==null){var a=Qt();Gn(s,r,134217728,a)}Od(r,134217728)}},Wl=function(r){if(r.tag===13){var s=yi(r),a=Lr(r,s);if(a!==null){var c=Qt();Gn(a,r,s,c)}Od(r,s)}},Gl=function(){return De},Kl=function(r,s){var a=De;try{return De=r,s()}finally{De=a}},js=function(r,s,a){switch(s){case"input":if(ta(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var f=du(c);if(!f)throw Error(t(90));Ls(c),ta(c,f)}}}break;case"textarea":Fs(r,a);break;case"select":s=a.value,s!=null&&Tr(r,!!a.multiple,s,!1)}},Wi=Cd,ha=ds;var Aw={usingClientEntryPoint:!1,Events:[Oa,ho,du,er,ca,Cd]},Ga={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kw={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=pa(r),r===null?null:r.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||Rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{Yi=Xu.inject(kw),cn=Xu}catch{}}return sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Aw,sn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bd(s))throw Error(t(200));return Sw(r,s,null,a)},sn.createRoot=function(r,s){if(!bd(r))throw Error(t(299));var a=!1,c="",f=qg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Dd(r,1,!1,null,null,a,!1,c,f),r[xr]=s.current,xa(r.nodeType===8?r.parentNode:r),new Ld(s)},sn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=pa(s),r=r===null?null:r.stateNode,r},sn.flushSync=function(r){return ds(r)},sn.hydrate=function(r,s,a){if(!Ku(s))throw Error(t(200));return Qu(null,r,s,!0,a)},sn.hydrateRoot=function(r,s,a){if(!bd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",v=qg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=zg(s,null,r,1,a??null,f,!1,g,v),r[xr]=s.current,xa(r),c)for(r=0;r<c.length;r++)a=c[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Gu(s)},sn.render=function(r,s,a){if(!Ku(s))throw Error(t(200));return Qu(null,r,s,!1,a)},sn.unmountComponentAtNode=function(r){if(!Ku(r))throw Error(t(40));return r._reactRootContainer?(ds(function(){Qu(null,null,r,!1,function(){r._reactRootContainer=null,r[xr]=null})}),!0):!1},sn.unstable_batchedUpdates=Cd,sn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Ku(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Qu(r,s,a,!1,c)},sn.version="18.3.1-next-f1338f8080-20240426",sn}var Zg;function Vw(){if(Zg)return Fd.exports;Zg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Fd.exports=bw(),Fd.exports}var e_;function Mw(){if(e_)return Yu;e_=1;var n=Vw();return Yu.createRoot=n.createRoot,Yu.hydrateRoot=n.hydrateRoot,Yu}var Fw=Mw(),Qa={},t_;function Uw(){if(t_)return Qa;t_=1,Object.defineProperty(Qa,"__esModule",{value:!0}),Qa.parse=h,Qa.serialize=_;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function h(w,P){const b=new l,U=w.length;if(U<2)return b;const L=(P==null?void 0:P.decode)||E;let W=0;do{const G=w.indexOf("=",W);if(G===-1)break;const ee=w.indexOf(";",W),ie=ee===-1?U:ee;if(G>ie){W=w.lastIndexOf(";",G-1)+1;continue}const ne=d(w,W,G),ae=p(w,G,ne),x=w.slice(ne,ae);if(b[x]===void 0){let S=d(w,G+1,ie),A=p(w,ie,S);const N=L(w.slice(S,A));b[x]=N}W=ie+1}while(W<U);return b}function d(w,P,b){do{const U=w.charCodeAt(P);if(U!==32&&U!==9)return P}while(++P<b);return b}function p(w,P,b){for(;P>b;){const U=w.charCodeAt(--P);if(U!==32&&U!==9)return P+1}return b}function _(w,P,b){const U=(b==null?void 0:b.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const L=U(P);if(!e.test(L))throw new TypeError(`argument val is invalid: ${P}`);let W=w+"="+L;if(!b)return W;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);W+="; Max-Age="+b.maxAge}if(b.domain){if(!t.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);W+="; Domain="+b.domain}if(b.path){if(!i.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);W+="; Path="+b.path}if(b.expires){if(!I(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);W+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(W+="; HttpOnly"),b.secure&&(W+="; Secure"),b.partitioned&&(W+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return W}function E(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function I(w){return o.call(w)==="[object Date]"}return Qa}Uw();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var n_="popstate";function jw(n={}){function e(o,l){let{pathname:h="/",search:d="",hash:p=""}=ks(o.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),sf("",{pathname:h,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let h=o.document.querySelector("base"),d="";if(h&&h.getAttribute("href")){let p=o.location.href,_=p.indexOf("#");d=_===-1?p:p.slice(0,_)}return d+"#"+(typeof l=="string"?l:cl(l))}function i(o,l){Nn(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return zw(e,t,i,n)}function et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Nn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Bw(){return Math.random().toString(36).substring(2,10)}function r_(n,e){return{usr:n.state,key:n.key,idx:e}}function sf(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?ks(e):e,state:t,key:e&&e.key||i||Bw()}}function cl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function ks(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function zw(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,d="POP",p=null,_=E();_==null&&(_=0,h.replaceState({...h.state,idx:_},""));function E(){return(h.state||{idx:null}).idx}function I(){d="POP";let L=E(),W=L==null?null:L-_;_=L,p&&p({action:d,location:U.location,delta:W})}function w(L,W){d="PUSH";let G=sf(U.location,L,W);t&&t(G,L),_=E()+1;let ee=r_(G,_),ie=U.createHref(G);try{h.pushState(ee,"",ie)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;o.location.assign(ie)}l&&p&&p({action:d,location:U.location,delta:1})}function P(L,W){d="REPLACE";let G=sf(U.location,L,W);t&&t(G,L),_=E();let ee=r_(G,_),ie=U.createHref(G);h.replaceState(ee,"",ie),l&&p&&p({action:d,location:U.location,delta:0})}function b(L){let W=o.location.origin!=="null"?o.location.origin:o.location.href,G=typeof L=="string"?L:cl(L);return G=G.replace(/ $/,"%20"),et(W,`No window.location.(origin|href) available to create URL for href: ${G}`),new URL(G,W)}let U={get action(){return d},get location(){return n(o,h)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(n_,I),p=L,()=>{o.removeEventListener(n_,I),p=null}},createHref(L){return e(o,L)},createURL:b,encodeLocation(L){let W=b(L);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:w,replace:P,go(L){return h.go(L)}};return U}function Ly(n,e,t="/"){return $w(n,e,t,!1)}function $w(n,e,t,i){let o=typeof e=="string"?ks(e):e,l=Di(o.pathname||"/",t);if(l==null)return null;let h=by(n);qw(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let _=tT(l);d=Zw(h[p],_,i)}return d}function by(n,e=[],t=[],i=""){let o=(l,h,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(et(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let _=$r([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(et(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),by(l.children,e,E,_)),!(l.path==null&&!l.index)&&e.push({path:_,score:Yw(_,l.index),routesMeta:E})};return n.forEach((l,h)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,h);else for(let p of Vy(l.path))o(l,h,p)}),e}function Vy(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=Vy(i.join("/")),d=[];return d.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...h),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function qw(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Jw(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var Hw=/^:[\w-]+$/,Ww=3,Gw=2,Kw=1,Qw=10,Xw=-2,i_=n=>n==="*";function Yw(n,e){let t=n.split("/"),i=t.length;return t.some(i_)&&(i+=Xw),e&&(i+=Gw),t.filter(o=>!i_(o)).reduce((o,l)=>o+(Hw.test(l)?Ww:l===""?Kw:Qw),i)}function Jw(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function Zw(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",h=[];for(let d=0;d<i.length;++d){let p=i[d],_=d===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",I=Ec({path:p.relativePath,caseSensitive:p.caseSensitive,end:_},E),w=p.route;if(!I&&_&&t&&!i[i.length-1].route.index&&(I=Ec({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!I)return null;Object.assign(o,I.params),h.push({params:o,pathname:$r([l,I.pathname]),pathnameBase:sT($r([l,I.pathnameBase])),route:w}),I.pathnameBase!=="/"&&(l=$r([l,I.pathnameBase]))}return h}function Ec(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=eT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((_,{paramName:E,isOptional:I},w)=>{if(E==="*"){let b=d[w]||"";h=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const P=d[w];return I&&!P?_[E]=void 0:_[E]=(P||"").replace(/%2F/g,"/"),_},{}),pathname:l,pathnameBase:h,pattern:n}}function eT(n,e=!1,t=!0){Nn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function tT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Nn(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Di(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function nT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?ks(n):n;return{pathname:t?t.startsWith("/")?t:rT(t,e):e,search:oT(i),hash:aT(o)}}function rT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Bd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function iT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Of(n){let e=iT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Lf(n,e,t,i=!1){let o;typeof n=="string"?o=ks(n):(o={...n},et(!o.pathname||!o.pathname.includes("?"),Bd("?","pathname","search",o)),et(!o.pathname||!o.pathname.includes("#"),Bd("#","pathname","hash",o)),et(!o.search||!o.search.includes("#"),Bd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,d;if(h==null)d=t;else{let I=e.length-1;if(!i&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),I-=1;o.pathname=w.join("/")}d=I>=0?e[I]:"/"}let p=nT(o,d),_=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(_||E)&&(p.pathname+="/"),p}var $r=n=>n.join("/").replace(/\/\/+/g,"/"),sT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),oT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,aT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function lT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var My=["POST","PUT","PATCH","DELETE"];new Set(My);var uT=["GET",...My];new Set(uT);var qo=$.createContext(null);qo.displayName="DataRouter";var Fc=$.createContext(null);Fc.displayName="DataRouterState";var Fy=$.createContext({isTransitioning:!1});Fy.displayName="ViewTransition";var cT=$.createContext(new Map);cT.displayName="Fetchers";var hT=$.createContext(null);hT.displayName="Await";var Yn=$.createContext(null);Yn.displayName="Navigation";var wl=$.createContext(null);wl.displayName="Location";var Jn=$.createContext({outlet:null,matches:[],isDataRoute:!1});Jn.displayName="Route";var bf=$.createContext(null);bf.displayName="RouteError";function dT(n,{relative:e}={}){et(Ho(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=$.useContext(Yn),{hash:o,pathname:l,search:h}=Il(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:$r([t,l])),i.createHref({pathname:d,search:h,hash:o})}function Ho(){return $.useContext(wl)!=null}function yr(){return et(Ho(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(wl).location}var Uy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jy(n){$.useContext(Yn).static||$.useLayoutEffect(n)}function Tl(){let{isDataRoute:n}=$.useContext(Jn);return n?AT():fT()}function fT(){et(Ho(),"useNavigate() may be used only in the context of a <Router> component.");let n=$.useContext(qo),{basename:e,navigator:t}=$.useContext(Yn),{matches:i}=$.useContext(Jn),{pathname:o}=yr(),l=JSON.stringify(Of(i)),h=$.useRef(!1);return jy(()=>{h.current=!0}),$.useCallback((p,_={})=>{if(Nn(h.current,Uy),!h.current)return;if(typeof p=="number"){t.go(p);return}let E=Lf(p,JSON.parse(l),o,_.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:$r([e,E.pathname])),(_.replace?t.replace:t.push)(E,_.state,_)},[e,t,l,o,n])}var pT=$.createContext(null);function mT(n){let e=$.useContext(Jn).outlet;return e&&$.createElement(pT.Provider,{value:n},e)}function Il(n,{relative:e}={}){let{matches:t}=$.useContext(Jn),{pathname:i}=yr(),o=JSON.stringify(Of(t));return $.useMemo(()=>Lf(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function gT(n,e){return By(n,e)}function By(n,e,t,i){var W;et(Ho(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=$.useContext(Yn),{matches:l}=$.useContext(Jn),h=l[l.length-1],d=h?h.params:{},p=h?h.pathname:"/",_=h?h.pathnameBase:"/",E=h&&h.route;{let G=E&&E.path||"";zy(p,!E||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let I=yr(),w;if(e){let G=typeof e=="string"?ks(e):e;et(_==="/"||((W=G.pathname)==null?void 0:W.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${G.pathname}" was given in the \`location\` prop.`),w=G}else w=I;let P=w.pathname||"/",b=P;if(_!=="/"){let G=_.replace(/^\//,"").split("/");b="/"+P.replace(/^\//,"").split("/").slice(G.length).join("/")}let U=Ly(n,{pathname:b});Nn(E||U!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Nn(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=wT(U&&U.map(G=>Object.assign({},G,{params:Object.assign({},d,G.params),pathname:$r([_,o.encodeLocation?o.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?_:$r([_,o.encodeLocation?o.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),l,t,i);return e&&L?$.createElement(wl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},L):L}function _T(){let n=CT(),e=lT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:l},"ErrorBoundary")," or"," ",$.createElement("code",{style:l},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:o},t):null,h)}var yT=$.createElement(_T,null),vT=class extends $.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?$.createElement(Jn.Provider,{value:this.props.routeContext},$.createElement(bf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ET({routeContext:n,match:e,children:t}){let i=$.useContext(qo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(Jn.Provider,{value:n},t)}function wT(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(_=>_.route.id&&(l==null?void 0:l[_.route.id])!==void 0);et(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let _=o[p];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(d=p),_.route.id){let{loaderData:E,errors:I}=t,w=_.route.loader&&!E.hasOwnProperty(_.route.id)&&(!I||I[_.route.id]===void 0);if(_.route.lazy||w){h=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,_,E)=>{let I,w=!1,P=null,b=null;t&&(I=l&&_.route.id?l[_.route.id]:void 0,P=_.route.errorElement||yT,h&&(d<0&&E===0?(zy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,b=null):d===E&&(w=!0,b=_.route.hydrateFallbackElement||null)));let U=e.concat(o.slice(0,E+1)),L=()=>{let W;return I?W=P:w?W=b:_.route.Component?W=$.createElement(_.route.Component,null):_.route.element?W=_.route.element:W=p,$.createElement(ET,{match:_,routeContext:{outlet:p,matches:U,isDataRoute:t!=null},children:W})};return t&&(_.route.ErrorBoundary||_.route.errorElement||E===0)?$.createElement(vT,{location:t.location,revalidation:t.revalidation,component:P,error:I,children:L(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):L()},null)}function Vf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function TT(n){let e=$.useContext(qo);return et(e,Vf(n)),e}function IT(n){let e=$.useContext(Fc);return et(e,Vf(n)),e}function ST(n){let e=$.useContext(Jn);return et(e,Vf(n)),e}function Mf(n){let e=ST(n),t=e.matches[e.matches.length-1];return et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function RT(){return Mf("useRouteId")}function CT(){var i;let n=$.useContext(bf),e=IT("useRouteError"),t=Mf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function AT(){let{router:n}=TT("useNavigate"),e=Mf("useNavigate"),t=$.useRef(!1);return jy(()=>{t.current=!0}),$.useCallback(async(o,l={})=>{Nn(t.current,Uy),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var s_={};function zy(n,e,t){!e&&!s_[n]&&(s_[n]=!0,Nn(!1,t))}$.memo(kT);function kT({routes:n,future:e,state:t}){return By(n,void 0,t,e)}function o_({to:n,replace:e,state:t,relative:i}){et(Ho(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=$.useContext(Yn);Nn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=$.useContext(Jn),{pathname:h}=yr(),d=Tl(),p=Lf(n,Of(l),h,i==="path"),_=JSON.stringify(p);return $.useEffect(()=>{d(JSON.parse(_),{replace:e,state:t,relative:i})},[d,_,i,e,t]),null}function PT(n){return mT(n.context)}function Fr(n){et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function xT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){et(!Ho(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),d=$.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=ks(t));let{pathname:p="/",search:_="",hash:E="",state:I=null,key:w="default"}=t,P=$.useMemo(()=>{let b=Di(p,h);return b==null?null:{location:{pathname:b,search:_,hash:E,state:I,key:w},navigationType:i}},[h,p,_,E,I,w,i]);return Nn(P!=null,`<Router basename="${h}"> is not able to match the URL "${p}${_}${E}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:$.createElement(Yn.Provider,{value:d},$.createElement(wl.Provider,{children:e,value:P}))}function NT({children:n,location:e}){return gT(of(n),e)}function of(n,e=[]){let t=[];return $.Children.forEach(n,(i,o)=>{if(!$.isValidElement(i))return;let l=[...e,o];if(i.type===$.Fragment){t.push.apply(t,of(i.props.children,l));return}et(i.type===Fr,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),et(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=of(i.props.children,l)),t.push(h)}),t}var lc="get",uc="application/x-www-form-urlencoded";function Uc(n){return n!=null&&typeof n.tagName=="string"}function DT(n){return Uc(n)&&n.tagName.toLowerCase()==="button"}function OT(n){return Uc(n)&&n.tagName.toLowerCase()==="form"}function LT(n){return Uc(n)&&n.tagName.toLowerCase()==="input"}function bT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function VT(n,e){return n.button===0&&(!e||e==="_self")&&!bT(n)}var Ju=null;function MT(){if(Ju===null)try{new FormData(document.createElement("form"),0),Ju=!1}catch{Ju=!0}return Ju}var FT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zd(n){return n!=null&&!FT.has(n)?(Nn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uc}"`),null):n}function UT(n,e){let t,i,o,l,h;if(OT(n)){let d=n.getAttribute("action");i=d?Di(d,e):null,t=n.getAttribute("method")||lc,o=zd(n.getAttribute("enctype"))||uc,l=new FormData(n)}else if(DT(n)||LT(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Di(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||lc,o=zd(n.getAttribute("formenctype"))||zd(d.getAttribute("enctype"))||uc,l=new FormData(d,n),!MT()){let{name:_,type:E,value:I}=n;if(E==="image"){let w=_?`${_}.`:"";l.append(`${w}x`,"0"),l.append(`${w}y`,"0")}else _&&l.append(_,I)}}else{if(Uc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=lc,i=null,o=uc,h=n}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}function Ff(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function jT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function BT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function zT(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await jT(l,t);return h.links?h.links():[]}return[]}));return WT(i.flat(1).filter(BT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function a_(n,e,t,i,o,l){let h=(p,_)=>t[_]?p.route.id!==t[_].route.id:!0,d=(p,_)=>{var E;return t[_].pathname!==p.pathname||((E=t[_].route.path)==null?void 0:E.endsWith("*"))&&t[_].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,_)=>h(p,_)||d(p,_)):l==="data"?e.filter((p,_)=>{var I;let E=i.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,_)||d(p,_))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((I=t[0])==null?void 0:I.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function $T(n,e){return qT(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function qT(n){return[...new Set(n)]}function HT(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function WT(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(HT(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function GT(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function KT(){let n=$.useContext(qo);return Ff(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function QT(){let n=$.useContext(Fc);return Ff(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Uf=$.createContext(void 0);Uf.displayName="FrameworkContext";function $y(){let n=$.useContext(Uf);return Ff(n,"You must render this element inside a <HydratedRouter> element"),n}function XT(n,e){let t=$.useContext(Uf),[i,o]=$.useState(!1),[l,h]=$.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:_,onMouseLeave:E,onTouchStart:I}=e,w=$.useRef(null);$.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let U=W=>{W.forEach(G=>{h(G.isIntersecting)})},L=new IntersectionObserver(U,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[n]),$.useEffect(()=>{if(i){let U=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(U)}}},[i]);let P=()=>{o(!0)},b=()=>{o(!1),h(!1)};return t?n!=="intent"?[l,w,{}]:[l,w,{onFocus:Xa(d,P),onBlur:Xa(p,b),onMouseEnter:Xa(_,P),onMouseLeave:Xa(E,b),onTouchStart:Xa(I,P)}]:[!1,w,{}]}function Xa(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function YT({page:n,...e}){let{router:t}=KT(),i=$.useMemo(()=>Ly(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?$.createElement(ZT,{page:n,matches:i,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function JT(n){let{manifest:e,routeModules:t}=$y(),[i,o]=$.useState([]);return $.useEffect(()=>{let l=!1;return zT(n,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[n,e,t]),i}function ZT({page:n,matches:e,...t}){let i=yr(),{manifest:o,routeModules:l}=$y(),{loaderData:h,matches:d}=QT(),p=$.useMemo(()=>a_(n,e,d,o,i,"data"),[n,e,d,o,i]),_=$.useMemo(()=>a_(n,e,d,o,i,"assets"),[n,e,d,o,i]),E=$.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let P=new Set,b=!1;if(e.forEach(L=>{var G;let W=o.routes[L.route.id];!W||!W.hasLoader||(!p.some(ee=>ee.route.id===L.route.id)&&L.route.id in h&&((G=l[L.route.id])!=null&&G.shouldRevalidate)||W.hasClientLoader?b=!0:P.add(L.route.id))}),P.size===0)return[];let U=GT(n);return b&&P.size>0&&U.searchParams.set("_routes",e.filter(L=>P.has(L.route.id)).map(L=>L.route.id).join(",")),[U.pathname+U.search]},[h,i,o,p,e,n,l]),I=$.useMemo(()=>$T(_,o),[_,o]),w=JT(_);return $.createElement($.Fragment,null,E.map(P=>$.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),I.map(P=>$.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),w.map(({key:P,link:b})=>$.createElement("link",{key:P,...b})))}function eI(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var qy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qy&&(window.__reactRouterVersion="7.0.2")}catch{}function tI({basename:n,children:e,window:t}){let i=$.useRef();i.current==null&&(i.current=jw({window:t,v5Compat:!0}));let o=i.current,[l,h]=$.useState({action:o.action,location:o.location}),d=$.useCallback(p=>{$.startTransition(()=>h(p))},[h]);return $.useLayoutEffect(()=>o.listen(d),[o,d]),$.createElement(xT,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var Hy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,No=$.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:d,target:p,to:_,preventScrollReset:E,viewTransition:I,...w},P){let{basename:b}=$.useContext(Yn),U=typeof _=="string"&&Hy.test(_),L,W=!1;if(typeof _=="string"&&U&&(L=_,qy))try{let A=new URL(window.location.href),N=_.startsWith("//")?new URL(A.protocol+_):new URL(_),M=Di(N.pathname,b);N.origin===A.origin&&M!=null?_=M+N.search+N.hash:W=!0}catch{Nn(!1,`<Link to="${_}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=dT(_,{relative:o}),[ee,ie,ne]=XT(i,w),ae=sI(_,{replace:h,state:d,target:p,preventScrollReset:E,relative:o,viewTransition:I});function x(A){e&&e(A),A.defaultPrevented||ae(A)}let S=$.createElement("a",{...w,...ne,href:L||G,onClick:W||l?e:x,ref:eI(P,ie),target:p,"data-discover":!U&&t==="render"?"true":void 0});return ee&&!U?$.createElement($.Fragment,null,S,$.createElement(YT,{page:G})):S});No.displayName="Link";var nI=$.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:d,children:p,..._},E){let I=Il(h,{relative:_.relative}),w=yr(),P=$.useContext(Fc),{navigator:b,basename:U}=$.useContext(Yn),L=P!=null&&cI(I)&&d===!0,W=b.encodeLocation?b.encodeLocation(I).pathname:I.pathname,G=w.pathname,ee=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;t||(G=G.toLowerCase(),ee=ee?ee.toLowerCase():null,W=W.toLowerCase()),ee&&U&&(ee=Di(ee,U)||ee);const ie=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let ne=G===W||!o&&G.startsWith(W)&&G.charAt(ie)==="/",ae=ee!=null&&(ee===W||!o&&ee.startsWith(W)&&ee.charAt(W.length)==="/"),x={isActive:ne,isPending:ae,isTransitioning:L},S=ne?e:void 0,A;typeof i=="function"?A=i(x):A=[i,ne?"active":null,ae?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let N=typeof l=="function"?l(x):l;return $.createElement(No,{..._,"aria-current":S,className:A,ref:E,style:N,to:h,viewTransition:d},typeof p=="function"?p(x):p)});nI.displayName="NavLink";var rI=$.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=lc,action:d,onSubmit:p,relative:_,preventScrollReset:E,viewTransition:I,...w},P)=>{let b=lI(),U=uI(d,{relative:_}),L=h.toLowerCase()==="get"?"get":"post",W=typeof d=="string"&&Hy.test(d),G=ee=>{if(p&&p(ee),ee.defaultPrevented)return;ee.preventDefault();let ie=ee.nativeEvent.submitter,ne=(ie==null?void 0:ie.getAttribute("formmethod"))||h;b(ie||ee.currentTarget,{fetcherKey:e,method:ne,navigate:t,replace:o,state:l,relative:_,preventScrollReset:E,viewTransition:I})};return $.createElement("form",{ref:P,method:L,action:U,onSubmit:i?p:G,...w,"data-discover":!W&&n==="render"?"true":void 0})});rI.displayName="Form";function iI(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wy(n){let e=$.useContext(qo);return et(e,iI(n)),e}function sI(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let d=Tl(),p=yr(),_=Il(n,{relative:l});return $.useCallback(E=>{if(VT(E,e)){E.preventDefault();let I=t!==void 0?t:cl(p)===cl(_);d(n,{replace:I,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[p,d,_,t,i,e,n,o,l,h])}var oI=0,aI=()=>`__${String(++oI)}__`;function lI(){let{router:n}=Wy("useSubmit"),{basename:e}=$.useContext(Yn),t=RT();return $.useCallback(async(i,o={})=>{let{action:l,method:h,encType:d,formData:p,body:_}=UT(i,e);if(o.navigate===!1){let E=o.fetcherKey||aI();await n.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:_,formMethod:o.method||h,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:_,formMethod:o.method||h,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function uI(n,{relative:e}={}){let{basename:t}=$.useContext(Yn),i=$.useContext(Jn);et(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...Il(n||".",{relative:e})},h=yr();if(n==null){l.search=h.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(E=>E==="")){d.delete("index"),p.filter(I=>I).forEach(I=>d.append("index",I));let E=d.toString();l.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:$r([t,l.pathname])),cl(l)}function cI(n,e={}){let t=$.useContext(Fy);et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Wy("useViewTransitionState"),o=Il(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Di(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=Di(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Ec(o.pathname,h)!=null||Ec(o.pathname,l)!=null}new TextEncoder;const hI="_sidebar_umq06_1",dI="_profileSection_umq06_19",fI="_navigation_umq06_35",pI="_avatar_umq06_43",mI="_userInfo_umq06_69",gI="_navList_umq06_99",_I="_navItem_umq06_117",yI="_navLink_umq06_125",vI="_createEventBtn_umq06_155",EI="_dropdown_umq06_191",wI="_dropdownItem_umq06_225",TI="_logoutBtn_umq06_247",II="_dashboardContainer_umq06_285",SI="_mainContent_umq06_295",RI="_welcomeContainer_umq06_333",CI="_welcomeTitle_umq06_353",AI="_welcomeText_umq06_365",kI="_hamburgerBtn_umq06_373",PI="_overlay_umq06_399",xI="_sidebarOpen_umq06_439",Ce={sidebar:hI,profileSection:dI,navigation:fI,avatar:pI,userInfo:mI,navList:gI,navItem:_I,navLink:yI,createEventBtn:vI,dropdown:EI,dropdownItem:wI,logoutBtn:TI,dashboardContainer:II,mainContent:SI,welcomeContainer:RI,welcomeTitle:CI,welcomeText:AI,hamburgerBtn:kI,overlay:PI,sidebarOpen:xI};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NI=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gy=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var DI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=$.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:h,...d},p)=>$.createElement("svg",{ref:p,...DI,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:Gy("lucide",o),...d},[...h.map(([_,E])=>$.createElement(_,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=(n,e)=>{const t=$.forwardRef(({className:i,...o},l)=>$.createElement(OI,{ref:l,iconNode:e,className:Gy(`lucide-${NI(n)}`,i),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=un("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bI=un("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=un("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=un("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=un("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=un("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=un("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=un("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=un("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=un("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=un("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=un("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=un("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=un("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var u_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},WI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Qy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,d=h?n[o+1]:0,p=o+2<n.length,_=p?n[o+2]:0,E=l>>2,I=(l&3)<<4|d>>4;let w=(d&15)<<2|_>>6,P=_&63;p||(P=64,h||(w=64)),i.push(t[E],t[I],t[w],t[P])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ky(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):WI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const I=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||_==null||I==null)throw new GI;const w=l<<2|d>>4;if(i.push(w),_!==64){const P=d<<4&240|_>>2;if(i.push(P),I!==64){const b=_<<6&192|I;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class GI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KI=function(n){const e=Ky(n);return Qy.encodeByteArray(e,!0)},wc=function(n){return KI(n).replace(/\./g,"")},Xy=function(n){try{return Qy.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=()=>QI().__FIREBASE_DEFAULTS__,YI=()=>{if(typeof process>"u"||typeof u_>"u")return;const n=u_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},JI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xy(n[1]);return e&&JSON.parse(e)},jc=()=>{try{return XI()||YI()||JI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yy=n=>{var e,t;return(t=(e=jc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Jy=n=>{const e=Yy(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Zy=()=>{var n;return(n=jc())===null||n===void 0?void 0:n.config},ev=n=>{var e;return(e=jc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wc(JSON.stringify(t)),wc(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function e1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function t1(){var n;const e=(n=jc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function n1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function r1(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function i1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function s1(){const n=Ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function o1(){return!t1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function a1(){try{return typeof indexedDB=="object"}catch{return!1}}function l1(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="FirebaseError";class vr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=u1,Object.setPrototypeOf(this,vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sl.prototype.create)}}class Sl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?c1(l,i):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new vr(o,d,i)}}function c1(n,e){return n.replace(h1,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const h1=/\{\$([^}]+)}/g;function d1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(c_(l)&&c_(h)){if(!Tc(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function c_(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ja(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Za(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function f1(n,e){const t=new p1(n,e);return t.subscribe.bind(t)}class p1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");m1(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=qd),o.error===void 0&&(o.error=qd),o.complete===void 0&&(o.complete=qd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function m1(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n){return n&&n._delegate?n._delegate:n}class Oi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ZI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(y1(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_1(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _1(n){return n===gs?void 0:n}function y1(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new g1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(xe||(xe={}));const E1={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},w1=xe.INFO,T1={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},I1=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=T1[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jf{constructor(e){this.name=e,this._logLevel=w1,this._logHandler=I1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?E1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const S1=(n,e)=>e.some(t=>n instanceof t);let h_,d_;function R1(){return h_||(h_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C1(){return d_||(d_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nv=new WeakMap,af=new WeakMap,rv=new WeakMap,Hd=new WeakMap,Bf=new WeakMap;function A1(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(ki(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&nv.set(t,n)}).catch(()=>{}),Bf.set(e,n),e}function k1(n){if(af.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});af.set(n,e)}let lf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return af.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ki(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function P1(n){lf=n(lf)}function x1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Wd(this),e,...t);return rv.set(i,e.sort?e.sort():[e]),ki(i)}:C1().includes(n)?function(...e){return n.apply(Wd(this),e),ki(nv.get(this))}:function(...e){return ki(n.apply(Wd(this),e))}}function N1(n){return typeof n=="function"?x1(n):(n instanceof IDBTransaction&&k1(n),S1(n,R1())?new Proxy(n,lf):n)}function ki(n){if(n instanceof IDBRequest)return A1(n);if(Hd.has(n))return Hd.get(n);const e=N1(n);return e!==n&&(Hd.set(n,e),Bf.set(e,n)),e}const Wd=n=>Bf.get(n);function D1(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),d=ki(h);return i&&h.addEventListener("upgradeneeded",p=>{i(ki(h.result),p.oldVersion,p.newVersion,ki(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),d}const O1=["get","getKey","getAll","getAllKeys","count"],L1=["put","add","delete","clear"],Gd=new Map;function f_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Gd.get(e))return Gd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=L1.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||O1.includes(t)))return;const l=async function(h,...d){const p=this.transaction(h,o?"readwrite":"readonly");let _=p.store;return i&&(_=_.index(d.shift())),(await Promise.all([_[t](...d),o&&p.done]))[0]};return Gd.set(e,l),l}P1(n=>({...n,get:(e,t,i)=>f_(e,t)||n.get(e,t,i),has:(e,t)=>!!f_(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(V1(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function V1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uf="@firebase/app",p_="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new jf("@firebase/app"),M1="@firebase/app-compat",F1="@firebase/analytics-compat",U1="@firebase/analytics",j1="@firebase/app-check-compat",B1="@firebase/app-check",z1="@firebase/auth",$1="@firebase/auth-compat",q1="@firebase/database",H1="@firebase/data-connect",W1="@firebase/database-compat",G1="@firebase/functions",K1="@firebase/functions-compat",Q1="@firebase/installations",X1="@firebase/installations-compat",Y1="@firebase/messaging",J1="@firebase/messaging-compat",Z1="@firebase/performance",eS="@firebase/performance-compat",tS="@firebase/remote-config",nS="@firebase/remote-config-compat",rS="@firebase/storage",iS="@firebase/storage-compat",sS="@firebase/firestore",oS="@firebase/vertexai",aS="@firebase/firestore-compat",lS="firebase",uS="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="[DEFAULT]",cS={[uf]:"fire-core",[M1]:"fire-core-compat",[U1]:"fire-analytics",[F1]:"fire-analytics-compat",[B1]:"fire-app-check",[j1]:"fire-app-check-compat",[z1]:"fire-auth",[$1]:"fire-auth-compat",[q1]:"fire-rtdb",[H1]:"fire-data-connect",[W1]:"fire-rtdb-compat",[G1]:"fire-fn",[K1]:"fire-fn-compat",[Q1]:"fire-iid",[X1]:"fire-iid-compat",[Y1]:"fire-fcm",[J1]:"fire-fcm-compat",[Z1]:"fire-perf",[eS]:"fire-perf-compat",[tS]:"fire-rc",[nS]:"fire-rc-compat",[rS]:"fire-gcs",[iS]:"fire-gcs-compat",[sS]:"fire-fst",[aS]:"fire-fst-compat",[oS]:"fire-vertex","fire-js":"fire-js",[lS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Map,hS=new Map,hf=new Map;function m_(n,e){try{n.container.addComponent(e)}catch(t){Wr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ss(n){const e=n.name;if(hf.has(e))return Wr.debug(`There were multiple attempts to register component ${e}.`),!1;hf.set(e,n);for(const t of Ic.values())m_(t,n);for(const t of hS.values())m_(t,n);return!0}function Bc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function hr(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pi=new Sl("app","Firebase",dS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=uS;function Cl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:cf,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Pi.create("bad-app-name",{appName:String(o)});if(t||(t=Zy()),!t)throw Pi.create("no-options");const l=Ic.get(o);if(l){if(Tc(t,l.options)&&Tc(i,l.config))return l;throw Pi.create("duplicate-app",{appName:o})}const h=new v1(o);for(const p of hf.values())h.addComponent(p);const d=new fS(t,i,h);return Ic.set(o,d),d}function zf(n=cf){const e=Ic.get(n);if(!e&&n===cf&&Zy())return Cl();if(!e)throw Pi.create("no-app",{appName:n});return e}function fr(n,e,t){var i;let o=(i=cS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wr.warn(d.join(" "));return}Ss(new Oi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="firebase-heartbeat-database",mS=1,hl="firebase-heartbeat-store";let Kd=null;function iv(){return Kd||(Kd=D1(pS,mS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pi.create("idb-open",{originalErrorMessage:n.message})})),Kd}async function gS(n){try{const t=(await iv()).transaction(hl),i=await t.objectStore(hl).get(sv(n));return await t.done,i}catch(e){if(e instanceof vr)Wr.warn(e.message);else{const t=Pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wr.warn(t.message)}}}async function g_(n,e){try{const i=(await iv()).transaction(hl,"readwrite");await i.objectStore(hl).put(e,sv(n)),await i.done}catch(t){if(t instanceof vr)Wr.warn(t.message);else{const i=Pi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wr.warn(i.message)}}}function sv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=1024,yS=30*24*60*60*1e3;class vS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=__();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const d=new Date(h.date).valueOf();return Date.now()-d<=yS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Wr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=__(),{heartbeatsToSend:i,unsentEntries:o}=ES(this._heartbeatsCache.heartbeats),l=wc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Wr.warn(t),""}}}function __(){return new Date().toISOString().substring(0,10)}function ES(n,e=_S){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),y_(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),y_(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class wS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a1()?l1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return g_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return g_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function y_(n){return wc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(n){Ss(new Oi("platform-logger",e=>new b1(e),"PRIVATE")),Ss(new Oi("heartbeat",e=>new vS(e),"PRIVATE")),fr(uf,p_,n),fr(uf,p_,"esm2017"),fr("fire-js","")}TS("");var IS="firebase",SS="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(IS,SS,"app");function $f(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function ov(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RS=ov,av=new Sl("auth","Firebase",ov());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new jf("@firebase/auth");function CS(n,...e){Sc.logLevel<=xe.WARN&&Sc.warn(`Auth (${Ps}): ${n}`,...e)}function cc(n,...e){Sc.logLevel<=xe.ERROR&&Sc.error(`Auth (${Ps}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,...e){throw Hf(n,...e)}function Kn(n,...e){return Hf(n,...e)}function qf(n,e,t){const i=Object.assign(Object.assign({},RS()),{[e]:t});return new Sl("auth","Firebase",i).create(e,{appName:n.name})}function xi(n){return qf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function AS(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Dn(n,"argument-error"),qf(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return av.create(n,...e)}function Ee(n,e,...t){if(!n)throw Hf(e,...t)}function jr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cc(e),new Error(e)}function Gr(n,e){n||jr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function kS(){return v_()==="http:"||v_()==="https:"}function v_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kS()||r1()||"connection"in navigator)?navigator.onLine:!0}function xS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t){this.shortDelay=e,this.longDelay=t,Gr(t>e,"Short delay should be less than long delay!"),this.isMobile=e1()||i1()}get(){return PS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n,e){Gr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=new Al(3e4,6e4);function xs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ui(n,e,t,i,o={}){return uv(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const d=Rl(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const _=Object.assign({method:e,headers:p},l);return n1()||(_.referrerPolicy="no-referrer"),lv.fetch()(cv(n,n.config.apiHost,t,d),_)})}async function uv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},NS),e);try{const o=new LS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Zu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const d=l.ok?h.errorMessage:h.error.message,[p,_]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zu(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Zu(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw Zu(n,"user-disabled",h);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw qf(n,E,_);Dn(n,E)}}catch(o){if(o instanceof vr)throw o;Dn(n,"network-request-failed",{message:String(o)})}}async function zc(n,e,t,i,o={}){const l=await Ui(n,e,t,i,o);return"mfaPendingCredential"in l&&Dn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function cv(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Wf(n.config,o):`${n.config.apiScheme}://${o}`}function OS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Kn(this.auth,"network-request-failed")),DS.get())})}}function Zu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Kn(n,e,i);return o.customData._tokenResponse=t,o}function E_(n){return n!==void 0&&n.enterprise!==void 0}class bS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return OS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function VS(n,e){return Ui(n,"GET","/v2/recaptchaConfig",xs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(n,e){return Ui(n,"POST","/v1/accounts:delete",e)}async function hv(n,e){return Ui(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FS(n,e=!1){const t=ct(n),i=await t.getIdToken(e),o=Gf(i);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:il(Qd(o.auth_time)),issuedAtTime:il(Qd(o.iat)),expirationTime:il(Qd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Qd(n){return Number(n)*1e3}function Gf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return cc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Xy(t);return o?JSON.parse(o):(cc("Failed to decode base64 JWT payload"),null)}catch(o){return cc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function w_(n){const e=Gf(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof vr&&US(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function US({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=il(this.lastLoginAt),this.creationTime=il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await dl(n,hv(t,{idToken:i}));Ee(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?dv(l.providerUserInfo):[],d=zS(n.providerData,h),p=n.isAnonymous,_=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),E=p?_:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new ff(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,I)}async function BS(n){const e=ct(n);await Rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function dv(n){return n.map(e=>{var{providerId:t}=e,i=$f(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(n,e){const t=await uv(n,{},async()=>{const i=Rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=cv(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",lv.fetch()(h,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qS(n,e){return Ui(n,"POST","/v2/accounts:revokeToken",xs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):w_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=w_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await $S(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Do;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(Ee(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Ee(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Do,this.toJSON())}_performRefresh(){return jr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Br{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=$f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new ff(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await dl(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return FS(this,e)}reload(){return BS(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Rc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hr(this.auth.app))return Promise.reject(xi(this.auth));const e=await this.getIdToken();return await dl(this,MS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,d,p,_,E;const I=(i=t.displayName)!==null&&i!==void 0?i:void 0,w=(o=t.email)!==null&&o!==void 0?o:void 0,P=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,b=(h=t.photoURL)!==null&&h!==void 0?h:void 0,U=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,W=(_=t.createdAt)!==null&&_!==void 0?_:void 0,G=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ee,emailVerified:ie,isAnonymous:ne,providerData:ae,stsTokenManager:x}=t;Ee(ee&&x,e,"internal-error");const S=Do.fromJSON(this.name,x);Ee(typeof ee=="string",e,"internal-error"),Ti(I,e.name),Ti(w,e.name),Ee(typeof ie=="boolean",e,"internal-error"),Ee(typeof ne=="boolean",e,"internal-error"),Ti(P,e.name),Ti(b,e.name),Ti(U,e.name),Ti(L,e.name),Ti(W,e.name),Ti(G,e.name);const A=new Br({uid:ee,auth:e,email:w,emailVerified:ie,displayName:I,isAnonymous:ne,photoURL:b,phoneNumber:P,tenantId:U,stsTokenManager:S,createdAt:W,lastLoginAt:G});return ae&&Array.isArray(ae)&&(A.providerData=ae.map(N=>Object.assign({},N))),L&&(A._redirectEventId=L),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new Do;o.updateFromServerResponse(t);const l=new Br({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Rc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?dv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new Do;d.updateFromIdToken(i);const p=new Br({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new ff(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,_),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=new Map;function zr(n){Gr(n instanceof Function,"Expected a class definition");let e=T_.get(n);return e?(Gr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,T_.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fv.type="NONE";const I_=fv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(n,e,t){return`firebase:${n}:${e}:${t}`}class Oo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=hc(this.userKey,o.apiKey,l),this.fullPersistenceKey=hc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Oo(zr(I_),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||zr(I_);const h=hc(i,e.config.apiKey,e.name);let d=null;for(const _ of t)try{const E=await _._get(h);if(E){const I=Br._fromJSON(e,E);_!==l&&(d=I),l=_;break}}catch{}const p=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Oo(l,e,i):(l=p[0],d&&await l._set(h,d.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new Oo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_v(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vv(e))return"Blackberry";if(Ev(e))return"Webos";if(mv(e))return"Safari";if((e.includes("chrome/")||gv(e))&&!e.includes("edge/"))return"Chrome";if(yv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function pv(n=Ht()){return/firefox\//i.test(n)}function mv(n=Ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gv(n=Ht()){return/crios\//i.test(n)}function _v(n=Ht()){return/iemobile/i.test(n)}function yv(n=Ht()){return/android/i.test(n)}function vv(n=Ht()){return/blackberry/i.test(n)}function Ev(n=Ht()){return/webos/i.test(n)}function Kf(n=Ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function HS(n=Ht()){var e;return Kf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WS(){return s1()&&document.documentMode===10}function wv(n=Ht()){return Kf(n)||yv(n)||Ev(n)||vv(n)||/windows phone/i.test(n)||_v(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(n,e=[]){let t;switch(n){case"Browser":t=S_(Ht());break;case"Worker":t=`${S_(Ht())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ps}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,d)=>{try{const p=e(l);h(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KS(n,e={}){return Ui(n,"GET","/v2/passwordPolicy",xs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=6;class XS{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:QS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new R_(this),this.idTokenSubscription=new R_(this),this.beforeStateQueue=new GS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Oo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await hv(this,{idToken:e}),i=await Br._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(hr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hr(this.app))return Promise.reject(xi(this));const t=e?ct(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hr(this.app)?Promise.reject(xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hr(this.app)?Promise.reject(xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KS(this),t=new XS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await qS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Oo.create(this,[zr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&CS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ns(n){return ct(n)}class R_{constructor(e){this.auth=e,this.observer=null,this.addObserver=f1(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JS(n){$c=n}function Iv(n){return $c.loadJS(n)}function ZS(){return $c.recaptchaEnterpriseScript}function eR(){return $c.gapiScript}function tR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class nR{constructor(){this.enterprise=new rR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class rR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const iR="recaptcha-enterprise",Sv="NO_RECAPTCHA";class sR{constructor(e){this.type=iR,this.auth=Ns(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,d)=>{VS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const _=new bS(p);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(p=>{d(p)})})}function o(l,h,d){const p=window.grecaptcha;E_(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(Sv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nR().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(d=>{if(!t&&E_(window.grecaptcha))o(d,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=ZS();p.length!==0&&(p+=d),Iv(p).then(()=>{o(d,l,h)}).catch(_=>{h(_)})}}).catch(d=>{h(d)})})}}async function C_(n,e,t,i=!1,o=!1){const l=new sR(n);let h;if(o)h=Sv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,_=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function A_(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await C_(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await C_(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(n,e){const t=Bc(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Tc(l,e??{}))return o;Dn(o,"already-initialized")}return t.initialize({options:e})}function aR(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(zr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function lR(n,e,t){const i=Ns(n);Ee(i._canInitEmulator,i,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Rv(e),{host:h,port:d}=uR(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${h}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),cR()}function Rv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function uR(n){const e=Rv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:k_(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:k_(h)}}}function k_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function cR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return jr("not implemented")}_getIdTokenResponse(e){return jr("not implemented")}_linkToIdToken(e,t){return jr("not implemented")}_getReauthenticationResolver(e){return jr("not implemented")}}async function hR(n,e){return Ui(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(n,e){return zc(n,"POST","/v1/accounts:signInWithPassword",xs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(n,e){return zc(n,"POST","/v1/accounts:signInWithEmailLink",xs(n,e))}async function pR(n,e){return zc(n,"POST","/v1/accounts:signInWithEmailLink",xs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends Qf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new fl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new fl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return A_(e,t,"signInWithPassword",dR);case"emailLink":return fR(e,{email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return A_(e,i,"signUpPassword",hR);case"emailLink":return pR(e,{idToken:t,email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(n,e){return zc(n,"POST","/v1/accounts:signInWithIdp",xs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="http://localhost";class Rs extends Qf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=$f(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new Rs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Lo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Lo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Lo(e,t)}buildRequest(){const e={requestUri:mR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _R(n){const e=Ja(Za(n)).link,t=e?Ja(Za(e)).deep_link_id:null,i=Ja(Za(n)).deep_link_id;return(i?Ja(Za(i)).link:null)||i||t||e||n}class Xf{constructor(e){var t,i,o,l,h,d;const p=Ja(Za(e)),_=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,I=gR((o=p.mode)!==null&&o!==void 0?o:null);Ee(_&&E&&I,"argument-error"),this.apiKey=_,this.operation=I,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=_R(e);try{return new Xf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.providerId=Wo.PROVIDER_ID}static credential(e,t){return fl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Xf.parseLink(t);return Ee(i,"argument-error"),fl._fromEmailAndCode(e,i.code,i.tenantId)}}Wo.PROVIDER_ID="password";Wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends Yf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends kl{constructor(){super("facebook.com")}static credential(e){return Rs._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ur.credential(t,i)}catch{return null}}}Ur.GOOGLE_SIGN_IN_METHOD="google.com";Ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends kl{constructor(){super("github.com")}static credential(e){return Rs._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Si.credential(e.oauthAccessToken)}catch{return null}}}Si.GITHUB_SIGN_IN_METHOD="github.com";Si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends kl{constructor(){super("twitter.com")}static credential(e,t){return Rs._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ri.credential(t,i)}catch{return null}}}Ri.TWITTER_SIGN_IN_METHOD="twitter.com";Ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Br._fromIdTokenResponse(e,i,o),h=P_(i);return new Vo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=P_(i);return new Vo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function P_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends vr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Cc(e,t,i,o)}}function Cv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(n,l,e,i):l})}async function yR(n,e,t=!1){const i=await dl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vo._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(n,e,t=!1){const{auth:i}=n;if(hr(i.app))return Promise.reject(xi(i));const o="reauthenticate";try{const l=await dl(n,Cv(i,o,e,n),t);Ee(l.idToken,i,"internal-error");const h=Gf(l.idToken);Ee(h,i,"internal-error");const{sub:d}=h;return Ee(n.uid===d,i,"user-mismatch"),Vo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Dn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(n,e,t=!1){if(hr(n.app))return Promise.reject(xi(n));const i="signIn",o=await Cv(n,i,e),l=await Vo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function ER(n,e){return Av(Ns(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(n){const e=Ns(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function TR(n,e,t){return hr(n.app)?Promise.reject(xi(n)):ER(ct(n),Wo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&wR(n),i})}function IR(n,e,t,i){return ct(n).onIdTokenChanged(e,t,i)}function SR(n,e,t){return ct(n).beforeAuthStateChanged(e,t)}function x_(n){return ct(n).signOut()}const Ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=1e3,CR=10;class Pv extends kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,d,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);WS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,CR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},RR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pv.type="LOCAL";const AR=Pv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv extends kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xv.type="SESSION";const Nv=xv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new qc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(h).map(async _=>_(t.origin,l)),p=await kR(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((d,p)=>{const _=Jf("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(I){const w=I;if(w.data.eventId===_)switch(w.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(){return window}function xR(n){pr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(){return typeof pr().WorkerGlobalScope<"u"&&typeof pr().importScripts=="function"}async function NR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function OR(){return Dv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="firebaseLocalStorageDb",LR=1,kc="firebaseLocalStorage",Lv="fbase_key";class Pl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hc(n,e){return n.transaction([kc],e?"readwrite":"readonly").objectStore(kc)}function bR(){const n=indexedDB.deleteDatabase(Ov);return new Pl(n).toPromise()}function pf(){const n=indexedDB.open(Ov,LR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(kc,{keyPath:Lv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(kc)?e(i):(i.close(),await bR(),e(await pf()))})})}async function N_(n,e,t){const i=Hc(n,!0).put({[Lv]:e,value:t});return new Pl(i).toPromise()}async function VR(n,e){const t=Hc(n,!1).get(e),i=await new Pl(t).toPromise();return i===void 0?null:i.value}function D_(n,e){const t=Hc(n,!0).delete(e);return new Pl(t).toPromise()}const MR=800,FR=3;class bv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>FR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance(OR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await NR(),!this.activeServiceWorker)return;this.sender=new PR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pf();return await N_(e,Ac,"1"),await D_(e,Ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>N_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>VR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>D_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Hc(o,!1).getAll();return new Pl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bv.type="LOCAL";const UR=bv;new Al(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(n,e){return e?zr(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends Qf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Lo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jR(n){return Av(n.auth,new Zf(n),n.bypassAuthState)}function BR(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),vR(t,new Zf(n),n.bypassAuthState)}async function zR(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),yR(t,new Zf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:d}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jR;case"linkViaPopup":case"linkViaRedirect":return zR;case"reauthViaPopup":case"reauthViaRedirect":return BR;default:Dn(this.auth,"internal-error")}}resolve(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new Al(2e3,1e4);async function qR(n,e,t){if(hr(n.app))return Promise.reject(Kn(n,"operation-not-supported-in-this-environment"));const i=Ns(n);AS(n,e,Yf);const o=Vv(i,t);return new _s(i,"signInViaPopup",e,o).executeNotNull()}class _s extends Mv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Gr(this.filter.length===1,"Popup operations only handle one event");const e=Jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$R.get())};e()}}_s.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="pendingRedirect",dc=new Map;class WR extends Mv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=dc.get(this.auth._key());if(!e){try{const i=await GR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}dc.set(this.auth._key(),e)}return this.bypassAuthState||dc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GR(n,e){const t=XR(e),i=QR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function KR(n,e){dc.set(n._key(),e)}function QR(n){return zr(n._redirectPersistence)}function XR(n){return hc(HR,n.config.apiKey,n.name)}async function YR(n,e,t=!1){if(hr(n.app))return Promise.reject(xi(n));const i=Ns(n),o=Vv(i,e),h=await new WR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=10*60*1e3;class ZR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Fv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Kn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JR&&this.cachedEventUids.clear(),this.cachedEventUids.has(O_(e))}saveEventToCache(e){this.cachedEventUids.add(O_(e)),this.lastProcessedEventTime=Date.now()}}function O_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(n,e={}){return Ui(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rC=/^https?/;async function iC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await tC(n);for(const t of e)try{if(sC(t))return}catch{}Dn(n,"unauthorized-domain")}function sC(n){const e=df(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!rC.test(t))return!1;if(nC.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=new Al(3e4,6e4);function L_(){const n=pr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function aC(n){return new Promise((e,t)=>{var i,o,l;function h(){L_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{L_(),t(Kn(n,"network-request-failed"))},timeout:oC.get()})}if(!((o=(i=pr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=pr().gapi)===null||l===void 0)&&l.load)h();else{const d=tR("iframefcb");return pr()[d]=()=>{gapi.load?h():t(Kn(n,"network-request-failed"))},Iv(`${eR()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw fc=null,e})}let fc=null;function lC(n){return fc=fc||aC(n),fc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=new Al(5e3,15e3),cC="__/auth/iframe",hC="emulator/auth/iframe",dC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pC(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Wf(e,hC):`https://${n.config.authDomain}/${cC}`,i={apiKey:e.apiKey,appName:n.name,v:Ps},o=fC.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Rl(i).slice(1)}`}async function mC(n){const e=await lC(n),t=pr().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:pC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dC,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=Kn(n,"network-request-failed"),d=pr().setTimeout(()=>{l(h)},uC.get());function p(){pr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_C=500,yC=600,vC="_blank",EC="http://localhost";class b_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wC(n,e,t,i=_C,o=yC){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},gC),{width:i.toString(),height:o.toString(),top:l,left:h}),_=Ht().toLowerCase();t&&(d=gv(_)?vC:t),pv(_)&&(e=e||EC,p.scrollbars="yes");const E=Object.entries(p).reduce((w,[P,b])=>`${w}${P}=${b},`,"");if(HS(_)&&d!=="_self")return TC(e||"",d),new b_(null);const I=window.open(e||"",d,E);Ee(I,n,"popup-blocked");try{I.focus()}catch{}return new b_(I)}function TC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="__/auth/handler",SC="emulator/auth/handler",RC=encodeURIComponent("fac");async function V_(n,e,t,i,o,l){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ps,eventId:o};if(e instanceof Yf){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",d1(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))h[E]=I}if(e instanceof kl){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const d=h;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const p=await n._getAppCheckToken(),_=p?`#${RC}=${encodeURIComponent(p)}`:"";return`${CC(n)}?${Rl(d).slice(1)}${_}`}function CC({config:n}){return n.emulator?Wf(n,SC):`https://${n.authDomain}/${IC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="webStorageSupport";class AC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nv,this._completeRedirectFn=YR,this._overrideRedirectResult=KR}async _openPopup(e,t,i,o){var l;Gr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await V_(e,t,i,df(),o);return wC(e,h,Jf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await V_(e,t,i,df(),o);return xR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Gr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await mC(e),i=new ZR(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xd,{type:Xd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Xd];h!==void 0&&t(!!h),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wv()||mv()||Kf()}}const kC=AC;var M_="@firebase/auth",F_="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NC(n){Ss(new Oi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=i.options;Ee(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tv(n)},_=new YS(i,o,l,p);return aR(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ss(new Oi("auth-internal",e=>{const t=Ns(e.getProvider("auth").getImmediate());return(i=>new PC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(M_,F_,xC(n)),fr(M_,F_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=5*60,OC=ev("authIdTokenMaxAge")||DC;let U_=null;const LC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>OC)return;const o=t==null?void 0:t.token;U_!==o&&(U_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ep(n=zf()){const e=Bc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=oR(n,{popupRedirectResolver:kC,persistence:[UR,AR,Nv]}),i=ev("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=LC(l.toString());SR(t,h,()=>h(t.currentUser)),IR(t,d=>h(d))}}const o=Yy("auth");return o&&lR(t,`http://${o}`),t}function bC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}JS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Kn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",bC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NC("Browser");var j_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vs,Uv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function A(){}A.prototype=S.prototype,x.D=S.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(N,M,O){for(var k=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)k[qe-2]=arguments[qe];return S.prototype[M].apply(N,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,A){A||(A=0);var N=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)N[M]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(M=0;16>M;++M)N[M]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=x.g[0],A=x.g[1],M=x.g[2];var O=x.g[3],k=S+(O^A&(M^O))+N[0]+3614090360&4294967295;S=A+(k<<7&4294967295|k>>>25),k=O+(M^S&(A^M))+N[1]+3905402710&4294967295,O=S+(k<<12&4294967295|k>>>20),k=M+(A^O&(S^A))+N[2]+606105819&4294967295,M=O+(k<<17&4294967295|k>>>15),k=A+(S^M&(O^S))+N[3]+3250441966&4294967295,A=M+(k<<22&4294967295|k>>>10),k=S+(O^A&(M^O))+N[4]+4118548399&4294967295,S=A+(k<<7&4294967295|k>>>25),k=O+(M^S&(A^M))+N[5]+1200080426&4294967295,O=S+(k<<12&4294967295|k>>>20),k=M+(A^O&(S^A))+N[6]+2821735955&4294967295,M=O+(k<<17&4294967295|k>>>15),k=A+(S^M&(O^S))+N[7]+4249261313&4294967295,A=M+(k<<22&4294967295|k>>>10),k=S+(O^A&(M^O))+N[8]+1770035416&4294967295,S=A+(k<<7&4294967295|k>>>25),k=O+(M^S&(A^M))+N[9]+2336552879&4294967295,O=S+(k<<12&4294967295|k>>>20),k=M+(A^O&(S^A))+N[10]+4294925233&4294967295,M=O+(k<<17&4294967295|k>>>15),k=A+(S^M&(O^S))+N[11]+2304563134&4294967295,A=M+(k<<22&4294967295|k>>>10),k=S+(O^A&(M^O))+N[12]+1804603682&4294967295,S=A+(k<<7&4294967295|k>>>25),k=O+(M^S&(A^M))+N[13]+4254626195&4294967295,O=S+(k<<12&4294967295|k>>>20),k=M+(A^O&(S^A))+N[14]+2792965006&4294967295,M=O+(k<<17&4294967295|k>>>15),k=A+(S^M&(O^S))+N[15]+1236535329&4294967295,A=M+(k<<22&4294967295|k>>>10),k=S+(M^O&(A^M))+N[1]+4129170786&4294967295,S=A+(k<<5&4294967295|k>>>27),k=O+(A^M&(S^A))+N[6]+3225465664&4294967295,O=S+(k<<9&4294967295|k>>>23),k=M+(S^A&(O^S))+N[11]+643717713&4294967295,M=O+(k<<14&4294967295|k>>>18),k=A+(O^S&(M^O))+N[0]+3921069994&4294967295,A=M+(k<<20&4294967295|k>>>12),k=S+(M^O&(A^M))+N[5]+3593408605&4294967295,S=A+(k<<5&4294967295|k>>>27),k=O+(A^M&(S^A))+N[10]+38016083&4294967295,O=S+(k<<9&4294967295|k>>>23),k=M+(S^A&(O^S))+N[15]+3634488961&4294967295,M=O+(k<<14&4294967295|k>>>18),k=A+(O^S&(M^O))+N[4]+3889429448&4294967295,A=M+(k<<20&4294967295|k>>>12),k=S+(M^O&(A^M))+N[9]+568446438&4294967295,S=A+(k<<5&4294967295|k>>>27),k=O+(A^M&(S^A))+N[14]+3275163606&4294967295,O=S+(k<<9&4294967295|k>>>23),k=M+(S^A&(O^S))+N[3]+4107603335&4294967295,M=O+(k<<14&4294967295|k>>>18),k=A+(O^S&(M^O))+N[8]+1163531501&4294967295,A=M+(k<<20&4294967295|k>>>12),k=S+(M^O&(A^M))+N[13]+2850285829&4294967295,S=A+(k<<5&4294967295|k>>>27),k=O+(A^M&(S^A))+N[2]+4243563512&4294967295,O=S+(k<<9&4294967295|k>>>23),k=M+(S^A&(O^S))+N[7]+1735328473&4294967295,M=O+(k<<14&4294967295|k>>>18),k=A+(O^S&(M^O))+N[12]+2368359562&4294967295,A=M+(k<<20&4294967295|k>>>12),k=S+(A^M^O)+N[5]+4294588738&4294967295,S=A+(k<<4&4294967295|k>>>28),k=O+(S^A^M)+N[8]+2272392833&4294967295,O=S+(k<<11&4294967295|k>>>21),k=M+(O^S^A)+N[11]+1839030562&4294967295,M=O+(k<<16&4294967295|k>>>16),k=A+(M^O^S)+N[14]+4259657740&4294967295,A=M+(k<<23&4294967295|k>>>9),k=S+(A^M^O)+N[1]+2763975236&4294967295,S=A+(k<<4&4294967295|k>>>28),k=O+(S^A^M)+N[4]+1272893353&4294967295,O=S+(k<<11&4294967295|k>>>21),k=M+(O^S^A)+N[7]+4139469664&4294967295,M=O+(k<<16&4294967295|k>>>16),k=A+(M^O^S)+N[10]+3200236656&4294967295,A=M+(k<<23&4294967295|k>>>9),k=S+(A^M^O)+N[13]+681279174&4294967295,S=A+(k<<4&4294967295|k>>>28),k=O+(S^A^M)+N[0]+3936430074&4294967295,O=S+(k<<11&4294967295|k>>>21),k=M+(O^S^A)+N[3]+3572445317&4294967295,M=O+(k<<16&4294967295|k>>>16),k=A+(M^O^S)+N[6]+76029189&4294967295,A=M+(k<<23&4294967295|k>>>9),k=S+(A^M^O)+N[9]+3654602809&4294967295,S=A+(k<<4&4294967295|k>>>28),k=O+(S^A^M)+N[12]+3873151461&4294967295,O=S+(k<<11&4294967295|k>>>21),k=M+(O^S^A)+N[15]+530742520&4294967295,M=O+(k<<16&4294967295|k>>>16),k=A+(M^O^S)+N[2]+3299628645&4294967295,A=M+(k<<23&4294967295|k>>>9),k=S+(M^(A|~O))+N[0]+4096336452&4294967295,S=A+(k<<6&4294967295|k>>>26),k=O+(A^(S|~M))+N[7]+1126891415&4294967295,O=S+(k<<10&4294967295|k>>>22),k=M+(S^(O|~A))+N[14]+2878612391&4294967295,M=O+(k<<15&4294967295|k>>>17),k=A+(O^(M|~S))+N[5]+4237533241&4294967295,A=M+(k<<21&4294967295|k>>>11),k=S+(M^(A|~O))+N[12]+1700485571&4294967295,S=A+(k<<6&4294967295|k>>>26),k=O+(A^(S|~M))+N[3]+2399980690&4294967295,O=S+(k<<10&4294967295|k>>>22),k=M+(S^(O|~A))+N[10]+4293915773&4294967295,M=O+(k<<15&4294967295|k>>>17),k=A+(O^(M|~S))+N[1]+2240044497&4294967295,A=M+(k<<21&4294967295|k>>>11),k=S+(M^(A|~O))+N[8]+1873313359&4294967295,S=A+(k<<6&4294967295|k>>>26),k=O+(A^(S|~M))+N[15]+4264355552&4294967295,O=S+(k<<10&4294967295|k>>>22),k=M+(S^(O|~A))+N[6]+2734768916&4294967295,M=O+(k<<15&4294967295|k>>>17),k=A+(O^(M|~S))+N[13]+1309151649&4294967295,A=M+(k<<21&4294967295|k>>>11),k=S+(M^(A|~O))+N[4]+4149444226&4294967295,S=A+(k<<6&4294967295|k>>>26),k=O+(A^(S|~M))+N[11]+3174756917&4294967295,O=S+(k<<10&4294967295|k>>>22),k=M+(S^(O|~A))+N[2]+718787259&4294967295,M=O+(k<<15&4294967295|k>>>17),k=A+(O^(M|~S))+N[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(M+(k<<21&4294967295|k>>>11))&4294967295,x.g[2]=x.g[2]+M&4294967295,x.g[3]=x.g[3]+O&4294967295}i.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var A=S-this.blockSize,N=this.B,M=this.h,O=0;O<S;){if(M==0)for(;O<=A;)o(this,x,O),O+=this.blockSize;if(typeof x=="string"){for(;O<S;)if(N[M++]=x.charCodeAt(O++),M==this.blockSize){o(this,N),M=0;break}}else for(;O<S;)if(N[M++]=x[O++],M==this.blockSize){o(this,N),M=0;break}}this.h=M,this.o+=S},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var A=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=A&255,A/=256;for(this.u(x),x=Array(16),S=A=0;4>S;++S)for(var N=0;32>N;N+=8)x[A++]=this.g[S]>>>N&255;return x};function l(x,S){var A=d;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=S(x)}function h(x,S){this.h=S;for(var A=[],N=!0,M=x.length-1;0<=M;M--){var O=x[M]|0;N&&O==S||(A[M]=O,N=!1)}this.g=A}var d={};function p(x){return-128<=x&&128>x?l(x,function(S){return new h([S|0],0>S?-1:0)}):new h([x|0],0>x?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return I;if(0>x)return L(_(-x));for(var S=[],A=1,N=0;x>=A;N++)S[N]=x/A|0,A*=4294967296;return new h(S,0)}function E(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return L(E(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(S,8)),N=I,M=0;M<x.length;M+=8){var O=Math.min(8,x.length-M),k=parseInt(x.substring(M,M+O),S);8>O?(O=_(Math.pow(S,O)),N=N.j(O).add(_(k))):(N=N.j(A),N=N.add(_(k)))}return N}var I=p(0),w=p(1),P=p(16777216);n=h.prototype,n.m=function(){if(U(this))return-L(this).m();for(var x=0,S=1,A=0;A<this.g.length;A++){var N=this.i(A);x+=(0<=N?N:4294967296+N)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(b(this))return"0";if(U(this))return"-"+L(this).toString(x);for(var S=_(Math.pow(x,6)),A=this,N="";;){var M=ie(A,S).g;A=W(A,M.j(S));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=M,b(A))return O+N;for(;6>O.length;)O="0"+O;N=O+N}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function b(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function U(x){return x.h==-1}n.l=function(x){return x=W(this,x),U(x)?-1:b(x)?0:1};function L(x){for(var S=x.g.length,A=[],N=0;N<S;N++)A[N]=~x.g[N];return new h(A,~x.h).add(w)}n.abs=function(){return U(this)?L(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],N=0,M=0;M<=S;M++){var O=N+(this.i(M)&65535)+(x.i(M)&65535),k=(O>>>16)+(this.i(M)>>>16)+(x.i(M)>>>16);N=k>>>16,O&=65535,k&=65535,A[M]=k<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function W(x,S){return x.add(L(S))}n.j=function(x){if(b(this)||b(x))return I;if(U(this))return U(x)?L(this).j(L(x)):L(L(this).j(x));if(U(x))return L(this.j(L(x)));if(0>this.l(P)&&0>x.l(P))return _(this.m()*x.m());for(var S=this.g.length+x.g.length,A=[],N=0;N<2*S;N++)A[N]=0;for(N=0;N<this.g.length;N++)for(var M=0;M<x.g.length;M++){var O=this.i(N)>>>16,k=this.i(N)&65535,qe=x.i(M)>>>16,Tt=x.i(M)&65535;A[2*N+2*M]+=k*Tt,G(A,2*N+2*M),A[2*N+2*M+1]+=O*Tt,G(A,2*N+2*M+1),A[2*N+2*M+1]+=k*qe,G(A,2*N+2*M+1),A[2*N+2*M+2]+=O*qe,G(A,2*N+2*M+2)}for(N=0;N<S;N++)A[N]=A[2*N+1]<<16|A[2*N];for(N=S;N<2*S;N++)A[N]=0;return new h(A,0)};function G(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function ee(x,S){this.g=x,this.h=S}function ie(x,S){if(b(S))throw Error("division by zero");if(b(x))return new ee(I,I);if(U(x))return S=ie(L(x),S),new ee(L(S.g),L(S.h));if(U(S))return S=ie(x,L(S)),new ee(L(S.g),S.h);if(30<x.g.length){if(U(x)||U(S))throw Error("slowDivide_ only works with positive integers.");for(var A=w,N=S;0>=N.l(x);)A=ne(A),N=ne(N);var M=ae(A,1),O=ae(N,1);for(N=ae(N,2),A=ae(A,2);!b(N);){var k=O.add(N);0>=k.l(x)&&(M=M.add(A),O=k),N=ae(N,1),A=ae(A,1)}return S=W(x,M.j(S)),new ee(M,S)}for(M=I;0<=x.l(S);){for(A=Math.max(1,Math.floor(x.m()/S.m())),N=Math.ceil(Math.log(A)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),O=_(A),k=O.j(S);U(k)||0<k.l(x);)A-=N,O=_(A),k=O.j(S);b(O)&&(O=w),M=M.add(O),x=W(x,k)}return new ee(M,x)}n.A=function(x){return ie(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],N=0;N<S;N++)A[N]=this.i(N)&x.i(N);return new h(A,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],N=0;N<S;N++)A[N]=this.i(N)|x.i(N);return new h(A,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],N=0;N<S;N++)A[N]=this.i(N)^x.i(N);return new h(A,this.h^x.h)};function ne(x){for(var S=x.g.length+1,A=[],N=0;N<S;N++)A[N]=x.i(N)<<1|x.i(N-1)>>>31;return new h(A,x.h)}function ae(x,S){var A=S>>5;S%=32;for(var N=x.g.length-A,M=[],O=0;O<N;O++)M[O]=0<S?x.i(O+A)>>>S|x.i(O+A+1)<<32-S:x.i(O+A);return new h(M,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Uv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,vs=h}).apply(typeof j_<"u"?j_:typeof self<"u"?self:typeof window<"u"?window:{});var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jv,el,Bv,pc,mf,zv,$v,qv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,y){return u==Array.prototype||u==Object.prototype||(u[m]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ec=="object"&&ec];for(var m=0;m<u.length;++m){var y=u[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var y=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var j=u[T];if(!(j in y))break e;y=y[j]}u=u[u.length-1],T=y[u],m=m(T),m!=T&&m!=null&&e(y,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var y=0,T=!1,j={next:function(){if(!T&&y<u.length){var H=y++;return{value:m(H,u[H]),done:!1}}return T=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function _(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,y){return u.call.apply(u.bind,arguments)}function I(u,m,y){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,T),u.apply(m,j)}}return function(){return u.apply(m,arguments)}}function w(u,m,y){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:I,w.apply(null,arguments)}function P(u,m){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function b(u,m){function y(){}y.prototype=m.prototype,u.aa=m.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(T,j,H){for(var re=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)re[ze-2]=arguments[ze];return m.prototype[j].apply(T,re)}}function U(u){const m=u.length;if(0<m){const y=Array(m);for(let T=0;T<m;T++)y[T]=u[T];return y}return[]}function L(u,m){for(let y=1;y<arguments.length;y++){const T=arguments[y];if(p(T)){const j=u.length||0,H=T.length||0;u.length=j+H;for(let re=0;re<H;re++)u[j+re]=T[re]}else u.push(T)}}class W{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function G(u){return/^[\s\xa0]*$/.test(u)}function ee(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function ie(u){return ie[" "](u),u}ie[" "]=function(){};var ne=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function ae(u,m,y){for(const T in u)m.call(y,u[T],T,u)}function x(u,m){for(const y in u)m.call(void 0,u[y],y,u)}function S(u){const m={};for(const y in u)m[y]=u[y];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let y,T;for(let j=1;j<arguments.length;j++){T=arguments[j];for(y in T)u[y]=T[y];for(let H=0;H<A.length;H++)y=A[H],Object.prototype.hasOwnProperty.call(T,y)&&(u[y]=T[y])}}function M(u){var m=1;u=u.split(":");const y=[];for(;0<m&&u.length;)y.push(u.shift()),m--;return u.length&&y.push(u.join(":")),y}function O(u){d.setTimeout(()=>{throw u},0)}function k(){var u=_e;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class qe{constructor(){this.h=this.g=null}add(m,y){const T=Tt.get();T.set(m,y),this.h?this.h.next=T:this.g=T,this.h=T}}var Tt=new W(()=>new Mt,u=>u.reset());class Mt{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,se=!1,_e=new qe,le=()=>{const u=d.Promise.resolve(void 0);$e=()=>{u.then(F)}};var F=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(y){O(y)}var m=Tt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}se=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};d.addEventListener("test",y,m),d.removeEventListener("test",y,m)}catch{}return u}();function ke(u,m){if(me.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(ne){e:{try{ie(m.nodeName);var j=!0;break e}catch{}j=!1}j||(m=null)}}else y=="mouseover"?m=u.fromElement:y=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Le[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ke.aa.h.call(this)}}b(ke,me);var Le={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),je=0;function We(u,m,y,T,j){this.listener=u,this.proxy=null,this.src=m,this.type=y,this.capture=!!T,this.ha=j,this.key=++je,this.da=this.fa=!1}function It(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Er(u){this.src=u,this.g={},this.h=0}Er.prototype.add=function(u,m,y,T,j){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var re=Yr(u,m,T,j);return-1<re?(m=u[re],y||(m.fa=!1)):(m=new We(m,this.src,H,!!T,j),m.fa=y,u.push(m)),m};function Ls(u,m){var y=m.type;if(y in u.g){var T=u.g[y],j=Array.prototype.indexOf.call(T,m,void 0),H;(H=0<=j)&&Array.prototype.splice.call(T,j,1),H&&(It(m),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Yr(u,m,y,T){for(var j=0;j<u.length;++j){var H=u[j];if(!H.da&&H.listener==m&&H.capture==!!y&&H.ha==T)return j}return-1}var zi="closure_lm_"+(1e6*Math.random()|0),bs={};function ea(u,m,y,T,j){if(Array.isArray(m)){for(var H=0;H<m.length;H++)ea(u,m[H],y,T,j);return null}return y=ra(y),u&&u[Ue]?u.K(m,y,_(T)?!!T.capture:!!T,j):ta(u,m,y,!1,T,j)}function ta(u,m,y,T,j,H){if(!m)throw Error("Invalid event type");var re=_(j)?!!j.capture:!!j,ze=Ms(u);if(ze||(u[zi]=ze=new Er(u)),y=ze.add(m,y,T,re,H),y.proxy)return y;if(T=Vl(),y.proxy=T,T.src=u,T.listener=y,u.addEventListener)Ae||(j=re),j===void 0&&(j=!1),u.addEventListener(m.toString(),T,j);else if(u.attachEvent)u.attachEvent(Tr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Vl(){function u(y){return m.call(u.src,u.listener,y)}const m=na;return u}function Vs(u,m,y,T,j){if(Array.isArray(m))for(var H=0;H<m.length;H++)Vs(u,m[H],y,T,j);else T=_(T)?!!T.capture:!!T,y=ra(y),u&&u[Ue]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],y=Yr(H,y,T,j),-1<y&&(It(H[y]),Array.prototype.splice.call(H,y,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ms(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Yr(m,y,T,j)),(y=-1<u?m[u]:null)&&wr(y))}function wr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ue])Ls(m.i,u);else{var y=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(y,T,u.capture):m.detachEvent?m.detachEvent(Tr(y),T):m.addListener&&m.removeListener&&m.removeListener(T),(y=Ms(m))?(Ls(y,u),y.h==0&&(y.src=null,m[zi]=null)):It(u)}}}function Tr(u){return u in bs?bs[u]:bs[u]="on"+u}function na(u,m){if(u.da)u=!0;else{m=new ke(m,this);var y=u.listener,T=u.ha||u.src;u.fa&&wr(u),u=y.call(T,m)}return u}function Ms(u){return u=u[zi],u instanceof Er?u:null}var Fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ra(u){return typeof u=="function"?u:(u[Fs]||(u[Fs]=function(m){return u.handleEvent(m)}),u[Fs])}function mt(){Q.call(this),this.i=new Er(this),this.M=this,this.F=null}b(mt,Q),mt.prototype[Ue]=!0,mt.prototype.removeEventListener=function(u,m,y,T){Vs(this,u,m,y,T)};function gt(u,m){var y,T=u.F;if(T)for(y=[];T;T=T.F)y.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new me(m,u);else if(m instanceof me)m.target=m.target||u;else{var j=m;m=new me(T,u),N(m,j)}if(j=!0,y)for(var H=y.length-1;0<=H;H--){var re=m.g=y[H];j=Ir(re,T,!0,m)&&j}if(re=m.g=u,j=Ir(re,T,!0,m)&&j,j=Ir(re,T,!1,m)&&j,y)for(H=0;H<y.length;H++)re=m.g=y[H],j=Ir(re,T,!1,m)&&j}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var y=u.g[m],T=0;T<y.length;T++)It(y[T]);delete u.g[m],u.h--}}this.F=null},mt.prototype.K=function(u,m,y,T){return this.i.add(String(u),m,!1,y,T)},mt.prototype.L=function(u,m,y,T){return this.i.add(String(u),m,!0,y,T)};function Ir(u,m,y,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var j=!0,H=0;H<m.length;++H){var re=m[H];if(re&&!re.da&&re.capture==y){var ze=re.listener,_t=re.ha||re.src;re.fa&&Ls(u.i,re),j=ze.call(_t,T)!==!1&&j}}return j&&!T.defaultPrevented}function ia(u,m,y){if(typeof u=="function")y&&(u=w(u,y));else if(u&&typeof u.handleEvent=="function")u=w(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Jr(u){u.g=ia(()=>{u.g=null,u.i&&(u.i=!1,Jr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class $i extends Q{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Jr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qi(u){Q.call(this),this.h=u,this.g={}}b(qi,Q);var sa=[];function oa(u){ae(u.g,function(m,y){this.g.hasOwnProperty(y)&&wr(m)},u),u.g={}}qi.prototype.N=function(){qi.aa.N.call(this),oa(this)},qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var aa=d.JSON.stringify,la=d.JSON.parse,ua=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Hi(){}Hi.prototype.h=null;function Us(u){return u.h||(u.h=u.i())}function js(){}var En={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zn(){me.call(this,"d")}b(Zn,me);function Bs(){me.call(this,"c")}b(Bs,me);var er={},ca=null;function Wi(){return ca=ca||new mt}er.La="serverreachability";function ha(u){me.call(this,er.La,u)}b(ha,me);function Sr(u){const m=Wi();gt(m,new ha(m))}er.STAT_EVENT="statevent";function da(u,m){me.call(this,er.STAT_EVENT,u),this.stat=m}b(da,me);function at(u){const m=Wi();gt(m,new da(m,u))}er.Ma="timingevent";function zs(u,m){me.call(this,er.Ma,u),this.size=m}b(zs,me);function On(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Gi(){this.g=!0}Gi.prototype.xa=function(){this.g=!1};function Ki(u,m,y,T,j,H){u.info(function(){if(u.g)if(H)for(var re="",ze=H.split("&"),_t=0;_t<ze.length;_t++){var be=ze[_t].split("=");if(1<be.length){var St=be[0];be=be[1];var ht=St.split("_");re=2<=ht.length&&ht[1]=="type"?re+(St+"="+be+"&"):re+(St+"=redacted&")}}else re=null;else re=H;return"XMLHTTP REQ ("+T+") [attempt "+j+"]: "+m+`
`+y+`
`+re})}function $s(u,m,y,T,j,H,re){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+j+"]: "+m+`
`+y+`
`+H+" "+re})}function Ln(u,m,y,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+ch(u,y)+(T?" "+T:"")})}function fa(u,m){u.info(function(){return"TIMEOUT: "+m})}Gi.prototype.info=function(){};function ch(u,m){if(!u.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var T=y[u];if(!(2>T.length)){var j=T[1];if(Array.isArray(j)&&!(1>j.length)){var H=j[0];if(H!="noop"&&H!="stop"&&H!="close")for(var re=1;re<j.length;re++)j[re]=""}}}}return aa(y)}catch{return m}}var qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ml={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bn;function Qi(){}b(Qi,Hi),Qi.prototype.g=function(){return new XMLHttpRequest},Qi.prototype.i=function(){return{}},bn=new Qi;function Vn(u,m,y,T){this.j=u,this.i=m,this.l=y,this.R=T||1,this.U=new qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fl}function Fl(){this.i=null,this.g="",this.h=!1}var pa={},Hs={};function Ws(u,m,y){u.L=1,u.v=ri(hn(m)),u.m=y,u.P=!0,ma(u,null)}function ma(u,m){u.F=Date.now(),Ge(u),u.A=hn(u.v);var y=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),si(y.i,"t",T),u.C=0,y=u.j.J,u.h=new Fl,u.g=nu(u.j,y?m:null,!u.m),0<u.O&&(u.M=new $i(w(u.Y,u,u.g),u.O)),m=u.U,y=u.g,T=u.ca;var j="readystatechange";Array.isArray(j)||(j&&(sa[0]=j.toString()),j=sa);for(var H=0;H<j.length;H++){var re=ea(y,j[H],T||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Sr(),Ki(u.i,u.u,u.A,u.l,u.R,u.m)}Vn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Jt(u)==3?m.j():this.Y(u)},Vn.prototype.Y=function(u){try{if(u==this.g)e:{const ht=Jt(this.g);var m=this.g.Ba();const In=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||wa(this.g)))){this.J||ht!=4||m==7||(m==8||0>=In?Sr(3):Sr(2)),Xi(this);var y=this.g.Z();this.X=y;t:if(Ul(this)){var T=wa(this.g);u="";var j=T.length,H=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Zr(this);var re="";break t}this.h.i=new d.TextDecoder}for(m=0;m<j;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(H&&m==j-1)});T.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=y==200,$s(this.i,this.u,this.A,this.l,this.R,ht,y),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,_t=this.g;if((ze=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(ze)){var be=ze;break t}}be=null}if(y=be)Ln(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ga(this,y);else{this.o=!1,this.s=3,at(12),wn(this),Zr(this);break e}}if(this.P){y=!0;let fn;for(;!this.J&&this.C<re.length;)if(fn=hh(this,re),fn==Hs){ht==4&&(this.s=4,at(14),y=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==pa){this.s=4,at(15),Ln(this.i,this.l,re,"[Invalid Chunk]"),y=!1;break}else Ln(this.i,this.l,fn,null),ga(this,fn);if(Ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||re.length!=0||this.h.h||(this.s=1,at(16),y=!1),this.o=this.o&&y,!y)Ln(this.i,this.l,re,"[Invalid Chunked Response]"),wn(this),Zr(this);else if(0<re.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Ia(St),St.M=!0,at(11))}}else Ln(this.i,this.l,re,null),ga(this,re);ht==4&&wn(this),this.o&&!this.J&&(ht==4?ro(this.j,this):(this.o=!1,Ge(this)))}else Js(this.g),y==400&&0<re.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),wn(this),Zr(this)}}}catch{}finally{}};function Ul(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function hh(u,m){var y=u.C,T=m.indexOf(`
`,y);return T==-1?Hs:(y=Number(m.substring(y,T)),isNaN(y)?pa:(T+=1,T+y>m.length?Hs:(m=m.slice(T,T+y),u.C=T+y,m)))}Vn.prototype.cancel=function(){this.J=!0,wn(this)};function Ge(u){u.S=Date.now()+u.I,jl(u,u.I)}function jl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=On(w(u.ba,u),m)}function Xi(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Vn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(fa(this.i,this.A),this.L!=2&&(Sr(),at(17)),wn(this),this.s=2,Zr(this)):jl(this,this.S-u)};function Zr(u){u.j.G==0||u.J||ro(u.j,u)}function wn(u){Xi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,oa(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ga(u,m){try{var y=u.j;if(y.G!=0&&(y.g==u||Wt(y.h,u))){if(!u.K&&Wt(y.h,u)&&y.G==3){try{var T=y.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var j=T;if(j[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)no(y),Bn(y);else break e;to(y),at(18)}}else y.za=j[1],0<y.za-y.T&&37500>j[2]&&y.F&&y.v==0&&!y.C&&(y.C=On(w(y.Za,y),6e3));if(1>=zl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Pr(y,11)}else if((u.K||y.g==u)&&no(y),!G(m))for(j=y.Da.g.parse(m),m=0;m<j.length;m++){let be=j[m];if(y.T=be[0],be=be[1],y.G==2)if(be[0]=="c"){y.K=be[1],y.ia=be[2];const St=be[3];St!=null&&(y.la=St,y.j.info("VER="+y.la));const ht=be[4];ht!=null&&(y.Aa=ht,y.j.info("SVER="+y.Aa));const In=be[5];In!=null&&typeof In=="number"&&0<In&&(T=1.5*In,y.L=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const fn=u.g;if(fn){const rs=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rs){var H=T.h;H.g||rs.indexOf("spdy")==-1&&rs.indexOf("quic")==-1&&rs.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(_a(H,H.h),H.h=null))}if(T.D){const so=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;so&&(T.ya=so,He(T.I,T.D,so))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),T=y;var re=u;if(T.qa=tu(T,T.J?T.ia:null,T.W),re.K){$l(T.h,re);var ze=re,_t=T.L;_t&&(ze.I=_t),ze.B&&(Xi(ze),Ge(ze)),T.g=re}else ns(T);0<y.i.length&&ir(y)}else be[0]!="stop"&&be[0]!="close"||Pr(y,7);else y.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Pr(y,7):xt(y):be[0]!="noop"&&y.l&&y.l.ta(be),y.v=0)}}Sr(4)}catch{}}var Bl=class{constructor(u,m){this.g=u,this.map=m}};function Yi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function zl(u){return u.h?1:u.g?u.g.size:0}function Wt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function _a(u,m){u.g?u.g.add(m):u.h=m}function $l(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Yi.prototype.cancel=function(){if(this.i=ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ql(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const y of u.g.values())m=m.concat(y.D);return m}return U(u.i)}function Gs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],y=u.length,T=0;T<y;T++)m.push(u[T]);return m}m=[],y=0;for(T in u)m[y++]=u[T];return m}function Ks(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var y=0;y<u;y++)m.push(y);return m}m=[],y=0;for(const T in u)m[y++]=T;return m}}}function ei(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var y=Ks(u),T=Gs(u),j=T.length,H=0;H<j;H++)m.call(void 0,T[H],y&&y[H],u)}var Ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dh(u,m){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var T=u[y].indexOf("="),j=null;if(0<=T){var H=u[y].substring(0,T);j=u[y].substring(T+1)}else H=u[y];m(H,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Rr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Rr){this.h=u.h,Zi(this,u.j),this.o=u.o,this.g=u.g,ti(this,u.s),this.l=u.l;var m=u.i,y=new tr;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),ni(this,y),this.m=u.m}else u&&(m=String(u).match(Ji))?(this.h=!1,Zi(this,m[1]||"",!0),this.o=De(m[2]||""),this.g=De(m[3]||"",!0),ti(this,m[4]),this.l=De(m[5]||"",!0),ni(this,m[6]||"",!0),this.m=De(m[7]||"")):(this.h=!1,this.i=new tr(null,this.h))}Rr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ii(m,Qs,!0),":");var y=this.g;return(y||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ii(m,Qs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(ii(y,y.charAt(0)=="/"?Gl:Wl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",ii(y,ya)),u.join("")};function hn(u){return new Rr(u)}function Zi(u,m,y){u.j=y?De(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ti(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ni(u,m,y){m instanceof tr?(u.i=m,nr(u.i,u.h)):(y||(m=ii(m,Kl)),u.i=new tr(m,u.h))}function He(u,m,y){u.i.set(m,y)}function ri(u){return He(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function De(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ii(u,m,y){return typeof u=="string"?(u=encodeURI(u).replace(m,Hl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Hl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Qs=/[#\/\?@]/g,Wl=/[#\?:]/g,Gl=/[#\?]/g,Kl=/[#\?@]/g,ya=/#/g;function tr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Pt(u){u.g||(u.g=new Map,u.h=0,u.i&&dh(u.i,function(m,y){u.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}n=tr.prototype,n.add=function(u,m){Pt(this),this.i=null,u=Tn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(m),this.h+=1,this};function Mn(u,m){Pt(u),m=Tn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Fn(u,m){return Pt(u),m=Tn(u,m),u.g.has(m)}n.forEach=function(u,m){Pt(this),this.g.forEach(function(y,T){y.forEach(function(j){u.call(m,j,T,this)},this)},this)},n.na=function(){Pt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let T=0;T<m.length;T++){const j=u[T];for(let H=0;H<j.length;H++)y.push(m[T])}return y},n.V=function(u){Pt(this);let m=[];if(typeof u=="string")Fn(this,u)&&(m=m.concat(this.g.get(Tn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)m=m.concat(u[y])}return m},n.set=function(u,m){return Pt(this),this.i=null,u=Tn(this,u),Fn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function si(u,m,y){Mn(u,m),0<y.length&&(u.i=null,u.g.set(Tn(u,m),U(y)),u.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var T=m[y];const H=encodeURIComponent(String(T)),re=this.V(T);for(T=0;T<re.length;T++){var j=H;re[T]!==""&&(j+="="+encodeURIComponent(String(re[T]))),u.push(j)}}return this.i=u.join("&")};function Tn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function nr(u,m){m&&!u.j&&(Pt(u),u.i=null,u.g.forEach(function(y,T){var j=T.toLowerCase();T!=j&&(Mn(this,T),si(this,j,y))},u)),u.j=m}function fh(u,m){const y=new Gi;if(d.Image){const T=new Image;T.onload=P(Yt,y,"TestLoadImage: loaded",!0,m,T),T.onerror=P(Yt,y,"TestLoadImage: error",!1,m,T),T.onabort=P(Yt,y,"TestLoadImage: abort",!1,m,T),T.ontimeout=P(Yt,y,"TestLoadImage: timeout",!1,m,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Ql(u,m){const y=new Gi,T=new AbortController,j=setTimeout(()=>{T.abort(),Yt(y,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(H=>{clearTimeout(j),H.ok?Yt(y,"TestPingServer: ok",!0,m):Yt(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),Yt(y,"TestPingServer: error",!1,m)})}function Yt(u,m,y,T,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),T(y)}catch{}}function ph(){this.g=new ua}function Xl(u,m,y){const T=y||"";try{ei(u,function(j,H){let re=j;_(j)&&(re=aa(j)),m.push(T+H+"="+encodeURIComponent(re))})}catch(j){throw m.push(T+"type="+encodeURIComponent("_badmap")),j}}function Cr(u){this.l=u.Ub||null,this.j=u.eb||!1}b(Cr,Hi),Cr.prototype.g=function(){return new es(this.l,this.j)},Cr.prototype.i=function(u){return function(){return u}}({});function es(u,m){mt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(es,mt),n=es.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,jn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Un(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Un(this):jn(this),this.readyState==3&&Yl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Un(this))},n.Qa=function(u){this.g&&(this.response=u,Un(this))},n.ga=function(){this.g&&Un(this)};function Un(u){u.readyState=4,u.l=null,u.j=null,u.v=null,jn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=m.next();return u.join(`\r
`)};function jn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ar(u){let m="";return ae(u,function(y,T){m+=T,m+=":",m+=y,m+=`\r
`}),m}function oi(u,m,y){e:{for(T in y){var T=!1;break e}T=!0}T||(y=Ar(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):He(u,m,y))}function Je(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Je,mt);var mh=/^https?$/i,va=["POST","PUT"];n=Je.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bn.g(),this.v=this.o?Us(this.o):Us(bn),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){ts(this,H);return}if(u=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var j in T)y.set(j,T[j]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const H of T.keys())y.set(H,T.get(H));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(H=>H.toLowerCase()=="content-type"),j=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(va,m,void 0))||T||j||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,re]of y)this.g.setRequestHeader(H,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ys(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){ts(this,H)}};function ts(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Xs(u),dn(u)}function Xs(u){u.A||(u.A=!0,gt(u,"complete"),gt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,gt(this,"complete"),gt(this,"abort"),dn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dn(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ea(this):this.bb())},n.bb=function(){Ea(this)};function Ea(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Jt(u)!=4||u.Z()!=2)){if(u.u&&Jt(u)==4)ia(u.Ea,0,u);else if(gt(u,"readystatechange"),Jt(u)==4){u.h=!1;try{const re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var T;if(T=re===0){var j=String(u.D).match(Ji)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),T=!mh.test(j?j.toLowerCase():"")}y=T}if(y)gt(u,"complete"),gt(u,"success");else{u.m=6;try{var H=2<Jt(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",Xs(u)}}finally{dn(u)}}}}function dn(u,m){if(u.g){Ys(u);const y=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||gt(u,"ready");try{y.onreadystatechange=T}catch{}}}function Ys(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Jt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),la(m)}};function wa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Js(u){const m={};u=(u.g&&2<=Jt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(G(u[T]))continue;var y=M(u[T]);const j=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const H=m[j]||[];m[j]=H,H.push(y)}x(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rr(u,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||m}function Ta(u){this.Aa=0,this.i=[],this.j=new Gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rr("baseRetryDelayMs",5e3,u),this.cb=rr("retryDelaySeedMs",1e4,u),this.Wa=rr("forwardChannelMaxRetries",2,u),this.wa=rr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(u&&u.concurrentRequestLimit),this.Da=new ph,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ta.prototype,n.la=8,n.G=1,n.connect=function(u,m,y,T){at(0),this.W=u,this.H=m||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.I=tu(this,null,this.W),ir(this)};function xt(u){if(Zs(u),u.G==3){var m=u.U++,y=hn(u.I);if(He(y,"SID",u.K),He(y,"RID",m),He(y,"TYPE","terminate"),kr(u,y),m=new Vn(u,u.j,m),m.L=2,m.v=ri(hn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=m.v,y=!0),y||(m.g=nu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ge(m)}eu(u)}function Bn(u){u.g&&(Ia(u),u.g.cancel(),u.g=null)}function Zs(u){Bn(u),u.u&&(d.clearTimeout(u.u),u.u=null),no(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function ir(u){if(!cn(u.h)&&!u.s){u.s=!0;var m=u.Ga;$e||le(),se||($e(),se=!0),_e.add(m,u),u.B=0}}function gh(u,m){return zl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=On(w(u.Ga,u,m),Zl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const j=new Vn(this,this.j,u);let H=this.o;if(this.S&&(H?(H=S(H),N(H,this.S)):H=this.S),this.m!==null||this.O||(j.H=H,H=null),this.P)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=ai(this,j,m),y=hn(this.I),He(y,"RID",u),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),kr(this,y),H&&(this.O?m="headers="+encodeURIComponent(String(Ar(H)))+"&"+m:this.m&&oi(y,this.m,H)),_a(this.h,j),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",m),He(y,"SID","null"),j.T=!0,Ws(j,y,null)):Ws(j,y,m),this.G=2}}else this.G==3&&(u?eo(this,u):this.i.length==0||cn(this.h)||eo(this))};function eo(u,m){var y;m?y=m.l:y=u.U++;const T=hn(u.I);He(T,"SID",u.K),He(T,"RID",y),He(T,"AID",u.T),kr(u,T),u.m&&u.o&&oi(T,u.m,u.o),y=new Vn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ai(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),_a(u.h,y),Ws(y,T,m)}function kr(u,m){u.H&&ae(u.H,function(y,T){He(m,T,y)}),u.l&&ei({},function(y,T){He(m,T,y)})}function ai(u,m,y){y=Math.min(u.i.length,y);var T=u.l?w(u.l.Na,u.l,u):null;e:{var j=u.i;let H=-1;for(;;){const re=["count="+y];H==-1?0<y?(H=j[0].g,re.push("ofs="+H)):H=0:re.push("ofs="+H);let ze=!0;for(let _t=0;_t<y;_t++){let be=j[_t].g;const St=j[_t].map;if(be-=H,0>be)H=Math.max(0,j[_t].g-100),ze=!1;else try{Xl(St,re,"req"+be+"_")}catch{T&&T(St)}}if(ze){T=re.join("&");break e}}}return u=u.i.splice(0,y),m.D=u,T}function ns(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;$e||le(),se||($e(),se=!0),_e.add(m,u),u.v=0}}function to(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=On(w(u.Fa,u),Zl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Jl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=On(w(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Bn(this),Jl(this))};function Ia(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Jl(u){u.g=new Vn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=hn(u.qa);He(m,"RID","rpc"),He(m,"SID",u.K),He(m,"AID",u.T),He(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&He(m,"TO",u.ja),He(m,"TYPE","xmlhttp"),kr(u,m),u.m&&u.o&&oi(m,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=ri(hn(m)),y.m=null,y.P=!0,ma(y,u)}n.Za=function(){this.C!=null&&(this.C=null,Bn(this),to(this),at(19))};function no(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function ro(u,m){var y=null;if(u.g==m){no(u),Ia(u),u.g=null;var T=2}else if(Wt(u.h,m))y=m.D,$l(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var j=u.B;T=Wi(),gt(T,new zs(T,y)),ir(u)}else ns(u);else if(j=m.s,j==3||j==0&&0<m.X||!(T==1&&gh(u,m)||T==2&&to(u)))switch(y&&0<y.length&&(m=u.h,m.i=m.i.concat(y)),j){case 1:Pr(u,5);break;case 4:Pr(u,10);break;case 3:Pr(u,6);break;default:Pr(u,2)}}}function Zl(u,m){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*m}function Pr(u,m){if(u.j.info("Error code "+m),m==2){var y=w(u.fb,u),T=u.Xa;const j=!T;T=new Rr(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Zi(T,"https"),ri(T),j?fh(T.toString(),y):Ql(T.toString(),y)}else at(2);u.G=0,u.l&&u.l.sa(m),eu(u),Zs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function eu(u){if(u.G=0,u.ka=[],u.l){const m=ql(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,U(u.i),u.i.length=0),u.l.ra()}}function tu(u,m,y){var T=y instanceof Rr?hn(y):new Rr(y);if(T.g!="")m&&(T.g=m+"."+T.g),ti(T,T.s);else{var j=d.location;T=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;var H=new Rr(null);T&&Zi(H,T),m&&(H.g=m),j&&ti(H,j),y&&(H.l=y),T=H}return y=u.D,m=u.ya,y&&m&&He(T,y,m),He(T,"VER",u.la),kr(u,T),T}function nu(u,m,y){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Je(new Cr({eb:y})):new Je(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sa(){}n=Sa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function io(){}io.prototype.g=function(u,m){return new Gt(u,m)};function Gt(u,m){mt.call(this),this.g=new Ta(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!G(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!G(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new sr(this)}b(Gt,mt),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){xt(this.g)},Gt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=aa(u),u=y);m.i.push(new Bl(m.Ya++,u)),m.G==3&&ir(m)},Gt.prototype.N=function(){this.g.l=null,delete this.j,xt(this.g),delete this.g,Gt.aa.N.call(this)};function ru(u){Zn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const y in m){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}b(ru,Zn);function iu(){Bs.call(this),this.status=1}b(iu,Bs);function sr(u){this.g=u}b(sr,Sa),sr.prototype.ua=function(){gt(this.g,"a")},sr.prototype.ta=function(u){gt(this.g,new ru(u))},sr.prototype.sa=function(u){gt(this.g,new iu)},sr.prototype.ra=function(){gt(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,qv=function(){return new io},$v=function(){return Wi()},zv=er,mf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,pc=qs,Ml.COMPLETE="complete",Bv=Ml,js.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",mt.prototype.listen=mt.prototype.K,el=js,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,jv=Je}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});const B_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new jf("@firebase/firestore");function Ao(){return Cs.logLevel}function ue(n,...e){if(Cs.logLevel<=xe.DEBUG){const t=e.map(tp);Cs.debug(`Firestore (${Go}): ${n}`,...t)}}function Kr(n,...e){if(Cs.logLevel<=xe.ERROR){const t=e.map(tp);Cs.error(`Firestore (${Go}): ${n}`,...t)}}function Mo(n,...e){if(Cs.logLevel<=xe.WARN){const t=e.map(tp);Cs.warn(`Firestore (${Go}): ${n}`,...t)}}function tp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: `+n;throw Kr(e),new Error(e)}function Be(n,e){n||Te()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends vr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t($t.UNAUTHENTICATED))}shutdown(){}}class MC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class FC{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new qr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new qr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Be(typeof i.accessToken=="string"),new Hv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new $t(e)}}class UC{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class jC{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new UC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Be(this.o===void 0);const i=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Be(typeof t.token=="string"),this.R=t.token,new BC(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=$C(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Oe(n,e){return n<e?-1:n>e?1:0}function Fo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Et(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new he(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new Et(0,0))}static max(){return new Ie(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return pl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pl?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ye extends pl{construct(e,t,i){return new Ye(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new he(X.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const qC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends pl{construct(e,t,i){return new bt(e,t,i)}static isValidIdentifier(e){return qC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new he(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new he(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new he(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(h=!h,o++):d!=="."||h?(i+=d,o++):(l(),o++)}if(l(),h)throw new he(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ye.fromString(e))}static fromName(e){return new ge(Ye.fromString(e).popFirst(5))}static empty(){return new ge(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ye(e.slice()))}}function HC(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new Et(t+1,0):new Et(t,i));return new Li(o,ge.empty(),e)}function WC(n){return new Li(n.readTime,n.key,-1)}class Li{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Li(Ie.min(),ge.empty(),-1)}static max(){return new Li(Ie.max(),ge.empty(),-1)}}function GC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(n.documentKey,e.documentKey),t!==0?t:Oe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==KC)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,i)=>{t(e)})}static reject(e){return new K((t,i)=>{i(e)})}static waitFor(e){return new K((t,i)=>{let o=0,l=0,h=!1;e.forEach(d=>{++o,d.next(()=>{++l,h&&l===o&&t()},p=>i(p))}),h=!0,l===o&&t()})}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next(o=>o?K.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new K((i,o)=>{const l=e.length,h=new Array(l);let d=0;for(let p=0;p<l;p++){const _=p;t(e[_]).next(E=>{h[_]=E,++d,d===l&&i(h)},E=>o(E))}})}static doWhile(e,t){return new K((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function XC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wc.oe=-1;function Gc(n){return n==null}function Pc(n){return n===0&&1/n==-1/0}function YC(n){return typeof n=="number"&&Number.isInteger(n)&&!Pc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=z_(e)),e=ZC(n.get(t),e);return z_(e)}function ZC(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function z_(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ji(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Gv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tc(this.root,e,this.comparator,!0)}}class tc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Lt.RED,this.left=o??Lt.EMPTY,this.right=l??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Lt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new q_(this.data.getIterator())}getIteratorFrom(e){return new q_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class q_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new yn([])}unionWith(e){let t=new wt(bt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Kv("Invalid base64 string: "+l):l}}(e);return new Vt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const eA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(n){if(Be(!!n),typeof n=="string"){let e=0;const t=eA.exec(n);if(Be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vi(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Kc(n){const e=n.mapValue.fields.__previous_value__;return np(e)?Kc(e):e}function ml(n){const e=bi(n.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,t,i,o,l,h,d,p,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=_}}class gl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?np(n)?4:rA(n)?9007199254740991:nA(n)?10:11:Te()}function _r(n,e){if(n===e)return!0;const t=Mi(n);if(t!==Mi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ml(n).isEqual(ml(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=bi(o.timestampValue),d=bi(l.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Vi(o.bytesValue).isEqual(Vi(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ut(o.doubleValue),d=ut(l.doubleValue);return h===d?Pc(h)===Pc(d):isNaN(h)&&isNaN(d)}return!1}(n,e);case 9:return Fo(n.arrayValue.values||[],e.arrayValue.values||[],_r);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},d=l.mapValue.fields||{};if($_(h)!==$_(d))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(d[p]===void 0||!_r(h[p],d[p])))return!1;return!0}(n,e);default:return Te()}}function _l(n,e){return(n.values||[]).find(t=>_r(t,e))!==void 0}function Uo(n,e){if(n===e)return 0;const t=Mi(n),i=Mi(e);if(t!==i)return Oe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(n.booleanValue,e.booleanValue);case 2:return function(l,h){const d=ut(l.integerValue||l.doubleValue),p=ut(h.integerValue||h.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return H_(n.timestampValue,e.timestampValue);case 4:return H_(ml(n),ml(e));case 5:return Oe(n.stringValue,e.stringValue);case 6:return function(l,h){const d=Vi(l),p=Vi(h);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const d=l.split("/"),p=h.split("/");for(let _=0;_<d.length&&_<p.length;_++){const E=Oe(d[_],p[_]);if(E!==0)return E}return Oe(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const d=Oe(ut(l.latitude),ut(h.latitude));return d!==0?d:Oe(ut(l.longitude),ut(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return W_(n.arrayValue,e.arrayValue);case 10:return function(l,h){var d,p,_,E;const I=l.fields||{},w=h.fields||{},P=(d=I.value)===null||d===void 0?void 0:d.arrayValue,b=(p=w.value)===null||p===void 0?void 0:p.arrayValue,U=Oe(((_=P==null?void 0:P.values)===null||_===void 0?void 0:_.length)||0,((E=b==null?void 0:b.values)===null||E===void 0?void 0:E.length)||0);return U!==0?U:W_(P,b)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===nc.mapValue&&h===nc.mapValue)return 0;if(l===nc.mapValue)return 1;if(h===nc.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),_=h.fields||{},E=Object.keys(_);p.sort(),E.sort();for(let I=0;I<p.length&&I<E.length;++I){const w=Oe(p[I],E[I]);if(w!==0)return w;const P=Uo(d[p[I]],_[E[I]]);if(P!==0)return P}return Oe(p.length,E.length)}(n.mapValue,e.mapValue);default:throw Te()}}function H_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Oe(n,e);const t=bi(n),i=bi(e),o=Oe(t.seconds,i.seconds);return o!==0?o:Oe(t.nanos,i.nanos)}function W_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Uo(t[o],i[o]);if(l)return l}return Oe(t.length,i.length)}function jo(n){return gf(n)}function gf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=bi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Vi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ge.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=gf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${gf(t.fields[h])}`;return o+"}"}(n.mapValue):Te()}function mc(n){switch(Mi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kc(n);return e?16+mc(e):16;case 5:return 2*n.stringValue.length;case 6:return Vi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+mc(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return ji(i.fields,(l,h)=>{o+=l.length+mc(h)}),o}(n.mapValue);default:throw Te()}}function G_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function _f(n){return!!n&&"integerValue"in n}function rp(n){return!!n&&"arrayValue"in n}function K_(n){return!!n&&"nullValue"in n}function Q_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gc(n){return!!n&&"mapValue"in n}function nA(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function sl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ji(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=sl(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=sl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function rA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!gc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sl(t)}setAll(e){let t=bt.emptyPath(),i={},o=[];e.forEach((h,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}h?i[d.lastSegment()]=sl(h):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());gc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _r(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];gc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ji(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new an(sl(this.value))}}function Qv(n){const e=[];return ji(n.fields,(t,i)=>{const o=new bt([t]);if(gc(i)){const l=Qv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new yn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,i,o,l,h,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=d}static newInvalidDocument(e){return new qt(e,0,Ie.min(),Ie.min(),Ie.min(),an.empty(),0)}static newFoundDocument(e,t,i,o){return new qt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new qt(e,2,t,Ie.min(),Ie.min(),an.empty(),0)}static newUnknownDocument(e,t){return new qt(e,3,t,Ie.min(),Ie.min(),an.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){this.position=e,this.inclusive=t}}function X_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=ge.comparator(ge.fromName(h.referenceValue),t.key):i=Uo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Y_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_r(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t="asc"){this.field=e,this.dir=t}}function iA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{}class pt extends Xv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new oA(e,t,i):t==="array-contains"?new uA(e,i):t==="in"?new cA(e,i):t==="not-in"?new hA(e,i):t==="array-contains-any"?new dA(e,i):new pt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new aA(e,i):new lA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Uo(t,this.value)):t!==null&&Mi(this.value)===Mi(t)&&this.matchesComparison(Uo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xn extends Xv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Xn(e,t)}matches(e){return Yv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yv(n){return n.op==="and"}function Jv(n){return sA(n)&&Yv(n)}function sA(n){for(const e of n.filters)if(e instanceof Xn)return!1;return!0}function yf(n){if(n instanceof pt)return n.field.canonicalString()+n.op.toString()+jo(n.value);if(Jv(n))return n.filters.map(e=>yf(e)).join(",");{const e=n.filters.map(t=>yf(t)).join(",");return`${n.op}(${e})`}}function Zv(n,e){return n instanceof pt?function(i,o){return o instanceof pt&&i.op===o.op&&i.field.isEqual(o.field)&&_r(i.value,o.value)}(n,e):n instanceof Xn?function(i,o){return o instanceof Xn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,d)=>l&&Zv(h,o.filters[d]),!0):!1}(n,e):void Te()}function e0(n){return n instanceof pt?function(t){return`${t.field.canonicalString()} ${t.op} ${jo(t.value)}`}(n):n instanceof Xn?function(t){return t.op.toString()+" {"+t.getFilters().map(e0).join(" ,")+"}"}(n):"Filter"}class oA extends pt{constructor(e,t,i){super(e,t,i),this.key=ge.fromName(i.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class aA extends pt{constructor(e,t){super(e,"in",t),this.keys=t0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class lA extends pt{constructor(e,t){super(e,"not-in",t),this.keys=t0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function t0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ge.fromName(i.referenceValue))}class uA extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rp(t)&&_l(t.arrayValue,this.value)}}class cA extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_l(this.value.arrayValue,t)}}class hA extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(_l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!_l(this.value.arrayValue,t)}}class dA extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>_l(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,t=null,i=[],o=[],l=null,h=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=d,this.ue=null}}function J_(n,e=null,t=[],i=[],o=null,l=null,h=null){return new fA(n,e,t,i,o,l,h)}function ip(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>yf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Gc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>jo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>jo(i)).join(",")),e.ue=t}return e.ue}function sp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!iA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Zv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Y_(n.startAt,e.startAt)&&Y_(n.endAt,e.endAt)}function vf(n){return ge.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t=null,i=[],o=[],l=null,h="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pA(n,e,t,i,o,l,h,d){return new xl(n,e,t,i,o,l,h,d)}function op(n){return new xl(n)}function Z_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function n0(n){return n.collectionGroup!==null}function ol(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new wt(bt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(_=>{_.isInequality()&&(d=d.add(_.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Nc(l,i))}),t.has(bt.keyField().canonicalString())||e.ce.push(new Nc(bt.keyField(),i))}return e.ce}function mr(n){const e=Se(n);return e.le||(e.le=mA(e,ol(n))),e.le}function mA(n,e){if(n.limitType==="F")return J_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Nc(o.field,l)});const t=n.endAt?new xc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new xc(n.startAt.position,n.startAt.inclusive):null;return J_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Ef(n,e){const t=n.filters.concat([e]);return new xl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function wf(n,e,t){return new xl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qc(n,e){return sp(mr(n),mr(e))&&n.limitType===e.limitType}function r0(n){return`${ip(mr(n))}|lt:${n.limitType}`}function ko(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>e0(o)).join(", ")}]`),Gc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>jo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>jo(o)).join(",")),`Target(${i})`}(mr(n))}; limitType=${n.limitType})`}function Xc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ge.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of ol(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,d,p){const _=X_(h,d,p);return h.inclusive?_<=0:_<0}(i.startAt,ol(i),o)||i.endAt&&!function(h,d,p){const _=X_(h,d,p);return h.inclusive?_>=0:_>0}(i.endAt,ol(i),o))}(n,e)}function gA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function i0(n){return(e,t)=>{let i=!1;for(const o of ol(n)){const l=_A(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function _A(n,e,t){const i=n.field.isKeyField()?ge.comparator(e.key,t.key):function(l,h,d){const p=h.data.field(l),_=d.data.field(l);return p!==null&&_!==null?Uo(p,_):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return Gv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=new rt(ge.comparator);function Qr(){return yA}const s0=new rt(ge.comparator);function tl(...n){let e=s0;for(const t of n)e=e.insert(t.key,t);return e}function o0(n){let e=s0;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ys(){return al()}function a0(){return al()}function al(){return new Ds(n=>n.toString(),(n,e)=>n.isEqual(e))}const vA=new rt(ge.comparator),EA=new wt(ge.comparator);function Ne(...n){let e=EA;for(const t of n)e=e.add(t);return e}const wA=new wt(Oe);function TA(){return wA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pc(e)?"-0":e}}function l0(n){return{integerValue:""+n}}function IA(n,e){return YC(e)?l0(e):ap(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this._=void 0}}function SA(n,e,t){return n instanceof yl?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&np(l)&&(l=Kc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof vl?c0(n,e):n instanceof El?h0(n,e):function(o,l){const h=u0(o,l),d=ey(h)+ey(o.Pe);return _f(h)&&_f(o.Pe)?l0(d):ap(o.serializer,d)}(n,e)}function RA(n,e,t){return n instanceof vl?c0(n,e):n instanceof El?h0(n,e):t}function u0(n,e){return n instanceof Dc?function(i){return _f(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class yl extends Yc{}class vl extends Yc{constructor(e){super(),this.elements=e}}function c0(n,e){const t=d0(e);for(const i of n.elements)t.some(o=>_r(o,i))||t.push(i);return{arrayValue:{values:t}}}class El extends Yc{constructor(e){super(),this.elements=e}}function h0(n,e){let t=d0(e);for(const i of n.elements)t=t.filter(o=>!_r(o,i));return{arrayValue:{values:t}}}class Dc extends Yc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ey(n){return ut(n.integerValue||n.doubleValue)}function d0(n){return rp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,t){this.field=e,this.transform=t}}function AA(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof vl&&o instanceof vl||i instanceof El&&o instanceof El?Fo(i.elements,o.elements,_r):i instanceof Dc&&o instanceof Dc?_r(i.Pe,o.Pe):i instanceof yl&&o instanceof yl}(n.transform,e.transform)}class kA{constructor(e,t){this.version=e,this.transformResults=t}}class Qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _c(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Jc{}function f0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lp(n.key,Qn.none()):new Nl(n.key,n.data,Qn.none());{const t=n.data,i=an.empty();let o=new wt(bt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Bi(n.key,i,new yn(o.toArray()),Qn.none())}}function PA(n,e,t){n instanceof Nl?function(o,l,h){const d=o.value.clone(),p=ny(o.fieldTransforms,l,h.transformResults);d.setAll(p),l.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Bi?function(o,l,h){if(!_c(o.precondition,l))return void l.convertToUnknownDocument(h.version);const d=ny(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(p0(o)),p.setAll(d),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function ll(n,e,t,i){return n instanceof Nl?function(l,h,d,p){if(!_c(l.precondition,h))return d;const _=l.value.clone(),E=ry(l.fieldTransforms,p,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(n,e,t,i):n instanceof Bi?function(l,h,d,p){if(!_c(l.precondition,h))return d;const _=ry(l.fieldTransforms,p,h),E=h.data;return E.setAll(p0(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(I=>I.field))}(n,e,t,i):function(l,h,d){return _c(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d}(n,e,t)}function xA(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=u0(i.transform,o||null);l!=null&&(t===null&&(t=an.empty()),t.set(i.field,l))}return t||null}function ty(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Fo(i,o,(l,h)=>AA(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Nl extends Jc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Bi extends Jc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function p0(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function ny(n,e,t){const i=new Map;Be(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,d=e.data.field(l.field);i.set(l.field,RA(h,d,t[o]))}return i}function ry(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,SA(l,h,e))}return i}class lp extends Jc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NA extends Jc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&PA(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ll(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ll(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=a0();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let d=this.applyToLocalView(h,l.mutatedFields);d=t.has(o.key)?null:d;const p=f0(h,d);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Fo(this.mutations,e.mutations,(t,i)=>ty(t,i))&&Fo(this.baseMutations,e.baseMutations,(t,i)=>ty(t,i))}}class up{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Be(e.mutations.length===i.length);let o=function(){return vA}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new up(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Ve;function bA(n){switch(n){default:return Te();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0}}function m0(n){if(n===void 0)return Kr("GRPC error has no .code"),X.UNKNOWN;switch(n){case ft.OK:return X.OK;case ft.CANCELLED:return X.CANCELLED;case ft.UNKNOWN:return X.UNKNOWN;case ft.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case ft.INTERNAL:return X.INTERNAL;case ft.UNAVAILABLE:return X.UNAVAILABLE;case ft.UNAUTHENTICATED:return X.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case ft.NOT_FOUND:return X.NOT_FOUND;case ft.ALREADY_EXISTS:return X.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return X.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case ft.ABORTED:return X.ABORTED;case ft.OUT_OF_RANGE:return X.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return X.UNIMPLEMENTED;case ft.DATA_LOSS:return X.DATA_LOSS;default:return Te()}}(Ve=ft||(ft={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=new vs([4294967295,4294967295],0);function iy(n){const e=VA().encode(n),t=new Uv;return t.update(e),new Uint8Array(t.digest())}function sy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new vs([t,i],0),new vs([o,l],0)]}class cp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new nl(`Invalid padding: ${t}`);if(i<0)throw new nl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new nl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new nl(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=vs.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(vs.fromNumber(i)));return o.compare(MA)===1&&(o=new vs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=iy(e),[i,o]=sy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);if(!this.de(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new cp(l,o,t);return i.forEach(d=>h.insert(d)),h}insert(e){if(this.Te===0)return;const t=iy(e),[i,o]=sy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class nl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Dl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Zc(Ie.min(),o,new rt(Oe),Qr(),Ne())}}class Dl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Dl(i,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class g0{constructor(e,t){this.targetId=e,this.me=t}}class _0{constructor(e,t,i=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class oy{constructor(){this.fe=0,this.ge=ay(),this.pe=Vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ne(),t=Ne(),i=Ne();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new Dl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=ay()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class FA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qr(),this.qe=rc(),this.Qe=rc(),this.Ke=new rt(Oe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(vf(l))if(i===0){const h=new ge(l.path);this.We(t,h,qt.newNoDocument(h,Ie.min()))}else Be(i===1);else{const h=this.Ze(t);if(h!==i){const d=this.Xe(e),p=d?this.et(d,e,h):1;if(p!==0){this.He(t);const _=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,_)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,d;try{h=Vi(i).toUint8Array()}catch(p){if(p instanceof Kv)return Mo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new cp(h,o,l)}catch(p){return Mo(p instanceof nl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Le.nt(),d=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,h)=>{const d=this.Ye(h);if(d){if(l.current&&vf(d.target)){const p=new ge(d.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,qt.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=Ne();this.Qe.forEach((l,h)=>{let d=!0;h.forEachWhile(p=>{const _=this.Ye(p);return!_||_.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Zc(e,t,this.Ke,this.ke,i);return this.ke=Qr(),this.qe=rc(),this.Qe=rc(),this.Ke=new rt(Oe),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new oy,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new wt(Oe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new wt(Oe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new oy),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function rc(){return new rt(ge.comparator)}function ay(){return new rt(ge.comparator)}const UA={asc:"ASCENDING",desc:"DESCENDING"},jA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BA={and:"AND",or:"OR"};class zA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Tf(n,e){return n.useProto3Json||Gc(e)?e:{value:e}}function Oc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $A(n,e){return Oc(n,e.toTimestamp())}function gr(n){return Be(!!n),Ie.fromTimestamp(function(t){const i=bi(t);return new Et(i.seconds,i.nanos)}(n))}function hp(n,e){return If(n,e).canonicalString()}function If(n,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function v0(n){const e=Ye.fromString(n);return Be(S0(e)),e}function Sf(n,e){return hp(n.databaseId,e.path)}function Yd(n,e){const t=v0(e);if(t.get(1)!==n.databaseId.projectId)throw new he(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new he(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ge(w0(t))}function E0(n,e){return hp(n.databaseId,e)}function qA(n){const e=v0(n);return e.length===4?Ye.emptyPath():w0(e)}function Rf(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function w0(n){return Be(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ly(n,e,t){return{name:Sf(n,e),fields:t.value.mapValue.fields}}function HA(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(_,E){return _.useProto3Json?(Be(E===void 0||typeof E=="string"),Vt.fromBase64String(E||"")):(Be(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Vt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&function(_){const E=_.code===void 0?X.UNKNOWN:m0(_.code);return new he(E,_.message||"")}(h);t=new _0(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Yd(n,i.document.name),l=gr(i.document.updateTime),h=i.document.createTime?gr(i.document.createTime):Ie.min(),d=new an({mapValue:{fields:i.document.fields}}),p=qt.newFoundDocument(o,l,h,d),_=i.targetIds||[],E=i.removedTargetIds||[];t=new yc(_,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Yd(n,i.document),l=i.readTime?gr(i.readTime):Ie.min(),h=qt.newNoDocument(o,l),d=i.removedTargetIds||[];t=new yc([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Yd(n,i.document),l=i.removedTargetIds||[];t=new yc([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new LA(o,l),d=i.targetId;t=new g0(d,h)}}return t}function WA(n,e){let t;if(e instanceof Nl)t={update:ly(n,e.key,e.value)};else if(e instanceof lp)t={delete:Sf(n,e.key)};else if(e instanceof Bi)t={update:ly(n,e.key,e.data),updateMask:tk(e.fieldMask)};else{if(!(e instanceof NA))return Te();t={verify:Sf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const d=h.transform;if(d instanceof yl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof vl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof El)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Dc)return{fieldPath:h.field.canonicalString(),increment:d.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:$A(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()}(n,e.precondition)),t}function GA(n,e){return n&&n.length>0?(Be(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?gr(o.updateTime):gr(l);return h.isEqual(Ie.min())&&(h=gr(l)),new kA(h,o.transformResults||[])}(t,e))):[]}function KA(n,e){return{documents:[E0(n,e.path)]}}function QA(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=E0(n,o);const l=function(_){if(_.length!==0)return I0(Xn.create(_,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(_){if(_.length!==0)return _.map(E=>function(w){return{field:Po(w.field),direction:JA(w.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const d=Tf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ct:t,parent:o}}function XA(n){let e=qA(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Be(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(I){const w=T0(I);return w instanceof Xn&&Jv(w)?w.getFilters():[w]}(t.where));let h=[];t.orderBy&&(h=function(I){return I.map(w=>function(b){return new Nc(xo(b.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(I){let w;return w=typeof I=="object"?I.value:I,Gc(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(I){const w=!!I.before,P=I.values||[];return new xc(P,w)}(t.startAt));let _=null;return t.endAt&&(_=function(I){const w=!I.before,P=I.values||[];return new xc(P,w)}(t.endAt)),pA(e,o,h,l,d,"F",p,_)}function YA(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function T0(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=xo(t.unaryFilter.field);return pt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=xo(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=xo(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=xo(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return pt.create(xo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Xn.create(t.compositeFilter.filters.map(i=>T0(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function JA(n){return UA[n]}function ZA(n){return jA[n]}function ek(n){return BA[n]}function Po(n){return{fieldPath:n.canonicalString()}}function xo(n){return bt.fromServerFormat(n.fieldPath)}function I0(n){return n instanceof pt?function(t){if(t.op==="=="){if(Q_(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NAN"}};if(K_(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Q_(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NAN"}};if(K_(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Po(t.field),op:ZA(t.op),value:t.value}}}(n):n instanceof Xn?function(t){const i=t.getFilters().map(o=>I0(o));return i.length===1?i[0]:{compositeFilter:{op:ek(t.op),filters:i}}}(n):Te()}function tk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function S0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,i,o,l=Ie.min(),h=Ie.min(),d=Vt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.ht=e}}function rk(n){const e=XA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.ln=new sk}addToCollectionParentIndex(e,t){return this.ln.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Li.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Li.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class sk{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new wt(Ye.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new wt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(41943040,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Bo(0)}static Qn(){return new Bo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy([n,e],[t,i]){const o=Oe(n,t);return o===0?Oe(e,i):o}class ok{constructor(e){this.Gn=e,this.buffer=new wt(cy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();cy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ak{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ue("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qo(t)?ue("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ko(t)}await this.Yn(3e5)})}}class lk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Wc.oe);const i=new ok(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(uy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,h,d,p,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o))).next(I=>(i=I,d=Date.now(),this.removeTargets(e,i,t))).next(I=>(l=I,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(I=>(_=Date.now(),Ao()<=xe.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(d-h)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${I} documents in `+(_-p)+`ms
Total Duration: ${_-E}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I})))}}function uk(n,e){return new lk(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.changes=new Ds(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&ll(i.mutation,o,yn.empty(),Et.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ne()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ne()){const o=ys();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=tl();return l.forEach((d,p)=>{h=h.insert(d,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=ys();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ne()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,d)=>{t.set(h,d)})})}computeViews(e,t,i,o){let l=Qr();const h=al(),d=function(){return al()}();return t.forEach((p,_)=>{const E=i.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Bi)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),ll(E.mutation,_,E.mutation.getFieldMask(),Et.now())):h.set(_.key,yn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((_,E)=>h.set(_,E)),t.forEach((_,E)=>{var I;return d.set(_,new hk(E,(I=h.get(_))!==null&&I!==void 0?I:null))}),d))}recalculateAndSaveOverlays(e,t){const i=al();let o=new rt((h,d)=>h-d),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const d of h)d.keys().forEach(p=>{const _=t.get(p);if(_===null)return;let E=i.get(p)||yn.empty();E=d.applyToLocalView(_,E),i.set(p,E);const I=(o.get(d.batchId)||Ne()).add(p);o=o.insert(d.batchId,I)})}).next(()=>{const h=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),_=p.key,E=p.value,I=a0();E.forEach(w=>{if(!l.has(w)){const P=f0(t.get(w),i.get(w));P!==null&&I.set(w,P),l=l.add(w)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,I))}return K.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return ge.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):n0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(ys());let d=-1,p=l;return h.next(_=>K.forEach(_,(E,I)=>(d<I.largestBatchId&&(d=I.largestBatchId),l.get(E)?K.resolve():this.remoteDocumentCache.getEntry(e,E).next(w=>{p=p.insert(E,w)}))).next(()=>this.populateOverlays(e,_,l)).next(()=>this.computeViews(e,p,_,Ne())).next(E=>({batchId:d,changes:o0(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(i=>{let o=tl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=tl();return this.indexManager.getCollectionParents(e,l).next(d=>K.forEach(d,p=>{const _=function(I,w){return new xl(w,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next(E=>{E.forEach((I,w)=>{h=h.insert(I,w)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((p,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,qt.newInvalidDocument(E)))});let d=tl();return h.forEach((p,_)=>{const E=l.get(p);E!==void 0&&ll(E.mutation,_,yn.empty(),Et.now()),Xc(t,_)&&(d=d.insert(p,_))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return K.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:gr(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:rk(o.bundledQuery),readTime:gr(o.readTime)}}(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.overlays=new rt(ge.comparator),this.Er=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ys();return K.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=ys(),l=t.length+1,h=new ge(t.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const p=d.getNext().value,_=p.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new rt((_,E)=>_-E);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let E=l.get(_.largestBatchId);E===null&&(E=ys(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const d=ys(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((_,E)=>d.set(_,E)),!(d.size()>=o)););return K.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new OA(t,i));let l=this.Er.get(t);l===void 0&&(l=Ne(),this.Er.set(t,l)),this.Er.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.dr=new wt(kt.Ar),this.Rr=new wt(kt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new kt(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new kt(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new ge(new Ye([])),i=new kt(t,e),o=new kt(t,e+1),l=[];return this.Rr.forEachInRange([i,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ge(new Ye([])),i=new kt(t,e),o=new kt(t,e+1);let l=Ne();return this.Rr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new kt(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class kt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ge.comparator(e.key,t.key)||Oe(e.br,t.br)}static Vr(e,t){return Oe(e.br,t.br)||ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new wt(kt.Ar)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new DA(l,t,i,o);this.mutationQueue.push(h);for(const d of o)this.vr=this.vr.add(new kt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new kt(t,0),o=new kt(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],h=>{const d=this.Cr(h.br);l.push(d)}),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new wt(Oe);return t.forEach(o=>{const l=new kt(o,0),h=new kt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],d=>{i=i.add(d.br)})}),K.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ge.isDocumentKey(l)||(l=l.child(""));const h=new kt(new ge(l),0);let d=new wt(Oe);return this.vr.forEachWhile(p=>{const _=p.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(d=d.add(p.br)),!0)},h),K.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return K.forEach(t.mutations,o=>{const l=new kt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new kt(t,0),o=this.vr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.Nr=e,this.docs=function(){return new rt(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():qt.newInvalidDocument(t))}getEntries(e,t){let i=Qr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():qt.newInvalidDocument(o))}),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Qr();const h=t.path,d=new ge(h.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:_,value:{document:E}}=p.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||GC(WC(E),i)<=0||(o.has(E.key)||Xc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Lr(e,t){return K.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new yk(this)}getSize(e){return K.resolve(this.size)}}class yk extends ck{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),K.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.persistence=e,this.Br=new Ds(t=>ip(t),sp),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.kr=0,this.qr=new dp,this.targetCount=0,this.Qr=Bo.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),K.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Bo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Un(t),K.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Br.forEach((h,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),K.waitFor(l).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Wc(0),this.Ur=!1,this.Ur=!0,this.Wr=new mk,this.referenceDelegate=e(this),this.Gr=new vk(this),this.indexManager=new ik,this.remoteDocumentCache=function(o){return new _k(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new nk(t),this.jr=new fk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new gk(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ue("MemoryPersistence","Starting transaction:",e);const o=new Ek(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return K.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class Ek extends QC{constructor(e){super(),this.currentSequenceNumber=e}}class fp{constructor(e){this.persistence=e,this.Zr=new dp,this.Xr=null}static ei(e){return new fp(e)}get ti(){if(this.Xr)return this.Xr;throw Te()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),K.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ti,i=>{const o=ge.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ie.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return K.or([()=>K.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Lc{constructor(e,t){this.persistence=e,this.ri=new Ds(i=>JC(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=uk(this,t)}static ei(e,t){return new Lc(e,t)}Hr(){}Jr(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return K.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?K.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(d=>{d||(i++,l.removeEntry(h,Ie.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=mc(e.data.value)),t}ir(e,t,i){return K.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Ne(),o=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new pp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return o1()?8:XC(Ht())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new wk;return this.ts(e,t,h).next(d=>{if(l.result=d,this.Hi)return this.ns(e,t,h,d.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(Ao()<=xe.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",ko(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),K.resolve()):(Ao()<=xe.DEBUG&&ue("QueryEngine","Query:",ko(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(Ao()<=xe.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",ko(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mr(t))):K.resolve())}Xi(e,t){if(Z_(t))return K.resolve(null);let i=mr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=wf(t,null,"F"),i=mr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=Ne(...l);return this.Zi.getDocuments(e,h).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const _=this.rs(t,d);return this.ss(t,_,h,p.readTime)?this.Xi(e,wf(t,null,"F")):this.os(e,_,t,p)}))})))}es(e,t,i,o){return Z_(t)||o.isEqual(Ie.min())?K.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const h=this.rs(t,l);return this.ss(t,h,i,o)?K.resolve(null):(Ao()<=xe.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ko(t)),this.os(e,h,t,HC(o,-1)).next(d=>d))})}rs(e,t){let i=new wt(i0(e));return t.forEach((o,l)=>{Xc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return Ao()<=xe.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",ko(t)),this.Zi.getDocumentsMatchingQuery(e,t,Li.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new rt(Oe),this.cs=new Ds(l=>ip(l),sp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dk(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Sk(n,e,t,i){return new Ik(n,e,t,i)}async function C0(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],d=[];let p=Ne();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)p=p.add(E.key)}for(const _ of l){d.push(_.batchId);for(const E of _.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(_=>({Ts:_,removedBatchIds:h,addedBatchIds:d}))})})}function Rk(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,_,E){const I=_.batch,w=I.keys();let P=K.resolve();return w.forEach(b=>{P=P.next(()=>E.getEntry(p,b)).next(U=>{const L=_.docVersions.get(b);Be(L!==null),U.version.compareTo(L)<0&&(I.applyToRemoteDocument(U,_),U.isValidDocument()&&(U.setReadTime(_.commitVersion),E.addEntry(U)))})}),P.next(()=>d.mutationQueue.removeMutationBatch(p,I))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Ne();for(let _=0;_<d.mutationResults.length;++_)d.mutationResults[_].transformResults.length>0&&(p=p.add(d.batch.mutations[_].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function A0(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function Ck(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((E,I)=>{const w=o.get(I);if(!w)return;d.push(t.Gr.removeMatchingKeys(l,E.removedDocuments,I).next(()=>t.Gr.addMatchingKeys(l,E.addedDocuments,I)));let P=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?P=P.withResumeToken(Vt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):E.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(E.resumeToken,i)),o=o.insert(I,P),function(U,L,W){return U.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(w,P,E)&&d.push(t.Gr.updateTargetData(l,P))});let p=Qr(),_=Ne();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),d.push(Ak(l,h,e.documentUpdates).next(E=>{p=E.Is,_=E.Es})),!i.isEqual(Ie.min())){const E=t.Gr.getLastRemoteSnapshotVersion(l).next(I=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(E)}return K.waitFor(d).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,_)).next(()=>p)}).then(l=>(t.us=o,l))}function Ak(n,e,t){let i=Ne(),o=Ne();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=Qr();return t.forEach((d,p)=>{const _=l.get(d);p.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),h=h.insert(d,p)):!_.isValidDocument()||p.version.compareTo(_.version)>0||p.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(p),h=h.insert(d,p)):ue("LocalStore","Ignoring outdated watch update for ",d,". Current version:",_.version," Watch version:",p.version)}),{Is:h,Es:o}})}function kk(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Pk(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,K.resolve(o)):t.Gr.allocateTargetId(i).next(h=>(o=new Ai(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function Cf(n,e,t){const i=Se(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Qo(h))throw h;ue("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function hy(n,e,t){const i=Se(n);let o=Ie.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",h=>function(p,_,E){const I=Se(p),w=I.cs.get(E);return w!==void 0?K.resolve(I.us.get(w)):I.Gr.getTargetData(_,E)}(i,h,mr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(h,d.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?l:Ne())).next(d=>(xk(i,gA(e),d),{documents:d,ds:l})))}function xk(n,e,t){let i=n.ls.get(e)||Ie.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class dy{constructor(){this.activeTargetIds=TA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Nk{constructor(){this._o=new dy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new dy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ue("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ue("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic=null;function Jd(){return ic===null?ic=function(){return 268435456+Math.round(2147483648*Math.random())}():ic++,"0x"+ic.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="WebChannelConnection";class bk extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,h){const d=Jd(),p=this.No(t,i.toUriEncodedString());ue("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const _={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(_,l,h),this.Bo(t,p,_,o).then(E=>(ue("RestConnection",`Received RPC '${t}' ${d}: `,E),E),E=>{throw Mo("RestConnection",`RPC '${t}' ${d} failed with error: `,E,"url: ",p,"request:",o),E})}ko(t,i,o,l,h,d){return this.Oo(t,i,o,l,h)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Go}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,i){const o=Ok[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const l=Jd();return new Promise((h,d)=>{const p=new jv;p.setWithCredentials(!0),p.listenOnce(Bv.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case pc.NO_ERROR:const E=p.getResponseJson();ue(zt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case pc.TIMEOUT:ue(zt,`RPC '${e}' ${l} timed out`),d(new he(X.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const I=p.getStatus();if(ue(zt,`RPC '${e}' ${l} failed with status:`,I,"response text:",p.getResponseText()),I>0){let w=p.getResponseJson();Array.isArray(w)&&(w=w[0]);const P=w==null?void 0:w.error;if(P&&P.status&&P.message){const b=function(L){const W=L.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(W)>=0?W:X.UNKNOWN}(P.status);d(new he(b,P.message))}else d(new he(X.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new he(X.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ue(zt,`RPC '${e}' ${l} completed.`)}});const _=JSON.stringify(o);ue(zt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",_,i,15)})}qo(e,t,i){const o=Jd(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=qv(),d=$v(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(p.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Lo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");ue(zt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const I=h.createWebChannel(E,p);let w=!1,P=!1;const b=new Lk({Eo:L=>{P?ue(zt,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(w||(ue(zt,`Opening RPC '${e}' stream ${o} transport.`),I.open(),w=!0),ue(zt,`RPC '${e}' stream ${o} sending:`,L),I.send(L))},Ao:()=>I.close()}),U=(L,W,G)=>{L.listen(W,ee=>{try{G(ee)}catch(ie){setTimeout(()=>{throw ie},0)}})};return U(I,el.EventType.OPEN,()=>{P||(ue(zt,`RPC '${e}' stream ${o} transport opened.`),b.So())}),U(I,el.EventType.CLOSE,()=>{P||(P=!0,ue(zt,`RPC '${e}' stream ${o} transport closed`),b.Do())}),U(I,el.EventType.ERROR,L=>{P||(P=!0,Mo(zt,`RPC '${e}' stream ${o} transport errored:`,L),b.Do(new he(X.UNAVAILABLE,"The operation could not be completed")))}),U(I,el.EventType.MESSAGE,L=>{var W;if(!P){const G=L.data[0];Be(!!G);const ee=G,ie=(ee==null?void 0:ee.error)||((W=ee[0])===null||W===void 0?void 0:W.error);if(ie){ue(zt,`RPC '${e}' stream ${o} received error:`,ie);const ne=ie.status;let ae=function(A){const N=ft[A];if(N!==void 0)return m0(N)}(ne),x=ie.message;ae===void 0&&(ae=X.INTERNAL,x="Unknown error status: "+ne+" with message "+ie.message),P=!0,b.Do(new he(ae,x)),I.close()}else ue(zt,`RPC '${e}' stream ${o} received:`,G),b.vo(G)}}),U(d,zv.STAT_EVENT,L=>{L.stat===mf.PROXY?ue(zt,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===mf.NOPROXY&&ue(zt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{b.bo()},0),b}}function Zd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(n){return new zA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,t,i,o,l,h,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new k0(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(Kr(t.toString()),Kr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new he(X.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ue("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ue("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vk extends P0{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=HA(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ie.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?gr(h.readTime):Ie.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=Rf(this.serializer),t.addTarget=function(l,h){let d;const p=h.target;if(d=vf(p)?{documents:KA(l,p)}:{query:QA(l,p).ct},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=y0(l,h.resumeToken);const _=Tf(l,h.expectedCount);_!==null&&(d.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ie.min())>0){d.readTime=Oc(l,h.snapshotVersion.toTimestamp());const _=Tf(l,h.expectedCount);_!==null&&(d.expectedCount=_)}return d}(this.serializer,e);const i=YA(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=Rf(this.serializer),t.removeTarget=e,this.c_(t)}}class Mk extends P0{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=GA(e.writeResults,e.commitTime),i=gr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=Rf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>WA(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new he(X.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,If(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new he(X.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.ko(e,If(t,i),o,h,d,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(X.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Uk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Kr(t),this.C_=!1):ue("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{i.enqueueAndForget(async()=>{Os(this)&&(ue("RemoteStore","Restarting streams for network reachability change."),await async function(p){const _=Se(p);_.k_.add(4),await Ol(_),_.K_.set("Unknown"),_.k_.delete(4),await th(_)}(this))})}),this.K_=new Uk(i,o)}}async function th(n){if(Os(n))for(const e of n.q_)await e(!0)}async function Ol(n){for(const e of n.q_)await e(!1)}function x0(n,e){const t=Se(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),yp(t)?_p(t):Xo(t).s_()&&gp(t,e))}function mp(n,e){const t=Se(n),i=Xo(t);t.B_.delete(e),i.s_()&&N0(t,e),t.B_.size===0&&(i.s_()?i.a_():Os(t)&&t.K_.set("Unknown"))}function gp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xo(n).V_(e)}function N0(n,e){n.U_.xe(e),Xo(n).m_(e)}function _p(n){n.U_=new FA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Xo(n).start(),n.K_.F_()}function yp(n){return Os(n)&&!Xo(n).i_()&&n.B_.size>0}function Os(n){return Se(n).k_.size===0}function D0(n){n.U_=void 0}async function Bk(n){n.K_.set("Online")}async function zk(n){n.B_.forEach((e,t)=>{gp(n,e)})}async function $k(n,e){D0(n),yp(n)?(n.K_.O_(e),_p(n)):n.K_.set("Unknown")}async function qk(n,e,t){if(n.K_.set("Online"),e instanceof _0&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const d of l.targetIds)o.B_.has(d)&&(await o.remoteSyncer.rejectListen(d,h),o.B_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){ue("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await bc(n,i)}else if(e instanceof yc?n.U_.$e(e):e instanceof g0?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ie.min()))try{const i=await A0(n.localStore);t.compareTo(i)>=0&&await function(l,h){const d=l.U_.it(h);return d.targetChanges.forEach((p,_)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.B_.get(_);E&&l.B_.set(_,E.withResumeToken(p.resumeToken,h))}}),d.targetMismatches.forEach((p,_)=>{const E=l.B_.get(p);if(!E)return;l.B_.set(p,E.withResumeToken(Vt.EMPTY_BYTE_STRING,E.snapshotVersion)),N0(l,p);const I=new Ai(E.target,p,_,E.sequenceNumber);gp(l,I)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){ue("RemoteStore","Failed to raise snapshot:",i),await bc(n,i)}}async function bc(n,e,t){if(!Qo(e))throw e;n.k_.add(1),await Ol(n),n.K_.set("Offline"),t||(t=()=>A0(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ue("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await th(n)})}function O0(n,e){return e().catch(t=>bc(n,t,e))}async function nh(n){const e=Se(n),t=Fi(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Hk(e);)try{const o=await kk(e.localStore,i);if(o===null){e.L_.length===0&&t.a_();break}i=o.batchId,Wk(e,o)}catch(o){await bc(e,o)}L0(e)&&b0(e)}function Hk(n){return Os(n)&&n.L_.length<10}function Wk(n,e){n.L_.push(e);const t=Fi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function L0(n){return Os(n)&&!Fi(n).i_()&&n.L_.length>0}function b0(n){Fi(n).start()}async function Gk(n){Fi(n).w_()}async function Kk(n){const e=Fi(n);for(const t of n.L_)e.g_(t.mutations)}async function Qk(n,e,t){const i=n.L_.shift(),o=up.from(i,e,t);await O0(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await nh(n)}async function Xk(n,e){e&&Fi(n).f_&&await async function(i,o){if(function(h){return bA(h)&&h!==X.ABORTED}(o.code)){const l=i.L_.shift();Fi(i).__(),await O0(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await nh(i)}}(n,e),L0(n)&&b0(n)}async function py(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ue("RemoteStore","RemoteStore received new credentials");const i=Os(t);t.k_.add(3),await Ol(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await th(t)}async function Yk(n,e){const t=Se(n);e?(t.k_.delete(2),await th(t)):e||(t.k_.add(2),await Ol(t),t.K_.set("Unknown"))}function Xo(n){return n.W_||(n.W_=function(t,i,o){const l=Se(t);return l.b_(),new Vk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:Bk.bind(null,n),mo:zk.bind(null,n),po:$k.bind(null,n),R_:qk.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),yp(n)?_p(n):n.K_.set("Unknown")):(await n.W_.stop(),D0(n))})),n.W_}function Fi(n){return n.G_||(n.G_=function(t,i,o){const l=Se(t);return l.b_(),new Mk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Gk.bind(null,n),po:Xk.bind(null,n),p_:Kk.bind(null,n),y_:Qk.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await nh(n)):(await n.G_.stop(),n.L_.length>0&&(ue("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,d=new vp(e,t,h,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ep(n,e){if(Kr("AsyncQueue",`${e}: ${n}`),Qo(n))return new he(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{static emptySet(e){return new bo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ge.comparator(t.key,i.key):(t,i)=>ge.comparator(t.key,i.key),this.keyedMap=tl(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new bo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.z_=new rt(ge.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class zo{constructor(e,t,i,o,l,h,d,p,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(d=>{h.push({type:0,doc:d})}),new zo(e,t,bo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Zk{constructor(){this.queries=gy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=gy(),l.forEach((h,d)=>{for(const p of d.J_)p.onError(i)})})(this,new he(X.ABORTED,"Firestore shutting down"))}}function gy(){return new Ds(n=>r0(n),Qc)}async function V0(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new Jk,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const d=Ep(h,`Initialization of query '${ko(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&wp(t)}async function M0(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function eP(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const d of h.J_)d.ta(o)&&(i=!0);h.H_=o}}i&&wp(t)}function tP(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function wp(n){n.X_.forEach(e=>{e.next()})}var Af,_y;(_y=Af||(Af={})).na="default",_y.Cache="cache";class F0{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new zo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Af.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.key=e}}class j0{constructor(e){this.key=e}}class nP{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ne(),this.mutatedKeys=Ne(),this.Va=i0(e),this.ma=new bo(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new my,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,I)=>{const w=o.get(E),P=Xc(this.query,I)?I:null,b=!!w&&this.mutatedKeys.has(w.key),U=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let L=!1;w&&P?w.data.isEqual(P.data)?b!==U&&(i.track({type:3,doc:P}),L=!0):this.ya(w,P)||(i.track({type:2,doc:P}),L=!0,(p&&this.Va(P,p)>0||_&&this.Va(P,_)<0)&&(d=!0)):!w&&P?(i.track({type:0,doc:P}),L=!0):w&&!P&&(i.track({type:1,doc:w}),L=!0,(p||_)&&(d=!0)),L&&(P?(h=h.add(P),l=U?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{ma:h,pa:i,ss:d,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((E,I)=>function(P,b){const U=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return U(P)-U(b)}(E.type,I.type)||this.Va(E.doc,I.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,_=p!==this.Aa;return this.Aa=p,h.length!==0||_?{snapshot:new zo(this.query,e.ma,l,h,e.mutatedKeys,p===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new my,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ne(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new j0(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new U0(i))}),t}va(e){this.da=e.ds,this.Ra=Ne();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return zo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class rP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class iP{constructor(e){this.key=e,this.Fa=!1}}class sP{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Ds(d=>r0(d),Qc),this.Oa=new Map,this.Na=new Set,this.La=new rt(ge.comparator),this.Ba=new Map,this.ka=new dp,this.qa={},this.Qa=new Map,this.Ka=Bo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function oP(n,e,t=!0){const i=W0(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await B0(i,e,t,!0),o}async function aP(n,e){const t=W0(n);await B0(t,e,!0,!1)}async function B0(n,e,t,i){const o=await Pk(n.localStore,mr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await lP(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&x0(n.remoteStore,o),d}async function lP(n,e,t,i,o){n.Ua=(I,w,P)=>async function(U,L,W,G){let ee=L.view.ga(W);ee.ss&&(ee=await hy(U.localStore,L.query,!1).then(({documents:x})=>L.view.ga(x,ee)));const ie=G&&G.targetChanges.get(L.targetId),ne=G&&G.targetMismatches.get(L.targetId)!=null,ae=L.view.applyChanges(ee,U.isPrimaryClient,ie,ne);return vy(U,L.targetId,ae.ba),ae.snapshot}(n,I,w,P);const l=await hy(n.localStore,e,!0),h=new nP(e,l.ds),d=h.ga(l.documents),p=Dl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),_=h.applyChanges(d,n.isPrimaryClient,p);vy(n,t,_.ba);const E=new rP(e,t,h);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),_.snapshot}async function uP(n,e,t){const i=Se(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(h=>!Qc(h,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Cf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&mp(i.remoteStore,o.targetId),kf(i,o.targetId)}).catch(Ko)):(kf(i,o.targetId),await Cf(i.localStore,o.targetId,!0))}async function cP(n,e){const t=Se(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),mp(t.remoteStore,i.targetId))}async function hP(n,e,t){const i=yP(n);try{const o=await function(h,d){const p=Se(h),_=Et.now(),E=d.reduce((P,b)=>P.add(b.key),Ne());let I,w;return p.persistence.runTransaction("Locally write mutations","readwrite",P=>{let b=Qr(),U=Ne();return p.hs.getEntries(P,E).next(L=>{b=L,b.forEach((W,G)=>{G.isValidDocument()||(U=U.add(W))})}).next(()=>p.localDocuments.getOverlayedDocuments(P,b)).next(L=>{I=L;const W=[];for(const G of d){const ee=xA(G,I.get(G.key).overlayedDocument);ee!=null&&W.push(new Bi(G.key,ee,Qv(ee.value.mapValue),Qn.exists(!0)))}return p.mutationQueue.addMutationBatch(P,_,W,d)}).next(L=>{w=L;const W=L.applyToLocalDocumentSet(I,U);return p.documentOverlayCache.saveOverlays(P,L.batchId,W)})}).then(()=>({batchId:w.batchId,changes:o0(I)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,d,p){let _=h.qa[h.currentUser.toKey()];_||(_=new rt(Oe)),_=_.insert(d,p),h.qa[h.currentUser.toKey()]=_}(i,o.batchId,t),await Ll(i,o.changes),await nh(i.remoteStore)}catch(o){const l=Ep(o,"Failed to persist write");t.reject(l)}}async function z0(n,e){const t=Se(n);try{const i=await Ck(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ba.get(l);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Be(h.Fa):o.removedDocuments.size>0&&(Be(h.Fa),h.Fa=!1))}),await Ll(t,i,e)}catch(i){await Ko(i)}}function yy(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,h)=>{const d=h.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(h,d){const p=Se(h);p.onlineState=d;let _=!1;p.queries.forEach((E,I)=>{for(const w of I.J_)w.ea(d)&&(_=!0)}),_&&wp(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function dP(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),l=o&&o.key;if(l){let h=new rt(ge.comparator);h=h.insert(l,qt.newNoDocument(l,Ie.min()));const d=Ne().add(l),p=new Zc(Ie.min(),new Map,new rt(Oe),h,d);await z0(i,p),i.La=i.La.remove(l),i.Ba.delete(e),Tp(i)}else await Cf(i.localStore,e,!1).then(()=>kf(i,e,t)).catch(Ko)}async function fP(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await Rk(t.localStore,e);q0(t,i,null),$0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Ll(t,o)}catch(o){await Ko(o)}}async function pP(n,e,t){const i=Se(n);try{const o=await function(h,d){const p=Se(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let E;return p.mutationQueue.lookupMutationBatch(_,d).next(I=>(Be(I!==null),E=I.keys(),p.mutationQueue.removeMutationBatch(_,I))).next(()=>p.mutationQueue.performConsistencyCheck(_)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(_,E,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E)).next(()=>p.localDocuments.getDocuments(_,E))})}(i.localStore,e);q0(i,e,t),$0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Ll(i,o)}catch(o){await Ko(o)}}function $0(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function q0(n,e,t){const i=Se(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function kf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||H0(n,i)})}function H0(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(mp(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Tp(n))}function vy(n,e,t){for(const i of t)i instanceof U0?(n.ka.addReference(i.key,e),mP(n,i)):i instanceof j0?(ue("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||H0(n,i.key)):Te()}function mP(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(ue("SyncEngine","New document in limbo: "+t),n.Na.add(i),Tp(n))}function Tp(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ge(Ye.fromString(e)),i=n.Ka.next();n.Ba.set(i,new iP(t)),n.La=n.La.insert(t,i),x0(n.remoteStore,new Ai(mr(op(t.path)),i,"TargetPurposeLimboResolution",Wc.oe))}}async function Ll(n,e,t){const i=Se(n),o=[],l=[],h=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{h.push(i.Ua(p,e,t).then(_=>{var E;if((_||t)&&i.isPrimaryClient){const I=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,I?"current":"not-current")}if(_){o.push(_);const I=pp.zi(p.targetId,_);l.push(I)}}))}),await Promise.all(h),i.Ma.R_(o),await async function(p,_){const E=Se(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>K.forEach(_,w=>K.forEach(w.Wi,P=>E.persistence.referenceDelegate.addReference(I,w.targetId,P)).next(()=>K.forEach(w.Gi,P=>E.persistence.referenceDelegate.removeReference(I,w.targetId,P)))))}catch(I){if(!Qo(I))throw I;ue("LocalStore","Failed to update sequence numbers: "+I)}for(const I of _){const w=I.targetId;if(!I.fromCache){const P=E.us.get(w),b=P.snapshotVersion,U=P.withLastLimboFreeSnapshotVersion(b);E.us=E.us.insert(w,U)}}}(i.localStore,l))}async function gP(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ue("SyncEngine","User change. New user:",e.toKey());const i=await C0(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(d=>{d.forEach(p=>{p.reject(new he(X.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ll(t,i.Ts)}}function _P(n,e){const t=Se(n),i=t.Ba.get(e);if(i&&i.Fa)return Ne().add(i.key);{let o=Ne();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const d=t.xa.get(h);o=o.unionWith(d.view.fa)}return o}}function W0(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=z0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_P.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dP.bind(null,e),e.Ma.R_=eP.bind(null,e.eventManager),e.Ma.Wa=tP.bind(null,e.eventManager),e}function yP(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pP.bind(null,e),e}class Vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=eh(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Sk(this.persistence,new Tk,e.initialUser,this.serializer)}ja(e){return new R0(fp.ei,this.serializer)}za(e){return new Nk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vc.provider={build:()=>new Vc};class vP extends Vc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Be(this.persistence.referenceDelegate instanceof Lc);const i=this.persistence.referenceDelegate.garbageCollector;return new ak(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new R0(i=>Lc.ei(i,t),this.serializer)}}class Pf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>yy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=gP.bind(null,this.syncEngine),await Yk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Zk}()}createDatastore(e){const t=eh(e.databaseInfo.databaseId),i=function(l){return new bk(l)}(e.databaseInfo);return function(l,h,d,p){return new Fk(l,h,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,d){return new jk(i,o,l,h,d)}(this.localStore,this.datastore,e.asyncQueue,t=>yy(this.syncEngine,t,0),function(){return fy.p()?new fy:new Dk}())}createSyncEngine(e,t){return function(o,l,h,d,p,_,E){const I=new sP(o,l,h,d,p,_);return E&&(I.$a=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);ue("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await Ol(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Pf.provider={build:()=>new Pf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Kr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=$t.UNAUTHENTICATED,this.clientId=Wv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{ue("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(ue("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Ep(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function ef(n,e){n.asyncQueue.verifyOperationInProgress(),ue("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await C0(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ey(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wP(n);ue("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>py(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>py(e.remoteStore,o)),n._onlineComponents=e}async function wP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue("FirestoreClient","Using user provided OfflineComponentProvider");try{await ef(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Mo("Error using user provided cache. Falling back to memory cache: "+t),await ef(n,new Vc)}}else ue("FirestoreClient","Using default OfflineComponentProvider"),await ef(n,new vP(void 0));return n._offlineComponents}async function K0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue("FirestoreClient","Using user provided OnlineComponentProvider"),await Ey(n,n._uninitializedComponentsProvider._online)):(ue("FirestoreClient","Using default OnlineComponentProvider"),await Ey(n,new Pf))),n._onlineComponents}function TP(n){return K0(n).then(e=>e.syncEngine)}async function Q0(n){const e=await K0(n),t=e.eventManager;return t.onListen=oP.bind(null,e.syncEngine),t.onUnlisten=uP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cP.bind(null,e.syncEngine),t}function IP(n,e,t={}){const i=new qr;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,d,p,_){const E=new G0({next:w=>{E.eu(),h.enqueueAndForget(()=>M0(l,I));const P=w.docs.has(d);!P&&w.fromCache?_.reject(new he(X.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&w.fromCache&&p&&p.source==="server"?_.reject(new he(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(w)},error:w=>_.reject(w)}),I=new F0(op(d.path),E,{includeMetadataChanges:!0,ua:!0});return V0(l,I)}(await Q0(n),n.asyncQueue,e,t,i)),i.promise}function SP(n,e,t={}){const i=new qr;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,d,p,_){const E=new G0({next:w=>{E.eu(),h.enqueueAndForget(()=>M0(l,I)),w.fromCache&&p.source==="server"?_.reject(new he(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(w)},error:w=>_.reject(w)}),I=new F0(d,E,{includeMetadataChanges:!0,ua:!0});return V0(l,I)}(await Q0(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(n,e,t){if(!t)throw new he(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function RP(n,e,t,i){if(e===!0&&i===!0)throw new he(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ty(n){if(!ge.isDocumentKey(n))throw new he(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Iy(n){if(ge.isDocumentKey(n))throw new he(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function rh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function Xr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new he(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=rh(n);throw new he(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new he(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new he(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new he(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new he(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new he(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ih{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sy(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new VC;switch(i.type){case"firstParty":return new jC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new he(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=wy.get(t);i&&(ue("ComponentProvider","Removing Datastore"),wy.delete(t),i.terminate())}(this),Promise.resolve()}}function CP(n,e,t,i={}){var o;const l=(n=Xr(n,ih))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=$t.MOCK_USER;else{d=tv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const _=i.mockUserToken.sub||i.mockUserToken.user_id;if(!_)throw new he(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new $t(_)}n._authCredentials=new MC(new Hv(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Yo(this.firestore,e,this._query)}}class ln{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ni(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ln(this.firestore,e,this._key)}}class Ni extends Yo{constructor(e,t,i){super(e,t,op(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ln(this.firestore,null,new ge(e))}withConverter(e){return new Ni(this.firestore,e,this._path)}}function Hr(n,e,...t){if(n=ct(n),Y0("collection","path",e),n instanceof ih){const i=Ye.fromString(e,...t);return Iy(i),new Ni(n,null,i)}{if(!(n instanceof ln||n instanceof Ni))throw new he(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return Iy(i),new Ni(n.firestore,null,i)}}function sh(n,e,...t){if(n=ct(n),arguments.length===1&&(e=Wv.newId()),Y0("doc","path",e),n instanceof ih){const i=Ye.fromString(e,...t);return Ty(i),new ln(n,null,new ge(i))}{if(!(n instanceof ln||n instanceof Ni))throw new he(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return Ty(i),new ln(n.firestore,n instanceof Ni?n.converter:null,new ge(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new k0(this,"async_queue_retry"),this.fu=()=>{const i=Zd();i&&ue("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Zd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Zd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new qr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Qo(e))throw e;ue("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(h){let d=h.message||"";return h.stack&&(d=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),d}(i);throw Kr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=vp.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&Te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Jo extends ih{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Ry,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ry(e),this._firestoreClient=void 0,await e}}}function Zo(n,e){const t=typeof n=="object"?n:zf(),i=typeof n=="string"?n:"(default)",o=Bc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Jy("firestore");l&&CP(o,...l)}return o}function Ip(n){if(n._terminated)throw new he(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||AP(n),n._firestoreClient}function AP(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,_,E){return new tA(d,p,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,X0(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new EP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $o(Vt.fromBase64String(e))}catch(t){throw new he(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $o(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=/^__.*__$/;class PP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Bi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nl(e,this.data,t,this.fieldTransforms)}}class J0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Bi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Z0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Cp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Cp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Lu(e),o}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Mc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Z0(this.Mu)&&kP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class xP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||eh(e)}$u(e,t,i,o=!1){return new Cp({Mu:e,methodName:t,Ku:i,path:bt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ap(n){const e=n._freezeSettings(),t=eh(n._databaseId);return new xP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function NP(n,e,t,i,o,l={}){const h=n.$u(l.merge||l.mergeFields?2:0,e,t,o);Pp("Data must be an object, but it was:",h,i);const d=eE(i,h);let p,_;if(l.merge)p=new yn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const I of l.mergeFields){const w=xf(e,I,t);if(!h.contains(w))throw new he(X.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);nE(E,w)||E.push(w)}p=new yn(E),_=h.fieldTransforms.filter(I=>p.covers(I.field))}else p=null,_=h.fieldTransforms;return new PP(new an(d),p,_)}class lh extends ah{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lh}}class kp extends ah{_toFieldTransform(e){return new CA(e.path,new yl)}isEqual(e){return e instanceof kp}}function DP(n,e,t,i){const o=n.$u(1,e,t);Pp("Data must be an object, but it was:",o,i);const l=[],h=an.empty();ji(i,(p,_)=>{const E=xp(e,p,t);_=ct(_);const I=o.Bu(E);if(_ instanceof lh)l.push(E);else{const w=bl(_,I);w!=null&&(l.push(E),h.set(E,w))}});const d=new yn(l);return new J0(h,d,o.fieldTransforms)}function OP(n,e,t,i,o,l){const h=n.$u(1,e,t),d=[xf(e,i,t)],p=[o];if(l.length%2!=0)throw new he(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(xf(e,l[w])),p.push(l[w+1]);const _=[],E=an.empty();for(let w=d.length-1;w>=0;--w)if(!nE(_,d[w])){const P=d[w];let b=p[w];b=ct(b);const U=h.Bu(P);if(b instanceof lh)_.push(P);else{const L=bl(b,U);L!=null&&(_.push(P),E.set(P,L))}}const I=new yn(_);return new J0(E,I,h.fieldTransforms)}function LP(n,e,t,i=!1){return bl(t,n.$u(i?4:3,e))}function bl(n,e){if(tE(n=ct(n)))return Pp("Unsupported field value:",e,n),eE(n,e);if(n instanceof ah)return function(i,o){if(!Z0(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const d of i){let p=bl(d,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=ct(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return IA(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Et.fromDate(i);return{timestampValue:Oc(o.serializer,l)}}if(i instanceof Et){const l=new Et(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Oc(o.serializer,l)}}if(i instanceof Sp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof $o)return{bytesValue:y0(o.serializer,i._byteString)};if(i instanceof ln){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:hp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Rp)return function(h,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return ap(d.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${rh(i)}`)}(n,e)}function eE(n,e){const t={};return Gv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(n,(i,o)=>{const l=bl(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function tE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Et||n instanceof Sp||n instanceof $o||n instanceof ln||n instanceof ah||n instanceof Rp)}function Pp(n,e,t){if(!tE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=rh(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function xf(n,e,t){if((e=ct(e))instanceof oh)return e._internalPath;if(typeof e=="string")return xp(n,e);throw Mc("Field path arguments must be of type string or ",n,!1,void 0,t)}const bP=new RegExp("[~\\*/\\[\\]]");function xp(n,e,t){if(e.search(bP)>=0)throw Mc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new oh(...e.split("."))._internalPath}catch{throw Mc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Mc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new he(X.INVALID_ARGUMENT,d+n+p)}function nE(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Np("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VP extends rE{data(){return super.data()}}function Np(n,e){return typeof e=="string"?xp(n,e):e instanceof oh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new he(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dp{}class FP extends Dp{}function Es(n,e,...t){let i=[];e instanceof Dp&&i.push(e),i=i.concat(t),function(l){const h=l.filter(p=>p instanceof Op).length,d=l.filter(p=>p instanceof uh).length;if(h>1||h>0&&d>0)throw new he(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class uh extends FP{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new uh(e,t,i)}_apply(e){const t=this._parse(e);return iE(e._query,t),new Yo(e.firestore,e.converter,Ef(e._query,t))}_parse(e){const t=Ap(e.firestore);return function(l,h,d,p,_,E,I){let w;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new he(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){Ay(I,E);const P=[];for(const b of I)P.push(Cy(p,l,b));w={arrayValue:{values:P}}}else w=Cy(p,l,I)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||Ay(I,E),w=LP(d,h,I,E==="in"||E==="not-in");return pt.create(_,E,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ws(n,e,t){const i=e,o=Np("where",n);return uh._create(o,i,t)}class Op extends Dp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Op(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Xn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const d=l.getFlattenedFilters();for(const p of d)iE(h,p),h=Ef(h,p)}(e._query,t),new Yo(e.firestore,e.converter,Ef(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Cy(n,e,t){if(typeof(t=ct(t))=="string"){if(t==="")throw new he(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!n0(e)&&t.indexOf("/")!==-1)throw new he(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ye.fromString(t));if(!ge.isDocumentKey(i))throw new he(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return G_(n,new ge(i))}if(t instanceof ln)return G_(n,t._key);throw new he(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rh(t)}.`)}function Ay(n,e){if(!Array.isArray(n)||n.length===0)throw new he(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iE(n,e){const t=function(o,l){for(const h of o)for(const d of h.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new he(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class UP{convertValue(e,t="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ji(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>ut(h.doubleValue));return new Rp(l)}convertGeoPoint(e){return new Sp(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Kc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ml(e));default:return null}}convertTimestamp(e){const t=bi(e);return new Et(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ye.fromString(e);Be(S0(i));const o=new gl(i.get(1),i.get(3)),l=new ge(i.popFirst(5));return o.isEqual(t)||Kr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sE extends rE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Np("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class vc extends sE{data(e={}){return super.data(e)}}class BP{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new rl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new vc(this._firestore,this._userDataWriter,i.key,i,new rl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(d=>{const p=new vc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new rl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new vc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new rl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return d.type!==0&&(_=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),E=h.indexOf(d.doc.key)),{type:zP(d.type),doc:p,oldIndex:_,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function zP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(n){n=Xr(n,ln);const e=Xr(n.firestore,Jo);return IP(Ip(e),n._key).then(t=>HP(e,n,t))}class aE extends UP{constructor(e){super(),this.firestore=e}convertBytes(e){return new $o(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ln(this.firestore,null,t)}}function Ts(n){n=Xr(n,Yo);const e=Xr(n.firestore,Jo),t=Ip(e),i=new aE(e);return MP(n._query),SP(t,n._query).then(o=>new BP(e,i,n,o))}function $P(n,e,t,...i){n=Xr(n,ln);const o=Xr(n.firestore,Jo),l=Ap(o);let h;return h=typeof(e=ct(e))=="string"||e instanceof oh?OP(l,"updateDoc",n._key,e,t,i):DP(l,"updateDoc",n._key,e),Lp(o,[h.toMutation(n._key,Qn.exists(!0))])}function qP(n){return Lp(Xr(n.firestore,Jo),[new lp(n._key,Qn.none())])}function lE(n,e){const t=Xr(n.firestore,Jo),i=sh(n),o=jP(n.converter,e);return Lp(t,[NP(Ap(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Qn.exists(!1))]).then(()=>i)}function Lp(n,e){return function(i,o){const l=new qr;return i.asyncQueue.enqueueAndForget(async()=>hP(await TP(i),o,l)),l.promise}(Ip(n),e)}function HP(n,e,t){const i=t.docs.get(e._key),o=new aE(n);return new sE(n,o,e._key,i,new rl(t.hasPendingWrites,t.fromCache),e.converter)}function WP(){return new kp("serverTimestamp")}(function(e,t=!0){(function(o){Go=o})(Ps),Ss(new Oi("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),d=new Jo(new FC(i.getProvider("auth-internal")),new zC(i.getProvider("app-check-internal")),function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new he(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gl(_.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),fr(B_,"4.7.5",e),fr(B_,"4.7.5","esm2017")})();const GP={apiKey:"AIzaSyC8tDVbDIrKuylsyF3rbDSSPlzsEHXqZIs",authDomain:"online-attendance-21f95.firebaseapp.com",databaseURL:"https://online-attendance-21f95-default-rtdb.firebaseio.com",projectId:"online-attendance-21f95",storageBucket:"online-attendance-21f95.appspot.com",messagingSenderId:"756223518392",appId:"1:756223518392:web:5e8d28c78f7eefb8be764d"};Cl(GP);const KP=()=>{const n=Tl(),[e,t]=$.useState(null),[i,o]=$.useState(null),[l,h]=$.useState(!1),d=ep(),p=Zo();$.useEffect(()=>{const U=d.onAuthStateChanged(async L=>{if(t(L),L){const W=L.email,G=await _(W);o(G)}});return()=>U()},[]);const _=async U=>{try{const L=Es(Hr(p,"RegisteredAdmin"),ws("email","==",U)),W=await Ts(L);if(!W.empty)return W.docs[0].data();const G=Es(Hr(p,"RegisteredTeacher"),ws("email","==",U)),ee=await Ts(G);if(!ee.empty)return ee.docs[0].data();const ie=Es(Hr(p,"RegisteredStudent"),ws("email","==",U)),ne=await Ts(ie);return ne.empty?null:ne.docs[0].data()}catch(L){return console.error("Error fetching user data:",L),null}},E=()=>{i&&(n("/dashboard/create-event",{state:{userData:i}}),h(!1))},I=()=>{h(!l)},w=["Alice Smith","Bob Johnson","Carol Williams","David Brown","Eve Davis"],P=["Smith","Johnson","Williams","Brown","Davis"],b=["Scanner-001","Scanner-002","Scanner-003"];return R.jsxs(R.Fragment,{children:[R.jsx("button",{className:Ce.hamburgerBtn,onClick:I,children:l?R.jsx(HI,{size:24}):R.jsx(zI,{size:24})}),R.jsxs("div",{className:`${Ce.sidebar} ${l?Ce.sidebarOpen:""}`,children:[R.jsx("div",{className:Ce.profileSection,children:e&&i&&R.jsxs(R.Fragment,{children:[R.jsx("div",{className:Ce.avatar,children:R.jsx("img",{src:e.photoURL,alt:"Profile"})}),R.jsxs("div",{className:Ce.userInfo,children:[R.jsx("h3",{children:i.name}),R.jsx("p",{children:e.email})]})]})}),R.jsx("nav",{className:Ce.navigation,children:R.jsxs("ul",{className:Ce.navList,children:[R.jsx("li",{className:Ce.navItem,children:R.jsxs(No,{to:"/dashboard",className:Ce.navLink,onClick:()=>h(!1),children:[R.jsx(jI,{size:20}),R.jsx("span",{children:"Dashboard"})]})}),R.jsx("li",{className:Ce.navItem,children:R.jsxs("div",{onClick:E,className:Ce.navLink,style:{cursor:"pointer"},children:[R.jsx(bI,{size:20}),R.jsx("span",{children:"Create Event"})]})}),R.jsxs(No,{to:"/dashboard/event-list",className:Ce.navLink,onClick:()=>h(!1),children:[R.jsx(FI,{size:20}),R.jsx("span",{children:"Event List"})]}),R.jsx("li",{className:Ce.navItem,children:R.jsxs("a",{href:"#",className:Ce.navLink,onClick:()=>h(!1),children:[R.jsx(LI,{size:20}),R.jsx("span",{children:"Archive"})]})}),R.jsxs("li",{className:Ce.navItem,children:[R.jsxs("a",{href:"#",className:Ce.navLink,onClick:()=>h(!1),children:[R.jsx($d,{size:20}),R.jsx("span",{children:"Students Registered"})]}),R.jsx("ul",{className:Ce.dropdown,children:w.map((U,L)=>R.jsx("li",{className:Ce.dropdownItem,children:U},L))})]}),R.jsxs("li",{className:Ce.navItem,children:[R.jsxs("a",{href:"#",className:Ce.navLink,onClick:()=>h(!1),children:[R.jsx($d,{size:20}),R.jsx("span",{children:"Teacher Registered"})]}),R.jsx("ul",{className:Ce.dropdown,children:P.map((U,L)=>R.jsx("li",{className:Ce.dropdownItem,children:U},L))})]}),R.jsx("li",{className:Ce.navItem,children:R.jsxs(No,{to:"/dashboard/student-registration",className:Ce.navLink,onClick:()=>h(!1),children:[R.jsx($d,{size:20}),R.jsx("span",{children:"Student Registration"})]})}),R.jsx("li",{className:Ce.navItem,children:R.jsxs(No,{to:"/dashboard/nfc-reader",className:Ce.navLink,onClick:()=>h(!1),children:[R.jsx(l_,{size:20}),R.jsx("span",{children:"NFC Reader"})]})}),R.jsxs("li",{className:Ce.navItem,children:[R.jsxs("a",{href:"#",className:Ce.navLink,onClick:()=>h(!1),children:[R.jsx(l_,{size:20}),R.jsx("span",{children:"ESP32 NFC Scanners"})]}),R.jsx("ul",{className:Ce.dropdown,children:b.map((U,L)=>R.jsx("li",{className:Ce.dropdownItem,children:U},L))})]}),R.jsx("li",{className:Ce.navItem,children:R.jsxs("a",{href:"#",className:Ce.navLink,onClick:()=>h(!1),children:[R.jsx(UI,{size:20}),R.jsx("span",{children:"File Manager"})]})})]})}),R.jsxs("button",{className:Ce.logoutBtn,children:[R.jsx(BI,{size:20}),R.jsx("span",{children:"Logout"})]})]}),l&&R.jsx("div",{className:Ce.overlay,onClick:I})]})};function QP(){const n=yr(),e=n.pathname==="/dashboard"||n.pathname==="/";return R.jsxs("div",{className:Ce.dashboardContainer,children:[R.jsx(KP,{}),R.jsx("main",{className:Ce.mainContent,children:e?R.jsxs("div",{className:Ce.welcomeContainer,children:[R.jsx("h1",{className:Ce.welcomeTitle,children:"Welcome to Your Dashboard"}),R.jsx("p",{className:Ce.welcomeText,children:"Select an option from the sidebar to get started"})]}):R.jsx(PT,{})})]})}const XP="_container_dpu0j_5",YP="_card_dpu0j_17",JP="_cardHeader_dpu0j_33",ZP="_cardTitle_dpu0j_45",ex="_form_dpu0j_59",tx="_formGrid_dpu0j_69",nx="_formGroup_dpu0j_93",rx="_label_dpu0j_105",ix="_input_dpu0j_117",sx="_select_dpu0j_119",ox="_button_dpu0j_161",ax="_tableContainer_dpu0j_207",lx="_table_dpu0j_207",ux="_status_dpu0j_265",cx="_statusPending_dpu0j_281",hx="_statusOngoing_dpu0j_291",dx="_statusCompleted_dpu0j_301",fx="_error_dpu0j_313",px="_inputError_dpu0j_325",Re={container:XP,card:YP,cardHeader:JP,cardTitle:ZP,form:ex,formGrid:tx,formGroup:nx,label:rx,input:ix,select:sx,button:ox,tableContainer:ax,table:lx,status:ux,statusPending:cx,statusOngoing:hx,statusCompleted:dx,error:fx,inputError:px},mx=()=>{const n=yr(),{userData:e}=n.state||{},t=Zo(),[i,o]=$.useState(""),[l,h]=$.useState("unlimited"),[d,p]=$.useState(""),[_,E]=$.useState(""),[I,w]=$.useState("event"),[P,b]=$.useState(""),[U,L]=$.useState("pending"),[W,G]=$.useState(""),[ee,ie]=$.useState(""),[ne,ae]=$.useState(""),[x,S]=$.useState(""),A=["ESP32-001","ESP32-002","ESP32-003"],N=async O=>{O.preventDefault();try{const k={eventName:i,entryLimit:l,maxEntries:l==="limited"?parseInt(d):null,locations:_,purpose:I,selectedEsp32:P,status:U,startDate:W,startTime:ee,endDate:ne,endTime:x,creatorNfcId:(e==null?void 0:e.currentnfcId)||null,createdAt:new Date().toISOString(),createdBy:(e==null?void 0:e.email)||null,name:(e==null?void 0:e.name)||null},qe=await lE(Hr(t,"PendingEvent"),k);await $P(qe,{docId:qe.id}),console.log("Event created with ID: ",qe.id),alert("Event created successfully!"),M()}catch(k){console.error("Error creating event: ",k),alert("Error creating event. Please try again.")}},M=()=>{o(""),h("unlimited"),p(""),E(""),w("event"),b(""),L("pending"),G(""),ie(""),ae(""),S("")};return R.jsx("div",{className:Re.container,children:R.jsxs("div",{className:Re.card,children:[R.jsx("div",{className:Re.cardHeader,children:R.jsx("h2",{className:Re.cardTitle,children:"Create New Event"})}),R.jsxs("form",{className:Re.form,onSubmit:N,children:[R.jsxs("div",{className:Re.formGrid,children:[R.jsxs("div",{className:Re.formGroup,children:[R.jsx("label",{className:Re.label,children:"Event Name"}),R.jsx("input",{type:"text",className:Re.input,value:i,onChange:O=>o(O.target.value),placeholder:"Enter event name"})]}),R.jsxs("div",{className:Re.formGroup,children:[R.jsx("label",{className:Re.label,children:"Entry Limit"}),R.jsxs("select",{className:Re.select,value:l,onChange:O=>h(O.target.value),children:[R.jsx("option",{value:"unlimited",children:"Unlimited"}),R.jsx("option",{value:"limited",children:"Limited"})]})]}),l==="limited"&&R.jsxs("div",{className:Re.formGroup,children:[R.jsx("label",{className:Re.label,children:"Maximum Entries"}),R.jsx("input",{type:"number",className:Re.input,value:d,onChange:O=>p(O.target.value),placeholder:"Enter maximum entries"})]}),R.jsxs("div",{className:Re.formGroup,children:[R.jsx("label",{className:Re.label,children:"Location"}),R.jsx("input",{type:"text",className:Re.input,value:_,onChange:O=>E(O.target.value),placeholder:"Enter location"})]}),R.jsxs("div",{className:Re.formGroup,children:[R.jsx("label",{className:Re.label,children:"Purpose"}),R.jsxs("select",{className:Re.select,value:I,onChange:O=>w(O.target.value),children:[R.jsx("option",{value:"event",children:"Event Attendance"}),R.jsx("option",{value:"membership",children:"Membership Attendance"}),R.jsx("option",{value:"room",children:"Room Attendance"})]})]}),R.jsxs("div",{className:Re.formGroup,children:[R.jsx("label",{className:Re.label,children:"ESP32 Device"}),R.jsx("select",{className:Re.select,value:P,onChange:O=>b(O.target.value),children:A.map(O=>R.jsx("option",{value:O,children:O},O))})]}),R.jsxs("div",{className:Re.formGroup,children:[R.jsx("label",{className:Re.label,children:"Status"}),R.jsxs("select",{className:Re.select,value:U,onChange:O=>L(O.target.value),children:[R.jsx("option",{value:"pending",children:"Pending"}),R.jsx("option",{value:"ongoing",children:"Ongoing"}),R.jsx("option",{value:"completed",children:"Completed"}),R.jsx("option",{value:"pause",children:"Pause"}),R.jsx("option",{value:"continued",children:"Continued"})]})]}),R.jsxs("div",{className:Re.formGroup,children:[R.jsx("label",{className:Re.label,children:"Start Date"}),R.jsx("input",{type:"date",className:Re.input,value:W,onChange:O=>G(O.target.value)})]}),R.jsxs("div",{className:Re.formGroup,children:[R.jsx("label",{className:Re.label,children:"Start Time"}),R.jsx("input",{type:"time",className:Re.input,value:ee,onChange:O=>ie(O.target.value)})]}),R.jsxs("div",{className:Re.formGroup,children:[R.jsx("label",{className:Re.label,children:"End Date"}),R.jsx("input",{type:"date",className:Re.input,value:ne,onChange:O=>ae(O.target.value)})]}),R.jsxs("div",{className:Re.formGroup,children:[R.jsx("label",{className:Re.label,children:"End Time"}),R.jsx("input",{type:"time",className:Re.input,value:x,onChange:O=>S(O.target.value)})]})]}),R.jsx("button",{type:"submit",className:Re.button,children:"Create Event"})]})]})})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="firebasestorage.googleapis.com",cE="storageBucket",gx=2*60*1e3,_x=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends vr{constructor(e,t,i=0){super(tf(e),`Firebase Storage: ${t} (${tf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var st;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(st||(st={}));function tf(n){return"storage/"+n}function bp(){const n="An unknown error occurred, please check the error payload for server response.";return new ot(st.UNKNOWN,n)}function yx(n){return new ot(st.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function vx(n){return new ot(st.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ex(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ot(st.UNAUTHENTICATED,n)}function wx(){return new ot(st.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Tx(n){return new ot(st.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Ix(){return new ot(st.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Sx(){return new ot(st.CANCELED,"User canceled the upload/download.")}function Rx(n){return new ot(st.INVALID_URL,"Invalid URL '"+n+"'.")}function Cx(n){return new ot(st.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Ax(){return new ot(st.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cE+"' property when initializing the app?")}function kx(){return new ot(st.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Px(){return new ot(st.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function xx(n){return new ot(st.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Nf(n){return new ot(st.INVALID_ARGUMENT,n)}function hE(){return new ot(st.APP_DELETED,"The Firebase app was deleted.")}function Nx(n){return new ot(st.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ul(n,e){return new ot(st.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ya(n){throw new ot(st.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=vn.makeFromUrl(e,t)}catch{return new vn(e,"")}if(i.path==="")return i;throw Cx(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ie){ie.path.charAt(ie.path.length-1)==="/"&&(ie.path_=ie.path_.slice(0,-1))}const h="(/(.*))?$",d=new RegExp("^gs://"+o+h,"i"),p={bucket:1,path:3};function _(ie){ie.path_=decodeURIComponent(ie.path)}const E="v[A-Za-z0-9_]+",I=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",P=new RegExp(`^https?://${I}/${E}/b/${o}/o${w}`,"i"),b={bucket:1,path:3},U=t===uE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",W=new RegExp(`^https?://${U}/${o}/${L}`,"i"),ee=[{regex:d,indices:p,postModify:l},{regex:P,indices:b,postModify:_},{regex:W,indices:{bucket:1,path:2},postModify:_}];for(let ie=0;ie<ee.length;ie++){const ne=ee[ie],ae=ne.regex.exec(e);if(ae){const x=ae[ne.indices.bucket];let S=ae[ne.indices.path];S||(S=""),i=new vn(x,S),ne.postModify(i);break}}if(i==null)throw Rx(e);return i}}class Dx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(n,e,t){let i=1,o=null,l=null,h=!1,d=0;function p(){return d===2}let _=!1;function E(...L){_||(_=!0,e.apply(null,L))}function I(L){o=setTimeout(()=>{o=null,n(P,p())},L)}function w(){l&&clearTimeout(l)}function P(L,...W){if(_){w();return}if(L){w(),E.call(null,L,...W);return}if(p()||h){w(),E.call(null,L,...W);return}i<64&&(i*=2);let ee;d===1?(d=2,ee=0):ee=(i+Math.random())*1e3,I(ee)}let b=!1;function U(L){b||(b=!0,w(),!_&&(o!==null?(L||(d=2),clearTimeout(o),I(0)):L||(d=1)))}return I(0),l=setTimeout(()=>{h=!0,U(!0)},t),U}function Lx(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(n){return n!==void 0}function Vx(n){return typeof n=="object"&&!Array.isArray(n)}function Vp(n){return typeof n=="string"||n instanceof String}function ky(n){return Mp()&&n instanceof Blob}function Mp(){return typeof Blob<"u"}function Py(n,e,t,i){if(i<e)throw Nf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Nf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function dE(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Is;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Is||(Is={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,t,i,o,l,h,d,p,_,E,I,w=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=d,this.errorCallback_=p,this.timeout_=_,this.progressCallback_=E,this.connectionFactory_=I,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,b)=>{this.resolve_=P,this.reject_=b,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new sc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=d=>{const p=d.loaded,_=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,_)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const d=l.getErrorCode()===Is.NO_ERROR,p=l.getStatus();if(!d||Mx(p,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===Is.ABORT;i(!1,new sc(!1,null,E));return}const _=this.successCodes_.indexOf(p)!==-1;i(!0,new sc(_,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());bx(p)?l(p):l()}catch(p){h(p)}else if(d!==null){const p=bp();p.serverResponse=d.getErrorText(),this.errorCallback_?h(this.errorCallback_(d,p)):h(p)}else if(o.canceled){const p=this.appDelete_?hE():Sx();h(p)}else{const p=Ix();h(p)}};this.canceled_?t(!1,new sc(!1,null,!0)):this.backoffId_=Ox(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Lx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class sc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Ux(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function jx(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Bx(n,e){e&&(n["X-Firebase-GMPID"]=e)}function zx(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function $x(n,e,t,i,o,l,h=!0){const d=dE(n.urlParams),p=n.url+d,_=Object.assign({},n.headers);return Bx(_,e),Ux(_,t),jx(_,l),zx(_,i),new Fx(p,n.method,_,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Hx(...n){const e=qx();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Mp())return new Blob(n);throw new ot(st.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Wx(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(n){if(typeof atob>"u")throw xx("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class nf{constructor(e,t){this.data=e,this.contentType=t||null}}function Kx(n,e){switch(n){case dr.RAW:return new nf(fE(e));case dr.BASE64:case dr.BASE64URL:return new nf(pE(n,e));case dr.DATA_URL:return new nf(Xx(e),Yx(e))}throw bp()}function fE(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=n.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function Qx(n){let e;try{e=decodeURIComponent(n)}catch{throw ul(dr.DATA_URL,"Malformed data URL.")}return fE(e)}function pE(n,e){switch(n){case dr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw ul(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case dr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw ul(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Gx(e)}catch(o){throw o.message.includes("polyfill")?o:ul(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class mE{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ul(dr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=Jx(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function Xx(n){const e=new mE(n);return e.base64?pE(dr.BASE64,e.rest):Qx(e.rest)}function Yx(n){return new mE(n).contentType}function Jx(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){let i=0,o="";ky(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(ky(this.data_)){const i=this.data_,o=Wx(i,e,t);return o===null?null:new Ci(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Ci(i,!0)}}static getBlob(...e){if(Mp()){const t=e.map(i=>i instanceof Ci?i.data_:i);return new Ci(Hx.apply(null,t))}else{const t=e.map(h=>Vp(h)?Kx(dr.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let d=0;d<h.length;d++)o[l++]=h[d]}),new Ci(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(n){let e;try{e=JSON.parse(n)}catch{return null}return Vx(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function eN(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function _E(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(n,e){return e}class Xt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||tN}}let oc=null;function nN(n){return!Vp(n)||n.length<2?n:_E(n)}function yE(){if(oc)return oc;const n=[];n.push(new Xt("bucket")),n.push(new Xt("generation")),n.push(new Xt("metageneration")),n.push(new Xt("name","fullPath",!0));function e(l,h){return nN(h)}const t=new Xt("name");t.xform=e,n.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Xt("size");return o.xform=i,n.push(o),n.push(new Xt("timeCreated")),n.push(new Xt("updated")),n.push(new Xt("md5Hash",null,!0)),n.push(new Xt("cacheControl",null,!0)),n.push(new Xt("contentDisposition",null,!0)),n.push(new Xt("contentEncoding",null,!0)),n.push(new Xt("contentLanguage",null,!0)),n.push(new Xt("contentType",null,!0)),n.push(new Xt("metadata","customMetadata",!0)),oc=n,oc}function rN(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new vn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function iN(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return rN(i,n),i}function vE(n,e,t){const i=gE(e);return i===null?null:iN(n,i,t)}function sN(n,e,t,i){const o=gE(e);if(o===null||!Vp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(_=>{const E=n.bucket,I=n.fullPath,w="/b/"+h(E)+"/o/"+h(I),P=Fp(w,t,i),b=dE({alt:"media",token:_});return P+b})[0]}function oN(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class EE{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(n){if(!n)throw bp()}function aN(n,e){function t(i,o){const l=vE(n,o,e);return wE(l!==null),l}return t}function lN(n,e){function t(i,o){const l=vE(n,o,e);return wE(l!==null),sN(l,o,n.host,n._protocol)}return t}function TE(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=wx():o=Ex():t.getStatus()===402?o=vx(n.bucket):t.getStatus()===403?o=Tx(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function uN(n){const e=TE(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=yx(n.path)),l.serverResponse=o.serverResponse,l}return t}function cN(n,e,t){const i=e.fullServerUrl(),o=Fp(i,n.host,n._protocol),l="GET",h=n.maxOperationRetryTime,d=new EE(o,l,lN(n,t),h);return d.errorHandler=uN(e),d}function hN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function dN(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=hN(null,e)),i}function fN(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function d(){let ee="";for(let ie=0;ie<2;ie++)ee=ee+Math.random().toString().slice(2);return ee}const p=d();h["Content-Type"]="multipart/related; boundary="+p;const _=dN(e,i,o),E=oN(_,t),I="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+_.contentType+`\r
\r
`,w=`\r
--`+p+"--",P=Ci.getBlob(I,i,w);if(P===null)throw kx();const b={name:_.fullPath},U=Fp(l,n.host,n._protocol),L="POST",W=n.maxUploadRetryTime,G=new EE(U,L,aN(n,t),W);return G.urlParams=b,G.headers=h,G.body=P.uploadData(),G.errorHandler=TE(e),G}class pN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Is.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Is.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Is.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw Ya("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ya("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ya("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ya("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ya("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mN extends pN{initXhr(){this.xhr_.responseType="text"}}function IE(){return new mN}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this._service=e,t instanceof vn?this._location=t:this._location=vn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new As(e,t)}get root(){const e=new vn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _E(this._location.path)}get storage(){return this._service}get parent(){const e=Zx(this._location.path);if(e===null)return null;const t=new vn(this._location.bucket,e);return new As(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Nx(e)}}function gN(n,e,t){n._throwIfRoot("uploadBytes");const i=fN(n.storage,n._location,yE(),new Ci(e,!0),t);return n.storage.makeRequestWithTokens(i,IE).then(o=>({metadata:o,ref:n}))}function _N(n){n._throwIfRoot("getDownloadURL");const e=cN(n.storage,n._location,yE());return n.storage.makeRequestWithTokens(e,IE).then(t=>{if(t===null)throw Px();return t})}function yN(n,e){const t=eN(n._location.path,e),i=new vn(n._location.bucket,t);return new As(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(n){return/^[A-Za-z]+:\/\//.test(n)}function EN(n,e){return new As(n,e)}function SE(n,e){if(n instanceof Up){const t=n;if(t._bucket==null)throw Ax();const i=new As(t,t._bucket);return e!=null?SE(i,e):i}else return e!==void 0?yN(n,e):n}function wN(n,e){if(e&&vN(e)){if(n instanceof Up)return EN(n,e);throw Nf("To use ref(service, url), the first argument must be a Storage instance.")}else return SE(n,e)}function xy(n,e){const t=e==null?void 0:e[cE];return t==null?null:vn.makeFromBucketSpec(t,n)}function TN(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:tv(o,n.app.options.projectId))}class Up{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=uE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gx,this._maxUploadRetryTime=_x,this._requests=new Set,o!=null?this._bucket=vn.makeFromBucketSpec(o,this._host):this._bucket=xy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vn.makeFromBucketSpec(this._url,e):this._bucket=xy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Py("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Py("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new As(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new Dx(hE());{const h=$x(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const Ny="@firebase/storage",Dy="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="storage";function IN(n,e,t){return n=ct(n),gN(n,e,t)}function SN(n){return n=ct(n),_N(n)}function RN(n,e){return n=ct(n),wN(n,e)}function CN(n=zf(),e){n=ct(n);const i=Bc(n,RE).getImmediate({identifier:e}),o=Jy("storage");return o&&AN(i,...o),i}function AN(n,e,t,i={}){TN(n,e,t,i)}function kN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Up(t,i,o,e,Ps)}function PN(){Ss(new Oi(RE,kN,"PUBLIC").setMultipleInstances(!0)),fr(Ny,Dy,""),fr(Ny,Dy,"esm2017")}PN();const xN="_container_1f1xn_3",NN="_form_1f1xn_17",DN="_nfcButton_1f1xn_41",ON="_scanButton_1f1xn_41",LN="_selfieButton_1f1xn_41",bN="_submitButton_1f1xn_41",VN="_scannerContainer_1f1xn_67",MN="_scanner_1f1xn_67",FN="_modalOverlay_1f1xn_97",UN="_modalContent_1f1xn_125",jN="_status_1f1xn_149",BN="_statusWarning_1f1xn_167",zN="_statusInfo_1f1xn_181",$N="_statusSuccess_1f1xn_195",qN="_statusError_1f1xn_209",HN="_pulse_1f1xn_1",WN="_reader_1f1xn_295",xn={container:xN,form:NN,nfcButton:DN,scanButton:ON,selfieButton:LN,submitButton:bN,scannerContainer:VN,scanner:MN,modalOverlay:FN,modalContent:UN,status:jN,statusWarning:BN,statusInfo:zN,statusSuccess:$N,statusError:qN,"animate-pulse":"_animate-pulse_1f1xn_247",pulse:HN,reader:WN},GN={apiKey:"AIzaSyC8tDVbDIrKuylsyF3rbDSSPlzsEHXqZIs",authDomain:"online-attendance-21f95.firebaseapp.com",databaseURL:"https://online-attendance-21f95-default-rtdb.firebaseio.com",projectId:"online-attendance-21f95",storageBucket:"online-attendance-21f95.appspot.com",messagingSenderId:"756223518392",appId:"1:756223518392:web:5e8d28c78f7eefb8be764d"},CE=Cl(GN),Oy=Zo(CE),KN=CN(CE),QN=({message:n,type:e,isProcessing:t})=>{if(!n)return null;const i=()=>{switch(e){case"warning":return xn.statusWarning;case"error":return xn.statusError;case"success":return xn.statusSuccess;default:return xn.statusInfo}};return R.jsx("div",{className:xn.modalOverlay,children:R.jsx("div",{className:xn.modalContent,children:R.jsx("div",{className:`${xn.status} ${i()} ${t?xn["animate-pulse"]:""}`,children:n})})})},XN=()=>{const[n,e]=$.useState({studentName:"",email:"",course:"",campus:"",studentId:""}),[t,i]=$.useState(null),[o,l]=$.useState(!1),[h,d]=$.useState(""),[p,_]=$.useState(null),[E,I]=$.useState("info"),w=$.useRef(null),P=(ne,ae="info")=>{d(ne),I(ae)};$.useEffect(()=>()=>{p&&p.abort()},[p]);const b=ne=>{const ae=ne.target.files[0];i(ae)},U=async()=>{if(!t)return null;d("Uploading selfie...");const ne=n.email.replace(/[@.]/g,"_"),ae=RN(KN,`users/${ne}/profile/${t.name}`),x=await IN(ae,t);return await SN(x.ref)},L=async()=>{if(!("NDEFReader"in window))throw new Error("NFC not supported on this device");try{l(!0),d("Waiting for NFC tag...");const ne=new NDEFReader;return _(ne),await ne.scan(),new Promise((ae,x)=>{const S=async({serialNumber:A})=>{try{if(d("Checking NFC authorization..."),!await G(A)){x(new Error("Unauthorized NFC tag"));return}d("Uploading data...");const M=await U(),O={...n,nfcSerialNumber:A,selfieUrl:M,createdAt:WP()};d("Saving to database...");const k=await lE(Hr(Oy,"RegisteredStudent"),O);d("Writing to NFC tag...");try{await ne.write({records:[{recordType:"text",data:new TextEncoder().encode(k.id)}]}),d("Verifying NFC write..."),await W(k.id,ne)}catch(qe){console.error("NFC Write Error:",qe),d("Attempting alternative write method...");try{await navigator.nfc.push({type:"NDEF",records:[{type:"text/plain",payload:k.id}]})}catch(Tt){console.error("Fallback NFC Write Error:",Tt),d("NFC write failed, but registration saved")}}ne.addEventListener("reading",S,{once:!0}),ae(k.id)}catch(N){ne.removeEventListener("reading",S),x(N)}};ne.addEventListener("reading",S,{once:!0})})}catch(ne){throw P(ne.message,"error"),ne}},W=async(ne,ae)=>new Promise((x,S)=>{const A=setTimeout(()=>{S(new Error("Verification timeout"))},5e3);ae.addEventListener("reading",({message:N})=>{clearTimeout(A),N.records.some(O=>O.recordType==="text"&&new TextDecoder().decode(O.data)===ne)?x():S(new Error("NFC write verification failed"))},{once:!0})}),G=async ne=>{try{const ae=sh(Oy,"Toregistered",ne);return(await oE(ae)).exists()}catch(ae){return console.error("NFC Authorization Check Error:",ae),!1}},ee=()=>{e({studentName:"",email:"",course:"",campus:"",studentId:""}),i(null),d(""),w.current&&(w.current.value="")},ie=async ne=>{if(ne.preventDefault(),!("NDEFReader"in window)){P("NFC is not supported on this device","warning");return}if(window.confirm("Approach NFC tag to complete registration"))try{const ae=await L();P("Registration completed successfully!","success"),setTimeout(()=>{P(""),ee()},3e3)}catch(ae){console.error("Registration Error:",ae),P(`Registration failed: ${ae.message}`,"error")}finally{l(!1),p&&(p.abort(),_(null))}};return R.jsxs("div",{className:xn.container,children:[R.jsx("h1",{children:"Student Registration"}),(!("NDEFReader"in window)||h)&&R.jsx(QN,{message:"NDEFReader"in window?h:"NFC is not supported on this device",type:"NDEFReader"in window?E:"warning",isProcessing:o}),R.jsxs("form",{onSubmit:ie,className:xn.form,children:[R.jsx("input",{type:"text",placeholder:"Student Name",value:n.studentName,onChange:ne=>e({...n,studentName:ne.target.value}),required:!0,disabled:o}),R.jsx("input",{type:"email",placeholder:"Email",value:n.email,onChange:ne=>e({...n,email:ne.target.value}),required:!0,disabled:o}),R.jsx("input",{type:"text",placeholder:"Course",value:n.course,onChange:ne=>e({...n,course:ne.target.value}),required:!0,disabled:o}),R.jsx("input",{type:"text",placeholder:"Student ID",value:n.studentId,onChange:ne=>e({...n,studentId:ne.target.value}),required:!0,disabled:o}),R.jsxs("select",{value:n.campus,onChange:ne=>e({...n,campus:ne.target.value}),required:!0,disabled:o,children:[R.jsx("option",{value:"",children:"Select Campus"}),R.jsx("option",{value:"Cainta Campus",children:"Cainta Campus"}),R.jsx("option",{value:"Antipolo Campus",children:"Antipolo Campus"}),R.jsx("option",{value:"San Mateo Campus",children:"San Mateo Campus"}),R.jsx("option",{value:"Binangonan Campus",children:"Binangonan Campus"}),R.jsx("option",{value:"Sumulong Campus",children:"Sumulong Campus"}),R.jsx("option",{value:"Taytay Campus",children:"Taytay Campus"}),R.jsx("option",{value:"Angono Campus",children:"Angono Campus"}),R.jsx("option",{value:"Cogeo Campus",children:"Cogeo Campus"})]}),t?R.jsxs("p",{children:["Selfie Captured: ",t.name]}):R.jsxs(R.Fragment,{children:[R.jsx("input",{type:"file",ref:w,onChange:b,accept:"image/*",capture:"user",style:{display:"none"},disabled:o}),R.jsx("button",{type:"button",onClick:()=>w.current.click(),className:xn.selfieButton,disabled:o,children:"Take Selfie"})]}),R.jsx("button",{type:"submit",className:`${xn.submitButton} ${o?"animate-pulse":""}`,disabled:!n.studentId||!t||o||!("NDEFReader"in window),children:o?"Processing...":"Complete Registration with NFC"})]})]})},YN="_container_dfdvv_1",JN="_status_dfdvv_33",ZN="_reading_dfdvv_51",e2="_pulse_dfdvv_1",t2="_error_dfdvv_59",n2="_studentInfo_dfdvv_77",r2="_infoGrid_dfdvv_107",i2="_infoRow_dfdvv_117",s2="_selfie_dfdvv_149",o2="_controls_dfdvv_171",a2="_button_dfdvv_185",l2="_readButton_dfdvv_213",u2="_resetButton_dfdvv_231",Ot={container:YN,status:JN,reading:ZN,pulse:e2,error:t2,studentInfo:n2,infoGrid:r2,infoRow:i2,selfie:s2,controls:o2,button:a2,readButton:l2,resetButton:u2},c2={apiKey:"AIzaSyC8tDVbDIrKuylsyF3rbDSSPlzsEHXqZIs",authDomain:"online-attendance-21f95.firebaseapp.com",databaseURL:"https://online-attendance-21f95-default-rtdb.firebaseio.com",projectId:"online-attendance-21f95",storageBucket:"online-attendance-21f95.appspot.com",messagingSenderId:"756223518392",appId:"1:756223518392:web:5e8d28c78f7eefb8be764d"},h2=Cl(c2),d2=Zo(h2),f2=()=>{const[n,e]=$.useState(null),[t,i]=$.useState(""),[o,l]=$.useState(!1),[h,d]=$.useState(null),p=async()=>{if(!("NDEFReader"in window)){d("NFC is not supported on this device");return}try{l(!0),i("Waiting for NFC card..."),d(null);const E=new NDEFReader;await E.scan(),E.addEventListener("reading",async({message:I})=>{try{const w=I.records.find(L=>L.recordType==="text");if(!w)throw new Error("Invalid NFC card: No student data found");const P=new TextDecoder().decode(w.data);i("Retrieving student data...");const b=sh(d2,"RegisteredStudent",P),U=await oE(b);if(U.exists()){const L=U.data();e(L),i("Student data retrieved successfully")}else throw new Error("No student record found for this card")}catch(w){d(w.message),e(null)}finally{l(!1),E.stop()}})}catch(E){d(E.message),l(!1)}},_=()=>{e(null),i(""),d(null),l(!1)};return R.jsxs("div",{className:Ot.container,children:[R.jsx("h1",{children:"Student NFC Reader"}),t&&R.jsx("div",{className:`${Ot.status} ${o?Ot.reading:""}`,children:t}),h&&R.jsx("div",{className:Ot.error,children:h}),n&&R.jsxs("div",{className:Ot.studentInfo,children:[R.jsx("h2",{children:"Student Information"}),R.jsxs("div",{className:Ot.infoGrid,children:[R.jsxs("div",{className:Ot.infoRow,children:[R.jsx("span",{children:"Name:"}),R.jsx("span",{children:n.studentName})]}),R.jsxs("div",{className:Ot.infoRow,children:[R.jsx("span",{children:"Student ID:"}),R.jsx("span",{children:n.studentId})]}),R.jsxs("div",{className:Ot.infoRow,children:[R.jsx("span",{children:"Email:"}),R.jsx("span",{children:n.email})]}),R.jsxs("div",{className:Ot.infoRow,children:[R.jsx("span",{children:"Course:"}),R.jsx("span",{children:n.course})]}),R.jsxs("div",{className:Ot.infoRow,children:[R.jsx("span",{children:"Campus:"}),R.jsx("span",{children:n.campus})]}),n.selfieUrl&&R.jsx("div",{className:Ot.selfie,children:R.jsx("img",{src:n.selfieUrl,alt:"Student"})})]})]}),R.jsxs("div",{className:Ot.controls,children:[R.jsx("button",{onClick:p,disabled:o||!("NDEFReader"in window),className:`${Ot.button} ${Ot.readButton}`,children:o?"Reading...":"Scan NFC Card"}),n&&R.jsx("button",{onClick:_,className:`${Ot.button} ${Ot.resetButton}`,children:"Clear & Scan New Card"})]})]})},p2="_login_container_unahc_3",m2="_login_card_unahc_21",g2="_login_title_unahc_39",_2="_login_form_unahc_55",y2="_form_group_unahc_67",v2="_login_input_unahc_77",E2="_login_button_unahc_105",w2="_error_message_unahc_147",T2="_divider_unahc_165",I2="_google_button_unahc_213",S2="_google_icon_unahc_263",_n={login_container:p2,login_card:m2,login_title:g2,login_form:_2,form_group:y2,login_input:v2,login_button:E2,error_message:w2,divider:T2,google_button:I2,google_icon:S2},R2={apiKey:"AIzaSyC8tDVbDIrKuylsyF3rbDSSPlzsEHXqZIs",authDomain:"online-attendance-21f95.firebaseapp.com",databaseURL:"https://online-attendance-21f95-default-rtdb.firebaseio.com",projectId:"online-attendance-21f95",storageBucket:"online-attendance-21f95.appspot.com",messagingSenderId:"756223518392",appId:"1:756223518392:web:5e8d28c78f7eefb8be764d"},C2=Cl(R2),A2=new Ur,ac=ep(),rf=Zo(C2),k2=()=>{const[n,e]=$.useState(""),[t,i]=$.useState(""),[o,l]=$.useState(""),[h,d]=$.useState(!1),p=Tl(),_=async w=>{try{const P=Es(Hr(rf,"RegisteredAdmin"),ws("email","==",w));if(!(await Ts(P)).empty)return"admin";const U=Es(Hr(rf,"RegisteredTeacher"),ws("email","==",w));if(!(await Ts(U)).empty)return"teacher";const W=Es(Hr(rf,"RegisteredStudent"),ws("email","==",w));return(await Ts(W)).empty?null:"student"}catch(P){return console.error("Error checking user role:",P),null}},E=async w=>{w.preventDefault(),d(!0),l("");try{const P=await TR(ac,n,t),b=await _(P.user.email);b?(localStorage.setItem("userRole",b),p("/dashboard")):(await x_(ac),alert("Access denied. You are not registered as an admin, teacher, or student."),l("Access denied. Please contact your administrator."))}catch(P){l(P.message)}finally{d(!1)}},I=async()=>{d(!0),l("");try{const w=await qR(ac,A2),P=await _(w.user.email);P?(localStorage.setItem("userRole",P),p("/dashboard")):(await x_(ac),alert("Access denied. You are not registered as an admin, teacher, or student."),l("Access denied. Please contact your administrator."))}catch(w){l(w.message)}finally{d(!1)}};return R.jsx("div",{className:_n.login_container,children:R.jsxs("div",{className:_n.login_card,children:[R.jsx("h1",{className:_n.login_title,children:"Login"}),R.jsxs("form",{onSubmit:E,className:_n.login_form,children:[R.jsx("div",{className:_n.form_group,children:R.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:w=>e(w.target.value),required:!0,className:_n.login_input})}),R.jsx("div",{className:_n.form_group,children:R.jsx("input",{type:"password",placeholder:"Password",value:t,onChange:w=>i(w.target.value),required:!0,className:_n.login_input})}),o&&R.jsx("div",{className:_n.error_message,children:o}),R.jsx("button",{type:"submit",className:_n.login_button,disabled:h,children:h?"Logging in...":"Login"})]}),R.jsx("div",{className:_n.divider,children:R.jsx("span",{children:"Or continue with"})}),R.jsxs("button",{type:"button",onClick:I,disabled:h,className:_n.google_button,children:[R.jsx("svg",{className:_n.google_icon,viewBox:"0 0 24 24",children:R.jsx("path",{fill:"currentColor",d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),"Sign in with Google"]})]})})},P2="_event_list_container_18j37_1",x2="_events_grid_18j37_27",N2="_event_card_18j37_37",D2="_card_header_18j37_53",O2="_card_basic_info_18j37_73",L2="_card_details_18j37_97",b2="_event_info_18j37_105",V2="_table_container_18j37_129",M2="_action_buttons_18j37_173",F2="_edit_btn_18j37_183",U2="_delete_btn_18j37_183",cr={event_list_container:P2,events_grid:x2,event_card:N2,card_header:D2,card_basic_info:O2,card_details:L2,event_info:b2,table_container:V2,action_buttons:M2,edit_btn:F2,delete_btn:U2},j2=()=>{const[n,e]=$.useState([]),[t,i]=$.useState(null),o=Tl(),l=Zo(),h=ep();$.useEffect(()=>{d()},[]);const d=async()=>{try{const w=h.currentUser;if(!w)return;const P=Hr(l,"PendingEvent"),b=Es(P,ws("createdBy","==",w.email)),L=(await Ts(b)).docs.map(W=>({id:W.id,...W.data()}));e(L)}catch(w){console.error("Error fetching events:",w)}},p=w=>w?w.toDate?w.toDate().toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}):new Date(w).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}):"",_=w=>{o(`/dashboard/edit-event/${w}`)},E=async w=>{if(window.confirm("Are you sure you want to delete this event?"))try{await qP(sh(l,"events",w)),d()}catch(P){console.error("Error deleting event:",P)}},I=w=>{i(t===w?null:w)};return R.jsxs("div",{className:cr.event_list_container,children:[R.jsx("h2",{children:"Event List"}),R.jsx("div",{className:cr.events_grid,children:n.map(w=>{var P;return R.jsxs("div",{className:`${cr.event_card} ${t===w.id?"expanded":""}`,children:[R.jsxs("div",{className:cr.card_header,onClick:()=>I(w.id),children:[R.jsxs("div",{className:cr.card_basic_info,children:[R.jsx("h3",{children:w.eventName}),R.jsxs("p",{children:["ID: ",w.id]}),R.jsxs("p",{children:["Created: ",p(w.createdAt)]})]}),t===w.id?R.jsx(MI,{}):R.jsx(VI,{})]}),t===w.id&&R.jsxs("div",{className:cr.card_details,children:[R.jsxs("div",{className:cr.event_info,children:[R.jsxs("p",{children:[R.jsx("strong",{children:"Location:"})," ",w.locations]}),R.jsxs("p",{children:[R.jsx("strong",{children:"Description:"})," ",w.description]}),R.jsxs("p",{children:[R.jsx("strong",{children:"Start Time:"})," ",w.startTime]}),R.jsxs("p",{children:[R.jsx("strong",{children:"End Time:"})," ",w.endTime]})]}),R.jsx("div",{className:cr.table_container,children:R.jsxs("table",{children:[R.jsx("thead",{children:R.jsxs("tr",{children:[R.jsx("th",{children:"STUDENT ID"}),R.jsx("th",{children:"STUDENT NAME"}),R.jsx("th",{children:"COURSE"}),R.jsx("th",{children:"CAMPUS"}),R.jsx("th",{children:"DATE"}),R.jsx("th",{children:"ACTIONS"})]})}),R.jsx("tbody",{children:(P=w.attendees)==null?void 0:P.map((b,U)=>R.jsxs("tr",{children:[R.jsx("td",{children:b.studentId}),R.jsx("td",{children:b.name}),R.jsx("td",{children:b.course}),R.jsx("td",{children:b.campus}),R.jsx("td",{children:p(b.dateAttended)}),R.jsxs("td",{className:"action-buttons",children:[R.jsx("button",{onClick:()=>_(w.id),className:cr.edit_btn,children:R.jsx($I,{size:16})}),R.jsx("button",{onClick:()=>E(w.id),className:cr.delete_btn,children:R.jsx(qI,{size:16})})]})]},U))})]})})]})]},w.id)})})]})};function B2(){return R.jsx(tI,{children:R.jsxs(NT,{children:[R.jsx(Fr,{path:"/",element:R.jsx(o_,{to:"/login",replace:!0})}),R.jsx(Fr,{path:"/login",element:R.jsx(k2,{})}),R.jsxs(Fr,{path:"/dashboard/*",element:R.jsx(QP,{}),children:[R.jsx(Fr,{path:"create-event",element:R.jsx(mx,{})}),R.jsx(Fr,{path:"student-registration",element:R.jsx(XN,{})}),R.jsx(Fr,{path:"nfc-reader",element:R.jsx(f2,{})}),R.jsx(Fr,{path:"event-list",element:R.jsx(j2,{})})," "]}),R.jsx(Fr,{path:"*",element:R.jsx(o_,{to:"/login",replace:!0})})]})})}Fw.createRoot(document.getElementById("root")).render(R.jsx($.StrictMode,{children:R.jsx(B2,{})}));
