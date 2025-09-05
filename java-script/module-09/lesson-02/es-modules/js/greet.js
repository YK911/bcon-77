import { user as userInfo } from './user.js';

function greeting({ name, age, isOnline }) {
  return `Hello, my name is ${name}😉. I'm ${age} y.o.`;
}

// console.log(userInfo);

export { greeting, userInfo };

// const res1 = greeting(user);
// console.log('🚀 ~ res1:', res1);

// alert('Module load');
