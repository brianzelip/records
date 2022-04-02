import fp from 'fastify-plugin';
import mongoose from 'mongoose';

const { model } = mongoose;

/**
 * @name modelPlugin
 * @param {Object} fastify Fastify instance
 * @param {Object} opts Plugin options
 * @param {Function} done Tells Fastify to move on to next plugin
 * @description Decorate Fastify with recordModel
 * @example `new fastify.recordModel({ title: '', artist: '' })`
 */
function modelPlugin(fastify, opts, done) {
  fastify.decorate('recordModel', model('Record', fastify.recordSchema));
  done();
}

export default fp(modelPlugin);
