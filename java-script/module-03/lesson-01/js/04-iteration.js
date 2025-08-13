/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for і for...of
 */

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);

// for (let i = 0; i < friends.length; i++) {
//   // console.log(i);
//   const friend = friends[i];
//   const output = `${i + 1}: ${friend}`
//   console.log("🚀 ~ friend", output)
// }

// const newFriends = []

// for (let i = 0; i < friends.length; i++) {
//   const friend = friends[i];
//   // console.log("🚀 ~ friend:", friend)

//   // if (friend === "Poly") {
//   //   console.log("We find Poly");
//   //   continue;
//   // }

//   // newFriends.push(friend);

//   if (friend !== "Poly") {
//     newFriends.push(friend);
//   }
// }
// console.log("🚀 ~ newFriends:", newFriends)

// console.table(friends);

// for (let friend of friends) {
//   console.log(friend);
//   console.log(friends);
// }

// for (let i = friends.length - 1; i >= 0; i--) {
//   const friend = friends[i];
//   console.log("🚀 ~ friend:", friend)
// }

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

const values = "8 11";
const params = values.split(" ")
// console.log("🚀 ~ params:", params)
const width = params[0]
const height = params[1]

const square = width * height
// console.log("🚀 ~ square:", square)

const names = "'1,Mango', '2,Poly', '3,Ajax'"

const rows = names.split(", ")
// console.log(rows);

const data = []

for (const element of rows) {
  const updElem = element.replaceAll("'", "")
  const value = updElem.split(',')
  data.push(value)
}

// console.log(data);
// console.log(data[0][1]);


/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// let counter = 1;

// for (const fruit of fruits) {
//   const msg = `${counter}: ${fruit}`;
//   console.log(msg);
//   counter++;
// }

let message = `
| N | Name |\n------------\n`

for (let i = 0; i < fruits.length; i++) {
  const friut = fruits[i];
  message += `| ${i + 1} | ${friut.padEnd(4)} |\n`
}

// console.log(message);
