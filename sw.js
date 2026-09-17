const CACHE_NAME = 'admin-portal-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  'https://gsssdhankoli.github.io/Logo.png/logo.png'
];

// इंस्टॉल होने पर फाइलों को कैश में सेव करें
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// नेटवर्क रिक्वेस्ट को हैंडल करें
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

