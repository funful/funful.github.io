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

var precacheConfig = [["2018/05/25/linux+Qt_c_conplicationMplayer/index.html","4dd36d02c48d96642b8d53c7218db55e"],["2018/06/08/Qt+ARM_fontsandcolor/index.html","b84641111d8bf7108c4c4f9e86bd89aa"],["2018/11/21/Linux_LinkSharelib/index.html","5c63e018ff43997d1bc8ad12d0d4128d"],["2018/11/30/2018-11-29-this-pointer/index.html","cacd6fd2c1358fa99afea7d9be98e1f6"],["2018/11/30/2018-11-30-keyword-return/index.html","66a96245af477061bdfaeb5d4e8078d7"],["2018/12/02/2018-12-02-callback-function/index.html","cd3ab0dfd2d7fa5b33786e4a69ed4213"],["2019/01/15/Linux的文件IO/index.html","622f807fbe49d9a5cca87790a69945b7"],["2019/03/09/2019-3-9_RAID_Description/index.html","580e8961b0435decd635f2f041d55cbd"],["2019/03/30/2019-3-30_SSH/index.html","6462ae70e0eb6de1aa9bacc4d0ac81a6"],["2019/05/12/JZ2440_uboot_2009_11_transplant_1/index.html","5f7033c3ead222f0851678229527c0ba"],["2019/05/13/JZ2440_uboot_2009_11_transplant_2_支持串口/index.html","c4dbd5c2dfff9ebfef239fb57c93de7c"],["2019/05/13/JZ2440_uboot_2009_11_transplant_3_nor_flash/index.html","d6e71561248623578a6ef7bebd088903"],["2019/05/14/ESP8266_Connect_TO_PhoneAndPC_WithTCP/index.html","03bb136a8104819de3ec11d6e363631f"],["2019/05/15/Technical_articles_1/index.html","b92b7bf6a733b57c97554be6055dca66"],["2019/05/16/ESP8266_SDK_api_HelloWorld/index.html","9034df8d04c7a5ada396cda83067afe4"],["2019/05/17/Orange's_Implementation_of_an_operating_system_1th_build_environment/index.html","1c1bcb394b71cac7f67738daecb0d3a1"],["2019/05/18/STM32_FreeRTOS_config_1/index.html","71c83f3b64f32a0823cfcb2b91152ccb"],["2019/05/19/STM32_FreeRTOS_config_2/index.html","3274c483f8ed4e2fed0c411300f4cd7c"],["2019/05/20/ESP8266_SDK_MQTT_LED/index.html","57bee9b4d821ba63eae2b3d1b0e41e51"],["2019/05/25/2019-05-25-V4L2/index.html","02b0876eb8e2e4bec112af2aeb2243e3"],["2019/07/30/2019-07-30-QEMU-ARM-A9-TFTP-NFS/index.html","71cd6a7152f6861b5c9bd493f0d02c7d"],["2019/08/24/2019-08-24-C-Assembly/index.html","8ad163b50c19db01cbcf9895f28bf9ba"],["2019/10/19/2019-10-19-全志A64编译固件报Fault/index.html","9cb5e94dbb11aee438c73bcefab5e701"],["about/index.html","c19671f3865a8160d18c70114f6fe447"],["archives/2018/05/index.html","7b43243bf732a582db853c0fda6e7cd4"],["archives/2018/06/index.html","7ebc13435bf8be15e836e164b10b67c0"],["archives/2018/11/index.html","d3b3e3d619a52819aa094105c94b05c9"],["archives/2018/12/index.html","7456b2c6c06a32e3d70c8d31291a6f00"],["archives/2018/index.html","d657915e1c3f063af76658b5b751ee53"],["archives/2019/01/index.html","80887b80ac3c573c9138d9a1970b72a6"],["archives/2019/03/index.html","9efe866f0ba6c041c0340bd8588fad4c"],["archives/2019/05/index.html","7c9f990ac549cc90bc33f58a140b0d19"],["archives/2019/05/page/2/index.html","5fcbec5be137a83a6f4ae82f334b53de"],["archives/2019/07/index.html","29fbd7903bbdfe02ea37b5b5174df9b7"],["archives/2019/08/index.html","7c8c6853ce69dfb9cca48d94ac29b144"],["archives/2019/10/index.html","3becf1d24e673f4b3ea823cc8808ed04"],["archives/2019/index.html","008126b20046b3122360eaaa4047beb4"],["archives/2019/page/2/index.html","9def895cd06880291fa60f074e97f12c"],["archives/index.html","296b970cf76094be1471ddfa7c38d43e"],["archives/page/2/index.html","8f7dbc425a269f0c944f3ff9bb81faf8"],["archives/page/3/index.html","71ee23bb4415802bd5491725d4732ec5"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG调试/index.html","51929bb110ee18af4d20ba789188c3d6"],["categories/C/Qt/index.html","ab95b7adca0f57b7b6700ec7cafdd0f6"],["categories/C/index.html","2b517e5525a6d817e2aa601a3a632117"],["categories/ESP8266/index.html","1353c127be8f1db7035e7c1b1e408fe8"],["categories/Linux/index.html","ae21155b6033ffa35f8766d2ad1d46f1"],["categories/Qt/index.html","03efe1993ccac4f03421c428ec3716f8"],["categories/STM32/index.html","558149c70539b06ff50ca9c1df626586"],["categories/index.html","f4ce0effbbda446371318387febe272c"],["categories/uboot移植/index.html","a7a45cacb764cc9e1cb12fcd0bade3eb"],["categories/各个方面方案解决/index.html","12297272fa04654622c629add2f724b8"],["categories/操作系统/index.html","f7593aeeb99a0641c1dffc20bf4f9712"],["css/index.css","04695bf95c1925bcae6995071138a524"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["google38fa67c7bab15712.html","22eddc833ea4a09d2c2bd7d7c470ae6f"],["images/1.jpg","aea58ef399f1d1245eada850385d5802"],["images/avatar.jpg","bfec141a41b9ab3bf3406ece8d4378d0"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","f1a1703f7ee1b5c56545c8d154786c49"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["page/2/index.html","46e9115bdfeca3d8a18e3537fe308637"],["page/3/index.html","ae0765023186d9b3ba3fc28e71b34fd4"],["tags/4412/index.html","66c6c9a9bb3bb28ff38f8dc919a39f37"],["tags/ARM汇编/index.html","0f3147e2b9c22a422c3a28970a92d0bf"],["tags/AT指令集/index.html","1e84dbbd3f9bf31c8470441e5a842f3b"],["tags/C-相关/index.html","ad4f2589387fa2b59796161a9bc34f84"],["tags/Digital-Signature/index.html","65dd9f54d5f636d82f57ab6b513e367f"],["tags/ESP8266/index.html","3d6a460bd90f90b3c6f0c59cb1c894b2"],["tags/FreeRTOS/index.html","32994615f39b41662b96f1578f3744b2"],["tags/IO/index.html","7b15edce80187629f77255670bfd9fd1"],["tags/Linux/index.html","520d5d526f7638589bf0358d2bd93e87"],["tags/MDK5/index.html","d29a1e10e3f9c63616b94614c484cd60"],["tags/MQTT/index.html","2eb83e8ac72971d53a88e372dc0ba76e"],["tags/Mplayer/index.html","92f94049ca94fdcf8a93d7c68ff694eb"],["tags/Nor-Flash/index.html","9b9251ab136cce0cbc2ced37bb81f5e9"],["tags/QEMU/index.html","90f03b49744dea2c3f5be6745a2d8672"],["tags/Qt/index.html","427923af5283cad13a60a6a4be727c83"],["tags/Qt输出日志/index.html","c6e40500deaabc196d59ee74a90627bb"],["tags/RAID/index.html","394405552aebbff38defbc596f74b216"],["tags/SDK/index.html","352ab6002e368d318cf5aa3b785c9607"],["tags/SSH/index.html","2cb23ea07331a414df6849c7feda8137"],["tags/Stm32F407/index.html","dede72c93a00e4bb5360ddeee2e5517e"],["tags/TCP通信/index.html","696cd57f79e5dff0f66b30a30466db1d"],["tags/V4L2/index.html","3f5f96ae382b407358a6e0a0b32fe5ed"],["tags/arm/index.html","6918326e8a58879b0b92a240ea39f8c4"],["tags/bochs/index.html","baa22adf6278ece08b03ae593b80b409"],["tags/deepin/index.html","bd2d5262ea8920e372e6f6f5467e065f"],["tags/index.html","f19ad69faae2a28ad0a9d83ca74f8651"],["tags/linux/index.html","9ed356b87d34eecf6b8129f45e1a3629"],["tags/nasm/index.html","3f056cfb612e12f5cdd8d26c7b4c5c13"],["tags/return不同类型/index.html","ae7678fe38909b43d146b16db6fddedd"],["tags/this指针/index.html","77e6f979950cd543b3215c1e2517c98c"],["tags/动态库/index.html","4adec83bc63bf21c5d7a6c940499b3bd"],["tags/回调函数/index.html","00525496d7003674b587320e15436bb9"],["tags/局域网/index.html","3a2d88dce7968cd0338a1626f2e2393d"],["tags/操作系统/index.html","960e3099943764abe67428055d794c29"],["tags/独立冗余磁盘阵列/index.html","215e27632c302b6c5af00fee32cbf002"],["tags/移植/index.html","64f0288e3065aa02ab01a82be71dd1c4"],["tags/静态库/index.html","cda3bd17b1826a1f5d494b0ff43e1e52"]];
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







