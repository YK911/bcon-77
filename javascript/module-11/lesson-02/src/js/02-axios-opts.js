import axios from 'axios';
import '../common.css';

/**
 * Робимо рефакторинг авторизації запитів з ключами
 *
 * Як у Axios передавати search params та headers
 *
 * Для прикладу використовуємо https://thecatapi.com/
 *
 */

const API_KEY =
  'live_l04vokWs8d2RAPJS5bi3tkFB1jk75SXGVi8XKPG0BFZf5RWuSRjlK9YnvK3pgUEF';
const BASE_URL = 'https://api.thecatapi.com/v1';
const ENDPOINT = '/search';

// api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers['x-api-key'] = API_KEY;

function searchCatImages() {
  return axios.get('/images/search', {
    params: {
      limit: 10,
      breed_ids: 'beng',
    },
  });
}

function getCatBreed() {
  return axios.get('/breeds');
}

function fetchVotes() {
  return axios.get('/votes', {
    params: {
      limit: 10,
      order: 'DESC',
    },
  });
}

function voteById(imageId = '8ciqdpaO5') {
  return axios.post('/votes', { image_id: imageId, value: 1 });

  // return axios({
  //   method: 'POST',
  //   url: '/votes',
  //   data: {
  //     image_id: imageId,
  //     value: 1,
  //   },
  // });
  // const vote = {
  //   image_id: '8ciqdpaO5',
  //   value: 1,
  // };
  // const requestHeaders = new Headers({
  //   'x-api-key': API_KEY,
  // });
  // return fetch(`${BASE_URL}/votes`, {
  //   method: 'POST',
  //   body: JSON.stringify(vote),
  //   headers: requestHeaders,
  // });
}

// searchCatImages()
//   .then(({ data }) => {
//     console.log(data);
//   })
//   .catch(() => {});

// getCatBreed()
//   .then(({ data }) => {
//     data.map(breedInfo => {
//       console.log(breedInfo.name);
//     });
//   })
//   .catch(() => {});

// fetchVotes()
//   .then(({ data }) => {
//     console.log('🚀 ~ data:', data);
//   })
//   .catch(() => {});

voteById().then(({ data }) => {
  console.log(data);
});
