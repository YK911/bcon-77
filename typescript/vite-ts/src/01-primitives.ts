/**
 * - Прості типи: any, unknown, never, number, string, boolean, null, undefined
 * - Виведення типів (type inference)
 */

let value: number;

value = 5;
value = 2.3445;
console.log("🚀 ~ value:", value);

const message: string = "TypeScript is cool";
console.log("🚀 ~ message:", message);

let isOpen: boolean;
isOpen = false;
console.log("🚀 ~ isOpen:", isOpen);

let nullableValue: null;
nullableValue = null;
// nullableValue = 0;
console.log("🚀 ~ nullableValue:", nullableValue);

let randomNumber = 0.123;
// randomNumber = "10";
console.log("🚀 ~ randomNumber:", randomNumber);

// let bigValue: bigint = 100n;
// console.log("🚀 ~ bigValue:", bigValue);

// let symbolExample: symbol = Symbol("mySymbol");
// console.log("🚀 ~ symbolExample:", symbolExample);

// ! Never type
// function infinityLoop(): never {
//   while (true) {
//     console.log(1);
//   }
// }

// function errorGenerator(): never {
//   throw new Error("message");
// }

// ? Unknown
// let something: unknown = "It is a string";
let something: unknown = 5.123;
// something = 5;
// something = true;
if (typeof something === "string") {
  console.log("🚀 ~ something:", something.toUpperCase());
}

if (typeof something === "number") {
  console.log("🚀 ~ something:", something.toFixed(2));
}
