/**
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

// console.log('Before');

// if (5 > 14) {
//   console.log('x > y');
// } else {
//   console.log('x < y');
// }

// console.log('After');
function checkNumber(event) {
  // Зупинили перезавантаження сторінки і очистили поле з результатом
  event.preventDefault();
  output.textContent = '';

  // Зберегли посилання на форму
  const form = event.target;

  // Отримуємо значення від користувача
  const userInput = Number(form.elements.userNumber.value);

  // Користувач ввів не число
  if (Number.isNaN(userInput)) {
    output.textContent = 'Sorry! Your input is not a number';
    return;
  }

  const number = 12;

  if (number === userInput) {
    output.textContent = 'Hooray! You guess the number';
  } else {
    output.textContent = 'Hm... Try again';
  }

  form.reset();
}

// guessNumber.onsubmit = checkNumber;

/**
 * -----------------------------
 */
const points = 650;

// if (points > 2500) {
//   console.log('Level 5');
// } else if (points > 1500) {
//   console.log('Level 4');
// } else if (points > 1000) {
//   console.log('Level 3');
// } else if (points > 500) {
//   console.log('Level 2');
// } else {
//   console.log('Level 1');
// }

const result =
  points > 2500
    ? 'Level 5'
    : points > 1500
    ? 'Level 4'
    : points > 1000
    ? 'Level 3'
    : points > 500
    ? 'Level 2'
    : 'Level 1';

/**
 * -----------------------------
 */
const balance = 1000;
let message = balance > 0 ? 'Positive' : 'Negative';

// if (balance > 0) {
//   message = 'Positive';
// } else {
//   message = 'Negative';
// }

// console.log(message);

function checkAnswer(event) {
  const userAnswer = event.target.value;
  userAnswer === 'NetScape' ? showCorrectAnswer() : showIncorrectAnswer();
}

function showCorrectAnswer() {
  output2.textContent = 'Правильно';
  box.style = 'border-color: lightgreen';
}

function showIncorrectAnswer() {
  output2.textContent = 'Не правильно';
  box.style = 'border-color: tomato';
}

answer.onchange = checkAnswer;
