workbox.core.setCacheNameDetails({prefix: "proyecto-wikimusik-vue"});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
    new RegExp(/https:\/\/wikimusik-servicio-web\.herokuapp\.com\//),
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    new RegExp(/https:\/\/api\.nytimes\.com\//),
    new workbox.strategies.NetworkFirst()
);
