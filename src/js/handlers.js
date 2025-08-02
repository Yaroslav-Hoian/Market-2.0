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
  clearProductsAtList,
  cartPage,
  wishlistPage,
} from './render-function';
import {
  saveCartToStorage,
  getCart,
  deleteCartFromStorage,
  getWishList,
  saveWishListToStorage,
  deleteWishlistFromStorage,
  setThemeToStorage,
  resetCartAfterBuy,
} from './storage';
import { inspectAddBtnToCart, inspectAddBtnToWishList } from './modal';
import {
  deleteIsActiveClass,
  hideLoader,
  hideLoadMoreBtn,
  isActiveClassAtCategories,
  showLoader,
  showLoadMoreBtn,
  sumCountCarts,
  sumCountWishList,
  sumItemToBuy,
} from './helpers';
import { hideScroll, showScroll } from './scroll';

export let obj = {
  totalPages: 0,
  perPage: 12,
};

let currentPage = 1;
let currentCategory = '';

export async function handleClickCategories(event) {
  refs.searchForm.reset();
  currentPage = 1;
  hideLoadMoreBtn();
  if (event.target.classList.contains('categories__btn')) {
    showLoader();
    clearList();
    const currentBtn = event.target;
    isActiveClassAtCategories(currentBtn);
    const category = currentBtn.textContent;
    const products =
      category === 'All'
        ? await getProductsList()
        : await getProductsListByCategory(category);
    hideLoader();
    obj.totalPages = Math.ceil(products.total / obj.perPage);

    currentCategory = category;

    if (currentPage >= obj.totalPages) {
      hideLoadMoreBtn();
    } else showLoadMoreBtn();

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
  deleteIsActiveClass();
  currentPage = 1;
  event.preventDefault();

  const searchProduct = event.target.searchValue.value.trim();

  if (searchProduct === '') {
    return iziToast.info({
      title: 'Please write your product',
      position: 'topLeft',
    });
  }
  showLoader();
  clearList();
  const searchProductList = await getProductsBySearch(searchProduct);
  obj.totalPages = Math.ceil(searchProductList.total / obj.perPage);

  hideLoader();
  if (searchProductList.products.length === 0) {
    return refs.divNotFound.classList.add('not-found--visible');
  }
  renderProducts(searchProductList.products);

  if (currentPage >= obj.totalPages) {
    hideLoadMoreBtn();
  } else showLoadMoreBtn();
}

export async function formClear() {
  refs.searchForm.reset();
  refs.productsList.innerHTML = '';
  showLoader();
  const response = await getProductsList();
  hideLoader();
  renderProducts(response.products);
}

export function hadnleAddCart() {
  let arr = getCart();
  if (!arr.includes(id) || arr.length === 0) {
    saveCartToStorage(id);
  } else deleteCartFromStorage(id);

  inspectAddBtnToCart(id);
  sumCountCarts();

  if (window.location.pathname.includes('cart.html')) {
    clearProductsAtList();
    cartPage();
    sumItemToBuy();
  }
}

export function hadnleAddWishlist() {
  let arrWishList = getWishList();
  if (!arrWishList.includes(id) || arrWishList.length === 0) {
    saveWishListToStorage(id);
  } else deleteWishlistFromStorage(id);

  inspectAddBtnToWishList(id);
  sumCountWishList();

  if (window.location.pathname.includes('wishlist.html')) {
    clearProductsAtList();
    wishlistPage();
  }
}

export function handleBuyProduct() {
  let arr = getCart();
  let items = arr.length;
  if (items <= 0) {
    return iziToast.info({
      title: 'Select your product to buy',
    });
  } else {
    clearProductsAtList();
    resetCartAfterBuy();
    sumCountCarts();
    sumItemToBuy();
    cartPage();
    iziToast.success({
      title: 'Congratulations on your purchase.',
    });
  }
}

export function changeTheme() {
  if (!refs.body.hasAttribute('data-theme')) {
    setThemeToStorage('dark');
    return refs.body.setAttribute('data-theme', 'dark');
  } else {
    setThemeToStorage('');
    return refs.body.removeAttribute('data-theme');
  }
}

export async function handleBtnLoadMore() {
  currentPage++;

  if (currentPage >= obj.totalPages) {
    iziToast.info({
      title: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
    hideLoadMoreBtn();
  }
  if (currentCategory === 'All' || currentCategory === '') {
    let nextPage = await getProductsList(currentPage);
    renderProducts(nextPage.products);
  } else {
    let categoryProduct = await getProductsListByCategory(
      currentCategory,
      currentPage
    );
    renderProducts(categoryProduct.products);
  }
}

export function showsBtnAfterScroll() {
  if (window.scrollY > 1200) {
    showScroll();
  } else hideScroll();
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
