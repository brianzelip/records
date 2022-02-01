// Ajv JSON schema validator, https://ajv.js.org/json-schema.html
import { countries } from './data/countries.js';

const phonographOriginYear = 1877;
const nowYear = new Date().getFullYear();
const genres = [
  'soul',
  'jazz',
  'funk',
  'reggae',
  'rock',
  'hip hop',
  '80s',
  'country',
  'comedy',
  'soundtrack',
  'children',
  'punk'
];
const minCopies = 1;
const maxCopies = 100;

const recordSchema = {
  type: 'object',
  required: ['title', 'artists'],
  properties: {
    title: { type: 'string' },
    artists: {
      type: 'array',
      uniqueItems: true,
      items: { type: 'string' }
    },
    labels: {
      type: 'array',
      uniqueItems: true,
      items: { type: 'string' }
    },
    year: {
      type: 'integer',
      minimum: phonographOriginYear,
      maximum: nowYear
    },
    genres: {
      type: 'array',
      uniqueItems: true,
      items: {
        type: 'string',
        enum: genres
      }
    },
    copies: {
      type: 'integer',
      minimum: minCopies,
      maximum: maxCopies
    },
    country: {
      type: 'string',
      enum: countries
    }
  }
};

export default recordSchema;
