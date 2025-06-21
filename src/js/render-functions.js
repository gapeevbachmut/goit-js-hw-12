import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.list');
const loader = document.querySelector('.loader');

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

  list.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
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

export function showLoadMoreButton() {
  more.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  more.classList.add('hidden');
}
