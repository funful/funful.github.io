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

var precacheConfig = [["2018/05/25/linux+Qt_c_conplicationMplayer/index.html","3b3c6cb8f5f14e2b2b25034826f6bb99"],["2018/06/08/Qt+ARM_fontsandcolor/index.html","18d6cfbd774a7aa98ab92ead9227c3b7"],["2018/11/21/Linux_LinkSharelib/index.html","136f91a27f60db41f35c5dfe2573701c"],["2018/11/30/2018-11-29-this-pointer/index.html","14182bf335176f542201b29d39d56d9f"],["2018/11/30/2018-11-30-keyword-return/index.html","16aeabacbaccf15ad0a9472764b874ea"],["2018/12/02/2018-12-02-callback-function/index.html","bba81e41761b30080721e6c130be3781"],["2019/01/15/Linux的文件IO/index.html","da8966b0bb71e49543515c9bbf536ba7"],["2019/03/09/2019-3-9_RAID_Description/index.html","896296a73cd854d49cb9083b2c2458a5"],["2019/03/30/2019-3-30_SSH/index.html","0d21e4ff80e96d6852dfc81086d4e7d6"],["2019/05/12/JZ2440_uboot_2009_11_transplant_1/index.html","77f053205acca98d32aed498da9485af"],["2019/05/13/JZ2440_uboot_2009_11_transplant_2_支持串口/index.html","c8eb04d1d305c4d5bc2ba519bfc97338"],["2019/05/13/JZ2440_uboot_2009_11_transplant_3_nor_flash/index.html","db11b0c4f563562a5c805d649ac1092f"],["2019/05/14/ESP8266_Connect_TO_PhoneAndPC_WithTCP/index.html","76a9c3e5b52c59712e8d7ddaddd8db83"],["2019/05/15/Technical_articles_1/index.html","479d90369ab3271e15e6d398e8e57652"],["2019/05/16/ESP8266_SDK_api_HelloWorld/index.html","e1b4de406720d1638be9912d9828dd87"],["2019/05/17/Orange's_Implementation_of_an_operating_system_1th_build_environment/index.html","cc6c0586dbbe778a68909fab9cc0b944"],["2019/05/18/STM32_FreeRTOS_config_1/index.html","784301a49eb0fa6e6f1b0d213eb59d73"],["2019/05/19/STM32_FreeRTOS_config_2/index.html","26fcee865a9335df02fe8e889ef8898e"],["2019/05/20/ESP8266_SDK_MQTT_LED/index.html","e59b0437b512da2c3b8f4cc3353fea5c"],["2019/05/25/2019-05-25-V4L2/index.html","830924f144895e7bcb4149e08d2eb16f"],["2019/07/30/2019-07-30-QEMU-ARM-A9-TFTP-NFS/index.html","df14a7f788ee13a26c0fe9b52c1c1499"],["2019/08/24/2019-08-24-C-Assembly/index.html","b3360946a6a7b1ad653ad58c983d4956"],["2019/10/19/2019-10-19-全志A64编译固件报Fault/index.html","b282c16dc553d9e4368f433bb83aff17"],["about/index.html","c4e04e8946062a1fb7e83b45833e6b4e"],["archives/2018/05/index.html","c14b525657cc7fd48603e56724ab500a"],["archives/2018/06/index.html","86edc19a4061f8527340911adab2c977"],["archives/2018/11/index.html","df89e9ab7339bb9c91a159f4f82d2fa3"],["archives/2018/12/index.html","261d490c380dfb6a161782fd393aae71"],["archives/2018/index.html","3c59c9525ffb227139995533f7b6e961"],["archives/2019/01/index.html","9f23d07c951934cec4a671669cc3323b"],["archives/2019/03/index.html","5e820b75a9c5f0d7a9791b073fdffd9e"],["archives/2019/05/index.html","2d7c61b274b42e90a67c8fc489d9c18f"],["archives/2019/05/page/2/index.html","1a7a2d4ca682e70a20f05629b68e65c5"],["archives/2019/07/index.html","6e1cf740eae755e6576cf2c60eaf68bc"],["archives/2019/08/index.html","b063c73c1a53d2a03998825f965462b1"],["archives/2019/10/index.html","6980bb089f7cae7de8d301d5a8b14054"],["archives/2019/index.html","22b2e5099347c9d7eeff2f7fd6bd506c"],["archives/2019/page/2/index.html","194083aead522aa22573dd3011c11cdb"],["archives/index.html","de690d3c168379bef9cfc5b649809115"],["archives/page/2/index.html","19ce4c738121796a293d904685b0011b"],["archives/page/3/index.html","df4720eb3c8ef7368bbe277b0167b637"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG调试/index.html","ba3a2cddfa544b506d02330261ad020d"],["categories/C/Qt/index.html","a78dbbe3280de15096a743c2b031c304"],["categories/C/index.html","0bf12b70d234a2d57fd815dfefee15b4"],["categories/ESP8266/index.html","d6d57883420553751752a6a35bcec7ae"],["categories/Linux/index.html","01efa53aeb1b88a1038bbf034e20637c"],["categories/Qt/index.html","6ed2b4bd33cb9249f82559f601c44119"],["categories/STM32/index.html","c2ce0401b4c9302c92e1b5f16582cffb"],["categories/index.html","98e5cd3423c6e3e4102bc1e4f7c7a8eb"],["categories/uboot移植/index.html","7f30e40adf4903d4830270a9ad0a19f8"],["categories/各个方面方案解决/index.html","6ee6f34aa9923750b22ddda9f6e19f7b"],["categories/操作系统/index.html","1e3643d5b04222aadee1ac84216efe46"],["css/index.css","c99a9f8a9474eebd85fb0dc64189d9f1"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["google38fa67c7bab15712.html","22eddc833ea4a09d2c2bd7d7c470ae6f"],["images/1.jpg","aea58ef399f1d1245eada850385d5802"],["images/avatar.jpg","bfec141a41b9ab3bf3406ece8d4378d0"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","87b5e1cd285c76958a12388e5ec7056e"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["page/2/index.html","a319c027246cd70b026875b5db5d020a"],["page/3/index.html","92b02328da8fea5faa9a17d0fe9946e2"],["tags/4412/index.html","6895fb530f22ef037509421769e6a551"],["tags/ARM汇编/index.html","8e81d1f773cadb0402f6964477680eb0"],["tags/AT指令集/index.html","0a311d5467c1a3e03aa5dfcd6a19cced"],["tags/C-相关/index.html","3645b1eb02f3b395bd8bccf29ddb405f"],["tags/Digital-Signature/index.html","c0d3d3b38f5e9c2e4329a2ea67fe09fe"],["tags/ESP8266/index.html","2ca95e83a69ddcc4532b7f0a4a8de542"],["tags/FreeRTOS/index.html","636313475af9595c67b4547e91745386"],["tags/IO/index.html","bcb83f9a7cfd9daa924ae08307e685dc"],["tags/Linux/index.html","506fb32fb1fc3a69d4a25fc6f8ad7fe3"],["tags/MDK5/index.html","2498e02c330a0c86917814da3ad4871a"],["tags/MQTT/index.html","65cf98a0591d59d6655080956de2a320"],["tags/Mplayer/index.html","3c9e451e1934e21764caaba2396042aa"],["tags/Nor-Flash/index.html","7dc96650563dba93251e2083662bad52"],["tags/QEMU/index.html","12c1fc69c4e0d0a7cdf62c3980a61694"],["tags/Qt/index.html","895df0daf51f3ba4780d65da10a75c15"],["tags/Qt输出日志/index.html","0debb2f471aa4e4d8ad6b4cb50396fbe"],["tags/RAID/index.html","72f02b379cb0f35b96cf6975615e66dc"],["tags/SDK/index.html","7e4709f7e47514ab9b3bea4502ec93e9"],["tags/SSH/index.html","e02137d91370fd9121c9b3274c8c2644"],["tags/Stm32F407/index.html","6e15a5e5253193359e5a49b5e28d1800"],["tags/TCP通信/index.html","187a6e86aacb8bf2a080bfa8dc91ee52"],["tags/V4L2/index.html","b1e5c3982fb1723d3ef848f539788e58"],["tags/arm/index.html","de34e6e21974e9285c7ed6545778f996"],["tags/bochs/index.html","25d2963382efa9790fd3a12c3c81ac9d"],["tags/deepin/index.html","e9ec9709a1dc4f74e8362e5f36509754"],["tags/index.html","4f066844576b772851d588674ab3e086"],["tags/linux/index.html","0b063ec785c01f0d1e27ceaa003060eb"],["tags/nasm/index.html","9315b5b6c6a1fa3f168065151a00c4ac"],["tags/return不同类型/index.html","ad8486fbe32db029ff233b773ab38f19"],["tags/this指针/index.html","689e1b5079b9716a3d5a281e2c5151eb"],["tags/动态库/index.html","0e6d69ffc26df74e4469931df2c488dd"],["tags/回调函数/index.html","adb7849176a573f94577ddf3d21140d2"],["tags/局域网/index.html","05f25b181475672a4d3d2aed01c7d42a"],["tags/操作系统/index.html","ec2758eaa938c9d590a50cf4421da643"],["tags/独立冗余磁盘阵列/index.html","1ccdd29d413e6eab911c0399ec2d831b"],["tags/移植/index.html","a3a86396a1764a9523e4ce2a5c88d830"],["tags/静态库/index.html","a6674e19247ff677a41d8c84f880156d"]];
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







