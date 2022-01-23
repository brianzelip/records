// Ajv JSON schema validator, https://ajv.js.org/json-schema.html

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

const recordSchema = {
  type: 'object',
  required: ['title', 'artist'],
  properties: {
    title: { type: 'string' },
    artist: { type: 'string' },
    label: { type: 'string' },
    year: {
      type: 'number',
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
    }
  }
};

export default recordSchema;
