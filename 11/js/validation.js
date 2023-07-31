import { checkLength } from './util.js';
import {
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAG_VOLUME,
  HASHTAG_SYMBOLS
} from './constance.js';


const form = document.querySelector('.img-upload__form'); //uploadform
const hashtag = document.querySelector('.text__hashtags'); //hashtagField
const description = document.querySelector('.text__description');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'form__error',
},
true);

const validateDescription = (value) => checkLength(value, MAX_DESCRIPTION_LENGTH);


pristine.addValidator(
  description,
  validateDescription,
  `Длина описания не должна превышать ${MAX_DESCRIPTION_LENGTH} символов.`
);

const validateHashtagVolume = (value) => value.replace(/ +/g, ' ').trim().split(' ').length <= MAX_HASHTAG_VOLUME;


pristine.addValidator(
  hashtag,
  validateHashtagVolume,
  `Количество хеш-тегов не должно превышать ${MAX_HASHTAG_VOLUME}.`,
  1,
  true
);

const validateHashtag = (value) => {
  const tags = value.replace(/ +/g, ' ').trim().split(' ');
  return !value.length ? true : !tags.some((tag) => !HASHTAG_SYMBOLS.test(tag));
};

pristine.addValidator(
  hashtag,
  validateHashtag,
  `хэш-тег начинается с символа # (решётка);
  строка после решётки должна состоять из букв и чисел и не может содержать пробелы,
  спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
  хеш-тег не может состоять только из одной решётки;
  максимальная длина одного хэш-тега 20 символов, включая решётку;`,
  1,
  true
);

const validateUniqueHashtag = (value) => {
  const tags = value.replace(/ +/g, ' ').trim().toLowerCase().split(' ');
  const uniqueTags = [...new Set(tags)];
  return tags.length === uniqueTags.length;
};

pristine.addValidator(
  hashtag,
  validateUniqueHashtag,
  'Хештеги не должны повторяться.',
  1,
  true
);

const validateForm = () => pristine.validate();

export { validateForm };
