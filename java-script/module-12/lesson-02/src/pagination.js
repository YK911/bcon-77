const queryParams = {
  pageSize: {
    sm: 4,
    md: 8,
    lg: 12,
  },
  page: 1,
};

let currentPage = 1;
const fetchNews = async (event = {}, q = 'song', page = 1) => {
  axios.get('https://newsapi.org/v2/everything', {
    params: {
      q,
      apiKey: 'f937548ce92c4cccab3e47b760e40b34',
      pageSize: 8,
      page: currentPage,
    },
  });

  currentPage += 1;
};

const btnEl = document.querySelector('.js-btn');
// btnEl.addEventListener('click', (event) => {
//   console.log(event);
//   fetchNews();
// });

btnEl.addEventListener('click', fetchNews);
