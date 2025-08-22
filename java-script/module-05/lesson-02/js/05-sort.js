/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3, 98, 22];

const sorted = numbers.toSorted((a, b) => b - a);
// console.log('🚀 ~ sorted:', sorted);
// console.log(numbers === sorted);

const letters = ['b', 'B', 'a', 'A'];

const sortedString = letters.toSorted((a, b) => {
  return b.localeCompare(a);
});

// console.log('🚀 ~ letters:', sortedString);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   })
// );

const descSortedNumbers = numbers.toSorted((a, b) => b - a);
// console.log('🚀 ~ descSortedNumbers:', descSortedNumbers);
const ascSortedNumbers = numbers.toSorted((a, b) => a - b);
// console.log('🚀 ~ ascSortedNumbers:', ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// За ігровим часом
const sortedByBestPlayers = players.toSorted((prev, next) => {
  return next.timePlayed - prev.timePlayed;
});
// console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players.toSorted((prev, next) => {
  return prev.timePlayed - next.timePlayed;
});
// console.table(sortedByWorstPlayers);

// По першій літері имені
const byName = players.toSorted((curr, next) => {
  return curr.name[0].localeCompare(next.name[0]);
}); // []
// console.table(byName);
