/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

const numbers = [1000, ...[1, 2, 3], 5000, ...[4, 5, 6], 7000, ...[7, 8, 9]];
// numbers.concat([1000], [(7, 8, 9)]);
// console.log(numbers);

/**
 * Пошук найменшої або найбільшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

const minTemp = Math.min(...temps);
// console.log('🚀 ~ minTemp:', minTemp);

const maxTemp = Math.max(...temps);
// console.log('🚀 ~ maxTemp:', maxTemp);

/**
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];
// const b = a;
// const b = cloneDeep(a);
// const ab = JSON.parse(JSON.stringify(a));
// console.log('🚀 ~ ab:', ab);

// b[0].x = 10;
// ab[1].y = 20;
// b[0] = 'START';

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a === b);
// console.log(a === ab);

/**
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log('🚀 ~ allTemps:', allTemps);

/**
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = { ...objA, ...objB };

// console.log(objC);
// console.log(objA === objC);

/**
 * Оновлюємо налаштування користувача
 */
// const settings = {
//   colorScheme: 'dark',
//   navigationColor: 'inverted',
//   sidebarBehaviour: 'fixed',
//   fluidLayout: true,
// };

const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log(finalSettings);

function sum(...args) {
  // console.log(arguments);
  // console.log(c);
  // console.log(args);
  let sum = 0;

  if (args.length === 0) {
    return sum;
  }

  console.log('Here');

  for (const element of args) {
    sum += element;
  }

  return sum;
}

const result1 = sum(1, 2, 3, 4, 5, 6);
console.log('🚀 ~ result1:', result1);

const result2 = sum(10, 20, 30, 40, 50, 60);
console.log('🚀 ~ result2:', result2);

const result3 = sum();
console.log('🚀 ~ result3:', result3);

const arrowFunction = (...args) => {
  console.log(args);
};
arrowFunction('name', 'age', 'hasFamily');
