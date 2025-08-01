//Логіка сторінки Wishlist
import {
  handleAddCart,
  handleAddPdouctAtWishlist,
  handleChangeTheme,
  handleClickProducts,
  handleCloseModal,
} from './js/handlers';
import { setThemeOnPage, sumCountCarts, sumCountWishList } from './js/helpers';
import refs from './js/refs';
import { wishlistPage } from './js/render-function';
import { initStorage, initStorageWishList } from './js/storage';

initStorage();
initStorageWishList();
sumCountCarts();
sumCountWishList();
setThemeOnPage();

wishlistPage();

refs.productsList.addEventListener('click', handleClickProducts);

refs.modalCloseBtn.addEventListener('click', handleCloseModal);

refs.addCartBtn.addEventListener('click', handleAddCart);

refs.addWishListBtn.addEventListener('click', handleAddPdouctAtWishlist);

refs.changeTheme.addEventListener('click', handleChangeTheme);
