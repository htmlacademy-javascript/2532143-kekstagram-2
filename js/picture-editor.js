import {isEscapeKey} from './utils.js';
import {resetScale} from './upload-img-scale-config.js';
import './upload-img-scale-config.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadButton = document.querySelector('.img-upload__input');
const editorWindow = document.querySelector('.img-upload__overlay');
const editorCancelButton = document.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const imgUploadButton = document.querySelector('.img-upload__submit');

const closeEditor = () => {
  editorWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onActiveEscKeydown);
  hashtagField.removeEventListener('keydown', evtEscPrevent);
  commentField.removeEventListener('keydown', evtEscPrevent);
  resetScale();
  uploadButton.value = '';
};

const onActiveEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditor();
  }
};

const evtEscPrevent = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation(closeEditor);
  }
};

const openEditor = () => {
  editorWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onActiveEscKeydown);
  hashtagField.addEventListener('keydown', evtEscPrevent);
  commentField.addEventListener('keydown', evtEscPrevent);
};

uploadButton.addEventListener('change', openEditor);
editorCancelButton.addEventListener('click', closeEditor);

export {uploadForm, hashtagField, commentField, imgUploadButton};
