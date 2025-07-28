import"./assets/styles-B-BVPyWf.js";import{a,i as m}from"./assets/vendor-4yCzdkXl.js";async function g(){try{return(await a("https://dummyjson.com/products/category-list")).data}catch(t){throw console.log(t.message),new Error("Something went wrong!")}}async function u(t=1){try{return(await a.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data}catch(o){throw console.log(o.message),new Error("Something went wrong!")}}async function _(t,o=1){try{return(await a.get(`https://dummyjson.com/products/category/${t}?limit=12&skip=${(o-1)*12}`)).data}catch(s){throw console.log(s.message),new Error("Something went wrong!")}}async function y(t){try{return(await a.get(`https://dummyjson.com/products/${t}`)).data}catch(o){throw console.log(o.message),new Error("Something went wrong!")}}async function f(t,o=1){try{return(await a.get(`https://dummyjson.com/products/search?q=${t}&limit=12&skip=${(o-1)*12}`)).data}catch(s){throw console.log(s.message),new Error("Something went wrong!")}}const e={categotiesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divNotFound:document.querySelector(".not-found"),divModal:document.querySelector(".modal-product"),modal:document.querySelector(".modal"),modalCloseBtn:document.querySelector(".modal__close-btn"),searchForm:document.querySelector(".search-form"),formBtnClear:document.querySelector(".search-form__btn-clear")};function h(t){const o=["All",...t].map(s=>`
    <li class="categories__item">
        <button class="categories__btn" type="button">${s}</button>
    </li>
 `).join("");e.categotiesList.insertAdjacentHTML("beforeend",o)}function i(t){const o=t.map(({id:s,title:r,thumbnail:c,brand:n,category:d,price:l})=>`
    <li class="products__item" data-id="${s}">
    <img class="products__image" src="${c}" alt="${r}"/>
    <p class="products__title">${r}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${n}</span></p>
    <p class="products__category">Category:${d}</p>
    <p class="products__price">Price:${l}$</p>
 </li>
    `).join("");e.productsList.insertAdjacentHTML("beforeend",o)}function p(){e.divNotFound.classList.remove("not-found--visible"),e.productsList.innerHTML=""}function L({title:t,thumbnail:o,shippingInformation:s,category:r,price:c,description:n,returnPolicy:d}){const l=`
    <img class="modal-product__img" src="${o}" alt="${t}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${t}</p>
        <ul class="modal-product__tags">${r}</ul>
        <p class="modal-product__description">${n}</p>
        <p class="modal-product__shipping-information">Shipping:${s}</p>
        <p class="modal-product__return-policy">Return Policy:${d}</p>
        <p class="modal-product__price">Price:${c} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`;e.divModal.insertAdjacentHTML("beforeend",l)}function w(){e.modal.classList.remove("modal--is-open"),e.divModal.innerHTML=""}async function b(t){if(t.target.classList.contains("categories__btn")){const o=t.target;e.categotiesList.querySelectorAll(".categories__btn").forEach(n=>{n.classList.remove("categories__btn--active")}),o.classList.add("categories__btn--active");const r=o.textContent,c=r==="All"?await u():await _(r);p(),c.products.length!==0?i(c.products):e.divNotFound.classList.add("not-found--visible")}}async function $(t){const o=t.target.closest("li");if(o){const s=await y(o.dataset.id);L(s),e.modal.classList.add("modal--is-open")}}function v(){w()}async function S(t){t.preventDefault();const o=t.target.searchValue.value.trim();if(o==="")return m.info({title:"Please write your product",position:"topLeft"});const s=await f(o);if(p(),s.products.length===0)return e.divNotFound.classList.add("not-found--visible");i(s.products)}async function C(){e.searchForm.reset(),e.productsList.innerHTML="";const t=await u();i(t.products)}async function P(){h(await g());const t=await u();i(t.products)}P();e.categotiesList.addEventListener("click",b);e.productsList.addEventListener("click",$);e.modalCloseBtn.addEventListener("click",v);e.searchForm.addEventListener("submit",S);e.formBtnClear.addEventListener("click",C);
//# sourceMappingURL=index.js.map
