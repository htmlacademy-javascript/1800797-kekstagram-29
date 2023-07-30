import {
  MIN_SCALE,
  MAX_SCALE,
  STEP_SCALE,
} from './constance.js';

const scaleControl = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');
const minusInput = document.querySelector('.scale__control--smaller');
const plusInput = document.querySelector('.scale__control--bigger');

let scale;

const renderScaleInput = () => {
  scaleControl.value = `${scale}%`;
  // scaleControl.value = scale + '%';
};

const renderPhotoScale = () => {
  imagePreview.style.transform = `scale(${scale * 0.01})`;
};

const resetScale = () => {
  scale = 100;
  renderScaleInput();
  renderPhotoScale();
};

minusInput.addEventListener('click', () => {
  scale = scale - STEP_SCALE >= MIN_SCALE ? scale - STEP_SCALE : MIN_SCALE;
  renderScaleInput();
  renderPhotoScale();
});

plusInput.addEventListener('click', () => {
  scale = scale + STEP_SCALE <= MAX_SCALE ? scale + STEP_SCALE : MAX_SCALE;
  renderScaleInput();
  renderPhotoScale();
});

export { resetScale };
