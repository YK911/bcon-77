/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку
 */

const cars = [
  {
    id: 1,
    car: 'Audi',
    model: 'A6',
    price: 30000,
    img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg',
  },
  {
    id: 2,
    car: 'Honda',
    model: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    id: 3,
    car: 'Audi',
    model: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    id: 4,
    car: 'BMW',
    model: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 5,
    car: 'Honda',
    model: 'Accord',
    price: 20000,
    number: '+380000000000',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 6,
    car: 'Volvo',
    model: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];

const elements = {
  form: document.querySelector('.js-form'),
  resetBtn: document.querySelector('.js-reset'),
  container: document.querySelector('.js-list'),
};

elements.container.innerHTML = makeCarsMarkup(cars);
// console.log('🚀 ~ carsMarkup:', carsMarkup);

elements.form.addEventListener('submit', handleFormSubmit);
elements.resetBtn.addEventListener('click', handleResetBtn);

function handleFormSubmit(event) {
  event.preventDefault();

  const formEl = event.target;

  const userQuery = formEl.elements.query.value.toLowerCase();
  // console.log('🚀 ~ handleFormSubmit ~ userQuery:', userQuery);
  const userType = formEl.elements.options.selectedOptions[0].value;
  // console.log('🚀 ~ handleFormSubmit ~ userType:', userType);

  const filteredCars = cars.filter(auto => {
    const value = auto[userType].toLowerCase();
    return value === userQuery;
  });

  if (filteredCars.length === 0) {
    console.log('No cars with this search query');
  }

  elements.container.innerHTML = makeCarsMarkup(filteredCars);

  formEl.reset();
}
function handleResetBtn(event) {
  elements.container.innerHTML = makeCarsMarkup(cars);
}

function createCarMarkup(auto) {
  return `
  <li class="col-6 col-lg-4" id="${auto.id}">
    <div class="card">
      <img class="card-img-top" src="${auto.img}"  alt="${auto.car} ${auto.model}">
      <div class="card-body">
        <h5 class="card-title">${auto.car}</h5>
        <p class="card-text">${auto.model}</p>
        <a href="#" class="btn btn-primary">${auto.price}</a>
      </div>
    </div>
  </li>`;
}
function makeCarsMarkup(cars = []) {
  return cars.map(car => createCarMarkup(car)).join('');
}
