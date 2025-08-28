/**
 * Створення та додавання елементів
 */

/**
 * Створюємо заголовок
 */
const titleEl = document.createElement('h1');
titleEl.textContent = 'Alpine mountains';
titleEl.classList.add('display-2');
titleEl.style.marginBottom = '2rem';

/**
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.style.width = '300px';

const heroEl = document.querySelector('.hero');

const boxEl = document.createElement('div');
boxEl.classList.add('wrapper');
boxEl.append(titleEl, imageEl);

heroEl.append(boxEl);

/**
 * Створюємо та додаємо новий пункт меню на початок
 */
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
const linkEl = document.createElement('a');
linkEl.classList.add('site-nav__link');
linkEl.textContent = 'Home';

navItemEl.append(linkEl);

const navEl = document.querySelector('.site-nav');
navEl.prepend(navItemEl);
