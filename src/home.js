//Логіка сторінки Home
import {
  handleClickCategories,
  handleClickProducts,
  handleCloseModal,
  handleSubmit,
  formClear,
  hadnleAddCart,
  hadnleAddWishlist,
} from './js/handlers';
import { sumCountCarts, sumCountWishList } from './js/helpers';
import { getCategoriesList, getProductsList } from './js/products-api';
import refs from './js/refs';
import { renderCategories, renderProducts } from './js/render-function';
import { initStorage, initStorageWishList } from './js/storage';

initStorage();
initStorageWishList();
sumCountCarts();
sumCountWishList();

async function homePage() {
  renderCategories(await getCategoriesList());
  const response = await getProductsList();
  renderProducts(response.products);
}

homePage();

refs.categotiesList.addEventListener('click', handleClickCategories);

refs.productsList.addEventListener('click', handleClickProducts);

refs.modalCloseBtn.addEventListener('click', handleCloseModal);

refs.searchForm.addEventListener('submit', handleSubmit);

refs.formBtnClear.addEventListener('click', formClear);

refs.addCartBtn.addEventListener('click', hadnleAddCart);

refs.addWishListBtn.addEventListener('click', hadnleAddWishlist);
