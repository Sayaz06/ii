const CACHE_NAME = 'senaman-otot-cache-v3'; // Naikkan versi cache lagi untuk memastikan update berlaku
const urlsToCache = [
  './index.html',
  './manifest.json',
  './iconMusle-192.png', // ✅ BETUL
  './iconMucle-512.png'  // ✅ BETUL
];

// Install SW
self.addEventListener('install', e=>{
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache=>{
            return cache.addAll(urlsToCache);
        })
    );
});

// Activate SW
self.addEventListener('activate', e=>{
    e.waitUntil(self.clients.claim());
});

// Fetch
self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    );
});


