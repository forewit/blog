const s=location.pathname.split("/").slice(0,-1).join("/"),p=[s+"/app/immutable/entry/app.CY6Y7k_n.js",s+"/app/immutable/nodes/0.DaOjT6Kr.js",s+"/app/immutable/assets/0.COmccKJZ.css",s+"/app/immutable/nodes/1.CwzB2D8q.js",s+"/app/immutable/nodes/2.D3yoOFz0.js",s+"/app/immutable/assets/2.Bl08xTxO.css",s+"/app/immutable/nodes/3.BzYJB0Wm.js",s+"/app/immutable/assets/3.DzIfJsTd.css",s+"/app/immutable/chunks/entry.B3cLDVIs.js",s+"/app/immutable/chunks/index.2RzF13yX.js",s+"/app/immutable/chunks/paths.2eApc1nq.js",s+"/app/immutable/chunks/scheduler.DypdDQBO.js",s+"/app/immutable/entry/start.TNPgogII.js"],r=[s+"/images/baby.jpg",s+"/images/back-button.svg",s+"/images/field-background.jpg",s+"/images/field-icon.png",s+"/images/flowers.jpg",s+"/images/icon.svg",s+"/images/icon_bg.svg",s+"/images/moon.svg",s+"/images/road.jpg",s+"/images/solar-system-animation.svg",s+"/images/sun.svg",s+"/manifest.json",s+"/posts/the-seasons.md"],l="1712237802951",c=`cache-${l}`,m=[...p,...r];self.addEventListener("install",e=>{async function n(){await(await caches.open(c)).addAll(m)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(c);if(m.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const o=await i.match(e.request);if(o)return o;throw a}}e.respondWith(n())});
