if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(e[u])return;let c={};const r=s=>l(s,u),f={module:{uri:u},exports:c,require:r};e[u]=Promise.all(i.map((s=>f[s]||r(s)))).then((s=>(n(...s),c)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"gh-btc-vue-final"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/gh-btc-vue-final/css/108.fb281ff6.css",revision:null},{url:"/gh-btc-vue-final/css/762.781c5bf5.css",revision:null},{url:"/gh-btc-vue-final/css/775.68f7ae68.css",revision:null},{url:"/gh-btc-vue-final/css/855.54cc233d.css",revision:null},{url:"/gh-btc-vue-final/css/974.113fe1bb.css",revision:null},{url:"/gh-btc-vue-final/css/983.51bb33ef.css",revision:null},{url:"/gh-btc-vue-final/css/app.f5065442.css",revision:null},{url:"/gh-btc-vue-final/css/chunk-vendors.1944359c.css",revision:null},{url:"/gh-btc-vue-final/img/geekshubs.a87508ac.svg",revision:null},{url:"/gh-btc-vue-final/img/jofaval.2a4f132b.jpg",revision:null},{url:"/gh-btc-vue-final/index.html",revision:"a45fc836f8fc5d1882eac822d2159227"},{url:"/gh-btc-vue-final/js/108.025958a4.js",revision:null},{url:"/gh-btc-vue-final/js/762.00ea29f6.js",revision:null},{url:"/gh-btc-vue-final/js/775.e9148c1e.js",revision:null},{url:"/gh-btc-vue-final/js/855.2150bf7e.js",revision:null},{url:"/gh-btc-vue-final/js/974.1f1f2596.js",revision:null},{url:"/gh-btc-vue-final/js/983.00101ac5.js",revision:null},{url:"/gh-btc-vue-final/js/app.d0320e68.js",revision:null},{url:"/gh-btc-vue-final/js/chunk-vendors.0c732c3d.js",revision:null},{url:"/gh-btc-vue-final/manifest.json",revision:"32d52cb69d7f6e89dbc77c2f583394aa"},{url:"/gh-btc-vue-final/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
