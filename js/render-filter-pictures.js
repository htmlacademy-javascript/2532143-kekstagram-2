import {openBigPicture} from './active-picture.js';
import {pictureContainer, renderCards} from './thumbnails.js';

let pictures = [];

export function renderFilter (picturesData) {
  clearFilterPictures();
  pictures = picturesData;
  renderCards(picturesData);
  pictureContainer.addEventListener('click', onFilterPicturesClick);
}

function onFilterPicturesClick (evt) {
  const picture = evt.target.closest('a.picture[data-id]');
  if (!picture) {
    return;
  }
  evt.preventDefault();
  const id = Number(picture.dataset.id);
  const pictureData = pictures.find((item) => item.id === id);
  openBigPicture(pictureData);
}

function clearFilterPictures() {
  pictureContainer.querySelectorAll('a.picture').forEach((item) => item.remove());
}
