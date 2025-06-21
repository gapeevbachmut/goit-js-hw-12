import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  more,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

let myQuery;
let page = 1;
let per_page = 15;
let totalPages = 0;

const form = document.querySelector('.form');
const input = document.querySelector('input');

form.addEventListener('submit', handleSubmit);
more.addEventListener('click', moreClick);

//                                                      сабміт
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
  page = 1;
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(request, page);

    if (data.hits.length === 0) {
      iziToast.error({
        title: '❌ Error',
        message:
          'Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Спробуйте ще раз!',
        position: 'topRight',
      });
      hideLoadMoreButton();
      return;
    }

    totalPages = Math.ceil(data.totalHits / per_page);
    createGallery(data.hits);

    if (page >= totalPages) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Помилка',
      message: 'Щось пішло не так. Спробуйте ще раз.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

//                                               клік
async function moreClick(event) {
  event.preventDefault();

  page += 1;
  more.disabled = true;
  showLoader();
  hideLoadMoreButton();

  try {
    const moreImages = await getImagesByQuery(myQuery, page);

    createGallery(moreImages.hits);

    if (page >= totalPages) {
      hideLoadMoreButton();

      iziToast.show({
        title: 'Info: ',
        message: 'Вибачте, але ви дійшли до кінця результатів пошуку',
        position: 'topRight',
      });
    } else {
      more.disabled = false;
      showLoadMoreButton();
    }

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
  } finally {
    hideLoader();
  }
}
