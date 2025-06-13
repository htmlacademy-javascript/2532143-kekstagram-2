import {isEscapeKey} from './utils.js';
import {renderComment, renderBigPicture} from './active-picture-render.js';
import { generateComment } from './comment-generator.js';

const container = document.querySelector('.pictures');
const pictures = container.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

export const openBigPicture = ({url, likes, description, comments}) => {
  if (pictures) {
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.querySelector('.comments-loader').classList.add('hidden');
  }

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });

  renderBigPicture({url, likes, description, comments});
  renderComment(generateComment());
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
};

container.addEventListener('click', () => {
  openBigPicture();
});

bigPictureCancel.addEventListener('click', () => {
  closeBigPicture();
});

export {bigPicture};
