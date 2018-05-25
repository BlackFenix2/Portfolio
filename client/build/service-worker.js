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

var precacheConfig = [["/assets/icons/icon_1024x1024.6e7b8aa0c153c3001e683f834077487d.png","6e7b8aa0c153c3001e683f834077487d"],["/assets/icons/icon_128x128.fc2c5e0609c53befea822a97452a9b3b.png","fc2c5e0609c53befea822a97452a9b3b"],["/assets/icons/icon_150x150.057195e8cfffcf808f684239a6b7db44.png","057195e8cfffcf808f684239a6b7db44"],["/assets/icons/icon_16x16.93b549f95b204fc1c5883a08ed789eac.png","93b549f95b204fc1c5883a08ed789eac"],["/assets/icons/icon_180x180.d41051fca37ee368283fd389e424de9d.png","d41051fca37ee368283fd389e424de9d"],["/assets/icons/icon_192x192.e4f56691c9cb1249d27504671e23315d.png","e4f56691c9cb1249d27504671e23315d"],["/assets/icons/icon_256x256.927a1fd608eed7651851da41c0457dac.png","927a1fd608eed7651851da41c0457dac"],["/assets/icons/icon_32x32.96c2f3ff4f6c86a84543fa6385bccfe6.png","96c2f3ff4f6c86a84543fa6385bccfe6"],["/assets/icons/icon_384x384.600152c6472560045e47b94efd785174.png","600152c6472560045e47b94efd785174"],["/assets/icons/icon_48x48.d561554d6424acfe5f2be93345ece5e6.png","d561554d6424acfe5f2be93345ece5e6"],["/assets/icons/icon_512x512.8e7711e880b2f932a6a91f1587f023ec.png","8e7711e880b2f932a6a91f1587f023ec"],["/assets/icons/icon_96x96.3aa43d0899de2fe690fecc4720a3a92f.png","3aa43d0899de2fe690fecc4720a3a92f"],["/index.html","c1282096364a2944279c7cbdafd1c712"],["/loading.png","7d4027c4752490d8445f7aa1b2557da0"],["/manifest.539e56e8172f330ba9472f72848b4ad0.json","539e56e8172f330ba9472f72848b4ad0"],["/static/css/10.css","9145d5dd68d0a5e9519395ed83931d67"],["/static/css/21.css","9145d5dd68d0a5e9519395ed83931d67"],["/static/css/29.css","283ed53bde226f87c9db5585fdb266a8"],["/static/css/55.css","9145d5dd68d0a5e9519395ed83931d67"],["/static/css/bundle.css","96f1d2e4e3360ef97dae1789f19d1f1f"],["/static/js/0.js","021e046286fce6699c6a50f90663909c"],["/static/js/1.js","637ea2c7a2879b4f6b6fd9696921579a"],["/static/js/10.js","18e7903235453dcadc1153499d750175"],["/static/js/11.js","ab6b95b20e2bee150411bf50ac80d291"],["/static/js/12.js","c6ff6ba47c46c19a935ea38361c0f575"],["/static/js/13.js","63f51f05e6ed416b3500fa32184762b3"],["/static/js/14.js","fb679a5be5f5410860d447cc54339906"],["/static/js/15.js","a3cfc405dcccd93499c07087d71f87bd"],["/static/js/16.js","fd1ea6ee8f3014ef11f00e7d44f01917"],["/static/js/17.js","ac2c47ef345fcf0abc6d4dcd6c734045"],["/static/js/18.js","c5bbee421255624da3e013d628ee2eb5"],["/static/js/19.js","ca6580cb80e19dbc36df8f1f058e91e4"],["/static/js/2.js","e79d4414872f1cf522cdc37255a1ca2c"],["/static/js/20.js","381a565055fdd3b5b6eaff6d016b479e"],["/static/js/21.js","5423f5d08020064238056941ee5b5e60"],["/static/js/22.js","dd2f9707473b8819fbae4a1c132fc586"],["/static/js/23.js","a0b2587807f7b2319af63860f70a3ad6"],["/static/js/24.js","ca290d70c8ed06e41c2a8ab010341399"],["/static/js/25.js","a263961474f38b70bd414d82cb487373"],["/static/js/26.js","8472eb8de451a9bf7368b3e2257de179"],["/static/js/27.js","31b36fd3a9da3f5a5c49501b5098d9f9"],["/static/js/28.js","927cc7b0d55839bb68af5aa0471f8440"],["/static/js/29.js","c30536c4d42560052a24c1a71e2a913d"],["/static/js/3.js","90adefcbf6de0b5513c463e05e6d69b9"],["/static/js/30.js","e0872a0f85f510cd3b426552608289ad"],["/static/js/31.js","e664b208b6caff53e62874c1cafd6798"],["/static/js/32.js","0a0db477924c4063a20ca01e41535f70"],["/static/js/33.js","d7650d4b13ba24a421be87a1c9da969f"],["/static/js/34.js","da7ae3fcfb3cf7bc9e98528d3b3bb36b"],["/static/js/35.js","497adb95949feade7af6e0df63084107"],["/static/js/36.js","a807347f2790de4e9d6620b5a1ab0b92"],["/static/js/37.js","f0868a87f71ec6db5b137536e0c57eaa"],["/static/js/38.js","f4cef326bec4b2d23a95e1d41a841055"],["/static/js/39.js","e2cb4c7bfd8d1cc425013efe0f32829e"],["/static/js/4.js","4ebd8e9cedd7d3685a9838e12096ec16"],["/static/js/40.js","25ed3e9e99a4df789fdd8a28c273a66c"],["/static/js/41.js","228e46dc125471d3e2323215f95942d9"],["/static/js/42.js","6c1f6d291f6b79283be2c7d7242f8008"],["/static/js/43.js","00d7dc8a4b6ce5776efa3d38da3f1df9"],["/static/js/44.js","5cd662a9a450d2a309f938702e864290"],["/static/js/45.js","1a39419d53f58f64bb73e323ecf1b533"],["/static/js/46.js","21c78a3450ca67288efcfded48da448b"],["/static/js/47.js","2288c7f4516fec5b94082b7299e07b40"],["/static/js/48.js","b5d2ca14a0c4e83b381bb80ff4287f8e"],["/static/js/49.js","c8e2cb74865d95461c46d118950afebd"],["/static/js/5.js","cac325182281bcd90f44e8bfb1dc12db"],["/static/js/50.js","66e19e3a3fe9e5a649c40b33e4108923"],["/static/js/51.js","4be6fa38994297a2bbc8630a48060f40"],["/static/js/52.js","3a04052d9cc76c5daaec4f76d29f362e"],["/static/js/53.js","6fd23e429fc2377dea4fc230e209acfb"],["/static/js/54.js","a4266a034335fe69461d64f474a49907"],["/static/js/55.js","4c21267b90b9ab5ebcde24b90fb9eabe"],["/static/js/6.js","3f2c5ab905e2ca4c058fd1392a799fdd"],["/static/js/7.js","87ad4def68d714958bfcf17325676574"],["/static/js/8.js","4e38eff6ceebd4cdf4789cdb4e13d718"],["/static/js/9.js","b478530ad318837b60922b3fda898313"]];
var cacheName = 'sw-precache-v3-sw-precache-webpack-plugin-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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







