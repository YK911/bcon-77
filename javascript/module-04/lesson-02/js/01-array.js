/**
 * Масив об'єктів
 *
 * - Перебирання масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// class Friend {
//   constructor(name, online) {
//     this.name = name;
//     this.online = online;
//   }
// }

// class Bestfriend extends Friend {
//   constructor(name, online, isBestFriend) {
//     super(name, online);

//     this.isBestFriend = isBestFriend;
//   }
// }

// const friend = new Friend('Kiwi', true);
// console.log('🚀 ~ friend:', friend);

// const bestFriend = new Bestfriend('Poly', false, true);
// console.log('🚀 ~ bestFriend:', bestFriend);

// console.log(bestFriend);

// console.table(friends);

/**
 * Пошук друга за іменем
 */
function findFriendByName(allFriends, friendName) {
  // arguments = []
  // allFriends = [{}, {}, {}, {}]
  // friendName = 'Poly'

  for (const friend of allFriends) {
    // console.log(friend['name']);
    // console.log(friend.name);
    // console.log(friend);
    if (friend.name === friendName) {
      // console.log('Find', friend.name);
      return friend;
    }
  }

  return null;
}

// const res1 = findFriendByName(friends, 'Poly');
// console.log('🚀 ~ res1:', res1);
// const res2 = findFriendByName(friends, 'Chelsy');
// console.log('🚀 ~ res2:', res2);

/**
 * Отримуємо імена всіх друзів
 */
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: true },
];

function getAllNames(allFriends) {
  const names = [];

  for (const friend of allFriends) {
    // console.log(friend.name);
    if (friend.name !== undefined) {
      names.push(friend.name);
    }
  }

  return names;
}

const res3 = getAllNames(friends);
// console.log('🚀 ~ res3:', res3);

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
function getOnlineFriends(allFriends) {
  const names = [];

  for (const friend of allFriends) {
    if (friend.online) {
      names.push(friend.name);
    }
  }

  return names;
}

const res4 = getOnlineFriends(friends);
// console.log('🚀 ~ res4:', res4);

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }

  return `${stoneName} is not find`;
}

const res5 = calcTotalPrice(stones, 'Діамант');
console.log('🚀 ~ res5:', res5);

const res6 = calcTotalPrice(stones, 'Щебінь');
console.log('🚀 ~ res6:', res6);

const res7 = calcTotalPrice(stones, 'Рубін');
console.log('🚀 ~ res7:', res7);
