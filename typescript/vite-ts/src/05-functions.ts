// /**
//  * - Типізація функцій
//  * - Типізація аргументів
//  * - Тип значення, яке повертає функція
//  * - Опціональні параметри
//  * - Типізація методів
//  */

//***************** 1 *****************/
function add(numberOne: number, numberTwo: number) {
  return numberOne + numberTwo;
}

add(2, 3);
// add("2", "3");

// function multiply(numberOne: number, numberTwo: number): number {
//   // return numberOne * numberTwo;
//   // return "Dumb text";
//   return 3;
// }

// const result = multiply(1, 3);

function sayHello(name?: string): void {
  console.log(`Hello ${name || ""}`);
}

// sayHello("Mango");
// sayHello();
// //! sayHello(5);

type User = {
  username: string;
  age: number;
};

const allUsers: User[] = [
  { username: "poly", age: 20 },
  { username: "jacob", age: 30 },
  { username: "mango", age: 25 },
];

function getUserNames(users: User[]) {
  return users.map(user => user.username);
}

const names = getUserNames(allUsers);
console.log("🚀 ~ names:", names);

// /***************** 2 *****************/
function greet(username: string, age?: number) {
  if (age !== undefined) {
    //  username, age
    console.log(username, age);
  } else {
    // username
    console.log(username);
  }
}

greet("poly", 15);

greet("jacob");

// /***************** 3 *****************/
type Greet = (message: string) => void;

interface _User {
  username: string;
  greet: Greet;
}

const jacob: _User = {
  username: "Jacob",
  greet: message => {
    console.log(message);
  },
};

jacob.greet("Welcome!");

// /***************** 4 *****************/
interface Player {
  username: string;
  isOnline: boolean;
}

const allPlayers: Player[] = [
  { username: "poly", isOnline: false },
  { username: "jacob", isOnline: true },
  { username: "adrian", isOnline: false },
];

type GetOnlinePlayers = (players: Player[]) => Player[];
type GetPlayerNames = (players: Player[]) => string[];

interface GamePlatform {
  getOnlinePlayers: GetOnlinePlayers;
  getPlayerNames: GetPlayerNames;
}

const platform: GamePlatform = {
  getOnlinePlayers: players => {
    return players.filter(player => player.isOnline);
  },
  getPlayerNames: players => {
    return players.map(player => player.username);
  },
};

platform.getOnlinePlayers(allPlayers);
platform.getPlayerNames(allPlayers);
