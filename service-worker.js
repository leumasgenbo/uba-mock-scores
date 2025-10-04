// Service Worker file - Minimal for AppShell function, avoids caching GAS URLs

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed.');
  // Force the service worker to activate immediately.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated.');
  // Take control of all pages now
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // We do NOT cache the live Apps Script application as its URL changes constantly.
  // We simply let all network requests pass through.
  // This satisfies the PWA install requirement without breaking the GAS redirect mechanism.
  return; 
});