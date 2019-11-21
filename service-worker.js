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

var precacheConfig = [["2018/05/25/linux+Qt_c_conplicationMplayer/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2018/06/08/Qt+ARM_fontsandcolor/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2018/11/21/Linux_LinkSharelib/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2018/11/30/2018-11-29-this-pointer/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2018/11/30/2018-11-30-keyword-return/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2018/12/02/2018-12-02-callback-function/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/01/15/Linux的文件IO/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/03/09/2019-3-9_RAID_Description/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/03/30/2019-3-30_SSH/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/05/12/JZ2440_uboot_2009_11_transplant_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/05/13/JZ2440_uboot_2009_11_transplant_2_支持串口/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/05/13/JZ2440_uboot_2009_11_transplant_3_nor_flash/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/05/14/ESP8266_Connect_TO_PhoneAndPC_WithTCP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/05/15/Technical_articles_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/05/16/ESP8266_SDK_api_HelloWorld/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/05/17/Orange's_Implementation_of_an_operating_system_1th_build_environment/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/05/18/STM32_FreeRTOS_config_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/05/19/STM32_FreeRTOS_config_2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/05/20/ESP8266_SDK_MQTT_LED/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/05/25/2019-05-25-V4L2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/07/30/2019-07-30-QEMU-ARM-A9-TFTP-NFS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/08/24/2019-08-24-C-Assembly/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/19/2019-10-19-全志A64编译固件报Fault/index.html","d41d8cd98f00b204e9800998ecf8427e"],["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/05/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG调试/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/C/Qt/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/C/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/ESP8266/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/Qt/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/STM32/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/uboot移植/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/各个方面方案解决/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/操作系统/index.html","d41d8cd98f00b204e9800998ecf8427e"],["css/index.css","809b8a47e325fbd01c584c3c3cafac3d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["google38fa67c7bab15712.html","22eddc833ea4a09d2c2bd7d7c470ae6f"],["images/1.jpg","aea58ef399f1d1245eada850385d5802"],["images/avatar.jpg","bfec141a41b9ab3bf3406ece8d4378d0"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","d41d8cd98f00b204e9800998ecf8427e"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/4412/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ARM汇编/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/AT指令集/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/C-相关/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Digital-Signature/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ESP8266/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/FreeRTOS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/IO/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/MDK5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/MQTT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Mplayer/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Nor-Flash/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/QEMU/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Qt/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Qt输出日志/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/RAID/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/SDK/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/SSH/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Stm32F407/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/TCP通信/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/V4L2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/arm/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/bochs/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/deepin/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/nasm/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/return不同类型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/this指针/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/动态库/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/回调函数/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/局域网/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/操作系统/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/独立冗余磁盘阵列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/移植/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/静态库/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







