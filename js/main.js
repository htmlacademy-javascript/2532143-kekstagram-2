import './picture-editor.js';
import './user-form-validate.js';
import {getData} from './utils/server-api.js';
import {renderCards} from './thumbnails.js';
import {showErrorMessage} from './utils/show-error.js';
import { filterConfig } from './filter-setting.js';


getData()
  .then((data) => {
    filterConfig(data);
    renderCards(data);
  })
  .catch((error) => showErrorMessage(error.message));
