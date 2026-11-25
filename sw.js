// quran sw
const V='v1';const C='quran-'+V;
const FILES=['./','index.html','app.js','name.js','q1.js','q2.js','q3.js','q4.js','q5.js','q6.js','q7.js','q8.js','manifest.webmanifest'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(FILES.map(f=>c.add(new Request(f,{cache:'reload'}))))))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('quran-')&&x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('message',e=>{if(e.data==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
if(r.mode==='navigate'){e.respondWith(caches.match('index.html').then(m=>m||fetch(r)));return}
e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r)))});
