import { reactive } from 'vue';

import pkg from '../package.json';
import { countriesFull as COUNTRIES } from './data/countries.js';
import GENRES from './data/genres.js';

export const site = reactive({
  title: `${pkg.author.name}'s Record Collection`,
  description: `${pkg.description}`,
  author: {
    name: `${pkg.author.name}`,
    url: `${pkg.author.url}`
  },
  github: `${pkg.repository.url}`
});

export const countries = reactive(COUNTRIES);

export const genres = reactive(GENRES);
