import axios from 'axios';
import '../common.css';

/**
 * Додаємо та використовуємо бібліотеку https://axios-http.com/
 * Робимо рефакторинг
 * - Імпорт
 * - Запит
 * - Метод axios.get
 * - Обробка відповіді та помилки
 */

const list = document.querySelector('.todo-list');

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     // Рендер елементів в DOM (map і insertAdjacentHTML)
//   })
//   .catch(error => {
//     console.log(error);
//   });

/**
 * Всередині функції запит, зовні обробка
 */
// const fetchTodos = () => {
//   return axios({
//     method: 'GET',
//     url: 'https://jsonplaceholder.typicode.com/todos/10001',
//   });
// };
const selectEl = document.querySelector('.js-select');
// const selectedValue = +selectEl.selectedOptions[0].value;
const selectedValue = Number(selectEl.selectedOptions[0].value);

const fetchTodos = limit => {
  const options = {
    params: {
      _limit: limit,
      // _sort: 'title',
    },
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  };

  return axios.get('https://jsonplaceholder.typicode.com/todos', options);
};
const renderTodos = ({ data }) => {
  console.log(data);
};
const handleError = error => {
  console.log(error.message);
};

fetchTodos(selectedValue).then(renderTodos).catch(handleError);

selectEl.addEventListener('change', event => {
  const selectedValue = +event.target.selectedOptions[0].value;
  // console.log('🚀 ~ selectedValue:', selectedValue);
  fetchTodos(selectedValue).then(renderTodos).catch(handleError);
});
