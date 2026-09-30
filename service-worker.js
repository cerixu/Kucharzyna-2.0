const VERSION="kucharzyna-v2.3.2";
const STATIC=["./","./index.html","./styles.css","./app.js","./db.js","./manifest.webmanifest","./icon-180.png","./icon-192.png","./icon-512.png","./photo-carbonara.jpg","./photo-pizza.jpg","./photo-tomato.jpg","./photo-generic.jpg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(res=>{const u=new URL(e.request.url);if((res.ok||res.type==='opaque')&&(u.origin===location.origin||e.request.destination==='image')){const clone=res.clone();caches.open(VERSION).then(c=>c.put(e.request,clone)).catch(()=>{})}return res}).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html"))))});
