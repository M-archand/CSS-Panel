(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8314],{88916:function(e,t,s){Promise.resolve().then(s.bind(s,92891)),Promise.resolve().then(s.bind(s,13627))},92891:function(e,t,s){"use strict";var n=s(10401),i=s(32820),o=s(68549),r=s(89478),a=s(90296);t.default=e=>{let{children:t,flags:s}=e,{admin:u,isLoading:l}=(0,a.ZP)(),d=(0,o.useRouter)();return(0,r.useEffect)(()=>{if(!l&&(!u||s.length>0&&!s.some(e=>{var t;return null===(t=u.flags)||void 0===t?void 0:t.includes(e)})))return d.push("/")},[u,l,d,s]),l?(0,n.jsx)(i.c,{}):u?(0,n.jsx)(n.Fragment,{children:t}):(0,n.jsx)(n.Fragment,{children:"No Access"})}},13627:function(e,t,s){"use strict";s.d(t,{r:function(){return l}});var n=s(10401),i=s(69492),o=s(68549),r=s(76322),a=s(71068),u=s(90296);t.default=()=>{let e=(0,o.usePathname)(),t=(0,o.useRouter)(),{admin:s}=(0,u.ZP)(),d=(null==s?void 0:s.flags)||[],m=(0,i.k)(e=>e.modules),c=l.filter(e=>e.permissions.some(e=>d.includes(e))).filter(e=>{if(e.module){let t=m.find(t=>t.identifier===e.module);if(!t||!t.enabled)return!1}return!0});return(0,n.jsx)(r.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>t.push(e),items:c,children:e=>(0,n.jsx)(a.r,{title:e.title},e.path)})};let l=[{path:"/admin",title:"Statistics",permissions:["@web/root","@web/logs","@css/root","@web/stats"]},{path:"/admin/modules",title:"Modules",permissions:["@web/root","@css/root"]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers","@web/rcon"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/advertisements",title:"Advertisements (module)",permissions:["@web/root","@css/root","@web/logs"],module:"advertisements"},{path:"/admin/advertisements",title:"Advertisements (module)",permissions:["@web/root","@css/root","@web/logs"],module:"advertisements"},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},68549:function(e,t,s){"use strict";var n=s(54979);s.o(n,"usePathname")&&s.d(t,{usePathname:function(){return n.usePathname}}),s.o(n,"useRouter")&&s.d(t,{useRouter:function(){return n.useRouter}}),s.o(n,"useSearchParams")&&s.d(t,{useSearchParams:function(){return n.useSearchParams}})},75799:function(e,t,s){"use strict";var n=s(82187);t.Z=e=>n.Z.get(e).then(e=>e.data)},90296:function(e,t,s){"use strict";s.d(t,{hY:function(){return a},jc:function(){return u}});var n=s(94711),i=s(27981),o=s(75799),r=s(82187);let a=async()=>{await (0,r.Z)("/api/auth/logout"),await (0,i.JG)("/api/auth"),n.Am.success("Logged out successfully")},u=()=>{let e=window.innerWidth/2-300,t=window.innerHeight/2-400,s=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(t,", left=").concat(e)),o=setInterval(async()=>{s&&s.closed&&(await (0,i.JG)("/api/auth"),n.Am.success("Logged in successfully!"),clearInterval(o))},1e3)};t.ZP=()=>{let{data:e,isLoading:t,error:s}=(0,i.ZP)("/api/auth",o.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:s||!e?null:e.user,admin:s||!e?null:e.admin,masterAdmin:!s&&!!e&&e.masterAdmin,isLoading:t}}},69492:function(e,t,s){"use strict";s.d(t,{k:function(){return u}});var n=s(10401),i=s(89478),o=s(65277),r=s(75799),a=s(27981);let u=(0,o.Ue)(e=>({modules:[],setModules:t=>e(()=>({modules:t,isLoading:!1})),isLoading:!0,setLoading:t=>e(()=>({isLoading:t}))}));t.Z=()=>{let{data:e,isLoading:t}=(0,a.ZP)("/api/modules",r.Z),s=u(e=>e.setModules),o=u(e=>e.setLoading);return(0,i.useEffect)(()=>{e&&(s(e),o(!1))},[e,t,s,o]),(0,n.jsx)(n.Fragment,{})}}},function(e){e.O(0,[3660,4711,9242,9807,2781,7668,4370,3843,1744],function(){return e(e.s=88916)}),_N_E=e.O()}]);