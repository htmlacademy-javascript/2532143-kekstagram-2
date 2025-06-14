export const commentsContainer = document.querySelector('.social__comments');
const commentsFragment = document.createDocumentFragment();
const commentTemplate = commentsContainer.querySelector('li');
export const renderComments = ({comments}) => {
  commentsContainer.innerHTML = '';
  for (let i = 0; i < comments.length; i++) {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__text').textContent = comments[i].message;
    newComment.querySelector('.social__picture').src = comments[i].avatar;
    newComment.querySelector('.social__picture').alt = comments[i].name;
    commentsFragment.append(newComment);
  }
  commentsContainer.append(commentsFragment);
};

