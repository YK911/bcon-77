/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() та for...of
 */

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = !user.premium;

// console.log('🚀 ~ user:', user);

const keys = Object.keys(user);
console.log('🚀 ~ keys:', keys);

let output = `| ${formatOutput('Key', 7)} | ${formatOutput('Value', 9)} |\n`;

for (const key of keys) {
  output += `| ${formatOutput(key, 7)} | ${formatOutput(user[key], 9)} |\n`;
}

function formatOutput(value, maxLength, fillValue = ' ') {
  // value = undefined
  // maxLength = undefined
  // fillValue = " "
  let formatedValue = '';

  if (typeof value === 'string') {
    formatedValue = value.padEnd(maxLength, fillValue);

    return formatedValue;
  }

  const convertedToString = String(value);
  formatedValue = convertedToString.padEnd(maxLength, fillValue);

  return formatedValue;
  // return undefined
}

console.log(output);

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */
const teamSalaries = {
  // John: 100,
  // Ann: 160,
  // Pete: 130,
};

// const salaries = Object.values(teamSalaries);
// console.log('🚀 ~ salaries:', salaries);

// let sum = 0;

// if (salaries.length !== 0) {
//   // Boolean(salaries.length) === false;
//   // 0 === false;
//   // '' === false;
//   // false === false;
//   // undefined === false;
//   // null === false;

//   console.log('Work');

//   for (const salary of salaries) {
//     sum += salary;
//   }
// }

// console.log('🚀 ~ sum:', sum);

function calculateTeamSalary(teamSalary = {}) {
  const isNotObject =
    typeof teamSalary !== 'object' ||
    teamSalary === undefined ||
    teamSalary === null;

  if (isNotObject) {
    console.warn(`teamSalary in not an object`);
    return;
  }

  const salaries = Object.values(teamSalary);
  // ❌ Bad cases
  if (salaries.length === 0) {
    return 0;
  }

  let sum = 0;

  for (const salary of salaries) {
    sum += salary;
  }

  return sum;
}

const result = calculateTeamSalary(teamSalaries);
console.log('🚀 ~ result:', result);

const result1 = calculateTeamSalary(null);
console.log('🚀 ~ result1:', result1);
