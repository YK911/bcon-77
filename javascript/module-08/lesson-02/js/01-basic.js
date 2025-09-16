/**
 * Деструктуризація об'єкта
 */

// const isOnline = true;

const user = {
  username: 'Jacob name',
  skills: {
    html: true,
    css: false,
    js: true,
  },
  // isOnline,
};

const { username } = user;
// console.log('🚀 ~ username:', username);
// console.log('🚀 ~ skills:', skills);

// const res1 = user?.skills?.css;
// console.log('🚀 ~ res1:', res1);

// const res2 = user['skills']['css'];
// console.log('🚀 ~ res2:', res2);

// const property = 'username';
// console.log(user[property]);

// const values = Object.values(user);
// console.log('🚀 ~ values:', values);

// const innerValues = Object.values(values[1]);
// console.log('🚀 ~ innerValues:', innerValues[1]);

/**
 * Глибока деструктуризація об'єкта
 */
const {
  skills: { html, css, js },
} = user;

// console.log('skills', skills);

// console.log('html', html);
// console.log('css', css);
// console.log('js', js);

/**
 * Деструктуризація масива
 */

const arr = [1, 2, 3, 4, 5];

// arr[0]
// arr[1]

const [one, two, , four] = arr;
// console.log('🚀 ~ one:', one);
// console.log('🚀 ~ two:', two);
// console.log('🚀 ~ four:', four);

const products = [
  {
    id: 3,
    name: 'apple',
    quantity: 10,
    supplyer: {
      name: 'Golden rose',
      region: 'Palermo',
    },
  },
];

const [product] = products;

const {
  id,
  supplyer: { region },
} = product;
// console.log('🚀 ~ id:', id);
// console.log('🚀 ~ region:', region);

// Перейменування змінної під час деструктуризації
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
  cost: 10_000,
};

const title = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';
const cost = 10;
console.log('🚀 ~ cost:', cost);
// const { title: bookTitle } = book;
const { cost: bookCost = 0 } = book;
console.log('🚀 ~ bookCost:', bookCost);

console.log('🚀 ~ title:', title);
// console.log('🚀 ~ bookTitle:', bookTitle);

// function name(data) {
//   const { data: result, isError, status } = fetch('Make get by API ');
//   result;
// }
