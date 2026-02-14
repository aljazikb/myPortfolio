(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function LS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var id={exports:{}},Io={};var C0;function OS(){if(C0)return Io;C0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var w0;function PS(){return w0||(w0=1,id.exports=OS()),id.exports}var me=PS(),ad={exports:{}},rt={};var D0;function BS(){if(D0)return rt;D0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(N,ee,ge){this.props=N,this.context=ee,this.refs=y,this.updater=ge||A}x.prototype.isReactComponent={},x.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=x.prototype;function L(N,ee,ge){this.props=N,this.context=ee,this.refs=y,this.updater=ge||A}var P=L.prototype=new O;P.constructor=L,C(P,x.prototype),P.isPureReactComponent=!0;var I=Array.isArray;function H(){}var B={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function R(N,ee,ge){var Re=ge.ref;return{$$typeof:r,type:N,key:ee,ref:Re!==void 0?Re:null,props:ge}}function w(N,ee){return R(N.type,ee,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function re(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ge){return ee[ge]})}var ae=/\/+/g;function de(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?re(""+N.key):ee.toString(36)}function Z(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(H,H):(N.status="pending",N.then(function(ee){N.status==="pending"&&(N.status="fulfilled",N.value=ee)},function(ee){N.status==="pending"&&(N.status="rejected",N.reason=ee)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function D(N,ee,ge,Re,ze){var te=typeof N;(te==="undefined"||te==="boolean")&&(N=null);var ce=!1;if(N===null)ce=!0;else switch(te){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(N.$$typeof){case r:case e:ce=!0;break;case v:return ce=N._init,D(ce(N._payload),ee,ge,Re,ze)}}if(ce)return ze=ze(N),ce=Re===""?"."+de(N,0):Re,I(ze)?(ge="",ce!=null&&(ge=ce.replace(ae,"$&/")+"/"),D(ze,ee,ge,"",function(Fe){return Fe})):ze!=null&&(V(ze)&&(ze=w(ze,ge+(ze.key==null||N&&N.key===ze.key?"":(""+ze.key).replace(ae,"$&/")+"/")+ce)),ee.push(ze)),1;ce=0;var be=Re===""?".":Re+":";if(I(N))for(var Ie=0;Ie<N.length;Ie++)Re=N[Ie],te=be+de(Re,Ie),ce+=D(Re,ee,ge,te,ze);else if(Ie=M(N),typeof Ie=="function")for(N=Ie.call(N),Ie=0;!(Re=N.next()).done;)Re=Re.value,te=be+de(Re,Ie++),ce+=D(Re,ee,ge,te,ze);else if(te==="object"){if(typeof N.then=="function")return D(Z(N),ee,ge,Re,ze);throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ce}function F(N,ee,ge){if(N==null)return N;var Re=[],ze=0;return D(N,Re,"","",function(te){return ee.call(ge,te,ze++)}),Re}function $(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(ge){(N._status===0||N._status===-1)&&(N._status=1,N._result=ge)},function(ge){(N._status===0||N._status===-1)&&(N._status=2,N._result=ge)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var Se=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Me={map:F,forEach:function(N,ee,ge){F(N,function(){ee.apply(this,arguments)},ge)},count:function(N){var ee=0;return F(N,function(){ee++}),ee},toArray:function(N){return F(N,function(ee){return ee})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return rt.Activity=_,rt.Children=Me,rt.Component=x,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=L,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,rt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},rt.cache=function(N){return function(){return N.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(N,ee,ge){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Re=C({},N.props),ze=N.key;if(ee!=null)for(te in ee.key!==void 0&&(ze=""+ee.key),ee)!K.call(ee,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ee.ref===void 0||(Re[te]=ee[te]);var te=arguments.length-2;if(te===1)Re.children=ge;else if(1<te){for(var ce=Array(te),be=0;be<te;be++)ce[be]=arguments[be+2];Re.children=ce}return R(N.type,ze,Re)},rt.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},rt.createElement=function(N,ee,ge){var Re,ze={},te=null;if(ee!=null)for(Re in ee.key!==void 0&&(te=""+ee.key),ee)K.call(ee,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(ze[Re]=ee[Re]);var ce=arguments.length-2;if(ce===1)ze.children=ge;else if(1<ce){for(var be=Array(ce),Ie=0;Ie<ce;Ie++)be[Ie]=arguments[Ie+2];ze.children=be}if(N&&N.defaultProps)for(Re in ce=N.defaultProps,ce)ze[Re]===void 0&&(ze[Re]=ce[Re]);return R(N,te,ze)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(N){return{$$typeof:h,render:N}},rt.isValidElement=V,rt.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:$}},rt.memo=function(N,ee){return{$$typeof:p,type:N,compare:ee===void 0?null:ee}},rt.startTransition=function(N){var ee=B.T,ge={};B.T=ge;try{var Re=N(),ze=B.S;ze!==null&&ze(ge,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(H,Se)}catch(te){Se(te)}finally{ee!==null&&ge.types!==null&&(ee.types=ge.types),B.T=ee}},rt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},rt.use=function(N){return B.H.use(N)},rt.useActionState=function(N,ee,ge){return B.H.useActionState(N,ee,ge)},rt.useCallback=function(N,ee){return B.H.useCallback(N,ee)},rt.useContext=function(N){return B.H.useContext(N)},rt.useDebugValue=function(){},rt.useDeferredValue=function(N,ee){return B.H.useDeferredValue(N,ee)},rt.useEffect=function(N,ee){return B.H.useEffect(N,ee)},rt.useEffectEvent=function(N){return B.H.useEffectEvent(N)},rt.useId=function(){return B.H.useId()},rt.useImperativeHandle=function(N,ee,ge){return B.H.useImperativeHandle(N,ee,ge)},rt.useInsertionEffect=function(N,ee){return B.H.useInsertionEffect(N,ee)},rt.useLayoutEffect=function(N,ee){return B.H.useLayoutEffect(N,ee)},rt.useMemo=function(N,ee){return B.H.useMemo(N,ee)},rt.useOptimistic=function(N,ee){return B.H.useOptimistic(N,ee)},rt.useReducer=function(N,ee,ge){return B.H.useReducer(N,ee,ge)},rt.useRef=function(N){return B.H.useRef(N)},rt.useState=function(N){return B.H.useState(N)},rt.useSyncExternalStore=function(N,ee,ge){return B.H.useSyncExternalStore(N,ee,ge)},rt.useTransition=function(){return B.H.useTransition()},rt.version="19.2.4",rt}var U0;function zh(){return U0||(U0=1,ad.exports=BS()),ad.exports}var zn=zh();const Pr=LS(zn);var rd={exports:{}},Fo={},sd={exports:{}},od={};var N0;function IS(){return N0||(N0=1,(function(r){function e(D,F){var $=D.length;D.push(F);e:for(;0<$;){var Se=$-1>>>1,Me=D[Se];if(0<l(Me,F))D[Se]=F,D[$]=Me,$=Se;else break e}}function i(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var F=D[0],$=D.pop();if($!==F){D[0]=$;e:for(var Se=0,Me=D.length,N=Me>>>1;Se<N;){var ee=2*(Se+1)-1,ge=D[ee],Re=ee+1,ze=D[Re];if(0>l(ge,$))Re<Me&&0>l(ze,ge)?(D[Se]=ze,D[Re]=$,Se=Re):(D[Se]=ge,D[ee]=$,Se=ee);else if(Re<Me&&0>l(ze,$))D[Se]=ze,D[Re]=$,Se=Re;else break e}}return F}function l(D,F){var $=D.sortIndex-F.sortIndex;return $!==0?$:D.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,_=null,S=3,M=!1,A=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function P(D){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=D)s(p),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(p)}}function I(D){if(C=!1,P(D),!A)if(i(m)!==null)A=!0,H||(H=!0,re());else{var F=i(p);F!==null&&Z(I,F.startTime-D)}}var H=!1,B=-1,K=5,R=-1;function w(){return y?!0:!(r.unstable_now()-R<K)}function V(){if(y=!1,H){var D=r.unstable_now();R=D;var F=!0;try{e:{A=!1,C&&(C=!1,O(B),B=-1),M=!0;var $=S;try{t:{for(P(D),_=i(m);_!==null&&!(_.expirationTime>D&&w());){var Se=_.callback;if(typeof Se=="function"){_.callback=null,S=_.priorityLevel;var Me=Se(_.expirationTime<=D);if(D=r.unstable_now(),typeof Me=="function"){_.callback=Me,P(D),F=!0;break t}_===i(m)&&s(m),P(D)}else s(m);_=i(m)}if(_!==null)F=!0;else{var N=i(p);N!==null&&Z(I,N.startTime-D),F=!1}}break e}finally{_=null,S=$,M=!1}F=void 0}}finally{F?re():H=!1}}}var re;if(typeof L=="function")re=function(){L(V)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,de=ae.port2;ae.port1.onmessage=V,re=function(){de.postMessage(null)}}else re=function(){x(V,0)};function Z(D,F){B=x(function(){D(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(D){switch(S){case 1:case 2:case 3:var F=3;break;default:F=S}var $=S;S=F;try{return D()}finally{S=$}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=S;S=D;try{return F()}finally{S=$}},r.unstable_scheduleCallback=function(D,F,$){var Se=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Se+$:Se):$=Se,D){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=$+Me,D={id:v++,callback:F,priorityLevel:D,startTime:$,expirationTime:Me,sortIndex:-1},$>Se?(D.sortIndex=$,e(p,D),i(m)===null&&D===i(p)&&(C?(O(B),B=-1):C=!0,Z(I,$-Se))):(D.sortIndex=Me,e(m,D),A||M||(A=!0,H||(H=!0,re()))),D},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(D){var F=S;return function(){var $=S;S=F;try{return D.apply(this,arguments)}finally{S=$}}}})(od)),od}var L0;function FS(){return L0||(L0=1,sd.exports=IS()),sd.exports}var ld={exports:{}},Bn={};var O0;function zS(){if(O0)return Bn;O0=1;var r=zh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Bn.flushSync=function(m){var p=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=v,s.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Bn.requestFormReset=function(m){s.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Bn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Bn.version="19.2.4",Bn}var P0;function HS(){if(P0)return ld.exports;P0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ld.exports=zS(),ld.exports}var B0;function GS(){if(B0)return Fo;B0=1;var r=FS(),e=zh(),i=HS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var g=!1,b=u.child;b;){if(b===a){g=!0,a=u,o=f;break}if(b===o){g=!0,o=u,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,o=u;break}if(b===o){g=!0,o=f,a=u;break}b=b.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case H:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case L:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var Z=Array.isArray,D=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},Se=[],Me=-1;function N(t){return{current:t}}function ee(t){0>Me||(t.current=Se[Me],Se[Me]=null,Me--)}function ge(t,n){Me++,Se[Me]=t.current,t.current=n}var Re=N(null),ze=N(null),te=N(null),ce=N(null);function be(t,n){switch(ge(te,n),ge(ze,t),ge(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Qg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Qg(n),t=Jg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Re),ge(Re,t)}function Ie(){ee(Re),ee(ze),ee(te)}function Fe(t){t.memoizedState!==null&&ge(ce,t);var n=Re.current,a=Jg(n,t.type);n!==a&&(ge(ze,t),ge(Re,a))}function ht(t){ze.current===t&&(ee(Re),ee(ze)),ce.current===t&&(ee(ce),Lo._currentValue=$)}var Qt,mt;function lt(t){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",mt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+t+mt}var yt=!1;function Ge(t,n){if(!t||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(le){var ie=le}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(le){ie=le}t.call(_e.prototype)}}else{try{throw Error()}catch(le){ie=le}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(le){if(le&&ie&&typeof le.stack=="string")return[le.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var z=g.split(`
`),J=b.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===J.length)for(o=z.length-1,u=J.length-1;1<=o&&0<=u&&z[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==J[u]){var fe=`
`+z[o].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=o&&0<=u);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?lt(a):""}function ot(t,n){switch(t.tag){case 26:case 27:case 5:return lt(t.type);case 16:return lt("Lazy");case 13:return t.child!==n&&n!==null?lt("Suspense Fallback"):lt("Suspense");case 19:return lt("SuspenseList");case 0:case 15:return Ge(t.type,!1);case 11:return Ge(t.type.render,!1);case 1:return Ge(t.type,!0);case 31:return lt("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=ot(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Et=Object.prototype.hasOwnProperty,gt=r.unstable_scheduleCallback,wt=r.unstable_cancelCallback,je=r.unstable_shouldYield,U=r.unstable_requestPaint,E=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,he=r.unstable_ImmediatePriority,xe=r.unstable_UserBlockingPriority,ue=r.unstable_NormalPriority,Ke=r.unstable_LowPriority,we=r.unstable_IdlePriority,We=r.log,nt=r.unstable_setDisableYieldValue,Ee=null,Te=null;function He(t){if(typeof We=="function"&&nt(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Ee,t)}catch{}}var Pe=Math.clz32?Math.clz32:X,De=Math.log,ut=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(De(t)/ut|0)|0}var Ne=256,Ae=262144,Be=4194304;function ye(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=ye(o):(g&=b,g!==0?u=ye(g):a||(a=b&~t,a!==0&&(u=ye(a))))):(b=o&~f,b!==0?u=ye(b):g!==0?u=ye(g):a||(a=o&~t,a!==0&&(u=ye(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var t=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Pn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function yi(t,n,a,o,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,z=t.expirationTimes,J=t.hiddenUpdates;for(a=g&~a;0<a;){var fe=31-Pe(a),_e=1<<fe;b[fe]=0,z[fe]=-1;var ie=J[fe];if(ie!==null)for(J[fe]=null,fe=0;fe<ie.length;fe++){var le=ie[fe];le!==null&&(le.lane&=-536870913)}a&=~_e}o!==0&&il(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function il(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Pe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Xs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Pe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Fr(t,n){var a=n&-n;return a=(a&42)!==0?1:Ws(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ws(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qs(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:M0(t.type))}function Bi(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var ci=Math.random().toString(36).slice(2),cn="__reactFiber$"+ci,bn="__reactProps$"+ci,Ei="__reactContainer$"+ci,Hr="__reactEvents$"+ci,Gr="__reactListeners$"+ci,al="__reactHandles$"+ci,Ys="__reactResources$"+ci,or="__reactMarker$"+ci;function js(t){delete t[cn],delete t[bn],delete t[Hr],delete t[Gr],delete t[al]}function ba(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ei]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=r0(t);t!==null;){if(a=t[cn])return a;t=r0(t)}return n}t=a,a=t.parentNode}return null}function Ta(t){if(t=t[cn]||t[Ei]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function lr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Aa(t){var n=t[Ys];return n||(n=t[Ys]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(t){t[or]=!0}var q=new Set,se={};function ne(t,n){j(t,n),j(t+"Capture",n)}function j(t,n){for(se[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ve={},Le={};function ke(t){return Et.call(Le,t)?!0:Et.call(Ve,t)?!1:Ue.test(t)?Le[t]=!0:(Ve[t]=!0,!1)}function qe(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ye(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jt(t){if(!t._valueTracker){var n=Ot(t)?"checked":"value";t._valueTracker=Jt(t,n,""+t[n])}}function It(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ot(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pt=/[\n"\\]/g;function at(t){return t.replace(Pt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(t,n,a,o,u,f,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?An(t,g,et(n)):a!=null?An(t,g,et(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+et(b):t.removeAttribute("name")}function ji(t,n,a,o,u,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){jt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),jt(t)}function An(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ui(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ht(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function Rn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Z(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),jt(t)}function gn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Cn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vr(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&wn(t,f,n[f])}function bi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(t){return Dv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zi(){}var $c=null;function eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Xr=null;function Kh(t){var n=Ta(t);if(n&&(t=n.stateNode)){var a=t[bn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Tn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[bn]||null;if(!u)throw Error(s(90));Tn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&It(o)}break e;case"textarea":Ht(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ui(t,!!a.multiple,n,!1)}}}var tu=!1;function Qh(t,n,a){if(tu)return t(n,a);tu=!0;try{var o=t(n);return o}finally{if(tu=!1,(kr!==null||Xr!==null)&&(ql(),kr&&(n=kr,t=Xr,Xr=kr=null,Kh(n),t)))for(n=0;n<t.length;n++)Kh(t[n])}}function Zs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Ki)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{nu=!1}var Ra=null,iu=null,sl=null;function Jh(){if(sl)return sl;var t,n=iu,a=n.length,o,u="value"in Ra?Ra.value:Ra.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(o=1;o<=g&&n[a-o]===u[f-o];o++);return sl=u.slice(t,1<o?1-o:void 0)}function ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function $h(){return!1}function kn(t){function n(a,o,u,f,g){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:$h,this.isPropagationStopped=$h,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=kn(cr),Qs=_({},cr,{view:0,detail:0}),Uv=kn(Qs),au,ru,Js,ul=_({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(au=t.screenX-Js.screenX,ru=t.screenY-Js.screenY):ru=au=0,Js=t),au)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),ep=kn(ul),Nv=_({},ul,{dataTransfer:0}),Lv=kn(Nv),Ov=_({},Qs,{relatedTarget:0}),su=kn(Ov),Pv=_({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=kn(Pv),Iv=_({},cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=kn(Iv),zv=_({},cr,{data:0}),tp=kn(zv),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Vv[t])?!!n[t]:!1}function ou(){return kv}var Xv=_({},Qs,{key:function(t){if(t.key){var n=Hv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wv=kn(Xv),qv=_({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=kn(qv),Yv=_({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),jv=kn(Yv),Zv=_({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=kn(Zv),Qv=_({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=kn(Qv),$v=_({},cr,{newState:0,oldState:0}),ex=kn($v),tx=[9,13,27,32],lu=Ki&&"CompositionEvent"in window,$s=null;Ki&&"documentMode"in document&&($s=document.documentMode);var nx=Ki&&"TextEvent"in window&&!$s,ip=Ki&&(!lu||$s&&8<$s&&11>=$s),ap=" ",rp=!1;function sp(t,n){switch(t){case"keyup":return tx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function ix(t,n){switch(t){case"compositionend":return op(n);case"keypress":return n.which!==32?null:(rp=!0,ap);case"textInput":return t=n.data,t===ap&&rp?null:t;default:return null}}function ax(t,n){if(Wr)return t==="compositionend"||!lu&&sp(t,n)?(t=Jh(),sl=iu=Ra=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ip&&n.locale!=="ko"?null:n.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!rx[t.type]:n==="textarea"}function cp(t,n,a,o){kr?Xr?Xr.push(o):Xr=[o]:kr=o,n=$l(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var eo=null,to=null;function sx(t){Wg(t,0)}function fl(t){var n=lr(t);if(It(n))return t}function up(t,n){if(t==="change")return n}var fp=!1;if(Ki){var cu;if(Ki){var uu="oninput"in document;if(!uu){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),uu=typeof dp.oninput=="function"}cu=uu}else cu=!1;fp=cu&&(!document.documentMode||9<document.documentMode)}function hp(){eo&&(eo.detachEvent("onpropertychange",pp),to=eo=null)}function pp(t){if(t.propertyName==="value"&&fl(to)){var n=[];cp(n,to,t,eu(t)),Qh(sx,n)}}function ox(t,n,a){t==="focusin"?(hp(),eo=n,to=a,eo.attachEvent("onpropertychange",pp)):t==="focusout"&&hp()}function lx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(to)}function cx(t,n){if(t==="click")return fl(n)}function ux(t,n){if(t==="input"||t==="change")return fl(n)}function fx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Jn=typeof Object.is=="function"?Object.is:fx;function no(t,n){if(Jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Et.call(n,u)||!Jn(t[u],n[u]))return!1}return!0}function mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gp(t,n){var a=mp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mp(a)}}function _p(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?_p(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function vp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function fu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var dx=Ki&&"documentMode"in document&&11>=document.documentMode,qr=null,du=null,io=null,hu=!1;function xp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||qr==null||qr!==Qe(o)||(o=qr,"selectionStart"in o&&fu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=$l(du,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=qr)))}function ur(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Yr={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionrun:ur("Transition","TransitionRun"),transitionstart:ur("Transition","TransitionStart"),transitioncancel:ur("Transition","TransitionCancel"),transitionend:ur("Transition","TransitionEnd")},pu={},Sp={};Ki&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function fr(t){if(pu[t])return pu[t];if(!Yr[t])return t;var n=Yr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Sp)return pu[t]=n[a];return t}var Mp=fr("animationend"),yp=fr("animationiteration"),Ep=fr("animationstart"),hx=fr("transitionrun"),px=fr("transitionstart"),mx=fr("transitioncancel"),bp=fr("transitionend"),Tp=new Map,mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mu.push("scrollEnd");function Ti(t,n){Tp.set(t,n),ne(n,[t])}var dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],jr=0,gu=0;function hl(){for(var t=jr,n=gu=jr=0;n<t;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var g=o.pending;g===null?u.next=u:(u.next=g.next,g.next=u),o.pending=u}f!==0&&Ap(a,u,f)}}function pl(t,n,a,o){fi[jr++]=t,fi[jr++]=n,fi[jr++]=a,fi[jr++]=o,gu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function _u(t,n,a,o){return pl(t,n,a,o),ml(t)}function dr(t,n){return pl(t,null,null,n),ml(t)}function Ap(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ml(t){if(50<Ao)throw Ao=0,Rf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zr={};function gx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,o){return new gx(t,n,a,o)}function vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qi(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Rp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function gl(t,n,a,o,u,f){var g=0;if(o=t,typeof t=="function")vu(t)&&(g=1);else if(typeof t=="string")g=MS(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=$n(31,a,n,u),t.elementType=R,t.lanes=f,t;case C:return hr(a.children,u,f,n);case y:g=8,u|=24;break;case x:return t=$n(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case I:return t=$n(13,a,n,u),t.elementType=I,t.lanes=f,t;case H:return t=$n(19,a,n,u),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:g=10;break e;case O:g=9;break e;case P:g=11;break e;case B:g=14;break e;case K:g=16,o=null;break e}g=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=$n(g,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function hr(t,n,a,o){return t=$n(7,t,o,n),t.lanes=a,t}function xu(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function Cp(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function Su(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var wp=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=wp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},wp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Kr=[],Qr=0,_l=null,ao=0,hi=[],pi=0,Ca=null,Ii=1,Fi="";function Ji(t,n){Kr[Qr++]=ao,Kr[Qr++]=_l,_l=t,ao=n}function Dp(t,n,a){hi[pi++]=Ii,hi[pi++]=Fi,hi[pi++]=Ca,Ca=t;var o=Ii;t=Fi;var u=32-Pe(o)-1;o&=~(1<<u),a+=1;var f=32-Pe(n)+u;if(30<f){var g=u-u%5;f=(o&(1<<g)-1).toString(32),o>>=g,u-=g,Ii=1<<32-Pe(n)+u|a<<u|o,Fi=f+t}else Ii=1<<f|a<<u|o,Fi=t}function Mu(t){t.return!==null&&(Ji(t,1),Dp(t,1,0))}function yu(t){for(;t===_l;)_l=Kr[--Qr],Kr[Qr]=null,ao=Kr[--Qr],Kr[Qr]=null;for(;t===Ca;)Ca=hi[--pi],hi[pi]=null,Fi=hi[--pi],hi[pi]=null,Ii=hi[--pi],hi[pi]=null}function Up(t,n){hi[pi++]=Ii,hi[pi++]=Fi,hi[pi++]=Ca,Ii=n.id,Fi=n.overflow,Ca=t}var Dn=null,Zt=null,bt=!1,wa=null,mi=!1,Eu=Error(s(519));function Da(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(di(n,t)),Eu}function Np(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[bn]=o,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)xt(Co[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),ji(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Zg(n.textContent,a)?(o.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),o.onScroll!=null&&xt("scroll",n),o.onScrollEnd!=null&&xt("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Da(t,!0)}function Lp(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Dn=Dn.return}}function Jr(t){if(t!==Dn)return!1;if(!bt)return Lp(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Vf(t.type,t.memoizedProps)),a=!a),a&&Zt&&Da(t),Lp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=a0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=a0(t)}else n===27?(n=Zt,Xa(t.type)?(t=Yf,Yf=null,Zt=t):Zt=n):Zt=Dn?_i(t.stateNode.nextSibling):null;return!0}function pr(){Zt=Dn=null,bt=!1}function bu(){var t=wa;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),wa=null),t}function ro(t){wa===null?wa=[t]:wa.push(t)}var Tu=N(null),mr=null,$i=null;function Ua(t,n,a){ge(Tu,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=Tu.current,ee(Tu)}function Au(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ru(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=u;for(var z=0;z<n.length;z++)if(b.context===n[z]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Au(f.return,a,t),o||(g=null);break e}f=b.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Au(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function $r(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var b=u.type;Jn(u.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(u===ce.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}u=u.return}t!==null&&Ru(n,t,a,o),n.flags|=262144}function vl(t){for(t=t.firstContext;t!==null;){if(!Jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gr(t){mr=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return Op(mr,t)}function xl(t,n){return mr===null&&gr(t),Op(t,n)}function Op(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(s(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var _x=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},vx=r.unstable_scheduleCallback,xx=r.unstable_NormalPriority,un={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new _x,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&vx(xx,function(){t.controller.abort()})}var oo=null,wu=0,es=0,ts=null;function Sx(t,n){if(oo===null){var a=oo=[];wu=0,es=Lf(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wu++,n.then(Pp,Pp),n}function Pp(){if(--wu===0&&oo!==null){ts!==null&&(ts.status="fulfilled");var t=oo;oo=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Mx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Bp=D.S;D.S=function(t,n){xg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sx(t,n),Bp!==null&&Bp(t,n)};var _r=N(null);function Du(){var t=_r.current;return t!==null?t:Yt.pooledCache}function Sl(t,n){n===null?ge(_r,_r.current):ge(_r,n.pool)}function Ip(){var t=Du();return t===null?null:{parent:un._currentValue,pool:t}}var ns=Error(s(460)),Uu=Error(s(474)),Ml=Error(s(542)),yl={then:function(){}};function Fp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Gp(t),t;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Gp(t),t}throw xr=n,ns}}function vr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xr=a,ns):a}}var xr=null;function Hp(){if(xr===null)throw Error(s(459));var t=xr;return xr=null,t}function Gp(t){if(t===ns||t===Ml)throw Error(s(483))}var is=null,lo=0;function El(t){var n=lo;return lo+=1,is===null&&(is=[]),zp(is,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function bl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Vp(t){function n(Y,k){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[k],Y.flags|=16):Q.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Qi(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<k?(Y.flags|=67108866,k):Q):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,k,Q,pe){return k===null||k.tag!==6?(k=xu(Q,Y.mode,pe),k.return=Y,k):(k=u(k,Q),k.return=Y,k)}function z(Y,k,Q,pe){var Je=Q.type;return Je===C?fe(Y,k,Q.props.children,pe,Q.key):k!==null&&(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&vr(Je)===k.type)?(k=u(k,Q.props),co(k,Q),k.return=Y,k):(k=gl(Q.type,Q.key,Q.props,null,Y.mode,pe),co(k,Q),k.return=Y,k)}function J(Y,k,Q,pe){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=Su(Q,Y.mode,pe),k.return=Y,k):(k=u(k,Q.children||[]),k.return=Y,k)}function fe(Y,k,Q,pe,Je){return k===null||k.tag!==7?(k=hr(Q,Y.mode,pe,Je),k.return=Y,k):(k=u(k,Q),k.return=Y,k)}function _e(Y,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=xu(""+k,Y.mode,Q),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return Q=gl(k.type,k.key,k.props,null,Y.mode,Q),co(Q,k),Q.return=Y,Q;case A:return k=Su(k,Y.mode,Q),k.return=Y,k;case K:return k=vr(k),_e(Y,k,Q)}if(Z(k)||re(k))return k=hr(k,Y.mode,Q,null),k.return=Y,k;if(typeof k.then=="function")return _e(Y,El(k),Q);if(k.$$typeof===L)return _e(Y,xl(Y,k),Q);bl(Y,k)}return null}function ie(Y,k,Q,pe){var Je=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Je!==null?null:b(Y,k,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Je?z(Y,k,Q,pe):null;case A:return Q.key===Je?J(Y,k,Q,pe):null;case K:return Q=vr(Q),ie(Y,k,Q,pe)}if(Z(Q)||re(Q))return Je!==null?null:fe(Y,k,Q,pe,null);if(typeof Q.then=="function")return ie(Y,k,El(Q),pe);if(Q.$$typeof===L)return ie(Y,k,xl(Y,Q),pe);bl(Y,Q)}return null}function le(Y,k,Q,pe,Je){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return Y=Y.get(Q)||null,b(k,Y,""+pe,Je);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case M:return Y=Y.get(pe.key===null?Q:pe.key)||null,z(k,Y,pe,Je);case A:return Y=Y.get(pe.key===null?Q:pe.key)||null,J(k,Y,pe,Je);case K:return pe=vr(pe),le(Y,k,Q,pe,Je)}if(Z(pe)||re(pe))return Y=Y.get(Q)||null,fe(k,Y,pe,Je,null);if(typeof pe.then=="function")return le(Y,k,Q,El(pe),Je);if(pe.$$typeof===L)return le(Y,k,Q,xl(k,pe),Je);bl(k,pe)}return null}function Xe(Y,k,Q,pe){for(var Je=null,Dt=null,Ze=k,ft=k=0,Mt=null;Ze!==null&&ft<Q.length;ft++){Ze.index>ft?(Mt=Ze,Ze=null):Mt=Ze.sibling;var Ut=ie(Y,Ze,Q[ft],pe);if(Ut===null){Ze===null&&(Ze=Mt);break}t&&Ze&&Ut.alternate===null&&n(Y,Ze),k=f(Ut,k,ft),Dt===null?Je=Ut:Dt.sibling=Ut,Dt=Ut,Ze=Mt}if(ft===Q.length)return a(Y,Ze),bt&&Ji(Y,ft),Je;if(Ze===null){for(;ft<Q.length;ft++)Ze=_e(Y,Q[ft],pe),Ze!==null&&(k=f(Ze,k,ft),Dt===null?Je=Ze:Dt.sibling=Ze,Dt=Ze);return bt&&Ji(Y,ft),Je}for(Ze=o(Ze);ft<Q.length;ft++)Mt=le(Ze,Y,ft,Q[ft],pe),Mt!==null&&(t&&Mt.alternate!==null&&Ze.delete(Mt.key===null?ft:Mt.key),k=f(Mt,k,ft),Dt===null?Je=Mt:Dt.sibling=Mt,Dt=Mt);return t&&Ze.forEach(function(Za){return n(Y,Za)}),bt&&Ji(Y,ft),Je}function tt(Y,k,Q,pe){if(Q==null)throw Error(s(151));for(var Je=null,Dt=null,Ze=k,ft=k=0,Mt=null,Ut=Q.next();Ze!==null&&!Ut.done;ft++,Ut=Q.next()){Ze.index>ft?(Mt=Ze,Ze=null):Mt=Ze.sibling;var Za=ie(Y,Ze,Ut.value,pe);if(Za===null){Ze===null&&(Ze=Mt);break}t&&Ze&&Za.alternate===null&&n(Y,Ze),k=f(Za,k,ft),Dt===null?Je=Za:Dt.sibling=Za,Dt=Za,Ze=Mt}if(Ut.done)return a(Y,Ze),bt&&Ji(Y,ft),Je;if(Ze===null){for(;!Ut.done;ft++,Ut=Q.next())Ut=_e(Y,Ut.value,pe),Ut!==null&&(k=f(Ut,k,ft),Dt===null?Je=Ut:Dt.sibling=Ut,Dt=Ut);return bt&&Ji(Y,ft),Je}for(Ze=o(Ze);!Ut.done;ft++,Ut=Q.next())Ut=le(Ze,Y,ft,Ut.value,pe),Ut!==null&&(t&&Ut.alternate!==null&&Ze.delete(Ut.key===null?ft:Ut.key),k=f(Ut,k,ft),Dt===null?Je=Ut:Dt.sibling=Ut,Dt=Ut);return t&&Ze.forEach(function(NS){return n(Y,NS)}),bt&&Ji(Y,ft),Je}function qt(Y,k,Q,pe){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:e:{for(var Je=Q.key;k!==null;){if(k.key===Je){if(Je=Q.type,Je===C){if(k.tag===7){a(Y,k.sibling),pe=u(k,Q.props.children),pe.return=Y,Y=pe;break e}}else if(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&vr(Je)===k.type){a(Y,k.sibling),pe=u(k,Q.props),co(pe,Q),pe.return=Y,Y=pe;break e}a(Y,k);break}else n(Y,k);k=k.sibling}Q.type===C?(pe=hr(Q.props.children,Y.mode,pe,Q.key),pe.return=Y,Y=pe):(pe=gl(Q.type,Q.key,Q.props,null,Y.mode,pe),co(pe,Q),pe.return=Y,Y=pe)}return g(Y);case A:e:{for(Je=Q.key;k!==null;){if(k.key===Je)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(Y,k.sibling),pe=u(k,Q.children||[]),pe.return=Y,Y=pe;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}pe=Su(Q,Y.mode,pe),pe.return=Y,Y=pe}return g(Y);case K:return Q=vr(Q),qt(Y,k,Q,pe)}if(Z(Q))return Xe(Y,k,Q,pe);if(re(Q)){if(Je=re(Q),typeof Je!="function")throw Error(s(150));return Q=Je.call(Q),tt(Y,k,Q,pe)}if(typeof Q.then=="function")return qt(Y,k,El(Q),pe);if(Q.$$typeof===L)return qt(Y,k,xl(Y,Q),pe);bl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(Y,k.sibling),pe=u(k,Q),pe.return=Y,Y=pe):(a(Y,k),pe=xu(Q,Y.mode,pe),pe.return=Y,Y=pe),g(Y)):a(Y,k)}return function(Y,k,Q,pe){try{lo=0;var Je=qt(Y,k,Q,pe);return is=null,Je}catch(Ze){if(Ze===ns||Ze===Ml)throw Ze;var Dt=$n(29,Ze,null,Y.mode);return Dt.lanes=pe,Dt.return=Y,Dt}}}var Sr=Vp(!0),kp=Vp(!1),Na=!1;function Nu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Oa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ml(t),Ap(t,null,a),n}return pl(t,o,n,a),ml(t)}function uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Xs(t,a)}}function Ou(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Pu=!1;function fo(){if(Pu){var t=ts;if(t!==null)throw t}}function ho(t,n,a,o){Pu=!1;var u=t.updateQueue;Na=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var z=b,J=z.next;z.next=null,g===null?f=J:g.next=J,g=z;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,b=fe.lastBaseUpdate,b!==g&&(b===null?fe.firstBaseUpdate=J:b.next=J,fe.lastBaseUpdate=z))}if(f!==null){var _e=u.baseState;g=0,fe=J=z=null,b=f;do{var ie=b.lane&-536870913,le=ie!==b.lane;if(le?(St&ie)===ie:(o&ie)===ie){ie!==0&&ie===es&&(Pu=!0),fe!==null&&(fe=fe.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Xe=t,tt=b;ie=n;var qt=a;switch(tt.tag){case 1:if(Xe=tt.payload,typeof Xe=="function"){_e=Xe.call(qt,_e,ie);break e}_e=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=tt.payload,ie=typeof Xe=="function"?Xe.call(qt,_e,ie):Xe,ie==null)break e;_e=_({},_e,ie);break e;case 2:Na=!0}}ie=b.callback,ie!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[ie]:le.push(ie))}else le={lane:ie,tag:b.tag,payload:b.payload,callback:b.callback,next:null},fe===null?(J=fe=le,z=_e):fe=fe.next=le,g|=ie;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;le=b,b=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);fe===null&&(z=_e),u.baseState=z,u.firstBaseUpdate=J,u.lastBaseUpdate=fe,f===null&&(u.shared.lanes=0),za|=g,t.lanes=g,t.memoizedState=_e}}function Xp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Wp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Xp(a[t],n)}var as=N(null),Tl=N(0);function qp(t,n){t=ca,ge(Tl,t),ge(as,n),ca=t|n.baseLanes}function Bu(){ge(Tl,ca),ge(as,as.current)}function Iu(){ca=Tl.current,ee(as),ee(Tl)}var ei=N(null),gi=null;function Pa(t){var n=t.alternate;ge(an,an.current&1),ge(ei,t),gi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(gi=t)}function Fu(t){ge(an,an.current),ge(ei,t),gi===null&&(gi=t)}function Yp(t){t.tag===22?(ge(an,an.current),ge(ei,t),gi===null&&(gi=t)):Ba()}function Ba(){ge(an,an.current),ge(ei,ei.current)}function ti(t){ee(ei),gi===t&&(gi=null),ee(an)}var an=N(0);function Al(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wf(a)||qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,ct=null,Xt=null,fn=null,Rl=!1,rs=!1,Mr=!1,Cl=0,po=0,ss=null,yx=0;function en(){throw Error(s(321))}function zu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Jn(t[a],n[a]))return!1;return!0}function Hu(t,n,a,o,u,f){return ta=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=t===null||t.memoizedState===null?Dm:tf,Mr=!1,f=a(o,u),Mr=!1,rs&&(f=Zp(n,a,o,u)),jp(t),f}function jp(t){D.H=_o;var n=Xt!==null&&Xt.next!==null;if(ta=0,fn=Xt=ct=null,Rl=!1,po=0,ss=null,n)throw Error(s(300));t===null||dn||(t=t.dependencies,t!==null&&vl(t)&&(dn=!0))}function Zp(t,n,a,o){ct=t;var u=0;do{if(rs&&(ss=null),po=0,rs=!1,25<=u)throw Error(s(301));if(u+=1,fn=Xt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=Um,f=n(a,o)}while(rs);return f}function Ex(){var t=D.H,n=t.useState()[0];return n=typeof n.then=="function"?mo(n):n,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(ct.flags|=1024),n}function Gu(){var t=Cl!==0;return Cl=0,t}function Vu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ku(t){if(Rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Rl=!1}ta=0,fn=Xt=ct=null,rs=!1,po=Cl=0,ss=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ct.memoizedState=fn=t:fn=fn.next=t,fn}function rn(){if(Xt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var n=fn===null?ct.memoizedState:fn.next;if(n!==null)fn=n,Xt=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},fn===null?ct.memoizedState=fn=t:fn=fn.next=t}return fn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(t){var n=po;return po+=1,ss===null&&(ss=[]),t=zp(ss,t,n),n=ct,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Dm:tf),t}function Dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mo(t);if(t.$$typeof===L)return Un(t)}throw Error(s(438,String(t)))}function Xu(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function na(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=rn();return Wu(n,Xt,t)}function Wu(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var b=g=null,z=null,J=n,fe=!1;do{var _e=J.lane&-536870913;if(_e!==J.lane?(St&_e)===_e:(ta&_e)===_e){var ie=J.revertLane;if(ie===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_e===es&&(fe=!0);else if((ta&ie)===ie){J=J.next,ie===es&&(fe=!0);continue}else _e={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(b=z=_e,g=f):z=z.next=_e,ct.lanes|=ie,za|=ie;_e=J.action,Mr&&a(f,_e),f=J.hasEagerState?J.eagerState:a(f,_e)}else ie={lane:_e,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(b=z=ie,g=f):z=z.next=ie,ct.lanes|=_e,za|=_e;J=J.next}while(J!==null&&J!==n);if(z===null?g=f:z.next=b,!Jn(f,t.memoizedState)&&(dn=!0,fe&&(a=ts,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=z,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function qu(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Jn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Kp(t,n,a){var o=ct,u=rn(),f=bt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Jn((Xt||u).memoizedState,a);if(g&&(u.memoizedState=a,dn=!0),u=u.queue,Zu($p.bind(null,o,u,t),[t]),u.getSnapshot!==n||g||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,os(9,{destroy:void 0},Jp.bind(null,o,u,a,n),null),Yt===null)throw Error(s(349));f||(ta&127)!==0||Qp(o,n,a)}return a}function Qp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=wl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Jp(t,n,a,o){n.value=a,n.getSnapshot=o,em(n)&&tm(t)}function $p(t,n,a){return a(function(){em(n)&&tm(t)})}function em(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Jn(t,a)}catch{return!0}}function tm(t){var n=dr(t,2);n!==null&&jn(n,t,2)}function Yu(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),Mr){He(!0);try{a()}finally{He(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},n}function nm(t,n,a,o){return t.baseState=a,Wu(t,Xt,typeof o=="function"?o:na)}function bx(t,n,a,o,u){if(Ol(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};D.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,im(n,f)):(f.next=a.next,n.pending=a.next=f)}}function im(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=D.T,g={};D.T=g;try{var b=a(u,o),z=D.S;z!==null&&z(g,b),am(t,n,b)}catch(J){ju(t,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),D.T=f}}else try{f=a(u,o),am(t,n,f)}catch(J){ju(t,n,J)}}function am(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){rm(t,n,o)},function(o){return ju(t,n,o)}):rm(t,n,a)}function rm(t,n,a){n.status="fulfilled",n.value=a,sm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,im(t,a)))}function ju(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,sm(n),n=n.next;while(n!==o)}t.action=null}function sm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function om(t,n){return n}function lm(t,n){if(bt){var a=Yt.formState;if(a!==null){e:{var o=ct;if(bt){if(Zt){t:{for(var u=Zt,f=mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=_i(u.nextSibling),o=u.data==="F!";break e}}Da(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:om,lastRenderedState:n},a.queue=o,a=Rm.bind(null,ct,o),o.dispatch=a,o=Yu(!1),f=ef.bind(null,ct,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=bx.bind(null,ct,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function cm(t){var n=rn();return um(n,Xt,t)}function um(t,n,a){if(n=Wu(t,n,om)[0],t=Ul(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(g){throw g===ns?Ml:g}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,os(9,{destroy:void 0},Tx.bind(null,u,a),null)),[o,f,t]}function Tx(t,n){t.action=n}function fm(t){var n=rn(),a=Xt;if(a!==null)return um(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function os(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=wl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function dm(){return rn().memoizedState}function Nl(t,n,a,o){var u=Gn();ct.flags|=t,u.memoizedState=os(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ll(t,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Xt!==null&&o!==null&&zu(o,Xt.memoizedState.deps)?u.memoizedState=os(n,f,a,o):(ct.flags|=t,u.memoizedState=os(1|n,f,a,o))}function hm(t,n){Nl(8390656,8,t,n)}function Zu(t,n){Ll(2048,8,t,n)}function Ax(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=wl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function pm(t){var n=rn().memoizedState;return Ax({ref:n,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function mm(t,n){return Ll(4,2,t,n)}function gm(t,n){return Ll(4,4,t,n)}function _m(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function vm(t,n,a){a=a!=null?a.concat([t]):null,Ll(4,4,_m.bind(null,n,t),a)}function Ku(){}function xm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&zu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Sm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&zu(n,o[1]))return o[0];if(o=t(),Mr){He(!0);try{t()}finally{He(!1)}}return a.memoizedState=[o,n],o}function Qu(t,n,a){return a===void 0||(ta&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Mg(),ct.lanes|=t,za|=t,a)}function Mm(t,n,a,o){return Jn(a,n)?a:as.current!==null?(t=Qu(t,a,o),Jn(t,n)||(dn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(St&261930)===0?(dn=!0,t.memoizedState=a):(t=Mg(),ct.lanes|=t,za|=t,n)}function ym(t,n,a,o,u){var f=F.p;F.p=f!==0&&8>f?f:8;var g=D.T,b={};D.T=b,ef(t,!1,n,a);try{var z=u(),J=D.S;if(J!==null&&J(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var fe=Mx(z,o);go(t,n,fe,ai(t))}else go(t,n,o,ai(t))}catch(_e){go(t,n,{then:function(){},status:"rejected",reason:_e},ai())}finally{F.p=f,g!==null&&b.types!==null&&(g.types=b.types),D.T=g}}function Rx(){}function Ju(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Em(t).queue;ym(t,u,n,$,a===null?Rx:function(){return bm(t),a(o)})}function Em(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function bm(t){var n=Em(t);n.next===null&&(n=t.alternate.memoizedState),go(t,n.next.queue,{},ai())}function $u(){return Un(Lo)}function Tm(){return rn().memoizedState}function Am(){return rn().memoizedState}function Cx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();t=La(a);var o=Oa(n,t,a);o!==null&&(jn(o,n,a),uo(o,n,a)),n={cache:Cu()},t.payload=n;return}n=n.return}}function wx(t,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(t)?Cm(n,a):(a=_u(t,n,a,o),a!==null&&(jn(a,t,o),wm(a,n,o)))}function Rm(t,n,a){var o=ai();go(t,n,a,o)}function go(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(t))Cm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(u.hasEagerState=!0,u.eagerState=b,Jn(b,g))return pl(t,n,u,0),Yt===null&&hl(),!1}catch{}if(a=_u(t,n,u,o),a!==null)return jn(a,t,o),wm(a,n,o),!0}return!1}function ef(t,n,a,o){if(o={lane:2,revertLane:Lf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ol(t)){if(n)throw Error(s(479))}else n=_u(t,a,o,2),n!==null&&jn(n,t,2)}function Ol(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Cm(t,n){rs=Rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function wm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Xs(t,a)}}var _o={readContext:Un,use:Dl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};_o.useEffectEvent=en;var Dm={readContext:Un,use:Dl,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:hm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Nl(4194308,4,_m.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Nl(4194308,4,t,n)},useInsertionEffect:function(t,n){Nl(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var o=t();if(Mr){He(!0);try{t()}finally{He(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Mr){He(!0);try{a(n)}finally{He(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=wx.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=Yu(t);var n=t.queue,a=Rm.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ku,useDeferredValue:function(t,n){var a=Gn();return Qu(a,t,n)},useTransition:function(){var t=Yu(!1);return t=ym.bind(null,ct,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=Gn();if(bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Yt===null)throw Error(s(349));(St&127)!==0||Qp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,hm($p.bind(null,o,f,t),[t]),o.flags|=2048,os(9,{destroy:void 0},Jp.bind(null,o,f,a,n),null),a},useId:function(){var t=Gn(),n=Yt.identifierPrefix;if(bt){var a=Fi,o=Ii;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:$u,useFormState:lm,useActionState:lm,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ef.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:Xu,useCacheRefresh:function(){return Gn().memoizedState=Cx.bind(null,ct)},useEffectEvent:function(t){var n=Gn(),a={impl:t};return n.memoizedState=a,function(){if((Bt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},tf={readContext:Un,use:Dl,useCallback:xm,useContext:Un,useEffect:Zu,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:Sm,useReducer:Ul,useRef:dm,useState:function(){return Ul(na)},useDebugValue:Ku,useDeferredValue:function(t,n){var a=rn();return Mm(a,Xt.memoizedState,t,n)},useTransition:function(){var t=Ul(na)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:Kp,useId:Tm,useHostTransitionStatus:$u,useFormState:cm,useActionState:cm,useOptimistic:function(t,n){var a=rn();return nm(a,Xt,t,n)},useMemoCache:Xu,useCacheRefresh:Am};tf.useEffectEvent=pm;var Um={readContext:Un,use:Dl,useCallback:xm,useContext:Un,useEffect:Zu,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:Sm,useReducer:qu,useRef:dm,useState:function(){return qu(na)},useDebugValue:Ku,useDeferredValue:function(t,n){var a=rn();return Xt===null?Qu(a,t,n):Mm(a,Xt.memoizedState,t,n)},useTransition:function(){var t=qu(na)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:Kp,useId:Tm,useHostTransitionStatus:$u,useFormState:fm,useActionState:fm,useOptimistic:function(t,n){var a=rn();return Xt!==null?nm(a,Xt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:Am};Um.useEffectEvent=pm;function nf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var af={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ai(),u=La(o);u.payload=n,a!=null&&(u.callback=a),n=Oa(t,u,o),n!==null&&(jn(n,t,o),uo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ai(),u=La(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Oa(t,u,o),n!==null&&(jn(n,t,o),uo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ai(),o=La(a);o.tag=2,n!=null&&(o.callback=n),n=Oa(t,o,a),n!==null&&(jn(n,t,a),uo(n,t,a))}};function Nm(t,n,a,o,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,g):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,f):!0}function Lm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&af.enqueueReplaceState(n,n.state,null)}function yr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Om(t){dl(t)}function Pm(t){console.error(t)}function Bm(t){dl(t)}function Pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Im(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function rf(t,n,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(t,n)},a}function Fm(t){return t=La(t),t.tag=3,t}function zm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Im(n,a,o)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Im(n,a,o),typeof u!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Dx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?Yl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Df(t,o,u)),!1;case 22:return a.flags|=65536,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Df(t,o,u)),!1}throw Error(s(435,a.tag))}return Df(t,o,u),Yl(),!1}if(bt)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Eu&&(t=Error(s(422),{cause:o}),ro(di(t,a)))):(o!==Eu&&(n=Error(s(423),{cause:o}),ro(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=di(o,a),u=rf(t.stateNode,o,u),Ou(t,u),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:o});if(f=di(f,a),To===null?To=[f]:To.push(f),tn!==4&&(tn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=rf(a.stateNode,o,t),Ou(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ha===null||!Ha.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Fm(u),zm(u,t,a,o),Ou(a,u),!1}a=a.return}while(a!==null);return!1}var sf=Error(s(461)),dn=!1;function Nn(t,n,a,o){n.child=t===null?kp(n,null,a,o):Sr(n,t.child,a,o)}function Hm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var g={};for(var b in o)b!=="ref"&&(g[b]=o[b])}else g=o;return gr(n),o=Hu(t,n,a,g,f,u),b=Gu(),t!==null&&!dn?(Vu(t,n,u),ia(t,n,u)):(bt&&b&&Mu(n),n.flags|=1,Nn(t,n,o,u),n.child)}function Gm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!vu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Vm(t,n,f,o,u)):(t=gl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!pf(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(g,o)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=Qi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Vm(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(no(f,o)&&t.ref===n.ref)if(dn=!1,n.pendingProps=o=f,pf(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,ia(t,n,u)}return of(t,n,a,o,u)}function km(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Xm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?qp(n,f):Bu(),Yp(n);else return o=n.lanes=536870912,Xm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Sl(n,f.cachePool),qp(n,f),Ba(),n.memoizedState=null):(t!==null&&Sl(n,null),Bu(),Ba());return Nn(t,n,u,a),n.child}function vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Xm(t,n,a,o,u){var f=Du();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Sl(n,null),Bu(),Yp(n),t!==null&&$r(t,n,o,!0),n.childLanes=u,null}function Bl(t,n){return n=Fl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Wm(t,n,a){return Sr(n,t.child,null,a),t=Bl(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function Ux(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=Bl(n,o),n.lanes=536870912,vo(null,t);if(Fu(n),(t=Zt)?(t=i0(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Cp(t),a.return=n,n.child=a,Dn=n,Zt=null)):t=null,t===null)throw Da(n);return n.lanes=536870912,null}return Bl(n,o)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Fu(n),u)if(n.flags&256)n.flags&=-257,n=Wm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||$r(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(o=Yt,o!==null&&(g=Fr(o,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,dr(t,g),jn(o,t,g),sf;Yl(),n=Wm(t,n,a)}else t=f.treeContext,Zt=_i(g.nextSibling),Dn=n,bt=!0,wa=null,mi=!1,t!==null&&Up(n,t),n=Bl(n,o),n.flags|=4096;return n}return t=Qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Il(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function of(t,n,a,o,u){return gr(n),a=Hu(t,n,a,o,void 0,u),o=Gu(),t!==null&&!dn?(Vu(t,n,u),ia(t,n,u)):(bt&&o&&Mu(n),n.flags|=1,Nn(t,n,a,u),n.child)}function qm(t,n,a,o,u,f){return gr(n),n.updateQueue=null,a=Zp(n,o,a,u),jp(t),o=Gu(),t!==null&&!dn?(Vu(t,n,f),ia(t,n,f)):(bt&&o&&Mu(n),n.flags|=1,Nn(t,n,a,f),n.child)}function Ym(t,n,a,o,u){if(gr(n),n.stateNode===null){var f=Zr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Un(g)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Nu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Un(g):Zr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(nf(n,a,g,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&af.enqueueReplaceState(f,f.state,null),ho(n,o,f,u),fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,z=yr(a,b);f.props=z;var J=f.context,fe=a.contextType;g=Zr,typeof fe=="object"&&fe!==null&&(g=Un(fe));var _e=a.getDerivedStateFromProps;fe=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,fe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==g)&&Lm(n,f,o,g),Na=!1;var ie=n.memoizedState;f.state=ie,ho(n,o,f,u),fo(),J=n.memoizedState,b||ie!==J||Na?(typeof _e=="function"&&(nf(n,a,_e,o),J=n.memoizedState),(z=Na||Nm(n,a,z,o,ie,J,g))?(fe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=g,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Lu(t,n),g=n.memoizedProps,fe=yr(a,g),f.props=fe,_e=n.pendingProps,ie=f.context,J=a.contextType,z=Zr,typeof J=="object"&&J!==null&&(z=Un(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_e||ie!==z)&&Lm(n,f,o,z),Na=!1,ie=n.memoizedState,f.state=ie,ho(n,o,f,u),fo();var le=n.memoizedState;g!==_e||ie!==le||Na||t!==null&&t.dependencies!==null&&vl(t.dependencies)?(typeof b=="function"&&(nf(n,a,b,o),le=n.memoizedState),(fe=Na||Nm(n,a,fe,o,ie,le,z)||t!==null&&t.dependencies!==null&&vl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=z,o=fe):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Il(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Sr(n,t.child,null,u),n.child=Sr(n,null,a,u)):Nn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ia(t,n,u),t}function jm(t,n,a,o){return pr(),n.flags|=256,Nn(t,n,a,o),n.child}var lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(t){return{baseLanes:t,cachePool:Ip()}}function uf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function Zm(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Pa(n):Ba(),(t=Zt)?(t=i0(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Cp(t),a.return=n,n.child=a,Dn=n,Zt=null)):t=null,t===null)throw Da(n);return qf(t)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(Ba(),u=n.mode,b=Fl({mode:"hidden",children:b},u),o=hr(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=cf(a),o.childLanes=uf(t,g,a),n.memoizedState=lf,vo(null,o)):(Pa(n),ff(n,b))}var z=t.memoizedState;if(z!==null&&(b=z.dehydrated,b!==null)){if(f)n.flags&256?(Pa(n),n.flags&=-257,n=df(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),b=o.fallback,u=n.mode,o=Fl({mode:"visible",children:o.children},u),b=hr(b,u,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,Sr(n,t.child,null,a),o=n.child,o.memoizedState=cf(a),o.childLanes=uf(t,g,a),n.memoizedState=lf,n=vo(null,o));else if(Pa(n),qf(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var J=g.dgst;g=J,o=Error(s(419)),o.stack="",o.digest=g,ro({value:o,source:null,stack:null}),n=df(t,n,a)}else if(dn||$r(t,n,a,!1),g=(a&t.childLanes)!==0,dn||g){if(g=Yt,g!==null&&(o=Fr(g,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,dr(t,o),jn(g,t,o),sf;Wf(b)||Yl(),n=df(t,n,a)}else Wf(b)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Zt=_i(b.nextSibling),Dn=n,bt=!0,wa=null,mi=!1,t!==null&&Up(n,t),n=ff(n,o.children),n.flags|=4096);return n}return u?(Ba(),b=o.fallback,u=n.mode,z=t.child,J=z.sibling,o=Qi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,J!==null?b=Qi(J,b):(b=hr(b,u,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,vo(null,o),o=n.child,b=t.child.memoizedState,b===null?b=cf(a):(u=b.cachePool,u!==null?(z=un._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=Ip(),b={baseLanes:b.baseLanes|a,cachePool:u}),o.memoizedState=b,o.childLanes=uf(t,g,a),n.memoizedState=lf,vo(t.child,o)):(Pa(n),a=t.child,t=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function ff(t,n){return n=Fl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Fl(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function df(t,n,a){return Sr(n,t.child,null,a),t=ff(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Km(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Au(t.return,n,a)}function hf(t,n,a,o,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=o,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Qm(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var g=an.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,ge(an,g),Nn(t,n,o,a),o=bt?ao:0,!b&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Km(t,a,n);else if(t.tag===19)Km(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Al(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),hf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Al(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}hf(n,!0,a,null,f,o);break;case"together":hf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function pf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&vl(t)))}function Nx(t,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),Ua(n,un,t.memoizedState.cache),pr();break;case 27:case 5:Fe(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Fu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Zm(t,n,a):(Pa(n),t=ia(t,n,a),t!==null?t.sibling:null);Pa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Qm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ge(an,an.current),o)break;return null;case 22:return n.lanes=0,km(t,n,a,n.pendingProps);case 24:Ua(n,un,t.memoizedState.cache)}return ia(t,n,a)}function Jm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!pf(t,a)&&(n.flags&128)===0)return dn=!1,Nx(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,bt&&(n.flags&1048576)!==0&&Dp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=vr(n.elementType),n.type=t,typeof t=="function")vu(t)?(o=yr(t,o),n.tag=1,n=Ym(null,n,t,o,a)):(n.tag=0,n=of(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=Hm(null,n,t,o,a);break e}else if(u===B){n.tag=14,n=Gm(null,n,t,o,a);break e}}throw n=de(t)||t,Error(s(306,n,""))}}return n;case 0:return of(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=yr(o,n.pendingProps),Ym(t,n,o,u,a);case 3:e:{if(be(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Lu(t,n),ho(n,o,null,a);var g=n.memoizedState;if(o=g.cache,Ua(n,un,o),o!==f.cache&&Ru(n,[un],a,!0),fo(),o=g.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=jm(t,n,o,a);break e}else if(o!==u){u=di(Error(s(424)),n),ro(u),n=jm(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Zt=_i(t.firstChild),Dn=n,bt=!0,wa=null,mi=!0,a=kp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(pr(),o===u){n=ia(t,n,a);break e}Nn(t,n,o,a)}n=n.child}return n;case 26:return Il(t,n),t===null?(a=c0(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=ec(te.current).createElement(a),o[cn]=n,o[bn]=t,Ln(o,a,t),T(o),n.stateNode=o):n.memoizedState=c0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Fe(n),t===null&&bt&&(o=n.stateNode=s0(n.type,n.pendingProps,te.current),Dn=n,mi=!0,u=Zt,Xa(n.type)?(Yf=u,Zt=_i(o.firstChild)):Zt=u),Nn(t,n,n.pendingProps.children,a),Il(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=Zt)&&(o=lS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Dn=n,Zt=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Da(n)),Fe(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,o=f.children,Vf(u,f)?o=null:g!==null&&Vf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Hu(t,n,Ex,null,null,a),Lo._currentValue=u),Il(t,n),Nn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=Zt)&&(a=cS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Dn=n,Zt=null,t=!0):t=!1),t||Da(n)),null;case 13:return Zm(t,n,a);case 4:return be(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Sr(n,null,o,a):Nn(t,n,o,a),n.child;case 11:return Hm(t,n,n.type,n.pendingProps,a);case 7:return Nn(t,n,n.pendingProps,a),n.child;case 8:return Nn(t,n,n.pendingProps.children,a),n.child;case 12:return Nn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),Nn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gr(n),u=Un(u),o=o(u),n.flags|=1,Nn(t,n,o,a),n.child;case 14:return Gm(t,n,n.type,n.pendingProps,a);case 15:return Vm(t,n,n.type,n.pendingProps,a);case 19:return Qm(t,n,a);case 31:return Ux(t,n,a);case 22:return km(t,n,a,n.pendingProps);case 24:return gr(n),o=Un(un),t===null?(u=Du(),u===null&&(u=Yt,f=Cu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Nu(n),Ua(n,un,u)):((t.lanes&a)!==0&&(Lu(t,n),ho(n,null,null,a),fo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,un,o)):(o=f.cache,Ua(n,un,o),o!==u.cache&&Ru(n,[un],a,!0))),Nn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(t){t.flags|=4}function mf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Tg())t.flags|=8192;else throw xr=yl,Uu}else t.flags&=-16777217}function $m(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!p0(n))if(Tg())t.flags|=8192;else throw xr=yl,Uu}function zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?zt():536870912,t.lanes|=n,fs|=n)}function xo(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Lx(t,n,a){var o=n.pendingProps;switch(yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(un),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jr(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,bu())),Kt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(aa(n),f!==null?(Kt(n),$m(n,f)):(Kt(n),mf(n,u,null,o,a))):f?f!==t.memoizedState?(aa(n),Kt(n),$m(n,f)):(Kt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&aa(n),Kt(n),mf(n,u,t,o,a)),null;case 27:if(ht(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=Re.current,Jr(n)?Np(n):(t=s0(u,o,a),n.stateNode=t,aa(n))}return Kt(n),null;case 5:if(ht(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(f=Re.current,Jr(n))Np(n);else{var g=ec(te.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?g.createElement("select",{is:o.is}):g.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?g.createElement(u,{is:o.is}):g.createElement(u)}}f[cn]=n,f[bn]=o;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(Ln(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&aa(n)}}return Kt(n),mf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=te.current,Jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Zg(t.nodeValue,a)),t||Da(n,!0)}else t=ec(t).createTextNode(o),t[cn]=n,n.stateNode=t}return Kt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Jr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[cn]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),t=!1}else a=bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),Kt(n),null);case 4:return Ie(),t===null&&If(n.stateNode.containerInfo),Kt(n),null;case 10:return ea(n.type),Kt(n),null;case 19:if(ee(an),o=n.memoizedState,o===null)return Kt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)xo(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Al(t),f!==null){for(n.flags|=128,xo(o,!1),t=f.updateQueue,n.updateQueue=t,zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Rp(a,t),a=a.sibling;return ge(an,an.current&1|2),bt&&Ji(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>Xl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Al(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,zl(n,t),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return Kt(n),null}else 2*E()-o.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=an.current,ge(an,u?a&1|2:a&1),bt&&Ji(n,o.treeForkCount),t):(Kt(n),null);case 22:case 23:return ti(n),Iu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ee(_r),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(un),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ox(t,n){switch(yu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(un),Ie(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ee(an),null;case 4:return Ie(),null;case 10:return ea(n.type),null;case 22:case 23:return ti(n),Iu(),t!==null&&ee(_r),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(un),null;case 25:return null;default:return null}}function eg(t,n){switch(yu(n),n.tag){case 3:ea(un),Ie();break;case 26:case 27:case 5:ht(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:ee(an);break;case 10:ea(n.type);break;case 22:case 23:ti(n),Iu(),t!==null&&ee(_r);break;case 24:ea(un)}}function So(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,g=a.inst;o=f(),g.destroy=o}a=a.next}while(a!==u)}}catch(b){Vt(n,n.return,b)}}function Ia(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var g=o.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,u=n;var z=a,J=b;try{J()}catch(fe){Vt(u,z,fe)}}}o=o.next}while(o!==f)}}catch(fe){Vt(n,n.return,fe)}}function tg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Wp(n,a)}catch(o){Vt(t,t.return,o)}}}function ng(t,n,a){a.props=yr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function Mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Vt(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Vt(t,n,u)}else a.current=null}function ig(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Vt(t,t.return,u)}}function gf(t,n,a){try{var o=t.stateNode;nS(o,t.type,a,n),o[bn]=n}catch(u){Vt(t,t.return,u)}}function ag(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Xa(t.type)||t.tag===4}function _f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(vf(t,n,a),t=t.sibling;t!==null;)vf(t,n,a),t=t.sibling}function Hl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Hl(t,n,a),t=t.sibling;t!==null;)Hl(t,n,a),t=t.sibling}function rg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,o,a),n[cn]=t,n[bn]=a}catch(f){Vt(t,t.return,f)}}var ra=!1,hn=!1,xf=!1,sg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Px(t,n){if(t=t.containerInfo,Hf=oc,t=vp(t),fu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,b=-1,z=-1,J=0,fe=0,_e=t,ie=null;t:for(;;){for(var le;_e!==a||u!==0&&_e.nodeType!==3||(b=g+u),_e!==f||o!==0&&_e.nodeType!==3||(z=g+o),_e.nodeType===3&&(g+=_e.nodeValue.length),(le=_e.firstChild)!==null;)ie=_e,_e=le;for(;;){if(_e===t)break t;if(ie===a&&++J===u&&(b=g),ie===f&&++fe===o&&(z=g),(le=_e.nextSibling)!==null)break;_e=ie,ie=_e.parentNode}_e=le}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gf={focusedElem:t,selectionRange:a},oc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Xe=yr(a.type,u);t=o.getSnapshotBeforeUpdate(Xe,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Vt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function og(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(t,a),o&4&&So(5,a);break;case 1:if(oa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Vt(a,a.return,g)}else{var u=yr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Vt(a,a.return,g)}}o&64&&tg(a),o&512&&Mo(a,a.return);break;case 3:if(oa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Wp(t,n)}catch(g){Vt(a,a.return,g)}}break;case 27:n===null&&o&4&&rg(a);case 26:case 5:oa(t,a),n===null&&o&4&&ig(a),o&512&&Mo(a,a.return);break;case 12:oa(t,a);break;case 31:oa(t,a),o&4&&ug(t,a);break;case 13:oa(t,a),o&4&&fg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Xx.bind(null,a),uS(t,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||hn,u=ra;var f=hn;ra=o,(hn=n)&&!f?la(t,a,(a.subtreeFlags&8772)!==0):oa(t,a),ra=u,hn=f}break;case 30:break;default:oa(t,a)}}function lg(t){var n=t.alternate;n!==null&&(t.alternate=null,lg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&js(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Xn=!1;function sa(t,n,a){for(a=a.child;a!==null;)cg(t,n,a),a=a.sibling}function cg(t,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:hn||zi(a,n),sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||zi(a,n);var o=$t,u=Xn;Xa(a.type)&&($t=a.stateNode,Xn=!1),sa(t,n,a),Do(a.stateNode),$t=o,Xn=u;break;case 5:hn||zi(a,n);case 6:if(o=$t,u=Xn,$t=null,sa(t,n,a),$t=o,Xn=u,$t!==null)if(Xn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){Vt(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){Vt(a,n,f)}break;case 18:$t!==null&&(Xn?(t=$t,t0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xs(t)):t0($t,a.stateNode));break;case 4:o=$t,u=Xn,$t=a.stateNode.containerInfo,Xn=!0,sa(t,n,a),$t=o,Xn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),hn||Ia(4,a,n),sa(t,n,a);break;case 1:hn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ng(a,n,o)),sa(t,n,a);break;case 21:sa(t,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,sa(t,n,a),hn=o;break;default:sa(t,n,a)}}function ug(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xs(t)}catch(a){Vt(n,n.return,a)}}}function fg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xs(t)}catch(a){Vt(n,n.return,a)}}function Bx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new sg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new sg),n;default:throw Error(s(435,t.tag))}}function Gl(t,n){var a=Bx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Wx.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,g=n,b=g;e:for(;b!==null;){switch(b.tag){case 27:if(Xa(b.type)){$t=b.stateNode,Xn=!1;break e}break;case 5:$t=b.stateNode,Xn=!1;break e;case 3:case 4:$t=b.stateNode.containerInfo,Xn=!0;break e}b=b.return}if($t===null)throw Error(s(160));cg(f,g,u),$t=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)dg(n,t),n=n.sibling}var Ai=null;function dg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Ia(3,t,t.return),So(3,t),Ia(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(hn||a===null||zi(a,a.return)),o&64&&ra&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(Wn(n,t),qn(t),o&512&&(hn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[or]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Ln(f,o,a),f[cn]=t,T(f),o=f;break e;case"link":var g=d0("link","href",u).get(o+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break t}}f=u.createElement(o),Ln(f,o,a),u.head.appendChild(f);break;case"meta":if(g=d0("meta","content",u).get(o+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break t}}f=u.createElement(o),Ln(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[cn]=t,T(f),o=f}t.stateNode=o}else h0(u,t.type,t.stateNode);else t.stateNode=f0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?h0(u,t.type,t.stateNode):f0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&gf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(hn||a===null||zi(a,a.return)),a!==null&&o&4&&gf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(hn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{gn(u,"")}catch(Xe){Vt(t,t.return,Xe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,gf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(xf=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Xe){Vt(t,t.return,Xe)}}break;case 3:if(ic=null,u=Ai,Ai=tc(n.containerInfo),Wn(n,t),Ai=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(Xe){Vt(t,t.return,Xe)}xf&&(xf=!1,hg(t));break;case 4:o=Ai,Ai=tc(t.stateNode.containerInfo),Wn(n,t),qn(t),Ai=o;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gl(t,o)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gl(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,J=ra,fe=hn;if(ra=J||u,hn=fe||z,Wn(n,t),hn=fe,ra=J,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||ra||hn||Er(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=z.stateNode;var _e=z.memoizedProps.style,ie=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;b.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(Xe){Vt(z,z.return,Xe)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Xe){Vt(z,z.return,Xe)}}}else if(n.tag===18){if(a===null){z=n;try{var le=z.stateNode;u?n0(le,!0):n0(z.stateNode,!1)}catch(Xe){Vt(z,z.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Gl(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gl(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(ag(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=_f(t);Hl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(gn(g,""),a.flags&=-33);var b=_f(t);Hl(t,b,g);break;case 3:case 4:var z=a.stateNode.containerInfo,J=_f(t);vf(t,J,z);break;default:throw Error(s(161))}}catch(fe){Vt(t,t.return,fe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function hg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)og(t,n.alternate,n),n=n.sibling}function Er(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),Er(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ng(n,n.return,a),Er(n);break;case 27:Do(n.stateNode);case 26:case 5:zi(n,n.return),Er(n);break;case 22:n.memoizedState===null&&Er(n);break;case 30:Er(n);break;default:Er(n)}t=t.sibling}}function la(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),So(4,f);break;case 1:if(la(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Vt(o,o.return,J)}if(o=f,u=o.updateQueue,u!==null){var b=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Xp(z[u],b)}catch(J){Vt(o,o.return,J)}}a&&g&64&&tg(f),Mo(f,f.return);break;case 27:rg(f);case 26:case 5:la(u,f,a),a&&o===null&&g&4&&ig(f),Mo(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&g&4&&ug(u,f);break;case 13:la(u,f,a),a&&g&4&&fg(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),Mo(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function Sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&so(a))}function Mf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function Ri(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)pg(t,n,a,o),n=n.sibling}function pg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,o),u&2048&&So(9,n);break;case 1:Ri(t,n,a,o);break;case 3:Ri(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){Ri(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Vt(n,n.return,z)}}else Ri(t,n,a,o);break;case 31:Ri(t,n,a,o);break;case 13:Ri(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(t,n,a,o):yo(t,n):f._visibility&2?Ri(t,n,a,o):(f._visibility|=2,ls(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Sf(g,n);break;case 24:Ri(t,n,a,o),u&2048&&Mf(n.alternate,n);break;default:Ri(t,n,a,o)}}function ls(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,b=a,z=o,J=g.flags;switch(g.tag){case 0:case 11:case 15:ls(f,g,b,z,u),So(8,g);break;case 23:break;case 22:var fe=g.stateNode;g.memoizedState!==null?fe._visibility&2?ls(f,g,b,z,u):yo(f,g):(fe._visibility|=2,ls(f,g,b,z,u)),u&&J&2048&&Sf(g.alternate,g);break;case 24:ls(f,g,b,z,u),u&&J&2048&&Mf(g.alternate,g);break;default:ls(f,g,b,z,u)}n=n.sibling}}function yo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:yo(a,o),u&2048&&Sf(o.alternate,o);break;case 24:yo(a,o),u&2048&&Mf(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var Eo=8192;function cs(t,n,a){if(t.subtreeFlags&Eo)for(t=t.child;t!==null;)mg(t,n,a),t=t.sibling}function mg(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&Eo&&t.memoizedState!==null&&yS(a,Ai,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var o=Ai;Ai=tc(t.stateNode.containerInfo),cs(t,n,a),Ai=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Eo,Eo=16777216,cs(t,n,a),Eo=o):cs(t,n,a));break;default:cs(t,n,a)}}function gg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,vg(o,t)}gg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_g(t),t=t.sibling}function _g(t){switch(t.tag){case 0:case 11:case 15:bo(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:bo(t);break;case 12:bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vl(t)):bo(t);break;default:bo(t)}}function Vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,vg(o,t)}gg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}t=t.sibling}}function vg(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(lg(o),o===a){Sn=null;break e}if(u!==null){u.return=f,Sn=u;break e}Sn=f}}}var Ix={getCacheForType:function(t){var n=Un(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Un(un).controller.signal}},Fx=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Yt=null,vt=null,St=0,Gt=0,ni=null,Fa=!1,us=!1,yf=!1,ca=0,tn=0,za=0,br=0,Ef=0,ii=0,fs=0,To=null,Yn=null,bf=!1,kl=0,xg=0,Xl=1/0,Wl=null,Ha=null,_n=0,Ga=null,ds=null,ua=0,Tf=0,Af=null,Sg=null,Ao=0,Rf=null;function ai(){return(Bt&2)!==0&&St!==0?St&-St:D.T!==null?Lf():qs()}function Mg(){if(ii===0)if((St&536870912)===0||bt){var t=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),ii=t}else ii=536870912;return t=ei.current,t!==null&&(t.flags|=32),ii}function jn(t,n,a){(t===Yt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(hs(t,0),Va(t,St,ii,!1)),Pn(t,a),((Bt&2)===0||t!==Yt)&&(t===Yt&&((Bt&2)===0&&(br|=a),tn===4&&Va(t,St,ii,!1)),Hi(t))}function yg(t,n,a){if((Bt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ce(t,n),u=o?Gx(t,n):wf(t,n,!0),f=o;do{if(u===0){us&&!o&&Va(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!zx(a)){u=wf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var b=t;u=To;var z=b.current.memoizedState.isDehydrated;if(z&&(hs(b,g).flags|=256),g=wf(b,g,!1),g!==2){if(yf&&!z){b.errorRecoveryDisabledLanes|=f,br|=f,u=4;break e}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){hs(t,0),Va(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Va(o,n,ii,!Fa);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=kl+300-E(),10<u)){if(Va(o,n,ii,!Fa),ve(o,0,!0)!==0)break e;ua=n,o.timeoutHandle=$g(Eg.bind(null,o,a,Yn,Wl,bf,n,ii,br,fs,Fa,f,"Throttled",-0,0),u);break e}Eg(o,a,Yn,Wl,bf,n,ii,br,fs,Fa,f,null,-0,0)}}break}while(!0);Hi(t)}function Eg(t,n,a,o,u,f,g,b,z,J,fe,_e,ie,le){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},mg(n,f,_e);var Xe=(f&62914560)===f?kl-E():(f&4194048)===f?xg-E():0;if(Xe=ES(_e,Xe),Xe!==null){ua=f,t.cancelPendingCommit=Xe(Ug.bind(null,t,n,f,a,o,u,g,b,z,fe,_e,null,ie,le)),Va(t,f,g,!J);return}}Ug(t,n,f,a,o,u,g,b,z)}function zx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(t,n,a,o){n&=~Ef,n&=~br,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Pe(u),g=1<<f;o[f]=-1,u&=~g}a!==0&&il(t,a,n)}function ql(){return(Bt&6)===0?(Ro(0),!1):!0}function Cf(){if(vt!==null){if(Gt===0)var t=vt.return;else t=vt,$i=mr=null,ku(t),is=null,lo=0,t=vt;for(;t!==null;)eg(t.alternate,t),t=t.return;vt=null}}function hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,rS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ua=0,Cf(),Yt=t,vt=a=Qi(t.current,null),St=n,Gt=0,ni=null,Fa=!1,us=Ce(t,n),yf=!1,fs=ii=Ef=br=za=tn=0,Yn=To=null,bf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Pe(o),f=1<<u;n|=t[u],o&=~f}return ca=n,hl(),a}function bg(t,n){ct=null,D.H=_o,n===ns||n===Ml?(n=Hp(),Gt=3):n===Uu?(n=Hp(),Gt=4):Gt=n===sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,vt===null&&(tn=1,Pl(t,di(n,t.current)))}function Tg(){var t=ei.current;return t===null?!0:(St&4194048)===St?gi===null:(St&62914560)===St||(St&536870912)!==0?t===gi:!1}function Ag(){var t=D.H;return D.H=_o,t===null?_o:t}function Rg(){var t=D.A;return D.A=Ix,t}function Yl(){tn=4,Fa||(St&4194048)!==St&&ei.current!==null||(us=!0),(za&134217727)===0&&(br&134217727)===0||Yt===null||Va(Yt,St,ii,!1)}function wf(t,n,a){var o=Bt;Bt|=2;var u=Ag(),f=Rg();(Yt!==t||St!==n)&&(Wl=null,hs(t,n)),n=!1;var g=tn;e:do try{if(Gt!==0&&vt!==null){var b=vt,z=ni;switch(Gt){case 8:Cf(),g=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var J=Gt;if(Gt=0,ni=null,ps(t,b,z,J),a&&us){g=0;break e}break;default:J=Gt,Gt=0,ni=null,ps(t,b,z,J)}}Hx(),g=tn;break}catch(fe){bg(t,fe)}while(!0);return n&&t.shellSuspendCounter++,$i=mr=null,Bt=o,D.H=u,D.A=f,vt===null&&(Yt=null,St=0,hl()),g}function Hx(){for(;vt!==null;)Cg(vt)}function Gx(t,n){var a=Bt;Bt|=2;var o=Ag(),u=Rg();Yt!==t||St!==n?(Wl=null,Xl=E()+500,hs(t,n)):us=Ce(t,n);e:do try{if(Gt!==0&&vt!==null){n=vt;var f=ni;t:switch(Gt){case 1:Gt=0,ni=null,ps(t,n,f,1);break;case 2:case 9:if(Fp(f)){Gt=0,ni=null,wg(n);break}n=function(){Gt!==2&&Gt!==9||Yt!==t||(Gt=7),Hi(t)},f.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Fp(f)?(Gt=0,ni=null,wg(n)):(Gt=0,ni=null,ps(t,n,f,7));break;case 5:var g=null;switch(vt.tag){case 26:g=vt.memoizedState;case 5:case 27:var b=vt;if(g?p0(g):b.stateNode.complete){Gt=0,ni=null;var z=b.sibling;if(z!==null)vt=z;else{var J=b.return;J!==null?(vt=J,jl(J)):vt=null}break t}}Gt=0,ni=null,ps(t,n,f,5);break;case 6:Gt=0,ni=null,ps(t,n,f,6);break;case 8:Cf(),tn=6;break e;default:throw Error(s(462))}}Vx();break}catch(fe){bg(t,fe)}while(!0);return $i=mr=null,D.H=o,D.A=u,Bt=a,vt!==null?0:(Yt=null,St=0,hl(),tn)}function Vx(){for(;vt!==null&&!je();)Cg(vt)}function Cg(t){var n=Jm(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?jl(t):vt=n}function wg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=qm(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=qm(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:ku(n);default:eg(a,n),n=vt=Rp(n,ca),n=Jm(a,n,ca)}t.memoizedProps=t.pendingProps,n===null?jl(t):vt=n}function ps(t,n,a,o){$i=mr=null,ku(n),is=null,lo=0;var u=n.return;try{if(Dx(t,u,n,a,St)){tn=1,Pl(t,di(a,t.current)),vt=null;return}}catch(f){if(u!==null)throw vt=u,f;tn=1,Pl(t,di(a,t.current)),vt=null;return}n.flags&32768?(bt||o===1?t=!0:us||(St&536870912)!==0?t=!1:(Fa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),Dg(n,t)):jl(n)}function jl(t){var n=t;do{if((n.flags&32768)!==0){Dg(n,Fa);return}t=n.return;var a=Lx(n.alternate,n,ca);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);tn===0&&(tn=5)}function Dg(t,n){do{var a=Ox(t.alternate,t);if(a!==null){a.flags&=32767,vt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=a}while(t!==null);tn=6,vt=null}function Ug(t,n,a,o,u,f,g,b,z){t.cancelPendingCommit=null;do Zl();while(_n!==0);if((Bt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=gu,yi(t,a,f,g,b,z),t===Yt&&(vt=Yt=null,St=0),ds=n,Ga=t,ua=a,Tf=f,Af=u,Sg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,qx(ue,function(){return Bg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,u=F.p,F.p=2,g=Bt,Bt|=4;try{Px(t,n,a)}finally{Bt=g,F.p=u,D.T=o}}_n=1,Ng(),Lg(),Og()}}function Ng(){if(_n===1){_n=0;var t=Ga,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var o=F.p;F.p=2;var u=Bt;Bt|=4;try{dg(n,t);var f=Gf,g=vp(t.containerInfo),b=f.focusedElem,z=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&_p(b.ownerDocument.documentElement,b)){if(z!==null&&fu(b)){var J=z.start,fe=z.end;if(fe===void 0&&(fe=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(fe,b.value.length);else{var _e=b.ownerDocument||document,ie=_e&&_e.defaultView||window;if(ie.getSelection){var le=ie.getSelection(),Xe=b.textContent.length,tt=Math.min(z.start,Xe),qt=z.end===void 0?tt:Math.min(z.end,Xe);!le.extend&&tt>qt&&(g=qt,qt=tt,tt=g);var Y=gp(b,tt),k=gp(b,qt);if(Y&&k&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var Q=_e.createRange();Q.setStart(Y.node,Y.offset),le.removeAllRanges(),tt>qt?(le.addRange(Q),le.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),le.addRange(Q))}}}}for(_e=[],le=b;le=le.parentNode;)le.nodeType===1&&_e.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_e.length;b++){var pe=_e[b];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}oc=!!Hf,Gf=Hf=null}finally{Bt=u,F.p=o,D.T=a}}t.current=n,_n=2}}function Lg(){if(_n===2){_n=0;var t=Ga,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var o=F.p;F.p=2;var u=Bt;Bt|=4;try{og(t,n.alternate,n)}finally{Bt=u,F.p=o,D.T=a}}_n=3}}function Og(){if(_n===4||_n===3){_n=0,U();var t=Ga,n=ds,a=ua,o=Sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,ds=Ga=null,Pg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ha=null),zr(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=D.T,u=F.p,F.p=2,D.T=null;try{for(var f=t.onRecoverableError,g=0;g<o.length;g++){var b=o[g];f(b.value,{componentStack:b.stack})}}finally{D.T=n,F.p=u}}(ua&3)!==0&&Zl(),Hi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Rf?Ao++:(Ao=0,Rf=t):Ao=0,Ro(0)}}function Pg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function Zl(){return Ng(),Lg(),Og(),Bg()}function Bg(){if(_n!==5)return!1;var t=Ga,n=Tf;Tf=0;var a=zr(ua),o=D.T,u=F.p;try{F.p=32>a?32:a,D.T=null,a=Af,Af=null;var f=Ga,g=ua;if(_n=0,ds=Ga=null,ua=0,(Bt&6)!==0)throw Error(s(331));var b=Bt;if(Bt|=4,_g(f.current),pg(f,f.current,g,a),Bt=b,Ro(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Ee,f)}catch{}return!0}finally{F.p=u,D.T=o,Pg(t,n)}}function Ig(t,n,a){n=di(a,n),n=rf(t.stateNode,n,2),t=Oa(t,n,2),t!==null&&(Pn(t,2),Hi(t))}function Vt(t,n,a){if(t.tag===3)Ig(t,t,a);else for(;n!==null;){if(n.tag===3){Ig(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ha===null||!Ha.has(o))){t=di(a,t),a=Fm(2),o=Oa(n,a,2),o!==null&&(zm(a,o,n,t),Pn(o,2),Hi(o));break}}n=n.return}}function Df(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Fx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(yf=!0,u.add(a),t=kx.bind(null,t,n,a),n.then(t,t))}function kx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(St&a)===a&&(tn===4||tn===3&&(St&62914560)===St&&300>E()-kl?(Bt&2)===0&&hs(t,0):Ef|=a,fs===St&&(fs=0)),Hi(t)}function Fg(t,n){n===0&&(n=zt()),t=dr(t,n),t!==null&&(Pn(t,n),Hi(t))}function Xx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Fg(t,a)}function Wx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Fg(t,a)}function qx(t,n){return gt(t,n)}var Kl=null,ms=null,Uf=!1,Ql=!1,Nf=!1,ka=0;function Hi(t){t!==ms&&t.next===null&&(ms===null?Kl=ms=t:ms=ms.next=t),Ql=!0,Uf||(Uf=!0,jx())}function Ro(t,n){if(!Nf&&Ql){Nf=!0;do for(var a=!1,o=Kl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var g=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Pe(42|t)+1)-1,f&=u&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Vg(o,f))}else f=St,f=ve(o,o===Yt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ce(o,f)||(a=!0,Vg(o,f));o=o.next}while(a);Nf=!1}}function Yx(){zg()}function zg(){Ql=Uf=!1;var t=0;ka!==0&&aS()&&(t=ka);for(var n=E(),a=null,o=Kl;o!==null;){var u=o.next,f=Hg(o,n);f===0?(o.next=null,a===null?Kl=u:a.next=u,u===null&&(ms=a)):(a=o,(t!==0||(f&3)!==0)&&(Ql=!0)),o=u}_n!==0&&_n!==5||Ro(t),ka!==0&&(ka=0)}function Hg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Pe(f),b=1<<g,z=u[g];z===-1?((b&a)===0||(b&o)!==0)&&(u[g]=it(b,n)):z<=n&&(t.expiredLanes|=b),f&=~b}if(n=Yt,a=St,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&wt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&wt(o),zr(a)){case 2:case 8:a=xe;break;case 32:a=ue;break;case 268435456:a=we;break;default:a=ue}return o=Gg.bind(null,t),a=gt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&wt(o),t.callbackPriority=2,t.callbackNode=null,2}function Gg(t,n){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zl()&&t.callbackNode!==a)return null;var o=St;return o=ve(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(yg(t,o,n),Hg(t,E()),t.callbackNode!=null&&t.callbackNode===a?Gg.bind(null,t):null)}function Vg(t,n){if(Zl())return null;yg(t,n,!0)}function jx(){sS(function(){(Bt&6)!==0?gt(he,Yx):zg()})}function Lf(){if(ka===0){var t=es;t===0&&(t=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),ka=t}return ka}function kg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rl(""+t)}function Xg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Zx(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=kg((u[bn]||null).action),g=o.submitter;g&&(n=(n=g[bn]||null)?kg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new cl("action","action",null,o,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ka!==0){var z=g?Xg(u,g):new FormData(u);Ju(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(b.preventDefault(),z=g?Xg(u,g):new FormData(u),Ju(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Of=0;Of<mu.length;Of++){var Pf=mu[Of],Kx=Pf.toLowerCase(),Qx=Pf[0].toUpperCase()+Pf.slice(1);Ti(Kx,"on"+Qx)}Ti(Mp,"onAnimationEnd"),Ti(yp,"onAnimationIteration"),Ti(Ep,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(hx,"onTransitionRun"),Ti(px,"onTransitionStart"),Ti(mx,"onTransitionCancel"),Ti(bp,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function Wg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var g=o.length-1;0<=g;g--){var b=o[g],z=b.instance,J=b.currentTarget;if(b=b.listener,z!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=J;try{f(u)}catch(fe){dl(fe)}u.currentTarget=null,f=z}else for(g=0;g<o.length;g++){if(b=o[g],z=b.instance,J=b.currentTarget,b=b.listener,z!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=J;try{f(u)}catch(fe){dl(fe)}u.currentTarget=null,f=z}}}}function xt(t,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var o=t+"__bubble";a.has(o)||(qg(n,t,2,!1),a.add(o))}function Bf(t,n,a){var o=0;n&&(o|=4),qg(a,t,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function If(t){if(!t[Jl]){t[Jl]=!0,q.forEach(function(a){a!=="selectionchange"&&(Jx.has(a)||Bf(a,!1,t),Bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,Bf("selectionchange",!1,n))}}function qg(t,n,a,o){switch(M0(n)){case 2:var u=AS;break;case 8:u=RS;break;default:u=Jf}a=u.bind(null,n,a,t),u=void 0,!nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Ff(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var b=o.stateNode.containerInfo;if(b===u)break;if(g===4)for(g=o.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;b!==null;){if(g=ba(b),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){o=f=g;continue e}b=b.parentNode}}o=o.return}Qh(function(){var J=f,fe=eu(a),_e=[];e:{var ie=Tp.get(t);if(ie!==void 0){var le=cl,Xe=t;switch(t){case"keypress":if(ol(a)===0)break e;case"keydown":case"keyup":le=Wv;break;case"focusin":Xe="focus",le=su;break;case"focusout":Xe="blur",le=su;break;case"beforeblur":case"afterblur":le=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=jv;break;case Mp:case yp:case Ep:le=Bv;break;case bp:le=Kv;break;case"scroll":case"scrollend":le=Uv;break;case"wheel":le=Jv;break;case"copy":case"cut":case"paste":le=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=np;break;case"toggle":case"beforetoggle":le=ex}var tt=(n&4)!==0,qt=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?ie!==null?ie+"Capture":null:ie;tt=[];for(var k=J,Q;k!==null;){var pe=k;if(Q=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||Q===null||Y===null||(pe=Zs(k,Y),pe!=null&&tt.push(wo(k,pe,Q))),qt)break;k=k.return}0<tt.length&&(ie=new le(ie,Xe,null,a,fe),_e.push({event:ie,listeners:tt}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ie&&a!==$c&&(Xe=a.relatedTarget||a.fromElement)&&(ba(Xe)||Xe[Ei]))break e;if((le||ie)&&(ie=fe.window===fe?fe:(ie=fe.ownerDocument)?ie.defaultView||ie.parentWindow:window,le?(Xe=a.relatedTarget||a.toElement,le=J,Xe=Xe?ba(Xe):null,Xe!==null&&(qt=c(Xe),tt=Xe.tag,Xe!==qt||tt!==5&&tt!==27&&tt!==6)&&(Xe=null)):(le=null,Xe=J),le!==Xe)){if(tt=ep,pe="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=np,pe="onPointerLeave",Y="onPointerEnter",k="pointer"),qt=le==null?ie:lr(le),Q=Xe==null?ie:lr(Xe),ie=new tt(pe,k+"leave",le,a,fe),ie.target=qt,ie.relatedTarget=Q,pe=null,ba(fe)===J&&(tt=new tt(Y,k+"enter",Xe,a,fe),tt.target=Q,tt.relatedTarget=qt,pe=tt),qt=pe,le&&Xe)t:{for(tt=$x,Y=le,k=Xe,Q=0,pe=Y;pe;pe=tt(pe))Q++;pe=0;for(var Je=k;Je;Je=tt(Je))pe++;for(;0<Q-pe;)Y=tt(Y),Q--;for(;0<pe-Q;)k=tt(k),pe--;for(;Q--;){if(Y===k||k!==null&&Y===k.alternate){tt=Y;break t}Y=tt(Y),k=tt(k)}tt=null}else tt=null;le!==null&&Yg(_e,ie,le,tt,!1),Xe!==null&&qt!==null&&Yg(_e,qt,Xe,tt,!0)}}e:{if(ie=J?lr(J):window,le=ie.nodeName&&ie.nodeName.toLowerCase(),le==="select"||le==="input"&&ie.type==="file")var Dt=up;else if(lp(ie))if(fp)Dt=ux;else{Dt=lx;var Ze=ox}else le=ie.nodeName,!le||le.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?J&&bi(J.elementType)&&(Dt=up):Dt=cx;if(Dt&&(Dt=Dt(t,J))){cp(_e,Dt,a,fe);break e}Ze&&Ze(t,ie,J),t==="focusout"&&J&&ie.type==="number"&&J.memoizedProps.value!=null&&An(ie,"number",ie.value)}switch(Ze=J?lr(J):window,t){case"focusin":(lp(Ze)||Ze.contentEditable==="true")&&(qr=Ze,du=J,io=null);break;case"focusout":io=du=qr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,xp(_e,a,fe);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":xp(_e,a,fe)}var ft;if(lu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Wr?sp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(ip&&a.locale!=="ko"&&(Wr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Wr&&(ft=Jh()):(Ra=fe,iu="value"in Ra?Ra.value:Ra.textContent,Wr=!0)),Ze=$l(J,Mt),0<Ze.length&&(Mt=new tp(Mt,t,null,a,fe),_e.push({event:Mt,listeners:Ze}),ft?Mt.data=ft:(ft=op(a),ft!==null&&(Mt.data=ft)))),(ft=nx?ix(t,a):ax(t,a))&&(Mt=$l(J,"onBeforeInput"),0<Mt.length&&(Ze=new tp("onBeforeInput","beforeinput",null,a,fe),_e.push({event:Ze,listeners:Mt}),Ze.data=ft)),Zx(_e,t,J,a,fe)}Wg(_e,n)})}function wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function $l(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Zs(t,a),u!=null&&o.unshift(wo(t,u,f)),u=Zs(t,n),u!=null&&o.push(wo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function $x(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yg(t,n,a,o,u){for(var f=n._reactName,g=[];a!==null&&a!==o;){var b=a,z=b.alternate,J=b.stateNode;if(b=b.tag,z!==null&&z===o)break;b!==5&&b!==26&&b!==27||J===null||(z=J,u?(J=Zs(a,f),J!=null&&g.unshift(wo(a,J,z))):u||(J=Zs(a,f),J!=null&&g.push(wo(a,J,z)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var eS=/\r\n?/g,tS=/\u0000|\uFFFD/g;function jg(t){return(typeof t=="string"?t:""+t).replace(eS,`
`).replace(tS,"")}function Zg(t,n){return n=jg(n),jg(t)===n}function Wt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||gn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&gn(t,""+o);break;case"className":$e(t,"class",o);break;case"tabIndex":$e(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,a,o);break;case"style":Vr(t,o,f);break;case"data":if(n!=="object"){$e(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=rl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Wt(t,n,"name",u.name,u,null),Wt(t,n,"formEncType",u.formEncType,u,null),Wt(t,n,"formMethod",u.formMethod,u,null),Wt(t,n,"formTarget",u.formTarget,u,null)):(Wt(t,n,"encType",u.encType,u,null),Wt(t,n,"method",u.method,u,null),Wt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=rl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Zi);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=rl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":xt("beforetoggle",t),xt("toggle",t),qe(t,"popover",o);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wv.get(a)||a,qe(t,a,o))}}function zf(t,n,a,o,u,f){switch(a){case"style":Vr(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?gn(t,o):(typeof o=="number"||typeof o=="bigint")&&gn(t,""+o);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):qe(t,a,o)}}}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,f,g,a,null)}}u&&Wt(t,n,"srcSet",a.srcSet,a,null),o&&Wt(t,n,"src",a.src,a,null);return;case"input":xt("invalid",t);var b=f=g=u=null,z=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var fe=a[o];if(fe!=null)switch(o){case"name":u=fe;break;case"type":g=fe;break;case"checked":z=fe;break;case"defaultChecked":J=fe;break;case"value":f=fe;break;case"defaultValue":b=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Wt(t,n,o,fe,a,null)}}ji(t,f,b,z,J,g,u,!1);return;case"select":xt("invalid",t),o=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":o=b;default:Wt(t,n,u,b,a,null)}n=f,a=g,t.multiple=!!o,n!=null?ui(t,!!o,n,!1):a!=null&&ui(t,!!o,a,!0);return;case"textarea":xt("invalid",t),f=u=o=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Wt(t,n,g,b,a,null)}Rn(t,o,u,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(o=a[z],o!=null)&&(z==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Wt(t,n,z,o,a,null));return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(o=0;o<Co.length;o++)xt(Co[o],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,J,o,a,null)}return;default:if(bi(n)){for(fe in a)a.hasOwnProperty(fe)&&(o=a[fe],o!==void 0&&zf(t,n,fe,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Wt(t,n,b,o,a,null))}function nS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,b=null,z=null,J=null,fe=null;for(le in a){var _e=a[le];if(a.hasOwnProperty(le)&&_e!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":z=_e;default:o.hasOwnProperty(le)||Wt(t,n,le,null,o,_e)}}for(var ie in o){var le=o[ie];if(_e=a[ie],o.hasOwnProperty(ie)&&(le!=null||_e!=null))switch(ie){case"type":f=le;break;case"name":u=le;break;case"checked":J=le;break;case"defaultChecked":fe=le;break;case"value":g=le;break;case"defaultValue":b=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==_e&&Wt(t,n,ie,le,o,_e)}}Tn(t,g,b,z,J,fe,f,u);return;case"select":le=g=b=ie=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":le=z;default:o.hasOwnProperty(f)||Wt(t,n,f,null,o,z)}for(u in o)if(f=o[u],z=a[u],o.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":ie=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==z&&Wt(t,n,u,f,o,z)}n=b,a=g,o=le,ie!=null?ui(t,!!a,ie,!1):!!o!=!!a&&(n!=null?ui(t,!!a,n,!0):ui(t,!!a,a?[]:"",!1));return;case"textarea":le=ie=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Wt(t,n,b,null,o,u)}for(g in o)if(u=o[g],f=a[g],o.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":ie=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Wt(t,n,g,u,o,f)}Ht(t,ie,le);return;case"option":for(var Xe in a)ie=a[Xe],a.hasOwnProperty(Xe)&&ie!=null&&!o.hasOwnProperty(Xe)&&(Xe==="selected"?t.selected=!1:Wt(t,n,Xe,null,o,ie));for(z in o)ie=o[z],le=a[z],o.hasOwnProperty(z)&&ie!==le&&(ie!=null||le!=null)&&(z==="selected"?t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol":Wt(t,n,z,ie,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ie=a[tt],a.hasOwnProperty(tt)&&ie!=null&&!o.hasOwnProperty(tt)&&Wt(t,n,tt,null,o,ie);for(J in o)if(ie=o[J],le=a[J],o.hasOwnProperty(J)&&ie!==le&&(ie!=null||le!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,n));break;default:Wt(t,n,J,ie,o,le)}return;default:if(bi(n)){for(var qt in a)ie=a[qt],a.hasOwnProperty(qt)&&ie!==void 0&&!o.hasOwnProperty(qt)&&zf(t,n,qt,void 0,o,ie);for(fe in o)ie=o[fe],le=a[fe],!o.hasOwnProperty(fe)||ie===le||ie===void 0&&le===void 0||zf(t,n,fe,ie,o,le);return}}for(var Y in a)ie=a[Y],a.hasOwnProperty(Y)&&ie!=null&&!o.hasOwnProperty(Y)&&Wt(t,n,Y,null,o,ie);for(_e in o)ie=o[_e],le=a[_e],!o.hasOwnProperty(_e)||ie===le||ie==null&&le==null||Wt(t,n,_e,ie,o,le)}function Kg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,g=u.initiatorType,b=u.duration;if(f&&b&&Kg(g)){for(g=0,b=u.responseEnd,o+=1;o<a.length;o++){var z=a[o],J=z.startTime;if(J>b)break;var fe=z.transferSize,_e=z.initiatorType;fe&&Kg(_e)&&(z=z.responseEnd,g+=fe*(z<b?1:(b-J)/(z-J)))}if(--o,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Hf=null,Gf=null;function ec(t){return t.nodeType===9?t:t.ownerDocument}function Qg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kf=null;function aS(){var t=window.event;return t&&t.type==="popstate"?t===kf?!1:(kf=t,!0):(kf=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,rS=typeof clearTimeout=="function"?clearTimeout:void 0,e0=typeof Promise=="function"?Promise:void 0,sS=typeof queueMicrotask=="function"?queueMicrotask:typeof e0<"u"?function(t){return e0.resolve(null).then(t).catch(oS)}:$g;function oS(t){setTimeout(function(){throw t})}function Xa(t){return t==="head"}function t0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),xs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Do(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[or]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Do(t.ownerDocument.body);a=u}while(a);xs(n)}function n0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xf(a),js(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function lS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[or])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function cS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function i0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function Wf(t){return t.data==="$?"||t.data==="$~"}function qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function uS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Yf=null;function a0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return _i(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function r0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function s0(t,n,a){switch(n=ec(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Do(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);js(t)}var vi=new Map,o0=new Set;function tc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fa=F.d;F.d={f:fS,r:dS,D:hS,C:pS,L:mS,m:gS,X:vS,S:_S,M:xS};function fS(){var t=fa.f(),n=ql();return t||n}function dS(t){var n=Ta(t);n!==null&&n.tag===5&&n.type==="form"?bm(n):fa.r(t)}var gs=typeof document>"u"?null:document;function l0(t,n,a){var o=gs;if(o&&typeof n=="string"&&n){var u=at(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),o0.has(u)||(o0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Ln(n,"link",t),T(n),o.head.appendChild(n)))}}function hS(t){fa.D(t),l0("dns-prefetch",t,null)}function pS(t,n){fa.C(t,n),l0("preconnect",t,n)}function mS(t,n,a){fa.L(t,n,a);var o=gs;if(o&&t&&n){var u='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+at(a.imageSizes)+'"]')):u+='[href="'+at(t)+'"]';var f=u;switch(n){case"style":f=_s(t);break;case"script":f=vs(t)}vi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Uo(f))||n==="script"&&o.querySelector(No(f))||(n=o.createElement("link"),Ln(n,"link",t),T(n),o.head.appendChild(n)))}}function gS(t,n){fa.m(t,n);var a=gs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vs(t)}if(!vi.has(f)&&(t=_({rel:"modulepreload",href:t},n),vi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(f)))return}o=a.createElement("link"),Ln(o,"link",t),T(o),a.head.appendChild(o)}}}function _S(t,n,a){fa.S(t,n,a);var o=gs;if(o&&t){var u=Aa(o).hoistableStyles,f=_s(t);n=n||"default";var g=u.get(f);if(!g){var b={loading:0,preload:null};if(g=o.querySelector(Uo(f)))b.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(f))&&jf(t,a);var z=g=o.createElement("link");T(z),Ln(z,"link",t),z._p=new Promise(function(J,fe){z.onload=J,z.onerror=fe}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,nc(g,n,o)}g={type:"stylesheet",instance:g,count:1,state:b},u.set(f,g)}}}function vS(t,n){fa.X(t,n);var a=gs;if(a&&t){var o=Aa(a).hoistableScripts,u=vs(t),f=o.get(u);f||(f=a.querySelector(No(u)),f||(t=_({src:t,async:!0},n),(n=vi.get(u))&&Zf(t,n),f=a.createElement("script"),T(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function xS(t,n){fa.M(t,n);var a=gs;if(a&&t){var o=Aa(a).hoistableScripts,u=vs(t),f=o.get(u);f||(f=a.querySelector(No(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=vi.get(u))&&Zf(t,n),f=a.createElement("script"),T(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function c0(t,n,a,o){var u=(u=te.current)?tc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=Aa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_s(a.href);var f=Aa(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(Uo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,a),f||SS(u,t,a,g.state))),n&&o===null)throw Error(s(528,""));return g}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=Aa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function _s(t){return'href="'+at(t)+'"'}function Uo(t){return'link[rel="stylesheet"]['+t+"]"}function u0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function SS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ln(n,"link",a),T(n),t.head.appendChild(n))}function vs(t){return'[src="'+at(t)+'"]'}function No(t){return"script[async]"+t}function f0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+at(a.href)+'"]');if(o)return n.instance=o,T(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),T(o),Ln(o,"style",u),nc(o,a.precedence,t),n.instance=o;case"stylesheet":u=_s(a.href);var f=t.querySelector(Uo(u));if(f)return n.state.loading|=4,n.instance=f,T(f),f;o=u0(a),(u=vi.get(u))&&jf(o,u),f=(t.ownerDocument||t).createElement("link"),T(f);var g=f;return g._p=new Promise(function(b,z){g.onload=b,g.onerror=z}),Ln(f,"link",o),n.state.loading|=4,nc(f,a.precedence,t),n.instance=f;case"script":return f=vs(a.src),(u=t.querySelector(No(f)))?(n.instance=u,T(u),u):(o=a,(u=vi.get(f))&&(o=_({},a),Zf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),T(u),Ln(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nc(o,a.precedence,t));return n.instance}function nc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,g=0;g<o.length;g++){var b=o[g];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ic=null;function d0(t,n,a){if(ic===null){var o=new Map,u=ic=new Map;u.set(a,o)}else u=ic,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[or]||f[cn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var b=o.get(g);b?b.push(f):o.set(g,[f])}}return o}function h0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function MS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function p0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_s(o.href),f=n.querySelector(Uo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ac.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,o=u0(o),(u=vi.get(u))&&jf(o,u),f=f.createElement("link"),T(f);var g=f;g._p=new Promise(function(b,z){g.onload=b,g.onerror=z}),Ln(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ac.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Kf=0;function ES(t,n){return t.stylesheets&&t.count===0&&sc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&sc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Kf===0&&(Kf=62500*iS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&sc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Kf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var rc=null;function sc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,rc=new Map,n.forEach(bS,t),rc=null,ac.call(t))}function bS(t,n){if(!(n.state.loading&4)){var a=rc.get(t);if(a)var o=a.get(null);else{a=new Map,rc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),o=g)}o&&a.set(null,o)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||o,f===o&&a.set(null,u),a.set(g,u),this.count++,o=ac.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Lo={$$typeof:L,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function TS(t,n,a,o,u,f,g,b,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function m0(t,n,a,o,u,f,g,b,z,J,fe,_e){return t=new TS(t,n,a,g,z,J,fe,_e,b),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),t.current=f,f.stateNode=t,n=Cu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Nu(f),t}function g0(t){return t?(t=Zr,t):Zr}function _0(t,n,a,o,u,f){u=g0(u),o.context===null?o.context=u:o.pendingContext=u,o=La(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Oa(t,o,n),a!==null&&(jn(a,t,n),uo(a,t,n))}function v0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Qf(t,n){v0(t,n),(t=t.alternate)&&v0(t,n)}function x0(t){if(t.tag===13||t.tag===31){var n=dr(t,67108864);n!==null&&jn(n,t,67108864),Qf(t,67108864)}}function S0(t){if(t.tag===13||t.tag===31){var n=ai();n=Ws(n);var a=dr(t,n);a!==null&&jn(a,t,n),Qf(t,n)}}var oc=!0;function AS(t,n,a,o){var u=D.T;D.T=null;var f=F.p;try{F.p=2,Jf(t,n,a,o)}finally{F.p=f,D.T=u}}function RS(t,n,a,o){var u=D.T;D.T=null;var f=F.p;try{F.p=8,Jf(t,n,a,o)}finally{F.p=f,D.T=u}}function Jf(t,n,a,o){if(oc){var u=$f(o);if(u===null)Ff(t,n,o,lc,a),y0(t,o);else if(wS(u,t,n,a,o))o.stopPropagation();else if(y0(t,o),n&4&&-1<CS.indexOf(t)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=ye(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var z=1<<31-Pe(g);b.entanglements[1]|=z,g&=~z}Hi(f),(Bt&6)===0&&(Xl=E()+500,Ro(0))}}break;case 31:case 13:b=dr(f,2),b!==null&&jn(b,f,2),ql(),Qf(f,2)}if(f=$f(o),f===null&&Ff(t,n,o,lc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Ff(t,n,o,null,a)}}function $f(t){return t=eu(t),ed(t)}var lc=null;function ed(t){if(lc=null,t=ba(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return lc=t,null}function M0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case he:return 2;case xe:return 8;case ue:case Ke:return 32;case we:return 268435456;default:return 32}default:return 32}}var td=!1,Wa=null,qa=null,Ya=null,Oo=new Map,Po=new Map,ja=[],CS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y0(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function Bo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&x0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function wS(t,n,a,o,u){switch(n){case"focusin":return Wa=Bo(Wa,t,n,a,o,u),!0;case"dragenter":return qa=Bo(qa,t,n,a,o,u),!0;case"mouseover":return Ya=Bo(Ya,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Oo.set(f,Bo(Oo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Po.set(f,Bo(Po.get(f)||null,t,n,a,o,u)),!0}return!1}function E0(t){var n=ba(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Bi(t.priority,function(){S0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Bi(t.priority,function(){S0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=$f(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);$c=o,a.target.dispatchEvent(o),$c=null}else return n=Ta(a),n!==null&&x0(n),t.blockedOn=a,!1;n.shift()}return!0}function b0(t,n,a){cc(t)&&a.delete(n)}function DS(){td=!1,Wa!==null&&cc(Wa)&&(Wa=null),qa!==null&&cc(qa)&&(qa=null),Ya!==null&&cc(Ya)&&(Ya=null),Oo.forEach(b0),Po.forEach(b0)}function uc(t,n){t.blockedOn===n&&(t.blockedOn=null,td||(td=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,DS)))}var fc=null;function T0(t){fc!==t&&(fc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fc===t&&(fc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ed(o||a)===null)continue;break}var f=Ta(a);f!==null&&(t.splice(n,3),n-=3,Ju(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xs(t){function n(z){return uc(z,t)}Wa!==null&&uc(Wa,t),qa!==null&&uc(qa,t),Ya!==null&&uc(Ya,t),Oo.forEach(n),Po.forEach(n);for(var a=0;a<ja.length;a++){var o=ja[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)E0(a),a.blockedOn===null&&ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],g=u[bn]||null;if(typeof f=="function")g||T0(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[bn]||null)b=g.formAction;else if(ed(u)!==null)continue}else b=g.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),T0(a)}}}function A0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function nd(t){this._internalRoot=t}dc.prototype.render=nd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ai();_0(a,o,t,n,null,null)},dc.prototype.unmount=nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;_0(t.current,2,null,t,null,null),ql(),n[Ei]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var n=qs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,t),a===0&&E0(t)}};var R0=e.version;if(R0!=="19.2.4")throw Error(s(527,R0,"19.2.4"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var US={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{Ee=hc.inject(US),Te=hc}catch{}}return Fo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Om,f=Pm,g=Bm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=m0(t,1,!1,null,null,a,o,null,u,f,g,A0),t[Ei]=n.current,If(t),new nd(n)},Fo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Om,g=Pm,b=Bm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=m0(t,1,!0,n,a??null,o,u,z,f,g,b,A0),n.context=g0(null),a=n.current,o=ai(),o=Ws(o),u=La(o),u.callback=null,Oa(a,u,o),a=o,n.current.lanes=a,Pn(n,a),Hi(n),t[Ei]=n.current,If(t),new dc(n)},Fo.version="19.2.4",Fo}var I0;function VS(){if(I0)return rd.exports;I0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),rd.exports=GS(),rd.exports}var kS=VS();const XS=({onComplete:r})=>{const[e,i]=zn.useState(""),s="<Aljazy Banaemeh />";return zn.useEffect(()=>{let l=0;const c=setInterval(()=>{i(s.substring(0,l)),l++,l>s.length&&(clearInterval(c),setTimeout(()=>{r()},1e3))},100);return()=>clearInterval(c)},[r]),me.jsx("div",{className:"fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center",children:me.jsxs("div",{className:"mb-4 text-4xl font-mono font-bold",children:[e,me.jsx("span",{className:"animate-blink ml-1",children:" | "}),me.jsx("div",{className:"w-[220px] h-[2px] bg-gray-800 rounded relative overflow-hidden",children:me.jsx("div",{className:"w-[40%] h-full bg-green-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"})})]})})},WS=({menuOpen:r,setMenuOpen:e})=>(zn.useEffect(()=>{document.body.style.overflow=r?"hidden":""},[r]),me.jsx("nav",{className:"fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg",children:me.jsx("div",{className:"max-w-5xl mx-auto px-4",children:me.jsxs("div",{className:"flex items-center justify-between h-16",children:[me.jsxs("a",{href:"#home",className:"font-mono text-xl font-bold text-white",children:["AL",me.jsx("span",{className:"text-green-500",children:"JAZ"}),"Y"]}),me.jsx("div",{className:"flex items-center justify-center w-25 h-8 cursor-pointer z-40 md:hidden text-2xl text-white",onClick:()=>e(!r),children:"☰"}),me.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[me.jsx("a",{href:"#home",className:"text-gray-300 hover:text-white transition-colors",children:"Home"}),me.jsx("a",{href:"#about",className:"text-gray-300 hover:text-white transition-colors",children:"About"}),me.jsx("a",{href:"#project",className:"text-gray-300 hover:text-white transition-colors",children:"Projects"}),me.jsx("a",{href:"#contact",className:"text-gray-300 hover:text-white transition-colors",children:"Contact"})]})]})})})),qS=({menuOpen:r,setMenuOpen:e})=>me.jsxs("div",{className:`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center 
                        transition-all duration-300 ease-in-out

                        ${r?"h-screen opacity-100 pointer-events-auto":"h-0 opacity-0 pointer-events-none"}
                        `,children:[me.jsx("button",{onClick:()=>e(!1),className:"absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer","aria-label":"Close Menu",children:"x"}),me.jsx("a",{href:"#home",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                                                        ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Home"}),me.jsx("a",{href:"#about",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                                                        ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"About"}),me.jsx("a",{href:"#project",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                                                        ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Projects"}),me.jsx("a",{href:"#contact",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                                                        ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Contact"})]}),Yc=({children:r})=>{const e=zn.useRef(null);return zn.useEffect(()=>{const i=new IntersectionObserver(s=>{s.forEach(l=>{l.isIntersecting&&e.current.classList.add("visible")})},{threshold:.2,rootMargin:"0px 0px -50px 0px"});return e.current&&i.observe(e.current),()=>i.disconnect()},[]),me.jsx("div",{ref:e,className:"reveal",children:r})};const jc="182",YS=0,F0=1,jS=2,Pc=1,ZS=2,qo=3,Sa=0,yn=1,oi=2,Li=0,Os=1,z0=2,H0=3,G0=4,KS=5,Nr=100,QS=101,JS=102,$S=103,eM=104,tM=200,nM=201,iM=202,aM=203,kd=204,Xd=205,rM=206,sM=207,oM=208,lM=209,cM=210,uM=211,fM=212,dM=213,hM=214,Wd=0,Gc=1,qd=2,Bs=3,Yd=4,jd=5,Zd=6,Kd=7,V_=0,pM=1,mM=2,qi=0,k_=1,X_=2,W_=3,q_=4,Y_=5,j_=6,Z_=7,K_=300,Ir=301,Is=302,Qd=303,Jd=304,Zc=306,$d=1e3,_a=1001,eh=1002,On=1003,gM=1004,pc=1005,nn=1006,cd=1007,Or=1008,Hn=1009,Q_=1010,J_=1011,jo=1012,Hh=1013,Oi=1014,Xi=1015,Ma=1016,Gh=1017,Vh=1018,Fs=1020,$_=35902,ev=35899,tv=1021,nv=1022,Ni=1023,ya=1026,nr=1027,iv=1028,kh=1029,zs=1030,Xh=1031,Wh=1033,Bc=33776,Ic=33777,Fc=33778,zc=33779,th=35840,nh=35841,ih=35842,ah=35843,rh=36196,sh=37492,oh=37496,lh=37488,ch=37489,uh=37490,fh=37491,dh=37808,hh=37809,ph=37810,mh=37811,gh=37812,_h=37813,vh=37814,xh=37815,Sh=37816,Mh=37817,yh=37818,Eh=37819,bh=37820,Th=37821,Ah=36492,Rh=36494,Ch=36495,wh=36283,Dh=36284,Uh=36285,Nh=36286,Qo=3200,_M=0,vM=1,ki="",on="srgb",ar="srgb-linear",Vc="linear",kt="srgb",Ss=7680,V0=519,xM=512,SM=513,MM=514,qh=515,yM=516,EM=517,Yh=518,bM=519,k0=35044,Lh="300 es",Wi=2e3,kc=2001;function av(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function TM(){const r=Xc("canvas");return r.style.display="block",r}const X0={};function W0(...r){const e="THREE."+r.shift();console.log(e,...r)}function st(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Nt(...r){const e="THREE."+r.shift();console.error(e,...r)}function Zo(...r){const e=r.join(" ");e in X0||(X0[e]=!0,st(...r))}function AM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class rr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=Math.PI/180,Oh=180/Math.PI;function Jo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function At(r,e,i){return Math.max(e,Math.min(i,r))}function RM(r,e){return(r%e+e)%e}function fd(r,e,i){return(1-i)*r+i*e}function zo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,i=0){_t.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $o{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],v=s[l+2],_=s[l+3],S=c[d+0],M=c[d+1],A=c[d+2],C=c[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_;return}if(h>=1){e[i+0]=S,e[i+1]=M,e[i+2]=A,e[i+3]=C;return}if(_!==C||m!==S||p!==M||v!==A){let y=m*S+p*M+v*A+_*C;y<0&&(S=-S,M=-M,A=-A,C=-C,y=-y);let x=1-h;if(y<.9995){const O=Math.acos(y),L=Math.sin(O);x=Math.sin(x*O)/L,h=Math.sin(h*O)/L,m=m*x+S*h,p=p*x+M*h,v=v*x+A*h,_=_*x+C*h}else{m=m*x+S*h,p=p*x+M*h,v=v*x+A*h,_=_*x+C*h;const O=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=O,p*=O,v*=O,_*=O}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],_=c[d],S=c[d+1],M=c[d+2],A=c[d+3];return e[i]=h*A+v*_+m*M-p*S,e[i+1]=m*A+v*S+p*_-h*M,e[i+2]=p*A+v*M+h*S-m*_,e[i+3]=v*A-h*_-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),_=h(c/2),S=m(s/2),M=m(l/2),A=m(c/2);switch(d){case"XYZ":this._x=S*v*_+p*M*A,this._y=p*M*_-S*v*A,this._z=p*v*A+S*M*_,this._w=p*v*_-S*M*A;break;case"YXZ":this._x=S*v*_+p*M*A,this._y=p*M*_-S*v*A,this._z=p*v*A-S*M*_,this._w=p*v*_+S*M*A;break;case"ZXY":this._x=S*v*_-p*M*A,this._y=p*M*_+S*v*A,this._z=p*v*A+S*M*_,this._w=p*v*_-S*M*A;break;case"ZYX":this._x=S*v*_-p*M*A,this._y=p*M*_+S*v*A,this._z=p*v*A-S*M*_,this._w=p*v*_+S*M*A;break;case"YZX":this._x=S*v*_+p*M*A,this._y=p*M*_+S*v*A,this._z=p*v*A-S*M*_,this._w=p*v*_-S*M*A;break;case"XZY":this._x=S*v*_-p*M*A,this._y=p*M*_-S*v*A,this._z=p*v*A+S*M*_,this._w=p*v*_+S*M*A;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=s+h+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(d-l)*M}else if(s>h&&s>_){const M=2*Math.sqrt(1+s-h-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-s-_);this._w=(c-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-s-h);this._w=(d-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+d*h+l*p-c*m,this._y=l*v+d*m+c*h-s*p,this._z=c*v+d*p+s*m-l*h,this._w=d*v-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,s=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(q0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(q0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),v=2*(h*i-c*l),_=2*(c*s-d*i);return this.x=i+m*p+d*_-h*v,this.y=s+m*v+h*p-c*_,this.z=l+m*_+c*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dd=new oe,q0=new $o;class dt{constructor(e,i,s,l,c,d,h,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p)}set(e,i,s,l,c,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],v=s[4],_=s[7],S=s[2],M=s[5],A=s[8],C=l[0],y=l[3],x=l[6],O=l[1],L=l[4],P=l[7],I=l[2],H=l[5],B=l[8];return c[0]=d*C+h*O+m*I,c[3]=d*y+h*L+m*H,c[6]=d*x+h*P+m*B,c[1]=p*C+v*O+_*I,c[4]=p*y+v*L+_*H,c[7]=p*x+v*P+_*B,c[2]=S*C+M*O+A*I,c[5]=S*y+M*L+A*H,c[8]=S*x+M*P+A*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-s*c*v+s*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=v*d-h*p,S=h*m-v*c,M=p*c-d*m,A=i*_+s*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=_*C,e[1]=(l*p-v*s)*C,e[2]=(h*s-l*d)*C,e[3]=S*C,e[4]=(v*i-l*m)*C,e[5]=(l*c-h*i)*C,e[6]=M*C,e[7]=(s*m-p*i)*C,e[8]=(d*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(hd.makeScale(e,i)),this}rotate(e){return this.premultiply(hd.makeRotation(-e)),this}translate(e,i){return this.premultiply(hd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new dt,Y0=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),j0=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CM(){const r={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===kt&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ki?Vc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ar]:{primaries:e,whitePoint:s,transfer:Vc,toXYZ:Y0,fromXYZ:j0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:s,transfer:kt,toXYZ:Y0,fromXYZ:j0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),r}const Ct=CM();function va(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ms;class wM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ms===void 0&&(Ms=Xc("canvas")),Ms.width=e.width,Ms.height=e.height;const l=Ms.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ms}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=va(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(va(i[s]/255)*255):i[s]=va(i[s]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DM=0;class jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(pd(l[d].image)):c.push(pd(l[d]))}else c=pd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function pd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let UM=0;const md=new oe;class En extends rr{constructor(e=En.DEFAULT_IMAGE,i=En.DEFAULT_MAPPING,s=_a,l=_a,c=nn,d=Or,h=Ni,m=Hn,p=En.DEFAULT_ANISOTROPY,v=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Jo(),this.name="",this.source=new jh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $d:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $d:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=K_;En.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,i=0,s=0,l=1){ln.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],v=m[4],_=m[8],S=m[1],M=m[5],A=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+C)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,P=(M+1)/2,I=(x+1)/2,H=(v+S)/4,B=(_+C)/4,K=(A+y)/4;return L>P&&L>I?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=H/s,c=B/s):P>I?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=H/l,c=K/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=B/c,l=K/c),this.set(s,l,c,i),this}let O=Math.sqrt((y-A)*(y-A)+(_-C)*(_-C)+(S-v)*(S-v));return Math.abs(O)<.001&&(O=1),this.x=(y-A)/O,this.y=(_-C)/O,this.z=(S-v)/O,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this.w=At(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this.w=At(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NM extends rr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new En(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new jh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends NM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class rv extends En{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LM extends En{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ci):Ci.fromBufferAttribute(c,d),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mc.copy(s.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),gc.subVectors(this.max,Ho),ys.subVectors(e.a,Ho),Es.subVectors(e.b,Ho),bs.subVectors(e.c,Ho),Ka.subVectors(Es,ys),Qa.subVectors(bs,Es),Tr.subVectors(ys,bs);let i=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-Tr.z,Tr.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,Tr.z,0,-Tr.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-Tr.y,Tr.x,0];return!gd(i,ys,Es,bs,gc)||(i=[1,0,0,0,1,0,0,0,1],!gd(i,ys,Es,bs,gc))?!1:(_c.crossVectors(Ka,Qa),i=[_c.x,_c.y,_c.z],gd(i,ys,Es,bs,gc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const da=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Ci=new oe,mc=new el,ys=new oe,Es=new oe,bs=new oe,Ka=new oe,Qa=new oe,Tr=new oe,Ho=new oe,gc=new oe,_c=new oe,Ar=new oe;function gd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Ar.fromArray(r,c);const h=l.x*Math.abs(Ar.x)+l.y*Math.abs(Ar.y)+l.z*Math.abs(Ar.z),m=e.dot(Ar),p=i.dot(Ar),v=s.dot(Ar);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const OM=new el,Go=new oe,_d=new oe;class Zh{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):OM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Go,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(_d)),this.expandByPoint(Go.copy(e.center).sub(_d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ha=new oe,vd=new oe,vc=new oe,Ja=new oe,xd=new oe,xc=new oe,Sd=new oe;class PM{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){vd.copy(e).add(i).multiplyScalar(.5),vc.copy(i).sub(e).normalize(),Ja.copy(this.origin).sub(vd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(vc),h=Ja.dot(this.direction),m=-Ja.dot(vc),p=Ja.lengthSq(),v=Math.abs(1-d*d);let _,S,M,A;if(v>0)if(_=d*m-h,S=d*h-m,A=c*v,_>=0)if(S>=-A)if(S<=A){const C=1/v;_*=C,S*=C,M=_*(_+d*S+2*h)+S*(d*_+S+2*m)+p}else S=c,_=Math.max(0,-(d*S+h)),M=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(d*S+h)),M=-_*_+S*(S+2*m)+p;else S<=-A?(_=Math.max(0,-(-d*c+h)),S=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p):S<=A?(_=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(_=Math.max(0,-(d*c+h)),S=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p);else S=d>0?-c:c,_=Math.max(0,-(d*S+h)),M=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(vd).addScaledVector(vc,S),M}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(c=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(c=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(h=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,s,l,c){xd.subVectors(i,e),xc.subVectors(s,e),Sd.crossVectors(xd,xc);let d=this.direction.dot(Sd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ja.subVectors(this.origin,e);const m=h*this.direction.dot(xc.crossVectors(Ja,xc));if(m<0)return null;const p=h*this.direction.dot(xd.cross(Ja));if(p<0||m+p>d)return null;const v=-h*Ja.dot(Sd);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(e,i,s,l,c,d,h,m,p,v,_,S,M,A,C,y){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p,v,_,S,M,A,C,y)}set(e,i,s,l,c,d,h,m,p,v,_,S,M,A,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=M,x[7]=A,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ts.setFromMatrixColumn(e,0).length(),c=1/Ts.setFromMatrixColumn(e,1).length(),d=1/Ts.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const S=d*v,M=d*_,A=h*v,C=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=M+A*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*v,M=m*_,A=p*v,C=p*_;i[0]=S+C*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*_,i[5]=d*v,i[9]=-h,i[2]=M*h-A,i[6]=C+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*v,M=m*_,A=p*v,C=p*_;i[0]=S-C*h,i[4]=-d*_,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*v,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*v,M=d*_,A=h*v,C=h*_;i[0]=m*v,i[4]=A*p-M,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*v,i[4]=C-S*_,i[8]=A*_+M,i[1]=_,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*_+A,i[10]=S-C*_}else if(e.order==="XZY"){const S=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+C,i[5]=d*v,i[9]=M*_-A,i[2]=A*_-M,i[6]=h*v,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BM,e,IM)}lookAt(e,i,s){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),$a.crossVectors(s,ri),$a.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),$a.crossVectors(s,ri)),$a.normalize(),Sc.crossVectors(ri,$a),l[0]=$a.x,l[4]=Sc.x,l[8]=ri.x,l[1]=$a.y,l[5]=Sc.y,l[9]=ri.y,l[2]=$a.z,l[6]=Sc.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],v=s[1],_=s[5],S=s[9],M=s[13],A=s[2],C=s[6],y=s[10],x=s[14],O=s[3],L=s[7],P=s[11],I=s[15],H=l[0],B=l[4],K=l[8],R=l[12],w=l[1],V=l[5],re=l[9],ae=l[13],de=l[2],Z=l[6],D=l[10],F=l[14],$=l[3],Se=l[7],Me=l[11],N=l[15];return c[0]=d*H+h*w+m*de+p*$,c[4]=d*B+h*V+m*Z+p*Se,c[8]=d*K+h*re+m*D+p*Me,c[12]=d*R+h*ae+m*F+p*N,c[1]=v*H+_*w+S*de+M*$,c[5]=v*B+_*V+S*Z+M*Se,c[9]=v*K+_*re+S*D+M*Me,c[13]=v*R+_*ae+S*F+M*N,c[2]=A*H+C*w+y*de+x*$,c[6]=A*B+C*V+y*Z+x*Se,c[10]=A*K+C*re+y*D+x*Me,c[14]=A*R+C*ae+y*F+x*N,c[3]=O*H+L*w+P*de+I*$,c[7]=O*B+L*V+P*Z+I*Se,c[11]=O*K+L*re+P*D+I*Me,c[15]=O*R+L*ae+P*F+I*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],_=e[6],S=e[10],M=e[14],A=e[3],C=e[7],y=e[11],x=e[15],O=m*M-p*S,L=h*M-p*_,P=h*S-m*_,I=d*M-p*v,H=d*S-m*v,B=d*_-h*v;return i*(C*O-y*L+x*P)-s*(A*O-y*I+x*H)+l*(A*L-C*I+x*B)-c*(A*P-C*H+y*B)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=e[9],S=e[10],M=e[11],A=e[12],C=e[13],y=e[14],x=e[15],O=_*y*p-C*S*p+C*m*M-h*y*M-_*m*x+h*S*x,L=A*S*p-v*y*p-A*m*M+d*y*M+v*m*x-d*S*x,P=v*C*p-A*_*p+A*h*M-d*C*M-v*h*x+d*_*x,I=A*_*m-v*C*m-A*h*S+d*C*S+v*h*y-d*_*y,H=i*O+s*L+l*P+c*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=O*B,e[1]=(C*S*c-_*y*c-C*l*M+s*y*M+_*l*x-s*S*x)*B,e[2]=(h*y*c-C*m*c+C*l*p-s*y*p-h*l*x+s*m*x)*B,e[3]=(_*m*c-h*S*c-_*l*p+s*S*p+h*l*M-s*m*M)*B,e[4]=L*B,e[5]=(v*y*c-A*S*c+A*l*M-i*y*M-v*l*x+i*S*x)*B,e[6]=(A*m*c-d*y*c-A*l*p+i*y*p+d*l*x-i*m*x)*B,e[7]=(d*S*c-v*m*c+v*l*p-i*S*p-d*l*M+i*m*M)*B,e[8]=P*B,e[9]=(A*_*c-v*C*c-A*s*M+i*C*M+v*s*x-i*_*x)*B,e[10]=(d*C*c-A*h*c+A*s*p-i*C*p-d*s*x+i*h*x)*B,e[11]=(v*h*c-d*_*c-v*s*p+i*_*p+d*s*M-i*h*M)*B,e[12]=I*B,e[13]=(v*C*l-A*_*l+A*s*S-i*C*S-v*s*y+i*_*y)*B,e[14]=(A*h*l-d*C*l-A*s*m+i*C*m+d*s*y-i*h*y)*B,e[15]=(d*_*l-v*h*l+v*s*m-i*_*m-d*s*S+i*h*S)*B,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,m=e.z,p=c*d,v=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*d,0,p*m-l*h,v*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,v=d+d,_=h+h,S=c*p,M=c*v,A=c*_,C=d*v,y=d*_,x=h*_,O=m*p,L=m*v,P=m*_,I=s.x,H=s.y,B=s.z;return l[0]=(1-(C+x))*I,l[1]=(M+P)*I,l[2]=(A-L)*I,l[3]=0,l[4]=(M-P)*H,l[5]=(1-(S+x))*H,l[6]=(y+O)*H,l[7]=0,l[8]=(A+L)*B,l[9]=(y-O)*B,l[10]=(1-(S+C))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Ts.set(l[0],l[1],l[2]).length();const d=Ts.set(l[4],l[5],l[6]).length(),h=Ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),wi.copy(this);const p=1/c,v=1/d,_=1/h;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,i.setFromRotationMatrix(wi),s.x=c,s.y=d,s.z=h,this}makePerspective(e,i,s,l,c,d,h=Wi,m=!1){const p=this.elements,v=2*c/(i-e),_=2*c/(s-l),S=(i+e)/(i-e),M=(s+l)/(s-l);let A,C;if(m)A=c/(d-c),C=d*c/(d-c);else if(h===Wi)A=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(h===kc)A=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=Wi,m=!1){const p=this.elements,v=2/(i-e),_=2/(s-l),S=-(i+e)/(i-e),M=-(s+l)/(s-l);let A,C;if(m)A=1/(d-c),C=d/(d-c);else if(h===Wi)A=-2/(d-c),C=-(d+c)/(d-c);else if(h===kc)A=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ts=new oe,wi=new mn,BM=new oe(0,0,0),IM=new oe(1,1,1),$a=new oe,Sc=new oe,ri=new oe,Z0=new mn,K0=new $o;class Ea{constructor(e=0,i=0,s=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Z0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Z0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return K0.setFromEuler(this),this.setFromQuaternion(K0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class sv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FM=0;const Q0=new oe,As=new $o,pa=new mn,Mc=new oe,Vo=new oe,zM=new oe,HM=new $o,J0=new oe(1,0,0),$0=new oe(0,1,0),e_=new oe(0,0,1),t_={type:"added"},GM={type:"removed"},Rs={type:"childadded",child:null},Md={type:"childremoved",child:null};class li extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new oe,i=new Ea,s=new $o,l=new oe(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new dt}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(J0,e)}rotateY(e){return this.rotateOnAxis($0,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,i){return Q0.copy(e).applyQuaternion(this.quaternion),this.position.add(Q0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(J0,e)}translateY(e){return this.translateOnAxis($0,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Mc.copy(e):Mc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Vo,Mc,this.up):pa.lookAt(Mc,Vo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),As.setFromRotationMatrix(pa),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(GM),Md.child=e,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,zM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,HM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),_=d(e.shapes),S=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}li.DEFAULT_UP=new oe(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new oe,ma=new oe,yd=new oe,ga=new oe,Cs=new oe,ws=new oe,n_=new oe,Ed=new oe,bd=new oe,Td=new oe,Ad=new ln,Rd=new ln,Cd=new ln;class Ui{constructor(e=new oe,i=new oe,s=new oe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Di.subVectors(e,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Di.subVectors(l,i),ma.subVectors(s,i),yd.subVectors(e,i);const d=Di.dot(Di),h=Di.dot(ma),m=Di.dot(yd),p=ma.dot(ma),v=ma.dot(yd),_=d*p-h*h;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(p*m-h*v)*S,A=(d*v-h*m)*S;return c.set(1-M-A,A,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,s,l,c,d,h,m){return this.getBarycoord(e,i,s,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(d,ga.y),m.addScaledVector(h,ga.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Ad.setScalar(0),Rd.setScalar(0),Cd.setScalar(0),Ad.fromBufferAttribute(e,i),Rd.fromBufferAttribute(e,s),Cd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Ad,c.x),d.addScaledVector(Rd,c.y),d.addScaledVector(Cd,c.z),d}static isFrontFacing(e,i,s,l){return Di.subVectors(s,i),ma.subVectors(e,i),Di.cross(ma).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Di.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ui.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;Cs.subVectors(l,s),ws.subVectors(c,s),Ed.subVectors(e,s);const m=Cs.dot(Ed),p=ws.dot(Ed);if(m<=0&&p<=0)return i.copy(s);bd.subVectors(e,l);const v=Cs.dot(bd),_=ws.dot(bd);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(Cs,d);Td.subVectors(e,c);const M=Cs.dot(Td),A=ws.dot(Td);if(A>=0&&M<=A)return i.copy(c);const C=M*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(s).addScaledVector(ws,h);const y=v*A-M*_;if(y<=0&&_-v>=0&&M-A>=0)return n_.subVectors(c,l),h=(_-v)/(_-v+(M-A)),i.copy(l).addScaledVector(n_,h);const x=1/(y+C+S);return d=C*x,h=S*x,i.copy(s).addScaledVector(Cs,d).addScaledVector(ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},yc={h:0,s:0,l:0};function wd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Ft{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ct.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ct.workingColorSpace){if(e=RM(e,1),i=At(i,0,1),s=At(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=wd(d,c,e+1/3),this.g=wd(d,c,e),this.b=wd(d,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,i=on){function s(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=on){const s=ov[e.toLowerCase()];return s!==void 0?this.setHex(s,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Ct.workingToColorSpace(Fn.copy(this),e),Math.round(At(Fn.r*255,0,255))*65536+Math.round(At(Fn.g*255,0,255))*256+Math.round(At(Fn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=v<=.5?_/(d+h):_/(2-d-h),d){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=on){Ct.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,s=Fn.g,l=Fn.b;return e!==on?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(er),this.setHSL(er.h+e,er.s+i,er.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(er),e.getHSL(yc);const s=fd(er.h,yc.h,i),l=fd(er.s,yc.s,i),c=fd(er.l,yc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ft;Ft.NAMES=ov;let VM=0;class Vs extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=Os,this.side=Sa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Xd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(s.blending=this.blending),this.side!==Sa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Xd&&(s.blendDst=this.blendDst),this.blendEquation!==Nr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==V0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lv extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=V_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new oe,Ec=new _t;let kM=0;class Mi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=k0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(e),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=zo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=zo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=zo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=zo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=zo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==k0&&(e.usage=this.usage),e}}class cv extends Mi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class uv extends Mi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class xa extends Mi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let XM=0;const xi=new mn,Dd=new li,Ds=new oe,si=new el,ko=new el,Mn=new oe;class Yi extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(av(e)?uv:cv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new dt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,s){return xi.makeTranslation(e,i,s),this.applyMatrix4(xi),this}scale(e,i,s){return xi.makeScale(e,i,s),this.applyMatrix4(xi),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new xa(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];ko.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(si.min,ko.min),si.expandByPoint(Mn),Mn.addVectors(si.max,ko.max),si.expandByPoint(Mn)):(si.expandByPoint(ko.min),si.expandByPoint(ko.max))}si.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)Mn.fromBufferAttribute(h,p),m&&(Ds.fromBufferAttribute(e,p),Mn.add(Ds)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<s.count;K++)h[K]=new oe,m[K]=new oe;const p=new oe,v=new oe,_=new oe,S=new _t,M=new _t,A=new _t,C=new oe,y=new oe;function x(K,R,w){p.fromBufferAttribute(s,K),v.fromBufferAttribute(s,R),_.fromBufferAttribute(s,w),S.fromBufferAttribute(c,K),M.fromBufferAttribute(c,R),A.fromBufferAttribute(c,w),v.sub(p),_.sub(p),M.sub(S),A.sub(S);const V=1/(M.x*A.y-A.x*M.y);isFinite(V)&&(C.copy(v).multiplyScalar(A.y).addScaledVector(_,-M.y).multiplyScalar(V),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(V),h[K].add(C),h[R].add(C),h[w].add(C),m[K].add(y),m[R].add(y),m[w].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let K=0,R=O.length;K<R;++K){const w=O[K],V=w.start,re=w.count;for(let ae=V,de=V+re;ae<de;ae+=3)x(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const L=new oe,P=new oe,I=new oe,H=new oe;function B(K){I.fromBufferAttribute(l,K),H.copy(I);const R=h[K];L.copy(R),L.sub(I.multiplyScalar(I.dot(R))).normalize(),P.crossVectors(H,R);const V=P.dot(m[K])<0?-1:1;d.setXYZW(K,L.x,L.y,L.z,V)}for(let K=0,R=O.length;K<R;++K){const w=O[K],V=w.start,re=w.count;for(let ae=V,de=V+re;ae<de;ae+=3)B(e.getX(ae+0)),B(e.getX(ae+1)),B(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new oe,c=new oe,d=new oe,h=new oe,m=new oe,p=new oe,v=new oe,_=new oe;if(e)for(let S=0,M=e.count;S<M;S+=3){const A=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),v.subVectors(d,c),_.subVectors(l,c),v.cross(_),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),h.add(v),m.add(v),p.add(v),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,c),_.subVectors(l,c),v.cross(_),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,_=h.normalized,S=new p.constructor(m.length*v);let M=0,A=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*v;for(let x=0;x<v;x++)S[A++]=p[M++]}return new Mi(S,v,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,_=p.length;v<_;v++){const S=p[v],M=e(S,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],_=c[p];for(let S=0,M=_.length;S<M;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i_=new mn,Rr=new PM,bc=new Zh,a_=new oe,Tc=new oe,Ac=new oe,Rc=new oe,Ud=new oe,Cc=new oe,r_=new oe,wc=new oe;class Pi extends li{constructor(e=new Yi,i=new lv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Cc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],_=c[m];v!==0&&(Ud.fromBufferAttribute(_,e),d?Cc.addScaledVector(Ud,v):Cc.addScaledVector(Ud.sub(i),v))}i.add(Cc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(c),Rr.copy(e.ray).recast(e.near),!(bc.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(bc,a_)===null||Rr.origin.distanceToSquared(a_)>(e.far-e.near)**2))&&(i_.copy(c).invert(),Rr.copy(e.ray).applyMatrix4(i_),!(s.boundingBox!==null&&Rr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Rr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const y=S[A],x=d[y.materialIndex],O=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let P=O,I=L;P<I;P+=3){const H=h.getX(P),B=h.getX(P+1),K=h.getX(P+2);l=Dc(this,x,e,s,p,v,_,H,B,K),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=A,x=C;y<x;y+=3){const O=h.getX(y),L=h.getX(y+1),P=h.getX(y+2);l=Dc(this,d,e,s,p,v,_,O,L,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const y=S[A],x=d[y.materialIndex],O=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let P=O,I=L;P<I;P+=3){const H=P,B=P+1,K=P+2;l=Dc(this,x,e,s,p,v,_,H,B,K),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=A,x=C;y<x;y+=3){const O=y,L=y+1,P=y+2;l=Dc(this,d,e,s,p,v,_,O,L,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function WM(r,e,i,s,l,c,d,h){let m;if(e.side===yn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,e.side===Sa,h),m===null)return null;wc.copy(h),wc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(wc);return p<i.near||p>i.far?null:{distance:p,point:wc.clone(),object:r}}function Dc(r,e,i,s,l,c,d,h,m,p){r.getVertexPosition(h,Tc),r.getVertexPosition(m,Ac),r.getVertexPosition(p,Rc);const v=WM(r,e,i,s,Tc,Ac,Rc,r_);if(v){const _=new oe;Ui.getBarycoord(r_,Tc,Ac,Rc,_),l&&(v.uv=Ui.getInterpolatedAttribute(l,h,m,p,_,new _t)),c&&(v.uv1=Ui.getInterpolatedAttribute(c,h,m,p,_,new _t)),d&&(v.normal=Ui.getInterpolatedAttribute(d,h,m,p,_,new oe),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new oe,materialIndex:0};Ui.getNormal(Tc,Ac,Rc,S.normal),v.face=S,v.barycoord=_}return v}class tl extends Yi{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],v=[],_=[];let S=0,M=0;A("z","y","x",-1,-1,s,i,e,d,c,0),A("z","y","x",1,-1,s,i,-e,d,c,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,c,4),A("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new xa(p,3)),this.setAttribute("normal",new xa(v,3)),this.setAttribute("uv",new xa(_,2));function A(C,y,x,O,L,P,I,H,B,K,R){const w=P/B,V=I/K,re=P/2,ae=I/2,de=H/2,Z=B+1,D=K+1;let F=0,$=0;const Se=new oe;for(let Me=0;Me<D;Me++){const N=Me*V-ae;for(let ee=0;ee<Z;ee++){const ge=ee*w-re;Se[C]=ge*O,Se[y]=N*L,Se[x]=de,p.push(Se.x,Se.y,Se.z),Se[C]=0,Se[y]=0,Se[x]=H>0?1:-1,v.push(Se.x,Se.y,Se.z),_.push(ee/B),_.push(1-Me/K),F+=1}}for(let Me=0;Me<K;Me++)for(let N=0;N<B;N++){const ee=S+N+Z*Me,ge=S+N+Z*(Me+1),Re=S+(N+1)+Z*(Me+1),ze=S+(N+1)+Z*Me;m.push(ee,ge,ze),m.push(ge,Re,ze),$+=6}h.addGroup(M,$,R),M+=$,S+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Vn(r){const e={};for(let i=0;i<r.length;i++){const s=Hs(r[i]);for(const l in s)e[l]=s[l]}return e}function qM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function fv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const YM={clone:Hs,merge:Vn};var jM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jM,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=qM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class dv extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tr=new oe,s_=new _t,o_=new _t;class Si extends dv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Oh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oh*2*Math.atan(Math.tan(ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,i){return this.getViewBounds(e,s_,o_),i.subVectors(o_,s_)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ud*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Us=-90,Ns=1;class KM extends li{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Us,Ns,e,i);l.layers=this.layers,this.add(l);const c=new Si(Us,Ns,e,i);c.layers=this.layers,this.add(c);const d=new Si(Us,Ns,e,i);d.layers=this.layers,this.add(d);const h=new Si(Us,Ns,e,i);h.layers=this.layers,this.add(h);const m=new Si(Us,Ns,e,i);m.layers=this.layers,this.add(m);const p=new Si(Us,Ns,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,v]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(_,S,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class hv extends En{constructor(e=[],i=Ir,s,l,c,d,h,m,p,v){super(e,i,s,l,c,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pv extends Kn{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new hv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new tl(5,5,5),c=new Qn({name:"CubemapFromEquirect",uniforms:Hs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:yn,blending:Li});c.uniforms.tEquirect.value=i;const d=new Pi(l,c),h=i.minFilter;return i.minFilter===Or&&(i.minFilter=nn),new KM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}class Uc extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class Nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),M=.02,A=.005;p.inputState.pinching&&S>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Uc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Ph extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class JM extends En{constructor(e=null,i=1,s=1,l,c,d,h,m,p=On,v=On,_,S){super(null,d,h,m,p,v,l,c,_,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new oe,$M=new oe,ey=new dt;class Ur{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Ld.subVectors(s,i).cross($M.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Ld),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||ey.getNormalMatrix(e),l=this.coplanarPoint(Ld).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new Zh,ty=new _t(.5,.5),Nc=new oe;class mv{constructor(e=new Ur,i=new Ur,s=new Ur,l=new Ur,c=new Ur,d=new Ur){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Wi,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],v=c[4],_=c[5],S=c[6],M=c[7],A=c[8],C=c[9],y=c[10],x=c[11],O=c[12],L=c[13],P=c[14],I=c[15];if(l[0].setComponents(p-d,M-v,x-A,I-O).normalize(),l[1].setComponents(p+d,M+v,x+A,I+O).normalize(),l[2].setComponents(p+h,M+_,x+C,I+L).normalize(),l[3].setComponents(p-h,M-_,x-C,I-L).normalize(),s)l[4].setComponents(m,S,y,P).normalize(),l[5].setComponents(p-m,M-S,x-y,I-P).normalize();else if(l[4].setComponents(p-m,M-S,x-y,I-P).normalize(),i===Wi)l[5].setComponents(p+m,M+S,x+y,I+P).normalize();else if(i===kc)l[5].setComponents(m,S,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const i=ty.distanceTo(e.center);return Cr.radius=.7071067811865476+i,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Nc.x=l.normal.x>0?e.max.x:e.min.x,Nc.y=l.normal.y>0?e.max.y:e.min.y,Nc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gs extends En{constructor(e,i,s=Oi,l,c,d,h=On,m=On,p,v=ya,_=1){if(v!==ya&&v!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,c,d,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ny extends Gs{constructor(e,i=Oi,s=Ir,l,c,d=On,h=On,m,p=ya){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,s,l,c,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gv extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nl extends Yi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,_=e/h,S=i/m,M=[],A=[],C=[],y=[];for(let x=0;x<v;x++){const O=x*S-d;for(let L=0;L<p;L++){const P=L*_-c;A.push(P,-O,0),C.push(0,0,1),y.push(L/h),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<h;O++){const L=O+p*x,P=O+p*(x+1),I=O+1+p*(x+1),H=O+1+p*x;M.push(L,P,H),M.push(P,I,H)}this.setIndex(M),this.setAttribute("position",new xa(A,3)),this.setAttribute("normal",new xa(C,3)),this.setAttribute("uv",new xa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.widthSegments,e.heightSegments)}}class iy extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ay extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ry extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kc extends dv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class sy extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class oy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}class sn{constructor(e){this.value=e}clone(){return new sn(this.value.clone===void 0?this.value:this.value.clone())}}function l_(r,e,i,s){const l=ly(s);switch(i){case tv:return r*e;case iv:return r*e/l.components*l.byteLength;case kh:return r*e/l.components*l.byteLength;case zs:return r*e*2/l.components*l.byteLength;case Xh:return r*e*2/l.components*l.byteLength;case nv:return r*e*3/l.components*l.byteLength;case Ni:return r*e*4/l.components*l.byteLength;case Wh:return r*e*4/l.components*l.byteLength;case Bc:case Ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fc:case zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nh:case ah:return Math.max(r,16)*Math.max(e,8)/4;case th:case ih:return Math.max(r,8)*Math.max(e,8)/2;case rh:case sh:case lh:case ch:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case oh:case uh:case fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case _h:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case vh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case bh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ah:case Rh:case Ch:return Math.ceil(r/4)*Math.ceil(e/4)*16;case wh:case Dh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Uh:case Nh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ly(r){switch(r){case Hn:case Q_:return{byteLength:1,components:1};case jo:case J_:case Ma:return{byteLength:2,components:1};case Gh:case Vh:return{byteLength:2,components:4};case Oi:case Hh:case Xi:return{byteLength:4,components:1};case $_:case ev:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);function _v(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function cy(r){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const v=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,v);else{_.sort((M,A)=>M.start-A.start);let S=0;for(let M=1;M<_.length;M++){const A=_[S],C=_[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,_[S]=C)}_.length=S+1;for(let M=0,A=_.length;M<A;M++){const C=_[M];r.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,my=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,My=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ey=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,by=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ly=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Oy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Py=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ib=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ab=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ub=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_b=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ab=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Db=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ub=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ob=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:uy,alphahash_pars_fragment:fy,alphamap_fragment:dy,alphamap_pars_fragment:hy,alphatest_fragment:py,alphatest_pars_fragment:my,aomap_fragment:gy,aomap_pars_fragment:_y,batching_pars_vertex:vy,batching_vertex:xy,begin_vertex:Sy,beginnormal_vertex:My,bsdfs:yy,iridescence_fragment:Ey,bumpmap_pars_fragment:by,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:Ay,clipping_planes_pars_vertex:Ry,clipping_planes_vertex:Cy,color_fragment:wy,color_pars_fragment:Dy,color_pars_vertex:Uy,color_vertex:Ny,common:Ly,cube_uv_reflection_fragment:Oy,defaultnormal_vertex:Py,displacementmap_pars_vertex:By,displacementmap_vertex:Iy,emissivemap_fragment:Fy,emissivemap_pars_fragment:zy,colorspace_fragment:Hy,colorspace_pars_fragment:Gy,envmap_fragment:Vy,envmap_common_pars_fragment:ky,envmap_pars_fragment:Xy,envmap_pars_vertex:Wy,envmap_physical_pars_fragment:nE,envmap_vertex:qy,fog_vertex:Yy,fog_pars_vertex:jy,fog_fragment:Zy,fog_pars_fragment:Ky,gradientmap_pars_fragment:Qy,lightmap_pars_fragment:Jy,lights_lambert_fragment:$y,lights_lambert_pars_fragment:eE,lights_pars_begin:tE,lights_toon_fragment:iE,lights_toon_pars_fragment:aE,lights_phong_fragment:rE,lights_phong_pars_fragment:sE,lights_physical_fragment:oE,lights_physical_pars_fragment:lE,lights_fragment_begin:cE,lights_fragment_maps:uE,lights_fragment_end:fE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:hE,logdepthbuf_pars_vertex:pE,logdepthbuf_vertex:mE,map_fragment:gE,map_pars_fragment:_E,map_particle_fragment:vE,map_particle_pars_fragment:xE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:ME,morphinstance_vertex:yE,morphcolor_vertex:EE,morphnormal_vertex:bE,morphtarget_pars_vertex:TE,morphtarget_vertex:AE,normal_fragment_begin:RE,normal_fragment_maps:CE,normal_pars_fragment:wE,normal_pars_vertex:DE,normal_vertex:UE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:LE,clearcoat_normal_fragment_maps:OE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:BE,opaque_fragment:IE,packing:FE,premultiplied_alpha_fragment:zE,project_vertex:HE,dithering_fragment:GE,dithering_pars_fragment:VE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:qE,shadowmap_vertex:YE,shadowmask_pars_fragment:jE,skinbase_vertex:ZE,skinning_pars_vertex:KE,skinning_vertex:QE,skinnormal_vertex:JE,specularmap_fragment:$E,specularmap_pars_fragment:eb,tonemapping_fragment:tb,tonemapping_pars_fragment:nb,transmission_fragment:ib,transmission_pars_fragment:ab,uv_pars_fragment:rb,uv_pars_vertex:sb,uv_vertex:ob,worldpos_vertex:lb,background_vert:cb,background_frag:ub,backgroundCube_vert:fb,backgroundCube_frag:db,cube_vert:hb,cube_frag:pb,depth_vert:mb,depth_frag:gb,distance_vert:_b,distance_frag:vb,equirect_vert:xb,equirect_frag:Sb,linedashed_vert:Mb,linedashed_frag:yb,meshbasic_vert:Eb,meshbasic_frag:bb,meshlambert_vert:Tb,meshlambert_frag:Ab,meshmatcap_vert:Rb,meshmatcap_frag:Cb,meshnormal_vert:wb,meshnormal_frag:Db,meshphong_vert:Ub,meshphong_frag:Nb,meshphysical_vert:Lb,meshphysical_frag:Ob,meshtoon_vert:Pb,meshtoon_frag:Bb,points_vert:Ib,points_frag:Fb,shadow_vert:zb,shadow_frag:Hb,sprite_vert:Gb,sprite_frag:Vb},Oe={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Vi={basic:{uniforms:Vn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Vn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ft(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Vn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Vn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Vn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ft(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Vn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Vn([Oe.points,Oe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Vn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Vn([Oe.common,Oe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Vn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Vn([Oe.sprite,Oe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Vn([Oe.common,Oe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Vn([Oe.lights,Oe.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Vi.physical={uniforms:Vn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Lc={r:0,b:0,g:0},wr=new Ea,kb=new mn;function Xb(r,e,i,s,l,c,d){const h=new Ft(0);let m=c===!0?0:1,p,v,_=null,S=0,M=null;function A(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?i:e).get(P)),P}function C(L){let P=!1;const I=A(L);I===null?x(h,m):I&&I.isColor&&(x(I,1),P=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,P){const I=A(P);I&&(I.isCubeTexture||I.mapping===Zc)?(v===void 0&&(v=new Pi(new tl(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Hs(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,B,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),wr.copy(P.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(kb.makeRotationFromEuler(wr)),v.material.toneMapped=Ct.getTransfer(I.colorSpace)!==kt,(_!==I||S!==I.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,_=I,S=I.version,M=r.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Pi(new nl(2,2),new Qn({name:"BackgroundMaterial",uniforms:Hs(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Sa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(I.colorSpace)!==kt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||S!==I.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=I,S=I.version,M=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,P){L.getRGB(Lc,fv(r)),s.buffers.color.setClear(Lc.r,Lc.g,Lc.b,P,d)}function O(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,P=1){h.set(L),m=P,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(h,m)},render:C,addToRenderList:y,dispose:O}}function Wb(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,d=!1;function h(w,V,re,ae,de){let Z=!1;const D=_(ae,re,V);c!==D&&(c=D,p(c.object)),Z=M(w,ae,re,de),Z&&A(w,ae,re,de),de!==null&&e.update(de,r.ELEMENT_ARRAY_BUFFER),(Z||d)&&(d=!1,P(w,V,re,ae),de!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function v(w){return r.deleteVertexArray(w)}function _(w,V,re){const ae=re.wireframe===!0;let de=s[w.id];de===void 0&&(de={},s[w.id]=de);let Z=de[V.id];Z===void 0&&(Z={},de[V.id]=Z);let D=Z[ae];return D===void 0&&(D=S(m()),Z[ae]=D),D}function S(w){const V=[],re=[],ae=[];for(let de=0;de<i;de++)V[de]=0,re[de]=0,ae[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:re,attributeDivisors:ae,object:w,attributes:{},index:null}}function M(w,V,re,ae){const de=c.attributes,Z=V.attributes;let D=0;const F=re.getAttributes();for(const $ in F)if(F[$].location>=0){const Me=de[$];let N=Z[$];if(N===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),Me===void 0||Me.attribute!==N||N&&Me.data!==N.data)return!0;D++}return c.attributesNum!==D||c.index!==ae}function A(w,V,re,ae){const de={},Z=V.attributes;let D=0;const F=re.getAttributes();for(const $ in F)if(F[$].location>=0){let Me=Z[$];Me===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor));const N={};N.attribute=Me,Me&&Me.data&&(N.data=Me.data),de[$]=N,D++}c.attributes=de,c.attributesNum=D,c.index=ae}function C(){const w=c.newAttributes;for(let V=0,re=w.length;V<re;V++)w[V]=0}function y(w){x(w,0)}function x(w,V){const re=c.newAttributes,ae=c.enabledAttributes,de=c.attributeDivisors;re[w]=1,ae[w]===0&&(r.enableVertexAttribArray(w),ae[w]=1),de[w]!==V&&(r.vertexAttribDivisor(w,V),de[w]=V)}function O(){const w=c.newAttributes,V=c.enabledAttributes;for(let re=0,ae=V.length;re<ae;re++)V[re]!==w[re]&&(r.disableVertexAttribArray(re),V[re]=0)}function L(w,V,re,ae,de,Z,D){D===!0?r.vertexAttribIPointer(w,V,re,de,Z):r.vertexAttribPointer(w,V,re,ae,de,Z)}function P(w,V,re,ae){C();const de=ae.attributes,Z=re.getAttributes(),D=V.defaultAttributeValues;for(const F in Z){const $=Z[F];if($.location>=0){let Se=de[F];if(Se===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor)),Se!==void 0){const Me=Se.normalized,N=Se.itemSize,ee=e.get(Se);if(ee===void 0)continue;const ge=ee.buffer,Re=ee.type,ze=ee.bytesPerElement,te=Re===r.INT||Re===r.UNSIGNED_INT||Se.gpuType===Hh;if(Se.isInterleavedBufferAttribute){const ce=Se.data,be=ce.stride,Ie=Se.offset;if(ce.isInstancedInterleavedBuffer){for(let Fe=0;Fe<$.locationSize;Fe++)x($.location+Fe,ce.meshPerAttribute);w.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<$.locationSize;Fe++)y($.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let Fe=0;Fe<$.locationSize;Fe++)L($.location+Fe,N/$.locationSize,Re,Me,be*ze,(Ie+N/$.locationSize*Fe)*ze,te)}else{if(Se.isInstancedBufferAttribute){for(let ce=0;ce<$.locationSize;ce++)x($.location+ce,Se.meshPerAttribute);w.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ce=0;ce<$.locationSize;ce++)y($.location+ce);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let ce=0;ce<$.locationSize;ce++)L($.location+ce,N/$.locationSize,Re,Me,N*ze,N/$.locationSize*ce*ze,te)}}else if(D!==void 0){const Me=D[F];if(Me!==void 0)switch(Me.length){case 2:r.vertexAttrib2fv($.location,Me);break;case 3:r.vertexAttrib3fv($.location,Me);break;case 4:r.vertexAttrib4fv($.location,Me);break;default:r.vertexAttrib1fv($.location,Me)}}}}O()}function I(){K();for(const w in s){const V=s[w];for(const re in V){const ae=V[re];for(const de in ae)v(ae[de].object),delete ae[de];delete V[re]}delete s[w]}}function H(w){if(s[w.id]===void 0)return;const V=s[w.id];for(const re in V){const ae=V[re];for(const de in ae)v(ae[de].object),delete ae[de];delete V[re]}delete s[w.id]}function B(w){for(const V in s){const re=s[V];if(re[w.id]===void 0)continue;const ae=re[w.id];for(const de in ae)v(ae[de].object),delete ae[de];delete re[w.id]}}function K(){R(),d=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:R,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:y,disableUnusedAttributes:O}}function qb(r,e,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function d(p,v,_){_!==0&&(r.drawArraysInstanced(s,p,v,_),i.update(v,s,_))}function h(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,_);let M=0;for(let A=0;A<_;A++)M+=v[A];i.update(M,s,1)}function m(p,v,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],v[A],S[A]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,_);let A=0;for(let C=0;C<_;C++)A+=v[C]*S[C];i.update(A,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Yb(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Ni&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const K=B===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Hn&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Xi&&!K)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(st("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:P,maxSamples:I,samples:H}}function jb(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Ur,h=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||s!==0||l;return l=S,s=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,M){const A=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!l||A===null||A.length===0||c&&!y)c?v(null):p();else{const O=c?0:s,L=O*4;let P=x.clippingState||null;m.value=P,P=v(A,S,L,M);for(let I=0;I!==L;++I)P[I]=i[I];x.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,S,M,A){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,A!==!0||y===null){const x=M+C*4,O=S.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,P=M;L!==C;++L,P+=4)d.copy(_[L]).applyMatrix4(O,h),d.normal.toArray(y,P),y[P+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function Zb(r){let e=new WeakMap;function i(d,h){return h===Qd?d.mapping=Ir:h===Jd&&(d.mapping=Is),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Qd||h===Jd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new pv(m.height);return p.fromEquirectangularTexture(r,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ir=4,c_=[.125,.215,.35,.446,.526,.582],Lr=20,Kb=256,Xo=new Kc,u_=new Ft;let Od=null,Pd=0,Bd=0,Id=!1;const Qb=new oe;class f_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=Qb}=c;Od=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,Pd,Bd),this._renderer.xr.enabled=Id,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ir||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Ma,format:Ni,colorSpace:ar,depthBuffer:!1},l=d_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jb(c)),this._blurMaterial=eT(c,e,i),this._ggxMaterial=$b(c,e,i)}return l}_compileMaterial(e){const i=new Pi(new Yi,e);this._renderer.compile(i,Xo)}_sceneToCubeUV(e,i,s,l,c){const m=new Si(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(u_),_.toneMapping=qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pi(new tl,new lv({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const O=e.background;O?O.isColor&&(y.color.copy(O),e.background=null,x=!0):(y.color.copy(u_),x=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[L],c.y,c.z)):P===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[L]));const I=this._cubeSize;Ls(l,P*I,L>2?I:0,I,I),_.setRenderTarget(l),x&&_.render(C,m),_.render(e,m)}_.toneMapping=M,_.autoClear=S,e.background=O}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ir||e.mapping===Is;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Xo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=0+p*1.25,M=_*S,{_lodMax:A}=this,C=this._sizeLods[s],y=3*C*(s>A-ir?s-A+ir:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=A-i,Ls(c,y,x,3*C,2*C),l.setRenderTarget(c),l.render(h,Xo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,Ls(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(h,Xo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Lr-1),C=c/A,y=isFinite(c)?1+Math.floor(v*C):Lr;y>Lr&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Lr}`);const x=[];let O=0;for(let B=0;B<Lr;++B){const K=B/C,R=Math.exp(-K*K/2);x.push(R),B===0?O+=R:B<y&&(O+=2*R)}for(let B=0;B<x.length;B++)x[B]=x[B]/O;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:L}=this;S.dTheta.value=A,S.mipInt.value=L-s;const P=this._sizeLods[l],I=3*P*(l>L-ir?l-L+ir:0),H=4*(this._cubeSize-P);Ls(i,I,H,3*P,2*P),m.setRenderTarget(i),m.render(_,Xo)}}function Jb(r){const e=[],i=[],s=[];let l=r;const c=r-ir+1+c_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>r-ir?m=c_[d-r+ir-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,A=6,C=3,y=2,x=1,O=new Float32Array(C*A*M),L=new Float32Array(y*A*M),P=new Float32Array(x*A*M);for(let H=0;H<M;H++){const B=H%3*2/3-1,K=H>2?0:-1,R=[B,K,0,B+2/3,K,0,B+2/3,K+1,0,B,K,0,B+2/3,K+1,0,B,K+1,0];O.set(R,C*A*H),L.set(S,y*A*H);const w=[H,H,H,H,H,H];P.set(w,x*A*H)}const I=new Yi;I.setAttribute("position",new Mi(O,C)),I.setAttribute("uv",new Mi(L,y)),I.setAttribute("faceIndex",new Mi(P,x)),s.push(new Pi(I,null)),l>ir&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function d_(r,e,i){const s=new Kn(r,e,i);return s.texture.mapping=Zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ls(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function $b(r,e,i){return new Qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function eT(r,e,i){const s=new Float32Array(Lr),l=new oe(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function h_(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function p_(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tT(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Qd||m===Jd,v=m===Ir||m===Is;if(p||v){let _=e.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new f_(r)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new f_(r)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function nT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Zo("WebGLRenderer: "+s+" extension not supported."),l}}}function iT(r,e,i,s){const l={},c=new WeakMap;function d(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const M=c.get(S);M&&(e.remove(M),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)e.update(S[M],r.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,A=_.attributes.position;let C=0;if(M!==null){const O=M.array;C=M.version;for(let L=0,P=O.length;L<P;L+=3){const I=O[L+0],H=O[L+1],B=O[L+2];S.push(I,H,H,B,B,I)}}else if(A!==void 0){const O=A.array;C=A.version;for(let L=0,P=O.length/3-1;L<P;L+=3){const I=L+0,H=L+1,B=L+2;S.push(I,H,H,B,B,I)}}else return;const y=new(av(S)?uv:cv)(S,1);y.version=C;const x=c.get(_);x&&e.remove(x),c.set(_,y)}function v(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function aT(r,e,i){let s;function l(S){s=S}let c,d;function h(S){c=S.type,d=S.bytesPerElement}function m(S,M){r.drawElements(s,M,c,S*d),i.update(M,s,1)}function p(S,M,A){A!==0&&(r.drawElementsInstanced(s,M,c,S*d,A),i.update(M,s,A))}function v(S,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,S,0,A);let y=0;for(let x=0;x<A;x++)y+=M[x];i.update(y,s,1)}function _(S,M,A,C){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/d,M[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,S,0,C,0,A);let x=0;for(let O=0;O<A;O++)x+=M[O]*C[O];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function rT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Nt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function sT(r,e,i){const s=new WeakMap,l=new ln;function c(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let S=s.get(h);if(S===void 0||S.count!==_){let w=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let P=0;A===!0&&(P=1),C===!0&&(P=2),y===!0&&(P=3);let I=h.attributes.position.count*P,H=1;I>e.maxTextureSize&&(H=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*H*4*_),K=new rv(B,I,H,_);K.type=Xi,K.needsUpdate=!0;const R=P*4;for(let V=0;V<_;V++){const re=x[V],ae=O[V],de=L[V],Z=I*H*4*V;for(let D=0;D<re.count;D++){const F=D*R;A===!0&&(l.fromBufferAttribute(re,D),B[Z+F+0]=l.x,B[Z+F+1]=l.y,B[Z+F+2]=l.z,B[Z+F+3]=0),C===!0&&(l.fromBufferAttribute(ae,D),B[Z+F+4]=l.x,B[Z+F+5]=l.y,B[Z+F+6]=l.z,B[Z+F+7]=0),y===!0&&(l.fromBufferAttribute(de,D),B[Z+F+8]=l.x,B[Z+F+9]=l.y,B[Z+F+10]=l.z,B[Z+F+11]=de.itemSize===4?l.w:1)}}S={count:_,texture:K,size:new _t(I,H)},s.set(h,S),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function oT(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const lT={[k_]:"LINEAR_TONE_MAPPING",[X_]:"REINHARD_TONE_MAPPING",[W_]:"CINEON_TONE_MAPPING",[q_]:"ACES_FILMIC_TONE_MAPPING",[j_]:"AGX_TONE_MAPPING",[Z_]:"NEUTRAL_TONE_MAPPING",[Y_]:"CUSTOM_TONE_MAPPING"};function cT(r,e,i,s,l){const c=new Kn(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new Kn(e,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),h=new Yi;h.setAttribute("position",new xa([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xa([0,2,0,0,2,0],2));const m=new iy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Pi(h,m),v=new Kc(-1,1,1,-1,0,1);let _=null,S=null,M=!1,A,C=null,y=[],x=!1;this.setSize=function(O,L){c.setSize(O,L),d.setSize(O,L);for(let P=0;P<y.length;P++){const I=y[P];I.setSize&&I.setSize(O,L)}},this.setEffects=function(O){y=O,x=y.length>0&&y[0].isRenderPass===!0;const L=c.width,P=c.height;for(let I=0;I<y.length;I++){const H=y[I];H.setSize&&H.setSize(L,P)}},this.begin=function(O,L){if(M||O.toneMapping===qi&&y.length===0)return!1;if(C=L,L!==null){const P=L.width,I=L.height;(c.width!==P||c.height!==I)&&this.setSize(P,I)}return x===!1&&O.setRenderTarget(c),A=O.toneMapping,O.toneMapping=qi,!0},this.hasRenderPass=function(){return x},this.end=function(O,L){O.toneMapping=A,M=!0;let P=c,I=d;for(let H=0;H<y.length;H++){const B=y[H];if(B.enabled!==!1&&(B.render(O,I,P,L),B.needsSwap!==!1)){const K=P;P=I,I=K}}if(_!==O.outputColorSpace||S!==O.toneMapping){_=O.outputColorSpace,S=O.toneMapping,m.defines={},Ct.getTransfer(_)===kt&&(m.defines.SRGB_TRANSFER="");const H=lT[S];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,O.setRenderTarget(C),O.render(p,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const vv=new En,Bh=new Gs(1,1),xv=new rv,Sv=new LM,Mv=new hv,m_=[],g_=[],__=new Float32Array(16),v_=new Float32Array(9),x_=new Float32Array(4);function ks(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=m_[l];if(c===void 0&&(c=new Float32Array(l),m_[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,r[d].toArray(c,h)}return c}function vn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function xn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Jc(r,e){let i=g_[e];i===void 0&&(i=new Int32Array(e),g_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function uT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function fT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2fv(this.addr,e),xn(i,e)}}function dT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;r.uniform3fv(this.addr,e),xn(i,e)}}function hT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4fv(this.addr,e),xn(i,e)}}function pT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;x_.set(s),r.uniformMatrix2fv(this.addr,!1,x_),xn(i,s)}}function mT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;v_.set(s),r.uniformMatrix3fv(this.addr,!1,v_),xn(i,s)}}function gT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;__.set(s),r.uniformMatrix4fv(this.addr,!1,__),xn(i,s)}}function _T(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function vT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2iv(this.addr,e),xn(i,e)}}function xT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;r.uniform3iv(this.addr,e),xn(i,e)}}function ST(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4iv(this.addr,e),xn(i,e)}}function MT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function yT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2uiv(this.addr,e),xn(i,e)}}function ET(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;r.uniform3uiv(this.addr,e),xn(i,e)}}function bT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4uiv(this.addr,e),xn(i,e)}}function TT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Bh.compareFunction=i.isReversedDepthBuffer()?Yh:qh,c=Bh):c=vv,i.setTexture2D(e||c,l)}function AT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Sv,l)}function RT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Mv,l)}function CT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||xv,l)}function wT(r){switch(r){case 5126:return uT;case 35664:return fT;case 35665:return dT;case 35666:return hT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return _T;case 35667:case 35671:return vT;case 35668:case 35672:return xT;case 35669:case 35673:return ST;case 5125:return MT;case 36294:return yT;case 36295:return ET;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return CT}}function DT(r,e){r.uniform1fv(this.addr,e)}function UT(r,e){const i=ks(e,this.size,2);r.uniform2fv(this.addr,i)}function NT(r,e){const i=ks(e,this.size,3);r.uniform3fv(this.addr,i)}function LT(r,e){const i=ks(e,this.size,4);r.uniform4fv(this.addr,i)}function OT(r,e){const i=ks(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function PT(r,e){const i=ks(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function BT(r,e){const i=ks(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function IT(r,e){r.uniform1iv(this.addr,e)}function FT(r,e){r.uniform2iv(this.addr,e)}function zT(r,e){r.uniform3iv(this.addr,e)}function HT(r,e){r.uniform4iv(this.addr,e)}function GT(r,e){r.uniform1uiv(this.addr,e)}function VT(r,e){r.uniform2uiv(this.addr,e)}function kT(r,e){r.uniform3uiv(this.addr,e)}function XT(r,e){r.uniform4uiv(this.addr,e)}function WT(r,e,i){const s=this.cache,l=e.length,c=Jc(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Bh:d=vv;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function qT(r,e,i){const s=this.cache,l=e.length,c=Jc(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Sv,c[d])}function YT(r,e,i){const s=this.cache,l=e.length,c=Jc(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Mv,c[d])}function jT(r,e,i){const s=this.cache,l=e.length,c=Jc(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||xv,c[d])}function ZT(r){switch(r){case 5126:return DT;case 35664:return UT;case 35665:return NT;case 35666:return LT;case 35674:return OT;case 35675:return PT;case 35676:return BT;case 5124:case 35670:return IT;case 35667:case 35671:return FT;case 35668:case 35672:return zT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return kT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return jT}}class KT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=wT(i.type)}}class QT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ZT(i.type)}}class JT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function S_(r,e){r.seq.push(e),r.map[e.id]=e}function $T(r,e,i){const s=r.name,l=s.length;for(Fd.lastIndex=0;;){const c=Fd.exec(s),d=Fd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){S_(i,p===void 0?new KT(h,r,e):new QT(h,r,e));break}else{let _=i.map[h];_===void 0&&(_=new JT(h),S_(i,_)),i=_}}}class Hc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);$T(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function M_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const e1=37297;let t1=0;function n1(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const y_=new dt;function i1(r){Ct._getMatrix(y_,Ct.workingColorSpace,r);const e=`mat3( ${y_.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(r)){case Vc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function E_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+n1(r.getShaderSource(e),h)}else return c}function a1(r,e){const i=i1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const r1={[k_]:"Linear",[X_]:"Reinhard",[W_]:"Cineon",[q_]:"ACESFilmic",[j_]:"AgX",[Z_]:"Neutral",[Y_]:"Custom"};function s1(r,e){const i=r1[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new oe;function o1(){Ct.getLuminanceCoefficients(Oc);const r=Oc.x.toFixed(4),e=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function c1(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function u1(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:h}}return i}function Yo(r){return r!==""}function b_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(r){return r.replace(f1,h1)}const d1=new Map;function h1(r,e){let i=pt[e];if(i===void 0){const s=d1.get(e);if(s!==void 0)i=pt[s],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ih(i)}const p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(r){return r.replace(p1,m1)}function m1(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function R_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const g1={[Pc]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};function _1(r){return g1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const v1={[Ir]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Zc]:"ENVMAP_TYPE_CUBE_UV"};function x1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":v1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const S1={[Is]:"ENVMAP_MODE_REFRACTION"};function M1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":S1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const y1={[V_]:"ENVMAP_BLENDING_MULTIPLY",[pM]:"ENVMAP_BLENDING_MIX",[mM]:"ENVMAP_BLENDING_ADD"};function E1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":y1[r.combine]||"ENVMAP_BLENDING_NONE"}function b1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function T1(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=_1(i),p=x1(i),v=M1(i),_=E1(i),S=b1(i),M=l1(i),A=c1(c),C=l.createProgram();let y,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Yo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Yo).join(`
`),x.length>0&&(x+=`
`)):(y=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),x=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?pt.tonemapping_pars_fragment:"",i.toneMapping!==qi?s1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,a1("linearToOutputTexel",i.outputColorSpace),o1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),d=Ih(d),d=b_(d,i),d=T_(d,i),h=Ih(h),h=b_(h,i),h=T_(h,i),d=A_(d),h=A_(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=O+y+d,P=O+x+h,I=M_(l,l.VERTEX_SHADER,L),H=M_(l,l.FRAGMENT_SHADER,P);l.attachShader(C,I),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(V){if(r.debug.checkShaderErrors){const re=l.getProgramInfoLog(C)||"",ae=l.getShaderInfoLog(I)||"",de=l.getShaderInfoLog(H)||"",Z=re.trim(),D=ae.trim(),F=de.trim();let $=!0,Se=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,I,H);else{const Me=E_(l,I,"vertex"),N=E_(l,H,"fragment");Nt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+Me+`
`+N)}else Z!==""?st("WebGLProgram: Program Info Log:",Z):(D===""||F==="")&&(Se=!1);Se&&(V.diagnostics={runnable:$,programLog:Z,vertexShader:{log:D,prefix:y},fragmentShader:{log:F,prefix:x}})}l.deleteShader(I),l.deleteShader(H),K=new Hc(l,C),R=u1(l,C)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,e1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=t1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=H,this}let A1=0;class R1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new C1(e),i.set(e,s)),s}}class C1{constructor(e){this.id=A1++,this.code=e,this.usedTimes=0}}function w1(r,e,i,s,l,c,d){const h=new sv,m=new R1,p=new Set,v=[],_=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,w,V,re,ae){const de=re.fog,Z=ae.geometry,D=R.isMeshStandardMaterial?re.environment:null,F=(R.isMeshStandardMaterial?i:e).get(R.envMap||D),$=F&&F.mapping===Zc?F.image.height:null,Se=A[R.type];R.precision!==null&&(M=l.getMaxPrecision(R.precision),M!==R.precision&&st("WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const Me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,N=Me!==void 0?Me.length:0;let ee=0;Z.morphAttributes.position!==void 0&&(ee=1),Z.morphAttributes.normal!==void 0&&(ee=2),Z.morphAttributes.color!==void 0&&(ee=3);let ge,Re,ze,te;if(Se){const Rt=Vi[Se];ge=Rt.vertexShader,Re=Rt.fragmentShader}else ge=R.vertexShader,Re=R.fragmentShader,m.update(R),ze=m.getVertexShaderID(R),te=m.getFragmentShaderID(R);const ce=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),Ie=ae.isInstancedMesh===!0,Fe=ae.isBatchedMesh===!0,ht=!!R.map,Qt=!!R.matcap,mt=!!F,lt=!!R.aoMap,yt=!!R.lightMap,Ge=!!R.bumpMap,ot=!!R.normalMap,G=!!R.displacementMap,Et=!!R.emissiveMap,gt=!!R.metalnessMap,wt=!!R.roughnessMap,je=R.anisotropy>0,U=R.clearcoat>0,E=R.dispersion>0,W=R.iridescence>0,he=R.sheen>0,xe=R.transmission>0,ue=je&&!!R.anisotropyMap,Ke=U&&!!R.clearcoatMap,we=U&&!!R.clearcoatNormalMap,We=U&&!!R.clearcoatRoughnessMap,nt=W&&!!R.iridescenceMap,Ee=W&&!!R.iridescenceThicknessMap,Te=he&&!!R.sheenColorMap,He=he&&!!R.sheenRoughnessMap,Pe=!!R.specularMap,De=!!R.specularColorMap,ut=!!R.specularIntensityMap,X=xe&&!!R.transmissionMap,Ne=xe&&!!R.thicknessMap,Ae=!!R.gradientMap,Be=!!R.alphaMap,ye=R.alphaTest>0,ve=!!R.alphaHash,Ce=!!R.extensions;let it=qi;R.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(it=r.toneMapping);const zt={shaderID:Se,shaderType:R.type,shaderName:R.name,vertexShader:ge,fragmentShader:Re,defines:R.defines,customVertexShaderID:ze,customFragmentShaderID:te,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Fe,batchingColor:Fe&&ae._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ae.instanceColor!==null,instancingMorph:Ie&&ae.morphTexture!==null,outputColorSpace:ce===null?r.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ar,alphaToCoverage:!!R.alphaToCoverage,map:ht,matcap:Qt,envMap:mt,envMapMode:mt&&F.mapping,envMapCubeUVHeight:$,aoMap:lt,lightMap:yt,bumpMap:Ge,normalMap:ot,displacementMap:G,emissiveMap:Et,normalMapObjectSpace:ot&&R.normalMapType===vM,normalMapTangentSpace:ot&&R.normalMapType===_M,metalnessMap:gt,roughnessMap:wt,anisotropy:je,anisotropyMap:ue,clearcoat:U,clearcoatMap:Ke,clearcoatNormalMap:we,clearcoatRoughnessMap:We,dispersion:E,iridescence:W,iridescenceMap:nt,iridescenceThicknessMap:Ee,sheen:he,sheenColorMap:Te,sheenRoughnessMap:He,specularMap:Pe,specularColorMap:De,specularIntensityMap:ut,transmission:xe,transmissionMap:X,thicknessMap:Ne,gradientMap:Ae,opaque:R.transparent===!1&&R.blending===Os&&R.alphaToCoverage===!1,alphaMap:Be,alphaTest:ye,alphaHash:ve,combine:R.combine,mapUv:ht&&C(R.map.channel),aoMapUv:lt&&C(R.aoMap.channel),lightMapUv:yt&&C(R.lightMap.channel),bumpMapUv:Ge&&C(R.bumpMap.channel),normalMapUv:ot&&C(R.normalMap.channel),displacementMapUv:G&&C(R.displacementMap.channel),emissiveMapUv:Et&&C(R.emissiveMap.channel),metalnessMapUv:gt&&C(R.metalnessMap.channel),roughnessMapUv:wt&&C(R.roughnessMap.channel),anisotropyMapUv:ue&&C(R.anisotropyMap.channel),clearcoatMapUv:Ke&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:we&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:He&&C(R.sheenRoughnessMap.channel),specularMapUv:Pe&&C(R.specularMap.channel),specularColorMapUv:De&&C(R.specularColorMap.channel),specularIntensityMapUv:ut&&C(R.specularIntensityMap.channel),transmissionMapUv:X&&C(R.transmissionMap.channel),thicknessMapUv:Ne&&C(R.thicknessMap.channel),alphaMapUv:Be&&C(R.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ot||je),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!Z.attributes.uv&&(ht||Be),fog:!!de,useFog:R.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:be,skinning:ae.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:ht&&R.map.isVideoTexture===!0&&Ct.getTransfer(R.map.colorSpace)===kt,decodeVideoTextureEmissive:Et&&R.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(R.emissiveMap.colorSpace)===kt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===oi,flipSided:R.side===yn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ce&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&R.extensions.multiDraw===!0||Fe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return zt.vertexUv1s=p.has(1),zt.vertexUv2s=p.has(2),zt.vertexUv3s=p.has(3),p.clear(),zt}function x(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const V in R.defines)w.push(V),w.push(R.defines[V]);return R.isRawShaderMaterial===!1&&(O(w,R),L(w,R),w.push(r.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function O(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function L(R,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),R.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),R.push(h.mask)}function P(R){const w=A[R.type];let V;if(w){const re=Vi[w];V=YM.clone(re.uniforms)}else V=R.uniforms;return V}function I(R,w){let V=_.get(w);return V!==void 0?++V.usedTimes:(V=new T1(r,w,R,c),v.push(V),_.set(w,V)),V}function H(R){if(--R.usedTimes===0){const w=v.indexOf(R);v[w]=v[v.length-1],v.pop(),_.delete(R.cacheKey),R.destroy()}}function B(R){m.remove(R)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:P,acquireProgram:I,releaseProgram:H,releaseShaderCache:B,programs:v,dispose:K}}function D1(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function U1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function C_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function w_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(_,S,M,A,C,y){let x=r[e];return x===void 0?(x={id:_.id,object:_,geometry:S,material:M,groupOrder:A,renderOrder:_.renderOrder,z:C,group:y},r[e]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=M,x.groupOrder=A,x.renderOrder=_.renderOrder,x.z=C,x.group=y),e++,x}function h(_,S,M,A,C,y){const x=d(_,S,M,A,C,y);M.transmission>0?s.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(_,S,M,A,C,y){const x=d(_,S,M,A,C,y);M.transmission>0?s.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||U1),s.length>1&&s.sort(S||C_),l.length>1&&l.sort(S||C_)}function v(){for(let _=e,S=r.length;_<S;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function N1(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new w_,r.set(s,[d])):l>=c.length?(d=new w_,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function L1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Ft};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":i={color:new Ft,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[e.id]=i,i}}}function O1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let P1=0;function B1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function I1(r){const e=new L1,i=O1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new oe);const l=new oe,c=new mn,d=new mn;function h(p){let v=0,_=0,S=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let M=0,A=0,C=0,y=0,x=0,O=0,L=0,P=0,I=0,H=0,B=0;p.sort(B1);for(let R=0,w=p.length;R<w;R++){const V=p[R],re=V.color,ae=V.intensity,de=V.distance;let Z=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===zs?Z=V.shadow.map.texture:Z=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=re.r*ae,_+=re.g*ae,S+=re.b*ae;else if(V.isLightProbe){for(let D=0;D<9;D++)s.probe[D].addScaledVector(V.sh.coefficients[D],ae);B++}else if(V.isDirectionalLight){const D=e.get(V);if(D.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const F=V.shadow,$=i.get(V);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,s.directionalShadow[M]=$,s.directionalShadowMap[M]=Z,s.directionalShadowMatrix[M]=V.shadow.matrix,O++}s.directional[M]=D,M++}else if(V.isSpotLight){const D=e.get(V);D.position.setFromMatrixPosition(V.matrixWorld),D.color.copy(re).multiplyScalar(ae),D.distance=de,D.coneCos=Math.cos(V.angle),D.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),D.decay=V.decay,s.spot[C]=D;const F=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,F.updateMatrices(V),V.castShadow&&H++),s.spotLightMatrix[C]=F.matrix,V.castShadow){const $=i.get(V);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,s.spotShadow[C]=$,s.spotShadowMap[C]=Z,P++}C++}else if(V.isRectAreaLight){const D=e.get(V);D.color.copy(re).multiplyScalar(ae),D.halfWidth.set(V.width*.5,0,0),D.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=D,y++}else if(V.isPointLight){const D=e.get(V);if(D.color.copy(V.color).multiplyScalar(V.intensity),D.distance=V.distance,D.decay=V.decay,V.castShadow){const F=V.shadow,$=i.get(V);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,s.pointShadow[A]=$,s.pointShadowMap[A]=Z,s.pointShadowMatrix[A]=V.shadow.matrix,L++}s.point[A]=D,A++}else if(V.isHemisphereLight){const D=e.get(V);D.skyColor.copy(V.color).multiplyScalar(ae),D.groundColor.copy(V.groundColor).multiplyScalar(ae),s.hemi[x]=D,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=S;const K=s.hash;(K.directionalLength!==M||K.pointLength!==A||K.spotLength!==C||K.rectAreaLength!==y||K.hemiLength!==x||K.numDirectionalShadows!==O||K.numPointShadows!==L||K.numSpotShadows!==P||K.numSpotMaps!==I||K.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=A,s.hemi.length=x,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+I-H,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=B,K.directionalLength=M,K.pointLength=A,K.spotLength=C,K.rectAreaLength=y,K.hemiLength=x,K.numDirectionalShadows=O,K.numPointShadows=L,K.numSpotShadows=P,K.numSpotMaps=I,K.numLightProbes=B,s.version=P1++)}function m(p,v){let _=0,S=0,M=0,A=0,C=0;const y=v.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const L=p[x];if(L.isDirectionalLight){const P=s.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),_++}else if(L.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const P=s.rectArea[A];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),d.identity(),c.copy(L.matrixWorld),c.premultiply(y),d.extractRotation(c),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),A++}else if(L.isPointLight){const P=s.point[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const P=s.hemi[C];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:s}}function D_(r){const e=new I1(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function d(v){s.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function F1(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new D_(r),e.set(l,[h])):c>=d.length?(h=new D_(r),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,G1=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],V1=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],U_=new mn,Wo=new oe,zd=new oe;function k1(r,e,i){let s=new mv;const l=new _t,c=new _t,d=new ln,h=new ay,m=new ry,p={},v=i.maxTextureSize,_={[Sa]:yn,[yn]:Sa,[oi]:oi},S=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:z1,fragmentShader:H1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new Yi;A.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Pi(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let x=this.type;this.render=function(H,B,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;H.type===ZS&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Pc);const R=r.getRenderTarget(),w=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),re=r.state;re.setBlending(Li),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ae=x!==this.type;ae&&B.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(Z=>Z.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,Z=H.length;de<Z;de++){const D=H[de],F=D.shadow;if(F===void 0){st("WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const $=F.getFrameExtents();if(l.multiply($),c.copy(F.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/$.x),l.x=c.x*$.x,F.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/$.y),l.y=c.y*$.y,F.mapSize.y=c.y)),F.map===null||ae===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===qo){if(D.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Kn(l.x,l.y,{format:zs,type:Ma,minFilter:nn,magFilter:nn,generateMipmaps:!1}),F.map.texture.name=D.name+".shadowMap",F.map.depthTexture=new Gs(l.x,l.y,Xi),F.map.depthTexture.name=D.name+".shadowMapDepth",F.map.depthTexture.format=ya,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=On,F.map.depthTexture.magFilter=On}else{D.isPointLight?(F.map=new pv(l.x),F.map.depthTexture=new ny(l.x,Oi)):(F.map=new Kn(l.x,l.y),F.map.depthTexture=new Gs(l.x,l.y,Oi)),F.map.depthTexture.name=D.name+".shadowMap",F.map.depthTexture.format=ya;const Me=r.state.buffers.depth.getReversed();this.type===Pc?(F.map.depthTexture.compareFunction=Me?Yh:qh,F.map.depthTexture.minFilter=nn,F.map.depthTexture.magFilter=nn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=On,F.map.depthTexture.magFilter=On)}F.camera.updateProjectionMatrix()}const Se=F.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<Se;Me++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,Me),r.clear();else{Me===0&&(r.setRenderTarget(F.map),r.clear());const N=F.getViewport(Me);d.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),re.viewport(d)}if(D.isPointLight){const N=F.camera,ee=F.matrix,ge=D.distance||N.far;ge!==N.far&&(N.far=ge,N.updateProjectionMatrix()),Wo.setFromMatrixPosition(D.matrixWorld),N.position.copy(Wo),zd.copy(N.position),zd.add(G1[Me]),N.up.copy(V1[Me]),N.lookAt(zd),N.updateMatrixWorld(),ee.makeTranslation(-Wo.x,-Wo.y,-Wo.z),U_.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),F._frustum.setFromProjectionMatrix(U_,N.coordinateSystem,N.reversedDepth)}else F.updateMatrices(D);s=F.getFrustum(),P(B,K,F.camera,D,this.type)}F.isPointLightShadow!==!0&&this.type===qo&&O(F,K),F.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(R,w,V)};function O(H,B){const K=e.update(C);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Kn(l.x,l.y,{format:zs,type:Ma})),S.uniforms.shadow_pass.value=H.map.depthTexture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(B,null,K,S,C,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(B,null,K,M,C,null)}function L(H,B,K,R){let w=null;const V=K.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)w=V;else if(w=K.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const re=w.uuid,ae=B.uuid;let de=p[re];de===void 0&&(de={},p[re]=de);let Z=de[ae];Z===void 0&&(Z=w.clone(),de[ae]=Z,B.addEventListener("dispose",I)),w=Z}if(w.visible=B.visible,w.wireframe=B.wireframe,R===qo?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:_[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,K.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const re=r.properties.get(w);re.light=K}return w}function P(H,B,K,R,w){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===qo)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,H.matrixWorld);const ae=e.update(H),de=H.material;if(Array.isArray(de)){const Z=ae.groups;for(let D=0,F=Z.length;D<F;D++){const $=Z[D],Se=de[$.materialIndex];if(Se&&Se.visible){const Me=L(H,Se,R,w);H.onBeforeShadow(r,H,B,K,ae,Me,$),r.renderBufferDirect(K,null,ae,Me,H,$),H.onAfterShadow(r,H,B,K,ae,Me,$)}}}else if(de.visible){const Z=L(H,de,R,w);H.onBeforeShadow(r,H,B,K,ae,Z,null),r.renderBufferDirect(K,null,ae,Z,H,null),H.onAfterShadow(r,H,B,K,ae,Z,null)}}const re=H.children;for(let ae=0,de=re.length;ae<de;ae++)P(re[ae],B,K,R,w)}function I(H){H.target.removeEventListener("dispose",I);for(const K in p){const R=p[K],w=H.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const X1={[Wd]:Gc,[qd]:Zd,[Yd]:Kd,[Bs]:jd,[Gc]:Wd,[Zd]:qd,[Kd]:Yd,[jd]:Bs};function W1(r,e){function i(){let X=!1;const Ne=new ln;let Ae=null;const Be=new ln(0,0,0,0);return{setMask:function(ye){Ae!==ye&&!X&&(r.colorMask(ye,ye,ye,ye),Ae=ye)},setLocked:function(ye){X=ye},setClear:function(ye,ve,Ce,it,zt){zt===!0&&(ye*=it,ve*=it,Ce*=it),Ne.set(ye,ve,Ce,it),Be.equals(Ne)===!1&&(r.clearColor(ye,ve,Ce,it),Be.copy(Ne))},reset:function(){X=!1,Ae=null,Be.set(-1,0,0,0)}}}function s(){let X=!1,Ne=!1,Ae=null,Be=null,ye=null;return{setReversed:function(ve){if(Ne!==ve){const Ce=e.get("EXT_clip_control");ve?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Ne=ve;const it=ye;ye=null,this.setClear(it)}},getReversed:function(){return Ne},setTest:function(ve){ve?ce(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(ve){Ae!==ve&&!X&&(r.depthMask(ve),Ae=ve)},setFunc:function(ve){if(Ne&&(ve=X1[ve]),Be!==ve){switch(ve){case Wd:r.depthFunc(r.NEVER);break;case Gc:r.depthFunc(r.ALWAYS);break;case qd:r.depthFunc(r.LESS);break;case Bs:r.depthFunc(r.LEQUAL);break;case Yd:r.depthFunc(r.EQUAL);break;case jd:r.depthFunc(r.GEQUAL);break;case Zd:r.depthFunc(r.GREATER);break;case Kd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Be=ve}},setLocked:function(ve){X=ve},setClear:function(ve){ye!==ve&&(Ne&&(ve=1-ve),r.clearDepth(ve),ye=ve)},reset:function(){X=!1,Ae=null,Be=null,ye=null,Ne=!1}}}function l(){let X=!1,Ne=null,Ae=null,Be=null,ye=null,ve=null,Ce=null,it=null,zt=null;return{setTest:function(Rt){X||(Rt?ce(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(Rt){Ne!==Rt&&!X&&(r.stencilMask(Rt),Ne=Rt)},setFunc:function(Rt,Pn,yi){(Ae!==Rt||Be!==Pn||ye!==yi)&&(r.stencilFunc(Rt,Pn,yi),Ae=Rt,Be=Pn,ye=yi)},setOp:function(Rt,Pn,yi){(ve!==Rt||Ce!==Pn||it!==yi)&&(r.stencilOp(Rt,Pn,yi),ve=Rt,Ce=Pn,it=yi)},setLocked:function(Rt){X=Rt},setClear:function(Rt){zt!==Rt&&(r.clearStencil(Rt),zt=Rt)},reset:function(){X=!1,Ne=null,Ae=null,Be=null,ye=null,ve=null,Ce=null,it=null,zt=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,M=[],A=null,C=!1,y=null,x=null,O=null,L=null,P=null,I=null,H=null,B=new Ft(0,0,0),K=0,R=!1,w=null,V=null,re=null,ae=null,de=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,F=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec($)[1]),D=F>=1):$.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),D=F>=2);let Se=null,Me={};const N=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),ge=new ln().fromArray(N),Re=new ln().fromArray(ee);function ze(X,Ne,Ae,Be){const ye=new Uint8Array(4),ve=r.createTexture();r.bindTexture(X,ve),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<Ae;Ce++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(Ne+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return ve}const te={};te[r.TEXTURE_2D]=ze(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ce(r.DEPTH_TEST),d.setFunc(Bs),Ge(!1),ot(F0),ce(r.CULL_FACE),lt(Li);function ce(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function be(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function Ie(X,Ne){return _[X]!==Ne?(r.bindFramebuffer(X,Ne),_[X]=Ne,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ne),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Fe(X,Ne){let Ae=M,Be=!1;if(X){Ae=S.get(Ne),Ae===void 0&&(Ae=[],S.set(Ne,Ae));const ye=X.textures;if(Ae.length!==ye.length||Ae[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,Ce=ye.length;ve<Ce;ve++)Ae[ve]=r.COLOR_ATTACHMENT0+ve;Ae.length=ye.length,Be=!0}}else Ae[0]!==r.BACK&&(Ae[0]=r.BACK,Be=!0);Be&&r.drawBuffers(Ae)}function ht(X){return A!==X?(r.useProgram(X),A=X,!0):!1}const Qt={[Nr]:r.FUNC_ADD,[QS]:r.FUNC_SUBTRACT,[JS]:r.FUNC_REVERSE_SUBTRACT};Qt[$S]=r.MIN,Qt[eM]=r.MAX;const mt={[tM]:r.ZERO,[nM]:r.ONE,[iM]:r.SRC_COLOR,[kd]:r.SRC_ALPHA,[cM]:r.SRC_ALPHA_SATURATE,[oM]:r.DST_COLOR,[rM]:r.DST_ALPHA,[aM]:r.ONE_MINUS_SRC_COLOR,[Xd]:r.ONE_MINUS_SRC_ALPHA,[lM]:r.ONE_MINUS_DST_COLOR,[sM]:r.ONE_MINUS_DST_ALPHA,[uM]:r.CONSTANT_COLOR,[fM]:r.ONE_MINUS_CONSTANT_COLOR,[dM]:r.CONSTANT_ALPHA,[hM]:r.ONE_MINUS_CONSTANT_ALPHA};function lt(X,Ne,Ae,Be,ye,ve,Ce,it,zt,Rt){if(X===Li){C===!0&&(be(r.BLEND),C=!1);return}if(C===!1&&(ce(r.BLEND),C=!0),X!==KS){if(X!==y||Rt!==R){if((x!==Nr||P!==Nr)&&(r.blendEquation(r.FUNC_ADD),x=Nr,P=Nr),Rt)switch(X){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case z0:r.blendFunc(r.ONE,r.ONE);break;case H0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case G0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Nt("WebGLState: Invalid blending: ",X);break}else switch(X){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case z0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case H0:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case G0:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",X);break}O=null,L=null,I=null,H=null,B.set(0,0,0),K=0,y=X,R=Rt}return}ye=ye||Ne,ve=ve||Ae,Ce=Ce||Be,(Ne!==x||ye!==P)&&(r.blendEquationSeparate(Qt[Ne],Qt[ye]),x=Ne,P=ye),(Ae!==O||Be!==L||ve!==I||Ce!==H)&&(r.blendFuncSeparate(mt[Ae],mt[Be],mt[ve],mt[Ce]),O=Ae,L=Be,I=ve,H=Ce),(it.equals(B)===!1||zt!==K)&&(r.blendColor(it.r,it.g,it.b,zt),B.copy(it),K=zt),y=X,R=!1}function yt(X,Ne){X.side===oi?be(r.CULL_FACE):ce(r.CULL_FACE);let Ae=X.side===yn;Ne&&(Ae=!Ae),Ge(Ae),X.blending===Os&&X.transparent===!1?lt(Li):lt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const Be=X.stencilWrite;h.setTest(Be),Be&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Et(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function ot(X){X!==YS?(ce(r.CULL_FACE),X!==V&&(X===F0?r.cullFace(r.BACK):X===jS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),V=X}function G(X){X!==re&&(D&&r.lineWidth(X),re=X)}function Et(X,Ne,Ae){X?(ce(r.POLYGON_OFFSET_FILL),(ae!==Ne||de!==Ae)&&(r.polygonOffset(Ne,Ae),ae=Ne,de=Ae)):be(r.POLYGON_OFFSET_FILL)}function gt(X){X?ce(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function wt(X){X===void 0&&(X=r.TEXTURE0+Z-1),Se!==X&&(r.activeTexture(X),Se=X)}function je(X,Ne,Ae){Ae===void 0&&(Se===null?Ae=r.TEXTURE0+Z-1:Ae=Se);let Be=Me[Ae];Be===void 0&&(Be={type:void 0,texture:void 0},Me[Ae]=Be),(Be.type!==X||Be.texture!==Ne)&&(Se!==Ae&&(r.activeTexture(Ae),Se=Ae),r.bindTexture(X,Ne||te[X]),Be.type=X,Be.texture=Ne)}function U(){const X=Me[Se];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function he(){try{r.texSubImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function xe(){try{r.texSubImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function ue(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function Ke(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function we(){try{r.texStorage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function We(){try{r.texStorage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function nt(){try{r.texImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function Ee(){try{r.texImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function Te(X){ge.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),ge.copy(X))}function He(X){Re.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Re.copy(X))}function Pe(X,Ne){let Ae=p.get(Ne);Ae===void 0&&(Ae=new WeakMap,p.set(Ne,Ae));let Be=Ae.get(X);Be===void 0&&(Be=r.getUniformBlockIndex(Ne,X.name),Ae.set(X,Be))}function De(X,Ne){const Be=p.get(Ne).get(X);m.get(Ne)!==Be&&(r.uniformBlockBinding(Ne,Be,X.__bindingPointIndex),m.set(Ne,Be))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Se=null,Me={},_={},S=new WeakMap,M=[],A=null,C=!1,y=null,x=null,O=null,L=null,P=null,I=null,H=null,B=new Ft(0,0,0),K=0,R=!1,w=null,V=null,re=null,ae=null,de=null,ge.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ce,disable:be,bindFramebuffer:Ie,drawBuffers:Fe,useProgram:ht,setBlending:lt,setMaterial:yt,setFlipSided:Ge,setCullFace:ot,setLineWidth:G,setPolygonOffset:Et,setScissorTest:gt,activeTexture:wt,bindTexture:je,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:nt,texImage3D:Ee,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:we,texStorage3D:We,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ke,scissor:Te,viewport:He,reset:ut}}function q1(r,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new _t,v=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,E){return M?new OffscreenCanvas(U,E):Xc("canvas")}function C(U,E,W){let he=1;const xe=je(U);if((xe.width>W||xe.height>W)&&(he=W/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ue=Math.floor(he*xe.width),Ke=Math.floor(he*xe.height);_===void 0&&(_=A(ue,Ke));const we=E?A(ue,Ke):_;return we.width=ue,we.height=Ke,we.getContext("2d").drawImage(U,0,0,ue,Ke),st("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ue+"x"+Ke+")."),we}else return"data"in U&&st("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){r.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(U,E,W,he,xe=!1){if(U!==null){if(r[U]!==void 0)return r[U];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ue=E;if(E===r.RED&&(W===r.FLOAT&&(ue=r.R32F),W===r.HALF_FLOAT&&(ue=r.R16F),W===r.UNSIGNED_BYTE&&(ue=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ue=r.R8UI),W===r.UNSIGNED_SHORT&&(ue=r.R16UI),W===r.UNSIGNED_INT&&(ue=r.R32UI),W===r.BYTE&&(ue=r.R8I),W===r.SHORT&&(ue=r.R16I),W===r.INT&&(ue=r.R32I)),E===r.RG&&(W===r.FLOAT&&(ue=r.RG32F),W===r.HALF_FLOAT&&(ue=r.RG16F),W===r.UNSIGNED_BYTE&&(ue=r.RG8)),E===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ue=r.RG8UI),W===r.UNSIGNED_SHORT&&(ue=r.RG16UI),W===r.UNSIGNED_INT&&(ue=r.RG32UI),W===r.BYTE&&(ue=r.RG8I),W===r.SHORT&&(ue=r.RG16I),W===r.INT&&(ue=r.RG32I)),E===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),W===r.UNSIGNED_INT&&(ue=r.RGB32UI),W===r.BYTE&&(ue=r.RGB8I),W===r.SHORT&&(ue=r.RGB16I),W===r.INT&&(ue=r.RGB32I)),E===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),W===r.UNSIGNED_INT&&(ue=r.RGBA32UI),W===r.BYTE&&(ue=r.RGBA8I),W===r.SHORT&&(ue=r.RGBA16I),W===r.INT&&(ue=r.RGBA32I)),E===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ue=r.R11F_G11F_B10F)),E===r.RGBA){const Ke=xe?Vc:Ct.getTransfer(he);W===r.FLOAT&&(ue=r.RGBA32F),W===r.HALF_FLOAT&&(ue=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ue=Ke===kt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(U,E){let W;return U?E===null||E===Oi||E===Fs?W=r.DEPTH24_STENCIL8:E===Xi?W=r.DEPTH32F_STENCIL8:E===jo&&(W=r.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Oi||E===Fs?W=r.DEPTH_COMPONENT24:E===Xi?W=r.DEPTH_COMPONENT32F:E===jo&&(W=r.DEPTH_COMPONENT16),W}function I(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==On&&U.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function H(U){const E=U.target;E.removeEventListener("dispose",H),K(E),E.isVideoTexture&&v.delete(E)}function B(U){const E=U.target;E.removeEventListener("dispose",B),w(E)}function K(U){const E=s.get(U);if(E.__webglInit===void 0)return;const W=U.source,he=S.get(W);if(he){const xe=he[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&R(U),Object.keys(he).length===0&&S.delete(W)}s.remove(U)}function R(U){const E=s.get(U);r.deleteTexture(E.__webglTexture);const W=U.source,he=S.get(W);delete he[E.__cacheKey],d.memory.textures--}function w(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let xe=0;xe<E.__webglFramebuffer[he].length;xe++)r.deleteFramebuffer(E.__webglFramebuffer[he][xe]);else r.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)r.deleteFramebuffer(E.__webglFramebuffer[he]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=U.textures;for(let he=0,xe=W.length;he<xe;he++){const ue=s.get(W[he]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),d.memory.textures--),s.remove(W[he])}s.remove(U)}let V=0;function re(){V=0}function ae(){const U=V;return U>=l.maxTextures&&st("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function de(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function Z(U,E){const W=s.get(U);if(U.isVideoTexture&&gt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&W.__version!==U.version){const he=U.image;if(he===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{te(W,U,E);return}}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function D(U,E){const W=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){te(W,U,E);return}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function F(U,E){const W=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){te(W,U,E);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function $(U,E){const W=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&W.__version!==U.version){ce(W,U,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const Se={[$d]:r.REPEAT,[_a]:r.CLAMP_TO_EDGE,[eh]:r.MIRRORED_REPEAT},Me={[On]:r.NEAREST,[gM]:r.NEAREST_MIPMAP_NEAREST,[pc]:r.NEAREST_MIPMAP_LINEAR,[nn]:r.LINEAR,[cd]:r.LINEAR_MIPMAP_NEAREST,[Or]:r.LINEAR_MIPMAP_LINEAR},N={[xM]:r.NEVER,[bM]:r.ALWAYS,[SM]:r.LESS,[qh]:r.LEQUAL,[MM]:r.EQUAL,[Yh]:r.GEQUAL,[yM]:r.GREATER,[EM]:r.NOTEQUAL};function ee(U,E){if(E.type===Xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===nn||E.magFilter===cd||E.magFilter===pc||E.magFilter===Or||E.minFilter===nn||E.minFilter===cd||E.minFilter===pc||E.minFilter===Or)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,Se[E.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,Se[E.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,Se[E.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Me[E.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Me[E.minFilter]),E.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==pc&&E.minFilter!==Or||E.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ge(U,E){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",H));const he=E.source;let xe=S.get(he);xe===void 0&&(xe={},S.set(he,xe));const ue=de(E);if(ue!==U.__cacheKey){xe[ue]===void 0&&(xe[ue]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,W=!0),xe[ue].usedTimes++;const Ke=xe[U.__cacheKey];Ke!==void 0&&(xe[U.__cacheKey].usedTimes--,Ke.usedTimes===0&&R(E)),U.__cacheKey=ue,U.__webglTexture=xe[ue].texture}return W}function Re(U,E,W){return Math.floor(Math.floor(U/W)/E)}function ze(U,E,W,he){const ue=U.updateRanges;if(ue.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,W,he,E.data);else{ue.sort((Ee,Te)=>Ee.start-Te.start);let Ke=0;for(let Ee=1;Ee<ue.length;Ee++){const Te=ue[Ke],He=ue[Ee],Pe=Te.start+Te.count,De=Re(He.start,E.width,4),ut=Re(Te.start,E.width,4);He.start<=Pe+1&&De===ut&&Re(He.start+He.count-1,E.width,4)===De?Te.count=Math.max(Te.count,He.start+He.count-Te.start):(++Ke,ue[Ke]=He)}ue.length=Ke+1;const we=r.getParameter(r.UNPACK_ROW_LENGTH),We=r.getParameter(r.UNPACK_SKIP_PIXELS),nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ee=0,Te=ue.length;Ee<Te;Ee++){const He=ue[Ee],Pe=Math.floor(He.start/4),De=Math.ceil(He.count/4),ut=Pe%E.width,X=Math.floor(Pe/E.width),Ne=De,Ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,ut,X,Ne,Ae,W,he,E.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,we),r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,nt)}}function te(U,E,W){let he=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=r.TEXTURE_3D);const xe=ge(U,E),ue=E.source;i.bindTexture(he,U.__webglTexture,r.TEXTURE0+W);const Ke=s.get(ue);if(ue.version!==Ke.__version||xe===!0){i.activeTexture(r.TEXTURE0+W);const we=Ct.getPrimaries(Ct.workingColorSpace),We=E.colorSpace===ki?null:Ct.getPrimaries(E.colorSpace),nt=E.colorSpace===ki||we===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ee=C(E.image,!1,l.maxTextureSize);Ee=wt(E,Ee);const Te=c.convert(E.format,E.colorSpace),He=c.convert(E.type);let Pe=L(E.internalFormat,Te,He,E.colorSpace,E.isVideoTexture);ee(he,E);let De;const ut=E.mipmaps,X=E.isVideoTexture!==!0,Ne=Ke.__version===void 0||xe===!0,Ae=ue.dataReady,Be=I(E,Ee);if(E.isDepthTexture)Pe=P(E.format===nr,E.type),Ne&&(X?i.texStorage2D(r.TEXTURE_2D,1,Pe,Ee.width,Ee.height):i.texImage2D(r.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,Te,He,null));else if(E.isDataTexture)if(ut.length>0){X&&Ne&&i.texStorage2D(r.TEXTURE_2D,Be,Pe,ut[0].width,ut[0].height);for(let ye=0,ve=ut.length;ye<ve;ye++)De=ut[ye],X?Ae&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,De.width,De.height,Te,He,De.data):i.texImage2D(r.TEXTURE_2D,ye,Pe,De.width,De.height,0,Te,He,De.data);E.generateMipmaps=!1}else X?(Ne&&i.texStorage2D(r.TEXTURE_2D,Be,Pe,Ee.width,Ee.height),Ae&&ze(E,Ee,Te,He)):i.texImage2D(r.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,Te,He,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Pe,ut[0].width,ut[0].height,Ee.depth);for(let ye=0,ve=ut.length;ye<ve;ye++)if(De=ut[ye],E.format!==Ni)if(Te!==null)if(X){if(Ae)if(E.layerUpdates.size>0){const Ce=l_(De.width,De.height,E.format,E.type);for(const it of E.layerUpdates){const zt=De.data.subarray(it*Ce/De.data.BYTES_PER_ELEMENT,(it+1)*Ce/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,it,De.width,De.height,1,Te,zt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,De.width,De.height,Ee.depth,Te,De.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Pe,De.width,De.height,Ee.depth,0,De.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ae&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,De.width,De.height,Ee.depth,Te,He,De.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ye,Pe,De.width,De.height,Ee.depth,0,Te,He,De.data)}else{X&&Ne&&i.texStorage2D(r.TEXTURE_2D,Be,Pe,ut[0].width,ut[0].height);for(let ye=0,ve=ut.length;ye<ve;ye++)De=ut[ye],E.format!==Ni?Te!==null?X?Ae&&i.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,De.width,De.height,Te,De.data):i.compressedTexImage2D(r.TEXTURE_2D,ye,Pe,De.width,De.height,0,De.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ae&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,De.width,De.height,Te,He,De.data):i.texImage2D(r.TEXTURE_2D,ye,Pe,De.width,De.height,0,Te,He,De.data)}else if(E.isDataArrayTexture)if(X){if(Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Pe,Ee.width,Ee.height,Ee.depth),Ae)if(E.layerUpdates.size>0){const ye=l_(Ee.width,Ee.height,E.format,E.type);for(const ve of E.layerUpdates){const Ce=Ee.data.subarray(ve*ye/Ee.data.BYTES_PER_ELEMENT,(ve+1)*ye/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,Ee.width,Ee.height,1,Te,He,Ce)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,He,Ee.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,Ee.width,Ee.height,Ee.depth,0,Te,He,Ee.data);else if(E.isData3DTexture)X?(Ne&&i.texStorage3D(r.TEXTURE_3D,Be,Pe,Ee.width,Ee.height,Ee.depth),Ae&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,He,Ee.data)):i.texImage3D(r.TEXTURE_3D,0,Pe,Ee.width,Ee.height,Ee.depth,0,Te,He,Ee.data);else if(E.isFramebufferTexture){if(Ne)if(X)i.texStorage2D(r.TEXTURE_2D,Be,Pe,Ee.width,Ee.height);else{let ye=Ee.width,ve=Ee.height;for(let Ce=0;Ce<Be;Ce++)i.texImage2D(r.TEXTURE_2D,Ce,Pe,ye,ve,0,Te,He,null),ye>>=1,ve>>=1}}else if(ut.length>0){if(X&&Ne){const ye=je(ut[0]);i.texStorage2D(r.TEXTURE_2D,Be,Pe,ye.width,ye.height)}for(let ye=0,ve=ut.length;ye<ve;ye++)De=ut[ye],X?Ae&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Te,He,De):i.texImage2D(r.TEXTURE_2D,ye,Pe,Te,He,De);E.generateMipmaps=!1}else if(X){if(Ne){const ye=je(Ee);i.texStorage2D(r.TEXTURE_2D,Be,Pe,ye.width,ye.height)}Ae&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,He,Ee)}else i.texImage2D(r.TEXTURE_2D,0,Pe,Te,He,Ee);y(E)&&x(he),Ke.__version=ue.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ce(U,E,W){if(E.image.length!==6)return;const he=ge(U,E),xe=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+W);const ue=s.get(xe);if(xe.version!==ue.__version||he===!0){i.activeTexture(r.TEXTURE0+W);const Ke=Ct.getPrimaries(Ct.workingColorSpace),we=E.colorSpace===ki?null:Ct.getPrimaries(E.colorSpace),We=E.colorSpace===ki||Ke===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const nt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let ve=0;ve<6;ve++)!nt&&!Ee?Te[ve]=C(E.image[ve],!0,l.maxCubemapSize):Te[ve]=Ee?E.image[ve].image:E.image[ve],Te[ve]=wt(E,Te[ve]);const He=Te[0],Pe=c.convert(E.format,E.colorSpace),De=c.convert(E.type),ut=L(E.internalFormat,Pe,De,E.colorSpace),X=E.isVideoTexture!==!0,Ne=ue.__version===void 0||he===!0,Ae=xe.dataReady;let Be=I(E,He);ee(r.TEXTURE_CUBE_MAP,E);let ye;if(nt){X&&Ne&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ut,He.width,He.height);for(let ve=0;ve<6;ve++){ye=Te[ve].mipmaps;for(let Ce=0;Ce<ye.length;Ce++){const it=ye[Ce];E.format!==Ni?Pe!==null?X?Ae&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,0,0,it.width,it.height,Pe,it.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,ut,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,0,0,it.width,it.height,Pe,De,it.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,ut,it.width,it.height,0,Pe,De,it.data)}}}else{if(ye=E.mipmaps,X&&Ne){ye.length>0&&Be++;const ve=je(Te[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ut,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ee){X?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te[ve].width,Te[ve].height,Pe,De,Te[ve].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,Te[ve].width,Te[ve].height,0,Pe,De,Te[ve].data);for(let Ce=0;Ce<ye.length;Ce++){const zt=ye[Ce].image[ve].image;X?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,0,0,zt.width,zt.height,Pe,De,zt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,ut,zt.width,zt.height,0,Pe,De,zt.data)}}else{X?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Pe,De,Te[ve]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,Pe,De,Te[ve]);for(let Ce=0;Ce<ye.length;Ce++){const it=ye[Ce];X?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,0,0,Pe,De,it.image[ve]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,ut,Pe,De,it.image[ve])}}}y(E)&&x(r.TEXTURE_CUBE_MAP),ue.__version=xe.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function be(U,E,W,he,xe,ue){const Ke=c.convert(W.format,W.colorSpace),we=c.convert(W.type),We=L(W.internalFormat,Ke,we,W.colorSpace),nt=s.get(E),Ee=s.get(W);if(Ee.__renderTarget=E,!nt.__hasExternalTextures){const Te=Math.max(1,E.width>>ue),He=Math.max(1,E.height>>ue);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?i.texImage3D(xe,ue,We,Te,He,E.depth,0,Ke,we,null):i.texImage2D(xe,ue,We,Te,He,0,Ke,we,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),Et(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,xe,Ee.__webglTexture,0,G(E)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,xe,Ee.__webglTexture,ue),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(U,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,U),E.depthBuffer){const he=E.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ue=P(E.stencilBuffer,xe),Ke=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Et(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(E),ue,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(E),ue,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ue,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ke,r.RENDERBUFFER,U)}else{const he=E.textures;for(let xe=0;xe<he.length;xe++){const ue=he[xe],Ke=c.convert(ue.format,ue.colorSpace),we=c.convert(ue.type),We=L(ue.internalFormat,Ke,we,ue.colorSpace);Et(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(E),We,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(E),We,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,We,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(U,E,W){const he=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(E.depthTexture);if(xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,E.depthTexture.addEventListener("dispose",H)),xe.__webglTexture===void 0){xe.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),ee(r.TEXTURE_CUBE_MAP,E.depthTexture);const nt=c.convert(E.depthTexture.format),Ee=c.convert(E.depthTexture.type);let Te;E.depthTexture.format===ya?Te=r.DEPTH_COMPONENT24:E.depthTexture.format===nr&&(Te=r.DEPTH24_STENCIL8);for(let He=0;He<6;He++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Te,E.width,E.height,0,nt,Ee,null)}}else Z(E.depthTexture,0);const ue=xe.__webglTexture,Ke=G(E),we=he?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,We=E.depthTexture.format===nr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)Et(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,we,ue,0,Ke):r.framebufferTexture2D(r.FRAMEBUFFER,We,we,ue,0);else if(E.depthTexture.format===nr)Et(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,we,ue,0,Ke):r.framebufferTexture2D(r.FRAMEBUFFER,We,we,ue,0);else throw new Error("Unknown depthTexture format")}function ht(U){const E=s.get(U),W=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const he=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const xe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),E.__depthDisposeCallback=xe}E.__boundDepthTexture=he}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)Fe(E.__webglFramebuffer[he],U,he);else{const he=U.texture.mipmaps;he&&he.length>0?Fe(E.__webglFramebuffer[0],U,0):Fe(E.__webglFramebuffer,U,0)}else if(W){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=r.createRenderbuffer(),Ie(E.__webglDepthbuffer[he],U,!1);else{const xe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,ue)}}else{const he=U.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ie(E.__webglDepthbuffer,U,!1);else{const xe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,ue)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(U,E,W){const he=s.get(U);E!==void 0&&be(he.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&ht(U)}function mt(U){const E=U.texture,W=s.get(U),he=s.get(E);U.addEventListener("dispose",B);const xe=U.textures,ue=U.isWebGLCubeRenderTarget===!0,Ke=xe.length>1;if(Ke||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=E.version,d.memory.textures++),ue){W.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[we]=[];for(let We=0;We<E.mipmaps.length;We++)W.__webglFramebuffer[we][We]=r.createFramebuffer()}else W.__webglFramebuffer[we]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)W.__webglFramebuffer[we]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Ke)for(let we=0,We=xe.length;we<We;we++){const nt=s.get(xe[we]);nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture(),d.memory.textures++)}if(U.samples>0&&Et(U)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let we=0;we<xe.length;we++){const We=xe[we];W.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[we]);const nt=c.convert(We.format,We.colorSpace),Ee=c.convert(We.type),Te=L(We.internalFormat,nt,Ee,We.colorSpace,U.isXRRenderTarget===!0),He=G(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,Te,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,W.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(W.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){i.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),ee(r.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)be(W.__webglFramebuffer[we][We],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,We);else be(W.__webglFramebuffer[we],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(E)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let we=0,We=xe.length;we<We;we++){const nt=xe[we],Ee=s.get(nt);let Te=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Te=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Te,Ee.__webglTexture),ee(Te,nt),be(W.__webglFramebuffer,U,nt,r.COLOR_ATTACHMENT0+we,Te,0),y(nt)&&x(Te)}i.unbindTexture()}else{let we=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(we,he.__webglTexture),ee(we,E),E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)be(W.__webglFramebuffer[We],U,E,r.COLOR_ATTACHMENT0,we,We);else be(W.__webglFramebuffer,U,E,r.COLOR_ATTACHMENT0,we,0);y(E)&&x(we),i.unbindTexture()}U.depthBuffer&&ht(U)}function lt(U){const E=U.textures;for(let W=0,he=E.length;W<he;W++){const xe=E[W];if(y(xe)){const ue=O(U),Ke=s.get(xe).__webglTexture;i.bindTexture(ue,Ke),x(ue),i.unbindTexture()}}}const yt=[],Ge=[];function ot(U){if(U.samples>0){if(Et(U)===!1){const E=U.textures,W=U.width,he=U.height;let xe=r.COLOR_BUFFER_BIT;const ue=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ke=s.get(U),we=E.length>1;if(we)for(let nt=0;nt<E.length;nt++)i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const We=U.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let nt=0;nt<E.length;nt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Ee=s.get(E[nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,W,he,0,0,W,he,xe,r.NEAREST),m===!0&&(yt.length=0,Ge.length=0,yt.push(r.COLOR_ATTACHMENT0+nt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(yt.push(ue),Ge.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ge)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,yt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let nt=0;nt<E.length;nt++){i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Ee=s.get(E[nt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,Ee,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function G(U){return Math.min(l.maxSamples,U.samples)}function Et(U){const E=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(U){const E=d.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function wt(U,E){const W=U.colorSpace,he=U.format,xe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==ar&&W!==ki&&(Ct.getTransfer(W)===kt?(he!==Ni||xe!==Hn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",W)),E}function je(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=re,this.setTexture2D=Z,this.setTexture2DArray=D,this.setTexture3D=F,this.setTextureCube=$,this.rebindTextures=Qt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Y1(r,e){function i(s,l=ki){let c;const d=Ct.getTransfer(l);if(s===Hn)return r.UNSIGNED_BYTE;if(s===Gh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Vh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===ev)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Q_)return r.BYTE;if(s===J_)return r.SHORT;if(s===jo)return r.UNSIGNED_SHORT;if(s===Hh)return r.INT;if(s===Oi)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===Ma)return r.HALF_FLOAT;if(s===tv)return r.ALPHA;if(s===nv)return r.RGB;if(s===Ni)return r.RGBA;if(s===ya)return r.DEPTH_COMPONENT;if(s===nr)return r.DEPTH_STENCIL;if(s===iv)return r.RED;if(s===kh)return r.RED_INTEGER;if(s===zs)return r.RG;if(s===Xh)return r.RG_INTEGER;if(s===Wh)return r.RGBA_INTEGER;if(s===Bc||s===Ic||s===Fc||s===zc)if(d===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===th||s===nh||s===ih||s===ah)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ih)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rh||s===sh||s===oh||s===lh||s===ch||s===uh||s===fh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===rh||s===sh)return d===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===oh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===lh)return c.COMPRESSED_R11_EAC;if(s===ch)return c.COMPRESSED_SIGNED_R11_EAC;if(s===uh)return c.COMPRESSED_RG11_EAC;if(s===fh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===Sh||s===Mh||s===yh||s===Eh||s===bh||s===Th)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===dh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ph)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===mh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_h)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Eh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Th)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ah||s===Rh||s===Ch)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Ah)return d===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Rh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ch)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wh||s===Dh||s===Uh||s===Nh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===wh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Dh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Uh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fs?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const j1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class K1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new gv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Qn({vertexShader:j1,fragmentShader:Z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pi(new nl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q1 extends rr{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,v=null,_=null,S=null,M=null,A=null;const C=typeof XRWebGLBinding<"u",y=new K1,x={},O=i.getContextAttributes();let L=null,P=null;const I=[],H=[],B=new _t;let K=null;const R=new Si;R.viewport=new ln;const w=new Si;w.viewport=new ln;const V=[R,w],re=new sy;let ae=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=I[te];return ce===void 0&&(ce=new Nd,I[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=I[te];return ce===void 0&&(ce=new Nd,I[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=I[te];return ce===void 0&&(ce=new Nd,I[te]=ce),ce.getHandSpace()};function Z(te){const ce=H.indexOf(te.inputSource);if(ce===-1)return;const be=I[ce];be!==void 0&&(be.update(te.inputSource,te.frame,p||d),be.dispatchEvent({type:te.type,data:te.inputSource}))}function D(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",D),l.removeEventListener("inputsourceschange",F);for(let te=0;te<I.length;te++){const ce=H[te];ce!==null&&(H[te]=null,I[te].disconnect(ce))}ae=null,de=null,y.reset();for(const te in x)delete x[te];e.setRenderTarget(L),M=null,S=null,_=null,l=null,P=null,ze.stop(),s.isPresenting=!1,e.setPixelRatio(K),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,s.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,s.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",D),l.addEventListener("inputsourceschange",F),O.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ie=null,Fe=null;O.depth&&(Fe=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=O.stencil?nr:ya,Ie=O.stencil?Fs:Oi);const ht={colorFormat:i.RGBA8,depthFormat:Fe,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(ht),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new Kn(S.textureWidth,S.textureHeight,{format:Ni,type:Hn,depthTexture:new Gs(S.textureWidth,S.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const be={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Kn(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),ze.setContext(l),ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function F(te){for(let ce=0;ce<te.removed.length;ce++){const be=te.removed[ce],Ie=H.indexOf(be);Ie>=0&&(H[Ie]=null,I[Ie].disconnect(be))}for(let ce=0;ce<te.added.length;ce++){const be=te.added[ce];let Ie=H.indexOf(be);if(Ie===-1){for(let ht=0;ht<I.length;ht++)if(ht>=H.length){H.push(be),Ie=ht;break}else if(H[ht]===null){H[ht]=be,Ie=ht;break}if(Ie===-1)break}const Fe=I[Ie];Fe&&Fe.connect(be)}}const $=new oe,Se=new oe;function Me(te,ce,be){$.setFromMatrixPosition(ce.matrixWorld),Se.setFromMatrixPosition(be.matrixWorld);const Ie=$.distanceTo(Se),Fe=ce.projectionMatrix.elements,ht=be.projectionMatrix.elements,Qt=Fe[14]/(Fe[10]-1),mt=Fe[14]/(Fe[10]+1),lt=(Fe[9]+1)/Fe[5],yt=(Fe[9]-1)/Fe[5],Ge=(Fe[8]-1)/Fe[0],ot=(ht[8]+1)/ht[0],G=Qt*Ge,Et=Qt*ot,gt=Ie/(-Ge+ot),wt=gt*-Ge;if(ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(wt),te.translateZ(gt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Fe[10]===-1)te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const je=Qt+gt,U=mt+gt,E=G-wt,W=Et+(Ie-wt),he=lt*mt/U*je,xe=yt*mt/U*je;te.projectionMatrix.makePerspective(E,W,he,xe,je,U),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function N(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let ce=te.near,be=te.far;y.texture!==null&&(y.depthNear>0&&(ce=y.depthNear),y.depthFar>0&&(be=y.depthFar)),re.near=w.near=R.near=ce,re.far=w.far=R.far=be,(ae!==re.near||de!==re.far)&&(l.updateRenderState({depthNear:re.near,depthFar:re.far}),ae=re.near,de=re.far),re.layers.mask=te.layers.mask|6,R.layers.mask=re.layers.mask&3,w.layers.mask=re.layers.mask&5;const Ie=te.parent,Fe=re.cameras;N(re,Ie);for(let ht=0;ht<Fe.length;ht++)N(Fe[ht],Ie);Fe.length===2?Me(re,R,w):re.projectionMatrix.copy(R.projectionMatrix),ee(te,re,Ie)};function ee(te,ce,be){be===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(be.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Oh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(te){m=te,S!==null&&(S.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(re)},this.getCameraTexture=function(te){return x[te]};let ge=null;function Re(te,ce){if(v=ce.getViewerPose(p||d),A=ce,v!==null){const be=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Ie=!1;be.length!==re.cameras.length&&(re.cameras.length=0,Ie=!0);for(let mt=0;mt<be.length;mt++){const lt=be[mt];let yt=null;if(M!==null)yt=M.getViewport(lt);else{const ot=_.getViewSubImage(S,lt);yt=ot.viewport,mt===0&&(e.setRenderTargetTextures(P,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(P))}let Ge=V[mt];Ge===void 0&&(Ge=new Si,Ge.layers.enable(mt),Ge.viewport=new ln,V[mt]=Ge),Ge.matrix.fromArray(lt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(lt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(yt.x,yt.y,yt.width,yt.height),mt===0&&(re.matrix.copy(Ge.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),Ie===!0&&re.cameras.push(Ge)}const Fe=l.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const mt=_.getDepthInformation(be[0]);mt&&mt.isValid&&mt.texture&&y.init(mt,l.renderState)}if(Fe&&Fe.includes("camera-access")&&C){e.state.unbindTexture(),_=s.getBinding();for(let mt=0;mt<be.length;mt++){const lt=be[mt].camera;if(lt){let yt=x[lt];yt||(yt=new gv,x[lt]=yt);const Ge=_.getCameraImage(lt);yt.sourceTexture=Ge}}}}for(let be=0;be<I.length;be++){const Ie=H[be],Fe=I[be];Ie!==null&&Fe!==void 0&&Fe.update(Ie,ce,p||d)}ge&&ge(te,ce),ce.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ce}),A=null}const ze=new _v;ze.setAnimationLoop(Re),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}}const Dr=new Ea,J1=new mn;function $1(r,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,fv(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,O,L,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x)):x.isMeshStandardMaterial?(c(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,P)):x.isMeshMatcapMaterial?(c(y,x),A(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),C(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?m(y,x,O,L):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===yn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===yn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const O=e.get(x),L=O.envMap,P=O.envMapRotation;L&&(y.envMap.value=L,Dr.copy(P),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),y.envMapRotation.value.setFromMatrix4(J1.makeRotationFromEuler(Dr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,O,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*O,y.scale.value=L*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,O){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===yn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const O=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function eA(r,e,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,L){const P=L.program;s.uniformBlockBinding(O,P)}function p(O,L){let P=l[O.id];P===void 0&&(A(O),P=v(O),l[O.id]=P,O.addEventListener("dispose",y));const I=L.program;s.updateUBOMapping(O,I);const H=e.render.frame;c[O.id]!==H&&(S(O),c[O.id]=H)}function v(O){const L=_();O.__bindingPointIndex=L;const P=r.createBuffer(),I=O.__size,H=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,I,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function _(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const L=l[O.id],P=O.uniforms,I=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let H=0,B=P.length;H<B;H++){const K=Array.isArray(P[H])?P[H]:[P[H]];for(let R=0,w=K.length;R<w;R++){const V=K[R];if(M(V,H,R,I)===!0){const re=V.__offset,ae=Array.isArray(V.value)?V.value:[V.value];let de=0;for(let Z=0;Z<ae.length;Z++){const D=ae[Z],F=C(D);typeof D=="number"||typeof D=="boolean"?(V.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,re+de,V.__data)):D.isMatrix3?(V.__data[0]=D.elements[0],V.__data[1]=D.elements[1],V.__data[2]=D.elements[2],V.__data[3]=0,V.__data[4]=D.elements[3],V.__data[5]=D.elements[4],V.__data[6]=D.elements[5],V.__data[7]=0,V.__data[8]=D.elements[6],V.__data[9]=D.elements[7],V.__data[10]=D.elements[8],V.__data[11]=0):(D.toArray(V.__data,de),de+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,re,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(O,L,P,I){const H=O.value,B=L+"_"+P;if(I[B]===void 0)return typeof H=="number"||typeof H=="boolean"?I[B]=H:I[B]=H.clone(),!0;{const K=I[B];if(typeof H=="number"||typeof H=="boolean"){if(K!==H)return I[B]=H,!0}else if(K.equals(H)===!1)return K.copy(H),!0}return!1}function A(O){const L=O.uniforms;let P=0;const I=16;for(let B=0,K=L.length;B<K;B++){const R=Array.isArray(L[B])?L[B]:[L[B]];for(let w=0,V=R.length;w<V;w++){const re=R[w],ae=Array.isArray(re.value)?re.value:[re.value];for(let de=0,Z=ae.length;de<Z;de++){const D=ae[de],F=C(D),$=P%I,Se=$%F.boundary,Me=$+Se;P+=Se,Me!==0&&I-Me<F.storage&&(P+=I-Me),re.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=P,P+=F.storage}}}const H=P%I;return H>0&&(P+=I-H),O.__size=P,O.__cache={},this}function C(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",O),L}function y(O){const L=O.target;L.removeEventListener("dispose",y);const P=d.indexOf(L.__bindingPointIndex);d.splice(P,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const O in l)r.deleteBuffer(l[O]);d=[],l={},c={}}return{bind:m,update:p,dispose:x}}const tA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function nA(){return Gi===null&&(Gi=new JM(tA,16,16,zs,Ma),Gi.name="DFG_LUT",Gi.minFilter=nn,Gi.magFilter=nn,Gi.wrapS=_a,Gi.wrapT=_a,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class iA{constructor(e={}){const{canvas:i=TM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:M=Hn}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const C=M,y=new Set([Wh,Xh,kh]),x=new Set([Hn,Oi,jo,Fs,Gh,Vh]),O=new Uint32Array(4),L=new Int32Array(4);let P=null,I=null;const H=[],B=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let w=!1;this._outputColorSpace=on;let V=0,re=0,ae=null,de=-1,Z=null;const D=new ln,F=new ln;let $=null;const Se=new Ft(0);let Me=0,N=i.width,ee=i.height,ge=1,Re=null,ze=null;const te=new ln(0,0,N,ee),ce=new ln(0,0,N,ee);let be=!1;const Ie=new mv;let Fe=!1,ht=!1;const Qt=new mn,mt=new oe,lt=new ln,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function ot(){return ae===null?ge:1}let G=s;function Et(T,q){return i.getContext(T,q)}try{const T={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${jc}`),i.addEventListener("webglcontextlost",it,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),G===null){const q="webgl2";if(G=Et(q,T),G===null)throw Et(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Nt("WebGLRenderer: "+T.message),T}let gt,wt,je,U,E,W,he,xe,ue,Ke,we,We,nt,Ee,Te,He,Pe,De,ut,X,Ne,Ae,Be,ye;function ve(){gt=new nT(G),gt.init(),Ae=new Y1(G,gt),wt=new Yb(G,gt,e,Ae),je=new W1(G,gt),wt.reversedDepthBuffer&&S&&je.buffers.depth.setReversed(!0),U=new rT(G),E=new D1,W=new q1(G,gt,je,E,wt,Ae,U),he=new Zb(R),xe=new tT(R),ue=new cy(G),Be=new Wb(G,ue),Ke=new iT(G,ue,U,Be),we=new oT(G,Ke,ue,U),ut=new sT(G,wt,W),He=new jb(E),We=new w1(R,he,xe,gt,wt,Be,He),nt=new $1(R,E),Ee=new N1,Te=new F1(gt),De=new Xb(R,he,xe,je,we,A,m),Pe=new k1(R,we,wt),ye=new eA(G,U,wt,je),X=new qb(G,gt,U),Ne=new aT(G,gt,U),U.programs=We.programs,R.capabilities=wt,R.extensions=gt,R.properties=E,R.renderLists=Ee,R.shadowMap=Pe,R.state=je,R.info=U}ve(),C!==Hn&&(K=new cT(C,i.width,i.height,l,c));const Ce=new Q1(R,G);this.xr=Ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(T){T!==void 0&&(ge=T,this.setSize(N,ee,!1))},this.getSize=function(T){return T.set(N,ee)},this.setSize=function(T,q,se=!0){if(Ce.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,ee=q,i.width=Math.floor(T*ge),i.height=Math.floor(q*ge),se===!0&&(i.style.width=T+"px",i.style.height=q+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(N*ge,ee*ge).floor()},this.setDrawingBufferSize=function(T,q,se){N=T,ee=q,ge=se,i.width=Math.floor(T*se),i.height=Math.floor(q*se),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(C===Hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,q,se,ne){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,q,se,ne),je.viewport(D.copy(te).multiplyScalar(ge).round())},this.getScissor=function(T){return T.copy(ce)},this.setScissor=function(T,q,se,ne){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,q,se,ne),je.scissor(F.copy(ce).multiplyScalar(ge).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(T){je.setScissorTest(be=T)},this.setOpaqueSort=function(T){Re=T},this.setTransparentSort=function(T){ze=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,se=!0){let ne=0;if(T){let j=!1;if(ae!==null){const Ue=ae.texture.format;j=y.has(Ue)}if(j){const Ue=ae.texture.type,Ve=x.has(Ue),Le=De.getClearColor(),ke=De.getClearAlpha(),qe=Le.r,$e=Le.g,Ye=Le.b;Ve?(O[0]=qe,O[1]=$e,O[2]=Ye,O[3]=ke,G.clearBufferuiv(G.COLOR,0,O)):(L[0]=qe,L[1]=$e,L[2]=Ye,L[3]=ke,G.clearBufferiv(G.COLOR,0,L))}else ne|=G.COLOR_BUFFER_BIT}q&&(ne|=G.DEPTH_BUFFER_BIT),se&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",it,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),De.dispose(),Ee.dispose(),Te.dispose(),E.dispose(),he.dispose(),xe.dispose(),we.dispose(),Be.dispose(),ye.dispose(),We.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",zr),Ce.removeEventListener("sessionend",qs),Bi.stop()};function it(T){T.preventDefault(),W0("WebGLRenderer: Context Lost."),w=!0}function zt(){W0("WebGLRenderer: Context Restored."),w=!1;const T=U.autoReset,q=Pe.enabled,se=Pe.autoUpdate,ne=Pe.needsUpdate,j=Pe.type;ve(),U.autoReset=T,Pe.enabled=q,Pe.autoUpdate=se,Pe.needsUpdate=ne,Pe.type=j}function Rt(T){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pn(T){const q=T.target;q.removeEventListener("dispose",Pn),yi(q)}function yi(T){il(T),E.remove(T)}function il(T){const q=E.get(T).programs;q!==void 0&&(q.forEach(function(se){We.releaseProgram(se)}),T.isShaderMaterial&&We.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,se,ne,j,Ue){q===null&&(q=yt);const Ve=j.isMesh&&j.matrixWorld.determinant()<0,Le=or(T,q,se,ne,j);je.setMaterial(ne,Ve);let ke=se.index,qe=1;if(ne.wireframe===!0){if(ke=Ke.getWireframeAttribute(se),ke===void 0)return;qe=2}const $e=se.drawRange,Ye=se.attributes.position;let et=$e.start*qe,Ot=($e.start+$e.count)*qe;Ue!==null&&(et=Math.max(et,Ue.start*qe),Ot=Math.min(Ot,(Ue.start+Ue.count)*qe)),ke!==null?(et=Math.max(et,0),Ot=Math.min(Ot,ke.count)):Ye!=null&&(et=Math.max(et,0),Ot=Math.min(Ot,Ye.count));const Jt=Ot-et;if(Jt<0||Jt===1/0)return;Be.setup(j,ne,Le,se,ke);let jt,It=X;if(ke!==null&&(jt=ue.get(ke),It=Ne,It.setIndex(jt)),j.isMesh)ne.wireframe===!0?(je.setLineWidth(ne.wireframeLinewidth*ot()),It.setMode(G.LINES)):It.setMode(G.TRIANGLES);else if(j.isLine){let Qe=ne.linewidth;Qe===void 0&&(Qe=1),je.setLineWidth(Qe*ot()),j.isLineSegments?It.setMode(G.LINES):j.isLineLoop?It.setMode(G.LINE_LOOP):It.setMode(G.LINE_STRIP)}else j.isPoints?It.setMode(G.POINTS):j.isSprite&&It.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))It.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qe=j._multiDrawStarts,Pt=j._multiDrawCounts,at=j._multiDrawCount,Tn=ke?ue.get(ke).bytesPerElement:1,ji=E.get(ne).currentProgram.getUniforms();for(let An=0;An<at;An++)ji.setValue(G,"_gl_DrawID",An),It.render(Qe[An]/Tn,Pt[An])}else if(j.isInstancedMesh)It.renderInstances(et,Jt,j.count);else if(se.isInstancedBufferGeometry){const Qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Pt=Math.min(se.instanceCount,Qe);It.renderInstances(et,Jt,Pt)}else It.render(et,Jt)};function Xs(T,q,se){T.transparent===!0&&T.side===oi&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,Gr(T,q,se),T.side=Sa,T.needsUpdate=!0,Gr(T,q,se),T.side=oi):Gr(T,q,se)}this.compile=function(T,q,se=null){se===null&&(se=T),I=Te.get(se),I.init(q),B.push(I),se.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(I.pushLight(j),j.castShadow&&I.pushShadow(j))}),T!==se&&T.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(I.pushLight(j),j.castShadow&&I.pushShadow(j))}),I.setupLights();const ne=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ue=j.material;if(Ue)if(Array.isArray(Ue))for(let Ve=0;Ve<Ue.length;Ve++){const Le=Ue[Ve];Xs(Le,se,j),ne.add(Le)}else Xs(Ue,se,j),ne.add(Ue)}),I=B.pop(),ne},this.compileAsync=function(T,q,se=null){const ne=this.compile(T,q,se);return new Promise(j=>{function Ue(){if(ne.forEach(function(Ve){E.get(Ve).currentProgram.isReady()&&ne.delete(Ve)}),ne.size===0){j(T);return}setTimeout(Ue,10)}gt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Fr=null;function Ws(T){Fr&&Fr(T)}function zr(){Bi.stop()}function qs(){Bi.start()}const Bi=new _v;Bi.setAnimationLoop(Ws),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(T){Fr=T,Ce.setAnimationLoop(T),T===null?Bi.stop():Bi.start()},Ce.addEventListener("sessionstart",zr),Ce.addEventListener("sessionend",qs),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const se=Ce.enabled===!0&&Ce.isPresenting===!0,ne=K!==null&&(ae===null||se)&&K.begin(R,ae);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,q,ae),I=Te.get(T,B.length),I.init(q),B.push(I),Qt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ie.setFromProjectionMatrix(Qt,Wi,q.reversedDepth),ht=this.localClippingEnabled,Fe=He.init(this.clippingPlanes,ht),P=Ee.get(T,H.length),P.init(),H.push(P),Ce.enabled===!0&&Ce.isPresenting===!0){const Ve=R.xr.getDepthSensingMesh();Ve!==null&&ci(Ve,q,-1/0,R.sortObjects)}ci(T,q,0,R.sortObjects),P.finish(),R.sortObjects===!0&&P.sort(Re,ze),Ge=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Ge&&De.addToRenderList(P,T),this.info.render.frame++,Fe===!0&&He.beginShadows();const j=I.state.shadowsArray;if(Pe.render(j,T,q),Fe===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&K.hasRenderPass())===!1){const Ve=P.opaque,Le=P.transmissive;if(I.setupLights(),q.isArrayCamera){const ke=q.cameras;if(Le.length>0)for(let qe=0,$e=ke.length;qe<$e;qe++){const Ye=ke[qe];bn(Ve,Le,T,Ye)}Ge&&De.render(T);for(let qe=0,$e=ke.length;qe<$e;qe++){const Ye=ke[qe];cn(P,T,Ye,Ye.viewport)}}else Le.length>0&&bn(Ve,Le,T,q),Ge&&De.render(T),cn(P,T,q)}ae!==null&&re===0&&(W.updateMultisampleRenderTarget(ae),W.updateRenderTargetMipmap(ae)),ne&&K.end(R),T.isScene===!0&&T.onAfterRender(R,T,q),Be.resetDefaultState(),de=-1,Z=null,B.pop(),B.length>0?(I=B[B.length-1],Fe===!0&&He.setGlobalState(R.clippingPlanes,I.state.camera)):I=null,H.pop(),H.length>0?P=H[H.length-1]:P=null};function ci(T,q,se,ne){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)se=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)I.pushLight(T),T.castShadow&&I.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ie.intersectsSprite(T)){ne&&lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Qt);const Ve=we.update(T),Le=T.material;Le.visible&&P.push(T,Ve,Le,se,lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ie.intersectsObject(T))){const Ve=we.update(T),Le=T.material;if(ne&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lt.copy(T.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),lt.copy(Ve.boundingSphere.center)),lt.applyMatrix4(T.matrixWorld).applyMatrix4(Qt)),Array.isArray(Le)){const ke=Ve.groups;for(let qe=0,$e=ke.length;qe<$e;qe++){const Ye=ke[qe],et=Le[Ye.materialIndex];et&&et.visible&&P.push(T,Ve,et,se,lt.z,Ye)}}else Le.visible&&P.push(T,Ve,Le,se,lt.z,null)}}const Ue=T.children;for(let Ve=0,Le=Ue.length;Ve<Le;Ve++)ci(Ue[Ve],q,se,ne)}function cn(T,q,se,ne){const{opaque:j,transmissive:Ue,transparent:Ve}=T;I.setupLightsView(se),Fe===!0&&He.setGlobalState(R.clippingPlanes,se),ne&&je.viewport(D.copy(ne)),j.length>0&&Ei(j,q,se),Ue.length>0&&Ei(Ue,q,se),Ve.length>0&&Ei(Ve,q,se),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function bn(T,q,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ne.id]===void 0){const et=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ne.id]=new Kn(1,1,{generateMipmaps:!0,type:et?Ma:Hn,minFilter:Or,samples:wt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ue=I.state.transmissionRenderTarget[ne.id],Ve=ne.viewport||D;Ue.setSize(Ve.z*R.transmissionResolutionScale,Ve.w*R.transmissionResolutionScale);const Le=R.getRenderTarget(),ke=R.getActiveCubeFace(),qe=R.getActiveMipmapLevel();R.setRenderTarget(Ue),R.getClearColor(Se),Me=R.getClearAlpha(),Me<1&&R.setClearColor(16777215,.5),R.clear(),Ge&&De.render(se);const $e=R.toneMapping;R.toneMapping=qi;const Ye=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),I.setupLightsView(ne),Fe===!0&&He.setGlobalState(R.clippingPlanes,ne),Ei(T,se,ne),W.updateMultisampleRenderTarget(Ue),W.updateRenderTargetMipmap(Ue),gt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ot=0,Jt=q.length;Ot<Jt;Ot++){const jt=q[Ot],{object:It,geometry:Qe,material:Pt,group:at}=jt;if(Pt.side===oi&&It.layers.test(ne.layers)){const Tn=Pt.side;Pt.side=yn,Pt.needsUpdate=!0,Hr(It,se,ne,Qe,Pt,at),Pt.side=Tn,Pt.needsUpdate=!0,et=!0}}et===!0&&(W.updateMultisampleRenderTarget(Ue),W.updateRenderTargetMipmap(Ue))}R.setRenderTarget(Le,ke,qe),R.setClearColor(Se,Me),Ye!==void 0&&(ne.viewport=Ye),R.toneMapping=$e}function Ei(T,q,se){const ne=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Ue=T.length;j<Ue;j++){const Ve=T[j],{object:Le,geometry:ke,group:qe}=Ve;let $e=Ve.material;$e.allowOverride===!0&&ne!==null&&($e=ne),Le.layers.test(se.layers)&&Hr(Le,q,se,ke,$e,qe)}}function Hr(T,q,se,ne,j,Ue){T.onBeforeRender(R,q,se,ne,j,Ue),T.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(R,q,se,ne,T,Ue),j.transparent===!0&&j.side===oi&&j.forceSinglePass===!1?(j.side=yn,j.needsUpdate=!0,R.renderBufferDirect(se,q,ne,j,T,Ue),j.side=Sa,j.needsUpdate=!0,R.renderBufferDirect(se,q,ne,j,T,Ue),j.side=oi):R.renderBufferDirect(se,q,ne,j,T,Ue),T.onAfterRender(R,q,se,ne,j,Ue)}function Gr(T,q,se){q.isScene!==!0&&(q=yt);const ne=E.get(T),j=I.state.lights,Ue=I.state.shadowsArray,Ve=j.state.version,Le=We.getParameters(T,j.state,Ue,q,se),ke=We.getProgramCacheKey(Le);let qe=ne.programs;ne.environment=T.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(T.isMeshStandardMaterial?xe:he).get(T.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",Pn),qe=new Map,ne.programs=qe);let $e=qe.get(ke);if($e!==void 0){if(ne.currentProgram===$e&&ne.lightsStateVersion===Ve)return Ys(T,Le),$e}else Le.uniforms=We.getUniforms(T),T.onBeforeCompile(Le,R),$e=We.acquireProgram(Le,ke),qe.set(ke,$e),ne.uniforms=Le.uniforms;const Ye=ne.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=He.uniform),Ys(T,Le),ne.needsLights=ba(T),ne.lightsStateVersion=Ve,ne.needsLights&&(Ye.ambientLightColor.value=j.state.ambient,Ye.lightProbe.value=j.state.probe,Ye.directionalLights.value=j.state.directional,Ye.directionalLightShadows.value=j.state.directionalShadow,Ye.spotLights.value=j.state.spot,Ye.spotLightShadows.value=j.state.spotShadow,Ye.rectAreaLights.value=j.state.rectArea,Ye.ltc_1.value=j.state.rectAreaLTC1,Ye.ltc_2.value=j.state.rectAreaLTC2,Ye.pointLights.value=j.state.point,Ye.pointLightShadows.value=j.state.pointShadow,Ye.hemisphereLights.value=j.state.hemi,Ye.directionalShadowMap.value=j.state.directionalShadowMap,Ye.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ye.spotShadowMap.value=j.state.spotShadowMap,Ye.spotLightMatrix.value=j.state.spotLightMatrix,Ye.spotLightMap.value=j.state.spotLightMap,Ye.pointShadowMap.value=j.state.pointShadowMap,Ye.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=$e,ne.uniformsList=null,$e}function al(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Hc.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Ys(T,q){const se=E.get(T);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function or(T,q,se,ne,j){q.isScene!==!0&&(q=yt),W.resetTextureUnits();const Ue=q.fog,Ve=ne.isMeshStandardMaterial?q.environment:null,Le=ae===null?R.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ar,ke=(ne.isMeshStandardMaterial?xe:he).get(ne.envMap||Ve),qe=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,$e=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ye=!!se.morphAttributes.position,et=!!se.morphAttributes.normal,Ot=!!se.morphAttributes.color;let Jt=qi;ne.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Jt=R.toneMapping);const jt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,It=jt!==void 0?jt.length:0,Qe=E.get(ne),Pt=I.state.lights;if(Fe===!0&&(ht===!0||T!==Z)){const Cn=T===Z&&ne.id===de;He.setState(ne,T,Cn)}let at=!1;ne.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Pt.state.version||Qe.outputColorSpace!==Le||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==ke||ne.fog===!0&&Qe.fog!==Ue||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==He.numPlanes||Qe.numIntersection!==He.numIntersection)||Qe.vertexAlphas!==qe||Qe.vertexTangents!==$e||Qe.morphTargets!==Ye||Qe.morphNormals!==et||Qe.morphColors!==Ot||Qe.toneMapping!==Jt||Qe.morphTargetsCount!==It)&&(at=!0):(at=!0,Qe.__version=ne.version);let Tn=Qe.currentProgram;at===!0&&(Tn=Gr(ne,q,j));let ji=!1,An=!1,ui=!1;const Ht=Tn.getUniforms(),Rn=Qe.uniforms;if(je.useProgram(Tn.program)&&(ji=!0,An=!0,ui=!0),ne.id!==de&&(de=ne.id,An=!0),ji||Z!==T){je.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ht.setValue(G,"projectionMatrix",T.projectionMatrix),Ht.setValue(G,"viewMatrix",T.matrixWorldInverse);const wn=Ht.map.cameraPosition;wn!==void 0&&wn.setValue(G,mt.setFromMatrixPosition(T.matrixWorld)),wt.logarithmicDepthBuffer&&Ht.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ht.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),Z!==T&&(Z=T,An=!0,ui=!0)}if(Qe.needsLights&&(Pt.state.directionalShadowMap.length>0&&Ht.setValue(G,"directionalShadowMap",Pt.state.directionalShadowMap,W),Pt.state.spotShadowMap.length>0&&Ht.setValue(G,"spotShadowMap",Pt.state.spotShadowMap,W),Pt.state.pointShadowMap.length>0&&Ht.setValue(G,"pointShadowMap",Pt.state.pointShadowMap,W)),j.isSkinnedMesh){Ht.setOptional(G,j,"bindMatrix"),Ht.setOptional(G,j,"bindMatrixInverse");const Cn=j.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ht.setValue(G,"boneTexture",Cn.boneTexture,W))}j.isBatchedMesh&&(Ht.setOptional(G,j,"batchingTexture"),Ht.setValue(G,"batchingTexture",j._matricesTexture,W),Ht.setOptional(G,j,"batchingIdTexture"),Ht.setValue(G,"batchingIdTexture",j._indirectTexture,W),Ht.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&Ht.setValue(G,"batchingColorTexture",j._colorsTexture,W));const gn=se.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ut.update(j,se,Tn),(An||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,Ht.setValue(G,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Rn.envMap.value=ke,Rn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(Rn.envMapIntensity.value=q.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=nA()),An&&(Ht.setValue(G,"toneMappingExposure",R.toneMappingExposure),Qe.needsLights&&js(Rn,ui),Ue&&ne.fog===!0&&nt.refreshFogUniforms(Rn,Ue),nt.refreshMaterialUniforms(Rn,ne,ge,ee,I.state.transmissionRenderTarget[T.id]),Hc.upload(G,al(Qe),Rn,W)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Hc.upload(G,al(Qe),Rn,W),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ht.setValue(G,"center",j.center),Ht.setValue(G,"modelViewMatrix",j.modelViewMatrix),Ht.setValue(G,"normalMatrix",j.normalMatrix),Ht.setValue(G,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Cn=ne.uniformsGroups;for(let wn=0,Vr=Cn.length;wn<Vr;wn++){const bi=Cn[wn];ye.update(bi,Tn),ye.bind(bi,Tn)}}return Tn}function js(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function ba(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(T,q,se){const ne=E.get(T);ne.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(T.texture).__webglTexture=q,E.get(T.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const se=E.get(T);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0};const Ta=G.createFramebuffer();this.setRenderTarget=function(T,q=0,se=0){ae=T,V=q,re=se;let ne=null,j=!1,Ue=!1;if(T){const Le=E.get(T);if(Le.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(G.FRAMEBUFFER,Le.__webglFramebuffer),D.copy(T.viewport),F.copy(T.scissor),$=T.scissorTest,je.viewport(D),je.scissor(F),je.setScissorTest($),de=-1;return}else if(Le.__webglFramebuffer===void 0)W.setupRenderTarget(T);else if(Le.__hasExternalTextures)W.rebindTextures(T,E.get(T.texture).__webglTexture,E.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const $e=T.depthTexture;if(Le.__boundDepthTexture!==$e){if($e!==null&&E.has($e)&&(T.width!==$e.image.width||T.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);const qe=E.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qe[q])?ne=qe[q][se]:ne=qe[q],j=!0):T.samples>0&&W.useMultisampledRTT(T)===!1?ne=E.get(T).__webglMultisampledFramebuffer:Array.isArray(qe)?ne=qe[se]:ne=qe,D.copy(T.viewport),F.copy(T.scissor),$=T.scissorTest}else D.copy(te).multiplyScalar(ge).floor(),F.copy(ce).multiplyScalar(ge).floor(),$=be;if(se!==0&&(ne=Ta),je.bindFramebuffer(G.FRAMEBUFFER,ne)&&je.drawBuffers(T,ne),je.viewport(D),je.scissor(F),je.setScissorTest($),j){const Le=E.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,se)}else if(Ue){const Le=q;for(let ke=0;ke<T.textures.length;ke++){const qe=E.get(T.textures[ke]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ke,qe.__webglTexture,se,Le)}}else if(T!==null&&se!==0){const Le=E.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Le.__webglTexture,se)}de=-1},this.readRenderTargetPixels=function(T,q,se,ne,j,Ue,Ve,Le=0){if(!(T&&T.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=E.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ve!==void 0&&(ke=ke[Ve]),ke){je.bindFramebuffer(G.FRAMEBUFFER,ke);try{const qe=T.textures[Le],$e=qe.format,Ye=qe.type;if(!wt.textureFormatReadable($e)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Ye)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-ne&&se>=0&&se<=T.height-j&&(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Le),G.readPixels(q,se,ne,j,Ae.convert($e),Ae.convert(Ye),Ue))}finally{const qe=ae!==null?E.get(ae).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(T,q,se,ne,j,Ue,Ve,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=E.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ve!==void 0&&(ke=ke[Ve]),ke)if(q>=0&&q<=T.width-ne&&se>=0&&se<=T.height-j){je.bindFramebuffer(G.FRAMEBUFFER,ke);const qe=T.textures[Le],$e=qe.format,Ye=qe.type;if(!wt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.bufferData(G.PIXEL_PACK_BUFFER,Ue.byteLength,G.STREAM_READ),T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Le),G.readPixels(q,se,ne,j,Ae.convert($e),Ae.convert(Ye),0);const Ot=ae!==null?E.get(ae).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,Ot);const Jt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await AM(G,Jt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ue),G.deleteBuffer(et),G.deleteSync(Jt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,se=0){const ne=Math.pow(2,-se),j=Math.floor(T.image.width*ne),Ue=Math.floor(T.image.height*ne),Ve=q!==null?q.x:0,Le=q!==null?q.y:0;W.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Ve,Le,j,Ue),je.unbindTexture()};const lr=G.createFramebuffer(),Aa=G.createFramebuffer();this.copyTextureToTexture=function(T,q,se=null,ne=null,j=0,Ue=null){Ue===null&&(j!==0?(Zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=j,j=0):Ue=0);let Ve,Le,ke,qe,$e,Ye,et,Ot,Jt;const jt=T.isCompressedTexture?T.mipmaps[Ue]:T.image;if(se!==null)Ve=se.max.x-se.min.x,Le=se.max.y-se.min.y,ke=se.isBox3?se.max.z-se.min.z:1,qe=se.min.x,$e=se.min.y,Ye=se.isBox3?se.min.z:0;else{const gn=Math.pow(2,-j);Ve=Math.floor(jt.width*gn),Le=Math.floor(jt.height*gn),T.isDataArrayTexture?ke=jt.depth:T.isData3DTexture?ke=Math.floor(jt.depth*gn):ke=1,qe=0,$e=0,Ye=0}ne!==null?(et=ne.x,Ot=ne.y,Jt=ne.z):(et=0,Ot=0,Jt=0);const It=Ae.convert(q.format),Qe=Ae.convert(q.type);let Pt;q.isData3DTexture?(W.setTexture3D(q,0),Pt=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Pt=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Pt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const at=G.getParameter(G.UNPACK_ROW_LENGTH),Tn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ji=G.getParameter(G.UNPACK_SKIP_PIXELS),An=G.getParameter(G.UNPACK_SKIP_ROWS),ui=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,jt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,jt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,$e),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ye);const Ht=T.isDataArrayTexture||T.isData3DTexture,Rn=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const gn=E.get(T),Cn=E.get(q),wn=E.get(gn.__renderTarget),Vr=E.get(Cn.__renderTarget);je.bindFramebuffer(G.READ_FRAMEBUFFER,wn.__webglFramebuffer),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let bi=0;bi<ke;bi++)Ht&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(T).__webglTexture,j,Ye+bi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Ue,Jt+bi)),G.blitFramebuffer(qe,$e,Ve,Le,et,Ot,Ve,Le,G.DEPTH_BUFFER_BIT,G.NEAREST);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||E.has(T)){const gn=E.get(T),Cn=E.get(q);je.bindFramebuffer(G.READ_FRAMEBUFFER,lr),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Aa);for(let wn=0;wn<ke;wn++)Ht?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,gn.__webglTexture,j,Ye+wn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,gn.__webglTexture,j),Rn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Cn.__webglTexture,Ue,Jt+wn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Cn.__webglTexture,Ue),j!==0?G.blitFramebuffer(qe,$e,Ve,Le,et,Ot,Ve,Le,G.COLOR_BUFFER_BIT,G.NEAREST):Rn?G.copyTexSubImage3D(Pt,Ue,et,Ot,Jt+wn,qe,$e,Ve,Le):G.copyTexSubImage2D(Pt,Ue,et,Ot,qe,$e,Ve,Le);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Rn?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Pt,Ue,et,Ot,Jt,Ve,Le,ke,It,Qe,jt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Pt,Ue,et,Ot,Jt,Ve,Le,ke,It,jt.data):G.texSubImage3D(Pt,Ue,et,Ot,Jt,Ve,Le,ke,It,Qe,jt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ue,et,Ot,Ve,Le,It,Qe,jt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ue,et,Ot,jt.width,jt.height,It,jt.data):G.texSubImage2D(G.TEXTURE_2D,Ue,et,Ot,Ve,Le,It,Qe,jt);G.pixelStorei(G.UNPACK_ROW_LENGTH,at),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ji),G.pixelStorei(G.UNPACK_SKIP_ROWS,An),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ui),Ue===0&&q.generateMipmaps&&G.generateMipmap(Pt),je.unbindTexture()},this.initRenderTarget=function(T){E.get(T).__webglFramebuffer===void 0&&W.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),je.unbindTexture()},this.resetState=function(){V=0,re=0,ae=null,je.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}var Hd=1/1e3,aA=1e3,rA=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(r){typeof document<"u"&&document.hidden!==void 0&&(r?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=r)}get delta(){return this._delta*Hd}get fixedDelta(){return this._fixedDelta*Hd}set fixedDelta(r){this._fixedDelta=r*aA}get elapsed(){return this._elapsed*Hd}update(r){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(r!==void 0?r:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(r){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},sA=(()=>{const r=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),i=new Yi;return i.setAttribute("position",new Mi(r,3)),i.setAttribute("uv",new Mi(e,2)),i})(),sr=class Fh{static get fullscreenGeometry(){return sA}constructor(e="Pass",i=new Ph,s=new Kc){this.name=e,this.renderer=null,this.scene=i,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let i=this.screen;i!==null?i.material=e:(i=new Pi(Fh.fullscreenGeometry,e),i.frustumCulled=!1,this.scene===null&&(this.scene=new Ph),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,i=Qo){}render(e,i,s,l,c){throw new Error("Render method not implemented!")}setSize(e,i){}initialize(e,i,s){}dispose(){for(const e of Object.keys(this)){const i=this[e];(i instanceof Kn||i instanceof Vs||i instanceof En||i instanceof Fh)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},oA=class extends sr{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(r,e,i,s,l){const c=r.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},lA=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,cA="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",uA=class extends Qn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new sn(null),depthBuffer:new sn(null),channelWeights:new sn(null),opacity:new sn(1)},blending:Li,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:lA,vertexShader:cA}),this.depthFunc=Gc}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(r){const e=r!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){const e=r!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=r}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(r){this.colorSpaceConversion!==r&&(r?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(r){r!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=r):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(r){this.uniforms.inputBuffer.value=r}getOpacity(r){return this.uniforms.opacity.value}setOpacity(r){this.uniforms.opacity.value=r}},fA=class extends sr{constructor(r,e=!0){super("CopyPass"),this.fullscreenMaterial=new uA,this.needsSwap=!1,this.renderTarget=r,r===void 0&&(this.renderTarget=new Kn(1,1,{minFilter:nn,magFilter:nn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(r){this.autoResize=r}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(r){this.autoResize=r}render(r,e,i,s,l){this.fullscreenMaterial.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){this.autoResize&&this.renderTarget.setSize(r,e)}initialize(r,e,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==Hn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":r!==null&&r.outputColorSpace===on&&(this.renderTarget.texture.colorSpace=on))}},N_=new Ft,yv=class extends sr{constructor(r=!0,e=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=r,this.depth=e,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(r,e,i){this.color=r,this.depth=e,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(r){this.overrideClearColor=r}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(r){this.overrideClearAlpha=r}render(r,e,i,s,l){const c=this.overrideClearColor,d=this.overrideClearAlpha,h=r.getClearAlpha(),m=c!==null,p=d>=0;m?(r.getClearColor(N_),r.setClearColor(c,p?d:h)):p&&r.setClearAlpha(d),r.setRenderTarget(this.renderToScreen?null:e),r.clear(this.color,this.depth,this.stencil),m?r.setClearColor(N_,h):p&&r.setClearAlpha(h)}},dA=class extends sr{constructor(r,e){super("MaskPass",r,e),this.needsSwap=!1,this.clearPass=new yv(!1,!1,!0),this.inverse=!1}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get inverted(){return this.inverse}set inverted(r){this.inverse=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(r){this.inverted=r}render(r,e,i,s,l){const c=r.getContext(),d=r.state.buffers,h=this.scene,m=this.camera,p=this.clearPass,v=this.inverted?0:1,_=1-v;d.color.setMask(!1),d.depth.setMask(!1),d.color.setLocked(!0),d.depth.setLocked(!0),d.stencil.setTest(!0),d.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),d.stencil.setFunc(c.ALWAYS,v,4294967295),d.stencil.setClear(_),d.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(r,null):(p.render(r,e),p.render(r,i))),this.renderToScreen?(r.setRenderTarget(null),r.render(h,m)):(r.setRenderTarget(e),r.render(h,m),r.setRenderTarget(i),r.render(h,m)),d.color.setLocked(!1),d.depth.setLocked(!1),d.stencil.setLocked(!1),d.stencil.setFunc(c.EQUAL,1,4294967295),d.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),d.stencil.setLocked(!0)}},L_=class{constructor(r=null,{depthBuffer:e=!0,stencilBuffer:i=!1,multisampling:s=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,i,l,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new fA,this.depthTexture=null,this.passes=[],this.timer=new rA,this.autoRenderToScreen=!0,this.setRenderer(r)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(r){const e=this.inputBuffer,i=this.multisampling;i>0&&r>0?(this.inputBuffer.samples=r,this.outputBuffer.samples=r,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==r&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,r),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(r){if(this.renderer=r,r!==null){const e=r.getSize(new _t),i=r.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===Hn&&r.outputColorSpace===on&&(this.inputBuffer.texture.colorSpace=on,this.outputBuffer.texture.colorSpace=on,this.inputBuffer.dispose(),this.outputBuffer.dispose()),r.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(r,i,s)}}replaceRenderer(r,e=!0){const i=this.renderer,s=i.domElement.parentNode;return this.setRenderer(r),e&&s!==null&&(s.removeChild(i.domElement),s.appendChild(r.domElement)),i}createDepthTexture(){const r=this.depthTexture=new Gs;return this.inputBuffer.depthTexture=r,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(r.format=nr,r.type=Fs):r.type=Oi,r}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const r of this.passes)r.setDepthTexture(null)}}createBuffer(r,e,i,s){const l=this.renderer,c=l===null?new _t:l.getDrawingBufferSize(new _t),d={minFilter:nn,magFilter:nn,stencilBuffer:e,depthBuffer:r,type:i},h=new Kn(c.width,c.height,d);return s>0&&(h.samples=s),i===Hn&&l!==null&&l.outputColorSpace===on&&(h.texture.colorSpace=on),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(r){for(const e of this.passes)e.mainScene=r}setMainCamera(r){for(const e of this.passes)e.mainCamera=r}addPass(r,e){const i=this.passes,s=this.renderer,l=s.getDrawingBufferSize(new _t),c=s.getContext().getContextAttributes().alpha,d=this.inputBuffer.texture.type;if(r.setRenderer(s),r.setSize(l.width,l.height),r.initialize(s,c,d),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),r.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?i.splice(e,0,r):i.push(r),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),r.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const h=this.createDepthTexture();for(r of i)r.setDepthTexture(h)}else r.setDepthTexture(this.depthTexture)}removePass(r){const e=this.passes,i=e.indexOf(r);if(i!==-1&&e.splice(i,1).length>0){if(this.depthTexture!==null){const c=(h,m)=>h||m.needsDepthTexture;e.reduce(c,!1)||(r.getDepthTexture()===this.depthTexture&&r.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===e.length&&(r.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const r=this.passes;this.deleteDepthTexture(),r.length>0&&(this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!1),this.passes=[])}render(r){const e=this.renderer,i=this.copyPass;let s=this.inputBuffer,l=this.outputBuffer,c=!1,d,h,m;r===void 0&&(this.timer.update(),r=this.timer.getDelta());for(const p of this.passes)p.enabled&&(p.render(e,s,l,r,c),p.needsSwap&&(c&&(i.renderToScreen=p.renderToScreen,d=e.getContext(),h=e.state.buffers.stencil,h.setFunc(d.NOTEQUAL,1,4294967295),i.render(e,s,l,r,c),h.setFunc(d.EQUAL,1,4294967295)),m=s,s=l,l=m),p instanceof dA?c=!0:p instanceof oA&&(c=!1))}setSize(r,e,i){const s=this.renderer,l=s.getSize(new _t);(r===void 0||e===void 0)&&(r=l.width,e=l.height),(l.width!==r||l.height!==e)&&s.setSize(r,e,i);const c=s.getDrawingBufferSize(new _t);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height);for(const d of this.passes)d.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const r of this.passes)r.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),sr.fullscreenGeometry.dispose()}},Br={NONE:0,DEPTH:1,CONVOLUTION:2},Lt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},hA=class{constructor(){this.shaderParts=new Map([[Lt.FRAGMENT_HEAD,null],[Lt.FRAGMENT_MAIN_UV,null],[Lt.FRAGMENT_MAIN_IMAGE,null],[Lt.VERTEX_HEAD,null],[Lt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Br.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ar}},Gd=!1,O_=class{constructor(r=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(r),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let i;if(e.material.flatShading)switch(e.material.side){case oi:i=this.materialsFlatShadedDoubleSide;break;case yn:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(e.material.side){case oi:i=this.materialsDoubleSide;break;case yn:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=i[2]:e.isInstancedMesh?e.material=i[1]:e.material=i[0],++this.meshCount}}}cloneMaterial(r){if(!(r instanceof Qn))return r.clone();const e=r.uniforms,i=new Map;for(const l in e){const c=e[l].value;c.isRenderTargetTexture&&(e[l].value=null,i.set(l,c))}const s=r.clone();for(const l of i)e[l[0]].value=l[1],s.uniforms[l[0]].value=l[1];return s}setMaterial(r){if(this.disposeMaterials(),this.material=r,r!==null){const e=this.materials=[this.cloneMaterial(r),this.cloneMaterial(r),this.cloneMaterial(r)];for(const i of e)i.uniforms=Object.assign({},r.uniforms),i.side=Sa;e[2].skinning=!0,this.materialsBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},r.uniforms),s.side=yn,s}),this.materialsDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},r.uniforms),s.side=oi,s}),this.materialsFlatShaded=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},r.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},r.uniforms),s.flatShading=!0,s.side=yn,s}),this.materialsFlatShadedDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},r.uniforms),s.flatShading=!0,s.side=oi,s})}}render(r,e,i){const s=r.shadowMap.enabled;if(r.shadowMap.enabled=!1,Gd){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),r.render(e,i);for(const c of l)c[0].material=c[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,r.render(e,i),e.overrideMaterial=l}r.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const r=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of r)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Gd}static set workaroundEnabled(r){Gd=r}},Tt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},pA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",gA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_A="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",IA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",XA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",WA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qA=new Map([[Tt.ADD,pA],[Tt.ALPHA,mA],[Tt.AVERAGE,gA],[Tt.COLOR,_A],[Tt.COLOR_BURN,vA],[Tt.COLOR_DODGE,xA],[Tt.DARKEN,SA],[Tt.DIFFERENCE,MA],[Tt.DIVIDE,yA],[Tt.DST,null],[Tt.EXCLUSION,EA],[Tt.HARD_LIGHT,bA],[Tt.HARD_MIX,TA],[Tt.HUE,AA],[Tt.INVERT,RA],[Tt.INVERT_RGB,CA],[Tt.LIGHTEN,wA],[Tt.LINEAR_BURN,DA],[Tt.LINEAR_DODGE,UA],[Tt.LINEAR_LIGHT,NA],[Tt.LUMINOSITY,LA],[Tt.MULTIPLY,OA],[Tt.NEGATION,PA],[Tt.NORMAL,BA],[Tt.OVERLAY,IA],[Tt.PIN_LIGHT,FA],[Tt.REFLECT,zA],[Tt.SATURATION,HA],[Tt.SCREEN,GA],[Tt.SOFT_LIGHT,VA],[Tt.SRC,kA],[Tt.SUBTRACT,XA],[Tt.VIVID_LIGHT,WA]]),YA=class extends rr{constructor(r,e=1){super(),this._blendFunction=r,this.opacity=new sn(e)}getOpacity(){return this.opacity.value}setOpacity(r){this.opacity.value=r}get blendFunction(){return this._blendFunction}set blendFunction(r){this._blendFunction=r,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(r){this.blendFunction=r}getShaderCode(){return qA.get(this.blendFunction)}},Ev=class extends rr{constructor(r,e,{attributes:i=Br.NONE,blendFunction:s=Tt.NORMAL,defines:l=new Map,uniforms:c=new Map,extensions:d=null,vertexShader:h=null}={}){super(),this.name=r,this.renderer=null,this.attributes=i,this.fragmentShader=e,this.vertexShader=h,this.defines=l,this.uniforms=c,this.extensions=d,this.blendMode=new YA(s),this.blendMode.addEventListener("change",m=>this.setChanged()),this._inputColorSpace=ar,this._outputColorSpace=ki}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(r){this._inputColorSpace=r,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(r){this._outputColorSpace=r,this.setChanged()}set mainScene(r){}set mainCamera(r){}getName(){return this.name}setRenderer(r){this.renderer=r}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(r){this.attributes=r,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(r){this.fragmentShader=r,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(r){this.vertexShader=r,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(r,e=Qo){}update(r,e,i){}setSize(r,e){}initialize(r,e,i){}dispose(){for(const r of Object.keys(this)){const e=this[r];(e instanceof Kn||e instanceof Vs||e instanceof En||e instanceof sr)&&this[r].dispose()}}},P_=class extends sr{constructor(r,e,i=null){super("RenderPass",r,e),this.needsSwap=!1,this.clearPass=new yv,this.overrideMaterialManager=i===null?null:new O_(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get renderToScreen(){return super.renderToScreen}set renderToScreen(r){super.renderToScreen=r,this.clearPass.renderToScreen=r}get overrideMaterial(){const r=this.overrideMaterialManager;return r!==null?r.material:null}set overrideMaterial(r){const e=this.overrideMaterialManager;r!==null?e!==null?e.setMaterial(r):this.overrideMaterialManager=new O_(r):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(r){this.overrideMaterial=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getSelection(){return this.selection}setSelection(r){this.selection=r}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(r){this.ignoreBackground=r}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(r){this.skipShadowMapUpdate=r}getClearPass(){return this.clearPass}render(r,e,i,s,l){const c=this.scene,d=this.camera,h=this.selection,m=d.layers.mask,p=c.background,v=r.shadowMap.autoUpdate,_=this.renderToScreen?null:e;h!==null&&d.layers.set(h.getLayer()),this.skipShadowMapUpdate&&(r.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(r,e),r.setRenderTarget(_),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(r,c,d):r.render(c,d),d.layers.mask=m,c.background=p,r.shadowMap.autoUpdate=v}},jA=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,ZA="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",KA=class extends Qn{constructor(r,e,i,s,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:jc.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new sn(null),depthBuffer:new sn(null),resolution:new sn(new _t),texelSize:new sn(new _t),cameraNear:new sn(.3),cameraFar:new sn(1e3),aspect:new sn(1),time:new sn(0)},blending:Li,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),r&&this.setShaderParts(r),e&&this.setDefines(e),i&&this.setUniforms(i),this.copyCameraSettings(s)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){this.uniforms.depthBuffer.value=r}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}setDepthBuffer(r,e=Qo){this.depthBuffer=r,this.depthPacking=e}setShaderData(r){this.setShaderParts(r.shaderParts),this.setDefines(r.defines),this.setUniforms(r.uniforms),this.setExtensions(r.extensions)}setShaderParts(r){return this.fragmentShader=jA.replace(Lt.FRAGMENT_HEAD,r.get(Lt.FRAGMENT_HEAD)||"").replace(Lt.FRAGMENT_MAIN_UV,r.get(Lt.FRAGMENT_MAIN_UV)||"").replace(Lt.FRAGMENT_MAIN_IMAGE,r.get(Lt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=ZA.replace(Lt.VERTEX_HEAD,r.get(Lt.VERTEX_HEAD)||"").replace(Lt.VERTEX_MAIN_SUPPORT,r.get(Lt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(r){for(const e of r.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(r){for(const e of r.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(r){this.extensions={};for(const e of r)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(r){this.encodeOutput!==r&&(r?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(r){return this.encodeOutput}setOutputEncodingEnabled(r){this.encodeOutput=r}get time(){return this.uniforms.time.value}set time(r){this.uniforms.time.value=r}setDeltaTime(r){this.uniforms.time.value+=r}adoptCameraSettings(r){this.copyCameraSettings(r)}copyCameraSettings(r){r&&(this.uniforms.cameraNear.value=r.near,this.uniforms.cameraFar.value=r.far,r instanceof Si?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(r,e){const i=this.uniforms;i.resolution.value.set(r,e),i.texelSize.value.set(1/r,1/e),i.aspect.value=r/e}static get Section(){return Lt}};function B_(r,e,i){for(const s of e){const l="$1"+r+s.charAt(0).toUpperCase()+s.slice(1),c=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const d of i.entries())d[1]!==null&&i.set(d[0],d[1].replace(c,l))}}function QA(r,e,i){let s=e.getFragmentShader(),l=e.getVertexShader();const c=s!==void 0&&/mainImage/.test(s),d=s!==void 0&&/mainUv/.test(s);if(i.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(d&&(i.attributes&Br.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!d)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const h=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,m=i.shaderParts;let p=m.get(Lt.FRAGMENT_HEAD)||"",v=m.get(Lt.FRAGMENT_MAIN_UV)||"",_=m.get(Lt.FRAGMENT_MAIN_IMAGE)||"",S=m.get(Lt.VERTEX_HEAD)||"",M=m.get(Lt.VERTEX_MAIN_SUPPORT)||"";const A=new Set,C=new Set;if(d&&(v+=`	${r}MainUv(UV);
`,i.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const O=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);M+=`	${r}MainSupport(`,M+=O?`vUv);
`:`);
`;for(const L of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const P of L[1].split(/\s*,\s*/))i.varyings.add(P),A.add(P),C.add(P);for(const L of l.matchAll(h))C.add(L[1])}for(const O of s.matchAll(h))C.add(O[1]);for(const O of e.defines.keys())C.add(O.replace(/\([\w\s,]*\)/g,""));for(const O of e.uniforms.keys())C.add(O);C.delete("while"),C.delete("for"),C.delete("if"),e.uniforms.forEach((O,L)=>i.uniforms.set(r+L.charAt(0).toUpperCase()+L.slice(1),O)),e.defines.forEach((O,L)=>i.defines.set(r+L.charAt(0).toUpperCase()+L.slice(1),O));const y=new Map([["fragment",s],["vertex",l]]);B_(r,C,i.defines),B_(r,C,y),s=y.get("fragment"),l=y.get("vertex");const x=e.blendMode;if(i.blendModes.set(x.blendFunction,x),c){e.inputColorSpace!==null&&e.inputColorSpace!==i.colorSpace&&(_+=e.inputColorSpace===on?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==ki?i.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(i.colorSpace=e.inputColorSpace);const O=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;_+=`${r}MainImage(color0, UV, `,(i.attributes&Br.DEPTH)!==0&&O.test(s)&&(_+="depth, ",i.readDepth=!0),_+=`color1);
	`;const L=r+"BlendOpacity";i.uniforms.set(L,x.opacity),_+=`color0 = blend${x.blendFunction}(color0, color1, ${L});

	`,p+=`uniform float ${L};

