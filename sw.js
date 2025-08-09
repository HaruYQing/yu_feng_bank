const CACHE_NAME = "scammer-app-v1";
const DOMAIN = "https://yu-feng.fyqstudio.com";
const urlsToCache = [
  `${DOMAIN}/`,
  `${DOMAIN}/index.html`,
  `${DOMAIN}/login.html`,
  `${DOMAIN}/deposit.html`,
  `${DOMAIN}/styles.css`,
  `${DOMAIN}/login.css`,
  `${DOMAIN}/script.js`,
  `${DOMAIN}/manifest.json`,
  `${DOMAIN}/assets/icons/app-icon.png`,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// 清除舊快取
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
