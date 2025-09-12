import axios from 'axios';
import '../common.css';

/**
 * https://thecatapi.com/
 *
 * 1) Створити сторінку яка при завантаженні робить запит на бекенд і оримує
 *  всі доступні breeds. https://api.thecatapi.com/v1/breeds
 *
 * 2) В інтерфейсі є форма пошуку з прив'язаним datalist з завантаженими breeds.
 *
 * 3) Користувач в формі вводить або обирає необхідний breed і при сабміті форми
 *  виконується GET запит за зображенням.
 *
 * 4) Після запиту під формою відображається картка з зображенням.
 *
 * 5) Під час запиту під формую відображається loader
 */

const breedsListEl = document.querySelector('#breeds-list');
const formEl = document.querySelector('#search-form');
const breedInputEl = document.querySelector('#breed-input');
const catCardEl = document.querySelector('#cat-card');
const loaderEl = document.querySelector('#loader');

formEl.addEventListener('submit', handleFormSubmit);

function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds');
}

function populateBreedsList() {
  breedsListEl.innerHTML = '';
  loaderEl.classList.remove('hidden');

  fetchBreeds()
    .then(({ data }) => {
      data.forEach(({ name, id }) => {
        const optionEl = document.createElement('option');
        optionEl.value = name;
        optionEl.dataset.id = id;

        breedsListEl.appendChild(optionEl);
      });
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loaderEl.classList.add('hidden');
    });
}

function handleFormSubmit(event) {
  event.preventDefault();
  catCardEl.innerHTML = '';

  // const selectedBreed = Array.from(breedsListEl.options).find();
  const selectedBreed = [...breedsListEl.options].find(
    opt => opt.value === breedInputEl.value
  );

  if (selectedBreed === undefined) {
    alert('Оберіть існуючу породу котика!');
    event.currentTarget.reset();
    return;
  }

  const breedId = selectedBreed?.dataset?.id;
  loaderEl.classList.remove('hidden');

  axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(({ data }) => {
      if (data.length > 0) {
        const imgUrl = data[0].url;
        const title = breedInputEl.value;

        catCardEl.innerHTML = `
            <div class="card">
              <img class="card-image" src="${imgUrl}" alt="${title}" />
              <div class="card-body">
                <p class="card-title">${title}</p>
              </div>
            </div>
        `;
      } else {
        catCardEl.innerHTML = `<p class="error-text">Зображення не знайдено</p>`;
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loaderEl.classList.add('hidden');
    });
}

populateBreedsList();
