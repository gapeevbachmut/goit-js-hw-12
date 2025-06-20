// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query, page).Ця функція повинна приймати два параметри query(пошукове слово, яке є рядком) та page(номер сторінки, яка є числом), здійснювати HTTP - запит і повертати значення властивості data з отриманої відповіді.

import axios from 'axios';

const API_KEY = '50822594-66f906f8174863719ea2394f1';
const BASE_URL = 'https://pixabay.com/api/';

//  змінна параметрів
// const params = new URLSearchParams({
//   key: API_KEY,
//   q: query,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
// });

//  дефолтна адреса
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common["Authorization"] = "-";

// query - те що вводить користувач

export async function getImagesByQuery(query, page) {
  const response = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page,
      page,
    },
  });

  // повертаємо тільки те, що потрібно — об'єкт із даними
  return response.data;
}

// додавання параметрів на кількість карток та сторінок

// export let page = 1;
export let per_page = 15;

//   запит на сервер

export async function moreCards(query, page = 1) {
  const response = await axios(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page,
      page,
    },
  });

  //
  //
  // const params = new URLSearchParams({
  //   key: API_KEY,
  //   per_page,
  //   page,
  // });

  // const response = await axios(`https://pixabay.com/api/?${params}`);

  console.log(response.data.hits); //                  -                      !!!!!

  // const response = await axios(BASE_URL, {
  //   params: {
  //     // key: API_KEY,           //           ???
  //     // q: query,
  //     per_page,
  //     page,
  //   },
  // });
  return response.data;
}
