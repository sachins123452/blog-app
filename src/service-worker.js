// service-worker.js
/* eslint-disable no-restricted-globals */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.2.0/workbox-sw.js');

if (self.workbox) {
  console.log(`Workbox is loaded`);

  // Replace 'path-to-your-manifest-file' with the correct path to your __WB_MANIFEST
  self.workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

  // Add other caching strategies as needed
} else {
  console.log(`Workbox didn't load`);
}

/* eslint-enable no-restricted-globals */
