import { bigPicture } from './active-picture.js';
const commentContainer = document.querySelector('.social__comments');
const activeComments = bigPicture.querySelector('.social__comment-shown-count');

export const renderBigPicture = ({url, likes, description, comments}) => {

  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
};
export const renderComment = (result) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  const newCommentImg = document.createElement('img');
  newCommentImg.src = result.avatar;
  newCommentImg.alt = result.name;
  newCommentImg.classList.add('social__picture');
  newComment.append(newCommentImg);
  const newCommentText = document.createElement('p');
  newCommentText.classList.add('social__text');
  newCommentText.textContent = result.message;
  newComment.append(newCommentText);
  commentContainer.append(newComment);
};
