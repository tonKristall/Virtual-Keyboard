import { LOCALSTORAGE_KEYS } from '../const';

const config = {
  lang: localStorage.getItem(LOCALSTORAGE_KEYS.lang) ? localStorage.getItem(LOCALSTORAGE_KEYS.lang) : 'en',
};

export default config;
