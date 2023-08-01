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

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SUBMITING: 'Публикую...'
};

const MAX_RANDOM_PHOTOS = 10;

const DEBOUNCE_DELAY = 500;

const EffectsOptions = {
  CHROME: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  SEPIA: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  },
  MARVIN: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
  },
  PHOBOS: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    start: 3,
  },
  HEAT: {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    start: 3,
  }
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
  SubmitButtonText,
  MAX_RANDOM_PHOTOS,
  DEBOUNCE_DELAY,
  EffectsOptions
};
