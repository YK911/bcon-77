// Libs
import SimpleLightbox from 'simplelightbox';
// Data
import images from './images.json';
// Own Script
import { createImg } from './createImage';

// styles
import 'simplelightbox/dist/simple-lightbox.min.css';

export function init() {
  const containerEl = document.querySelector('.js-gallery');
  const markup = images.map(createImg).join('');
  containerEl.insertAdjacentHTML('beforeend', markup);

  new SimpleLightbox('.js-gallery a', {
    showCounter: false,
    animationSpeed: 400,
    loop: false,
  });
}
