"use strict";(()=>{var e={};e.id=4584,e.ids=[4584],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},97612:e=>{e.exports=import("drizzle-orm")},99089:e=>{e.exports=import("drizzle-orm/mysql-core")},63024:e=>{e.exports=import("drizzle-orm/mysql2")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},40149:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>c,default:()=>l,routeModule:()=>d});var a=s(54396),n=s(76255),i=s(39766),o=s(72980),u=e([o]);o=(u.then?(await u)():u)[0];let l=(0,i.l)(o,"default"),c=(0,i.l)(o,"config"),d=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/admin/advertisements",pathname:"/api/admin/advertisements",bundlePath:"",filename:""},userland:o});r()}catch(e){r(e)}})},72980:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>m});var a=s(62260),n=s(1350),i=s(17077),o=s(89977),u=s(57424),l=s(96610),c=s(93066),d=e([a,n,i,o,u,l,c]);[a,n,i,o,u,l,c]=d.then?(await d)():d;let m=async(e,t)=>{if(await c.Z.run(e,t),!await (0,u.Z)(e,t,["@web/root"],"OR"))return;if(!(await (0,i.ed)("advertisements")).enabled)return t.status(404).json({message:"Module not found"});if(!o.of)return t.status(500).json({message:"Database not connected"});let{method:s}=e;if(!l.Z)return t.status(500).json({message:"Database not connected"});switch(s){case"GET":try{let e=await o.of.select().from(n.advertisements);return t.status(200).json(e)}catch(e){return error(`Error getting advertisements users: ${e}`),t.status(500).json({message:"Internal server error"})}case"POST":try{let s=a.n.parse(e.body);return await o.of.insert(n.advertisements).values(s),t.status(200).json({message:"Advertisement created successfully"})}catch(e){return error(`Error creating advertisement: ${e}`),t.status(500).json({message:"Internal server error"})}}};r()}catch(e){r(e)}})},93066:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>c});var a=s(79809),n=s(45616),i=s(429),o=s.n(i),u=e([n]);n=(u.then?(await u)():u)[0];let l=(0,n.default)();l.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(a.Z.initialize()),l.use(a.Z.session());let c=l;r()}catch(e){r(e)}})},79809:(e,t,s)=>{s.d(t,{Z:()=>o});let r=require("passport");var a=s.n(r);let n=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,s)=>(t.identifier=e,s(null,t))));let o=a()},57424:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>i});var a=s(96610),n=e([a]);a=(n.then?(await n)():n)[0];let i=(e,t,s,r="AND")=>new Promise(async(n,i)=>{if(!a.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return i(t.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,u=await a.Z.admins.getBySteam64(o);if(!u)return i(t.status(401).json({success:!1,error:"Protected Route"}));if(!s)return n(u);let l=null;if("object"==typeof u.flags)l=u.flags;else{let e=await a.Z.adminGroups.getById(u.flags);e&&(l=e.flags)}if(null===l||!("AND"===r?s.every(e=>l.includes(e)):s.some(e=>l.includes(e))))return i(t.status(403).json({success:!1,error:"Protected Route"}));n(u)});r()}catch(e){r(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[9585],()=>s(40149));module.exports=r})();