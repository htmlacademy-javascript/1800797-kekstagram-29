const form = document.querySelector('.img-upload__form');
const hashtag = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'form__error',
},
false);
validateDescription = (value) => value.length <= 10;


pristine.addValidator(
  description,
  validateDescription,
  'Длина описания не должна превышать 10 символов.'
);
