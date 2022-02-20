'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "c3fee9d10967ab53435c0db4a13d26ae",
"favicon.ico": "c0fce0397a92fe30b78aa87ce56caca2",
"index.html": "6cabc24f7864cfe0cf4b59b71b93ce8e",
"/": "6cabc24f7864cfe0cf4b59b71b93ce8e",
"Favicon96.png": "c6f301b883d31893f2644a3abe02844b",
"apple-icon.png": "195c5d345ee3e51ce1a35a54c9f71010",
"apple-icon-144x144.png": "e72f11aadc03548c225dc741db2ed171",
"android-icon-192x192.png": "e372b26765b015161700e68ebbd4942f",
"apple-icon-precomposed.png": "195c5d345ee3e51ce1a35a54c9f71010",
"apple-icon-114x114.png": "0129810761009905b7d1865245992452",
"main.dart.js": "3529770747ddb774d579a0a3c794b811",
"ms-icon-310x310.png": "e4f4325890289e8d3fc68578e27601b8",
"Favicon32.png": "6d12ad54425427df035361676ab58bd6",
"ms-icon-144x144.png": "e72f11aadc03548c225dc741db2ed171",
"apple-icon-57x57.png": "00f685c9d3cf7464e06afe8fd093eca2",
"apple-icon-152x152.png": "f77de064436161ad937fc6a5315f710b",
"Favicon.png": "a16d9a42a1c16a6fbbd86a0dfba87c74",
"ms-icon-150x150.png": "7ac0c8e5d9289920edac6884ab5a455c",
"android-icon-72x72.png": "4682a1f8318b78270e8b17ef87acf343",
"android-icon-96x96.png": "aea7d1879f0ce0ee2a2add74a3cfb292",
"android-icon-36x36.png": "42358c218cd799cf20fb69584c5f5745",
"apple-icon-180x180.png": "d85fff4aa66aff5bed9cf7b67430b0bf",
"favicon-96x96.png": "aea7d1879f0ce0ee2a2add74a3cfb292",
"icons/AppIcon512.png": "745638590a5b0884b03a7c5110a449da",
"icons/icon-192x192.png": "29792c9d0f88bb6b0a0ba0d899283f71",
"icons/icon-384x384.png": "5605f79522eb51ef2de14c080427cb22",
"icons/icon-72x72.png": "8b8c286c8e70362c6f250e5a476e00d1",
"icons/icon-96x96.png": "2fd200e4b2ff51d05d64da35a75c2ef2",
"icons/icon-152x152.png": "907a2cf40f6f6baaa7d3713a90f2e233",
"icons/icon-512x512.png": "2858051e6505fea0b385405f96a281c5",
"icons/AppIcon192.png": "48c2d7e472bd3a66213a7d2c52efa5b6",
"icons/icon-144x144.png": "6cde372666730c8444414b19a9033ba3",
"icons/icon-128x128.png": "9aadc86059ef336ff693ffa022af3a69",
"manifest.json": "7a44509e27306aaa0a2a1a1eb9845fc1",
"android-icon-48x48.png": "6939a4b1f948126d3ad6677708e49f5d",
"apple-icon-76x76.png": "8a4a2a97dd791e9231dad979ce43e7c4",
"apple-icon-60x60.png": "fd7213fde3e9c44ac5ae39dd3650fe11",
"assets/images/GlutenFree.png": "3498524b5903d679aaa58a9b656e4459",
"assets/images/DairyFree.png": "1839f0bdfaeb6eeff7bf57a7e843f93d",
"assets/images/Order.png": "28bf53409932beeb4767c18cdc82e3d4",
"assets/images/2.0x/GlutenFree.png": "a394a90bce2aace9180a14650dcdaade",
"assets/images/2.0x/DairyFree.png": "132e2bab5c5bde9a1a61dc93835e127b",
"assets/images/2.0x/Order.png": "363b24cd5ac7325b16dea7ca926fb0aa",
"assets/images/2.0x/Vegan.png": "96e142b4950114cd5b60f76c250346a6",
"assets/images/2.0x/GTSLogo.png": "32dad70e3bd64d02ac188672e983346f",
"assets/images/2.0x/Veggie.png": "c6d734ac75f659945761904e77e7cee8",
"assets/images/2.0x/VisaMC.png": "609a71f44fa4479e29e2f3c7a3d1a1a7",
"assets/images/2.0x/NutFree.png": "25a51f62c23b2ee8124eba335a938a72",
"assets/images/Vegan.png": "d82d69f8e8406908129b6ba036f4b53a",
"assets/images/3.0x/GlutenFree.png": "1903c7cd496fd1de0fe3bce3b19d8a10",
"assets/images/3.0x/DairyFree.png": "dc22cf3dc48cfd2617b29d4d803de922",
"assets/images/3.0x/Order.png": "43a9855cd0d907104cc7378151087e6b",
"assets/images/3.0x/Vegan.png": "c2e6c82d4f9481528ccab4cca769c490",
"assets/images/3.0x/GTSLogo.png": "9edeff8c85230221303634abbf48d3a9",
"assets/images/3.0x/Veggie.png": "21095d201571af9900d2132dbb9f1c1b",
"assets/images/3.0x/VisaMC.png": "559c0ae88c95a88c7e3005c985949cc6",
"assets/images/3.0x/NutFree.png": "ced8e06da9b3e6fd0c39bb5a6df0c7ce",
"assets/images/GTSLogo.png": "2e6924d242698ad88c108d3eb6e84cc8",
"assets/images/Veggie.png": "8c6b54c0b84397d00db0e867b906b241",
"assets/images/VisaMC.png": "9a753d05eef4df1830b907efe733b57d",
"assets/images/NutFree.png": "edb00c09d0066a9483e23245ea58439d",
"assets/AssetManifest.json": "5c89f042882d7a8169cfd28b9adbe82b",
"assets/NOTICES": "f0821f91e0f4c90dea404b8562007519",
"assets/FontManifest.json": "cc15830de8d63a3202e110c69053f6a3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/awesome_card/images/contactless_icon.png": "a092b99c8a1f820436ddf6e540eb632d",
"assets/packages/awesome_card/images/card_provider/discover.png": "50f59532bededb551c5ed62fb1009e69",
"assets/packages/awesome_card/images/card_provider/rupay.png": "3e3018d92a1b51fde09382939664a22d",
"assets/packages/awesome_card/images/card_provider/maestro.png": "6800b310fc27f91d0231ab6556284c5b",
"assets/packages/awesome_card/images/card_provider/visa.png": "b6cf8805abcc16ca2bc2ed401958cce1",
"assets/packages/awesome_card/images/card_provider/diners_club.png": "4288121f0ec6619f2ea56bc7cbb2685a",
"assets/packages/awesome_card/images/card_provider/master_card.png": "6ecc2a7c3b3d7e1c30ac7cf7a083d5af",
"assets/packages/awesome_card/images/card_provider/jcb.png": "434316972590e7d17d65cd133c018f82",
"assets/packages/awesome_card/images/card_provider/american_express.png": "25d34d555cc835f008806163bf889bf9",
"assets/packages/awesome_card/fonts/MavenPro-Regular.ttf": "ebc7385f9f207b4ad5d0cc4204bf4068",
"assets/packages/awesome_card/fonts/MavenPro-Medium.ttf": "06dcc8cf4f85c46c6985b69ed0b6b5b6",
"assets/packages/awesome_card/fonts/MavenPro-Bold.ttf": "c3c32db501249a4a864e3359d88469fb",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/fonts/rockwen.ttf": "4f8ba2861dd4d82af048bb128bc10dc6",
"assets/fonts/Forte.ttf": "70c40e47dce600ebebb5479b1ef53c73",
"assets/fonts/HTOWERT.ttf": "9e23421978544d8e00a00eb47740d280",
"assets/fonts/ScriptMTBold.ttf": "b1f909b1cb3adb801a92229ea92613e1",
"assets/fonts/gill-sans-mt.ttf": "1959c187b6c1d759956245419a6673a5",
"assets/fonts/MTCORSVA.ttf": "b98f57ac686fc135914a844ec0ce8d49",
"assets/fonts/MYRIADPRO-REGULAR.OTF": "d75d7f70aa160104a45a743eae7a8a7e",
"assets/fonts/coolveticarg.ttf": "b60ffa5ac0a8e99a0e8e765ded1cccf4",
"assets/fonts/FrenchScriptMT.ttf": "f9a91617fb061d64c1b22212fef3e253",
"assets/fonts/MYRIADPRO-BOLD.OTF": "bfc84fcb6a1c571b2b96ae83833e6de1",
"assets/fonts/Inkfree.ttf": "73428cd1ad823d01d77b642ee6104415",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/BITCBLKAD.ttf": "4b0f1c076dfb624a4c79376edb6adf1b",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"android-icon-144x144.png": "e72f11aadc03548c225dc741db2ed171",
"apple-icon-72x72.png": "4682a1f8318b78270e8b17ef87acf343",
"apple-icon-120x120.png": "c7bd3899c338aff37c12a68298c0fc3e",
"favicon-32x32.png": "2683dda738009cf4b2c1bbca9eac2eeb",
"ms-icon-70x70.png": "03e5f59ca959e4af06c327b809a7c548"
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
