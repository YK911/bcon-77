/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

const numbers = [5, 10, 15, 20, 25];
let total = 0;

const forEachResult = numbers.forEach(function (number, idx, arr) {
  if (idx === 2) {
    return;
  }
  total += number;
});

// console.log('🚀 ~ forEachResult:', forEachResult);
// console.log(total);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
function logItems(items) {
  console.log(items);
  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }

  items.forEach((item, idx, arr) => {
    console.log(`${idx + 1} - ${item}`);
  });
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
function printContactsInfo(params = {}) {
  const nameList = params.names.split(',');
  const phoneList = params.phones.split(',');

  // console.log('🚀 ~ printContactsInfo ~ nameList:', nameList);
  // console.log('🚀 ~ printContactsInfo ~ phoneList:', phoneList);

  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }

  // Ver. 1
  nameList.forEach((name, idx, arr) => {
    const contact = `📱: ${name} ${phoneList[idx]}`;
    console.log('🚀 ~ printContactsInfo ~ contact:', contact);
  });

  // Ver. 2
  nameList.forEach((name, idx, arr) =>
    console.log(`📱: ${name} ${phoneList[idx]}`)
  );

  //   forEachCallback('Jacob', 0, ['Jacob', 'William', 'Solomon', 'Artemis']); // 1
  //   forEachCallback('William', 1, ['Jacob', 'William', 'Solomon', 'Artemis']); // 2
  //   forEachCallback('Solomon', 2, ['Jacob', 'William', 'Solomon', 'Artemis']); // 3
  //   forEachCallback('Artemis', 3, ['Jacob', 'William', 'Solomon', 'Artemis']); // 4
}

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
function calculateAverage(...args) {
  let total = 0;
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }

  // args.forEach(function (elem, idx, arr) {
  //   total += elem;
  // });

  // Ver. 1
  // args.forEach((elem, idx, arr) => (total += elem));
  // Ver. 2
  args.forEach(elem => (total += elem));

  return total / args.length;
}

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
