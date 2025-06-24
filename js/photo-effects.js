const uploadWrapper = document.querySelector('.img-upload__wrapper');
const effectsList = uploadWrapper.querySelector('.effects__list');
const slider = uploadWrapper.querySelector('.effect-level__slider');
const effectLevel = uploadWrapper.querySelector('.img-upload__effect-level');
const effectLevelValue = effectLevel.querySelector('.effect-level__value');
const previewImage = uploadWrapper.querySelector('.img-upload__preview');

noUiSlider.create(slider, {
  range: {
    'min': 0,
    'max': 1
  },
  start: 0,
  connect: 'lower',
});

slider.noUiSlider.on('update', () => {
  effectLevelValue.value = slider.noUiSlider.get();
});

const effectChange = (evt) => {
  const effect = evt.target.value;

  if (effect === 'none') {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }

  switch (effect) {
    case 'none':
      previewImage.style.filter = 'none';
      break;
    case 'chrome':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 0,
        step: 0.1
      });
      slider.noUiSlider.on('update', () => {
        previewImage.style.filter = `grayscale(${effectLevelValue.value})`;
      });
      break;
    case 'sepia':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 0,
        step: 0.1
      });
      slider.noUiSlider.on('update', () => {
        previewImage.style.filter = `sepia(${effectLevelValue.value})`;
      });
      break;
    case 'marvin':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100
        },
        start: 0,
        step: 1
      });
      slider.noUiSlider.on('update', () => {
        previewImage.style.filter = `invert(${effectLevelValue.value}%)`;
      });
      break;
    case 'phobos':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        start: 0,
        step: 0.1
      });
      slider.noUiSlider.on('update', () => {
        previewImage.style.filter = `blur(${effectLevelValue.value}px)`;
      });
      break;
    case 'heat':
      slider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        start: 1,
        step: 0.1
      });
      slider.noUiSlider.on('update', () => {
        previewImage.style.filter = `brightness(${effectLevelValue.value})`;
      });
      break;
  }
};

effectsList.addEventListener('change', effectChange);
