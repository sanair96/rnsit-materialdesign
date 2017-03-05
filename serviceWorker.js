(function(){
var CACHE_VERSION = 1;

// Shorthand identifier mapped to specific versioned cache.
var CURRENT_CACHE = "rnsitcache" + CACHE_VERSION;
var initial_cache =['.','index.html','css/index.css','js/index.js'];
	self.addEventListener('install',event=>{
		console.log('Installing service worker');
		skipWaiting();
	});
	self.addEventListener('activate',event=>{
		console.log('Activate');
		caches.open(CURRENT_CACHE)
		.then(cache=>{

				caches.open(CURRENT_CACHE).then(cache=>{
					cache.addAll(initial_cache);
				})
		})
		console.log('Done caching');
	});

	self.addEventListener('notificationclick', function(e) {
  // TODO 2.8 - change the code to open a custom page
  clients.openWindow('notify.html');
  notification.close();
});
	self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CURRENT_CACHE).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        var fetchPromise = fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        return response || fetchPromise;
      })
    })
  );
});

	
	

})();