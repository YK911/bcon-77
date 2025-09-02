/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: 'Kate',
    age: 10,
  },
  {
    name: 'Alex',
    age: 12,
  },
  {
    name: 'Mark',
    age: 14,
  },
];

/**
 * Без деструктуризації
 */
const names = [];

// for (const user of users) {
//   names.push(user.name);
// }

// console.log(names);

/**
 * З деструктуризацією
 */
for (const { name, age } of users) {
  // console.log(age);

  names.push(name);
}

console.log(names);

const formEl = document.querySelector('.js-form');
formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const formData = new FormData(form);
  // console.log('🚀  ~ formData:', formData.get('email'));

  const obj = {};
  for (const [key, value] of formData) {
    obj[key] = value;
  }

  console.log(obj);

  form.reset();
}

const Types = {
  btn: 'BUTTON',
  anchor: 'A',
  p: 'P',
};

const clickData = {};

// document.addEventListener('click', event => {
//   event.preventDefault();
//   const targetEl = event.target;
//   const type = targetEl.dataset.type;

//   if (targetEl.nodeName === Types[type]) {
//     if (clickData[type] === undefined) {
//       clickData[type] = 0;
//     }
//     clickData[type] = clickData[type] + 1;
//   }

//   console.log(clickData);
// });
