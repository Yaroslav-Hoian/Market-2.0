//Логіка сторінки Wishlist
import {
  changeTheme,
  hadnleAddCart,
  hadnleAddWishlist,
  handleClickProducts,
  handleCloseModal,
  scrollToTop,
  showsBtnAfterScroll,
} from './js/handlers';
import { setThemeOnPage, sumCountCarts, sumCountWishList } from './js/helpers';
import refs from './js/refs';
import { wishlistPage } from './js/render-function';
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

wishlistPage();

refs.productsList.addEventListener('click', handleClickProducts);

refs.modalCloseBtn.addEventListener('click', handleCloseModal);

refs.addCartBtn.addEventListener('click', hadnleAddCart);

refs.addWishListBtn.addEventListener('click', hadnleAddWishlist);

refs.changeThemeBtn.addEventListener('click', changeTheme);

refs.scroll.addEventListener('click', scrollToTop);

window.addEventListener('scroll', showsBtnAfterScroll);
