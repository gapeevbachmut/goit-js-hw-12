// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:

// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
// showLoadMoreButton(). Ця функція нічого не приймає, повинна додавати клас для відображення кнопки Load more. Нічого не повертає.
// hideLoadMoreButton(). Ця функція нічого не приймає, повинна прибирати клас для відображення кнопки Load more. Нічого не повертає.

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.list');
const loader = document.querySelector('.loader');

// додам кнопку more ДЗ №12
export const more = document.querySelector('.btn-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
    <div class="gallery-card">
    <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
    </div>
      
      <div class="descr">
        <div class="descr-img">
          <span class="descr-label">
            
          Likes:</span>
          <span class="descr-value">${likes}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            
          Views:</span>
          <span class="descr-value">${views}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            
          Comments:</span>
          <span class="descr-value">${comments}</span>
        </div>
        <div class="descr-img">
          <span class="descr-label">
            
          Downloads:</span>
          <span class="descr-value">${downloads}</span>
        </div>      
      </div>
    </li>
    `
    )
    .join('');

  list.insertAdjacentHTML('beforeend', markup); // вставляємо розмітку в ul.list
  lightbox.refresh(); // оновлюємо SimpleLightbox, щоб бачив нові <a>
}

export function clearGallery() {
  list.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

// ДЗ №12 ховаємо та показуємо кнопку more

export function showLoadMoreButton() {
  more.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  more.classList.add('hidden');
}

///////////////////////////
// не відображаються на гіте
// <svg width="10" height="10">
//   <use href="../img/icons.svg#icon-likes"></use>
// </svg>
