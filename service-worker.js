const VERSION="kucharzyna-v1.8.0";
const STATIC=["./","./index.html","./styles.css","./app.js","./db.js","./manifest.webmanifest","./icon-180.png","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(res=>{if(res.ok&&new URL(e.request.url).origin===location.origin){const clone=res.clone();caches.open(VERSION).then(c=>c.put(e.request,clone))}return res}).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html"))))});
