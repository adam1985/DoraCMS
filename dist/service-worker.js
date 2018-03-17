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

var precacheConfig = [["/static/css/admin.76ae964.css","a42a458545abe3900c223479a77dd2ec"],["/static/css/app.76ae964.css","8e8b916fd5ee167262253fb473240162"],["/static/img/element-icons.6f0a763.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/static/img/fontawesome-webfont.674f50d.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/img/fontawesome-webfont.912ec66.svg","912ec66d7572ff821749319396470bde"],["/static/img/fontawesome-webfont.af7ae50.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/img/fontawesome-webfont.b06871f.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/img/fontawesome-webfont.fee66e7.woff","fee66e712a8a08eef5805a46892932ad"],["/static/img/login_bg.d7174ef.jpg","d7174ef5f930a53ce6beae07190ddcc5"],["/static/js/0.0484724.js","5e66b918409d4113a835f302f05dfc5b"],["/static/js/1.f4f484f.js","78cfefd5491c1e61239300918d7a42e2"],["/static/js/10.60c9979.js","f568c6e7e291ced9fb63f22d55fdb730"],["/static/js/11.3e36490.js","c1093de8084e86c62cf77f05c0a4e287"],["/static/js/12.c02aa9a.js","143c09eed6855ab2c56d3e987316326a"],["/static/js/13.83c3191.js","9484a08c6fda2ac078d070d90b7f0ebe"],["/static/js/14.9127bb4.js","a79797c95ac9bb788d1b5d21e56f047c"],["/static/js/15.d290c55.js","193b3bd8fe5f23887939b80d0be1aa63"],["/static/js/16.1bb1c7a.js","c9434558239b7cafdd5d8ac407d33af4"],["/static/js/17.547523b.js","3961b03587e16c4e1d5f0bf9debef1ff"],["/static/js/18.0951e4d.js","559698fcba53c7ae35ed494337b393b6"],["/static/js/19.cb25554.js","ce3bdd39a8400d8a6ed0f92f806c1ff3"],["/static/js/2.8f5e022.js","a3cbf4c56de3a32b0086e80a1c1f8ec4"],["/static/js/20.a055752.js","d26fbb3d87941662b91979d6d51069ad"],["/static/js/21.f554633.js","bfbe2eaef1be8320e12ff738b6864490"],["/static/js/22.99c993d.js","8ad05d1de36c5d5fc141d3c3fafafd64"],["/static/js/23.3727ea0.js","d23b6bc788a6470e57fd22b6670a0dc9"],["/static/js/24.aff1f13.js","378f22a0af92de1f8fbdb74cb1aa4a64"],["/static/js/25.945694a.js","dd51ddb0c0694479f678f3abbc1f2ad0"],["/static/js/26.99dca84.js","cdeb010b0ce2357617be01a01d4aca2b"],["/static/js/27.d6575ad.js","370e6b0a8fea4b2966f01bcaaeaf4f49"],["/static/js/28.3243421.js","b403bf9a7fe0fab9fe3d0e1d727b7773"],["/static/js/29.4a7b5ae.js","f7dda35af17a5103a1937bf9cc00d9ec"],["/static/js/3.9a17cf4.js","33a5e14572764f069ff3eb1344feaebb"],["/static/js/30.6b71d2c.js","505ffc79de1c0f41630ceafb9ca31367"],["/static/js/31.6a723ed.js","a9c090655d231cc08c124815d83f2888"],["/static/js/32.f534081.js","9b43510d7c76ec2ba980e09a450c1995"],["/static/js/33.21398c9.js","3fdfdc80e2c103d4ca6b906224e08085"],["/static/js/34.84043d6.js","97d4bd5a8f464de5e3038dc15ee74710"],["/static/js/35.e6099af.js","d90a46041d19312b2aec0648e0d1448b"],["/static/js/36.bc32c0d.js","7006112d8cd61f505961f8819bdbcedf"],["/static/js/37.318ad9b.js","91c97f2a991192579e23a1b24fab9b6a"],["/static/js/38.43ee7cd.js","b71f2c870e1e89a9adf4a94d7e80fa64"],["/static/js/39.ff9d6bd.js","da635db8c11f784d1507fbeaabaf4e6b"],["/static/js/4.3d20e9a.js","f267e098109fdf47b3d004d0e375f875"],["/static/js/40.59c55f6.js","5cec31d9c70dfdf21bb84ff7f1383013"],["/static/js/41.67eda0a.js","063679929714edcfb3118046a4a4ffd5"],["/static/js/42.848ff27.js","c3c6f4da310f5740e84d32d09e1fc4fa"],["/static/js/43.3b10806.js","c16dc6ca0a319a445c56b162cc7fcdc5"],["/static/js/44.abba559.js","144eceab0bbc70d972bc1aafdf8360ef"],["/static/js/5.fc845ae.js","9bca895461270f03cf2e86a96cf7ecec"],["/static/js/6.86c49d8.js","8f7817dba15545ba1f53e036af422178"],["/static/js/7.b1d85d6.js","5fc9250f5e24732ee249a3c5a78b985f"],["/static/js/8.253329c.js","cb2690de6e4028e6fbec9a5ea7e6c59a"],["/static/js/9.2ff2e8e.js","cb3df000b4681cde28d624977be2ee32"],["/static/js/AdminLogin.dd86a53.js","d5b32b9dab5ca56787f488e29bc80090"],["/static/js/Article.a7ac731.js","f0e6e50388e4ad3c3345472b183c67c6"],["/static/js/ArticleList.e5c60e4.js","11cb95723793fae1298754ee538f87ad"],["/static/js/CmsCase.2aec13c.js","3709e74c3bfe43f78ef76423cac7a23c"],["/static/js/SiteMap.4f4bf60.js","4b88cec32dad07f42fce8f1673102c1e"],["/static/js/UserAddContent.c91b5c3.js","b568d7dcb0c87b61f8012950d1871ac6"],["/static/js/UserCenter.6872063.js","1cd48abb3dbdbe32607f3042cd861533"],["/static/js/UserContents.c5d541d.js","92a19da7f4b66e4fecd0d5df3096e950"],["/static/js/UserLoginForm.6c51ba1.js","acf9cc30581eeff338d065cfb1441258"],["/static/js/UserMessage.a36dec6.js","3bd2c46ef8a5e45f41b0be8737ec7e1a"],["/static/js/UserPwd.458c0ec.js","b8de56dace600d0883ab716c3cee7329"],["/static/js/UserRegForm.91a939a.js","49cb5fe778ecbef932086859fd5f882c"],["/static/js/UserReplies.7e32278.js","2788359aabf288f6bc2a33d005214aef"],["/static/js/admin.5e2ef29.js","103fbaeacecfc866c007a3ac7db48df3"],["/static/js/app.7ff975a.js","cc0a4a8a0bc00c00cf4608d519c4d41e"],["/static/js/element.c9bc6dc.js","1c4f70e0442533b75f4a4c6abc39c170"],["/static/js/manifest.7430be8.js","521123c5de8354e5e01efe6e230d8634"],["/static/js/vendor.80ee539.js","6f37af9b2ecf15faa79cebba81d6549d"]];
var cacheName = 'sw-precache-v3-doracms-vue2-ssr-' + (self.registration ? self.registration.scope : '');


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
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /./);
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







