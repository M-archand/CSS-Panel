(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8710],{14681:function(e,s,r){Promise.resolve().then(r.bind(r,81737))},92891:function(e,s,r){"use strict";var t=r(10401),n=r(32820),a=r(68549),i=r(89478),l=r(90296);s.default=e=>{let{children:s,flags:r}=e,{admin:o,isLoading:d}=(0,l.ZP)(),c=(0,a.useRouter)();return(0,i.useEffect)(()=>{if(!d&&(!o||r.length>0&&!r.some(e=>{var s;return null===(s=o.flags)||void 0===s?void 0:s.includes(e)})))return c.push("/")},[o,d,c,r]),d?(0,t.jsx)(n.c,{}):o?(0,t.jsx)(t.Fragment,{children:s}):(0,t.jsx)(t.Fragment,{children:"No Access"})}},13627:function(e,s,r){"use strict";r.d(s,{r:function(){return d}});var t=r(10401),n=r(69492),a=r(68549),i=r(76322),l=r(71068),o=r(90296);s.default=()=>{let e=(0,a.usePathname)(),s=(0,a.useRouter)(),{admin:r}=(0,o.ZP)(),c=(null==r?void 0:r.flags)||[],u=(0,n.k)(e=>e.modules),m=d.filter(e=>e.permissions.some(e=>c.includes(e))).filter(e=>{if(e.module){let s=u.find(s=>s.identifier===e.module);if(!s||!s.enabled)return!1}return!0});return(0,t.jsx)(i.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>s.push(e),items:m,children:e=>(0,t.jsx)(l.r,{title:e.title},e.path)})};let d=[{path:"/admin",title:"Statistics",permissions:["@web/root","@web/logs","@css/root","@web/stats"]},{path:"/admin/modules",title:"Modules",permissions:["@web/root","@css/root"]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers","@web/rcon"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/advertisements",title:"Advertisements (module)",permissions:["@web/root","@css/root","@web/logs"],module:"advertisements"},{path:"/admin/advertisements",title:"Advertisements (module)",permissions:["@web/root","@css/root","@web/logs"],module:"advertisements"},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},81737:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return ed}});var t=r(10401),n=r(36857),a=r(3086),i=r(91495),l=r(71558),o=r(68549),d=r(76322),c=r(71068),u=r(82613),m=r(13627),h=r(90296),p=r(92891),v=r(65277);let x=(0,v.Ue)(e=>({open:!1,setOpen:s=>e({open:s,edit:null}),edit:null,setEdit:s=>e({edit:s,open:!0}),delete:null,setDelete:s=>e({delete:s}),rcon:null,setRcon:s=>e({rcon:s})}));var g=r(61915),j=r(13711),f=r(62484),b=r(34054),w=r(45830),y=r(68818),A=r(69809),S=r(74961),C=r(30130),P=r(32820),Z=r(94711),k=r(81454),E=r(89478),z=r(27981),N=r(4599),R=r(75799),O=r(78441),D=r(30054),F=r(73727),I=r(8523),M=r(81220),G=r(56696),L=r(82187);let T=["changelevel","sa_kick","sa_ban"];var U=()=>{let e=x(e=>e.rcon),s=x(e=>e.setRcon),[r,n]=(0,E.useState)([]),[a,i]=(0,E.useState)(""),[l,o]=(0,E.useState)(!1);(0,E.useEffect)(()=>{n([])},[e]);let d=e=>{switch(e.key){case"Tab":e.continuePropagation(),e.preventDefault();let s=T.filter(e=>e.toLowerCase().startsWith(a));s.length>0&&i(s[0]);break;case"ArrowUp":e.continuePropagation(),e.preventDefault();let t=r.filter(e=>"USER"===e.type),n=t[t.length-1];n&&i(n.message);break;case"Enter":c()}},c=async()=>{if(!l){if(!a)return Z.Am.error("Please write a command!");if(a.length<2)return Z.Am.error("Command is too short!");o(!0),n(e=>[...e,{message:a,type:"USER"}]);try{let s=await (0,L.Z)("/api/admin/servers/".concat(e),{method:"POST",data:{message:a}});n(e=>{var r;return[...e,{message:(null==s?void 0:null===(r=s.data)||void 0===r?void 0:r.response)?s.data.response:"Unknown Response",type:"SERVER"}]}),i("")}catch(e){console.error(e),Z.Am.error("Failed to send command, make sure the server is online!")}o(!1)}};return(0,t.jsx)(O.R,{isOpen:!!e,onOpenChange:l?void 0:()=>s(null),size:"2xl",children:(0,t.jsx)(D.A,{children:e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F.k,{className:"flex flex-col gap-1",children:"RCON Panel"}),(0,t.jsxs)(I.I,{className:"py-4",children:[(0,t.jsx)("ul",{className:"space-y-2 max-h-96 overflow-y-auto",children:r.map(e=>(0,t.jsx)("li",{className:"ms-auto flex justify-end gap-x-2 sm:gap-x-4",children:(0,t.jsx)("div",{className:"grow ".concat("USER"===e.type?"text-start":"text-end"," space-y-3"),children:(0,t.jsx)("div",{className:"inline-block ".concat("USER"===e.type?"bg-blue-600":"bg-orange-500"," rounded-2xl p-2 px-4 shadow-sm"),children:(0,t.jsx)("p",{className:"text-sm text-white",children:e.message})})})},e.message))}),(0,t.jsx)(M.d,{label:"Command",variant:"faded",defaultItems:T.map(e=>({label:e,value:e})),startContent:(0,t.jsx)("span",{className:"text-sm text-slate-500",children:"$"}),placeholder:"Write a command or use the autocomplete",description:'Press "Tab" to autocomplete',inputValue:a||"",onInputChange:i,onSelectionChange:e=>i(e),isLoading:l,onKeyDown:d,allowsCustomValue:!0,autoFocus:!0,fullWidth:!0,children:e=>(0,t.jsx)(G.R,{children:e.label},e.value)})]})]})})})},V=()=>{let e=x(e=>e.setEdit),s=x(e=>e.delete),r=x(e=>e.setDelete),n=x(e=>e.setRcon),{admin:a}=(0,h.ZP)(),i=async()=>{if(s){try{await (0,L.Z)("/api/admin/servers/".concat(s.id),{method:"DELETE"}),Z.Am.success("Succesfully deleted server!"),await (0,z.JG)("/api/admin/servers")}catch(s){var e;Z.Am.error(null!==(e=s.response.data)&&void 0!==e?e:"Failed to delete server!")}r(null)}},{data:l,isLoading:o}=(0,z.ZP)("/api/admin/servers",R.Z,{keepPreviousData:!0}),d=o||(null==l?void 0:l.length)===0?"loading":"idle",c=["@web/root","@css/root","@web/servers"].some(e=>{var s;return null==a?void 0:null===(s=a.flags)||void 0===s?void 0:s.includes(e)}),m=["@web/root","@css/root","@web/rcon"].some(e=>{var s;return null==a?void 0:null===(s=a.flags)||void 0===s?void 0:s.includes(e)}),p=(0,E.useCallback)((s,a)=>{switch(a){case"id":return(0,t.jsx)(k.z,{variant:"flat",size:"sm",children:s.id});case"hostname":case"address":return(0,t.jsx)("div",{children:s[a]});case"actions":return(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)(u.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>e(s),isDisabled:!c,children:[(0,t.jsx)(A.Z,{size:16}),"Edit Server"]}),(0,t.jsxs)(u.A,{size:"sm",variant:"flat",color:"danger",onClick:()=>r(s),isDisabled:!c,children:[(0,t.jsx)(S.Z,{size:16}),"Delete Server"]}),(0,t.jsxs)(u.A,{size:"sm",variant:"flat",color:"default",onClick:()=>n(s.id),isDisabled:!m,children:[(0,t.jsx)(C.Z,{size:16}),"RCON"]})]});default:return(0,t.jsx)(t.Fragment,{children:"Error!"})}},[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(g.b,{children:[(0,t.jsxs)(j.J,{children:[(0,t.jsx)(f.j,{children:"ID"},"id"),(0,t.jsx)(f.j,{children:"Hostname"},"hostname"),(0,t.jsx)(f.j,{children:"Address"},"address"),(0,t.jsx)(f.j,{children:"Actions"},"actions")]}),(0,t.jsx)(b.y,{items:null!=l?l:[],loadingContent:(0,t.jsx)(P.c,{}),loadingState:d,children:e=>(0,t.jsx)(w.g,{children:s=>(0,t.jsx)(y.X,{children:p(e,s)})},e.id)})]}),(0,t.jsx)(N.Z,{open:!!s,onAction:i,onCancel:()=>r(null),title:"Delete server",text:(0,t.jsxs)("p",{children:["Are you sure you want to delete: ",(0,t.jsx)("b",{children:null==s?void 0:s.hostname})," server?"]})}),(0,t.jsx)(U,{})]})},J=r(27094),_=r(18364),W=r(2855),H=r(25391),K=r(54529),Y=r(81163);let B=Y.z.object({address:Y.z.string().refine(e=>e.includes(":"),{message:"IP Address must include a port number"}),hostname:Y.z.string().min(3),rcon:Y.z.string().min(0).optional(),hidden:Y.z.boolean().optional()});var X=r(81342),$=()=>{let e=x(e=>e.open),s=x(e=>e.edit),r=x(e=>e.setOpen),[n,a]=(0,E.useState)(!1),i=async()=>{if(!n){a(!0);try{await (0,L.Z)(s?"/api/admin/servers/".concat(s.id):"/api/admin/servers",{method:s?"PUT":"POST",data:l.values}),await (0,z.JG)("/api/admin/servers"),Z.Am.success(s?"Succesfully edited server!":"Succesfully created server!"),r(!1)}catch(e){console.error(e),Z.Am.error("Failed to ".concat(s?"edit":"create"," server!"))}a(!1)}},l=(0,_.c)({initialValues:{address:s?s.address:"",hostname:s?s.hostname:"",rcon:s?s.rcon:"",hidden:!!s&&s.hidden},validate:(0,W.F)(B)});return(0,E.useEffect)(()=>{l.setValues({address:s?s.address:"",hostname:s?s.hostname:"",rcon:s?s.rcon:"",hidden:!!s&&s.hidden})},[s]),(0,t.jsx)(O.R,{isOpen:e,onOpenChange:n?void 0:r,children:(0,t.jsx)(D.A,{children:e=>(0,t.jsxs)("form",{onSubmit:l.onSubmit(i),children:[(0,t.jsx)(F.k,{className:"flex flex-col gap-1",children:s?"Edit server":"Create new server"}),(0,t.jsxs)(I.I,{children:[!s&&(0,t.jsxs)("p",{children:["Before creating the server, note that the"," ",(0,t.jsx)(X.default,{href:"https://github.com/csspanel/plugin",target:"_blank",className:"underline",children:"plugin"})," ","should do that automatically, if it didnt please make sure its installed correctly!"]}),(0,t.jsx)(K.Y,{...l.getInputProps("hostname"),errorMessage:l.errors.hostname,isInvalid:!!l.errors.hostname,label:"Hostname",placeholder:"My cs2 server",variant:"bordered",disabled:n,autoFocus:!0}),(0,t.jsx)(K.Y,{...l.getInputProps("address"),label:"Address",placeholder:"1.1.1.1:25565",type:"text",variant:"bordered",disabled:n,errorMessage:l.errors.address,isInvalid:!!l.errors.address}),(0,t.jsx)(K.Y,{...l.getInputProps("rcon"),errorMessage:l.errors.rcon,isInvalid:!!l.errors.hostname,label:"Rcon Password",placeholder:"123456789",type:"password",variant:"bordered",disabled:n}),(0,t.jsx)(H.K,{...l.getInputProps("hidden"),title:"Hidden",isSelected:l.values.hidden,onValueChange:e=>l.setFieldValue("hidden",e),disabled:n,children:"Hidden?"})]}),(0,t.jsxs)(J.R,{children:[(0,t.jsx)(u.A,{color:"danger",variant:"flat",onPress:e,disabled:n,children:"Cancel"}),(0,t.jsx)(u.A,{color:"primary",type:"submit",isLoading:n,children:s?"Edit server":"Create new server"})]})]})})})};let Q=(0,v.Ue)(e=>({open:!1,setOpen:s=>e({open:s,edit:null}),edit:null,setEdit:s=>e({edit:s,open:!0}),delete:null,setDelete:s=>e({delete:s}),rcon:null,setRcon:s=>e({rcon:s})}));var q=()=>{let e=Q(e=>e.rcon),s=Q(e=>e.setRcon),[r,n]=(0,E.useState)(""),[a,i]=(0,E.useState)(!1),l=e=>{switch(e.key){case"Tab":e.continuePropagation(),e.preventDefault();let s=T.filter(e=>e.toLowerCase().startsWith(r));s.length>0&&n(s[0]);break;case"Enter":o()}},o=async()=>{if(!a){if(!r)return Z.Am.error("Please write a command!");if(r.length<2)return Z.Am.error("Command is too short!");i(!0);try{await (0,L.Z)("/api/admin/servers-groups/".concat(e),{method:"POST",data:{message:r}}),Z.Am.success('Command "'.concat(r,'" sent to servers!')),n("")}catch(e){console.error(e),Z.Am.error("Failed to send command, make sure the server is online!")}i(!1)}};return(0,t.jsx)(O.R,{isOpen:!!e,onOpenChange:a?void 0:()=>s(null),size:"2xl",children:(0,t.jsx)(D.A,{children:e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F.k,{className:"flex flex-col gap-1",children:"Global RCON command"}),(0,t.jsxs)(I.I,{className:"py-4",children:["Send a command to all servers in this group",(0,t.jsx)(M.d,{label:"Command",variant:"faded",defaultItems:T.map(e=>({label:e,value:e})),startContent:(0,t.jsx)("span",{className:"text-sm text-slate-500",children:"$"}),placeholder:"Write a command or use the autocomplete",description:'Press "Tab" to autocomplete',inputValue:r||"",onInputChange:n,onSelectionChange:e=>n(e),isLoading:a,onKeyDown:l,allowsCustomValue:!0,autoFocus:!0,fullWidth:!0,children:e=>(0,t.jsx)(G.R,{children:e.label},e.value)})]})]})})})},ee=r(30456),es=r(62640),er=()=>{let e=Q(e=>e.setEdit),s=Q(e=>e.delete),r=Q(e=>e.setDelete),n=Q(e=>e.setRcon),{data:a}=(0,z.ZP)("/api/admin/servers",R.Z),{admin:i}=(0,h.ZP)(),l=async()=>{if(s){try{await (0,L.Z)("/api/admin/servers-groups/".concat(s.id),{method:"DELETE"}),Z.Am.success("Succesfully deleted server!"),await (0,z.JG)("/api/admin/servers-groups"),await (0,z.JG)("/api/admin/servers")}catch(s){var e;Z.Am.error(null!==(e=s.response.data)&&void 0!==e?e:"Failed to delete servers group!")}r(null)}},{data:o,isLoading:d}=(0,z.ZP)("/api/admin/servers-groups",R.Z,{keepPreviousData:!0}),c=["@web/root","@css/root","@web/servers"].some(e=>{var s;return null==i?void 0:null===(s=i.flags)||void 0===s?void 0:s.includes(e)}),m=["@web/root","@css/root","@web/rcon"].some(e=>{var s;return null==i?void 0:null===(s=i.flags)||void 0===s?void 0:s.includes(e)}),p=(0,E.useCallback)((s,i)=>{switch(i){case"id":return(0,t.jsx)(k.z,{variant:"flat",size:"sm",children:s.id});case"name":return(0,t.jsx)("div",{children:s.name});case"servers":let l=s.servers.map(e=>{let s=null==a?void 0:a.find(s=>s.id.toString()===e);return s?s.hostname:"Unknown server (".concat(e,")")});return(0,t.jsx)(ee.e,{content:l.join("\n"),closeDelay:50,color:"secondary",className:"whitespace-pre-wrap","aria-label":"Servers",children:(0,t.jsxs)(k.z,{variant:"flat",size:"sm",color:"secondary",children:[l.length," Servers"]})});case"created":return(0,t.jsxs)(t.Fragment,{children:[(0,es.Q)(new Date(s.created||""))," ago"]});case"actions":return(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)(u.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>e(s),isDisabled:!c,children:[(0,t.jsx)(A.Z,{size:16}),"Edit Group"]}),(0,t.jsxs)(u.A,{size:"sm",variant:"flat",color:"danger",onClick:()=>r(s),isDisabled:!c,children:[(0,t.jsx)(S.Z,{size:16}),"Delete Group"]}),(0,t.jsxs)(u.A,{size:"sm",variant:"flat",color:"default",onClick:()=>n(s.id),isDisabled:!m,children:[(0,t.jsx)(C.Z,{size:16}),"Send global command"]})]});default:return(0,t.jsx)(t.Fragment,{children:"Error!"})}},[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(g.b,{children:[(0,t.jsxs)(j.J,{children:[(0,t.jsx)(f.j,{children:"Name"},"name"),(0,t.jsx)(f.j,{children:"Servers"},"servers"),(0,t.jsx)(f.j,{children:"Created"},"created"),(0,t.jsx)(f.j,{children:"Actions"},"actions")]}),(0,t.jsx)(b.y,{items:null!=o?o:[],loadingContent:(0,t.jsx)(P.c,{}),loadingState:d||void 0===o?"loading":"idle",children:e=>(0,t.jsx)(w.g,{children:s=>(0,t.jsx)(y.X,{children:p(e,s)})},e.id)})]}),(0,t.jsx)(N.Z,{open:!!s,onAction:l,onCancel:()=>r(null),title:"Delete server",text:(0,t.jsxs)("p",{children:["Are you sure you want to delete: ",(0,t.jsx)("b",{children:null==s?void 0:s.name})," group?"]})}),(0,t.jsx)(q,{})]})},et=r(2068),en=r(53756),ea=r(9201),ei=r(73592);let el=Y.z.object({name:Y.z.string().min(3),servers:Y.z.array(Y.z.string())});var eo=()=>{var e,s;let r=Q(e=>e.open),n=Q(e=>e.edit),a=Q(e=>e.setOpen),{data:i}=(0,z.ZP)("/api/admin/servers",R.Z),[l,o]=(0,E.useState)(!1),d=async()=>{if(!l){o(!0);try{await (0,L.Z)(n?"/api/admin/servers-groups/".concat(n.id):"/api/admin/servers-groups",{method:n?"PUT":"POST",data:c.values}),await (0,z.JG)("/api/admin/servers"),await (0,z.JG)("/api/admin/servers-groups"),Z.Am.success(n?"Succesfully edited servers group!":"Succesfully created servers group!"),a(!1)}catch(e){console.error(e),Z.Am.error("Failed to ".concat(n?"edit":"create"," servers group!"))}o(!1)}},c=(0,_.c)({initialValues:{name:n?n.name:"",servers:n?n.servers:[]},validate:(0,W.F)(el)}),m=c.values.servers?c.values.servers.length>1?"".concat(c.values.servers.length," servers"):null!==(s=null==i?void 0:null===(e=i.find(e=>e.id.toString()===c.values.servers[0]))||void 0===e?void 0:e.hostname)&&void 0!==s?s:"1 server":"All";return(0,E.useEffect)(()=>{c.setValues({name:n?n.name:"",servers:n?n.servers:[]})},[n]),(0,t.jsx)(O.R,{isOpen:r,onOpenChange:l?void 0:a,children:(0,t.jsx)(D.A,{children:e=>{var s;return(0,t.jsxs)("form",{onSubmit:c.onSubmit(d),children:[(0,t.jsx)(F.k,{className:"flex flex-col gap-1",children:n?"Edit servers group":"Create new servers group"}),(0,t.jsxs)(I.I,{children:[(0,t.jsx)(K.Y,{...c.getInputProps("name"),errorMessage:c.errors.name,isInvalid:!!c.errors.name,label:"Name",placeholder:"My new group",variant:"bordered",disabled:l,autoFocus:!0}),(0,t.jsxs)(et.F,{children:[(0,t.jsx)(en.S,{children:(0,t.jsxs)(u.A,{variant:"bordered",children:["Servers: ",m]})}),(0,t.jsx)(ea.a,{"aria-label":"Servers",items:i,closeOnSelect:!1,selectionMode:"multiple",selectedKeys:new Set([...null!==(s=c.values.servers)&&void 0!==s?s:[]]),onSelectionChange:e=>c.setFieldValue("servers",Array.from(e)),disallowEmptySelection:!0,children:e=>(0,t.jsx)(ei.W,{id:e.id.toString(),color:"default",children:e.hostname},e.id)})]})]}),(0,t.jsxs)(J.R,{children:[(0,t.jsx)(u.A,{color:"danger",variant:"flat",onPress:e,disabled:l,children:"Cancel"}),(0,t.jsx)(u.A,{color:"primary",type:"submit",isLoading:l,children:n?"Edit group":"Create new group"})]})]})}})})},ed=()=>{let e=x(e=>e.setOpen),s=Q(e=>e.setOpen),r=(0,o.usePathname)(),v=m.r.find(e=>e.path===r),{admin:g}=(0,h.ZP)(),j=["@web/root","@css/root","@web/servers"].some(e=>{var s;return null==g?void 0:null===(s=g.flags)||void 0===s?void 0:s.includes(e)});return(0,t.jsx)(p.default,{flags:(null==v?void 0:v.permissions)||[],children:(0,t.jsxs)(d.n,{"aria-label":"Options",children:[(0,t.jsx)(c.r,{title:"Manage Servers",children:(0,t.jsxs)(n.w,{children:[(0,t.jsxs)(a.u,{className:"text-2xl font-medium flex flex-row justify-between",children:["Manage Servers",(0,t.jsxs)(u.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>e(!0),disabled:!j,children:[(0,t.jsx)(l.Z,{}),"Create new server"]})]}),(0,t.jsx)(i.G,{children:(0,t.jsx)(V,{})}),(0,t.jsx)($,{})]})},"servers"),(0,t.jsx)(c.r,{title:"Manage Servers Groups",children:(0,t.jsxs)(n.w,{children:[(0,t.jsxs)(a.u,{className:"text-2xl font-medium flex flex-row justify-between",children:["Manage Servers Groups",(0,t.jsxs)(u.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>s(!0),disabled:!j,children:[(0,t.jsx)(l.Z,{}),"Create new group"]})]}),(0,t.jsx)(i.G,{children:(0,t.jsx)(er,{})}),(0,t.jsx)(eo,{})]})},"groups")]})})}},4599:function(e,s,r){"use strict";var t=r(10401),n=r(82613),a=r(78441),i=r(30054),l=r(73727),o=r(8523),d=r(27094);s.Z=e=>{let{open:s,title:r,text:c,onAction:u,onCancel:m}=e;return(0,t.jsx)(a.R,{isOpen:s,onOpenChange:m,children:(0,t.jsx)(i.A,{children:e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.k,{className:"flex flex-col gap-1",children:r}),(0,t.jsx)(o.I,{children:c}),(0,t.jsxs)(d.R,{children:[(0,t.jsx)(n.A,{color:"default",variant:"flat",onPress:e,children:"Cancel"}),(0,t.jsx)(n.A,{color:"primary",type:"submit",onClick:u,children:r})]})]})})})}},75799:function(e,s,r){"use strict";var t=r(82187);s.Z=e=>t.Z.get(e).then(e=>e.data)},90296:function(e,s,r){"use strict";r.d(s,{hY:function(){return l},jc:function(){return o}});var t=r(94711),n=r(27981),a=r(75799),i=r(82187);let l=async()=>{await (0,i.Z)("/api/auth/logout"),await (0,n.JG)("/api/auth"),t.Am.success("Logged out successfully")},o=()=>{let e=window.innerWidth/2-300,s=window.innerHeight/2-400,r=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(s,", left=").concat(e)),a=setInterval(async()=>{r&&r.closed&&(await (0,n.JG)("/api/auth"),t.Am.success("Logged in successfully!"),clearInterval(a))},1e3)};s.ZP=()=>{let{data:e,isLoading:s,error:r}=(0,n.ZP)("/api/auth",a.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:r||!e?null:e.user,admin:r||!e?null:e.admin,masterAdmin:!r&&!!e&&e.masterAdmin,isLoading:s}}},69492:function(e,s,r){"use strict";r.d(s,{k:function(){return o}});var t=r(10401),n=r(89478),a=r(65277),i=r(75799),l=r(27981);let o=(0,a.Ue)(e=>({modules:[],setModules:s=>e(()=>({modules:s,isLoading:!1})),isLoading:!0,setLoading:s=>e(()=>({isLoading:s}))}));s.Z=()=>{let{data:e,isLoading:s}=(0,l.ZP)("/api/modules",i.Z),r=o(e=>e.setModules),a=o(e=>e.setLoading);return(0,n.useEffect)(()=>{e&&(r(e),a(!1))},[e,s,r,a]),(0,t.jsx)(t.Fragment,{})}}},function(e){e.O(0,[3660,9548,4711,2613,9242,9807,2781,4529,1342,1273,7060,4015,7668,1163,3870,7558,8364,997,5899,8485,2925,7570,9493,843,4370,3843,1744],function(){return e(e.s=14681)}),_N_E=e.O()}]);