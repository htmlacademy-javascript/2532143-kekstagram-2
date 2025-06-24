import './photo-effects.js';

const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');


const minScale = 25;
const maxScale = 100;
const scaleStep = 25;
let controlValue = parseInt(scaleControlValue.value, 10);

const changeScale = () => {
  if (previewImage) {
    previewImage.style.transform = `scale(${controlValue / 100})`;
  }
};

const updateControlValueState = () => {
  scaleControlSmaller.disabled = controlValue <= minScale;
  scaleControlBigger.disabled = controlValue >= maxScale;
};

const toSmaller = () => {
  controlValue -= scaleStep;
  scaleControlValue.value = `${controlValue}%`;
  changeScale();
  updateControlValueState();
};

const toBigger = () => {
  controlValue += scaleStep;
  scaleControlValue.value = `${controlValue}%`;
  changeScale();
  updateControlValueState();
};

export const resetScale = () => {
  controlValue = maxScale;
  scaleControlValue.value = `${controlValue}%`;
  changeScale();
  updateControlValueState();
};

scaleControlSmaller.addEventListener('click', toSmaller);
scaleControlBigger.addEventListener('click', toBigger);
