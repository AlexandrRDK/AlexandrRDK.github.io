(()=>{"use strict";function e(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}window.addEventListener("DOMContentLoaded",(()=>{(function(){const e=document.querySelector(".menu"),t=document.querySelectorAll(".menu__item"),o=document.querySelector(".hamburger");o.addEventListener("click",(()=>{o.classList.toggle("hamburger__active"),e.classList.toggle("menu__active")})),t.forEach((t=>{t.addEventListener("click",(()=>{o.classList.toggle("hamburger__active"),e.classList.toggle("menu__active")}))}))})(),document.querySelectorAll(".smooth-scroll").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href"),o=document.querySelector(t).offsetTop;window.scroll({top:o,left:0,behavior:"smooth"})}))})),function({slide:e,prevArrow:t,nextArrow:o,wrapper:n,field:r}){let c=1,l=0;const s=document.querySelectorAll(e),a=document.querySelector(t),i=document.querySelector(o),d=document.querySelector(n),u=document.querySelector(r),m=window.getComputedStyle(d).width;function y(e){return+e.replace(/\D/g,"")}u.style.width=100*s.length+"%",u.style.display="flex",u.style.transition="0.5s all",d.style.overflow="hidden",s.forEach((e=>{e.style.width=m})),i.addEventListener("click",(()=>{l==y(m)*(s.length-1)?l=0:l+=y(m),u.style.transform=`translateX(-${l}px)`,c==s.length?c=1:c++})),a.addEventListener("click",(()=>{0==l?l=y(m)*(s.length-1):l-=y(m),u.style.transform=`translateX(-${l}px)`,1==c?c=s.length:c--}))}({slide:".carousel__item",nextArrow:".carousel__next",prevArrow:".carousel__prev",wrapper:".carousel",field:".carousel-inner"}),function(t){function o(t){document.querySelector(".modal").classList.add("show"),document.querySelector(".modal").classList.remove("hide");const o=document.querySelector(".modal__dialog");o.textContent=`${t}`,setTimeout((()=>{o.textContent="",e(".modal")}),1e4)}document.querySelectorAll(t).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();let n=document.createElement("img");n.src="icons/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",t.insertAdjacentElement("afterend",n);const r=new FormData(t);(async(e,t)=>{const o=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await o.json()})(0,JSON.stringify(Object.fromEntries(r.entries()))).then((e=>{console.log(e),o("Спасибо! Скоро мы с вами свяжемся"),n.remove()})).catch((()=>{o("Что-то пошло не так...")})).finally((()=>{t.reset()}))}))}))}("form"),function(t){const o=document.querySelector(t);o.addEventListener("click",(n=>{n.target!==o&&""!=n.target.getAttribute("data-close")||e(t)})),document.addEventListener("keydown",(n=>{"Escape"===n.code&&o.classList.contains("show")&&e(t)}))}(".modal")}))})();
//# sourceMappingURL=bundle.js.map