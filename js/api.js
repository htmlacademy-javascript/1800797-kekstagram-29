import {
  GET_DATA_URL,
  POST_DATA_URL
} from './constance.js';

const getData = () => fetch(GET_DATA_URL);

const postData = (form) =>
  fetch(POST_DATA_URL, {
    method: 'POST',
    body: form
  });

export {
  getData,
  postData
};
