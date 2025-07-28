import refs from './refs';
import { getCart, getWishList } from './storage';

export function inspectAddBtnToCart(id) {
  let arr = getCart();
  if (!arr.includes(id) || arr.length === 0) {
    refs.addCartBtn.textContent = 'Add to cart';
  } else refs.addCartBtn.textContent = 'Remove from cart';
}

export function inspectAddBtnToWishList(id) {
  let arr = getWishList();
  if (!arr.includes(id) || arr.length === 0) {
    refs.addWishListBtn.textContent = 'Add to Wishlist';
  } else refs.addWishListBtn.textContent = 'Remove from Wishlist';
}
