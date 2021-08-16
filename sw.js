self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('quiz-generator').then((cache) => cache.addAll([
      'index.html',
      'v1.html',
      'quiz-generator.png',
      'index.js',
      'style.css',
      'quiz1.jpg',
      'quiz2.jpg',
      'quiz3.jpg',
      'quiz4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
}); 
