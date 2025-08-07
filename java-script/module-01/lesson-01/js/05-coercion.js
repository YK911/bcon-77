/**
 * Перетворення типів: рядки
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

const coercion1 = String(5); // "5"
// console.log('🚀 ~ coercion1:', typeof coercion1);

const coercion2 = String(true);
console.log('🚀 ~ coercion2:', coercion2);

const coercion3 = String(null);
console.log('🚀 ~ coercion3:', coercion3);

const coercion4 = String(undefined);
console.log('🚀 ~ coercion4:', coercion4);

const coercion5 = '5' + 3;
console.log('🚀 ~ coercion5:', coercion5);

const coercion6 = '5' + true;
console.log('🚀 ~ coercion6:', coercion6);

const coercion7 = null + '5';
console.log('🚀 ~ coercion7:', coercion7);

let someVar;

const coercion8 = '5' + someVar;
console.log('🚀 ~ coercion8:', coercion8);

// const result = (1 * (23 + '10')) / 112;
// console.log('🚀 ~ result:', result);

// console.log(typeof null);
// console.log(typeof undefined);

// if (typeof null === 'object') {
//   console.log('✅ success');
// } else {
//   console.error('❌ error');
// }
