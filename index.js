import{a as q,S as $,i as l}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const B="50822594-66f906f8174863719ea2394f1",E="https://pixabay.com/api/";let R=15;async function p(r,t=1){return(await q(E,{params:{key:B,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:R}})).data}const m=document.querySelector(".list"),f=document.querySelector(".loader"),c=document.querySelector(".btn-more"),M=new $(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const t=r.map(({largeImageURL:o,webformatURL:a,tags:e,likes:s,views:n,comments:w,downloads:S})=>`
    <li class="gallery-item">
    <div class="gallery-card">
    <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${a}" alt="${e}" />
      </a>
    </div>
      
      <div class="descr">
        <div class="descr-img">
          <span class="descr-label">
            
          Likes:</span>
          <span class="descr-value">${s}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            
          Views:</span>
          <span class="descr-value">${n}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            
          Comments:</span>
          <span class="descr-value">${w}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            
          Downloads:</span>
          <span class="descr-value">${S}</span>
        </div>      
      </div>
    </li>
    `).join("");m.insertAdjacentHTML("beforeend",t),M.refresh()}function O(){m.innerHTML=""}function h(){f.classList.remove("hidden")}function y(){f.classList.add("hidden")}function v(){c.classList.remove("hidden")}function d(){c.classList.add("hidden")}let i=1,L=15;const b=document.querySelector(".form"),P=document.querySelector("input");b.addEventListener("submit",_);c.addEventListener("click",D);let u;async function _(r){r.preventDefault();const t=P.value.toLocaleLowerCase().trim();if(u=t,!t){l.error({title:"❌ Error",message:"Будь ласка, введіть запит!!!",position:"topRight"});return}i=1,O(),h();try{const o=await p(t,i);if(console.log("sub",i),o.hits.length===0){l.error({title:"❌ Error",message:"Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Спробуйте ще раз!",position:"topRight"}),d();return}g(o.hits),o.hits.length<L?d():v()}catch(o){console.error(o),l.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}finally{y(),b.reset()}}async function D(r){r.preventDefault(),i+=1,c.disabled=!0,h(),d();try{const t=await p(u,i);console.log(u),g(t.hits);const o=Math.ceil(t.totalHits/L);i>=o?(d(),l.show({title:"Info: ",message:"Вибачте, але ви дійшли до кінця результатів пошуку",position:"topRight"})):c.disabled=!1,console.log(t),console.log(i),console.log(t.totalHits),y(),v();const a=document.querySelector(".gallery-item");if(a){const e=a.getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})}}catch{l.error({title:"Load more - Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}}
//# sourceMappingURL=index.js.map
