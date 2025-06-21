import{a as q,S as $,i as l}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const B="50822594-66f906f8174863719ea2394f1",E="https://pixabay.com/api/";let R=15;async function p(o,t=1){return(await q(E,{params:{key:B,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:R}})).data}const m=document.querySelector(".list"),f=document.querySelector(".loader"),c=document.querySelector(".btn-more"),M=new $(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const t=o.map(({largeImageURL:s,webformatURL:a,tags:e,likes:r,views:n,comments:w,downloads:S})=>`
    <li class="gallery-item">
    <div class="gallery-card">
    <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${a}" alt="${e}" />
      </a>
    </div>
      
      <div class="descr">
        <div class="descr-img">
          <span class="descr-label">
            
          Likes:</span>
          <span class="descr-value">${r}</span>
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
    `).join("");m.insertAdjacentHTML("beforeend",t),M.refresh()}function O(){m.innerHTML=""}function h(){f.classList.remove("hidden")}function y(){f.classList.add("hidden")}function v(){c.classList.remove("hidden")}function d(){c.classList.add("hidden")}let L,i=1,P=15,u=0;const b=document.querySelector(".form"),_=document.querySelector("input");b.addEventListener("submit",D);c.addEventListener("click",I);async function D(o){o.preventDefault();const t=_.value.toLocaleLowerCase().trim();if(L=t,!t){l.error({title:"❌ Error",message:"Будь ласка, введіть запит!!!",position:"topRight"});return}i=1,O(),h();try{const s=await p(t,i);if(s.hits.length===0){l.error({title:"❌ Error",message:"Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Спробуйте ще раз!",position:"topRight"}),d();return}u=Math.ceil(s.totalHits/P),g(s.hits),i>=u?d():v()}catch(s){console.error(s),l.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}finally{y(),b.reset()}}async function I(o){o.preventDefault(),i+=1,c.disabled=!0,h(),d();try{const t=await p(L,i);g(t.hits),i>=u?(d(),l.show({title:"Info: ",message:"Вибачте, але ви дійшли до кінця результатів пошуку",position:"topRight"})):(c.disabled=!1,v());const s=document.querySelector(".gallery-item");if(s){const a=s.getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}}catch{l.error({title:"Load more - Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}finally{y()}}
//# sourceMappingURL=index.js.map
