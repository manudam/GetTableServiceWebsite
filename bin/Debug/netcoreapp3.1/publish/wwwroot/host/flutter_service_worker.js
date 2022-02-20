'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "fadbee423556bc75cab41f479682d48a",
"favicon.ico": "28b74bc22e6cb6a34e6946bfbe6a9264",
"index.html": "1165277da03ed826cbecbf0d94d1016a",
"/": "1165277da03ed826cbecbf0d94d1016a",
"apple-icon.png": "8a6f60c11c3383973f755ff54b151add",
"apple-icon-144x144.png": "1ff8216b2a0c8c3bb93faf53d1d905a8",
"android-icon-192x192.png": "96623c8b32dbec6ba62a6e0a8148b2dc",
"apple-icon-precomposed.png": "8a6f60c11c3383973f755ff54b151add",
"apple-icon-114x114.png": "f15c58e334dfc57629f0750df2e05639",
"main.dart.js": "97513c4aa1076b7e25cd564a50be0568",
"ms-icon-310x310.png": "600ddcaf90b96bd8fe069cb17618e0f0",
"ms-icon-144x144.png": "1ff8216b2a0c8c3bb93faf53d1d905a8",
"apple-icon-57x57.png": "bff8441056518ae3da5edbcd00233db6",
"apple-icon-152x152.png": "399f29b543dca2e9a5c911ba86a273d0",
"Favicon.png": "a16d9a42a1c16a6fbbd86a0dfba87c74",
"ms-icon-150x150.png": "66e35c0220331f949c7466b5c9148afb",
"android-icon-72x72.png": "b8f404bf1b70399d7f12bc57f9e00660",
"android-icon-96x96.png": "a805074f7888bf72b62485cfcc0770df",
"android-icon-36x36.png": "5ca977860c7f4713aaae4f966e9026b7",
"apple-icon-180x180.png": "0f4e0672cb188bc652799f019b6f8003",
"favicon-96x96.png": "a805074f7888bf72b62485cfcc0770df",
"icons/icon-192x192.png": "6ca88e726a2b2dd5e507090eb5abd282",
"icons/HostAppIcon192.png": "0fb35565c4398dbdfedd0415d9c6070d",
"icons/icon-384x384.png": "c976154a36a224e8531ab07a3677de9e",
"icons/icon-72x72.png": "f9b2591bfd986c319c0edc93b53c05b8",
"icons/icon-96x96.png": "97295f8c256c69d4542bce23f806e8e2",
"icons/icon-152x152.png": "912832ff93a3afb705e7c3539b2624dd",
"icons/HostAppIcon512.png": "3e676a656c1064dbae8ef5e6029f2716",
"icons/icon-512x512.png": "9f6d2f5c253f21aab8f81e1dca12b177",
"icons/icon-144x144.png": "a0bab5ca274e7a8ffb356a3bf7d6b9b3",
"icons/icon-128x128.png": "328a92de3fc23ab591ec2d2cbc913d02",
"manifest.json": "fe174d09c026541e0adab8ea9c5062d0",
"android-icon-48x48.png": "285d7bfb68ac562a388a6f61391582ed",
"apple-icon-76x76.png": "6f3701e9313abc7d34b578fbfa1bf40c",
"apple-icon-60x60.png": "8187fc17f661cc6c6e1317814a2a607c",
"assets/images/GlutenFree.png": "3498524b5903d679aaa58a9b656e4459",
"assets/images/DairyFree.png": "1839f0bdfaeb6eeff7bf57a7e843f93d",
"assets/images/2.0x/GlutenFree.png": "a394a90bce2aace9180a14650dcdaade",
"assets/images/2.0x/DairyFree.png": "132e2bab5c5bde9a1a61dc93835e127b",
"assets/images/2.0x/Vegan.png": "96e142b4950114cd5b60f76c250346a6",
"assets/images/2.0x/GTSLogo.png": "32dad70e3bd64d02ac188672e983346f",
"assets/images/2.0x/Veggie.png": "c6d734ac75f659945761904e77e7cee8",
"assets/images/2.0x/NutFree.png": "25a51f62c23b2ee8124eba335a938a72",
"assets/images/Vegan.png": "d82d69f8e8406908129b6ba036f4b53a",
"assets/images/3.0x/GlutenFree.png": "1903c7cd496fd1de0fe3bce3b19d8a10",
"assets/images/3.0x/DairyFree.png": "dc22cf3dc48cfd2617b29d4d803de922",
"assets/images/3.0x/Vegan.png": "c2e6c82d4f9481528ccab4cca769c490",
"assets/images/3.0x/GTSLogo.png": "9edeff8c85230221303634abbf48d3a9",
"assets/images/3.0x/Veggie.png": "21095d201571af9900d2132dbb9f1c1b",
"assets/images/3.0x/NutFree.png": "ced8e06da9b3e6fd0c39bb5a6df0c7ce",
"assets/images/GTSLogo.png": "2e6924d242698ad88c108d3eb6e84cc8",
"assets/images/Veggie.png": "8c6b54c0b84397d00db0e867b906b241",
"assets/images/NutFree.png": "edb00c09d0066a9483e23245ea58439d",
"assets/AssetManifest.json": "70916adecafca5840a9a09a9cef063c5",
"assets/NOTICES": "5e4d4d62b8bad0c4b561d30be7d921cd",
"assets/FontManifest.json": "59a5d8853b6f8186a82b93d02d4031e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_iconpicker/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"assets/packages/flutter_iconpicker/fonts/outline_material.ttf": "6b94994fffd9868330d830fcb18a6026",
"assets/packages/flutter_iconpicker/fonts/LineAwesomeIcons.ttf": "4d42f5f0c62a8f51e876c14575354a6e",
"assets/packages/flutter_iconpicker/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"assets/packages/flutter_iconpicker/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"assets/packages/line_awesome_icons/assets/fonts/icon_font.ttf": "4d42f5f0c62a8f51e876c14575354a6e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/outline_material_icons/lib/outline_material_icons.ttf": "6b94994fffd9868330d830fcb18a6026",
"assets/fonts/MYRIADPRO-REGULAR.OTF": "d75d7f70aa160104a45a743eae7a8a7e",
"assets/fonts/MYRIADPRO-BOLD.OTF": "bfc84fcb6a1c571b2b96ae83833e6de1",
"assets/fonts/CenturyGothic400.ttf": "cfce6abbbff0099b15691345d8b94dcc",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"android-icon-144x144.png": "1ff8216b2a0c8c3bb93faf53d1d905a8",
"apple-icon-72x72.png": "b8f404bf1b70399d7f12bc57f9e00660",
"apple-icon-120x120.png": "4e61e05417592765114465ea27cad885",
"favicon-32x32.png": "7e2eb9f70b8ac04bd80258dc50d13ea4",
"ms-icon-70x70.png": "d7a4f0b14941dbe0264375472376e310"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
