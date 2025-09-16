/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

const clickMe = document.querySelector('.js-click');
const clearEl = document.querySelector('.js-clear');
const box = document.querySelector('.js-box');

let posX = box.offsetLeft;
let posY = box.offsetTop;
let clicks = 0;

// clickMe.onclick = event => {
//   console.log('event', event);

//   const btnEl = event.target;

//   posX += 50;
//   posY += 50;
//   box.style.transform = `translate(${posX}px, ${posY}px)`;
//   // console.log('🚀 ~ btnEl:', btnEl);

//   // console.log('Position X', event.clientX);
//   // console.log('Position Y', event.clientY);

//   // console.log('Event works on btn');
// };

// clearEl.onclick = () => {
//   clickMe.onclick = '';
// };

clickMe.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  // console.log('Inside addEventListener method');
  // console.log(event);
  clicks += 1;

  if (clicks > 5) {
    clickMe.removeEventListener('click', onBtnClick);
    return;
  }

  posX += 50;
  posY += 50;
  box.style.transform = `translate(${posX}px, ${posY}px)`;
}
