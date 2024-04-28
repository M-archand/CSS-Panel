"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2879],{5722:function(e,t,r){r.d(t,{k:function(){return i}});var n=r(1402);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{strict:t=!0,errorMessage:r="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:i}=e,o=n.createContext(void 0);return o.displayName=i,[o.Provider,function e(){var i;let a=n.useContext(o);if(!a&&t){let t=Error(r);throw t.name="ContextError",null==(i=Error.captureStackTrace)||i.call(Error,t,e),t}return a},o]}},2013:function(e,t,r){r.d(t,{L:function(){return u}});var n=r(7949),i=r(1225),o=r(2412),a=(e,t,r)=>Math.min(Math.max(e,t),r),l=e=>{let{ripples:t=[],motionProps:r,color:l="currentColor",style:u,onClear:s}=e;return(0,o.jsx)(o.Fragment,{children:t.map(e=>{let t=a(.01*e.size,.2,e.size>100?.75:.5);return(0,o.jsx)(n.M,{mode:"popLayout",children:(0,o.jsx)(i.E.span,{animate:{transform:"scale(2)",opacity:0},className:"nextui-ripple",exit:{opacity:0},initial:{transform:"scale(0)",opacity:.35},style:{position:"absolute",backgroundColor:l,borderRadius:"100%",transformOrigin:"center",pointerEvents:"none",zIndex:10,top:e.y,left:e.x,width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),...u},transition:{duration:t},onAnimationComplete:()=>{s(e.key)},...r})},e.key)})})};l.displayName="NextUI.Ripple";var u=l},1340:function(e,t,r){r.d(t,{i:function(){return o}});var n=r(153),i=r(1402);function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=(0,i.useState)([]);return{ripples:t,onClick:(0,i.useCallback)(e=>{let t=e.currentTarget,i=Math.max(t.clientWidth,t.clientHeight),o=t.getBoundingClientRect();r(t=>[...t,{key:(0,n.QI)(t.length.toString()),size:i,x:e.clientX-o.x-i/2,y:e.clientY-o.y-i/2}])},[]),onClear:(0,i.useCallback)(e=>{r(t=>t.filter(t=>t.key!==e))},[]),...e}}},153:function(e,t,r){r.d(t,{Os:function(){return a},QI:function(){return o},kC:function(){return n},v0:function(){return i}});var n=e=>e.charAt(0).toUpperCase()+e.slice(1);function i(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}function o(e){return`${e}-${Math.floor(1e6*Math.random())}`}function a(e){for(let t in e)t.startsWith("on")&&delete e[t];return e}},3590:function(e,t,r){r.d(t,{j:function(){return a}});var n=r(8322),i=r(7069),o=r(910);function a(e,t){let r,{elementType:a="button",isDisabled:l,onPress:u,onPressStart:s,onPressEnd:c,onPressChange:d,preventFocusOnPress:f,allowFocusWhenDisabled:p,onClick:g,href:v,target:m,rel:y,type:h="button",allowTextSelectionOnPress:T}=e;r="button"===a?{type:h,disabled:l}:{role:"button",tabIndex:l?void 0:0,href:"a"===a&&l?void 0:v,target:"a"===a?m:void 0,type:"input"===a?h:void 0,disabled:"input"===a?l:void 0,"aria-disabled":l&&"input"!==a?l:void 0,rel:"a"===a?y:void 0};let{pressProps:E,isPressed:b}=(0,o.r)({onPressStart:s,onPressEnd:c,onPressChange:d,onPress:u,isDisabled:l,preventFocusOnPress:f,allowTextSelectionOnPress:T,ref:t}),{focusableProps:w}=(0,i.kc)(e,t);p&&(w.tabIndex=l?-1:w.tabIndex);let P=(0,n.dG)(w,E,(0,n.zL)(e,{labelable:!0}));return{isPressed:b,buttonProps:(0,n.dG)(r,P,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:e=>{null==g||g(e)}})}}},910:function(e,t,r){r.d(t,{r:function(){return P}});var n,i=r(1402),o=i.createContext(null);o.displayName="PressResponderContext";var a=Object.defineProperty,l=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t,r)=>(l(e,"symbol"!=typeof t?t+"":t,r),r),s=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},c=(e,t,r)=>(s(e,t,"read from private field"),r?r.call(e):t.get(e)),d=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},f=(e,t,r,n)=>(s(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),p=class{constructor(e,t,r){u(this,"type"),u(this,"pointerType"),u(this,"target"),u(this,"shiftKey"),u(this,"ctrlKey"),u(this,"metaKey"),u(this,"altKey"),d(this,n,!0),this.type=e,this.pointerType=t,this.target=r.currentTarget,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.ctrlKey=r.ctrlKey,this.altKey=r.altKey}continuePropagation(){f(this,n,!1)}get shouldStopPropagation(){return c(this,n)}};n=new WeakMap;var g=e=>{var t;return null!=(t=null==e?void 0:e.ownerDocument)?t:document},v=e=>{var t,r;return null!=(r=null==(t=null==e?void 0:e.ownerDocument)?void 0:t.defaultView)?r:window},m=r(5495),y="default",h="",T=new WeakMap;function E(e){if((0,m.gn)()){if("default"===y){let t=g(e);h=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}y="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(T.set(e,e.style.userSelect),e.style.userSelect="none")}function b(e){if((0,m.gn)())"disabled"===y&&(y="restoring",setTimeout(()=>{(0,m.QB)(()=>{if("restoring"===y){let t=g(e);"none"===t.documentElement.style.webkitUserSelect&&(t.documentElement.style.webkitUserSelect=h||""),h="",y="default"}})},300));else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&T.has(e)){let t=T.get(e);"none"===e.style.userSelect&&t&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),T.delete(e)}}var w=Symbol("linkClicked");function P(e){let{onPress:t,onPressChange:r,onPressStart:n,onPressEnd:a,onPressUp:l,isDisabled:u,isPressed:s,preventFocusOnPress:c,shouldCancelOnPointerExit:d,allowTextSelectionOnPress:f,ref:y,...h}=function(e){let t=(0,i.useContext)(o);if(t){let{register:r,...n}=t;e=(0,m.dG)(n,e),r()}return(0,m.lE)(t,e.ref),e}(e),[T,P]=(0,i.useState)(!1),A=(0,i.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:I,removeAllGlobalListeners:O}=(0,m.xi)(),R=(0,m.iW)((e,t)=>{let i=A.current;if(u||i.didFirePressStart)return;let o=!0;if(i.isTriggeringEvent=!0,n){let r=new p("pressstart",t,e);n(r),o=r.shouldStopPropagation}return r&&r(!0),i.isTriggeringEvent=!1,i.didFirePressStart=!0,P(!0),o}),W=(0,m.iW)((e,n,i=!0)=>{let o=A.current;if(!o.didFirePressStart)return;o.ignoreClickAfterPress=!0,o.didFirePressStart=!1,o.isTriggeringEvent=!0;let l=!0;if(a){let t=new p("pressend",n,e);a(t),l=t.shouldStopPropagation}if(r&&r(!1),P(!1),t&&i&&!u){let r=new p("press",n,e);t(r),l&&(l=r.shouldStopPropagation)}return o.isTriggeringEvent=!1,l}),z=(0,m.iW)((e,t)=>{let r=A.current;if(!u){if(l){r.isTriggeringEvent=!0;let n=new p("pressup",t,e);return l(n),r.isTriggeringEvent=!1,n.shouldStopPropagation}return!0}}),D=(0,m.iW)(e=>{let t=A.current;t.isPressed&&(t.isOverTarget&&t.target&&W(S(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,O(),!f&&t.target&&b(t.target))}),N=(0,m.iW)(e=>{d&&D(e)}),H=(0,i.useMemo)(()=>{let e=A.current,t={onKeyDown(t){var n;if(C(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){L(t.target,t.key)&&t.preventDefault();let i=!0;e.isPressed||t.repeat||(e.target=t.currentTarget,e.isPressed=!0,i=R(t,"keyboard"),I(g(t.currentTarget),"keyup",r,!1)),i&&t.stopPropagation(),t.metaKey&&(0,m.V5)()&&(null==(n=e.metaKeyEvents)||n.set(t.key,t.nativeEvent))}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onKeyUp(t){e.target&&C(t.nativeEvent,t.currentTarget)&&!t.repeat&&t.currentTarget.contains(t.target)&&z(S(e.target,t),"keyboard")},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!m.nG.isOpening){let r=!0;if(u&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||(0,m.Zj)(t.nativeEvent))){u||c||(0,m.Ao)(t.currentTarget);let e=R(t,"virtual"),n=z(t,"virtual"),i=W(t,"virtual");r=e&&n&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,r&&t.stopPropagation()}}},r=t=>{var r,n;if(e.isPressed&&e.target&&C(t,e.target)){L(t.target,t.key)&&t.preventDefault();let n=t.target,i=W(S(e.target,t),"keyboard",e.target.contains(n));O(),i&&t.stopPropagation(),"Enter"!==t.key&&k(e.target)&&e.target.contains(n)&&!t[w]&&(t[w]=!0,(0,m.nG)(e.target,t,!1)),e.isPressed=!1,null==(r=e.metaKeyEvents)||r.delete(t.key)}else if("Meta"===t.key&&(null==(n=e.metaKeyEvents)?void 0:n.size)){let t=e.metaKeyEvents;for(let r of(e.metaKeyEvents=null,t.values()))e.target&&e.target.dispatchEvent(new KeyboardEvent("keyup",r))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if((0,m.cr)(t.nativeEvent)){e.pointerType="virtual";return}K(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let o=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,u||c||(0,m.Ao)(t.currentTarget),f||E(e.target),o=R(t,e.pointerType),I(g(t.currentTarget),"pointermove",r,!1),I(g(t.currentTarget),"pointerup",n,!1),I(g(t.currentTarget),"pointercancel",i,!1)),o&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(K(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&x(t,t.currentTarget)&&z(t,e.pointerType||t.pointerType)};let r=t=>{t.pointerId===e.activePointerId&&e.target&&(x(t,e.target)?e.isOverTarget||(e.isOverTarget=!0,R(S(e.target,t),e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,W(S(e.target,t),e.pointerType,!1),N(t)))},n=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&e.target&&(x(t,e.target)?W(S(e.target,t),e.pointerType):e.isOverTarget&&W(S(e.target,t),e.pointerType),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,O(),f||b(e.target))},i=e=>{D(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&D(e)}}else{t.onMouseDown=t=>{if(0===t.button&&t.currentTarget.contains(t.target)){if(K(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents){t.stopPropagation();return}e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=(0,m.Zj)(t.nativeEvent)?"virtual":"mouse",u||c||(0,m.Ao)(t.currentTarget),R(t,e.pointerType)&&t.stopPropagation(),I(g(t.currentTarget),"mouseup",r,!1)}},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let r=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!0,r=R(t,e.pointerType)),r&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let r=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!1,r=W(t,e.pointerType,!1),N(t)),r&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||z(t,e.pointerType||"mouse"))};let r=t=>{if(0===t.button){if(e.isPressed=!1,O(),e.ignoreEmulatedMouseEvents){e.ignoreEmulatedMouseEvents=!1;return}e.target&&(x(t,e.target)?W(S(e.target,t),e.pointerType):e.isOverTarget&&W(S(e.target,t),e.pointerType,!1),e.isOverTarget=!1)}};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let r=function(e){let{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);r&&(e.activePointerId=r.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",u||c||(0,m.Ao)(t.currentTarget),f||E(e.target),R(t,e.pointerType)&&t.stopPropagation(),I(v(t.currentTarget),"scroll",n,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed){t.stopPropagation();return}let r=M(t.nativeEvent,e.activePointerId),n=!0;r&&x(r,t.currentTarget)?e.isOverTarget||(e.isOverTarget=!0,n=R(t,e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,n=W(t,e.pointerType,!1),N(t)),n&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed){t.stopPropagation();return}let r=M(t.nativeEvent,e.activePointerId),n=!0;r&&x(r,t.currentTarget)?(z(t,e.pointerType),n=W(t,e.pointerType)):e.isOverTarget&&(n=W(t,e.pointerType,!1)),n&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,!f&&e.target&&b(e.target),O()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&D(t))};let n=t=>{e.isPressed&&t.target.contains(e.target)&&D({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&D(e)}}return t},[I,u,c,O,f,D,N,W,R,z]);return(0,i.useEffect)(()=>()=>{!f&&A.current.target&&b(A.current.target)},[f]),{isPressed:s||T,pressProps:(0,m.dG)(h,H)}}function k(e){return"A"===e.tagName&&e.hasAttribute("href")}function C(e,t){let{key:r,code:n}=e,i=t.getAttribute("role");return("Enter"===r||" "===r||"Spacebar"===r||"Space"===n)&&!(t instanceof v(t).HTMLInputElement&&!I(t,r)||t instanceof v(t).HTMLTextAreaElement||t.isContentEditable)&&!(("link"===i||!i&&k(t))&&"Enter"!==r)}function M(e,t){let r=e.changedTouches;for(let e=0;e<r.length;e++){let n=r[e];if(n.identifier===t)return n}return null}function S(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function x(e,t){let r,n,i=t.getBoundingClientRect(),o=(r=e.width?e.width/2:e.radiusX||0,n=e.height?e.height/2:e.radiusY||0,{top:e.clientY-n,right:e.clientX+r,bottom:e.clientY+n,left:e.clientX-r});return!(i.left>o.right)&&!(o.left>i.right)&&!(i.top>o.bottom)&&!(o.top>i.bottom)}function K(e){return!(e instanceof HTMLElement)||!e.hasAttribute("draggable")}function L(e,t){return e instanceof HTMLInputElement?!I(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!k(e)}var A=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function I(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:A.has(e.type)}},5495:function(e,t,r){r.d(t,{Ao:function(){return b},Gt:function(){return _},Me:function(){return c},PK:function(){return V},QB:function(){return z},V5:function(){return C},Zj:function(){return Y},a9:function(){return U},ad:function(){return x},bE:function(){return N},bt:function(){return a},cr:function(){return Q},dG:function(){return v},gn:function(){return S},iW:function(){return l},kR:function(){return g},lE:function(){return H},mp:function(){return d},nG:function(){return I},r3:function(){return p},tS:function(){return f},tv:function(){return A},xi:function(){return D},y$:function(){return Z},zL:function(){return E},zT:function(){return $},zX:function(){return B}});var n=r(1402),i=r(6024),o=r(3509);let a="undefined"!=typeof document?n.useLayoutEffect:()=>{};function l(e){let t=(0,n.useRef)(null);return a(()=>{t.current=e},[e]),(0,n.useCallback)((...e)=>{let r=t.current;return null==r?void 0:r(...e)},[])}let u=!!("undefined"!=typeof window&&window.document&&window.document.createElement),s=new Map;function c(e){let[t,r]=(0,n.useState)(e),o=(0,n.useRef)(null),l=(0,i.gP)(t),c=(0,n.useCallback)(e=>{o.current=e},[]);return u&&s.set(l,c),a(()=>()=>{s.delete(l)},[l]),(0,n.useEffect)(()=>{let e=o.current;e&&(o.current=null,r(e))}),l}function d(e=[]){let t=c(),[r,i]=function(e){let[t,r]=(0,n.useState)(e),i=(0,n.useRef)(null),o=l(()=>{if(!i.current)return;let e=i.current.next();if(e.done){i.current=null;return}t===e.value?o():r(e.value)});a(()=>{i.current&&o()});let u=l(e=>{i.current=e(t),o()});return[t,u]}(t),o=(0,n.useCallback)(()=>{i(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,i]);return a(o,[t,o,...e]),r}function f(...e){return(...t)=>{for(let r of e)"function"==typeof r&&r(...t)}}let p=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},g=e=>e&&"window"in e&&e.window===e?e:p(e).defaultView||window;function v(...e){let t={...e[0]};for(let r=1;r<e.length;r++){let n=e[r];for(let e in n){let r=t[e],i=n[e];"function"==typeof r&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&90>=e.charCodeAt(2)?t[e]=f(r,i):("className"===e||"UNSAFE_className"===e)&&"string"==typeof r&&"string"==typeof i?t[e]=(0,o.Z)(r,i):"id"===e&&r&&i?t.id=function(e,t){if(e===t)return e;let r=s.get(e);if(r)return r(t),t;let n=s.get(t);return n?(n(e),e):t}(r,i):t[e]=void 0!==i?i:r}}return t}let m=new Set(["id"]),y=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),h=new Set(["href","target","rel","download","ping","referrerPolicy"]),T=/^(data-.*)$/;function E(e,t={}){let{labelable:r,isLink:n,propNames:i}=t,o={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(m.has(t)||r&&y.has(t)||n&&h.has(t)||(null==i?void 0:i.has(t))||T.test(t))&&(o[t]=e[t]);return o}function b(e){if(function(){if(null==w){w=!1;try{document.createElement("div").focus({get preventScroll(){return w=!0,!0}})}catch(e){}}return w}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,r=[],n=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==n;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&r.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return n instanceof HTMLElement&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),r}(e);e.focus(),function(e){for(let{element:t,scrollTop:r,scrollLeft:n}of e)t.scrollTop=r,t.scrollLeft=n}(t)}}let w=null;function P(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function k(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function C(){return k(/^Mac/i)}function M(){return k(/^iPad/i)||C()&&navigator.maxTouchPoints>1}function S(){return k(/^iPhone/i)||M()}function x(){return C()||S()}function K(){return P(/Android/i)}let L=(0,n.createContext)({isNative:!0,open:function(e,t){!function(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let r=document.createElement("a");r.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(r.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(r.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(r.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(r.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(r.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(r),t(r),e.removeChild(r)}}(e,e=>I(e,t))}});function A(){return(0,n.useContext)(L)}function I(e,t,r=!0){var n,i;let{metaKey:o,ctrlKey:a,altKey:l,shiftKey:u}=t;P(/Firefox/i)&&(null===(i=window.event)||void 0===i?void 0:null===(n=i.type)||void 0===n?void 0:n.startsWith("key"))&&"_blank"===e.target&&(C()?o=!0:a=!0);let s=P(/AppleWebKit/i)&&!P(/Chrome/i)&&C()&&!M()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:o,ctrlKey:a,altKey:l,shiftKey:u}):new MouseEvent("click",{metaKey:o,ctrlKey:a,altKey:l,shiftKey:u,bubbles:!0,cancelable:!0});I.isOpening=r,b(e),e.dispatchEvent(s),I.isOpening=!1}I.isOpening=!1;let O=new Map,R=new Set;function W(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=r=>{if(!e(r)||!r.target)return;let n=O.get(r.target);if(n&&(n.delete(r.propertyName),0===n.size&&(r.target.removeEventListener("transitioncancel",t),O.delete(r.target)),0===O.size)){for(let e of R)e();R.clear()}};document.body.addEventListener("transitionrun",r=>{if(!e(r)||!r.target)return;let n=O.get(r.target);n||(n=new Set,O.set(r.target,n),r.target.addEventListener("transitioncancel",t,{once:!0})),n.add(r.propertyName)}),document.body.addEventListener("transitionend",t)}function z(e){requestAnimationFrame(()=>{0===O.size?e():R.add(e)})}function D(){let e=(0,n.useRef)(new Map),t=(0,n.useCallback)((t,r,n,i)=>{let o=(null==i?void 0:i.once)?(...t)=>{e.current.delete(n),n(...t)}:n;e.current.set(n,{type:r,eventTarget:t,fn:o,options:i}),t.addEventListener(r,n,i)},[]),r=(0,n.useCallback)((t,r,n,i)=>{var o;let a=(null===(o=e.current.get(n))||void 0===o?void 0:o.fn)||n;t.removeEventListener(r,a,i),e.current.delete(n)},[]),i=(0,n.useCallback)(()=>{e.current.forEach((e,t)=>{r(e.eventTarget,e.type,t,e.options)})},[r]);return(0,n.useEffect)(()=>i,[i]),{addGlobalListener:t,removeGlobalListener:r,removeAllGlobalListeners:i}}function N(e,t){let{id:r,"aria-label":n,"aria-labelledby":i}=e;return r=c(r),i&&n?i=[...new Set([r,...i.trim().split(/\s+/)])].join(" "):i&&(i=i.trim().split(/\s+/).join(" ")),n||i||!t||(n=t),{id:r,"aria-label":n,"aria-labelledby":i}}function H(e,t){a(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}function G(e,t){let r=e;for(U(r,t)&&(r=r.parentElement);r&&!U(r,t);)r=r.parentElement;return r||document.scrollingElement||document.documentElement}function U(e,t){let r=window.getComputedStyle(e),n=/(auto|scroll)/.test(r.overflow+r.overflowX+r.overflowY);return n&&t&&(n=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),n}"undefined"!=typeof document&&("loading"!==document.readyState?W():document.addEventListener("DOMContentLoaded",W)),"undefined"!=typeof document&&window.visualViewport;let j=0,F=new Map;function V(e){let[t,r]=(0,n.useState)();return a(()=>{if(!e)return;let t=F.get(e);if(t)r(t.element.id);else{let n=`react-aria-description-${j++}`;r(n);let i=document.createElement("div");i.id=n,i.style.display="none",i.textContent=e,document.body.appendChild(i),t={refCount:0,element:i},F.set(e,t)}return t.refCount++,()=>{t&&0==--t.refCount&&(t.element.remove(),F.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}function B(e,t,r,i){let o=l(r),a=null==r;(0,n.useEffect)(()=>{if(a||!e.current)return;let r=e.current;return r.addEventListener(t,o,i),()=>{r.removeEventListener(t,o,i)}},[e,t,i,a,o])}function $(e,t){let r=X(e,t,"left"),n=X(e,t,"top"),i=t.offsetWidth,o=t.offsetHeight,a=e.scrollLeft,l=e.scrollTop,{borderTopWidth:u,borderLeftWidth:s}=getComputedStyle(e),c=e.scrollLeft+parseInt(s,10),d=e.scrollTop+parseInt(u,10),f=c+e.clientWidth,p=d+e.clientHeight;r<=a?a=r-parseInt(s,10):r+i>f&&(a+=r+i-f),n<=d?l=n-parseInt(u,10):n+o>p&&(l+=n+o-p),e.scrollLeft=a,e.scrollTop=l}function X(e,t,r){let n="left"===r?"offsetLeft":"offsetTop",i=0;for(;t.offsetParent&&(i+=t[n],t.offsetParent!==e);){if(t.offsetParent.contains(e)){i-=e[n];break}t=t.offsetParent}return i}function _(e,t){if(document.contains(e)){let a=document.scrollingElement||document.documentElement;if("hidden"===window.getComputedStyle(a).overflow){let t=G(e);for(;e&&t&&e!==a&&t!==a;)$(t,e),t=G(e=t)}else{var r,n,i,o;let{left:a,top:l}=e.getBoundingClientRect();null==e||null===(r=e.scrollIntoView)||void 0===r||r.call(e,{block:"nearest"});let{left:u,top:s}=e.getBoundingClientRect();(Math.abs(a-u)>1||Math.abs(l-s)>1)&&(null==t||null===(i=t.containingElement)||void 0===i||null===(n=i.scrollIntoView)||void 0===n||n.call(i,{block:"center",inline:"center"}),null===(o=e.scrollIntoView)||void 0===o||o.call(e,{block:"nearest"}))}}}function Y(e){return 0===e.mozInputSource&&!!e.isTrusted||(K()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function Q(e){return!K()&&0===e.width&&0===e.height||1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType}function Z(e,t,r){let i=(0,n.useRef)(t),o=l(()=>{r&&r(i.current)});(0,n.useEffect)(()=>{var t;let r=null==e?void 0:null===(t=e.current)||void 0===t?void 0:t.form;return null==r||r.addEventListener("reset",o),()=>{null==r||r.removeEventListener("reset",o)}},[e,o])}},7949:function(e,t,r){r.d(t,{M:function(){return m}});var n=r(1402),i=r(3297),o=r(7005),a=r(7833),l=r(640);class u extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function s({children:e,isPresent:t}){let r=(0,n.useId)(),i=(0,n.useRef)(null),o=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)(()=>{let{width:e,height:n,top:a,left:l}=o.current;if(t||!i.current||!e||!n)return;i.current.dataset.motionPopId=r;let u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),n.createElement(u,{isPresent:t,childRef:i,sizeRef:o},n.cloneElement(e,{ref:i}))}let c=({children:e,initial:t,isPresent:r,onExitComplete:i,custom:o,presenceAffectsLayout:u,mode:c})=>{let f=(0,l.h)(d),p=(0,n.useId)(),g=(0,n.useMemo)(()=>({id:p,initial:t,isPresent:r,custom:o,onExitComplete:e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;i&&i()},register:e=>(f.set(e,!1),()=>f.delete(e))}),u?void 0:[r]);return(0,n.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[r]),n.useEffect(()=>{r||f.size||!i||i()},[r]),"popLayout"===c&&(e=n.createElement(s,{isPresent:r},e)),n.createElement(a.O.Provider,{value:g},e)};function d(){return new Map}var f=r(3665),p=r(6371),g=r(2477);let v=e=>e.key||"",m=({children:e,custom:t,initial:r=!0,onExitComplete:a,exitBeforeEnter:l,presenceAffectsLayout:u=!0,mode:s="sync"})=>{var d;(0,g.k)(!l,"Replace exitBeforeEnter with mode='wait'");let m=(0,n.useContext)(f.p).forceRender||(0,i.N)()[0],y=(0,o.t)(),h=function(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}(e),T=h,E=(0,n.useRef)(new Map).current,b=(0,n.useRef)(T),w=(0,n.useRef)(new Map).current,P=(0,n.useRef)(!0);if((0,p.L)(()=>{P.current=!1,function(e,t){e.forEach(e=>{let r=v(e);t.set(r,e)})}(h,w),b.current=T}),d=()=>{P.current=!0,w.clear(),E.clear()},(0,n.useEffect)(()=>()=>d(),[]),P.current)return n.createElement(n.Fragment,null,T.map(e=>n.createElement(c,{key:v(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:u,mode:s},e)));T=[...T];let k=b.current.map(v),C=h.map(v),M=k.length;for(let e=0;e<M;e++){let t=k[e];-1!==C.indexOf(t)||E.has(t)||E.set(t,void 0)}return"wait"===s&&E.size&&(T=[]),E.forEach((e,r)=>{if(-1!==C.indexOf(r))return;let i=w.get(r);if(!i)return;let o=k.indexOf(r),l=e;l||(l=n.createElement(c,{key:v(i),isPresent:!1,onExitComplete:()=>{E.delete(r);let e=Array.from(w.keys()).filter(e=>!C.includes(e));if(e.forEach(e=>w.delete(e)),b.current=h.filter(t=>{let n=v(t);return n===r||e.includes(n)}),!E.size){if(!1===y.current)return;m(),a&&a()}},custom:t,presenceAffectsLayout:u,mode:s},i),E.set(r,l)),T.splice(o,0,l)}),T=T.map(e=>{let t=e.key;return E.has(t)?e:n.createElement(c,{key:v(e),isPresent:!0,presenceAffectsLayout:u,mode:s},e)}),n.createElement(n.Fragment,null,E.size?T:T.map(e=>(0,n.cloneElement)(e)))}}}]);