import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');

galleryItems.forEach(elem => {
  const newElem = `<a class="gallery__item" href="${elem.original}">
  <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
</a>`;
  gallery.insertAdjacentHTML('beforeend', newElem);
});
const lightBoxGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
0;
