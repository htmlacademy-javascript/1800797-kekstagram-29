import { onClickEsc } from './form.js';

const popupTemplates = {
  success: document.querySelector('#success').content.querySelector('.success'),
  error: document.querySelector('#error').content.querySelector('.error')
};

const closePopup = () => {
  if (document.querySelector('.popup').classList.contains('error')) {
    document.addEventListener('keydown', onClickEsc);
  }
  document.removeEventListener('keydown', onEscapePopup);
  document.querySelector('.popup').remove();
};

const showPopup = (popupType) => {
  const popupElement = popupTemplates[popupType].cloneNode(true);
  popupElement.classList.add('popup');
  popupElement.addEventListener('click', onClickOutside);
  document.body.append(popupElement);
  const popupButton = document.querySelector(`.${popupType}__button`);
  popupButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', onEscapePopup);
  if(popupType === 'error') {
    document.removeEventListener('keydown', onClickEsc);
  }
};

function onEscapePopup(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('success') || evt.target.classList.contains('error')) {
    closePopup();
  }
}

export {
  showPopup
};
