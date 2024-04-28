"use strict";(()=>{var e={};e.id=1313,e.ids=[1313],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},22658:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{config:()=>u,default:()=>c,routeModule:()=>d});var r=s(44614),n=s(49531),i=s(55621),o=s(15227),l=e([o]);o=(l.then?(await l)():l)[0];let c=(0,i.l)(o,"default"),u=(0,i.l)(o,"config"),d=new r.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/skins/collections",pathname:"/api/skins/collections",bundlePath:"",filename:""},userland:o});a()}catch(e){a(e)}})},15227:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{default:()=>m});var r=s(18391),n=s(88022),i=s(68213),o=s(96905),l=s(48350),c=s(73907),u=s(10474),d=e([n,i,o,l,c,u]);[n,i,o,l,c,u]=d.then?(await d)():d;let m=async(e,t)=>{if(!c.Z)return t.status(500).json({message:"Database not connected"});if(!(0,r.e)("skins-collections"))return t.status(404).json({message:"Module not found"});await u.Z.run(e,t);let{method:s}=e;switch(s){case"GET":try{let s=e.user,{page:a,rows:r,query:n}=o.Z.parse(e.query),{filter:i}=e.query||{filter:"ALL"},u="MINE"===i&&s?await c.Z.skins.collections.getBySteamId(s.id):await c.Z.skins.collections.getAll(a,r,n),d=u.map(e=>e.steamid),m=await (0,l.Z)(d),g=u.map(e=>{let t=m.find(t=>t.steamid===e.steamid);return{...e,steam:t}}),p=await c.Z.skins.collections.count(n);return t.status(200).json({results:g,count:p})}catch(e){return console.error(e),t.status(500).json({message:"Internal server error"})}case"POST":{let{name:s}=e.body;if(!s)return t.status(400).json({message:"Name is required"});let a=await (0,n.Z)(e,t);if(!a)return;if((await c.Z.skins.collections.getBySteamId(a.id)).length>=3)return t.status(400).json({message:"You can only have 3 collections"});let r=await c.Z.skins.agents.getBySteamId(a.id),i=await c.Z.skins.gloves.getBySteamId(a.id),o=await c.Z.skins.knife.getBySteamId(a.id),l=await c.Z.skins.music.getBySteamId(a.id),u=await c.Z.skins.skins.getBySteamId(a.id);if(0===u.length)return t.status(400).json({message:"You need to have skins to create a collection"});return await c.Z.skins.collections.create(a.id,s,{agents:r,gloves:i,knife:o,music:l,skins:u}),t.status(200).json({message:"Collection created"})}case"PATCH":try{let s=await (0,n.Z)(e,t);if(!s)return;if((await c.Z.skins.collections.getBySteamId(s.id)).length>=3)return t.status(400).json({message:"You can only have 3 collections"});let a=i.Z.parse(e.body);return await c.Z.skins.collections.create(s.id,a.name,a),t.status(200).json({message:"Collection set"})}catch(e){return console.error(e),t.status(500).json({message:"Internal server error"})}}};a()}catch(e){a(e)}})},48350:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>o});var r=s(2782),n=e([r]);r=(n.then?(await n)():n)[0];let i=new Map,o=async e=>{try{let t=[...new Set(e)].filter(e=>!isNaN(Number(e)));if(!t.length)return[];let s=t.filter(e=>i.has(e)),a=t.filter(e=>!i.has(e)),n=s.map(e=>i.get(e)).filter(e=>void 0!==e)||[];console.log({cachedProfiles:n});let o=[];return a.length>0&&(o=await (0,r.From64ToUser)(a,1e3)||[]).forEach(e=>i.set(e.steamid,e)),[...n,...o]}catch(e){return[]}};a()}catch(e){a(e)}})},18391:(e,t,s)=>{s.d(t,{e:()=>r,g:()=>a});let a=e=>!!process.env.MODULES&&process.env.MODULES.split(",").includes(e),r=e=>a(e)&&!!process.env.MODULES_ENABLED&&process.env.MODULES_ENABLED.split(",").includes(e)},10474:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>u});var r=s(60276),n=s(45616),i=s(429),o=s.n(i),l=e([n]);n=(l.then?(await l)():l)[0];let c=(0,n.default)();c.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),c.use(r.Z.initialize()),c.use(r.Z.session());let u=c;a()}catch(e){a(e)}})},60276:(e,t,s)=>{s.d(t,{Z:()=>o});let a=require("passport");var r=s.n(a);let n=require("passport-steam");r().serializeUser(async(e,t)=>{t(null,e)}),r().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),r().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,s)=>(t.identifier=e,s(null,t))));let o=r()},88022:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>i});var r=s(73907),n=e([r]);r=(n.then?(await n)():n)[0];let i=(e,t)=>new Promise(async(s,a)=>r.Z?e.user?void s(e.user):a(t.status(400).json({success:!1,error:"Protected Route"})):t.status(500).json({message:"Database not connected"}));a()}catch(e){a(e)}})},68213:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>i});var r=s(9926),n=e([r]);let i=(r=(n.then?(await n)():n)[0]).z.object({name:r.z.string(),agents:r.z.object({steamid:r.z.string(),agent_ct:r.z.string().nullable(),agent_t:r.z.string().nullable()}),gloves:r.z.object({steamid:r.z.string(),weapon_defindex:r.z.number()}),knife:r.z.object({steamid:r.z.string(),knife:r.z.string()}),music:r.z.object({steamid:r.z.string(),music_id:r.z.number()}),skins:r.z.array(r.z.object({steamid:r.z.string(),weapon_defindex:r.z.number(),weapon_paint_id:r.z.number(),weapon_wear:r.z.number(),weapon_seed:r.z.number()}))});a()}catch(e){a(e)}})},96905:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>i});var r=s(9926),n=e([r]);let i=(r=(n.then?(await n)():n)[0]).default.object({page:r.default.string().default("1").refine(e=>!isNaN(Number(e)),{message:"Invalid page query"}).transform(e=>Number(e)),rows:r.default.string().default("10").refine(e=>!isNaN(Number(e)),{message:"Invalid page query"}).refine(e=>50>Number(e),{message:"Rows must be less than 50"}).transform(e=>Number(e)),query:r.default.string().optional()});a()}catch(e){a(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[8747],()=>s(22658));module.exports=a})();