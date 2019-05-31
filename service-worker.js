/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7917bbb56484a8ac127c81819fafd712"
  },
  {
    "url": "about.html",
    "revision": "ccc151297c669b91d4c32713da2eb8ea"
  },
  {
    "url": "assets/css/0.styles.a495866e.css",
    "revision": "7987e7cdb4cb3d2336917ceaaad7b09b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.fec7359f.js",
    "revision": "4f77c8a867c860d819fd7ea900edbe9e"
  },
  {
    "url": "assets/js/10.7ba7600f.js",
    "revision": "4a81cb4b3c407a1e5c787fd5b66ddf1f"
  },
  {
    "url": "assets/js/11.b5841f7f.js",
    "revision": "15e72da442acaee21d37baf6995ad207"
  },
  {
    "url": "assets/js/12.402288e7.js",
    "revision": "566a67315cc0ac19a3084faddb15dae0"
  },
  {
    "url": "assets/js/13.77cddc3a.js",
    "revision": "8a7b73e3f9c1a6608aa97e47f245ce9e"
  },
  {
    "url": "assets/js/14.c8c14d4e.js",
    "revision": "bf8539e05ed992dbc1718deaf2b500a2"
  },
  {
    "url": "assets/js/15.2b803ae9.js",
    "revision": "0a4f9e8da43093c7b750ce04ad18e663"
  },
  {
    "url": "assets/js/16.d57edbbd.js",
    "revision": "867641b13e1a82fcebfa07dcf58c63f4"
  },
  {
    "url": "assets/js/17.6988335e.js",
    "revision": "60a27ee2189183a14fd2fe83788217fe"
  },
  {
    "url": "assets/js/18.bb40b179.js",
    "revision": "4df58c5fb2e83598dfb5728cc71ee983"
  },
  {
    "url": "assets/js/19.13eebd10.js",
    "revision": "6976b4b6dfb88ef5968352a4190362e7"
  },
  {
    "url": "assets/js/20.1c85893a.js",
    "revision": "de361b3933d1d93420f74edf7b626294"
  },
  {
    "url": "assets/js/21.68b41aa0.js",
    "revision": "7a0d5c3e109dd46ef80c7545df0d1d36"
  },
  {
    "url": "assets/js/22.5e3ad333.js",
    "revision": "7e8bfa9d2150812ccdfaaf3290afeb37"
  },
  {
    "url": "assets/js/23.1b3fdc9d.js",
    "revision": "8d300ae715da3898874688c38633b6e5"
  },
  {
    "url": "assets/js/24.b081e126.js",
    "revision": "6b0092dc9c5b90eac3cae5a32c67db7a"
  },
  {
    "url": "assets/js/25.86c52b61.js",
    "revision": "db4fcfc71b95630cf84197f9ae4f8aa6"
  },
  {
    "url": "assets/js/26.a82e68d8.js",
    "revision": "7bb386f99726fc7e988dd26d238d8f61"
  },
  {
    "url": "assets/js/27.5532b063.js",
    "revision": "04f5ac8cd2b726189749683c79ee2971"
  },
  {
    "url": "assets/js/28.bc45fd36.js",
    "revision": "65b70fe3eacc34888f51a74b4993341f"
  },
  {
    "url": "assets/js/29.9b2343db.js",
    "revision": "76d9d529047752d9f95f44536b889db8"
  },
  {
    "url": "assets/js/3.ec2c354e.js",
    "revision": "67f16bdd894dbf8eb367058a68956bf3"
  },
  {
    "url": "assets/js/30.d6e6e14c.js",
    "revision": "595976d8502b31ead390dae918bfae70"
  },
  {
    "url": "assets/js/31.eb6ab8a8.js",
    "revision": "b9b95da67abaf9b97f60136ac7aa934c"
  },
  {
    "url": "assets/js/4.b66b4cf9.js",
    "revision": "1ed77df5bda120f0e0a2245ee3adb75b"
  },
  {
    "url": "assets/js/5.b1bc3f01.js",
    "revision": "b24e9d74c576e054019563ef49bdf1cf"
  },
  {
    "url": "assets/js/6.76dad69b.js",
    "revision": "c822a9c23ba0567277adff11a849062b"
  },
  {
    "url": "assets/js/7.f4abc219.js",
    "revision": "5082df64900d4330eacfd4b4c0867546"
  },
  {
    "url": "assets/js/8.5a319706.js",
    "revision": "e8990f3c46533ce3a7db46e53b80d9b7"
  },
  {
    "url": "assets/js/9.508762c6.js",
    "revision": "3fc0bb14b6e8b9f857220866d2edc4d4"
  },
  {
    "url": "assets/js/app.193a76f9.js",
    "revision": "93119683abadf1d8ffd12578b3e11eaa"
  },
  {
    "url": "components/button.html",
    "revision": "83fd834f35b7003ebb41b4a9f1027204"
  },
  {
    "url": "components/cascader.html",
    "revision": "a8ccd1f587c6c82f03ae6930ca0a32e4"
  },
  {
    "url": "components/cell.html",
    "revision": "a2d32fdd9e572a514d9ceac421afa8f8"
  },
  {
    "url": "components/checkbox.html",
    "revision": "6587d503b9aeefa802041958a0199cc0"
  },
  {
    "url": "components/icon.html",
    "revision": "b2e034d01b551f80335460ee9cf999f1"
  },
  {
    "url": "components/input.html",
    "revision": "058b16ebd133e2700c31071039647dfa"
  },
  {
    "url": "components/modal.html",
    "revision": "735883a5392ca943671e1263b3fa944f"
  },
  {
    "url": "components/picker.html",
    "revision": "05ceb1d4a5f81faf3d47b49529902375"
  },
  {
    "url": "components/switch.html",
    "revision": "dc1f43eb0d96e593353af6cedc5bb8fc"
  },
  {
    "url": "components/tabs.html",
    "revision": "c6c0a9759aeba549bc090d98bb386efc"
  },
  {
    "url": "components/toast.html",
    "revision": "7482570a48c07ae4301f028b65c98fc8"
  },
  {
    "url": "components/upload.html",
    "revision": "e0f49072d9d14795300f18511b486bb1"
  },
  {
    "url": "index.html",
    "revision": "4551907be7f1f04c8af3222d7d75acc8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
