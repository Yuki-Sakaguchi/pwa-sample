self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
        return response || fetch(event.request);
    })
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  clients.openWindow("/");
}, false);