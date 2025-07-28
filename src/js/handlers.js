import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  getProductsListByCategory,
  getProductsList,
  getProductsListId,
  getProductsBySearch,
} from './products-api';
import refs from './refs';
import {
  clearList,
  renderProducts,
  renderProductsModal,
  clearModal,
} from './render-function';
import {
  saveCartToStorage,
  getCart,
  deleteCartFromStorage,
  getWishList,
  saveWishListToStorage,
  deleteWishlistFromStorage,
} from './storage';
import { inspectAddBtnToCart, inspectAddBtnToWishList } from './modal';
import { sumCountCarts, sumCountWishList } from './helpers';

export async function handleClickCategories(event) {
  if (event.target.classList.contains('categories__btn')) {
    const currentBtn = event.target;
    const allBtn = refs.categotiesList.querySelectorAll('.categories__btn');
    allBtn.forEach(item => {
      item.classList.remove('categories__btn--active');
    });
    currentBtn.classList.add('categories__btn--active');
    const category = currentBtn.textContent;
    const products =
      category === 'All'
        ? await getProductsList()
        : await getProductsListByCategory(category);
    clearList();
    if (products.products.length !== 0) {
      renderProducts(products.products);
    } else {
      refs.divNotFound.classList.add('not-found--visible');
    }
  }
}

let id = null;

export async function handleClickProducts(ev) {
  const li = ev.target.closest('li');
  if (li) {
    const productModal = await getProductsListId(li.dataset.id);
    renderProductsModal(productModal);
    refs.modal.classList.add('modal--is-open');
    id = li.dataset.id;

    inspectAddBtnToCart(id);
    inspectAddBtnToWishList(id);
  }
}

export function handleCloseModal() {
  clearModal();
}

export async function handleSubmit(event) {
  event.preventDefault();

  const searchProduct = event.target.searchValue.value.trim();

  if (searchProduct === '') {
    return iziToast.info({
      title: 'Please write your product',
      position: 'topLeft',
    });
  }

  const searchProductList = await getProductsBySearch(searchProduct);
  clearList();

  if (searchProductList.products.length === 0) {
    return refs.divNotFound.classList.add('not-found--visible');
  } else renderProducts(searchProductList.products);
}

export async function formClear() {
  refs.searchForm.reset();
  refs.productsList.innerHTML = '';

  const response = await getProductsList();
  renderProducts(response.products);
}

export function hadnleAddCart() {
  let arr = getCart();
  if (!arr.includes(id) || arr.length === 0) {
    saveCartToStorage(id);
  } else deleteCartFromStorage(id);

  inspectAddBtnToCart(id);
  sumCountCarts();
}

export function hadnleAddWishlist() {
  let arrWishList = getWishList();
  if (!arrWishList.includes(id) || arrWishList.length === 0) {
    saveWishListToStorage(id);
  } else deleteWishlistFromStorage(id);

  inspectAddBtnToWishList(id);
  sumCountWishList();
}
