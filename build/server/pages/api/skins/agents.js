"use strict";(()=>{var e={};e.id=8349,e.ids=[8349],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},2373:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>l,default:()=>u,routeModule:()=>p});var a=s(44614),n=s(49531),o=s(55621),i=s(96302),c=e([i]);i=(c.then?(await c)():c)[0];let u=(0,o.l)(i,"default"),l=(0,o.l)(i,"config"),p=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/skins/agents",pathname:"/api/skins/agents",bundlePath:"",filename:""},userland:i});r()}catch(e){r(e)}})},96302:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>l});var a=s(22567),n=s(18391),o=s(88022),i=s(73907),c=s(10474),u=e([a,o,i,c]);[a,o,i,c]=u.then?(await u)():u;let l=async(e,t)=>{if(!i.Z)return t.status(500).json({message:"Database not connected"});if(!(0,n.e)("skins"))return t.status(404).json({message:"Module not found"});await c.Z.run(e,t);let{method:s}=e,r=await (0,o.Z)(e,t);if(r)switch(s){case"GET":try{let e=r.id,s=await i.Z.skins.agents.getBySteamId(e);return t.status(200).json(s)}catch(e){return console.error(e),t.status(500).json({message:"Internal server error"})}case"POST":try{let s=r.id,{agent:n}=e.body;if(!n)return t.status(400).json({message:"Missing parameters"});return await i.Z.skins.agents.setTeamAgent(s,n),(0,a.x)(`css_fexec ${r.id} css_wp`),t.status(200).json({message:"Agents set"})}catch(e){return console.error(e),t.status(500).json({message:"Internal server error"})}}};r()}catch(e){r(e)}})},22567:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>u,x:()=>c});var a=s(43582),n=s(73907),o=e([n]);n=(o.then?(await o)():o)[0];let i=async(e,t)=>{if(!n.Z)throw Error("Database not connected");try{let s=await n.Z.servers.getById(Number(e));if(!s)throw Error("Server not found");let{address:r,rcon:o}=s,[i,c]=r.split(":");if(!o)throw Error("Server has no rcon password");let u=await (0,a.RCON)({ip:i,port:Number(c),password:o,enableWarns:!0,retries:2,timeout:2e3});u.authenticate();let l=await u.exec(t);if(!l)return"No response from server";return l}catch(e){throw warn(`Error while sending rcon command: ${e}`),e}},c=async e=>{if(!n.Z)throw Error("Database not connected");let t=await n.Z.servers.getAll();return await Promise.all(t.map(async t=>{try{let s=await i(t.id,e);return{server:t.hostname,response:s}}catch(e){return{server:t.hostname,response:e}}}))},u=i;r()}catch(e){r(e)}})},18391:(e,t,s)=>{s.d(t,{e:()=>a,g:()=>r});let r=e=>!!process.env.MODULES&&process.env.MODULES.split(",").includes(e),a=e=>r(e)&&!!process.env.MODULES_ENABLED&&process.env.MODULES_ENABLED.split(",").includes(e)},10474:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>l});var a=s(60276),n=s(45616),o=s(429),i=s.n(o),c=e([n]);n=(c.then?(await c)():c)[0];let u=(0,n.default)();u.use(i()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(a.Z.initialize()),u.use(a.Z.session());let l=u;r()}catch(e){r(e)}})},60276:(e,t,s)=>{s.d(t,{Z:()=>i});let r=require("passport");var a=s.n(r);let n=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let o=process.env.DOMAIN||"";o.startsWith("http")||(o=`https://${o}`),a().use(new n.Strategy({returnURL:`${o}/api/auth/return`,realm:`${o}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,s)=>(t.identifier=e,s(null,t))));let i=a()},88022:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>o});var a=s(73907),n=e([a]);a=(n.then?(await n)():n)[0];let o=(e,t)=>new Promise(async(s,r)=>a.Z?e.user?void s(e.user):r(t.status(400).json({success:!1,error:"Protected Route"})):t.status(500).json({message:"Database not connected"}));r()}catch(e){r(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[8747],()=>s(2373));module.exports=r})();