/**
 * Арифметичні операції
 * - Оператори +, -, *, /, %, **
 * - Комбіновані оператори
 */

const a = 10;
const b = 5;

const result1 = a + b;
console.log('🚀 ~ result1:', result1);

const result2 = a - b;
console.log('🚀 ~ result2:', result2);

const result3 = a * b;
console.log('🚀 ~ result3:', result3);

const result4 = a / b;
console.log('🚀 ~ result4:', result4);

const result5 = a % b;
console.log('🚀 ~ result5:', result5);

const result6 = a ** b;
console.log('🚀 ~ result6:', result6);

const x = 144;

const result7 = x ** 0.5;
console.log('🚀 ~ result7:', result7);

/**
 * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

const apples = 47;
const grapes = 135;

/**
 * Заміни вираз перевизначення комбінованим оператором
 */

let students = 100;
// students = students + 50;

students += 50;

console.log('🚀 ~ students:', students);

/**
 * Розбери пріоритет операторів в інструкції присвоєння значення змінної result
 */

const result = 108 + (223 - 2) * 5;
console.log(result);
