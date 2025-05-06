self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('site-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/favicon.ico',
                '/icon-180x180.png',
                '/icon-192x192.png',
                '/icon-512x512.png',
                '/style.css',
                '/script.js',
                '/dieju.jpg',  // Certifique-se de incluir todos os arquivos de imagem
                '/diiieju.jpg',
                '/diejuu.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
