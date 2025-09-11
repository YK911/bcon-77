import { API_KEY, BASE_URL } from './config';

export function fetchCats(options) {
  const queryOptions = {
    ...options,
  };
  const searchParams = new URLSearchParams(queryOptions);

  const headersOptions = {
    Accept: 'application/json',
    'x-api-key': API_KEY,
  };
  const headers = new Headers(headersOptions);

  const path = `${BASE_URL}?${searchParams}`;
  const fetchOptions = {
    headers,
  };

  return fetch(path, fetchOptions).then(response => {
    if (!response.ok) {
      throw new Error('Some error');
    }

    return response.json();
  });
}

export function fetchDogs(options) {}
