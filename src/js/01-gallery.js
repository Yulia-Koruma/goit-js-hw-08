import { galleryItems } from './gallery-items.js';
console.log(galleryItems);


import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery')
const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems)
galleryRef.insertAdjacentHTML('beforeend', galleryCardsMarkup)

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    })
    .join('')
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
})
console.log(lightbox)