/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

const animal = {
  legs: 4,

  healing(bodyPart, prop) {
    this[bodyPart] = prop;
  },
};

const dog = Object.create(animal);
dog.registration = 'Ukraine';
dog.breed = 'pug';

// const dog1 = new Dog({ type: 'dog', registration: 'Ukraine', breed: 'pug' });
// const cat1 = new Cat({ type: 'cat', registration: 'Ukraine', breed: 'pug' });

const cat = Object.create(animal);
cat.registration = 'Egypt';
cat.breed = 'sphynx';

const mangoDog = Object.create(dog);
mangoDog.nickName = 'Mango';

mangoDog.legs = 3;
mangoDog.healing('legs', 4);

const peteCat = Object.create(cat);
console.log('🚀 ~ peteCat:', peteCat);

// const dog = {};

// console.log(dog[[Prototype]]);

// dog.__proto__ = animal;

console.log('🚀 ~ dog:', mangoDog);
console.log('🚀 ~ dog:', mangoDog.legs);
// console.log(dog.nickName);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty('nickName'));
// console.log(dog.hasOwnProperty('legs'));

for (const key in mangoDog) {
  if (mangoDog.hasOwnProperty(key)) {
    console.log(mangoDog[key]); // "name"
  }
}

/**
 * ----------------------------------------
 */
const objC = { c: 'objC prop' };

const objB = Object.create(objC);
objB.b = 'objB prop';

const objA = Object.create(objB);
objA.a = 'objA prop';

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.a);

// console.log(objA.hasOwnProperty('b'));
// console.log(objA.b);

// console.log(objA.hasOwnProperty('c'));
// console.log(objA.c);

// console.log(objA.hasOwnProperty('x'));
// console.log(objA.x);
