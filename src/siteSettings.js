import { join } from 'path';
import { readFileSync } from 'fs';

import dirname from '@bzelip/dirname';

import { countriesFull } from './data/countries.js';
import genres from './data/genres.js';

const __dirname = dirname(import.meta.url);
const pkg = JSON.parse(
  readFileSync(join(__dirname, '../package.json'), 'utf8')
);

export default {
  title: `${pkg.author.name}'s Record Collection`,
  description: pkg.description,
  author: { name: pkg.author.name, uri: pkg.author.url },
  github: pkg.repository.url,
  countriesFull,
  genres
};
