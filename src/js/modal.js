import refs from './refs';
import { getCart } from './storage';

export function inspectAddBtnToCart(id) {
  let arr = getCart();
  if (!arr.includes(id) || arr.length === 0) {
    refs.addCartBtn.textContent = 'Add to cart';
  } else refs.addCartBtn.textContent = 'Remove from cart';
}
