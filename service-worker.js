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
    "revision": "0359b7c2b2c945337931599dcb5a0720"
  },
  {
    "url": "about.html",
    "revision": "4fc9ab9e6a62461ff001107f51b258d1"
  },
  {
    "url": "assets/css/0.styles.645366e3.css",
    "revision": "a54f7f9b9e720300797c186e5f080fad"
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
    "url": "assets/js/10.ffb3b0cd.js",
    "revision": "ed26aef920871460a9d9e60a6f3dc474"
  },
  {
    "url": "assets/js/11.51dbd388.js",
    "revision": "4e988e90954f8aead9472b81e849edd0"
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
    "url": "assets/js/25.e139489a.js",
    "revision": "954409280567d4c5cae626aee5663af8"
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
    "url": "assets/js/5.088b3174.js",
    "revision": "da8bcd933b17c4947824b3ae2c34c323"
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
    "url": "assets/js/app.0aacee7f.js",
    "revision": "9475ae594d1471518291f3ba23fa6570"
  },
  {
    "url": "components/button.html",
    "revision": "327c180ed722aa421b47941ec9b37958"
  },
  {
    "url": "components/cascader.html",
    "revision": "cb47a7b814dcf0287f7a9b5e7631eeaa"
  },
  {
    "url": "components/cell.html",
    "revision": "b4beb38e032da9f3a75b0f635e30dda2"
  },
  {
    "url": "components/checkbox.html",
    "revision": "551184c74e405f293ceb0d1700fae387"
  },
  {
    "url": "components/icon.html",
    "revision": "d0d581956c68ae975a2bd2957f648ca3"
  },
  {
    "url": "components/input.html",
    "revision": "77e453611e5b0fbc3c88caa991a5bdc5"
  },
  {
    "url": "components/picker.html",
    "revision": "2f16359258c802f075c6c3f930af0763"
  },
  {
    "url": "components/switch.html",
    "revision": "e46eabf1f8ce4e2d1fd489da956ec3b5"
  },
  {
    "url": "components/tabs.html",
    "revision": "dad9de6fda02ceaaf935c3178ab71c14"
  },
  {
    "url": "components/toast.html",
    "revision": "59b7d204d21eecd0c644e9839a8e85b3"
  },
  {
    "url": "index.html",
    "revision": "c39eef15e2d70d869f121f434c025c91"
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
