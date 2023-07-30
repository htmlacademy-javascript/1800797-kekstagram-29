import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { validateForm } from './validation.js';

const uploadElement = document.querySelector('.img-upload__input'); //uploadcontrol
const modalUpload = document.querySelector('.img-upload__overlay'); //uploadmodal
const modalUploadClose = document.querySelector('.img-upload__cancel'); // uploadmodalcancel
const uploadModalEffectsControlIcons = modalUpload.querySelectorAll('.effects__preview');
const modalImagePreview = document.querySelector('.img-upload__preview img');
const uploadForm = document.querySelector('.img-upload__form');

const renderUploadPhoto = () => {
  const fileImage = uploadElement.files[0];
  modalImagePreview.src = URL.createObjectURL(fileImage);
  uploadModalEffectsControlIcons.forEach((icon) => {
    icon.style.backgroundImage = `url("${URL.createObjectURL(fileImage)}")`;
  });
};

const showModal = () => {
  modalUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderUploadPhoto();
  resetScale();
  resetEffects();
};

const closeModal = () => {
  modalUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (validateForm()) {
    closeModal();
  }
});

uploadElement.addEventListener('change', () => {
  showModal();
});

modalUploadClose.addEventListener('click', () => {
  closeModal();
});
