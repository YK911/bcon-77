/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

const showThis = function (a, b, arr) {
  // console.log('showThis -> this', this);
  // console.log(a, b, arr);

  if (arr.length > 0) {
    this.values = arr;
  }

  const res = this.a + this.b;

  // console.log('🚀 ~ showThis ~ this:', this);
  // console.log('🚀 ~ showThis ~ res:', res);
};

// showThis();

const objA = {
  a: 5,
  b: 10,
};

showThis.call(objA, 'true', 1, [100, 200, 300]);
showThis.apply(objA, ['true', 1, [100, 200, 300]]);

const objB = {
  x: 788,
  y: 25,
};

showThis.call(objB, 1, 1, 2);
showThis.apply(objB, [1, 1, 2]);

// showThis();

/**
 * -------------------------------
 */
const changeColor = function (color) {
  console.log('changeColor -> this', this);
  this.color = color;
};

const hat = {
  color: 'black',
};

// changeColor.call(hat, 'orange');
// console.log(hat);

const sweater = {
  color: 'green',
};

const jeans = {
  color: 'blue',
};

// changeColor.call(sweater, 'blue');
// console.log(sweater);

/**
 * -------------------------------
 */
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);
const changeJeansColor = changeColor.bind(jeans);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

// changeJeansColor('dark blue');
// console.log(jeans);

/**
 * -------------------------------
 */
const refs = {
  userInput: document.querySelector('[data-input-value]'),
  resultValue: document.querySelector('[data-value]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
};

refs.incrementBtn.onclick = handleBtnClick;
refs.decrementBtn.onclick = handleBtnClick;

const counter = {
  value: 0,

  increment(value) {
    console.log('increment -> this', this);
    this.value += value;
  },

  decrement(value) {
    console.log('decrement -> this', this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

// const incrementOperation = counter.increment.bind(counter);
// const decrementOperation = counter.decrement.bind(counter);

// updateCounter(10, incrementOperation);
// updateCounter(5, decrementOperation);

// console.log(counter);

function handleBtnClick(event) {
  const btn = event.target;
  const value = refs.userInput.value.trim(); // NaN

  if (value === '') {
    alert('Can process numbers only');
    refs.userInput.value = '';
    return;
  }

  if (Number.isNaN(value)) {
    alert('Can process numbers only');
    refs.userInput.value = '';
    return;
  }

  const numberValue = Number(value);
  const operationType = btn.dataset.action; // "increment"
  // console.log(counter[operationType]);

  updateCounter(numberValue, counter[operationType].bind(counter));

  refs.resultValue.textContent = counter.value;
}
