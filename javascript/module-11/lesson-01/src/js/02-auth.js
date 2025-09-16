import { fetchCats } from './service-api';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../common.css';

/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://thecatapi.com/
 */

// const API_KEY =
//   'live_l04vokWs8d2RAPJS5bi3tkFB1jk75SXGVi8XKPG0BFZf5RWuSRjlK9YnvK3pgUEF';
// const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

// function fetchCats(options) {
//   const queryOptions = {
//     // api_key: API_KEY,
//     ...options,
//   };
//   const searchParams = new URLSearchParams(
//     'limit=5&breed_ids=beng&api_key=live_l04vokWs8d2RAPJS5bi3tkFB1jk75SXGVi8XKPG0BFZf5RWuSRjlK9YnvK3pgUEF'
//   ).toString();
//   const searchParams = new URLSearchParams(queryOptions);

//   const headersOptions = {
//     Accept: 'application/json',
//     'x-api-key': API_KEY,
//   };
//   const headers = new Headers(headersOptions);

//   console.log(searchParams);

//   const path = `${BASE_URL}?${searchParams}`;
//   const fetchOptions = {
//     headers,
//   };

//   return fetch(path, fetchOptions).then(response => {
//     if (!response.ok) {
//       throw new Error('Some error');
//     }

//     return response.json();
//   });
// }

// fetchCats({ limit: 5, breedIds: 'beng' })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const catsOptions = { limit: 5, breedIds: 'beng' };

fetchCats(catsOptions)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
