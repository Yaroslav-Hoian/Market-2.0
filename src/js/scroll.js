import refs from './refs';

export function showScroll() {
  refs.scroll.classList.add('scroll-top-btn--visible');
}

export function hideScroll() {
  refs.scroll.classList.remove('scroll-top-btn--visible');
}
