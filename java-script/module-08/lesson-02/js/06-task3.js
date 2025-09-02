/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({ c, d, a, b } = {}) {
  const perimeter = a + b + c + d;
  return perimeter;
}

const perimetr = {
  c: 10,
  a: 10,
  b: 15,
  d: 15,
};

const perimeter = calculateHousePerimeter(perimetr);
console.log(`Периметр будинку: ${perimeter}`);
