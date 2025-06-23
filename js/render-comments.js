export const commentsContainer = document.querySelector('.social__comments');
const commentsFragment = document.createDocumentFragment();
const commentTemplate = commentsContainer.querySelector('li');
export const commentsMoreButton = document.querySelector('.comments-loader');

let shownComments = 0;
let allComments = [];

export const renderLimitedComments = (comments, startCount, endCount) => {
  for (let i = startCount; i < endCount; i++) {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__text').textContent = comments[i].message;
    newComment.querySelector('.social__picture').src = comments[i].avatar;
    newComment.querySelector('.social__picture').alt = comments[i].name;
    commentsFragment.append(newComment);
  }
  commentsContainer.append(commentsFragment);
};

export const renderComments = ({comments}) => {
  shownComments = 0;
  allComments = comments;
  commentsContainer.innerHTML = '';
  shownComments = Math.min(5, allComments.length);
  if (allComments.length <= 5) {
    commentsMoreButton.classList.add('hidden');
    document.querySelector('.social__comment-shown-count').textContent = allComments.length;
  }
  renderLimitedComments(allComments, 0, shownComments);
};

commentsMoreButton.addEventListener('click', () => {
  const nextComments = Math.min(shownComments + 5, allComments.length);
  renderLimitedComments(allComments, shownComments, nextComments);
  shownComments = nextComments;
  document.querySelector('.social__comment-shown-count').textContent = shownComments;
  if (shownComments === allComments.length) {
    commentsMoreButton.classList.add('hidden');
    document.querySelector('.social__comment-shown-count').textContent = allComments.length;
  }
});

export const cleanComments = () => {
  if (shownComments === allComments.length) {
    document.querySelector('.social__comment-shown-count').textContent = 5;
  }
};
