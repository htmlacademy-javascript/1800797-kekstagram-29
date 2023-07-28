import { COMMENTS_DOSE } from "./constance.js";

const cardContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureTitle = bigPicture.querySelector('.social__caption');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const bigPictureCommentsCount = bigPicture.querySelector('.social__comments-count');
const bigPictureCommentItem = bigPicture.querySelector('.social__comment');
const bigPictureCommentContainer = bigPicture.querySelector('.social__comments');
const bigPictureCommentField = bigPicture.querySelector('.social__footer-text');
const bigPictureCommentLoader = bigPicture.querySelector('.social__comments-loader');

const commentsList = [];

let commentVolume = 0;

const renderButtonLoader = () => {
  if (!commentsList.length) {
    bigPictureCommentLoader.classList.add('hidden');
  }
};

const renderStatistic = () => {
  bigPictureCommentsCount.innerHTML = `${comments.volume - commentsList.length} из <span class="comments-count">${commentVolume}</span> комментариев`
};

const renderComment = (comment) => {
  const commentElement = bigPictureCommentItem.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  commentsList.splice(0, COMMENTS_DOSE).forEach((item) => {
    fragment.append(renderComment(item));
  });
  bigPictureCommentContainer.append(fragment);
  renderButtonLoader();
  renderStatistic();
};

const openBigPicture = (photo) => {
  commentVolume = photo.comments.length;
  bigPictureCommentContainer.innerHTML = '';
  bigPicture.classList.remove('hidden');
  bigPictureImage.src = photo.url;
  bigPictureLikes.textContent = photo.likes;
  bigPictureTitle.textContent = photo.description;

  commentsList.length = 0;
  commentsList.push(...photo.comments.slice());

  photo.comments.length === 0
    ? bigPictureCommentField.placeholder = 'Будьте первым комментатором'
    : bigPictureCommentField.placeholder = 'Ваш комментарий'
  renderComments(photo.comments);
  console.log(photo);
};

bigPictureCommentLoader.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderComments();
});

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
};

closeButton.addEventListener('click', (evt) => {
  closeBigPicture();
});

export { openBigPicture };
