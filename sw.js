const V='aghsat-v1',SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const nav=e.request.mode==='navigate';
  e.respondWith(
    (nav?fetch(e.request).catch(()=>caches.match('index.html')):
      caches.match(e.request).then(r=>r||fetch(e.request)))
    .then(res=>{if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(V).then(c=>c.put(nav?'index.html':e.request,cp))}return res})
    .catch(()=>caches.match(e.request))
  );
});
