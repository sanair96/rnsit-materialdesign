(function(){
var CACHE_VERSION = 1;

// Shorthand identifier mapped to specific versioned cache.
var CURRENT_CACHE = rnsitcache + CACHE_VERSION;
var initial_cache =['index.html','css/index.css','js/index.js'];
	self.addEventListener('install',event=>{
		console.log('Installing service worker');
		skipWaiting();
	})
	self.addEventListener('activate',event=>{
		console.log('Activate');
		cache.open(CURRENT_CACHE)
		.then(cache=>{

		})
	})
	self.addEventListener('fetch',event=>{
		event.respondWith(
			caches.open(CURRENT_CACHE)
			.then(cache=>{
				cache.match(event.request)
				.then(page=>{
					if(page)
						return page;
					return fetch(event.request)
					.then(page=>{
						cache.put(event.request,page.clone());
						return page;
					})
				})
			})

	})
		event.waitUntil(fetch(event.request)
			.then(page=>{
				cache.open(CURRENT_CACHE).then(cache=>{
					cache.put(event.request,page);
				})
			})
			)
})();