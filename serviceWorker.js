(function(){
var CACHE_VERSION = 1;

// Shorthand identifier mapped to specific versioned cache.
var CURRENT_CACHE = "rnsitcache" + CACHE_VERSION;
var initial_cache =['.','index.html','css/index.css','js/index.js'];
var CURRENT_CACHE = 'rnsitcache' + CACHE_VERSION;
var initial_cache =['index.html','css/index.css','js/index.js'];
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
	});
	self.addEventListener('fetch',event=>{
		event.respondWith(
			caches.open(CURRENT_CACHE)
			.then(cache=>{
				cache.match(event.request)
				.then(page=>{
					if(page){
						console.log('yolo');
						return page;}
					return fetch(event.request)
					.then(page=>{
						cache.put(event.request,page.clone());
						return page;
					})
				})
			})
)	
		event.waitUntil(fetch(event.request)
			.then(page=>{
				caches.open(CURRENT_CACHE).then(cache=>{
					cache.put(event.request,page);
				})
			})
			)
})
				cache.addAll(initial_cache);
		})
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