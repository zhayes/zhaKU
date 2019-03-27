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
    "revision": "833abe38080aebc973e31e9304b6dcaa"
  },
  {
    "url": "about.html",
    "revision": "744f0d613a7bbbce38bbe3c3ada3d7db"
  },
  {
    "url": "assets/css/0.styles.60cee869.css",
    "revision": "bdd92b70afa95b3da604297f67a92fd6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.222160fd.js",
    "revision": "579ef24b7d7589a685e52323984a7792"
  },
  {
    "url": "assets/js/10.166d5ace.js",
    "revision": "5a022270684fc14198f1c239106256df"
  },
  {
    "url": "assets/js/11.25fa16e1.js",
    "revision": "52c7f192181ce6d9aa5773689056a678"
  },
  {
    "url": "assets/js/12.eb8786d2.js",
    "revision": "5f2ddbe3ca7424ac9b8a5c724d6aced5"
  },
  {
    "url": "assets/js/13.893ca68d.js",
    "revision": "e9792786dc4b305e95c9136110d35b8a"
  },
  {
    "url": "assets/js/14.efe35ffe.js",
    "revision": "702e4ffba5ee04c11b746365dde2f612"
  },
  {
    "url": "assets/js/15.56a9e495.js",
    "revision": "c83276b7e65b941445083757fe9e6019"
  },
  {
    "url": "assets/js/16.558a7a1a.js",
    "revision": "d583d5605cd6fd84dee24fc24a098b28"
  },
  {
    "url": "assets/js/17.659ba988.js",
    "revision": "e4585f239c50b0214f761efd9a31fa09"
  },
  {
    "url": "assets/js/18.24259048.js",
    "revision": "41187fc27f1e56efb32fb65432530c57"
  },
  {
    "url": "assets/js/19.faa2426c.js",
    "revision": "2f166781cae0201b0b77fb3ff6318c8f"
  },
  {
    "url": "assets/js/2.49bbe0db.js",
    "revision": "d89d6884ef9581c3b2b679b746d89613"
  },
  {
    "url": "assets/js/20.6e2500de.js",
    "revision": "a4dc19f9e60d36d554a7458195ee6eb9"
  },
  {
    "url": "assets/js/21.9ec83233.js",
    "revision": "9d077883c5614b3d98e18c700e9a13d8"
  },
  {
    "url": "assets/js/22.64aa5234.js",
    "revision": "ee3cf4ca5a3c235f72895e07bee24703"
  },
  {
    "url": "assets/js/23.0572895e.js",
    "revision": "2c61b32aa1a4e273811a5f1427b348fb"
  },
  {
    "url": "assets/js/24.e826e66f.js",
    "revision": "11a23853aa3c1f947a41927e332e4c25"
  },
  {
    "url": "assets/js/25.b993afea.js",
    "revision": "3c34687b9a143cfe9a1e681763cd265d"
  },
  {
    "url": "assets/js/26.c743a1a6.js",
    "revision": "4c3754ecb599b9801e18ac83d262f7c2"
  },
  {
    "url": "assets/js/27.2973ae73.js",
    "revision": "a852946f7645270f4f056a2f984fc28c"
  },
  {
    "url": "assets/js/28.a5f0ddc2.js",
    "revision": "d4c19907c3163e3731c60a6f9b0caaee"
  },
  {
    "url": "assets/js/4.e469db1c.js",
    "revision": "54c978a13a95d34647e1308b8d0e8079"
  },
  {
    "url": "assets/js/5.82034ee3.js",
    "revision": "4a4ac9e0f8da1941bb6b7dc1ef99af8a"
  },
  {
    "url": "assets/js/6.59587035.js",
    "revision": "21453b2906f1f84d92d89e127a031423"
  },
  {
    "url": "assets/js/7.83aab7da.js",
    "revision": "95c38fa3d9482da352faa4a204dc362c"
  },
  {
    "url": "assets/js/8.369caaf4.js",
    "revision": "66fb7e16b8a68e6837ef41fdc49d3933"
  },
  {
    "url": "assets/js/9.5a0b4d2f.js",
    "revision": "11e1b839a8523466ea14f6dd9af294e4"
  },
  {
    "url": "assets/js/app.c3eea501.js",
    "revision": "d94b1e8ba5956e1b3d6991c51176fd4b"
  },
  {
    "url": "components/button.html",
    "revision": "519a81446878c0a8c0bc7fa1b4629353"
  },
  {
    "url": "components/cascader.html",
    "revision": "ae9de786f675e36d13e951b20567408c"
  },
  {
    "url": "components/cell.html",
    "revision": "24a47c8611f4606a23dcf99f54bbf27f"
  },
  {
    "url": "components/checkbox.html",
    "revision": "9e9d5048320bb2cfd465aefaf3050a0a"
  },
  {
    "url": "components/icon.html",
    "revision": "9c94f910175ca9df6a852d6316c0a651"
  },
  {
    "url": "components/input.html",
    "revision": "1545e3aed007a5fbbff27b3c211b9ef4"
  },
  {
    "url": "components/picker.html",
    "revision": "2648db671c158a73b820850c504bafe3"
  },
  {
    "url": "components/switch.html",
    "revision": "9bf3121650f9a026586bfa3daa773795"
  },
  {
    "url": "components/tabs.html",
    "revision": "778c4862e7ca5e639ce3cda6c0f2bb4c"
  },
  {
    "url": "components/toast.html",
    "revision": "9285f9764a363e57608657e01809e1e0"
  },
  {
    "url": "index.html",
    "revision": "667b57f37a9f9b4e14b99c7ef7b4a355"
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
