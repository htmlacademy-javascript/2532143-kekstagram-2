import {generatePhotos} from './photo-generator.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


const addedPicture = generatePhotos();

const picturesFragment = document.createDocumentFragment();

addedPicture.forEach((photo) => {
  const testPicture = pictureTemplate.cloneNode(true);
  testPicture.querySelector('.picture__img').src = photo.url;
  testPicture.querySelector('.picture__likes').textContent = photo.likes;
  testPicture.querySelector('.picture__img').alt = photo.description;
  testPicture.querySelector('.picture__comments').textContent = photo.comments.length;

  picturesFragment.append(testPicture);
});

pictureContainer.append(picturesFragment);
