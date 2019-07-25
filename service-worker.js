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
    "revision": "92803693745ef760a047056974344328"
  },
  {
    "url": "about.html",
    "revision": "d757b2d34ec03178994ecfb0dee62bf8"
  },
  {
    "url": "assets/css/0.styles.14cfe03f.css",
    "revision": "31cec07036e0a140324cf3c74ce0e654"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5a95ec4f.js",
    "revision": "1354f7b1c3aa81a8ab219617a55c146b"
  },
  {
    "url": "assets/js/10.09352d3b.js",
    "revision": "8e92c065a50467f21f26c7a6517bd5ff"
  },
  {
    "url": "assets/js/11.49db1bc0.js",
    "revision": "1cc6c192bcb021b28bfa215c3ade8565"
  },
  {
    "url": "assets/js/12.809d5d89.js",
    "revision": "95426828552c71db7c3d07b5f8b7f40c"
  },
  {
    "url": "assets/js/13.979396de.js",
    "revision": "fa11c61bf02b3ed2d4b8f9739202b072"
  },
  {
    "url": "assets/js/14.71ad65b9.js",
    "revision": "7523e3f9ebccc5bd76dec66028d673cc"
  },
  {
    "url": "assets/js/15.15db7842.js",
    "revision": "766de638293f920b6df23b77081cad37"
  },
  {
    "url": "assets/js/16.6050a3d9.js",
    "revision": "806ce99c7c1f995e582878f337a340b4"
  },
  {
    "url": "assets/js/17.3baa0111.js",
    "revision": "38e62be2bf2f9e1cbfb9c4ce54a69be7"
  },
  {
    "url": "assets/js/18.4612d3dc.js",
    "revision": "463070bc381e5959da679f3bf514d02b"
  },
  {
    "url": "assets/js/19.1b86382f.js",
    "revision": "78125e673e37274581030e8333229ee1"
  },
  {
    "url": "assets/js/2.8efca0b7.js",
    "revision": "959108a1d7129e47bd09a32458d8bb8d"
  },
  {
    "url": "assets/js/20.e8f402d8.js",
    "revision": "feefc22dd2c47d2de084e5bb0cc1a632"
  },
  {
    "url": "assets/js/21.a744360a.js",
    "revision": "ca3ffefcefd4cc2907da84aaa1efe152"
  },
  {
    "url": "assets/js/22.367d1666.js",
    "revision": "9b753d81e0fa17004c1ab264be978866"
  },
  {
    "url": "assets/js/23.278a5de2.js",
    "revision": "a67c20db7c5c24bf3ff07c766e342c3a"
  },
  {
    "url": "assets/js/24.dec7d498.js",
    "revision": "e574a4a4d391423974fb188c8ad5bc84"
  },
  {
    "url": "assets/js/25.1dc83bd4.js",
    "revision": "48f9ff088894ca678978fe16819abc50"
  },
  {
    "url": "assets/js/26.5dfb8dae.js",
    "revision": "228516868968d596d7ca6df4dba89cad"
  },
  {
    "url": "assets/js/27.85046ce8.js",
    "revision": "6ba72f25b6d937c6e8a4e7727e1e82d7"
  },
  {
    "url": "assets/js/28.94f51d6e.js",
    "revision": "787ca145ac1566907fb7a90ee96ad5dd"
  },
  {
    "url": "assets/js/29.ee0c6464.js",
    "revision": "6467902e75a70b4993c1f35899320b50"
  },
  {
    "url": "assets/js/3.5b55157d.js",
    "revision": "5721b6c599a3601da3ca09c92c0a049b"
  },
  {
    "url": "assets/js/30.47da7621.js",
    "revision": "943a0f528583ed412cfc22fe4aef0551"
  },
  {
    "url": "assets/js/31.780e3dd1.js",
    "revision": "45769a8cce16a5ccb5e37d789ca53e0e"
  },
  {
    "url": "assets/js/32.80b66049.js",
    "revision": "f6cf18226e021e1f10d1d73ab460a5c1"
  },
  {
    "url": "assets/js/5.455c5a6a.js",
    "revision": "d724d74afc8f0291326dab7722ff4144"
  },
  {
    "url": "assets/js/6.1af595db.js",
    "revision": "2706fe8aec2e5a366eebb52b075fb2a4"
  },
  {
    "url": "assets/js/7.06913865.js",
    "revision": "50502d7706fd1e0ae3131a966b8118b1"
  },
  {
    "url": "assets/js/8.9b7f4972.js",
    "revision": "85ce1f6dd3654f9fb72491445da83dab"
  },
  {
    "url": "assets/js/9.231cbc3a.js",
    "revision": "12eab7fa4036d3050c2aeb714e4a2782"
  },
  {
    "url": "assets/js/app.fd691975.js",
    "revision": "e9773cbb523fdc69541707f4d0b55f72"
  },
  {
    "url": "components/button.html",
    "revision": "0ad6d2e7d9626ed6eea8a546efc06020"
  },
  {
    "url": "components/cascader.html",
    "revision": "c297f03f08fe70b3853b8127a3348547"
  },
  {
    "url": "components/cell.html",
    "revision": "2b81e6fc111c85b221f5406db2949994"
  },
  {
    "url": "components/checkbox.html",
    "revision": "348d6f12ae84b1bbe2e657711662f519"
  },
  {
    "url": "components/icon.html",
    "revision": "4d013d8358e4ea27ec8454a65cfaeb21"
  },
  {
    "url": "components/input.html",
    "revision": "04e3a3d8bf03c24c55366110958130b4"
  },
  {
    "url": "components/modal.html",
    "revision": "9a223c0ca6a22356fc412cc297aba4d4"
  },
  {
    "url": "components/picker.html",
    "revision": "89596e66162c8be672c4244d12962379"
  },
  {
    "url": "components/switch.html",
    "revision": "d816c87d95dc930c9ca2d8ec03676543"
  },
  {
    "url": "components/tabs.html",
    "revision": "be745a1d9722ad3f34f158a671c16dda"
  },
  {
    "url": "components/toast.html",
    "revision": "57cc27f8767468357c62dc31c3768e1a"
  },
  {
    "url": "components/upload.html",
    "revision": "38a198f9a36f9bd1fbc8477c052bc3d5"
  },
  {
    "url": "index.html",
    "revision": "ebdf178ca7a2d5d8acd943e738aabc14"
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
