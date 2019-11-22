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

var precacheConfig = [["2018/05/25/linux+Qt_c_conplicationMplayer/index.html","0c3fc1338c7cd6a2710d64471b3323cd"],["2018/06/08/Qt+ARM_fontsandcolor/index.html","9956edfc68d147dd0e869e792bc447db"],["2018/11/21/Linux_LinkSharelib/index.html","eb3b330250a41ae5ee6fcb2d0ee5e12b"],["2018/11/30/2018-11-29-this-pointer/index.html","b5366930c584be4f93f80630e2e2f9f3"],["2018/11/30/2018-11-30-keyword-return/index.html","3a9a3a0c33d2569dabd66aa6250fd009"],["2018/12/02/2018-12-02-callback-function/index.html","3553c16219894085acf8598443751441"],["2019/01/15/Linux的文件IO/index.html","6fa63d3b101dba58320c404d919a2ad0"],["2019/03/09/2019-3-9_RAID_Description/index.html","2ee91cad2c4d3820c3e74e641bc2d643"],["2019/03/30/2019-3-30_SSH/index.html","6223f5663b3809b289795ac719d40c2f"],["2019/05/12/JZ2440_uboot_2009_11_transplant_1/index.html","df2140efba51ce628f7ba6eac18e8b7b"],["2019/05/13/JZ2440_uboot_2009_11_transplant_2_支持串口/index.html","a2772226db70ca6fd7c4b14e0c4041c4"],["2019/05/13/JZ2440_uboot_2009_11_transplant_3_nor_flash/index.html","25424dd0df19591579866077487b7c9a"],["2019/05/14/ESP8266_Connect_TO_PhoneAndPC_WithTCP/index.html","ffc8e93ccf7d5151e21db9d5e4ecdce6"],["2019/05/15/Technical_articles_1/index.html","6ba5d69d9936945c4325d014fa29da24"],["2019/05/16/ESP8266_SDK_api_HelloWorld/index.html","c8d916c85b952d512b65d9d46c63c230"],["2019/05/17/Orange's_Implementation_of_an_operating_system_1th_build_environment/index.html","fd71ae0722de421e7b3129d4287eaf21"],["2019/05/18/STM32_FreeRTOS_config_1/index.html","2f0294d3ca9f15f408ea9986b565f852"],["2019/05/19/STM32_FreeRTOS_config_2/index.html","b2eec01827d13a8f13426c41b8d8c8e3"],["2019/05/20/ESP8266_SDK_MQTT_LED/index.html","77cdd2d3af78415257705a0eb585c23a"],["2019/05/25/2019-05-25-V4L2/index.html","3bfc150948ca47f78e925a25b35314b2"],["2019/07/30/2019-07-30-QEMU-ARM-A9-TFTP-NFS/index.html","3a67c1796d9e0d961896d85a26c2e48c"],["2019/08/24/2019-08-24-C-Assembly/index.html","1bb7b912cd1d9957a34b69dd0406bc59"],["2019/10/19/2019-10-19-全志A64编译固件报Fault/index.html","56c5a06f9bc299db5c197405fef83fc9"],["about/index.html","b0aec52575a6a790c8478b5b998ddc2d"],["archives/2018/05/index.html","67d93de6fca8a3b1519593540e8c0b29"],["archives/2018/06/index.html","3425e7256c986a0d52cdf5af79bb4721"],["archives/2018/11/index.html","01e20337e721a610837c7ca451bb793f"],["archives/2018/12/index.html","70cfc32da82851c5d29ca73a71007d4a"],["archives/2018/index.html","ed1ddfa4a937a0985621b24024d06c35"],["archives/2019/01/index.html","11057879e7e5b26d3390c09c1e8f9362"],["archives/2019/03/index.html","d70b883624cd6e2d003a743aa85ee845"],["archives/2019/05/index.html","48240c8704ed13035f24333512322087"],["archives/2019/05/page/2/index.html","b4e9a758efbba3292278df43ec901229"],["archives/2019/07/index.html","672036ae573323c03232fac89ea1c75d"],["archives/2019/08/index.html","a7b37a32276a80f512ea4136c405c624"],["archives/2019/10/index.html","54dd5cf2a78c3934f5382a4ca5908162"],["archives/2019/index.html","0c8705edcad751fe14124b09d8baf35d"],["archives/2019/page/2/index.html","9b5c4e738a1928b12c1eba55880d0042"],["archives/index.html","0c420f7068cb43468ee11b90882acc89"],["archives/page/2/index.html","7a7b2221c43aeecb3775c6887e10b660"],["archives/page/3/index.html","0c7b9bfabf08100edc7aa692752d4a85"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG调试/index.html","1452a12f535fcb4638574df8f20639e9"],["categories/C/Qt/index.html","64ff69ca643a4483d958921c0a7635d3"],["categories/C/index.html","4d8ad70ad814b69346d51f8046314753"],["categories/ESP8266/index.html","e39db963e85c90ed5dc56876adc6f299"],["categories/Linux/index.html","02fa213d70799686c71c53c8158cb41d"],["categories/Qt/index.html","efe6903bf708326491352046b5e03c8b"],["categories/STM32/index.html","8daaea28e5a363faf414fecf2fab49b9"],["categories/index.html","92444c10453d0faeddebfff3f6ddce9f"],["categories/uboot移植/index.html","eb9f8050143c40c83e46bf383ae01440"],["categories/各个方面方案解决/index.html","4a86bf449d2c15cb1cfa1891b43951f1"],["categories/操作系统/index.html","1f4eefe2ace74959aa5eeb59395a63aa"],["css/index.css","809b8a47e325fbd01c584c3c3cafac3d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["google38fa67c7bab15712.html","22eddc833ea4a09d2c2bd7d7c470ae6f"],["images/1.jpg","aea58ef399f1d1245eada850385d5802"],["images/avatar.jpg","bfec141a41b9ab3bf3406ece8d4378d0"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","3adf74ffc4499aa233986199c86abcbe"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["page/2/index.html","caaa20afa3a4bc5afecd28d2ccc70d6e"],["page/3/index.html","d1d32dbb132ecd0060dfe6868d86aa37"],["tags/4412/index.html","1050e9a3d97840735ae23d9849bc6a49"],["tags/ARM汇编/index.html","fe9c4a11b806f0b2108151423d70acb8"],["tags/AT指令集/index.html","b6bbf602c121d88fff6486089174c2e7"],["tags/C-相关/index.html","8fcb83611ff26ca30f21eb3dd55d6631"],["tags/Digital-Signature/index.html","98cd84685d67b5abc886d63df5160ad0"],["tags/ESP8266/index.html","2508d88544108869e39703607889994e"],["tags/FreeRTOS/index.html","2b2c109d2dab859630a400bbef625209"],["tags/IO/index.html","516e943e2872755108f64fa80e9eaad0"],["tags/Linux/index.html","75fbebfc8c792cf3a9531ec41eec064d"],["tags/MDK5/index.html","c0999d3d0968071dd3658497a614c96b"],["tags/MQTT/index.html","751bfc93aa0955be5517cb5d5e8f751e"],["tags/Mplayer/index.html","f5a845ecf44861d3632f50d2d9e85f9c"],["tags/Nor-Flash/index.html","0a04770907daeb0ca43385313e94e6d1"],["tags/QEMU/index.html","7efdf65d82202a64b3755b0997d16f76"],["tags/Qt/index.html","04668acaacbc41cfc71e377b7208e5ae"],["tags/Qt输出日志/index.html","a43550464ba35219049c8ab86d28f41a"],["tags/RAID/index.html","e0ba5dce15e8ab543aca079320c42fa8"],["tags/SDK/index.html","705b863ebda942964c4ac9f018e7f8ff"],["tags/SSH/index.html","3f4d272be5b7804588452f65ce589407"],["tags/Stm32F407/index.html","bdae4d211ca114a7a810f47d65246712"],["tags/TCP通信/index.html","d02fea5946991d9be73b6f9edd056df6"],["tags/V4L2/index.html","7d3d6dad1cc2db1b668665d537c772be"],["tags/arm/index.html","cad8509b56d20aed824963da0af165f3"],["tags/bochs/index.html","ef6dcd16f5bde3231d48e993a83d210d"],["tags/deepin/index.html","05b8629e032e15d9ba3b71d6919eb33e"],["tags/index.html","1c9f7edb3c39aa3f10d4c2581d4165b4"],["tags/linux/index.html","c52a9f7f08ad7e25373879c9c6883300"],["tags/nasm/index.html","638ae914dfdf479f023bb4f10558ddad"],["tags/return不同类型/index.html","6d0d3f2f03252b60e73545bee61281bc"],["tags/this指针/index.html","45f6e09c7dd569b2b775a10377c4bde1"],["tags/动态库/index.html","b581fcc01b3ef3011abb40a2cdeafcf7"],["tags/回调函数/index.html","23ae6634723819695f4b7604edb9255c"],["tags/局域网/index.html","fb90f37409dcb873afaf3d75c360ad5b"],["tags/操作系统/index.html","8c1b26d4336013ea4a8723a7a5b070ac"],["tags/独立冗余磁盘阵列/index.html","d18e49dabb226061c3995a60626550d1"],["tags/移植/index.html","66d74515756c3e1f6a08555f126bfa2d"],["tags/静态库/index.html","c5e9af37440ddaab6cf385474c078c3e"]];
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







