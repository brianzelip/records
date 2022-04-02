import { reactive } from 'vue';

import pkg from '../package.json';
import { countriesFull as COUNTRIES } from './data/countries.js';
import GENRES from './data/genres.js';
import SIZES from './data/sizes';
import YEARS from './data/years';

export const site = reactive({
  title: `BZ's Records`,
  description: `${pkg.description}`,
  author: {
    name: `${pkg.author.name}`,
    url: `${pkg.author.url}`
  },
  github: `${pkg.repository.url}`
});

export const countries = reactive(COUNTRIES);
export const genres = reactive(GENRES);
export const sizes = reactive(SIZES);
export const years = reactive(YEARS);
