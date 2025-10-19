self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('trendy-tailor-cache').then(cache => {
      return cache.addAll([
        './TrendyMensTailor.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});