//Логіка сторінки Wishlist
import {
  hadnleAddCart,
  hadnleAddWishlist,
  handleClickProducts,
  handleCloseModal,
} from './js/handlers';
import { sumCountCarts, sumCountWishList } from './js/helpers';
import { getProductsListId } from './js/products-api';
import refs from './js/refs';
import { renderProducts } from './js/render-function';
import { getWishList, initStorage, initStorageWishList } from './js/storage';

initStorage();
initStorageWishList();
sumCountCarts();
sumCountWishList();

let data = getWishList();

async function wishlistPage() {
  const arrData = data.map(el => getProductsListId(el));
  const response = await Promise.all(arrData);
  renderProducts(response);
}

wishlistPage();

refs.productsList.addEventListener('click', handleClickProducts);

refs.modalCloseBtn.addEventListener('click', handleCloseModal);

refs.addCartBtn.addEventListener('click', hadnleAddCart);

refs.addWishListBtn.addEventListener('click', hadnleAddWishlist);
