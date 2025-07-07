import {isEscapeKey} from './utils/util.js';
import {cleanComments, renderComments} from './render-comments.js';
import {commentsContainer} from './render-comments.js';
import {commentsMoreButton} from './render-comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

export const renderBigPicture = ({ url, likes, description, comments }) => {

  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const onActiveEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

export const openBigPicture = ({ url, likes, description, comments }) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentsMoreButton.classList.remove('hidden');
  document.addEventListener('keydown', onActiveEscKeydown);

  renderBigPicture({url, likes, description, comments});
  renderComments({comments});
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onActiveEscKeydown);
  commentsContainer.innerHTML = '';
  cleanComments();
}

const onBigPictureCancelClick = () => {
  closeBigPicture();
};

bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
