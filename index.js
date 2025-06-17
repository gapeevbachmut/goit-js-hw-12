import{a as p,S as m,i as n}from"./assets/vendor-Dy2ZTtfi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const f="50822594-66f906f8174863719ea2394f1",h="https://pixabay.com/api/";async function v(i){return(await p(h,{params:{key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".list"),l=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({largeImageURL:t,webformatURL:o,tags:e,likes:s,views:a,comments:u,downloads:g})=>`
    <li class="gallery-item">
    <div class="gallery-card">
    <a class="gallery-link" href="${t}">
        <img class="gallery-image" src="${o}" alt="${e}" />
      </a>
    </div>
      
      <div class="descr">
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="/img/icons.svg#icon-likes"></use>
            </svg>
          Likes:</span>
          <span class="descr-value">${s}</span>
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
          <span class="descr-value">${u}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="/img/icons.svg#icon-download"></use>
            </svg>
          Downloads:</span>
          <span class="descr-value">${g}</span>
        </div>      
      </div>
    </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function w(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const d=document.querySelector(".form"),q=document.querySelector("input");d.addEventListener("submit",$);async function $(i){i.preventDefault();const r=q.value.toLocaleLowerCase().trim();if(!r){n.error({title:"❌ Error",message:"Будь ласка, введіть запит!!!",position:"topRight"});return}w(),b();try{const t=await v(r);if(t.hits.length===0){n.error({title:"❌ Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits)}catch(t){console.error(t),n.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}finally{S(),d.reset()}}
//# sourceMappingURL=index.js.map
