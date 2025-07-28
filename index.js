import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-N5iQpiFS.js";async function p(){try{return(await a("https://dummyjson.com/products/category-list")).data}catch(t){throw console.log(t.message),new Error("Something went wrong!")}}async function i(t=1){try{return(await a.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data}catch(s){throw console.log(s.message),new Error("Something went wrong!")}}async function g(t,s=1){try{return(await a.get(`https://dummyjson.com/products/category/${t}?limit=12&skip=${(s-1)*12}`)).data}catch(e){throw console.log(e.message),new Error("Something went wrong!")}}const o={categotiesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divNotFound:document.querySelector(".not-found")};function m(t){const s=["All",...t].map(e=>`
    <li class="categories__item">
        <button class="categories__btn" type="button">${e}</button>
    </li>
 `).join("");o.categotiesList.insertAdjacentHTML("beforeend",s)}function d(t){const s=t.map(({id:e,title:r,thumbnail:n,brand:c,category:u,price:l})=>`
    <li class="products__item" data-id="${e}">
    <img class="products__image" src="${n}" alt="${r}"/>
    <p class="products__title">${r}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${c}</span></p>
    <p class="products__category">Category:${u}</p>
    <p class="products__price">Price:${l}$</p>
 </li>
    `).join("");o.productsList.insertAdjacentHTML("beforeend",s)}function _(){o.divNotFound.classList.remove("not-found--visible"),o.productsList.innerHTML=""}async function y(t){if(t.target.classList.contains("categories__btn")){const s=t.target;o.categotiesList.querySelectorAll(".categories__btn").forEach(c=>{c.classList.remove("categories__btn--active")}),s.classList.add("categories__btn--active");const r=s.textContent,n=r==="All"?await i():await g(r);_(),n.products.length!==0?d(n.products):o.divNotFound.classList.add("not-found--visible")}}async function L(){m(await p());const t=await i();d(t.products)}L();o.categotiesList.addEventListener("click",y);
//# sourceMappingURL=index.js.map
