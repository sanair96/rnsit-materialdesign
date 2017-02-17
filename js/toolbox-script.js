// Route #1
global.toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
  cache: {
    name: 'googleapis',
    maxEntries: 20,
  },
  origin: /\.googleapis\.com$/
});

// Route #2
global.toolbox.router.get(/\.(?:png|gif|jpg)$/, global.toolbox.cacheFirst, {
  cache: {
    name: 'images-cache',
    maxEntries: 50
  }
});