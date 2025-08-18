/**
 * Об'єкти
 *
 * - Тип даних за посиланням
 * - Масиви і функції - це об'єкти
 */

// console.log({ a: 1, b: 2 } === { a: 1, b: 2 });
// console.log([1, 2] === [1, 2]);

const obj = {
  a: 10,
  b: 20,
};
console.log('🚀 ~ obj:', obj);

// const objCopy = obj;
const objCopy = Object.assign(obj);
// const objCopy = { ...obj };

objCopy.a = 100;
console.log('🚀 ~ objCopy:', objCopy);
/**
 * --------------------------
 */

const arr = [1, 2, 3];
arr.fly = true;
// console.table(arr);
// console.log(arr.fly);

function foo() {
  console.log('hello');
}

// console.dir(foo);
// console.log(foo.name);

// foo.info = {
//   created: new Date().toLocaleDateString(),
// };
// console.dir(foo);
