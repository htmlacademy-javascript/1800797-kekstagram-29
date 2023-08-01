import { EffectsOptions } from './constance.js';

const sliderElement = document.querySelector('.effect-level__slider');
const radiosList = document.querySelector('.effects__list');
const valueElement = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview img');
const originalRadio = document.querySelector('#effect-none');
const sliderBlock = document.querySelector('.effect-level');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower'
});

const updateSliderOption = (effect) => {
  sliderElement.noUiSlider.updateOptions(EffectsOptions[effect.toUpperCase()]);
};

const renderEffect = (effect) => {
  let filterStyle = '';
  switch (effect) {
    case 'chrome':
      filterStyle = `grayscale(${valueElement.value})`;
      break;
    case 'sepia':
      filterStyle = `sepia(${valueElement.value})`;
      break;
    case 'marvin':
      filterStyle = `invert(${valueElement.value}%)`;
      break;
    case 'phobos':
      filterStyle = `blur(${valueElement.value}px)`;
      break;
    case 'heat':
      filterStyle = `brightness(${valueElement.value})`;
      break;
  }
  imagePreview.style.filter = filterStyle;
};

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  renderEffect(document.querySelector('.effects__radio:checked').value);
});

const resetEffects = () => {
  originalRadio.checked = true;
  imagePreview.style.filter = '';
  sliderBlock.classList.add('hidden');
};

radiosList.addEventListener('change', (evt) => {
  if (evt.target.name === 'effect') {
    if (evt.target.value === 'none') {
      imagePreview.style.filter = '';
      sliderBlock.classList.add('hidden');
    } else {
      updateSliderOption(evt.target.value);
      renderEffect(evt.target.value);
      sliderBlock.classList.remove('hidden');
    }
  }
});

export { resetEffects };
