if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>i(e,o),l={module:{uri:o},exports:c,require:t};s[o]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"gh-btc-vue-final"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.75f5d676.css",revision:null},{url:"/index.html",revision:"f581dc0653f0c21ee5de4158ec4ccf94"},{url:"/js/about.8fa6d87a.js",revision:null},{url:"/js/app.9ad0ac73.js",revision:null},{url:"/js/chunk-vendors.7cbd0684.js",revision:null},{url:"/manifest.json",revision:"32d52cb69d7f6e89dbc77c2f583394aa"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
