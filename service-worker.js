const s=location.pathname.split("/").slice(0,-1).join("/"),m=[s+"/app/immutable/entry/app.DS-0JQeV.js",s+"/app/immutable/nodes/0.B955b89L.js",s+"/app/immutable/assets/0.COmccKJZ.css",s+"/app/immutable/nodes/1.BuLzNv4G.js",s+"/app/immutable/nodes/2.DdCFGkWi.js",s+"/app/immutable/assets/2.4PGfy3Nt.css",s+"/app/immutable/nodes/3.CYVGvo4g.js",s+"/app/immutable/assets/3.DdPltJ1d.css",s+"/app/immutable/chunks/entry.GAqbO0TI.js",s+"/app/immutable/chunks/index.2RzF13yX.js",s+"/app/immutable/chunks/paths.pP1evFJ-.js",s+"/app/immutable/chunks/scheduler.DypdDQBO.js",s+"/app/immutable/entry/start.DOoMNG0r.js"],r=[s+"/images/baby.jpg",s+"/images/field-background.jpg",s+"/images/flowers.jpg",s+"/images/icon.svg",s+"/images/icon_bg.svg",s+"/images/moon.svg",s+"/images/road.jpg",s+"/images/solar-system-animation.svg",s+"/images/sun.svg",s+"/manifest.json",s+"/posts/the-seasons.md"],l="1712176338941",c=`cache-${l}`,p=[...m,...r];self.addEventListener("install",e=>{async function n(){await(await caches.open(c)).addAll(p)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(c);if(p.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const o=await i.match(e.request);if(o)return o;throw a}}e.respondWith(n())});
