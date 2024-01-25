const cacheName = 'mia-pwa-cache-v1';
const cachedFiles = [
    '/',
    '/index.html',
    '/manifest.json',
    '/styles.css',
    '/app.js',
    '/icon.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                return cache.addAll(cachedFiles);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
