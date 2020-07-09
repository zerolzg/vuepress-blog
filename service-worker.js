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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5c7c36962a021b5c159d8c24487628a8"
  },
  {
    "url": "about/aboutme.html",
    "revision": "b9d6b1273a432a9b93a1733bd880c890"
  },
  {
    "url": "archive/Hexo批量修改文章的分类和标签.html",
    "revision": "97e48fc452f0ec23adf5dbade262aa6d"
  },
  {
    "url": "archive/Oracle学习之触发器的使用.html",
    "revision": "928399f7521895df40a868f2668f89b7"
  },
  {
    "url": "assets/css/0.styles.a6ff0456.css",
    "revision": "5a295baf4b66f845642571e67872d9e5"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.7007f52c.js",
    "revision": "29ec8ac1e7a00e7274d4bddbd907ff23"
  },
  {
    "url": "assets/js/10.fbff4fd1.js",
    "revision": "da2b5d974cdfdb39f5fdf1982ef4eb04"
  },
  {
    "url": "assets/js/11.a8408da5.js",
    "revision": "0462cb69a5def3a2585c3e556d669893"
  },
  {
    "url": "assets/js/12.71ffca8e.js",
    "revision": "a44d56d4099fad574bd7c861a6ccc373"
  },
  {
    "url": "assets/js/13.c4b61343.js",
    "revision": "a46299edd00e29440f1321561d795d16"
  },
  {
    "url": "assets/js/14.ab55ab25.js",
    "revision": "2ed771b85418bc24af5df1053f438fde"
  },
  {
    "url": "assets/js/15.d734a3b0.js",
    "revision": "83a69ec9c48a0ede1f8535dadb8ca53a"
  },
  {
    "url": "assets/js/16.5f46d6ec.js",
    "revision": "8788840fb359d896b655d6a0b9475124"
  },
  {
    "url": "assets/js/17.2a82fee3.js",
    "revision": "361296fd4d307d831201eff0f3409977"
  },
  {
    "url": "assets/js/3.1bd42f34.js",
    "revision": "01c7fe3bcbba9b0feae7ac89f541141c"
  },
  {
    "url": "assets/js/4.f544221e.js",
    "revision": "d0835c96712f65992afcbaa19a1d0099"
  },
  {
    "url": "assets/js/5.d77d899a.js",
    "revision": "1f297864e599b1f433c97fc1cc928a87"
  },
  {
    "url": "assets/js/6.e6c87ed6.js",
    "revision": "e5446188fa301897d3bd85eb79673eaf"
  },
  {
    "url": "assets/js/7.17a53938.js",
    "revision": "84d43969c27dc51bd567897b3993edc2"
  },
  {
    "url": "assets/js/8.50859ee9.js",
    "revision": "f8efac805d3dafc9d357fc03c724a6cc"
  },
  {
    "url": "assets/js/9.30d1c42d.js",
    "revision": "d3e248511d22b94af492790d0fdd7dc3"
  },
  {
    "url": "assets/js/app.301e0416.js",
    "revision": "0c6a8c9fa930cb3e65bf3dd8e1aece72"
  },
  {
    "url": "categories/index.html",
    "revision": "29ace8b6d355642a9691ed28048bc7c4"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "982a6e554472809c2a900b28dceefa5c"
  },
  {
    "url": "categories/归档/index.html",
    "revision": "63155edd8b71e21a1a4444e8ea22a824"
  },
  {
    "url": "icons/apple-touch-icon-152x152.jpg",
    "revision": "7d36689db81f66bb072ea6d8fc89e282"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "icons/msapplication-icon-144x144.jpg",
    "revision": "7d36689db81f66bb072ea6d8fc89e282"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "img/logo.jpg",
    "revision": "7d36689db81f66bb072ea6d8fc89e282"
  },
  {
    "url": "img/logo1.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "index.html",
    "revision": "3fd708afd93bfa2393243d97bc18d29b"
  },
  {
    "url": "java/Java并发.html",
    "revision": "e7479511a8f5ee01c5effc3f03d814df"
  },
  {
    "url": "tag/index.html",
    "revision": "e9c24c72d0e8e0de5a3cb0fd1b64a757"
  },
  {
    "url": "tag/Java 并发/index.html",
    "revision": "df9a67f45e4e3e557950f619dedf9418"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "6f8a0096aed77910e7745f2b8c162367"
  },
  {
    "url": "timeline/index.html",
    "revision": "dc70e64a771a4d7655e0e0e5913a741f"
  }
].concat(self.__precacheManifest || []);
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
