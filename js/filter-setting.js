
import { debounce } from './utils/util.js';
import { FILTER, SORTFUNC } from './consts.js';
import { renderFilter } from './render-filter-pictures.js';
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';
const filterElement = document.querySelector('.img-filters');
let currentFilter = FILTER.default;
let pictures = [];

const debounceRender = debounce(renderFilter);

const onFilterChange = (evt) => {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);
  if (!targetButton.matches('button')) {
    return;
  }
  if (activeButton === targetButton) {
    return;
  }
  activeButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
};

function applyFilter () {
  let filteredPictures = [];
  switch (currentFilter) {
    case FILTER.default:
      filteredPictures = pictures;
      break;
    case FILTER.random:
      filteredPictures = pictures.toSorted(SORTFUNC.RANDOM_VALUE).slice(0, SORTFUNC.MAXCOUNT);
      break;
    case FILTER.discussed:
      filteredPictures = pictures.toSorted(SORTFUNC.DISCUSSED_VALUE);
      break;
  }
  debounceRender(filteredPictures);
}

export function filterConfig(picturesData) {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
  pictures = picturesData;
}
