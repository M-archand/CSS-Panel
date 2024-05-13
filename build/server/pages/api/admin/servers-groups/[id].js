"use strict";(()=>{var e={};e.id=3249,e.ids=[3249],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},68782:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>d,default:()=>c,routeModule:()=>l});var a=t(20114),o=t(32128),n=t(57797),i=t(27033),u=e([i]);i=(u.then?(await u)():u)[0];let c=(0,n.l)(i,"default"),d=(0,n.l)(i,"config"),l=new a.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/admin/servers-groups/[id]",pathname:"/api/admin/servers-groups/[id]",bundlePath:"",filename:""},userland:i});s()}catch(e){s(e)}})},27033:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>l});var a=t(48874),o=t(78260),n=t(83366),i=t(14676),u=t(16363),c=t(5568),d=e([a,o,n,i,u,c]);[a,o,n,i,u,c]=d.then?(await d)():d;let l=async(e,r)=>{await o.Z.run(e,r);let{method:t}=e;if(!await (0,i.Z)(e,r,["@web/root","@web/servers","@css/root","@web/rcon"],"OR"))return;let{id:s}=e.query;if(!a.Z)return r.status(500).json({message:"Database not connected"});let d=await a.Z.serversGroups.getById(Number(s));if(!d)return r.status(404).json({message:"Servers group not found"});switch(t){case"PUT":{let{name:t,servers:o}=n.Z.parse(e.body);return await a.Z.serversGroups.update(Number(s),{name:t,servers:o}),await (0,u.x)("css_reladmin"),(0,c.Z)("Servers Group Edit",`Admin ${e.user?.displayName} (${e.user?.id}) edited servers group "${d.name}"`,e.user?.id,"adminActionsDiscordWebhook"),r.status(201).json(d)}case"POST":try{let{message:t}=e.body,o=d.servers,n=await a.Z.servers.getAll();for await(let e of o){let r=n.find(r=>r.id.toString()===e);r&&await (0,u.Z)(r.id,t)}return await (0,u.x)("css_reladmin"),(0,c.Z)("Servers Group Rcon",`Admin ${e.user?.displayName} (${e.user?.id}) send a rcon command to servers group #${s} (command: ${t})`,e.user?.id,"adminActionsDiscordWebhook"),r.status(201).end()}catch(e){return r.status(500).json(e)}case"DELETE":try{return await a.Z.serversGroups.delete(Number(s)),(0,c.Z)("Servers Group Delete",`Admin ${e.user?.displayName} (${e.user?.id}) deleted servers group #${d.name}`,e.user?.id,"adminActionsDiscordWebhook"),await (0,u.x)("css_reladmin"),r.status(200).send("Servers Group deleted")}catch(e){return r.status(500).json({message:"Error while deleting servers groups",error:e})}default:return r.status(405).json({message:"Method not allowed"})}};s()}catch(e){s(e)}})},16363:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>c,x:()=>u});var a=t(43582),o=t(48874),n=e([o]);o=(n.then?(await n)():n)[0];let i=async(e,r)=>{if(!o.Z)throw Error("Database not connected");try{let t=await o.Z.servers.getById(Number(e));if(!t)throw Error("Server not found");let{address:s,rcon:n}=t,[i,u]=s.split(":");if(!n)throw Error("Server has no rcon password");let c=await (0,a.RCON)({ip:i,port:Number(u),password:n,enableWarns:!0,retries:2,timeout:2e3});c.authenticate();let d=await c.exec(r);if(!d)return"No response from server";return d}catch(e){throw warn(`Error while sending rcon command: ${e}`),e}},u=async e=>{if(!o.Z)throw Error("Database not connected");let r=await o.Z.servers.getAll();return await Promise.all(r.map(async r=>{try{let t=await i(r.id,e);return{server:r.hostname,response:t}}catch(e){return{server:r.hostname,response:e}}}))},c=i;s()}catch(e){s(e)}})},5568:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>i});var a=t(48874),o=t(38910),n=e([a,o]);[a,o]=n.then?(await n)():n;let i=async(e,r,t,s="discordWebhook")=>{if(a.Z)try{a.Z.logs.create(e,r,t);let n=await a.Z.settings.getByKey(s,!1);n&&"string"==typeof n&&(0,o.Z)({url:n,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:r,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};s()}catch(e){s(e)}})},78260:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>d});var a=t(9014),o=t(45616),n=t(429),i=t.n(n),u=e([o]);o=(u.then?(await u)():u)[0];let c=(0,o.default)();c.use(i()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),c.use(a.Z.initialize()),c.use(a.Z.session());let d=c;s()}catch(e){s(e)}})},9014:(e,r,t)=>{t.d(r,{Z:()=>i});let s=require("passport");var a=t.n(s);let o=require("passport-steam");a().serializeUser(async(e,r)=>{r(null,e)}),a().deserializeUser(async(e,r)=>{r(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),a().use(new o.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||""},(e,r,t)=>(r.identifier=e,t(null,r))));let i=a()},14676:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>n});var a=t(48874),o=e([a]);a=(o.then?(await o)():o)[0];let n=(e,r,t,s="AND")=>new Promise(async(o,n)=>{if(!a.Z)return r.status(500).json({message:"Database not connected"});if(!e.user)return n(r.status(400).json({success:!1,error:"Protected Route"}));let i=e.user.id,u=await a.Z.admins.getBySteam64(i);if(!u)return n(r.status(401).json({success:!1,error:"Protected Route"}));if(!t)return o(u);let c=null;if("object"==typeof u.flags)c=u.flags;else{let e=await a.Z.adminGroups.getById(u.flags);e&&(c=e.flags)}if(null===c||!("AND"===s?t.every(e=>c.includes(e)):t.some(e=>c.includes(e))))return n(r.status(403).json({success:!1,error:"Protected Route"}));o(u)});s()}catch(e){s(e)}})},83366:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>n});var a=t(9926),o=e([a]);let n=(a=(o.then?(await o)():o)[0]).z.object({name:a.z.string().min(3),servers:a.z.array(a.z.string())});s()}catch(e){s(e)}})}};var r=require("../../../../webpack-api-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[6941],()=>t(68782));module.exports=s})();