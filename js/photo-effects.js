import { EFFECTS, EFFECTS_SETTING } from './consts.js';

const uploadWrapper = document.querySelector('.img-upload__wrapper');
const effectsList = uploadWrapper.querySelector('.effects__list');
const slider = uploadWrapper.querySelector('.effect-level__slider');
const effectLevel = uploadWrapper.querySelector('.img-upload__effect-level');
const effectLevelValue = effectLevel.querySelector('.effect-level__value');
const previewImage = uploadWrapper.querySelector('.img-upload__preview img');
let effect;

noUiSlider.create(slider, {
  range: {
    'min': 0,
    'max': 1
  },
  start: 0,
  format: {
    to: function (value) {
      return parseFloat(value);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
  connect: 'lower',
});

const updateSlider = (currentEffect) => {
  const sliderValue = slider.noUiSlider.updateOptions(EFFECTS_SETTING[currentEffect].slider);
  return sliderValue;
};

const changeSlider = (currentEffect) => {
  slider.noUiSlider.on('update', () => {
    effectLevelValue.value = slider.noUiSlider.get();
    const { style, token } = EFFECTS_SETTING[currentEffect];
    previewImage.style.filter = `${style}(${effectLevelValue.value}${token})`;
  });
};

const changeEffect = (evt) => {
  effect = evt.target.value;

  if (effect === EFFECTS.NONE) {
    effectLevel.classList.add('hidden');
    previewImage.style.filter = EFFECTS.NONE;
  } else {
    effectLevel.classList.remove('hidden');
    updateSlider(effect);
    changeSlider(effect);
  }
};

export const resetEffects = () => {
  effectLevel.classList.add('hidden');
  previewImage.style.filter = EFFECTS.NONE;
  document.querySelector('#effect-none').checked = true;
};

const onEffectsListChange = (evt) => {
  changeEffect(evt);
};

effectsList.addEventListener('change', onEffectsListChange);

export { effectLevel };
