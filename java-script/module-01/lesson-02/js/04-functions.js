/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Типові параметри (значення за змовчуванням)
 */

// Function declaration
function updateClicks() {
  clicks += 1;
  text.textContent = clicks;
}

function resetResult() {
  text.textContent = 0;
}

function showMessage(element, messageText, messageType) {
  // let element = HTML Element
  // let messageText = 'JavaScript is awesome!'
  // let messageType = 'alert-success'

  element.textContent = messageText;
  element.classList.add(messageType);
}

let clicks = 0;

// updateClicks();
// updateClicks();
// updateClicks();
// updateClicks();

// btn.onclick = updateClicks;
// reset.onclick = resetResult;

// showMessage(alertMessage1, 'JavaScript is awesome!', 'alert-success');
// showMessage(alertMessage2, 'Programming is my jam!', 'alert-warning');
// showMessage(alertMessage3, 'BootCamp 77 forever', 'alert-primary');

function checkAge(age) {
  // let age = 26;

  const isAdult = age >= 18; // true

  if (isAdult) {
    return '✅ Has access';
  }

  return '❌ Access denied';
}

const result = checkAge(16);
// console.log(result);

const result2 = checkAge(26);
// console.log(result2);

function showMovie(movieName) {
  // let movieName = undefined

  // console.log(movieName);
  return movieName;

  // return undefined
}

const movie = showMovie('Wednesday');
// console.log('🚀 ~ movie:', movie);

function displayPicture(picturePath = './assets/pug.avif') {
  // let picturePath = './assets/pug.avif'
  cardImage.src = picturePath;
}

// displayPicture('./assets/big-ben.avif');

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
  // let weight = '88,3'
  // let height = '1.75'

  const normalizedWeight = Number.parseFloat(weight.replace(',', '.'));
  const normalizedHeight = Number.parseFloat(height.replace(',', '.'));

  const result = normalizedWeight / normalizedHeight ** 2;

  // const res = Math.round(result * 10) / 10;
  // console.log('🚀 ~ calcBMI ~ res:', res);

  return result.toFixed(1);
}

const bmi = calcBMI('88,3 kg', '1.75');
console.log(bmi); // 28.8
