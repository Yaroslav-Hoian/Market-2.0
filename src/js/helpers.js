import refs from './refs';
import { getCart, getTheme, getWishList } from './storage';

export function sumCountCarts() {
  let arr = getCart();
  refs.cartCount.textContent = arr.length;
}

export function sumCountWishList() {
  let arr = getWishList();
  refs.wishListCount.textContent = arr.length;
}

export function sumCountItemCarts() {
  let arr = getCart();
  refs.itemsListCount.textContent = arr.length;
}

export function setThemeOnPage() {
  const storage = getTheme();
  if (storage !== '') {
    refs.body.setAttribute('data-theme', storage);
  }
}
