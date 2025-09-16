import axios from 'axios';

//? Функція запиту за статтями
export async function fetchArticles(q, page) {
  try {
    const requestOptions = {
      params: {
        q,
        page,
        pageSize,
        language: 'en',
        apiKey: import.meta.env.VITE_SECRET_KEY,
      },
    };
    const response = await axios.get('/everything', requestOptions);

    if (response.data.status !== 'ok') {
      throw new Error('No results');
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return { articles: [] };
  }
}
