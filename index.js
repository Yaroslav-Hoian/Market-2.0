import"./assets/styles-B-BVPyWf.js";import{a as c,i as _}from"./assets/vendor-4yCzdkXl.js";async function y(){try{return(await c("https://dummyjson.com/products/category-list")).data}catch(t){throw console.log(t.message),new Error("Something went wrong!")}}async function m(t=1){try{return(await c.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data}catch(e){throw console.log(e.message),new Error("Something went wrong!")}}async function h(t,e=1){try{return(await c.get(`https://dummyjson.com/products/category/${t}?limit=12&skip=${(e-1)*12}`)).data}catch(r){throw console.log(r.message),new Error("Something went wrong!")}}async function L(t){try{return(await c.get(`https://dummyjson.com/products/${t}`)).data}catch(e){throw console.log(e.message),new Error("Something went wrong!")}}async function w(t,e=1){try{return(await c.get(`https://dummyjson.com/products/search?q=${t}&limit=12&skip=${(e-1)*12}`)).data}catch(r){throw console.log(r.message),new Error("Something went wrong!")}}const o={categotiesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divNotFound:document.querySelector(".not-found"),divModal:document.querySelector(".modal-product"),modal:document.querySelector(".modal"),modalCloseBtn:document.querySelector(".modal__close-btn"),searchForm:document.querySelector(".search-form"),formBtnClear:document.querySelector(".search-form__btn-clear"),addCartBtn:document.querySelector(".modal-product__btn--cart")};function b(t){const e=["All",...t].map(r=>`
    <li class="categories__item">
        <button class="categories__btn" type="button">${r}</button>
    </li>
 `).join("");o.categotiesList.insertAdjacentHTML("beforeend",e)}function d(t){const e=t.map(({id:r,title:s,thumbnail:n,brand:a,category:u,price:p})=>`
    <li class="products__item" data-id="${r}">
    <img class="products__image" src="${n}" alt="${s}"/>
    <p class="products__title">${s}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${a}</span></p>
    <p class="products__category">Category:${u}</p>
    <p class="products__price">Price:${p}$</p>
 </li>
    `).join("");o.productsList.insertAdjacentHTML("beforeend",e)}function f(){o.divNotFound.classList.remove("not-found--visible"),o.productsList.innerHTML=""}function S({title:t,thumbnail:e,shippingInformation:r,category:s,price:n,description:a,returnPolicy:u}){const p=`
    <img class="modal-product__img" src="${e}" alt="${t}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${t}</p>
        <ul class="modal-product__tags">${s}</ul>
        <p class="modal-product__description">${a}</p>
        <p class="modal-product__shipping-information">Shipping:${r}</p>
        <p class="modal-product__return-policy">Return Policy:${u}</p>
        <p class="modal-product__price">Price:${n} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`;o.divModal.insertAdjacentHTML("beforeend",p)}function v(){o.modal.classList.remove("modal--is-open"),o.divModal.innerHTML=""}const g="cart";function l(){return JSON.parse(localStorage.getItem(g))}function $(){const t=l()??[];localStorage.setItem(g,JSON.stringify(t))}function C(t){const e=l();e.push(t),localStorage.setItem(g,JSON.stringify(e))}async function k(t){if(t.target.classList.contains("categories__btn")){const e=t.target;o.categotiesList.querySelectorAll(".categories__btn").forEach(a=>{a.classList.remove("categories__btn--active")}),e.classList.add("categories__btn--active");const s=e.textContent,n=s==="All"?await m():await h(s);f(),n.products.length!==0?d(n.products):o.divNotFound.classList.add("not-found--visible")}}let i=null;async function P(t){const e=t.target.closest("li");if(e){const r=await L(e.dataset.id);S(r),o.modal.classList.add("modal--is-open"),i=e.dataset.id;let s=l();(!s.includes(i)||s.length===0)&&(t.target.textContent="Remove from cart")}}function B(){v()}async function M(t){t.preventDefault();const e=t.target.searchValue.value.trim();if(e==="")return _.info({title:"Please write your product",position:"topLeft"});const r=await w(e);if(f(),r.products.length===0)return o.divNotFound.classList.add("not-found--visible");d(r.products)}async function E(){o.searchForm.reset(),o.productsList.innerHTML="";const t=await m();d(t.products)}function q(t){let e=l();(!e.includes(i)||e.length===0)&&(C(i),t.target.textContent="Remove from cart")}$();async function j(){b(await y());const t=await m();d(t.products)}j();o.categotiesList.addEventListener("click",k);o.productsList.addEventListener("click",P);o.modalCloseBtn.addEventListener("click",B);o.searchForm.addEventListener("submit",M);o.formBtnClear.addEventListener("click",E);o.addCartBtn.addEventListener("click",q);
//# sourceMappingURL=index.js.map
