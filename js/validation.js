import { checkLength } from './util.js';

const form = document.querySelector('.img-upload__form'); //uploadform
const hashtag = document.querySelector('.text__hashtags'); //hashtagField
const description = document.querySelector('.text__description');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'form__error',
},
false);

const validateDescription = (value) => checkLength(value, 20);


pristine.addValidator(
  description,
  validateDescription,
  'Длина описания не должна превышать 20 символов.'
);

