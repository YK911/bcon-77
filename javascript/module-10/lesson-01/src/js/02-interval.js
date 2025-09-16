import '../common.css';

/**
 * Метод setInterval(callback, delay, args)
 */
let counter = 0;

const logger = time => {
  counter += 1;

  if (counter === 5) {
    clearInterval(intervalId);
    return;
  }

  console.log(`Лог кожні ${time} мс - ${Date.now()}`);
};

console.log('До виклику setInterval');

// setInterval(logger, 1000, '1000');

console.log('Після виклику setInterval');

/**
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

const intervalId = setInterval(logger, 2000, '2000');
