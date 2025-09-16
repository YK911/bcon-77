import '../common.css';

/**
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// const makeOrder = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       onSuccess(`✅ Ваше замовлення: ${dish}`);
//     }

//     onError('❌ Упс, у нас закінчилися продукти');
//   }, 1000);
// };

// makeOrder(
//   'пиріжок',
//   result => {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
//   },
//   error => {
//     console.log('onMakeOrderError');
//     console.log(error);
//   }
// );

const makeOrder = dish => {
  const passed = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (passed) {
        resolve(`✅ Ваше замовлення: ${dish}`);
      }
      reject('❌ Упс, у нас закінчилися продукти');
    }, 1000);
  });
};

// makeOrder('пиріжок')
//   .then(result => {
//     console.log('✅ On success');
//     console.log('🚀 ~ result:', result);
//   })
//   .catch(error => {
//     console.log('❌ On error');
//     console.log('🚀 ~ error:', error);
//   });

/**
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// console.log(Promise.resolve(5));
// console.log(Promise.reject(10));

// const prepareDish = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   if (passed) {
//     onSuccess(`✅ Ваше замовлення: ${dish}`);
//   }

//   onError('❌ Упс, у нас закінчилися продукти');
// };

// prepareDish(
//   'пиріжок',
//   result => {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
//   },
//   error => {
//     console.log('onMakeOrderError');
//     console.log(error);
//   }
// );

const prepareDish = dish => {
  const passed = Math.random() > 0.5;

  return passed
    ? Promise.resolve(`✅ Ваше замовлення: ${dish}`)
    : Promise.reject('❌ Упс, у нас закінчилися продукти');
};

// prepareDish('пиріжок')
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//* PROMISE METHODS

const makePromise = (text, delay) => {
  const random = Math.random() > 0.4;
  console.log(random);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random) {
        resolve(text);
      } else {
        reject('Error');
      }
    }, delay);
  });
};

// const promiseA = makePromise('value promiseA', 1000);
// const promiseB = makePromise('value promiseB', 2000);
// const promiseC = makePromise('value promiseC', 3000);

// Promise.all([promiseA, promiseB, promiseC])
//   .then(value => {
//     console.log('Then method work');
//     console.log(value);
//   })
//   .catch(error => {
//     console.log('Catch method work');

//     console.log(error);
//   });

// const promiseA1 = makePromise('value promiseA', 3000);
// const promiseB1 = makePromise('value promiseB', 2000);
// const promiseC1 = makePromise('value promiseC', 1000);

// Promise.race([promiseA1, promiseB1, promiseC1])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const promiseA2 = makePromise('value promiseA', 1000);
const promiseB2 = makePromise('value promiseB', 2000);
const promiseC2 = makePromise('value promiseC', 3000);

Promise.allSettled([promiseA2, promiseB2, promiseC2])
  .then(value => {
    console.log('Then method work');
    console.table(value);
  })
  .catch(error => {
    console.log('Catch method work');

    console.table(error);
  });
