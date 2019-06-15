let myCacheName = "myCache";
let load = [
  // './',
  // './index.html',
  // './restaurant.html',
  // './css/styles.css',
  // './data/restaurants.json',
  // './img/1.jpg',
  // './img/2.jpg',
  // './img/3.jpg',
  // './img/4.jpg',
  // './img/5.jpg',
  // './img/6.jpg',
  // './img/7.jpg',
  // './img/8.jpg',
  // './img/9.jpg',
  // './img/10.jpg',
  // './js/dbhelper.js',
  // './js/main.js',
  // './js/restaurant_info.js',
  // './js/swRegister.js'
];
// Installing the service worker.
this.addEventListener('install', (e) => {
  // Wait until the data is loaded.
  e.waitUntil(
    // Opens a cache with the given myCacheName.
    caches.open(myCacheName).then((ca) => {
      // Add all files from load array to cache.
      ca.addAll(load);
    })
  );
});

// Fetching data from cache or from server using serviceWorker.
this.addEventListener('fetch', (e) => {
  e.respondWith(
    // Opens the cache.
    caches.open(myCacheName).then((ca) => {
      // Requests for a match.
      return ca.match(e.request).then((res) => {
        // If found in cache return it.
        // or fetch it from the server.
        return res || fetch(e.request).then((res) => {
            // After fetching put the fetched data into a cache and then return it.
            ca.put(e.request, res.clone())
            return res;
          })
      })
    })
  )
});

// Activating the serviceWorker.
this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
