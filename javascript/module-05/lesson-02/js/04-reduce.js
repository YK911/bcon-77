/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

const numbers = [5, 10, 15, 20, 25];
const total = numbers.reduce((acc, number, idx, arr) => {
  acc += number;

  return acc;
}, 0);
// console.log('🚀 ~ total:', total);

/**
 * Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const salaries = Object.values(salary);
console.log('🚀 ~ salaries:', salaries);

const totalSalary = salaries.reduce((total, salary, idx, arr) => {
  total += salary;
  return total;
}, 0);
console.log('🚀 ~ totalSalary:', totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce((totalTime, player, idx, arr) => {
  totalTime += player.timePlayed;

  return totalTime;
}, 0);
console.log('🚀 ~ totalTimePlayed:', totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: 'Apple Prince', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Apple King', price: 200, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
  { label: 'Apple Lady', price: 150, quantity: 10 },
];

const totalAmount = cart.reduce((prev, next, idx, arr) => {
  // const amount = next.price * next.quantity;
  // prev += amount;

  prev += next.price * next.quantity;
  return prev;
}, 0);

console.log('🚀 ~ totalAmount:', totalAmount);

const totalAmount1 = cart.reduce(
  (prev, { price, quantity }) => (prev += price * quantity),
  0
);

console.log('🚀 ~ totalAmount1:', totalAmount1);

// const applesCart = cart.reduce((prev, item) => {
//   if (item.label === 'Apples') {
//     prev.push(item.price * item.quantity);
//   }

//   return prev;
// }, []);

const applesCart = cart.reduce((prev, item) => {
  if (item.label.includes('Apple')) {
    prev[item.label] = item.price * item.quantity;
  }

  return prev;
}, {});

// console.log('🚀 ~ applesCart:', applesCart);
