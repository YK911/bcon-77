const API_KEY = 'f937548ce92c4cccab3e47b760e40b34';
const COUNTRY = 'us';
const path = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;

fetch(path)
  .then(response => {
    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    return response.json();
  })
  .then(({ articles }) => {
    const articlesMarkup = articles.map(createArticleMarkup).join('');
    renderArticles('.js-articles', articlesMarkup);
  })
  .catch(error => {
    console.error(error.message);
  });

function createArticleMarkup({
  source: { name },
  title,
  description,
  url,
  urlToImage,
  publishedAt,
} = {}) {
  return `
  <div class="grid-item">
    <div class="card shadow-sm">
      <img
        src="${urlToImage}"
        alt=""
      />
      <div class="card-body">
        <span class="badge text-bg-primary">${name}</span>
        <h2 class="h5 mt-4">${title}</h2>
        <p class="card-text">${description}</p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <a
            class="btn btn-sm btn-outline-primary"
            href="${url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            View more
          </a>

          <small class="text-body-secondary">${formatData(publishedAt)}</small>
        </div>
      </div>
    </div>
  </div>`;
}

function renderArticles(selector = '', markup = '') {
  try {
    const elem = document.querySelector(selector);
    elem.insertAdjacentHTML('beforeend', markup);

    new Masonry(elem, {
      itemSelector: '.grid-item',
      columnWidth: 300,
      percentPosition: true,
      gutter: 10,
      stagger: 30,
    });
  } catch (error) {
    throw new Error('Element not found');
  }
}

function formatData(date = '', splitter = '-') {
  const rawDate = new Date(date);
  const day = String(rawDate.getDay()).padStart(2, 0);
  const mounth = String(rawDate.getMonth()).padStart(2, 0);
  const year = String(rawDate.getFullYear());
  return `${day}${splitter}${mounth}${splitter}${year}`;
}
