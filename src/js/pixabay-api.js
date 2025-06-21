import axios from 'axios';

const API_KEY = '50822594-66f906f8174863719ea2394f1';
const BASE_URL = 'https://pixabay.com/api/';

let per_page = 15;

export async function getImagesByQuery(query, page = 1) {
  const response = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page,
    },
  });

  return response.data;
}
