/**
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector('.title');
console.log(titleEl.innerHTML);
console.log(titleEl.textContent);

// titleEl.textContent =
//   '<bold>Code example</bold> <code>innerHTML property</code>';

// titleEl.innerHTML = '<bold>Code example</bold> <code>innerHTML property</code>';

// titleEl.innerHTML = '';

titleEl.innerHTML +=
  '<bold>Code example</bold> <code>innerHTML property</code>';

const listEl = document.querySelector('.js-list');

const items = ['Home', 'About', 'Reviews', 'Contacts'];
let markup = '';

items.forEach(item => {
  const template = `<li class="list-item">
    <a href="">${item}</a>
  </li>`;

  markup += template;
  // listEl.innerHTML += template;
});

const markupItems = items
  .map(item => {
    return `<li class="list-item">
    <a href="">${item}</a>
  </li>`;
  })
  .join('');

console.log(markupItems);

// listEl.innerHTML = markup;
// listEl.innerHTML = markupItems;

/**
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */
// listEl.insertAdjacentHTML(
//   'beforeend',
//   `<li>
//     <a href="">Contacts</a>
//   </li>`
// );

const todos = ['Apple', 'Milk', 'Bananas', 'Drink coffe'];

function createListItems(items) {
  return items
    .map(item => {
      return `<li data-item="${item}">${item}</li>`;
    })
    .join(' ');
}

const todosMarkup = createListItems(todos);
console.log('🚀 ~ todosMarkup:', todosMarkup);

listEl.insertAdjacentHTML('beforeend', todosMarkup);

// ============== TODO ==============
const todoItems = [];
const todoRefs = {
  input: document.querySelector('.js-todo-input'),
  btn: document.querySelector('.js-todo-btn'),
  output: document.querySelector('.js-list'),
};

todoRefs.btn.onclick = addTodo;

function addTodo() {
  const todoValue = todoRefs.input.value;
  todoItems.push(todoValue);

  const markup = createTodo(todoValue);

  todoRefs.output.insertAdjacentHTML('beforeend', markup);
  // todoRefs.output.innerHTML += markup;
}

function createTodo(data) {
  return `<li>${data}</li>`;
}
