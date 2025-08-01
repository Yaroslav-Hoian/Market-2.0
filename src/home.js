//Логіка сторінки Home
import {
  handleClickCategories,
  handleClickProducts,
  handleCloseModal,
  handleSubmit,
  formClear,
  handleAddCart,
  handleAddWishlist,
  handleChangeTheme,
} from './js/handlers';
import { setThemeOnPage, sumCountCarts, sumCountWishList } from './js/helpers';
import { getCategoriesList, getProductsList } from './js/products-api';
import refs from './js/refs';
import { renderCategories, renderProducts } from './js/render-function';
import {
  initStorage,
  initStorageWishList,
  initThemeStorage,
} from './js/storage';

initStorage();
initStorageWishList();
sumCountCarts();
sumCountWishList();
initThemeStorage();
setThemeOnPage();

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

refs.addCartBtn.addEventListener('click', handleAddCart);

refs.addWishListBtn.addEventListener('click', handleAddWishlist);

refs.changeTheme.addEventListener('click', handleChangeTheme);
