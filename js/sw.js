self.addEventListener('fetch', function (event) {
  event.respondWith(
    new Response('サービスワーカーが動いています！')
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  clients.openWindow("/");
}, false);