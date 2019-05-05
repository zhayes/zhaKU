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
    "revision": "fa07eebec9d73c6c04052d3bb8e562f5"
  },
  {
    "url": "about.html",
    "revision": "afb62202b0d0413d6dcf877a7c74134d"
  },
  {
    "url": "assets/css/0.styles.a95cd86c.css",
    "revision": "45f24051abf4e076c6faf1b3c83c339c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6fb8de24.js",
    "revision": "4302ab45a11b42a94eaff998b6218469"
  },
  {
    "url": "assets/js/10.34abeabc.js",
    "revision": "127fa721a634261830788083203dcc90"
  },
  {
    "url": "assets/js/11.bf43a619.js",
    "revision": "51a4943f0bfd4c8ce082e742d809ceab"
  },
  {
    "url": "assets/js/12.0ac0c8cf.js",
    "revision": "3058d7c55656acd9e4e707e5578c199b"
  },
  {
    "url": "assets/js/13.9dbd5b9d.js",
    "revision": "e328833e3cac4ea23ecc7495ba84f1e5"
  },
  {
    "url": "assets/js/14.00f99a22.js",
    "revision": "74cccd2e83ddfb48df63a3c089f292d9"
  },
  {
    "url": "assets/js/15.8a75c06b.js",
    "revision": "26f06a0591b53d69f08144b1fee8739c"
  },
  {
    "url": "assets/js/16.9fac9b0a.js",
    "revision": "af11611305b863caae77e716e652d385"
  },
  {
    "url": "assets/js/17.bf43b148.js",
    "revision": "5104026f8461cfbd5900f08bf2a37a95"
  },
  {
    "url": "assets/js/18.87124e50.js",
    "revision": "8c374cbbff87715ddd677e4dec0adc63"
  },
  {
    "url": "assets/js/19.a33ee043.js",
    "revision": "83fa8e336054288b68ac48760e6d4d80"
  },
  {
    "url": "assets/js/2.387ba2de.js",
    "revision": "9e7b447e84ebd5d6afeaad1001f4bcde"
  },
  {
    "url": "assets/js/20.36204aea.js",
    "revision": "2d54ae1b672fb5f1b2cabc8ddb946bea"
  },
  {
    "url": "assets/js/21.de4dcbe3.js",
    "revision": "88708760dc6a7fd527333becedf641a9"
  },
  {
    "url": "assets/js/22.5ee0bd02.js",
    "revision": "99a66675db2deaebce850e24968ad774"
  },
  {
    "url": "assets/js/23.ba4e1630.js",
    "revision": "e38cad6daad37a1b8f598c9946afdb84"
  },
  {
    "url": "assets/js/24.c28e652e.js",
    "revision": "156ff2da50229954592bd357646da7b5"
  },
  {
    "url": "assets/js/25.73828de6.js",
    "revision": "d8b3411ca791ce69ec2487d9f2c7758e"
  },
  {
    "url": "assets/js/26.11ace26d.js",
    "revision": "9c47cbb3f4d3c9bfb0e6282488b480ec"
  },
  {
    "url": "assets/js/27.a5e706ca.js",
    "revision": "378f4c3fb56036e5da0600d6d7471880"
  },
  {
    "url": "assets/js/28.42b53345.js",
    "revision": "720ef34b03cfb2fef4b1654306171d95"
  },
  {
    "url": "assets/js/29.d1346a9b.js",
    "revision": "bb46bc95f9ce943128e4fbee5e42109e"
  },
  {
    "url": "assets/js/30.24dbf11c.js",
    "revision": "e213a955c058b56a7cb5694c11a9eb8a"
  },
  {
    "url": "assets/js/31.ee616ed7.js",
    "revision": "79d3385f53a10a8c218602c27789bc07"
  },
  {
    "url": "assets/js/32.38b73ef4.js",
    "revision": "b1b5c3dc27a1d336e0b26e96abd0de5b"
  },
  {
    "url": "assets/js/4.b2ec2829.js",
    "revision": "4a48e1b6d9c306f3868bdd3d24828261"
  },
  {
    "url": "assets/js/5.138a7e61.js",
    "revision": "8b589c26e4963c46a7ad1cee500302cc"
  },
  {
    "url": "assets/js/6.fa7b0dc2.js",
    "revision": "0f38b223be7a40d6e636aec4b63b1dbb"
  },
  {
    "url": "assets/js/7.493215a9.js",
    "revision": "8a50f4b3819fa77cc374dc99d3635b28"
  },
  {
    "url": "assets/js/8.622a3629.js",
    "revision": "24f843eabbee25cec057bbce285622fc"
  },
  {
    "url": "assets/js/9.ab20393c.js",
    "revision": "683fb5bb7af50d7fb4fa1133ae7b298b"
  },
  {
    "url": "assets/js/app.876b4102.js",
    "revision": "2348fc44869ffc69adb2b776643b029e"
  },
  {
    "url": "components/button.html",
    "revision": "069453b4941acdf4527d3c4ffd1e2f72"
  },
  {
    "url": "components/cascader.html",
    "revision": "013bd5db86530afdd4ca84b2289d2933"
  },
  {
    "url": "components/cell.html",
    "revision": "281594c989bba09678a9923f2c111bd0"
  },
  {
    "url": "components/checkbox.html",
    "revision": "14e8316aa75ab26b9d26dcef4ed6287b"
  },
  {
    "url": "components/icon.html",
    "revision": "d5317c53ee968dab07e55821b38e8203"
  },
  {
    "url": "components/input.html",
    "revision": "0b17af0106a15d8c366bd1bc57e36946"
  },
  {
    "url": "components/modal.html",
    "revision": "e72caa0300100df483e2649f058c5c57"
  },
  {
    "url": "components/picker.html",
    "revision": "8af6eb56f3a65824e2074281f5d36eb6"
  },
  {
    "url": "components/switch.html",
    "revision": "60f2fbac8f68c5273f4902c988577278"
  },
  {
    "url": "components/tabs.html",
    "revision": "66024dca87ef465e0aaaba57bf6dbb5c"
  },
  {
    "url": "components/toast.html",
    "revision": "dc9bbbc1b2d8f3774704a139af258522"
  },
  {
    "url": "components/upload.html",
    "revision": "c0b5463ab5f4ebe2a44a265212ee3ae2"
  },
  {
    "url": "index.html",
    "revision": "ff52fafbb0d56b1b76f7a8450d5c36ab"
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
