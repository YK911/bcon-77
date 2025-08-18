/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys()
 * - Метод Object.values()
 * - Метод Object.entries()
 */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const user = {
//   name: 'Mango',
//   status: 'admin',
// };
// user.name = 'Poly';

// feedback.user = user;
// console.log('🚀 ~ feedback:', feedback);

let totalFeedback = 0;

// for (const key in feedback) {
//   // 1 key = "good"
//   const value = feedback[key];

//   // console.log('🚀 ~ key:', key);
//   // console.log('🚀 ~ value:', value);
//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);

/**
 * ---------------------------------
 */
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const keys = Object.keys(feedback);
console.log(keys);

// for (const key of keys) {
// const value = feedback[key];
//   console.log('🚀 ~ value:', value);

//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);

const values = Object.values(feedback);
console.log(values);

for (const value of values) {
  console.log(value);
  totalFeedback += value;
}

console.log('totalFeedback: ', totalFeedback);

// const entries = Object.entries(feedback);
// console.log('🚀 ~ entries:', entries);
