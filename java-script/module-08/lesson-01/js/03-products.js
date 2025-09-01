/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки (./assets/product-card.jpg)
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна (./assets/modal.jpg)
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

const products = [
  {
    id: 1,
    img: 'https://content2.rozetka.com.ua/goods/images/big/546272637.jpg',
    name: 'Dell SE2425HM',
    price: 4348,
    description:
      'The 100Hz refresh rate provides less flicker, smoother scrolling, and smoother motion.',
  },
  {
    id: 2,
    img: 'https://content2.rozetka.com.ua/goods/images/big/575063470.jpg',
    name: 'Samsung Odyssey G50D',
    price: 10799,
    description:
      'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://content2.rozetka.com.ua/goods/images/big/483286979.jpg',
    name: 'Asus VG249QL3A',
    price: 5899,
    description:
      'The TUF Gaming VG249QL3A gaming monitor features a 23.8-inch Fast IPS panel.',
  },
  {
    id: 4,
    img: 'https://content2.rozetka.com.ua/goods/images/big/419088411.jpg',
    name: 'MSI MAG 274QRF',
    price: 10899,
    description:
      'The MAG 274QRF QD E2 features a WQHD panel with a resolution of 2560x1440.',
  },
];

const container = document.querySelector('.products');
const cardsMarkup = products.map(product => createCardMarkup(product)).join('');

container.innerHTML = cardsMarkup;

container.addEventListener('click', handleCardClick);

function createCardMarkup(card, isModal = false) {
  return `<li class="${isModal ? 'mw-100' : 'col-6'}">
        <div class="card" id="${card.id}">
          <img class="card-img-top object-fit-contain p-3" src="${
            card.img
          }" alt="${card.name}" height="300" />
          <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            ${isModal ? `<p class="card-text">${card.description}</p>` : ''}
            <p class="display-6">Price: ${card.price}</p>
          </div>
        </div>
      </li>`;
}

function handleCardClick(event) {
  const targetEl = event.target;
  const cardEl = targetEl.closest('.card');

  // Не попали курсором в карточку, припиняємо подальшу обробку
  if (!cardEl) {
    console.log('Element is not a card');
    return;
  }

  const currentCardId = Number(cardEl.id);
  const currentProduct = products.find(product => product.id === currentCardId);
  const cardMarkup = createCardMarkup(currentProduct, true);

  basicLightbox.create(cardMarkup).show();
}
