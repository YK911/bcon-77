const fetchA = fetch(
  'https://newsapi.org/v2/everything?q=tesla&from=2025-08-09&sortBy=publishedAt&apiKey=f937548ce92c4cccab3e47b760e40b34'
);
const fetchB = fetch('https://pokeapi.co/api/v1/pokemon/ditto');
const fetchC = fetch(
  'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=cfd779502f2ddadcd7038f6b02359e66'
);

Promise.allSettled([fetchA, fetchB, fetchC])
  .then(result => {
    // console.log(result);
    return result.filter(({ status, value }) => {
      if (status === 'fulfilled') {
        return value;
      }
    });
  })
  .then(data => {
    const res = data.map(({ value }) => value.json());

    return Promise.all(res);
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
