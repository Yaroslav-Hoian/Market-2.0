//Логіка сторінки Home
import {
  handleClickCategories,
  handleClickProducts,
  handleCloseModal,
  handleSubmit,
  formClear,
  hadnleAddCart,
  hadnleAddWishlist,
  changeTheme,
  handleBtnLoadMore,
} from './js/handlers';
import {
  setThemeOnPage,
  showLoadMoreBtn,
  sumCountCarts,
  sumCountWishList,
} from './js/helpers';
import { getCategoriesList, getProductsList } from './js/products-api';
import refs from './js/refs';
import { renderCategories, renderProducts } from './js/render-function';
import {
  initStorage,
  initStorageTheme,
  initStorageWishList,
} from './js/storage';

initStorageTheme();
setThemeOnPage();

initStorage();
initStorageWishList();
sumCountCarts();
sumCountWishList();
export let obj = {
  totalPages: 0,
  perPage: 12,
};

async function homePage() {
  renderCategories(await getCategoriesList());
  const response = await getProductsList();
  renderProducts(response.products);
  obj.totalPages = Math.ceil(response.total / obj.perPage);
  if (obj.totalPages > 1) {
    showLoadMoreBtn();
  }
}

homePage();

refs.categotiesList.addEventListener('click', handleClickCategories);

refs.productsList.addEventListener('click', handleClickProducts);

refs.modalCloseBtn.addEventListener('click', handleCloseModal);

refs.searchForm.addEventListener('submit', handleSubmit);

refs.formBtnClear.addEventListener('click', formClear);

refs.addCartBtn.addEventListener('click', hadnleAddCart);

refs.addWishListBtn.addEventListener('click', hadnleAddWishlist);

refs.changeThemeBtn.addEventListener('click', changeTheme);

refs.btnLoadMore.addEventListener('click', handleBtnLoadMore);
