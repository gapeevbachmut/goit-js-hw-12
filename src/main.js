// У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді та логіку прокручування сторінки (scroll) робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  getImagesByQuery, //  запит на сервер
} from './js/pixabay-api.js';

import {
  createGallery, // створення розмітки
  clearGallery, // видалення розмітки
  showLoader, // показати завантаження
  hideLoader, // приховати завантаження
  more,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

let page = 1;
let per_page = 15;

const form = document.querySelector('.form');
const input = document.querySelector('input');

form.addEventListener('submit', handleSubmit);

more.addEventListener('click', moreClick);

let myQuery;

//                                              сабміт
async function handleSubmit(event) {
  event.preventDefault();

  const request = input.value.toLocaleLowerCase().trim();
  myQuery = request;

  if (!request) {
    iziToast.error({
      title: '❌ Error',
      message: 'Будь ласка, введіть запит!!!',
      position: 'topRight',
    });
    return;
  }
  page = 1; // обнуляю нумерацію сторінок при новому сабміті
  clearGallery(); //
  showLoader(); // показати завантаження

  try {
    const data = await getImagesByQuery(request, page);
    console.log('sub', page);

    if (data.hits.length === 0) {
      //якщо пустий масив
      iziToast.error({
        title: '❌ Error',
        message:
          'Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Спробуйте ще раз!',
        position: 'topRight',
      });
      hideLoadMoreButton(); // якщо нічого не знайшли, кнопку теж сховати
      return;
    }

    createGallery(data.hits);

    // перевіряємо, якщо результатом запиту може бути і одне зображення
    if (data.hits.length < per_page) {
      hideLoadMoreButton(); // ховаємо кнопку
    } else {
      showLoadMoreButton(); //  - показати кнопку
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Помилка',
      message: 'Щось пішло не так. Спробуйте ще раз.',
      position: 'topRight',
    });
  } finally {
    hideLoader(); // приховати завантаження

    form.reset(); // очистити пр новому інпуті
  }
}

//                                  клік
async function moreClick(event) {
  event.preventDefault();

  page += 1;
  more.disabled = true; // кнопка не активна
  showLoader(); // показати завантаження

  try {
    const moreImages = await getImagesByQuery(myQuery, page);

    console.log(myQuery);

    createGallery(moreImages.hits); // відмальовуємо розмітку

    const totalPages = Math.ceil(moreImages.totalHits / per_page);
    if (page >= totalPages) {
      hideLoadMoreButton();

      iziToast.show({
        title: 'Info: ',
        message: 'Вибачте, але ви дійшли до кінця результатів пошуку',
        position: 'topRight',
      });
    } else {
      more.disabled = false; //активна тільки якщо ще є сторінки - ???
    }

    console.log(moreImages);
    console.log(page);
    console.log(moreImages.totalHits);

    // more.disabled = false; // кнопка активна - ???
    hideLoader(); // приховати завантаження

    const card = document.querySelector('.gallery-item');

    if (card) {
      const cardBounding = card.getBoundingClientRect().height;

      window.scrollBy({
        left: 0,
        top: cardBounding * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Load more - Помилка',
      message: 'Щось пішло не так. Спробуйте ще раз.',
      position: 'topRight',
    });
  }
}
