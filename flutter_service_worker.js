'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "b2e8d90d82e5a63bc6b6eb29f463834a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5ae8d0f87f5af10f51428318399b382a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c41824ed33dc28e4a7aa659440d328e4",
".git/logs/refs/heads/main": "340c583cf4e08e0e5153c94b71c385aa",
".git/logs/refs/remotes/origin/main": "4456f2061865ee4c381cd624e1c18324",
".git/objects/02/88be0a3b94cc3e4dbbeddf377e688f77c939d1": "dfb3f304b9c525fed6e502cc40713aaf",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/cbfe42e4c7f300b135010e3b03e986f0792cf1": "10f1194ee21a64c5eab4a422616391b8",
".git/objects/0c/f5bf18bedcf35e9f481122a002b1c510eb6542": "23fa72b6d11fb8568f59d3eda4af1413",
".git/objects/0c/fd47b1951d0d8305c70f8750ef2db06b95ae77": "5e2ec41c2b54afc6c72e76b855121bfb",
".git/objects/15/1c0d1d7503ed0bf1391764c2302f91cf46745c": "5accc7076a15e660371dd8a2434a60b7",
".git/objects/1a/38cb4c7c2e820700daa725bc1c3ffb77c1748c": "d3302223b3a70a4fe3a45c43bc1dd549",
".git/objects/1c/d2ec6f0b0331acf2817fe603139fd75be0891e": "b6f3eba14590b078f33ecd9fa8677fba",
".git/objects/1e/f0bd892fee69978613fa7e775b435ca79f2470": "54de1fc70ca2a86a02d0480adae52fcc",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/d3f322733bd2ad81009285658ea7a6f1317499": "696dfb5f9efbb9e3ee60db7e5a691947",
".git/objects/39/3831fb2e998f8192e594a916d712d4754fc7bd": "24352f1867e9181bd9db3b25469c581d",
".git/objects/3a/81f4d3611cffc8fe7df3ed845687124fab50e1": "545d3af61016300dcb505509b452eace",
".git/objects/3b/e7d6f3ecf5ea01d0eca07768d9fffbca3b16fc": "8d0b4d370b00ae869819d8d628acd337",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/52/a6234fe6d3cceac30c9b6e7d28e9cb713ec469": "bd67214e98618edb8c63ce7a4708f6cb",
".git/objects/54/a24d8f41c42e147812c4577144c388185501b3": "9c04459806d3229e2f946be6b5d39dff",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/29819a52a2f89b238be8aba256016491314226": "35c017aff654af8e08677895716115a5",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/08eb66fac4601fad83fd89278af964a29291ac": "52977b3e64559465d48de918b2cd7690",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/6c73bc20da3cc905b1aa2e83630d6ef0f1b359": "0a14cfebead740ac3a9bf3ecef8adf54",
".git/objects/69/2b7f30bb0fbca664bd5490cdd32bfb899d65a1": "e1942e4d72a49d614a0c2d421e6a256d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/7c/ae4fc08a3a0a0ea3f93704c625071bc4841088": "3a93c3b7fa0e9de1f612cdeb19c10c76",
".git/objects/81/867acc85ee0a3f4df839e91f12ba147ffd36ec": "6c463cca51e6f9e556b6f756534e460f",
".git/objects/83/9f01d7ac891b4ca8e9f04835483dc25245f32c": "0e673965a6a506d5344c959ed54ee0b9",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8b/a261eaefb4b4174a5102920b394bb0bc20cd1e": "c5a9de50b2b281c4af494c5432108603",
".git/objects/8d/bffabbb6cb8f54e87490c33cbc5a04273b9955": "53a059327feb70522950be2e529e6661",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/a2/6244af6c732cfb3d39d9325320282ca1d0828b": "42495de5e2465b5a5bfb3d6a9b758d66",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/25361909a188848bc8ef9800236d0f022a414b": "d53429c4580dc070e360ef579aa4757c",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b0/24654a1aa3f6e9994041ec50a0682eaac2c530": "e597ca7c37909ac2d228e0c1baeea4a7",
".git/objects/ca/01d79747c0157e007993ce2b3ac052c3d1c1d6": "a5f4515354e7925ef452c5cfd8904076",
".git/objects/cb/f8bd662587a29d445c1ff6e107dd76f2833cce": "82b2b7892b8c85a144c9965825aa2f4c",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/bf1349a7f45091d3b22ec8a00153afa7ed44c3": "d2e7eb6178c8d25e2b01260ca7086e3d",
".git/objects/d0/101e197a6e0f96d21d0ccf61d6e78d2656c764": "e7ab2363191e31ba02430d1f959fe04a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/a11e9b22b6f9394b72ac525ffb6f8dc73fdaa9": "504cc49190eef6caacebb3ce79221237",
".git/objects/fe/0d73ae05b39173c1e63adcb5647721f10ca9c1": "70c11131bbfe4aaceda2c7e6bb1fde6a",
".git/refs/heads/main": "cd85ab658bed9d0a23d5e1b61520d97b",
".git/refs/remotes/origin/main": "cd85ab658bed9d0a23d5e1b61520d97b",
"assets/AssetManifest.bin": "fb6188430486783021fad3f2fdbf0564",
"assets/AssetManifest.bin.json": "40fc3ae8a6488b995539d3627c6e45d4",
"assets/AssetManifest.json": "41f878ac19d3fe6e71e8cc70ef69b5c3",
"assets/assets/fonts/MontserratAlt1-Bold.ttf": "4571c7793d017d574972bcdf28fbe154",
"assets/FontManifest.json": "1d625cd5431493cb18932b346bccce64",
"assets/fonts/MaterialIcons-Regular.otf": "88c53b3ec71c785a56ff2a04f8c38b32",
"assets/NOTICES": "c049792cc0d060c6191f45cef0d05856",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "511a2cef291603c248766be21dbfe88f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "62742573bedd465d37b85bce3e4d9e7e",
"icons/Icon-192.png": "e41e02b98fcbfc3d883777021f03ee20",
"icons/Icon-512.png": "cdbb511b4a5170ee07b81a442cf33896",
"icons/Icon-maskable-192.png": "e41e02b98fcbfc3d883777021f03ee20",
"icons/Icon-maskable-512.png": "cdbb511b4a5170ee07b81a442cf33896",
"index.html": "079e9aa3730b1acb9aebc33fef7b37e0",
"/": "079e9aa3730b1acb9aebc33fef7b37e0",
"main.dart.js": "496ca6e71a75b68ebeb87c49171e5783",
"manifest.json": "22ad62a3bc7b3093ab22bd9bfe2f2122",
"version.json": "0827e43d0473a8dba82604f9d07ef80e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
