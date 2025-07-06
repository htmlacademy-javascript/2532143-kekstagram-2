import {isEscapeKey} from './utils/util.js';
import {resetScale, updateControlValueState} from './upload-img-scale-config.js';
import {formSubmit} from './utils/load-form.js';
import {effectLevel, resetEffects} from './photo-effects.js';
import { IMAGE_TYPES } from './consts.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadButton = document.querySelector('#upload-file');
const editorWindow = document.querySelector('.img-upload__overlay');
const editorCancelButton = document.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const imgLoadButton = document.querySelector('.img-upload__submit');
const uploadPreview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

export const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper'
});

const closeEditor = () => {
  editorWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onActiveEscKeydown);
  hashtagField.removeEventListener('keydown', evtEscPrevent);
  commentField.removeEventListener('keydown', evtEscPrevent);
  uploadForm.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  imgLoadButton.disabled = false;
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
  updateControlValueState();
};

const uploadNewImage = () => {
  const file = uploadButton.files[0];
  const fileName = file.name.toLowerCase();
  const fileExt = fileName.split('.').pop();
  const matches = IMAGE_TYPES.includes(fileExt);
  if (matches) {
    const url = URL.createObjectURL(file);
    uploadPreview.src = url;
    effectsPreview.forEach((item) => {
      item.style.backgroundImage = `url(${url})`;
    });
  }
  openEditor();
};

uploadButton.addEventListener('change', uploadNewImage);
editorCancelButton.addEventListener('click', closeEditor);
uploadForm.addEventListener('submit', formSubmit);


export {uploadForm, hashtagField, commentField, imgLoadButton, closeEditor};
