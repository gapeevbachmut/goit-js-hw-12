// У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді та логіку прокручування сторінки (scroll) робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  getImagesByQuery,
  moreCards,
  // page,
  per_page,
} from './js/pixabay-api.js';
let page = 1; // імпортований page  вважає константою ???

// let per_page = 15;

// імпортую нові дані ДЗ №12
// import { moreCards } from './js/pixabay-api.js';
// import { page } from './js/pixabay-api.js';
// import { per_page } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  // ДЗ №12
  list,
  more,
  showMore,
  hideMore,
} from './js/render-functions.js';

//отримаю форму та інпут
const form = document.querySelector('.form');
const input = document.querySelector('input');

form.addEventListener('submit', handleSubmit);

// ДЗ №12 - слухач на кнопку - клік
more.addEventListener('click', moreClick);

// для додавання пошуку при кліку
let myQuery;

//                                              сабміт
async function handleSubmit(event) {
  event.preventDefault();
  //
  //
  //як очистити форму при новому сабміті, та обнулити page
  //
  //
  // інпут користувача
  //пробіли та регістр

  const request = input.value.toLocaleLowerCase().trim();
  myQuery = request;
  //  одне зображення -  fgh  або   kkk
  if (!request) {
    // це працює на пробіл !!!
    //  якщо нічого не ввести -  прибрати required у html
    // console.log(input);
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
  showMore(); //  ДЗ №12 - показати кнопку
  try {
    const data = await getImagesByQuery(request);
    //якщо пустий масив
    if (data.hits.length === 0) {
      iziToast.error({
        title: '❌ Error',
        message:
          'Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Спробуйте ще раз!',
        position: 'topRight',
      });
      hideMore(); // якщо нічого не знайшли, кнопку теж сховати
      return;
    }

    createGallery(data.hits);

    // перевіряємо, якщо результатом запиту може бути і одне зображення
    if (data.hits.length < per_page) {
      hideMore(); // ховаємо кнопку
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
    // hideMore(); //  ДЗ №12 - сховати кнопку                       - ???  де?
    form.reset(); // очистити пр новому інпуті
  }
}

// ДЗ № 12

// moreCards(page) // виклик функції запиту на сервер
//   .then(data => {
//     console.log(data);
//     // відмалювати розмітку
//     // list.insertAdjacentHTML('beforeend', createGallery(data.hits));
//   })
//   .catch(error => {
//     console.log('error');
//   });
//

//                                  клік
async function moreClick(event) {
  event.preventDefault();
  // console.log(page);

  page += 1;
  more.disabled = true; // кнопка не активна

  try {
    const moreImages = await moreCards(myQuery, page);
    // функція url з параметрами - запит на сервер
    // при кліку  ЩЕ - завантажуються зображення не по пошуку!!!
    // ??????????????????????????????????????????????
    // як додати параметри пошуку
    // змінна - ???
    console.log(myQuery);

    // list.insertAdjacentHTML('beforeend', createGallery(moreImages.hits)); - цей запит вже є!!!!

    createGallery(moreImages.hits); // відмальовуємо розмітку

    // вирахувати кількість сторінок
    // перевірити на останню сторінку із запитом   -  ???

    // тоді треба не показувати кнопку ще

    const totalPages = Math.ceil(moreImages.totalHits / per_page);
    if (page >= totalPages) {
      hideMore();

      iziToast.show({
        title: 'Info: ',
        message: 'Вибачте, але ви дійшли до кінця результатів пошуку',
        position: 'topRight',
      });
    }

    console.log(moreImages);
    console.log(page);
    console.log(moreImages.totalHits);

    more.disabled = false; // кнопка активна

    // отримав елемент li, для визначення його висоти
    const card = document.querySelector('.gallery-item');
    // висота елемента
    const cardBounding = card.getBoundingClientRect().height;
    // console.log(cardBounding);

    window.scrollBy({
      left: 0,
      top: cardBounding * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      title: 'Load more - Помилка',
      message: 'Щось пішло не так. Спробуйте ще раз.',
      position: 'topRight',
    });
  }
}
