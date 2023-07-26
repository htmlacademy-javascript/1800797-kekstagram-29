import { getPhotos } from './data.js';
import { PHOTOS } from './constance.js';
import { renderThumbnail } from './thumbnail.js';

renderThumbnail(getPhotos(PHOTOS));
