/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

const a = 100;
const b = 20;

// for (let i = b; i <= a; i++) {
//     if ( i % 5 === 0 ) {
//       console.log(i);
//     }
// }

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 і max=5, то діапазон 0-5,
 * в ньому два парних числа - 2 і 4, їх сума 6.
 */

const min = 0;
const max = 5;
let total = 0;

// for (let i = min; i < max; i++) {
//   console.log('before', i);

//   if (i % 2 !== 0) {
//     continue
//   }

//   total += i
//   console.log('after',total);
// }
function checkNumbers() {
  console.log("Start fn");

  let total = 0

  for (let i = min + 1; i < max; i++) {
    console.log(i);
    if (i % 3 === 0) {
      break;
    }
    total += 1
  }

  console.log("End fn");
  return total;
}

const result = checkNumbers()
console.log("🚀 ~ result:", result)
// console.log(total);

