/**
 * Напиши клас Storage який створює об'єкти для керування складом товарів.
 * При виклику отримуватиме один аргумент - початковий масив товарів і
 * записуватиме його властивість items.
 *
 * Додай методи класу:
 * - getItems() - повертає масив товарів.
 * - addItem(item) - отримує новий товар і додає його до поточних.
 * - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */
class Storage {
  // #items;

  constructor(items) {
    this.items = items; // []
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter(currentItem => currentItem !== item);

    // this.items = filteredItems;

    // const filteredItems = [];
    // for (let i = 0; i < this.items.length; i++) {
    //   const currentItem = this.items[i];

    //   if (currentItem !== item) {
    //     filteredItems.push(currentItem);
    //   }
    // }

    // this.items = filteredItems;
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// storage.items = [];
// console.log('🚀 ~ storage:', storage);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// storage.removeItem('🍌');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
