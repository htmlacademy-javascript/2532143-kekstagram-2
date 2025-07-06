import './photo-effects.js';
import { SCALE_CONFIG } from './consts.js';

const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');

let controlValue = parseInt(scaleControlValue.value, 10);
const changeScale = () => {
  if (previewImage) {
    previewImage.style.transform = `scale(${controlValue / 100})`;
  }
};

export const updateControlValueState = () => {
  scaleControlSmaller.disabled = controlValue <= SCALE_CONFIG.MIN;
  scaleControlBigger.disabled = controlValue >= SCALE_CONFIG.MAX;
};

const toSmaller = () => {
  controlValue -= SCALE_CONFIG.STEP;
  scaleControlValue.value = `${controlValue}%`;
  changeScale();
  updateControlValueState();
};

const toBigger = () => {
  controlValue += SCALE_CONFIG.STEP;
  scaleControlValue.value = `${controlValue}%`;
  changeScale();
  updateControlValueState();
};

export const resetScale = () => {
  controlValue = SCALE_CONFIG.MAX;
  scaleControlValue.value = `${controlValue}%`;
  changeScale();
  updateControlValueState();
};

scaleControlSmaller.addEventListener('click', toSmaller);
scaleControlBigger.addEventListener('click', toBigger);
