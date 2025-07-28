const localKey = 'cart';

export function getCart() {
  const data = JSON.parse(localStorage.getItem(localKey));
  return data;
}

export function initStorage() {
  const data = getCart() ?? [];
  localStorage.setItem(localKey, JSON.stringify(data));
}

export function saveCartToStorage(id) {
  const carts = getCart();
  carts.push(id);
  localStorage.setItem(localKey, JSON.stringify(carts));
}

export function deleteCartFromStorage(id) {
  const arrCarts = getCart();
  const filterArrCarts = arrCarts.filter(el => el !== id);
  localStorage.setItem(localKey, JSON.stringify(filterArrCarts));
}

const localKeyWishList = 'wishlist';

export function getWishList() {
  const data = JSON.parse(localStorage.getItem(localKeyWishList));
  return data;
}

export function initStorageWishList() {
  const data = getWishList() ?? [];
  localStorage.setItem(localKeyWishList, JSON.stringify(data));
}

export function saveWishListToStorage(id) {
  const wishlist = getWishList();
  wishlist.push(id);
  localStorage.setItem(localKeyWishList, JSON.stringify(wishlist));
}

export function deleteWishlistFromStorage(id) {
  const arrWishList = getWishList();
  const filterArrWishList = arrWishList.filter(el => el !== id);
  localStorage.setItem(localKeyWishList, JSON.stringify(filterArrWishList));
}
