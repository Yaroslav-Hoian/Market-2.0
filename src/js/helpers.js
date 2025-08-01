import refs from './refs';
import { getCart, getThemeFromStorage, getWishList } from './storage';

export function sumCountCarts() {
  let arr = getCart();
  refs.cartCount.textContent = arr.length;
}

export function sumCountWishList() {
  let arr = getWishList();
  refs.wishListCount.textContent = arr.length;
}

export function sumItemToBuy() {
  let arr = getCart();
  refs.dataCount.textContent = arr.length;
}

export function setThemeOnPage() {
  const theme = getThemeFromStorage();
  if (theme !== '') {
    refs.body.setAttribute('data-theme', theme);
  }
}

export function showLoader() {
  refs.loaderBox.classList.remove('is-hidden');
}

export function hideLoader() {
  refs.loaderBox.classList.add('is-hidden');
}

export function showLoadMoreBtn() {
  refs.btnLoadMore.classList.remove('is-hidden');
}

export function hideLoadMoreBtn() {
  refs.btnLoadMore.classList.add('is-hidden');
}
