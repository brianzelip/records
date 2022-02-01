import fp from 'fastify-plugin';
import mongoose from 'mongoose';

import { countries } from './data/countries.js';
import genres from './data/genres.js';

const { Schema } = mongoose;

/**
 * @name schemaPlugin
 * @param {Object} fastify Fastify instance
 * @param {Object} opts Plugin options
 * @param {Function} done Tells Fastify to move on to next plugin
 * @description Decorate Fastify with recordSchema
 * @example `mongoose.model('Record', fastify.recordSchema)`
 */
function schemaPlugin(fastify, opts, done) {
  const phonographOriginYear = 1877;
  const nowYear = new Date().getFullYear();

  const recordSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    artist: {
      type: [String],
      required: true
    },
    label: [String],
    year: {
      type: Number,
      min: phonographOriginYear,
      max: nowYear
    },
    genre: {
      type: [String],
      enum: genres
    },
    copies: {
      type: Number,
      min: 1
    },
    country: {
      type: String,
      enum: countries
    }
  });

  fastify.decorate('recordSchema', recordSchema);

  done();
}

export default fp(schemaPlugin);
