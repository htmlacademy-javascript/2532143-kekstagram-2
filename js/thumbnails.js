const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

export const renderCards = (photos) => {
  const picturesFragment = document.createDocumentFragment();

  photos.forEach(({url, likes, description, comments}) => {
    const testPicture = pictureTemplate.cloneNode(true);
    testPicture.querySelector('.picture__img').src = url;
    testPicture.querySelector('.picture__likes').textContent = likes;
    testPicture.querySelector('.picture__img').alt = description;
    testPicture.querySelector('.picture__comments').textContent = comments.length;

    picturesFragment.append(testPicture);
  });

  pictureContainer.append(picturesFragment);
}
