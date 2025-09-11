import 'bootstrap/dist/css/bootstrap.min.css';
import '../common.css';

/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 */

const BASE_URL = 'https://pokeapi.co/api/v2';
const cardContainer = document.querySelector('.card-container');
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.elements.searchQuery.value.toLowerCase();

  fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function fetchPokemon(pokemonId) {
  const params = new URLSearchParams();
  const headers = new Headers();
  const url = `${BASE_URL}/pokemon/${pokemonId}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.message);
    }

    return response.json();
  });
}

function renderPokemonCard({ name, sprites, weight, height, abilities }) {
  const abilityListItems = abilities
    .map(item => `<li class="list-group-item">${item.ability.name}</li>`)
    .join('');

  const markup = `<div class="pokemon-card">
  <img src="${sprites.front_default}" class="pokemon-image" alt="${name}" >

  <div class="pokemon-info">
    <h2 class="pokemon-title">${name}</h2>
    <p><span class="bold-text">Вага:</span> ${weight}</p>
    <p><span class="bold-text">Зростання:</span> ${height}</p>
    <h5 class="abilities-title">Уміння</h5>
    <ul class="abilities-list">${abilityListItems}</ul>
  </div>
</div>`;

  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Упс, щось пішло не так і ми не знайшли вашого покемона!');
}
