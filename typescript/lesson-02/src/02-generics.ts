/**
 * Узагальнені типи (generics)
 */

/***************** 1 *****************/
function func(value) {
  console.log(value);
}

func(5);
func("hello");
func(false);
func([1, 2]);
func([1, "hello"]);

interface User {
  username: string;
  age: number;
}

func({ username: "mango", age: 5 });

/***************** 2 *****************/
// function getFirstElement(arr) {
//   return arr[0];
// }

// getFirstElement([10, 20, 30]); // 10
// getFirstElement(["Alice", "Bob"]); // "Alice"

/***************** 3 *****************/
// function shuffle(array) {
//   return array.toSorted(() => Math.random() - 0.5);
// }

// const mixedNums = shuffle([1, 2, 3, 4]);
// console.log("🚀 ~ mixedNums:", mixedNums);
// const mixedWords = shuffle(["apple", "banana", "cherry"]);
// console.log("🚀 ~ mixedWords:", mixedWords);

/***************** 4 *****************/
// function saveToStorage(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// saveToStorage("user", "Jacob Peterson");
// saveToStorage("clicks", 8);

// function loadFromStorage(key) {
//   const item = localStorage.getItem(key);
//   if (item !== null) {
//     return JSON.parse(item);
//   }
//   return null;
// }

// const user = loadFromStorage("user");
// const clicks = loadFromStorage("clicks");

/***************** 5 *****************/
function max<T>(array: T[], selector: (value: T) => T[keyof T]) {
  return array.reduce((prev, curr) =>
    selector(curr) > selector(prev) ? curr : prev
  );
}

interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 800 },
];

const mostExpensive = max(products, p => p.price);
// → { name: "Laptop", price: 1000 }
