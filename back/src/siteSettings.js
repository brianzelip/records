import { dirname, join } from 'path';
import { readFileSync } from 'fs';

import { countriesFull } from './data/countries.js';
import genres from './data/genres.js';

const __dirname = dirname(new URL(import.meta.url).pathname);
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
