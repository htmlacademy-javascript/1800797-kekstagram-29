const uploadElement = document.querySelector('.img-upload__input');
const modalUpload = document.querySelector('.img-upload__overlay');
const modalUploadClose = document.querySelector('.img-upload__cancel');
const modalImagePreview = document.querySelector('.img-upload__preview img');

const renderUploadPhoto = () => {
  const fileImage = uploadElement.files[0];
  modalImagePreview.src = URL.createObjectURL(fileImage);
};

const showModal = () => {
  modalUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeModal = () => {
  modalUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

uploadElement.addEventListener('change', () => {
  showModal();
  renderUploadPhoto();
});

modalUploadClose.addEventListener('click', () => {
  closeModal();
});
