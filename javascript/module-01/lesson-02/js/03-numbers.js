/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth); // 50
// console.log('🚀 ~ elementWidth:', elementWidth);

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight); // 200.74
// console.log('🚀 ~ elementHeight:', elementHeight);

/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

const value = 27.3;

console.log('Math.ceil', Math.ceil(value));
console.log('Math.floor', Math.floor(value));
console.log('Math.round', Math.round(value));
