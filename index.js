import{a as S,S as q,i as c}from"./assets/vendor-Dy2ZTtfi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const $="50822594-66f906f8174863719ea2394f1",B="https://pixabay.com/api/";let E=15;async function p(r,s=1){return(await S(B,{params:{key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:E}})).data}const g=document.querySelector(".list"),f=document.querySelector(".loader"),l=document.querySelector(".btn-more"),R=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const s=r.map(({largeImageURL:o,webformatURL:i,tags:e,likes:t,views:n,comments:b,downloads:w})=>`
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
              <use href="/public/icons.svg#icon-likes"></use>
            </svg>
          Likes:</span>
          <span class="descr-value">${t}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="/public/icons.svg#icon-views"></use>
            </svg>
          Views:</span>
          <span class="descr-value">${n}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="/public/icons.svg#icon-comments"></use>
            </svg>
          Comments:</span>
          <span class="descr-value">${b}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="/public/icons.svg#icon-download"></use>
            </svg>
          Downloads:</span>
          <span class="descr-value">${w}</span>
        </div>      
      </div>
    </li>
    `).join("");g.insertAdjacentHTML("beforeend",s),R.refresh()}function M(){g.innerHTML=""}function m(){f.classList.remove("hidden")}function v(){f.classList.add("hidden")}function O(){l.classList.remove("hidden")}function d(){l.classList.add("hidden")}let a=1,y=15;const L=document.querySelector(".form"),P=document.querySelector("input");L.addEventListener("submit",_);l.addEventListener("click",D);let u;async function _(r){r.preventDefault();const s=P.value.toLocaleLowerCase().trim();if(u=s,!s){c.error({title:"❌ Error",message:"Будь ласка, введіть запит!!!",position:"topRight"});return}a=1,M(),m();try{const o=await p(s,a);if(console.log("sub",a),o.hits.length===0){c.error({title:"❌ Error",message:"Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Спробуйте ще раз!",position:"topRight"}),d();return}h(o.hits),o.hits.length<y?d():O()}catch(o){console.error(o),c.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}finally{v(),L.reset()}}async function D(r){r.preventDefault(),a+=1,l.disabled=!0,m();try{const s=await p(u,a);console.log(u),h(s.hits);const o=Math.ceil(s.totalHits/y);a>=o?(d(),c.show({title:"Info: ",message:"Вибачте, але ви дійшли до кінця результатів пошуку",position:"topRight"})):l.disabled=!1,console.log(s),console.log(a),console.log(s.totalHits),v();const i=document.querySelector(".gallery-item");if(i){const e=i.getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})}}catch{c.error({title:"Load more - Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}}
//# sourceMappingURL=index.js.map
