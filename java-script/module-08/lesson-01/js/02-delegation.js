/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const boxes = document.querySelectorAll('.box');
// console.log('🚀 ~ boxes:', boxes);

boxes.forEach(box => {
  box.addEventListener('click', event => {
    const currentColor = event.target.dataset.color;
    // console.log('🚀 ~ currentColor:', currentColor);
  });
});

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
const container = document.querySelector('.container');

// container.addEventListener('click', containerHandleClick);
container.addEventListener('click', handleClick);

function containerHandleClick(event) {
  const containerEl = event.currentTarget;
  const targetEl = event.target;
  // console.log('🚀  ~ targetEl:', targetEl.classList.contains('box'));

  const isContainer = targetEl.contains(containerEl);

  if (isContainer) {
    console.log('🚀 ~ isContainer: Stop listener');
    return;
  }

  console.log('Works');
  const color = targetEl.dataset.color;
  console.log('🚀 ~ color:', color);
}

function handleClick(event) {
  const targetEl = event.target;

  const boxEl = targetEl.closest('.box');

  if (!boxEl) {
    return;
  }

  // console.log(boxEl.dataset);

  const elemColor = boxEl.dataset.color;
  console.log('🚀 ~ handleClick:', elemColor);
}
