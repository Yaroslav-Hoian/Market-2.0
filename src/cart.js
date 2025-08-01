//Логіка сторінки Cart
import {
  changeTheme,
  hadnleAddProductAtCart,
  hadnleAddWishlist,
  handleBuyProduct,
  handleClickProducts,
  handleCloseModal,
  scrollToTop,
  showsBtnAfterScroll,
} from './js/handlers';
import {
  setThemeOnPage,
  sumCountCarts,
  sumCountWishList,
  sumItemToBuy,
} from './js/helpers';
import refs from './js/refs';
import { cartPage } from './js/render-function';
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

sumItemToBuy();

cartPage();

refs.productsList.addEventListener('click', handleClickProducts);

refs.modalCloseBtn.addEventListener('click', handleCloseModal);

refs.addCartBtn.addEventListener('click', hadnleAddProductAtCart);

refs.addWishListBtn.addEventListener('click', hadnleAddWishlist);

refs.buyProductBtn.addEventListener('click', handleBuyProduct);

refs.changeThemeBtn.addEventListener('click', changeTheme);

refs.scroll.addEventListener('click', scrollToTop);

window.addEventListener('scroll', showsBtnAfterScroll);
