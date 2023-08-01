import { setFilters } from './filter.js';
import './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

getData()
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      //данные не загружены.
      showAlert('Сервер не работает, что-то пошло не так.');
      throw new Error();
    }
  })
  .then((data) => {
    // renderThumbnail(data);
    setFilters(data);
  })
  .catch(() => {
    showAlert('Сервер не доступен, что-то пошло не так.');
  });
