'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ff966ab969ba381b900e61629bfb9789",
"index.html": "25fd27b544a234a7fadeb720ff60c1fb",
"/": "25fd27b544a234a7fadeb720ff60c1fb",
"main.dart.js": "2f263f5947e84edcd824857272f1e758",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"assets/AssetManifest.json": "6baafae730bac66c2ea8157cb576186b",
"assets/NOTICES": "c7d5544d6049596060f311fd88906905",
"assets/FontManifest.json": "9fe091ca21b27672c81c0150044b153a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/coinbit_ui_mobile/fonts/DMsans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/packages/coinbit_ui_mobile/fonts/CBIcons.ttf": "a75e49cf4ff02d36b1d3a747581572f3",
"assets/packages/coinbit_ui_mobile/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/packages/coinbit_ui_mobile/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/packages/coinbit_ui_mobile/fonts/DMSans-BoldItalic.ttf": "f83322c859de9fce83f15d5e6714d78d",
"assets/packages/coinbit_ui_mobile/fonts/DMSans-MediumItalic.ttf": "a72ea4b3c89082b9308ef3fcabff9824",
"assets/packages/coinbit_ui_mobile/fonts/DMSans-Italic.ttf": "1ea925903e098f94f5c51566770a2da8",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_algorand_dark.png": "d00b1168073b1600ff1b6955079c6709",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_avalanche_dark.png": "009ee242f62c7d3512a12579d79e2a1f",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_uniswap_dark.png": "c141b7dacbf19bc5658401c3c800ca3d",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_XRP_dark.png": "735de5f008604e4775f20393716e24e6",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_terra_luna_dark.png": "bd40218475535ca732517233f32177d6",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_internet_computer_dark.png": "1be29df49281e384506f36e389f11e0e",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_bitcoin_dark.png": "b991eb8120caea173de5e035032f6803",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_polkadot_dark.png": "c01debbdd1ade4d57847b2f21856ab7a",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_chainlink_dark.png": "e407658a254dfacf4216d73b0fe8aa57",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_ethereum_dark.png": "86c6769cc736e9f4a883905e7893334b",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_axie_dark.png": "d2beeaa03651477f4600f933b20caf11",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_ethereumclassic_dark.png": "d36ee870e22746aaefa9d0a98e684784",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_fantom_dark.png": "1c304aad493c77887cd585b9ec2a556c",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_polygon_matic_dark.png": "d87772a7fba46fc11b24ea279ea79a81",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_tezos_dark.png": "5cc4583b61c21462e8f483eb116fac1c",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_litecoin_dark.png": "ed7b3f317e5293a3ddeb51edd27dc9b6",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_binanceusd_dark.png": "110e4432438f1be3b018ba35798dc6cb",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_tron_dark.png": "0aad9bd1319781409428fdc765ecf118",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_daidai_dark.png": "214190a31f4ba6175c9f19e2e36829fb",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_stellar_xlm_dark.png": "8e30a8b5140fd13a209b88f4f2ec7f55",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_binance_coin_dark.png": "fbd2575ef31fc5e1de4f4fd5e24baa6b",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_hedera_hashgraph_hbar_dark.png": "d7af874b856a7361228c3091a848f31a",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_ecashxec_dark.png": "6d8e45c37c7dc8b6b1c35d14313ef6e7",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_USDcoin_dark.png": "c7d612c02f3ebdeece0ec169e78c6f7d",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_shiba_inu_dark.png": "c81159428831c1089b99b3dc97d6a311",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_FTXtoken_dark.png": "2624ccfa48a301c700bb37d341aa044d",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_dogecoin_dark.png": "9eb8609c6f09e0a7074545df92235328",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_USDT_dark.png": "2d2c720513ede537a9c4dcc99b653103",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_rupiah_dark.png": "4c264bfce8cf320b3334656daa573f9d",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_bitcoincash_dark.png": "ac4704f3d886e10976f7f85cbc72bd78",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_theta_dark.png": "7ed927119dd7823127026cd989f9b092",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_solana_dark.png": "4da1b04972ddcca72755c4e2e0b00533",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_pancakeswap_dark.png": "c75c666a70a5c86480b6f19e221bba24",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_cosmosatom_dark.png": "c9c3e8d8cfd642f4d144afa603451979",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_filecoin_dark.png": "1a9c631d30ffc907a56c1e14b48defbc",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_vechain_dark.png": "9e516d80ad062ad00b7bd6895c77d9ba",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_elrondEGLD_dark.png": "778b0966581bbac001a6f1deff40f5fd",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_dark/logo_crypto_cardano_dark.png": "0d169403e0f4f1cbb9ac865d5e3fbc0a",
"assets/packages/coinbit_ui_mobile/assets/logo/bank/logo_ewallet_ovo.png": "08513d24827df30c46bfe82b43d6377c",
"assets/packages/coinbit_ui_mobile/assets/logo/bank/logo_bank_other.png": "710224af6547f17aaf9b132c04194e54",
"assets/packages/coinbit_ui_mobile/assets/logo/bank/logo_ewallet_linkaja.png": "4a5f6bc9894f73bac055c78f4050adad",
"assets/packages/coinbit_ui_mobile/assets/logo/bank/logo_bank_bca.png": "334be162b2b16e6ea64be27677e6eb8a",
"assets/packages/coinbit_ui_mobile/assets/logo/bank/logo_bank_permata.png": "2275392b8e76220f7280b986bc30fefc",
"assets/packages/coinbit_ui_mobile/assets/logo/bank/logo_bank_jago.png": "77f8948c70e9f334a29daa10243895a1",
"assets/packages/coinbit_ui_mobile/assets/logo/bank/logo_ewallet_dana.png": "371b0c9eac21fd07c46d7d548c99463a",
"assets/packages/coinbit_ui_mobile/assets/logo/bank/logo_bank_bni.png": "4835ddcc4b99d105a29fbb181ab75f4f",
"assets/packages/coinbit_ui_mobile/assets/logo/bank/logo_ewallet_gopay.png": "2f839b345076b8c7a71cf45b82e632cb",
"assets/packages/coinbit_ui_mobile/assets/logo/bank/logo_ewallet_shopeepay.png": "6e8aa2e32ed8a9241d935a4da1d95e5e",
"assets/packages/coinbit_ui_mobile/assets/logo/bank/logo_bank_cimbniaga.png": "0e27f7d7942cba7035048553a5cf33e4",
"assets/packages/coinbit_ui_mobile/assets/logo/bank/logo_bank_mandiri.png": "846c585c4336da5614d994d8d6363c94",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_theta_light.png": "4e09c280a21889c9e7e6d28cfda5bba0",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_daidai_light.png": "04d13089ecc76ff4388c0313af4d41f6",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_tezos_light.png": "115c9de030980a478489f64f3a530f89",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_algorand_light.png": "7e62f4e77d94742e6c7a7b95ffd46dd1",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_USDcoin_light.png": "5ff53c5e68c67c8e09297ef877481c92",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_ethereumclassic_light.png": "3b06eeecc2b1fff4c014a0918ea94496",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_binanceusd_light.png": "a60d1e6e49995a2117b30c9814ba74f7",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_internet_computer_light.png": "355d2b5dd2e679110577b55c4c490dfa",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_filecoin_light.png": "e00f99daac997977617c60008daec971",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_fantom_light.png": "dd7e1a8ceaed5cad037afc1f0797ed8c",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_XRP_light.png": "769c5ece99d29e54e040a5866e546992",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_axie_light.png": "1fe35d5b17be7470a0f84f68d2a444be",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_hedera_hashgraph_hbar_light.png": "9e208b2007851d176ec76e35b6bec129",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_bitcoincash_light.png": "0fc4b546309b6194b4836b4a2bbd3b08",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_elrondEGLD_light.png": "f58f063376c2c8610aa16b16462fdefc",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_USDT_light.png": "53e5d62c4b0919505e3190e633395f45",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_shiba_inu_light.png": "84a2d888b901c72623d967af019588ab",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_ecashxec_light.png": "ebddde820c6fb1cb52672e9438707fb8",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_binance_coin_light.png": "876b1fc3edc1a265c44556f385732639",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_polygon_matic_light.png": "5c3242cd3a95d37573bb070454059f9d",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_avalanche_light.png": "4d751847e39ab549200eda667e68208d",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_solana_light.png": "7db6e95aafe53d5742d419d060b60455",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_vechain_light.png": "a8154e3fd4c5df92d205726077dbff1e",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_polkadot_light.png": "66eff01894bcdcfdc96f0dd7666532c7",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_cosmosatom_light.png": "9a8019ddc1eb0b1d35a5c4f57939e377",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_litecoin_light.png": "2d1b38ac76d1145c7afe2ea553a707e5",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_pancakeswap_light.png": "7c1e1cba43812da86076dc7c7cfda04c",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_cardano_light.png": "efc2819258bbeb2ec3c21c5738f557ea",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_ethereum_light.png": "9e2bf818ae9a25d88fa37d21de6d265c",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_rupiah_light.png": "b71ca6b52c11df1edd3a68f9c0bece4f",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_tron_light.png": "39ae723320b3bd984457c89c84857445",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_dogecoin_light.png": "85c7ff48e589e27afeaf2a1bf9506908",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_bitcoin_light.png": "4a2c5a405142eacb6b72b5b6a877c8a6",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_stellar_xlm_light.png": "b37f795f8727cb71db198ab508b63b02",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_terra_luna_light.png": "433d1564397595e93d6464d75a577ec0",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_uniswap_light.png": "d844b3c4514bf308ac9187ae503305bc",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_FTXtoken_light.png": "68fd7288bdc0164b45d05b37c02801a9",
"assets/packages/coinbit_ui_mobile/assets/logo/crypto_light/logo_crypto_chainlink_light.png": "1a4aa9ae99ee4e5913e1846f0a89f086",
"assets/packages/coinbit_ui_mobile/assets/icon/ic_faceid.png": "536ddcd0df6f4a16450061be1f008759",
"assets/packages/coinbit_ui_mobile/assets/icon/ic_lock.png": "504b577069dfd470370433f20ef1bb73",
"assets/packages/coinbit_ui_mobile/assets/icon/ic_fingerprint.png": "585505eb1aa1bde4dcaf1ea09920f184",
"assets/packages/coinbit_ui_mobile/assets/icon/ic_celebrate_active.png": "2c44869802cdaf6c6e6bd17b1f3af026",
"assets/packages/coinbit_ui_mobile/assets/icon/ic_celebrate_inactive.png": "749f74cded0820fccc580534d9430569",
"assets/packages/coinbit_ui_mobile/assets/icon/ic_shield.png": "ee813fb4afdc1be3cbb6789da60f8db4",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
