import {MESSAGES} from './data';
import {AVATARS} from './data';
import {NAMES} from './data';

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
