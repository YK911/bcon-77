/**
 * Псевдомасив arguments и Array.from
 */
// console.log(message);
// console.log(messageInfo);

// ! Function Declaration
function showMessage(text, type, htmlElement = message) {
  // 1 - text = undefined
  // 2 - type = undefined
  // 3 - htmlElement = <p></p>
  // 4 - arguments = []

  htmlElement.textContent = `${text}`;
  htmlElement.classList.add(type);

  // console.log('🚀 ~ arguments:', arguments);
  const args = Array.from(arguments);
  // console.log('🚀 ~ args:', args);

  if (args.includes('info')) {
    htmlElement.classList.add('pulse');
  }

  // return undefined
}

showMessage('This is error message', 'error');

showMessage('This is info message', 'info', messageInfo);

showMessage('This is warning message', 'warning', messageWarning);
/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

function add() {
  // arguments = [1, 2]
  let total = 0;

  for (const number of arguments) {
    total += number;
  }

  return total;
  // return undefined
  // return;
}

const result1 = add(1, 2); // 3
// console.log('🚀 ~ result1:', result1);
const result2 = add(10, 20, 40, 60); // 130
// console.log('🚀 ~ result2:', result2);
const result3 = add(-10, 30, 50, -100, 200); // 170
// console.log('🚀 ~ result3:', result3);

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
function calAverage() {
  // arguments = [1, 2, 3, 4]
  // TODO: якщо потрібно викликати будь-який метод масиву,
  // TODO: тоді перетворюємо arguments у повноцінний масив через Array.form()

  // ! якщо потрібно перебрати елементи в циклі або дізнатися довжину псевдомасиву,
  // ! тоді працюємо з argumnets

  let sum = 0;

  for (const number of arguments) {
    sum += number;
  }

  return sum / arguments.length;

  // const numbers = Array.from(arguments);
  // numbers.push(10);

  // console.log(numbers);

  // console.log(arguments.length);

  // return undefined
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

function multiply() {
  if (true) {
    // 1 nothing -> undefined
    // 2 return; -> undefined
    // 3 return undefined; -> undefined
  }

  // return undefined
}
