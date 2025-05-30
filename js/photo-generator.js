import {generateComment} from './comment-generator';
import {randomCalculate} from './utils';
import {DESCRIPTIONS} from './data';


// функция для генерации массива
const generatePhotos = () => {
  const photos = [];
  let currentCommentId = 101;

  for (let i = 0; i < 25; i++) {
    // Генерация случайного количества комментариев (0-30)
    const commentCount = randomCalculate(0, 30);
    const comments = [];
    for (let j = 0; j < commentCount; j++) {
      comments.push(generateComment(currentCommentId));
      currentCommentId++;
    }

    // Создание объекта фотографии
    const photo = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)],
      likes: randomCalculate(15, 200),
      comments: comments
    };
    photos.push(photo);
  }
  return photos;
};

generatePhotos();

export {generatePhotos};
