if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/161-e5bb11d0d5027353.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/259-2e8a8a005da085cf.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/343-7279e7f5d60be205.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/522-7fb2f66dc6f52581.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/729-d3765bc9646bc55f.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/881d3f63-368a6da874e57887.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/app/layout-7349c3eda737fa27.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/app/not-found-a1184713703df453.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/app/page-39ca407387dfdba3.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/app/projects/%5Bproject%5D/not-found-e37e6b289a80f529.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/app/projects/%5Bproject%5D/page-bd77c499251a1607.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/app/projects/page-6d4a37d0e57d6402.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/app/trpc-demo/page-11a161d4db459c39.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/main-app-13c6d2eb5f81d3ab.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/main-ec83931dda6d7cc6.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/pages/_app-ec088163185ca6c2.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/pages/_error-7d0859df3ed733bb.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-fa73d424507732d7.js",revision:"dGurVSSb2Z9MVzZQ1tgWm"},{url:"/_next/static/css/b0cf08da0c77b534.css",revision:"b0cf08da0c77b534"},{url:"/_next/static/dGurVSSb2Z9MVzZQ1tgWm/_buildManifest.js",revision:"3bb75ef2f5cd9cee224672fbadf6658a"},{url:"/_next/static/dGurVSSb2Z9MVzZQ1tgWm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"bac7b6a0866ffe554f659cbd8cf979f3"},{url:"/android-chrome-512x512.png",revision:"6472ddf8e972197a7573bd783c9f208c"},{url:"/apple-touch-icon.png",revision:"767d3116b71bab7592b1cff1f09106dd"},{url:"/favicon-16x16.png",revision:"553a27cff8a933610c5453406813a0fc"},{url:"/favicon-32x32.png",revision:"b5eb860a7cdf8cdcc6b4c2fd0920bcb4"},{url:"/favicon.ico",revision:"65bfaa33b28f84e7bd360156505f91e6"},{url:"/site.webmanifest",revision:"21dbab617814c28e645003e17dd7969d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
