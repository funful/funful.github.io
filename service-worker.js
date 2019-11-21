/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2018/05/25/linux+Qt_c_conplicationMplayer/index.html","0c3fc1338c7cd6a2710d64471b3323cd"],["2018/06/08/Qt+ARM_fontsandcolor/index.html","9956edfc68d147dd0e869e792bc447db"],["2018/11/21/Linux_LinkSharelib/index.html","eb3b330250a41ae5ee6fcb2d0ee5e12b"],["2018/11/30/2018-11-29-this-pointer/index.html","b5366930c584be4f93f80630e2e2f9f3"],["2018/11/30/2018-11-30-keyword-return/index.html","3a9a3a0c33d2569dabd66aa6250fd009"],["2018/12/02/2018-12-02-callback-function/index.html","3553c16219894085acf8598443751441"],["2019/01/15/Linux的文件IO/index.html","6eecd66132fa47fe9c20709c909d2176"],["2019/03/09/2019-3-9_RAID_Description/index.html","2ee91cad2c4d3820c3e74e641bc2d643"],["2019/03/30/2019-3-30_SSH/index.html","6223f5663b3809b289795ac719d40c2f"],["2019/05/12/JZ2440_uboot_2009_11_transplant_1/index.html","df2140efba51ce628f7ba6eac18e8b7b"],["2019/05/13/JZ2440_uboot_2009_11_transplant_2_支持串口/index.html","a2772226db70ca6fd7c4b14e0c4041c4"],["2019/05/13/JZ2440_uboot_2009_11_transplant_3_nor_flash/index.html","25424dd0df19591579866077487b7c9a"],["2019/05/14/ESP8266_Connect_TO_PhoneAndPC_WithTCP/index.html","ffc8e93ccf7d5151e21db9d5e4ecdce6"],["2019/05/15/Technical_articles_1/index.html","6ba5d69d9936945c4325d014fa29da24"],["2019/05/16/ESP8266_SDK_api_HelloWorld/index.html","c8d916c85b952d512b65d9d46c63c230"],["2019/05/17/Orange's_Implementation_of_an_operating_system_1th_build_environment/index.html","fd71ae0722de421e7b3129d4287eaf21"],["2019/05/18/STM32_FreeRTOS_config_1/index.html","2f0294d3ca9f15f408ea9986b565f852"],["2019/05/19/STM32_FreeRTOS_config_2/index.html","b2eec01827d13a8f13426c41b8d8c8e3"],["2019/05/20/ESP8266_SDK_MQTT_LED/index.html","77cdd2d3af78415257705a0eb585c23a"],["2019/05/25/2019-05-25-V4L2/index.html","07916a18ec4f5f4e63ddab8053b681e5"],["2019/07/30/2019-07-30-QEMU-ARM-A9-TFTP-NFS/index.html","8ad4a300e75995c4532ba62405eb9cc4"],["2019/08/24/2019-08-24-C-Assembly/index.html","015fb8d1c1ffdece23c6e2db111e7a2e"],["2019/10/19/2019-10-19-全志A64编译固件报Fault/index.html","c2f895ff28e75975212b8f59d11ca535"],["about/index.html","040b5ddbfa5037b4b38f88c5efde27da"],["archives/2018/05/index.html","2f40417eeac0113485cb81b34cfb70ae"],["archives/2018/06/index.html","e7f5c245b4f20d3f9a7017e5077b38d5"],["archives/2018/11/index.html","3363815be3cb6ebcbc7ca92b8596f0c8"],["archives/2018/12/index.html","ae8e51491d6c29eeb18ee293dbb3b0c1"],["archives/2018/index.html","761ae1e9590ce41ae1bc57f43c9f145d"],["archives/2019/01/index.html","86d0f5028fa8b4d5208a07e93859d827"],["archives/2019/03/index.html","13dabee308f0b2b3568f1f9cca6f9d90"],["archives/2019/05/index.html","81b2055906e7529e325e7ddef002a523"],["archives/2019/05/page/2/index.html","74ba17a945ad817f78675add3a6f1613"],["archives/2019/07/index.html","e839acfd968b42149cc1d713b88d080f"],["archives/2019/08/index.html","46404737e2117875e9512b8c5a4cbee0"],["archives/2019/10/index.html","f07167fb91d0e7e5162718e52f7eb64d"],["archives/2019/index.html","a2ba079e28e1ce5bf46337cc6eb341ea"],["archives/2019/page/2/index.html","8fa796e05d7bdcad21265f63de966b1f"],["archives/index.html","5cda37a7fb722c08b9710d94ef6a2a8f"],["archives/page/2/index.html","412f405d79e2a06c9b669e01132fd4eb"],["archives/page/3/index.html","cc53ce20c996b2f1615049c062e1b20c"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG调试/index.html","aeef481ea081d204d4c8c1c022885ab8"],["categories/C/Qt/index.html","bd4aca9870daac9f5bf7e801edfaea15"],["categories/C/index.html","f18644abdfd8337dc374af34c71d9756"],["categories/ESP8266/index.html","5f8e2c2755a4b695b973ad6e48a16b35"],["categories/Linux/index.html","33013cbb58fb48fdd3a3887ee4732d11"],["categories/Qt/index.html","499c00b1a58499300ba6aeee48753f3b"],["categories/STM32/index.html","72964cdcb07f82cb96a4222dc16294bf"],["categories/index.html","6dc6c52ff7166130f1a14aca2cd87a19"],["categories/uboot移植/index.html","6814ef2f49022f6cca8b6c61a467cb61"],["categories/各个方面方案解决/index.html","97de8a64aa798d4aa0d34c20336211cd"],["categories/操作系统/index.html","e027c9e90f0d3b9e19069dafc42c7178"],["css/index.css","809b8a47e325fbd01c584c3c3cafac3d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["google38fa67c7bab15712.html","22eddc833ea4a09d2c2bd7d7c470ae6f"],["images/1.jpg","aea58ef399f1d1245eada850385d5802"],["images/avatar.jpg","bfec141a41b9ab3bf3406ece8d4378d0"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","d49d19f8183a0ccd575df564d8b784cb"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["page/2/index.html","96eb42da16aa5d4dc637b918ec1b50eb"],["page/3/index.html","2af2369aa4f0f86c2db7adca2d09dbd9"],["tags/4412/index.html","8d951be693f8b9fc11e0a6afadc1ba5e"],["tags/ARM汇编/index.html","1f7608c6b5a359cd879d5d92e7a7c099"],["tags/AT指令集/index.html","99f627b312acb3ba9f0e487b9796d4cc"],["tags/C-相关/index.html","971a67c9eb7fedaadb5afddb03e56d89"],["tags/Digital-Signature/index.html","cb53283d665bd4866a028dfca264acb0"],["tags/ESP8266/index.html","bdc80d3d8c19956dcabda7e813e630ea"],["tags/FreeRTOS/index.html","876d3efb878f6545347ebda54492a769"],["tags/IO/index.html","429183f36b7d67b39d010c219c0fa9f3"],["tags/Linux/index.html","09ff5cfbeefc9cff5face08ded1a0700"],["tags/MDK5/index.html","1fa778199e6036905bde98a4773be9f0"],["tags/MQTT/index.html","af3a8fe7a67b45f9ab2d321512d42908"],["tags/Mplayer/index.html","46f4fc4890dd217e5ce611fc0ba3dabb"],["tags/Nor-Flash/index.html","f0d3cd627651fd38516bcce6675ea66c"],["tags/QEMU/index.html","b2c3bf6d31b31ca617a5138dadb3b098"],["tags/Qt/index.html","b22d89ea0b85c37af9197c821b1fde26"],["tags/Qt输出日志/index.html","0b99b4ca8d7ef5a81db2e191be7ce633"],["tags/RAID/index.html","1fc4a02e8549145dbabb168f77956bc2"],["tags/SDK/index.html","ac23ccc1dca4baff86456c4eff8fdd4b"],["tags/SSH/index.html","546b3f6c60abef189ca383c2e6857d86"],["tags/Stm32F407/index.html","956c9180a398cfcc9a492374d7b2cdab"],["tags/TCP通信/index.html","a4f0d3d6acd4ffc460bbc742d1af346e"],["tags/V4L2/index.html","93cdf6507bf316dcbdcf2961273aeb1c"],["tags/arm/index.html","b012dec300ed8264a197f480d7960a3f"],["tags/bochs/index.html","a4a9163be2fe0dc519ab3531f0d4bead"],["tags/deepin/index.html","d2004523141e1f70f3c5fc43c8f0b833"],["tags/index.html","2fefb0b50031555124520e7ce20bd38b"],["tags/linux/index.html","2ea63706a495d8e48ddac97a2fc6ed74"],["tags/nasm/index.html","be3ff82d7995b28352b0186eec48d03a"],["tags/return不同类型/index.html","891fa6870330f2e420177cbb1e424b91"],["tags/this指针/index.html","2bb99171c41d942878189c77ddc1b7fe"],["tags/动态库/index.html","f7030a1f23f41e1d303643e758cdb8e5"],["tags/回调函数/index.html","7ed7bc7413a664b8ab0b58ed6c8826d8"],["tags/局域网/index.html","526539bc890f13b7cea4660e13e40523"],["tags/操作系统/index.html","4f89b0d9a2f533354259c92bbe346259"],["tags/独立冗余磁盘阵列/index.html","d238205fc810d8d36046b2a86790a114"],["tags/移植/index.html","f492ba8e239ec240e7d7fc521b2fe523"],["tags/静态库/index.html","815021fcf59c57ac899e81cfef78956d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







