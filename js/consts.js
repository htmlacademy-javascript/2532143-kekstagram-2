export const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const EFFECTS_SETTING = {
  [EFFECTS.NONE]: {
    slider: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    },
    style: 'none',
    token: ''
  },
  [EFFECTS.CHROME]: {
    slider: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    },
    style: 'grayscale',
    token: ''
  },
  [EFFECTS.SEPIA]: {
    slider: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    },
    style: 'sepia',
    token: ''
  },
  [EFFECTS.MARVIN]: {
    slider: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    },
    style: 'invert',
    token: '%'
  },
  [EFFECTS.PHOBOS]: {
    slider: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    },
    style: 'blur',
    token: 'px'
  },
  [EFFECTS.HEAT]: {
    slider: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    },
    style: 'brightness',
    token: ''
  },
};

export const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed'
};

export const SCALE_CONFIG = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

export const URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

export const ROUTE = {
  getData: '/data',
  sendData: '/'
};

export const METHOD = {
  GET: 'GET',
  POST: 'POST'
};

export const ERROR_TEXT = {
  'GET': 'Не удалось загрузить данные. Повторите попытку.',
  'POST': 'Не удалось отправить данные.'
};

export const SUBMIT_BUTTON_TEXT = {
  Presending: 'Опубликовать',
  Sending: 'Публикуем...'
};

export const VALIDATE = {
  MAXHASHTAGSYMBOLS: 20,
  MAXHASHTAGS: 5,
  MAXCOMMENTSYMBOLS: 140
};

export const rulesChecker = (hashtags) => {
  const rules = [
    {
      check: hashtags.some((item) => item.length > VALIDATE.MAXHASHTAGSYMBOLS),
      error: `Количество символов не должно превышать ${VALIDATE.MAXHASHTAGSYMBOLS}`,
    },
    {
      check: hashtags.some((item) => item[0] !== '#'),
      error: 'Хэштег должен начинаться с решетки',
    },
    {
      check: hashtags.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'Хэштег содержит недопустимые символы',
    },
    {
      check: hashtags.some((item) => item.slice(1).includes('#')),
      error: 'Хэштеги разделяются пробелами'
    },
    {
      check: hashtags.some((item, num) => hashtags.includes(item, num + 1)),
      error: 'Хэштеги не должны повторяться'
    },
    {
      check: hashtags.length > VALIDATE.MAXHASHTAGS,
      error: `Максимально допустимое количество хэштегов - ${VALIDATE.MAXHASHTAGS}`
    }
  ];
  return rules;
};

export const SORTFUNC = {
  GET_RANDOM: () => 0.5 - Math.random(),
  GET_DISCUSSED: (a, b) => b.comments.length - a.comments.length,
  MAXCOUNT: 10
};

export const IMAGE_TYPES = ['jpg', 'jpeg', 'png', 'gif', 'jtif'];
