const localKey = 'cart';

export function getCart() {
  const data = JSON.parse(localStorage.getItem(localKey));
  return data;
}

export function initStorage() {
  const data = getCart() ?? [];
  localStorage.setItem(localKey, JSON.stringify(data));
}

export function saveCartToStorage(task) {
  const tasks = getCart();
  tasks.push(task);
  localStorage.setItem(localKey, JSON.stringify(tasks));
}
