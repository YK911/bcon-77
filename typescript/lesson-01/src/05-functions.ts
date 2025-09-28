// /**
//  * - Типізація функцій
//  * - Типізація аргументів
//  * - Тип значення, яке повертає функція
//  * - Опціональні параметри
//  * - Типізація методів
//  */

// /***************** 1 *****************/
// type User = {
//   username: string;
//   age: number;
// };

// const allUsers = [
//   { username: "poly", age: 20 },
//   { username: "jacob", age: 30 },
//   { username: "mango", age: 25 },
// ];

// function getUserNames(users) {
//   return users.map(user => user.username);
// }

// const names = getUserNames(allUsers);

// /***************** 2 *****************/
// function greet(username, age) {
//   if (age !== undefined) {
//     //  username, age
//   } else {
//     // username
//   }
// }

// greet("poly", 15);

// greet("jacob");

// /***************** 3 *****************/
// // interface User {}

// const jacob: User = {
//   username: "Jacob",
//   greet: message => {
//     console.log(message);
//   },
// };

// jacob.greet("Welcome!");

// /***************** 4 *****************/
// interface Player {
//   username: string;
//   isOnline: boolean;
// }

// const allPlayers: Player[] = [
//   { username: "poly", isOnline: false },
//   { username: "jacob", isOnline: true },
//   { username: "adrian", isOnline: false },
// ];

// // interface GamePlatform {}

// const platform: GamePlatform = {
//   getOnlinePlayers: players => {
//     return players.filter(player => player.isOnline);
//   },
//   getPlayerNames: players => {
//     return players.map(player => player.username);
//   },
// };

// platform.getOnlinePlayers(allPlayers);
// platform.getPlayerNames(allPlayers);
