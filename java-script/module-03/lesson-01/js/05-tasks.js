/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

for (const number of numbers) {
  // console.log(number);
  if (number % 2 === 0) {
    total += number
  }
}

// console.log(total);


/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імені та телефону у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

const namesArr = names.split(',')
// console.log("🚀 ~ namesArr:", namesArr)
const phonesArr = phones.split(',')
// console.log("🚀 ~ phonesArr:", phonesArr)

for (let i = 0; i < namesArr.length; i++) {
  const name = namesArr[i];
  const phone = phonesArr[i];

  // `📱 - ${namesArr[i]} ${phonesArr[i]}`

  const print = `📱 - ${name} ${phone}`
  // console.log(print);
}

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символом пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = "Welcome to the future dear friends";

// const words = string.split(" ");
// console.log("🚀 ~ words:", words);

// const startElemIdx = 1;
// const lastElemIdx = words.length - 1;

// const cutWords = words.slice(startElemIdx, lastElemIdx);
// console.log("🚀 ~ cutWords:", cutWords);

// const updString = cutWords.join(" ")
// console.log("🚀 ~ updString:", updString)

function excludeFirstAndLastWord(text) {
  const words = text.split(" ");

  const startElemIdx = 1;
  const lastElemIdx = words.length - 1;
  const cutWords = words.slice(startElemIdx, lastElemIdx);
  return cutWords.join(" ");
}

const result1 = excludeFirstAndLastWord(string);
// console.log("🚀 ~ result1:", result1);

const result2 = excludeFirstAndLastWord("Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.");
// console.log("🚀 ~ result2:", result2);

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const values = [0, 2, 17, 94, 1, 23, 37];
let min;

min = values[0];
// debugger;

// for (let i = 1; i < values.length; i++) {
//   const currentValue = values[i];

//   if (min > currentValue) {
//     min = currentValue
//   }
// }

for (const value of values.slice(1)) {
  // console.log(value);
  if (min > value) {
    min = value
  }
}

// console.log(min); // 1


const arrNumbers = [0, 2, 17, 94, 1, -100, 23, 37];

const minNumber = Math.min(...arrNumbers);
// console.log("🚀 ~ minNumber:", minNumber);
const maxNumber = Math.max(...arrNumbers);
// console.log("🚀 ~ maxNumber:", maxNumber);

const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

for (let i = 0; i < matrix.length; i++) {
  const row = matrix[i];

  for (let j = 0; j < row.length; j++) {
    // const element = row[j];
    row[j] *= 2
  }
}

console.table(matrix);
