import {generateComment} from './data.js';
import {DESCRIPTIONS} from './data.js';

// функция для генерации массива
const generatePhotos = () => {
  const photos = [];
  let currentCommentId = 101;

  for (let i = 0; i < 25; i++) {
    // Генерация случайного количества комментариев (0-30)
    const commentCount = Math.floor(Math.random() * 31);
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
      likes: Math.floor(Math.random() * (200 - 15 + 1)) + 15,
      comments: comments
    };
    photos.push(photo);
  }
  return photos;
};

generatePhotos();
