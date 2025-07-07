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

const sliderChange = (currentEffect) => {
  slider.noUiSlider.on('update', () => {
    effectLevelValue.value = slider.noUiSlider.get();
    const { style, token } = EFFECTS_SETTING[currentEffect];
    previewImage.style.filter = `${style}(${effectLevelValue.value}${token})`;
  });
};

const effectChange = (evt) => {
  effect = evt.target.value;

  if (effect === EFFECTS.NONE) {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }

  switch (effect) {
    case EFFECTS.NONE:
      previewImage.style.filter = EFFECTS.NONE;
      break;
    case EFFECTS.CHROME:
      updateSlider(EFFECTS.CHROME);
      sliderChange(EFFECTS.CHROME);
      break;
    case EFFECTS.SEPIA:
      updateSlider(EFFECTS.SEPIA);
      sliderChange(EFFECTS.SEPIA);
      break;
    case EFFECTS.MARVIN:
      updateSlider(EFFECTS.MARVIN);
      sliderChange(EFFECTS.MARVIN);
      break;
    case EFFECTS.PHOBOS:
      updateSlider(EFFECTS.PHOBOS);
      sliderChange(EFFECTS.PHOBOS);
      break;
    case EFFECTS.HEAT:
      updateSlider(EFFECTS.HEAT);
      sliderChange(EFFECTS.HEAT);
      break;
  }
};

export const resetEffects = () => {
  effectLevel.classList.add('hidden');
  previewImage.style.filter = EFFECTS.NONE;
  document.querySelector('#effect-none').checked = true;
};

effectsList.addEventListener('change', effectChange);

export { effectLevel };
