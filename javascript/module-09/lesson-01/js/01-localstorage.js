const stringifyValue = JSON.stringify([1, 2, 3]);
// console.log(typeof stringifyValue);

const res1 = JSON.parse(stringifyValue);
// console.log('🚀 ~ res1:', res1);

const theme = {
  id: undefined,
  type: 'light',
  isDark: false,
  name: 'bs-light',

  changeTheme(themeType) {
    this.type = themeType;
  },
};

const themeToJSON = JSON.stringify(theme);
// console.log('🚀 ~ themeToJSON:', themeToJSON);

const parsedTheme = JSON.parse(themeToJSON);
// console.log('🚀 ~ parsedTheme:', parsedTheme);

const isOdd = number => number % 2 === 0;

const res2 = JSON.stringify(isOdd);
// console.log('🚀 ~ res2:', res2);

/**
 * LocalStorage
 */

const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];
const names = ['Mango', 'Poly', 'Ajax'];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */
// localStorage.setItem('color-sheme', 'dark');
// localStorage.setItem('counter', 10);

localStorage.setItem(LS_KEY, JSON.stringify(names));

// const res3 = localStorage.getItem('Array of names');
// console.log('🚀 ~ res3:', res3);

// const res4 = localStorage.getItem('counter');
// console.log('🚀 ~ res4:', res4);

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

const lsData = localStorage.getItem('perfectpixel-panel');
const lsNamesData = JSON.parse(localStorage.getItem(LS_KEY));
console.log('🚀 ~ lsNamesData:', lsNamesData);
// console.log('🚀 ~ lsData:', typeof lsData);
// console.log('🚀 ~ lsData:', lsData);

const parsedLsData = JSON.parse(lsData);
// console.log('🚀 ~ parsedLsData:', parsedLsData);

/**
 * Видалення
 */

localStorage.removeItem(LS_KEY);
// localStorage.clear();

/**
 * LocalStorage не може зберігати функції
 */

function add(a, b) {
  return a + b;
}

localStorage.setItem('fn1', JSON.stringify(add));

console.log(localStorage.length);

const fn1LSData = localStorage.getItem('fn1');
// console.log('🚀 ~ fn1LSData:', fn1LSData);
// fn1LSData();

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};
