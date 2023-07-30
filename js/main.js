import { getPhotos } from './data.js';
import { PHOTOS } from './constance.js';
import { renderThumbnail } from './thumbnail.js';
import './form.js';

renderThumbnail(getPhotos(PHOTOS));
