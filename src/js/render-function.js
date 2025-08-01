import { getProductsListId } from './products-api';
import refs from './refs';
import { getCart, getWishList } from './storage';

export function renderCategories(data) {
  const markup = ['All', ...data]
    .map(item => {
      return `
    <li class="categories__item">
        <button class="categories__btn" type="button">${item}</button>
    </li>
 `;
    })
    .join('');

  refs.categotiesList.insertAdjacentHTML('beforeend', markup);
}

export function renderProducts(products) {
  const markup = products
    .map(({ id, title, thumbnail, brand, category, price }) => {
      return `
    <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${brand}</span></p>
    <p class="products__category">Category:${category}</p>
    <p class="products__price">Price:${price}$</p>
 </li>
    `;
    })
    .join('');

  refs.productsList.insertAdjacentHTML('beforeend', markup);
}

export function clearList() {
  refs.divNotFound.classList.remove('not-found--visible');
  refs.productsList.innerHTML = '';
}

export function renderProductsModal({
  title,
  thumbnail,
  shippingInformation,
  category,
  price,
  description,
  returnPolicy,
}) {
  const markup = `
    <img class="modal-product__img" src="${thumbnail}" alt="${title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${title}</p>
        <ul class="modal-product__tags">${category}</ul>
        <p class="modal-product__description">${description}</p>
        <p class="modal-product__shipping-information">Shipping:${shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${returnPolicy}</p>
        <p class="modal-product__price">Price:${price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`;
  refs.divModal.insertAdjacentHTML('beforeend', markup);
}

export function clearModal() {
  refs.modal.classList.remove('modal--is-open');
  refs.divModal.innerHTML = '';
}

export async function wishlistPage() {
  let data = getWishList();
  const arrData = data.map(el => getProductsListId(el));
  const response = await Promise.all(arrData);
  renderProducts(response);
}

export async function cartPage() {
  let data = getCart();
  const arrCart = data.map(el => getProductsListId(el));
  const response = await Promise.all(arrCart);
  renderProducts(response);
  let sum = response.reduce((acc, curr) => acc + curr.price, 0);

  refs.priceCartCount.textContent = `$${sum.toFixed(2)}`;
}
