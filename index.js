import{a as u,S as f,i as n}from"./assets/vendor-DzBlEn4a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const h="52824914-67b35cbaeb2ca1734ba8e47a6",g="https://pixabay.com/api/",m=s=>u(g,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(console.log(t),t.data)).catch(t=>{console.log(t)}),l=document.querySelector(".gallery"),c=document.querySelector(".loader");let d=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",disableScroll:!0});d.on("show.simplelightbox",()=>{console.log("Lightbox opened")});function p(s){const t=s.map(r=>{const i=r.tags.split(",").slice(0,3).join(", ");return`
      
      <li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
      alt="${i}"
    />
  </a>
  <div class="info">
  <div class="info-block">
    <h4 class="card-heading">Likes</h4>
    <p class="info__text">${r.likes}</p>
  </div>
  <div class="info-block">
    <h4 class="card-heading">Views</h4>
    <p class="info__text">${r.views}</p>
  </div>
  <div class="info-block">
    <h4 class="card-heading">Comments</h4>
    <p class="info__text">${r.comments}</p>
  </div>
  <div class="info-block">
    <h4 class="card-heading">Downloads</h4>
    <p class="info__text">${r.downloads}</p>
  </div>
</div>
</li>
     `}).join("");l.insertAdjacentHTML("beforeend",t),d.refresh()}function y(){l.innerHTML=""}function b(){c.classList.add("active")}function L(){c.classList.remove("active")}const v=document.querySelector(".form");document.querySelector('[name="search-text"]');v.addEventListener("submit",w);function w(s){s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(console.log(t),!t){n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"});return}b(),y(),m(t).then(r=>{if(!r.hits||r.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(r.hits)}).catch(r=>{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L(),s.target.reset()})}
//# sourceMappingURL=index.js.map
