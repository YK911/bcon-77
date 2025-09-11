import 'bootstrap/dist/css/bootstrap.min.css';
import '../common.css';

/**
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

const list = document.querySelector('.todo-list');

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => {
//     console.log(response);
//     console.log(response.ok);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     // return response.text();
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     const firstTodoPart = data.slice(0, 10);
//     const markup = firstTodoPart
//       .map(todo => {
//         return `<li class="p-1 rounded d-flex justify-content-between align-items-center border border-1 border-primary mb-3" id="${
//           todo.id
//         }" data-user-id="${todo.userId}">
//         <p class="m-0  ${
//           todo.completed ? 'text-decoration-line-through' : ''
//         }">${todo.title}</p>
//         <input class="form-check-input" type="checkbox" name="" id="${
//           todo.id
//         }" ${todo.completed ? 'checked' : ''} />
//         </li>`;
//       })
//       .join('');

//     // console.log(markup);
//     list.insertAdjacentHTML('beforeend', markup);
//   })
//   .catch(error => {
//     console.log(error);
//     const h1 = document.createElement('h1');
//     h1.textContent = error;
//     document.body.append(h1);
//   });

// ! ПОМИЛКА НОВАЧКА: намагаємось зберегти дані в зовнішню змінну
// const todos = fetch().then(() => { return 5 })
//   console.log("🚀 ~ todos:", todos) // undefined

/**
 * Всередині функції запит, зовні обробка
 */
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchTodos = todosEndpoint => {
  return fetch(`${BASE_URL}${todosEndpoint}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
const renderTodos = todos => {
  const markup = todos
    .map(({ id, userId, completed, title }) => {
      return `<li class="p-1 rounded d-flex justify-content-between align-items-center border border-1 border-primary mb-3" id="${id}" data-user-id="${userId}">
        <p class="m-0  ${
          completed ? 'text-decoration-line-through' : ''
        }">${title}</p>
        <input class="form-check-input" type="checkbox" name="" id="${id}" ${
        completed ? 'checked' : ''
      } />
        </li>`;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
};
const handleError = error => {
  console.log(error);
};

fetchTodos('/todos').then(renderTodos).catch(handleError);

function fetchUsers(usersEndpoint) {
  return fetch(`${BASE_URL}${usersEndpoint}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
function renderUsers(users) {
  const markup = todos
    .map(todo => {
      return `<li class="p-1 rounded d-flex justify-content-between align-items-center border border-1 border-primary mb-3" id="${
        todo.id
      }" data-user-id="${todo.userId}">
        <p class="m-0  ${
          todo.completed ? 'text-decoration-line-through' : ''
        }">${todo.title}</p>
        <input class="form-check-input" type="checkbox" name="" id="${
          todo.id
        }" ${todo.completed ? 'checked' : ''} />
        </li>`;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}
// function handleError(error) {
//   console.log(error);
// }

// fetchUsers('/users').then(renderUsers).catch(handleError);
