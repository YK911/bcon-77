import '../common.css';

/**
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До виклику setTimeout'); // 1

const timerId1 = setTimeout(() => {
  // console.log('1 - Всередині зворотного виклику для setTimeout'); // 2
}, 2000);
// console.log('🚀 ~ timerId1:', timerId1);

const timerId2 = setTimeout(() => {
  // console.log('2 - Всередині зворотного виклику для setTimeout'); // 3
}, 1000);
// console.log('🚀 ~ timerId2:', timerId2);

// console.log('Після виклику setTimeout'); // 4

/**
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
const logger = time => {
  console.log(`Лог через ${time} мс, оскільки не скасували таймаут`);
};

// const timeoutId = setTimeout(logger, 1000, '1000');

// clearTimeout(timeoutId);

/**
 * Можливість передати параметри для колбеку
 */
const id = setTimeout(
  (a, b) => {
    console.log(`${a}! My name is ${b}`);
  },
  2000,
  'Hello',
  'Mango'
);
