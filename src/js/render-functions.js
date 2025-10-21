import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  disableScroll: true,
});
lightbox.on('show.simplelightbox', () => {
  console.log('Lightbox opened');
});

export function createGallery(images) {
  const markup = images

    .map(image => {
      const altText = image.tags.split(',').slice(0, 3).join(', ');
      return `
      
      <li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${altText}"
    />
  </a>
  <div class="info">
  <div class="info-block">
    <h4 class="card-heading">Likes</h4>
    <p class="info__text">${image.likes}</p>
  </div>
  <div class="info-block">
    <h4 class="card-heading">Views</h4>
    <p class="info__text">${image.views}</p>
  </div>
  <div class="info-block">
    <h4 class="card-heading">Comments</h4>
    <p class="info__text">${image.comments}</p>
  </div>
  <div class="info-block">
    <h4 class="card-heading">Downloads</h4>
    <p class="info__text">${image.downloads}</p>
  </div>
</div>
</li>
     `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('active');
}
export function hideLoader() {
  loader.classList.remove('active');
}
