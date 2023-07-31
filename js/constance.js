const PHOTOS = 25;

const MIN_LIKES = 0;
const MAX_LIKES = 1000;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 10;

const COMMENTS = 5000;

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

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

const DESCRIPTIONS = [
  'Утро',
  'Вечер',
  'Солнце',
  'Еда',
  'Котик'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Кирилл',
  'Лена',
  'Виктория',
  'Иван',
  'Вадим'
];

export {
  PHOTOS,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  COMMENTS,
  MIN_AVATAR,
  MAX_AVATAR,
  DESCRIPTIONS,
  NAMES, MESSAGES,
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
