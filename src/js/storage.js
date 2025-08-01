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

export function resetCartAfterBuy() {
  const arr = [];
  localStorage.setItem(localKey, JSON.stringify(arr));
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

const localKeyTheme = 'theme';

export function getThemeFromStorage() {
  const currentTheme = JSON.parse(localStorage.getItem(localKeyTheme));
  return currentTheme;
}

export function initStorageTheme() {
  const data = getThemeFromStorage() ?? '';
  localStorage.setItem(localKeyTheme, JSON.stringify(data));
}

export function setThemeToStorage(theme) {
  localStorage.setItem(localKeyTheme, JSON.stringify(theme));
}
