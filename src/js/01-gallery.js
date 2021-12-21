// Add imports above this line
import { galleryItems } from './gallery-items';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const html = gallery1 => {
  const html1 = gallery1.map(img => {
    const divEl = document.createElement('div');
    divEl.classList.add('gallery__item');
    const linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    const imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = img.preview;
    imgEl.alt = img.description;
    imgEl.dataset.source = img.original;
    linkEl.appendChild(imgEl);
    divEl.appendChild(linkEl);
    return divEl;
  });

  return html1;
};

gallery.append(...html(galleryItems));

gallery.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${e.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
}
