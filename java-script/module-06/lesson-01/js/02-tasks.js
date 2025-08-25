function foo() {
  console.log('foo -> this', this);
}

// foo(); // Який this ???

/**
 * -------------------------
 */
const book = {
  title: 'React for beginners',

  showThis() {
    console.log('showThis -> this', this);
  },

  showTitle() {
    console.log('showTitle -> this.title', this.title);
  },
};

// book.showThis(); // Який this ???

const outerShowThis = book.showThis;
// outerShowThis(); // Який this ???

const outerShowTitle = book.showTitle;
// outerShowTitle(); // Який this ???

/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */
const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Emerald light', price: 900, quantity: 10 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],

  calcTotalPrice(stoneName) {
    // stoneName = 'Emerald'
    // this = chopShop
    // arguments = [stoneName]
    const findStone = this.stones.find((stone, idx, arr) => {
      return stone.name === stoneName;
    });

    if (findStone === undefined) {
      return `${stoneName} is not find`;
    }

    return findStone.price * findStone.quantity;
  },

  calcDiscount(stoneName, discount) {
    const findStone = this.stones.filter(stone => {
      return stone.name.includes(stoneName);
    });

    // findStone = [];

    if (findStone.length === 0) {
      return `${stoneName} is not find`;
    }

    const stonesWithDiscount = findStone.map(stone => {
      return {
        ...stone,
        price: stone.price * (1 - discount),
      };
    });

    return stonesWithDiscount;
  },
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600
console.log(chopShop.calcTotalPrice('Nefrit')); // ❌

const stonesWithDiscount = chopShop.calcDiscount('Emerald', 0.2);
console.table(stonesWithDiscount);

const jewelryShop = {};
jewelryShop.stones = stonesWithDiscount;
console.log(jewelryShop);
jewelryShop.calcJewelryPrice = chopShop.calcTotalPrice;

const emeraldPrice = jewelryShop.calcJewelryPrice('Emerald');
console.log('🚀 ~ emeraldPrice:', emeraldPrice);
