const COMMENTS_DOSE = 5;

const STEP_SCALE = 25;

const MIN_SCALE = 25;

const MAX_SCALE = 100;

const MAX_DESCRIPTION_LENGTH = 140;

const MAX_HASHTAG_VOLUME = 5;

const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const GET_DATA_URL = 'https://29.javascript.pages.academy/kekstagram/data';

const POST_DATA_URL = 'https://29.javascript.pages.academy/kekstagram';

const ALERT_SHOW_TIME = 5000;

const submitButtonText = {
  IDLE: 'Опубликовать',
  SUBMITING: 'Публикую...'
};

export {
  COMMENTS_DOSE,
  STEP_SCALE,
  MIN_SCALE,
  MAX_SCALE,
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAG_VOLUME,
  HASHTAG_SYMBOLS,
  GET_DATA_URL,
  POST_DATA_URL,
  ALERT_SHOW_TIME,
  submitButtonText
};
