//Логіка сторінки Cart
import {
  handleAddCart,
  handleAddProductAtCart,
  handleAddWishlist,
  handleBuyProduct,
  handleChangeTheme,
  handleClickProducts,
  handleCloseModal,
} from './js/handlers';
import {
  setThemeOnPage,
  sumCountCarts,
  sumCountItemCarts,
  sumCountWishList,
} from './js/helpers';
import refs from './js/refs';
import { cartPage } from './js/render-function';
import { initStorage, initStorageWishList } from './js/storage';

initStorage();
initStorageWishList();
sumCountCarts();
sumCountWishList();
sumCountItemCarts();
setThemeOnPage();

cartPage();

refs.productsList.addEventListener('click', handleClickProducts);

refs.modalCloseBtn.addEventListener('click', handleCloseModal);

refs.addCartBtn.addEventListener('click', handleAddProductAtCart);

refs.addWishListBtn.addEventListener('click', handleAddWishlist);

refs.btnBuyProduct.addEventListener('click', handleBuyProduct);

refs.changeTheme.addEventListener('click', handleChangeTheme);
