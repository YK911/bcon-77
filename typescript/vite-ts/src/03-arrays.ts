/**
 * - Типізація масивів: тип[] та Array<тип>
 * - Підказки методів та властивостей
 * - Типізація масиву об'єктів
 */

/***************** 1 *****************/
const planets: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const firstArrayEl = planets.at(0);
planets.push("Earth");
planets.length;

const numbers: number[] = [11, 22, 33, 44];
//! numbers[0] = "10"; // Error by type

const fruits: Array<string> = ["apple", "banana", "mango", "kiwi"];

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const names = ["Mango", "Poly", "Ajax"];

//! names.push(2); // Error by type
names.push("Jupiter");

const [firstName, secondName] = names;
console.log("🚀 ~ firstName:", firstName);
console.log("🚀 ~ secondName:", secondName);

const blendedArray: (string | number)[] = ["Hello", 123];
blendedArray.push("Wolrd");
//! blendedArray.push(false);

/***************** 2 *****************/
interface Order {
  email: string;
  total: number;
}

// const orders: Array<Order> = [
const orders: Order[] = [
  { email: "j.mercer@mail.com", total: 120 },
  { email: "emily.watts@mail.com", total: 85 },
  { email: "liam.smith@mail.com", total: 200 },
  { email: "sophia.jones@mail.com", total: 150 },
  { email: "noah.brown@mail.com", total: 95 },
];
