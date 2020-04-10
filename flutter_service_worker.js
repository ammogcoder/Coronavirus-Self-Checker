'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "cea98119ef50234cb76083077c9092bd",
"/assets\assets\fonts\Orkney-Bold.ttf": "612619cf6e6b9c4af3ccb3f78270d181",
"/assets\assets\fonts\Orkney-Light.ttf": "4b5d1686d4bfbfc2142d626a2be6fa80",
"/assets\assets\fonts\Orkney-Medium.ttf": "bf48e92f7c7ec4a35e90370868fe1199",
"/assets\assets\fonts\Orkney-Regular.ttf": "01d60c513ac0edd3c290699f36af8ec1",
"/assets\assets\images\corona.gif": "c683fa2780abf13372469bfb35479a0e",
"/assets\assets\images\cross.png": "eb349640653e71459e02b9301d3cd073",
"/assets\assets\images\doctor.gif": "e9a0564b846411162958bdb1e1b1153b",
"/assets\assets\images\homeImage.png": "595fcc49a43c1ab8117e254387c565c1",
"/assets\assets\images\nodata1.png": "3eceab6e707ec4d59b9ea71886885ecd",
"/assets\assets\images\stayhome.gif": "9da927ee1832ff0a183d50064b237818",
"/assets\FontManifest.json": "3ca95ff80e2dd0226a271249304a57fd",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "440766d8cc6f91974e64a139489d5886",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "704d422e5f262cbc240090dae81d5794",
"/main.dart.js": "115ac9e2490c41c719d063dc0e1c5fec",
"/manifest.json": "142d93e5745acfe2ca123fdd5c9bf9bd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
