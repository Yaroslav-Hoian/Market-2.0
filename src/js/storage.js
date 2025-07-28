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
