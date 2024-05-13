"use strict";(()=>{var e={};e.id=7349,e.ids=[7349],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},74594:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{config:()=>u,default:()=>d,routeModule:()=>c});var r=a(20114),i=a(32128),n=a(57797),o=a(44332),l=e([o]);o=(l.then?(await l)():l)[0];let d=(0,n.l)(o,"default"),u=(0,n.l)(o,"config"),c=new r.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/admin/flags/[id]",pathname:"/api/admin/flags/[id]",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},44332:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>u});var r=a(48874),i=a(78260),n=a(10965),o=a(14676),l=a(5568),d=e([r,i,n,o,l]);[r,i,n,o,l]=d.then?(await d)():d;let u=async(e,t)=>{await i.Z.run(e,t);let{method:a}=e;if(!await (0,o.Z)(e,t,["@web/root","@web/admingroups","@css/root"],"OR"))return;let{id:s}=e.query;if(!r.Z)return t.status(500).json({message:"Database not connected"});if(!await r.Z.adminFlags.getByFlag(`@${s.replace("$","/")}`))return t.status(404).json({message:"Admin flag not found"});switch(a){case"PUT":try{let{flag:a,identifier:i}=n.Z.parse(e.body),o=await r.Z.adminFlags.update(`@${s.replace("$","/")}`,{flag:a.replaceAll(" ","-").toLowerCase(),identifier:i});return(0,l.Z)("Admin Flag Edit",`Admin ${e.user?.displayName} (${e.user?.id}) created admin flag: @${a}`,e.user?.id,"adminActionsDiscordWebhook"),t.status(201).json(o)}catch(e){return error("Error while updating admin flag",e),t.status(500).json({message:"Error while updating admin flag",err:e})}case"DELETE":try{let a=await r.Z.adminFlags.getByFlag(`@${s.replace("$","/")}`);if(!a)return t.status(404).json({message:"Admin flag not found"});return await r.Z.adminFlags.delete(`@${s.replace("$","/")}`),(0,l.Z)("Admin Flag Delete",`Admin ${e.user?.displayName} (${e.user?.id}) deleted admin flag: @${a.flag}`,e.user?.id,"adminActionsDiscordWebhook"),t.status(201).send("Admin flag deleted")}catch(e){return t.status(500).json({message:"Error while deleting admin flag",error:e})}default:return t.status(405).json({message:"Method not allowed"})}};s()}catch(e){s(e)}})},5568:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>o});var r=a(48874),i=a(38910),n=e([r,i]);[r,i]=n.then?(await n)():n;let o=async(e,t,a,s="discordWebhook")=>{if(r.Z)try{r.Z.logs.create(e,t,a);let n=await r.Z.settings.getByKey(s,!1);n&&"string"==typeof n&&(0,i.Z)({url:n,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:t,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};s()}catch(e){s(e)}})},78260:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>u});var r=a(9014),i=a(45616),n=a(429),o=a.n(n),l=e([i]);i=(l.then?(await l)():l)[0];let d=(0,i.default)();d.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),d.use(r.Z.initialize()),d.use(r.Z.session());let u=d;s()}catch(e){s(e)}})},9014:(e,t,a)=>{a.d(t,{Z:()=>o});let s=require("passport");var r=a.n(s);let i=require("passport-steam");r().serializeUser(async(e,t)=>{t(null,e)}),r().deserializeUser(async(e,t)=>{t(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),r().use(new i.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,a)=>(t.identifier=e,a(null,t))));let o=r()},14676:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>n});var r=a(48874),i=e([r]);r=(i.then?(await i)():i)[0];let n=(e,t,a,s="AND")=>new Promise(async(i,n)=>{if(!r.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return n(t.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,l=await r.Z.admins.getBySteam64(o);if(!l)return n(t.status(401).json({success:!1,error:"Protected Route"}));if(!a)return i(l);let d=null;if("object"==typeof l.flags)d=l.flags;else{let e=await r.Z.adminGroups.getById(l.flags);e&&(d=e.flags)}if(null===d||!("AND"===s?a.every(e=>d.includes(e)):a.some(e=>d.includes(e))))return n(t.status(403).json({success:!1,error:"Protected Route"}));i(l)});s()}catch(e){s(e)}})},10965:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>n});var r=a(9926),i=e([r]);let n=(r=(i.then?(await i)():i)[0]).z.object({flag:r.z.string().startsWith("@","The flag must start with @").includes("/",{message:"The flag must contain a /"}).min(3),identifier:r.z.string()});s()}catch(e){s(e)}})}};var t=require("../../../../webpack-api-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[6941],()=>a(74594));module.exports=s})();