`}if(p+=s+`
`,l!==null&&(S+=l+`
`),m.set(Lt.FRAGMENT_HEAD,p),m.set(Lt.FRAGMENT_MAIN_UV,v),m.set(Lt.FRAGMENT_MAIN_IMAGE,_),m.set(Lt.VERTEX_HEAD,S),m.set(Lt.VERTEX_MAIN_SUPPORT,M),e.extensions!==null)for(const O of e.extensions)i.extensions.add(O)}}var I_=class extends sr{constructor(r,...e){super("EffectPass"),this.fullscreenMaterial=new KA(null,null,null,r),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(r){for(const e of this.effects)e.mainScene=r}set mainCamera(r){this.fullscreenMaterial.copyCameraSettings(r);for(const e of this.effects)e.mainCamera=r}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(r){this.fullscreenMaterial.encodeOutput=r}get dithering(){return this.fullscreenMaterial.dithering}set dithering(r){const e=this.fullscreenMaterial;e.dithering=r,e.needsUpdate=!0}setEffects(r){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=r.sort((e,i)=>i.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const r=new hA;let e=0;for(const d of this.effects)if(d.blendMode.blendFunction===Tt.DST)r.attributes|=d.getAttributes()&Br.DEPTH;else{if((r.attributes&d.getAttributes()&Br.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${d.name})`);QA("e"+e++,d,r)}let i=r.shaderParts.get(Lt.FRAGMENT_HEAD),s=r.shaderParts.get(Lt.FRAGMENT_MAIN_IMAGE),l=r.shaderParts.get(Lt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const d of r.blendModes.values())i+=d.getShaderCode().replace(c,`blend${d.blendFunction}`)+`
`;(r.attributes&Br.DEPTH)!==0?(r.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,r.colorSpace===on&&(s+=`color0 = sRGBToLinear(color0);
	`),r.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,r.defines.set("UV","transformedUv")):r.defines.set("UV","vUv"),r.shaderParts.set(Lt.FRAGMENT_HEAD,i),r.shaderParts.set(Lt.FRAGMENT_MAIN_IMAGE,s),r.shaderParts.set(Lt.FRAGMENT_MAIN_UV,l);for(const[d,h]of r.shaderParts)h!==null&&r.shaderParts.set(d,h.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(r)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(r,e=Qo){this.fullscreenMaterial.depthBuffer=r,this.fullscreenMaterial.depthPacking=e;for(const i of this.effects)i.setDepthTexture(r,e)}render(r,e,i,s,l){for(const c of this.effects)c.update(r,e,s);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=s*this.timeScale,r.setRenderTarget(this.renderToScreen?null:i),r.render(this.scene,this.camera)}}setSize(r,e){this.fullscreenMaterial.setSize(r,e);for(const i of this.effects)i.setSize(r,e)}initialize(r,e,i){this.renderer=r;for(const s of this.effects)s.initialize(r,e,i);this.updateMaterial(),i!==void 0&&i!==Hn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const r of this.effects)r.removeEventListener("change",this.listener),r.dispose()}handleEvent(r){r.type==="change"&&this.recompile()}};const JA=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const i=e.getContext("2d");if(!i)throw new Error("2D context not available");i.fillStyle="black",i.fillRect(0,0,e.width,e.height);const s=new En(e);s.minFilter=nn,s.magFilter=nn,s.generateMipmaps=!1;const l=[];let c=null;const d=64;let h=.1*64;const m=1/d,p=()=>{i.fillStyle="black",i.fillRect(0,0,e.width,e.height)},v=M=>{const A={x:M.x*64,y:(1-M.y)*64};let C=1;const y=P=>Math.sin(P*Math.PI/2),x=P=>-P*(P-2);M.age<d*.3?C=y(M.age/(d*.3)):C=x(1-(M.age-d*.3)/(d*.7))||0,C*=M.force;const O=`${(M.vx+1)/2*255}, ${(M.vy+1)/2*255}, ${C*255}`,L=320;i.shadowOffsetX=L,i.shadowOffsetY=L,i.shadowBlur=h,i.shadowColor=`rgba(${O},${.22*C})`,i.beginPath(),i.fillStyle="rgba(255,0,0,1)",i.arc(A.x-L,A.y-L,h,0,Math.PI*2),i.fill()};return{canvas:e,texture:s,addTouch:M=>{let A=0,C=0,y=0;if(c){const x=M.x-c.x,O=M.y-c.y;if(x===0&&O===0)return;const L=x*x+O*O,P=Math.sqrt(L);C=x/(P||1),y=O/(P||1),A=Math.min(L*1e4,1)}c={x:M.x,y:M.y},l.push({x:M.x,y:M.y,age:0,force:A,vx:C,vy:y})},update:()=>{p();for(let M=l.length-1;M>=0;M--){const A=l[M],C=A.force*m*(1-A.age/d);A.x+=A.vx*C,A.y+=A.vy*C,A.age++,A.age>d&&l.splice(M,1)}for(let M=0;M<l.length;M++)v(l[M]);s.needsUpdate=!0},set radiusScale(M){h=.1*64*M},get radiusScale(){return h/(.1*64)},size:64}},$A=(r,e)=>{const i=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new Ev("LiquidEffect",i,{uniforms:new Map([["uTexture",new sn(r)],["uStrength",new sn(e?.strength??.025)],["uTime",new sn(0)],["uFreq",new sn(e?.freq??4.5)]])})},F_={square:0,circle:1,triangle:2,diamond:3},eR=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,tR=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`,Vd=10,nR=({variant:r="square",pixelSize:e=3,color:i="#B19EEF",className:s,style:l,antialias:c=!0,patternScale:d=2,patternDensity:h=1,liquid:m=!1,liquidStrength:p=.1,liquidRadius:v=1,pixelSizeJitter:_=0,enableRipples:S=!0,rippleIntensityScale:M=1,rippleThickness:A=.1,rippleSpeed:C=.3,liquidWobbleSpeed:y=4.5,autoPauseOffscreen:x=!0,speed:O=.5,transparent:L=!0,edgeFade:P=.5,noiseAmount:I=0})=>{const H=zn.useRef(null),B=zn.useRef({visible:!0}),K=zn.useRef(O),R=zn.useRef(null),w=zn.useRef(null);return zn.useEffect(()=>{const V=H.current;if(!V)return;K.current=O;const re=["antialias","liquid","noiseAmount"],ae={antialias:c,liquid:m,noiseAmount:I};let de=!1;if(!R.current)de=!0;else if(w.current){for(const Z of re)if(w.current[Z]!==ae[Z]){de=!0;break}}if(de){if(R.current){const Ge=R.current;Ge.resizeObserver?.disconnect(),cancelAnimationFrame(Ge.raf),Ge.quad?.geometry.dispose(),Ge.material.dispose(),Ge.composer?.dispose(),Ge.renderer.dispose(),Ge.renderer.domElement.parentElement===V&&V.removeChild(Ge.renderer.domElement),R.current=null}const Z=document.createElement("canvas"),D=new iA({canvas:Z,antialias:c,alpha:!0,powerPreference:"high-performance"});D.domElement.style.width="100%",D.domElement.style.height="100%",D.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),V.appendChild(D.domElement),L?D.setClearAlpha(0):D.setClearColor(0,1);const F={uResolution:{value:new _t(0,0)},uTime:{value:0},uColor:{value:new Ft(i)},uClickPos:{value:Array.from({length:Vd},()=>new _t(-1,-1))},uClickTimes:{value:new Float32Array(Vd)},uShapeType:{value:F_[r]??0},uPixelSize:{value:e*D.getPixelRatio()},uScale:{value:d},uDensity:{value:h},uPixelJitter:{value:_},uEnableRipples:{value:S?1:0},uRippleSpeed:{value:C},uRippleThickness:{value:A},uRippleIntensity:{value:M},uEdgeFade:{value:P}},$=new Ph,Se=new Kc(-1,1,1,-1,0,1),Me=new Qn({vertexShader:eR,fragmentShader:tR,uniforms:F,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:Lh}),N=new nl(2,2),ee=new Pi(N,Me);$.add(ee);const ge=new oy,Re=()=>{const Ge=V.clientWidth||1,ot=V.clientHeight||1;D.setSize(Ge,ot,!1),F.uResolution.value.set(D.domElement.width,D.domElement.height),R.current?.composer&&R.current.composer.setSize(D.domElement.width,D.domElement.height),F.uPixelSize.value=e*D.getPixelRatio()};Re();const ze=new ResizeObserver(Re);ze.observe(V);const ce=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Ge=new Uint32Array(1);return window.crypto.getRandomValues(Ge),Ge[0]/4294967295}return Math.random()})()*1e3;let be,Ie,Fe;if(m){Ie=JA(),Ie.radiusScale=v,be=new L_(D);const Ge=new P_($,Se);Fe=$A(Ie.texture,{strength:p,freq:y});const ot=new I_(Se,Fe);ot.renderToScreen=!0,be.addPass(Ge),be.addPass(ot)}if(I>0){be||(be=new L_(D),be.addPass(new P_($,Se)));const Ge=new Ev("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new sn(0)],["uAmount",new sn(I)]])}),ot=new I_(Se,Ge);ot.renderToScreen=!0,be&&be.passes.length>0&&be.passes.forEach(G=>G.renderToScreen=!1),be.addPass(ot)}be&&be.setSize(D.domElement.width,D.domElement.height);const ht=Ge=>{const ot=D.domElement.getBoundingClientRect(),G=D.domElement.width/ot.width,Et=D.domElement.height/ot.height,gt=(Ge.clientX-ot.left)*G,wt=(ot.height-(Ge.clientY-ot.top))*Et;return{fx:gt,fy:wt,w:D.domElement.width,h:D.domElement.height}},Qt=Ge=>{const{fx:ot,fy:G}=ht(Ge),Et=R.current?.clickIx??0;F.uClickPos.value[Et].set(ot,G),F.uClickTimes.value[Et]=F.uTime.value,R.current&&(R.current.clickIx=(Et+1)%Vd)},mt=Ge=>{if(!Ie)return;const{fx:ot,fy:G,w:Et,h:gt}=ht(Ge);Ie.addTouch({x:ot/Et,y:G/gt})};D.domElement.addEventListener("pointerdown",Qt,{passive:!0}),D.domElement.addEventListener("pointermove",mt,{passive:!0});let lt=0;const yt=()=>{if(x&&!B.current.visible){lt=requestAnimationFrame(yt);return}F.uTime.value=ce+ge.getElapsedTime()*K.current,Fe&&(Fe.uniforms.get("uTime").value=F.uTime.value),be?(Ie&&Ie.update(),be.passes.forEach(Ge=>{const ot=Ge.effects;ot&&ot.forEach(G=>{const Et=G.uniforms?.get("uTime");Et&&(Et.value=F.uTime.value)})}),be.render()):D.render($,Se),lt=requestAnimationFrame(yt)};lt=requestAnimationFrame(yt),R.current={renderer:D,scene:$,camera:Se,material:Me,clock:ge,clickIx:0,uniforms:F,resizeObserver:ze,raf:lt,quad:ee,timeOffset:ce,composer:be,touch:Ie,liquidEffect:Fe}}else{const Z=R.current;if(Z.uniforms.uShapeType.value=F_[r]??0,Z.uniforms.uPixelSize.value=e*Z.renderer.getPixelRatio(),Z.uniforms.uColor.value.set(i),Z.uniforms.uScale.value=d,Z.uniforms.uDensity.value=h,Z.uniforms.uPixelJitter.value=_,Z.uniforms.uEnableRipples.value=S?1:0,Z.uniforms.uRippleIntensity.value=M,Z.uniforms.uRippleThickness.value=A,Z.uniforms.uRippleSpeed.value=C,Z.uniforms.uEdgeFade.value=P,L?Z.renderer.setClearAlpha(0):Z.renderer.setClearColor(0,1),Z.liquidEffect){const D=Z.liquidEffect;D&&(D.value=p);const F=Z.liquidEffect.uniforms.get("uFreq");F&&(F.value=y)}Z.touch&&(Z.touch.radiusScale=v)}return w.current=ae,()=>{if(R.current&&de||!R.current)return;const Z=R.current;Z.resizeObserver?.disconnect(),cancelAnimationFrame(Z.raf),Z.quad?.geometry.dispose(),Z.material.dispose(),Z.composer?.dispose(),Z.renderer.dispose(),Z.renderer.domElement.parentElement===V&&V.removeChild(Z.renderer.domElement),R.current=null}},[c,m,I,e,d,h,S,M,A,C,_,P,L,p,v,y,x,r,i,O]),me.jsx("div",{ref:H,className:`pixel-blast-container ${s??""}`,style:l,"aria-label":"PixelBlast interactive background"})},iR=()=>me.jsxs("section",{id:"home",className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[me.jsx("div",{className:"absolute inset-0",children:me.jsx(nR,{variant:"square",pixelSize:3,color:"#38ff98",patternScale:3.5,patternDensity:1.05,pixelSizeJitter:.65,enableRipples:!0,rippleSpeed:.4,rippleThickness:.12,rippleIntensityScale:1.5,liquid:!1,liquidStrength:.12,liquidRadius:1.2,liquidWobbleSpeed:5,speed:.4,edgeFade:.25,transparent:!0})}),me.jsx(Yc,{children:me.jsxs("div",{className:"relative z-10 text-center px-4",children:[me.jsx("h1",{className:`text-5xl md:text-7xl font-bold mb-6\r
                       bg-gradient-to-r from-[oklch(72.3%_0.219_149.579)] to-[oklch(90%_0.25_210)]\r
                       bg-clip-text text-transparent leading-tight`,children:"Hi, I'm Aljazy"}),me.jsx("p",{className:"text-white-500 text-lg mb-8 max-w-lg mx-auto",children:"Aspiring full-stack developer skilled in JavaScript, HTML, and CSS. Passionate about building complete web applications and continuously expanding my front-end and back-end expertise."}),me.jsxs("div",{className:"flex justify-center space-x-4",children:[me.jsx("a",{href:"#project",className:`bg-emerald-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 \r
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]`,children:"View projects"}),me.jsx("a",{href:"#contact",className:`border border-emerald-600/60 text-emerald-600 py-3 px-6 rounded font-medium transition-all duration-200\r
                         hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-emerald-600/10`,children:"Contact me"})]})]})})]}),aR=()=>{const r=["React","TailwindCss","Bootstrap"],e=["Node.js","Java"];return me.jsx("section",{id:"about",className:"min-h-screen flex items-center justify-center py-20",children:me.jsx(Yc,{children:me.jsxs("div",{className:"max-w-3xl mx-auto px-4",children:[me.jsx("h2",{className:`text-3xl font-bold mb-8  bg-gradient-to-r from-[oklch(72.3%_0.219_149.579)] to-[oklch(90%_0.25_210)] \r
                    bg-clip-text text-transparent text-center `,children:"About me"}),me.jsx("div",{className:"rounded-xl p-8 border-while/10 border hover:-translate-y-1 transition-all",children:me.jsx("p",{className:"text-gray-300 mb-6",children:"I’m passionate about technology and problem-solving. I enjoy learning how systems work and building web applications from front-end to back-end. My goal is to become a full-stack developer and create real-world solutions that make an impact. I’m constantly learning, improving my skills, and challenging myself with new projects."})}),me.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[me.jsxs("div",{className:"rounded-xl p-6 hover:-translate-y-1 transition-all",children:[me.jsx("h3",{className:"text-xl font-bold mb-4",children:" Frontend"}),me.jsx("div",{className:"flex flex-wrap gap-2",children:r.map((i,s)=>me.jsx("span",{Key:s,className:"bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition",children:i}))})]}),me.jsxs("div",{className:"rounded-xl p-6 hover:-translate-y-1 transition-all",children:[me.jsx("h3",{className:"text-xl font-bold mb-4",children:" Backend"}),me.jsx("div",{className:"flex flex-wrap gap-2",children:e.map((i,s)=>me.jsx("span",{Key:s,className:"bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition",children:i}))})]})]}),me.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-8",children:me.jsxs("div",{className:"p-6 rounded-xl border-white/10 boarder hover:-translate-y-1 transition-all",children:[me.jsx("h3",{className:"text-xl font-bold mb-4",children:"Eduction"}),me.jsx("ul",{children:me.jsxs("li",{children:[me.jsx("strong",{children:"Bachelor in Information Technology (In Progress) "}),me.jsxs("p",{className:"text-sm",children:["– King Abdulaziz University ",me.jsx("br",{}),"2023 – Present"]})]})})]})})]})})})},rR=()=>{const r=["JavaScript","HTML","CSS","Axios","REST API"],e=["Vanilla JavaScript","Axios","Bootstrap","REST API","HTML & CSS"];return me.jsx("section",{id:"project",className:"min-h-screen flex items-center justify-center py-20",children:me.jsx(Yc,{children:me.jsxs("div",{className:"max-w-5xl mx-auto px-4",children:[me.jsx("h2",{className:`text-3xl font-bold mb-8  bg-gradient-to-r from-[oklch(72.3%_0.219_149.579)] to-[oklch(90%_0.25_210)] \r
                    bg-clip-text text-transparent text-center `,children:"Projects"}),me.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[me.jsxs("div",{className:"p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition",children:[me.jsx("h3",{className:"text-xl font-bold mb-2",children:"Prayer Times App"}),me.jsx("p",{className:"text-gray-400","mb-4":!0,children:"A web application that displays daily prayer times based on the selected city. It integrates a REST API using Axios to fetch accurate prayer timings and presents them in a clean and responsive interface."}),me.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:r.map((i,s)=>me.jsx("span",{Key:s,className:"bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all",children:i}))}),me.jsx("div",{className:"flex justify-between items-center",children:me.jsxs("a",{href:"https://pratertime.netlify.app/",className:" group text-emerald-400 hover:text-emerald-300 transition-colors my-4 inline-flex items-center gap-1",children:["View Project",me.jsx("span",{className:"material-symbols-outlined transition-transform group-hover:translate-x-1",children:"arrow_right_alt"})]})})]}),me.jsxs("div",{className:"p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition",children:[me.jsx("h3",{className:"text-xl font-bold mb-2",children:"Social Media Web App"}),me.jsx("p",{className:"text-gray-400","mb-4":!0,children:"A social media–style web application built using Vanilla JavaScript, Axios, Bootstrap, and REST APIs. The application allows users to create accounts, share posts, interact with content, and manage their profiles in a dynamic and responsive interface."}),me.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:e.map((i,s)=>me.jsx("span",{Key:s,className:"bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all",children:i}))}),me.jsx("div",{className:"flex justify-between items-center",children:me.jsxs("a",{href:"https://soicalmediap.netlify.app/",className:" group text-emerald-400 hover:text-emerald-300 transition-colors my-4 inline-flex items-center gap-1",children:["View Project",me.jsx("span",{className:"material-symbols-outlined transition-transform group-hover:translate-x-1",children:"arrow_right_alt"})]})})]}),me.jsxs("div",{className:"p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition",children:[me.jsx("h3",{className:"text-xl font-bold mb-2",children:"To-Do List"}),me.jsx("p",{className:"text-gray-400","mb-4":!0,children:"A web-based To-Do List application that allows users to add, edit, delete, and mark tasks as completed. Tasks are saved in localStorage so the list persists across browser sessions, providing a seamless user experience."}),me.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:e.map((i,s)=>me.jsx("span",{Key:s,className:"bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all",children:i}))}),me.jsx("div",{className:"flex justify-between items-center",children:me.jsxs("a",{href:"https://todolist-aljazi.netlify.app/",className:" group text-emerald-400 hover:text-emerald-300 transition-colors my-4 inline-flex items-center gap-1",children:["View Project",me.jsx("span",{className:"material-symbols-outlined transition-transform group-hover:translate-x-1",children:"arrow_right_alt"})]})})]})]})]})})})},Ko={_origin:"https://api.emailjs.com"},sR=(r,e="https://api.emailjs.com")=>{Ko._userID=r,Ko._origin=e},bv=(r,e,i)=>{if(!r)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class z_{constructor(e){this.status=e.status,this.text=e.responseText}}const Tv=(r,e,i={})=>new Promise((s,l)=>{const c=new XMLHttpRequest;c.addEventListener("load",({target:d})=>{const h=new z_(d);h.status===200||h.text==="OK"?s(h):l(h)}),c.addEventListener("error",({target:d})=>{l(new z_(d))}),c.open("POST",Ko._origin+r,!0),Object.keys(i).forEach(d=>{c.setRequestHeader(d,i[d])}),c.send(e)}),oR=(r,e,i,s)=>{const l=s||Ko._userID;return bv(l,r,e),Tv("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:l,service_id:r,template_id:e,template_params:i}),{"Content-type":"application/json"})},lR=r=>{let e;if(typeof r=="string"?e=document.querySelector(r):e=r,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},cR=(r,e,i,s)=>{const l=s||Ko._userID,c=lR(i);bv(l,r,e);const d=new FormData(c);return d.append("lib_version","3.2.0"),d.append("service_id",r),d.append("template_id",e),d.append("user_id",l),Tv("/api/v1.0/email/send-form",d)},uR={init:sR,send:oR,sendForm:cR};var Av={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},H_=Pr.createContext&&Pr.createContext(Av),fR=["attr","size","title"];function dR(r,e){if(r==null)return{};var i=hR(r,e),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(l=0;l<c.length;l++)s=c[l],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(i[s]=r[s])}return i}function hR(r,e){if(r==null)return{};var i={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;i[s]=r[s]}return i}function Wc(){return Wc=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Wc.apply(this,arguments)}function G_(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function qc(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?G_(Object(i),!0).forEach(function(s){pR(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):G_(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}function pR(r,e,i){return e=mR(e),e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function mR(r){var e=gR(r,"string");return typeof e=="symbol"?e:e+""}function gR(r,e){if(typeof r!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Rv(r){return r&&r.map((e,i)=>Pr.createElement(e.tag,qc({key:i},e.attr),Rv(e.child)))}function Cv(r){return e=>Pr.createElement(_R,Wc({attr:qc({},r.attr)},e),Rv(r.child))}function _R(r){var e=i=>{var{attr:s,size:l,title:c}=r,d=dR(r,fR),h=l||i.size||"1em",m;return i.className&&(m=i.className),r.className&&(m=(m?m+" ":"")+r.className),Pr.createElement("svg",Wc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,s,d,{className:m,style:qc(qc({color:r.color||i.color},i.style),r.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&Pr.createElement("title",null,c),r.children)};return H_!==void 0?Pr.createElement(H_.Consumer,null,i=>e(i)):e(Av)}function vR(r){return Cv({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function xR(r){return Cv({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(r)}const SR=()=>{const[r,e]=zn.useState({name:"",email:"",message:""}),i=s=>{s.preventDefault(),uR.sendForm(void 0,void 0,s.target,void 0).then(l=>{alert("Message Sent"),e({name:"",email:"",message:""})}).catch(l=>{alert("Something is wrong")})};return me.jsx("section",{id:"contact",className:"miin-h-screen flex items-center justify-center py-20",children:me.jsx(Yc,{children:me.jsxs("div",{className:"px-4 w-150",children:[me.jsx("h2",{className:`text-3xl font-bold mb-8  bg-gradient-to-r from-[oklch(72.3%_0.219_149.579)] to-[oklch(90%_0.25_210)] \r
                    bg-clip-text text-transparent text-center `,children:" Get In Touch"}),me.jsxs("div",{className:"flex gap-4 space-y-7",children:[me.jsxs("a",{href:"https://github.com/aljazikb",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white hover:text-green-400",children:[me.jsx(vR,{size:20}),"GitHub"]}),me.jsxs("a",{href:"www.linkedin.com/in/aljazy-banaemah-183a983a7",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white hover:text-blue-400",children:[me.jsx(xR,{size:20}),"LinkedIn"]}),me.jsx("a",{href:"https://x.com/ALJAZI310",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-5 h-5 rounded-full bg-black-800 text-white text-lg font-bold hover:bg-green-500 transition-colors",children:"X"})]}),me.jsxs("form",{className:"space-y-6",onSubmit:i,children:[me.jsx("div",{className:"relative",children:me.jsx("input",{type:"text",id:"name",name:"name",required:!0,className:`w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500\r
                                 focus:bg-green-500/5`,placeholder:"Name..",value:r.name,onChange:s=>e({...r,name:s.target.value})})}),me.jsx("div",{className:"relative",children:me.jsx("input",{type:"email",id:"email",name:"email",required:!0,className:`w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500\r
                                 focus:bg-green-500/5`,placeholder:"example@gmail.com",value:r.email,onChange:s=>e({...r,email:s.target.value})})}),me.jsx("div",{className:"relative",children:me.jsx("textarea",{id:"message",name:"message",rows:5,required:!0,className:`w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500\r
                                 focus:bg-green-500/5`,placeholder:"you message",value:r.message,onChange:s=>e({...r,message:s.target.value})})}),me.jsx("button",{type:"submit",className:`w-full bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5\r
                              hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]`,children:"Send Message"})]})]})})})};function MR(){const[r,e]=zn.useState(!1),[i,s]=zn.useState(!1);return me.jsxs(me.Fragment,{children:[!r&&me.jsx(XS,{onComplete:()=>e(!0)}),me.jsxs("div",{className:`min-h-screen transition-opacity duration-700 ${r?"opacity-100":"opacity-0"}  bg-transparent text-gray-100`,children:[me.jsx("div",{className:"finisher-header fixed inset-0 -z-10"}),me.jsx(WS,{menuOpen:i,setMenuOpen:s}),me.jsx(qS,{menuOpen:i,setMenuOpen:s}),me.jsx(iR,{}),me.jsx(aR,{}),me.jsx(rR,{}),me.jsx(SR,{})]})]})}kS.createRoot(document.getElementById("root")).render(me.jsx(zn.StrictMode,{children:me.jsx(MR,{})}));
