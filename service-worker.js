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

var precacheConfig = [["2018/05/25/linux+Qt_c_conplicationMplayer/index.html","4eeb2ced3b9aab1ae74e90a1c9013b27"],["2018/06/08/Qt+ARM_fontsandcolor/index.html","09e1ff03bfd0bbc22433eff5616745bc"],["2018/11/21/Linux_LinkSharelib/index.html","b485151aa5446bb4db24457994c5aa98"],["2018/11/30/2018-11-29-this-pointer/index.html","ecfd789c17dfd2af99b8b400d0919521"],["2018/11/30/2018-11-30-keyword-return/index.html","28f99e05d13250b9554ebf7f617fa356"],["2018/12/02/2018-12-02-callback-function/index.html","3b6644832153a9487ae9894dc94c3cf0"],["2019/01/15/Linux的文件IO/index.html","e42b54b17e7cd84dde017a0c5dd2d0ec"],["2019/03/09/2019-3-9_RAID_Description/index.html","37eb1bb5b4b4184c73b2568b9f34c439"],["2019/03/30/2019-3-30_SSH/index.html","2d7f8bcf1c2e933889e0aba727cd9837"],["2019/05/12/JZ2440_uboot_2009_11_transplant_1/index.html","9b45733ac9e5cd1ac93220a8cf561dc2"],["2019/05/13/JZ2440_uboot_2009_11_transplant_2_支持串口/index.html","cd419bc26fb1ff0e695a9fd5a393fe53"],["2019/05/13/JZ2440_uboot_2009_11_transplant_3_nor_flash/index.html","1e13d082ac00245e081a28be44ec1707"],["2019/05/14/ESP8266_Connect_TO_PhoneAndPC_WithTCP/index.html","dd7a6510bf52149e108df5cdc53460ed"],["2019/05/15/Technical_articles_1/index.html","5f9e574b937d42fa566d92724e3b31ab"],["2019/05/16/ESP8266_SDK_api_HelloWorld/index.html","ef9ec6ad9cfb6b469dd12afe8624f5ef"],["2019/05/17/Orange's_Implementation_of_an_operating_system_1th_build_environment/index.html","5f420bbf8c24081d68fef0931eb36295"],["2019/05/18/STM32_FreeRTOS_config_1/index.html","d6e900e5c3a492ed8ce1c9810f0f7743"],["2019/05/19/STM32_FreeRTOS_config_2/index.html","a71132d1c1433d546cfb8d258070f9d4"],["2019/05/20/ESP8266_SDK_MQTT_LED/index.html","8cf40efb98d948ecfa90ba5ba096776e"],["2019/05/25/2019-05-25-V4L2/index.html","5fbc81c58a5310cab164ec44e0e8e91d"],["2019/07/30/2019-07-30-QEMU-ARM-A9-TFTP-NFS/index.html","24da689286f53cc565a6e06453575f5f"],["2019/08/24/2019-08-24-C-Assembly/index.html","de653eee7ed3b7faed0d3386b05cef0b"],["2019/10/19/2019-10-19-全志A64编译固件报Fault/index.html","76649fde4754f65d68b8396e8f8de993"],["about/index.html","7b301bfc040154a8852912b445d6909d"],["archives/2018/05/index.html","576e77f17bb627dd9267018c0a12f6c7"],["archives/2018/06/index.html","a6f825fc41102d3d3bfa3fad713c8bef"],["archives/2018/11/index.html","64e5d14b0bd4490253de1da527fbdd06"],["archives/2018/12/index.html","2f7b5a96532d3b6d6f3dc987e394081d"],["archives/2018/index.html","1c786adb684550218421c79f25ac9eac"],["archives/2019/01/index.html","4b8b10aa93d146331f2450c836e5df45"],["archives/2019/03/index.html","47aa65d80f4b3fc2393f241236ba83d2"],["archives/2019/05/index.html","aef45767276f9ba58e621b4438eb0464"],["archives/2019/05/page/2/index.html","24a7dd3e1c499472e9c531a3657fd461"],["archives/2019/07/index.html","6593614976ea74f07c36cc3b67b82e0e"],["archives/2019/08/index.html","6e414473cd1f5a383912891add6d261a"],["archives/2019/10/index.html","939a76d54fd12aad910bd99354ce4c2c"],["archives/2019/index.html","55f5f33f010c208a08ac2ea03456430f"],["archives/2019/page/2/index.html","176b54411c33d89cda60c9f80cdccdbe"],["archives/index.html","e0a607edb3f8aa5a8e13dcc3d653e13d"],["archives/page/2/index.html","a17886e223dd8985c71ec844d0b5821d"],["archives/page/3/index.html","11099be32f9dc4fae71ca17a476d64b5"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG调试/index.html","394782e58d332505666dbd36e1491953"],["categories/C/Qt/index.html","33b1451f1e1b98676c2057d27c0611ab"],["categories/C/index.html","f27835ba0c357139aa556457702ed027"],["categories/ESP8266/index.html","86db91fb14e261ec8356373d3c9455fe"],["categories/Linux/index.html","dc98b26bd929ee3d396399d95df04720"],["categories/Qt/index.html","c2b922de276532a14ffd4ccbefe9e34d"],["categories/STM32/index.html","c5e4b084b85600759c0db695b830ad1d"],["categories/index.html","30b68cef159bad267382ac734ee75e32"],["categories/uboot移植/index.html","4afa5d1669ef4f2f51c72b62c7b00906"],["categories/各个方面方案解决/index.html","9ec6e5da824ca2427301ddfb6524c4be"],["categories/操作系统/index.html","166089d4b2a17a11b1d1b34e3054975e"],["css/index.css","04695bf95c1925bcae6995071138a524"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["google38fa67c7bab15712.html","22eddc833ea4a09d2c2bd7d7c470ae6f"],["images/1.jpg","aea58ef399f1d1245eada850385d5802"],["images/avatar.jpg","bfec141a41b9ab3bf3406ece8d4378d0"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","ede8a884dda09fded4b87f2fa11a3554"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["page/2/index.html","c821019ecc774421021f887ac641fb70"],["page/3/index.html","1b830ebe85b2f7a32626bf7996954815"],["tags/4412/index.html","db4fc8e637fe695ec5d85d49d2774cae"],["tags/ARM汇编/index.html","535b5eaa5c8f958d885d789d70d05ceb"],["tags/AT指令集/index.html","54d4f30aeb51a7d2745414434ce83f7e"],["tags/C-相关/index.html","7c644fe480600f01a2145c0a6c764a74"],["tags/Digital-Signature/index.html","f5c81ba01b1f2e380e538eabe7b67793"],["tags/ESP8266/index.html","2f98dc9d9e12d67425f3ff0bc3abddfb"],["tags/FreeRTOS/index.html","8ab8125fc9298052603f42cfc72c07ac"],["tags/IO/index.html","1653f4f89de85379f6d8d0678a4e7c12"],["tags/Linux/index.html","5335465dac183e910a94c1898eaf9de4"],["tags/MDK5/index.html","19eb541e09d0bbe4c440ced576ee4acb"],["tags/MQTT/index.html","9a92b1f5a8ecd7c41a21f47011140c32"],["tags/Mplayer/index.html","edb776072357778132989882cdb6df24"],["tags/Nor-Flash/index.html","8983d0632231546348332123ab362c97"],["tags/QEMU/index.html","46fb6e8cda949c88b5c5a6e20b77d236"],["tags/Qt/index.html","c7c9c4a86bd31da22b9f3a7942abd0ef"],["tags/Qt输出日志/index.html","625e2ebc2d7a9a6e01db7379660fc6a8"],["tags/RAID/index.html","74b83e3d6b0a785a714907a0aa87995f"],["tags/SDK/index.html","1e7ebf7823fa2f3fef854c6d062fa72c"],["tags/SSH/index.html","8e8389853c8be5fc65f91d7bb27f4cc9"],["tags/Stm32F407/index.html","405b3fdae096ab8667490fbab56eb655"],["tags/TCP通信/index.html","b9c89a952ba368160048b6137305ee61"],["tags/V4L2/index.html","cfad031b63a89e9e14e34ff21630df3c"],["tags/arm/index.html","28e96f51eb7659eb19695e1624c8135b"],["tags/bochs/index.html","df0b7d151ab7caa14375281733756292"],["tags/deepin/index.html","3f5b6fc775cd84c16343d4acb5ff5eab"],["tags/index.html","0647a698e60f071a3a433723ee924cec"],["tags/linux/index.html","c9d051ca19309fbadd9800efe1a86729"],["tags/nasm/index.html","6fc4efde8423a509a3348cf87ae3a53f"],["tags/return不同类型/index.html","3eef421cf807218d04fdf79569ccad52"],["tags/this指针/index.html","a0d2c9a90ee9729bc9f25b5bbfde2cac"],["tags/动态库/index.html","bae7f5e891c61498b34e3dd33cdd3770"],["tags/回调函数/index.html","573ded876606cd87198740a16f3cd0ab"],["tags/局域网/index.html","6122bbb1813d9b25f57e4626ea4bd442"],["tags/操作系统/index.html","3241aba712c76e594eafeb40b0eccfb5"],["tags/独立冗余磁盘阵列/index.html","f145ca1bae954892019d859b2d1af5b2"],["tags/移植/index.html","c17030ba094d85b24996d5fdd8f97310"],["tags/静态库/index.html","d65f4ff1eb5a72d890ee4467e768a035"]];
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







