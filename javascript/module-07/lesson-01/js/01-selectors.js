/**
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

// console.log(window);

// -- Selector types --
// .
// []
// #
// a
// a > b
// a b
// .class-1.class-2{}

const selector = '.js-magic-btn';

// console.dir(document.body);

// const btnEl = document.querySelector('.js-magic-btn');
// const btnEl = document.querySelector('button');
// const btnEl = document.querySelector('body > #magicBtn');
const btnEl = document.querySelector(selector);
// console.log('🚀 ~ btnEl:', btnEl.nextElementSibling);
// console.log('🚀 ~ btnEl:', btnEl.previousElementSibling);
// console.dir(btnEl);

const lightBtnEl = document.getElementsByClassName('js-light-btn');
// console.log('🚀 ~ lightBtnEl:', lightBtnEl);

const navEl = document.getElementById('mainNav');
// console.log('🚀 ~ navEl:', navEl);
// console.log(navEl.children);

const linkEl = navEl.querySelector('.site-nav__link');
// console.log('🚀 ~ linkEl:', linkEl);

const linksEl = [...document.querySelectorAll('.site-nav__link')];
// console.log('🚀 ~ linksEl:', linksEl);

linksEl.forEach(link => {
  link.style = 'color: red';
});
