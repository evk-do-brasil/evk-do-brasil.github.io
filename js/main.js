(()=>{"use strict";var t,e,i,n=function(t,e){return void 0===e&&(e=document),t?Array.from(e.querySelectorAll(t)):[document]};n.first=function(t,e){return void 0===e&&(e=document),t?e.querySelector(t):e},t=n.first(".site-nav"),e=n.first(".site-nav__button"),i=n.first(".site-nav__container"),e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-controls",null==t?void 0:t.id),t.classList.add("off"),e.addEventListener("click",(function(){e.setAttribute("aria-expanded",t.classList.contains("off").toString()),t.classList.toggle("off")})),document.addEventListener("click",(function(n){i.contains(n.target)||(e.setAttribute("aria-expanded","false"),t.classList.add("off"))}))})();