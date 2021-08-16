self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('quiz-schools').then((cache) => cache.addAll([
      'https://shortenersurl.blogspot.com/2021/08/home.html' ,
      'https://raw.githubusercontent.com/3schools/3schools/main/3schools.png',
      'https://raw.githubusercontent.com/3schools/home/main/index.js',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
}); 
