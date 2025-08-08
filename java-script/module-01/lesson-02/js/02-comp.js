/**
 * Оператори
 *
 * - Оператори порівняння
 * - Оператори рівності
 * - Приведення типів операндів
 */

const a = 23;
const b = 23;

// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a >= b);

const str1 = 'Соки';
const str2 = 'Сода';

// console.log(str1 > str2);
// console.log('а' > 'А');

// console.log('Вода' > 'Вода'); // 0430 > 0430

const expr1 = '2' > 1; // 2 > 1
// console.log('🚀 ~ expr1:', expr1);

const expr2 = '01' >= 1;
// console.log('🚀 ~ expr2:', expr2);

const expr3 = false < 1;
// console.log('🚀 ~ expr3:', expr3);

const expr4 = 1.1 > 1.1;
// console.log('🚀 ~ expr4:', expr4);

const expr5 = 0.1 + 0.2 > 0.3;
// console.log('🚀 ~ expr5:', expr5);

const x = 0;
const y = '0';

// console.log(x == y);
// console.log(x === y);

const userStatus = 1;

if (userStatus === 'online') {
  console.log(`User status: ${userStatus}`);
} else if (userStatus === 'offline') {
  console.log(`User status: ${userStatus}`);
}

// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined == 0);
// console.log(undefined == null);
