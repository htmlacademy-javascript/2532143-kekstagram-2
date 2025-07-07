import { hashtagField, commentField, pristine} from './picture-editor.js';
import { imgLoadButton } from './picture-editor.js';
import { VALIDATE, rulesChecker } from './consts.js';

let errorMessage = '';
const errorTextValue = () => errorMessage;

const isHashtagValid = (value) => {
  const inputText = value.toLowerCase().trim();
  const inputField = inputText.split(/\s+/);
  const rules = rulesChecker(inputField);

  if (inputText === '') {
    imgLoadButton.disabled = false;
    return true;
  }

  return rules.every((rule) => {
    const isInvalid = rule.check;
    errorMessage = rule.error;
    imgLoadButton.disabled = isInvalid;
    return !isInvalid;
  });
};

const isCommentValid = (value) => {
  const isInvalid = value.length > VALIDATE.MAXCOMMENTSYMBOLS;
  errorMessage = `Длина комментария не должна превышать ${VALIDATE.MAXCOMMENTSYMBOLS} символов`;
  imgLoadButton.disabled = isInvalid;
  return !isInvalid;
};

pristine.addValidator(hashtagField, isHashtagValid, errorTextValue);
pristine.addValidator(commentField, isCommentValid, errorTextValue);

