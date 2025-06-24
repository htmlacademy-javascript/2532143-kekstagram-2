import { uploadForm, hashtagField, commentField } from './picture-editor.js';
import { imgUploadButton } from './picture-editor.js';

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper'
});

const maxHashtagSymbols = 20;
const maxHashtags = 5;
const maxCommentSymbols = 140;
let errorMessage = '';

const error = () => errorMessage;

const isHashtagValid = (value) => {

  const inputText = value.toLowerCase().trim();
  const inputField = inputText.split(/\s+/);

  const rules = [
    {
      check: inputField.some((item) => item.length > maxHashtagSymbols),
      error: `Количество символов не должно превышать ${maxHashtagSymbols}`,
    },
    {
      check: inputField.some((item) => item[0] !== '#'),
      error: 'Хэштег должен начинаться с решетки',
    },
    {
      check: inputField.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'Хэштег содержит недопустимые символы',
    },
    {
      check: inputField.some((item) => item.slice(1).includes('#')),
      error: 'Хэштеги разделяются пробелами'
    },
    {
      check: inputField.some((item, num, array) => array.includes(item, num + 1)),
      error: 'Хэштеги не должны повторяться'
    },
    {
      check: inputField.length > maxHashtags,
      error: `Максимально допустимое количество хэштегов - ${maxHashtags}`
    }
  ];

  if (inputText === '') {
    imgUploadButton.disabled = false;
    return true;
  }

  return rules.every((rule) => {
    const isInvalid = rule.check;
    errorMessage = rule.error;
    imgUploadButton.disabled = isInvalid;
    return !isInvalid;
  });
};

const isCommentValid = (value) => {
  const isInvalid = value.length > maxCommentSymbols;
  errorMessage = `Длина комментария не должна превышать ${maxCommentSymbols} символов`;
  imgUploadButton.disabled = isInvalid;
  return !isInvalid;
};


pristine.addValidator(hashtagField, isHashtagValid, error);
pristine.addValidator(commentField, isCommentValid, error);

