/**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

const globalScope = 10;
console.log('🚀 ~ globalScope:', globalScope);

// const functionScope = 30;

function foo() {
  // [[Scope]] = [ globalScope = 10 , window]
  // arguments = []
  const functionScope = 20;
  console.log('🚀 ~ functionScope:', functionScope); // 20
  console.log('🚀 ~ globalScope: in foo', globalScope); // 10

  for (let i = 0; i < 5; i += 1) {
    console.log(functionScope); // 20
    console.log(globalScope); // 10

    if (i === 2) {
      console.log(functionScope); // 20
      console.log(globalScope); // 10
    }
  }

  // return undefined
}

foo();

console.dir(foo);

// ❌ Помилка! Змінна a не доступна в цій області видимості
// console.log(functionScope);

for (let i = 0; i < 3; i += 1) {
  // ❌ Помилка! Змінна a не доступна в цій області видимості
  // console.log(functionScope);
}

function setChief(chiefName) {
  // chiefName = undefined

  return function (dishName) {
    console.log(`${chiefName} prepared ${dishName}`);
  };
}

// Function expression
const cookingDish = setChief('Mango');
console.dir(cookingDish);

cookingDish('Scramble eggs');

// function setHTMLElement(element) {
//   const htmlElement = document.querySelector(element);

//   if (htmlElement !== undefined || htmlElement !== null) {
//     return htmlElement;
//   }
//   // return function (cssClass) {
//   //   element.className.add(cssClass);
//   // }
// }

// const boxElement = setHTMLElement('div.box');

// function setCssClasses(htmlElement) {
//   const cssClasses = Array.from(arguments);
//   htmlElement.className.add(...cssClasses);
// }

// setCssClasses(boxElement);

function setHTMLElement(element) {
  const htmlElement = document.querySelector(element);

  if (htmlElement === undefined || htmlElement === null) {
    console.warn("Element does'n exist in HTML");
    return;
  }

  return function () {
    htmlElement.classList.add(...arguments);
  };
}

const setCssClasses = setHTMLElement('.box');
setCssClasses('circle', 'lightgreen', 'large');

const setContainerClasses = setHTMLElement('.container');
setContainerClasses('lightgreen', 'small');

const setWrapperClasses = setHTMLElement('.wraper');
setContainerClasses('lightgreen', 'small');
