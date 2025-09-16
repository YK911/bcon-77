/**
 * Метод find
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */

const numbers = [5, 10, 15, 20, 25, 150];

const number = numbers.find(checkNumber);

function checkNumber(number, idx, arr) {
  return number === 150 && number > 30;
}
// console.log('🚀 ~ number:', number);

/**
 * -----------------------------
 */
const allCars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
  { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
  { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
  { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
  { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
  { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
  { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
];
console.table(allCars);
/**
 * Шукаємо машину за моделлю
 */
const getCarByModel = (cars, ...args) => {
  return cars.find((car, idx, arr) => {
    if (args.length === 1) {
      return car.model === args[0];
    }

    return car.model === args[0] && car.make === args[1];
  });
};

// console.log(getCarByModel(allCars, 'F-150', 'Ford'));
// console.log(getCarByModel(allCars, 'CX-9'));
// console.log(getCarByModel(allCars, 'Cayenne'));

/**
 * Шукаємо машину за типом кузова
 */
const getCarByType = (cars, type) => cars.find(car => car.type === type);

// console.log(getCarByType(allCars, 'sedan'));
// console.log(getCarByType(allCars, 'truck'));
// console.log(getCarByType(allCars, 'tank'));
