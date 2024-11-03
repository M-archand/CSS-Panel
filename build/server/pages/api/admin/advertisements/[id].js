"use strict";(()=>{var e={};e.id=6257,e.ids=[6257],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},97612:e=>{e.exports=import("drizzle-orm")},99089:e=>{e.exports=import("drizzle-orm/mysql-core")},63024:e=>{e.exports=import("drizzle-orm/mysql2")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},17960:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>l,default:()=>d,routeModule:()=>c});var a=s(54396),n=s(76255),i=s(39766),o=s(6921),u=e([o]);o=(u.then?(await u)():u)[0];let d=(0,i.l)(o,"default"),l=(0,i.l)(o,"config"),c=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/admin/advertisements/[id]",pathname:"/api/admin/advertisements/[id]",bundlePath:"",filename:""},userland:o});r()}catch(e){r(e)}})},6921:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>p});var a=s(62260),n=s(1350),i=s(17077),o=s(89977),u=s(97612),d=s(57424),l=s(96610),c=s(93066),m=e([a,n,i,o,u,d,l,c]);[a,n,i,o,u,d,l,c]=m.then?(await m)():m;let p=async(e,t)=>{if(await c.Z.run(e,t),!await (0,d.Z)(e,t,["@web/root"],"OR"))return;if(!(await (0,i.ed)("advertisements")).enabled)return t.status(404).json({message:"Module not found"});if(!o.of)return t.status(500).json({message:"Database not connected"});let{method:s}=e;if(!l.Z)return t.status(500).json({message:"Database not connected"});if(!await o.of.select().from(n.advertisements).where((0,u.eq)(n.advertisements.id,Number(e.query.id))))return t.status(404).json({message:"Advertisement not found"});switch(s){case"PUT":try{let s=a.n.parse(e.body);return await o.of.update(n.advertisements).set(s).where((0,u.eq)(n.advertisements.id,Number(e.query.id))),t.status(200).json({message:"Advertisement updated successfully"})}catch(e){return error(`Error creating advertisement: ${e}`),t.status(500).json({message:"Internal server error"})}case"DELETE":try{return await o.of.delete(n.advertisements).where((0,u.eq)(n.advertisements.id,Number(e.query.id))),t.status(200).json({message:"Advertisement deleted successfully"})}catch(e){return error(`Error creating advertisement: ${e}`),t.status(500).json({message:"Internal server error"})}}};r()}catch(e){r(e)}})},93066:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>l});var a=s(79809),n=s(45616),i=s(429),o=s.n(i),u=e([n]);n=(u.then?(await u)():u)[0];let d=(0,n.default)();d.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),d.use(a.Z.initialize()),d.use(a.Z.session());let l=d;r()}catch(e){r(e)}})},79809:(e,t,s)=>{s.d(t,{Z:()=>o});let r=require("passport");var a=s.n(r);let n=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,s)=>(t.identifier=e,s(null,t))));let o=a()},57424:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>i});var a=s(96610),n=e([a]);a=(n.then?(await n)():n)[0];let i=(e,t,s,r="AND")=>new Promise(async(n,i)=>{if(!a.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return i(t.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,u=await a.Z.admins.getBySteam64(o);if(!u)return i(t.status(401).json({success:!1,error:"Protected Route"}));if(!s)return n(u);let d=null;if("object"==typeof u.flags)d=u.flags;else{let e=await a.Z.adminGroups.getById(u.flags);e&&(d=e.flags)}if(null===d||!("AND"===r?s.every(e=>d.includes(e)):s.some(e=>d.includes(e))))return i(t.status(403).json({success:!1,error:"Protected Route"}));n(u)});r()}catch(e){r(e)}})}};var t=require("../../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[9585],()=>s(17960));module.exports=r})();