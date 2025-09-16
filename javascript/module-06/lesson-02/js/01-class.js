/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

const carMake = 'Tesla';
const carModel = 'Model 3';
const carMiles = 100_000;

class Car {
  static description = 'This is class Car Model';

  static constructorCount = 0;
  static showCounter() {
    console.log(Car.constructorCount);
  }

  #make;
  #model;
  #price;
  #year;

  constructor(params = {}) {
    Car.constructorCount += 1;
    console.log('Constructor works');
    // constructor({ make, model, miles, activateAutopilot } = {}) {
    // console.log('🚀 ~ Car ~ constructor ~ make:', make);
    // console.log('🚀 ~ Car ~ constructor ~ modal:', model);
    // console.log('🚀 ~ Car ~ constructor ~ miles:', miles);
    // console.log(
    //   '🚀 ~ Car ~ constructor ~ activateAutopilot:',
    //   activateAutopilot
    // );

    this.#make = params.make;
    this.#model = params.model;
    this.#year = params.year;
    this.#price = params.price;

    this.miles = params.miles;
    this.activateAutopilot = params.activateAutopilot;
  }

  get price() {
    console.log('Getter works');

    return this.#price;
  }

  set price(newPrice) {
    console.log('Setter works');
    // if (Number.parseInt(newPrice) > Number.parseInt(this.#price)) {
    //   console.warn('⚠️ Incorrect price');
    //   return;
    // }

    this.#price = newPrice;
    // console.log('Price was updated');
  }

  showCar() {
    console.log(`${this.#make} ${this.#model}`);
  }
}

const bmw = new Car({
  make: 'BMW',
  model: 'X3',
  miles: 0,
  year: 2014,
  activateAutopilot: false,
  price: '30000 $',
}); // {}

console.log(bmw.price);

bmw.price = '55000 $';

console.log(bmw.price);

console.log(bmw.description);
// console.log(bmw.showCounter());
console.log(Car.description);
Car.showCounter();
// bmw.showCar();

// console.log(bmw.make);
// console.log(bmw.model);

// bmw.year = 2024;
console.log('🚀 ~ bmw:', bmw);

// const toyota = new Car({
//   make: 'Toyota',
//   activateAutopilot: false,
//   model: 'BRZ',
//   miles: 10,
//   year: 2004,
// }); // {}
// console.log('🚀 ~ toyota:', toyota);
// toyota.showCar();

// const mazda = new Car({
//   miles: 10_000,
//   make: 'Mazda',
//   model: 'MX-5',
//   activateAutopilot: true,
//   year: 2024,
// }); // {}
// console.log('🚀 ~ mazda:', mazda);
// mazda.showCar();

const car = {
  make: 'Tesla',
  model: 'Model 3',
  miles: 100_000,
  activateAutopilot: false,
};

const car1 = {
  make: 'Tesla',
  model: 'Model 3',
  miles: 100_000,
  activateAutopilot: false,
};

const car2 = {
  make: 'Tesla',
  model: 'Model 3',
  miles: 100_000,
  activateAutopilot: false,
};
