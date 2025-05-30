const AVATARS = [1, 2, 3, 4, 5, 6];
const NAMES = [
  'Иван',
  'Мария',
  'Алексей',
  'Ольга',
  'Дмитрий',
  'Анна'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Закат',
  'Море',
  'Горы',
  'Цветы',
  'Город',
  'Пляж',
  'Рассвет',
  'Новый автомобиль'
];

// функция для генерации комментария
const generateComment = (commentId) => {
  const messageCount = Math.floor(Math.random() * 2) + 1;
  let message = '';
  for (let j = 0; j < messageCount; j++) {
    const randomMessage = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    message += `${randomMessage } `;
  }

  return {
    id: commentId,
    avatar: `img/avatar-${AVATARS[Math.floor(Math.random() * AVATARS.length)]}.svg`,
    message: message.trim(),
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  };
};

export {generateComment};
export {DESCRIPTIONS};
