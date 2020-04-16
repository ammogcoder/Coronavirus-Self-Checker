'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git\COMMIT_EDITMSG": "d57674cf1b64726259f76ef6dab03171",
"/.git\config": "f89612acffbc0eb35294974436fb8d35",
"/.git\description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git\FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"/.git\HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git\hooks\applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git\hooks\commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git\hooks\fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git\hooks\post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git\hooks\pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git\hooks\pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git\hooks\pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git\hooks\pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git\hooks\pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git\hooks\prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git\hooks\update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git\index": "b153a92ba4e0fbf57588ef2fadcc2ab9",
"/.git\info\exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git\logs\HEAD": "ff8919938f6741e783b1910582bdae3f",
"/.git\logs\refs\heads\master": "ff8919938f6741e783b1910582bdae3f",
"/.git\logs\refs\remotes\origin\master": "50b8b0609c771d70d6f64f3efb7c3c7d",
"/.git\objects\04\26d5a89e9da8f64929fa250add8fc38819c583": "c7d9ff28e8fef49f0fa283d4f561a2b3",
"/.git\objects\0f\816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git\objects\15\9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git\objects\16\9393fd14c663669702fce6c2ae3d298f1b91c7": "0550c67d96165df5ccd5601006cbaba9",
"/.git\objects\18\6fd41f2c0d4740e5d8ca46fb60444bf982fabc": "3a52a34b5877c91246f500d02869c2b9",
"/.git\objects\1a\a18252842ab26068643b6eabe0fa93aa579f56": "d778821874c85bd82e1ff4e1521f8c14",
"/.git\objects\20\5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git\objects\21\8c0503ee8550c96f24e0d59bc05ef3704acb5f": "38d98698974e267cbe56cd73a47117d1",
"/.git\objects\24\5311eaf85b6fb88f640fce89f4ce45d91f4ac8": "0425e5ac86a9a8a2f446363acd1ecbfc",
"/.git\objects\2a\02cd9217975d2a7f26a5531e6c4a0715f4c5c1": "16602d3feff8d0716e1692eaa0c22d24",
"/.git\objects\32\810f54bafec85c96818e31806f3f6b664a68a0": "e5d2a70ad1a6d963bef907a2980a9f31",
"/.git\objects\37\ef47c224428b283683977cc738aa695410d4f2": "eef6d3e664a00ccfb43e1e7830ea1bb2",
"/.git\objects\38\c81da05c478b925a11af01f870e6ce0873d637": "7c75ad77d93fa93edca28c1761920e6f",
"/.git\objects\3c\32a35c0c1d02667fd7fc92925cc2258ec63d16": "bbc6075ca3fba3e973d0a441b8faaad2",
"/.git\objects\42\62299e6cbcd7f11896449dd5305a7d6461055c": "72be3000b7089df5b586bc9ed1e026bf",
"/.git\objects\5b\38e509e5f2627818733d5751241de5a5c2721c": "099f3c8a850e86a1c3ea84868406f5d5",
"/.git\objects\5c\04b57f201a3deb525ba48d4ad1cd71042d71b9": "b2d71e091d980effd240691d0765cf2f",
"/.git\objects\5d\3807ae6923ddfaa1edbeb4373e96d32c412ce0": "9553bc9685124169ca374e80e41608c3",
"/.git\objects\5d\9d7c6e17febebea96e7de4b258ae72e3c34d87": "f0f595a714c5b5b4362c3ebf4031e2df",
"/.git\objects\61\39a014cdf59cc185264b3ff7f38fef9683e457": "1677cb10a636287accd958df582439fe",
"/.git\objects\61\7555d7b515ec3eb5b9aec530c755821ec69cfb": "811640c0500407bf84e5965d5915b3aa",
"/.git\objects\61\a8abdda97b5c26d502e1a8efb091f20be30120": "e97d900cc67201d4d783ed2651f4edfe",
"/.git\objects\63\fcbf7d08cc78215cc0dab5d67beced774ab8d1": "f25b40c25d6f2df1a9b164bf6b87ab05",
"/.git\objects\6a\7fdc2e0b0fa2ddb1c3451ce337d9bbd8e3f1c1": "57c8fa2821ee99be74cd8569f631f72e",
"/.git\objects\6d\41e3a97ecb065c37a05f52840abc1b119a89c1": "9fd54f34598b14380170594c2828eb05",
"/.git\objects\79\ca8c587fe3906c6e976d0045baf8717aa04437": "2b4565ad715af9a3aa3ea3bf7d2d1f56",
"/.git\objects\7d\5c6516dd99510369178308bb92cd460faeb16a": "eac49b2a80c3d786fd1027b171527f33",
"/.git\objects\81\0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git\objects\84\0e9d34e27530961879909fc911885f28a29d1f": "9ba07d5293d58bba151dcb27156a31bf",
"/.git\objects\86\6eef557be3573ba0f56be53c382171b6bd9b5d": "6eac15285237d8144adf257c02a0ea90",
"/.git\objects\88\cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git\objects\8d\aa3717fd715bf67ba142774bcc325262385e86": "34b192dfad88d2140343e8d29798184e",
"/.git\objects\91\37d86c4a0bcc85d50579eaf71b54e3ec549db5": "933a2d29edfbbea0fec0084c9973c98e",
"/.git\objects\91\74629cb19d1d8eae7f5e5002c4df09b4713c58": "03537bb29a4fccdb200cb8fcb7bf60d5",
"/.git\objects\95\19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git\objects\96\f41f67aaeb4f213f57b28bd132f89d9c609a64": "85b20d0b16ddad7875e96cd00259afac",
"/.git\objects\98\d979c0017bd3790fa4655d5ca85e3e910ee30b": "9fb47a08a354a1c72a20b91a93aaf1b5",
"/.git\objects\9b\81f1e6d2220a01039ac3813a771704b397bc27": "f6e9a8d60f9b59ace2390ac4f097cbe2",
"/.git\objects\a8\53c56912b4c7ab68809d02699b3310f16c899d": "86b527b9ebb293dcb818873b92a861e7",
"/.git\objects\ac\5a45ba4dbd2a2fe2173ab6f90bf6fc3dd33465": "62b143499002006d487c03b6cf9df34a",
"/.git\objects\ae\b93ef00665284313395c73fc778b461dc75da2": "20c89831e87e348031e1b72ec50ec982",
"/.git\objects\b3\d9f18921f4dd13faa08d8e651db71a0777f715": "162ef6d663790c2b227bbcf4567efe5c",
"/.git\objects\b7\49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git\objects\bd\8b19b62866b8126a38afd91bf5e28c6071daa8": "ba3ffc13cff609d55324022dc05fdbf3",
"/.git\objects\bf\a41d66b6403067cdf013b5e9b5de55bf276f9a": "5e59e271396247a63229404f1499773e",
"/.git\objects\bf\d19398c6c7d6325611bf68944af2a2a8fea578": "5bc3bf968eaf7c38f4ef6b30b2189a62",
"/.git\objects\c4\440a91583cfe525118391bdabf255310f70acf": "e8f5c9ff954ad7d36a58cdd9209d0efc",
"/.git\objects\c4\8f0eef0c8b80ed3f5a015594d6a740d2d41274": "529239743d8e6df21957c4ec4e51da60",
"/.git\objects\c5\32a13f38444ead4d2d716b092b0e06ad812482": "353fc0f83c3d059214f2a00f376651dc",
"/.git\objects\c7\0a5f98739ed4859d97efc1ed96c2b6a4a85f7f": "31f5dbd69b8be719582ef601ee5b6b62",
"/.git\objects\c7\34b61d3988b55605e81797ce5486abc496a212": "89c9769314733787bbaee7dca281eb0e",
"/.git\objects\ce\357b7a524057120450ec3dc01b0c0d109aba48": "7b450254589133f46d5370e665ce30b9",
"/.git\objects\d7\99de0bc3197e4492b95e9fbe11b2db54457a83": "6709de7a639dc0e0802e1aa181d65448",
"/.git\objects\d9\0312c3271d3373c632f7f42c7d641db09c95d4": "ebdfe4f89d224a890bd76615d4ad9dc2",
"/.git\objects\db\55283c1fa7cb70d7454a4b302627fb806d8575": "cb8b757ee458cb305aabe59e6ba14c02",
"/.git\objects\dd\56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git\objects\ea\64a23fe6ff699040b74daa99075e4cfb8230f7": "bfdafd7e778bb19ebff7286c6e3d96d8",
"/.git\objects\f0\11bb2f0b63b0bdd103a4e016a7b7e2c5a4d9b0": "6a9f92cc3467f3fed688d22df1fe70ca",
"/.git\objects\f3\e0a117ee6cef86f91abb22bde51f1108860c6f": "36feafd15349ec64a911444d7b850393",
"/.git\objects\f4\8360350bdfd671d180e270a1874d4329f17d14": "71b0590202e1edd919cca38215b45a26",
"/.git\objects\f8\f3319933755e37f330784755047f06dd9bec48": "9206724eacb11e11350c69c566e9b733",
"/.git\objects\fb\912f3894459db5470057dad8d7128798449165": "72a2509091be56168287d87746ced479",
"/.git\objects\fb\ef6d714c6193dc876c5dc07cc6b4e75b78b035": "9a95d094d507a88b2d6b834cb2a11290",
"/.git\objects\fc\565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git\objects\ff\b355baa99ba1731a3b873718f9bd4524626a9e": "0bdae8aaf5bad5ae2fb3539f4e274f8f",
"/.git\ORIG_HEAD": "cf52054acbd05b64f7d3cdd1db3ffe71",
"/.git\refs\heads\master": "cba9871b6bea779673abcf57dc627ce6",
"/.git\refs\remotes\origin\master": "c6af8261dbc8e86536c24bca778ff313",
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
"/icons\cross.png": "eb349640653e71459e02b9301d3cd073",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons\manifest.json": "47e7bff90ebe04f34a3000c4175e2a2b",
"/index.html": "0b47696ae7aa2915eb6640eadd7fab88",
"/main.dart.js": "6de9cdafe2730bedec1b9660e4dca94f"
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
