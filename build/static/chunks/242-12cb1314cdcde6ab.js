"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[242],{77892:function(e,n,r){r.d(n,{d:function(){return l}});var t=r(89478),o=r(64588);function l(e={}){let{loading:n,src:r,srcSet:l,onLoad:a,onError:u,crossOrigin:i,sizes:c,ignoreFallback:s}=e,[d,f]=(0,t.useState)("pending");(0,t.useEffect)(()=>{f(r?"loading":"pending")},[r]);let g=(0,t.useRef)(),w=(0,t.useCallback)(()=>{if(!r)return;v();let e=new Image;e.src=r,i&&(e.crossOrigin=i),l&&(e.srcset=l),c&&(e.sizes=c),n&&(e.loading=n),e.onload=e=>{v(),f("loaded"),null==a||a(e)},e.onerror=e=>{v(),f("failed"),null==u||u(e)},g.current=e},[r,i,l,c,a,u,n]),v=()=>{g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,o.G)(()=>{if(!s)return"loading"===d&&w(),()=>{v()}},[d,w,s]),s?"loaded":d}},60279:function(e,n,r){r.d(n,{_:function(){return i}});var t=r(89478);r(36458);var o="undefined"!=typeof window?t.useLayoutEffect:t.useEffect;function l(e,n,r,l){let a=(0,t.useRef)(n);o(()=>{a.current=n},[n]),(0,t.useEffect)(()=>{let n=(null==r?void 0:r.current)??window;if(!(n&&n.addEventListener))return;let t=e=>{a.current(e)};return n.addEventListener(e,t,l),()=>{n.removeEventListener(e,t,l)}},[e,r,l])}function a(e){let n=(0,t.useRef)(()=>{throw Error("Cannot call an event handler while rendering.")});return o(()=>{n.current=e},[e]),(0,t.useCallback)((...e)=>{var r;return null==(r=n.current)?void 0:r.call(n,...e)},[n])}var u="undefined"==typeof window;function i(e,n,r={}){let{initializeWithValue:o=!0}=r,i=(0,t.useCallback)(e=>r.serializer?r.serializer(e):JSON.stringify(e),[r]),c=(0,t.useCallback)(e=>{let t;if(r.deserializer)return r.deserializer(e);if("undefined"===e)return;let o=n instanceof Function?n():n;try{t=JSON.parse(e)}catch(e){return console.error("Error parsing JSON:",e),o}return t},[r,n]),s=(0,t.useCallback)(()=>{let r=n instanceof Function?n():n;if(u)return r;try{let n=window.localStorage.getItem(e);return n?c(n):r}catch(n){return console.warn(`Error reading localStorage key \u201C${e}\u201D:`,n),r}},[n,e,c]),[d,f]=(0,t.useState)(()=>o?s():n instanceof Function?n():n),g=a(n=>{u&&console.warn(`Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`);try{let r=n instanceof Function?n(s()):n;window.localStorage.setItem(e,i(r)),f(r),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))}catch(n){console.warn(`Error setting localStorage key \u201C${e}\u201D:`,n)}}),w=a(()=>{u&&console.warn(`Tried removing localStorage key \u201C${e}\u201D even though environment is not a client`);let r=n instanceof Function?n():n;window.localStorage.removeItem(e),f(r),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))});(0,t.useEffect)(()=>{f(s())},[e]);let v=(0,t.useCallback)(n=>{n.key&&n.key!==e||f(s())},[e,s]);return l("storage",v),l("local-storage",v),[d,g,w]}}}]);