import { postData } from './api.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import {
  validateForm,
  resetValidation
} from './validation.js';
import { showPopup } from './popups.js';
import { SubmitButtonText } from './constance.js';
import { isEscapeKey } from './util.js';

const uploadElement = document.querySelector('.img-upload__input'); //uploadcontrol
const modalUpload = document.querySelector('.img-upload__overlay'); //uploadmodal
const modalUploadClose = document.querySelector('.img-upload__cancel'); // uploadmodalcancel
const uploadModalEffectsControlIcons = modalUpload.querySelectorAll('.effects__preview');
const modalImagePreview = document.querySelector('.img-upload__preview img');
const uploadForm = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

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
  document.addEventListener('keydown', onClickEsc);
  modalUpload.addEventListener('click', onClickOutside);
};

const closeModal = () => {
  modalUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
  document.removeEventListener('keydown', onClickEsc);
  modalUpload.removeEventListener('click', onClickOutside);
  resetValidation();
};

const disableSubmitButton = (isDisable = true) => {
  submitButton.textContent = isDisable ? SubmitButtonText.SUBMITING : SubmitButtonText.IDLE;
  submitButton.disabled = isDisable;
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (validateForm()) {
    disableSubmitButton();
    postData(new FormData(evt.target))
      .then((response) => {
        if (response.ok) {
          closeModal();
          showPopup('success');
        } else {
          showPopup('error');
        }
      })
      .catch(() => {
        showPopup('error');
      })
      .finally(() => {
        disableSubmitButton(false);
      });
  }
});

uploadElement.addEventListener('change', () => {
  showModal();
});

modalUploadClose.addEventListener('click', () => {
  closeModal();
});

function onClickEsc(evt) {
  const isFocusedInput = evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description');
  if (isFocusedInput) {
    return false;
  }
  if (isEscapeKey(evt)) {
    closeModal();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('img-upload__overlay')) {
    closeModal();
  }
}

export { onClickEsc };
