import{a as p,S,i as c}from"./assets/vendor-Dy2ZTtfi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const m="50822594-66f906f8174863719ea2394f1",h="https://pixabay.com/api/";async function q(r){return(await p(h,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}let g=15;async function $(r,s=1){const t=await p(`${h}`,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g,page:s}});return console.log(t.data.hits),t.data}const f=document.querySelector(".list"),y=document.querySelector(".loader"),l=document.querySelector(".btn-more"),E=new S(".gallery a",{captionsData:"alt",captionDelay:250});function v(r){const s=r.map(({largeImageURL:t,webformatURL:i,tags:e,likes:o,views:a,comments:w,downloads:b})=>`
    <li class="gallery-item">
    <div class="gallery-card">
    <a class="gallery-link" href="${t}">
        <img class="gallery-image" src="${i}" alt="${e}" />
      </a>
    </div>
      
      <div class="descr">
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="/img/icons.svg#icon-likes"></use>
            </svg>
          Likes:</span>
          <span class="descr-value">${o}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="/img/icons.svg#icon-views"></use>
            </svg>
          Views:</span>
          <span class="descr-value">${a}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="/img/icons.svg#icon-comments"></use>
            </svg>
          Comments:</span>
          <span class="descr-value">${w}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="/img/icons.svg#icon-download"></use>
            </svg>
          Downloads:</span>
          <span class="descr-value">${b}</span>
        </div>      
      </div>
    </li>
    `).join("");f.insertAdjacentHTML("beforeend",s),E.refresh()}function R(){f.innerHTML=""}function M(){y.classList.remove("hidden")}function O(){y.classList.add("hidden")}function P(){l.classList.remove("hidden")}function d(){l.classList.add("hidden")}let n=1;const L=document.querySelector(".form"),B=document.querySelector("input");L.addEventListener("submit",C);l.addEventListener("click",D);let u;async function C(r){r.preventDefault();const s=B.value.toLocaleLowerCase().trim();if(u=s,!s){c.error({title:"❌ Error",message:"Будь ласка, введіть запит!!!",position:"topRight"});return}n=1,R(),M(),P();try{const t=await q(s);if(t.hits.length===0){c.error({title:"❌ Error",message:"Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Спробуйте ще раз!",position:"topRight"}),d();return}v(t.hits),t.hits.length<g&&d()}catch(t){console.error(t),c.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}finally{O(),L.reset()}}async function D(r){r.preventDefault(),n+=1,l.disabled=!0;try{const s=await $(u,n);console.log(u),v(s.hits);const t=Math.ceil(s.totalHits/g);n>=t&&(d(),c.show({title:"Info: ",message:"Вибачте, але ви дійшли до кінця результатів пошуку",position:"topRight"})),console.log(s),console.log(n),console.log(s.totalHits),l.disabled=!1;const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})}catch{c.error({title:"Load more - Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}}
//# sourceMappingURL=index.js.map
