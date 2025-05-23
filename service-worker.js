const CACHE_NAME = 'pwa-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index_cards.html',
  '/styles_cards.css',
  '/app.js',
  '/icons/icon.png',
  '/icons/favicon.png',
  '/img/Background.png',
  '/img/Boldness.png',
  '/img/Flight.png',
    '/img/Healing.png',
    '/img/Resilience.png',
    '/img/Swiftness.png',
    '/img/vintage-grunge.jpg',
    '/img/Alchemy_jug.png'
];

// Installieren
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

// Abrufen
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
