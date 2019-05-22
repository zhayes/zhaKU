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
    "revision": "889f77c121789b39ebb6f9037bd6b215"
  },
  {
    "url": "about.html",
    "revision": "0d41402a18cbfb31e9378f9376a62a88"
  },
  {
    "url": "assets/css/0.styles.0ceecabc.css",
    "revision": "07cd9429e378f326baeddb548b459e99"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.40a238a4.js",
    "revision": "286f023c3d1425981be112b04cefad32"
  },
  {
    "url": "assets/js/10.2ce02947.js",
    "revision": "b1e82f920f58b4d419f4c5a2fb755b98"
  },
  {
    "url": "assets/js/11.8ba3397c.js",
    "revision": "a55b9fb779246c4bc3cb44c53ba8fe87"
  },
  {
    "url": "assets/js/12.6b68f14c.js",
    "revision": "d9de214eefeb030d6b3fa519d46263d4"
  },
  {
    "url": "assets/js/13.0135dd0d.js",
    "revision": "406e6345e576c9e48ca357dd67556553"
  },
  {
    "url": "assets/js/14.60f21dff.js",
    "revision": "ff2a92d6493c8c5cbd77448c898cacc0"
  },
  {
    "url": "assets/js/15.8107a0e4.js",
    "revision": "94c48e9fdbf4a324b0c4d5d95492cc61"
  },
  {
    "url": "assets/js/16.a173a441.js",
    "revision": "9f6ecec11bd5294dcabf4560a46c9144"
  },
  {
    "url": "assets/js/17.bf4b2003.js",
    "revision": "3b5af15462c4de26adb14a83c69c4b30"
  },
  {
    "url": "assets/js/18.5f9fa22a.js",
    "revision": "506540d50b0004f3f409844b0408fc2b"
  },
  {
    "url": "assets/js/19.03b0d979.js",
    "revision": "c6fcffd760b703c9c9844ee1fc263760"
  },
  {
    "url": "assets/js/2.41f82f22.js",
    "revision": "3bc59929e9520e58f3ac0aa6c111a6bf"
  },
  {
    "url": "assets/js/20.12df6e35.js",
    "revision": "cf28a19931293d1844a379c93234c9d8"
  },
  {
    "url": "assets/js/21.4ccc13e3.js",
    "revision": "e2de15e6108a215ec892056bca92f410"
  },
  {
    "url": "assets/js/22.87ba1452.js",
    "revision": "5c8f99b560e3680d0ca27acd4b4d00d9"
  },
  {
    "url": "assets/js/23.2b81b271.js",
    "revision": "56fdddcfbe482ff79025019f86f28eb6"
  },
  {
    "url": "assets/js/24.ff034fdc.js",
    "revision": "2453d399ea64fc606f4ee45600ff4b8a"
  },
  {
    "url": "assets/js/25.8c18e559.js",
    "revision": "af4334fda1e0076217dd2eb9297fe236"
  },
  {
    "url": "assets/js/26.43b6d177.js",
    "revision": "a73111c333e69558bd6cd1a66f575d96"
  },
  {
    "url": "assets/js/27.3c5e5869.js",
    "revision": "ace068535fd8d2bf353ac1530882d10f"
  },
  {
    "url": "assets/js/28.8724c7a5.js",
    "revision": "ee97c86623ca199b11acff051a78a6ef"
  },
  {
    "url": "assets/js/29.445a9765.js",
    "revision": "4196a0e3dcc7985ada95d1bbcd3544e5"
  },
  {
    "url": "assets/js/30.4aa24cab.js",
    "revision": "7bef3851df87df02514a5dd1967a1148"
  },
  {
    "url": "assets/js/31.52184464.js",
    "revision": "7e6828ade99cd5815082ae2f243922d5"
  },
  {
    "url": "assets/js/32.7782b676.js",
    "revision": "b58dffea38afc2beb6e1dd8b1fdc28d9"
  },
  {
    "url": "assets/js/4.eaee1745.js",
    "revision": "2230163335d769bc49bbf63a321ec6dc"
  },
  {
    "url": "assets/js/5.157f89e1.js",
    "revision": "77ec1375022c9eda0f7900563eee9ce6"
  },
  {
    "url": "assets/js/6.7b59c61d.js",
    "revision": "7b5f8d601d9ad6cf1b0fa094ae888023"
  },
  {
    "url": "assets/js/7.f656a229.js",
    "revision": "c147e5d7fbaf2dd97a38ac09cff1804f"
  },
  {
    "url": "assets/js/8.d813f6d4.js",
    "revision": "185030c4eacc00fac1befd8676dd92a4"
  },
  {
    "url": "assets/js/9.924102ff.js",
    "revision": "7042be8cec3df86bbf4dc7988044d879"
  },
  {
    "url": "assets/js/app.4d9f6750.js",
    "revision": "f565da394937a9c1ca960336d2584e5e"
  },
  {
    "url": "components/button.html",
    "revision": "5db972fa01ee9e99299b20b20e24fbef"
  },
  {
    "url": "components/cascader.html",
    "revision": "58ae5ce46aa69e11e91ec06ceb44744a"
  },
  {
    "url": "components/cell.html",
    "revision": "f355efa20d83a3e8cd6f70c05a74ba7a"
  },
  {
    "url": "components/checkbox.html",
    "revision": "c3af6d8747a441deca08ec94f038439b"
  },
  {
    "url": "components/icon.html",
    "revision": "a116bb3c9b45c9d0a1c522150eb1ee27"
  },
  {
    "url": "components/input.html",
    "revision": "fd8fca89ac4604d182a01164ab29ec7d"
  },
  {
    "url": "components/modal.html",
    "revision": "1de119921bfbf90d3b806677508a0978"
  },
  {
    "url": "components/picker.html",
    "revision": "e17c301d1391594857fa5c37664aa20d"
  },
  {
    "url": "components/switch.html",
    "revision": "037cb4c128d100f7e48d4aea234a234c"
  },
  {
    "url": "components/tabs.html",
    "revision": "b2f1bd3667f569067eb27a196dab681b"
  },
  {
    "url": "components/toast.html",
    "revision": "7f4d3227d0302eb75fd40d2b7709e581"
  },
  {
    "url": "components/upload.html",
    "revision": "52395e74ed1d372a1b2a71cf1e8438f9"
  },
  {
    "url": "index.html",
    "revision": "ebe6ca6953a8a82ecc86253069871d11"
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
