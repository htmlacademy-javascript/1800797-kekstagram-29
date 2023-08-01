import { renderThumbnail } from './thumbnail.js';
import {
  MAX_RANDOM_PHOTOS,
  DEBOUNCE_DELAY
} from './constance.js';
import { debounce } from './util.js';

const imgFilters = document.querySelector('.img-filters');

const pictures = [];

const showFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
};


const setFilters = (photos) => {
  renderThumbnail(photos);
  showFilters();
  pictures.length = 0;
  pictures.push(...photos.slice());
};

const filterPhotos = (filter) => {
  switch(filter) {
    case 'filter-default' :
      return pictures;
    case 'filter-random' :
      return [...pictures].sort(() => Math.random() - 0.5).slice(0, MAX_RANDOM_PHOTOS);
    case 'filter-discussed' :
      return [...pictures].sort((a, b) => b.comments.length - a.comments.length);
  }
};

const setActiveFilterButton = (filterButton) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  filterButton.classList.add('img-filters__button--active');
};

imgFilters.addEventListener('click', debounce((evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    renderThumbnail(filterPhotos(evt.target.id));
    setActiveFilterButton(evt.target);
  }
}, DEBOUNCE_DELAY));

export { setFilters };
