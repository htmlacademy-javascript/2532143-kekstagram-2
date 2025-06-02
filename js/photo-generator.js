import {generateComment} from './comment-generator';
import {getRandomInteger} from './utils';
import {DESCRIPTIONS} from './data';

const generatePhotos = () => {
  const photos = [];
  let currentCommentId = 101;

  for (let i = 1; i <= 25; i++) {
    // Генерация случайного количества комментариев (0-30)
    const commentCount = getRandomInteger(0, 30);
    const comments = [];
    for (let j = 0; j < commentCount; j++) {
      comments.push(generateComment(currentCommentId));
      currentCommentId++;
    }

    // Создание объекта фотографии
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
      likes: getRandomInteger(15, 200),
      comments: comments
    };
    photos.push(photo);
  }

  return photos;
};

export {generatePhotos};
