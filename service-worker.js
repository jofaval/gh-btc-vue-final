if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let u={};const r=e=>l(e,c),f={module:{uri:c},exports:u,require:r};s[c]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(n(...e),u)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"gh-btc-vue-final"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/gh-btc-vue-final/css/108.a03c35e7.css",revision:null},{url:"/gh-btc-vue-final/css/206.65f38b16.css",revision:null},{url:"/gh-btc-vue-final/css/362.021b1aca.css",revision:null},{url:"/gh-btc-vue-final/css/53.1e458eab.css",revision:null},{url:"/gh-btc-vue-final/css/65.01a719a0.css",revision:null},{url:"/gh-btc-vue-final/css/98.94e44af3.css",revision:null},{url:"/gh-btc-vue-final/css/app.c9db5f44.css",revision:null},{url:"/gh-btc-vue-final/css/chunk-vendors.1944359c.css",revision:null},{url:"/gh-btc-vue-final/img/geekshubs.a87508ac.svg",revision:null},{url:"/gh-btc-vue-final/img/jofaval.2a4f132b.jpg",revision:null},{url:"/gh-btc-vue-final/index.html",revision:"fc2f4d099cee9ed3f0eab786bf66ec4d"},{url:"/gh-btc-vue-final/js/108.19d8f7c2.js",revision:null},{url:"/gh-btc-vue-final/js/206.f0ded4cf.js",revision:null},{url:"/gh-btc-vue-final/js/362.f1e9971c.js",revision:null},{url:"/gh-btc-vue-final/js/53.4690f3c9.js",revision:null},{url:"/gh-btc-vue-final/js/65.7cb324c5.js",revision:null},{url:"/gh-btc-vue-final/js/98.7450f057.js",revision:null},{url:"/gh-btc-vue-final/js/app.b67112d6.js",revision:null},{url:"/gh-btc-vue-final/js/chunk-vendors.0c732c3d.js",revision:null},{url:"/gh-btc-vue-final/manifest.json",revision:"32d52cb69d7f6e89dbc77c2f583394aa"},{url:"/gh-btc-vue-final/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
