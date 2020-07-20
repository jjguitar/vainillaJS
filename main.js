!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var a=t.p+"assets/img/a87a4c766de4c9c10f581df21e92cfea.png";var r=()=>`\n  <div class="Header-main">\n    <div class="Header-logo">\n      <h1>\n        <a href="/#">\n          <img src="${a}" alt="logo">\n        </a>\n      </h1>\n    </div>\n    <div class="Header-nav">\n      <div class="change">\n        <span class="toogle-text" id="texto-toogle"></span>\n        <label class="theme-switch" for="checkbox">\n          <input type="checkbox" id="checkbox" />\n          <span class="slider round"></span>\n        </label>\n      </div>\n    </div>\n  </div>\n  `;const i="https://rickandmortyapi.com/api/character/";var o=async e=>{const n=e?`${i}${e}`:i;try{const e=await fetch(n);return await e.json()}catch(e){console.log("Fetch Error",e)}};var s=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var c=async()=>{const e=await s();return`\n  <section class="About">\n    <span>All data is provided from <a href="https://rickandmortyapi.com/">Rick and Morty API</a></span>\n  </section>\n  <div class="Characters">\n    ${(await o(e)).results.map(e=>`\n    <article class="Character-item">\n      <a href="#/${e.id}/">\n        <img class="Character-img" src="${e.image}" alt="${e.name}">\n        <h2>${e.name}</h2>\n      </a>\n    </article>\n    `).join("")}\n\n  </div>\n  `};var l=async()=>{const e=await o();let n=[];for(let t=1;t<=e.info.pages;t++)n.push(t);let t=0;return`\n    <div class="Footer-pages">\n        <h4>Pages</h4>\n        <div>\n            ${n.map(()=>`<a href="#/?page=${++t}/">${t}</a>`).join("")}\n        </div>\n    </div>\n    `};var d=()=>'\n  <div class="Error404">\n    <h2>\n      Error 404\n    </h2>\n  </div>\n  ';var u=e=>{if("about"!=e){if("/"===e)return e;if(e.length<=3)return"/:id";if(e.includes("page"))return"/:pages"}return console.log("se fue por route: "+e),"/"+e};const h={"/":c,"/:id":async()=>{const e=s(),n=await o(e);return`\n  <div class="Characters-inner">\n    <article class="Characters-card">\n      <img src="${n.image}" alt="${n.name}">\n      <h2>${n.name}</h2>\n    </article>\n    <article class="Characters-card">\n      <h3>Episodes: <span>${n.episode.length}</span></h3>\n      <h3>Status: <span>${n.status}</span></h3>\n      <h3>Species: <span>${n.species}</span></h3>\n      <h3>Gender: <span>${n.gender}</span></h3>\n      <h3>Origin: <span>${n.origin.name}</span></h3>\n      <h3>Last location: <span>${n.location.name}</span></h3>\n    </article>\n  </div>\n  `},"/contact":"Contact","/:pages":c};var p=async()=>{const e=document.getElementById("header"),n=document.getElementById("content"),t=document.getElementById("footer");e.innerHTML=await r();let a=s(),i=await u(a),o=h[i]?h[i]:d;n.innerHTML=await o(),t.innerHTML=await l();const c=document.querySelector('.theme-switch input[type="checkbox"]');var p=document.getElementById("texto-toogle");p.innerHTML="Light Mode",c.addEventListener("change",(function(e){e.target.checked?(document.documentElement.setAttribute("data-theme","light"),p.innerHTML="Dark Mode"):(document.documentElement.setAttribute("data-theme","dark"),p.innerHTML="Light Mode")}),!1)};window.addEventListener("load",p),window.addEventListener("hashchange",p)}]);
