const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const closeSuccessModal = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onEscSuccess);
};

const showSuccessModal = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);
  document.querySelector('.success__button').addEventListener('click', () => {
    closeSuccessModal();
  });
  document.querySelector('.success').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('success')) {
      closeSuccessModal();
    }
  });
  document.addEventListener('keydown', onEscSuccess);
};

const showErrorModal = () => {
  const errorElement = errorTemplate.cloneNode(true);
  document.body.append(errorElement);
};

function onEscSuccess(evt) {
  if (evt.key === 'Escape') {
    closeSuccessModal();
  }
}

export {
  showSuccessModal,
  showErrorModal
};
