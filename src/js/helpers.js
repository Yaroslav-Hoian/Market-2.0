import refs from './refs';
import { getCart } from './storage';

export function sumCountCarts() {
  let arr = getCart();
  refs.cartCount.textContent = arr.length;
}
