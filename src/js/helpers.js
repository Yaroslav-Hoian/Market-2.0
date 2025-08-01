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
