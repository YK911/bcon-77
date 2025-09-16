/**
 * Блокова область видимості змінних
 */

// debugger;

{
  const c = 15;
}

if (true) {
  const a = 5;
  console.log('🚀 ~ c:', c);
}

if (true) {
  const b = 10;
  console.log('🚀 ~ b:', b);
  // console.log('🚀 ~ a:', a);
}

// console.log('🚀 ~ c:', c);
