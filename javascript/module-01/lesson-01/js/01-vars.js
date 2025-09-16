/**
 * Змінні та типи даних
 *
 * - Оголошення змінних з let і const
 * - Перевизначення значення
 * - Іменування змінних
 * - Вибір між const і let
 * - Числа, рядки, булеві значення, null, undefined
 * - Оператор typeof
 */

let myFristVariable; // myFristVariable = undefined

myFristVariable = 5.1;

console.log(Number('5.10'));

console.log(Number('unicorn'));

myFristVariable = 'Mango';

// console.log(myFristVariable);

const mySecondVariable = 'Second value';

// mySecondVariable = 10;

let userClicks = null;

userClicks += 1;
userClicks += 1;
userClicks += 1;
userClicks += 1;
userClicks += 1;
userClicks += 1;
userClicks += 1;
userClicks += 1;

// console.log(userClicks);

function getUsernamesFromDB() {}

const userName = 'Poly';

// ====================
// const userLikes = document.querySelector('.likes').textContent;
// console.log('🚀 ~ userLikes:', userLikes);
// console.log(typeof userLikes);

// const userLikesNumber = Number.parseInt(userLikes);
// console.log('🚀 ~ userLikesNumber:', userLikesNumber);

// String('unicorn');
const value = 'unicorn';

// console.log('String length:', 'unicorn'.length);
// console.log('String length:', 'unicorn.  one'.at(10));

// console.log(value.length);
// console.log(value.toUpperCase());

const userNameValue = subscribeForm.elements.userName.value;
console.log('🚀 ~ userNameValue:', userNameValue);
console.log(typeof userNameValue);

const normalizedUserNameValue = userNameValue.trim();
console.log(normalizedUserNameValue);
console.log(normalizedUserNameValue.toLowerCase());

const isOnline = true;
const hasStrongPassword = false;

console.log(typeof isOnline);

const userAgreementValue = userAgreement.checked;
console.log('🚀 ~ userAgreementValue:', userAgreementValue);
