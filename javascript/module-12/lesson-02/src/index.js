import axios from 'axios';

import { formEl, articlesContainerEl, loadMoreBtn, loaderEl } from './refs';
import './config';

import './common.css';

/**
 * Отримуємо ключ https://newsapi.org/
 * Запити робитимемо на http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 *
 * Пагінація: номер групи та кількість елементів групи
 * - Завантажуємо статті при сабміті форми ✅
 * - Завантажуємо статті при натисканні на кнопку «Завантажити ще» ✅
 * - Оновлюємо групу в параметрах запиту ✅
 * - Рендерим статті ✅
 * - Скидання значення при пошуку за новим критерієм ✅
 * - Показуємо лоадер поки йде запит ✅
 */

// ? Глобальні змінні для управління запитом
let searchQuery = ''; // Поточне значення пошукового запиту
let currentPage = 1; // Поточна сторінка
const pageSize = 6; // Кількість елементів за один запит
let totalPages = 0;

formEl.addEventListener('submit', handleFormSubmit);
loadMoreBtn.addEventListener('click', handleLoadMoreClick);

//? Функція обробник форми запиту
async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;

  searchQuery = form.elements.query.value.trim();

  if (!searchQuery) {
    console.warn('Fill input with text');

    return;
  }

  //TODO: відображаємо процес завантаження
  toggleElVisibility(loaderEl);

  //? Очищаємо попередні результати пошуку
  currentPage = 1;
  totalPages = 0;
  articlesContainerEl.innerHTML = '';

  //? Отримання результатів від бекенду
  const { articles, totalResults } = await fetchArticles(
    searchQuery,
    currentPage
  );

  totalPages = Math.ceil(totalResults / pageSize);
  renderArticles(articles);
  toggleElVisibility(loadMoreBtn);
  //TODO: приховуємо лоадер
  toggleElVisibility(loaderEl);

  //? Очищаємо рядок із пошуковим запитом
  form.reset();
}

//? Функція обробник завантаження додаткової інформації
async function handleLoadMoreClick() {
  currentPage += 1;

  //? Перевірка на кінець колекції
  if (currentPage > totalPages) {
    toggleElVisibility(loadMoreBtn);
    console.log('End of collection');
    return;
  }

  toggleElVisibility(loaderEl);
  const { articles } = await fetchArticles(searchQuery, currentPage);

  //? Перевірка на помилку від бекенду
  if (!articles || articles.length === 0) {
    toggleElVisibility(loadMoreBtn);
    console.warn('Something went wrong');
    return;
  }

  renderArticles(articles);
  toggleElVisibility(loaderEl);
}

//? Функція запиту за статтями
async function fetchArticles(q, page) {
  try {
    const requestOptions = {
      params: {
        q,
        page,
        pageSize,
        language: 'en',
        apiKey: import.meta.env.VITE_SECRET_KEY,
      },
    };
    const response = await axios.get('/everything', requestOptions);

    if (response.data.status !== 'ok') {
      throw new Error('No results');
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return { articles: [] };
  }
}

//? Відображення статей в UI
function renderArticles(articles = []) {
  const markup = articles
    .map(({ url, urlToImage, author, title, description }) => {
      return `
      <li>
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          <article>
            <img src="${urlToImage}" alt="${title}" width="480" height="250" />
            <h2>${title}</h2>
            <p>Posted by: ${author || 'Unknown'}</p>
            <p>${description}</p>
          </article>
        </a>
      </li>
      `;
    })
    .join('');

  articlesContainerEl.insertAdjacentHTML('beforeend', markup);
}

function toggleElVisibility(selector) {
  if (selector.classList.contains('hidden')) {
    selector.classList.remove('hidden');
  } else {
    selector.classList.add('hidden');
  }
}
