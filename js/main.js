import {generatePhotos} from './photo-generator.js';
import {renderCards} from './thumbnails.js';
import './picture-editor.js';
import './user-form-validate.js';

renderCards(generatePhotos());

