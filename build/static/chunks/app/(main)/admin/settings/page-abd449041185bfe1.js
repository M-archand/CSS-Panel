(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8793],{23222:function(e,a,s){Promise.resolve().then(s.bind(s,34906))},53410:function(e,a,s){"use strict";var l=s(94773),t=s(73607),n=s(42778),i=s(44208),r=s(46736);a.default=e=>{let{children:a,flags:s}=e,{admin:o,isLoading:d}=(0,r.ZP)(),c=(0,n.useRouter)();return(0,i.useEffect)(()=>{if(!d&&(!o||s.length>0&&!s.some(e=>{var a;return null===(a=o.flags)||void 0===a?void 0:a.includes(e)})))return c.push("/")},[o,d,c,s]),d?(0,l.jsx)(t.c,{}):o?(0,l.jsx)(l.Fragment,{children:a}):(0,l.jsx)(l.Fragment,{children:"No Access"})}},27911:function(e,a,s){"use strict";s.d(a,{r:function(){return o}});var l=s(94773),t=s(42778),n=s(94408),i=s(63733),r=s(46736);a.default=()=>{let e=(0,t.usePathname)(),a=(0,t.useRouter)(),{admin:s}=(0,r.ZP)(),d=(null==s?void 0:s.flags)||[],c=o.filter(e=>e.permissions.some(e=>d.includes(e)));return(0,l.jsx)(n.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>a.push(e),items:c,children:e=>(0,l.jsx)(i.r,{title:e.title},e.path)})};let o=[{path:"/admin",title:"Statistics",permissions:["@web/root","@web/logs","@css/root","@web/stats"]},{path:"/admin/modules",title:"Modules",permissions:["@web/root","@css/root"]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers","@web/rcon"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},34906:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return G}});var l=s(94773),t=s(81627),n=s(20531),i=s(8286),r=s(42778),o=s(73607),d=s(94408),c=s(63733),u=s(44208),m=s(39596),g=s(96509),h=s(27911),p=s(34766),b=s(53410),x=s(33070);let f=(0,s(45478).Ue)(e=>({settings:(0,x.Rb)(),setSettings:a=>e({settings:a}),isFormLoading:!1,setIsFormLoading:a=>e({isFormLoading:a})}));var v=s(17054),j=s(83455),C=s(24909),w=e=>{try{return new URL(e),!0}catch(e){return!1}},y=s(90885),E=s(97228),S=s(45634),D=s(48695),A=e=>{let{label:a,description:s,value:t,onChange:n,disabled:i}=e;return(0,l.jsx)(S.i,{classNames:{base:(0,D.cn)("inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center","justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent","data-[selected=true]:border-primary border-default-300"),wrapper:"p-0 h-4 overflow-visible",thumb:(0,D.cn)("w-6 h-6 border-2 shadow-lg","group-data-[hover=true]:border-primary","group-data-[selected=true]:ml-6","group-data-[pressed=true]:w-7","group-data-[selected]:group-data-[pressed]:ml-4")},isSelected:t,onValueChange:n,disabled:i,children:(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("p",{className:"text-medium",children:a}),s&&(0,l.jsx)("p",{className:"text-tiny text-default-400",children:s})]})})},N=s(83305),k=s(58840),L=s(40519);let F=[{name:"English",value:"en"}];var z=s(20937),P=e=>{let{image:a,html:s,css:t,height:n}=e;return"0"===n?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)("div",{className:"overflow-hidden rounded-2xl bg-center bg-cover relative",style:{backgroundImage:"url(".concat(a,")"),height:"".concat(n,"px")},children:[(0,l.jsx)("div",{className:"h-full w-full flex flex-col justify-center items-center",dangerouslySetInnerHTML:{__html:s}}),(0,l.jsx)("style",{children:t})]})},W=s(15105),H=s(23151),R=s(39720),M=s(35504),T=s(44098),B=s(85330),I=s(74241);let Z=e=>{let{title:a,link:s,type:t,placement:n,isLoading:i,setPage:r,handleRemove:o,editHtml:d,target:c}=e;return(0,l.jsxs)("div",{className:"flex flex-row gap-4 items-center",children:[(0,l.jsx)(y.Y,{label:"Title",value:a,onChange:e=>r({title:e.target.value}),disabled:i,className:"max-w-xl"}),(0,l.jsxs)(k.g,{label:"Placement",variant:"bordered",selectedKeys:[n],onSelectionChange:e=>r({placement:Array.from(e)[0]}),className:"max-w-sm",disabled:i,disallowEmptySelection:!0,children:[(0,l.jsx)(L.R,{value:"HEADER",children:"Header (top bar)"},"HEADER"),(0,l.jsx)(L.R,{value:"SIDEBAR",children:"Sidebar"},"SIDEBAR")]}),(0,l.jsxs)(k.g,{label:"Type",variant:"bordered",selectedKeys:[t],onSelectionChange:e=>r({type:Array.from(e)[0]}),className:"max-w-sm",disabled:i,disallowEmptySelection:!0,children:[(0,l.jsx)(L.R,{value:"LINK",children:"External Link"},"LINK"),(0,l.jsx)(L.R,{value:"CUSTOM_PAGE",children:"Custom Page"},"CUSTOM_PAGE")]}),"LINK"===t&&(0,l.jsx)(y.Y,{label:"Link",value:s,placeholder:"Must start with http:// or https://",onChange:e=>r({link:e.target.value}),disabled:i}),"LINK"===t&&(0,l.jsxs)(k.g,{label:"Target",variant:"bordered",selectedKeys:[c],onSelectionChange:e=>r({target:Array.from(e)[0]}),className:"max-w-36",disabled:i,disallowEmptySelection:!0,children:[(0,l.jsx)(L.R,{value:"_blank",children:"New Tab"},"_blank"),(0,l.jsx)(L.R,{value:"_self",children:"Same Tab"},"_self")]}),"CUSTOM_PAGE"===t&&(0,l.jsx)(m.A,{variant:"flat",color:"secondary",onClick:d,children:"Edit HTML"}),(0,l.jsx)(m.A,{onClick:o,disabled:i,variant:"flat",color:"danger",isIconOnly:!0,children:(0,l.jsx)(B.Z,{})})]})};var _=s(25295),U=s(57264);let O=e=>{let{value:a,onChange:s,disabled:t,label:n}=e;return(0,l.jsx)(y.Y,{label:n,value:a,onValueChange:s,disabled:t,description:(null==a?void 0:a.includes("/api/webhooks/"))?(0,l.jsxs)("div",{className:"flex items-center gap-1 text-green-500",children:[(0,l.jsx)(_.Z,{size:14}),"Valid Discord Webhook URL"]}):a.length>0?(0,l.jsxs)("div",{className:"flex items-center gap-1 text-red-500",children:[(0,l.jsx)(U.Z,{size:14}),"Invalid Discord Webhook URL"]}):"Leave empty to disable Discord Webhook integration for this type"})},V=[{label:"SEO",content:()=>{let e=f(e=>e.settings),a=f(e=>e.setSettings),s=f(e=>e.isFormLoading);return(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)(y.Y,{label:"Website Title",value:e.title,onValueChange:s=>a({...e,title:s}),disabled:s}),(0,l.jsxs)("div",{className:"flex flex-row gap-8 items-center",children:[(0,l.jsx)(y.Y,{label:"Favicon URL",value:e.favicon,onValueChange:s=>a({...e,favicon:s}),disabled:s}),e.favicon&&w(e.favicon)&&(0,l.jsx)("img",{src:e.favicon,alt:"Favicon",className:"w-12"})]}),(0,l.jsx)(E.Y,{label:"Website Description",value:e.description,onValueChange:s=>a({...e,description:s}),disabled:s}),(0,l.jsx)(E.Y,{label:"Website Keywords",value:e.keywords,onValueChange:s=>a({...e,keywords:s}),description:"Separate each keyword with a comma",disabled:s}),(0,l.jsxs)("div",{className:"flex flex-row gap-8 items-center",children:[(0,l.jsxs)("div",{className:"flex flex-row gap-4 items-center w-full",children:[(0,l.jsx)(y.Y,{label:"Logo URL",value:e.logo,onValueChange:s=>a({...e,logo:s}),disabled:s}),(0,l.jsx)(y.Y,{label:"Logo Max Height (px)",value:e.logoHeight,onValueChange:s=>a({...e,logoHeight:s}),disabled:s,type:"number",className:"w-48"})]}),e.logo&&w(e.logo)&&(0,l.jsx)("img",{src:e.logo,alt:"Logo",className:"h-12"})]})]})}},{label:"Custom Pages",content:()=>{let e=f(e=>e.settings),a=f(e=>e.setSettings),s=f(e=>e.isFormLoading),[t,n]=(0,u.useState)(null),i=e.customPages.find(e=>e.id===t);return(0,l.jsxs)("div",{className:"flex flex-col gap-6 mb-10",children:[(0,l.jsx)("p",{children:"Here you can define custom sidebar and top bar pages"}),e.customPages.map(t=>(0,l.jsx)(Z,{isLoading:s,setPage:s=>a({...e,customPages:e.customPages.map(e=>e.id===t.id?{...e,...s}:e)}),handleRemove:()=>a({...e,customPages:e.customPages.filter(e=>e.id!==t.id)}),editHtml:()=>n(t.id),...t},t.id)),(0,l.jsx)(m.A,{onClick:()=>a({...e,customPages:[...e.customPages,x.Hf]}),disabled:s,variant:"flat",color:"primary",children:"Create new page"}),(0,l.jsx)(W.R,{isOpen:!!t,onOpenChange:()=>n(null),size:"5xl",scrollBehavior:"inside",hideCloseButton:!0,children:(0,l.jsx)(H.A,{children:n=>{var r,o;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(R.k,{children:"Edit Page HTML"}),(0,l.jsx)(M.I,{children:(0,l.jsxs)(d.n,{"aria-label":"Options",children:[(0,l.jsxs)(c.r,{title:"Editor",children:[(0,l.jsx)(I.K,{checked:null===(r=e.customPages.find(e=>e.id===t))||void 0===r?void 0:r.includeBanner,onValueChange:s=>a({...e,customPages:e.customPages.map(e=>e.id===t?{...e,includeBanner:s}:e)}),isSelected:(null===(o=e.customPages.find(e=>e.id===t))||void 0===o?void 0:o.includeBanner)||!1,className:"mb-4",children:"Include banner"}),(0,l.jsx)(z.Z,{value:(null==i?void 0:i.contentHtml)||"",setValue:s=>a({...e,customPages:e.customPages.map(e=>e.id===t?{...e,contentHtml:s}:e)}),disabled:s,example:'<h1 style="font-size: 50px">Welcome to: '.concat(null==i?void 0:i.title,"</h1>"),lang:"html"})]},"editor"),(0,l.jsx)(c.r,{title:"Preview",children:(0,l.jsxs)("div",{className:"p-4 border rounded-md",children:[(null==i?void 0:i.includeBanner)&&(0,l.jsx)(P,{css:e.headerCodeCSS,html:e.headerCodeHTML,image:e.headerImage,height:e.headerHeight}),(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:(null==i?void 0:i.contentHtml)||""}})]})},"preview")]})}),(0,l.jsx)(T.R,{children:(0,l.jsx)(m.A,{color:"primary",type:"submit",onClick:n,children:"Save"})})]})}})})]})}},{label:"Design",content:()=>{let e=f(e=>e.settings),a=f(e=>e.setSettings),s=f(e=>e.isFormLoading);return(0,l.jsxs)("div",{className:"grid lg:grid-cols-4 gap-6",children:[(0,l.jsx)(A,{label:"Servers Grid",description:"Display the servers in a grid or list view (table) in the home page.",value:e.serversGrid,onChange:s=>a({...e,serversGrid:s}),disabled:s}),(0,l.jsx)(A,{label:"Show Admin Name",description:"Display the banned/muted admin name in the banned/muted list for non-admins (public) or only for admins.",value:e.showAdminName,onChange:s=>a({...e,showAdminName:s}),disabled:s}),(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)(k.g,{label:"Panel language",variant:"bordered",placeholder:"Select a language",selectedKeys:[e.language],className:"max-w-xs",onChange:s=>a({...e,language:s.target.value}),disabled:s,disallowEmptySelection:!0,children:F.map(e=>(0,l.jsx)(L.R,{value:e.value,children:e.name},e.value))}),(0,l.jsx)(k.g,{label:"Panel theme",variant:"bordered",placeholder:"Select a theme",selectedKeys:[e.theme],className:"max-w-xs",onChange:s=>a({...e,theme:s.target.value}),disabled:s,disallowEmptySelection:!0,children:N.M.map(e=>(0,l.jsx)(L.R,{value:e.value,children:e.name},e.value))})]})]})}},{label:"Header Design",content:()=>{let e=f(e=>e.settings),a=f(e=>e.setSettings),s=f(e=>e.isFormLoading);return(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsxs)("div",{className:"flex items-center gap-4 w-full",children:[(0,l.jsx)(y.Y,{label:"Header Image URL",value:e.headerImage,onValueChange:s=>a({...e,headerImage:s}),disabled:s,description:"This image will be displayed as the header background"}),(0,l.jsx)(y.Y,{label:"Header Height",value:e.headerHeight,onValueChange:s=>a({...e,headerHeight:s}),disabled:s,className:"w-48",description:'Set "0" to disable the header'})]}),(0,l.jsxs)("div",{className:"grid lg:grid-cols-2 gap-6",children:[(0,l.jsx)(z.Z,{label:"Header HTML",value:e.headerCodeHTML,setValue:s=>a({...e,headerCodeHTML:s}),disabled:s,example:'<h1 class="banner-title">Welcome!</h1>',lang:"html"}),(0,l.jsx)(z.Z,{label:"Header CSS",value:e.headerCodeCSS,setValue:s=>a({...e,headerCodeCSS:s}),disabled:s,example:".banner-title {\n	color: #000000;\n	font-size: 32px;\n}",lang:"css"})]}),(0,l.jsx)("h2",{children:"Preview"}),(0,l.jsx)(P,{image:e.headerImage,html:e.headerCodeHTML,css:e.headerCodeCSS,height:e.headerHeight})]})}},{label:"Webhooks",content:()=>{let e=f(e=>e.settings),a=f(e=>e.setSettings),s=f(e=>e.isFormLoading);return(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg font-medium",children:"Customize Webhooks"}),(0,l.jsx)("p",{className:"text-xs text-foreground-500",children:"Customize the Discord Webhooks profile for your panel"})]}),(0,l.jsx)(y.Y,{label:"Webhook Name",value:e.discordWebhookName,onValueChange:s=>a({...e,discordWebhookName:s}),disabled:s}),(0,l.jsx)(y.Y,{label:"Webhook Avatar URL",value:e.discordWebhookAvatar,onValueChange:s=>a({...e,discordWebhookAvatar:s}),disabled:s}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg font-medium",children:"Webhook Types"}),(0,l.jsx)("p",{className:"text-xs text-foreground-500",children:"Configure the Discord Webhooks that will receive messages from the panel"})]}),(0,l.jsx)(O,{label:"Panel Logs and warnings",value:e.discordWebhook,onChange:s=>a({...e,discordWebhook:s}),disabled:s}),(0,l.jsx)(O,{label:"Debug messages",value:e.debugDiscordWebhook,onChange:s=>a({...e,debugDiscordWebhook:s}),disabled:s}),(0,l.jsx)(O,{label:"Errors and exceptions",value:e.errorsDiscordWebhook,onChange:s=>a({...e,errorsDiscordWebhook:s}),disabled:s}),(0,l.jsx)(O,{label:"Commands commands (e.g. bans, mutes, etc) executed through the panel",value:e.adminCommandsDiscordWebhook,onChange:s=>a({...e,adminCommandsDiscordWebhook:s}),disabled:s}),(0,l.jsx)(O,{label:"Commands actions (e.g. create admins, edit servers, etc) executed by admins through the panel",value:e.adminActionsDiscordWebhook,onChange:s=>a({...e,adminActionsDiscordWebhook:s}),disabled:s})]})}},{label:"Advanced Settings",content:()=>{let e=f(e=>e.settings),a=f(e=>e.setSettings),s=f(e=>e.isFormLoading);return(0,l.jsxs)("div",{className:"grid lg:grid-cols-4 gap-6",children:[(0,l.jsx)(A,{label:"Enable early access features",description:"Get access to new features before they are released.",value:e.earlyAccessFeatures,onChange:s=>a({...e,earlyAccessFeatures:s}),disabled:s}),(0,l.jsx)(A,{label:"Debug Mode",description:"Get logs and errors in the console for debugging.",value:e.debugMode,onChange:s=>a({...e,debugMode:s}),disabled:s})]})}}];var G=()=>{let{data:e,isLoading:a}=(0,v.ZP)("/api/admin/settings",j.Z),[s,x]=(0,p.v1)("tab"),w=f(e=>e.settings),y=f(e=>e.setSettings);(0,u.useEffect)(()=>{e&&y(e)},[a,e,y]);let[E,S]=(0,u.useState)(!1),D=async()=>{if(e&&!a){S(!0);try{await C.Z.post("/api/admin/settings",w),await (0,v.JG)("/api/settings"),(0,g.Am)("note that you may need to refresh the page to see the changes.",{duration:2e3,icon:"\uD83D\uDD04"}),g.Am.success("Settings saved!")}catch(e){g.Am.error("Error saving settings!")}S(!1)}},A=V.find(e=>e.label.toLowerCase()===s)||V[0],N=A.content,k=(0,r.usePathname)(),L=h.r.find(e=>e.path===k);return(0,l.jsxs)(b.default,{flags:(null==L?void 0:L.permissions)||[],children:[(0,l.jsx)(d.n,{"aria-label":"Settings tabs",items:V,selectedKey:s,onSelectionChange:x,children:e=>(0,l.jsx)(c.r,{title:e.label},e.label.toLowerCase())}),(0,l.jsxs)(t.w,{children:[(0,l.jsx)(n.u,{className:"text-2xl font-medium",children:A.label}),(0,l.jsxs)(i.G,{children:[E?(0,l.jsx)(o.c,{}):(0,l.jsx)(N,{}),(0,l.jsxs)("div",{className:"grid lg:grid-cols-2 gap-4",children:[(0,l.jsx)(m.A,{className:"mt-4",color:"danger",onClick:()=>e?y(e):void 0,isLoading:E||a,fullWidth:!0,children:"Reset Settings"}),(0,l.jsx)(m.A,{className:"mt-4",color:"primary",onClick:D,isLoading:E||a,fullWidth:!0,children:a||E?"Please wait...":"Save Changes"})]})]})]})]})}},20937:function(e,a,s){"use strict";var l=s(94773),t=s(39596),n=s(31033),i=s(96509);a.Z=e=>{let{value:a,setValue:s,lang:r,example:o,disabled:d,label:c,height:u}=e;return(0,l.jsxs)("div",{className:"relative w-full h-full flex flex-col gap-2",children:[c&&(0,l.jsx)("h3",{className:"text-xl font-medium mb-2",children:c}),(0,l.jsx)(n.ZP,{height:u||400,defaultLanguage:r,className:"!rounded-md overflow-hidden",theme:"vs-dark",value:a,onChange:!d&&s||(()=>{}),options:{inlineSuggest:{enabled:!0},fontSize:16,formatOnType:!0,autoClosingBrackets:"always",autoSurround:"languageDefined",automaticLayout:!0,autoIndent:"full",autoClosingQuotes:"always"}}),o&&(0,l.jsx)(t.A,{onClick:()=>{if(o){if(a&&""!==a.trim())return i.ZP.error("Editor must be empty to paste example");s(o)}},disabled:d,variant:"flat",color:"primary",children:"Paste Example"})]})}},83305:function(e,a,s){"use strict";s.d(a,{M:function(){return i},Z:function(){return r}});let l={primary:{50:"#e6f1fe",100:"#cce3fd",200:"#99c7fb",300:"#66aaf9",400:"#338ef7",500:"#006FEE",600:"#005bc4",700:"#004493",800:"#002e62",900:"#001731",DEFAULT:"#338ef7"},secondary:{50:"#F2EAFA",100:"#E4D4F4",200:"#C9A9E9",300:"#AE7EDE",400:"#9353D3",500:"#7828C8",600:"#6020A0",700:"#481878",800:"#301050",900:"#180828",DEFAULT:"#7828C8"}},t={primary:{50:"#FEF3D3",100:"#FEE3A7",200:"#FED07B",300:"#FED07B",400:"#FDBC5A",500:"#FC9D24",600:"#D87C1A",700:"#B55F12",800:"#92440B",900:"#783206",DEFAULT:"#FC9D24"},secondary:{50:"#FDF3D7",100:"#FDF3D7",200:"#FCE3B0",300:"#F6CD87",400:"#EEB667",500:"#E49438",600:"#C47428",700:"#A4581C",800:"#843E11",900:"#6D2D0A",DEFAULT:"#E49438"},focus:"#FC9D24"},n={primary:{50:"#127121",100:"#1F8927",200:"#31AA31",300:"#51CB47",400:"#77ED62",500:"#77ED62",600:"#A1F488",700:"#BCF9A1",800:"#D8FDC1",900:"#EEFEE0",DEFAULT:"#77ED62"},secondary:{50:"#05331B",100:"#05331B",200:"#14663C",300:"#14663C",400:"#2E9962",500:"#2E9962",600:"#52CC8D",700:"#52CC8D",800:"#80FFBD",900:"#80FFBD",DEFAULT:"#2E9962"},focus:"#40992E"},i=[{name:"Blue Purple",value:"bluePurple"},{name:"Orange",value:"orange"},{name:"Green",value:"green"}];var r={"light-bluePurple-theme":{extend:"light",colors:l,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}},"dark-bluePurple-theme":{extend:"dark",colors:l,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}},"light-orange-theme":{extend:"light",colors:t},"dark-orange-theme":{extend:"dark",colors:t},"light-green-theme":{extend:"light",colors:n,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}},"dark-green-theme":{extend:"dark",colors:n,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}}}},83455:function(e,a,s){"use strict";var l=s(24909);a.Z=e=>l.Z.get(e).then(e=>e.data)},46736:function(e,a,s){"use strict";s.d(a,{hY:function(){return r},jc:function(){return o}});var l=s(96509),t=s(17054),n=s(83455),i=s(24909);let r=async()=>{await (0,i.Z)("/api/auth/logout"),await (0,t.JG)("/api/auth"),l.Am.success("Logged out successfully")},o=()=>{let e=window.innerWidth/2-300,a=window.innerHeight/2-400,s=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(a,", left=").concat(e)),n=setInterval(async()=>{s&&s.closed&&(await (0,t.JG)("/api/auth"),l.Am.success("Logged in successfully!"),clearInterval(n))},1e3)};a.ZP=()=>{let{data:e,isLoading:a,error:s}=(0,t.ZP)("/api/auth",n.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:s||!e?null:e.user,admin:s||!e?null:e.admin,masterAdmin:!s&&!!e&&e.masterAdmin,isLoading:a}}},33070:function(e,a,s){"use strict";s.d(a,{Hf:function(){return i},Rb:function(){return o}});var l=s(83305),t=s(68668);let n=t.z.object({id:t.z.string().optional().default(""),title:t.z.string().default(""),link:t.z.string().default(""),target:t.z.enum(["_blank","_self"]).default("_self"),type:t.z.enum(["LINK","CUSTOM_PAGE"]).default("LINK"),placement:t.z.enum(["HEADER","SIDEBAR"]).default("SIDEBAR"),contentHtml:t.z.string().default("<h1>Title</h1>"),includeBanner:t.z.boolean().default(!0)}),i=n.parse({id:Math.random().toString(36).substring(7)}),r=t.z.object({title:t.z.string().optional().default("CSS-Panel"),description:t.z.string().optional().default(""),keywords:t.z.string().optional().default("gaming, cs2"),favicon:t.z.string().optional().default(""),theme:t.z.string().default(l.M[0].value),logo:t.z.string().optional().default(""),logoHeight:t.z.string().optional().default("40"),debugMode:t.z.boolean().optional().default(!1),headerImage:t.z.string().optional().default("https://prosettings.net/wp-content/uploads/inferno-in-cs2-2.jpg"),headerCodeHTML:t.z.string().optional().default(""),headerCodeCSS:t.z.string().optional().default(""),headerHeight:t.z.string().optional().default("288"),earlyAccessFeatures:t.z.boolean().optional().default(!1),serversGrid:t.z.boolean().optional().default(!0),showAdminName:t.z.boolean().optional().default(!1),language:t.z.string().optional().default("en"),discordWebhook:t.z.string().optional().default(""),discordWebhookName:t.z.string().optional().default("CSS-Panel"),discordWebhookAvatar:t.z.string().optional().default("https://cdn.discordapp.com/icons/1202020941459357776/65f3acf53dd2d06a8e08e8f82276f7ef.webp"),debugDiscordWebhook:t.z.string().optional().default(""),errorsDiscordWebhook:t.z.string().optional().default(""),adminActionsDiscordWebhook:t.z.string().optional().default(""),adminCommandsDiscordWebhook:t.z.string().optional().default(""),customPages:t.z.array(n).optional().default([]),modules:t.z.array(t.z.object({identifier:t.z.string(),enabled:t.z.boolean(),settings:t.z.record(t.z.any()).optional().default({})})).optional().default([])});r.partial();let o=()=>r.parse({})}},function(e){e.O(0,[2349,4166,7923,6509,6634,885,9596,3080,9178,3746,8668,1384,9869,8213,1303,8840,1248,3558,441,2752,5147,803,1744],function(){return e(e.s=23222)}),_N_E=e.O()}]);