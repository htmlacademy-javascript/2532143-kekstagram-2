import {isEscapeKey} from './utils/util.js';
import {resetScale} from './upload-img-scale-config.js';
import {formSubmit} from './utils/load-form.js';
import {effectLevel, resetEffects} from './photo-effects.js';
import './upload-img-scale-config.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadButton = document.querySelector('.img-upload__input');
const editorWindow = document.querySelector('.img-upload__overlay');
const editorCancelButton = document.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const imgLoadButton = document.querySelector('.img-upload__submit');

const closeEditor = () => {
  editorWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onActiveEscKeydown);
  hashtagField.removeEventListener('keydown', evtEscPrevent);
  commentField.removeEventListener('keydown', evtEscPrevent);
  uploadForm.reset();
  resetScale();
  resetEffects();
};

function onActiveEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditor();
  }
}

function evtEscPrevent (evt) {
  if (isEscapeKey(evt)) {
    evt.stopPropagation(closeEditor);
  }
}

const openEditor = () => {
  editorWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  effectLevel.classList.add('hidden');
  document.addEventListener('keydown', onActiveEscKeydown);
  hashtagField.addEventListener('keydown', evtEscPrevent);
  commentField.addEventListener('keydown', evtEscPrevent);
};

uploadButton.addEventListener('change', openEditor);
editorCancelButton.addEventListener('click', closeEditor);
uploadForm.addEventListener('submit', formSubmit);

export {uploadForm, hashtagField, commentField, imgLoadButton, closeEditor};
