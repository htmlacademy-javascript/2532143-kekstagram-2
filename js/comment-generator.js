import {getRandomInteger} from './utils';
import {MESSAGES} from './data';
import {AVATARS} from './data';
import {NAMES} from './data';

const generateComment = (commentId) => {
  // Генерация предложений для message
  const messageCount = getRandomInteger(1, 2);
  let message = '';
  for (let j = 0; j < messageCount; j++) {
    const randomMessage = MESSAGES[getRandomInteger(0, MESSAGES.length - 1)];
    message += randomMessage;
  }

  return {
    id: commentId,
    avatar: `img/avatar-${AVATARS[getRandomInteger(0, AVATARS.length - 1)]}.svg`,
    message: message.trim(),
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
};

export {generateComment};
