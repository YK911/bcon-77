/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

function logItems(items) {
  // items = undefined
  let result = '';

  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    // console.log(element);

    result += `${i + 1} - ${element} `;
  }

  return result;
}

const log1 = logItems(['Mango', 'Poly', 'Ajax']);
// console.log('🚀 ~ log1:', log1);
const log2 = logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// console.log('🚀 ~ log2:', log2);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

function printInfo(names, phones) {
  // [[Scope]] = []
  // names = undefined
  // phones = undefined
  // arguments = []
  const namesArray = transfromValueToArray(names);
  const phonesArray = transfromValueToArray(phones);
  let info = '';

  for (let i = 0; i < namesArray.length; i++) {
    const name = namesArray[i];
    const phone = phonesArray[i];

    info += `Contact name: ${name} - ${phone}\n`;
  }

  return info;
  // return undefined
}

function transfromValueToArray(value, separator = ',') {
  return value.split(separator);
}

const info = printInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300'
);
console.log('🚀 ~ info:\n', info);

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

/**
 * Дотатково: вказати в коментарях значення, які автоматично створюються в середині функції
 * */

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(minutes) {}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
