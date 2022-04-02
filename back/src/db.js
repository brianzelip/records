import fp from 'fastify-plugin';
import mongoose from 'mongoose';

const { connect, connection } = mongoose;

/**
 * @name mongoosePlugin
 * @param {Object} fastify Fastify instance
 * @param {Object} options Plugin options; requires `uri` property with
 * MongoDB connection string value
 * @param {Function} done Tells Fastify to move on to next plugin
 * @description Connect to MongoDB via Mongoose.js and decorate fastify
 * with the `records` collection.
 * @example `fastify.records.find({})`
 */
async function mongoosePlugin(fastify, options, done) {
  try {
    await connect(options.uri);
    console.log('DB connected!');
  } catch (err) {
    console.log(err);
  }

  fastify.decorate('records', connection.collection('records')); // usage example: `fastify.records.find({})`

  done();
}

export default fp(mongoosePlugin);
