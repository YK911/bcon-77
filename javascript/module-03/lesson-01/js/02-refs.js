/**
 * Передача за посиланням і за значенням
 *
 * Примітиви і складні типи даних
 * Посилальна рівність (referential equality)
 */

const arr1 = [1, 2, 3];
const arr2 = arr1;

arr1[0] = 500;
console.log("🚀 ~ arr1:", arr1)
console.log("🚀 ~ arr2:", arr2)

console.log(arr1 === arr2);


console.log([] === []);
console.log([1, 2, 3] === [1, 2, 3]);
console.log(5 === 5);
