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

var precacheConfig = [["2018/05/25/linux+Qt_c_conplicationMplayer/index.html","c9cbf74371c1ffd1c00c28a21256e3ec"],["2018/06/08/Qt+ARM_fontsandcolor/index.html","0c44e926d4a57bdcd756235fe44c86b1"],["2018/11/21/Linux_LinkSharelib/index.html","541e898b41e5b2abdef9856d34dcb0ef"],["2018/11/30/2018-11-29-this-pointer/index.html","29b276f7a6a9b079a2cc4b4598a52958"],["2018/11/30/2018-11-30-keyword-return/index.html","629863c470c655007f350ed9c0cf70ba"],["2018/12/02/2018-12-02-callback-function/index.html","ee5b36a94b31b84fb239b7e14b493968"],["2019/01/15/Linux的文件IO/index.html","0a2461376324b5648a9c5272e1a60ea5"],["2019/03/09/2019-3-9_RAID_Description/index.html","8f279acc200a115b2ca9ce25da57c20d"],["2019/03/30/2019-3-30_SSH/index.html","0315501609894bade182205bdbea44cc"],["2019/05/12/JZ2440_uboot_2009_11_transplant_1/index.html","22c62b56a2fb109a9ba2d4ab2572c1cd"],["2019/05/13/JZ2440_uboot_2009_11_transplant_2_支持串口/index.html","56e0e69ff977ddaf5ddffdf37b71d046"],["2019/05/13/JZ2440_uboot_2009_11_transplant_3_nor_flash/index.html","66d5f2274b6815255effd6393ff0f384"],["2019/05/14/ESP8266_Connect_TO_PhoneAndPC_WithTCP/index.html","94ae24f630aef610b623be4e6420f6da"],["2019/05/15/Technical_articles_1/index.html","a6ecc660e7d4a688edabd12560c678db"],["2019/05/16/ESP8266_SDK_api_HelloWorld/index.html","b71e2b705325b89bcbf95667a0c32eaf"],["2019/05/17/Orange's_Implementation_of_an_operating_system_1th_build_environment/index.html","44925f6e298897a6294dc09226ca9727"],["2019/05/18/STM32_FreeRTOS_config_1/index.html","86ae2c5075fde283cfa51f6267212f8c"],["2019/05/19/STM32_FreeRTOS_config_2/index.html","857e1fba4644240b3e556157d583b05f"],["2019/05/20/ESP8266_SDK_MQTT_LED/index.html","da9335df4515316ab5130de0a6b6f216"],["2019/05/25/2019-05-25-V4L2/index.html","f1ebc99d1c1edd50e813abbe6363a14f"],["2019/07/30/2019-07-30-QEMU-ARM-A9-TFTP-NFS/index.html","395c3bdc4a83e37d339bf9c12f6c5518"],["2019/08/24/2019-08-24-C-Assembly/index.html","d45821aaaa28b74de50f81a50a4c27cc"],["2019/10/19/2019-10-19-全志A64编译固件报Fault/index.html","7cc0e5de77e4d242cf8aac4b973b5d6b"],["about/index.html","861102cf141d590a450053c7b03121b0"],["archives/2018/05/index.html","dadfd50172986380c801b93d2a0521a1"],["archives/2018/06/index.html","7d45e3baa4c7179361f8106204528b1c"],["archives/2018/11/index.html","b60fb215b1b28443b9615e7a273f21d4"],["archives/2018/12/index.html","b4ac35629b89042730ca629cda78a2c8"],["archives/2018/index.html","5a05d85588d34bd56840ef37e2470c48"],["archives/2019/01/index.html","e874dc780179138d33d7e22344469a12"],["archives/2019/03/index.html","ac0092e825b8a797ed40f8986d3d81b9"],["archives/2019/05/index.html","821186a2c08e4dc872825a8e97968580"],["archives/2019/05/page/2/index.html","51b854f9eafce69f49e9bcb5308751b7"],["archives/2019/07/index.html","75ab2878657425a21268f3aebe7e8ddb"],["archives/2019/08/index.html","0ce90f4e1f03f4c98d5f5707c914d58f"],["archives/2019/10/index.html","dd1484e43855aeeea8db71861cb2cc09"],["archives/2019/index.html","575195170be8dd06f3c253f00b474609"],["archives/2019/page/2/index.html","7065903d0343b5124bbc462c8c562781"],["archives/index.html","cffb6f110f8f4a25e1c27dd70cdabf39"],["archives/page/2/index.html","8276949d247e4fd8788bc15e86bbfa02"],["archives/page/3/index.html","cb3b95c33c44404be27c61793265e78c"],["categories/BUG调试/index.html","f2f98d977580639020f7ecf2bc9222e9"],["categories/C/Qt/index.html","577e4d65fab93dc9ba422651da457255"],["categories/C/index.html","d3dc2c535a3168fd6c0b12e7845a156a"],["categories/ESP8266/index.html","6416525d23cd6137f61b64fe1dae32b7"],["categories/Linux/index.html","a29580f07d2169680258f2c87830f953"],["categories/Qt/index.html","8808f087937b4c5ac91784011a8c6b06"],["categories/STM32/index.html","17ceb6aaa140f67b1f6507722ecdc7ca"],["categories/index.html","6dae77d41e773b804bd71d0f0d33e2c6"],["categories/uboot移植/index.html","7c503b38e25c466629cb11b65cfd4821"],["categories/各个方面方案解决/index.html","eeabc017397a5279cc2856044878c30c"],["categories/操作系统/index.html","9aebf60db99149dae6f9b751b5f8f19f"],["css/index.css","04695bf95c1925bcae6995071138a524"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["google38fa67c7bab15712.html","22eddc833ea4a09d2c2bd7d7c470ae6f"],["images/1.jpg","aea58ef399f1d1245eada850385d5802"],["images/avatar.jpg","bfec141a41b9ab3bf3406ece8d4378d0"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","dab6fa6fd38cd27d167f10f79d4748ee"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["page/2/index.html","c732e64a56bb22e99c6608a4bd4ac195"],["page/3/index.html","3709641449e9b9b37ba39319388d1fa8"],["tags/4412/index.html","aa8221fb8d71d959796d4215a1e2be36"],["tags/ARM汇编/index.html","5c197300207afcf36e1a364c995caf85"],["tags/AT指令集/index.html","b4d4ab61e468a61d6bab827c401641b1"],["tags/C-相关/index.html","d5b64588ed178323d868a9df6a5ed5ea"],["tags/Digital-Signature/index.html","99b9043c8792dd6b1bc29933776f1279"],["tags/ESP8266/index.html","6bf519b1b86712a07fcb3f0cdc9e5942"],["tags/FreeRTOS/index.html","2426b91e661968c1f928cb7a8046b9a8"],["tags/IO/index.html","4929ae64505e08c2babbb8de13e23280"],["tags/Linux/index.html","3c6dd8d3c5705082e95920e2597db234"],["tags/MDK5/index.html","fd2edf41ed8155e380c12cdad3248b2c"],["tags/MQTT/index.html","963a767860a663f2bea3063d2f836c1b"],["tags/Mplayer/index.html","a5f6d29e433d462f2a2528f1fb72d9a5"],["tags/Nor-Flash/index.html","95e7bff22135792387c497ba013c3201"],["tags/QEMU/index.html","af0a0c5149085d8a4b4de5b9541b98d0"],["tags/Qt/index.html","926a992f4ef22bdeaa85e3975c816057"],["tags/Qt输出日志/index.html","82abf5f5df3da5f4944bba10c494465e"],["tags/RAID/index.html","fbb32f3fca51f0bfd31efb0a3c4acbf4"],["tags/SDK/index.html","31455c2f8ff9a09939972322f97a9485"],["tags/SSH/index.html","037821e93ae182c7df880ecf4691d158"],["tags/Stm32F407/index.html","8ad06573b2b7e275d19161005c4f2e3b"],["tags/TCP通信/index.html","886863f937d2078d9167dbe63c12b068"],["tags/V4L2/index.html","c7d28b23bf53959267c54f13de47116f"],["tags/arm/index.html","29e3e47cb0fc3f701fe0c00e9ee79381"],["tags/bochs/index.html","594e8a79d95477bcdff974224aebe909"],["tags/deepin/index.html","b76968a7b6238f845eda84f0ce1b9e4b"],["tags/index.html","0a3a0a4ae58bca47f4c83175f3d9dfdb"],["tags/linux/index.html","f20d21f3486bce4c2c3656e0f939c359"],["tags/nasm/index.html","21e4de26e239f0b406a12957afe4f47d"],["tags/return不同类型/index.html","33f3cec26ef214c6054a2e6b3d6c6d49"],["tags/this指针/index.html","e5d16dbdab9a551afe39a7bb7d9a8024"],["tags/动态库/index.html","4d0b3e9652ca076222a2fcb76630b874"],["tags/回调函数/index.html","161ba148553bc53422a4a8b5be22c3f3"],["tags/局域网/index.html","27d9a501c35155b743ccb925f648765e"],["tags/操作系统/index.html","cd3e73aa6147191dc340c72345640d95"],["tags/独立冗余磁盘阵列/index.html","5337077d46339444d9d75b98ffa52780"],["tags/移植/index.html","e4ead99e9831be33d514fd0729f09ffc"],["tags/静态库/index.html","effcd3b9834501060a872062fb81e6d6"]];
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







