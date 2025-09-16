/**
 * Метод filter
 *
 * - Поелементно перебирає оригінальний массив
 * - Повертає новий масив (з елементами або порожній)
 * - Додає в масив, що повертається, елементи, які задовольняють умову колбек-функції
 *    - якщо колбек повернув true елемент додається в масив, що повертається
 *    - якщо колбек повернув false елемент НЕ додається в масив, що повертається
 */

const numbers = [5, 10, 15, 20, 25, 15, 5, 20];

// const excludeDublicates = new Set(numbers);
// console.log('🚀 ~ excludeDublicates:', excludeDublicates);

const res = numbers.indexOf(15);
// console.log('🚀 ~ res:', res);

const filteredNumbers = numbers.filter((number, idx, arr) => {
  return numbers.indexOf(number) === idx;
  // return number >= 15;
  // return number !== 15;
});

// console.log('🚀 ~ filteredNumbers:', filteredNumbers);

/**
 * ---------------------------
 */
const allCars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

console.table(allCars);

/**
 * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
 * значення параметра threshold.
 */

const filterByPrice = (cars, threshold) => {
  return cars.filter((car, idx, arr) => {
    // console.log('car price', car.price);

    return car.price < threshold;
  });
};

// [ 22456, 24961, 22120 ]

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

/**
 * Нехай функція getCarsWithDiscount повертає масив автомобілів
 * властивість onSale яких true.
 */

const getCarsWithDiscount = cars => {
  return cars.filter((car, idx, arr) => {
    return car.onSale;
  });
};

// console.table(getCarsWithDiscount(allCars));

/**
 * Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
 * зі значенням параметра type.
 */

const getCarsWithType = (cars, type) => {
  return cars.filter((car, idx, arr) => {
    return car.type === type;
  });
};

// function filterArr(arr, callback, condition) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     const res = callback(element, i, arr, condition);

//     if (res == true) {
//       newArr.push(element);
//     } else {
//       continue;
//     }
//   }

//   return newArr;
// }

// function callback(element, index, array, ...args) {
//   return element.type === args[0];
// }

// const res1 = filterArr(allCars, callback, 'suv');
// console.table(res1);

// console.table(getCarsWithType(allCars, 'suv'));
// console.table(getCarsWithType(allCars, 'sedan'));
