/**
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// console.table(courses)
// console.log(courses[1]);
courses[1] = "SCSS"
// console.table(courses)
// console.log(courses.length);
// courses.length = 10
// courses[9] = "SQL"
// console.log(courses)
const lastElemIndex = courses.length - 1;
const lastElem = courses[lastElemIndex]
// console.log("🚀 ~ lastElem:", lastElem)

const course = "JavaScript is awesome"
// console.log(course[1]);
// console.log("JavaScript"[1]);
// const lastSymbolIndex = course.length - 1
// console.log(course[lastSymbolIndex]);


const listItems = list.children;

console.log(listItems[0].textContent);

listItems[0].textContent = "Item-1";

listItems[2].textContent += " success"

const lastChildIndex = listItems.length - 1

console.log(lastChildIndex);
console.log(listItems[lastChildIndex]);
