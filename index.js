import"./assets/styles-B-BVPyWf.js";import{a}from"./assets/vendor-N5iQpiFS.js";async function p(){try{return(await a("https://dummyjson.com/products/category-list")).data}catch(t){throw console.log(t.message),new Error("Something went wrong!")}}async function l(t=1){try{return(await a.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data}catch(o){throw console.log(o.message),new Error("Something went wrong!")}}async function m(t,o=1){try{return(await a.get(`https://dummyjson.com/products/category/${t}?limit=12&skip=${(o-1)*12}`)).data}catch(e){throw console.log(e.message),new Error("Something went wrong!")}}async function g(t){try{return(await a.get(`https://dummyjson.com/products/${t}`)).data}catch(o){throw console.log(o.message),new Error("Something went wrong!")}}const s={categotiesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divNotFound:document.querySelector(".not-found"),divModal:document.querySelector(".modal-product"),modal:document.querySelector(".modal"),modalCloseBtn:document.querySelector(".modal__close-btn")};function _(t){const o=["All",...t].map(e=>`
    <li class="categories__item">
        <button class="categories__btn" type="button">${e}</button>
    </li>
 `).join("");s.categotiesList.insertAdjacentHTML("beforeend",o)}function u(t){const o=t.map(({id:e,title:c,thumbnail:r,brand:n,category:i,price:d})=>`
    <li class="products__item" data-id="${e}">
    <img class="products__image" src="${r}" alt="${c}"/>
    <p class="products__title">${c}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${n}</span></p>
    <p class="products__category">Category:${i}</p>
    <p class="products__price">Price:${d}$</p>
 </li>
    `).join("");s.productsList.insertAdjacentHTML("beforeend",o)}function y(){s.divNotFound.classList.remove("not-found--visible"),s.productsList.innerHTML=""}function L({title:t,thumbnail:o,shippingInformation:e,category:c,price:r,description:n,returnPolicy:i}){const d=`
    <img class="modal-product__img" src="${o}" alt="${t}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${t}</p>
        <ul class="modal-product__tags">${c}</ul>
        <p class="modal-product__description">${n}</p>
        <p class="modal-product__shipping-information">Shipping:${e}</p>
        <p class="modal-product__return-policy">Return Policy:${i}</p>
        <p class="modal-product__price">Price:${r} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`;s.divModal.insertAdjacentHTML("beforeend",d)}function f(){s.modal.classList.remove("modal--is-open"),s.divModal.innerHTML=""}async function w(t){if(t.target.classList.contains("categories__btn")){const o=t.target;s.categotiesList.querySelectorAll(".categories__btn").forEach(n=>{n.classList.remove("categories__btn--active")}),o.classList.add("categories__btn--active");const c=o.textContent,r=c==="All"?await l():await m(c);y(),r.products.length!==0?u(r.products):s.divNotFound.classList.add("not-found--visible")}}async function h(t){const o=t.target.closest("li");if(o){const e=await g(o.dataset.id);L(e),s.modal.classList.add("modal--is-open")}}function b(){f()}async function $(){_(await p());const t=await l();u(t.products)}$();s.categotiesList.addEventListener("click",w);s.productsList.addEventListener("click",h);s.modalCloseBtn.addEventListener("click",b);
//# sourceMappingURL=index.js.map
