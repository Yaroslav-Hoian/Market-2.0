const refs = {
  categotiesList: document.querySelector('.categories'),
  productsList: document.querySelector('.products'),
  divNotFound: document.querySelector('.not-found'),
  divModal: document.querySelector('.modal-product'),
  modal: document.querySelector('.modal'),
  modalCloseBtn: document.querySelector('.modal__close-btn'),
  searchForm: document.querySelector('.search-form'),
  formBtnClear: document.querySelector('.search-form__btn-clear'),
  addCartBtn: document.querySelector('.modal-product__btn--cart'),
  cartCount: document.querySelector('[data-cart-count]'),
  addWishListBtn: document.querySelector('.modal-product__btn--wishlist'),
  wishListCount: document.querySelector('[data-wishlist-count]'),
  dataCount: document.querySelector('[data-count]'),
  dataPrice: document.querySelector('[data-price]'),
  buyProductBtn: document.querySelector('.cart-summary__btn'),
  changeThemeBtn: document.querySelector('.theme-toggle-btn'),
  body: document.querySelector('body'),
  loaderBox: document.querySelector('.loader-box'),
  btnLoadMore: document.querySelector('.load-more-btn'),
  scroll: document.querySelector('.scroll-top-btn'),
};

export default refs;
