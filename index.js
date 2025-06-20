import{a as p,S,i as c}from"./assets/vendor-Dy2ZTtfi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const m="50822594-66f906f8174863719ea2394f1",h="https://pixabay.com/api/";async function q(r,e){return(await p(h,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:e}})).data}let d=15;async function $(r,e=1){const t=await p(`${h}`,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:e}});return console.log(t.data.hits),t.data}const f=document.querySelector(".list"),y=document.querySelector(".loader"),l=document.querySelector(".btn-more"),E=new S(".gallery a",{captionsData:"alt",captionDelay:250});function v(r){const e=r.map(({largeImageURL:t,webformatURL:i,tags:s,likes:o,views:a,comments:w,downloads:b})=>`
    <li class="gallery-item">
    <div class="gallery-card">
    <a class="gallery-link" href="${t}">
        <img class="gallery-image" src="${i}" alt="${s}" />
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
    `).join("");f.insertAdjacentHTML("beforeend",e),E.refresh()}function R(){f.innerHTML=""}function M(){y.classList.remove("hidden")}function O(){y.classList.add("hidden")}function P(){l.classList.remove("hidden")}function u(){l.classList.add("hidden")}let n=1;const L=document.querySelector(".form"),B=document.querySelector("input");L.addEventListener("submit",C);l.addEventListener("click",D);let g;async function C(r){r.preventDefault();const e=B.value.toLocaleLowerCase().trim();if(g=e,!e){c.error({title:"❌ Error",message:"Будь ласка, введіть запит!!!",position:"topRight"});return}n=1,R(),M(),P();try{const t=await q(e);if(t.hits.length===0){c.error({title:"❌ Error",message:"Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Спробуйте ще раз!",position:"topRight"}),u();return}v(t.hits),t.hits.length<d&&u()}catch(t){console.error(t),c.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}finally{O(),L.reset()}}async function D(r){r.preventDefault(),n+=1,l.disabled=!0;try{const e=await $(g,n);console.log(g),v(e.hits);const t=Math.ceil(e.totalHits/d);n>=t&&(u(),c.show({title:"Info: ",message:"Вибачте, але ви дійшли до кінця результатів пошуку",position:"topRight"})),console.log(e),console.log(n),console.log(e.totalHits),l.disabled=!1;const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:s*2,behavior:"smooth"})}catch{c.error({title:"Load more - Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}}
//# sourceMappingURL=index.js.map
