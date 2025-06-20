import{a as w,S as b,i as a}from"./assets/vendor-Dy2ZTtfi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const S="50822594-66f906f8174863719ea2394f1",q="https://pixabay.com/api/";let c=1,g=15;async function m(r,s){return(await w(q,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g,page:s}})).data}function P(){c+=1}function E(){c=1}const p=document.querySelector(".list"),f=document.querySelector(".loader"),l=document.querySelector(".btn-more"),R=new b(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const s=r.map(({largeImageURL:o,webformatURL:i,tags:e,likes:t,views:n,comments:y,downloads:L})=>`
    <li class="gallery-item">
    <div class="gallery-card">
    <a class="gallery-link" href="${o}">
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
          <span class="descr-value">${t}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="/img/icons.svg#icon-views"></use>
            </svg>
          Views:</span>
          <span class="descr-value">${n}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="/img/icons.svg#icon-comments"></use>
            </svg>
          Comments:</span>
          <span class="descr-value">${y}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="/img/icons.svg#icon-download"></use>
            </svg>
          Downloads:</span>
          <span class="descr-value">${L}</span>
        </div>      
      </div>
    </li>
    `).join("");p.insertAdjacentHTML("beforeend",s),R.refresh()}function $(){p.innerHTML=""}function M(){f.classList.remove("hidden")}function O(){f.classList.add("hidden")}function B(){l.classList.remove("hidden")}function d(){l.classList.add("hidden")}const v=document.querySelector(".form"),D=document.querySelector("input");v.addEventListener("submit",I);l.addEventListener("click",x);let u;async function I(r){r.preventDefault();const s=D.value.toLocaleLowerCase().trim();if(u=s,!s){a.error({title:"❌ Error",message:"Будь ласка, введіть запит!!!",position:"topRight"});return}E(),$(),M(),B();try{const o=await m(s);if(o.hits.length===0){a.error({title:"❌ Error",message:"Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Спробуйте ще раз!",position:"topRight"}),d();return}h(o.hits),o.hits.length<g&&d()}catch(o){console.error(o),a.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}finally{O(),v.reset()}}async function x(r){r.preventDefault(),P(),l.disabled=!0;try{const s=await m(u,c);console.log(u),h(s.hits);const o=Math.ceil(s.totalHits/g);c>=o&&(d(),a.show({title:"Info: ",message:"Вибачте, але ви дійшли до кінця результатів пошуку",position:"topRight"})),console.log(s),console.log(c),console.log(s.totalHits),l.disabled=!1;const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})}catch{a.error({title:"Load more - Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}}
//# sourceMappingURL=index.js.map
