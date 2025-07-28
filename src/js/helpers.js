import refs from './refs';
import { getCart, getWishList } from './storage';

export function sumCountCarts() {
  let arr = getCart();
  refs.cartCount.textContent = arr.length;
}

export function sumCountWishList() {
  let arr = getWishList();
  refs.wishListCount.textContent = arr.length;
}
