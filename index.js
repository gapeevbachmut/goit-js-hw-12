import{a as q,S as $,i as c}from"./assets/vendor-Dy2ZTtfi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const B="50822594-66f906f8174863719ea2394f1",E="https://pixabay.com/api/";let R=15;async function g(r,s=1){return(await q(E,{params:{key:B,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:R}})).data}const p=document.querySelector(".list"),m=document.querySelector(".loader"),l=document.querySelector(".btn-more"),M=new $(".gallery a",{captionsData:"alt",captionDelay:250});function f(r){const s=r.map(({largeImageURL:o,webformatURL:i,tags:e,likes:t,views:n,comments:b,downloads:S})=>`
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
              <use href="../img/icons.svg#icon-likes"></use>
            </svg>
          Likes:</span>
          <span class="descr-value">${t}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="../img/icons.svg#icon-views"></use>
            </svg>
          Views:</span>
          <span class="descr-value">${n}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="../img/icons.svg#icon-comments"></use>
            </svg>
          Comments:</span>
          <span class="descr-value">${b}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            <svg width="10" height="10">
              <use href="../img/icons.svg#icon-download"></use>
            </svg>
          Downloads:</span>
          <span class="descr-value">${S}</span>
        </div>      
      </div>
    </li>
    `).join("");p.insertAdjacentHTML("beforeend",s),M.refresh()}function O(){p.innerHTML=""}function h(){m.classList.remove("hidden")}function v(){m.classList.add("hidden")}function y(){l.classList.remove("hidden")}function d(){l.classList.add("hidden")}let a=1,L=15;const w=document.querySelector(".form"),P=document.querySelector("input");w.addEventListener("submit",_);l.addEventListener("click",D);let u;async function _(r){r.preventDefault();const s=P.value.toLocaleLowerCase().trim();if(u=s,!s){c.error({title:"❌ Error",message:"Будь ласка, введіть запит!!!",position:"topRight"});return}a=1,O(),h();try{const o=await g(s,a);if(console.log("sub",a),o.hits.length===0){c.error({title:"❌ Error",message:"Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Спробуйте ще раз!",position:"topRight"}),d();return}f(o.hits),o.hits.length<L?d():y()}catch(o){console.error(o),c.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}finally{v(),w.reset()}}async function D(r){r.preventDefault(),a+=1,l.disabled=!0,h(),d();try{const s=await g(u,a);console.log(u),f(s.hits);const o=Math.ceil(s.totalHits/L);a>=o?(d(),c.show({title:"Info: ",message:"Вибачте, але ви дійшли до кінця результатів пошуку",position:"topRight"})):l.disabled=!1,console.log(s),console.log(a),console.log(s.totalHits),v(),y();const i=document.querySelector(".gallery-item");if(i){const e=i.getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})}}catch{c.error({title:"Load more - Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}}
//# sourceMappingURL=index.js.map
