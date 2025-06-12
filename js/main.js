import {generatePhotos} from './photo-generator.js';

import { renderCards } from './thumbnails.js';

renderCards(generatePhotos());

