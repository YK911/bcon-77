/**
 * Функція зворотнього виклику (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

function fnA(message, callback) {
  // message = ""
  // callback = function (){}

  console.log(message);
  // console.log(callback);
  callback(message);
}

function fnB(number) {
  console.log('Log during fnB execution ', number);
}

// HOF - High order function
// fnA('A message', fnB);

// fnA('Some msg', logger);

function logger(message) {
  console.log(message);
}

// fnB(10);

/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  const result = callback(a, b);
  // console.log('🚀 ~ calc ~ result:', result);
}

function multiply(x, y) {
  return x * y;
}

function diff(x, y) {
  return x - y;
}

function pow(base, exponent) {
  return base ** exponent;
}

// calc(2, 3, multiply);

// calc(10, 8, diff);

// calc(12, 2, pow);

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  // console.log(array);
  const arr = [];

  for (const element of array) {
    const calcValue = callback(element);

    arr.push(calcValue);
  }

  return arr;
}

const res1 = each([64, 49, 36, 25, 16], function (value) {
  return value * 2;
});
// console.log('🚀 ~ res1:', res1);

const res2 = each([64, 49, 36, 25, 16], function (value) {
  return value - 10;
});
// console.log('🚀 ~ res2:', res2);

const res3 = each([64, 49, 36, 25, 16], function (value) {
  return Math.sqrt(value);
});
// console.log('🚀 ~ res3:', res3);

const res4 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.ceil(value);
});
// console.log('🚀 ~ res4:', res4);

const res5 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.floor(value);
});
// console.log('🚀 ~ res5:', res5);
