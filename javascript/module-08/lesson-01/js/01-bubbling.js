/**
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

const handleParentClick = event => {
  const currentTargetEl = event.currentTarget;
  const targetEl = event.target;
  // console.log(event.currentTarget.textContent);

  // console.log(event);
  // console.log('🚀 ~ currentTargetEl:', currentTargetEl);
  // console.log('🚀 ~ targetEl:', targetEl);
  // console.dir(targetEl);

  if (targetEl.nodeName === 'DIV' && targetEl.classList.contains('one')) {
    // console.log('We clicked on button');
    console.log('Click on target div');
    return;
  }

  console.log('Click on button');
};

const handleChildClick = event => {
  const clickedEl = event.target;
  const elemWithListener = event.currentTarget;
  console.log(event.currentTarget.textContent);

  // console.log(event);
  // console.log('🚀 ~ current:', clickedEl);
  // console.log('🚀 ~ elem:', elemWithListener);
};

const handleInnerChildClick = event => {
  const clickedEl = event.target;
  const elemWithListener = event.currentTarget;
  console.log(event.currentTarget.textContent);

  // console.log(event);
  // console.log('🚀 ~ current:', clickedEl);
  // console.log('🚀 ~ elem:', elemWithListener);
};

parent.addEventListener('click', handleParentClick, false);
// child.addEventListener('click', handleChildClick, true);
// innerChild.addEventListener('click', handleInnerChildClick, true);
