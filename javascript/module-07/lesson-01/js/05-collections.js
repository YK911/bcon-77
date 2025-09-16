/**
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

/**
 * Пишемо функцію для створення розмітки колорпікера
 */
function createColorpickerEl(elements) {
  const boxes = elements.map(element => {
    const btn = document.createElement('button');
    btn.textContent = element.label;
    btn.classList.add('btn', 'mx-1');
    btn.style.backgroundColor = element.color;
    btn.style.color = 'white';

    return btn;
  });

  return boxes;
}

const btns = createColorpickerEl(options);
// console.log(btns);

colorPickerContainerEl.append(...btns);
