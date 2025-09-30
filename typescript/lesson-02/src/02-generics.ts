/**
 * Узагальнені типи (generics)
 */

/***************** 1 *****************/
function func<T>(value: T): T {
  console.log(value);
  return value;
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
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([10, 20, 30]); // 10
getFirstElement<string>(["Alice", "Bob"]); // "Alice"

/***************** 3 *****************/
function shuffle<T>(array: T[]): T[] {
  return array.toSorted(() => Math.random() - 0.5);
}

const mixedNums = shuffle([1, 2, 3, 4]);
console.log("🚀 ~ mixedNums:", mixedNums);
const mixedWords = shuffle(["apple", "banana", "cherry"]);
console.log("🚀 ~ mixedWords:", mixedWords);

/***************** 4 *****************/
function saveToStorage<T extends string, U>(key: T, value: U) {
  localStorage.setItem(key, JSON.stringify(value));
}

saveToStorage("user", "Jacob Peterson");
saveToStorage("clicks", 8);
saveToStorage("theme", { usertheme: "dark", isActive: true });

// function loadFromStorage(key: string) {
function loadFromStorage<T extends string>(key: T) {
  const item = localStorage.getItem(key);
  if (item !== null) {
    return JSON.parse(item);
  }
  return null;
}

const user = loadFromStorage("user");
const clicks = loadFromStorage("clicks");

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
  { name: "X-ray", price: 100 },
];

// const product = { name: "X-ray", price: 100 };
// product.price;
// product['price']

const mostExpensive = max(products, product => product.price);
const lastPosition = max(products, product => product.name);
console.log("🚀 ~ mostExpensive:", mostExpensive);
console.log("🚀 ~ lastPosition:", lastPosition);
// → { name: "Laptop", price: 1000 }
