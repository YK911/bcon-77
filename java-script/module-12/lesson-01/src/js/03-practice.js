import axios from "axios";
import "../common.css";

/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 * Переписуємо на async/await
 */
axios.defaults.baseURL = "https://pokeapi.co/api/v2";

const fetchPokemon = async (pokemonId) => {
  const response = await axios.get(`/pokemon/${pokemonId}`);
  return response.data;
};

const onSearch = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value.toLowerCase();

  loader.classList.add("is-open");

  try {
    const pokemonInfo = await fetchPokemon(searchQuery);
    renderPokemonCard(pokemonInfo);
  } catch (error) {
    console.log(error);
    onFetchError(error);
  }

  form.reset();
  loader.classList.remove("is-open");
};

const renderPokemonCard = ({ name, sprites, weight, height, abilities }) => {
  const abilityListItems = abilities
    .map((item) => `<li class="list-group-item">${item.ability.name}</li>`)
    .join("");

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
};

const onFetchError = (error) => {
  alert("Упс, щось пішло не так і ми не знайшли вашого покемона!");
};

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector(".search-form");
const loader = document.querySelector(".loader-wrapper");

searchForm.addEventListener("submit", onSearch);
