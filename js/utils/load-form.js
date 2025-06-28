import { resetEffects } from '../photo-effects.js';
import { closeEditor, imgLoadButton } from '../picture-editor.js';
import { sendData } from './server-api.js';
import { isEscapeKey } from './util.js';
const succesTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const submitButtonText = {
  Presending: 'Опубликовать',
  Sending: 'Публикуем...'
};

const stateButton = (text) => {
  if (text === submitButtonText.Sending) {
    imgLoadButton.disabled = true;
  } else {
    imgLoadButton.disabled = false;
  }
  imgLoadButton.textContent = text;
};

const appendNotification = (template) => {
  const newNotification = template.cloneNode(true);
  document.body.append(newNotification);
  document.body.addEventListener('click', closeNotification);
  document.body.addEventListener('keydown', closeNotification);
};

function closeNotification (evt) {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('button');
  if (evt.target === existElement || evt.target === closeButton || isEscapeKey(evt)) {
    existElement.remove();
    document.body.removeEventListener('click', closeNotification);
    document.body.removeEventListener('keydown', closeNotification);
  }
}

const sendForm = async (form) => {
  stateButton(submitButtonText.Sending);
  try {
    await sendData(new FormData(form));
    appendNotification(succesTemplate);
    closeEditor();
    resetEffects();
  } catch (error) {
    appendNotification(errorTemplate);
  } finally {
    stateButton(submitButtonText.Presending);
  }
};

export const formSubmit = (evt) => {
  evt.preventDefault();
  sendForm(evt.target);
};

