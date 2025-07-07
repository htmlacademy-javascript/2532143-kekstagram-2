import { resetEffects } from '../photo-effects.js';
import { closeEditor, imgLoadButton } from '../picture-editor.js';
import { sendData } from './server-api.js';
import { isEscapeKey } from './util.js';
import { SUBMIT_BUTTON_TEXT } from '../consts.js';
const succesTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const stateButton = (text) => {
  imgLoadButton.disabled = text === SUBMIT_BUTTON_TEXT.Sending;
  imgLoadButton.textContent = text;
};

const appendNotification = (template) => {
  const newNotification = template.cloneNode(true);
  document.body.append(newNotification);
  document.body.addEventListener('click', onDocumentClick);
  document.body.addEventListener('keydown', onDocumentKeydown);
};

function onDocumentClick(evt) {
  closeNotification(evt);
}

function onDocumentKeydown(evt) {
  closeNotification(evt);
}

function closeNotification (evt) {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('button');
  if (evt.target === existElement || evt.target === closeButton || isEscapeKey(evt)) {
    existElement.remove();
    document.body.removeEventListener('click', onDocumentClick);
    document.body.removeEventListener('keydown', onDocumentKeydown);
  }
}

const sendForm = async (form) => {
  stateButton(SUBMIT_BUTTON_TEXT.Sending);
  try {
    await sendData(new FormData(form));
    appendNotification(succesTemplate);
    closeEditor();
    resetEffects();
  } catch (error) {
    appendNotification(errorTemplate);
  } finally {
    stateButton(SUBMIT_BUTTON_TEXT.Presending);
  }
};

export const submitForm = (evt) => {
  evt.preventDefault();
  sendForm(evt.target);
};

