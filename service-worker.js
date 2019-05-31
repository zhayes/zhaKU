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
    "revision": "4a60614a32626b3a505a32a86e03f264"
  },
  {
    "url": "about.html",
    "revision": "45e1bcf6dc87d4a349ab44512fdfcea3"
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
    "url": "assets/js/10.323f5456.js",
    "revision": "7e21d36ea266e85069cf15b1b47fd7be"
  },
  {
    "url": "assets/js/11.f54a7cfe.js",
    "revision": "212366ae1f80291ecaa08f7ea2e9cb4c"
  },
  {
    "url": "assets/js/12.60edcf26.js",
    "revision": "48db22315eb809b4a6f94567e7ca91c7"
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
    "url": "assets/js/15.2ca11286.js",
    "revision": "b62df05560dacc5f93c773a2def56884"
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
    "url": "assets/js/3.21c3c60e.js",
    "revision": "bd8c6c72bb712572a50e0e3822599aa4"
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
    "url": "assets/js/4.b79c9f0b.js",
    "revision": "493f0fe029910c2f107b5de6b730424c"
  },
  {
    "url": "assets/js/5.9d7f79b1.js",
    "revision": "c32c2f96f6fd4e4b08bfd689c58bda5e"
  },
  {
    "url": "assets/js/6.8c0027eb.js",
    "revision": "26f6e92f591d52ad910a94a1552ee261"
  },
  {
    "url": "assets/js/7.f46fad26.js",
    "revision": "694d22e80aaef60b20a3b4f00aedd0ba"
  },
  {
    "url": "assets/js/8.a16563dc.js",
    "revision": "f58bd025efe717ee65ff4103e4edc7c9"
  },
  {
    "url": "assets/js/9.e57e0d5b.js",
    "revision": "bf29b02601a17ddfb47fc5955b322435"
  },
  {
    "url": "assets/js/app.bb2d5c00.js",
    "revision": "47fbdb0fefd6d57bc40079b9bf199953"
  },
  {
    "url": "components/button.html",
    "revision": "ab87ed502276f43aaec66c98bc4883df"
  },
  {
    "url": "components/cascader.html",
    "revision": "cbc13d3c56aae58d5e0dc8490902fb91"
  },
  {
    "url": "components/cell.html",
    "revision": "65234076907c84565a73ad1854407354"
  },
  {
    "url": "components/checkbox.html",
    "revision": "4167bf78275afcf3add3cf39c75af93a"
  },
  {
    "url": "components/icon.html",
    "revision": "c7ca04ce422441e77a270acf9cfe74b2"
  },
  {
    "url": "components/input.html",
    "revision": "a7df4632672c27ecd452cb2fe8967558"
  },
  {
    "url": "components/modal.html",
    "revision": "01efefaa3d3ed6a5ee40706f70cad3ec"
  },
  {
    "url": "components/picker.html",
    "revision": "4e67d4e1ac0200f965c75f97f9a6ae96"
  },
  {
    "url": "components/switch.html",
    "revision": "cd3a0fbdffc0b43fa4ece3ace476d548"
  },
  {
    "url": "components/tabs.html",
    "revision": "abf4b1b72e0e0f4b3683fb1a134faffa"
  },
  {
    "url": "components/toast.html",
    "revision": "da509c3bb31a322dec2201f4af66f443"
  },
  {
    "url": "components/upload.html",
    "revision": "5dc3f2ec1cdede8a7a73806186b1784f"
  },
  {
    "url": "index.html",
    "revision": "9a945dc5ca47eb8a10f33c0400e911dc"
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
