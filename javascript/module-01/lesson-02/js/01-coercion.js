/**
 * Перетворення типів: числа
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

const num1 = Number(true);
console.log('🚀 ~ num1:', num1);

const num2 = Number(false);
console.log('🚀 ~ num2:', num2);

const num3 = Number('32qwe');
console.log('🚀 ~ num3:', num3);

const num4 = Number('32.4');
console.log('🚀 ~ num4:', num4);

console.log(5 - null);
console.log(5 - true);
console.log(5 - false);
console.log(5 - undefined);
console.log(5 - '        32         ');
console.log(5 - '        32    .     ');
